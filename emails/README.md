# Директория для верстки HTML-писем
## Краткая инструкция по работе
### Для начала работы у вас должент быть установлен:
* Node.js v.10.15.3
* Gulp v4
* npm last version

## Основные команды для работы
* Установка - `npm i`
* Запуск локального сервера - `npm start`
* Для получения письма от атрибутов `class` `npm start dc` - для очистки от классов
* URL - `localhost:3000/file_name.html`

## Все разработка ведёться в директории `source`
## Итоговый код попадает в директорию `build`
## Шаблон для HTML-писем `./default.html`

## Как это работает?
* Создаем файл `source/file_name.html` из шаблона `./default.html` и `source/scss/file_name.scss` 
* Запускаем локальный сервер - `npm start`
* В папке `build` создается письмо для рассылки, прввила из `<link rel="stylesheet">` и `<style></style>` переносятся в атрибуты `style` по соответствующим селекторам и инлайнятся в документе с помощью `gulp-inline-css`
* Затем теги  `<link rel="stylesheet">` и `<style></style>` удаляются.
* Готовое письмо  `build/file_name.html`
* Для удаления атрибутов `class` после завершения работы вызвать `npm start dc` - на выходе получим `build/file_name.clean.html`

## Полезные ссылки о правилах верстки HTML-писем
* https://blog.maxgraph.ru/verstka-html-pisem-chast-1/
* https://blog.maxgraph.ru/verstka-html-pisem-chast-2/
* https://docs.google.com/spreadsheets/d/13KQyB75E4sZp3SdVd68QWg1NH2c5kkP9ZMFCML4SQaA/edit#gid=1952222717
* бесплатные ручные тестировщики:
 https://putsmail.com/tests/new 
 https://cp.unisender.com/
* Для Outlook использовать `<!--[if mso]> ... <![endif] -->`



## Шаблоны писем:

### Аксельное письмо
`/emails/build/axel.html`
`http://localhost:3000/axel-email.html`
Тикет: http://lab.inline-ltd.ru/m16tech/m16/-/issues/14057
Дизайн: https://www.figma.com/file/V2yMgILrB7q05JQslOuy71/%D0%B0%D0%BA%D1%81%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%BE?node-id=0%3A1

