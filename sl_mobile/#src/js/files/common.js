/**
 * Объект isMobile содержит результаты проверки типа и марки тачпада
 */
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
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

const bodyGlobal = document.querySelector('body');
const scrollWidth = window.innerWidth - document.documentElement.clientWidth; // ширина скролл-бара окна
/**
 * функции для блокировки скролла при открытии модального окна
 */
function blockOverflow() {
  bodyGlobal.style.overflow = `hidden`;
  bodyGlobal.style.touchAction = `none`;
  if (!isMobile.any()) {
    bodyGlobal.style.paddingRight = scrollWidth + 'px';
  }

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

function toggleOverflow() {
  if (window.getComputedStyle(bodyGlobal).overflow != 'hidden')
    blockOverflow();
  else
    unBlockOverflow();
}

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
    spollersArr.forEach(spollersBlock => {
      let spollersGo = true;
      const maxWidth = spollersBlock.dataset.spollerMaxwidth;
      const one = spollersBlock.classList.contains('_one')
      let spollerEl = spollersBlock.querySelectorAll('._spoller');
      if (spollerEl.length) {
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
                spollerArr.forEach(el => {
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
          spollerEl.forEach(spoller => {
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
  let simpleBarEl;
  if (typeof selector === 'string') {
    simpleBarEl = document.querySelector(selector);
  } else if (typeof selector === 'object') {
    simpleBarEl = selector;
  } else return;

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
    unBlockOverflow();
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

/**
 * по классу _tabs находятся все блоки, которые должны быть табами 
 * например в проэкте блок .slide-content__tabs-item
 */
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

// Обработка событий для контекстного меню .context-menu
const popUpMenu = document.querySelectorAll('.context-menu');
if (popUpMenu.length) {
  popUpMenu.forEach(menu => {
    const btn = menu.querySelector('button, a');

    if (btn) {
      btn.addEventListener('click', () => {
        if (!menu.classList.contains('_open')) {
          closeAllOpenedMenu();
          popUpMenuCorrectPos(menu);
        } else
          popUpMenuCleartPos(menu);

        menu.classList.toggle('_open');
      });
    }

    setTimeout(() => {
      popUpMenuCorrectPos(menu);
    }, 10);
  });

  document.documentElement.addEventListener('click', (e) => {
    if (!e.target.closest('.context-menu > button')) {
      const popUpMenu = document.querySelector('.context-menu._open');
      if (popUpMenu) popUpMenu.classList.remove('_open');
    }
  });

  /**
   * если окно выходит за рамки окна браузера, корректируем позицию
   */
  function popUpMenuCorrectPos(popUpMenu) {
    popUpMenuCleartPos(popUpMenu);

    const ul = popUpMenu.querySelector('ul');
    let menuPosLeft = popUpMenu.getBoundingClientRect().left;
    let menuPosRight = popUpMenu.getBoundingClientRect().right;
    let ulPosLeft = ul.getBoundingClientRect().left - 5;
    let ulPosRight = document.documentElement.clientWidth - ul.getBoundingClientRect().right - 5;

    if (ulPosLeft < 0) {
      if ((document.documentElement.clientWidth - menuPosLeft - 5) >= ul.offsetWidth)
        ul.style.left = '0';
      else
        ul.style.right = ulPosLeft + 'px';
    }

    if (ulPosRight < 0) {
      if ((menuPosRight - 5) >= ul.offsetWidth)
        ul.style.right = '0';
      else
        ul.style.left = ulPosRight + 'px';
    }
  }

  function popUpMenuCleartPos(popUpMenu) {
    const ul = popUpMenu.querySelector('ul');
    ul.style.left = ul.style.right = '';
  }

  window.addEventListener('resize', () => {
    popUpMenu.forEach(menu => {
      popUpMenuCleartPos(menu);
      popUpMenuCorrectPos(menu);
    })
  });
}

// адаптивная высота textarea
const textareaAutoHeight = document.querySelectorAll('.js-textarea-auto-height');
if (textareaAutoHeight.length) {

  textareaAutoHeight.forEach(textarea => {
    textarea.addEventListener('input', function () {
      this.style.height = '';
      this.style.height = this.scrollHeight + 'px';
    });

    // корректировка высоты при загрузке страницы 
    if (textarea.getBoundingClientRect().height < textarea.scrollHeight) {
      textarea.style.height = textarea.scrollHeight  + 'px';
    }
  })

console.log(window);
  ['resize', 'orientationchange'].forEach(event => {
    
    window.addEventListener(event, () => {
      textareaAutoHeight.forEach(textarea => {
        textarea.dispatchEvent(new Event('input'))
      })
    });
  });
}

// фокус родителю поля ввода 
const fieldFocus = document.querySelectorAll('.js-focus')
if (fieldFocus.length) {
  fieldFocus.forEach( field => {
    console.log(field)
    field.addEventListener('focus', function() {
      this.parentElement.classList.add('_focus')
      console.log('_focus')
    });

    field.addEventListener('blur', function () {
      this.parentElement.classList.remove('_focus')
    })
  })
}

//=================