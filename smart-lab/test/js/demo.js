/**
 * demo.js предназначен исключительно для демонстрации некоторых свойств вёрстки
 */

(function () {
  const forumPopUpItem = document.querySelectorAll('.forum-pop-up--subscribe .forum-pop-up__item');
  if (forumPopUpItem.length) {
    forumPopUpItem.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('_selected');
      });
    });
  }
}());