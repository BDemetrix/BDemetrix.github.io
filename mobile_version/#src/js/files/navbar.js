/**
 * Обработка событий "хлебных крошек" - блок .navbar
 * открывается .jBox с содержимым соответствующего меню из соседнего элемента .navbar__drop-menu-wrap
 */

new jBox('Tooltip', {
  attach: '.navbar__drop-item',
  zIndex: 999,
  adjustPosition: true,
  isolateScroll: false,
  closeOnMouseleave: true,
  animation: "move",
  addClass: 'navbar-jBox',
  //pointer: false,
  
  onOpen: function() {
    let content = this.target[0].nextElementSibling.innerHTML;
    this.setContent(content); 
  }
});