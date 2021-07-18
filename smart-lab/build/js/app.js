function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
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
 * @param {String} selector - селектор блока, в котором требуется стилизация скролла
 */
function plugSimpleBar(selector) {
  let simpleBarEl = document.querySelector(selector);
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
  allMenu.forEach(menu => menu.classList.remove('_open'))
}

/**
 * при клике на любую область документа, если эта область не находится внутри открытого меню, 
 * то закрываются все кнопки
 */
document.documentElement.addEventListener('click', (e) => {
  if (!e.target.closest('._open') && !e.target.closest('._active-el')) {
    closeAllOpenedMenu();
  }
});

//=================
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

/**
 * навешиваем обработчик нажатия на каждый активный елемент (кнопку/иконку)
 * в хедере, которому присвоен класс ._active-el
 * при нажатии закрываются все елементы открытые елементы, содержащие класс ._open
 */
let activeHeadersEls = document.querySelectorAll('.header ._active-el');
activeHeadersEls.forEach(el => {
  el.addEventListener('click', () => {
    if (!el.parentElement.classList.contains('_open')) {
      closeAllOpenedMenu();
    }
    el.parentElement.classList.toggle('_open');
  });
});

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