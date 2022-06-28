//BildSlider 
// рендер слайдера
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) {}

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}
//end BildSlider

// сдайдер ссылок
let selectorLinksSlider;
const selectorLinks = document.querySelector('.selector-links__list');
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


// слайдер "хлебные крошки"
let navbarBCSlider;
const navbarBC = document.querySelector('.navbar__list');
if (navbarBC) {
	navbarBC.parentElement.classList.remove('_loading');

	navbarBCSlider = new Swiper(navbarBC, {
		slidesPerView: 'auto',
		watchOverflow: true,
		freeMode: {
			enabled: true,
			sticky: true,
		},
		speed: 300,
		navigation: {
			nextEl: '.navbar__next',
			prevEl: '.navbar__prev',
		},
	});
}

window.addEventListener('resize', () => {
	if (selectorLinksSlider) {
		selectorLinksSlider.updateSize();
	}
});