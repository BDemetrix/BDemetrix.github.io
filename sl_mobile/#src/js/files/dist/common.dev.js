"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Объект isMobile содержит результаты проверки типа и марки тачпада
 */
var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};
/**
 * если устройство является тачпадом, body присваивается класс ._touch
 */

if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.remove('_touch');
}

var bodyGlobal = document.querySelector('body');
var scrollWidth = window.innerWidth - document.documentElement.clientWidth; // ширина скролл-бара окна

/**
 * функции для блокировки скролла при открытии модального окна
 */

function blockOverflow() {
  bodyGlobal.style.overflow = "hidden";
  bodyGlobal.style.touchAction = "none";

  if (!isMobile.any()) {
    bodyGlobal.style.paddingRight = scrollWidth + 'px';
  }
}

;
/**
 * функции для разблокировки скролла при закрытии модального окна
 */

function unBlockOverflow() {
  setTimeout(function () {
    bodyGlobal.style.overflow = "";
    bodyGlobal.style.touchAction = "";
    bodyGlobal.style.paddingRight = "";
    console.log('unBlockOverflow');
  }, 400);
}

;

function toggleOverflow() {
  if (window.getComputedStyle(bodyGlobal).overflow != 'hidden') blockOverflow();else unBlockOverflow();
} //Spollers

/**
 * Инициализирует все блоки спойллеры
 * data-spoller-maxwidth - ширина экрана меньше которой работает спойлер
 * при клике на заголовок спойлера, заголовку присваивается/удаляется класс _active
 * если у блока спойлеров есть класс _one, то то он является аккордеоном
 */


function initSpollers(spollersArr) {
  var timeOut = 400;

  if (spollersArr.length) {
    spollersArr.forEach(function (spollersBlock) {
      var spollersGo = true;
      var maxWidth = spollersBlock.dataset.spollerMaxwidth;
      var one = spollersBlock.classList.contains('_one');
      var spollerEl = spollersBlock.querySelectorAll('._spoller');

      if (spollerEl.length) {
        spollerEl.forEach(function (spoller, i, spollerArr) {
          spoller.addEventListener("click", function () {
            if (spollersGo) {
              spollersGo = false; // Если ширина задана меньше и меньше заданной величины, клик не обрабатывается

              if (maxWidth && window.innerWidth > maxWidth) {
                return false;
              } // Если блоку спойлеров задан класс _one, то он является аккордеоном


              if (one) {
                spollerArr.forEach(function (el) {
                  if (el != spoller) {
                    el.classList.remove('_active');

                    _slideUp(el.nextElementSibling, timeOut);
                  }
                });
              }

              spoller.classList.toggle('_active');

              _slideToggle(spoller.nextElementSibling, timeOut);

              setTimeout(function () {
                spollersGo = true;
              }, timeOut);
            }
          });
        });
      }
    });
  }
}
/**
 * Функция очистки стилей спойлеров при изменении ширины экрана
 */


function clearSpollersStyle() {
  var spollersArr = document.querySelectorAll("._spollers");

  if (spollersArr.length) {
    spollersArr.forEach(function (spollersBlock) {
      var maxWidth = spollersBlock.dataset.spollerMaxwidth;

      if (maxWidth && window.innerWidth > maxWidth) {
        var spollerEl = spollersBlock.querySelectorAll('._spoller');

        if (spollerEl.length) {
          spollerEl.forEach(function (spoller) {
            spoller.classList.remove('_active');
            spoller.nextElementSibling.style.display = "";
          });
        }
      }
    });
  }
}

initSpollers(document.querySelectorAll("._spollers")); // инициализируем споллеры

window.addEventListener('resize', clearSpollersStyle); //SlideToggle

/**
 * Функция сворачивает/разворачивает элемент
 * @param {Object} target - элемент DOM, который надо свернуть/развернуть
 * @param {Number} duration - длительность анимации
 */

var _slideUp = function _slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.transitionProperty = 'height, margin, padding, opacity';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.opacity = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.style.removeProperty('opacity');
    target.classList.remove('_slide');
  }, duration);
};
/**
 * Функция сворачивает/разворачивает элемент
 * @param {Object} target - элемент DOM, который надо свернуть/развернуть
 * @param {Number} duration - длительность анимации
 */


var _slideDown = function _slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = "height, margin, padding, opacity";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.opacity = 1;
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.style.removeProperty('opacity');
    target.classList.remove('_slide');
  }, duration);
};
/**
 * Функция сворачивает/разворачивает элемент
 * @param {Object} target - элемент DOM, который надо свернуть/развернуть
 * @param {Number} duration - длительность анимации
 * @returns вызывает соответствующую условию функцию
 */


var _slideToggle = function _slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');

    if (window.getComputedStyle(target).display === 'none') {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  }
}; // To connect the SimpleBar

/**
 * Функци подключает плагин SimpleBar для стилизации скролл-бара, в случае неудаче блоку задается стиль ovetflowY = 'auto'
 * @param {String || Object} selector - селектор блока, в котором требуется стилизация скролла
 */


function plugSimpleBar(selector) {
  var simpleBarEl;

  if (typeof selector === 'string') {
    simpleBarEl = document.querySelector(selector);
  } else if (_typeof(selector) === 'object') {
    simpleBarEl = selector;
  } else return;

  if (simpleBarEl) {
    try {
      return new SimpleBar(simpleBarEl);
    } catch (_unused) {
      simpleBarEl.style.ovetflowY = 'auto';
    }
  }
}
/**
 * закрывает в все открытые меню и попапы, открытые
 */


function closeAllOpenedMenu() {
  var allMenu = document.querySelectorAll('._open');
  allMenu.forEach(function (menu) {
    return menu.classList.remove('_open');
  });
}
/**
 * при клике на любую область документа, если эта область не находится внутри открытого меню, 
 * то закрываются все окна
 */


document.documentElement.addEventListener('click', function (e) {
  setTimeout(function () {
    // если не проверить, присоединен ли элемент в DOM, то при удалении элемента по клику
    // происходит автоматическое закрытие меню
    if (e.target.closest('body') && !e.target.closest('._open')) {
      closeAllOpenedMenu();
      unBlockOverflow();
    }
  }, 10);
});
/**
 * навешиваем обработчик нажатия на каждый активный елемент (кнопку/иконку)
 * которому присвоен класс ._active-el
 * при нажатии закрываются все елементы открытые елементы, содержащие класс ._open
 */

var activeHeadersEls = document.querySelectorAll('._active-el');
activeHeadersEls.forEach(function (el) {
  el.addEventListener('click', function () {
    if (!el.parentElement.classList.contains('_open')) {
      closeAllOpenedMenu();
    }

    el.parentElement.classList.toggle('_open');
  });
}); //=================

/**
 * Когда <input class="input"> в фокусе его родителю присваивается класс _focus
 */

var inputArr = document.querySelectorAll('._input');

if (inputArr.length) {
  inputArr.forEach(function (input) {
    input.addEventListener('focus', function () {
      input.parentElement.classList.add('_focus');
    });
    input.addEventListener('blur', function () {
      input.parentElement.classList.remove('_focus');
    });
    input.addEventListener('change', function () {
      if (input.value) input.parentElement.classList.add('_filled');else input.parentElement.classList.remove('_filled');
    });
  });
}
/**
 * по классу _tabs находятся все блоки, которые должны быть табами 
 * например в проэкте блок .slide-content__tabs-item
 */
//Tabs


var tabs = document.querySelectorAll("._tabs");

var _loop = function _loop(index) {
  var tab = tabs[index];
  var tabs_items = tab.querySelectorAll("._tabs-item");
  var tabs_blocks = tab.querySelectorAll("._tabs-block");

  var _loop2 = function _loop2(_index) {
    var tabs_item = tabs_items[_index];
    tabs_item.addEventListener("click", function (e) {
      for (var _index2 = 0; _index2 < tabs_items.length; _index2++) {
        var _tabs_item = tabs_items[_index2];

        _tabs_item.classList.remove('_active');

        tabs_blocks[_index2].classList.remove('_active');
      }

      tabs_item.classList.add('_active');

      tabs_blocks[_index].classList.add('_active');

      e.preventDefault();
    });
  };

  for (var _index = 0; _index < tabs_items.length; _index++) {
    _loop2(_index);
  }
};

for (var index = 0; index < tabs.length; index++) {
  _loop(index);
} // Обработка событий для контекстного меню .context-menu


var popUpMenu = document.querySelectorAll('.context-menu');

if (popUpMenu.length) {
  /**
   * если окно выходит за рамки окна браузера, корректируем позицию
   */
  var popUpMenuCorrectPos = function popUpMenuCorrectPos(popUpMenu) {
    if (!popUpMenu) return;
    popUpMenuCleartPos(popUpMenu);
    var ul = popUpMenu.querySelector('ul');
    if (!ul) return;
    var menuPosLeft = popUpMenu.getBoundingClientRect().left;
    var menuPosRight = popUpMenu.getBoundingClientRect().right;
    var ulPosLeft = ul.getBoundingClientRect().left - 5;
    var ulPosRight = document.documentElement.clientWidth - ul.getBoundingClientRect().right - 5;

    if (ulPosLeft < 0) {
      if (document.documentElement.clientWidth - menuPosLeft - 5 >= ul.offsetWidth) ul.style.left = '0';else ul.style.right = ulPosLeft + 'px';
    }

    if (ulPosRight < 0) {
      if (menuPosRight - 5 >= ul.offsetWidth) ul.style.right = '0';else ul.style.left = ulPosRight + 'px';
    }
  };

  var popUpMenuCleartPos = function popUpMenuCleartPos(popUpMenu) {
    var ul = popUpMenu.querySelector('ul');
    if (ul) ul.style.left = ul.style.right = '';
  };

  document.documentElement.addEventListener('click', function (e) {
    var btn = e.target.closest('.context-menu > button, .context-menu > a');

    if (btn) {
      var menu = e.target.closest('.context-menu');

      if (menu) {
        if (!menu.classList.contains('_open')) closeAllOpenedMenu();
        popUpMenuCorrectPos(menu);
        menu.classList.toggle('_open');
      }
    } else {
      var _popUpMenu = document.querySelector('.context-menu._open');

      if (_popUpMenu) _popUpMenu.classList.remove('_open');
    }
  }, false);
  window.addEventListener('resize', function () {
    popUpMenu.forEach(function (menu) {
      popUpMenuCleartPos(menu);
      popUpMenuCorrectPos(menu);
    });
  });
} // адаптивная высота textarea


document.documentElement.addEventListener('input', function (e) {
  if (!e.target.matches('.js-textarea-auto-height')) return;
  e.target.style.height = '';
  e.target.style.height = e.target.scrollHeight + 2 + 'px';
}, true);
var textareaAutoHeight = document.querySelectorAll('.js-textarea-auto-height');
textareaAutoHeight.forEach(function (textarea) {
  if (textarea.getBoundingClientRect().height < textarea.scrollHeight) {
    textarea.style.height = textarea.scrollHeight + 2 + 'px';
  }
});
window.addEventListener('resize', function (e) {
  var textareaAutoHeight = document.querySelectorAll('.js-textarea-auto-height');
  textareaAutoHeight.forEach(function (textarea) {
    textarea.dispatchEvent(new Event('input'));
  });
}, false); // фокус родителю поля ввода 

var fieldFocus = document.querySelectorAll('.js-focus');

if (fieldFocus.length) {
  fieldFocus.forEach(function (field) {
    field.addEventListener('focus', function () {
      this.parentElement.classList.add('_focus');
    });
    field.addEventListener('blur', function () {
      this.parentElement.classList.remove('_focus');
    });
  });
} // Стрелка прокрутки вверх


var arrowToTop = document.querySelector('.arrow-to-top');

if (arrowToTop) {
  window.addEventListener('scroll', function () {
    arrowToTop.classList.toggle('arrow-to-top--visible', window.scrollY > 250);
  });
  arrowToTop.addEventListener('click', function () {
    window.scrollTo(0, 0);
  });
} // Обработчик закрытия кастомнного поп-апа .custom-pop-up


var customPopUps = document.querySelectorAll('.custom-pop-up');

if (customPopUps && customPopUps.length) {
  customPopUps.forEach(function (popUp) {
    document.body.append(popUp);
  });
}

document.documentElement.addEventListener('click', function (e) {
  if (e.target.closest('.custom-pop-up__close, .custom-pop-up__cover')) {
    e.target.closest('.custom-pop-up').classList.remove('_open');
    e.target.dispatchEvent(new Event('close-custom-pop-up', {
      'bubbles': true,
      'cancelable': false
    }));
  } else if (nOpener = e.target.closest('.js-pop-up-opener')) {
    var popUp = document.getElementById(nOpener.dataset.targetId);

    if (popUp) {
      popUp.classList.add('_open');
      nOpener.classList.add('_open');
      blockOverflow();
    }
  }
}, false); //=================