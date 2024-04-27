this.primevue2 = this.primevue2 || {};
this.primevue2.steps = (function (utils) {
  'use strict';

  //
  var script = {
    name: 'Steps',
    props: {
      id: {
        type: String,
        default: utils.UniqueComponentId()
      },
      model: {
        type: Array,
        default: null
      },
      readonly: {
        type: Boolean,
        default: true
      },
      exact: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onItemClick: function onItemClick(event, item, navigate) {
        if (this.disabled(item) || this.readonly) {
          event.preventDefault();
          return;
        }
        if (item.command) {
          item.command({
            originalEvent: event,
            item: item
          });
        }
        if (item.to && navigate) {
          navigate(event);
        }
      },
      isActive: function isActive(item) {
        return this.activeRoute === item.to || this.activeRoute === item.to + '/';
      },
      getItemClass: function getItemClass(item) {
        return ['p-steps-item', item.class, {
          'p-highlight p-steps-current': this.isActive(item),
          'p-disabled': this.isItemDisabled(item)
        }];
      },
      linkClass: function linkClass(routerProps) {
        return ['p-menuitem-link', {
          'router-link-active': routerProps && routerProps.isActive,
          'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
        }];
      },
      isItemDisabled: function isItemDisabled(item) {
        return this.disabled(item) || this.readonly && !this.isActive(item);
      },
      visible: function visible(item) {
        return typeof item.visible === 'function' ? item.visible() : item.visible !== false;
      },
      disabled: function disabled(item) {
        return typeof item.disabled === 'function' ? item.disabled() : item.disabled;
      },
      label: function label(item) {
        return typeof item.label === 'function' ? item.label() : item.label;
      }
    },
    computed: {
      activeRoute: function activeRoute() {
        return this.$route.path;
      },
      containerClass: function containerClass() {
        return ['p-steps p-component', {
          'p-readonly': this.readonly
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
        id: _vm.id
      }
    }, [_c("ul", {
      attrs: {
        role: "tablist"
      }
    }, [_vm._l(_vm.model, function (item, index) {
      return [_vm.visible(item) ? _c("li", {
        key: item.to,
        class: _vm.getItemClass(item),
        style: item.style,
        attrs: {
          role: "tab",
          "aria-selected": _vm.isActive(item),
          "aria-expanded": _vm.isActive(item)
        }
      }, [!_vm.isItemDisabled(item) ? _c("router-link", {
        attrs: {
          to: item.to,
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
                href: href,
                role: "presentation"
              },
              on: {
                click: function click($event) {
                  return _vm.onItemClick($event, item, navigate);
                }
              }
            }, [_c("span", {
              staticClass: "p-steps-number"
            }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("span", {
              staticClass: "p-steps-title"
            }, [_vm._v(_vm._s(_vm.label(item)))])])];
          }
        }], null, true)
      }) : _c("span", {
        class: _vm.linkClass(),
        attrs: {
          role: "presentation"
        }
      }, [_c("span", {
        staticClass: "p-steps-number"
      }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("span", {
        staticClass: "p-steps-title"
      }, [_vm._v(_vm._s(_vm.label(item)))])])], 1) : _vm._e()];
    })], 2)]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-1e4d1ae5_0", {
      source: "\n.p-steps {\n  position: relative;\n}\n.p-steps ul {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.p-steps-item {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.p-steps-item .p-menuitem-link {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n  text-decoration: none;\n}\n.p-steps.p-steps-readonly .p-steps-item {\n  cursor: auto;\n}\n.p-steps-item.p-steps-current .p-menuitem-link {\n  cursor: default;\n}\n.p-steps-title {\n  white-space: nowrap;\n}\n.p-steps-number {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-steps-title {\n  display: block;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/steps/Steps.vue"],
        "names": [],
        "mappings": ";AAqHA;EACA,kBAAA;AACA;AAEA;EACA,UAAA;EACA,SAAA;EACA,qBAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA;AAEA;EACA,kBAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;AAEA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,gBAAA;EACA,qBAAA;AACA;AAEA;EACA,YAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,mBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AAEA;EACA,cAAA;AACA",
        "file": "Steps.vue",
        "sourcesContent": ["<template>\n  <div :id=\"id\" :class=\"containerClass\">\n    <ul role=\"tablist\">\n      <template v-for=\"(item, index) of model\">\n        <li\n          v-if=\"visible(item)\"\n          :key=\"item.to\"\n          :class=\"getItemClass(item)\"\n          :style=\"item.style\"\n          role=\"tab\"\n          :aria-selected=\"isActive(item)\"\n          :aria-expanded=\"isActive(item)\">\n          <router-link\n            :to=\"item.to\"\n            v-if=\"!isItemDisabled(item)\"\n            custom\n            v-slot=\"{ navigate, href, isActive, isExactActive }\">\n            <a\n              :href=\"href\"\n              :class=\"linkClass({ isActive, isExactActive })\"\n              @click=\"onItemClick($event, item, navigate)\"\n              role=\"presentation\">\n              <span class=\"p-steps-number\">{{ index + 1 }}</span>\n              <span class=\"p-steps-title\">{{ label(item) }}</span>\n            </a>\n          </router-link>\n          <span v-else :class=\"linkClass()\" role=\"presentation\">\n            <span class=\"p-steps-number\">{{ index + 1 }}</span>\n            <span class=\"p-steps-title\">{{ label(item) }}</span>\n          </span>\n        </li>\n      </template>\n    </ul>\n  </div>\n</template>\n\n<script>\nimport { UniqueComponentId } from 'primevue2/utils'\n\nexport default {\n  name: 'Steps',\n  props: {\n    id: {\n      type: String,\n      default: UniqueComponentId()\n    },\n    model: {\n      type: Array,\n      default: null\n    },\n    readonly: {\n      type: Boolean,\n      default: true\n    },\n    exact: {\n      type: Boolean,\n      default: true\n    }\n  },\n  methods: {\n    onItemClick(event, item, navigate) {\n      if (this.disabled(item) || this.readonly) {\n        event.preventDefault()\n        return\n      }\n\n      if (item.command) {\n        item.command({\n          originalEvent: event,\n          item: item\n        })\n      }\n\n      if (item.to && navigate) {\n        navigate(event)\n      }\n    },\n    isActive(item) {\n      return this.activeRoute === item.to || this.activeRoute === item.to + '/'\n    },\n    getItemClass(item) {\n      return ['p-steps-item', item.class, {\n        'p-highlight p-steps-current': this.isActive(item),\n        'p-disabled': this.isItemDisabled(item)\n      }]\n    },\n    linkClass(routerProps) {\n      return ['p-menuitem-link', {\n        'router-link-active': routerProps && routerProps.isActive,\n        'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive\n      }]\n    },\n    isItemDisabled(item) {\n      return (this.disabled(item) || (this.readonly && !this.isActive(item)))\n    },\n    visible(item) {\n      return (typeof item.visible === 'function' ? item.visible() : item.visible !== false)\n    },\n    disabled(item) {\n      return (typeof item.disabled === 'function' ? item.disabled() : item.disabled)\n    },\n    label(item) {\n      return (typeof item.label === 'function' ? item.label() : item.label)\n    }\n  },\n  computed: {\n    activeRoute() {\n      return this.$route.path\n    },\n    containerClass() {\n      return ['p-steps p-component', { 'p-readonly': this.readonly }]\n    }\n  }\n}\n</script>\n\n<style>\n.p-steps {\n  position: relative;\n}\n\n.p-steps ul {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: flex;\n}\n\n.p-steps-item {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex: 1 1 auto;\n}\n\n.p-steps-item .p-menuitem-link {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  text-decoration: none;\n}\n\n.p-steps.p-steps-readonly .p-steps-item {\n  cursor: auto;\n}\n\n.p-steps-item.p-steps-current .p-menuitem-link {\n  cursor: default;\n}\n\n.p-steps-title {\n  white-space: nowrap;\n}\n\n.p-steps-number {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.p-steps-title {\n  display: block;\n}\n</style>\n"]
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

})(primevue2.utils);
