this.primevue2 = this.primevue2 || {};
this.primevue2.autocomplete = (function (utils, Button, Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var script = {
    name: 'AutoComplete',
    inheritAttrs: false,
    props: {
      value: null,
      suggestions: {
        type: Array,
        default: null
      },
      field: {
        type: [String, Function],
        default: null
      },
      scrollHeight: {
        type: String,
        default: '200px'
      },
      dropdown: {
        type: Boolean,
        default: false
      },
      dropdownMode: {
        type: String,
        default: 'blank'
      },
      multiple: {
        type: Boolean,
        default: false
      },
      minLength: {
        type: Number,
        default: 1
      },
      delay: {
        type: Number,
        default: 300
      },
      ariaLabelledBy: {
        type: String,
        default: null
      },
      appendTo: {
        type: String,
        default: null
      },
      forceSelection: {
        type: Boolean,
        default: false
      },
      autoHighlight: {
        type: Boolean,
        default: false
      }
    },
    timeout: null,
    outsideClickListener: null,
    resizeListener: null,
    scrollHandler: null,
    data: function data() {
      return {
        searching: false,
        focused: false,
        overlayVisible: false,
        inputTextValue: null
      };
    },
    watch: {
      suggestions: function suggestions() {
        if (this.searching) {
          if (this.suggestions && this.suggestions.length) this.showOverlay();else this.hideOverlay();
          this.searching = false;
        }
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.restoreAppend();
      this.unbindOutsideClickListener();
      this.unbindResizeListener();
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
    },
    updated: function updated() {
      if (this.overlayVisible) {
        this.alignOverlay();
      }
    },
    methods: {
      onOverlayEnter: function onOverlayEnter() {
        this.$refs.overlay.style.zIndex = String(utils.DomHandler.generateZIndex());
        this.appendContainer();
        this.alignOverlay();
        this.bindOutsideClickListener();
        this.bindScrollListener();
        this.bindResizeListener();
        if (this.autoHighlight && this.suggestions && this.suggestions.length) {
          utils.DomHandler.addClass(this.$refs.overlay.firstElementChild.firstElementChild, 'p-highlight');
        }
      },
      onOverlayLeave: function onOverlayLeave() {
        this.unbindOutsideClickListener();
        this.unbindScrollListener();
        this.unbindResizeListener();
      },
      alignOverlay: function alignOverlay() {
        var target = this.multiple ? this.$refs.multiContainer : this.$refs.input;
        if (this.appendTo) utils.DomHandler.absolutePosition(this.$refs.overlay, target);else utils.DomHandler.relativePosition(this.$refs.overlay, target);
      },
      bindOutsideClickListener: function bindOutsideClickListener() {
        var _this = this;
        if (!this.outsideClickListener) {
          this.outsideClickListener = function (event) {
            if (_this.overlayVisible && _this.$refs.overlay && _this.isOutsideClicked(event)) {
              _this.hideOverlay();
            }
          };
          document.addEventListener('click', this.outsideClickListener);
        }
      },
      bindScrollListener: function bindScrollListener() {
        var _this2 = this;
        if (!this.scrollHandler) {
          this.scrollHandler = new utils.ConnectedOverlayScrollHandler(this.$el, function () {
            if (_this2.overlayVisible) {
              _this2.hideOverlay();
            }
          });
        }
        this.scrollHandler.bindScrollListener();
      },
      unbindScrollListener: function unbindScrollListener() {
        if (this.scrollHandler) {
          this.scrollHandler.unbindScrollListener();
        }
      },
      bindResizeListener: function bindResizeListener() {
        var _this3 = this;
        if (!this.resizeListener) {
          this.resizeListener = function () {
            if (_this3.overlayVisible) {
              _this3.hideOverlay();
            }
          };
          window.addEventListener('resize', this.resizeListener);
        }
      },
      unbindResizeListener: function unbindResizeListener() {
        if (this.resizeListener) {
          window.removeEventListener('resize', this.resizeListener);
          this.resizeListener = null;
        }
      },
      isOutsideClicked: function isOutsideClicked(event) {
        return !this.$refs.overlay.contains(event.target) && !this.isInputClicked(event) && !this.isDropdownClicked(event);
      },
      isInputClicked: function isInputClicked(event) {
        if (this.multiple) return event.target === this.$refs.multiContainer || this.$refs.multiContainer.contains(event.target);else return event.target === this.$refs.input;
      },
      isDropdownClicked: function isDropdownClicked(event) {
        return this.$refs.dropdownButton ? event.target === this.$refs.dropdownButton || this.$refs.dropdownButton.$el.contains(event.target) : false;
      },
      unbindOutsideClickListener: function unbindOutsideClickListener() {
        if (this.outsideClickListener) {
          document.removeEventListener('click', this.outsideClickListener);
          this.outsideClickListener = null;
        }
      },
      selectItem: function selectItem(event, item) {
        if (this.multiple) {
          this.$refs.input.value = '';
          this.inputTextValue = '';
          if (!this.isSelected(item)) {
            var newValue = this.value ? [].concat(_toConsumableArray(this.value), [item]) : [item];
            this.$emit('input', newValue);
          }
        } else {
          this.$emit('input', item);
        }
        this.$emit('item-select', {
          originalEvent: event,
          value: item
        });
        this.focus();
        this.hideOverlay();
      },
      onMultiContainerClick: function onMultiContainerClick() {
        this.focus();
      },
      removeItem: function removeItem(event, index) {
        var removedValue = this.value[index];
        var newValue = this.value.filter(function (val, i) {
          return index !== i;
        });
        this.$emit('input', newValue);
        this.$emit('item-unselect', {
          originalEvent: event,
          value: removedValue
        });
      },
      onDropdownClick: function onDropdownClick(event) {
        this.focus();
        var query = this.$refs.input.value;
        if (this.dropdownMode === 'blank') this.search(event, '', 'dropdown');else if (this.dropdownMode === 'current') this.search(event, query, 'dropdown');
        this.$emit('dropdown-click', {
          originalEvent: event,
          query: query
        });
      },
      getItemContent: function getItemContent(item) {
        return this.field ? utils.ObjectUtils.resolveFieldData(item, this.field) : item;
      },
      showOverlay: function showOverlay() {
        this.overlayVisible = true;
      },
      hideOverlay: function hideOverlay() {
        this.overlayVisible = false;
      },
      focus: function focus() {
        this.$refs.input.focus();
      },
      search: function search(event, query, source) {
        //allow empty string but not undefined or null
        if (query === undefined || query === null) {
          return;
        }

        //do not search blank values on input change
        if (source === 'input' && query.trim().length === 0) {
          return;
        }
        this.searching = true;
        this.$emit('complete', {
          originalEvent: event,
          query: query
        });
      },
      onInput: function onInput(event) {
        var _this4 = this;
        this.inputTextValue = event.target.value;
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        var query = event.target.value;
        if (!this.multiple) {
          this.$emit('input', query);
        }
        if (query.length === 0) {
          this.hideOverlay();
          this.$emit('clear');
        } else {
          if (query.length >= this.minLength) {
            this.timeout = setTimeout(function () {
              _this4.search(event, query, 'input');
            }, this.delay);
          } else {
            this.hideOverlay();
          }
        }
      },
      onFocus: function onFocus(event) {
        this.focused = true;
        this.$emit('focus', event);
      },
      onBlur: function onBlur(event) {
        this.focused = false;
        this.$emit('blur', event);
      },
      onKeyDown: function onKeyDown(event) {
        if (this.overlayVisible) {
          var highlightItem = utils.DomHandler.findSingle(this.$refs.overlay, 'li.p-highlight');
          switch (event.which) {
            //down
            case 40:
              if (highlightItem) {
                var nextElement = highlightItem.nextElementSibling;
                if (nextElement) {
                  utils.DomHandler.addClass(nextElement, 'p-highlight');
                  utils.DomHandler.removeClass(highlightItem, 'p-highlight');
                  utils.DomHandler.scrollInView(this.$refs.overlay, nextElement);
                }
              } else {
                utils.DomHandler.addClass(this.$refs.overlay.firstChild.firstElementChild, 'p-highlight');
              }
              event.preventDefault();
              break;

            //up
            case 38:
              if (highlightItem) {
                var previousElement = highlightItem.previousElementSibling;
                if (previousElement) {
                  utils.DomHandler.addClass(previousElement, 'p-highlight');
                  utils.DomHandler.removeClass(highlightItem, 'p-highlight');
                  utils.DomHandler.scrollInView(this.$refs.overlay, previousElement);
                }
              }
              event.preventDefault();
              break;

            //enter,tab
            case 13:
              if (highlightItem) {
                this.selectItem(event, this.suggestions[utils.DomHandler.index(highlightItem)]);
                this.hideOverlay();
              }
              event.preventDefault();
              break;

            //escape
            case 27:
              this.hideOverlay();
              event.preventDefault();
              break;

            //tab
            case 9:
              if (highlightItem) {
                this.selectItem(event, this.suggestions[utils.DomHandler.index(highlightItem)]);
              }
              this.hideOverlay();
              break;
          }
        }
        if (this.multiple) {
          switch (event.which) {
            //backspace
            case 8:
              if (this.value && this.value.length && !this.$refs.input.value) {
                var removedValue = this.value[this.value.length - 1];
                var newValue = this.value.slice(0, -1);
                this.$emit('input', newValue);
                this.$emit('item-unselect', {
                  originalEvent: event,
                  value: removedValue
                });
              }
              break;
          }
        }
      },
      onChange: function onChange(event) {
        if (this.forceSelection) {
          var valid = false;
          var inputValue = event.target.value.trim();
          if (this.suggestions) {
            var _iterator = _createForOfIteratorHelper(this.suggestions),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                var itemValue = this.field ? utils.ObjectUtils.resolveFieldData(item, this.field) : item;
                if (itemValue && inputValue === itemValue.trim()) {
                  valid = true;
                  this.selectItem(event, item);
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          if (!valid) {
            this.$refs.input.value = '';
            this.inputTextValue = '';
            this.$emit('clear');
            if (!this.multiple) {
              this.$emit('input', null);
            }
          }
        }
      },
      isSelected: function isSelected(val) {
        var selected = false;
        if (this.value && this.value.length) {
          for (var i = 0; i < this.value.length; i++) {
            if (utils.ObjectUtils.equals(this.value[i], val)) {
              selected = true;
              break;
            }
          }
        }
        return selected;
      },
      appendContainer: function appendContainer() {
        if (this.appendTo) {
          if (this.appendTo === 'body') document.body.appendChild(this.$refs.overlay);else document.getElementById(this.appendTo).appendChild(this.$refs.overlay);
        }
      },
      restoreAppend: function restoreAppend() {
        if (this.$refs.overlay && this.appendTo) {
          if (this.appendTo === 'body') document.body.removeChild(this.$refs.overlay);else document.getElementById(this.appendTo).removeChild(this.$refs.overlay);
        }
      }
    },
    computed: {
      listeners: function listeners() {
        return _objectSpread(_objectSpread({}, this.$listeners), {}, {
          input: this.onInput,
          focus: this.onFocus,
          blur: this.onBlur,
          keydown: this.onKeyDown,
          change: this.onChange
        });
      },
      containerClass: function containerClass() {
        return ['p-autocomplete p-component p-inputwrapper', {
          'p-autocomplete-dd': this.dropdown,
          'p-autocomplete-multiple': this.multiple,
          'p-inputwrapper-filled': this.value || this.inputTextValue && this.inputTextValue.length,
          'p-inputwrapper-focus': this.focused
        }];
      },
      inputClass: function inputClass() {
        return ['p-autocomplete-input p-inputtext p-component', {
          'p-autocomplete-dd-input': this.dropdown,
          'p-disabled': this.$attrs.disabled
        }];
      },
      multiContainerClass: function multiContainerClass() {
        return ['p-autocomplete-multiple-container p-component p-inputtext', {
          'p-disabled': this.$attrs.disabled,
          'p-focus': this.focused
        }];
      },
      inputValue: function inputValue() {
        if (this.value) {
          if (this.field && _typeof(this.value) === 'object') {
            var resolvedFieldData = utils.ObjectUtils.resolveFieldData(this.value, this.field);
            return resolvedFieldData != null ? resolvedFieldData : this.value;
          } else return this.value;
        } else {
          return '';
        }
      },
      listId: function listId() {
        return utils.UniqueComponentId() + '_list';
      }
    },
    components: {
      'Button': Button__default["default"]
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
    return _c("span", {
      class: _vm.containerClass,
      attrs: {
        "aria-haspopup": "listbox",
        "aria-owns": _vm.listId,
        "aria-expanded": _vm.overlayVisible
      }
    }, [!_vm.multiple ? _c("input", _vm._g(_vm._b({
      ref: "input",
      class: _vm.inputClass,
      attrs: {
        type: "text",
        autoComplete: "off",
        role: "searchbox",
        "aria-autocomplete": "list",
        "aria-controls": _vm.listId,
        "aria-labelledby": _vm.ariaLabelledBy
      },
      domProps: {
        value: _vm.inputValue
      }
    }, "input", _vm.$attrs, false), _vm.listeners)) : _vm._e(), _vm._v(" "), _vm.multiple ? _c("ul", {
      ref: "multiContainer",
      class: _vm.multiContainerClass,
      on: {
        click: _vm.onMultiContainerClick
      }
    }, [_vm._l(_vm.value, function (item, i) {
      return _c("li", {
        key: i,
        staticClass: "p-autocomplete-token"
      }, [_c("span", {
        staticClass: "p-autocomplete-token-label"
      }, [_vm._v(_vm._s(_vm.getItemContent(item)))]), _vm._v(" "), _c("span", {
        staticClass: "p-autocomplete-token-icon pi pi-times-circle",
        on: {
          click: function click($event) {
            return _vm.removeItem($event, i);
          }
        }
      })]);
    }), _vm._v(" "), _c("li", {
      staticClass: "p-autocomplete-input-token"
    }, [_c("input", _vm._g(_vm._b({
      ref: "input",
      attrs: {
        type: "text",
        autoComplete: "off",
        role: "searchbox",
        "aria-autocomplete": "list",
        "aria-controls": _vm.listId,
        "aria-labelledby": _vm.ariaLabelledBy
      }
    }, "input", _vm.$attrs, false), _vm.listeners))])], 2) : _vm._e(), _vm._v(" "), _vm.searching ? _c("i", {
      staticClass: "p-autocomplete-loader pi pi-spinner pi-spin"
    }) : _vm._e(), _vm._v(" "), _vm.dropdown ? _c("Button", {
      ref: "dropdownButton",
      staticClass: "p-autocomplete-dropdown",
      attrs: {
        type: "button",
        icon: "pi pi-chevron-down",
        disabled: _vm.$attrs.disabled
      },
      on: {
        click: _vm.onDropdownClick
      }
    }) : _vm._e(), _vm._v(" "), _c("transition", {
      attrs: {
        name: "p-connected-overlay"
      },
      on: {
        enter: _vm.onOverlayEnter,
        leave: _vm.onOverlayLeave
      }
    }, [_vm.overlayVisible ? _c("div", {
      ref: "overlay",
      staticClass: "p-autocomplete-panel p-component",
      style: {
        "max-height": _vm.scrollHeight
      }
    }, [_c("ul", {
      staticClass: "p-autocomplete-items",
      attrs: {
        id: _vm.listId,
        role: "listbox"
      }
    }, _vm._l(_vm.suggestions, function (item, i) {
      return _c("li", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        key: i,
        staticClass: "p-autocomplete-item",
        attrs: {
          role: "option"
        },
        on: {
          click: function click($event) {
            return _vm.selectItem($event, item);
          }
        }
      }, [_vm._t("item", function () {
        return [_vm._v("\n            " + _vm._s(_vm.getItemContent(item)) + "\n          ")];
      }, {
        item: item,
        index: i
      })], 2);
    }), 0)]) : _vm._e()])], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-0411021b_0", {
      source: "\n.p-autocomplete {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n}\n.p-autocomplete-loader {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5rem;\n}\n.p-autocomplete-dd .p-autocomplete-input {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  width: 1%;\n}\n.p-autocomplete-dd .p-autocomplete-input,\n.p-autocomplete-dd .p-autocomplete-multiple-container {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.p-autocomplete-dd .p-autocomplete-dropdown {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0px;\n}\n.p-autocomplete .p-autocomplete-panel {\n  min-width: 100%;\n}\n.p-autocomplete-panel {\n  position: absolute;\n  overflow: auto;\n}\n.p-autocomplete-items {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.p-autocomplete-item {\n  cursor: pointer;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n}\n.p-autocomplete-multiple-container {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  cursor: text;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-autocomplete-token {\n  cursor: default;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n.p-autocomplete-token-icon {\n  cursor: pointer;\n}\n.p-autocomplete-input-token {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.p-autocomplete-input-token input {\n  border: 0 none;\n  outline: 0 none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 0;\n  width: 100%;\n}\n.p-fluid .p-autocomplete {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.p-fluid .p-autocomplete-dd .p-autocomplete-input {\n  width: 1%;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/autocomplete/AutoComplete.vue"],
        "names": [],
        "mappings": ";AAmjBA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;EACA,QAAA;EACA,mBAAA;AACA;AAEA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;EACA,SAAA;AACA;AAEA;;EAEA,0BAAA;EACA,6BAAA;AACA;AAEA;EACA,yBAAA;EACA,8BAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,kBAAA;EACA,cAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;AACA;AAEA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;EACA,YAAA;EACA,gBAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AAEA;EACA,eAAA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;AACA;AAEA;EACA,cAAA;EACA,eAAA;EACA,6BAAA;EACA,SAAA;EACA,UAAA;EACA,wBAAA;UAAA,gBAAA;EACA,gBAAA;EACA,WAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA;AAEA;EACA,SAAA;AACA",
        "file": "AutoComplete.vue",
        "sourcesContent": ["<template>\n  <span :class=\"containerClass\" aria-haspopup=\"listbox\" :aria-owns=\"listId\" :aria-expanded=\"overlayVisible\">\n    <input\n      ref=\"input\"\n      :class=\"inputClass\"\n      v-bind=\"$attrs\"\n      v-on=\"listeners\"\n      :value=\"inputValue\"\n      type=\"text\"\n      autoComplete=\"off\"\n      v-if=\"!multiple\"\n      role=\"searchbox\"\n      aria-autocomplete=\"list\"\n      :aria-controls=\"listId\"\n      :aria-labelledby=\"ariaLabelledBy\" />\n    <ul ref=\"multiContainer\" :class=\"multiContainerClass\" v-if=\"multiple\" @click=\"onMultiContainerClick\">\n      <li v-for=\"(item, i) of value\" :key=\"i\" class=\"p-autocomplete-token\">\n        <span class=\"p-autocomplete-token-label\">{{ getItemContent(item) }}</span>\n        <span class=\"p-autocomplete-token-icon pi pi-times-circle\" @click=\"removeItem($event, i)\"></span>\n      </li>\n      <li class=\"p-autocomplete-input-token\">\n        <input\n          ref=\"input\"\n          type=\"text\"\n          autoComplete=\"off\"\n          v-bind=\"$attrs\"\n          v-on=\"listeners\"\n          role=\"searchbox\"\n          aria-autocomplete=\"list\"\n          :aria-controls=\"listId\"\n          :aria-labelledby=\"ariaLabelledBy\" />\n      </li>\n    </ul>\n    <i class=\"p-autocomplete-loader pi pi-spinner pi-spin\" v-if=\"searching\"></i>\n    <Button\n      ref=\"dropdownButton\"\n      type=\"button\"\n      icon=\"pi pi-chevron-down\"\n      class=\"p-autocomplete-dropdown\"\n      :disabled=\"$attrs.disabled\"\n      @click=\"onDropdownClick\"\n      v-if=\"dropdown\" />\n    <transition name=\"p-connected-overlay\" @enter=\"onOverlayEnter\" @leave=\"onOverlayLeave\">\n      <div\n        ref=\"overlay\"\n        class=\"p-autocomplete-panel p-component\"\n        :style=\"{ 'max-height': scrollHeight }\"\n        v-if=\"overlayVisible\">\n        <ul :id=\"listId\" class=\"p-autocomplete-items\" role=\"listbox\">\n          <li\n            v-for=\"(item, i) of suggestions\"\n            class=\"p-autocomplete-item\"\n            :key=\"i\"\n            @click=\"selectItem($event, item)\"\n            role=\"option\"\n            v-ripple>\n            <slot name=\"item\" :item=\"item\" :index=\"i\">\n              {{ getItemContent(item) }}\n            </slot>\n          </li>\n        </ul>\n      </div>\n    </transition>\n  </span>\n</template>\n\n<script>\nimport { ConnectedOverlayScrollHandler, ObjectUtils, DomHandler, UniqueComponentId } from 'primevue2/utils'\nimport Button from 'primevue2/button'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'AutoComplete',\n  inheritAttrs: false,\n  props: {\n    value: null,\n    suggestions: {\n      type: Array,\n      default: null\n    },\n    field: {\n      type: [String, Function],\n      default: null\n    },\n    scrollHeight: {\n      type: String,\n      default: '200px'\n    },\n    dropdown: {\n      type: Boolean,\n      default: false\n    },\n    dropdownMode: {\n      type: String,\n      default: 'blank'\n    },\n    multiple: {\n      type: Boolean,\n      default: false\n    },\n    minLength: {\n      type: Number,\n      default: 1\n    },\n    delay: {\n      type: Number,\n      default: 300\n    },\n    ariaLabelledBy: {\n      type: String,\n      default: null\n    },\n    appendTo: {\n      type: String,\n      default: null\n    },\n    forceSelection: {\n      type: Boolean,\n      default: false\n    },\n    autoHighlight: {\n      type: Boolean,\n      default: false\n    }\n  },\n  timeout: null,\n  outsideClickListener: null,\n  resizeListener: null,\n  scrollHandler: null,\n  data() {\n    return {\n      searching: false,\n      focused: false,\n      overlayVisible: false,\n      inputTextValue: null\n    }\n  },\n  watch: {\n    suggestions() {\n      if (this.searching) {\n\n        if (this.suggestions && this.suggestions.length)\n          this.showOverlay()\n        else\n          this.hideOverlay()\n\n        this.searching = false\n      }\n    }\n  },\n  beforeDestroy() {\n    this.restoreAppend()\n    this.unbindOutsideClickListener()\n    this.unbindResizeListener()\n\n    if (this.scrollHandler) {\n      this.scrollHandler.destroy()\n      this.scrollHandler = null\n    }\n  },\n  updated() {\n    if (this.overlayVisible) {\n      this.alignOverlay()\n    }\n  },\n  methods: {\n    onOverlayEnter() {\n      this.$refs.overlay.style.zIndex = String(DomHandler.generateZIndex())\n      this.appendContainer()\n      this.alignOverlay()\n      this.bindOutsideClickListener()\n      this.bindScrollListener()\n      this.bindResizeListener()\n\n      if (this.autoHighlight && this.suggestions && this.suggestions.length) {\n        DomHandler.addClass(this.$refs.overlay.firstElementChild.firstElementChild, 'p-highlight')\n      }\n    },\n    onOverlayLeave() {\n      this.unbindOutsideClickListener()\n      this.unbindScrollListener()\n      this.unbindResizeListener()\n    },\n    alignOverlay() {\n      let target = this.multiple ? this.$refs.multiContainer : this.$refs.input\n      if (this.appendTo)\n        DomHandler.absolutePosition(this.$refs.overlay, target)\n      else\n        DomHandler.relativePosition(this.$refs.overlay, target)\n    },\n    bindOutsideClickListener() {\n      if (!this.outsideClickListener) {\n        this.outsideClickListener = (event) => {\n          if (this.overlayVisible && this.$refs.overlay && this.isOutsideClicked(event)) {\n            this.hideOverlay()\n          }\n        }\n        document.addEventListener('click', this.outsideClickListener)\n      }\n    },\n    bindScrollListener() {\n      if (!this.scrollHandler) {\n        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$el, () => {\n          if (this.overlayVisible) {\n            this.hideOverlay()\n          }\n        })\n      }\n\n      this.scrollHandler.bindScrollListener()\n    },\n    unbindScrollListener() {\n      if (this.scrollHandler) {\n        this.scrollHandler.unbindScrollListener()\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          if (this.overlayVisible) {\n            this.hideOverlay()\n          }\n        }\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    },\n    isOutsideClicked(event) {\n      return !this.$refs.overlay.contains(event.target) && !this.isInputClicked(event) && !this.isDropdownClicked(event)\n    },\n    isInputClicked(event) {\n      if (this.multiple)\n        return event.target === this.$refs.multiContainer || this.$refs.multiContainer.contains(event.target)\n      else\n        return event.target === this.$refs.input\n    },\n    isDropdownClicked(event) {\n      return this.$refs.dropdownButton ? (event.target === this.$refs.dropdownButton || this.$refs.dropdownButton.$el.contains(event.target)) : false\n    },\n    unbindOutsideClickListener() {\n      if (this.outsideClickListener) {\n        document.removeEventListener('click', this.outsideClickListener)\n        this.outsideClickListener = null\n      }\n    },\n    selectItem(event, item) {\n      if (this.multiple) {\n        this.$refs.input.value = ''\n        this.inputTextValue = ''\n\n        if (!this.isSelected(item)) {\n          let newValue = this.value ? [...this.value, item] : [item]\n          this.$emit('input', newValue)\n        }\n      }\n      else {\n        this.$emit('input', item)\n      }\n\n      this.$emit('item-select', {\n        originalEvent: event,\n        value: item\n      })\n\n      this.focus()\n      this.hideOverlay()\n    },\n    onMultiContainerClick() {\n      this.focus()\n    },\n    removeItem(event, index) {\n      let removedValue = this.value[index]\n      let newValue = this.value.filter((val, i) => (index !== i))\n      this.$emit('input', newValue)\n      this.$emit('item-unselect', {\n        originalEvent: event,\n        value: removedValue\n      })\n    },\n    onDropdownClick(event) {\n      this.focus()\n      const query = this.$refs.input.value\n\n      if (this.dropdownMode === 'blank')\n        this.search(event, '', 'dropdown')\n      else if (this.dropdownMode === 'current')\n        this.search(event, query, 'dropdown')\n\n      this.$emit('dropdown-click', {\n        originalEvent: event,\n        query: query\n      })\n    },\n    getItemContent(item) {\n      return this.field ? ObjectUtils.resolveFieldData(item, this.field) : item\n    },\n    showOverlay() {\n      this.overlayVisible = true\n    },\n    hideOverlay() {\n      this.overlayVisible = false\n    },\n    focus() {\n      this.$refs.input.focus()\n    },\n    search(event, query, source) {\n      //allow empty string but not undefined or null\n      if (query === undefined || query === null) {\n        return\n      }\n\n      //do not search blank values on input change\n      if (source === 'input' && query.trim().length === 0) {\n        return\n      }\n\n      this.searching = true\n      this.$emit('complete', {\n        originalEvent: event,\n        query: query\n      })\n    },\n    onInput(event) {\n      this.inputTextValue = event.target.value\n\n      if (this.timeout) {\n        clearTimeout(this.timeout)\n      }\n\n      let query = event.target.value\n      if (!this.multiple) {\n        this.$emit('input', query)\n      }\n\n      if (query.length === 0) {\n        this.hideOverlay()\n        this.$emit('clear')\n      }\n      else {\n        if (query.length >= this.minLength) {\n          this.timeout = setTimeout(() => {\n            this.search(event, query, 'input')\n          }, this.delay)\n        }\n        else {\n          this.hideOverlay()\n        }\n      }\n    },\n    onFocus(event) {\n      this.focused = true\n      this.$emit('focus', event)\n    },\n    onBlur(event) {\n      this.focused = false\n      this.$emit('blur', event)\n    },\n    onKeyDown(event) {\n      if (this.overlayVisible) {\n        let highlightItem = DomHandler.findSingle(this.$refs.overlay, 'li.p-highlight')\n\n        switch (event.which) {\n        //down\n        case 40:\n          if (highlightItem) {\n            let nextElement = highlightItem.nextElementSibling\n            if (nextElement) {\n              DomHandler.addClass(nextElement, 'p-highlight')\n              DomHandler.removeClass(highlightItem, 'p-highlight')\n              DomHandler.scrollInView(this.$refs.overlay, nextElement)\n            }\n          }\n          else {\n            DomHandler.addClass(this.$refs.overlay.firstChild.firstElementChild, 'p-highlight')\n          }\n\n          event.preventDefault()\n          break\n\n          //up\n        case 38:\n          if (highlightItem) {\n            let previousElement = highlightItem.previousElementSibling\n            if (previousElement) {\n              DomHandler.addClass(previousElement, 'p-highlight')\n              DomHandler.removeClass(highlightItem, 'p-highlight')\n              DomHandler.scrollInView(this.$refs.overlay, previousElement)\n            }\n          }\n\n          event.preventDefault()\n          break\n\n          //enter,tab\n        case 13:\n          if (highlightItem) {\n            this.selectItem(event, this.suggestions[DomHandler.index(highlightItem)])\n            this.hideOverlay()\n          }\n\n          event.preventDefault()\n          break\n\n          //escape\n        case 27:\n          this.hideOverlay()\n          event.preventDefault()\n          break\n\n          //tab\n        case 9:\n          if (highlightItem) {\n            this.selectItem(event, this.suggestions[DomHandler.index(highlightItem)])\n          }\n\n          this.hideOverlay()\n          break\n\n        default:\n          break\n        }\n      }\n\n      if (this.multiple) {\n        switch (event.which) {\n        //backspace\n        case 8:\n          if (this.value && this.value.length && !this.$refs.input.value) {\n            let removedValue = this.value[this.value.length - 1]\n            let newValue = this.value.slice(0, -1)\n\n            this.$emit('input', newValue)\n            this.$emit('item-unselect', {\n              originalEvent: event,\n              value: removedValue\n            })\n          }\n          break\n\n        default:\n          break\n        }\n      }\n    },\n    onChange(event) {\n      if (this.forceSelection) {\n        let valid = false\n        let inputValue = event.target.value.trim()\n\n        if (this.suggestions) {\n          for (let item of this.suggestions) {\n            let itemValue = this.field ? ObjectUtils.resolveFieldData(item, this.field) : item\n            if (itemValue && inputValue === itemValue.trim()) {\n              valid = true\n              this.selectItem(event, item)\n              break\n            }\n          }\n        }\n\n        if (!valid) {\n          this.$refs.input.value = ''\n          this.inputTextValue = ''\n          this.$emit('clear')\n          if (!this.multiple) {\n            this.$emit('input', null)\n          }\n        }\n      }\n    },\n    isSelected(val) {\n      let selected = false\n      if (this.value && this.value.length) {\n        for (let i = 0; i < this.value.length; i++) {\n          if (ObjectUtils.equals(this.value[i], val)) {\n            selected = true\n            break\n          }\n        }\n      }\n\n      return selected\n    },\n    appendContainer() {\n      if (this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.appendChild(this.$refs.overlay)\n        else\n          document.getElementById(this.appendTo).appendChild(this.$refs.overlay)\n      }\n    },\n    restoreAppend() {\n      if (this.$refs.overlay && this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.removeChild(this.$refs.overlay)\n        else\n          document.getElementById(this.appendTo).removeChild(this.$refs.overlay)\n      }\n    }\n  },\n  computed: {\n    listeners() {\n      return {\n        ...this.$listeners,\n        input: this.onInput,\n        focus: this.onFocus,\n        blur: this.onBlur,\n        keydown: this.onKeyDown,\n        change: this.onChange\n      }\n    },\n    containerClass() {\n      return ['p-autocomplete p-component p-inputwrapper', {\n        'p-autocomplete-dd': this.dropdown,\n        'p-autocomplete-multiple': this.multiple,\n        'p-inputwrapper-filled': ((this.value) || (this.inputTextValue && this.inputTextValue.length)),\n        'p-inputwrapper-focus': this.focused\n      }]\n    },\n    inputClass() {\n      return ['p-autocomplete-input p-inputtext p-component', {\n        'p-autocomplete-dd-input': this.dropdown,\n        'p-disabled': this.$attrs.disabled\n      }]\n    },\n    multiContainerClass() {\n      return ['p-autocomplete-multiple-container p-component p-inputtext', {\n        'p-disabled': this.$attrs.disabled,\n        'p-focus': this.focused\n      }]\n    },\n    inputValue() {\n      if (this.value) {\n        if (this.field && typeof this.value === 'object') {\n          const resolvedFieldData = ObjectUtils.resolveFieldData(this.value, this.field)\n          return resolvedFieldData != null ? resolvedFieldData : this.value\n        }\n        else\n          return this.value\n      }\n      else {\n        return ''\n      }\n    },\n    listId() {\n      return UniqueComponentId() + '_list'\n    }\n  },\n  components: {\n    'Button': Button\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-autocomplete {\n  display: inline-flex;\n  position: relative;\n}\n\n.p-autocomplete-loader {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5rem;\n}\n\n.p-autocomplete-dd .p-autocomplete-input {\n  flex: 1 1 auto;\n  width: 1%;\n}\n\n.p-autocomplete-dd .p-autocomplete-input,\n.p-autocomplete-dd .p-autocomplete-multiple-container {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.p-autocomplete-dd .p-autocomplete-dropdown {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0px;\n}\n\n.p-autocomplete .p-autocomplete-panel {\n  min-width: 100%;\n}\n\n.p-autocomplete-panel {\n  position: absolute;\n  overflow: auto;\n}\n\n.p-autocomplete-items {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.p-autocomplete-item {\n  cursor: pointer;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n}\n\n.p-autocomplete-multiple-container {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  cursor: text;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n\n.p-autocomplete-token {\n  cursor: default;\n  display: inline-flex;\n  align-items: center;\n  flex: 0 0 auto;\n}\n\n.p-autocomplete-token-icon {\n  cursor: pointer;\n}\n\n.p-autocomplete-input-token {\n  flex: 1 1 auto;\n  display: inline-flex;\n}\n\n.p-autocomplete-input-token input {\n  border: 0 none;\n  outline: 0 none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  border-radius: 0;\n  width: 100%;\n}\n\n.p-fluid .p-autocomplete {\n  display: flex;\n}\n\n.p-fluid .p-autocomplete-dd .p-autocomplete-input {\n  width: 1%;\n}\n</style>\n"]
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

})(primevue2.utils, primevue2.button, primevue2.ripple);
