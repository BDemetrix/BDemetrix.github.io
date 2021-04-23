/* let boxInner = document.querySelectorAll('.box__inner');
if (boxInner) {

  boxInner.forEach( el => new SimpleBar(el))
} */
Array.prototype.forEach.call(
  document.querySelectorAll('.box__inner'),
  el => new SimpleBar(el)
);