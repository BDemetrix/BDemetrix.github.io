class CustomSelect{
    constructor($el){

        if (!$el || (typeof $el !== 'object')) {
            console.log(this.$el);
            throw `Некорректный аргумент класса CustomSelect". Ожидается объект DOM вместо ${this.$el}`;
        }

        this.$el = $el;
        this._init();
    }

    _init() {
        this.$mainBtn = this.$el.querySelector('.custom-select__main-btn');
        this.$options = this.$el.querySelectorAll('.custom-select__option');
        this.active = this.$el.querySelector('.custom-select__option--active');

        for(const prop in this) {
            if (!this[prop]) {
                console.log(this);
                throw `Ошибка инициализации CustomSelect, не установлено поле ${prop}`;
            }
        }

        this.$mainBtn.addEventListener('click', () => { 
            this.$el.classList.toggle('custom-select--opened');
        });

        document.documentElement.addEventListener('click', (e) => {
            if (e.target.closest('.custom-select__main-btn') != this.$mainBtn) {
                this.$el.classList.remove('custom-select--opened');
            }
        })

        this.$options.forEach(option => {
            option.addEventListener('click', () => {
                this._change(option);
                this.$el.classList.remove('custom-select--opened');
            }) 
        });

        this._sync();
    }

    _change(option) {
        this.$mainBtn.textContent = this.$mainBtn.value = option.value;
        this.active.classList.remove('custom-select__option--active');
        option.classList.add('custom-select__option--active');
        this.active = option;
    }

    _sync() {
        const active = this.$el.querySelector('.custom-select__option--active');
        if (active) {
            this._change(active);
            this.active = active;
        } else {
           option = Array.from(this.$options).filter(option => option.value === this.$mainBtn.value)[0];
           option ? option.classList.add('custom-select__option--active') : null;
        }
    }
}

class CustomSelectAll {
    constructor() {
        this.$els = document.querySelectorAll('.custom-select');
        console.log(this.$els)
        if (!this.$els || !this.$els.length) {
            throw ('Элементы с классом ".custom-select" на странице не найдены.'); 
        }
        this.$els.forEach(el => {
            el = new CustomSelect(el)
        });
    }
}

const customSelectAll = new CustomSelectAll();