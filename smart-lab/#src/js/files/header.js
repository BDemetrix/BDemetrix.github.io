// HEADER JS / begin ============================================================================
let mainHeader = document.querySelector('header.header');
let headerMenuBody = document.querySelector('.header .menu__body');

/**
 * Устанавливает высоту основного меню
 */
/* function setheaderMenuBodyHeight() {
  let mainHeaderHeight = mainHeader.offsetHeight;
  let headerMenuBodyHeight = document.documentElement.clientHeight - mainHeaderHeight;
  headerMenuBody.style.height = headerMenuBodyHeight + 'px';
} */

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

let notifySimpleBar = plugSimpleBar('#notify-body');

// jBox ======================================
/**
 * код отвечает за заполнение и демонстрацию уведомлеий используется плагин jQuery jBox
 */
// подключаем плагин для кастомного скролла
//let notifySimpleBar = plugSimpleBar('#notify-body');
/*var nPopup = new jBox('Tooltip',
  {
    id: 'notifiesPopover',
    trigger: 'click',
    appendTo: $('#notify-body'),
    attach: $('#notify-icon'),
    content: $('#notify-inner'), // для демонстрации вёрстки
    position: {x: 0, y: 0},
    isolateScroll: false,
  
 
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
          }); 
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
          //clearTabCounter('all').then(function (iCounter) {
          //nPopup.options.globalCounter = iCounter;
          //setGlobalCounter(iCounter);
        }); 
      }
      this.content.off('click');
    }
  });

// каостыль глюкала
$('body').on('click', function (e) {
  if ($(e.target).parents('#notify-icon').length) return;
  if ($(e.target).parents('#notifiesPopover').length) return;
  if (nPopup.isOpen) nPopup.close();
});
*/

// HEADER JS / end ============================================================================