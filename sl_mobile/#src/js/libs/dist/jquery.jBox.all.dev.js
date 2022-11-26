"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function jBoxWrapper(j) {
  function h(t, i) {
    return this.options = {
      id: null,
      width: "auto",
      height: "auto",
      minWidth: null,
      minHeight: null,
      maxWidth: null,
      maxHeight: null,
      responsiveWidth: !0,
      responsiveHeight: !0,
      responsiveMinWidth: 100,
      responsiveMinHeight: 100,
      attach: null,
      trigger: "click",
      preventDefault: !1,
      content: null,
      getContent: null,
      title: null,
      getTitle: null,
      footer: null,
      isolateScroll: !0,
      ajax: {
        url: null,
        data: "",
        reload: !1,
        getURL: "data-url",
        getData: "data-ajax",
        setContent: !0,
        loadingClass: !0,
        spinner: !0,
        spinnerDelay: 300,
        spinnerReposition: !0
      },
      cancelAjaxOnClose: !0,
      target: null,
      position: {
        x: "center",
        y: "center"
      },
      outside: null,
      offset: 0,
      attributes: {
        x: "left",
        y: "top"
      },
      fixed: !1,
      adjustPosition: !0,
      adjustTracker: !1,
      adjustDistance: 5,
      reposition: !0,
      repositionOnOpen: !0,
      repositionOnContent: !0,
      holdPosition: !0,
      pointer: !1,
      pointTo: "target",
      fade: 180,
      animation: null,
      theme: "Default",
      addClass: null,
      overlay: !1,
      overlayClass: null,
      zIndex: 1e4,
      delayOpen: 0,
      delayClose: 0,
      closeOnEsc: !1,
      closeOnClick: !1,
      closeOnMouseleave: !1,
      closeButton: !1,
      appendTo: j("body"),
      createOnInit: !1,
      blockScroll: !1,
      blockScrollAdjust: !0,
      draggable: !1,
      dragOver: !0,
      autoClose: !1,
      delayOnHover: !1,
      showCountdown: !1,
      preloadAudio: !0,
      audio: null,
      volume: 100,
      onInit: null,
      onAttach: null,
      onPosition: null,
      onCreated: null,
      onOpen: null,
      onOpenComplete: null,
      onClose: null,
      onCloseComplete: null,
      onDragStart: null,
      onDragEnd: null
    }, this._pluginOptions = {
      Tooltip: {
        getContent: "title",
        trigger: "mouseenter",
        position: {
          x: "center",
          y: "top"
        },
        outside: "y",
        pointer: !0
      },
      Mouse: {
        responsiveWidth: !1,
        responsiveHeight: !1,
        adjustPosition: "flip",
        target: "mouse",
        trigger: "mouseenter",
        position: {
          x: "right",
          y: "bottom"
        },
        outside: "xy",
        offset: 5
      },
      Modal: {
        target: j(window),
        fixed: !0,
        blockScroll: !0,
        closeOnEsc: !0,
        closeOnClick: "overlay",
        closeButton: !0,
        overlay: !0,
        animation: "zoomIn"
      }
    }, this.options = j.extend(!0, this.options, this._pluginOptions[t] || h._pluginOptions[t], i), "string" == j.type(t) && (this.type = t), this.isTouchDevice = function () {
      var t = " -webkit- -moz- -o- -ms- ".split(" ");
      if ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) return !0;
      var i,
          t = ["(", t.join("touch-enabled),("), "heartz", ")"].join("");
      return i = t, window.matchMedia(i).matches;
    }(), this.isTouchDevice && "mouseenter" === this.options.trigger && !1 === this.options.closeOnClick && (this.options.closeOnClick = "body"), this._fireEvent = function (t, i) {
      this.options["_" + t] && this.options["_" + t].bind(this)(i), this.options[t] && this.options[t].bind(this)(i);
    }, null === this.options.id && (this.options.id = "jBox" + h._getUniqueID()), this.id = this.options.id, ("center" == this.options.position.x && "x" == this.options.outside || "center" == this.options.position.y && "y" == this.options.outside) && (this.options.outside = null), "target" != this.options.pointTo || this.options.outside && "xy" != this.options.outside || (this.options.pointer = !1), "object" != j.type(this.options.offset) ? this.options.offset = {
      x: this.options.offset,
      y: this.options.offset
    } : this.options.offset = j.extend({
      x: 0,
      y: 0
    }, this.options.offset), "object" != j.type(this.options.adjustDistance) ? this.options.adjustDistance = {
      top: this.options.adjustDistance,
      right: this.options.adjustDistance,
      bottom: this.options.adjustDistance,
      left: this.options.adjustDistance
    } : this.options.adjustDistance = j.extend({
      top: 5,
      left: 5,
      right: 5,
      bottom: 5
    }, this.options.adjustDistance), this.outside = !(!this.options.outside || "xy" == this.options.outside) && this.options.position[this.options.outside], this.align = this.outside || ("center" != this.options.position.y && "number" != j.type(this.options.position.y) ? this.options.position.x : "center" != this.options.position.x && "number" != j.type(this.options.position.x) ? this.options.position.y : this.options.attributes.x), h.zIndexMax = Math.max(h.zIndexMax || 0, "auto" === this.options.zIndex ? 1e4 : this.options.zIndex), "auto" === this.options.zIndex && (this.adjustZIndexOnOpen = !0, this.options.zIndex = h.zIndexMax += 2, this.trueModal = this.options.overlay), this._getOpp = function (t) {
      return {
        left: "right",
        right: "left",
        top: "bottom",
        bottom: "top",
        x: "y",
        y: "x"
      }[t];
    }, this._getXY = function (t) {
      return {
        left: "x",
        right: "x",
        top: "y",
        bottom: "y",
        center: "x"
      }[t];
    }, this._getTL = function (t) {
      return {
        left: "left",
        right: "left",
        top: "top",
        bottom: "top",
        center: "left",
        x: "left",
        y: "top"
      }[t];
    }, this._getInt = function (t, i) {
      return "auto" == t ? "auto" : t && "string" == j.type(t) && "%" == t.slice(-1) ? j(window)["height" == i ? "innerHeight" : "innerWidth"]() * parseInt(t.replace("%", "")) / 100 : t;
    }, this._createSVG = function (t, i) {
      var o = document.createElementNS("http://www.w3.org/2000/svg", t);
      return j.each(i, function (t, i) {
        o.setAttribute(i[0], i[1] || "");
      }), o;
    }, this._isolateScroll = function (e) {
      e && e.length && e.on("DOMMouseScroll.jBoxIsolateScroll mousewheel.jBoxIsolateScroll", function (t) {
        var i = t.wheelDelta || t.originalEvent && t.originalEvent.wheelDelta || -t.detail,
            o = 0 <= this.scrollTop + e.outerHeight() - this.scrollHeight,
            s = this.scrollTop <= 0;
        (i < 0 && o || 0 < i && s) && t.preventDefault();
      });
    }, this._setTitleWidth = function () {
      if (!this.titleContainer || "auto" == this.content[0].style.width && !this.content[0].style.maxWidth) return null;
      var t;
      "none" == this.wrapper.css("display") ? (this.wrapper.css("display", "block"), t = this.content.outerWidth(), this.wrapper.css("display", "none")) : t = this.content.outerWidth(), this.titleContainer.css({
        maxWidth: Math.max(t, parseInt(this.content[0].style.maxWidth)) || null
      });
    }, this._draggable = function () {
      if (!this.options.draggable) return !1;
      var t = "title" == this.options.draggable ? this.titleContainer : this.options.draggable instanceof j ? this.options.draggable : "string" == j.type(this.options.draggable) ? j(this.options.draggable) : this.wrapper;
      return !(!(t && t instanceof j && t.length) || t.data("jBox-draggable")) && (t.addClass("jBox-draggable").data("jBox-draggable", !0).on("touchstart mousedown", function (t) {
        var i, o, s, e, n, a;
        2 == t.button || j(t.target).hasClass("jBox-noDrag") || j(t.target).parents(".jBox-noDrag").length ? "touchstart" == t.type && (j(t.target).hasClass("jBox-closeButton") || j(t.target).parents(".jBox-closeButton").length) && this.close({
          ignoreDelay: !0
        }) : (o = "touchstart" == t.type && t.touches && t.touches[0] ? (i = t.touches[0].pageX, t.touches[0].pageY) : (i = t.pageX, t.pageY), this.draggingStartX = i, this.draggingStartY = o, this.options.dragOver && !this.trueModal && parseInt(this.wrapper.css("zIndex"), 10) <= h.zIndexMaxDragover && (h.zIndexMaxDragover += 1, this.wrapper.css("zIndex", h.zIndexMaxDragover)), s = this.wrapper.outerHeight(), e = this.wrapper.outerWidth(), n = this.wrapper.offset().top + s - o, a = this.wrapper.offset().left + e - i, j(document).on("touchmove.jBox-draggable-" + this.id + " mousemove.jBox-draggable-" + this.id, function (t) {
          var i,
              t = "touchmove" == t.type && t.touches && t.touches[0] ? (i = t.touches[0].pageX, t.touches[0].pageY) : (i = t.pageX, t.pageY);
          this.dragging || this.draggingStartX == i || this.draggingStartY == t || (this._fireEvent("onDragStart"), this.dragging = !0), this.wrapper.offset({
            top: t + n - s,
            left: i + a - e
          });
        }.bind(this)), t.preventDefault());
      }.bind(this)).on("touchend mouseup", function () {
        var t;
        j(document).off("touchmove.jBox-draggable-" + this.id + " mousemove.jBox-draggable-" + this.id), this.dragging && this._fireEvent("onDragEnd"), this.dragging = !1, "Modal" != this.type && "Confirm" != this.type || !this.options.holdPosition || (t = {
          x: (t = j("#" + this.id).offset()).left - j(document).scrollLeft(),
          y: t.top - j(document).scrollTop()
        }, this.position({
          position: t,
          offset: {
            x: 0,
            y: 0
          }
        }));
      }.bind(this)), this.trueModal || (h.zIndexMaxDragover = h.zIndexMaxDragover ? Math.max(h.zIndexMaxDragover, this.options.zIndex) : this.options.zIndex), this);
    }, this._create = function () {
      var t;
      this.wrapper || (this.wrapper = j("<div/>", {
        id: this.id,
        "class": "jBox-wrapper" + (this.type ? " jBox-" + this.type : "") + (this.options.theme ? " jBox-" + this.options.theme : "") + (this.options.addClass ? " " + this.options.addClass : "")
      }).css({
        position: this.options.fixed ? "fixed" : "absolute",
        display: "none",
        opacity: 0,
        zIndex: this.options.zIndex
      }).data("jBox", this), this.options.closeOnMouseleave && this.wrapper.on("mouseleave", function (t) {
        !this.source || t.relatedTarget != this.source[0] && -1 === j.inArray(this.source[0], j(t.relatedTarget).parents("*")) && this.close();
      }.bind(this)), "box" == this.options.closeOnClick && this.wrapper.on("click tap", function () {
        this.close({
          ignoreDelay: !0
        });
      }.bind(this)), this.container = j('<div class="jBox-container"/>').appendTo(this.wrapper), this.content = j('<div class="jBox-content"/>').appendTo(this.container), this.options.footer && (this.footer = j('<div class="jBox-footer"/>').append(this.options.footer).appendTo(this.container)), this.options.isolateScroll && this._isolateScroll(this.content), this.options.closeButton && ((t = this._createSVG("svg", [["viewBox", "0 0 24 24"]])).appendChild(this._createSVG("path", [["d", "M22.2,4c0,0,0.5,0.6,0,1.1l-6.8,6.8l6.9,6.9c0.5,0.5,0,1.1,0,1.1L20,22.3c0,0-0.6,0.5-1.1,0L12,15.4l-6.9,6.9c-0.5,0.5-1.1,0-1.1,0L1.7,20c0,0-0.5-0.6,0-1.1L8.6,12L1.7,5.1C1.2,4.6,1.7,4,1.7,4L4,1.7c0,0,0.6-0.5,1.1,0L12,8.5l6.8-6.8c0.5-0.5,1.1,0,1.1,0L22.2,4z"]])), this.closeButton = j('<div class="jBox-closeButton jBox-noDrag"/>').on("click tap", function (t) {
        this.close({
          ignoreDelay: !0
        });
      }.bind(this)).append(t), "box" != this.options.closeButton && (!0 !== this.options.closeButton || this.options.overlay || this.options.title || this.options.getTitle) || (this.wrapper.addClass("jBox-closeButton-box"), this.closeButton.appendTo(this.container))), this.wrapper.appendTo(this.options.appendTo), this.wrapper.find(".jBox-closeButton").length && j.each(["top", "right", "bottom", "left"], function (t, i) {
        this.wrapper.find(".jBox-closeButton").css(i) && "auto" != this.wrapper.find(".jBox-closeButton").css(i) && (this.options.adjustDistance[i] = Math.max(this.options.adjustDistance[i], this.options.adjustDistance[i] + -1 * ((parseInt(this.wrapper.find(".jBox-closeButton").css(i)) || 0) + (parseInt(this.container.css("border-" + i + "-width")) || 0))));
      }.bind(this)), this.options.pointer && (this.pointer = {
        position: "target" != this.options.pointTo ? this.options.pointTo : this._getOpp(this.outside),
        xy: "target" != this.options.pointTo ? this._getXY(this.options.pointTo) : this._getXY(this.outside),
        align: "center",
        offset: 0
      }, this.pointer.element = j('<div class="jBox-pointer jBox-pointer-' + this.pointer.position + '"/>').appendTo(this.wrapper), this.pointer.dimensions = {
        x: this.pointer.element.outerWidth(),
        y: this.pointer.element.outerHeight()
      }, "string" == j.type(this.options.pointer) && ((t = this.options.pointer.split(":"))[0] && (this.pointer.align = t[0]), t[1] && (this.pointer.offset = parseInt(t[1]))), this.pointer.alignAttribute = "x" == this.pointer.xy ? "bottom" == this.pointer.align ? "bottom" : "top" : "right" == this.pointer.align ? "right" : "left", this.wrapper.css("padding-" + this.pointer.position, this.pointer.dimensions[this.pointer.xy]), this.pointer.element.css(this.pointer.alignAttribute, "center" == this.pointer.align ? "50%" : 0).css("margin-" + this.pointer.alignAttribute, this.pointer.offset), this.pointer.margin = {}, this.pointer.margin["margin-" + this.pointer.alignAttribute] = this.pointer.offset, "center" == this.pointer.align && this.pointer.element.css("transform", "translate(" + ("y" == this.pointer.xy ? -.5 * this.pointer.dimensions.x + "px" : 0) + ", " + ("x" == this.pointer.xy ? -.5 * this.pointer.dimensions.y + "px" : 0) + ")"), this.pointer.element.css("x" == this.pointer.xy ? "width" : "height", parseInt(this.pointer.dimensions[this.pointer.xy]) + parseInt(this.container.css("border-" + this.pointer.alignAttribute + "-width"))), this.wrapper.addClass("jBox-pointerPosition-" + this.pointer.position)), this.setContent(this.options.content, !0), this.setTitle(this.options.title, !0), this.options.draggable && this._draggable(), this._fireEvent("onCreated"));
    }, this.options.createOnInit && this._create(), this.options.attach && this.attach(), this._attachEvents = function () {
      this.options.delayOnHover && j("#" + this.id).on("mouseenter", function (t) {
        this.isHovered = !0;
      }.bind(this)), this.options.delayOnHover && j("#" + this.id).on("mouseleave", function (t) {
        this.isHovered = !1;
      }.bind(this)), (this.options.adjustPosition || this.options.reposition) && !this.fixed && this.outside && (this.options.adjustTracker && j(window).on("scroll.jBox-" + this.id, function (t) {
        this.position();
      }.bind(this)), (this.options.adjustPosition || this.options.reposition) && j(window).on("resize.jBox-" + this.id, function (t) {
        this.position();
      }.bind(this))), "mouse" == this.options.target && j("body").on("mousemove.jBox-" + this.id, function (t) {
        this.position({
          mouseTarget: {
            top: t.pageY,
            left: t.pageX
          }
        });
      }.bind(this));
    }, this._detachEvents = function () {
      this.options.closeOnEsc && j(document).off("keyup.jBox-" + this.id), !0 !== this.options.closeOnClick && "body" != this.options.closeOnClick || j(document).off("click.jBox-" + this.id + " tap.jBox-" + this.id), this.options.adjustTracker && j(window).off("scroll.jBox-" + this.id), (this.options.adjustPosition || this.options.reposition) && j(window).off("resize.jBox-" + this.id), "mouse" == this.options.target && j("body").off("mousemove.jBox-" + this.id);
    }, this._showOverlay = function () {
      this.overlay || (this.overlay = j('<div id="' + this.id + '-overlay"/>').addClass("jBox-overlay" + (this.type ? " jBox-overlay-" + this.type : "")).css({
        display: "none",
        opacity: 0,
        zIndex: this.options.zIndex - 1
      }).appendTo(this.options.appendTo), this.options.overlayClass && this.overlay.addClass(this.options.overlayClass), "overlay" != this.options.closeButton && !0 !== this.options.closeButton || this.overlay.append(this.closeButton), "overlay" == this.options.closeOnClick && this.overlay.on("click tap", function () {
        this.close({
          ignoreDelay: !0
        });
      }.bind(this)), j("#" + this.id + "-overlay .jBox-closeButton").length && (this.options.adjustDistance.top = Math.max(j("#" + this.id + "-overlay .jBox-closeButton").outerHeight(), this.options.adjustDistance.top))), !0 === this.adjustZIndexOnOpen && this.overlay.css("zIndex", parseInt(this.wrapper.css("zIndex"), 10) - 1), "block" != this.overlay.css("display") && (this.options.fade ? this.overlay.stop() && this.overlay.animate({
        opacity: 1
      }, {
        queue: !1,
        duration: this.options.fade,
        start: function () {
          this.overlay.css({
            display: "block"
          });
        }.bind(this)
      }) : this.overlay.css({
        display: "block",
        opacity: 1
      }));
    }, this._hideOverlay = function () {
      this.overlay && (this.options.fade ? this.overlay.stop() && this.overlay.animate({
        opacity: 0
      }, {
        queue: !1,
        duration: this.options.fade,
        complete: function () {
          this.overlay.css({
            display: "none"
          });
        }.bind(this)
      }) : this.overlay.css({
        display: "none",
        opacity: 0
      }));
    }, this._exposeDimensions = function () {
      this.wrapper.css({
        top: -1e4,
        left: -1e4,
        right: "auto",
        bottom: "auto"
      });
      var t = {
        x: this.wrapper.outerWidth(),
        y: this.wrapper.outerHeight()
      };
      return this.wrapper.css({
        top: "auto",
        left: "auto"
      }), t;
    }, this._generateAnimationCSS = function () {
      if ("object" != j.type(this.options.animation) && (this.options.animation = {
        pulse: {
          open: "pulse",
          close: "zoomOut"
        },
        zoomIn: {
          open: "zoomIn",
          close: "zoomIn"
        },
        zoomOut: {
          open: "zoomOut",
          close: "zoomOut"
        },
        move: {
          open: "move",
          close: "move"
        },
        slide: {
          open: "slide",
          close: "slide"
        },
        flip: {
          open: "flip",
          close: "flip"
        },
        tada: {
          open: "tada",
          close: "zoomOut"
        }
      }[this.options.animation]), !this.options.animation) return null;
      this.options.animation.open && (this.options.animation.open = this.options.animation.open.split(":")), this.options.animation.close && (this.options.animation.close = this.options.animation.close.split(":")), this.options.animation.openDirection = this.options.animation.open[1] || null, this.options.animation.closeDirection = this.options.animation.close[1] || null, this.options.animation.open && (this.options.animation.open = this.options.animation.open[0]), this.options.animation.close && (this.options.animation.close = this.options.animation.close[0]), this.options.animation.open && (this.options.animation.open += "Open"), this.options.animation.close && (this.options.animation.close += "Close");
      var a = {
        pulse: {
          duration: 350,
          css: [["0%", "scale(1)"], ["50%", "scale(1.1)"], ["100%", "scale(1)"]]
        },
        zoomInOpen: {
          duration: this.options.fade || 180,
          css: [["0%", "scale(0.9)"], ["100%", "scale(1)"]]
        },
        zoomInClose: {
          duration: this.options.fade || 180,
          css: [["0%", "scale(1)"], ["100%", "scale(0.9)"]]
        },
        zoomOutOpen: {
          duration: this.options.fade || 180,
          css: [["0%", "scale(1.1)"], ["100%", "scale(1)"]]
        },
        zoomOutClose: {
          duration: this.options.fade || 180,
          css: [["0%", "scale(1)"], ["100%", "scale(1.1)"]]
        },
        moveOpen: {
          duration: this.options.fade || 180,
          positions: {
            top: {
              "0%": -12
            },
            right: {
              "0%": 12
            },
            bottom: {
              "0%": 12
            },
            left: {
              "0%": -12
            }
          },
          css: [["0%", "translate%XY(%Vpx)"], ["100%", "translate%XY(0px)"]]
        },
        moveClose: {
          duration: this.options.fade || 180,
          timing: "ease-in",
          positions: {
            top: {
              "100%": -12
            },
            right: {
              "100%": 12
            },
            bottom: {
              "100%": 12
            },
            left: {
              "100%": -12
            }
          },
          css: [["0%", "translate%XY(0px)"], ["100%", "translate%XY(%Vpx)"]]
        },
        slideOpen: {
          duration: 400,
          positions: {
            top: {
              "0%": -400
            },
            right: {
              "0%": 400
            },
            bottom: {
              "0%": 400
            },
            left: {
              "0%": -400
            }
          },
          css: [["0%", "translate%XY(%Vpx)"], ["100%", "translate%XY(0px)"]]
        },
        slideClose: {
          duration: 400,
          timing: "ease-in",
          positions: {
            top: {
              "100%": -400
            },
            right: {
              "100%": 400
            },
            bottom: {
              "100%": 400
            },
            left: {
              "100%": -400
            }
          },
          css: [["0%", "translate%XY(0px)"], ["100%", "translate%XY(%Vpx)"]]
        },
        flipOpen: {
          duration: 600,
          css: [["0%", "perspective(400px) rotateX(90deg)"], ["40%", "perspective(400px) rotateX(-15deg)"], ["70%", "perspective(400px) rotateX(15deg)"], ["100%", "perspective(400px) rotateX(0deg)"]]
        },
        flipClose: {
          duration: this.options.fade || 300,
          css: [["0%", "perspective(400px) rotateX(0deg)"], ["100%", "perspective(400px) rotateX(90deg)"]]
        },
        tada: {
          duration: 800,
          css: [["0%", "scale(1)"], ["10%, 20%", "scale(0.9) rotate(-3deg)"], ["30%, 50%, 70%, 90%", "scale(1.1) rotate(3deg)"], ["40%, 60%, 80%", "scale(1.1) rotate(-3deg)"], ["100%", "scale(1) rotate(0)"]]
        }
      };
      j.each(["pulse", "tada"], function (t, i) {
        a[i + "Open"] = a[i + "Close"] = a[i];
      });

      var s = function (s, e) {
        var n = "@keyframes jBox-" + this.id + "-animation-" + this.options.animation[s] + "-" + s + (e ? "-" + e : "") + " {";
        return j.each(a[this.options.animation[s]].css, function (t, i) {
          var o = e ? i[1].replace("%XY", this._getXY(e).toUpperCase()) : i[1];
          a[this.options.animation[s]].positions && (o = o.replace("%V", a[this.options.animation[s]].positions[e][i[0]])), n += i[0] + " {transform:" + o + ";}";
        }.bind(this)), n += "}", n += ".jBox-" + this.id + "-animation-" + this.options.animation[s] + "-" + s + (e ? "-" + e : "") + " {", n += "animation-duration: " + a[this.options.animation[s]].duration + "ms;", n += "animation-name: jBox-" + this.id + "-animation-" + this.options.animation[s] + "-" + s + (e ? "-" + e : "") + ";", n += a[this.options.animation[s]].timing ? "animation-timing-function: " + a[this.options.animation[s]].timing + ";" : "", n += "}";
      }.bind(this);

      this._animationCSS = "", j.each(["open", "close"], function (t, o) {
        if (!this.options.animation[o] || !a[this.options.animation[o]] || "close" == o && !this.options.fade) return "";
        a[this.options.animation[o]].positions ? j.each(["top", "right", "bottom", "left"], function (t, i) {
          this._animationCSS += s(o, i);
        }.bind(this)) : this._animationCSS += s(o);
      }.bind(this));
    }, this.options.animation && this._generateAnimationCSS(), this._blockBodyClick = function () {
      this.blockBodyClick = !0, setTimeout(function () {
        this.blockBodyClick = !1;
      }.bind(this), 10);
    }, this._animate = function (t) {
      if (t = t || (this.isOpen ? "open" : "close"), !this.options.fade && "close" == t) return null;
      var i = this.options.animation[t + "Direction"] || ("center" != this.align ? this.align : this.options.attributes.x);
      this.flipped && this._getXY(i) == this._getXY(this.align) && (i = this._getOpp(i));
      var o = "jBox-" + this.id + "-animation-" + this.options.animation[t] + "-" + t + " jBox-" + this.id + "-animation-" + this.options.animation[t] + "-" + t + "-" + i;
      this.wrapper.addClass(o);
      i = 1e3 * parseFloat(this.wrapper.css("animation-duration"));
      "close" == t && (i = Math.min(i, this.options.fade)), setTimeout(function () {
        this.wrapper && this.wrapper.removeClass(o);
      }.bind(this), i);
    }, this._abortAnimation = function () {
      var t = this.wrapper.attr("class").split(" ").filter(function (t) {
        return 0 !== t.lastIndexOf("jBox-" + this.id + "-animation", 0);
      }.bind(this));
      this.wrapper.attr("class", t.join(" "));
    }, (this.options.responsiveWidth || this.options.responsiveHeight) && j(window).on("resize.responsivejBox-" + this.id, function (t) {
      this.isOpen && this.position();
    }.bind(this)), "string" === j.type(this.options.preloadAudio) && (this.options.preloadAudio = [this.options.preloadAudio]), "string" === j.type(this.options.audio) && (this.options.audio = {
      open: this.options.audio
    }), "number" === j.type(this.options.volume) && (this.options.volume = {
      open: this.options.volume,
      close: this.options.volume
    }), !0 === this.options.preloadAudio && this.options.audio && (this.options.preloadAudio = [], j.each(this.options.audio, function (t, i) {
      this.options.preloadAudio.push(i + ".mp3"), this.options.preloadAudio.push(i + ".ogg");
    }.bind(this))), this.options.preloadAudio.length && j.each(this.options.preloadAudio, function (t, i) {
      var o = new Audio();
      o.src = i, o.preload = "auto";
    }), this._fireEvent("onInit"), this;
  }

  var t, i;
  return h.prototype.attach = function (t, s) {
    return t = t || this.options.attach, "string" == j.type(t) && (t = j(t)), s = s || this.options.trigger, t && t.length && j.each(t, function (t, o) {
      (o = j(o)).data("jBox-attached-" + this.id) || ("title" == this.options.getContent && null != o.attr("title") && o.data("jBox-getContent", o.attr("title")).removeAttr("title"), this.attachedElements || (this.attachedElements = []), this.attachedElements.push(o[0]), o.on(s + ".jBox-attach-" + this.id, function (t) {
        var i;
        this.timer && clearTimeout(this.timer), "mouseenter" == s && this.isOpen && this.source[0] == o[0] || (this.isOpen && this.source && this.source[0] != o[0] && (i = !0), this.source = o, this.options.target || (this.target = o), "click" == s && this.options.preventDefault && t.preventDefault(), this["click" != s || i ? "open" : "toggle"]());
      }.bind(this)), "mouseenter" == this.options.trigger && o.on("mouseleave", function (t) {
        if (!this.wrapper) return null;
        this.options.closeOnMouseleave && (t.relatedTarget == this.wrapper[0] || j(t.relatedTarget).parents("#" + this.id).length) || this.close();
      }.bind(this)), o.data("jBox-attached-" + this.id, s), this._fireEvent("onAttach", o));
    }.bind(this)), this;
  }, h.prototype.detach = function (t) {
    return (t = t || this.attachedElements || []) && t.length && j.each(t, function (t, i) {
      (i = j(i)).data("jBox-attached-" + this.id) && (i.off(i.data("jBox-attached-" + this.id) + ".jBox-attach-" + this.id), i.data("jBox-attached-" + this.id, null)), this.attachedElements = j.grep(this.attachedElements, function (t) {
        return t != i[0];
      });
    }.bind(this)), this;
  }, h.prototype.setTitle = function (t, i) {
    if (null == t || null == t) return this;
    this.wrapper || this._create();
    var o = this.wrapper.outerHeight(),
        s = this.wrapper.outerWidth();
    return this.title || (this.titleContainer = j('<div class="jBox-title"/>'), this.title = j("<div/>").appendTo(this.titleContainer), "title" != this.options.closeButton && (!0 !== this.options.closeButton || this.options.overlay) || (this.wrapper.addClass("jBox-closeButton-title"), this.closeButton.appendTo(this.titleContainer)), this.titleContainer.insertBefore(this.content), this._setTitleWidth()), this.wrapper[t ? "addClass" : "removeClass"]("jBox-hasTitle"), this.title.html(t), s != this.wrapper.outerWidth() && this._setTitleWidth(), this.options.draggable && this._draggable(), i || !this.options.repositionOnContent || o == this.wrapper.outerHeight() && s == this.wrapper.outerWidth() || this.position(), this;
  }, h.prototype.setContent = function (t, i) {
    if (null == t || null == t) return this;
    this.wrapper || this._create();
    var o = this.wrapper.outerHeight(),
        s = this.wrapper.outerWidth();

    switch (this.content.children("[data-jbox-content-appended]").appendTo("body").css({
      display: "none"
    }), j.type(t)) {
      case "string":
        this.content.html(t);
        break;

      case "object":
        t && (t instanceof j || t.constructor.prototype.jquery) ? (this.content.html(""), t.attr("data-jbox-content-appended", 1).appendTo(this.content).css({
          display: "block"
        })) : this.content.html(JSON.stringify(t));
    }

    return s != this.wrapper.outerWidth() && this._setTitleWidth(), this.options.draggable && this._draggable(), i || !this.options.repositionOnContent || o == this.wrapper.outerHeight() && s == this.wrapper.outerWidth() || this.position(), this;
  }, h.prototype.setDimensions = function (t, i, o) {
    this.wrapper || this._create(), this.content.css(t, this._getInt(i = null == i ? "auto" : i)), "width" == t && this._setTitleWidth(), this.options[t] = i, null != o && !o || this.position();
  }, h.prototype.setWidth = function (t, i) {
    this.setDimensions("width", t, i);
  }, h.prototype.setHeight = function (t, i) {
    this.setDimensions("height", t, i);
  }, h.prototype.position = function (o) {
    if (o = j.extend(!0, this.options, o = o || {}), this.target = o.target || this.target || j(window), this.target instanceof j || "mouse" == this.target || (this.target = j(this.target)), !this.target.length) return this;
    this.content.css({
      width: this._getInt(o.width, "width"),
      height: this._getInt(o.height, "height"),
      minWidth: this._getInt(o.minWidth, "width"),
      minHeight: this._getInt(o.minHeight, "height"),
      maxWidth: this._getInt(o.maxWidth, "width"),
      maxHeight: this._getInt(o.maxHeight, "height")
    }), this._setTitleWidth();

    var s = this._exposeDimensions();

    "mouse" == this.target || this.target.data("jBox-" + this.id + "-fixed") || this.target.data("jBox-" + this.id + "-fixed", this.target[0] != j(window)[0] && ("fixed" == this.target.css("position") || 0 < this.target.parents().filter(function () {
      return "fixed" == j(this).css("position");
    }).length) ? "fixed" : "static");
    var t = {
      x: j(window).outerWidth(),
      y: j(window).outerHeight(),
      top: o.fixed && this.target.data("jBox-" + this.id + "-fixed") ? 0 : j(window).scrollTop(),
      left: o.fixed && this.target.data("jBox-" + this.id + "-fixed") ? 0 : j(window).scrollLeft()
    };
    t.bottom = t.top + t.y, t.right = t.left + t.x;

    try {
      var i = this.target.offset();
    } catch (t) {
      i = {
        top: 0,
        left: 0
      };
    }

    "mouse" != this.target && "fixed" == this.target.data("jBox-" + this.id + "-fixed") && o.fixed && (i.top = i.top - j(window).scrollTop(), i.left = i.left - j(window).scrollLeft());
    var e = {
      x: "mouse" == this.target ? 12 : this.target.outerWidth(),
      y: "mouse" == this.target ? 20 : this.target.outerHeight(),
      top: "mouse" == this.target && o.mouseTarget ? o.mouseTarget.top : i ? i.top : 0,
      left: "mouse" == this.target && o.mouseTarget ? o.mouseTarget.left : i ? i.left : 0
    },
        n = o.outside && !("center" == o.position.x && "center" == o.position.y),
        a = {
      x: t.x - o.adjustDistance.left - o.adjustDistance.right,
      y: t.y - o.adjustDistance.top - o.adjustDistance.bottom,
      left: n ? e.left - j(window).scrollLeft() - o.adjustDistance.left : 0,
      right: n ? t.x - e.left + j(window).scrollLeft() - e.x - o.adjustDistance.right : 0,
      top: n ? e.top - j(window).scrollTop() - this.options.adjustDistance.top : 0,
      bottom: n ? t.y - e.top + j(window).scrollTop() - e.y - o.adjustDistance.bottom : 0
    },
        h = {
      x: "x" != o.outside && "xy" != o.outside || "number" == j.type(o.position.x) ? null : o.position.x,
      y: "y" != o.outside && "xy" != o.outside || "number" == j.type(o.position.y) ? null : o.position.y
    },
        r = {
      x: !1,
      y: !1
    };
    h.x && s.x > a[h.x] && a[this._getOpp(h.x)] > a[h.x] && (h.x = this._getOpp(h.x)) && (r.x = !0), h.y && s.y > a[h.y] && a[this._getOpp(h.y)] > a[h.y] && (h.y = this._getOpp(h.y)) && (r.y = !0), (o.responsiveWidth || o.responsiveHeight) && (m = function () {
      var t;
      o.responsiveWidth && s.x > a[h.x || "x"] && (t = a[h.x || "x"] - (this.pointer && n && "x" == o.outside ? this.pointer.dimensions.x : 0) - parseInt(this.container.css("border-left-width")) - parseInt(this.container.css("border-right-width")), this.content.css({
        width: t > this.options.responsiveMinWidth ? t : null,
        minWidth: t < parseInt(this.content.css("minWidth")) ? 0 : null
      }), this._setTitleWidth()), s = this._exposeDimensions();
    }.bind(this), o.responsiveWidth && m(), o.responsiveWidth && !r.y && h.y && s.y > a[h.y] && a[this._getOpp(h.y)] > a[h.y] && (h.y = this._getOpp(h.y)) && (r.y = !0), f = function () {
      var t;
      o.responsiveHeight && s.y > a[h.y || "y"] && (t = function () {
        return this.titleContainer || this.footer ? ("none" == this.wrapper.css("display") ? (this.wrapper.css("display", "block"), t = (this.titleContainer ? this.titleContainer.outerHeight() : 0) + (this.footer ? this.footer.outerHeight() : 0), this.wrapper.css("display", "none")) : t = (this.titleContainer ? this.titleContainer.outerHeight() : 0) + (this.footer ? this.footer.outerHeight() : 0), t || 0) : 0;
        var t;
      }.bind(this), t = a[h.y || "y"] - (this.pointer && n && "y" == o.outside ? this.pointer.dimensions.y : 0) - t() - parseInt(this.container.css("border-top-width")) - parseInt(this.container.css("border-bottom-width")), this.content.css({
        height: t > this.options.responsiveMinHeight ? t : null
      }), this._setTitleWidth()), s = this._exposeDimensions();
    }.bind(this), o.responsiveHeight && f(), o.responsiveHeight && !r.x && h.x && s.x > a[h.x] && a[this._getOpp(h.x)] > a[h.x] && (h.x = this._getOpp(h.x)) && (r.x = !0), o.adjustPosition && "move" != o.adjustPosition && (r.x && m(), r.y && f()));

    var p = {},
        l = function (t) {
      if ("number" != j.type(o.position[t])) {
        var i = o.attributes[t] = "x" == t ? "left" : "top";
        if (p[i] = e[i], "center" == o.position[t]) return p[i] += Math.ceil((e[t] - s[t]) / 2), void ("mouse" != this.target && this.target[0] && this.target[0] == j(window)[0] && (p[i] += .5 * (o.adjustDistance[i] - o.adjustDistance[this._getOpp(i)])));
        i != o.position[t] && (p[i] += e[t] - s[t]), o.outside != t && "xy" != o.outside || (p[i] += s[t] * (i != o.position[t] ? 1 : -1));
      } else p[o.attributes[t]] = o.position[t];
    }.bind(this);

    if (l("x"), l("y"), this.pointer && "target" == o.pointTo && "number" != j.type(o.position.x) && "number" != j.type(o.position.y) && (x = 0, "center" === this.pointer.align ? "center" != o.position[this._getOpp(o.outside)] && (x += s[this._getOpp(o.outside)] / 2) : "center" === o.position[this._getOpp(o.outside)] ? x += (s[this._getOpp(o.outside)] / 2 - this.pointer.dimensions[this._getOpp(o.outside)] / 2) * (this.pointer.align == this._getTL(this.pointer.align) ? 1 : -1) : x += this.pointer.align != o.position[this._getOpp(o.outside)] ? s[this._getOpp(o.outside)] * (-1 !== j.inArray(this.pointer.align, ["top", "left"]) ? 1 : -1) + this.pointer.dimensions[this._getOpp(o.outside)] / 2 * (-1 !== j.inArray(this.pointer.align, ["top", "left"]) ? -1 : 1) : this.pointer.dimensions[this._getOpp(o.outside)] / 2 * (-1 !== j.inArray(this.pointer.align, ["top", "left"]) ? 1 : -1), x *= o.position[this._getOpp(o.outside)] == this.pointer.alignAttribute ? -1 : 1, x += this.pointer.offset * (this.pointer.align == this._getOpp(this._getTL(this.pointer.align)) ? 1 : -1), p[this._getTL(this._getOpp(this.pointer.xy))] += x), p[o.attributes.x] += o.offset.x, p[o.attributes.y] += o.offset.y, this.wrapper.css(p), o.adjustPosition) {
      this.positionAdjusted && (this.pointer && this.wrapper.css("padding", 0).css("padding-" + this._getOpp(this.outside), this.pointer.dimensions[this._getXY(this.outside)]).removeClass("jBox-pointerPosition-" + this._getOpp(this.pointer.position)).addClass("jBox-pointerPosition-" + this.pointer.position), this.pointer && this.pointer.element.attr("class", "jBox-pointer jBox-pointer-" + this._getOpp(this.outside)).css(this.pointer.margin), this.positionAdjusted = !1, this.flipped = !1);
      var d = t.top > p.top - (o.adjustDistance.top || 0),
          c = t.right < p.left + s.x + (o.adjustDistance.right || 0),
          u = t.bottom < p.top + s.y + (o.adjustDistance.bottom || 0),
          g = t.left > p.left - (o.adjustDistance.left || 0),
          i = g ? "left" : c ? "right" : null,
          m = d ? "top" : u ? "bottom" : null;

      if (i || m) {
        if (("Modal" == this.type || "Confirm" == this.type) && "number" == j.type(this.options.position.x) && "number" == j.type(this.options.position.y)) {
          var f = 0,
              x = 0;
          return this.options.holdPosition && (g ? f = t.left - (p.left - (o.adjustDistance.left || 0)) : c && (f = t.right - (p.left + s.x + (o.adjustDistance.right || 0))), d ? x = t.top - (p.top - (o.adjustDistance.top || 0)) : u && (x = t.bottom - (p.top + s.y + (o.adjustDistance.bottom || 0))), this.options.position.x = Math.max(t.top, this.options.position.x + f), this.options.position.y = Math.max(t.left, this.options.position.y + x), l("x"), l("y"), this.wrapper.css(p)), this._fireEvent("onPosition"), this;
        }

        !0 !== o.adjustPosition && "flip" !== o.adjustPosition || (y = function (t) {
          this.wrapper.css(this._getTL(t), p[this._getTL(t)] + (s[this._getXY(t)] + o.offset[this._getXY(t)] * ("top" == t || "left" == t ? -2 : 2) + e[this._getXY(t)]) * ("top" == t || "left" == t ? 1 : -1)), this.pointer && this.wrapper.removeClass("jBox-pointerPosition-" + this.pointer.position).addClass("jBox-pointerPosition-" + this._getOpp(this.pointer.position)).css("padding", 0).css("padding-" + t, this.pointer.dimensions[this._getXY(t)]), this.pointer && this.pointer.element.attr("class", "jBox-pointer jBox-pointer-" + t), this.positionAdjusted = !0, this.flipped = !0;
        }.bind(this), r.x && y(this.options.position.x), r.y && y(this.options.position.y));
        var y = "x" == this._getXY(this.outside) ? m : i;
        this.pointer && "target" == o.pointTo && "flip" != o.adjustPosition && this._getXY(y) == this._getOpp(this._getXY(this.outside)) && (m = "center" == this.pointer.align ? s[this._getXY(y)] / 2 - this.pointer.dimensions[this._getOpp(this.pointer.xy)] / 2 - parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) * (y != this._getTL(y) ? -1 : 1) : y == this.pointer.alignAttribute ? parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) : s[this._getXY(y)] - parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) - this.pointer.dimensions[this._getXY(y)], i = y == this._getTL(y) ? t[this._getTL(y)] - p[this._getTL(y)] + o.adjustDistance[y] : -1 * (t[this._getOpp(this._getTL(y))] - p[this._getTL(y)] - o.adjustDistance[y] - s[this._getXY(y)]), y == this._getOpp(this._getTL(y)) && p[this._getTL(y)] - i < t[this._getTL(y)] + o.adjustDistance[this._getTL(y)] && (i -= t[this._getTL(y)] + o.adjustDistance[this._getTL(y)] - (p[this._getTL(y)] - i)), (i = Math.min(i, m)) <= m && 0 < i && (this.pointer.element.css("margin-" + this.pointer.alignAttribute, parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) - i * (y != this.pointer.alignAttribute ? -1 : 1)), this.wrapper.css(this._getTL(y), p[this._getTL(y)] + i * (y != this._getTL(y) ? -1 : 1)), this.positionAdjusted = !0));
      }
    }

    return this._fireEvent("onPosition"), this;
  }, (h.prototype.unscroll = function (t) {
    if (this.set = function (t, i) {
      window.unscrollStore || (window.unscrollStore = {}), window.unscrollStore[t] = i;
    }, this.get = function (t) {
      return window.unscrollStore ? window.unscrollStore[t] : null;
    }, this.getScrollbarWidth = function () {
      if (this.get("scrollbarWidth")) return this.get("scrollbarWidth") + "px";
      var t = document.createElement("div");
      t.style.width = "100px", t.style.height = "100px", t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-10000", document.body.appendChild(t);
      var i = t.offsetWidth - t.clientWidth;
      return document.body.removeChild(t), this.set("scrollbarWidth", i), i + "px";
    }, this.getElementsToAdjust = function (o) {
      (o = "string" == typeof (o = o || []) ? [[o, "padding-right"]] : o).forEach(function (t, i) {
        "string" == typeof t && (o[i] = [t, "padding-right"]);
      });

      for (var t = !1, i = 0; i < o.length; i++) {
        -1 !== o[i][0].indexOf("body") && (t = !0);
      }

      return !1 === t && o.push(["body", "padding-right"]), o;
    }, this.pageHasScrollbar = function () {
      return this.getScrollbarWidth() && document.body.offsetHeight > window.innerHeight;
    }, this.pageHasScrollbar()) {
      t = this.getElementsToAdjust(t);

      for (var i = 0; i < t.length; i++) {
        for (var o = document.querySelectorAll(t[i][0]), s = 0; s < o.length; s++) {
          if (o[s].getAttribute("data-unscroll")) return;
          var e = t[i][1],
              n = window.getComputedStyle(o[s]).getPropertyValue(e);
          o[s].setAttribute("data-unscroll", e), o[s].style[e] = "calc(" + (n = n || "0px") + " " + ("padding-right" == e || "right" == e ? "+" : "-") + " " + this.getScrollbarWidth() + ")";
        }
      }
    }

    var a, h;
    document.getElementById("unscroll-class-name") || (a = document.head || document.getElementsByTagName("head")[0], (h = document.createElement("style")).type = "text/css", h.setAttribute("id", "unscroll-class-name"), h.appendChild(document.createTextNode(".unscrollable { overflow: hidden !important; }")), a.appendChild(h)), document.body.classList.add("unscrollable");
  }).reset = function () {
    for (var t = document.querySelectorAll("[data-unscroll]"), i = 0; i < t.length; i++) {
      var o = t[i].getAttribute("data-unscroll");
      t[i].style[o] = null, t[i].removeAttribute("data-unscroll");
    }

    document.body.classList.remove("unscrollable");
  }, h.prototype.open = function (t) {
    if (t = t || {}, this.isDestroyed) return this;
    if (this.wrapper || this._create(), this._styles || (this._styles = j("<style/>").append(this._animationCSS).appendTo(j("head"))), this.timer && clearTimeout(this.timer), this._blockBodyClick(), this.isDisabled) return this;
    this.options.closeOnEsc && j(document).on("keyup.jBox-" + this.id, function (t) {
      27 == t.keyCode && this.close({
        ignoreDelay: !0
      });
    }.bind(this)), !0 !== this.options.closeOnClick && "body" !== this.options.closeOnClick || (j("body").on("click.jBox-" + this.id + " tap.jBox-" + this.id, function (t) {
      this.blockBodyClick || "body" == this.options.closeOnClick && (t.target == this.wrapper[0] || this.wrapper.has(t.target).length) || this.close({
        ignoreDelay: !0
      });
    }.bind(this)), this.isTouchDevice && j("body > *").on("click.jBox-" + this.id + " tap.jBox-" + this.id, function () {
      return !0;
    }));

    var i = function () {
      !0 === this.adjustZIndexOnOpen && (h.zIndexMax = Math.max(parseInt(this.wrapper.css("zIndex"), 10), this.options.zIndex, h.zIndexMax || 0, h.zIndexMaxDragover || 0) + 2, this.wrapper.css("zIndex", h.zIndexMax), this.options.zIndex = h.zIndexMax), this.source && this.options.getTitle && this.source.attr(this.options.getTitle) && this.setTitle(this.source.attr(this.options.getTitle), !0), this.source && this.options.getContent && (this.source.data("jBox-getContent") ? this.setContent(this.source.data("jBox-getContent"), !0) : this.source.attr(this.options.getContent) ? this.setContent(this.source.attr(this.options.getContent), !0) : "html" == this.options.getContent && this.setContent(this.source.html(), !0)), this._fireEvent("onOpen"), (this.options.ajax && (this.options.ajax.url || this.source && this.source.attr(this.options.ajax.getURL)) && (!this.ajaxLoaded || this.options.ajax.reload) || t.ajax && (t.ajax.url || t.ajax.data)) && ("strict" == this.options.ajax.reload || !this.source || !this.source.data("jBox-ajax-data") || t.ajax && (t.ajax.url || t.ajax.data) ? this.ajax(t.ajax || null, !0) : this.setContent(this.source.data("jBox-ajax-data"))), this.positionedOnOpen && !this.options.repositionOnOpen || !this.position(t) || (this.positionedOnOpen = !0), this.isClosing && this._abortAnimation(), this.isOpen || (this.isOpen = !0, this.options.autoClose && (this.options.delayClose = this.options.autoClose) && this.close(), this._attachEvents(), this.options.blockScroll && (this.options.blockScrollAdjust ? h.blockScrollScopes ? h.blockScrollScopes++ : (h.blockScrollScopes = 1, this.unscroll(Array.isArray(this.options.blockScrollAdjust) || "string" == typeof this.options.blockScrollAdjust ? this.options.blockScrollAdjust : null)) : j("body").addClass("jBox-blockScroll-" + this.id)), this.options.overlay && (this._showOverlay(), this.position()), this.options.animation && !this.isClosing && this._animate("open"), this.options.audio && this.options.audio.open && this.audio(this.options.audio.open, this.options.volume.open), this.options.fade ? this.wrapper.stop().animate({
        opacity: 1
      }, {
        queue: !1,
        duration: this.options.fade,
        start: function () {
          this.isOpening = !0, this.wrapper.css({
            display: "block"
          });
        }.bind(this),
        complete: function () {
          this._fireEvent("onOpenComplete");
        }.bind(this),
        always: function () {
          this.isOpening = !1, setTimeout(function () {
            this.positionOnFadeComplete && this.position() && (this.positionOnFadeComplete = !1);
          }.bind(this), 10);
        }.bind(this)
      }) : (this.wrapper.css({
        display: "block",
        opacity: 1
      }), this.positionOnFadeComplete && this.position() && (this.positionOnFadeComplete = !1), this._fireEvent("onOpenComplete")));
    }.bind(this);

    return !this.options.delayOpen || this.isOpen || this.isClosing || t.ignoreDelay ? i() : this.timer = setTimeout(i, this.options.delayOpen), this;
  }, h.prototype.close = function (t) {
    if (t = t || {}, j("body").off("click.jBox-" + this.id + " tap.jBox-" + this.id), this.isTouchDevice && j("body > *").off("click.jBox-" + this.id + " tap.jBox-" + this.id), this.isDestroyed || this.isClosing) return this;
    if (this.timer && clearTimeout(this.timer), this._blockBodyClick(), this.isDisabled) return this;

    var i,
        o,
        s,
        e = function () {
      var t;
      this._fireEvent("onClose"), this.options.cancelAjaxOnClose && this.cancelAjax(), this.isOpen && (this.isOpen = !1, this._detachEvents(), this.options.blockScroll && (this.options.blockScrollAdjust ? (h.blockScrollScopes = h.blockScrollScopes ? --h.blockScrollScopes : 0) || this.unscroll.reset() : j("body").removeClass("jBox-blockScroll-" + this.id)), this.options.overlay && this._hideOverlay(), this.options.animation && !this.isOpening && this._animate("close"), this.options.audio && this.options.audio.close && this.audio(this.options.audio.close, this.options.volume.close), (t = this.isTouchDevice && "mouse" == this.options.target ? 0 : this.options.fade) ? this.wrapper.stop().animate({
        opacity: 0
      }, {
        queue: !1,
        duration: t,
        start: function () {
          this.isClosing = !0;
        }.bind(this),
        complete: function () {
          this.wrapper.css({
            display: "none"
          }), this._fireEvent("onCloseComplete");
        }.bind(this),
        always: function () {
          this.isClosing = !1;
        }.bind(this)
      }) : (this.wrapper.css({
        display: "none",
        opacity: 0
      }), this._fireEvent("onCloseComplete")));
    }.bind(this);

    return t.ignoreDelay || this.isTouchDevice && "mouse" == this.options.target ? e() : (this.options.delayOnHover || this.options.showCountdown) && 10 < this.options.delayClose ? (o = (i = this).options.delayClose, s = Date.now(), this.options.showCountdown && !this.inner && (t = j('<div class="jBox-countdown" />'), this.inner = j('<div class="jBox-countdown-inner" />'), t.prepend(this.inner), j("#" + this.id).append(t)), this.countdown = function () {
      var t = Date.now();
      i.isHovered || (o -= t - s), s = t, 0 < o ? (i.options.showCountdown && i.inner.css("width", 100 * o / i.options.delayClose + "%"), window.requestAnimationFrame(i.countdown)) : e();
    }, window.requestAnimationFrame(this.countdown)) : this.timer = setTimeout(e, Math.max(this.options.delayClose, 10)), this;
  }, h.prototype.toggle = function (t) {
    return this[this.isOpen ? "close" : "open"](t), this;
  }, h.prototype.disable = function () {
    return this.isDisabled = !0, this;
  }, h.prototype.enable = function () {
    return this.isDisabled = !1, this;
  }, h.prototype.hide = function () {
    return this.disable(), this.wrapper && (this.cacheWrapperDisplay = this.wrapper.css("display"), this.wrapper.css({
      display: "none"
    })), this.overlay && (this.cacheOverlayDisplay = this.overlay.css("display"), this.overlay.css({
      display: "none"
    })), this;
  }, h.prototype.show = function () {
    return this.enable(), this.wrapper && this.cacheWrapperDisplay && (this.wrapper.css({
      display: this.cacheWrapperDisplay
    }), this.cacheWrapperDisplay = null), this.overlay && this.cacheOverlayDisplay && (this.overlay.css({
      display: this.cacheOverlayDisplay
    }), this.cacheOverlayDisplay = null), this;
  }, h.prototype.ajax = function (o, i) {
    o = o || {}, j.each([["getData", "data"], ["getURL", "url"]], function (t, i) {
      this.options.ajax[i[0]] && !o[i[1]] && this.source && null != this.source.attr(this.options.ajax[i[0]]) && (o[i[1]] = this.source.attr(this.options.ajax[i[0]]) || "");
    }.bind(this));
    var t = j.extend(!0, {}, this.options.ajax);
    this.cancelAjax();

    var s = o.beforeSend || t.beforeSend || function () {},
        e = o.complete || t.complete || function () {},
        n = o.success || t.success || function () {},
        a = o.error || t.error || function () {},
        h = j.extend(!0, t, o);

    return h.beforeSend = function (t) {
      h.loadingClass && this.wrapper.addClass(!0 === h.loadingClass ? "jBox-loading" : h.loadingClass), h.spinner && (this.spinnerDelay = setTimeout(function () {
        this.wrapper.addClass("jBox-loading-spinner"), h.spinnerReposition && (i ? this.positionOnFadeComplete = !0 : this.position()), this.spinner = j(!0 !== h.spinner ? h.spinner : '<div class="jBox-spinner"></div>').appendTo(this.container), this.titleContainer && "absolute" == this.spinner.css("position") && this.spinner.css({
          transform: "translateY(" + .5 * this.titleContainer.outerHeight() + "px)"
        });
      }.bind(this), "" != this.content.html() && h.spinnerDelay || 0)), s.bind(this)(t);
    }.bind(this), h.complete = function (t) {
      this.spinnerDelay && clearTimeout(this.spinnerDelay), this.wrapper.removeClass("jBox-loading jBox-loading-spinner jBox-loading-spinner-delay"), this.spinner && this.spinner.length && this.spinner.remove() && h.spinnerReposition && (i ? this.positionOnFadeComplete = !0 : this.position()), this.ajaxLoaded = !0, e.bind(this)(t);
    }.bind(this), h.success = function (t) {
      h.setContent && this.setContent(t, !0) && (i ? this.positionOnFadeComplete = !0 : this.position()), h.setContent && this.source && this.source.data("jBox-ajax-data", t), n.bind(this)(t);
    }.bind(this), h.error = function (t) {
      a.bind(this)(t);
    }.bind(this), this.ajaxRequest = j.ajax(h), this;
  }, h.prototype.cancelAjax = function () {
    this.ajaxRequest && (this.ajaxRequest.abort(), this.ajaxLoaded = !1);
  }, h.prototype.audio = function (t, i) {
    if (!t) return this;
    var o;
    (h._audio = !h._audio ? {} : h._audio)[t] || (o = j("<audio/>"), j("<source/>", {
      src: t + ".mp3"
    }).appendTo(o), j("<source/>", {
      src: t + ".ogg"
    }).appendTo(o), h._audio[t] = o[0]), h._audio[t].volume = Math.min((null != i ? i : 100) / 100, 1);

    try {
      h._audio[t].pause(), h._audio[t].currentTime = 0;
    } catch (t) {}

    return h._audio[t].play(), this;
  }, h._animationSpeeds = {
    tada: 1e3,
    tadaSmall: 1e3,
    flash: 500,
    shake: 400,
    pulseUp: 250,
    pulseDown: 250,
    popIn: 250,
    popOut: 250,
    fadeIn: 200,
    fadeOut: 200,
    slideUp: 400,
    slideRight: 400,
    slideLeft: 400,
    slideDown: 400
  }, h.prototype.animate = function (t, i) {
    i = i || {}, this.animationTimeout || (this.animationTimeout = {}), i.element || (i.element = this.wrapper), i.element.data("jBox-animating-id") || i.element.data("jBox-animating-id", h._getUniqueElementID()), i.element.data("jBox-animating") && (i.element.removeClass(i.element.data("jBox-animating")).data("jBox-animating", null), this.animationTimeout[i.element.data("jBox-animating-id")] && clearTimeout(this.animationTimeout[i.element.data("jBox-animating-id")])), i.element.addClass("jBox-animated-" + t).data("jBox-animating", "jBox-animated-" + t), this.animationTimeout[i.element.data("jBox-animating-id")] = setTimeout(function () {
      i.element.removeClass(i.element.data("jBox-animating")).data("jBox-animating", null), i.complete && i.complete();
    }, h._animationSpeeds[t]);
  }, h.prototype.swipeDetector = function (i, o) {
    var s = 0,
        e = 0,
        n = 0,
        a = 0,
        h = 0;

    function t(t) {
      o.useOnlyTouch && !t.originalEvent.touches || (t.originalEvent.touches && (t = t.originalEvent.touches[0]), 0 === s && (s = 1, e = t.clientX, n = t.clientY));
    }

    function r(t) {
      2 === s && (s = 0, Math.abs(a) > Math.abs(h) && Math.abs(a) > o.swipeThreshold ? a < 0 ? i.trigger(j.Event("swipeLeft.sd")) : i.trigger(j.Event("swipeRight.sd")) : Math.abs(h) > o.swipeThreshold && (h < 0 ? i.trigger(j.Event("swipeUp.sd")) : i.trigger(j.Event("swipeDown.sd"))));
    }

    function p(t) {
      var i;
      1 === s && (i = (t = t.originalEvent.touches ? t.originalEvent.touches[0] : t).clientX - e, t = t.clientY - n, (Math.abs(i) > o.swipeThreshold || Math.abs(t) > o.swipeThreshold) && (s = 2, a = i, h = t));
    }

    return o = j.extend({
      swipeThreshold: 70,
      useOnlyTouch: !1
    }, o), i.on("mousedown touchstart", t), j("html").on("mouseup touchend", r), j("html").on("mousemove touchmove", p), i;
  }, h.prototype.destroy = function () {
    return this.detach(), this.isOpen && this.close({
      ignoreDelay: !0
    }), this.wrapper && this.wrapper.remove(), this.overlay && this.overlay.remove(), this._styles && this._styles.remove(), this.isDestroyed = !0, this;
  }, h._getUniqueID = (t = 1, function () {
    return t++;
  }), h._getUniqueElementID = (i = 1, function () {
    return i++;
  }), h._pluginOptions = {}, h.plugin = function (t, i) {
    h._pluginOptions[t] = i;
  }, j.fn.jBox = function (t, i) {
    return new h(t = t || {}, j.extend(i = i || {}, {
      attach: this
    }));
  }, h;
}

function jBoxConfirmWrapper(jBox, jQuery) {
  new jBox.plugin("Confirm", {
    confirmButton: "Submit",
    cancelButton: "Cancel",
    confirm: null,
    cancel: null,
    closeOnConfirm: !0,
    target: window,
    fixed: !0,
    attach: "[data-confirm]",
    getContent: "data-confirm",
    content: "Do you really want to do this?",
    minWidth: 360,
    maxWidth: 500,
    blockScroll: !0,
    closeOnEsc: !0,
    closeOnClick: !1,
    closeButton: !1,
    overlay: !0,
    animation: "zoomIn",
    preventDefault: !0,
    _onAttach: function _onAttach(t) {
      var i;
      this.options.confirm || (i = t.attr("onclick") ? t.attr("onclick") : t.attr("href") ? t.attr("target") ? 'window.open("' + t.attr("href") + '", "' + t.attr("target") + '");' : 'window.location.href = "' + t.attr("href") + '";' : "", t.prop("onclick", null).data("jBox-Confirm-submit", i));
    },
    _onCreated: function _onCreated() {
      this.wrapper.addClass("jBox-Modal"), this.footer = jQuery('<div class="jBox-Confirm-footer"/>'), jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-cancel"/>').html(this.options.cancelButton).on("click tap", function () {
        this.options.cancel && this.options.cancel(this.source), this.close();
      }.bind(this)).appendTo(this.footer), this.submitButton = jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-submit"/>').html(this.options.confirmButton).appendTo(this.footer), this.footer.appendTo(this.container);
    },
    _onOpen: function _onOpen() {
      this.submitButton.off("click.jBox-Confirm" + this.id + " tap.jBox-Confirm" + this.id).on("click.jBox-Confirm" + this.id + " tap.jBox-Confirm" + this.id, function () {
        this.options.confirm ? this.options.confirm(this.source) : eval(this.source.data("jBox-Confirm-submit")), this.options.closeOnConfirm && this.close();
      }.bind(this));
    }
  });
}

function jBoxImageWrapper(t, a) {
  new t.plugin("Image", {
    src: "href",
    gallery: "data-jbox-image",
    imageLabel: "title",
    imageFade: 360,
    imageSize: "contain",
    imageCounter: !1,
    imageCounterSeparator: "/",
    downloadButton: !1,
    downloadButtonText: null,
    downloadButtonUrl: null,
    mobileImageAttr: null,
    mobileImageBreakpoint: null,
    preloadFirstImage: !1,
    target: window,
    attach: "[data-jbox-image]",
    fixed: !0,
    blockScroll: !0,
    closeOnEsc: !0,
    closeOnClick: "button",
    closeButton: !0,
    overlay: !0,
    animation: "zoomIn",
    preventDefault: !0,
    width: "100%",
    height: "100%",
    adjustDistance: {
      top: 40,
      right: 0,
      bottom: 40,
      left: 0
    },
    _onInit: function _onInit() {
      this.images = this.currentImage = {}, this.imageZIndex = 1, this.initImage = function (t) {
        var i, o;
        (t = a(t)).data("jBox-image-gallery") || (i = t.attr(this.options.src), this.options.mobileImageAttr && this.options.mobileImageBreakpoint && t.attr(this.options.mobileImageAttr) && a(window).width() <= this.options.mobileImageBreakpoint && (i = t.attr(this.options.mobileImageAttr)), o = t.attr(this.options.gallery) || "default", this.images[o] || (this.images[o] = []), this.images[o].push({
          src: i,
          label: t.attr(this.options.imageLabel) || "",
          downloadUrl: this.options.downloadButtonUrl && t.attr(this.options.downloadButtonUrl) ? t.attr(this.options.downloadButtonUrl) : null
        }), "title" == this.options.imageLabel && t.removeAttr("title"), t.data("jBox-image-gallery", o), t.data("jBox-image-id", this.images[o].length - 1));
      }.bind(this), this.attachedElements && this.attachedElements.length && a.each(this.attachedElements, function (t, i) {
        this.initImage(i);
      }.bind(this));

      var n = function (t, i, o, s) {
        if (!a("#jBox-image-" + t + "-" + i).length) {
          var e = a("<div/>", {
            id: "jBox-image-" + t + "-" + i,
            "class": "jBox-image-container" + (o ? " jBox-image-" + t + "-current" : "")
          }).css({
            backgroundSize: this.options.imageSize,
            opacity: s ? 1 : 0,
            zIndex: o ? this.imageZIndex++ : 0
          }).appendTo(this.content);
          return this.swipeDetector(e).on("swipeLeft.sd swipeRight.sd", function (t) {
            "swipeLeft" === t.type ? this.showImage("next") : "swipeRight" === t.type && this.showImage("prev");
          }.bind(this)), a("<div/>", {
            id: "jBox-image-label-" + t + "-" + i,
            "class": "jBox-image-label" + (o ? " active" : "")
          }).html(this.images[t][i].label).on("click tap", function () {
            a(this).toggleClass("expanded");
          }).appendTo(this.imageLabelContainer), o && e.animate({
            opacity: 1
          }, s ? 0 : this.options.imageFade), e;
        }
      }.bind(this);

      this.downloadImage = function (t) {
        var i = document.createElement("a");
        i.href = t, i.setAttribute("download", t.substring(t.lastIndexOf("/") + 1)), document.body.appendChild(i), i.click();
      };

      var e = function (i, o, t, s) {
        var e = n(i, o, t, s);
        e.addClass("jBox-image-loading"), a('<img src="' + this.images[i][o].src + '" />').each(function () {
          var t = new Image();
          t.onload = function () {
            e.removeClass("jBox-image-loading"), e.css({
              backgroundImage: 'url("' + this.images[i][o].src + '")'
            });
          }.bind(this), t.onerror = function () {
            e.removeClass("jBox-image-loading"), e.addClass("jBox-image-not-found");
          }.bind(this), t.src = this.images[i][o].src;
        }.bind(this));
      }.bind(this);

      this.showImage = function (t) {
        var i, o, s;
        if ("open" != t) i = this.currentImage.gallery, s = (s = this.currentImage.id + (+("prev" == t) ? -1 : 1)) > this.images[i].length - 1 ? 0 : s < 0 ? this.images[i].length - 1 : s;else {
          if (this.source) i = this.source.data("jBox-image-gallery"), s = this.source.data("jBox-image-id");else {
            if (!this.attachedElements || !this.attachedElements.length) return;
            i = a(this.attachedElements[0]).data("jBox-image-gallery"), s = a(this.attachedElements[0]).data("jBox-image-id");
          }
          this.images && this.images[i] && a(".jBox-image-pointer-prev, .jBox-image-pointer-next").css({
            display: 1 < this.images[i].length ? "block" : "none"
          });
        }
        a(".jBox-image-" + i + "-current").length && a(".jBox-image-" + i + "-current").removeClass("jBox-image-" + i + "-current").animate({
          opacity: 0
        }, "open" == t ? 0 : this.options.imageFade), this.currentImage = {
          gallery: i,
          id: s
        }, a("#jBox-image-" + i + "-" + s).length ? a("#jBox-image-" + i + "-" + s).addClass("jBox-image-" + i + "-current").css({
          zIndex: this.imageZIndex++,
          opacity: 0
        }).animate({
          opacity: 1
        }, "open" == t ? 0 : this.options.imageFade) : e(i, s, !0, "open" === t), o = i, t = s, a(".jBox-image-label.active").removeClass("active expanded"), a("#jBox-image-label-" + o + "-" + t).addClass("active"), this.imageCounter && (this.images[i] && 1 < this.images[i].length ? (this.wrapper.addClass("jBox-image-has-counter"), this.imageCounter.find(".jBox-image-counter-all").html(this.images[i].length), this.imageCounter.find(".jBox-image-counter-current").html(s + 1)) : this.wrapper.removeClass("jBox-image-has-counter")), this.images[i] && this.images[i].length - 1 && (s = (s = s + 1) > this.images[i].length - 1 ? 0 : s < 0 ? this.images[i].length - 1 : s, a("#jBox-image-" + i + "-" + s).length || e(i, s, !1, !1));
      }, this.options.preloadFirstImage && a(window).on("load", function () {
        this.showImage("open");
      }.bind(this));
    },
    _onAttach: function _onAttach(t) {
      this.initImage && this.initImage(t);
    },
    _onCreated: function _onCreated() {
      this.imageLabelWrapper = a('<div class="jBox-image-label-wrapper"/>').appendTo(this.wrapper), this.imagePrevButton = a('<div class="jBox-image-pointer-prev"/>').on("click tap", function () {
        this.showImage("prev");
      }.bind(this)), this.imageNextButton = a('<div class="jBox-image-pointer-next"/>').on("click tap", function () {
        this.showImage("next");
      }.bind(this)), this.imageLabelContainer = a('<div class="jBox-image-label-container"/>'), this.imageLabelWrapper.append(this.imagePrevButton).append(this.imageLabelContainer).append(this.imageNextButton), this.options.downloadButton && (this.downloadButton = a("<div/>", {
        "class": "jBox-image-download-button-wrapper"
      }).appendTo(this.wrapper).append(this.options.downloadButtonText ? a("<div/>", {
        "class": "jBox-image-download-button-text"
      }).html(this.options.downloadButtonText) : null).append(a("<div/>", {
        "class": "jBox-image-download-button-icon"
      })).on("click tap", function () {
        var t;
        t = this.images[this.currentImage.gallery][this.currentImage.id].downloadUrl || this.wrapper.find(".jBox-image-" + this.currentImage.gallery + "-current")[0].style.backgroundImage.slice(4, -1).replace(/["']/g, ""), this.downloadImage(t);
      }.bind(this))), this.options.imageCounter && (this.imageCounter = a("<div/>", {
        "class": "jBox-image-counter-container"
      }).insertAfter(this.imageLabelContainer), this.imageCounter.append(a("<span/>", {
        "class": "jBox-image-counter-current"
      })).append(a("<span/>").html(this.options.imageCounterSeparator)).append(a("<span/>", {
        "class": "jBox-image-counter-all"
      })));
    },
    _onOpen: function _onOpen() {
      a(document).on("keyup.jBox-Image-" + this.id, function (t) {
        37 == t.keyCode && this.showImage("prev"), 39 == t.keyCode && this.showImage("next");
      }.bind(this)), this.showImage("open");
    },
    _onClose: function _onClose() {
      a(document).off("keyup.jBox-Image-" + this.id);
    },
    _onCloseComplete: function _onCloseComplete() {
      this.wrapper.find(".jBox-image-container").css("opacity", 0);
    }
  });
}

function jBoxNoticeWrapper(t, a) {
  new t.plugin("Notice", {
    color: null,
    stack: !0,
    stackSpacing: 10,
    autoClose: 6e3,
    attributes: {
      x: "right",
      y: "top"
    },
    position: {
      x: 15,
      y: 15
    },
    responsivePositions: {
      500: {
        x: 5,
        y: 5
      },
      768: {
        x: 10,
        y: 10
      }
    },
    target: window,
    fixed: !0,
    animation: "zoomIn",
    closeOnClick: "box",
    zIndex: 12e3,
    _onInit: function _onInit() {
      this.defaultNoticePosition = a.extend({}, this.options.position), this._adjustNoticePositon = function () {
        var t = a(window),
            o = t.width();
        t.height();
        this.options.position = a.extend({}, this.defaultNoticePosition), a.each(this.options.responsivePositions, function (t, i) {
          if (o <= t) return this.options.position = i, !1;
        }.bind(this)), this.options.adjustDistance = {
          top: this.options.position.y,
          right: this.options.position.x,
          bottom: this.options.position.y,
          left: this.options.position.x
        };
      }, this.options.content instanceof a && (this.options.content = this.options.content.clone().attr("id", "")), a(window).on("resize.responsivejBoxNotice-" + this.id, function (t) {
        this.isOpen && this._adjustNoticePositon();
      }.bind(this)), this.open();
    },
    _onCreated: function _onCreated() {
      this.wrapper.addClass("jBox-Notice-color jBox-Notice-" + (this.options.color || "gray")), this.wrapper.data("jBox-Notice-position", this.options.attributes.x + "-" + this.options.attributes.y);
    },
    _onOpen: function _onOpen() {
      this.options.stack || (this._adjustNoticePositon(), a.each(a(".jBox-Notice"), function (t, i) {
        (i = a(i)).attr("id") != this.id && i.data("jBox-Notice-position") == this.options.attributes.x + "-" + this.options.attributes.y && (this.options.stack || i.data("jBox").close({
          ignoreDelay: !0
        }));
      }.bind(this)));
    },
    _onPosition: function _onPosition() {
      var t,
          s = {};

      for (t in a.each(a(".jBox-Notice"), function (t, i) {
        var o = (i = a(i)).data("jBox-Notice-position");
        s[o] || (s[o] = []), s[o].push(i);
      }), s) {
        var i = t.split("-")[1];
        s[t].reverse();
        var o,
            e = 0;

        for (o in s[t]) {
          var n = a(s[t][o]);
          n.css("margin-" + i, e), e += n.outerHeight() + this.options.stackSpacing;
        }
      }
    },
    _onCloseComplete: function _onCloseComplete() {
      this.destroy(), this.options._onPosition.bind(this).call();
    }
  });
}

!function (i, o) {
  "function" == typeof define && define.amd ? define(["jquery"], function (t) {
    return i.jBox = o(t);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = i.jBox = o(require("jquery")) : i.jBox = o(i.jQuery);
}(void 0, function (t) {
  var i = jBoxWrapper(t);

  try {
    void 0 !== jBoxConfirmWrapper && jBoxConfirmWrapper && jBoxConfirmWrapper(i, t);
  } catch (t) {
    console.error(t);
  }

  try {
    void 0 !== jBoxImageWrapper && jBoxImageWrapper && jBoxImageWrapper(i, t);
  } catch (t) {
    console.error(t);
  }

  try {
    void 0 !== jBoxNoticeWrapper && jBoxNoticeWrapper && jBoxNoticeWrapper(i, t);
  } catch (t) {
    console.error(t);
  }

  return i;
});