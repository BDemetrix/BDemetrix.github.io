var loginPopUp = new ModalDialog({
  class: "login-popup",
  title: "Авторизация",
  content: `<form class="login__form" autocomplete="off" action="/login/" method="POST">
  <!-- Класс input-wrapper и custom-input - общая для всех страниц стилизация инпутов. Смотри README -->
  <div class="login__row input-wrapper input-wrapper--left">
    <input type="text" class="custom-input" placeholder="Логин или Email" />
    <svg width="20" height="20">
      <use xlink:href="images/icons/login/sprite.svg#user"></use>
    </svg>
  </div>
  <div class="login__row input-wrapper input-wrapper--left">
    <input type="password" class="custom-input" placeholder="Пароль" />
    <svg width="20" height="20">
      <use xlink:href="images/icons/login/sprite.svg#password"></use>
    </svg>
  </div>

  <div class="login__row">
    <label class="login__remember custom-checkbox">
      <input type="checkbox" class="custom-checkbox__input" checked="" />
      <span class="custom-checkbox__text">Запомнить</span>
    </label>
    <a href="/login/reminder/" class="login__remind">Напомнить пароль</a>
  </div>
  <button class="login__submit blue-btn" type="submit">Войти</button>
  <div class="login__row">
    <div class="login__to-registration">
      Нет аккаунта?
      <a href="/registration/">Зарегистрироваться</a>
    </div>
  </div>
  <div class="login__row social-login">
    <div class="social-login__title">Войти через:</div>
    <div class="social-login__btns">
      <a href="/" class="social-login__btn social-login__btn--vk">
        <svg width="26" height="14">
          <use xlink:href="images/icons/login/sprite.svg#vk"></use>
        </svg>
        ВК
      </a>
      <a href="/" class="social-login__btn social-login__btn--google">
        <svg width="31" height="30">
          <use xlink:href="images/icons/login/sprite.svg#google"></use>
        </svg>
      </a>
    </div>
  </div>
</form> `,

  onConfirm: function () {
    // сюда прилетает конфирм. он диалог не закрывает. его надо закрыть через this.close();
  },

  onOpen: function () {
    // здесь мы оказываемся когда диалог показывается. тут мы подключаем обработчики
  },

  onClose: function () {
    // здесь мы оказываемся после того как вызвали close и диалог исчез. тут мы удаляем все обработчики.
    unBlockOverflow();
  },
});

var moderationPopUp = new ModalDialog({
  class: "moderation-pop-up",
  title: "Модерация",
  content: `<div class="moderation-pop-up__left-col">
  <div class="moderation-pop-up__btns">
    <div class="moderation-pop-up__btns-row">
      <button
        class="moderation-pop-up__btn blue-btn blue-btn--not-selected"
        type="button"
      >
        Редактировать
      </button>
      <button
        class="moderation-pop-up__btn blue-btn blue-btn--not-selected"
        type="button"
      >
        Удалить
      </button>
    </div>
    <div class="moderation-pop-up__btns-row">
      <button class="moderation-pop-up__btn blue-btn" type="button">
        На главную
      </button>
      <button
        class="moderation-pop-up__btn blue-btn blue-btn--not-selected"
        type="button"
      >
        Убрать с&nbsp;главной
      </button>
    </div>
    <div class="moderation-pop-up__btns-row">
      <button
        class="moderation-pop-up__to-smm blue-btn blue-btn--not-selected"
        type="button"
      >
        В SMM
      </button>
    </div>
  </div>

  <div class="moderation-pop-up__spollers _spollers _one">
    <div class="moderation-pop-up__spollers-inner">
      <button
        class="moderation-pop-up__spoller moderation-pop-up__spoller--left blue-btn _spoller"
        type="button"
      >
        Оффтоп
        <svg width="19" height="18">
          <use xlink:href="images/icons/post-card/sprite.svg#shevron"></use>
        </svg>
      </button>
      <div class="moderation-pop-up__settings moderation-settings">
        <div class="moderation-settings__wrap">
          <div class="moderation-settings__inner">
            <div class="moderation-settings__row">
              <label class="moderation-settings__title">Автора:</label>

              <!-- 
                                            Кастомный селект .custom-select
                                            Атрибут name="#" есть только у главной кнопки, для реализации в рамках формы
                                            Обработчик в файле custom-select.js
                                            Стили в custom-select.scss
                                            Для открытия добавляется модификатор .custom-select--opened
                                         -->
              <div class="moderation-settings__col">
                <div class="custom-select">
                  <button
                    class="custom-select__main-btn"
                    value="Простить"
                    name="#"
                    type="button"
                  >
                    Простить
                  </button>
                  <div class="custom-select__list">
                    <button
                      class="custom-select__option custom-select__option--active"
                      value="Простить"
                      type="button"
                    >
                      Простить
                    </button>
                    <button
                      class="custom-select__option"
                      value="Предупредить"
                      type="button"
                    >
                      Предупредить
                    </button>
                    <button
                      class="custom-select__option"
                      value="Забанить"
                      type="button"
                    >
                      Забанить
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="moderation-settings__row">
              <label class="moderation-settings__title">Топик:</label>
              <div class="moderation-settings__col">
                <div class="custom-select">
                  <button
                    class="custom-select__main-btn"
                    value="В оффтоп"
                    name="#"
                    type="button"
                  >
                    В оффтоп
                  </button>
                  <div class="custom-select__list">
                    <button
                      class="custom-select__option custom-select__option--active"
                      value="В оффтоп"
                      type="button"
                    >
                      В оффтоп
                    </button>
                    <button
                      class="custom-select__option"
                      value="Значение 2"
                      type="button"
                    >
                      Значение 2
                    </button>
                    <button
                      class="custom-select__option"
                      value="Значение 3"
                      type="button"
                    >
                      Значение 3
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="moderation-settings__row">
              <label class="moderation-settings__title">Причина:</label>
              <div class="moderation-settings__col">
                <div class="custom-select">
                  <button
                    class="custom-select__main-btn"
                    value="Хамство"
                    name="#"
                    type="button"
                  >
                    Хамство
                  </button>
                  <div class="custom-select__list">
                    <button
                      class="custom-select__option custom-select__option--active"
                      value="Хамство"
                      type="button"
                    >
                      Хамство
                    </button>
                    <button
                      class="custom-select__option"
                      value="Причина 2"
                      type="button"
                    >
                      Причина 2
                    </button>
                    <button
                      class="custom-select__option"
                      value="Причина 3"
                      type="button"
                    >
                      Причина 3
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="moderation-settings__row">
              <label class="moderation-settings__title">Бан:</label>
              <div class="moderation-settings__col">
                <div class="custom-select">
                  <button
                    class="custom-select__main-btn"
                    value="2 дня"
                    name="#"
                    type="button"
                  >
                    2 дня
                  </button>
                  <div class="custom-select__list">
                    <button
                      class="custom-select__option custom-select__option--active"
                      value="2 дня"
                      type="button"
                    >
                      2 дня
                    </button>
                    <button
                      class="custom-select__option"
                      value="неделя"
                      type="button"
                    >
                      неделя
                    </button>
                    <button
                      class="custom-select__option"
                      value="месяц"
                      type="button"
                    >
                      месяц
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="moderation-settings__row">
              <label class="moderation-settings__title"></label>
              <div class="moderation-settings__col">
                <button
                  class="moderation-pop-up__save-setting blue-btn"
                  type="button"
                >
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="moderation-pop-up__spollers-inner">
      <button
        class="moderation-pop-up__spoller moderation-pop-up__spoller--rigth blue-btn _spoller"
        type="button"
      >
        SL.news
        <svg width="19" height="18">
          <use xlink:href="images/icons/post-card/sprite.svg#shevron"></use>
        </svg>
      </button>
      <div class="moderation-pop-up__settings moderation-settings">
        <div class="moderation-settings__wrap">
          <div class="moderation-settings__inner">
            <div class="moderation-settings__row">
              <label class="moderation-settings__title">Заголовок:</label>
              <textarea
                class="moderation-settings__heading custom-scrollbar js-textarea-auto-height"
                maxlength="300"
                type="text"
                name="#"
              >
Что интересного рассказал Потанин?</textarea
              >
            </div>
            <div class="moderation-settings__row">
              <div class="moderation-settings__check-row">
                <label class="custom-checkbox">
                  <input type="checkbox" class="custom-checkbox__input" />
                  <span class="custom-checkbox__text"
                    >Публикация в новостнике</span
                  >
                </label>
              </div>
              <div class="moderation-settings__check-row">
                <label class="custom-checkbox">
                  <input type="checkbox" class="custom-checkbox__input" />
                  <span class="custom-checkbox__text">Красной строкой</span>
                </label>
              </div>
            </div>
            <div class="moderation-settings__row">
              <div class="custom-select">
                <button
                  class="custom-select__main-btn"
                  value="Россия"
                  name="#"
                  type="button"
                >
                  Россия
                </button>
                <div class="custom-select__list">
                  <button
                    class="custom-select__option custom-select__option--active"
                    value="Россия"
                    type="button"
                  >
                    Россия
                  </button>
                  <button
                    class="custom-select__option"
                    value="США"
                    type="button"
                  >
                    США
                  </button>
                  <button
                    class="custom-select__option"
                    value="Евросоюз"
                    type="button"
                  >
                    Евросоюз
                  </button>
                </div>
              </div>
            </div>
            <div class="moderation-settings__row">
              <div class="custom-select">
                <button
                  class="custom-select__main-btn"
                  value="Новость"
                  name="#"
                  type="button"
                >
                  Новость
                </button>
                <div class="custom-select__list">
                  <button
                    class="custom-select__option custom-select__option--active"
                    value="Новость"
                    type="button"
                  >
                    Новость
                  </button>
                  <button
                    class="custom-select__option"
                    value="Обзор"
                    type="button"
                  >
                    Обзор
                  </button>
                  <button
                    class="custom-select__option"
                    value="Статья"
                    type="button"
                  >
                    Статья
                  </button>
                </div>
              </div>
            </div>
            <div class="moderation-settings__row">
              <button
                class="moderation-pop-up__save-setting moderation-pop-up__save-setting--wide blue-btn"
                type="button"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="moderation-pop-up__extra-tags">
    <div class="moderation-pop-up__title">Экстра-теги:</div>
    <div class="moderation-pop-up__extra-tags-inner">
      <!-- Модификатор .blue-btn--active  для выделения более темным цветом -->
      <div class="moderation-pop-up__tag">
        <button class="blue-btn" type="button">STK</button>
      </div>
      <div class="moderation-pop-up__tag">
        <button class="blue-btn blue-btn--not-selected" type="button">
          BND
        </button>
      </div>
      <div class="moderation-pop-up__tag">
        <button class="blue-btn" type="button">OPT</button>
      </div>
      <div class="moderation-pop-up__tag">
        <button class="blue-btn blue-btn--not-selected" type="button">
          ALG
        </button>
      </div>
      <div class="moderation-pop-up__tag">
        <button class="blue-btn blue-btn--not-selected" type="button">
          BNK
        </button>
      </div>
      <div class="moderation-pop-up__tag">
        <button class="blue-btn" type="button">BRK</button>
      </div>
      <div class="moderation-pop-up__tag">
        <button class="blue-btn" type="button">SFT</button>
      </div>
      <div class="moderation-pop-up__tag">
        <button class="blue-btn blue-btn--not-selected" type="button">
          TRD
        </button>
      </div>
      <div class="moderation-pop-up__tag">
        <button class="blue-btn blue-btn--not-selected" type="button">
          FX
        </button>
      </div>
      <div class="moderation-pop-up__tag">
        <button class="blue-btn blue-btn--not-selected" type="button">
          CRY
        </button>
      </div>
    </div>
  </div>
</div>

<div class="moderation-pop-up__column">
  <div class="moderation-pop-up__tags">
    <div class="moderation-pop-up__title">Tеги:</div>
    <div class="moderation-pop-up__tags-inner">
      <span class="post-tag post-tag--with-btn">
        инвесторам
        <button class="post-tag__btn" type="button"></button>
      </span>
      <span class="post-tag post-tag--with-btn">
        инвестиции
        <button class="post-tag__btn" type="button"></button>
      </span>
      <span class="post-tag post-tag--with-btn">
        дивиденды
        <button class="post-tag__btn" type="button"></button>
      </span>
    </div>
    <div class="moderation-pop-up__search-wrapper" id="tag-search-wrapper">
      <input
        type="text"
        class="moderation-pop-up__search search-field-with-icon"
        placeholder="Поиск"
        autocomplete="off"
      />
    </div>
    <div class="moderation-pop-up__tags-inner">
      <!-- Есть модификатор .post-label--active для выделения более темным цветом -->
      <span class="post-label post-label--with-btn">
        дивиденды
        <button class="post-label__btn" type="button"></button>
      </span>
      <span class="post-label post-label--not-selected">
        отчеты МСФО
        <button class="post-label__btn" type="button"></button>
      </span>
      <span class="post-label post-label--not-selected">
        отчеты РСБУ
        <button class="post-label__btn" type="button"></button>
      </span>
      <span class="post-label post-label--not-selected">
        операционные результаты
        <button class="post-label__btn" type="button"></button>
      </span>
      <span class="post-label post-label--not-selected">
        технический анализ
        <button class="post-label__btn" type="button"></button>
      </span>
      <span class="post-label post-label--not-selected">
        прогноз по акциям
        <button class="post-label__btn" type="button"></button>
      </span>
    </div>
  </div>
  <div class="moderation-pop-up__companies">
    <div class="moderation-pop-up__title">Привязать форум:</div>
    <div class="moderation-pop-up__search-wrapper" id="comp-search-wrapper">
      <input
        type="text"
        class="moderation-pop-up__search search-field-with-icon"
        placeholder="Поиск"
        autocomplete="off"
      />
    </div>
    <div class="moderation-pop-up__tags-inner">
      <span class="post-label post-label--with-btn">
        <svg width="14" height="14">
          <use xlink:href="images/icons/post-card/sprite.svg#mass"></use>
        </svg>
        ГМК Норникель
        <button class="post-label__btn" type="button"></button>
      </span>
      <span class="post-label post-label--with-btn">
        <svg width="14" height="14">
          <use xlink:href="images/icons/post-card/sprite.svg#mass"></use>
        </svg>
        Росбанк
        <button class="post-label__btn" type="button"></button>
      </span>
      <span class="post-label post-label--with-btn">
        <svg width="14" height="14">
          <use xlink:href="images/icons/post-card/sprite.svg#mass"></use>
        </svg>
        Северсталь
        <button class="post-label__btn" type="button"></button>
      </span>
    </div>
  </div>
</div>
`,

  onConfirm: function () {
    // сюда прилетает конфирм. он диалог не закрывает. его надо закрыть через this.close();
  },

  onOpen: function () {
    // здесь мы оказываемся когда диалог показывается. тут мы подключаем обработчики
    adminPanelInit(this.dialog);
  },

  onClose: function () {
    // здесь мы оказываемся после того как вызвали close и диалог исчез. тут мы удаляем все обработчики.
    unBlockOverflow();
  },
});

var premiumAdmin = new ConfirmDialog({
  class: "premium-popup",
  title: "Авторизация",
  content: `<!-- <div class="warning-popup__text">
  <label for="premium_amdin_user">Логин или EMail:</label>
  <div class="user_searchbox">
    <input
      id="premium_amdin_user"
      class="custom-input"
      type="text"
      name="user"
      autocomplete="off"
    />
    <input type="hidden" name="user_id" />
    <input id="premium_amdin_user_find" type="button" value="найти" />
  </div>
  <div class="user_searchbox_results">
    <div
      class="autocomplete-suggestions"
      style="
        position: absolute;
        display: none;
        max-height: 300px;
        z-index: 99999;
      "
    ></div>
  </div>
  <div>
    <div class="hider">Пользователь не найден</div>
    <div class="applyer">
      <table>
        <tbody>
          <tr>
            <td>ID:</td>
            <td id="user_id"></td>
          </tr>
          <tr>
            <td>Регистрация:</td>
            <td id="registration_dt"></td>
          </tr>
          <tr>
            <td>Активация:</td>
            <td id="activation_dt"></td>
          </tr>
          <tr>
            <td>Премиум до:</td>
            <td id="premium_until_dt"></td>
          </tr>
          <tr>
            <td style="vertical-align: top">Выдать премиум:</td>
            <td>
              <select id="premium_interval">
                <option value="">---</option>
                <option value="month">на месяц</option>
                <option value="half">на пол года</option>
                <option value="year">на год</option>
                <option value="date">точная дата</option>
                <option value="cancel">отменить подписку</option>
              </select>
              <span id="premium_until_dt_hider"
                >до
                <input
                  type="text"
                  class="custom-input"
                  name="premium_until_dt"
                />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div> -->

<div class="warning-popup__text">
  <label for="premium_amdin_user">Логин или EMail:</label>
  <div class="user_searchbox">
    <input
      id="premium_amdin_user"
      class="custom-input"
      type="text"
      name="user"
      autocomplete="off"
    />
    <input type="hidden" name="user_id" value="10525" />
    <input id="premium_amdin_user_find" type="button" value="найти" />
  </div>
  <div class="user_searchbox_results">
    <div
      class="autocomplete-suggestions"
      style="
        position: absolute;
        display: none;
        max-height: 300px;
        z-index: 99999;
      "
    ></div>
  </div>
  <div>
    <div class="hider" style="display: none">Пользователь не найден</div>
    <div class="applyer" style="display: block">
      <table>
        <tbody>
          <tr>
            <td>ID:</td>
            <td id="user_id"><a href="/profile/timmartynov/">10525</a></td>
          </tr>
          <tr>
            <td>Регистрация:</td>
            <td id="registration_dt">30.07.2012</td>
          </tr>
          <tr>
            <td>Активация:</td>
            <td id="activation_dt">30.07.2012</td>
          </tr>
          <tr>
            <td>Премиум до:</td>
            <td id="premium_until_dt" class="bad">Дата не задана</td>
          </tr>
          <tr>
            <td style="vertical-align: top">Выдать премиум:</td>
            <td>
              <select id="premium_interval">
                <option value="">---</option>
                <option value="month">на месяц</option>
                <option value="half">на пол года</option>
                <option value="year">на год</option>
                <option value="date">точная дата</option>
                <option value="cancel">отменить подписку</option>
              </select>
              <span id="premium_until_dt_hider" style="display: none"
                >до
                <input
                  type="text"
                  class="custom-input"
                  name="premium_until_dt"
                />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`,

  onConfirm: function () {
    // сюда прилетает конфирм. он диалог не закрывает. его надо закрыть через this.close();
    this.close();
  },

  onOpen: function () {
    // здесь мы оказываемся когда диалог показывается. тут мы подключаем обработчики
  },

  onClose: function () {
    // здесь мы оказываемся после того как вызвали close и диалог исчез. тут мы удаляем все обработчики.
    unBlockOverflow();
  },
});

$(document)
  .on("click", "#login_btn", function () {
    $(".header__usermenu").removeClass("_open");
    loginPopUp.open();
  })
  .on("click", "#premium-admin", function () {
    premiumAdmin.open();
  })
  .on("click", ".admin", function () {
    moderationPopUp.open();
  })
  .on("click", ".js-del-comment-warning-popup-opener", function () {
    Confirm(
      "Вы действительно хотите удалить комментарий?",
      "Внимание",
      "Удалить"
    );
  });

/* https://smart-lab.ru/mobile/topic/978956/ */

function adminPanelInit(nPanel) {
  console.log($("#tag-search-wrapper input"));
  initSpollers(nPanel.querySelectorAll("._spollers"));

  if (typeof IntersectionObserver === "function") {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          entry.target.scrollIntoView();
        }
      });
    });

    nPanel.addEventListener(
      "focus",
      function (e) {
        if (!e.target.matches("textarea, input")) return;

        setTimeout(() => {
          observer.observe(e.target);
        }, 100);
      },
      false
    );
  }

  nPanel.addEventListener(
    "click",
    function (e) {
      if (!e.target.matches("._spoller")) return;

      var inputs = nPanel.querySelectorAll(".js-textarea-auto-height");
      inputs.forEach((textarea) => {
        textarea.dispatchEvent(new Event("input"));
      });
    },
    false
  );

  nPanel.addEventListener(
    "keyup",
    (e) => {
      heightCorrection(e);
    },
    false
  );

  const popUpBody = document.querySelector(".moderation-pop-up__body");
  var bodyPaddingBottom = 0;
  if (popUpBody) {
    bodyPaddingBottom = +window
      .getComputedStyle(popUpBody)
      .paddingBottom.slice(0, -2);
  }

  function heightCorrection(e) {
    if (!e.target.matches(".moderation-pop-up__search")) return;

    const popUp = e.target.closest(".moderation-pop-up");
    const popUpBody = popUp.querySelector(".moderation-pop-up__body");

    popUpBody.style.height = popUp.scrollHeight + bodyPaddingBottom + "px";
    bodyPaddingBottom = 0;
  }

  // Автокомплит для ленты новостей moderation-pop-up__search
  nPanel = $(nPanel);
  let response = window.autocompleterResponse;
  let windowFeatures =
    "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,target=_blank";

  nPanel.find("#tag-search-wrapper input").autocomplete({
    lookup: response,
    appendTo: nPanel.find("#tag-search-wrapper"),
    maxHeight: "300",
    onSelect: function (suggestion) {
      window.open(suggestion.data, "WindowName", windowFeatures);
      this.value = "";
    },
    beforeRender: function (container, suggestions) {
      window.menuSlideDown(container);
    },
  });

  nPanel.find("#comp-search-wrapper input").autocomplete({
    lookup: response,
    appendTo: nPanel.find("#comp-search-wrapper"),
    maxHeight: "300",
    onSelect: function (suggestion) {
      window.open(suggestion.data, "WindowName", windowFeatures);
      this.value = "";
    },
    beforeRender: function (container, suggestions) {
      window.menuSlideDown(container);
    },
  });
}
