this.primevue2 = this.primevue2 || {};
this.primevue2.password = (function (InputText, utils) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var InputText__default = /*#__PURE__*/_interopDefaultLegacy(InputText);

  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var script = {
    name: 'Password',
    props: {
      value: String,
      promptLabel: {
        type: String,
        default: 'Enter a password'
      },
      mediumRegex: {
        type: String,
        default: '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})' // eslint-disable-line
      },
      strongRegex: {
        type: String,
        default: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})' // eslint-disable-line
      },
      weakLabel: {
        type: String,
        default: null
      },
      mediumLabel: {
        type: String,
        default: null
      },
      strongLabel: {
        type: String,
        default: null
      },
      feedback: {
        type: Boolean,
        default: true
      },
      appendTo: {
        type: String,
        default: null
      },
      toggleMask: {
        type: Boolean,
        default: false
      },
      hideIcon: {
        type: String,
        default: 'pi pi-eye-slash'
      },
      showIcon: {
        type: String,
        default: 'pi pi-eye'
      },
      inputClass: null,
      inputStyle: null,
      inputId: null,
      styles: null,
      className: null
    },
    data: function data() {
      return {
        overlayVisible: false,
        meter: null,
        infoText: null,
        focused: false,
        unmasked: false,
        d_value: null
      };
    },
    meter: null,
    info: null,
    mediumCheckRegExp: null,
    strongCheckRegExp: null,
    resizeListener: null,
    scrollHandler: null,
    overlay: null,
    watch: {
      value: function value(newValue) {
        this.d_value = newValue;
      }
    },
    mounted: function mounted() {
      this.infoText = this.promptText;
      this.mediumCheckRegExp = new RegExp(this.mediumRegex);
      this.strongCheckRegExp = new RegExp(this.strongRegex);
      if (this.value) {
        this.d_value = this.value;
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.restoreAppend();
      this.unbindResizeListener();
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
    },
    methods: {
      onOverlayEnter: function onOverlayEnter() {
        this.overlay = this.$refs.overlayRef;
        this.overlay.style.zIndex = String(utils.DomHandler.generateZIndex());
        this.appendContainer();
        this.alignOverlay();
        this.bindScrollListener();
        this.bindResizeListener();
      },
      onOverlayLeave: function onOverlayLeave() {
        this.unbindScrollListener();
        this.unbindResizeListener();
        this.overlay = null;
      },
      alignOverlay: function alignOverlay() {
        if (this.appendTo) {
          this.overlay.style.minWidth = utils.DomHandler.getOuterWidth(this.$refs.input.$el) + 'px';
          utils.DomHandler.absolutePosition(this.overlay, this.$refs.input.$el);
        } else {
          utils.DomHandler.relativePosition(this.overlay, this.$refs.input.$el);
        }
      },
      appendContainer: function appendContainer() {
        if (this.appendTo) {
          if (this.appendTo === 'body') document.body.appendChild(this.overlay);else document.getElementById(this.appendTo).appendChild(this.overlay);
        }
      },
      restoreAppend: function restoreAppend() {
        if (this.overlay && this.appendTo) {
          if (this.appendTo === 'body') document.body.removeChild(this.overlay);else document.getElementById(this.appendTo).removeChild(this.overlay);
        }
      },
      testStrength: function testStrength(str) {
        var level = 0;
        if (this.strongCheckRegExp.test(str)) level = 3;else if (this.mediumCheckRegExp.test(str)) level = 2;else if (str.length) level = 1;
        return level;
      },
      onInput: function onInput(event) {
        this.$emit('input', event);
      },
      onFocus: function onFocus(event) {
        this.focused = true;
        if (this.feedback) {
          this.setPasswordMeter();
          this.overlayVisible = true;
        }
        this.$emit('focus', event);
      },
      onBlur: function onBlur(event) {
        this.focused = false;
        if (this.feedback) {
          this.overlayVisible = false;
        }
        this.$emit('blur', event);
      },
      onKeyUp: function onKeyUp(event) {
        if (this.feedback) {
          var value = event.target.value;
          var _this$checkPasswordSt = this.checkPasswordStrength(value),
            meter = _this$checkPasswordSt.meter,
            label = _this$checkPasswordSt.label;
          this.meter = meter;
          this.infoText = label;
          if (!this.overlayVisible) {
            this.overlayVisible = true;
          }
        }
        this.$emit('keyup', event);
      },
      setPasswordMeter: function setPasswordMeter() {
        if (!this.feedback || !this.d_value) return;
        var _this$checkPasswordSt2 = this.checkPasswordStrength(this.d_value),
          meter = _this$checkPasswordSt2.meter,
          label = _this$checkPasswordSt2.label;
        this.meter = meter;
        this.infoText = label;
        if (!this.overlayVisible) {
          this.overlayVisible = true;
        }
      },
      checkPasswordStrength: function checkPasswordStrength(value) {
        var label = null;
        var meter = null;
        switch (this.testStrength(value)) {
          case 1:
            label = this.weakText;
            meter = {
              strength: 'weak',
              width: '33.33%'
            };
            break;
          case 2:
            label = this.mediumText;
            meter = {
              strength: 'medium',
              width: '66.66%'
            };
            break;
          case 3:
            label = this.strongText;
            meter = {
              strength: 'strong',
              width: '100%'
            };
            break;
          default:
            label = this.promptText;
            meter = null;
            break;
        }
        return {
          label: label,
          meter: meter
        };
      },
      bindScrollListener: function bindScrollListener() {
        var _this = this;
        if (!this.scrollHandler) {
          this.scrollHandler = new utils.ConnectedOverlayScrollHandler(this.$refs.input.$el, function () {
            if (_this.overlayVisible) {
              _this.overlayVisible = false;
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
        var _this2 = this;
        if (!this.resizeListener) {
          this.resizeListener = function () {
            if (_this2.overlayVisible) {
              _this2.overlayVisible = false;
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
      onMaskToggle: function onMaskToggle() {
        this.unmasked = !this.unmasked;
      }
    },
    computed: {
      listeners: function listeners() {
        var _this3 = this;
        var $vm = this;
        return _objectSpread(_objectSpread({}, $vm.$listeners), {}, {
          input: function input(event) {
            _this3.onInput(event);
          },
          focus: function focus(event) {
            _this3.onFocus(event);
          },
          blur: function blur(event) {
            _this3.onBlur(event);
          },
          keyup: function keyup(event) {
            _this3.onKeyUp(event);
          }
        });
      },
      containerClass: function containerClass() {
        return ['p-password p-component p-inputwrapper', this.className, {
          'p-inputwrapper-filled': this.filled,
          'p-inputwrapper-focus': this.focused,
          'p-input-icon-right': this.toggleMask
        }];
      },
      inputFieldClass: function inputFieldClass() {
        return ['p-password-input', this.inputClass, {
          'p-disabled': this.$attrs.disabled
        }];
      },
      toggleIconClass: function toggleIconClass() {
        return this.unmasked ? this.hideIcon : this.showIcon;
      },
      strengthClass: function strengthClass() {
        return "p-password-strength ".concat(this.meter ? this.meter.strength : '');
      },
      inputType: function inputType() {
        return this.unmasked ? 'text' : 'password';
      },
      filled: function filled() {
        return this.d_value != null && this.d_value.toString().length > 0;
      },
      weakText: function weakText() {
        return this.weakLabel || this.$primevue.config.locale.weak;
      },
      mediumText: function mediumText() {
        return this.mediumLabel || this.$primevue.config.locale.medium;
      },
      strongText: function strongText() {
        return this.strongLabel || this.$primevue.config.locale.strong;
      },
      promptText: function promptText() {
        return this.promptLabel || this.$primevue.config.locale.passwordPrompt;
      }
    },
    components: {
      'PInputText': InputText__default["default"]
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
      class: _vm.containerClass,
      style: _vm.styles
    }, [_c("PInputText", _vm._g(_vm._b({
      ref: "input",
      class: _vm.inputFieldClass,
      style: _vm.inputStyle,
      attrs: {
        id: _vm.inputId,
        type: _vm.inputType,
        value: _vm.d_value
      }
    }, "PInputText", _vm.$attrs, false), _vm.listeners)), _vm._v(" "), _vm.toggleMask ? _c("i", {
      class: _vm.toggleIconClass,
      on: {
        click: _vm.onMaskToggle
      }
    }) : _vm._e(), _vm._v(" "), _c("transition", {
      attrs: {
        name: "p-connected-overlay"
      },
      on: {
        enter: _vm.onOverlayEnter,
        leave: _vm.onOverlayLeave
      }
    }, [_vm.overlayVisible ? _c("div", {
      ref: "overlayRef",
      staticClass: "p-password-panel p-component"
    }, [_vm._t("header"), _vm._v(" "), _vm._t("content", function () {
      return [_c("div", {
        staticClass: "p-password-meter"
      }, [_c("div", {
        class: _vm.strengthClass,
        style: {
          width: _vm.meter ? _vm.meter.width : ""
        }
      })]), _vm._v(" "), _c("div", {
        attrs: {
          className: "p-password-info"
        }
      }, [_vm._v(_vm._s(_vm.infoText))])];
    }), _vm._v(" "), _vm._t("footer")], 2) : _vm._e()])], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-751e0ff2_0", {
      source: "\n.p-password {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.p-password-panel {\n  position: absolute;\n}\n.p-password .p-password-panel {\n  min-width: 100%;\n}\n.p-password-meter {\n  height: 10px;\n}\n.p-password-strength {\n  height: 100%;\n  width: 0%;\n  -webkit-transition: width 1s ease-in-out;\n  transition: width 1s ease-in-out;\n}\n.p-fluid .p-password {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/password/Password.vue"],
        "names": [],
        "mappings": ";AAoWA;EACA,kBAAA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,YAAA;AACA;AAEA;EACA,YAAA;EACA,SAAA;EACA,wCAAA;EAAA,gCAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA",
        "file": "Password.vue",
        "sourcesContent": ["<template>\n  <div :class=\"containerClass\" :style=\"styles\">\n    <PInputText\n      ref=\"input\"\n      :id=\"inputId\"\n      :class=\"inputFieldClass\"\n      :style=\"inputStyle\"\n      :type=\"inputType\"\n      :value=\"d_value\"\n      v-bind=\"$attrs\"\n      v-on=\"listeners\" />\n    <i v-if=\"toggleMask\" :class=\"toggleIconClass\" @click=\"onMaskToggle\" />\n    <transition name=\"p-connected-overlay\" @enter=\"onOverlayEnter\" @leave=\"onOverlayLeave\">\n      <div ref=\"overlayRef\" class=\"p-password-panel p-component\" v-if=\"overlayVisible\">\n        <slot name=\"header\"></slot>\n        <slot name=\"content\">\n          <div class=\"p-password-meter\">\n            <div :class=\"strengthClass\" :style=\"{ width: meter ? meter.width : '' }\"></div>\n          </div>\n          <div className=\"p-password-info\">{{ infoText }}</div>\n        </slot>\n        <slot name=\"footer\"></slot>\n      </div>\n    </transition>\n  </div>\n</template>\n\n<script>\nimport InputText from 'primevue2/inputtext'\nimport { ConnectedOverlayScrollHandler, DomHandler } from 'primevue2/utils'\n\nexport default {\n  name: 'Password',\n  props: {\n    value: String,\n    promptLabel: {\n      type: String,\n      default: 'Enter a password'\n    },\n    mediumRegex: {\n      type: String,\n      default: '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})' // eslint-disable-line\n    },\n    strongRegex: {\n      type: String,\n      default: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})' // eslint-disable-line\n    },\n    weakLabel: {\n      type: String,\n      default: null\n    },\n    mediumLabel: {\n      type: String,\n      default: null\n    },\n    strongLabel: {\n      type: String,\n      default: null\n    },\n    feedback: {\n      type: Boolean,\n      default: true\n    },\n    appendTo: {\n      type: String,\n      default: null\n    },\n    toggleMask: {\n      type: Boolean,\n      default: false\n    },\n    hideIcon: {\n      type: String,\n      default: 'pi pi-eye-slash'\n    },\n    showIcon: {\n      type: String,\n      default: 'pi pi-eye'\n    },\n    inputClass: null,\n    inputStyle: null,\n    inputId: null,\n    styles: null,\n    className: null\n  },\n  data() {\n    return {\n      overlayVisible: false,\n      meter: null,\n      infoText: null,\n      focused: false,\n      unmasked: false,\n      d_value: null\n    }\n  },\n  meter: null,\n  info: null,\n  mediumCheckRegExp: null,\n  strongCheckRegExp: null,\n  resizeListener: null,\n  scrollHandler: null,\n  overlay: null,\n  watch: {\n    value(newValue) {\n      this.d_value = newValue\n    }\n  },\n  mounted() {\n    this.infoText = this.promptText\n    this.mediumCheckRegExp = new RegExp(this.mediumRegex)\n    this.strongCheckRegExp = new RegExp(this.strongRegex)\n    if (this.value) {\n      this.d_value = this.value\n    }\n  },\n  beforeDestroy() {\n    this.restoreAppend()\n    this.unbindResizeListener()\n    if (this.scrollHandler) {\n      this.scrollHandler.destroy()\n      this.scrollHandler = null\n    }\n  },\n  methods: {\n    onOverlayEnter() {\n      this.overlay = this.$refs.overlayRef\n      this.overlay.style.zIndex = String(DomHandler.generateZIndex())\n      this.appendContainer()\n      this.alignOverlay()\n      this.bindScrollListener()\n      this.bindResizeListener()\n    },\n    onOverlayLeave() {\n      this.unbindScrollListener()\n      this.unbindResizeListener()\n      this.overlay = null\n    },\n    alignOverlay() {\n      if (this.appendTo) {\n        this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$refs.input.$el) + 'px'\n        DomHandler.absolutePosition(this.overlay, this.$refs.input.$el)\n      }\n      else {\n        DomHandler.relativePosition(this.overlay, this.$refs.input.$el)\n      }\n    },\n    appendContainer() {\n      if (this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.appendChild(this.overlay)\n        else\n          document.getElementById(this.appendTo).appendChild(this.overlay)\n      }\n    },\n    restoreAppend() {\n      if (this.overlay && this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.removeChild(this.overlay)\n        else\n          document.getElementById(this.appendTo).removeChild(this.overlay)\n      }\n    },\n    testStrength(str) {\n      let level = 0\n\n      if (this.strongCheckRegExp.test(str))\n        level = 3\n      else if (this.mediumCheckRegExp.test(str))\n        level = 2\n      else if (str.length)\n        level = 1\n\n      return level\n    },\n    onInput(event) {\n      this.$emit('input', event)\n    },\n    onFocus(event) {\n      this.focused = true\n      if (this.feedback) {\n        this.setPasswordMeter()\n        this.overlayVisible = true\n      }\n      this.$emit('focus', event)\n    },\n    onBlur(event) {\n      this.focused = false\n      if (this.feedback) {\n        this.overlayVisible = false\n      }\n      this.$emit('blur', event)\n    },\n    onKeyUp(event) {\n      if (this.feedback) {\n        let value = event.target.value\n\n        const { meter, label } = this.checkPasswordStrength(value)\n\n        this.meter = meter\n        this.infoText = label\n        if (!this.overlayVisible) {\n          this.overlayVisible = true\n        }\n      }\n\n      this.$emit('keyup', event)\n    },\n    setPasswordMeter() {\n      if (!this.feedback || !this.d_value) return\n\n      const { meter, label } = this.checkPasswordStrength(this.d_value)\n\n      this.meter = meter\n      this.infoText = label\n\n      if (!this.overlayVisible) {\n        this.overlayVisible = true\n      }\n    },\n    checkPasswordStrength(value) {\n      let label = null\n      let meter = null\n\n      switch (this.testStrength(value)) {\n      case 1:\n        label = this.weakText\n        meter = {\n          strength: 'weak',\n          width: '33.33%'\n        }\n        break\n\n      case 2:\n        label = this.mediumText\n        meter = {\n          strength: 'medium',\n          width: '66.66%'\n        }\n        break\n\n      case 3:\n        label = this.strongText\n        meter = {\n          strength: 'strong',\n          width: '100%'\n        }\n        break\n\n      default:\n        label = this.promptText\n        meter = null\n        break\n      }\n\n      return { label, meter }\n    },\n    bindScrollListener() {\n      if (!this.scrollHandler) {\n        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.input.$el, () => {\n          if (this.overlayVisible) {\n            this.overlayVisible = false\n          }\n        })\n      }\n\n      this.scrollHandler.bindScrollListener()\n    },\n    unbindScrollListener() {\n      if (this.scrollHandler) {\n        this.scrollHandler.unbindScrollListener()\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          if (this.overlayVisible) {\n            this.overlayVisible = false\n          }\n        }\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    },\n    onMaskToggle() {\n      this.unmasked = !this.unmasked\n    }\n  },\n  computed: {\n    listeners() {\n      let $vm = this\n\n      return {\n        ...$vm.$listeners,\n        input: event => {\n          this.onInput(event)\n        },\n        focus: event => {\n          this.onFocus(event)\n        },\n        blur: event => {\n          this.onBlur(event)\n        },\n        keyup: event => {\n          this.onKeyUp(event)\n        }\n      }\n    },\n    containerClass() {\n      return ['p-password p-component p-inputwrapper', this.className, {\n        'p-inputwrapper-filled': this.filled,\n        'p-inputwrapper-focus': this.focused,\n        'p-input-icon-right': this.toggleMask\n      }]\n    },\n    inputFieldClass() {\n      return ['p-password-input', this.inputClass, {\n        'p-disabled': this.$attrs.disabled\n      }]\n    },\n    toggleIconClass() {\n      return this.unmasked ? this.hideIcon : this.showIcon\n    },\n    strengthClass() {\n      return `p-password-strength ${this.meter ? this.meter.strength : ''}`\n    },\n    inputType() {\n      return this.unmasked ? 'text' : 'password'\n    },\n    filled() {\n      return (this.d_value != null && this.d_value.toString().length > 0)\n    },\n    weakText() {\n      return this.weakLabel || this.$primevue.config.locale.weak\n    },\n    mediumText() {\n      return this.mediumLabel || this.$primevue.config.locale.medium\n    },\n    strongText() {\n      return this.strongLabel || this.$primevue.config.locale.strong\n    },\n    promptText() {\n      return this.promptLabel || this.$primevue.config.locale.passwordPrompt\n    }\n  },\n  components: {\n    'PInputText': InputText\n  }\n}\n</script>\n\n<style>\n.p-password {\n  position: relative;\n  display: inline-flex;\n}\n\n.p-password-panel {\n  position: absolute;\n}\n\n.p-password .p-password-panel {\n  min-width: 100%;\n}\n\n.p-password-meter {\n  height: 10px;\n}\n\n.p-password-strength {\n  height: 100%;\n  width: 0%;\n  transition: width 1s ease-in-out;\n}\n\n.p-fluid .p-password {\n  display: flex;\n}\n</style>\n"]
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

})(primevue2.inputtext, primevue2.utils);
