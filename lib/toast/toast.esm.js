import ToastEventBus from 'primevue2/toasteventbus';
import Ripple from 'primevue2/ripple';
import { DomHandler, UniqueComponentId } from 'primevue2/utils';

//
var ToastMessageTemplate = {
  functional: true,
  props: {
    message: {
      type: null,
      default: null
    },
    template: {
      type: null,
      default: null
    }
  },
  render: function render(createElement, context) {
    var content = context.props.template({
      'message': context.props.message
    });
    return [content];
  }
};
var script$1 = {
  props: {
    message: null,
    templates: null
  },
  closeTimeout: null,
  mounted: function mounted() {
    var _this = this;
    if (this.message.life) {
      this.closeTimeout = setTimeout(function () {
        _this.close();
      }, this.message.life);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clearCloseTimeout();
  },
  methods: {
    close: function close() {
      this.$emit('close', this.message);
    },
    onCloseClick: function onCloseClick() {
      this.clearCloseTimeout();
      this.close();
    },
    clearCloseTimeout: function clearCloseTimeout() {
      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
        this.closeTimeout = null;
      }
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-toast-message', this.message.styleClass, {
        'p-toast-message-info': this.message.severity === 'info',
        'p-toast-message-warn': this.message.severity === 'warn',
        'p-toast-message-error': this.message.severity === 'error',
        'p-toast-message-success': this.message.severity === 'success'
      }];
    },
    iconClass: function iconClass() {
      return ['p-toast-message-icon pi', {
        'pi-info-circle': this.message.severity === 'info',
        'pi-exclamation-triangle': this.message.severity === 'warn',
        'pi-times': this.message.severity === 'error',
        'pi-check': this.message.severity === 'success'
      }];
    }
  },
  components: {
    'ToastMessageTemplate': ToastMessageTemplate
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
  return _c("div", {
    class: _vm.containerClass,
    attrs: {
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }
  }, [_c("div", {
    staticClass: "p-toast-message-content",
    class: _vm.message.contentStyleClass
  }, [_vm.templates["message"] ? _c("ToastMessageTemplate", {
    attrs: {
      message: _vm.message,
      template: _vm.templates["message"]
    }
  }) : [_c("span", {
    class: _vm.iconClass
  }), _vm._v(" "), _c("div", {
    staticClass: "p-toast-message-text"
  }, [_c("span", {
    staticClass: "p-toast-summary"
  }, [_vm._v(_vm._s(_vm.message.summary))]), _vm._v(" "), _c("div", {
    staticClass: "p-toast-detail"
  }, [_vm._v(_vm._s(_vm.message.detail))])])], _vm._v(" "), _vm.message.closable !== false ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-toast-icon-close p-link",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.onCloseClick
    }
  }, [_c("span", {
    staticClass: "p-toast-icon-close-icon pi pi-times"
  })]) : _vm._e()], 2)]);
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var messageIdx = 0;
var script = {
  name: 'Toast',
  props: {
    group: {
      type: String,
      default: null
    },
    position: {
      type: String,
      default: 'top-right'
    },
    autoZIndex: {
      type: Boolean,
      default: true
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    breakpoints: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      messages: []
    };
  },
  styleElement: null,
  mounted: function mounted() {
    var _this = this;
    ToastEventBus.on('add', function (message) {
      if (_this.group == message.group) {
        _this.add(message);
      }
    });
    ToastEventBus.on('remove-group', function (group) {
      if (_this.group === group) {
        _this.messages = [];
      }
    });
    ToastEventBus.on('remove-all-groups', function () {
      _this.messages = [];
    });
    this.updateZIndex();
    if (this.breakpoints) {
      this.createStyle();
    }
  },
  beforeUpdate: function beforeUpdate() {
    this.updateZIndex();
  },
  beforeDestroy: function beforeDestroy() {
    this.destroyStyle();
  },
  methods: {
    add: function add(message) {
      if (message.id == null) {
        message.id = messageIdx++;
      }
      this.messages = [].concat(_toConsumableArray(this.messages), [message]);
    },
    remove: function remove(message) {
      var index = -1;
      for (var i = 0; i < this.messages.length; i++) {
        if (this.messages[i] === message) {
          index = i;
          break;
        }
      }
      this.messages.splice(index, 1);
    },
    updateZIndex: function updateZIndex() {
      if (this.autoZIndex) {
        this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
      }
    },
    onEnter: function onEnter() {
      this.$refs.container.setAttribute(this.attributeSelector, '');
    },
    createStyle: function createStyle() {
      if (!this.styleElement) {
        this.styleElement = document.createElement('style');
        this.styleElement.type = 'text/css';
        document.head.appendChild(this.styleElement);
        var innerHTML = '';
        for (var breakpoint in this.breakpoints) {
          var breakpointStyle = '';
          for (var styleProp in this.breakpoints[breakpoint]) {
            breakpointStyle += styleProp + ':' + this.breakpoints[breakpoint][styleProp] + '!important;';
          }
          innerHTML += "\n                        @media screen and (max-width: ".concat(breakpoint, ") {\n                            .p-toast[").concat(this.attributeSelector, "] {\n                                ").concat(breakpointStyle, "\n                            }\n                        }\n                    ");
        }
        this.styleElement.innerHTML = innerHTML;
      }
    },
    destroyStyle: function destroyStyle() {
      if (this.styleElement) {
        document.head.removeChild(this.styleElement);
        this.styleElement = null;
      }
    }
  },
  components: {
    'ToastMessage': __vue_component__$1
  },
  computed: {
    containerClass: function containerClass() {
      return 'p-toast p-component p-toast-' + this.position;
    },
    attributeSelector: function attributeSelector() {
      return UniqueComponentId();
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
    ref: "container",
    class: _vm.containerClass
  }, [_c("transition-group", {
    attrs: {
      name: "p-toast-message",
      tag: "div"
    },
    on: {
      enter: _vm.onEnter
    }
  }, _vm._l(_vm.messages, function (msg) {
    return _c("ToastMessage", {
      key: msg.id,
      attrs: {
        message: msg,
        templates: _vm.$scopedSlots
      },
      on: {
        close: function close($event) {
          return _vm.remove($event);
        }
      }
    });
  }), 1)], 1);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-a86790c8_0", {
    source: "\n.p-toast {\n  position: fixed;\n  width: 25rem;\n}\n.p-toast-message-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.p-toast-message-text {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.p-toast-top-right {\ntop: 20px;\nright: 20px;\n}\n.p-toast-top-left {\ntop: 20px;\nleft: 20px;\n}\n.p-toast-bottom-left {\nbottom: 20px;\nleft: 20px;\n}\n.p-toast-bottom-right {\nbottom: 20px;\nright: 20px;\n}\n.p-toast-top-center {\ntop: 20px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.p-toast-bottom-center {\nbottom: 20px;\nleft: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.p-toast-center {\nleft: 50%;\ntop: 50%;\n  min-width: 20vw;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.p-toast-icon-close {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n.p-toast-icon-close.p-link {\ncursor: pointer;\n}\n\n/* Animations */\n.p-toast-message-enter {\n  opacity: 0;\n  -webkit-transform: translateY(50%);\n  transform: translateY(50%);\n}\n.p-toast-message-leave {\n  max-height: 1000px;\n}\n.p-toast .p-toast-message.p-toast-message-leave-to {\n  max-height: 0;\n  opacity: 0;\n  margin-bottom: 0;\n  overflow: hidden;\n}\n.p-toast-message-enter-active {\n  -webkit-transition: transform .3s, opacity .3s;\n  -webkit-transition: opacity .3s, -webkit-transform .3s;\n  transition: opacity .3s, -webkit-transform .3s;\n  transition: transform .3s, opacity .3s;\n  transition: transform .3s, opacity .3s, -webkit-transform .3s;\n}\n.p-toast-message-leave-active {\n  -webkit-transition: max-height .45s cubic-bezier(0, 1, 0, 1), opacity .3s, margin-bottom .3s;\n  transition: max-height .45s cubic-bezier(0, 1, 0, 1), opacity .3s, margin-bottom .3s;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/toast/Toast.vue"],
      "names": [],
      "mappings": ";AAoJA;EACA,eAAA;EACA,YAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AAEA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;AAEA;AACA,SAAA;AACA,WAAA;AACA;AAEA;AACA,SAAA;AACA,UAAA;AACA;AAEA;AACA,YAAA;AACA,UAAA;AACA;AAEA;AACA,YAAA;AACA,WAAA;AACA;AAEA;AACA,SAAA;EACA,SAAA;EACA,mCAAA;UAAA,2BAAA;AACA;AAEA;AACA,YAAA;AACA,SAAA;EACA,mCAAA;UAAA,2BAAA;AACA;AAEA;AACA,SAAA;AACA,QAAA;EACA,eAAA;EACA,wCAAA;UAAA,gCAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;AACA,eAAA;AACA;;AAEA,eAAA;AACA;EACA,UAAA;EACA,kCAAA;EAEA,0BAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,gBAAA;AACA;AAEA;EACA,8CAAA;EACA,sDAAA;EAAA,8CAAA;EAAA,sCAAA;EAAA,6DAAA;AACA;AAEA;EACA,4FAAA;EACA,oFAAA;AACA",
      "file": "Toast.vue",
      "sourcesContent": ["<template>\n  <div ref=\"container\" :class=\"containerClass\">\n    <transition-group name=\"p-toast-message\" tag=\"div\" @enter=\"onEnter\">\n      <ToastMessage\n        v-for=\"msg of messages\"\n        :key=\"msg.id\"\n        :message=\"msg\"\n        :templates=\"$scopedSlots\"\n        @close=\"remove($event)\" />\n    </transition-group>\n  </div>\n</template>\n\n<script>\nimport ToastEventBus from 'primevue2/toasteventbus'\nimport ToastMessage from './ToastMessage.vue'\nimport { UniqueComponentId, DomHandler } from 'primevue2/utils'\n\nlet messageIdx = 0\n\nexport default {\n  name: 'Toast',\n  props: {\n    group: {\n      type: String,\n      default: null\n    },\n    position: {\n      type: String,\n      default: 'top-right'\n    },\n    autoZIndex: {\n      type: Boolean,\n      default: true\n    },\n    baseZIndex: {\n      type: Number,\n      default: 0\n    },\n    breakpoints: {\n      type: Object,\n      default: null\n    }\n  },\n  data() {\n    return {\n      messages: []\n    }\n  },\n  styleElement: null,\n  mounted() {\n    ToastEventBus.on('add', (message) => {\n      if (this.group == message.group) {\n        this.add(message)\n      }\n    })\n    ToastEventBus.on('remove-group', (group) => {\n      if (this.group === group) {\n        this.messages = []\n      }\n    })\n    ToastEventBus.on('remove-all-groups', () => {\n      this.messages = []\n    })\n\n    this.updateZIndex()\n\n    if (this.breakpoints) {\n      this.createStyle()\n    }\n  },\n  beforeUpdate() {\n    this.updateZIndex()\n  },\n  beforeDestroy() {\n    this.destroyStyle()\n  },\n  methods: {\n    add(message) {\n      if (message.id == null) {\n        message.id = messageIdx++\n      }\n\n      this.messages = [...this.messages, message]\n    },\n    remove(message) {\n      let index = -1\n      for (let i = 0; i < this.messages.length; i++) {\n        if (this.messages[i] === message) {\n          index = i\n          break\n        }\n      }\n\n      this.messages.splice(index, 1)\n    },\n    updateZIndex() {\n      if (this.autoZIndex) {\n        this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())\n      }\n    },\n    onEnter() {\n      this.$refs.container.setAttribute(this.attributeSelector, '')\n    },\n    createStyle() {\n      if (!this.styleElement) {\n        this.styleElement = document.createElement('style')\n        this.styleElement.type = 'text/css'\n        document.head.appendChild(this.styleElement)\n        let innerHTML = ''\n        for (let breakpoint in this.breakpoints) {\n          let breakpointStyle = ''\n          for (let styleProp in this.breakpoints[breakpoint]) {\n            breakpointStyle += styleProp + ':' + this.breakpoints[breakpoint][styleProp] + '!important;'\n          }\n          innerHTML += `\n                        @media screen and (max-width: ${breakpoint}) {\n                            .p-toast[${this.attributeSelector}] {\n                                ${breakpointStyle}\n                            }\n                        }\n                    `\n        }\n        this.styleElement.innerHTML = innerHTML\n      }\n    },\n    destroyStyle() {\n      if (this.styleElement) {\n        document.head.removeChild(this.styleElement)\n        this.styleElement = null\n      }\n    }\n  },\n  components: {\n    'ToastMessage': ToastMessage\n  },\n  computed: {\n    containerClass() {\n      return 'p-toast p-component p-toast-' + this.position\n    },\n    attributeSelector() {\n      return UniqueComponentId()\n    }\n  }\n}\n</script>\n\n<style>\n.p-toast {\n  position: fixed;\n  width: 25rem;\n}\n\n.p-toast-message-content {\n  display: flex;\n  align-items: flex-start;\n}\n\n.p-toast-message-text {\n  flex: 1 1 auto;\n}\n\n.p-toast-top-right {\ntop: 20px;\nright: 20px;\n}\n\n.p-toast-top-left {\ntop: 20px;\nleft: 20px;\n}\n\n.p-toast-bottom-left {\nbottom: 20px;\nleft: 20px;\n}\n\n.p-toast-bottom-right {\nbottom: 20px;\nright: 20px;\n}\n\n.p-toast-top-center {\ntop: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.p-toast-bottom-center {\nbottom: 20px;\nleft: 50%;\n  transform: translateX(-50%);\n}\n\n.p-toast-center {\nleft: 50%;\ntop: 50%;\n  min-width: 20vw;\n  transform: translate(-50%, -50%);\n}\n\n.p-toast-icon-close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-toast-icon-close.p-link {\ncursor: pointer;\n}\n\n/* Animations */\n.p-toast-message-enter {\n  opacity: 0;\n  -webkit-transform: translateY(50%);\n  -ms-transform: translateY(50%);\n  transform: translateY(50%);\n}\n\n.p-toast-message-leave {\n  max-height: 1000px;\n}\n\n.p-toast .p-toast-message.p-toast-message-leave-to {\n  max-height: 0;\n  opacity: 0;\n  margin-bottom: 0;\n  overflow: hidden;\n}\n\n.p-toast-message-enter-active {\n  -webkit-transition: transform .3s, opacity .3s;\n  transition: transform .3s, opacity .3s;\n}\n\n.p-toast-message-leave-active {\n  -webkit-transition: max-height .45s cubic-bezier(0, 1, 0, 1), opacity .3s, margin-bottom .3s;\n  transition: max-height .45s cubic-bezier(0, 1, 0, 1), opacity .3s, margin-bottom .3s;\n}\n</style>\n"]
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
