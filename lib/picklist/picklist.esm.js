import Button from 'primevue2/button';
import { ObjectUtils, DomHandler } from 'primevue2/utils';
import Ripple from 'primevue2/ripple';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var script = {
  name: 'PickList',
  props: {
    value: {
      type: Array,
      default: function _default() {
        return [[], []];
      }
    },
    selection: {
      type: Array,
      default: function _default() {
        return [[], []];
      }
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
      this.updateListScroll(this.$refs.sourceList.$el);
      this.updateListScroll(this.$refs.targetList.$el);
      this.reorderDirection = null;
    }
  },
  watch: {
    selection: function selection(newValue) {
      this.d_selection = newValue;
    }
  },
  methods: {
    getItemKey: function getItemKey(item, index) {
      return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey) : index;
    },
    isSelected: function isSelected(item, listIndex) {
      return ObjectUtils.findIndexInList(item, this.d_selection[listIndex]) != -1;
    },
    moveUp: function moveUp(event, listIndex) {
      if (this.d_selection && this.d_selection[listIndex]) {
        var valueList = _toConsumableArray(this.value[listIndex]);
        var selectionList = this.d_selection[listIndex];
        for (var i = 0; i < selectionList.length; i++) {
          var selectedItem = selectionList[i];
          var selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList);
          if (selectedItemIndex !== 0) {
            var movedItem = valueList[selectedItemIndex];
            var temp = valueList[selectedItemIndex - 1];
            valueList[selectedItemIndex - 1] = movedItem;
            valueList[selectedItemIndex] = temp;
          } else {
            break;
          }
        }
        var value = _toConsumableArray(this.value);
        value[listIndex] = valueList;
        this.reorderDirection = 'up';
        this.$emit('input', value);
        this.$emit('reorder', {
          originalEvent: event,
          value: value,
          direction: this.reorderDirection,
          listIndex: listIndex
        });
      }
    },
    moveTop: function moveTop(event, listIndex) {
      if (this.d_selection) {
        var valueList = _toConsumableArray(this.value[listIndex]);
        var selectionList = this.d_selection[listIndex];
        for (var i = 0; i < selectionList.length; i++) {
          var selectedItem = selectionList[i];
          var selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList);
          if (selectedItemIndex !== 0) {
            var movedItem = valueList.splice(selectedItemIndex, 1)[0];
            valueList.unshift(movedItem);
          } else {
            break;
          }
        }
        var value = _toConsumableArray(this.value);
        value[listIndex] = valueList;
        this.reorderDirection = 'top';
        this.$emit('input', value);
        this.$emit('reorder', {
          originalEvent: event,
          value: value,
          direction: this.reorderDirection
        });
      }
    },
    moveDown: function moveDown(event, listIndex) {
      if (this.d_selection) {
        var valueList = _toConsumableArray(this.value[listIndex]);
        var selectionList = this.d_selection[listIndex];
        for (var i = selectionList.length - 1; i >= 0; i--) {
          var selectedItem = selectionList[i];
          var selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList);
          if (selectedItemIndex !== valueList.length - 1) {
            var movedItem = valueList[selectedItemIndex];
            var temp = valueList[selectedItemIndex + 1];
            valueList[selectedItemIndex + 1] = movedItem;
            valueList[selectedItemIndex] = temp;
          } else {
            break;
          }
        }
        var value = _toConsumableArray(this.value);
        value[listIndex] = valueList;
        this.reorderDirection = 'down';
        this.$emit('input', value);
        this.$emit('reorder', {
          originalEvent: event,
          value: value,
          direction: this.reorderDirection
        });
      }
    },
    moveBottom: function moveBottom(event, listIndex) {
      if (this.d_selection) {
        var valueList = _toConsumableArray(this.value[listIndex]);
        var selectionList = this.d_selection[listIndex];
        for (var i = selectionList.length - 1; i >= 0; i--) {
          var selectedItem = selectionList[i];
          var selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList);
          if (selectedItemIndex !== valueList.length - 1) {
            var movedItem = valueList.splice(selectedItemIndex, 1)[0];
            valueList.push(movedItem);
          } else {
            break;
          }
        }
        var value = _toConsumableArray(this.value);
        value[listIndex] = valueList;
        this.reorderDirection = 'bottom';
        this.$emit('input', value);
        this.$emit('reorder', {
          originalEvent: event,
          value: value,
          direction: this.reorderDirection
        });
      }
    },
    moveToTarget: function moveToTarget(event) {
      var selection = this.d_selection && this.d_selection[0] ? this.d_selection[0] : null;
      var sourceList = _toConsumableArray(this.value[0]);
      var targetList = _toConsumableArray(this.value[1]);
      if (selection) {
        for (var i = 0; i < selection.length; i++) {
          var selectedItem = selection[i];
          if (ObjectUtils.findIndexInList(selectedItem, targetList) == -1) {
            targetList.push(sourceList.splice(ObjectUtils.findIndexInList(selectedItem, sourceList), 1)[0]);
          }
        }
        var value = _toConsumableArray(this.value);
        value[0] = sourceList;
        value[1] = targetList;
        this.$emit('input', value);
        this.$emit('move-to-target', {
          originalEvent: event,
          items: selection
        });
        this.d_selection[0] = [];
        this.$emit('update:selection', this.d_selection);
        this.$emit('selection-change', {
          originalEvent: event,
          value: this.d_selection
        });
      }
    },
    moveAllToTarget: function moveAllToTarget(event) {
      if (this.value[0]) {
        var sourceList = _toConsumableArray(this.value[0]);
        var targetList = _toConsumableArray(this.value[1]);
        this.$emit('move-all-to-target', {
          originalEvent: event,
          items: sourceList
        });
        targetList = [].concat(_toConsumableArray(targetList), _toConsumableArray(sourceList));
        sourceList = [];
        var value = _toConsumableArray(this.value);
        value[0] = sourceList;
        value[1] = targetList;
        this.$emit('input', value);
        this.d_selection[0] = [];
        this.$emit('update:selection', this.d_selection);
        this.$emit('selection-change', {
          originalEvent: event,
          value: this.d_selection
        });
      }
    },
    moveToSource: function moveToSource(event) {
      var selection = this.d_selection && this.d_selection[1] ? this.d_selection[1] : null;
      var sourceList = _toConsumableArray(this.value[0]);
      var targetList = _toConsumableArray(this.value[1]);
      if (selection) {
        for (var i = 0; i < selection.length; i++) {
          var selectedItem = selection[i];
          if (ObjectUtils.findIndexInList(selectedItem, sourceList) == -1) {
            sourceList.push(targetList.splice(ObjectUtils.findIndexInList(selectedItem, targetList), 1)[0]);
          }
        }
        var value = _toConsumableArray(this.value);
        value[0] = sourceList;
        value[1] = targetList;
        this.$emit('input', value);
        this.$emit('move-to-source', {
          originalEvent: event,
          items: selection
        });
        this.d_selection[1] = [];
        this.$emit('update:selection', this.d_selection);
        this.$emit('selection-change', {
          originalEvent: event,
          value: this.d_selection
        });
      }
    },
    moveAllToSource: function moveAllToSource(event) {
      if (this.value[1]) {
        var sourceList = _toConsumableArray(this.value[0]);
        var targetList = _toConsumableArray(this.value[1]);
        this.$emit('move-all-to-source', {
          originalEvent: event,
          items: targetList
        });
        sourceList = [].concat(_toConsumableArray(sourceList), _toConsumableArray(targetList));
        targetList = [];
        var value = _toConsumableArray(this.value);
        value[0] = sourceList;
        value[1] = targetList;
        this.$emit('input', value);
        this.d_selection[1] = [];
        this.$emit('update:selection', this.d_selection);
        this.$emit('selection-change', {
          originalEvent: event,
          value: this.d_selection
        });
      }
    },
    onItemClick: function onItemClick(event, item, index, listIndex) {
      this.itemTouched = false;
      var selectionList = this.d_selection[listIndex];
      var selectedIndex = ObjectUtils.findIndexInList(item, selectionList);
      var selected = selectedIndex != -1;
      var metaSelection = this.itemTouched ? false : this.metaKeySelection;
      var _selection;
      if (metaSelection) {
        var metaKey = event.metaKey || event.ctrlKey;
        if (selected && metaKey) {
          _selection = selectionList.filter(function (val, index) {
            return index !== selectedIndex;
          });
        } else {
          _selection = metaKey ? selectionList ? _toConsumableArray(selectionList) : [] : [];
          _selection.push(item);
        }
      } else {
        if (selected) {
          _selection = selectionList.filter(function (val, index) {
            return index !== selectedIndex;
          });
        } else {
          _selection = selectionList ? _toConsumableArray(selectionList) : [];
          _selection.push(item);
        }
      }
      var newSelection = _toConsumableArray(this.d_selection);
      newSelection[listIndex] = _selection;
      this.d_selection = newSelection;
      this.$emit('update:selection', this.d_selection);
      this.$emit('selection-change', {
        originalEvent: event,
        value: this.d_selection
      });
    },
    onItemTouchEnd: function onItemTouchEnd() {
      this.itemTouched = true;
    },
    onItemKeyDown: function onItemKeyDown(event, item, index, listIndex) {
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
          this.onItemClick(event, item, index, listIndex);
          event.preventDefault();
          break;
      }
    },
    findNextItem: function findNextItem(item) {
      var nextItem = item.nextElementSibling;
      if (nextItem) return !DomHandler.hasClass(nextItem, 'p-picklist-item') ? this.findNextItem(nextItem) : nextItem;else return null;
    },
    findPrevItem: function findPrevItem(item) {
      var prevItem = item.previousElementSibling;
      if (prevItem) return !DomHandler.hasClass(prevItem, 'p-picklist-item') ? this.findPrevItem(prevItem) : prevItem;else return null;
    },
    updateListScroll: function updateListScroll(listElement) {
      var listItems = DomHandler.find(listElement, '.p-picklist-item.p-highlight');
      if (listItems && listItems.length) {
        switch (this.reorderDirection) {
          case 'up':
            DomHandler.scrollInView(listElement, listItems[0]);
            break;
          case 'top':
            listElement.scrollTop = 0;
            break;
          case 'down':
            DomHandler.scrollInView(listElement, listItems[listItems.length - 1]);
            break;
          case 'bottom':
            listElement.scrollTop = listElement.scrollHeight;
            break;
        }
      }
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-picklist p-component', {
        'p-picklist-striped': this.stripedRows
      }];
    },
    sourceList: function sourceList() {
      return this.value && this.value[0] ? this.value[0] : null;
    },
    targetList: function targetList() {
      return this.value && this.value[1] ? this.value[1] : null;
    }
  },
  components: {
    'PLButton': Button
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
    class: _vm.containerClass
  }, [_c("div", {
    staticClass: "p-picklist-buttons p-picklist-source-controls"
  }, [_vm._t("sourcecontrolsstart"), _vm._v(" "), _c("PLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-up"
    },
    on: {
      click: function click($event) {
        return _vm.moveUp($event, 0);
      }
    }
  }), _vm._v(" "), _c("PLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-double-up"
    },
    on: {
      click: function click($event) {
        return _vm.moveTop($event, 0);
      }
    }
  }), _vm._v(" "), _c("PLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-down"
    },
    on: {
      click: function click($event) {
        return _vm.moveDown($event, 0);
      }
    }
  }), _vm._v(" "), _c("PLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-double-down"
    },
    on: {
      click: function click($event) {
        return _vm.moveBottom($event, 0);
      }
    }
  }), _vm._v(" "), _vm._t("sourcecontrolsend")], 2), _vm._v(" "), _c("div", {
    staticClass: "p-picklist-list-wrapper p-picklist-source-wrapper"
  }, [_vm.$slots.sourceheader ? _c("div", {
    staticClass: "p-picklist-header"
  }, [_vm._t("sourceheader")], 2) : _vm._e(), _vm._v(" "), _c("transition-group", {
    ref: "sourceList",
    staticClass: "p-picklist-list p-picklist-source",
    style: _vm.listStyle,
    attrs: {
      name: "p-picklist-flip",
      tag: "ul",
      role: "listbox",
      "aria-multiselectable": "multiple"
    }
  }, [_vm._l(_vm.sourceList, function (item, i) {
    return [_c("li", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      key: _vm.getItemKey(item, i),
      class: ["p-picklist-item", {
        "p-highlight": _vm.isSelected(item, 0)
      }],
      attrs: {
        tabindex: "0",
        role: "option",
        "aria-selected": _vm.isSelected(item, 0)
      },
      on: {
        click: function click($event) {
          return _vm.onItemClick($event, item, i, 0);
        },
        keydown: function keydown($event) {
          return _vm.onItemKeyDown($event, item, i, 0);
        },
        touchend: _vm.onItemTouchEnd
      }
    }, [_vm._t("item", null, {
      item: item,
      index: i
    })], 2)];
  })], 2)], 1), _vm._v(" "), _c("div", {
    staticClass: "p-picklist-buttons p-picklist-transfer-buttons"
  }, [_vm._t("movecontrolsstart"), _vm._v(" "), _c("PLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-right"
    },
    on: {
      click: _vm.moveToTarget
    }
  }), _vm._v(" "), _c("PLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-double-right"
    },
    on: {
      click: _vm.moveAllToTarget
    }
  }), _vm._v(" "), _c("PLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-left"
    },
    on: {
      click: _vm.moveToSource
    }
  }), _vm._v(" "), _c("PLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-double-left"
    },
    on: {
      click: _vm.moveAllToSource
    }
  }), _vm._v(" "), _vm._t("movecontrolsend")], 2), _vm._v(" "), _c("div", {
    staticClass: "p-picklist-list-wrapper p-picklist-target-wrapper"
  }, [_vm.$slots.targetheader ? _c("div", {
    staticClass: "p-picklist-header"
  }, [_vm._t("targetheader")], 2) : _vm._e(), _vm._v(" "), _c("transition-group", {
    ref: "targetList",
    staticClass: "p-picklist-list p-picklist-target",
    style: _vm.listStyle,
    attrs: {
      name: "p-picklist-flip",
      tag: "ul",
      role: "listbox",
      "aria-multiselectable": "multiple"
    }
  }, [_vm._l(_vm.targetList, function (item, i) {
    return [_c("li", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      key: _vm.getItemKey(item, i),
      class: ["p-picklist-item", {
        "p-highlight": _vm.isSelected(item, 1)
      }],
      attrs: {
        tabindex: "0",
        role: "option",
        "aria-selected": _vm.isSelected(item, 1)
      },
      on: {
        click: function click($event) {
          return _vm.onItemClick($event, item, i, 1);
        },
        keydown: function keydown($event) {
          return _vm.onItemKeyDown($event, item, i, 1);
        },
        touchend: _vm.onItemTouchEnd
      }
    }, [_vm._t("item", null, {
      item: item,
      index: i
    })], 2)];
  })], 2)], 1), _vm._v(" "), _c("div", {
    staticClass: "p-picklist-buttons p-picklist-target-controls"
  }, [_vm._t("targetcontrolsstart"), _vm._v(" "), _c("PLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-up"
    },
    on: {
      click: function click($event) {
        return _vm.moveUp($event, 1);
      }
    }
  }), _vm._v(" "), _c("PLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-double-up"
    },
    on: {
      click: function click($event) {
        return _vm.moveTop($event, 1);
      }
    }
  }), _vm._v(" "), _c("PLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-down"
    },
    on: {
      click: function click($event) {
        return _vm.moveDown($event, 1);
      }
    }
  }), _vm._v(" "), _c("PLButton", {
    attrs: {
      type: "button",
      icon: "pi pi-angle-double-down"
    },
    on: {
      click: function click($event) {
        return _vm.moveBottom($event, 1);
      }
    }
  }), _vm._v(" "), _vm._t("targetcontrolsend")], 2)]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-c6ff5e58_0", {
    source: "\n.p-picklist {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.p-picklist-buttons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-picklist-list-wrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 50%;\n      -ms-flex: 1 1 50%;\n          flex: 1 1 50%;\n}\n.p-picklist-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  min-height: 12rem;\n  max-height: 24rem;\n}\n.p-picklist-item {\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n}\n.p-picklist-item.p-picklist-flip-enter-active.p-picklist-flip-enter-to,\n.p-picklist-item.p-picklist-flip-leave-active.p-picklist-flip-leave-to {\n  -webkit-transition: none !important;\n  transition: none !important;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/picklist/PickList.vue"],
      "names": [],
      "mappings": ";AA+gBA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AAEA;EACA,mBAAA;EAAA,qBAAA;MAAA,iBAAA;UAAA,aAAA;AACA;AAEA;EACA,qBAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,iBAAA;EACA,iBAAA;AACA;AAEA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;;EAEA,mCAAA;EAAA,2BAAA;AACA",
      "file": "PickList.vue",
      "sourcesContent": ["<template>\n  <div :class=\"containerClass\">\n    <div class=\"p-picklist-buttons p-picklist-source-controls\">\n      <slot name=\"sourcecontrolsstart\"></slot>\n      <PLButton type=\"button\" icon=\"pi pi-angle-up\" @click=\"moveUp($event, 0)\"></PLButton>\n      <PLButton type=\"button\" icon=\"pi pi-angle-double-up\" @click=\"moveTop($event, 0)\"></PLButton>\n      <PLButton type=\"button\" icon=\"pi pi-angle-down\" @click=\"moveDown($event, 0)\"></PLButton>\n      <PLButton type=\"button\" icon=\"pi pi-angle-double-down\" @click=\"moveBottom($event, 0)\"></PLButton>\n      <slot name=\"sourcecontrolsend\"></slot>\n    </div>\n    <div class=\"p-picklist-list-wrapper p-picklist-source-wrapper\">\n      <div class=\"p-picklist-header\" v-if=\"$slots.sourceheader\">\n        <slot name=\"sourceheader\"></slot>\n      </div>\n      <transition-group\n        ref=\"sourceList\"\n        name=\"p-picklist-flip\"\n        tag=\"ul\"\n        class=\"p-picklist-list p-picklist-source\"\n        :style=\"listStyle\"\n        role=\"listbox\"\n        aria-multiselectable=\"multiple\">\n        <template v-for=\"(item, i) of sourceList\">\n          <li\n            tabindex=\"0\"\n            :key=\"getItemKey(item, i)\"\n            :class=\"['p-picklist-item', { 'p-highlight': isSelected(item, 0) }]\"\n            v-ripple\n            @click=\"onItemClick($event, item, i, 0)\"\n            @keydown=\"onItemKeyDown($event, item, i, 0)\"\n            @touchend=\"onItemTouchEnd\"\n            role=\"option\"\n            :aria-selected=\"isSelected(item, 0)\">\n            <slot name=\"item\" :item=\"item\" :index=\"i\"> </slot>\n          </li>\n        </template>\n      </transition-group>\n    </div>\n    <div class=\"p-picklist-buttons p-picklist-transfer-buttons\">\n      <slot name=\"movecontrolsstart\"></slot>\n      <PLButton type=\"button\" icon=\"pi pi-angle-right\" @click=\"moveToTarget\"></PLButton>\n      <PLButton type=\"button\" icon=\"pi pi-angle-double-right\" @click=\"moveAllToTarget\"></PLButton>\n      <PLButton type=\"button\" icon=\"pi pi-angle-left\" @click=\"moveToSource\"></PLButton>\n      <PLButton type=\"button\" icon=\"pi pi-angle-double-left\" @click=\"moveAllToSource\"></PLButton>\n      <slot name=\"movecontrolsend\"></slot>\n    </div>\n    <div class=\"p-picklist-list-wrapper p-picklist-target-wrapper\">\n      <div class=\"p-picklist-header\" v-if=\"$slots.targetheader\">\n        <slot name=\"targetheader\"></slot>\n      </div>\n      <transition-group\n        ref=\"targetList\"\n        name=\"p-picklist-flip\"\n        tag=\"ul\"\n        class=\"p-picklist-list p-picklist-target\"\n        :style=\"listStyle\"\n        role=\"listbox\"\n        aria-multiselectable=\"multiple\">\n        <template v-for=\"(item, i) of targetList\">\n          <li\n            tabindex=\"0\"\n            :key=\"getItemKey(item, i)\"\n            :class=\"['p-picklist-item', { 'p-highlight': isSelected(item, 1) }]\"\n            v-ripple\n            @click=\"onItemClick($event, item, i, 1)\"\n            @keydown=\"onItemKeyDown($event, item, i, 1)\"\n            @touchend=\"onItemTouchEnd\"\n            role=\"option\"\n            :aria-selected=\"isSelected(item, 1)\">\n            <slot name=\"item\" :item=\"item\" :index=\"i\"> </slot>\n          </li>\n        </template>\n      </transition-group>\n    </div>\n    <div class=\"p-picklist-buttons p-picklist-target-controls\">\n      <slot name=\"targetcontrolsstart\"></slot>\n      <PLButton type=\"button\" icon=\"pi pi-angle-up\" @click=\"moveUp($event, 1)\"></PLButton>\n      <PLButton type=\"button\" icon=\"pi pi-angle-double-up\" @click=\"moveTop($event, 1)\"></PLButton>\n      <PLButton type=\"button\" icon=\"pi pi-angle-down\" @click=\"moveDown($event, 1)\"></PLButton>\n      <PLButton type=\"button\" icon=\"pi pi-angle-double-down\" @click=\"moveBottom($event, 1)\"></PLButton>\n      <slot name=\"targetcontrolsend\"></slot>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Button from 'primevue2/button'\nimport { ObjectUtils, DomHandler } from 'primevue2/utils'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'PickList',\n  props: {\n    value: {\n      type: Array,\n      default: () => [[], []]\n    },\n    selection: {\n      type: Array,\n      default: () => [[], []]\n    },\n    dataKey: {\n      type: String,\n      default: null\n    },\n    listStyle: {\n      type: null,\n      default: null\n    },\n    metaKeySelection: {\n      type: Boolean,\n      default: true\n    },\n    stripedRows: {\n      type: Boolean,\n      default: false\n    }\n  },\n  itemTouched: false,\n  reorderDirection: null,\n  data() {\n    return {\n      d_selection: this.selection\n    }\n  },\n  updated() {\n    if (this.reorderDirection) {\n      this.updateListScroll(this.$refs.sourceList.$el)\n      this.updateListScroll(this.$refs.targetList.$el)\n      this.reorderDirection = null\n    }\n  },\n  watch: {\n    selection(newValue) {\n      this.d_selection = newValue\n    }\n  },\n  methods: {\n    getItemKey(item, index) {\n      return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey) : index\n    },\n    isSelected(item, listIndex) {\n      return ObjectUtils.findIndexInList(item, this.d_selection[listIndex]) != -1\n    },\n    moveUp(event, listIndex) {\n      if (this.d_selection && this.d_selection[listIndex]) {\n        let valueList = [...this.value[listIndex]]\n        let selectionList = this.d_selection[listIndex]\n\n        for (let i = 0; i < selectionList.length; i++) {\n          let selectedItem = selectionList[i]\n          let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList)\n\n          if (selectedItemIndex !== 0) {\n            let movedItem = valueList[selectedItemIndex]\n            let temp = valueList[selectedItemIndex - 1]\n            valueList[selectedItemIndex - 1] = movedItem\n            valueList[selectedItemIndex] = temp\n          }\n          else {\n            break\n          }\n        }\n\n        let value = [...this.value]\n        value[listIndex] = valueList\n\n        this.reorderDirection = 'up'\n        this.$emit('input', value)\n        this.$emit('reorder', {\n          originalEvent: event,\n          value: value,\n          direction: this.reorderDirection,\n          listIndex: listIndex\n        })\n      }\n    },\n    moveTop(event, listIndex) {\n      if (this.d_selection) {\n        let valueList = [...this.value[listIndex]]\n        let selectionList = this.d_selection[listIndex]\n\n        for (let i = 0; i < selectionList.length; i++) {\n          let selectedItem = selectionList[i]\n          let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList)\n\n          if (selectedItemIndex !== 0) {\n            let movedItem = valueList.splice(selectedItemIndex, 1)[0]\n            valueList.unshift(movedItem)\n          }\n          else {\n            break\n          }\n        }\n\n        let value = [...this.value]\n        value[listIndex] = valueList\n\n        this.reorderDirection = 'top'\n        this.$emit('input', value)\n        this.$emit('reorder', {\n          originalEvent: event,\n          value: value,\n          direction: this.reorderDirection\n        })\n      }\n    },\n    moveDown(event, listIndex) {\n      if (this.d_selection) {\n        let valueList = [...this.value[listIndex]]\n        let selectionList = this.d_selection[listIndex]\n\n        for (let i = selectionList.length - 1; i >= 0; i--) {\n          let selectedItem = selectionList[i]\n          let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList)\n\n          if (selectedItemIndex !== (valueList.length - 1)) {\n            let movedItem = valueList[selectedItemIndex]\n            let temp = valueList[selectedItemIndex + 1]\n            valueList[selectedItemIndex + 1] = movedItem\n            valueList[selectedItemIndex] = temp\n          }\n          else {\n            break\n          }\n        }\n\n        let value = [...this.value]\n        value[listIndex] = valueList\n\n        this.reorderDirection = 'down'\n        this.$emit('input', value)\n        this.$emit('reorder', {\n          originalEvent: event,\n          value: value,\n          direction: this.reorderDirection\n        })\n      }\n    },\n    moveBottom(event, listIndex) {\n      if (this.d_selection) {\n        let valueList = [...this.value[listIndex]]\n        let selectionList = this.d_selection[listIndex]\n\n        for (let i = selectionList.length - 1; i >= 0; i--) {\n          let selectedItem = selectionList[i]\n          let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList)\n\n          if (selectedItemIndex !== (valueList.length - 1)) {\n            let movedItem = valueList.splice(selectedItemIndex, 1)[0]\n            valueList.push(movedItem)\n          }\n          else {\n            break\n          }\n        }\n\n        let value = [...this.value]\n        value[listIndex] = valueList\n\n        this.reorderDirection = 'bottom'\n        this.$emit('input', value)\n        this.$emit('reorder', {\n          originalEvent: event,\n          value: value,\n          direction: this.reorderDirection\n        })\n      }\n    },\n    moveToTarget(event) {\n      let selection = this.d_selection && this.d_selection[0] ? this.d_selection[0] : null\n      let sourceList = [...this.value[0]]\n      let targetList = [...this.value[1]]\n\n      if (selection) {\n        for (let i = 0; i < selection.length; i++) {\n          let selectedItem = selection[i]\n\n          if (ObjectUtils.findIndexInList(selectedItem, targetList) == -1) {\n            targetList.push(sourceList.splice(ObjectUtils.findIndexInList(selectedItem, sourceList), 1)[0])\n          }\n        }\n\n        let value = [...this.value]\n        value[0] = sourceList\n        value[1] = targetList\n        this.$emit('input', value)\n\n        this.$emit('move-to-target', {\n          originalEvent: event,\n          items: selection\n        })\n\n        this.d_selection[0] = []\n        this.$emit('update:selection', this.d_selection)\n        this.$emit('selection-change', {\n          originalEvent: event,\n          value: this.d_selection\n        })\n      }\n    },\n    moveAllToTarget(event) {\n      if (this.value[0]) {\n        let sourceList = [...this.value[0]]\n        let targetList = [...this.value[1]]\n\n        this.$emit('move-all-to-target', {\n          originalEvent: event,\n          items: sourceList\n        })\n\n        targetList = [...targetList, ...sourceList]\n        sourceList = []\n\n        let value = [...this.value]\n        value[0] = sourceList\n        value[1] = targetList\n        this.$emit('input', value)\n\n        this.d_selection[0] = []\n        this.$emit('update:selection', this.d_selection)\n        this.$emit('selection-change', {\n          originalEvent: event,\n          value: this.d_selection\n        })\n      }\n    },\n    moveToSource(event) {\n      let selection = this.d_selection && this.d_selection[1] ? this.d_selection[1] : null\n      let sourceList = [...this.value[0]]\n      let targetList = [...this.value[1]]\n\n      if (selection) {\n        for (let i = 0; i < selection.length; i++) {\n          let selectedItem = selection[i]\n\n          if (ObjectUtils.findIndexInList(selectedItem, sourceList) == -1) {\n            sourceList.push(targetList.splice(ObjectUtils.findIndexInList(selectedItem, targetList), 1)[0])\n          }\n        }\n\n        let value = [...this.value]\n        value[0] = sourceList\n        value[1] = targetList\n        this.$emit('input', value)\n\n        this.$emit('move-to-source', {\n          originalEvent: event,\n          items: selection\n        })\n\n        this.d_selection[1] = []\n        this.$emit('update:selection', this.d_selection)\n        this.$emit('selection-change', {\n          originalEvent: event,\n          value: this.d_selection\n        })\n      }\n    },\n    moveAllToSource(event) {\n      if (this.value[1]) {\n        let sourceList = [...this.value[0]]\n        let targetList = [...this.value[1]]\n\n        this.$emit('move-all-to-source', {\n          originalEvent: event,\n          items: targetList\n        })\n\n        sourceList = [...sourceList, ...targetList]\n        targetList = []\n\n        let value = [...this.value]\n        value[0] = sourceList\n        value[1] = targetList\n        this.$emit('input', value)\n\n        this.d_selection[1] = []\n        this.$emit('update:selection', this.d_selection)\n        this.$emit('selection-change', {\n          originalEvent: event,\n          value: this.d_selection\n        })\n      }\n    },\n    onItemClick(event, item, index, listIndex) {\n      this.itemTouched = false\n      const selectionList = this.d_selection[listIndex]\n      const selectedIndex = ObjectUtils.findIndexInList(item, selectionList)\n      const selected = (selectedIndex != -1)\n      const metaSelection = this.itemTouched ? false : this.metaKeySelection\n      let _selection\n\n      if (metaSelection) {\n        let metaKey = (event.metaKey || event.ctrlKey)\n\n        if (selected && metaKey) {\n          _selection = selectionList.filter((val, index) => index !== selectedIndex)\n        }\n        else {\n          _selection = (metaKey) ? selectionList ? [...selectionList] : [] : []\n          _selection.push(item)\n        }\n      }\n      else {\n        if (selected) {\n          _selection = selectionList.filter((val, index) => index !== selectedIndex)\n        }\n        else {\n          _selection = selectionList ? [...selectionList] : []\n          _selection.push(item)\n        }\n      }\n\n      let newSelection = [...this.d_selection]\n      newSelection[listIndex] = _selection\n      this.d_selection = newSelection\n\n      this.$emit('update:selection', this.d_selection)\n      this.$emit('selection-change', {\n        originalEvent: event,\n        value: this.d_selection\n      })\n    },\n    onItemTouchEnd() {\n      this.itemTouched = true\n    },\n    onItemKeyDown(event, item, index, listIndex) {\n      let listItem = event.currentTarget\n\n      switch (event.which) {\n      //down\n      case 40:\n        var nextItem = this.findNextItem(listItem)\n        if (nextItem) {\n          nextItem.focus()\n        }\n\n        event.preventDefault()\n        break\n\n        //up\n      case 38:\n        var prevItem = this.findPrevItem(listItem)\n        if (prevItem) {\n          prevItem.focus()\n        }\n\n        event.preventDefault()\n        break\n\n        //enter\n      case 13:\n        this.onItemClick(event, item, index, listIndex)\n        event.preventDefault()\n        break\n\n      default:\n        break\n      }\n    },\n    findNextItem(item) {\n      let nextItem = item.nextElementSibling\n\n      if (nextItem)\n        return !DomHandler.hasClass(nextItem, 'p-picklist-item') ? this.findNextItem(nextItem) : nextItem\n      else\n        return null\n    },\n    findPrevItem(item) {\n      let prevItem = item.previousElementSibling\n\n      if (prevItem)\n        return !DomHandler.hasClass(prevItem, 'p-picklist-item') ? this.findPrevItem(prevItem) : prevItem\n      else\n        return null\n    },\n    updateListScroll(listElement) {\n      const listItems = DomHandler.find(listElement, '.p-picklist-item.p-highlight')\n\n      if (listItems && listItems.length) {\n        switch (this.reorderDirection) {\n        case 'up':\n          DomHandler.scrollInView(listElement, listItems[0])\n          break\n\n        case 'top':\n          listElement.scrollTop = 0\n          break\n\n        case 'down':\n          DomHandler.scrollInView(listElement, listItems[listItems.length - 1])\n          break\n\n        case 'bottom':\n          listElement.scrollTop = listElement.scrollHeight\n          break\n\n        default:\n          break\n        }\n      }\n    }\n  },\n  computed: {\n    containerClass() {\n      return ['p-picklist p-component', {\n        'p-picklist-striped': this.stripedRows\n      }]\n    },\n    sourceList() {\n      return this.value && this.value[0] ? this.value[0] : null\n    },\n    targetList() {\n      return this.value && this.value[1] ? this.value[1] : null\n    }\n  },\n  components: {\n    'PLButton': Button\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-picklist {\n  display: flex;\n}\n\n.p-picklist-buttons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.p-picklist-list-wrapper {\n  flex: 1 1 50%;\n}\n\n.p-picklist-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  min-height: 12rem;\n  max-height: 24rem;\n}\n\n.p-picklist-item {\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-picklist-item.p-picklist-flip-enter-active.p-picklist-flip-enter-to,\n.p-picklist-item.p-picklist-flip-leave-active.p-picklist-flip-leave-to {\n  transition: none !important;\n}\n</style>\n"]
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
