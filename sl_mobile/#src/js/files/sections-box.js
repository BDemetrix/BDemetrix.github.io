
const selectorLinks = document.querySelector('.sections-box__swiper');
if (selectorLinks) {
    selectorLinks.parentElement.classList.remove('_loading');

    const selectorLinksSlider = new Swiper(selectorLinks, {
        slidesPerView: 'auto',
        watchOverflow: true,
        observer: true,
        resizeObserver: true,
        freeMode: {
            enabled: true,
            sticky: true,
        },
        speed: 300,
        navigation: {
            nextEl: '.sections-box__next',
            prevEl: '.sections-box__prev',
        },
    });
}