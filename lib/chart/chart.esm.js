//
//
//
//
//
//

var script = {
  name: 'Chart',
  props: {
    type: String,
    data: null,
    options: null,
    plugins: null,
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 150
    }
  },
  chart: null,
  mounted: function mounted() {
    this.initChart();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  },
  watch: {
    data: {
      handler: function handler() {
        this.reinit();
      },
      deep: true
    },
    type: function type() {
      this.reinit();
    },
    options: function options() {
      this.reinit();
    }
  },
  methods: {
    initChart: function initChart() {
      var _this = this;
      import('chart.js/auto').then(function (module) {
        if (_this.chart) {
          _this.chart.destroy();
          _this.chart = null;
        }
        if (module && module.default) {
          _this.chart = new module.default(_this.$refs.canvas, {
            type: _this.type,
            data: _this.data,
            options: _this.options,
            plugins: _this.plugins
          });
        }
        _this.$emit('loaded', _this.chart);
      });
    },
    getCanvas: function getCanvas() {
      return this.$canvas;
    },
    getChart: function getChart() {
      return this.chart;
    },
    getBase64Image: function getBase64Image() {
      return this.chart.toBase64Image();
    },
    refresh: function refresh() {
      if (this.chart) {
        this.chart.update();
      }
    },
    reinit: function reinit() {
      this.initChart();
    },
    onCanvasClick: function onCanvasClick(event) {
      if (this.chart) {
        var element = this.chart.getElementsAtEventForMode(event, 'nearest', {
          intersect: true
        }, false);
        var dataset = this.chart.getElementsAtEventForMode(event, 'dataset', {
          intersect: true
        }, false);
        if (element && element[0] && dataset) {
          this.$emit('select', {
            originalEvent: event,
            element: element[0],
            dataset: dataset
          });
        }
      }
    },
    generateLegend: function generateLegend() {
      if (this.chart) {
        return this.chart.generateLegend();
      }
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
    staticClass: "p-chart"
  }, [_c("canvas", {
    ref: "canvas",
    attrs: {
      width: _vm.width,
      height: _vm.height
    },
    on: {
      click: function click($event) {
        return _vm.onCanvasClick($event);
      }
    }
  })]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-b13f0728_0", {
    source: "\n.p-chart {\n  position: relative;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/chart/Chart.vue"],
      "names": [],
      "mappings": ";AAwGA;EACA,kBAAA;AACA",
      "file": "Chart.vue",
      "sourcesContent": ["<template>\n  <div class=\"p-chart\">\n    <canvas ref=\"canvas\" :width=\"width\" :height=\"height\" @click=\"onCanvasClick($event)\"></canvas>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Chart',\n  props: {\n    type: String,\n    data: null,\n    options: null,\n    plugins: null,\n    width: {\n      type: Number,\n      default: 300\n    },\n    height: {\n      type: Number,\n      default: 150\n    }\n  },\n  chart: null,\n  mounted() {\n    this.initChart()\n  },\n  beforeDestroy() {\n    if (this.chart) {\n      this.chart.destroy()\n      this.chart = null\n    }\n  },\n  watch: {\n    data: {\n      handler() {\n        this.reinit()\n      },\n      deep: true\n    },\n    type() {\n      this.reinit()\n    },\n    options() {\n      this.reinit()\n    }\n  },\n  methods: {\n    initChart() {\n      import('chart.js/auto').then((module) => {\n        if (this.chart) {\n          this.chart.destroy()\n          this.chart = null\n        }\n\n        if (module && module.default) {\n          this.chart = new module.default(this.$refs.canvas, {\n            type: this.type,\n            data: this.data,\n            options: this.options,\n            plugins: this.plugins\n          })\n        }\n\n        this.$emit('loaded', this.chart)\n      })\n    },\n    getCanvas() {\n      return this.$canvas\n    },\n    getChart() {\n      return this.chart\n    },\n    getBase64Image() {\n      return this.chart.toBase64Image()\n    },\n    refresh() {\n      if (this.chart) {\n        this.chart.update()\n      }\n    },\n    reinit() {\n      this.initChart()\n    },\n    onCanvasClick(event) {\n      if (this.chart) {\n        const element = this.chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false)\n        const dataset = this.chart.getElementsAtEventForMode(event, 'dataset', { intersect: true }, false)\n\n        if (element && element[0] && dataset) {\n          this.$emit('select', { originalEvent: event, element: element[0], dataset: dataset })\n        }\n      }\n    },\n    generateLegend() {\n      if (this.chart) {\n        return this.chart.generateLegend()\n      }\n    }\n  }\n}\n</script>\n\n<style>\n.p-chart {\n  position: relative;\n}\n</style>\n"]
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
