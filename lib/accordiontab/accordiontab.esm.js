import { DomHandler, UniqueComponentId } from 'primevue2/utils';

//
var script = {
  name: 'AccordionTab',
  props: {
    header: null,
    disabled: Boolean
  },
  data: function data() {
    return {
      index: null
    };
  },
  created: function created() {
    var _this = this;
    this.$parent.$children.forEach(function (child, i) {
      if (child === _this) _this.index = i;
    });
  },
  methods: {
    onTabClick: function onTabClick(event) {
      if (!this.disabled) {
        this.$parent.onToggle(event, this, DomHandler.index(this.$el), this.isTabActive());
      }
    },
    onTabKeydown: function onTabKeydown(event) {
      if (event.which === 13) {
        this.onTabClick(event);
      }
    },
    isTabActive: function isTabActive() {
      var activeArray = this.$parent.d_activeIndex;
      return this.$parent.multiple ? activeArray && activeArray.includes(this.index) : this.index === activeArray;
    },
    getTabClass: function getTabClass() {
      return ['p-accordion-tab', {
        'p-accordion-tab-active': this.isTabActive()
      }];
    },
    getTabHeaderClass: function getTabHeaderClass() {
      return ['p-accordion-header', {
        'p-highlight': this.isTabActive(),
        'p-disabled': this.disabled
      }];
    },
    getHeaderCollapseIcon: function getHeaderCollapseIcon() {
      return ['p-accordion-toggle-icon pi', this.$parent.collapseIcon];
    },
    getHeaderExpandIcon: function getHeaderExpandIcon() {
      return ['p-accordion-toggle-icon pi', this.$parent.expandIcon];
    }
  },
  computed: {
    ariaId: function ariaId() {
      return UniqueComponentId();
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
var __vue_script__ = script;

/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    class: _vm.getTabClass()
  }, [_c("div", {
    class: _vm.getTabHeaderClass()
  }, [_c("a", {
    staticClass: "p-accordion-header-link",
    attrs: {
      role: "tab",
      tabindex: _vm.disabled ? null : "0",
      "aria-expanded": _vm.isTabActive(),
      id: _vm.ariaId + "_header",
      "aria-controls": _vm.ariaId + "_content"
    },
    on: {
      click: _vm.onTabClick,
      keydown: _vm.onTabKeydown
    }
  }, [_c("span", {
    class: _vm.isTabActive() ? _vm.getHeaderCollapseIcon() : _vm.getHeaderExpandIcon()
  }), _vm._v(" "), _vm.header ? _c("span", {
    staticClass: "p-accordion-header-text"
  }, [_vm._v(_vm._s(_vm.header))]) : _vm._e(), _vm._v(" "), _vm._t("header")], 2)]), _vm._v(" "), _c("transition", {
    attrs: {
      name: "p-toggleable-content"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isTabActive(),
      expression: "isTabActive()"
    }],
    staticClass: "p-toggleable-content",
    attrs: {
      role: "region",
      id: _vm.ariaId + "_content",
      "aria-labelledby": _vm.ariaId + "_header"
    }
  }, [_c("div", {
    staticClass: "p-accordion-content"
  }, [_vm._t("default")], 2)])])], 1);
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

export { __vue_component__ as default };