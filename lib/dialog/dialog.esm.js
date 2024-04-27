import { DomHandler, UniqueComponentId } from 'primevue2/utils';
import Ripple from 'primevue2/ripple';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var script = {
  name: 'Dialog',
  inheritAttrs: false,
  props: {
    header: null,
    footer: null,
    visible: Boolean,
    modal: Boolean,
    containerStyle: null,
    contentStyle: null,
    rtl: Boolean,
    maximizable: Boolean,
    dismissableMask: Boolean,
    closable: {
      type: Boolean,
      default: true
    },
    closeOnEscape: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    autoZIndex: {
      type: Boolean,
      default: true
    },
    ariaCloseLabel: {
      type: String,
      default: 'close'
    },
    position: {
      type: String,
      default: 'center'
    },
    appendTo: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      dialogClasses: null,
      dialogStyles: null,
      maskVisible: this.visible,
      maximized: false
    };
  },
  documentKeydownListener: null,
  updated: function updated() {
    if (this.visible && !this.maskVisible) {
      this.maskVisible = true;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.restoreAppend();
    this.disableDocumentSettings();
  },
  methods: {
    close: function close() {
      this.$emit('update:visible', false);
    },
    onBeforeEnter: function onBeforeEnter(el) {
      if (this.autoZIndex) {
        el.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
      }
    },
    onEnter: function onEnter() {
      this.$refs.mask.style.zIndex = String(parseInt(this.$refs.dialog.style.zIndex, 10) - 1);
      this.removeStylesFromMask();
      this.appendContainer();
      this.alignOverlay();
      this.$emit('show');
      this.focus();
      this.enableDocumentSettings();
    },
    onBeforeLeave: function onBeforeLeave() {
      if (this.modal) {
        DomHandler.addClass(this.$refs.mask, 'p-component-overlay-leave');
      }
    },
    onLeave: function onLeave() {
      this.$emit('hide');
    },
    onAfterLeave: function onAfterLeave() {
      this.maskVisible = false;
      this.disableDocumentSettings();
    },
    onAppear: function onAppear() {
      if (this.visible) {
        this.onEnter();
      }
    },
    onMaskClick: function onMaskClick(event) {
      if (this.dismissableMask && this.closable && this.modal && this.$refs.mask === event.target) {
        this.close();
      }
    },
    focus: function focus() {
      var focusTarget = this.$refs.dialog.querySelector('[autofocus]');
      if (focusTarget) {
        focusTarget.focus();
      }
    },
    maximize: function maximize() {
      this.maximized = !this.maximized;
      if (!this.modal) {
        if (this.maximized) DomHandler.addClass(document.body, 'p-overflow-hidden');else DomHandler.removeClass(document.body, 'p-overflow-hidden');
      }
    },
    enableDocumentSettings: function enableDocumentSettings() {
      if (this.modal) {
        DomHandler.addClass(document.body, 'p-overflow-hidden');
        this.bindDocumentKeydownListener();
      } else if (this.maximizable && this.maximized) {
        DomHandler.addClass(document.body, 'p-overflow-hidden');
      }
    },
    disableDocumentSettings: function disableDocumentSettings() {
      if (this.modal) {
        DomHandler.removeClass(document.body, 'p-overflow-hidden');
        this.unbindDocumentKeydownListener();
      } else if (this.maximizable && this.maximized) {
        DomHandler.removeClass(document.body, 'p-overflow-hidden');
      }
    },
    onKeyDown: function onKeyDown(event) {
      if (event.which === 9) {
        event.preventDefault();
        var focusableElements = DomHandler.getFocusableElements(this.$refs.dialog);
        if (focusableElements && focusableElements.length > 0) {
          if (!document.activeElement) {
            focusableElements[0].focus();
          } else {
            var focusedIndex = focusableElements.indexOf(document.activeElement);
            if (event.shiftKey) {
              if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
            } else {
              if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
            }
          }
        }
      } else if (event.which === 27 && this.closeOnEscape) {
        this.close();
      }
    },
    bindDocumentKeydownListener: function bindDocumentKeydownListener() {
      if (!this.documentKeydownListener) {
        this.documentKeydownListener = this.onKeyDown.bind(this);
        window.document.addEventListener('keydown', this.documentKeydownListener);
      }
    },
    unbindDocumentKeydownListener: function unbindDocumentKeydownListener() {
      if (this.documentKeydownListener) {
        window.document.removeEventListener('keydown', this.documentKeydownListener);
        this.documentKeydownListener = null;
      }
    },
    getPositionClass: function getPositionClass() {
      var _this = this;
      var positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
      var pos = positions.find(function (item) {
        return item === _this.position;
      });
      return pos ? "p-dialog-".concat(pos) : '';
    },
    removeStylesFromMask: function removeStylesFromMask() {
      var _this2 = this;
      if (this.$refs.mask) {
        this.dialogStyles = this.$vnode.data.style || this.containerStyle;
        if (this.dialogStyles) {
          Object.keys(this.dialogStyles).forEach(function (key) {
            _this2.$refs.mask.style[key] = '';
          });
        }
        this.dialogClasses = this.$vnode.data.class || this.$vnode.data.staticClass;
      }
    },
    alignOverlay: function alignOverlay() {
      if (this.appendTo) {
        DomHandler.absolutePosition(this.$refs.dialog, this.$refs.mask);
        this.$refs.dialog.style.minWidth = DomHandler.getOuterWidth(this.$refs.mask) + 'px';
      } else {
        DomHandler.relativePosition(this.$refs.dialog, this.$refs.mask);
      }
    },
    appendContainer: function appendContainer() {
      if (this.appendTo) {
        if (this.appendTo === 'body') document.body.appendChild(this.$refs.dialog);else document.getElementById(this.appendTo).appendChild(this.$refs.dialog);
      }
    },
    restoreAppend: function restoreAppend() {
      if (this.$refs.overlay && this.appendTo) {
        if (this.appendTo === 'body') document.body.removeChild(this.$refs.dialog);else document.getElementById(this.appendTo).removeChild(this.$refs.dialog);
      }
    }
  },
  computed: {
    listeners: function listeners() {
      return _objectSpread({}, this.$listeners);
    },
    maskClass: function maskClass() {
      return ['p-dialog-mask', {
        'p-component-overlay p-component-overlay-enter': this.modal
      }, this.getPositionClass()];
    },
    dialogClass: function dialogClass() {
      return ['p-dialog p-component', {
        'p-dialog-rtl': this.rtl,
        'p-dialog-maximized': this.maximizable && this.maximized
      }, this.dialogClasses];
    },
    maximizeIconClass: function maximizeIconClass() {
      return ['p-dialog-header-maximize-icon pi', {
        'pi-window-maximize': !this.maximized,
        'pi-window-minimize': this.maximized
      }];
    },
    dialogStyle: function dialogStyle() {
      return this.dialogStyles || this.containerStyle;
    },
    ariaId: function ariaId() {
      return UniqueComponentId();
    },
    ariaLabelledById: function ariaLabelledById() {
      return this.header != null ? this.ariaId + '_header' : null;
    }
  },
  directives: {
    'ripple': Ripple
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
  return _vm.maskVisible ? _c("div", {
    ref: "mask",
    class: _vm.maskClass,
    on: {
      click: _vm.onMaskClick
    }
  }, [_c("transition", {
    attrs: {
      name: "p-dialog"
    },
    on: {
      "before-enter": _vm.onBeforeEnter,
      enter: _vm.onEnter,
      "before-leave": _vm.onBeforeLeave,
      leave: _vm.onLeave,
      "after-leave": _vm.onAfterLeave,
      appear: _vm.onAppear
    }
  }, [_vm.visible ? _c("div", _vm._g(_vm._b({
    ref: "dialog",
    class: _vm.dialogClass,
    style: _vm.dialogStyle,
    attrs: {
      role: "dialog",
      "aria-labelledby": _vm.ariaLabelledById,
      "aria-modal": _vm.modal
    }
  }, "div", _vm.$attrs, false), _vm.listeners), [_vm.showHeader ? _c("div", {
    staticClass: "p-dialog-header"
  }, [_vm._t("header", function () {
    return [_vm.header ? _c("span", {
      staticClass: "p-dialog-title",
      attrs: {
        id: _vm.ariaLabelledById
      }
    }, [_vm._v(_vm._s(_vm.header))]) : _vm._e()];
  }), _vm._v(" "), _c("div", {
    staticClass: "p-dialog-header-icons"
  }, [_vm.maximizable ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-dialog-header-icon p-dialog-header-maximize p-link",
    attrs: {
      type: "button",
      tabindex: "-1"
    },
    on: {
      click: _vm.maximize
    }
  }, [_c("span", {
    class: _vm.maximizeIconClass
  })]) : _vm._e(), _vm._v(" "), _vm.closable ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-dialog-header-icon p-dialog-header-close p-link",
    attrs: {
      "aria-label": _vm.ariaCloseLabel,
      type: "button"
    },
    on: {
      click: _vm.close
    }
  }, [_c("span", {
    staticClass: "p-dialog-header-close-icon pi pi-times"
  })]) : _vm._e()])], 2) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "p-dialog-content",
    style: _vm.contentStyle
  }, [_vm._t("default")], 2), _vm._v(" "), _vm.footer || _vm.$slots.footer ? _c("div", {
    staticClass: "p-dialog-footer"
  }, [_vm._t("footer", function () {
    return [_vm._v(_vm._s(_vm.footer))];
  })], 2) : _vm._e()]) : _vm._e()])], 1) : _vm._e();
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-de0745e8_0", {
    source: "\n.p-dialog-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  pointer-events: none;\n}\n.p-dialog-mask.p-component-overlay {\n  pointer-events: auto;\n}\n.p-dialog {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  pointer-events: auto;\n  max-height: 90%;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.p-dialog-content {\n  overflow-y: auto;\n}\n.p-dialog-header {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n.p-dialog-footer {\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n.p-dialog .p-dialog-header-icons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-dialog .p-dialog-header-icon {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Fluid */\n.p-fluid .p-dialog-footer .p-button {\n  width: auto;\n}\n\n/* Animation */\n/* Center */\n.p-dialog-enter-active {\n  -webkit-transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n  transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n.p-dialog-leave-active {\n  -webkit-transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.p-dialog-enter,\n.p-dialog-leave-to {\n  opacity: 0;\n  -webkit-transform: scale(0.7);\n          transform: scale(0.7);\n}\n\n/* Top, Bottom, Left, Right, Top* and Bottom* */\n.p-dialog-top .p-dialog,\n.p-dialog-bottom .p-dialog,\n.p-dialog-left .p-dialog,\n.p-dialog-right .p-dialog,\n.p-dialog-topleft .p-dialog,\n.p-dialog-topright .p-dialog,\n.p-dialog-bottomleft .p-dialog,\n.p-dialog-bottomright .p-dialog {\n  margin: 0.75rem;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.p-dialog-top .p-dialog-enter-active,\n.p-dialog-top .p-dialog-leave-active,\n.p-dialog-bottom .p-dialog-enter-active,\n.p-dialog-bottom .p-dialog-leave-active,\n.p-dialog-left .p-dialog-enter-active,\n.p-dialog-left .p-dialog-leave-active,\n.p-dialog-right .p-dialog-enter-active,\n.p-dialog-right .p-dialog-leave-active,\n.p-dialog-topleft .p-dialog-enter-active,\n.p-dialog-topleft .p-dialog-leave-active,\n.p-dialog-topright .p-dialog-enter-active,\n.p-dialog-topright .p-dialog-leave-active,\n.p-dialog-bottomleft .p-dialog-enter-active,\n.p-dialog-bottomleft .p-dialog-leave-active,\n.p-dialog-bottomright .p-dialog-enter-active,\n.p-dialog-bottomright .p-dialog-leave-active {\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n.p-dialog-top .p-dialog-enter,\n.p-dialog-top .p-dialog-leave-to {\n  -webkit-transform: translate3d(0px, -100%, 0px);\n          transform: translate3d(0px, -100%, 0px);\n}\n.p-dialog-bottom .p-dialog-enter,\n.p-dialog-bottom .p-dialog-leave-to {\n  -webkit-transform: translate3d(0px, 100%, 0px);\n          transform: translate3d(0px, 100%, 0px);\n}\n.p-dialog-left .p-dialog-enter,\n.p-dialog-left .p-dialog-leave-to,\n.p-dialog-topleft .p-dialog-enter,\n.p-dialog-topleft .p-dialog-leave-to,\n.p-dialog-bottomleft .p-dialog-enter,\n.p-dialog-bottomleft .p-dialog-leave-to {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n}\n.p-dialog-right .p-dialog-enter,\n.p-dialog-right .p-dialog-leave-to,\n.p-dialog-topright .p-dialog-enter,\n.p-dialog-topright .p-dialog-leave-to,\n.p-dialog-bottomright .p-dialog-enter,\n.p-dialog-bottomright .p-dialog-leave-to {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n}\n\n/* Maximize */\n.p-dialog-maximized {\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: none;\n          transform: none;\n  width: 100vw !important;\n  max-height: 100%;\n  height: 100%;\n}\n.p-dialog-maximized .p-dialog-content {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n/* Position */\n.p-dialog-left {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.p-dialog-right {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.p-dialog-top {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.p-dialog-topleft {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.p-dialog-topright {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.p-dialog-bottom {\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.p-dialog-bottomleft {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.p-dialog-bottomright {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.p-confirm-dialog .p-dialog-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/dialog/Dialog.vue"],
      "names": [],
      "mappings": "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",
      "file": "Dialog.vue",
      "sourcesContent": ["<template>\n  <div ref=\"mask\" :class=\"maskClass\" v-if=\"maskVisible\" @click=\"onMaskClick\">\n    <transition\n      name=\"p-dialog\"\n      @before-enter=\"onBeforeEnter\"\n      @enter=\"onEnter\"\n      @before-leave=\"onBeforeLeave\"\n      @leave=\"onLeave\"\n      @after-leave=\"onAfterLeave\"\n      @appear=\"onAppear\">\n      <div\n        ref=\"dialog\"\n        :class=\"dialogClass\"\n        :style=\"dialogStyle\"\n        v-if=\"visible\"\n        v-bind=\"$attrs\"\n        v-on=\"listeners\"\n        role=\"dialog\"\n        :aria-labelledby=\"ariaLabelledById\"\n        :aria-modal=\"modal\">\n        <div class=\"p-dialog-header\" v-if=\"showHeader\">\n          <slot name=\"header\">\n            <span :id=\"ariaLabelledById\" class=\"p-dialog-title\" v-if=\"header\">{{ header }}</span>\n          </slot>\n          <div class=\"p-dialog-header-icons\">\n            <button\n              class=\"p-dialog-header-icon p-dialog-header-maximize p-link\"\n              @click=\"maximize\"\n              v-if=\"maximizable\"\n              type=\"button\"\n              tabindex=\"-1\"\n              v-ripple>\n              <span :class=\"maximizeIconClass\"></span>\n            </button>\n            <button\n              class=\"p-dialog-header-icon p-dialog-header-close p-link\"\n              @click=\"close\"\n              v-if=\"closable\"\n              :aria-label=\"ariaCloseLabel\"\n              type=\"button\"\n              v-ripple>\n              <span class=\"p-dialog-header-close-icon pi pi-times\"></span>\n            </button>\n          </div>\n        </div>\n        <div class=\"p-dialog-content\" :style=\"contentStyle\">\n          <slot></slot>\n        </div>\n        <div class=\"p-dialog-footer\" v-if=\"footer || $slots.footer\">\n          <slot name=\"footer\">{{ footer }}</slot>\n        </div>\n      </div>\n    </transition>\n  </div>\n</template>\n<script>\nimport { UniqueComponentId, DomHandler } from 'primevue2/utils'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'Dialog',\n  inheritAttrs: false,\n  props: {\n    header: null,\n    footer: null,\n    visible: Boolean,\n    modal: Boolean,\n    containerStyle: null,\n    contentStyle: null,\n    rtl: Boolean,\n    maximizable: Boolean,\n    dismissableMask: Boolean,\n    closable: {\n      type: Boolean,\n      default: true\n    },\n    closeOnEscape: {\n      type: Boolean,\n      default: true\n    },\n    showHeader: {\n      type: Boolean,\n      default: true\n    },\n    baseZIndex: {\n      type: Number,\n      default: 0\n    },\n    autoZIndex: {\n      type: Boolean,\n      default: true\n    },\n    ariaCloseLabel: {\n      type: String,\n      default: 'close'\n    },\n    position: {\n      type: String,\n      default: 'center'\n    },\n    appendTo: {\n      type: String,\n      default: null\n    }\n  },\n  data() {\n    return {\n      dialogClasses: null,\n      dialogStyles: null,\n      maskVisible: this.visible,\n      maximized: false\n    }\n  },\n  documentKeydownListener: null,\n  updated() {\n    if (this.visible && !this.maskVisible) {\n      this.maskVisible = true\n    }\n  },\n  beforeDestroy() {\n    this.restoreAppend()\n    this.disableDocumentSettings()\n  },\n  methods: {\n    close() {\n      this.$emit('update:visible', false)\n    },\n    onBeforeEnter(el) {\n      if (this.autoZIndex) {\n        el.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())\n      }\n    },\n    onEnter() {\n      this.$refs.mask.style.zIndex = String(parseInt(this.$refs.dialog.style.zIndex, 10) - 1)\n      this.removeStylesFromMask()\n      this.appendContainer()\n      this.alignOverlay()\n      this.$emit('show')\n      this.focus()\n      this.enableDocumentSettings()\n    },\n    onBeforeLeave() {\n      if (this.modal) {\n        DomHandler.addClass(this.$refs.mask, 'p-component-overlay-leave')\n      }\n    },\n    onLeave() {\n      this.$emit('hide')\n    },\n    onAfterLeave() {\n      this.maskVisible = false\n      this.disableDocumentSettings()\n    },\n    onAppear() {\n      if (this.visible) {\n        this.onEnter()\n      }\n    },\n    onMaskClick(event) {\n      if (this.dismissableMask && this.closable && this.modal && this.$refs.mask === event.target) {\n        this.close()\n      }\n    },\n    focus() {\n      let focusTarget = this.$refs.dialog.querySelector('[autofocus]')\n      if (focusTarget) {\n        focusTarget.focus()\n      }\n    },\n    maximize() {\n      this.maximized = !this.maximized\n\n      if (!this.modal) {\n        if (this.maximized)\n          DomHandler.addClass(document.body, 'p-overflow-hidden')\n        else\n          DomHandler.removeClass(document.body, 'p-overflow-hidden')\n      }\n    },\n    enableDocumentSettings() {\n      if (this.modal) {\n        DomHandler.addClass(document.body, 'p-overflow-hidden')\n        this.bindDocumentKeydownListener()\n      }\n      else if (this.maximizable && this.maximized) {\n        DomHandler.addClass(document.body, 'p-overflow-hidden')\n      }\n    },\n    disableDocumentSettings() {\n      if (this.modal) {\n        DomHandler.removeClass(document.body, 'p-overflow-hidden')\n        this.unbindDocumentKeydownListener()\n      }\n      else if (this.maximizable && this.maximized) {\n        DomHandler.removeClass(document.body, 'p-overflow-hidden')\n      }\n    },\n    onKeyDown(event) {\n      if (event.which === 9) {\n        event.preventDefault()\n        let focusableElements = DomHandler.getFocusableElements(this.$refs.dialog)\n        if (focusableElements && focusableElements.length > 0) {\n          if (!document.activeElement) {\n            focusableElements[0].focus()\n          }\n          else {\n            let focusedIndex = focusableElements.indexOf(document.activeElement)\n            if (event.shiftKey) {\n              if (focusedIndex == -1 || focusedIndex === 0)\n                focusableElements[focusableElements.length - 1].focus()\n              else\n                focusableElements[focusedIndex - 1].focus()\n            }\n            else {\n              if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))\n                focusableElements[0].focus()\n              else\n                focusableElements[focusedIndex + 1].focus()\n            }\n          }\n        }\n      } else if (event.which === 27 && this.closeOnEscape) {\n        this.close()\n      }\n    },\n    bindDocumentKeydownListener() {\n      if (!this.documentKeydownListener) {\n        this.documentKeydownListener = this.onKeyDown.bind(this)\n        window.document.addEventListener('keydown', this.documentKeydownListener)\n      }\n    },\n    unbindDocumentKeydownListener() {\n      if (this.documentKeydownListener) {\n        window.document.removeEventListener('keydown', this.documentKeydownListener)\n        this.documentKeydownListener = null\n      }\n    },\n    getPositionClass() {\n      const positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright']\n      const pos = positions.find(item => item === this.position)\n\n      return pos ? `p-dialog-${pos}` : ''\n    },\n    removeStylesFromMask() {\n      if (this.$refs.mask) {\n        this.dialogStyles = this.$vnode.data.style || this.containerStyle\n        if (this.dialogStyles) {\n          Object.keys(this.dialogStyles).forEach((key) => {\n            this.$refs.mask.style[key] = ''\n          })\n        }\n\n        this.dialogClasses = this.$vnode.data.class || this.$vnode.data.staticClass\n      }\n    },\n    alignOverlay() {\n      if (this.appendTo) {\n        DomHandler.absolutePosition(this.$refs.dialog, this.$refs.mask)\n        this.$refs.dialog.style.minWidth = DomHandler.getOuterWidth(this.$refs.mask) + 'px'\n      }\n      else {\n        DomHandler.relativePosition(this.$refs.dialog, this.$refs.mask)\n      }\n    },\n    appendContainer() {\n      if (this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.appendChild(this.$refs.dialog)\n        else\n          document.getElementById(this.appendTo).appendChild(this.$refs.dialog)\n      }\n    },\n    restoreAppend() {\n      if (this.$refs.overlay && this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.removeChild(this.$refs.dialog)\n        else\n          document.getElementById(this.appendTo).removeChild(this.$refs.dialog)\n      }\n    }\n  },\n  computed: {\n    listeners() {\n      return {\n        ...this.$listeners\n      }\n    },\n    maskClass() {\n      return ['p-dialog-mask', { 'p-component-overlay p-component-overlay-enter': this.modal }, this.getPositionClass()]\n    },\n    dialogClass() {\n      return ['p-dialog p-component', {\n        'p-dialog-rtl': this.rtl,\n        'p-dialog-maximized': this.maximizable && this.maximized\n      }, this.dialogClasses]\n    },\n    maximizeIconClass() {\n      return ['p-dialog-header-maximize-icon pi', {\n        'pi-window-maximize': !this.maximized,\n        'pi-window-minimize': this.maximized\n      }]\n    },\n    dialogStyle() {\n      return this.dialogStyles || this.containerStyle\n    },\n    ariaId() {\n      return UniqueComponentId()\n    },\n    ariaLabelledById() {\n      return this.header != null ? this.ariaId + '_header' : null\n    }\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-dialog-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n}\n\n.p-dialog-mask.p-component-overlay {\n  pointer-events: auto;\n}\n\n.p-dialog {\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  max-height: 90%;\n  transform: scale(1);\n}\n\n.p-dialog-content {\n  overflow-y: auto;\n}\n\n.p-dialog-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n}\n\n.p-dialog-footer {\n  flex-shrink: 0;\n}\n\n.p-dialog .p-dialog-header-icons {\n  display: flex;\n  align-items: center;\n}\n\n.p-dialog .p-dialog-header-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Fluid */\n.p-fluid .p-dialog-footer .p-button {\n  width: auto;\n}\n\n/* Animation */\n/* Center */\n.p-dialog-enter-active {\n  transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n.p-dialog-leave-active {\n  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.p-dialog-enter,\n.p-dialog-leave-to {\n  opacity: 0;\n  transform: scale(0.7);\n}\n\n/* Top, Bottom, Left, Right, Top* and Bottom* */\n.p-dialog-top .p-dialog,\n.p-dialog-bottom .p-dialog,\n.p-dialog-left .p-dialog,\n.p-dialog-right .p-dialog,\n.p-dialog-topleft .p-dialog,\n.p-dialog-topright .p-dialog,\n.p-dialog-bottomleft .p-dialog,\n.p-dialog-bottomright .p-dialog {\n  margin: 0.75rem;\n  transform: translate3d(0px, 0px, 0px);\n}\n.p-dialog-top .p-dialog-enter-active,\n.p-dialog-top .p-dialog-leave-active,\n.p-dialog-bottom .p-dialog-enter-active,\n.p-dialog-bottom .p-dialog-leave-active,\n.p-dialog-left .p-dialog-enter-active,\n.p-dialog-left .p-dialog-leave-active,\n.p-dialog-right .p-dialog-enter-active,\n.p-dialog-right .p-dialog-leave-active,\n.p-dialog-topleft .p-dialog-enter-active,\n.p-dialog-topleft .p-dialog-leave-active,\n.p-dialog-topright .p-dialog-enter-active,\n.p-dialog-topright .p-dialog-leave-active,\n.p-dialog-bottomleft .p-dialog-enter-active,\n.p-dialog-bottomleft .p-dialog-leave-active,\n.p-dialog-bottomright .p-dialog-enter-active,\n.p-dialog-bottomright .p-dialog-leave-active {\n  transition: all 0.3s ease-out;\n}\n.p-dialog-top .p-dialog-enter,\n.p-dialog-top .p-dialog-leave-to {\n  transform: translate3d(0px, -100%, 0px);\n}\n.p-dialog-bottom .p-dialog-enter,\n.p-dialog-bottom .p-dialog-leave-to {\n  transform: translate3d(0px, 100%, 0px);\n}\n.p-dialog-left .p-dialog-enter,\n.p-dialog-left .p-dialog-leave-to,\n.p-dialog-topleft .p-dialog-enter,\n.p-dialog-topleft .p-dialog-leave-to,\n.p-dialog-bottomleft .p-dialog-enter,\n.p-dialog-bottomleft .p-dialog-leave-to {\n  transform: translate3d(-100%, 0px, 0px);\n}\n.p-dialog-right .p-dialog-enter,\n.p-dialog-right .p-dialog-leave-to,\n.p-dialog-topright .p-dialog-enter,\n.p-dialog-topright .p-dialog-leave-to,\n.p-dialog-bottomright .p-dialog-enter,\n.p-dialog-bottomright .p-dialog-leave-to {\n  transform: translate3d(100%, 0px, 0px);\n}\n\n/* Maximize */\n.p-dialog-maximized {\n  -webkit-transition: none;\n  transition: none;\n  transform: none;\n  width: 100vw !important;\n  max-height: 100%;\n  height: 100%;\n}\n.p-dialog-maximized .p-dialog-content {\n  flex-grow: 1;\n}\n\n/* Position */\n.p-dialog-left {\n  justify-content: flex-start;\n}\n.p-dialog-right {\n  justify-content: flex-end;\n}\n.p-dialog-top {\n  align-items: flex-start;\n}\n.p-dialog-topleft {\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.p-dialog-topright {\n  justify-content: flex-end;\n  align-items: flex-start;\n}\n.p-dialog-bottom {\n  align-items: flex-end;\n}\n.p-dialog-bottomleft {\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n.p-dialog-bottomright {\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n\n.p-confirm-dialog .p-dialog-content {\n  display: flex;\n  align-items: center;\n}\n</style>\n"]
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
