import { DomHandler } from 'primevue2/utils';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var QuillJS = function () {
  try {
    return window.Quill;
  } catch (_unused) {
    return null;
  }
}();
var script = {
  name: 'Editor',
  props: {
    value: String,
    placeholder: String,
    readonly: Boolean,
    formats: Array,
    editorStyle: null,
    modules: null
  },
  quill: null,
  watch: {
    value: function value(newValue, oldValue) {
      if (newValue !== oldValue && this.quill && !this.quill.hasFocus()) {
        this.renderValue(newValue);
      }
    },
    readonly: function readonly() {
      this.handleReadOnlyChange();
    }
  },
  mounted: function mounted() {
    var _this = this;
    var configuration = {
      modules: _objectSpread({
        toolbar: this.$refs.toolbarElement
      }, this.modules || {}),
      readOnly: this.readonly,
      theme: 'snow',
      formats: this.formats,
      placeholder: this.placeholder
    };
    if (QuillJS) {
      this.quill = new QuillJS(this.$refs.editorElement, configuration);
      this.initQuill();
      this.handleLoad();
    } else {
      import('quill').then(function (module) {
        if (module && DomHandler.isExist(_this.$refs.editorElement)) {
          if (module.default) {
            // webpack
            _this.quill = new module.default(_this.$refs.editorElement, configuration);
          } else {
            // parceljs
            _this.quill = new module(_this.$refs.editorElement, configuration);
          }
          _this.initQuill();
        }
      }).then(function () {
        _this.handleLoad();
      });
    }
  },
  methods: {
    renderValue: function renderValue(value) {
      if (this.quill) {
        if (value) this.quill.setContents(this.quill.clipboard.convert(value));else this.quill.setText('');
      }
    },
    initQuill: function initQuill() {
      var _this2 = this;
      this.renderValue(this.value);
      this.quill.on('text-change', function (delta, oldContents, source) {
        if (source === 'user') {
          var html = _this2.$refs.editorElement.children[0].innerHTML;
          var text = _this2.quill.getText().trim();
          if (html === '<p><br></p>') {
            html = '';
          }
          _this2.$emit('input', html);
          _this2.$emit('text-change', {
            htmlValue: html,
            textValue: text,
            delta: delta,
            source: source
          });
        }
      });
    },
    handleLoad: function handleLoad() {
      if (this.quill && this.quill.getModule('toolbar')) {
        this.$emit('load', {
          instance: this.quill
        });
      }
    },
    handleReadOnlyChange: function handleReadOnlyChange() {
      if (this.quill) this.quill.enable(!this.readonly);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.quill = null;
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
    staticClass: "p-editor-container"
  }, [_c("div", {
    ref: "toolbarElement",
    staticClass: "p-editor-toolbar"
  }, [_vm._t("toolbar", function () {
    return [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5)];
  })], 2), _vm._v(" "), _c("div", {
    ref: "editorElement",
    staticClass: "p-editor-content",
    style: _vm.editorStyle
  })]);
};
var __vue_staticRenderFns__ = [function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", {
    staticClass: "ql-formats"
  }, [_c("select", {
    staticClass: "ql-header",
    attrs: {
      defaultValue: "0"
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Heading")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Subheading")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("Normal")])]), _vm._v(" "), _c("select", {
    staticClass: "ql-font"
  }, [_c("option"), _vm._v(" "), _c("option", {
    attrs: {
      value: "serif"
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "monospace"
    }
  })])]);
}, function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", {
    staticClass: "ql-formats"
  }, [_c("button", {
    staticClass: "ql-bold",
    attrs: {
      type: "button"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "ql-italic",
    attrs: {
      type: "button"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "ql-underline",
    attrs: {
      type: "button"
    }
  })]);
}, function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", {
    staticClass: "ql-formats"
  }, [_c("select", {
    staticClass: "ql-color"
  }), _vm._v(" "), _c("select", {
    staticClass: "ql-background"
  })]);
}, function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", {
    staticClass: "ql-formats"
  }, [_c("button", {
    staticClass: "ql-list",
    attrs: {
      value: "ordered",
      type: "button"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "ql-list",
    attrs: {
      value: "bullet",
      type: "button"
    }
  }), _vm._v(" "), _c("select", {
    staticClass: "ql-align"
  }, [_c("option", {
    attrs: {
      defaultValue: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "center"
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "right"
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "justify"
    }
  })])]);
}, function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", {
    staticClass: "ql-formats"
  }, [_c("button", {
    staticClass: "ql-link",
    attrs: {
      type: "button"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "ql-image",
    attrs: {
      type: "button"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "ql-code-block",
    attrs: {
      type: "button"
    }
  })]);
}, function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", {
    staticClass: "ql-formats"
  }, [_c("button", {
    staticClass: "ql-clean",
    attrs: {
      type: "button"
    }
  })]);
}];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-05f82c96_0", {
    source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*!\n * Quill Editor v1.3.3\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  -o-tab-size: 4;\n     tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5rem;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: \"\\2022\";\n}\n.ql-editor ul[data-checked=\"true\"],\n.ql-editor ul[data-checked=\"false\"] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=\"true\"] > li *,\n.ql-editor ul[data-checked=\"false\"] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=\"true\"] > li::before,\n.ql-editor ul[data-checked=\"false\"] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=\"true\"] > li::before {\n  content: \"\\2611\";\n}\n.ql-editor ul[data-checked=\"false\"] > li::before {\n  content: \"\\2610\";\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2rem;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5rem;\n  margin-right: 0.3rem;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3rem;\n  margin-right: -1.5rem;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5rem;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5rem;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) \". \";\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) \". \";\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) \". \";\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) \". \";\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) \". \";\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) \". \";\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) \". \";\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) \". \";\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) \". \";\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) \". \";\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3rem;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5rem;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3rem;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5rem;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6rem;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5rem;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6rem;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5rem;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9rem;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5rem;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9rem;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5rem;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12rem;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5rem;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12rem;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5rem;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15rem;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5rem;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15rem;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5rem;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18rem;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5rem;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18rem;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5rem;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21rem;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5rem;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21rem;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5rem;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24rem;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5rem;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24rem;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5rem;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27rem;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5rem;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27rem;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5rem;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75rem;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5rem;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5rem;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0, 0, 0, 0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n  outline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type=\"file\"],\n.ql-snow .ql-toolbar input.ql-image[type=\"file\"] {\n  display: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n  color: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #06c;\n}\n@media (pointer: coarse) {\n.ql-snow.ql-toolbar button:hover:not(.ql-active),\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n    color: #444;\n}\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #444;\n}\n.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #444;\n}\n}\n.ql-snow {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.ql-snow * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.ql-snow .ql-hidden {\n  display: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n  visibility: hidden;\n}\n.ql-snow .ql-tooltip {\n  position: absolute;\n  -webkit-transform: translateY(10px);\n          transform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px);\n}\n.ql-snow .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-snow .ql-formats:after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n.ql-snow .ql-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n  fill: #444;\n}\n.ql-snow .ql-empty {\n  fill: none;\n}\n.ql-snow .ql-even {\n  fill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n.ql-snow .ql-transparent {\n  opacity: 0.4;\n}\n.ql-snow .ql-direction svg:last-child {\n  display: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n.ql-snow .ql-editor h1 {\n  font-size: 2rem;\n}\n.ql-snow .ql-editor h2 {\n  font-size: 1.5rem;\n}\n.ql-snow .ql-editor h3 {\n  font-size: 1.17rem;\n}\n.ql-snow .ql-editor h4 {\n  font-size: 1rem;\n}\n.ql-snow .ql-editor h5 {\n  font-size: 0.83rem;\n}\n.ql-snow .ql-editor h6 {\n  font-size: 0.67rem;\n}\n.ql-snow .ql-editor a {\n  text-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-snow .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-snow .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-snow .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-snow .ql-editor img {\n  max-width: 100%;\n}\n.ql-snow .ql-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"])::before {\n  content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: \"Normal\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: \"Heading 1\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: \"Heading 2\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: \"Heading 3\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: \"Heading 4\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: \"Heading 5\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: \"Heading 6\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67rem;\n}\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: \"Sans Serif\";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=\"serif\"]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=\"serif\"]::before {\n  content: \"Serif\";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=\"monospace\"]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=\"monospace\"]::before {\n  content: \"Monospace\";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=\"serif\"]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=\"monospace\"]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: \"Normal\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"small\"]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"small\"]::before {\n  content: \"Small\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"large\"]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"large\"]::before {\n  content: \"Large\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"huge\"]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"huge\"]::before {\n  content: \"Huge\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"small\"]::before {\n  font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"large\"]::before {\n  font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"huge\"]::before {\n  font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;\n          box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  -webkit-box-shadow: 0px 0px 5px #ddd;\n          box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type=\"text\"] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: \"Edit\";\n  margin-left: 16px;\n  padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: \"Remove\";\n  margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type=\"text\"] {\n  display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: \"Save\";\n  padding-right: 0px;\n}\n.ql-snow .ql-tooltip[data-mode=\"link\"]::before {\n  content: \"Enter link:\";\n}\n.ql-snow .ql-tooltip[data-mode=\"formula\"]::before {\n  content: \"Enter formula:\";\n}\n.ql-snow .ql-tooltip[data-mode=\"video\"]::before {\n  content: \"Enter video:\";\n}\n.ql-snow a {\n  color: #06c;\n}\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/editor/Editor.vue"],
      "names": [],
      "mappings": ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgKA;;;;;EAKA;AAEA;EACA,8BAAA;UAAA,sBAAA;EACA,yCAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,oBAAA;AACA;AACA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,QAAA;AACA;AACA;EACA,SAAA;EACA,UAAA;AACA;AACA;EACA,8BAAA;UAAA,sBAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,cAAA;KAAA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,qBAAA;EACA,qBAAA;AACA;AACA;EACA,YAAA;AACA;AACA;;;;;;;;;;;EAWA,SAAA;EACA,UAAA;EACA,6EAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;;EAEA,qBAAA;AACA;AACA;EACA,gBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;;EAEA,mBAAA;AACA;AACA;;EAEA,WAAA;EACA,eAAA;EACA,mBAAA;AACA;AACA;EACA,gBAAA;AACA;AACA;EACA,gBAAA;AACA;AACA;EACA,qBAAA;EACA,mBAAA;EACA,aAAA;AACA;AACA;EACA,oBAAA;EACA,oBAAA;EACA,iBAAA;AACA;AACA;EACA,mBAAA;EACA,qBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;;EAEA,qBAAA;AACA;AACA;EACA,6EAAA;EACA,yBAAA;AACA;AACA;EACA,sCAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,0CAAA;AACA;AACA;EACA,sEAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,0CAAA;AACA;AACA;EACA,+DAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,sCAAA;AACA;AACA;EACA,wDAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,0CAAA;AACA;AACA;EACA,iDAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,0CAAA;AACA;AACA;EACA,0CAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,sCAAA;AACA;AACA;EACA,mCAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,0CAAA;AACA;AACA;EACA,4BAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,0CAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,sCAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,oBAAA;AACA;AACA;EACA,mBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,oBAAA;AACA;AACA;EACA,mBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,mBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,mBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,oBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,mBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,oBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,mBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,oBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,mBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,oBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,mBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,oBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,mBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,oBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,cAAA;EACA,eAAA;AACA;AACA;EACA,cAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,WAAA;AACA;AACA;EACA,cAAA;AACA;AACA;EACA,WAAA;AACA;AACA;EACA,WAAA;AACA;AACA;EACA,cAAA;AACA;AACA;EACA,WAAA;AACA;AACA;EACA,WAAA;AACA;AACA;EACA,4CAAA;AACA;AACA;EACA,2CAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,cAAA;EACA,mBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,mBAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,yBAAA;EACA,+BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,kBAAA;EACA,WAAA;AACA;AACA;;EAEA,WAAA;EACA,WAAA;EACA,cAAA;AACA;AACA;;EAEA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,WAAA;AACA;AACA;;EAEA,WAAA;EACA,YAAA;AACA;AACA;;EAEA,aAAA;AACA;AACA;;EAEA,aAAA;AACA;AACA;;;;;;;;;;;;;;EAcA,WAAA;AACA;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA4BA,UAAA;AACA;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA4BA,YAAA;AACA;AACA;AACA;;IAEA,WAAA;AACA;AACA;;;;IAIA,UAAA;AACA;AACA;;;;IAIA,YAAA;AACA;AACA;AACA;EACA,8BAAA;UAAA,sBAAA;AACA;AACA;EACA,8BAAA;UAAA,sBAAA;AACA;AACA;EACA,aAAA;AACA;AACA;;EAEA,kBAAA;AACA;AACA;EACA,kBAAA;EACA,mCAAA;UAAA,2BAAA;AACA;AACA;EACA,eAAA;EACA,qBAAA;AACA;AACA;EACA,oCAAA;UAAA,4BAAA;AACA;AACA;EACA,qBAAA;EACA,sBAAA;AACA;AACA;EACA,WAAA;EACA,WAAA;EACA,cAAA;AACA;AACA;EACA,UAAA;EACA,YAAA;EACA,qBAAA;EACA,sBAAA;EACA,eAAA;AACA;AACA;EACA,UAAA;EACA,YAAA;EACA,qBAAA;EACA,eAAA;AACA;AACA;;EAEA,UAAA;AACA;AACA;EACA,UAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;;EAEA,eAAA;AACA;AACA;EACA,YAAA;AACA;AACA;EACA,aAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,aAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,0BAAA;AACA;AACA;EACA,2BAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;AACA;AACA;;EAEA,yBAAA;EACA,kBAAA;AACA;AACA;EACA,qBAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;AACA;AACA;EACA,cAAA;EACA,gBAAA;AACA;AACA;EACA,yBAAA;EACA,cAAA;EACA,iBAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,WAAA;EACA,qBAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;AACA;AACA;EACA,eAAA;EACA,qBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;AACA;AACA;EACA,qBAAA;EACA,iBAAA;AACA;AACA;EACA,sBAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;AACA;AACA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;AACA;AACA;EACA,WAAA;EACA,UAAA;AACA;AACA;EACA,UAAA;AACA;AACA;EACA,YAAA;AACA;AACA;EACA,cAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;AACA;AACA;;EAEA,WAAA;AACA;AACA;;EAEA,gBAAA;AACA;AACA;;EAEA,UAAA;AACA;AACA;EACA,gBAAA;AACA;AACA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;AACA;AACA;EACA,gBAAA;EACA,YAAA;AACA;AACA;EACA,6BAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;AACA;AACA;EACA,kBAAA;EACA,gBAAA;EACA,QAAA;EACA,QAAA;EACA,WAAA;AACA;AACA;;;;;;EAMA,yBAAA;AACA;AACA;EACA,WAAA;AACA;AACA;;EAEA,iBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,YAAA;AACA;AACA;;EAEA,qBAAA;AACA;AACA;;EAEA,gBAAA;AACA;AACA;;EAEA,oBAAA;AACA;AACA;EACA,4CAAA;AACA;AACA;EACA,2CAAA;AACA;AACA;EACA,WAAA;AACA;AACA;;EAEA,iBAAA;AACA;AACA;;EAEA,gBAAA;AACA;AACA;;EAEA,gBAAA;AACA;AACA;;EAEA,eAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,sBAAA;EACA,8BAAA;UAAA,sBAAA;EACA,+DAAA;EACA,YAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,6BAAA;AACA;AACA;EACA,6BAAA;EACA,gDAAA;UAAA,wCAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;;EAEA,kBAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,sBAAA;EACA,sBAAA;EACA,oCAAA;UAAA,4BAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;AACA;AACA;EACA,qBAAA;EACA,iBAAA;EACA,iBAAA;AACA;AACA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;AACA;AACA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;AACA;AACA;EACA,4BAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AACA;AACA;EACA,iBAAA;EACA,gBAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;;EAEA,aAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,uBAAA;AACA;AACA;EACA,WAAA;AACA;AACA;EACA,sBAAA;AACA",
      "file": "Editor.vue",
      "sourcesContent": ["<template>\n  <div class=\"p-editor-container\">\n    <div ref=\"toolbarElement\" class=\"p-editor-toolbar\">\n      <slot name=\"toolbar\">\n        <span class=\"ql-formats\">\n          <select class=\"ql-header\" defaultValue=\"0\">\n            <option value=\"1\">Heading</option>\n            <option value=\"2\">Subheading</option>\n            <option value=\"0\">Normal</option>\n          </select>\n          <select class=\"ql-font\">\n            <option></option>\n            <option value=\"serif\"></option>\n            <option value=\"monospace\"></option>\n          </select>\n        </span>\n        <span class=\"ql-formats\">\n          <button class=\"ql-bold\" type=\"button\"></button>\n          <button class=\"ql-italic\" type=\"button\"></button>\n          <button class=\"ql-underline\" type=\"button\"></button>\n        </span>\n        <span class=\"ql-formats\">\n          <select class=\"ql-color\"></select>\n          <select class=\"ql-background\"></select>\n        </span>\n        <span class=\"ql-formats\">\n          <button class=\"ql-list\" value=\"ordered\" type=\"button\"></button>\n          <button class=\"ql-list\" value=\"bullet\" type=\"button\"></button>\n          <select class=\"ql-align\">\n            <option defaultValue></option>\n            <option value=\"center\"></option>\n            <option value=\"right\"></option>\n            <option value=\"justify\"></option>\n          </select>\n        </span>\n        <span class=\"ql-formats\">\n          <button class=\"ql-link\" type=\"button\"></button>\n          <button class=\"ql-image\" type=\"button\"></button>\n          <button class=\"ql-code-block\" type=\"button\"></button>\n        </span>\n        <span class=\"ql-formats\">\n          <button class=\"ql-clean\" type=\"button\"></button>\n        </span>\n      </slot>\n    </div>\n    <div ref=\"editorElement\" class=\"p-editor-content\" :style=\"editorStyle\"></div>\n  </div>\n</template>\n\n<script>\nimport { DomHandler } from 'primevue2/utils'\nconst QuillJS = (function () {\n  try {\n    return window.Quill\n  } catch {\n    return null\n  }\n})()\n\nexport default {\n  name: 'Editor',\n  props: {\n    value: String,\n    placeholder: String,\n    readonly: Boolean,\n    formats: Array,\n    editorStyle: null,\n    modules: null\n  },\n  quill: null,\n  watch: {\n    value(newValue, oldValue) {\n      if (newValue !== oldValue && this.quill && !this.quill.hasFocus()) {\n        this.renderValue(newValue)\n      }\n    },\n    readonly() {\n      this.handleReadOnlyChange()\n    }\n  },\n  mounted() {\n    const configuration = {\n      modules: {\n        toolbar: this.$refs.toolbarElement,\n        ...(this.modules || {})\n      },\n      readOnly: this.readonly,\n      theme: 'snow',\n      formats: this.formats,\n      placeholder: this.placeholder\n    }\n    if (QuillJS) {\n      this.quill = new QuillJS(this.$refs.editorElement, configuration)\n      this.initQuill()\n      this.handleLoad()\n    } else {\n      import('quill')\n        .then((module) => {\n          if (module && DomHandler.isExist(this.$refs.editorElement)) {\n            if (module.default) {\n              // webpack\n              this.quill = new module.default(this.$refs.editorElement, configuration)\n            } else {\n              // parceljs\n              this.quill = new module(this.$refs.editorElement, configuration)\n            }\n\n            this.initQuill()\n          }\n        })\n        .then(() => {\n          this.handleLoad()\n        })\n    }\n  },\n  methods: {\n    renderValue(value) {\n      if (this.quill) {\n        if (value)\n          this.quill.setContents(this.quill.clipboard.convert(value))\n        else\n          this.quill.setText('')\n      }\n    },\n    initQuill() {\n      this.renderValue(this.value)\n      this.quill.on('text-change', (delta, oldContents, source) => {\n        if (source === 'user') {\n          let html = this.$refs.editorElement.children[0].innerHTML\n          let text = this.quill.getText().trim()\n          if (html === '<p><br></p>') {\n            html = ''\n          }\n\n          this.$emit('input', html)\n          this.$emit('text-change', {\n            htmlValue: html,\n            textValue: text,\n            delta: delta,\n            source: source\n          })\n        }\n      })\n    },\n    handleLoad() {\n      if (this.quill && this.quill.getModule('toolbar')) {\n        this.$emit('load', { instance: this.quill })\n      }\n    },\n    handleReadOnlyChange() {\n      if (this.quill) this.quill.enable(!this.readonly)\n    }\n  },\n  beforeDestroy() {\n    this.quill = null\n  }\n}\n</script>\n\n<style>\n/*!\n * Quill Editor v1.3.3\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5rem;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: \"\\2022\";\n}\n.ql-editor ul[data-checked=\"true\"],\n.ql-editor ul[data-checked=\"false\"] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=\"true\"] > li *,\n.ql-editor ul[data-checked=\"false\"] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=\"true\"] > li::before,\n.ql-editor ul[data-checked=\"false\"] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=\"true\"] > li::before {\n  content: \"\\2611\";\n}\n.ql-editor ul[data-checked=\"false\"] > li::before {\n  content: \"\\2610\";\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2rem;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5rem;\n  margin-right: 0.3rem;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3rem;\n  margin-right: -1.5rem;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5rem;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5rem;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) \". \";\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) \". \";\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) \". \";\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) \". \";\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) \". \";\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) \". \";\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) \". \";\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) \". \";\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) \". \";\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) \". \";\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3rem;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5rem;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3rem;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5rem;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6rem;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5rem;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6rem;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5rem;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9rem;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5rem;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9rem;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5rem;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12rem;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5rem;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12rem;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5rem;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15rem;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5rem;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15rem;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5rem;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18rem;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5rem;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18rem;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5rem;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21rem;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5rem;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21rem;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5rem;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24rem;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5rem;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24rem;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5rem;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27rem;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5rem;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27rem;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5rem;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75rem;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5rem;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5rem;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0, 0, 0, 0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n  outline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type=\"file\"],\n.ql-snow .ql-toolbar input.ql-image[type=\"file\"] {\n  display: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n  color: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #06c;\n}\n@media (pointer: coarse) {\n  .ql-snow.ql-toolbar button:hover:not(.ql-active),\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n    color: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #444;\n  }\n}\n.ql-snow {\n  box-sizing: border-box;\n}\n.ql-snow * {\n  box-sizing: border-box;\n}\n.ql-snow .ql-hidden {\n  display: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n  visibility: hidden;\n}\n.ql-snow .ql-tooltip {\n  position: absolute;\n  transform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\n  transform: translateY(-10px);\n}\n.ql-snow .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-snow .ql-formats:after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n.ql-snow .ql-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n  fill: #444;\n}\n.ql-snow .ql-empty {\n  fill: none;\n}\n.ql-snow .ql-even {\n  fill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n.ql-snow .ql-transparent {\n  opacity: 0.4;\n}\n.ql-snow .ql-direction svg:last-child {\n  display: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n.ql-snow .ql-editor h1 {\n  font-size: 2rem;\n}\n.ql-snow .ql-editor h2 {\n  font-size: 1.5rem;\n}\n.ql-snow .ql-editor h3 {\n  font-size: 1.17rem;\n}\n.ql-snow .ql-editor h4 {\n  font-size: 1rem;\n}\n.ql-snow .ql-editor h5 {\n  font-size: 0.83rem;\n}\n.ql-snow .ql-editor h6 {\n  font-size: 0.67rem;\n}\n.ql-snow .ql-editor a {\n  text-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-snow .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-snow .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-snow .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-snow .ql-editor img {\n  max-width: 100%;\n}\n.ql-snow .ql-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"])::before {\n  content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: \"Normal\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: \"Heading 1\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: \"Heading 2\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: \"Heading 3\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: \"Heading 4\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: \"Heading 5\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: \"Heading 6\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67rem;\n}\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: \"Sans Serif\";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=\"serif\"]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=\"serif\"]::before {\n  content: \"Serif\";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=\"monospace\"]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=\"monospace\"]::before {\n  content: \"Monospace\";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=\"serif\"]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=\"monospace\"]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: \"Normal\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"small\"]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"small\"]::before {\n  content: \"Small\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"large\"]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"large\"]::before {\n  content: \"Large\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"huge\"]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"huge\"]::before {\n  content: \"Huge\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"small\"]::before {\n  font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"large\"]::before {\n  font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"huge\"]::before {\n  font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type=\"text\"] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: \"Edit\";\n  margin-left: 16px;\n  padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: \"Remove\";\n  margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type=\"text\"] {\n  display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: \"Save\";\n  padding-right: 0px;\n}\n.ql-snow .ql-tooltip[data-mode=\"link\"]::before {\n  content: \"Enter link:\";\n}\n.ql-snow .ql-tooltip[data-mode=\"formula\"]::before {\n  content: \"Enter formula:\";\n}\n.ql-snow .ql-tooltip[data-mode=\"video\"]::before {\n  content: \"Enter video:\";\n}\n.ql-snow a {\n  color: #06c;\n}\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n</style>\n"]
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
