# Справочник по синтаксису

## Инклюды компонентов

Для вставки компонента в HTML используйте тег `<module>`:

```html
<module href="../components/header.html"></module>
```

### Путь к компоненту

Путь указывается **относительно текущего HTML файла**:

```
src/
  components/
    header.html
    footer.html
  html/
    index.html
```

В `src/html/index.html`:

```html
<!-- Простой инклюд -->
<module href="../components/header.html"></module>

<module href="../components/footer.html"></module>
```

### Вложенность компонентов

Компоненты могут включать другие компоненты:

**Компонент `src/components/page-layout.html`:**
```html
<div class="page">
  <module href="./header.html"></module>

  <main class="page__content">
    {{ content }}
  </main>

  <module href="./footer.html"></module>
</div>
```

**Использование:**
```html
<!-- src/html/index.html -->
<module href="../components/page-layout.html"
  content="<h1>Привет, мир!</h1>">
</module>
```

**Результат:**
```html
<div class="page">
  <header>...</header>

  <main class="page__content">
    <h1>Привет, мир!</h1>
  </main>

  <footer>...</footer>
</div>
```

**Важно:** Путь в компоненте указывается относительно самого компонента:
- Если компоненты в одной папке: `href="./header.html"`
- Если в подпапке: `href="./ui/button.html"`

### Передача параметров

Параметры передаются как атрибуты тега `<module>`:

```html
<module href="../components/button.html"
  text="Нажми меня"
  className="btn--primary">
</module>
```

В компоненте используйте синтаксис `{{ paramName }}`:

```html
<!-- src/components/button.html -->
<button class="btn {{ className }}">
  {{ text }}
</button>
```

**Результат:**

```html
<button class="btn btn--primary">
  Нажми меня
</button>
```

### Множественные параметры

```html
<module href="../components/card.html"
  title="Заголовок"
  description="Описание"
  link="/page.html"
  linkText="Читать"
  cardClass="card--featured">
</module>
```

Компонент:

```html
<!-- src/components/card.html -->
<article class="card {{ cardClass }}">
  <h3>{{ title }}</h3>
  <p>{{ description }}</p>
  <a href="{{ link }}">{{ linkText }}</a>
</article>
```

### Пустые параметры

Если параметр не передан, подстановка остается пустой:

```html
<module href="../components/button.html" text="OK"></module>

<!-- className не передан, будет пусто -->
<button class="btn ">OK</button>
```

**Реализация:** Собственный плагин на основе posthtml с поддержкой параметров через атрибуты

## SVG иконки

### Добавление иконок

1. Поместите SVG файл в `src/images/svg/`, например `logo.svg`
2. Используйте в HTML:

```html
<svg class="icon">
  <use href="#icon-logo"></use>
</svg>
```

### Префикс `icon-`

Все иконки автоматически получают префикс `icon-`:

- `logo.svg` → `#icon-logo`
- `heart.svg` → `#icon-heart`
- `arrow-right.svg` → `#icon-arrow-right`

### Стилизация

```css
.icon {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: none;
}

/* Цвет можно менять через родителя */
.button {
  color: blue;
}

.button .icon {
  /* Иконка будет синей */
}
```

## SCSS

### Импорты

```scss
// src/scss/main.scss
@import 'variables';
@import 'mixins';
@import 'components/button';

// или с новым синтаксисом
@use 'variables' as *;
@use 'mixins' as *;
```

### Подключение в HTML

```html
<link rel="stylesheet" href="../scss/main.scss">
```

Vite автоматически скомпилирует SCSS в CSS.

## JavaScript

### Подключение

```html
<script type="module" src="../js/main.js"></script>
```

### Импорт SVG иконок

В `main.js` обязательно должен быть импорт для работы SVG спрайтов:

```javascript
import 'virtual:svg-icons-register';
```

### Дополнительные модули

```javascript
// src/js/main.js
import 'virtual:svg-icons-register';
import { initSlider } from './modules/slider.js';
import { initMenu } from './modules/menu.js';

initSlider();
initMenu();
```

## Структура файлов

### Рекомендуемая организация

```
src/
  components/
    header/
      header.html
    footer/
      footer.html
  html/
    index.html
    about.html
  scss/
    main.scss
    _variables.scss
    _mixins.scss
    components/
      _header.scss
      _footer.scss
  js/
    main.js
    modules/
      slider.js
      menu.js
  images/
    svg/
      logo.svg
      icons/
        heart.svg
        star.svg
```

## Множественные страницы

Чтобы добавить новую страницу:

1. Создайте `src/html/about.html`
2. Обновите `vite.config.js`:

```javascript
rollupOptions: {
  input: {
    main: resolve(__dirname, 'src/html/index.html'),
    about: resolve(__dirname, 'src/html/about.html')
  }
}
```

3. В build появятся `index.html` и `about.html`
