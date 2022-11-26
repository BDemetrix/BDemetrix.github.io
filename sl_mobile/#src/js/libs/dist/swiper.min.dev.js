"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Swiper 8.2.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 27, 2022
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(void 0, function () {
  "use strict";

  function e(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function t(s, a) {
    void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach(function (i) {
      void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
    });
  }

  var s = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function a() {
    var e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }

  var i = {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function r() {
    var e = "undefined" != typeof window ? window : {};
    return t(e, i), e;
  }

  var n =
  /*#__PURE__*/
  function (_Array) {
    _inherits(n, _Array);

    function n(e) {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, n);

      "number" == typeof e ? _this = _possibleConstructorReturn(this, _getPrototypeOf(n).call(this, e)) : (_this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(n)).call.apply(_getPrototypeOf2, [this].concat(_toConsumableArray(e || [])))), function (e) {
        var t = e.__proto__;
        Object.defineProperty(e, "__proto__", {
          get: function get() {
            return t;
          },
          set: function set(e) {
            t.__proto__ = e;
          }
        });
      }(_assertThisInitialized(_this)));
      return _possibleConstructorReturn(_this);
    }

    return n;
  }(_wrapNativeSuper(Array));

  function l(e) {
    void 0 === e && (e = []);
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, _toConsumableArray(l(e))) : t.push(e);
    }), t;
  }

  function o(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function d(e, t) {
    var s = r(),
        i = a();
    var l = [];
    if (!t && e instanceof n) return e;
    if (!e) return new n(l);

    if ("string" == typeof e) {
      var _s = e.trim();

      if (_s.indexOf("<") >= 0 && _s.indexOf(">") >= 0) {
        var _e = "div";
        0 === _s.indexOf("<li") && (_e = "ul"), 0 === _s.indexOf("<tr") && (_e = "tbody"), 0 !== _s.indexOf("<td") && 0 !== _s.indexOf("<th") || (_e = "tr"), 0 === _s.indexOf("<tbody") && (_e = "table"), 0 === _s.indexOf("<option") && (_e = "select");

        var _t = i.createElement(_e);

        _t.innerHTML = _s;

        for (var _e2 = 0; _e2 < _t.childNodes.length; _e2 += 1) {
          l.push(_t.childNodes[_e2]);
        }
      } else l = function (e, t) {
        if ("string" != typeof e) return [e];
        var s = [],
            a = t.querySelectorAll(e);

        for (var _e3 = 0; _e3 < a.length; _e3 += 1) {
          s.push(a[_e3]);
        }

        return s;
      }(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) l.push(e);else if (Array.isArray(e)) {
      if (e instanceof n) return e;
      l = e;
    }

    return new n(function (e) {
      var t = [];

      for (var _s2 = 0; _s2 < e.length; _s2 += 1) {
        -1 === t.indexOf(e[_s2]) && t.push(e[_s2]);
      }

      return t;
    }(l));
  }

  d.fn = n.prototype;
  var c = {
    addClass: function addClass() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = l(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var _e$classList;

        (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(a));
      }), this;
    },
    removeClass: function removeClass() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = l(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var _e$classList2;

        (_e$classList2 = e.classList).remove.apply(_e$classList2, _toConsumableArray(a));
      }), this;
    },
    hasClass: function hasClass() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = l(t.map(function (e) {
        return e.split(" ");
      }));
      return o(this, function (e) {
        return a.filter(function (t) {
          return e.classList.contains(t);
        }).length > 0;
      }).length > 0;
    },
    toggleClass: function toggleClass() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = l(t.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (e) {
        a.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var _s3 = 0; _s3 < this.length; _s3 += 1) {
        if (2 === arguments.length) this[_s3].setAttribute(e, t);else for (var _t2 in e) {
          this[_s3][_t2] = e[_t2], this[_s3].setAttribute(_t2, e[_t2]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var _t3 = 0; _t3 < this.length; _t3 += 1) {
        this[_t3].removeAttribute(e);
      }

      return this;
    },
    transform: function transform(e) {
      for (var _t4 = 0; _t4 < this.length; _t4 += 1) {
        this[_t4].style.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      for (var _t5 = 0; _t5 < this.length; _t5 += 1) {
        this[_t5].style.transitionDuration = "string" != typeof e ? "".concat(e, "ms") : e;
      }

      return this;
    },
    on: function on() {
      var _t7, _t8;

      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = t[0],
          i = t[1],
          r = t[2],
          n = t[3];

      function l(e) {
        var t = e.target;
        if (!t) return;
        var s = e.target.dom7EventData || [];
        if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) r.apply(t, s);else {
          var _e4 = d(t).parents();

          for (var _t6 = 0; _t6 < _e4.length; _t6 += 1) {
            d(_e4[_t6]).is(i) && r.apply(_e4[_t6], s);
          }
        }
      }

      function o(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }

      "function" == typeof t[1] && ((_t7 = t, _t8 = _slicedToArray(_t7, 3), a = _t8[0], r = _t8[1], n = _t8[2], _t7), i = void 0), n || (n = !1);
      var c = a.split(" ");
      var p;

      for (var _e5 = 0; _e5 < this.length; _e5 += 1) {
        var _t9 = this[_e5];
        if (i) for (p = 0; p < c.length; p += 1) {
          var _e6 = c[p];
          _t9.dom7LiveListeners || (_t9.dom7LiveListeners = {}), _t9.dom7LiveListeners[_e6] || (_t9.dom7LiveListeners[_e6] = []), _t9.dom7LiveListeners[_e6].push({
            listener: r,
            proxyListener: l
          }), _t9.addEventListener(_e6, l, n);
        } else for (p = 0; p < c.length; p += 1) {
          var _e7 = c[p];
          _t9.dom7Listeners || (_t9.dom7Listeners = {}), _t9.dom7Listeners[_e7] || (_t9.dom7Listeners[_e7] = []), _t9.dom7Listeners[_e7].push({
            listener: r,
            proxyListener: o
          }), _t9.addEventListener(_e7, o, n);
        }
      }

      return this;
    },
    off: function off() {
      var _t10, _t11;

      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = t[0],
          i = t[1],
          r = t[2],
          n = t[3];
      "function" == typeof t[1] && ((_t10 = t, _t11 = _slicedToArray(_t10, 3), a = _t11[0], r = _t11[1], n = _t11[2], _t10), i = void 0), n || (n = !1);
      var l = a.split(" ");

      for (var _e8 = 0; _e8 < l.length; _e8 += 1) {
        var _t12 = l[_e8];

        for (var _e9 = 0; _e9 < this.length; _e9 += 1) {
          var _s4 = this[_e9];

          var _a = void 0;

          if (!i && _s4.dom7Listeners ? _a = _s4.dom7Listeners[_t12] : i && _s4.dom7LiveListeners && (_a = _s4.dom7LiveListeners[_t12]), _a && _a.length) for (var _e10 = _a.length - 1; _e10 >= 0; _e10 -= 1) {
            var _i2 = _a[_e10];
            r && _i2.listener === r || r && _i2.listener && _i2.listener.dom7proxy && _i2.listener.dom7proxy === r ? (_s4.removeEventListener(_t12, _i2.proxyListener, n), _a.splice(_e10, 1)) : r || (_s4.removeEventListener(_t12, _i2.proxyListener, n), _a.splice(_e10, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      var e = r();

      for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) {
        s[a] = arguments[a];
      }

      var i = s[0].split(" "),
          n = s[1];

      for (var _t13 = 0; _t13 < i.length; _t13 += 1) {
        var _a2 = i[_t13];

        for (var _t14 = 0; _t14 < this.length; _t14 += 1) {
          var _i3 = this[_t14];

          if (e.CustomEvent) {
            var _t15 = new e.CustomEvent(_a2, {
              detail: n,
              bubbles: !0,
              cancelable: !0
            });

            _i3.dom7EventData = s.filter(function (e, t) {
              return t > 0;
            }), _i3.dispatchEvent(_t15), _i3.dom7EventData = [], delete _i3.dom7EventData;
          }
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = this;
      return e && t.on("transitionend", function s(a) {
        a.target === this && (e.call(this, a), t.off("transitionend", s));
      }), this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var _e11 = this.styles();

          return this[0].offsetWidth + parseFloat(_e11.getPropertyValue("margin-right")) + parseFloat(_e11.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var _e12 = this.styles();

          return this[0].offsetHeight + parseFloat(_e12.getPropertyValue("margin-top")) + parseFloat(_e12.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function styles() {
      var e = r();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function offset() {
      if (this.length > 0) {
        var _e13 = r(),
            _t16 = a(),
            _s5 = this[0],
            _i4 = _s5.getBoundingClientRect(),
            _n2 = _t16.body,
            _l = _s5.clientTop || _n2.clientTop || 0,
            _o = _s5.clientLeft || _n2.clientLeft || 0,
            _d2 = _s5 === _e13 ? _e13.scrollY : _s5.scrollTop,
            _c = _s5 === _e13 ? _e13.scrollX : _s5.scrollLeft;

        return {
          top: _i4.top + _d2 - _l,
          left: _i4.left + _c - _o
        };
      }

      return null;
    },
    css: function css(e, t) {
      var s = r();
      var a;

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1) {
            for (var _t17 in e) {
              this[a].style[_t17] = e[_t17];
            }
          }

          return this;
        }

        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) {
          this[a].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      return e ? (this.forEach(function (t, s) {
        e.apply(t, [t, s]);
      }), this) : this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;

      for (var _t18 = 0; _t18 < this.length; _t18 += 1) {
        this[_t18].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var _t19 = 0; _t19 < this.length; _t19 += 1) {
        this[_t19].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t = r(),
          s = a(),
          i = this[0];
      var l, o;
      if (!i || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);

        for (l = d(e), o = 0; o < l.length; o += 1) {
          if (l[o] === i) return !0;
        }

        return !1;
      }

      if (e === s) return i === s;
      if (e === t) return i === t;

      if (e.nodeType || e instanceof n) {
        for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) {
          if (l[o] === i) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return d([]);

      if (e < 0) {
        var _s6 = t + e;

        return d(_s6 < 0 ? [] : [this[_s6]]);
      }

      return d([this[e]]);
    },
    append: function append() {
      var e;
      var t = a();

      for (var _s7 = 0; _s7 < arguments.length; _s7 += 1) {
        e = _s7 < 0 || arguments.length <= _s7 ? void 0 : arguments[_s7];

        for (var _s8 = 0; _s8 < this.length; _s8 += 1) {
          if ("string" == typeof e) {
            var _a3 = t.createElement("div");

            for (_a3.innerHTML = e; _a3.firstChild;) {
              this[_s8].appendChild(_a3.firstChild);
            }
          } else if (e instanceof n) for (var _t20 = 0; _t20 < e.length; _t20 += 1) {
            this[_s8].appendChild(e[_t20]);
          } else this[_s8].appendChild(e);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t = a();
      var s, i;

      for (s = 0; s < this.length; s += 1) {
        if ("string" == typeof e) {
          var _a4 = t.createElement("div");

          for (_a4.innerHTML = e, i = _a4.childNodes.length - 1; i >= 0; i -= 1) {
            this[s].insertBefore(_a4.childNodes[i], this[s].childNodes[0]);
          }
        } else if (e instanceof n) for (i = 0; i < e.length; i += 1) {
          this[s].insertBefore(e[i], this[s].childNodes[0]);
        } else this[s].insertBefore(e, this[s].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([]);
    },
    nextAll: function nextAll(e) {
      var t = [];
      var s = this[0];
      if (!s) return d([]);

      for (; s.nextElementSibling;) {
        var _a5 = s.nextElementSibling;
        e ? d(_a5).is(e) && t.push(_a5) : t.push(_a5), s = _a5;
      }

      return d(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var _t21 = this[0];
        return e ? _t21.previousElementSibling && d(_t21.previousElementSibling).is(e) ? d([_t21.previousElementSibling]) : d([]) : _t21.previousElementSibling ? d([_t21.previousElementSibling]) : d([]);
      }

      return d([]);
    },
    prevAll: function prevAll(e) {
      var t = [];
      var s = this[0];
      if (!s) return d([]);

      for (; s.previousElementSibling;) {
        var _a6 = s.previousElementSibling;
        e ? d(_a6).is(e) && t.push(_a6) : t.push(_a6), s = _a6;
      }

      return d(t);
    },
    parent: function parent(e) {
      var t = [];

      for (var _s9 = 0; _s9 < this.length; _s9 += 1) {
        null !== this[_s9].parentNode && (e ? d(this[_s9].parentNode).is(e) && t.push(this[_s9].parentNode) : t.push(this[_s9].parentNode));
      }

      return d(t);
    },
    parents: function parents(e) {
      var t = [];

      for (var _s10 = 0; _s10 < this.length; _s10 += 1) {
        var _a7 = this[_s10].parentNode;

        for (; _a7;) {
          e ? d(_a7).is(e) && t.push(_a7) : t.push(_a7), _a7 = _a7.parentNode;
        }
      }

      return d(t);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      var t = [];

      for (var _s11 = 0; _s11 < this.length; _s11 += 1) {
        var _a8 = this[_s11].querySelectorAll(e);

        for (var _e14 = 0; _e14 < _a8.length; _e14 += 1) {
          t.push(_a8[_e14]);
        }
      }

      return d(t);
    },
    children: function children(e) {
      var t = [];

      for (var _s12 = 0; _s12 < this.length; _s12 += 1) {
        var _a9 = this[_s12].children;

        for (var _s13 = 0; _s13 < _a9.length; _s13 += 1) {
          e && !d(_a9[_s13]).is(e) || t.push(_a9[_s13]);
        }
      }

      return d(t);
    },
    filter: function filter(e) {
      return d(o(this, e));
    },
    remove: function remove() {
      for (var _e15 = 0; _e15 < this.length; _e15 += 1) {
        this[_e15].parentNode && this[_e15].parentNode.removeChild(this[_e15]);
      }

      return this;
    }
  };

  function p(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }

  function u() {
    return Date.now();
  }

  function h(e, t) {
    void 0 === t && (t = "x");
    var s = r();
    var a, i, n;

    var l = function (e) {
      var t = r();
      var s;
      return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
    }(e);

    return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
  }

  function m(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }

  function f(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
  }

  function g() {
    var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];

    for (var _s14 = 1; _s14 < arguments.length; _s14 += 1) {
      var _a10 = _s14 < 0 || arguments.length <= _s14 ? void 0 : arguments[_s14];

      if (null != _a10 && !f(_a10)) {
        var _s15 = Object.keys(Object(_a10)).filter(function (e) {
          return t.indexOf(e) < 0;
        });

        for (var _t22 = 0, _i5 = _s15.length; _t22 < _i5; _t22 += 1) {
          var _i6 = _s15[_t22],
              _r = Object.getOwnPropertyDescriptor(_a10, _i6);

          void 0 !== _r && _r.enumerable && (m(e[_i6]) && m(_a10[_i6]) ? _a10[_i6].__swiper__ ? e[_i6] = _a10[_i6] : g(e[_i6], _a10[_i6]) : !m(e[_i6]) && m(_a10[_i6]) ? (e[_i6] = {}, _a10[_i6].__swiper__ ? e[_i6] = _a10[_i6] : g(e[_i6], _a10[_i6])) : e[_i6] = _a10[_i6]);
        }
      }
    }

    return e;
  }

  function v(e, t, s) {
    e.style.setProperty(t, s);
  }

  function w(e) {
    var t = e.swiper,
        s = e.targetPosition,
        a = e.side;
    var i = r(),
        n = -t.translate;
    var l,
        o = null;
    var d = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);

    var c = s > n ? "next" : "prev",
        p = function p(e, t) {
      return "next" === c && e >= t || "prev" === c && e <= t;
    },
        u = function u() {
      l = new Date().getTime(), null === o && (o = l);
      var e = Math.max(Math.min((l - o) / d, 1), 0),
          r = .5 - Math.cos(e * Math.PI) / 2;
      var c = n + r * (s - n);
      if (p(c, s) && (c = s), t.wrapperEl.scrollTo(_defineProperty({}, a, c)), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(function () {
        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo(_defineProperty({}, a, c));
      }), void i.cancelAnimationFrame(t.cssModeFrameID);
      t.cssModeFrameID = i.requestAnimationFrame(u);
    };

    u();
  }

  var b, x, y;

  function E() {
    return b || (b = function () {
      var e = r(),
          t = a();
      return {
        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        passiveListener: function () {
          var t = !1;

          try {
            var _s16 = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });

            e.addEventListener("testPassiveListener", null, _s16);
          } catch (e) {}

          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), b;
  }

  function C(e) {
    return void 0 === e && (e = {}), x || (x = function (e) {
      var _ref = void 0 === e ? {} : e,
          t = _ref.userAgent;

      var s = E(),
          a = r(),
          i = a.navigator.platform,
          n = t || a.navigator.userAgent,
          l = {
        ios: !1,
        android: !1
      },
          o = a.screen.width,
          d = a.screen.height,
          c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
      var p = n.match(/(iPad).*OS\s([\d_]+)/);
      var u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
          h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          m = "Win32" === i;
      var f = "MacIntel" === i;
      return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(o, "x").concat(d)) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l;
    }(e)), x;
  }

  function T() {
    return y || (y = function () {
      var e = r();
      return {
        isSafari: function () {
          var t = e.navigator.userAgent.toLowerCase();
          return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
        }(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
      };
    }()), y;
  }

  Object.keys(c).forEach(function (e) {
    Object.defineProperty(d.fn, e, {
      value: c[e],
      writable: !0
    });
  });
  var $ = {
    on: function on(e, t, s) {
      var a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      var i = s ? "unshift" : "push";
      return e.split(" ").forEach(function (e) {
        a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
      }), a;
    },
    once: function once(e, t, s) {
      var a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;

      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;

        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) {
          r[n] = arguments[n];
        }

        t.apply(a, r);
      }

      return i.__emitterProxy = t, a.on(e, i, s);
    },
    onAny: function onAny(e, t) {
      var s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      var a = t ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
    },
    offAny: function offAny(e) {
      var t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      var s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off: function off(e, t) {
      var s = this;
      return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach(function (e) {
        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(function (a, i) {
          (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
        });
      }), s) : s;
    },
    emit: function emit() {
      var e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      var t, s, a;

      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) {
        r[n] = arguments[n];
      }

      "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
      return (Array.isArray(t) ? t : t.split(" ")).forEach(function (t) {
        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(function (e) {
          e.apply(a, [t].concat(_toConsumableArray(s)));
        }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(function (e) {
          e.apply(a, s);
        });
      }), e;
    }
  };
  var S = {
    updateSize: function updateSize() {
      var e = this;
      var t, s;
      var a = e.$el;
      t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
      }));
    },
    updateSlides: function updateSlides() {
      var e = this;

      function t(t) {
        return e.isHorizontal() ? t : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom"
        }[t];
      }

      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }

      var a = e.params,
          i = e.$wrapperEl,
          r = e.size,
          n = e.rtlTranslate,
          l = e.wrongRTL,
          o = e.virtual && a.virtual.enabled,
          d = o ? e.virtual.slides.length : e.slides.length,
          c = i.children(".".concat(e.params.slideClass)),
          p = o ? e.virtual.slides.length : c.length;
      var u = [];
      var h = [],
          m = [];
      var f = a.slidesOffsetBefore;
      "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
      var g = a.slidesOffsetAfter;
      "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
      var w = e.snapGrid.length,
          b = e.slidesGrid.length;
      var x = a.spaceBetween,
          y = -f,
          E = 0,
          C = 0;
      if (void 0 === r) return;
      "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({
        marginLeft: "",
        marginBottom: "",
        marginTop: ""
      }) : c.css({
        marginRight: "",
        marginBottom: "",
        marginTop: ""
      }), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
      var T = a.grid && a.grid.rows > 1 && e.grid;
      var $;
      T && e.grid.initSlides(p);
      var S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(function (e) {
        return void 0 !== a.breakpoints[e].slidesPerView;
      }).length > 0;

      for (var _i7 = 0; _i7 < p; _i7 += 1) {
        $ = 0;

        var _n3 = c.eq(_i7);

        if (T && e.grid.updateSlide(_i7, _n3, p, t), "none" !== _n3.css("display")) {
          if ("auto" === a.slidesPerView) {
            S && (c[_i7].style[t("width")] = "");

            var _r2 = getComputedStyle(_n3[0]),
                _l2 = _n3[0].style.transform,
                _o2 = _n3[0].style.webkitTransform;

            if (_l2 && (_n3[0].style.transform = "none"), _o2 && (_n3[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? _n3.outerWidth(!0) : _n3.outerHeight(!0);else {
              var _e16 = s(_r2, "width"),
                  _t23 = s(_r2, "padding-left"),
                  _a11 = s(_r2, "padding-right"),
                  _i8 = s(_r2, "margin-left"),
                  _l3 = s(_r2, "margin-right"),
                  _o3 = _r2.getPropertyValue("box-sizing");

              if (_o3 && "border-box" === _o3) $ = _e16 + _i8 + _l3;else {
                var _n3$ = _n3[0],
                    _s17 = _n3$.clientWidth,
                    _r3 = _n3$.offsetWidth;
                $ = _e16 + _t23 + _a11 + _i8 + _l3 + (_r3 - _s17);
              }
            }
            _l2 && (_n3[0].style.transform = _l2), _o2 && (_n3[0].style.webkitTransform = _o2), a.roundLengths && ($ = Math.floor($));
          } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[_i7] && (c[_i7].style[t("width")] = "".concat($, "px"));

          c[_i7] && (c[_i7].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== _i7 && (y = y - r / 2 - x), 0 === _i7 && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), C % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, C += 1;
        }
      }

      if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
        width: "".concat(e.virtualSize + a.spaceBetween, "px")
      }), a.setWrapperSize && i.css(_defineProperty({}, t("width"), "".concat(e.virtualSize + a.spaceBetween, "px"))), T && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
        var _t24 = [];

        for (var _s18 = 0; _s18 < u.length; _s18 += 1) {
          var _i9 = u[_s18];
          a.roundLengths && (_i9 = Math.floor(_i9)), u[_s18] <= e.virtualSize - r && _t24.push(_i9);
        }

        u = _t24, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
      }

      if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
        var _s19 = e.isHorizontal() && n ? "marginLeft" : t("marginRight");

        c.filter(function (e, t) {
          return !a.cssMode || t !== c.length - 1;
        }).css(_defineProperty({}, _s19, "".concat(x, "px")));
      }

      if (a.centeredSlides && a.centeredSlidesBounds) {
        var _e17 = 0;
        m.forEach(function (t) {
          _e17 += t + (a.spaceBetween ? a.spaceBetween : 0);
        }), _e17 -= a.spaceBetween;

        var _t25 = _e17 - r;

        u = u.map(function (e) {
          return e < 0 ? -f : e > _t25 ? _t25 + g : e;
        });
      }

      if (a.centerInsufficientSlides) {
        var _e18 = 0;

        if (m.forEach(function (t) {
          _e18 += t + (a.spaceBetween ? a.spaceBetween : 0);
        }), _e18 -= a.spaceBetween, _e18 < r) {
          var _t26 = (r - _e18) / 2;

          u.forEach(function (e, s) {
            u[s] = e - _t26;
          }), h.forEach(function (e, s) {
            h[s] = e + _t26;
          });
        }
      }

      if (Object.assign(e, {
        slides: c,
        snapGrid: u,
        slidesGrid: h,
        slidesSizesGrid: m
      }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
        v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");

        var _t27 = -e.snapGrid[0],
            _s20 = -e.slidesGrid[0];

        e.snapGrid = e.snapGrid.map(function (e) {
          return e + _t27;
        }), e.slidesGrid = e.slidesGrid.map(function (e) {
          return e + _s20;
        });
      }

      if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
        var _t28 = "".concat(a.containerModifierClass, "backface-hidden"),
            _s21 = e.$el.hasClass(_t28);

        p <= a.maxBackfaceHiddenSlides ? _s21 || e.$el.addClass(_t28) : _s21 && e.$el.removeClass(_t28);
      }
    },
    updateAutoHeight: function updateAutoHeight(e) {
      var t = this,
          s = [],
          a = t.virtual && t.params.virtual.enabled;
      var i,
          r = 0;
      "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);

      var n = function n(e) {
        return a ? t.slides.filter(function (t) {
          return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
        })[0] : t.slides.eq(e)[0];
      };

      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
        if (t.params.centeredSlides) (t.visibleSlides || d([])).each(function (e) {
          s.push(e);
        });else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
          var _e19 = t.activeIndex + i;

          if (_e19 > t.slides.length && !a) break;
          s.push(n(_e19));
        }
      } else s.push(n(t.activeIndex));

      for (i = 0; i < s.length; i += 1) {
        if (void 0 !== s[i]) {
          var _e20 = s[i].offsetHeight;
          r = _e20 > r ? _e20 : r;
        }
      }

      (r || 0 === r) && t.$wrapperEl.css("height", "".concat(r, "px"));
    },
    updateSlidesOffset: function updateSlidesOffset() {
      var e = this,
          t = e.slides;

      for (var _s22 = 0; _s22 < t.length; _s22 += 1) {
        t[_s22].swiperSlideOffset = e.isHorizontal() ? t[_s22].offsetLeft : t[_s22].offsetTop;
      }
    },
    updateSlidesProgress: function updateSlidesProgress(e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this,
          s = t.params,
          a = t.slides,
          i = t.rtlTranslate,
          r = t.snapGrid;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      var n = -e;
      i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

      for (var _e21 = 0; _e21 < a.length; _e21 += 1) {
        var _l4 = a[_e21];
        var _o4 = _l4.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (_o4 -= a[0].swiperSlideOffset);

        var _d3 = (n + (s.centeredSlides ? t.minTranslate() : 0) - _o4) / (_l4.swiperSlideSize + s.spaceBetween),
            _c2 = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - _o4) / (_l4.swiperSlideSize + s.spaceBetween),
            _p = -(n - _o4),
            _u = _p + t.slidesSizesGrid[_e21];

        (_p >= 0 && _p < t.size - 1 || _u > 1 && _u <= t.size || _p <= 0 && _u >= t.size) && (t.visibleSlides.push(_l4), t.visibleSlidesIndexes.push(_e21), a.eq(_e21).addClass(s.slideVisibleClass)), _l4.progress = i ? -_d3 : _d3, _l4.originalProgress = i ? -_c2 : _c2;
      }

      t.visibleSlides = d(t.visibleSlides);
    },
    updateProgress: function updateProgress(e) {
      var t = this;

      if (void 0 === e) {
        var _s23 = t.rtlTranslate ? -1 : 1;

        e = t && t.translate && t.translate * _s23 || 0;
      }

      var s = t.params,
          a = t.maxTranslate() - t.minTranslate();
      var i = t.progress,
          r = t.isBeginning,
          n = t.isEnd;
      var l = r,
          o = n;
      0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
        progress: i,
        isBeginning: r,
        isEnd: n
      }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i);
    },
    updateSlidesClasses: function updateSlidesClasses() {
      var e = this,
          t = e.slides,
          s = e.params,
          a = e.$wrapperEl,
          i = e.activeIndex,
          r = e.realIndex,
          n = e.virtual && s.virtual.enabled;
      var l;
      t.removeClass("".concat(s.slideActiveClass, " ").concat(s.slideNextClass, " ").concat(s.slidePrevClass, " ").concat(s.slideDuplicateActiveClass, " ").concat(s.slideDuplicateNextClass, " ").concat(s.slideDuplicatePrevClass)), l = n ? e.$wrapperEl.find(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]")) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass));
      var o = l.nextAll(".".concat(s.slideClass)).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
      var d = l.prevAll(".".concat(s.slideClass)).eq(0).addClass(s.slidePrevClass);
      s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses();
    },
    updateActiveIndex: function updateActiveIndex(e) {
      var t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          a = t.slidesGrid,
          i = t.snapGrid,
          r = t.params,
          n = t.activeIndex,
          l = t.realIndex,
          o = t.snapIndex;
      var d,
          c = e;

      if (void 0 === c) {
        for (var _e22 = 0; _e22 < a.length; _e22 += 1) {
          void 0 !== a[_e22 + 1] ? s >= a[_e22] && s < a[_e22 + 1] - (a[_e22 + 1] - a[_e22]) / 2 ? c = _e22 : s >= a[_e22] && s < a[_e22 + 1] && (c = _e22 + 1) : s >= a[_e22] && (c = _e22);
        }

        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }

      if (i.indexOf(s) >= 0) d = i.indexOf(s);else {
        var _e23 = Math.min(r.slidesPerGroupSkip, c);

        d = _e23 + Math.floor((c - _e23) / r.slidesPerGroup);
      }
      if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
      var p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
      Object.assign(t, {
        snapIndex: d,
        realIndex: p,
        previousIndex: n,
        activeIndex: c
      }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function updateClickedSlide(e) {
      var t = this,
          s = t.params,
          a = d(e).closest(".".concat(s.slideClass))[0];
      var i,
          r = !1;
      if (a) for (var _e24 = 0; _e24 < t.slides.length; _e24 += 1) {
        if (t.slides[_e24] === a) {
          r = !0, i = _e24;
          break;
        }
      }
      if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
      t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    }
  };
  var M = {
    getTranslate: function getTranslate(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
          s = this.rtlTranslate,
          a = this.translate,
          i = this.$wrapperEl;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      var r = h(i[0], e);
      return s && (r = -r), r || 0;
    },
    setTranslate: function setTranslate(e, t) {
      var s = this,
          a = s.rtlTranslate,
          i = s.params,
          r = s.$wrapperEl,
          n = s.wrapperEl,
          l = s.progress;
      var o,
          d = 0,
          c = 0;
      s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform("translate3d(".concat(d, "px, ").concat(c, "px, 0px)")), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
      var p = s.maxTranslate() - s.minTranslate();
      o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    },
    maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function translateTo(e, t, s, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
      var r = this,
          n = r.params,
          l = r.wrapperEl;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      var o = r.minTranslate(),
          d = r.maxTranslate();
      var c;

      if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
        var _e25 = r.isHorizontal();

        if (0 === t) l[_e25 ? "scrollLeft" : "scrollTop"] = -c;else {
          var _l$scrollTo;

          if (!r.support.smoothScroll) return w({
            swiper: r,
            targetPosition: -c,
            side: _e25 ? "left" : "top"
          }), !0;
          l.scrollTo((_l$scrollTo = {}, _defineProperty(_l$scrollTo, _e25 ? "left" : "top", -c), _defineProperty(_l$scrollTo, "behavior", "smooth"), _l$scrollTo));
        }
        return !0;
      }

      return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
      }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
    }
  };

  function P(e) {
    var t = e.swiper,
        s = e.runCallbacks,
        a = e.direction,
        i = e.step;
    var r = t.activeIndex,
        n = t.previousIndex;
    var l = a;

    if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit("transition".concat(i)), s && r !== n) {
      if ("reset" === l) return void t.emit("slideResetTransition".concat(i));
      t.emit("slideChangeTransition".concat(i)), "next" === l ? t.emit("slideNextTransition".concat(i)) : t.emit("slidePrevTransition".concat(i));
    }
  }

  var k = {
    slideTo: function slideTo(e, t, s, a, i) {
      if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(_typeof(e), "] given."));

      if ("string" == typeof e) {
        var _t29 = parseInt(e, 10);

        if (!isFinite(_t29)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
        e = _t29;
      }

      var r = this;
      var n = e;
      n < 0 && (n = 0);
      var l = r.params,
          o = r.snapGrid,
          d = r.slidesGrid,
          c = r.previousIndex,
          p = r.activeIndex,
          u = r.rtlTranslate,
          h = r.wrapperEl,
          m = r.enabled;
      if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
      var f = Math.min(r.params.slidesPerGroupSkip, n);
      var g = f + Math.floor((n - f) / r.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
      var v = -o[g];
      if (r.updateProgress(v), l.normalizeSlideIndex) for (var _e26 = 0; _e26 < d.length; _e26 += 1) {
        var _t30 = -Math.floor(100 * v),
            _s24 = Math.floor(100 * d[_e26]),
            _a12 = Math.floor(100 * d[_e26 + 1]);

        void 0 !== d[_e26 + 1] ? _t30 >= _s24 && _t30 < _a12 - (_a12 - _s24) / 2 ? n = _e26 : _t30 >= _s24 && _t30 < _a12 && (n = _e26 + 1) : _t30 >= _s24 && (n = _e26);
      }

      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
        if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1;
      }

      var b;
      if (b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;

      if (l.cssMode) {
        var _e27 = r.isHorizontal(),
            _s25 = u ? v : -v;

        if (0 === t) {
          var _t31 = r.virtual && r.params.virtual.enabled;

          _t31 && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[_e27 ? "scrollLeft" : "scrollTop"] = _s25, _t31 && requestAnimationFrame(function () {
            r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1;
          });
        } else {
          var _h$scrollTo;

          if (!r.support.smoothScroll) return w({
            swiper: r,
            targetPosition: _s25,
            side: _e27 ? "left" : "top"
          }), !0;
          h.scrollTo((_h$scrollTo = {}, _defineProperty(_h$scrollTo, _e27 ? "left" : "top", _s25), _defineProperty(_h$scrollTo, "behavior", "smooth"), _h$scrollTo));
        }

        return !0;
      }

      return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
      }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0;
    },
    slideToLoop: function slideToLoop(e, t, s, a) {
      if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
        var _t32 = parseInt(e, 10);

        if (!isFinite(_t32)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
        e = _t32;
      }

      var i = this;
      var r = e;
      return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
    },
    slideNext: function slideNext(e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var a = this,
          i = a.animating,
          r = a.enabled,
          n = a.params;
      if (!r) return a;
      var l = n.slidesPerGroup;
      "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
      var o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;

      if (n.loop) {
        if (i && n.loopPreventsSlide) return !1;
        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
      }

      return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function slidePrev(e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var a = this,
          i = a.params,
          r = a.animating,
          n = a.snapGrid,
          l = a.slidesGrid,
          o = a.rtlTranslate,
          d = a.enabled;
      if (!d) return a;

      if (i.loop) {
        if (r && i.loopPreventsSlide) return !1;
        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
      }

      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }

      var p = c(o ? a.translate : -a.translate),
          u = n.map(function (e) {
        return c(e);
      });
      var h = n[u.indexOf(p) - 1];

      if (void 0 === h && i.cssMode) {
        var _e28;

        n.forEach(function (t, s) {
          p >= t && (_e28 = s);
        }), void 0 !== _e28 && (h = n[_e28 > 0 ? _e28 - 1 : _e28]);
      }

      var m = 0;

      if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
        var _i10 = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;

        return a.slideTo(_i10, e, t, s);
      }

      return a.slideTo(m, e, t, s);
    },
    slideReset: function slideReset(e, t, s) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function slideToClosest(e, t, s, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
      var i = this;
      var r = i.activeIndex;
      var n = Math.min(i.params.slidesPerGroupSkip, r),
          l = n + Math.floor((r - n) / i.params.slidesPerGroup),
          o = i.rtlTranslate ? i.translate : -i.translate;

      if (o >= i.snapGrid[l]) {
        var _e29 = i.snapGrid[l];
        o - _e29 > (i.snapGrid[l + 1] - _e29) * a && (r += i.params.slidesPerGroup);
      } else {
        var _e30 = i.snapGrid[l - 1];
        o - _e30 <= (i.snapGrid[l] - _e30) * a && (r -= i.params.slidesPerGroup);
      }

      return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
    },
    slideToClickedSlide: function slideToClickedSlide() {
      var e = this,
          t = e.params,
          s = e.$wrapperEl,
          a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      var i,
          r = e.clickedIndex;

      if (t.loop) {
        if (e.animating) return;
        i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), p(function () {
          e.slideTo(r);
        })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), p(function () {
          e.slideTo(r);
        })) : e.slideTo(r);
      } else e.slideTo(r);
    }
  };
  var z = {
    loopCreate: function loopCreate() {
      var e = this,
          t = a(),
          s = e.params,
          i = e.$wrapperEl,
          r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
      r.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass)).remove();
      var n = r.children(".".concat(s.slideClass));

      if (s.loopFillGroupWithBlank) {
        var _e31 = s.slidesPerGroup - n.length % s.slidesPerGroup;

        if (_e31 !== s.slidesPerGroup) {
          for (var _a13 = 0; _a13 < _e31; _a13 += 1) {
            var _e32 = d(t.createElement("div")).addClass("".concat(s.slideClass, " ").concat(s.slideBlankClass));

            r.append(_e32);
          }

          n = r.children(".".concat(s.slideClass));
        }
      }

      "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
      var l = [],
          o = [];
      n.each(function (t, s) {
        var a = d(t);
        s < e.loopedSlides && o.push(t), s < n.length && s >= n.length - e.loopedSlides && l.push(t), a.attr("data-swiper-slide-index", s);
      });

      for (var _e33 = 0; _e33 < o.length; _e33 += 1) {
        r.append(d(o[_e33].cloneNode(!0)).addClass(s.slideDuplicateClass));
      }

      for (var _e34 = l.length - 1; _e34 >= 0; _e34 -= 1) {
        r.prepend(d(l[_e34].cloneNode(!0)).addClass(s.slideDuplicateClass));
      }
    },
    loopFix: function loopFix() {
      var e = this;
      e.emit("beforeLoopFix");
      var t = e.activeIndex,
          s = e.slides,
          a = e.loopedSlides,
          i = e.allowSlidePrev,
          r = e.allowSlideNext,
          n = e.snapGrid,
          l = e.rtlTranslate;
      var o;
      e.allowSlidePrev = !0, e.allowSlideNext = !0;
      var d = -n[t] - e.getTranslate();

      if (t < a) {
        o = s.length - 3 * a + t, o += a;
        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
      } else if (t >= s.length - a) {
        o = -s.length + t + a, o += a;
        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
      }

      e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix");
    },
    loopDestroy: function loopDestroy() {
      var e = this.$wrapperEl,
          t = this.params,
          s = this.slides;
      e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), s.removeAttr("data-swiper-slide-index");
    }
  };

  function L(e) {
    var t = this,
        s = a(),
        i = r(),
        n = t.touchEventsData,
        l = t.params,
        o = t.touches,
        c = t.enabled;
    if (!c) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    var p = e;
    p.originalEvent && (p = p.originalEvent);
    var h = d(p.target);
    if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
    if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
    if (!n.isTouchEvent && "button" in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
    var m = l.noSwipingSelector ? l.noSwipingSelector : ".".concat(l.noSwipingClass),
        f = !(!p.target || !p.target.shadowRoot);
    if (l.noSwiping && (f ? function (e, t) {
      return void 0 === t && (t = this), function t(s) {
        if (!s || s === a() || s === r()) return null;
        s.assignedSlot && (s = s.assignedSlot);
        var i = s.closest(e);
        return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
      }(t);
    }(m, h[0]) : h.closest(m)[0])) return void (t.allowClick = !0);
    if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
    o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
    var g = o.currentX,
        v = o.currentY,
        w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
        b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;

    if (w && (g <= b || g >= i.innerWidth - b)) {
      if ("prevent" !== w) return;
      e.preventDefault();
    }

    if (Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), o.startX = g, o.startY = v, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
      var _e35 = !0;

      h.is(n.focusableElements) && (_e35 = !1, "SELECT" === h[0].nodeName && (n.isTouched = !1)), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();

      var _a14 = _e35 && t.allowTouchMove && l.touchStartPreventDefault;

      !l.touchStartForcePreventDefault && !_a14 || h[0].isContentEditable || p.preventDefault();
    }

    t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p);
  }

  function O(e) {
    var t = a(),
        s = this,
        i = s.touchEventsData,
        r = s.params,
        n = s.touches,
        l = s.rtlTranslate,
        o = s.enabled;
    if (!o) return;
    var c = e;
    if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
    if (i.isTouchEvent && "touchmove" !== c.type) return;
    var p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
        h = "touchmove" === c.type ? p.pageX : c.pageX,
        m = "touchmove" === c.type ? p.pageY : c.pageY;
    if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
    if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
      startX: h,
      startY: m,
      currentX: h,
      currentY: m
    }), i.touchStartTime = u()));
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
      if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
    } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
    if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
    if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
    n.currentX = h, n.currentY = m;
    var f = n.currentX - n.startX,
        g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)) < s.params.threshold) return;

    if (void 0 === i.isScrolling) {
      var _e36;

      s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (_e36 = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? _e36 > r.touchAngle : 90 - _e36 > r.touchAngle);
    }

    if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
    var v = s.isHorizontal() ? f : g;
    n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
    var w = !0,
        b = r.resistanceRatio;

    if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + i.startTranslate + v, b))) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - i.startTranslate - v, b))), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
    }

    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
  }

  function I(e) {
    var t = this,
        s = t.touchEventsData,
        a = t.params,
        i = t.touches,
        r = t.rtlTranslate,
        n = t.slidesGrid,
        l = t.enabled;
    if (!l) return;
    var o = e;
    if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var d = u(),
        c = d - s.touchStartTime;

    if (t.allowClick) {
      var _e37 = o.path || o.composedPath && o.composedPath();

      t.updateClickedSlide(_e37 && _e37[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o);
    }

    if (s.lastClickTime = u(), p(function () {
      t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    var h;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
    if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
      currentPos: h
    });
    var m = 0,
        f = t.slidesSizesGrid[0];

    for (var _e38 = 0; _e38 < n.length; _e38 += _e38 < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
      var _t33 = _e38 < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

      void 0 !== n[_e38 + _t33] ? h >= n[_e38] && h < n[_e38 + _t33] && (m = _e38, f = n[_e38 + _t33] - n[_e38]) : h >= n[_e38] && (m = _e38, f = n[n.length - 1] - n[n.length - 2]);
    }

    var g = null,
        v = null;
    a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
    var w = (h - n[m]) / f,
        b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

    if (c > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m));
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
    }
  }

  function A() {
    var e = this,
        t = e.params,
        s = e.el;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    var a = e.allowSlideNext,
        i = e.allowSlidePrev,
        r = e.snapGrid;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }

  function D(e) {
    var t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }

  function G() {
    var e = this,
        t = e.wrapperEl,
        s = e.rtlTranslate,
        a = e.enabled;
    if (!a) return;
    var i;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    var r = e.maxTranslate() - e.minTranslate();
    i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }

  var N = !1;

  function B() {}

  var H = function H(e, t) {
    var s = a(),
        i = e.params,
        r = e.touchEvents,
        n = e.el,
        l = e.wrapperEl,
        o = e.device,
        d = e.support,
        c = !!i.nested,
        p = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;

    if (d.touch) {
      var _t34 = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
        passive: !0,
        capture: !1
      };

      n[p](r.start, e.onTouchStart, _t34), n[p](r.move, e.onTouchMove, d.passiveListener ? {
        passive: !1,
        capture: c
      } : c), n[p](r.end, e.onTouchEnd, _t34), r.cancel && n[p](r.cancel, e.onTouchEnd, _t34);
    } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);

    (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0);
  };

  var X = {
    attachEvents: function attachEvents() {
      var e = this,
          t = a(),
          s = e.params,
          i = e.support;
      e.onTouchStart = L.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !N && (t.addEventListener("touchstart", B), N = !0), H(e, "on");
    },
    detachEvents: function detachEvents() {
      H(this, "off");
    }
  };

  var Y = function Y(e, t) {
    return e.grid && t.grid && t.grid.rows > 1;
  };

  var R = {
    addClasses: function addClasses() {
      var e = this,
          t = e.classNames,
          s = e.params,
          a = e.rtl,
          i = e.$el,
          r = e.device,
          n = e.support,
          l = function (e, t) {
        var s = [];
        return e.forEach(function (e) {
          "object" == _typeof(e) ? Object.keys(e).forEach(function (a) {
            e[a] && s.push(t + a);
          }) : "string" == typeof e && s.push(t + e);
        }), s;
      }(["initialized", s.direction, {
        "pointer-events": !n.touch
      }, {
        "free-mode": e.params.freeMode && s.freeMode.enabled
      }, {
        autoheight: s.autoHeight
      }, {
        rtl: a
      }, {
        grid: s.grid && s.grid.rows > 1
      }, {
        "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
      }, {
        android: r.android
      }, {
        ios: r.ios
      }, {
        "css-mode": s.cssMode
      }, {
        centered: s.cssMode && s.centeredSlides
      }, {
        "watch-progress": s.watchSlidesProgress
      }], s.containerModifierClass);

      t.push.apply(t, _toConsumableArray(l)), i.addClass(_toConsumableArray(t).join(" ")), e.emitContainerClasses();
    },
    removeClasses: function removeClasses() {
      var e = this.$el,
          t = this.classNames;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    }
  };
  var W = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };

  function j(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      var a = Object.keys(s)[0],
          i = s[a];
      "object" == _typeof(i) && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
        auto: !0
      }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
        enabled: !0
      }), "object" != _typeof(e[a]) || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
        enabled: !1
      }), g(t, s)) : g(t, s)) : g(t, s);
    };
  }

  var _ = {
    eventsEmitter: $,
    update: S,
    translate: M,
    transition: {
      setTransition: function setTransition(e, t) {
        var s = this;
        s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart(e, t) {
        void 0 === e && (e = !0);
        var s = this,
            a = s.params;
        a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({
          swiper: s,
          runCallbacks: e,
          direction: t,
          step: "Start"
        }));
      },
      transitionEnd: function transitionEnd(e, t) {
        void 0 === e && (e = !0);
        var s = this,
            a = s.params;
        s.animating = !1, a.cssMode || (s.setTransition(0), P({
          swiper: s,
          runCallbacks: e,
          direction: t,
          step: "End"
        }));
      }
    },
    slide: k,
    loop: z,
    grabCursor: {
      setGrabCursor: function setGrabCursor(e) {
        var t = this;
        if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
        var s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
        s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab";
      },
      unsetGrabCursor: function unsetGrabCursor() {
        var e = this;
        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
      }
    },
    events: X,
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this,
            t = e.activeIndex,
            s = e.initialized,
            _e$loopedSlides = e.loopedSlides,
            a = _e$loopedSlides === void 0 ? 0 : _e$loopedSlides,
            i = e.params,
            r = e.$el,
            n = i.breakpoints;
        if (!n || n && 0 === Object.keys(n).length) return;
        var l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
        if (!l || e.currentBreakpoint === l) return;
        var o = (l in n ? n[l] : void 0) || e.originalParams,
            d = Y(e, i),
            c = Y(e, o),
            p = i.enabled;
        d && !c ? (r.removeClass("".concat(i.containerModifierClass, "grid ").concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !d && c && (r.addClass("".concat(i.containerModifierClass, "grid")), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass("".concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(function (t) {
          var s = i[t] && i[t].enabled,
              a = o[t] && o[t].enabled;
          s && !a && e[t].disable(), !s && a && e[t].enable();
        });
        var u = o.direction && o.direction !== i.direction,
            h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
        u && s && e.changeDirection(), g(e.params, o);
        var m = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev
        }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
      },
      getBreakpoint: function getBreakpoint(e, t, s) {
        if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
        var a = !1;
        var i = r(),
            n = "window" === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map(function (e) {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            var _t35 = parseFloat(e.substr(1));

            return {
              value: n * _t35,
              point: e
            };
          }

          return {
            value: e,
            point: e
          };
        });
        l.sort(function (e, t) {
          return parseInt(e.value, 10) - parseInt(t.value, 10);
        });

        for (var _e39 = 0; _e39 < l.length; _e39 += 1) {
          var _l$_e = l[_e39],
              _r4 = _l$_e.point,
              _n4 = _l$_e.value;
          "window" === t ? i.matchMedia("(min-width: ".concat(_n4, "px)")).matches && (a = _r4) : _n4 <= s.clientWidth && (a = _r4);
        }

        return a || "max";
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this,
            t = e.isLocked,
            s = e.params,
            a = s.slidesOffsetBefore;

        if (a) {
          var _t36 = e.slides.length - 1,
              _s26 = e.slidesGrid[_t36] + e.slidesSizesGrid[_t36] + 2 * a;

          e.isLocked = e.size > _s26;
        } else e.isLocked = 1 === e.snapGrid.length;

        !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
      }
    },
    classes: R,
    images: {
      loadImage: function loadImage(e, t, s, a, i, n) {
        var l = r();
        var o;

        function c() {
          n && n();
        }

        d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image(), o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var _s27 = 0; _s27 < e.imagesToLoad.length; _s27 += 1) {
          var _a15 = e.imagesToLoad[_s27];
          e.loadImage(_a15, _a15.currentSrc || _a15.getAttribute("src"), _a15.srcset || _a15.getAttribute("srcset"), _a15.sizes || _a15.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      q = {};

  var V =
  /*#__PURE__*/
  function () {
    function V() {
      var _a16, _a17, _r$modules;

      _classCallCheck(this, V);

      var e, t;

      for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) {
        a[i] = arguments[i];
      }

      if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : (_a16 = a, _a17 = _slicedToArray(_a16, 2), e = _a17[0], t = _a17[1], _a16), t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
        var _e40 = [];
        return d(t.el).each(function (s) {
          var a = g({}, t, {
            el: s
          });

          _e40.push(new V(a));
        }), _e40;
      }

      var r = this;
      r.__swiper__ = !0, r.support = E(), r.device = C({
        userAgent: t.userAgent
      }), r.browser = T(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = _toConsumableArray(r.__modules__), t.modules && Array.isArray(t.modules) && (_r$modules = r.modules).push.apply(_r$modules, _toConsumableArray(t.modules));
      var n = {};
      r.modules.forEach(function (e) {
        e({
          swiper: r,
          extendParams: j(t, n),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r)
        });
      });
      var l = g({}, W, n);
      return r.params = g({}, l, q, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach(function (e) {
        r.on(e, r.params.on[e]);
      }), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d, Object.assign(r, {
        enabled: r.params.enabled,
        el: e,
        classNames: [],
        slides: d(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === r.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === r.params.direction;
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: r.params.allowSlideNext,
        allowSlidePrev: r.params.allowSlidePrev,
        touchEvents: function () {
          var e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
          return r.touchEventsTouch = {
            start: e[0],
            move: e[1],
            end: e[2],
            cancel: e[3]
          }, r.touchEventsDesktop = {
            start: t[0],
            move: t[1],
            end: t[2]
          }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: r.params.focusableElements,
          lastClickTime: u(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: r.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), r.emit("_swiper"), r.params.init && r.init(), r;
    }

    _createClass(V, [{
      key: "enable",
      value: function enable() {
        var e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
      }
    }, {
      key: "disable",
      value: function disable() {
        var e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
      }
    }, {
      key: "setProgress",
      value: function setProgress(e, t) {
        var s = this;
        e = Math.min(Math.max(e, 0), 1);
        var a = s.minTranslate(),
            i = (s.maxTranslate() - a) * e + a;
        s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
      }
    }, {
      key: "emitContainerClasses",
      value: function emitContainerClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, {
      key: "getSlideClasses",
      value: function getSlideClasses(e) {
        var t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }
    }, {
      key: "emitSlidesClasses",
      value: function emitSlidesClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = [];
        e.slides.each(function (s) {
          var a = e.getSlideClasses(s);
          t.push({
            slideEl: s,
            classNames: a
          }), e.emit("_slideClass", s, a);
        }), e.emit("_slideClasses", t);
      }
    }, {
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        var s = this.params,
            a = this.slides,
            i = this.slidesGrid,
            r = this.slidesSizesGrid,
            n = this.size,
            l = this.activeIndex;
        var o = 1;

        if (s.centeredSlides) {
          var _e41,
              _t37 = a[l].swiperSlideSize;

          for (var _s28 = l + 1; _s28 < a.length; _s28 += 1) {
            a[_s28] && !_e41 && (_t37 += a[_s28].swiperSlideSize, o += 1, _t37 > n && (_e41 = !0));
          }

          for (var _s29 = l - 1; _s29 >= 0; _s29 -= 1) {
            a[_s29] && !_e41 && (_t37 += a[_s29].swiperSlideSize, o += 1, _t37 > n && (_e41 = !0));
          }
        } else if ("current" === e) for (var _e42 = l + 1; _e42 < a.length; _e42 += 1) {
          (t ? i[_e42] + r[_e42] - i[l] < n : i[_e42] - i[l] < n) && (o += 1);
        } else for (var _e43 = l - 1; _e43 >= 0; _e43 -= 1) {
          i[l] - i[_e43] < n && (o += 1);
        }

        return o;
      }
    }, {
      key: "update",
      value: function update() {
        var e = this;
        if (!e || e.destroyed) return;
        var t = e.snapGrid,
            s = e.params;

        function a() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        var i;
        s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(e, t) {
        void 0 === t && (t = !0);
        var s = this,
            a = s.params.direction;
        return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass("".concat(s.params.containerModifierClass).concat(a)).addClass("".concat(s.params.containerModifierClass).concat(e)), s.emitContainerClasses(), s.params.direction = e, s.slides.each(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), s.emit("changeDirection"), t && s.update()), s;
      }
    }, {
      key: "mount",
      value: function mount(e) {
        var t = this;
        if (t.mounted) return !0;
        var s = d(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;

        var i = function i() {
          return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
        };

        var r = function () {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            var _t38 = d(e.shadowRoot.querySelector(i()));

            return _t38.children = function (e) {
              return s.children(e);
            }, _t38;
          }

          return s.children ? s.children(i()) : d(s).children(i());
        }();

        if (0 === r.length && t.params.createElements) {
          var _e44 = a().createElement("div");

          r = d(_e44), _e44.className = t.params.wrapperClass, s.append(_e44), s.children(".".concat(t.params.slideClass)).each(function (e) {
            r.append(e);
          });
        }

        return Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: r,
          wrapperEl: r[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === r.css("display")
        }), !0;
      }
    }, {
      key: "init",
      value: function init(e) {
        var t = this;
        if (t.initialized) return t;
        return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
      }
    }, {
      key: "destroy",
      value: function destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var s = this,
            a = s.params,
            i = s.$el,
            r = s.$wrapperEl,
            n = s.slides;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
          s.off(e);
        }), !1 !== e && (s.$el[0].swiper = null, function (e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null;
            } catch (e) {}

            try {
              delete t[e];
            } catch (e) {}
          });
        }(s)), s.destroyed = !0), null;
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(e) {
        g(q, e);
      }
    }, {
      key: "installModule",
      value: function installModule(e) {
        V.prototype.__modules__ || (V.prototype.__modules__ = []);
        var t = V.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
    }, {
      key: "use",
      value: function use(e) {
        return Array.isArray(e) ? (e.forEach(function (e) {
          return V.installModule(e);
        }), V) : (V.installModule(e), V);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return q;
      }
    }, {
      key: "defaults",
      get: function get() {
        return W;
      }
    }]);

    return V;
  }();

  function F(e, t, s, i) {
    var r = a();
    return e.params.createElements && Object.keys(i).forEach(function (a) {
      if (!s[a] && !0 === s.auto) {
        var _n5 = e.$el.children(".".concat(i[a]))[0];
        _n5 || (_n5 = r.createElement("div"), _n5.className = i[a], e.$el.append(_n5)), s[a] = _n5, t[a] = _n5;
      }
    }), s;
  }

  function U(e) {
    return void 0 === e && (e = ""), ".".concat(e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, "."));
  }

  function K(e) {
    var t = this,
        s = t.$wrapperEl,
        a = t.params;
    if (a.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var _t39 = 0; _t39 < e.length; _t39 += 1) {
      e[_t39] && s.append(e[_t39]);
    } else s.append(e);
    a.loop && t.loopCreate(), a.observer || t.update();
  }

  function Z(e) {
    var t = this,
        s = t.params,
        a = t.$wrapperEl,
        i = t.activeIndex;
    s.loop && t.loopDestroy();
    var r = i + 1;

    if ("object" == _typeof(e) && "length" in e) {
      for (var _t40 = 0; _t40 < e.length; _t40 += 1) {
        e[_t40] && a.prepend(e[_t40]);
      }

      r = i + e.length;
    } else a.prepend(e);

    s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
  }

  function Q(e, t) {
    var s = this,
        a = s.$wrapperEl,
        i = s.params,
        r = s.activeIndex;
    var n = r;
    i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(".".concat(i.slideClass)));
    var l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    var o = n > e ? n + 1 : n;
    var d = [];

    for (var _t41 = l - 1; _t41 >= e; _t41 -= 1) {
      var _e45 = s.slides.eq(_t41);

      _e45.remove(), d.unshift(_e45);
    }

    if ("object" == _typeof(t) && "length" in t) {
      for (var _e46 = 0; _e46 < t.length; _e46 += 1) {
        t[_e46] && a.append(t[_e46]);
      }

      o = n > e ? n + t.length : n;
    } else a.append(t);

    for (var _e47 = 0; _e47 < d.length; _e47 += 1) {
      a.append(d[_e47]);
    }

    i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }

  function J(e) {
    var t = this,
        s = t.params,
        a = t.$wrapperEl,
        i = t.activeIndex;
    var r = i;
    s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(".".concat(s.slideClass)));
    var n,
        l = r;

    if ("object" == _typeof(e) && "length" in e) {
      for (var _s30 = 0; _s30 < e.length; _s30 += 1) {
        n = e[_s30], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
      }

      l = Math.max(l, 0);
    } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);

    s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }

  function ee() {
    var e = this,
        t = [];

    for (var _s31 = 0; _s31 < e.slides.length; _s31 += 1) {
      t.push(_s31);
    }

    e.removeSlide(t);
  }

  function te(e) {
    var t = e.effect,
        s = e.swiper,
        a = e.on,
        i = e.setTranslate,
        r = e.setTransition,
        n = e.overwriteParams,
        l = e.perspective,
        o = e.recreateShadows,
        d = e.getEffectParams;
    var c;
    a("beforeInit", function () {
      if (s.params.effect !== t) return;
      s.classNames.push("".concat(s.params.containerModifierClass).concat(t)), l && l() && s.classNames.push("".concat(s.params.containerModifierClass, "3d"));
      var e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }), a("setTranslate", function () {
      s.params.effect === t && i();
    }), a("setTransition", function (e, a) {
      s.params.effect === t && r(a);
    }), a("transitionEnd", function () {
      if (s.params.effect === t && o) {
        if (!d || !d().slideShadows) return;
        s.slides.each(function (e) {
          s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
        }), o();
      }
    }), a("virtualUpdate", function () {
      s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame(function () {
        c && s.slides && s.slides.length && (i(), c = !1);
      }));
    });
  }

  function se(e, t) {
    return e.transformEl ? t.find(e.transformEl).css({
      "backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden"
    }) : t;
  }

  function ae(e) {
    var t = e.swiper,
        s = e.duration,
        a = e.transformEl,
        i = e.allSlides;
    var r = t.slides,
        n = t.activeIndex,
        l = t.$wrapperEl;

    if (t.params.virtualTranslate && 0 !== s) {
      var _e48,
          _s32 = !1;

      _e48 = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), _e48.transitionEnd(function () {
        if (_s32) return;
        if (!t || t.destroyed) return;
        _s32 = !0, t.animating = !1;
        var e = ["webkitTransitionEnd", "transitionend"];

        for (var _t42 = 0; _t42 < e.length; _t42 += 1) {
          l.trigger(e[_t42]);
        }
      });
    }
  }

  function ie(e, t, s) {
    var a = "swiper-slide-shadow" + (s ? "-".concat(s) : ""),
        i = e.transformEl ? t.find(e.transformEl) : t;
    var r = i.children(".".concat(a));
    return r.length || (r = d("<div class=\"swiper-slide-shadow".concat(s ? "-".concat(s) : "", "\"></div>")), i.append(r)), r;
  }

  Object.keys(_).forEach(function (e) {
    Object.keys(_[e]).forEach(function (t) {
      V.prototype[t] = _[e][t];
    });
  }), V.use([function (e) {
    var t = e.swiper,
        s = e.on,
        a = e.emit;
    var i = r();
    var n = null,
        l = null;

    var o = function o() {
      t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"));
    },
        d = function d() {
      t && !t.destroyed && t.initialized && a("orientationchange");
    };

    s("init", function () {
      t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver(function (e) {
        l = i.requestAnimationFrame(function () {
          var s = t.width,
              a = t.height;
          var i = s,
              r = a;
          e.forEach(function (e) {
            var s = e.contentBoxSize,
                a = e.contentRect,
                n = e.target;
            n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize);
          }), i === s && r === a || o();
        });
      }), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d));
    }), s("destroy", function () {
      l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d);
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;

    var n = [],
        l = r(),
        o = function o(e, t) {
      void 0 === t && (t = {});
      var s = new (l.MutationObserver || l.WebkitMutationObserver)(function (e) {
        if (1 === e.length) return void i("observerUpdate", e[0]);

        var t = function t() {
          i("observerUpdate", e[0]);
        };

        l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0);
      });
      s.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), n.push(s);
    };

    s({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), a("init", function () {
      if (t.params.observer) {
        if (t.params.observeParents) {
          var _e49 = t.$el.parents();

          for (var _t43 = 0; _t43 < _e49.length; _t43 += 1) {
            o(_e49[_t43]);
          }
        }

        o(t.$el[0], {
          childList: t.params.observeSlideChildren
        }), o(t.$wrapperEl[0], {
          attributes: !1
        });
      }
    }), a("destroy", function () {
      n.forEach(function (e) {
        e.disconnect();
      }), n.splice(0, n.length);
    });
  }]);
  var re = [function (e) {
    var t,
        s = e.swiper,
        a = e.extendParams,
        i = e.on,
        r = e.emit;

    function n(e, t) {
      var a = s.params.virtual;
      if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
      var i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d("<div class=\"".concat(s.params.slideClass, "\" data-swiper-slide-index=\"").concat(t, "\">").concat(e, "</div>"));
      return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i;
    }

    function l(e) {
      var _s$params = s.params,
          t = _s$params.slidesPerView,
          a = _s$params.slidesPerGroup,
          i = _s$params.centeredSlides,
          _s$params$virtual = s.params.virtual,
          l = _s$params$virtual.addSlidesBefore,
          o = _s$params$virtual.addSlidesAfter,
          _s$virtual = s.virtual,
          d = _s$virtual.from,
          c = _s$virtual.to,
          p = _s$virtual.slides,
          u = _s$virtual.slidesGrid,
          h = _s$virtual.offset;
      s.params.cssMode || s.updateActiveIndex();
      var m = s.activeIndex || 0;
      var f, g, v;
      f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (g = Math.floor(t / 2) + a + o, v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o, v = a + l);
      var w = Math.max((m || 0) - v, 0),
          b = Math.min((m || 0) + g, p.length - 1),
          x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);

      function y() {
        s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate");
      }

      if (Object.assign(s.virtual, {
        from: w,
        to: b,
        offset: x,
        slidesGrid: s.slidesGrid
      }), d === w && c === b && !e) return s.slidesGrid !== u && x !== h && s.slides.css(f, "".concat(x, "px")), s.updateProgress(), void r("virtualUpdate");
      if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
        offset: x,
        from: w,
        to: b,
        slides: function () {
          var e = [];

          for (var _t44 = w; _t44 <= b; _t44 += 1) {
            e.push(p[_t44]);
          }

          return e;
        }()
      }), void (s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
      var E = [],
          C = [];
      if (e) s.$wrapperEl.find(".".concat(s.params.slideClass)).remove();else for (var _e50 = d; _e50 <= c; _e50 += 1) {
        (_e50 < w || _e50 > b) && s.$wrapperEl.find(".".concat(s.params.slideClass, "[data-swiper-slide-index=\"").concat(_e50, "\"]")).remove();
      }

      for (var _t45 = 0; _t45 < p.length; _t45 += 1) {
        _t45 >= w && _t45 <= b && (void 0 === c || e ? C.push(_t45) : (_t45 > c && C.push(_t45), _t45 < d && E.push(_t45)));
      }

      C.forEach(function (e) {
        s.$wrapperEl.append(n(p[e], e));
      }), E.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        s.$wrapperEl.prepend(n(p[e], e));
      }), s.$wrapperEl.children(".swiper-slide").css(f, "".concat(x, "px")), y();
    }

    a({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    }), s.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    }, i("beforeInit", function () {
      s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push("".concat(s.params.containerModifierClass, "virtual")), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || l());
    }), i("setTranslate", function () {
      s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout(function () {
        l();
      }, 100)) : l());
    }), i("init update resize", function () {
      s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", "".concat(s.virtualSize, "px"));
    }), Object.assign(s.virtual, {
      appendSlide: function appendSlide(e) {
        if ("object" == _typeof(e) && "length" in e) for (var _t46 = 0; _t46 < e.length; _t46 += 1) {
          e[_t46] && s.virtual.slides.push(e[_t46]);
        } else s.virtual.slides.push(e);
        l(!0);
      },
      prependSlide: function prependSlide(e) {
        var t = s.activeIndex;
        var a = t + 1,
            i = 1;

        if (Array.isArray(e)) {
          for (var _t47 = 0; _t47 < e.length; _t47 += 1) {
            e[_t47] && s.virtual.slides.unshift(e[_t47]);
          }

          a = t + e.length, i = e.length;
        } else s.virtual.slides.unshift(e);

        if (s.params.virtual.cache) {
          var _e51 = s.virtual.cache,
              _t48 = {};
          Object.keys(_e51).forEach(function (s) {
            var a = _e51[s],
                r = a.attr("data-swiper-slide-index");
            r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), _t48[parseInt(s, 10) + i] = a;
          }), s.virtual.cache = _t48;
        }

        l(!0), s.slideTo(a, 0);
      },
      removeSlide: function removeSlide(e) {
        if (null == e) return;
        var t = s.activeIndex;
        if (Array.isArray(e)) for (var _a18 = e.length - 1; _a18 >= 0; _a18 -= 1) {
          s.virtual.slides.splice(e[_a18], 1), s.params.virtual.cache && delete s.virtual.cache[e[_a18]], e[_a18] < t && (t -= 1), t = Math.max(t, 0);
        } else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
        l(!0), s.slideTo(t, 0);
      },
      removeAllSlides: function removeAllSlides() {
        s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), l(!0), s.slideTo(0, 0);
      },
      update: l
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        i = e.on,
        n = e.emit;
    var l = a(),
        o = r();

    function c(e) {
      if (!t.enabled) return;
      var s = t.rtlTranslate;
      var a = e;
      a.originalEvent && (a = a.originalEvent);
      var i = a.keyCode || a.charCode,
          r = t.params.keyboard.pageUpDown,
          d = r && 33 === i,
          c = r && 34 === i,
          p = 37 === i,
          u = 39 === i,
          h = 38 === i,
          m = 40 === i;
      if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
      if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1;

      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
        if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
          var _e52 = !1;

          if (t.$el.parents(".".concat(t.params.slideClass)).length > 0 && 0 === t.$el.parents(".".concat(t.params.slideActiveClass)).length) return;

          var _a19 = t.$el,
              _i11 = _a19[0].clientWidth,
              _r5 = _a19[0].clientHeight,
              _n6 = o.innerWidth,
              _l5 = o.innerHeight,
              _d4 = t.$el.offset();

          s && (_d4.left -= t.$el[0].scrollLeft);
          var _c3 = [[_d4.left, _d4.top], [_d4.left + _i11, _d4.top], [_d4.left, _d4.top + _r5], [_d4.left + _i11, _d4.top + _r5]];

          for (var _t49 = 0; _t49 < _c3.length; _t49 += 1) {
            var _s33 = _c3[_t49];

            if (_s33[0] >= 0 && _s33[0] <= _n6 && _s33[1] >= 0 && _s33[1] <= _l5) {
              if (0 === _s33[0] && 0 === _s33[1]) continue;
              _e52 = !0;
            }
          }

          if (!_e52) return;
        }

        t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), n("keyPress", i);
      }
    }

    function p() {
      t.keyboard.enabled || (d(l).on("keydown", c), t.keyboard.enabled = !0);
    }

    function u() {
      t.keyboard.enabled && (d(l).off("keydown", c), t.keyboard.enabled = !1);
    }

    t.keyboard = {
      enabled: !1
    }, s({
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    }), i("init", function () {
      t.params.keyboard.enabled && p();
    }), i("destroy", function () {
      t.keyboard.enabled && u();
    }), Object.assign(t.keyboard, {
      enable: p,
      disable: u
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;
    var n = r();
    var l;
    s({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null
      }
    }), t.mousewheel = {
      enabled: !1
    };
    var o,
        c = u();
    var h = [];

    function m() {
      t.enabled && (t.mouseEntered = !0);
    }

    function f() {
      t.enabled && (t.mouseEntered = !1);
    }

    function g(e) {
      return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && !(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), c = new n.Date().getTime(), !1));
    }

    function v(e) {
      var s = e,
          a = !0;
      if (!t.enabled) return;
      var r = t.params.mousewheel;
      t.params.cssMode && s.preventDefault();
      var n = t.$el;
      if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges) return !0;
      s.originalEvent && (s = s.originalEvent);
      var c = 0;

      var m = t.rtlTranslate ? -1 : 1,
          f = function (e) {
        var t = 0,
            s = 0,
            a = 0,
            i = 0;
        return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
          spinX: t,
          spinY: s,
          pixelX: a,
          pixelY: i
        };
      }(s);

      if (r.forceToAxis) {
        if (t.isHorizontal()) {
          if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
          c = -f.pixelX * m;
        } else {
          if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
          c = -f.pixelY;
        }
      } else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
      if (0 === c) return !0;
      r.invert && (c = -c);
      var v = t.getTranslate() + c * r.sensitivity;

      if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
        var _e53 = {
          time: u(),
          delta: Math.abs(c),
          direction: Math.sign(c)
        },
            _a20 = o && _e53.time < o.time + 500 && _e53.delta <= o.delta && _e53.direction === o.direction;

        if (!_a20) {
          o = void 0, t.params.loop && t.loopFix();

          var _n7 = t.getTranslate() + c * r.sensitivity;

          var _d5 = t.isBeginning,
              _u2 = t.isEnd;

          if (_n7 >= t.minTranslate() && (_n7 = t.minTranslate()), _n7 <= t.maxTranslate() && (_n7 = t.maxTranslate()), t.setTransition(0), t.setTranslate(_n7), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!_d5 && t.isBeginning || !_u2 && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
            clearTimeout(l), l = void 0, h.length >= 15 && h.shift();

            var _s34 = h.length ? h[h.length - 1] : void 0,
                _a21 = h[0];

            if (h.push(_e53), _s34 && (_e53.delta > _s34.delta || _e53.direction !== _s34.direction)) h.splice(0);else if (h.length >= 15 && _e53.time - _a21.time < 500 && _a21.delta - _e53.delta >= 1 && _e53.delta <= 6) {
              var _s35 = c > 0 ? .8 : .2;

              o = _e53, h.splice(0), l = p(function () {
                t.slideToClosest(t.params.speed, !0, void 0, _s35);
              }, 0);
            }
            l || (l = p(function () {
              o = _e53, h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5);
            }, 500));
          }

          if (_a20 || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), _n7 === t.minTranslate() || _n7 === t.maxTranslate()) return !0;
        }
      } else {
        var _s36 = {
          time: u(),
          delta: Math.abs(c),
          direction: Math.sign(c),
          raw: e
        };
        h.length >= 2 && h.shift();

        var _a22 = h.length ? h[h.length - 1] : void 0;

        if (h.push(_s36), _a22 ? (_s36.direction !== _a22.direction || _s36.delta > _a22.delta || _s36.time > _a22.time + 150) && g(_s36) : g(_s36), function (e) {
          var s = t.params.mousewheel;

          if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
          } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;

          return !1;
        }(_s36)) return !0;
      }

      return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1;
    }

    function w(e) {
      var s = t.$el;
      "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", v);
    }

    function b() {
      return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (w("on"), t.mousewheel.enabled = !0, !0);
    }

    function x() {
      return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (w("off"), t.mousewheel.enabled = !1, !0);
    }

    a("init", function () {
      !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b();
    }), a("destroy", function () {
      t.params.cssMode && b(), t.mousewheel.enabled && x();
    }), Object.assign(t.mousewheel, {
      enable: b,
      disable: x
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;

    function r(e) {
      var s;
      return e && (s = d(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s;
    }

    function n(e, s) {
      var a = t.params.navigation;
      e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass));
    }

    function l() {
      if (t.params.loop) return;
      var _t$navigation = t.navigation,
          e = _t$navigation.$nextEl,
          s = _t$navigation.$prevEl;
      n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind);
    }

    function o(e) {
      e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
    }

    function c(e) {
      e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
    }

    function p() {
      var e = t.params.navigation;
      if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !e.nextEl && !e.prevEl) return;
      var s = r(e.nextEl),
          a = r(e.prevEl);
      s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {
        $nextEl: s,
        nextEl: s && s[0],
        $prevEl: a,
        prevEl: a && a[0]
      }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
    }

    function u() {
      var _t$navigation2 = t.navigation,
          e = _t$navigation2.$nextEl,
          s = _t$navigation2.$prevEl;
      e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass));
    }

    s({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    }), t.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null
    }, a("init", function () {
      !1 === t.params.navigation.enabled ? h() : (p(), l());
    }), a("toEdge fromEdge lock unlock", function () {
      l();
    }), a("destroy", function () {
      u();
    }), a("enable disable", function () {
      var _t$navigation3 = t.navigation,
          e = _t$navigation3.$nextEl,
          s = _t$navigation3.$prevEl;
      e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
    }), a("click", function (e, s) {
      var _t$navigation4 = t.navigation,
          a = _t$navigation4.$nextEl,
          r = _t$navigation4.$prevEl,
          n = s.target;

      if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;

        var _e54;

        a ? _e54 = a.hasClass(t.params.navigation.hiddenClass) : r && (_e54 = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === _e54 ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass);
      }
    });

    var h = function h() {
      t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
    };

    Object.assign(t.navigation, {
      enable: function enable() {
        t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), l();
      },
      disable: h,
      update: l,
      init: p,
      destroy: u
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;
    var r = "swiper-pagination";
    var n;
    s({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "".concat(r, "-bullet"),
        bulletActiveClass: "".concat(r, "-bullet-active"),
        modifierClass: "".concat(r, "-"),
        currentClass: "".concat(r, "-current"),
        totalClass: "".concat(r, "-total"),
        hiddenClass: "".concat(r, "-hidden"),
        progressbarFillClass: "".concat(r, "-progressbar-fill"),
        progressbarOppositeClass: "".concat(r, "-progressbar-opposite"),
        clickableClass: "".concat(r, "-clickable"),
        lockClass: "".concat(r, "-lock"),
        horizontalClass: "".concat(r, "-horizontal"),
        verticalClass: "".concat(r, "-vertical"),
        paginationDisabledClass: "".concat(r, "-disabled")
      }
    }), t.pagination = {
      el: null,
      $el: null,
      bullets: []
    };
    var l = 0;

    function o() {
      return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length;
    }

    function c(e, s) {
      var a = t.params.pagination.bulletActiveClass;
      e[s]().addClass("".concat(a, "-").concat(s))[s]().addClass("".concat(a, "-").concat(s, "-").concat(s));
    }

    function p() {
      var e = t.rtl,
          s = t.params.pagination;
      if (o()) return;
      var a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
          r = t.pagination.$el;
      var p;
      var u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;

      if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
        var _a23 = t.pagination.bullets;

        var _i12, _o5, _u3;

        if (s.dynamicBullets && (n = _a23.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), _i12 = Math.max(p - l, 0), _o5 = _i12 + (Math.min(_a23.length, s.dynamicMainBullets) - 1), _u3 = (_o5 + _i12) / 2), _a23.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(function (e) {
          return "".concat(s.bulletActiveClass).concat(e);
        }).join(" ")), r.length > 1) _a23.each(function (e) {
          var t = d(e),
              a = t.index();
          a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= _i12 && a <= _o5 && t.addClass("".concat(s.bulletActiveClass, "-main")), a === _i12 && c(t, "prev"), a === _o5 && c(t, "next"));
        });else {
          var _e55 = _a23.eq(p),
              _r6 = _e55.index();

          if (_e55.addClass(s.bulletActiveClass), s.dynamicBullets) {
            var _e56 = _a23.eq(_i12),
                _n8 = _a23.eq(_o5);

            for (var _e57 = _i12; _e57 <= _o5; _e57 += 1) {
              _a23.eq(_e57).addClass("".concat(s.bulletActiveClass, "-main"));
            }

            if (t.params.loop) {
              if (_r6 >= _a23.length) {
                for (var _e58 = s.dynamicMainBullets; _e58 >= 0; _e58 -= 1) {
                  _a23.eq(_a23.length - _e58).addClass("".concat(s.bulletActiveClass, "-main"));
                }

                _a23.eq(_a23.length - s.dynamicMainBullets - 1).addClass("".concat(s.bulletActiveClass, "-prev"));
              } else c(_e56, "prev"), c(_n8, "next");
            } else c(_e56, "prev"), c(_n8, "next");
          }
        }

        if (s.dynamicBullets) {
          var _i13 = Math.min(_a23.length, s.dynamicMainBullets + 4),
              _r7 = (n * _i13 - n) / 2 - _u3 * n,
              _l6 = e ? "right" : "left";

          _a23.css(t.isHorizontal() ? _l6 : "top", "".concat(_r7, "px"));
        }
      }

      if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), r.find(U(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
        var _e59;

        _e59 = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";

        var _a24 = (p + 1) / u;

        var _i14 = 1,
            _n9 = 1;
        "horizontal" === _e59 ? _i14 = _a24 : _n9 = _a24, r.find(U(s.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_i14, ") scaleY(").concat(_n9, ")")).transition(t.params.speed);
      }

      "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
    }

    function u() {
      var e = t.params.pagination;
      if (o()) return;
      var s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
          a = t.pagination.$el;
      var r = "";

      if ("bullets" === e.type) {
        var _i15 = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;

        t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && _i15 > s && (_i15 = s);

        for (var _s37 = 0; _s37 < _i15; _s37 += 1) {
          e.renderBullet ? r += e.renderBullet.call(t, _s37, e.bulletClass) : r += "<".concat(e.bulletElement, " class=\"").concat(e.bulletClass, "\"></").concat(e.bulletElement, ">");
        }

        a.html(r), t.pagination.bullets = a.find(U(e.bulletClass));
      }

      "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : "<span class=\"".concat(e.currentClass, "\"></span> / <span class=\"").concat(e.totalClass, "\"></span>"), a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : "<span class=\"".concat(e.progressbarFillClass, "\"></span>"), a.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
    }

    function h() {
      t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {
        el: "swiper-pagination"
      });
      var e = t.params.pagination;
      if (!e.el) return;
      var s = d(e.el);
      0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter(function (e) {
        return d(e).parents(".swiper")[0] === t.el;
      }))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass("".concat(e.modifierClass).concat(e.type, "-dynamic")), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", U(e.bulletClass), function (e) {
        e.preventDefault();
        var s = d(this).index() * t.params.slidesPerGroup;
        t.params.loop && (s += t.loopedSlides), t.slideTo(s);
      }), Object.assign(t.pagination, {
        $el: s,
        el: s[0]
      }), t.enabled || s.addClass(e.lockClass));
    }

    function m() {
      var e = t.params.pagination;
      if (o()) return;
      var s = t.pagination.$el;
      s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", U(e.bulletClass));
    }

    a("init", function () {
      !1 === t.params.pagination.enabled ? f() : (h(), u(), p());
    }), a("activeIndexChange", function () {
      (t.params.loop || void 0 === t.snapIndex) && p();
    }), a("snapIndexChange", function () {
      t.params.loop || p();
    }), a("slidesLengthChange", function () {
      t.params.loop && (u(), p());
    }), a("snapGridLengthChange", function () {
      t.params.loop || (u(), p());
    }), a("destroy", function () {
      m();
    }), a("enable disable", function () {
      var e = t.pagination.$el;
      e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass);
    }), a("lock unlock", function () {
      p();
    }), a("click", function (e, s) {
      var a = s.target,
          r = t.pagination.$el;

      if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
        if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;

        var _e60 = r.hasClass(t.params.pagination.hiddenClass);

        i(!0 === _e60 ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass);
      }
    });

    var f = function f() {
      t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), m();
    };

    Object.assign(t.pagination, {
      enable: function enable() {
        t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), u(), p();
      },
      disable: f,
      render: u,
      update: p,
      init: h,
      destroy: m
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        i = e.on,
        r = e.emit;
    var n = a();
    var l,
        o,
        c,
        u,
        h = !1,
        m = null,
        f = null;

    function g() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      var e = t.scrollbar,
          s = t.rtlTranslate,
          a = t.progress,
          i = e.$dragEl,
          r = e.$el,
          n = t.params.scrollbar;
      var l = o,
          d = (c - o) * a;
      s ? (d = -d, d > 0 ? (l = o - d, d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d, d = 0) : d + o > c && (l = c - d), t.isHorizontal() ? (i.transform("translate3d(".concat(d, "px, 0, 0)")), i[0].style.width = "".concat(l, "px")) : (i.transform("translate3d(0px, ".concat(d, "px, 0)")), i[0].style.height = "".concat(l, "px")), n.hide && (clearTimeout(m), r[0].style.opacity = 1, m = setTimeout(function () {
        r[0].style.opacity = 0, r.transition(400);
      }, 1e3));
    }

    function v() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      var e = t.scrollbar,
          s = e.$dragEl,
          a = e.$el;
      s[0].style.width = "", s[0].style.height = "", c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = "".concat(o, "px") : s[0].style.height = "".concat(o, "px"), a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass);
    }

    function w(e) {
      return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
    }

    function b(e) {
      var s = t.scrollbar,
          a = t.rtlTranslate,
          i = s.$el;
      var r;
      r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
      var n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
      t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
    }

    function x(e) {
      var s = t.params.scrollbar,
          a = t.scrollbar,
          i = t.$wrapperEl,
          n = a.$el,
          o = a.$dragEl;
      h = !0, l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), b(e), clearTimeout(f), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e);
    }

    function y(e) {
      var s = t.scrollbar,
          a = t.$wrapperEl,
          i = s.$el,
          n = s.$dragEl;
      h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), a.transition(0), i.transition(0), n.transition(0), r("scrollbarDragMove", e));
    }

    function E(e) {
      var s = t.params.scrollbar,
          a = t.scrollbar,
          i = t.$wrapperEl,
          n = a.$el;
      h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = p(function () {
        n.css("opacity", 0), n.transition(400);
      }, 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
    }

    function C(e) {
      var s = t.scrollbar,
          a = t.touchEventsTouch,
          i = t.touchEventsDesktop,
          r = t.params,
          l = t.support,
          o = s.$el;
      if (!o) return;
      var d = o[0],
          c = !(!l.passiveListener || !r.passiveListeners) && {
        passive: !1,
        capture: !1
      },
          p = !(!l.passiveListener || !r.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      if (!d) return;
      var u = "on" === e ? "addEventListener" : "removeEventListener";
      l.touch ? (d[u](a.start, x, c), d[u](a.move, y, c), d[u](a.end, E, p)) : (d[u](i.start, x, c), n[u](i.move, y, c), n[u](i.end, E, p));
    }

    function T() {
      var e = t.scrollbar,
          s = t.$el;
      t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      var a = t.params.scrollbar;
      if (!a.el) return;
      var i = d(a.el);
      t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
      var r = i.find(".".concat(t.params.scrollbar.dragClass));
      0 === r.length && (r = d("<div class=\"".concat(t.params.scrollbar.dragClass, "\"></div>")), i.append(r)), Object.assign(e, {
        $el: i,
        el: i[0],
        $dragEl: r,
        dragEl: r[0]
      }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
    }

    function $() {
      var e = t.params.scrollbar,
          s = t.scrollbar.$el;
      s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && C("off");
    }

    s({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical"
      }
    }), t.scrollbar = {
      el: null,
      dragEl: null,
      $el: null,
      $dragEl: null
    }, i("init", function () {
      !1 === t.params.scrollbar.enabled ? S() : (T(), v(), g());
    }), i("update resize observerUpdate lock unlock", function () {
      v();
    }), i("setTranslate", function () {
      g();
    }), i("setTransition", function (e, s) {
      !function (e) {
        t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
      }(s);
    }), i("enable disable", function () {
      var e = t.scrollbar.$el;
      e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
    }), i("destroy", function () {
      $();
    });

    var S = function S() {
      t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), $();
    };

    Object.assign(t.scrollbar, {
      enable: function enable() {
        t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), T(), v(), g();
      },
      disable: S,
      updateSize: v,
      setTranslate: g,
      init: T,
      destroy: $
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      parallax: {
        enabled: !1
      }
    });

    var i = function i(e, s) {
      var a = t.rtl,
          i = d(e),
          r = a ? -1 : 1,
          n = i.attr("data-swiper-parallax") || "0";
      var l = i.attr("data-swiper-parallax-x"),
          o = i.attr("data-swiper-parallax-y");
      var c = i.attr("data-swiper-parallax-scale"),
          p = i.attr("data-swiper-parallax-opacity");

      if (l || o ? (l = l || "0", o = o || "0") : t.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
        var _e61 = p - (p - 1) * (1 - Math.abs(s));

        i[0].style.opacity = _e61;
      }

      if (null == c) i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px)"));else {
        var _e62 = c - (c - 1) * (1 - Math.abs(s));

        i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px) scale(").concat(_e62, ")"));
      }
    },
        r = function r() {
      var e = t.$el,
          s = t.slides,
          a = t.progress,
          r = t.snapGrid;
      e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
        i(e, a);
      }), s.each(function (e, s) {
        var n = e.progress;
        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
          i(e, n);
        });
      });
    };

    a("beforeInit", function () {
      t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0);
    }), a("init", function () {
      t.params.parallax.enabled && r();
    }), a("setTranslate", function () {
      t.params.parallax.enabled && r();
    }), a("setTransition", function (e, s) {
      t.params.parallax.enabled && function (e) {
        void 0 === e && (e = t.params.speed);
        var s = t.$el;
        s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          var s = d(t);
          var a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (a = 0), s.transition(a);
        });
      }(s);
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;
    var n = r();
    s({
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    }), t.zoom = {
      enabled: !1
    };
    var l,
        o,
        c,
        p = 1,
        u = !1;
    var m = {
      $slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      $imageEl: void 0,
      $imageWrapEl: void 0,
      maxRatio: 3
    },
        f = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {}
    },
        g = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0
    };
    var v = 1;

    function w(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          s = e.targetTouches[0].pageY,
          a = e.targetTouches[1].pageX,
          i = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(a - t, 2) + Math.pow(i - s, 2));
    }

    function b(e) {
      var s = t.support,
          a = t.params.zoom;

      if (o = !1, c = !1, !s.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        o = !0, m.scaleStart = w(e);
      }

      m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(".".concat(t.params.slideClass)), 0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(".".concat(a.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(".".concat(a.containerClass)), m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0), u = !0) : m.$imageEl = void 0;
    }

    function x(e) {
      var s = t.support,
          a = t.params.zoom,
          i = t.zoom;

      if (!s.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        c = !0, m.scaleMove = w(e);
      }

      m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + Math.pow(i.scale - m.maxRatio + 1, .5)), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)), m.$imageEl.transform("translate3d(0,0,0) scale(".concat(i.scale, ")"))) : "gesturechange" === e.type && b(e);
    }

    function y(e) {
      var s = t.device,
          a = t.support,
          i = t.params.zoom,
          r = t.zoom;

      if (!a.gestures) {
        if (!o || !c) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
        o = !1, c = !1;
      }

      m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio), m.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(".concat(r.scale, ")")), p = r.scale, u = !1, 1 === r.scale && (m.$slideEl = void 0));
    }

    function E(e) {
      var s = t.zoom;
      if (!m.$imageEl || 0 === m.$imageEl.length) return;
      if (t.allowClick = !1, !f.isTouched || !m.$slideEl) return;
      f.isMoved || (f.width = m.$imageEl[0].offsetWidth, f.height = m.$imageEl[0].offsetHeight, f.startX = h(m.$imageWrapEl[0], "x") || 0, f.startY = h(m.$imageWrapEl[0], "y") || 0, m.slideWidth = m.$slideEl[0].offsetWidth, m.slideHeight = m.$slideEl[0].offsetHeight, m.$imageWrapEl.transition(0));
      var a = f.width * s.scale,
          i = f.height * s.scale;

      if (!(a < m.slideWidth && i < m.slideHeight)) {
        if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !f.isMoved && !u) {
          if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void (f.isTouched = !1);
          if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void (f.isTouched = !1);
        }

        e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = !0, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - Math.pow(f.minX - f.currentX + 1, .8)), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + Math.pow(f.currentX - f.maxX + 1, .8)), f.currentY < f.minY && (f.currentY = f.minY + 1 - Math.pow(f.minY - f.currentY + 1, .8)), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + Math.pow(f.currentY - f.maxY + 1, .8)), g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = f.touchesCurrent.x, g.prevPositionY = f.touchesCurrent.y, g.prevTime = Date.now(), m.$imageWrapEl.transform("translate3d(".concat(f.currentX, "px, ").concat(f.currentY, "px,0)"));
      }
    }

    function C() {
      var e = t.zoom;
      m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"), m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, p = 1, m.$slideEl = void 0, m.$imageEl = void 0, m.$imageWrapEl = void 0);
    }

    function T(e) {
      var s = t.zoom,
          a = t.params.zoom;
      if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(".".concat(t.params.slideClass))), m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(".".concat(t.params.slideActiveClass)) : m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(".".concat(a.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(".".concat(a.containerClass))), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length) return;
      var i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
      t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.$slideEl.addClass("".concat(a.zoomedSlideClass)), void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y), s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? ($ = m.$slideEl[0].offsetWidth, S = m.$slideEl[0].offsetHeight, l = m.$slideEl.offset().left + n.scrollX, o = m.$slideEl.offset().top + n.scrollY, c = l + $ / 2 - i, u = o + S / 2 - r, v = m.$imageEl[0].offsetWidth, w = m.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), C = -y, T = -E, h = c * s.scale, g = u * s.scale, h < y && (h = y), h > C && (h = C), g < E && (g = E), g > T && (g = T)) : (h = 0, g = 0), m.$imageWrapEl.transition(300).transform("translate3d(".concat(h, "px, ").concat(g, "px,0)")), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(s.scale, ")"));
    }

    function $() {
      var e = t.zoom,
          s = t.params.zoom;
      m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(".".concat(t.params.slideActiveClass)) : m.$slideEl = t.slides.eq(t.activeIndex), m.$imageEl = m.$slideEl.find(".".concat(s.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(".".concat(s.containerClass))), m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, p = 1, m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m.$slideEl.removeClass("".concat(s.zoomedSlideClass)), m.$slideEl = void 0);
    }

    function S(e) {
      var s = t.zoom;
      s.scale && 1 !== s.scale ? $() : T(e);
    }

    function M() {
      var e = t.support;
      return {
        passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
        activeListenerWithCapture: !e.passiveListener || {
          passive: !1,
          capture: !0
        }
      };
    }

    function P() {
      return ".".concat(t.params.slideClass);
    }

    function k(e) {
      var _M = M(),
          s = _M.passiveListener,
          a = P();

      t.$wrapperEl[e]("gesturestart", a, b, s), t.$wrapperEl[e]("gesturechange", a, x, s), t.$wrapperEl[e]("gestureend", a, y, s);
    }

    function z() {
      l || (l = !0, k("on"));
    }

    function L() {
      l && (l = !1, k("off"));
    }

    function O() {
      var e = t.zoom;
      if (e.enabled) return;
      e.enabled = !0;

      var s = t.support,
          _M2 = M(),
          a = _M2.passiveListener,
          i = _M2.activeListenerWithCapture,
          r = P();

      s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a), t.$wrapperEl.on(t.touchEvents.move, r, x, i), t.$wrapperEl.on(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.on(t.touchEvents.move, ".".concat(t.params.zoom.containerClass), E, i);
    }

    function I() {
      var e = t.zoom;
      if (!e.enabled) return;
      var s = t.support;
      e.enabled = !1;

      var _M3 = M(),
          a = _M3.passiveListener,
          i = _M3.activeListenerWithCapture,
          r = P();

      s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a), t.$wrapperEl.off(t.touchEvents.move, r, x, i), t.$wrapperEl.off(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.off(t.touchEvents.move, ".".concat(t.params.zoom.containerClass), E, i);
    }

    Object.defineProperty(t.zoom, "scale", {
      get: function get() {
        return v;
      },
      set: function set(e) {
        if (v !== e) {
          var _t50 = m.$imageEl ? m.$imageEl[0] : void 0,
              _s38 = m.$slideEl ? m.$slideEl[0] : void 0;

          i("zoomChange", e, _t50, _s38);
        }

        v = e;
      }
    }), a("init", function () {
      t.params.zoom.enabled && O();
    }), a("destroy", function () {
      I();
    }), a("touchStart", function (e, s) {
      t.zoom.enabled && function (e) {
        var s = t.device;
        m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(), f.isTouched = !0, f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
      }(s);
    }), a("touchEnd", function (e, s) {
      t.zoom.enabled && function () {
        var e = t.zoom;
        if (!m.$imageEl || 0 === m.$imageEl.length) return;
        if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void (f.isMoved = !1);
        f.isTouched = !1, f.isMoved = !1;
        var s = 300,
            a = 300;
        var i = g.x * s,
            r = f.currentX + i,
            n = g.y * a,
            l = f.currentY + n;
        0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
        var o = Math.max(s, a);
        f.currentX = r, f.currentY = l;
        var d = f.width * e.scale,
            c = f.height * e.scale;
        f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.$imageWrapEl.transition(o).transform("translate3d(".concat(f.currentX, "px, ").concat(f.currentY, "px,0)"));
      }();
    }), a("doubleTap", function (e, s) {
      !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s);
    }), a("transitionEnd", function () {
      t.zoom.enabled && t.params.zoom.enabled && C();
    }), a("slideChange", function () {
      t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
    }), Object.assign(t.zoom, {
      enable: O,
      disable: I,
      "in": T,
      out: $,
      toggle: S
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;
    s({
      lazy: {
        checkInView: !1,
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    }), t.lazy = {};
    var n = !1,
        l = !1;

    function o(e, s) {
      void 0 === s && (s = !0);
      var a = t.params.lazy;
      if (void 0 === e) return;
      if (0 === t.slides.length) return;
      var r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(".".concat(t.params.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")) : t.slides.eq(e),
          n = r.find(".".concat(a.elementClass, ":not(.").concat(a.loadedClass, "):not(.").concat(a.loadingClass, ")"));
      !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]), 0 !== n.length && n.each(function (e) {
        var n = d(e);
        n.addClass(a.loadingClass);
        var l = n.attr("data-background"),
            c = n.attr("data-src"),
            p = n.attr("data-srcset"),
            u = n.attr("data-sizes"),
            h = n.parent("picture");
        t.loadImage(n[0], c || l, p, u, !1, function () {
          if (null != t && t && (!t || t.params) && !t.destroyed) {
            if (l ? (n.css("background-image", "url(\"".concat(l, "\")")), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each(function (e) {
              var t = d(e);
              t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
            }), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(".".concat(a.preloaderClass)).remove(), t.params.loop && s) {
              var _e63 = r.attr("data-swiper-slide-index");

              if (r.hasClass(t.params.slideDuplicateClass)) {
                o(t.$wrapperEl.children("[data-swiper-slide-index=\"".concat(_e63, "\"]:not(.").concat(t.params.slideDuplicateClass, ")")).index(), !1);
              } else {
                o(t.$wrapperEl.children(".".concat(t.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(_e63, "\"]")).index(), !1);
              }
            }

            i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight();
          }
        }), i("lazyImageLoad", r[0], n[0]);
      });
    }

    function c() {
      var e = t.$wrapperEl,
          s = t.params,
          a = t.slides,
          i = t.activeIndex,
          r = t.virtual && s.virtual.enabled,
          n = s.lazy;
      var c = s.slidesPerView;

      function p(t) {
        if (r) {
          if (e.children(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(t, "\"]")).length) return !0;
        } else if (a[t]) return !0;

        return !1;
      }

      function u(e) {
        return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
      }

      if ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress) e.children(".".concat(s.slideVisibleClass)).each(function (e) {
        o(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
      });else if (c > 1) for (var _e64 = i; _e64 < i + c; _e64 += 1) {
        p(_e64) && o(_e64);
      } else o(i);
      if (n.loadPrevNext) if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
        var _e65 = n.loadPrevNextAmount,
            _t51 = Math.ceil(c),
            _s39 = Math.min(i + _t51 + Math.max(_e65, _t51), a.length),
            _r8 = Math.max(i - Math.max(_t51, _e65), 0);

        for (var _e66 = i + _t51; _e66 < _s39; _e66 += 1) {
          p(_e66) && o(_e66);
        }

        for (var _e67 = _r8; _e67 < i; _e67 += 1) {
          p(_e67) && o(_e67);
        }
      } else {
        var _t52 = e.children(".".concat(s.slideNextClass));

        _t52.length > 0 && o(u(_t52));

        var _a25 = e.children(".".concat(s.slidePrevClass));

        _a25.length > 0 && o(u(_a25));
      }
    }

    function p() {
      var e = r();
      if (!t || t.destroyed) return;
      var s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e),
          a = s[0] === e,
          i = a ? e.innerWidth : s[0].offsetWidth,
          l = a ? e.innerHeight : s[0].offsetHeight,
          o = t.$el.offset(),
          u = t.rtlTranslate;
      var h = !1;
      u && (o.left -= t.$el[0].scrollLeft);
      var m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];

      for (var _e68 = 0; _e68 < m.length; _e68 += 1) {
        var _t53 = m[_e68];

        if (_t53[0] >= 0 && _t53[0] <= i && _t53[1] >= 0 && _t53[1] <= l) {
          if (0 === _t53[0] && 0 === _t53[1]) continue;
          h = !0;
        }
      }

      var f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      h ? (c(), s.off("scroll", p, f)) : n || (n = !0, s.on("scroll", p, f));
    }

    a("beforeInit", function () {
      t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1);
    }), a("init", function () {
      t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
    }), a("scroll", function () {
      t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c();
    }), a("scrollbarDragMove resize _freeModeNoMomentumRelease", function () {
      t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
    }), a("transitionStart", function () {
      t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c());
    }), a("transitionEnd", function () {
      t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c());
    }), a("slideChange", function () {
      var _t$params = t.params,
          e = _t$params.lazy,
          s = _t$params.cssMode,
          a = _t$params.watchSlidesProgress,
          i = _t$params.touchReleaseOnEdges,
          r = _t$params.resistanceRatio;
      e.enabled && (s || a && (i || 0 === r)) && c();
    }), a("destroy", function () {
      t.$el && t.$el.find(".".concat(t.params.lazy.loadingClass)).removeClass(t.params.lazy.loadingClass);
    }), Object.assign(t.lazy, {
      load: c,
      loadInSlide: o
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;

    function i(e, t) {
      var s = function () {
        var e, t, s;
        return function (a, i) {
          for (t = -1, e = a.length; e - t > 1;) {
            s = e + t >> 1, a[s] <= i ? t = s : e = s;
          }

          return e;
        };
      }();

      var a, i;
      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
      }, this;
    }

    function r() {
      t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline);
    }

    s({
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    }), t.controller = {
      control: void 0
    }, a("beforeInit", function () {
      t.controller.control = t.params.controller.control;
    }), a("update", function () {
      r();
    }), a("resize", function () {
      r();
    }), a("observerUpdate", function () {
      r();
    }), a("setTranslate", function (e, s, a) {
      t.controller.control && t.controller.setTranslate(s, a);
    }), a("setTransition", function (e, s, a) {
      t.controller.control && t.controller.setTransition(s, a);
    }), Object.assign(t.controller, {
      setTranslate: function setTranslate(e, s) {
        var a = t.controller.control;
        var r, n;
        var l = t.constructor;

        function o(e) {
          var s = t.rtlTranslate ? -t.translate : t.translate;
          "slide" === t.params.controller.by && (!function (e) {
            t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid));
          }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        if (Array.isArray(a)) for (var _e69 = 0; _e69 < a.length; _e69 += 1) {
          a[_e69] !== s && a[_e69] instanceof l && o(a[_e69]);
        } else a instanceof l && s !== a && o(a);
      },
      setTransition: function setTransition(e, s) {
        var a = t.constructor,
            i = t.controller.control;
        var r;

        function n(s) {
          s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && p(function () {
            s.updateAutoHeight();
          }), s.$wrapperEl.transitionEnd(function () {
            i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd());
          }));
        }

        if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) {
          i[r] !== s && i[r] instanceof a && n(i[r]);
        } else i instanceof a && s !== i && n(i);
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null
      }
    });
    var i = null;

    function r(e) {
      var t = i;
      0 !== t.length && (t.html(""), t.html(e));
    }

    function n(e) {
      e.attr("tabIndex", "0");
    }

    function l(e) {
      e.attr("tabIndex", "-1");
    }

    function o(e, t) {
      e.attr("role", t);
    }

    function c(e, t) {
      e.attr("aria-roledescription", t);
    }

    function p(e, t) {
      e.attr("aria-label", t);
    }

    function u(e) {
      e.attr("aria-disabled", !0);
    }

    function h(e) {
      e.attr("aria-disabled", !1);
    }

    function m(e) {
      if (13 !== e.keyCode && 32 !== e.keyCode) return;
      var s = t.params.a11y,
          a = d(e.target);
      t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click();
    }

    function f() {
      return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
    }

    function g() {
      return f() && t.params.pagination.clickable;
    }

    var v = function v(e, t, s) {
      n(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)), p(e, s), function (e, t) {
        e.attr("aria-controls", t);
      }(e, t);
    },
        w = function w(e) {
      var s = e.target.closest(".".concat(t.params.slideClass));
      if (!s || !t.slides.includes(s)) return;
      var a = t.slides.indexOf(s) === t.activeIndex,
          i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
      a || i || t.slideTo(t.slides.indexOf(s), 0);
    },
        b = function b() {
      var e = t.params.a11y;
      e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), o(d(t.slides), e.slideRole);
      var s = t.params.loop ? t.slides.filter(function (e) {
        return !e.classList.contains(t.params.slideDuplicateClass);
      }).length : t.slides.length;
      e.slideLabelMessage && t.slides.each(function (a, i) {
        var r = d(a),
            n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
        p(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s));
      });
    },
        x = function x() {
      var e = t.params.a11y;
      t.$el.append(i);
      var s = t.$el;
      e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
      var a = t.$wrapperEl,
          r = e.id || a.attr("id") || "swiper-wrapper-".concat((n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, function () {
        return Math.round(16 * Math.random()).toString(16);
      })));
      var n;
      var l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
      var o;
      var d, u;
      o = r, a.attr("id", o), function (e, t) {
        e.attr("aria-live", t);
      }(a, l), b(), t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl), d && d.length && v(d, r, e.nextSlideMessage), u && u.length && v(u, r, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m), t.$el.on("focus", w, !0);
    };

    a("beforeInit", function () {
      i = d("<span class=\"".concat(t.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"));
    }), a("afterInit", function () {
      t.params.a11y.enabled && x();
    }), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", function () {
      t.params.a11y.enabled && b();
    }), a("fromEdge toEdge afterInit lock unlock", function () {
      t.params.a11y.enabled && function () {
        if (t.params.loop || t.params.rewind || !t.navigation) return;
        var _t$navigation5 = t.navigation,
            e = _t$navigation5.$nextEl,
            s = _t$navigation5.$prevEl;
        s && s.length > 0 && (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))), e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)));
      }();
    }), a("paginationUpdate", function () {
      t.params.a11y.enabled && function () {
        var e = t.params.a11y;
        f() && t.pagination.bullets.each(function (s) {
          var a = d(s);
          t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (o(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(".".concat(t.params.pagination.bulletActiveClass)) ? a.attr("aria-current", "true") : a.removeAttr("aria-current");
        });
      }();
    }), a("destroy", function () {
      t.params.a11y.enabled && function () {
        var e, s;
        i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", m), s && s.off("keydown", m), g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m), t.$el.off("focus", w, !0);
      }();
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides",
        keepQuery: !1
      }
    });
    var i = !1,
        n = {};

    var l = function l(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
        o = function o(e) {
      var t = r();
      var s;
      s = e ? new URL(e) : t.location;
      var a = s.pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          i = a.length;
      return {
        key: a[i - 2],
        value: a[i - 1]
      };
    },
        d = function d(e, s) {
      var a = r();
      if (!i || !t.params.history.enabled) return;
      var n;
      n = t.params.url ? new URL(t.params.url) : a.location;
      var o = t.slides.eq(s);
      var d = l(o.attr("data-history"));

      if (t.params.history.root.length > 0) {
        var _s40 = t.params.history.root;
        "/" === _s40[_s40.length - 1] && (_s40 = _s40.slice(0, _s40.length - 1)), d = "".concat(_s40, "/").concat(e, "/").concat(d);
      } else n.pathname.includes(e) || (d = "".concat(e, "/").concat(d));

      t.params.history.keepQuery && (d += n.search);
      var c = a.history.state;
      c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
        value: d
      }, null, d) : a.history.pushState({
        value: d
      }, null, d));
    },
        c = function c(e, s, a) {
      if (s) for (var _i16 = 0, _r9 = t.slides.length; _i16 < _r9; _i16 += 1) {
        var _r10 = t.slides.eq(_i16);

        if (l(_r10.attr("data-history")) === s && !_r10.hasClass(t.params.slideDuplicateClass)) {
          var _s41 = _r10.index();

          t.slideTo(_s41, e, a);
        }
      } else t.slideTo(0, e, a);
    },
        p = function p() {
      n = o(t.params.url), c(t.params.speed, n.value, !1);
    };

    a("init", function () {
      t.params.history.enabled && function () {
        var e = r();

        if (t.params.history) {
          if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
          i = !0, n = o(t.params.url), (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p));
        }
      }();
    }), a("destroy", function () {
      t.params.history.enabled && function () {
        var e = r();
        t.params.history.replaceState || e.removeEventListener("popstate", p);
      }();
    }), a("transitionEnd _freeModeNoMomentumRelease", function () {
      i && d(t.params.history.key, t.activeIndex);
    }), a("slideChange", function () {
      i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        i = e.emit,
        n = e.on,
        l = !1;
    var o = a(),
        c = r();
    s({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    });

    var p = function p() {
      i("hashChange");
      var e = o.location.hash.replace("#", "");

      if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
        var _s42 = t.$wrapperEl.children(".".concat(t.params.slideClass, "[data-hash=\"").concat(e, "\"]")).index();

        if (void 0 === _s42) return;
        t.slideTo(_s42);
      }
    },
        u = function u() {
      if (l && t.params.hashNavigation.enabled) if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, "#".concat(t.slides.eq(t.activeIndex).attr("data-hash")) || ""), i("hashSet");else {
        var _e70 = t.slides.eq(t.activeIndex),
            _s43 = _e70.attr("data-hash") || _e70.attr("data-history");

        o.location.hash = _s43 || "", i("hashSet");
      }
    };

    n("init", function () {
      t.params.hashNavigation.enabled && function () {
        if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
        l = !0;
        var e = o.location.hash.replace("#", "");

        if (e) {
          var _s44 = 0;

          for (var _a26 = 0, _i17 = t.slides.length; _a26 < _i17; _a26 += 1) {
            var _i18 = t.slides.eq(_a26);

            if ((_i18.attr("data-hash") || _i18.attr("data-history")) === e && !_i18.hasClass(t.params.slideDuplicateClass)) {
              var _e71 = _i18.index();

              t.slideTo(_e71, _s44, t.params.runCallbacksOnInit, !0);
            }
          }
        }

        t.params.hashNavigation.watchState && d(c).on("hashchange", p);
      }();
    }), n("destroy", function () {
      t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p);
    }), n("transitionEnd _freeModeNoMomentumRelease", function () {
      l && u();
    }), n("slideChange", function () {
      l && t.params.cssMode && u();
    });
  }, function (e) {
    var t,
        s = e.swiper,
        i = e.extendParams,
        r = e.on,
        n = e.emit;

    function l() {
      var e = s.slides.eq(s.activeIndex);
      var a = s.params.autoplay.delay;
      e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = p(function () {
        var e;
        s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), n("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l();
      }, a);
    }

    function o() {
      return void 0 === t && !s.autoplay.running && (s.autoplay.running = !0, n("autoplayStart"), l(), !0);
    }

    function d() {
      return !!s.autoplay.running && void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, n("autoplayStop"), !0);
    }

    function c(e) {
      s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        s.$wrapperEl[0].addEventListener(e, h);
      }) : (s.autoplay.paused = !1, l())));
    }

    function u() {
      var e = a();
      "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1);
    }

    function h(e) {
      s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        s.$wrapperEl[0].removeEventListener(e, h);
      }), s.autoplay.paused = !1, s.autoplay.running ? l() : d());
    }

    function m() {
      s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        s.$wrapperEl[0].removeEventListener(e, h);
      });
    }

    function f() {
      s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, n("autoplayResume"), l());
    }

    s.autoplay = {
      running: !1,
      paused: !1
    }, i({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    }), r("init", function () {
      if (s.params.autoplay.enabled) {
        o();
        a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f));
      }
    }), r("beforeTransitionStart", function (e, t, a) {
      s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d());
    }), r("sliderFirstMove", function () {
      s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c());
    }), r("touchEnd", function () {
      s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l();
    }), r("destroy", function () {
      s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d();
      a().removeEventListener("visibilitychange", u);
    }), Object.assign(s.autoplay, {
      pause: c,
      run: l,
      start: o,
      stop: d
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    });
    var i = !1,
        r = !1;

    function n() {
      var e = t.thumbs.swiper;
      if (!e || e.destroyed) return;
      var s = e.clickedIndex,
          a = e.clickedSlide;
      if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
      if (null == s) return;
      var i;

      if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
        var _e72 = t.activeIndex;
        t.slides.eq(_e72).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, _e72 = t.activeIndex);

        var _s45 = t.slides.eq(_e72).prevAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index(),
            _a27 = t.slides.eq(_e72).nextAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index();

        i = void 0 === _s45 ? _a27 : void 0 === _a27 ? _s45 : _a27 - _e72 < _e72 - _s45 ? _a27 : _s45;
      }

      t.slideTo(i);
    }

    function l() {
      var e = t.params.thumbs;
      if (i) return !1;
      i = !0;
      var s = t.constructor;
      if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(t.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      });else if (m(e.swiper)) {
        var _a28 = Object.assign({}, e.swiper);

        Object.assign(_a28, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), t.thumbs.swiper = new s(_a28), r = !0;
      }
      return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0;
    }

    function o(e) {
      var s = t.thumbs.swiper;
      if (!s || s.destroyed) return;
      var a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView,
          i = t.params.thumbs.autoScrollOffset,
          r = i && !s.params.loop;

      if (t.realIndex !== s.realIndex || r) {
        var _n10,
            _l7,
            _o6 = s.activeIndex;

        if (s.params.loop) {
          s.slides.eq(_o6).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, _o6 = s.activeIndex);

          var _e73 = s.slides.eq(_o6).prevAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index(),
              _a29 = s.slides.eq(_o6).nextAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index();

          _n10 = void 0 === _e73 ? _a29 : void 0 === _a29 ? _e73 : _a29 - _o6 == _o6 - _e73 ? s.params.slidesPerGroup > 1 ? _a29 : _o6 : _a29 - _o6 < _o6 - _e73 ? _a29 : _e73, _l7 = t.activeIndex > t.previousIndex ? "next" : "prev";
        } else _n10 = t.realIndex, _l7 = _n10 > t.previousIndex ? "next" : "prev";

        r && (_n10 += "next" === _l7 ? i : -1 * i), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(_n10) < 0 && (s.params.centeredSlides ? _n10 = _n10 > _o6 ? _n10 - Math.floor(a / 2) + 1 : _n10 + Math.floor(a / 2) - 1 : _n10 > _o6 && s.params.slidesPerGroup, s.slideTo(_n10, e ? 0 : void 0));
      }

      var n = 1;
      var l = t.params.thumbs.slideThumbActiveClass;
      if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (n = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.removeClass(l), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (var _e74 = 0; _e74 < n; _e74 += 1) {
        s.$wrapperEl.children("[data-swiper-slide-index=\"".concat(t.realIndex + _e74, "\"]")).addClass(l);
      } else for (var _e75 = 0; _e75 < n; _e75 += 1) {
        s.slides.eq(t.realIndex + _e75).addClass(l);
      }
    }

    t.thumbs = {
      swiper: null
    }, a("beforeInit", function () {
      var e = t.params.thumbs;
      e && e.swiper && (l(), o(!0));
    }), a("slideChange update resize observerUpdate", function () {
      o();
    }), a("setTransition", function (e, s) {
      var a = t.thumbs.swiper;
      a && !a.destroyed && a.setTransition(s);
    }), a("beforeDestroy", function () {
      var e = t.thumbs.swiper;
      e && !e.destroyed && r && e.destroy();
    }), Object.assign(t.thumbs, {
      init: l,
      update: o
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.emit,
        i = e.once;
    s({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: .02
      }
    }), Object.assign(t, {
      freeMode: {
        onTouchStart: function onTouchStart() {
          var e = t.getTranslate();
          t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
            currentPos: t.rtl ? t.translate : -t.translate
          });
        },
        onTouchMove: function onTouchMove() {
          var e = t.touchEventsData,
              s = t.touches;
          0 === e.velocities.length && e.velocities.push({
            position: s[t.isHorizontal() ? "startX" : "startY"],
            time: e.touchStartTime
          }), e.velocities.push({
            position: s[t.isHorizontal() ? "currentX" : "currentY"],
            time: u()
          });
        },
        onTouchEnd: function onTouchEnd(e) {
          var s = e.currentPos;
          var r = t.params,
              n = t.$wrapperEl,
              l = t.rtlTranslate,
              o = t.snapGrid,
              d = t.touchEventsData,
              c = u() - d.touchStartTime;
          if (s < -t.minTranslate()) t.slideTo(t.activeIndex);else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);else {
            if (r.freeMode.momentum) {
              if (d.velocities.length > 1) {
                var _e77 = d.velocities.pop(),
                    _s47 = d.velocities.pop(),
                    _a30 = _e77.position - _s47.position,
                    _i19 = _e77.time - _s47.time;

                t.velocity = _a30 / _i19, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (_i19 > 150 || u() - _e77.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;

              t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;

              var _e76 = 1e3 * r.freeMode.momentumRatio;

              var _s46 = t.velocity * _e76;

              var _c4 = t.translate + _s46;

              l && (_c4 = -_c4);

              var _p2,
                  _h = !1;

              var _m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;

              var _f;

              if (_c4 < t.maxTranslate()) r.freeMode.momentumBounce ? (_c4 + t.maxTranslate() < -_m && (_c4 = t.maxTranslate() - _m), _p2 = t.maxTranslate(), _h = !0, d.allowMomentumBounce = !0) : _c4 = t.maxTranslate(), r.loop && r.centeredSlides && (_f = !0);else if (_c4 > t.minTranslate()) r.freeMode.momentumBounce ? (_c4 - t.minTranslate() > _m && (_c4 = t.minTranslate() + _m), _p2 = t.minTranslate(), _h = !0, d.allowMomentumBounce = !0) : _c4 = t.minTranslate(), r.loop && r.centeredSlides && (_f = !0);else if (r.freeMode.sticky) {
                var _e78;

                for (var _t54 = 0; _t54 < o.length; _t54 += 1) {
                  if (o[_t54] > -_c4) {
                    _e78 = _t54;
                    break;
                  }
                }

                _c4 = Math.abs(o[_e78] - _c4) < Math.abs(o[_e78 - 1] - _c4) || "next" === t.swipeDirection ? o[_e78] : o[_e78 - 1], _c4 = -_c4;
              }

              if (_f && i("transitionEnd", function () {
                t.loopFix();
              }), 0 !== t.velocity) {
                if (_e76 = l ? Math.abs((-_c4 - t.translate) / t.velocity) : Math.abs((_c4 - t.translate) / t.velocity), r.freeMode.sticky) {
                  var _s48 = Math.abs((l ? -_c4 : _c4) - t.translate),
                      _a31 = t.slidesSizesGrid[t.activeIndex];

                  _e76 = _s48 < _a31 ? r.speed : _s48 < 2 * _a31 ? 1.5 * r.speed : 2.5 * r.speed;
                }
              } else if (r.freeMode.sticky) return void t.slideToClosest();

              r.freeMode.momentumBounce && _h ? (t.updateProgress(_p2), t.setTransition(_e76), t.setTranslate(_c4), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout(function () {
                  t.setTranslate(_p2), n.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  });
                }, 0));
              })) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(_c4), t.setTransition(_e76), t.setTranslate(_c4), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              }))) : t.updateProgress(_c4), t.updateActiveIndex(), t.updateSlidesClasses();
            } else {
              if (r.freeMode.sticky) return void t.slideToClosest();
              r.freeMode && a("_freeModeNoMomentumRelease");
            }

            (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
          }
        }
      }
    });
  }, function (e) {
    var t,
        s,
        a,
        i = e.swiper,
        r = e.extendParams;
    r({
      grid: {
        rows: 1,
        fill: "column"
      }
    }), i.grid = {
      initSlides: function initSlides(e) {
        var r = i.params.slidesPerView,
            _i$params$grid = i.params.grid,
            n = _i$params$grid.rows,
            l = _i$params$grid.fill;
        s = t / n, a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n));
      },
      updateSlide: function updateSlide(e, r, n, l) {
        var _i$params = i.params,
            o = _i$params.slidesPerGroup,
            d = _i$params.spaceBetween,
            _i$params$grid2 = i.params.grid,
            c = _i$params$grid2.rows,
            p = _i$params$grid2.fill;
        var u, h, m;

        if ("row" === p && o > 1) {
          var _s49 = Math.floor(e / (o * c)),
              _a32 = e - c * o * _s49,
              _i20 = 0 === _s49 ? o : Math.min(Math.ceil((n - _s49 * c * o) / c), o);

          m = Math.floor(_a32 / _i20), h = _a32 - m * _i20 + _s49 * o, u = h + m * t / c, r.css({
            "-webkit-order": u,
            order: u
          });
        } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s);

        r.css(l("margin-top"), 0 !== m ? d && "".concat(d, "px") : "");
      },
      updateWrapperSize: function updateWrapperSize(e, s, a) {
        var _i$params2 = i.params,
            r = _i$params2.spaceBetween,
            n = _i$params2.centeredSlides,
            l = _i$params2.roundLengths,
            o = i.params.grid.rows;

        if (i.virtualSize = (e + r) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - r, i.$wrapperEl.css(_defineProperty({}, a("width"), "".concat(i.virtualSize + r, "px"))), n) {
          s.splice(0, s.length);
          var _e79 = [];

          for (var _t55 = 0; _t55 < s.length; _t55 += 1) {
            var _a33 = s[_t55];
            l && (_a33 = Math.floor(_a33)), s[_t55] < i.virtualSize + s[0] && _e79.push(_a33);
          }

          s.push.apply(s, _e79);
        }
      }
    };
  }, function (e) {
    var t = e.swiper;
    Object.assign(t, {
      appendSlide: K.bind(t),
      prependSlide: Z.bind(t),
      addSlide: Q.bind(t),
      removeSlide: J.bind(t),
      removeAllSlides: ee.bind(t)
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      fadeEffect: {
        crossFade: !1,
        transformEl: null
      }
    }), te({
      effect: "fade",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides,
            s = t.params.fadeEffect;

        for (var _a34 = 0; _a34 < e.length; _a34 += 1) {
          var _e80 = t.slides.eq(_a34);

          var _i21 = -_e80[0].swiperSlideOffset;

          t.params.virtualTranslate || (_i21 -= t.translate);
          var _r11 = 0;
          t.isHorizontal() || (_r11 = _i21, _i21 = 0);

          var _n11 = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(_e80[0].progress), 0) : 1 + Math.min(Math.max(_e80[0].progress, -1), 0);

          se(s, _e80).css({
            opacity: _n11
          }).transform("translate3d(".concat(_i21, "px, ").concat(_r11, "px, 0px)"));
        }
      },
      setTransition: function setTransition(e) {
        var s = t.params.fadeEffect.transformEl;
        (s ? t.slides.find(s) : t.slides).transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s,
          allSlides: !0
        });
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode
        };
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    });

    var i = function i(e, t, s) {
      var a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
          i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
      0 === a.length && (a = d("<div class=\"swiper-slide-shadow-".concat(s ? "left" : "top", "\"></div>")), e.append(a)), 0 === i.length && (i = d("<div class=\"swiper-slide-shadow-".concat(s ? "right" : "bottom", "\"></div>")), e.append(i)), a.length && (a[0].style.opacity = Math.max(-t, 0)), i.length && (i[0].style.opacity = Math.max(t, 0));
    };

    te({
      effect: "cube",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.$el,
            s = t.$wrapperEl,
            a = t.slides,
            r = t.width,
            n = t.height,
            l = t.rtlTranslate,
            o = t.size,
            c = t.browser,
            p = t.params.cubeEffect,
            u = t.isHorizontal(),
            h = t.virtual && t.params.virtual.enabled;
        var m,
            f = 0;
        p.shadow && (u ? (m = s.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), s.append(m)), m.css({
          height: "".concat(r, "px")
        })) : (m = e.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), e.append(m))));

        for (var _e81 = 0; _e81 < a.length; _e81 += 1) {
          var _t56 = a.eq(_e81);

          var _s50 = _e81;
          h && (_s50 = parseInt(_t56.attr("data-swiper-slide-index"), 10));

          var _r12 = 90 * _s50,
              _n12 = Math.floor(_r12 / 360);

          l && (_r12 = -_r12, _n12 = Math.floor(-_r12 / 360));

          var _d6 = Math.max(Math.min(_t56[0].progress, 1), -1);

          var _c5 = 0,
              _m2 = 0,
              _g = 0;
          _s50 % 4 == 0 ? (_c5 = 4 * -_n12 * o, _g = 0) : (_s50 - 1) % 4 == 0 ? (_c5 = 0, _g = 4 * -_n12 * o) : (_s50 - 2) % 4 == 0 ? (_c5 = o + 4 * _n12 * o, _g = o) : (_s50 - 3) % 4 == 0 && (_c5 = -o, _g = 3 * o + 4 * o * _n12), l && (_c5 = -_c5), u || (_m2 = _c5, _c5 = 0);

          var _v = "rotateX(".concat(u ? 0 : -_r12, "deg) rotateY(").concat(u ? _r12 : 0, "deg) translate3d(").concat(_c5, "px, ").concat(_m2, "px, ").concat(_g, "px)");

          _d6 <= 1 && _d6 > -1 && (f = 90 * _s50 + 90 * _d6, l && (f = 90 * -_s50 - 90 * _d6)), _t56.transform(_v), p.slideShadows && i(_t56, _d6, u);
        }

        if (s.css({
          "-webkit-transform-origin": "50% 50% -".concat(o / 2, "px"),
          "transform-origin": "50% 50% -".concat(o / 2, "px")
        }), p.shadow) if (u) m.transform("translate3d(0px, ".concat(r / 2 + p.shadowOffset, "px, ").concat(-r / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(p.shadowScale, ")"));else {
          var _e82 = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
              _t57 = 1.5 - (Math.sin(2 * _e82 * Math.PI / 360) / 2 + Math.cos(2 * _e82 * Math.PI / 360) / 2),
              _s51 = p.shadowScale,
              _a35 = p.shadowScale / _t57,
              _i22 = p.shadowOffset;

          m.transform("scale3d(".concat(_s51, ", 1, ").concat(_a35, ") translate3d(0px, ").concat(n / 2 + _i22, "px, ").concat(-n / 2 / _a35, "px) rotateX(-90deg)"));
        }
        var g = c.isSafari || c.isWebView ? -o / 2 : 0;
        s.transform("translate3d(0px,0,".concat(g, "px) rotateX(").concat(t.isHorizontal() ? 0 : f, "deg) rotateY(").concat(t.isHorizontal() ? -f : 0, "deg)")), s[0].style.setProperty("--swiper-cube-translate-z", "".concat(g, "px"));
      },
      setTransition: function setTransition(e) {
        var s = t.$el,
            a = t.slides;
        a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e);
      },
      recreateShadows: function recreateShadows() {
        var e = t.isHorizontal();
        t.slides.each(function (t) {
          var s = Math.max(Math.min(t.progress, 1), -1);
          i(d(t), s, e);
        });
      },
      getEffectParams: function getEffectParams() {
        return t.params.cubeEffect;
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0
        };
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0,
        transformEl: null
      }
    });

    var i = function i(e, s, a) {
      var i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
          r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
      0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")), i.length && (i[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0));
    };

    te({
      effect: "flip",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides,
            s = t.rtlTranslate,
            a = t.params.flipEffect;

        for (var _r13 = 0; _r13 < e.length; _r13 += 1) {
          var _n13 = e.eq(_r13);

          var _l8 = _n13[0].progress;
          t.params.flipEffect.limitRotation && (_l8 = Math.max(Math.min(_n13[0].progress, 1), -1));
          var _o7 = _n13[0].swiperSlideOffset;

          var _d7 = -180 * _l8,
              _c6 = 0,
              _p3 = t.params.cssMode ? -_o7 - t.translate : -_o7,
              _u4 = 0;

          t.isHorizontal() ? s && (_d7 = -_d7) : (_u4 = _p3, _p3 = 0, _c6 = -_d7, _d7 = 0), _n13[0].style.zIndex = -Math.abs(Math.round(_l8)) + e.length, a.slideShadows && i(_n13, _l8, a);

          var _h2 = "translate3d(".concat(_p3, "px, ").concat(_u4, "px, 0px) rotateX(").concat(_c6, "deg) rotateY(").concat(_d7, "deg)");

          se(a, _n13).transform(_h2);
        }
      },
      setTransition: function setTransition(e) {
        var s = t.params.flipEffect.transformEl;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s
        });
      },
      recreateShadows: function recreateShadows() {
        var e = t.params.flipEffect;
        t.slides.each(function (s) {
          var a = d(s);
          var r = a[0].progress;
          t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e);
        });
      },
      getEffectParams: function getEffectParams() {
        return t.params.flipEffect;
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode
        };
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0,
        transformEl: null
      }
    }), te({
      effect: "coverflow",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.width,
            s = t.height,
            a = t.slides,
            i = t.slidesSizesGrid,
            r = t.params.coverflowEffect,
            n = t.isHorizontal(),
            l = t.translate,
            o = n ? e / 2 - l : s / 2 - l,
            d = n ? r.rotate : -r.rotate,
            c = r.depth;

        for (var _e83 = 0, _t58 = a.length; _e83 < _t58; _e83 += 1) {
          var _t59 = a.eq(_e83),
              _s52 = i[_e83],
              _l9 = (o - _t59[0].swiperSlideOffset - _s52 / 2) / _s52,
              _p4 = "function" == typeof r.modifier ? r.modifier(_l9) : _l9 * r.modifier;

          var _u5 = n ? d * _p4 : 0,
              _h3 = n ? 0 : d * _p4,
              _m3 = -c * Math.abs(_p4),
              _f2 = r.stretch;

          "string" == typeof _f2 && -1 !== _f2.indexOf("%") && (_f2 = parseFloat(r.stretch) / 100 * _s52);

          var _g2 = n ? 0 : _f2 * _p4,
              _v2 = n ? _f2 * _p4 : 0,
              _w = 1 - (1 - r.scale) * Math.abs(_p4);

          Math.abs(_v2) < .001 && (_v2 = 0), Math.abs(_g2) < .001 && (_g2 = 0), Math.abs(_m3) < .001 && (_m3 = 0), Math.abs(_u5) < .001 && (_u5 = 0), Math.abs(_h3) < .001 && (_h3 = 0), Math.abs(_w) < .001 && (_w = 0);

          var _b = "translate3d(".concat(_v2, "px,").concat(_g2, "px,").concat(_m3, "px)  rotateX(").concat(_h3, "deg) rotateY(").concat(_u5, "deg) scale(").concat(_w, ")");

          if (se(r, _t59).transform(_b), _t59[0].style.zIndex = 1 - Math.abs(Math.round(_p4)), r.slideShadows) {
            var _e84 = n ? _t59.find(".swiper-slide-shadow-left") : _t59.find(".swiper-slide-shadow-top"),
                _s53 = n ? _t59.find(".swiper-slide-shadow-right") : _t59.find(".swiper-slide-shadow-bottom");

            0 === _e84.length && (_e84 = ie(r, _t59, n ? "left" : "top")), 0 === _s53.length && (_s53 = ie(r, _t59, n ? "right" : "bottom")), _e84.length && (_e84[0].style.opacity = _p4 > 0 ? _p4 : 0), _s53.length && (_s53[0].style.opacity = -_p4 > 0 ? -_p4 : 0);
          }
        }
      },
      setTransition: function setTransition(e) {
        var s = t.params.coverflowEffect.transformEl;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0
        };
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      creativeEffect: {
        transformEl: null,
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });

    var i = function i(e) {
      return "string" == typeof e ? e : "".concat(e, "px");
    };

    te({
      effect: "creative",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides,
            s = t.$wrapperEl,
            a = t.slidesSizesGrid,
            r = t.params.creativeEffect,
            n = r.progressMultiplier,
            l = t.params.centeredSlides;

        if (l) {
          var _e85 = a[0] / 2 - t.params.slidesOffsetBefore || 0;

          s.transform("translateX(calc(50% - ".concat(_e85, "px))"));
        }

        var _loop = function _loop(_s54) {
          var a = e.eq(_s54),
              o = a[0].progress,
              d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
          var c = d;
          l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
          var p = a[0].swiperSlideOffset,
              u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
              h = [0, 0, 0];
          var m = !1;
          t.isHorizontal() || (u[1] = u[0], u[0] = 0);
          var f = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };
          d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach(function (e, t) {
            u[t] = "calc(".concat(e, "px + (").concat(i(f.translate[t]), " * ").concat(Math.abs(d * n), "))");
          }), h.forEach(function (e, t) {
            h[t] = f.rotate[t] * Math.abs(d * n);
          }), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
          var g = u.join(", "),
              v = "rotateX(".concat(h[0], "deg) rotateY(").concat(h[1], "deg) rotateZ(").concat(h[2], "deg)"),
              w = c < 0 ? "scale(".concat(1 + (1 - f.scale) * c * n, ")") : "scale(".concat(1 - (1 - f.scale) * c * n, ")"),
              b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
              x = "translate3d(".concat(g, ") ").concat(v, " ").concat(w);

          if (m && f.shadow || !m) {
            var _e86 = a.children(".swiper-slide-shadow");

            if (0 === _e86.length && f.shadow && (_e86 = ie(r, a)), _e86.length) {
              var _t60 = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;

              _e86[0].style.opacity = Math.min(Math.max(Math.abs(_t60), 0), 1);
            }
          }

          var y = se(r, a);
          y.transform(x).css({
            opacity: b
          }), f.origin && y.css("transform-origin", f.origin);
        };

        for (var _s54 = 0; _s54 < e.length; _s54 += 1) {
          _loop(_s54);
        }
      },
      setTransition: function setTransition(e) {
        var s = t.params.creativeEffect.transformEl;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s,
          allSlides: !0
        });
      },
      perspective: function perspective() {
        return t.params.creativeEffect.perspective;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode
        };
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null,
        rotate: !0
      }
    }), te({
      effect: "cards",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides,
            s = t.activeIndex,
            a = t.params.cardsEffect,
            _t$touchEventsData = t.touchEventsData,
            i = _t$touchEventsData.startTranslate,
            r = _t$touchEventsData.isTouched,
            n = t.translate;

        for (var _l10 = 0; _l10 < e.length; _l10 += 1) {
          var _o8 = e.eq(_l10),
              _d8 = _o8[0].progress,
              _c7 = Math.min(Math.max(_d8, -4), 4);

          var _p5 = _o8[0].swiperSlideOffset;
          t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform("translateX(".concat(t.minTranslate(), "px)")), t.params.centeredSlides && t.params.cssMode && (_p5 -= e[0].swiperSlideOffset);

          var _u6 = t.params.cssMode ? -_p5 - t.translate : -_p5,
              _h4 = 0;

          var _m4 = -100 * Math.abs(_c7);

          var _f3 = 1,
              _g3 = -2 * _c7,
              _v3 = 8 - .75 * Math.abs(_c7);

          var _w2 = t.virtual && t.params.virtual.enabled ? t.virtual.from + _l10 : _l10,
              _b2 = (_w2 === s || _w2 === s - 1) && _c7 > 0 && _c7 < 1 && (r || t.params.cssMode) && n < i,
              _x = (_w2 === s || _w2 === s + 1) && _c7 < 0 && _c7 > -1 && (r || t.params.cssMode) && n > i;

          if (_b2 || _x) {
            var _e87 = Math.pow(1 - Math.abs((Math.abs(_c7) - .5) / .5), .5);

            _g3 += -28 * _c7 * _e87, _f3 += -.5 * _e87, _v3 += 96 * _e87, _h4 = -25 * _e87 * Math.abs(_c7) + "%";
          }

          if (_u6 = _c7 < 0 ? "calc(".concat(_u6, "px + (").concat(_v3 * Math.abs(_c7), "%))") : _c7 > 0 ? "calc(".concat(_u6, "px + (-").concat(_v3 * Math.abs(_c7), "%))") : "".concat(_u6, "px"), !t.isHorizontal()) {
            var _e88 = _h4;
            _h4 = _u6, _u6 = _e88;
          }

          var _y = _c7 < 0 ? "" + (1 + (1 - _f3) * _c7) : "" + (1 - (1 - _f3) * _c7),
              _E = "\n        translate3d(".concat(_u6, ", ").concat(_h4, ", ").concat(_m4, "px)\n        rotateZ(").concat(a.rotate ? _g3 : 0, "deg)\n        scale(").concat(_y, ")\n      ");

          if (a.slideShadows) {
            var _e89 = _o8.find(".swiper-slide-shadow");

            0 === _e89.length && (_e89 = ie(a, _o8)), _e89.length && (_e89[0].style.opacity = Math.min(Math.max((Math.abs(_c7) - .5) / .5, 0), 1));
          }

          _o8[0].style.zIndex = -Math.abs(Math.round(_d8)) + e.length;
          se(a, _o8).transform(_E);
        }
      },
      setTransition: function setTransition(e) {
        var s = t.params.cardsEffect.transformEl;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s
        });
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode
        };
      }
    });
  }];
  return V.use(re), V;
});