import { DomHandler } from 'primevue2/utils';

//
var script = {
  name: 'BlockUI',
  props: {
    blocked: {
      type: Boolean,
      default: false
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    autoZIndex: {
      type: Boolean,
      default: true
    }
  },
  mask: null,
  mounted: function mounted() {
    if (this.blocked) {
      this.block();
    }
  },
  watch: {
    blocked: function blocked(newValue) {
      if (newValue === true) this.block();else this.unblock();
    }
  },
  methods: {
    block: function block() {
      var styleClass = 'p-blockui p-component-overlay p-component-overlay-enter';
      if (this.fullScreen) {
        styleClass += ' p-blockui-document';
        this.mask = document.createElement('div');
        this.mask.setAttribute('class', styleClass);
        document.body.appendChild(this.mask);
        DomHandler.addClass(document.body, 'p-overflow-hidden');
        document.activeElement.blur();
      } else {
        var target = this.$children ? this.$children[0] : null;
        if (target) {
          this.mask = document.createElement('div');
          this.mask.setAttribute('class', styleClass);
          target.$el.appendChild(this.mask);
          target.$el.style.position = 'relative';
        }
      }
      if (this.autoZIndex) {
        this.mask.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
      }
      this.$emit('block');
    },
    unblock: function unblock() {
      var _this = this;
      DomHandler.addClass(this.mask, 'p-component-overlay-leave');
      this.mask.addEventListener('animationend', function () {
        _this.removeMask();
      });
    },
    removeMask: function removeMask() {
      if (this.fullScreen) {
        document.body.removeChild(this.mask);
        DomHandler.removeClass(document.body, 'p-overflow-hidden');
      } else {
        this.$children[0].$el.removeChild(this.mask);
      }
      this.$emit('unblock');
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
    staticClass: "p-blockui-container"
  }, [_vm._t("default")], 2);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-7b2b0951_0", {
    source: "\n.p-blockui {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.p-blockui.p-component-overlay {\n  position: absolute;\n}\n.p-blockui-document.p-component-overlay {\n  position: fixed;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/blockui/BlockUI.vue"],
      "names": [],
      "mappings": ";AA4FA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,eAAA;AACA",
      "file": "BlockUI.vue",
      "sourcesContent": ["<template>\n  <div class=\"p-blockui-container\">\n    <slot></slot>\n  </div>\n</template>\n\n<script>\nimport { DomHandler } from 'primevue2/utils'\n\nexport default {\n  name: 'BlockUI',\n  props: {\n    blocked: {\n      type: Boolean,\n      default: false\n    },\n    fullScreen: {\n      type: Boolean,\n      default: false\n    },\n    baseZIndex: {\n      type: Number,\n      default: 0\n    },\n    autoZIndex: {\n      type: Boolean,\n      default: true\n    }\n  },\n  mask: null,\n  mounted() {\n    if (this.blocked) {\n      this.block()\n    }\n  },\n  watch: {\n    blocked(newValue) {\n      if (newValue === true)\n        this.block()\n      else\n        this.unblock()\n    }\n  },\n  methods: {\n    block() {\n      let styleClass = 'p-blockui p-component-overlay p-component-overlay-enter'\n      if (this.fullScreen) {\n        styleClass += ' p-blockui-document'\n        this.mask = document.createElement('div')\n        this.mask.setAttribute('class', styleClass)\n        document.body.appendChild(this.mask)\n        DomHandler.addClass(document.body, 'p-overflow-hidden')\n        document.activeElement.blur()\n      }\n      else {\n        const target = this.$children ? this.$children[0] : null\n        if (target) {\n          this.mask = document.createElement('div')\n          this.mask.setAttribute('class', styleClass)\n          target.$el.appendChild(this.mask)\n          target.$el.style.position = 'relative'\n        }\n      }\n\n      if (this.autoZIndex) {\n        this.mask.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())\n      }\n\n      this.$emit('block')\n    },\n    unblock() {\n      DomHandler.addClass(this.mask, 'p-component-overlay-leave')\n      this.mask.addEventListener('animationend', () => {\n        this.removeMask()\n      })\n    },\n    removeMask() {\n      if (this.fullScreen) {\n        document.body.removeChild(this.mask)\n        DomHandler.removeClass(document.body, 'p-overflow-hidden')\n      }\n      else {\n        this.$children[0].$el.removeChild(this.mask)\n      }\n\n      this.$emit('unblock')\n    }\n  }\n}\n</script>\n\n<style>\n.p-blockui {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.p-blockui.p-component-overlay {\n  position: absolute;\n}\n\n.p-blockui-document.p-component-overlay {\n  position: fixed;\n}\n</style>\n"]
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
