"use strict";
class BecksAlarmScale {
    constructor() {
        this.errCSS = 'color: red; border: 2px solid red; font-weight: bold;';
        this.init();
    }

    init() {
        this.el = document.querySelector('.js-psy-test-body');
        if (!this.el) {
            this._errorMsg('.js-psy-test-body');
            return;
        }

        this.groups = this.el.querySelectorAll('.js-psy-test-group');
        if (!this.groups.length) {
            this._errorMsg('.js-psy-test-group');
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
                this._errorMsg('.js-psy-test-input');
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

        if (count > 36) {
            result.modifier = 'red';
            result.html = `Потенциально опасный уровень беспокойства и&nbsp;тревоги <div class="psy-test__info-count">Набранных баллов: ${count} </div>`;
        } else if (count > 22) {
            result.modifier = 'yellow';
            result.html = `Cредняя тревожность <div class="psy-test__info-count">Набранных баллов: ${count} </div>`;
        } else {
            result.modifier = 'green';
            result.html = `Низкая тревожность <div class="psy-test__info-count">Набранных баллов: ${count}</div> `;
        }

        return result;
    }

    _errorMsg(str = '') {
        console.log(`%c Не найден селектор "${str}" `, this.errCSS);
        alert('К сожалению тест сломался. Сообщите об этом владельцу сайта, пожалуйста!');
    }
}

class PsyTestsManager {
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
    }

    _save() {
        this.saveBtn.remove();
        if (!this.style) {
            alert('К сожалению невозможно сохранить тест. \n\nСообщите об этом владельцу сайта, пожалуйста!');
            console.log(`%c Не найдены стили для сохранения `, this.errCSS);
            return;
        }

        this.style.className = '';
        let testLink = this.el.getAttribute('data-test-link');

        const tempHref = this.againBtn.href;
        this.againBtn.href = testLink ? testLink : location.origin;

        let pageHTML =
            ` <!DOCTYPE html>
					<html lang="ru">
						<head>
							<!-- WEB-разработчик данного теста - Дмитрий Богданов https://bdemetrix.github.io -->
							<title>@@title</title>
							<meta charset="UTF-8">
							<meta name="format-detection" content="telephone=no">
							<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
							${this.style.outerHTML}
						</head>
						<body>
							${this.el.outerHTML}

							<scr`

        pageHTML += `ipt>
				document.getElementById('psy-test-result').scrollIntoView(true);
				</scr`

        pageHTML += `ipt>
						</body>
					</html>`


        this.againBtn.href = tempHref;

        let fileName = this.el.getAttribute('data-test-file-name') ?? 'Test.'
        fileName = `${fileName} от ${this._getDate()}.html`

        const blob = new Blob([pageHTML], {
            type: "text/plain"
        });
        const linkEl = document.createElement("a");
        linkEl.setAttribute("href", URL.createObjectURL(blob));
        linkEl.setAttribute("download", fileName);
        linkEl.click();
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
        let seconds = date.getSeconds();
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return `${day}.${month}.${year} ${hours}.${minutes}.${seconds}`;
    }

    _errorMsg(msg) {
        console.log(`%c ${msg} `, this.errCSS);
        alert('К сожалению тест сломался. \n\nСообщите об этом владельцу сайта, пожалуйста!');
    }
}