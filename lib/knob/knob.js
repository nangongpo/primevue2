this.primevue2 = this.primevue2 || {};
this.primevue2.knob = (function () {
  'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    name: 'Knob',
    data: function data() {
      return {
        radius: 40,
        midX: 50,
        midY: 50,
        minRadians: 4 * Math.PI / 3,
        maxRadians: -Math.PI / 3
      };
    },
    props: {
      value: {
        type: Number,
        default: null
      },
      size: {
        type: Number,
        default: 100
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      step: {
        type: Number,
        default: 1
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      valueColor: {
        type: String,
        default: 'var(--primary-color, Black)'
      },
      rangeColor: {
        type: String,
        default: 'var(--surface-border, LightGray)'
      },
      textColor: {
        type: String,
        default: 'var(--text-color-secondary, Black)'
      },
      strokeWidth: {
        type: Number,
        default: 14
      },
      showValue: {
        type: Boolean,
        default: true
      },
      valueTemplate: {
        type: String,
        default: '{value}'
      }
    },
    methods: {
      updateValue: function updateValue(offsetX, offsetY) {
        var dx = offsetX - this.size / 2;
        var dy = this.size / 2 - offsetY;
        var angle = Math.atan2(dy, dx);
        var start = -Math.PI / 2 - Math.PI / 6;
        this.updateModel(angle, start);
      },
      updateModel: function updateModel(angle, start) {
        var mappedValue;
        if (angle > this.maxRadians) mappedValue = this.mapRange(angle, this.minRadians, this.maxRadians, this.min, this.max);else if (angle < start) mappedValue = this.mapRange(angle + 2 * Math.PI, this.minRadians, this.maxRadians, this.min, this.max);else return;
        var newValue = Math.round((mappedValue - this.min) / this.step) * this.step + this.min;
        this.$emit('input', newValue);
        this.$emit('change', newValue);
      },
      mapRange: function mapRange(x, inMin, inMax, outMin, outMax) {
        return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
      },
      onClick: function onClick(event) {
        if (!this.disabled && !this.readonly) {
          this.updateValue(event.offsetX, event.offsetY);
        }
      },
      onMouseDown: function onMouseDown(event) {
        if (!this.disabled && !this.readonly) {
          window.addEventListener('mousemove', this.onMouseMove);
          window.addEventListener('mouseup', this.onMouseUp);
          event.preventDefault();
        }
      },
      onMouseUp: function onMouseUp(event) {
        if (!this.disabled && !this.readonly) {
          window.removeEventListener('mousemove', this.onMouseMove);
          window.removeEventListener('mouseup', this.onMouseUp);
          event.preventDefault();
        }
      },
      onTouchStart: function onTouchStart(event) {
        if (!this.disabled && !this.readonly) {
          window.addEventListener('touchmove', this.onTouchMove);
          window.addEventListener('touchend', this.onTouchEnd);
          event.preventDefault();
        }
      },
      onTouchEnd: function onTouchEnd(event) {
        if (!this.disabled && !this.readonly) {
          window.removeEventListener('touchmove', this.onTouchMove);
          window.removeEventListener('touchend', this.onTouchEnd);
          event.preventDefault();
        }
      },
      onMouseMove: function onMouseMove(event) {
        if (!this.disabled && !this.readonly) {
          this.updateValue(event.offsetX, event.offsetY);
          event.preventDefault();
        }
      },
      onTouchMove: function onTouchMove(event) {
        if (!this.disabled && !this.readonly && event.touches.length == 1) {
          var rect = this.$el.getBoundingClientRect();
          var touch = event.targetTouches.item(0);
          var offsetX = touch.clientX - rect.left;
          var offsetY = touch.clientY - rect.top;
          this.updateValue(offsetX, offsetY);
        }
      }
    },
    computed: {
      containerClass: function containerClass() {
        return ['p-knob p-component', {
          'p-disabled': this.disabled
        }];
      },
      rangePath: function rangePath() {
        return "M ".concat(this.minX, " ").concat(this.minY, " A ").concat(this.radius, " ").concat(this.radius, " 0 1 1 ").concat(this.maxX, " ").concat(this.maxY);
      },
      valuePath: function valuePath() {
        return "M ".concat(this.zeroX, " ").concat(this.zeroY, " A ").concat(this.radius, " ").concat(this.radius, " 0 ").concat(this.largeArc, " ").concat(this.sweep, " ").concat(this.valueX, " ").concat(this.valueY);
      },
      zeroRadians: function zeroRadians() {
        if (this.min > 0 && this.max > 0) return this.mapRange(this.min, this.min, this.max, this.minRadians, this.maxRadians);else return this.mapRange(0, this.min, this.max, this.minRadians, this.maxRadians);
      },
      valueRadians: function valueRadians() {
        return this.mapRange(this.value, this.min, this.max, this.minRadians, this.maxRadians);
      },
      minX: function minX() {
        return this.midX + Math.cos(this.minRadians) * this.radius;
      },
      minY: function minY() {
        return this.midY - Math.sin(this.minRadians) * this.radius;
      },
      maxX: function maxX() {
        return this.midX + Math.cos(this.maxRadians) * this.radius;
      },
      maxY: function maxY() {
        return this.midY - Math.sin(this.maxRadians) * this.radius;
      },
      zeroX: function zeroX() {
        return this.midX + Math.cos(this.zeroRadians) * this.radius;
      },
      zeroY: function zeroY() {
        return this.midY - Math.sin(this.zeroRadians) * this.radius;
      },
      valueX: function valueX() {
        return this.midX + Math.cos(this.valueRadians) * this.radius;
      },
      valueY: function valueY() {
        return this.midY - Math.sin(this.valueRadians) * this.radius;
      },
      largeArc: function largeArc() {
        return Math.abs(this.zeroRadians - this.valueRadians) < Math.PI ? 0 : 1;
      },
      sweep: function sweep() {
        return this.valueRadians > this.zeroRadians ? 0 : 1;
      },
      valueToDisplay: function valueToDisplay() {
        return this.valueTemplate.replace(/{value}/g, this.value);
      }
    }
  };
  //Inspired from https://github.com/kramer99/vue-knob-control

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
    }, [_c("svg", {
      attrs: {
        viewBox: "0 0 100 100",
        width: _vm.size,
        height: _vm.size
      },
      on: {
        click: _vm.onClick,
        mousedown: _vm.onMouseDown,
        mouseup: _vm.onMouseUp,
        touchstart: _vm.onTouchStart,
        touchend: _vm.onTouchEnd
      }
    }, [_c("path", {
      staticClass: "p-knob-range",
      attrs: {
        d: _vm.rangePath,
        "stroke-width": _vm.strokeWidth,
        stroke: _vm.rangeColor
      }
    }), _vm._v(" "), _c("path", {
      staticClass: "p-knob-value",
      attrs: {
        d: _vm.valuePath,
        "stroke-width": _vm.strokeWidth,
        stroke: _vm.valueColor
      }
    }), _vm._v(" "), _vm.showValue ? _c("text", {
      staticClass: "p-knob-text",
      attrs: {
        x: 50,
        y: 57,
        "text-anchor": "middle",
        fill: _vm.textColor
      }
    }, [_vm._v("\n        " + _vm._s(_vm.valueToDisplay) + "\n      ")]) : _vm._e()])]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-62bc2b93_0", {
      source: "\n@-webkit-keyframes dash-frame {\n100% {\n      stroke-dashoffset: 0;\n}\n}\n@keyframes dash-frame {\n100% {\n      stroke-dashoffset: 0;\n}\n}\n.p-knob-range {\n  fill: none;\n  -webkit-transition: stroke .1s ease-in;\n  transition: stroke .1s ease-in;\n}\n.p-knob-value {\n  -webkit-animation-name: dash-frame;\n          animation-name: dash-frame;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  fill: none;\n}\n.p-knob-text {\n  font-size: 1.3rem;\n  text-align: center;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/knob/Knob.vue"],
        "names": [],
        "mappings": ";AA6NA;AACA;MACA,oBAAA;AACA;AACA;AAJA;AACA;MACA,oBAAA;AACA;AACA;AACA;EACA,UAAA;EACA,sCAAA;EAAA,8BAAA;AACA;AACA;EACA,kCAAA;UAAA,0BAAA;EACA,qCAAA;UAAA,6BAAA;EACA,UAAA;AACA;AACA;EACA,iBAAA;EACA,kBAAA;AACA",
        "file": "Knob.vue",
        "sourcesContent": ["<template>\n  <div :class=\"containerClass\">\n    <svg\n      viewBox=\"0 0 100 100\"\n      :width=\"size\"\n      :height=\"size\"\n      @click=\"onClick\"\n      @mousedown=\"onMouseDown\"\n      @mouseup=\"onMouseUp\"\n      @touchstart=\"onTouchStart\"\n      @touchend=\"onTouchEnd\">\n      <path :d=\"rangePath\" :stroke-width=\"strokeWidth\" :stroke=\"rangeColor\" class=\"p-knob-range\"></path>\n      <path :d=\"valuePath\" :stroke-width=\"strokeWidth\" :stroke=\"valueColor\" class=\"p-knob-value\"></path>\n      <text v-if=\"showValue\" :x=\"50\" :y=\"57\" text-anchor=\"middle\" :fill=\"textColor\" class=\"p-knob-text\">\n        {{ valueToDisplay }}\n      </text>\n    </svg>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Knob',\n  data() {\n    return {\n      radius: 40,\n      midX: 50,\n      midY: 50,\n      minRadians: 4 * Math.PI / 3,\n      maxRadians: -Math.PI / 3\n    }\n  },\n  props: {\n    value: {\n      type: Number,\n      default: null\n    },\n    size: {\n      type: Number,\n      default: 100\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    },\n    readonly: {\n      type: Boolean,\n      default: false\n    },\n    step: {\n      type: Number,\n      default: 1\n    },\n    min: {\n      type: Number,\n      default: 0\n    },\n    max: {\n      type: Number,\n      default: 100\n    },\n    valueColor: {\n      type: String,\n      default: 'var(--primary-color, Black)'\n    },\n    rangeColor: {\n      type: String,\n      default: 'var(--surface-border, LightGray)'\n    },\n    textColor: {\n      type: String,\n      default: 'var(--text-color-secondary, Black)'\n    },\n    strokeWidth: {\n      type: Number,\n      default: 14\n    },\n    showValue: {\n      type: Boolean,\n      default: true\n    },\n    valueTemplate: {\n      type: String,\n      default: '{value}'\n    }\n  },\n  methods: {\n    updateValue(offsetX, offsetY) {\n      let dx = offsetX - this.size / 2\n      let dy = this.size / 2 - offsetY\n      let angle = Math.atan2(dy, dx)\n      let start = -Math.PI / 2 - Math.PI / 6\n      this.updateModel(angle, start)\n    },\n    updateModel(angle, start) {\n      let mappedValue\n      if (angle > this.maxRadians)\n        mappedValue = this.mapRange(angle, this.minRadians, this.maxRadians, this.min, this.max)\n      else if (angle < start)\n        mappedValue = this.mapRange(angle + 2 * Math.PI, this.minRadians, this.maxRadians, this.min, this.max)\n      else\n        return\n\n      let newValue = Math.round((mappedValue - this.min) / this.step) * this.step + this.min\n      this.$emit('input', newValue)\n      this.$emit('change', newValue)\n    },\n    mapRange(x, inMin, inMax, outMin, outMax) {\n      return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin\n    },\n    onClick(event) {\n      if (!this.disabled && !this.readonly) {\n        this.updateValue(event.offsetX, event.offsetY)\n      }\n    },\n    onMouseDown(event) {\n      if (!this.disabled && !this.readonly) {\n        window.addEventListener('mousemove', this.onMouseMove)\n        window.addEventListener('mouseup', this.onMouseUp)\n        event.preventDefault()\n      }\n    },\n    onMouseUp(event) {\n      if (!this.disabled && !this.readonly) {\n        window.removeEventListener('mousemove', this.onMouseMove)\n        window.removeEventListener('mouseup', this.onMouseUp)\n        event.preventDefault()\n      }\n    },\n    onTouchStart(event) {\n      if (!this.disabled && !this.readonly) {\n        window.addEventListener('touchmove', this.onTouchMove)\n        window.addEventListener('touchend', this.onTouchEnd)\n        event.preventDefault()\n      }\n    },\n    onTouchEnd(event) {\n      if (!this.disabled && !this.readonly) {\n        window.removeEventListener('touchmove', this.onTouchMove)\n        window.removeEventListener('touchend', this.onTouchEnd)\n        event.preventDefault()\n      }\n    },\n    onMouseMove(event) {\n      if (!this.disabled && !this.readonly) {\n        this.updateValue(event.offsetX, event.offsetY)\n        event.preventDefault()\n      }\n    },\n    onTouchMove(event) {\n      if (!this.disabled && !this.readonly && event.touches.length == 1) {\n        const rect = this.$el.getBoundingClientRect()\n        const touch = event.targetTouches.item(0)\n        const offsetX = touch.clientX - rect.left\n        const offsetY = touch.clientY - rect.top\n        this.updateValue(offsetX, offsetY)\n      }\n    }\n  },\n  computed: {\n    containerClass() {\n      return [\n        'p-knob p-component', {\n          'p-disabled': this.disabled\n        }\n      ]\n    },\n    rangePath() {\n      return `M ${this.minX} ${this.minY} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX} ${this.maxY}`\n    },\n    valuePath() {\n      return `M ${this.zeroX} ${this.zeroY} A ${this.radius} ${this.radius} 0 ${this.largeArc} ${this.sweep} ${this.valueX} ${this.valueY}`\n    },\n    zeroRadians() {\n      if (this.min > 0 && this.max > 0)\n        return this.mapRange(this.min, this.min, this.max, this.minRadians, this.maxRadians)\n      else\n        return this.mapRange(0, this.min, this.max, this.minRadians, this.maxRadians)\n    },\n    valueRadians() {\n      return this.mapRange(this.value, this.min, this.max, this.minRadians, this.maxRadians)\n    },\n    minX() {\n      return this.midX + Math.cos(this.minRadians) * this.radius\n    },\n    minY() {\n      return this.midY - Math.sin(this.minRadians) * this.radius\n    },\n    maxX() {\n      return this.midX + Math.cos(this.maxRadians) * this.radius\n    },\n    maxY() {\n      return this.midY - Math.sin(this.maxRadians) * this.radius\n    },\n    zeroX() {\n      return this.midX + Math.cos(this.zeroRadians) * this.radius\n    },\n    zeroY() {\n      return this.midY - Math.sin(this.zeroRadians) * this.radius\n    },\n    valueX() {\n      return this.midX + Math.cos(this.valueRadians) * this.radius\n    },\n    valueY() {\n      return this.midY - Math.sin(this.valueRadians) * this.radius\n    },\n    largeArc() {\n      return Math.abs(this.zeroRadians - this.valueRadians) < Math.PI ? 0 : 1\n    },\n    sweep() {\n      return this.valueRadians > this.zeroRadians ? 0 : 1\n    },\n    valueToDisplay() {\n      return this.valueTemplate.replace(/{value}/g, this.value)\n    }\n  }\n}\n//Inspired from https://github.com/kramer99/vue-knob-control\n</script>\n\n<style>\n@keyframes dash-frame {\n  100% {\n      stroke-dashoffset: 0;\n  }\n}\n.p-knob-range {\n  fill: none;\n  transition: stroke .1s ease-in;\n}\n.p-knob-value {\n  animation-name: dash-frame;\n  animation-fill-mode: forwards;\n  fill: none;\n}\n.p-knob-text {\n  font-size: 1.3rem;\n  text-align: center;\n}\n</style>\n"]
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

})();
