/**
 * demo.js предназначен исключительно для демонстрации некоторых свойств вёрстки
 */
@@include('../files/lower-banner.js', {});

(function () {

  // Костыль для проверки темной темы
  if (location.search.match('dark-theme')) document.body.classList.add('dark-theme');

  // jQuary Header search  ==========
  /**
   * код обрабатывает автозаполнение поискового инпута, используется плагин jQuery autocompleter
   */
  let response = [{
      "data": "https://smart-lab.ru/forum/%D0%90%D0%9E%20%C2%AB%D0%90%D1%82%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9%20%D1%8D%D0%BD%D0%B5%D1%80%D0%B3%D0%BE%D0%BF%D1%80%D0%BE%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81%C2%BB%20%28%D0%90%D1%82%D0%BE%D0%BC%D1%8D%D0%BD%D0%B5%D1%80%D0%B3%D0%BE%D0%BF%D1%80%D0%BE%D0%BC%29",
      "value": "АО «Атомный энергопромышленный комплекс» (Атомэнергопром)",
      "hilite": true
    },
    {
      "data": "https://smart-lab.ru/bonds/Shevchenko",
      "value": "АО Им. Т.Г. Шевченко [обл]"
    },
    {
      "data": "https://smart-lab.ru/bonds/maximatelecom",
      "value": "АО \"МаксимаТелеком\" [обл]"
    },
    {
      "data": "https://smart-lab.ru/bonds/AO_Trud",
      "value": "АО Труд [обл]"
    },
    {
      "data": "https://smart-lab.ru/brokers-rating/%D0%90%D0%9E%20%D0%98%D0%9A%20%22%D0%A4%D0%BE%D0%BD%D0%B4%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%9A%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BB%22",
      "value": "АО ИК \"Фондовый Капитал\" [brk]"
    },
    {
      "data": "https://smart-lab.ru/bonds/I-TECO",
      "value": "Ай-Теко [обл]"
    },
    {
      "data": "https://smart-lab.ru/trading/%D0%90%D0%9E%20%22%D0%97%D0%B0%D0%B2%D0%BE%D0%B4%20%D0%9A%D0%BE%D0%BF%D0%B8%D1%80%22",
      "value": "АО \"Завод Копир\" [trd]"
    },
    {
      "data": "https://smart-lab.ru/bonds/AO-IA-VTB-2014",
      "value": "АО ИА ВТБ 2014 [обл]"
    },
    {
      "data": "https://smart-lab.ru/trading/%D0%90%20%D0%BD%D0%B5%20%D0%BF%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%2C%20%D0%B5%D1%81%D1%82%D1%8C%20%D0%BB%D0%B8%20%D0%B3%D0%B4%D0%B5-%D0%BD%D0%B8%D0%B1%D1%83%D0%B4%D1%8C%20%D0%B0%D1%80%D1%85%D0%B8%D0%B2%20%D0%BF%D1%80%D0%BE%D1%88%D0%B5%D0%B4%D1%88%D0%B8%D1%85%20%D1%84%D1%8C%D1%8E%D1%87%D0%B5%D1%80%D1%81%D0%BE%D0%B2%20%D0%BD%D0%B0%20%D0%9C%D0%9C%D0%92%D0%91.",
      "value": "А не подскажите, есть ли где-нибудь архив прошедших фьючерсов на ММВБ. [trd]"
    },
    {
      "data": "https://smart-lab.ru/crypto/trading%2C%20crypto%20fund%2C%20exchanges%20-%D1%87%D1%83%D0%B6%D0%BE%D0%B5%20%D0%BD%D0%B5%20%D0%BC%D0%BE%D1%91%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BD%D0%BE%D0%B5%2C%20%D0%BE%D1%82%20%D0%90.%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%2C%20%D0%90.%D0%A0%D0%B0%D0%B4%D1%87%D0%B5%D0%BD%D0%BA%D0%BE%20%D0%B8%20%D0%9C.%D0%96%D1%83%D1%85%D0%BE%D0%B2%D0%B8%D1%86%D0%BA%D0%BE%D0%B3%D0%BE",
      "value": "trading, crypto fund, exchanges -чужое не моё, интересное, от А.Антонова, А.Радченко и М.Жуховицкого [cry]"
    }, {
      "data": "https://smart-lab.ru/bonds/I-TECO",
      "value": "Ай-Теко [обл]"
    }, {
      "data": "https://smart-lab.ru/trading/%D0%90%D0%9E%20%22%D0%97%D0%B0%D0%B2%D0%BE%D0%B4%20%D0%9A%D0%BE%D0%BF%D0%B8%D1%80%22",
      "value": "АО \"Завод Копир\" [trd]"
    }, {
      "data": "https://smart-lab.ru/bonds/AO-IA-VTB-2014",
      "value": "АО ИА ВТБ 2014 [обл]"
    },
  ];

  window.autocompleterResponse = response;
  var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,target=_blank";

  // Автокомплит для хедера
  $('.query-search__input').autocomplete({
    lookup: response,
    appendTo: '.query-search__suggestions',
    maxHeight: 'auto',
    //autoSelectFirst: true,
    onSelect: function (suggestion) {
      window.open(suggestion.data, "WindowName", windowFeatures);
      this.value = '';
    },
    beforeRender: function (container, suggestions) {
      $.each(suggestions, function (i, v) {
        if (('hilite' in v) && (v['hilite'])) {
          container.find('.query-search__suggestions .autocomplete-suggestion[data-index="' + i + '"]').addClass('hilite');
        }
      });
    },
  });

  // подключаем плагин для кастомного скролла
  //plugSimpleBar('.query-search__suggestions');

  function menuSlideDown(container) {
    container.css({
      top: '100%',
      opacity: 0
    });
    setTimeout(() => {
      container.css({
        top: '',
        opacity: ''
      });
    }, 10);
  }

  window.menuSlideDown = menuSlideDown;

  // Автокомплит для ленты новостей nf-filter__search-wrap
  $('#nf-filter-search').autocomplete({
    lookup: response,
    appendTo: '.nf-filter__search-wrap',
    maxHeight: 'auto',
    onSelect: function (suggestion) {
      window.open(suggestion.data, "WindowName", windowFeatures);
      this.value = '';
    },
    beforeRender: function (container, suggestions) {
      menuSlideDown(container);
    },
  });

  $('.search-block__input').autocomplete({
    lookup: response,
    appendTo: '.search-block__form',
    maxHeight: 'auto',
    onSelect: function (suggestion) {
      window.open(suggestion.data, "WindowName", windowFeatures);
      this.value = '';
    },
    beforeRender: function (container, suggestions) {
      menuSlideDown(container);
    },











    
  });





  var nContent = $('.notify');
  nContent.on('click', '.notify__nav-item', function () {
    var nTab = $(this);
    var sTab = nTab.attr('tab');
    var nTabs = nContent.find('.notify__nav');
    if (nTabs.length) {
      var nActiveTab = nTabs.find('.notify__nav-item._active');
      if (nActiveTab.attr('tab') === nTab.attr('tab')) return;
      nActiveTab.removeClass('_active').addClass('_empty');
      //setGlobalCounter(nPopup.options.globalCounter);
      nTab.addClass('_active');
      nContent.find('.notify__block').removeClass('_active');
      nContent.find('.notify__block[id="' + sTab + '"]').addClass('_active');
    }
  });





  const forumPopUpItem = document.querySelectorAll('.forum-pop-up--subscribe .forum-pop-up__item');
  if (forumPopUpItem.length) {
    forumPopUpItem.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('_selected');
      });
    });
  }


  const commentWriteBox = document.querySelector('.comment__write-box');
  const commentTextarea = document.querySelector('.comment__textarea');
  const commentSelectImg = document.querySelector('.comment__select-img');
  const commentWriteImages = document.querySelector('.comment__write-images');

  if (commentWriteBox && commentTextarea) {

    commentTextarea.addEventListener('focus', () => {
      commentWriteBox.classList.add('_open');
    });


    if (commentSelectImg && commentWriteImages) {
      commentSelectImg.addEventListener('click', () => {
        _slideToggle(commentWriteImages, 300);
      });
    }
  }


  new jBox('Confirm', {
    attach: '#new-watchlist',
    title: 'Hurray!',
    content: 'This is my modal window'
  });


}());


// Демонстрация системных сообщений
const systemMessagesBox = document.querySelector('.system-messages'); // system-messages__item--visible
if (systemMessagesBox) {
  const items = systemMessagesBox.querySelectorAll('.system-messages__item');

  let timeout;
  let i;
  let height;
  let msgInterval;

  if (items.length) {
    msgInterval = setInterval(() => {
      timeout = 4000 + Math.floor(Math.random() * 3000);
      i = Math.floor(Math.random() * items.length);
      height = items[i].querySelector('.system-messages__item-inner').offsetHeight + 'px';

      items[i].style.height = height;
      items[i].classList.add('system-messages__item--visible');

      setTimeout(() => {
        items[i].style.height = '';
        items[i].classList.remove('system-messages__item--visible')
      }, timeout);
    }, 3500);
  }

  setTimeout(() => {
    clearInterval(msgInterval);
  }, 30000);
}


$('.datepicker').datepicker({
  format: 'dd.mm.yyyy',
});


// Находит элементы с заданным свойством
/* const all = document.querySelectorAll('*');
all.forEach(el => {
  if (window.getComputedStyle(el).overflow === 'hidden' && el.closest('.news-feed__section')) {
    console.log(el)
  }
}) */


// document.querySelectorAll('.comments__show-answers').forEach( el => {
//   el.addEventListener('click', e => {
//     // const closest = el.closest('.comments__item');
//     // console.log(closest);
//     el.closest('.comments__item')?.querySelector('.comments__answers')?.classList.remove('comments__answers--hidden');
//     el.remove();
//   });
// })


document.querySelectorAll('.comments__list').forEach( el => {
  el.addEventListener('click', e => {

    const showAnswers = e.target.closest('.comments__show-answers');
    if (!showAnswers) return;

    showAnswers.closest('.comments__item')?.querySelector('.comments__answers')?.classList.remove('comments__answers--hidden');
    showAnswers.remove();
  });
})


const commentsForAdjacentHTML = `
        <li class="comments__item">
            <div class="comments__content comments__content--self comments__content--new">
                <div class="comments__person person">
                    <a href="#" class="person__avatar-link" title="Перейти к профилю Виктор Петров">
                        <!-- Если картинки нет (img отсутствует), то виден фон елемената .person__avatar-link -->
                        <img src="./images/icons/comments/user.jpg" alt="Фото" class="person__avatar">
                    </a>
                    <div class="person__info">
                        <div class="person__name">
                            <a href="#" class="person__name-link" title="Перейти к профилю Виктор Петров">
                                Виктор Петров
                            </a>
                            <div class="person__label">
                                <svg width="14" height="14">
                                    <use xlink:href="images/icons/comments/sprite.svg#star"></use>
                                </svg>
                            </div>
                        </div>
                        <div class="person__date">
                            сегоддня в 13:33
                        </div>
                    </div>
                    <div class="person__menu context-menu">
                        <button class="context-menu__btn">
                            <svg class="context-menu__svg" height="20" width="20">
                                <use xlink:href="images/icons/user-info/sprite.svg#more"></use>
                            </svg>
                        </button>
                        <ul class="context-menu__list">
                            <li><button class="context-menu__item">Копировать URL</button></li>
                            <li><button class="context-menu__item">Копировать текст</button></li>
                            <li><button class="context-menu__item">Пожаловться</button></li>
                        </ul>
                    </div>
                </div>
                <div class="comments__text">
                    <p>
                        Агрохолдинг «Степь» расширяет продуктовую линейку и запускает новое
                        направление
                        бизнеса — производство муки. Выпуск муки
                        высшего и первого сортов начался на производственных площадках компании в городе Сальске
                        Ростовской
                        области
                    </p>
                    <p>
                        Выпуск муки
                        высшего и первого сортов начался на производственных площадках компании в городе Сальске
                        Ростовской
                        области
                    </p>
                </div>
                <div class="comments__actions">
                    <button class="comments__reply" title="Ответить" type="button">
                        <svg width="20" height="17">
                            <use xlink:href="images/icons/comments/sprite.svg#reply-arrow"></use>
                        </svg>
                    </button>
                    <button class="comments__like" type="button" title="Поставить лайк">
                        <svg width="20" height="19">
                            <use xlink:href="images/icons/comments/sprite.svg#like"></use>
                        </svg>
                    </button>
                    <a href="#" class="comments__fan" rel="nofollow" title="Трейдеры, которые оценили комментарий">3</a>
                    <button class="comments__dislike" type="button" title="Поставить дизлайк">
                        <svg width="20" height="19">
                            <use xlink:href="images/icons/comments/sprite.svg#dislike"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <button class="comments__show-answers">
                <span>Показать 76 ответов</span>
            </button>
            <ul class="comments__answers  comments__answers--hidden">
                <li class="comments__item">
                    <div class="comments__content">
                        <div class="comments__person person">
                            <a href="#" class="person__avatar-link" title="Перейти к профилю Виктор Петров">
                                <img src="./images/icons/comments/user.jpg" alt="Фото" class="person__avatar">
                            </a>
                            <div class="person__info">
                                <div class="person__name">
                                    <a href="#" class="person__name-link" title="Перейти к профилю Виктор Петров">
                                        Виктор Петров
                                    </a>
                                    <div class="person__label">
                                        <svg width="14" height="14">
                                            <use xlink:href="images/icons/comments/sprite.svg#popular"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="person__date">
                                    сегоддня в 13:33
                                </div>
                            </div>
                            <div class="person__menu context-menu">
                                <button class="context-menu__btn">
                                    <svg class="context-menu__svg" height="20" width="20">
                                        <use xlink:href="images/icons/user-info/sprite.svg#more"></use>
                                    </svg>
                                </button>
                                <ul class="context-menu__list">
                                    <li><button class="context-menu__item">Копировать URL</button></li>
                                    <li><button class="context-menu__item">Копировать текст</button></li>
                                    <li><button class="context-menu__item">Пожаловться</button></li>
                                </ul>
                            </div>
                        </div>
                        <div class="comments__text">
                            <blockquote>
                                Текст цитаты из поста, который надо в комментариях тоже выделять
                            </blockquote>
                            
                            новое направление бизнеса — производство муки. Выпуск муки
                            высшего и первого сортов начался на производственных площадках компании в городе Сальске
                            Ростовской
                            области</div>
                        <div class="comments__actions">
                            <button class="comments__reply" title="Ответить" type="button">
                                <svg width="20" height="17">
                                    <use xlink:href="images/icons/comments/sprite.svg#reply-arrow"></use>
                                </svg>
                            </button>
                            <button class="comments__like" type="button" title="Поставить лайк">
                                <svg width="20" height="19">
                                    <use xlink:href="images/icons/comments/sprite.svg#like"></use>
                                </svg>
                            </button>
                            <a href="#" class="comments__fan" rel="nofollow"
                                title="Трейдеры, которые оценили комментарий">3</a>
                            <button class="comments__dislike" type="button" title="Поставить дизлайк">
                                <svg width="20" height="19">
                                    <use xlink:href="images/icons/comments/sprite.svg#dislike"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </li>
                <li class="comments__item">
                    <div class="comments__content">
                        <div class="comments__person person">
                            <a href="#" class="person__avatar-link" title="Перейти к профилю Виктор Петров">
                                <!-- <img src="./images/icons/comments/user.jpg" alt="Фото" class="person__avatar"> -->
                            </a>
                            <div class="person__info">
                                <div class="person__name">
                                    <a href="#" class="person__name-link" title="Перейти к профилю Виктор Петров">
                                        Виктор Петров
                                    </a>
                                    <div class="person__label">
                                        <svg width="14" height="14">
                                            <use xlink:href="images/icons/comments/sprite.svg#popular"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="person__date">
                                    сегоддня в 13:33
                                </div>
                            </div>
                            <div class="person__menu context-menu">
                                <button class="context-menu__btn">
                                    <svg class="context-menu__svg" height="20" width="20">
                                        <use xlink:href="images/icons/user-info/sprite.svg#more"></use>
                                    </svg>
                                </button>
                                <ul class="context-menu__list">
                                    <li><button class="context-menu__item">Копировать URL</button></li>
                                    <li><button class="context-menu__item">Копировать текст</button></li>
                                    <li><button class="context-menu__item">Пожаловться</button></li>
                                </ul>
                            </div>
                        </div>
                        <div class="comments__text">новое направление бизнеса — производство муки. Выпуск муки
                            высшего и первого сортов начался на производственных площадках компании в городе Сальске
                            Ростовской
                            области
                        </div>
                        <div class="comments__actions">
                            <button class="comments__reply" title="Ответить" type="button">
                                <svg width="20" height="17">
                                    <use xlink:href="images/icons/comments/sprite.svg#reply-arrow"></use>
                                </svg>
                            </button>
                            <button class="comments__like" type="button" title="Поставить лайк">
                                <svg width="20" height="19">
                                    <use xlink:href="images/icons/comments/sprite.svg#like"></use>
                                </svg>
                            </button>
                            <a href="#" class="comments__fan" rel="nofollow"
                                title="Трейдеры, которые оценили комментарий">3</a>
                            <button class="comments__dislike" type="button" title="Поставить дизлайк">
                                <svg width="20" height="19">
                                    <use xlink:href="images/icons/comments/sprite.svg#dislike"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
        <li class="comments__item">
            <div class="comments__content">
                <div class="comments__person person">
                    <a href="#" class="person__avatar-link" title="Перейти к профилю Виктор Петров">
                        <!-- Если картинки нет (img отсутствует), то виден фон елемената .person__avatar-link -->
                        <img src="./images/icons/comments/user.jpg" alt="Фото" class="person__avatar">
                    </a>
                    <div class="person__info">
                        <div class="person__name">
                            <a href="#" class="person__name-link" title="Перейти к профилю Виктор Петров">
                                Виктор Петров
                            </a>
                            <div class="person__label">
                                <svg width="14" height="14">
                                    <use xlink:href="images/icons/comments/sprite.svg#star"></use>
                                </svg>
                            </div>
                        </div>
                        <div class="person__date">
                            сегоддня в 13:33
                        </div>
                    </div>
                    <div class="person__menu context-menu">
                        <button class="context-menu__btn">
                            <svg class="context-menu__svg" height="20" width="20">
                                <use xlink:href="images/icons/user-info/sprite.svg#more"></use>
                            </svg>
                        </button>
                        <ul class="context-menu__list">
                            <li><button class="context-menu__item">Копировать URL</button></li>
                            <li><button class="context-menu__item">Копировать текст</button></li>
                            <li><button class="context-menu__item">Пожаловться</button></li>
                        </ul>
                    </div>
                </div>
                <div class="comments__text">
                    <blockquote>
                        Текст цитаты из поста, который надо в комментариях тоже выделять
                    </blockquote>
                    
                    Агрохолдинг «Степь» расширяет продуктовую линейку и запускает новое
                    направление
                    бизнеса — производство муки. Выпуск муки
                    высшего и первого сортов начался на производственных площадках компании в городе Сальске Ростовской
                    области
                </div>
                <div class="comments__actions">
                    <button class="comments__reply" title="Ответить" type="button">
                        <svg width="20" height="17">
                            <use xlink:href="images/icons/comments/sprite.svg#reply-arrow"></use>
                        </svg>
                    </button>
                    <button class="comments__like" type="button" title="Поставить лайк">
                        <svg width="20" height="19">
                            <use xlink:href="images/icons/comments/sprite.svg#like"></use>
                        </svg>
                    </button>
                    <a href="#" class="comments__fan" rel="nofollow" title="Трейдеры, которые оценили комментарий">3</a>
                    <button class="comments__dislike" type="button" title="Поставить дизлайк">
                        <svg width="20" height="19">
                            <use xlink:href="images/icons/comments/sprite.svg#dislike"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <button class="comments__show-answers">
                <span>Показать 999 ответов</span>
            </button>
            <ul class="comments__answers comments__answers--hidden">
                <li class="comments__item">
                    <div class="comments__content">
                        <div class="comments__person person">
                            <a href="#" class="person__avatar-link" title="Перейти к профилю Виктор Петров">
                                <img src="./images/icons/comments/user.jpg" alt="Фото" class="person__avatar">
                            </a>
                            <div class="person__info">
                                <div class="person__name">
                                    <a href="#" class="person__name-link" title="Перейти к профилю Виктор Петров">
                                        Виктор Петров
                                    </a>
                                    <div class="person__label">
                                        <svg width="14" height="14">
                                            <use xlink:href="images/icons/comments/sprite.svg#popular"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="person__date">
                                    сегоддня в 13:33
                                </div>
                            </div>
                            <div class="person__menu context-menu">
                                <button class="context-menu__btn">
                                    <svg class="context-menu__svg" height="20" width="20">
                                        <use xlink:href="images/icons/user-info/sprite.svg#more"></use>
                                    </svg>
                                </button>
                                <ul class="context-menu__list">
                                    <li><button class="context-menu__item">Копировать URL</button></li>
                                    <li><button class="context-menu__item">Копировать текст</button></li>
                                    <li><button class="context-menu__item">Пожаловться</button></li>
                                </ul>
                            </div>
                        </div>
                        <div class="comments__text">новое направление бизнеса — производство муки. Выпуск муки
                            высшего и первого сортов начался на производственных площадках компании в городе Сальске
                            Ростовской
                            области</div>
                        <div class="comments__actions">
                            <button class="comments__reply" title="Ответить" type="button">
                                <svg width="20" height="17">
                                    <use xlink:href="images/icons/comments/sprite.svg#reply-arrow"></use>
                                </svg>
                            </button>
                            <button class="comments__like" type="button" title="Поставить лайк">
                                <svg width="20" height="19">
                                    <use xlink:href="images/icons/comments/sprite.svg#like"></use>
                                </svg>
                            </button>
                            <a href="#" class="comments__fan" rel="nofollow"
                                title="Трейдеры, которые оценили комментарий">3</a>
                            <button class="comments__dislike" type="button" title="Поставить дизлайк">
                                <svg width="20" height="19">
                                    <use xlink:href="images/icons/comments/sprite.svg#dislike"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
`

document.querySelector('.comments__show-others')?.addEventListener('click', e => {
  e.target.closest('.comments__list')?.insertAdjacentHTML('beforeend', commentsForAdjacentHTML);
  e.target.remove();
});