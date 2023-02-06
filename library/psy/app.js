/* const isMobile = {
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
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
}; */


"use strict";


/**
 * Производит расчет результатов тестов, основаных на выборе одного или несколких ответов из группы
 * Основан на radio и/или checkbox
 */
class PsyTestsCalculator {
    /**
     * вычисляет количество набранных баллов
     * @param {Object} handler - класс обработки конкретного теста, возвращает объект для вывода на экран (например )
     */
    constructor(handler) {
        this.handler = handler;
        this.errCSS = 'color: red; border: 2px solid red; font-weight: bold;';
        this.init();
    }

    init() {
        if (!this.handler.getResult) {
            this._errorMsg(' Не задана функция для возвращения результата теста ');
            return;
        }

        this.el = document.querySelector('.js-psy-test-body');
        if (!this.el) {
            this._errorMsg(' Не найден селектор .js-psy-test-body');
            return;
        }

        this.groups = this.el.querySelectorAll('.js-psy-test-group');
        if (!this.groups.length) {
            this._errorMsg(' Не найден селектор .js-psy-test-group');
            return;
        }
    }

    calc() {
        let error = '';
        let count = 0;
        const result = {};
        const length = this.groups.length;

        for (let i = 0; i < length; i++) {
            const group = this.groups[i];
            const inputs = Array.from(group.querySelectorAll('.js-psy-test-input'));
            if (!inputs.length) {
                this._errorMsg(' Не найден селектор .js-psy-test-input');
                throw 'Некорректная HTML структура теста BecksAlarmScale'
            }
            const checked = inputs.find(el => el.checked);

            if (!checked) {
                group.classList.add('_error');
                result.error = 'Не выбран ответ в группе';
            }

            if (result.error) continue;

            inputs.forEach(el => {
                if (el.checked) {
                    count += +el.value;
                    el.setAttribute('checked', true);
                } else {
                    el.setAttribute('disabled', true);
                }
            })
        }

        if (result.error) {
            result.errTarget = this.el.querySelector('.js-psy-test-group._error');
            return result;
        }

        return this.handler.getResult(count);
    }

    _errorMsg(str = '') {
        console.log(`%c "${str}" `, this.errCSS);
        alert('К сожалению тест сломался. \n\nСообщите об этом Инне Моисеевой, пожалуйста! \n\n telegram: @innasteplom');
    }
}

/**
 * Управляет вызовом функций расчета, сохранения и показа результатов 
 * В качестве параметра принимает экземпляр класса PsyTestsCalculator() (или другого класса)
 */
class PsyTestsManager {
    /**
     * @param {PsyTestsCalculator} handler - управляет вычислением результата
     */
    constructor(handler) {
        this.handler = handler;
        this.errCSS = 'color: red; border: 2px solid red; font-weight: bold;';
        this.init();
    }

    init() {
        this.el = document.querySelector('.js-psy-test');
        if (!this.el) {
            this._errorMsg('%c Не найден селектор ".js-psy-test" ');
            return;
        }

        this.testName = this.el.getAttribute('data-test-name');
        if (!this.testName) {
            this._errorMsg('Не задано имя теста в data атрибуте блока ".js-psy-test"');
        }

        if (typeof this.handler !== 'object') {
            this._errorMsg(`Ошибка класса обработчика теста: ${this.testName}. Класс не найден.`);
            console.log(e);
            return;
        }

        this.inputs = this.el.querySelectorAll('.js-psy-test-input')
        this.calcBtn = this.el.querySelector('.js-psy-test-btn-calc');
        this.resultContainer = this.el.querySelector('.js-psy-test-result');
        this.saveBtn = this.el.querySelector('.js-psy-test-btn-save');
        this.againBtn = this.el.querySelector('.js-psy-test-btn-again');

        for (let key in this) {
            if (!this[key]) {
                this._errorMsg(`Ошибка инициализации PsyTestsManager. Не задано поле: ${key}`)
                return;
            }
        }

        this.style = document.querySelector('.js-psy-test-style');
        this.againBtn.href = location.href;

        this.calcBtn.addEventListener('click', () => {
            this._calc();
        });

        this.saveBtn.addEventListener('click', () => {
            this._save();
        })

        this.inputs.forEach(el => el.addEventListener('change', () => {
            const group = el.closest('.js-psy-test-group._error');
            if (group) {
                group.classList.remove('_error')
                setTimeout(() => {
                    const nextGroup = this.el.querySelector('.js-psy-test-group._error,  .js-psy-test-footer');
                    if (nextGroup) nextGroup.scrollIntoView(true);
                }, 10);
            };
        }));

        /* window.addEventListener('beforeprint', (event) => {
            this.el.classList.add('psy-test--to-print')
            console.log(event)
        });

        window.addEventListener('afterprint', (event) => {
            this.el.classList.remove('psy-test--to-print')
        }); */
    }

    _calc() {
        let result = {};
        try {
            result = this.handler.calc();
        } catch (e) {
            this._errorMsg(`Ошибка вычисления теста ${this.testName}`);
            console.log(e)
            return false;
        }

        if (result.error) {
            if (result.errTarget) {
                result.errTarget.scrollIntoView(true);
            }
            return false;
        }

        if (!result.modifier || !result.html) {
            this._errorMsg();
            throw ` Ошибка вычисления результата теста ${this.testName}. `;
        }

        this.calcBtn.remove();

        this.resultContainer.innerHTML = result.html;
        this.resultContainer.classList.add(`psy-test__info--${result['modifier']}`);
        this.resultContainer.classList.remove('_hidden');
        this.againBtn.classList.remove('_hidden');
        this.saveBtn.classList.remove('_hidden');
        this.againBtn.href = location.href;
        this.resultContainer.scrollIntoView();
    }

    _save() {
        this.saveBtn.style.display = 'none';
        if (!this.style) {
            alert('К сожалению невозможно сохранить тест. \n\nСообщите об этом владельцу сайта, пожалуйста!');
            console.log(`%c Не найдены стили для сохранения `, this.errCSS);
            return;
        }

        this.style.className = '';
        let testLink = this.el.getAttribute('data-test-link');

        const tempHref = this.againBtn.href;
        this.againBtn.href = testLink ? testLink : location.origin;
        let fileName = this.el.getAttribute('data-test-file-name').replaceAll(' ', '_').replaceAll('.', '') ?? 'Test_'
        fileName = `${fileName}_от_${this._getDate()}.html`

        let pageHTML =
            ` <!DOCTYPE HTML>
					<html lang="ru">
						<head>
							<!-- WEB-разработчик данного теста - Дмитрий Богданов https://bdemetrix.github.io -->
                            <meta charset="UTF-8">
							<title>${fileName}</title>
							<meta name="format-detection" content="telephone=no">
							<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
							${this.style.outerHTML}
						</head>
						<body class = "_container">
							${this.el.outerHTML}
							<scr`;

        pageHTML += `ipt>
                window.addEventListener("DOMContentLoaded", () => {
                    setTimeout(() => {
				        document.getElementById('psy-test-result').scrollIntoView(true);
                    }, 100);
                })
				</scr`;

        pageHTML += `ipt>
						</body>
					</html>`;


        this.againBtn.href = tempHref;

        const blob = new Blob([pageHTML], {
            type: 'html/plain;charset=UTF-8'
        });
        const linkEl = document.createElement("a");
        linkEl.setAttribute("href", URL.createObjectURL(blob));
        linkEl.setAttribute("download", fileName);
        linkEl.click();
        this.saveBtn.style.display = ''
    }

    _getDate() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        let day = date.getDate();
        day = day < 10 ? '0' + day : day;
        let hours = date.getHours();
        hours = hours < 10 ? '0' + hours : hours;
        let minutes = date.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        /* let seconds = date.getSeconds();
        seconds = seconds < 10 ? '0' + seconds : seconds; */
        console.log({month})
        return `${day}_${month}_${year}`; // __${hours}_${minutes}_${seconds}
    }

    _errorMsg(msg) {
        console.log(`%c ${msg} `, this.errCSS);
        alert('К сожалению тест сломался. \n\nСообщите об этом Инне Моисеевой, пожалуйста! \n\n telegram: @innasteplom');
    }
}

/**
 * Шкала тревоги Бэка
 * Создает и вызывает глобальные обработчики
 * метод getResult(count) возвращает объект с результатом 
 */
class BecksAlarmScale {
    constructor() {
        this.init();
    }

    /**
     * Инициализирует объект
     */
    init() {
        var self = this;
        try {
            const handler = new PsyTestsCalculator(self);
            new PsyTestsManager(handler);
        } catch (e) {
            alert('К сожалению тест сломался. \n\nСообщите об этом Инне Моисеевой, пожалуйста! \n\n telegram: @innasteplom');
            throw e;
        }
    }

    /**
     * Возвращает ответ для PsyTestsCalculator
     * @param {Number} count - количество набранных баллов
     */
    getResult(count = 0) {
        const maxV = 63;
        const w = Math.floor(count * 10000 / maxV) / 100;
        const bgSize = Math.floor(10000 / maxV) / 100;
        const scale = `
        <div class = "psy-test__info-scale">
            <div class = "psy-test__info-scale-wrap">
                <div class="psy-test__info-scale-cells" style = "background-size: ${bgSize}%, 100%;"></div> 
                <div class="psy-test__info-scale-marker" style="width: ${w}%;" ></div>
                <div class="psy-test__info-scale-cover"></div> 
            </div> 
            <div class="psy-test__info-scale-map">
                <div class="psy-test__info-scale-item" style="width: 33.33%;">
                    <span>[ 0 </span><span>21 ]</span>
                </div>
                <div class="psy-test__info-scale-item" style="width: 21%;">
                    <span>[ 22 </span><span>35 ]</span>
                </div>
                <div class="psy-test__info-scale-item" style="width: 45.67%;">
                    <span>[ 36 </span><span>63 ]</span >
                </div> 
            </div> 
        </div> `;

        const result = {};
        if (count > 36) {
            result.modifier = 'red';
            result.html = `Потенциально опасный уровень беспокойства и&nbsp;тревоги <div class="psy-test__info-count">Набранных баллов: ${count} </div>` + scale;
        } else if (count > 22) {
            result.modifier = 'yellow';
            result.html = `Cредняя тревожность <div class="psy-test__info-count">Набранных баллов: ${count} </div>` + scale;
        } else {
            result.modifier = 'green';
            result.html = `Низкая тревожность <div class="psy-test__info-count">Набранных баллов: ${count}</div>` + scale;
        }

        return result;
    }
}

/**
 * Шкала тревоги Бэка
 * Создает и вызывает глобальные обработчики
 * метод getResult(count) возвращает объект с результатом 
 */
class BecksDepressionScale {
    constructor() {
        this.init();
    }

    /**
     * Инициализирует объект
     */
    init() {
        var self = this;
        try {
            const handler = new PsyTestsCalculator(self);
            new PsyTestsManager(handler);
        } catch (e) {
            alert('К сожалению тест сломался. \n\nСообщите об этом Инне Моисеевой, пожалуйста! \n\n telegram: @innasteplom');
            throw e;
        }
    }

    /**
     * Возвращает ответ для PsyTestsCalculator
     * @param {Number} count - количество набранных баллов 
     */
    getResult(count = 0) {
        const maxV = 63;
        const w = Math.floor(count * 10000 / maxV) / 100;
        const bgSize = Math.floor(10000 / maxV) / 100;
        const scale = `
        <div class = "psy-test__info-scale">
            <div class = "psy-test__info-scale-wrap">
                <div class="psy-test__info-scale-cells" style="background-size: ${bgSize}%, 100%;"></div> 
                <div class="psy-test__info-scale-marker" style="width: ${w}%;" ></div>
                <div class="psy-test__info-scale-cover"></div> 
            </div> 
            <div class="psy-test__info-scale-map psy-test__info-scale-map--min">
                <div class = "psy-test__info-scale-item" style="width: 14.29%;">
                    <span>[ 0 </span><span>9 ]</span>
                </div>
                <div class="psy-test__info-scale-item" style="width: 14.29%;">
                    <span>[ 10 </span><span>18 ]</span>
                </div> 
                <div class = "psy-test__info-scale-item" style="width: 17.46%;">
                    <span> [19 </span><span>29 ]</span >
                </div>
                <div class = "psy-test__info-scale-item" style="width: 53.96%;">
                    <span>[ 30 </span><span>63 ]</span >
                </div> 
            </div> 
        </div> `;

        const result = {};
        if (count > 29) {
            result.modifier = 'red';
            result.html = `Тяжелая депрессия <div class="psy-test__info-count">Набранных баллов: ${count} </div>` + scale;
        } else if (count > 18) {
            result.modifier = 'orange';
            result.html = `Выраженная депрессия (депрессия средней тяжести) <div class="psy-test__info-count">Набранных баллов: ${count} </div>` + scale;
        } else if (count > 9) {
            result.modifier = 'yellow';
            result.html = `От легкой до&nbsp;умеренной депрессии <div class="psy-test__info-count">Набранных баллов: ${count} </div>` + scale;
        } else {
            result.modifier = 'green';
            result.html = `Нормальное состояние <div class="psy-test__info-count">Набранных баллов: ${count}</div> ` + scale;
        }

        return result;
    }
}

/**
 * Шкала безнадежности Бека
 * Создает и вызывает глобальные обработчики
 * метод getResult(count) возвращает объект с результатом 
 */
class BecksHopelessnessScale {
    constructor() {
        this.init();
    }

    /**
     * Инициализирует объект
     */
    init() {
        var self = this;
        try {
            const handler = new PsyTestsCalculator(self);
            new PsyTestsManager(handler);
        } catch (e) {
            alert('К сожалению тест сломался. \n\nСообщите об этом Инне Моисеевой, пожалуйста! \n\n telegram: @innasteplom');
            throw e;
        }
    }

    /**
     * Возвращает ответ для PsyTestsCalculator
     * @param {Number} count - количество набранных баллов 
     */
    getResult(count = 0) {
        const maxV = 20;
        const w = Math.floor(count * 10000 / maxV) / 100;
        const bgSize = Math.floor(10000 / maxV) / 100;
        const scale = `
        <div class = "psy-test__info-scale">
            <div class = "psy-test__info-scale-wrap">
                <div class="psy-test__info-scale-cells" style="background-size: ${bgSize}%, 100%;"></div> 
                <div class="psy-test__info-scale-marker" style="width: ${w}%;" ></div>
                <div class="psy-test__info-scale-cover"></div> 
            </div> 
            <div class="psy-test__info-scale-map">
                <div class = "psy-test__info-scale-item" style="width: 15%;">
                    <span>[ 0 </span><span>3 ]</span>
                </div>
                <div class="psy-test__info-scale-item" style="width: 25%;">
                    <span>[ 4 </span><span>8 ]</span>
                </div> 
                <div class = "psy-test__info-scale-item" style="width: 30%;">
                    <span> [9 </span><span>14 ]</span >
                </div>
                <div class = "psy-test__info-scale-item" style="width: 30%;">
                    <span>[ 15 </span><span>20 ]</span >
                </div> 
            </div> 
        </div> `;

        const result = {};
        if (count > 14) {
            result.modifier = 'red';
            result.html = `Безнадежность тяжёлая <div class="psy-test__info-count">Набранных баллов: ${count} </div>` + scale;
        } else if (count > 8) {
            result.modifier = 'orange';
            result.html = `Безнадежность умеренная <div class="psy-test__info-count">Набранных баллов: ${count} </div>` + scale;
        } else if (count > 3) {
            result.modifier = 'yellow';
            result.html = `Безнадежность лёгкая <div class="psy-test__info-count">Набранных баллов: ${count} </div>` + scale;
        } else {
            result.modifier = 'green';
            result.html = `Безнадёжность не выявлена <div class="psy-test__info-count">Набранных баллов: ${count}</div> ` + scale;
        }
        return result;
    }
}

/**
 * Шкала суицидальных мыслей Бека
 * Создает и вызывает глобальные обработчики
 * метод getResult(count) возвращает объект с результатом 
 */
class BecksSuicidalScale {
    constructor() {
        this.init();
    }

    /**
     * Инициализирует объект
     */
    init() {
        var self = this;
        try {
            const handler = new PsyTestsCalculator(self);
            new PsyTestsManager(handler);
        } catch (e) {
            alert('К сожалению тест сломался. \n\nСообщите об этом Инне Моисеевой, пожалуйста! \n\n telegram: @innasteplom');
            throw e;
        }
    }

    /**
     * Возвращает ответ для PsyTestsCalculator
     * @param {Number} count - количество набранных баллов 
     */
    getResult(count = 0) {
        const maxV = 38;
        const w = Math.floor(count * 10000 / maxV) / 100;
        const bgSize = Math.floor(10000 / maxV) / 100;
        const scale = `
        <div class = "psy-test__info-scale">
            <div class = "psy-test__info-scale-wrap">
                <div class="psy-test__info-scale-cells" style="background-size: ${bgSize}%, 100%;"></div> 
                <div class="psy-test__info-scale-marker" style="width: ${w}%;" ></div>
                <div class="psy-test__info-scale-cover"></div> 
            </div> 
            <div class="psy-test__info-scale-map">
                <div class = "psy-test__info-scale-item" style="width: 15.79%;">
                    <span>[ 0 </span><span>6 ]</span>
                </div>
                <div class="psy-test__info-scale-item" style="width: 84.21%;">
                    <span>[ 7 </span><span>38 ]</span>
                </div>
            </div> 
        </div> `;

        const result = {};
        result.html = `Риск суицида на&nbsp;момент интервью: ${count}&nbsp;из&nbsp;${maxV} <div class="psy-test__info-count">Пороговое значение: 6 баллов </div>` + scale;
        if (count > 20) {
            result.modifier = 'red';
        } else if (count > 12) {
            result.modifier = 'orange';
        } else if (count > 6) {
            result.modifier = 'yellow';
        } else {
            result.modifier = 'green';
        }
        return result;
    }
}
 
window.addEventListener("DOMContentLoaded", () => {

(function () {
    const burgerMenu = document.querySelector('.js-burger-menu');
    if (!burgerMenu) return;

    const burgerMenuItemBtn = burgerMenu.querySelectorAll('.js-burger-menu-item-btn')

    burgerMenu.addEventListener('click', e => {
        if (!e.target.closest('.js-burger-menu-item-btn')) {
            burgerMenu.classList.toggle('_opened');
            if (burgerMenuItemBtn.length) closeAllSubBMenu(burgerMenuItemBtn);
        }
    });

    const hash = location.hash.replace('#', '');
    const target = document.getElementById(hash);
    if (target) {
        target.scrollIntoView(true);
    }


    if (!burgerMenuItemBtn.length) return;

    burgerMenuItemBtn.forEach(btn => {
        btn.parent = btn.parentElement;
        btn.inner = burgerMenu.querySelector('.js-burger-menu-sub-inner')
        btn.list = burgerMenu.querySelector('.js-burger-menu-sub-list')

        btn.addEventListener('click', e => {
            const isOpened = btn.parent.classList.contains('_opened');
            closeAllSubBMenu(burgerMenuItemBtn);
            if (!isOpened) openSubBMenu(btn);
        })
    })

    function closeAllSubBMenu(itemBtn) {
        itemBtn.forEach(btn => {
            btn.parent.classList.remove('_opened');
            btn.inner.setAttribute('style', '');
        })
    }

    function openSubBMenu(btn) {
        btn.parent.classList.add('_opened');
        btn.inner.style.height = btn.list.offsetHeight + 'px';
    }
}());
(function () {
    const contextMenu = document.querySelectorAll('.js-context-menu');
    
    if (!contextMenu.length) return;

    contextMenu.forEach( menu => {
        const menuBtns = menu.querySelectorAll('.js-context-menu-btn');
        if (!menuBtns.length) return;
        menuBtns.forEach(btn => {
            btn.addEventListener('click', e => {
                menu.classList.toggle('_opened');
            })
        });
    })

    document.documentElement.addEventListener('click', (e) => {
        if (e.target.closest('.js-context-menu-btn')) return;
        const contextMenu = document.querySelectorAll('.js-context-menu._opened');
        contextMenu.forEach(menu => menu.classList.remove('_opened'));
    }, false)
}());


// cкрипт для тестов (показывает кнопку записаться только при ?sign_up)
(function () {
    const psyTest = document.querySelector('.psy-test');
    const fixedSignUpBtn = document.querySelector('.fixed-sign-up');

    if (location.search.match('sign_up')) {
        if (psyTest) {
            psyTest.parentElement.style.paddingBottom = '40px';
        }
        //psyTest.appendChild(fixedSignUpBtn);
        if (fixedSignUpBtn) {
            fixedSignUpBtn.classList.remove('_hidden');
            //fixedSignUpBtn.parentElement.style.position = 'relative !important';
        }
    }
}());

});
