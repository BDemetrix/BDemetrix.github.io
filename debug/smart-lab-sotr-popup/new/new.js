const commentsFilterSelectors = ['.comments_filter-btn', '.comments_filter-pop', '.comments_filter-date'];
const commentsFilterBtns = [];
commentsFilterSelectors.forEach (selector => {
  const el = document.querySelector(selector);
  if (el) commentsFilterBtns.push(el);
});

if (commentsFilterBtns.length) {
  commentsFilterBtns.forEach(btn => {
    if (btn) 
      btn.addEventListener('click', () => {
        btn.closest('.comments_filter').classList.toggle('active');
      });
  });
};

const commentsFilter = document.querySelector('.comments_filter');
if (commentsFilter)
  document.documentElement.addEventListener('click', (e) => {
    if (!e.target.closest('.comments_filter')) 
      commentsFilter.classList.remove('active');
  });