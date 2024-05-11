'use strict';

var utils = require('primevue2/utils');
var Ripple = require('primevue2/ripple');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

//
var script$1 = {
  name: 'TieredMenuSub',
  props: {
    model: {
      type: Array,
      default: null
    },
    root: {
      type: Boolean,
      default: false
    },
    popup: {
      type: Boolean,
      default: false
    },
    parentActive: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: true
    }
  },
  documentClickListener: null,
  watch: {
    parentActive: function parentActive(newValue) {
      if (!newValue) {
        this.activeItem = null;
      }
    }
  },
  data: function data() {
    return {
      activeItem: null
    };
  },
  updated: function updated() {
    if (this.root && this.activeItem) {
      this.bindDocumentClickListener();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindDocumentClickListener();
  },
  methods: {
    onItemMouseEnter: function onItemMouseEnter(event, item) {
      if (this.disabled(item)) {
        event.preventDefault();
        return;
      }
      if (this.root) {
        if (this.activeItem || this.popup) {
          this.activeItem = item;
        }
      } else {
        this.activeItem = item;
      }
    },
    onItemClick: function onItemClick(event, item) {
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
      if (item.items) {
        if (this.activeItem && item === this.activeItem) this.activeItem = null;else this.activeItem = item;
      }
      if (!item.items) {
        this.onLeafClick();
      }
    },
    onLeafClick: function onLeafClick() {
      this.activeItem = null;
      this.$emit('leaf-click');
    },
    onItemKeyDown: function onItemKeyDown(event, item) {
      var listItem = event.currentTarget.parentElement;
      switch (event.which) {
        //down
        case 40:
          var nextItem = this.findNextItem(listItem);
          if (nextItem) {
            nextItem.children[0].focus();
          }
          event.preventDefault();
          break;

        //up
        case 38:
          var prevItem = this.findPrevItem(listItem);
          if (prevItem) {
            prevItem.children[0].focus();
          }
          event.preventDefault();
          break;

        //right
        case 39:
          if (item.items) {
            this.activeItem = item;
            setTimeout(function () {
              listItem.children[1].children[0].children[0].focus();
            }, 50);
          }
          event.preventDefault();
          break;
      }
      this.$emit('keydown-item', {
        originalEvent: event,
        element: listItem
      });
    },
    onChildItemKeyDown: function onChildItemKeyDown(event) {
      //left
      if (event.originalEvent.which === 37) {
        this.activeItem = null;
        event.element.parentElement.previousElementSibling.focus();
      }
    },
    findNextItem: function findNextItem(item) {
      var nextItem = item.nextElementSibling;
      if (nextItem) return utils.DomHandler.hasClass(nextItem, 'p-disabled') || !utils.DomHandler.hasClass(nextItem, 'p-menuitem') ? this.findNextItem(nextItem) : nextItem;else return null;
    },
    findPrevItem: function findPrevItem(item) {
      var prevItem = item.previousElementSibling;
      if (prevItem) return utils.DomHandler.hasClass(prevItem, 'p-disabled') || !utils.DomHandler.hasClass(prevItem, 'p-menuitem') ? this.findPrevItem(prevItem) : prevItem;else return null;
    },
    getItemClass: function getItemClass(item) {
      return ['p-menuitem', item.class, {
        'p-menuitem-active': this.activeItem === item
      }];
    },
    linkClass: function linkClass(item, routerProps) {
      return ['p-menuitem-link', {
        'p-disabled': this.disabled(item),
        'router-link-active': routerProps && routerProps.isActive,
        'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
      }];
    },
    bindDocumentClickListener: function bindDocumentClickListener() {
      var _this = this;
      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (_this.$el && !_this.$el.contains(event.target)) {
            _this.activeItem = null;
            _this.unbindDocumentClickListener();
          }
        };
        document.addEventListener('click', this.documentClickListener);
      }
    },
    unbindDocumentClickListener: function unbindDocumentClickListener() {
      if (this.documentClickListener) {
        document.removeEventListener('click', this.documentClickListener);
        this.documentClickListener = null;
      }
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
      return {
        'p-submenu-list': !this.root
      };
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
  return _c("ul", {
    ref: "element",
    class: _vm.containerClass,
    attrs: {
      role: "'menubar' : 'menu'",
      "aria-orientation": "horizontal"
    }
  }, [_vm._l(_vm.model, function (item, i) {
    return [_vm.visible(item) && !item.separator ? _c("li", {
      key: _vm.label(item) + i,
      class: _vm.getItemClass(item),
      style: item.style,
      attrs: {
        role: "none"
      },
      on: {
        mouseenter: function mouseenter($event) {
          return _vm.onItemMouseEnter($event, item);
        }
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
          var isActive = ref.isActive;
          var isExactActive = ref.isExactActive;
          return [_c("a", {
            directives: [{
              name: "ripple",
              rawName: "v-ripple"
            }],
            class: _vm.linkClass(item, {
              isActive: isActive,
              isExactActive: isExactActive
            }),
            attrs: {
              href: href,
              role: "menuitem"
            },
            on: {
              click: function click($event) {
                return _vm.onItemClick($event, item, navigate);
              },
              keydown: function keydown($event) {
                return _vm.onItemKeyDown($event, item);
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
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      class: _vm.linkClass(item),
      attrs: {
        href: item.url,
        target: item.target,
        "aria-haspopup": item.items != null,
        "aria-expanded": item === _vm.activeItem,
        role: "menuitem",
        tabindex: _vm.disabled(item) ? null : "0"
      },
      on: {
        click: function click($event) {
          return _vm.onItemClick($event, item);
        },
        keydown: function keydown($event) {
          return _vm.onItemKeyDown($event, item);
        }
      }
    }, [_c("span", {
      class: ["p-menuitem-icon", item.icon]
    }), _vm._v(" "), _c("span", {
      staticClass: "p-menuitem-text"
    }, [_vm._v(_vm._s(_vm.label(item)))]), _vm._v(" "), item.items ? _c("span", {
      staticClass: "p-submenu-icon pi pi-angle-right"
    }) : _vm._e()]), _vm._v(" "), _vm.visible(item) && item.items ? _c("TieredMenuSub", {
      key: _vm.label(item) + "_sub_",
      attrs: {
        model: item.items,
        parentActive: item === _vm.activeItem,
        exact: _vm.exact
      },
      on: {
        "leaf-click": _vm.onLeafClick,
        "keydown-item": _vm.onChildItemKeyDown
      }
    }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.visible(item) && item.separator ? _c("li", {
      key: "separator" + i,
      class: ["p-menu-separator", item.class],
      style: item.style,
      attrs: {
        role: "separator"
      }
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
  name: 'TieredMenu',
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
  target: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  data: function data() {
    return {
      visible: false
    };
  },
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
      if (item.command) {
        item.command(event);
        event.originalEvent.preventDefault();
      }
      this.hide();
    },
    toggle: function toggle(event) {
      if (this.visible) this.hide();else this.show(event);
    },
    show: function show(event) {
      this.visible = true;
      this.target = event.currentTarget;
    },
    hide: function hide() {
      this.visible = false;
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
      utils.DomHandler.absolutePosition(this.$refs.container, this.target);
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function (event) {
          if (_this.visible && _this.$refs.container && !_this.$refs.container.contains(event.target) && !_this.isTargetClicked(event)) {
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
          if (_this2.visible) {
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
          if (_this3.visible) {
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
    onLeafClick: function onLeafClick() {
      if (this.popup) {
        this.hide();
      }
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-tieredmenu p-component', {
        'p-tieredmenu-overlay': this.popup
      }];
    }
  },
  components: {
    'TieredMenuSub': __vue_component__$1
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
  }, [(_vm.popup ? _vm.visible : true) ? _c("div", {
    ref: "container",
    class: _vm.containerClass
  }, [_c("TieredMenuSub", {
    attrs: {
      model: _vm.model,
      root: true,
      popup: _vm.popup,
      exact: _vm.exact
    },
    on: {
      "leaf-click": _vm.onLeafClick
    }
  })], 1) : _vm._e()]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2d696138_0", {
    source: "\n.p-tieredmenu-overlay {\n  position: absolute;\n}\n.p-tieredmenu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.p-tieredmenu .p-submenu-list {\n  position: absolute;\n  min-width: 100%;\n  z-index: 1;\n  display: none;\n}\n.p-tieredmenu .p-menuitem-link {\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n.p-tieredmenu .p-menuitem-text {\n  line-height: 1;\n}\n.p-tieredmenu .p-menuitem {\n  position: relative;\n}\n.p-tieredmenu .p-menuitem-link .p-submenu-icon {\n  margin-left: auto;\n}\n.p-tieredmenu .p-menuitem-active > .p-submenu-list {\n  display: block;\n  left: 100%;\n  top: 0;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/tieredmenu/TieredMenu.vue"],
      "names": [],
      "mappings": ";AA6LA;EACA,kBAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;AACA;AAEA;EACA,kBAAA;EACA,eAAA;EACA,UAAA;EACA,aAAA;AACA;AAEA;EACA,eAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,cAAA;EACA,UAAA;EACA,MAAA;AACA",
      "file": "TieredMenu.vue",
      "sourcesContent": ["<template>\n  <transition name=\"p-connected-overlay\" @enter=\"onEnter\" @leave=\"onLeave\">\n    <div ref=\"container\" :class=\"containerClass\" v-if=\"popup ? visible : true\">\n      <TieredMenuSub :model=\"model\" :root=\"true\" :popup=\"popup\" @leaf-click=\"onLeafClick\" :exact=\"exact\" />\n    </div>\n  </transition>\n</template>\n\n<script>\nimport { DomHandler, ConnectedOverlayScrollHandler } from 'primevue2/utils'\nimport TieredMenuSub from './TieredMenuSub.vue'\n\nexport default {\n  name: 'TieredMenu',\n  props: {\n    popup: {\n      type: Boolean,\n      default: false\n    },\n    model: {\n      type: Array,\n      default: null\n    },\n    appendTo: {\n      type: String,\n      default: null\n    },\n    autoZIndex: {\n      type: Boolean,\n      default: true\n    },\n    baseZIndex: {\n      type: Number,\n      default: 0\n    },\n    exact: {\n      type: Boolean,\n      default: true\n    }\n  },\n  target: null,\n  outsideClickListener: null,\n  scrollHandler: null,\n  resizeListener: null,\n  data() {\n    return {\n      visible: false\n    }\n  },\n  beforeDestroy() {\n    this.restoreAppend()\n    this.unbindResizeListener()\n    this.unbindOutsideClickListener()\n\n    if (this.scrollHandler) {\n      this.scrollHandler.destroy()\n      this.scrollHandler = null\n    }\n\n    this.target = null\n  },\n  methods: {\n    itemClick(event) {\n      const item = event.item\n      if (item.command) {\n        item.command(event)\n        event.originalEvent.preventDefault()\n      }\n      this.hide()\n    },\n    toggle(event) {\n      if (this.visible)\n        this.hide()\n      else\n        this.show(event)\n    },\n    show(event) {\n      this.visible = true\n      this.target = event.currentTarget\n    },\n    hide() {\n      this.visible = false\n    },\n    onEnter() {\n      this.appendContainer()\n      this.alignOverlay()\n      this.bindOutsideClickListener()\n      this.bindResizeListener()\n      this.bindScrollListener()\n\n      if (this.autoZIndex) {\n        this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())\n      }\n    },\n    onLeave() {\n      this.unbindOutsideClickListener()\n      this.unbindResizeListener()\n      this.unbindScrollListener()\n    },\n    alignOverlay() {\n      DomHandler.absolutePosition(this.$refs.container, this.target)\n    },\n    bindOutsideClickListener() {\n      if (!this.outsideClickListener) {\n        this.outsideClickListener = (event) => {\n          if (this.visible && this.$refs.container && !this.$refs.container.contains(event.target) && !this.isTargetClicked(event)) {\n            this.hide()\n          }\n        }\n        document.addEventListener('click', this.outsideClickListener)\n      }\n    },\n    unbindOutsideClickListener() {\n      if (this.outsideClickListener) {\n        document.removeEventListener('click', this.outsideClickListener)\n        this.outsideClickListener = null\n      }\n    },\n    bindScrollListener() {\n      if (!this.scrollHandler) {\n        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {\n          if (this.visible) {\n            this.hide()\n          }\n        })\n      }\n\n      this.scrollHandler.bindScrollListener()\n    },\n    unbindScrollListener() {\n      if (this.scrollHandler) {\n        this.scrollHandler.unbindScrollListener()\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          if (this.visible) {\n            this.hide()\n          }\n        }\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    },\n    isTargetClicked() {\n      return this.target && (this.target === event.target || this.target.contains(event.target))\n    },\n    appendContainer() {\n      if (this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.appendChild(this.$refs.container)\n        else\n          document.getElementById(this.appendTo).appendChild(this.$refs.container)\n      }\n    },\n    restoreAppend() {\n      if (this.$refs.container && this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.removeChild(this.$refs.container)\n        else\n          document.getElementById(this.appendTo).removeChild(this.$refs.container)\n      }\n    },\n    onLeafClick() {\n      if (this.popup) {\n        this.hide()\n      }\n    }\n  },\n  computed: {\n    containerClass() {\n      return ['p-tieredmenu p-component', {\n        'p-tieredmenu-overlay': this.popup\n      }]\n    }\n  },\n  components: {\n    'TieredMenuSub': TieredMenuSub\n  }\n}\n</script>\n\n<style>\n.p-tieredmenu-overlay {\n  position: absolute;\n}\n\n.p-tieredmenu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.p-tieredmenu .p-submenu-list {\n  position: absolute;\n  min-width: 100%;\n  z-index: 1;\n  display: none;\n}\n\n.p-tieredmenu .p-menuitem-link {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-tieredmenu .p-menuitem-text {\n  line-height: 1;\n}\n\n.p-tieredmenu .p-menuitem {\n  position: relative;\n}\n\n.p-tieredmenu .p-menuitem-link .p-submenu-icon {\n  margin-left: auto;\n}\n\n.p-tieredmenu .p-menuitem-active > .p-submenu-list {\n  display: block;\n  left: 100%;\n  top: 0;\n}\n</style>\n"]
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
