/**
 * Создает всплывающие увдобления при наведении (или клике) на таргет (целевой элемент)
 * Требуется подключения стилей js-tooltip.scss
 */
class Tooltips {
  constructor(options = {}) {
    this.attach = options.attach ?? ".smart-tooltip";         // селектор таргетов тултипа
    this.mobileAttach = options.mobileAttach;                 // селектор таргетов тултипа для тачскринов 
                                                              // если задан и устройство тачскрин, this.mobileAttach переопределяет this.аttach 
                                                              // чтобы отключить создание тултипа на мобильных (тачскринах) надо присвоить `{mobileAttach: 'none'}`
    this.openTrigger = options.openTrigger ?? "mouseenter";   // тригер показа тултипа
    this.closeTrigger = options.closeTrigger ?? "mouseleave"; // по умолчанию "mouseleave", если openTrigger !== "click"
    this.content = options.content ?? "title";                // контент тултипа (HTML) может быть задан при создании экземпляра класса

    this.beforeOpen = options.beforeOpen;                     // колбек вызывающийся перед открытием
    this.onOpen = options.onOpen;                             // колбек выполняется послле открытия тултипа
    this.onClose = options.onClose;                             // колбек выполняется послле закрытия тултипа

    this.contentSource = options.contentSource ?? null;       // селектор блока, содержимое которого надо перенести в тултип 
    this.setContent = options.setContent ?? null;             // асинхронный колбек для получения контента (удаленно)
    this.setContentOnce = options.setContentOnce ?? false;     // флаг единоразовой загрузки контента из колбека если объект наведения/клика не изменился
    this.popover = options.popover ?? false;                  // для того, чтоб тултип не закрывался при переводе курсора
                                                              // с таргета на него надо установить {popover: true}                   

    // Настройки отображения
    this.offset = options.offset ?? "";                       // отступ от таргета
    this.hasPointer = options.hasPointer ?? true;             // признак существования стрелочки (указателя)
    this.pointerSize = options.pointerSize ?? "";             // размер стрелочки (указателя)
    this.maxWidth = options.maxWidth ?? null;                 // максимальная ширина
    this.width = options.width ?? null;                       // ширина тултипа
                                                              // если задана, то this.posMod.x = 'center' принудительно, иначе возникают баги
    this.posMod = {};
    this.posMod.x = options.posMod?.x ?? "center";            // позиция по горизонтали x: left|left-auto|center|right|right-auto
    this.posMod.y = options.posMod?.y ?? "auto";              // позиция по вертикали y: above|under|auto|, auto по умолчанию
    this.hMargin = options.hMargin ?? 10;                     // оттступ тултипа от края экрана
    this.textAlign = options.textAlign ?? '';                 // выравнивание текста в 
    this.theme = options.theme;                               // суфикс к классу, для кастомизации css
    this.timeout = options.timeout ?? 500;                    // таймаут показа тултипа при наведении (только если this.openTrigger === "mouseenter";)
    this.closeTimeout = options.closeTimeout ?? 400;          // таймаут закрытия тултипа при потере курсора (только если this.closeTrigger === "mouseleave";)
    this.attachCursorXPos = options.attachCursorXPos ?? 1.3;  // если ширина таргета больше тултипа в attachCursorXPos раз, 
                                                              // то позиция тултипа привязывается к позиции курсора по горизонтали
    this.attachCursorYPos = options.attachCursorYPos ?? false;// привязать вертикальную координату к курсору мыши, координаты определяются в рамках таргета

    this.loader = options.loader ?? `<div class="spinner-loader spinner-loader--p0" role="status">
                                      <div class="spinner-loader__ring"></div>
                                      <span class="spinner-loader__label">Загружаем...</span>
                                    </div>`;

    // вспомогательные свойства, не требуют конфигурирования (не определяются пользователем)
    this.classMod = {};                                       // вспомогатольный объект для работы с модификаторами css
    // this.isOpen = false;                                      // признак открытого тултипа
    this.isFirstOpen = true;                                  // признак первого открытия (нужен для исправления бага)
    this.fetchedConntent = null;                              // контент загруженный колбеком this.setContent
    this.mouseEnterThis = false;                              // признак, что курсор был наведен (переведен с таргета) на тултип, 
                                                              // в этом случае тултип не закрвывается работает только при опции {popover: true} 
    this.isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
    
    this._init();
  }

  /**
   * Инициализация
   */
  _init() {
    // если тачскрин выходим или переопределяем this.attach  
    if (this.mobileAttach === 'none' && this.isTouch) {
      console.info(`Тултипы для селектора ${this.attach} на тачскринах отключены опцией {mobileAttach: 'none'}`);
      return;
    }
    else if(this.mobileAttach && this.isTouch) {
      this.attach = this.mobileAttach;
    }

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

    if (this.popover) {
      // Устанавливает флаг при наведении на тултип, чтоб он не закрывался
      this.el.addEventListener('mouseenter', e => {
        this.mouseEnterThis = true;
        this.parentTarget = this.target;
      }, false) 

      // закрывает тултип при снятии с него курсора
      this.el.addEventListener('mouseleave', e => {
        this.closeTimer = setTimeout(() => {
            this.mouseEnterThis = false;
            this.parentTarget = null;
            this.close();
        }, this.closeTimeout); 
      }, false) 
    }
    

    // закрывает тултип при клике на кнопку '.js-tooltip-close-btn'
    this.el.addEventListener('click', e => {
      if (e.target.closest('.js-tooltip-close-btn')) { 
        this.mouseEnterThis = false;
        this.close();
      }
    }, false) 

    // Если контент для тултипа уже загружен на страницу в виде html, переносим его в
    if (this.contentSource && typeof this.contentSource == "string") {
      const contentSourceEl = document.querySelector(this.contentSource);
      if (!contentSourceEl) {
        throw `По селектору ${this.contentSource} не найден блок для наполнения тултипа`;
      }
      this.contentSourceEl = contentSourceEl;
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

      target.addEventListener(this.openTrigger, (e) => {
        const closestTarget = e.target.closest(this.attach);
        // console.log(closestTarget);
        // Открытие по наведению
        if (e.type === "mouseenter") { 

          if(this.popover && this.parentTarget === closestTarget) {
            clearTimeout(this.closeTimer);
            this.parentTarget = null;
            this.mouseEnterThis = false;
            return;
          }

          this.openTimer = setTimeout(() => {
            this.open(closestTarget, e);
          }, this.timeout); 

          return;
        }

        // Если срабатывает не по наведению, то пауза не нужна
        this.prevTarget = this.target;
        this.mouseEnterThis = false;
        this.close();

        // Если предыдущий открытый тултип не равен текущему
        if (this.prevTarget != closestTarget) this.open(closestTarget, e);
        // this.target = closestTarget;
      }, false);

      // Тригер закрытия
      this.openTrigger === "click" ? (this.closeTrigger = "click") : null;
      if (this.closeTrigger === "mouseleave") {
        target.addEventListener(this.closeTrigger, (e) => { 
          if (!this.popover) {
            this.close();
            return;
          }
          this.closeTimer = setTimeout(() => {
            this.close();
          }, this.closeTimeout);
        }, false);
      }
      // Удаляем таймер при сведении курсора
      target.addEventListener('mouseleave', (e) => { 
        clearTimeout(this.openTimer);
      }, false);
    });

    // Если закрываем по клику вне тултипа
    if (this.closeTrigger !== "mouseleave" || this.popover) {
      const attach = this.attach;
      document.documentElement.addEventListener("click", (e) => {
        if (e.target.closest(attach) || e.target.closest(".js-tooltip")) return;
        this.mouseEnterThis = false;
        this.close();
      }, false);
    }

    // При изменении ширины экрана закрываем
    window.addEventListener("resize", () => {
      this.mouseEnterThis = false;
      // if (this.isOpen) 
      this.close();
    }, false);

    // Устанавливем свойства из "option"
    this._setProperty();
  }

  /**
   * Вызывает колбек (может быть асинхронным) перед открытием тултипа и возвращает его результат
   * если колбек отсутствует возвращает true
   * @param {Element} target - таргет на котором показывается тултип 
   * @param {Event} e - событие 
   * @returns 
   */
  async _beforeOpen(target, e) {
    if (!this.beforeOpen || typeof this.beforeOpen !== 'function') return true
    
    return await this.beforeOpen(target, e);
  }

  /**
   * Получает контент и порказывает tooltip
   * @param {Element} target - таргет на котором показывается тултип
   * @param {Event} e - событие
   */
  open(target, e) {
    this.mouseEnterThis = false;
    if ( !this._beforeOpen(target, e) ) return; 

    // console.log('open Tooltips');
    this.target = target;
    let content = "";

    // Если контент требует асинхронной загрузки с, здесь this.getContent - функция возвращающая HTML
    if (this.setContent && typeof this.setContent === "function") {
      content = `
      <div class="js-tooltip__content">${this.loader}</div>`;
      this._setContent(target);
    }
    // если контент передан в виде строки html
    else if (this.setContent && typeof this.setContent === 'string') {
      content = `<div class="js-tooltip__content">${this.setContent}</div>`;
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

    this._calcPos(target, e);
    this._modClasses();
    this.show();
    if (typeof this.onOpen === 'function') this.onOpen(target, e);
  }

  /**
   * Закрывает тултип
   */
  close() {
    if (this.mouseEnterThis) return;
    // console.log('close Tooltips')
    this.target = null;
    this.hide();
    this._clearPos();
    if (typeof this.onClose === 'function') this.onClose();
  }

  show() {
    this.el.classList.add("js-tooltip--shown");
    // setTimeout(() => {
    //   this.el.classList.add("js-tooltip--shown");
    // }, 10);
  }

  hide() {
    this.el.classList.remove("js-tooltip--shown");
    // setTimeout(() => {
    //   this.el.classList.remove("js-tooltip--shown");
    // }, 10);
  }

  /**
   * Получает контент асинхронно
   * @param {Node} target - пробрасываем событие, чтобы в колбеке получить доступ к атрибутам таргета (если нужны для запроса)
   * @returns null
   */
  async _setContent(target) { 
    if (!this.setContent || typeof this.setContent !== "function") return;
    if (!this.setContentOnce && this.prevTarget !== target) {
      
    }

    this.fetchedConntent = await this.setContent(target);
    // console.log(conntent);
    if (!this.fetchedConntent) return;
    this.mouseEnterThis = false;
    this.close();
    this.container.innerHTML = this.fetchedConntent;

    setTimeout(() => {
      this._calcPos(target);
      this._modClasses();
      this.show();
    }, 200);
  }

  /**
   * Вычисляет координаты
   * @param {Node} target - целевой элемент к которому привязывается тултип
   * @param {Event} e - пробрасываем событие для
   */
  _calcPos(target, e) {
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
    // Таргет шире тултипа
    const targetIsWider = (typeof this.attachCursorXPos === 'number') ? targetRect.width > width * this.attachCursorXPos: false ;

    if (targetIsWider) {
      this.posMod.x = 'cursor-x-pos-auto';
    }

    // сдвиг по вертикали 
    let yPosShiftFromTop = 0;
    let yPosShiftFromBottom = 0;
    if (this.attachCursorYPos) {
      // сдвиг от верха таргета
      yPosShiftFromTop = e.pageY - pageYOffset - targetRect.top;
      yPosShiftFromBottom = targetRect.bottom - (e.pageY - pageYOffset);
    }

    // inset: [top] [right] [bottom] [left];
    let top = "auto";
    let right = "auto";
    let bottom = "auto";
    let left = "auto";

    // vertical: above|under|auto
    const getAbove = () => {
      this.classMod.y = "above";
      return (top = Math.ceil(targetRect.top + yPosShiftFromTop - height + pageYOffset));
    };
    const getUnder = () => {
      this.classMod.y = "under";
      return (top = Math.ceil(targetRect.bottom - yPosShiftFromBottom + pageYOffset));
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

    // Позиционируем тултип по правому краю таргета
    var getRightToRightPos = (flag = "") => {
      left = "auto";

      // если позиция всегда по правой стороне, установлен режим "right-auto" и сонтейнер выходит за левую гараницу
      if (flag === "auto" && leftPos() < this.hMargin) {
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

    // Позиционируем тултип по левовому краю таргета
    var getLeftToLeftPos = (flag = "") => {
      right = "auto";

      // если позиция всегда по правой стороне, установлен режим "right-auto" и контейнер выходит за левую гараницу
      if (flag === "auto" && rightPos() > windowWidth - this.hMargin) {
        return getRightToRightPos();
      }

      // отступ от правого края
      if (targetRect.left + width > windowWidth - this.hMargin) {
        right = this.hMargin + "px";
      }

      // расчет позиции поинтера если таргет меньше тултипа
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

    // Если таргет шире тултипа, позиционирует по курсору
    const getHorizontalToCursorePos = () => {
      const cursorXPos = e.pageX;
      const d = width;

      if ( cursorXPos > targetRect.right - d) {
        left = targetRect.right - width;
      } else if (cursorXPos > targetRect.left + d) {
        left = cursorXPos - width/2;
      } else {
        left = targetRect.left;
      }
      
      return {left, right}
    }

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
      case "cursor-x-pos-auto":
        getHorizontalToCursorePos();
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

  _isMouseOverElement(event) {
    const rect = element.getBoundingClientRect();
    return (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    );
  }
  
}
