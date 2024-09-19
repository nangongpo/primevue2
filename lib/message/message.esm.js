import Ripple from 'primevue2/ripple';

//
var script = {
  name: 'Message',
  props: {
    severity: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: true
    },
    sticky: {
      type: Boolean,
      default: true
    },
    life: {
      type: Number,
      default: 3000
    },
    icon: {
      type: String,
      default: null
    }
  },
  timeout: null,
  data: function data() {
    return {
      visible: true
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (!this.sticky) {
      setTimeout(function () {
        _this.visible = false;
      }, this.life);
    }
  },
  methods: {
    close: function close(event) {
      this.visible = false;
      this.$emit('close', event);
    }
  },
  computed: {
    containerClass: function containerClass() {
      return 'p-message p-component p-message-' + this.severity;
    },
    iconClass: function iconClass() {
      return ['p-message-icon pi', this.icon ? this.icon : {
        'pi-info-circle': this.severity === 'info',
        'pi-check': this.severity === 'success',
        'pi-exclamation-triangle': this.severity === 'warn',
        'pi-times-circle': this.severity === 'error'
      }];
    }
  },
  directives: {
    'ripple': Ripple
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
      name: "p-message"
    }
  }, [_vm.visible ? _c("div", {
    class: _vm.containerClass,
    attrs: {
      role: "alert"
    }
  }, [_c("div", {
    staticClass: "p-message-wrapper"
  }, [_c("span", {
    class: _vm.iconClass
  }), _vm._v(" "), _c("div", {
    staticClass: "p-message-text"
  }, [_vm._t("default")], 2), _vm._v(" "), _vm.closable ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-message-close p-link",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.close($event);
      }
    }
  }, [_c("i", {
    staticClass: "p-message-close-icon pi pi-times"
  })]) : _vm._e()])]) : _vm._e()]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-78af91fa_0", {
    source: "\n.p-message-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-message-close {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-message-close.p-link {\n  margin-left: auto;\n  overflow: hidden;\n  position: relative;\n}\n.p-message-enter {\n  opacity: 0;\n}\n.p-message-enter-active {\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s;\n}\n.p-message.p-message-leave {\n  max-height: 1000px;\n}\n.p-message.p-message-leave-to {\n  max-height: 0;\n  opacity: 0;\n  margin: 0 !important;\n}\n.p-message-leave-active {\n  overflow: hidden;\n  -webkit-transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;\n  -webkit-transition: max-height .3 cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;\n  transition: max-height .3 cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;\n}\n.p-message-leave-active .p-message-close {\n  display: none;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/message/Message.vue"],
      "names": [],
      "mappings": ";AAkFA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AAEA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;EACA,+BAAA;EACA,uBAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,aAAA;EACA,UAAA;EACA,oBAAA;AACA;AAEA;EACA,gBAAA;EACA,oFAAA;EACA,mFAAA;EAAA,2EAAA;AACA;AAEA;EACA,aAAA;AACA",
      "file": "Message.vue",
      "sourcesContent": ["<template>\n  <transition name=\"p-message\">\n    <div :class=\"containerClass\" v-if=\"visible\" role=\"alert\">\n      <div class=\"p-message-wrapper\">\n        <span :class=\"iconClass\"></span>\n        <div class=\"p-message-text\">\n          <slot></slot>\n        </div>\n        <button class=\"p-message-close p-link\" @click=\"close($event)\" v-if=\"closable\" type=\"button\" v-ripple>\n          <i class=\"p-message-close-icon pi pi-times\"></i>\n        </button>\n      </div>\n    </div>\n  </transition>\n</template>\n\n<script>\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'Message',\n  props: {\n    severity: {\n      type: String,\n      default: 'info'\n    },\n    closable: {\n      type: Boolean,\n      default: true\n    },\n    sticky: {\n      type: Boolean,\n      default: true\n    },\n    life: {\n      type: Number,\n      default: 3000\n    },\n    icon: {\n      type: String,\n      default: null\n    }\n  },\n  timeout: null,\n  data() {\n    return {\n      visible: true\n    }\n  },\n  mounted() {\n    if (!this.sticky) {\n      setTimeout(() => {\n        this.visible = false\n      }, this.life)\n    }\n  },\n  methods: {\n    close(event) {\n      this.visible = false\n      this.$emit('close', event)\n    }\n  },\n  computed: {\n    containerClass() {\n      return 'p-message p-component p-message-' + this.severity\n    },\n    iconClass() {\n      return ['p-message-icon pi', this.icon ? this.icon : {\n        'pi-info-circle': this.severity === 'info',\n        'pi-check': this.severity === 'success',\n        'pi-exclamation-triangle': this.severity === 'warn',\n        'pi-times-circle': this.severity === 'error'\n      }]\n    }\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-message-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.p-message-close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.p-message-close.p-link {\n  margin-left: auto;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-message-enter {\n  opacity: 0;\n}\n\n.p-message-enter-active {\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s;\n}\n\n.p-message.p-message-leave {\n  max-height: 1000px;\n}\n\n.p-message.p-message-leave-to {\n  max-height: 0;\n  opacity: 0;\n  margin: 0 !important;\n}\n\n.p-message-leave-active {\n  overflow: hidden;\n  -webkit-transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;\n  transition: max-height .3 cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;\n}\n\n.p-message-leave-active .p-message-close {\n  display: none;\n}\n</style>\n"]
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
