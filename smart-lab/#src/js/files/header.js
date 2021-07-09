// HEADER JS / begin ============================================================================


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

// Подключаем к .menu__body кастомный скролл
plugSimpleBar('.menu__body');

// Header search ========= 
/**
 * когда поисковый инпут в фокусе, то его родителю присваивается класс _focus
 */
let searchInput = document.querySelector('.query-search__input');
searchInput.addEventListener('focus', () => {
  searchInput.classList.add('_focus');
  searchInput.parentElement.classList.add('_focus');
  });
/**
 * когда поисковый инпут не в фокусе, то у его родителю удаляется класс _focus
 */
searchInput.addEventListener('blur', () => {
  const searchInputParent = searchInput.parentElement;
  setTimeout(() => {
    searchInput.classList.remove('_focus');
    searchInputParent.classList.remove('_focus');
    searchInput.value = '';
  }, 200);
});
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