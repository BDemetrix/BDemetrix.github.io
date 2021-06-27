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

// To connect the SimpleBar
/**
 * Функци подключает плагин SimpleBar для стилизации скролл-бара, в случае неудаче блоку задается стиль ovetflowY = 'auto'
 * @param {String} selector - селектор блока, в котором требуется стилизация скролла
 */
function plugSimpleBar(selector) {
  let simpleBarEl = document.querySelector(selector);
  if (simpleBarEl) {
    try {
      new SimpleBar(simpleBarEl);

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