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

var script$1 = {
  name: 'BreadcrumbItem',
  props: {
    item: null,
    exact: null
  },
  methods: {
    onClick: function onClick(event, navigate) {
      if (this.item.command) {
        this.item.command({
          originalEvent: event,
          item: this.item
        });
      }
      if (this.item.to && navigate) {
        navigate(event);
      }
    },
    containerClass: function containerClass(item) {
      return [{
        'p-disabled': this.disabled(item)
      }, item.class];
    },
    linkClass: function linkClass(routerProps) {
      return ['p-menuitem-link', {
        'router-link-active': routerProps && routerProps.isActive,
        'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
      }];
    },
    visible: function visible() {
      return typeof this.item.visible === 'function' ? this.item.visible() : this.item.visible !== false;
    },
    disabled: function disabled(item) {
      return typeof item.disabled === 'function' ? item.disabled() : item.disabled;
    },
    label: function label() {
      return typeof this.item.label === 'function' ? this.item.label() : this.item.label;
    }
  },
  computed: {
    iconClass: function iconClass() {
      return ['p-menuitem-icon', this.item.icon];
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

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.visible() ? _c("li", {
    class: _vm.containerClass(_vm.item)
  }, [_vm.item.to ? _c("router-link", {
    attrs: {
      to: _vm.item.to,
      custom: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var navigate = ref.navigate;
        var href = ref.href;
        var isActive = ref.isActive;
        var isExactActive = ref.isExactActive;
        return [_c("a", {
          class: _vm.linkClass({
            isActive: isActive,
            isExactActive: isExactActive
          }),
          attrs: {
            href: href
          },
          on: {
            click: function click($event) {
              return _vm.onClick($event, navigate);
            }
          }
        }, [_vm.item.icon ? _c("span", {
          class: _vm.iconClass
        }) : _vm._e(), _vm._v(" "), _vm.item.label ? _c("span", {
          staticClass: "p-menuitem-text"
        }, [_vm._v(_vm._s(_vm.label(_vm.item)))]) : _vm._e()])];
      }
    }], null, false, 1357904640)
  }) : _c("a", {
    class: _vm.linkClass(),
    attrs: {
      href: _vm.item.url || "#",
      target: _vm.item.target
    },
    on: {
      click: _vm.onClick
    }
  }, [_vm.item.icon ? _c("span", {
    class: _vm.iconClass
  }) : _vm._e(), _vm._v(" "), _vm.item.label ? _c("span", {
    staticClass: "p-menuitem-text"
  }, [_vm._v(_vm._s(_vm.label(_vm.item)))]) : _vm._e()])], 1) : _vm._e();
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

/* style */
var __vue_inject_styles__$1 = undefined;
/* scoped */
var __vue_scope_id__$1 = undefined;
/* module identifier */
var __vue_module_identifier__$1 = undefined;
/* functional template */
var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

//
var script = {
  name: 'Breadcrumb',
  props: {
    model: {
      type: Array,
      default: null
    },
    home: {
      type: null,
      default: null
    },
    exact: {
      type: Boolean,
      default: true
    }
  },
  components: {
    'BreadcrumbItem': __vue_component__$1
  }
};

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
  return _c("nav", {
    staticClass: "p-breadcrumb p-component",
    attrs: {
      "aria-label": "Breadcrumb"
    }
  }, [_c("ul", [_vm.home ? _c("BreadcrumbItem", {
    staticClass: "p-breadcrumb-home",
    attrs: {
      item: _vm.home,
      exact: _vm.exact
    }
  }) : _vm._e(), _vm._v(" "), _vm._l(_vm.model, function (item, i) {
    return [_c("li", {
      key: "chevron" + i,
      staticClass: "p-breadcrumb-chevron pi pi-chevron-right"
    }), _vm._v(" "), _c("BreadcrumbItem", {
      key: item.label + i,
      attrs: {
        item: item,
        exact: _vm.exact
      }
    })];
  })], 2)]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-fdccb028_0", {
    source: "\n.p-breadcrumb {\n  overflow-x: auto;\n}\n.p-breadcrumb ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n}\n.p-breadcrumb .p-menuitem-text {\n  line-height: 1;\n}\n.p-breadcrumb .p-menuitem-link {\n  text-decoration: none;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/breadcrumb/Breadcrumb.vue"],
      "names": [],
      "mappings": ";AAsCA;EACA,gBAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,yBAAA;MAAA,qBAAA;UAAA,iBAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,qBAAA;AACA",
      "file": "Breadcrumb.vue",
      "sourcesContent": ["<template>\n    <nav class=\"p-breadcrumb p-component\" aria-label=\"Breadcrumb\">\n        <ul>\n            <BreadcrumbItem v-if=\"home\" :item=\"home\" class=\"p-breadcrumb-home\" :exact=\"exact\" />\n            <template v-for=\"(item, i) of model\">\n                <li class=\"p-breadcrumb-chevron pi pi-chevron-right\" :key=\"'chevron' + i\"></li>\n                <BreadcrumbItem :key=\"item.label + i\" :item=\"item\" :exact=\"exact\" />\n            </template>\n        </ul>\n    </nav>\n</template>\n\n<script>\nimport BreadcrumbItem from './BreadcrumbItem.vue'\n\nexport default {\n  name: 'Breadcrumb',\n  props: {\n    model: {\n      type: Array,\n      default: null\n    },\n    home: {\n      type: null,\n      default: null\n    },\n    exact: {\n      type: Boolean,\n      default: true\n    }\n  },\n  components: {\n    'BreadcrumbItem': BreadcrumbItem\n  }\n}\n</script>\n\n<style>\n.p-breadcrumb {\n  overflow-x: auto;\n}\n\n.p-breadcrumb ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n}\n\n.p-breadcrumb .p-menuitem-text {\n  line-height: 1;\n}\n\n.p-breadcrumb .p-menuitem-link {\n  text-decoration: none;\n}\n</style>\n"]
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
