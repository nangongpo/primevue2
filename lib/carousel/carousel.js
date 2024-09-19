this.primevue2 = this.primevue2 || {};
this.primevue2.carousel = (function (utils, Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  //
  var script = {
    name: 'Carousel',
    props: {
      value: null,
      page: {
        type: Number,
        default: 0
      },
      numVisible: {
        type: Number,
        default: 1
      },
      numScroll: {
        type: Number,
        default: 1
      },
      responsiveOptions: Array,
      orientation: {
        type: String,
        default: 'horizontal'
      },
      verticalViewPortHeight: {
        type: String,
        default: '300px'
      },
      contentClass: String,
      containerClass: String,
      indicatorsContentClass: String,
      circular: {
        type: Boolean,
        default: false
      },
      autoplayInterval: {
        type: Number,
        default: 0
      }
    },
    data: function data() {
      return {
        id: utils.UniqueComponentId(),
        remainingItems: 0,
        d_numVisible: this.numVisible,
        d_numScroll: this.numScroll,
        d_oldNumScroll: 0,
        d_oldNumVisible: 0,
        d_oldValue: null,
        d_page: this.page,
        totalShiftedItems: this.page * this.numScroll * -1,
        allowAutoplay: !!this.autoplayInterval,
        d_circular: this.circular || this.allowAutoplay,
        swipeThreshold: 20
      };
    },
    isRemainingItemsAdded: false,
    watch: {
      page: function page(newValue) {
        this.d_page = newValue;
      },
      circular: function circular(newValue) {
        this.d_circular = newValue;
      },
      numVisible: function numVisible(newValue, oldValue) {
        this.d_numVisible = newValue;
        this.d_oldNumVisible = oldValue;
      },
      numScroll: function numScroll(newValue, oldValue) {
        this.d_oldNumScroll = oldValue;
        this.d_numScroll = newValue;
      },
      value: function value(oldValue) {
        this.d_oldValue = oldValue;
      }
    },
    methods: {
      step: function step(dir, page) {
        var totalShiftedItems = this.totalShiftedItems;
        var isCircular = this.isCircular();
        if (page != null) {
          totalShiftedItems = this.d_numScroll * page * -1;
          if (isCircular) {
            totalShiftedItems -= this.d_numVisible;
          }
          this.isRemainingItemsAdded = false;
        } else {
          totalShiftedItems += this.d_numScroll * dir;
          if (this.isRemainingItemsAdded) {
            totalShiftedItems += this.remainingItems - this.d_numScroll * dir;
            this.isRemainingItemsAdded = false;
          }
          var originalShiftedItems = isCircular ? totalShiftedItems + this.d_numVisible : totalShiftedItems;
          page = Math.abs(Math.floor(originalShiftedItems / this.d_numScroll));
        }
        if (isCircular && this.d_page === this.totalIndicators - 1 && dir === -1) {
          totalShiftedItems = -1 * (this.value.length + this.d_numVisible);
          page = 0;
        } else if (isCircular && this.d_page === 0 && dir === 1) {
          totalShiftedItems = 0;
          page = this.totalIndicators - 1;
        } else if (page === this.totalIndicators - 1 && this.remainingItems > 0) {
          totalShiftedItems += this.remainingItems * -1 - this.d_numScroll * dir;
          this.isRemainingItemsAdded = true;
        }
        if (this.$refs.itemsContainer) {
          utils.DomHandler.removeClass(this.$refs.itemsContainer, 'p-items-hidden');
          this.$refs.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
          this.$refs.itemsContainer.style.transition = 'transform 500ms ease 0s';
        }
        this.totalShiftedItems = totalShiftedItems;
        this.$emit('update:page', page);
        this.d_page = page;
      },
      calculatePosition: function calculatePosition() {
        if (this.$refs.itemsContainer && this.responsiveOptions) {
          var windowWidth = window.innerWidth;
          var matchedResponsiveOptionsData = {
            numVisible: this.numVisible,
            numScroll: this.numScroll
          };
          for (var i = 0; i < this.responsiveOptions.length; i++) {
            var res = this.responsiveOptions[i];
            if (parseInt(res.breakpoint, 10) >= windowWidth) {
              matchedResponsiveOptionsData = res;
            }
          }
          if (this.d_numScroll !== matchedResponsiveOptionsData.numScroll) {
            var page = this.d_page;
            page = parseInt(page * this.d_numScroll / matchedResponsiveOptionsData.numScroll);
            this.totalShiftedItems = matchedResponsiveOptionsData.numScroll * page * -1;
            if (this.isCircular()) {
              this.totalShiftedItems -= matchedResponsiveOptionsData.numVisible;
            }
            this.d_numScroll = matchedResponsiveOptionsData.numScroll;
            this.$emit('update:page', page);
            this.d_page = page;
          }
          if (this.d_numVisible !== matchedResponsiveOptionsData.numVisible) {
            this.d_numVisible = matchedResponsiveOptionsData.numVisible;
          }
        }
      },
      navBackward: function navBackward(e, index) {
        if (this.d_circular || this.d_page !== 0) {
          this.step(1, index);
        }
        this.allowAutoplay = false;
        if (e.cancelable) {
          e.preventDefault();
        }
      },
      navForward: function navForward(e, index) {
        if (this.d_circular || this.d_page < this.totalIndicators - 1) {
          this.step(-1, index);
        }
        this.allowAutoplay = false;
        if (e.cancelable) {
          e.preventDefault();
        }
      },
      onIndicatorClick: function onIndicatorClick(e, index) {
        var page = this.d_page;
        if (index > page) {
          this.navForward(e, index);
        } else if (index < page) {
          this.navBackward(e, index);
        }
      },
      onTransitionEnd: function onTransitionEnd() {
        if (this.$refs.itemsContainer) {
          utils.DomHandler.addClass(this.$refs.itemsContainer, 'p-items-hidden');
          this.$refs.itemsContainer.style.transition = '';
          if ((this.d_page === 0 || this.d_page === this.totalIndicators - 1) && this.isCircular()) {
            this.$refs.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(this.totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(this.totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
          }
        }
      },
      onTouchStart: function onTouchStart(e) {
        var touchobj = e.changedTouches[0];
        this.startPos = {
          x: touchobj.pageX,
          y: touchobj.pageY
        };
      },
      onTouchMove: function onTouchMove(e) {
        if (e.cancelable) {
          e.preventDefault();
        }
      },
      onTouchEnd: function onTouchEnd(e) {
        var touchobj = e.changedTouches[0];
        if (this.isVertical()) {
          this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
        } else {
          this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
        }
      },
      changePageOnTouch: function changePageOnTouch(e, diff) {
        if (Math.abs(diff) > this.swipeThreshold) {
          if (diff < 0) {
            // left
            this.navForward(e);
          } else {
            // right
            this.navBackward(e);
          }
        }
      },
      bindDocumentListeners: function bindDocumentListeners() {
        var _this = this;
        if (!this.documentResizeListener) {
          this.documentResizeListener = function (e) {
            _this.calculatePosition(e);
          };
          window.addEventListener('resize', this.documentResizeListener);
        }
      },
      unbindDocumentListeners: function unbindDocumentListeners() {
        if (this.documentResizeListener) {
          window.removeEventListener('resize', this.documentResizeListener);
          this.documentResizeListener = null;
        }
      },
      startAutoplay: function startAutoplay() {
        var _this2 = this;
        this.interval = setInterval(function () {
          if (_this2.d_page === _this2.totalIndicators - 1) {
            _this2.step(-1, 0);
          } else {
            _this2.step(-1, _this2.d_page + 1);
          }
        }, this.autoplayInterval);
      },
      stopAutoplay: function stopAutoplay() {
        if (this.interval) {
          clearInterval(this.interval);
        }
      },
      createStyle: function createStyle() {
        if (!this.carouselStyle) {
          this.carouselStyle = document.createElement('style');
          this.carouselStyle.type = 'text/css';
          document.body.appendChild(this.carouselStyle);
        }
        var innerHTML = "\n            #".concat(this.id, " .p-carousel-item {\n                flex: 1 0 ").concat(100 / this.d_numVisible, "%\n            }\n        ");
        if (this.responsiveOptions) {
          // eslint-disable-next-line vue/no-mutating-props
          this.responsiveOptions.sort(function (data1, data2) {
            var value1 = data1.breakpoint;
            var value2 = data2.breakpoint;
            var result = null;
            if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
              numeric: true
            });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
            return -1 * result;
          });
          for (var i = 0; i < this.responsiveOptions.length; i++) {
            var res = this.responsiveOptions[i];
            innerHTML += "\n                    @media screen and (max-width: ".concat(res.breakpoint, ") {\n                        #").concat(this.id, " .p-carousel-item {\n                            flex: 1 0 ").concat(100 / res.numVisible, "%\n                        }\n                    }\n                ");
          }
        }
        this.carouselStyle.innerHTML = innerHTML;
      },
      isVertical: function isVertical() {
        return this.orientation === 'vertical';
      },
      isCircular: function isCircular() {
        return this.value && this.d_circular && this.value.length >= this.d_numVisible;
      },
      isAutoplay: function isAutoplay() {
        return this.autoplayInterval && this.allowAutoplay;
      },
      firstIndex: function firstIndex() {
        return this.isCircular() ? -1 * (this.totalShiftedItems + this.d_numVisible) : this.totalShiftedItems * -1;
      },
      lastIndex: function lastIndex() {
        return this.firstIndex() + this.d_numVisible - 1;
      }
    },
    mounted: function mounted() {
      this.createStyle();
      this.calculatePosition();
      if (this.responsiveOptions) {
        this.bindDocumentListeners();
      }
    },
    updated: function updated() {
      var isCircular = this.isCircular();
      var stateChanged = false;
      var totalShiftedItems = this.totalShiftedItems;
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (this.d_oldNumScroll !== this.d_numScroll || this.d_oldNumVisible !== this.d_numVisible || this.d_oldValue.length !== this.value.length) {
        this.remainingItems = (this.value.length - this.d_numVisible) % this.d_numScroll;
        var page = this.d_page;
        if (this.totalIndicators !== 0 && page >= this.totalIndicators) {
          page = this.totalIndicators - 1;
          this.$emit('update:page', page);
          this.d_page = page;
          stateChanged = true;
        }
        totalShiftedItems = page * this.d_numScroll * -1;
        if (isCircular) {
          totalShiftedItems -= this.d_numVisible;
        }
        if (page === this.totalIndicators - 1 && this.remainingItems > 0) {
          totalShiftedItems += -1 * this.remainingItems + this.d_numScroll;
          this.isRemainingItemsAdded = true;
        } else {
          this.isRemainingItemsAdded = false;
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
          stateChanged = true;
        }
        this.d_oldNumScroll = this.d_numScroll;
        this.d_oldNumVisible = this.d_numVisible;
        this.d_oldValue = this.value;
        this.$refs.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
      }
      if (isCircular) {
        if (this.d_page === 0) {
          totalShiftedItems = -1 * this.d_numVisible;
        } else if (totalShiftedItems === 0) {
          totalShiftedItems = -1 * this.value.length;
          if (this.remainingItems > 0) {
            this.isRemainingItemsAdded = true;
          }
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
          stateChanged = true;
        }
      }
      if (!stateChanged && this.isAutoplay()) {
        this.startAutoplay();
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (this.responsiveOptions) {
        this.unbindDocumentListeners();
      }
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
    },
    computed: {
      totalIndicators: function totalIndicators() {
        return this.value ? Math.ceil((this.value.length - this.d_numVisible) / this.d_numScroll) + 1 : 0;
      },
      backwardIsDisabled: function backwardIsDisabled() {
        return this.value && (!this.circular || this.value.length < this.d_numVisible) && this.d_page === 0;
      },
      forwardIsDisabled: function forwardIsDisabled() {
        return this.value && (!this.circular || this.value.length < this.d_numVisible) && (this.d_page === this.totalIndicators - 1 || this.totalIndicators === 0);
      },
      containerClasses: function containerClasses() {
        return ['p-carousel-container', this.containerClass];
      },
      contentClasses: function contentClasses() {
        return ['p-carousel-content ', this.contentClass];
      },
      indicatorsContentClasses: function indicatorsContentClasses() {
        return ['p-carousel-indicators p-reset', this.indicatorsContentClass];
      }
    },
    directives: {
      'ripple': Ripple__default["default"]
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  const isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
      return (id, style) => addStyle(id, style);
  }
  let HEAD;
  const styles = {};
  function addStyle(id, css) {
      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
      if (!style.ids.has(id)) {
          style.ids.add(id);
          let code = css.source;
          if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                      ' */';
          }
          if (!style.element) {
              style.element = document.createElement('style');
              style.element.type = 'text/css';
              if (css.media)
                  style.element.setAttribute('media', css.media);
              if (HEAD === undefined) {
                  HEAD = document.head || document.getElementsByTagName('head')[0];
              }
              HEAD.appendChild(style.element);
          }
          if ('styleSheet' in style.element) {
              style.styles.push(code);
              style.element.styleSheet.cssText = style.styles
                  .filter(Boolean)
                  .join('\n');
          }
          else {
              const index = style.ids.size - 1;
              const textNode = document.createTextNode(code);
              const nodes = style.element.childNodes;
              if (nodes[index])
                  style.element.removeChild(nodes[index]);
              if (nodes.length)
                  style.element.insertBefore(textNode, nodes[index]);
              else
                  style.element.appendChild(textNode);
          }
      }
  }

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      class: ["p-carousel p-component", {
        "p-carousel-vertical": _vm.isVertical(),
        "p-carousel-horizontal": !_vm.isVertical()
      }],
      attrs: {
        id: _vm.id
      }
    }, [_vm.$scopedSlots.header ? _c("div", {
      staticClass: "p-carousel-header"
    }, [_vm._t("header")], 2) : _vm._e(), _vm._v(" "), _c("div", {
      class: _vm.contentClasses
    }, [_c("div", {
      class: _vm.containerClasses
    }, [_c("button", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      class: ["p-carousel-prev p-link", {
        "p-disabled": _vm.backwardIsDisabled
      }],
      attrs: {
        disabled: _vm.backwardIsDisabled,
        type: "button"
      },
      on: {
        click: _vm.navBackward
      }
    }, [_c("span", {
      class: ["p-carousel-prev-icon pi", {
        "pi-chevron-left": !_vm.isVertical(),
        "pi-chevron-up": _vm.isVertical()
      }]
    })]), _vm._v(" "), _c("div", {
      staticClass: "p-carousel-items-content",
      style: [{
        height: _vm.isVertical() ? _vm.verticalViewPortHeight : "auto"
      }],
      on: {
        touchend: _vm.onTouchEnd,
        touchstart: _vm.onTouchStart,
        touchmove: _vm.onTouchMove
      }
    }, [_c("div", {
      ref: "itemsContainer",
      staticClass: "p-carousel-items-container",
      on: {
        transitionend: _vm.onTransitionEnd
      }
    }, [_vm.isCircular() ? _vm._l(_vm.value.slice(-1 * _vm.d_numVisible), function (item, index) {
      return _c("div", {
        key: index + "_scloned",
        class: ["p-carousel-item p-carousel-item-cloned", {
          "p-carousel-item-active": _vm.totalShiftedItems * -1 === _vm.value.length + _vm.d_numVisible,
          "p-carousel-item-start": 0 === index,
          "p-carousel-item-end": _vm.value.slice(-1 * _vm.d_numVisible).length - 1 === index
        }]
      }, [_vm._t("item", null, {
        data: item,
        index: index
      })], 2);
    }) : _vm._e(), _vm._v(" "), _vm._l(_vm.value, function (item, index) {
      return _c("div", {
        key: index,
        class: ["p-carousel-item", {
          "p-carousel-item-active": _vm.firstIndex() <= index && _vm.lastIndex() >= index,
          "p-carousel-item-start": _vm.firstIndex() === index,
          "p-carousel-item-end": _vm.lastIndex() === index
        }]
      }, [_vm._t("item", null, {
        data: item,
        index: index
      })], 2);
    }), _vm._v(" "), _vm.isCircular() ? _vm._l(_vm.value.slice(0, _vm.d_numVisible), function (item, index) {
      return _c("div", {
        key: index + "_fcloned",
        class: ["p-carousel-item p-carousel-item-cloned", {
          "p-carousel-item-active": _vm.totalShiftedItems === 0,
          "p-carousel-item-start": 0 === index,
          "p-carousel-item-end": _vm.value.slice(0, _vm.d_numVisible).length - 1 === index
        }]
      }, [_vm._t("item", null, {
        data: item,
        index: index
      })], 2);
    }) : _vm._e()], 2)]), _vm._v(" "), _c("button", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      class: ["p-carousel-next p-link", {
        "p-disabled": _vm.forwardIsDisabled
      }],
      attrs: {
        disabled: _vm.forwardIsDisabled,
        type: "button"
      },
      on: {
        click: _vm.navForward
      }
    }, [_c("span", {
      class: ["p-carousel-prev-icon pi", {
        "pi-chevron-right": !_vm.isVertical(),
        "pi-chevron-down": _vm.isVertical()
      }]
    })])]), _vm._v(" "), _c("ul", {
      class: _vm.indicatorsContentClasses
    }, _vm._l(_vm.totalIndicators, function (indicator, i) {
      return _c("li", {
        key: "p-carousel-indicator-" + i,
        class: ["p-carousel-indicator", {
          "p-highlight": _vm.d_page === i
        }]
      }, [_c("button", {
        staticClass: "p-link",
        attrs: {
          type: "button"
        },
        on: {
          click: function click($event) {
            return _vm.onIndicatorClick($event, i);
          }
        }
      })]);
    }), 0)]), _vm._v(" "), _vm.$scopedSlots.footer ? _c("div", {
      staticClass: "p-carousel-footer"
    }, [_vm._t("footer")], 2) : _vm._e()]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-107d9cd6_0", {
      source: "\n.p-carousel {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.p-carousel-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: auto;\n}\n.p-carousel-prev,\n.p-carousel-next {\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n  position: relative;\n}\n.p-carousel-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.p-carousel-items-content {\n  overflow: hidden;\n  width: 100%;\n}\n.p-carousel-items-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.p-carousel-indicators {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n.p-carousel-indicator > button {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n/* Vertical */\n.p-carousel-vertical .p-carousel-container {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.p-carousel-vertical .p-carousel-items-container {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\n\n/* Keyboard Support */\n.p-items-hidden .p-carousel-item {\n  visibility: hidden;\n}\n.p-items-hidden .p-carousel-item.p-carousel-item-active {\n  visibility: visible;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/carousel/Carousel.vue"],
        "names": [],
        "mappings": ";AA0iBA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,cAAA;AACA;AAEA;;EAEA,0BAAA;MAAA,2BAAA;UAAA,kBAAA;EACA,mBAAA;EAAA,oBAAA;MAAA,oBAAA;UAAA,YAAA;EACA,sBAAA;MAAA,oBAAA;UAAA,cAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,8BAAA;EAAA,6BAAA;EAAA,2BAAA;MAAA,uBAAA;UAAA,mBAAA;AACA;AAEA;EACA,gBAAA;EACA,WAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,8BAAA;EAAA,6BAAA;EAAA,2BAAA;MAAA,uBAAA;UAAA,mBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,8BAAA;EAAA,6BAAA;EAAA,2BAAA;MAAA,uBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,uBAAA;MAAA,mBAAA;UAAA,eAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;;AAEA,aAAA;AACA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA;AAEA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,YAAA;AACA;;AAEA,qBAAA;AACA;EACA,kBAAA;AACA;AAEA;EACA,mBAAA;AACA",
        "file": "Carousel.vue",
        "sourcesContent": ["<template>\n  <div\n    :id=\"id\"\n    :class=\"[\n      'p-carousel p-component',\n      { 'p-carousel-vertical': isVertical(), 'p-carousel-horizontal': !isVertical() },\n    ]\">\n    <div class=\"p-carousel-header\" v-if=\"$scopedSlots.header\">\n      <slot name=\"header\"></slot>\n    </div>\n    <div :class=\"contentClasses\">\n      <div :class=\"containerClasses\">\n        <button\n          :class=\"['p-carousel-prev p-link', { 'p-disabled': backwardIsDisabled }]\"\n          :disabled=\"backwardIsDisabled\"\n          @click=\"navBackward\"\n          type=\"button\"\n          v-ripple>\n          <span\n            :class=\"[\n              'p-carousel-prev-icon pi',\n              { 'pi-chevron-left': !isVertical(), 'pi-chevron-up': isVertical() },\n            ]\"></span>\n        </button>\n\n        <div\n          class=\"p-carousel-items-content\"\n          :style=\"[{ height: isVertical() ? verticalViewPortHeight : 'auto' }]\"\n          @touchend=\"onTouchEnd\"\n          @touchstart=\"onTouchStart\"\n          @touchmove=\"onTouchMove\">\n          <div ref=\"itemsContainer\" class=\"p-carousel-items-container\" @transitionend=\"onTransitionEnd\">\n            <template v-if=\"isCircular()\">\n              <div\n                v-for=\"(item, index) of value.slice(-1 * d_numVisible)\"\n                :key=\"index + '_scloned'\"\n                :class=\"[\n                  'p-carousel-item p-carousel-item-cloned',\n                  {\n                    'p-carousel-item-active': totalShiftedItems * -1 === value.length + d_numVisible,\n                    'p-carousel-item-start': 0 === index,\n                    'p-carousel-item-end': value.slice(-1 * d_numVisible).length - 1 === index,\n                  },\n                ]\">\n                <slot name=\"item\" :data=\"item\" :index=\"index\"></slot>\n              </div>\n            </template>\n            <div\n              v-for=\"(item, index) of value\"\n              :key=\"index\"\n              :class=\"[\n                'p-carousel-item',\n                {\n                  'p-carousel-item-active': firstIndex() <= index && lastIndex() >= index,\n                  'p-carousel-item-start': firstIndex() === index,\n                  'p-carousel-item-end': lastIndex() === index,\n                },\n              ]\">\n              <slot name=\"item\" :data=\"item\" :index=\"index\"></slot>\n            </div>\n            <template v-if=\"isCircular()\">\n              <div\n                v-for=\"(item, index) of value.slice(0, d_numVisible)\"\n                :key=\"index + '_fcloned'\"\n                :class=\"[\n                  'p-carousel-item p-carousel-item-cloned',\n                  {\n                    'p-carousel-item-active': totalShiftedItems === 0,\n                    'p-carousel-item-start': 0 === index,\n                    'p-carousel-item-end': value.slice(0, d_numVisible).length - 1 === index,\n                  },\n                ]\">\n                <slot name=\"item\" :data=\"item\" :index=\"index\"></slot>\n              </div>\n            </template>\n          </div>\n        </div>\n\n        <button\n          :class=\"['p-carousel-next p-link', { 'p-disabled': forwardIsDisabled }]\"\n          :disabled=\"forwardIsDisabled\"\n          @click=\"navForward\"\n          type=\"button\"\n          v-ripple>\n          <span\n            :class=\"[\n              'p-carousel-prev-icon pi',\n              { 'pi-chevron-right': !isVertical(), 'pi-chevron-down': isVertical() },\n            ]\"></span>\n        </button>\n      </div>\n      <ul :class=\"indicatorsContentClasses\">\n        <li\n          v-for=\"(indicator, i) of totalIndicators\"\n          :key=\"'p-carousel-indicator-' + i\"\n          :class=\"['p-carousel-indicator', { 'p-highlight': d_page === i }]\">\n          <button class=\"p-link\" @click=\"onIndicatorClick($event, i)\" type=\"button\" />\n        </li>\n      </ul>\n    </div>\n    <div class=\"p-carousel-footer\" v-if=\"$scopedSlots.footer\">\n      <slot name=\"footer\"></slot>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { UniqueComponentId, DomHandler } from 'primevue2/utils'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'Carousel',\n  props: {\n    value: null,\n    page: {\n      type: Number,\n      default: 0\n    },\n    numVisible: {\n      type: Number,\n      default: 1\n    },\n    numScroll: {\n      type: Number,\n      default: 1\n    },\n    responsiveOptions: Array,\n    orientation: {\n      type: String,\n      default: 'horizontal'\n    },\n    verticalViewPortHeight: {\n      type: String,\n      default: '300px'\n    },\n    contentClass: String,\n    containerClass: String,\n    indicatorsContentClass: String,\n    circular: {\n      type: Boolean,\n      default: false\n    },\n    autoplayInterval: {\n      type: Number,\n      default: 0\n    }\n  },\n  data() {\n    return {\n      id: UniqueComponentId(),\n      remainingItems: 0,\n      d_numVisible: this.numVisible,\n      d_numScroll: this.numScroll,\n      d_oldNumScroll: 0,\n      d_oldNumVisible: 0,\n      d_oldValue: null,\n      d_page: this.page,\n      totalShiftedItems: this.page * this.numScroll * -1,\n      allowAutoplay: !!this.autoplayInterval,\n      d_circular: this.circular || this.allowAutoplay,\n      swipeThreshold: 20\n    }\n  },\n  isRemainingItemsAdded: false,\n  watch: {\n    page(newValue) {\n      this.d_page = newValue\n    },\n    circular(newValue) {\n      this.d_circular = newValue\n    },\n    numVisible(newValue, oldValue) {\n      this.d_numVisible = newValue\n      this.d_oldNumVisible = oldValue\n    },\n    numScroll(newValue, oldValue) {\n      this.d_oldNumScroll = oldValue\n      this.d_numScroll = newValue\n    },\n    value(oldValue) {\n      this.d_oldValue = oldValue\n    }\n  },\n  methods: {\n    step(dir, page) {\n      let totalShiftedItems = this.totalShiftedItems\n      const isCircular = this.isCircular()\n\n      if (page != null) {\n        totalShiftedItems = (this.d_numScroll * page) * -1\n\n        if (isCircular) {\n          totalShiftedItems -= this.d_numVisible\n        }\n\n        this.isRemainingItemsAdded = false\n      }\n      else {\n        totalShiftedItems += (this.d_numScroll * dir)\n        if (this.isRemainingItemsAdded) {\n          totalShiftedItems += this.remainingItems - (this.d_numScroll * dir)\n          this.isRemainingItemsAdded = false\n        }\n\n        let originalShiftedItems = isCircular ? (totalShiftedItems + this.d_numVisible) : totalShiftedItems\n        page = Math.abs(Math.floor(originalShiftedItems / this.d_numScroll))\n      }\n\n      if (isCircular && this.d_page === (this.totalIndicators - 1) && dir === -1) {\n        totalShiftedItems = -1 * (this.value.length + this.d_numVisible)\n        page = 0\n      }\n      else if (isCircular && this.d_page === 0 && dir === 1) {\n        totalShiftedItems = 0\n        page = (this.totalIndicators - 1)\n      }\n      else if (page === (this.totalIndicators - 1) && this.remainingItems > 0) {\n        totalShiftedItems += ((this.remainingItems * -1) - (this.d_numScroll * dir))\n        this.isRemainingItemsAdded = true\n      }\n\n      if (this.$refs.itemsContainer) {\n        DomHandler.removeClass(this.$refs.itemsContainer, 'p-items-hidden')\n        this.$refs.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`\n        this.$refs.itemsContainer.style.transition = 'transform 500ms ease 0s'\n      }\n\n      this.totalShiftedItems = totalShiftedItems\n\n      this.$emit('update:page', page)\n      this.d_page = page\n    },\n    calculatePosition() {\n      if (this.$refs.itemsContainer && this.responsiveOptions) {\n        let windowWidth = window.innerWidth\n        let matchedResponsiveOptionsData = {\n          numVisible: this.numVisible,\n          numScroll: this.numScroll\n        }\n\n        for (let i = 0; i < this.responsiveOptions.length; i++) {\n          let res = this.responsiveOptions[i]\n\n          if (parseInt(res.breakpoint, 10) >= windowWidth) {\n            matchedResponsiveOptionsData = res\n          }\n        }\n\n        if (this.d_numScroll !== matchedResponsiveOptionsData.numScroll) {\n          let page = this.d_page\n          page = parseInt((page * this.d_numScroll) / matchedResponsiveOptionsData.numScroll)\n\n          this.totalShiftedItems = (matchedResponsiveOptionsData.numScroll * page) * -1\n\n          if (this.isCircular()) {\n            this.totalShiftedItems -= matchedResponsiveOptionsData.numVisible\n          }\n\n          this.d_numScroll = matchedResponsiveOptionsData.numScroll\n\n          this.$emit('update:page', page)\n          this.d_page = page\n        }\n\n        if (this.d_numVisible !== matchedResponsiveOptionsData.numVisible) {\n          this.d_numVisible = matchedResponsiveOptionsData.numVisible\n        }\n      }\n    },\n    navBackward(e, index) {\n      if (this.d_circular || this.d_page !== 0) {\n        this.step(1, index)\n      }\n\n      this.allowAutoplay = false\n\n      if (e.cancelable) {\n        e.preventDefault()\n      }\n    },\n    navForward(e, index) {\n      if (this.d_circular || this.d_page < (this.totalIndicators - 1)) {\n        this.step(-1, index)\n      }\n\n      this.allowAutoplay = false\n\n      if (e.cancelable) {\n        e.preventDefault()\n      }\n    },\n    onIndicatorClick(e, index) {\n      let page = this.d_page\n\n      if (index > page) {\n        this.navForward(e, index)\n      }\n      else if (index < page) {\n        this.navBackward(e, index)\n      }\n    },\n    onTransitionEnd() {\n      if (this.$refs.itemsContainer) {\n        DomHandler.addClass(this.$refs.itemsContainer, 'p-items-hidden')\n        this.$refs.itemsContainer.style.transition = ''\n\n        if ((this.d_page === 0 || this.d_page === (this.totalIndicators - 1)) && this.isCircular()) {\n          this.$refs.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`\n        }\n      }\n    },\n    onTouchStart(e) {\n      let touchobj = e.changedTouches[0]\n\n      this.startPos = {\n        x: touchobj.pageX,\n        y: touchobj.pageY\n      }\n    },\n    onTouchMove(e) {\n      if (e.cancelable) {\n        e.preventDefault()\n      }\n    },\n    onTouchEnd(e) {\n      let touchobj = e.changedTouches[0]\n\n      if (this.isVertical()) {\n        this.changePageOnTouch(e, (touchobj.pageY - this.startPos.y))\n      }\n      else {\n        this.changePageOnTouch(e, (touchobj.pageX - this.startPos.x))\n      }\n    },\n    changePageOnTouch(e, diff) {\n      if (Math.abs(diff) > this.swipeThreshold) {\n        if (diff < 0) {           // left\n          this.navForward(e)\n        }\n        else {                    // right\n          this.navBackward(e)\n        }\n      }\n    },\n    bindDocumentListeners() {\n      if (!this.documentResizeListener) {\n        this.documentResizeListener = (e) => {\n          this.calculatePosition(e)\n        }\n\n        window.addEventListener('resize', this.documentResizeListener)\n      }\n    },\n    unbindDocumentListeners() {\n      if (this.documentResizeListener) {\n        window.removeEventListener('resize', this.documentResizeListener)\n        this.documentResizeListener = null\n      }\n    },\n    startAutoplay() {\n      this.interval = setInterval(() => {\n        if (this.d_page === (this.totalIndicators - 1)) {\n          this.step(-1, 0)\n        }\n        else {\n          this.step(-1, this.d_page + 1)\n        }\n      },\n      this.autoplayInterval)\n    },\n    stopAutoplay() {\n      if (this.interval) {\n        clearInterval(this.interval)\n      }\n    },\n    createStyle() {\n      if (!this.carouselStyle) {\n        this.carouselStyle = document.createElement('style')\n        this.carouselStyle.type = 'text/css'\n        document.body.appendChild(this.carouselStyle)\n      }\n\n      let innerHTML = `\n            #${this.id} .p-carousel-item {\n                flex: 1 0 ${(100 / this.d_numVisible)}%\n            }\n        `\n\n      if (this.responsiveOptions) {\n        // eslint-disable-next-line vue/no-mutating-props\n        this.responsiveOptions.sort((data1, data2) => {\n          const value1 = data1.breakpoint\n          const value2 = data2.breakpoint\n          let result = null\n\n          if (value1 == null && value2 != null)\n            result = -1\n          else if (value1 != null && value2 == null)\n            result = 1\n          else if (value1 == null && value2 == null)\n            result = 0\n          else if (typeof value1 === 'string' && typeof value2 === 'string')\n            result = value1.localeCompare(value2, undefined, { numeric: true })\n          else\n            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0\n\n          return -1 * result\n        })\n\n        for (let i = 0; i < this.responsiveOptions.length; i++) {\n          let res = this.responsiveOptions[i]\n\n          innerHTML += `\n                    @media screen and (max-width: ${res.breakpoint}) {\n                        #${this.id} .p-carousel-item {\n                            flex: 1 0 ${(100 / res.numVisible)}%\n                        }\n                    }\n                `\n        }\n      }\n\n      this.carouselStyle.innerHTML = innerHTML\n    },\n    isVertical() {\n      return this.orientation === 'vertical'\n    },\n    isCircular() {\n      return this.value && this.d_circular && this.value.length >= this.d_numVisible\n    },\n    isAutoplay() {\n      return this.autoplayInterval && this.allowAutoplay\n    },\n    firstIndex() {\n      return this.isCircular() ? (-1 * (this.totalShiftedItems + this.d_numVisible)) : (this.totalShiftedItems * -1)\n    },\n    lastIndex() {\n      return (this.firstIndex() + this.d_numVisible - 1)\n    }\n  },\n  mounted() {\n    this.createStyle()\n    this.calculatePosition()\n\n    if (this.responsiveOptions) {\n      this.bindDocumentListeners()\n    }\n  },\n  updated() {\n    const isCircular = this.isCircular()\n    let stateChanged = false\n    let totalShiftedItems = this.totalShiftedItems\n\n    if (this.autoplayInterval) {\n      this.stopAutoplay()\n    }\n\n    if (this.d_oldNumScroll !== this.d_numScroll || this.d_oldNumVisible !== this.d_numVisible || this.d_oldValue.length !== this.value.length) {\n      this.remainingItems = (this.value.length - this.d_numVisible) % this.d_numScroll\n\n      let page = this.d_page\n      if (this.totalIndicators !== 0 && page >= this.totalIndicators) {\n        page = this.totalIndicators - 1\n\n        this.$emit('update:page', page)\n        this.d_page = page\n\n        stateChanged = true\n      }\n\n      totalShiftedItems = (page * this.d_numScroll) * -1\n      if (isCircular) {\n        totalShiftedItems -= this.d_numVisible\n      }\n\n      if (page === (this.totalIndicators - 1) && this.remainingItems > 0) {\n        totalShiftedItems += (-1 * this.remainingItems) + this.d_numScroll\n        this.isRemainingItemsAdded = true\n      }\n      else {\n        this.isRemainingItemsAdded = false\n      }\n\n      if (totalShiftedItems !== this.totalShiftedItems) {\n        this.totalShiftedItems = totalShiftedItems\n\n        stateChanged = true\n      }\n\n      this.d_oldNumScroll = this.d_numScroll\n      this.d_oldNumVisible = this.d_numVisible\n      this.d_oldValue = this.value\n\n      this.$refs.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`\n    }\n\n    if (isCircular) {\n      if (this.d_page === 0) {\n        totalShiftedItems = -1 * this.d_numVisible\n      }\n      else if (totalShiftedItems === 0) {\n        totalShiftedItems = -1 * this.value.length\n        if (this.remainingItems > 0) {\n          this.isRemainingItemsAdded = true\n        }\n      }\n\n      if (totalShiftedItems !== this.totalShiftedItems) {\n        this.totalShiftedItems = totalShiftedItems\n\n        stateChanged = true\n      }\n    }\n\n    if (!stateChanged && this.isAutoplay()) {\n      this.startAutoplay()\n    }\n  },\n  beforeDestroy() {\n    if (this.responsiveOptions) {\n      this.unbindDocumentListeners()\n    }\n\n    if (this.autoplayInterval) {\n      this.stopAutoplay()\n    }\n  },\n  computed: {\n    totalIndicators() {\n      return this.value ? Math.ceil((this.value.length - this.d_numVisible) / this.d_numScroll) + 1 : 0\n    },\n    backwardIsDisabled() {\n      return (this.value && (!this.circular || this.value.length < this.d_numVisible) && this.d_page === 0)\n    },\n    forwardIsDisabled() {\n      return (this.value && (!this.circular || this.value.length < this.d_numVisible) && (this.d_page === (this.totalIndicators - 1) || this.totalIndicators === 0))\n    },\n    containerClasses() {\n      return ['p-carousel-container', this.containerClass]\n    },\n    contentClasses() {\n      return ['p-carousel-content ', this.contentClass]\n    },\n    indicatorsContentClasses() {\n      return ['p-carousel-indicators p-reset', this.indicatorsContentClass]\n    },\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-carousel {\n  display: flex;\n  flex-direction: column;\n}\n\n.p-carousel-content {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n.p-carousel-prev,\n.p-carousel-next {\n  align-self: center;\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-carousel-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.p-carousel-items-content {\n  overflow: hidden;\n  width: 100%;\n}\n\n.p-carousel-items-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.p-carousel-indicators {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.p-carousel-indicator > button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Vertical */\n.p-carousel-vertical .p-carousel-container {\n  flex-direction: column;\n}\n\n.p-carousel-vertical .p-carousel-items-container {\n  flex-direction: column;\n  height: 100%;\n}\n\n/* Keyboard Support */\n.p-items-hidden .p-carousel-item {\n  visibility: hidden;\n}\n\n.p-items-hidden .p-carousel-item.p-carousel-item-active {\n  visibility: visible;\n}\n</style>\n"]
      },
      media: undefined
    });
  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = /*#__PURE__*/normalizeComponent({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

  return __vue_component__;

})(primevue2.utils, primevue2.ripple);
