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
  name: 'Chip',
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    removable: {
      type: Boolean,
      default: false
    },
    removeIcon: {
      type: String,
      default: 'pi pi-times-circle'
    }
  },
  data: function data() {
    return {
      visible: true
    };
  },
  methods: {
    close: function close(event) {
      this.visible = false;
      this.$emit('remove', event);
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-chip p-component', {
        'p-chip-image': this.image != null
      }];
    },
    iconClass: function iconClass() {
      return ['p-chip-icon', this.icon];
    },
    removeIconClass: function removeIconClass() {
      return ['p-chip-remove-icon', this.removeIcon];
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
  return _vm.visible ? _c("div", {
    class: _vm.containerClass
  }, [_vm._t("default", function () {
    return [_vm.image ? _c("img", {
      attrs: {
        src: _vm.image
      }
    }) : _vm.icon ? _c("span", {
      class: _vm.iconClass
    }) : _vm._e(), _vm._v(" "), _vm.label ? _c("div", {
      staticClass: "p-chip-text"
    }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), _vm.removable ? _c("span", {
      class: _vm.removeIconClass,
      attrs: {
        tabindex: "0"
      },
      on: {
        click: _vm.close,
        keydown: function keydown($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
            return null;
          }
          return _vm.close.apply(null, arguments);
        }
      }
    }) : _vm._e()];
  })], 2) : _vm._e();
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-03368792_0", {
    source: "\n.p-chip {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-chip-text {\n  line-height: 1.5;\n}\n.p-chip-icon.pi {\n  line-height: 1.5;\n}\n.p-chip-remove-icon {\n  line-height: 1.5;\n  cursor: pointer;\n}\n.p-chip img {\n  border-radius: 50%;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/chip/Chip.vue"],
      "names": [],
      "mappings": ";AAgEA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AACA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;AACA;AACA;EACA,gBAAA;EACA,eAAA;AACA;AACA;EACA,kBAAA;AACA",
      "file": "Chip.vue",
      "sourcesContent": ["<template>\n  <div :class=\"containerClass\" v-if=\"visible\">\n    <slot>\n      <img :src=\"image\" v-if=\"image\" />\n      <span :class=\"iconClass\" v-else-if=\"icon\"></span>\n      <div class=\"p-chip-text\" v-if=\"label\">{{ label }}</div>\n      <span v-if=\"removable\" tabindex=\"0\" :class=\"removeIconClass\" @click=\"close\" @keydown.enter=\"close\"></span>\n    </slot>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Chip',\n  props: {\n    label: {\n      type: String,\n      default: null\n    },\n    icon: {\n      type: String,\n      default: null\n    },\n    image: {\n      type: String,\n      default: null\n    },\n    removable: {\n      type: Boolean,\n      default: false\n    },\n    removeIcon: {\n      type: String,\n      default: 'pi pi-times-circle'\n    }\n  },\n  data() {\n    return {\n      visible: true\n    }\n  },\n  methods: {\n    close(event) {\n      this.visible = false\n      this.$emit('remove', event)\n    }\n  },\n  computed: {\n    containerClass() {\n      return ['p-chip p-component', {\n        'p-chip-image': this.image != null\n      }]\n    },\n    iconClass() {\n      return ['p-chip-icon', this.icon]\n    },\n    removeIconClass() {\n      return ['p-chip-remove-icon', this.removeIcon]\n    }\n  }\n}\n</script>\n\n<style>\n.p-chip {\n  display: inline-flex;\n  align-items: center;\n}\n.p-chip-text {\n  line-height: 1.5;\n}\n\n.p-chip-icon.pi {\n  line-height: 1.5;\n}\n.p-chip-remove-icon {\n  line-height: 1.5;\n  cursor: pointer;\n}\n.p-chip img {\n  border-radius: 50%;\n}\n</style>\n"]
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
