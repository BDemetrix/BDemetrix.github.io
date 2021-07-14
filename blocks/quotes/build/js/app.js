

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
let now = new Date();
let slideDate = document.querySelector('.slide-content__date');

slideDate.textContent = `${now.getDate()} ${(now.getMonth()) < 9 ? ('0' + (now.getMonth() + 1)) : (now.getMonth() + 1)} ${now.getFullYear()}`;

/**
 * по классу _tabs находятся все блоки, которые должны быть табами 
 * например в проэкте блок .slide-content__tabs-item
 */
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
  let tab = tabs[index];
  let tabs_items = tab.querySelectorAll("._tabs-item");
  let tabs_blocks = tab.querySelectorAll("._tabs-block");
  for (let index = 0; index < tabs_items.length; index++) {
    let tabs_item = tabs_items[index];
    tabs_item.addEventListener("click", function (e) {
      for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.classList.remove('_active');
        tabs_blocks[index].classList.remove('_active');
      }
      tabs_item.classList.add('_active');
      tabs_blocks[index].classList.add('_active');
      e.preventDefault();
    });
  }
}
//=================