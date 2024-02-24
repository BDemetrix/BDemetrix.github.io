class Tooltips {
  constructor(options = {}) {
    this.selector = options.selector ?? ".smart-tooltip";
    this.attach = options.attach ?? ".smart-tooltip";
    // this.target = options.target ?? 'mouse';
    this.openTrigger = options.openTrigger ?? "mouseenter"; // openopenTrigger: 'click',
    this.closeTrigger = options.closeTrigger ?? "mouseleave"; // openopenTrigger: 'click',
    this.content = options.content ?? "title";

    this.contentSource = options.contentSource ?? null; // селектор блока, содержимое которого надо перенести в тултип
    this.getContent = options.getContent ?? null; // солбек для получения контента

    // Настройки отображения
    this.offset = options.offset ?? "";
    this.hasPointer = options.hasPointer ?? true;
    this.pointerSize = options.pointerSize ?? "";
    this.maxWidth = options.maxWidth ?? null;
    this.width = options.width ?? "";
    this.posMod = {};
    this.posMod.x = options.posMod?.x ?? "center"; // x: left|center|right
    this.posMod.y = options.posMod?.y ?? "auto"; // y: above|under|auto
    this.classMod = {};

    this.isOpen = false;

    this._init();
  }

  _init() {
    this.targets = document.querySelectorAll(this.attach);
    if (!this.targets.length)
      throw `Не найдены ноды по селектору ${this.attach}`;

    console.warn(this.targets);

    // Создаем контейнер
    this.el = document.createElement("div");
    this.el.className = "js-tooltip";
    this.el.innerHTML =
      '<div class="js-tooltip__container"></div> <div class="js-tooltip__pointer js-tooltip__pointer--bottom"></div>';
    document.body.append(this.el);
    this.container = this.el.querySelector(".js-tooltip__container");
    this.pointer = this.el.querySelector(".js-tooltip__pointer");

    // Если контент для тултипа уже загружен на страницу
    if (this.contentSource && typeof this.contentSource == "string") {
      const contentSourceEl = document.querySelector(this.contentSource);
      if (contentSourceEl) {
        this.contentSourceEl = contentSourceEl;
        this.container.innerHTML = "";
        this.container.append(contentSourceEl);
      }
    }

    // Устанавливаем обработчики
    this.targets.forEach((target) => {
      // Чистим/переносим атрибуты 'title'
      if (this.content === "title") {
        target.dataset[this.content] = target.getAttribute(this.content);
        target.removeAttribute(this.content);

        this.maxWidth ??= 280;
        this.el.style.maxWidth = this.maxWidth + "px";
      }

      const that = this;
      target.addEventListener(this.openTrigger, (e) => {
        if (e.type === "mouseenter") {
          this.open(e.target);
          return;
        }

        const prevTarget = this.target
        this.close();

        if (prevTarget != e.target) this.open(e.target);

        setTimeout(() => {
          
        }, 10);
      });

      // Тригер закрытия
      this.openTrigger === "click" ? (this.closeTrigger = "click") : null;
      if (this.closeTrigger === "mouseleave") {
        target.addEventListener(this.closeTrigger, (e) => {
          this.close(e.target);
        });
      }
    });

    // Если закрываем по клику вне тултипа
    if (this.closeTrigger !== "mouseleave") {
      const attach = this.attach;
      document.documentElement.addEventListener("click", (e) => {
        if (e.target.closest(attach) || e.target.closest('.js-tooltip')) return;
        this.close();
      });
    }

    // Устанавливем свойства
    this._setProperty();

    // Фикс бага при первой отрисовке
    this.open(this.targets[0]);

    setTimeout(() => {
      this.close();
    }, 1);
  }

  /**
   * Получает контент и порказывает tooltip
   * @param {Event} e - пробрасываем событие для
   */
  open(target) {
    this.target = target;
    let content = "";
    // контент лежит в атрибуте 'title' - принимается по умолчанию
    if (this.content === "title") {
      content = `<div class="js-tooltip__content">${
        target.dataset[this.content]
      }</div>`;
    }
    // Контент задан при создании экземпляра класса
    else if (!this.content) {
      content = this.content;
    }
    // Если контент требует асинхронной загрузки с, здесь this.getContent - функция возвращающая HTML
    else if (!this.getContent && typeof this.getContent === "function") {
      content = `<div class="js-tooltip__content">Загрузка...</div>`;
      this._getContent(e);
    }
    // если контент находится на странице и имеет слектор contentSource
    else if (!this.contentSourceEl) {
      this.show();
      return;
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
   * @param {Event} e - пробрасываем событие, чтобы в колбеке получить доступ к атрибутам таргета (если нужны для запроса)
   * @returns null
   */
  async _getContent(target) {
    if (!this.getContent || typeof this.getContent !== "function") return;

    const conntent = await this.getContent(target);
    if (!conntent) this.container.innerHTML = conntent;
  }

  _calcPos(target) {
    const windowWidth = document.documentElement.clientWidth;
    const targetRect = target.getBoundingClientRect();
    if (this.hasPointer) {
      this.pointer.style.left = "";
    }
    let width = this.el.offsetWidth;
    let height = this.el.offsetHeight;
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
      return (top = Math.ceil(targetRect.top - height));
    };
    const getUnder = () => {
      this.classMod.y = "under";
      return (top = Math.ceil(targetRect.bottom));
    };

    (targetRect.top < height && this.posMod.y === "auto") ||
    this.posMod.y === "under"
      ? getUnder()
      : getAbove();

    // horisontal left|center|right

    const getRightToRightPos = () => {
      left = "auto";

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

    const getLeftToLeftPos = () => {
      right = "auto";

      if (this.hasPointer && width > targetRect.width) {
        this.pointer.style.left =
          targetRect.width / 2 - this.pointerSize + "px";
      }

      return (left = targetRect.left);
    };

    // если не помещается, позиционируем по правому/левому краю
    const getLeftToCenterPos = () => {
      right = "auto";

      let leftPos = Math.ceil(targetRect.left - (width - targetRect.width) / 2);
      const rightPos = leftPos + width;

      if (rightPos > windowWidth) {
        return getRightToRightPos();
      } else if (leftPos < 0) {
        return getLeftToLeftPos();
      }
      return (left = leftPos);
    };

    switch (this.posMod.x) {
      case "left":
        getLeftToLeftPos();
        break;
      case "right":
        getRightToRightPos();
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

  _verticalCalc() {}

  _modClasses() {
    this.el.classList.remove(
      "js-tooltip--top",
      "js-tooltip--right",
      "js-tooltip--bottom",
      "js-tooltip--left"
    );
    this.pointer.classList.remove(
      "js-tooltip__pointer--top",
      "js-tooltip__pointer--right",
      "js-tooltip__pointer--bottom",
      "js-tooltip__pointer--left"
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
   * Устанавливем свойства
   */
  _setProperty() {
    this.offset ? this.el.style.setProperty("--offset", this.offset) : null;

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

    this.maxWidth ? (this.el.style.maxWidth = this.maxWidth) : null;
    this.width ? (this.el.style.width = this.width) : null;
  }
}
