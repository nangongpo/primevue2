import { ObjectUtils, DomHandler } from 'primevue2/utils';
import { FilterService } from 'primevue2/api';
import Ripple from 'primevue2/ripple';
import Paginator from 'primevue2/paginator';

var script$4 = {
  functional: true,
  props: {
    column: {
      type: null,
      default: null
    },
    node: {
      type: null,
      default: null
    },
    type: {
      type: String,
      default: null
    }
  },
  render: function render(createElement, context) {
    var content = context.props.column.$scopedSlots[context.props.type]({
      'node': context.props.node,
      'column': context.props.column
    });
    return [content];
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

/* script */
var __vue_script__$5 = script$4;

/* template */

/* style */
var __vue_inject_styles__$5 = undefined;
/* scoped */
var __vue_scope_id__$5 = undefined;
/* module identifier */
var __vue_module_identifier__$5 = undefined;
/* functional template */
var __vue_is_functional_template__$5 = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

function _typeof$2(o) { "@babel/helpers - typeof"; return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$2(o); }
function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }
function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty$2(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$2(obj, key, value) { key = _toPropertyKey$2(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$2(t) { var i = _toPrimitive$2(t, "string"); return "symbol" == _typeof$2(i) ? i : i + ""; }
function _toPrimitive$2(t, r) { if ("object" != _typeof$2(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$2(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var script$3 = {
  name: 'sub-ttnode',
  props: {
    node: {
      type: null,
      default: null
    },
    parentNode: {
      type: null,
      default: null
    },
    columns: {
      type: null,
      default: null
    },
    expandedKeys: {
      type: null,
      default: null
    },
    selectionKeys: {
      type: null,
      default: null
    },
    selectionMode: {
      type: String,
      default: null
    },
    level: {
      type: Number,
      default: 0
    },
    indentation: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {
      checkboxFocused: false
    };
  },
  nodeTouched: false,
  methods: {
    columnProp: function columnProp(column, prop) {
      return ObjectUtils.getVNodeProp(column, prop);
    },
    resolveFieldData: function resolveFieldData(rowData, field) {
      return ObjectUtils.resolveFieldData(rowData, field);
    },
    toggle: function toggle() {
      this.$emit('node-toggle', this.node);
    },
    onClick: function onClick(event) {
      if (DomHandler.isClickable(event.target) || DomHandler.hasClass(event.target, 'p-treetable-toggler') || DomHandler.hasClass(event.target.parentElement, 'p-treetable-toggler')) {
        return;
      }
      this.$emit('node-click', {
        originalEvent: event,
        nodeTouched: this.nodeTouched,
        node: this.node
      });
      this.nodeTouched = false;
    },
    onTouchEnd: function onTouchEnd() {
      this.nodeTouched = true;
    },
    onKeyDown: function onKeyDown(event) {
      if (event.target === this.$el) {
        var rowElement = this.$el;
        switch (event.which) {
          //down arrow
          case 40:
            {
              var nextRow = rowElement.nextElementSibling;
              if (nextRow) {
                nextRow.focus();
              }
              event.preventDefault();
              break;
            }

          //up arrow
          case 38:
            {
              var previousRow = rowElement.previousElementSibling;
              if (previousRow) {
                previousRow.focus();
              }
              event.preventDefault();
              break;
            }

          //right-left arrows
          case 37:
          case 39:
            {
              if (!this.leaf) {
                this.$emit('node-toggle', this.node);
                event.preventDefault();
              }
              break;
            }

          //enter
          case 13:
            {
              this.onClick(event);
              event.preventDefault();
              break;
            }
        }
      }
    },
    toggleCheckbox: function toggleCheckbox() {
      var _selectionKeys = this.selectionKeys ? _objectSpread$2({}, this.selectionKeys) : {};
      var _check = !this.checked;
      this.propagateDown(this.node, _check, _selectionKeys);
      this.$emit('checkbox-change', {
        node: this.node,
        check: _check,
        selectionKeys: _selectionKeys
      });
    },
    propagateDown: function propagateDown(node, check, selectionKeys) {
      if (check) selectionKeys[node.key] = {
        checked: true,
        partialChecked: false
      };else delete selectionKeys[node.key];
      if (node.children && node.children.length) {
        var _iterator = _createForOfIteratorHelper$2(node.children),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var child = _step.value;
            this.propagateDown(child, check, selectionKeys);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    },
    propagateUp: function propagateUp(event) {
      var check = event.check;
      var _selectionKeys = _objectSpread$2({}, event.selectionKeys);
      var checkedChildCount = 0;
      var childPartialSelected = false;
      var _iterator2 = _createForOfIteratorHelper$2(this.node.children),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;
          if (_selectionKeys[child.key] && _selectionKeys[child.key].checked) checkedChildCount++;else if (_selectionKeys[child.key] && _selectionKeys[child.key].partialChecked) childPartialSelected = true;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (check && checkedChildCount === this.node.children.length) {
        _selectionKeys[this.node.key] = {
          checked: true,
          partialChecked: false
        };
      } else {
        if (!check) {
          delete _selectionKeys[this.node.key];
        }
        if (childPartialSelected || checkedChildCount > 0 && checkedChildCount !== this.node.children.length) _selectionKeys[this.node.key] = {
          checked: false,
          partialChecked: true
        };else _selectionKeys[this.node.key] = {
          checked: false,
          partialChecked: false
        };
      }
      this.$emit('checkbox-change', {
        node: event.node,
        check: event.check,
        selectionKeys: _selectionKeys
      });
    },
    onCheckboxFocus: function onCheckboxFocus() {
      this.checkboxFocused = true;
    },
    onCheckboxBlur: function onCheckboxBlur() {
      this.checkboxFocused = false;
    }
  },
  computed: {
    containerClass: function containerClass() {
      return [this.node.styleClass, {
        'p-highlight': this.selected
      }];
    },
    hasChildren: function hasChildren() {
      return this.node.children && this.node.children.length > 0;
    },
    expanded: function expanded() {
      return this.expandedKeys && this.expandedKeys[this.node.key] === true;
    },
    leaf: function leaf() {
      return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
    },
    selected: function selected() {
      return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.node.key] === true : false;
    },
    togglerIcon: function togglerIcon() {
      return ['p-treetable-toggler-icon pi', {
        'pi-chevron-right': !this.expanded,
        'pi-chevron-down': this.expanded
      }];
    },
    togglerStyle: function togglerStyle() {
      return {
        marginLeft: this.level * this.indentation + 'rem',
        visibility: this.leaf ? 'hidden' : 'visible'
      };
    },
    childLevel: function childLevel() {
      return this.level + 1;
    },
    checkboxSelectionMode: function checkboxSelectionMode() {
      return this.selectionMode === 'checkbox';
    },
    checkboxClass: function checkboxClass() {
      return ['p-checkbox-box', {
        'p-highlight': this.checked,
        'p-focus': this.checkboxFocused,
        'p-indeterminate': this.partialChecked
      }];
    },
    checkboxIcon: function checkboxIcon() {
      return ['p-checkbox-icon', {
        'pi pi-check': this.checked,
        'pi pi-minus': this.partialChecked
      }];
    },
    checked: function checked() {
      return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].checked : false;
    },
    partialChecked: function partialChecked() {
      return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].partialChecked : false;
    }
  },
  components: {
    'TTColumnSlot': __vue_component__$5
  },
  directives: {
    'ripple': Ripple
  }
};

/* script */
var __vue_script__$4 = script$3;

/* template */
var __vue_render__$3 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("tr", {
    class: _vm.containerClass,
    style: _vm.node.style,
    attrs: {
      tabindex: "0"
    },
    on: {
      click: _vm.onClick,
      keydown: _vm.onKeyDown,
      touchend: _vm.onTouchEnd
    }
  }, _vm._l(_vm.columns, function (col, i) {
    return _c("td", {
      key: _vm.columnProp(col, "columnKey") || _vm.columnProp(col, "field") || i,
      class: _vm.columnProp(col, "bodyClass"),
      style: _vm.columnProp(col, "bodyStyle")
    }, [_vm.columnProp(col, "expander") ? _c("button", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      staticClass: "p-treetable-toggler p-link",
      style: _vm.togglerStyle,
      attrs: {
        type: "button",
        tabindex: "-1"
      },
      on: {
        click: _vm.toggle
      }
    }, [_c("i", {
      class: _vm.togglerIcon
    })]) : _vm._e(), _vm._v(" "), _vm.checkboxSelectionMode && _vm.columnProp(col, "expander") ? _c("div", {
      class: ["p-checkbox p-treetable-checkbox p-component", {
        "p-checkbox-focused": _vm.checkboxFocused
      }],
      attrs: {
        role: "checkbox",
        "aria-checked": _vm.checked
      },
      on: {
        click: _vm.toggleCheckbox
      }
    }, [_c("div", {
      staticClass: "p-hidden-accessible"
    }, [_c("input", {
      attrs: {
        type: "checkbox"
      },
      on: {
        focus: _vm.onCheckboxFocus,
        blur: _vm.onCheckboxBlur
      }
    })]), _vm._v(" "), _c("div", {
      ref: "checkboxEl",
      refInFor: true,
      class: _vm.checkboxClass
    }, [_c("span", {
      class: _vm.checkboxIcon
    })])]) : _vm._e(), _vm._v(" "), col.$scopedSlots.body ? _c("TTColumnSlot", {
      attrs: {
        node: _vm.node,
        column: col,
        type: "body"
      }
    }) : [_c("span", [_vm._v(_vm._s(_vm.resolveFieldData(_vm.node.data, col.field)))])]], 2);
  }), 0);
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

/* style */
var __vue_inject_styles__$4 = undefined;
/* scoped */
var __vue_scope_id__$4 = undefined;
/* module identifier */
var __vue_module_identifier__$4 = undefined;
/* functional template */
var __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$1(obj, key, value) { key = _toPropertyKey$1(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : i + ""; }
function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var TreeTableRowLoader = {
  functional: true,
  props: {
    node: {
      type: null,
      default: null
    },
    columns: {
      type: null,
      default: null
    },
    expandedKeys: {
      type: null,
      default: null
    },
    selectionKeys: {
      type: null,
      default: null
    },
    selectionMode: {
      type: String,
      default: null
    },
    level: {
      type: Number,
      default: 0
    },
    indentation: {
      type: Number,
      default: 1
    }
  },
  render: function render(createElement, context) {
    var root = createElement(__vue_component__$4, {
      key: context.props.node.key,
      props: context.props,
      on: {
        'node-toggle': context.listeners['node-toggle'],
        'node-click': context.listeners['node-click'],
        'checkbox-change': context.listeners['checkbox-change']
      }
    });
    var element = [root];
    var node = context.props.node;
    var expanded = context.props.expandedKeys && context.props.expandedKeys[node.key] === true;
    if (expanded && node.children && node.children.length) {
      var _iterator = _createForOfIteratorHelper$1(node.children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var childNode = _step.value;
          var childNodeProps = _objectSpread$1({}, context.props);
          childNodeProps.node = childNode;
          childNodeProps.parentNode = node;
          childNodeProps.level = context.props.level + 1;
          childNodeProps.indentation = context.props.indentation;
          var childNodeElement = createElement(TreeTableRowLoader, {
            key: childNode.key,
            props: childNodeProps,
            on: {
              'node-toggle': context.listeners['node-toggle'],
              'node-click': context.listeners['node-click'],
              'checkbox-change': function checkboxChange(event) {
                var check = event.check;
                var _selectionKeys = _objectSpread$1({}, event.selectionKeys);
                var checkedChildCount = 0;
                var childPartialSelected = false;
                var _iterator2 = _createForOfIteratorHelper$1(node.children),
                  _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var child = _step2.value;
                    if (_selectionKeys[child.key] && _selectionKeys[child.key].checked) checkedChildCount++;else if (_selectionKeys[child.key] && _selectionKeys[child.key].partialChecked) childPartialSelected = true;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
                if (check && checkedChildCount === node.children.length) {
                  _selectionKeys[node.key] = {
                    checked: true,
                    partialChecked: false
                  };
                } else {
                  if (!check) {
                    delete _selectionKeys[node.key];
                  }
                  if (childPartialSelected || checkedChildCount > 0 && checkedChildCount !== node.children.length) _selectionKeys[node.key] = {
                    checked: false,
                    partialChecked: true
                  };else _selectionKeys[node.key] = {
                    checked: false,
                    partialChecked: false
                  };
                }
                context.listeners['checkbox-change']({
                  node: event.node,
                  check: event.check,
                  selectionKeys: _selectionKeys
                });
              }
            }
          });
          element.push(childNodeElement);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return element;
  }
};

/* script */
var __vue_script__$3 = TreeTableRowLoader;

/* template */

/* style */
var __vue_inject_styles__$3 = undefined;
/* scoped */
var __vue_scope_id__$3 = undefined;
/* module identifier */
var __vue_module_identifier__$3 = undefined;
/* functional template */
var __vue_is_functional_template__$3 = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

//
var script$2 = {
  props: {
    column: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      styleObject: {
        left: '',
        right: ''
      }
    };
  },
  mounted: function mounted() {
    if (this.columnProp('frozen')) {
      this.updateStickyPosition();
    }
  },
  updated: function updated() {
    if (this.columnProp('frozen')) {
      this.updateStickyPosition();
    }
  },
  methods: {
    columnProp: function columnProp(prop) {
      return ObjectUtils.getVNodeProp(this.column, prop);
    },
    updateStickyPosition: function updateStickyPosition() {
      if (this.columnProp('frozen')) {
        var align = this.columnProp('alignFrozen');
        if (align === 'right') {
          var right = 0;
          var next = this.$el.nextElementSibling;
          if (next) {
            right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right);
          }
          this.styleObject.right = right + 'px';
        } else {
          var left = 0;
          var prev = this.$el.previousElementSibling;
          if (prev) {
            left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left);
          }
          this.styleObject.left = left + 'px';
        }
      }
    }
  },
  computed: {
    containerClass: function containerClass() {
      return [this.columnProp('footerClass'), this.columnProp('className'), {
        'p-frozen-column': this.columnProp('frozen')
      }];
    },
    containerStyle: function containerStyle() {
      var bodyStyle = this.columnProp('footerStyle');
      var columnStyle = this.columnProp('styles');
      return this.columnProp('frozen') ? [columnStyle, bodyStyle, this.styleObject] : [columnStyle, bodyStyle];
    }
  },
  components: {
    'TTColumnSlot': __vue_component__$5
  }
};

/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("td", {
    class: _vm.containerClass,
    style: _vm.containerStyle
  }, [_vm.column.children && _vm.column.children.footer ? _c("TTColumnSlot", {
    attrs: {
      column: _vm.col
    }
  }) : _vm._e(), _vm._v("\n  " + _vm._s(_vm.columnProp("footer")) + "\n")], 1);
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

/* style */
var __vue_inject_styles__$2 = undefined;
/* scoped */
var __vue_scope_id__$2 = undefined;
/* module identifier */
var __vue_module_identifier__$2 = undefined;
/* functional template */
var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

//
var script$1 = {
  props: {
    column: {
      type: Object,
      default: null
    },
    resizableColumns: {
      type: Boolean,
      default: false
    },
    sortField: {
      type: [String, Function],
      default: null
    },
    sortOrder: {
      type: Number,
      default: null
    },
    multiSortMeta: {
      type: Array,
      default: null
    },
    sortMode: {
      type: String,
      default: 'single'
    }
  },
  data: function data() {
    return {
      styleObject: {
        left: '',
        right: ''
      }
    };
  },
  mounted: function mounted() {
    if (this.columnProp('frozen')) {
      this.updateStickyPosition();
    }
  },
  updated: function updated() {
    if (this.columnProp('frozen')) {
      this.updateStickyPosition();
    }
  },
  methods: {
    columnProp: function columnProp(prop) {
      return ObjectUtils.getVNodeProp(this.column, prop);
    },
    updateStickyPosition: function updateStickyPosition() {
      if (this.columnProp('frozen')) {
        var align = this.columnProp('alignFrozen');
        if (align === 'right') {
          var right = 0;
          var next = this.$el.nextElementSibling;
          if (next) {
            right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right);
          }
          this.styleObject.right = right + 'px';
        } else {
          var left = 0;
          var prev = this.$el.previousElementSibling;
          if (prev) {
            left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left);
          }
          this.styleObject.left = left + 'px';
        }
        var filterRow = this.$el.parentElement.nextElementSibling;
        if (filterRow) {
          var index = DomHandler.index(this.$el);
          filterRow.children[index].style.left = this.styleObject.left;
          filterRow.children[index].style.right = this.styleObject.right;
        }
      }
    },
    onClick: function onClick(event) {
      this.$emit('column-click', {
        originalEvent: event,
        column: this.column
      });
    },
    onKeyDown: function onKeyDown(event) {
      if (event.which === 13 && event.currentTarget.nodeName === 'TH' && DomHandler.hasClass(event.currentTarget, 'p-sortable-column')) {
        this.$emit('column-click', {
          originalEvent: event,
          column: this.column
        });
      }
    },
    onResizeStart: function onResizeStart(event) {
      this.$emit('column-resizestart', event);
    },
    getMultiSortMetaIndex: function getMultiSortMetaIndex() {
      var index = -1;
      for (var i = 0; i < this.multiSortMeta.length; i++) {
        var meta = this.multiSortMeta[i];
        if (meta.field === this.columnProp('field') || meta.field === this.columnProp('sortField')) {
          index = i;
          break;
        }
      }
      return index;
    },
    isMultiSorted: function isMultiSorted() {
      return this.columnProp('sortable') && this.getMultiSortMetaIndex() > -1;
    },
    isColumnSorted: function isColumnSorted() {
      return this.sortMode === 'single' ? this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField')) : this.isMultiSorted();
    }
  },
  computed: {
    containerClass: function containerClass() {
      return [this.columnProp('headerClass'), this.columnProp('className'), {
        'p-sortable-column': this.columnProp('sortable'),
        'p-resizable-column': this.resizableColumns,
        'p-highlight': this.isColumnSorted(),
        'p-frozen-column': this.columnProp('frozen')
      }];
    },
    containerStyle: function containerStyle() {
      var headerStyle = this.columnProp('headerStyle');
      var columnStyle = this.columnProp('styles');
      return this.columnProp('frozen') ? [columnStyle, headerStyle, this.styleObject] : [columnStyle, headerStyle];
    },
    sortableColumnIcon: function sortableColumnIcon() {
      var sorted = false;
      var sortOrder = null;
      if (this.sortMode === 'single') {
        sorted = this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField'));
        sortOrder = sorted ? this.sortOrder : 0;
      } else if (this.sortMode === 'multiple') {
        var metaIndex = this.getMultiSortMetaIndex();
        if (metaIndex > -1) {
          sorted = true;
          sortOrder = this.multiSortMeta[metaIndex].order;
        }
      }
      return ['p-sortable-column-icon pi pi-fw', {
        'pi-sort-alt': !sorted,
        'pi-sort-amount-up-alt': sorted && sortOrder > 0,
        'pi-sort-amount-down': sorted && sortOrder < 0
      }];
    },
    ariaSort: function ariaSort() {
      if (this.columnProp('sortable')) {
        var sortIcon = this.sortableColumnIcon;
        if (sortIcon[1]['pi-sort-amount-down']) return 'descending';else if (sortIcon[1]['pi-sort-amount-up-alt']) return 'ascending';else return 'none';
      } else {
        return null;
      }
    }
  },
  components: {
    'TTColumnSlot': __vue_component__$5
  }
};

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("th", {
    class: _vm.containerClass,
    style: _vm.containerStyle,
    attrs: {
      tabindex: _vm.columnProp("sortable") ? "0" : null,
      "aria-sort": _vm.ariaSort
    },
    on: {
      click: _vm.onClick,
      keydown: _vm.onKeyDown
    }
  }, [_vm.resizableColumns && !_vm.columnProp("frozen") ? _c("span", {
    staticClass: "p-column-resizer",
    on: {
      mousedown: _vm.onResizeStart
    }
  }) : _vm._e(), _vm._v(" "), _vm.column.$scopedSlots.header ? _c("TTColumnSlot", {
    attrs: {
      column: _vm.column,
      type: "header"
    }
  }) : _vm._e(), _vm._v(" "), _vm.column.children && _vm.column.children.header ? _c("TTColumnSlot", {
    attrs: {
      column: _vm.column
    }
  }) : _vm._e(), _vm._v(" "), _vm.columnProp("header") ? _c("span", {
    staticClass: "p-column-title"
  }, [_vm._v(_vm._s(_vm.columnProp("header")))]) : _vm._e(), _vm._v(" "), _vm.columnProp("sortable") ? _c("span", {
    class: _vm.sortableColumnIcon
  }) : _vm._e(), _vm._v(" "), _vm.isMultiSorted() ? _c("span", {
    staticClass: "p-sortable-column-badge"
  }, [_vm._v(_vm._s(_vm.getMultiSortMetaIndex() + 1))]) : _vm._e()], 1);
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

/* style */
var __vue_inject_styles__$1 = undefined;
/* scoped */
var __vue_scope_id__$1 = undefined;
/* module identifier */
var __vue_module_identifier__$1 = undefined;
/* functional template */
var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var script = {
  name: 'TreeTable',
  props: {
    value: {
      type: null,
      default: null
    },
    expandedKeys: {
      type: null,
      default: null
    },
    selectionKeys: {
      type: null,
      default: null
    },
    selectionMode: {
      type: String,
      default: null
    },
    metaKeySelection: {
      type: Boolean,
      default: true
    },
    rows: {
      type: Number,
      default: 0
    },
    first: {
      type: Number,
      default: 0
    },
    totalRecords: {
      type: Number,
      default: 0
    },
    paginator: {
      type: Boolean,
      default: false
    },
    paginatorPosition: {
      type: String,
      default: 'bottom'
    },
    alwaysShowPaginator: {
      type: Boolean,
      default: true
    },
    paginatorTemplate: {
      type: String,
      default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
    },
    pageLinkSize: {
      type: Number,
      default: 5
    },
    rowsPerPageOptions: {
      type: Array,
      default: null
    },
    currentPageReportTemplate: {
      type: String,
      default: '({currentPage} of {totalPages})'
    },
    lazy: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingIcon: {
      type: String,
      default: 'pi pi-spinner'
    },
    rowHover: {
      type: Boolean,
      default: false
    },
    autoLayout: {
      type: Boolean,
      default: false
    },
    sortField: {
      type: [String, Function],
      default: null
    },
    sortOrder: {
      type: Number,
      default: null
    },
    defaultSortOrder: {
      type: Number,
      default: 1
    },
    multiSortMeta: {
      type: Array,
      default: null
    },
    sortMode: {
      type: String,
      default: 'single'
    },
    removableSort: {
      type: Boolean,
      default: false
    },
    filters: {
      type: Object,
      default: null
    },
    filterMode: {
      type: String,
      default: 'lenient'
    },
    filterLocale: {
      type: String,
      default: undefined
    },
    resizableColumns: {
      type: Boolean,
      default: false
    },
    columnResizeMode: {
      type: String,
      default: 'fit'
    },
    indentation: {
      type: Number,
      default: 1
    },
    showGridlines: {
      type: Boolean,
      default: false
    }
  },
  documentColumnResizeListener: null,
  documentColumnResizeEndListener: null,
  lastResizeHelperX: null,
  resizeColumnElement: null,
  data: function data() {
    return {
      allChildren: null,
      d_expandedKeys: this.expandedKeys || {},
      d_first: this.first,
      d_rows: this.rows,
      d_sortField: this.sortField,
      d_sortOrder: this.sortOrder,
      d_multiSortMeta: this.multiSortMeta ? _toConsumableArray(this.multiSortMeta) : []
    };
  },
  watch: {
    expandedKeys: function expandedKeys(newValue) {
      this.d_expandedKeys = newValue;
    },
    first: function first(newValue) {
      this.d_first = newValue;
    },
    rows: function rows(newValue) {
      this.d_rows = newValue;
    },
    sortField: function sortField(newValue) {
      this.d_sortField = newValue;
    },
    sortOrder: function sortOrder(newValue) {
      this.d_sortOrder = newValue;
    },
    multiSortMeta: function multiSortMeta(newValue) {
      this.d_multiSortMeta = newValue;
    }
  },
  mounted: function mounted() {
    this.allChildren = this.$children;
  },
  methods: {
    columnProp: function columnProp(col, prop) {
      return ObjectUtils.getVNodeProp(col, prop);
    },
    onNodeToggle: function onNodeToggle(node) {
      var key = node.key;
      if (this.d_expandedKeys[key]) {
        delete this.d_expandedKeys[key];
        this.$emit('node-collapse', node);
      } else {
        this.d_expandedKeys[key] = true;
        this.$emit('node-expand', node);
      }
      this.d_expandedKeys = _objectSpread({}, this.d_expandedKeys);
      this.$emit('update:expandedKeys', this.d_expandedKeys);
    },
    onNodeClick: function onNodeClick(event) {
      if (this.rowSelectionMode && event.node.selectable !== false) {
        var metaSelection = event.nodeTouched ? false : this.metaKeySelection;
        var _selectionKeys = metaSelection ? this.handleSelectionWithMetaKey(event) : this.handleSelectionWithoutMetaKey(event);
        this.$emit('update:selectionKeys', _selectionKeys);
      }
    },
    handleSelectionWithMetaKey: function handleSelectionWithMetaKey(event) {
      var originalEvent = event.originalEvent;
      var node = event.node;
      var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      var selected = this.isNodeSelected(node);
      var _selectionKeys;
      if (selected && metaKey) {
        if (this.isSingleSelectionMode()) {
          _selectionKeys = {};
        } else {
          _selectionKeys = _objectSpread({}, this.selectionKeys);
          delete _selectionKeys[node.key];
        }
        this.$emit('node-unselect', node);
      } else {
        if (this.isSingleSelectionMode()) {
          _selectionKeys = {};
        } else if (this.isMultipleSelectionMode()) {
          _selectionKeys = !metaKey ? {} : this.selectionKeys ? _objectSpread({}, this.selectionKeys) : {};
        }
        _selectionKeys[node.key] = true;
        this.$emit('node-select', node);
      }
      return _selectionKeys;
    },
    handleSelectionWithoutMetaKey: function handleSelectionWithoutMetaKey(event) {
      var node = event.node;
      var selected = this.isNodeSelected(node);
      var _selectionKeys;
      if (this.isSingleSelectionMode()) {
        if (selected) {
          _selectionKeys = {};
          this.$emit('node-unselect', node);
        } else {
          _selectionKeys = {};
          _selectionKeys[node.key] = true;
          this.$emit('node-select', node);
        }
      } else {
        if (selected) {
          _selectionKeys = _objectSpread({}, this.selectionKeys);
          delete _selectionKeys[node.key];
          this.$emit('node-unselect', node);
        } else {
          _selectionKeys = this.selectionKeys ? _objectSpread({}, this.selectionKeys) : {};
          _selectionKeys[node.key] = true;
          this.$emit('node-select', node);
        }
      }
      return _selectionKeys;
    },
    onCheckboxChange: function onCheckboxChange(event) {
      this.$emit('update:selectionKeys', event.selectionKeys);
      if (event.check) this.$emit('node-select', event.node);else this.$emit('node-unselect', event.node);
    },
    isSingleSelectionMode: function isSingleSelectionMode() {
      return this.selectionMode === 'single';
    },
    isMultipleSelectionMode: function isMultipleSelectionMode() {
      return this.selectionMode === 'multiple';
    },
    onPage: function onPage(event) {
      this.d_first = event.first;
      this.d_rows = event.rows;
      var pageEvent = this.createLazyLoadEvent(event);
      pageEvent.pageCount = event.pageCount;
      pageEvent.page = event.page;
      this.$emit('update:first', this.d_first);
      this.$emit('update:rows', this.d_rows);
      this.$emit('page', pageEvent);
    },
    resetPage: function resetPage() {
      this.d_first = 0;
      this.$emit('update:first', this.d_first);
    },
    getFilterColumnHeaderClass: function getFilterColumnHeaderClass(column) {
      return ['p-filter-column', this.columnProp(column, 'filterHeaderClass'), {
        'p-frozen-column': this.columnProp(column, 'frozen')
      }];
    },
    onColumnHeaderClick: function onColumnHeaderClick(e) {
      var event = e.originalEvent;
      var column = e.column;
      if (this.columnProp(column, 'sortable')) {
        var targetNode = event.target;
        var columnField = this.columnProp(column, 'sortField') || this.columnProp(column, 'field');
        if (DomHandler.hasClass(targetNode, 'p-sortable-column') || DomHandler.hasClass(targetNode, 'p-column-title') || DomHandler.hasClass(targetNode, 'p-sortable-column-icon') || DomHandler.hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {
          DomHandler.clearSelection();
          if (this.sortMode === 'single') {
            if (this.d_sortField === columnField) {
              if (this.removableSort && this.d_sortOrder * -1 === this.defaultSortOrder) {
                this.d_sortOrder = null;
                this.d_sortField = null;
              } else {
                this.d_sortOrder = this.d_sortOrder * -1;
              }
            } else {
              this.d_sortOrder = this.defaultSortOrder;
              this.d_sortField = columnField;
            }
            this.$emit('update:sortField', this.d_sortField);
            this.$emit('update:sortOrder', this.d_sortOrder);
            this.resetPage();
          } else if (this.sortMode === 'multiple') {
            var metaKey = event.metaKey || event.ctrlKey;
            if (!metaKey) {
              this.d_multiSortMeta = this.d_multiSortMeta.filter(function (meta) {
                return meta.field === columnField;
              });
            }
            this.addMultiSortField(columnField);
            this.$emit('update:multiSortMeta', this.d_multiSortMeta);
          }
          this.$emit('sort', this.createLazyLoadEvent(event));
        }
      }
    },
    addMultiSortField: function addMultiSortField(field) {
      var index = this.d_multiSortMeta.findIndex(function (meta) {
        return meta.field === field;
      });
      if (index >= 0) {
        if (this.removableSort && this.d_multiSortMeta[index].order * -1 === this.defaultSortOrder) this.d_multiSortMeta.splice(index, 1);else this.d_multiSortMeta[index] = {
          field: field,
          order: this.d_multiSortMeta[index].order * -1
        };
      } else {
        this.d_multiSortMeta.push({
          field: field,
          order: this.defaultSortOrder
        });
      }
      this.d_multiSortMeta = _toConsumableArray(this.d_multiSortMeta);
    },
    sortSingle: function sortSingle(nodes) {
      return this.sortNodesSingle(nodes);
    },
    sortNodesSingle: function sortNodesSingle(nodes) {
      var _this = this;
      var _nodes = _toConsumableArray(nodes);
      _nodes.sort(function (node1, node2) {
        var value1 = ObjectUtils.resolveFieldData(node1.data, _this.d_sortField);
        var value2 = ObjectUtils.resolveFieldData(node2.data, _this.d_sortField);
        var result = null;
        if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
          numeric: true
        });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return _this.d_sortOrder * result;
      });
      return _nodes;
    },
    sortMultiple: function sortMultiple(nodes) {
      return this.sortNodesMultiple(nodes);
    },
    sortNodesMultiple: function sortNodesMultiple(nodes) {
      var _this2 = this;
      var _nodes = _toConsumableArray(nodes);
      _nodes.sort(function (node1, node2) {
        return _this2.multisortField(node1, node2, 0);
      });
      return _nodes;
    },
    multisortField: function multisortField(node1, node2, index) {
      var value1 = ObjectUtils.resolveFieldData(node1.data, this.d_multiSortMeta[index].field);
      var value2 = ObjectUtils.resolveFieldData(node2.data, this.d_multiSortMeta[index].field);
      var result = null;
      if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else {
        if (value1 === value2) {
          return this.d_multiSortMeta.length - 1 > index ? this.multisortField(node1, node2, index + 1) : 0;
        } else {
          if ((typeof value1 === 'string' || value1 instanceof String) && (typeof value2 === 'string' || value2 instanceof String)) return this.d_multiSortMeta[index].order * value1.localeCompare(value2, undefined, {
            numeric: true
          });else result = value1 < value2 ? -1 : 1;
        }
      }
      return this.d_multiSortMeta[index].order * result;
    },
    filter: function filter(value) {
      var filteredNodes = [];
      var strict = this.filterMode === 'strict';
      var _iterator = _createForOfIteratorHelper(value),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var node = _step.value;
          var copyNode = _objectSpread({}, node);
          var localMatch = true;
          var globalMatch = false;
          for (var j = 0; j < this.columns.length; j++) {
            var col = this.columns[j];
            var filterField = this.columnProp(col, 'field');

            //local
            if (Object.prototype.hasOwnProperty.call(this.filters, this.columnProp(col, 'field'))) {
              var filterMatchMode = this.columnProp(col, 'filterMatchMode') || 'startsWith';
              var filterValue = this.filters[this.columnProp(col, 'field')];
              var filterConstraint = FilterService.filters[filterMatchMode];
              var paramsWithoutNode = {
                filterField: filterField,
                filterValue: filterValue,
                filterConstraint: filterConstraint,
                strict: strict
              };
              if (strict && !(this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode)) || !strict && !(this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode))) {
                localMatch = false;
              }
              if (!localMatch) {
                break;
              }
            }

            //global
            if (this.hasGlobalFilter() && !globalMatch) {
              var copyNodeForGlobal = _objectSpread({}, copyNode);
              var _filterValue = this.filters['global'];
              var _filterConstraint = FilterService.filters['contains'];
              var globalFilterParamsWithoutNode = {
                filterField: filterField,
                filterValue: _filterValue,
                filterConstraint: _filterConstraint,
                strict: strict
              };
              if (strict && (this.findFilteredNodes(copyNodeForGlobal, globalFilterParamsWithoutNode) || this.isFilterMatched(copyNodeForGlobal, globalFilterParamsWithoutNode)) || !strict && (this.isFilterMatched(copyNodeForGlobal, globalFilterParamsWithoutNode) || this.findFilteredNodes(copyNodeForGlobal, globalFilterParamsWithoutNode))) {
                globalMatch = true;
                copyNode = copyNodeForGlobal;
              }
            }
          }
          var matches = localMatch;
          if (this.hasGlobalFilter()) {
            matches = localMatch && globalMatch;
          }
          if (matches) {
            filteredNodes.push(copyNode);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var filterEvent = this.createLazyLoadEvent(event);
      filterEvent.filteredValue = filteredNodes;
      this.$emit('filter', filterEvent);
      return filteredNodes;
    },
    findFilteredNodes: function findFilteredNodes(node, paramsWithoutNode) {
      if (node) {
        var matched = false;
        if (node.children) {
          var childNodes = _toConsumableArray(node.children);
          node.children = [];
          var _iterator2 = _createForOfIteratorHelper(childNodes),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var childNode = _step2.value;
              var copyChildNode = _objectSpread({}, childNode);
              if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                matched = true;
                node.children.push(copyChildNode);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        if (matched) {
          return true;
        }
      }
    },
    isFilterMatched: function isFilterMatched(node, _ref) {
      var filterField = _ref.filterField,
        filterValue = _ref.filterValue,
        filterConstraint = _ref.filterConstraint,
        strict = _ref.strict;
      var matched = false;
      var dataFieldValue = ObjectUtils.resolveFieldData(node.data, filterField);
      if (filterConstraint(dataFieldValue, filterValue, this.filterLocale)) {
        matched = true;
      }
      if (!matched || strict && !this.isNodeLeaf(node)) {
        matched = this.findFilteredNodes(node, {
          filterField: filterField,
          filterValue: filterValue,
          filterConstraint: filterConstraint,
          strict: strict
        }) || matched;
      }
      return matched;
    },
    isNodeSelected: function isNodeSelected(node) {
      return this.selectionMode && this.selectionKeys ? this.selectionKeys[node.key] === true : false;
    },
    isNodeLeaf: function isNodeLeaf(node) {
      return node.leaf === false ? false : !(node.children && node.children.length);
    },
    createLazyLoadEvent: function createLazyLoadEvent(event) {
      var _this3 = this;
      var filterMatchModes;
      if (this.hasFilters()) {
        filterMatchModes = {};
        this.columns.forEach(function (col) {
          if (_this3.columnProp(col, 'field')) {
            filterMatchModes[col.field] = _this3.columnProp(col, 'filterMatchMode');
          }
        });
      }
      return {
        originalEvent: event,
        first: this.d_first,
        rows: this.d_rows,
        sortField: this.d_sortField,
        sortOrder: this.d_sortOrder,
        multiSortMeta: this.d_multiSortMeta,
        filters: this.filters,
        filterMatchModes: filterMatchModes
      };
    },
    onColumnResizeStart: function onColumnResizeStart(event) {
      var containerLeft = DomHandler.getOffset(this.$el).left;
      this.resizeColumnElement = event.target.parentElement;
      this.columnResizing = true;
      this.lastResizeHelperX = event.pageX - containerLeft + this.$el.scrollLeft;
      this.bindColumnResizeEvents();
    },
    onColumnResize: function onColumnResize(event) {
      var containerLeft = DomHandler.getOffset(this.$el).left;
      DomHandler.addClass(this.$el, 'p-unselectable-text');
      this.$refs.resizeHelper.style.height = this.$el.offsetHeight + 'px';
      this.$refs.resizeHelper.style.top = 0 + 'px';
      this.$refs.resizeHelper.style.left = event.pageX - containerLeft + this.$el.scrollLeft + 'px';
      this.$refs.resizeHelper.style.display = 'block';
    },
    onColumnResizeEnd: function onColumnResizeEnd() {
      var delta = this.$refs.resizeHelper.offsetLeft - this.lastResizeHelperX;
      var columnWidth = this.resizeColumnElement.offsetWidth;
      var newColumnWidth = columnWidth + delta;
      var minWidth = this.resizeColumnElement.style.minWidth || 15;
      if (columnWidth + delta > parseInt(minWidth, 10)) {
        if (this.columnResizeMode === 'fit') {
          var nextColumn = this.resizeColumnElement.nextElementSibling;
          var nextColumnWidth = nextColumn.offsetWidth - delta;
          if (newColumnWidth > 15 && nextColumnWidth > 15) {
            this.resizeColumnElement.style.width = newColumnWidth + 'px';
            if (nextColumn) {
              nextColumn.style.width = nextColumnWidth + 'px';
            }
          }
        } else if (this.columnResizeMode === 'expand') {
          this.$refs.table.style.width = this.$refs.table.offsetWidth + delta + 'px';
          this.resizeColumnElement.style.width = newColumnWidth + 'px';
        }
        this.$emit('column-resize-end', {
          element: this.resizeColumnElement,
          delta: delta
        });
      }
      this.$refs.resizeHelper.style.display = 'none';
      this.resizeColumn = null;
      DomHandler.removeClass(this.$el, 'p-unselectable-text');
      this.unbindColumnResizeEvents();
    },
    resizeTableCells: function resizeTableCells(newColumnWidth, nextColumnWidth) {
      var colIndex = DomHandler.index(this.resizeColumnElement);
      var children = this.$refs.table.children;
      var _iterator3 = _createForOfIteratorHelper(children),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var child = _step3.value;
          var _iterator4 = _createForOfIteratorHelper(child.children),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var row = _step4.value;
              var resizeCell = row.children[colIndex];
              resizeCell.style.flex = '0 0 ' + newColumnWidth + 'px';
              if (this.columnResizeMode === 'fit') {
                var nextCell = resizeCell.nextElementSibling;
                if (nextCell) {
                  nextCell.style.flex = '0 0 ' + nextColumnWidth + 'px';
                }
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    },
    bindColumnResizeEvents: function bindColumnResizeEvents() {
      var _this4 = this;
      if (!this.documentColumnResizeListener) {
        this.documentColumnResizeListener = document.addEventListener('mousemove', function () {
          if (_this4.columnResizing) {
            _this4.onColumnResize(event);
          }
        });
      }
      if (!this.documentColumnResizeEndListener) {
        this.documentColumnResizeEndListener = document.addEventListener('mouseup', function () {
          if (_this4.columnResizing) {
            _this4.columnResizing = false;
            _this4.onColumnResizeEnd();
          }
        });
      }
    },
    unbindColumnResizeEvents: function unbindColumnResizeEvents() {
      if (this.documentColumnResizeListener) {
        document.removeEventListener('document', this.documentColumnResizeListener);
        this.documentColumnResizeListener = null;
      }
      if (this.documentColumnResizeEndListener) {
        document.removeEventListener('document', this.documentColumnResizeEndListener);
        this.documentColumnResizeEndListener = null;
      }
    },
    onColumnKeyDown: function onColumnKeyDown(event, col) {
      if (event.which === 13 && event.currentTarget.nodeName === 'TH' && DomHandler.hasClass(event.currentTarget, 'p-sortable-column')) {
        this.onColumnHeaderClick(event, col);
      }
    },
    hasColumnFilter: function hasColumnFilter() {
      if (this.columns) {
        var _iterator5 = _createForOfIteratorHelper(this.columns),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var col = _step5.value;
            if (col.children && col.children.filter) {
              return true;
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
      return false;
    },
    hasFilters: function hasFilters() {
      return this.filters && Object.keys(this.filters).length > 0 && this.filters.constructor === Object;
    },
    hasGlobalFilter: function hasGlobalFilter() {
      return this.filters && Object.prototype.hasOwnProperty.call(this.filters, 'global');
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-treetable p-component', {
        'p-treetable-hoverable-rows': this.rowHover || this.rowSelectionMode,
        'p-treetable-auto-layout': this.autoLayout,
        'p-treetable-resizable': this.resizableColumns,
        'p-treetable-resizable-fit': this.resizableColumns && this.columnResizeMode === 'fit',
        'p-treetable-gridlines': this.showGridlines
      }];
    },
    columns: function columns() {
      if (this.allChildren) {
        return this.allChildren.filter(function (child) {
          return child.$options._propKeys.indexOf('columnKey') !== -1;
        });
      }
      return [];
    },
    processedData: function processedData() {
      if (this.lazy) {
        return this.value;
      } else {
        if (this.value && this.value.length) {
          var data = this.value;
          if (this.sorted) {
            if (this.sortMode === 'single') data = this.sortSingle(data);else if (this.sortMode === 'multiple') data = this.sortMultiple(data);
          }
          if (this.hasFilters()) {
            data = this.filter(data);
          }
          return data;
        } else {
          return null;
        }
      }
    },
    dataToRender: function dataToRender() {
      var data = this.processedData;
      if (this.paginator) {
        var first = this.lazy ? 0 : this.d_first;
        return data.slice(first, first + this.d_rows);
      } else {
        return data;
      }
    },
    empty: function empty() {
      var data = this.processedData;
      return !data || data.length === 0;
    },
    sorted: function sorted() {
      return this.d_sortField || this.d_multiSortMeta && this.d_multiSortMeta.length > 0;
    },
    hasFooter: function hasFooter() {
      var hasFooter = false;
      var _iterator6 = _createForOfIteratorHelper(this.columns),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var col = _step6.value;
          if (col.footer || col.$scopedSlots.footer) {
            hasFooter = true;
            break;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return hasFooter;
    },
    paginatorTop: function paginatorTop() {
      return this.paginator && (this.paginatorPosition !== 'bottom' || this.paginatorPosition === 'both');
    },
    paginatorBottom: function paginatorBottom() {
      return this.paginator && (this.paginatorPosition !== 'top' || this.paginatorPosition === 'both');
    },
    singleSelectionMode: function singleSelectionMode() {
      return this.selectionMode && this.selectionMode === 'single';
    },
    multipleSelectionMode: function multipleSelectionMode() {
      return this.selectionMode && this.selectionMode === 'multiple';
    },
    rowSelectionMode: function rowSelectionMode() {
      return this.singleSelectionMode || this.multipleSelectionMode;
    },
    totalRecordsLength: function totalRecordsLength() {
      if (this.lazy) {
        return this.totalRecords;
      } else {
        var data = this.processedData;
        return data ? data.length : 0;
      }
    },
    loadingIconClass: function loadingIconClass() {
      return ['p-treetable-loading-icon pi-spin', this.loadingIcon];
    }
  },
  components: {
    TTColumnSlot: __vue_component__$5,
    TTRow: __vue_component__$3,
    TTPaginator: Paginator,
    TTHeaderCell: __vue_component__$1,
    TTFooterCell: __vue_component__$2
  }
};

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
  }, [_vm._t("default"), _vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "p-treetable-loading"
  }, [_c("div", {
    staticClass: "p-treetable-loading-overlay p-component-overlay"
  }, [_c("i", {
    class: _vm.loadingIconClass
  })])]) : _vm._e(), _vm._v(" "), _vm.$scopedSlots.header ? _c("div", {
    staticClass: "p-treetable-header"
  }, [_vm._t("header")], 2) : _vm._e(), _vm._v(" "), _vm.paginatorTop ? _c("TTPaginator", {
    staticClass: "p-paginator-top",
    attrs: {
      rows: _vm.d_rows,
      first: _vm.d_first,
      totalRecords: _vm.totalRecordsLength,
      pageLinkSize: _vm.pageLinkSize,
      template: _vm.paginatorTemplate,
      rowsPerPageOptions: _vm.rowsPerPageOptions,
      currentPageReportTemplate: _vm.currentPageReportTemplate,
      alwaysShow: _vm.alwaysShowPaginator
    },
    on: {
      page: function page($event) {
        return _vm.onPage($event);
      }
    },
    scopedSlots: _vm._u([_vm.$scopedSlots.paginatorstart ? {
      key: "start",
      fn: function fn() {
        return [_vm._t("paginatorstart")];
      },
      proxy: true
    } : null, _vm.$scopedSlots.paginatorend ? {
      key: "end",
      fn: function fn() {
        return [_vm._t("paginatorend")];
      },
      proxy: true
    } : null], null, true)
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "p-treetable-wrapper"
  }, [_c("table", {
    ref: "table"
  }, [_c("thead", {
    staticClass: "p-treetable-thead"
  }, [_c("tr", [_vm._l(_vm.columns, function (col, i) {
    return [!_vm.columnProp(col, "hidden") ? _c("TTHeaderCell", {
      key: _vm.columnProp(col, "columnKey") || _vm.columnProp(col, "field") || i,
      attrs: {
        column: col,
        resizableColumns: _vm.resizableColumns,
        sortField: _vm.d_sortField,
        sortOrder: _vm.d_sortOrder,
        multiSortMeta: _vm.d_multiSortMeta,
        sortMode: _vm.sortMode
      },
      on: {
        "column-click": _vm.onColumnHeaderClick,
        "column-resizestart": _vm.onColumnResizeStart
      }
    }) : _vm._e()];
  })], 2), _vm._v(" "), _vm.hasColumnFilter() ? _c("tr", [_vm._l(_vm.columns, function (col, i) {
    return [!_vm.columnProp(col, "hidden") ? _c("th", {
      key: _vm.columnProp(col, "columnKey") || _vm.columnProp(col, "field") || i,
      class: _vm.getFilterColumnHeaderClass(col),
      style: [_vm.columnProp(col, "styles"), _vm.columnProp(col, "filterHeaderStyle")]
    }, [col.$scopedSlots.filter ? _c("TTColumnSlot", {
      attrs: {
        column: col,
        type: "filter"
      }
    }) : _vm._e()], 1) : _vm._e()];
  })], 2) : _vm._e()]), _vm._v(" "), _c("tbody", {
    staticClass: "p-treetable-tbody"
  }, [!_vm.empty ? _vm._l(_vm.dataToRender, function (node) {
    return _c("TTRow", {
      key: node.key,
      attrs: {
        columns: _vm.columns,
        node: node,
        level: 0,
        expandedKeys: _vm.d_expandedKeys,
        indentation: _vm.indentation,
        selectionMode: _vm.selectionMode,
        selectionKeys: _vm.selectionKeys
      },
      on: {
        "node-toggle": _vm.onNodeToggle,
        "node-click": _vm.onNodeClick,
        "checkbox-change": _vm.onCheckboxChange
      }
    });
  }) : _c("tr", {
    staticClass: "p-treetable-emptymessage"
  }, [_c("td", {
    attrs: {
      colspan: _vm.columns.length
    }
  }, [_vm._t("empty")], 2)])], 2), _vm._v(" "), _vm.hasFooter ? _c("tfoot", {
    staticClass: "p-treetable-tfoot"
  }, [_c("tr", [_vm._l(_vm.columns, function (col, i) {
    return [!_vm.columnProp(col, "hidden") ? _c("TTFooterCell", {
      key: _vm.columnProp(col, "columnKey") || _vm.columnProp(col, "field") || i,
      attrs: {
        column: col
      }
    }) : _vm._e()];
  })], 2)]) : _vm._e()])]), _vm._v(" "), _vm.paginatorBottom ? _c("TTPaginator", {
    staticClass: "p-paginator-bottom",
    attrs: {
      rows: _vm.d_rows,
      first: _vm.d_first,
      totalRecords: _vm.totalRecordsLength,
      pageLinkSize: _vm.pageLinkSize,
      template: _vm.paginatorTemplate,
      rowsPerPageOptions: _vm.rowsPerPageOptions,
      currentPageReportTemplate: _vm.currentPageReportTemplate,
      alwaysShow: _vm.alwaysShowPaginator
    },
    on: {
      page: function page($event) {
        return _vm.onPage($event);
      }
    },
    scopedSlots: _vm._u([_vm.$scopedSlots.paginatorstart ? {
      key: "start",
      fn: function fn() {
        return [_vm._t("paginatorstart")];
      },
      proxy: true
    } : null, _vm.$scopedSlots.paginatorend ? {
      key: "end",
      fn: function fn() {
        return [_vm._t("paginatorend")];
      },
      proxy: true
    } : null], null, true)
  }) : _vm._e(), _vm._v(" "), _vm.$scopedSlots.footer ? _c("div", {
    staticClass: "p-treetable-footer"
  }, [_vm._t("footer")], 2) : _vm._e(), _vm._v(" "), _c("div", {
    ref: "resizeHelper",
    staticClass: "p-column-resizer-helper p-highlight",
    staticStyle: {
      display: "none"
    }
  })], 2);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-335154b5_0", {
    source: "\n.p-treetable {\n  position: relative;\n}\n.p-treetable table {\n  border-collapse: collapse;\n  width: 100%;\n  table-layout: fixed;\n}\n.p-treetable .p-sortable-column {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-treetable-auto-layout > .p-treetable-wrapper > table {\n  table-layout: auto;\n}\n.p-treetable-hoverable-rows .p-treetable-tbody > tr {\n  cursor: pointer;\n}\n.p-treetable-toggler {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  vertical-align: middle;\n  overflow: hidden;\n  position: relative;\n}\n.p-treetable-toggler + .p-checkbox {\n  vertical-align: middle;\n}\n.p-treetable-toggler + .p-checkbox + span {\n  vertical-align: middle;\n}\n\n/* Resizable */\n.p-treetable-resizable > .p-treetable-wrapper {\n  overflow-x: auto;\n}\n.p-treetable-resizable .p-treetable-thead > tr > th,\n.p-treetable-resizable .p-treetable-tfoot > tr > td,\n.p-treetable-resizable .p-treetable-tbody > tr > td {\n  overflow: hidden;\n}\n.p-treetable-resizable .p-resizable-column:not(.p-frozen-column) {\n  background-clip: padding-box;\n  position: relative;\n}\n.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer {\n  display: none;\n}\n.p-treetable .p-column-resizer {\n  display: block;\n  position: absolute !important;\n  top: 0;\n  right: 0;\n  margin: 0;\n  width: 0.5rem;\n  height: 100%;\n  padding: 0px;\n  cursor: col-resize;\n  border: 1px solid transparent;\n}\n.p-treetable .p-column-resizer-helper {\n  width: 1px;\n  position: absolute;\n  z-index: 10;\n  display: none;\n}\n.p-treetable .p-treetable-loading-overlay {\n  position: absolute;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  z-index: 2;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/treetable/TreeTable.vue"],
      "names": [],
      "mappings": ";AA0gCA;EACA,kBAAA;AACA;AAEA;EACA,yBAAA;EACA,WAAA;EACA,mBAAA;AACA;AAEA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,sBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,sBAAA;AACA;AAEA;EACA,sBAAA;AACA;;AAEA,cAAA;AACA;EACA,gBAAA;AACA;AAEA;;;EAGA,gBAAA;AACA;AAEA;EACA,4BAAA;EACA,kBAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,cAAA;EACA,6BAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,6BAAA;AACA;AAEA;EACA,UAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;AACA;AAEA;EACA,kBAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,UAAA;AACA",
      "file": "TreeTable.vue",
      "sourcesContent": ["<template>\n  <div :class=\"containerClass\">\n    <slot></slot>\n    <div class=\"p-treetable-loading\" v-if=\"loading\">\n      <div class=\"p-treetable-loading-overlay p-component-overlay\">\n        <i :class=\"loadingIconClass\"></i>\n      </div>\n    </div>\n    <div class=\"p-treetable-header\" v-if=\"$scopedSlots.header\">\n      <slot name=\"header\"></slot>\n    </div>\n    <TTPaginator\n      v-if=\"paginatorTop\"\n      :rows=\"d_rows\"\n      :first=\"d_first\"\n      :totalRecords=\"totalRecordsLength\"\n      :pageLinkSize=\"pageLinkSize\"\n      :template=\"paginatorTemplate\"\n      :rowsPerPageOptions=\"rowsPerPageOptions\"\n      :currentPageReportTemplate=\"currentPageReportTemplate\"\n      class=\"p-paginator-top\"\n      @page=\"onPage($event)\"\n      :alwaysShow=\"alwaysShowPaginator\">\n      <template #start v-if=\"$scopedSlots.paginatorstart\">\n        <slot name=\"paginatorstart\"></slot>\n      </template>\n      <template #end v-if=\"$scopedSlots.paginatorend\">\n        <slot name=\"paginatorend\"></slot>\n      </template>\n    </TTPaginator>\n    <div class=\"p-treetable-wrapper\">\n      <table ref=\"table\">\n        <thead class=\"p-treetable-thead\">\n          <tr>\n            <template v-for=\"(col, i) of columns\">\n              <TTHeaderCell\n                v-if=\"!columnProp(col, 'hidden')\"\n                :key=\"columnProp(col, 'columnKey') || columnProp(col, 'field') || i\"\n                :column=\"col\"\n                :resizableColumns=\"resizableColumns\"\n                :sortField=\"d_sortField\"\n                :sortOrder=\"d_sortOrder\"\n                :multiSortMeta=\"d_multiSortMeta\"\n                :sortMode=\"sortMode\"\n                @column-click=\"onColumnHeaderClick\"\n                @column-resizestart=\"onColumnResizeStart\"></TTHeaderCell>\n            </template>\n          </tr>\n          <tr v-if=\"hasColumnFilter()\">\n            <template v-for=\"(col, i) of columns\">\n              <th\n                v-if=\"!columnProp(col, 'hidden')\"\n                :key=\"columnProp(col, 'columnKey') || columnProp(col, 'field') || i\"\n                :class=\"getFilterColumnHeaderClass(col)\"\n                :style=\"[columnProp(col, 'styles'), columnProp(col, 'filterHeaderStyle')]\">\n                <TTColumnSlot :column=\"col\" type=\"filter\" v-if=\"col.$scopedSlots.filter\" />\n              </th>\n            </template>\n          </tr>\n        </thead>\n        <tbody class=\"p-treetable-tbody\">\n          <template v-if=\"!empty\">\n            <TTRow\n              v-for=\"node of dataToRender\"\n              :key=\"node.key\"\n              :columns=\"columns\"\n              :node=\"node\"\n              :level=\"0\"\n              :expandedKeys=\"d_expandedKeys\"\n              @node-toggle=\"onNodeToggle\"\n              :indentation=\"indentation\"\n              :selectionMode=\"selectionMode\"\n              :selectionKeys=\"selectionKeys\"\n              @node-click=\"onNodeClick\"\n              @checkbox-change=\"onCheckboxChange\"></TTRow>\n          </template>\n          <tr v-else class=\"p-treetable-emptymessage\">\n            <td :colspan=\"columns.length\">\n              <slot name=\"empty\"></slot>\n            </td>\n          </tr>\n        </tbody>\n        <tfoot class=\"p-treetable-tfoot\" v-if=\"hasFooter\">\n          <tr>\n            <template v-for=\"(col, i) of columns\">\n              <TTFooterCell\n                v-if=\"!columnProp(col, 'hidden')\"\n                :key=\"columnProp(col, 'columnKey') || columnProp(col, 'field') || i\"\n                :column=\"col\"></TTFooterCell>\n            </template>\n          </tr>\n        </tfoot>\n      </table>\n    </div>\n    <TTPaginator\n      v-if=\"paginatorBottom\"\n      :rows=\"d_rows\"\n      :first=\"d_first\"\n      :totalRecords=\"totalRecordsLength\"\n      :pageLinkSize=\"pageLinkSize\"\n      :template=\"paginatorTemplate\"\n      :rowsPerPageOptions=\"rowsPerPageOptions\"\n      :currentPageReportTemplate=\"currentPageReportTemplate\"\n      class=\"p-paginator-bottom\"\n      @page=\"onPage($event)\"\n      :alwaysShow=\"alwaysShowPaginator\">\n      <template #start v-if=\"$scopedSlots.paginatorstart\">\n        <slot name=\"paginatorstart\"></slot>\n      </template>\n      <template #end v-if=\"$scopedSlots.paginatorend\">\n        <slot name=\"paginatorend\"></slot>\n      </template>\n    </TTPaginator>\n    <div class=\"p-treetable-footer\" v-if=\"$scopedSlots.footer\">\n      <slot name=\"footer\"></slot>\n    </div>\n    <div ref=\"resizeHelper\" class=\"p-column-resizer-helper p-highlight\" style=\"display: none\"></div>\n  </div>\n</template>\n\n<script>\nimport { DomHandler, ObjectUtils } from 'primevue2/utils'\nimport { FilterService } from 'primevue2/api'\nimport TreeTableColumnSlot from './TreeTableColumnSlot.vue'\nimport TreeTableRowLoader from './TreeTableRowLoader.vue'\nimport FooterCell from './FooterCell.vue'\nimport HeaderCell from './HeaderCell.vue'\nimport Paginator from 'primevue2/paginator'\n\nexport default {\n  name: 'TreeTable',\n  props: {\n    value: {\n      type: null,\n      default: null\n    },\n    expandedKeys: {\n      type: null,\n      default: null\n    },\n    selectionKeys: {\n      type: null,\n      default: null\n    },\n    selectionMode: {\n      type: String,\n      default: null\n    },\n    metaKeySelection: {\n      type: Boolean,\n      default: true\n    },\n    rows: {\n      type: Number,\n      default: 0\n    },\n    first: {\n      type: Number,\n      default: 0\n    },\n    totalRecords: {\n      type: Number,\n      default: 0\n    },\n    paginator: {\n      type: Boolean,\n      default: false\n    },\n    paginatorPosition: {\n      type: String,\n      default: 'bottom'\n    },\n    alwaysShowPaginator: {\n      type: Boolean,\n      default: true\n    },\n    paginatorTemplate: {\n      type: String,\n      default:\n        'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'\n    },\n    pageLinkSize: {\n      type: Number,\n      default: 5\n    },\n    rowsPerPageOptions: {\n      type: Array,\n      default: null\n    },\n    currentPageReportTemplate: {\n      type: String,\n      default: '({currentPage} of {totalPages})'\n    },\n    lazy: {\n      type: Boolean,\n      default: false\n    },\n    loading: {\n      type: Boolean,\n      default: false\n    },\n    loadingIcon: {\n      type: String,\n      default: 'pi pi-spinner'\n    },\n    rowHover: {\n      type: Boolean,\n      default: false\n    },\n    autoLayout: {\n      type: Boolean,\n      default: false\n    },\n    sortField: {\n      type: [String, Function],\n      default: null\n    },\n    sortOrder: {\n      type: Number,\n      default: null\n    },\n    defaultSortOrder: {\n      type: Number,\n      default: 1\n    },\n    multiSortMeta: {\n      type: Array,\n      default: null\n    },\n    sortMode: {\n      type: String,\n      default: 'single'\n    },\n    removableSort: {\n      type: Boolean,\n      default: false\n    },\n    filters: {\n      type: Object,\n      default: null\n    },\n    filterMode: {\n      type: String,\n      default: 'lenient'\n    },\n    filterLocale: {\n      type: String,\n      default: undefined\n    },\n    resizableColumns: {\n      type: Boolean,\n      default: false\n    },\n    columnResizeMode: {\n      type: String,\n      default: 'fit'\n    },\n    indentation: {\n      type: Number,\n      default: 1\n    },\n    showGridlines: {\n      type: Boolean,\n      default: false\n    }\n  },\n  documentColumnResizeListener: null,\n  documentColumnResizeEndListener: null,\n  lastResizeHelperX: null,\n  resizeColumnElement: null,\n  data() {\n    return {\n      allChildren: null,\n      d_expandedKeys: this.expandedKeys || {},\n      d_first: this.first,\n      d_rows: this.rows,\n      d_sortField: this.sortField,\n      d_sortOrder: this.sortOrder,\n      d_multiSortMeta: this.multiSortMeta ? [...this.multiSortMeta] : []\n    }\n  },\n  watch: {\n    expandedKeys(newValue) {\n      this.d_expandedKeys = newValue\n    },\n    first(newValue) {\n      this.d_first = newValue\n    },\n    rows(newValue) {\n      this.d_rows = newValue\n    },\n    sortField(newValue) {\n      this.d_sortField = newValue\n    },\n    sortOrder(newValue) {\n      this.d_sortOrder = newValue\n    },\n    multiSortMeta(newValue) {\n      this.d_multiSortMeta = newValue\n    }\n  },\n  mounted() {\n    this.allChildren = this.$children\n  },\n  methods: {\n    columnProp(col, prop) {\n      return ObjectUtils.getVNodeProp(col, prop)\n    },\n    onNodeToggle(node) {\n      const key = node.key\n\n      if (this.d_expandedKeys[key]) {\n        delete this.d_expandedKeys[key]\n        this.$emit('node-collapse', node)\n      } else {\n        this.d_expandedKeys[key] = true\n        this.$emit('node-expand', node)\n      }\n\n      this.d_expandedKeys = { ...this.d_expandedKeys }\n      this.$emit('update:expandedKeys', this.d_expandedKeys)\n    },\n    onNodeClick(event) {\n      if (this.rowSelectionMode && event.node.selectable !== false) {\n        const metaSelection = event.nodeTouched ? false : this.metaKeySelection\n        const _selectionKeys = metaSelection\n          ? this.handleSelectionWithMetaKey(event)\n          : this.handleSelectionWithoutMetaKey(event)\n\n        this.$emit('update:selectionKeys', _selectionKeys)\n      }\n    },\n    handleSelectionWithMetaKey(event) {\n      const originalEvent = event.originalEvent\n      const node = event.node\n      const metaKey = originalEvent.metaKey || originalEvent.ctrlKey\n      const selected = this.isNodeSelected(node)\n      let _selectionKeys\n\n      if (selected && metaKey) {\n        if (this.isSingleSelectionMode()) {\n          _selectionKeys = {}\n        } else {\n          _selectionKeys = { ...this.selectionKeys }\n          delete _selectionKeys[node.key]\n        }\n\n        this.$emit('node-unselect', node)\n      } else {\n        if (this.isSingleSelectionMode()) {\n          _selectionKeys = {}\n        } else if (this.isMultipleSelectionMode()) {\n          _selectionKeys = !metaKey\n            ? {}\n            : this.selectionKeys\n              ? { ...this.selectionKeys }\n              : {}\n        }\n\n        _selectionKeys[node.key] = true\n        this.$emit('node-select', node)\n      }\n\n      return _selectionKeys\n    },\n    handleSelectionWithoutMetaKey(event) {\n      const node = event.node\n      const selected = this.isNodeSelected(node)\n      let _selectionKeys\n\n      if (this.isSingleSelectionMode()) {\n        if (selected) {\n          _selectionKeys = {}\n          this.$emit('node-unselect', node)\n        } else {\n          _selectionKeys = {}\n          _selectionKeys[node.key] = true\n          this.$emit('node-select', node)\n        }\n      } else {\n        if (selected) {\n          _selectionKeys = { ...this.selectionKeys }\n          delete _selectionKeys[node.key]\n\n          this.$emit('node-unselect', node)\n        } else {\n          _selectionKeys = this.selectionKeys ? { ...this.selectionKeys } : {}\n          _selectionKeys[node.key] = true\n\n          this.$emit('node-select', node)\n        }\n      }\n\n      return _selectionKeys\n    },\n    onCheckboxChange(event) {\n      this.$emit('update:selectionKeys', event.selectionKeys)\n\n      if (event.check) this.$emit('node-select', event.node)\n      else this.$emit('node-unselect', event.node)\n    },\n    isSingleSelectionMode() {\n      return this.selectionMode === 'single'\n    },\n    isMultipleSelectionMode() {\n      return this.selectionMode === 'multiple'\n    },\n    onPage(event) {\n      this.d_first = event.first\n      this.d_rows = event.rows\n\n      let pageEvent = this.createLazyLoadEvent(event)\n      pageEvent.pageCount = event.pageCount\n      pageEvent.page = event.page\n\n      this.$emit('update:first', this.d_first)\n      this.$emit('update:rows', this.d_rows)\n      this.$emit('page', pageEvent)\n    },\n    resetPage() {\n      this.d_first = 0\n      this.$emit('update:first', this.d_first)\n    },\n    getFilterColumnHeaderClass(column) {\n      return [\n        'p-filter-column',\n        this.columnProp(column, 'filterHeaderClass'),\n        {\n          'p-frozen-column': this.columnProp(column, 'frozen')\n        }\n      ]\n    },\n    onColumnHeaderClick(e) {\n      let event = e.originalEvent\n      let column = e.column\n\n      if (this.columnProp(column, 'sortable')) {\n        const targetNode = event.target\n        const columnField =\n          this.columnProp(column, 'sortField') ||\n          this.columnProp(column, 'field')\n\n        if (\n          DomHandler.hasClass(targetNode, 'p-sortable-column') ||\n          DomHandler.hasClass(targetNode, 'p-column-title') ||\n          DomHandler.hasClass(targetNode, 'p-sortable-column-icon') ||\n          DomHandler.hasClass(\n            targetNode.parentElement,\n            'p-sortable-column-icon'\n          )\n        ) {\n          DomHandler.clearSelection()\n\n          if (this.sortMode === 'single') {\n            if (this.d_sortField === columnField) {\n              if (\n                this.removableSort &&\n                this.d_sortOrder * -1 === this.defaultSortOrder\n              ) {\n                this.d_sortOrder = null\n                this.d_sortField = null\n              } else {\n                this.d_sortOrder = this.d_sortOrder * -1\n              }\n            } else {\n              this.d_sortOrder = this.defaultSortOrder\n              this.d_sortField = columnField\n            }\n\n            this.$emit('update:sortField', this.d_sortField)\n            this.$emit('update:sortOrder', this.d_sortOrder)\n            this.resetPage()\n          } else if (this.sortMode === 'multiple') {\n            let metaKey = event.metaKey || event.ctrlKey\n            if (!metaKey) {\n              this.d_multiSortMeta = this.d_multiSortMeta.filter(\n                (meta) => meta.field === columnField\n              )\n            }\n\n            this.addMultiSortField(columnField)\n            this.$emit('update:multiSortMeta', this.d_multiSortMeta)\n          }\n\n          this.$emit('sort', this.createLazyLoadEvent(event))\n        }\n      }\n    },\n    addMultiSortField(field) {\n      let index = this.d_multiSortMeta.findIndex((meta) => meta.field === field)\n\n      if (index >= 0) {\n        if (\n          this.removableSort &&\n          this.d_multiSortMeta[index].order * -1 === this.defaultSortOrder\n        )\n          this.d_multiSortMeta.splice(index, 1)\n        else\n          this.d_multiSortMeta[index] = {\n            field: field,\n            order: this.d_multiSortMeta[index].order * -1\n          }\n      } else {\n        this.d_multiSortMeta.push({\n          field: field,\n          order: this.defaultSortOrder\n        })\n      }\n\n      this.d_multiSortMeta = [...this.d_multiSortMeta]\n    },\n    sortSingle(nodes) {\n      return this.sortNodesSingle(nodes)\n    },\n    sortNodesSingle(nodes) {\n      let _nodes = [...nodes]\n\n      _nodes.sort((node1, node2) => {\n        const value1 = ObjectUtils.resolveFieldData(\n          node1.data,\n          this.d_sortField\n        )\n        const value2 = ObjectUtils.resolveFieldData(\n          node2.data,\n          this.d_sortField\n        )\n        let result = null\n\n        if (value1 == null && value2 != null) result = -1\n        else if (value1 != null && value2 == null) result = 1\n        else if (value1 == null && value2 == null) result = 0\n        else if (typeof value1 === 'string' && typeof value2 === 'string')\n          result = value1.localeCompare(value2, undefined, { numeric: true })\n        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0\n\n        return this.d_sortOrder * result\n      })\n\n      return _nodes\n    },\n    sortMultiple(nodes) {\n      return this.sortNodesMultiple(nodes)\n    },\n    sortNodesMultiple(nodes) {\n      let _nodes = [...nodes]\n      _nodes.sort((node1, node2) => {\n        return this.multisortField(node1, node2, 0)\n      })\n\n      return _nodes\n    },\n    multisortField(node1, node2, index) {\n      const value1 = ObjectUtils.resolveFieldData(\n        node1.data,\n        this.d_multiSortMeta[index].field\n      )\n      const value2 = ObjectUtils.resolveFieldData(\n        node2.data,\n        this.d_multiSortMeta[index].field\n      )\n      let result = null\n\n      if (value1 == null && value2 != null) result = -1\n      else if (value1 != null && value2 == null) result = 1\n      else if (value1 == null && value2 == null) result = 0\n      else {\n        if (value1 === value2) {\n          return this.d_multiSortMeta.length - 1 > index\n            ? this.multisortField(node1, node2, index + 1)\n            : 0\n        } else {\n          if (\n            (typeof value1 === 'string' || value1 instanceof String) &&\n            (typeof value2 === 'string' || value2 instanceof String)\n          )\n            return (\n              this.d_multiSortMeta[index].order *\n              value1.localeCompare(value2, undefined, { numeric: true })\n            )\n          else result = value1 < value2 ? -1 : 1\n        }\n      }\n\n      return this.d_multiSortMeta[index].order * result\n    },\n    filter(value) {\n      let filteredNodes = []\n      const strict = this.filterMode === 'strict'\n\n      for (let node of value) {\n        let copyNode = { ...node }\n        let localMatch = true\n        let globalMatch = false\n\n        for (let j = 0; j < this.columns.length; j++) {\n          let col = this.columns[j]\n          let filterField = this.columnProp(col, 'field')\n\n          //local\n          if (\n            Object.prototype.hasOwnProperty.call(\n              this.filters,\n              this.columnProp(col, 'field')\n            )\n          ) {\n            let filterMatchMode =\n              this.columnProp(col, 'filterMatchMode') || 'startsWith'\n            let filterValue = this.filters[this.columnProp(col, 'field')]\n            let filterConstraint = FilterService.filters[filterMatchMode]\n            let paramsWithoutNode = {\n              filterField,\n              filterValue,\n              filterConstraint,\n              strict\n            }\n\n            if (\n              (strict &&\n                !(\n                  this.findFilteredNodes(copyNode, paramsWithoutNode) ||\n                  this.isFilterMatched(copyNode, paramsWithoutNode)\n                )) ||\n              (!strict &&\n                !(\n                  this.isFilterMatched(copyNode, paramsWithoutNode) ||\n                  this.findFilteredNodes(copyNode, paramsWithoutNode)\n                ))\n            ) {\n              localMatch = false\n            }\n\n            if (!localMatch) {\n              break\n            }\n          }\n\n          //global\n          if (this.hasGlobalFilter() && !globalMatch) {\n            let copyNodeForGlobal = { ...copyNode }\n            let filterValue = this.filters['global']\n            let filterConstraint = FilterService.filters['contains']\n            let globalFilterParamsWithoutNode = {\n              filterField,\n              filterValue,\n              filterConstraint,\n              strict\n            }\n\n            if (\n              (strict &&\n                (this.findFilteredNodes(\n                  copyNodeForGlobal,\n                  globalFilterParamsWithoutNode\n                ) ||\n                  this.isFilterMatched(\n                    copyNodeForGlobal,\n                    globalFilterParamsWithoutNode\n                  ))) ||\n              (!strict &&\n                (this.isFilterMatched(\n                  copyNodeForGlobal,\n                  globalFilterParamsWithoutNode\n                ) ||\n                  this.findFilteredNodes(\n                    copyNodeForGlobal,\n                    globalFilterParamsWithoutNode\n                  )))\n            ) {\n              globalMatch = true\n              copyNode = copyNodeForGlobal\n            }\n          }\n        }\n\n        let matches = localMatch\n        if (this.hasGlobalFilter()) {\n          matches = localMatch && globalMatch\n        }\n\n        if (matches) {\n          filteredNodes.push(copyNode)\n        }\n      }\n\n      let filterEvent = this.createLazyLoadEvent(event)\n      filterEvent.filteredValue = filteredNodes\n      this.$emit('filter', filterEvent)\n\n      return filteredNodes\n    },\n    findFilteredNodes(node, paramsWithoutNode) {\n      if (node) {\n        let matched = false\n        if (node.children) {\n          let childNodes = [...node.children]\n          node.children = []\n          for (let childNode of childNodes) {\n            let copyChildNode = { ...childNode }\n            if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {\n              matched = true\n              node.children.push(copyChildNode)\n            }\n          }\n        }\n\n        if (matched) {\n          return true\n        }\n      }\n    },\n    isFilterMatched(\n      node,\n      { filterField, filterValue, filterConstraint, strict }\n    ) {\n      let matched = false\n      let dataFieldValue = ObjectUtils.resolveFieldData(node.data, filterField)\n      if (filterConstraint(dataFieldValue, filterValue, this.filterLocale)) {\n        matched = true\n      }\n\n      if (!matched || (strict && !this.isNodeLeaf(node))) {\n        matched =\n          this.findFilteredNodes(node, {\n            filterField,\n            filterValue,\n            filterConstraint,\n            strict\n          }) || matched\n      }\n\n      return matched\n    },\n    isNodeSelected(node) {\n      return this.selectionMode && this.selectionKeys\n        ? this.selectionKeys[node.key] === true\n        : false\n    },\n    isNodeLeaf(node) {\n      return node.leaf === false\n        ? false\n        : !(node.children && node.children.length)\n    },\n    createLazyLoadEvent(event) {\n      let filterMatchModes\n      if (this.hasFilters()) {\n        filterMatchModes = {}\n        this.columns.forEach((col) => {\n          if (this.columnProp(col, 'field')) {\n            filterMatchModes[col.field] = this.columnProp(\n              col,\n              'filterMatchMode'\n            )\n          }\n        })\n      }\n\n      return {\n        originalEvent: event,\n        first: this.d_first,\n        rows: this.d_rows,\n        sortField: this.d_sortField,\n        sortOrder: this.d_sortOrder,\n        multiSortMeta: this.d_multiSortMeta,\n        filters: this.filters,\n        filterMatchModes: filterMatchModes\n      }\n    },\n    onColumnResizeStart(event) {\n      let containerLeft = DomHandler.getOffset(this.$el).left\n      this.resizeColumnElement = event.target.parentElement\n      this.columnResizing = true\n      this.lastResizeHelperX = event.pageX - containerLeft + this.$el.scrollLeft\n\n      this.bindColumnResizeEvents()\n    },\n    onColumnResize(event) {\n      let containerLeft = DomHandler.getOffset(this.$el).left\n      DomHandler.addClass(this.$el, 'p-unselectable-text')\n      this.$refs.resizeHelper.style.height = this.$el.offsetHeight + 'px'\n      this.$refs.resizeHelper.style.top = 0 + 'px'\n      this.$refs.resizeHelper.style.left =\n        event.pageX - containerLeft + this.$el.scrollLeft + 'px'\n\n      this.$refs.resizeHelper.style.display = 'block'\n    },\n    onColumnResizeEnd() {\n      let delta = this.$refs.resizeHelper.offsetLeft - this.lastResizeHelperX\n      let columnWidth = this.resizeColumnElement.offsetWidth\n      let newColumnWidth = columnWidth + delta\n      let minWidth = this.resizeColumnElement.style.minWidth || 15\n\n      if (columnWidth + delta > parseInt(minWidth, 10)) {\n        if (this.columnResizeMode === 'fit') {\n          let nextColumn = this.resizeColumnElement.nextElementSibling\n          let nextColumnWidth = nextColumn.offsetWidth - delta\n\n          if (newColumnWidth > 15 && nextColumnWidth > 15) {\n            this.resizeColumnElement.style.width = newColumnWidth + 'px'\n            if (nextColumn) {\n              nextColumn.style.width = nextColumnWidth + 'px'\n            }\n          }\n        } else if (this.columnResizeMode === 'expand') {\n          this.$refs.table.style.width =\n            this.$refs.table.offsetWidth + delta + 'px'\n          this.resizeColumnElement.style.width = newColumnWidth + 'px'\n        }\n\n        this.$emit('column-resize-end', {\n          element: this.resizeColumnElement,\n          delta: delta\n        })\n      }\n\n      this.$refs.resizeHelper.style.display = 'none'\n      this.resizeColumn = null\n      DomHandler.removeClass(this.$el, 'p-unselectable-text')\n\n      this.unbindColumnResizeEvents()\n    },\n    resizeTableCells(newColumnWidth, nextColumnWidth) {\n      let colIndex = DomHandler.index(this.resizeColumnElement)\n      let children = this.$refs.table.children\n      for (let child of children) {\n        for (let row of child.children) {\n          let resizeCell = row.children[colIndex]\n          resizeCell.style.flex = '0 0 ' + newColumnWidth + 'px'\n\n          if (this.columnResizeMode === 'fit') {\n            let nextCell = resizeCell.nextElementSibling\n            if (nextCell) {\n              nextCell.style.flex = '0 0 ' + nextColumnWidth + 'px'\n            }\n          }\n        }\n      }\n    },\n    bindColumnResizeEvents() {\n      if (!this.documentColumnResizeListener) {\n        this.documentColumnResizeListener = document.addEventListener(\n          'mousemove',\n          () => {\n            if (this.columnResizing) {\n              this.onColumnResize(event)\n            }\n          }\n        )\n      }\n\n      if (!this.documentColumnResizeEndListener) {\n        this.documentColumnResizeEndListener = document.addEventListener(\n          'mouseup',\n          () => {\n            if (this.columnResizing) {\n              this.columnResizing = false\n              this.onColumnResizeEnd()\n            }\n          }\n        )\n      }\n    },\n    unbindColumnResizeEvents() {\n      if (this.documentColumnResizeListener) {\n        document.removeEventListener(\n          'document',\n          this.documentColumnResizeListener\n        )\n        this.documentColumnResizeListener = null\n      }\n\n      if (this.documentColumnResizeEndListener) {\n        document.removeEventListener(\n          'document',\n          this.documentColumnResizeEndListener\n        )\n        this.documentColumnResizeEndListener = null\n      }\n    },\n    onColumnKeyDown(event, col) {\n      if (\n        event.which === 13 &&\n        event.currentTarget.nodeName === 'TH' &&\n        DomHandler.hasClass(event.currentTarget, 'p-sortable-column')\n      ) {\n        this.onColumnHeaderClick(event, col)\n      }\n    },\n    hasColumnFilter() {\n      if (this.columns) {\n        for (let col of this.columns) {\n          if (col.children && col.children.filter) {\n            return true\n          }\n        }\n      }\n\n      return false\n    },\n    hasFilters() {\n      return (\n        this.filters &&\n        Object.keys(this.filters).length > 0 &&\n        this.filters.constructor === Object\n      )\n    },\n    hasGlobalFilter() {\n      return (\n        this.filters &&\n        Object.prototype.hasOwnProperty.call(this.filters, 'global')\n      )\n    }\n  },\n  computed: {\n    containerClass() {\n      return [\n        'p-treetable p-component',\n        {\n          'p-treetable-hoverable-rows': this.rowHover || this.rowSelectionMode,\n          'p-treetable-auto-layout': this.autoLayout,\n          'p-treetable-resizable': this.resizableColumns,\n          'p-treetable-resizable-fit':\n            this.resizableColumns && this.columnResizeMode === 'fit',\n          'p-treetable-gridlines': this.showGridlines\n        }\n      ]\n    },\n    columns() {\n      if (this.allChildren) {\n        return this.allChildren.filter(\n          (child) => child.$options._propKeys.indexOf('columnKey') !== -1\n        )\n      }\n      return []\n    },\n    processedData() {\n      if (this.lazy) {\n        return this.value\n      } else {\n        if (this.value && this.value.length) {\n          let data = this.value\n\n          if (this.sorted) {\n            if (this.sortMode === 'single') data = this.sortSingle(data)\n            else if (this.sortMode === 'multiple')\n              data = this.sortMultiple(data)\n          }\n\n          if (this.hasFilters()) {\n            data = this.filter(data)\n          }\n\n          return data\n        } else {\n          return null\n        }\n      }\n    },\n    dataToRender() {\n      const data = this.processedData\n\n      if (this.paginator) {\n        const first = this.lazy ? 0 : this.d_first\n        return data.slice(first, first + this.d_rows)\n      } else {\n        return data\n      }\n    },\n    empty() {\n      const data = this.processedData\n      return !data || data.length === 0\n    },\n    sorted() {\n      return (\n        this.d_sortField ||\n        (this.d_multiSortMeta && this.d_multiSortMeta.length > 0)\n      )\n    },\n    hasFooter() {\n      let hasFooter = false\n\n      for (let col of this.columns) {\n        if (col.footer || col.$scopedSlots.footer) {\n          hasFooter = true\n          break\n        }\n      }\n\n      return hasFooter\n    },\n    paginatorTop() {\n      return (\n        this.paginator &&\n        (this.paginatorPosition !== 'bottom' ||\n          this.paginatorPosition === 'both')\n      )\n    },\n    paginatorBottom() {\n      return (\n        this.paginator &&\n        (this.paginatorPosition !== 'top' || this.paginatorPosition === 'both')\n      )\n    },\n    singleSelectionMode() {\n      return this.selectionMode && this.selectionMode === 'single'\n    },\n    multipleSelectionMode() {\n      return this.selectionMode && this.selectionMode === 'multiple'\n    },\n    rowSelectionMode() {\n      return this.singleSelectionMode || this.multipleSelectionMode\n    },\n    totalRecordsLength() {\n      if (this.lazy) {\n        return this.totalRecords\n      } else {\n        const data = this.processedData\n        return data ? data.length : 0\n      }\n    },\n    loadingIconClass() {\n      return ['p-treetable-loading-icon pi-spin', this.loadingIcon]\n    }\n  },\n  components: {\n    TTColumnSlot: TreeTableColumnSlot,\n    TTRow: TreeTableRowLoader,\n    TTPaginator: Paginator,\n    TTHeaderCell: HeaderCell,\n    TTFooterCell: FooterCell\n  }\n}\n</script>\n\n<style>\n.p-treetable {\n  position: relative;\n}\n\n.p-treetable table {\n  border-collapse: collapse;\n  width: 100%;\n  table-layout: fixed;\n}\n\n.p-treetable .p-sortable-column {\n  cursor: pointer;\n  user-select: none;\n}\n\n.p-treetable-auto-layout > .p-treetable-wrapper > table {\n  table-layout: auto;\n}\n\n.p-treetable-hoverable-rows .p-treetable-tbody > tr {\n  cursor: pointer;\n}\n\n.p-treetable-toggler {\n  cursor: pointer;\n  user-select: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-treetable-toggler + .p-checkbox {\n  vertical-align: middle;\n}\n\n.p-treetable-toggler + .p-checkbox + span {\n  vertical-align: middle;\n}\n\n/* Resizable */\n.p-treetable-resizable > .p-treetable-wrapper {\n  overflow-x: auto;\n}\n\n.p-treetable-resizable .p-treetable-thead > tr > th,\n.p-treetable-resizable .p-treetable-tfoot > tr > td,\n.p-treetable-resizable .p-treetable-tbody > tr > td {\n  overflow: hidden;\n}\n\n.p-treetable-resizable .p-resizable-column:not(.p-frozen-column) {\n  background-clip: padding-box;\n  position: relative;\n}\n\n.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer {\n  display: none;\n}\n\n.p-treetable .p-column-resizer {\n  display: block;\n  position: absolute !important;\n  top: 0;\n  right: 0;\n  margin: 0;\n  width: 0.5rem;\n  height: 100%;\n  padding: 0px;\n  cursor: col-resize;\n  border: 1px solid transparent;\n}\n\n.p-treetable .p-column-resizer-helper {\n  width: 1px;\n  position: absolute;\n  z-index: 10;\n  display: none;\n}\n\n.p-treetable .p-treetable-loading-overlay {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n</style>\n"]
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
