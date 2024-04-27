import { DomHandler, UniqueComponentId } from 'primevue2/utils';
import Ripple from 'primevue2/ripple';

var script$4 = {
  name: 'GalleriaItemSlot',
  functional: true,
  props: {
    item: {
      type: null,
      default: null
    },
    index: {
      type: Number,
      default: 0
    },
    templates: {
      type: null,
      default: null
    },
    type: {
      type: String,
      default: null
    }
  },
  render: function render(createElement, context) {
    var _context$props = context.props,
      item = _context$props.item,
      index = _context$props.index,
      templates = _context$props.templates,
      type = _context$props.type;
    var template = templates && templates[type];
    if (template) {
      var content;
      switch (type) {
        case 'item':
        case 'caption':
        case 'thumbnail':
          content = template({
            item: item
          });
          break;
        case 'indicator':
          content = template({
            index: index
          });
          break;
        default:
          content = template({});
          break;
      }
      return content ? [content] : null;
    }
    return null;
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
var __vue_script__$4 = script$4;

/* template */

/* style */
var __vue_inject_styles__$4 = undefined;
/* scoped */
var __vue_scope_id__$4 = undefined;
/* module identifier */
var __vue_module_identifier__$4 = undefined;
/* functional template */
var __vue_is_functional_template__$4 = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

//
var script$3 = {
  name: 'GalleriaItem',
  props: {
    circular: {
      type: Boolean,
      default: false
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    value: {
      type: Array,
      default: null
    },
    showItemNavigators: {
      type: Boolean,
      default: true
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    slideShowActive: {
      type: Boolean,
      default: true
    },
    changeItemOnIndicatorHover: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    templates: {
      type: null,
      default: null
    }
  },
  mounted: function mounted() {
    if (this.autoPlay) {
      this.$emit('startSlideShow');
    }
  },
  methods: {
    next: function next() {
      var nextItemIndex = this.activeIndex + 1;
      var activeIndex = this.circular && this.value.length - 1 === this.activeIndex ? 0 : nextItemIndex;
      this.$emit('update:activeIndex', activeIndex);
    },
    prev: function prev() {
      var prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
      var activeIndex = this.circular && this.activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
      this.$emit('update:activeIndex', activeIndex);
    },
    stopSlideShow: function stopSlideShow() {
      if (this.slideShowActive && this.stopSlideShow) {
        this.$emit('stopSlideShow');
      }
    },
    navBackward: function navBackward(e) {
      this.stopSlideShow();
      this.prev();
      if (e && e.cancelable) {
        e.preventDefault();
      }
    },
    navForward: function navForward(e) {
      this.stopSlideShow();
      this.next();
      if (e && e.cancelable) {
        e.preventDefault();
      }
    },
    onIndicatorClick: function onIndicatorClick(index) {
      this.stopSlideShow();
      this.$emit('update:activeIndex', index);
    },
    onIndicatorMouseEnter: function onIndicatorMouseEnter(index) {
      if (this.changeItemOnIndicatorHover) {
        this.stopSlideShow();
        this.$emit('update:activeIndex', index);
      }
    },
    onIndicatorKeyDown: function onIndicatorKeyDown(index) {
      this.stopSlideShow();
      this.$emit('update:activeIndex', index);
    },
    isIndicatorItemActive: function isIndicatorItemActive(index) {
      return this.activeIndex === index;
    },
    isNavBackwardDisabled: function isNavBackwardDisabled() {
      return !this.circular && this.activeIndex === 0;
    },
    isNavForwardDisabled: function isNavForwardDisabled() {
      return !this.circular && this.activeIndex === this.value.length - 1;
    }
  },
  computed: {
    activeItem: function activeItem() {
      return this.value[this.activeIndex];
    },
    navBackwardClass: function navBackwardClass() {
      return ['p-galleria-item-prev p-galleria-item-nav p-link', {
        'p-disabled': this.isNavBackwardDisabled()
      }];
    },
    navForwardClass: function navForwardClass() {
      return ['p-galleria-item-next p-galleria-item-nav p-link', {
        'p-disabled': this.isNavForwardDisabled()
      }];
    }
  },
  components: {
    'GalleriaItemSlot': __vue_component__$4
  },
  directives: {
    'ripple': Ripple
  }
};

/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "p-galleria-item-wrapper"
  }, [_c("div", {
    staticClass: "p-galleria-item-container"
  }, [_vm.showItemNavigators ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    class: _vm.navBackwardClass,
    attrs: {
      type: "button",
      disabled: _vm.isNavBackwardDisabled()
    },
    on: {
      click: function click($event) {
        return _vm.navBackward($event);
      }
    }
  }, [_c("span", {
    staticClass: "p-galleria-item-prev-icon pi pi-chevron-left"
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "p-galleria-item"
  }, [_c("GalleriaItemSlot", {
    attrs: {
      type: "item",
      item: _vm.activeItem,
      templates: _vm.templates
    }
  })], 1), _vm._v(" "), _vm.showItemNavigators ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    class: _vm.navForwardClass,
    attrs: {
      type: "button",
      disabled: _vm.isNavForwardDisabled()
    },
    on: {
      click: function click($event) {
        return _vm.navForward($event);
      }
    }
  }, [_c("span", {
    staticClass: "p-galleria-item-next-icon pi pi-chevron-right"
  })]) : _vm._e(), _vm._v(" "), _vm.templates["caption"] ? _c("div", {
    staticClass: "p-galleria-caption"
  }, [_c("GalleriaItemSlot", {
    attrs: {
      type: "caption",
      item: _vm.activeItem,
      templates: _vm.templates
    }
  })], 1) : _vm._e()]), _vm._v(" "), _vm.showIndicators ? _c("ul", {
    staticClass: "p-galleria-indicators p-reset"
  }, _vm._l(_vm.value, function (item, index) {
    return _c("li", {
      key: "p-galleria-indicator-" + index,
      class: ["p-galleria-indicator", {
        "p-highlight": _vm.isIndicatorItemActive(index)
      }],
      attrs: {
        tabindex: "0"
      },
      on: {
        click: function click($event) {
          return _vm.onIndicatorClick(index);
        },
        mouseenter: function mouseenter($event) {
          return _vm.onIndicatorMouseEnter(index);
        },
        keydown: function keydown($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
            return null;
          }
          return _vm.onIndicatorKeyDown(index);
        }
      }
    }, [!_vm.templates["indicator"] ? _c("button", {
      staticClass: "p-link",
      attrs: {
        type: "button",
        tabindex: "-1"
      }
    }) : _vm._e(), _vm._v(" "), _c("GalleriaItemSlot", {
      attrs: {
        type: "indicator",
        index: index,
        templates: _vm.templates
      }
    })], 1);
  }), 0) : _vm._e()]);
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var script$2 = {
  name: 'GalleriaThumbnails',
  props: {
    containerId: {
      type: String,
      default: null
    },
    value: {
      type: Array,
      default: null
    },
    numVisible: {
      type: Number,
      default: 3
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    isVertical: {
      type: Boolean,
      default: false
    },
    slideShowActive: {
      type: Boolean,
      default: false
    },
    circular: {
      type: Boolean,
      default: false
    },
    responsiveOptions: {
      type: Array,
      default: null
    },
    contentHeight: {
      type: String,
      default: '300px'
    },
    showThumbnailNavigators: {
      type: Boolean,
      default: true
    },
    templates: {
      type: null,
      default: null
    }
  },
  startPos: null,
  thumbnailsStyle: null,
  sortedResponsiveOptions: null,
  data: function data() {
    return {
      d_numVisible: this.numVisible,
      d_oldNumVisible: this.numVisible,
      d_activeIndex: this.activeIndex,
      d_oldActiveItemIndex: this.activeIndex,
      totalShiftedItems: 0,
      page: 0
    };
  },
  watch: {
    numVisible: function numVisible(newValue, oldValue) {
      this.d_numVisible = newValue;
      this.d_oldNumVisible = oldValue;
    },
    activeIndex: function activeIndex(newValue, oldValue) {
      this.d_activeIndex = newValue;
      this.d_oldActiveItemIndex = oldValue;
    }
  },
  mounted: function mounted() {
    this.createStyle();
    this.calculatePosition();
    if (this.responsiveOptions) {
      this.bindDocumentListeners();
    }
  },
  updated: function updated() {
    var totalShiftedItems = this.totalShiftedItems;
    if (this.d_oldNumVisible !== this.d_numVisible || this.d_oldActiveItemIndex !== this.d_activeIndex) {
      if (this.d_activeIndex <= this.getMedianItemIndex()) {
        totalShiftedItems = 0;
      } else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this.d_activeIndex) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (this.value.length - this.d_numVisible < this.d_activeIndex && this.d_numVisible % 2 === 0) {
        totalShiftedItems = this.d_activeIndex * -1 + this.getMedianItemIndex() + 1;
      } else {
        totalShiftedItems = this.d_activeIndex * -1 + this.getMedianItemIndex();
      }
      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
      }
      this.$refs.itemsContainer.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
      if (this.d_oldActiveItemIndex !== this.d_activeIndex) {
        DomHandler.removeClass(this.$refs.itemsContainer, 'p-items-hidden');
        this.$refs.itemsContainer.style.transition = 'transform 500ms ease 0s';
      }
      this.d_oldActiveItemIndex = this.d_activeIndex;
      this.d_oldNumVisible = this.d_numVisible;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.thumbnailsStyle) {
      this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
    }
  },
  methods: {
    step: function step(dir) {
      var totalShiftedItems = this.totalShiftedItems + dir;
      if (dir < 0 && -1 * totalShiftedItems + this.d_numVisible > this.value.length - 1) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (dir > 0 && totalShiftedItems > 0) {
        totalShiftedItems = 0;
      }
      if (this.circular) {
        if (dir < 0 && this.value.length - 1 === this.d_activeIndex) {
          totalShiftedItems = 0;
        } else if (dir > 0 && this.d_activeIndex === 0) {
          totalShiftedItems = this.d_numVisible - this.value.length;
        }
      }
      if (this.$refs.itemsContainer) {
        DomHandler.removeClass(this.$refs.itemsContainer, 'p-items-hidden');
        this.$refs.itemsContainer.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
        this.$refs.itemsContainer.style.transition = 'transform 500ms ease 0s';
      }
      this.totalShiftedItems = totalShiftedItems;
    },
    stopSlideShow: function stopSlideShow() {
      if (this.slideShowActive && this.stopSlideShow) {
        this.$emit('stopSlideShow');
      }
    },
    getMedianItemIndex: function getMedianItemIndex() {
      var index = Math.floor(this.d_numVisible / 2);
      return this.d_numVisible % 2 ? index : index - 1;
    },
    navBackward: function navBackward(e) {
      this.stopSlideShow();
      var prevItemIndex = this.d_activeIndex !== 0 ? this.d_activeIndex - 1 : 0;
      var diff = prevItemIndex + this.totalShiftedItems;
      if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
        this.step(1);
      }
      var activeIndex = this.circular && this.d_activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
      this.$emit('update:activeIndex', activeIndex);
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    navForward: function navForward(e) {
      this.stopSlideShow();
      var nextItemIndex = this.d_activeIndex + 1;
      if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
        this.step(-1);
      }
      var activeIndex = this.circular && this.value.length - 1 === this.d_activeIndex ? 0 : nextItemIndex;
      this.$emit('update:activeIndex', activeIndex);
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    onItemClick: function onItemClick(index) {
      this.stopSlideShow();
      var selectedItemIndex = index;
      if (selectedItemIndex !== this.d_activeIndex) {
        var diff = selectedItemIndex + this.totalShiftedItems;
        var dir = 0;
        if (selectedItemIndex < this.d_activeIndex) {
          dir = this.d_numVisible - diff - 1 - this.getMedianItemIndex();
          if (dir > 0 && -1 * this.totalShiftedItems !== 0) {
            this.step(dir);
          }
        } else {
          dir = this.getMedianItemIndex() - diff;
          if (dir < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1) {
            this.step(dir);
          }
        }
        this.$emit('update:activeIndex', selectedItemIndex);
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      if (this.$refs.itemsContainer) {
        DomHandler.addClass(this.$refs.itemsContainer, 'p-items-hidden');
        this.$refs.itemsContainer.style.transition = '';
      }
    },
    onTouchStart: function onTouchStart(e) {
      var touchobj = e.changedTouches[0];
      this.startPos = {
        x: touchobj.pageX,
        y: touchobj.pageY
      };
    },
    onTouchMove: function onTouchMove(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    onTouchEnd: function onTouchEnd(e) {
      var touchobj = e.changedTouches[0];
      if (this.isVertical) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    },
    changePageOnTouch: function changePageOnTouch(e, diff) {
      if (diff < 0) {
        // left
        this.navForward(e);
      } else {
        // right
        this.navBackward(e);
      }
    },
    getTotalPageNumber: function getTotalPageNumber() {
      return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
    },
    createStyle: function createStyle() {
      if (!this.thumbnailsStyle) {
        this.thumbnailsStyle = document.createElement('style');
        this.thumbnailsStyle.type = 'text/css';
        document.body.appendChild(this.thumbnailsStyle);
      }
      var innerHTML = "\n                #".concat(this.containerId, " .p-galleria-thumbnail-item {\n                    flex: 1 0 ").concat(100 / this.d_numVisible, "%\n                }\n            ");
      if (this.responsiveOptions) {
        this.sortedResponsiveOptions = _toConsumableArray(this.responsiveOptions);
        this.sortedResponsiveOptions.sort(function (data1, data2) {
          var value1 = data1.breakpoint;
          var value2 = data2.breakpoint;
          var result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
            numeric: true
          });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
          return -1 * result;
        });
        for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
          var res = this.sortedResponsiveOptions[i];
          innerHTML += "\n                        @media screen and (max-width: ".concat(res.breakpoint, ") {\n                            #").concat(this.containerId, " .p-galleria-thumbnail-item {\n                                flex: 1 0 ").concat(100 / res.numVisible, "%\n                            }\n                        }\n                    ");
        }
      }
      this.thumbnailsStyle.innerHTML = innerHTML;
    },
    calculatePosition: function calculatePosition() {
      if (this.$refs.itemsContainer && this.sortedResponsiveOptions) {
        var windowWidth = window.innerWidth;
        var matchedResponsiveData = {
          numVisible: this.numVisible
        };
        for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
          var res = this.sortedResponsiveOptions[i];
          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }
        if (this.d_numVisible !== matchedResponsiveData.numVisible) {
          this.d_numVisible = matchedResponsiveData.numVisible;
        }
      }
    },
    bindDocumentListeners: function bindDocumentListeners() {
      var _this = this;
      if (!this.documentResizeListener) {
        this.documentResizeListener = function () {
          _this.calculatePosition();
        };
        window.addEventListener('resize', this.documentResizeListener);
      }
    },
    unbindDocumentListeners: function unbindDocumentListeners() {
      if (this.documentResizeListener) {
        window.removeEventListener('resize', this.documentResizeListener);
        this.documentResizeListener = null;
      }
    },
    isNavBackwardDisabled: function isNavBackwardDisabled() {
      return !this.circular && this.d_activeIndex === 0 || this.value.length <= this.d_numVisible;
    },
    isNavForwardDisabled: function isNavForwardDisabled() {
      return !this.circular && this.d_activeIndex === this.value.length - 1 || this.value.length <= this.d_numVisible;
    },
    firstItemAciveIndex: function firstItemAciveIndex() {
      return this.totalShiftedItems * -1;
    },
    lastItemActiveIndex: function lastItemActiveIndex() {
      return this.firstItemAciveIndex() + this.d_numVisible - 1;
    },
    isItemActive: function isItemActive(index) {
      return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
    }
  },
  computed: {
    navBackwardClass: function navBackwardClass() {
      return ['p-galleria-thumbnail-prev p-link', {
        'p-disabled': this.isNavBackwardDisabled()
      }];
    },
    navForwardClass: function navForwardClass() {
      return ['p-galleria-thumbnail-next p-link', {
        'p-disabled': this.isNavForwardDisabled()
      }];
    },
    navBackwardIconClass: function navBackwardIconClass() {
      return ['p-galleria-thumbnail-prev-icon pi', {
        'pi-chevron-left': !this.isVertical,
        'pi-chevron-up': this.isVertical
      }];
    },
    navForwardIconClass: function navForwardIconClass() {
      return ['p-galleria-thumbnail-next-icon pi', {
        'pi-chevron-right': !this.isVertical,
        'pi-chevron-down': this.isVertical
      }];
    }
  },
  components: {
    'GalleriaItemSlot': __vue_component__$4
  },
  directives: {
    'ripple': Ripple
  }
};

/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "p-galleria-thumbnail-wrapper"
  }, [_c("div", {
    staticClass: "p-galleria-thumbnail-container"
  }, [_vm.showThumbnailNavigators ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    class: _vm.navBackwardClass,
    attrs: {
      disabled: _vm.isNavBackwardDisabled(),
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.navBackward($event);
      }
    }
  }, [_c("span", {
    class: _vm.navBackwardIconClass
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "p-galleria-thumbnail-items-container",
    style: {
      height: _vm.isVertical ? _vm.contentHeight : ""
    }
  }, [_c("div", {
    ref: "itemsContainer",
    staticClass: "p-galleria-thumbnail-items",
    on: {
      transitionend: _vm.onTransitionEnd,
      touchstart: function touchstart($event) {
        return _vm.onTouchStart($event);
      },
      touchmove: function touchmove($event) {
        return _vm.onTouchMove($event);
      },
      touchend: function touchend($event) {
        return _vm.onTouchEnd($event);
      }
    }
  }, _vm._l(_vm.value, function (item, index) {
    return _c("div", {
      key: "p-galleria-thumbnail-item-" + index,
      class: ["p-galleria-thumbnail-item", {
        "p-galleria-thumbnail-item-current": _vm.activeIndex === index,
        "p-galleria-thumbnail-item-active": _vm.isItemActive(index),
        "p-galleria-thumbnail-item-start": _vm.firstItemAciveIndex() === index,
        "p-galleria-thumbnail-item-end": _vm.lastItemActiveIndex() === index
      }]
    }, [_c("div", {
      staticClass: "p-galleria-thumbnail-item-content",
      attrs: {
        tabindex: _vm.isItemActive(index) ? 0 : null
      },
      on: {
        click: function click($event) {
          return _vm.onItemClick(index);
        },
        keydown: function keydown($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
            return null;
          }
          return _vm.onItemClick(index);
        }
      }
    }, [_c("GalleriaItemSlot", {
      attrs: {
        type: "thumbnail",
        item: item,
        templates: _vm.templates
      }
    })], 1)]);
  }), 0)]), _vm._v(" "), _vm.showThumbnailNavigators ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    class: _vm.navForwardClass,
    attrs: {
      disabled: _vm.isNavForwardDisabled(),
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.navForward($event);
      }
    }
  }, [_c("span", {
    class: _vm.navForwardIconClass
  })]) : _vm._e()])]);
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
  name: 'GalleriaContent',
  inheritAttrs: false,
  interval: null,
  data: function data() {
    return {
      id: this.$attrs.id || UniqueComponentId(),
      activeIndex: this.$attrs.activeIndex,
      numVisible: this.$attrs.numVisible,
      slideShowActive: false
    };
  },
  watch: {
    '$attrs.value': function $attrsValue(newVal) {
      if (newVal && newVal.length < this.numVisible) {
        this.numVisible = newVal.length;
      }
    },
    '$attrs.activeIndex': function $attrsActiveIndex(newVal) {
      this.activeIndex = newVal;
    },
    '$attrs.numVisible': function $attrsNumVisible(newVal) {
      this.numVisible = newVal;
    }
  },
  updated: function updated() {
    this.$emit('activeItemChange', this.activeIndex);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.slideShowActive) {
      this.stopSlideShow();
    }
  },
  methods: {
    isAutoPlayActive: function isAutoPlayActive() {
      return this.slideShowActive;
    },
    startSlideShow: function startSlideShow() {
      var _this = this;
      this.interval = setInterval(function () {
        var activeIndex = _this.$attrs.circular && _this.$attrs.value.length - 1 === _this.activeIndex ? 0 : _this.activeIndex + 1;
        _this.activeIndex = activeIndex;
      }, this.$attrs.transitionInterval);
      this.slideShowActive = true;
    },
    stopSlideShow: function stopSlideShow() {
      if (this.interval) {
        clearInterval(this.interval);
      }
      this.slideShowActive = false;
    },
    getPositionClass: function getPositionClass(preClassName, position) {
      var positions = ['top', 'left', 'bottom', 'right'];
      var pos = positions.find(function (item) {
        return item === position;
      });
      return pos ? "".concat(preClassName, "-").concat(pos) : '';
    },
    isVertical: function isVertical() {
      return this.$attrs.thumbnailsPosition === 'left' || this.$attrs.thumbnailsPosition === 'right';
    }
  },
  computed: {
    galleriaClass: function galleriaClass() {
      var thumbnailsPosClass = this.$attrs.showThumbnails && this.getPositionClass('p-galleria-thumbnails', this.$attrs.thumbnailsPosition);
      var indicatorPosClass = this.$attrs.showIndicators && this.getPositionClass('p-galleria-indicators', this.$attrs.indicatorsPosition);
      return ['p-galleria p-component', {
        'p-galleria-fullscreen': this.$attrs.fullScreen,
        'p-galleria-indicator-onitem': this.$attrs.showIndicatorsOnItem,
        'p-galleria-item-nav-onhover': this.$attrs.showItemNavigatorsOnHover && !this.$attrs.fullScreen
      }, thumbnailsPosClass, indicatorPosClass, this.$attrs.containerClass];
    }
  },
  components: {
    'GalleriaItem': __vue_component__$3,
    'GalleriaThumbnails': __vue_component__$2,
    'GalleriaItemSlot': __vue_component__$4
  },
  directives: {
    'ripple': Ripple
  }
};

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.$attrs.value && _vm.$attrs.value.length > 0 ? _c("div", {
    class: _vm.galleriaClass,
    style: _vm.$attrs.containerStyle,
    attrs: {
      id: _vm.id
    }
  }, [_vm.$attrs.fullScreen ? _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-galleria-close p-link",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("maskHide");
      }
    }
  }, [_c("span", {
    staticClass: "p-galleria-close-icon pi pi-times"
  })]) : _vm._e(), _vm._v(" "), _vm.$attrs.templates && _vm.$attrs.templates["header"] ? _c("div", {
    staticClass: "p-galleria-header"
  }, [_c("GalleriaItemSlot", {
    attrs: {
      type: "header",
      templates: _vm.$attrs.templates
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "p-galleria-content"
  }, [_c("GalleriaItem", {
    attrs: {
      value: _vm.$attrs.value,
      activeIndex: _vm.activeIndex,
      circular: _vm.$attrs.circular,
      templates: _vm.$attrs.templates,
      showIndicators: _vm.$attrs.showIndicators,
      changeItemOnIndicatorHover: _vm.$attrs.changeItemOnIndicatorHover,
      showItemNavigators: _vm.$attrs.showItemNavigators,
      autoPlay: _vm.$attrs.autoPlay,
      slideShowActive: _vm.slideShowActive
    },
    on: {
      "update:activeIndex": function updateActiveIndex($event) {
        _vm.activeIndex = $event;
      },
      "update:active-index": function updateActiveIndex($event) {
        _vm.activeIndex = $event;
      },
      "update:slideShowActive": function updateSlideShowActive($event) {
        _vm.slideShowActive = $event;
      },
      "update:slide-show-active": function updateSlideShowActive($event) {
        _vm.slideShowActive = $event;
      },
      startSlideShow: _vm.startSlideShow,
      stopSlideShow: _vm.stopSlideShow
    }
  }), _vm._v(" "), _vm.$attrs.showThumbnails ? _c("GalleriaThumbnails", {
    attrs: {
      containerId: _vm.id,
      value: _vm.$attrs.value,
      activeIndex: _vm.activeIndex,
      templates: _vm.$attrs.templates,
      numVisible: _vm.$attrs.numVisible,
      responsiveOptions: _vm.$attrs.responsiveOptions,
      circular: _vm.$attrs.circular,
      isVertical: _vm.isVertical(),
      contentHeight: _vm.$attrs.verticalThumbnailViewPortHeight,
      showThumbnailNavigators: _vm.$attrs.showThumbnailNavigators,
      slideShowActive: _vm.slideShowActive
    },
    on: {
      "update:activeIndex": function updateActiveIndex($event) {
        _vm.activeIndex = $event;
      },
      "update:active-index": function updateActiveIndex($event) {
        _vm.activeIndex = $event;
      },
      "update:slideShowActive": function updateSlideShowActive($event) {
        _vm.slideShowActive = $event;
      },
      "update:slide-show-active": function updateSlideShowActive($event) {
        _vm.slideShowActive = $event;
      },
      stopSlideShow: _vm.stopSlideShow
    }
  }) : _vm._e()], 1), _vm._v(" "), _vm.$attrs.templates && _vm.$attrs.templates["footer"] ? _c("div", {
    staticClass: "p-galleria-footer"
  }, [_c("GalleriaItemSlot", {
    attrs: {
      type: "footer",
      templates: _vm.$attrs.templates
    }
  })], 1) : _vm._e()]) : _vm._e();
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
  name: 'Galleria',
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: null
    },
    value: {
      type: Array,
      default: null
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    numVisible: {
      type: Number,
      default: 3
    },
    responsiveOptions: {
      type: Array,
      default: null
    },
    showItemNavigators: {
      type: Boolean,
      default: false
    },
    showThumbnailNavigators: {
      type: Boolean,
      default: true
    },
    showItemNavigatorsOnHover: {
      type: Boolean,
      default: false
    },
    changeItemOnIndicatorHover: {
      type: Boolean,
      default: false
    },
    circular: {
      type: Boolean,
      default: false
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    transitionInterval: {
      type: Number,
      default: 4000
    },
    showThumbnails: {
      type: Boolean,
      default: true
    },
    thumbnailsPosition: {
      type: String,
      default: 'bottom'
    },
    verticalThumbnailViewPortHeight: {
      type: String,
      default: '300px'
    },
    showIndicators: {
      type: Boolean,
      default: false
    },
    showIndicatorsOnItem: {
      type: Boolean,
      default: false
    },
    indicatorsPosition: {
      type: String,
      default: 'bottom'
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    maskClass: {
      type: String,
      default: null
    },
    containerStyle: {
      type: String,
      default: null
    },
    containerClass: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      maskVisible: this.visible
    };
  },
  updated: function updated() {
    this.removeStylesFromMask();
    if (this.fullScreen && this.visible && !this.maskVisible) {
      this.maskVisible = true;
    }
  },
  mounted: function mounted() {
    this.removeStylesFromMask();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.fullScreen) {
      DomHandler.removeClass(document.body, 'p-overflow-hidden');
    }
  },
  methods: {
    onEnter: function onEnter() {
      this.$refs.mask.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
      DomHandler.addClass(document.body, 'p-overflow-hidden');
    },
    onBeforeLeave: function onBeforeLeave() {
      DomHandler.addClass(this.$refs.mask, 'p-component-overlay-leave');
    },
    onAfterLeave: function onAfterLeave() {
      this.maskVisible = false;
      DomHandler.removeClass(document.body, 'p-overflow-hidden');
    },
    onAppear: function onAppear() {
      var _this = this;
      if (this.visible) {
        this.onEnter();
        setTimeout(function () {
          DomHandler.addClass(_this.$refs.mask, 'p-component-overlay');
        }, 1);
      }
    },
    onActiveItemChange: function onActiveItemChange(index) {
      if (this.activeIndex !== index) {
        this.$emit('update:activeIndex', index);
      }
    },
    maskHide: function maskHide() {
      this.$emit('update:visible', false);
    },
    removeStylesFromMask: function removeStylesFromMask() {
      var _this2 = this;
      if (this.$refs.mask) {
        this.galleriaStyles = this.$vnode.data.style || this.$vnode.data.staticStyle;
        if (this.galleriaStyles) {
          Object.keys(this.galleriaStyles).forEach(function (key) {
            _this2.$refs.mask.style[key] = '';
          });
        }
        this.galleriaClasses = this.$vnode.data.class || this.$vnode.data.staticClass;
        if (this.galleriaClasses) {
          this.$refs.mask.classList = 'p-galleria-mask' + (this.visible && ' p-galleria-visible');
        }
      }
    }
  },
  computed: {
    maskContentClass: function maskContentClass() {
      return ['p-galleria-mask p-component-overlay p-component-overlay-enter', {
        'p-galleria-visible': this.visible
      }, this.maskClass];
    }
  },
  components: {
    'GalleriaContent': __vue_component__$1
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
  return _vm.fullScreen && (_vm.maskVisible || _vm.visible) ? _c("div", {
    ref: "mask",
    class: _vm.maskContentClass
  }, [_c("transition", {
    attrs: {
      name: "p-galleria"
    },
    on: {
      enter: _vm.onEnter,
      "before-leave": _vm.onBeforeLeave,
      "after-leave": _vm.onAfterLeave,
      appear: _vm.onAppear
    }
  }, [_vm.visible ? _c("GalleriaContent", _vm._b({
    attrs: {
      templates: _vm.$scopedSlots
    },
    on: {
      maskHide: _vm.maskHide,
      activeItemChange: _vm.onActiveItemChange
    }
  }, "GalleriaContent", _vm.$props, false)) : _vm._e()], 1)], 1) : !_vm.fullScreen ? _c("GalleriaContent", _vm._b({
    attrs: {
      templates: _vm.$scopedSlots
    },
    on: {
      activeItemChange: _vm.onActiveItemChange
    }
  }, "GalleriaContent", _vm.$props, false)) : _vm._e();
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-55595f30_0", {
    source: "\n.p-galleria-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.p-galleria-item-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n}\n.p-galleria-item-container {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n}\n.p-galleria-item-nav {\n  position: absolute;\n  top: 50%;\n  margin-top: -.5rem;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n}\n.p-galleria-item-prev {\n  left: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.p-galleria-item-next {\n  right: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.p-galleria-item {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n}\n.p-galleria-item-nav-onhover .p-galleria-item-nav {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-transition: opacity .2s ease-in-out;\n  transition: opacity .2s ease-in-out;\n}\n.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {\n  pointer-events: all;\n  opacity: 1;\n}\n.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {\n  pointer-events: none;\n}\n.p-galleria-caption {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n/* Thumbnails */\n.p-galleria-thumbnail-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: auto;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n.p-galleria-thumbnail-prev,\n.p-galleria-thumbnail-next {\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n  position: relative;\n}\n.p-galleria-thumbnail-prev span,\n.p-galleria-thumbnail-next span {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-galleria-thumbnail-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.p-galleria-thumbnail-items-container {\n  overflow: hidden;\n  width: 100%;\n}\n.p-galleria-thumbnail-items {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.p-galleria-thumbnail-item {\n  overflow: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: pointer;\n  opacity: .5;\n}\n.p-galleria-thumbnail-item:hover {\n  opacity: 1;\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s;\n}\n.p-galleria-thumbnail-item-current {\n  opacity: 1;\n}\n\n/* Positions */\n/* Thumbnails */\n.p-galleria-thumbnails-left .p-galleria-content,\n.p-galleria-thumbnails-right .p-galleria-content {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.p-galleria-thumbnails-left .p-galleria-item-wrapper,\n.p-galleria-thumbnails-right .p-galleria-item-wrapper {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.p-galleria-thumbnails-left .p-galleria-item-wrapper,\n.p-galleria-thumbnails-top .p-galleria-item-wrapper {\n  -webkit-box-ordinal-group: 3;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,\n.p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n}\n.p-galleria-thumbnails-left .p-galleria-thumbnail-container,\n.p-galleria-thumbnails-right .p-galleria-thumbnail-container {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.p-galleria-thumbnails-left .p-galleria-thumbnail-items,\n.p-galleria-thumbnails-right .p-galleria-thumbnail-items {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\n\n/* Indicators */\n.p-galleria-indicators {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-galleria-indicator > button {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-galleria-indicators-left .p-galleria-item-wrapper,\n.p-galleria-indicators-right .p-galleria-item-wrapper {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-galleria-indicators-left .p-galleria-item-container,\n.p-galleria-indicators-top .p-galleria-item-container {\n  -webkit-box-ordinal-group: 3;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n.p-galleria-indicators-left .p-galleria-indicators,\n.p-galleria-indicators-top .p-galleria-indicators {\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n}\n.p-galleria-indicators-left .p-galleria-indicators,\n.p-galleria-indicators-right .p-galleria-indicators {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.p-galleria-indicator-onitem .p-galleria-indicators {\n  position: absolute;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {\n  top: 0;\n  left: 0;\n  width: 100%;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {\n  right: 0;\n  top: 0;\n  height: 100%;\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {\n  left: 0;\n  top: 0;\n  height: 100%;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n/* FullScreen */\n.p-galleria-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-galleria-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n}\n.p-galleria-mask .p-galleria-item-nav {\n  position: fixed;\n  top: 50%;\n  margin-top: -.5rem;\n}\n\n/* Animation */\n.p-galleria-enter-active {\n  -webkit-transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n  transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n.p-galleria-leave-active {\n  -webkit-transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);\n  transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);\n}\n.p-galleria-enter,\n.p-galleria-leave-to {\n  opacity: 0;\n  -webkit-transform: scale(0.7);\n          transform: scale(0.7);\n}\n.p-galleria-enter-active .p-galleria-item-nav {\n  opacity: 0;\n}\n\n/* Keyboard Support */\n.p-items-hidden .p-galleria-thumbnail-item {\n  visibility: hidden;\n}\n.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {\n  visibility: visible;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/galleria/Galleria.vue"],
      "names": [],
      "mappings": "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",
      "file": "Galleria.vue",
      "sourcesContent": ["<template>\n  <div v-if=\"fullScreen && (maskVisible || visible)\" ref=\"mask\" :class=\"maskContentClass\">\n    <transition\n      name=\"p-galleria\"\n      @enter=\"onEnter\"\n      @before-leave=\"onBeforeLeave\"\n      @after-leave=\"onAfterLeave\"\n      @appear=\"onAppear\">\n      <GalleriaContent\n        v-if=\"visible\"\n        v-bind=\"$props\"\n        @maskHide=\"maskHide\"\n        :templates=\"$scopedSlots\"\n        @activeItemChange=\"onActiveItemChange\" />\n    </transition>\n  </div>\n\n  <GalleriaContent\n    v-else-if=\"!fullScreen\"\n    v-bind=\"$props\"\n    :templates=\"$scopedSlots\"\n    @activeItemChange=\"onActiveItemChange\" />\n</template>\n\n<script>\nimport GalleriaContent from './GalleriaContent.vue'\nimport { DomHandler } from 'primevue2/utils'\n\nexport default {\n  name: 'Galleria',\n  inheritAttrs: false,\n  props: {\n    id: {\n      type: String,\n      default: null\n    },\n    value: {\n      type: Array,\n      default: null\n    },\n    activeIndex: {\n      type: Number,\n      default: 0\n    },\n    fullScreen: {\n      type: Boolean,\n      default: false\n    },\n    visible: {\n      type: Boolean,\n      default: false\n    },\n    numVisible: {\n      type: Number,\n      default: 3\n    },\n    responsiveOptions: {\n      type: Array,\n      default: null\n    },\n    showItemNavigators: {\n      type: Boolean,\n      default: false\n    },\n    showThumbnailNavigators: {\n      type: Boolean,\n      default: true\n    },\n    showItemNavigatorsOnHover: {\n      type: Boolean,\n      default: false\n    },\n    changeItemOnIndicatorHover: {\n      type: Boolean,\n      default: false\n    },\n    circular: {\n      type: Boolean,\n      default: false\n    },\n    autoPlay: {\n      type: Boolean,\n      default: false\n    },\n    transitionInterval: {\n      type: Number,\n      default: 4000\n    },\n    showThumbnails: {\n      type: Boolean,\n      default: true\n    },\n    thumbnailsPosition: {\n      type: String,\n      default: 'bottom'\n    },\n    verticalThumbnailViewPortHeight: {\n      type: String,\n      default: '300px'\n    },\n    showIndicators: {\n      type: Boolean,\n      default: false\n    },\n    showIndicatorsOnItem: {\n      type: Boolean,\n      default: false\n    },\n    indicatorsPosition: {\n      type: String,\n      default: 'bottom'\n    },\n    baseZIndex: {\n      type: Number,\n      default: 0\n    },\n    maskClass: {\n      type: String,\n      default: null\n    },\n    containerStyle: {\n      type: String,\n      default: null\n    },\n    containerClass: {\n      type: String,\n      default: null\n    }\n  },\n  data() {\n    return {\n      maskVisible: this.visible\n    }\n  },\n  updated() {\n    this.removeStylesFromMask()\n\n    if (this.fullScreen && this.visible && !this.maskVisible) {\n      this.maskVisible = true\n    }\n  },\n  mounted() {\n    this.removeStylesFromMask()\n  },\n  beforeDestroy() {\n    if (this.fullScreen) {\n      DomHandler.removeClass(document.body, 'p-overflow-hidden')\n    }\n  },\n  methods: {\n    onEnter() {\n      this.$refs.mask.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())\n      DomHandler.addClass(document.body, 'p-overflow-hidden')\n    },\n    onBeforeLeave() {\n      DomHandler.addClass(this.$refs.mask, 'p-component-overlay-leave')\n    },\n    onAfterLeave() {\n      this.maskVisible = false\n      DomHandler.removeClass(document.body, 'p-overflow-hidden')\n    },\n    onAppear() {\n      if (this.visible) {\n        this.onEnter()\n\n        setTimeout(() => {\n          DomHandler.addClass(this.$refs.mask, 'p-component-overlay')\n        }, 1)\n      }\n    },\n    onActiveItemChange(index) {\n      if (this.activeIndex !== index) {\n        this.$emit('update:activeIndex', index)\n      }\n    },\n    maskHide() {\n      this.$emit('update:visible', false)\n    },\n    removeStylesFromMask() {\n      if (this.$refs.mask) {\n        this.galleriaStyles = this.$vnode.data.style || this.$vnode.data.staticStyle\n        if (this.galleriaStyles) {\n          Object.keys(this.galleriaStyles).forEach((key) => {\n            this.$refs.mask.style[key] = ''\n          })\n        }\n\n        this.galleriaClasses = this.$vnode.data.class || this.$vnode.data.staticClass\n        if (this.galleriaClasses) {\n          this.$refs.mask.classList = 'p-galleria-mask' + (this.visible && ' p-galleria-visible')\n        }\n      }\n    }\n  },\n  computed: {\n    maskContentClass() {\n      return ['p-galleria-mask p-component-overlay p-component-overlay-enter', {\n        'p-galleria-visible': this.visible\n      }, this.maskClass]\n    }\n  },\n  components: {\n    'GalleriaContent': GalleriaContent\n  }\n}\n</script>\n\n<style>\n.p-galleria-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.p-galleria-item-wrapper {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.p-galleria-item-container {\n  position: relative;\n  display: flex;\n  height: 100%;\n}\n\n.p-galleria-item-nav {\n  position: absolute;\n  top: 50%;\n  margin-top: -.5rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\n.p-galleria-item-prev {\n  left: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.p-galleria-item-next {\n  right: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.p-galleria-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.p-galleria-item-nav-onhover .p-galleria-item-nav {\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity .2s ease-in-out;\n}\n\n.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {\n  pointer-events: all;\n  opacity: 1;\n}\n\n.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {\n  pointer-events: none;\n}\n\n.p-galleria-caption {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n/* Thumbnails */\n.p-galleria-thumbnail-wrapper {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  flex-shrink: 0;\n}\n\n.p-galleria-thumbnail-prev,\n.p-galleria-thumbnail-next {\n  align-self: center;\n  flex: 0 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-galleria-thumbnail-prev span,\n.p-galleria-thumbnail-next span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.p-galleria-thumbnail-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.p-galleria-thumbnail-items-container {\n  overflow: hidden;\n  width: 100%;\n}\n\n.p-galleria-thumbnail-items {\n  display: flex;\n}\n\n.p-galleria-thumbnail-item {\n  overflow: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  opacity: .5;\n}\n\n.p-galleria-thumbnail-item:hover {\n  opacity: 1;\n  transition: opacity .3s;\n}\n\n.p-galleria-thumbnail-item-current {\n  opacity: 1;\n}\n\n/* Positions */\n/* Thumbnails */\n.p-galleria-thumbnails-left .p-galleria-content,\n.p-galleria-thumbnails-right .p-galleria-content {\n  flex-direction: row;\n}\n\n.p-galleria-thumbnails-left .p-galleria-item-wrapper,\n.p-galleria-thumbnails-right .p-galleria-item-wrapper {\n  flex-direction: row;\n}\n\n.p-galleria-thumbnails-left .p-galleria-item-wrapper,\n.p-galleria-thumbnails-top .p-galleria-item-wrapper {\n  order: 2;\n}\n\n.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,\n.p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {\n  order: 1;\n}\n\n.p-galleria-thumbnails-left .p-galleria-thumbnail-container,\n.p-galleria-thumbnails-right .p-galleria-thumbnail-container {\n  flex-direction: column;\n  flex-grow: 1;\n}\n\n.p-galleria-thumbnails-left .p-galleria-thumbnail-items,\n.p-galleria-thumbnails-right .p-galleria-thumbnail-items {\n  flex-direction: column;\n  height: 100%;\n}\n\n/* Indicators */\n.p-galleria-indicators {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.p-galleria-indicator > button {\n  display: inline-flex;\n  align-items: center;\n}\n\n.p-galleria-indicators-left .p-galleria-item-wrapper,\n.p-galleria-indicators-right .p-galleria-item-wrapper {\n  flex-direction: row;\n  align-items: center;\n}\n\n.p-galleria-indicators-left .p-galleria-item-container,\n.p-galleria-indicators-top .p-galleria-item-container {\n  order: 2;\n}\n\n.p-galleria-indicators-left .p-galleria-indicators,\n.p-galleria-indicators-top .p-galleria-indicators {\n  order: 1;\n}\n\n.p-galleria-indicators-left .p-galleria-indicators,\n.p-galleria-indicators-right .p-galleria-indicators {\n  flex-direction: column;\n}\n\n.p-galleria-indicator-onitem .p-galleria-indicators {\n  position: absolute;\n  display: flex;\n}\n\n.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {\n  top: 0;\n  left: 0;\n  width: 100%;\n  align-items: flex-start;\n}\n\n.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {\n  right: 0;\n  top: 0;\n  height: 100%;\n  align-items: flex-end;\n}\n\n.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  align-items: flex-end;\n}\n\n.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {\n  left: 0;\n  top: 0;\n  height: 100%;\n  align-items: flex-start;\n}\n\n/* FullScreen */\n.p-galleria-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.p-galleria-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\n.p-galleria-mask .p-galleria-item-nav {\n  position: fixed;\n  top: 50%;\n  margin-top: -.5rem;\n}\n\n/* Animation */\n.p-galleria-enter-active {\n  transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-galleria-leave-active {\n  transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);\n}\n\n.p-galleria-enter,\n.p-galleria-leave-to {\n  opacity: 0;\n  transform: scale(0.7);\n}\n\n.p-galleria-enter-active .p-galleria-item-nav {\n  opacity: 0;\n}\n\n/* Keyboard Support */\n.p-items-hidden .p-galleria-thumbnail-item {\n  visibility: hidden;\n}\n\n.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {\n  visibility: visible;\n}\n</style>\n"]
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
