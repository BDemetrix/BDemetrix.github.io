#### Ссылки на страницы проекта
1) https://bdemetrix.github.io/sl_mobile/build/
2) https://bdemetrix.github.io/sl_mobile/build/post.html
3) https://bdemetrix.github.io/sl_mobile/build/premium-post.html
4) https://bdemetrix.github.io/sl_mobile/build/blog.html
5) https://bdemetrix.github.io/sl_mobile/build/news-feed.html
6) https://bdemetrix.github.io/sl_mobile/build/add-post.html
7) https://bdemetrix.github.io/sl_mobile/build/login.html
8) https://bdemetrix.github.io/sl_mobile/build/registration.html
9) https://bdemetrix.github.io/sl_mobile/build/economic-calendar.html
10) https://bdemetrix.github.io/sl_mobile/build/economic-calendar--empty.html
11) https://bdemetrix.github.io/sl_mobile/build/post-lock.html
12) https://bdemetrix.github.io/sl_mobile/build/post-company.html
13) https://bdemetrix.github.io/sl_mobile/build/blog-company.html
14) https://bdemetrix.github.io/sl_mobile/build/people.html
15) https://bdemetrix.github.io/sl_mobile/build/bonds.html
16) https://bdemetrix.github.io/sl_mobile/build/futures.html
17) https://bdemetrix.github.io/sl_mobile/build/etf.html  
18) https://bdemetrix.github.io/sl_mobile/build/pif.html  
19) https://bdemetrix.github.io/sl_mobile/build/world-quotes.html  
20) https://bdemetrix.github.io/sl_mobile/build/ofz.html  
21) https://bdemetrix.github.io/sl_mobile/build/quotes.html  
22) https://bdemetrix.github.io/sl_mobile/build/stocks-rating.html
23) https://bdemetrix.github.io/sl_mobile/build/news-premium.html


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

8) Модальное окно. Класс .custom-pop-up
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
Для отображени чекбокса в вида тумблера присваивается модификатор custom-checkbox--switch

сруктура:
```
<label class="any-class custom-checkbox">
	<input type="checkbox" class="custom-checkbox__input">
	<span class="custom-checkbox__text">Контактные данные</span>
</label>
```
где any-class - микс-класс для дополнительной стилизации

11) Кастомный селект .custom-select
Атрибут name="#" есть только у главной кнопки, для реализации в рамках формы
Обработчик в файле custom-select.js
Стили в custom-select.scss
Для открытия добавляется модификатор .custom-select--opened

сруктура:
```
<div class="custom-select">
    <button class="custom-select__main-btn" value="Значение 1" name="#" type="button">Значение 1</button>
    <div class="custom-select__list ">
        <button class="custom-select__option custom-select__option--active" value="Значение 1" type="button">Значение 1</button>
        <button class="custom-select__option" value="Значение 2" type="button">Значение 2</button>
        <button class="custom-select__option" value="Значение 3" type="button">Значение 3</button>
    </div>
</div>
```

12) Форма для добавления комментариев или постов .add-form
Стили в _add-form.scss
структура:
```
<form class="add-form">
	<!-- чтобы у textarea была адаптивная высота надо добавить ей класс .js-textarea-auto-height -->
	<!-- чтобы родителю пол ввода присваивался класс _focus самому полю ввода присваивается класс js-focus -->
	<textarea class="add-form__textarea js-textarea-auto-height js-focus" name="comment"
		placeholder="Напишите комментарий..." maxlength="1000" required=""></textarea>
	<label class="add-form__add-img">
		<input type="file" class="add-form__add-file visually-hidden">
	</label>
	<button class="add-form__submit-btn" type="submit">Отправить</button>
</form>
```

13)  Класс input-wrapper и custom-input - общая для всех страниц стилизация инпутов 
Стили в base/global.scss

структура:
```
<div class="any-class input-wrapper input-wrapper--left">
    <input type="text" class="custom-input" placeholder="Логин или Email">
    <svg width="20" height="20">
        <use xlink:href="images/icons/login/sprite.svg#user"></use>
    </svg>
</div>
```
где any-class - микс-класс для дополнительной стилизации для изменения стилей конкретного инпута (отступы, цвет...),
модификаторы:
input-wrapper--left - иконка слева
input-wrapper--right - иконка справа

14) Если на странице есть правая колонка, то body добавлется класс right-panel

15) Теги в постах и в окне модерации .post-tag 
    Лейблы в постах и в окне модерации .post-label

имеют несколько модификаторов. Смотри global.scss

16) lock-comments - блок показывается если комментарии закрыты

17) lock-card - блок для замены блока с текстом в закрытых постах (или другой закрытой информации, ктебующей подписки или регистрации)

18) .custom-card для стилиизации блоков с фоном, закругленными углами и тенью 

19) .custom-scrollbar - класс для стилизации полосы прокрутки

20) .custom-textarea - общий класс для стилизации textarea 
@todo добавить этот класс всем textarea с такими стилями и почистить таблицы стилей от повторяющегося кода

21) .custom-radio - класс для стилизации радиокнопок. Файл custom-radio.scss

22) Кнопка подписки вынесена в отдельный класс .subscription__btn

23) Класс .rating для рейтинга (звездочк) стили rating.scss

24) Лоадер .spinner-loader в spinner-loader.scss

25) Класс для заголовков в блоках на главной и в постах `.box-title`
если содержит ссылку, то она подчеркивается (нижняя граница)

26) Прогресс бар .linear-progress-bar