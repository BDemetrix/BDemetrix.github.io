/**
 * Расщет верхнего паддинга боковых панелей 
 * нужен для корректного отображения левой и правой боковых панелей, когда хедер виден и когда не виден
 * боковым панелям присваивается класс _slide-sidebar-padding
 */
(function () {

  const header = document.querySelector('.header');
  const headerHeight = header.getBoundingClientRect().height;
  const slideSidebarPadding = document.querySelectorAll('._slide-sidebar-padding');
  
  if (header && slideSidebarPadding.length) {
  
    slideSidebarPadding.forEach( function(sidebar){
      sidebar.slidePos = window.getComputedStyle(sidebar).position;
      
      const delta = header.getBoundingClientRect().top + headerHeight;
      if (sidebar.slidePos == 'fixed')
        sidebar.style.paddingTop = delta >= 0 ? (delta + 'px') : '0px' ;
    });
  
    window.addEventListener('scroll', function() {
    
      slideSidebarPadding.forEach( sidebar => {
         if (sidebar.slidePos == 'fixed') {
          const delta = header.getBoundingClientRect().top + headerHeight;
          sidebar.style.paddingTop = delta >= 0 ? (delta + 'px') : '0px' ;
        }  
      });
    });
  
    window.addEventListener('resize', () => {
      resizeUpdate(slideSidebarPadding);
    });

    window.addEventListener('orientationchange', () => {
      resizeUpdate(slideSidebarPadding);
    });
  }

  function resizeUpdate(slideSidebarPadding) {
    slideSidebarPadding.forEach( sidebar => {
      sidebar.slidePos = window.getComputedStyle(sidebar).position;
      if ( sidebar.slidePos != 'fixed') {
        sidebar.style.paddingTop = '0px' ;
        sidebar.classList.remove('_open');
        unBlockOverflow();
      }
      else {
        delta = header.getBoundingClientRect().top + headerHeight;
        sidebar.style.paddingTop = delta >= 0 ? (delta + 'px') : '0px' ;
      }
    });
  }

}());