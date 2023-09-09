(function () {
    // сдайдер ссылок в котировках
    const selectorLinks = document.querySelector('.selector-links__slider');
    if (!selectorLinks) return;

    const selectorItems = Array.from(selectorLinks.querySelectorAll('.selector-links__item'));
    const activeIndex = selectorItems.findIndex(item => item.classList.contains('._active'));

    selectorLinks.parentElement.classList.remove('_loading');
    const selectorLinksSlider = new Swiper(selectorLinks, {
        slidesPerView: 'auto',
        watchOverflow: true,
        observer: true,
        resizeObserver: true,
        freeMode: {
            enabled: true,
            //sticky: true,
        },
        speed: 300,
        navigation: {
            nextEl: '.selector-links__next',
            prevEl: '.selector-links__prev',
        },
    });


    /* window.addEventListener('resize', () => {
        if (selectorLinksSlider) {
            selectorLinksSlider.updateSize();
        }
    });
 */
    selectorLinksSlider.slideTo(activeIndex);

    selectorItems.forEach((item, i, arr) => {
        item.addEventListener('click', () => {
            arr.forEach(el => {
                el.classList.remove('_active')
            });
            item.classList.add('_active');
            selectorLinksSlider.slideTo(i);
            const a = item.querySelector('a');
            /* if (selectorLinksSlider.isLocked && a) {
                console.log('selectorLinksSlider.isLocked = ', selectorLinksSlider.isLocked)
                window.location = a.href;
            }; */
        })
    })


}());