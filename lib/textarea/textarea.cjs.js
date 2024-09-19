'use strict';

var utils = require('primevue2/utils');

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var script = {
  name: 'Textarea',
  props: {
    value: null,
    autoResize: Boolean
  },
  resizeListener: null,
  mounted: function mounted() {
    if (this.$el.offsetParent && this.autoResize) {
      this.resize();
      this.bindResizeListener();
    }
  },
  updated: function updated() {
    if (utils.DomHandler.isVisible(this.$el) && this.$el.offsetParent.tagName !== 'BODY' && this.autoResize) {
      this.resize();
      this.bindResizeListener();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindResizeListener();
  },
  methods: {
    resize: function resize() {
      var style = window.getComputedStyle(this.$el);
      this.$el.style.height = 'auto';
      this.$el.style.height = "calc(".concat(style.borderTopWidth, " + ").concat(style.borderBottomWidth, " + ").concat(this.$el.scrollHeight, "px)");
      if (parseFloat(this.$el.style.height) >= parseFloat(this.$el.style.maxHeight)) {
        this.$el.style.overflow = 'scroll';
        this.$el.style.height = this.$el.style.maxHeight;
      } else {
        this.$el.style.overflow = 'hidden';
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this = this;
      if (!this.resizeListener) {
        this.resizeListener = function () {
          _this.resize();
        };
        window.addEventListener('resize', this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        this.resizeListener = null;
      }
    }
  },
  computed: {
    listeners: function listeners() {
      var _this2 = this;
      return _objectSpread(_objectSpread({}, this.$listeners), {}, {
        input: function input(event) {
          if (_this2.autoResize) {
            _this2.resize();
          }
          _this2.$emit('input', event.target.value);
        }
      });
    },
    filled: function filled() {
      return this.value != null && this.value.toString().length > 0;
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
  return _c("textarea", _vm._g({
    class: ["p-inputtextarea p-inputtext p-component", {
      "p-filled": _vm.filled,
      "p-inputtextarea-resizable ": _vm.autoResize
    }],
    domProps: {
      value: _vm.value
    }
  }, _vm.listeners));
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-fffbbce6_0", {
    source: "\n.p-inputtextarea-resizable {\n  overflow: hidden;\n  resize: none;\n}\n.p-fluid .p-inputtextarea {\n  width: 100%;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/textarea/Textarea.vue"],
      "names": [],
      "mappings": ";AAuFA;EACA,gBAAA;EACA,YAAA;AACA;AAEA;EACA,WAAA;AACA",
      "file": "Textarea.vue",
      "sourcesContent": ["<template>\n  <textarea\n    :class=\"[\n      'p-inputtextarea p-inputtext p-component',\n      { 'p-filled': filled, 'p-inputtextarea-resizable ': autoResize },\n    ]\"\n    v-on=\"listeners\"\n    :value=\"value\"></textarea>\n</template>\n\n<script>\nimport { DomHandler } from 'primevue2/utils'\n\nexport default {\n  name: 'Textarea',\n  props: {\n    value: null,\n    autoResize: Boolean\n  },\n  resizeListener: null,\n  mounted() {\n    if (this.$el.offsetParent && this.autoResize) {\n      this.resize()\n      this.bindResizeListener()\n    }\n  },\n  updated() {\n    if (DomHandler.isVisible(this.$el) && this.$el.offsetParent.tagName !== 'BODY' && this.autoResize) {\n      this.resize()\n      this.bindResizeListener()\n    }\n  },\n  beforeDestroy() {\n    this.unbindResizeListener()\n  },\n  methods: {\n    resize() {\n      const style = window.getComputedStyle(this.$el)\n      this.$el.style.height = 'auto'\n      this.$el.style.height = `calc(${style.borderTopWidth} + ${style.borderBottomWidth} + ${this.$el.scrollHeight}px)`\n\n      if (parseFloat(this.$el.style.height) >= parseFloat(this.$el.style.maxHeight)) {\n        this.$el.style.overflow = 'scroll'\n        this.$el.style.height = this.$el.style.maxHeight\n      }\n\n      else {\n        this.$el.style.overflow = 'hidden'\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          this.resize()\n        }\n\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    }\n  },\n  computed: {\n    listeners() {\n      return {\n        ...this.$listeners,\n        input: event => {\n          if (this.autoResize) {\n            this.resize()\n          }\n\n          this.$emit('input', event.target.value)\n        }\n      }\n    },\n    filled() {\n      return (this.value != null && this.value.toString().length > 0)\n    }\n  }\n}\n</script>\n\n<style>\n.p-inputtextarea-resizable {\n  overflow: hidden;\n  resize: none;\n}\n\n.p-fluid .p-inputtextarea {\n  width: 100%;\n}\n</style>\n"]
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
