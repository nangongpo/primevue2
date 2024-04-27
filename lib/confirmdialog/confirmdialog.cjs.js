'use strict';

var ConfirmationEventBus = require('primevue2/confirmationeventbus');
var Dialog = require('primevue2/dialog');
var Button = require('primevue2/button');
var utils = require('primevue2/utils');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ConfirmationEventBus__default = /*#__PURE__*/_interopDefaultLegacy(ConfirmationEventBus);
var Dialog__default = /*#__PURE__*/_interopDefaultLegacy(Dialog);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);

//
var script = {
  name: 'ConfirmDialog',
  props: {
    group: String
  },
  data: function data() {
    return {
      visible: false,
      confirmation: null
    };
  },
  mounted: function mounted() {
    var _this = this;
    ConfirmationEventBus__default["default"].on('confirm', function (options) {
      if (!options) {
        return;
      }
      if (options.group === _this.group) {
        _this.confirmation = options;
        _this.visible = true;
      }
    });
    ConfirmationEventBus__default["default"].on('close', function () {
      _this.visible = false;
      _this.confirmation = null;
    });
  },
  beforeDestroy: function beforeDestroy() {
    ConfirmationEventBus__default["default"].off('confirm');
    ConfirmationEventBus__default["default"].off('close');
  },
  methods: {
    accept: function accept() {
      if (this.confirmation.accept) {
        this.confirmation.accept();
      }
      this.visible = false;
    },
    reject: function reject() {
      if (this.confirmation.reject) {
        this.confirmation.reject();
      }
      this.visible = false;
    },
    closeDialog: function closeDialog($event) {
      if (utils.DomHandler.hasClass($event.target, 'p-dialog-header-close') || utils.DomHandler.hasClass($event.target, 'p-dialog-header-close-icon')) {
        ConfirmationEventBus__default["default"].off('confirm');
        ConfirmationEventBus__default["default"].off('close');
        this.visible = false;
      }
    }
  },
  computed: {
    header: function header() {
      return this.confirmation ? this.confirmation.header : null;
    },
    message: function message() {
      return this.confirmation ? this.confirmation.message : null;
    },
    blockScroll: function blockScroll() {
      return this.confirmation ? this.confirmation.blockScroll : true;
    },
    position: function position() {
      return this.confirmation ? this.confirmation.position : null;
    },
    iconClass: function iconClass() {
      return ['p-confirm-dialog-icon', this.confirmation ? this.confirmation.icon : null];
    },
    acceptLabel: function acceptLabel() {
      return this.confirmation ? this.confirmation.acceptLabel || this.$primevue.config.locale.accept : null;
    },
    rejectLabel: function rejectLabel() {
      return this.confirmation ? this.confirmation.rejectLabel || this.$primevue.config.locale.reject : null;
    },
    acceptIcon: function acceptIcon() {
      return this.confirmation ? this.confirmation.acceptIcon : null;
    },
    rejectIcon: function rejectIcon() {
      return this.confirmation ? this.confirmation.rejectIcon : null;
    },
    acceptClass: function acceptClass() {
      return ['p-confirm-dialog-accept', this.confirmation ? this.confirmation.acceptClass : null];
    },
    rejectClass: function rejectClass() {
      return ['p-confirm-dialog-reject', this.confirmation ? this.confirmation.rejectClass || 'p-button-text' : null];
    },
    autoFocusAccept: function autoFocusAccept() {
      return this.confirmation.defaultFocus === undefined || this.confirmation.defaultFocus === 'accept' ? true : false;
    },
    autoFocusReject: function autoFocusReject() {
      return this.confirmation.defaultFocus === 'reject' ? true : false;
    }
  },
  components: {
    'CDialog': Dialog__default["default"],
    'CDButton': Button__default["default"]
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
var __vue_script__ = script;

/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("CDialog", {
    staticClass: "p-confirm-dialog",
    attrs: {
      visible: _vm.visible,
      modal: true,
      header: _vm.header,
      blockScroll: _vm.blockScroll,
      position: _vm.position
    },
    on: {
      click: function click($event) {
        return _vm.closeDialog($event);
      }
    },
    scopedSlots: _vm._u([{
      key: "footer",
      fn: function fn() {
        return [_c("CDButton", {
          class: _vm.rejectClass,
          attrs: {
            label: _vm.rejectLabel,
            icon: _vm.rejectIcon,
            autofocus: _vm.autoFocusReject
          },
          on: {
            click: function click($event) {
              return _vm.reject();
            }
          }
        }), _vm._v(" "), _c("CDButton", {
          class: _vm.acceptClass,
          attrs: {
            label: _vm.acceptLabel,
            icon: _vm.acceptIcon,
            autofocus: _vm.autoFocusAccept
          },
          on: {
            click: function click($event) {
              return _vm.accept();
            }
          }
        })];
      },
      proxy: true
    }])
  }, [_c("i", {
    class: _vm.iconClass
  }), _vm._v(" "), _c("span", {
    staticClass: "p-confirm-dialog-message"
  }, [_vm._v(_vm._s(_vm.message))])]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = undefined;
/* scoped */
var __vue_scope_id__ = undefined;
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

module.exports = __vue_component__;
