import { DomHandler } from 'primevue2/utils';
import Ripple from 'primevue2/ripple';

//
var script$1 = {
  name: 'ContextMenuSub',
  props: {
    model: {
      type: Array,
      default: null
    },
    root: {
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
  methods: {
    onItemMouseEnter: function onItemMouseEnter(event, item) {
      if (this.disabled(item)) {
        event.preventDefault();
        return;
      }
      this.activeItem = item;
    },
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
      if (!item.items) {
        this.onLeafClick();
      }
      if (item.to && navigate) {
        navigate(event);
      }
    },
    onLeafClick: function onLeafClick() {
      this.activeItem = null;
      this.$emit('leaf-click');
    },
    onEnter: function onEnter() {
      this.position();
    },
    position: function position() {
      var parentItem = this.$refs.container.parentElement;
      var containerOffset = DomHandler.getOffset(this.$refs.container.parentElement);
      var viewport = DomHandler.getViewport();
      var sublistWidth = this.$refs.container.offsetParent ? this.$refs.container.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.$refs.container);
      var itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);
      this.$refs.container.style.top = '0px';
      if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - DomHandler.calculateScrollbarWidth()) {
        this.$refs.container.style.left = -1 * sublistWidth + 'px';
      } else {
        this.$refs.container.style.left = itemOuterWidth + 'px';
      }
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

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("transition", {
    attrs: {
      name: "p-contextmenusub"
    },
    on: {
      enter: _vm.onEnter
    }
  }, [(_vm.root ? true : _vm.parentActive) ? _c("ul", {
    ref: "container",
    class: _vm.containerClass,
    attrs: {
      role: "menu"
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
        }
      }
    }, [_c("span", {
      class: ["p-menuitem-icon", item.icon]
    }), _vm._v(" "), _c("span", {
      staticClass: "p-menuitem-text"
    }, [_vm._v(_vm._s(_vm.label(item)))]), _vm._v(" "), item.items ? _c("span", {
      staticClass: "p-submenu-icon pi pi-angle-right"
    }) : _vm._e()]), _vm._v(" "), _vm.visible(item) && item.items ? _c("ContextMenuSub", {
      key: _vm.label(item) + "_sub_",
      attrs: {
        model: item.items,
        parentActive: item === _vm.activeItem
      },
      on: {
        "leaf-click": _vm.onLeafClick
      }
    }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.visible(item) && item.separator ? _c("li", {
      key: "separator" + i,
      class: ["p-menu-separator", item.class],
      style: item.style,
      attrs: {
        role: "separator"
      }
    }) : _vm._e()];
  })], 2) : _vm._e()]);
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
  name: 'ContextMenu',
  props: {
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
    global: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: true
    }
  },
  target: null,
  outsideClickListener: null,
  resizeListener: null,
  documentContextMenuListener: null,
  pageX: null,
  pageY: null,
  data: function data() {
    return {
      visible: false
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.restoreAppend();
    this.unbindResizeListener();
    this.unbindOutsideClickListener();
    this.unbindDocumentContextMenuListener();
  },
  mounted: function mounted() {
    if (this.global) {
      this.bindDocumentContextMenuListener();
    }
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
    onLeafClick: function onLeafClick() {
      this.hide();
    },
    show: function show(event) {
      this.pageX = event.pageX;
      this.pageY = event.pageY;
      if (this.visible) this.position();else this.visible = true;
      event.stopPropagation();
      event.preventDefault();
    },
    hide: function hide() {
      this.visible = false;
    },
    onEnter: function onEnter() {
      this.appendContainer();
      this.position();
      this.bindOutsideClickListener();
      this.bindResizeListener();
      if (this.autoZIndex) {
        this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
      }
    },
    onLeave: function onLeave() {
      this.unbindOutsideClickListener();
      this.unbindResizeListener();
    },
    position: function position() {
      var left = this.pageX + 1;
      var top = this.pageY + 1;
      var width = this.$refs.container.offsetParent ? this.$refs.container.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.$refs.container);
      var height = this.$refs.container.offsetParent ? this.$refs.container.offsetHeight : DomHandler.getHiddenElementOuterHeight(this.$refs.container);
      var viewport = DomHandler.getViewport();

      //flip
      if (left + width - document.body.scrollLeft > viewport.width) {
        left -= width;
      }

      //flip
      if (top + height - document.body.scrollTop > viewport.height) {
        top -= height;
      }

      //fit
      if (left < document.body.scrollLeft) {
        left = document.body.scrollLeft;
      }

      //fit
      if (top < document.body.scrollTop) {
        top = document.body.scrollTop;
      }
      this.$refs.container.style.left = left + 'px';
      this.$refs.container.style.top = top + 'px';
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function (event) {
          if (_this.visible && _this.$refs.container && !_this.$refs.container.contains(event.target) && !event.ctrlKey) {
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
    bindResizeListener: function bindResizeListener() {
      var _this2 = this;
      if (!this.resizeListener) {
        this.resizeListener = function () {
          if (_this2.visible) {
            _this2.hide();
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
    bindDocumentContextMenuListener: function bindDocumentContextMenuListener() {
      var _this3 = this;
      if (!this.documentContextMenuListener) {
        this.documentContextMenuListener = function (event) {
          _this3.show(event);
        };
        document.addEventListener('contextmenu', this.documentContextMenuListener);
      }
    },
    unbindDocumentContextMenuListener: function unbindDocumentContextMenuListener() {
      if (this.documentContextMenuListener) {
        document.removeEventListener('contextmenu', this.documentContextMenuListener);
        this.documentContextMenuListener = null;
      }
    }
  },
  components: {
    'ContextMenuSub': __vue_component__$1
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
      name: "p-contextmenu"
    },
    on: {
      enter: _vm.onEnter,
      leave: _vm.onLeave
    }
  }, [_vm.visible ? _c("div", {
    ref: "container",
    staticClass: "p-contextmenu p-component"
  }, [_c("ContextMenuSub", {
    attrs: {
      model: _vm.model,
      root: true,
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
  inject("data-v-7680fe3c_0", {
    source: "\n.p-contextmenu {\n  position: absolute;\n}\n.p-contextmenu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.p-contextmenu .p-submenu-list {\n  position: absolute;\n  min-width: 100%;\n  z-index: 1;\n}\n.p-contextmenu .p-menuitem-link {\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n.p-contextmenu .p-menuitem-text {\n  line-height: 1;\n}\n.p-contextmenu .p-menuitem {\n  position: relative;\n}\n.p-contextmenu .p-menuitem-link .p-submenu-icon {\n  margin-left: auto;\n}\n.p-contextmenu-enter {\n  opacity: 0;\n}\n.p-contextmenu-enter-active {\n  -webkit-transition: opacity 250ms;\n  transition: opacity 250ms;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/contextmenu/ContextMenu.vue"],
      "names": [],
      "mappings": ";AAkNA;EACA,kBAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;AACA;AAEA;EACA,kBAAA;EACA,eAAA;EACA,UAAA;AACA;AAEA;EACA,eAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;EACA,iCAAA;EAAA,yBAAA;AACA",
      "file": "ContextMenu.vue",
      "sourcesContent": ["<template>\n  <transition name=\"p-contextmenu\" @enter=\"onEnter\" @leave=\"onLeave\">\n    <div ref=\"container\" class=\"p-contextmenu p-component\" v-if=\"visible\">\n      <ContextMenuSub :model=\"model\" :root=\"true\" @leaf-click=\"onLeafClick\" :exact=\"exact\" />\n    </div>\n  </transition>\n</template>\n\n<script>\nimport { DomHandler } from 'primevue2/utils'\nimport ContextMenuSub from './ContextMenuSub.vue'\n\nexport default {\n  name: 'ContextMenu',\n  props: {\n    model: {\n      type: Array,\n      default: null\n    },\n    appendTo: {\n      type: String,\n      default: null\n    },\n    autoZIndex: {\n      type: Boolean,\n      default: true\n    },\n    baseZIndex: {\n      type: Number,\n      default: 0\n    },\n    global: {\n      type: Boolean,\n      default: false\n    },\n    exact: {\n      type: Boolean,\n      default: true\n    }\n  },\n  target: null,\n  outsideClickListener: null,\n  resizeListener: null,\n  documentContextMenuListener: null,\n  pageX: null,\n  pageY: null,\n  data() {\n    return {\n      visible: false\n    }\n  },\n  beforeDestroy() {\n    this.restoreAppend()\n    this.unbindResizeListener()\n    this.unbindOutsideClickListener()\n    this.unbindDocumentContextMenuListener()\n  },\n  mounted() {\n    if (this.global) {\n      this.bindDocumentContextMenuListener()\n    }\n  },\n  methods: {\n    itemClick(event) {\n      const item = event.item\n      if (item.command) {\n        item.command(event)\n        event.originalEvent.preventDefault()\n      }\n      this.hide()\n    },\n    toggle(event) {\n      if (this.visible)\n        this.hide()\n      else\n        this.show(event)\n    },\n    onLeafClick() {\n      this.hide()\n    },\n    show(event) {\n      this.pageX = event.pageX\n      this.pageY = event.pageY\n\n      if (this.visible)\n        this.position()\n      else\n        this.visible = true\n\n      event.stopPropagation()\n      event.preventDefault()\n    },\n    hide() {\n      this.visible = false\n    },\n    onEnter() {\n      this.appendContainer()\n      this.position()\n      this.bindOutsideClickListener()\n      this.bindResizeListener()\n\n      if (this.autoZIndex) {\n        this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())\n      }\n    },\n    onLeave() {\n      this.unbindOutsideClickListener()\n      this.unbindResizeListener()\n    },\n    position() {\n      let left = this.pageX + 1\n      let top = this.pageY + 1\n      let width = this.$refs.container.offsetParent ? this.$refs.container.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.$refs.container)\n      let height = this.$refs.container.offsetParent ? this.$refs.container.offsetHeight : DomHandler.getHiddenElementOuterHeight(this.$refs.container)\n      let viewport = DomHandler.getViewport()\n\n      //flip\n      if (left + width - document.body.scrollLeft > viewport.width) {\n        left -= width\n      }\n\n      //flip\n      if (top + height - document.body.scrollTop > viewport.height) {\n        top -= height\n      }\n\n      //fit\n      if (left < document.body.scrollLeft) {\n        left = document.body.scrollLeft\n      }\n\n      //fit\n      if (top < document.body.scrollTop) {\n        top = document.body.scrollTop\n      }\n\n      this.$refs.container.style.left = left + 'px'\n      this.$refs.container.style.top = top + 'px'\n    },\n    bindOutsideClickListener() {\n      if (!this.outsideClickListener) {\n        this.outsideClickListener = (event) => {\n          if (this.visible && this.$refs.container && !this.$refs.container.contains(event.target) && !event.ctrlKey) {\n            this.hide()\n          }\n        }\n        document.addEventListener('click', this.outsideClickListener)\n      }\n    },\n    unbindOutsideClickListener() {\n      if (this.outsideClickListener) {\n        document.removeEventListener('click', this.outsideClickListener)\n        this.outsideClickListener = null\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          if (this.visible) {\n            this.hide()\n          }\n        }\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    },\n    appendContainer() {\n      if (this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.appendChild(this.$refs.container)\n        else\n          document.getElementById(this.appendTo).appendChild(this.$refs.container)\n      }\n    },\n    restoreAppend() {\n      if (this.$refs.container && this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.removeChild(this.$refs.container)\n        else\n          document.getElementById(this.appendTo).removeChild(this.$refs.container)\n      }\n    },\n    bindDocumentContextMenuListener() {\n      if (!this.documentContextMenuListener) {\n        this.documentContextMenuListener = (event) => {\n          this.show(event)\n        }\n\n        document.addEventListener('contextmenu', this.documentContextMenuListener)\n      }\n    },\n    unbindDocumentContextMenuListener() {\n      if (this.documentContextMenuListener) {\n        document.removeEventListener('contextmenu', this.documentContextMenuListener)\n        this.documentContextMenuListener = null\n      }\n    }\n  },\n  components: {\n    'ContextMenuSub': ContextMenuSub\n  }\n}\n</script>\n\n<style>\n.p-contextmenu {\n  position: absolute;\n}\n\n.p-contextmenu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.p-contextmenu .p-submenu-list {\n  position: absolute;\n  min-width: 100%;\n  z-index: 1;\n}\n\n.p-contextmenu .p-menuitem-link {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-contextmenu .p-menuitem-text {\n  line-height: 1;\n}\n\n.p-contextmenu .p-menuitem {\n  position: relative;\n}\n\n.p-contextmenu .p-menuitem-link .p-submenu-icon {\n  margin-left: auto;\n}\n\n.p-contextmenu-enter {\n  opacity: 0;\n}\n\n.p-contextmenu-enter-active {\n  transition: opacity 250ms;\n}\n</style>\n"]
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
