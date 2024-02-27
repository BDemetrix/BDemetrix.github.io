/**
 * Создает всплывающие увдобления при наведении (или клике) на таргет (целевой элемент)
 * Требуется подключения стилей js-tooltip.scss
 */
class Tooltips {
  constructor(options = {}) {
    this.attach = options.attach ?? ".smart-tooltip";         // селектор таргетов тултипа
    this.openTrigger = options.openTrigger ?? "mouseenter";   // тригер показа тултипа
    this.closeTrigger = options.closeTrigger ?? "mouseleave"; // по умолчанию "mouseleave", если openTrigger !== "click"
    this.content = options.content ?? "title";                // контент тултипа (HTML) может быть задан при создании экземпляра класса

    this.contentSource = options.contentSource ?? null;       // селектор блока, содержимое которого надо перенести в тултип 
    this.setContent = options.setContent ?? null;             // асинхронный колбек для получения контента (удаленно)

    // Настройки отображения
    this.offset = options.offset ?? "";                       // отступ от таргета
    this.hasPointer = options.hasPointer ?? true;             // признак существования стрелочки (указателя)
    this.pointerSize = options.pointerSize ?? "";             // размер стрелочки (указателя)
    this.maxWidth = options.maxWidth ?? null;                 // максимальная ширина
    this.width = options.width ?? null;                       // ширина, если задана, то this.posMod.x = 'center' принудительно, иначе возникают баги
    this.posMod = {};
    this.posMod.x = options.posMod?.x ?? "center";            // позиция по горизонтали x: left|left-auto|center|right|right-auto
    this.posMod.y = options.posMod?.y ?? "auto";              // позиция по вертикали y: above|under|auto, auto по умолчанию
    this.hMargin = options.hMargin ?? 10;                     // оттступ тултипа от края экрана
    this.textAlign = options.textAlign ?? '';                 // выравнивание текста в 
    this.theme = options.theme;                               // суфикс к классу, для кастомизации css

    // вспомогательные свойства, не пребуют конфигурирования
    this.classMod = {};                                       // вспомогатольный объект для работы с модификаторами css
    this.isOpen = false;                                      // признак открытого тултипа
    this.isFirstOpen = true;                                  // признак первого открытия (нужен для исправления бага)
    this.isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
    
    this._init();
  }

  /**
   * Инициализация
   */
  _init() {
    this.targets = document.querySelectorAll(this.attach);
    if (!this.targets.length)
      throw `Не найдены ноды по селектору ${this.attach}`;
    // console.warn(this.targets);

    // Создаем контейнер
    this.el = document.createElement("div");
    this.el.className = "js-tooltip";
    this.el.innerHTML =
      '<div class="js-tooltip__container"></div> <div class="js-tooltip__pointer js-tooltip__pointer--bottom"></div>';
    document.body.append(this.el);
    this.container = this.el.querySelector(".js-tooltip__container");
    this.pointer = this.el.querySelector(".js-tooltip__pointer");

    if(this.theme) {
      this.el.classList.add(`js-tooltip-${this.theme}`)
    }

    // Если контент для тултипа уже загружен на страницу, переносим его в
    if (this.contentSource && typeof this.contentSource == "string") {
      const contentSourceEl = document.querySelector(this.contentSource);
      if (!contentSourceEl) {
        throw `По селектору ${this.contentSource} не найден блок для наполнения тултипа`;
      }
      this.contentSourceEl = contentSourceEl;
      // this.container.innerHTML = "";
      // this.container.append(contentSourceEl);
    }

    // Если устройство тачскрин
    if (this.isTouch) {
      this.openTrigger = 'click';
    }
    // Устанавливаем обработчики
    this.targets.forEach((target) => {
      // Чистим/переносим атрибуты 'title'
      if (this.content === "title") {
        target.dataset[this.content] = target.getAttribute(this.content) ?? "";
        target.removeAttribute(this.content);

        this.maxWidth ??= 280;
        this.el.style.maxWidth = this.maxWidth + "px";
      }

      const that = this;
      target.addEventListener(this.openTrigger, (e) => {
        const target = e.target.closest(this.attach);
        if (e.type === "mouseenter") {
          this.open(target);
          return;
        }
        const prevTarget = this.target;
        this.close();

        if (prevTarget != target) this.open(target);
      });

      // Тригер закрытия
      this.openTrigger === "click" ? (this.closeTrigger = "click") : null;
      if (this.closeTrigger === "mouseleave") {
        target.addEventListener(this.closeTrigger, (e) => {
          this.close();
        });
      }
    });

    // Если закрываем по клику вне тултипа
    if (this.closeTrigger !== "mouseleave") {
      const attach = this.attach;
      document.documentElement.addEventListener("click", (e) => {
        if (e.target.closest(attach) || e.target.closest(".js-tooltip")) return;
        this.close();
      });
    }

    // При изменении ширины экрана закрываем
    window.addEventListener("resize", () => {
      if (this.isOpen) this.close();
    });

    // Устанавливем свойства из "option"
    this._setProperty();
  }

  /**
   * Получает контент и порказывает tooltip
   * @param {Event} e - пробрасываем событие для
   */
  open(target) {
    this.target = target;
    let content = "";

    // Если контент требует асинхронной загрузки с, здесь this.getContent - функция возвращающая HTML
    if (this.setContent && typeof this.setContent === "function") {
      content = `
      <div class="js-tooltip__content spinner-loader" role="status">
        <div class="spinner-loader__ring"></div>
        <span class="spinner-loader__label">Загружаем...</span>
      </div>`;
      this._setContent(target);
    }
    // если контент находится на странице и имеет слектор contentSource
    else if (this.contentSourceEl) {
      content = this.contentSourceEl.outerHTML;
    }
    // контент лежит в атрибуте 'title' - принимается по умолчанию
    else if (this.content === "title") {
      const data = target.dataset[this.content];
      data
        ? (content = `<div class="js-tooltip__content">${
            target.dataset[this.content]
          }</div>`)
        : null;
    }
    // Контент задан при создании экземпляра класса
    else if (this.content) {
      content = this.content;
    }

    if (!content) return;

    this.container.innerHTML = content;

    this._calcPos(target);
    this._modClasses();
    this.show();
  }

  close() {
    this.target = null;
    this.hide();
    this._clearPos();
  }

  show() {
    this.el.classList.add("js-tooltip--shown");
    setTimeout(() => {
      this.isOpen = true;
    }, 100);
  }

  hide() {
    this.el.classList.remove("js-tooltip--shown");
    setTimeout(() => {
      this.isOpen = false;
    }, 100);
  }

  /**
   * Получает контент асинхронно
   * @param {Node} target - пробрасываем событие, чтобы в колбеке получить доступ к атрибутам таргета (если нужны для запроса)
   * @returns null
   */
  async _setContent(target) {
    if (!this.setContent || typeof this.setContent !== "function") return;

    const conntent = await this.setContent(target);
    // console.log(conntent);
    if (!conntent) return;
    this.close();
    this.container.innerHTML = conntent;

    setTimeout(() => {
      this._calcPos(target);
      this._modClasses();
      this.show();
    }, 100);
  }

  /**
   * Вычисляет координаты
   * @param {Node} target - целевой элемент к которому привязывается тултип
   */
  _calcPos(target) {
    if (this.width) {
      // иначе баг
      this.posMod.x = "auto";
    }

    const windowWidth = document.documentElement.clientWidth;
    const targetRect = target.getBoundingClientRect();
    if (this.hasPointer) {
      this.pointer.style.left = "";
    }
    const pageYOffset = window.scrollY;
    let width = this.el.offsetWidth;
    let height = this.el.offsetHeight + (this.isFirstOpen ? this.offset : 0);
    this.isFirstOpen = false;
    // console.log({ width, height });
    // console.log(targetRect);

    // inset: [top] [right] [bottom] [left];
    let top = "auto";
    let right = "auto";
    let bottom = "auto";
    let left = "auto";

    // vertical: above|under|auto
    const getAbove = () => {
      this.classMod.y = "above";
      return (top = Math.ceil(targetRect.top - height + pageYOffset));
    };
    const getUnder = () => {
      this.classMod.y = "under";
      return (top = Math.ceil(targetRect.bottom + pageYOffset));
    };

    // Автоматическое позиционирование по вертикали
    (targetRect.top < height && this.posMod.y === "auto") ||
    this.posMod.y === "under"
      ? getUnder()
      : getAbove();

    // horisontal left|left-auto|center|right|right-auto

    /** Вычисляет левую позицию тултипа при позиционировании по центру таргета */
    const leftPos = () =>
      Math.ceil(targetRect.left - (width - targetRect.width) / 2);
    /** Вычисляет правую позицию тултипа при позиционировании по центру таргета */
    const rightPos = () => leftPos() + width;

    // Позиционируем по правому краю
    var getRightToRightPos = (auto = "") => {
      left = "auto";

      // если позиция всегда по правой стороне, установлен режим "right-auto" и сонтейнер выходит за левую гараницу
      if (auto === "auto" && leftPos() < this.hMargin) {
        return getLeftToLeftPos();
      }

      const lPos = rightPos();
      // отступ от левого края
      if (targetRect.right < width - this.hMargin) {
        left = this.hMargin;
      }

      if (this.hasPointer && width > targetRect.width) {
        setTimeout(() => {
          this.pointer.style.left =
            this.el.offsetWidth -
            (targetRect.width / 2 + this.pointerSize) +
            "px";
        }, 50);
      }

      return (right = windowWidth - targetRect.right);
    };

    // Позиционируем по левовому краю
    var getLeftToLeftPos = (auto = "") => {
      right = "auto";

      // если позиция всегда по правой стороне, установлен режим "right-auto" и сонтейнер выходит за левую гараницу
      if (auto === "auto" && rightPos() > windowWidth - this.hMargin) {
        return getRightToRightPos();
      }

      // отступ от правого края
      if (targetRect.left + width > windowWidth - this.hMargin) {
        right = this.hMargin + "px";
      }

      // расчет позиции поинтера
      if (this.hasPointer && width > targetRect.width) {
        setTimeout(() => {
          this.pointer.style.left =
            targetRect.width / 2 - this.pointerSize + "px";
        }, 50);
      }

      return (left = targetRect.left);
    };

    // Позиционируем по центру и если не помещается, позиционируем по правому/левому краю
    const getLeftToCenterPos = () => {
      right = "auto";
      const lPos = leftPos();

      if (rightPos() > windowWidth - this.hMargin) {
        return getRightToRightPos();
      } else if (lPos < this.hMargin) {
        return getLeftToLeftPos();
      }
      return (left = lPos);
    };

    switch (this.posMod.x) {
      case "left":
        getLeftToLeftPos();
        break;
      case "left-auto":
        getLeftToLeftPos("auto");
        break;
      case "right":
        getRightToRightPos();
        break;
      case "right-auto":
        getRightToRightPos("auto");
        break;
      default:
        getLeftToCenterPos();
        break;
    }

    this.el.style.top = typeof top === "string" ? top : top + "px";
    this.el.style.right = typeof right === "string" ? right : right + "px";
    this.el.style.bottom = typeof bottom === "string" ? bottom : bottom + "px";
    this.el.style.left = typeof left === "string" ? left : left + "px";
  }

  /**
   * Очищает позицию
   */
  _clearPos() {
    this.el.style.top = "";
    this.el.style.right = "";
    this.el.style.bottom = "";
    this.el.style.left = "";
  }

  /**
   * Обновляет модификаторы
   */
  _modClasses() {
    this.el.classList.remove(
      "js-tooltip--top",
      "js-tooltip--bottom"
      // "js-tooltip--right",
      // "js-tooltip--left"
    );
    this.pointer.classList.remove(
      "js-tooltip__pointer--top",
      "js-tooltip__pointer--bottom"
      // "js-tooltip__pointer--right",
      // "js-tooltip__pointer--left"
    );

    switch (this.classMod.y) {
      case "above":
        this.el.classList.add("js-tooltip--top");
        this.pointer.classList.add("js-tooltip__pointer--bottom");
        break;
      case "under":
        this.el.classList.add("js-tooltip--bottom");
        this.pointer.classList.add("js-tooltip__pointer--top");
        break;
      // задел на будущее
      // case "right":
      //   this.el.classList.add("js-tooltip--right");
      //   this.pointer.classList.add("js-tooltip__pointer--left");
      // case "left":
      //   this.el.classList.add("js-tooltip--left");
      //   this.pointer.classList.add("js-tooltip__pointer--right");
      //   break;

      default:
        break;
    }
  }

  /**
   * Устанавливем CSS свойства
   */
  _setProperty() {
    if (this.offset) {
      this.el.style.setProperty("--offset", this.offset);
    } else {
      this.offset =
        parseFloat(
          window.getComputedStyle(this.el).getPropertyValue("--offset")
        ) ?? 12;
    }

    if (!this.hasPointer) {
      this.pointer.style.display = "none";
    } else if (this.pointerSize) {
      this.el.style.setProperty("--pointer-size", this.pointerSize + "px");
    } else {
      this.pointerSize =
        parseFloat(
          window.getComputedStyle(this.el).getPropertyValue("--pointer-size")
        ) ?? "";
    }

    if (this.textAlign) this.el.style.textAlign = this.textAlign;

    if (this.maxWidth) {
      this.el.style.maxWidth =
        typeof this.maxWidth === "string"
          ? this.maxWidth
          : this.maxWidth + "px";
    }
    if (this.width) {
      this.el.style.width =
        typeof this.width === "string" ? this.width : this.width + "px";
    }
  }
}
