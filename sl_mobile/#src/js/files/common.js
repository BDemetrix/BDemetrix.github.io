/**
 * Объект isMobile содержит результаты проверки типа и марки тачпада
 */
let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
/**
 * если устройство является тачпадом, body присваивается класс ._touch
 */
if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.remove("_touch");
}

const bodyGlobal = document.querySelector("body");
const scrollWidth = window.innerWidth - document.documentElement.clientWidth; // ширина скролл-бара окна
/**
 * функции для блокировки скролла при открытии модального окна
 */
function blockOverflow() {
  bodyGlobal.style.overflow = `hidden`;
  bodyGlobal.style.touchAction = `none`;
  if (!isMobile.any()) {
    bodyGlobal.style.paddingRight = scrollWidth + "px";
  }
}

/**
 * функции для разблокировки скролла при закрытии модального окна
 */
function unBlockOverflow(time = 400) {
  bodyGlobal.style.overflow = ``;
  bodyGlobal.style.touchAction = ``;
  bodyGlobal.style.paddingRight = ``;
  console.log("unBlockOverflow");
}

function toggleOverflow() {
  if (window.getComputedStyle(bodyGlobal).overflow != "hidden") blockOverflow();
  else unBlockOverflow();
}

//Spollers

/**
 * Инициализирует все блоки спойллеры
 * data-spoller-maxwidth - ширина экрана меньше которой работает спойлер
 * при клике на заголовок спойлера, заголовку присваивается/удаляется класс _active
 * если у блока спойлеров есть класс _one, то то он является аккордеоном
 */
function initSpollers(spollersArr) {
  const timeOut = 400;
  if (spollersArr.length) {
    spollersArr.forEach((spollersBlock) => {
      let spollersGo = true;
      const maxWidth = spollersBlock.dataset.spollerMaxwidth;
      const one = spollersBlock.classList.contains("_one");
      let spollerEl = spollersBlock.querySelectorAll("._spoller");
      if (spollerEl.length) {
        spollerEl.forEach((spoller, i, spollerArr) => {
          spoller.addEventListener("click", function () {
            if (spollersGo) {
              spollersGo = false;
              // Если ширина задана меньше и меньше заданной величины, клик не обрабатывается
              if (maxWidth && window.innerWidth > maxWidth) {
                return false;
              }
              // Если блоку спойлеров задан класс _one, то он является аккордеоном
              if (one) {
                spollerArr.forEach((el) => {
                  if (el != spoller) {
                    el.classList.remove("_active");
                    _slideUp(el.nextElementSibling, timeOut);
                  }
                });
              }
              spoller.classList.toggle("_active");
              _slideToggle(spoller.nextElementSibling, timeOut);

              setTimeout(function () {
                spollersGo = true;
              }, timeOut);
            }
          });
        });
      }
    });
  }
}

/**
 * Функция очистки стилей спойлеров при изменении ширины экрана
 */
function clearSpollersStyle() {
  let spollersArr = document.querySelectorAll("._spollers");
  if (spollersArr.length) {
    spollersArr.forEach((spollersBlock) => {
      const maxWidth = spollersBlock.dataset.spollerMaxwidth;
      if (maxWidth && window.innerWidth > maxWidth) {
        let spollerEl = spollersBlock.querySelectorAll("._spoller");
        if (spollerEl.length) {
          spollerEl.forEach((spoller) => {
            spoller.classList.remove("_active");
            spoller.nextElementSibling.style.display = ``;
          });
        }
      }
    });
  }
}

initSpollers(document.querySelectorAll("._spollers")); // инициализируем споллеры
window.addEventListener("resize", clearSpollersStyle);

//SlideToggle
/**
 * Функция сворачивает/разворачивает элемент
 * @param {Object} target - элемент DOM, который надо свернуть/развернуть
 * @param {Number} duration - длительность анимации
 */
let _slideUp = (target, duration = 500) => {
  target.style.transitionProperty = "height, margin, padding, opacity";
  target.style.transitionDuration = duration + "ms";
  target.style.height = target.offsetHeight + "px";
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.opacity = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("opacity");
    target.classList.remove("_slide");
  }, duration);
};
/**
 * Функция сворачивает/разворачивает элемент
 * @param {Object} target - элемент DOM, который надо свернуть/развернуть
 * @param {Number} duration - длительность анимации
 */
let _slideDown = (target, duration = 500) => {
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = "height, margin, padding, opacity";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.opacity = 1;
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("opacity");
    target.classList.remove("_slide");
  }, duration);
};
/**
 * Функция сворачивает/разворачивает элемент
 * @param {Object} target - элемент DOM, который надо свернуть/развернуть
 * @param {Number} duration - длительность анимации
 * @returns вызывает соответствующую условию функцию
 */
let _slideToggle = (target, duration = 500) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    if (window.getComputedStyle(target).display === "none") {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  }
};

// To connect the SimpleBar
/**
 * Функци подключает плагин SimpleBar для стилизации скролл-бара, в случае неудаче блоку задается стиль ovetflowY = 'auto'
 * @param {String || Object} selector - селектор блока, в котором требуется стилизация скролла
 */
function plugSimpleBar(selector) {
  let simpleBarEl;
  if (typeof selector === "string") {
    simpleBarEl = document.querySelector(selector);
  } else if (typeof selector === "object") {
    simpleBarEl = selector;
  } else return;

  if (simpleBarEl) {
    try {
      return new SimpleBar(simpleBarEl);
    } catch {
      simpleBarEl.style.ovetflowY = "auto";
    }
  }
}

/**
 * закрывает в все открытые меню и попапы, открытые
 */
function closeAllOpenedMenu() {
  const allMenu = document.querySelectorAll("._open");
  allMenu.forEach((menu) => menu.classList.remove("_open"));
}

/**
 * при клике на любую область документа, если эта область не находится внутри открытого меню,
 * то закрываются все окна
 */
document.documentElement.addEventListener("click", (e) => {
  // если не проверить, присоединен ли элемент в DOM, то при удалении элемента по клику
  // происходит автоматическое закрытие меню
  if (e.target.closest("body") && !e.target.closest("._open")) {
    closeAllOpenedMenu();
    unBlockOverflow();
  }
});

/**
 * навешиваем обработчик нажатия на каждый активный елемент (кнопку/иконку)
 * которому присвоен класс ._active-el
 * при нажатии закрываются все елементы открытые елементы, содержащие класс ._open
 */
let activeHeadersEls = document.querySelectorAll("._active-el");
activeHeadersEls.forEach((el) => {
  el.addEventListener("click", () => {
    if (!el.parentElement.classList.contains("_open")) {
      closeAllOpenedMenu();
    }
    el.parentElement.classList.toggle("_open");
  });
});

//=================

/**
 * Когда <input class="input"> в фокусе его родителю присваивается класс _focus
 */

let inputArr = document.querySelectorAll("._input");
if (inputArr.length) {
  inputArr.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("_focus");
    });
    input.addEventListener("blur", () => {
      input.parentElement.classList.remove("_focus");
    });
    input.addEventListener("change", () => {
      if (input.value) input.parentElement.classList.add("_filled");
      else input.parentElement.classList.remove("_filled");
    });
  });
}

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
        tabs_item.classList.remove("_active");
        tabs_blocks[index].classList.remove("_active");
      }
      tabs_item.classList.add("_active");
      tabs_blocks[index].classList.add("_active");
      e.preventDefault();
    });
  }
}

// Обработка событий для контекстного меню .context-menu
function contextMenuInit(reinit = false) {
  if (reinit) {
    document.documentElement.removeEventListener('click', contextMenuHendler);
    window.removeEventListener('resize', contextMenuResizeHendler);
  }

  const popUpMenu = document.querySelectorAll(".context-menu");
  if (popUpMenu.length) {
    document.documentElement.addEventListener(
      "click", contextMenuHendler,
      false
    );

    window.addEventListener("resize", contextMenuResizeHendler);
  }

  function contextMenuHendler(e) {
    let btn = e.target.closest(".context-menu > button, .context-menu > a");
    if (btn) {
      let menu = e.target.closest(".context-menu");
      if (menu) {
        if (!menu.classList.contains("_open")) closeAllOpenedMenu();
        popUpMenuCorrectPos(menu);
        menu.classList.toggle("_open");
      }
    } else {
      let popUpMenu = document.querySelector(".context-menu._open");
      if (popUpMenu) popUpMenu.classList.remove("_open");
    }
  }

  function contextMenuResizeHendler(e) {
    popUpMenu.forEach((menu) => {
      popUpMenuCleartPos(menu);
      popUpMenuCorrectPos(menu);
    });
  }
}

/**
 * если окно выходит за рамки окна браузера, корректируем позицию
 */
function popUpMenuCorrectPos(popUpMenu) {
  if (!popUpMenu) return;
  popUpMenuCleartPos(popUpMenu);

  const ul = popUpMenu.querySelector("ul");
  if (!ul) return;

  let menuPosLeft = popUpMenu.getBoundingClientRect().left;
  let menuPosRight = popUpMenu.getBoundingClientRect().right;
  let ulPosLeft = ul.getBoundingClientRect().left - 5;
  let ulPosRight =
    document.documentElement.clientWidth - ul.getBoundingClientRect().right - 5;

  if (ulPosLeft < 0) {
    if (
      document.documentElement.clientWidth - menuPosLeft - 5 >=
      ul.offsetWidth
    )
      ul.style.left = "0";
    else ul.style.right = ulPosLeft + "px";
  }

  if (ulPosRight < 0) {
    if (menuPosRight - 5 >= ul.offsetWidth) ul.style.right = "0";
    else ul.style.left = ulPosRight + "px";
  }
}

function popUpMenuCleartPos(popUpMenu) {
  const ul = popUpMenu.querySelector("ul");
  if (ul) ul.style.left = ul.style.right = "";
}

contextMenuInit();

// адаптивная высота textarea
document.documentElement.addEventListener(
  "input",
  function (e) {
    if (!e.target.matches(".js-textarea-auto-height")) return;
    e.target.style.height = "";
    e.target.style.height = e.target.scrollHeight + 2 + "px";
  },
  true
);

const textareaAutoHeight = document.querySelectorAll(
  ".js-textarea-auto-height"
);
textareaAutoHeight.forEach((textarea) => {
  if (textarea.getBoundingClientRect().height < textarea.scrollHeight) {
    textarea.style.height = textarea.scrollHeight + 2 + "px";
  }
});

window.addEventListener(
  "resize",
  function (e) {
    const textareaAutoHeight = document.querySelectorAll(
      ".js-textarea-auto-height"
    );
    textareaAutoHeight.forEach((textarea) => {
      textarea.dispatchEvent(new Event("input"));
    });
  },
  false
);

// фокус родителю поля ввода
const fieldFocus = document.querySelectorAll(".js-focus");
if (fieldFocus.length) {
  fieldFocus.forEach((field) => {
    field.addEventListener("focus", function () {
      this.parentElement.classList.add("_focus");
    });

    field.addEventListener("blur", function () {
      this.parentElement.classList.remove("_focus");
    });
  });
}

// Стрелка прокрутки вверх
let arrowToTop = document.querySelector(".arrow-to-top");
if (arrowToTop) {
  window.addEventListener("scroll", () => {
    arrowToTop.classList.toggle("arrow-to-top--visible", window.scrollY > 250);
  });

  arrowToTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

/**
 * Валиация ввода - только цифры
 * @param {event} event
 */
function numOnly(event) {
  if (
    event.keyCode == 46 ||
    event.keyCode == 8 ||
    event.keyCode == 9 ||
    event.keyCode == 27 ||
    event.keyCode == 13 ||
    // Разрешаем: Ctrl+A
    (event.keyCode == 65 && event.ctrlKey === true) ||
    // Разрешаем: home, end, влево, вправо
    (event.keyCode >= 35 && event.keyCode <= 39)
  ) {
    // Ничего не делаем
    return;
  } else {
    // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
    if (
      (event.keyCode < 48 || event.keyCode > 57) &&
      (event.keyCode < 96 || event.keyCode > 105)
    ) {
      event.preventDefault();
    }
  }
}

//=================
