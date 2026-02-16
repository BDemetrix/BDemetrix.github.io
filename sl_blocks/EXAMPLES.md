# Примеры использования

## Работа с компонентами

### Создание компонента

Создайте файл `src/components/button.html`:

```html
<button class="btn">
  <span class="btn__text">Нажми меня</span>
</button>
```

### Использование компонента

В `src/html/index.html`:

```html
<module href="../components/button.html"></module>
```

## Передача параметров в компоненты

### Простой пример с параметрами

Создайте компонент `src/components/button.html`:

```html
<button class="btn {{ className }}">
  <span class="btn__text">{{ text }}</span>
</button>
```

Используйте с параметрами в `src/html/index.html`:

```html
<!-- Обычная кнопка -->
<module href="components/button.html"
  text="Нажми меня"
  className="btn--primary">
</module>

<!-- Кнопка с другими параметрами -->
<module href="components/button.html"
  text="Отправить"
  className="btn--success">
</module>

<!-- Без дополнительного класса -->
<module href="components/button.html"
  text="Отмена"
  className="">
</module>
```

### Сложный пример: карточка

Создайте `src/components/card.html`:

```html
<article class="card {{ cardClass }}">
  <h3 class="card__title">{{ title }}</h3>
  <p class="card__description">{{ description }}</p>
  <a href="{{ link }}" class="card__link">{{ linkText }}</a>
</article>
```

Используйте в HTML:

```html
<module href="components/card.html"
  cardClass="card--featured"
  title="Заголовок карточки"
  description="Описание карточки с подробной информацией"
  link="/page.html"
  linkText="Читать далее">
</module>

<module href="components/card.html"
  cardClass=""
  title="Вторая карточка"
  description="Другое описание"
  link="/about.html"
  linkText="Узнать больше">
</module>
```

### Параметры по умолчанию

Если параметр не передан, место подстановки остается пустым:

```html
<!-- Компонент -->
<button class="btn {{ className }}">{{ text }}</button>

<!-- Использование без параметра className -->
<module href="components/button.html" text="Click"></module>

<!-- Результат -->
<button class="btn ">Click</button>
```

### Многострочные параметры

Для длинных текстов можно использовать обычный синтаксис:

```html
<include
  src="components/card.html"
  title="Длинный заголовок карточки"
  description="Очень длинное описание, которое содержит много информации и занимает несколько строк текста"
  link="/article.html"
  linkText="Подробнее">
</module>
```

### Условное использование параметров

Для условной логики используйте пустые значения:

```html
<!-- Компонент с опциональной иконкой -->
<!-- src/components/link.html -->
<a href="{{ url }}" class="link {{ className }}">
  {{ iconBefore }}
  <span>{{ text }}</span>
  {{ iconAfter }}
</a>

<!-- Использование -->
<module href="components/link.html"
  url="/home"
  text="Главная"
  className=""
  iconBefore='<svg class="icon"><use href="#icon-home"></use></svg>'
  iconAfter="">
</module>
```

**Примечание:** Используйте относительный путь `../components/` когда файл находится в `src/html/`

**Внутренняя реализация:** Собственный плагин на основе posthtml для обработки параметров

## Вложенность компонентов

### Компонент внутри компонента

Создайте компонент-контейнер `src/components/section.html`:

```html
<section class="section {{ sectionClass }}">
  <div class="container">
    <h2 class="section__title">{{ title }}</h2>
    <div class="section__content">
      <module href="./card.html"
        title="{{ cardTitle }}"
        description="{{ cardDescription }}"
        link="{{ cardLink }}"
        linkText="Подробнее"
        cardClass="">
      </module>
    </div>
  </div>
</section>
```

Используйте в странице:

```html
<module href="../components/section.html"
  sectionClass="section--highlighted"
  title="Наши услуги"
  cardTitle="Разработка"
  cardDescription="Создаем современные веб-приложения"
  cardLink="/services/development">
</module>
```

### Сложная структура

Создайте layout `src/components/layout/main-layout.html`:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ pageTitle }}</title>
  <link rel="stylesheet" href="../../scss/main.scss">
</head>
<body class="{{ bodyClass }}">
  <module href="../header.html"></module>

  <main class="main">
    {{ content }}
  </main>

  <module href="../footer.html"></module>

  <script type="module" src="../../js/main.js"></script>
</body>
</html>
```

**Важно:** При вложенности компонентов пути указываются относительно файла компонента:
- Из `src/components/layout/main-layout.html` к `src/components/header.html` → `../header.html`
- Из `src/components/section.html` к `src/components/card.html` → `./card.html`

## Работа с SVG иконками

### Добавление новой иконки

1. Поместите SVG файл в `src/images/svg/`, например `star.svg`:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</svg>
```

2. Используйте в HTML:

```html
<svg class="icon">
  <use href="#icon-star"></use>
</svg>
```

### Стилизация иконок

```scss
.icon {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: none;

  &--filled {
    fill: currentColor;
    stroke: none;
  }

  &--large {
    width: 48px;
    height: 48px;
  }
}
```

## Создание новой страницы

1. Создайте `src/html/about.html`:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>О нас</title>
  <link rel="stylesheet" href="../scss/main.scss">
</head>
<body>
  <module href="components/header.html"></module>

  <main>
    <h1>О нас</h1>
  </main>

  <script type="module" src="../js/main.js"></script>
</body>
</html>
```

2. Обновите `vite.config.js`, добавив новую страницу в `rollupOptions.input`:

```js
input: {
  main: resolve(__dirname, 'src/html/index.html'),
  about: resolve(__dirname, 'src/html/about.html')
}
```

## Организация SCSS

```scss
// src/scss/main.scss
@import 'variables';
@import 'mixins';
@import 'base';
@import 'components/button';
@import 'components/header';
```

```scss
// src/scss/_variables.scss
$primary-color: #007bff;
$font-family: system-ui, -apple-system, sans-serif;
```

## Структура компонентов

Рекомендуемая структура для крупных компонентов:

```
src/
  components/
    header/
      header.html
    footer/
      footer.html
  scss/
    components/
      _header.scss
      _footer.scss
```
