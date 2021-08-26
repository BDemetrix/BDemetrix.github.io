const lastLink = document.querySelector('.last_link');
if (lastLink) {
  lastLink.addEventListener('click' , () => {
    lastLink.classList.toggle('_opened');
  });
}