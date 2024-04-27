this.primevue2 = this.primevue2 || {};
this.primevue2.multiselect = (function (utils, Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var script = {
    name: 'MultiSelect',
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
      placeholder: String,
      disabled: Boolean,
      filter: Boolean,
      tabindex: String,
      inputId: String,
      dataKey: null,
      filterPlaceholder: String,
      filterLocale: String,
      ariaLabelledBy: null,
      appendTo: {
        type: String,
        default: null
      },
      emptyFilterMessage: {
        type: String,
        default: 'No results found'
      },
      display: {
        type: String,
        default: 'comma'
      },
      selectionLimit: {
        type: Number,
        default: null
      },
      showToggleAll: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        focused: false,
        headerCheckboxFocused: false,
        filterValue: null,
        overlayVisible: false
      };
    },
    outsideClickListener: null,
    resizeListener: null,
    scrollHandler: null,
    updated: function updated() {
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
        if (this.maxSelectionLimitReached && !this.isSelected(option)) {
          return true;
        }
        return this.optionDisabled ? utils.ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
      },
      isSelected: function isSelected(option) {
        var selected = false;
        var optionValue = this.getOptionValue(option);
        if (this.value) {
          var _iterator = _createForOfIteratorHelper(this.value),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var val = _step.value;
              if (utils.ObjectUtils.equals(val, optionValue, this.equalityKey)) {
                selected = true;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return selected;
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
      onHeaderCheckboxFocus: function onHeaderCheckboxFocus() {
        this.headerCheckboxFocused = true;
      },
      onHeaderCheckboxBlur: function onHeaderCheckboxBlur() {
        this.headerCheckboxFocused = false;
      },
      onClick: function onClick(event) {
        if (!this.disabled && (!this.$refs.overlay || !this.$refs.overlay.contains(event.target)) && !utils.DomHandler.hasClass(event.target, 'p-multiselect-close')) {
          if (this.overlayVisible) this.hide();else this.show();
          this.$refs.focusInput.focus();
        }
      },
      onCloseClick: function onCloseClick() {
        this.hide();
      },
      onKeyDown: function onKeyDown(event) {
        switch (event.which) {
          //down
          case 40:
            if (this.visibleOptions && !this.overlayVisible && event.altKey) {
              this.show();
            }
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
        }
      },
      onOptionSelect: function onOptionSelect(event, option) {
        var _this = this;
        if (this.disabled || this.isOptionDisabled(option)) {
          return;
        }
        var selected = this.isSelected(option);
        var value = null;
        if (selected) value = this.value.filter(function (val) {
          return !utils.ObjectUtils.equals(val, _this.getOptionValue(option), _this.equalityKey);
        });else value = [].concat(_toConsumableArray(this.value || []), [this.getOptionValue(option)]);
        this.$emit('input', value);
        this.$emit('change', {
          originalEvent: event,
          value: value
        });
      },
      onOptionKeyDown: function onOptionKeyDown(event, option) {
        var listItem = event.target;
        switch (event.which) {
          //down
          case 40:
            var nextItem = this.findNextItem(listItem);
            if (nextItem) {
              nextItem.focus();
            }
            event.preventDefault();
            break;

          //up
          case 38:
            var prevItem = this.findPrevItem(listItem);
            if (prevItem) {
              prevItem.focus();
            }
            event.preventDefault();
            break;

          //enter
          case 13:
            this.onOptionSelect(event, option);
            event.preventDefault();
            break;
        }
      },
      findNextItem: function findNextItem(item) {
        var nextItem = item.nextElementSibling;
        if (nextItem) return utils.DomHandler.hasClass(nextItem, 'p-disabled') ? this.findNextItem(nextItem) : nextItem;else return null;
      },
      findPrevItem: function findPrevItem(item) {
        var prevItem = item.previousElementSibling;
        if (prevItem) return utils.DomHandler.hasClass(prevItem, 'p-disabled') ? this.findPrevItem(prevItem) : prevItem;else return null;
      },
      onOverlayEnter: function onOverlayEnter() {
        this.$refs.overlay.style.zIndex = String(utils.DomHandler.generateZIndex());
        this.appendContainer();
        this.alignOverlay();
        this.bindOutsideClickListener();
        this.bindScrollListener();
        this.bindResizeListener();
        this.$emit('show');
        if (this.filter) {
          this.$refs.filterInput.focus();
        }
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
      bindOutsideClickListener: function bindOutsideClickListener() {
        var _this2 = this;
        if (!this.outsideClickListener) {
          this.outsideClickListener = function (event) {
            if (_this2.overlayVisible && _this2.isOutsideClicked(event)) {
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
            if (_this4.overlayVisible && !utils.DomHandler.isAndroid()) {
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
      isOutsideClicked: function isOutsideClicked(event) {
        return !(this.$refs.container.isSameNode(event.target) || this.$refs.container.contains(event.target) || this.$refs.overlay && this.$refs.overlay.contains(event.target));
      },
      getLabelByValue: function getLabelByValue(val) {
        var label = null;
        if (this.options) {
          var _iterator2 = _createForOfIteratorHelper(this.options),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var option = _step2.value;
              var optionValue = this.getOptionValue(option);
              if (utils.ObjectUtils.equals(optionValue, val, this.equalityKey)) {
                label = this.getOptionLabel(option);
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        return label;
      },
      onToggleAll: function onToggleAll(event) {
        var _this5 = this;
        var value = this.allSelected ? [] : this.visibleOptions && this.visibleOptions.map(function (option) {
          return _this5.getOptionValue(option);
        });
        this.$emit('input', value);
        this.$emit('change', {
          originalEvent: event,
          value: value
        });
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
      removeChip: function removeChip(item) {
        var _this6 = this;
        var value = this.value.filter(function (val) {
          return !utils.ObjectUtils.equals(val, item, _this6.equalityKey);
        });
        this.$emit('input', value);
        this.$emit('change', {
          originalEvent: event,
          value: value
        });
      }
    },
    computed: {
      visibleOptions: function visibleOptions() {
        var _this7 = this;
        if (this.filterValue && this.filterValue.trim().length > 0) return this.options.filter(function (option) {
          return _this7.getOptionLabel(option).toLocaleLowerCase(_this7.filterLocale).indexOf(_this7.filterValue.toLocaleLowerCase(_this7.filterLocale)) > -1;
        });else return this.options;
      },
      containerClass: function containerClass() {
        return ['p-multiselect p-component p-inputwrapper', {
          'p-multiselect-chip': this.display === 'chip',
          'p-disabled': this.disabled,
          'p-focus': this.focused,
          'p-inputwrapper-filled': this.value && this.value.length,
          'p-inputwrapper-focus': this.focused || this.overlayVisible
        }];
      },
      labelClass: function labelClass() {
        return ['p-multiselect-label', {
          'p-placeholder': this.label === this.placeholder,
          'p-multiselect-label-empty': !this.placeholder && (!this.value || this.value.length === 0)
        }];
      },
      label: function label() {
        var label;
        if (this.value && this.value.length) {
          label = '';
          for (var i = 0; i < this.value.length; i++) {
            if (i !== 0) {
              label += ', ';
            }
            label += this.getLabelByValue(this.value[i]);
          }
        } else {
          label = this.placeholder;
        }
        return label;
      },
      allSelected: function allSelected() {
        if (this.filterValue && this.filterValue.trim().length > 0) {
          var allSelected = true;
          if (this.visibleOptions.length > 0) {
            var _iterator3 = _createForOfIteratorHelper(this.visibleOptions),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var option = _step3.value;
                if (!this.isSelected(option)) {
                  allSelected = false;
                  break;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          } else allSelected = false;
          return allSelected;
        } else {
          return this.value && this.options && this.value.length > 0 && this.value.length === this.options.length;
        }
      },
      equalityKey: function equalityKey() {
        return this.optionValue ? null : this.dataKey;
      },
      maxSelectionLimitReached: function maxSelectionLimitReached() {
        return this.selectionLimit && this.value && this.value.length === this.selectionLimit;
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
        click: _vm.onClick
      }
    }, [_c("div", {
      staticClass: "p-hidden-accessible"
    }, [_c("input", {
      ref: "focusInput",
      attrs: {
        type: "text",
        role: "listbox",
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
    })]), _vm._v(" "), _c("div", {
      staticClass: "p-multiselect-label-container"
    }, [_c("div", {
      class: _vm.labelClass
    }, [_vm._t("value", function () {
      return [_vm.display === "comma" ? [_vm._v("\n          " + _vm._s(_vm.label || "empty") + "\n        ")] : _vm.display === "chip" ? [_vm._l(_vm.value, function (item) {
        return _c("div", {
          key: _vm.getLabelByValue(item),
          staticClass: "p-multiselect-token"
        }, [_c("span", {
          staticClass: "p-multiselect-token-label"
        }, [_vm._v(_vm._s(_vm.getLabelByValue(item)))]), _vm._v(" "), !_vm.disabled ? _c("span", {
          staticClass: "p-multiselect-token-icon pi pi-times-circle",
          on: {
            click: function click($event) {
              return _vm.removeChip(item);
            }
          }
        }) : _vm._e()]);
      }), _vm._v(" "), !_vm.value || _vm.value.length === 0 ? [_vm._v(_vm._s(_vm.placeholder || "empty"))] : _vm._e()] : _vm._e()];
    }, {
      value: _vm.value,
      placeholder: _vm.placeholder
    })], 2)]), _vm._v(" "), _c("div", {
      staticClass: "p-multiselect-trigger"
    }, [_vm._t("indicator", function () {
      return [_c("span", {
        staticClass: "p-multiselect-trigger-icon pi pi-chevron-down"
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
      staticClass: "p-multiselect-panel p-component"
    }, [_vm.showToggleAll && _vm.selectionLimit == null || _vm.filter ? _c("div", {
      staticClass: "p-multiselect-header"
    }, [_vm.showToggleAll && _vm.selectionLimit == null ? _c("div", {
      staticClass: "p-checkbox p-component",
      attrs: {
        role: "checkbox",
        "aria-checked": _vm.allSelected
      },
      on: {
        click: _vm.onToggleAll
      }
    }, [_c("div", {
      staticClass: "p-hidden-accessible"
    }, [_c("input", {
      attrs: {
        type: "checkbox",
        readonly: ""
      },
      on: {
        focus: _vm.onHeaderCheckboxFocus,
        blur: _vm.onHeaderCheckboxBlur
      }
    })]), _vm._v(" "), _c("div", {
      class: ["p-checkbox-box", {
        "p-highlight": _vm.allSelected,
        "p-focus": _vm.headerCheckboxFocused
      }],
      attrs: {
        role: "checkbox",
        "aria-checked": _vm.allSelected
      }
    }, [_c("span", {
      class: ["p-checkbox-icon", {
        "pi pi-check": _vm.allSelected
      }]
    })])]) : _vm._e(), _vm._v(" "), _vm.filter ? _c("div", {
      staticClass: "p-multiselect-filter-container"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.filterValue,
        expression: "filterValue"
      }],
      ref: "filterInput",
      staticClass: "p-multiselect-filter p-inputtext p-component",
      attrs: {
        type: "text",
        autoComplete: "on",
        placeholder: _vm.filterPlaceholder
      },
      domProps: {
        value: _vm.filterValue
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) {
            return;
          }
          _vm.filterValue = $event.target.value;
        }, _vm.onFilterChange]
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "p-multiselect-filter-icon pi pi-search"
    })]) : _vm._e(), _vm._v(" "), _c("button", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      staticClass: "p-multiselect-close p-link",
      attrs: {
        type: "button"
      },
      on: {
        click: _vm.onCloseClick
      }
    }, [_c("span", {
      staticClass: "p-multiselect-close-icon pi pi-times"
    })])]) : _vm._e(), _vm._v(" "), _c("div", {
      ref: "itemsWrapper",
      staticClass: "p-multiselect-items-wrapper",
      style: {
        "max-height": _vm.scrollHeight
      }
    }, [_c("ul", {
      staticClass: "p-multiselect-items p-component",
      attrs: {
        role: "listbox",
        "aria-multiselectable": "true"
      }
    }, [_vm._l(_vm.visibleOptions, function (option, i) {
      return _c("li", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        key: _vm.getOptionRenderKey(option),
        class: ["p-multiselect-item", {
          "p-highlight": _vm.isSelected(option),
          "p-disabled": _vm.isOptionDisabled(option)
        }],
        attrs: {
          role: "option",
          "aria-selected": _vm.isSelected(option),
          "aria-label": _vm.getOptionLabel(option),
          tabindex: _vm.tabindex || "0"
        },
        on: {
          click: function click($event) {
            return _vm.onOptionSelect($event, option);
          },
          keydown: function keydown($event) {
            return _vm.onOptionKeyDown($event, option);
          }
        }
      }, [_c("div", {
        staticClass: "p-checkbox p-component"
      }, [_c("div", {
        class: ["p-checkbox-box", {
          "p-highlight": _vm.isSelected(option)
        }]
      }, [_c("span", {
        class: ["p-checkbox-icon", {
          "pi pi-check": _vm.isSelected(option)
        }]
      })])]), _vm._v(" "), _vm._t("option", function () {
        return [_c("span", [_vm._v(_vm._s(_vm.getOptionLabel(option)))])];
      }, {
        option: option,
        index: i
      })], 2);
    }), _vm._v(" "), _vm.filterValue && (!_vm.visibleOptions || _vm.visibleOptions && _vm.visibleOptions.length === 0) ? _c("li", {
      staticClass: "p-multiselect-empty-message"
    }, [_vm._v("\n            " + _vm._s(_vm.emptyFilterMessage) + "\n          ")]) : _vm._e()], 2)])]) : _vm._e()])], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-ea078230_0", {
      source: "\n.p-multiselect {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  cursor: pointer;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-multiselect-trigger {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n.p-multiselect-label-container {\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  cursor: pointer;\n}\n.p-multiselect-label  {\n  display: block;\n  white-space: nowrap;\n  cursor: pointer;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.p-multiselect-label-empty {\n  overflow: hidden;\n  visibility: hidden;\n}\n.p-multiselect-token {\n  cursor: default;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n.p-multiselect-token-icon {\n  cursor: pointer;\n}\n.p-multiselect .p-multiselect-panel {\n  min-width: 100%;\n}\n.p-multiselect-panel {\n  position: absolute;\n}\n.p-multiselect-items-wrapper {\n  overflow: auto;\n}\n.p-multiselect-items {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.p-multiselect-item {\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-weight: normal;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n}\n.p-multiselect-header {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.p-multiselect-filter-container {\n  position: relative;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.p-multiselect-filter-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -.5rem;\n}\n.p-multiselect-filter-container .p-inputtext {\n  width: 100%;\n}\n.p-multiselect-close {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n  margin-left: auto;\n}\n.p-fluid .p-multiselect {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/multiselect/MultiSelect.vue"],
        "names": [],
        "mappings": ";AAgjBA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,sBAAA;MAAA,oBAAA;UAAA,cAAA;AACA;AAEA;EACA,gBAAA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;EACA,eAAA;AACA;AAEA;EACA,cAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,uBAAA;AACA;AAEA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,eAAA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;AACA;AAEA;EACA,eAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,yBAAA;EAAA,sCAAA;MAAA,sBAAA;UAAA,8BAAA;AACA;AAEA;EACA,kBAAA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;AAEA;EACA,kBAAA;EACA,QAAA;EACA,kBAAA;AACA;AAEA;EACA,WAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,sBAAA;MAAA,oBAAA;UAAA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA",
        "file": "MultiSelect.vue",
        "sourcesContent": ["<template>\n  <div ref=\"container\" :class=\"containerClass\" @click=\"onClick\">\n    <div class=\"p-hidden-accessible\">\n      <input\n        ref=\"focusInput\"\n        type=\"text\"\n        role=\"listbox\"\n        :id=\"inputId\"\n        readonly\n        :disabled=\"disabled\"\n        @focus=\"onFocus\"\n        @blur=\"onBlur\"\n        @keydown=\"onKeyDown\"\n        :tabindex=\"tabindex\"\n        aria-haspopup=\"listbox\"\n        :aria-expanded=\"overlayVisible\"\n        :aria-labelledby=\"ariaLabelledBy\" />\n    </div>\n    <div class=\"p-multiselect-label-container\">\n      <div :class=\"labelClass\">\n        <slot name=\"value\" :value=\"value\" :placeholder=\"placeholder\">\n          <template v-if=\"display === 'comma'\">\n            {{ label || \"empty\" }}\n          </template>\n          <template v-else-if=\"display === 'chip'\">\n            <div v-for=\"item of value\" class=\"p-multiselect-token\" :key=\"getLabelByValue(item)\">\n              <span class=\"p-multiselect-token-label\">{{ getLabelByValue(item) }}</span>\n              <span\n                v-if=\"!disabled\"\n                class=\"p-multiselect-token-icon pi pi-times-circle\"\n                @click=\"removeChip(item)\"></span>\n            </div>\n            <template v-if=\"!value || value.length === 0\">{{ placeholder || \"empty\" }}</template>\n          </template>\n        </slot>\n      </div>\n    </div>\n    <div class=\"p-multiselect-trigger\">\n      <slot name=\"indicator\">\n        <span class=\"p-multiselect-trigger-icon pi pi-chevron-down\"></span>\n      </slot>\n    </div>\n    <transition name=\"p-connected-overlay\" @enter=\"onOverlayEnter\" @leave=\"onOverlayLeave\">\n      <div ref=\"overlay\" class=\"p-multiselect-panel p-component\" v-if=\"overlayVisible\">\n        <div class=\"p-multiselect-header\" v-if=\"(showToggleAll && selectionLimit == null) || filter\">\n          <div\n            class=\"p-checkbox p-component\"\n            v-if=\"showToggleAll && selectionLimit == null\"\n            @click=\"onToggleAll\"\n            role=\"checkbox\"\n            :aria-checked=\"allSelected\">\n            <div class=\"p-hidden-accessible\">\n              <input type=\"checkbox\" readonly @focus=\"onHeaderCheckboxFocus\" @blur=\"onHeaderCheckboxBlur\" />\n            </div>\n            <div\n              :class=\"['p-checkbox-box', { 'p-highlight': allSelected, 'p-focus': headerCheckboxFocused }]\"\n              role=\"checkbox\"\n              :aria-checked=\"allSelected\">\n              <span :class=\"['p-checkbox-icon', { 'pi pi-check': allSelected }]\"></span>\n            </div>\n          </div>\n          <div v-if=\"filter\" class=\"p-multiselect-filter-container\">\n            <input\n              type=\"text\"\n              ref=\"filterInput\"\n              v-model=\"filterValue\"\n              class=\"p-multiselect-filter p-inputtext p-component\"\n              autoComplete=\"on\"\n              :placeholder=\"filterPlaceholder\"\n              @input=\"onFilterChange\" />\n            <span class=\"p-multiselect-filter-icon pi pi-search\"></span>\n          </div>\n          <button class=\"p-multiselect-close p-link\" @click=\"onCloseClick\" type=\"button\" v-ripple>\n            <span class=\"p-multiselect-close-icon pi pi-times\" />\n          </button>\n        </div>\n        <div ref=\"itemsWrapper\" class=\"p-multiselect-items-wrapper\" :style=\"{ 'max-height': scrollHeight }\">\n          <ul class=\"p-multiselect-items p-component\" role=\"listbox\" aria-multiselectable=\"true\">\n            <li\n              v-for=\"(option, i) of visibleOptions\"\n              :class=\"[\n                'p-multiselect-item',\n                { 'p-highlight': isSelected(option), 'p-disabled': isOptionDisabled(option) },\n              ]\"\n              role=\"option\"\n              :aria-selected=\"isSelected(option)\"\n              :aria-label=\"getOptionLabel(option)\"\n              :key=\"getOptionRenderKey(option)\"\n              @click=\"onOptionSelect($event, option)\"\n              @keydown=\"onOptionKeyDown($event, option)\"\n              :tabindex=\"tabindex || '0'\"\n              v-ripple>\n              <div class=\"p-checkbox p-component\">\n                <div :class=\"['p-checkbox-box', { 'p-highlight': isSelected(option) }]\">\n                  <span :class=\"['p-checkbox-icon', { 'pi pi-check': isSelected(option) }]\"></span>\n                </div>\n              </div>\n              <slot name=\"option\" :option=\"option\" :index=\"i\">\n                <span>{{ getOptionLabel(option) }}</span>\n              </slot>\n            </li>\n            <li\n              v-if=\"filterValue && (!visibleOptions || (visibleOptions && visibleOptions.length === 0))\"\n              class=\"p-multiselect-empty-message\">\n              {{ emptyFilterMessage }}\n            </li>\n          </ul>\n        </div>\n      </div>\n    </transition>\n  </div>\n</template>\n\n<script>\nimport { ConnectedOverlayScrollHandler, ObjectUtils, DomHandler } from 'primevue2/utils'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'MultiSelect',\n  props: {\n    value: null,\n    options: Array,\n    optionLabel: null,\n    optionValue: null,\n    optionDisabled: null,\n    scrollHeight: {\n      type: String,\n      default: '200px'\n    },\n    placeholder: String,\n    disabled: Boolean,\n    filter: Boolean,\n    tabindex: String,\n    inputId: String,\n    dataKey: null,\n    filterPlaceholder: String,\n    filterLocale: String,\n    ariaLabelledBy: null,\n    appendTo: {\n      type: String,\n      default: null\n    },\n    emptyFilterMessage: {\n      type: String,\n      default: 'No results found'\n    },\n    display: {\n      type: String,\n      default: 'comma'\n    },\n    selectionLimit: {\n      type: Number,\n      default: null\n    },\n    showToggleAll: {\n      type: Boolean,\n      default: true\n    }\n  },\n  data() {\n    return {\n      focused: false,\n      headerCheckboxFocused: false,\n      filterValue: null,\n      overlayVisible: false\n    }\n  },\n  outsideClickListener: null,\n  resizeListener: null,\n  scrollHandler: null,\n  updated() {\n    this.onFilterUpdated()\n  },\n  beforeDestroy() {\n    this.restoreAppend()\n    this.unbindOutsideClickListener()\n    this.unbindResizeListener()\n\n    if (this.scrollHandler) {\n      this.scrollHandler.destroy()\n      this.scrollHandler = null\n    }\n  },\n  methods: {\n    getOptionLabel(option) {\n      return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option\n    },\n    getOptionValue(option) {\n      return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option\n    },\n    getOptionRenderKey(option) {\n      return this.dataKey ? ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option)\n    },\n    isOptionDisabled(option) {\n      if (this.maxSelectionLimitReached && !this.isSelected(option)) {\n        return true\n      }\n      return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false\n    },\n    isSelected(option) {\n      let selected = false\n      let optionValue = this.getOptionValue(option)\n\n      if (this.value) {\n        for (let val of this.value) {\n          if (ObjectUtils.equals(val, optionValue, this.equalityKey)) {\n            selected = true\n            break\n          }\n        }\n      }\n\n      return selected\n    },\n    show() {\n      this.$emit('before-show')\n      this.overlayVisible = true\n    },\n    hide() {\n      this.$emit('before-hide')\n      this.overlayVisible = false\n    },\n    onFocus() {\n      this.focused = true\n    },\n    onBlur() {\n      this.focused = false\n    },\n    onHeaderCheckboxFocus() {\n      this.headerCheckboxFocused = true\n    },\n    onHeaderCheckboxBlur() {\n      this.headerCheckboxFocused = false\n    },\n    onClick(event) {\n      if (!this.disabled && (!this.$refs.overlay || !this.$refs.overlay.contains(event.target)) && !DomHandler.hasClass(event.target, 'p-multiselect-close')) {\n        if (this.overlayVisible)\n          this.hide()\n        else\n          this.show()\n\n        this.$refs.focusInput.focus()\n      }\n    },\n    onCloseClick() {\n      this.hide()\n    },\n    onKeyDown(event) {\n      switch (event.which) {\n      //down\n      case 40:\n        if (this.visibleOptions && !this.overlayVisible && event.altKey) {\n          this.show()\n        }\n        break\n\n        //space\n      case 32:\n        if (!this.overlayVisible) {\n          this.show()\n          event.preventDefault()\n        }\n        break\n\n        //enter and escape\n      case 13:\n      case 27:\n        if (this.overlayVisible) {\n          this.hide()\n          event.preventDefault()\n        }\n        break\n\n        //tab\n      case 9:\n        this.hide()\n        break\n\n      default:\n        break\n      }\n    },\n    onOptionSelect(event, option) {\n      if (this.disabled || this.isOptionDisabled(option)) {\n        return\n      }\n\n      let selected = this.isSelected(option)\n      let value = null\n\n      if (selected)\n        value = this.value.filter(val => !ObjectUtils.equals(val, this.getOptionValue(option), this.equalityKey))\n      else\n        value = [...this.value || [], this.getOptionValue(option)]\n\n      this.$emit('input', value)\n      this.$emit('change', { originalEvent: event, value: value })\n    },\n    onOptionKeyDown(event, option) {\n      let listItem = event.target\n\n      switch (event.which) {\n      //down\n      case 40:\n        var nextItem = this.findNextItem(listItem)\n        if (nextItem) {\n          nextItem.focus()\n        }\n\n        event.preventDefault()\n        break\n\n        //up\n      case 38:\n        var prevItem = this.findPrevItem(listItem)\n        if (prevItem) {\n          prevItem.focus()\n        }\n\n        event.preventDefault()\n        break\n\n        //enter\n      case 13:\n        this.onOptionSelect(event, option)\n        event.preventDefault()\n        break\n\n      default:\n        break\n      }\n    },\n    findNextItem(item) {\n      let nextItem = item.nextElementSibling\n\n      if (nextItem)\n        return DomHandler.hasClass(nextItem, 'p-disabled') ? this.findNextItem(nextItem) : nextItem\n      else\n        return null\n    },\n    findPrevItem(item) {\n      let prevItem = item.previousElementSibling\n\n      if (prevItem)\n        return DomHandler.hasClass(prevItem, 'p-disabled') ? this.findPrevItem(prevItem) : prevItem\n      else\n        return null\n    },\n    onOverlayEnter() {\n      this.$refs.overlay.style.zIndex = String(DomHandler.generateZIndex())\n      this.appendContainer()\n      this.alignOverlay()\n      this.bindOutsideClickListener()\n      this.bindScrollListener()\n      this.bindResizeListener()\n      this.$emit('show')\n\n      if (this.filter) {\n        this.$refs.filterInput.focus()\n      }\n    },\n    onOverlayLeave() {\n      this.unbindOutsideClickListener()\n      this.unbindScrollListener()\n      this.unbindResizeListener()\n      this.$emit('hide')\n    },\n    alignOverlay() {\n      if (this.appendTo) {\n        DomHandler.absolutePosition(this.$refs.overlay, this.$refs.container)\n        this.$refs.overlay.style.minWidth = DomHandler.getOuterWidth(this.$refs.container) + 'px'\n      }\n      else {\n        DomHandler.relativePosition(this.$refs.overlay, this.$refs.container)\n      }\n    },\n    bindOutsideClickListener() {\n      if (!this.outsideClickListener) {\n        this.outsideClickListener = (event) => {\n          if (this.overlayVisible && this.isOutsideClicked(event)) {\n            this.hide()\n          }\n        }\n        document.addEventListener('click', this.outsideClickListener)\n      }\n    },\n    unbindOutsideClickListener() {\n      if (this.outsideClickListener) {\n        document.removeEventListener('click', this.outsideClickListener)\n        this.outsideClickListener = null\n      }\n    },\n    bindScrollListener() {\n      if (!this.scrollHandler) {\n        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$el, () => {\n          if (this.overlayVisible) {\n            this.hide()\n          }\n        })\n      }\n\n      this.scrollHandler.bindScrollListener()\n    },\n    unbindScrollListener() {\n      if (this.scrollHandler) {\n        this.scrollHandler.unbindScrollListener()\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          if (this.overlayVisible && !DomHandler.isAndroid()) {\n            this.hide()\n          }\n        }\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    },\n    isOutsideClicked(event) {\n      return !(this.$refs.container.isSameNode(event.target) || this.$refs.container.contains(event.target) || (this.$refs.overlay && this.$refs.overlay.contains(event.target)))\n    },\n    getLabelByValue(val) {\n      let label = null\n\n      if (this.options) {\n        for (let option of this.options) {\n          let optionValue = this.getOptionValue(option)\n\n          if (ObjectUtils.equals(optionValue, val, this.equalityKey)) {\n            label = this.getOptionLabel(option)\n            break\n          }\n        }\n      }\n\n      return label\n    },\n    onToggleAll(event) {\n      const value = this.allSelected ? [] : this.visibleOptions && this.visibleOptions.map(option => this.getOptionValue(option))\n\n      this.$emit('input', value)\n      this.$emit('change', { originalEvent: event, value: value })\n    },\n    appendContainer() {\n      if (this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.appendChild(this.$refs.overlay)\n        else\n          document.getElementById(this.appendTo).appendChild(this.$refs.overlay)\n      }\n    },\n    restoreAppend() {\n      if (this.$refs.overlay && this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.removeChild(this.$refs.overlay)\n        else\n          document.getElementById(this.appendTo).removeChild(this.$refs.overlay)\n      }\n    },\n    onFilterChange(event) {\n      this.$emit('filter', { originalEvent: event, value: event.target.value })\n    },\n    onFilterUpdated() {\n      if (this.overlayVisible) {\n        this.alignOverlay()\n      }\n    },\n    removeChip(item) {\n      let value = this.value.filter(val => !ObjectUtils.equals(val, item, this.equalityKey))\n\n      this.$emit('input', value)\n      this.$emit('change', { originalEvent: event, value: value })\n    }\n  },\n  computed: {\n    visibleOptions() {\n      if (this.filterValue && this.filterValue.trim().length > 0)\n        return this.options.filter(option => this.getOptionLabel(option).toLocaleLowerCase(this.filterLocale).indexOf(this.filterValue.toLocaleLowerCase(this.filterLocale)) > -1)\n      else\n        return this.options\n    },\n    containerClass() {\n      return [\n        'p-multiselect p-component p-inputwrapper',\n        {\n          'p-multiselect-chip': this.display === 'chip',\n          'p-disabled': this.disabled,\n          'p-focus': this.focused,\n          'p-inputwrapper-filled': this.value && this.value.length,\n          'p-inputwrapper-focus': this.focused || this.overlayVisible\n        }\n      ]\n    },\n    labelClass() {\n      return [\n        'p-multiselect-label',\n        {\n          'p-placeholder': this.label === this.placeholder,\n          'p-multiselect-label-empty': !this.placeholder && (!this.value || this.value.length === 0)\n        }\n      ]\n    },\n    label() {\n      let label\n\n      if (this.value && this.value.length) {\n        label = ''\n        for (let i = 0; i < this.value.length; i++) {\n          if (i !== 0) {\n            label += ', '\n          }\n\n          label += this.getLabelByValue(this.value[i])\n        }\n      }\n      else {\n        label = this.placeholder\n      }\n\n      return label\n    },\n    allSelected() {\n      if (this.filterValue && this.filterValue.trim().length > 0) {\n        let allSelected = true\n        if (this.visibleOptions.length > 0) {\n          for (let option of this.visibleOptions) {\n            if (!this.isSelected(option)) {\n              allSelected = false\n              break\n            }\n          }\n        }\n        else\n          allSelected = false\n        return allSelected\n      }\n      else {\n        return this.value && this.options && (this.value.length > 0 && this.value.length === this.options.length)\n      }\n    },\n    equalityKey() {\n      return this.optionValue ? null : this.dataKey\n    },\n    maxSelectionLimitReached() {\n      return this.selectionLimit && (this.value && this.value.length === this.selectionLimit)\n    }\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-multiselect {\n  display: inline-flex;\n  cursor: pointer;\n  position: relative;\n  user-select: none;\n}\n\n.p-multiselect-trigger {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.p-multiselect-label-container {\n  overflow: hidden;\n  flex: 1 1 auto;\n  cursor: pointer;\n}\n\n.p-multiselect-label  {\n  display: block;\n  white-space: nowrap;\n  cursor: pointer;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.p-multiselect-label-empty {\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.p-multiselect-token {\n  cursor: default;\n  display: inline-flex;\n  align-items: center;\n  flex: 0 0 auto;\n}\n\n.p-multiselect-token-icon {\n  cursor: pointer;\n}\n\n.p-multiselect .p-multiselect-panel {\n  min-width: 100%;\n}\n\n.p-multiselect-panel {\n  position: absolute;\n}\n\n.p-multiselect-items-wrapper {\n  overflow: auto;\n}\n\n.p-multiselect-items {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.p-multiselect-item {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-weight: normal;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n}\n\n.p-multiselect-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.p-multiselect-filter-container {\n  position: relative;\n  flex: 1 1 auto;\n}\n\n.p-multiselect-filter-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -.5rem;\n}\n\n.p-multiselect-filter-container .p-inputtext {\n  width: 100%;\n}\n\n.p-multiselect-close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n  margin-left: auto;\n}\n\n.p-fluid .p-multiselect {\n  display: flex;\n}\n</style>\n"]
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
