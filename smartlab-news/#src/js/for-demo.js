// Файл js/for-demo.js предназначен для демонстрации работы некоторых плагинов и в app.js попадать не должен




// autoComplete.js
const autoCompleteJS = new autoComplete({
	// API Advanced Configuration Object
	selector: "#headerAutoComplete",
	placeHolder: "Поиск новости...",
	data: {
	src: ['Обувь России не будет выплачивать дивиденды за 20 г - Титов',
				'Облигация ВЭБ.РФ-001Р-К286, выплата купона',
				'Акции Магнита покажут опережающую динамику в среднесрочной перспективе - Газпромбанк',
				'Совет директоров ЦМТ 4 марта обсудит дивиденды',
				'Определение цены выкупа акций Банка Возрождение в связи с реорганизацией',
				'Чистая прибыль Газпром нефти по РСБУ в 20 г - 23, 3 %',
				'Минфин внесет законопроект по созданию базы секретной бухотчетности компаний',
				'лидеры роста и падения на ММВБ сегодня',
				'Итоги дня: IMOEX - 0.3 % Lonely day.',
				'Ozon начал доставлять готовую еду',
				'«Круиз» выплатил 11 купон по 4 - му выпуску облигаций',
				'Ростехнадзор может приостановить работу фабрики Норникеля в Норильске',
				'ГДР Fix Price допущены к торгам на Московской бирже',
				'Ликвидность банковского сектора ЦБ',
				'Обрушение на предприятии Норильского никеля: компания разваливается по частям',
				'Криптоактивы несут большие риски, выпуск инструментов в инвалюте нежелателен — ЦБ',
				'МНЕНИЕ: Выручка Русской Аквакультуры за 4 квартал может составить 14,3 млрд рублей - Велес Капитал',
				'Рынок обладает значительным потенциалом для дальнейшего роста, но нужна защита инвесторов — мнение ЦБ',
				'Freedom Holding покупает американского брокера MKM Partners',
				'Прекратить с 03 марта 2022 года торги акциями ПАО «ДжиТиЭл» и ОАО «Мультисистема»',
				'МНЕНИЕ: Потенциал роста акций Сбербанка составляет 31-34% с текущих уровней - Альфа-Банк']
	},
	resultsList: {
		render: true,
		element: "ul",
		idName: "header-auto-list",
		className: "search__auto-list",
		destination: ".search__auto-complete",
		position: "afterend",
		maxResults: 20,
		container: (element, data) => {
			const liItems = element.querySelectorAll('li');
			document.querySelector("#headerAutoComplete").addEventListener("navigate", function (event) {
				liItems.forEach(li => li.classList.remove('_active'));
				let index = event.detail.selection.index;
				if (liItems[index]) {
					liItems[index].classList.add('_active');
				}
			});		
			plugSimpleBar('.search__auto-list');	
		},
		noResults: (list, query) => {
			// Create "No Results" message element
			const message = document.createElement("div");
			// Add class to the created element
			message.setAttribute("class", "no_result");
			// Add message text content
			message.innerHTML = `<span>По запросу "${query}" ничего не найдено</span>`;
			// Append message element to the results list
			list.appendChild(message);
		},
	},
	resultItem: {
		idName: "header-auto-item",
		className: "search__auto-item",
		highlight: {
			render: true,
		},
		selected: {
			className: "autoComplete_selected"
		}
	},
	onSelection: (feedback) => {
		console.log(feedback);
	},

});