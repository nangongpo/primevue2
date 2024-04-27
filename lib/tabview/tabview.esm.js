import { DomHandler, ObjectUtils } from 'primevue2/utils';
import Ripple from 'primevue2/ripple';

//
var TabPanelHeaderSlot = {
  functional: true,
  props: {
    tab: {
      type: null,
      default: null
    }
  },
  render: function render(createElement, context) {
    return [context.props.tab.$scopedSlots['header']()];
  }
};
var script = {
  name: 'TabView',
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    scrollable: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      allChildren: [],
      d_activeIndex: this.activeIndex,
      backwardIsDisabled: true,
      forwardIsDisabled: false
    };
  },
  watch: {
    activeIndex: function activeIndex(newValue) {
      this.d_activeIndex = newValue;
      this.updateScrollBar(newValue);
    }
  },
  mounted: function mounted() {
    this.allChildren = this.$children;
    this.updateInkBar();
  },
  updated: function updated() {
    this.updateInkBar();
  },
  methods: {
    onTabClick: function onTabClick(event, i) {
      if (!this.isTabDisabled(this.tabs[i]) && i !== this.d_activeIndex) {
        this.d_activeIndex = i;
        this.$emit('update:activeIndex', this.d_activeIndex);
        this.$emit('tab-change', {
          originalEvent: event,
          index: i
        });
        this.updateScrollBar(i);
      }
      this.$emit('tab-click', {
        originalEvent: event,
        index: i
      });
    },
    onTabKeydown: function onTabKeydown(event, i) {
      if (event.which === 13) {
        this.onTabClick(event, i);
      }
    },
    updateInkBar: function updateInkBar() {
      if (this.$refs.nav.children.length > 1) {
        var tabHeader = this.$refs.nav.children[this.d_activeIndex];
        this.$refs.inkbar.style.width = DomHandler.getWidth(tabHeader) + 'px';
        this.$refs.inkbar.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.$refs.nav).left + 'px';
      }
    },
    updateScrollBar: function updateScrollBar(index) {
      if (this.tabs.length) {
        var tabHeader = this.$refs.nav.children[index];
        tabHeader.scrollIntoView({
          block: 'nearest'
        });
      }
    },
    updateButtonState: function updateButtonState() {
      var content = this.$refs.content;
      var scrollLeft = content.scrollLeft,
        scrollWidth = content.scrollWidth;
      var width = DomHandler.getWidth(content);
      this.backwardIsDisabled = scrollLeft === 0;
      this.forwardIsDisabled = parseInt(scrollLeft) === scrollWidth - width;
    },
    getKey: function getKey(tab, index) {
      return tab.header ? ObjectUtils.resolveFieldData(tab, tab.header) : index;
    },
    isTabDisabled: function isTabDisabled(tab) {
      return tab.disabled;
    },
    onScroll: function onScroll(event) {
      this.scrollable && this.updateButtonState();
      event.preventDefault();
    },
    getVisibleButtonWidths: function getVisibleButtonWidths() {
      var _this$$refs = this.$refs,
        prevBtn = _this$$refs.prevBtn,
        nextBtn = _this$$refs.nextBtn;
      return [prevBtn, nextBtn].reduce(function (acc, el) {
        return el ? acc + DomHandler.getWidth(el) : acc;
      }, 0);
    },
    navBackward: function navBackward() {
      var content = this.$refs.content;
      var width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
      var pos = content.scrollLeft - width;
      content.scrollLeft = pos <= 0 ? 0 : pos;
    },
    navForward: function navForward() {
      var content = this.$refs.content;
      var width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
      var pos = content.scrollLeft + width;
      var lastPos = content.scrollWidth - width;
      content.scrollLeft = pos >= lastPos ? lastPos : pos;
    }
  },
  computed: {
    contentClasses: function contentClasses() {
      return ['p-tabview p-component', {
        'p-tabview-scrollable': this.scrollable
      }];
    },
    prevButtonClasses: function prevButtonClasses() {
      return ['p-tabview-nav-prev p-tabview-nav-btn p-link', {
        'p-disabled': this.backwardIsDisabled
      }];
    },
    nextButtonClasses: function nextButtonClasses() {
      return ['p-tabview-nav-next p-tabview-nav-btn p-link', {
        'p-disabled': this.forwardIsDisabled
      }];
    },
    tabs: function tabs() {
      var tabs = [];
      if (this.allChildren) {
        tabs = this.allChildren.filter(function (child) {
          return child.$vnode.tag.indexOf('tabpanel') !== -1;
        });
      }
      return tabs;
    }
  },
  components: {
    'TabPanelHeaderSlot': TabPanelHeaderSlot
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
    class: _vm.contentClasses
  }, [_c("div", {
    staticClass: "p-tabview-nav-container"
  }, [_vm.scrollable && !_vm.backwardIsDisabled ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    ref: "prevBtn",
    class: _vm.prevButtonClasses,
    attrs: {
      disabled: _vm.backwardIsDisabled,
      type: "button"
    },
    on: {
      click: _vm.navBackward
    }
  }, [_c("span", {
    staticClass: "pi pi-chevron-left"
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    ref: "content",
    staticClass: "p-tabview-nav-content",
    on: {
      scroll: _vm.onScroll
    }
  }, [_c("ul", {
    ref: "nav",
    staticClass: "p-tabview-nav",
    attrs: {
      role: "tablist"
    }
  }, [_vm._l(_vm.tabs, function (tab, i) {
    return _c("li", {
      key: _vm.getKey(tab, i),
      class: [{
        "p-highlight": _vm.d_activeIndex === i,
        "p-disabled": _vm.isTabDisabled(tab)
      }],
      attrs: {
        role: "presentation"
      }
    }, [_c("a", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      staticClass: "p-tabview-nav-link",
      attrs: {
        role: "tab",
        tabindex: _vm.isTabDisabled(tab) ? null : "0",
        "aria-selected": _vm.d_activeIndex
      },
      on: {
        click: function click($event) {
          return _vm.onTabClick($event, i);
        },
        keydown: function keydown($event) {
          return _vm.onTabKeydown($event, i);
        }
      }
    }, [tab.header ? _c("span", {
      staticClass: "p-tabview-title"
    }, [_vm._v(_vm._s(tab.header))]) : _vm._e(), _vm._v(" "), tab.$scopedSlots.header ? _c("TabPanelHeaderSlot", {
      attrs: {
        tab: tab
      }
    }) : _vm._e()], 1)]);
  }), _vm._v(" "), _c("li", {
    ref: "inkbar",
    staticClass: "p-tabview-ink-bar"
  })], 2)]), _vm._v(" "), _vm.scrollable && !_vm.forwardIsDisabled ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    ref: "nextBtn",
    class: _vm.nextButtonClasses,
    attrs: {
      disabled: _vm.forwardIsDisabled,
      type: "button"
    },
    on: {
      click: _vm.navForward
    }
  }, [_c("span", {
    staticClass: "pi pi-chevron-right"
  })]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "p-tabview-panels"
  }, [_vm._t("default")], 2)]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-24beed94_0", {
    source: "\n.p-tabview-nav-container {\n  position: relative;\n}\n.p-tabview-scrollable .p-tabview-nav-container {\n  overflow: hidden;\n}\n.p-tabview-nav-content {\n  overflow-x: auto;\n  overflow-y: hidden;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n  -ms-scroll-chaining: contain auto;\n      overscroll-behavior: contain auto;\n}\n.p-tabview-nav {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.p-tabview-nav-link {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  text-decoration: none;\n  overflow: hidden;\n}\n.p-tabview-ink-bar {\n  display: none;\n  z-index: 1;\n}\n.p-tabview-nav-link:focus {\n  z-index: 1;\n}\n.p-tabview-title {\n  line-height: 1;\n  white-space: nowrap;\n}\n.p-tabview-nav-btn {\n  position: absolute;\n  top: 0;\n  z-index: 2;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-tabview-nav-prev {\n  left: 0;\n}\n.p-tabview-nav-next {\n  right: 0;\n}\n.p-tabview-nav-content::-webkit-scrollbar {\n  display: none;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/tabview/TabView.vue"],
      "names": [],
      "mappings": ";AA6MA;EACA,kBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,kBAAA;EACA,uBAAA;EACA,qBAAA;EACA,iCAAA;MAAA,iCAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;AAEA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,gBAAA;AACA;AAEA;EACA,aAAA;EACA,UAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;EACA,cAAA;EACA,mBAAA;AACA;AAEA;EACA,kBAAA;EACA,MAAA;EACA,UAAA;EACA,YAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AAEA;EACA,OAAA;AACA;AAEA;EACA,QAAA;AACA;AAEA;EACA,aAAA;AACA",
      "file": "TabView.vue",
      "sourcesContent": ["<template>\n  <div :class=\"contentClasses\">\n    <div class=\"p-tabview-nav-container\">\n      <button\n        v-if=\"scrollable && !backwardIsDisabled\"\n        ref=\"prevBtn\"\n        :class=\"prevButtonClasses\"\n        :disabled=\"backwardIsDisabled\"\n        @click=\"navBackward\"\n        type=\"button\"\n        v-ripple>\n        <span class=\"pi pi-chevron-left\"></span>\n      </button>\n      <div ref=\"content\" class=\"p-tabview-nav-content\" @scroll=\"onScroll\">\n        <ul ref=\"nav\" class=\"p-tabview-nav\" role=\"tablist\">\n          <li\n            role=\"presentation\"\n            v-for=\"(tab, i) of tabs\"\n            :key=\"getKey(tab, i)\"\n            :class=\"[{ 'p-highlight': d_activeIndex === i, 'p-disabled': isTabDisabled(tab) }]\">\n            <a\n              role=\"tab\"\n              class=\"p-tabview-nav-link\"\n              @click=\"onTabClick($event, i)\"\n              @keydown=\"onTabKeydown($event, i)\"\n              :tabindex=\"isTabDisabled(tab) ? null : '0'\"\n              :aria-selected=\"d_activeIndex\"\n              v-ripple>\n              <span class=\"p-tabview-title\" v-if=\"tab.header\">{{ tab.header }}</span>\n              <TabPanelHeaderSlot :tab=\"tab\" v-if=\"tab.$scopedSlots.header\" />\n            </a>\n          </li>\n          <li ref=\"inkbar\" class=\"p-tabview-ink-bar\"></li>\n        </ul>\n      </div>\n      <button\n        v-if=\"scrollable && !forwardIsDisabled\"\n        ref=\"nextBtn\"\n        :class=\"nextButtonClasses\"\n        :disabled=\"forwardIsDisabled\"\n        @click=\"navForward\"\n        type=\"button\"\n        v-ripple>\n        <span class=\"pi pi-chevron-right\"></span>\n      </button>\n    </div>\n    <div class=\"p-tabview-panels\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { DomHandler, ObjectUtils } from 'primevue2/utils'\nimport Ripple from 'primevue2/ripple'\n\nconst TabPanelHeaderSlot = {\n  functional: true,\n  props: {\n    tab: {\n      type: null,\n      default: null\n    }\n  },\n  render(createElement, context) {\n    return [context.props.tab.$scopedSlots['header']()]\n  }\n}\n\nexport default {\n  name: 'TabView',\n  props: {\n    activeIndex: {\n      type: Number,\n      default: 0\n    },\n    scrollable: {\n      type: Boolean,\n      default: false\n    }\n  },\n  data() {\n    return {\n      allChildren: [],\n      d_activeIndex: this.activeIndex,\n      backwardIsDisabled: true,\n      forwardIsDisabled: false\n    }\n  },\n  watch: {\n    activeIndex(newValue) {\n      this.d_activeIndex = newValue\n\n      this.updateScrollBar(newValue)\n    }\n  },\n  mounted() {\n    this.allChildren = this.$children\n    this.updateInkBar()\n  },\n  updated() {\n    this.updateInkBar()\n  },\n  methods: {\n    onTabClick(event, i) {\n      if (!this.isTabDisabled(this.tabs[i]) && i !== this.d_activeIndex) {\n        this.d_activeIndex = i\n        this.$emit('update:activeIndex', this.d_activeIndex)\n\n        this.$emit('tab-change', {\n          originalEvent: event,\n          index: i\n        })\n\n        this.updateScrollBar(i)\n      }\n\n      this.$emit('tab-click', {\n        originalEvent: event,\n        index: i\n      })\n    },\n    onTabKeydown(event, i) {\n      if (event.which === 13) {\n        this.onTabClick(event, i)\n      }\n    },\n    updateInkBar() {\n      if (this.$refs.nav.children.length > 1) {\n        let tabHeader = this.$refs.nav.children[this.d_activeIndex]\n        this.$refs.inkbar.style.width = DomHandler.getWidth(tabHeader) + 'px'\n        this.$refs.inkbar.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.$refs.nav).left + 'px'\n      }\n    },\n    updateScrollBar(index) {\n      if (this.tabs.length) {\n        let tabHeader = this.$refs.nav.children[index]\n        tabHeader.scrollIntoView({ block: 'nearest' })\n      }\n    },\n    updateButtonState() {\n      const content = this.$refs.content\n      const { scrollLeft, scrollWidth } = content\n      const width = DomHandler.getWidth(content)\n      this.backwardIsDisabled = scrollLeft === 0\n      this.forwardIsDisabled = parseInt(scrollLeft) === scrollWidth - width\n    },\n    getKey(tab, index) {\n      return tab.header ? ObjectUtils.resolveFieldData(tab, tab.header) : index\n    },\n    isTabDisabled(tab) {\n      return tab.disabled\n    },\n    onScroll(event) {\n      this.scrollable && this.updateButtonState()\n      event.preventDefault()\n    },\n    getVisibleButtonWidths() {\n      const { prevBtn, nextBtn } = this.$refs\n      return [prevBtn, nextBtn].reduce((acc, el) => el ? acc + DomHandler.getWidth(el) : acc, 0)\n    },\n    navBackward() {\n      const content = this.$refs.content\n      const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths()\n      const pos = content.scrollLeft - width\n      content.scrollLeft = pos <= 0 ? 0 : pos\n    },\n    navForward() {\n      const content = this.$refs.content\n      const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths()\n      const pos = content.scrollLeft + width\n      const lastPos = content.scrollWidth - width\n      content.scrollLeft = pos >= lastPos ? lastPos : pos\n    }\n  },\n  computed: {\n    contentClasses() {\n      return ['p-tabview p-component', { 'p-tabview-scrollable': this.scrollable }]\n    },\n    prevButtonClasses() {\n      return ['p-tabview-nav-prev p-tabview-nav-btn p-link', { 'p-disabled': this.backwardIsDisabled }]\n    },\n    nextButtonClasses() {\n      return ['p-tabview-nav-next p-tabview-nav-btn p-link', { 'p-disabled': this.forwardIsDisabled }]\n    },\n    tabs() {\n      let tabs = []\n\n      if (this.allChildren) {\n        tabs = this.allChildren.filter(child => child.$vnode.tag.indexOf('tabpanel') !== -1)\n      }\n\n      return tabs\n    }\n  },\n  components: {\n    'TabPanelHeaderSlot': TabPanelHeaderSlot\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-tabview-nav-container {\n  position: relative;\n}\n\n.p-tabview-scrollable .p-tabview-nav-container {\n  overflow: hidden;\n}\n\n.p-tabview-nav-content {\n  overflow-x: auto;\n  overflow-y: hidden;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n  overscroll-behavior: contain auto;\n}\n\n.p-tabview-nav {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  flex: 1 1 auto;\n}\n\n.p-tabview-nav-link {\n  cursor: pointer;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  position: relative;\n  text-decoration: none;\n  overflow: hidden;\n}\n\n.p-tabview-ink-bar {\n  display: none;\n  z-index: 1;\n}\n\n.p-tabview-nav-link:focus {\n  z-index: 1;\n}\n\n.p-tabview-title {\n  line-height: 1;\n  white-space: nowrap;\n}\n\n.p-tabview-nav-btn {\n  position: absolute;\n  top: 0;\n  z-index: 2;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.p-tabview-nav-prev {\n  left: 0;\n}\n\n.p-tabview-nav-next {\n  right: 0;\n}\n\n.p-tabview-nav-content::-webkit-scrollbar {\n  display: none;\n}\n</style>\n"]
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
