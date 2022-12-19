const selectorLinks = document.querySelector('.sections-box__swiper');

if (selectorLinks) {

    selectorLinks.parentElement.classList.remove('_loading');
    const sectionsItems = Array.from(selectorLinks.querySelectorAll('.sections-box__item'));
    const activeIndex = sectionsItems.findIndex(item => item.classList.contains('sections-box__item--active'));

    const selectorLinksSlider = new Swiper(selectorLinks, {
        slidesPerView: 'auto',
        watchOverflow: true,
        //observer: true,
        //resizeObserver: true,
        freeMode: {
            enabled: false,
            //sticky: true,
        },
        speed: 300,
        navigation: {
            nextEl: '.sections-box__next',
            prevEl: '.sections-box__prev',
        },
    });

    selectorLinksSlider.slideTo(activeIndex);

    sectionsItems.forEach((item, i, arr) => {
        item.addEventListener('click', () => {
            arr.forEach(el => {
                el.classList.remove('sections-box__item--active')
            });
            item.classList.add('sections-box__item--active');
            selectorLinksSlider.slideTo(i);
        })
    })
}