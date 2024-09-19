'use strict';

var utils = require('primevue2/utils');
var Ripple = require('primevue2/ripple');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

//
var script = {
  name: 'OverlayPanel',
  props: {
    dismissable: {
      type: Boolean,
      default: true
    },
    showCloseIcon: {
      type: Boolean,
      default: false
    },
    appendTo: {
      type: String,
      default: null
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    autoZIndex: {
      type: Boolean,
      default: true
    },
    ariaCloseLabel: {
      type: String,
      default: 'close'
    }
  },
  data: function data() {
    return {
      visible: false
    };
  },
  selfClick: false,
  target: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  beforeDestroy: function beforeDestroy() {
    this.restoreAppend();
    if (this.dismissable) {
      this.unbindOutsideClickListener();
    }
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.unbindResizeListener();
    this.target = null;
  },
  methods: {
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
    onContentClick: function onContentClick() {
      this.selfClick = true;
    },
    onEnter: function onEnter() {
      this.appendContainer();
      this.alignOverlay();
      if (this.dismissable) {
        this.bindOutsideClickListener();
      }
      this.bindScrollListener();
      this.bindResizeListener();
      if (this.autoZIndex) {
        this.$refs.container.style.zIndex = String(this.baseZIndex + utils.DomHandler.generateZIndex());
      }
      this.$emit('show');
    },
    onLeave: function onLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit('hide');
    },
    alignOverlay: function alignOverlay() {
      utils.DomHandler.absolutePosition(this.$refs.container, this.target);
      var containerOffset = utils.DomHandler.getOffset(this.$refs.container);
      var targetOffset = utils.DomHandler.getOffset(this.target);
      var arrowLeft = 0;
      if (containerOffset.left < targetOffset.left) {
        arrowLeft = targetOffset.left - containerOffset.left;
      }
      this.$refs.container.style.setProperty('--overlayArrowLeft', "".concat(arrowLeft, "px"));
      if (containerOffset.top < targetOffset.top) {
        utils.DomHandler.addClass(this.$refs.container, 'p-overlaypanel-flipped');
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function (event) {
          if (_this.visible && !_this.selfClick && !_this.isTargetClicked(event)) {
            _this.visible = false;
          }
          _this.selfClick = false;
        };
        document.addEventListener('click', this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener('click', this.outsideClickListener);
        this.outsideClickListener = null;
        this.selfClick = false;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this2 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new utils.ConnectedOverlayScrollHandler(this.target, function () {
          if (_this2.visible) {
            _this2.visible = false;
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
          if (_this3.visible && !utils.DomHandler.isAndroid()) {
            _this3.visible = false;
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
  return _c("transition", {
    attrs: {
      name: "p-overlaypanel"
    },
    on: {
      enter: _vm.onEnter,
      leave: _vm.onLeave
    }
  }, [_vm.visible ? _c("div", {
    ref: "container",
    staticClass: "p-overlaypanel p-component"
  }, [_c("div", {
    staticClass: "p-overlaypanel-content",
    on: {
      click: _vm.onContentClick
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _vm.showCloseIcon ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-overlaypanel-close p-link",
    attrs: {
      "aria-label": _vm.ariaCloseLabel,
      type: "button"
    },
    on: {
      click: _vm.hide
    }
  }, [_c("span", {
    staticClass: "p-overlaypanel-close-icon pi pi-times"
  })]) : _vm._e()]) : _vm._e()]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-71382463_0", {
    source: "\n.p-overlaypanel {\n  position: absolute;\n  margin-top: 10px;\n}\n.p-overlaypanel-flipped {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.p-overlaypanel-close {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Animation */\n.p-overlaypanel-enter {\n  opacity: 0;\n  -webkit-transform: scaleY(0.8);\n          transform: scaleY(0.8);\n}\n.p-overlaypanel-leave-to {\n  opacity: 0;\n}\n.p-overlaypanel-enter-active {\n  -webkit-transition: opacity .12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform .12s cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity .12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform .12s cubic-bezier(0, 0, 0.2, 1);\n  transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n  transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform .12s cubic-bezier(0, 0, 0.2, 1);\n}\n.p-overlaypanel-leave-active {\n  -webkit-transition: opacity .1s linear;\n  transition: opacity .1s linear;\n}\n.p-overlaypanel:after,\n.p-overlaypanel:before {\n  bottom: 100%;\n  left: calc(var(--overlayArrowLeft, 0) + 1.25rem);\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.p-overlaypanel:after {\n  border-width: 8px;\n  margin-left: -8px;\n}\n.p-overlaypanel:before {\n  border-width: 10px;\n  margin-left: -10px;\n}\n.p-overlaypanel-flipped:after,\n.p-overlaypanel-flipped:before {\n  bottom: auto;\n  top: 100%;\n}\n.p-overlaypanel.p-overlaypanel-flipped:after {\n  border-bottom-color: transparent;\n}\n.p-overlaypanel.p-overlaypanel-flipped:before {\n  border-bottom-color: transparent\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/overlaypanel/OverlayPanel.vue"],
      "names": [],
      "mappings": ";AA4MA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,aAAA;EACA,mBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,gBAAA;EACA,kBAAA;AACA;;AAEA,cAAA;AACA;EACA,UAAA;EACA,8BAAA;UAAA,sBAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;EACA,8GAAA;EAAA,sGAAA;EAAA,8FAAA;EAAA,iJAAA;AACA;AAEA;EACA,sCAAA;EAAA,8BAAA;AACA;AAEA;;EAEA,YAAA;EACA,gDAAA;EACA,YAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,oBAAA;AACA;AAEA;EACA,iBAAA;EACA,iBAAA;AACA;AAEA;EACA,kBAAA;EACA,kBAAA;AACA;AAEA;;EAEA,YAAA;EACA,SAAA;AACA;AAEA;EACA,gCAAA;AACA;AAEA;EACA;AACA",
      "file": "OverlayPanel.vue",
      "sourcesContent": ["<template>\n  <transition name=\"p-overlaypanel\" @enter=\"onEnter\" @leave=\"onLeave\">\n    <div class=\"p-overlaypanel p-component\" v-if=\"visible\" ref=\"container\">\n      <div class=\"p-overlaypanel-content\" @click=\"onContentClick\">\n        <slot></slot>\n      </div>\n      <button\n        class=\"p-overlaypanel-close p-link\"\n        @click=\"hide\"\n        v-if=\"showCloseIcon\"\n        :aria-label=\"ariaCloseLabel\"\n        type=\"button\"\n        v-ripple>\n        <span class=\"p-overlaypanel-close-icon pi pi-times\"></span>\n      </button>\n    </div>\n  </transition>\n</template>\n\n<script>\nimport { ConnectedOverlayScrollHandler, DomHandler } from 'primevue2/utils'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'OverlayPanel',\n  props: {\n    dismissable: {\n      type: Boolean,\n      default: true\n    },\n    showCloseIcon: {\n      type: Boolean,\n      default: false\n    },\n    appendTo: {\n      type: String,\n      default: null\n    },\n    baseZIndex: {\n      type: Number,\n      default: 0\n    },\n    autoZIndex: {\n      type: Boolean,\n      default: true\n    },\n    ariaCloseLabel: {\n      type: String,\n      default: 'close'\n    }\n  },\n  data() {\n    return {\n      visible: false\n    }\n  },\n  selfClick: false,\n  target: null,\n  outsideClickListener: null,\n  scrollHandler: null,\n  resizeListener: null,\n  beforeDestroy() {\n    this.restoreAppend()\n    if (this.dismissable) {\n      this.unbindOutsideClickListener()\n    }\n    if (this.scrollHandler) {\n      this.scrollHandler.destroy()\n      this.scrollHandler = null\n    }\n    this.unbindResizeListener()\n    this.target = null\n  },\n  methods: {\n    toggle(event) {\n      if (this.visible)\n        this.hide()\n      else\n        this.show(event)\n    },\n    show(event) {\n      this.visible = true\n      this.target = event.currentTarget\n    },\n    hide() {\n      this.visible = false\n    },\n    onContentClick() {\n      this.selfClick = true\n    },\n    onEnter() {\n      this.appendContainer()\n      this.alignOverlay()\n      if (this.dismissable) {\n        this.bindOutsideClickListener()\n      }\n\n      this.bindScrollListener()\n      this.bindResizeListener()\n\n      if (this.autoZIndex) {\n        this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())\n      }\n      this.$emit('show')\n    },\n    onLeave() {\n      this.unbindOutsideClickListener()\n      this.unbindScrollListener()\n      this.unbindResizeListener()\n      this.$emit('hide')\n    },\n    alignOverlay() {\n      DomHandler.absolutePosition(this.$refs.container, this.target)\n\n      const containerOffset = DomHandler.getOffset(this.$refs.container)\n      const targetOffset = DomHandler.getOffset(this.target)\n      let arrowLeft = 0\n\n      if (containerOffset.left < targetOffset.left) {\n        arrowLeft = targetOffset.left - containerOffset.left\n      }\n      this.$refs.container.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`)\n\n      if (containerOffset.top < targetOffset.top) {\n        DomHandler.addClass(this.$refs.container, 'p-overlaypanel-flipped')\n      }\n    },\n    bindOutsideClickListener() {\n      if (!this.outsideClickListener) {\n        this.outsideClickListener = (event) => {\n          if (this.visible && !this.selfClick && !this.isTargetClicked(event)) {\n            this.visible = false\n          }\n          this.selfClick = false\n        }\n        document.addEventListener('click', this.outsideClickListener)\n      }\n    },\n    unbindOutsideClickListener() {\n      if (this.outsideClickListener) {\n        document.removeEventListener('click', this.outsideClickListener)\n        this.outsideClickListener = null\n        this.selfClick = false\n      }\n    },\n    bindScrollListener() {\n      if (!this.scrollHandler) {\n        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {\n          if (this.visible) {\n            this.visible = false\n          }\n        })\n      }\n\n      this.scrollHandler.bindScrollListener()\n    },\n    unbindScrollListener() {\n      if (this.scrollHandler) {\n        this.scrollHandler.unbindScrollListener()\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          if (this.visible && !DomHandler.isAndroid()) {\n            this.visible = false\n          }\n        }\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    },\n    isTargetClicked() {\n      return this.target && (this.target === event.target || this.target.contains(event.target))\n    },\n    appendContainer() {\n      if (this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.appendChild(this.$refs.container)\n        else\n          document.getElementById(this.appendTo).appendChild(this.$refs.container)\n      }\n    },\n    restoreAppend() {\n      if (this.$refs.container && this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.removeChild(this.$refs.container)\n        else\n          document.getElementById(this.appendTo).removeChild(this.$refs.container)\n      }\n    }\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-overlaypanel {\n  position: absolute;\n  margin-top: 10px;\n}\n\n.p-overlaypanel-flipped {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.p-overlaypanel-close {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Animation */\n.p-overlaypanel-enter {\n  opacity: 0;\n  transform: scaleY(0.8);\n}\n\n.p-overlaypanel-leave-to {\n  opacity: 0;\n}\n\n.p-overlaypanel-enter-active {\n  transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-overlaypanel-leave-active {\n  transition: opacity .1s linear;\n}\n\n.p-overlaypanel:after,\n.p-overlaypanel:before {\n  bottom: 100%;\n  left: calc(var(--overlayArrowLeft, 0) + 1.25rem);\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.p-overlaypanel:after {\n  border-width: 8px;\n  margin-left: -8px;\n}\n\n.p-overlaypanel:before {\n  border-width: 10px;\n  margin-left: -10px;\n}\n\n.p-overlaypanel-flipped:after,\n.p-overlaypanel-flipped:before {\n  bottom: auto;\n  top: 100%;\n}\n\n.p-overlaypanel.p-overlaypanel-flipped:after {\n  border-bottom-color: transparent;\n}\n\n.p-overlaypanel.p-overlaypanel-flipped:before {\n  border-bottom-color: transparent\n}\n</style>\n"]
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
