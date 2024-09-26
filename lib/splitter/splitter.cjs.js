'use strict';

var utils = require('primevue2/utils');

var script = {
  name: 'Splitter',
  props: {
    layout: {
      type: String,
      default: 'horizontal'
    },
    gutterSize: {
      type: Number,
      default: 4
    },
    stateKey: {
      type: String,
      default: null
    },
    stateStorage: {
      type: String,
      default: 'session'
    }
  },
  dragging: false,
  mouseMoveListener: null,
  mouseUpListener: null,
  size: null,
  gutterElement: null,
  startPos: null,
  prevPanelElement: null,
  nextPanelElement: null,
  nextPanelSize: null,
  prevPanelSize: null,
  panelSizes: null,
  prevPanelIndex: null,
  data: function data() {
    return {
      allChildren: null
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.allChildren = this.$children;
    if (this.panels && this.panels.length) {
      var initialized = false;
      if (this.isStateful()) {
        initialized = this.restoreState();
      }
      if (!initialized) {
        var _panelSizes = [];
        this.panels.map(function (panel, i) {
          var panelSize = panel.size || 100 / _this.panels.length;
          _panelSizes[i] = panelSize;
        });
        this.panelSizes = _panelSizes;
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clear();
    this.unbindMouseListeners();
  },
  methods: {
    onResizeStart: function onResizeStart(event, index) {
      this.gutterElement = event.currentTarget;
      this.size = this.horizontal ? utils.DomHandler.getWidth(this.$el) : utils.DomHandler.getHeight(this.$el);
      this.dragging = true;
      this.startPos = this.layout === 'horizontal' ? event.pageX : event.pageY;
      this.prevPanelElement = this.gutterElement.previousElementSibling;
      this.nextPanelElement = this.gutterElement.nextElementSibling;
      this.prevPanelSize = 100 * (this.horizontal ? utils.DomHandler.getOuterWidth(this.prevPanelElement, true) : utils.DomHandler.getOuterHeight(this.prevPanelElement, true)) / this.size;
      this.nextPanelSize = 100 * (this.horizontal ? utils.DomHandler.getOuterWidth(this.nextPanelElement, true) : utils.DomHandler.getOuterHeight(this.nextPanelElement, true)) / this.size;
      this.prevPanelIndex = index;
      utils.DomHandler.addClass(this.gutterElement, 'p-splitter-gutter-resizing');
      utils.DomHandler.addClass(this.$el, 'p-splitter-resizing');
    },
    onResize: function onResize(event) {
      var newPos;
      if (this.horizontal) newPos = event.pageX * 100 / this.size - this.startPos * 100 / this.size;else newPos = event.pageY * 100 / this.size - this.startPos * 100 / this.size;
      var newPrevPanelSize = this.prevPanelSize + newPos;
      var newNextPanelSize = this.nextPanelSize - newPos;
      if (this.validateResize(newPrevPanelSize, newNextPanelSize)) {
        this.prevPanelElement.style.flexBasis = 'calc(' + newPrevPanelSize + '% - ' + (this.panels.length - 1) * this.gutterSize + 'px)';
        this.nextPanelElement.style.flexBasis = 'calc(' + newNextPanelSize + '% - ' + (this.panels.length - 1) * this.gutterSize + 'px)';
        this.panelSizes[this.prevPanelIndex] = newPrevPanelSize;
        this.panelSizes[this.prevPanelIndex + 1] = newNextPanelSize;
      }
    },
    onResizeEnd: function onResizeEnd(event) {
      if (this.isStateful()) {
        this.saveState();
      }
      this.$emit('resizeend', {
        originalEvent: event,
        sizes: this.panelSizes
      });
      utils.DomHandler.removeClass(this.gutterElement, 'p-splitter-gutter-resizing');
      utils.DomHandler.removeClass(this.$el, 'p-splitter-resizing');
      this.clear();
    },
    onGutterMouseDown: function onGutterMouseDown(event, index) {
      this.onResizeStart(event, index);
      this.bindMouseListeners();
    },
    onGutterTouchStart: function onGutterTouchStart(event, index) {
      this.onResizeStart(event, index);
      event.preventDefault();
    },
    onGutterTouchMove: function onGutterTouchMove(event) {
      this.onResize(event);
      event.preventDefault();
    },
    onGutterTouchEnd: function onGutterTouchEnd(event) {
      this.onResizeEnd(event);
      event.preventDefault();
    },
    bindMouseListeners: function bindMouseListeners() {
      var _this2 = this;
      if (!this.mouseMoveListener) {
        this.mouseMoveListener = function (event) {
          return _this2.onResize(event);
        };
        document.addEventListener('mousemove', this.mouseMoveListener);
      }
      if (!this.mouseUpListener) {
        this.mouseUpListener = function (event) {
          _this2.onResizeEnd(event);
          _this2.unbindMouseListeners();
        };
        document.addEventListener('mouseup', this.mouseUpListener);
      }
    },
    validateResize: function validateResize(newPrevPanelSize, newNextPanelSize) {
      if (this.panels[0].props && this.panels[0].props.minSize && this.panels[0].props.minSize > newPrevPanelSize) {
        return false;
      }
      if (this.panels[1].props && this.panels[1].props.minSize && this.panels[1].props.minSize > newNextPanelSize) {
        return false;
      }
      return true;
    },
    unbindMouseListeners: function unbindMouseListeners() {
      if (this.mouseMoveListener) {
        document.removeEventListener('mousemove', this.mouseMoveListener);
        this.mouseMoveListener = null;
      }
      if (this.mouseUpListener) {
        document.removeEventListener('mouseup', this.mouseUpListener);
        this.mouseUpListener = null;
      }
    },
    clear: function clear() {
      this.dragging = false;
      this.size = null;
      this.startPos = null;
      this.prevPanelElement = null;
      this.nextPanelElement = null;
      this.prevPanelSize = null;
      this.nextPanelSize = null;
      this.gutterElement = null;
      this.prevPanelIndex = null;
    },
    isStateful: function isStateful() {
      return this.stateKey != null;
    },
    getStorage: function getStorage() {
      switch (this.stateStorage) {
        case 'local':
          return window.localStorage;
        case 'session':
          return window.sessionStorage;
        default:
          throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
      }
    },
    saveState: function saveState() {
      this.getStorage().setItem(this.stateKey, JSON.stringify(this.panelSizes));
    },
    restoreState: function restoreState() {
      var storage = this.getStorage();
      var stateString = storage.getItem(this.stateKey);
      if (stateString) {
        this.panelSizes = JSON.parse(stateString);
        return true;
      }
      return false;
    },
    getPanelClass: function getPanelClass(panel) {
      return ['p-splitter-panel', panel.$vnode.data.staticClass, {
        'p-splitter-panel-nested': panel.$parent.$vnode.tag.toLowerCase().indexOf('splitter')
      }];
    }
  },
  computed: {
    panels: function panels() {
      var panels = [];
      if (this.allChildren) {
        panels = this.allChildren.filter(function (child) {
          return child.$vnode.tag.toLowerCase().indexOf('splitterpanel') !== -1;
        });
      }
      return panels;
    },
    gutterStyle: function gutterStyle() {
      if (this.horizontal) return {
        width: this.gutterSize + 'px'
      };else return {
        height: this.gutterSize + 'px'
      };
    },
    horizontal: function horizontal() {
      return this.layout === 'horizontal';
    }
  },
  render: function render() {
    var _this3 = this;
    var h = arguments[0];
    var gutterStyle = this.horizontal ? {
      width: this.gutterSize + 'px'
    } : {
      height: this.gutterSize + 'px'
    };
    return h("div", {
      "class": ['p-splitter p-component', 'p-splitter-' + this.layout]
    }, [this.$slots.default, this.panels.map(function (panel, i) {
      var panelStyle = {
        flexBasis: 'calc(' + _this3.panelSizes[i] + '% - ' + (_this3.panels.length - 1) * _this3.gutterSize + 'px)'
      };
      return [h("div", {
        "key": i,
        "class": _this3.getPanelClass(panel),
        "style": panelStyle
      }, [panel.$slots.default]), i !== _this3.panels.length - 1 && h("div", {
        "class": 'p-splitter-gutter',
        "style": gutterStyle,
        "on": {
          "mousedown": function mousedown(e) {
            return _this3.onGutterMouseDown(e, i);
          },
          "touchstart": function touchstart(e) {
            return _this3.onGutterTouchStart(e, i);
          },
          "touchmove": function touchmove(e) {
            return _this3.onGutterTouchMove(e, i);
          },
          "touchend": function touchend(e) {
            return _this3.onGutterTouchEnd(e, i);
          }
        }
      }, [h("div", {
        "class": 'p-splitter-gutter-handle'
      })])];
    })]);
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

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-8a52377a_0", {
    source: "\n.p-splitter {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n}\n.p-splitter-vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.p-splitter-panel {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.p-splitter-panel-nested {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.p-splitter-panel .p-splitter {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  border: 0 none;\n}\n.p-splitter-gutter {\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: col-resize;\n}\n.p-splitter-horizontal.p-splitter-resizing {\n  cursor: col-resize;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {\n  height: 24px;\n  width: 100%;\n}\n.p-splitter-horizontal > .p-splitter-gutter {\n  cursor: col-resize;\n}\n.p-splitter-vertical.p-splitter-resizing {\n  cursor: row-resize;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-splitter-vertical > .p-splitter-gutter {\n  cursor: row-resize;\n}\n.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {\n  width: 24px;\n  height: 100%;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/splitter/Splitter.vue"],
      "names": [],
      "mappings": ";AAgTA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,qBAAA;UAAA,iBAAA;AACA;AAEA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA;AAEA;EACA,mBAAA;EAAA,oBAAA;MAAA,oBAAA;UAAA,YAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA;AAEA;EACA,mBAAA;EAAA,oBAAA;MAAA,oBAAA;UAAA,YAAA;EACA,cAAA;AACA;AAEA;EACA,mBAAA;EAAA,oBAAA;MAAA,oBAAA;UAAA,YAAA;EACA,sBAAA;MAAA,oBAAA;UAAA,cAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AACA;AAEA;EACA,YAAA;EACA,WAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;AACA",
      "file": "Splitter.vue",
      "sourcesContent": ["<script lang=\"jsx\">\nimport { DomHandler } from 'primevue2/utils'\n\nexport default {\n  name: 'Splitter',\n  props: {\n    layout: {\n      type: String,\n      default: 'horizontal'\n    },\n    gutterSize: {\n      type: Number,\n      default: 4\n    },\n    stateKey: {\n      type: String,\n      default: null\n    },\n    stateStorage: {\n      type: String,\n      default: 'session'\n    }\n  },\n  dragging: false,\n  mouseMoveListener: null,\n  mouseUpListener: null,\n  size: null,\n  gutterElement: null,\n  startPos: null,\n  prevPanelElement: null,\n  nextPanelElement: null,\n  nextPanelSize: null,\n  prevPanelSize: null,\n  panelSizes: null,\n  prevPanelIndex: null,\n  data() {\n    return {\n      allChildren: null\n    }\n  },\n  mounted() {\n    this.allChildren = this.$children\n    if (this.panels && this.panels.length) {\n      let initialized = false\n      if (this.isStateful()) {\n        initialized = this.restoreState()\n      }\n\n      if (!initialized) {\n        let _panelSizes = []\n\n        this.panels.map((panel, i) => {\n          let panelSize = panel.size || 100 / this.panels.length\n          _panelSizes[i] = panelSize\n        })\n\n        this.panelSizes = _panelSizes\n      }\n    }\n  },\n  beforeDestroy() {\n    this.clear()\n    this.unbindMouseListeners()\n  },\n  methods: {\n    onResizeStart(event, index) {\n      this.gutterElement = event.currentTarget\n      this.size = this.horizontal\n        ? DomHandler.getWidth(this.$el)\n        : DomHandler.getHeight(this.$el)\n      this.dragging = true\n      this.startPos = this.layout === 'horizontal' ? event.pageX : event.pageY\n      this.prevPanelElement = this.gutterElement.previousElementSibling\n      this.nextPanelElement = this.gutterElement.nextElementSibling\n      this.prevPanelSize =\n        (100 *\n          (this.horizontal\n            ? DomHandler.getOuterWidth(this.prevPanelElement, true)\n            : DomHandler.getOuterHeight(this.prevPanelElement, true))) /\n        this.size\n      this.nextPanelSize =\n        (100 *\n          (this.horizontal\n            ? DomHandler.getOuterWidth(this.nextPanelElement, true)\n            : DomHandler.getOuterHeight(this.nextPanelElement, true))) /\n        this.size\n      this.prevPanelIndex = index\n      DomHandler.addClass(this.gutterElement, 'p-splitter-gutter-resizing')\n      DomHandler.addClass(this.$el, 'p-splitter-resizing')\n    },\n    onResize(event) {\n      let newPos\n      if (this.horizontal)\n        newPos =\n          (event.pageX * 100) / this.size - (this.startPos * 100) / this.size\n      else\n        newPos =\n          (event.pageY * 100) / this.size - (this.startPos * 100) / this.size\n\n      let newPrevPanelSize = this.prevPanelSize + newPos\n      let newNextPanelSize = this.nextPanelSize - newPos\n\n      if (this.validateResize(newPrevPanelSize, newNextPanelSize)) {\n        this.prevPanelElement.style.flexBasis =\n          'calc(' +\n          newPrevPanelSize +\n          '% - ' +\n          (this.panels.length - 1) * this.gutterSize +\n          'px)'\n        this.nextPanelElement.style.flexBasis =\n          'calc(' +\n          newNextPanelSize +\n          '% - ' +\n          (this.panels.length - 1) * this.gutterSize +\n          'px)'\n        this.panelSizes[this.prevPanelIndex] = newPrevPanelSize\n        this.panelSizes[this.prevPanelIndex + 1] = newNextPanelSize\n      }\n    },\n    onResizeEnd(event) {\n      if (this.isStateful()) {\n        this.saveState()\n      }\n\n      this.$emit('resizeend', { originalEvent: event, sizes: this.panelSizes })\n      DomHandler.removeClass(this.gutterElement, 'p-splitter-gutter-resizing')\n      DomHandler.removeClass(this.$el, 'p-splitter-resizing')\n      this.clear()\n    },\n    onGutterMouseDown(event, index) {\n      this.onResizeStart(event, index)\n      this.bindMouseListeners()\n    },\n    onGutterTouchStart(event, index) {\n      this.onResizeStart(event, index)\n      event.preventDefault()\n    },\n    onGutterTouchMove(event) {\n      this.onResize(event)\n      event.preventDefault()\n    },\n    onGutterTouchEnd(event) {\n      this.onResizeEnd(event)\n      event.preventDefault()\n    },\n    bindMouseListeners() {\n      if (!this.mouseMoveListener) {\n        this.mouseMoveListener = (event) => this.onResize(event)\n        document.addEventListener('mousemove', this.mouseMoveListener)\n      }\n\n      if (!this.mouseUpListener) {\n        this.mouseUpListener = (event) => {\n          this.onResizeEnd(event)\n          this.unbindMouseListeners()\n        }\n        document.addEventListener('mouseup', this.mouseUpListener)\n      }\n    },\n    validateResize(newPrevPanelSize, newNextPanelSize) {\n      if (\n        this.panels[0].props &&\n        this.panels[0].props.minSize &&\n        this.panels[0].props.minSize > newPrevPanelSize\n      ) {\n        return false\n      }\n\n      if (\n        this.panels[1].props &&\n        this.panels[1].props.minSize &&\n        this.panels[1].props.minSize > newNextPanelSize\n      ) {\n        return false\n      }\n\n      return true\n    },\n    unbindMouseListeners() {\n      if (this.mouseMoveListener) {\n        document.removeEventListener('mousemove', this.mouseMoveListener)\n        this.mouseMoveListener = null\n      }\n\n      if (this.mouseUpListener) {\n        document.removeEventListener('mouseup', this.mouseUpListener)\n        this.mouseUpListener = null\n      }\n    },\n    clear() {\n      this.dragging = false\n      this.size = null\n      this.startPos = null\n      this.prevPanelElement = null\n      this.nextPanelElement = null\n      this.prevPanelSize = null\n      this.nextPanelSize = null\n      this.gutterElement = null\n      this.prevPanelIndex = null\n    },\n    isStateful() {\n      return this.stateKey != null\n    },\n    getStorage() {\n      switch (this.stateStorage) {\n      case 'local':\n        return window.localStorage\n\n      case 'session':\n        return window.sessionStorage\n\n      default:\n        throw new Error(\n          this.stateStorage +\n              ' is not a valid value for the state storage, supported values are \"local\" and \"session\".'\n        )\n      }\n    },\n    saveState() {\n      this.getStorage().setItem(this.stateKey, JSON.stringify(this.panelSizes))\n    },\n    restoreState() {\n      const storage = this.getStorage()\n      const stateString = storage.getItem(this.stateKey)\n\n      if (stateString) {\n        this.panelSizes = JSON.parse(stateString)\n        return true\n      }\n\n      return false\n    },\n    getPanelClass(panel) {\n      return [\n        'p-splitter-panel',\n        panel.$vnode.data.staticClass,\n        {\n          'p-splitter-panel-nested':\n            panel.$parent.$vnode.tag.toLowerCase().indexOf('splitter')\n        }\n      ]\n    }\n  },\n  computed: {\n    panels() {\n      let panels = []\n\n      if (this.allChildren) {\n        panels = this.allChildren.filter(\n          (child) => child.$vnode.tag.toLowerCase().indexOf('splitterpanel') !== -1\n        )\n      }\n      return panels\n    },\n    gutterStyle() {\n      if (this.horizontal) return { width: this.gutterSize + 'px' }\n      else return { height: this.gutterSize + 'px' }\n    },\n    horizontal() {\n      return this.layout === 'horizontal'\n    }\n  },\n  render() {\n    const gutterStyle = this.horizontal\n      ? { width: this.gutterSize + 'px' }\n      : { height: this.gutterSize + 'px' }\n\n    return (\n      <div class={['p-splitter p-component', 'p-splitter-' + this.layout]}>\n        {this.$slots.default}\n        {this.panels.map((panel, i) => {\n          let panelStyle = {\n            flexBasis:\n              'calc(' +\n              this.panelSizes[i] +\n              '% - ' +\n              (this.panels.length - 1) * this.gutterSize +\n              'px)'\n          }\n\n          return [\n            <div key={i} class={this.getPanelClass(panel)} style={panelStyle}>\n              {panel.$slots.default}\n            </div>,\n            i !== this.panels.length - 1 && (\n              <div\n                class='p-splitter-gutter'\n                style={gutterStyle}\n                on-mousedown={(e) => this.onGutterMouseDown(e, i)}\n                on-touchstart={(e) => this.onGutterTouchStart(e, i)}\n                on-touchmove={(e) => this.onGutterTouchMove(e, i)}\n                on-touchend={(e) => this.onGutterTouchEnd(e, i)}>\n                <div class='p-splitter-gutter-handle'></div>\n              </div>\n            )\n          ]\n        })}\n      </div>\n    )\n  }\n}\n</script>\n\n<style>\n.p-splitter {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.p-splitter-vertical {\n  flex-direction: column;\n}\n\n.p-splitter-panel {\n  flex-grow: 1;\n}\n\n.p-splitter-panel-nested {\n  display: flex;\n}\n\n.p-splitter-panel .p-splitter {\n  flex-grow: 1;\n  border: 0 none;\n}\n\n.p-splitter-gutter {\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: col-resize;\n}\n\n.p-splitter-horizontal.p-splitter-resizing {\n  cursor: col-resize;\n  user-select: none;\n}\n\n.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {\n  height: 24px;\n  width: 100%;\n}\n\n.p-splitter-horizontal > .p-splitter-gutter {\n  cursor: col-resize;\n}\n\n.p-splitter-vertical.p-splitter-resizing {\n  cursor: row-resize;\n  user-select: none;\n}\n\n.p-splitter-vertical > .p-splitter-gutter {\n  cursor: row-resize;\n}\n\n.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {\n  width: 24px;\n  height: 100%;\n}\n</style>\n"]
    },
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__ = undefined;
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = undefined;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

module.exports = __vue_component__;
