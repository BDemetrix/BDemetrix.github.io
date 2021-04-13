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
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
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

if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 500, '');
	}
}
//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 0;
	let menuBody = document.querySelector(".menu__body"),
		logo = document.querySelector('.top-header__column--logo');
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			scroll_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
			logo.classList.toggle("_active");
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
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
            html.classList.remove("_lock");
            if (window.innerWidth > 767.98) {
                header.style.backgroundPosition = null; 
            }
            
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
        if (window.innerWidth > 767.98) {
            let X = -(1920 - width)/2 + 'px';
            header.style.backgroundPositionX = X;
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
let title = document.querySelectorAll('._letter-animation');
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
}
//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
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
}
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
				_slideToggle(spoller.nextElementSibling);

				setTimeout(function () {
					spollersGo = true;
				}, 500);
			}
		});
	}
}
//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
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
}
//=================
//SearchInList
function search_in_list(input) {
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
}
//=================
//DigiFormat
function digi(str) {
	var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
	return r;
}
//=================
//DiGiAnimate
function digi_animate(digi_animate) {
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
}
//=================
//Popups
let popup_link = document.querySelectorAll('._popup-link');
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
});
//=================
//SlideToggle
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
let _slideWidthShrink = (target, duration = 500) => {
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
}
//========================================
//Wrap
function _wrap(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
//========================================
//IsHidden
function _is_hidden(el) {
	return (el.offsetParent === null)
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
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
}
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
function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    }
}
// Функции формата ввода
function toValue(value) {
    let x = Math.round(value),
        a = 0, b = 0, s = '';
    if (x >= 1000) {
        a = Math.floor(x / 1000);
        b = x - a * 1000;
        s = a + ' ';
        if (b == 0) {
            s += '000';
        } else if (b < 10) {
            s += ('00' + b);
        } else if (b < 100) {
            s += ('0' + b);
        } else {
            s += + b;
        }
    } else {
        s = x + '';
    }
    return s;
}
function fromValue(value) {
    return Number(value.replace(' ', ''));
}
//NUMBERS ONLY
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
//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

let slider_about = new Swiper('.about__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.about__more .more__item_next',
		prevEl: '.about__more .more__item_prev',
	},
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener('submit', form_submit);
	}
}
async function form_submit(e) {
	let btn = e.target;
	let form = btn.closest('form');
	let error = form_validate(form);
	if (error == 0) {
		let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
		let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
		const message = form.getAttribute('data-message');
		const ajax = form.getAttribute('data-ajax');

		//SendForm
		if (ajax) {
			e.preventDefault();
			let formData = new FormData(form);
			form.classList.add('_sending');
			let response = await fetch(formAction, {
				method: formMethod,
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				form.classList.remove('_sending');
				if (message) {
					popup_open('_' + message + '-message');
				}
				form_clean(form);
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		}
	} else {
		let form_error = form.querySelectorAll('._error');
		if (form_error && form.classList.contains('_goto-error')) {
			_goto(form_error[0], 1000, 50);
		}
		e.preventDefault();
	}
}
function form_validate(form) {
	let error = 0;
	let form_req = form.querySelectorAll('._req');
	if (form_req.length > 0) {
		for (let index = 0; index < form_req.length; index++) {
			const el = form_req[index];
			if (!_is_hidden(el)) {
				error += form_validate_input(el);
			}
		}
	}
	return error;
}
function form_validate_input(input) {
	let error = 0;
	let input_g_value = input.getAttribute('data-value');

	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
		if (input.value != input_g_value) {
			let em = input.value.replace(" ", "");
			input.value = em;
		}
		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == '' || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}
	return error;
}
function form_add_error(input) {
	input.classList.add('_error');
	input.parentElement.classList.add('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
	let input_error_text = input.getAttribute('data-error');
	if (input_error_text && input_error_text != '') {
		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
	}
}
function form_remove_error(input) {
	input.classList.remove('_error');
	input.parentElement.classList.remove('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}
function form_clean(form) {
	let inputs = form.querySelectorAll('input,textarea');
	for (let index = 0; index < inputs.length; index++) {
		const el = inputs[index];
		el.parentElement.classList.remove('_focus');
		el.classList.remove('_focus');
		el.value = el.getAttribute('data-value');
	}
	let checkboxes = form.querySelectorAll('.checkbox__input');
	if (checkboxes.length > 0) {
		for (let index = 0; index < checkboxes.length; index++) {
			const checkbox = checkboxes[index];
			checkbox.checked = false;
		}
	}
	let selects = form.querySelectorAll('select');
	if (selects.length > 0) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_default_value = select.getAttribute('data-default');
			select.value = select_default_value;
			select_item(select);
		}
	}
}

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
	const element = viewPass[index];
	element.addEventListener("click", function (e) {
		if (element.classList.contains('_active')) {
			element.parentElement.querySelector('input').setAttribute("type", "password");
		} else {
			element.parentElement.querySelector('input').setAttribute("type", "text");
		}
		element.classList.toggle('_active');
	});
}


//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.code === 'Escape') {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			let input = inputs[index];
			input_placeholder_add(input);
            if (input.value != '' && input.value != input.getAttribute('data-value')) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
                if (input.value == input.getAttribute('data-value')) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass") {
					input.setAttribute('type', 'password');
				}
				if (input.classList.contains('_date')) {
					/*
					input.classList.add('_mask');
					Inputmask("99.99.9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input.getAttribute('data-value'));
						}
					}).mask(input);
					*/
				}
				if (input.classList.contains('_phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					input.classList.add('_mask');
                    Inputmask("+7(999) 999 9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
                            input_clear_mask(input, input.getAttribute('data-value'));
						}
					}).mask(input);
				}
				if (input.classList.contains('_digital')) {
					input.classList.add('_mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
                            input_clear_mask(input, input.getAttribute('data-value'));
						}
					}).mask(input);
				}
				form_remove_error(input);
			});
            input.addEventListener('blur', function(e) {
                if (input.value == '') {
                    input.value = input.getAttribute('data-value');
                    input_focus_remove(input);
                    if (input.classList.contains('_mask')) {
                        input_clear_mask(input, input.getAttribute('data-value'));
                    }
                    if (input.getAttribute('data-type') === "pass") {
                        input.setAttribute('type', 'text');
                    }
                }
            });
                
            
			if (input.classList.contains('_date')) {
				datepicker(input, {
					customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
			}
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}

//QUANTITY
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
        quantityButton.addEventListener("mousedown", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}

//RANGE
// PRISE-FILTER
const priceSlider = document.querySelector('.price-filter__slider');
let wNumbFormat = wNumb({
        decimals: 0,
        thousand: ' ',
        });
if (priceSlider) {
	noUiSlider.create(priceSlider, {
        start: [0, 200000],
        margin: 60000,
        connect: true,
        format: wNumbFormat,
		tooltips: [true, true],
		range: {
			'min': [0],
			'max': [200000]
		}
	});

	let priceStart = document.getElementById('price-start');
    let priceEnd = document.getElementById('price-end');
    priceStart.maxLength = 7;
    priceEnd.maxLength = 7;

    priceStart.addEventListener('keydown', numOnly);
    priceEnd.addEventListener('keydown', numOnly);
    priceStart.addEventListener('keyup', priceKeyUp);
    priceEnd.addEventListener('keyup', priceKeyUp);
    
    function priceKeyUp() {  
        let x = Number(wNumbFormat.from(this.value));
        this.value = wNumbFormat.to(x);
    }

    priceStart.addEventListener('focus', (e) => { e.target.select() });
    priceEnd.addEventListener('focus', (e) => { e.target.select() });

	priceStart.addEventListener('change', setPriceValues);
	priceEnd.addEventListener('change', setPriceValues);

	function setPriceValues() {
        let priceStartValue, priceEndValue;
        if (priceStart.value != '') {
            priceStartValue = priceStart.value;
        }
        if (priceEnd.value != '') {
            priceEndValue = priceEnd.value;
        }
        priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
    }
}

//let scr_body = document.querySelector('body');
let scr_blocks = document.querySelectorAll('._scr-sector');
let scr_items = document.querySelectorAll('._scr-item');
let scr_fix_block = document.querySelectorAll('._side-wrapper');
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;

//ScrollOnScroll
window.addEventListener('scroll', scroll_scroll);
function scroll_scroll() {
	//scr_body.setAttribute('data-scroll', pageYOffset);
	let src_value = pageYOffset;
	let header = document.querySelector('header.header');
	if (header !== null) {
		if (src_value > 10) {
			header.classList.add('_scroll');
		} else {
			header.classList.remove('_scroll');
		}
	}
	if (scr_blocks.length > 0) {
		for (let index = 0; index < scr_blocks.length; index++) {
			let block = scr_blocks[index];
			let block_offset = offset(block).top;
			let block_height = block.offsetHeight;

			if ((pageYOffset > block_offset - window.innerHeight / 1.5) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				block.classList.add('_scr-sector_active');
			} else {
				if (block.classList.contains('_scr-sector_active')) {
					block.classList.remove('_scr-sector_active');
				}
			}
			if ((pageYOffset > block_offset - window.innerHeight / 2) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				if (!block.classList.contains('_scr-sector_current')) {
					block.classList.add('_scr-sector_current');
				}
			} else {
				if (block.classList.contains('_scr-sector_current')) {
					block.classList.remove('_scr-sector_current');
				}
			}
		}
	}
	if (scr_items.length > 0) {
		for (let index = 0; index < scr_items.length; index++) {
			let scr_item = scr_items[index];
			let scr_item_offset = offset(scr_item).top;
			let scr_item_height = scr_item.offsetHeight;


			let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
			if (window.innerHeight > scr_item_height) {
				scr_item_point = window.innerHeight - scr_item_height / 3;
			}

			if ((src_value > scr_item_offset - scr_item_point) && src_value < (scr_item_offset + scr_item_height)) {
				scr_item.classList.add('_active');
				scroll_load_item(scr_item);
			} else {
				scr_item.classList.remove('_active');
			}
			if (((src_value > scr_item_offset - window.innerHeight))) {
				if (scr_item.querySelectorAll('._lazy').length > 0) {
					scroll_lazy(scr_item);
				}
			}
		}
	}

	if (scr_fix_block.length > 0) {
		fix_block(scr_fix_block, src_value);
	}
	let custom_scroll_line = document.querySelector('._custom-scroll__line');
	if (custom_scroll_line) {
		let window_height = window.innerHeight;
		let content_height = document.querySelector('.wrapper').offsetHeight;
		let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
		let custom_scroll_line_height = custom_scroll_line.offsetHeight;
		custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
	}

	if (src_value > scrollDirection) {
		// downscroll code
	} else {
		// upscroll code
	}
	scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
	//document.addEventListener("DOMContentLoaded", scroll_scroll);
	scroll_scroll();
}, 100);

function scroll_lazy(scr_item) {
	let lazy_src = scr_item.querySelectorAll('*[data-src]');
	if (lazy_src.length > 0) {
		for (let index = 0; index < lazy_src.length; index++) {
			const el = lazy_src[index];
			if (!el.classList.contains('_loaded')) {
				el.setAttribute('src', el.getAttribute('data-src'));
				el.classList.add('_loaded');
			}
		}
	}
	let lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');
	if (lazy_srcset.length > 0) {
		for (let index = 0; index < lazy_srcset.length; index++) {
			const el = lazy_srcset[index];
			if (!el.classList.contains('_loaded')) {
				el.setAttribute('srcset', el.getAttribute('data-srcset'));
				el.classList.add('_loaded');
			}
		}
	}
}

function scroll_load_item(scr_item) {
	if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
		let map_item = document.getElementById('map');
		if (map_item) {
			scr_item.classList.add('_loaded-map');
			map();
		}
	}
}

//FullScreenScroll
if (scr_blocks.length > 0 && !isMobile.any()) {
	disableScroll();
	window.addEventListener('wheel', full_scroll);
}
function full_scroll(e) {
	let viewport_height = window.innerHeight;
	if (viewport_height >= scr_min_height) {
		if (scrolling_full) {
			// ВЫЧИСЛИТЬ!!!
			let current_scroll = pageYOffset;//parseInt(scr_body.getAttribute('data-scroll'));
			//
			let current_block = document.querySelector('._scr-sector._scr-sector_current');
			let current_block_pos = offset(current_block).top;
			let current_block_height = current_block.offsetHeight;
			let current_block_next = current_block.nextElementSibling;
			let current_block_prev = current_block.previousElementSibling;
			let block_pos;
			if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
				if (current_block_prev) {
					let current_block_prev_height = current_block_prev.offsetHeight;
					block_pos = offset(current_block_prev).top;
					if (current_block_height <= viewport_height) {
						if (current_block_prev_height >= viewport_height) {
							block_pos = block_pos + (current_block_prev_height - viewport_height);
							full_scroll_to_sector(block_pos);
						}
					} else {
						enableScroll();
						if (current_scroll <= current_block_pos) {
							full_scroll_to_sector(block_pos);
						}
					}
				} else {
					full_scroll_pagestart();
				}
			} else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
				if (current_block_next) {
					block_pos = offset(current_block_next).top;
					if (current_block_height <= viewport_height) {
						full_scroll_to_sector(block_pos);
					} else {
						enableScroll();
						if (current_scroll >= block_pos - viewport_height) {
							full_scroll_to_sector(block_pos);
						}
					}
				} else {
					full_scroll_pageend();
				}
			}
		} else {
			disableScroll();
		}
	} else {
		enableScroll();
	}
}
function full_scroll_to_sector(pos) {
	disableScroll();
	scrolling_full = false;
	_goto(pos, 800);

	let scr_pause = 500;
	if (navigator.appVersion.indexOf("Mac") != -1) {
		scr_pause = 1000;
	};
	setTimeout(function () {
		scrolling_full = true;
	}, scr_pause);
}
function full_scroll_pagestart() { }
function full_scroll_pageend() { }

//ScrollOnClick (Navigation)
let link = document.querySelectorAll('._goto-block');
if (link) {
	let blocks = [];
	for (let index = 0; index < link.length; index++) {
		let el = link[index];
		let block_name = el.getAttribute('href').replace('#', '');
		if (block_name != '' && !~blocks.indexOf(block_name)) {
			blocks.push(block_name);
		}
		el.addEventListener('click', function (e) {
			if (document.querySelector('.menu__body._active')) {
				menu_close();
				body_lock_remove(500);
			}
			let target_block_class = el.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		})
	}

	window.addEventListener('scroll', function (el) {
		let old_current_link = document.querySelectorAll('._goto-block._active');
		if (old_current_link) {
			for (let index = 0; index < old_current_link.length; index++) {
				let el = old_current_link[index];
				el.classList.remove('_active');
			}
		}
		for (let index = 0; index < blocks.length; index++) {
			let block = blocks[index];
			let block_item = document.querySelector('.' + block);
			if (block_item) {
				let block_offset = offset(block_item).top;
				let block_height = block_item.offsetHeight;
				if ((pageYOffset > block_offset - window.innerHeight / 3) && pageYOffset < (block_offset + block_height) - window.innerHeight / 3) {
					let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
					for (let index = 0; index < current_links.length; index++) {
						let current_link = current_links[index];
						current_link.classList.add('_active');
					}
				}
			}
		}
	})
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
	for (let index = 0; index < goto_links.length; index++) {
		let goto_link = goto_links[index];
		goto_link.addEventListener('click', function (e) {
			let target_block_class = goto_link.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		});
	}
}
function _goto(target_block, speed, offset = 0) {
	let header = '';
	//OffsetHeader
	//if (window.innerWidth < 992) {
	//	header = 'header';
	//}
	let options = {
		speedAsDuration: true,
		speed: speed,
		header: header,
		offset: offset,
		easing: 'easeOutQuad',
	};
	let scr = new SmoothScroll();
	scr.animateScroll(target_block, '', options);
}

//SameFunctions
function offset(el) {
	var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function disableScroll() {
	if (window.addEventListener) // older FF
		window.addEventListener('DOMMouseScroll', preventDefault, false);
	document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove = preventDefault; // mobile
	document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
	if (window.removeEventListener)
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
	document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	document.onkeydown = null;
}
function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
	/*if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}*/
}

function fix_block(scr_fix_block, scr_value) {
	let window_width = parseInt(window.innerWidth);
	let window_height = parseInt(window.innerHeight);
	let header_height = parseInt(document.querySelector('header').offsetHeight) + 15;
	for (let index = 0; index < scr_fix_block.length; index++) {
		const block = scr_fix_block[index];
		let block_width = block.getAttribute('data-width');
		const item = block.querySelector('._side-block');
		if (!block_width) { block_width = 0; }
		if (window_width > block_width) {
			if (item.offsetHeight < window_height - (header_height + 30)) {
				if (scr_value > offset(block).top - (header_height + 15)) {
					item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
				} else {
					gotoRelative(item);
				}
				if (scr_value > (block.offsetHeight + offset(block).top) - (item.offsetHeight + (header_height + 15))) {
					block.style.cssText = "position:relative;";
					item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
				}
			} else {
				gotoRelative(item);
			}
		}
	}
	function gotoRelative(item) {
		item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
	}
}

if (!isMobile.any()) {
	//custom_scroll();
	/*
	window.addEventListener('wheel', scroll_animate, {
		capture: true,
		passive: true
	});
	window.addEventListener('resize', custom_scroll, {
		capture: true,
		passive: true
	});
	*/
}
function custom_scroll(event) {
	scr_body.style.overflow = 'hidden';
	let window_height = window.innerHeight;
	let custom_scroll_line = document.querySelector('._custom-scroll__line');
	let custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
	let custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));
	if (custom_scroll_content_height > window_height) {
		if (!custom_scroll_line) {
			let custom_scroll = document.createElement('div');
			custom_scroll_line = document.createElement('div');
			custom_scroll.setAttribute('class', '_custom-scroll');
			custom_scroll_line.setAttribute('class', '_custom-scroll__line');
			custom_scroll.appendChild(custom_scroll_line);
			scr_body.appendChild(custom_scroll);
		}
		custom_scroll_line.style.height = custom_cursor_height + 'px';
	}
}

let new_pos = pageYOffset;
function scroll_animate(event) {
	let window_height = window.innerHeight;
	let content_height = document.querySelector('.wrapper').offsetHeight;
	let start_position = pageYOffset;
	let pos_add = 100;

	if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
		new_pos = new_pos - pos_add;
	} else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
		new_pos = new_pos + pos_add;
	}
	if (new_pos > (content_height - window_height)) new_pos = content_height - window_height;
	if (new_pos < 0) new_pos = 0;

	if (scrolling) {
		scrolling = false;
		_goto(new_pos, 1000);

		let scr_pause = 100;
		if (navigator.appVersion.indexOf("Mac") != -1) {
			scr_pause = scr_pause * 2;
		};
		setTimeout(function () {
			scrolling = true;
			_goto(new_pos, 1000);
		}, scr_pause);
	}
	//If native scroll
	//disableScroll();
}


let wrapper = document.getElementById('wrap');
if (wrapper) {
  //new SimpleBar(document.getElementById('wrap'));
  //var wrap = document.querySelector(".simplebar-content-wrapper"); //wrap
  var wrap = document.getElementById('wrap'); //wrap

  var wrapX = wrap.getBoundingClientRect().left;
  var wrapY = wrap.getBoundingClientRect().top;
  var blueWrap = document.querySelector(".blue-wrap");
  var blueTable = document.querySelector(".blue");
  var blueTableX = blueTable.getBoundingClientRect().left;
  var blueWrapX = blueWrap.getBoundingClientRect().left;
  var orangeWrap = document.querySelector(".orange-wrap");
  var orangeTable = document.querySelector(".orange");
  var orangeTableX = orangeTable.getBoundingClientRect().left;
  var orangeWrapX = orangeWrap.getBoundingClientRect().left;
  var orangeTableY = orangeTable.getBoundingClientRect().top;
  var orangeWrapY = orangeWrap.getBoundingClientRect().top;
  var difX = blueTableX - wrapX;
  var difY = orangeTableY - wrapY;
  wrap.addEventListener("scroll", fixTable);
}

function fixTable() {
  wrapX = wrap.getBoundingClientRect().left;
  wrapY = wrap.getBoundingClientRect().top;
  blueWrapX = blueWrap.getBoundingClientRect().left;
  blueTableX = blueTable.getBoundingClientRect().left;
  orangeWrapX = orangeWrap.getBoundingClientRect().left;
  orangeTableX = orangeTable.getBoundingClientRect().left;
  orangeWrapY = orangeWrap.getBoundingClientRect().top;
  orangeTableY = orangeTable.getBoundingClientRect().top;

  if (wrapX - blueWrapX >= 0) {
    blueTable.style.left = Math.abs(wrapX - blueWrapX) + difX + "px";
    orangeTable.style.left = Math.abs(wrapX - orangeWrapX) + difX + "px";
  } else {
    blueTable.style.left = wrapX - blueWrapX + difX + "px";
    orangeTable.style.left = wrapX - orangeWrapX + difX + "px";
  }
  orangeTable.style.top = wrapY - orangeWrapY + difY + "px";
}




//let flexTable;
let scrollableWrapper;
let table = document.querySelector('#table');
if (table) {
  let flexTable = createFlexTable(table, 3, 3);
  //initFixTable(flexTable);
  new SimpleBar(flexTable);
  scrollableWrapper = document.querySelector(".simplebar-content-wrapper");
  if (!scrollableWrapper) {
    scrollableWrapper = flexTable;
  }
  initFixTable(scrollableWrapper);
  let scrollableWrapperOnScroll = function () { { fixTableScroll(scrollableWrapper) }}
  scrollableWrapper.addEventListener("scroll", scrollableWrapperOnScroll);
  window.addEventListener("scroll", () => { fixTableScroll(scrollableWrapper) });
  if (!flexTable.overflowY) {
    //scrollableWrapper.removeEventListener("scroll", scrollableWrapperOnScroll);
    //scrollableWrapper.fixedWrap.style.position = 'sticky';
    //scrollableWrapper.fixedWrap.style.top = '0';
  }
  window.addEventListener('resize', () => { initFixTable(scrollableWrapper); });
}

// 
function initFixTable(flexTable) {
  flexTable.wrapX = flexTable.getBoundingClientRect().left;
  flexTable.wrapY = flexTable.getBoundingClientRect().top;
  flexTable.leftWrap = flexTable.querySelector('.flex-table__l-headers-wrapp'); // blueWrap 
  //flexTable.leftWrapX = flexTable.leftWrap.getBoundingClientRect().left;
  flexTable.leftTable = flexTable.querySelector('.flex-table__l-table');
  flexTable.leftTableX = flexTable.leftTable.getBoundingClientRect().left;
  flexTable.fixedWrap = flexTable.querySelector('.flex-table__fixed-headers-wrapp');
  //flexTable.fixedWrapX = flexTable.fixedWrap.getBoundingClientRect().left; //orange
  flexTable.fixedTable = flexTable.querySelector('.flex-table__fixed-table');
  //flexTable.fixedTableX = flexTable.fixedTable.getBoundingClientRect().left;
  //flexTable.fixedWrapY = flexTable.fixedWrap.getBoundingClientRect().top;
  flexTable.fixedTableY = flexTable.fixedTable.getBoundingClientRect().top;
  flexTable.difX = flexTable.leftTableX - flexTable.wrapX;
  flexTable.difY = flexTable.fixedTableY - flexTable.wrapY;
  flexTable.inner = flexTable.querySelector('.flex-table__inner');
  let wrappW = flexTable.getBoundingClientRect().width;
  let wrappH = flexTable.getBoundingClientRect().height;
  let innerW = flexTable.inner.getBoundingClientRect().width;
  let innerH = flexTable.inner.getBoundingClientRect().height;
  flexTable.overflowX = Math.floor(innerW) > Math.ceil(wrappW);
  flexTable.overflowY = Math.floor(innerH) > Math.ceil(wrappH);
  flexTable.rightHeader = flexTable.querySelector('.flex-table__r-thead');
  /* if (!flexTable.overflowY) {
    flexTable.fixedWrap.parentElement.style.overflow = 'visible';
    flexTable.fixedWrap.style.position = 'sticky';
    flexTable.fixedWrap.style.top = '0px';
  } */
  /* let ths = flexTable.rightHeader.querySelectorAll('th, td');
  ths.forEach(td => {
    td.style.position = 'sticky';
    //flexTable.rightHeader.style.top = '0px';
  }) */
}

function fixTableScroll(flexTable) {
 
    let wrapX;
    let difX;
    if (flexTable.overflowX) {
      wrapX = flexTable.getBoundingClientRect().left;
      difX = 0;
    }
    else {
      wrapX = flexTable.inner.getBoundingClientRect().left;
      let difX = flexTable.difX;
    }

    //let wrapX = flexTable.getBoundingClientRect().left;
    let flexTableTop = flexTable.getBoundingClientRect().top;
    let flexTableBottom = flexTable.getBoundingClientRect().bottom;
    let wrapY = flexTable.getBoundingClientRect().top;
    let leftWrapX = flexTable.leftWrap.getBoundingClientRect().left;
    let fixedWrapX = flexTable.fixedWrap.getBoundingClientRect().left;
    let fixedWrapY = flexTable.fixedWrap.getBoundingClientRect().top;
    //let fixedTable = flexTable.fixedTable;
    //let leftTable = flexTable.leftTable;
    //let difX = flexTable.difX;
    let difY = flexTable.difY;
  
    if (wrapX - leftWrapX >= 0) {
      flexTable.leftTable.style.left = Math.abs(wrapX - leftWrapX) + difX + "px";
      flexTable.fixedTable.style.left = Math.abs(wrapX - fixedWrapX) + difX + "px";
    } else {
      flexTable.leftTable.style.left = wrapX - leftWrapX + difX + "px";
      flexTable.fixedTable.style.left = wrapX - fixedWrapX + difX + "px";
    }
    if (flexTable.overflowY) {
      flexTable.fixedTable.style.top = wrapY - fixedWrapY + difY + "px";
      console.log(`wrapY = ${wrapY}`);
      console.log(`fixedWrapY = ${fixedWrapY}`);
    }
    else {
      /* 
      requestAnimationFrame(() => {
        flexTable.fixedWrap.style.top = - wrapY + "px";
        requestAnimationFrame(() => {
          flexTable.fixedWrap.style.top = - wrapY + "px";
        });
      }); */
      if (wrapY < 0 ) {
        //flexTable.fixedWrap.style.top = - wrapY + "px";
        /* requestAnimationFrame(()=>{
          //flexTable.fixedWrap.style.top = - wrapY + "px";
          //flexTable.rightHeader.style.top = - wrapY + "px";
        }); */

        /* console.log(`flexTable.offsetTop = ${flexTable.offsetTop}`);
        console.log(`flexTable.scrollTop = ${flexTable.scrollTop}`);
        console.log(`flexTable.getBoundingClientRect().bottom = ${flexTableBottom}`);
        console.log(`wrapY = ${wrapY}`);
        console.log(`fixedWrapY = ${fixedWrapY}`); */
      }
      else {
        //flexTable.fixedWrap.style.top =  0 + "px";
      }
    }
}


// Перестройка исходной таблици в соответствии с нужной конструкцией 
// для применения таблицы с фиксированными столбцом и заголовком

function createFlexTable(table, row, col) {
  let wrapper = createShell();
  let tops = [];
  tops.push(0)

  table.classList.forEach(el => {
    wrapper.classList.add(el);
  });
  
  let trs = table.querySelectorAll('tr');
  if (trs.length > row) {
    for (let i = 1; i < row; i++) {
      let top = trs[i].getBoundingClientRect().height;
      tops.push(tops[i - 1] + top);
    }
  }
  else {
    alert('В таблице недостаточно строк');
    return null;
  }
  for (let i = 0; i < row; i++) {
    let tds = trs[i].querySelectorAll('td, th');
    if (tds.length > 0) {
      let newFixedTr = document.createElement('tr') ;
      let newRightTHeadTr = document.createElement('tr');
      let topAdd = tds[0].getBoundingClientRect().height;
      for (let j = 0; j < col; j++) {
        newFixedTr.append(tds[j])
      }
      if (tds[col]) {
        for (let j = col; j < tds.length; j++) {
          tds[j].style.top = tops[i] + 'px';
          newRightTHeadTr.append(tds[j]);
        }

      } else {
        let td = document.createElement('td');
        td.style.top = tops[i] + 'px';
        newRightTHeadTr.append(document.createElement('td'));
      }
      topAdd += topAdd;
      wrapper.fixedTHead.append(newFixedTr);
      wrapper.rightTHead.append(newRightTHeadTr);
    }
  }

  if (trs[row]) {
    for (let i = row; i < trs.length; i++) {
      let tds = trs[i].querySelectorAll('td, th');
      if (tds.length > 0) {
        let newLeftTBodyTr = document.createElement('tr');
        let newRightTBodyTr = document.createElement('tr');

        for (let j = 0; j < col; j++) {
          newLeftTBodyTr.append(tds[j])
        }
        if (tds[col]) {
          for (let j = col; j < tds.length; j++) {
            newRightTBodyTr.append(tds[j]);
          }
        } else {
          let td = document.createElement('td');
          newRightTBodyTr.append(td);
        }
        wrapper.leftTBody.append(newLeftTBodyTr);
        wrapper.rightTBody.append(newRightTBodyTr)
      }
    }
  }
  table.before(wrapper);
  table.remove();
  return wrapper;
}

// Создание оболочки 
function createShell() {
  let wrapper = document.createElement('div'); 
  let inner = document.createElement('div');
  let leftDiv = document.createElement('div');
  let rightDiv = document.createElement('div');
  wrapper.classList.add('flex-table');
  inner.classList.add('flex-table__inner');
  leftDiv.classList.add('flex-table__l-side');
  rightDiv.classList.add('flex-table__r-side');
  wrapper.append(inner);
  inner.append(leftDiv);
  inner.append(rightDiv);

  let fixedHeaderWrapp = document.createElement('div');
  let leftHeadersWrapp = document.createElement('div');
  fixedHeaderWrapp.classList.add('flex-table__fixed-headers-wrapp');
  leftHeadersWrapp.classList.add('flex-table__l-headers-wrapp');
  leftDiv.append(fixedHeaderWrapp);
  leftDiv.append(leftHeadersWrapp);

  let fixedTable = document.createElement('table');
  let fixedTHead = document.createElement('thead');
  fixedTable.classList.add('flex-table__fixed-table');
  fixedTHead.classList.add('flex-table__fixed-thead');
  fixedHeaderWrapp.append(fixedTable);
  fixedTable.append(fixedTHead);
  wrapper.fixedTHead = fixedTHead;

  let leftTable = document.createElement('table');
  let leftTBody = document.createElement('tbody');
  leftTable.classList.add('flex-table__l-table');
  leftTBody.classList.add('flex-table__l-tbody');
  leftHeadersWrapp.append(leftTable);
  leftTable.append(leftTBody);
  wrapper.leftTBody = leftTBody;

  let rightTable = document.createElement('table');
  let rightTHead = document.createElement('thead');  
  let rightTBody = document.createElement('tbody');
  rightTable.classList.add('flex-table__r-table');
  rightTHead.classList.add('flex-table__r-thead');
  rightTBody.classList.add('flex-table__r-tbody');
  rightDiv.append(rightTable);
  rightTable.append(rightTHead);
  rightTable.append(rightTBody);
  wrapper.rightTHead = rightTHead;
  wrapper.rightTBody = rightTBody;

  //console.log(wrapper);
  return wrapper;
}
//wrapper = createShell();


let tradesTable = document.querySelector('.trades-table');
replaceColumn(tradesTable, 1, 2);
let newTable = scrollTableHandler(tradesTable, 1, 2, true);


let trs = tradesTable.querySelectorAll('tr');
trs.forEach(tr => {
  let tds = tr.querySelectorAll('td');
  if (tds[4]) {
    let link = tds[4].querySelector('a');
    console.log(link);
    if (link) {
      link.innerHTML = '';
    }
    
  }
  
  
  //link.innerHTML = '';
})

// Создание оболочки 
function createScrollTableShell() {

  let wrapper = document.createElement('div');
  let inner = document.createElement('div');
  let leftDiv = document.createElement('div');
  let rightDiv = document.createElement('div');
  wrapper.className = 'scroll-table';
  inner.className = 'scroll-table__inner';
  leftDiv.className = 'scroll-table__l-side';
  rightDiv.className = 'scroll-table__r-side';
  wrapper.append(inner);
  inner.append(leftDiv);
  inner.append(rightDiv);

  let leftTable = document.createElement('table');
  let leftTHead = document.createElement('thead');
  let leftTBody = document.createElement('tbody');
  leftTable.className = 'scroll-table__l-table';
  leftTHead.className = 'scroll-table__l-thead';
  leftTBody.className = 'scroll-table__l-tbody';
  leftDiv.append(leftTable);
  leftTable.append(leftTHead);
  leftTable.append(leftTBody);
  wrapper.leftTable = leftTable;
  wrapper.leftTHead = leftTHead;
  wrapper.leftTBody = leftTBody;

  let rightHeadersWrapp = document.createElement('div');
  let rightTabelesWrapp = document.createElement('div');
  rightHeadersWrapp.className = 'scroll-table__r-headers-wrap';
  rightTabelesWrapp.className = 'scroll-table__r-tables-wrap';
  rightDiv.append(rightHeadersWrapp);
  rightDiv.append(rightTabelesWrapp);
  wrapper.rightTabelesWrapp = rightTabelesWrapp;

  let rightHeadersInner = document.createElement('div');
  let rightHeadersTable = document.createElement('table');
  let rightHeadersTHead = document.createElement('thead');
  rightHeadersInner.className = 'scroll-table__r-headers-inner';
  rightHeadersTable.className = 'scroll-table__r-headers-table';
  rightHeadersTHead.className = 'scroll-table__r-tables-thead';
  rightHeadersWrapp.append(rightHeadersInner);
  rightHeadersInner.append(rightHeadersTable);
  rightHeadersTable.append(rightHeadersTHead);
  wrapper.rightHeadersTable = rightHeadersTable;
  wrapper.rightTHead = rightHeadersTHead;
  
  let rightTable = document.createElement('table');
  let rightTBody = document.createElement('tbody');
  rightTable.className = 'scroll-table__r-table';
  rightTBody.className = 'scroll-table__r-tbody';
  rightTabelesWrapp.append(rightTable);
  rightTable.append(rightTBody);
  wrapper.rightTable = rightTable;
  wrapper.rightTBody = rightTBody;

  return wrapper;
}

function createScrollTable(table, row, col) {
  let wrapper = createScrollTableShell();
  let tops = [];
  let heights = [];
  let margin = 0;
  let offset = 0;
  tops.push(0)
  table.classList.forEach(el => {
    wrapper.classList.add(el);
    wrapper.leftTable.classList.add(el);
    wrapper.rightHeadersTable.classList.add(el);
    wrapper.rightTable.classList.add(el);
  });
  let trs = table.querySelectorAll('tr');
  if (trs.length > row) {
    let height;
    for (let i = 0; i < row; i++) {
      height = trs[i].querySelectorAll('td, th')[0].getBoundingClientRect().height;
      if (i > 0) {
        tops.push(tops[i - 1] + height);
      }
      margin += height;
      //heights.push(height);
    }
    for (let i = row; i < trs.length; i++) {
      height = trs[i].querySelectorAll('td, th')[0].getBoundingClientRect().height;
      //heights.push(height);
    }
  }
  else {
    alert('В таблице недостаточно строк');
    return null;
  }
  for (let i = 0; i < row; i++) {
    let tds = trs[i].querySelectorAll('td, th');
    if (tds.length > 1) {
      let newLeftTHeadTr = document.createElement('tr');
      let newRightTHeadTr = document.createElement('tr');
      for (let j = 0; j < col; j++) {
        tds[j].style.top = tops[i] - offset + 'px';
        //tds[j].style.height = heights[i] + 'px';
        newLeftTHeadTr.append(tds[j])
      }
      if (tds[col]) {
        for (let j = col; j < tds.length; j++) {
          tds[j].style.top = tops[i] - offset + 'px';
          //tds[j].style.height = heights[i] + 'px';
          newRightTHeadTr.append(tds[j]);
        }

      } else {
        let td = document.createElement('td');
        td.style.top = tops[i] + 'px';
        //td.style.height = heights[i] + 'px';
        newRightTHeadTr.append(document.createElement('td'));
      }
      wrapper.leftTHead.append(newLeftTHeadTr);
      wrapper.rightTHead.append(newRightTHeadTr);
      wrapper.rightTabelesWrapp.style.marginTop = margin - offset + 'px';
    }
  }

  if (trs[row]) {
    for (let i = row; i < trs.length; i++) {
      let tds = trs[i].querySelectorAll('td, th');
      if (tds.length > 1) {
        let newLeftTBodyTr = document.createElement('tr');
        let newRightTBodyTr = document.createElement('tr');

        for (let j = 0; j < col; j++) {
          //tds[j].style.height = heights[i] + 'px';
          newLeftTBodyTr.append(tds[j])
        }
        if (tds[col]) {
          for (let j = col; j < tds.length; j++) {
            //tds[j].style.height = heights[i] + 'px';
            newRightTBodyTr.append(tds[j]);
          }
        } else {
          let td = document.createElement('td');
          //td.style.height = heights[i] + 'px';
          newRightTBodyTr.append(td);
        }
        wrapper.leftTBody.append(newLeftTBodyTr);
        wrapper.rightTBody.append(newRightTBodyTr)
      }
    }
  }
  table.before(wrapper);
  table.remove();
  return wrapper;
}

function initScrollTable(flexTable) {
  
  flexTable.rightHeadersInner = flexTable.querySelector('.scroll-table__r-headers-inner');
  flexTable.rightTablesWrap = flexTable.querySelector('.scroll-table__r-tables-wrap');

  flexTable.inner = flexTable.querySelector('.scroll-table__inner');
  flexTable.leftSide = flexTable.querySelector('.scroll-table__l-side');
  flexTable.rightSide = flexTable.querySelector('.scroll-table__r-side');
  flexTable.rightHeadersTable = flexTable.querySelector('.scroll-table__r-headers-table'); //.scroll-table__r-headers-table
  flexTable.rightTablesWrap = flexTable.querySelector('.scroll-table__r-tables-wrap'); // .scroll-table__r-tables-wrap
  
  flexTable.leftTable = flexTable.querySelector('.scroll-table__l-table'); 
  flexTable.rightTable = flexTable.querySelector('.scroll-table__r-table'); 
  flexTable.simplebarWrapper = flexTable.querySelector('.simplebar-wrapper');

  // clin styles 
  flexTable.rightHeadersInner.style.width = '';
  flexTable.rightTablesWrap.style.maxWidth = '';
  flexTable.rightTablesWrap.style.width = '';
  flexTable.rightTablesWrap.style.marginTop = '';
  flexTable.inner.style.width = '';
  flexTable.leftSide.style.width = '';
  flexTable.rightSide.style.width = '';
  //if (flexTable.simplebarWrapper) {
  //  flexTable.simplebarWrapper.style.width = '';
  //  flexTable.simplebarWrapper.style.maxWidth = '';
  //}

  flexTable.rightTablesWrap.style.marginTop = flexTable.rightHeadersInner.getBoundingClientRect().height + 'px';
  //let leftSideWidth = flexTable.leftSide.getBoundingClientRect().width;
  let leftTableWidth = flexTable.leftTable.getBoundingClientRect().width;  
  let rightTableWidth = flexTable.rightTable.getBoundingClientRect().width;
  let wrappW = flexTable.clientWidth;
  let wrappH = flexTable.clientHeight;
  let innerW = flexTable.inner.getBoundingClientRect().width;
  let innerH = flexTable.inner.getBoundingClientRect().height;
  flexTable.overflowX = leftTableWidth + rightTableWidth > wrappW;
  let rightSideWidth;
  if (flexTable.overflowX) {
    flexTable.rightSide.classList.add('_decor');
    rightSideWidth = Math.floor(wrappW - leftTableWidth);
    if (rightSideWidth < 1) {
      rightSideWidth = 0;
    }
    flexTable.rightHeadersInner.style.width = rightSideWidth + 'px';
    flexTable.rightTablesWrap.style.maxWidth = rightSideWidth + 'px';
    flexTable.rightTablesWrap.style.width = rightSideWidth + 'px';
  }
  else {
    rightSideWidth = rightTableWidth;
    flexTable.rightSide.classList.remove('_decor');
    flexTable.rightHeadersInner.style.width = rightSideWidth + 'px';
    flexTable.rightTablesWrap.style.maxWidth = rightSideWidth + 'px';
    flexTable.rightTablesWrap.style.width = rightSideWidth + 'px';
  }
}

function scrollTableScroll(flexTable) {
  let difX = 0;
  let wrapX = flexTable.rightSide.getBoundingClientRect().left;
  let rightTableX = flexTable.rightTable.getBoundingClientRect().left;
  flexTable.rightHeadersTable.style.left = (rightTableX - wrapX) + difX + "px";
}

function scrollTableHandler(table, row = 1, col = 1, simpleBar = false) {
  if (table) {
    let flexTable = createScrollTable(table, row, col);
    initScrollTable(flexTable);
    if (simpleBar) {
      new SimpleBar(flexTable.rightTablesWrap);
      flexTable.scroller = document.querySelector(".simplebar-content-wrapper");
    }
    else {
      flexTable.scroller = flexTable.rightTablesWrap;
    }
    let scrollableWrapperOnScroll = function () { { scrollTableScroll(flexTable) } }
    flexTable.scroller.addEventListener("scroll", scrollableWrapperOnScroll);
    window.addEventListener('resize', () => { initScrollTable(flexTable); });
    scrollTableHover(flexTable);
    return flexTable;
  }
}

function scrollTableHover(table) {
  let leftTable = table.leftTable;
  let rightTable = table.rightTable;  
  if (leftTable && rightTable) {
    let leftTrs = leftTable.querySelectorAll('tbody>tr');
    let rightTrs = rightTable.querySelectorAll('tr');
    
    leftTrs.forEach((tr) => addHover(tr));
    rightTrs.forEach((tr) => addHover(tr));
    leftTrs.forEach((tr) => removeHover(tr));
    rightTrs.forEach((tr) => removeHover(tr));

    function addHover(tr) {
      tr.addEventListener('mouseenter', () => {
        const curentTBody = tr.closest('tbody');
        const table = tr.closest('.scroll-table');
        const curentTrs = curentTBody.querySelectorAll('tr');
        let targetTBody;
        if (curentTBody.classList.contains('scroll-table__l-tbody')) {
          targetTBody = table.querySelector('.scroll-table__r-tbody');
        }
        else {
          targetTBody = table.querySelector('.scroll-table__l-tbody');
        }
        targetTrs = targetTBody.querySelectorAll('tr');

        for (let i = 0; i < curentTrs.length; i++) {
          if (curentTrs[i] == tr) {
            targetTrs[i].classList.add('_hover');
            break;
          }
        }
      });
    }
    function removeHover(tr) {
      tr.addEventListener('mouseleave', () => {
        const curentTBody = tr.closest('tbody');
        const table = tr.closest('.scroll-table');
        let targetTBody;
        if (curentTBody.classList.contains('scroll-table__l-tbody')) {
          targetTBody = table.querySelector('.scroll-table__r-tbody');
        }
        else {
          targetTBody = table.querySelector('.scroll-table__l-tbody');
        }
        targetTrs = targetTBody.querySelectorAll('tr');
        for (let i = 0; i < targetTrs.length; i++) {
          targetTrs[i].classList.remove('_hover');
        }
      });
    }

  }
}

let table3 = document.querySelector('#table-3');
scrollTableHandler(table3, 1, 2, true);

function replaceColumn(table, col1, col2) {
  if (table) {
    let max = Math.max(col1, col2);
    let min = Math.min(col1, col2);
    col1 = min, col2 = max;
    let trs = table.querySelectorAll('tr');
    if (trs.length > 0) {
      trs.forEach(tr => {
        let tds = tr.querySelectorAll('th, td');
        if (tds.length >= max) {
          tds[col1].before(tds[col2]);
          tds[col2 - 1].after(tds[col1]);
        }
      })
    }
  }
}

