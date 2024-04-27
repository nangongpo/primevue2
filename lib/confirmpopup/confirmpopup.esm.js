import ConfirmationEventBus from 'primevue2/confirmationeventbus';
import Button from 'primevue2/button';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primevue2/utils';

//
var script = {
  name: 'ConfirmPopup',
  props: {
    group: String
  },
  data: function data() {
    return {
      visible: false,
      confirmation: null
    };
  },
  target: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  container: null,
  mounted: function mounted() {
    var _this = this;
    ConfirmationEventBus.on('confirm', function (options) {
      if (!options) {
        return;
      }
      if (options.group === _this.group) {
        _this.confirmation = options;
        _this.target = options.target;
        _this.visible = true;
      }
    });
    ConfirmationEventBus.on('close', function () {
      _this.visible = false;
      _this.confirmation = null;
    });
  },
  beforeDestroy: function beforeDestroy() {
    ConfirmationEventBus.off('confirm');
    ConfirmationEventBus.off('close');
    this.restoreAppend();
    this.unbindOutsideClickListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.unbindResizeListener();
    this.target = null;
    this.container = null;
    this.confirmation = null;
  },
  methods: {
    accept: function accept() {
      if (this.confirmation.accept) {
        this.confirmation.accept();
      }
      this.visible = false;
    },
    reject: function reject() {
      if (this.confirmation.reject) {
        this.confirmation.reject();
      }
      this.visible = false;
    },
    onEnter: function onEnter() {
      this.appendContainer();
      this.alignOverlay();
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
    },
    onLeave: function onLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
    },
    alignOverlay: function alignOverlay() {
      DomHandler.absolutePosition(this.$refs.container, this.target);
      var containerOffset = DomHandler.getOffset(this.$refs.container);
      var targetOffset = DomHandler.getOffset(this.target);
      var arrowLeft = 0;
      if (containerOffset.left < targetOffset.left) {
        arrowLeft = targetOffset.left - containerOffset.left;
      }
      this.$refs.container.style.setProperty('--overlayArrowLeft', "".concat(arrowLeft, "px"));
      if (containerOffset.top < targetOffset.top) {
        DomHandler.addClass(this.$refs.container, 'p-confirm-popup-flipped');
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this2 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function (event) {
          if (_this2.visible && _this2.$refs.container && !_this2.$refs.container.contains(event.target) && !_this2.isTargetClicked(event)) {
            _this2.visible = false;
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
      var _this3 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, function () {
          if (_this3.visible) {
            _this3.visible = false;
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
      var _this4 = this;
      if (!this.resizeListener) {
        this.resizeListener = function () {
          if (_this4.visible) {
            _this4.visible = false;
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
      document.body.append(this.$refs.container);
    },
    restoreAppend: function restoreAppend() {
      if (this.container) {
        document.body.remove(this.$refs.container);
      }
    }
  },
  computed: {
    message: function message() {
      return this.confirmation ? this.confirmation.message : null;
    },
    iconClass: function iconClass() {
      return ['p-confirm-popup-icon', this.confirmation ? this.confirmation.icon : null];
    },
    acceptLabel: function acceptLabel() {
      return this.confirmation ? this.confirmation.acceptLabel || this.$primevue.config.locale.accept : null;
    },
    rejectLabel: function rejectLabel() {
      return this.confirmation ? this.confirmation.rejectLabel || this.$primevue.config.locale.reject : null;
    },
    acceptIcon: function acceptIcon() {
      return this.confirmation ? this.confirmation.acceptIcon : null;
    },
    rejectIcon: function rejectIcon() {
      return this.confirmation ? this.confirmation.rejectIcon : null;
    },
    acceptClass: function acceptClass() {
      return ['p-confirm-popup-accept p-button-sm', this.confirmation ? this.confirmation.acceptClass : null];
    },
    rejectClass: function rejectClass() {
      return ['p-confirm-popup-reject p-button-sm', this.confirmation ? this.confirmation.rejectClass || 'p-button-text' : null];
    }
  },
  components: {
    'CPButton': Button
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
      name: "p-confirm-popup"
    },
    on: {
      enter: _vm.onEnter,
      leave: _vm.onLeave
    }
  }, [_vm.visible ? _c("div", {
    ref: "container",
    staticClass: "p-confirm-popup p-component"
  }, [_vm.$scopedSlots.message ? _vm._t("message") : [_c("div", {
    staticClass: "p-confirm-popup-content"
  }, [_c("i", {
    class: _vm.iconClass
  }), _vm._v(" "), _c("span", {
    staticClass: "p-confirm-popup-message"
  }, [_vm._v(_vm._s(_vm.confirmation.message))])])], _vm._v(" "), _c("div", {
    staticClass: "p-confirm-popup-footer"
  }, [_c("CPButton", {
    class: _vm.rejectClass,
    attrs: {
      label: _vm.rejectLabel,
      icon: _vm.rejectIcon
    },
    on: {
      click: function click($event) {
        return _vm.reject();
      }
    }
  }), _vm._v(" "), _c("CPButton", {
    class: _vm.acceptClass,
    attrs: {
      label: _vm.acceptLabel,
      icon: _vm.acceptIcon,
      autofocus: ""
    },
    on: {
      click: function click($event) {
        return _vm.accept();
      }
    }
  })], 1)], 2) : _vm._e()]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-0a1cbbc5_0", {
    source: "\n.p-confirm-popup {\n  position: absolute;\n  margin-top: 10px;\n}\n.p-confirm-popup-flipped {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n/* Animation */\n.p-confirm-popup-enter-from {\n  opacity: 0;\n  -webkit-transform: scaleY(0.8);\n          transform: scaleY(0.8);\n}\n.p-confirm-popup-leave-to {\n  opacity: 0;\n}\n.p-confirm-popup-enter-active {\n  -webkit-transition: opacity 0.12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity 0.12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);\n}\n.p-confirm-popup-leave-active {\n  -webkit-transition: opacity 0.1s linear;\n  transition: opacity 0.1s linear;\n}\n.p-confirm-popup:after,\n.p-confirm-popup:before {\n  bottom: 100%;\n  left: calc(var(--overlayArrowLeft, 0) + 1.25rem);\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.p-confirm-popup:after {\n  border-width: 8px;\n  margin-left: -8px;\n}\n.p-confirm-popup:before {\n  border-width: 10px;\n  margin-left: -10px;\n}\n.p-confirm-popup-flipped:after,\n.p-confirm-popup-flipped:before {\n  bottom: auto;\n  top: 100%;\n}\n.p-confirm-popup.p-confirm-popup-flipped:after {\n  border-bottom-color: transparent;\n}\n.p-confirm-popup.p-confirm-popup-flipped:before {\n  border-bottom-color: transparent;\n}\n.p-confirm-popup .p-confirm-popup-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/confirmpopup/ConfirmPopup.vue"],
      "names": [],
      "mappings": ";AAiNA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,aAAA;EACA,mBAAA;AACA;;AAEA,cAAA;AACA;EACA,UAAA;EACA,8BAAA;UAAA,sBAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;EACA,gHAAA;EAAA,wGAAA;EAAA,gGAAA;EAAA,oJAAA;AACA;AAEA;EACA,uCAAA;EAAA,+BAAA;AACA;AAEA;;EAEA,YAAA;EACA,gDAAA;EACA,YAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,oBAAA;AACA;AAEA;EACA,iBAAA;EACA,iBAAA;AACA;AAEA;EACA,kBAAA;EACA,kBAAA;AACA;AAEA;;EAEA,YAAA;EACA,SAAA;AACA;AAEA;EACA,gCAAA;AACA;AAEA;EACA,gCAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA",
      "file": "ConfirmPopup.vue",
      "sourcesContent": ["<template>\n  <transition name=\"p-confirm-popup\" @enter=\"onEnter\" @leave=\"onLeave\">\n    <div class=\"p-confirm-popup p-component\" v-if=\"visible\" ref=\"container\">\n      <slot name=\"message\" v-if=\"$scopedSlots.message\"></slot>\n      <template v-else>\n        <div class=\"p-confirm-popup-content\">\n          <i :class=\"iconClass\" />\n          <span class=\"p-confirm-popup-message\">{{ confirmation.message }}</span>\n        </div>\n      </template>\n      <div class=\"p-confirm-popup-footer\">\n        <CPButton :label=\"rejectLabel\" :icon=\"rejectIcon\" :class=\"rejectClass\" @click=\"reject()\" />\n        <CPButton :label=\"acceptLabel\" :icon=\"acceptIcon\" :class=\"acceptClass\" @click=\"accept()\" autofocus />\n      </div>\n    </div>\n  </transition>\n</template>\n\n<script>\nimport ConfirmationEventBus from 'primevue2/confirmationeventbus'\nimport Button from 'primevue2/button'\nimport {ConnectedOverlayScrollHandler, DomHandler } from 'primevue2/utils'\n\nexport default {\n  name: 'ConfirmPopup',\n  props: {\n    group: String\n  },\n  data() {\n    return {\n      visible: false,\n      confirmation: null\n    }\n  },\n  target: null,\n  outsideClickListener: null,\n  scrollHandler: null,\n  resizeListener: null,\n  container: null,\n  mounted() {\n    ConfirmationEventBus.on('confirm', (options) => {\n      if (!options) {\n        return\n      }\n\n      if (options.group === this.group) {\n        this.confirmation = options\n        this.target = options.target\n        this.visible = true\n      }\n    })\n\n    ConfirmationEventBus.on('close', () => {\n      this.visible = false\n      this.confirmation = null\n    })\n  },\n  beforeDestroy() {\n    ConfirmationEventBus.off('confirm')\n    ConfirmationEventBus.off('close')\n\n    this.restoreAppend()\n    this.unbindOutsideClickListener()\n    if (this.scrollHandler) {\n      this.scrollHandler.destroy()\n      this.scrollHandler = null\n    }\n    this.unbindResizeListener()\n    this.target = null\n    this.container = null\n    this.confirmation = null\n  },\n  methods: {\n    accept() {\n      if (this.confirmation.accept) {\n        this.confirmation.accept()\n      }\n\n      this.visible = false\n    },\n    reject() {\n      if (this.confirmation.reject) {\n        this.confirmation.reject()\n      }\n\n      this.visible = false\n    },\n    onEnter() {\n      this.appendContainer()\n      this.alignOverlay()\n      this.bindOutsideClickListener()\n      this.bindScrollListener()\n      this.bindResizeListener()\n      this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())\n    },\n    onLeave() {\n      this.unbindOutsideClickListener()\n      this.unbindScrollListener()\n      this.unbindResizeListener()\n    },\n    alignOverlay() {\n      DomHandler.absolutePosition(this.$refs.container, this.target)\n\n      const containerOffset = DomHandler.getOffset(this.$refs.container)\n      const targetOffset = DomHandler.getOffset(this.target)\n      let arrowLeft = 0\n\n      if (containerOffset.left < targetOffset.left) {\n        arrowLeft = targetOffset.left - containerOffset.left\n      }\n      this.$refs.container.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`)\n\n      if (containerOffset.top < targetOffset.top) {\n        DomHandler.addClass(this.$refs.container, 'p-confirm-popup-flipped')\n      }\n    },\n    bindOutsideClickListener() {\n      if (!this.outsideClickListener) {\n        this.outsideClickListener = (event) => {\n          if (this.visible && this.$refs.container && !this.$refs.container.contains(event.target) && !this.isTargetClicked(event)) {\n            this.visible = false\n          }\n        }\n        document.addEventListener('click', this.outsideClickListener)\n      }\n    },\n    unbindOutsideClickListener() {\n      if (this.outsideClickListener) {\n        document.removeEventListener('click', this.outsideClickListener)\n        this.outsideClickListener = null\n      }\n    },\n    bindScrollListener() {\n      if (!this.scrollHandler) {\n        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {\n          if (this.visible) {\n            this.visible = false\n          }\n        })\n      }\n\n      this.scrollHandler.bindScrollListener()\n    },\n    unbindScrollListener() {\n      if (this.scrollHandler) {\n        this.scrollHandler.unbindScrollListener()\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          if (this.visible) {\n            this.visible = false\n          }\n        }\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    },\n    isTargetClicked() {\n      return this.target && (this.target === event.target || this.target.contains(event.target))\n    },\n    appendContainer() {\n      document.body.append(this.$refs.container)\n    },\n    restoreAppend() {\n      if (this.container) {\n        document.body.remove(this.$refs.container)\n      }\n    }\n  },\n  computed: {\n    message() {\n      return this.confirmation ? this.confirmation.message : null\n    },\n    iconClass() {\n      return ['p-confirm-popup-icon', this.confirmation ? this.confirmation.icon : null]\n    },\n    acceptLabel() {\n      return this.confirmation ? (this.confirmation.acceptLabel || this.$primevue.config.locale.accept) : null\n    },\n    rejectLabel() {\n      return this.confirmation ? (this.confirmation.rejectLabel || this.$primevue.config.locale.reject) : null\n    },\n    acceptIcon() {\n      return this.confirmation ? this.confirmation.acceptIcon : null\n    },\n    rejectIcon() {\n      return this.confirmation ? this.confirmation.rejectIcon : null\n    },\n    acceptClass() {\n      return ['p-confirm-popup-accept p-button-sm', this.confirmation ? this.confirmation.acceptClass : null]\n    },\n    rejectClass() {\n      return ['p-confirm-popup-reject p-button-sm', this.confirmation ? (this.confirmation.rejectClass || 'p-button-text') : null]\n    }\n  },\n  components: {\n    'CPButton': Button\n  }\n}\n</script>\n\n<style>\n.p-confirm-popup {\n  position: absolute;\n  margin-top: 10px;\n}\n\n.p-confirm-popup-flipped {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n/* Animation */\n.p-confirm-popup-enter-from {\n  opacity: 0;\n  transform: scaleY(0.8);\n}\n\n.p-confirm-popup-leave-to {\n  opacity: 0;\n}\n\n.p-confirm-popup-enter-active {\n  transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-confirm-popup-leave-active {\n  transition: opacity 0.1s linear;\n}\n\n.p-confirm-popup:after,\n.p-confirm-popup:before {\n  bottom: 100%;\n  left: calc(var(--overlayArrowLeft, 0) + 1.25rem);\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.p-confirm-popup:after {\n  border-width: 8px;\n  margin-left: -8px;\n}\n\n.p-confirm-popup:before {\n  border-width: 10px;\n  margin-left: -10px;\n}\n\n.p-confirm-popup-flipped:after,\n.p-confirm-popup-flipped:before {\n  bottom: auto;\n  top: 100%;\n}\n\n.p-confirm-popup.p-confirm-popup-flipped:after {\n  border-bottom-color: transparent;\n}\n\n.p-confirm-popup.p-confirm-popup-flipped:before {\n  border-bottom-color: transparent;\n}\n\n.p-confirm-popup .p-confirm-popup-content {\n  display: flex;\n  align-items: center;\n}\n</style>\n"]
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
