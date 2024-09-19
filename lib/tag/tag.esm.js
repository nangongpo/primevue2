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
  name: 'Tag',
  props: {
    value: null,
    severity: null,
    rounded: Boolean,
    icon: String
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-tag p-component', {
        'p-tag-info': this.severity === 'info',
        'p-tag-success': this.severity === 'success',
        'p-tag-warning': this.severity === 'warning',
        'p-tag-danger': this.severity === 'danger',
        'p-tag-rounded': this.rounded
      }];
    },
    iconClass: function iconClass() {
      return ['p-tag-icon', this.icon];
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
  return _c("span", {
    class: _vm.containerClass
  }, [_vm.icon ? _c("span", {
    class: _vm.iconClass
  }) : _vm._e(), _vm._v(" "), _vm._t("default", function () {
    return [_c("span", {
      staticClass: "p-tag-value"
    }, [_vm._v(_vm._s(_vm.value))])];
  })], 2);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-0e14be85_0", {
    source: "\n.p-tag {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-tag-icon,\n.p-tag-value,\n.p-tag-icon.pi {\n  line-height: 1.5;\n}\n.p-tag.p-tag-rounded {\n  border-radius: 10rem;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/tag/Tag.vue"],
      "names": [],
      "mappings": ";AAoCA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AACA;;;EAGA,gBAAA;AACA;AACA;EACA,oBAAA;AACA",
      "file": "Tag.vue",
      "sourcesContent": ["<template>\n  <span :class=\"containerClass\">\n    <span :class=\"iconClass\" v-if=\"icon\"></span>\n    <slot>\n      <span class=\"p-tag-value\">{{ value }}</span>\n    </slot>\n  </span>\n</template>\n\n<script>\nexport default {\n  name: 'Tag',\n  props: {\n    value: null,\n    severity: null,\n    rounded: Boolean,\n    icon: String\n  },\n  computed: {\n    containerClass() {\n      return ['p-tag p-component', {\n        'p-tag-info': this.severity === 'info',\n        'p-tag-success': this.severity === 'success',\n        'p-tag-warning': this.severity === 'warning',\n        'p-tag-danger': this.severity === 'danger',\n        'p-tag-rounded': this.rounded\n      }]\n    },\n    iconClass() {\n      return ['p-tag-icon', this.icon]\n    }\n  }\n}\n</script>\n\n<style>\n.p-tag {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.p-tag-icon,\n.p-tag-value,\n.p-tag-icon.pi {\n  line-height: 1.5;\n}\n.p-tag.p-tag-rounded {\n  border-radius: 10rem;\n}\n</style>\n"]
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
