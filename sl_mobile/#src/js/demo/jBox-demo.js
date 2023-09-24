$(document).ready(() => {

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
	 * 			this.enterButton = this.container.find('.login__submit').click(function () { this.options.enter() }.bind(this));
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
				this.closeButton = this.container.find('.js-close-custom-pop-up-jBox').click(function () { this.close() }.bind(this));
			},
		});
		return dialog;
	}


	initJBoxWithCustomPopUp({
		content: $('#login-pop-up'),
		attach: $('[data-target-id="login-pop-up"]'),
		enterButton: '',
		googleButton: '',
		vkButton: '',
		enter: function () { alert('Нажата кнопка "Войти"'); },
		google: function () { alert('Нажата кнопка "Google"'); },
		vk: function () { alert('Нажата кнопка "Vk"'); },
	},
		function () {
			this.enterButton = this.container.find('.login__submit').click(function () { this.options.enter() }.bind(this));
			this.googleButton = this.container.find('.social-login__btn--google').click(function () { this.options.google() }.bind(this));
			this.vkButton = this.container.find('.social-login__btn--vk').click(function () { this.options.vk() }.bind(this));
		}
	);

	
	jQuery('.js-del-comment-warning-popup-opener').click( function () {
		if (this.dialog) {
			this.dialog.open();
			return;
		}
		this.dialog = initJBoxWithCustomPopUp({
			content: $('#del-comment-warning-popup'),
			delButton: '',
			del: function () { alert('Нажата кнопка "Удалить"'); },
		},
			function () {
				this.delButton = this.container.find('.warning-popup__ok-btn').click(function () { this.options.del(); }.bind(this));
			}
		);
		this.dialog.open();
	});
});


