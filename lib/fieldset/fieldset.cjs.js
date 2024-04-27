'use strict';

var utils = require('primevue2/utils');
var Ripple = require('primevue2/ripple');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

//
var script = {
  name: 'Fieldset',
  props: {
    legend: String,
    toggleable: Boolean,
    collapsed: Boolean
  },
  data: function data() {
    return {
      d_collapsed: this.collapsed
    };
  },
  methods: {
    toggle: function toggle(event) {
      this.d_collapsed = !this.d_collapsed;
      this.$emit('update:collapsed', this.d_collapsed);
      this.$emit('toggle', {
        originalEvent: event,
        value: this.d_collapsed
      });
    }
  },
  computed: {
    iconClass: function iconClass() {
      return ['p-fieldset-toggler pi ', {
        'pi-minus': !this.d_collapsed,
        'pi-plus': this.d_collapsed
      }];
    },
    ariaId: function ariaId() {
      return utils.UniqueComponentId();
    }
  },
  directives: {
    ripple: Ripple__default["default"]
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
  return _c("fieldset", {
    class: ["p-fieldset p-component", {
      "p-fieldset-toggleable": _vm.toggleable
    }]
  }, [_c("legend", {
    staticClass: "p-fieldset-legend"
  }, [!_vm.toggleable ? _vm._t("legend", function () {
    return [_c("span", {
      staticClass: "p-fieldset-legend-text",
      attrs: {
        id: _vm.ariaId + "_header"
      }
    }, [_vm._v(_vm._s(_vm.legend))])];
  }) : _vm._e(), _vm._v(" "), _vm.toggleable ? _c("a", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    attrs: {
      tabindex: "0",
      id: _vm.ariaId + "_header",
      "aria-controls": _vm.ariaId + "_content",
      "aria-expanded": !_vm.d_collapsed
    },
    on: {
      click: _vm.toggle,
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.toggle.apply(null, arguments);
      }
    }
  }, [_c("span", {
    class: _vm.iconClass
  }), _vm._v(" "), _vm._t("legend", function () {
    return [_c("span", {
      staticClass: "p-fieldset-legend-text"
    }, [_vm._v(_vm._s(_vm.legend))])];
  })], 2) : _vm._e()], 2), _vm._v(" "), _c("transition", {
    attrs: {
      name: "p-toggleable-content"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.d_collapsed,
      expression: "!d_collapsed"
    }],
    staticClass: "p-toggleable-content",
    attrs: {
      role: "region",
      id: _vm.ariaId + "_content",
      "aria-labelledby": _vm.ariaId + "_header"
    }
  }, [_c("div", {
    staticClass: "p-fieldset-content"
  }, [_vm._t("default")], 2)])])], 1);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2c0ae903_0", {
    source: "\n.p-fieldset-legend>a,\n.p-fieldset-legend>span {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-fieldset-toggleable .p-fieldset-legend a {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  position: relative;\n  text-decoration: none;\n}\n.p-fieldset-legend-text {\n  line-height: 1;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/fieldset/Fieldset.vue"],
      "names": [],
      "mappings": ";AAmFA;;EAEA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AAEA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,qBAAA;AACA;AAEA;EACA,cAAA;AACA",
      "file": "Fieldset.vue",
      "sourcesContent": ["<template>\n  <fieldset :class=\"['p-fieldset p-component', { 'p-fieldset-toggleable': toggleable }]\">\n    <legend class=\"p-fieldset-legend\">\n      <slot name=\"legend\" v-if=\"!toggleable\">\n        <span class=\"p-fieldset-legend-text\" :id=\"ariaId + '_header'\">{{ legend }}</span>\n      </slot>\n      <a\n        tabindex=\"0\"\n        v-if=\"toggleable\"\n        @click=\"toggle\"\n        @keydown.enter=\"toggle\"\n        v-ripple\n        :id=\"ariaId + '_header'\"\n        :aria-controls=\"ariaId + '_content'\"\n        :aria-expanded=\"!d_collapsed\">\n        <span :class=\"iconClass\"></span>\n        <slot name=\"legend\">\n          <span class=\"p-fieldset-legend-text\">{{ legend }}</span>\n        </slot>\n      </a>\n    </legend>\n    <transition name=\"p-toggleable-content\">\n      <div\n        class=\"p-toggleable-content\"\n        v-show=\"!d_collapsed\"\n        role=\"region\"\n        :id=\"ariaId + '_content'\"\n        :aria-labelledby=\"ariaId + '_header'\">\n        <div class=\"p-fieldset-content\">\n          <slot></slot>\n        </div>\n      </div>\n    </transition>\n  </fieldset>\n</template>\n\n<script>\nimport { UniqueComponentId } from 'primevue2/utils'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'Fieldset',\n  props: {\n    legend: String,\n    toggleable: Boolean,\n    collapsed: Boolean\n  },\n  data() {\n    return {\n      d_collapsed: this.collapsed\n    }\n  },\n  methods: {\n    toggle(event) {\n      this.d_collapsed = !this.d_collapsed\n      this.$emit('update:collapsed', this.d_collapsed)\n      this.$emit('toggle', {\n        originalEvent: event,\n        value: this.d_collapsed\n      })\n    }\n  },\n  computed: {\n    iconClass() {\n      return [\n        'p-fieldset-toggler pi ',\n        {\n          'pi-minus': !this.d_collapsed,\n          'pi-plus': this.d_collapsed\n        }\n      ]\n    },\n    ariaId() {\n      return UniqueComponentId()\n    }\n  },\n  directives: {\n    ripple: Ripple\n  }\n}\n</script>\n\n<style>\n.p-fieldset-legend>a,\n.p-fieldset-legend>span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.p-fieldset-toggleable .p-fieldset-legend a {\n  cursor: pointer;\n  user-select: none;\n  overflow: hidden;\n  position: relative;\n  text-decoration: none;\n}\n\n.p-fieldset-legend-text {\n  line-height: 1;\n}\n</style>\n"]
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
