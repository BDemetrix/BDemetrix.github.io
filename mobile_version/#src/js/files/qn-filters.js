plugSimpleBar('.qn-filters__content');

const qnMenuMobTabs = document.querySelectorAll('.qn-menu__mob-tabs a');
qnMenuMobTabs.forEach(a => {
  a.addEventListener('click', (e) => {
    e.stopPropagation()
  })
});

// Обработчик открытия/закрытия окна "фильтры"
const qnMenuBtnFilter = document.querySelector('.qn-menu__btn--filter');
const qnFilters = document.querySelector('.qn-filters');
const qnFiltersClose = document.querySelector('.qn-filters__close');

if (qnMenuBtnFilter && qnFilters && qnFiltersClose) {

  qnMenuBtnFilter.addEventListener('click', () => {
    if (qnMenuBtnFilter.parentElement.classList.contains('_open')) 
      blockOverflow();
    else 
      unBlockOverflow();
  });

  qnFilters.addEventListener('click', (e) => {
    if (!e.target.closest('.qn-filters__content') || e.target.closest('.qn-filters__close')) {
      qnFilters.closest('._open').classList.remove('_open');
      unBlockOverflow()
    }
  });  
}

// Обработка сброса формы
if (qnFilters) {
  const qnFiltersContent = document.querySelector('.qn-filters__content');
  const filtersInputs = qnFilters.querySelectorAll('input');
  let inputChange = new Event('change');
  
  if(qnFiltersContent) {
    qnFiltersContent.addEventListener('reset', (e) => {
      filtersInputs.forEach( input => {
        setTimeout(() => {
          input.dispatchEvent(inputChange);
          clearSumoContents();
        }, 50);
      });
    })
  }  
}


// Подключения кастомного селекта
if ($('#sector_id').length) $('#sector_id').SumoSelect({ 
  placeholder: 'Все сектора',
  csvDispCount: 2,
  captionFormat: 'Сектора ({0})',
});
var sumoSelects = $('#country_id, #val_middle_gt, #val_middle_lt, #capitalization_gt, #capitalization_lt, #is_state_owned, #is_exporter, #year, #type, #quarter, #duration_lt_id, #duration_gt_id, #mat_years_lt_id, #mat_years_gt_id, #year_yield_lt_id, #year_yield_gt_id, #ofz_type_id');
if (sumoSelects.length) sumoSelects.SumoSelect(); 

// подключение кастомного скролла к селекту
function plugSimpleBarSumoSelect() {
  let optWrapperUls = document.querySelectorAll('.optWrapper');
  if (optWrapperUls.length) {
    optWrapperUls.forEach(element => {
      plugSimpleBar(element);
    });
  } 
}
plugSimpleBarSumoSelect();

// Функция сброса 
function clearSumoContents(){
  $.each(sumoSelects, function() {
    this.sumo.unSelectAll();
    this.sumo.selectItem(0);
  })
 $('#sector_id')[0].sumo.unSelectAll();
}


// Подключение календаря
Datepicker.locales.ru = {
  days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  daysShort: ['Вск', 'Пнд', 'Втр', 'Сре', 'Чтв', 'Птн', 'Суб'],
  daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  today: 'Today',
  clear: 'Очистить',
  titleFormat: 'MM y',
  format: 'dd.mm.yyyy',
  weekStart: 1,
};

let filterDatepicker;
let filterDateRargeElm = document.querySelector('.qn-filters__date-input');
if (filterDateRargeElm) {
  const arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6L2.29289 5.29289L1.58579 6L2.29289 6.70711L3 6ZM8.70711 10.2929L3.70711 5.29289L2.29289 6.70711L7.29289 11.7071L8.70711 10.2929ZM3.70711 6.70711L8.70711 1.7071L7.29289 0.292891L2.29289 5.29289L3.70711 6.70711Z"/></svg>`;
  filterDatepicker = new Datepicker(filterDateRargeElm, {
    autohide: true,
    daysOfWeekDisabled: [],
    daysOfWeekHighlighted: [],
    nextArrow: arrow,
    prevArrow: arrow,
    todayBtnMode: 1,
    clearBtn: true,
    format: 'dd.mm.yyyy',
    container: '.qn-filters__datepicker',
    language: "ru",
  });
}
// ==============================

//RANGE
// Подключение ползунка
let qnFiltersRangeSliderObjs = [];
const qnFiltersRangeSliderEls = document.querySelectorAll('.qn-filters__range-slider');
qnFiltersRangeSliderEls.forEach( el => {

  qnFiltersRangeSliderObjs.push({
    target: el,
    settings: {
      start: [1, 1000],
      margin: 10,
      connect: true,
      range: {
        'min': [0],
        'max': [1000]
      }
    },
    wNumbFormat: wNumb({
      decimals: 0,
      thousand: '',
      suffix: "М ₽"
    })
  });
});

qnFiltersRangeSliderObjs.forEach( obj => plugNoUiSlider(obj));


/**
 * Функция подключает noUiSlider 
 * @param {Object} obj - одержит селектор или объект к которому подключается слайдер и  объект настроек
 * Ищет инпуты в родительском элементе и подключает их к слайдеру
 */
function plugNoUiSlider(obj) {

  if (!obj || !obj.target || !obj.settings || !obj.wNumbFormat) {
    console.log('Плагин NoUiSlider не може быть подключен. function plugNoUiSlider(obj)');
    return;
  }

  let sliderEl;
  if (typeof obj.target == 'string') 
    sliderEl = document.querySelector(obj.target);
  else if (typeof obj.target == 'object')
    sliderEl = obj.target;
  else {
    console.log('Плагин NoUiSlider не може быть подключен. Не определен целевой объект');
    return;
  }
  

  if (sliderEl) {
    const inputs = sliderEl.parentElement.querySelectorAll('input');
    slider = noUiSlider.create(sliderEl, {
      ...obj.settings,
      format: obj.wNumbFormat
    });

    if (inputs) {

      slider.on('slide', (params) => {
        inputs.forEach((input, i) => {
          input.value = params[i];
        });
      });

      inputs.forEach((input) => {
        input.addEventListener('keydown', numOnly);
        input.addEventListener('blur', inputBlur);
        input.addEventListener('focus', (e) => { e.target.select() });
        input.addEventListener('change', setSliderValues);

        input.focus();
        input.blur();
      })
    }

    function inputBlur() {
      let x = Number(obj.wNumbFormat.from(this.value));
      this.value = obj.wNumbFormat.to(x);
    }

    function setSliderValues() {
      let inputsValues = [];
      inputs.forEach(input => inputsValues.push(input.value));
      sliderEl.noUiSlider.set(inputsValues);
    }
  }
}

// Подключение адаптивной таблицы
setTimeout(() => {
 new FlexTable('.trades-table'); 
}, 300);

