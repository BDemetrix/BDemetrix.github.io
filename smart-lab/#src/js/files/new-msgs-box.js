(function () {
  
  plugSimpleBar('.new-msgs-box__content');

  const newMsgsBoxBtn = document.querySelector('.new-msgs-box__btn');

  newMsgsBoxBtn.addEventListener('click', () => {
    if (window.getComputedStyle(bodyGlobal).overflow != 'hidden') 
      blockOverflow();
    else
      unBlockOverflow();
  });

}());