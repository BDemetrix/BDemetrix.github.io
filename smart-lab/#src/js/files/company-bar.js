(function () {

  plugSimpleBar('.company-bar__body');
  
  const companyBar = document.querySelector('.company-bar');
  const companyBarBtn = document.querySelector('.company-bar__btn');
  
  if (companyBar && companyBarBtn) {
  
    companyBarBtn.addEventListener('click', () => {
      if (window.getComputedStyle(bodyGlobal).overflow != 'hidden') 
        blockOverflow();
      else
        unBlockOverflow();
    });
  
  
    new jBox('Tooltip', {
      attach: '#moderators>li>a, #readers>li>a',
      content: $('#profile-popup'),
      zIndex: 999,
      adjustPosition: true,
      isolateScroll: false,
      closeOnMouseleave: true,
      animation: "move",
      addClass: 'company-bar-jBox',
    
      onClose: function() {
        this.container.find('.context-menu').removeClass('_open');
      }
    });
  }

}());