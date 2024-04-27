'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
//
//
//
//
//
//
//
//

var script = {
  name: 'Chips',
  props: {
    value: {
      type: Array,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    separator: {
      type: String,
      default: null
    },
    ariaLabelledBy: {
      type: String,
      default: null
    },
    addOnBlur: {
      type: Boolean,
      default: null
    },
    allowDuplicate: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      inputValue: null,
      focused: false
    };
  },
  methods: {
    onWrapperClick: function onWrapperClick() {
      this.$refs.input.focus();
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      if (this.addOnBlur) {
        this.addItem(event, event.target.value, false);
      }
      this.$emit('blur', event);
    },
    onKeyDown: function onKeyDown(event) {
      var inputValue = event.target.value;
      switch (event.which) {
        //backspace
        case 8:
          if (inputValue.length === 0 && this.value && this.value.length > 0) {
            this.removeItem(event, this.value.length - 1);
          }
          break;

        //enter
        case 13:
          if (inputValue && inputValue.trim().length && !this.maxedOut) {
            this.addItem(event, inputValue, true);
          }
          break;
        default:
          if (this.separator) {
            if (this.separator === ',' && event.which === 188) {
              this.addItem(event, inputValue, true);
            }
          }
          break;
      }
    },
    onPaste: function onPaste(event) {
      var _this = this;
      if (this.separator) {
        var pastedData = (event.clipboardData || window['clipboardData']).getData('Text');
        if (pastedData) {
          var value = this.value || [];
          var pastedValues = pastedData.split(this.separator);
          pastedValues = pastedValues.filter(function (val) {
            return _this.allowDuplicate || value.indexOf(val) === -1;
          });
          value = [].concat(_toConsumableArray(value), _toConsumableArray(pastedValues));
          this.updateModel(event, value, true);
        }
      }
    },
    updateModel: function updateModel(event, value, preventDefault) {
      this.$emit('input', value);
      this.$emit('add', {
        originalEvent: event,
        value: value
      });
      this.$refs.input.value = '';
      this.inputValue = '';
      if (preventDefault) {
        event.preventDefault();
      }
    },
    addItem: function addItem(event, item, preventDefault) {
      if (item && item.trim().length) {
        var value = this.value ? _toConsumableArray(this.value) : [];
        if (this.allowDuplicate || value.indexOf(item) === -1) {
          value.push(item);
          this.updateModel(event, value, preventDefault);
        }
      }
    },
    removeItem: function removeItem(event, index) {
      if (this.$attrs.disabled) {
        return;
      }
      var values = _toConsumableArray(this.value);
      var removedItem = values.splice(index, 1);
      this.$emit('input', values);
      this.$emit('remove', {
        originalEvent: event,
        value: removedItem
      });
    }
  },
  computed: {
    maxedOut: function maxedOut() {
      return this.max && this.value && this.max === this.value.length;
    },
    containerClass: function containerClass() {
      return ['p-chips p-component p-inputwrapper', {
        'p-inputwrapper-filled': this.value && this.value.length || this.inputValue && this.inputValue.length,
        'p-inputwrapper-focus': this.focused
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
  }, [_c("ul", {
    class: ["p-inputtext p-chips-multiple-container", {
      "p-disabled": _vm.$attrs.disabled,
      "p-focus": _vm.focused
    }],
    on: {
      click: function click($event) {
        return _vm.onWrapperClick();
      }
    }
  }, [_vm._l(_vm.value, function (val, i) {
    return _c("li", {
      key: i + "_" + val,
      staticClass: "p-chips-token"
    }, [_vm._t("chip", function () {
      return [_c("span", {
        staticClass: "p-chips-token-label"
      }, [_vm._v(_vm._s(val))])];
    }, {
      value: val
    }), _vm._v(" "), _c("span", {
      staticClass: "p-chips-token-icon pi pi-times-circle",
      on: {
        click: function click($event) {
          return _vm.removeItem($event, i);
        }
      }
    })], 2);
  }), _vm._v(" "), _c("li", {
    staticClass: "p-chips-input-token"
  }, [_c("input", {
    ref: "input",
    attrs: {
      type: "text",
      placeholder: _vm.placeholder,
      disabled: _vm.$attrs.disabled || _vm.maxedOut,
      "aria-labelledby": _vm.ariaLabelledBy
    },
    on: {
      focus: function focus($event) {
        return _vm.onFocus($event);
      },
      blur: function blur($event) {
        return _vm.onBlur($event);
      },
      input: function input($event) {
        _vm.inputValue = $event.target.value;
      },
      keydown: function keydown($event) {
        return _vm.onKeyDown($event);
      },
      paste: function paste($event) {
        return _vm.onPaste($event);
      }
    }
  })])], 2)]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-6ea9c6a5_0", {
    source: "\n.p-chips {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.p-chips-multiple-container {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  cursor: text;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-chips-token {\n  cursor: default;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n.p-chips-input-token {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.p-chips-token-icon {\n  cursor: pointer;\n}\n.p-chips-input-token input {\n  border: 0 none;\n  outline: 0 none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 0;\n  width: 100%;\n}\n.p-fluid .p-chips {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/chips/Chips.vue"],
      "names": [],
      "mappings": ";AA4KA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;EACA,YAAA;EACA,gBAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AAEA;EACA,eAAA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;AAEA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,cAAA;EACA,eAAA;EACA,6BAAA;EACA,SAAA;EACA,UAAA;EACA,wBAAA;UAAA,gBAAA;EACA,gBAAA;EACA,WAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA",
      "file": "Chips.vue",
      "sourcesContent": ["<template>\n  <div :class=\"containerClass\">\n    <ul\n      :class=\"['p-inputtext p-chips-multiple-container', { 'p-disabled': $attrs.disabled, 'p-focus': focused }]\"\n      @click=\"onWrapperClick()\">\n      <li v-for=\"(val, i) of value\" :key=\"`${i}_${val}`\" class=\"p-chips-token\">\n        <slot name=\"chip\" :value=\"val\">\n          <span class=\"p-chips-token-label\">{{ val }}</span>\n        </slot>\n        <span class=\"p-chips-token-icon pi pi-times-circle\" @click=\"removeItem($event, i)\"></span>\n      </li>\n      <li class=\"p-chips-input-token\">\n        <input\n          ref=\"input\"\n          type=\"text\"\n          @focus=\"onFocus($event)\"\n          @blur=\"onBlur($event)\"\n          :placeholder=\"placeholder\"\n          @input=\"inputValue = $event.target.value\"\n          @keydown=\"onKeyDown($event)\"\n          @paste=\"onPaste($event)\"\n          :disabled=\"$attrs.disabled || maxedOut\"\n          :aria-labelledby=\"ariaLabelledBy\" />\n      </li>\n    </ul>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Chips',\n  props: {\n    value: {\n      type: Array,\n      default: null\n    },\n    max: {\n      type: Number,\n      default: null\n    },\n    separator: {\n      type: String,\n      default: null\n    },\n    ariaLabelledBy: {\n      type: String,\n      default: null\n    },\n    addOnBlur: {\n      type: Boolean,\n      default: null\n    },\n    allowDuplicate: {\n      type: Boolean,\n      default: true\n    },\n    placeholder: {\n      type: String,\n      default: null\n    }\n  },\n  data() {\n    return {\n      inputValue: null,\n      focused: false\n    }\n  },\n  methods: {\n    onWrapperClick() {\n      this.$refs.input.focus()\n    },\n    onFocus(event) {\n      this.focused = true\n      this.$emit('focus', event)\n    },\n    onBlur(event) {\n      this.focused = false\n      if (this.addOnBlur) {\n        this.addItem(event, event.target.value, false)\n      }\n      this.$emit('blur', event)\n    },\n    onKeyDown(event) {\n      const inputValue = event.target.value\n\n      switch (event.which) {\n      //backspace\n      case 8:\n        if (inputValue.length === 0 && this.value && this.value.length > 0) {\n          this.removeItem(event, this.value.length - 1)\n        }\n        break\n\n        //enter\n      case 13:\n        if (inputValue && inputValue.trim().length && !this.maxedOut) {\n          this.addItem(event, inputValue, true)\n        }\n        break\n\n      default:\n        if (this.separator) {\n          if (this.separator === ',' && event.which === 188) {\n            this.addItem(event, inputValue, true)\n          }\n        }\n        break\n      }\n    },\n    onPaste(event) {\n      if (this.separator) {\n        let pastedData = (event.clipboardData || window['clipboardData']).getData('Text')\n        if (pastedData) {\n          let value = this.value || []\n          let pastedValues = pastedData.split(this.separator)\n          pastedValues = pastedValues.filter(val => (this.allowDuplicate || value.indexOf(val) === -1))\n          value = [...value, ...pastedValues]\n          this.updateModel(event, value, true)\n        }\n      }\n    },\n    updateModel(event, value, preventDefault) {\n      this.$emit('input', value)\n      this.$emit('add', {\n        originalEvent: event,\n        value: value\n      })\n      this.$refs.input.value = ''\n      this.inputValue = ''\n\n      if (preventDefault) {\n        event.preventDefault()\n      }\n    },\n    addItem(event, item, preventDefault) {\n      if (item && item.trim().length) {\n        let value = this.value ? [...this.value] : []\n        if (this.allowDuplicate || value.indexOf(item) === -1) {\n          value.push(item)\n          this.updateModel(event, value, preventDefault)\n        }\n      }\n    },\n    removeItem(event, index) {\n      if (this.$attrs.disabled) {\n        return\n      }\n\n      let values = [...this.value]\n      const removedItem = values.splice(index, 1)\n      this.$emit('input', values)\n      this.$emit('remove', {\n        originalEvent: event,\n        value: removedItem\n      })\n    }\n  },\n  computed: {\n    maxedOut() {\n      return this.max && this.value && this.max === this.value.length\n    },\n    containerClass() {\n      return ['p-chips p-component p-inputwrapper', {\n        'p-inputwrapper-filled': ((this.value && this.value.length) || (this.inputValue && this.inputValue.length)),\n        'p-inputwrapper-focus': this.focused\n      }]\n    }\n  }\n}\n</script>\n\n<style>\n.p-chips {\n  display: inline-flex;\n}\n\n.p-chips-multiple-container {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  cursor: text;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n\n.p-chips-token {\n  cursor: default;\n  display: inline-flex;\n  align-items: center;\n  flex: 0 0 auto;\n}\n\n.p-chips-input-token {\n  flex: 1 1 auto;\n  display: inline-flex;\n}\n\n.p-chips-token-icon {\n  cursor: pointer;\n}\n\n.p-chips-input-token input {\n  border: 0 none;\n  outline: 0 none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  border-radius: 0;\n  width: 100%;\n}\n\n.p-fluid .p-chips {\n  display: flex;\n}\n</style>\n"]
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
