//
//
//
//
//
//

var script = {
  name: 'Accordion',
  props: {
    multiple: Boolean,
    activeIndex: [Number, Array],
    expandIcon: {
      type: String,
      default: 'pi-chevron-right'
    },
    collapseIcon: {
      type: String,
      default: 'pi-chevron-down'
    }
  },
  data: function data() {
    return {
      d_activeIndex: this.activeIndex
    };
  },
  watch: {
    activeIndex: function activeIndex(newValue) {
      this.d_activeIndex = newValue;
    }
  },
  methods: {
    onToggle: function onToggle(event, tab, index, isActive) {
      var eventName = isActive ? 'tab-close' : 'tab-open';
      if (this.multiple) {
        var x = this.d_activeIndex;
        if (x && x.some(function (i) {
          return i === index;
        })) {
          this.d_activeIndex = x.filter(function (i) {
            return i !== index;
          });
        } else x ? this.d_activeIndex.push(index) : this.d_activeIndex = [index];
      } else {
        index === this.d_activeIndex ? this.d_activeIndex = null : this.d_activeIndex = index;
      }
      this.$emit('update:activeIndex', this.d_activeIndex);
      this.$emit(eventName, {
        originalEvent: event,
        index: index
      });
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
    staticClass: "p-accordion p-component"
  }, [_vm._t("default")], 2);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-127c079e_0", {
    source: "\n.p-accordion-header-link {\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  text-decoration: none;\n}\n.p-accordion-header-link:focus {\n  z-index: 1;\n}\n.p-accordion-header-text {\n  line-height: 1;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/accordion/Accordion.vue"],
      "names": [],
      "mappings": ";AA4DA;EACA,eAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,kBAAA;EACA,qBAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;EACA,cAAA;AACA",
      "file": "Accordion.vue",
      "sourcesContent": ["<template>\n  <div class=\"p-accordion p-component\">\n    <slot></slot>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Accordion',\n  props: {\n    multiple: Boolean,\n    activeIndex: [Number, Array],\n    expandIcon: {\n      type: String,\n      default: 'pi-chevron-right'\n    },\n    collapseIcon: {\n      type: String,\n      default: 'pi-chevron-down'\n    }\n  },\n  data() {\n    return {\n      d_activeIndex: this.activeIndex\n    }\n  },\n  watch: {\n    activeIndex(newValue) {\n      this.d_activeIndex = newValue\n    }\n  },\n  methods: {\n    onToggle(event, tab, index, isActive) {\n      const eventName = isActive ? 'tab-close' : 'tab-open'\n\n      if (this.multiple) {\n        let x = this.d_activeIndex\n\n        if (x && x.some((i) => i === index)) {\n          this.d_activeIndex = x.filter((i) => i !== index)\n        } else\n          x ? this.d_activeIndex.push(index) : (this.d_activeIndex = [index])\n      } else {\n        index === this.d_activeIndex\n          ? (this.d_activeIndex = null)\n          : (this.d_activeIndex = index)\n      }\n\n      this.$emit('update:activeIndex', this.d_activeIndex)\n\n      this.$emit(eventName, {\n        originalEvent: event,\n        index: index\n      })\n    }\n  }\n}\n</script>\n\n<style>\n.p-accordion-header-link {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  user-select: none;\n  position: relative;\n  text-decoration: none;\n}\n\n.p-accordion-header-link:focus {\n  z-index: 1;\n}\n\n.p-accordion-header-text {\n  line-height: 1;\n}\n</style>\n"]
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
