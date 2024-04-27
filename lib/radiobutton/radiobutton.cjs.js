'use strict';

var utils = require('primevue2/utils');

//
var script = {
  name: 'RadioButton',
  inheritAttrs: false,
  props: {
    value: null,
    modelValue: null
  },
  model: {
    prop: 'modelValue',
    event: 'input'
  },
  data: function data() {
    return {
      focused: false
    };
  },
  methods: {
    onClick: function onClick(event) {
      if (!this.$attrs.disabled) {
        this.$emit('click', event);
        this.$emit('input', this.value);
        this.$refs.input.focus();
        if (!this.checked) {
          this.$emit('change', event);
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
    }
  },
  computed: {
    checked: function checked() {
      return this.modelValue != null && utils.ObjectUtils.equals(this.modelValue, this.value);
    },
    containerClass: function containerClass() {
      return ['p-radiobutton p-component', {
        'p-radiobutton-checked': this.checked,
        'p-radiobutton-disabled': this.$attrs.disabled,
        'p-radiobutton-focused': this.focused
      }];
    }
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
  return _c("div", {
    class: _vm.containerClass,
    on: {
      click: function click($event) {
        return _vm.onClick($event);
      }
    }
  }, [_c("div", {
    staticClass: "p-hidden-accessible"
  }, [_c("input", _vm._b({
    ref: "input",
    attrs: {
      type: "radio"
    },
    domProps: {
      checked: _vm.checked,
      value: _vm.value
    },
    on: {
      focus: function focus($event) {
        return _vm.onFocus($event);
      },
      blur: function blur($event) {
        return _vm.onBlur($event);
      }
    }
  }, "input", _vm.$attrs, false))]), _vm._v(" "), _c("div", {
    ref: "box",
    class: ["p-radiobutton-box", {
      "p-highlight": _vm.checked,
      "p-disabled": _vm.$attrs.disabled,
      "p-focus": _vm.focused
    }],
    attrs: {
      role: "radio",
      "aria-checked": _vm.checked
    }
  }, [_c("div", {
    staticClass: "p-radiobutton-icon"
  })])]);
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