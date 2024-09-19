this.primevue2 = this.primevue2 || {};
this.primevue2.tabmenu = (function (utils, Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  //
  var script = {
    name: 'TabMenu',
    props: {
      model: {
        type: Array,
        default: null
      },
      activeIndex: {
        type: Number,
        default: 0
      }
    },
    data: function data() {
      return {
        d_activeIndex: this.activeIndex
      };
    },
    mounted: function mounted() {
      this.updateInkBar();
    },
    updated: function updated() {
      this.updateInkBar();
    },
    watch: {
      activeIndex: function activeIndex(newValue) {
        this.d_activeIndex = newValue;
      }
    },
    methods: {
      onItemClick: function onItemClick(event, item, index) {
        if (this.disabled(item)) {
          event.preventDefault();
          return;
        }
        if (item.command) {
          item.command({
            originalEvent: event,
            item: item
          });
        }
        if (index !== this.d_activeIndex) {
          this.d_activeIndex = index;
          this.$emit('update:activeIndex', this.d_activeIndex);
        }
        this.$emit('tab-change', {
          originalEvent: event,
          index: index
        });
      },
      isActive: function isActive(item) {
        return this.activeRoute.startsWith(item.to);
      },
      getItemClass: function getItemClass(item, index) {
        return ['p-tabmenuitem', item.class, {
          'p-highlight': this.d_activeIndex === index,
          'p-disabled': this.disabled(item)
        }];
      },
      getItemIcon: function getItemIcon(item) {
        return ['p-menuitem-icon', item.icon];
      },
      visible: function visible(item) {
        return typeof item.visible === 'function' ? item.visible() : item.visible !== false;
      },
      disabled: function disabled(item) {
        return typeof item.disabled === 'function' ? item.disabled() : item.disabled;
      },
      label: function label(item) {
        return typeof item.label === 'function' ? item.label() : item.label;
      },
      findActiveTabIndex: function findActiveTabIndex() {
        if (this.model) {
          for (var i = 0; i < this.model.length; i++) {
            if (this.isActive(this.model[i])) {
              return i;
            }
          }
        }
        return null;
      },
      updateInkBar: function updateInkBar() {
        var activeTabIndex = this.findActiveTabIndex();
        if (activeTabIndex !== null) {
          var tabHeader = this.$refs.nav.children[activeTabIndex];
          this.$refs.inkbar.style.width = utils.DomHandler.getWidth(tabHeader) + 'px';
          this.$refs.inkbar.style.left = utils.DomHandler.getOffset(tabHeader).left - utils.DomHandler.getOffset(this.$refs.nav).left + 'px';
        } else {
          this.$refs.inkbar.style.width = '0px';
          this.$refs.inkbar.style.left = '0px';
        }
      }
    },
    computed: {
      activeRoute: function activeRoute() {
        return this.$route.path;
      }
    },
    directives: {
      'ripple': Ripple__default["default"]
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
      staticClass: "p-tabmenu p-component"
    }, [_c("ul", {
      ref: "nav",
      staticClass: "p-tabmenu-nav p-reset",
      attrs: {
        role: "tablist"
      }
    }, [_vm._l(_vm.model, function (item, i) {
      return [_vm.visible(item) ? _c("li", {
        key: _vm.label(item) + "_" + i,
        class: _vm.getItemClass(item, i),
        style: item.style,
        attrs: {
          role: "tab",
          "aria-selected": _vm.isActive(item),
          "aria-expanded": _vm.isActive(item)
        }
      }, [item.to && !_vm.disabled(item) ? _c("router-link", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        staticClass: "p-menuitem-link",
        attrs: {
          to: item.to,
          role: "presentation"
        },
        nativeOn: {
          click: function click($event) {
            return _vm.onItemClick($event, item, i);
          }
        }
      }, [item.icon ? _c("span", {
        class: _vm.getItemIcon(item)
      }) : _vm._e(), _vm._v(" "), _c("span", {
        staticClass: "p-menuitem-text"
      }, [_vm._v(_vm._s(_vm.label(item)))])]) : _c("a", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        staticClass: "p-menuitem-link",
        attrs: {
          href: item.url,
          target: item.target,
          role: "presentation",
          tabindex: _vm.disabled(item) ? null : "0"
        },
        on: {
          click: function click($event) {
            return _vm.onItemClick($event, item, i);
          }
        }
      }, [item.icon ? _c("span", {
        class: _vm.getItemIcon(item)
      }) : _vm._e(), _vm._v(" "), _c("span", {
        staticClass: "p-menuitem-text"
      }, [_vm._v(_vm._s(_vm.label(item)))])])], 1) : _vm._e()];
    }), _vm._v(" "), _c("li", {
      ref: "inkbar",
      staticClass: "p-tabmenu-ink-bar"
    })], 2)]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-0892f966_0", {
      source: "\n.p-tabmenu {\n  overflow-x: auto;\n}\n.p-tabmenu-nav {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n}\n.p-tabmenu-nav a {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  text-decoration: none;\n  text-decoration: none;\n  overflow: hidden;\n}\n.p-tabmenu-nav a:focus {\n  z-index: 1;\n}\n.p-tabmenu-nav .p-menuitem-text {\n  line-height: 1;\n}\n.p-tabmenu-ink-bar {\n  display: none;\n  z-index: 1;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/tabmenu/TabMenu.vue"],
        "names": [],
        "mappings": ";AA0JA;EACA,gBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;EACA,yBAAA;MAAA,qBAAA;UAAA,iBAAA;AACA;AAEA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,qBAAA;EACA,gBAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,aAAA;EACA,UAAA;AACA",
        "file": "TabMenu.vue",
        "sourcesContent": ["<template>\n  <div class=\"p-tabmenu p-component\">\n    <ul ref=\"nav\" class=\"p-tabmenu-nav p-reset\" role=\"tablist\">\n      <template v-for=\"(item, i) of model\">\n        <li\n          :key=\"label(item) + '_' + i\"\n          :class=\"getItemClass(item, i)\"\n          :style=\"item.style\"\n          v-if=\"visible(item)\"\n          role=\"tab\"\n          :aria-selected=\"isActive(item)\"\n          :aria-expanded=\"isActive(item)\">\n          <router-link\n            v-if=\"item.to && !disabled(item)\"\n            :to=\"item.to\"\n            class=\"p-menuitem-link\"\n            @click.native=\"onItemClick($event, item, i)\"\n            role=\"presentation\"\n            v-ripple>\n            <span :class=\"getItemIcon(item)\" v-if=\"item.icon\"></span>\n            <span class=\"p-menuitem-text\">{{ label(item) }}</span>\n          </router-link>\n          <a\n            v-else\n            :href=\"item.url\"\n            class=\"p-menuitem-link\"\n            :target=\"item.target\"\n            @click=\"onItemClick($event, item, i)\"\n            role=\"presentation\"\n            :tabindex=\"disabled(item) ? null : '0'\"\n            v-ripple>\n            <span :class=\"getItemIcon(item)\" v-if=\"item.icon\"></span>\n            <span class=\"p-menuitem-text\">{{ label(item) }}</span>\n          </a>\n        </li>\n      </template>\n      <li ref=\"inkbar\" class=\"p-tabmenu-ink-bar\"></li>\n    </ul>\n  </div>\n</template>\n\n<script>\nimport { DomHandler } from 'primevue2/utils'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'TabMenu',\n  props: {\n    model: {\n      type: Array,\n      default: null\n    },\n    activeIndex: {\n      type: Number,\n      default: 0\n    }\n  },\n  data() {\n    return {\n      d_activeIndex: this.activeIndex\n    }\n  },\n  mounted() {\n    this.updateInkBar()\n  },\n  updated() {\n    this.updateInkBar()\n  },\n  watch: {\n    activeIndex(newValue) {\n      this.d_activeIndex = newValue\n    }\n  },\n  methods: {\n    onItemClick(event, item, index) {\n      if (this.disabled(item)) {\n        event.preventDefault()\n        return\n      }\n\n      if (item.command) {\n        item.command({\n          originalEvent: event,\n          item: item\n        })\n      }\n\n      if (index !== this.d_activeIndex) {\n        this.d_activeIndex = index\n        this.$emit('update:activeIndex', this.d_activeIndex)\n      }\n      this.$emit('tab-change', {\n        originalEvent: event,\n        index: index\n      })\n    },\n    isActive(item) {\n      return this.activeRoute.startsWith(item.to)\n    },\n    getItemClass(item, index) {\n      return ['p-tabmenuitem', item.class, {\n        'p-highlight': this.d_activeIndex === index,\n        'p-disabled': this.disabled(item)\n      }]\n    },\n    getItemIcon(item) {\n      return ['p-menuitem-icon', item.icon]\n    },\n    visible(item) {\n      return (typeof item.visible === 'function' ? item.visible() : item.visible !== false)\n    },\n    disabled(item) {\n      return (typeof item.disabled === 'function' ? item.disabled() : item.disabled)\n    },\n    label(item) {\n      return (typeof item.label === 'function' ? item.label() : item.label)\n    },\n    findActiveTabIndex() {\n      if (this.model) {\n        for (let i = 0; i < this.model.length; i++) {\n          if (this.isActive(this.model[i])) {\n            return i\n          }\n        }\n      }\n\n      return null\n    },\n    updateInkBar() {\n      let activeTabIndex = this.findActiveTabIndex()\n      if (activeTabIndex !== null) {\n        let tabHeader = this.$refs.nav.children[activeTabIndex]\n        this.$refs.inkbar.style.width = DomHandler.getWidth(tabHeader) + 'px'\n        this.$refs.inkbar.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.$refs.nav).left + 'px'\n      }\n      else {\n        this.$refs.inkbar.style.width = '0px'\n        this.$refs.inkbar.style.left = '0px'\n      }\n\n    }\n  },\n  computed: {\n    activeRoute() {\n      return this.$route.path\n    }\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-tabmenu {\n  overflow-x: auto;\n}\n\n.p-tabmenu-nav {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  flex-wrap: nowrap;\n}\n\n.p-tabmenu-nav a {\n  cursor: pointer;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  position: relative;\n  text-decoration: none;\n  text-decoration: none;\n  overflow: hidden;\n}\n\n.p-tabmenu-nav a:focus {\n  z-index: 1;\n}\n\n.p-tabmenu-nav .p-menuitem-text {\n  line-height: 1;\n}\n\n.p-tabmenu-ink-bar {\n  display: none;\n  z-index: 1;\n}\n</style>\n"]
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

})(primevue2.utils, primevue2.ripple);
