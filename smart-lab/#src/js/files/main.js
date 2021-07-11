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