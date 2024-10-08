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
  name: 'Rating',
  props: {
    value: {
      type: Number,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    stars: {
      type: Number,
      default: 5
    },
    cancel: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onStarClick: function onStarClick(event, value) {
      if (!this.readonly && !this.disabled) {
        this.updateModel(event, value);
      }
    },
    onCancelClick: function onCancelClick() {
      if (!this.readonly && !this.disabled) {
        this.updateModel(event, null);
      }
    },
    updateModel: function updateModel(event, value) {
      this.$emit('input', value);
      this.$emit('change', {
        originalEvent: event,
        value: value
      });
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-rating', {
        'p-readonly': this.readonly,
        'p-disabled': this.disabled
      }];
    },
    focusIndex: function focusIndex() {
      return this.disabled || this.readonly ? null : '0';
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
  }, [_vm.cancel ? _c("span", {
    staticClass: "p-rating-icon p-rating-cancel pi pi-ban",
    attrs: {
      tabindex: _vm.focusIndex
    },
    on: {
      click: _vm.onCancelClick
    }
  }) : _vm._e(), _vm._v(" "), _vm._l(_vm.stars, function (i) {
    return _c("span", {
      key: i,
      class: ["p-rating-icon", {
        "pi pi-star": i > _vm.value,
        "pi pi-star-fill": i <= _vm.value
      }],
      attrs: {
        tabindex: _vm.focusIndex
      },
      on: {
        click: function click($event) {
          return _vm.onStarClick($event, i);
        },
        keydown: function keydown($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
            return null;
          }
          $event.preventDefault();
          return _vm.onStarClick($event, i);
        }
      }
    });
  })], 2);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-7d4b639b_0", {
    source: "\n.p-rating-icon {\n  cursor: pointer;\n}\n.p-rating.p-rating-readonly .p-rating-icon {\n  cursor: default;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/rating/Rating.vue"],
      "names": [],
      "mappings": ";AA+EA;EACA,eAAA;AACA;AAEA;EACA,eAAA;AACA",
      "file": "Rating.vue",
      "sourcesContent": ["<template>\n  <div :class=\"containerClass\">\n    <span\n      class=\"p-rating-icon p-rating-cancel pi pi-ban\"\n      :tabindex=\"focusIndex\"\n      v-if=\"cancel\"\n      @click=\"onCancelClick\"></span>\n    <span\n      :key=\"i\"\n      v-for=\"i in stars\"\n      @click=\"onStarClick($event, i)\"\n      :tabindex=\"focusIndex\"\n      @keydown.enter.prevent=\"onStarClick($event, i)\"\n      :class=\"['p-rating-icon', { 'pi pi-star': i > value, 'pi pi-star-fill': i <= value }]\"></span>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Rating',\n  props: {\n    value: {\n      type: Number,\n      default: null\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    },\n    readonly: {\n      type: Boolean,\n      default: false\n    },\n    stars: {\n      type: Number,\n      default: 5\n    },\n    cancel: {\n      type: Boolean,\n      default: true\n    }\n  },\n  methods: {\n    onStarClick(event, value) {\n      if (!this.readonly && !this.disabled) {\n        this.updateModel(event, value)\n      }\n    },\n    onCancelClick() {\n      if (!this.readonly && !this.disabled) {\n        this.updateModel(event, null)\n      }\n    },\n    updateModel(event, value) {\n      this.$emit('input', value)\n      this.$emit('change', {\n        originalEvent: event,\n        value: value\n      })\n    }\n  },\n  computed: {\n    containerClass() {\n      return [\n        'p-rating',\n        {\n          'p-readonly': this.readonly,\n          'p-disabled': this.disabled\n        }\n      ]\n    },\n    focusIndex() {\n      return (this.disabled || this.readonly) ? null : '0'\n    }\n  }\n}\n</script>\n\n<style>\n.p-rating-icon {\n  cursor: pointer;\n}\n\n.p-rating.p-rating-readonly .p-rating-icon {\n  cursor: default;\n}\n</style>\n"]
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
