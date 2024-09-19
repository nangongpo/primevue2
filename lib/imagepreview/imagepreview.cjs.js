'use strict';

var utils = require('primevue2/utils');

//
var script = {
  name: 'ImagePreview',
  inheritAttrs: false,
  props: {
    preview: {
      type: Boolean,
      default: false
    },
    className: null,
    styles: null,
    imageStyle: null,
    imageClass: null
  },
  mask: null,
  data: function data() {
    return {
      maskVisible: false,
      previewVisible: false,
      rotate: 0,
      scale: 1
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.restoreAppend();
  },
  methods: {
    onImageClick: function onImageClick() {
      var _this = this;
      if (this.preview) {
        this.maskVisible = true;
        setTimeout(function () {
          _this.previewVisible = true;
        }, 25);
      }
    },
    onPreviewImageClick: function onPreviewImageClick() {
      this.previewClick = true;
    },
    onMaskClick: function onMaskClick() {
      if (!this.previewClick) {
        this.previewVisible = false;
        this.rotate = 0;
        this.scale = 1;
      }
      this.previewClick = false;
      this.restoreAppend();
    },
    rotateRight: function rotateRight() {
      this.rotate += 90;
      this.previewClick = true;
    },
    rotateLeft: function rotateLeft() {
      this.rotate -= 90;
      this.previewClick = true;
    },
    zoomIn: function zoomIn() {
      this.scale = this.scale + 0.1;
      this.previewClick = true;
    },
    zoomOut: function zoomOut() {
      this.scale = this.scale - 0.1;
      this.previewClick = true;
    },
    onBeforeEnter: function onBeforeEnter() {
      this.$refs.mask.style.zIndex = String(utils.DomHandler.generateZIndex());
    },
    onEnter: function onEnter() {
      this.appendContainer();
      this.$emit('show');
    },
    onBeforeLeave: function onBeforeLeave() {
      utils.DomHandler.addClass(this.$refs.mask, 'p-component-overlay-leave');
    },
    onLeave: function onLeave() {
      this.$emit('hide');
    },
    onAfterLeave: function onAfterLeave() {
      this.maskVisible = false;
    },
    appendContainer: function appendContainer() {
      document.body.appendChild(this.$refs.mask);
      utils.DomHandler.addClass(document.body, 'p-overflow-hidden');
    },
    restoreAppend: function restoreAppend() {
      if (this.$refs.mask) {
        document.body.removeChild(this.$refs.mask);
        utils.DomHandler.removeClass(document.body, 'p-overflow-hidden');
      }
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-image p-component', this.className, {
        'p-image-preview-container': this.preview
      }];
    },
    maskClass: function maskClass() {
      return ['p-image-mask p-component-overlay p-component-overlay-enter'];
    },
    rotateClass: function rotateClass() {
      return 'p-image-preview-rotate-' + this.rotate;
    },
    imagePreviewStyle: function imagePreviewStyle() {
      return {
        transform: 'rotate(' + this.rotate + 'deg) scale(' + this.scale + ')'
      };
    },
    zoomDisabled: function zoomDisabled() {
      return this.scale <= 0.5 || this.scale >= 1.5;
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
  return _c("span", {
    ref: "container",
    class: _vm.containerClass,
    style: _vm.styles
  }, [_c("img", _vm._b({
    class: _vm.imageClass,
    style: _vm.imageStyle
  }, "img", _vm.$attrs, false)), _vm._v(" "), _vm.preview ? _c("div", {
    staticClass: "p-image-preview-indicator",
    on: {
      click: _vm.onImageClick
    }
  }, [_vm._t("indicator", function () {
    return [_c("i", {
      staticClass: "p-image-preview-icon pi pi-eye"
    })];
  })], 2) : _vm._e(), _vm._v(" "), _vm.maskVisible ? _c("div", {
    ref: "mask",
    class: _vm.maskClass,
    on: {
      click: _vm.onMaskClick
    }
  }, [_c("div", {
    staticClass: "p-image-toolbar"
  }, [_c("button", {
    staticClass: "p-image-action p-link",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.rotateRight
    }
  }, [_c("i", {
    staticClass: "pi pi-refresh"
  })]), _vm._v(" "), _c("button", {
    staticClass: "p-image-action p-link",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.rotateLeft
    }
  }, [_c("i", {
    staticClass: "pi pi-undo"
  })]), _vm._v(" "), _c("button", {
    staticClass: "p-image-action p-link",
    attrs: {
      type: "button",
      disabled: _vm.zoomDisabled
    },
    on: {
      click: _vm.zoomOut
    }
  }, [_c("i", {
    staticClass: "pi pi-search-minus"
  })]), _vm._v(" "), _c("button", {
    staticClass: "p-image-action p-link",
    attrs: {
      type: "button",
      disabled: _vm.zoomDisabled
    },
    on: {
      click: _vm.zoomIn
    }
  }, [_c("i", {
    staticClass: "pi pi-search-plus"
  })]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c("transition", {
    attrs: {
      name: "p-image-preview"
    },
    on: {
      "before-enter": _vm.onBeforeEnter,
      enter: _vm.onEnter,
      leave: _vm.onLeave,
      "before-leave": _vm.onBeforeLeave,
      "after-leave": _vm.onAfterLeave
    }
  }, [_vm.previewVisible ? _c("div", [_c("img", {
    staticClass: "p-image-preview",
    style: _vm.imagePreviewStyle,
    attrs: {
      src: _vm.$attrs.src
    },
    on: {
      click: _vm.onPreviewImageClick
    }
  })]) : _vm._e()])], 1) : _vm._e()]);
};
var __vue_staticRenderFns__ = [function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", {
    staticClass: "p-image-action p-link",
    attrs: {
      type: "button"
    }
  }, [_c("i", {
    staticClass: "pi pi-times"
  })]);
}];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-254c2b2c_0", {
    source: "\n.p-image-mask {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-image-preview-container {\n  position: relative;\n  display: inline-block;\n}\n.p-image-preview-indicator {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  opacity: 0;\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n}\n.p-image-preview-icon {\n  font-size: 1.5rem;\n}\n.p-image-preview-container:hover > .p-image-preview-indicator {\n  opacity: 1;\n  cursor: pointer;\n}\n.p-image-preview-container > img {\n  cursor: pointer;\n}\n.p-image-toolbar {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.p-image-action.p-link {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-image-preview {\n  -webkit-transition: -webkit-transform 0.15s;\n  transition: -webkit-transform 0.15s;\n  transition: transform 0.15s;\n  transition: transform 0.15s, -webkit-transform 0.15s;\n  max-width: 100vw;\n  max-height: 100vh;\n}\n.p-image-preview-enter-active {\n  -webkit-transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n  transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n.p-image-preview-leave-active {\n  -webkit-transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.p-image-preview-enter,\n.p-image-preview-leave-to {\n  opacity: 0;\n  -webkit-transform: scale(0.7);\n          transform: scale(0.7);\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/imagepreview/ImagePreview.vue"],
      "names": [],
      "mappings": ";AA2JA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AACA;EACA,kBAAA;EACA,qBAAA;AACA;AACA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,UAAA;EACA,gCAAA;EAAA,wBAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,UAAA;EACA,eAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA;AACA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AACA;EACA,2CAAA;EAAA,mCAAA;EAAA,2BAAA;EAAA,oDAAA;EACA,gBAAA;EACA,iBAAA;AACA;AACA;EACA,wDAAA;EAAA,gDAAA;AACA;AACA;EACA,0DAAA;EAAA,kDAAA;AACA;AACA;;EAEA,UAAA;EACA,6BAAA;UAAA,qBAAA;AACA",
      "file": "ImagePreview.vue",
      "sourcesContent": ["<template>\n  <span ref=\"container\" :class=\"containerClass\" :style=\"styles\">\n    <img v-bind=\"$attrs\" :style=\"imageStyle\" :class=\"imageClass\" />\n    <div class=\"p-image-preview-indicator\" v-if=\"preview\" @click=\"onImageClick\">\n      <slot name=\"indicator\">\n        <i class=\"p-image-preview-icon pi pi-eye\"></i>\n      </slot>\n    </div>\n    <div ref=\"mask\" :class=\"maskClass\" v-if=\"maskVisible\" @click=\"onMaskClick\">\n      <div class=\"p-image-toolbar\">\n        <button class=\"p-image-action p-link\" @click=\"rotateRight\" type=\"button\">\n          <i class=\"pi pi-refresh\"></i>\n        </button>\n        <button class=\"p-image-action p-link\" @click=\"rotateLeft\" type=\"button\">\n          <i class=\"pi pi-undo\"></i>\n        </button>\n        <button class=\"p-image-action p-link\" @click=\"zoomOut\" type=\"button\" :disabled=\"zoomDisabled\">\n          <i class=\"pi pi-search-minus\"></i>\n        </button>\n        <button class=\"p-image-action p-link\" @click=\"zoomIn\" type=\"button\" :disabled=\"zoomDisabled\">\n          <i class=\"pi pi-search-plus\"></i>\n        </button>\n        <button class=\"p-image-action p-link\" type=\"button\">\n          <i class=\"pi pi-times\"></i>\n        </button>\n      </div>\n      <transition\n        name=\"p-image-preview\"\n        @before-enter=\"onBeforeEnter\"\n        @enter=\"onEnter\"\n        @leave=\"onLeave\"\n        @before-leave=\"onBeforeLeave\"\n        @after-leave=\"onAfterLeave\">\n        <div v-if=\"previewVisible\">\n          <img :src=\"$attrs.src\" class=\"p-image-preview\" :style=\"imagePreviewStyle\" @click=\"onPreviewImageClick\" />\n        </div>\n      </transition>\n    </div>\n  </span>\n</template>\n\n<script>\nimport { DomHandler } from 'primevue2/utils'\nexport default {\n  name: 'ImagePreview',\n  inheritAttrs: false,\n  props: {\n    preview: {\n      type: Boolean,\n      default: false\n    },\n    className: null,\n    styles: null,\n    imageStyle: null,\n    imageClass: null\n  },\n  mask: null,\n  data() {\n    return {\n      maskVisible: false,\n      previewVisible: false,\n      rotate: 0,\n      scale: 1\n    }\n  },\n  beforeDestroy() {\n    this.restoreAppend()\n  },\n  methods: {\n    onImageClick() {\n      if (this.preview) {\n        this.maskVisible = true\n        setTimeout(() => {\n          this.previewVisible = true\n        }, 25)\n      }\n    },\n    onPreviewImageClick() {\n      this.previewClick = true\n    },\n    onMaskClick() {\n      if (!this.previewClick) {\n        this.previewVisible = false\n        this.rotate = 0\n        this.scale = 1\n      }\n      this.previewClick = false\n      this.restoreAppend()\n    },\n    rotateRight() {\n      this.rotate += 90\n      this.previewClick = true\n    },\n    rotateLeft() {\n      this.rotate -= 90\n      this.previewClick = true\n    },\n    zoomIn() {\n      this.scale = this.scale + 0.1\n      this.previewClick = true\n    },\n    zoomOut() {\n      this.scale = this.scale - 0.1\n      this.previewClick = true\n    },\n    onBeforeEnter() {\n      this.$refs.mask.style.zIndex = String(DomHandler.generateZIndex())\n    },\n    onEnter() {\n      this.appendContainer()\n      this.$emit('show')\n    },\n    onBeforeLeave() {\n      DomHandler.addClass(this.$refs.mask, 'p-component-overlay-leave')\n    },\n    onLeave() {\n      this.$emit('hide')\n    },\n    onAfterLeave() {\n      this.maskVisible = false\n    },\n    appendContainer() {\n      document.body.appendChild(this.$refs.mask)\n      DomHandler.addClass(document.body, 'p-overflow-hidden')\n    },\n    restoreAppend() {\n      if (this.$refs.mask) {\n        document.body.removeChild(this.$refs.mask)\n        DomHandler.removeClass(document.body, 'p-overflow-hidden')\n      }\n    }\n  },\n  computed: {\n    containerClass() {\n      return ['p-image p-component', this.className, {\n        'p-image-preview-container': this.preview\n      }]\n    },\n    maskClass() {\n      return ['p-image-mask p-component-overlay p-component-overlay-enter']\n    },\n    rotateClass() {\n      return 'p-image-preview-rotate-' + this.rotate\n    },\n    imagePreviewStyle() {\n      return { transform: 'rotate(' + this.rotate + 'deg) scale(' + this.scale + ')' }\n    },\n    zoomDisabled() {\n      return this.scale <= 0.5 || this.scale >= 1.5\n    }\n  }\n}\n</script>\n\n<style>\n.p-image-mask {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.p-image-preview-container {\n  position: relative;\n  display: inline-block;\n}\n.p-image-preview-indicator {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.p-image-preview-icon {\n  font-size: 1.5rem;\n}\n.p-image-preview-container:hover > .p-image-preview-indicator {\n  opacity: 1;\n  cursor: pointer;\n}\n.p-image-preview-container > img {\n  cursor: pointer;\n}\n.p-image-toolbar {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n}\n.p-image-action.p-link {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.p-image-preview {\n  transition: transform 0.15s;\n  max-width: 100vw;\n  max-height: 100vh;\n}\n.p-image-preview-enter-active {\n  transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n.p-image-preview-leave-active {\n  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.p-image-preview-enter,\n.p-image-preview-leave-to {\n  opacity: 0;\n  transform: scale(0.7);\n}\n</style>\n"]
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
