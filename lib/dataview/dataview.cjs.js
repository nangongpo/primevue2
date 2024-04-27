'use strict';

var Paginator = require('primevue2/paginator');
var utils = require('primevue2/utils');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Paginator__default = /*#__PURE__*/_interopDefaultLegacy(Paginator);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var script = {
  name: 'DataView',
  props: {
    value: {
      type: Array,
      default: null
    },
    layout: {
      type: String,
      default: 'list'
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
    sortField: {
      type: [String, Function],
      default: null
    },
    sortOrder: {
      type: Number,
      default: null
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      d_first: this.first,
      d_rows: this.rows
    };
  },
  watch: {
    first: function first(newValue) {
      this.d_first = newValue;
    },
    rows: function rows(newValue) {
      this.d_rows = newValue;
    },
    sortField: function sortField() {
      this.resetPage();
    },
    sortOrder: function sortOrder() {
      this.resetPage();
    }
  },
  methods: {
    onPage: function onPage(event) {
      this.d_first = event.first;
      this.d_rows = event.rows;
      this.$emit('update:first', this.d_first);
      this.$emit('update:rows', this.d_rows);
      this.$emit('page', event);
    },
    sort: function sort() {
      var _this = this;
      if (this.value) {
        var value = _toConsumableArray(this.value);
        value.sort(function (data1, data2) {
          var value1 = utils.ObjectUtils.resolveFieldData(data1, _this.sortField);
          var value2 = utils.ObjectUtils.resolveFieldData(data2, _this.sortField);
          var result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
            numeric: true
          });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
          return _this.sortOrder * result;
        });
        return value;
      } else {
        return null;
      }
    },
    resetPage: function resetPage() {
      this.d_first = 0;
      this.$emit('update:first', this.d_first);
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-dataview p-component', {
        'p-dataview-list': this.layout === 'list',
        'p-dataview-grid': this.layout === 'grid'
      }];
    },
    getTotalRecords: function getTotalRecords() {
      if (this.totalRecords) return this.totalRecords;else return this.value ? this.value.length : 0;
    },
    empty: function empty() {
      return !this.value || this.value.length === 0;
    },
    paginatorTop: function paginatorTop() {
      return this.paginator && (this.paginatorPosition !== 'bottom' || this.paginatorPosition === 'both');
    },
    paginatorBottom: function paginatorBottom() {
      return this.paginator && (this.paginatorPosition !== 'top' || this.paginatorPosition === 'both');
    },
    items: function items() {
      if (this.value && this.value.length) {
        var data = this.value;
        if (data && data.length && this.sortField) {
          data = this.sort();
        }
        if (this.paginator) {
          var first = this.lazy ? 0 : this.d_first;
          return data.slice(first, first + this.d_rows);
        } else {
          return data;
        }
      } else {
        return null;
      }
    }
  },
  components: {
    'DVPaginator': Paginator__default["default"]
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
var __vue_script__ = script;

/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    class: _vm.containerClass
  }, [_vm.$scopedSlots.header ? _c("div", {
    staticClass: "p-dataview-header"
  }, [_vm._t("header")], 2) : _vm._e(), _vm._v(" "), _vm.paginatorTop ? _c("DVPaginator", {
    class: {
      "p-paginator-top": _vm.paginatorTop
    },
    attrs: {
      rows: _vm.d_rows,
      first: _vm.d_first,
      totalRecords: _vm.getTotalRecords,
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
    staticClass: "p-dataview-content"
  }, [_c("div", {
    staticClass: "p-grid p-nogutter grid grid-nogutter"
  }, [_vm._l(_vm.items, function (item, index) {
    return [_vm.$scopedSlots.list && _vm.layout === "list" ? _vm._t("list", null, {
      data: item,
      index: index
    }) : _vm._e(), _vm._v(" "), _vm.$scopedSlots.grid && _vm.layout === "grid" ? _vm._t("grid", null, {
      data: item,
      index: index
    }) : _vm._e()];
  }), _vm._v(" "), _vm.empty ? _c("div", {
    staticClass: "p-col col"
  }, [_c("div", {
    staticClass: "p-dataview-emptymessage"
  }, [_vm._t("empty")], 2)]) : _vm._e()], 2)]), _vm._v(" "), _vm.paginatorBottom ? _c("DVPaginator", {
    class: {
      "p-paginator-bottom": _vm.paginatorBottom
    },
    attrs: {
      rows: _vm.d_rows,
      first: _vm.d_first,
      totalRecords: _vm.getTotalRecords,
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
    staticClass: "p-dataview-footer"
  }, [_vm._t("footer")], 2) : _vm._e()], 1);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = undefined;
/* scoped */
var __vue_scope_id__ = undefined;
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

module.exports = __vue_component__;
