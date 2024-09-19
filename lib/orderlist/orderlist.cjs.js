'use strict';

var Button = require('primevue2/button');
var utils = require('primevue2/utils');
var Ripple = require('primevue2/ripple');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var script = {
  name: 'OrderList',
  props: {
    value: {
      type: Array,
      default: null
    },
    selection: {
      type: Array,
      default: null
    },
    dataKey: {
      type: String,
      default: null
    },
    listStyle: {
      type: null,
      default: null
    },
    metaKeySelection: {
      type: Boolean,
      default: true
    },
    stripedRows: {
      type: Boolean,
      default: false
    }
  },
  itemTouched: false,
  reorderDirection: null,
  data: function data() {
    return {
      d_selection: this.selection
    };
  },
  updated: function updated() {
    if (this.reorderDirection) {
      this.updateListScroll();
      this.reorderDirection = null;
    }
  },
  methods: {
    getItemKey: function getItemKey(item, index) {
      return this.dataKey ? utils.ObjectUtils.resolveFieldData(item, this.dataKey) : index;
    },
    isSelected: function isSelected(item) {
      return utils.ObjectUtils.findIndexInList(item, this.d_selection) != -1;
    },
    moveUp: function moveUp() {
      if (this.d_selection) {
        var value = _toConsumableArray(this.value);
        for (var i = 0; i < this.d_selection.length; i++) {
          var selectedItem = this.d_selection[i];
          var selectedItemIndex = utils.ObjectUtils.findIndexInList(selectedItem, value);
          if (selectedItemIndex !== 0) {
            var movedItem = value[selectedItemIndex];
            var temp = value[selectedItemIndex - 1];
            value[selectedItemIndex - 1] = movedItem;
            value[selectedItemIndex] = temp;
          } else {
            break;
          }
        }
        this.reorderDirection = 'up';
        this.$emit('input', value);
        this.$emit('reorder', {
          originalEvent: event,
          value: value,
          direction: this.reorderDirection
        });
      }
    },
    moveTop: function moveTop() {
      if (this.d_selection) {
        var value = _toConsumableArray(this.value);
        for (var i = this.d_selection.length - 1; i >= 0; i--) {
          var selectedItem = this.d_selection[i];
          var selectedItemIndex = utils.ObjectUtils.findIndexInList(selectedItem, value);
          if (selectedItemIndex !== 0) {
            var movedItem = value.splice(selectedItemIndex, 1)[0];
            value.unshift(movedItem);
          } else {
            break;
          }
        }
        this.reorderDirection = 'top';
        this.$emit('input', value);
        this.$emit('reorder', {
          originalEvent: event,
          value: value,
          direction: this.reorderDirection
        });
      }
    },
    moveDown: function moveDown() {
      if (this.d_selection) {
        var value = _toConsumableArray(this.value);
        for (var i = this.d_selection.length - 1; i >= 0; i--) {
          var selectedItem = this.d_selection[i];
          var selectedItemIndex = utils.ObjectUtils.findIndexInList(selectedItem, value);
          if (selectedItemIndex !== value.length - 1) {
            var movedItem = value[selectedItemIndex];
            var temp = value[selectedItemIndex + 1];
            value[selectedItemIndex + 1] = movedItem;
            value[selectedItemIndex] = temp;
          } else {
            break;
          }
        }
        this.reorderDirection = 'down';
        this.$emit('input', value);
        this.$emit('reorder', {
          originalEvent: event,
          value: value,
          direction: this.reorderDirection
        });
      }
    },
    moveBottom: function moveBottom() {
      if (this.d_selection) {
        var value = _toConsumableArray(this.value);
        for (var i = 0; i < this.d_selection.length; i++) {
          var selectedItem = this.d_selection[i];
          var selectedItemIndex = utils.ObjectUtils.findIndexInList(selectedItem, value);
          if (selectedItemIndex !== value.length - 1) {
            var movedItem = value.splice(selectedItemIndex, 1)[0];
            value.push(movedItem);
          } else {
            break;
          }
        }
        this.reorderDirection = 'bottom';
        this.$emit('input', value);
        this.$emit('reorder', {
          originalEvent: event,
          value: value,
          direction: this.reorderDirection
        });
      }
    },
    onItemClick: function onItemClick(event, item, index) {
      this.itemTouched = false;
      var selectedIndex = utils.ObjectUtils.findIndexInList(item, this.d_selection);
      var selected = selectedIndex != -1;
      var metaSelection = this.itemTouched ? false : this.metaKeySelection;
      if (metaSelection) {
        var metaKey = event.metaKey || event.ctrlKey;
        if (selected && metaKey) {
          this.d_selection = this.d_selection.filter(function (val, index) {
            return index !== selectedIndex;
          });
        } else {
          this.d_selection = metaKey ? this.d_selection ? _toConsumableArray(this.d_selection) : [] : [];
          utils.ObjectUtils.insertIntoOrderedArray(item, index, this.d_selection, this.value);
        }
      } else {
        if (selected) {
          this.d_selection = this.d_selection.filter(function (val, index) {
            return index !== selectedIndex;
          });
        } else {
          this.d_selection = this.d_selection ? _toConsumableArray(this.d_selection) : [];
          utils.ObjectUtils.insertIntoOrderedArray(item, index, this.d_selection, this.value);
        }
      }
      this.$emit('update:selection', this.d_selection);
      this.$emit('selection-change', {
        originalEvent: event,
        value: this.d_selection
      });
    },
    onItemTouchEnd: function onItemTouchEnd() {
      this.itemTouched = true;
    },
    onItemKeyDown: function onItemKeyDown(event, item, index) {
      var listItem = event.currentTarget;
      switch (event.which) {
        //down
        case 40:
          var nextItem = this.findNextItem(listItem);
          if (nextItem) {
            nextItem.focus();
          }
          event.preventDefault();
          break;

        //up
        case 38:
          var prevItem = this.findPrevItem(listItem);
          if (prevItem) {
            prevItem.focus();
          }
          event.preventDefault();
          break;

        //enter
        case 13:
          this.onItemClick(event, item, index);
          event.preventDefault();
          break;
      }
    },
    findNextItem: function findNextItem(item) {
      var nextItem = item.nextElementSibling;
      if (nextItem) return !utils.DomHandler.hasClass(nextItem, 'p-orderlist-item') ? this.findNextItem(nextItem) : nextItem;else return null;
    },
    findPrevItem: function findPrevItem(item) {
      var prevItem = item.previousElementSibling;
      if (prevItem) return !utils.DomHandler.hasClass(prevItem, 'p-orderlist-item') ? this.findPrevItem(prevItem) : prevItem;else return null;
    },
    updateListScroll: function updateListScroll() {
      var listItems = utils.DomHandler.find(this.$refs.list.$el, '.p-orderlist-item.p-highlight');
      if (listItems && listItems.length) {
        switch (this.reorderDirection) {
          case 'up':
            utils.DomHandler.scrollInView(this.$refs.list.$el, listItems[0]);
            break;
          case 'top':
            this.$refs.list.$el.scrollTop = 0;
            break;
          case 'down':
            utils.DomHandler.scrollInView(this.$refs.list.$el, listItems[listItems.length - 1]);
            break;
          case 'bottom':
            this.$refs.list.$el.scrollTop = this.$refs.list.$el.scrollHeight;
            break;
        }
      }
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-orderlist p-component', {
        'p-orderlist-striped': this.stripedRows
      }];
    }
  },
  components: {
    'OLButton': Button__default["default"]
  },
  directives: {
    'ripple': Ripple__default["default"]
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
  }, [_c("div", {
    staticClass: "p-orderlist-controls"
  }, [_vm._t("controlsstart"), _vm._v(" "), _c("OLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-up"
    },
    on: {
      click: _vm.moveUp
    }
  }), _vm._v(" "), _c("OLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-double-up"
    },
    on: {
      click: _vm.moveTop
    }
  }), _vm._v(" "), _c("OLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-down"
    },
    on: {
      click: _vm.moveDown
    }
  }), _vm._v(" "), _c("OLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-double-down"
    },
    on: {
      click: _vm.moveBottom
    }
  }), _vm._v(" "), _vm._t("controlsend")], 2), _vm._v(" "), _c("div", {
    staticClass: "p-orderlist-list-container"
  }, [_vm.$slots.header ? _c("div", {
    staticClass: "p-orderlist-header"
  }, [_vm._t("header")], 2) : _vm._e(), _vm._v(" "), _c("transition-group", {
    ref: "list",
    staticClass: "p-orderlist-list",
    style: _vm.listStyle,
    attrs: {
      name: "p-orderlist-flip",
      tag: "ul",
      role: "listbox",
      "aria-multiselectable": "multiple"
    }
  }, [_vm._l(_vm.value, function (item, i) {
    return [_c("li", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      key: _vm.getItemKey(item, i),
      class: ["p-orderlist-item", {
        "p-highlight": _vm.isSelected(item)
      }],
      attrs: {
        tabindex: "0",
        role: "option",
        "aria-selected": _vm.isSelected(item)
      },
      on: {
        click: function click($event) {
          return _vm.onItemClick($event, item, i);
        },
        keydown: function keydown($event) {
          return _vm.onItemKeyDown($event, item, i);
        },
        touchend: _vm.onItemTouchEnd
      }
    }, [_vm._t("item", null, {
      item: item,
      index: i
    })], 2)];
  })], 2)], 1)]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-db1a723e_0", {
    source: "\n.p-orderlist {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.p-orderlist-controls {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-orderlist-list-container {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.p-orderlist-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  min-height: 12rem;\n  max-height: 24rem;\n}\n.p-orderlist-item {\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n}\n.p-orderlist.p-state-disabled .p-orderlist-item,\n.p-orderlist.p-state-disabled .p-button {\n  cursor: default;\n}\n.p-orderlist.p-state-disabled .p-orderlist-list {\n  overflow: hidden;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/orderlist/OrderList.vue"],
      "names": [],
      "mappings": ";AA4UA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AAEA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;AAEA;EACA,qBAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,iBAAA;EACA,iBAAA;AACA;AAEA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;;EAEA,eAAA;AACA;AAEA;EACA,gBAAA;AACA",
      "file": "OrderList.vue",
      "sourcesContent": ["<template>\n  <div :class=\"containerClass\">\n    <div class=\"p-orderlist-controls\">\n      <slot name=\"controlsstart\"></slot>\n      <OLButton type=\"button\" icon=\"pi pi-angle-up\" @click=\"moveUp\"></OLButton>\n      <OLButton type=\"button\" icon=\"pi pi-angle-double-up\" @click=\"moveTop\"></OLButton>\n      <OLButton type=\"button\" icon=\"pi pi-angle-down\" @click=\"moveDown\"></OLButton>\n      <OLButton type=\"button\" icon=\"pi pi-angle-double-down\" @click=\"moveBottom\"></OLButton>\n      <slot name=\"controlsend\"></slot>\n    </div>\n    <div class=\"p-orderlist-list-container\">\n      <div class=\"p-orderlist-header\" v-if=\"$slots.header\">\n        <slot name=\"header\"></slot>\n      </div>\n      <transition-group\n        ref=\"list\"\n        name=\"p-orderlist-flip\"\n        tag=\"ul\"\n        class=\"p-orderlist-list\"\n        :style=\"listStyle\"\n        role=\"listbox\"\n        aria-multiselectable=\"multiple\">\n        <template v-for=\"(item, i) of value\">\n          <li\n            tabindex=\"0\"\n            :key=\"getItemKey(item, i)\"\n            :class=\"['p-orderlist-item', { 'p-highlight': isSelected(item) }]\"\n            v-ripple\n            @click=\"onItemClick($event, item, i)\"\n            @keydown=\"onItemKeyDown($event, item, i)\"\n            @touchend=\"onItemTouchEnd\"\n            role=\"option\"\n            :aria-selected=\"isSelected(item)\">\n            <slot name=\"item\" :item=\"item\" :index=\"i\"> </slot>\n          </li>\n        </template>\n      </transition-group>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Button from 'primevue2/button'\nimport { ObjectUtils, DomHandler } from 'primevue2/utils'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'OrderList',\n  props: {\n    value: {\n      type: Array,\n      default: null\n    },\n    selection: {\n      type: Array,\n      default: null\n    },\n    dataKey: {\n      type: String,\n      default: null\n    },\n    listStyle: {\n      type: null,\n      default: null\n    },\n    metaKeySelection: {\n      type: Boolean,\n      default: true\n    },\n    stripedRows: {\n      type: Boolean,\n      default: false\n    }\n  },\n  itemTouched: false,\n  reorderDirection: null,\n  data() {\n    return {\n      d_selection: this.selection\n    }\n  },\n  updated() {\n    if (this.reorderDirection) {\n      this.updateListScroll()\n      this.reorderDirection = null\n    }\n  },\n  methods: {\n    getItemKey(item, index) {\n      return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey) : index\n    },\n    isSelected(item) {\n      return ObjectUtils.findIndexInList(item, this.d_selection) != -1\n    },\n    moveUp() {\n      if (this.d_selection) {\n        let value = [...this.value]\n\n        for (let i = 0; i < this.d_selection.length; i++) {\n          let selectedItem = this.d_selection[i]\n          let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value)\n\n          if (selectedItemIndex !== 0) {\n            let movedItem = value[selectedItemIndex]\n            let temp = value[selectedItemIndex - 1]\n            value[selectedItemIndex - 1] = movedItem\n            value[selectedItemIndex] = temp\n          }\n          else {\n            break\n          }\n        }\n\n        this.reorderDirection = 'up'\n        this.$emit('input', value)\n        this.$emit('reorder', {\n          originalEvent: event,\n          value: value,\n          direction: this.reorderDirection\n        })\n      }\n    },\n    moveTop() {\n      if (this.d_selection) {\n        let value = [...this.value]\n\n        for (let i = this.d_selection.length - 1; i >= 0; i--) {\n          let selectedItem = this.d_selection[i]\n          let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value)\n\n          if (selectedItemIndex !== 0) {\n            let movedItem = value.splice(selectedItemIndex, 1)[0]\n            value.unshift(movedItem)\n          }\n          else {\n            break\n          }\n        }\n\n        this.reorderDirection = 'top'\n        this.$emit('input', value)\n        this.$emit('reorder', {\n          originalEvent: event,\n          value: value,\n          direction: this.reorderDirection\n        })\n      }\n    },\n    moveDown() {\n      if (this.d_selection) {\n        let value = [...this.value]\n\n        for (let i = this.d_selection.length - 1; i >= 0; i--) {\n          let selectedItem = this.d_selection[i]\n          let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value)\n\n          if (selectedItemIndex !== (value.length - 1)) {\n            let movedItem = value[selectedItemIndex]\n            let temp = value[selectedItemIndex + 1]\n            value[selectedItemIndex + 1] = movedItem\n            value[selectedItemIndex] = temp\n          }\n          else {\n            break\n          }\n        }\n\n        this.reorderDirection = 'down'\n        this.$emit('input', value)\n        this.$emit('reorder', {\n          originalEvent: event,\n          value: value,\n          direction: this.reorderDirection\n        })\n      }\n    },\n    moveBottom() {\n      if (this.d_selection) {\n        let value = [...this.value]\n\n        for (let i = 0; i < this.d_selection.length; i++) {\n          let selectedItem = this.d_selection[i]\n          let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value)\n\n          if (selectedItemIndex !== (value.length - 1)) {\n            let movedItem = value.splice(selectedItemIndex, 1)[0]\n            value.push(movedItem)\n          }\n          else {\n            break\n          }\n        }\n\n        this.reorderDirection = 'bottom'\n        this.$emit('input', value)\n        this.$emit('reorder', {\n          originalEvent: event,\n          value: value,\n          direction: this.reorderDirection\n        })\n      }\n    },\n    onItemClick(event, item, index) {\n      this.itemTouched = false\n      let selectedIndex = ObjectUtils.findIndexInList(item, this.d_selection)\n      let selected = (selectedIndex != -1)\n      let metaSelection = this.itemTouched ? false : this.metaKeySelection\n\n      if (metaSelection) {\n        let metaKey = (event.metaKey || event.ctrlKey)\n\n        if (selected && metaKey) {\n          this.d_selection = this.d_selection.filter((val, index) => index !== selectedIndex)\n        }\n        else {\n          this.d_selection = (metaKey) ? this.d_selection ? [...this.d_selection] : [] : []\n          ObjectUtils.insertIntoOrderedArray(item, index, this.d_selection, this.value)\n        }\n      }\n      else {\n        if (selected) {\n          this.d_selection = this.d_selection.filter((val, index) => index !== selectedIndex)\n        }\n        else {\n          this.d_selection = this.d_selection ? [...this.d_selection] : []\n          ObjectUtils.insertIntoOrderedArray(item, index, this.d_selection, this.value)\n        }\n      }\n\n      this.$emit('update:selection', this.d_selection)\n      this.$emit('selection-change', {\n        originalEvent: event,\n        value: this.d_selection\n      })\n    },\n    onItemTouchEnd() {\n      this.itemTouched = true\n    },\n    onItemKeyDown(event, item, index) {\n      let listItem = event.currentTarget\n\n      switch (event.which) {\n      //down\n      case 40:\n        var nextItem = this.findNextItem(listItem)\n        if (nextItem) {\n          nextItem.focus()\n        }\n\n        event.preventDefault()\n        break\n\n        //up\n      case 38:\n        var prevItem = this.findPrevItem(listItem)\n        if (prevItem) {\n          prevItem.focus()\n        }\n\n        event.preventDefault()\n        break\n\n        //enter\n      case 13:\n        this.onItemClick(event, item, index)\n        event.preventDefault()\n        break\n\n      default:\n        break\n      }\n    },\n    findNextItem(item) {\n      let nextItem = item.nextElementSibling\n\n      if (nextItem)\n        return !DomHandler.hasClass(nextItem, 'p-orderlist-item') ? this.findNextItem(nextItem) : nextItem\n      else\n        return null\n    },\n    findPrevItem(item) {\n      let prevItem = item.previousElementSibling\n\n      if (prevItem)\n        return !DomHandler.hasClass(prevItem, 'p-orderlist-item') ? this.findPrevItem(prevItem) : prevItem\n      else\n        return null\n    },\n    updateListScroll() {\n      const listItems = DomHandler.find(this.$refs.list.$el, '.p-orderlist-item.p-highlight')\n\n      if (listItems && listItems.length) {\n        switch (this.reorderDirection) {\n        case 'up':\n          DomHandler.scrollInView(this.$refs.list.$el, listItems[0])\n          break\n\n        case 'top':\n          this.$refs.list.$el.scrollTop = 0\n          break\n\n        case 'down':\n          DomHandler.scrollInView(this.$refs.list.$el, listItems[listItems.length - 1])\n          break\n\n        case 'bottom':\n          this.$refs.list.$el.scrollTop = this.$refs.list.$el.scrollHeight\n          break\n\n        default:\n          break\n        }\n      }\n    }\n  },\n  computed: {\n    containerClass() {\n      return ['p-orderlist p-component', {\n        'p-orderlist-striped': this.stripedRows\n      }]\n    }\n  },\n  components: {\n    'OLButton': Button\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-orderlist {\n  display: flex;\n}\n\n.p-orderlist-controls {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.p-orderlist-list-container {\n  flex: 1 1 auto;\n}\n\n.p-orderlist-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  min-height: 12rem;\n  max-height: 24rem;\n}\n\n.p-orderlist-item {\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-orderlist.p-state-disabled .p-orderlist-item,\n.p-orderlist.p-state-disabled .p-button {\n  cursor: default;\n}\n\n.p-orderlist.p-state-disabled .p-orderlist-list {\n  overflow: hidden;\n}\n</style>\n"]
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
