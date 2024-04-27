this.primevue2 = this.primevue2 || {};
this.primevue2.menu = (function (utils, Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  //
  var script$1 = {
    name: 'MenuItem',
    props: {
      item: null,
      exact: null
    },
    methods: {
      onClick: function onClick(event, navigate) {
        this.$emit('click', {
          originalEvent: event,
          item: this.item,
          navigate: navigate
        });
      },
      linkClass: function linkClass(item, routerProps) {
        return ['p-menuitem-link', {
          'p-disabled': this.disabled(item),
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
      label: function label(item) {
        return typeof item.label === 'function' ? item.label() : item.label;
      }
    },
    computed: {
      containerClass: function containerClass() {
        return ['p-menuitem', this.item.class];
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

  /* script */
  var __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.visible() ? _c("li", {
      class: _vm.containerClass,
      style: _vm.item.style,
      attrs: {
        role: "none"
      }
    }, [_vm.item.to && !_vm.disabled(_vm.item) ? _c("router-link", {
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
            directives: [{
              name: "ripple",
              rawName: "v-ripple"
            }],
            class: _vm.linkClass(_vm.item, {
              isActive: isActive,
              isExactActive: isExactActive
            }),
            attrs: {
              href: href,
              role: "menuitem"
            },
            on: {
              click: function click($event) {
                return _vm.onClick($event, navigate);
              }
            }
          }, [_c("span", {
            class: ["p-menuitem-icon", _vm.item.icon]
          }), _vm._v(" "), _c("span", {
            staticClass: "p-menuitem-text"
          }, [_vm._v(_vm._s(_vm.label(_vm.item)))])])];
        }
      }], null, false, 3737693139)
    }) : _c("a", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      class: _vm.linkClass(_vm.item),
      attrs: {
        href: _vm.item.url,
        target: _vm.item.target,
        role: "menuitem",
        tabindex: _vm.disabled(_vm.item) ? null : "0"
      },
      on: {
        click: _vm.onClick
      }
    }, [_c("span", {
      class: ["p-menuitem-icon", _vm.item.icon]
    }), _vm._v(" "), _c("span", {
      staticClass: "p-menuitem-text"
    }, [_vm._v(_vm._s(_vm.label(_vm.item)))])])], 1) : _vm._e();
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
    name: 'Menu',
    props: {
      popup: {
        type: Boolean,
        default: false
      },
      model: {
        type: Array,
        default: null
      },
      appendTo: {
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
      exact: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        overlayVisible: false
      };
    },
    target: null,
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    relativeAlign: false,
    beforeDestroy: function beforeDestroy() {
      this.restoreAppend();
      this.unbindResizeListener();
      this.unbindOutsideClickListener();
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      this.target = null;
    },
    methods: {
      itemClick: function itemClick(event) {
        var item = event.item;
        if (this.disabled(item)) {
          return;
        }
        if (item.command) {
          item.command(event);
          event.originalEvent.preventDefault();
        }
        this.hide();
      },
      toggle: function toggle(event) {
        if (this.overlayVisible) this.hide();else this.show(event);
      },
      show: function show(event) {
        this.overlayVisible = true;
        this.relativeAlign = event.relativeAlign;
        this.target = event.currentTarget;
      },
      hide: function hide() {
        this.overlayVisible = false;
        this.target = false;
        this.relativeAlign = false;
      },
      onEnter: function onEnter() {
        this.appendContainer();
        this.alignOverlay();
        this.bindOutsideClickListener();
        this.bindResizeListener();
        this.bindScrollListener();
        if (this.autoZIndex) {
          this.$refs.container.style.zIndex = String(this.baseZIndex + utils.DomHandler.generateZIndex());
        }
      },
      onLeave: function onLeave() {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
        this.unbindScrollListener();
      },
      alignOverlay: function alignOverlay() {
        if (this.relativeAlign) utils.DomHandler.relativePosition(this.$refs.container, this.target);else utils.DomHandler.absolutePosition(this.$refs.container, this.target);
      },
      bindOutsideClickListener: function bindOutsideClickListener() {
        var _this = this;
        if (!this.outsideClickListener) {
          this.outsideClickListener = function (event) {
            if (_this.overlayVisible && _this.$refs.container && !_this.$refs.container.contains(event.target) && !_this.isTargetClicked(event)) {
              _this.hide();
            }
          };
          document.addEventListener('click', this.outsideClickListener);
        }
      },
      unbindOutsideClickListener: function unbindOutsideClickListener() {
        if (this.outsideClickListener) {
          document.removeEventListener('click', this.outsideClickListener);
          this.outsideClickListener = null;
        }
      },
      bindScrollListener: function bindScrollListener() {
        var _this2 = this;
        if (!this.scrollHandler) {
          this.scrollHandler = new utils.ConnectedOverlayScrollHandler(this.target, function () {
            if (_this2.overlayVisible) {
              _this2.hide();
            }
          });
        }
        this.scrollHandler.bindScrollListener();
      },
      unbindScrollListener: function unbindScrollListener() {
        if (this.scrollHandler) {
          this.scrollHandler.unbindScrollListener();
        }
      },
      bindResizeListener: function bindResizeListener() {
        var _this3 = this;
        if (!this.resizeListener) {
          this.resizeListener = function () {
            if (_this3.overlayVisible) {
              _this3.hide();
            }
          };
          window.addEventListener('resize', this.resizeListener);
        }
      },
      unbindResizeListener: function unbindResizeListener() {
        if (this.resizeListener) {
          window.removeEventListener('resize', this.resizeListener);
          this.resizeListener = null;
        }
      },
      isTargetClicked: function isTargetClicked() {
        return this.target && (this.target === event.target || this.target.contains(event.target));
      },
      appendContainer: function appendContainer() {
        if (this.appendTo) {
          if (this.appendTo === 'body') document.body.appendChild(this.$refs.container);else document.getElementById(this.appendTo).appendChild(this.$refs.container);
        }
      },
      restoreAppend: function restoreAppend() {
        if (this.$refs.container && this.appendTo) {
          if (this.appendTo === 'body') document.body.removeChild(this.$refs.container);else document.getElementById(this.appendTo).removeChild(this.$refs.container);
        }
      },
      beforeDestroy: function beforeDestroy() {
        this.restoreAppend();
        this.unbindResizeListener();
        this.unbindOutsideClickListener();
        this.target = null;
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
      containerClass: function containerClass() {
        return ['p-menu p-component', {
          'p-menu-overlay': this.popup
        }];
      }
    },
    components: {
      'MenuItem': __vue_component__$1
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
    return _c("transition", {
      attrs: {
        name: "p-connected-overlay"
      },
      on: {
        enter: _vm.onEnter,
        leave: _vm.onLeave
      }
    }, [(_vm.popup ? _vm.overlayVisible : true) ? _c("div", {
      ref: "container",
      class: _vm.containerClass
    }, [_c("ul", {
      staticClass: "p-menu-list p-reset",
      attrs: {
        role: "menu"
      }
    }, [_vm._l(_vm.model, function (item, i) {
      return [item.items && _vm.visible(item) && !item.separator ? [item.items ? _c("li", {
        key: _vm.label(item) + i,
        staticClass: "p-submenu-header"
      }, [_vm._v(_vm._s(_vm.label(item)))]) : _vm._e(), _vm._v(" "), _vm._l(item.items, function (child, j) {
        return [_vm.visible(child) && !child.separator ? _c("MenuItem", {
          key: _vm.label(child) + i + j,
          attrs: {
            item: child,
            exact: _vm.exact
          },
          on: {
            click: _vm.itemClick
          }
        }) : _vm.visible(child) && child.separator ? _c("li", {
          key: "separator" + i + j,
          class: ["p-menu-separator", child.class],
          style: child.style,
          attrs: {
            role: "separator"
          }
        }) : _vm._e()];
      })] : _vm.visible(item) && item.separator ? _c("li", {
        key: "separator" + i,
        class: ["p-menu-separator", item.class],
        style: item.style,
        attrs: {
          role: "separator"
        }
      }) : _c("MenuItem", {
        key: _vm.label(item) + i,
        attrs: {
          item: item,
          exact: _vm.exact
        },
        on: {
          click: _vm.itemClick
        }
      })];
    })], 2)]) : _vm._e()]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-2c6b3fcb_0", {
      source: "\n.p-menu-overlay {\n  position: absolute;\n}\n.p-menu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.p-menu .p-menuitem-link {\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n.p-menu .p-menuitem-text {\n  line-height: 1;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/menu/Menu.vue"],
        "names": [],
        "mappings": ";AA8OA;EACA,kBAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;AACA;AAEA;EACA,eAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,cAAA;AACA",
        "file": "Menu.vue",
        "sourcesContent": ["<template>\n  <transition name=\"p-connected-overlay\" @enter=\"onEnter\" @leave=\"onLeave\">\n    <div ref=\"container\" :class=\"containerClass\" v-if=\"popup ? overlayVisible : true\">\n      <ul class=\"p-menu-list p-reset\" role=\"menu\">\n        <template v-for=\"(item, i) of model\">\n          <template v-if=\"item.items && visible(item) && !item.separator\">\n            <li class=\"p-submenu-header\" :key=\"label(item) + i\" v-if=\"item.items\">{{ label(item) }}</li>\n            <template v-for=\"(child, j) of item.items\">\n              <MenuItem\n                v-if=\"visible(child) && !child.separator\"\n                :key=\"label(child) + i + j\"\n                :item=\"child\"\n                @click=\"itemClick\"\n                :exact=\"exact\" />\n              <li\n                v-else-if=\"visible(child) && child.separator\"\n                :class=\"['p-menu-separator', child.class]\"\n                :style=\"child.style\"\n                :key=\"'separator' + i + j\"\n                role=\"separator\"></li>\n            </template>\n          </template>\n          <li\n            v-else-if=\"visible(item) && item.separator\"\n            :class=\"['p-menu-separator', item.class]\"\n            :style=\"item.style\"\n            :key=\"'separator' + i\"\n            role=\"separator\"></li>\n          <MenuItem v-else :key=\"label(item) + i\" :item=\"item\" @click=\"itemClick\" :exact=\"exact\" />\n        </template>\n      </ul>\n    </div>\n  </transition>\n</template>\n\n<script>\nimport { ConnectedOverlayScrollHandler, DomHandler } from 'primevue2/utils'\nimport MenuItem from './MenuItem.vue'\n\nexport default {\n  name: 'Menu',\n  props: {\n    popup: {\n      type: Boolean,\n      default: false\n    },\n    model: {\n      type: Array,\n      default: null\n    },\n    appendTo: {\n      type: String,\n      default: null\n    },\n    autoZIndex: {\n      type: Boolean,\n      default: true\n    },\n    baseZIndex: {\n      type: Number,\n      default: 0\n    },\n    exact: {\n      type: Boolean,\n      default: true\n    }\n  },\n  data() {\n    return {\n      overlayVisible: false\n    }\n  },\n  target: null,\n  outsideClickListener: null,\n  scrollHandler: null,\n  resizeListener: null,\n  relativeAlign: false,\n  beforeDestroy() {\n    this.restoreAppend()\n    this.unbindResizeListener()\n    this.unbindOutsideClickListener()\n\n    if (this.scrollHandler) {\n      this.scrollHandler.destroy()\n      this.scrollHandler = null\n    }\n\n    this.target = null\n  },\n  methods: {\n    itemClick(event) {\n      const item = event.item\n      if (this.disabled(item)) {\n        return\n      }\n\n      if (item.command) {\n        item.command(event)\n        event.originalEvent.preventDefault()\n      }\n      this.hide()\n    },\n    toggle(event) {\n      if (this.overlayVisible)\n        this.hide()\n      else\n        this.show(event)\n    },\n    show(event) {\n      this.overlayVisible = true\n      this.relativeAlign = event.relativeAlign\n      this.target = event.currentTarget\n    },\n    hide() {\n      this.overlayVisible = false\n      this.target = false\n      this.relativeAlign = false\n    },\n    onEnter() {\n      this.appendContainer()\n      this.alignOverlay()\n      this.bindOutsideClickListener()\n      this.bindResizeListener()\n      this.bindScrollListener()\n\n      if (this.autoZIndex) {\n        this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())\n      }\n    },\n    onLeave() {\n      this.unbindOutsideClickListener()\n      this.unbindResizeListener()\n      this.unbindScrollListener()\n    },\n    alignOverlay() {\n      if (this.relativeAlign)\n        DomHandler.relativePosition(this.$refs.container, this.target)\n      else\n        DomHandler.absolutePosition(this.$refs.container, this.target)\n\n    },\n    bindOutsideClickListener() {\n      if (!this.outsideClickListener) {\n        this.outsideClickListener = (event) => {\n          if (this.overlayVisible && this.$refs.container && !this.$refs.container.contains(event.target) && !this.isTargetClicked(event)) {\n            this.hide()\n          }\n        }\n        document.addEventListener('click', this.outsideClickListener)\n      }\n    },\n    unbindOutsideClickListener() {\n      if (this.outsideClickListener) {\n        document.removeEventListener('click', this.outsideClickListener)\n        this.outsideClickListener = null\n      }\n    },\n    bindScrollListener() {\n      if (!this.scrollHandler) {\n        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {\n          if (this.overlayVisible) {\n            this.hide()\n          }\n        })\n      }\n\n      this.scrollHandler.bindScrollListener()\n    },\n    unbindScrollListener() {\n      if (this.scrollHandler) {\n        this.scrollHandler.unbindScrollListener()\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          if (this.overlayVisible) {\n            this.hide()\n          }\n        }\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    },\n    isTargetClicked() {\n      return this.target && (this.target === event.target || this.target.contains(event.target))\n    },\n    appendContainer() {\n      if (this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.appendChild(this.$refs.container)\n        else\n          document.getElementById(this.appendTo).appendChild(this.$refs.container)\n      }\n    },\n    restoreAppend() {\n      if (this.$refs.container && this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.removeChild(this.$refs.container)\n        else\n          document.getElementById(this.appendTo).removeChild(this.$refs.container)\n      }\n    },\n    beforeDestroy() {\n      this.restoreAppend()\n      this.unbindResizeListener()\n      this.unbindOutsideClickListener()\n      this.target = null\n    },\n    visible(item) {\n      return (typeof item.visible === 'function' ? item.visible() : item.visible !== false)\n    },\n    disabled(item) {\n      return (typeof item.disabled === 'function' ? item.disabled() : item.disabled)\n    },\n    label(item) {\n      return (typeof item.label === 'function' ? item.label() : item.label)\n    },\n  },\n  computed: {\n    containerClass() {\n      return ['p-menu p-component', {\n        'p-menu-overlay': this.popup\n      }]\n    }\n  },\n  components: {\n    'MenuItem': MenuItem\n  }\n}\n</script>\n\n<style>\n.p-menu-overlay {\n  position: absolute;\n}\n\n.p-menu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.p-menu .p-menuitem-link {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-menu .p-menuitem-text {\n  line-height: 1;\n}\n</style>\n"]
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
