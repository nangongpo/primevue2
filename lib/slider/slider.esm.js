import { DomHandler } from 'primevue2/utils';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var script = {
  name: 'Slider',
  props: {
    value: [Number, Array],
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    orientation: {
      type: String,
      default: 'horizontal'
    },
    step: {
      type: Number,
      default: null
    },
    range: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    ariaLabelledBy: {
      type: String,
      default: null
    }
  },
  dragging: false,
  handleIndex: null,
  initX: null,
  initY: null,
  barWidth: null,
  barHeight: null,
  dragListener: null,
  dragEndListener: null,
  beforeDestroy: function beforeDestroy() {
    this.unbindDragListeners();
  },
  methods: {
    updateDomData: function updateDomData() {
      var rect = this.$refs.container.getBoundingClientRect();
      this.initX = rect.left + DomHandler.getWindowScrollLeft();
      this.initY = rect.top + DomHandler.getWindowScrollTop();
      this.barWidth = this.$refs.container.offsetWidth;
      this.barHeight = this.$refs.container.offsetHeight;
    },
    setValue: function setValue(event) {
      var handleValue;
      var pageX = event.touches ? event.touches[0].pageX : event.pageX;
      var pageY = event.touches ? event.touches[0].pageY : event.pageY;
      if (this.orientation === 'horizontal') handleValue = (pageX - this.initX) * 100 / this.barWidth;else handleValue = (this.initY + this.barHeight - pageY) * 100 / this.barHeight;
      var newValue = (this.max - this.min) * (handleValue / 100) + this.min;
      if (this.step) {
        var oldValue = this.range ? this.value[this.handleIndex] : this.value;
        var diff = newValue - oldValue;
        if (diff < 0) newValue = oldValue + Math.ceil(newValue / this.step - oldValue / this.step) * this.step;else if (diff > 0) newValue = oldValue + Math.floor(newValue / this.step - oldValue / this.step) * this.step;
      } else {
        newValue = Math.floor(newValue);
      }
      this.updateModel(event, newValue);
    },
    updateModel: function updateModel(event, value) {
      var newValue = parseFloat(value.toFixed(10));
      var modelValue;
      if (this.range) {
        modelValue = this.value ? _toConsumableArray(this.value) : [];
        if (this.handleIndex == 0) {
          var maxValue = this.value ? this.value[1] : this.max;
          if (newValue < this.min) newValue = this.min;else if (newValue >= maxValue) newValue = maxValue;
          modelValue[0] = newValue;
          modelValue[1] = modelValue[1] || this.max;
        } else {
          var minValue = this.value ? this.value[0] : this.min;
          if (newValue > this.max) newValue = this.max;else if (newValue <= minValue) newValue = minValue;
          modelValue[0] = modelValue[0] || this.min;
          modelValue[1] = newValue;
        }
      } else {
        if (newValue < this.min) newValue = this.min;else if (newValue > this.max) newValue = this.max;
        modelValue = newValue;
      }
      this.$emit('input', modelValue);
      this.$emit('change', modelValue);
    },
    onDragStart: function onDragStart(event, index) {
      if (this.disabled) {
        return;
      }
      DomHandler.addClass(this.$el, 'p-slider-sliding');
      this.dragging = true;
      this.updateDomData();
      if (this.range && this.value[0] === this.max) {
        this.handleIndex = 0;
      } else {
        this.handleIndex = index;
      }
      event.preventDefault();
    },
    onDrag: function onDrag(event) {
      if (this.dragging) {
        this.setValue(event);
        event.preventDefault();
      }
    },
    onDragEnd: function onDragEnd(event) {
      if (this.dragging) {
        this.dragging = false;
        DomHandler.removeClass(this.$el, 'p-slider-sliding');
        this.$emit('slideend', {
          originalEvent: event,
          value: this.value
        });
      }
    },
    onBarClick: function onBarClick(event) {
      if (this.disabled) {
        return;
      }
      if (!DomHandler.hasClass(event.target, 'p-slider-handle')) {
        this.updateDomData();
        this.setValue(event);
      }
    },
    onMouseDown: function onMouseDown(event, index) {
      this.bindDragListeners();
      this.onDragStart(event, index);
    },
    onKeyDown: function onKeyDown(event, index) {
      this.handleIndex = index;
      switch (event.which) {
        //down
        case 40:
          if (this.vertical) {
            this.decrementValue(event, index);
            event.preventDefault();
          }
          break;

        //up
        case 38:
          if (this.vertical) {
            this.incrementValue(event, index);
            event.preventDefault();
          }
          break;

        //left
        case 37:
          if (this.horizontal) {
            this.decrementValue(event, index);
            event.preventDefault();
          }
          break;

        //right
        case 39:
          if (this.horizontal) {
            this.incrementValue(event, index);
            event.preventDefault();
          }
          break;
      }
    },
    decrementValue: function decrementValue(event, index) {
      var newValue;
      if (this.range) {
        if (this.step) newValue = this.value[index] - this.step;else newValue = this.value[index] - 1;
      } else {
        if (this.step) newValue = this.value - this.step;else newValue = this.value - 1;
      }
      this.updateModel(event, newValue);
      event.preventDefault();
    },
    incrementValue: function incrementValue(event, index) {
      var newValue;
      if (this.range) {
        if (this.step) newValue = this.value[index] + this.step;else newValue = this.value[index] + 1;
      } else {
        if (this.step) newValue = this.value + this.step;else newValue = this.value + 1;
      }
      this.updateModel(event, newValue);
      event.preventDefault();
    },
    bindDragListeners: function bindDragListeners() {
      if (!this.dragListener) {
        this.dragListener = this.onDrag.bind(this);
        document.addEventListener('mousemove', this.dragListener);
      }
      if (!this.dragEndListener) {
        this.dragEndListener = this.onDragEnd.bind(this);
        document.addEventListener('mouseup', this.dragEndListener);
      }
    },
    unbindDragListeners: function unbindDragListeners() {
      if (this.dragListener) {
        document.removeEventListener('mousemove', this.dragListener);
        this.dragListener = null;
      }
      if (this.dragEndListener) {
        document.removeEventListener('mouseup', this.dragEndListener);
        this.dragEndListener = null;
      }
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-slider p-component', {
        'p-disabled': this.disabled,
        'p-slider-horizontal': this.orientation === 'horizontal',
        'p-slider-vertical': this.orientation === 'vertical'
      }];
    },
    horizontal: function horizontal() {
      return this.orientation === 'horizontal';
    },
    vertical: function vertical() {
      return this.orientation === 'vertical';
    },
    rangeStyle: function rangeStyle() {
      if (this.range) {
        if (this.horizontal) return {
          'left': this.rangeStartPosition + '%',
          width: this.rangeEndPosition - this.rangeStartPosition + '%'
        };else return {
          'bottom': this.rangeStartPosition + '%',
          height: this.rangeEndPosition - this.rangeStartHandlePosition + '%'
        };
      } else {
        if (this.horizontal) return {
          'width': this.handlePosition + '%'
        };else return {
          'height': this.handlePosition + '%'
        };
      }
    },
    handleStyle: function handleStyle() {
      if (this.horizontal) return {
        'left': this.handlePosition + '%'
      };else return {
        'bottom': this.handlePosition + '%'
      };
    },
    handlePosition: function handlePosition() {
      if (this.value < this.min) return 0;else if (this.value > this.max) return 100;else return (this.value - this.min) * 100 / (this.max - this.min);
    },
    rangeStartPosition: function rangeStartPosition() {
      if (this.value && this.value[0]) return (this.value[0] < this.min ? 0 : this.value[0] - this.min) * 100 / (this.max - this.min);else return 0;
    },
    rangeEndPosition: function rangeEndPosition() {
      if (this.value && this.value[1]) return (this.value[1] > this.max ? 100 : this.value[1] - this.min) * 100 / (this.max - this.min);else return 100;
    },
    rangeStartHandleStyle: function rangeStartHandleStyle() {
      if (this.horizontal) return {
        'left': this.rangeStartPosition + '%'
      };else return {
        'bottom': this.rangeStartPosition + '%'
      };
    },
    rangeEndHandleStyle: function rangeEndHandleStyle() {
      if (this.horizontal) return {
        'left': this.rangeEndPosition + '%'
      };else return {
        'bottom': this.rangeEndPosition + '%'
      };
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
    ref: "container",
    class: _vm.containerClass,
    on: {
      click: _vm.onBarClick
    }
  }, [_c("span", {
    staticClass: "p-slider-range",
    style: _vm.rangeStyle
  }), _vm._v(" "), !_vm.range ? _c("span", {
    staticClass: "p-slider-handle",
    style: _vm.handleStyle,
    attrs: {
      tabindex: "0",
      role: "slider",
      "aria-valuemin": _vm.min,
      "aria-valuenow": _vm.value,
      "aria-valuemax": _vm.max,
      "aria-labelledby": _vm.ariaLabelledBy
    },
    on: {
      touchstart: function touchstart($event) {
        return _vm.onDragStart($event);
      },
      touchmove: function touchmove($event) {
        return _vm.onDrag($event);
      },
      touchend: function touchend($event) {
        return _vm.onDragEnd($event);
      },
      mousedown: function mousedown($event) {
        return _vm.onMouseDown($event);
      },
      keydown: function keydown($event) {
        return _vm.onKeyDown($event);
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.range ? _c("span", {
    staticClass: "p-slider-handle",
    style: _vm.rangeStartHandleStyle,
    attrs: {
      tabindex: "0",
      role: "slider",
      "aria-valuemin": _vm.min,
      "aria-valuenow": _vm.value ? _vm.value[0] : null,
      "aria-valuemax": _vm.max,
      "aria-labelledby": _vm.ariaLabelledBy
    },
    on: {
      touchstart: function touchstart($event) {
        return _vm.onDragStart($event, 0);
      },
      touchmove: function touchmove($event) {
        return _vm.onDrag($event);
      },
      touchend: function touchend($event) {
        return _vm.onDragEnd($event);
      },
      mousedown: function mousedown($event) {
        return _vm.onMouseDown($event, 0);
      },
      keydown: function keydown($event) {
        return _vm.onKeyDown($event);
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.range ? _c("span", {
    staticClass: "p-slider-handle",
    style: _vm.rangeEndHandleStyle,
    attrs: {
      tabindex: "0",
      role: "slider",
      "aria-valuemin": _vm.min,
      "aria-valuenow": _vm.value ? _vm.value[1] : null,
      "aria-valuemax": _vm.max,
      "aria-labelledby": _vm.ariaLabelledBy
    },
    on: {
      touchstart: function touchstart($event) {
        return _vm.onDragStart($event, 1);
      },
      touchmove: function touchmove($event) {
        return _vm.onDrag($event);
      },
      touchend: function touchend($event) {
        return _vm.onDragEnd($event);
      },
      mousedown: function mousedown($event) {
        return _vm.onMouseDown($event, 1);
      },
      keydown: function keydown($event) {
        return _vm.onKeyDown($event, 1);
      }
    }
  }) : _vm._e()]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-090b6244_0", {
    source: "\n.p-slider {\n  position: relative;\n}\n.p-slider .p-slider-handle {\n  position: absolute;\n  cursor: -webkit-grab;\n  cursor: grab;\n  -ms-touch-action: none;\n      touch-action: none;\n  display: block;\n}\n.p-slider-range {\n  position: absolute;\n  display: block;\n}\n.p-slider-horizontal .p-slider-range {\n  top: 0;\n  left: 0;\n  height: 100%;\n}\n.p-slider-horizontal .p-slider-handle {\n  top: 50%;\n}\n.p-slider-vertical {\n  height: 100px;\n}\n.p-slider-vertical .p-slider-handle {\n  left: 50%;\n}\n.p-slider-vertical .p-slider-range {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/slider/Slider.vue"],
      "names": [],
      "mappings": ";AA6YA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;EACA,oBAAA;EAAA,YAAA;EACA,sBAAA;MAAA,kBAAA;EACA,cAAA;AACA;AAEA;EACA,kBAAA;EACA,cAAA;AACA;AAEA;EACA,MAAA;EACA,OAAA;EACA,YAAA;AACA;AAEA;EACA,QAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,SAAA;AACA;AAEA;EACA,SAAA;EACA,OAAA;EACA,WAAA;AACA",
      "file": "Slider.vue",
      "sourcesContent": ["<template>\n  <div :class=\"containerClass\" @click=\"onBarClick\" ref=\"container\">\n    <span class=\"p-slider-range\" :style=\"rangeStyle\"></span>\n    <span\n      v-if=\"!range\"\n      class=\"p-slider-handle\"\n      :style=\"handleStyle\"\n      @touchstart=\"onDragStart($event)\"\n      @touchmove=\"onDrag($event)\"\n      @touchend=\"onDragEnd($event)\"\n      @mousedown=\"onMouseDown($event)\"\n      @keydown=\"onKeyDown($event)\"\n      tabindex=\"0\"\n      role=\"slider\"\n      :aria-valuemin=\"min\"\n      :aria-valuenow=\"value\"\n      :aria-valuemax=\"max\"\n      :aria-labelledby=\"ariaLabelledBy\"></span>\n    <span\n      v-if=\"range\"\n      class=\"p-slider-handle\"\n      :style=\"rangeStartHandleStyle\"\n      @touchstart=\"onDragStart($event, 0)\"\n      @touchmove=\"onDrag($event)\"\n      @touchend=\"onDragEnd($event)\"\n      @mousedown=\"onMouseDown($event, 0)\"\n      @keydown=\"onKeyDown($event)\"\n      tabindex=\"0\"\n      role=\"slider\"\n      :aria-valuemin=\"min\"\n      :aria-valuenow=\"value ? value[0] : null\"\n      :aria-valuemax=\"max\"\n      :aria-labelledby=\"ariaLabelledBy\"></span>\n    <span\n      v-if=\"range\"\n      class=\"p-slider-handle\"\n      :style=\"rangeEndHandleStyle\"\n      @touchstart=\"onDragStart($event, 1)\"\n      @touchmove=\"onDrag($event)\"\n      @touchend=\"onDragEnd($event)\"\n      @mousedown=\"onMouseDown($event, 1)\"\n      @keydown=\"onKeyDown($event, 1)\"\n      tabindex=\"0\"\n      role=\"slider\"\n      :aria-valuemin=\"min\"\n      :aria-valuenow=\"value ? value[1] : null\"\n      :aria-valuemax=\"max\"\n      :aria-labelledby=\"ariaLabelledBy\"></span>\n  </div>\n</template>\n\n<script>\nimport { DomHandler } from 'primevue2/utils'\n\nexport default {\n  name: 'Slider',\n  props: {\n    value: [Number, Array],\n    min: {\n      type: Number,\n      default: 0\n    },\n    max: {\n      type: Number,\n      default: 100\n    },\n    orientation: {\n      type: String,\n      default: 'horizontal'\n    },\n    step: {\n      type: Number,\n      default: null\n    },\n    range: {\n      type: Boolean,\n      default: false\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    },\n    ariaLabelledBy: {\n      type: String,\n      default: null\n    }\n  },\n  dragging: false,\n  handleIndex: null,\n  initX: null,\n  initY: null,\n  barWidth: null,\n  barHeight: null,\n  dragListener: null,\n  dragEndListener: null,\n  beforeDestroy() {\n    this.unbindDragListeners()\n  },\n  methods: {\n    updateDomData() {\n      let rect = this.$refs.container.getBoundingClientRect()\n      this.initX = rect.left + DomHandler.getWindowScrollLeft()\n      this.initY = rect.top + DomHandler.getWindowScrollTop()\n      this.barWidth = this.$refs.container.offsetWidth\n      this.barHeight = this.$refs.container.offsetHeight\n    },\n    setValue(event) {\n      let handleValue\n      let pageX = event.touches ? event.touches[0].pageX : event.pageX\n      let pageY = event.touches ? event.touches[0].pageY : event.pageY\n\n      if (this.orientation === 'horizontal')\n        handleValue = ((pageX - this.initX) * 100) / (this.barWidth)\n      else\n        handleValue = (((this.initY + this.barHeight) - pageY) * 100) / (this.barHeight)\n\n      let newValue = (this.max - this.min) * (handleValue / 100) + this.min\n\n      if (this.step) {\n        const oldValue = this.range ? this.value[this.handleIndex] : this.value\n        const diff = (newValue - oldValue)\n\n        if (diff < 0)\n          newValue = oldValue + Math.ceil(newValue / this.step - oldValue / this.step) * this.step\n        else if (diff > 0)\n          newValue = oldValue + Math.floor(newValue / this.step - oldValue / this.step) * this.step\n      }\n\n      else {\n        newValue = Math.floor(newValue)\n      }\n\n      this.updateModel(event, newValue)\n    },\n    updateModel(event, value) {\n      let newValue = parseFloat(value.toFixed(10))\n      let modelValue\n\n      if (this.range) {\n        modelValue = this.value ? [...this.value] : []\n\n        if (this.handleIndex == 0) {\n          let maxValue = this.value ? this.value[1] : this.max\n\n          if (newValue < this.min)\n            newValue = this.min\n          else if (newValue >= maxValue)\n            newValue = maxValue\n\n          modelValue[0] = newValue\n          modelValue[1] = modelValue[1] || this.max\n        }\n        else {\n          let minValue = this.value ? this.value[0] : this.min\n          if (newValue > this.max)\n            newValue = this.max\n          else if (newValue <= minValue)\n            newValue = minValue\n\n          modelValue[0] = modelValue[0] || this.min\n          modelValue[1] = newValue\n        }\n      }\n\n      else {\n        if (newValue < this.min)\n          newValue = this.min\n        else if (newValue > this.max)\n          newValue = this.max\n\n        modelValue = newValue\n      }\n\n      this.$emit('input', modelValue)\n      this.$emit('change', modelValue)\n    },\n    onDragStart(event, index) {\n      if (this.disabled) {\n        return\n      }\n\n      DomHandler.addClass(this.$el, 'p-slider-sliding')\n\n      this.dragging = true\n      this.updateDomData()\n\n      if (this.range && this.value[0] === this.max) {\n        this.handleIndex = 0\n      }\n      else {\n        this.handleIndex = index\n      }\n\n      event.preventDefault()\n    },\n    onDrag(event) {\n      if (this.dragging) {\n        this.setValue(event)\n        event.preventDefault()\n      }\n    },\n    onDragEnd(event) {\n      if (this.dragging) {\n        this.dragging = false\n\n        DomHandler.removeClass(this.$el, 'p-slider-sliding')\n        this.$emit('slideend', { originalEvent: event, value: this.value })\n      }\n    },\n    onBarClick(event) {\n      if (this.disabled) {\n        return\n      }\n\n      if (!DomHandler.hasClass(event.target, 'p-slider-handle')) {\n        this.updateDomData()\n        this.setValue(event)\n      }\n    },\n    onMouseDown(event, index) {\n      this.bindDragListeners()\n      this.onDragStart(event, index)\n    },\n    onKeyDown(event, index) {\n      this.handleIndex = index\n\n      switch (event.which) {\n      //down\n      case 40:\n        if (this.vertical) {\n          this.decrementValue(event, index)\n          event.preventDefault()\n        }\n        break\n\n        //up\n      case 38:\n        if (this.vertical) {\n          this.incrementValue(event, index)\n          event.preventDefault()\n        }\n        break\n\n        //left\n      case 37:\n        if (this.horizontal) {\n          this.decrementValue(event, index)\n          event.preventDefault()\n        }\n        break\n\n        //right\n      case 39:\n        if (this.horizontal) {\n          this.incrementValue(event, index)\n          event.preventDefault()\n        }\n        break\n\n      default:\n        break\n      }\n    },\n    decrementValue(event, index) {\n      let newValue\n\n      if (this.range) {\n        if (this.step)\n          newValue = this.value[index] - this.step\n        else\n          newValue = this.value[index] - 1\n      }\n      else {\n        if (this.step)\n          newValue = this.value - this.step\n        else\n          newValue = this.value - 1\n      }\n\n      this.updateModel(event, newValue)\n\n      event.preventDefault()\n    },\n    incrementValue(event, index) {\n      let newValue\n\n      if (this.range) {\n        if (this.step)\n          newValue = this.value[index] + this.step\n        else\n          newValue = this.value[index] + 1\n      }\n      else {\n        if (this.step)\n          newValue = this.value + this.step\n        else\n          newValue = this.value + 1\n      }\n\n      this.updateModel(event, newValue)\n\n      event.preventDefault()\n    },\n    bindDragListeners() {\n      if (!this.dragListener) {\n        this.dragListener = this.onDrag.bind(this)\n        document.addEventListener('mousemove', this.dragListener)\n      }\n\n      if (!this.dragEndListener) {\n        this.dragEndListener = this.onDragEnd.bind(this)\n        document.addEventListener('mouseup', this.dragEndListener)\n      }\n    },\n    unbindDragListeners() {\n      if (this.dragListener) {\n        document.removeEventListener('mousemove', this.dragListener)\n        this.dragListener = null\n      }\n\n      if (this.dragEndListener) {\n        document.removeEventListener('mouseup', this.dragEndListener)\n        this.dragEndListener = null\n      }\n    }\n  },\n  computed: {\n    containerClass() {\n      return ['p-slider p-component', {\n        'p-disabled': this.disabled,\n        'p-slider-horizontal': (this.orientation === 'horizontal'),\n        'p-slider-vertical': (this.orientation === 'vertical')\n      }]\n    },\n    horizontal() {\n      return this.orientation === 'horizontal'\n    },\n    vertical() {\n      return this.orientation === 'vertical'\n    },\n    rangeStyle() {\n      if (this.range) {\n        if (this.horizontal)\n          return { 'left': this.rangeStartPosition + '%', width: (this.rangeEndPosition - this.rangeStartPosition + '%') }\n        else\n          return { 'bottom': this.rangeStartPosition + '%', height: (this.rangeEndPosition - this.rangeStartHandlePosition + '%') }\n      }\n      else {\n        if (this.horizontal)\n          return { 'width': this.handlePosition + '%' }\n        else\n          return { 'height': this.handlePosition + '%' }\n      }\n    },\n    handleStyle() {\n      if (this.horizontal)\n        return { 'left': this.handlePosition + '%' }\n      else\n        return { 'bottom': this.handlePosition + '%' }\n    },\n    handlePosition() {\n      if (this.value < this.min)\n        return 0\n      else if (this.value > this.max)\n        return 100\n      else\n        return (this.value - this.min) * 100 / (this.max - this.min)\n    },\n    rangeStartPosition() {\n      if (this.value && this.value[0])\n        return (this.value[0] < this.min ? 0 : this.value[0] - this.min) * 100 / (this.max - this.min)\n      else\n        return 0\n    },\n    rangeEndPosition() {\n      if (this.value && this.value[1])\n        return (this.value[1] > this.max ? 100 : this.value[1] - this.min) * 100 / (this.max - this.min)\n      else\n        return 100\n    },\n    rangeStartHandleStyle() {\n      if (this.horizontal)\n        return { 'left': this.rangeStartPosition + '%' }\n      else\n        return { 'bottom': this.rangeStartPosition + '%' }\n    },\n    rangeEndHandleStyle() {\n      if (this.horizontal)\n        return { 'left': this.rangeEndPosition + '%' }\n      else\n        return { 'bottom': this.rangeEndPosition + '%' }\n    },\n  }\n}\n</script>\n\n<style>\n.p-slider {\n  position: relative;\n}\n\n.p-slider .p-slider-handle {\n  position: absolute;\n  cursor: grab;\n  touch-action: none;\n  display: block;\n}\n\n.p-slider-range {\n  position: absolute;\n  display: block;\n}\n\n.p-slider-horizontal .p-slider-range {\n  top: 0;\n  left: 0;\n  height: 100%;\n}\n\n.p-slider-horizontal .p-slider-handle {\n  top: 50%;\n}\n\n.p-slider-vertical {\n  height: 100px;\n}\n\n.p-slider-vertical .p-slider-handle {\n  left: 50%;\n}\n\n.p-slider-vertical .p-slider-range {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n</style>\n"]
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
