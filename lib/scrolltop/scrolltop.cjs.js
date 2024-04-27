'use strict';

var utils = require('primevue2/utils');

//
var script = {
  name: 'ScrollTop',
  scrollListener: null,
  data: function data() {
    return {
      visible: false
    };
  },
  props: {
    target: {
      type: String,
      default: 'window'
    },
    threshold: {
      type: Number,
      default: 400
    },
    icon: {
      type: String,
      default: 'pi pi-chevron-up'
    },
    behavior: {
      type: String,
      default: 'smooth'
    }
  },
  mounted: function mounted() {
    if (this.target === 'window') this.bindDocumentScrollListener();else if (this.target === 'parent') this.bindParentScrollListener();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.target === 'window') this.unbindDocumentScrollListener();else if (this.target === 'parent') this.unbindParentScrollListener();
  },
  methods: {
    onClick: function onClick() {
      var scrollElement = this.target === 'window' ? window : this.$el.parentElement;
      scrollElement.scroll({
        top: 0,
        behavior: this.behavior
      });
    },
    checkVisibility: function checkVisibility(scrollY) {
      if (scrollY > this.threshold) this.visible = true;else this.visible = false;
    },
    bindParentScrollListener: function bindParentScrollListener() {
      var _this = this;
      this.scrollListener = function () {
        _this.checkVisibility(_this.$el.parentElement.scrollTop);
      };
      this.$el.parentElement.addEventListener('scroll', this.scrollListener);
    },
    bindDocumentScrollListener: function bindDocumentScrollListener() {
      var _this2 = this;
      this.scrollListener = function () {
        _this2.checkVisibility(utils.DomHandler.getWindowScrollTop());
      };
      window.addEventListener('scroll', this.scrollListener);
    },
    unbindParentScrollListener: function unbindParentScrollListener() {
      if (this.scrollListener) {
        this.$el.parentElement.removeEventListener('scroll', this.scrollListener);
        this.scrollListener = null;
      }
    },
    unbindDocumentScrollListener: function unbindDocumentScrollListener() {
      if (this.scrollListener) {
        window.removeEventListener('scroll', this.scrollListener);
        this.scrollListener = null;
      }
    },
    onEnter: function onEnter() {
      this.$refs.button.style.zIndex = String(utils.DomHandler.generateZIndex());
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-scrolltop p-link p-component', {
        'p-scrolltop-sticky': this.target !== 'window'
      }];
    },
    iconClass: function iconClass() {
      return ['p-scrolltop-icon', this.icon];
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
  return _c("transition", {
    attrs: {
      name: "p-scrolltop",
      appear: ""
    },
    on: {
      enter: _vm.onEnter
    }
  }, [_vm.visible ? _c("button", {
    ref: "button",
    class: _vm.containerClass,
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.onClick
    }
  }, [_c("span", {
    class: _vm.iconClass
  })]) : _vm._e()]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4088598b_0", {
    source: "\n.p-scrolltop {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-scrolltop-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n}\n.p-scrolltop-sticky.p-link {\n  margin-left: auto;\n}\n.p-scrolltop-enter-from {\n  opacity: 0;\n}\n.p-scrolltop-enter-active {\n  -webkit-transition: opacity .15s;\n  transition: opacity .15s;\n}\n.p-scrolltop.p-scrolltop-leave-to {\n  opacity: 0;\n}\n.p-scrolltop-leave-active {\n  -webkit-transition: opacity .15s;\n  transition: opacity .15s;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/scrolltop/ScrollTop.vue"],
      "names": [],
      "mappings": ";AAwGA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AACA;EACA,wBAAA;EAAA,gBAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,UAAA;AACA;AACA;EACA,gCAAA;EAAA,wBAAA;AACA;AACA;EACA,UAAA;AACA;AACA;EACA,gCAAA;EAAA,wBAAA;AACA",
      "file": "ScrollTop.vue",
      "sourcesContent": ["<template>\n  <transition name=\"p-scrolltop\" appear @enter=\"onEnter\">\n    <button :class=\"containerClass\" v-if=\"visible\" @click=\"onClick\" type=\"button\" ref=\"button\">\n      <span :class=\"iconClass\"></span>\n    </button>\n  </transition>\n</template>\n\n<script>\nimport { DomHandler } from 'primevue2/utils'\nexport default {\n  name: 'ScrollTop',\n  scrollListener: null,\n  data() {\n    return {\n      visible: false\n    }\n  },\n  props: {\n    target: {\n      type: String,\n      default: 'window'\n    },\n    threshold: {\n      type: Number,\n      default: 400\n    },\n    icon: {\n      type: String,\n      default: 'pi pi-chevron-up'\n    },\n    behavior: {\n      type: String,\n      default: 'smooth'\n    }\n  },\n  mounted() {\n    if (this.target === 'window')\n      this.bindDocumentScrollListener()\n    else if (this.target === 'parent')\n      this.bindParentScrollListener()\n  },\n  beforeDestroy() {\n    if (this.target === 'window')\n      this.unbindDocumentScrollListener()\n    else if (this.target === 'parent')\n      this.unbindParentScrollListener()\n  },\n  methods: {\n    onClick() {\n      let scrollElement = this.target === 'window' ? window : this.$el.parentElement\n      scrollElement.scroll({\n        top: 0,\n        behavior: this.behavior\n      })\n    },\n    checkVisibility(scrollY) {\n      if (scrollY > this.threshold)\n        this.visible = true\n      else\n        this.visible = false\n    },\n    bindParentScrollListener() {\n      this.scrollListener = () => {\n        this.checkVisibility(this.$el.parentElement.scrollTop)\n      }\n\n      this.$el.parentElement.addEventListener('scroll', this.scrollListener)\n    },\n    bindDocumentScrollListener() {\n      this.scrollListener = () => {\n        this.checkVisibility(DomHandler.getWindowScrollTop())\n      }\n\n      window.addEventListener('scroll', this.scrollListener)\n    },\n    unbindParentScrollListener() {\n      if (this.scrollListener) {\n        this.$el.parentElement.removeEventListener('scroll', this.scrollListener)\n        this.scrollListener = null\n      }\n    },\n    unbindDocumentScrollListener() {\n      if (this.scrollListener) {\n        window.removeEventListener('scroll', this.scrollListener)\n        this.scrollListener = null\n      }\n    },\n    onEnter() {\n      this.$refs.button.style.zIndex = String(DomHandler.generateZIndex())\n    }\n  },\n  computed: {\n    containerClass() {\n      return ['p-scrolltop p-link p-component', { 'p-scrolltop-sticky': this.target !== 'window' }]\n    },\n    iconClass() {\n      return ['p-scrolltop-icon', this.icon]\n    }\n  }\n}\n</script>\n\n<style>\n.p-scrolltop {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.p-scrolltop-sticky {\n  position: sticky;\n}\n.p-scrolltop-sticky.p-link {\n  margin-left: auto;\n}\n.p-scrolltop-enter-from {\n  opacity: 0;\n}\n.p-scrolltop-enter-active {\n  transition: opacity .15s;\n}\n.p-scrolltop.p-scrolltop-leave-to {\n  opacity: 0;\n}\n.p-scrolltop-leave-active {\n  transition: opacity .15s;\n}\n</style>\n"]
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
