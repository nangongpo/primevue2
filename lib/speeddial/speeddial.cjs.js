'use strict';

var Button = require('primevue2/button');
var Ripple = require('primevue2/ripple');
var utils = require('primevue2/utils');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var script = {
  name: 'SpeedDial',
  props: {
    model: null,
    visible: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'up'
    },
    transitionDelay: {
      type: Number,
      default: 30
    },
    type: {
      type: String,
      default: 'linear'
    },
    radius: {
      type: Number,
      default: 0
    },
    mask: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    },
    buttonClass: null,
    maskStyle: null,
    maskClass: null,
    showIcon: {
      type: String,
      default: 'pi pi-plus'
    },
    hideIcon: null,
    rotateAnimation: {
      type: Boolean,
      default: true
    },
    tooltipOptions: null,
    styles: null,
    className: null
  },
  documentClickListener: null,
  data: function data() {
    return {
      d_visible: this.visible,
      isItemClicked: false
    };
  },
  watch: {
    visible: function visible(newValue) {
      this.d_visible = newValue;
    }
  },
  mounted: function mounted() {
    if (this.type !== 'linear') {
      var button = utils.DomHandler.findSingle(this.$refs.container, '.p-speeddial-button');
      var firstItem = utils.DomHandler.findSingle(this.$refs.list, '.p-speeddial-item');
      if (button && firstItem) {
        var wDiff = Math.abs(button.offsetWidth - firstItem.offsetWidth);
        var hDiff = Math.abs(button.offsetHeight - firstItem.offsetHeight);
        this.$refs.list.style.setProperty('--item-diff-x', "".concat(wDiff / 2, "px"));
        this.$refs.list.style.setProperty('--item-diff-y', "".concat(hDiff / 2, "px"));
      }
    }
    if (this.hideOnClickOutside) {
      this.bindDocumentClickListener();
    }
  },
  beforeMount: function beforeMount() {
    this.bindDocumentClickListener();
  },
  methods: {
    onItemClick: function onItemClick(e, item) {
      if (item.command) {
        item.command({
          originalEvent: e,
          item: item
        });
      }
      this.hide();
      this.isItemClicked = true;
      e.preventDefault();
    },
    onClick: function onClick(event) {
      this.d_visible ? this.hide() : this.show();
      this.isItemClicked = true;
      this.$emit('click', event);
    },
    show: function show() {
      this.d_visible = true;
      this.$emit('show');
    },
    hide: function hide() {
      this.d_visible = false;
      this.$emit('hide');
    },
    calculateTransitionDelay: function calculateTransitionDelay(index) {
      var length = this.model.length;
      var visible = this.d_visible;
      return (visible ? index : length - index - 1) * this.transitionDelay;
    },
    calculatePointStyle: function calculatePointStyle(index) {
      var type = this.type;
      if (type !== 'linear') {
        var length = this.model.length;
        var radius = this.radius || length * 20;
        if (type === 'circle') {
          var step = 2 * Math.PI / length;
          return {
            left: "calc(".concat(radius * Math.cos(step * index), "px + var(--item-diff-x, 0px))"),
            top: "calc(".concat(radius * Math.sin(step * index), "px + var(--item-diff-y, 0px))")
          };
        } else if (type === 'semi-circle') {
          var direction = this.direction;
          var _step = Math.PI / (length - 1);
          var x = "calc(".concat(radius * Math.cos(_step * index), "px + var(--item-diff-x, 0px))");
          var y = "calc(".concat(radius * Math.sin(_step * index), "px + var(--item-diff-y, 0px))");
          if (direction === 'up') {
            return {
              left: x,
              bottom: y
            };
          } else if (direction === 'down') {
            return {
              left: x,
              top: y
            };
          } else if (direction === 'left') {
            return {
              right: y,
              top: x
            };
          } else if (direction === 'right') {
            return {
              left: y,
              top: x
            };
          }
        } else if (type === 'quarter-circle') {
          var _direction = this.direction;
          var _step2 = Math.PI / (2 * (length - 1));
          var _x = "calc(".concat(radius * Math.cos(_step2 * index), "px + var(--item-diff-x, 0px))");
          var _y = "calc(".concat(radius * Math.sin(_step2 * index), "px + var(--item-diff-y, 0px))");
          if (_direction === 'up-left') {
            return {
              right: _x,
              bottom: _y
            };
          } else if (_direction === 'up-right') {
            return {
              left: _x,
              bottom: _y
            };
          } else if (_direction === 'down-left') {
            return {
              right: _y,
              top: _x
            };
          } else if (_direction === 'down-right') {
            return {
              left: _y,
              top: _x
            };
          }
        }
      }
      return {};
    },
    getItemStyle: function getItemStyle(index) {
      var transitionDelay = this.calculateTransitionDelay(index);
      var pointStyle = this.calculatePointStyle(index);
      return _objectSpread({
        transitionDelay: "".concat(transitionDelay, "ms")
      }, pointStyle);
    },
    bindDocumentClickListener: function bindDocumentClickListener() {
      var _this = this;
      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (_this.d_visible && _this.isOutsideClicked(event)) {
            _this.hide();
          }
          _this.isItemClicked = false;
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
    isOutsideClicked: function isOutsideClicked(event) {
      return this.$refs.container && !(this.$refs.container.isSameNode(event.target) || this.$refs.container.contains(event.target) || this.isItemClicked);
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ["p-speeddial p-component p-speeddial-".concat(this.type), _defineProperty(_defineProperty(_defineProperty({}, "p-speeddial-direction-".concat(this.direction), this.type !== 'circle'), 'p-speeddial-opened', this.d_visible), 'p-disabled', this.disabled), this.className];
    },
    buttonClassName: function buttonClassName() {
      return ['p-speeddial-button p-button-rounded', {
        'p-speeddial-rotate': this.rotateAnimation && !this.hideIcon
      }, this.buttonClass];
    },
    iconClassName: function iconClassName() {
      return this.d_visible && !!this.hideIcon ? this.hideIcon : this.showIcon;
    },
    maskClassName: function maskClassName() {
      return ['p-speeddial-mask', {
        'p-speeddial-mask-visible': this.d_visible
      }, this.maskClass];
    }
  },
  components: {
    'SDButton': Button__default["default"]
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
  return _c("div", [_c("div", {
    ref: "container",
    class: _vm.containerClass,
    style: _vm.styles
  }, [_vm._t("button", function () {
    return [_c("SDButton", {
      class: _vm.buttonClassName,
      attrs: {
        type: "button",
        icon: _vm.iconClassName,
        disabled: _vm.disabled
      },
      on: {
        click: function click($event) {
          return _vm.onClick($event);
        }
      }
    })];
  }, {
    toggle: _vm.onClick
  }), _vm._v(" "), _c("ul", {
    ref: "list",
    staticClass: "p-speeddial-list",
    attrs: {
      role: "menu"
    }
  }, _vm._l(_vm.model, function (item, index) {
    return _c("li", {
      key: index,
      staticClass: "p-speeddial-item",
      style: _vm.getItemStyle(index),
      attrs: {
        role: "none"
      }
    }, [!_vm.$scopedSlots.item ? [_c("a", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip:[tooltipOptions]",
        value: {
          value: item.label,
          disabled: !_vm.tooltipOptions
        },
        expression: "{ value: item.label, disabled: !tooltipOptions }",
        arg: _vm.tooltipOptions
      }, {
        name: "ripple",
        rawName: "v-ripple"
      }],
      class: ["p-speeddial-action", {
        "p-disabled": item.disabled
      }],
      attrs: {
        href: item.url || "#",
        role: "menuitem",
        target: item.target
      },
      on: {
        click: function click($event) {
          return _vm.onItemClick($event, item);
        }
      }
    }, [item.icon ? _c("span", {
      class: ["p-speeddial-action-icon", item.icon]
    }) : _vm._e()])] : _vm._t("item", null, {
      item: item
    })], 2);
  }), 0)], 2), _vm._v(" "), _vm.mask ? [_c("div", {
    class: _vm.maskClassName,
    style: _vm.maskStyle
  })] : _vm._e()], 2);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-55223cac_0", {
    source: "\n.p-speeddial {\n  position: absolute;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 1;\n}\n.p-speeddial-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-transition: top 0s linear 0.2s;\n  transition: top 0s linear 0.2s;\n  pointer-events: none;\n}\n.p-speeddial-item {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity: 0;\n  -webkit-transition: opacity 0.8s, -webkit-transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  transition: opacity 0.8s, -webkit-transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;\n  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s, -webkit-transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  will-change: transform;\n}\n.p-speeddial-action {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-radius: 50%;\n  position: relative;\n  overflow: hidden;\n}\n.p-speeddial-circle .p-speeddial-item,\n.p-speeddial-semi-circle .p-speeddial-item,\n.p-speeddial-quarter-circle .p-speeddial-item {\n  position: absolute;\n}\n.p-speeddial-rotate {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  transition: -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  will-change: transform;\n}\n.p-speeddial-mask {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  -webkit-transition: opacity 250ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 250ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.p-speeddial-mask-visible {\n  pointer-events: none;\n  opacity: 1;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.p-speeddial-opened .p-speeddial-list {\n  pointer-events: auto;\n}\n.p-speeddial-opened .p-speeddial-item {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n.p-speeddial-opened .p-speeddial-rotate {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n/* Direction */\n.p-speeddial-direction-up {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n.p-speeddial-direction-up .p-speeddial-list {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n.p-speeddial-direction-down {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.p-speeddial-direction-down .p-speeddial-list {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.p-speeddial-direction-left {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: row-reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n.p-speeddial-direction-left .p-speeddial-list {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: row-reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n.p-speeddial-direction-right {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.p-speeddial-direction-right .p-speeddial-list {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/speeddial/SpeedDial.vue"],
      "names": [],
      "mappings": ";AAyQA;EACA,kBAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,UAAA;AACA;AACA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,sCAAA;EAAA,8BAAA;EACA,oBAAA;AACA;AACA;EACA,2BAAA;UAAA,mBAAA;EACA,UAAA;EACA,0FAAA;EAAA,kFAAA;EAAA,0EAAA;EAAA,oIAAA;EACA,sBAAA;AACA;AACA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;AACA;AACA;;;EAGA,kBAAA;AACA;AACA;EACA,4EAAA;EAAA,oEAAA;EAAA,4DAAA;EAAA,sHAAA;EACA,sBAAA;AACA;AACA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,kEAAA;EAAA,0DAAA;AACA;AACA;EACA,oBAAA;EACA,UAAA;EACA,kEAAA;EAAA,0DAAA;AACA;AACA;EACA,oBAAA;AACA;AACA;EACA,2BAAA;UAAA,mBAAA;EACA,UAAA;AACA;AACA;EACA,gCAAA;UAAA,wBAAA;AACA;AACA,cAAA;AACA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,4BAAA;EAAA,8BAAA;EAAA,sCAAA;MAAA,kCAAA;UAAA,8BAAA;AACA;AACA;EACA,4BAAA;EAAA,8BAAA;EAAA,sCAAA;MAAA,kCAAA;UAAA,8BAAA;AACA;AACA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA;AACA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA;AACA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,8BAAA;EAAA,8BAAA;EAAA,mCAAA;MAAA,+BAAA;UAAA,2BAAA;AACA;AACA;EACA,8BAAA;EAAA,8BAAA;EAAA,mCAAA;MAAA,+BAAA;UAAA,2BAAA;AACA;AACA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,8BAAA;EAAA,6BAAA;EAAA,2BAAA;MAAA,uBAAA;UAAA,mBAAA;AACA;AACA;EACA,8BAAA;EAAA,6BAAA;EAAA,2BAAA;MAAA,uBAAA;UAAA,mBAAA;AACA",
      "file": "SpeedDial.vue",
      "sourcesContent": ["<template>\n  <div>\n    <div ref=\"container\" :class=\"containerClass\" :style=\"styles\">\n      <slot name=\"button\" :toggle=\"onClick\">\n        <SDButton\n          type=\"button\"\n          :class=\"buttonClassName\"\n          :icon=\"iconClassName\"\n          @click=\"onClick($event)\"\n          :disabled=\"disabled\" />\n      </slot>\n      <ul ref=\"list\" class=\"p-speeddial-list\" role=\"menu\">\n        <li\n          v-for=\"(item, index) of model\"\n          :key=\"index\"\n          class=\"p-speeddial-item\"\n          :style=\"getItemStyle(index)\"\n          role=\"none\">\n          <template v-if=\"!$scopedSlots.item\">\n            <a\n              :href=\"item.url || '#'\"\n              role=\"menuitem\"\n              :class=\"['p-speeddial-action', { 'p-disabled': item.disabled }]\"\n              :target=\"item.target\"\n              v-tooltip:[tooltipOptions]=\"{ value: item.label, disabled: !tooltipOptions }\"\n              @click=\"onItemClick($event, item)\"\n              v-ripple>\n              <span v-if=\"item.icon\" :class=\"['p-speeddial-action-icon', item.icon]\"></span>\n            </a>\n          </template>\n          <slot v-else name=\"item\" :item=\"item\"></slot>\n        </li>\n      </ul>\n    </div>\n    <template v-if=\"mask\">\n      <div :class=\"maskClassName\" :style=\"maskStyle\"></div>\n    </template>\n  </div>\n</template>\n\n<script>\nimport Button from 'primevue2/button'\nimport Ripple from 'primevue2/ripple'\nimport { DomHandler } from 'primevue2/utils'\nexport default {\n  name: 'SpeedDial',\n  props: {\n    model: null,\n    visible: {\n      type: Boolean,\n      default: false\n    },\n    direction: {\n      type: String,\n      default: 'up'\n    },\n    transitionDelay: {\n      type: Number,\n      default: 30\n    },\n    type: {\n      type: String,\n      default: 'linear'\n    },\n    radius: {\n      type: Number,\n      default: 0\n    },\n    mask: {\n      type: Boolean,\n      default: false\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    },\n    hideOnClickOutside: {\n      type: Boolean,\n      default: true\n    },\n    buttonClass: null,\n    maskStyle: null,\n    maskClass: null,\n    showIcon: {\n      type: String,\n      default: 'pi pi-plus'\n    },\n    hideIcon: null,\n    rotateAnimation: {\n      type: Boolean,\n      default: true\n    },\n    tooltipOptions: null,\n    styles: null,\n    className: null\n  },\n  documentClickListener: null,\n  data() {\n    return {\n      d_visible: this.visible,\n      isItemClicked: false\n    }\n  },\n  watch: {\n    visible(newValue) {\n      this.d_visible = newValue\n    }\n  },\n  mounted() {\n    if (this.type !== 'linear') {\n      const button = DomHandler.findSingle(this.$refs.container, '.p-speeddial-button')\n      const firstItem = DomHandler.findSingle(this.$refs.list, '.p-speeddial-item')\n      if (button && firstItem) {\n        const wDiff = Math.abs(button.offsetWidth - firstItem.offsetWidth)\n        const hDiff = Math.abs(button.offsetHeight - firstItem.offsetHeight)\n        this.$refs.list.style.setProperty('--item-diff-x', `${wDiff / 2}px`)\n        this.$refs.list.style.setProperty('--item-diff-y', `${hDiff / 2}px`)\n      }\n    }\n    if (this.hideOnClickOutside) {\n      this.bindDocumentClickListener()\n    }\n  },\n  beforeMount() {\n    this.bindDocumentClickListener()\n  },\n  methods: {\n    onItemClick(e, item) {\n      if (item.command) {\n        item.command({ originalEvent: e, item })\n      }\n      this.hide()\n      this.isItemClicked = true\n      e.preventDefault()\n    },\n    onClick(event) {\n      this.d_visible ? this.hide() : this.show()\n      this.isItemClicked = true\n      this.$emit('click', event)\n    },\n    show() {\n      this.d_visible = true\n      this.$emit('show')\n    },\n    hide() {\n      this.d_visible = false\n      this.$emit('hide')\n    },\n    calculateTransitionDelay(index) {\n      const length = this.model.length\n      const visible = this.d_visible\n      return (visible ? index : length - index - 1) * this.transitionDelay\n    },\n    calculatePointStyle(index) {\n      const type = this.type\n      if (type !== 'linear') {\n        const length = this.model.length\n        const radius = this.radius || (length * 20)\n        if (type === 'circle') {\n          const step = 2 * Math.PI / length\n          return {\n            left: `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`,\n            top: `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`,\n          }\n        }\n        else if (type === 'semi-circle') {\n          const direction = this.direction\n          const step = Math.PI / (length - 1)\n          const x = `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`\n          const y = `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`\n          if (direction === 'up') {\n            return { left: x, bottom: y }\n          }\n          else if (direction === 'down') {\n            return { left: x, top: y }\n          }\n          else if (direction === 'left') {\n            return { right: y, top: x }\n          }\n          else if (direction === 'right') {\n            return { left: y, top: x }\n          }\n        }\n        else if (type === 'quarter-circle') {\n          const direction = this.direction\n          const step = Math.PI / (2 * (length - 1))\n          const x = `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`\n          const y = `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`\n          if (direction === 'up-left') {\n            return { right: x, bottom: y }\n          }\n          else if (direction === 'up-right') {\n            return { left: x, bottom: y }\n          }\n          else if (direction === 'down-left') {\n            return { right: y, top: x }\n          }\n          else if (direction === 'down-right') {\n            return { left: y, top: x }\n          }\n        }\n      }\n      return {}\n    },\n    getItemStyle(index) {\n      const transitionDelay = this.calculateTransitionDelay(index)\n      const pointStyle = this.calculatePointStyle(index)\n      return {\n        transitionDelay: `${transitionDelay}ms`,\n        ...pointStyle\n      }\n    },\n    bindDocumentClickListener() {\n      if (!this.documentClickListener) {\n        this.documentClickListener = (event) => {\n          if (this.d_visible && this.isOutsideClicked(event)) {\n            this.hide()\n          }\n          this.isItemClicked = false\n        }\n        document.addEventListener('click', this.documentClickListener)\n      }\n    },\n    unbindDocumentClickListener() {\n      if (this.documentClickListener) {\n        document.removeEventListener('click', this.documentClickListener)\n        this.documentClickListener = null\n      }\n    },\n    isOutsideClicked(event) {\n      return this.$refs.container && !(this.$refs.container.isSameNode(event.target) || this.$refs.container.contains(event.target) || this.isItemClicked)\n    }\n  },\n  computed: {\n    containerClass() {\n      return [`p-speeddial p-component p-speeddial-${this.type}`, {\n        [`p-speeddial-direction-${this.direction}`]: this.type !== 'circle',\n        'p-speeddial-opened': this.d_visible,\n        'p-disabled': this.disabled\n      }, this.className]\n    },\n    buttonClassName() {\n      return ['p-speeddial-button p-button-rounded', {\n        'p-speeddial-rotate': this.rotateAnimation && !this.hideIcon\n      }, this.buttonClass]\n    },\n    iconClassName() {\n      return this.d_visible && !!this.hideIcon ? this.hideIcon : this.showIcon\n    },\n    maskClassName() {\n      return ['p-speeddial-mask', {\n        'p-speeddial-mask-visible': this.d_visible\n      }, this.maskClass]\n    }\n  },\n  components: {\n    'SDButton': Button\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-speeddial {\n  position: absolute;\n  display: flex;\n  z-index: 1;\n}\n.p-speeddial-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: top 0s linear 0.2s;\n  pointer-events: none;\n}\n.p-speeddial-item {\n  transform: scale(0);\n  opacity: 0;\n  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;\n  will-change: transform;\n}\n.p-speeddial-action {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  position: relative;\n  overflow: hidden;\n}\n.p-speeddial-circle .p-speeddial-item,\n.p-speeddial-semi-circle .p-speeddial-item,\n.p-speeddial-quarter-circle .p-speeddial-item {\n  position: absolute;\n}\n.p-speeddial-rotate {\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  will-change: transform;\n}\n.p-speeddial-mask {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 250ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.p-speeddial-mask-visible {\n  pointer-events: none;\n  opacity: 1;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.p-speeddial-opened .p-speeddial-list {\n  pointer-events: auto;\n}\n.p-speeddial-opened .p-speeddial-item {\n  transform: scale(1);\n  opacity: 1;\n}\n.p-speeddial-opened .p-speeddial-rotate {\n  transform: rotate(45deg);\n}\n/* Direction */\n.p-speeddial-direction-up {\n  align-items: center;\n  flex-direction: column-reverse;\n}\n.p-speeddial-direction-up .p-speeddial-list {\n  flex-direction: column-reverse;\n}\n.p-speeddial-direction-down {\n  align-items: center;\n  flex-direction: column;\n}\n.p-speeddial-direction-down .p-speeddial-list {\n  flex-direction: column;\n}\n.p-speeddial-direction-left {\n  justify-content: center;\n  flex-direction: row-reverse;\n}\n.p-speeddial-direction-left .p-speeddial-list {\n  flex-direction: row-reverse;\n}\n.p-speeddial-direction-right {\n  justify-content: center;\n  flex-direction: row;\n}\n.p-speeddial-direction-right .p-speeddial-list {\n  flex-direction: row;\n}\n</style>\n"]
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
