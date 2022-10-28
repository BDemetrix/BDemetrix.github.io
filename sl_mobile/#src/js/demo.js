/**
 * demo.js предназначен исключительно для демонстрации некоторых свойств вёрстки
 */

(function () {

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
    }
  ];
  var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,target=_blank";

  $('[autocompleter]').autocomplete({
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
          container.find('.autocomplete-suggestion[data-index="' + i + '"]').addClass('hilite');
        }
      });
    },
  });
  // подключаем плагин для кастомного скролла
  plugSimpleBar('.query-search__suggestions');


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