import { DomHandler, ConnectedOverlayScrollHandler } from 'primevue2/utils';

//
var script = {
  name: 'ColorPicker',
  props: {
    value: {
      type: null,
      default: null
    },
    defaultColor: {
      type: null,
      default: 'ff0000'
    },
    inline: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: 'hex'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tabindex: {
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
    ariaLabelledBy: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      overlayVisible: false
    };
  },
  hsbValue: null,
  outsideClickListener: null,
  documentMouseMoveListener: null,
  documentMouseUpListener: null,
  scrollHandler: null,
  resizeListener: null,
  hueDragging: null,
  colorDragging: null,
  selfUpdate: null,
  beforeDestroy: function beforeDestroy() {
    this.unbindOutsideClickListener();
    this.unbindDragListeners();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
  },
  mounted: function mounted() {
    this.updateUI();
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(newValue) {
        this.hsbValue = this.toHSB(newValue);
        if (this.selfUpdate) this.selfUpdate = false;else this.updateUI();
      }
    }
  },
  methods: {
    pickColor: function pickColor(event) {
      var rect = this.$refs.colorSelector.getBoundingClientRect();
      var top = rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
      var left = rect.left + document.body.scrollLeft;
      var saturation = Math.floor(100 * Math.max(0, Math.min(150, event.pageX - left)) / 150);
      var brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, event.pageY - top))) / 150);
      this.hsbValue = this.validateHSB({
        h: this.hsbValue.h,
        s: saturation,
        b: brightness
      });
      this.selfUpdate = true;
      this.updateColorHandle();
      this.updateInput();
      this.updateModel();
    },
    pickHue: function pickHue(event) {
      var top = this.$refs.hueView.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
      this.hsbValue = this.validateHSB({
        h: Math.floor(360 * (150 - Math.max(0, Math.min(150, event.pageY - top))) / 150),
        s: 100,
        b: 100
      });
      this.selfUpdate = true;
      this.updateColorSelector();
      this.updateHue();
      this.updateModel();
      this.updateInput();
    },
    updateModel: function updateModel() {
      switch (this.format) {
        case 'hex':
          this.$emit('input', this.HSBtoHEX(this.hsbValue));
          break;
        case 'rgb':
          this.$emit('input', this.HSBtoRGB(this.hsbValue));
          break;
        case 'hsb':
          this.$emit('input', this.hsbValue);
          break;
      }
    },
    updateColorSelector: function updateColorSelector() {
      if (this.$refs.colorSelector) {
        var hsbValue = this.validateHSB({
          h: this.hsbValue.h,
          s: 100,
          b: 100
        });
        this.$refs.colorSelector.style.backgroundColor = '#' + this.HSBtoHEX(hsbValue);
      }
    },
    updateColorHandle: function updateColorHandle() {
      if (this.$refs.colorHandle) {
        this.$refs.colorHandle.style.left = Math.floor(150 * this.hsbValue.s / 100) + 'px';
        this.$refs.colorHandle.style.top = Math.floor(150 * (100 - this.hsbValue.b) / 100) + 'px';
      }
    },
    updateHue: function updateHue() {
      if (this.$refs.hueHandle) {
        this.$refs.hueHandle.style.top = Math.floor(150 - 150 * this.hsbValue.h / 360) + 'px';
      }
    },
    updateInput: function updateInput() {
      if (this.$refs.input) {
        this.$refs.input.style.backgroundColor = '#' + this.HSBtoHEX(this.hsbValue);
      }
    },
    updateUI: function updateUI() {
      this.updateHue();
      this.updateColorHandle();
      this.updateInput();
      this.updateColorSelector();
    },
    validateHSB: function validateHSB(hsb) {
      return {
        h: Math.min(360, Math.max(0, hsb.h)),
        s: Math.min(100, Math.max(0, hsb.s)),
        b: Math.min(100, Math.max(0, hsb.b))
      };
    },
    validateRGB: function validateRGB(rgb) {
      return {
        r: Math.min(255, Math.max(0, rgb.r)),
        g: Math.min(255, Math.max(0, rgb.g)),
        b: Math.min(255, Math.max(0, rgb.b))
      };
    },
    validateHEX: function validateHEX(hex) {
      var len = 6 - hex.length;
      if (len > 0) {
        var o = [];
        for (var i = 0; i < len; i++) {
          o.push('0');
        }
        o.push(hex);
        hex = o.join('');
      }
      return hex;
    },
    HEXtoRGB: function HEXtoRGB(hex) {
      var hexValue = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16);
      return {
        r: hexValue >> 16,
        g: (hexValue & 0x00FF00) >> 8,
        b: hexValue & 0x0000FF
      };
    },
    HEXtoHSB: function HEXtoHSB(hex) {
      return this.RGBtoHSB(this.HEXtoRGB(hex));
    },
    RGBtoHSB: function RGBtoHSB(rgb) {
      var hsb = {
        h: 0,
        s: 0,
        b: 0
      };
      var min = Math.min(rgb.r, rgb.g, rgb.b);
      var max = Math.max(rgb.r, rgb.g, rgb.b);
      var delta = max - min;
      hsb.b = max;
      hsb.s = max !== 0 ? 255 * delta / max : 0;
      if (hsb.s !== 0) {
        if (rgb.r === max) {
          hsb.h = (rgb.g - rgb.b) / delta;
        } else if (rgb.g === max) {
          hsb.h = 2 + (rgb.b - rgb.r) / delta;
        } else {
          hsb.h = 4 + (rgb.r - rgb.g) / delta;
        }
      } else {
        hsb.h = -1;
      }
      hsb.h *= 60;
      if (hsb.h < 0) {
        hsb.h += 360;
      }
      hsb.s *= 100 / 255;
      hsb.b *= 100 / 255;
      return hsb;
    },
    HSBtoRGB: function HSBtoRGB(hsb) {
      var rgb = {
        r: null,
        g: null,
        b: null
      };
      var h = Math.round(hsb.h);
      var s = Math.round(hsb.s * 255 / 100);
      var v = Math.round(hsb.b * 255 / 100);
      if (s === 0) {
        rgb = {
          r: v,
          g: v,
          b: v
        };
      } else {
        var t1 = v;
        var t2 = (255 - s) * v / 255;
        var t3 = (t1 - t2) * (h % 60) / 60;
        if (h === 360) h = 0;
        if (h < 60) {
          rgb.r = t1;
          rgb.b = t2;
          rgb.g = t2 + t3;
        } else if (h < 120) {
          rgb.g = t1;
          rgb.b = t2;
          rgb.r = t1 - t3;
        } else if (h < 180) {
          rgb.g = t1;
          rgb.r = t2;
          rgb.b = t2 + t3;
        } else if (h < 240) {
          rgb.b = t1;
          rgb.r = t2;
          rgb.g = t1 - t3;
        } else if (h < 300) {
          rgb.b = t1;
          rgb.g = t2;
          rgb.r = t2 + t3;
        } else if (h < 360) {
          rgb.r = t1;
          rgb.g = t2;
          rgb.b = t1 - t3;
        } else {
          rgb.r = 0;
          rgb.g = 0;
          rgb.b = 0;
        }
      }
      return {
        r: Math.round(rgb.r),
        g: Math.round(rgb.g),
        b: Math.round(rgb.b)
      };
    },
    RGBtoHEX: function RGBtoHEX(rgb) {
      var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
      for (var key in hex) {
        if (hex[key].length === 1) {
          hex[key] = '0' + hex[key];
        }
      }
      return hex.join('');
    },
    HSBtoHEX: function HSBtoHEX(hsb) {
      return this.RGBtoHEX(this.HSBtoRGB(hsb));
    },
    toHSB: function toHSB(value) {
      var hsb;
      if (value) {
        switch (this.format) {
          case 'hex':
            hsb = this.HEXtoHSB(value);
            break;
          case 'rgb':
            hsb = this.RGBtoHSB(value);
            break;
          case 'hsb':
            hsb = value;
            break;
        }
      } else {
        hsb = this.HEXtoHSB(this.defaultColor);
      }
      return hsb;
    },
    onOverlayEnter: function onOverlayEnter() {
      this.updateUI();
      this.alignOverlay();
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      if (this.autoZIndex) {
        this.$refs.picker.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
      }
    },
    onOverlayLeave: function onOverlayLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
    },
    alignOverlay: function alignOverlay() {
      DomHandler.relativePosition(this.$refs.picker, this.$refs.input);
    },
    onInputClick: function onInputClick() {
      if (this.disabled) {
        return;
      }
      this.overlayVisible = !this.overlayVisible;
    },
    onInputKeydown: function onInputKeydown(event) {
      switch (event.which) {
        //space
        case 32:
          this.overlayVisible = !this.overlayVisible;
          event.preventDefault();
          break;

        //escape and tab
        case 27:
        case 9:
          this.overlayVisible = false;
          break;
      }
    },
    onColorMousedown: function onColorMousedown(event) {
      if (this.disabled) {
        return;
      }
      this.bindDragListeners();
      this.onColorDragStart(event);
    },
    onColorDragStart: function onColorDragStart(event) {
      if (this.disabled) {
        return;
      }
      this.colorDragging = true;
      this.pickColor(event);
      DomHandler.addClass(this.$el, 'p-colorpicker-dragging');
      event.preventDefault();
    },
    onDrag: function onDrag(event) {
      if (this.colorDragging) {
        this.pickColor(event);
        event.preventDefault();
      }
      if (this.hueDragging) {
        this.pickHue(event);
        event.preventDefault();
      }
    },
    onDragEnd: function onDragEnd() {
      this.colorDragging = false;
      this.hueDragging = false;
      DomHandler.removeClass(this.$el, 'p-colorpicker-dragging');
      this.unbindDragListeners();
    },
    onHueMousedown: function onHueMousedown(event) {
      if (this.disabled) {
        return;
      }
      this.bindDragListeners();
      this.onHueDragStart(event);
    },
    onHueDragStart: function onHueDragStart(event) {
      if (this.disabled) {
        return;
      }
      this.hueDragging = true;
      this.pickHue(event);
      DomHandler.addClass(this.$el, 'p-colorpicker-dragging');
    },
    isInputClicked: function isInputClicked(event) {
      return this.$refs.input && this.$refs.input.isSameNode(event.target);
    },
    bindDragListeners: function bindDragListeners() {
      this.bindDocumentMouseMoveListener();
      this.bindDocumentMouseUpListener();
    },
    unbindDragListeners: function unbindDragListeners() {
      this.unbindDocumentMouseMoveListener();
      this.unbindDocumentMouseUpListener();
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function (event) {
          if (_this.overlayVisible && _this.$refs.picker && !_this.$refs.picker.contains(event.target) && !_this.isInputClicked(event)) {
            _this.overlayVisible = false;
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
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$el, function () {
          if (_this2.overlayVisible) {
            _this2.overlayVisible = false;
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
            _this3.overlayVisible = false;
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
    bindDocumentMouseMoveListener: function bindDocumentMouseMoveListener() {
      if (!this.documentMouseMoveListener) {
        this.documentMouseMoveListener = this.onDrag.bind(this);
        document.addEventListener('mousemove', this.documentMouseMoveListener);
      }
    },
    unbindDocumentMouseMoveListener: function unbindDocumentMouseMoveListener() {
      if (this.documentMouseMoveListener) {
        document.removeEventListener('mousemove', this.documentMouseMoveListener);
        this.documentMouseMoveListener = null;
      }
    },
    bindDocumentMouseUpListener: function bindDocumentMouseUpListener() {
      if (!this.documentMouseUpListener) {
        this.documentMouseUpListener = this.onDragEnd.bind(this);
        document.addEventListener('mouseup', this.documentMouseUpListener);
      }
    },
    unbindDocumentMouseUpListener: function unbindDocumentMouseUpListener() {
      if (this.documentMouseUpListener) {
        document.removeEventListener('mouseup', this.documentMouseUpListener);
        this.documentMouseUpListener = null;
      }
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-colorpicker p-component', {
        'p-colorpicker-overlay': !this.inline
      }];
    },
    inputClass: function inputClass() {
      return ['p-colorpicker-preview p-inputtext', {
        'p-disabled': this.disabled
      }];
    },
    pickerClass: function pickerClass() {
      return ['p-colorpicker-panel', {
        'p-colorpicker-overlay-panel': !this.inline,
        'p-disabled': this.disabled
      }];
    }
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
    class: _vm.containerClass
  }, [!_vm.inline ? _c("input", {
    ref: "input",
    class: _vm.inputClass,
    attrs: {
      type: "text",
      readonly: "readonly",
      tabindex: _vm.tabindex,
      disabled: _vm.disabled,
      "aria-labelledby": _vm.ariaLabelledBy
    },
    on: {
      click: _vm.onInputClick,
      keydown: _vm.onInputKeydown
    }
  }) : _vm._e(), _vm._v(" "), _c("transition", {
    attrs: {
      name: "p-connected-overlay"
    },
    on: {
      enter: _vm.onOverlayEnter,
      leave: _vm.onOverlayLeave
    }
  }, [(_vm.inline ? true : _vm.overlayVisible) ? _c("div", {
    ref: "picker",
    class: _vm.pickerClass
  }, [_c("div", {
    staticClass: "p-colorpicker-content"
  }, [_c("div", {
    ref: "colorSelector",
    staticClass: "p-colorpicker-color-selector",
    on: {
      mousedown: function mousedown($event) {
        return _vm.onColorMousedown($event);
      },
      touchstart: function touchstart($event) {
        return _vm.onColorDragStart($event);
      },
      touchmove: function touchmove($event) {
        return _vm.onDrag($event);
      },
      touchend: function touchend($event) {
        return _vm.onDragEnd();
      }
    }
  }, [_c("div", {
    staticClass: "p-colorpicker-color"
  }, [_c("div", {
    ref: "colorHandle",
    staticClass: "p-colorpicker-color-handle"
  })])]), _vm._v(" "), _c("div", {
    ref: "hueView",
    staticClass: "p-colorpicker-hue",
    on: {
      mousedown: function mousedown($event) {
        return _vm.onHueMousedown($event);
      },
      touchstart: function touchstart($event) {
        return _vm.onHueDragStart($event);
      },
      touchmove: function touchmove($event) {
        return _vm.onDrag($event);
      },
      touchend: function touchend($event) {
        return _vm.onDragEnd();
      }
    }
  }, [_c("div", {
    ref: "hueHandle",
    staticClass: "p-colorpicker-hue-handle"
  })])])]) : _vm._e()])], 1);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-d55d167c_0", {
    source: "\n.p-colorpicker {\n  display: inline-block;\n}\n.p-colorpicker-dragging {\n  cursor: pointer;\n}\n.p-colorpicker-overlay {\n  position: relative;\n}\n.p-colorpicker-panel {\n  position: relative;\n  width: 193px;\n  height: 166px;\n}\n.p-colorpicker-overlay-panel {\n  position: absolute;\n}\n.p-colorpicker-preview {\n  cursor: pointer;\n}\n.p-colorpicker-panel .p-colorpicker-content {\n  position: relative;\n}\n.p-colorpicker-panel .p-colorpicker-color-selector {\n  width: 150px;\n  height: 150px;\n  top: 8px;\n  left: 8px;\n  position: absolute;\n}\n.p-colorpicker-panel .p-colorpicker-color {\n   width: 150px;\n   height: 150px;\n}\n.p-colorpicker-panel .p-colorpicker-color-handle {\n   position: absolute;\n   top: 0px;\n   left: 150px;\n   border-radius: 100%;\n   width: 10px;\n   height: 10px;\n   border-width: 1px;\n   border-style: solid;\n   margin: -5px 0 0 -5px;\n   cursor: pointer;\n   opacity: .85;\n}\n.p-colorpicker-panel .p-colorpicker-hue {\n  width: 17px;\n  height: 150px;\n  top: 8px;\n  left: 167px;\n  position: absolute;\n  opacity: .85;\n}\n.p-colorpicker-panel .p-colorpicker-hue-handle {\n   position: absolute;\n   top: 150px;\n   left: 0px;\n   width: 21px;\n   margin-left: -2px;\n   margin-top: -5px;\n   height: 10px;\n   border-width: 2px;\n   border-style: solid;\n   opacity: .85;\n   cursor: pointer;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/colorpicker/ColorPicker.vue"],
      "names": [],
      "mappings": ";AAwhBA;EACA,qBAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,YAAA;EACA,aAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;AACA;AAEA;GACA,YAAA;GACA,aAAA;AACA;AAEA;GACA,kBAAA;GACA,QAAA;GACA,WAAA;GACA,mBAAA;GACA,WAAA;GACA,YAAA;GACA,iBAAA;GACA,mBAAA;GACA,qBAAA;GACA,eAAA;GACA,YAAA;AACA;AAEA;EACA,WAAA;EACA,aAAA;EACA,QAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;AACA;AAEA;GACA,kBAAA;GACA,UAAA;GACA,SAAA;GACA,WAAA;GACA,iBAAA;GACA,gBAAA;GACA,YAAA;GACA,iBAAA;GACA,mBAAA;GACA,YAAA;GACA,eAAA;AACA",
      "file": "ColorPicker.vue",
      "sourcesContent": ["<template>\n  <div :class=\"containerClass\">\n    <input\n      ref=\"input\"\n      type=\"text\"\n      :class=\"inputClass\"\n      readonly=\"readonly\"\n      :tabindex=\"tabindex\"\n      :disabled=\"disabled\"\n      @click=\"onInputClick\"\n      @keydown=\"onInputKeydown\"\n      v-if=\"!inline\"\n      :aria-labelledby=\"ariaLabelledBy\" />\n    <transition name=\"p-connected-overlay\" @enter=\"onOverlayEnter\" @leave=\"onOverlayLeave\">\n      <div ref=\"picker\" :class=\"pickerClass\" v-if=\"inline ? true : overlayVisible\">\n        <div class=\"p-colorpicker-content\">\n          <div\n            ref=\"colorSelector\"\n            class=\"p-colorpicker-color-selector\"\n            @mousedown=\"onColorMousedown($event)\"\n            @touchstart=\"onColorDragStart($event)\"\n            @touchmove=\"onDrag($event)\"\n            @touchend=\"onDragEnd()\">\n            <div class=\"p-colorpicker-color\">\n              <div ref=\"colorHandle\" class=\"p-colorpicker-color-handle\"></div>\n            </div>\n          </div>\n          <div\n            ref=\"hueView\"\n            class=\"p-colorpicker-hue\"\n            @mousedown=\"onHueMousedown($event)\"\n            @touchstart=\"onHueDragStart($event)\"\n            @touchmove=\"onDrag($event)\"\n            @touchend=\"onDragEnd()\">\n            <div ref=\"hueHandle\" class=\"p-colorpicker-hue-handle\"></div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  </div>\n</template>\n\n<script>\nimport { ConnectedOverlayScrollHandler, DomHandler } from 'primevue2/utils'\n\nexport default {\n  name: 'ColorPicker',\n  props: {\n    value: {\n      type: null,\n      default: null\n    },\n    defaultColor: {\n      type: null,\n      default: 'ff0000'\n    },\n    inline: {\n      type: Boolean,\n      default: false\n    },\n    format: {\n      type: String,\n      default: 'hex'\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    },\n    tabindex: {\n      type: String,\n      default: null\n    },\n    autoZIndex: {\n      type: Boolean,\n      default: true\n    },\n    baseZIndex: {\n      type: Number,\n      default: 0\n    },\n    ariaLabelledBy: {\n      type: String,\n      default: null\n    }\n  },\n  data() {\n    return {\n      overlayVisible: false\n    }\n  },\n  hsbValue: null,\n  outsideClickListener: null,\n  documentMouseMoveListener: null,\n  documentMouseUpListener: null,\n  scrollHandler: null,\n  resizeListener: null,\n  hueDragging: null,\n  colorDragging: null,\n  selfUpdate: null,\n  beforeDestroy() {\n    this.unbindOutsideClickListener()\n    this.unbindDragListeners()\n    this.unbindResizeListener()\n\n    if (this.scrollHandler) {\n      this.scrollHandler.destroy()\n      this.scrollHandler = null\n    }\n  },\n  mounted() {\n    this.updateUI()\n  },\n  watch: {\n    value: {\n      immediate: true,\n      handler(newValue) {\n        this.hsbValue = this.toHSB(newValue)\n\n        if (this.selfUpdate)\n          this.selfUpdate = false\n        else\n          this.updateUI()\n      }\n    }\n  },\n  methods: {\n    pickColor(event) {\n      let rect = this.$refs.colorSelector.getBoundingClientRect()\n      let top = rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)\n      let left = rect.left + document.body.scrollLeft\n      let saturation = Math.floor(100 * (Math.max(0, Math.min(150, (event.pageX - left)))) / 150)\n      let brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150)\n      this.hsbValue = this.validateHSB({\n        h: this.hsbValue.h,\n        s: saturation,\n        b: brightness\n      })\n\n      this.selfUpdate = true\n      this.updateColorHandle()\n      this.updateInput()\n      this.updateModel()\n    },\n    pickHue(event) {\n      let top = this.$refs.hueView.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)\n      this.hsbValue = this.validateHSB({\n        h: Math.floor(360 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150),\n        s: 100,\n        b: 100\n      })\n\n      this.selfUpdate = true\n      this.updateColorSelector()\n      this.updateHue()\n      this.updateModel()\n      this.updateInput()\n    },\n    updateModel() {\n      switch (this.format) {\n      case 'hex':\n        this.$emit('input', this.HSBtoHEX(this.hsbValue))\n        break\n\n      case 'rgb':\n        this.$emit('input', this.HSBtoRGB(this.hsbValue))\n        break\n\n      case 'hsb':\n        this.$emit('input', this.hsbValue)\n        break\n\n      default:\n        //NoOp\n        break\n      }\n    },\n    updateColorSelector() {\n      if (this.$refs.colorSelector) {\n        let hsbValue = this.validateHSB({\n          h: this.hsbValue.h,\n          s: 100,\n          b: 100\n        })\n        this.$refs.colorSelector.style.backgroundColor = '#' + this.HSBtoHEX(hsbValue)\n      }\n    },\n    updateColorHandle() {\n      if (this.$refs.colorHandle) {\n        this.$refs.colorHandle.style.left = Math.floor(150 * this.hsbValue.s / 100) + 'px'\n        this.$refs.colorHandle.style.top = Math.floor(150 * (100 - this.hsbValue.b) / 100) + 'px'\n      }\n    },\n    updateHue() {\n      if (this.$refs.hueHandle) {\n        this.$refs.hueHandle.style.top = Math.floor(150 - (150 * this.hsbValue.h / 360)) + 'px'\n      }\n    },\n    updateInput() {\n      if (this.$refs.input) {\n        this.$refs.input.style.backgroundColor = '#' + this.HSBtoHEX(this.hsbValue)\n      }\n    },\n    updateUI() {\n      this.updateHue()\n      this.updateColorHandle()\n      this.updateInput()\n      this.updateColorSelector()\n    },\n    validateHSB(hsb) {\n      return {\n        h: Math.min(360, Math.max(0, hsb.h)),\n        s: Math.min(100, Math.max(0, hsb.s)),\n        b: Math.min(100, Math.max(0, hsb.b))\n      }\n    },\n    validateRGB(rgb) {\n      return {\n        r: Math.min(255, Math.max(0, rgb.r)),\n        g: Math.min(255, Math.max(0, rgb.g)),\n        b: Math.min(255, Math.max(0, rgb.b))\n      }\n    },\n    validateHEX(hex) {\n      var len = 6 - hex.length\n      if (len > 0) {\n        var o = []\n        for (var i = 0; i < len; i++) {\n          o.push('0')\n        }\n        o.push(hex)\n        hex = o.join('')\n      }\n      return hex\n    },\n    HEXtoRGB(hex) {\n      let hexValue = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16)\n      return { r: hexValue >> 16, g: (hexValue & 0x00FF00) >> 8, b: (hexValue & 0x0000FF) }\n    },\n    HEXtoHSB(hex) {\n      return this.RGBtoHSB(this.HEXtoRGB(hex))\n    },\n    RGBtoHSB(rgb) {\n      var hsb = {\n        h: 0,\n        s: 0,\n        b: 0\n      }\n      var min = Math.min(rgb.r, rgb.g, rgb.b)\n      var max = Math.max(rgb.r, rgb.g, rgb.b)\n      var delta = max - min\n      hsb.b = max\n      hsb.s = max !== 0 ? 255 * delta / max : 0\n      if (hsb.s !== 0) {\n        if (rgb.r === max) {\n          hsb.h = (rgb.g - rgb.b) / delta\n        } else if (rgb.g === max) {\n          hsb.h = 2 + (rgb.b - rgb.r) / delta\n        } else {\n          hsb.h = 4 + (rgb.r - rgb.g) / delta\n        }\n      } else {\n        hsb.h = -1\n      }\n      hsb.h *= 60\n      if (hsb.h < 0) {\n        hsb.h += 360\n      }\n      hsb.s *= 100 / 255\n      hsb.b *= 100 / 255\n      return hsb\n    },\n    HSBtoRGB(hsb) {\n      var rgb = {\n        r: null, g: null, b: null\n      }\n      var h = Math.round(hsb.h)\n      var s = Math.round(hsb.s * 255 / 100)\n      var v = Math.round(hsb.b * 255 / 100)\n      if (s === 0) {\n        rgb = {\n          r: v,\n          g: v,\n          b: v\n        }\n      }\n      else {\n        var t1 = v\n        var t2 = (255 - s) * v / 255\n        var t3 = (t1 - t2) * (h % 60) / 60\n        if (h === 360) h = 0\n        if (h < 60) { rgb.r = t1; rgb.b = t2; rgb.g = t2 + t3 }\n        else if (h < 120) { rgb.g = t1; rgb.b = t2; rgb.r = t1 - t3 }\n        else if (h < 180) { rgb.g = t1; rgb.r = t2; rgb.b = t2 + t3 }\n        else if (h < 240) { rgb.b = t1; rgb.r = t2; rgb.g = t1 - t3 }\n        else if (h < 300) { rgb.b = t1; rgb.g = t2; rgb.r = t2 + t3 }\n        else if (h < 360) { rgb.r = t1; rgb.g = t2; rgb.b = t1 - t3 }\n        else { rgb.r = 0; rgb.g = 0; rgb.b = 0 }\n      }\n      return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) }\n    },\n    RGBtoHEX(rgb) {\n      var hex = [\n        rgb.r.toString(16),\n        rgb.g.toString(16),\n        rgb.b.toString(16)\n      ]\n\n      for (var key in hex) {\n        if (hex[key].length === 1) {\n          hex[key] = '0' + hex[key]\n        }\n      }\n\n      return hex.join('')\n    },\n    HSBtoHEX(hsb) {\n      return this.RGBtoHEX(this.HSBtoRGB(hsb))\n    },\n    toHSB(value) {\n      let hsb\n\n      if (value) {\n        switch (this.format) {\n        case 'hex':\n          hsb = this.HEXtoHSB(value)\n          break\n\n        case 'rgb':\n          hsb = this.RGBtoHSB(value)\n          break\n\n        case 'hsb':\n          hsb = value\n          break\n\n        default:\n          break\n        }\n      }\n      else {\n        hsb = this.HEXtoHSB(this.defaultColor)\n      }\n\n      return hsb\n    },\n    onOverlayEnter() {\n      this.updateUI()\n      this.alignOverlay()\n      this.bindOutsideClickListener()\n      this.bindScrollListener()\n      this.bindResizeListener()\n\n      if (this.autoZIndex) {\n        this.$refs.picker.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())\n      }\n    },\n    onOverlayLeave() {\n      this.unbindOutsideClickListener()\n      this.unbindScrollListener()\n      this.unbindResizeListener()\n    },\n    alignOverlay() {\n      DomHandler.relativePosition(this.$refs.picker, this.$refs.input)\n    },\n    onInputClick() {\n      if (this.disabled) {\n        return\n      }\n\n      this.overlayVisible = !this.overlayVisible\n    },\n    onInputKeydown(event) {\n      switch (event.which) {\n      //space\n      case 32:\n        this.overlayVisible = !this.overlayVisible\n        event.preventDefault()\n        break\n\n        //escape and tab\n      case 27:\n      case 9:\n        this.overlayVisible = false\n        break\n\n      default:\n        //NoOp\n        break\n      }\n    },\n    onColorMousedown(event) {\n      if (this.disabled) {\n        return\n      }\n      this.bindDragListeners()\n      this.onColorDragStart(event)\n    },\n    onColorDragStart(event) {\n      if (this.disabled) {\n        return\n      }\n      this.colorDragging = true\n      this.pickColor(event)\n      DomHandler.addClass(this.$el, 'p-colorpicker-dragging')\n      event.preventDefault()\n    },\n    onDrag(event) {\n      if (this.colorDragging) {\n        this.pickColor(event)\n        event.preventDefault()\n      }\n      if (this.hueDragging) {\n        this.pickHue(event)\n        event.preventDefault()\n      }\n    },\n    onDragEnd() {\n      this.colorDragging = false\n      this.hueDragging = false\n      DomHandler.removeClass(this.$el, 'p-colorpicker-dragging')\n      this.unbindDragListeners()\n    },\n    onHueMousedown(event) {\n      if (this.disabled) {\n        return\n      }\n      this.bindDragListeners()\n      this.onHueDragStart(event)\n    },\n    onHueDragStart(event) {\n      if (this.disabled) {\n        return\n      }\n      this.hueDragging = true\n      this.pickHue(event)\n      DomHandler.addClass(this.$el, 'p-colorpicker-dragging')\n    },\n    isInputClicked(event) {\n      return this.$refs.input && this.$refs.input.isSameNode(event.target)\n    },\n    bindDragListeners() {\n      this.bindDocumentMouseMoveListener()\n      this.bindDocumentMouseUpListener()\n    },\n    unbindDragListeners() {\n      this.unbindDocumentMouseMoveListener()\n      this.unbindDocumentMouseUpListener()\n    },\n    bindOutsideClickListener() {\n      if (!this.outsideClickListener) {\n        this.outsideClickListener = (event) => {\n          if (this.overlayVisible && this.$refs.picker && !this.$refs.picker.contains(event.target) && !this.isInputClicked(event)) {\n            this.overlayVisible = false\n          }\n        }\n        document.addEventListener('click', this.outsideClickListener)\n      }\n    },\n    unbindOutsideClickListener() {\n      if (this.outsideClickListener) {\n        document.removeEventListener('click', this.outsideClickListener)\n        this.outsideClickListener = null\n      }\n    },\n    bindScrollListener() {\n      if (!this.scrollHandler) {\n        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$el, () => {\n          if (this.overlayVisible) {\n            this.overlayVisible = false\n          }\n        })\n      }\n\n      this.scrollHandler.bindScrollListener()\n    },\n    unbindScrollListener() {\n      if (this.scrollHandler) {\n        this.scrollHandler.unbindScrollListener()\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          if (this.overlayVisible) {\n            this.overlayVisible = false\n          }\n        }\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    },\n    bindDocumentMouseMoveListener() {\n      if (!this.documentMouseMoveListener) {\n        this.documentMouseMoveListener = this.onDrag.bind(this)\n        document.addEventListener('mousemove', this.documentMouseMoveListener)\n      }\n    },\n    unbindDocumentMouseMoveListener() {\n      if (this.documentMouseMoveListener) {\n        document.removeEventListener('mousemove', this.documentMouseMoveListener)\n        this.documentMouseMoveListener = null\n      }\n    },\n    bindDocumentMouseUpListener() {\n      if (!this.documentMouseUpListener) {\n        this.documentMouseUpListener = this.onDragEnd.bind(this)\n        document.addEventListener('mouseup', this.documentMouseUpListener)\n      }\n    },\n    unbindDocumentMouseUpListener() {\n      if (this.documentMouseUpListener) {\n        document.removeEventListener('mouseup', this.documentMouseUpListener)\n        this.documentMouseUpListener = null\n      }\n    }\n  },\n  computed: {\n    containerClass() {\n      return ['p-colorpicker p-component', { 'p-colorpicker-overlay': !this.inline }]\n    },\n    inputClass() {\n      return ['p-colorpicker-preview p-inputtext', { 'p-disabled': this.disabled }]\n    },\n    pickerClass() {\n      return ['p-colorpicker-panel', { 'p-colorpicker-overlay-panel': !this.inline, 'p-disabled': this.disabled }]\n    }\n  }\n}\n</script>\n\n<style>\n.p-colorpicker {\n  display: inline-block;\n}\n\n.p-colorpicker-dragging {\n  cursor: pointer;\n}\n\n.p-colorpicker-overlay {\n  position: relative;\n}\n\n.p-colorpicker-panel {\n  position: relative;\n  width: 193px;\n  height: 166px;\n}\n\n.p-colorpicker-overlay-panel {\n  position: absolute;\n}\n\n.p-colorpicker-preview {\n  cursor: pointer;\n}\n\n.p-colorpicker-panel .p-colorpicker-content {\n  position: relative;\n}\n\n.p-colorpicker-panel .p-colorpicker-color-selector {\n  width: 150px;\n  height: 150px;\n  top: 8px;\n  left: 8px;\n  position: absolute;\n}\n\n.p-colorpicker-panel .p-colorpicker-color {\n   width: 150px;\n   height: 150px;\n}\n\n.p-colorpicker-panel .p-colorpicker-color-handle {\n   position: absolute;\n   top: 0px;\n   left: 150px;\n   border-radius: 100%;\n   width: 10px;\n   height: 10px;\n   border-width: 1px;\n   border-style: solid;\n   margin: -5px 0 0 -5px;\n   cursor: pointer;\n   opacity: .85;\n}\n\n.p-colorpicker-panel .p-colorpicker-hue {\n  width: 17px;\n  height: 150px;\n  top: 8px;\n  left: 167px;\n  position: absolute;\n  opacity: .85;\n}\n\n.p-colorpicker-panel .p-colorpicker-hue-handle {\n   position: absolute;\n   top: 150px;\n   left: 0px;\n   width: 21px;\n   margin-left: -2px;\n   margin-top: -5px;\n   height: 10px;\n   border-width: 2px;\n   border-style: solid;\n   opacity: .85;\n   cursor: pointer;\n}\n</style>\n"]
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
