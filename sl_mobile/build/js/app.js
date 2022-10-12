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
function unBlockOverflow() {
  setTimeout(() => {
    bodyGlobal.style.overflow = ``;
    bodyGlobal.style.touchAction = ``;
    bodyGlobal.style.paddingRight = ``;
    console.log('unBlockOverflow')
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
  setTimeout(() => {
    if (!e.target.closest('._open')) {
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
const textareaAutoHeight = document.querySelectorAll('.js-textarea-auto-height');
if (textareaAutoHeight.length) {

  textareaAutoHeight.forEach(textarea => {
    textarea.addEventListener('input', function () {
      this.style.height = '';
      this.style.height = this.scrollHeight + 2 + 'px';
    });

    // корректировка высоты при загрузке страницы 
    if (textarea.getBoundingClientRect().height < textarea.scrollHeight) {
      textarea.style.height = textarea.scrollHeight + 2 + 'px';
    }
  })

  window.addEventListener('resize', () => {
    textareaAutoHeight.forEach(textarea => {
      textarea.dispatchEvent(new Event('input'))
    })
  });
}

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
let closeCustomPopUpsBtns = document.querySelectorAll('.custom-pop-up__close, .custom-pop-up__cover');
if (closeCustomPopUpsBtns && closeCustomPopUpsBtns.length) {
  closeCustomPopUpsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.custom-pop-up').classList.remove('_open');
      btn.dispatchEvent(new Event('close-custom-pop-up', {
        "bubbles": true,
        "cancelable": false
      }))
    })
  })
}

// кнопка с классом `js-pop-up-opener` открывает поп-ап с id, который указан в атрибуте `data-target-id` кнопки
const jsPopUpOpener = document.querySelectorAll('.js-pop-up-opener');
if (jsPopUpOpener) jsPopUpOpener.forEach(btn => {
  const popUp = document.getElementById(btn.dataset.targetId);
  if (popUp) btn.addEventListener('click', () => {
    popUp.classList.add('_open');
    btn.classList.add('_open');
    blockOverflow();
  })
})


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
        /* centeredSlides: true,
        centeredSlidesBounds: true, */
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
const sectionsBoxSlider = new Swiper('.sections-box', {
    speed: 400,
    slidesPerView: 'auto',
    watchOverflow: true,
    observer: true,
    resizeObserver: true,
});

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
(function () {
    const moderationPopUp = document.querySelector('#moderation-pop-up');
    if (moderationPopUp) {
        window.addEventListener('close-custom-pop-up', () => {
            const opened = moderationPopUp.querySelector('._spoller._active');
            if (opened) opened.click();
        })

        const inputs = moderationPopUp.querySelectorAll('textarea, input');
        const support = (typeof window.IntersectionObserver === "function");

        if (inputs && support) {
            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        entry.element.scrollIntoView();
                    }
                })
            });

            inputs.forEach(el => {
                el.addEventListener('focus', () => {
                    setTimeout(() => {
                        observer.observe(el)
                    }, 100);
                })
            });
        }

        // костыль для textarea в спойлере 
        const textareaAutoHeight = moderationPopUp.querySelectorAll('.js-textarea-auto-height');
        const spollers = moderationPopUp.querySelectorAll('._spoller');

        if (spollers) spollers.forEach( btn => {
            btn.addEventListener('click', () => {
                textareaAutoHeight.forEach(textarea => {
                    textarea.dispatchEvent(new Event('input'))
                })
            })
        })
    }
}());
class CustomSelect{
    constructor($el){

        if (!$el || (typeof $el !== 'object')) {
            console.log(this.$el);
            throw `Некорректный аргумент класса CustomSelect". Ожидается объект DOM вместо ${this.$el}`;
        }

        this.$el = $el;
        this._init();
    }

    _init() {
        this.$mainBtn = this.$el.querySelector('.custom-select__main-btn');
        this.$options = this.$el.querySelectorAll('.custom-select__option');
        this.active = this.$el.querySelector('.custom-select__option--active');

        for(const prop in this) {
            if (!this[prop]) {
                console.log(this);
                throw `Ошибка инициализации CustomSelect, не установлено поле ${prop}`;
            }
        }

        this.$mainBtn.addEventListener('click', () => { 
            this.$el.classList.toggle('custom-select--opened');
        });

        document.documentElement.addEventListener('click', (e) => {
            if (e.target.closest('.custom-select__main-btn') != this.$mainBtn) {
                this.$el.classList.remove('custom-select--opened');
            }
        })

        this.$options.forEach(option => {
            option.addEventListener('click', () => {
                this._change(option);
                this.$el.classList.remove('custom-select--opened');
            }) 
        });

        this._sync();
    }

    _change(option) {
        this.$mainBtn.textContent = this.$mainBtn.value = option.value;
        this.active.classList.remove('custom-select__option--active');
        option.classList.add('custom-select__option--active');
        this.active = option;
    }

    _sync() {
        const active = this.$el.querySelector('.custom-select__option--active');
        if (active) {
            this._change(active);
            this.active = active;
        } else {
           option = Array.from(this.$options).filter(option => option.value === this.$mainBtn.value)[0];
           option ? option.classList.add('custom-select__option--active') : null;
        }
    }
}

class CustomSelectAll {
    constructor() {
        this.$els = document.querySelectorAll('.custom-select');
        console.log(this.$els)
        if (!this.$els || !this.$els.length) {
            throw ('Элементы с классом ".custom-select" на странице не найдены.'); 
        }
        this.$els.forEach(el => {
            el = new CustomSelect(el)
        });
    }
}

const customSelectAll = new CustomSelectAll();