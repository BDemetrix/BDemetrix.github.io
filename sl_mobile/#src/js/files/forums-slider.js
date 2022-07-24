const forumsSlider = new Swiper('.forums-slider', {
    speed: 400,
    autoplay: {
        delay: 3000,
    },
    loop: true,
    watchOverflow: true,
    observer: true,
    resizeObserver: true,
    spaceBetween: 20,
    breakpoints: {
        280: {
            slidesPerView: 3.5,
        },
        320: {
            slidesPerView: 4.5,
        },
        430: {
            slidesPerView: 5.5,
        },
        540: {
            slidesPerView: 6.5,
        },
        650: {
            slidesPerView: 7.5,
        },
        760: {
            slidesPerView: 8.5,
        },
    }
});