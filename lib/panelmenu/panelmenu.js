this.primevue2 = this.primevue2 || {};
this.primevue2.panelmenu = (function (utils) {
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
    name: 'PanelMenuSub',
    props: {
      model: {
        type: null,
        default: null
      },
      exact: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        activeItem: null
      };
    },
    methods: {
      onItemClick: function onItemClick(event, item, navigate) {
        if (this.disabled(item)) {
          event.preventDefault();
          return;
        }
        if (!item.url && !item.to) {
          event.preventDefault();
        }
        if (item.command) {
          item.command({
            originalEvent: event,
            item: item
          });
        }
        if (this.activeItem && this.activeItem === item) this.activeItem = null;else this.activeItem = item;
        if (item.to && navigate) {
          navigate(event);
        }
      },
      getItemClass: function getItemClass(item) {
        return ['p-menuitem', item.class];
      },
      linkClass: function linkClass(item, routerProps) {
        return ['p-menuitem-link', {
          'p-disabled': this.disabled(item),
          'router-link-active': routerProps && routerProps.isActive,
          'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
        }];
      },
      isActive: function isActive(item) {
        return item === this.activeItem;
      },
      getSubmenuIcon: function getSubmenuIcon(item) {
        var active = this.isActive(item);
        return ['p-panelmenu-icon pi pi-fw', {
          'pi-angle-right': !active,
          'pi-angle-down': active
        }];
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
    return _c("ul", {
      staticClass: "p-submenu-list",
      attrs: {
        role: "tree"
      }
    }, [_vm._l(_vm.model, function (item, i) {
      return [_vm.visible(item) && !item.separator ? _c("li", {
        key: _vm.label(item) + i,
        class: _vm.getItemClass(item),
        style: item.style,
        attrs: {
          role: "none"
        }
      }, [item.to && !_vm.disabled(item) ? _c("router-link", {
        attrs: {
          to: item.to,
          custom: ""
        },
        scopedSlots: _vm._u([{
          key: "default",
          fn: function fn(ref) {
            var navigate = ref.navigate;
            var href = ref.href;
            var isRouterActive = ref.isActive;
            var isExactActive = ref.isExactActive;
            return [_c("a", {
              class: _vm.linkClass(item, {
                isRouterActive: isRouterActive,
                isExactActive: isExactActive
              }),
              attrs: {
                href: href,
                role: "treeitem",
                "aria-expanded": _vm.isActive(item)
              },
              on: {
                click: function click($event) {
                  return _vm.onItemClick($event, item, navigate);
                }
              }
            }, [_c("span", {
              class: ["p-menuitem-icon", item.icon]
            }), _vm._v(" "), _c("span", {
              staticClass: "p-menuitem-text"
            }, [_vm._v(_vm._s(_vm.label(item)))])])];
          }
        }], null, true)
      }) : _c("a", {
        class: _vm.linkClass(item),
        attrs: {
          href: item.url,
          target: item.target,
          role: "treeitem",
          "aria-expanded": _vm.isActive(item),
          tabindex: _vm.disabled(item) ? null : "0"
        },
        on: {
          click: function click($event) {
            return _vm.onItemClick($event, item);
          }
        }
      }, [item.items ? _c("span", {
        class: _vm.getSubmenuIcon(item)
      }) : _vm._e(), _vm._v(" "), _c("span", {
        class: ["p-menuitem-icon", item.icon]
      }), _vm._v(" "), _c("span", {
        staticClass: "p-menuitem-text"
      }, [_vm._v(_vm._s(_vm.label(item)))])]), _vm._v(" "), _c("transition", {
        attrs: {
          name: "p-toggleable-content"
        }
      }, [_c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: item === _vm.activeItem,
          expression: "item === activeItem"
        }],
        staticClass: "p-toggleable-content"
      }, [_vm.visible(item) && item.items ? _c("PanelMenuSub", {
        key: _vm.label(item) + "_sub_",
        attrs: {
          model: item.items,
          exact: _vm.exact
        }
      }) : _vm._e()], 1)])], 1) : _vm._e(), _vm._v(" "), _vm.visible(item) && item.separator ? _c("li", {
        key: "separator" + i,
        class: ["p-menu-separator", item.class],
        style: item.style
      }) : _vm._e()];
    })], 2);
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
    name: 'PanelMenu',
    props: {
      model: {
        type: Array,
        default: null
      },
      exact: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        activeItem: null
      };
    },
    methods: {
      onItemClick: function onItemClick(event, item, navigate) {
        if (this.disabled(item)) {
          event.preventDefault();
          return;
        }
        if (!item.url && !item.to) {
          event.preventDefault();
        }
        if (item.command) {
          item.command({
            originalEvent: event,
            item: item
          });
        }
        if (this.activeItem && this.activeItem === item) this.activeItem = null;else this.activeItem = item;
        if (item.to && navigate) {
          navigate(event);
        }
      },
      getPanelClass: function getPanelClass(item) {
        return ['p-panelmenu-panel', item.class];
      },
      getPanelToggleIcon: function getPanelToggleIcon(item) {
        var active = item === this.activeItem;
        return ['p-panelmenu-icon pi', {
          'pi-chevron-right': !active,
          ' pi-chevron-down': active
        }];
      },
      getPanelIcon: function getPanelIcon(item) {
        return ['p-menuitem-icon', item.icon];
      },
      getHeaderLinkClass: function getHeaderLinkClass(item, routerProps) {
        return ['p-panelmenu-header-link', {
          'router-link-active': routerProps && routerProps.isActive,
          'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
        }];
      },
      isActive: function isActive(item) {
        return item === this.activeItem;
      },
      getHeaderClass: function getHeaderClass(item) {
        return ['p-component p-panelmenu-header', {
          'p-highlight': this.isActive(item),
          'p-disabled': this.disabled(item)
        }];
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
    components: {
      'PanelMenuSub': __vue_component__$1
    },
    computed: {
      ariaId: function ariaId() {
        return utils.UniqueComponentId();
      }
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
    return _c("div", {
      staticClass: "p-panelmenu p-component"
    }, [_vm._l(_vm.model, function (item, index) {
      return [_vm.visible(item) ? _c("div", {
        key: _vm.label(item) + "_" + index,
        class: _vm.getPanelClass(item),
        style: item.style
      }, [_c("div", {
        class: _vm.getHeaderClass(item),
        style: item.style
      }, [item.to && !_vm.disabled(item) ? _c("router-link", {
        attrs: {
          to: item.to,
          custom: ""
        },
        scopedSlots: _vm._u([{
          key: "default",
          fn: function fn(ref) {
            var navigate = ref.navigate;
            var href = ref.href;
            var isRouterActive = ref.isActive;
            var isExactActive = ref.isExactActive;
            return [_c("a", {
              class: _vm.getHeaderLinkClass(item, {
                isRouterActive: isRouterActive,
                isExactActive: isExactActive
              }),
              attrs: {
                href: href,
                role: "treeitem"
              },
              on: {
                click: function click($event) {
                  return _vm.onItemClick($event, item, navigate);
                }
              }
            }, [item.icon ? _c("span", {
              class: _vm.getPanelIcon(item)
            }) : _vm._e(), _vm._v(" "), _c("span", {
              staticClass: "p-menuitem-text"
            }, [_vm._v(_vm._s(_vm.label(item)))])])];
          }
        }], null, true)
      }) : _c("a", {
        class: _vm.getHeaderLinkClass(item),
        attrs: {
          href: item.url,
          tabindex: _vm.disabled(item) ? null : "0",
          "aria-expanded": _vm.isActive(item),
          id: _vm.ariaId + "_header",
          "aria-controls": _vm.ariaId + "_content"
        },
        on: {
          click: function click($event) {
            return _vm.onItemClick($event, item);
          }
        }
      }, [item.items ? _c("span", {
        class: _vm.getPanelToggleIcon(item)
      }) : _vm._e(), _vm._v(" "), item.icon ? _c("span", {
        class: _vm.getPanelIcon(item)
      }) : _vm._e(), _vm._v(" "), _c("span", {
        staticClass: "p-menuitem-text"
      }, [_vm._v(_vm._s(_vm.label(item)))])])], 1), _vm._v(" "), _c("transition", {
        attrs: {
          name: "p-toggleable-content"
        }
      }, [_c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: item === _vm.activeItem,
          expression: "item === activeItem"
        }],
        staticClass: "p-toggleable-content",
        attrs: {
          role: "region",
          id: _vm.ariaId + "_content",
          "aria-labelledby": _vm.ariaId + "_header"
        }
      }, [item.items ? _c("div", {
        staticClass: "p-panelmenu-content"
      }, [_c("PanelMenuSub", {
        staticClass: "p-panelmenu-root-submenu",
        attrs: {
          model: item.items
        }
      })], 1) : _vm._e()])])], 1) : _vm._e()];
    })], 2);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-3a5882d7_0", {
      source: "\n.p-panelmenu .p-panelmenu-header-link {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  position: relative;\n  text-decoration: none;\n}\n.p-panelmenu .p-panelmenu-header-link:focus {\n  z-index: 1;\n}\n.p-panelmenu .p-submenu-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.p-panelmenu .p-menuitem-link {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  text-decoration: none;\n}\n.p-panelmenu .p-menuitem-text {\n  line-height: 1;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/panelmenu/PanelMenu.vue"],
        "names": [],
        "mappings": ";AA8IA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,qBAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,eAAA;EACA,qBAAA;AACA;AAEA;EACA,cAAA;AACA",
        "file": "PanelMenu.vue",
        "sourcesContent": ["<template>\n  <div class=\"p-panelmenu p-component\">\n    <template v-for=\"(item, index) of model\">\n      <div v-if=\"visible(item)\" :key=\"label(item) + '_' + index\" :class=\"getPanelClass(item)\" :style=\"item.style\">\n        <div :class=\"getHeaderClass(item)\" :style=\"item.style\">\n          <router-link\n            v-if=\"item.to && !disabled(item)\"\n            :to=\"item.to\"\n            custom\n            v-slot=\"{ navigate, href, isActive: isRouterActive, isExactActive }\">\n            <a\n              :href=\"href\"\n              :class=\"getHeaderLinkClass(item, { isRouterActive, isExactActive })\"\n              @click=\"onItemClick($event, item, navigate)\"\n              role=\"treeitem\">\n              <span v-if=\"item.icon\" :class=\"getPanelIcon(item)\"></span>\n              <span class=\"p-menuitem-text\">{{ label(item) }}</span>\n            </a>\n          </router-link>\n          <a\n            v-else\n            :href=\"item.url\"\n            :class=\"getHeaderLinkClass(item)\"\n            @click=\"onItemClick($event, item)\"\n            :tabindex=\"disabled(item) ? null : '0'\"\n            :aria-expanded=\"isActive(item)\"\n            :id=\"ariaId + '_header'\"\n            :aria-controls=\"ariaId + '_content'\">\n            <span v-if=\"item.items\" :class=\"getPanelToggleIcon(item)\"></span>\n            <span v-if=\"item.icon\" :class=\"getPanelIcon(item)\"></span>\n            <span class=\"p-menuitem-text\">{{ label(item) }}</span>\n          </a>\n        </div>\n        <transition name=\"p-toggleable-content\">\n          <div\n            class=\"p-toggleable-content\"\n            v-show=\"item === activeItem\"\n            role=\"region\"\n            :id=\"ariaId + '_content'\"\n            :aria-labelledby=\"ariaId + '_header'\">\n            <div class=\"p-panelmenu-content\" v-if=\"item.items\">\n              <PanelMenuSub :model=\"item.items\" class=\"p-panelmenu-root-submenu\" />\n            </div>\n          </div>\n        </transition>\n      </div>\n    </template>\n  </div>\n</template>\n\n<script>\nimport PanelMenuSub from './PanelMenuSub.vue'\nimport { UniqueComponentId } from 'primevue2/utils'\n\nexport default {\n  name: 'PanelMenu',\n  props: {\n    model: {\n      type: Array,\n      default: null\n    },\n    exact: {\n      type: Boolean,\n      default: true\n    }\n  },\n  data() {\n    return {\n      activeItem: null\n    }\n  },\n  methods: {\n    onItemClick(event, item, navigate) {\n      if (this.disabled(item)) {\n        event.preventDefault()\n        return\n      }\n\n      if (!item.url && !item.to) {\n        event.preventDefault()\n      }\n\n      if (item.command) {\n        item.command({\n          originalEvent: event,\n          item: item\n        })\n      }\n\n      if (this.activeItem && this.activeItem === item)\n        this.activeItem = null\n      else\n        this.activeItem = item\n\n      if (item.to && navigate) {\n        navigate(event)\n      }\n    },\n    getPanelClass(item) {\n      return ['p-panelmenu-panel', item.class]\n    },\n    getPanelToggleIcon(item) {\n      const active = item === this.activeItem\n      return ['p-panelmenu-icon pi', { 'pi-chevron-right': !active, ' pi-chevron-down': active }]\n    },\n    getPanelIcon(item) {\n      return ['p-menuitem-icon', item.icon]\n    },\n    getHeaderLinkClass(item, routerProps) {\n      return ['p-panelmenu-header-link', {\n        'router-link-active': routerProps && routerProps.isActive,\n        'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive\n      }]\n    },\n    isActive(item) {\n      return item === this.activeItem\n    },\n    getHeaderClass(item) {\n      return ['p-component p-panelmenu-header', { 'p-highlight': this.isActive(item), 'p-disabled': this.disabled(item) }]\n    },\n    visible(item) {\n      return (typeof item.visible === 'function' ? item.visible() : item.visible !== false)\n    },\n    disabled(item) {\n      return (typeof item.disabled === 'function' ? item.disabled() : item.disabled)\n    },\n    label(item) {\n      return (typeof item.label === 'function' ? item.label() : item.label)\n    }\n  },\n  components: {\n    'PanelMenuSub': PanelMenuSub\n  },\n  computed: {\n    ariaId() {\n      return UniqueComponentId()\n    }\n  }\n}\n</script>\n\n<style>\n.p-panelmenu .p-panelmenu-header-link {\n  display: flex;\n  align-items: center;\n  user-select: none;\n  cursor: pointer;\n  position: relative;\n  text-decoration: none;\n}\n\n.p-panelmenu .p-panelmenu-header-link:focus {\n  z-index: 1;\n}\n\n.p-panelmenu .p-submenu-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.p-panelmenu .p-menuitem-link {\n  display: flex;\n  align-items: center;\n  user-select: none;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.p-panelmenu .p-menuitem-text {\n  line-height: 1;\n}\n</style>\n"]
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
