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

    /* commentTextarea.addEventListener('blur', (e) => {
      
      if (e.target.closest('.comment__write-actions')) {
        commentWriteBox.classList.remove('_open');
      }
    });

    document.documentElement.addEventListener("click", (e) => {
      console.log(e.target);
      if (!e.target.closest('.comment__write-box')) {
        //commentWriteBox.classList.remove('_open');
      }
    }); */

    if (commentSelectImg && commentWriteImages) {
      commentSelectImg.addEventListener('click', () => {
        _slideToggle(commentWriteImages, 300);
      });
    }
  }

}());


