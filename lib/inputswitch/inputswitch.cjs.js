'use strict';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: 'InputSwitch',
  props: {
    value: Boolean,
    inputId: String,
    name: String,
    disabled: Boolean,
    ariaLabelledBy: null,
    trueValue: {
      type: null,
      default: true
    },
    falseValue: {
      type: null,
      default: false
    }
  },
  data: function data() {
    return {
      focused: false
    };
  },
  methods: {
    onClick: function onClick(event) {
      if (!this.disabled) {
        var newValue = this.checked ? this.falseValue : this.trueValue;
        this.$emit('click', event);
        this.$emit('input', newValue);
        this.$emit('change', event);
        this.$refs.input.focus();
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
    containerClass: function containerClass() {
      return ['p-inputswitch p-component', {
        'p-inputswitch-checked': this.checked,
        'p-disabled': this.disabled,
        'p-focus': this.focused
      }];
    },
    checked: function checked() {
      return this.value === this.trueValue;
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
    class: _vm.containerClass,
    on: {
      click: function click($event) {
        return _vm.onClick($event);
      }
    }
  }, [_c("div", {
    staticClass: "p-hidden-accessible"
  }, [_c("input", {
    ref: "input",
    attrs: {
      type: "checkbox",
      id: _vm.inputId,
      name: _vm.name,
      disabled: _vm.disabled,
      role: "switch",
      "aria-checked": _vm.value,
      "aria-labelledby": _vm.ariaLabelledBy
    },
    domProps: {
      checked: _vm.value
    },
    on: {
      focus: function focus($event) {
        return _vm.onFocus($event);
      },
      blur: function blur($event) {
        return _vm.onBlur($event);
      },
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        $event.preventDefault();
        return _vm.onClick($event);
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "p-inputswitch-slider"
  })]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-c499dc06_0", {
    source: "\n.p-inputswitch {\n  position: relative;\n  display: inline-block;\n}\n.p-inputswitch-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.p-inputswitch-slider:before {\n  position: absolute;\n  content: \"\";\n  top: 50%;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/inputswitch/InputSwitch.vue"],
      "names": [],
      "mappings": ";AAkFA;EACA,kBAAA;EACA,qBAAA;AACA;AAEA;EACA,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;AACA;AAEA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;AACA",
      "file": "InputSwitch.vue",
      "sourcesContent": ["<template>\n  <div :class=\"containerClass\" @click=\"onClick($event)\">\n    <div class=\"p-hidden-accessible\">\n      <input\n        ref=\"input\"\n        type=\"checkbox\"\n        :id=\"inputId\"\n        :name=\"name\"\n        :checked=\"value\"\n        :disabled=\"disabled\"\n        @focus=\"onFocus($event)\"\n        @blur=\"onBlur($event)\"\n        @keydown.enter.prevent=\"onClick($event)\"\n        role=\"switch\"\n        :aria-checked=\"value\"\n        :aria-labelledby=\"ariaLabelledBy\" />\n    </div>\n    <span class=\"p-inputswitch-slider\"></span>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'InputSwitch',\n  props: {\n    value: Boolean,\n    inputId: String,\n    name: String,\n    disabled: Boolean,\n    ariaLabelledBy: null,\n    trueValue: {\n      type: null,\n      default: true\n    },\n    falseValue: {\n      type: null,\n      default: false\n    }\n  },\n  data() {\n    return {\n      focused: false\n    }\n  },\n  methods: {\n    onClick(event) {\n      if (!this.disabled) {\n        const newValue = this.checked ? this.falseValue : this.trueValue\n        this.$emit('click', event)\n        this.$emit('input', newValue)\n        this.$emit('change', event)\n        this.$refs.input.focus()\n      }\n    },\n    onFocus(event) {\n      this.focused = true\n      this.$emit('focus', event)\n    },\n    onBlur(event) {\n      this.focused = false\n      this.$emit('blur', event)\n    }\n  },\n  computed: {\n    containerClass() {\n      return [\n        'p-inputswitch p-component',\n        {\n          'p-inputswitch-checked': this.checked,\n          'p-disabled': this.disabled,\n          'p-focus': this.focused\n        }\n      ]\n    },\n    checked() {\n      return this.value === this.trueValue\n    }\n  }\n}\n</script>\n\n<style>\n.p-inputswitch {\n  position: relative;\n  display: inline-block;\n}\n\n.p-inputswitch-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.p-inputswitch-slider:before {\n  position: absolute;\n  content: \"\";\n  top: 50%;\n}\n</style>\n"]
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

module.exports = __vue_component__;
