(function () {
  const postHead = document.querySelector('.js-post-head');
  const postHeadMenu = document.querySelector('.js-post-head-menu');
  if (!postHead && !postHeadMenu) return;
  
  postHead.addEventListener('mouseleave', () => {
    postHeadMenu.classList.remove('_open');
  })
}());