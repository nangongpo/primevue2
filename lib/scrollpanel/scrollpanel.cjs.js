'use strict';

var utils = require('primevue2/utils');

//
var script = {
  name: 'ScrollPanel',
  initialized: false,
  documentResizeListener: null,
  documentMouseMoveListener: null,
  documentMouseUpListener: null,
  frame: null,
  scrollXRatio: null,
  scrollYRatio: null,
  isXBarClicked: false,
  isYBarClicked: false,
  lastPageX: null,
  lastPageY: null,
  mounted: function mounted() {
    if (this.$el.offsetParent) {
      this.initialize();
    }
  },
  updated: function updated() {
    if (!this.initialized && this.$el.offsetParent) {
      this.initialize();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindDocumentResizeListener();
    if (this.frame) {
      window.cancelAnimationFrame(this.frame);
    }
  },
  methods: {
    initialize: function initialize() {
      this.moveBar();
      this.bindDocumentResizeListener();
      this.calculateContainerHeight();
    },
    calculateContainerHeight: function calculateContainerHeight() {
      var containerStyles = getComputedStyle(this.$el),
        xBarStyles = getComputedStyle(this.$refs.xBar),
        pureContainerHeight = utils.DomHandler.getHeight(this.$el) - parseInt(xBarStyles['height'], 10);
      if (containerStyles['max-height'] !== 'none' && pureContainerHeight === 0) {
        if (this.$refs.content.offsetHeight + parseInt(xBarStyles['height'], 10) > parseInt(containerStyles['max-height'], 10)) {
          this.$el.style.height = containerStyles['max-height'];
        } else {
          this.$el.style.height = this.$refs.content.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + 'px';
        }
      }
    },
    moveBar: function moveBar() {
      var _this = this;
      /* horizontal scroll */
      var totalWidth = this.$refs.content.scrollWidth;
      var ownWidth = this.$refs.content.clientWidth;
      var bottom = (this.$el.clientHeight - this.$refs.xBar.clientHeight) * -1;
      this.scrollXRatio = ownWidth / totalWidth;

      /* vertical scroll */
      var totalHeight = this.$refs.content.scrollHeight;
      var ownHeight = this.$refs.content.clientHeight;
      var right = (this.$el.clientWidth - this.$refs.yBar.clientWidth) * -1;
      this.scrollYRatio = ownHeight / totalHeight;
      this.frame = this.requestAnimationFrame(function () {
        if (_this.scrollXRatio >= 1) {
          utils.DomHandler.addClass(_this.$refs.xBar, 'p-scrollpanel-hidden');
        } else {
          utils.DomHandler.removeClass(_this.$refs.xBar, 'p-scrollpanel-hidden');
          _this.$refs.xBar.style.cssText = 'width:' + Math.max(_this.scrollXRatio * 100, 10) + '%; left:' + _this.$refs.content.scrollLeft / totalWidth * 100 + '%;bottom:' + bottom + 'px;';
        }
        if (_this.scrollYRatio >= 1) {
          utils.DomHandler.addClass(_this.$refs.yBar, 'p-scrollpanel-hidden');
        } else {
          utils.DomHandler.removeClass(_this.$refs.yBar, 'p-scrollpanel-hidden');
          _this.$refs.yBar.style.cssText = 'height:' + Math.max(_this.scrollYRatio * 100, 10) + '%; top: calc(' + _this.$refs.content.scrollTop / totalHeight * 100 + '% - ' + _this.$refs.xBar.clientHeight + 'px);right:' + right + 'px;';
        }
      });
    },
    onYBarMouseDown: function onYBarMouseDown(e) {
      this.isYBarClicked = true;
      this.lastPageY = e.pageY;
      utils.DomHandler.addClass(this.$refs.yBar, 'p-scrollpanel-grabbed');
      utils.DomHandler.addClass(document.body, 'p-scrollpanel-grabbed');
      this.bindDocumentMouseListeners();
      e.preventDefault();
    },
    onXBarMouseDown: function onXBarMouseDown(e) {
      this.isXBarClicked = true;
      this.lastPageX = e.pageX;
      utils.DomHandler.addClass(this.$refs.xBar, 'p-scrollpanel-grabbed');
      utils.DomHandler.addClass(document.body, 'p-scrollpanel-grabbed');
      this.bindDocumentMouseListeners();
      e.preventDefault();
    },
    onDocumentMouseMove: function onDocumentMouseMove(e) {
      if (this.isXBarClicked) {
        this.onMouseMoveForXBar(e);
      } else if (this.isYBarClicked) {
        this.onMouseMoveForYBar(e);
      } else {
        this.onMouseMoveForXBar(e);
        this.onMouseMoveForYBar(e);
      }
    },
    onMouseMoveForXBar: function onMouseMoveForXBar(e) {
      var _this2 = this;
      var deltaX = e.pageX - this.lastPageX;
      this.lastPageX = e.pageX;
      this.frame = this.requestAnimationFrame(function () {
        _this2.$refs.content.scrollLeft += deltaX / _this2.scrollXRatio;
      });
    },
    onMouseMoveForYBar: function onMouseMoveForYBar(e) {
      var _this3 = this;
      var deltaY = e.pageY - this.lastPageY;
      this.lastPageY = e.pageY;
      this.frame = this.requestAnimationFrame(function () {
        _this3.$refs.content.scrollTop += deltaY / _this3.scrollYRatio;
      });
    },
    onDocumentMouseUp: function onDocumentMouseUp() {
      utils.DomHandler.removeClass(this.$refs.yBar, 'p-scrollpanel-grabbed');
      utils.DomHandler.removeClass(this.$refs.xBar, 'p-scrollpanel-grabbed');
      utils.DomHandler.removeClass(document.body, 'p-scrollpanel-grabbed');
      this.unbindDocumentMouseListeners();
      this.isXBarClicked = false;
      this.isYBarClicked = false;
    },
    requestAnimationFrame: function requestAnimationFrame(f) {
      var frame = window.requestAnimationFrame || this.timeoutFrame;
      frame(f);
    },
    refresh: function refresh() {
      this.moveBar();
    },
    scrollTop: function scrollTop(_scrollTop) {
      var scrollableHeight = this.$refs.content.scrollHeight - this.$refs.content.clientHeight;
      _scrollTop = _scrollTop > scrollableHeight ? scrollableHeight : _scrollTop > 0 ? _scrollTop : 0;
      this.$refs.contentscrollTop = _scrollTop;
    },
    bindDocumentMouseListeners: function bindDocumentMouseListeners() {
      var _this4 = this;
      if (!this.documentMouseMoveListener) {
        this.documentMouseMoveListener = function (e) {
          _this4.onDocumentMouseMove(e);
        };
        document.addEventListener('mousemove', this.documentMouseMoveListener);
      }
      if (!this.documentMouseUpListener) {
        this.documentMouseUpListener = function (e) {
          _this4.onDocumentMouseUp(e);
        };
        document.addEventListener('mouseup', this.documentMouseUpListener);
      }
    },
    unbindDocumentMouseListeners: function unbindDocumentMouseListeners() {
      if (this.documentMouseMoveListener) {
        document.removeEventListener('mousemove', this.documentMouseMoveListener);
        this.documentMouseMoveListener = null;
      }
      if (this.documentMouseUpListener) {
        document.removeEventListener('mouseup', this.documentMouseUpListener);
        this.documentMouseUpListener = null;
      }
    },
    bindDocumentResizeListener: function bindDocumentResizeListener() {
      var _this5 = this;
      if (!this.documentResizeListener) {
        this.documentResizeListener = function () {
          _this5.moveBar();
        };
        window.addEventListener('resize', this.documentResizeListener);
      }
    },
    unbindDocumentResizeListener: function unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        window.removeEventListener('resize', this.documentResizeListener);
        this.documentResizeListener = null;
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
    staticClass: "p-scrollpanel p-component"
  }, [_c("div", {
    staticClass: "p-scrollpanel-wrapper"
  }, [_c("div", {
    ref: "content",
    staticClass: "p-scrollpanel-content",
    on: {
      scroll: _vm.moveBar,
      mouseenter: _vm.moveBar
    }
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c("div", {
    ref: "xBar",
    staticClass: "p-scrollpanel-bar p-scrollpanel-bar-x",
    on: {
      mousedown: _vm.onXBarMouseDown
    }
  }), _vm._v(" "), _c("div", {
    ref: "yBar",
    staticClass: "p-scrollpanel-bar p-scrollpanel-bar-y",
    on: {
      mousedown: _vm.onYBarMouseDown
    }
  })]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-59835bf3_0", {
    source: "\n.p-scrollpanel-wrapper {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n  float: left;\n}\n.p-scrollpanel-content {\n  height: calc(100% + 18px);\n  width: calc(100% + 18px);\n  padding: 0 18px 18px 0;\n  position: relative;\n  overflow: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.p-scrollpanel-bar {\n  position: relative;\n  background: #c1c1c1;\n  border-radius: 3px;\n  z-index: 2;\n  cursor: pointer;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s linear;\n  transition: opacity 0.25s linear;\n}\n.p-scrollpanel-bar-y {\n  width: 9px;\n  top: 0;\n}\n.p-scrollpanel-bar-x {\n  height: 9px;\n  bottom: 0;\n}\n.p-scrollpanel-hidden {\n  visibility: hidden;\n}\n.p-scrollpanel:hover .p-scrollpanel-bar,\n.p-scrollpanel:active .p-scrollpanel-bar {\n  opacity: 1;\n}\n.p-scrollpanel-grabbed {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/scrollpanel/ScrollPanel.vue"],
      "names": [],
      "mappings": ";AAqNA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;AACA;AAEA;EACA,yBAAA;EACA,wBAAA;EACA,sBAAA;EACA,kBAAA;EACA,cAAA;EACA,8BAAA;UAAA,sBAAA;AACA;AAEA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;EACA,UAAA;EACA,wCAAA;EAAA,gCAAA;AACA;AAEA;EACA,UAAA;EACA,MAAA;AACA;AAEA;EACA,WAAA;EACA,SAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;;EAEA,UAAA;AACA;AAEA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AACA",
      "file": "ScrollPanel.vue",
      "sourcesContent": ["<template>\n  <div class=\"p-scrollpanel p-component\">\n    <div class=\"p-scrollpanel-wrapper\">\n      <div ref=\"content\" class=\"p-scrollpanel-content\" @scroll=\"moveBar\" @mouseenter=\"moveBar\">\n        <slot></slot>\n      </div>\n    </div>\n    <div ref=\"xBar\" class=\"p-scrollpanel-bar p-scrollpanel-bar-x\" @mousedown=\"onXBarMouseDown\"></div>\n    <div ref=\"yBar\" class=\"p-scrollpanel-bar p-scrollpanel-bar-y\" @mousedown=\"onYBarMouseDown\"></div>\n  </div>\n</template>\n\n<script>\nimport { DomHandler } from 'primevue2/utils'\n\nexport default {\n  name: 'ScrollPanel',\n  initialized: false,\n  documentResizeListener: null,\n  documentMouseMoveListener: null,\n  documentMouseUpListener: null,\n  frame: null,\n  scrollXRatio: null,\n  scrollYRatio: null,\n  isXBarClicked: false,\n  isYBarClicked: false,\n  lastPageX: null,\n  lastPageY: null,\n  mounted() {\n    if (this.$el.offsetParent) {\n      this.initialize()\n    }\n  },\n  updated() {\n    if (!this.initialized && this.$el.offsetParent) {\n      this.initialize()\n    }\n  },\n  beforeDestroy() {\n    this.unbindDocumentResizeListener()\n\n    if (this.frame) {\n      window.cancelAnimationFrame(this.frame)\n    }\n  },\n  methods: {\n    initialize() {\n      this.moveBar()\n      this.bindDocumentResizeListener()\n      this.calculateContainerHeight()\n    },\n    calculateContainerHeight() {\n      let containerStyles = getComputedStyle(this.$el),\n        xBarStyles = getComputedStyle(this.$refs.xBar),\n        pureContainerHeight = DomHandler.getHeight(this.$el) - parseInt(xBarStyles['height'], 10)\n\n      if (containerStyles['max-height'] !== 'none' && pureContainerHeight === 0) {\n        if (this.$refs.content.offsetHeight + parseInt(xBarStyles['height'], 10) > parseInt(containerStyles['max-height'], 10)) {\n          this.$el.style.height = containerStyles['max-height']\n        }\n        else {\n          this.$el.style.height = this.$refs.content.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + 'px'\n        }\n      }\n    },\n    moveBar() {\n      /* horizontal scroll */\n      let totalWidth = this.$refs.content.scrollWidth\n      let ownWidth = this.$refs.content.clientWidth\n      let bottom = (this.$el.clientHeight - this.$refs.xBar.clientHeight) * -1\n\n      this.scrollXRatio = ownWidth / totalWidth\n\n      /* vertical scroll */\n      let totalHeight = this.$refs.content.scrollHeight\n      let ownHeight = this.$refs.content.clientHeight\n      let right = (this.$el.clientWidth - this.$refs.yBar.clientWidth) * -1\n\n      this.scrollYRatio = ownHeight / totalHeight\n\n      this.frame = this.requestAnimationFrame(() => {\n        if (this.scrollXRatio >= 1) {\n          DomHandler.addClass(this.$refs.xBar, 'p-scrollpanel-hidden')\n        }\n        else {\n          DomHandler.removeClass(this.$refs.xBar, 'p-scrollpanel-hidden')\n          this.$refs.xBar.style.cssText = 'width:' + Math.max(this.scrollXRatio * 100, 10) + '%; left:' + (this.$refs.content.scrollLeft / totalWidth) * 100 + '%;bottom:' + bottom + 'px;'\n        }\n\n        if (this.scrollYRatio >= 1) {\n          DomHandler.addClass(this.$refs.yBar, 'p-scrollpanel-hidden')\n        }\n        else {\n          DomHandler.removeClass(this.$refs.yBar, 'p-scrollpanel-hidden')\n          this.$refs.yBar.style.cssText = 'height:' + Math.max(this.scrollYRatio * 100, 10) + '%; top: calc(' + (this.$refs.content.scrollTop / totalHeight) * 100 + '% - ' + this.$refs.xBar.clientHeight + 'px);right:' + right + 'px;'\n        }\n      })\n    },\n    onYBarMouseDown(e) {\n      this.isYBarClicked = true\n      this.lastPageY = e.pageY\n      DomHandler.addClass(this.$refs.yBar, 'p-scrollpanel-grabbed')\n      DomHandler.addClass(document.body, 'p-scrollpanel-grabbed')\n\n      this.bindDocumentMouseListeners()\n      e.preventDefault()\n    },\n    onXBarMouseDown(e) {\n      this.isXBarClicked = true\n      this.lastPageX = e.pageX\n      DomHandler.addClass(this.$refs.xBar, 'p-scrollpanel-grabbed')\n      DomHandler.addClass(document.body, 'p-scrollpanel-grabbed')\n\n      this.bindDocumentMouseListeners()\n      e.preventDefault()\n    },\n    onDocumentMouseMove(e) {\n      if (this.isXBarClicked) {\n        this.onMouseMoveForXBar(e)\n      }\n      else if (this.isYBarClicked) {\n        this.onMouseMoveForYBar(e)\n      }\n      else {\n        this.onMouseMoveForXBar(e)\n        this.onMouseMoveForYBar(e)\n      }\n    },\n    onMouseMoveForXBar(e) {\n      let deltaX = e.pageX - this.lastPageX\n      this.lastPageX = e.pageX\n\n      this.frame = this.requestAnimationFrame(() => {\n        this.$refs.content.scrollLeft += deltaX / this.scrollXRatio\n      })\n    },\n    onMouseMoveForYBar(e) {\n      let deltaY = e.pageY - this.lastPageY\n      this.lastPageY = e.pageY\n\n      this.frame = this.requestAnimationFrame(() => {\n        this.$refs.content.scrollTop += deltaY / this.scrollYRatio\n      })\n    },\n    onDocumentMouseUp() {\n      DomHandler.removeClass(this.$refs.yBar, 'p-scrollpanel-grabbed')\n      DomHandler.removeClass(this.$refs.xBar, 'p-scrollpanel-grabbed')\n      DomHandler.removeClass(document.body, 'p-scrollpanel-grabbed')\n\n      this.unbindDocumentMouseListeners()\n      this.isXBarClicked = false\n      this.isYBarClicked = false\n    },\n    requestAnimationFrame(f) {\n      let frame = window.requestAnimationFrame || this.timeoutFrame\n      frame(f)\n    },\n    refresh() {\n      this.moveBar()\n    },\n    scrollTop(scrollTop) {\n      let scrollableHeight = this.$refs.content.scrollHeight - this.$refs.content.clientHeight\n      scrollTop = scrollTop > scrollableHeight ? scrollableHeight : scrollTop > 0 ? scrollTop : 0\n      this.$refs.contentscrollTop = scrollTop\n    },\n    bindDocumentMouseListeners() {\n      if (!this.documentMouseMoveListener) {\n        this.documentMouseMoveListener = (e) => {\n          this.onDocumentMouseMove(e)\n        }\n\n        document.addEventListener('mousemove', this.documentMouseMoveListener)\n      }\n\n      if (!this.documentMouseUpListener) {\n        this.documentMouseUpListener = (e) => {\n          this.onDocumentMouseUp(e)\n        }\n\n        document.addEventListener('mouseup', this.documentMouseUpListener)\n      }\n    },\n    unbindDocumentMouseListeners() {\n      if (this.documentMouseMoveListener) {\n        document.removeEventListener('mousemove', this.documentMouseMoveListener)\n        this.documentMouseMoveListener = null\n      }\n\n      if (this.documentMouseUpListener) {\n        document.removeEventListener('mouseup', this.documentMouseUpListener)\n        this.documentMouseUpListener = null\n      }\n    },\n    bindDocumentResizeListener() {\n      if (!this.documentResizeListener) {\n        this.documentResizeListener = () => {\n          this.moveBar()\n        }\n\n        window.addEventListener('resize', this.documentResizeListener)\n      }\n    },\n    unbindDocumentResizeListener() {\n      if (this.documentResizeListener) {\n        window.removeEventListener('resize', this.documentResizeListener)\n        this.documentResizeListener = null\n      }\n    }\n  }\n}\n</script>\n\n<style>\n.p-scrollpanel-wrapper {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n  float: left;\n}\n\n.p-scrollpanel-content {\n  height: calc(100% + 18px);\n  width: calc(100% + 18px);\n  padding: 0 18px 18px 0;\n  position: relative;\n  overflow: auto;\n  box-sizing: border-box;\n}\n\n.p-scrollpanel-bar {\n  position: relative;\n  background: #c1c1c1;\n  border-radius: 3px;\n  z-index: 2;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 0.25s linear;\n}\n\n.p-scrollpanel-bar-y {\n  width: 9px;\n  top: 0;\n}\n\n.p-scrollpanel-bar-x {\n  height: 9px;\n  bottom: 0;\n}\n\n.p-scrollpanel-hidden {\n  visibility: hidden;\n}\n\n.p-scrollpanel:hover .p-scrollpanel-bar,\n.p-scrollpanel:active .p-scrollpanel-bar {\n  opacity: 1;\n}\n\n.p-scrollpanel-grabbed {\n  user-select: none;\n}\n</style>\n"]
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
