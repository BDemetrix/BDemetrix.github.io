const sectionsBoxSlider = new Swiper('.sections-box', {
    speed: 400,
    slidesPerView: 'auto',
    watchOverflow: true,
    observer: true,
    resizeObserver: true,
});

const sectionsBoxSlidIndex = document.querySelector('.sections-box').dataset.active;
console.log({
    sectionsBoxSlidIndex
})

sectionsBoxSlider.activeIndex = sectionsBoxSlidIndex