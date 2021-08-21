(function () {
    
let sliders = document.querySelectorAll("._swiper");
if (sliders) {
	for (let e = 0; e < sliders.length; e++) {
		let l = sliders[e];
		if (!l.classList.contains("swiper-bild")) {
			let e = l.children;
			if (e)
				for (let l = 0; l < e.length; l++) {
					e[l].classList.add("swiper-slide")
				}
			let t = l.innerHTML,
				s = document.createElement("div");
			if (s.classList.add("swiper-wrapper"), s.innerHTML = t, l.innerHTML = "", l.appendChild(s), l.classList.add("swiper-bild"), l.classList.contains("_swiper_scroll")) {
				let e = document.createElement("div");
				e.classList.add("swiper-scrollbar"), l.appendChild(e)
			}
		}
		l.classList.contains("_gallery")
	}
	sliders_bild_callback()
}

function sliders_bild_callback(e) {}
let sliderScrollItems = document.querySelectorAll("._swiper_scroll");
if (sliderScrollItems.length > 0)
	for (let e = 0; e < sliderScrollItems.length; e++) {
		const l = sliderScrollItems[e],
			t = l.querySelector(".swiper-scrollbar");
		new Swiper(l, {
			direction: "vertical",
			slidesPerView: "auto",
			freeMode: !0,
			scrollbar: {
				el: t,
				draggable: !0,
				snapOnRelease: !1
			},
			mousewheel: {
				releaseOnEdges: !0
			}
		}).scrollbar.updateSize()
	}

function sliders_bild_callback(e) {}
let categoriesSlider = new Swiper(".categories-slider__body", {
		slidesPerView: "auto",
		centeredSlides: !0,
		centeredSlidesBounds: !0,
		watchOverflow: !0,
		speed: 400
	}),
	contentSlider = new Swiper(".content-slider__body", {
		thumbs: {
			swiper: categoriesSlider
		},
		slidesPerView: 1,
		speed: 400,
		simulateTouch: !1
	});

window.addEventListener("resize", () => {
  if (categoriesSlider)
	  categoriesSlider.updateSize();
  if (contentSlider)
    contentSlider.updateSize();
});

let now = new Date,
	slideDate = document.querySelector(".slide-content__date");
slideDate.textContent = `${now.getDate()} ${now.getMonth()<9?"0"+(now.getMonth()+1):now.getMonth()+1} ${now.getFullYear()}`;
let tabs = document.querySelectorAll("._tabs");
for (let e = 0; e < tabs.length; e++) {
	let l = tabs[e],
		t = l.querySelectorAll("._tabs-item"),
		s = l.querySelectorAll("._tabs-block");
	for (let e = 0; e < t.length; e++) {
		let l = t[e];
		l.addEventListener("click", (function (i) {
			for (let e = 0; e < t.length; e++) {
				t[e].classList.remove("_active"), s[e].classList.remove("_active")
			}
			l.classList.add("_active"), s[e].classList.add("_active"), i.preventDefault()
		}))
	}
}

 }());
