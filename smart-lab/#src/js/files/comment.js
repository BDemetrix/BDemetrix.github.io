(function () {
  
  let commentText = document.querySelectorAll('.comment__text');
  if (commentText.length) {
    commentText.forEach( comment => {
      let blockquote = comment.querySelector('blockquote');
      if (blockquote) {
          blockquote.addEventListener('click', () => {
          comment.classList.toggle('_open');
        })
      }
    })
  }

  
} ());