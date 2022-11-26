"use strict";

var now = new Date();
var slideDate = document.querySelector('.slide-content__date');

if (slideDate) {
  slideDate.textContent = "".concat(now.getDate(), ".").concat(now.getMonth() < 9 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1, ".").concat(now.getFullYear());
}
/**
 * создается слайдер из блока .categories-slider__body
 * Модификатор categories-slider__body--loading нужен на время загрузки скриптов
 */


var categoriesSlider;
var categoriesSliderBbody = document.querySelector('.categories-slider__body');

if (categoriesSliderBbody) {
  categoriesSliderBbody.classList.remove('categories-slider__body--loading');
  categoriesSlider = new Swiper(categoriesSliderBbody, {
    slidesPerView: 'auto',
    //centeredSlides: true,
    //centeredSlidesBounds: true,
    spaceBetween: 32,

    /* freeMode: {
        enabled: true,
        sticky: true,
    }, */
    speed: 400,
    observer: true,
    resizeObserver: true,
    watchOverflow: true,
    mousewheel: {
      releaseOnEdges: true
    }
  });
}
/**
 *  Модификатор categories - slider__body--loading нужен на время загрузки скриптов
 */


var contentSlider;
var contentSliderBbody = document.querySelector('.content-slider__body');

if (categoriesSliderBbody) {
  categoriesSliderBbody.classList.remove('content-slider__body--loading');
  contentSlider = new Swiper(contentSliderBbody, {
    thumbs: {
      swiper: categoriesSlider
    },
    slidesPerView: 1,
    speed: 400,
    simulateTouch: true,
    observer: true,
    resizeObserver: true,
    watchOverflow: true
  });
}