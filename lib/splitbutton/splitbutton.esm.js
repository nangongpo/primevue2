import Button from 'primevue2/button';
import Menu from 'primevue2/menu';
import { UniqueComponentId } from 'primevue2/utils';

//
var script = {
  name: 'SplitButton',
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    model: {
      type: Array,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: String,
      default: null
    },
    autoZIndex: {
      type: Boolean,
      default: true
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    appendTo: {
      type: String,
      default: null
    }
  },
  methods: {
    onDefaultButtonClick: function onDefaultButtonClick(event) {
      this.$emit('click', event);
      this.$refs.menu.hide();
    },
    onDropdownButtonClick: function onDropdownButtonClick() {
      this.$refs.menu.toggle({
        currentTarget: this.$el,
        relativeAlign: this.appendTo == null
      });
    }
  },
  computed: {
    ariaId: function ariaId() {
      return UniqueComponentId();
    }
  },
  components: {
    'PVSButton': Button,
    'PVSMenu': Menu
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
    staticClass: "p-splitbutton p-component"
  }, [_c("PVSButton", {
    staticClass: "p-splitbutton-defaultbutton",
    attrs: {
      type: "button",
      icon: _vm.icon,
      label: _vm.label,
      disabled: _vm.disabled,
      tabindex: _vm.tabindex
    },
    on: {
      click: _vm.onDefaultButtonClick
    }
  }), _vm._v(" "), _c("PVSButton", {
    staticClass: "p-splitbutton-menubutton",
    attrs: {
      type: "button",
      icon: "pi pi-chevron-down",
      disabled: _vm.disabled,
      "aria-haspopup": "true",
      "aria-controls": _vm.ariaId + "_overlay"
    },
    on: {
      click: _vm.onDropdownButtonClick
    }
  }), _vm._v(" "), _c("PVSMenu", {
    ref: "menu",
    attrs: {
      id: _vm.ariaId + "_overlay",
      model: _vm.model,
      popup: true,
      autoZIndex: _vm.autoZIndex,
      baseZIndex: _vm.baseZIndex,
      appendTo: _vm.appendTo
    }
  })], 1);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-25c7afc4_0", {
    source: "\n.p-splitbutton {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n}\n.p-splitbutton .p-splitbutton-defaultbutton,\n.p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,\n.p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: 0 none;\n}\n.p-splitbutton-menubutton,\n.p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,\n.p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button  {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.p-splitbutton .p-menu {\n  min-width: 100%;\n}\n.p-fluid .p-splitbutton  {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/splitbutton/SplitButton.vue"],
      "names": [],
      "mappings": ";AA4FA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,kBAAA;AACA;AAEA;;;EAGA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;EACA,0BAAA;EACA,6BAAA;EACA,oBAAA;AACA;AAEA;;;EAGA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;EACA,4BAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA",
      "file": "SplitButton.vue",
      "sourcesContent": ["<template>\n  <div class=\"p-splitbutton p-component\">\n    <PVSButton\n      type=\"button\"\n      class=\"p-splitbutton-defaultbutton\"\n      :icon=\"icon\"\n      :label=\"label\"\n      @click=\"onDefaultButtonClick\"\n      :disabled=\"disabled\"\n      :tabindex=\"tabindex\" />\n    <PVSButton\n      type=\"button\"\n      class=\"p-splitbutton-menubutton\"\n      icon=\"pi pi-chevron-down\"\n      @click=\"onDropdownButtonClick\"\n      :disabled=\"disabled\"\n      aria-haspopup=\"true\"\n      :aria-controls=\"ariaId + '_overlay'\" />\n    <PVSMenu\n      :id=\"ariaId + '_overlay'\"\n      ref=\"menu\"\n      :model=\"model\"\n      :popup=\"true\"\n      :autoZIndex=\"autoZIndex\"\n      :baseZIndex=\"baseZIndex\"\n      :appendTo=\"appendTo\" />\n  </div>\n</template>\n\n<script>\nimport Button from 'primevue2/button'\nimport Menu from 'primevue2/menu'\nimport { UniqueComponentId } from 'primevue2/utils'\n\nexport default {\n  name: 'SplitButton',\n  props: {\n    label: {\n      type: String,\n      default: null\n    },\n    icon: {\n      type: String,\n      default: null\n    },\n    model: {\n      type: Array,\n      default: null\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    },\n    tabindex: {\n      type: String,\n      default: null\n    },\n    autoZIndex: {\n      type: Boolean,\n      default: true\n    },\n    baseZIndex: {\n      type: Number,\n      default: 0\n    },\n    appendTo: {\n      type: String,\n      default: null\n    }\n  },\n  methods: {\n    onDefaultButtonClick(event) {\n      this.$emit('click', event)\n      this.$refs.menu.hide()\n    },\n    onDropdownButtonClick() {\n      this.$refs.menu.toggle({ currentTarget: this.$el, relativeAlign: this.appendTo == null })\n    }\n  },\n  computed: {\n    ariaId() {\n      return UniqueComponentId()\n    }\n  },\n  components: {\n    'PVSButton': Button,\n    'PVSMenu': Menu\n  }\n}\n</script>\n\n<style>\n.p-splitbutton {\n  display: inline-flex;\n  position: relative;\n}\n\n.p-splitbutton .p-splitbutton-defaultbutton,\n.p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,\n.p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button {\n  flex: 1 1 auto;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: 0 none;\n}\n\n.p-splitbutton-menubutton,\n.p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,\n.p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button  {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.p-splitbutton .p-menu {\n  min-width: 100%;\n}\n\n.p-fluid .p-splitbutton  {\n  display: flex;\n}\n</style>\n"]
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
