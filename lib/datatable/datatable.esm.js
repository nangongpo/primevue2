import { DomHandler, ConnectedOverlayScrollHandler, ObjectUtils, UniqueComponentId } from 'primevue2/utils';
import { FilterOperator, FilterService, FilterMatchMode } from 'primevue2/api';
import Paginator from 'primevue2/paginator';
import OverlayEventBus from 'primevue2/overlayeventbus';
import Dropdown from 'primevue2/dropdown';
import Button from 'primevue2/button';
import Ripple from 'primevue2/ripple';

var script$b = {
  functional: true,
  props: {
    column: {
      type: null,
      default: null
    },
    data: {
      type: null,
      default: null
    },
    index: {
      type: Number,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    frozenRow: {
      type: Boolean,
      default: false
    },
    field: {
      type: null,
      default: null
    },
    filterModel: {
      type: null,
      default: null
    },
    filterCallback: {
      type: null,
      default: null
    },
    editorInitCallback: {
      type: null,
      default: null
    },
    editorSaveCallback: {
      type: null,
      default: null
    },
    editorCancelCallback: {
      type: null,
      default: null
    }
  },
  render: function render(createElement, context) {
    var content = context.props.column.$scopedSlots[context.props.type]({
      'data': context.props.data,
      'index': context.props.index,
      'column': context.props.column,
      'frozenRow': context.props.frozenRow,
      'field': context.props.field,
      'filterModel': context.props.filterModel,
      'filterCallback': context.props.filterCallback,
      'editorInitCallback': context.props.editorInitCallback,
      'editorSaveCallback': context.props.editorSaveCallback,
      'editorCancelCallback': context.props.editorCancelCallback
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
var __vue_script__$b = script$b;

/* template */

/* style */
var __vue_inject_styles__$b = undefined;
/* scoped */
var __vue_scope_id__$b = undefined;
/* module identifier */
var __vue_module_identifier__$b = undefined;
/* functional template */
var __vue_is_functional_template__$b = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$b = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, undefined, undefined);

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

var script$a = {
  inheritAttrs: false,
  props: {
    checked: null
  },
  data: function data() {
    return {
      focused: false
    };
  },
  methods: {
    onClick: function onClick(event) {
      if (!this.$attrs.disabled) {
        this.focused = true;
        this.$emit('change', {
          originalEvent: event,
          checked: !this.checked
        });
      }
    },
    onFocus: function onFocus() {
      this.focused = true;
    },
    onBlur: function onBlur() {
      this.focused = false;
    }
  }
};

/* script */
var __vue_script__$a = script$a;

/* template */
var __vue_render__$a = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    class: ["p-checkbox p-component", {
      "p-checkbox-focused": _vm.focused,
      "p-disabled": _vm.$attrs.disabled
    }],
    on: {
      click: _vm.onClick,
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) {
          return null;
        }
        $event.preventDefault();
        return _vm.onClick.apply(null, arguments);
      }
    }
  }, [_c("div", {
    ref: "box",
    class: ["p-checkbox-box p-component", {
      "p-highlight": _vm.checked,
      "p-disabled": _vm.$attrs.disabled,
      "p-focus": _vm.focused
    }],
    attrs: {
      role: "checkbox",
      "aria-checked": _vm.checked,
      tabindex: _vm.$attrs.disabled ? null : "0"
    },
    on: {
      focus: function focus($event) {
        return _vm.onFocus($event);
      },
      blur: function blur($event) {
        return _vm.onBlur($event);
      }
    }
  }, [_c("span", {
    class: ["p-checkbox-icon", {
      "pi pi-check": _vm.checked
    }]
  })])]);
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

/* style */
var __vue_inject_styles__$a = undefined;
/* scoped */
var __vue_scope_id__$a = undefined;
/* module identifier */
var __vue_module_identifier__$a = undefined;
/* functional template */
var __vue_is_functional_template__$a = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);

function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$1(obj, key, value) { key = _toPropertyKey$1(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : i + ""; }
function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ColumnFilterTemplate = {
  functional: true,
  props: {
    data: {
      type: null,
      default: null
    },
    field: {
      type: null,
      default: null
    },
    filterModel: {
      type: null,
      default: null
    },
    filterCallback: {
      type: null,
      default: null
    },
    type: {
      type: String,
      default: null
    }
  },
  render: function render(createElement, context) {
    var content = null;
    if (context.props.data) {
      content = context.props.data({
        // 'data': data,
        'field': context.props.field,
        'filterModel': context.props.filterModel,
        'filterCallback': context.props.filterCallback
      });
    }
    return [content];
  }
};
var script$9 = {
  props: {
    field: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    display: {
      type: String,
      default: null
    },
    showMenu: {
      type: Boolean,
      default: true
    },
    matchMode: {
      type: String,
      default: null
    },
    showOperator: {
      type: Boolean,
      default: true
    },
    showClearButton: {
      type: Boolean,
      default: true
    },
    showApplyButton: {
      type: Boolean,
      default: true
    },
    showMatchModes: {
      type: Boolean,
      default: true
    },
    showAddButton: {
      type: Boolean,
      default: true
    },
    matchModeOptions: {
      type: Array,
      default: null
    },
    maxConstraints: {
      type: Number,
      default: 2
    },
    filterElement: null,
    filterHeaderTemplate: null,
    filterFooterTemplate: null,
    filterClearTemplate: null,
    filterApplyTemplate: null,
    filters: {
      type: Object,
      default: null
    },
    filtersStore: {
      type: Object,
      default: null
    },
    filterMenuClass: {
      type: String,
      default: null
    },
    filterMenuStyle: {
      type: null,
      default: null
    },
    templates: {
      type: null,
      default: null
    }
  },
  data: function data() {
    return {
      overlayVisible: false,
      defaultMatchMode: null,
      defaultOperator: null
    };
  },
  selfClick: false,
  overlayEventListener: null,
  beforeDestroy: function beforeDestroy() {
    if (this.overlayEventListener) {
      OverlayEventBus.off('overlay-click', this.overlayEventListener);
      this.overlayEventListener = null;
    }
    if (this.$refs.overlay) {
      this.onOverlayHide();
    }
  },
  mounted: function mounted() {
    if (this.filters && this.filters[this.field]) {
      var fieldFilters = this.filters[this.field];
      if (fieldFilters.operator) {
        this.defaultMatchMode = fieldFilters.constraints[0].matchMode;
        this.defaultOperator = fieldFilters.operator;
      } else {
        this.defaultMatchMode = this.filters[this.field].matchMode;
      }
    }
  },
  methods: {
    clearFilter: function clearFilter() {
      var _filters = _objectSpread$1({}, this.filters);
      if (_filters[this.field].operator) {
        _filters[this.field].constraints.splice(1);
        _filters[this.field].operator = this.defaultOperator;
        _filters[this.field].constraints[0] = {
          value: null,
          matchMode: this.defaultMatchMode
        };
      } else {
        _filters[this.field].value = null;
        _filters[this.field].matchMode = this.defaultMatchMode;
      }
      this.$emit('filter-clear');
      this.$emit('filter-change', _filters);
      this.$emit('filter-apply');
      this.hide();
    },
    applyFilter: function applyFilter() {
      this.$emit('apply-click', {
        field: this.field,
        constraints: this.filters[this.field]
      });
      this.$emit('filter-apply');
      this.hide();
    },
    hasFilter: function hasFilter() {
      if (this.filtersStore) {
        var fieldFilter = this.filtersStore[this.field];
        if (fieldFilter) {
          if (fieldFilter.operator) return !this.isFilterBlank(fieldFilter.constraints[0].value);else return !this.isFilterBlank(fieldFilter.value);
        }
      }
      return false;
    },
    hasRowFilter: function hasRowFilter() {
      return this.filters[this.field] && !this.isFilterBlank(this.filters[this.field].value);
    },
    isFilterBlank: function isFilterBlank(filter) {
      if (filter !== null && filter !== undefined) {
        if (typeof filter === 'string' && filter.trim().length == 0 || filter instanceof Array && filter.length == 0) return true;else return false;
      }
      return true;
    },
    toggleMenu: function toggleMenu() {
      this.overlayVisible = !this.overlayVisible;
    },
    onToggleButtonKeyDown: function onToggleButtonKeyDown(event) {
      switch (event.key) {
        case 'Escape':
        case 'Tab':
          this.overlayVisible = false;
          break;
        case 'ArrowDown':
          if (this.overlayVisible) {
            var focusable = DomHandler.getFocusableElements(this.$refs.overlay);
            if (focusable) {
              focusable[0].focus();
            }
            event.preventDefault();
          } else if (event.altKey) {
            this.overlayVisible = true;
            event.preventDefault();
          }
          break;
      }
    },
    onEscape: function onEscape() {
      this.overlayVisible = false;
      if (this.$refs.icon) {
        this.$refs.icon.focus();
      }
    },
    onRowMatchModeChange: function onRowMatchModeChange(matchMode) {
      var _filters = _objectSpread$1({}, this.filters);
      _filters[this.field].matchMode = matchMode;
      this.$emit('matchmode-change', {
        field: this.field,
        matchMode: matchMode
      });
      this.$emit('filter-change', _filters);
      this.$emit('filter-apply');
      this.hide();
    },
    onRowMatchModeKeyDown: function onRowMatchModeKeyDown(event) {
      var item = event.target;
      switch (event.key) {
        case 'ArrowDown':
          var nextItem = this.findNextItem(item);
          if (nextItem) {
            item.removeAttribute('tabindex');
            nextItem.tabIndex = '0';
            nextItem.focus();
          }
          event.preventDefault();
          break;
        case 'ArrowUp':
          var prevItem = this.findPrevItem(item);
          if (prevItem) {
            item.removeAttribute('tabindex');
            prevItem.tabIndex = '0';
            prevItem.focus();
          }
          event.preventDefault();
          break;
      }
    },
    isRowMatchModeSelected: function isRowMatchModeSelected(matchMode) {
      return this.filters[this.field].matchMode === matchMode;
    },
    onOperatorChange: function onOperatorChange(value) {
      var _filters = _objectSpread$1({}, this.filters);
      _filters[this.field].operator = value;
      this.$emit('filter-change', _filters);
      this.$emit('operator-change', {
        field: this.field,
        operator: value
      });
      if (!this.showApplyButton) {
        this.$emit('filter-apply');
      }
    },
    onMenuMatchModeChange: function onMenuMatchModeChange(value, index) {
      var _filters = _objectSpread$1({}, this.filters);
      _filters[this.field].constraints[index].matchMode = value;
      this.$emit('matchmode-change', {
        field: this.field,
        matchMode: value,
        index: index
      });
      if (!this.showApplyButton) {
        this.$emit('filter-apply');
      }
    },
    addConstraint: function addConstraint() {
      var _filters = _objectSpread$1({}, this.filters);
      var newConstraint = {
        value: null,
        matchMode: this.defaultMatchMode
      };
      _filters[this.field].constraints.push(newConstraint);
      this.$emit('constraint-add', {
        field: this.field,
        constraing: newConstraint
      });
      this.$emit('filter-change', _filters);
      if (!this.showApplyButton) {
        this.$emit('filter-apply');
      }
    },
    removeConstraint: function removeConstraint(index) {
      var _filters = _objectSpread$1({}, this.filters);
      var removedConstraint = _filters[this.field].constraints.splice(index, 1);
      this.$emit('constraint-remove', {
        field: this.field,
        constraing: removedConstraint
      });
      this.$emit('filter-change', _filters);
      if (!this.showApplyButton) {
        this.$emit('filter-apply');
      }
    },
    filterCallback: function filterCallback() {
      this.$emit('filter-apply');
    },
    findNextItem: function findNextItem(item) {
      var nextItem = item.nextElementSibling;
      if (nextItem) return DomHandler.hasClass(nextItem, 'p-column-filter-separator') ? this.findNextItem(nextItem) : nextItem;else return item.parentElement.firstElementChild;
    },
    findPrevItem: function findPrevItem(item) {
      var prevItem = item.previousElementSibling;
      if (prevItem) DomHandler.hasClass(prevItem, 'p-column-filter-separator') ? this.findPrevItem(prevItem) : prevItem;else return item.parentElement.lastElementChild;
    },
    hide: function hide() {
      this.overlayVisible = false;
    },
    onContentClick: function onContentClick() {
      this.selfClick = true;
      OverlayEventBus.emit('overlay-click', {
        originalEvent: event,
        target: this.$refs.overlay
      });
    },
    onContentMouseDown: function onContentMouseDown() {
      this.selfClick = true;
    },
    onOverlayEnter: function onOverlayEnter() {
      var _this = this;
      if (this.filterMenuStyle) {
        DomHandler.applyStyle(this.$refs.overlay, this.filterMenuStyle);
      }
      this.$refs.overlay.style.zIndex = String(DomHandler.generateZIndex());
      document.body.appendChild(this.$refs.overlay);
      DomHandler.absolutePosition(this.$refs.overlay, this.$refs.icon);
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.overlayEventListener = function (e) {
        if (!_this.isOutsideClicked(e.target)) {
          _this.selfClick = true;
        }
      };
      OverlayEventBus.on('overlay-click', this.overlayEventListener);
    },
    onOverlayLeave: function onOverlayLeave() {
      document.body.removeChild(this.$refs.overlay);
      this.onOverlayHide();
    },
    onOverlayHide: function onOverlayHide() {
      this.unbindOutsideClickListener();
      this.unbindResizeListener();
      this.unbindScrollListener();
      OverlayEventBus.off('overlay-click', this.overlayEventListener);
      this.overlayEventListener = null;
    },
    isOutsideClicked: function isOutsideClicked(target) {
      return !this.isTargetClicked(target) && this.$refs.overlay && !(this.$refs.overlay.isSameNode(target) || this.$refs.overlay.contains(target));
    },
    isTargetClicked: function isTargetClicked(target) {
      return this.$refs.icon && (this.$refs.icon.isSameNode(target) || this.$refs.icon.contains(target));
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this2 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function (event) {
          if (_this2.overlayVisible && !_this2.selfClick && _this2.isOutsideClicked(event.target)) {
            _this2.overlayVisible = false;
          }
          _this2.selfClick = false;
        };
        document.addEventListener('click', this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener('click', this.outsideClickListener);
        this.outsideClickListener = null;
        this.selfClick = false;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this3 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.icon, function () {
          if (_this3.overlayVisible) {
            _this3.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this4 = this;
      if (!this.resizeListener) {
        this.resizeListener = function () {
          if (_this4.overlayVisible) {
            _this4.hide();
          }
        };
        window.addEventListener('resize', this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        this.resizeListener = null;
      }
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-column-filter p-fluid', {
        'p-column-filter-row': this.display === 'row',
        'p-column-filter-menu': this.display === 'menu'
      }];
    },
    overlayClass: function overlayClass() {
      return [this.filterMenuClass, {
        'p-column-filter-overlay p-component p-fluid': true,
        'p-column-filter-overlay-menu': this.display === 'menu',
        'p-input-filled': this.$primevue.config.inputStyle === 'filled',
        'p-ripple-disabled': this.$primevue.config.ripple === false
      }];
    },
    showMenuButton: function showMenuButton() {
      return this.showMenu && (this.display === 'row' ? this.type !== 'boolean' : true);
    },
    matchModes: function matchModes() {
      var _this5 = this;
      return this.matchModeOptions || this.$primevue.config.filterMatchModeOptions[this.type].map(function (key) {
        return {
          label: _this5.$primevue.config.locale[key],
          value: key
        };
      });
    },
    isShowMatchModes: function isShowMatchModes() {
      return this.type !== 'boolean' && this.showMatchModes && this.matchModes;
    },
    operatorOptions: function operatorOptions() {
      return [{
        label: this.$primevue.config.locale.matchAll,
        value: FilterOperator.AND
      }, {
        label: this.$primevue.config.locale.matchAny,
        value: FilterOperator.OR
      }];
    },
    noFilterLabel: function noFilterLabel() {
      return this.$primevue.config.locale.noFilter;
    },
    isShowOperator: function isShowOperator() {
      return this.showOperator && this.filters[this.field].operator;
    },
    operator: function operator() {
      return this.filters[this.field].operator;
    },
    fieldConstraints: function fieldConstraints() {
      return this.filters[this.field].constraints || [this.filters[this.field]];
    },
    showRemoveIcon: function showRemoveIcon() {
      return this.fieldConstraints.length > 1;
    },
    removeRuleButtonLabel: function removeRuleButtonLabel() {
      return this.$primevue.config.locale.removeRule;
    },
    addRuleButtonLabel: function addRuleButtonLabel() {
      return this.$primevue.config.locale.addRule;
    },
    isShowAddConstraint: function isShowAddConstraint() {
      return this.showAddButton && this.filters[this.field].operator && this.fieldConstraints && this.fieldConstraints.length < this.maxConstraints;
    },
    clearButtonLabel: function clearButtonLabel() {
      return this.$primevue.config.locale.clear;
    },
    applyButtonLabel: function applyButtonLabel() {
      return this.$primevue.config.locale.apply;
    }
  },
  components: {
    'ColumnFilterTemplate': ColumnFilterTemplate,
    'CFDropdown': Dropdown,
    'CFButton': Button
  }
};

/* script */
var __vue_script__$9 = script$9;

/* template */
var __vue_render__$9 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    class: _vm.containerClass
  }, [_vm.display === "row" ? _c("div", {
    staticClass: "p-fluid p-column-filter-element"
  }, [_c("ColumnFilterTemplate", {
    attrs: {
      data: _vm.filterElement,
      field: _vm.field,
      filterModel: _vm.filters[_vm.field],
      filterCallback: _vm.filterCallback,
      type: "filter"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.showMenuButton ? _c("button", {
    ref: "icon",
    staticClass: "p-column-filter-menu-button p-link",
    class: {
      "p-column-filter-menu-button-open": _vm.overlayVisible,
      "p-column-filter-menu-button-active": _vm.hasFilter()
    },
    attrs: {
      type: "button",
      "aria-haspopup": "true",
      "aria-expanded": _vm.overlayVisible
    },
    on: {
      click: function click($event) {
        return _vm.toggleMenu();
      },
      keydown: function keydown($event) {
        return _vm.onToggleButtonKeyDown($event);
      }
    }
  }, [_c("span", {
    staticClass: "pi pi-filter-icon pi-filter"
  })]) : _vm._e(), _vm._v(" "), _vm.showClearButton && _vm.display === "row" ? _c("button", {
    staticClass: "p-column-filter-clear-button p-link",
    class: {
      "p-hidden-space": !_vm.hasRowFilter()
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.clearFilter();
      }
    }
  }, [_c("span", {
    staticClass: "pi pi-filter-slash"
  })]) : _vm._e(), _vm._v(" "), _c("transition", {
    attrs: {
      name: "p-connected-overlay"
    },
    on: {
      enter: _vm.onOverlayEnter,
      leave: _vm.onOverlayLeave
    }
  }, [_vm.overlayVisible ? _c("div", {
    ref: "overlay",
    class: _vm.overlayClass,
    on: {
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "escape", undefined, $event.key, undefined)) {
          return null;
        }
        return _vm.onEscape.apply(null, arguments);
      },
      click: _vm.onContentClick,
      mousedown: _vm.onContentMouseDown
    }
  }, [_c("ColumnFilterTemplate", {
    attrs: {
      data: _vm.filterHeaderTemplate,
      field: _vm.field,
      filterModel: _vm.filters[_vm.field],
      filterCallback: _vm.filterCallback,
      type: "filterheader"
    }
  }), _vm._v(" "), _vm.display === "row" ? [_c("ul", {
    staticClass: "p-column-filter-row-items"
  }, [_vm._l(_vm.matchModes, function (matchMode, i) {
    return _c("li", {
      key: matchMode.label,
      staticClass: "p-column-filter-row-item",
      class: {
        "p-highlight": _vm.isRowMatchModeSelected(matchMode.value)
      },
      attrs: {
        tabindex: i === 0 ? "0" : null
      },
      on: {
        click: function click($event) {
          return _vm.onRowMatchModeChange(matchMode.value);
        },
        keydown: [function ($event) {
          return _vm.onRowMatchModeKeyDown($event);
        }, function ($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
            return null;
          }
          $event.preventDefault();
          return _vm.onRowMatchModeChange(matchMode.value);
        }]
      }
    }, [_vm._v("\n            " + _vm._s(matchMode.label) + "\n          ")]);
  }), _vm._v(" "), _c("li", {
    staticClass: "p-column-filter-separator"
  }), _vm._v(" "), _c("li", {
    staticClass: "p-column-filter-row-item",
    on: {
      click: function click($event) {
        return _vm.clearFilter();
      },
      keydown: [function ($event) {
        return _vm.onRowMatchModeKeyDown($event);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.onRowClearItemClick();
      }]
    }
  }, [_vm._v("\n            " + _vm._s(_vm.noFilterLabel) + "\n          ")])], 2)] : [_vm.isShowOperator ? _c("div", {
    staticClass: "p-column-filter-operator"
  }, [_c("CFDropdown", {
    staticClass: "p-column-filter-operator-dropdown",
    attrs: {
      a: "",
      options: _vm.operatorOptions,
      value: _vm.operator,
      optionLabel: "label",
      optionValue: "value"
    },
    on: {
      input: function input($event) {
        return _vm.onOperatorChange($event);
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "p-column-filter-constraints"
  }, _vm._l(_vm.fieldConstraints, function (fieldConstraint, i) {
    return _c("div", {
      key: i,
      staticClass: "p-column-filter-constraint"
    }, [_vm.isShowMatchModes ? _c("CFDropdown", {
      staticClass: "p-column-filter-matchmode-dropdown",
      attrs: {
        options: _vm.matchModes,
        value: fieldConstraint.matchMode,
        optionLabel: "label",
        optionValue: "value"
      },
      on: {
        input: function input($event) {
          return _vm.onMenuMatchModeChange($event, i);
        }
      }
    }) : _vm._e(), _vm._v(" "), _vm.display === "menu" ? _c("ColumnFilterTemplate", {
      attrs: {
        data: _vm.filterElement,
        field: _vm.field,
        filterModel: fieldConstraint,
        filterCallback: _vm.filterCallback,
        type: "filter"
      }
    }) : _vm._e(), _vm._v(" "), _c("div", [_vm.showRemoveIcon ? _c("CFButton", {
      staticClass: "p-column-filter-remove-button p-button-text p-button-danger p-button-sm",
      attrs: {
        type: "button",
        icon: "pi pi-trash",
        label: _vm.removeRuleButtonLabel
      },
      on: {
        click: function click($event) {
          return _vm.removeConstraint(i);
        }
      }
    }) : _vm._e()], 1)], 1);
  }), 0), _vm._v(" "), _vm.isShowAddConstraint ? _c("div", {
    staticClass: "p-column-filter-add-rule"
  }, [_c("CFButton", {
    staticClass: "p-column-filter-add-button p-button-text p-button-sm",
    attrs: {
      type: "button",
      label: _vm.addRuleButtonLabel,
      icon: "pi pi-plus"
    },
    on: {
      click: function click($event) {
        return _vm.addConstraint();
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "p-column-filter-buttonbar"
  }, [!_vm.filterClearTemplate && _vm.showClearButton ? _c("CFButton", {
    staticClass: "p-button-outlined p-button-sm",
    attrs: {
      type: "button",
      label: _vm.clearButtonLabel
    },
    on: {
      click: function click($event) {
        return _vm.clearFilter();
      }
    }
  }) : _c("ColumnFilterTemplate", {
    attrs: {
      data: _vm.filterClearTemplate,
      field: _vm.field,
      filterModel: _vm.filters[_vm.field],
      filterCallback: _vm.clearFilter,
      type: "filterclear"
    }
  }), _vm._v(" "), _vm.showApplyButton ? [!_vm.filterApplyTemplate ? _c("CFButton", {
    staticClass: "p-button-sm",
    attrs: {
      type: "button",
      label: _vm.applyButtonLabel
    },
    on: {
      click: function click($event) {
        return _vm.applyFilter();
      }
    }
  }) : _c("ColumnFilterTemplate", {
    attrs: {
      data: _vm.filterApplyTemplate,
      field: _vm.field,
      filterModel: _vm.filters[_vm.field],
      filterCallback: _vm.applyFilter,
      type: "filterapply"
    }
  })] : _vm._e()], 2)], _vm._v(" "), _c("ColumnFilterTemplate", {
    attrs: {
      data: _vm.filterFooterTemplate,
      field: _vm.field,
      filterModel: _vm.filters[_vm.field],
      filterCallback: _vm.filterCallback,
      type: "filterfooter"
    }
  })], 2) : _vm._e()])], 1);
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

/* style */
var __vue_inject_styles__$9 = undefined;
/* scoped */
var __vue_scope_id__$9 = undefined;
/* module identifier */
var __vue_module_identifier__$9 = undefined;
/* functional template */
var __vue_is_functional_template__$9 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$9 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);

//
var script$8 = {
  props: {
    column: {
      type: Object,
      default: null
    },
    resizableColumns: {
      type: Boolean,
      default: false
    },
    groupRowsBy: {
      type: [Array, String],
      default: null
    },
    sortMode: {
      type: String,
      default: 'single'
    },
    groupRowSortField: {
      type: [String, Function],
      default: null
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
    allRowsSelected: {
      type: Boolean,
      default: false
    },
    empty: {
      type: Boolean,
      default: false
    },
    filterDisplay: {
      type: String,
      default: null
    },
    filters: {
      type: Object,
      default: null
    },
    filtersStore: {
      type: Object,
      default: null
    },
    filterColumn: {
      type: Boolean,
      default: false
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
    onMouseDown: function onMouseDown(event) {
      this.$emit('column-mousedown', {
        originalEvent: event,
        column: this.column
      });
    },
    onDragStart: function onDragStart(event) {
      this.$emit('column-dragstart', event);
    },
    onDragOver: function onDragOver(event) {
      this.$emit('column-dragover', event);
    },
    onDragLeave: function onDragLeave(event) {
      this.$emit('column-dragleave', event);
    },
    onDrop: function onDrop(event) {
      this.$emit('column-drop', event);
    },
    onResizeStart: function onResizeStart(event) {
      this.$emit('column-resizestart', event);
    },
    getMultiSortMetaIndex: function getMultiSortMetaIndex() {
      var _this = this;
      return this.multiSortMeta.findIndex(function (meta) {
        return meta.field === _this.columnProp('field') || meta.field === _this.columnProp('sortField');
      });
    },
    getBadgeValue: function getBadgeValue() {
      var index = this.getMultiSortMetaIndex();
      return this.groupRowsBy && this.groupRowsBy === this.groupRowSortField && index > -1 ? index : index + 1;
    },
    isMultiSorted: function isMultiSorted() {
      return this.sortMode === 'multiple' && this.columnProp('sortable') && this.getMultiSortMetaIndex() > -1;
    },
    isColumnSorted: function isColumnSorted() {
      return this.sortMode === 'single' ? this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField')) : this.isMultiSorted();
    },
    updateStickyPosition: function updateStickyPosition() {
      if (this.columnProp('frozen')) {
        var align = this.columnProp('alignFrozen');
        if (align === 'right') {
          var right = 0;
          var next = DomHandler.getNextElementSibling(this.$el, '.p-frozen-column');
          if (next) {
            right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
          }
          this.styleObject.right = right + 'px';
        } else {
          var left = 0;
          var prev = DomHandler.getPreviousElementSibling(this.$el, '.p-frozen-column');
          if (prev) {
            left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
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
    onHeaderCheckboxChange: function onHeaderCheckboxChange(event) {
      this.$emit('checkbox-change', event);
    }
  },
  computed: {
    containerClass: function containerClass() {
      return [this.filterColumn ? this.columnProp('filterHeaderClass') : this.columnProp('headerClass'), this.columnProp('className'), {
        'p-sortable-column': this.columnProp('sortable'),
        'p-resizable-column': this.resizableColumns,
        'p-highlight': this.isColumnSorted(),
        'p-filter-column': this.filterColumn,
        'p-frozen-column': this.columnProp('frozen')
      }];
    },
    containerStyle: function containerStyle() {
      var headerStyle = this.filterColumn ? this.columnProp('filterHeaderStyle') : this.columnProp('headerStyle');
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
    'DTHeaderCheckbox': __vue_component__$a,
    'DTColumnFilter': __vue_component__$9,
    'ColumnSlot': __vue_component__$b
  }
};

/* script */
var __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("th", {
    class: _vm.containerClass,
    style: _vm.containerStyle,
    attrs: {
      tabindex: _vm.columnProp("sortable") ? "0" : null,
      role: "cell",
      colspan: _vm.columnProp("colspan"),
      rowspan: _vm.columnProp("rowspan"),
      "aria-sort": _vm.ariaSort
    },
    on: {
      click: _vm.onClick,
      keydown: _vm.onKeyDown,
      mousedown: _vm.onMouseDown,
      dragstart: _vm.onDragStart,
      dragover: _vm.onDragOver,
      dragleave: _vm.onDragLeave,
      drop: _vm.onDrop
    }
  }, [_vm.resizableColumns && !_vm.columnProp("frozen") ? _c("span", {
    staticClass: "p-column-resizer",
    on: {
      mousedown: _vm.onResizeStart
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "p-column-header-content"
  }, [_vm.column.$scopedSlots && _vm.column.$scopedSlots.header ? _c("ColumnSlot", {
    attrs: {
      data: _vm.column.$scopedSlots.header,
      column: _vm.column,
      type: "header"
    }
  }) : _vm._e(), _vm._v(" "), _vm.columnProp("header") ? _c("span", {
    staticClass: "p-column-title"
  }, [_vm._v(_vm._s(_vm.columnProp("header")))]) : _vm._e(), _vm._v(" "), _vm.columnProp("sortable") ? _c("span", {
    class: _vm.sortableColumnIcon
  }) : _vm._e(), _vm._v(" "), _vm.isMultiSorted() ? _c("span", {
    staticClass: "p-sortable-column-badge"
  }, [_vm._v(_vm._s(_vm.getBadgeValue()))]) : _vm._e(), _vm._v(" "), _vm.columnProp("selectionMode") === "multiple" && _vm.filterDisplay !== "row" ? _c("DTHeaderCheckbox", {
    attrs: {
      checked: _vm.allRowsSelected,
      disabled: _vm.empty
    },
    on: {
      change: _vm.onHeaderCheckboxChange
    }
  }) : _vm._e(), _vm._v(" "), _vm.filterDisplay === "menu" && _vm.column.$scopedSlots.filter ? _c("DTColumnFilter", {
    attrs: {
      field: _vm.columnProp("filterField") || _vm.columnProp("field"),
      type: _vm.columnProp("dataType"),
      display: "menu",
      showMenu: _vm.columnProp("showFilterMenu"),
      filterElement: _vm.column.$scopedSlots.filter,
      templates: _vm.column.$scopedSlots,
      filterHeaderTemplate: _vm.column.$scopedSlots.filterheader,
      filterFooterTemplate: _vm.column.$scopedSlots.filterfooter,
      filterClearTemplate: _vm.column.$scopedSlots.filterclear,
      filterApplyTemplate: _vm.column.$scopedSlots.filterapply,
      filters: _vm.filters,
      filtersStore: _vm.filtersStore,
      filterMenuStyle: _vm.columnProp("filterMenuStyle"),
      filterMenuClass: _vm.columnProp("filterMenuClass"),
      showOperator: _vm.columnProp("showFilterOperator"),
      showClearButton: _vm.columnProp("showClearButton"),
      showApplyButton: _vm.columnProp("showApplyButton"),
      showMatchModes: _vm.columnProp("showFilterMatchModes"),
      showAddButton: _vm.columnProp("showAddButton"),
      matchModeOptions: _vm.columnProp("filterMatchModeOptions"),
      maxConstraints: _vm.columnProp("maxConstraints")
    },
    on: {
      "filter-change": function filterChange($event) {
        return _vm.$emit("filter-change", $event);
      },
      "filter-apply": function filterApply($event) {
        return _vm.$emit("filter-apply");
      },
      "operator-change": function operatorChange($event) {
        return _vm.$emit("operator-change", $event);
      },
      "matchmode-change": function matchmodeChange($event) {
        return _vm.$emit("matchmode-change", $event);
      },
      "constraint-add": function constraintAdd($event) {
        return _vm.$emit("constraint-add", $event);
      },
      "constraint-remove": function constraintRemove($event) {
        return _vm.$emit("constraint-remove", $event);
      },
      "apply-click": function applyClick($event) {
        return _vm.$emit("apply-click", $event);
      }
    }
  }) : _vm._e()], 1)]);
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

/* style */
var __vue_inject_styles__$8 = undefined;
/* scoped */
var __vue_scope_id__$8 = undefined;
/* module identifier */
var __vue_module_identifier__$8 = undefined;
/* functional template */
var __vue_is_functional_template__$8 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);

function _toConsumableArray$2(arr) { return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$2(); }
function _nonIterableSpread$2() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }
function _iterableToArray$2(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles$2(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$2(arr); }
function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var script$7 = {
  props: {
    columnGroup: {
      type: null,
      default: null
    },
    columns: {
      type: null,
      default: null
    },
    rowGroupMode: {
      type: String,
      default: null
    },
    groupRowsBy: {
      type: [Array, String],
      default: null
    },
    resizableColumns: {
      type: Boolean,
      default: false
    },
    allRowsSelected: {
      type: Boolean,
      default: false
    },
    empty: {
      type: Boolean,
      default: false
    },
    sortMode: {
      type: String,
      default: 'single'
    },
    groupRowSortField: {
      type: [String, Function],
      default: null
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
    filterDisplay: {
      type: String,
      default: null
    },
    filters: {
      type: Object,
      default: null
    },
    filtersStore: {
      type: Object,
      default: null
    }
  },
  methods: {
    columnProp: function columnProp(col, prop) {
      return ObjectUtils.getVNodeProp(col, prop);
    },
    getFilterColumnHeaderClass: function getFilterColumnHeaderClass(column) {
      return ['p-filter-column', this.columnProp(column, 'filterHeaderClass'), this.columnProp(column, 'className'), {
        'p-frozen-column': this.columnProp(column, 'frozen')
      }];
    },
    getFilterColumnHeaderStyle: function getFilterColumnHeaderStyle(column) {
      return [this.columnProp(column, 'filterHeaderStyle'), this.columnProp(column, 'styles')];
    },
    getHeaderColumns: function getHeaderColumns(row) {
      var cols = [];
      if (row.child && row.child.$scopedSlots.default) {
        row.child.$scopedSlots.default().forEach(function (child) {
          if (child.child && child.child.children && child.child.children instanceof Array) cols = [].concat(_toConsumableArray$2(cols), _toConsumableArray$2(child.child.children));else if (child.componentOptions && child.componentOptions.tag === 'Column') cols.push(child);
        });
        return cols;
      }
    }
  },
  computed: {
    ariaId: function ariaId() {
      return UniqueComponentId();
    }
  },
  components: {
    'DTHeaderCell': __vue_component__$8,
    'DTHeaderCheckbox': __vue_component__$a,
    'DTColumnFilter': __vue_component__$9
  }
};

/* script */
var __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("thead", {
    staticClass: "p-datatable-thead",
    attrs: {
      role: "rowgroup"
    }
  }, [!_vm.columnGroup ? [_c("tr", {
    attrs: {
      role: "row"
    }
  }, [_vm._l(_vm.columns, function (col, i) {
    return [!_vm.columnProp(col, "hidden") && (_vm.rowGroupMode !== "subheader" || _vm.groupRowsBy !== _vm.columnProp(col, "field")) ? _c("DTHeaderCell", {
      key: _vm.columnProp(col, "columnKey") + i || _vm.columnProp(col, "field") + i || i,
      attrs: {
        column: col,
        groupRowsBy: _vm.groupRowsBy,
        groupRowSortField: _vm.groupRowSortField,
        resizableColumns: _vm.resizableColumns,
        sortMode: _vm.sortMode,
        sortField: _vm.sortField,
        sortOrder: _vm.sortOrder,
        multiSortMeta: _vm.multiSortMeta,
        allRowsSelected: _vm.allRowsSelected,
        empty: _vm.empty,
        filters: _vm.filters,
        filterDisplay: _vm.filterDisplay,
        filtersStore: _vm.filtersStore
      },
      on: {
        "column-click": function columnClick($event) {
          return _vm.$emit("column-click", $event);
        },
        "column-mousedown": function columnMousedown($event) {
          return _vm.$emit("column-mousedown", $event);
        },
        "column-dragstart": function columnDragstart($event) {
          return _vm.$emit("column-dragstart", $event);
        },
        "column-dragover": function columnDragover($event) {
          return _vm.$emit("column-dragover", $event);
        },
        "column-dragleave": function columnDragleave($event) {
          return _vm.$emit("column-dragleave", $event);
        },
        "column-drop": function columnDrop($event) {
          return _vm.$emit("column-drop", $event);
        },
        "column-resizestart": function columnResizestart($event) {
          return _vm.$emit("column-resizestart", $event);
        },
        "checkbox-change": function checkboxChange($event) {
          return _vm.$emit("checkbox-change", $event);
        },
        "filter-change": function filterChange($event) {
          return _vm.$emit("filter-change", $event);
        },
        "filter-apply": function filterApply($event) {
          return _vm.$emit("filter-apply");
        },
        "operator-change": function operatorChange($event) {
          return _vm.$emit("operator-change", $event);
        },
        "matchmode-change": function matchmodeChange($event) {
          return _vm.$emit("matchmode-change", $event);
        },
        "constraint-add": function constraintAdd($event) {
          return _vm.$emit("constraint-add", $event);
        },
        "constraint-remove": function constraintRemove($event) {
          return _vm.$emit("constraint-remove", $event);
        },
        "apply-click": function applyClick($event) {
          return _vm.$emit("apply-click", $event);
        }
      }
    }) : _vm._e()];
  })], 2), _vm._v(" "), _vm.filterDisplay === "row" ? _c("tr", {
    attrs: {
      role: "row"
    }
  }, [_vm._l(_vm.columns, function (col, i) {
    return [!_vm.columnProp(col, "hidden") && (_vm.rowGroupMode !== "subheader" || _vm.groupRowsBy !== _vm.columnProp(col, "field")) ? _c("th", {
      key: _vm.columnProp(col, "columnKey") || _vm.columnProp(col, "field") || i,
      class: _vm.getFilterColumnHeaderClass(col),
      style: _vm.getFilterColumnHeaderStyle(col)
    }, [_vm.columnProp(col, "selectionMode") === "multiple" ? _c("DTHeaderCheckbox", {
      attrs: {
        checked: _vm.allRowsSelected,
        disabled: _vm.empty
      },
      on: {
        change: function change($event) {
          return _vm.$emit("checkbox-change", $event);
        }
      }
    }) : _vm._e(), _vm._v(" "), col.$scopedSlots && col.$scopedSlots.filter ? _c("DTColumnFilter", {
      attrs: {
        field: _vm.columnProp(col, "filterField") || _vm.columnProp(col, "field"),
        type: _vm.columnProp(col, "dataType"),
        display: "row",
        showMenu: _vm.columnProp(col, "showFilterMenu"),
        filterElement: col.$scopedSlots && col.$scopedSlots.filter,
        templates: col.$scopedSlots,
        filterHeaderTemplate: col.$scopedSlots && col.$scopedSlots.filterheader,
        filterFooterTemplate: col.$scopedSlots && col.$scopedSlots.filterfooter,
        filterClearTemplate: col.$scopedSlots && col.$scopedSlots.filterclear,
        filterApplyTemplate: col.$scopedSlots && col.$scopedSlots.filterapply,
        filters: _vm.filters,
        filtersStore: _vm.filtersStore,
        filterMenuStyle: _vm.columnProp(col, "filterMenuStyle"),
        filterMenuClass: _vm.columnProp(col, "filterMenuClass"),
        showOperator: _vm.columnProp(col, "showFilterOperator"),
        showClearButton: _vm.columnProp(col, "showClearButton"),
        showApplyButton: _vm.columnProp(col, "showApplyButton"),
        showMatchModes: _vm.columnProp(col, "showFilterMatchModes"),
        showAddButton: _vm.columnProp(col, "showAddButton"),
        matchModeOptions: _vm.columnProp(col, "filterMatchModeOptions"),
        maxConstraints: _vm.columnProp(col, "maxConstraints")
      },
      on: {
        "filter-change": function filterChange($event) {
          return _vm.$emit("filter-change", $event);
        },
        "filter-apply": function filterApply($event) {
          return _vm.$emit("filter-apply");
        },
        "operator-change": function operatorChange($event) {
          return _vm.$emit("operator-change", $event);
        },
        "matchmode-change": function matchmodeChange($event) {
          return _vm.$emit("matchmode-change", $event);
        },
        "constraint-add": function constraintAdd($event) {
          return _vm.$emit("constraint-add", $event);
        },
        "constraint-remove": function constraintRemove($event) {
          return _vm.$emit("constraint-remove", $event);
        },
        "apply-click": function applyClick($event) {
          return _vm.$emit("apply-click", $event);
        }
      }
    }) : _vm._e()], 1) : _vm._e()];
  })], 2) : _vm._e()] : _vm._l(_vm.columnGroup.$scopedSlots.default(), function (row, i) {
    return _c("tr", {
      key: _vm.ariaId + i,
      attrs: {
        role: "row"
      }
    }, [_vm._l(_vm.getHeaderColumns(row), function (col, j) {
      return [!_vm.columnProp(col, "hidden") && (_vm.rowGroupMode !== "subheader" || _vm.groupRowsBy !== _vm.columnProp(col, "field")) && typeof col.children !== "string" ? _c("DTHeaderCell", {
        key: _vm.columnProp(col, "columnKey") + j || _vm.columnProp(col, "field") + j || j,
        attrs: {
          column: col.child,
          groupRowsBy: _vm.groupRowsBy,
          groupRowSortField: _vm.groupRowSortField,
          sortMode: _vm.sortMode,
          sortField: _vm.sortField,
          sortOrder: _vm.sortOrder,
          multiSortMeta: _vm.multiSortMeta,
          allRowsSelected: _vm.allRowsSelected,
          empty: _vm.empty,
          filters: _vm.filters,
          filterDisplay: _vm.filterDisplay,
          filtersStore: _vm.filtersStore
        },
        on: {
          "column-click": function columnClick($event) {
            return _vm.$emit("column-click", $event);
          },
          "column-mousedown": function columnMousedown($event) {
            return _vm.$emit("column-mousedown", $event);
          },
          "checkbox-change": function checkboxChange($event) {
            return _vm.$emit("checkbox-change", $event);
          },
          "filter-change": function filterChange($event) {
            return _vm.$emit("filter-change", $event);
          },
          "filter-apply": function filterApply($event) {
            return _vm.$emit("filter-apply");
          },
          "operator-change": function operatorChange($event) {
            return _vm.$emit("operator-change", $event);
          },
          "matchmode-change": function matchmodeChange($event) {
            return _vm.$emit("matchmode-change", $event);
          },
          "constraint-add": function constraintAdd($event) {
            return _vm.$emit("constraint-add", $event);
          },
          "constraint-remove": function constraintRemove($event) {
            return _vm.$emit("constraint-remove", $event);
          },
          "apply-click": function applyClick($event) {
            return _vm.$emit("apply-click", $event);
          }
        }
      }) : _vm._e()];
    })], 2);
  })], 2);
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

/* style */
var __vue_inject_styles__$7 = undefined;
/* scoped */
var __vue_scope_id__$7 = undefined;
/* module identifier */
var __vue_module_identifier__$7 = undefined;
/* functional template */
var __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

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

var script$6 = {
  inheritAttrs: false,
  props: {
    value: null,
    disabled: null,
    checked: null
  },
  data: function data() {
    return {
      focused: false
    };
  },
  methods: {
    onClick: function onClick(event) {
      if (!this.disabled) {
        if (!this.checked) {
          this.$emit('change', {
            originalEvent: event,
            data: this.value
          });
        }
      }
    },
    onFocus: function onFocus() {
      this.focused = true;
    },
    onBlur: function onBlur() {
      this.focused = false;
    }
  }
};

/* script */
var __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    class: ["p-radiobutton p-component", {
      "p-radiobutton-focused": _vm.focused
    }],
    attrs: {
      tabindex: "0"
    },
    on: {
      click: _vm.onClick,
      focus: function focus($event) {
        return _vm.onFocus($event);
      },
      blur: function blur($event) {
        return _vm.onBlur($event);
      },
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) {
          return null;
        }
        $event.preventDefault();
        return _vm.onClick.apply(null, arguments);
      }
    }
  }, [_c("div", {
    ref: "box",
    class: ["p-radiobutton-box p-component", {
      "p-highlight": _vm.checked,
      "p-disabled": _vm.disabled,
      "p-focus": _vm.focused
    }],
    attrs: {
      role: "radio",
      "aria-checked": _vm.checked
    }
  }, [_c("div", {
    staticClass: "p-radiobutton-icon"
  })])]);
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

/* style */
var __vue_inject_styles__$6 = undefined;
/* scoped */
var __vue_scope_id__$6 = undefined;
/* module identifier */
var __vue_module_identifier__$6 = undefined;
/* functional template */
var __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

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
//
//

var script$5 = {
  inheritAttrs: false,
  props: {
    value: null,
    disabled: null,
    checked: null
  },
  data: function data() {
    return {
      focused: false
    };
  },
  methods: {
    onClick: function onClick(event) {
      if (!this.disabled) {
        this.$emit('change', {
          originalEvent: event,
          data: this.value
        });
        this.$refs.input.focus();
      }
    },
    onFocus: function onFocus() {
      this.focused = true;
    },
    onBlur: function onBlur() {
      this.focused = false;
    }
  }
};

/* script */
var __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    class: ["p-checkbox p-component", {
      "p-checkbox-focused": _vm.focused
    }],
    on: {
      click: _vm.onClick
    }
  }, [_c("div", {
    staticClass: "p-hidden-accessible"
  }, [_c("input", {
    ref: "input",
    attrs: {
      type: "checkbox",
      disabled: _vm.disabled
    },
    domProps: {
      checked: _vm.checked
    },
    on: {
      focus: function focus($event) {
        return _vm.onFocus($event);
      },
      blur: function blur($event) {
        return _vm.onBlur($event);
      }
    }
  })]), _vm._v(" "), _c("div", {
    ref: "box",
    class: ["p-checkbox-box p-component", {
      "p-highlight": _vm.checked,
      "p-disabled": _vm.$attrs.disabled,
      "p-focus": _vm.focused
    }],
    attrs: {
      role: "checkbox",
      "aria-checked": _vm.checked
    }
  }, [_c("span", {
    class: ["p-checkbox-icon", {
      "pi pi-check": _vm.checked
    }]
  })])]);
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

/* style */
var __vue_inject_styles__$5 = undefined;
/* scoped */
var __vue_scope_id__$5 = undefined;
/* module identifier */
var __vue_module_identifier__$5 = undefined;
/* functional template */
var __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

//
var script$4 = {
  props: {
    rowData: {
      type: Object,
      default: null
    },
    column: {
      type: Object,
      default: null
    },
    frozenRow: {
      type: Boolean,
      default: false
    },
    rowIndex: {
      type: Number,
      default: null
    },
    index: {
      type: Number,
      default: null
    },
    rowTogglerIcon: {
      type: Array,
      default: null
    },
    selected: {
      type: Boolean,
      default: false
    },
    editing: {
      type: Boolean,
      default: false
    },
    editingMeta: {
      type: Object,
      default: null
    },
    editMode: {
      type: String,
      default: null
    },
    responsiveLayout: {
      type: String,
      default: 'stack'
    }
  },
  documentEditListener: null,
  selfClick: false,
  data: function data() {
    return {
      d_editing: this.editing,
      styleObject: {
        left: '',
        right: ''
      }
    };
  },
  watch: {
    editing: function editing(newValue) {
      this.d_editing = newValue;
    },
    '$data.d_editing': function $dataD_editing(newValue) {
      this.$emit('editing-meta-change', {
        data: this.rowData,
        field: this.field || "field_".concat(this.index),
        index: this.rowIndex,
        editing: newValue
      });
    }
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
    if (this.d_editing && (this.editMode === 'cell' || this.editMode === 'row' && this.columnProp('rowEditor'))) {
      var focusableEl = DomHandler.getFirstFocusableElement(this.$el);
      focusableEl && focusableEl.focus();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.overlayEventListener) {
      OverlayEventBus.off('overlay-click', this.overlayEventListener);
      this.overlayEventListener = null;
    }
  },
  methods: {
    columnProp: function columnProp(prop) {
      return ObjectUtils.getVNodeProp(this.column, prop);
    },
    resolveFieldData: function resolveFieldData() {
      return ObjectUtils.resolveFieldData(this.rowData, this.field);
    },
    toggleRow: function toggleRow(event) {
      this.$emit('row-toggle', {
        originalEvent: event,
        data: this.rowData
      });
    },
    toggleRowWithRadio: function toggleRowWithRadio(event, index) {
      this.$emit('radio-change', {
        originalEvent: event.originalEvent,
        index: index,
        data: event.data
      });
    },
    toggleRowWithCheckbox: function toggleRowWithCheckbox(event, index) {
      this.$emit('checkbox-change', {
        originalEvent: event.originalEvent,
        index: index,
        data: event.data
      });
    },
    isEditable: function isEditable() {
      return this.column.$scopedSlots.editor != null;
    },
    bindDocumentEditListener: function bindDocumentEditListener() {
      var _this = this;
      if (!this.documentEditListener) {
        this.documentEditListener = function (event) {
          if (!_this.selfClick) {
            _this.completeEdit(event, 'outside');
          }
          _this.selfClick = false;
        };
        document.addEventListener('click', this.documentEditListener);
      }
    },
    unbindDocumentEditListener: function unbindDocumentEditListener() {
      if (this.documentEditListener) {
        document.removeEventListener('click', this.documentEditListener);
        this.documentEditListener = null;
        this.selfClick = false;
      }
    },
    switchCellToViewMode: function switchCellToViewMode() {
      this.d_editing = false;
      this.unbindDocumentEditListener();
      OverlayEventBus.off('overlay-click', this.overlayEventListener);
      this.overlayEventListener = null;
    },
    onClick: function onClick(event) {
      var _this2 = this;
      if (this.editMode === 'cell' && this.isEditable()) {
        this.selfClick = true;
        if (!this.d_editing) {
          this.d_editing = true;
          this.bindDocumentEditListener();
          this.$emit('cell-edit-init', {
            originalEvent: event,
            data: this.rowData,
            field: this.field,
            index: this.rowIndex
          });
          this.overlayEventListener = function (e) {
            if (_this2.$el && _this2.$el.contains(e.target)) {
              _this2.selfClick = true;
            }
          };
          OverlayEventBus.on('overlay-click', this.overlayEventListener);
        }
      }
    },
    completeEdit: function completeEdit(event, type) {
      var completeEvent = {
        originalEvent: event,
        data: this.rowData,
        newData: this.editingRowData,
        value: this.rowData[this.field],
        newValue: this.editingRowData[this.field],
        field: this.field,
        index: this.rowIndex,
        type: type,
        defaultPrevented: false,
        preventDefault: function preventDefault() {
          this.defaultPrevented = true;
        }
      };
      this.$emit('cell-edit-complete', completeEvent);
      if (!completeEvent.defaultPrevented) {
        this.switchCellToViewMode();
      }
    },
    onKeyDown: function onKeyDown(event) {
      if (this.editMode === 'cell') {
        switch (event.which) {
          case 13:
            this.completeEdit(event, 'enter');
            break;
          case 27:
            this.switchCellToViewMode();
            this.$emit('cell-edit-cancel', {
              originalEvent: event,
              data: this.rowData,
              field: this.field,
              index: this.rowIndex
            });
            break;
          case 9:
            this.completeEdit(event, 'tab');
            if (event.shiftKey) this.moveToPreviousCell(event);else this.moveToNextCell(event);
            break;
        }
      }
    },
    moveToPreviousCell: function moveToPreviousCell(event) {
      var currentCell = this.findCell(event.target);
      var targetCell = this.findPreviousEditableColumn(currentCell);
      if (targetCell) {
        DomHandler.invokeElementMethod(targetCell, 'click');
        event.preventDefault();
      }
    },
    moveToNextCell: function moveToNextCell(event) {
      var currentCell = this.findCell(event.target);
      var targetCell = this.findNextEditableColumn(currentCell);
      if (targetCell) {
        DomHandler.invokeElementMethod(targetCell, 'click');
        event.preventDefault();
      }
    },
    findCell: function findCell(element) {
      if (element) {
        var cell = element;
        while (cell && !DomHandler.hasClass(cell, 'p-cell-editing')) {
          cell = cell.parentElement;
        }
        return cell;
      } else {
        return null;
      }
    },
    findPreviousEditableColumn: function findPreviousEditableColumn(cell) {
      var prevCell = cell.previousElementSibling;
      if (!prevCell) {
        var previousRow = cell.parentElement.previousElementSibling;
        if (previousRow) {
          prevCell = previousRow.lastElementChild;
        }
      }
      if (prevCell) {
        if (DomHandler.hasClass(prevCell, 'p-editable-column')) return prevCell;else return this.findPreviousEditableColumn(prevCell);
      } else {
        return null;
      }
    },
    findNextEditableColumn: function findNextEditableColumn(cell) {
      var nextCell = cell.nextElementSibling;
      if (!nextCell) {
        var nextRow = cell.parentElement.nextElementSibling;
        if (nextRow) {
          nextCell = nextRow.firstElementChild;
        }
      }
      if (nextCell) {
        if (DomHandler.hasClass(nextCell, 'p-editable-column')) return nextCell;else return this.findNextEditableColumn(nextCell);
      } else {
        return null;
      }
    },
    isEditingCellValid: function isEditingCellValid() {
      return DomHandler.find(this.$el, '.p-invalid').length === 0;
    },
    onRowEditInit: function onRowEditInit(event) {
      this.$emit('row-edit-init', {
        originalEvent: event,
        data: this.rowData,
        newData: this.editingRowData,
        field: this.field,
        index: this.rowIndex
      });
    },
    onRowEditSave: function onRowEditSave(event) {
      this.$emit('row-edit-save', {
        originalEvent: event,
        data: this.rowData,
        newData: this.editingRowData,
        field: this.field,
        index: this.rowIndex
      });
    },
    onRowEditCancel: function onRowEditCancel(event) {
      this.$emit('row-edit-cancel', {
        originalEvent: event,
        data: this.rowData,
        newData: this.editingRowData,
        field: this.field,
        index: this.rowIndex
      });
    },
    editorInitCallback: function editorInitCallback(event) {
      this.$emit('row-edit-init', {
        originalEvent: event,
        data: this.rowData,
        newData: this.editingRowData,
        field: this.field,
        index: this.rowIndex
      });
    },
    editorSaveCallback: function editorSaveCallback(event) {
      if (this.editMode === 'row') {
        this.$emit('row-edit-save', {
          originalEvent: event,
          data: this.rowData,
          newData: this.editingRowData,
          field: this.field,
          index: this.rowIndex
        });
      } else {
        this.completeEdit(event, 'enter');
      }
    },
    editorCancelCallback: function editorCancelCallback(event) {
      if (this.editMode === 'row') {
        this.$emit('row-edit-cancel', {
          originalEvent: event,
          data: this.rowData,
          newData: this.editingRowData,
          field: this.field,
          index: this.rowIndex
        });
      } else {
        this.switchCellToViewMode();
        this.$emit('cell-edit-cancel', {
          originalEvent: event,
          data: this.rowData,
          field: this.field,
          index: this.rowIndex
        });
      }
    },
    updateStickyPosition: function updateStickyPosition() {
      if (this.columnProp('frozen')) {
        var align = this.columnProp('alignFrozen');
        if (align === 'right') {
          var right = 0;
          var next = DomHandler.getNextElementSibling(this.$el, '.p-frozen-column');
          if (next) {
            right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
          }
          this.styleObject.right = right + 'px';
        } else {
          var left = 0;
          var prev = DomHandler.getPreviousElementSibling(this.$el, '.p-frozen-column');
          if (prev) {
            left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
          }
          this.styleObject.left = left + 'px';
        }
      }
    }
  },
  computed: {
    editingRowData: function editingRowData() {
      return this.editingMeta[this.rowIndex] ? this.editingMeta[this.rowIndex].data : this.rowData;
    },
    field: function field() {
      return this.columnProp('field');
    },
    containerClass: function containerClass() {
      return [this.columnProp('bodyClass'), this.columnProp('className'), {
        'p-selection-column': this.columnProp('selectionMode') != null,
        'p-editable-column': this.isEditable(),
        'p-cell-editing': this.d_editing,
        'p-frozen-column': this.columnProp('frozen')
      }];
    },
    containerStyle: function containerStyle() {
      var bodyStyle = this.columnProp('bodyStyle');
      var columnStyle = this.columnProp('styles');
      return this.columnProp('frozen') ? [columnStyle, bodyStyle, this.styleObject] : [columnStyle, bodyStyle];
    }
  },
  components: {
    'ColumnSlot': __vue_component__$b,
    'DTRadioButton': __vue_component__$6,
    'DTCheckbox': __vue_component__$5
  },
  directives: {
    'ripple': Ripple
  }
};

/* script */
var __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("td", {
    class: _vm.containerClass,
    style: _vm.containerStyle,
    attrs: {
      role: "cell",
      "data-prime": _vm.editingRowData
    },
    on: {
      click: _vm.onClick,
      keydown: _vm.onKeyDown
    }
  }, [_vm.responsiveLayout === "stack" ? _c("span", {
    staticClass: "p-column-title"
  }, [_vm._v(_vm._s(_vm.columnProp("header")))]) : _vm._e(), _vm._v(" "), _vm.column.$scopedSlots.body && !_vm.d_editing ? _c("ColumnSlot", {
    attrs: {
      data: _vm.rowData,
      column: _vm.column,
      field: _vm.field,
      index: _vm.rowIndex,
      type: "body",
      frozenRow: _vm.frozenRow,
      editorInitCallback: _vm.editorInitCallback
    }
  }) : _vm.column.$scopedSlots.editor && _vm.d_editing ? _c("ColumnSlot", {
    attrs: {
      data: _vm.editingRowData,
      column: _vm.column,
      field: _vm.field,
      index: _vm.rowIndex,
      type: "editor",
      frozenRow: _vm.frozenRow,
      editorSaveCallback: _vm.editorSaveCallback,
      editorCancelCallback: _vm.editorCancelCallback
    }
  }) : !_vm.column.$scopedSlots.editor && _vm.column.$scopedSlots.body && _vm.d_editing ? _c("ColumnSlot", {
    attrs: {
      data: _vm.editingRowData,
      column: _vm.column,
      field: _vm.field,
      index: _vm.rowIndex,
      type: "body",
      frozenRow: _vm.frozenRow,
      editorSaveCallback: _vm.editorSaveCallback,
      editorCancelCallback: _vm.editorCancelCallback
    }
  }) : _vm.columnProp("selectionMode") ? [_vm.columnProp("selectionMode") === "single" ? _c("DTRadioButton", {
    attrs: {
      value: _vm.rowData,
      checked: _vm.selected
    },
    on: {
      change: function change($event) {
        return _vm.toggleRowWithRadio($event, _vm.rowIndex);
      }
    }
  }) : _vm.columnProp("selectionMode") === "multiple" ? _c("DTCheckbox", {
    attrs: {
      value: _vm.rowData,
      checked: _vm.selected
    },
    on: {
      change: function change($event) {
        return _vm.toggleRowWithCheckbox($event, _vm.rowIndex);
      }
    }
  }) : _vm._e()] : _vm.columnProp("rowReorder") ? [_c("i", {
    class: ["p-datatable-reorderablerow-handle", _vm.columnProp("rowReorderIcon") || "pi pi-bars"]
  })] : _vm.columnProp("expander") ? [_c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-row-toggler p-link",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.toggleRow
    }
  }, [_c("span", {
    class: _vm.rowTogglerIcon
  })])] : _vm.editMode === "row" && _vm.columnProp("rowEditor") ? [!_vm.d_editing ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-row-editor-init p-link",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.onRowEditInit
    }
  }, [_c("span", {
    staticClass: "p-row-editor-init-icon pi pi-fw pi-pencil"
  })]) : _vm._e(), _vm._v(" "), _vm.d_editing ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-row-editor-save p-link",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.onRowEditSave
    }
  }, [_c("span", {
    staticClass: "p-row-editor-save-icon pi pi-fw pi-check"
  })]) : _vm._e(), _vm._v(" "), _vm.d_editing ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-row-editor-cancel p-link",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.onRowEditCancel
    }
  }, [_c("span", {
    staticClass: "p-row-editor-cancel-icon pi pi-fw pi-times"
  })]) : _vm._e()] : [_vm._v(_vm._s(_vm.resolveFieldData()))]], 2);
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

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
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

//
var RowExpansionTemplate = {
  functional: true,
  props: {
    name: {
      type: String,
      default: null
    },
    data: {
      type: null,
      default: null
    },
    index: {
      type: Number,
      default: null
    },
    template: {
      type: null,
      default: null
    }
  },
  render: function render(createElement, context) {
    var content = context.props.template({
      'data': context.props.data,
      'index': context.props.index
    });
    return [content];
  }
};
var SlotTemplate = {
  functional: true,
  props: {
    template: {
      type: null,
      default: null
    }
  },
  render: function render(createElement, context) {
    var content = context.props.template();
    return [content];
  }
};
var script$3 = {
  props: {
    value: {
      type: Array,
      default: null
    },
    columns: {
      type: null,
      default: null
    },
    frozenRow: {
      type: Boolean,
      default: false
    },
    empty: {
      type: Boolean,
      default: false
    },
    rowGroupMode: {
      type: String,
      default: null
    },
    groupRowsBy: {
      type: [Array, String],
      default: null
    },
    expandableRowGroups: {
      type: Boolean,
      default: false
    },
    expandedRowGroups: {
      type: Array,
      default: null
    },
    dataKey: {
      type: String,
      default: null
    },
    expandedRowIcon: {
      type: String,
      default: null
    },
    collapsedRowIcon: {
      type: String,
      default: null
    },
    expandedRows: {
      type: Array,
      default: null
    },
    expandedRowKeys: {
      type: null,
      default: null
    },
    selection: {
      type: [Array, Object],
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
    contextMenu: {
      type: Boolean,
      default: false
    },
    contextMenuSelection: {
      type: Object,
      default: null
    },
    rowClass: {
      type: null,
      default: null
    },
    rowStyle: {
      type: null,
      default: null
    },
    editMode: {
      type: String,
      default: null
    },
    compareSelectionBy: {
      type: String,
      default: 'deepEquals'
    },
    editingRows: {
      type: Array,
      default: null
    },
    editingRowKeys: {
      type: null,
      default: null
    },
    editingMeta: {
      type: Object,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    templates: {
      type: null,
      default: null
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    responsiveLayout: {
      type: String,
      default: 'stack'
    }
  },
  mounted: function mounted() {
    if (this.frozenRow) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.scrollable && this.rowGroupMode === 'subheader') {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  },
  updated: function updated() {
    if (this.frozenRow) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.scrollable && this.rowGroupMode === 'subheader') {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  },
  data: function data() {
    return {
      rowGroupHeaderStyleObject: {}
    };
  },
  methods: {
    columnProp: function columnProp(col, prop) {
      return ObjectUtils.getVNodeProp(col, prop);
    },
    shouldRenderRowGroupHeader: function shouldRenderRowGroupHeader(value, rowData, i) {
      var currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
      var prevRowData = value[i - 1];
      if (prevRowData) {
        var previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.groupRowsBy);
        return currentRowFieldData !== previousRowFieldData;
      } else {
        return true;
      }
    },
    getRowKey: function getRowKey(rowData, index) {
      return this.dataKey ? ObjectUtils.resolveFieldData(rowData, this.dataKey) : index;
    },
    getRowClass: function getRowClass(rowData) {
      var rowStyleClass = [];
      if (this.selectionMode) {
        rowStyleClass.push('p-selectable-row');
      }
      if (this.selection) {
        rowStyleClass.push({
          'p-highlight': this.isSelected(rowData)
        });
      }
      if (this.contextMenuSelection) {
        rowStyleClass.push({
          'p-highlight-contextmenu': this.isSelectedWithContextMenu(rowData)
        });
      }
      if (this.rowClass) {
        var rowClassValue = this.rowClass(rowData);
        if (rowClassValue) {
          rowStyleClass.push(rowClassValue);
        }
      }
      return rowStyleClass;
    },
    shouldRenderRowGroupFooter: function shouldRenderRowGroupFooter(value, rowData, i) {
      if (this.expandableRowGroups && !this.isRowGroupExpanded(rowData)) {
        return false;
      } else {
        var currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
        var nextRowData = value[i + 1];
        if (nextRowData) {
          var nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.groupRowsBy);
          return currentRowFieldData !== nextRowFieldData;
        } else {
          return true;
        }
      }
    },
    shouldRenderBodyCell: function shouldRenderBodyCell(value, column, i) {
      if (this.rowGroupMode) {
        if (this.rowGroupMode === 'subheader') {
          return this.groupRowsBy !== this.columnProp(column, 'field');
        } else if (this.rowGroupMode === 'rowspan') {
          if (this.isGrouped(column)) {
            var prevRowData = value[i - 1];
            if (prevRowData) {
              var currentRowFieldData = ObjectUtils.resolveFieldData(value[i], this.columnProp(column, 'field'));
              var previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.columnProp(column, 'field'));
              return currentRowFieldData !== previousRowFieldData;
            } else {
              return true;
            }
          } else {
            return true;
          }
        }
      } else {
        return !this.columnProp(column, 'hidden');
      }
    },
    calculateRowGroupSize: function calculateRowGroupSize(value, column, index) {
      if (this.isGrouped(column)) {
        var currentRowFieldData = ObjectUtils.resolveFieldData(value[index], this.columnProp(column, 'field'));
        var nextRowFieldData = currentRowFieldData;
        var groupRowSpan = 0;
        while (currentRowFieldData === nextRowFieldData) {
          groupRowSpan++;
          var nextRowData = value[++index];
          if (nextRowData) {
            nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.columnProp(column, 'field'));
          } else {
            break;
          }
        }
        return groupRowSpan === 1 ? null : groupRowSpan;
      } else {
        return null;
      }
    },
    rowTogglerIcon: function rowTogglerIcon(rowData) {
      var icon = this.isRowExpanded(rowData) ? this.expandedRowIcon : this.collapsedRowIcon;
      return ['p-row-toggler-icon pi', icon];
    },
    rowGroupTogglerIcon: function rowGroupTogglerIcon(rowData) {
      var icon = this.isRowGroupExpanded(rowData) ? this.expandedRowIcon : this.collapsedRowIcon;
      return ['p-row-toggler-icon pi', icon];
    },
    isGrouped: function isGrouped(column) {
      if (this.groupRowsBy && this.columnProp(column, 'field')) {
        if (Array.isArray(this.groupRowsBy)) return this.groupRowsBy.indexOf(column.field) > -1;else return this.groupRowsBy === column.field;
      } else {
        return false;
      }
    },
    isRowEditing: function isRowEditing(rowData) {
      if (rowData && this.editingRows) {
        if (this.dataKey) return this.editingRowKeys ? this.editingRowKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;else return this.findIndex(rowData, this.editingRows) > -1;
      }
      return false;
    },
    isRowExpanded: function isRowExpanded(rowData) {
      if (rowData && this.expandedRows) {
        if (this.dataKey) return this.expandedRowKeys ? this.expandedRowKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;else return this.findIndex(rowData, this.expandedRows) > -1;
      }
      return false;
    },
    isRowGroupExpanded: function isRowGroupExpanded(rowData) {
      if (this.expandableRowGroups && this.expandedRowGroups) {
        var groupFieldValue = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
        return this.expandedRowGroups.indexOf(groupFieldValue) > -1;
      }
      return false;
    },
    isSelected: function isSelected(rowData) {
      if (rowData && this.selection) {
        if (this.dataKey) {
          return this.selectionKeys ? this.selectionKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
        } else {
          if (this.selection instanceof Array) return this.findIndexInSelection(rowData) > -1;else return this.equals(rowData, this.selection);
        }
      }
      return false;
    },
    isSelectedWithContextMenu: function isSelectedWithContextMenu(rowData) {
      if (rowData && this.contextMenuSelection) {
        return this.equals(rowData, this.contextMenuSelection, this.dataKey);
      }
      return false;
    },
    findIndexInSelection: function findIndexInSelection(rowData) {
      return this.findIndex(rowData, this.selection);
    },
    findIndex: function findIndex(rowData, collection) {
      var index = -1;
      if (collection && collection.length) {
        for (var i = 0; i < collection.length; i++) {
          if (this.equals(rowData, collection[i])) {
            index = i;
            break;
          }
        }
      }
      return index;
    },
    equals: function equals(data1, data2) {
      return this.compareSelectionBy === 'equals' ? data1 === data2 : ObjectUtils.equals(data1, data2, this.dataKey);
    },
    onRowGroupToggle: function onRowGroupToggle(event, data) {
      this.$emit('rowgroup-toggle', {
        originalEvent: event,
        data: data
      });
    },
    onRowClick: function onRowClick(event, rowData, rowIndex) {
      this.$emit('row-click', {
        originalEvent: event,
        data: rowData,
        index: rowIndex
      });
    },
    onRowDblClick: function onRowDblClick(event, rowData, rowIndex) {
      this.$emit('row-dblclick', {
        originalEvent: event,
        data: rowData,
        index: rowIndex
      });
    },
    onRowRightClick: function onRowRightClick(event, rowData, rowIndex) {
      this.$emit('row-rightclick', {
        originalEvent: event,
        data: rowData,
        index: rowIndex
      });
    },
    onRowTouchEnd: function onRowTouchEnd(event) {
      this.$emit('row-touchend', event);
    },
    onRowKeyDown: function onRowKeyDown(event, rowData, rowIndex) {
      this.$emit('row-keydown', {
        originalEvent: event,
        data: rowData,
        index: rowIndex
      });
    },
    onRowMouseDown: function onRowMouseDown(event) {
      this.$emit('row-mousedown', event);
    },
    onRowDragStart: function onRowDragStart(event, rowIndex) {
      this.$emit('row-dragstart', {
        originalEvent: event,
        index: rowIndex
      });
    },
    onRowDragOver: function onRowDragOver(event, rowIndex) {
      this.$emit('row-dragover', {
        originalEvent: event,
        index: rowIndex
      });
    },
    onRowDragLeave: function onRowDragLeave(event) {
      this.$emit('row-dragleave', event);
    },
    onRowDragEnd: function onRowDragEnd(event) {
      this.$emit('row-dragend', event);
    },
    onRowDrop: function onRowDrop(event) {
      this.$emit('row-drop', event);
    },
    onRowToggle: function onRowToggle(event) {
      this.$emit('row-toggle', event);
    },
    onRadioChange: function onRadioChange(event) {
      this.$emit('radio-change', event);
    },
    onCheckboxChange: function onCheckboxChange(event) {
      this.$emit('checkbox-change', event);
    },
    onCellEditInit: function onCellEditInit(event) {
      this.$emit('cell-edit-init', event);
    },
    onCellEditComplete: function onCellEditComplete(event) {
      this.$emit('cell-edit-complete', event);
    },
    onCellEditCancel: function onCellEditCancel(event) {
      this.$emit('cell-edit-cancel', event);
    },
    onRowEditInit: function onRowEditInit(event) {
      this.$emit('row-edit-init', event);
    },
    onRowEditSave: function onRowEditSave(event) {
      this.$emit('row-edit-save', event);
    },
    onRowEditCancel: function onRowEditCancel(event) {
      this.$emit('row-edit-cancel', event);
    },
    onEditingMetaChange: function onEditingMetaChange(event) {
      this.$emit('editing-meta-change', event);
    },
    updateFrozenRowStickyPosition: function updateFrozenRowStickyPosition() {
      this.$el.style.top = DomHandler.getOuterHeight(this.$el.previousElementSibling) + 'px';
    },
    updateFrozenRowGroupHeaderStickyPosition: function updateFrozenRowGroupHeaderStickyPosition() {
      var tableHeaderHeight = DomHandler.getOuterHeight(this.$el.previousElementSibling);
      this.rowGroupHeaderStyleObject.top = tableHeaderHeight + 'px';
    }
  },
  computed: {
    columnsLength: function columnsLength() {
      var _this = this;
      var hiddenColLength = 0;
      this.columns.forEach(function (column) {
        if (_this.columnProp(column, 'hidden')) hiddenColLength++;
        if (_this.columnProp(column, 'selectionMode') === 'single' || _this.columnProp(column, 'selectionMode') === 'multiple') hiddenColLength--;
      });
      return this.columns ? this.columns.length - hiddenColLength : 0;
    },
    rowGroupHeaderStyle: function rowGroupHeaderStyle() {
      if (this.scrollable) {
        return {
          top: this.rowGroupHeaderStyleObject.top
        };
      }
      return null;
    }
  },
  components: {
    'DTBodyCell': __vue_component__$4,
    'DTRowExpansionTemplate': RowExpansionTemplate,
    'DTSlotTemplate': SlotTemplate
  }
};

/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("tbody", {
    staticClass: "p-datatable-tbody",
    attrs: {
      role: "rowgroup"
    }
  }, [!_vm.empty ? [_vm._l(_vm.value, function (rowData, index) {
    return [_vm.templates["groupheader"] && _vm.rowGroupMode === "subheader" && _vm.shouldRenderRowGroupHeader(_vm.value, rowData, index) ? _c("tr", {
      key: _vm.getRowKey(rowData, index) + "_subheader" + index,
      staticClass: "p-rowgroup-header",
      style: _vm.rowGroupHeaderStyle,
      attrs: {
        role: "row"
      }
    }, [_c("td", {
      attrs: {
        colspan: _vm.columnsLength - 1
      }
    }, [_vm.expandableRowGroups ? _c("button", {
      staticClass: "p-row-toggler p-link",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.onRowGroupToggle($event, rowData);
        }
      }
    }, [_c("span", {
      class: _vm.rowGroupTogglerIcon(rowData)
    })]) : _vm._e(), _vm._v(" "), _c("DTRowExpansionTemplate", {
      attrs: {
        template: _vm.templates["groupheader"],
        data: rowData,
        index: index
      }
    })], 1)]) : _vm._e(), _vm._v(" "), (_vm.expandableRowGroups ? _vm.isRowGroupExpanded(rowData) : true) ? _c("tr", {
      key: _vm.getRowKey(rowData, index),
      class: _vm.getRowClass(rowData),
      style: _vm.rowStyle,
      attrs: {
        tabindex: _vm.selectionMode || _vm.contextMenu ? "0" : null,
        role: "row"
      },
      on: {
        click: function click($event) {
          return _vm.onRowClick($event, rowData, index);
        },
        dblclick: function dblclick($event) {
          return _vm.onRowDblClick($event, rowData, index);
        },
        contextmenu: function contextmenu($event) {
          return _vm.onRowRightClick($event, rowData, index);
        },
        touchend: function touchend($event) {
          return _vm.onRowTouchEnd($event);
        },
        keydown: function keydown($event) {
          return _vm.onRowKeyDown($event, rowData, index);
        },
        mousedown: function mousedown($event) {
          return _vm.onRowMouseDown($event);
        },
        dragstart: function dragstart($event) {
          return _vm.onRowDragStart($event, index);
        },
        dragover: function dragover($event) {
          return _vm.onRowDragOver($event, index);
        },
        dragleave: function dragleave($event) {
          return _vm.onRowDragLeave($event);
        },
        dragend: function dragend($event) {
          return _vm.onRowDragEnd($event);
        },
        drop: function drop($event) {
          return _vm.onRowDrop($event);
        }
      }
    }, [_vm._l(_vm.columns, function (col, i) {
      return [_vm.shouldRenderBodyCell(_vm.value, col, index) ? _c("DTBodyCell", {
        key: _vm.columnProp(col, "columnKey") + i || _vm.columnProp(col, "field") + i || i,
        attrs: {
          rowData: rowData,
          column: col,
          rowIndex: index,
          index: i,
          selected: _vm.isSelected(rowData),
          rowTogglerIcon: _vm.columnProp(col, "expander") ? _vm.rowTogglerIcon(rowData) : null,
          frozenRow: _vm.frozenRow,
          rowspan: _vm.rowGroupMode === "rowspan" ? _vm.calculateRowGroupSize(_vm.value, col, index) : null,
          editMode: _vm.editMode,
          editing: _vm.editMode === "row" && _vm.isRowEditing(rowData),
          responsiveLayout: _vm.responsiveLayout,
          editingMeta: _vm.editingMeta
        },
        on: {
          "radio-change": function radioChange($event) {
            return _vm.onRadioChange($event);
          },
          "checkbox-change": function checkboxChange($event) {
            return _vm.onCheckboxChange($event);
          },
          "row-toggle": function rowToggle($event) {
            return _vm.onRowToggle($event);
          },
          "cell-edit-init": function cellEditInit($event) {
            return _vm.onCellEditInit($event);
          },
          "cell-edit-complete": function cellEditComplete($event) {
            return _vm.onCellEditComplete($event);
          },
          "cell-edit-cancel": function cellEditCancel($event) {
            return _vm.onCellEditCancel($event);
          },
          "row-edit-init": function rowEditInit($event) {
            return _vm.onRowEditInit($event);
          },
          "row-edit-save": function rowEditSave($event) {
            return _vm.onRowEditSave($event);
          },
          "row-edit-cancel": function rowEditCancel($event) {
            return _vm.onRowEditCancel($event);
          },
          "editing-meta-change": _vm.onEditingMetaChange
        }
      }) : _vm._e()];
    })], 2) : _vm._e(), _vm._v(" "), _vm.templates["expansion"] && _vm.expandedRows && _vm.isRowExpanded(rowData) ? _c("tr", {
      key: _vm.getRowKey(rowData, index) + "_expansion" + index,
      staticClass: "p-datatable-row-expansion",
      attrs: {
        role: "row"
      }
    }, [_c("td", {
      attrs: {
        colspan: _vm.columnsLength
      }
    }, [_c("DTRowExpansionTemplate", {
      attrs: {
        template: _vm.templates["expansion"],
        data: rowData,
        index: index
      }
    })], 1)]) : _vm._e(), _vm._v(" "), _vm.templates["groupfooter"] && _vm.rowGroupMode === "subheader" && _vm.shouldRenderRowGroupFooter(_vm.value, rowData, index) ? _c("tr", {
      key: _vm.getRowKey(rowData, index) + "_subfooter" + index,
      staticClass: "p-rowgroup-footer",
      attrs: {
        role: "row"
      }
    }, [_c("DTRowExpansionTemplate", {
      attrs: {
        template: _vm.templates["groupfooter"],
        data: rowData,
        index: index
      }
    })], 1) : _vm._e()];
  })] : _c("tr", {
    staticClass: "p-datatable-emptymessage"
  }, [_c("td", {
    attrs: {
      colspan: _vm.columnsLength
    }
  }, [_vm.templates.empty && !_vm.loading ? _c("DTSlotTemplate", {
    attrs: {
      template: _vm.templates.empty
    }
  }) : _vm._e(), _vm._v(" "), _vm.templates.loading && _vm.loading ? _c("DTSlotTemplate", {
    attrs: {
      template: _vm.templates.loading
    }
  }) : _vm._e()], 1)])], 2);
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

/* style */
var __vue_inject_styles__$3 = undefined;
/* scoped */
var __vue_scope_id__$3 = undefined;
/* module identifier */
var __vue_module_identifier__$3 = undefined;
/* functional template */
var __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

//
var script$2 = {
  props: {
    column: {
      type: null,
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
          var next = DomHandler.getNextElementSibling(this.$el, '.p-frozen-column');
          if (next) {
            right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
          }
          this.styleObject.right = right + 'px';
        } else {
          var left = 0;
          var prev = DomHandler.getPreviousElementSibling(this.$el, '.p-frozen-column');
          if (prev) {
            left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
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
    'ColumnSlot': __vue_component__$b
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
    style: _vm.containerStyle,
    attrs: {
      role: "cell",
      colspan: _vm.columnProp("colspan"),
      rowspan: _vm.columnProp("rowspan")
    }
  }, [_vm.column.$scopedSlots && _vm.column.$scopedSlots.footer ? _c("ColumnSlot", {
    attrs: {
      data: _vm.column.$scopedSlots.footer,
      column: _vm.column,
      type: "footer"
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

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1(); }
function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var script$1 = {
  props: {
    columnGroup: {
      type: null,
      default: null
    },
    columns: {
      type: null,
      default: null
    }
  },
  methods: {
    columnProp: function columnProp(col, prop) {
      return ObjectUtils.getVNodeProp(col, prop);
    },
    getFooterColumns: function getFooterColumns(row) {
      var cols = [];
      if (row.child && row.child.$scopedSlots.default) {
        row.child.$scopedSlots.default().forEach(function (child) {
          if (child.child && child.child.children && child.child.children instanceof Array) cols = [].concat(_toConsumableArray$1(cols), _toConsumableArray$1(child.child.children));else if (child.componentOptions && child.componentOptions.tag === 'Column') cols.push(child);
        });
        return cols;
      }
    }
  },
  computed: {
    hasFooter: function hasFooter() {
      var hasFooter = false;
      if (this.columnGroup) {
        hasFooter = true;
      } else if (this.columns) {
        var _iterator = _createForOfIteratorHelper$1(this.columns),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var col = _step.value;
            if (this.columnProp(col, 'footer') || col.$scopedSlots && col.$scopedSlots.footer) {
              hasFooter = true;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return hasFooter;
    }
  },
  components: {
    'DTFooterCell': __vue_component__$2
  }
};

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.hasFooter ? _c("tfoot", {
    staticClass: "p-datatable-tfoot",
    attrs: {
      role: "rowgroup"
    }
  }, [!_vm.columnGroup ? _c("tr", {
    attrs: {
      role: "row"
    }
  }, [_vm._l(_vm.columns, function (col, i) {
    return [!_vm.columnProp(col, "hidden") ? _c("DTFooterCell", {
      key: _vm.columnProp(col, "columnKey") || _vm.columnProp(col, "field") || i,
      attrs: {
        column: col
      }
    }) : _vm._e()];
  })], 2) : _vm._l(_vm.columnGroup.$scopedSlots.default(), function (row, i) {
    return _c("tr", {
      key: i,
      attrs: {
        role: "row"
      }
    }, [_vm._l(_vm.getFooterColumns(row), function (col, j) {
      return [!_vm.columnProp(col, "hidden") ? _c("DTFooterCell", {
        key: _vm.columnProp(col, "columnKey") || _vm.columnProp(col, "field") || j,
        attrs: {
          column: col.child
        }
      }) : _vm._e()];
    })], 2);
  })], 2) : _vm._e();
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var script = {
  name: 'DataTable',
  props: {
    value: {
      type: Array,
      default: null
    },
    dataKey: {
      type: String,
      default: null
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
    filterDisplay: {
      type: String,
      default: null
    },
    globalFilterFields: {
      type: Array,
      default: null
    },
    filterLocale: {
      type: String,
      default: undefined
    },
    selection: {
      type: [Array, Object],
      default: null
    },
    selectionMode: {
      type: String,
      default: null
    },
    compareSelectionBy: {
      type: String,
      default: 'deepEquals'
    },
    metaKeySelection: {
      type: Boolean,
      default: true
    },
    contextMenu: {
      type: Boolean,
      default: false
    },
    contextMenuSelection: {
      type: Object,
      default: null
    },
    selectAll: {
      type: Boolean,
      default: null
    },
    rowHover: {
      type: Boolean,
      default: false
    },
    csvSeparator: {
      type: String,
      default: ','
    },
    exportFilename: {
      type: String,
      default: 'download'
    },
    exportFunction: {
      type: Function,
      default: null
    },
    autoLayout: {
      type: Boolean,
      default: false
    },
    resizableColumns: {
      type: Boolean,
      default: false
    },
    columnResizeMode: {
      type: String,
      default: 'fit'
    },
    reorderableColumns: {
      type: Boolean,
      default: false
    },
    expandedRows: {
      type: Array,
      default: null
    },
    expandedRowIcon: {
      type: String,
      default: 'pi-chevron-down'
    },
    collapsedRowIcon: {
      type: String,
      default: 'pi-chevron-right'
    },
    rowGroupMode: {
      type: String,
      default: null
    },
    groupRowsBy: {
      type: [Array, String],
      default: null
    },
    expandableRowGroups: {
      type: Boolean,
      default: false
    },
    expandedRowGroups: {
      type: Array,
      default: null
    },
    stateStorage: {
      type: String,
      default: 'session'
    },
    stateKey: {
      type: String,
      default: null
    },
    editMode: {
      type: String,
      default: null
    },
    editingRows: {
      type: Array,
      default: null
    },
    rowClass: {
      type: null,
      default: null
    },
    rowStyle: {
      type: null,
      default: null
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    scrollDirection: {
      type: String,
      default: 'vertical'
    },
    scrollHeight: {
      type: String,
      default: null
    },
    frozenValue: {
      type: Array,
      default: null
    },
    responsiveLayout: {
      type: String,
      default: 'stack'
    },
    breakpoint: {
      type: String,
      default: '960px'
    },
    showGridlines: {
      type: Boolean,
      default: false
    },
    stripedRows: {
      type: Boolean,
      default: false
    },
    tableStyle: {
      type: null,
      default: null
    },
    tableClass: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      allChildren: null,
      d_first: this.first,
      d_rows: this.rows,
      d_sortField: this.sortField,
      d_sortOrder: this.sortOrder,
      d_multiSortMeta: this.multiSortMeta ? _toConsumableArray(this.multiSortMeta) : [],
      d_groupRowsSortMeta: null,
      d_selectionKeys: null,
      d_expandedRowKeys: null,
      d_columnOrder: null,
      d_editingRowKeys: null,
      d_editingMeta: {},
      d_filters: this.cloneFilters(this.filters)
    };
  },
  rowTouched: false,
  anchorRowIndex: null,
  rangeRowIndex: null,
  documentColumnResizeListener: null,
  documentColumnResizeEndListener: null,
  lastResizeHelperX: null,
  resizeColumnElement: null,
  columnResizing: false,
  colReorderIconWidth: null,
  colReorderIconHeight: null,
  draggedColumn: null,
  draggedRowIndex: null,
  droppedRowIndex: null,
  rowDragging: null,
  columnWidthsState: null,
  tableWidthState: null,
  columnWidthsRestored: false,
  watch: {
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
    },
    selection: {
      immediate: true,
      handler: function handler(newValue) {
        if (this.dataKey) {
          this.updateSelectionKeys(newValue);
        }
      }
    },
    expandedRows: function expandedRows(newValue) {
      if (this.dataKey) {
        this.updateExpandedRowKeys(newValue);
      }
    },
    editingRows: function editingRows(newValue) {
      if (this.dataKey) {
        this.updateEditingRowKeys(newValue);
      }
    },
    filters: {
      deep: true,
      handler: function handler(newValue) {
        this.d_filters = this.cloneFilters(newValue);
      }
    }
  },
  beforeMount: function beforeMount() {
    if (this.isStateful()) {
      this.restoreState();
    }
  },
  mounted: function mounted() {
    this.allChildren = this.$children;
    this.$el.setAttribute(this.attributeSelector, '');
    if (this.responsiveLayout === 'stack' && !this.scrollable) {
      this.createResponsiveStyle();
    }
    if (this.isStateful() && this.resizableColumns) {
      this.restoreColumnWidths();
    }
    if (this.editMode === 'row' && this.dataKey && !this.d_editingRowKeys) {
      this.updateEditingRowKeys(this.editingRows);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindColumnResizeEvents();
    this.destroyStyleElement();
    this.destroyResponsiveStyle();
  },
  updated: function updated() {
    if (this.isStateful()) {
      this.saveState();
    }
    if (this.editMode === 'row' && this.dataKey && !this.d_editingRowKeys) {
      this.updateEditingRowKeys(this.editingRows);
    }
  },
  methods: {
    columnProp: function columnProp(col, prop) {
      return ObjectUtils.getVNodeProp(col, prop);
    },
    onPage: function onPage(event) {
      this.clearEditingMetaData();
      this.d_first = event.first;
      this.d_rows = event.rows;
      var pageEvent = this.createLazyLoadEvent(event);
      pageEvent.pageCount = event.pageCount;
      pageEvent.page = event.page;
      this.$emit('update:first', this.d_first);
      this.$emit('update:rows', this.d_rows);
      this.$emit('page', pageEvent);
      this.$emit('value-change', this.processedData);
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
          this.$emit('value-change', this.processedData);
        }
      }
    },
    sortSingle: function sortSingle(value) {
      var _this = this;
      this.clearEditingMetaData();
      if (this.groupRowsBy && this.groupRowsBy === this.sortField) {
        this.d_multiSortMeta = [{
          field: this.sortField,
          order: this.sortOrder || this.defaultSortOrder
        }, {
          field: this.d_sortField,
          order: this.d_sortOrder
        }];
        return this.sortMultiple(value);
      }
      var data = _toConsumableArray(value);
      data.sort(function (data1, data2) {
        var value1 = ObjectUtils.resolveFieldData(data1, _this.d_sortField);
        var value2 = ObjectUtils.resolveFieldData(data2, _this.d_sortField);
        var result = null;
        if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
          numeric: true
        });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return _this.d_sortOrder * result;
      });
      return data;
    },
    sortMultiple: function sortMultiple(value) {
      var _this2 = this;
      this.clearEditingMetaData();
      if (this.groupRowsBy && (this.d_groupRowsSortMeta || this.d_multiSortMeta.length && this.groupRowsBy === this.d_multiSortMeta[0].field)) {
        var firstSortMeta = this.d_multiSortMeta[0];
        !this.d_groupRowsSortMeta && (this.d_groupRowsSortMeta = firstSortMeta);
        if (firstSortMeta.field !== this.d_groupRowsSortMeta.field) {
          this.d_multiSortMeta = [this.d_groupRowsSortMeta].concat(_toConsumableArray(this.d_multiSortMeta));
        }
      }
      var data = _toConsumableArray(value);
      data.sort(function (data1, data2) {
        return _this2.multisortField(data1, data2, 0);
      });
      return data;
    },
    multisortField: function multisortField(data1, data2, index) {
      var value1 = ObjectUtils.resolveFieldData(data1, this.d_multiSortMeta[index].field);
      var value2 = ObjectUtils.resolveFieldData(data2, this.d_multiSortMeta[index].field);
      var result = null;
      if (typeof value1 === 'string' || value1 instanceof String) {
        if (value1.localeCompare && value1 !== value2) {
          return this.d_multiSortMeta[index].order * value1.localeCompare(value2, undefined, {
            numeric: true
          });
        }
      } else {
        result = value1 < value2 ? -1 : 1;
      }
      if (value1 === value2) {
        return this.d_multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, index + 1) : 0;
      }
      return this.d_multiSortMeta[index].order * result;
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
    filter: function filter(data) {
      var _this3 = this;
      if (!data) {
        return;
      }
      this.clearEditingMetaData();
      var globalFilterFieldsArray;
      if (this.filters['global']) {
        globalFilterFieldsArray = this.globalFilterFields || this.columns.map(function (col) {
          return _this3.columnProp(col, 'filterField') || _this3.columnProp(col, 'field');
        });
      }
      var filteredValue = [];
      for (var i = 0; i < data.length; i++) {
        var localMatch = true;
        var globalMatch = false;
        var localFiltered = false;
        for (var prop in this.filters) {
          if (Object.prototype.hasOwnProperty.call(this.filters, prop) && prop !== 'global') {
            localFiltered = true;
            var filterField = prop;
            var filterMeta = this.filters[filterField];
            if (filterMeta.operator) {
              var _iterator = _createForOfIteratorHelper(filterMeta.constraints),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var filterConstraint = _step.value;
                  localMatch = this.executeLocalFilter(filterField, data[i], filterConstraint);
                  if (filterMeta.operator === FilterOperator.OR && localMatch || filterMeta.operator === FilterOperator.AND && !localMatch) {
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else {
              localMatch = this.executeLocalFilter(filterField, data[i], filterMeta);
            }
            if (!localMatch) {
              break;
            }
          }
        }
        if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
          for (var j = 0; j < globalFilterFieldsArray.length; j++) {
            var globalFilterField = globalFilterFieldsArray[j];
            globalMatch = FilterService.filters[this.filters['global'].matchMode || FilterMatchMode.CONTAINS](ObjectUtils.resolveFieldData(data[i], globalFilterField), this.filters['global'].value, this.filterLocale);
            if (globalMatch) {
              break;
            }
          }
        }
        var matches = void 0;
        if (this.filters['global']) {
          matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
        } else {
          matches = localFiltered && localMatch;
        }
        if (matches) {
          filteredValue.push(data[i]);
        }
      }
      if (filteredValue.length === this.value.length) {
        filteredValue = data;
      }
      var filterEvent = this.createLazyLoadEvent();
      filterEvent.filteredValue = filteredValue;
      this.$emit('filter', filterEvent);
      this.$emit('value-change', filteredValue);
      return filteredValue;
    },
    executeLocalFilter: function executeLocalFilter(field, rowData, filterMeta) {
      var filterValue = filterMeta.value;
      var filterMatchMode = filterMeta.matchMode || FilterMatchMode.STARTS_WITH;
      var dataFieldValue = ObjectUtils.resolveFieldData(rowData, field);
      var filterConstraint = FilterService.filters[filterMatchMode];
      return filterConstraint(dataFieldValue, filterValue, this.filterLocale);
    },
    onRowClick: function onRowClick(e) {
      var event = e.originalEvent;
      if (DomHandler.isClickable(event.target)) {
        return;
      }
      this.$emit('row-click', e);
      if (this.selectionMode) {
        var rowData = e.data;
        var rowIndex = this.d_first + e.index;
        if (this.isMultipleSelectionMode() && event.shiftKey && this.anchorRowIndex != null) {
          DomHandler.clearSelection();
          this.rangeRowIndex = rowIndex;
          this.selectRange(event);
        } else {
          var selected = this.isSelected(rowData);
          var metaSelection = this.rowTouched ? false : this.metaKeySelection;
          this.anchorRowIndex = rowIndex;
          this.rangeRowIndex = rowIndex;
          if (metaSelection) {
            var metaKey = event.metaKey || event.ctrlKey;
            if (selected && metaKey) {
              if (this.isSingleSelectionMode()) {
                this.$emit('update:selection', null);
              } else {
                var selectionIndex = this.findIndexInSelection(rowData);
                var _selection = this.selection.filter(function (val, i) {
                  return i != selectionIndex;
                });
                this.$emit('update:selection', _selection);
              }
              this.$emit('row-unselect', {
                originalEvent: event,
                data: rowData,
                index: rowIndex,
                type: 'row'
              });
            } else {
              if (this.isSingleSelectionMode()) {
                this.$emit('update:selection', rowData);
              } else if (this.isMultipleSelectionMode()) {
                var _selection2 = metaKey ? this.selection || [] : [];
                _selection2 = [].concat(_toConsumableArray(_selection2), [rowData]);
                this.$emit('update:selection', _selection2);
              }
              this.$emit('row-select', {
                originalEvent: event,
                data: rowData,
                index: rowIndex,
                type: 'row'
              });
            }
          } else {
            if (this.selectionMode === 'single') {
              if (selected) {
                this.$emit('update:selection', null);
                this.$emit('row-unselect', {
                  originalEvent: event,
                  data: rowData,
                  index: rowIndex,
                  type: 'row'
                });
              } else {
                this.$emit('update:selection', rowData);
                this.$emit('row-select', {
                  originalEvent: event,
                  data: rowData,
                  index: rowIndex,
                  type: 'row'
                });
              }
            } else if (this.selectionMode === 'multiple') {
              if (selected) {
                var _selectionIndex = this.findIndexInSelection(rowData);
                var _selection3 = this.selection.filter(function (val, i) {
                  return i != _selectionIndex;
                });
                this.$emit('update:selection', _selection3);
                this.$emit('row-unselect', {
                  originalEvent: event,
                  data: rowData,
                  index: rowIndex,
                  type: 'row'
                });
              } else {
                var _selection4 = this.selection ? [].concat(_toConsumableArray(this.selection), [rowData]) : [rowData];
                this.$emit('update:selection', _selection4);
                this.$emit('row-select', {
                  originalEvent: event,
                  data: rowData,
                  index: rowIndex,
                  type: 'row'
                });
              }
            }
          }
        }
      }
      this.rowTouched = false;
    },
    onRowDblClick: function onRowDblClick(e) {
      var event = e.originalEvent;
      if (DomHandler.isClickable(event.target)) {
        return;
      }
      this.$emit('row-dblclick', e);
    },
    onRowRightClick: function onRowRightClick(event) {
      DomHandler.clearSelection();
      event.originalEvent.target.focus();
      this.$emit('update:contextMenuSelection', event.data);
      this.$emit('row-contextmenu', event);
    },
    onRowTouchEnd: function onRowTouchEnd() {
      this.rowTouched = true;
    },
    onRowKeyDown: function onRowKeyDown(e) {
      var event = e.originalEvent;
      var rowData = e.data;
      var rowIndex = e.index;
      if (this.selectionMode) {
        var row = event.target;
        switch (event.which) {
          //down arrow
          case 40:
            var nextRow = this.findNextSelectableRow(row);
            if (nextRow) {
              nextRow.focus();
            }
            event.preventDefault();
            break;

          //up arrow
          case 38:
            var prevRow = this.findPrevSelectableRow(row);
            if (prevRow) {
              prevRow.focus();
            }
            event.preventDefault();
            break;

          //enter
          case 13:
            this.onRowClick({
              originalEvent: event,
              data: rowData,
              index: rowIndex
            });
            break;
        }
      }
    },
    findNextSelectableRow: function findNextSelectableRow(row) {
      var nextRow = row.nextElementSibling;
      if (nextRow) {
        if (DomHandler.hasClass(nextRow, 'p-selectable-row')) return nextRow;else return this.findNextSelectableRow(nextRow);
      } else {
        return null;
      }
    },
    findPrevSelectableRow: function findPrevSelectableRow(row) {
      var prevRow = row.previousElementSibling;
      if (prevRow) {
        if (DomHandler.hasClass(prevRow, 'p-selectable-row')) return prevRow;else return this.findPrevSelectableRow(prevRow);
      } else {
        return null;
      }
    },
    toggleRowWithRadio: function toggleRowWithRadio(event) {
      var rowData = event.data;
      if (this.isSelected(rowData)) {
        this.$emit('update:selection', null);
        this.$emit('row-unselect', {
          originalEvent: event.originalEvent,
          data: rowData,
          index: event.index,
          type: 'radiobutton'
        });
      } else {
        this.$emit('update:selection', rowData);
        this.$emit('row-select', {
          originalEvent: event.originalEvent,
          data: rowData,
          index: event.index,
          type: 'radiobutton'
        });
      }
    },
    toggleRowWithCheckbox: function toggleRowWithCheckbox(event) {
      var rowData = event.data;
      if (this.isSelected(rowData)) {
        var selectionIndex = this.findIndexInSelection(rowData);
        var _selection = this.selection.filter(function (val, i) {
          return i != selectionIndex;
        });
        this.$emit('update:selection', _selection);
        this.$emit('row-unselect', {
          originalEvent: event.originalEvent,
          data: rowData,
          index: event.index,
          type: 'checkbox'
        });
      } else {
        var _selection5 = this.selection ? _toConsumableArray(this.selection) : [];
        _selection5 = [].concat(_toConsumableArray(_selection5), [rowData]);
        this.$emit('update:selection', _selection5);
        this.$emit('row-select', {
          originalEvent: event.originalEvent,
          data: rowData,
          index: event.index,
          type: 'checkbox'
        });
      }
    },
    toggleRowsWithCheckbox: function toggleRowsWithCheckbox(event) {
      if (this.selectAll !== null) {
        this.$emit('select-all-change', event);
      } else {
        var originalEvent = event.originalEvent,
          checked = event.checked;
        var _selection = [];
        if (checked) {
          _selection = this.frozenValue ? [].concat(_toConsumableArray(this.frozenValue), _toConsumableArray(this.processedData)) : this.processedData;
          this.$emit('row-select-all', {
            originalEvent: originalEvent,
            data: _selection
          });
        } else {
          this.$emit('row-unselect-all', {
            originalEvent: originalEvent
          });
        }
        this.$emit('update:selection', _selection);
      }
    },
    isSingleSelectionMode: function isSingleSelectionMode() {
      return this.selectionMode === 'single';
    },
    isMultipleSelectionMode: function isMultipleSelectionMode() {
      return this.selectionMode === 'multiple';
    },
    isSelected: function isSelected(rowData) {
      if (rowData && this.selection) {
        if (this.dataKey) {
          return this.d_selectionKeys ? this.d_selectionKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
        } else {
          if (this.selection instanceof Array) return this.findIndexInSelection(rowData) > -1;else return this.equals(rowData, this.selection);
        }
      }
      return false;
    },
    findIndexInSelection: function findIndexInSelection(rowData) {
      return this.findIndex(rowData, this.selection);
    },
    findIndex: function findIndex(rowData, collection) {
      var index = -1;
      if (collection && collection.length) {
        for (var i = 0; i < collection.length; i++) {
          if (this.equals(rowData, collection[i])) {
            index = i;
            break;
          }
        }
      }
      return index;
    },
    updateSelectionKeys: function updateSelectionKeys(selection) {
      this.d_selectionKeys = {};
      if (Array.isArray(selection)) {
        var _iterator2 = _createForOfIteratorHelper(selection),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var data = _step2.value;
            this.d_selectionKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        this.d_selectionKeys[String(ObjectUtils.resolveFieldData(selection, this.dataKey))] = 1;
      }
    },
    updateExpandedRowKeys: function updateExpandedRowKeys(expandedRows) {
      if (expandedRows && expandedRows.length) {
        this.d_expandedRowKeys = {};
        var _iterator3 = _createForOfIteratorHelper(expandedRows),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var data = _step3.value;
            this.d_expandedRowKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else {
        this.d_expandedRowKeys = null;
      }
    },
    updateEditingRowKeys: function updateEditingRowKeys(editingRows) {
      if (editingRows && editingRows.length) {
        this.d_editingRowKeys = {};
        var _iterator4 = _createForOfIteratorHelper(editingRows),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var data = _step4.value;
            this.d_editingRowKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } else {
        this.d_editingRowKeys = null;
      }
    },
    equals: function equals(data1, data2) {
      return this.compareSelectionBy === 'equals' ? data1 === data2 : ObjectUtils.equals(data1, data2, this.dataKey);
    },
    selectRange: function selectRange(event) {
      var rangeStart, rangeEnd;
      if (this.rangeRowIndex > this.anchorRowIndex) {
        rangeStart = this.anchorRowIndex;
        rangeEnd = this.rangeRowIndex;
      } else if (this.rangeRowIndex < this.anchorRowIndex) {
        rangeStart = this.rangeRowIndex;
        rangeEnd = this.anchorRowIndex;
      } else {
        rangeStart = this.rangeRowIndex;
        rangeEnd = this.rangeRowIndex;
      }
      if (this.lazy && this.paginator) {
        rangeStart -= this.first;
        rangeEnd -= this.first;
      }
      var value = this.processedData;
      var _selection = [];
      for (var i = rangeStart; i <= rangeEnd; i++) {
        var rangeRowData = value[i];
        _selection.push(rangeRowData);
        this.$emit('row-select', {
          originalEvent: event,
          data: rangeRowData,
          type: 'row'
        });
      }
      this.$emit('update:selection', _selection);
    },
    exportCSV: function exportCSV(options) {
      var _this4 = this;
      var data = this.processedData;
      var csv = "\uFEFF";
      if (options && options.selectionOnly) data = this.selection || [];else if (this.frozenValue) data = data ? [].concat(_toConsumableArray(this.frozenValue), _toConsumableArray(data)) : this.frozenValue;

      //headers
      var headerInitiated = false;
      for (var i = 0; i < this.columns.length; i++) {
        var column = this.columns[i];
        if (this.columnProp(column, 'exportable') !== false && this.columnProp(column, 'field')) {
          if (headerInitiated) csv += this.csvSeparator;else headerInitiated = true;
          csv += '"' + (this.columnProp(column, 'exportHeader') || this.columnProp(column, 'header') || this.columnProp(column, 'field')) + '"';
        }
      }

      //body
      if (data) {
        data.forEach(function (record) {
          csv += '\n';
          var rowInitiated = false;
          for (var _i = 0; _i < _this4.columns.length; _i++) {
            var _column = _this4.columns[_i];
            if (_this4.columnProp(_column, 'exportable') !== false && _this4.columnProp(_column, 'field')) {
              if (rowInitiated) csv += _this4.csvSeparator;else rowInitiated = true;
              var cellData = ObjectUtils.resolveFieldData(record, _this4.columnProp(_column, 'field'));
              if (cellData != null) {
                if (_this4.exportFunction) {
                  cellData = _this4.exportFunction({
                    data: cellData,
                    field: _this4.columnProp(_column, 'field')
                  });
                } else cellData = String(cellData).replace(/"/g, '""');
              } else cellData = '';
              csv += '"' + cellData + '"';
            }
          }
        });
      }
      var blob = new Blob([csv], {
        type: 'text/csv;charset=utf-8;'
      });
      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv');
      } else {
        var link = document.createElement('a');
        link.style.display = 'none';
        document.body.appendChild(link);
        if (link.download !== undefined) {
          link.setAttribute('href', URL.createObjectURL(blob));
          link.setAttribute('download', this.exportFilename + '.csv');
          link.click();
        } else {
          csv = 'data:text/csv;charset=utf-8,' + csv;
          window.open(encodeURI(csv));
        }
        document.body.removeChild(link);
      }
    },
    resetPage: function resetPage() {
      this.d_first = 0;
      this.$emit('update:first', this.d_first);
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
            if (!this.scrollable) {
              this.resizeColumnElement.style.width = newColumnWidth + 'px';
              if (nextColumn) {
                nextColumn.style.width = nextColumnWidth + 'px';
              }
            } else {
              this.resizeTableCells(newColumnWidth, nextColumnWidth);
            }
          }
        } else if (this.columnResizeMode === 'expand') {
          var tableWidth = this.$refs.table.offsetWidth + delta + 'px';
          this.$refs.table.style.width = tableWidth;
          this.$refs.table.style.minWidth = tableWidth;
          if (!this.scrollable) this.resizeColumnElement.style.width = newColumnWidth + 'px';else this.resizeTableCells(newColumnWidth);
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
      if (this.isStateful()) {
        this.saveState();
      }
    },
    resizeTableCells: function resizeTableCells(newColumnWidth, nextColumnWidth) {
      var _this5 = this;
      var colIndex = DomHandler.index(this.resizeColumnElement);
      var widths = [];
      var headers = DomHandler.find(this.$refs.table, '.p-datatable-thead > tr > th');
      headers.forEach(function (header) {
        return widths.push(DomHandler.getOuterWidth(header));
      });
      this.destroyStyleElement();
      this.createStyleElement();
      var innerHTML = '';
      widths.forEach(function (width, index) {
        var colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;
        innerHTML += "\n                    .p-datatable[".concat(_this5.attributeSelector, "] .p-datatable-thead > tr > th:nth-child(").concat(index + 1, ") {\n                        flex: 0 0 ").concat(colWidth, "px !important;\n                    }\n\n                    .p-datatable[").concat(_this5.attributeSelector, "] .p-datatable-tbody > tr > td:nth-child(").concat(index + 1, ") {\n                        flex: 0 0 ").concat(colWidth, "px !important;\n                    }\n                ");
      });
      this.styleElement.innerHTML = innerHTML;
    },
    bindColumnResizeEvents: function bindColumnResizeEvents() {
      var _this6 = this;
      if (!this.documentColumnResizeListener) {
        this.documentColumnResizeListener = document.addEventListener('mousemove', function () {
          if (_this6.columnResizing) {
            _this6.onColumnResize(event);
          }
        });
      }
      if (!this.documentColumnResizeEndListener) {
        this.documentColumnResizeEndListener = document.addEventListener('mouseup', function () {
          if (_this6.columnResizing) {
            _this6.columnResizing = false;
            _this6.onColumnResizeEnd();
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
    onColumnHeaderMouseDown: function onColumnHeaderMouseDown(e) {
      var event = e.originalEvent;
      var column = e.column;
      if (this.reorderableColumns && this.columnProp(column, 'reorderableColumn') !== false) {
        if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || DomHandler.hasClass(event.target, 'p-column-resizer')) event.currentTarget.draggable = false;else event.currentTarget.draggable = true;
      }
    },
    onColumnHeaderDragStart: function onColumnHeaderDragStart(event) {
      if (this.columnResizing) {
        event.preventDefault();
        return;
      }
      this.colReorderIconWidth = DomHandler.getHiddenElementOuterWidth(this.$refs.reorderIndicatorUp);
      this.colReorderIconHeight = DomHandler.getHiddenElementOuterHeight(this.$refs.reorderIndicatorUp);
      this.draggedColumn = this.findParentHeader(event.target);
      event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
    },
    onColumnHeaderDragOver: function onColumnHeaderDragOver(event) {
      var dropHeader = this.findParentHeader(event.target);
      if (this.reorderableColumns && this.draggedColumn && dropHeader) {
        event.preventDefault();
        var containerOffset = DomHandler.getOffset(this.$el);
        var dropHeaderOffset = DomHandler.getOffset(dropHeader);
        if (this.draggedColumn !== dropHeader) {
          var targetLeft = dropHeaderOffset.left - containerOffset.left;
          var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
          this.$refs.reorderIndicatorUp.style.top = dropHeaderOffset.top - containerOffset.top - (this.colReorderIconHeight - 1) + 'px';
          this.$refs.reorderIndicatorDown.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
          if (event.pageX > columnCenter) {
            this.$refs.reorderIndicatorUp.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2) + 'px';
            this.$refs.reorderIndicatorDown.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2) + 'px';
            this.dropPosition = 1;
          } else {
            this.$refs.reorderIndicatorUp.style.left = targetLeft - Math.ceil(this.colReorderIconWidth / 2) + 'px';
            this.$refs.reorderIndicatorDown.style.left = targetLeft - Math.ceil(this.colReorderIconWidth / 2) + 'px';
            this.dropPosition = -1;
          }
          this.$refs.reorderIndicatorUp.style.display = 'block';
          this.$refs.reorderIndicatorDown.style.display = 'block';
        }
      }
    },
    onColumnHeaderDragLeave: function onColumnHeaderDragLeave(event) {
      if (this.reorderableColumns && this.draggedColumn) {
        event.preventDefault();
        this.$refs.reorderIndicatorUp.style.display = 'none';
        this.$refs.reorderIndicatorDown.style.display = 'none';
      }
    },
    onColumnHeaderDrop: function onColumnHeaderDrop(event) {
      event.preventDefault();
      if (this.draggedColumn) {
        var dragIndex = DomHandler.index(this.draggedColumn);
        var dropIndex = DomHandler.index(this.findParentHeader(event.target));
        var allowDrop = dragIndex !== dropIndex;
        if (allowDrop && (dropIndex - dragIndex === 1 && this.dropPosition === -1 || dragIndex - dropIndex === 1 && this.dropPosition === 1)) {
          allowDrop = false;
        }
        if (allowDrop) {
          ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
          this.updateReorderableColumns();
          this.$emit('column-reorder', {
            originalEvent: event,
            dragIndex: dragIndex,
            dropIndex: dropIndex
          });
        }
        this.$refs.reorderIndicatorUp.style.display = 'none';
        this.$refs.reorderIndicatorDown.style.display = 'none';
        this.draggedColumn.draggable = false;
        this.draggedColumn = null;
        this.dropPosition = null;
      }
    },
    findParentHeader: function findParentHeader(element) {
      if (element.nodeName === 'TH') {
        return element;
      } else {
        var parent = element.parentElement;
        while (parent.nodeName !== 'TH') {
          parent = parent.parentElement;
          if (!parent) break;
        }
        return parent;
      }
    },
    findColumnByKey: function findColumnByKey(columns, key) {
      if (columns && columns.length) {
        for (var i = 0; i < columns.length; i++) {
          var column = columns[i];
          if (this.columnProp(column, 'columnKey') === key || this.columnProp(column, 'field') === key) {
            return column;
          }
        }
      }
      return null;
    },
    onRowMouseDown: function onRowMouseDown(event) {
      if (DomHandler.hasClass(event.target, 'p-datatable-reorderablerow-handle')) event.currentTarget.draggable = true;else event.currentTarget.draggable = false;
    },
    onRowDragStart: function onRowDragStart(e) {
      var event = e.originalEvent;
      var index = e.index;
      this.rowDragging = true;
      this.draggedRowIndex = index;
      event.dataTransfer.setData('text', 'b'); // For firefox
    },
    onRowDragOver: function onRowDragOver(e) {
      var event = e.originalEvent;
      var index = e.index;
      if (this.rowDragging && this.draggedRowIndex !== index) {
        var rowElement = event.currentTarget;
        var rowY = DomHandler.getOffset(rowElement).top + DomHandler.getWindowScrollTop();
        var pageY = event.pageY;
        var rowMidY = rowY + DomHandler.getOuterHeight(rowElement) / 2;
        var prevRowElement = rowElement.previousElementSibling;
        if (pageY < rowMidY) {
          DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
          this.droppedRowIndex = index;
          if (prevRowElement) DomHandler.addClass(prevRowElement, 'p-datatable-dragpoint-bottom');else DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
        } else {
          if (prevRowElement) DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');else DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
          this.droppedRowIndex = index + 1;
          DomHandler.addClass(rowElement, 'p-datatable-dragpoint-bottom');
        }
        event.preventDefault();
      }
    },
    onRowDragLeave: function onRowDragLeave(event) {
      var rowElement = event.currentTarget;
      var prevRowElement = rowElement.previousElementSibling;
      if (prevRowElement) {
        DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
      }
      DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
      DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top');
    },
    onRowDragEnd: function onRowDragEnd(event) {
      this.rowDragging = false;
      this.draggedRowIndex = null;
      this.droppedRowIndex = null;
      event.currentTarget.draggable = false;
    },
    onRowDrop: function onRowDrop(event) {
      if (this.droppedRowIndex != null) {
        var dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;
        var processedData = _toConsumableArray(this.processedData);
        ObjectUtils.reorderArray(processedData, this.draggedRowIndex, dropIndex);
        this.$emit('row-reorder', {
          originalEvent: event,
          dragIndex: this.draggedRowIndex,
          dropIndex: dropIndex,
          value: processedData
        });
      }

      //cleanup
      this.onRowDragLeave(event);
      this.onRowDragEnd(event);
      event.preventDefault();
    },
    toggleRow: function toggleRow(event) {
      var rowData = event.data;
      var expanded;
      var expandedRowIndex;
      var _expandedRows = this.expandedRows ? _toConsumableArray(this.expandedRows) : [];
      if (this.dataKey) {
        expanded = this.d_expandedRowKeys ? this.d_expandedRowKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
      } else {
        expandedRowIndex = this.findIndex(rowData, this.expandedRows);
        expanded = expandedRowIndex > -1;
      }
      if (expanded) {
        if (expandedRowIndex == null) {
          expandedRowIndex = this.findIndex(rowData, this.expandedRows);
        }
        _expandedRows.splice(expandedRowIndex, 1);
        this.$emit('update:expandedRows', _expandedRows);
        this.$emit('row-collapse', event);
      } else {
        _expandedRows.push(rowData);
        this.$emit('update:expandedRows', _expandedRows);
        this.$emit('row-expand', event);
      }
    },
    toggleRowGroup: function toggleRowGroup(e) {
      var event = e.originalEvent;
      var data = e.data;
      var groupFieldValue = ObjectUtils.resolveFieldData(data, this.groupRowsBy);
      var _expandedRowGroups = this.expandedRowGroups ? _toConsumableArray(this.expandedRowGroups) : [];
      if (this.isRowGroupExpanded(data)) {
        _expandedRowGroups = _expandedRowGroups.filter(function (group) {
          return group !== groupFieldValue;
        });
        this.$emit('update:expandedRowGroups', _expandedRowGroups);
        this.$emit('rowgroup-collapse', {
          originalEvent: event,
          data: groupFieldValue
        });
      } else {
        _expandedRowGroups.push(groupFieldValue);
        this.$emit('update:expandedRowGroups', _expandedRowGroups);
        this.$emit('rowgroup-expand', {
          originalEvent: event,
          data: groupFieldValue
        });
      }
    },
    isRowGroupExpanded: function isRowGroupExpanded(rowData) {
      if (this.expandableRowGroups && this.expandedRowGroups) {
        var groupFieldValue = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
        return this.expandedRowGroups.indexOf(groupFieldValue) > -1;
      }
      return false;
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
      var storage = this.getStorage();
      var state = {};
      if (this.paginator) {
        state.first = this.d_first;
        state.rows = this.d_rows;
      }
      if (this.d_sortField) {
        state.sortField = this.d_sortField;
        state.sortOrder = this.d_sortOrder;
      }
      if (this.d_multiSortMeta) {
        state.multiSortMeta = this.d_multiSortMeta;
      }
      if (this.hasFilters) {
        state.filters = this.filters;
      }
      if (this.resizableColumns) {
        this.saveColumnWidths(state);
      }
      if (this.reorderableColumns) {
        state.columnOrder = this.d_columnOrder;
      }
      if (this.expandedRows) {
        state.expandedRows = this.expandedRows;
        state.expandedRowKeys = this.d_expandedRowKeys;
      }
      if (this.expandedRowGroups) {
        state.expandedRowGroups = this.expandedRowGroups;
      }
      if (this.selection) {
        state.selection = this.selection;
        state.selectionKeys = this.d_selectionKeys;
      }
      if (Object.keys(state).length) {
        storage.setItem(this.stateKey, JSON.stringify(state));
      }
      this.$emit('state-save', state);
    },
    restoreState: function restoreState() {
      var storage = this.getStorage();
      var stateString = storage.getItem(this.stateKey);
      var dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
      var reviver = function reviver(key, value) {
        if (typeof value === 'string' && dateFormat.test(value)) {
          return new Date(value);
        }
        return value;
      };
      if (stateString) {
        var restoredState = JSON.parse(stateString, reviver);
        if (this.paginator) {
          this.d_first = restoredState.first;
          this.d_rows = restoredState.rows;
        }
        if (restoredState.sortField) {
          this.d_sortField = restoredState.sortField;
          this.d_sortOrder = restoredState.sortOrder;
        }
        if (restoredState.multiSortMeta) {
          this.d_multiSortMeta = restoredState.multiSortMeta;
        }
        if (restoredState.filters) {
          this.$emit('update:filters', restoredState.filters);
        }
        if (this.resizableColumns) {
          this.columnWidthsState = restoredState.columnWidths;
          this.tableWidthState = restoredState.tableWidth;
        }
        if (this.reorderableColumns) {
          this.d_columnOrder = restoredState.columnOrder;
        }
        if (restoredState.expandedRows) {
          this.d_expandedRowKeys = restoredState.expandedRowKeys;
          this.$emit('update:expandedRows', restoredState.expandedRows);
        }
        if (restoredState.expandedRowGroups) {
          this.$emit('update:expandedRowGroups', restoredState.expandedRowGroups);
        }
        if (restoredState.selection) {
          this.d_selectionKeys = restoredState.d_selectionKeys;
          this.$emit('update:selection', restoredState.selection);
        }
        this.$emit('state-restore', restoredState);
      }
    },
    saveColumnWidths: function saveColumnWidths(state) {
      var widths = [];
      var headers = DomHandler.find(this.$el, '.p-datatable-thead > tr > th');
      headers.forEach(function (header) {
        return widths.push(DomHandler.getOuterWidth(header));
      });
      state.columnWidths = widths.join(',');
      if (this.columnResizeMode === 'expand') {
        state.tableWidth = DomHandler.getOuterWidth(this.$refs.table) + 'px';
      }
    },
    restoreColumnWidths: function restoreColumnWidths() {
      var _this7 = this;
      if (this.columnWidthsState) {
        var widths = this.columnWidthsState.split(',');
        if (this.columnResizeMode === 'expand' && this.tableWidthState) {
          this.$refs.table.style.width = this.tableWidthState;
          this.$refs.table.style.minWidth = this.tableWidthState;
          this.$el.style.width = this.tableWidthState;
        }
        this.createStyleElement();
        if (this.scrollable && widths && widths.length > 0) {
          var innerHTML = '';
          widths.forEach(function (width, index) {
            innerHTML += "\n                            .p-datatable[".concat(_this7.attributeSelector, "] .p-datatable-thead > tr > th:nth-child(").concat(index + 1, ") {\n                                flex: 0 0 ").concat(width, "px;\n                            }\n\n                            .p-datatable[").concat(_this7.attributeSelector, "] .p-datatable-tbody > tr > td:nth-child(").concat(index + 1, ") {\n                                flex: 0 0 ").concat(width, "px;\n                            }\n                        ");
          });
          this.styleElement.innerHTML = innerHTML;
        } else {
          DomHandler.find(this.$refs.table, '.p-datatable-thead > tr > th').forEach(function (header, index) {
            return header.style.width = widths[index] + 'px';
          });
        }
      }
    },
    onCellEditInit: function onCellEditInit(event) {
      this.$emit('cell-edit-init', event);
    },
    onCellEditComplete: function onCellEditComplete(event) {
      this.$emit('cell-edit-complete', event);
    },
    onCellEditCancel: function onCellEditCancel(event) {
      this.$emit('cell-edit-cancel', event);
    },
    onRowEditInit: function onRowEditInit(event) {
      var _editingRows = this.editingRows ? _toConsumableArray(this.editingRows) : [];
      _editingRows.push(event.data);
      this.$emit('update:editingRows', _editingRows);
      this.$emit('row-edit-init', event);
    },
    onRowEditSave: function onRowEditSave(event) {
      var _editingRows = _toConsumableArray(this.editingRows);
      _editingRows.splice(this.findIndex(event.data, _editingRows), 1);
      this.$emit('update:editingRows', _editingRows);
      this.$emit('row-edit-save', event);
    },
    onRowEditCancel: function onRowEditCancel(event) {
      var _editingRows = _toConsumableArray(this.editingRows);
      _editingRows.splice(this.findIndex(event.data, _editingRows), 1);
      this.$emit('update:editingRows', _editingRows);
      this.$emit('row-edit-cancel', event);
    },
    onEditingMetaChange: function onEditingMetaChange(event) {
      var data = event.data,
        field = event.field,
        index = event.index,
        editing = event.editing;
      var editingMeta = _objectSpread({}, this.d_editingMeta || {});
      var meta = editingMeta[index];
      if (editing) {
        !meta && (meta = editingMeta[index] = {
          data: _objectSpread({}, data),
          fields: []
        });
        meta['fields'].push(field);
      } else if (meta) {
        var fields = meta['fields'].filter(function (f) {
          return f !== field;
        });
        !fields.length ? delete editingMeta[index] : meta['fields'] = fields;
      }
      this.d_editingMeta = editingMeta;
    },
    clearEditingMetaData: function clearEditingMetaData() {
      if (this.editMode) {
        this.d_editingMeta = {};
      }
    },
    createLazyLoadEvent: function createLazyLoadEvent(event) {
      return {
        originalEvent: event,
        first: this.d_first,
        rows: this.d_rows,
        sortField: this.d_sortField,
        sortOrder: this.d_sortOrder,
        multiSortMeta: this.d_multiSortMeta,
        filters: this.d_filters
      };
    },
    hasGlobalFilter: function hasGlobalFilter() {
      return this.filters && Object.prototype.hasOwnProperty.call(this.filters, 'global');
    },
    getChildren: function getChildren() {
      return this.$scopedSlots.default ? this.$scopedSlots.default() : null;
    },
    onFilterChange: function onFilterChange(filters) {
      this.d_filters = filters;
    },
    onFilterApply: function onFilterApply() {
      this.d_first = 0;
      this.$emit('update:first', this.d_first);
      this.$emit('update:filters', this.d_filters);
      if (this.lazy) {
        this.$emit('filter', this.createLazyLoadEvent());
      }
    },
    cloneFilters: function cloneFilters() {
      var cloned = {};
      if (this.filters) {
        Object.entries(this.filters).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            prop = _ref2[0],
            value = _ref2[1];
          cloned[prop] = value.operator ? {
            operator: value.operator,
            constraints: value.constraints.map(function (constraint) {
              return _objectSpread({}, constraint);
            })
          } : _objectSpread({}, value);
        });
      }
      return cloned;
    },
    updateReorderableColumns: function updateReorderableColumns() {
      var _this8 = this;
      var columnOrder = [];
      this.columns.forEach(function (col) {
        return columnOrder.push(_this8.columnProp(col, 'columnKey') || _this8.columnProp(col, 'field'));
      });
      this.d_columnOrder = columnOrder;
    },
    createStyleElement: function createStyleElement() {
      this.styleElement = document.createElement('style');
      this.styleElement.type = 'text/css';
      document.head.appendChild(this.styleElement);
    },
    createResponsiveStyle: function createResponsiveStyle() {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = document.createElement('style');
        this.responsiveStyleElement.type = 'text/css';
        document.head.appendChild(this.responsiveStyleElement);
        var innerHTML = "\n@media screen and (max-width: ".concat(this.breakpoint, ") {\n    .p-datatable[").concat(this.attributeSelector, "] .p-datatable-thead > tr > th,\n    .p-datatable[").concat(this.attributeSelector, "] .p-datatable-tfoot > tr > td {\n        display: none !important;\n    }\n\n    .p-datatable[").concat(this.attributeSelector, "] .p-datatable-tbody > tr > td {\n        display: flex;\n        width: 100% !important;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .p-datatable[").concat(this.attributeSelector, "] .p-datatable-tbody > tr > td:not(:last-child) {\n        border: 0 none;\n    }\n\n    .p-datatable[").concat(this.attributeSelector, "].p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {\n        border-top: 0;\n        border-right: 0;\n        border-left: 0;\n    }\n\n    .p-datatable[").concat(this.attributeSelector, "] .p-datatable-tbody > tr > td > .p-column-title {\n        display: block;\n    }\n}\n");
        this.responsiveStyleElement.innerHTML = innerHTML;
      }
    },
    destroyResponsiveStyle: function destroyResponsiveStyle() {
      if (this.responsiveStyleElement) {
        document.head.removeChild(this.responsiveStyleElement);
        this.responsiveStyleElement = null;
      }
    },
    destroyStyleElement: function destroyStyleElement() {
      if (this.styleElement) {
        document.head.removeChild(this.styleElement);
        this.styleElement = null;
      }
    },
    recursiveGetChildren: function recursiveGetChildren(children, results) {
      var _this9 = this;
      if (!results) {
        results = [];
      }
      if (children && children.length) {
        children.forEach(function (child) {
          if (child.children instanceof Array) {
            results.concat(_this9.recursiveGetChildren(child.children, results));
          } else if (child.type.name == 'Column') {
            results.push(child);
          }
        });
      }
      return results;
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-datatable p-component', {
        'p-datatable-hoverable-rows': this.rowHover || this.selectionMode,
        'p-datatable-auto-layout': this.autoLayout,
        'p-datatable-resizable': this.resizableColumns,
        'p-datatable-resizable-fit': this.resizableColumns && this.columnResizeMode === 'fit',
        'p-datatable-scrollable': this.scrollable,
        'p-datatable-scrollable-vertical': this.scrollable && this.scrollDirection === 'vertical',
        'p-datatable-scrollable-horizontal': this.scrollable && this.scrollDirection === 'horizontal',
        'p-datatable-scrollable-both': this.scrollable && this.scrollDirection === 'both',
        'p-datatable-flex-scrollable': this.scrollable && this.scrollHeight === 'flex',
        'p-datatable-responsive-stack': this.responsiveLayout === 'stack',
        'p-datatable-responsive-scroll': this.responsiveLayout === 'scroll',
        'p-datatable-striped': this.stripedRows,
        'p-datatable-gridlines': this.showGridlines,
        'p-datatable-grouped-header': this.headerColumnGroup != null,
        'p-datatable-grouped-footer': this.footerColumnGroup != null
      }];
    },
    columns: function columns() {
      var columns = [];
      if (this.allChildren) {
        columns = this.allChildren.filter(function (child) {
          return child.$options._propKeys.indexOf('columnKey') !== -1;
        });
        if (this.reorderableColumns && this.d_columnOrder) {
          var orderedColumns = [];
          var _iterator5 = _createForOfIteratorHelper(this.d_columnOrder),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var columnKey = _step5.value;
              var column = this.findColumnByKey(columns, columnKey);
              if (column) {
                orderedColumns.push(column);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          return [].concat(orderedColumns, _toConsumableArray(columns.filter(function (item) {
            return orderedColumns.indexOf(item) < 0;
          })));
        }
      }
      return columns;
    },
    headerColumnGroup: function headerColumnGroup() {
      if (this.allChildren) {
        var _iterator6 = _createForOfIteratorHelper(this.allChildren),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var child = _step6.value;
            if (child.$vnode.tag.indexOf('columngroup') !== -1 && this.columnProp(child, 'type') === 'header') {
              return child;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
      return null;
    },
    footerColumnGroup: function footerColumnGroup() {
      if (this.allChildren) {
        var _iterator7 = _createForOfIteratorHelper(this.allChildren),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var child = _step7.value;
            if (child.$vnode.tag.indexOf('columngroup') !== -1 && this.columnProp(child, 'type') === 'footer') {
              return child;
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
      return null;
    },
    hasFilters: function hasFilters() {
      return this.filters && Object.keys(this.filters).length > 0 && this.filters.constructor === Object;
    },
    processedData: function processedData() {
      var data = this.value || [];
      if (!this.lazy) {
        if (data && data.length) {
          if (this.hasFilters) {
            data = this.filter(data);
          }
          if (this.sorted) {
            if (this.sortMode === 'single') data = this.sortSingle(data);else if (this.sortMode === 'multiple') data = this.sortMultiple(data);
          }
        }
      }
      return data;
    },
    dataToRender: function dataToRender() {
      var data = this.processedData;
      if (data && this.paginator) {
        var first = this.lazy ? 0 : this.d_first;
        return data.slice(first, first + this.d_rows);
      } else {
        return data;
      }
    },
    totalRecordsLength: function totalRecordsLength() {
      if (this.lazy) {
        return this.totalRecords;
      } else {
        var data = this.processedData;
        return data ? data.length : 0;
      }
    },
    empty: function empty() {
      var data = this.processedData;
      return !data || data.length === 0;
    },
    paginatorTop: function paginatorTop() {
      return this.paginator && (this.paginatorPosition !== 'bottom' || this.paginatorPosition === 'both');
    },
    paginatorBottom: function paginatorBottom() {
      return this.paginator && (this.paginatorPosition !== 'top' || this.paginatorPosition === 'both');
    },
    sorted: function sorted() {
      return this.d_sortField || this.d_multiSortMeta && this.d_multiSortMeta.length > 0;
    },
    loadingIconClass: function loadingIconClass() {
      return ['p-datatable-loading-icon pi-spin', this.loadingIcon];
    },
    allRowsSelected: function allRowsSelected() {
      var _this10 = this;
      if (this.selectAll !== null) {
        return this.selectAll;
      } else {
        var val = this.frozenValue ? [].concat(_toConsumableArray(this.frozenValue), _toConsumableArray(this.processedData)) : this.processedData;
        return val && this.selection && Array.isArray(this.selection) && val.every(function (v) {
          return _this10.selection.some(function (s) {
            return _this10.equals(s, v);
          });
        });
      }
    },
    attributeSelector: function attributeSelector() {
      return UniqueComponentId();
    },
    groupRowSortField: function groupRowSortField() {
      return this.sortMode === 'single' ? this.sortField : this.d_groupRowsSortMeta ? this.d_groupRowsSortMeta.field : null;
    }
  },
  components: {
    'DTPaginator': Paginator,
    'DTTableHeader': __vue_component__$7,
    'DTTableBody': __vue_component__$3,
    'DTTableFooter': __vue_component__$1
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
    class: _vm.containerClass,
    attrs: {
      "data-scrollselectors": ".p-datatable-wrapper"
    }
  }, [_vm._t("default"), _vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "p-datatable-loading-overlay p-component-overlay"
  }, [_c("i", {
    class: _vm.loadingIconClass
  })]) : _vm._e(), _vm._v(" "), _vm.$scopedSlots.header ? _c("div", {
    staticClass: "p-datatable-header"
  }, [_vm._t("header")], 2) : _vm._e(), _vm._v(" "), _vm.paginatorTop ? _c("DTPaginator", {
    staticClass: "p-paginator-top",
    attrs: {
      rows: _vm.d_rows,
      first: _vm.lazy ? 0 : _vm.d_first,
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
    staticClass: "p-datatable-wrapper",
    style: {
      maxHeight: _vm.scrollHeight
    }
  }, [_c("table", {
    ref: "table",
    class: [_vm.tableClass, "p-datatable-table"],
    style: _vm.tableStyle,
    attrs: {
      role: "table"
    }
  }, [_c("DTTableHeader", {
    attrs: {
      columnGroup: _vm.headerColumnGroup,
      columns: _vm.columns,
      rowGroupMode: _vm.rowGroupMode,
      groupRowsBy: _vm.groupRowsBy,
      groupRowSortField: _vm.groupRowSortField,
      resizableColumns: _vm.resizableColumns,
      allRowsSelected: _vm.allRowsSelected,
      empty: _vm.empty,
      sortMode: _vm.sortMode,
      sortField: _vm.d_sortField,
      sortOrder: _vm.d_sortOrder,
      multiSortMeta: _vm.d_multiSortMeta,
      filters: _vm.d_filters,
      filtersStore: _vm.filters,
      filterDisplay: _vm.filterDisplay
    },
    on: {
      "column-click": function columnClick($event) {
        return _vm.onColumnHeaderClick($event);
      },
      "column-mousedown": function columnMousedown($event) {
        return _vm.onColumnHeaderMouseDown($event);
      },
      "filter-change": _vm.onFilterChange,
      "filter-apply": _vm.onFilterApply,
      "column-dragstart": function columnDragstart($event) {
        return _vm.onColumnHeaderDragStart($event);
      },
      "column-dragover": function columnDragover($event) {
        return _vm.onColumnHeaderDragOver($event);
      },
      "column-dragleave": function columnDragleave($event) {
        return _vm.onColumnHeaderDragLeave($event);
      },
      "column-drop": function columnDrop($event) {
        return _vm.onColumnHeaderDrop($event);
      },
      "column-resizestart": function columnResizestart($event) {
        return _vm.onColumnResizeStart($event);
      },
      "checkbox-change": function checkboxChange($event) {
        return _vm.toggleRowsWithCheckbox($event);
      }
    }
  }), _vm._v(" "), _vm.frozenValue ? _c("DTTableBody", {
    staticClass: "p-datatable-frozen-tbody",
    attrs: {
      value: _vm.frozenValue,
      frozenRow: true,
      columns: _vm.columns,
      dataKey: _vm.dataKey,
      selection: _vm.selection,
      selectionKeys: _vm.d_selectionKeys,
      selectionMode: _vm.selectionMode,
      contextMenu: _vm.contextMenu,
      contextMenuSelection: _vm.contextMenuSelection,
      rowGroupMode: _vm.rowGroupMode,
      groupRowsBy: _vm.groupRowsBy,
      expandableRowGroups: _vm.expandableRowGroups,
      rowClass: _vm.rowClass,
      rowStyle: _vm.rowStyle,
      editMode: _vm.editMode,
      compareSelectionBy: _vm.compareSelectionBy,
      scrollable: _vm.scrollable,
      expandedRowIcon: _vm.expandedRowIcon,
      collapsedRowIcon: _vm.collapsedRowIcon,
      expandedRows: _vm.expandedRows,
      expandedRowKeys: _vm.d_expandedRowKeys,
      expandedRowGroups: _vm.expandedRowGroups,
      editingRows: _vm.editingRows,
      editingRowKeys: _vm.d_editingRowKeys,
      templates: _vm.$scopedSlots,
      loading: _vm.loading,
      responsiveLayout: _vm.responsiveLayout,
      editingMeta: _vm.d_editingMeta
    },
    on: {
      "rowgroup-toggle": _vm.toggleRowGroup,
      "row-click": function rowClick($event) {
        return _vm.onRowClick($event);
      },
      "row-dblclick": function rowDblclick($event) {
        return _vm.onRowDblClick($event);
      },
      "row-rightclick": function rowRightclick($event) {
        return _vm.onRowRightClick($event);
      },
      "row-touchend": _vm.onRowTouchEnd,
      "row-keydown": _vm.onRowKeyDown,
      "row-mousedown": _vm.onRowMouseDown,
      "row-dragstart": function rowDragstart($event) {
        return _vm.onRowDragStart($event);
      },
      "row-dragover": function rowDragover($event) {
        return _vm.onRowDragOver($event);
      },
      "row-dragleave": function rowDragleave($event) {
        return _vm.onRowDragLeave($event);
      },
      "row-dragend": function rowDragend($event) {
        return _vm.onRowDragEnd($event);
      },
      "row-drop": function rowDrop($event) {
        return _vm.onRowDrop($event);
      },
      "row-toggle": function rowToggle($event) {
        return _vm.toggleRow($event);
      },
      "radio-change": function radioChange($event) {
        return _vm.toggleRowWithRadio($event);
      },
      "checkbox-change": function checkboxChange($event) {
        return _vm.toggleRowWithCheckbox($event);
      },
      "cell-edit-init": function cellEditInit($event) {
        return _vm.onCellEditInit($event);
      },
      "cell-edit-complete": function cellEditComplete($event) {
        return _vm.onCellEditComplete($event);
      },
      "cell-edit-cancel": function cellEditCancel($event) {
        return _vm.onCellEditCancel($event);
      },
      "row-edit-init": function rowEditInit($event) {
        return _vm.onRowEditInit($event);
      },
      "row-edit-save": function rowEditSave($event) {
        return _vm.onRowEditSave($event);
      },
      "row-edit-cancel": function rowEditCancel($event) {
        return _vm.onRowEditCancel($event);
      },
      "editing-meta-change": _vm.onEditingMetaChange
    }
  }) : _vm._e(), _vm._v(" "), _c("DTTableBody", {
    attrs: {
      value: _vm.dataToRender,
      columns: _vm.columns,
      empty: _vm.empty,
      dataKey: _vm.dataKey,
      selection: _vm.selection,
      selectionKeys: _vm.d_selectionKeys,
      selectionMode: _vm.selectionMode,
      contextMenu: _vm.contextMenu,
      contextMenuSelection: _vm.contextMenuSelection,
      rowGroupMode: _vm.rowGroupMode,
      groupRowsBy: _vm.groupRowsBy,
      expandableRowGroups: _vm.expandableRowGroups,
      rowClass: _vm.rowClass,
      rowStyle: _vm.rowStyle,
      editMode: _vm.editMode,
      compareSelectionBy: _vm.compareSelectionBy,
      scrollable: _vm.scrollable,
      expandedRowIcon: _vm.expandedRowIcon,
      collapsedRowIcon: _vm.collapsedRowIcon,
      expandedRows: _vm.expandedRows,
      expandedRowKeys: _vm.d_expandedRowKeys,
      expandedRowGroups: _vm.expandedRowGroups,
      editingRows: _vm.editingRows,
      editingRowKeys: _vm.d_editingRowKeys,
      templates: _vm.$scopedSlots,
      loading: _vm.loading,
      responsiveLayout: _vm.responsiveLayout,
      editingMeta: _vm.d_editingMeta
    },
    on: {
      "rowgroup-toggle": _vm.toggleRowGroup,
      "row-click": function rowClick($event) {
        return _vm.onRowClick($event);
      },
      "row-dblclick": function rowDblclick($event) {
        return _vm.onRowDblClick($event);
      },
      "row-rightclick": function rowRightclick($event) {
        return _vm.onRowRightClick($event);
      },
      "row-touchend": _vm.onRowTouchEnd,
      "row-keydown": _vm.onRowKeyDown,
      "row-mousedown": _vm.onRowMouseDown,
      "row-dragstart": function rowDragstart($event) {
        return _vm.onRowDragStart($event);
      },
      "row-dragover": function rowDragover($event) {
        return _vm.onRowDragOver($event);
      },
      "row-dragleave": function rowDragleave($event) {
        return _vm.onRowDragLeave($event);
      },
      "row-dragend": function rowDragend($event) {
        return _vm.onRowDragEnd($event);
      },
      "row-drop": function rowDrop($event) {
        return _vm.onRowDrop($event);
      },
      "row-toggle": function rowToggle($event) {
        return _vm.toggleRow($event);
      },
      "radio-change": function radioChange($event) {
        return _vm.toggleRowWithRadio($event);
      },
      "checkbox-change": function checkboxChange($event) {
        return _vm.toggleRowWithCheckbox($event);
      },
      "cell-edit-init": function cellEditInit($event) {
        return _vm.onCellEditInit($event);
      },
      "cell-edit-complete": function cellEditComplete($event) {
        return _vm.onCellEditComplete($event);
      },
      "cell-edit-cancel": function cellEditCancel($event) {
        return _vm.onCellEditCancel($event);
      },
      "row-edit-init": function rowEditInit($event) {
        return _vm.onRowEditInit($event);
      },
      "row-edit-save": function rowEditSave($event) {
        return _vm.onRowEditSave($event);
      },
      "row-edit-cancel": function rowEditCancel($event) {
        return _vm.onRowEditCancel($event);
      },
      "editing-meta-change": _vm.onEditingMetaChange
    }
  }), _vm._v(" "), _c("DTTableFooter", {
    attrs: {
      columnGroup: _vm.footerColumnGroup,
      columns: _vm.columns
    }
  })], 1)]), _vm._v(" "), _vm.paginatorBottom ? _c("DTPaginator", {
    staticClass: "p-paginator-bottom",
    attrs: {
      rows: _vm.d_rows,
      first: _vm.lazy ? 0 : _vm.d_first,
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
    staticClass: "p-datatable-footer"
  }, [_vm._t("footer")], 2) : _vm._e(), _vm._v(" "), _c("div", {
    ref: "resizeHelper",
    staticClass: "p-column-resizer-helper",
    staticStyle: {
      display: "none"
    }
  }), _vm._v(" "), _vm.reorderableColumns ? _c("span", {
    ref: "reorderIndicatorUp",
    staticClass: "pi pi-arrow-down p-datatable-reorder-indicator-up",
    staticStyle: {
      position: "absolute",
      display: "none"
    }
  }) : _vm._e(), _vm._v(" "), _vm.reorderableColumns ? _c("span", {
    ref: "reorderIndicatorDown",
    staticClass: "pi pi-arrow-up p-datatable-reorder-indicator-down",
    staticStyle: {
      position: "absolute",
      display: "none"
    }
  }) : _vm._e()], 2);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-13f24bd0_0", {
    source: "\n.p-datatable {\n  position: relative;\n}\n.p-datatable table {\n  border-collapse: collapse;\n  min-width: 100%;\n  table-layout: fixed;\n}\n.p-datatable .p-sortable-column {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-datatable .p-sortable-column .p-column-title,\n.p-datatable .p-sortable-column .p-sortable-column-icon,\n.p-datatable .p-sortable-column .p-sortable-column-badge {\n  vertical-align: middle;\n}\n.p-datatable .p-sortable-column .p-sortable-column-badge {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-datatable-responsive-scroll > .p-datatable-wrapper {\n  overflow-x: auto;\n}\n.p-datatable-responsive-scroll > .p-datatable-wrapper > table,\n.p-datatable-auto-layout > .p-datatable-wrapper > table {\n  table-layout: auto;\n}\n.p-datatable-hoverable-rows .p-selectable-row {\n  cursor: pointer;\n}\n\n/* Scrollable */\n.p-datatable-scrollable .p-datatable-wrapper {\n  position: relative;\n  overflow: auto;\n}\n.p-datatable-scrollable .p-datatable-thead,\n.p-datatable-scrollable .p-datatable-tbody,\n.p-datatable-scrollable .p-datatable-tfoot {\n  display: block;\n}\n.p-datatable-scrollable .p-datatable-thead > tr,\n.p-datatable-scrollable .p-datatable-tbody > tr,\n.p-datatable-scrollable .p-datatable-tfoot > tr {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  width: 100%;\n}\n.p-datatable-scrollable .p-datatable-thead > tr > th,\n.p-datatable-scrollable .p-datatable-tbody > tr > td,\n.p-datatable-scrollable .p-datatable-tfoot > tr > td {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 0;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-datatable-scrollable .p-datatable-thead {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.p-datatable-scrollable .p-datatable-frozen-tbody {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n}\n.p-datatable-scrollable .p-datatable-tfoot {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  z-index: 1;\n}\n.p-datatable-scrollable .p-frozen-column {\n  position: -webkit-sticky;\n  position: sticky;\n  background: inherit;\n}\n.p-datatable-scrollable th.p-frozen-column {\n  z-index: 1;\n}\n.p-datatable-scrollable-both .p-datatable-thead > tr > th,\n.p-datatable-scrollable-both .p-datatable-tbody > tr > td,\n.p-datatable-scrollable-both .p-datatable-tfoot > tr > td,\n.p-datatable-scrollable-horizontal\n  .p-datatable-thead\n  > tr\n  > th\n  .p-datatable-scrollable-horizontal\n  .p-datatable-tbody\n  > tr\n  > td,\n.p-datatable-scrollable-horizontal .p-datatable-tfoot > tr > td {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0 auto;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n.p-datatable-flex-scrollable {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\n.p-datatable-flex-scrollable .p-datatable-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n}\n.p-datatable-scrollable .p-rowgroup-header {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n}\n.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead,\n.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot {\n  display: table;\n  border-collapse: collapse;\n  width: 100%;\n  table-layout: fixed;\n}\n.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead > tr,\n.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot > tr {\n  display: table-row;\n}\n.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead > tr > th,\n.p-datatable-scrollable.p-datatable-grouped-footer\n  .p-datatable-tfoot\n  > tr\n  > td {\n  display: table-cell;\n}\n\n/* Resizable */\n.p-datatable-resizable > .p-datatable-wrapper {\n  overflow-x: auto;\n}\n.p-datatable-resizable .p-datatable-thead > tr > th,\n.p-datatable-resizable .p-datatable-tfoot > tr > td,\n.p-datatable-resizable .p-datatable-tbody > tr > td {\n  overflow: hidden;\n  white-space: nowrap;\n}\n.p-datatable-resizable .p-resizable-column:not(.p-frozen-column) {\n  background-clip: padding-box;\n  position: relative;\n}\n.p-datatable-resizable-fit .p-resizable-column:last-child .p-column-resizer {\n  display: none;\n}\n.p-datatable .p-column-resizer {\n  display: block;\n  position: absolute !important;\n  top: 0;\n  right: 0;\n  margin: 0;\n  width: 0.5rem;\n  height: 100%;\n  padding: 0px;\n  cursor: col-resize;\n  border: 1px solid transparent;\n}\n.p-datatable .p-column-header-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-datatable .p-column-resizer-helper {\n  width: 1px;\n  position: absolute;\n  z-index: 10;\n  display: none;\n}\n.p-datatable .p-row-editor-init,\n.p-datatable .p-row-editor-save,\n.p-datatable .p-row-editor-cancel {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Expand */\n.p-datatable .p-row-toggler {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Reorder */\n.p-datatable-reorder-indicator-up,\n.p-datatable-reorder-indicator-down {\n  position: absolute;\n  display: none;\n}\n\n/* Loader */\n.p-datatable .p-datatable-loading-overlay {\n  position: absolute;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  z-index: 2;\n}\n\n/* Filter */\n.p-column-filter-row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n}\n.p-column-filter-menu {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-left: auto;\n}\n.p-column-filter-row .p-column-filter-element {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  width: 1%;\n}\n.p-column-filter-menu-button,\n.p-column-filter-clear-button {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n.p-column-filter-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.p-column-filter-row-items {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.p-column-filter-row-item {\n  cursor: pointer;\n}\n.p-column-filter-add-button,\n.p-column-filter-remove-button {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-column-filter-add-button .p-button-label,\n.p-column-filter-remove-button .p-button-label {\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n}\n.p-column-filter-buttonbar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.p-column-filter-buttonbar .p-button:not(.p-button-icon-only) {\n  width: auto;\n}\n\n/* Responsive */\n.p-datatable .p-datatable-tbody > tr > td > .p-column-title {\n  display: none;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/datatable/DataTable.vue"],
      "names": [],
      "mappings": ";AAghEA;EACA,kBAAA;AACA;AAEA;EACA,yBAAA;EACA,eAAA;EACA,mBAAA;AACA;AAEA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AACA;AAEA;;;EAGA,sBAAA;AACA;AAEA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;;EAEA,kBAAA;AACA;AAEA;EACA,eAAA;AACA;;AAEA,eAAA;AACA;EACA,kBAAA;EACA,cAAA;AACA;AAEA;;;EAGA,cAAA;AACA;AAEA;;;EAGA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,WAAA;AACA;AAEA;;;EAGA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,mBAAA;EAAA,mBAAA;MAAA,iBAAA;UAAA,WAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AAEA;EACA,wBAAA;EAAA,gBAAA;EACA,MAAA;EACA,UAAA;AACA;AAEA;EACA,wBAAA;EAAA,gBAAA;EACA,UAAA;AACA;AAEA;EACA,wBAAA;EAAA,gBAAA;EACA,SAAA;EACA,UAAA;AACA;AAEA;EACA,wBAAA;EAAA,gBAAA;EACA,mBAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;;;;;;;;;;;;EAYA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,YAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,mBAAA;EAAA,eAAA;MAAA,WAAA;UAAA,OAAA;EACA,YAAA;AACA;AAEA;EACA,wBAAA;EAAA,gBAAA;EACA,UAAA;AACA;AAEA;;EAEA,cAAA;EACA,yBAAA;EACA,WAAA;EACA,mBAAA;AACA;AAEA;;EAEA,kBAAA;AACA;AAEA;;;;;EAKA,mBAAA;AACA;;AAEA,cAAA;AACA;EACA,gBAAA;AACA;AAEA;;;EAGA,gBAAA;EACA,mBAAA;AACA;AAEA;EACA,4BAAA;EACA,kBAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,cAAA;EACA,6BAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,6BAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AAEA;EACA,UAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;AACA;AAEA;;;EAGA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,gBAAA;EACA,kBAAA;AACA;;AAEA,WAAA;AACA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,gBAAA;EACA,kBAAA;AACA;;AAEA,YAAA;AACA;;EAEA,kBAAA;EACA,aAAA;AACA;;AAEA,WAAA;AACA;EACA,kBAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,UAAA;AACA;;AAEA,WAAA;AACA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,WAAA;AACA;AAEA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,iBAAA;AACA;AAEA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;EACA,SAAA;AACA;AAEA;;EAEA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,eAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;;EAEA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AAEA;;EAEA,mBAAA;EAAA,oBAAA;MAAA,oBAAA;UAAA,YAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,yBAAA;EAAA,sCAAA;MAAA,sBAAA;UAAA,8BAAA;AACA;AAEA;EACA,WAAA;AACA;;AAEA,eAAA;AACA;EACA,aAAA;AACA",
      "file": "DataTable.vue",
      "sourcesContent": ["<template>\n  <div :class=\"containerClass\" data-scrollselectors=\".p-datatable-wrapper\">\n    <slot></slot>\n    <div class=\"p-datatable-loading-overlay p-component-overlay\" v-if=\"loading\">\n      <i :class=\"loadingIconClass\"></i>\n    </div>\n    <div class=\"p-datatable-header\" v-if=\"$scopedSlots.header\">\n      <slot name=\"header\"></slot>\n    </div>\n    <DTPaginator\n      v-if=\"paginatorTop\"\n      :rows=\"d_rows\"\n      :first=\"lazy ? 0 : d_first\"\n      :totalRecords=\"totalRecordsLength\"\n      :pageLinkSize=\"pageLinkSize\"\n      :template=\"paginatorTemplate\"\n      :rowsPerPageOptions=\"rowsPerPageOptions\"\n      :currentPageReportTemplate=\"currentPageReportTemplate\"\n      class=\"p-paginator-top\"\n      @page=\"onPage($event)\"\n      :alwaysShow=\"alwaysShowPaginator\">\n      <template #start v-if=\"$scopedSlots.paginatorstart\">\n        <slot name=\"paginatorstart\"></slot>\n      </template>\n      <template #end v-if=\"$scopedSlots.paginatorend\">\n        <slot name=\"paginatorend\"></slot>\n      </template>\n    </DTPaginator>\n    <div class=\"p-datatable-wrapper\" :style=\"{ maxHeight: scrollHeight }\">\n      <table ref=\"table\" role=\"table\" :class=\"[tableClass, 'p-datatable-table']\" :style=\"tableStyle\">\n        <DTTableHeader\n          :columnGroup=\"headerColumnGroup\"\n          :columns=\"columns\"\n          :rowGroupMode=\"rowGroupMode\"\n          :groupRowsBy=\"groupRowsBy\"\n          :groupRowSortField=\"groupRowSortField\"\n          :resizableColumns=\"resizableColumns\"\n          :allRowsSelected=\"allRowsSelected\"\n          :empty=\"empty\"\n          :sortMode=\"sortMode\"\n          :sortField=\"d_sortField\"\n          :sortOrder=\"d_sortOrder\"\n          :multiSortMeta=\"d_multiSortMeta\"\n          :filters=\"d_filters\"\n          :filtersStore=\"filters\"\n          :filterDisplay=\"filterDisplay\"\n          @column-click=\"onColumnHeaderClick($event)\"\n          @column-mousedown=\"onColumnHeaderMouseDown($event)\"\n          @filter-change=\"onFilterChange\"\n          @filter-apply=\"onFilterApply\"\n          @column-dragstart=\"onColumnHeaderDragStart($event)\"\n          @column-dragover=\"onColumnHeaderDragOver($event)\"\n          @column-dragleave=\"onColumnHeaderDragLeave($event)\"\n          @column-drop=\"onColumnHeaderDrop($event)\"\n          @column-resizestart=\"onColumnResizeStart($event)\"\n          @checkbox-change=\"toggleRowsWithCheckbox($event)\" />\n        <DTTableBody\n          v-if=\"frozenValue\"\n          :value=\"frozenValue\"\n          :frozenRow=\"true\"\n          class=\"p-datatable-frozen-tbody\"\n          :columns=\"columns\"\n          :dataKey=\"dataKey\"\n          :selection=\"selection\"\n          :selectionKeys=\"d_selectionKeys\"\n          :selectionMode=\"selectionMode\"\n          :contextMenu=\"contextMenu\"\n          :contextMenuSelection=\"contextMenuSelection\"\n          :rowGroupMode=\"rowGroupMode\"\n          :groupRowsBy=\"groupRowsBy\"\n          :expandableRowGroups=\"expandableRowGroups\"\n          :rowClass=\"rowClass\"\n          :rowStyle=\"rowStyle\"\n          :editMode=\"editMode\"\n          :compareSelectionBy=\"compareSelectionBy\"\n          :scrollable=\"scrollable\"\n          :expandedRowIcon=\"expandedRowIcon\"\n          :collapsedRowIcon=\"collapsedRowIcon\"\n          :expandedRows=\"expandedRows\"\n          :expandedRowKeys=\"d_expandedRowKeys\"\n          :expandedRowGroups=\"expandedRowGroups\"\n          :editingRows=\"editingRows\"\n          :editingRowKeys=\"d_editingRowKeys\"\n          :templates=\"$scopedSlots\"\n          :loading=\"loading\"\n          :responsiveLayout=\"responsiveLayout\"\n          @rowgroup-toggle=\"toggleRowGroup\"\n          @row-click=\"onRowClick($event)\"\n          @row-dblclick=\"onRowDblClick($event)\"\n          @row-rightclick=\"onRowRightClick($event)\"\n          @row-touchend=\"onRowTouchEnd\"\n          @row-keydown=\"onRowKeyDown\"\n          @row-mousedown=\"onRowMouseDown\"\n          @row-dragstart=\"onRowDragStart($event)\"\n          @row-dragover=\"onRowDragOver($event)\"\n          @row-dragleave=\"onRowDragLeave($event)\"\n          @row-dragend=\"onRowDragEnd($event)\"\n          @row-drop=\"onRowDrop($event)\"\n          @row-toggle=\"toggleRow($event)\"\n          @radio-change=\"toggleRowWithRadio($event)\"\n          @checkbox-change=\"toggleRowWithCheckbox($event)\"\n          @cell-edit-init=\"onCellEditInit($event)\"\n          @cell-edit-complete=\"onCellEditComplete($event)\"\n          @cell-edit-cancel=\"onCellEditCancel($event)\"\n          @row-edit-init=\"onRowEditInit($event)\"\n          @row-edit-save=\"onRowEditSave($event)\"\n          @row-edit-cancel=\"onRowEditCancel($event)\"\n          :editingMeta=\"d_editingMeta\"\n          @editing-meta-change=\"onEditingMetaChange\" />\n        <DTTableBody\n          :value=\"dataToRender\"\n          :columns=\"columns\"\n          :empty=\"empty\"\n          :dataKey=\"dataKey\"\n          :selection=\"selection\"\n          :selectionKeys=\"d_selectionKeys\"\n          :selectionMode=\"selectionMode\"\n          :contextMenu=\"contextMenu\"\n          :contextMenuSelection=\"contextMenuSelection\"\n          :rowGroupMode=\"rowGroupMode\"\n          :groupRowsBy=\"groupRowsBy\"\n          :expandableRowGroups=\"expandableRowGroups\"\n          :rowClass=\"rowClass\"\n          :rowStyle=\"rowStyle\"\n          :editMode=\"editMode\"\n          :compareSelectionBy=\"compareSelectionBy\"\n          :scrollable=\"scrollable\"\n          :expandedRowIcon=\"expandedRowIcon\"\n          :collapsedRowIcon=\"collapsedRowIcon\"\n          :expandedRows=\"expandedRows\"\n          :expandedRowKeys=\"d_expandedRowKeys\"\n          :expandedRowGroups=\"expandedRowGroups\"\n          :editingRows=\"editingRows\"\n          :editingRowKeys=\"d_editingRowKeys\"\n          :templates=\"$scopedSlots\"\n          :loading=\"loading\"\n          :responsiveLayout=\"responsiveLayout\"\n          @rowgroup-toggle=\"toggleRowGroup\"\n          @row-click=\"onRowClick($event)\"\n          @row-dblclick=\"onRowDblClick($event)\"\n          @row-rightclick=\"onRowRightClick($event)\"\n          @row-touchend=\"onRowTouchEnd\"\n          @row-keydown=\"onRowKeyDown\"\n          @row-mousedown=\"onRowMouseDown\"\n          @row-dragstart=\"onRowDragStart($event)\"\n          @row-dragover=\"onRowDragOver($event)\"\n          @row-dragleave=\"onRowDragLeave($event)\"\n          @row-dragend=\"onRowDragEnd($event)\"\n          @row-drop=\"onRowDrop($event)\"\n          @row-toggle=\"toggleRow($event)\"\n          @radio-change=\"toggleRowWithRadio($event)\"\n          @checkbox-change=\"toggleRowWithCheckbox($event)\"\n          @cell-edit-init=\"onCellEditInit($event)\"\n          @cell-edit-complete=\"onCellEditComplete($event)\"\n          @cell-edit-cancel=\"onCellEditCancel($event)\"\n          @row-edit-init=\"onRowEditInit($event)\"\n          @row-edit-save=\"onRowEditSave($event)\"\n          @row-edit-cancel=\"onRowEditCancel($event)\"\n          :editingMeta=\"d_editingMeta\"\n          @editing-meta-change=\"onEditingMetaChange\" />\n        <DTTableFooter :columnGroup=\"footerColumnGroup\" :columns=\"columns\" />\n      </table>\n    </div>\n    <DTPaginator\n      v-if=\"paginatorBottom\"\n      :rows=\"d_rows\"\n      :first=\"lazy ? 0 : d_first\"\n      :totalRecords=\"totalRecordsLength\"\n      :pageLinkSize=\"pageLinkSize\"\n      :template=\"paginatorTemplate\"\n      :rowsPerPageOptions=\"rowsPerPageOptions\"\n      :currentPageReportTemplate=\"currentPageReportTemplate\"\n      class=\"p-paginator-bottom\"\n      @page=\"onPage($event)\"\n      :alwaysShow=\"alwaysShowPaginator\">\n      <template #start v-if=\"$scopedSlots.paginatorstart\">\n        <slot name=\"paginatorstart\"></slot>\n      </template>\n      <template #end v-if=\"$scopedSlots.paginatorend\">\n        <slot name=\"paginatorend\"></slot>\n      </template>\n    </DTPaginator>\n    <div class=\"p-datatable-footer\" v-if=\"$scopedSlots.footer\">\n      <slot name=\"footer\"></slot>\n    </div>\n    <div ref=\"resizeHelper\" class=\"p-column-resizer-helper\" style=\"display: none\"></div>\n    <span\n      ref=\"reorderIndicatorUp\"\n      class=\"pi pi-arrow-down p-datatable-reorder-indicator-up\"\n      style=\"position: absolute; display: none\"\n      v-if=\"reorderableColumns\" />\n    <span\n      ref=\"reorderIndicatorDown\"\n      class=\"pi pi-arrow-up p-datatable-reorder-indicator-down\"\n      style=\"position: absolute; display: none\"\n      v-if=\"reorderableColumns\" />\n  </div>\n</template>\n\n<script>\nimport { ObjectUtils, DomHandler, UniqueComponentId } from 'primevue2/utils'\nimport { FilterMatchMode, FilterOperator, FilterService} from 'primevue2/api'\nimport Paginator from 'primevue2/paginator'\nimport TableHeader from './TableHeader.vue'\nimport TableBody from './TableBody.vue'\nimport TableFooter from './TableFooter.vue'\n\nexport default {\n  name: 'DataTable',\n  props: {\n    value: {\n      type: Array,\n      default: null\n    },\n    dataKey: {\n      type: String,\n      default: null\n    },\n    rows: {\n      type: Number,\n      default: 0\n    },\n    first: {\n      type: Number,\n      default: 0\n    },\n    totalRecords: {\n      type: Number,\n      default: 0\n    },\n    paginator: {\n      type: Boolean,\n      default: false\n    },\n    paginatorPosition: {\n      type: String,\n      default: 'bottom'\n    },\n    alwaysShowPaginator: {\n      type: Boolean,\n      default: true\n    },\n    paginatorTemplate: {\n      type: String,\n      default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'\n    },\n    pageLinkSize: {\n      type: Number,\n      default: 5\n    },\n    rowsPerPageOptions: {\n      type: Array,\n      default: null\n    },\n    currentPageReportTemplate: {\n      type: String,\n      default: '({currentPage} of {totalPages})'\n    },\n    lazy: {\n      type: Boolean,\n      default: false\n    },\n    loading: {\n      type: Boolean,\n      default: false\n    },\n    loadingIcon: {\n      type: String,\n      default: 'pi pi-spinner'\n    },\n    sortField: {\n      type: [String, Function],\n      default: null\n    },\n    sortOrder: {\n      type: Number,\n      default: null\n    },\n    defaultSortOrder: {\n      type: Number,\n      default: 1\n    },\n    multiSortMeta: {\n      type: Array,\n      default: null\n    },\n    sortMode: {\n      type: String,\n      default: 'single'\n    },\n    removableSort: {\n      type: Boolean,\n      default: false\n    },\n    filters: {\n      type: Object,\n      default: null\n    },\n    filterDisplay: {\n      type: String,\n      default: null\n    },\n    globalFilterFields: {\n      type: Array,\n      default: null\n    },\n    filterLocale: {\n      type: String,\n      default: undefined\n    },\n    selection: {\n      type: [Array, Object],\n      default: null\n    },\n    selectionMode: {\n      type: String,\n      default: null\n    },\n    compareSelectionBy: {\n      type: String,\n      default: 'deepEquals'\n    },\n    metaKeySelection: {\n      type: Boolean,\n      default: true\n    },\n    contextMenu: {\n      type: Boolean,\n      default: false\n    },\n    contextMenuSelection: {\n      type: Object,\n      default: null\n    },\n    selectAll: {\n      type: Boolean,\n      default: null\n    },\n    rowHover: {\n      type: Boolean,\n      default: false\n    },\n    csvSeparator: {\n      type: String,\n      default: ','\n    },\n    exportFilename: {\n      type: String,\n      default: 'download'\n    },\n    exportFunction: {\n      type: Function,\n      default: null\n    },\n    autoLayout: {\n      type: Boolean,\n      default: false\n    },\n    resizableColumns: {\n      type: Boolean,\n      default: false\n    },\n    columnResizeMode: {\n      type: String,\n      default: 'fit'\n    },\n    reorderableColumns: {\n      type: Boolean,\n      default: false\n    },\n    expandedRows: {\n      type: Array,\n      default: null\n    },\n    expandedRowIcon: {\n      type: String,\n      default: 'pi-chevron-down'\n    },\n    collapsedRowIcon: {\n      type: String,\n      default: 'pi-chevron-right'\n    },\n    rowGroupMode: {\n      type: String,\n      default: null\n    },\n    groupRowsBy: {\n      type: [Array, String],\n      default: null\n    },\n    expandableRowGroups: {\n      type: Boolean,\n      default: false\n    },\n    expandedRowGroups: {\n      type: Array,\n      default: null\n    },\n    stateStorage: {\n      type: String,\n      default: 'session'\n    },\n    stateKey: {\n      type: String,\n      default: null\n    },\n    editMode: {\n      type: String,\n      default: null\n    },\n    editingRows: {\n      type: Array,\n      default: null\n    },\n    rowClass: {\n      type: null,\n      default: null\n    },\n    rowStyle: {\n      type: null,\n      default: null\n    },\n    scrollable: {\n      type: Boolean,\n      default: false\n    },\n    scrollDirection: {\n      type: String,\n      default: 'vertical'\n    },\n    scrollHeight: {\n      type: String,\n      default: null\n    },\n    frozenValue: {\n      type: Array,\n      default: null\n    },\n    responsiveLayout: {\n      type: String,\n      default: 'stack'\n    },\n    breakpoint: {\n      type: String,\n      default: '960px'\n    },\n    showGridlines: {\n      type: Boolean,\n      default: false\n    },\n    stripedRows: {\n      type: Boolean,\n      default: false\n    },\n    tableStyle: {\n      type: null,\n      default: null\n    },\n    tableClass: {\n      type: String,\n      default: null\n    }\n  },\n  data() {\n    return {\n      allChildren: null,\n      d_first: this.first,\n      d_rows: this.rows,\n      d_sortField: this.sortField,\n      d_sortOrder: this.sortOrder,\n      d_multiSortMeta: this.multiSortMeta ? [...this.multiSortMeta] : [],\n      d_groupRowsSortMeta: null,\n      d_selectionKeys: null,\n      d_expandedRowKeys: null,\n      d_columnOrder: null,\n      d_editingRowKeys: null,\n      d_editingMeta: {},\n      d_filters: this.cloneFilters(this.filters)\n    }\n  },\n  rowTouched: false,\n  anchorRowIndex: null,\n  rangeRowIndex: null,\n  documentColumnResizeListener: null,\n  documentColumnResizeEndListener: null,\n  lastResizeHelperX: null,\n  resizeColumnElement: null,\n  columnResizing: false,\n  colReorderIconWidth: null,\n  colReorderIconHeight: null,\n  draggedColumn: null,\n  draggedRowIndex: null,\n  droppedRowIndex: null,\n  rowDragging: null,\n  columnWidthsState: null,\n  tableWidthState: null,\n  columnWidthsRestored: false,\n  watch: {\n    first(newValue) {\n      this.d_first = newValue\n    },\n    rows(newValue) {\n      this.d_rows = newValue\n    },\n    sortField(newValue) {\n      this.d_sortField = newValue\n    },\n    sortOrder(newValue) {\n      this.d_sortOrder = newValue\n    },\n    multiSortMeta(newValue) {\n      this.d_multiSortMeta = newValue\n    },\n    selection: {\n      immediate: true,\n      handler(newValue) {\n        if (this.dataKey) {\n          this.updateSelectionKeys(newValue)\n        }\n      }\n    },\n    expandedRows(newValue) {\n      if (this.dataKey) {\n        this.updateExpandedRowKeys(newValue)\n      }\n    },\n    editingRows(newValue) {\n      if (this.dataKey) {\n        this.updateEditingRowKeys(newValue)\n      }\n    },\n    filters: {\n      deep: true,\n      handler: function (newValue) {\n        this.d_filters = this.cloneFilters(newValue)\n      }\n    }\n  },\n  beforeMount() {\n    if (this.isStateful()) {\n      this.restoreState()\n    }\n  },\n  mounted() {\n    this.allChildren = this.$children\n\n    this.$el.setAttribute(this.attributeSelector, '')\n\n    if (this.responsiveLayout === 'stack' && !this.scrollable) {\n      this.createResponsiveStyle()\n    }\n\n    if (this.isStateful() && this.resizableColumns) {\n      this.restoreColumnWidths()\n    }\n\n    if (this.editMode === 'row' && this.dataKey && !this.d_editingRowKeys) {\n      this.updateEditingRowKeys(this.editingRows)\n    }\n  },\n  beforeDestroy() {\n    this.unbindColumnResizeEvents()\n    this.destroyStyleElement()\n    this.destroyResponsiveStyle()\n  },\n  updated() {\n    if (this.isStateful()) {\n      this.saveState()\n    }\n\n    if (this.editMode === 'row' && this.dataKey && !this.d_editingRowKeys) {\n      this.updateEditingRowKeys(this.editingRows)\n    }\n  },\n  methods: {\n    columnProp(col, prop) {\n      return ObjectUtils.getVNodeProp(col, prop)\n    },\n    onPage(event) {\n      this.clearEditingMetaData()\n\n      this.d_first = event.first\n      this.d_rows = event.rows\n\n      let pageEvent = this.createLazyLoadEvent(event)\n      pageEvent.pageCount = event.pageCount\n      pageEvent.page = event.page\n\n      this.$emit('update:first', this.d_first)\n      this.$emit('update:rows', this.d_rows)\n      this.$emit('page', pageEvent)\n      this.$emit('value-change', this.processedData)\n    },\n    onColumnHeaderClick(e) {\n      const event = e.originalEvent\n      const column = e.column\n\n      if (this.columnProp(column, 'sortable')) {\n        const targetNode = event.target\n        const columnField = this.columnProp(column, 'sortField') || this.columnProp(column, 'field')\n\n        if (DomHandler.hasClass(targetNode, 'p-sortable-column') || DomHandler.hasClass(targetNode, 'p-column-title')\n          || DomHandler.hasClass(targetNode, 'p-sortable-column-icon') || DomHandler.hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {\n          DomHandler.clearSelection()\n\n          if (this.sortMode === 'single') {\n            if (this.d_sortField === columnField) {\n              if (this.removableSort && (this.d_sortOrder * -1 === this.defaultSortOrder)) {\n                this.d_sortOrder = null\n                this.d_sortField = null\n              }\n              else {\n                this.d_sortOrder = this.d_sortOrder * -1\n              }\n            }\n            else {\n              this.d_sortOrder = this.defaultSortOrder\n              this.d_sortField = columnField\n            }\n\n            this.$emit('update:sortField', this.d_sortField)\n            this.$emit('update:sortOrder', this.d_sortOrder)\n            this.resetPage()\n          }\n          else if (this.sortMode === 'multiple') {\n            let metaKey = event.metaKey || event.ctrlKey\n            if (!metaKey) {\n              this.d_multiSortMeta = this.d_multiSortMeta.filter(meta => meta.field === columnField)\n            }\n\n            this.addMultiSortField(columnField)\n            this.$emit('update:multiSortMeta', this.d_multiSortMeta)\n          }\n\n          this.$emit('sort', this.createLazyLoadEvent(event))\n          this.$emit('value-change', this.processedData)\n        }\n      }\n    },\n    sortSingle(value) {\n      this.clearEditingMetaData()\n\n      if (this.groupRowsBy && this.groupRowsBy === this.sortField) {\n        this.d_multiSortMeta = [\n          { field: this.sortField, order: this.sortOrder || this.defaultSortOrder },\n          { field: this.d_sortField, order: this.d_sortOrder }\n        ]\n\n        return this.sortMultiple(value)\n      }\n\n      let data = [...value]\n\n      data.sort((data1, data2) => {\n        let value1 = ObjectUtils.resolveFieldData(data1, this.d_sortField)\n        let value2 = ObjectUtils.resolveFieldData(data2, this.d_sortField)\n\n        let result = null\n\n        if (value1 == null && value2 != null)\n          result = -1\n        else if (value1 != null && value2 == null)\n          result = 1\n        else if (value1 == null && value2 == null)\n          result = 0\n        else if (typeof value1 === 'string' && typeof value2 === 'string')\n          result = value1.localeCompare(value2, undefined, { numeric: true })\n        else\n          result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0\n\n        return (this.d_sortOrder * result)\n      })\n\n      return data\n    },\n    sortMultiple(value) {\n      this.clearEditingMetaData()\n\n      if (this.groupRowsBy && (this.d_groupRowsSortMeta || (this.d_multiSortMeta.length && this.groupRowsBy === this.d_multiSortMeta[0].field))) {\n        const firstSortMeta = this.d_multiSortMeta[0]\n        !this.d_groupRowsSortMeta && (this.d_groupRowsSortMeta = firstSortMeta)\n\n        if (firstSortMeta.field !== this.d_groupRowsSortMeta.field) {\n          this.d_multiSortMeta = [this.d_groupRowsSortMeta, ...this.d_multiSortMeta]\n        }\n      }\n\n      let data = [...value]\n\n      data.sort((data1, data2) => {\n        return this.multisortField(data1, data2, 0)\n      })\n\n      return data\n    },\n    multisortField(data1, data2, index) {\n      const value1 = ObjectUtils.resolveFieldData(data1, this.d_multiSortMeta[index].field)\n      const value2 = ObjectUtils.resolveFieldData(data2, this.d_multiSortMeta[index].field)\n      let result = null\n\n      if (typeof value1 === 'string' || value1 instanceof String) {\n        if (value1.localeCompare && (value1 !== value2)) {\n          return (this.d_multiSortMeta[index].order * value1.localeCompare(value2, undefined, { numeric: true }))\n        }\n      }\n      else {\n        result = (value1 < value2) ? -1 : 1\n      }\n\n      if (value1 === value2) {\n        return (this.d_multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, index + 1)) : 0\n      }\n\n      return (this.d_multiSortMeta[index].order * result)\n    },\n    addMultiSortField(field) {\n      let index = this.d_multiSortMeta.findIndex(meta => meta.field === field)\n\n      if (index >= 0) {\n        if (this.removableSort && (this.d_multiSortMeta[index].order * -1 === this.defaultSortOrder))\n          this.d_multiSortMeta.splice(index, 1)\n        else\n          this.d_multiSortMeta[index] = { field: field, order: this.d_multiSortMeta[index].order * -1 }\n      }\n      else {\n        this.d_multiSortMeta.push({ field: field, order: this.defaultSortOrder })\n      }\n\n      this.d_multiSortMeta = [...this.d_multiSortMeta]\n    },\n    filter(data) {\n      if (!data) {\n        return\n      }\n\n      this.clearEditingMetaData()\n\n      let globalFilterFieldsArray\n      if (this.filters['global']) {\n        globalFilterFieldsArray = this.globalFilterFields || this.columns.map(col => this.columnProp(col, 'filterField') || this.columnProp(col, 'field'))\n      }\n\n      let filteredValue = []\n\n      for (let i = 0; i < data.length; i++) {\n        let localMatch = true\n        let globalMatch = false\n        let localFiltered = false\n\n        for (let prop in this.filters) {\n          if (Object.prototype.hasOwnProperty.call(this.filters, prop) && prop !== 'global') {\n            localFiltered = true\n            let filterField = prop\n            let filterMeta = this.filters[filterField]\n\n            if (filterMeta.operator) {\n              for (let filterConstraint of filterMeta.constraints) {\n                localMatch = this.executeLocalFilter(filterField, data[i], filterConstraint)\n\n                if ((filterMeta.operator === FilterOperator.OR && localMatch) || (filterMeta.operator === FilterOperator.AND && !localMatch)) {\n                  break\n                }\n              }\n            }\n            else {\n              localMatch = this.executeLocalFilter(filterField, data[i], filterMeta)\n            }\n\n            if (!localMatch) {\n              break\n            }\n          }\n        }\n\n        if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {\n          for (let j = 0; j < globalFilterFieldsArray.length; j++) {\n            let globalFilterField = globalFilterFieldsArray[j]\n            globalMatch = FilterService.filters[this.filters['global'].matchMode || FilterMatchMode.CONTAINS](ObjectUtils.resolveFieldData(data[i], globalFilterField), this.filters['global'].value, this.filterLocale)\n\n            if (globalMatch) {\n              break\n            }\n          }\n        }\n\n        let matches\n        if (this.filters['global']) {\n          matches = localFiltered ? (localFiltered && localMatch && globalMatch) : globalMatch\n        }\n        else {\n          matches = localFiltered && localMatch\n        }\n\n        if (matches) {\n          filteredValue.push(data[i])\n        }\n      }\n\n      if (filteredValue.length === this.value.length) {\n        filteredValue = data\n      }\n\n      let filterEvent = this.createLazyLoadEvent()\n      filterEvent.filteredValue = filteredValue\n      this.$emit('filter', filterEvent)\n      this.$emit('value-change', filteredValue)\n\n      return filteredValue\n    },\n    executeLocalFilter(field, rowData, filterMeta) {\n      let filterValue = filterMeta.value\n      let filterMatchMode = filterMeta.matchMode || FilterMatchMode.STARTS_WITH\n      let dataFieldValue = ObjectUtils.resolveFieldData(rowData, field)\n      let filterConstraint = FilterService.filters[filterMatchMode]\n\n      return filterConstraint(dataFieldValue, filterValue, this.filterLocale)\n    },\n    onRowClick(e) {\n      const event = e.originalEvent\n      if (DomHandler.isClickable(event.target)) {\n        return\n      }\n\n      this.$emit('row-click', e)\n\n      if (this.selectionMode) {\n        const rowData = e.data\n        const rowIndex = this.d_first + e.index\n\n        if (this.isMultipleSelectionMode() && event.shiftKey && this.anchorRowIndex != null) {\n          DomHandler.clearSelection()\n          this.rangeRowIndex = rowIndex\n          this.selectRange(event)\n        }\n        else {\n          const selected = this.isSelected(rowData)\n          const metaSelection = this.rowTouched ? false : this.metaKeySelection\n          this.anchorRowIndex = rowIndex\n          this.rangeRowIndex = rowIndex\n\n          if (metaSelection) {\n            let metaKey = event.metaKey || event.ctrlKey\n\n            if (selected && metaKey) {\n              if (this.isSingleSelectionMode()) {\n                this.$emit('update:selection', null)\n              }\n              else {\n                const selectionIndex = this.findIndexInSelection(rowData)\n                const _selection = this.selection.filter((val, i) => i != selectionIndex)\n                this.$emit('update:selection', _selection)\n              }\n\n              this.$emit('row-unselect', { originalEvent: event, data: rowData, index: rowIndex, type: 'row' })\n            }\n            else {\n              if (this.isSingleSelectionMode()) {\n                this.$emit('update:selection', rowData)\n              }\n              else if (this.isMultipleSelectionMode()) {\n                let _selection = metaKey ? (this.selection || []) : []\n                _selection = [..._selection, rowData]\n                this.$emit('update:selection', _selection)\n              }\n\n              this.$emit('row-select', { originalEvent: event, data: rowData, index: rowIndex, type: 'row' })\n            }\n          }\n          else {\n            if (this.selectionMode === 'single') {\n              if (selected) {\n                this.$emit('update:selection', null)\n                this.$emit('row-unselect', { originalEvent: event, data: rowData, index: rowIndex, type: 'row' })\n              }\n              else {\n                this.$emit('update:selection', rowData)\n                this.$emit('row-select', { originalEvent: event, data: rowData, index: rowIndex, type: 'row' })\n              }\n            }\n            else if (this.selectionMode === 'multiple') {\n              if (selected) {\n                const selectionIndex = this.findIndexInSelection(rowData)\n                const _selection = this.selection.filter((val, i) => i != selectionIndex)\n                this.$emit('update:selection', _selection)\n                this.$emit('row-unselect', { originalEvent: event, data: rowData, index: rowIndex, type: 'row' })\n              }\n              else {\n                const _selection = this.selection ? [...this.selection, rowData] : [rowData]\n                this.$emit('update:selection', _selection)\n                this.$emit('row-select', { originalEvent: event, data: rowData, index: rowIndex, type: 'row' })\n              }\n            }\n          }\n        }\n      }\n\n      this.rowTouched = false\n    },\n    onRowDblClick(e) {\n      const event = e.originalEvent\n      if (DomHandler.isClickable(event.target)) {\n        return\n      }\n\n      this.$emit('row-dblclick', e)\n    },\n    onRowRightClick(event) {\n      DomHandler.clearSelection()\n      event.originalEvent.target.focus()\n\n      this.$emit('update:contextMenuSelection', event.data)\n      this.$emit('row-contextmenu', event)\n    },\n    onRowTouchEnd() {\n      this.rowTouched = true\n    },\n    onRowKeyDown(e) {\n      const event = e.originalEvent\n      const rowData = e.data\n      const rowIndex = e.index\n\n      if (this.selectionMode) {\n        const row = event.target\n\n        switch (event.which) {\n        //down arrow\n        case 40:\n          var nextRow = this.findNextSelectableRow(row)\n          if (nextRow) {\n            nextRow.focus()\n          }\n\n          event.preventDefault()\n          break\n\n          //up arrow\n        case 38:\n          var prevRow = this.findPrevSelectableRow(row)\n          if (prevRow) {\n            prevRow.focus()\n          }\n\n          event.preventDefault()\n          break\n\n          //enter\n        case 13:\n          this.onRowClick({ originalEvent: event, data: rowData, index: rowIndex })\n          break\n\n        default:\n          //no op\n          break\n        }\n      }\n    },\n    findNextSelectableRow(row) {\n      let nextRow = row.nextElementSibling\n      if (nextRow) {\n        if (DomHandler.hasClass(nextRow, 'p-selectable-row'))\n          return nextRow\n        else\n          return this.findNextSelectableRow(nextRow)\n      }\n      else {\n        return null\n      }\n    },\n    findPrevSelectableRow(row) {\n      let prevRow = row.previousElementSibling\n      if (prevRow) {\n        if (DomHandler.hasClass(prevRow, 'p-selectable-row'))\n          return prevRow\n        else\n          return this.findPrevSelectableRow(prevRow)\n      }\n      else {\n        return null\n      }\n    },\n    toggleRowWithRadio(event) {\n      const rowData = event.data\n\n      if (this.isSelected(rowData)) {\n        this.$emit('update:selection', null)\n        this.$emit('row-unselect', { originalEvent: event.originalEvent, data: rowData, index: event.index, type: 'radiobutton' })\n      }\n      else {\n        this.$emit('update:selection', rowData)\n        this.$emit('row-select', { originalEvent: event.originalEvent, data: rowData, index: event.index, type: 'radiobutton' })\n      }\n    },\n    toggleRowWithCheckbox(event) {\n      const rowData = event.data\n\n      if (this.isSelected(rowData)) {\n        const selectionIndex = this.findIndexInSelection(rowData)\n        const _selection = this.selection.filter((val, i) => i != selectionIndex)\n        this.$emit('update:selection', _selection)\n        this.$emit('row-unselect', { originalEvent: event.originalEvent, data: rowData, index: event.index, type: 'checkbox' })\n      }\n      else {\n        let _selection = this.selection ? [...this.selection] : []\n        _selection = [..._selection, rowData]\n        this.$emit('update:selection', _selection)\n        this.$emit('row-select', { originalEvent: event.originalEvent, data: rowData, index: event.index, type: 'checkbox' })\n      }\n    },\n    toggleRowsWithCheckbox(event) {\n      if (this.selectAll !== null) {\n        this.$emit('select-all-change', event)\n      }\n      else {\n        const { originalEvent, checked } = event\n        let _selection = []\n\n        if (checked) {\n          _selection = this.frozenValue ? [...this.frozenValue, ...this.processedData] : this.processedData\n          this.$emit('row-select-all', { originalEvent, data: _selection })\n        }\n        else {\n          this.$emit('row-unselect-all', { originalEvent })\n        }\n\n        this.$emit('update:selection', _selection)\n\n      }\n    },\n    isSingleSelectionMode() {\n      return this.selectionMode === 'single'\n    },\n    isMultipleSelectionMode() {\n      return this.selectionMode === 'multiple'\n    },\n    isSelected(rowData) {\n      if (rowData && this.selection) {\n        if (this.dataKey) {\n          return this.d_selectionKeys ? this.d_selectionKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false\n        }\n        else {\n          if (this.selection instanceof Array)\n            return this.findIndexInSelection(rowData) > -1\n          else\n            return this.equals(rowData, this.selection)\n        }\n      }\n\n      return false\n    },\n    findIndexInSelection(rowData) {\n      return this.findIndex(rowData, this.selection)\n    },\n    findIndex(rowData, collection) {\n      let index = -1\n      if (collection && collection.length) {\n        for (let i = 0; i < collection.length; i++) {\n          if (this.equals(rowData, collection[i])) {\n            index = i\n            break\n          }\n        }\n      }\n\n      return index\n    },\n    updateSelectionKeys(selection) {\n      this.d_selectionKeys = {}\n      if (Array.isArray(selection)) {\n        for (let data of selection) {\n          this.d_selectionKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1\n        }\n      }\n      else {\n        this.d_selectionKeys[String(ObjectUtils.resolveFieldData(selection, this.dataKey))] = 1\n      }\n    },\n    updateExpandedRowKeys(expandedRows) {\n      if (expandedRows && expandedRows.length) {\n        this.d_expandedRowKeys = {}\n        for (let data of expandedRows) {\n          this.d_expandedRowKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1\n        }\n      }\n      else {\n        this.d_expandedRowKeys = null\n      }\n    },\n    updateEditingRowKeys(editingRows) {\n      if (editingRows && editingRows.length) {\n        this.d_editingRowKeys = {}\n        for (let data of editingRows) {\n          this.d_editingRowKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1\n        }\n      }\n      else {\n        this.d_editingRowKeys = null\n      }\n    },\n    equals(data1, data2) {\n      return this.compareSelectionBy === 'equals' ? (data1 === data2) : ObjectUtils.equals(data1, data2, this.dataKey)\n    },\n    selectRange(event) {\n      let rangeStart, rangeEnd\n\n      if (this.rangeRowIndex > this.anchorRowIndex) {\n        rangeStart = this.anchorRowIndex\n        rangeEnd = this.rangeRowIndex\n      }\n      else if (this.rangeRowIndex < this.anchorRowIndex) {\n        rangeStart = this.rangeRowIndex\n        rangeEnd = this.anchorRowIndex\n      }\n      else {\n        rangeStart = this.rangeRowIndex\n        rangeEnd = this.rangeRowIndex\n      }\n\n      if (this.lazy && this.paginator) {\n        rangeStart -= this.first\n        rangeEnd -= this.first\n      }\n\n      const value = this.processedData\n      let _selection = []\n      for (let i = rangeStart; i <= rangeEnd; i++) {\n        let rangeRowData = value[i]\n        _selection.push(rangeRowData)\n        this.$emit('row-select', { originalEvent: event, data: rangeRowData, type: 'row' })\n      }\n\n      this.$emit('update:selection', _selection)\n    },\n    exportCSV(options) {\n      let data = this.processedData\n      let csv = '\\ufeff'\n\n      if (options && options.selectionOnly)\n        data = this.selection || []\n      else if (this.frozenValue)\n        data = data ? [...this.frozenValue, ...data] : this.frozenValue\n\n      //headers\n      let headerInitiated = false\n      for (let i = 0; i < this.columns.length; i++) {\n        let column = this.columns[i]\n\n        if (this.columnProp(column, 'exportable') !== false && this.columnProp(column, 'field')) {\n          if (headerInitiated)\n            csv += this.csvSeparator\n          else\n            headerInitiated = true\n\n          csv += '\"' + (this.columnProp(column, 'exportHeader') || this.columnProp(column, 'header') || this.columnProp(column, 'field')) + '\"'\n        }\n      }\n\n      //body\n      if (data) {\n        data.forEach(record => {\n          csv += '\\n'\n          let rowInitiated = false\n          for (let i = 0; i < this.columns.length; i++) {\n            let column = this.columns[i]\n            if (this.columnProp(column, 'exportable') !== false && this.columnProp(column, 'field')) {\n              if (rowInitiated)\n                csv += this.csvSeparator\n              else\n                rowInitiated = true\n\n              let cellData = ObjectUtils.resolveFieldData(record, this.columnProp(column, 'field'))\n\n              if (cellData != null) {\n                if (this.exportFunction) {\n                  cellData = this.exportFunction({\n                    data: cellData,\n                    field: this.columnProp(column, 'field')\n                  })\n                }\n                else\n                  cellData = String(cellData).replace(/\"/g, '\"\"')\n              }\n              else\n                cellData = ''\n\n              csv += '\"' + cellData + '\"'\n            }\n          }\n        })\n      }\n\n      let blob = new Blob([csv], {\n        type: 'text/csv;charset=utf-8;'\n      })\n\n      if (window.navigator.msSaveOrOpenBlob) {\n        navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv')\n      }\n      else {\n        let link = document.createElement('a')\n        link.style.display = 'none'\n        document.body.appendChild(link)\n        if (link.download !== undefined) {\n          link.setAttribute('href', URL.createObjectURL(blob))\n          link.setAttribute('download', this.exportFilename + '.csv')\n          link.click()\n        }\n        else {\n          csv = 'data:text/csv;charset=utf-8,' + csv\n          window.open(encodeURI(csv))\n        }\n        document.body.removeChild(link)\n      }\n    },\n    resetPage() {\n      this.d_first = 0\n      this.$emit('update:first', this.d_first)\n    },\n    onColumnResizeStart(event) {\n      let containerLeft = DomHandler.getOffset(this.$el).left\n      this.resizeColumnElement = event.target.parentElement\n      this.columnResizing = true\n      this.lastResizeHelperX = (event.pageX - containerLeft + this.$el.scrollLeft)\n\n      this.bindColumnResizeEvents()\n    },\n    onColumnResize(event) {\n      let containerLeft = DomHandler.getOffset(this.$el).left\n      DomHandler.addClass(this.$el, 'p-unselectable-text')\n      this.$refs.resizeHelper.style.height = this.$el.offsetHeight + 'px'\n      this.$refs.resizeHelper.style.top = 0 + 'px'\n      this.$refs.resizeHelper.style.left = (event.pageX - containerLeft + this.$el.scrollLeft) + 'px'\n\n      this.$refs.resizeHelper.style.display = 'block'\n    },\n    onColumnResizeEnd() {\n      let delta = this.$refs.resizeHelper.offsetLeft - this.lastResizeHelperX\n      let columnWidth = this.resizeColumnElement.offsetWidth\n      let newColumnWidth = columnWidth + delta\n      let minWidth = this.resizeColumnElement.style.minWidth || 15\n\n      if (columnWidth + delta > parseInt(minWidth, 10)) {\n        if (this.columnResizeMode === 'fit') {\n          let nextColumn = this.resizeColumnElement.nextElementSibling\n          let nextColumnWidth = nextColumn.offsetWidth - delta\n\n          if (newColumnWidth > 15 && nextColumnWidth > 15) {\n            if (!this.scrollable) {\n              this.resizeColumnElement.style.width = newColumnWidth + 'px'\n              if (nextColumn) {\n                nextColumn.style.width = nextColumnWidth + 'px'\n              }\n            }\n            else {\n              this.resizeTableCells(newColumnWidth, nextColumnWidth)\n            }\n          }\n        }\n        else if (this.columnResizeMode === 'expand') {\n          const tableWidth = this.$refs.table.offsetWidth + delta + 'px'\n          this.$refs.table.style.width = tableWidth\n          this.$refs.table.style.minWidth = tableWidth\n\n          if (!this.scrollable)\n            this.resizeColumnElement.style.width = newColumnWidth + 'px'\n          else\n            this.resizeTableCells(newColumnWidth)\n        }\n\n        this.$emit('column-resize-end', {\n          element: this.resizeColumnElement,\n          delta: delta\n        })\n      }\n\n      this.$refs.resizeHelper.style.display = 'none'\n      this.resizeColumn = null\n      DomHandler.removeClass(this.$el, 'p-unselectable-text')\n\n      this.unbindColumnResizeEvents()\n\n      if (this.isStateful()) {\n        this.saveState()\n      }\n    },\n    resizeTableCells(newColumnWidth, nextColumnWidth) {\n      let colIndex = DomHandler.index(this.resizeColumnElement)\n      let widths = []\n      let headers = DomHandler.find(this.$refs.table, '.p-datatable-thead > tr > th')\n      headers.forEach(header => widths.push(DomHandler.getOuterWidth(header)))\n\n      this.destroyStyleElement()\n      this.createStyleElement()\n\n      let innerHTML = ''\n      widths.forEach((width, index) => {\n        let colWidth = index === colIndex ? newColumnWidth : (nextColumnWidth && index === colIndex + 1) ? nextColumnWidth : width\n        innerHTML += `\n                    .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th:nth-child(${index + 1}) {\n                        flex: 0 0 ${colWidth}px !important;\n                    }\n\n                    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:nth-child(${index + 1}) {\n                        flex: 0 0 ${colWidth}px !important;\n                    }\n                `\n      })\n      this.styleElement.innerHTML = innerHTML\n    },\n    bindColumnResizeEvents() {\n      if (!this.documentColumnResizeListener) {\n        this.documentColumnResizeListener = document.addEventListener('mousemove', () => {\n          if (this.columnResizing) {\n            this.onColumnResize(event)\n          }\n        })\n      }\n\n      if (!this.documentColumnResizeEndListener) {\n        this.documentColumnResizeEndListener = document.addEventListener('mouseup', () => {\n          if (this.columnResizing) {\n            this.columnResizing = false\n            this.onColumnResizeEnd()\n          }\n        })\n      }\n\n    },\n    unbindColumnResizeEvents() {\n      if (this.documentColumnResizeListener) {\n        document.removeEventListener('document', this.documentColumnResizeListener)\n        this.documentColumnResizeListener = null\n      }\n\n      if (this.documentColumnResizeEndListener) {\n        document.removeEventListener('document', this.documentColumnResizeEndListener)\n        this.documentColumnResizeEndListener = null\n      }\n    },\n    onColumnHeaderMouseDown(e) {\n      const event = e.originalEvent\n      const column = e.column\n\n      if (this.reorderableColumns && this.columnProp(column, 'reorderableColumn') !== false) {\n        if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || DomHandler.hasClass(event.target, 'p-column-resizer'))\n          event.currentTarget.draggable = false\n        else\n          event.currentTarget.draggable = true\n      }\n    },\n    onColumnHeaderDragStart(event) {\n      if (this.columnResizing) {\n        event.preventDefault()\n        return\n      }\n\n      this.colReorderIconWidth = DomHandler.getHiddenElementOuterWidth(this.$refs.reorderIndicatorUp)\n      this.colReorderIconHeight = DomHandler.getHiddenElementOuterHeight(this.$refs.reorderIndicatorUp)\n\n      this.draggedColumn = this.findParentHeader(event.target)\n      event.dataTransfer.setData('text', 'b') // Firefox requires this to make dragging possible\n    },\n    onColumnHeaderDragOver(event) {\n      let dropHeader = this.findParentHeader(event.target)\n      if (this.reorderableColumns && this.draggedColumn && dropHeader) {\n        event.preventDefault()\n        let containerOffset = DomHandler.getOffset(this.$el)\n        let dropHeaderOffset = DomHandler.getOffset(dropHeader)\n\n        if (this.draggedColumn !== dropHeader) {\n          let targetLeft = dropHeaderOffset.left - containerOffset.left\n          let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2\n\n          this.$refs.reorderIndicatorUp.style.top = dropHeaderOffset.top - containerOffset.top - (this.colReorderIconHeight - 1) + 'px'\n          this.$refs.reorderIndicatorDown.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px'\n\n          if (event.pageX > columnCenter) {\n            this.$refs.reorderIndicatorUp.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2)) + 'px'\n            this.$refs.reorderIndicatorDown.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2)) + 'px'\n            this.dropPosition = 1\n          }\n          else {\n            this.$refs.reorderIndicatorUp.style.left = (targetLeft - Math.ceil(this.colReorderIconWidth / 2)) + 'px'\n            this.$refs.reorderIndicatorDown.style.left = (targetLeft - Math.ceil(this.colReorderIconWidth / 2)) + 'px'\n            this.dropPosition = -1\n          }\n\n          this.$refs.reorderIndicatorUp.style.display = 'block'\n          this.$refs.reorderIndicatorDown.style.display = 'block'\n        }\n      }\n    },\n    onColumnHeaderDragLeave(event) {\n      if (this.reorderableColumns && this.draggedColumn) {\n        event.preventDefault()\n        this.$refs.reorderIndicatorUp.style.display = 'none'\n        this.$refs.reorderIndicatorDown.style.display = 'none'\n      }\n    },\n    onColumnHeaderDrop(event) {\n      event.preventDefault()\n      if (this.draggedColumn) {\n        let dragIndex = DomHandler.index(this.draggedColumn)\n        let dropIndex = DomHandler.index(this.findParentHeader(event.target))\n        let allowDrop = (dragIndex !== dropIndex)\n        if (allowDrop && ((dropIndex - dragIndex === 1 && this.dropPosition === -1) || (dragIndex - dropIndex === 1 && this.dropPosition === 1))) {\n          allowDrop = false\n        }\n\n        if (allowDrop) {\n          ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex)\n          this.updateReorderableColumns()\n\n          this.$emit('column-reorder', {\n            originalEvent: event,\n            dragIndex: dragIndex,\n            dropIndex: dropIndex\n          })\n        }\n\n        this.$refs.reorderIndicatorUp.style.display = 'none'\n        this.$refs.reorderIndicatorDown.style.display = 'none'\n        this.draggedColumn.draggable = false\n        this.draggedColumn = null\n        this.dropPosition = null\n      }\n    },\n    findParentHeader(element) {\n      if (element.nodeName === 'TH') {\n        return element\n      }\n      else {\n        let parent = element.parentElement\n        while (parent.nodeName !== 'TH') {\n          parent = parent.parentElement\n          if (!parent) break\n        }\n        return parent\n      }\n    },\n    findColumnByKey(columns, key) {\n      if (columns && columns.length) {\n        for (let i = 0; i < columns.length; i++) {\n          let column = columns[i]\n          if (this.columnProp(column, 'columnKey') === key || this.columnProp(column, 'field') === key) {\n            return column\n          }\n        }\n      }\n\n      return null\n    },\n    onRowMouseDown(event) {\n      if (DomHandler.hasClass(event.target, 'p-datatable-reorderablerow-handle'))\n        event.currentTarget.draggable = true\n      else\n        event.currentTarget.draggable = false\n    },\n    onRowDragStart(e) {\n      const event = e.originalEvent\n      const index = e.index\n      this.rowDragging = true\n      this.draggedRowIndex = index\n      event.dataTransfer.setData('text', 'b')    // For firefox\n    },\n    onRowDragOver(e) {\n      const event = e.originalEvent\n      const index = e.index\n\n      if (this.rowDragging && this.draggedRowIndex !== index) {\n        let rowElement = event.currentTarget\n        let rowY = DomHandler.getOffset(rowElement).top + DomHandler.getWindowScrollTop()\n        let pageY = event.pageY\n        let rowMidY = rowY + DomHandler.getOuterHeight(rowElement) / 2\n        let prevRowElement = rowElement.previousElementSibling\n\n        if (pageY < rowMidY) {\n          DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom')\n\n          this.droppedRowIndex = index\n          if (prevRowElement)\n            DomHandler.addClass(prevRowElement, 'p-datatable-dragpoint-bottom')\n          else\n            DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top')\n        }\n        else {\n          if (prevRowElement)\n            DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom')\n          else\n            DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top')\n\n          this.droppedRowIndex = index + 1\n          DomHandler.addClass(rowElement, 'p-datatable-dragpoint-bottom')\n        }\n\n        event.preventDefault()\n      }\n    },\n    onRowDragLeave(event) {\n      let rowElement = event.currentTarget\n      let prevRowElement = rowElement.previousElementSibling\n      if (prevRowElement) {\n        DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom')\n      }\n\n      DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom')\n      DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top')\n    },\n    onRowDragEnd(event) {\n      this.rowDragging = false\n      this.draggedRowIndex = null\n      this.droppedRowIndex = null\n      event.currentTarget.draggable = false\n    },\n    onRowDrop(event) {\n      if (this.droppedRowIndex != null) {\n        let dropIndex = (this.draggedRowIndex > this.droppedRowIndex) ? this.droppedRowIndex : (this.droppedRowIndex === 0) ? 0 : this.droppedRowIndex - 1\n        let processedData = [...this.processedData]\n        ObjectUtils.reorderArray(processedData, this.draggedRowIndex, dropIndex)\n\n        this.$emit('row-reorder', {\n          originalEvent: event,\n          dragIndex: this.draggedRowIndex,\n          dropIndex: dropIndex,\n          value: processedData\n        })\n      }\n\n      //cleanup\n      this.onRowDragLeave(event)\n      this.onRowDragEnd(event)\n      event.preventDefault()\n    },\n    toggleRow(event) {\n      let rowData = event.data\n      let expanded\n      let expandedRowIndex\n      let _expandedRows = this.expandedRows ? [...this.expandedRows] : []\n\n      if (this.dataKey) {\n        expanded = this.d_expandedRowKeys ? this.d_expandedRowKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false\n      }\n      else {\n        expandedRowIndex = this.findIndex(rowData, this.expandedRows)\n        expanded = expandedRowIndex > -1\n      }\n\n      if (expanded) {\n        if (expandedRowIndex == null) {\n          expandedRowIndex = this.findIndex(rowData, this.expandedRows)\n        }\n        _expandedRows.splice(expandedRowIndex, 1)\n        this.$emit('update:expandedRows', _expandedRows)\n        this.$emit('row-collapse', event)\n      }\n      else {\n        _expandedRows.push(rowData)\n        this.$emit('update:expandedRows', _expandedRows)\n        this.$emit('row-expand', event)\n      }\n    },\n    toggleRowGroup(e) {\n      const event = e.originalEvent\n      const data = e.data\n      const groupFieldValue = ObjectUtils.resolveFieldData(data, this.groupRowsBy)\n      let _expandedRowGroups = this.expandedRowGroups ? [...this.expandedRowGroups] : []\n\n      if (this.isRowGroupExpanded(data)) {\n        _expandedRowGroups = _expandedRowGroups.filter(group => group !== groupFieldValue)\n        this.$emit('update:expandedRowGroups', _expandedRowGroups)\n        this.$emit('rowgroup-collapse', { originalEvent: event, data: groupFieldValue })\n      }\n      else {\n        _expandedRowGroups.push(groupFieldValue)\n        this.$emit('update:expandedRowGroups', _expandedRowGroups)\n        this.$emit('rowgroup-expand', { originalEvent: event, data: groupFieldValue })\n      }\n    },\n    isRowGroupExpanded(rowData) {\n      if (this.expandableRowGroups && this.expandedRowGroups) {\n        let groupFieldValue = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy)\n        return this.expandedRowGroups.indexOf(groupFieldValue) > -1\n      }\n      return false\n    },\n    isStateful() {\n      return this.stateKey != null\n    },\n    getStorage() {\n      switch (this.stateStorage) {\n      case 'local':\n        return window.localStorage\n\n      case 'session':\n        return window.sessionStorage\n\n      default:\n        throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are \"local\" and \"session\".')\n      }\n    },\n    saveState() {\n      const storage = this.getStorage()\n      let state = {}\n\n      if (this.paginator) {\n        state.first = this.d_first\n        state.rows = this.d_rows\n      }\n\n      if (this.d_sortField) {\n        state.sortField = this.d_sortField\n        state.sortOrder = this.d_sortOrder\n      }\n\n      if (this.d_multiSortMeta) {\n        state.multiSortMeta = this.d_multiSortMeta\n      }\n\n      if (this.hasFilters) {\n        state.filters = this.filters\n      }\n\n      if (this.resizableColumns) {\n        this.saveColumnWidths(state)\n      }\n\n      if (this.reorderableColumns) {\n        state.columnOrder = this.d_columnOrder\n      }\n\n      if (this.expandedRows) {\n        state.expandedRows = this.expandedRows\n        state.expandedRowKeys = this.d_expandedRowKeys\n      }\n\n      if (this.expandedRowGroups) {\n        state.expandedRowGroups = this.expandedRowGroups\n      }\n\n      if (this.selection) {\n        state.selection = this.selection\n        state.selectionKeys = this.d_selectionKeys\n      }\n\n      if (Object.keys(state).length) {\n        storage.setItem(this.stateKey, JSON.stringify(state))\n      }\n\n      this.$emit('state-save', state)\n    },\n    restoreState() {\n      const storage = this.getStorage()\n      const stateString = storage.getItem(this.stateKey)\n      const dateFormat = /\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z/\n      const reviver = function (key, value) {\n        if (typeof value === 'string' && dateFormat.test(value)) {\n          return new Date(value)\n        }\n\n        return value\n      }\n\n      if (stateString) {\n        let restoredState = JSON.parse(stateString, reviver)\n\n        if (this.paginator) {\n          this.d_first = restoredState.first\n          this.d_rows = restoredState.rows\n        }\n\n        if (restoredState.sortField) {\n          this.d_sortField = restoredState.sortField\n          this.d_sortOrder = restoredState.sortOrder\n        }\n\n        if (restoredState.multiSortMeta) {\n          this.d_multiSortMeta = restoredState.multiSortMeta\n        }\n\n        if (restoredState.filters) {\n          this.$emit('update:filters', restoredState.filters)\n        }\n\n        if (this.resizableColumns) {\n          this.columnWidthsState = restoredState.columnWidths\n          this.tableWidthState = restoredState.tableWidth\n        }\n\n        if (this.reorderableColumns) {\n          this.d_columnOrder = restoredState.columnOrder\n        }\n\n        if (restoredState.expandedRows) {\n          this.d_expandedRowKeys = restoredState.expandedRowKeys\n          this.$emit('update:expandedRows', restoredState.expandedRows)\n        }\n\n        if (restoredState.expandedRowGroups) {\n          this.$emit('update:expandedRowGroups', restoredState.expandedRowGroups)\n        }\n\n        if (restoredState.selection) {\n          this.d_selectionKeys = restoredState.d_selectionKeys\n          this.$emit('update:selection', restoredState.selection)\n        }\n\n        this.$emit('state-restore', restoredState)\n      }\n    },\n    saveColumnWidths(state) {\n      let widths = []\n      let headers = DomHandler.find(this.$el, '.p-datatable-thead > tr > th')\n      headers.forEach(header => widths.push(DomHandler.getOuterWidth(header)))\n      state.columnWidths = widths.join(',')\n\n      if (this.columnResizeMode === 'expand') {\n        state.tableWidth = DomHandler.getOuterWidth(this.$refs.table) + 'px'\n      }\n    },\n    restoreColumnWidths() {\n      if (this.columnWidthsState) {\n        let widths = this.columnWidthsState.split(',')\n\n        if (this.columnResizeMode === 'expand' && this.tableWidthState) {\n          this.$refs.table.style.width = this.tableWidthState\n          this.$refs.table.style.minWidth = this.tableWidthState\n          this.$el.style.width = this.tableWidthState\n        }\n\n        this.createStyleElement()\n\n        if (this.scrollable && widths && widths.length > 0) {\n          let innerHTML = ''\n          widths.forEach((width, index) => {\n            innerHTML += `\n                            .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th:nth-child(${index + 1}) {\n                                flex: 0 0 ${width}px;\n                            }\n\n                            .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:nth-child(${index + 1}) {\n                                flex: 0 0 ${width}px;\n                            }\n                        `\n          })\n\n          this.styleElement.innerHTML = innerHTML\n        }\n        else {\n          DomHandler.find(this.$refs.table, '.p-datatable-thead > tr > th').forEach((header, index) => header.style.width = widths[index] + 'px')\n        }\n      }\n    },\n    onCellEditInit(event) {\n      this.$emit('cell-edit-init', event)\n    },\n    onCellEditComplete(event) {\n      this.$emit('cell-edit-complete', event)\n    },\n    onCellEditCancel(event) {\n      this.$emit('cell-edit-cancel', event)\n    },\n    onRowEditInit(event) {\n      let _editingRows = this.editingRows ? [...this.editingRows] : []\n      _editingRows.push(event.data)\n      this.$emit('update:editingRows', _editingRows)\n      this.$emit('row-edit-init', event)\n    },\n    onRowEditSave(event) {\n      let _editingRows = [...this.editingRows]\n      _editingRows.splice(this.findIndex(event.data, _editingRows), 1)\n      this.$emit('update:editingRows', _editingRows)\n      this.$emit('row-edit-save', event)\n    },\n    onRowEditCancel(event) {\n      let _editingRows = [...this.editingRows]\n      _editingRows.splice(this.findIndex(event.data, _editingRows), 1)\n      this.$emit('update:editingRows', _editingRows)\n      this.$emit('row-edit-cancel', event)\n    },\n    onEditingMetaChange(event) {\n      let { data, field, index, editing } = event\n      let editingMeta = { ...(this.d_editingMeta || {}) }\n      let meta = editingMeta[index]\n\n      if (editing) {\n        !meta && (meta = editingMeta[index] = { data: { ...data }, fields: [] })\n        meta['fields'].push(field)\n      }\n      else if (meta) {\n        const fields = meta['fields'].filter(f => f !== field)\n        !fields.length ? (delete editingMeta[index]) : (meta['fields'] = fields)\n      }\n\n      this.d_editingMeta = editingMeta\n    },\n    clearEditingMetaData() {\n      if (this.editMode) {\n        this.d_editingMeta = {}\n      }\n    },\n    createLazyLoadEvent(event) {\n      return {\n        originalEvent: event,\n        first: this.d_first,\n        rows: this.d_rows,\n        sortField: this.d_sortField,\n        sortOrder: this.d_sortOrder,\n        multiSortMeta: this.d_multiSortMeta,\n        filters: this.d_filters\n      }\n    },\n    hasGlobalFilter() {\n      return this.filters && Object.prototype.hasOwnProperty.call(this.filters, 'global')\n    },\n    getChildren() {\n      return this.$scopedSlots.default ? this.$scopedSlots.default() : null\n    },\n    onFilterChange(filters) {\n      this.d_filters = filters\n    },\n    onFilterApply() {\n      this.d_first = 0\n      this.$emit('update:first', this.d_first)\n      this.$emit('update:filters', this.d_filters)\n\n      if (this.lazy) {\n        this.$emit('filter', this.createLazyLoadEvent())\n      }\n    },\n    cloneFilters() {\n      let cloned = {}\n      if (this.filters) {\n        Object.entries(this.filters).forEach(([prop, value]) => {\n          cloned[prop] = value.operator ? { operator: value.operator, constraints: value.constraints.map(constraint => { return { ...constraint } }) } : { ...value }\n        })\n      }\n\n      return cloned\n    },\n    updateReorderableColumns() {\n      let columnOrder = []\n      this.columns.forEach(col => columnOrder.push(this.columnProp(col, 'columnKey') || this.columnProp(col, 'field')))\n      this.d_columnOrder = columnOrder\n    },\n    createStyleElement() {\n      this.styleElement = document.createElement('style')\n      this.styleElement.type = 'text/css'\n      document.head.appendChild(this.styleElement)\n    },\n    createResponsiveStyle() {\n      if (!this.responsiveStyleElement) {\n        this.responsiveStyleElement = document.createElement('style')\n        this.responsiveStyleElement.type = 'text/css'\n        document.head.appendChild(this.responsiveStyleElement)\n\n        let innerHTML = `\n@media screen and (max-width: ${this.breakpoint}) {\n    .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th,\n    .p-datatable[${this.attributeSelector}] .p-datatable-tfoot > tr > td {\n        display: none !important;\n    }\n\n    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td {\n        display: flex;\n        width: 100% !important;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:not(:last-child) {\n        border: 0 none;\n    }\n\n    .p-datatable[${this.attributeSelector}].p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {\n        border-top: 0;\n        border-right: 0;\n        border-left: 0;\n    }\n\n    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td > .p-column-title {\n        display: block;\n    }\n}\n`\n\n        this.responsiveStyleElement.innerHTML = innerHTML\n      }\n    },\n    destroyResponsiveStyle() {\n      if (this.responsiveStyleElement) {\n        document.head.removeChild(this.responsiveStyleElement)\n        this.responsiveStyleElement = null\n      }\n    },\n    destroyStyleElement() {\n      if (this.styleElement) {\n        document.head.removeChild(this.styleElement)\n        this.styleElement = null\n      }\n    },\n    recursiveGetChildren(children, results) {\n      if (!results) {\n        results = []\n      }\n      if (children && children.length) {\n        children.forEach((child) => {\n          if (child.children instanceof Array) {\n            results.concat(this.recursiveGetChildren(child.children, results))\n          } else if (child.type.name == 'Column') {\n            results.push(child)\n          }\n        })\n      }\n      return results\n    },\n  },\n  computed: {\n    containerClass() {\n      return [\n        'p-datatable p-component', {\n          'p-datatable-hoverable-rows': (this.rowHover || this.selectionMode),\n          'p-datatable-auto-layout': this.autoLayout,\n          'p-datatable-resizable': this.resizableColumns,\n          'p-datatable-resizable-fit': this.resizableColumns && this.columnResizeMode === 'fit',\n          'p-datatable-scrollable': this.scrollable,\n          'p-datatable-scrollable-vertical': this.scrollable && this.scrollDirection === 'vertical',\n          'p-datatable-scrollable-horizontal': this.scrollable && this.scrollDirection === 'horizontal',\n          'p-datatable-scrollable-both': this.scrollable && this.scrollDirection === 'both',\n          'p-datatable-flex-scrollable': (this.scrollable && this.scrollHeight === 'flex'),\n          'p-datatable-responsive-stack': this.responsiveLayout === 'stack',\n          'p-datatable-responsive-scroll': this.responsiveLayout === 'scroll',\n          'p-datatable-striped': this.stripedRows,\n          'p-datatable-gridlines': this.showGridlines,\n          'p-datatable-grouped-header': this.headerColumnGroup != null,\n          'p-datatable-grouped-footer': this.footerColumnGroup != null\n        }\n      ]\n    },\n    columns() {\n      let columns = []\n\n      if (this.allChildren) {\n        columns = this.allChildren.filter(child => child.$options._propKeys.indexOf('columnKey') !== -1)\n\n        if (this.reorderableColumns && this.d_columnOrder) {\n          let orderedColumns = []\n          for (let columnKey of this.d_columnOrder) {\n            let column = this.findColumnByKey(columns, columnKey)\n            if (column) {\n              orderedColumns.push(column)\n            }\n          }\n\n          return [...orderedColumns, ...columns.filter((item) => {\n            return orderedColumns.indexOf(item) < 0\n          })]\n        }\n      }\n      return columns\n    },\n    headerColumnGroup() {\n      if (this.allChildren) {\n        for (let child of this.allChildren) {\n          if (child.$vnode.tag.indexOf('columngroup') !== -1 && this.columnProp(child, 'type') === 'header') {\n            return child\n          }\n        }\n      }\n      return null\n    },\n    footerColumnGroup() {\n      if (this.allChildren) {\n        for (let child of this.allChildren) {\n          if (child.$vnode.tag.indexOf('columngroup') !== -1 && this.columnProp(child, 'type') === 'footer') {\n            return child\n          }\n        }\n      }\n      return null\n    },\n    hasFilters() {\n      return this.filters && Object.keys(this.filters).length > 0 && this.filters.constructor === Object\n    },\n    processedData() {\n      let data = this.value || []\n\n      if (!this.lazy) {\n        if (data && data.length) {\n          if (this.hasFilters) {\n            data = this.filter(data)\n          }\n\n          if (this.sorted) {\n            if (this.sortMode === 'single')\n              data = this.sortSingle(data)\n            else if (this.sortMode === 'multiple')\n              data = this.sortMultiple(data)\n          }\n        }\n      }\n\n      return data\n    },\n    dataToRender() {\n      const data = this.processedData\n\n      if (data && this.paginator) {\n        const first = this.lazy ? 0 : this.d_first\n        return data.slice(first, first + this.d_rows)\n      }\n      else {\n        return data\n      }\n    },\n    totalRecordsLength() {\n      if (this.lazy) {\n        return this.totalRecords\n      }\n      else {\n        const data = this.processedData\n        return data ? data.length : 0\n      }\n    },\n    empty() {\n      const data = this.processedData\n      return (!data || data.length === 0)\n    },\n    paginatorTop() {\n      return this.paginator && (this.paginatorPosition !== 'bottom' || this.paginatorPosition === 'both')\n    },\n    paginatorBottom() {\n      return this.paginator && (this.paginatorPosition !== 'top' || this.paginatorPosition === 'both')\n    },\n    sorted() {\n      return this.d_sortField || (this.d_multiSortMeta && this.d_multiSortMeta.length > 0)\n    },\n    loadingIconClass() {\n      return ['p-datatable-loading-icon pi-spin', this.loadingIcon]\n    },\n    allRowsSelected() {\n      if (this.selectAll !== null) {\n        return this.selectAll\n      }\n      else {\n        const val = this.frozenValue ? [...this.frozenValue, ...this.processedData] : this.processedData\n        return val && this.selection && Array.isArray(this.selection) && val.every(v => this.selection.some(s => this.equals(s, v)))\n      }\n    },\n    attributeSelector() {\n      return UniqueComponentId()\n    },\n    groupRowSortField() {\n      return this.sortMode === 'single' ? this.sortField : (this.d_groupRowsSortMeta ? this.d_groupRowsSortMeta.field : null)\n    }\n  },\n  components: {\n    'DTPaginator': Paginator,\n    'DTTableHeader': TableHeader,\n    'DTTableBody': TableBody,\n    'DTTableFooter': TableFooter,\n  }\n}\n</script>\n\n<style>\n.p-datatable {\n  position: relative;\n}\n\n.p-datatable table {\n  border-collapse: collapse;\n  min-width: 100%;\n  table-layout: fixed;\n}\n\n.p-datatable .p-sortable-column {\n  cursor: pointer;\n  user-select: none;\n}\n\n.p-datatable .p-sortable-column .p-column-title,\n.p-datatable .p-sortable-column .p-sortable-column-icon,\n.p-datatable .p-sortable-column .p-sortable-column-badge {\n  vertical-align: middle;\n}\n\n.p-datatable .p-sortable-column .p-sortable-column-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.p-datatable-responsive-scroll > .p-datatable-wrapper {\n  overflow-x: auto;\n}\n\n.p-datatable-responsive-scroll > .p-datatable-wrapper > table,\n.p-datatable-auto-layout > .p-datatable-wrapper > table {\n  table-layout: auto;\n}\n\n.p-datatable-hoverable-rows .p-selectable-row {\n  cursor: pointer;\n}\n\n/* Scrollable */\n.p-datatable-scrollable .p-datatable-wrapper {\n  position: relative;\n  overflow: auto;\n}\n\n.p-datatable-scrollable .p-datatable-thead,\n.p-datatable-scrollable .p-datatable-tbody,\n.p-datatable-scrollable .p-datatable-tfoot {\n  display: block;\n}\n\n.p-datatable-scrollable .p-datatable-thead > tr,\n.p-datatable-scrollable .p-datatable-tbody > tr,\n.p-datatable-scrollable .p-datatable-tfoot > tr {\n  display: flex;\n  flex-wrap: nowrap;\n  width: 100%;\n}\n\n.p-datatable-scrollable .p-datatable-thead > tr > th,\n.p-datatable-scrollable .p-datatable-tbody > tr > td,\n.p-datatable-scrollable .p-datatable-tfoot > tr > td {\n  display: flex;\n  flex: 1 1 0;\n  align-items: center;\n}\n\n.p-datatable-scrollable .p-datatable-thead {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.p-datatable-scrollable .p-datatable-frozen-tbody {\n  position: sticky;\n  z-index: 1;\n}\n\n.p-datatable-scrollable .p-datatable-tfoot {\n  position: sticky;\n  bottom: 0;\n  z-index: 1;\n}\n\n.p-datatable-scrollable .p-frozen-column {\n  position: sticky;\n  background: inherit;\n}\n\n.p-datatable-scrollable th.p-frozen-column {\n  z-index: 1;\n}\n\n.p-datatable-scrollable-both .p-datatable-thead > tr > th,\n.p-datatable-scrollable-both .p-datatable-tbody > tr > td,\n.p-datatable-scrollable-both .p-datatable-tfoot > tr > td,\n.p-datatable-scrollable-horizontal\n  .p-datatable-thead\n  > tr\n  > th\n  .p-datatable-scrollable-horizontal\n  .p-datatable-tbody\n  > tr\n  > td,\n.p-datatable-scrollable-horizontal .p-datatable-tfoot > tr > td {\n  flex: 1 0 auto;\n}\n\n.p-datatable-flex-scrollable {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.p-datatable-flex-scrollable .p-datatable-wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  height: 100%;\n}\n\n.p-datatable-scrollable .p-rowgroup-header {\n  position: sticky;\n  z-index: 1;\n}\n\n.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead,\n.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot {\n  display: table;\n  border-collapse: collapse;\n  width: 100%;\n  table-layout: fixed;\n}\n\n.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead > tr,\n.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot > tr {\n  display: table-row;\n}\n\n.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead > tr > th,\n.p-datatable-scrollable.p-datatable-grouped-footer\n  .p-datatable-tfoot\n  > tr\n  > td {\n  display: table-cell;\n}\n\n/* Resizable */\n.p-datatable-resizable > .p-datatable-wrapper {\n  overflow-x: auto;\n}\n\n.p-datatable-resizable .p-datatable-thead > tr > th,\n.p-datatable-resizable .p-datatable-tfoot > tr > td,\n.p-datatable-resizable .p-datatable-tbody > tr > td {\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.p-datatable-resizable .p-resizable-column:not(.p-frozen-column) {\n  background-clip: padding-box;\n  position: relative;\n}\n\n.p-datatable-resizable-fit .p-resizable-column:last-child .p-column-resizer {\n  display: none;\n}\n\n.p-datatable .p-column-resizer {\n  display: block;\n  position: absolute !important;\n  top: 0;\n  right: 0;\n  margin: 0;\n  width: 0.5rem;\n  height: 100%;\n  padding: 0px;\n  cursor: col-resize;\n  border: 1px solid transparent;\n}\n\n.p-datatable .p-column-header-content {\n  display: flex;\n  align-items: center;\n}\n\n.p-datatable .p-column-resizer-helper {\n  width: 1px;\n  position: absolute;\n  z-index: 10;\n  display: none;\n}\n\n.p-datatable .p-row-editor-init,\n.p-datatable .p-row-editor-save,\n.p-datatable .p-row-editor-cancel {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Expand */\n.p-datatable .p-row-toggler {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Reorder */\n.p-datatable-reorder-indicator-up,\n.p-datatable-reorder-indicator-down {\n  position: absolute;\n  display: none;\n}\n\n/* Loader */\n.p-datatable .p-datatable-loading-overlay {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n\n/* Filter */\n.p-column-filter-row {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.p-column-filter-menu {\n  display: inline-flex;\n  margin-left: auto;\n}\n\n.p-column-filter-row .p-column-filter-element {\n  flex: 1 1 auto;\n  width: 1%;\n}\n\n.p-column-filter-menu-button,\n.p-column-filter-clear-button {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-column-filter-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.p-column-filter-row-items {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.p-column-filter-row-item {\n  cursor: pointer;\n}\n\n.p-column-filter-add-button,\n.p-column-filter-remove-button {\n  justify-content: center;\n}\n\n.p-column-filter-add-button .p-button-label,\n.p-column-filter-remove-button .p-button-label {\n  flex-grow: 0;\n}\n\n.p-column-filter-buttonbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.p-column-filter-buttonbar .p-button:not(.p-button-icon-only) {\n  width: auto;\n}\n\n/* Responsive */\n.p-datatable .p-datatable-tbody > tr > td > .p-column-title {\n  display: none;\n}\n</style>\n"]
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
