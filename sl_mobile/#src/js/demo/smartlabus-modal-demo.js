var loginPopUp = new ModalDialog({
  class: "login-popup",
  title: "Авторизация",
  content: `@@include('../../_login-pop-up--smartlabus.html')`,

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
  content: `@@include('../../_moderation-pop-up--smartlabus.html')`,

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
  content: `@@include('../../_premium-admin--smartlabus.html')`,

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
