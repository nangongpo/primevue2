import { ObjectUtils } from 'primevue2/utils';

//
var script = {
  name: 'Timeline',
  props: {
    value: null,
    align: {
      mode: String,
      default: 'left'
    },
    layout: {
      mode: String,
      default: 'vertical'
    },
    dataKey: null
  },
  methods: {
    getKey: function getKey(item, index) {
      return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey) : index;
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-timeline p-component', 'p-timeline-' + this.align, 'p-timeline-' + this.layout];
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
    class: _vm.containerClass
  }, _vm._l(_vm.value, function (item, index) {
    return _c("div", {
      key: _vm.getKey(item, index),
      staticClass: "p-timeline-event"
    }, [_c("div", {
      staticClass: "p-timeline-event-opposite"
    }, [_vm._t("opposite", null, {
      item: item,
      index: index
    })], 2), _vm._v(" "), _c("div", {
      staticClass: "p-timeline-event-separator"
    }, [_vm._t("marker", function () {
      return [_c("div", {
        staticClass: "p-timeline-event-marker"
      })];
    }, {
      item: item,
      index: index
    }), _vm._v(" "), index !== _vm.value.length - 1 ? _c("div", {
      staticClass: "p-timeline-event-connector"
    }) : _vm._e()], 2), _vm._v(" "), _c("div", {
      staticClass: "p-timeline-event-content"
    }, [_vm._t("content", null, {
      item: item,
      index: index
    })], 2)]);
  }), 0);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-d0d5dd08_0", {
    source: "\n.p-timeline {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.p-timeline-left .p-timeline-event-opposite {\n  text-align: right;\n}\n.p-timeline-left .p-timeline-event-content {\n  text-align: left;\n}\n.p-timeline-right .p-timeline-event {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: row-reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n.p-timeline-right .p-timeline-event-opposite {\n  text-align: left;\n}\n.p-timeline-right .p-timeline-event-content {\n  text-align: right;\n}\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: row-reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {\n  text-align: right;\n}\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {\n  text-align: left;\n}\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {\n  text-align: left;\n}\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {\n  text-align: right;\n}\n.p-timeline-event {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  min-height: 70px;\n}\n.p-timeline-event:last-child {\n  min-height: 0;\n}\n.p-timeline-event-opposite {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 0 1rem;\n}\n.p-timeline-event-content {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 0 1rem;\n}\n.p-timeline-event-separator {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0;\n      -ms-flex: 0;\n          flex: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.p-timeline-event-marker {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-self: baseline;\n      -ms-flex-item-align: baseline;\n          align-self: baseline;\n}\n.p-timeline-event-connector {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.p-timeline-horizontal {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.p-timeline-horizontal .p-timeline-event {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.p-timeline-horizontal .p-timeline-event:last-child {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0;\n      -ms-flex: 0;\n          flex: 0;\n}\n.p-timeline-horizontal .p-timeline-event-separator {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.p-timeline-horizontal .p-timeline-event-connector  {\n  width: 100%;\n}\n.p-timeline-bottom .p-timeline-event {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/timeline/Timeline.vue"],
      "names": [],
      "mappings": ";AAsDA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,mBAAA;EAAA,oBAAA;MAAA,oBAAA;UAAA,YAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,8BAAA;EAAA,8BAAA;EAAA,mCAAA;MAAA,+BAAA;UAAA,2BAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,8BAAA;EAAA,8BAAA;EAAA,mCAAA;MAAA,+BAAA;UAAA,2BAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,mBAAA;EAAA,eAAA;MAAA,WAAA;UAAA,OAAA;EACA,eAAA;AACA;AAEA;EACA,mBAAA;EAAA,eAAA;MAAA,WAAA;UAAA,OAAA;EACA,eAAA;AACA;AAEA;EACA,mBAAA;EAAA,eAAA;MAAA,WAAA;UAAA,OAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;MAAA,6BAAA;UAAA,oBAAA;AACA;AAEA;EACA,mBAAA;EAAA,oBAAA;MAAA,oBAAA;UAAA,YAAA;AACA;AAEA;EACA,8BAAA;EAAA,6BAAA;EAAA,2BAAA;MAAA,uBAAA;UAAA,mBAAA;AACA;AAEA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,mBAAA;EAAA,eAAA;MAAA,WAAA;UAAA,OAAA;AACA;AAEA;EACA,mBAAA;EAAA,eAAA;MAAA,WAAA;UAAA,OAAA;AACA;AAEA;EACA,8BAAA;EAAA,6BAAA;EAAA,2BAAA;MAAA,uBAAA;UAAA,mBAAA;AACA;AAEA;EACA,WAAA;AACA;AAEA;EACA,4BAAA;EAAA,8BAAA;EAAA,sCAAA;MAAA,kCAAA;UAAA,8BAAA;AACA;AAEA;EACA,4BAAA;EAAA,8BAAA;EAAA,sCAAA;MAAA,kCAAA;UAAA,8BAAA;AACA",
      "file": "Timeline.vue",
      "sourcesContent": ["<template>\n  <div :class=\"containerClass\">\n    <div v-for=\"(item, index) of value\" :key=\"getKey(item, index)\" class=\"p-timeline-event\">\n      <div class=\"p-timeline-event-opposite\">\n        <slot name=\"opposite\" :item=\"item\" :index=\"index\"></slot>\n      </div>\n      <div class=\"p-timeline-event-separator\">\n        <slot name=\"marker\" :item=\"item\" :index=\"index\">\n          <div class=\"p-timeline-event-marker\"></div>\n        </slot>\n        <div v-if=\"index !== value.length - 1\" class=\"p-timeline-event-connector\"></div>\n      </div>\n      <div class=\"p-timeline-event-content\">\n        <slot name=\"content\" :item=\"item\" :index=\"index\"></slot>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { ObjectUtils } from 'primevue2/utils'\n\nexport default {\n  name: 'Timeline',\n  props: {\n    value: null,\n    align: {\n      mode: String,\n      default: 'left'\n    },\n    layout: {\n      mode: String,\n      default: 'vertical'\n    },\n    dataKey: null\n  },\n  methods: {\n    getKey(item, index) {\n      return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey) : index\n    }\n  },\n  computed: {\n    containerClass() {\n      return [\n        'p-timeline p-component',\n        'p-timeline-' + this.align,\n        'p-timeline-' + this.layout\n      ]\n    }\n  }\n}\n</script>\n\n<style>\n.p-timeline {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n}\n\n.p-timeline-left .p-timeline-event-opposite {\n  text-align: right;\n}\n\n.p-timeline-left .p-timeline-event-content {\n  text-align: left;\n}\n\n.p-timeline-right .p-timeline-event {\n  flex-direction: row-reverse;\n}\n\n.p-timeline-right .p-timeline-event-opposite {\n  text-align: left;\n}\n\n.p-timeline-right .p-timeline-event-content {\n  text-align: right;\n}\n\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {\n  flex-direction: row-reverse;\n}\n\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {\n  text-align: right;\n}\n\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {\n  text-align: left;\n}\n\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {\n  text-align: left;\n}\n\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {\n  text-align: right;\n}\n\n.p-timeline-event {\n  display: flex;\n  position: relative;\n  min-height: 70px;\n}\n\n.p-timeline-event:last-child {\n  min-height: 0;\n}\n\n.p-timeline-event-opposite {\n  flex: 1;\n  padding: 0 1rem;\n}\n\n.p-timeline-event-content {\n  flex: 1;\n  padding: 0 1rem;\n}\n\n.p-timeline-event-separator {\n  flex: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.p-timeline-event-marker {\n  display: flex;\n  align-self: baseline;\n}\n\n.p-timeline-event-connector {\n  flex-grow: 1;\n}\n\n.p-timeline-horizontal {\n  flex-direction: row;\n}\n\n.p-timeline-horizontal .p-timeline-event {\n  flex-direction: column;\n  flex: 1;\n}\n\n.p-timeline-horizontal .p-timeline-event:last-child {\n  flex: 0;\n}\n\n.p-timeline-horizontal .p-timeline-event-separator {\n  flex-direction: row;\n}\n\n.p-timeline-horizontal .p-timeline-event-connector  {\n  width: 100%;\n}\n\n.p-timeline-bottom .p-timeline-event {\n  flex-direction: column-reverse;\n}\n\n.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {\n  flex-direction: column-reverse;\n}\n</style>\n"]
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
