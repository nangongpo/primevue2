import { DomHandler } from 'primevue2/utils';
import Ripple from 'primevue2/ripple';

//
var script = {
  name: 'Sidebar',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'left'
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    autoZIndex: {
      type: Boolean,
      default: true
    },
    dismissable: {
      type: Boolean,
      default: true
    },
    showCloseIcon: {
      type: Boolean,
      default: true
    },
    modal: {
      type: Boolean,
      default: true
    },
    ariaCloseLabel: {
      type: String,
      default: 'close'
    }
  },
  mask: null,
  maskClickListener: null,
  beforeDestroy: function beforeDestroy() {
    this.destroyModal();
  },
  methods: {
    hide: function hide() {
      this.$emit('update:visible', false);
    },
    onEnter: function onEnter() {
      this.$emit('show');
      if (this.autoZIndex) {
        this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
      }
      this.focus();
      if (this.modal && !this.fullScreen) {
        this.enableModality();
      }
    },
    onLeave: function onLeave() {
      this.$emit('hide');
      if (this.modal && !this.fullScreen) {
        this.disableModality();
      }
    },
    focus: function focus() {
      var focusable = DomHandler.findSingle(this.$refs.container, 'input,button');
      if (focusable) {
        focusable.focus();
      }
    },
    enableModality: function enableModality() {
      if (!this.mask) {
        this.mask = document.createElement('div');
        this.mask.setAttribute('class', 'p-sidebar-mask p-component-overlay p-component-overlay-enter');
        this.mask.style.zIndex = String(parseInt(this.$refs.container.style.zIndex, 10) - 1);
        if (this.dismissable) {
          this.bindMaskClickListener();
        }
        document.body.appendChild(this.mask);
        DomHandler.addClass(document.body, 'p-overflow-hidden');
      }
    },
    disableModality: function disableModality() {
      var _this = this;
      if (this.mask) {
        DomHandler.addClass(this.mask, 'p-component-overlay-leave');
        this.mask.addEventListener('animationend', function () {
          _this.destroyModal();
        });
      }
    },
    bindMaskClickListener: function bindMaskClickListener() {
      var _this2 = this;
      if (!this.maskClickListener) {
        this.maskClickListener = function () {
          _this2.hide();
        };
        this.mask.addEventListener('click', this.maskClickListener);
      }
    },
    unbindMaskClickListener: function unbindMaskClickListener() {
      if (this.maskClickListener) {
        this.mask.removeEventListener('click', this.maskClickListener);
        this.maskClickListener = null;
      }
    },
    destroyModal: function destroyModal() {
      if (this.mask) {
        this.unbindMaskClickListener();
        document.body.removeChild(this.mask);
        DomHandler.removeClass(document.body, 'p-overflow-hidden');
        this.mask = null;
      }
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-sidebar p-component p-sidebar-' + this.position, {
        'p-sidebar-active': this.visible
      }];
    },
    fullScreen: function fullScreen() {
      return this.position === 'full';
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
      name: "p-sidebar",
      appear: ""
    },
    on: {
      enter: _vm.onEnter,
      leave: _vm.onLeave
    }
  }, [_vm.visible ? _c("div", {
    ref: "container",
    class: _vm.containerClass,
    attrs: {
      role: "complementary",
      "aria-modal": _vm.modal
    }
  }, [_c("div", {
    staticClass: "p-sidebar-header"
  }, [_vm.$slots.header ? _c("div", {
    staticClass: "p-sidebar-header-content"
  }, [_vm._t("header")], 2) : _vm._e(), _vm._v(" "), _vm.showCloseIcon ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-sidebar-close p-sidebar-icon p-link",
    attrs: {
      "aria-label": _vm.ariaCloseLabel,
      type: "button"
    },
    on: {
      click: _vm.hide
    }
  }, [_c("span", {
    staticClass: "p-sidebar-close-icon pi pi-times"
  })]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "p-sidebar-content"
  }, [_vm._t("default")], 2)]) : _vm._e()]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1eaacb19_0", {
    source: "\n.p-sidebar {\n  position: fixed;\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.p-sidebar-content {\n  position: relative;\n  overflow-y: auto;\n}\n.p-sidebar-header {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.p-sidebar-icon {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.p-sidebar-left {\n  top: 0;\n  left: 0;\n  width: 20rem;\n  height: 100%;\n}\n.p-sidebar-right {\n  top: 0;\n  right: 0;\n  width: 20rem;\n  height: 100%;\n}\n.p-sidebar-top {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 10rem;\n}\n.p-sidebar-bottom {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 10rem;\n}\n.p-sidebar-full {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  -webkit-transition: none;\n  transition: none;\n}\n.p-sidebar-left.p-sidebar-enter,\n.p-sidebar-left.p-sidebar-leave-to {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n.p-sidebar-right.p-sidebar-enter,\n.p-sidebar-right.p-sidebar-leave-to {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n.p-sidebar-top.p-sidebar-enter,\n.p-sidebar-top.p-sidebar-leave-to {\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n.p-sidebar-bottom.p-sidebar-enter,\n.p-sidebar-bottom.p-sidebar-leave-to {\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n}\n.p-sidebar-full.p-sidebar-enter,\n.p-sidebar-full.p-sidebar-leave-to {\n  opacity: 0;\n}\n.p-sidebar-full.p-sidebar-enter-active,\n.p-sidebar-full.p-sidebar-leave-active {\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.p-sidebar-left.p-sidebar-sm,\n.p-sidebar-right.p-sidebar-sm {\n  width: 20rem;\n}\n.p-sidebar-left.p-sidebar-md,\n.p-sidebar-right.p-sidebar-md {\n  width: 40rem;\n}\n.p-sidebar-left.p-sidebar-lg,\n.p-sidebar-right.p-sidebar-lg {\n  width: 60rem;\n}\n.p-sidebar-top.p-sidebar-sm,\n.p-sidebar-bottom.p-sidebar-sm {\n  height: 10rem;\n}\n.p-sidebar-top.p-sidebar-md,\n.p-sidebar-bottom.p-sidebar-md {\n  height: 20rem;\n}\n.p-sidebar-top.p-sidebar-lg,\n.p-sidebar-bottom.p-sidebar-lg {\n  height: 30rem;\n}\n@media screen and (max-width: 64em) {\n.p-sidebar-left.p-sidebar-lg,\n  .p-sidebar-left.p-sidebar-md,\n  .p-sidebar-right.p-sidebar-lg,\n  .p-sidebar-right.p-sidebar-md {\n      width: 20rem;\n}\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/sidebar/Sidebar.vue"],
      "names": [],
      "mappings": ";AA6JA;EACA,eAAA;EACA,yCAAA;EAAA,iCAAA;EAAA,yBAAA;EAAA,gDAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA;AAEA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,qBAAA;EAAA,iCAAA;MAAA,kBAAA;UAAA,yBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,YAAA;AACA;AAEA;EACA,MAAA;EACA,QAAA;EACA,YAAA;EACA,YAAA;AACA;AAEA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;AACA;AAEA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,wBAAA;EACA,gBAAA;AACA;AAEA;;EAEA,oCAAA;UAAA,4BAAA;AACA;AAEA;;EAEA,mCAAA;UAAA,2BAAA;AACA;AAEA;;EAEA,oCAAA;UAAA,4BAAA;AACA;AAEA;;EAEA,mCAAA;UAAA,2BAAA;AACA;AAEA;;EAEA,UAAA;AACA;AAEA;;EAEA,kEAAA;EAAA,0DAAA;AACA;AAEA;;EAEA,YAAA;AACA;AAEA;;EAEA,YAAA;AACA;AAEA;;EAEA,YAAA;AACA;AAEA;;EAEA,aAAA;AACA;AAEA;;EAEA,aAAA;AACA;AAEA;;EAEA,aAAA;AACA;AAEA;AACA;;;;MAIA,YAAA;AACA;AACA",
      "file": "Sidebar.vue",
      "sourcesContent": ["<template>\n  <transition name=\"p-sidebar\" @enter=\"onEnter\" @leave=\"onLeave\" appear>\n    <div :class=\"containerClass\" v-if=\"visible\" ref=\"container\" role=\"complementary\" :aria-modal=\"modal\">\n      <div class=\"p-sidebar-header\">\n        <div v-if=\"$slots.header\" class=\"p-sidebar-header-content\">\n          <slot name=\"header\"></slot>\n        </div>\n        <button\n          class=\"p-sidebar-close p-sidebar-icon p-link\"\n          @click=\"hide\"\n          :aria-label=\"ariaCloseLabel\"\n          v-if=\"showCloseIcon\"\n          type=\"button\"\n          v-ripple>\n          <span class=\"p-sidebar-close-icon pi pi-times\" />\n        </button>\n      </div>\n      <div class=\"p-sidebar-content\">\n        <slot></slot>\n      </div>\n    </div>\n  </transition>\n</template>\n\n<script>\nimport { DomHandler } from 'primevue2/utils'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'Sidebar',\n  props: {\n    visible: {\n      type: Boolean,\n      default: false\n    },\n    position: {\n      type: String,\n      default: 'left'\n    },\n    baseZIndex: {\n      type: Number,\n      default: 0\n    },\n    autoZIndex: {\n      type: Boolean,\n      default: true\n    },\n    dismissable: {\n      type: Boolean,\n      default: true\n    },\n    showCloseIcon: {\n      type: Boolean,\n      default: true\n    },\n    modal: {\n      type: Boolean,\n      default: true\n    },\n    ariaCloseLabel: {\n      type: String,\n      default: 'close'\n    }\n  },\n  mask: null,\n  maskClickListener: null,\n  beforeDestroy() {\n    this.destroyModal()\n  },\n  methods: {\n    hide() {\n      this.$emit('update:visible', false)\n    },\n    onEnter() {\n      this.$emit('show')\n\n      if (this.autoZIndex) {\n        this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())\n      }\n      this.focus()\n      if (this.modal && !this.fullScreen) {\n        this.enableModality()\n      }\n    },\n    onLeave() {\n      this.$emit('hide')\n\n      if (this.modal && !this.fullScreen) {\n        this.disableModality()\n      }\n    },\n    focus() {\n      let focusable = DomHandler.findSingle(this.$refs.container, 'input,button')\n      if (focusable) {\n        focusable.focus()\n      }\n    },\n    enableModality() {\n      if (!this.mask) {\n        this.mask = document.createElement('div')\n        this.mask.setAttribute('class', 'p-sidebar-mask p-component-overlay p-component-overlay-enter')\n        this.mask.style.zIndex = String(parseInt(this.$refs.container.style.zIndex, 10) - 1)\n        if (this.dismissable) {\n          this.bindMaskClickListener()\n        }\n        document.body.appendChild(this.mask)\n        DomHandler.addClass(document.body, 'p-overflow-hidden')\n      }\n    },\n    disableModality() {\n      if (this.mask) {\n        DomHandler.addClass(this.mask, 'p-component-overlay-leave')\n        this.mask.addEventListener('animationend', () => {\n          this.destroyModal()\n        })\n      }\n    },\n    bindMaskClickListener() {\n      if (!this.maskClickListener) {\n        this.maskClickListener = () => {\n          this.hide()\n        }\n        this.mask.addEventListener('click', this.maskClickListener)\n      }\n    },\n    unbindMaskClickListener() {\n      if (this.maskClickListener) {\n        this.mask.removeEventListener('click', this.maskClickListener)\n        this.maskClickListener = null\n      }\n    },\n    destroyModal() {\n      if (this.mask) {\n        this.unbindMaskClickListener()\n        document.body.removeChild(this.mask)\n        DomHandler.removeClass(document.body, 'p-overflow-hidden')\n        this.mask = null\n      }\n    }\n  },\n  computed: {\n    containerClass() {\n      return ['p-sidebar p-component p-sidebar-' + this.position, {\n        'p-sidebar-active': this.visible\n      }]\n    },\n    fullScreen() {\n      return this.position === 'full'\n    }\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-sidebar {\n  position: fixed;\n  transition: transform .3s;\n  display: flex;\n  flex-direction: column;\n}\n\n.p-sidebar-content {\n  position: relative;\n  overflow-y: auto;\n}\n\n.p-sidebar-header {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.p-sidebar-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.p-sidebar-left {\n  top: 0;\n  left: 0;\n  width: 20rem;\n  height: 100%;\n}\n\n.p-sidebar-right {\n  top: 0;\n  right: 0;\n  width: 20rem;\n  height: 100%;\n}\n\n.p-sidebar-top {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 10rem;\n}\n\n.p-sidebar-bottom {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 10rem;\n}\n\n.p-sidebar-full {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  -webkit-transition: none;\n  transition: none;\n}\n\n.p-sidebar-left.p-sidebar-enter,\n.p-sidebar-left.p-sidebar-leave-to {\n  transform: translateX(-100%);\n}\n\n.p-sidebar-right.p-sidebar-enter,\n.p-sidebar-right.p-sidebar-leave-to {\n  transform: translateX(100%);\n}\n\n.p-sidebar-top.p-sidebar-enter,\n.p-sidebar-top.p-sidebar-leave-to {\n  transform: translateY(-100%);\n}\n\n.p-sidebar-bottom.p-sidebar-enter,\n.p-sidebar-bottom.p-sidebar-leave-to {\n  transform: translateY(100%);\n}\n\n.p-sidebar-full.p-sidebar-enter,\n.p-sidebar-full.p-sidebar-leave-to {\n  opacity: 0;\n}\n\n.p-sidebar-full.p-sidebar-enter-active,\n.p-sidebar-full.p-sidebar-leave-active {\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.p-sidebar-left.p-sidebar-sm,\n.p-sidebar-right.p-sidebar-sm {\n  width: 20rem;\n}\n\n.p-sidebar-left.p-sidebar-md,\n.p-sidebar-right.p-sidebar-md {\n  width: 40rem;\n}\n\n.p-sidebar-left.p-sidebar-lg,\n.p-sidebar-right.p-sidebar-lg {\n  width: 60rem;\n}\n\n.p-sidebar-top.p-sidebar-sm,\n.p-sidebar-bottom.p-sidebar-sm {\n  height: 10rem;\n}\n\n.p-sidebar-top.p-sidebar-md,\n.p-sidebar-bottom.p-sidebar-md {\n  height: 20rem;\n}\n\n.p-sidebar-top.p-sidebar-lg,\n.p-sidebar-bottom.p-sidebar-lg {\n  height: 30rem;\n}\n\n@media screen and (max-width: 64em) {\n  .p-sidebar-left.p-sidebar-lg,\n  .p-sidebar-left.p-sidebar-md,\n  .p-sidebar-right.p-sidebar-lg,\n  .p-sidebar-right.p-sidebar-md {\n      width: 20rem;\n  }\n}\n</style>\n"]
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
