# ТЗ: Рефакторинг резюме-сайта BDemetrix.github.io

**Исполнитель:** workflow-13-resume.md
**Файл:** `/Users/dmitry/FreeWork/BDemetrix.github.io/index.html`
**Цель:** Обновить сайт-резюме до уровня Senior Developer portfolio — современный, адаптивный, SEO-оптимизированный

---

## 1. Контекст и ограничения

### Что сохранить
- Основной цвет фона карточки: `rgb(30, 41, 57)` — `#1e2939`
- Акцентный цвет: `#ff6b08` (оранжевый)
- Шрифт: Montserrat (уже подключён локально через `woff2/woff`)
- JS-эффекты: scroll-анимации (`._ scr-item` — появление при скролле), `data-da` — динамическое перемещение DOM-элементов между брейкпоинтами
- Фото: `images/i-am.jpg` / `images/i-am.webp`
- Favicon: `favicon.ico`
- Связка: `css/style.min.css`, `js/vendors.min.js`, `js/app.min.js`

### Что менять
- Структура HTML — полный рефакторинг (не трогая JS-логику)
- Контент — заменить устаревший на актуальный (из резюме ниже)
- Добавить секции: Hero, Skills (по категориям), Projects (карточки + iframe/скриншоты), Experience (timeline), Education, Contacts
- Добавить: sticky-header, dark/light toggle, back-to-top, CTA-кнопка скачать PDF
- Старые проекты (HTML/CSS/JS) **не удалять** — переместить в отдельный приглушённый блок «От вёрстки к архитектуре» (см. раздел 4.3)
- Убрать: устаревшие текстовые формулировки («I independently learned the basics» и подобное)

---

## 2. Структура страницы (one-page)

```
1. Header (sticky)          — имя, навигация, lang-toggle (RU/EN), theme-toggle (dark/light)
2. Hero                     — имя, должность, CTA-кнопки
3. About                    — краткое профессиональное резюме
4. Skills                   — по категориям (grid/tags)
5. Experience               — timeline работ (5 позиций)
6. Projects                 — карточки с iframe/скриншот + стек + ссылка (актуальные)
              ↳ подсекция   — «От вёрстки к архитектуре» (старые HTML/CSS проекты, приглушённо)
7. Education                — ВУЗ + доп. инфо
8. Contacts                 — TG, email, GitHub (прямые ссылки, без формы)
9. Footer                   — минималистичный
```

---

## 3. Контент

### 3.1 Hero
```
Заголовок:   Дмитрий Богданов
Подзаголовок: Frontend Developer · Vue.js · Flutter · 4+ лет коммерческого опыта
CTA-кнопки:
  [Скачать резюме PDF]   →  /resume.pdf
  [Написать в Telegram]  →  https://t.me/Meaning_Driven
Локация:     📍 Санкт-Петербург · Remote
```

### 3.2 About (профессиональное резюме)
```
Фронтенд-разработчик с 4+ годами коммерческого опыта. Специализируюсь на разработке
интерфейсов для маркетплейсов, CRM и биллинговых систем на Vue.js. Руководил командой
при создании кроссплатформенного мобильного приложения на Flutter (iOS/Android).

Применяю Clean Architecture, SOLID, DRY, KISS, YAGNI. Работаю в OOP и функциональной
парадигмах. Участвовал в полном цикле разработки: от анализа бизнес-задач до деплоя
в продакшн.

Интересна позиция Mid+/Senior Frontend Developer (remote) в продуктовой или аутсорс-компании
с нетривиальными техническими задачами.
```

### 3.3 Skills (по категориям)

| Категория | Навыки |
|-----------|--------|
| Языки | JavaScript (ES6+), TypeScript, Dart, базовый PHP, Python, SQL |
| Фреймворки | Vue 3 (Composition API, Pinia, Vue Router), Flutter, Electron.js |
| Нативная разработка | Android (Kotlin/Java — основы) |
| Архитектура | Clean Architecture, SOLID, DRY, KISS, YAGNI |
| Стейт | Pinia, Vuex, BLoC |
| Сборка | Vite, Webpack, Gulp |
| HTTP/API | REST API, WebSocket, Axios |
| Инфраструктура | Git, GitHub, Docker (основы), Nginx (основы) |
| Процессы | Agile, Scrum, Kanban, Code Review |


### 3.4 Work Experience (6 позиций, timeline)

**1. Android-приложение** [2026 — настоящее время, Remote]
Роль: Tech Lead / Android Developer
Tech: Kotlin, Jetpack Compose, Android SDK
- Ведётся активная разработка нативного Android-приложения
- UI на Jetpack Compose

**2. Кроссплатформенное Desktop-приложение** [2026, Remote]
Tech: Electron.js, Vue 3, Pinia, TypeScript, Vite, WebSocket, Node.js
- Уникальный UI для Windows/macOS/Linux на Electron.js
- Оптимизация тяжёлых операций через Web Workers — убрал фризы UI
- Инициировал переход на более эффективные структуры данных - перешли от сложности O(n) O(n^2) к O(1) O(log(n)) 

**2. Смарт Кард — мобильное приложение** [2023–2025, Remote]
Роль: Tech Lead / Flutter Developer
Tech: Flutter, Dart, Clean Architecture, Git, Agile
- Тимлид команды из 4 разработчиков (из них 2 - бекенд)
- Проектировал архитектуру на Clean Architecture + SOLID
- Выпуск в App Store и Google Play, довёл до бета-тестирования

**3. Sota — Биллинговая платформа** [2023, Remote]
Tech: HTML5, CSS3, JavaScript, REST API, Symfony, Twig
- Управление тарифами, подписками, историей транзакций
- Сложные таблицы с сортировкой, фильтрацией, пагинацией (десятки тысяч записей)

**4. M16.TECH — Foodtech платформа** [2021–2023, Remote]
Tech: Vue 3, HTML5, CSS3, JavaScript, Vuex, Vue Router, Webpack, REST API, Smarty
- Интерфейсы маркетплейса: каталог, карточки, CRM для агентов
- Рефакторинг legacy — сократил объём компонентов на ~30%
- Проектирование API-контрактов совместно с бэкенд-командой

**5. Пкаско — Сервис автострахования** [2022, Remote]
Tech: HTML5, CSS3, JavaScript
- Рефакторинг пользовательских сценариев оформления КАСКО/ОСАГО

> Все компании — заказчики ООО «Инлайн» (основное место работы)

### 3.5 Contacts

Секция с тремя прямыми CTA-кнопками (без формы — GitHub Pages не поддерживает бэкенд):

```
[Написать в Telegram]  →  https://t.me/Meaning_Driven    (primary CTA)
[Написать на email]    →  mailto:b.demetrix@gmail.com
[GitHub профиль]       →  https://github.com/BDemetrix

Телефон (текстом, не кнопка):  +7 911 257 35 86
```

### 3.6 Education
```
Донецкий национальный университет, факультет физики
Магистр физики, преподаватель
2000–2005, г. Донецк (Украина)
```

---

## 4. Секция Projects — демонстрация работ

Для каждого проекта: **iframe** (предпочтительно) или **статичный скриншот** (`<img>`) если iframe заблокирован политикой безопасности сайта.

### 4.1 Карточка проекта (структура HTML)

```html
<div class="project-card">
  <div class="project-card__preview">
    <!-- iframe или img-скриншот -->
    <iframe src="URL" loading="lazy" title="Название" sandbox="allow-scripts allow-same-origin"></iframe>
    <!-- fallback скриншот -->
    <img src="images/projects/project-name.webp" alt="Название проекта" loading="lazy">
  </div>
  <div class="project-card__info">
    <h3>Название</h3>
    <p>Краткое описание</p>
    <div class="project-card__stack">Vue 3 · REST API · ...</div>
    <a href="URL" target="_blank" class="btn btn--outline">Смотреть →</a>
  </div>
</div>
```

### 4.2 Список проектов для демонстрации

| # | Название | URL | Стек | Тип превью |
|---|----------|-----|------|------------|
| 1 | FlexTable — плагин таблиц | https://bdemetrix.github.io/blocks/FlexTable | HTML, CSS, JS | iframe |
| 2 | smartlab.news — вёрстка | https://smartlab.news | HTML, CSS, JS | скриншот |
| 3 | AOD — лендинг велосипедного бренда | https://bdemetrix.github.io/AOD | HTML, CSS, JS | iframe |
| 4 | Mavic — лендинг квадрокоптера | https://bdemetrix.github.io/Mavic | HTML, CSS, JS | iframe |
| 5 | Logo — интернет-магазин | https://bdemetrix.github.io/Logo | HTML, CSS, JS | iframe |
| 6 | Luxtrader — онлайн-аукцион | https://bdemetrix.github.io/Luxtrader | HTML, CSS, JS | iframe |
| 7 | MISOCIAL — адаптивная верстка | https://bdemetrix.github.io/MISOCIAL | HTML, CSS, JS | iframe |
| 8 | Flutter Demo App (GitHub) | https://github.com/BDemetrix/flutter-example | Flutter, Dart, Clean Architecture | скриншот |

**Скриншоты хранить:** `images/projects/*.webp`
**Требования к скриншотам:** 800×500px, WebP, ≤ 100KB

### 4.3 Подсекция «От вёрстки к архитектуре»

Визуально отделена от основных проектов: меньший шрифт, приглушённые цвета (`--color-text-muted`), без iframe-превью.

**Заголовок блока:** `От вёрстки к архитектуре`
**Подзаголовок:** `Здесь начинался мой путь в разработку — освоение HTML/CSS/JS, вёрстка по макетам, первые коммерческие работы`

**Формат:** горизонтальный список ссылок-тегов (не карточки)

```html
<section class="projects__roots">
  <h3 class="projects__roots-title">От вёрстки к архитектуре</h3>
  <p class="projects__roots-subtitle">Здесь начинался мой путь...</p>
  <ul class="projects__roots-list">
    <li><a href="https://bdemetrix.github.io/blocks/FlexTable" target="_blank">FlexTable plugin</a></li>
    <li><a href="https://smartlab.news" target="_blank">smartlab.news</a></li>
    <li><a href="https://bdemetrix.github.io/AOD" target="_blank">AOD — велобренд</a></li>
    <li><a href="https://bdemetrix.github.io/Mavic" target="_blank">Mavic — квадрокоптер</a></li>
    <li><a href="https://bdemetrix.github.io/Logo" target="_blank">Logo — интернет-магазин</a></li>
    <li><a href="https://bdemetrix.github.io/Luxtrader" target="_blank">Luxtrader — аукцион</a></li>
    <li><a href="https://bdemetrix.github.io/MISOCIAL" target="_blank">MISOCIAL — адаптив</a></li>
  </ul>
</section>
```

**CSS-стиль тегов:**
```css
.projects__roots-list a {
  display: inline-block;
  padding: 4px 12px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  color: var(--color-text-muted);
  font-size: 13px;
  transition: color 0.2s, border-color 0.2s;
}
.projects__roots-list a:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}
```

---

## 5. Дизайн-требования

### 5.1 Цвета (CSS-переменные)

```css
:root {
  /* Dark theme (default) */
  --color-bg:         #0f1724;         /* основной фон */
  --color-surface:    rgb(30, 41, 57); /* #1e2939 — карточки, хедер */
  --color-surface-2:  #263347;         /* hover-состояния */
  --color-accent:     #ff6b08;         /* акцент (оранжевый) */
  --color-text:       #e8eaf0;         /* основной текст */
  --color-text-muted: #8892a4;         /* второстепенный текст */
  --color-border:     #2d3d52;

  /* Light theme */
  --color-bg:         #f5f7fa;
  --color-surface:    #ffffff;
  --color-surface-2:  #f0f2f5;
  --color-text:       #1e2939;
  --color-text-muted: #696969;
  --color-border:     #e0e4ea;
}
```

### 5.2 Типографика

```css
font-family: "montserrat", system-ui, sans-serif;

/* Размеры (fluid) */
h1: clamp(32px, 5vw, 56px)
h2: clamp(22px, 3vw, 32px)
h3: clamp(16px, 2vw, 20px)
body: 14–16px
```

### 5.3 Брейкпоинты (mobile-first)

| Брейкпоинт | Ширина |
|------------|--------|
| xs | < 480px |
| sm | 480–767px |
| md | 768–1023px |
| lg | 1024–1199px |
| xl | ≥ 1200px |

### 5.4 Сетка

- `max-width: 1200px`, `padding: 0 20px`
- Hero: full-width с фото справа (lg+), стек на md и ниже
- Skills: grid `repeat(auto-fill, minmax(200px, 1fr))`
- Projects: grid `repeat(auto-fill, minmax(300px, 1fr))`
- Experience: timeline (вертикальная линия слева)

### 5.5 Анимации (переиспользовать JS-логику `_scr-item`)

```css
/* Появление при скролле — уже в app.js */
._scr-item {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
._scr-item._active {
  opacity: 1;
  transform: translateY(0);
}
```

Дополнительно:
- Hover на карточках проектов: `transform: translateY(-4px)`, `box-shadow`
- Hover на ссылках навыков: подсветка акцентом
- Плавный скролл: `scroll-behavior: smooth`
- Back-to-top: появляется после 300px скролла

---

## 6. Технические требования

### 6.1 HTML

- Семантическая разметка: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- BEM-именование классов
- `lang="ru"`, все `meta` теги, Open Graph
- Фото в `<picture>` с `source type="image/webp"`
- Все изображения: `loading="lazy"`, `alt`
- Кнопка скачивания PDF: `<a href="/resume.pdf" download>`

### 6.2 CSS

- Чистый CSS без фреймворков (Bootstrap не нужен)
- CSS-переменные для тем
- Mobile-first медиазапросы
- Минимизировать до `css/style.min.css`

### 6.3 Темы (dark / light)

Переключатель в хедере. Тема сохраняется в `localStorage`, при первом визите определяется через `prefers-color-scheme`.

```html
<!-- Inline в <head> — до рендера, без мигания -->
<script>
  const theme = localStorage.getItem('theme')
    || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
</script>
```

```css
/* Переключение через data-theme на <html> */
[data-theme="dark"]  { /* переменные из раздела 5.1 dark  */ }
[data-theme="light"] { /* переменные из раздела 5.1 light */ }
```

### 6.4 Локализация (RU / EN)

Две языковые версии без роутинга — переключение через `data-lang` на `<html>` + `localStorage`.

**Реализация:**
- Все текстовые строки вынести в JS-объект `i18n = { ru: {...}, en: {...} }`
- При переключении — скрипт проходит по `[data-i18n="key"]` и подставляет текст
- `<html lang="ru">` / `<html lang="en">` меняется программно
- Выбранный язык сохраняется в `localStorage('lang')`

```html
<!-- Пример разметки -->
<h1 data-i18n="hero.name">Дмитрий Богданов</h1>
<p data-i18n="hero.subtitle">Frontend Developer · Vue.js · Flutter · Android</p>
```

```js
// js/i18n.js (добавить в app.js или отдельным файлом)
const i18n = {
  ru: {
    'hero.name': 'Дмитрий Богданов',
    'hero.subtitle': 'Frontend Developer · Vue.js · Flutter · 4+ лет опыта',
    'nav.about': 'Обо мне',
    'nav.skills': 'Навыки',
    'nav.experience': 'Опыт',
    'nav.projects': 'Проекты',
    'nav.contacts': 'Контакты',
    // ... все строки
  },
  en: {
    'hero.name': 'Dmitry Bogdanov',
    'hero.subtitle': 'Frontend Developer · Vue.js · Flutter · 4+ years experience',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contacts': 'Contacts',
    // ... все строки
  }
};
```

**Переключатели в хедере** — два компактных icon-кнопки рядом, правый угол хедера:

```html
<div class="header__controls">

  <!-- Переключатель языка: иконка глобуса + текст RU/EN -->
  <button class="btn-icon lang-toggle" aria-label="Switch language" title="Switch language">
    <svg class="btn-icon__svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <!-- globe icon (Feather Icons: globe) -->
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
    <span class="btn-icon__label" data-lang-label>RU</span>
  </button>

  <!-- Переключатель темы: иконка солнца (light) / луны (dark) -->
  <button class="btn-icon theme-toggle" aria-label="Toggle theme" title="Toggle theme">
    <!-- Sun icon — показывается в dark-теме (переключиться на light) -->
    <svg class="btn-icon__svg btn-icon__svg--sun" width="18" height="18" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
    <!-- Moon icon — показывается в light-теме (переключиться на dark) -->
    <svg class="btn-icon__svg btn-icon__svg--moon" width="18" height="18" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  </button>

</div>
```

```css
/* Контейнер кнопок */
.header__controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Базовая icon-кнопка */
.btn-icon {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 10px;
  border-radius: 8px;
  background: transparent;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
  font-size: 13px;
  font-family: inherit;
}

.btn-icon:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: color-mix(in srgb, var(--color-accent) 8%, transparent);
}

/* Иконки темы — показывать нужную в зависимости от data-theme */
[data-theme="dark"]  .btn-icon__svg--sun  { display: block; }
[data-theme="dark"]  .btn-icon__svg--moon { display: none;  }
[data-theme="light"] .btn-icon__svg--sun  { display: none;  }
[data-theme="light"] .btn-icon__svg--moon { display: block; }

/* На мобильном — убрать текстовый лейбл языка, оставить только иконку */
@media (max-width: 480px) {
  .btn-icon__label { display: none; }
  .btn-icon { padding: 6px 8px; }
}
```

**SEO для двух языков:**
```html
<link rel="alternate" hreflang="ru" href="https://bdemetrix.github.io/">
<link rel="alternate" hreflang="en" href="https://bdemetrix.github.io/">
<!-- lang меняется динамически, контент индексируется по умолчанию (ru) -->
```

### 6.5 JavaScript (общее)

- Переиспользовать `js/vendors.min.js` и `js/app.min.js`
- Добавить `js/i18n.js` — словари и логика переключения языка
- Theme toggle и lang toggle — inline-инициализация в `<head>` (без мигания)
- Никаких новых внешних зависимостей

### 6.6 SEO

```html
<title>Дмитрий Богданов — Frontend Developer | Vue.js, Flutter, TypeScript</title>
<meta name="description" content="Frontend Developer с 4+ годами опыта. Vue.js, Flutter, TypeScript. Разработка маркетплейсов, CRM, мобильных приложений. Санкт-Петербург, Remote.">
<meta name="keywords" content="frontend developer, Vue.js, Flutter, TypeScript, резюме, Санкт-Петербург">

<!-- Open Graph -->
<meta property="og:title" content="Дмитрий Богданов — Frontend Developer">
<meta property="og:description" content="Frontend Developer | Vue.js · Flutter · TypeScript">
<meta property="og:image" content="https://bdemetrix.github.io/images/og-preview.jpg">
<meta property="og:url" content="https://bdemetrix.github.io">

<!-- Schema.org Person -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Дмитрий Богданов",
  "jobTitle": "Frontend Developer",
  "url": "https://bdemetrix.github.io",
  "sameAs": ["https://github.com/BDemetrix", "https://t.me/Meaning_Driven"],
  "email": "b.demetrix@gmail.com",
  "telephone": "+79112573586",
  "address": { "@type": "PostalAddress", "addressLocality": "Санкт-Петербург" }
}
</script>
```

### 6.7 Производительность (цель: PageSpeed 100/100)

- WebP для всех изображений + `<picture>` fallback
- Шрифты только локальные (уже есть `woff2/woff`), убрать Google Fonts import
- CSS/JS минифицированы
- iframe проектов: `loading="lazy"`

---

## 7. Файловая структура

```
BDemetrix.github.io/
├── index.html
├── resume.pdf                    ← PDF-версия резюме для скачивания
├── favicon.ico
├── css/
│   ├── style.css                 ← исходник
│   └── style.min.css             ← подключается в HTML
├── js/
│   ├── app.js                    ← исходник (scroll-анимации, data-da, theme-toggle, lang-toggle)
│   ├── app.min.js
│   ├── i18n.js                   ← словари RU/EN + логика переключения
│   └── vendors.min.js
├── fonts/                        ← Montserrat (уже есть)
└── images/
    ├── i-am.jpg / i-am.webp      ← фото (уже есть)
    ├── og-preview.jpg            ← Open Graph превью (800×420px)
    └── projects/                 ← скриншоты портфолио
        ├── flextable.webp
        ├── smartlab-news.webp
        ├── aod.webp
        ├── mavic.webp
        ├── logo-store.webp
        ├── luxtrader.webp
        ├── misocial.webp
        └── flutter-demo.webp
```

---

## 8. Последовательность работ (workflow-13)

### Фаза 1: Скриншоты портфолио
```
Для каждого URL из раздела 4.2:
- Если iframe разрешён — использовать iframe с loading="lazy"
- Если заблокирован — сделать скриншот (800×500px, WebP, ≤100KB)
- Сохранить в images/projects/
```

### Фаза 2: Копирайтинг (`/copywriter`)
```
Промпт: На основе TZ_Portfolio_Refactoring.md напиши финальные тексты для всех секций
резюме-сайта. Язык — русский. Тексты должны звучать профессионально, без шаблонных
фраз. Hero-текст — лаконичный и сильный. Описания проектов в разделе Experience —
с фокусом на результат. CTA — конкретный и мотивирующий.
```

### Фаза 3: Дизайн (`/pencil-design`)
```
Промпт: Создай дизайн-систему и макет resume-site по TZ_Portfolio_Refactoring.md.
Цвета из раздела 5.1, шрифт Montserrat. Тёмная тема по умолчанию. Секции по разделу 2.
Файлы: design/design-system.pen, design/resume.pen
```

### Фаза 4: Верстка (`/html-css-bem`)
```
Промпт: Сверстай index.html по design/resume.pen и TZ_Portfolio_Refactoring.md.
Требования: чистый HTML/CSS без фреймворков, BEM, CSS-переменные для тем,
переиспользовать js/vendors.min.js и js/app.min.js, скриншоты из images/projects/.
PageSpeed 100/100.
```

### Фаза 5: SEO (`/seo-audit`)
```
Промпт: Проверь и добавь SEO для index.html — schema.org Person, Open Graph,
meta теги из раздела 6.4 TZ_Portfolio_Refactoring.md.
```

### Фаза 6: Деплой (`/devops`)
```
GitHub Pages: push в master → автодеплой (уже настроен через gh-pages или прямой push).
Проверить: https://bdemetrix.github.io
```

---

## 9. Чеклист приёмки

> Аудит проведён: 2026-03-16. Обозначения: ✅ готово · ⚠️ частично · ❌ не готово

- ⚠️ Отображается корректно на 320px, 768px, 1200px — CSS и media-queries реализованы, визуальная проверка в браузере требуется
- ✅ Dark/light переключатель работает, тема сохраняется в localStorage, нет мигания при загрузке
- ✅ RU/EN переключатель работает, язык сохраняется в localStorage
- ✅ Весь контент переведён на английский (i18n.js содержит оба словаря — 50+ ключей)
- ✅ `<html lang>` меняется при переключении языка
- ✅ Все ссылки на проекты открываются в новой вкладке (`target="_blank" rel="noopener noreferrer"`)
- ⚠️ iframe или скриншоты для актуальных проектов (раздел 4.2) — 6 iframe ✅, 2 img: placeholder-файлы есть, реальных скриншотов нет
- ✅ Блок «От вёрстки к архитектуре» содержит все 7 ссылок-тегов (раздел 4.3)
- ❌ Кнопка «Скачать резюме» скачивает PDF — `href="/resume.pdf"` есть, файл `resume.pdf` отсутствует
- ✅ Кнопка «Написать в Telegram» ведёт на @Meaning_Driven
- ✅ Back-to-top появляется при скролле (кнопка `#backToTop`, логика в app.js реализована)
- ✅ Scroll-анимации работают (`_scr-item` — 36 элементов, класс `._active` добавляется при скролле)
- ❌ PageSpeed Desktop ≥ 90, Mobile ≥ 85 — не проверено (нет деплоя)
- ⚠️ В консоли нет ошибок JS — не проверено в браузере
- ✅ Schema.org Person валиден (JSON-LD в `<head>`, структура корректна)
- ✅ Open Graph корректен (og:type, og:title, og:description, og:image, og:url, og:locale)

**Дополнительно выявлено аудитом:**
- ✅ `favicon.ico` — создан (32×32, ICO формат, инициалы DB, акцентный цвет)
- ✅ `images/og-preview.jpg` — создан через Playwright (800×420px)
- ✅ Скриншоты проектов: `aod.webp`, `mavic.webp`, `logo-store.webp`, `luxtrader.webp`, `misocial.webp`, `flextable.webp` — созданы через Playwright + ImageMagick, все ≤100KB
- ✅ `sitemap.xml` — создан
- ✅ `robots.txt` — создан

---

## 10. План исправлений

> Приоритеты: 🔴 блокер · 🟡 важно · 🟢 улучшение

### Блок A — Отсутствующие файлы (блокеры деплоя)

| # | Задача | Приоритет | Как решить |
|---|--------|-----------|-----------|
| A1 | Добавить `resume.pdf` в корень | 🔴 | Экспортировать резюме из Google Docs / Notion / Word в PDF, разместить как `/resume.pdf` |
| A2 | ~~Добавить `favicon.ico`~~ | ✅ | Создан (32×32 ICO, инициалы DB, цвет #ff6b08) |
| A3 | ~~Создать `images/og-preview.jpg`~~ | ✅ | Создан через Playwright 800×420px |

### Блок B — Скриншоты проектов

> Нужны только как визуальный резерв; iframe уже работают для 6 проектов из 8. Но наличие скриншотов улучшает PageSpeed (нет зависимости от iframe-загрузки).

| # | Файл | URL для скриншота | Параметры |
|---|------|-------------------|-----------|
| B1 | `images/projects/flextable.webp` | https://bdemetrix.github.io/blocks/FlexTable/ | 800×500px, WebP, ≤100KB |
| B2 | `images/projects/aod.webp` | https://bdemetrix.github.io/AOD/ | 800×500px, WebP, ≤100KB |
| B3 | `images/projects/mavic.webp` | https://bdemetrix.github.io/Mavic/ | 800×500px, WebP, ≤100KB |
| B4 | `images/projects/logo-store.webp` | https://bdemetrix.github.io/Logo/ | 800×500px, WebP, ≤100KB |
| B5 | `images/projects/luxtrader.webp` | https://bdemetrix.github.io/Luxtrader/ | 800×500px, WebP, ≤100KB |
| B6 | `images/projects/misocial.webp` | https://bdemetrix.github.io/MISOCIAL/ | 800×500px, WebP, ≤100KB |

**Как сделать:** DevTools → Cmd+Shift+P → "Capture full size screenshot" → конвертировать в WebP через `squoosh.app` или `cwebp`.

### Блок C — SEO-оптимизация

| # | Задача | Приоритет | Детали |
|---|--------|-----------|--------|
| C1 | ~~Создать `sitemap.xml`~~ | ✅ | Создан в корне |
| C2 | ~~Создать `robots.txt`~~ | ✅ | Создан в корне |
| C3 | ~~Добавить `<meta name="author">`~~ | ✅ | Добавлен в index.html |
| C4 | Проверить Schema.org | 🟡 | После деплоя: [validator.schema.org](https://validator.schema.org) → ввести URL → убедиться что Person распознан без ошибок |
| C5 | Проверить Open Graph | 🟡 | После деплоя: [opengraph.xyz](https://www.opengraph.xyz) → ввести URL → убедиться в корректном превью |
| C6 | Запустить PageSpeed Insights | 🟡 | После деплоя: [pagespeed.web.dev](https://pagespeed.web.dev) → цель Desktop ≥ 90, Mobile ≥ 85. Главные метрики: LCP (hero-фото), CLS (шрифты), FID |
| C7 | Оптимизировать `i-am.webp` | 🟢 | Проверить размер через squoosh.app — LCP-изображение должно быть ≤ 60KB при качестве 80% |
| C8 | ~~Добавить `og:image:width` / `og:image:height`~~ | ✅ | Добавлены в index.html |
| C9 | Проверить индексацию в Яндекс Вебмастер | 🟢 | Добавить сайт в [webmaster.yandex.ru](https://webmaster.yandex.ru), подтвердить через HTML-файл или meta-тег |
| C10 | Добавить Яндекс Метрику | 🟢 | Опционально — счётчик поведения пользователей рекрутеров на странице |

**Содержимое `sitemap.xml`** (разместить в корне):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://bdemetrix.github.io/</loc>
    <lastmod>2026-03-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**Содержимое `robots.txt`** (разместить в корне):
```
User-agent: *
Allow: /
Sitemap: https://bdemetrix.github.io/sitemap.xml
```

### Блок D — Деплой и финальная проверка

| # | Задача | Приоритет |
|---|--------|-----------|
| D1 | `git push origin master` | 🔴 |
| D2 | Открыть https://bdemetrix.github.io — проверить визуально на мобильном и десктопе | 🔴 |
| D3 | Открыть DevTools Console — убедиться что ошибок JS нет | 🔴 |
| D4 | Проверить адаптивность: 320px (iPhone SE), 768px (iPad), 1200px (Desktop) | 🟡 |
| D5 | Проверить переключение темы (dark ↔ light) и языка (RU ↔ EN) | 🟡 |
| D6 | Проверить все iframe-проекты — корректно ли отображаются превью | 🟡 |
| D7 | Запустить PageSpeed Insights (C6) | 🟡 |
| D8 | Подать sitemap в Google Search Console | 🟢 |

---

*Составлено: 2026-03-16*
*На основе: dmitry-bogdanov-resume.md, refs/refs.md, workflow-13-resume.md*
*Аудит и план исправлений: 2026-03-16*
