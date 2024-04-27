'use strict';

var Ripple = require('primevue2/ripple');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

//
var script = {
  name: 'Button',
  props: {
    label: {
      type: String
    },
    icon: {
      type: String
    },
    iconPos: {
      type: String,
      default: 'left'
    },
    badge: {
      type: String
    },
    badgeClass: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingIcon: {
      type: String,
      default: 'pi pi-spinner pi-spin'
    }
  },
  computed: {
    buttonClass: function buttonClass() {
      return {
        'p-button p-component': true,
        'p-button-icon-only': this.icon && !this.label,
        'p-button-vertical': (this.iconPos === 'top' || this.iconPos === 'bottom') && this.label,
        'p-disabled': this.disabled
      };
    },
    iconClass: function iconClass() {
      return [this.loading ? this.loadingIcon : this.icon, 'p-button-icon', {
        'p-button-icon-left': this.iconPos === 'left' && this.label,
        'p-button-icon-right': this.iconPos === 'right' && this.label,
        'p-button-icon-top': this.iconPos === 'top' && this.label,
        'p-button-icon-bottom': this.iconPos === 'bottom' && this.label
      }];
    },
    badgeStyleClass: function badgeStyleClass() {
      return ['p-badge p-component', this.badgeClass, {
        'p-badge-no-gutter': this.badge && String(this.badge).length === 1
      }];
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

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", _vm._g({
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    class: _vm.buttonClass,
    attrs: {
      type: "button"
    }
  }, _vm.$listeners), [_vm._t("default", function () {
    return [_vm.loading && !_vm.icon ? _c("span", {
      class: _vm.iconClass
    }) : _vm._e(), _vm._v(" "), _vm.icon ? _c("span", {
      class: _vm.iconClass
    }) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "p-button-label"
    }, [_vm._v(_vm._s(_vm.label || " "))]), _vm._v(" "), _vm.badge ? _c("span", {
      staticClass: "p-badge",
      class: _vm.badgeStyleClass
    }, [_vm._v(_vm._s(_vm.badge))]) : _vm._e()];
  })], 2);
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
