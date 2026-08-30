/* Shared JS for POC Launcher docs: theme toggle + sidebar nav */

(function () {
  'use strict';

  /* ── Theme ──────────────────────────────────────────────────────────── */
  const root = document.documentElement;

  function setTheme(dark) {
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
    document.querySelectorAll('img[data-light]').forEach(img => {
      const url = dark ? img.dataset.dark : img.dataset.light;
      img.src = url;
      const a = img.parentElement;
      if (a && a.tagName === 'A') a.href = url;
    });
    document.querySelectorAll('.theme-btn').forEach(b => {
      const use = b.querySelector('use');
      if (use) use.setAttribute('href', dark ? '#icon-sun' : '#icon-moon');
      b.title = dark ? 'Светлая тема' : 'Тёмная тема';
    });
  }

  window.toggleTheme = function () {
    setTheme(root.getAttribute('data-theme') !== 'dark');
  };

  let _saved;
  try { _saved = localStorage.getItem('theme'); } catch (e) {}
  setTheme(_saved ? _saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);

  /* ── Mobile nav drawer ───────────────────────────────────────────────── */
  const navToggle  = document.getElementById('navToggle');
  const navOverlay = document.getElementById('navOverlay');
  const mSidebar   = document.querySelector('.sidebar');

  function openNav() {
    mSidebar   && mSidebar.classList.add('open');
    navOverlay && navOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    mSidebar   && mSidebar.classList.remove('open');
    navOverlay && navOverlay.classList.remove('visible');
    document.body.style.overflow = '';
  }
  if (navToggle)  navToggle.addEventListener('click', openNav);
  if (navOverlay) navOverlay.addEventListener('click', closeNav);
  document.querySelectorAll('.nav a').forEach(a =>
    a.addEventListener('click', () => { if (window.innerWidth <= 780) closeNav(); })
  );

  /* ── Mobile table card labels ───────────────────────────────────────── */
  document.querySelectorAll('.content table').forEach(function (table) {
    var ths = Array.from(table.querySelectorAll('thead th'));
    if (!ths.length) return;
    var headers = ths.map(function (th) { return th.textContent.trim(); });
    table.classList.add('mob-card');
    table.querySelectorAll('tbody tr').forEach(function (row) {
      Array.from(row.querySelectorAll('td')).forEach(function (td, i) {
        if (headers[i]) td.dataset.label = headers[i];
      });
    });
  });

  /* ── Sidebar nav highlight (guide pages only) ────────────────────────── */
  const links = document.querySelectorAll('.nav a[href^="#"]');
  if (!links.length) return;

  const targets = Array.from(links).map(a => {
    const id = a.getAttribute('href').slice(1);
    return { a, el: document.getElementById(id) };
  }).filter(t => t.el);

  const setActive = id =>
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));

  let clickLocked = false;
  let unlockTimer = null;

  const unlock = () => {
    if (!clickLocked) return;
    clickLocked = false;
    if (unlockTimer) { clearTimeout(unlockTimer); unlockTimer = null; }
  };

  const updateFromScroll = () => {
    if (clickLocked) return;
    let best = null, bestTop = Infinity;
    const vh = window.innerHeight;
    targets.forEach(({ a, el }) => {
      const top = el.getBoundingClientRect().top;
      if (top >= 0 && top < vh && top < bestTop) { bestTop = top; best = a.getAttribute('href').slice(1); }
    });
    if (best) setActive(best);
  };

  links.forEach(a =>
    a.addEventListener('click', () => {
      clickLocked = true;
      setActive(a.getAttribute('href').slice(1));
      if (unlockTimer) clearTimeout(unlockTimer);
      unlockTimer = setTimeout(() => { clickLocked = false; unlockTimer = null; }, 1500);
    })
  );

  window.addEventListener('wheel',     unlock, { passive: true });
  window.addEventListener('touchmove', unlock, { passive: true });
  window.addEventListener('keydown', e => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) unlock();
  });
  window.addEventListener('scroll', updateFromScroll, { passive: true });
  updateFromScroll();
})();
