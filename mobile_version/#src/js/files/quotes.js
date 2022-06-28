let now = new Date();
let slideDate = document.querySelector('.slide-content__date');

slideDate.textContent = `${now.getDate()} ${(now.getMonth()) < 9 ? ('0' + (now.getMonth() + 1)) : (now.getMonth() + 1)} ${now.getFullYear()}`;

/**
 * создается слайдер из блока .categories-slider__body
 * Модификатор categories-slider__body--loading нужен на время загрузки скриптов
 */
let categoriesSlider;
const categoriesSliderBbody = document.querySelector('.categories-slider__body');
if (categoriesSliderBbody) {
    categoriesSliderBbody.classList.remove('categories-slider__body--loading');

    categoriesSlider = new Swiper(categoriesSliderBbody, {
        slidesPerView: 'auto',
        /* centeredSlides: true,
        centeredSlidesBounds: true, */
        spaceBetween: 25,
        /* freeMode: {
            enabled: true,
            sticky: true,
        }, */
        speed: 400,
        observer: true,
        resizeObserver: true,
        watchOverflow: true,
        mousewheel: {
            releaseOnEdges: true,
        }
    });
}


/**
 *  Модификатор categories - slider__body--loading нужен на время загрузки скриптов
 */
let contentSlider;
const contentSliderBbody = document.querySelector('.content-slider__body');
if (categoriesSliderBbody) {
    categoriesSliderBbody.classList.remove('content-slider__body--loading');

    contentSlider = new Swiper(contentSliderBbody, {
        thumbs: {
            swiper: categoriesSlider,
        },
        slidesPerView: 1,
        speed: 400,
        simulateTouch: false,
        observer: true,
        resizeObserver: true,
        watchOverflow: true,
    });
}