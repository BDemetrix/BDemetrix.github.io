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
23) https://bdemetrix.github.io/sl_mobile/build/stocks-rating-mask.html
24) https://bdemetrix.github.io/sl_mobile/build/news-premium.html


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
```html
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

4)  Класс _active-el добавляется кнопке открывающей/закрывающей Pop-Up или меню и нужен для синхронизации всплывающих окон между собой при клике на элемен содержащий класс _active-el его родителю присваивается сласс _open

5) Класс _slide-sidebar-padding нужен для расчета верхнего паддинга боковых панелей (когда они становятся скрытыми и показываются при нажатии на кнопку) 

6) Чтобы у textarea была адаптивная высота надо добавить ей класс .js-textarea-auto-height

7) Чтобы родителю пол ввода присваивался класс _focus самому полю ввода присваивается класс js-focus

## 8) **Модальное окно. Класс .custom-pop-up**  

Для унификации модальных окон следует создавать следующую структуру:
```html
<div class="custom-pop-up any-class">
    <div class="custom-pop-up__body any-class__body">
        <div class="custom-pop-up__cover"></div>
        <div class="custom-pop-up__content any-class__content">
            <button class="custom-pop-up__close"></button>
            <div class="custom-pop-up__title">Заголовок</div>
            <!-- Дюбой кастомный контент поп-апа со своими паддингами-->
            
            <!-- Либо  -->
            <div class="custom-pop-up__inner">
                 <!-- Контент поп-апа без паддингов при использовании smartlabus.js -->
            </div> 
        </div>
    </div>
</div>
```
Элемент `<div class="custom-pop-up__title">Заголовок</div>` - опциональный!

где к классу `.custom-pop-up` и его потомкам (по БЭМ) привязываются обработчики событий и основные стили из  
scss/base/global.scss и   
js/files/common.js  
  
Где `any-class` - любой микс-класс  по БЭМ для дополнительной стилизации, следует заменить или удалить.
  
Для того, чтобы кнопка или другой элемент (находящийся в поп-апе) закрывал поп-ап при клике ему надо добавить класс `js-close-custom-pop-up`    
а если поп-ап помещен внутрь `jBox` заменить класс `js-close-custom-pop-up` на `js-custom-pop-up-close-jBox`.

**Поп-ап должен быть обязательно добавлен в HTML страницы!**
Есть два оскновных варианта использования:
- без дополнительных плагинов:
    - поместить HTML код модального окна в код страницы 
    - бобавить модальному окну уникальтый `id`, например  `<div id="unique-pop-up" class="custom-pop-up">`
    - закрывающим модальное окно кнопкам добавить сласс `js-close-custom-pop-up` 
    - открывающей модальное окно кнопке добавить класс `js-pop-up-opener` и атрибут `data-target-id`, содержащий модального окна, для нашего примера: `data-target-id="unique-pop-up"`
- чтобы использовать кастомное модальное окно в плагине `jBox`:
    - поместить HTML код модального окна в код страницы 
    - добавить модальному окну уникальтый `id`, класс `.custom-pop-up--open` и атрибут `style="display: none;"` Пример:  `<div id="login-pop-up" class="custom-pop-up custom-pop-up--open" style="display: none;">` и удалить класс `_open`
    - закрывающим модальное окно кнопкам добавить сласс `js-close-custom-pop-up-jBox` 
    - для инициализации экземпляра `jBox` с кастомным поп-апом воспользаваться функцией `initJBoxWithCustomPopUp(options, bindControls)`
    - у открывающей модальное окно кнопки удаляем класс `js-pop-up-opener` или заменяем на другой селектор который прередаем в поле `attach` при инициализации `jBox` 


> NOTE: **Если надо просто информировать** пользователя, **предпочтительней** использовать `custom-pop-up` без `jBox`.  
А если **надо навесить контролы** (особенно если они уже написаны) от использовать `custom-pop-up` внутри `jBox`.

**Декоратор для инициализации jBox с кастомным поп-апом `.custom-pop-up` внутри**

```js
/**
 * Декоратор для инициализации jBox с кастомным поп-апом `.custom-pop-up` внутри
 * @param {Map<String dynamic>} options - объект с опциями и контролами
 * @param {*} bindControls - анонимная функция инициализации контролов, 
 * в которой надо связать кнопки и контролы, переданные в `options`
 * 
 * Пример инициализации с кнопкой `enterButton` и ее контролом `enter`: 
 * ```js
 * initJBoxWithCustomPopUp({
 * 	content: $('#pop-up'),
 * 	attach: $('#pop-up-opener'),
 * 	enterButton: '',
 * 	enter: function () { alert('Нажата кнопка "Войти"'); },
 * },
 * 	function () {
 * 		this.enterButton = this.container.find('.login__submit').click(function () { this.options.enter() }.bind(this));
 * 	}
 * );
 * ```
 * 
 * Пример когда мы навешиваем инициализацию на клик по кнопке 
 * (при этом поле `attach` отсутствует в опцииях, но надо явно вызывать dialog.open();):
 * ```js
 * $('#pop-up-opener').click( function () {
 * 	let dialog = initJBoxWithCustomPopUp({
 * 		content: $('#login-pop-up'),
 * 		enterButton: '',
 * 		enter: function () { alert('Нажата кнопка "Войти"'); },
 * 	},
 * 		function () {
 * 			this.enterButton = this.container.find('.login__submit').click(function () { this.options.enter() }.bin(this));
 * 		}
 * 	);
 * 	dialog.open();
 * });
 * ```
 */
function initJBoxWithCustomPopUp(options, bindControls) {
	let dialog = new jBox('Modal', {
		...options,
		theme: 'with-custom-pop-up',
		maxWidth: '100%',
		overlay: false,
		closeButton: '',
        
		onCreated: function () {
			bindControls.bind(this)();
			this.closeButton = this.container.find('.js-custom-pop-up-close-jBox').click(function () { this.close() }.bin(this));
		},
	});
	return dialog;
}
```

**Тема `jBox` для `.custom-pop-up`**
При инициализации `jBox` используется поле `theme: 'with-custom-pop-up'`, что добавляет в `jBox` css-класс `.jBox-with-custom-pop-up` и по нему переопределяются стили контейнера: 
```css
/* Переопределение стилей для jBox-with-custom-pop-up */
.jBox-with-custom-pop-up {
	width: auto !important;
	height: auto !important;
	position: fixed !important;
	top: 0 !important;
	left: 0 !important;
	bottom: 0 !important;
	right: 0 !important;
	border-radius: 8px;
	overflow: hidden;
}

.jBox-with-custom-pop-up .jBox-container,
.jBox-with-custom-pop-up .jBox-content {
	width: 100%;
	height: 100%;
	background: transparent !important;
	box-shadow: none !important;
}
```

9) кнопка с классом `js-pop-up-opener` открывает поп-ап `.custom-pop-up` с id, который указан в атрибуте `data-target-id` данной кнопки. (см описание `.custom-pop-up`).  
**Обработчик этой кнопки (без использования `jBox`) и поп-апа занимает всего 20 строк кода!**


10) Кастомный чекбокс .custom-checkbox в файле custom-checkbox.scss
Для отображени чекбокса в вида тумблера присваивается модификатор custom-checkbox--switch

сруктура:
```html
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
```html
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
```html
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
```html
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

27) `.search-field-with-icon` - общий для полей поиска с иконкой лупы 
 