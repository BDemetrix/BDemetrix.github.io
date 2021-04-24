Array.prototype.forEach.call(
  document.querySelectorAll('.box__inner'),
  el => new SimpleBar(el)
);