this.primevue2 = this.primevue2 || {};
this.primevue2.dropdown = (function (utils, Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var script = {
    name: 'Dropdown',
    props: {
      value: null,
      options: Array,
      optionLabel: null,
      optionValue: null,
      optionDisabled: null,
      scrollHeight: {
        type: String,
        default: '200px'
      },
      filter: Boolean,
      filterPlaceholder: String,
      filterLocale: String,
      editable: Boolean,
      placeholder: String,
      disabled: Boolean,
      dataKey: null,
      showClear: Boolean,
      inputId: String,
      tabindex: String,
      ariaLabelledBy: null,
      appendTo: {
        type: String,
        default: null
      },
      emptyFilterMessage: {
        type: String,
        default: 'No results found'
      }
    },
    data: function data() {
      return {
        focused: false,
        filterValue: null,
        overlayVisible: false
      };
    },
    watch: {
      value: function value() {
        this.isModelValueChanged = true;
      }
    },
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    searchTimeout: null,
    currentSearchChar: null,
    previousSearchChar: null,
    searchValue: null,
    isValueChanged: false,
    updated: function updated() {
      if (this.overlayVisible && this.isModelValueChanged) {
        this.scrollValueInView();
      }
      this.isModelValueChanged = false;
      this.onFilterUpdated();
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
    methods: {
      getOptionLabel: function getOptionLabel(option) {
        return this.optionLabel ? utils.ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
      },
      getOptionValue: function getOptionValue(option) {
        return this.optionValue ? utils.ObjectUtils.resolveFieldData(option, this.optionValue) : option;
      },
      getOptionRenderKey: function getOptionRenderKey(option) {
        return this.dataKey ? utils.ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option);
      },
      isOptionDisabled: function isOptionDisabled(option) {
        return this.optionDisabled ? utils.ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
      },
      getSelectedOption: function getSelectedOption() {
        var selectedOption;
        if (this.value != null && this.options) {
          var _iterator = _createForOfIteratorHelper(this.options),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var option = _step.value;
              if (utils.ObjectUtils.equals(this.value, this.getOptionValue(option), this.equalityKey)) {
                selectedOption = option;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return selectedOption;
      },
      isSelected: function isSelected(option) {
        return utils.ObjectUtils.equals(this.value, this.getOptionValue(option), this.equalityKey);
      },
      getSelectedOptionIndex: function getSelectedOptionIndex() {
        var selectedOptionIndex = -1;
        if (this.value != null && this.visibleOptions) {
          for (var i = 0; i < this.visibleOptions.length; i++) {
            if (utils.ObjectUtils.equals(this.value, this.getOptionValue(this.visibleOptions[i]), this.equalityKey)) {
              selectedOptionIndex = i;
              break;
            }
          }
        }
        return selectedOptionIndex;
      },
      show: function show() {
        this.$emit('before-show');
        this.overlayVisible = true;
      },
      hide: function hide() {
        this.$emit('before-hide');
        this.overlayVisible = false;
      },
      onFocus: function onFocus() {
        this.focused = true;
      },
      onBlur: function onBlur() {
        this.focused = false;
      },
      onKeyDown: function onKeyDown(event) {
        switch (event.which) {
          //down
          case 40:
            this.onDownKey(event);
            break;

          //up
          case 38:
            this.onUpKey(event);
            break;

          //space
          case 32:
            if (!this.overlayVisible) {
              this.show();
              event.preventDefault();
            }
            break;

          //enter and escape
          case 13:
          case 27:
            if (this.overlayVisible) {
              this.hide();
              event.preventDefault();
            }
            break;

          //tab
          case 9:
            this.hide();
            break;
          default:
            this.search(event);
            break;
        }
      },
      onFilterKeyDown: function onFilterKeyDown(event) {
        switch (event.which) {
          //down
          case 40:
            this.onDownKey(event);
            break;

          //up
          case 38:
            this.onUpKey(event);
            break;

          //enter and escape
          case 13:
          case 27:
            this.overlayVisible = false;
            event.preventDefault();
            break;
        }
      },
      onDownKey: function onDownKey(event) {
        if (this.visibleOptions) {
          if (!this.overlayVisible && event.altKey) {
            this.show();
          } else {
            var nextOption = this.findNextOption(this.getSelectedOptionIndex());
            if (nextOption) {
              this.updateModel(event, this.getOptionValue(nextOption));
            }
          }
        }
        event.preventDefault();
      },
      onUpKey: function onUpKey(event) {
        if (this.visibleOptions) {
          var prevOption = this.findPrevOption(this.getSelectedOptionIndex());
          if (prevOption) {
            this.updateModel(event, this.getOptionValue(prevOption));
          }
        }
        event.preventDefault();
      },
      findNextOption: function findNextOption(index) {
        var i = index + 1;
        if (i === this.visibleOptions.length) {
          return null;
        }
        var option = this.visibleOptions[i];
        if (this.isOptionDisabled(option)) return this.findNextOption(i);else return option;
      },
      findPrevOption: function findPrevOption(index) {
        var i = index - 1;
        if (i < 0) {
          return null;
        }
        var option = this.visibleOptions[i];
        if (this.isOptionDisabled(option)) return this.findPrevOption(i);else return option;
      },
      onClearClick: function onClearClick(event) {
        this.updateModel(event, null);
      },
      onClick: function onClick(event) {
        if (this.disabled) {
          return;
        }
        if (utils.DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') || event.target.tagName === 'INPUT') {
          return;
        } else if (!this.$refs.overlay || !this.$refs.overlay.contains(event.target)) {
          if (this.overlayVisible) this.hide();else this.show();
          this.$refs.focusInput.focus();
        }
      },
      onOptionSelect: function onOptionSelect(event, option) {
        var _this = this;
        var value = this.getOptionValue(option);
        this.updateModel(event, value);
        this.$refs.focusInput.focus();
        setTimeout(function () {
          _this.hide();
        }, 200);
      },
      onEditableInput: function onEditableInput(event) {
        this.$emit('input', event.target.value);
      },
      onOverlayEnter: function onOverlayEnter() {
        this.$refs.overlay.style.zIndex = String(utils.DomHandler.generateZIndex());
        this.appendContainer();
        this.alignOverlay();
        this.bindOutsideClickListener();
        this.bindScrollListener();
        this.bindResizeListener();
        if (this.filter) {
          this.$refs.filterInput.focus();
        }
        this.$emit('show');
      },
      onOverlayLeave: function onOverlayLeave() {
        this.unbindOutsideClickListener();
        this.unbindScrollListener();
        this.unbindResizeListener();
        this.$emit('hide');
      },
      alignOverlay: function alignOverlay() {
        if (this.appendTo) {
          utils.DomHandler.absolutePosition(this.$refs.overlay, this.$refs.container);
          this.$refs.overlay.style.minWidth = utils.DomHandler.getOuterWidth(this.$refs.container) + 'px';
        } else {
          utils.DomHandler.relativePosition(this.$refs.overlay, this.$refs.container);
        }
      },
      updateModel: function updateModel(event, value) {
        this.$emit('input', value);
        this.$emit('change', {
          originalEvent: event,
          value: value
        });
      },
      bindOutsideClickListener: function bindOutsideClickListener() {
        var _this2 = this;
        if (!this.outsideClickListener) {
          this.outsideClickListener = function (event) {
            if (_this2.overlayVisible && _this2.$refs.overlay && !_this2.$refs.container.contains(event.target) && !_this2.$refs.overlay.contains(event.target)) {
              _this2.hide();
            }
          };
          document.addEventListener('click', this.outsideClickListener);
        }
      },
      unbindOutsideClickListener: function unbindOutsideClickListener() {
        if (this.outsideClickListener) {
          document.removeEventListener('click', this.outsideClickListener);
          this.outsideClickListener = null;
        }
      },
      bindScrollListener: function bindScrollListener() {
        var _this3 = this;
        if (!this.scrollHandler) {
          this.scrollHandler = new utils.ConnectedOverlayScrollHandler(this.$el, function () {
            if (_this3.overlayVisible) {
              _this3.hide();
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
        var _this4 = this;
        if (!this.resizeListener) {
          this.resizeListener = function () {
            if (_this4.overlayVisible && !utils.DomHandler.isTouchDevice()) {
              _this4.hide();
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
      search: function search(event) {
        var _this5 = this;
        if (!this.visibleOptions) {
          return;
        }
        if (this.searchTimeout) {
          clearTimeout(this.searchTimeout);
        }
        var char = event.key;
        this.previousSearchChar = this.currentSearchChar;
        this.currentSearchChar = char;
        if (this.previousSearchChar === this.currentSearchChar) this.searchValue = this.currentSearchChar;else this.searchValue = this.searchValue ? this.searchValue + char : char;
        var searchIndex = this.getSelectedOptionIndex();
        var newOption = this.searchOption(++searchIndex);
        if (newOption) {
          this.updateModel(event, this.getOptionValue(newOption));
        }
        this.searchTimeout = setTimeout(function () {
          _this5.searchValue = null;
        }, 250);
      },
      searchOption: function searchOption(index) {
        var option;
        if (this.searchValue) {
          option = this.searchOptionInRange(index, this.visibleOptions.length);
          if (!option) {
            option = this.searchOptionInRange(0, index);
          }
        }
        return option;
      },
      searchOptionInRange: function searchOptionInRange(start, end) {
        for (var i = start; i < end; i++) {
          var opt = this.visibleOptions[i];
          var label = this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale);
          if (label.startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))) {
            return opt;
          }
        }
        return null;
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
      },
      onFilterChange: function onFilterChange(event) {
        this.filterValue = event.target.value;
        this.$emit('filter', {
          originalEvent: event,
          value: event.target.value
        });
      },
      onFilterUpdated: function onFilterUpdated() {
        if (this.overlayVisible) {
          this.alignOverlay();
        }
      },
      scrollValueInView: function scrollValueInView() {
        if (this.$refs.overlay) {
          var selectedItem = utils.DomHandler.findSingle(this.$refs.overlay, 'li.p-highlight');
          if (selectedItem) {
            selectedItem.scrollIntoView({
              block: 'nearest',
              inline: 'start'
            });
          }
        }
      }
    },
    computed: {
      visibleOptions: function visibleOptions() {
        var _this6 = this;
        if (this.filterValue && this.filterValue.trim().length > 0) return this.options.filter(function (option) {
          return _this6.getOptionLabel(option).toLocaleLowerCase(_this6.filterLocale).indexOf(_this6.filterValue.toLocaleLowerCase(_this6.filterLocale)) > -1;
        });else return this.options;
      },
      containerClass: function containerClass() {
        return ['p-dropdown p-component p-inputwrapper', {
          'p-disabled': this.disabled,
          'p-dropdown-clearable': this.showClear && !this.disabled,
          'p-focus': this.focused,
          'p-inputwrapper-filled': this.value,
          'p-inputwrapper-focus': this.focused || this.overlayVisible
        }];
      },
      labelClass: function labelClass() {
        return ['p-dropdown-label p-inputtext', {
          'p-placeholder': this.label === this.placeholder,
          'p-dropdown-label-empty': !this.$scopedSlots['value'] && (this.label === 'p-emptylabel' || this.label.length === 0)
        }];
      },
      label: function label() {
        var selectedOption = this.getSelectedOption();
        if (selectedOption) return this.getOptionLabel(selectedOption);else return this.placeholder || 'p-emptylabel';
      },
      editableInputValue: function editableInputValue() {
        var selectedOption = this.getSelectedOption();
        if (selectedOption != null) return this.getOptionLabel(selectedOption);else return this.value;
      },
      equalityKey: function equalityKey() {
        return this.optionValue ? null : this.dataKey;
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
      ref: "container",
      class: _vm.containerClass,
      on: {
        click: function click($event) {
          return _vm.onClick($event);
        }
      }
    }, [_c("div", {
      staticClass: "p-hidden-accessible"
    }, [_c("input", {
      ref: "focusInput",
      attrs: {
        type: "text",
        id: _vm.inputId,
        readonly: "",
        disabled: _vm.disabled,
        tabindex: _vm.tabindex,
        "aria-haspopup": "listbox",
        "aria-expanded": _vm.overlayVisible,
        "aria-labelledby": _vm.ariaLabelledBy
      },
      on: {
        focus: _vm.onFocus,
        blur: _vm.onBlur,
        keydown: _vm.onKeyDown
      }
    })]), _vm._v(" "), _vm.editable ? _c("input", {
      staticClass: "p-dropdown-label p-inputtext",
      attrs: {
        type: "text",
        disabled: _vm.disabled,
        placeholder: _vm.placeholder,
        "aria-haspopup": "listbox",
        "aria-expanded": _vm.overlayVisible
      },
      domProps: {
        value: _vm.editableInputValue
      },
      on: {
        focus: _vm.onFocus,
        blur: _vm.onBlur,
        input: _vm.onEditableInput
      }
    }) : _vm._e(), _vm._v(" "), !_vm.editable ? _c("span", {
      class: _vm.labelClass
    }, [_vm._t("value", function () {
      return [_vm._v("\n      " + _vm._s(_vm.label) + "\n    ")];
    }, {
      value: _vm.value,
      placeholder: _vm.placeholder
    })], 2) : _vm._e(), _vm._v(" "), _vm.showClear && _vm.value != null ? _c("i", {
      staticClass: "p-dropdown-clear-icon pi pi-times",
      on: {
        click: function click($event) {
          return _vm.onClearClick($event);
        }
      }
    }) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "p-dropdown-trigger",
      attrs: {
        role: "button",
        "aria-haspopup": "listbox",
        "aria-expanded": _vm.overlayVisible
      }
    }, [_vm._t("indicator", function () {
      return [_c("span", {
        staticClass: "p-dropdown-trigger-icon pi pi-chevron-down"
      })];
    })], 2), _vm._v(" "), _c("transition", {
      attrs: {
        name: "p-connected-overlay"
      },
      on: {
        enter: _vm.onOverlayEnter,
        leave: _vm.onOverlayLeave
      }
    }, [_vm.overlayVisible ? _c("div", {
      ref: "overlay",
      staticClass: "p-dropdown-panel p-component"
    }, [_vm.filter ? _c("div", {
      staticClass: "p-dropdown-header"
    }, [_c("div", {
      staticClass: "p-dropdown-filter-container"
    }, [_c("input", {
      ref: "filterInput",
      staticClass: "p-dropdown-filter p-inputtext p-component",
      attrs: {
        type: "text",
        autoComplete: "off",
        placeholder: _vm.filterPlaceholder
      },
      domProps: {
        value: _vm.filterValue
      },
      on: {
        keydown: _vm.onFilterKeyDown,
        input: _vm.onFilterChange
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "p-dropdown-filter-icon pi pi-search"
    })])]) : _vm._e(), _vm._v(" "), _c("div", {
      ref: "itemsWrapper",
      staticClass: "p-dropdown-items-wrapper",
      style: {
        "max-height": _vm.scrollHeight
      }
    }, [_c("ul", {
      staticClass: "p-dropdown-items",
      attrs: {
        role: "listbox"
      }
    }, [_vm._l(_vm.visibleOptions, function (option, i) {
      return _c("li", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        key: _vm.getOptionRenderKey(option),
        class: ["p-dropdown-item", {
          "p-highlight": _vm.isSelected(option),
          "p-disabled": _vm.isOptionDisabled(option)
        }],
        attrs: {
          "aria-label": _vm.getOptionLabel(option),
          role: "option",
          "aria-selected": _vm.isSelected(option)
        },
        on: {
          click: function click($event) {
            return _vm.onOptionSelect($event, option);
          }
        }
      }, [_vm._t("option", function () {
        return [_vm._v("\n              " + _vm._s(_vm.getOptionLabel(option)) + "\n            ")];
      }, {
        option: option,
        index: i
      })], 2);
    }), _vm._v(" "), _vm.filterValue && (!_vm.visibleOptions || _vm.visibleOptions && _vm.visibleOptions.length === 0) ? _c("li", {
      staticClass: "p-dropdown-empty-message"
    }, [_vm._v("\n            " + _vm._s(_vm.emptyFilterMessage) + "\n          ")]) : _vm._e()], 2)])]) : _vm._e()])], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-a27b4fb8_0", {
      source: "\n.p-dropdown {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  cursor: pointer;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-dropdown-clear-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5rem;\n}\n.p-dropdown-trigger {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n.p-dropdown-label {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  width: 1%;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n.p-dropdown-label-empty {\n  overflow: hidden;\n  visibility: hidden;\n}\ninput.p-dropdown-label {\n  cursor: default;\n}\n.p-dropdown .p-dropdown-panel {\n  min-width: 100%;\n}\n.p-dropdown-panel {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.p-dropdown-items-wrapper {\n  overflow: auto;\n}\n.p-dropdown-item {\n  cursor: pointer;\n  font-weight: normal;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n}\n.p-dropdown-items {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.p-dropdown-filter {\n  width: 100%;\n}\n.p-dropdown-filter-container {\n  position: relative;\n}\n.p-dropdown-filter-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5rem;\n}\n.p-fluid .p-dropdown {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.p-fluid .p-dropdown .p-dropdown-label {\n  width: 1%;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/dropdown/Dropdown.vue"],
        "names": [],
        "mappings": ";AAwkBA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AACA;AAEA;EACA,kBAAA;EACA,QAAA;EACA,mBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,sBAAA;MAAA,oBAAA;UAAA,cAAA;AACA;AAEA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;EACA,SAAA;EACA,uBAAA;EACA,eAAA;AACA;AAEA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,eAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;AACA;AAEA;EACA,WAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;EACA,QAAA;EACA,mBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA;AAEA;EACA,SAAA;AACA",
        "file": "Dropdown.vue",
        "sourcesContent": ["<template>\n  <div ref=\"container\" :class=\"containerClass\" @click=\"onClick($event)\">\n    <div class=\"p-hidden-accessible\">\n      <input\n        ref=\"focusInput\"\n        type=\"text\"\n        :id=\"inputId\"\n        readonly\n        :disabled=\"disabled\"\n        @focus=\"onFocus\"\n        @blur=\"onBlur\"\n        @keydown=\"onKeyDown\"\n        :tabindex=\"tabindex\"\n        aria-haspopup=\"listbox\"\n        :aria-expanded=\"overlayVisible\"\n        :aria-labelledby=\"ariaLabelledBy\" />\n    </div>\n    <input\n      v-if=\"editable\"\n      type=\"text\"\n      class=\"p-dropdown-label p-inputtext\"\n      :disabled=\"disabled\"\n      @focus=\"onFocus\"\n      @blur=\"onBlur\"\n      :placeholder=\"placeholder\"\n      :value=\"editableInputValue\"\n      @input=\"onEditableInput\"\n      aria-haspopup=\"listbox\"\n      :aria-expanded=\"overlayVisible\" />\n    <span v-if=\"!editable\" :class=\"labelClass\">\n      <slot name=\"value\" :value=\"value\" :placeholder=\"placeholder\">\n        {{ label }}\n      </slot>\n    </span>\n    <i v-if=\"showClear && value != null\" class=\"p-dropdown-clear-icon pi pi-times\" @click=\"onClearClick($event)\"></i>\n    <div class=\"p-dropdown-trigger\" role=\"button\" aria-haspopup=\"listbox\" :aria-expanded=\"overlayVisible\">\n      <slot name=\"indicator\">\n        <span class=\"p-dropdown-trigger-icon pi pi-chevron-down\"></span>\n      </slot>\n    </div>\n    <transition name=\"p-connected-overlay\" @enter=\"onOverlayEnter\" @leave=\"onOverlayLeave\">\n      <div ref=\"overlay\" class=\"p-dropdown-panel p-component\" v-if=\"overlayVisible\">\n        <div class=\"p-dropdown-header\" v-if=\"filter\">\n          <div class=\"p-dropdown-filter-container\">\n            <input\n              type=\"text\"\n              ref=\"filterInput\"\n              :value=\"filterValue\"\n              autoComplete=\"off\"\n              class=\"p-dropdown-filter p-inputtext p-component\"\n              :placeholder=\"filterPlaceholder\"\n              @keydown=\"onFilterKeyDown\"\n              @input=\"onFilterChange\" />\n            <span class=\"p-dropdown-filter-icon pi pi-search\"></span>\n          </div>\n        </div>\n        <div ref=\"itemsWrapper\" class=\"p-dropdown-items-wrapper\" :style=\"{ 'max-height': scrollHeight }\">\n          <ul class=\"p-dropdown-items\" role=\"listbox\">\n            <li\n              v-for=\"(option, i) of visibleOptions\"\n              :class=\"[\n                'p-dropdown-item',\n                { 'p-highlight': isSelected(option), 'p-disabled': isOptionDisabled(option) },\n              ]\"\n              v-ripple\n              :aria-label=\"getOptionLabel(option)\"\n              :key=\"getOptionRenderKey(option)\"\n              @click=\"onOptionSelect($event, option)\"\n              role=\"option\"\n              :aria-selected=\"isSelected(option)\">\n              <slot name=\"option\" :option=\"option\" :index=\"i\">\n                {{ getOptionLabel(option) }}\n              </slot>\n            </li>\n            <li\n              v-if=\"filterValue && (!visibleOptions || (visibleOptions && visibleOptions.length === 0))\"\n              class=\"p-dropdown-empty-message\">\n              {{ emptyFilterMessage }}\n            </li>\n          </ul>\n        </div>\n      </div>\n    </transition>\n  </div>\n</template>\n\n<script>\nimport { ConnectedOverlayScrollHandler, ObjectUtils, DomHandler } from 'primevue2/utils'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'Dropdown',\n  props: {\n    value: null,\n    options: Array,\n    optionLabel: null,\n    optionValue: null,\n    optionDisabled: null,\n    scrollHeight: {\n      type: String,\n      default: '200px'\n    },\n    filter: Boolean,\n    filterPlaceholder: String,\n    filterLocale: String,\n    editable: Boolean,\n    placeholder: String,\n    disabled: Boolean,\n    dataKey: null,\n    showClear: Boolean,\n    inputId: String,\n    tabindex: String,\n    ariaLabelledBy: null,\n    appendTo: {\n      type: String,\n      default: null\n    },\n    emptyFilterMessage: {\n      type: String,\n      default: 'No results found'\n    }\n  },\n  data() {\n    return {\n      focused: false,\n      filterValue: null,\n      overlayVisible: false\n    }\n  },\n  watch: {\n    value() {\n      this.isModelValueChanged = true\n    }\n  },\n  outsideClickListener: null,\n  scrollHandler: null,\n  resizeListener: null,\n  searchTimeout: null,\n  currentSearchChar: null,\n  previousSearchChar: null,\n  searchValue: null,\n  isValueChanged: false,\n  updated() {\n    if (this.overlayVisible && this.isModelValueChanged) {\n      this.scrollValueInView()\n    }\n    this.isModelValueChanged = false\n\n    this.onFilterUpdated()\n  },\n  beforeDestroy() {\n    this.restoreAppend()\n    this.unbindOutsideClickListener()\n    this.unbindResizeListener()\n\n    if (this.scrollHandler) {\n      this.scrollHandler.destroy()\n      this.scrollHandler = null\n    }\n  },\n  methods: {\n    getOptionLabel(option) {\n      return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option\n    },\n    getOptionValue(option) {\n      return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option\n    },\n    getOptionRenderKey(option) {\n      return this.dataKey ? ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option)\n    },\n    isOptionDisabled(option) {\n      return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false\n    },\n    getSelectedOption() {\n      let selectedOption\n\n      if (this.value != null && this.options) {\n        for (let option of this.options) {\n          if ((ObjectUtils.equals(this.value, this.getOptionValue(option), this.equalityKey))) {\n            selectedOption = option\n            break\n          }\n        }\n      }\n\n      return selectedOption\n    },\n    isSelected(option) {\n      return ObjectUtils.equals(this.value, this.getOptionValue(option), this.equalityKey)\n    },\n    getSelectedOptionIndex() {\n      let selectedOptionIndex = -1\n\n      if (this.value != null && this.visibleOptions) {\n        for (let i = 0; i < this.visibleOptions.length; i++) {\n          if ((ObjectUtils.equals(this.value, this.getOptionValue(this.visibleOptions[i]), this.equalityKey))) {\n            selectedOptionIndex = i\n            break\n          }\n        }\n      }\n\n      return selectedOptionIndex\n    },\n    show() {\n      this.$emit('before-show')\n      this.overlayVisible = true\n    },\n    hide() {\n      this.$emit('before-hide')\n      this.overlayVisible = false\n    },\n    onFocus() {\n      this.focused = true\n    },\n    onBlur() {\n      this.focused = false\n    },\n    onKeyDown(event) {\n      switch (event.which) {\n      //down\n      case 40:\n        this.onDownKey(event)\n        break\n\n        //up\n      case 38:\n        this.onUpKey(event)\n        break\n\n        //space\n      case 32:\n        if (!this.overlayVisible) {\n          this.show()\n          event.preventDefault()\n        }\n        break\n\n        //enter and escape\n      case 13:\n      case 27:\n        if (this.overlayVisible) {\n          this.hide()\n          event.preventDefault()\n        }\n        break\n\n        //tab\n      case 9:\n        this.hide()\n        break\n\n      default:\n        this.search(event)\n        break\n      }\n    },\n    onFilterKeyDown(event) {\n      switch (event.which) {\n      //down\n      case 40:\n        this.onDownKey(event)\n        break\n\n        //up\n      case 38:\n        this.onUpKey(event)\n        break\n\n        //enter and escape\n      case 13:\n      case 27:\n        this.overlayVisible = false\n        event.preventDefault()\n        break\n\n      default:\n        break\n      }\n    },\n    onDownKey(event) {\n      if (this.visibleOptions) {\n        if (!this.overlayVisible && event.altKey) {\n          this.show()\n        }\n        else {\n          let nextOption = this.findNextOption(this.getSelectedOptionIndex())\n\n          if (nextOption) {\n            this.updateModel(event, this.getOptionValue(nextOption))\n          }\n        }\n      }\n\n      event.preventDefault()\n    },\n    onUpKey(event) {\n      if (this.visibleOptions) {\n        let prevOption = this.findPrevOption(this.getSelectedOptionIndex())\n\n        if (prevOption) {\n          this.updateModel(event, this.getOptionValue(prevOption))\n        }\n      }\n\n      event.preventDefault()\n    },\n    findNextOption(index) {\n      let i = index + 1\n      if (i === this.visibleOptions.length) {\n        return null\n      }\n\n      let option = this.visibleOptions[i]\n      if (this.isOptionDisabled(option))\n        return this.findNextOption(i)\n      else\n        return option\n\n    },\n    findPrevOption(index) {\n      let i = index - 1\n      if (i < 0) {\n        return null\n      }\n\n      let option = this.visibleOptions[i]\n      if (this.isOptionDisabled(option))\n        return this.findPrevOption(i)\n      else\n        return option\n    },\n    onClearClick(event) {\n      this.updateModel(event, null)\n    },\n    onClick(event) {\n      if (this.disabled) {\n        return\n      }\n\n      if (DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') || event.target.tagName === 'INPUT') {\n        return\n      }\n      else if (!this.$refs.overlay || !this.$refs.overlay.contains(event.target)) {\n        if (this.overlayVisible)\n          this.hide()\n        else\n          this.show()\n\n        this.$refs.focusInput.focus()\n      }\n    },\n    onOptionSelect(event, option) {\n      let value = this.getOptionValue(option)\n      this.updateModel(event, value)\n      this.$refs.focusInput.focus()\n\n      setTimeout(() => {\n        this.hide()\n      }, 200)\n    },\n    onEditableInput(event) {\n      this.$emit('input', event.target.value)\n    },\n    onOverlayEnter() {\n      this.$refs.overlay.style.zIndex = String(DomHandler.generateZIndex())\n      this.appendContainer()\n      this.alignOverlay()\n      this.bindOutsideClickListener()\n      this.bindScrollListener()\n      this.bindResizeListener()\n\n      if (this.filter) {\n        this.$refs.filterInput.focus()\n      }\n\n      this.$emit('show')\n    },\n    onOverlayLeave() {\n      this.unbindOutsideClickListener()\n      this.unbindScrollListener()\n      this.unbindResizeListener()\n      this.$emit('hide')\n    },\n    alignOverlay() {\n      if (this.appendTo) {\n        DomHandler.absolutePosition(this.$refs.overlay, this.$refs.container)\n        this.$refs.overlay.style.minWidth = DomHandler.getOuterWidth(this.$refs.container) + 'px'\n      } else {\n        DomHandler.relativePosition(this.$refs.overlay, this.$refs.container)\n      }\n    },\n    updateModel(event, value) {\n      this.$emit('input', value)\n      this.$emit('change', { originalEvent: event, value: value })\n    },\n    bindOutsideClickListener() {\n      if (!this.outsideClickListener) {\n        this.outsideClickListener = (event) => {\n          if (this.overlayVisible && this.$refs.overlay && !this.$refs.container.contains(event.target) && !this.$refs.overlay.contains(event.target)) {\n            this.hide()\n          }\n        }\n        document.addEventListener('click', this.outsideClickListener)\n      }\n    },\n    unbindOutsideClickListener() {\n      if (this.outsideClickListener) {\n        document.removeEventListener('click', this.outsideClickListener)\n        this.outsideClickListener = null\n      }\n    },\n    bindScrollListener() {\n      if (!this.scrollHandler) {\n        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$el, () => {\n          if (this.overlayVisible) {\n            this.hide()\n          }\n        })\n      }\n\n      this.scrollHandler.bindScrollListener()\n    },\n    unbindScrollListener() {\n      if (this.scrollHandler) {\n        this.scrollHandler.unbindScrollListener()\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          if (this.overlayVisible && !DomHandler.isTouchDevice()) {\n            this.hide()\n          }\n        }\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    },\n    search(event) {\n      if (!this.visibleOptions) {\n        return\n      }\n\n      if (this.searchTimeout) {\n        clearTimeout(this.searchTimeout)\n      }\n\n      const char = event.key\n      this.previousSearchChar = this.currentSearchChar\n      this.currentSearchChar = char\n\n      if (this.previousSearchChar === this.currentSearchChar)\n        this.searchValue = this.currentSearchChar\n      else\n        this.searchValue = this.searchValue ? this.searchValue + char : char\n\n      let searchIndex = this.getSelectedOptionIndex()\n      let newOption = this.searchOption(++searchIndex)\n\n      if (newOption) {\n        this.updateModel(event, this.getOptionValue(newOption))\n      }\n\n      this.searchTimeout = setTimeout(() => {\n        this.searchValue = null\n      }, 250)\n    },\n    searchOption(index) {\n      let option\n\n      if (this.searchValue) {\n        option = this.searchOptionInRange(index, this.visibleOptions.length)\n\n        if (!option) {\n          option = this.searchOptionInRange(0, index)\n        }\n      }\n\n      return option\n    },\n    searchOptionInRange(start, end) {\n      for (let i = start; i < end; i++) {\n        let opt = this.visibleOptions[i]\n        let label = this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale)\n        if (label.startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))) {\n          return opt\n        }\n      }\n\n      return null\n    },\n    appendContainer() {\n      if (this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.appendChild(this.$refs.overlay)\n        else\n          document.getElementById(this.appendTo).appendChild(this.$refs.overlay)\n      }\n    },\n    restoreAppend() {\n      if (this.$refs.overlay && this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.removeChild(this.$refs.overlay)\n        else\n          document.getElementById(this.appendTo).removeChild(this.$refs.overlay)\n      }\n    },\n    onFilterChange(event) {\n      this.filterValue = event.target.value\n      this.$emit('filter', { originalEvent: event, value: event.target.value })\n    },\n    onFilterUpdated() {\n      if (this.overlayVisible) {\n        this.alignOverlay()\n      }\n    },\n    scrollValueInView() {\n      if (this.$refs.overlay) {\n        let selectedItem = DomHandler.findSingle(this.$refs.overlay, 'li.p-highlight')\n        if (selectedItem) {\n          selectedItem.scrollIntoView({ block: 'nearest', inline: 'start' })\n        }\n      }\n    },\n  },\n  computed: {\n    visibleOptions() {\n      if (this.filterValue && this.filterValue.trim().length > 0)\n        return this.options.filter(option => this.getOptionLabel(option).toLocaleLowerCase(this.filterLocale).indexOf(this.filterValue.toLocaleLowerCase(this.filterLocale)) > -1)\n      else\n        return this.options\n    },\n    containerClass() {\n      return [\n        'p-dropdown p-component p-inputwrapper',\n        {\n          'p-disabled': this.disabled,\n          'p-dropdown-clearable': this.showClear && !this.disabled,\n          'p-focus': this.focused,\n          'p-inputwrapper-filled': this.value,\n          'p-inputwrapper-focus': this.focused || this.overlayVisible\n        }\n      ]\n    },\n    labelClass() {\n      return [\n        'p-dropdown-label p-inputtext',\n        {\n          'p-placeholder': this.label === this.placeholder,\n          'p-dropdown-label-empty': !this.$scopedSlots['value'] && (this.label === 'p-emptylabel' || this.label.length === 0)\n        }\n      ]\n    },\n    label() {\n      let selectedOption = this.getSelectedOption()\n      if (selectedOption)\n        return this.getOptionLabel(selectedOption)\n      else\n        return this.placeholder || 'p-emptylabel'\n    },\n    editableInputValue() {\n      let selectedOption = this.getSelectedOption()\n      if (selectedOption != null)\n        return this.getOptionLabel(selectedOption)\n      else\n        return this.value\n    },\n    equalityKey() {\n      return this.optionValue ? null : this.dataKey\n    }\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-dropdown {\n  display: inline-flex;\n  cursor: pointer;\n  position: relative;\n  user-select: none;\n}\n\n.p-dropdown-clear-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5rem;\n}\n\n.p-dropdown-trigger {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.p-dropdown-label {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  flex: 1 1 auto;\n  width: 1%;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n\n.p-dropdown-label-empty {\n  overflow: hidden;\n  visibility: hidden;\n}\n\ninput.p-dropdown-label {\n  cursor: default;\n}\n\n.p-dropdown .p-dropdown-panel {\n  min-width: 100%;\n}\n\n.p-dropdown-panel {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.p-dropdown-items-wrapper {\n  overflow: auto;\n}\n\n.p-dropdown-item {\n  cursor: pointer;\n  font-weight: normal;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n}\n\n.p-dropdown-items {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.p-dropdown-filter {\n  width: 100%;\n}\n\n.p-dropdown-filter-container {\n  position: relative;\n}\n\n.p-dropdown-filter-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5rem;\n}\n\n.p-fluid .p-dropdown {\n  display: flex;\n}\n\n.p-fluid .p-dropdown .p-dropdown-label {\n  width: 1%;\n}\n</style>\n"]
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
