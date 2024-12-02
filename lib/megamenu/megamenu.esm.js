import { DomHandler } from 'primevue2/utils';
import Ripple from 'primevue2/ripple';

//
var script = {
  name: 'MegaMenu',
  props: {
    model: {
      type: Array,
      default: null
    },
    orientation: {
      type: String,
      default: 'horizontal'
    },
    exact: {
      type: Boolean,
      default: true
    }
  },
  documentClickListener: null,
  data: function data() {
    return {
      activeItem: null
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindDocumentClickListener();
  },
  methods: {
    onLeafClick: function onLeafClick(event, item, navigate) {
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
      if (item.to && navigate) {
        navigate(event);
      }
      this.activeItem = null;
    },
    onCategoryMouseEnter: function onCategoryMouseEnter(event, category) {
      if (this.disabled(category)) {
        event.preventDefault();
        return;
      }
      if (this.activeItem) {
        this.activeItem = category;
      }
    },
    onCategoryClick: function onCategoryClick(event, category) {
      if (this.disabled(category)) {
        event.preventDefault();
        return;
      }
      if (!category.url && !category.to) {
        event.preventDefault();
      }
      if (category.command) {
        category.command({
          originalEvent: event,
          item: category
        });
      }
      if (category.items) {
        if (this.activeItem && this.activeItem === category) {
          this.activeItem = null;
          this.unbindDocumentClickListener();
        } else {
          this.activeItem = category;
          this.bindDocumentClickListener();
        }
      }
    },
    onCategoryKeydown: function onCategoryKeydown(event, category) {
      var listItem = event.currentTarget.parentElement;
      switch (event.which) {
        //down
        case 40:
          if (this.horizontal) this.expandMenu(category);else this.navigateToNextItem(listItem);
          event.preventDefault();
          break;

        //up
        case 38:
          if (this.vertical) this.navigateToPrevItem(listItem);else if (category.items && category === this.activeItem) this.collapseMenu();
          event.preventDefault();
          break;

        //right
        case 39:
          if (this.horizontal) this.navigateToNextItem(listItem);else this.expandMenu(category);
          event.preventDefault();
          break;

        //left
        case 37:
          if (this.horizontal) this.navigateToPrevItem(listItem);else if (category.items && category === this.activeItem) this.collapseMenu();
          event.preventDefault();
          break;
      }
    },
    expandMenu: function expandMenu(item) {
      if (item.items) {
        this.activeItem = item;
      }
    },
    collapseMenu: function collapseMenu() {
      this.activeItem = null;
    },
    findNextItem: function findNextItem(item) {
      var nextItem = item.nextElementSibling;
      if (nextItem) return DomHandler.hasClass(nextItem, 'p-disabled') || !DomHandler.hasClass(nextItem, 'p-menuitem') ? this.findNextItem(nextItem) : nextItem;else return null;
    },
    findPrevItem: function findPrevItem(item) {
      var prevItem = item.previousElementSibling;
      if (prevItem) return DomHandler.hasClass(prevItem, 'p-disabled') || !DomHandler.hasClass(prevItem, 'p-menuitem') ? this.findPrevItem(prevItem) : prevItem;else return null;
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
    getCategoryClass: function getCategoryClass(category) {
      return ['p-menuitem', {
        'p-menuitem-active': category === this.activeItem
      }, category.class];
    },
    getCategorySubMenuIcon: function getCategorySubMenuIcon() {
      return ['p-submenu-icon pi', {
        'pi-angle-down': this.horizontal,
        'pi-angle-right': this.vertical
      }];
    },
    getCategoryIcon: function getCategoryIcon(category) {
      return ['p-menuitem-icon', category.icon];
    },
    getColumnClassName: function getColumnClassName(category) {
      var length = category.items ? category.items.length : 0;
      var columnClass;
      switch (length) {
        case 2:
          columnClass = 'p-megamenu-col-6';
          break;
        case 3:
          columnClass = 'p-megamenu-col-4';
          break;
        case 4:
          columnClass = 'p-megamenu-col-3';
          break;
        case 6:
          columnClass = 'p-megamenu-col-2';
          break;
        default:
          columnClass = 'p-megamenu-col-12';
          break;
      }
      return columnClass;
    },
    getSubmenuHeaderClass: function getSubmenuHeaderClass(submenu) {
      return ['p-megamenu-submenu-header', submenu.class, {
        'p-disabled': this.disabled(submenu)
      }];
    },
    getSubmenuItemClass: function getSubmenuItemClass(item) {
      return ['p-menuitem', item.class];
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
      return ['p-megamenu p-component', {
        'p-megamenu-horizontal': this.horizontal,
        'p-megamenu-vertical': this.vertical
      }];
    },
    horizontal: function horizontal() {
      return this.orientation === 'horizontal';
    },
    vertical: function vertical() {
      return this.orientation === 'vertical';
    }
  },
  directives: {
    ripple: Ripple
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
  }, [_vm.$slots.start ? _c("div", {
    staticClass: "p-megamenu-start"
  }, [_vm._t("start")], 2) : _vm._e(), _vm._v(" "), _c("ul", {
    staticClass: "p-megamenu-root-list",
    attrs: {
      role: "menubar"
    }
  }, [_vm._l(_vm.model, function (category, index) {
    return [_vm.visible(category) ? _c("li", {
      key: _vm.label(category) + "_" + index,
      class: _vm.getCategoryClass(category),
      style: category.style,
      attrs: {
        role: "none"
      },
      on: {
        mouseenter: function mouseenter($event) {
          return _vm.onCategoryMouseEnter($event, category);
        }
      }
    }, [category.to && !_vm.disabled(category) ? _c("router-link", {
      attrs: {
        to: category.to,
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
            class: _vm.linkClass(category, {
              isActive: isActive,
              isExactActive: isExactActive
            }),
            attrs: {
              href: href,
              role: "menuitem"
            },
            on: {
              click: function click($event) {
                return _vm.onCategoryClick($event, category, navigate);
              },
              keydown: function keydown($event) {
                return _vm.onCategoryKeydown($event, category);
              }
            }
          }, [category.icon ? _c("span", {
            class: _vm.getCategoryIcon(category)
          }) : _vm._e(), _vm._v(" "), _c("span", {
            staticClass: "p-menuitem-text"
          }, [_vm._v(_vm._s(_vm.label(category)))])])];
        }
      }], null, true)
    }) : _c("a", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      class: _vm.linkClass(category),
      attrs: {
        href: category.url,
        target: category.target,
        role: "menuitem",
        "aria-haspopup": category.items != null,
        "aria-expanded": category === _vm.activeItem,
        tabindex: _vm.disabled(category) ? null : "0"
      },
      on: {
        click: function click($event) {
          return _vm.onCategoryClick($event, category);
        },
        keydown: function keydown($event) {
          return _vm.onCategoryKeydown($event, category);
        }
      }
    }, [category.icon ? _c("span", {
      class: _vm.getCategoryIcon(category)
    }) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "p-menuitem-text"
    }, [_vm._v(_vm._s(_vm.label(category)))]), _vm._v(" "), category.items ? _c("span", {
      class: _vm.getCategorySubMenuIcon()
    }) : _vm._e()]), _vm._v(" "), category.items ? _c("div", {
      staticClass: "p-megamenu-panel"
    }, [_c("div", {
      staticClass: "p-megamenu-grid"
    }, _vm._l(category.items, function (column, columnIndex) {
      return _c("div", {
        key: _vm.label(category) + "_column_" + columnIndex,
        class: _vm.getColumnClassName(category)
      }, _vm._l(column, function (submenu, submenuIndex) {
        return _c("ul", {
          key: _vm.label(submenu) + "_submenu_" + submenuIndex,
          staticClass: "p-megamenu-submenu",
          attrs: {
            role: "menu"
          }
        }, [_c("li", {
          class: _vm.getSubmenuHeaderClass(submenu),
          style: submenu.style,
          attrs: {
            role: "presentation"
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.label(submenu)) + "\n                  ")]), _vm._v(" "), _vm._l(submenu.items, function (item, i) {
          return [_vm.visible(item) && !item.separator ? _c("li", {
            key: _vm.label(item) + i,
            class: _vm.getSubmenuItemClass(item),
            style: item.style,
            attrs: {
              role: "none"
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
                      return _vm.onLeafClick($event, item, navigate);
                    }
                  }
                }, [item.icon ? _c("span", {
                  class: ["p-menuitem-icon", item.icon]
                }) : _vm._e(), _vm._v(" "), _c("span", {
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
              role: "menuitem",
              tabindex: _vm.disabled(item) ? null : "0"
            },
            on: {
              click: function click($event) {
                return _vm.onLeafClick($event, item);
              }
            }
          }, [item.icon ? _c("span", {
            class: ["p-menuitem-icon", item.icon]
          }) : _vm._e(), _vm._v(" "), _c("span", {
            staticClass: "p-menuitem-text"
          }, [_vm._v(_vm._s(_vm.label(item)))]), _vm._v(" "), item.items ? _c("span", {
            class: _vm.getSubmenuIcon()
          }) : _vm._e()])], 1) : _vm._e(), _vm._v(" "), _vm.visible(item) && item.separator ? _c("li", {
            key: "separator" + i,
            class: ["p-menu-separator", item.class],
            style: item.style,
            attrs: {
              role: "separator"
            }
          }) : _vm._e()];
        })], 2);
      }), 0);
    }), 0)]) : _vm._e()], 1) : _vm._e()];
  })], 2), _vm._v(" "), _vm.$slots.end ? _c("div", {
    staticClass: "p-megamenu-end"
  }, [_vm._t("end")], 2) : _vm._e()]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1a6dc082_0", {
    source: "\n.p-megamenu-root-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.p-megamenu-root-list > .p-menuitem {\n  position: relative;\n}\n.p-megamenu .p-menuitem-link {\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n.p-megamenu .p-menuitem-text {\n  line-height: 1;\n}\n.p-megamenu-panel {\n  display: none;\n  position: absolute;\n  width: auto;\n  z-index: 1;\n}\n.p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {\n  display: block;\n}\n.p-megamenu-submenu {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n/* Horizontal */\n.p-megamenu-horizontal .p-megamenu-root-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n/* Vertical */\n.p-megamenu-vertical .p-megamenu-root-list {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.p-megamenu-vertical\n  .p-megamenu-root-list\n  > .p-menuitem-active\n  > .p-megamenu-panel {\n  left: 100%;\n  top: 0;\n}\n.p-megamenu-vertical\n  .p-megamenu-root-list\n  > .p-menuitem\n  > .p-menuitem-link\n  > .p-submenu-icon {\n  margin-left: auto;\n}\n.p-megamenu-grid {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.p-megamenu-col-2,\n.p-megamenu-col-3,\n.p-megamenu-col-4,\n.p-megamenu-col-6,\n.p-megamenu-col-12 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  padding: 0.5rem;\n}\n.p-megamenu-col-2 {\n  width: 16.6667%;\n}\n.p-megamenu-col-3 {\n  width: 25%;\n}\n.p-megamenu-col-4 {\n  width: 33.3333%;\n}\n.p-megamenu-col-6 {\n  width: 50%;\n}\n.p-megamenu-col-12 {\n  width: 100%;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/megamenu/MegaMenu.vue"],
      "names": [],
      "mappings": ";AA8ZA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,eAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;AACA;;AAEA,eAAA;AACA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,uBAAA;MAAA,mBAAA;UAAA,eAAA;AACA;;AAEA,aAAA;AACA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA;AAEA;;;;EAIA,UAAA;EACA,MAAA;AACA;AAEA;;;;;EAKA,iBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA;AAEA;;;;;EAKA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;EACA,eAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;EACA,WAAA;AACA",
      "file": "MegaMenu.vue",
      "sourcesContent": ["<template>\n  <div :class=\"containerClass\">\n    <div class=\"p-megamenu-start\" v-if=\"$slots.start\">\n      <slot name=\"start\"></slot>\n    </div>\n    <ul class=\"p-megamenu-root-list\" role=\"menubar\">\n      <template v-for=\"(category, index) of model\">\n        <li\n          v-if=\"visible(category)\"\n          :key=\"label(category) + '_' + index\"\n          :class=\"getCategoryClass(category)\"\n          :style=\"category.style\"\n          @mouseenter=\"onCategoryMouseEnter($event, category)\"\n          role=\"none\">\n          <router-link\n            v-if=\"category.to && !disabled(category)\"\n            :to=\"category.to\"\n            custom\n            v-slot=\"{ navigate, href, isActive, isExactActive }\">\n            <a\n              :href=\"href\"\n              :class=\"linkClass(category, { isActive, isExactActive })\"\n              @click=\"onCategoryClick($event, category, navigate)\"\n              @keydown=\"onCategoryKeydown($event, category)\"\n              role=\"menuitem\"\n              v-ripple>\n              <span v-if=\"category.icon\" :class=\"getCategoryIcon(category)\"></span>\n              <span class=\"p-menuitem-text\">{{ label(category) }}</span>\n            </a>\n          </router-link>\n          <a\n            v-else\n            :href=\"category.url\"\n            :class=\"linkClass(category)\"\n            :target=\"category.target\"\n            @click=\"onCategoryClick($event, category)\"\n            @keydown=\"onCategoryKeydown($event, category)\"\n            role=\"menuitem\"\n            :aria-haspopup=\"category.items != null\"\n            :aria-expanded=\"category === activeItem\"\n            :tabindex=\"disabled(category) ? null : '0'\"\n            v-ripple>\n            <span v-if=\"category.icon\" :class=\"getCategoryIcon(category)\"></span>\n            <span class=\"p-menuitem-text\">{{ label(category) }}</span>\n            <span v-if=\"category.items\" :class=\"getCategorySubMenuIcon()\"></span>\n          </a>\n          <div class=\"p-megamenu-panel\" v-if=\"category.items\">\n            <div class=\"p-megamenu-grid\">\n              <div\n                v-for=\"(column, columnIndex) of category.items\"\n                :key=\"label(category) + '_column_' + columnIndex\"\n                :class=\"getColumnClassName(category)\">\n                <ul\n                  v-for=\"(submenu, submenuIndex) of column\"\n                  class=\"p-megamenu-submenu\"\n                  :key=\"label(submenu) + '_submenu_' + submenuIndex\"\n                  role=\"menu\">\n                  <li :class=\"getSubmenuHeaderClass(submenu)\" :style=\"submenu.style\" role=\"presentation\">\n                    {{ label(submenu) }}\n                  </li>\n                  <template v-for=\"(item, i) of submenu.items\">\n                    <li\n                      role=\"none\"\n                      :class=\"getSubmenuItemClass(item)\"\n                      :style=\"item.style\"\n                      v-if=\"visible(item) && !item.separator\"\n                      :key=\"label(item) + i\">\n                      <router-link\n                        v-if=\"item.to && !disabled(item)\"\n                        :to=\"item.to\"\n                        custom\n                        v-slot=\"{ navigate, href, isActive, isExactActive }\">\n                        <a\n                          :href=\"href\"\n                          :class=\"linkClass(item, { isActive, isExactActive })\"\n                          @click=\"onLeafClick($event, item, navigate)\"\n                          role=\"menuitem\"\n                          v-ripple>\n                          <span v-if=\"item.icon\" :class=\"['p-menuitem-icon', item.icon]\"></span>\n                          <span class=\"p-menuitem-text\">{{ label(item) }}</span>\n                        </a>\n                      </router-link>\n                      <a\n                        v-else\n                        :href=\"item.url\"\n                        :class=\"linkClass(item)\"\n                        :target=\"item.target\"\n                        @click=\"onLeafClick($event, item)\"\n                        role=\"menuitem\"\n                        :tabindex=\"disabled(item) ? null : '0'\"\n                        v-ripple>\n                        <span v-if=\"item.icon\" :class=\"['p-menuitem-icon', item.icon]\"></span>\n                        <span class=\"p-menuitem-text\">{{ label(item) }}</span>\n                        <span :class=\"getSubmenuIcon()\" v-if=\"item.items\"></span>\n                      </a>\n                    </li>\n                    <li\n                      :class=\"['p-menu-separator', item.class]\"\n                      :style=\"item.style\"\n                      v-if=\"visible(item) && item.separator\"\n                      :key=\"'separator' + i\"\n                      role=\"separator\"></li>\n                  </template>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </li>\n      </template>\n    </ul>\n    <div class=\"p-megamenu-end\" v-if=\"$slots.end\">\n      <slot name=\"end\"></slot>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { DomHandler } from 'primevue2/utils'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'MegaMenu',\n  props: {\n    model: {\n      type: Array,\n      default: null\n    },\n    orientation: {\n      type: String,\n      default: 'horizontal'\n    },\n    exact: {\n      type: Boolean,\n      default: true\n    }\n  },\n  documentClickListener: null,\n  data() {\n    return {\n      activeItem: null\n    }\n  },\n  beforeDestroy() {\n    this.unbindDocumentClickListener()\n  },\n  methods: {\n    onLeafClick(event, item, navigate) {\n      if (this.disabled(item)) {\n        event.preventDefault()\n        return\n      }\n\n      if (!item.url && !item.to) {\n        event.preventDefault()\n      }\n\n      if (item.command) {\n        item.command({\n          originalEvent: event,\n          item: item\n        })\n      }\n\n      if (item.to && navigate) {\n        navigate(event)\n      }\n\n      this.activeItem = null\n    },\n    onCategoryMouseEnter(event, category) {\n      if (this.disabled(category)) {\n        event.preventDefault()\n        return\n      }\n\n      if (this.activeItem) {\n        this.activeItem = category\n      }\n    },\n    onCategoryClick(event, category) {\n      if (this.disabled(category)) {\n        event.preventDefault()\n        return\n      }\n\n      if (!category.url && !category.to) {\n        event.preventDefault()\n      }\n\n      if (category.command) {\n        category.command({\n          originalEvent: event,\n          item: category\n        })\n      }\n\n      if (category.items) {\n        if (this.activeItem && this.activeItem === category) {\n          this.activeItem = null\n          this.unbindDocumentClickListener()\n        } else {\n          this.activeItem = category\n          this.bindDocumentClickListener()\n        }\n      }\n    },\n    onCategoryKeydown(event, category) {\n      let listItem = event.currentTarget.parentElement\n\n      switch (event.which) {\n      //down\n      case 40:\n        if (this.horizontal) this.expandMenu(category)\n        else this.navigateToNextItem(listItem)\n\n        event.preventDefault()\n        break\n\n        //up\n      case 38:\n        if (this.vertical) this.navigateToPrevItem(listItem)\n        else if (category.items && category === this.activeItem)\n          this.collapseMenu()\n\n        event.preventDefault()\n        break\n\n        //right\n      case 39:\n        if (this.horizontal) this.navigateToNextItem(listItem)\n        else this.expandMenu(category)\n\n        event.preventDefault()\n        break\n\n        //left\n      case 37:\n        if (this.horizontal) this.navigateToPrevItem(listItem)\n        else if (category.items && category === this.activeItem)\n          this.collapseMenu()\n\n        event.preventDefault()\n        break\n\n      default:\n        break\n      }\n    },\n    expandMenu(item) {\n      if (item.items) {\n        this.activeItem = item\n      }\n    },\n    collapseMenu() {\n      this.activeItem = null\n    },\n    findNextItem(item) {\n      let nextItem = item.nextElementSibling\n\n      if (nextItem)\n        return DomHandler.hasClass(nextItem, 'p-disabled') ||\n          !DomHandler.hasClass(nextItem, 'p-menuitem')\n          ? this.findNextItem(nextItem)\n          : nextItem\n      else return null\n    },\n    findPrevItem(item) {\n      let prevItem = item.previousElementSibling\n\n      if (prevItem)\n        return DomHandler.hasClass(prevItem, 'p-disabled') ||\n          !DomHandler.hasClass(prevItem, 'p-menuitem')\n          ? this.findPrevItem(prevItem)\n          : prevItem\n      else return null\n    },\n    navigateToNextItem(listItem) {\n      var nextItem = this.findNextItem(listItem)\n      if (nextItem) {\n        nextItem.children[0].focus()\n      }\n    },\n    navigateToPrevItem(listItem) {\n      var prevItem = this.findPrevItem(listItem)\n      if (prevItem) {\n        prevItem.children[0].focus()\n      }\n    },\n    getCategoryClass(category) {\n      return [\n        'p-menuitem',\n        {\n          'p-menuitem-active': category === this.activeItem\n        },\n        category.class\n      ]\n    },\n    getCategorySubMenuIcon() {\n      return [\n        'p-submenu-icon pi',\n        {\n          'pi-angle-down': this.horizontal,\n          'pi-angle-right': this.vertical\n        }\n      ]\n    },\n    getCategoryIcon(category) {\n      return ['p-menuitem-icon', category.icon]\n    },\n    getColumnClassName(category) {\n      let length = category.items ? category.items.length : 0\n      let columnClass\n\n      switch (length) {\n      case 2:\n        columnClass = 'p-megamenu-col-6'\n        break\n\n      case 3:\n        columnClass = 'p-megamenu-col-4'\n        break\n\n      case 4:\n        columnClass = 'p-megamenu-col-3'\n        break\n\n      case 6:\n        columnClass = 'p-megamenu-col-2'\n        break\n\n      default:\n        columnClass = 'p-megamenu-col-12'\n        break\n      }\n\n      return columnClass\n    },\n    getSubmenuHeaderClass(submenu) {\n      return [\n        'p-megamenu-submenu-header',\n        submenu.class,\n        { 'p-disabled': this.disabled(submenu) }\n      ]\n    },\n    getSubmenuItemClass(item) {\n      return ['p-menuitem', item.class]\n    },\n    linkClass(item, routerProps) {\n      return [\n        'p-menuitem-link',\n        {\n          'p-disabled': this.disabled(item),\n          'router-link-active': routerProps && routerProps.isActive,\n          'router-link-active-exact':\n            this.exact && routerProps && routerProps.isExactActive\n        }\n      ]\n    },\n    bindDocumentClickListener() {\n      if (!this.documentClickListener) {\n        this.documentClickListener = (event) => {\n          if (this.$el && !this.$el.contains(event.target)) {\n            this.activeItem = null\n            this.unbindDocumentClickListener()\n          }\n        }\n\n        document.addEventListener('click', this.documentClickListener)\n      }\n    },\n    unbindDocumentClickListener() {\n      if (this.documentClickListener) {\n        document.removeEventListener('click', this.documentClickListener)\n        this.documentClickListener = null\n      }\n    },\n    visible(item) {\n      return typeof item.visible === 'function'\n        ? item.visible()\n        : item.visible !== false\n    },\n    disabled(item) {\n      return typeof item.disabled === 'function'\n        ? item.disabled()\n        : item.disabled\n    },\n    label(item) {\n      return typeof item.label === 'function' ? item.label() : item.label\n    }\n  },\n  computed: {\n    containerClass() {\n      return [\n        'p-megamenu p-component',\n        {\n          'p-megamenu-horizontal': this.horizontal,\n          'p-megamenu-vertical': this.vertical\n        }\n      ]\n    },\n    horizontal() {\n      return this.orientation === 'horizontal'\n    },\n    vertical() {\n      return this.orientation === 'vertical'\n    }\n  },\n  directives: {\n    ripple: Ripple\n  }\n}\n</script>\n\n<style>\n.p-megamenu-root-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.p-megamenu-root-list > .p-menuitem {\n  position: relative;\n}\n\n.p-megamenu .p-menuitem-link {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-megamenu .p-menuitem-text {\n  line-height: 1;\n}\n\n.p-megamenu-panel {\n  display: none;\n  position: absolute;\n  width: auto;\n  z-index: 1;\n}\n\n.p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {\n  display: block;\n}\n\n.p-megamenu-submenu {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n/* Horizontal */\n.p-megamenu-horizontal .p-megamenu-root-list {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n/* Vertical */\n.p-megamenu-vertical .p-megamenu-root-list {\n  flex-direction: column;\n}\n\n.p-megamenu-vertical\n  .p-megamenu-root-list\n  > .p-menuitem-active\n  > .p-megamenu-panel {\n  left: 100%;\n  top: 0;\n}\n\n.p-megamenu-vertical\n  .p-megamenu-root-list\n  > .p-menuitem\n  > .p-menuitem-link\n  > .p-submenu-icon {\n  margin-left: auto;\n}\n\n.p-megamenu-grid {\n  display: flex;\n}\n\n.p-megamenu-col-2,\n.p-megamenu-col-3,\n.p-megamenu-col-4,\n.p-megamenu-col-6,\n.p-megamenu-col-12 {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n}\n\n.p-megamenu-col-2 {\n  width: 16.6667%;\n}\n\n.p-megamenu-col-3 {\n  width: 25%;\n}\n\n.p-megamenu-col-4 {\n  width: 33.3333%;\n}\n\n.p-megamenu-col-6 {\n  width: 50%;\n}\n\n.p-megamenu-col-12 {\n  width: 100%;\n}\n</style>\n"]
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
