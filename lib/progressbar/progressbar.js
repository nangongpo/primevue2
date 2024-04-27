this.primevue2 = this.primevue2 || {};
this.primevue2.progressbar = (function () {
  'use strict';

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
    name: 'ProgressBar',
    props: {
      value: {
        type: Number,
        default: null
      },
      mode: {
        type: String,
        default: 'determinate'
      },
      showValue: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      containerClass: function containerClass() {
        return ['p-progressbar p-component', {
          'p-progressbar-determinate': this.determinate,
          'p-progressbar-indeterminate': this.indeterminate
        }];
      },
      progressStyle: function progressStyle() {
        return {
          width: this.value + '%',
          display: 'flex'
        };
      },
      indeterminate: function indeterminate() {
        return this.mode === 'indeterminate';
      },
      determinate: function determinate() {
        return this.mode === 'determinate';
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
        role: "progressbar",
        "aria-valuemin": "0",
        "aria-valuenow": _vm.value,
        "aria-valuemax": "100"
      }
    }, [_vm.determinate ? _c("div", {
      staticClass: "p-progressbar-value p-progressbar-value-animate",
      style: _vm.progressStyle
    }, [_vm.value != null && _vm.value !== 0 && _vm.showValue ? _c("div", {
      staticClass: "p-progressbar-label"
    }, [_vm._t("default", function () {
      return [_vm._v(_vm._s(_vm.value + "%"))];
    })], 2) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.indeterminate ? _c("div", {
      staticClass: "p-progressbar-indeterminate-container"
    }, [_c("div", {
      staticClass: "p-progressbar-value p-progressbar-value-animate"
    })]) : _vm._e()]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-b9bbf23a_0", {
      source: "\n.p-progressbar {\n  position: relative;\n  overflow: hidden;\n}\n.p-progressbar-determinate .p-progressbar-value {\n  height: 100%;\n  width: 0%;\n  position: absolute;\n  display: none;\n  border: 0 none;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.p-progressbar-determinate .p-progressbar-label {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.p-progressbar-determinate .p-progressbar-value-animate {\n  -webkit-transition: width 1s ease-in-out;\n  transition: width 1s ease-in-out;\n}\n.p-progressbar-indeterminate .p-progressbar-value::before {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: p-progressbar-indeterminate-anim 2.1s\n    cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n  animation: p-progressbar-indeterminate-anim 2.1s\n    cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n.p-progressbar-indeterminate .p-progressbar-value::after {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s\n    cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  animation: p-progressbar-indeterminate-anim-short 2.1s\n    cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  -webkit-animation-delay: 1.15s;\n  animation-delay: 1.15s;\n}\n@-webkit-keyframes p-progressbar-indeterminate-anim {\n0% {\n    left: -35%;\n    right: 100%;\n}\n60% {\n    left: 100%;\n    right: -90%;\n}\n100% {\n    left: 100%;\n    right: -90%;\n}\n}\n@keyframes p-progressbar-indeterminate-anim {\n0% {\n    left: -35%;\n    right: 100%;\n}\n60% {\n    left: 100%;\n    right: -90%;\n}\n100% {\n    left: 100%;\n    right: -90%;\n}\n}\n@-webkit-keyframes p-progressbar-indeterminate-anim-short {\n0% {\n    left: -200%;\n    right: 100%;\n}\n60% {\n    left: 107%;\n    right: -8%;\n}\n100% {\n    left: 107%;\n    right: -8%;\n}\n}\n@keyframes p-progressbar-indeterminate-anim-short {\n0% {\n    left: -200%;\n    right: 100%;\n}\n60% {\n    left: 107%;\n    right: -8%;\n}\n100% {\n    left: 107%;\n    right: -8%;\n}\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/progressbar/ProgressBar.vue"],
        "names": [],
        "mappings": ";AAyDA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,gBAAA;AACA;AAEA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;AACA;AAEA;EACA,wCAAA;EAAA,gCAAA;AACA;AAEA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,wBAAA;EACA;oDACA;EACA;oDACA;AACA;AAEA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,wBAAA;EACA;+CACA;EACA;+CACA;EACA,8BAAA;EACA,sBAAA;AACA;AAEA;AACA;IACA,UAAA;IACA,WAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA;AACA;AAEA;AACA;IACA,UAAA;IACA,WAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA;AACA;AAEA;AACA;IACA,WAAA;IACA,WAAA;AACA;AACA;IACA,UAAA;IACA,UAAA;AACA;AACA;IACA,UAAA;IACA,UAAA;AACA;AACA;AAEA;AACA;IACA,WAAA;IACA,WAAA;AACA;AACA;IACA,UAAA;IACA,UAAA;AACA;AACA;IACA,UAAA;IACA,UAAA;AACA;AACA",
        "file": "ProgressBar.vue",
        "sourcesContent": ["<template>\n  <div role=\"progressbar\" :class=\"containerClass\" aria-valuemin=\"0\" :aria-valuenow=\"value\" aria-valuemax=\"100\">\n    <div v-if=\"determinate\" class=\"p-progressbar-value p-progressbar-value-animate\" :style=\"progressStyle\">\n      <div v-if=\"value != null && value !== 0 && showValue\" class=\"p-progressbar-label\">\n        <slot>{{ value + \"%\" }}</slot>\n      </div>\n    </div>\n    <div v-if=\"indeterminate\" class=\"p-progressbar-indeterminate-container\">\n      <div class=\"p-progressbar-value p-progressbar-value-animate\"></div>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'ProgressBar',\n  props: {\n    value: {\n      type: Number,\n      default: null\n    },\n    mode: {\n      type: String,\n      default: 'determinate'\n    },\n    showValue: {\n      type: Boolean,\n      default: true\n    }\n  },\n  computed: {\n    containerClass() {\n      return [\n        'p-progressbar p-component',\n        {\n          'p-progressbar-determinate': this.determinate,\n          'p-progressbar-indeterminate': this.indeterminate\n        }\n      ]\n    },\n    progressStyle() {\n      return {\n        width: this.value + '%',\n        display: 'flex'\n      }\n    },\n    indeterminate() {\n      return this.mode === 'indeterminate'\n    },\n    determinate() {\n      return this.mode === 'determinate'\n    }\n  }\n}\n</script>\n\n<style>\n.p-progressbar {\n  position: relative;\n  overflow: hidden;\n}\n\n.p-progressbar-determinate .p-progressbar-value {\n  height: 100%;\n  width: 0%;\n  position: absolute;\n  display: none;\n  border: 0 none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.p-progressbar-determinate .p-progressbar-label {\n  display: inline-flex;\n}\n\n.p-progressbar-determinate .p-progressbar-value-animate {\n  transition: width 1s ease-in-out;\n}\n\n.p-progressbar-indeterminate .p-progressbar-value::before {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: p-progressbar-indeterminate-anim 2.1s\n    cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n  animation: p-progressbar-indeterminate-anim 2.1s\n    cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n\n.p-progressbar-indeterminate .p-progressbar-value::after {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s\n    cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  animation: p-progressbar-indeterminate-anim-short 2.1s\n    cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  -webkit-animation-delay: 1.15s;\n  animation-delay: 1.15s;\n}\n\n@-webkit-keyframes p-progressbar-indeterminate-anim {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@keyframes p-progressbar-indeterminate-anim {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@-webkit-keyframes p-progressbar-indeterminate-anim-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n\n@keyframes p-progressbar-indeterminate-anim-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n</style>\n"]
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
