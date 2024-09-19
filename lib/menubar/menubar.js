this.primevue2 = this.primevue2 || {};
this.primevue2.menubar = (function (utils, Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  //
  var script$1 = {
    name: 'MenubarSub',
    props: {
      model: {
        type: Array,
        default: null
      },
      root: {
        type: Boolean,
        default: false
      },
      popup: {
        type: Boolean,
        default: false
      },
      parentActive: {
        type: Boolean,
        default: false
      },
      mobileActive: {
        type: Boolean,
        default: false
      },
      exact: {
        type: Boolean,
        default: true
      }
    },
    documentClickListener: null,
    watch: {
      parentActive: function parentActive(newValue) {
        if (!newValue) {
          this.activeItem = null;
        }
      }
    },
    data: function data() {
      return {
        activeItem: null
      };
    },
    updated: function updated() {
      if (this.root && this.activeItem) {
        this.bindDocumentClickListener();
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.unbindDocumentClickListener();
    },
    methods: {
      onItemMouseEnter: function onItemMouseEnter(event, item) {
        if (this.disabled(item) || this.mobileActive) {
          event.preventDefault();
          return;
        }
        if (this.root) {
          if (this.activeItem || this.popup) {
            this.activeItem = item;
          }
        } else {
          this.activeItem = item;
        }
      },
      onItemClick: function onItemClick(event, item, navigate) {
        if (this.disabled(item)) {
          event.preventDefault();
          return;
        }
        if (!item.url && !item.to) {
          event.preventDefault();
        }
        if (item.command) {
          item.command({
            originalEvent: event,
            item: item
          });
        }
        if (item.items) {
          if (this.activeItem && item === this.activeItem) this.activeItem = null;else this.activeItem = item;
        }
        if (!item.items) {
          this.onLeafClick();
        }
        if (item.to && navigate) {
          navigate(event);
        }
      },
      onLeafClick: function onLeafClick() {
        this.activeItem = null;
        this.$emit('leaf-click');
      },
      onItemKeyDown: function onItemKeyDown(event, item) {
        var listItem = event.currentTarget.parentElement;
        switch (event.which) {
          //down
          case 40:
            if (this.root) {
              if (item.items) {
                this.expandSubmenu(item, listItem);
              }
            } else {
              this.navigateToNextItem(listItem);
            }
            event.preventDefault();
            break;

          //up
          case 38:
            if (!this.root) {
              this.navigateToPrevItem(listItem);
            }
            event.preventDefault();
            break;

          //right
          case 39:
            if (this.root) {
              var nextItem = this.findNextItem(listItem);
              if (nextItem) {
                nextItem.children[0].focus();
              }
            } else {
              if (item.items) {
                this.expandSubmenu(item, listItem);
              }
            }
            event.preventDefault();
            break;

          //left
          case 37:
            if (this.root) {
              this.navigateToPrevItem(listItem);
            }
            event.preventDefault();
            break;
        }
        this.$emit('keydown-item', {
          originalEvent: event,
          element: listItem
        });
      },
      onChildItemKeyDown: function onChildItemKeyDown(event) {
        if (this.root) {
          //up
          if (event.originalEvent.which === 38 && event.element.previousElementSibling == null) {
            this.collapseMenu(event.element);
          }
        } else {
          //left
          if (event.originalEvent.which === 37) {
            this.collapseMenu(event.element);
          }
        }
      },
      findNextItem: function findNextItem(item) {
        var nextItem = item.nextElementSibling;
        if (nextItem) return utils.DomHandler.hasClass(nextItem, 'p-disabled') || !utils.DomHandler.hasClass(nextItem, 'p-menuitem') ? this.findNextItem(nextItem) : nextItem;else return null;
      },
      findPrevItem: function findPrevItem(item) {
        var prevItem = item.previousElementSibling;
        if (prevItem) return utils.DomHandler.hasClass(prevItem, 'p-disabled') || !utils.DomHandler.hasClass(prevItem, 'p-menuitem') ? this.findPrevItem(prevItem) : prevItem;else return null;
      },
      expandSubmenu: function expandSubmenu(item, listItem) {
        this.activeItem = item;
        setTimeout(function () {
          listItem.children[1].children[0].children[0].focus();
        }, 50);
      },
      collapseMenu: function collapseMenu(listItem) {
        this.activeItem = null;
        listItem.parentElement.previousElementSibling.focus();
      },
      navigateToNextItem: function navigateToNextItem(listItem) {
        var nextItem = this.findNextItem(listItem);
        if (nextItem) {
          nextItem.children[0].focus();
        }
      },
      navigateToPrevItem: function navigateToPrevItem(listItem) {
        var prevItem = this.findPrevItem(listItem);
        if (prevItem) {
          prevItem.children[0].focus();
        }
      },
      getItemClass: function getItemClass(item) {
        return ['p-menuitem', item.class, {
          'p-menuitem-active': this.activeItem === item
        }];
      },
      linkClass: function linkClass(item, routerProps) {
        return ['p-menuitem-link', {
          'p-disabled': this.disabled(item),
          'router-link-active': routerProps && routerProps.isActive,
          'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
        }];
      },
      bindDocumentClickListener: function bindDocumentClickListener() {
        var _this = this;
        if (!this.documentClickListener) {
          this.documentClickListener = function (event) {
            if (_this.$el && !_this.$el.contains(event.target)) {
              _this.activeItem = null;
              _this.unbindDocumentClickListener();
            }
          };
          document.addEventListener('click', this.documentClickListener);
        }
      },
      unbindDocumentClickListener: function unbindDocumentClickListener() {
        if (this.documentClickListener) {
          document.removeEventListener('click', this.documentClickListener);
          this.documentClickListener = null;
        }
      },
      getSubmenuIcon: function getSubmenuIcon() {
        return ['p-submenu-icon pi', {
          'pi-angle-right': !this.root,
          'pi-angle-down': this.root
        }];
      },
      visible: function visible(item) {
        return typeof item.visible === 'function' ? item.visible() : item.visible !== false;
      },
      disabled: function disabled(item) {
        return typeof item.disabled === 'function' ? item.disabled() : item.disabled;
      },
      label: function label(item) {
        return typeof item.label === 'function' ? item.label() : item.label;
      }
    },
    computed: {
      containerClass: function containerClass() {
        return {
          'p-submenu-list': !this.root,
          'p-menubar-root-list': this.root
        };
      }
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

  /* script */
  var __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("ul", {
      class: _vm.containerClass,
      attrs: {
        role: _vm.root ? "menubar" : "menu"
      }
    }, [_vm._l(_vm.model, function (item, i) {
      return [_vm.visible(item) && !item.separator ? _c("li", {
        key: _vm.label(item) + i,
        class: _vm.getItemClass(item),
        style: item.style,
        attrs: {
          role: "none"
        },
        on: {
          mouseenter: function mouseenter($event) {
            return _vm.onItemMouseEnter($event, item);
          }
        }
      }, [item.to && !_vm.disabled(item) ? _c("router-link", {
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
                name: "ripple",
                rawName: "v-ripple"
              }],
              class: _vm.linkClass(item, {
                isActive: isActive,
                isExactActive: isExactActive
              }),
              attrs: {
                href: href,
                role: "menuitem"
              },
              on: {
                click: function click($event) {
                  return _vm.onItemClick($event, item, navigate);
                },
                keydown: function keydown($event) {
                  return _vm.onItemKeyDown($event, item);
                }
              }
            }, [_c("span", {
              class: ["p-menuitem-icon", item.icon]
            }), _vm._v(" "), _c("span", {
              staticClass: "p-menuitem-text"
            }, [_vm._v(_vm._s(_vm.label(item)))])])];
          }
        }], null, true)
      }) : _c("a", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        class: _vm.linkClass(item),
        attrs: {
          href: item.url,
          target: item.target,
          "aria-haspopup": item.items != null,
          "aria-expanded": item === _vm.activeItem,
          role: "menuitem",
          tabindex: _vm.disabled(item) ? null : "0"
        },
        on: {
          click: function click($event) {
            return _vm.onItemClick($event, item);
          },
          keydown: function keydown($event) {
            return _vm.onItemKeyDown($event, item);
          }
        }
      }, [_c("span", {
        class: ["p-menuitem-icon", item.icon]
      }), _vm._v(" "), _c("span", {
        staticClass: "p-menuitem-text"
      }, [_vm._v(_vm._s(_vm.label(item)))]), _vm._v(" "), item.items ? _c("span", {
        class: _vm.getSubmenuIcon()
      }) : _vm._e()]), _vm._v(" "), _vm.visible(item) && item.items ? _c("MenubarSub", {
        key: _vm.label(item) + "_sub_",
        attrs: {
          model: item.items,
          exact: _vm.exact,
          mobileActive: _vm.mobileActive,
          parentActive: item === _vm.activeItem
        },
        on: {
          "leaf-click": _vm.onLeafClick,
          "keydown-item": _vm.onChildItemKeyDown
        }
      }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.visible(item) && item.separator ? _c("li", {
        key: "separator" + i,
        class: ["p-menu-separator", item.class],
        style: item.style,
        attrs: {
          role: "separator"
        }
      }) : _vm._e()];
    })], 2);
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
    name: 'Menubar',
    props: {
      model: {
        type: Array,
        default: null
      },
      exact: {
        type: Boolean,
        default: true
      }
    },
    outsideClickListener: null,
    data: function data() {
      return {
        mobileActive: false
      };
    },
    beforeDestroy: function beforeDestroy() {
      this.mobileActive = false;
      this.unbindOutsideClickListener();
    },
    methods: {
      toggle: function toggle(event) {
        this.mobileActive = !this.mobileActive;
        this.$refs.rootmenu.$el.style.zIndex = String(utils.DomHandler.generateZIndex());
        this.bindOutsideClickListener();
        event.preventDefault();
      },
      bindOutsideClickListener: function bindOutsideClickListener() {
        var _this = this;
        if (!this.outsideClickListener) {
          this.outsideClickListener = function (event) {
            if (_this.mobileActive && _this.$refs.rootmenu.$el !== event.target && !_this.$refs.rootmenu.$el.contains(event.target) && _this.$refs.menubutton !== event.target && !_this.$refs.menubutton.contains(event.target)) {
              _this.mobileActive = false;
            }
          };
          document.addEventListener('click', this.outsideClickListener);
        }
      },
      unbindOutsideClickListener: function unbindOutsideClickListener() {
        if (this.outsideClickListener) {
          document.removeEventListener('click', this.outsideClickListener);
          this.outsideClickListener = null;
        }
      },
      onLeafClick: function onLeafClick() {
        this.mobileActive = false;
      }
    },
    computed: {
      containerClass: function containerClass() {
        return ['p-menubar p-component', {
          'p-menubar-mobile-active': this.mobileActive
        }];
      }
    },
    components: {
      'MenubarSub': __vue_component__$1
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
    }, [_vm.$slots.start ? _c("div", {
      staticClass: "p-menubar-start"
    }, [_vm._t("start")], 2) : _vm._e(), _vm._v(" "), _c("a", {
      ref: "menubutton",
      staticClass: "p-menubar-button",
      attrs: {
        tabindex: "0"
      },
      on: {
        click: function click($event) {
          return _vm.toggle($event);
        }
      }
    }, [_c("i", {
      staticClass: "pi pi-bars"
    })]), _vm._v(" "), _c("MenubarSub", {
      ref: "rootmenu",
      attrs: {
        model: _vm.model,
        root: true,
        mobileActive: _vm.mobileActive,
        exact: _vm.exact
      },
      on: {
        "leaf-click": _vm.onLeafClick
      }
    }), _vm._v(" "), _vm.$slots.end ? _c("div", {
      staticClass: "p-menubar-end"
    }, [_vm._t("end")], 2) : _vm._e()], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-064b6716_0", {
      source: "\n.p-menubar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-menubar ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.p-menubar .p-menuitem-link {\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n.p-menubar .p-menuitem-text {\n  line-height: 1;\n}\n.p-menubar .p-menuitem {\n  position: relative;\n}\n.p-menubar-root-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-menubar-root-list > li ul {\n  display: none;\n  z-index: 1;\n}\n.p-menubar-root-list > .p-menuitem-active > .p-submenu-list {\n  display: block;\n}\n.p-menubar .p-submenu-list {\n  display: none;\n  position: absolute;\n  z-index: 1;\n}\n.p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list  {\n  display: block;\n  left: 100%;\n  top: 0;\n}\n.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon {\n  margin-left: auto;\n}\n.p-menubar .p-menubar-custom,\n.p-menubar .p-menubar-end {\n  margin-left: auto;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n.p-menubar-button {\n  display: none;\n  cursor: pointer;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/menubar/Menubar.vue"],
        "names": [],
        "mappings": ";AAuFA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;AACA;AAEA;EACA,eAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AAEA;EACA,aAAA;EACA,UAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,aAAA;EACA,kBAAA;EACA,UAAA;AACA;AAEA;EACA,cAAA;EACA,UAAA;EACA,MAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;;EAEA,iBAAA;EACA,0BAAA;MAAA,2BAAA;UAAA,kBAAA;AACA;AAEA;EACA,aAAA;EACA,eAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA",
        "file": "Menubar.vue",
        "sourcesContent": ["<template>\n  <div :class=\"containerClass\">\n    <div class=\"p-menubar-start\" v-if=\"$slots.start\">\n      <slot name=\"start\"></slot>\n    </div>\n    <a ref=\"menubutton\" tabindex=\"0\" class=\"p-menubar-button\" @click=\"toggle($event)\">\n      <i class=\"pi pi-bars\" />\n    </a>\n    <MenubarSub\n      ref=\"rootmenu\"\n      :model=\"model\"\n      :root=\"true\"\n      :mobileActive=\"mobileActive\"\n      @leaf-click=\"onLeafClick\"\n      :exact=\"exact\" />\n    <div class=\"p-menubar-end\" v-if=\"$slots.end\">\n      <slot name=\"end\"></slot>\n    </div>\n  </div>\n</template>\n\n<script>\nimport MenubarSub from './MenubarSub.vue'\nimport { DomHandler } from 'primevue2/utils'\n\nexport default {\n  name: 'Menubar',\n  props: {\n    model: {\n      type: Array,\n      default: null\n    },\n    exact: {\n      type: Boolean,\n      default: true\n    }\n  },\n  outsideClickListener: null,\n  data() {\n    return {\n      mobileActive: false\n    }\n  },\n  beforeDestroy() {\n    this.mobileActive = false\n    this.unbindOutsideClickListener()\n  },\n  methods: {\n    toggle(event) {\n      this.mobileActive = !this.mobileActive\n      this.$refs.rootmenu.$el.style.zIndex = String(DomHandler.generateZIndex())\n      this.bindOutsideClickListener()\n      event.preventDefault()\n    },\n    bindOutsideClickListener() {\n      if (!this.outsideClickListener) {\n        this.outsideClickListener = (event) => {\n          if (this.mobileActive && this.$refs.rootmenu.$el !== event.target && !this.$refs.rootmenu.$el.contains(event.target)\n            && this.$refs.menubutton !== event.target && !this.$refs.menubutton.contains(event.target)) {\n            this.mobileActive = false\n          }\n        }\n        document.addEventListener('click', this.outsideClickListener)\n      }\n    },\n    unbindOutsideClickListener() {\n      if (this.outsideClickListener) {\n        document.removeEventListener('click', this.outsideClickListener)\n        this.outsideClickListener = null\n      }\n    },\n    onLeafClick() {\n      this.mobileActive = false\n    }\n  },\n  computed: {\n    containerClass() {\n      return ['p-menubar p-component', { 'p-menubar-mobile-active': this.mobileActive }]\n    }\n  },\n  components: {\n    'MenubarSub': MenubarSub\n  }\n}\n</script>\n\n<style>\n.p-menubar {\n  display: flex;\n  align-items: center;\n}\n\n.p-menubar ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.p-menubar .p-menuitem-link {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-menubar .p-menuitem-text {\n  line-height: 1;\n}\n\n.p-menubar .p-menuitem {\n  position: relative;\n}\n\n.p-menubar-root-list {\n  display: flex;\n  align-items: center;\n}\n\n.p-menubar-root-list > li ul {\n  display: none;\n  z-index: 1;\n}\n\n.p-menubar-root-list > .p-menuitem-active > .p-submenu-list {\n  display: block;\n}\n\n.p-menubar .p-submenu-list {\n  display: none;\n  position: absolute;\n  z-index: 1;\n}\n\n.p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list  {\n  display: block;\n  left: 100%;\n  top: 0;\n}\n\n.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon {\n  margin-left: auto;\n}\n\n.p-menubar .p-menubar-custom,\n.p-menubar .p-menubar-end {\n  margin-left: auto;\n  align-self: center;\n}\n\n.p-menubar-button {\n  display: none;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n}\n</style>\n"]
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
