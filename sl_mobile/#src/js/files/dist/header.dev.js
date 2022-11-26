"use strict";

// HEADER JS / begin ============================================================================
var mainHeader = document.querySelector('header.header');
var headerMenuBody = document.querySelector('.header .menu__body'); // Подключаем к .menu__body кастомный скролл

var mainMenuSimpleBar = plugSimpleBar('.header .menu__body'); //setheaderMenuBodyHeight();

mainMenuSimpleBar.recalculate();
window.addEventListener('resize', function () {
  //setheaderMenuBodyHeight();
  if (mainMenuSimpleBar) mainMenuSimpleBar.recalculate();
}); // При открытии/закрытии основного меню блокируется/разблокируется скролл

var mainMenuBtn = document.getElementById('main-menu-btn');

if (mainMenuBtn) {
  mainMenuBtn.addEventListener('click', function (e) {
    if (e.target.closest('._open')) {
      blockOverflow();
    } else {
      unBlockOverflow();
    }
  });
} // Header search ========= 


var alphabet = document.querySelector('.alphabet');
var searchInput = document.querySelector('.query-search__input');

if (searchInput) {
  /**
  * когда поисковый инпут в фокусе, то его родителю присваивается класс _focus
  * также блоку .alphabet прсваивается или удаляется модификатор _show
  */
  searchInput.addEventListener('focus', function () {
    searchInput.classList.add('_focus');
    searchInput.parentElement.classList.add('_focus');
    alphabet.classList.add('_show');
  });
  /**
   * когда поисковый инпут не в фокусе, то у его родителю удаляется класс _focus
   */

  searchInput.addEventListener('blur', function () {
    var searchInputParent = searchInput.parentElement;
    setTimeout(function () {
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


var searchIcon = document.querySelector('.query-search__icon');
if (searchIcon) searchIcon.addEventListener('click', function () {
  searchInput.focus();
});
/**
 * очистка поискового инпута при нажатии на стрелку вниз, расположеную в инпуте при фокусе
 */

var arrowInputBtn = document.querySelector('.query-search__input-arrow');
if (arrowInputBtn) arrowInputBtn.addEventListener('click', function () {
  //searchInput.blur();
  setTimeout(function () {
    searchInput.focus();
  }, 210);
}, false);
var notifySimpleBar = plugSimpleBar('#notify-body'); // HEADER JS / end ============================================================================