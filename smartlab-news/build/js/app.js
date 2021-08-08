function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";


function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { 
	Android: function () { return navigator.userAgent.match(/Android/i); }, 
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, 
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, 
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, 
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } 
};
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('body').classList.add('_touch');
}
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

const bodyGlobal = document.querySelector('body');
const scrollWidth = window.innerWidth - document.documentElement.clientWidth; // ширина скролл-бара окна
/**
 * функции для блокировки скролла при открытии модального окна
 */
function blockOverflow() {
  bodyGlobal.style.overflow = `hidden`;
  bodyGlobal.style.touchAction = `none`;
  bodyGlobal.style.paddingRight = scrollWidth + 'px';
};

/**
 * функции для разблокировки скролла при закрытии модального окна
 */
function unBlockOverflow() {
  setTimeout(() => {
    bodyGlobal.style.overflow = ``;
    bodyGlobal.style.touchAction = ``;
    bodyGlobal.style.paddingRight = ``;
  }, 400)
};


if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}

let unlock = true;

//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 0;
	let menuBody = document.querySelector(".menu__body")
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			scroll_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
//BodyLock
function scroll_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		scroll_lock_remove(delay);
	} else {
		scroll_lock_add(delay);
	}
}
function scroll_lock_remove(delay) {
	let body = document.querySelector("body"), 
        html = document.querySelector("html"),
        header = document.querySelector('.header');
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {  
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			//header.style.paddingRight = null;
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
      html.classList.remove("_lock");
           
            
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function scroll_lock_add(delay) {
	let body = document.querySelector("body"),
		html = document.querySelector("html"), 
        header = document.querySelector('.header'),
        width = document.querySelector('.wrapper').offsetWidth,
        paddingRight = window.innerWidth - width + 'px';
	if (unlock) {
    let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = paddingRight;
    }
        
        
        
		body.style.paddingRight = paddingRight;
		body.classList.add("_lock");
		html.classList.add("_lock");
		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================

// LettersAnimation
/* let title = document.querySelectorAll('._letter-animation');
if (title) {
	for (let index = 0; index < title.length; index++) {
		let el = title[index];
		let txt = el.innerHTML;
		let txt_words = txt.replace('  ', ' ').split(' ');
		let new_title = '';
		for (let index = 0; index < txt_words.length; index++) {
			let txt_word = txt_words[index];
			let len = txt_word.length;
			new_title = new_title + '<p>';
			for (let index = 0; index < len; index++) {
				let it = txt_word.substr(index, 1);
				if (it == ' ') {
					it = '&nbsp;';
				}
				new_title = new_title + '<span>' + it + '</span>';
			}
			el.innerHTML = new_title;
			new_title = new_title + '&nbsp;</p>';
		}
	}
} */
//=================
//Tabs
/* let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
} */
//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		spoller.addEventListener("click", function (e) {
			if (spollersGo) {
				spollersGo = false;
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				_slideToggle(spoller.nextElementSibling, 300);

				setTimeout(function () {
					spollersGo = true;
				}, 300);
			}
		});
	}
}
//=================
//Gallery
/* let gallery = document.querySelectorAll('._gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: false,
			selector: 'a',
			download: false
		});
	}
} */
//=================
//SearchInList
/* function search_in_list(input) {
	let ul = input.parentNode.querySelector('ul')
	let li = ul.querySelectorAll('li');
	let filter = input.value.toUpperCase();

	for (i = 0; i < li.length; i++) {
		let el = li[i];
		let item = el;
		txtValue = item.textContent || item.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			el.style.display = "";
		} else {
			el.style.display = "none";
		}
	}
} */
//=================
//DigiFormat
/* function digi(str) {
	var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
	return r;
} */
//=================
//DiGiAnimate
/* function digi_animate(digi_animate) {
	if (digi_animate.length > 0) {
		for (let index = 0; index < digi_animate.length; index++) {
			const el = digi_animate[index];
			const el_to = parseInt(el.innerHTML.replace(' ', ''));
			if (!el.classList.contains('_done')) {
				digi_animate_value(el, 0, el_to, 1500);
			}
		}
	}
}
function digi_animate_value(el, start, end, duration) {
	var obj = el;
	var range = end - start;
	// no timer shorter than 50ms (not really visible any way)
	var minTimer = 50;
	// calc step time to show all interediate values
	var stepTime = Math.abs(Math.floor(duration / range));

	// never go below minTimer
	stepTime = Math.max(stepTime, minTimer);

	// get current time and calculate desired end time
	var startTime = new Date().getTime();
	var endTime = startTime + duration;
	var timer;

	function run() {
		var now = new Date().getTime();
		var remaining = Math.max((endTime - now) / duration, 0);
		var value = Math.round(end - (remaining * range));
		obj.innerHTML = digi(value);
		if (value == end) {
			clearInterval(timer);
		}
	}

	timer = setInterval(run, stepTime);
	run();

	el.classList.add('_done');
} */
//=================
//Popups
/* let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');
			let video = el.getAttribute('data-video');
			popup_open(item, video);
		}
		e.preventDefault();
	})
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}
function popup_open(item, video = '') {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('.popup_' + item);
	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let index = 0; index < popups.length; index++) {
				const popup = popups[index];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');
			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		popup_close();
	}
}); */
//=================

//SlideToggle
/**
 * Функция сворачивает/разворачивает элемент
 * @param {Object} target - элемент DOM, который надо свернуть/развернуть
 * @param {Number} duration - длительность анимации
 */
let _slideUp = (target, duration = 500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
}
/**
 * Функция сворачивает/разворачивает элемент
 * @param {Object} target - элемент DOM, который надо свернуть/развернуть
 * @param {Number} duration - длительность анимации
 */
let _slideDown = (target, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none')
    display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
}
/**
 * Функция сворачивает/разворачивает элемент
 * @param {Object} target - элемент DOM, который надо свернуть/развернуть
 * @param {Number} duration - длительность анимации
 * @returns вызывает соответствующую условию функцию
 */
let _slideToggle = (target, duration = 500) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    if (window.getComputedStyle(target).display === 'none') {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  }
}
//=================
//SlideWidthToggle
/* let _slideWidthShrink = (target, duration = 500) => {
	target.style.transitionProperty = 'width, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.width = target.offsetWidth + 'px';
	target.offsetWidth;
	target.style.overflow = 'hidden';
	target.style.width = 0;
	target.style.paddingRight = 0;
	target.style.paddingLeft = 0;
	target.style.marginRight = 0;
	target.style.marginLeft = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('width');
		target.style.removeProperty('padding-right');
		target.style.removeProperty('padding-left');
		target.style.removeProperty('margin-right');
		target.style.removeProperty('margin-left');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideWidthGrow = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'inline-block';

	target.style.display = display;
    let width = target.offsetWidth; 
	target.style.overflow = 'hidden';
	target.style.width = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetWidth;
	target.style.transitionProperty = "width, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.width = width + 'px';
	target.style.removeProperty('padding-right');
	target.style.removeProperty('padding-left');
	target.style.removeProperty('margin-right');
	target.style.removeProperty('margin-left');
	window.setTimeout(() => {
		target.style.removeProperty('width');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideWidthToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideWidthGrow(target, duration);
		} else {
			return _slideWidthShrink(target, duration);
		}
	}
} */
//========================================
//Wrap
function _wrap(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
//========================================
//RemoveClasses
/* function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
} */
//========================================
//IsHidden
/* function _is_hidden(el) {
	return (el.offsetParent === null)
} */
//========================================
//Animate
/* function animate({ timing, draw, duration }) {
	let start = performance.now();
	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
}
function makeEaseOut(timing) {
	return function (timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}
function makeEaseInOut(timing) {
	return function (timeFraction) {
		if (timeFraction < .5)
			return timing(2 * timeFraction) / 2;
		else
			return (2 - timing(2 * (1 - timeFraction))) / 2;
	}
}
function quad(timeFraction) {
	return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
	return 1 - Math.sin(Math.acos(timeFraction));
} */
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/

//Полифилы
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

// Ограничение кол-ва вводимых символов 
/* function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    }
} */


/**
 * Функци подключает плагин SimpleBar для стилизации скролл-бара, в случае неудаче блоку задается стиль ovetflowY = 'auto'
 * @param {String || Object} selector - селектор блока, в котором требуется стилизация скролла
 */
function plugSimpleBar(selector) {
  let simpleBarEl
  if (typeof selector === 'string') {
    simpleBarEl = document.querySelector(selector);
  }
  else if (typeof selector === 'object') {
    simpleBarEl = selector;
  }
  else return;
  
  if (simpleBarEl) {
    try {
      return new SimpleBar(simpleBarEl);
    } catch {
      simpleBarEl.style.ovetflowY = 'auto';
    }
  }
}


/**
 * Валиация ввода - только цифры
 * @param {event} event
 */
function numOnly(event) {
  if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
    // Разрешаем: Ctrl+A
    (event.keyCode == 65 && event.ctrlKey === true) ||
    // Разрешаем: home, end, влево, вправо
    (event.keyCode >= 35 && event.keyCode <= 39)) {
    // Ничего не делаем
    return;
  } else {
    // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
      event.preventDefault();
    }
  }
}
// autoComplete.js

const autoCompleteJS = new autoComplete({
	// API Advanced Configuration Object
	selector: "#headerAutoComplete",
	placeHolder: "Поиск новости...",
	data: {
	src: ['Обувь России не будет выплачивать дивиденды за 20 г - Титов',
				'Облигация ВЭБ.РФ-001Р-К286, выплата купона',
				'Акции Магнита покажут опережающую динамику в среднесрочной перспективе - Газпромбанк',
				'Совет директоров ЦМТ 4 марта обсудит дивиденды',
				'Определение цены выкупа акций Банка Возрождение в связи с реорганизацией',
				'Чистая прибыль Газпром нефти по РСБУ в 20 г - 23, 3 %',
				'Минфин внесет законопроект по созданию базы секретной бухотчетности компаний',
				'лидеры роста и падения на ММВБ сегодня',
				'Итоги дня: IMOEX - 0.3 % Lonely day.',
				'Ozon начал доставлять готовую еду',
				'«Круиз» выплатил 11 купон по 4 - му выпуску облигаций',
				'Ростехнадзор может приостановить работу фабрики Норникеля в Норильске',
				'ГДР Fix Price допущены к торгам на Московской бирже',
				'Ликвидность банковского сектора ЦБ',
				'Обрушение на предприятии Норильского никеля: компания разваливается по частям']
	},
	resultsList: {
		render: true,
		element: "ul",
		idName: "header-auto-list",
		className: "search__auto-list",
		destination: ".search__auto-complete",
		position: "afterend",
		//maxResults: 5,
		container: (element, data) => {
			const liItems = element.querySelectorAll('li');
			document.querySelector("#headerAutoComplete").addEventListener("navigate", function (event) {
				liItems.forEach(li => li.classList.remove('_active'));
				let index = event.detail.selection.index;
				if (liItems[index]) {
					liItems[index].classList.add('_active');
				}
			});			
		},
		noResults: (list, query) => {
			// Create "No Results" message element
			const message = document.createElement("div");
			// Add class to the created element
			message.setAttribute("class", "no_result");
			// Add message text content
			message.innerHTML = `<span>По запросу "${query}" ничего не найдено</span>`;
			// Append message element to the results list
			list.appendChild(message);
		},
	},
	resultItem: {
		idName: "header-auto-item",
		className: "search__auto-item",
		highlight: {
			render: true,
		},
		selected: {
			className: "autoComplete_selected"
		}
	},
	onSelection: (feedback) => {
		console.log(feedback);
	},

});


//Placeholers
let inputs = document.querySelectorAll('.input');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length) {
		for (let index = 0; index < inputs.length; index++) {
			let input = inputs[index];
			input.addEventListener('focus', function (e) {
				input_focus_add(input);
			});
      input.addEventListener('blur', function(e) {
				input_focus_remove(input);
      });
			input.addEventListener('change', () => {
      if (input.value)
        input.parentElement.classList.add('_filled');
      else
        input.parentElement.classList.remove('_filled');
    	});
		}
	}
}
function input_placeholder_add(input) {
	input.placeholder = input.getAttribute('data-value');
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}




window.addEventListener('resize', e => {
  ChangeFontSize();
});

//document.body.style.transition = 'all 0.25s linear';

// Styles object ======================================================================
let viewSettitgs = {
  themes: [],
  fontFamilies: [],
  fontWeights: [],
  fontSize: [],
  fontSizeArticle: []
}

let  exCookieDays = 365;

// СМЕНА СТИЛЕЙ ======================================================================

let themeLink = document.getElementById("theme-link");
let themeBtns = document.querySelectorAll('input[name="theme"][type="radio"]');
let fontFamilyBtns = document.querySelectorAll('input[name="font-family"]');
let fontWeightBtns = document.querySelectorAll('input[name="font-weight"]');
let fontSizeBtns = document.querySelectorAll('input[name="font-size"]');
let fontFamilyEls = document.querySelectorAll('._font-family');
let fontWeightEls = document.querySelectorAll('._font-weight');
let fontSizeEls = document.querySelectorAll('._font-size');

const innerWidthPC = 992;
const innerWidthMob = 320;
//const minFontSize = 16;

bootFonts();

viewSettitgsInit();
syncTheme();
syncFontFamily();
syncFontWeight();
syncFontSize();

function viewSettitgsInit() {
  for (let i = 0; i < themeBtns.length; i++) {
    viewSettitgs.themes.push(themeBtns[i].value);
  }
  for (let i = 0; i < fontFamilyBtns.length; i++) {
    viewSettitgs.fontFamilies.push(fontFamilyBtns[i].value);
  }
  for (let i = 0; i < fontWeightBtns.length; i++) {
    viewSettitgs.fontWeights.push(fontWeightBtns[i].value);
  }
  const settingArticle = document.querySelector('.header__setting_article')
  if (settingArticle) {
    for (let i = 0; i < fontSizeBtns.length; i++) {
      viewSettitgs.fontSizeArticle.push(fontSizeBtns[i].value);
    }
  } else {
    for (let i = 0; i < fontSizeBtns.length; i++) {
      viewSettitgs.fontSize.push(fontSizeBtns[i].value);
    }
  }
}
function syncTheme() {

  let savedTheme = getCookie('theme');
  if (!viewSettitgs.themes.includes(savedTheme)) {
    savedTheme = localStorage.getItem('theme');
  }

  if (themeLink.href.includes(savedTheme)) { // checking whether the saved Theme matches the href
    return;
  }

  if (viewSettitgs.themes.includes(savedTheme)) {

    setCookie('theme', savedTheme, exCookieDays);
    localStorage.setItem('theme', savedTheme);

    for (let i = 0; i < themeBtns.length; i++) {
      if (themeBtns[i].value == savedTheme) {
        themeBtns[i].checked = true;
        break;
      }
    }
  }
  else {
    let theme;
    for (let i = 0; i < themeBtns.length; i++) {
      if (themeBtns[i].checked) {
        theme = themeBtns[i].value;
        break;
      }
    }
    setCookie('theme', theme, exCookieDays);
    localStorage.setItem('theme', theme);
  }
  ChangeTheme();
}
function syncFontFamily() {

  let savedFontFamily = getCookie('fontFamily');
  if (!viewSettitgs.fontFamilies.includes(savedFontFamily)) {
    savedFontFamily = localStorage.getItem('fontFamily');
  }

  if (viewSettitgs.fontFamilies.includes(savedFontFamily)) {

    setCookie('fontFamily', savedFontFamily, exCookieDays);
    localStorage.setItem('fontFamily', savedFontFamily);

    for (let i = 0; i < fontFamilyBtns.length; i++) {
      if (fontFamilyBtns[i].value == savedFontFamily) {
        fontFamilyBtns[i].checked = true;
        break;
      }
    }
  }
  else {
    let fontFamily;
    for (let i = 0; i < fontFamilyBtns.length; i++) {
      if (fontFamilyBtns[i].checked) {
        fontFamily = fontFamilyBtns[i].value;
        break;
      }
    }
    localStorage.setItem('fontFamily', fontFamily);
    setCookie('fontFamily', fontFamily, exCookieDays);
  }
  ChangeFontFamily();
}
function syncFontWeight() {
  
  let savedFontWeight = getCookie('fontWeight');

  if (!viewSettitgs.themes.includes(savedFontWeight)) {
    savedFontWeight = localStorage.getItem('fontWeight');
  }

  if (viewSettitgs.fontWeights.includes(savedFontWeight)) {

    setCookie('fontWeight', savedFontWeight, exCookieDays);
    localStorage.setItem('fontWeight', savedFontWeight);

    for (let i = 0; i < fontWeightBtns.length; i++) {
      if (fontWeightBtns[i].value == savedFontWeight) {
        fontWeightBtns[i].checked = true;
        break;
      }
    }
  }
  else {
    let fontWeight;
    for (let i = 0; i < fontWeightBtns.length; i++) {
      if (fontWeightBtns[i].checked) {
        fontWeight = fontWeightBtns[i].value;
        break;
      }
    }
    localStorage.setItem('fontWeight', fontWeight);
    setCookie('fontWeight', fontWeight, exCookieDays);
  }
  ChangeFontWeight();
}
function syncFontSize() {
  let fontSizesKey;
  if (document.querySelector('.header__setting_article')){
    fontSizesKey = 'fontSizeArticle'
  }
  else {
    fontSizesKey = 'fontSize'
  }

  let savedFontSize = getCookie(fontSizesKey);
  if (!viewSettitgs.themes.includes(savedFontSize)) {
    savedFontSize = localStorage.getItem(fontSizesKey);
  }

  if (viewSettitgs[fontSizesKey].includes(savedFontSize)) {

    setCookie(fontSizesKey, savedFontSize, exCookieDays);
    localStorage.setItem(fontSizesKey, savedFontSize);

    for (let i = 0; i < fontSizeBtns.length; i++) {
      if (fontSizeBtns[i].value == savedFontSize) {
        fontSizeBtns[i].checked = true;
        break;
      }
    }
  }
  else {
    let fontSize;
    for (let i = 0; i < fontSizeBtns.length; i++) {
      if (fontSizeBtns[i].checked) {
        fontSize = fontSizeBtns[i].value;
        break;
      }
    }
    localStorage.setItem(fontSizesKey, fontSize);
    setCookie(fontSizesKey, fontSize, exCookieDays);
  }
  ChangeFontSize();
}
setTimeout(() => {
  document.querySelector('.page').style.transition = 'all 0.25s linear';
  //document.querySelector('.article__content').style.transition = 'all 0.25s linear';
  bootFonts();
  for (let i = 0; i < fontSizeEls.length; i++) {
    fontSizeEls[i].style.transition = 'all 0.25s linear';
  }
  for (let i = 0; i < fontFamilyEls.length; i++) {
    fontFamilyEls[i].style.transition = 'all 0.25s linear';
  }
  for (let i = 0; i < fontWeightEls.length; i++) {
    fontWeightEls[i].style.transition = 'all 0.25s linear';
  }
}, 2000);

if (themeBtns) {
  for (let i = 0; i < themeBtns.length; i++) {
  themeBtns[i].addEventListener('click', ChangeTheme);
}
}
if (fontFamilyBtns) {
  for (let i = 0; i < fontFamilyBtns.length; i++) {
    fontFamilyBtns[i].addEventListener('click', ChangeFontFamily);
  }
}
if (fontWeightBtns) {
  for (let i = 0; i < fontWeightBtns.length; i++) {
    fontWeightBtns[i].addEventListener('click', ChangeFontWeight);
  }
}
if (fontSizeBtns) {
  for (let i = 0; i < fontSizeBtns.length; i++) {
    fontSizeBtns[i].addEventListener('click', ChangeFontSize);
  }
}
function ChangeTheme() {

  if (themeLink) {
    
    let defaultTheme = themeLink.dataset.path || themeLink.href;
    let path = defaultTheme.lastIndexOf('/');
    path = defaultTheme.slice(0, path + 1);

    let theme = '';
    for (let i = 0; i < themeBtns.length; i++) {
      if (themeBtns[i].checked) {
        theme = themeBtns[i].value;
        break;
      }
    }
    localStorage.setItem('theme', theme);
    setCookie('theme', theme, exCookieDays);
    themeLink.setAttribute("href", path + theme + '.min.css');
  }
}
function ChangeFontFamily() {
  let fontFamily = '';
  for (let i = 0; i < fontFamilyBtns.length; i++) {
    if (fontFamilyBtns[i].checked) {
      fontFamily = fontFamilyBtns[i].value;
      break;
    }
  }
  for (let j = 0; j < fontFamilyEls.length; j++) {
    fontFamilyEls[j].style.fontFamily = fontFamily;
  }

  localStorage.setItem('fontFamily', fontFamily);
  setCookie('fontFamily', fontFamily, exCookieDays);
}
function ChangeFontWeight() {
  let fontWeight = '';
  for (let i = 0; i < fontWeightBtns.length; i++) {
    if (fontWeightBtns[i].checked) {
      fontWeight = fontWeightBtns[i].value;
      break;
    }
  }
  for (let j = 0; j < fontWeightEls.length; j++) {
    fontWeightEls[j].style.fontWeight = fontWeight;
  }
  localStorage.setItem('fontWeight', fontWeight);
  setCookie('fontWeight', fontWeight, exCookieDays);
}
function ChangeFontSize() {
  let blockFontSize;
  let fontSize;
  let mobFontSize;
  let minFontSize;

  for (let i = 0; i < fontSizeBtns.length; i++) {
    if (fontSizeBtns[i].checked) {
      blockFontSize = parseInt(fontSizeBtns[i].value.replace('px', ''));
      if (!blockFontSize) { blockFontSize = 14 }
      break;
    }
  }
  for (let j = 0; j < fontSizeEls.length; j++) {
    let block = fontSizeEls[j];
    let scale = parseFloat(block.getAttribute('data-fontscale')); 
    if (!scale) {
      scale = 1;
    } 
    minFontSize = parseFloat(block.getAttribute('data-minfontsize'));
    if (!minFontSize) {
      minFontSize = blockFontSize*scale;
    } 
    mobFontSize = parseFloat(block.getAttribute('data-mobfontsize'));
    if (!mobFontSize) {
      mobFontSize = blockFontSize;
    }

    if ((window.innerWidth < innerWidthPC) && (blockFontSize > mobFontSize)) {
      let k = (window.innerWidth - innerWidthMob) / (innerWidthPC - innerWidthMob);
      fontSize = mobFontSize * (1 - k) + blockFontSize * k;
      fontSize *= scale;
    }
    else {
      fontSize = blockFontSize * scale;
    }

    if (fontSize < minFontSize && scale != 1) {
      fontSize = minFontSize;
    }
    block.style.fontSize = fontSize + 'px';
  }

  let fontSizesKey;
  if (document.querySelector('.header__setting_article')) {
    fontSizesKey = 'fontSizeArticle'
  }
  else {
    fontSizesKey = 'fontSize'
  }
  localStorage.setItem(fontSizesKey, (blockFontSize + 'px'));
  setCookie(fontSizesKey, (blockFontSize + 'px'), exCookieDays);
}

function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ';path=/';
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);

  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Changing the title of the article
let articleTitle = document.querySelector('.article__title');
if (articleTitle) {
  document.querySelector('title').textContent = articleTitle.textContent.trim();
}

// Loading all fonts
function bootFonts() {
  let timeout = 20000;
  let footer = document.querySelector('footer');
  for (let i = 0; i < fontWeightBtns.length; i++) {
    for (let j = 0; j <  fontFamilyBtns.length; j++) {
      let div = document.createElement('div');
      footer.appendChild(div);
      div.style.width = '0';
      div.style.height = '0';
      div.textContent = 'div' + i + j;
      div.style.fontWeight = fontWeightBtns[i].value;
      div.style.fontFamily = fontFamilyBtns[j].value;
      
      setTimeout(() => {
        footer.removeChild(div);
      }, timeout);
    }
  }
}

// Scroll simpleBar
let pageInnerSB
let pageInner = document.querySelector('.page__inner');
if (pageInner) {
  pageInnerSB = new SimpleBar(pageInner, {});
}
let settingBody = document.querySelector('.setting__body');
if (settingBody) {
  new SimpleBar(settingBody, {});
}

// Animation of search
let search = document.querySelector('.search');
let searchIcon = document.querySelector('.search__icon');
let searchInput = search.querySelector('input');
let searchClsBtn = document.querySelector('.search__cls-btn');
let searchSubmit = document.querySelector('.search__submit');// search__submit

searchIcon.addEventListener('click', ()=>{
  search.classList.toggle('_active');
  //searchInput.value = '';
  //searchInput.placeholder = searchInput.getAttribute('data-value');
  searchInput.focus(); 

});
searchClsBtn.addEventListener('click', () => {
  searchInput.value = '';
  search.classList.remove('_active');
});
searchSubmit.addEventListener('click', () => {
  //searchInput.value = '';
  search.classList.remove('_active');
});

let settingBtn = document.querySelector('.setting__icon');
let setting = document.querySelector('.setting');
settingBtn.addEventListener('click', () => {
  setting.classList.toggle('_active');
});

let menuLink = document.querySelectorAll('.menu__link');
for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', ()=>{
    iconMenu.click();
  });
}

document.documentElement.addEventListener('click', function(e) {
  if (!e.target.closest('.setting')) {
    setting.classList.remove('_active')
  }
  if (!e.target.closest('.search')) {
    search.classList.remove('_active');
    search.querySelector('input').value = '';
  }
});

// Hover
const headerTitleContent = document.querySelector('.header__title-content');
const headerBackIcon = document.querySelector('.header__back-icon');
headerTitleContent.addEventListener('mouseenter', () => {
  if (headerBackIcon) headerBackIcon.classList.add('_active');
});
headerTitleContent.addEventListener('mouseleave', () => {
  if (headerBackIcon) headerBackIcon.classList.remove('_active');
});

let newsLink = document.querySelectorAll('.news__link a'); // news__line

for (let i = 0; i < newsLink.length; i++) {
  newsLink[i].addEventListener('mouseenter', ()=> {
    newsLink[i].closest('.news__line').classList.add('_hover');
  });
  newsLink[i].addEventListener('mouseleave', ()=> {
    newsLink[i].closest('.news__line').classList.remove('_hover');
  });
}

// hover end =====

window.addEventListener('storage', ()=>{
  syncTheme();
  syncFontFamily();
  syncFontWeight();
  syncFontSize();
});


// tippy
tippy('[data-tippy-content]');

// Для предотвращения мигания основного меню и меню фильтров 
const headerSearchBody = document.querySelector('header .search__body');
const headerMenuBody  = document.querySelector('header .menu__body');

headerSearchBody.style.display = ``;
headerMenuBody.style.display = ``;

plugSimpleBar('.filters__content');


// Обработчик открытия/закрытия окна "фильтры"
const filtersBtn = document.querySelector('.filters__icon');
const filtersBody = document.querySelector('.filters__body');
const filtersBodyClose = document.querySelector('.filters__close');

if (filtersBtn && filtersBody && filtersBodyClose) {

  filtersBtn.addEventListener('click', (e) => {
    filtersBtn.parentElement.classList.toggle('_open')
    e.preventDefault();
  });

  filtersBody.addEventListener('click', (e) => {
    if (e.target == filtersBody || e.target.closest('.filters__close')) {
      filtersBody.closest('._open').classList.remove('_open');
    }
  });  

}

// Обработка сброса формы
const filtersBodyContent = document.querySelector('.filters__content');
//const filtersInputs = filtersBody.querySelectorAll('input');
let inputChange = new Event('change');

filtersBodyContent.addEventListener('reset', (e) => {
  /* filtersInputs.forEach( input => { // сброс ползунка 
    setTimeout(() => {
      input.dispatchEvent(inputChange);
    }, 50);
  }); */
  clearSumoContents();
})


// Подключения кастомного селекта stocks_id
if ($('#news_id').length) $('#news_id').SumoSelect({ 
  placeholder: 'Новости',
  csvDispCount: 2,
  captionFormat: 'Выбрано ({0})',
  captionFormatAllSelected: 'Выбраны все ({0})',
});
if ($('#stocks_id').length) $('#stocks_id').SumoSelect({ 
  placeholder: 'Акции',
  csvDispCount: 2,
  captionFormat: 'Выбрано ({0})',
  captionFormatAllSelected: 'Выбраны все ({0}) ',
});

var sumoSelects = $('#country_id');
if (sumoSelects.length) sumoSelects.SumoSelect(); 

// подключение кастомного скролла к селекту
function plugSimpleBarSumoSelect() {
  let optWrapperUls = document.querySelectorAll('.optWrapper');
  if (optWrapperUls.length) {
    optWrapperUls.forEach(element => {
      plugSimpleBar(element);
    });
  } 
}
plugSimpleBarSumoSelect();

// Функция сброса 
function clearSumoContents(){
  $.each(sumoSelects, function() {
    this.sumo.unSelectAll();
    this.sumo.selectItem(0);
  })
 $('#news_id')[0].sumo.unSelectAll();
 $('#stocks_id')[0].sumo.unSelectAll();
}


// Подключение календаря
Datepicker.locales.ru = {
  days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  daysShort: ['Вск', 'Пнд', 'Втр', 'Сре', 'Чтв', 'Птн', 'Суб'],
  daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  today: 'Today',
  clear: 'Очистить',
  titleFormat: 'MM y',
  format: 'dd.mm.yyyy',
  weekStart: 1,
};

let filterDatepicker;
let filterDateRargeElm = document.querySelector('.filters__date-input');
if (filterDateRargeElm) {
  const arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6L2.29289 5.29289L1.58579 6L2.29289 6.70711L3 6ZM8.70711 10.2929L3.70711 5.29289L2.29289 6.70711L7.29289 11.7071L8.70711 10.2929ZM3.70711 6.70711L8.70711 1.7071L7.29289 0.292891L2.29289 5.29289L3.70711 6.70711Z"/></svg>`;
  filterDatepicker = new Datepicker(filterDateRargeElm, {
    autohide: true,
    daysOfWeekDisabled: [],
    daysOfWeekHighlighted: [],
    nextArrow: arrow,
    prevArrow: arrow,
    todayBtnMode: 1,
    clearBtn: true,
    format: 'dd.mm.yyyy',
    container: '.filters__datepicker',
    language: "ru",
  });
}
// ==============================

//RANGE
// Подключение ползунка
/* let filtersBodyRangeSliderObjs = [];
const filtersBodyRangeSliderEls = document.querySelectorAll('.filters__range-slider');
filtersBodyRangeSliderEls.forEach( el => {

  filtersBodyRangeSliderObjs.push({
    target: el,
    settings: {
      start: [1, 1000],
      margin: 10,
      connect: true,
      range: {
        'min': [0],
        'max': [1000]
      }
    },
    wNumbFormat: wNumb({
      decimals: 0,
      thousand: '',
      suffix: "М ₽"
    })
  });
});

filtersBodyRangeSliderObjs.forEach( obj => plugNoUiSlider(obj));
 */

/**
 * Функция подключает noUiSlider 
 * @param {Object} obj - одержит селектор или объект к которому подключается слайдер и  объект настроек
 * Ищет инпуты в родительском элементе и подключает их к слайдеру
 */
/* function plugNoUiSlider(obj) {

  if (!obj || !obj.target || !obj.settings || !obj.wNumbFormat) {
    console.log('Плагин NoUiSlider не може быть подключен. function plugNoUiSlider(obj)');
    return;
  }

  let sliderEl;
  if (typeof obj.target == 'string') 
    sliderEl = document.querySelector(obj.target);
  else if (typeof obj.target == 'object')
    sliderEl = obj.target;
  else {
    console.log('Плагин NoUiSlider не може быть подключен. Не определен целевой объект');
    return;
  }
  

  if (sliderEl) {
    const inputs = sliderEl.parentElement.querySelectorAll('input');
    slider = noUiSlider.create(sliderEl, {
      ...obj.settings,
      format: obj.wNumbFormat
    });

    if (inputs) {

      slider.on('slide', (params) => {
        inputs.forEach((input, i) => {
          input.value = params[i];
        });
      });

      inputs.forEach((input) => {
        input.addEventListener('keydown', numOnly);
        input.addEventListener('blur', inputBlur);
        input.addEventListener('focus', (e) => { e.target.select() });
        input.addEventListener('change', setSliderValues);

        input.focus();
        input.blur();
      })
    }

    function inputBlur() {
      let x = Number(obj.wNumbFormat.from(this.value));
      this.value = obj.wNumbFormat.to(x);
    }

    function setSliderValues() {
      let inputsValues = [];
      inputs.forEach(input => inputsValues.push(input.value));
      sliderEl.noUiSlider.set(inputsValues);
    }
  }
}
 */