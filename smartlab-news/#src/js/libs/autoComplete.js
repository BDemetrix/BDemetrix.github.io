// http://www.apache.org/licenses/LICENSE-2.0
// https://tarekraafat.github.io/autoComplete.js

(function () {
  var e, t;
  e = this, t = function () {
    "use strict";

    function e(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function t(t) {
      for (var n = 1; n < arguments.length; n++) {
        var i = null != arguments[n] ? arguments[n] : {};
        n % 2 ? e(Object(i), !0).forEach((function (e) {
          r(t, e, i[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }))
      }
      return t
    }

    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function i(e) {
      return function (e) {
        if (Array.isArray(e)) return a(e)
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
      }(e) || o(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function o(e, t) {
      if (e) {
        if ("string" == typeof e) return a(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
      }
    }

    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }
    var s = function (e, t, n) {
      e.dispatchEvent(new CustomEvent(n, {
        bubbles: !0,
        detail: t,
        cancelable: !0
      }))
    },
      u = function (e, t) {
        var n = e.inputField,
          r = document.getElementById(e.resultsList.idName);
        r && t !== n && (r.remove(), n.removeAttribute("aria-activedescendant"), n.setAttribute("aria-expanded", !1), s(n, null, "close"))
      },
      c = "keydown",
      l = "aria-selected",
      d = function (e, n) {
        e.inputField.removeEventListener(c, e.nav);
        var r = -1,
          o = e.resultItem.selected.className.split(" "),
          a = function (i, o, a) {
            i.preventDefault(), o.length && (a ? r++ : r--, d(o), e.inputField.setAttribute("aria-activedescendant", o[r].id), s(i.srcElement, t(t({
              event: i
            }, n), {}, {
              selection: n.results[r]
            }), "navigate"))
          },
          d = function (e) {
            var t;
            ! function (e) {
              Array.from(e).forEach((function (e) {
                var t;
                e.removeAttribute(l), o && (t = e.classList).remove.apply(t, i(o))
              }))
            }(e), r >= e.length && (r = 0), r < 0 && (r = e.length - 1), e[r].setAttribute(l, !0), o && (t = e[r].classList).add.apply(t, i(o))
          };
        e.nav = function (t) {
          var n = document.getElementById(e.resultsList.idName);
          if (n) switch (n = n.getElementsByTagName(e.resultItem.element), t.keyCode) {
            case 40:
              a(t, n, 1);
              break;
            case 38:
              a(t, n);
              break;
            case 27:
              e.inputField.value = "", u(e);
              break;
            case 13:
              t.preventDefault(), r >= 0 && n[r].click();
              break;
            case 9:
              u(e)
          }
        }, e.inputField.addEventListener(c, e.nav)
      },
      f = "click",
      h = "aria-expanded",
      m = function (e, n) {
        var r = n.query,
          i = n.matches,
          o = n.results,
          a = e.inputField,
          c = e.resultsList,
          l = document.getElementById(e.resultsList.idName);
        l ? (l.innerHTML = "", a.removeAttribute("aria-activedescendant")) : (l = function (e) {
          var t = document.createElement(e.resultsList.element);
          return t.setAttribute("id", e.resultsList.idName), t.setAttribute("class", e.resultsList.className), t.setAttribute("role", "listbox"), ("string" == typeof e.resultsList.destination ? document.querySelector(e.resultsList.destination) : e.resultsList.destination()).insertAdjacentElement(e.resultsList.position, t), t
        }(e), a.setAttribute(h, !0), s(a, n, "open")), i.length ? o.forEach((function (r, i) {
          var o = function (e, t, n) {
            var r = document.createElement(n.resultItem.element);
            return r.setAttribute("id", "".concat(n.resultItem.idName, "_").concat(t)), r.setAttribute("class", n.resultItem.className), r.setAttribute("role", "option"), r.innerHTML = e.match, n.resultItem.content && n.resultItem.content(e, r), r
          }(r, i, e);
          o.addEventListener(f, (function (o) {
            var a = t(t({
              event: o
            }, n), {}, {
              selection: t(t({}, r), {}, {
                index: i
              })
            });
            e.onSelection && e.onSelection(a)
          })), l.appendChild(o)
        })) : c.noResults ? c.noResults(l, r) : (u(e), a.setAttribute(h, !1)), c.container && c.container(l, n), c.navigation ? c.navigation(l) : d(e, n), document.addEventListener(f, (function (t) {
          return u(e, t.target)
        }))
      },
      v = function (e, t) {
        return e = e.toLowerCase(), t.diacritics ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").normalize("NFC") : e
      },
      p = function (e, t) {
        return '<span class="'.concat(e, '">').concat(t, "</span>")
      },
      b = function (e, t) {
        var n = e.data,
          r = e.searchEngine,
          i = [];
        return n.store.forEach((function (a, s) {
          var u = function (n) {
            var o = (n ? a[n] : a).toString(),
              u = "function" == typeof r ? r(t, o) : function (e, t, n) {
                var r = v(t, n);
                if ("loose" === n.searchEngine) {
                  var i = (e = e.replace(/ /g, "")).length,
                    o = 0,
                    a = Array.from(t).map((function (t, a) {
                      return o < i && r[a] === e[o] && (t = n.resultItem.highlight.render ? p(n.resultItem.highlight.className, t) : t, o++), t
                    })).join("");
                  if (o === i) return a
                } else if (r.includes(e)) {
                  var s = new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "i");
                  return e = s.exec(t), n.resultItem.highlight.render ? t.replace(e, p(n.resultItem.highlight.className, e)) : t
                }
              }(t, o, e);
            if (u) {
              var c = {
                index: s,
                match: u,
                value: a
              };
              n && (c.key = n), i.push(c)
            }
          };
          if (n.key) {
            var c, l = function (e, t) {
              var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (!n) {
                if (Array.isArray(e) || (n = o(e)) || t && e && "number" == typeof e.length) {
                  n && (e = n);
                  var r = 0,
                    i = function () { };
                  return {
                    s: i,
                    n: function () {
                      return r >= e.length ? {
                        done: !0
                      } : {
                        done: !1,
                        value: e[r++]
                      }
                    },
                    e: function (e) {
                      throw e
                    },
                    f: i
                  }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }
              var a, s = !0,
                u = !1;
              return {
                s: function () {
                  n = n.call(e)
                },
                n: function () {
                  var e = n.next();
                  return s = e.done, e
                },
                e: function (e) {
                  u = !0, a = e
                },
                f: function () {
                  try {
                    s || null == n.return || n.return()
                  } finally {
                    if (u) throw a
                  }
                }
              }
            }(n.key);
            try {
              for (l.s(); !(c = l.n()).done;) u(c.value)
            } catch (e) {
              l.e(e)
            } finally {
              l.f()
            }
          } else u()
        })), i
      };
    return function () {
      function e(t) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var n = t.selector,
          r = void 0 === n ? "#autoComplete" : n,
          i = t.placeHolder,
          o = t.observer,
          a = t.data,
          s = a.src,
          u = a.key,
          c = a.cache,
          l = a.store,
          d = a.results,
          f = t.query,
          h = t.trigger,
          m = (h = void 0 === h ? {} : h).event,
          v = void 0 === m ? ["input"] : m,
          p = h.condition,
          b = t.threshold,
          y = void 0 === b ? 1 : b,
          g = t.debounce,
          E = void 0 === g ? 0 : g,
          A = t.diacritics,
          L = t.searchEngine,
          k = t.feedback,
          w = t.resultsList,
          I = (w = void 0 === w ? {} : w).render,
          N = void 0 === I || I,
          O = w.container,
          j = w.destination,
          F = void 0 === j ? r : j,
          S = w.position,
          x = void 0 === S ? "afterend" : S,
          T = w.element,
          C = void 0 === T ? "ul" : T,
          P = w.idName,
          q = void 0 === P ? "autoComplete_list" : P,
          H = w.className,
          R = w.maxResults,
          D = void 0 === R ? 5 : R,
          M = w.navigation,
          _ = w.noResults,
          B = t.resultItem,
          $ = (B = void 0 === B ? {} : B).content,
          z = B.element,
          U = void 0 === z ? "li" : z,
          G = B.idName,
          J = B.className,
          K = void 0 === J ? "autoComplete_result" : J,
          Q = B.highlight,
          V = (Q = void 0 === Q ? {} : Q).render,
          W = Q.className,
          X = void 0 === W ? "autoComplete_highlighted" : W,
          Y = B.selected,
          Z = (Y = void 0 === Y ? {} : Y).className,
          ee = void 0 === Z ? "autoComplete_selected" : Z,
          te = t.onSelection;
        this.selector = r, this.observer = o, this.placeHolder = i, this.data = {
          src: s,
          key: u,
          cache: c,
          store: l,
          results: d
        }, this.query = f, this.trigger = {
          event: v,
          condition: p
        }, this.threshold = y, this.debounce = E, this.diacritics = A, this.searchEngine = L, this.feedback = k, this.resultsList = {
          render: N,
          container: O,
          destination: F,
          position: x,
          element: C,
          idName: q,
          className: H,
          maxResults: D,
          navigation: M,
          noResults: _
        }, this.resultItem = {
          content: $,
          element: U,
          idName: G,
          className: K,
          highlight: {
            render: V,
            className: X
          },
          selected: {
            className: ee
          }
        }, this.onSelection = te, this.inputField = "string" == typeof this.selector ? document.querySelector(this.selector) : this.selector(), this.observer ? this.preInit() : this.init()
      }
      var t, r, i;
      return t = e, (r = [{
        key: "start",
        value: function (e, t) {
          var n = this.data.results ? this.data.results(b(this, t)) : b(this, t),
            r = {
              input: e,
              query: t,
              matches: n,
              results: n.slice(0, this.resultsList.maxResults)
            };
          if (s(this.inputField, r, "results"), !this.resultsList.render) return this.feedback(r);
          m(this, r)
        }
      }, {
        key: "dataStore",
        value: function () {
          var e = this;
          return new Promise((function (t, n) {
            return e.data.cache && e.data.store ? t() : new Promise((function (t, n) {
              return "function" == typeof e.data.src ? e.data.src().then(t, n) : t(e.data.src)
            })).then((function (r) {
              try {
                return e.data.store = r, s(e.inputField, e.data.store, "fetch"), t()
              } catch (e) {
                return n(e)
              }
            }), n)
          }))
        }
      }, {
        key: "compose",
        value: function (e) {
          var t = this;
          return new Promise((function (n, r) {
            var i, o, a;
            return a = t.inputField, i = a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement ? a.value : a.innerHTML, o = function (e, t) {
              return t.query && t.query.manipulate ? t.query.manipulate(e) : (t.diacritics, v(e, t))
            }(i, t),
              function (e, t, n) {
                return e.trigger.condition ? e.trigger.condition(t, n) : n.length >= e.threshold && n.replace(/ /g, "").length
              }(t, e, o) ? t.dataStore().then((function (e) {
                try {
                  return t.start(i, o), s.call(t)
                } catch (e) {
                  return r(e)
                }
              }), r) : (u(t), s.call(t));

            function s() {
              return n()
            }
          }))
        }
      }, {
        key: "init",
        value: function () {
          var e, t, n, r, i, o = this;
          (t = (e = this).inputField).setAttribute("role", "combobox"), t.setAttribute("aria-haspopup", !0), t.setAttribute("aria-expanded", !1), t.setAttribute("aria-controls", e.resultsList.idName), t.setAttribute("aria-autocomplete", "both"), this.placeHolder && this.inputField.setAttribute("placeholder", this.placeHolder), this.hook = (n = function (e) {
            o.compose(e)
          }, r = this.debounce, function () {
            var e = this,
              t = arguments;
            clearTimeout(i), i = setTimeout((function () {
              return n.apply(e, t)
            }), r)
          }), this.trigger.event.forEach((function (e) {
            o.inputField.addEventListener(e, o.hook)
          })), s(this.inputField, null, "init")
        }
      }, {
        key: "preInit",
        value: function () {
          var e = this;
          new MutationObserver((function (t, n) {
            t.forEach((function (t) {
              e.inputField && (n.disconnect(), e.init())
            }))
          })).observe(document, {
            childList: !0,
            subtree: !0
          })
        }
      }, {
        key: "unInit",
        value: function () {
          var e = this;
          this.trigger.event.forEach((function (t) {
            e.inputField.removeEventListener(t, e.hook)
          })), s(this.inputField, null, "unInit")
        }
      }]) && n(t.prototype, r), i && n(t, i), e
    }()
  }, "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).autoComplete = t();
})();