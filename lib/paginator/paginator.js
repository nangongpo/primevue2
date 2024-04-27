this.primevue2 = this.primevue2 || {};
this.primevue2.paginator = (function (Ripple, Dropdown, InputNumber) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);
  var Dropdown__default = /*#__PURE__*/_interopDefaultLegacy(Dropdown);
  var InputNumber__default = /*#__PURE__*/_interopDefaultLegacy(InputNumber);

  //
  //
  //

  var script$9 = {
    inheritAttrs: false,
    props: {
      pageCount: {
        type: Number,
        default: 0
      },
      currentPage: {
        type: Number,
        default: 0
      },
      page: {
        type: Number,
        default: 0
      },
      first: {
        type: Number,
        default: 0
      },
      rows: {
        type: Number,
        default: 0
      },
      totalRecords: {
        type: Number,
        default: 0
      },
      template: {
        type: String,
        default: '({currentPage} of {totalPages})'
      }
    },
    computed: {
      text: function text() {
        var text = this.template.replace('{currentPage}', this.currentPage).replace('{totalPages}', this.pageCount).replace('{first}', this.pageCount > 0 ? this.first + 1 : 0).replace('{last}', Math.min(this.first + this.rows, this.totalRecords)).replace('{rows}', this.rows).replace('{totalRecords}', this.totalRecords);
        return text;
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

  /* script */
  var __vue_script__$9 = script$9;

  /* template */
  var __vue_render__$9 = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", {
      staticClass: "p-paginator-current"
    }, [_vm._v(_vm._s(_vm.text))]);
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
    computed: {
      containerClass: function containerClass() {
        return ['p-paginator-first p-paginator-element p-link', {
          'p-disabled': this.$attrs.disabled
        }];
      }
    },
    directives: {
      'ripple': Ripple__default["default"]
    }
  };

  /* script */
  var __vue_script__$8 = script$8;

  /* template */
  var __vue_render__$8 = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("button", _vm._g({
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      class: _vm.containerClass,
      attrs: {
        type: "button"
      }
    }, _vm.$listeners), [_c("span", {
      staticClass: "p-paginator-icon pi pi-angle-double-left"
    })]);
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

  //
  var script$7 = {
    computed: {
      containerClass: function containerClass() {
        return ['p-paginator-last p-paginator-element p-link', {
          'p-disabled': this.$attrs.disabled
        }];
      }
    },
    directives: {
      'ripple': Ripple__default["default"]
    }
  };

  /* script */
  var __vue_script__$7 = script$7;

  /* template */
  var __vue_render__$7 = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("button", _vm._g({
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      class: _vm.containerClass,
      attrs: {
        type: "button"
      }
    }, _vm.$listeners), [_c("span", {
      staticClass: "p-paginator-icon pi pi-angle-double-right"
    })]);
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
  var script$6 = {
    computed: {
      containerClass: function containerClass() {
        return ['p-paginator-next p-paginator-element p-link', {
          'p-disabled': this.$attrs.disabled
        }];
      }
    },
    directives: {
      'ripple': Ripple__default["default"]
    }
  };

  /* script */
  var __vue_script__$6 = script$6;

  /* template */
  var __vue_render__$6 = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("button", _vm._g({
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      class: _vm.containerClass,
      attrs: {
        type: "button"
      }
    }, _vm.$listeners), [_c("span", {
      staticClass: "p-paginator-icon pi pi-angle-right"
    })]);
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
  var script$5 = {
    inheritAttrs: false,
    props: {
      value: Array,
      page: Number
    },
    methods: {
      onPageLinkClick: function onPageLinkClick(event, pageLink) {
        this.$emit('click', {
          originalEvent: event,
          value: pageLink
        });
      }
    },
    directives: {
      'ripple': Ripple__default["default"]
    }
  };

  /* script */
  var __vue_script__$5 = script$5;

  /* template */
  var __vue_render__$5 = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", {
      staticClass: "p-paginator-pages"
    }, _vm._l(_vm.value, function (pageLink) {
      return _c("button", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        key: pageLink,
        class: ["p-paginator-page p-paginator-element p-link", {
          "p-highlight": pageLink - 1 === _vm.page
        }],
        attrs: {
          type: "button"
        },
        on: {
          click: function click($event) {
            return _vm.onPageLinkClick($event, pageLink);
          }
        }
      }, [_vm._v("\n    " + _vm._s(pageLink) + "\n  ")]);
    }), 0);
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
    computed: {
      containerClass: function containerClass() {
        return ['p-paginator-prev p-paginator-element p-link', {
          'p-disabled': this.$attrs.disabled
        }];
      }
    },
    directives: {
      'ripple': Ripple__default["default"]
    }
  };

  /* script */
  var __vue_script__$4 = script$4;

  /* template */
  var __vue_render__$4 = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("button", _vm._g({
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      class: _vm.containerClass,
      attrs: {
        type: "button"
      }
    }, _vm.$listeners), [_c("span", {
      staticClass: "p-paginator-icon pi pi-angle-left"
    })]);
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
  var script$3 = {
    inheritAttrs: false,
    props: {
      options: Array,
      rows: Number,
      disabled: Boolean
    },
    methods: {
      onChange: function onChange(value) {
        this.$emit('rows-change', value);
      }
    },
    computed: {
      rowsOptions: function rowsOptions() {
        var opts = [];
        if (this.options) {
          for (var i = 0; i < this.options.length; i++) {
            opts.push({
              label: String(this.options[i]),
              value: this.options[i]
            });
          }
        }
        return opts;
      }
    },
    components: {
      'RPPDropdown': Dropdown__default["default"]
    }
  };

  /* script */
  var __vue_script__$3 = script$3;

  /* template */
  var __vue_render__$3 = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("RPPDropdown", {
      attrs: {
        value: _vm.rows,
        options: _vm.rowsOptions,
        optionLabel: "label",
        optionValue: "value",
        disabled: _vm.disabled
      },
      on: {
        input: function input($event) {
          return _vm.onChange($event);
        }
      }
    });
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
    inheritAttrs: false,
    props: {
      page: Number,
      pageCount: Number,
      disabled: Boolean
    },
    methods: {
      onChange: function onChange(value) {
        this.$emit('page-change', value);
      }
    },
    computed: {
      pageOptions: function pageOptions() {
        var opts = [];
        for (var i = 0; i < this.pageCount; i++) {
          opts.push({
            label: String(i + 1),
            value: i
          });
        }
        return opts;
      }
    },
    components: {
      'JTPDropdown': Dropdown__default["default"]
    }
  };

  /* script */
  var __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$2 = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("JTPDropdown", {
      staticClass: "p-paginator-page-options",
      attrs: {
        value: _vm.page,
        options: _vm.pageOptions,
        optionLabel: "label",
        optionValue: "value",
        disabled: _vm.disabled
      },
      on: {
        input: function input($event) {
          return _vm.onChange($event);
        }
      }
    });
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
    name: 'JumpToPageInput',
    inheritAttrs: false,
    emits: ['page-change'],
    props: {
      page: Number,
      pageCount: Number,
      disabled: Boolean
    },
    methods: {
      onChange: function onChange(value) {
        this.$emit('page-change', value - 1);
      }
    },
    components: {
      'JTPInput': InputNumber__default["default"]
    }
  };

  /* script */
  var __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("JTPInput", {
      staticClass: "p-paginator-page-input",
      attrs: {
        value: _vm.page,
        disabled: _vm.disabled
      },
      on: {
        input: function input($event) {
          return _vm.onChange($event);
        }
      }
    });
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

  //
  var script = {
    name: 'Paginator',
    props: {
      totalRecords: {
        type: Number,
        default: 0
      },
      rows: {
        type: Number,
        default: 0
      },
      first: {
        type: Number,
        default: 0
      },
      pageLinkSize: {
        type: Number,
        default: 5
      },
      rowsPerPageOptions: {
        type: Array,
        default: null
      },
      template: {
        type: String,
        default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
      },
      currentPageReportTemplate: {
        type: null,
        default: '({currentPage} of {totalPages})'
      },
      alwaysShow: {
        type: Boolean,
        default: true
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
      totalRecords: function totalRecords(newValue) {
        if (this.page > 0 && newValue && this.d_first >= newValue) {
          this.changePage(this.pageCount - 1);
        }
      }
    },
    methods: {
      changePage: function changePage(p) {
        var pc = this.pageCount;
        if (p >= 0 && p < pc) {
          this.d_first = this.d_rows * p;
          var state = {
            page: p,
            first: this.d_first,
            rows: this.d_rows,
            pageCount: pc
          };
          this.$emit('update:first', this.d_first);
          this.$emit('update:rows', this.d_rows);
          this.$emit('page', state);
        }
      },
      changePageToFirst: function changePageToFirst(event) {
        if (!this.isFirstPage) {
          this.changePage(0);
        }
        event.preventDefault();
      },
      changePageToPrev: function changePageToPrev(event) {
        this.changePage(this.page - 1);
        event.preventDefault();
      },
      changePageLink: function changePageLink(event) {
        this.changePage(event.value - 1);
        event.originalEvent.preventDefault();
      },
      changePageToNext: function changePageToNext(event) {
        this.changePage(this.page + 1);
        event.preventDefault();
      },
      changePageToLast: function changePageToLast(event) {
        if (!this.isLastPage) {
          this.changePage(this.pageCount - 1);
        }
        event.preventDefault();
      },
      onRowChange: function onRowChange(value) {
        this.d_rows = value;
        this.changePage(this.page);
      }
    },
    computed: {
      templateItems: function templateItems() {
        var keys = [];
        this.template.split(' ').map(function (value) {
          keys.push(value.trim());
        });
        return keys;
      },
      page: function page() {
        return Math.floor(this.d_first / this.d_rows);
      },
      pageCount: function pageCount() {
        return Math.ceil(this.totalRecords / this.d_rows);
      },
      isFirstPage: function isFirstPage() {
        return this.page === 0;
      },
      isLastPage: function isLastPage() {
        return this.page === this.pageCount - 1;
      },
      calculatePageLinkBoundaries: function calculatePageLinkBoundaries() {
        var numberOfPages = this.pageCount;
        var visiblePages = Math.min(this.pageLinkSize, numberOfPages);

        //calculate range, keep current in middle if necessary
        var start = Math.max(0, Math.ceil(this.page - visiblePages / 2));
        var end = Math.min(numberOfPages - 1, start + visiblePages - 1);

        //check when approaching to last page
        var delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);
        return [start, end];
      },
      pageLinks: function pageLinks() {
        var pageLinks = [];
        var boundaries = this.calculatePageLinkBoundaries;
        var start = boundaries[0];
        var end = boundaries[1];
        for (var i = start; i <= end; i++) {
          pageLinks.push(i + 1);
        }
        return pageLinks;
      },
      currentState: function currentState() {
        return {
          page: this.page,
          first: this.d_first,
          rows: this.d_rows
        };
      },
      empty: function empty() {
        return this.pageCount === 0;
      },
      currentPage: function currentPage() {
        return this.pageCount > 0 ? this.page + 1 : 0;
      }
    },
    components: {
      CurrentPageReport: __vue_component__$9,
      FirstPageLink: __vue_component__$8,
      LastPageLink: __vue_component__$7,
      NextPageLink: __vue_component__$6,
      PageLinks: __vue_component__$5,
      PrevPageLink: __vue_component__$4,
      RowsPerPageDropdown: __vue_component__$3,
      JumpToPageDropdown: __vue_component__$2,
      JumpToPageInput: __vue_component__$1
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
    return (_vm.alwaysShow ? true : _vm.pageLinks && _vm.pageLinks.length > 1) ? _c("div", {
      staticClass: "p-paginator p-component"
    }, [_vm.$scopedSlots.start ? _c("div", {
      staticClass: "p-paginator-left-content"
    }, [_vm._t("start", null, {
      state: _vm.currentState
    })], 2) : _vm._e(), _vm._v(" "), _vm._l(_vm.templateItems, function (item) {
      return [item === "FirstPageLink" ? _c("FirstPageLink", {
        key: item,
        attrs: {
          disabled: _vm.isFirstPage || _vm.empty
        },
        on: {
          click: function click($event) {
            return _vm.changePageToFirst($event);
          }
        }
      }) : item === "PrevPageLink" ? _c("PrevPageLink", {
        key: item,
        attrs: {
          disabled: _vm.isFirstPage || _vm.empty
        },
        on: {
          click: function click($event) {
            return _vm.changePageToPrev($event);
          }
        }
      }) : item === "NextPageLink" ? _c("NextPageLink", {
        key: item,
        attrs: {
          disabled: _vm.isLastPage || _vm.empty
        },
        on: {
          click: function click($event) {
            return _vm.changePageToNext($event);
          }
        }
      }) : item === "LastPageLink" ? _c("LastPageLink", {
        key: item,
        attrs: {
          disabled: _vm.isLastPage || _vm.empty
        },
        on: {
          click: function click($event) {
            return _vm.changePageToLast($event);
          }
        }
      }) : item === "PageLinks" ? _c("PageLinks", {
        key: item,
        attrs: {
          value: _vm.pageLinks,
          page: _vm.page
        },
        on: {
          click: function click($event) {
            return _vm.changePageLink($event);
          }
        }
      }) : item === "CurrentPageReport" ? _c("CurrentPageReport", {
        key: item,
        attrs: {
          template: _vm.currentPageReportTemplate,
          currentPage: _vm.currentPage,
          page: _vm.page,
          pageCount: _vm.pageCount,
          first: _vm.d_first,
          rows: _vm.d_rows,
          totalRecords: _vm.totalRecords
        }
      }) : item === "RowsPerPageDropdown" && _vm.rowsPerPageOptions ? _c("RowsPerPageDropdown", {
        key: item,
        attrs: {
          rows: _vm.d_rows,
          options: _vm.rowsPerPageOptions,
          disabled: _vm.empty
        },
        on: {
          "rows-change": function rowsChange($event) {
            return _vm.onRowChange($event);
          }
        }
      }) : item === "JumpToPageDropdown" ? _c("JumpToPageDropdown", {
        key: item,
        attrs: {
          page: _vm.page,
          pageCount: _vm.pageCount,
          disabled: _vm.empty
        },
        on: {
          "page-change": function pageChange($event) {
            return _vm.changePage($event);
          }
        }
      }) : item === "JumpToPageInput" ? _c("JumpToPageInput", {
        key: item,
        attrs: {
          page: _vm.currentPage,
          disabled: _vm.empty
        },
        on: {
          "page-change": function pageChange($event) {
            return _vm.changePage($event);
          }
        }
      }) : _vm._e()];
    }), _vm._v(" "), _vm.$scopedSlots.end ? _c("div", {
      staticClass: "p-paginator-right-content"
    }, [_vm._t("end", null, {
      state: _vm.currentState
    })], 2) : _vm._e()], 2) : _vm._e();
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-082df7a6_0", {
      source: "\n.p-paginator {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n.p-paginator-left-content {\n  margin-right: auto;\n}\n.p-paginator-right-content {\n  margin-left: auto;\n}\n.p-paginator-page,\n.p-paginator-next,\n.p-paginator-last,\n.p-paginator-first,\n.p-paginator-prev,\n.p-paginator-current {\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  position: relative;\n}\n.p-paginator-element:focus {\n  z-index: 1;\n  position: relative;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/paginator/Paginator.vue"],
        "names": [],
        "mappings": ";AAoQA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,uBAAA;MAAA,mBAAA;UAAA,eAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;;;;;;EAMA,eAAA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,cAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,UAAA;EACA,kBAAA;AACA",
        "file": "Paginator.vue",
        "sourcesContent": ["<template>\n  <div class=\"p-paginator p-component\" v-if=\"alwaysShow ? true : pageLinks && pageLinks.length > 1\">\n    <div class=\"p-paginator-left-content\" v-if=\"$scopedSlots.start\">\n      <slot name=\"start\" :state=\"currentState\"></slot>\n    </div>\n    <template v-for=\"item of templateItems\">\n      <FirstPageLink\n        v-if=\"item === 'FirstPageLink'\"\n        :key=\"item\"\n        @click=\"changePageToFirst($event)\"\n        :disabled=\"isFirstPage || empty\" />\n      <PrevPageLink\n        v-else-if=\"item === 'PrevPageLink'\"\n        :key=\"item\"\n        @click=\"changePageToPrev($event)\"\n        :disabled=\"isFirstPage || empty\" />\n      <NextPageLink\n        v-else-if=\"item === 'NextPageLink'\"\n        :key=\"item\"\n        @click=\"changePageToNext($event)\"\n        :disabled=\"isLastPage || empty\" />\n      <LastPageLink\n        v-else-if=\"item === 'LastPageLink'\"\n        :key=\"item\"\n        @click=\"changePageToLast($event)\"\n        :disabled=\"isLastPage || empty\" />\n      <PageLinks\n        v-else-if=\"item === 'PageLinks'\"\n        :key=\"item\"\n        :value=\"pageLinks\"\n        :page=\"page\"\n        @click=\"changePageLink($event)\" />\n      <CurrentPageReport\n        v-else-if=\"item === 'CurrentPageReport'\"\n        :key=\"item\"\n        :template=\"currentPageReportTemplate\"\n        :currentPage=\"currentPage\"\n        :page=\"page\"\n        :pageCount=\"pageCount\"\n        :first=\"d_first\"\n        :rows=\"d_rows\"\n        :totalRecords=\"totalRecords\" />\n      <RowsPerPageDropdown\n        v-else-if=\"item === 'RowsPerPageDropdown' && rowsPerPageOptions\"\n        :key=\"item\"\n        :rows=\"d_rows\"\n        :options=\"rowsPerPageOptions\"\n        @rows-change=\"onRowChange($event)\"\n        :disabled=\"empty\" />\n      <JumpToPageDropdown\n        v-else-if=\"item === 'JumpToPageDropdown'\"\n        :key=\"item\"\n        :page=\"page\"\n        :pageCount=\"pageCount\"\n        @page-change=\"changePage($event)\"\n        :disabled=\"empty\" />\n      <JumpToPageInput\n        v-else-if=\"item === 'JumpToPageInput'\"\n        :key=\"item\"\n        :page=\"currentPage\"\n        @page-change=\"changePage($event)\"\n        :disabled=\"empty\" />\n    </template>\n    <div class=\"p-paginator-right-content\" v-if=\"$scopedSlots.end\">\n      <slot name=\"end\" :state=\"currentState\"></slot>\n    </div>\n  </div>\n</template>\n\n<script>\nimport CurrrentPageReport from './CurrentPageReport.vue'\nimport FirstPageLink from './FirstPageLink.vue'\nimport LastPageLink from './LastPageLink.vue'\nimport NextPageLink from './NextPageLink.vue'\nimport PageLinks from './PageLinks.vue'\nimport PrevPageLink from './PrevPageLink.vue'\nimport RowsPerPageDropdown from './RowsPerPageDropdown.vue'\nimport JumpToPageDropdown from './JumpToPageDropdown.vue'\nimport JumpToPageInput from './JumpToPageInput.vue'\n\nexport default {\n  name: 'Paginator',\n  props: {\n    totalRecords: {\n      type: Number,\n      default: 0\n    },\n    rows: {\n      type: Number,\n      default: 0\n    },\n    first: {\n      type: Number,\n      default: 0\n    },\n    pageLinkSize: {\n      type: Number,\n      default: 5\n    },\n    rowsPerPageOptions: {\n      type: Array,\n      default: null\n    },\n    template: {\n      type: String,\n      default:\n        'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'\n    },\n    currentPageReportTemplate: {\n      type: null,\n      default: '({currentPage} of {totalPages})'\n    },\n    alwaysShow: {\n      type: Boolean,\n      default: true\n    }\n  },\n  data() {\n    return {\n      d_first: this.first,\n      d_rows: this.rows\n    }\n  },\n  watch: {\n    first(newValue) {\n      this.d_first = newValue\n    },\n    rows(newValue) {\n      this.d_rows = newValue\n    },\n    totalRecords(newValue) {\n      if (this.page > 0 && newValue && this.d_first >= newValue) {\n        this.changePage(this.pageCount - 1)\n      }\n    }\n  },\n  methods: {\n    changePage(p) {\n      const pc = this.pageCount\n\n      if (p >= 0 && p < pc) {\n        this.d_first = this.d_rows * p\n        const state = {\n          page: p,\n          first: this.d_first,\n          rows: this.d_rows,\n          pageCount: pc\n        }\n\n        this.$emit('update:first', this.d_first)\n        this.$emit('update:rows', this.d_rows)\n        this.$emit('page', state)\n      }\n    },\n    changePageToFirst(event) {\n      if (!this.isFirstPage) {\n        this.changePage(0)\n      }\n\n      event.preventDefault()\n    },\n    changePageToPrev(event) {\n      this.changePage(this.page - 1)\n      event.preventDefault()\n    },\n    changePageLink(event) {\n      this.changePage(event.value - 1)\n      event.originalEvent.preventDefault()\n    },\n    changePageToNext(event) {\n      this.changePage(this.page + 1)\n      event.preventDefault()\n    },\n    changePageToLast(event) {\n      if (!this.isLastPage) {\n        this.changePage(this.pageCount - 1)\n      }\n\n      event.preventDefault()\n    },\n    onRowChange(value) {\n      this.d_rows = value\n      this.changePage(this.page)\n    }\n  },\n  computed: {\n    templateItems() {\n      let keys = []\n      this.template.split(' ').map((value) => {\n        keys.push(value.trim())\n      })\n      return keys\n    },\n    page() {\n      return Math.floor(this.d_first / this.d_rows)\n    },\n    pageCount() {\n      return Math.ceil(this.totalRecords / this.d_rows)\n    },\n    isFirstPage() {\n      return this.page === 0\n    },\n    isLastPage() {\n      return this.page === this.pageCount - 1\n    },\n    calculatePageLinkBoundaries() {\n      const numberOfPages = this.pageCount\n      const visiblePages = Math.min(this.pageLinkSize, numberOfPages)\n\n      //calculate range, keep current in middle if necessary\n      let start = Math.max(0, Math.ceil(this.page - visiblePages / 2))\n      let end = Math.min(numberOfPages - 1, start + visiblePages - 1)\n\n      //check when approaching to last page\n      const delta = this.pageLinkSize - (end - start + 1)\n      start = Math.max(0, start - delta)\n\n      return [start, end]\n    },\n    pageLinks() {\n      let pageLinks = []\n      let boundaries = this.calculatePageLinkBoundaries\n      let start = boundaries[0]\n      let end = boundaries[1]\n\n      for (var i = start; i <= end; i++) {\n        pageLinks.push(i + 1)\n      }\n\n      return pageLinks\n    },\n    currentState() {\n      return {\n        page: this.page,\n        first: this.d_first,\n        rows: this.d_rows\n      }\n    },\n    empty() {\n      return this.pageCount === 0\n    },\n    currentPage() {\n      return this.pageCount > 0 ? this.page + 1 : 0\n    }\n  },\n  components: {\n    CurrentPageReport: CurrrentPageReport,\n    FirstPageLink: FirstPageLink,\n    LastPageLink: LastPageLink,\n    NextPageLink: NextPageLink,\n    PageLinks: PageLinks,\n    PrevPageLink: PrevPageLink,\n    RowsPerPageDropdown: RowsPerPageDropdown,\n    JumpToPageDropdown: JumpToPageDropdown,\n    JumpToPageInput: JumpToPageInput\n  }\n}\n</script>\n\n<style>\n.p-paginator {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.p-paginator-left-content {\n  margin-right: auto;\n}\n\n.p-paginator-right-content {\n  margin-left: auto;\n}\n\n.p-paginator-page,\n.p-paginator-next,\n.p-paginator-last,\n.p-paginator-first,\n.p-paginator-prev,\n.p-paginator-current {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  user-select: none;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-paginator-element:focus {\n  z-index: 1;\n  position: relative;\n}\n</style>\n"]
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

})(primevue2.ripple, primevue2.dropdown, primevue2.inputnumber);
