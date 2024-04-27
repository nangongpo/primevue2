//
//
//
//
//
//
//
//

var script = {
  name: 'Divider',
  props: {
    align: {
      type: String,
      default: null
    },
    layout: {
      type: String,
      default: 'horizontal'
    },
    type: {
      type: String,
      default: 'solid'
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-divider p-component', 'p-divider-' + this.layout, 'p-divider-' + this.type, {
        'p-divider-left': this.layout === 'horizontal' && (!this.align || this.align === 'left')
      }, {
        'p-divider-center': this.layout === 'horizontal' && this.align === 'center'
      }, {
        'p-divider-right': this.layout === 'horizontal' && this.align === 'right'
      }, {
        'p-divider-top': this.layout === 'vertical' && this.align === 'top'
      }, {
        'p-divider-center': this.layout === 'vertical' && (!this.align || this.align === 'center')
      }, {
        'p-divider-bottom': this.layout === 'vertical' && this.align === 'bottom'
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
    attrs: {
      role: "separator"
    }
  }, [_vm.$slots.default ? _c("div", {
    staticClass: "p-divider-content"
  }, [_vm._t("default")], 2) : _vm._e()]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-63305bf2_0", {
    source: "\n.p-divider-horizontal {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  position: relative;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-divider-horizontal:before {\n  position: absolute;\n  display: block;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  content: \"\";\n}\n.p-divider-horizontal.p-divider-left {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.p-divider-horizontal.p-divider-right {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.p-divider-horizontal.p-divider-center {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-divider-content {\n  z-index: 1;\n}\n.p-divider-vertical {\n  min-height: 100%;\n  margin: 0 1rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-divider-vertical:before {\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 50%;\n  height: 100%;\n  content: \"\";\n}\n.p-divider-vertical.p-divider-top {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.p-divider-vertical.p-divider-center {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-divider-vertical.p-divider-bottom {\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.p-divider-solid.p-divider-horizontal:before {\n  border-top-style: solid;\n}\n.p-divider-solid.p-divider-vertical:before {\n  border-left-style: solid;\n}\n.p-divider-dashed.p-divider-horizontal:before {\n  border-top-style: dashed;\n}\n.p-divider-dashed.p-divider-vertical:before {\n  border-left-style: dashed;\n}\n.p-divider-dotted.p-divider-horizontal:before {\n  border-top-style: dotted;\n}\n.p-divider-dotted.p-divider-horizontal:before {\n  border-left-style: dotted;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/divider/Divider.vue"],
      "names": [],
      "mappings": ";AAyCA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AACA;EACA,kBAAA;EACA,cAAA;EACA,QAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;AACA;AACA;EACA,uBAAA;EAAA,mCAAA;MAAA,oBAAA;UAAA,2BAAA;AACA;AACA;EACA,qBAAA;EAAA,iCAAA;MAAA,kBAAA;UAAA,yBAAA;AACA;AACA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AACA;EACA,UAAA;AACA;AACA;EACA,gBAAA;EACA,cAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,kBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AACA;EACA,kBAAA;EACA,cAAA;EACA,MAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;AACA;AACA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AACA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AACA;EACA,sBAAA;EAAA,6BAAA;MAAA,mBAAA;UAAA,qBAAA;AACA;AACA;EACA,uBAAA;AACA;AACA;EACA,wBAAA;AACA;AACA;EACA,wBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,wBAAA;AACA;AACA;EACA,yBAAA;AACA",
      "file": "Divider.vue",
      "sourcesContent": ["<template>\n  <div :class=\"containerClass\" role=\"separator\">\n    <div class=\"p-divider-content\" v-if=\"$slots.default\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Divider',\n  props: {\n    align: {\n      type: String,\n      default: null\n    },\n    layout: {\n      type: String,\n      default: 'horizontal'\n    },\n    type: {\n      type: String,\n      default: 'solid'\n    }\n  },\n  computed: {\n    containerClass() {\n      return ['p-divider p-component', 'p-divider-' + this.layout, 'p-divider-' + this.type,\n        { 'p-divider-left': this.layout === 'horizontal' && (!this.align || this.align === 'left') },\n        { 'p-divider-center': this.layout === 'horizontal' && this.align === 'center' },\n        { 'p-divider-right': this.layout === 'horizontal' && this.align === 'right' },\n        { 'p-divider-top': this.layout === 'vertical' && (this.align === 'top') },\n        { 'p-divider-center': this.layout === 'vertical' && (!this.align || this.align === 'center') },\n        { 'p-divider-bottom': this.layout === 'vertical' && this.align === 'bottom' }\n      ]\n    }\n  }\n}\n</script>\n\n<style>\n.p-divider-horizontal {\n  display: flex;\n  width: 100%;\n  position: relative;\n  align-items: center;\n}\n.p-divider-horizontal:before {\n  position: absolute;\n  display: block;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  content: \"\";\n}\n.p-divider-horizontal.p-divider-left {\n  justify-content: flex-start;\n}\n.p-divider-horizontal.p-divider-right {\n  justify-content: flex-end;\n}\n.p-divider-horizontal.p-divider-center {\n  justify-content: center;\n}\n.p-divider-content {\n  z-index: 1;\n}\n.p-divider-vertical {\n  min-height: 100%;\n  margin: 0 1rem;\n  display: flex;\n  position: relative;\n  justify-content: center;\n}\n.p-divider-vertical:before {\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 50%;\n  height: 100%;\n  content: \"\";\n}\n.p-divider-vertical.p-divider-top {\n  align-items: flex-start;\n}\n.p-divider-vertical.p-divider-center {\n  align-items: center;\n}\n.p-divider-vertical.p-divider-bottom {\n  align-items: flex-end;\n}\n.p-divider-solid.p-divider-horizontal:before {\n  border-top-style: solid;\n}\n.p-divider-solid.p-divider-vertical:before {\n  border-left-style: solid;\n}\n.p-divider-dashed.p-divider-horizontal:before {\n  border-top-style: dashed;\n}\n.p-divider-dashed.p-divider-vertical:before {\n  border-left-style: dashed;\n}\n.p-divider-dotted.p-divider-horizontal:before {\n  border-top-style: dotted;\n}\n.p-divider-dotted.p-divider-horizontal:before {\n  border-left-style: dotted;\n}\n</style>\n"]
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
