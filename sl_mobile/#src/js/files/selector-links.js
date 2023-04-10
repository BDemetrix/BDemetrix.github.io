(function () {
    // сдайдер ссылок
    let selectorLinksSlider;
    const selectorLinks = document.querySelector('.selector-links__slider');
    if (selectorLinks) {
        selectorLinks.parentElement.classList.remove('_loading');

        selectorLinksSlider = new Swiper(selectorLinks, {
            slidesPerView: 'auto',
            watchOverflow: true,
            freeMode: {
                enabled: true,
                sticky: true,
            },
            speed: 300,
            navigation: {
                nextEl: '.selector-links__next',
                prevEl: '.selector-links__prev',
            },
        });
    }
    
    window.addEventListener('resize', () => {
        if (selectorLinksSlider) {
            selectorLinksSlider.updateSize();
        }
    });
}());