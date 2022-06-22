(function () {

  setTimeout(() => {
    plugSimpleBar('.new-msgs-box__content'); 
  }, 2000);
  
  const newMsgsBoxBtn = document.querySelector('.new-msgs-box__btn');

  newMsgsBoxBtn.addEventListener('click', () => {
    if (window.getComputedStyle(bodyGlobal).overflow != 'hidden') 
      blockOverflow();
    else
      unBlockOverflow();
  });

}());