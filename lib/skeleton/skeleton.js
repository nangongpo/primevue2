this.primevue2 = this.primevue2 || {};
this.primevue2.skeleton = (function () {
  'use strict';

  //
  //
  //
  //

  var script = {
    name: 'Skeleton',
    props: {
      shape: {
        type: String,
        default: 'rectangle'
      },
      size: {
        type: String,
        default: null
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '1rem'
      },
      borderRadius: {
        type: String,
        default: null
      },
      animation: {
        type: String,
        default: 'wave'
      }
    },
    computed: {
      containerClass: function containerClass() {
        return ['p-skeleton p-component', {
          'p-skeleton-circle': this.shape === 'circle',
          'p-skeleton-none': this.animation === 'none'
        }];
      },
      containerStyle: function containerStyle() {
        if (this.size) return {
          width: this.size,
          height: this.size,
          borderRadius: this.borderRadius
        };else return {
          width: this.width,
          height: this.height,
          borderRadius: this.borderRadius
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
      class: _vm.containerClass,
      style: _vm.containerStyle
    });
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-d4f0f47a_0", {
      source: "\n.p-skeleton {\n  position: relative;\n  overflow: hidden;\n}\n.p-skeleton::after {\n  content: \"\";\n  -webkit-animation: p-skeleton-animation 1.2s infinite;\n          animation: p-skeleton-animation 1.2s infinite;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  z-index: 1;\n}\n.p-skeleton.p-skeleton-circle {\n  border-radius: 50%;\n}\n.p-skeleton-none::after {\n -webkit-animation: none;\n         animation: none;\n}\n@-webkit-keyframes p-skeleton-animation {\nfrom {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%);\n}\nto {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n}\n}\n@keyframes p-skeleton-animation {\nfrom {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%);\n}\nto {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n}\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/skeleton/Skeleton.vue"],
        "names": [],
        "mappings": ";AAmDA;EACA,kBAAA;EACA,gBAAA;AACA;AACA;EACA,WAAA;EACA,qDAAA;UAAA,6CAAA;EACA,YAAA;EACA,OAAA;EACA,kBAAA;EACA,QAAA;EACA,MAAA;EACA,oCAAA;UAAA,4BAAA;EACA,UAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;CACA,uBAAA;SAAA,eAAA;AACA;AACA;AACA;MACA,oCAAA;cAAA,4BAAA;AACA;AACA;MACA,mCAAA;cAAA,2BAAA;AACA;AACA;AAPA;AACA;MACA,oCAAA;cAAA,4BAAA;AACA;AACA;MACA,mCAAA;cAAA,2BAAA;AACA;AACA",
        "file": "Skeleton.vue",
        "sourcesContent": ["<template>\n  <div :style=\"containerStyle\" :class=\"containerClass\"></div>\n</template>\n\n<script>\nexport default {\n  name: 'Skeleton',\n  props: {\n    shape: {\n      type: String,\n      default: 'rectangle'\n    },\n    size: {\n      type: String,\n      default: null\n    },\n    width: {\n      type: String,\n      default: '100%'\n    },\n    height: {\n      type: String,\n      default: '1rem'\n    },\n    borderRadius: {\n      type: String,\n      default: null\n    },\n    animation: {\n      type: String,\n      default: 'wave'\n    }\n  },\n  computed: {\n    containerClass() {\n      return ['p-skeleton p-component', {\n        'p-skeleton-circle': this.shape === 'circle',\n        'p-skeleton-none': this.animation === 'none'\n      }]\n    },\n    containerStyle() {\n      if (this.size)\n        return { width: this.size, height: this.size, borderRadius: this.borderRadius }\n      else\n        return { width: this.width, height: this.height, borderRadius: this.borderRadius }\n    }\n  }\n}\n</script>\n\n<style>\n.p-skeleton {\n  position: relative;\n  overflow: hidden;\n}\n.p-skeleton::after {\n  content: \"\";\n  animation: p-skeleton-animation 1.2s infinite;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translateX(-100%);\n  z-index: 1;\n}\n.p-skeleton.p-skeleton-circle {\n  border-radius: 50%;\n}\n.p-skeleton-none::after {\n animation: none;\n}\n@keyframes p-skeleton-animation {\n  from {\n      transform: translateX(-100%);\n  }\n  to {\n      transform: translateX(100%);\n  }\n}\n</style>\n"]
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

  return __vue_component__;

})();
