/**
 * generate-pdf.js
 * Генерирует 4 PDF-версии резюме:
 *   pdf/resume-ru-dark.pdf
 *   pdf/resume-ru-light.pdf
 *   pdf/resume-en-dark.pdf
 *   pdf/resume-en-light.pdf
 *
 * Использование:
 *   1. npm install puppeteer serve  (один раз)
 *   2. node scripts/generate-pdf.js
 *
 * Требования: Node.js 18+
 */

const puppeteer = require('puppeteer');
const http      = require('http');
const fs        = require('fs');
const path      = require('path');

// ─── Config ───────────────────────────────────────────────────────────────────

const ROOT       = path.resolve(__dirname, '..');
const PDF_DIR    = path.join(ROOT, 'pdf');
const PORT       = 3099;
const BASE_URL   = `http://localhost:${PORT}`;
const VIEWPORT_W = 1440;
const VIEWPORT_H = 900;

const VARIANTS = [
  { lang: 'ru', theme: 'dark'  },
  { lang: 'ru', theme: 'light' },
  { lang: 'en', theme: 'dark'  },
  { lang: 'en', theme: 'light' },
];

// ─── Static file server ───────────────────────────────────────────────────────

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.svg':  'image/svg+xml',
  '.webp': 'image/webp',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.pdf':  'application/pdf',
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let urlPath = req.url.split('?')[0];
      if (urlPath === '/' || urlPath === '') urlPath = '/index.html';
      const filePath = path.join(ROOT, urlPath);
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        res.writeHead(404); res.end('Not found'); return;
      }
      const ext  = path.extname(filePath);
      const mime = MIME[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': mime });
      fs.createReadStream(filePath).pipe(res);
    });
    server.listen(PORT, () => { console.log(`Server: ${BASE_URL}`); resolve(server); });
  });
}

// ─── PDF generation ───────────────────────────────────────────────────────────

async function screenshotIframe(browser, src, width, height) {
  const tab = await browser.newPage();
  try {
    await tab.setViewport({ width: Math.round(width) || 600, height: Math.round(height) || 400, deviceScaleFactor: 2 });
    // 'load' is more reliable than networkidle0 for animation-heavy pages
    await tab.goto(src, { waitUntil: 'load', timeout: 30000 });
    // Extra settle time for JS animations and lazy assets
    await new Promise(r => setTimeout(r, 3000));
    const base64 = await tab.screenshot({ encoding: 'base64', type: 'jpeg', quality: 90 });
    return base64;
  } catch (e) {
    // Retry once with longer timeout
    try {
      await tab.goto(src, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await new Promise(r => setTimeout(r, 4000));
      const base64 = await tab.screenshot({ encoding: 'base64', type: 'jpeg', quality: 90 });
      return base64;
    } catch (e2) {
      console.log(`   iframe failed (${src}): ${e2.message}`);
      return null;
    }
  } finally {
    await tab.close();
  }
}

async function generatePdf(page, browser, lang, theme) {
  const filename = `resume-${lang}-${theme}.pdf`;
  const outPath  = path.join(PDF_DIR, filename);

  console.log(`\n→ ${filename}`);

  // Set localStorage before page load via CDP
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  await page.evaluate((l, t) => {
    localStorage.setItem('lang',  l);
    localStorage.setItem('theme', t);
  }, lang, theme);

  // Reload so i18n + theme initialize from localStorage
  await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 60000 });

  // Remove lazy loading — force all images to load eagerly
  await page.evaluate(() => {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      img.removeAttribute('loading');
      const src = img.getAttribute('src');
      if (src) { img.src = ''; img.src = src; }
    });
  });

  // Screenshot each iframe URL in a separate tab and replace with <img>
  const iframeData = await page.evaluate(() =>
    Array.from(document.querySelectorAll('iframe')).map((f, i) => ({
      index: i,
      src:    f.src,
      width:  f.offsetWidth  || f.parentElement.offsetWidth  || 600,
      height: f.offsetHeight || f.parentElement.offsetHeight || 400,
    }))
  );

  for (const { index, src, width, height } of iframeData) {
    if (!src) continue;
    console.log(`   iframe → ${src}`);
    const base64 = await screenshotIframe(browser, src, width, height);
    if (!base64) continue;
    await page.evaluate((iframeSrc, b64) => {
      const iframe = Array.from(document.querySelectorAll('iframe')).find(f => f.src === iframeSrc);
      if (!iframe) return;
      const img = document.createElement('img');
      img.src              = 'data:image/jpeg;base64,' + b64;
      img.style.width      = '100%';
      img.style.height     = '100%';
      img.style.objectFit  = 'cover';
      img.style.objectPosition = 'top left';
      img.style.display    = 'block';
      iframe.parentNode.replaceChild(img, iframe);
    }, src, base64);
  }

  // Wait for all images to finish loading
  await page.evaluate(async () => {
    const imgs = Array.from(document.querySelectorAll('img'));
    await Promise.all(imgs.map(img => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return new Promise(resolve => {
        img.addEventListener('load',  resolve, { once: true });
        img.addEventListener('error', resolve, { once: true });
        setTimeout(resolve, 8000); // 8s timeout per image
      });
    }));
  });

  // Inject PDF-mode styles:
  // 1. Force all _scr-item visible (bypass scroll animation)
  // 2. Remove min-height from hero so it doesn't inflate the canvas
  // 3. Kill all transitions/animations
  await page.addStyleTag({
    content: `
      ._scr-item {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
      .hero {
        min-height: 0 !important;
      }
      .hero__photo {
        overflow: hidden !important;
        border-radius: 20px !important;
        background: transparent !important;
      }
      .hero__photo img {
        border-radius: 0 !important;
        display: block !important;
        box-shadow: none !important;
      }
      *, *::before, *::after {
        transition: none !important;
        animation: none !important;
      }
    `
  });

  // Force layout reflow so styles are applied before measuring
  await page.evaluate(() => {
    document.body.getBoundingClientRect();
    window.scrollTo(0, 0);
  });

  // Settle delay for images/fonts/webp to render
  await new Promise(r => setTimeout(r, 1200));

  // Get full page height after all content is visible
  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);

  await page.pdf({
    path: outPath,
    width:       `${VIEWPORT_W}px`,
    height:      `${bodyHeight}px`,
    printBackground: true,
    pageRanges:  '1',
    margin:      { top: 0, right: 0, bottom: 0, left: 0 },
  });

  console.log(`   saved → pdf/${filename}`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

(async () => {
  if (!fs.existsSync(PDF_DIR)) fs.mkdirSync(PDF_DIR, { recursive: true });

  const server  = await startServer();
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: VIEWPORT_W, height: VIEWPORT_H, deviceScaleFactor: 2 });

    for (const { lang, theme } of VARIANTS) {
      await generatePdf(page, browser, lang, theme);
    }

    console.log('\n✓ All 4 PDFs generated in /pdf/');
  } finally {
    await browser.close();
    server.close();
  }
})();
