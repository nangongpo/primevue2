this.primevue2 = this.primevue2 || {};
this.primevue2.tooltip = (function (utils) {
  'use strict';

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function bindEvents(el) {
    var modifiers = el.$_ptooltipModifiers;
    if (modifiers.focus) {
      el.addEventListener('focus', onFocus);
      el.addEventListener('blur', onBlur);
    } else {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
      el.addEventListener('click', onClick);
    }
  }
  function unbindEvents(el) {
    var modifiers = el.$_ptooltipModifiers;
    if (modifiers.focus) {
      el.removeEventListener('focus', onFocus);
      el.removeEventListener('blur', onBlur);
    } else {
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('click', onClick);
    }
  }
  function bindScrollListener(el) {
    if (!el.$_ptooltipScrollHandler) {
      el.$_ptooltipScrollHandler = new utils.ConnectedOverlayScrollHandler(el, function () {
        hide(el);
      });
    }
    el.$_ptooltipScrollHandler.bindScrollListener();
  }
  function unbindScrollListener(el) {
    if (el.$_ptooltipScrollHandler) {
      el.$_ptooltipScrollHandler.unbindScrollListener();
    }
  }
  function onMouseEnter(event) {
    show(event.currentTarget);
  }
  function onMouseLeave(event) {
    hide(event.currentTarget);
  }
  function onFocus(event) {
    show(event.currentTarget);
  }
  function onBlur(event) {
    hide(event.currentTarget);
  }
  function onClick(event) {
    hide(event.currentTarget);
  }
  function show(el) {
    if (el.$_ptooltipDisabled) {
      return;
    }
    var tooltipElement = create(el);
    align(el);
    utils.DomHandler.fadeIn(tooltipElement, 250);
    tooltipElement.style.zIndex = ++utils.DomHandler.zindex;
    window.addEventListener('resize', function onWindowResize() {
      if (!utils.DomHandler.isAndroid()) {
        hide(el);
      }
      this.removeEventListener('resize', onWindowResize);
    });
    bindScrollListener(el);
  }
  function hide(el) {
    remove(el);
    unbindScrollListener(el);
  }
  function getTooltipElement(el) {
    return document.getElementById(el.$_ptooltipId);
  }
  function create(el) {
    var id = utils.UniqueComponentId() + '_tooltip';
    el.$_ptooltipId = id;
    var container = document.createElement('div');
    container.id = id;
    var tooltipArrow = document.createElement('div');
    tooltipArrow.className = 'p-tooltip-arrow';
    container.appendChild(tooltipArrow);
    var tooltipText = document.createElement('div');
    tooltipText.className = 'p-tooltip-text';
    if (el.$_ptooltipEscape) {
      tooltipText.innerHTML = el.$_ptooltipValue;
    } else {
      tooltipText.innerHTML = '';
      tooltipText.appendChild(document.createTextNode(el.$_ptooltipValue));
    }
    container.appendChild(tooltipText);
    document.body.appendChild(container);
    container.style.display = 'inline-block';
    return container;
  }
  function remove(el) {
    if (el) {
      var tooltipElement = getTooltipElement(el);
      if (tooltipElement && tooltipElement.parentElement) {
        document.body.removeChild(tooltipElement);
      }
      el.$_ptooltipId = null;
    }
  }
  function align(el) {
    var modifiers = el.$_ptooltipModifiers;
    if (modifiers.top) {
      alignTop(el);
      if (isOutOfBounds(el)) {
        alignBottom(el);
        if (isOutOfBounds(el)) {
          alignTop(el);
        }
      }
    } else if (modifiers.left) {
      alignLeft(el);
      if (isOutOfBounds(el)) {
        alignRight(el);
        if (isOutOfBounds(el)) {
          alignTop(el);
          if (isOutOfBounds(el)) {
            alignBottom(el);
            if (isOutOfBounds(el)) {
              alignLeft(el);
            }
          }
        }
      }
    } else if (modifiers.bottom) {
      alignBottom(el);
      if (isOutOfBounds(el)) {
        alignTop(el);
        if (isOutOfBounds(el)) {
          alignBottom(el);
        }
      }
    } else {
      alignRight(el);
      if (isOutOfBounds(el)) {
        alignLeft(el);
        if (isOutOfBounds(el)) {
          alignTop(el);
          if (isOutOfBounds(el)) {
            alignBottom(el);
            if (isOutOfBounds(el)) {
              alignRight(el);
            }
          }
        }
      }
    }
  }
  function getHostOffset(el) {
    var offset = el.getBoundingClientRect();
    var targetLeft = offset.left + utils.DomHandler.getWindowScrollLeft();
    var targetTop = offset.top + utils.DomHandler.getWindowScrollTop();
    return {
      left: targetLeft,
      top: targetTop
    };
  }
  function alignRight(el) {
    preAlign(el, 'right');
    var tooltipElement = getTooltipElement(el);
    var hostOffset = getHostOffset(el);
    var left = hostOffset.left + utils.DomHandler.getOuterWidth(el);
    var top = hostOffset.top + (utils.DomHandler.getOuterHeight(el) - utils.DomHandler.getOuterHeight(tooltipElement)) / 2;
    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
  }
  function alignLeft(el) {
    preAlign(el, 'left');
    var tooltipElement = getTooltipElement(el);
    var hostOffset = getHostOffset(el);
    var left = hostOffset.left - utils.DomHandler.getOuterWidth(tooltipElement);
    var top = hostOffset.top + (utils.DomHandler.getOuterHeight(el) - utils.DomHandler.getOuterHeight(tooltipElement)) / 2;
    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
  }
  function alignTop(el) {
    preAlign(el, 'top');
    var tooltipElement = getTooltipElement(el);
    var hostOffset = getHostOffset(el);
    var left = hostOffset.left + (utils.DomHandler.getOuterWidth(el) - utils.DomHandler.getOuterWidth(tooltipElement)) / 2;
    var top = hostOffset.top - utils.DomHandler.getOuterHeight(tooltipElement);
    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
  }
  function alignBottom(el) {
    preAlign(el, 'bottom');
    var tooltipElement = getTooltipElement(el);
    var hostOffset = getHostOffset(el);
    var left = hostOffset.left + (utils.DomHandler.getOuterWidth(el) - utils.DomHandler.getOuterWidth(tooltipElement)) / 2;
    var top = hostOffset.top + utils.DomHandler.getOuterHeight(el);
    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
  }
  function preAlign(el, position) {
    var tooltipElement = getTooltipElement(el);
    tooltipElement.style.left = -999 + 'px';
    tooltipElement.style.top = -999 + 'px';
    tooltipElement.className = 'p-tooltip p-component p-tooltip-' + position;
  }
  function isOutOfBounds(el) {
    var tooltipElement = getTooltipElement(el);
    var offset = tooltipElement.getBoundingClientRect();
    var targetTop = offset.top;
    var targetLeft = offset.left;
    var width = utils.DomHandler.getOuterWidth(tooltipElement);
    var height = utils.DomHandler.getOuterHeight(tooltipElement);
    var viewport = utils.DomHandler.getViewport();
    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
  }
  function getModifiers(options) {
    // modifiers
    if (options.modifiers && Object.keys(options.modifiers).length) {
      return options.modifiers;
    }

    // arg
    if (options.arg && _typeof(options.arg) === 'object') {
      return Object.entries(options.arg).reduce(function (acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];
        if (key === 'event' || key === 'position') acc[val] = true;
        return acc;
      }, {});
    }
    return {};
  }
  var Tooltip = {
    bind: function bind(el, options) {
      el.$_ptooltipModifiers = getModifiers(options);
      if (typeof options.value === 'string') {
        el.$_ptooltipValue = options.value;
        el.$_ptooltipDisabled = false;
        el.$_ptooltipEscape = false;
      } else {
        el.$_ptooltipValue = options.value.value;
        el.$_ptooltipDisabled = options.value.disabled || false;
        el.$_ptooltipEscape = options.value.escape || false;
      }
      bindEvents(el);
    },
    unbind: function unbind(el) {
      remove(el);
      unbindEvents(el);
      if (el.$_ptooltipScrollHandler) {
        el.$_ptooltipScrollHandler.destroy();
        el.$_ptooltipScrollHandler = null;
      }
    },
    update: function update(el, options) {
      el.$_ptooltipModifiers = getModifiers(options);
      if (typeof options.value === 'string') {
        el.$_ptooltipValue = options.value;
        el.$_ptooltipDisabled = false;
        el.$_ptooltipEscape = false;
      } else {
        el.$_ptooltipValue = options.value.value;
        el.$_ptooltipDisabled = options.value.disabled;
        el.$_ptooltipEscape = options.value.escape || false;
      }
    }
  };

  return Tooltip;

})(primevue2.utils);
