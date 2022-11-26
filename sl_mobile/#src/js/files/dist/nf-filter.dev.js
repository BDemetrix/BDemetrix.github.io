"use strict";

(function () {
  var filterBtn = document.querySelector('.nf-filter__btn');
  var filterBody = document.querySelector('.nf-filter__body');
  if (!filterBtn || !filterBody) return;
  filterBtn.addEventListener('click', function () {
    _slideToggle(filterBody, 300);
  });
})();