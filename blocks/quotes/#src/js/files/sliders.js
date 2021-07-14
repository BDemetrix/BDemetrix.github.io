

/**
 * создается слайдер из блока .categories-slider__body
 */
let categoriesSlider = new Swiper('.categories-slider__body', {
	slidesPerView: 'auto',
	centeredSlides: true,
	centeredSlidesBounds: true,
	watchOverflow: true,
	//spaceBetween: 25,
	freeMode: true,
	//freeModeSticky: true,
	speed: 400,
});

/* categoriesSlider.on('slideChange', function () {
	
	console.log(categoriesSlider.translate);
	if (categoriesSlider.realIndex == 0) {
		console.log(categoriesSlider.realIndex);
	}
}) */

let contentSlider = new Swiper('.content-slider__body', {
	thumbs: {
		swiper: categoriesSlider,
	},
	slidesPerView: 1,
	speed: 400,
	simulateTouch: false,
	observer: true,
});

window.addEventListener('resize', ()=> {
	if (categoriesSlider) {
		categoriesSlider.updateSize(); 
	}
	if (condition) {
		contentSlider.updateSize();
	}
});