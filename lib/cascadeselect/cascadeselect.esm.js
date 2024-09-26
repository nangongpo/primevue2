import { ObjectUtils, DomHandler, ConnectedOverlayScrollHandler } from 'primevue2/utils';
import Ripple from 'primevue2/ripple';

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var CascadeSelectOptionTemplate = {
  functional: true,
  props: {
    option: {
      type: null,
      default: null
    },
    template: {
      type: null,
      default: null
    }
  },
  render: function render(createElement, context) {
    var content = context.props.template({
      'option': context.props.option
    });
    return [content];
  }
};
var script$1 = {
  name: 'CascadeSelectSub',
  props: {
    selectionPath: Array,
    level: Number,
    options: Array,
    optionLabel: String,
    optionValue: String,
    optionGroupLabel: String,
    optionGroupChildren: Array,
    parentActive: Boolean,
    dirty: Boolean,
    templates: null,
    root: Boolean
  },
  data: function data() {
    return {
      activeOption: null
    };
  },
  mounted: function mounted() {
    if (this.selectionPath && this.options && !this.dirty) {
      var _iterator = _createForOfIteratorHelper$1(this.options),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          if (this.selectionPath.includes(option)) {
            this.activeOption = option;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (!this.root) {
      this.position();
    }
  },
  watch: {
    parentActive: function parentActive(newValue) {
      if (!newValue) {
        this.activeOption = null;
      }
    }
  },
  methods: {
    onOptionClick: function onOptionClick(event, option) {
      if (this.isOptionGroup(option)) {
        this.activeOption = this.activeOption === option ? null : option;
        this.$emit('optiongroup-select', {
          originalEvent: event,
          value: option
        });
      } else {
        this.$emit('option-select', {
          originalEvent: event,
          value: this.getOptionValue(option)
        });
      }
    },
    onOptionSelect: function onOptionSelect(event) {
      this.$emit('option-select', event);
    },
    onOptionGroupSelect: function onOptionGroupSelect(event) {
      this.$emit('optiongroup-select', event);
    },
    getOptionLabel: function getOptionLabel(option) {
      return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    },
    getOptionValue: function getOptionValue(option) {
      return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    },
    getOptionGroupLabel: function getOptionGroupLabel(optionGroup) {
      return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : null;
    },
    getOptionGroupChildren: function getOptionGroupChildren(optionGroup) {
      return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[this.level]);
    },
    isOptionGroup: function isOptionGroup(option) {
      return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[this.level]);
    },
    getOptionLabelToRender: function getOptionLabelToRender(option) {
      return this.isOptionGroup(option) ? this.getOptionGroupLabel(option) : this.getOptionLabel(option);
    },
    getItemClass: function getItemClass(option) {
      return ['p-cascadeselect-item', {
        'p-cascadeselect-item-group': this.isOptionGroup(option),
        'p-cascadeselect-item-active p-highlight': this.isOptionActive(option)
      }];
    },
    isOptionActive: function isOptionActive(option) {
      return this.activeOption === option;
    },
    onKeyDown: function onKeyDown(event, option, index) {
      switch (event.key) {
        case 'Down':
        case 'ArrowDown':
          var nextItem = this.$el.children[index + 1];
          if (nextItem) {
            nextItem.children[0].focus();
          }
          break;
        case 'Up':
        case 'ArrowUp':
          var prevItem = this.$el.children[index - 1];
          if (prevItem) {
            prevItem.children[0].focus();
          }
          break;
        case 'Right':
        case 'ArrowRight':
          if (this.isOptionGroup(option)) {
            if (this.isOptionActive(option)) {
              event.currentTarget.nextElementSibling.children[0].children[0].focus();
            } else {
              this.activeOption = option;
            }
          }
          break;
        case 'Left':
        case 'ArrowLeft':
          this.activeOption = null;
          var parentList = event.currentTarget.parentElement.parentElement.previousElementSibling;
          if (parentList) {
            parentList.focus();
          }
          break;
        case 'Enter':
          this.onOptionClick(event, option);
          break;
      }
      event.preventDefault();
    },
    position: function position() {
      var parentItem = this.$el.parentElement;
      var containerOffset = DomHandler.getOffset(parentItem);
      var viewport = DomHandler.getViewport();
      var sublistWidth = this.$el.offsetParent ? this.$el.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.$el);
      var itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);
      if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - DomHandler.calculateScrollbarWidth()) {
        this.$el.style.left = '-100%';
      }
    }
  },
  directives: {
    'ripple': Ripple
  },
  components: {
    CascadeSelectOptionTemplate: CascadeSelectOptionTemplate
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

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("ul", {
    staticClass: "p-cascadeselect-panel p-cascadeselect-items",
    attrs: {
      role: "listbox",
      "aria-orientation": "horizontal"
    }
  }, [_vm._l(_vm.options, function (option, i) {
    return [_c("li", {
      key: _vm.getOptionLabelToRender(option),
      class: _vm.getItemClass(option),
      attrs: {
        role: "none"
      }
    }, [_c("div", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      staticClass: "p-cascadeselect-item-content",
      attrs: {
        tabindex: "0"
      },
      on: {
        click: function click($event) {
          return _vm.onOptionClick($event, option);
        },
        keydown: function keydown($event) {
          return _vm.onKeyDown($event, option, i);
        }
      }
    }, [_vm.templates["option"] ? _c("CascadeSelectOptionTemplate", {
      attrs: {
        option: option,
        template: _vm.templates["option"]
      }
    }) : [_c("span", {
      staticClass: "p-cascadeselect-item-text"
    }, [_vm._v(_vm._s(_vm.getOptionLabelToRender(option)))])], _vm._v(" "), _vm.isOptionGroup(option) ? _c("span", {
      staticClass: "p-cascadeselect-group-icon pi pi-angle-right"
    }) : _vm._e()], 2), _vm._v(" "), _vm.isOptionGroup(option) && _vm.isOptionActive(option) ? _c("cascadeselect-sub", {
      staticClass: "p-cascadeselect-sublist",
      attrs: {
        selectionPath: _vm.selectionPath,
        options: _vm.getOptionGroupChildren(option),
        optionLabel: _vm.optionLabel,
        optionValue: _vm.optionValue,
        level: _vm.level + 1,
        optionGroupLabel: _vm.optionGroupLabel,
        optionGroupChildren: _vm.optionGroupChildren,
        parentActive: _vm.isOptionActive(option),
        dirty: _vm.dirty,
        templates: _vm.templates
      },
      on: {
        "option-select": _vm.onOptionSelect,
        "optiongroup-select": _vm.onOptionGroupSelect
      }
    }) : _vm._e()], 1)];
  })], 2);
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

/* style */
var __vue_inject_styles__$1 = undefined;
/* scoped */
var __vue_scope_id__$1 = undefined;
/* module identifier */
var __vue_module_identifier__$1 = undefined;
/* functional template */
var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var script = {
  name: 'CascadeSelect',
  data: function data() {
    return {
      selectionPath: null,
      focused: false,
      overlayVisible: false,
      dirty: false
    };
  },
  props: {
    value: null,
    options: Array,
    optionLabel: String,
    optionValue: String,
    optionGroupLabel: String,
    optionGroupChildren: Array,
    placeholder: String,
    disabled: Boolean,
    dataKey: null,
    inputId: String,
    tabindex: String,
    ariaLabelledBy: null,
    appendTo: {
      type: String,
      default: null
    }
  },
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  overlay: null,
  beforeDestroy: function beforeDestroy() {
    this.restoreAppend();
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.$refs.overlay = null;
  },
  mounted: function mounted() {
    this.updateSelectionPath();
  },
  watch: {
    value: function value() {
      this.updateSelectionPath();
    }
  },
  methods: {
    onOptionSelect: function onOptionSelect(event) {
      this.$emit('input', event.value);
      this.$emit('change', event);
      this.hide();
      this.$refs.focusInput.focus();
    },
    onOptionGroupSelect: function onOptionGroupSelect(event) {
      this.dirty = true;
      this.$emit('group-change', event);
    },
    getOptionLabel: function getOptionLabel(option) {
      return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    },
    getOptionValue: function getOptionValue(option) {
      return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    },
    getOptionGroupChildren: function getOptionGroupChildren(optionGroup, level) {
      return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[level]);
    },
    isOptionGroup: function isOptionGroup(option, level) {
      return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[level]);
    },
    updateSelectionPath: function updateSelectionPath() {
      var path;
      if (this.value != null && this.options) {
        var _iterator = _createForOfIteratorHelper(this.options),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var option = _step.value;
            path = this.findModelOptionInGroup(option, 0);
            if (path) {
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      this.selectionPath = path;
    },
    findModelOptionInGroup: function findModelOptionInGroup(option, level) {
      if (this.isOptionGroup(option, level)) {
        var selectedOption;
        var _iterator2 = _createForOfIteratorHelper(this.getOptionGroupChildren(option, level)),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var childOption = _step2.value;
            selectedOption = this.findModelOptionInGroup(childOption, level + 1);
            if (selectedOption) {
              selectedOption.unshift(option);
              return selectedOption;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else if (ObjectUtils.equals(this.value, this.getOptionValue(option), this.dataKey)) {
        return [option];
      }
      return null;
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
    onClick: function onClick(event) {
      if (this.disabled) {
        return;
      }
      if (!this.$refs.overlay || !this.$refs.overlay.contains(event.target)) {
        if (this.overlayVisible) this.hide();else this.show();
        this.$refs.focusInput.focus();
      }
    },
    onOverlayEnter: function onOverlayEnter() {
      this.$refs.overlay.style.zIndex = String(DomHandler.generateZIndex());
      this.appendContainer();
      this.alignOverlay();
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$emit('show');
    },
    onOverlayLeave: function onOverlayLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit('hide');
      this.$refs.overlay = null;
      this.dirty = false;
    },
    alignOverlay: function alignOverlay() {
      if (this.appendTo) {
        DomHandler.absolutePosition(this.$refs.overlay, this.$el);
        this.$refs.overlay.style.minWidth = DomHandler.getOuterWidth(this.$el) + 'px';
      } else {
        DomHandler.relativePosition(this.$refs.overlay, this.$el);
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function (event) {
          if (_this.overlayVisible && _this.$refs.overlay && !_this.$el.contains(event.target) && !_this.$refs.overlay.contains(event.target)) {
            _this.hide();
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
      var _this2 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, function () {
          if (_this2.overlayVisible) {
            _this2.hide();
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
            _this3.hide();
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
    overlayRef: function overlayRef(el) {
      this.$refs.overlay = el;
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
    onKeyDown: function onKeyDown(event) {
      switch (event.key) {
        case 'Down':
        case 'ArrowDown':
          if (this.overlayVisible) {
            DomHandler.findSingle(this.$refs.overlay, '.p-cascadeselect-item').children[0].focus();
          } else if (event.altKey && this.options && this.options.length) {
            this.show();
          }
          event.preventDefault();
          break;
        case 'Escape':
          if (this.overlayVisible) {
            this.hide();
            event.preventDefault();
          }
          break;
        case 'Tab':
          this.hide();
          break;
      }
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-cascadeselect p-component p-inputwrapper', {
        'p-disabled': this.disabled,
        'p-focus': this.focused,
        'p-inputwrapper-filled': this.value,
        'p-inputwrapper-focus': this.focused || this.overlayVisible
      }];
    },
    labelClass: function labelClass() {
      return ['p-cascadeselect-label', {
        'p-placeholder': this.label === this.placeholder,
        'p-cascadeselect-label-empty': !this.$slots['value'] && (this.label === 'p-emptylabel' || this.label.length === 0)
      }];
    },
    label: function label() {
      if (this.selectionPath) return this.getOptionLabel(this.selectionPath[this.selectionPath.length - 1]);else return this.placeholder || 'p-emptylabel';
    }
  },
  components: {
    'CascadeSelectSub': __vue_component__$1
  }
};

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
  })]), _vm._v(" "), _c("span", {
    class: _vm.labelClass
  }, [_vm._t("value", function () {
    return [_vm._v("\n        " + _vm._s(_vm.label) + "\n      ")];
  }, {
    value: _vm.value,
    placeholder: _vm.placeholder
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "p-cascadeselect-trigger",
    attrs: {
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": _vm.overlayVisible
    }
  }, [_vm._t("indicator", function () {
    return [_c("span", {
      staticClass: "p-cascadeselect-trigger-icon pi pi-chevron-down"
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
    staticClass: "p-cascadeselect-panel p-component"
  }, [_c("div", {
    staticClass: "p-cascadeselect-items-wrapper"
  }, [_c("CascadeSelectSub", {
    staticClass: "p-cascadeselect-items",
    attrs: {
      options: _vm.options,
      selectionPath: _vm.selectionPath,
      optionLabel: _vm.optionLabel,
      optionValue: _vm.optionValue,
      level: 0,
      templates: _vm.$scopedSlots,
      optionGroupLabel: _vm.optionGroupLabel,
      optionGroupChildren: _vm.optionGroupChildren,
      dirty: _vm.dirty,
      root: true
    },
    on: {
      "option-select": _vm.onOptionSelect,
      "optiongroup-select": _vm.onOptionGroupSelect
    }
  })], 1)]) : _vm._e()])], 1);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-94bc6942_0", {
    source: "\n.p-cascadeselect {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  cursor: pointer;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-cascadeselect-trigger {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n.p-cascadeselect-label {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  width: 1%;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n.p-cascadeselect-label-empty {\n  overflow: hidden;\n  visibility: hidden;\n}\n.p-cascadeselect .p-cascadeselect-panel {\n  min-width: 100%;\n}\n.p-cascadeselect-panel {\n  position: absolute;\n}\n.p-cascadeselect-item {\n  cursor: pointer;\n  font-weight: normal;\n  white-space: nowrap;\n}\n.p-cascadeselect-item-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n  position: relative;\n}\n.p-cascadeselect-group-icon {\n  margin-left: auto;\n}\n.p-cascadeselect-items {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.p-fluid .p-cascadeselect {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.p-fluid .p-cascadeselect .p-cascadeselect-label {\n  width: 1%;\n}\n.p-cascadeselect-sublist {\n  position: absolute;\n  min-width: 100%;\n  z-index: 1;\n  display: none;\n}\n.p-cascadeselect-item-active {\n  overflow: visible !important;\n}\n.p-cascadeselect-item-active > .p-cascadeselect-sublist {\n  display: block;\n  left: 100%;\n  top: 0;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/cascadeselect/CascadeSelect.vue"],
      "names": [],
      "mappings": ";AA4UA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AACA;AACA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,sBAAA;MAAA,oBAAA;UAAA,cAAA;AACA;AACA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;EACA,SAAA;EACA,uBAAA;EACA,eAAA;AACA;AACA;EACA,gBAAA;EACA,kBAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,eAAA;EACA,mBAAA;EACA,mBAAA;AACA;AACA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;AACA;AACA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA;AACA;EACA,SAAA;AACA;AACA;EACA,kBAAA;EACA,eAAA;EACA,UAAA;EACA,aAAA;AACA;AACA;EACA,4BAAA;AACA;AACA;EACA,cAAA;EACA,UAAA;EACA,MAAA;AACA",
      "file": "CascadeSelect.vue",
      "sourcesContent": ["<template>\n  <div ref=\"container\" :class=\"containerClass\" @click=\"onClick($event)\">\n    <div class=\"p-hidden-accessible\">\n      <input\n        ref=\"focusInput\"\n        type=\"text\"\n        :id=\"inputId\"\n        readonly\n        :disabled=\"disabled\"\n        @focus=\"onFocus\"\n        @blur=\"onBlur\"\n        @keydown=\"onKeyDown\"\n        :tabindex=\"tabindex\"\n        aria-haspopup=\"listbox\"\n        :aria-expanded=\"overlayVisible\"\n        :aria-labelledby=\"ariaLabelledBy\" />\n    </div>\n    <span :class=\"labelClass\">\n      <slot name=\"value\" :value=\"value\" :placeholder=\"placeholder\">\n        {{ label }}\n      </slot>\n    </span>\n    <div class=\"p-cascadeselect-trigger\" role=\"button\" aria-haspopup=\"listbox\" :aria-expanded=\"overlayVisible\">\n      <slot name=\"indicator\">\n        <span class=\"p-cascadeselect-trigger-icon pi pi-chevron-down\"></span>\n      </slot>\n    </div>\n    <transition name=\"p-connected-overlay\" @enter=\"onOverlayEnter\" @leave=\"onOverlayLeave\">\n      <div ref=\"overlay\" class=\"p-cascadeselect-panel p-component\" v-if=\"overlayVisible\">\n        <div class=\"p-cascadeselect-items-wrapper\">\n          <CascadeSelectSub\n            :options=\"options\"\n            :selectionPath=\"selectionPath\"\n            class=\"p-cascadeselect-items\"\n            :optionLabel=\"optionLabel\"\n            :optionValue=\"optionValue\"\n            :level=\"0\"\n            :templates=\"$scopedSlots\"\n            :optionGroupLabel=\"optionGroupLabel\"\n            :optionGroupChildren=\"optionGroupChildren\"\n            @option-select=\"onOptionSelect\"\n            @optiongroup-select=\"onOptionGroupSelect\"\n            :dirty=\"dirty\"\n            :root=\"true\" />\n        </div>\n      </div>\n    </transition>\n  </div>\n</template>\n\n<script>\nimport { ConnectedOverlayScrollHandler, ObjectUtils, DomHandler } from 'primevue2/utils'\nimport CascadeSelectSub from './CascadeSelectSub.vue'\n\nexport default {\n  name: 'CascadeSelect',\n  data() {\n    return {\n      selectionPath: null,\n      focused: false,\n      overlayVisible: false,\n      dirty: false\n    }\n  },\n  props: {\n    value: null,\n    options: Array,\n    optionLabel: String,\n    optionValue: String,\n    optionGroupLabel: String,\n    optionGroupChildren: Array,\n    placeholder: String,\n    disabled: Boolean,\n    dataKey: null,\n    inputId: String,\n    tabindex: String,\n    ariaLabelledBy: null,\n    appendTo: {\n      type: String,\n      default: null\n    }\n  },\n  outsideClickListener: null,\n  scrollHandler: null,\n  resizeListener: null,\n  overlay: null,\n  beforeDestroy() {\n    this.restoreAppend()\n    this.unbindOutsideClickListener()\n    this.unbindResizeListener()\n    if (this.scrollHandler) {\n      this.scrollHandler.destroy()\n      this.scrollHandler = null\n    }\n    this.$refs.overlay = null\n  },\n  mounted() {\n    this.updateSelectionPath()\n  },\n  watch: {\n    value() {\n      this.updateSelectionPath()\n    }\n  },\n  methods: {\n    onOptionSelect(event) {\n      this.$emit('input', event.value)\n      this.$emit('change', event)\n      this.hide()\n      this.$refs.focusInput.focus()\n    },\n    onOptionGroupSelect(event) {\n      this.dirty = true\n      this.$emit('group-change', event)\n    },\n    getOptionLabel(option) {\n      return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option\n    },\n    getOptionValue(option) {\n      return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option\n    },\n    getOptionGroupChildren(optionGroup, level) {\n      return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[level])\n    },\n    isOptionGroup(option, level) {\n      return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[level])\n    },\n    updateSelectionPath() {\n      let path\n      if (this.value != null && this.options) {\n        for (let option of this.options) {\n          path = this.findModelOptionInGroup(option, 0)\n          if (path) {\n            break\n          }\n        }\n      }\n      this.selectionPath = path\n    },\n    findModelOptionInGroup(option, level) {\n      if (this.isOptionGroup(option, level)) {\n        let selectedOption\n        for (let childOption of this.getOptionGroupChildren(option, level)) {\n          selectedOption = this.findModelOptionInGroup(childOption, level + 1)\n          if (selectedOption) {\n            selectedOption.unshift(option)\n            return selectedOption\n          }\n        }\n      }\n      else if ((ObjectUtils.equals(this.value, this.getOptionValue(option), this.dataKey))) {\n        return [option]\n      }\n\n      return null\n    },\n    show() {\n      this.$emit('before-show')\n      this.overlayVisible = true\n    },\n    hide() {\n      this.$emit('before-hide')\n      this.overlayVisible = false\n    },\n    onFocus() {\n      this.focused = true\n    },\n    onBlur() {\n      this.focused = false\n    },\n    onClick(event) {\n      if (this.disabled) {\n        return\n      }\n      if (!this.$refs.overlay || !this.$refs.overlay.contains(event.target)) {\n        if (this.overlayVisible)\n          this.hide()\n        else\n          this.show()\n        this.$refs.focusInput.focus()\n      }\n    },\n    onOverlayEnter() {\n      this.$refs.overlay.style.zIndex = String(DomHandler.generateZIndex())\n      this.appendContainer()\n      this.alignOverlay()\n      this.bindOutsideClickListener()\n      this.bindScrollListener()\n      this.bindResizeListener()\n      this.$emit('show')\n    },\n    onOverlayLeave() {\n      this.unbindOutsideClickListener()\n      this.unbindScrollListener()\n      this.unbindResizeListener()\n      this.$emit('hide')\n      this.$refs.overlay = null\n      this.dirty = false\n    },\n    alignOverlay() {\n      if (this.appendTo) {\n        DomHandler.absolutePosition(this.$refs.overlay, this.$el)\n        this.$refs.overlay.style.minWidth = DomHandler.getOuterWidth(this.$el) + 'px'\n      } else {\n        DomHandler.relativePosition(this.$refs.overlay, this.$el)\n      }\n    },\n    bindOutsideClickListener() {\n      if (!this.outsideClickListener) {\n        this.outsideClickListener = (event) => {\n          if (this.overlayVisible && this.$refs.overlay && !this.$el.contains(event.target) && !this.$refs.overlay.contains(event.target)) {\n            this.hide()\n          }\n        }\n        document.addEventListener('click', this.outsideClickListener)\n      }\n    },\n    unbindOutsideClickListener() {\n      if (this.outsideClickListener) {\n        document.removeEventListener('click', this.outsideClickListener)\n        this.outsideClickListener = null\n      }\n    },\n    bindScrollListener() {\n      if (!this.scrollHandler) {\n        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, () => {\n          if (this.overlayVisible) {\n            this.hide()\n          }\n        })\n      }\n      this.scrollHandler.bindScrollListener()\n    },\n    unbindScrollListener() {\n      if (this.scrollHandler) {\n        this.scrollHandler.unbindScrollListener()\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          if (this.overlayVisible) {\n            this.hide()\n          }\n        }\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    },\n    overlayRef(el) {\n      this.$refs.overlay = el\n    },\n    appendContainer() {\n      if (this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.appendChild(this.$refs.overlay)\n        else\n          document.getElementById(this.appendTo).appendChild(this.$refs.overlay)\n      }\n    },\n    restoreAppend() {\n      if (this.$refs.overlay && this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.removeChild(this.$refs.overlay)\n        else\n          document.getElementById(this.appendTo).removeChild(this.$refs.overlay)\n      }\n    },\n    onKeyDown(event) {\n      switch (event.key) {\n      case 'Down':\n      case 'ArrowDown':\n        if (this.overlayVisible) {\n          DomHandler.findSingle(this.$refs.overlay, '.p-cascadeselect-item').children[0].focus()\n        }\n        else if (event.altKey && this.options && this.options.length) {\n          this.show()\n        }\n        event.preventDefault()\n        break\n      case 'Escape':\n        if (this.overlayVisible) {\n          this.hide()\n          event.preventDefault()\n        }\n        break\n      case 'Tab':\n        this.hide()\n        break\n      }\n    }\n  },\n  computed: {\n    containerClass() {\n      return [\n        'p-cascadeselect p-component p-inputwrapper',\n        {\n          'p-disabled': this.disabled,\n          'p-focus': this.focused,\n          'p-inputwrapper-filled': this.value,\n          'p-inputwrapper-focus': this.focused || this.overlayVisible\n        }\n      ]\n    },\n    labelClass() {\n      return [\n        'p-cascadeselect-label',\n        {\n          'p-placeholder': this.label === this.placeholder,\n          'p-cascadeselect-label-empty': !this.$slots['value'] && (this.label === 'p-emptylabel' || this.label.length === 0)\n        }\n      ]\n    },\n    label() {\n      if (this.selectionPath)\n        return this.getOptionLabel(this.selectionPath[this.selectionPath.length - 1])\n      else\n        return this.placeholder || 'p-emptylabel'\n    }\n  },\n  components: {\n    'CascadeSelectSub': CascadeSelectSub\n  }\n}\n</script>\n\n<style>\n.p-cascadeselect {\n  display: inline-flex;\n  cursor: pointer;\n  position: relative;\n  user-select: none;\n}\n.p-cascadeselect-trigger {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.p-cascadeselect-label {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  flex: 1 1 auto;\n  width: 1%;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n.p-cascadeselect-label-empty {\n  overflow: hidden;\n  visibility: hidden;\n}\n.p-cascadeselect .p-cascadeselect-panel {\n  min-width: 100%;\n}\n.p-cascadeselect-panel {\n  position: absolute;\n}\n.p-cascadeselect-item {\n  cursor: pointer;\n  font-weight: normal;\n  white-space: nowrap;\n}\n.p-cascadeselect-item-content {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  position: relative;\n}\n.p-cascadeselect-group-icon {\n  margin-left: auto;\n}\n.p-cascadeselect-items {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.p-fluid .p-cascadeselect {\n  display: flex;\n}\n.p-fluid .p-cascadeselect .p-cascadeselect-label {\n  width: 1%;\n}\n.p-cascadeselect-sublist {\n  position: absolute;\n  min-width: 100%;\n  z-index: 1;\n  display: none;\n}\n.p-cascadeselect-item-active {\n  overflow: visible !important;\n}\n.p-cascadeselect-item-active > .p-cascadeselect-sublist {\n  display: block;\n  left: 100%;\n  top: 0;\n}\n</style>\n"]
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

export { __vue_component__ as default };
