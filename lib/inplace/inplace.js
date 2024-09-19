this.primevue2 = this.primevue2 || {};
this.primevue2.inplace = (function (Button) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);

  //
  var script = {
    name: 'Inplace',
    props: {
      closable: {
        type: Boolean,
        defaault: false
      },
      active: {
        type: Boolean,
        defaault: false
      }
    },
    watch: {
      active: function active(newValue) {
        this.d_active = newValue;
      }
    },
    data: function data() {
      return {
        d_active: this.active
      };
    },
    methods: {
      open: function open(event) {
        this.$emit('open', event);
        this.d_active = true;
        this.$emit('update:active', true);
      },
      close: function close(event) {
        this.$emit('close', event);
        this.d_active = false;
        this.$emit('update:active', false);
      }
    },
    computed: {
      containerClass: function containerClass() {
        return ['p-inplace p-component', {
          'p-inplace-closable': this.closable
        }];
      }
    },
    components: {
      'IPButton': Button__default["default"]
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
      class: _vm.containerClass
    }, [!_vm.d_active ? _c("div", {
      staticClass: "p-inplace-display",
      attrs: {
        tabindex: _vm.$attrs.tabindex || "0"
      },
      on: {
        click: _vm.open,
        keydown: function keydown($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
            return null;
          }
          return _vm.open.apply(null, arguments);
        }
      }
    }, [_vm._t("display")], 2) : _c("div", {
      staticClass: "p-inplace-content"
    }, [_vm._t("content"), _vm._v(" "), _vm.closable ? _c("IPButton", {
      attrs: {
        icon: "pi pi-times"
      },
      on: {
        click: _vm.close
      }
    }) : _vm._e()], 2)]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-06e2646d_0", {
      source: "\n.p-inplace .p-inplace-display {\n  display: inline;\n  cursor: pointer;\n}\n.p-inplace .p-inplace-content {\n  display: inline;\n}\n.p-fluid .p-inplace.p-inplace-closable .p-inplace-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  width: 1%;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/inplace/Inplace.vue"],
        "names": [],
        "mappings": ";AAkEA;EACA,eAAA;EACA,eAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA;AAEA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;EACA,SAAA;AACA",
        "file": "Inplace.vue",
        "sourcesContent": ["<template>\n  <div :class=\"containerClass\">\n    <div\n      class=\"p-inplace-display\"\n      :tabindex=\"$attrs.tabindex || '0'\"\n      v-if=\"!d_active\"\n      @click=\"open\"\n      @keydown.enter=\"open\">\n      <slot name=\"display\"></slot>\n    </div>\n    <div class=\"p-inplace-content\" v-else>\n      <slot name=\"content\"></slot>\n      <IPButton v-if=\"closable\" icon=\"pi pi-times\" @click=\"close\"></IPButton>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Button from 'primevue2/button'\n\nexport default {\n  name: 'Inplace',\n  props: {\n    closable: {\n      type: Boolean,\n      defaault: false\n    },\n    active: {\n      type: Boolean,\n      defaault: false\n    }\n  },\n  watch: {\n    active(newValue) {\n      this.d_active = newValue\n    }\n  },\n  data() {\n    return {\n      d_active: this.active\n    }\n  },\n  methods: {\n    open(event) {\n      this.$emit('open', event)\n      this.d_active = true\n      this.$emit('update:active', true)\n    },\n    close(event) {\n      this.$emit('close', event)\n      this.d_active = false\n      this.$emit('update:active', false)\n    }\n  },\n  computed: {\n    containerClass() {\n      return ['p-inplace p-component', { 'p-inplace-closable': this.closable }]\n    }\n  },\n  components: {\n    'IPButton': Button\n  }\n}\n</script>\n\n<style>\n.p-inplace .p-inplace-display {\n  display: inline;\n  cursor: pointer;\n}\n\n.p-inplace .p-inplace-content {\n  display: inline;\n}\n\n.p-fluid .p-inplace.p-inplace-closable .p-inplace-content {\n  display: flex;\n}\n\n.p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {\n  flex: 1 1 auto;\n  width: 1%;\n}\n</style>\n"]
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

})(primevue2.button);
