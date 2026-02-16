# SL Blocks - Проект для верстки

Проект на основе Vite для создания HTML-компонентов и страниц.

## Структура проекта

```
sl_blocks/
├── src/
│   ├── components/    # Компоненты для инклюдов
│   ├── html/          # HTML страницы (index.html и другие)
│   ├── scss/          # SCSS стили
│   ├── js/            # JavaScript файлы
│   └── images/
│       ├── svg/       # SVG иконки для спрайта
│       └── sprite.svg # Сгенерированный SVG спрайт
├── build/             # Готовая сборка
│   ├── css/           # CSS (style.css + style.min.css)
│   ├── js/            # JavaScript (несжатый)
│   ├── sprite.svg     # SVG спрайт
│   └── index.html     # Готовые HTML страницы
├── scripts/           # Скрипты для сборки
└── vite.config.js     # Конфигурация Vite
```

## Команды

### Режим разработки

- `npm run dev` — dev-сервер Vite с hot reload (http://localhost:5173)
  - Автоматически откроется браузер
  - Мгновенное обновление при изменениях
  - Не создает физические файлы в build/

- `npm run watch` — **рекомендуется для разработки**
  - Отслеживает изменения в `src/`
  - Автоматически пересобирает проект в `build/`
  - Запускает локальный сервер (http://localhost:3000)
  - Автоматически перезагружает браузер
  - Генерирует готовые файлы для проверки результата

### Сборка

- `npm run build` — полная сборка проекта
  - Генерация SVG спрайта
  - Сборка HTML, CSS, JS
  - Создание минифицированного CSS
  - Результат в папке `build/`

- `npm run preview` — просмотр собранного проекта

## Работа с компонентами

Создайте HTML-компонент в `src/components/`, например `header.html`:

```html
<header class="header">
  <div class="container">
    <nav class="nav">
      <a href="/" class="logo">SL Blocks</a>
    </nav>
  </div>
</header>
```

Для инклюда компонента в страницу используйте:

```html
<module href="../components/header.html"></module>
```

С параметрами:

```html
<module href="../components/button.html"
  text="Нажми меня"
  className="btn--primary">
</module>
```

## Работа с SVG спрайтами

1. Поместите SVG файлы в `src/images/svg/`
2. При сборке автоматически создастся спрайт `sprite.svg` в `src/images/` и `build/`
3. Используйте иконки в HTML:

```html
<svg class="icon">
  <use href="#icon-example"></use>
</svg>
```

Где `example` — это имя файла SVG без расширения.

## Особенности

- ✅ Нативная верстка без фреймворков
- ✅ Поддержка SCSS
- ✅ Инклюды компонентов в HTML страницы
- ✅ Автоматическая сборка CSS в двух версиях: обычной и минифицированной
- ✅ JS без минификации
- ✅ **Без хешей в именах файлов** (`main.js`, `style.css`, не `main.a1b2c3.js`)
- ✅ Автоматическая генерация SVG спрайтов
- ✅ Вотчер с автосборкой и live reload при изменениях
- ✅ Автоматическое открытие браузера при запуске dev-сервера

## Дополнительно

- [SYNTAX.md](./SYNTAX.md) — справочник по синтаксису инклюдов, SVG, SCSS
- [EXAMPLES.md](./EXAMPLES.md) — примеры использования компонентов и организации проекта
