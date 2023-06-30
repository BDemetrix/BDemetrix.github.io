/**
 * Объект isMobile содержит результаты проверки типа и марки тачпада
 */
let isMobile = {
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
function unBlockOverflow(time = 400) {
  setTimeout(() => {
    bodyGlobal.style.overflow = ``;
    bodyGlobal.style.touchAction = ``;
    bodyGlobal.style.paddingRight = ``;
    console.log('unBlockOverflow')
  }, time)
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
function initSpollers(spollersArr) {
  const timeOut = 400;
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

initSpollers(document.querySelectorAll("._spollers")); // инициализируем споллеры
window.addEventListener('resize', clearSpollersStyle);

//SlideToggle
/**
 * Функция сворачивает/разворачивает элемент
 * @param {Object} target - элемент DOM, который надо свернуть/развернуть
 * @param {Number} duration - длительность анимации
 */
let _slideUp = (target, duration = 500) => {
  target.style.transitionProperty = 'height, margin, padding, opacity';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = target.offsetHeight + 'px';
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.opacity = 0;
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
    target.style.removeProperty('opacity');
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
  target.style.transitionProperty = "height, margin, padding, opacity";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.opacity = 1;
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.style.removeProperty('opacity');
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
  setTimeout(() => {
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

  document.documentElement.addEventListener('click', function (e) {
    let btn = e.target.closest('.context-menu > button, .context-menu > a');
    if (btn) {
      let menu = e.target.closest('.context-menu');
      if (menu) {
        if (!menu.classList.contains('_open')) closeAllOpenedMenu();
        popUpMenuCorrectPos(menu);
        menu.classList.toggle('_open');
      }
    } else {
      let popUpMenu = document.querySelector('.context-menu._open');
      if (popUpMenu) popUpMenu.classList.remove('_open');
    }

  }, false);


  /**
   * если окно выходит за рамки окна браузера, корректируем позицию
   */
  function popUpMenuCorrectPos(popUpMenu) {
    if (!popUpMenu) return;
    popUpMenuCleartPos(popUpMenu);

    const ul = popUpMenu.querySelector('ul');
    if (!ul) return;

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
    if (ul) ul.style.left = ul.style.right = '';
  }

  window.addEventListener('resize', () => {
    popUpMenu.forEach(menu => {
      popUpMenuCleartPos(menu);
      popUpMenuCorrectPos(menu);
    })
  });
}

// адаптивная высота textarea
document.documentElement.addEventListener('input', function (e) {
  if (!e.target.matches('.js-textarea-auto-height')) return;
  e.target.style.height = '';
  e.target.style.height = e.target.scrollHeight + 2 + 'px';

}, true);

const textareaAutoHeight = document.querySelectorAll('.js-textarea-auto-height');
textareaAutoHeight.forEach(textarea => {
  if (textarea.getBoundingClientRect().height < textarea.scrollHeight) {
    textarea.style.height = textarea.scrollHeight + 2 + 'px';
  }
});

window.addEventListener('resize', function (e) {
  const textareaAutoHeight = document.querySelectorAll('.js-textarea-auto-height');
  textareaAutoHeight.forEach(textarea => {
    textarea.dispatchEvent(new Event('input'))
  });
}, false);

// фокус родителю поля ввода 
const fieldFocus = document.querySelectorAll('.js-focus')
if (fieldFocus.length) {
  fieldFocus.forEach(field => {
    field.addEventListener('focus', function () {
      this.parentElement.classList.add('_focus')
    });

    field.addEventListener('blur', function () {
      this.parentElement.classList.remove('_focus')
    })
  })
}

// Стрелка прокрутки вверх
let arrowToTop = document.querySelector('.arrow-to-top');
if (arrowToTop) {
  window.addEventListener('scroll', () => {
    arrowToTop.classList.toggle('arrow-to-top--visible', window.scrollY > 250);
  });

  arrowToTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
  })
}

// Обработчик закрытия кастомнного поп-апа .custom-pop-up
let customPopUps = document.querySelectorAll('.custom-pop-up')
if (customPopUps && customPopUps.length) {
  customPopUps.forEach(popUp => {
    document.body.append(popUp)
  })
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
}, false);


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

//=================
// HEADER JS / begin ============================================================================
let mainHeader = document.querySelector('header.header');
let headerMenuBody = document.querySelector('.header .menu__body');

// Подключаем к .menu__body кастомный скролл
let mainMenuSimpleBar = plugSimpleBar('.header .menu__body');

//setheaderMenuBodyHeight();
mainMenuSimpleBar.recalculate();
window.addEventListener('resize', () => {
  //setheaderMenuBodyHeight();
  if (mainMenuSimpleBar) mainMenuSimpleBar.recalculate();
} );

// При открытии/закрытии основного меню блокируется/разблокируется скролл
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
    if(alphabet) alphabet.classList.add('_show');
  });
  /**
   * когда поисковый инпут не в фокусе, то у его родителю удаляется класс _focus
   */
  searchInput.addEventListener('blur', () => {
    const searchInputParent = searchInput.parentElement;
    setTimeout(() => {
      if(alphabet) alphabet.classList.remove('_show');
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
if (searchIcon) searchIcon.addEventListener('click', () => {
  searchInput.focus();
});
/**
 * очистка поискового инпута при нажатии на стрелку вниз, расположеную в инпуте при фокусе
 */
let arrowInputBtn = document.querySelector('.query-search__input-arrow');
if (arrowInputBtn) arrowInputBtn.addEventListener('click', () => {
  //searchInput.blur();
  setTimeout(() => {
    searchInput.focus();
  }, 210);
}, false);

let notifySimpleBar = plugSimpleBar('#notify-body');

const darkTheme = document.querySelector('.js-dark-theme');
if (darkTheme) {

  const isDarkTheme = !!window.localStorage.getItem('darkTheme');
  darkTheme.checked = isDarkTheme;
  document.body.classList.toggle('dark-theme', isDarkTheme);

  darkTheme.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    window.localStorage.setItem('darkTheme', darkTheme.checked ? '1' : '')
  });
}

// HEADER JS / end ============================================================================
let now = new Date();
let slideDate = document.querySelector('.slide-content__date');

if (slideDate) { 
    slideDate.textContent = `${now.getDate()}.${(now.getMonth()) < 9 ? ('0' + (now.getMonth() + 1)) : (now.getMonth() + 1)}.${now.getFullYear()}`;
}


/**
 * создается слайдер из блока .categories-slider__body
 * Модификатор categories-slider__body--loading нужен на время загрузки скриптов
 */
let categoriesSlider;
const categoriesSliderBbody = document.querySelector('.categories-slider__body');
if (categoriesSliderBbody) {
    categoriesSliderBbody.classList.remove('categories-slider__body--loading');

    categoriesSlider = new Swiper(categoriesSliderBbody, {
        slidesPerView: 'auto',
        //centeredSlides: true,
        //centeredSlidesBounds: true,
        spaceBetween: 32,
        /* freeMode: {
            enabled: true,
            sticky: true,
        }, */
        speed: 400,
        observer: true,
        resizeObserver: true,
        watchOverflow: true,
        mousewheel: {
            releaseOnEdges: true,
        }
    });
}


/**
 *  Модификатор categories - slider__body--loading нужен на время загрузки скриптов
 */
let contentSlider;
const contentSliderBbody = document.querySelector('.content-slider__body');
if (categoriesSliderBbody) {
    categoriesSliderBbody.classList.remove('content-slider__body--loading');

    contentSlider = new Swiper(contentSliderBbody, {
        thumbs: {
            swiper: categoriesSlider,
        },
        slidesPerView: 1,
        speed: 400,
        simulateTouch: true,
        observer: true,
        resizeObserver: true,
        watchOverflow: true,
    });
} 
const selectorLinks = document.querySelector('.sections-box__swiper');

if (selectorLinks) {

    selectorLinks.parentElement.classList.remove('_loading');
    const sectionsItems = Array.from(selectorLinks.querySelectorAll('.sections-box__item'));
    const activeIndex = sectionsItems.findIndex(item => item.classList.contains('sections-box__item--active'));

    const selectorLinksSlider = new Swiper(selectorLinks, {
        slidesPerView: 'auto',
        watchOverflow: true,
        observer: true,
        resizeObserver: true,
        freeMode: {
            enabled: false,
            //sticky: true,
        },
        speed: 300,
        navigation: {
            nextEl: '.sections-box__next',
            prevEl: '.sections-box__prev',
        },
    });

    selectorLinksSlider.slideTo(activeIndex);

    sectionsItems.forEach((item, i, arr) => {
        item.addEventListener('click', () => {
            arr.forEach(el => {
                el.classList.remove('sections-box__item--active')
            });
            item.classList.add('sections-box__item--active');
            selectorLinksSlider.slideTo(i);
            const a = item.querySelector('a');
            if (selectorLinksSlider.isLocked && a) {
                console.log('selectorLinksSlider.isLocked = ', selectorLinksSlider.isLocked)
                window.location = a.href;
            };
        })
    })
}
const forumsSlider = new Swiper('.forums-slider', {
    speed: 400,
    autoplay: {
        delay: 3000,
    },
    loop: true,
    watchOverflow: true,
    observer: true,
    resizeObserver: true,
    spaceBetween: 20,
    breakpoints: {
        280: {
            slidesPerView: 3.5,
        },
        320: {
            slidesPerView: 4.5,
        },
        430: {
            slidesPerView: 5.5,
        },
        540: {
            slidesPerView: 6.5,
        },
        650: {
            slidesPerView: 7.5,
        },
        760: {
            slidesPerView: 8.5,
        },
    }
});
// Модальное окно модерации
(function () {

    const sModerationPopupSelector = '#moderation-pop-up';
    if (typeof (IntersectionObserver) === 'function') {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    entry.target.scrollIntoView();
                }
            })
        });

        document.documentElement.addEventListener('focus', function (e) {
            if (!e.target.closest(sModerationPopupSelector)) return;
            if (!e.target.matches('textarea, input')) return;

            setTimeout(() => {
                observer.observe(e.target);
            }, 100);

        }, false);
    }

    document.documentElement.addEventListener('click', function (e) {
        if (!e.target.closest(sModerationPopupSelector)) return;
        if (!e.target.matches('._spoller')) return;

        var inputs = e.target.closest(sModerationPopupSelector).querySelectorAll('.js-textarea-auto-height');
        inputs.forEach(textarea => {
            textarea.dispatchEvent(new Event('input'))
        });

    }, false);

    document.documentElement.addEventListener('close-custom-pop-up', function (e) {
        if (!e.target.closest(sModerationPopupSelector)) return;

        const opened = e.target.closest(sModerationPopupSelector).querySelector('._spoller._active');
        if (opened) opened.click();

    }, false);

    document.documentElement.addEventListener('keyup', (e) => {
        heightCorrection(e)
    }, false);

    const popUpBody = document.querySelector('.moderation-pop-up__body');
    var bodyPaddingBottom = 0;
    if (popUpBody) {
        bodyPaddingBottom = +(window.getComputedStyle(popUpBody).paddingBottom.slice(0, -2));
    }

    function heightCorrection(e) {
        if (!e.target.closest(sModerationPopupSelector)) return;
        if (!e.target.matches('.moderation-pop-up__search')) return;

        const popUp = e.target.closest('.moderation-pop-up');
        const popUpBody = popUp.querySelector('.moderation-pop-up__body');

        popUpBody.style.height = popUp.scrollHeight + bodyPaddingBottom + 'px';
        bodyPaddingBottom = 0;
    }
}());

// Срипт для кастомного селекта
(function () {
    const sCustomSelector = '.custom-select';

    function close(nExclude) {
        document.querySelectorAll(sCustomSelector).forEach(function (nOther) {
            if (nOther != nExclude) nOther.classList.remove('custom-select--opened');
        });
    }

    document.documentElement.addEventListener('click', function (e) {
        const nSelect = e.target.closest(sCustomSelector);
        if (!nSelect) return close(null);

        if (e.target.closest('.custom-select__main-btn')) {
            nSelect.classList.toggle('custom-select--opened');
            close(nSelect);

        } else if (nOption = e.target.closest('.custom-select__option')) {
            const nMainBtn = nSelect.querySelector('.custom-select__main-btn');
            if (nMainBtn) nMainBtn.value = nOption.value; // defineProperty handler

            nSelect.classList.remove('custom-select--opened');

            nMainBtn.dispatchEvent(new Event('change', {
                'bubbles': true,
                'cancelable': false
            }));
        }
    }, false);

    document.documentElement.addEventListener('sync', function (e) {
        if (!e.target.matches(sCustomSelector)) return;

        const nSelect = e.target;
        const nMainBtn = nSelect.querySelector('.custom-select__main-btn');
        if (nMainBtn) {
            const nActive = nSelect.querySelector('.custom-select__option--active');
            if (nActive) {
                nMainBtn.textContent = nActive.textContent;
                nMainBtn.value = nActive.value;
            } else {
                const nOption = nSelect.querySelector('.custom-select__option[value="' + nMainBtn.value + '"]');
                if (nOption) nOption.classList.add('custom-select__option--active');
            }

            Object.defineProperty(nMainBtn, 'value', {
                set: function (value) {
                    this.setAttribute('value', value);
                    const nActive = nSelect.querySelector('.custom-select__option--active');
                    const nOption = nSelect.querySelector('.custom-select__option[value="' + this.value + '"]');

                    if (nActive !== nOption) {
                        if (nActive) nActive.classList.remove('custom-select__option--active');
                        if (nOption) nOption.classList.add('custom-select__option--active');
                        this.textContent = nOption ? nOption.textContent : '';
                    }
                },

                get: function () {
                    return this.getAttribute('value');
                }
            });
        }

    }, false);

    document.querySelectorAll(sCustomSelector).forEach(function (nSelect) {
        nSelect.dispatchEvent(new Event('sync', {
            'bubbles': true,
            'cancelable': false
        }));
    });


    if (typeof (MutationObserver) !== 'function') return;
    (new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (node) {
                if (node.matches && node.matches(sCustomSelector)) {
                    node.dispatchEvent(new Event('sync', {
                        'bubbles': true,
                        'cancelable': false
                    }));
                } else if (node.querySelectorAll) {
                    const nodes = node.querySelectorAll(sCustomSelector);
                    if (nodes.length) {
                        nodes.forEach(function (node) {
                            node.dispatchEvent(new Event('sync', {
                                'bubbles': true,
                                'cancelable': false
                            }));
                        });
                    }
                }
            });
        });
    })).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

}());
// стемные уведомления
var oNoticeOptions = {
    theme: 'NoticeSmartlab',
    animation: {
        open: 'slide:bottom',
        close: 'slide:bottom'
    },
    stack: false,
    attributes: {
        x: 'right',
        y: 'bottom'
    },
    position: {
        x: 40,
        y: 40
    },
    responsivePositions: {
        320: {
            x: 22,
            y: 40
        },

        380: {
            x: 18,
            y: 40
        },

        480: {
            x: 25,
            y: 40
        }
    },
    color: 'green',
    width: null,
    height: null
};

function jBoxNotice(color, title, message) {
    oNoticeOptions['color'] = color;
    oNoticeOptions['title'] = title ? title : null;
    oNoticeOptions['content'] = message ? message : null;
    new jBox('Notice', oNoticeOptions);
}
(function () {
    const filterBtn = document.querySelector('.js-nf-filter-btn');
    const filterBody = document.querySelector('.js-nf-filter-body');

    if (!filterBtn || !filterBody) return;

    filterBtn.addEventListener('click', () => {
        _slideToggle(filterBody, 300);
    })
}());
// скрипт для перехода на страницу автора новости и отмену перехода к самой новости (в ленте новостей)

(function () {
    if (!document.querySelector('.js-news-feed-list')) return;

    document.documentElement.addEventListener('click', e => {
        const newsAuthor = e.target.closest('.js-news-card-author');
        if (!newsAuthor) return;

        e.preventDefault();
        window.location.href = newsAuthor.dataset.href;
    })
}());
;(function($){
	$.fn.datepicker.dates['ru'] = {
		days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
		daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб", "Вск"],
		daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
		months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
		today: "Сегодня",
		clear: "Убрать дату",
		weekStart: 1
	};
	$.fn.datepicker.defaults.format = "dd.mm.yyyy";
	$.fn.datepicker.defaults.language = "ru";
	$.fn.datepicker.defaults.autoclose = true;
	$.fn.datepicker.defaults.todayHighlight = true;
}(jQuery));

(function () {
    const sidebar = document.querySelector('.js-slide-sidebar');
    const sidebarToggleBtns = document.querySelectorAll('.js-slide-sidebar-toggle-btn');

    if (!sidebar || !sidebarToggleBtns.length) return;

    sidebarToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sidebar.classList.toggle('slide-sidebar--opened');
        })
    })
}());
(function () {
    const quickComment = document.querySelector('.quick-comment');
    const btn = document.querySelector('.quick-comment__btn');
    const cover = document.querySelector('.quick-comment__cover');
    const send = document.querySelector('.quick-comment__send');
    const text = document.querySelector('.quick-comment__text');

    if (!quickComment || !btn || !cover || !send || !text) return;

    btn.addEventListener('click', () => {
        quickComment.classList.add('quick-comment--visible');
        text.focus();
        blockOverflow();
    });

    cover.addEventListener('click', () => {
        quickComment.classList.remove('quick-comment--visible', '_open');
        unBlockOverflow();
    });

    send.addEventListener('click', () => {
        quickComment.classList.remove('quick-comment--visible', '_open');
        text.value = '';
        text.style.height = '';
        unBlockOverflow();
    });
}());
(function () {
  const postHead = document.querySelector('.js-post-head');
  const postHeadMenu = document.querySelector('.js-post-head-menu');
  if (!postHead && !postHeadMenu) return;
  
  postHead.addEventListener('mouseleave', () => {
    postHeadMenu.classList.remove('_open');
  })
}());

// скрипты для страницы котировок
(function () {
    // сдайдер ссылок
    let selectorLinksSlider;
    const selectorLinks = document.querySelector('.selector-links__slider');
    if (selectorLinks) {
        selectorLinks.parentElement.classList.remove('_loading');

        selectorLinksSlider = new Swiper(selectorLinks, {
            slidesPerView: 'auto',
            watchOverflow: true,
            freeMode: {
                enabled: true,
                sticky: true,
            },
            speed: 300,
            navigation: {
                nextEl: '.selector-links__next',
                prevEl: '.selector-links__prev',
            },
        });
    }
    
    window.addEventListener('resize', () => {
        if (selectorLinksSlider) {
            selectorLinksSlider.updateSize();
        }
    });
}());
(function () {
    // слайдер "хлебные крошки"
    let navbarBCSlider;
    const navbarBC = document.querySelector('.navbar__wrap');
    if (navbarBC) {
        navbarBC.parentElement.classList.remove('_loading');

        navbarBCSlider = new Swiper(navbarBC, {
            slidesPerView: 'auto',
            watchOverflow: true,
            freeMode: {
                enabled: true,
                sticky: true,
            },
            speed: 300,
            navigation: {
                nextEl: '.navbar__next',
                prevEl: '.navbar__prev',
            },
        });
    }

    /**
     * Обработка событий "хлебных крошек" - блок .navbar
     * открывается .jBox с содержимым соответствующего меню из соседнего элемента .navbar__drop-menu-wrap
     */
    new jBox('Tooltip', {
        attach: '.navbar__drop-item',
        zIndex: 999,
        adjustPosition: true,
        isolateScroll: false,
        closeOnMouseleave: true,
        animation: "move",
        addClass: 'navbar-jBox',
        //pointer: false,

        onOpen: function () {
            let content = this.target[0].nextElementSibling.innerHTML;
            this.setContent(content);
        }
    });
}());
(function () {
    // Подключение адаптивной таблицы
    setTimeout(() => {
        new FlexTable('.trades-table');
    }, 300);

}());
(function(){
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

    qnMenuBtnFilter.addEventListener('click', (e) => {
      const parent = qnMenuBtnFilter.parentElement;
      parent.classList.add('_opened');
    });

    qnFilters.addEventListener('click', (e) => {
      if (!e.target.closest('.qn-filters__content') || e.target.closest('.qn-filters__close')) {
        qnFilters.closest('._opened').classList.remove('_opened');
      }
    });
  }

  // Обработка сброса формы
  if (qnFilters) {
    const qnFiltersContent = document.querySelector('.qn-filters__content');
    const filtersInputs = qnFilters.querySelectorAll('input');
    let inputChange = new Event('change');

    if (qnFiltersContent) {
      qnFiltersContent.addEventListener('reset', (e) => {
        filtersInputs.forEach(input => {
          setTimeout(() => {
            input.dispatchEvent(inputChange);
            clearSumoContents();
          }, 50);
        });
      })
    }
  }


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

  // Доработка sumoSelects
  AdvancedSumoSelect();

  function AdvancedSumoSelect() {
    // Находим все элементы списка множественных "селектов"
    var optionsArr = $('.SumoSelect > .optWrapper.multiple .options li.opt');
    if (optionsArr.length) {
      optionsArr.append('<button class="radio-sumo-btn" type="button"></button>');

      $('.radio-sumo-btn').on('click', function (e) {
        e.stopPropagation();
        var parentList = $(this).closest('.optWrapper');
        var parentSelect = $(this).closest('.SumoSelect').find('select');

        parentSelect[0].sumo.unSelectAll();
        parentList.find('.options li.opt').removeClass('selected');

        $(this).parent().trigger('click');
        $(this).addClass('selected');
      });

      optionsArr.on('click', function () {
        $(this).closest('.optWrapper').find('.radio-sumo-btn').removeClass('selected');
      });
    }
  }

  // Функция сброса 
  function clearSumoContents() {
    $.each(sumoSelects, function () {
      this.sumo.unSelectAll();
      this.sumo.selectItem(0);
    })
    $('#sector_id')[0].sumo.unSelectAll();
  }


  // Подключение календаря
  /* Datepicker.locales.ru = {
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
  } */
  // ==============================

  //RANGE
  // Подключение ползунка
  let qnFiltersRangeSliderObjs = [];
  const qnFiltersRangeSliderEls = document.querySelectorAll('.qn-filters__range-slider');
  qnFiltersRangeSliderEls.forEach(el => {

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

  qnFiltersRangeSliderObjs.forEach(obj => plugNoUiSlider(obj));


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
          input.addEventListener('focus', (e) => {
            e.target.select()
          });
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
}());



