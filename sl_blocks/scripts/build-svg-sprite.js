import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgDir = path.resolve(__dirname, '../src/images/svg');
const spriteOutputDir = path.resolve(__dirname, '../src/images');
const componentsDir = path.resolve(__dirname, '../src/components');

function buildSvgSprite() {
  if (!fs.existsSync(svgDir)) {
    console.log('⚠️  SVG directory not found');
    return;
  }

  const svgFiles = fs.readdirSync(svgDir).filter(file => file.endsWith('.svg'));

  if (svgFiles.length === 0) {
    console.log('⚠️  No SVG files found');
    // Создаем пустой спрайт
    const emptySprite = '<div style="display: none;"><svg xmlns="http://www.w3.org/2000/svg"></svg></div>';
    fs.writeFileSync(path.join(componentsDir, 'svg-sprite.html'), emptySprite);
    return;
  }

  let spriteContent = '<div style="display: none;">\n  <svg xmlns="http://www.w3.org/2000/svg">\n';

  svgFiles.forEach(file => {
    const filePath = path.join(svgDir, file);
    const svgContent = fs.readFileSync(filePath, 'utf-8');
    const symbolId = path.basename(file, '.svg');

    // Извлекаем содержимое SVG (без тега <svg>)
    const match = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
    if (match) {
      const innerContent = match[1];
      const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/i);
      const viewBox = viewBoxMatch ? ` viewBox="${viewBoxMatch[1]}"` : '';

      spriteContent += `    <symbol id="icon-${symbolId}"${viewBox}>\n${innerContent}    </symbol>\n`;
    }
  });

  spriteContent += '  </svg>\n</div>';

  // Сохранение спрайта как HTML компонента
  const spriteComponentPath = path.join(componentsDir, 'svg-sprite.html');
  fs.writeFileSync(spriteComponentPath, spriteContent);
  console.log(`✓ SVG sprite component created: src/components/svg-sprite.html (${svgFiles.length} icons)`);

  // Также сохраняем отдельно SVG файл для справки
  const svgOnlyContent = spriteContent.replace('<div style="display: none;">\n  ', '').replace('\n</div>', '').replace('xmlns="http://www.w3.org/2000/svg"', 'xmlns="http://www.w3.org/2000/svg" style="display: none;"');
  const spritePathSrc = path.join(spriteOutputDir, 'sprite.svg');
  fs.writeFileSync(spritePathSrc, svgOnlyContent);
  console.log(`✓ SVG sprite file saved: src/images/sprite.svg`);
}

buildSvgSprite();
