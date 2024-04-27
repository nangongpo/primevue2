this.primevue2 = this.primevue2 || {};
this.primevue2.tree = (function (utils, Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
  function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty$1(obj, key, value) { key = _toPropertyKey$1(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : i + ""; }
  function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var TreeNodeTemplate = {
    functional: true,
    props: {
      node: {
        type: null,
        default: null
      },
      template: {
        type: null,
        default: null
      }
    },
    render: function render(createElement, context) {
      var label = function label(node) {
        return typeof node.label === 'function' ? node.label() : node.label;
      };
      var content = context.props.template ? context.props.template({
        node: context.props.node
      }) : label(context.props.node);
      return [content];
    }
  };
  var script$1 = {
    name: 'sub-treenode',
    props: {
      node: {
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
      templates: {
        type: null,
        default: null
      }
    },
    nodeTouched: false,
    methods: {
      toggle: function toggle() {
        this.$emit('node-toggle', this.node);
      },
      onChildNodeToggle: function onChildNodeToggle(node) {
        this.$emit('node-toggle', node);
      },
      onClick: function onClick(event) {
        if (utils.DomHandler.hasClass(event.target, 'p-tree-toggler') || utils.DomHandler.hasClass(event.target.parentElement, 'p-tree-toggler')) {
          return;
        }
        if (this.isCheckboxSelectionMode()) {
          this.toggleCheckbox();
        } else {
          this.$emit('node-click', {
            originalEvent: event,
            nodeTouched: this.nodeTouched,
            node: this.node
          });
        }
        this.nodeTouched = false;
      },
      onChildNodeClick: function onChildNodeClick(event) {
        this.$emit('node-click', event);
      },
      onTouchEnd: function onTouchEnd() {
        this.nodeTouched = true;
      },
      onKeyDown: function onKeyDown(event) {
        var nodeElement = event.target.parentElement;
        switch (event.which) {
          //down arrow
          case 40:
            var listElement = nodeElement.children[1];
            if (listElement) {
              this.focusNode(listElement.children[0]);
            } else {
              var nextNodeElement = nodeElement.nextElementSibling;
              if (nextNodeElement) {
                this.focusNode(nextNodeElement);
              } else {
                var nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement);
                if (nextSiblingAncestor) {
                  this.focusNode(nextSiblingAncestor);
                }
              }
            }
            event.preventDefault();
            break;

          //up arrow
          case 38:
            if (nodeElement.previousElementSibling) {
              this.focusNode(this.findLastVisibleDescendant(nodeElement.previousElementSibling));
            } else {
              var parentNodeElement = this.getParentNodeElement(nodeElement);
              if (parentNodeElement) {
                this.focusNode(parentNodeElement);
              }
            }
            event.preventDefault();
            break;

          //right-left arrows
          case 37:
          case 39:
            this.$emit('node-toggle', this.node);
            event.preventDefault();
            break;

          //enter
          case 13:
            this.onClick(event);
            event.preventDefault();
            break;
        }
      },
      toggleCheckbox: function toggleCheckbox() {
        var _selectionKeys = this.selectionKeys ? _objectSpread$1({}, this.selectionKeys) : {};
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
          var _iterator = _createForOfIteratorHelper$1(node.children),
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
        var _selectionKeys = _objectSpread$1({}, event.selectionKeys);
        var checkedChildCount = 0;
        var childPartialSelected = false;
        var _iterator2 = _createForOfIteratorHelper$1(this.node.children),
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
      onChildCheckboxChange: function onChildCheckboxChange(event) {
        this.$emit('checkbox-change', event);
      },
      findNextSiblingOfAncestor: function findNextSiblingOfAncestor(nodeElement) {
        var parentNodeElement = this.getParentNodeElement(nodeElement);
        if (parentNodeElement) {
          if (parentNodeElement.nextElementSibling) return parentNodeElement.nextElementSibling;else return this.findNextSiblingOfAncestor(parentNodeElement);
        } else {
          return null;
        }
      },
      findLastVisibleDescendant: function findLastVisibleDescendant(nodeElement) {
        var childrenListElement = nodeElement.children[1];
        if (childrenListElement) {
          var lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
          return this.findLastVisibleDescendant(lastChildElement);
        } else {
          return nodeElement;
        }
      },
      getParentNodeElement: function getParentNodeElement(nodeElement) {
        var parentNodeElement = nodeElement.parentElement.parentElement;
        return utils.DomHandler.hasClass(parentNodeElement, 'p-treenode') ? parentNodeElement : null;
      },
      focusNode: function focusNode(element) {
        element.children[0].focus();
      },
      isCheckboxSelectionMode: function isCheckboxSelectionMode() {
        return this.selectionMode === 'checkbox';
      }
    },
    computed: {
      hasChildren: function hasChildren() {
        return this.node.children && this.node.children.length > 0;
      },
      expanded: function expanded() {
        return this.expandedKeys && this.expandedKeys[this.node.key] === true;
      },
      leaf: function leaf() {
        return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
      },
      selectable: function selectable() {
        return this.node.selectable === false ? false : this.selectionMode != null;
      },
      selected: function selected() {
        return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.node.key] === true : false;
      },
      containerClass: function containerClass() {
        return ['p-treenode', {
          'p-treenode-leaf': this.leaf
        }];
      },
      contentClass: function contentClass() {
        return ['p-treenode-content', this.node.styleClass, {
          'p-treenode-selectable': this.selectable,
          'p-highlight': this.checkboxMode ? this.checked : this.selected
        }];
      },
      icon: function icon() {
        return ['p-treenode-icon', this.node.icon];
      },
      toggleIcon: function toggleIcon() {
        return ['p-tree-toggler-icon pi pi-fw', {
          'pi-chevron-down': this.expanded,
          'pi-chevron-right': !this.expanded
        }];
      },
      checkboxClass: function checkboxClass() {
        return ['p-checkbox-box', {
          'p-highlight': this.checked,
          'p-indeterminate': this.partialChecked
        }];
      },
      checkboxIcon: function checkboxIcon() {
        return ['p-checkbox-icon', {
          'pi pi-check': this.checked,
          'pi pi-minus': this.partialChecked
        }];
      },
      checkboxMode: function checkboxMode() {
        return this.selectionMode === 'checkbox' && this.node.selectable !== false;
      },
      checked: function checked() {
        return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].checked : false;
      },
      partialChecked: function partialChecked() {
        return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].partialChecked : false;
      }
    },
    components: {
      TreeNodeTemplate: TreeNodeTemplate
    },
    directives: {
      ripple: Ripple__default["default"]
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
  var __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("li", {
      class: _vm.containerClass
    }, [_c("div", {
      class: _vm.contentClass,
      style: _vm.node.style,
      attrs: {
        tabindex: "0",
        role: "treeitem",
        "aria-expanded": _vm.expanded
      },
      on: {
        click: _vm.onClick,
        keydown: _vm.onKeyDown,
        touchend: _vm.onTouchEnd
      }
    }, [_c("button", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      staticClass: "p-tree-toggler p-link",
      attrs: {
        type: "button",
        tabindex: "-1"
      },
      on: {
        click: _vm.toggle
      }
    }, [_c("span", {
      class: _vm.toggleIcon
    })]), _vm._v(" "), _vm.checkboxMode ? _c("div", {
      staticClass: "p-checkbox p-component"
    }, [_c("div", {
      class: _vm.checkboxClass,
      attrs: {
        role: "checkbox",
        "aria-checked": _vm.checked
      }
    }, [_c("span", {
      class: _vm.checkboxIcon
    })])]) : _vm._e(), _vm._v(" "), _c("span", {
      class: _vm.icon
    }), _vm._v(" "), _c("span", {
      staticClass: "p-treenode-label"
    }, [_c("TreeNodeTemplate", {
      attrs: {
        node: _vm.node,
        template: _vm.templates[_vm.node.type] || _vm.templates["default"]
      }
    })], 1)]), _vm._v(" "), _vm.hasChildren && _vm.expanded ? _c("ul", {
      staticClass: "p-treenode-children",
      attrs: {
        role: "group"
      }
    }, _vm._l(_vm.node.children, function (childNode) {
      return _c("sub-treenode", {
        key: childNode.key,
        attrs: {
          node: childNode,
          templates: _vm.templates,
          expandedKeys: _vm.expandedKeys,
          selectionMode: _vm.selectionMode,
          selectionKeys: _vm.selectionKeys
        },
        on: {
          "node-toggle": _vm.onChildNodeToggle,
          "node-click": _vm.onChildNodeClick,
          "checkbox-change": _vm.propagateUp
        }
      });
    }), 1) : _vm._e()]);
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
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var script = {
    name: 'Tree',
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
      loading: {
        type: Boolean,
        default: false
      },
      loadingIcon: {
        type: String,
        default: 'pi pi-spinner'
      },
      filter: {
        type: Boolean,
        default: false
      },
      filterBy: {
        type: String,
        default: 'label'
      },
      filterMode: {
        type: String,
        default: 'lenient'
      },
      filterPlaceholder: {
        type: String,
        default: null
      },
      filterLocale: {
        type: String,
        default: undefined
      }
    },
    data: function data() {
      return {
        d_expandedKeys: this.expandedKeys || {},
        filterValue: null
      };
    },
    watch: {
      expandedKeys: function expandedKeys(newValue) {
        this.d_expandedKeys = newValue;
      }
    },
    methods: {
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
        if (this.selectionMode != null && event.node.selectable !== false) {
          var metaSelection = event.nodeTouched ? false : this.metaKeySelection;
          var _selectionKeys = metaSelection ? this.handleSelectionWithMetaKey(event) : this.handleSelectionWithoutMetaKey(event);
          this.$emit('update:selectionKeys', _selectionKeys);
        }
      },
      onCheckboxChange: function onCheckboxChange(event) {
        this.$emit('update:selectionKeys', event.selectionKeys);
        if (event.check) this.$emit('node-select', event.node);else this.$emit('node-unselect', event.node);
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
      isSingleSelectionMode: function isSingleSelectionMode() {
        return this.selectionMode === 'single';
      },
      isMultipleSelectionMode: function isMultipleSelectionMode() {
        return this.selectionMode === 'multiple';
      },
      isNodeSelected: function isNodeSelected(node) {
        return this.selectionMode && this.selectionKeys ? this.selectionKeys[node.key] === true : false;
      },
      isChecked: function isChecked(node) {
        return this.selectionKeys ? this.selectionKeys[node.key] && this.selectionKeys[node.key].checked : false;
      },
      isNodeLeaf: function isNodeLeaf(node) {
        return node.leaf === false ? false : !(node.children && node.children.length);
      },
      onFilterKeydown: function onFilterKeydown(event) {
        if (event.which === 13) {
          event.preventDefault();
        }
      },
      findFilteredNodes: function findFilteredNodes(node, paramsWithoutNode) {
        if (node) {
          var matched = false;
          if (node.children) {
            var childNodes = _toConsumableArray(node.children);
            node.children = [];
            var _iterator = _createForOfIteratorHelper(childNodes),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var childNode = _step.value;
                var copyChildNode = _objectSpread({}, childNode);
                if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                  matched = true;
                  node.children.push(copyChildNode);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          if (matched) {
            return true;
          }
        }
      },
      isFilterMatched: function isFilterMatched(node, _ref) {
        var searchFields = _ref.searchFields,
          filterText = _ref.filterText,
          strict = _ref.strict;
        var matched = false;
        var _iterator2 = _createForOfIteratorHelper(searchFields),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var field = _step2.value;
            var fieldValue = String(utils.ObjectUtils.resolveFieldData(node, field)).toLocaleLowerCase(this.filterLocale);
            if (fieldValue.indexOf(filterText) > -1) {
              matched = true;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (!matched || strict && !this.isNodeLeaf(node)) {
          matched = this.findFilteredNodes(node, {
            searchFields: searchFields,
            filterText: filterText,
            strict: strict
          }) || matched;
        }
        return matched;
      }
    },
    computed: {
      containerClass: function containerClass() {
        return ['p-tree p-component', {
          'p-tree-selectable': this.selectionMode != null,
          'p-tree-loading': this.loading
        }];
      },
      loadingIconClass: function loadingIconClass() {
        return ['p-tree-loading-icon pi-spin', this.loadingIcon];
      },
      filteredValue: function filteredValue() {
        var filteredNodes = [];
        var searchFields = this.filterBy.split(',');
        var filterText = this.filterValue.trim().toLocaleLowerCase(this.filterLocale);
        var strict = this.filterMode === 'strict';
        var _iterator3 = _createForOfIteratorHelper(this.value),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var node = _step3.value;
            var _node = _objectSpread({}, node);
            var paramsWithoutNode = {
              searchFields: searchFields,
              filterText: filterText,
              strict: strict
            };
            if (strict && (this.findFilteredNodes(_node, paramsWithoutNode) || this.isFilterMatched(_node, paramsWithoutNode)) || !strict && (this.isFilterMatched(_node, paramsWithoutNode) || this.findFilteredNodes(_node, paramsWithoutNode))) {
              filteredNodes.push(_node);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return filteredNodes;
      },
      valueToRender: function valueToRender() {
        if (this.filterValue && this.filterValue.trim().length > 0) return this.filteredValue;else return this.value;
      }
    },
    components: {
      TreeNode: __vue_component__$1
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
    }, [_vm.loading ? [_c("div", {
      staticClass: "p-tree-loading-overlay p-component-overlay"
    }, [_c("i", {
      class: _vm.loadingIconClass
    })])] : _vm._e(), _vm._v(" "), _vm.filter ? _c("div", {
      staticClass: "p-tree-filter-container"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.filterValue,
        expression: "filterValue"
      }],
      staticClass: "p-tree-filter p-inputtext p-component",
      attrs: {
        type: "text",
        autocomplete: "off",
        placeholder: _vm.filterPlaceholder
      },
      domProps: {
        value: _vm.filterValue
      },
      on: {
        keydown: _vm.onFilterKeydown,
        input: function input($event) {
          if ($event.target.composing) {
            return;
          }
          _vm.filterValue = $event.target.value;
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "p-tree-filter-icon pi pi-search"
    })]) : _vm._e(), _vm._v(" "), _c("ul", {
      staticClass: "p-tree-container",
      attrs: {
        role: "tree"
      }
    }, _vm._l(_vm.valueToRender, function (node) {
      return _c("TreeNode", {
        key: node.key,
        attrs: {
          node: node,
          templates: _vm.$scopedSlots,
          expandedKeys: _vm.d_expandedKeys,
          selectionMode: _vm.selectionMode,
          selectionKeys: _vm.selectionKeys
        },
        on: {
          "node-toggle": _vm.onNodeToggle,
          "node-click": _vm.onNodeClick,
          "checkbox-change": _vm.onCheckboxChange
        }
      });
    }), 1)], 2);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-53e35990_0", {
      source: "\n.p-tree-container {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  overflow: auto;\n}\n.p-treenode-children {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.p-treenode-selectable {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-tree-toggler {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: relative;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n.p-treenode-leaf > .p-treenode-content .p-tree-toggler {\n  visibility: hidden;\n}\n.p-treenode-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-tree-filter {\n  width: 100%;\n}\n.p-tree-filter-container {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.p-tree-filter-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5rem;\n}\n.p-tree-loading {\n  position: relative;\n  min-height: 4rem;\n}\n.p-tree .p-tree-loading-overlay {\n  position: absolute;\n  z-index: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/tree/Tree.vue"],
        "names": [],
        "mappings": ";AAwTA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;EACA,cAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;AACA;AAEA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AACA;AAEA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,gBAAA;EACA,kBAAA;EACA,sBAAA;MAAA,oBAAA;UAAA,cAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AAEA;EACA,WAAA;AACA;AAEA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;AACA;AAEA;EACA,kBAAA;EACA,QAAA;EACA,mBAAA;AACA;AAEA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA",
        "file": "Tree.vue",
        "sourcesContent": ["<template>\n  <div :class=\"containerClass\">\n    <template v-if=\"loading\">\n      <div class=\"p-tree-loading-overlay p-component-overlay\">\n        <i :class=\"loadingIconClass\" />\n      </div>\n    </template>\n    <div class=\"p-tree-filter-container\" v-if=\"filter\">\n      <input\n        type=\"text\"\n        autocomplete=\"off\"\n        class=\"p-tree-filter p-inputtext p-component\"\n        :placeholder=\"filterPlaceholder\"\n        @keydown=\"onFilterKeydown\"\n        v-model=\"filterValue\" />\n      <span class=\"p-tree-filter-icon pi pi-search\"></span>\n    </div>\n    <ul class=\"p-tree-container\" role=\"tree\">\n      <TreeNode\n        v-for=\"node of valueToRender\"\n        :key=\"node.key\"\n        :node=\"node\"\n        :templates=\"$scopedSlots\"\n        :expandedKeys=\"d_expandedKeys\"\n        @node-toggle=\"onNodeToggle\"\n        @node-click=\"onNodeClick\"\n        :selectionMode=\"selectionMode\"\n        :selectionKeys=\"selectionKeys\"\n        @checkbox-change=\"onCheckboxChange\"></TreeNode>\n    </ul>\n  </div>\n</template>\n\n<script>\nimport TreeNode from './TreeNode.vue'\nimport { ObjectUtils } from 'primevue2/utils'\n\nexport default {\n  name: 'Tree',\n  props: {\n    value: {\n      type: null,\n      default: null\n    },\n    expandedKeys: {\n      type: null,\n      default: null\n    },\n    selectionKeys: {\n      type: null,\n      default: null\n    },\n    selectionMode: {\n      type: String,\n      default: null\n    },\n    metaKeySelection: {\n      type: Boolean,\n      default: true\n    },\n    loading: {\n      type: Boolean,\n      default: false\n    },\n    loadingIcon: {\n      type: String,\n      default: 'pi pi-spinner'\n    },\n    filter: {\n      type: Boolean,\n      default: false\n    },\n    filterBy: {\n      type: String,\n      default: 'label'\n    },\n    filterMode: {\n      type: String,\n      default: 'lenient'\n    },\n    filterPlaceholder: {\n      type: String,\n      default: null\n    },\n    filterLocale: {\n      type: String,\n      default: undefined\n    }\n  },\n  data() {\n    return {\n      d_expandedKeys: this.expandedKeys || {},\n      filterValue: null\n    }\n  },\n  watch: {\n    expandedKeys(newValue) {\n      this.d_expandedKeys = newValue\n    }\n  },\n  methods: {\n    onNodeToggle(node) {\n      const key = node.key\n\n      if (this.d_expandedKeys[key]) {\n        delete this.d_expandedKeys[key]\n        this.$emit('node-collapse', node)\n      } else {\n        this.d_expandedKeys[key] = true\n        this.$emit('node-expand', node)\n      }\n\n      this.d_expandedKeys = { ...this.d_expandedKeys }\n      this.$emit('update:expandedKeys', this.d_expandedKeys)\n    },\n    onNodeClick(event) {\n      if (this.selectionMode != null && event.node.selectable !== false) {\n        const metaSelection = event.nodeTouched ? false : this.metaKeySelection\n        const _selectionKeys = metaSelection\n          ? this.handleSelectionWithMetaKey(event)\n          : this.handleSelectionWithoutMetaKey(event)\n\n        this.$emit('update:selectionKeys', _selectionKeys)\n      }\n    },\n    onCheckboxChange(event) {\n      this.$emit('update:selectionKeys', event.selectionKeys)\n\n      if (event.check) this.$emit('node-select', event.node)\n      else this.$emit('node-unselect', event.node)\n    },\n    handleSelectionWithMetaKey(event) {\n      const originalEvent = event.originalEvent\n      const node = event.node\n      const metaKey = originalEvent.metaKey || originalEvent.ctrlKey\n      const selected = this.isNodeSelected(node)\n      let _selectionKeys\n\n      if (selected && metaKey) {\n        if (this.isSingleSelectionMode()) {\n          _selectionKeys = {}\n        } else {\n          _selectionKeys = { ...this.selectionKeys }\n          delete _selectionKeys[node.key]\n        }\n\n        this.$emit('node-unselect', node)\n      } else {\n        if (this.isSingleSelectionMode()) {\n          _selectionKeys = {}\n        } else if (this.isMultipleSelectionMode()) {\n          _selectionKeys = !metaKey\n            ? {}\n            : this.selectionKeys\n              ? { ...this.selectionKeys }\n              : {}\n        }\n\n        _selectionKeys[node.key] = true\n        this.$emit('node-select', node)\n      }\n\n      return _selectionKeys\n    },\n    handleSelectionWithoutMetaKey(event) {\n      const node = event.node\n      const selected = this.isNodeSelected(node)\n      let _selectionKeys\n\n      if (this.isSingleSelectionMode()) {\n        if (selected) {\n          _selectionKeys = {}\n          this.$emit('node-unselect', node)\n        } else {\n          _selectionKeys = {}\n          _selectionKeys[node.key] = true\n          this.$emit('node-select', node)\n        }\n      } else {\n        if (selected) {\n          _selectionKeys = { ...this.selectionKeys }\n          delete _selectionKeys[node.key]\n\n          this.$emit('node-unselect', node)\n        } else {\n          _selectionKeys = this.selectionKeys ? { ...this.selectionKeys } : {}\n          _selectionKeys[node.key] = true\n\n          this.$emit('node-select', node)\n        }\n      }\n\n      return _selectionKeys\n    },\n    isSingleSelectionMode() {\n      return this.selectionMode === 'single'\n    },\n    isMultipleSelectionMode() {\n      return this.selectionMode === 'multiple'\n    },\n    isNodeSelected(node) {\n      return this.selectionMode && this.selectionKeys\n        ? this.selectionKeys[node.key] === true\n        : false\n    },\n    isChecked(node) {\n      return this.selectionKeys\n        ? this.selectionKeys[node.key] && this.selectionKeys[node.key].checked\n        : false\n    },\n    isNodeLeaf(node) {\n      return node.leaf === false\n        ? false\n        : !(node.children && node.children.length)\n    },\n    onFilterKeydown(event) {\n      if (event.which === 13) {\n        event.preventDefault()\n      }\n    },\n    findFilteredNodes(node, paramsWithoutNode) {\n      if (node) {\n        let matched = false\n        if (node.children) {\n          let childNodes = [...node.children]\n          node.children = []\n          for (let childNode of childNodes) {\n            let copyChildNode = { ...childNode }\n            if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {\n              matched = true\n              node.children.push(copyChildNode)\n            }\n          }\n        }\n\n        if (matched) {\n          return true\n        }\n      }\n    },\n    isFilterMatched(node, { searchFields, filterText, strict }) {\n      let matched = false\n      for (let field of searchFields) {\n        let fieldValue = String(\n          ObjectUtils.resolveFieldData(node, field)\n        ).toLocaleLowerCase(this.filterLocale)\n        if (fieldValue.indexOf(filterText) > -1) {\n          matched = true\n        }\n      }\n\n      if (!matched || (strict && !this.isNodeLeaf(node))) {\n        matched =\n          this.findFilteredNodes(node, { searchFields, filterText, strict }) ||\n          matched\n      }\n\n      return matched\n    }\n  },\n  computed: {\n    containerClass() {\n      return [\n        'p-tree p-component',\n        {\n          'p-tree-selectable': this.selectionMode != null,\n          'p-tree-loading': this.loading\n        }\n      ]\n    },\n    loadingIconClass() {\n      return ['p-tree-loading-icon pi-spin', this.loadingIcon]\n    },\n    filteredValue() {\n      let filteredNodes = []\n      const searchFields = this.filterBy.split(',')\n      const filterText = this.filterValue\n        .trim()\n        .toLocaleLowerCase(this.filterLocale)\n      const strict = this.filterMode === 'strict'\n\n      for (let node of this.value) {\n        let _node = { ...node }\n        let paramsWithoutNode = { searchFields, filterText, strict }\n\n        if (\n          (strict &&\n            (this.findFilteredNodes(_node, paramsWithoutNode) ||\n              this.isFilterMatched(_node, paramsWithoutNode))) ||\n          (!strict &&\n            (this.isFilterMatched(_node, paramsWithoutNode) ||\n              this.findFilteredNodes(_node, paramsWithoutNode)))\n        ) {\n          filteredNodes.push(_node)\n        }\n      }\n\n      return filteredNodes\n    },\n    valueToRender() {\n      if (this.filterValue && this.filterValue.trim().length > 0)\n        return this.filteredValue\n      else return this.value\n    }\n  },\n  components: {\n    TreeNode: TreeNode\n  }\n}\n</script>\n\n<style>\n.p-tree-container {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  overflow: auto;\n}\n\n.p-treenode-children {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.p-treenode-selectable {\n  cursor: pointer;\n  user-select: none;\n}\n\n.p-tree-toggler {\n  cursor: pointer;\n  user-select: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n  flex-shrink: 0;\n}\n\n.p-treenode-leaf > .p-treenode-content .p-tree-toggler {\n  visibility: hidden;\n}\n\n.p-treenode-content {\n  display: flex;\n  align-items: center;\n}\n\n.p-tree-filter {\n  width: 100%;\n}\n\n.p-tree-filter-container {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n\n.p-tree-filter-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5rem;\n}\n\n.p-tree-loading {\n  position: relative;\n  min-height: 4rem;\n}\n\n.p-tree .p-tree-loading-overlay {\n  position: absolute;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n</style>\n"]
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

  return __vue_component__;

})(primevue2.utils, primevue2.ripple);
