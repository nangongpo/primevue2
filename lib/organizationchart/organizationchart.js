this.primevue2 = this.primevue2 || {};
this.primevue2.organizationchart = (function (utils) {
  'use strict';

  //
  var OrganizationChartNodeTemplate = {
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
      var content = context.props.template({
        'node': context.props.node
      });
      return [content];
    }
  };
  var script$1 = {
    name: 'OrganizationChartNode',
    props: {
      node: {
        type: null,
        default: null
      },
      templates: {
        type: null,
        default: null
      },
      collapsible: {
        type: Boolean,
        default: false
      },
      collapsedKeys: {
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
      }
    },
    methods: {
      onNodeClick: function onNodeClick(event) {
        if (utils.DomHandler.hasClass(event.target, 'p-node-toggler') || utils.DomHandler.hasClass(event.target, 'p-node-toggler-icon')) {
          return;
        }
        if (this.selectionMode) {
          this.$emit('node-click', this.node);
        }
      },
      onChildNodeClick: function onChildNodeClick(node) {
        this.$emit('node-click', node);
      },
      toggleNode: function toggleNode() {
        this.$emit('node-toggle', this.node);
      },
      onChildNodeToggle: function onChildNodeToggle(node) {
        this.$emit('node-toggle', node);
      }
    },
    computed: {
      nodeContentClass: function nodeContentClass() {
        return ['p-organizationchart-node-content', this.node.styleClass, {
          'p-organizationchart-selectable-node': this.selectable,
          'p-highlight': this.selected
        }];
      },
      leaf: function leaf() {
        return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
      },
      colspan: function colspan() {
        return this.node.children && this.node.children.length ? this.node.children.length * 2 : null;
      },
      childStyle: function childStyle() {
        return {
          visibility: !this.leaf && this.expanded ? 'inherit' : 'hidden'
        };
      },
      expanded: function expanded() {
        return this.collapsedKeys[this.node.key] === undefined;
      },
      selectable: function selectable() {
        return this.selectionMode && this.node.selectable !== false;
      },
      selected: function selected() {
        return this.selectable && this.selectionKeys && this.selectionKeys[this.node.key] === true;
      },
      toggleable: function toggleable() {
        return this.collapsible && this.node.collapsible !== false && !this.leaf;
      }
    },
    components: {
      'OrganizationChartNodeTemplate': OrganizationChartNodeTemplate
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
    return _c("table", {
      staticClass: "p-organizationchart-table"
    }, [_c("tbody", [_vm.node ? _c("tr", [_c("td", {
      attrs: {
        colspan: _vm.colspan
      }
    }, [_c("div", {
      class: _vm.nodeContentClass,
      on: {
        click: _vm.onNodeClick
      }
    }, [_c("OrganizationChartNodeTemplate", {
      attrs: {
        node: _vm.node,
        template: _vm.templates[_vm.node.type] || _vm.templates["default"]
      }
    }), _vm._v(" "), _vm.toggleable ? _c("a", {
      staticClass: "p-node-toggler",
      attrs: {
        tabindex: "0"
      },
      on: {
        click: _vm.toggleNode,
        keydown: function keydown($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
            return null;
          }
          return _vm.toggleNode.apply(null, arguments);
        }
      }
    }, [_c("i", {
      staticClass: "p-node-toggler-icon pi",
      class: {
        "pi-chevron-down": _vm.expanded,
        "pi-chevron-up": !_vm.expanded
      }
    })]) : _vm._e()], 1)])]) : _vm._e(), _vm._v(" "), _c("tr", {
      staticClass: "p-organizationchart-lines",
      style: _vm.childStyle
    }, [_c("td", {
      attrs: {
        colspan: _vm.colspan
      }
    }, [_c("div", {
      staticClass: "p-organizationchart-line-down"
    })])]), _vm._v(" "), _c("tr", {
      staticClass: "p-organizationchart-lines",
      style: _vm.childStyle
    }, [_vm.node.children && _vm.node.children.length === 1 ? [_c("td", {
      attrs: {
        colspan: _vm.colspan
      }
    }, [_c("div", {
      staticClass: "p-organizationchart-line-down"
    })])] : _vm._e(), _vm._v(" "), _vm.node.children && _vm.node.children.length > 1 ? [_vm._l(_vm.node.children, function (child, i) {
      return [_c("td", {
        key: child.key + "_left",
        staticClass: "p-organizationchart-line-left",
        class: {
          "p-organizationchart-line-top": !(i === 0)
        }
      }, [_vm._v("\n             \n          ")]), _vm._v(" "), _c("td", {
        key: child.key + "_right",
        staticClass: "p-organizationchart-line-right",
        class: {
          "p-organizationchart-line-top": !(i === _vm.node.children.length - 1)
        }
      }, [_vm._v("\n             \n          ")])];
    })] : _vm._e()], 2), _vm._v(" "), _c("tr", {
      staticClass: "p-organizationchart-nodes",
      style: _vm.childStyle
    }, _vm._l(_vm.node.children, function (child) {
      return _c("td", {
        key: child.key,
        attrs: {
          colspan: "2"
        }
      }, [_c("OrganizationChartNode", {
        attrs: {
          node: child,
          templates: _vm.templates,
          collapsedKeys: _vm.collapsedKeys,
          collapsible: _vm.collapsible,
          selectionMode: _vm.selectionMode,
          selectionKeys: _vm.selectionKeys
        },
        on: {
          "node-toggle": _vm.onChildNodeToggle,
          "node-click": _vm.onChildNodeClick
        }
      })], 1);
    }), 0)])]);
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
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var script = {
    name: 'OrganizationChart',
    props: {
      value: {
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
      collapsible: {
        type: Boolean,
        default: false
      },
      collapsedKeys: {
        type: null,
        default: null
      }
    },
    data: function data() {
      return {
        d_collapsedKeys: this.collapsedKeys || {}
      };
    },
    watch: {
      collapsedKeys: function collapsedKeys(newValue) {
        this.d_collapsedKeys = newValue;
      }
    },
    methods: {
      onNodeClick: function onNodeClick(node) {
        var key = node.key;
        if (this.selectionMode) {
          var _selectionKeys = this.selectionKeys ? _objectSpread({}, this.selectionKeys) : {};
          if (_selectionKeys[key]) {
            delete _selectionKeys[key];
            this.$emit('node-unselect', node);
          } else {
            if (this.selectionMode === 'single') {
              _selectionKeys = {};
            }
            _selectionKeys[key] = true;
            this.$emit('node-select', node);
          }
          this.$emit('update:selectionKeys', _selectionKeys);
        }
      },
      onNodeToggle: function onNodeToggle(node) {
        var key = node.key;
        if (this.d_collapsedKeys[key]) {
          delete this.d_collapsedKeys[key];
          this.$emit('node-expand', node);
        } else {
          this.d_collapsedKeys[key] = true;
          this.$emit('node-collapse', node);
        }
        this.d_collapsedKeys = _objectSpread({}, this.d_collapsedKeys);
        this.$emit('update:collapsedKeys', this.d_collapsedKeys);
      }
    },
    components: {
      'OrganizationChartNode': __vue_component__$1
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
      staticClass: "p-organizationchart p-component"
    }, [_c("OrganizationChartNode", {
      attrs: {
        node: _vm.value,
        templates: _vm.$scopedSlots,
        collapsedKeys: _vm.d_collapsedKeys,
        collapsible: _vm.collapsible,
        selectionMode: _vm.selectionMode,
        selectionKeys: _vm.selectionKeys
      },
      on: {
        "node-toggle": _vm.onNodeToggle,
        "node-click": _vm.onNodeClick
      }
    })], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-b83475d0_0", {
      source: "\n.p-organizationchart-table {\n  border-spacing: 0;\n  border-collapse: separate;\n  margin: 0 auto;\n}\n.p-organizationchart-table > tbody > tr > td {\n  text-align: center;\n  vertical-align: top;\n  padding: 0 .75rem;\n}\n.p-organizationchart-node-content {\n  display: inline-block;\n  position: relative;\n}\n.p-organizationchart-node-content .p-node-toggler {\n  position: absolute;\n  bottom: -.75rem;\n  margin-left: -.75rem;\n  z-index: 2;\n  left: 50%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon {\n  position: relative;\n  top: .25rem;\n}\n.p-organizationchart-line-down {\n  margin: 0 auto;\n  height: 20px;\n  width: 1px;\n}\n.p-organizationchart-line-right {\n  border-radius: 0px;\n}\n.p-organizationchart-line-left {\n  border-radius: 0;\n}\n.p-organizationchart-selectable-node {\n  cursor: pointer;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/organizationchart/OrganizationChart.vue"],
        "names": [],
        "mappings": ";AAiGA;EACA,iBAAA;EACA,yBAAA;EACA,cAAA;AACA;AAEA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;AACA;AAEA;EACA,qBAAA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;EACA,eAAA;EACA,oBAAA;EACA,UAAA;EACA,SAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,eAAA;EACA,aAAA;EACA,cAAA;AACA;AAEA;EACA,kBAAA;EACA,WAAA;AACA;AAEA;EACA,cAAA;EACA,YAAA;EACA,UAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,eAAA;AACA",
        "file": "OrganizationChart.vue",
        "sourcesContent": ["<template>\n  <div class=\"p-organizationchart p-component\">\n    <OrganizationChartNode\n      :node=\"value\"\n      :templates=\"$scopedSlots\"\n      @node-toggle=\"onNodeToggle\"\n      :collapsedKeys=\"d_collapsedKeys\"\n      :collapsible=\"collapsible\"\n      @node-click=\"onNodeClick\"\n      :selectionMode=\"selectionMode\"\n      :selectionKeys=\"selectionKeys\" />\n  </div>\n</template>\n\n<script>\nimport OrganizationChartNode from './OrganizationChartNode.vue'\n\nexport default {\n  name: 'OrganizationChart',\n  props: {\n    value: {\n      type: null,\n      default: null\n    },\n    selectionKeys: {\n      type: null,\n      default: null\n    },\n    selectionMode: {\n      type: String,\n      default: null\n    },\n    collapsible: {\n      type: Boolean,\n      default: false\n    },\n    collapsedKeys: {\n      type: null,\n      default: null\n    }\n  },\n  data() {\n    return {\n      d_collapsedKeys: this.collapsedKeys || {}\n    }\n  },\n  watch: {\n    collapsedKeys(newValue) {\n      this.d_collapsedKeys = newValue\n    }\n  },\n  methods: {\n    onNodeClick(node) {\n      const key = node.key\n\n      if (this.selectionMode) {\n        let _selectionKeys = this.selectionKeys ? { ...this.selectionKeys } : {}\n\n        if (_selectionKeys[key]) {\n          delete _selectionKeys[key]\n          this.$emit('node-unselect', node)\n        }\n        else {\n          if (this.selectionMode === 'single') {\n            _selectionKeys = {}\n          }\n\n          _selectionKeys[key] = true\n          this.$emit('node-select', node)\n        }\n\n        this.$emit('update:selectionKeys', _selectionKeys)\n      }\n    },\n    onNodeToggle(node) {\n      const key = node.key\n\n      if (this.d_collapsedKeys[key]) {\n        delete this.d_collapsedKeys[key]\n        this.$emit('node-expand', node)\n      }\n      else {\n        this.d_collapsedKeys[key] = true\n        this.$emit('node-collapse', node)\n      }\n\n      this.d_collapsedKeys = { ...this.d_collapsedKeys }\n      this.$emit('update:collapsedKeys', this.d_collapsedKeys)\n    }\n  },\n  components: {\n    'OrganizationChartNode': OrganizationChartNode\n  }\n}\n</script>\n\n<style>\n.p-organizationchart-table {\n  border-spacing: 0;\n  border-collapse: separate;\n  margin: 0 auto;\n}\n\n.p-organizationchart-table > tbody > tr > td {\n  text-align: center;\n  vertical-align: top;\n  padding: 0 .75rem;\n}\n\n.p-organizationchart-node-content {\n  display: inline-block;\n  position: relative;\n}\n\n.p-organizationchart-node-content .p-node-toggler {\n  position: absolute;\n  bottom: -.75rem;\n  margin-left: -.75rem;\n  z-index: 2;\n  left: 50%;\n  user-select: none;\n  cursor: pointer;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n\n.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon {\n  position: relative;\n  top: .25rem;\n}\n\n.p-organizationchart-line-down {\n  margin: 0 auto;\n  height: 20px;\n  width: 1px;\n}\n\n.p-organizationchart-line-right {\n  border-radius: 0px;\n}\n\n.p-organizationchart-line-left {\n  border-radius: 0;\n}\n\n.p-organizationchart-selectable-node {\n  cursor: pointer;\n}\n</style>\n"]
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

})(primevue2.utils);
