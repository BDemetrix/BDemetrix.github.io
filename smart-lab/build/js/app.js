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
/**
 * Объект isMobile содержит результаты проверки типа и марки тачпада
 */
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
/**
 * если устройство является тачпадом, body присваивается класс ._touch
 */
if (isMobile.any()) {
  document.body.classList.add('_touch');
}
else {
  document.body.classList.remove('_touch');
}

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

//Spollers

/**
 * Инициализирует все блоки спойллеры
 * data-spoller-maxwidth - ширина экрана меньше которой работает спойлер
 * при клике на заголовок спойлера, заголовку присваивается/удаляется класс _active
 * если у блока спойлеров есть класс _one, то то он является аккордеоном
 */
function initSpollers() {
  const timeOut = 400;
  let spollersArr = document.querySelectorAll("._spollers");
  if (spollersArr.length) {
    spollersArr.forEach( spollersBlock => {
      let spollersGo = true;
      const maxWidth = spollersBlock.dataset.spollerMaxwidth;
      const one = spollersBlock.classList.contains('_one')
      let spollerEl = spollersBlock.querySelectorAll('._spoller');
      if (spollerEl.length ) {
        spollerEl.forEach((spoller, i, spollerArr) => {
          spoller.addEventListener("click", function () {
            if (spollersGo) {
              spollersGo = false;
              // Если ширина задана меньше и меньше заданной величины, клик не обрабатывается
              if (maxWidth && window.innerWidth > maxWidth) {
                return false;
              }
              // Если блоку спойлеров задан класс _one, то он является аккордеоном
              if (one) {
                spollerArr.forEach( el => {
                  if (el != spoller) {
                    el.classList.remove('_active');
                    _slideUp(el.nextElementSibling, timeOut);
                  }
                })
              }
              spoller.classList.toggle('_active');
              _slideToggle(spoller.nextElementSibling, timeOut);

              setTimeout(function () {
                spollersGo = true;
              }, timeOut);
            }
          })
        })
      }
    })
  }
}

/**
 * Функция очистки стилей спойлеров при изменении ширины экрана
 */
function clearSpollersStyle() {
  let spollersArr = document.querySelectorAll("._spollers");
  if (spollersArr.length) {
    spollersArr.forEach(spollersBlock => {
      const maxWidth = spollersBlock.dataset.spollerMaxwidth;
      if (maxWidth && window.innerWidth > maxWidth) {
        let spollerEl = spollersBlock.querySelectorAll('._spoller');
        if (spollerEl.length) {
          spollerEl.forEach( spoller => {
            spoller.classList.remove('_active');
            spoller.nextElementSibling.style.display = ``;
          })
        }  
      }
    })
  }    
}

initSpollers(); // инициализируем споллеры
window.addEventListener('resize', clearSpollersStyle); 

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


// To connect the SimpleBar
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
 * закрывает в все открытые меню и попапы, открытые
 */
function closeAllOpenedMenu() {
  const allMenu = document.querySelectorAll('._open');
  allMenu.forEach(menu => menu.classList.remove('_open'));
}

/**
 * при клике на любую область документа, если эта область не находится внутри открытого меню, 
 * то закрываются все окна
 */
document.documentElement.addEventListener('click', (e) => {
  if (!e.target.closest('._open')) {
    closeAllOpenedMenu();
  }
});
/**
 * навешиваем обработчик нажатия на каждый активный елемент (кнопку/иконку)
 * которому присвоен класс ._active-el
 * при нажатии закрываются все елементы открытые елементы, содержащие класс ._open
 */
let activeHeadersEls = document.querySelectorAll('._active-el');
activeHeadersEls.forEach(el => {
  el.addEventListener('click', () => {
    if (!el.parentElement.classList.contains('_open')) {
      closeAllOpenedMenu();
    }
    el.parentElement.classList.toggle('_open');
  });
});

//=================

/**
 * Когда <input class="input"> в фокусе его родителю присваивается класс _focus
 */

let inputArr = document.querySelectorAll('._input');
if (inputArr.length) {
  inputArr.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('_focus');
    });
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('_focus');
    });
    input.addEventListener('change', () => {
      if (input.value)
        input.parentElement.classList.add('_filled');
      else
        input.parentElement.classList.remove('_filled');
    });
  });
}

//===================

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
// HEADER JS / begin ============================================================================
let mainHeader = document.querySelector('header.header');
let headerMenuBody = document.querySelector('.header .menu__body');

/**
 * Устанавливает высоту основного меню
 */
function setheaderMenuBodyHeight() {
  let mainHeaderHeight = mainHeader.offsetHeight;
  let headerMenuBodyHeight = document.documentElement.clientHeight - mainHeaderHeight;
  headerMenuBody.style.height = headerMenuBodyHeight + 'px';
}
// Подключаем к .menu__body кастомный скролл
let mainMenuSimpleBar = plugSimpleBar('.header .menu__body');

setheaderMenuBodyHeight();
mainMenuSimpleBar.recalculate();
window.addEventListener('resize', () => {
  setheaderMenuBodyHeight();
  if (mainMenuSimpleBar) mainMenuSimpleBar.recalculate();
} );

// Открытие/закрытие основного меню
const mainMenuBtn = document.getElementById('main-menu-btn');
if (mainMenuBtn) {
  mainMenuBtn.addEventListener('click', (e) => {
    if (e.target.closest('._open')) {
      blockOverflow();
    }
    else {
      unBlockOverflow();
    }
  });
}

// Header search ========= 

let alphabet = document.querySelector('.alphabet')
let searchInput = document.querySelector('.query-search__input');
if (searchInput) {
  /**
  * когда поисковый инпут в фокусе, то его родителю присваивается класс _focus
  * также блоку .alphabet прсваивается или удаляется модификатор _show
  */
  searchInput.addEventListener('focus', () => {
    searchInput.classList.add('_focus');
    searchInput.parentElement.classList.add('_focus');
    alphabet.classList.add('_show');
  });
  /**
   * когда поисковый инпут не в фокусе, то у его родителю удаляется класс _focus
   */
  searchInput.addEventListener('blur', () => {
    const searchInputParent = searchInput.parentElement;
    setTimeout(() => {
      alphabet.classList.remove('_show');
      searchInput.classList.remove('_focus');
      searchInputParent.classList.remove('_focus');
      searchInput.value = '';
    }, 200);
  });
}
/**
 * при клике на кнопку-иконку поиска в хедере (появляется при заданном брейкпоинте) фокус переносится в инпут
 */
let searchIcon = document.querySelector('.query-search__icon');
searchIcon.addEventListener('click', () => {
  searchInput.focus();
});
/**
 * очистка поискового инпута при нажатии на стрелку вниз, расположеную в инпуте при фокусе
 */
let arrowInputBtn = document.querySelector('.query-search__input-arrow');
arrowInputBtn.addEventListener('click', () => {
  //searchInput.blur();
  setTimeout(() => {
    searchInput.focus();
  }, 210);
}, false);


// jQuary Header search  ==========
/**
 * код обрабатывает автозаполнение поискового инпута, используется плагин jQuery autocompleter
 */
let response = [
  {
    "data": "https://smart-lab.ru/forum/%D0%90%D0%9E%20%C2%AB%D0%90%D1%82%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9%20%D1%8D%D0%BD%D0%B5%D1%80%D0%B3%D0%BE%D0%BF%D1%80%D0%BE%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81%C2%BB%20%28%D0%90%D1%82%D0%BE%D0%BC%D1%8D%D0%BD%D0%B5%D1%80%D0%B3%D0%BE%D0%BF%D1%80%D0%BE%D0%BC%29",
    "value": "АО «Атомный энергопромышленный комплекс» (Атомэнергопром)",
    "hilite": true
  },
  {
    "data": "https://smart-lab.ru/bonds/Shevchenko",
    "value": "АО Им. Т.Г. Шевченко [обл]"
  },
  {
    "data": "https://smart-lab.ru/bonds/maximatelecom",
    "value": "АО \"МаксимаТелеком\" [обл]"
  },
  {
    "data": "https://smart-lab.ru/bonds/AO_Trud",
    "value": "АО Труд [обл]"
  },
  {
    "data": "https://smart-lab.ru/brokers-rating/%D0%90%D0%9E%20%D0%98%D0%9A%20%22%D0%A4%D0%BE%D0%BD%D0%B4%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%9A%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BB%22",
    "value": "АО ИК \"Фондовый Капитал\" [brk]"
  },
  {
    "data": "https://smart-lab.ru/bonds/I-TECO",
    "value": "Ай-Теко [обл]"
  },
  {
    "data": "https://smart-lab.ru/trading/%D0%90%D0%9E%20%22%D0%97%D0%B0%D0%B2%D0%BE%D0%B4%20%D0%9A%D0%BE%D0%BF%D0%B8%D1%80%22",
    "value": "АО \"Завод Копир\" [trd]"
  },
  {
    "data": "https://smart-lab.ru/bonds/AO-IA-VTB-2014",
    "value": "АО ИА ВТБ 2014 [обл]"
  },
  {
    "data": "https://smart-lab.ru/trading/%D0%90%20%D0%BD%D0%B5%20%D0%BF%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%2C%20%D0%B5%D1%81%D1%82%D1%8C%20%D0%BB%D0%B8%20%D0%B3%D0%B4%D0%B5-%D0%BD%D0%B8%D0%B1%D1%83%D0%B4%D1%8C%20%D0%B0%D1%80%D1%85%D0%B8%D0%B2%20%D0%BF%D1%80%D0%BE%D1%88%D0%B5%D0%B4%D1%88%D0%B8%D1%85%20%D1%84%D1%8C%D1%8E%D1%87%D0%B5%D1%80%D1%81%D0%BE%D0%B2%20%D0%BD%D0%B0%20%D0%9C%D0%9C%D0%92%D0%91.",
    "value": "А не подскажите, есть ли где-нибудь архив прошедших фьючерсов на ММВБ. [trd]"
  },
  {
    "data": "https://smart-lab.ru/crypto/trading%2C%20crypto%20fund%2C%20exchanges%20-%D1%87%D1%83%D0%B6%D0%BE%D0%B5%20%D0%BD%D0%B5%20%D0%BC%D0%BE%D1%91%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BD%D0%BE%D0%B5%2C%20%D0%BE%D1%82%20%D0%90.%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%2C%20%D0%90.%D0%A0%D0%B0%D0%B4%D1%87%D0%B5%D0%BD%D0%BA%D0%BE%20%D0%B8%20%D0%9C.%D0%96%D1%83%D1%85%D0%BE%D0%B2%D0%B8%D1%86%D0%BA%D0%BE%D0%B3%D0%BE",
    "value": "trading, crypto fund, exchanges -чужое не моё, интересное, от А.Антонова, А.Радченко и М.Жуховицкого [cry]"
  }
];
var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,target=_blank";

$('[autocompleter]').autocomplete({
  lookup: response,
  appendTo: '.query-search__suggestions',
  maxHeight: 'auto',
  //autoSelectFirst: true,
  onSelect: function (suggestion) {
    window.open(suggestion.data, "WindowName", windowFeatures);
    this.value = '';
  },
  beforeRender: function (container, suggestions) {
    $.each(suggestions, function (i, v) {
      if (('hilite' in v) && (v['hilite'])) {
        container.find('.autocomplete-suggestion[data-index="' + i + '"]').addClass('hilite');
      }
    });
  },
});
// подключаем плагин для кастомного скролла
plugSimpleBar('.query-search__suggestions');

// jBox ======================================
/**
 * код отвечает за заполнение и демонстрацию уведомлеий используется плагин jQuery jBox
 */
// подключаем плагин для кастомного скролла
//let notifySimpleBar = plugSimpleBar('#notify-body');
var nPopup = new jBox('Tooltip',
  {
    id: 'notifiesPopover',
    trigger: 'click',
    appendTo: $('#notify-body'),
    attach: $('#notify-icon'),
    content: $('#notify-inner'), // для демонстрации вёрстки
    position: {x: 0, y: 0},
    isolateScroll: false,
  
/* 
    clearTab: [$('#notify-icon').attr('tab') ? $('#notify-icon').attr('tab') : 'blog'],
    ajax: {
      url: '/profile/ajaxnotifies/',
      data: {
        security_ls_key: LIVESTREET_SECURITY_KEY,
        tab: $('#notify-icon').attr('tab') ? $('#notify-icon').attr('tab') : 'blog'
      },
      reload: 'strict',
      setContent: false,
      success: function (response) {
        if (response.bStateError) {
          this.close();
          return msgErrorBox.alert(response.sMsgTitle, response.sMsg);
        }
        this.setContent(response.sHtml);

        var nTab = this.content.find('.notify__nav-item ._active');
        if (nTab.length && nTab.find('.notify-label').text() != '0') {
          var sTab = nTab.attr('tab');

          clearTabCounter(sTab).then(function (iCounter) {
            nPopup.options.globalCounter = iCounter;
          });
        } else {
          nPopup.options.globalCounter = parseInt($('#notify-icon > .notify-label').text());
        }
      },
      error: function () {
        msgErrorBox.alert('Ошибка', 'Неизвестная ошибка!');
        this.close();
      }
    },
 */
    onOpen: function () {
      // Костыль. Обязательно для вёрстки 
      this.wrapper.css({
        "position": "relative",
        'width': '100%'
      });
      this.content.parents('#notify-body').css('overflow', 'auto');
      plugSimpleBar('#notify-body');
      // для вёрстки

      var nContent = this.content;
      nContent.on('click', '.notify__nav-item', function () {
        var nTab = $(this);
        var sTab = nTab.attr('tab');

        var nTabs = nContent.find('.notify__nav');
        if (nTabs.length) {
          var nActiveTab = nTabs.find('.notify__nav-item._active');
          if (nActiveTab.attr('tab') === nTab.attr('tab')) return;

          nActiveTab.removeClass('_active').addClass('_empty');
          //setGlobalCounter(nPopup.options.globalCounter);

          nTab.addClass('_active');
          nContent.find('.notify__block').removeClass('_active');
          nContent.find('.notify__block[id="' + sTab + '"]').addClass('_active');

          /* clearTabCounter(sTab).then(function (iCounter) {
            nPopup.options.globalCounter = iCounter;
          }); */
        }
      }).on('click', '.notify__massage', function () {
        var sLink = $(this).attr('link');
        if (sLink) {
          nPopup.close();
          document.location.href = sLink;
        }
      }).on('click', 'a', function () {
        nPopup.close();
      });
    },

    onClose: function () {
      this.content.parents('._open').removeClass('_open');
      var nTab = this.content.find('.notify__nav-item._active');
      if (nTab.length) {
        /* clearTabCounter('all').then(function (iCounter) {
          nPopup.options.globalCounter = iCounter;
          setGlobalCounter(iCounter);
        }); */
      }
      this.content.off('click');
    }
  });

// кастыль глюкала
$('body').on('click', function (e) {
  if ($(e.target).parents('#notify-icon').length) return;
  if ($(e.target).parents('#notifiesPopover').length) return;
  if (nPopup.isOpen) nPopup.close();
});



// HEADER JS / end ============================================================================
/**
 * Обработка событий "хлебных крошек" - блок .navbar
 * если у элемента списка есть вложеный список, то при нажатии на элемент navbar__drop-item
 * элементу navbar__item присваивается класс ._open и появляется выпадающее меню.
 * При повторном нажатии на стрелку или любую точку в документе, если она не лежит внутри
 * открытого выпадающего меню, оно закрывается удалением у родителя класса ._open
 */

const navbarLinks = document.querySelectorAll('.navbar__link');
const navbarDropItem = document.querySelectorAll('.navbar__drop-item');

if (navbarDropItem.length) {
  navbarDropItem.forEach( downArrow => {
    downArrow.addEventListener('click', () => {
      if (!downArrow.closest('.navbar__item').classList.contains('_open')) {
        closeAllOpenedMenu();
      }
      downArrow.closest('.navbar__item').classList.toggle('_open');
    });
  });
}

if (navbarLinks.length) {
  navbarLinks.forEach( navbarLink => {
    navbarLink.addEventListener('click', () => {
      navbarLink.closest('.navbar__item').classList.remove('_open');
    });
  });
}
// при клике на любую область документа, если эта область не находится внутри открытого меню, оно закрывается
document.documentElement.addEventListener('click', (e) => {
  if (!e.target.closest('._open') && !e.target.closest('.navbar__link')) {
    closeAllOpenedMenu();
  }
});

/**
 * если меню .navbar__drop-menu не влезает в окно браузера, то ему при сваивеется свойство max-width
 */
const navbarDropMenus = document.querySelectorAll('.navbar__drop-menu');
navbarDropMenusMaxWidt();
window.addEventListener('resize', () => {
  navbarDropMenusMaxWidt();
});

/**
 * Расчитывает и присваивает максимальную ширину для каждого элемента .navbar__drop-menu
 */
function navbarDropMenusMaxWidt() {
  if (navbarDropMenus) {
    navbarDropMenus.forEach(dropMenu => {
      dropMenuMaxWidth(dropMenu);
    });
  }
}
/**
 * функция расчета максимальной ширины для выпадающего меню
 * @param {Object} dropMenu - DOM объект (выпадающий список)
 */
function dropMenuMaxWidth(dropMenu) {
  let dropMenuRight = dropMenu.getBoundingClientRect().right;
  let dropMenuLeft = dropMenu.getBoundingClientRect().left;
  let windowWidth = document.documentElement.clientWidth;

  dropMenu.style.maxWidth = (windowWidth - dropMenuLeft - 5) + 'px';
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

let qnMenuSelectorsSlider;
const qnMenuSelectors = document.querySelector('.qn-menu__selectors');
if (qnMenuSelectors) {
	qnMenuSelectors.classList.remove('_loading');

	qnMenuSelectorsSlider = new Swiper(qnMenuSelectors, {
		slidesPerView: 'auto',
		//centeredSlides: true,
		//centeredSlidesBounds: true,
		watchOverflow: true,
		//spaceBetween: 40,
		//freeMode: true,
		//freeModeSticky: true,
		speed: 400,
	});
}

window.addEventListener('resize', () => {
	if (qnMenuSelectorsSlider) {
		qnMenuSelectorsSlider.updateSize();
	}
});
plugSimpleBar('.qn-filters__content');

const qnMenuMobTabs = document.querySelectorAll('.qn-menu__mob-tabs a');
qnMenuMobTabs.forEach(a => {
  a.addEventListener('click', (e) => {
    e.stopPropagation()
  })
});

// Обработчик открытия/закрытия окна "фильтры"
const qnMenuBtnFilter = document.querySelector('.qn-menu__btn--filter');
const qnFilters = document.querySelector('.qn-filters');
const qnFiltersClose = document.querySelector('.qn-filters__close');

if (qnMenuBtnFilter && qnFilters && qnFiltersClose) {

  qnMenuBtnFilter.addEventListener('click', () => {
    if (qnMenuBtnFilter.parentElement.classList.contains('_open')) 
      blockOverflow();
    else 
      unBlockOverflow();
  });

  qnFilters.addEventListener('click', (e) => {
    if (!e.target.closest('.qn-filters__content') || e.target.closest('.qn-filters__close')) {
      qnFilters.closest('._open').classList.remove('_open');
      unBlockOverflow()
    }
  });  
}

// Обработка сброса формы
const qnFiltersContent = document.querySelector('.qn-filters__content');
const filtersInputs = qnFilters.querySelectorAll('input');
let inputChange = new Event('change');

qnFiltersContent.addEventListener('reset', (e) => {
  filtersInputs.forEach( input => {
    setTimeout(() => {
      input.dispatchEvent(inputChange);
      clearSumoContents();
    }, 50);
  });
})


// Подключения кастомного селекта
if ($('#sector_id').length) $('#sector_id').SumoSelect({ 
  placeholder: 'Все сектора',
  csvDispCount: 2,
  captionFormat: 'Сектора ({0})',
});
var sumoSelects = $('#country_id, #val_middle_gt, #val_middle_lt, #capitalization_gt, #capitalization_lt, #is_state_owned, #is_exporter, #year, #type, #quarter, #duration_lt_id, #duration_gt_id, #mat_years_lt_id, #mat_years_gt_id, #year_yield_lt_id, #year_yield_gt_id, #ofz_type_id');
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
 $('#sector_id')[0].sumo.unSelectAll();
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
let filterDateRargeElm = document.querySelector('.qn-filters__date-input');
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
    container: '.qn-filters__datepicker',
    language: "ru",
  });
}
// ==============================

//RANGE
// Подключение ползунка
let qnFiltersRangeSliderObjs = [];
const qnFiltersRangeSliderEls = document.querySelectorAll('.qn-filters__range-slider');
qnFiltersRangeSliderEls.forEach( el => {

  qnFiltersRangeSliderObjs.push({
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

qnFiltersRangeSliderObjs.forEach( obj => plugNoUiSlider(obj));


/**
 * Функция подключает noUiSlider 
 * @param {Object} obj - одержит селектор или объект к которому подключается слайдер и  объект настроек
 * Ищет инпуты в родительском элементе и подключает их к слайдеру
 */
function plugNoUiSlider(obj) {

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

// Подключение адаптивной таблицы
setTimeout(() => {
 new FlexTable('.trades-table'); 
}, 300);

