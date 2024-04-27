this.primevue2 = this.primevue2 || {};
this.primevue2.dock = (function () {
  'use strict';

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

  var DockSubIconTemplate = {
    functional: true,
    props: {
      icon: {
        type: null,
        default: null
      }
    },
    render: function render(createElement, context) {
      return [context.props['icon']()];
    }
  };
  var DockSubTemplate = {
    functional: true,
    props: {
      item: {
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
        'item': context.props.item
      });
      return [content];
    }
  };
  var script$1 = {
    name: 'DockSub',
    props: {
      model: {
        type: Array,
        default: null
      },
      templates: {
        type: null,
        default: null
      },
      tooltipOptions: null,
      exact: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        currentIndex: -3
      };
    },
    methods: {
      onListMouseLeave: function onListMouseLeave() {
        this.currentIndex = -3;
      },
      onItemMouseEnter: function onItemMouseEnter(index) {
        this.currentIndex = index;
      },
      onItemClick: function onItemClick(event, item) {
        if (this.disabled(item)) {
          return;
        }
        if (item.command) {
          item.command({
            originalEvent: event,
            item: item
          });
        }
        event.preventDefault();
      },
      itemClass: function itemClass(index) {
        return ['p-dock-item', {
          'p-dock-item-second-prev': this.currentIndex - 2 === index,
          'p-dock-item-prev': this.currentIndex - 1 === index,
          'p-dock-item-current': this.currentIndex === index,
          'p-dock-item-next': this.currentIndex + 1 === index,
          'p-dock-item-second-next': this.currentIndex + 2 === index
        }];
      },
      linkClass: function linkClass(item, routerProps) {
        return ['p-dock-action', {
          'p-disabled': this.disabled(item),
          'router-link-active': routerProps && routerProps.isActive,
          'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
        }];
      },
      disabled: function disabled(item) {
        return typeof item.disabled === 'function' ? item.disabled() : item.disabled;
      }
    },
    components: {
      'DockSubIconTemplate': DockSubIconTemplate,
      'DockSubTemplate': DockSubTemplate
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
    return _c("div", {
      staticClass: "p-dock-list-container"
    }, [_c("ul", {
      ref: "list",
      staticClass: "p-dock-list",
      attrs: {
        role: "menu"
      },
      on: {
        mouseleave: _vm.onListMouseLeave
      }
    }, _vm._l(_vm.model, function (item, index) {
      return _c("li", {
        key: index,
        class: _vm.itemClass(index),
        attrs: {
          role: "none"
        },
        on: {
          mouseenter: function mouseenter($event) {
            return _vm.onItemMouseEnter(index);
          }
        }
      }, [_vm.templates["item"] ? _c("DockSubTemplate", {
        attrs: {
          item: item,
          template: _vm.templates["item"]
        }
      }) : [item.to && !_vm.disabled(item) ? _c("router-link", {
        attrs: {
          to: item.to,
          custom: ""
        },
        scopedSlots: _vm._u([{
          key: "default",
          fn: function fn(ref) {
            var navigate = ref.navigate;
            var href = ref.href;
            var isActive = ref.isActive;
            var isExactActive = ref.isExactActive;
            return [_c("a", {
              directives: [{
                name: "tooltip",
                rawName: "v-tooltip:[tooltipOptions]",
                value: {
                  value: item.label,
                  disabled: !_vm.tooltipOptions
                },
                expression: "{ value: item.label, disabled: !tooltipOptions }",
                arg: _vm.tooltipOptions
              }],
              class: _vm.linkClass(item, {
                isActive: isActive,
                isExactActive: isExactActive
              }),
              attrs: {
                href: href,
                role: "menuitem",
                target: item.target
              },
              on: {
                click: function click($event) {
                  return _vm.onItemClick($event, item, navigate);
                }
              }
            }, [typeof item.icon === "string" ? [_c("span", {
              directives: [{
                name: "ripple",
                rawName: "v-ripple"
              }],
              class: ["p-dock-action-icon", item.icon]
            })] : _c("DockSubIconTemplate", {
              attrs: {
                icon: item.icon
              }
            })], 2)];
          }
        }], null, true)
      }) : _c("a", {
        directives: [{
          name: "tooltip",
          rawName: "v-tooltip:[tooltipOptions]",
          value: {
            value: item.label,
            disabled: !_vm.tooltipOptions
          },
          expression: "{ value: item.label, disabled: !tooltipOptions }",
          arg: _vm.tooltipOptions
        }],
        class: _vm.linkClass(item),
        attrs: {
          href: item.url,
          role: "menuitem",
          target: item.target,
          tabindex: _vm.disabled(item) ? null : "0"
        },
        on: {
          click: function click($event) {
            return _vm.onItemClick($event, item);
          }
        }
      }, [typeof item.icon === "string" ? [_c("span", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        class: ["p-dock-action-icon", item.icon]
      })] : _c("DockSubIconTemplate", {
        attrs: {
          icon: item.icon
        }
      })], 2)]], 2);
    }), 0)]);
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
    name: 'Dock',
    props: {
      position: {
        type: String,
        default: 'bottom'
      },
      model: null,
      className: null,
      styles: null,
      tooltipOptions: null,
      exact: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        currentIndex: -3
      };
    },
    methods: {
      onListMouseLeave: function onListMouseLeave() {
        this.currentIndex = -3;
      },
      onItemMouseEnter: function onItemMouseEnter(index) {
        this.currentIndex = index;
      },
      onItemClick: function onItemClick(e, item) {
        if (item.command) {
          item.command({
            originalEvent: e,
            item: item
          });
        }
        e.preventDefault();
      },
      itemClass: function itemClass(index) {
        return ['p-dock-item', {
          'p-dock-item-second-prev': this.currentIndex - 2 === index,
          'p-dock-item-prev': this.currentIndex - 1 === index,
          'p-dock-item-current': this.currentIndex === index,
          'p-dock-item-next': this.currentIndex + 1 === index,
          'p-dock-item-second-next': this.currentIndex + 2 === index
        }];
      }
    },
    computed: {
      containerClass: function containerClass() {
        return ['p-dock p-component', "p-dock-".concat(this.position), this.className];
      }
    },
    components: {
      DockSub: __vue_component__$1
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
      style: _vm.styles
    }, [_c("DockSub", {
      attrs: {
        model: _vm.model,
        templates: _vm.$scopedSlots,
        exact: _vm.exact,
        tooltipOptions: _vm.tooltipOptions
      }
    })], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-15c95f92_0", {
      source: "\n.p-dock {\n  position: absolute;\n  z-index: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  pointer-events: none;\n}\n.p-dock-list-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  pointer-events: auto;\n}\n.p-dock-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  pointer-events: auto;\n}\n.p-dock-item {\n  -webkit-transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: transform;\n}\n.p-dock-action {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  overflow: hidden;\n  cursor: default;\n}\n.p-dock-item-second-prev,\n.p-dock-item-second-next {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.p-dock-item-prev,\n.p-dock-item-next {\n  -webkit-transform: scale(1.4);\n          transform: scale(1.4);\n}\n.p-dock-item-current {\n  -webkit-transform: scale(1.6);\n          transform: scale(1.6);\n  z-index: 1;\n}\n\n/* Position */\n/* top */\n.p-dock-top {\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n.p-dock-top .p-dock-item {\n  -webkit-transform-origin: center top;\n          transform-origin: center top;\n}\n\n/* bottom */\n.p-dock-bottom {\n  left: 0;\n  bottom: 0;\n  width: 100%;\n}\n.p-dock-bottom .p-dock-item {\n  -webkit-transform-origin: center bottom;\n          transform-origin: center bottom;\n}\n\n/* right */\n.p-dock-right {\n  right: 0;\n  top: 0;\n  height: 100%;\n}\n.p-dock-right .p-dock-item {\n  -webkit-transform-origin: center right;\n          transform-origin: center right;\n}\n.p-dock-right .p-dock-list {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n/* left */\n.p-dock-left {\n  left: 0;\n  top: 0;\n  height: 100%;\n}\n.p-dock-left .p-dock-item {\n  -webkit-transform-origin: center left;\n          transform-origin: center left;\n}\n.p-dock-left .p-dock-list {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/dock/Dock.vue"],
        "names": [],
        "mappings": ";AAkEA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,oBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,oBAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,oBAAA;AACA;AAEA;EACA,wDAAA;EAAA,gDAAA;EACA,sBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;AACA;AAEA;;EAEA,6BAAA;UAAA,qBAAA;AACA;AAEA;;EAEA,6BAAA;UAAA,qBAAA;AACA;AAEA;EACA,6BAAA;UAAA,qBAAA;EACA,UAAA;AACA;;AAEA,aAAA;AACA,QAAA;AACA;EACA,OAAA;EACA,MAAA;EACA,WAAA;AACA;AAEA;EACA,oCAAA;UAAA,4BAAA;AACA;;AAEA,WAAA;AACA;EACA,OAAA;EACA,SAAA;EACA,WAAA;AACA;AAEA;EACA,uCAAA;UAAA,+BAAA;AACA;;AAEA,UAAA;AACA;EACA,QAAA;EACA,MAAA;EACA,YAAA;AACA;AAEA;EACA,sCAAA;UAAA,8BAAA;AACA;AAEA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA;;AAEA,SAAA;AACA;EACA,OAAA;EACA,MAAA;EACA,YAAA;AACA;AAEA;EACA,qCAAA;UAAA,6BAAA;AACA;AAEA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA",
        "file": "Dock.vue",
        "sourcesContent": ["<template>\n    <div :class=\"containerClass\" :style=\"styles\">\n        <DockSub :model=\"model\" :templates=\"$scopedSlots\" :exact=\"exact\" :tooltipOptions=\"tooltipOptions\"></DockSub>\n    </div>\n</template>\n\n<script>\nimport DockSub from './DockSub.vue'\n\nexport default {\n  name: 'Dock',\n  props: {\n    position: {\n      type: String,\n      default: 'bottom'\n    },\n    model: null,\n    className: null,\n    styles: null,\n    tooltipOptions: null,\n    exact: {\n      type: Boolean,\n      default: true\n    }\n  },\n  data() {\n    return {\n      currentIndex: -3\n    }\n  },\n  methods: {\n    onListMouseLeave() {\n      this.currentIndex = -3\n    },\n    onItemMouseEnter(index) {\n      this.currentIndex = index\n    },\n    onItemClick(e, item) {\n      if (item.command) {\n        item.command({ originalEvent: e, item })\n      }\n\n      e.preventDefault()\n    },\n    itemClass(index) {\n      return ['p-dock-item', {\n        'p-dock-item-second-prev': (this.currentIndex - 2) === index,\n        'p-dock-item-prev': (this.currentIndex - 1) === index,\n        'p-dock-item-current': this.currentIndex === index,\n        'p-dock-item-next': (this.currentIndex + 1) === index,\n        'p-dock-item-second-next': (this.currentIndex + 2) === index\n      }]\n    }\n  },\n  computed: {\n    containerClass() {\n      return ['p-dock p-component', `p-dock-${this.position}`, this.className]\n    }\n  },\n  components: {\n    DockSub\n  }\n}\n</script>\n\n<style>\n.p-dock {\n  position: absolute;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n}\n\n.p-dock-list-container {\n  display: flex;\n  pointer-events: auto;\n}\n\n.p-dock-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: auto;\n}\n\n.p-dock-item {\n  transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: transform;\n}\n\n.p-dock-action {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  cursor: default;\n}\n\n.p-dock-item-second-prev,\n.p-dock-item-second-next {\n  transform: scale(1.2);\n}\n\n.p-dock-item-prev,\n.p-dock-item-next {\n  transform: scale(1.4);\n}\n\n.p-dock-item-current {\n  transform: scale(1.6);\n  z-index: 1;\n}\n\n/* Position */\n/* top */\n.p-dock-top {\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n\n.p-dock-top .p-dock-item {\n  transform-origin: center top;\n}\n\n/* bottom */\n.p-dock-bottom {\n  left: 0;\n  bottom: 0;\n  width: 100%;\n}\n\n.p-dock-bottom .p-dock-item {\n  transform-origin: center bottom;\n}\n\n/* right */\n.p-dock-right {\n  right: 0;\n  top: 0;\n  height: 100%;\n}\n\n.p-dock-right .p-dock-item {\n  transform-origin: center right;\n}\n\n.p-dock-right .p-dock-list {\n  flex-direction: column;\n}\n\n/* left */\n.p-dock-left {\n  left: 0;\n  top: 0;\n  height: 100%;\n}\n\n.p-dock-left .p-dock-item {\n  transform-origin: center left;\n}\n\n.p-dock-left .p-dock-list {\n  flex-direction: column;\n}\n</style>\n"]
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

})();
