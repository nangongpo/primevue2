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
  name: 'ProgressSpinner',
  props: {
    strokeWidth: {
      type: String,
      default: '2'
    },
    fill: {
      type: String,
      default: 'none'
    },
    animationDuration: {
      type: String,
      default: '2s'
    }
  },
  computed: {
    svgStyle: function svgStyle() {
      return {
        'animation-duration': this.animationDuration
      };
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
    staticClass: "p-progress-spinner",
    attrs: {
      role: "alert",
      "aria-busy": "true"
    }
  }, [_c("svg", {
    staticClass: "p-progress-spinner-svg",
    style: _vm.svgStyle,
    attrs: {
      viewBox: "25 25 50 50"
    }
  }, [_c("circle", {
    staticClass: "p-progress-spinner-circle",
    attrs: {
      cx: "50",
      cy: "50",
      r: "20",
      fill: _vm.fill,
      "stroke-width": _vm.strokeWidth,
      strokeMiterlimit: "10"
    }
  })])]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-76b646c9_0", {
    source: "\n.p-progress-spinner {\n  position: relative;\n  margin: 0 auto;\n  width: 100px;\n  height: 100px;\n  display: inline-block;\n}\n.p-progress-spinner::before {\n  content: '';\n  display: block;\n  padding-top: 100%;\n}\n.p-progress-spinner-svg {\n  -webkit-animation: p-progress-spinner-rotate 2s linear infinite;\n          animation: p-progress-spinner-rotate 2s linear infinite;\n  height: 100%;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.p-progress-spinner-circle {\n  stroke-dasharray: 89, 200;\n  stroke-dashoffset: 0;\n  stroke: #d62d20;\n  -webkit-animation: p-progress-spinner-dash 1.5s ease-in-out infinite,\n    p-progress-spinner-color 6s ease-in-out infinite;\n          animation: p-progress-spinner-dash 1.5s ease-in-out infinite,\n    p-progress-spinner-color 6s ease-in-out infinite;\n  stroke-linecap: round;\n}\n@-webkit-keyframes p-progress-spinner-rotate {\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes p-progress-spinner-rotate {\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@-webkit-keyframes p-progress-spinner-dash {\n0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n}\n100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n}\n}\n@keyframes p-progress-spinner-dash {\n0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n}\n100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n}\n}\n@-webkit-keyframes p-progress-spinner-color {\n100%,\n  0% {\n    stroke: #d62d20;\n}\n40% {\n    stroke: #0057e7;\n}\n66% {\n    stroke: #008744;\n}\n80%,\n  90% {\n    stroke: #ffa700;\n}\n}\n@keyframes p-progress-spinner-color {\n100%,\n  0% {\n    stroke: #d62d20;\n}\n40% {\n    stroke: #0057e7;\n}\n66% {\n    stroke: #008744;\n}\n80%,\n  90% {\n    stroke: #ffa700;\n}\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/progressspinner/ProgressSpinner.vue"],
      "names": [],
      "mappings": ";AA2CA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;EACA,qBAAA;AACA;AAEA;EACA,WAAA;EACA,cAAA;EACA,iBAAA;AACA;AAEA;EACA,+DAAA;UAAA,uDAAA;EACA,YAAA;EACA,uCAAA;UAAA,+BAAA;EACA,WAAA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;AACA;AAEA;EACA,yBAAA;EACA,oBAAA;EACA,eAAA;EACA;oDACA;UADA;oDACA;EACA,qBAAA;AACA;AAEA;AACA;IACA,iCAAA;YAAA,yBAAA;AACA;AACA;AAJA;AACA;IACA,iCAAA;YAAA,yBAAA;AACA;AACA;AAEA;AACA;IACA,wBAAA;IACA,oBAAA;AACA;AACA;IACA,yBAAA;IACA,wBAAA;AACA;AACA;IACA,yBAAA;IACA,yBAAA;AACA;AACA;AAbA;AACA;IACA,wBAAA;IACA,oBAAA;AACA;AACA;IACA,yBAAA;IACA,wBAAA;AACA;AACA;IACA,yBAAA;IACA,yBAAA;AACA;AACA;AAEA;AACA;;IAEA,eAAA;AACA;AACA;IACA,eAAA;AACA;AACA;IACA,eAAA;AACA;AACA;;IAEA,eAAA;AACA;AACA;AAfA;AACA;;IAEA,eAAA;AACA;AACA;IACA,eAAA;AACA;AACA;IACA,eAAA;AACA;AACA;;IAEA,eAAA;AACA;AACA",
      "file": "ProgressSpinner.vue",
      "sourcesContent": ["<template>\n  <div class=\"p-progress-spinner\" role=\"alert\" aria-busy=\"true\">\n    <svg class=\"p-progress-spinner-svg\" viewBox=\"25 25 50 50\" :style=\"svgStyle\">\n      <circle\n        class=\"p-progress-spinner-circle\"\n        cx=\"50\"\n        cy=\"50\"\n        r=\"20\"\n        :fill=\"fill\"\n        :stroke-width=\"strokeWidth\"\n        strokeMiterlimit=\"10\" />\n    </svg>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'ProgressSpinner',\n  props: {\n    strokeWidth: {\n      type: String,\n      default: '2'\n    },\n    fill: {\n      type: String,\n      default: 'none'\n    },\n    animationDuration: {\n      type: String,\n      default: '2s'\n    }\n  },\n  computed: {\n    svgStyle() {\n      return {\n        'animation-duration': this.animationDuration\n      }\n    }\n  }\n}\n</script>\n\n<style>\n.p-progress-spinner {\n  position: relative;\n  margin: 0 auto;\n  width: 100px;\n  height: 100px;\n  display: inline-block;\n}\n\n.p-progress-spinner::before {\n  content: '';\n  display: block;\n  padding-top: 100%;\n}\n\n.p-progress-spinner-svg {\n  animation: p-progress-spinner-rotate 2s linear infinite;\n  height: 100%;\n  transform-origin: center center;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.p-progress-spinner-circle {\n  stroke-dasharray: 89, 200;\n  stroke-dashoffset: 0;\n  stroke: #d62d20;\n  animation: p-progress-spinner-dash 1.5s ease-in-out infinite,\n    p-progress-spinner-color 6s ease-in-out infinite;\n  stroke-linecap: round;\n}\n\n@keyframes p-progress-spinner-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes p-progress-spinner-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n@keyframes p-progress-spinner-color {\n  100%,\n  0% {\n    stroke: #d62d20;\n  }\n  40% {\n    stroke: #0057e7;\n  }\n  66% {\n    stroke: #008744;\n  }\n  80%,\n  90% {\n    stroke: #ffa700;\n  }\n}\n</style>\n"]
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
