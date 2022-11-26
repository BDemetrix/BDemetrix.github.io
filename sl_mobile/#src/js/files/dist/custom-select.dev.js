"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CustomSelect =
/*#__PURE__*/
function () {
  function CustomSelect($el) {
    _classCallCheck(this, CustomSelect);

    if (!$el || _typeof($el) !== 'object') {
      console.log(this.$el);
      throw "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442 \u043A\u043B\u0430\u0441\u0441\u0430 CustomSelect\". \u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F \u043E\u0431\u044A\u0435\u043A\u0442 DOM \u0432\u043C\u0435\u0441\u0442\u043E ".concat(this.$el);
    }

    this.$el = $el;

    this._init();
  }

  _createClass(CustomSelect, [{
    key: "_init",
    value: function _init() {
      var _this = this;

      this.$mainBtn = this.$el.querySelector('.custom-select__main-btn');
      this.$options = this.$el.querySelectorAll('.custom-select__option');
      this.active = this.$el.querySelector('.custom-select__option--active');

      for (var prop in this) {
        if (!this[prop]) {
          console.log(this);
          throw "\u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 CustomSelect, \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u043F\u043E\u043B\u0435 ".concat(prop);
        }
      }

      this.$mainBtn.addEventListener('click', function () {
        _this.$el.classList.toggle('custom-select--opened');
      });
      document.documentElement.addEventListener('click', function (e) {
        if (e.target.closest('.custom-select__main-btn') != _this.$mainBtn) {
          _this.$el.classList.remove('custom-select--opened');
        }
      });
      this.$options.forEach(function (option) {
        option.addEventListener('click', function () {
          _this._change(option);

          _this.$el.classList.remove('custom-select--opened');
        });
      });

      this._sync();
    }
  }, {
    key: "_change",
    value: function _change(option) {
      this.$mainBtn.textContent = this.$mainBtn.value = option.value;
      this.active.classList.remove('custom-select__option--active');
      option.classList.add('custom-select__option--active');
      this.active = option;
    }
  }, {
    key: "_sync",
    value: function _sync() {
      var _this2 = this;

      var active = this.$el.querySelector('.custom-select__option--active');

      if (active) {
        this._change(active);

        this.active = active;
      } else {
        option = Array.from(this.$options).filter(function (option) {
          return option.value === _this2.$mainBtn.value;
        })[0];
        option ? option.classList.add('custom-select__option--active') : null;
      }
    }
  }]);

  return CustomSelect;
}();

var CustomSelectAll = function CustomSelectAll() {
  _classCallCheck(this, CustomSelectAll);

  this.$els = document.querySelectorAll('.custom-select');
  console.log(this.$els);

  if (!this.$els || !this.$els.length) {
    throw 'Элементы с классом ".custom-select" на странице не найдены.';
  }

  this.$els.forEach(function (el) {
    el = new CustomSelect(el);
  });
};

var customSelectAll = new CustomSelectAll();