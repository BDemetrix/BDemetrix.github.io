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

  
  const commentWriteBox = document.querySelector('.comment__write-box');
  const commentTextarea = document.querySelector('.comment__textarea');
  const commentSelectImg = document.querySelector('.comment__select-img');
  const commentWriteImages = document.querySelector('.comment__write-images');

  if (commentWriteBox && commentTextarea) {

    commentTextarea.addEventListener('focus', () => {
      commentWriteBox.classList.add('_open');
    });
    

    if (commentSelectImg && commentWriteImages) {
      commentSelectImg.addEventListener('click', () => {
        _slideToggle(commentWriteImages, 300);
      });
    }
  }


  new jBox('Confirm', {
    attach: '#new-watchlist',
    title: 'Hurray!',
    content: 'This is my modal window'
  });


}());


