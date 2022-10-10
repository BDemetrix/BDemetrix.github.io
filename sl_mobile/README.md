#### Исходники в #src:

./#src/style.scss
: собирает стили из доноров 

./#src/scss/base
: базовые стили обнуления, переменные, глобальные стили...

./#src/scss/blocks
: стили блоков (таких как header, footer и другие)

./#src/scss/plugins/
:  стили плагинов

./#src/js/files/
: скрипты разработчика

./#src/js/lib/
: плагины и библиотеки

./#src/js/app.js
: собирает скрипты разработчика

./#src/js/vendors.js
: собирает плагины и библиотеки

_js.html
: подключает скрипты


##### Готовая верстка в build:

./build/css/blocks
: стили отдельных блоков (за исключением файлов начинающихся со знака подчеркивания)

##### Папка test
Содержит копии smart-lab.ru с внедренными новыми элементами верстки (исключительно для демонстрации)

##### Окружение:
1)  ```  npm i  ```
2)  ```  npm install webp-converter@2.2.3 --save-dev  ```
3) запуск  ```  gulp  ```

Переустановка node-sass:   ```  npm rebuild node-sass  ```

Проблема с pyton:  ```  npm install --global windows-build-tools  ```


#### Общие классы для стилизации и обработки событий
##### #src/scss/base/global.scss
##### #src/js/files/common.js

1) Для контекстных меню класс .context-menu для которого написаны правила, анимация и минимальный набор обработчиков js
Для стандартного вида необходимо добавить классы .context-menu__list и другие
Если же стили меняются, то эти классы присваивать не надо кроме .context-menu
структура: 
```
<div class="context-menu">
  <button class="context-menu__btn">
     <svg class="context-menu__svg">
         <use xlink:href="images/symbol/sprite.svg#..."></use>
     </svg>
  </button>			
  <ul class="context-menu__list">
     <li><button class="context-menu__item">кнопка 1</button></li>
     <li><button class="context-menu__item">кнопка 2</button></li>
  </ul>
</div>
```

2) Блок .selector-links - слайдер для ссылок в одноименных файлах html и scss 

3) Блок .navbar - хлебные крошки (превращаются в слайдер, когда не прмещаются в ширину экрана)

4)  Класс _active-el добавляется кнопке открывающей/закрывающей Pop-Up и нужен для синхконизации всплывающих окон между собой при клике на элемен содержащий класс _active-el его родителю присваивается сласс _open

5) Класс _slide-sidebar-padding нужен для расчета верхнего паддинга боковых панелей (когда они становятся скрытыми и показываются при нажатии на кнопку) 

6) Чтобы у textarea была адаптивная высота надо добавить ей класс .js-textarea-auto-height

7) Чтобы родителю пол ввода присваивался класс _focus самому полю ввода присваивается класс js-focus

8) Модальное окно.
Для унификации модальных окон следует создавать следующую структауру:
```
<div class="custom-pop-up any-class">
    <div class="custom-pop-up__body any-class__body">
        <div class="custom-pop-up__cover"></div>
        <div class="custom-pop-up__content any-class__content">
            <button class="custom-pop-up__close"></button>
            <!-- Контент поп-апа -->
        </div>
    </div>
</div>
```
где к классу .custom-pop-up и его потомкам (по БЭМ) привязываются обработчки событий и основные стили из 
scss/base/global.scss и js/files/common.js, Открывается при нажатии на кнопку с классом `js-pop-up-opener`
А класс .any-class - михс-класс и служит для для дополнительной стилизации.

9) кнопка с классом `js-pop-up-opener` открывает поп-ап с id, который указан в атрибуте `data-target-id` данной кнопки.

10) Кастомный чекбокс .custom-checkbox в файле custom-checkbox.scss
сруктура:
```
<label class="any-class custom-checkbox">
	<input type="checkbox" class="custom-checkbox__input">
	<span class="custom-checkbox__text">Контактные данные</span>
</label>
```
где any-class - микс-класс для дополнительной стилизации