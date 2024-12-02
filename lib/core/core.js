this.primevue2 = this.primevue2 || {};
this.primevue2.nuxt = (function () {
  'use strict';

  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  // resolves . and .. elements in a path array with directory names there
  // must be no slashes, empty elements, or device names (c:\) in the array
  // (so also no leading and trailing slashes - it does not distinguish
  // relative and absolute paths)
  function normalizeArray(parts, allowAboveRoot) {
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
      var last = parts[i];
      if (last === '.') {
        parts.splice(i, 1);
      } else if (last === '..') {
        parts.splice(i, 1);
        up++;
      } else if (up) {
        parts.splice(i, 1);
        up--;
      }
    }

    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) {
      for (; up--; up) {
        parts.unshift('..');
      }
    }

    return parts;
  }

  // Split a filename into [root, dir, basename, ext], unix version
  // 'root' is just a slash, or nothing.
  var splitPathRe =
      /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
  var splitPath = function(filename) {
    return splitPathRe.exec(filename).slice(1);
  };

  // path.resolve([from ...], to)
  // posix version
  function resolve() {
    var resolvedPath = '',
        resolvedAbsolute = false;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = (i >= 0) ? arguments[i] : '/';

      // Skip empty and invalid entries
      if (typeof path !== 'string') {
        throw new TypeError('Arguments to path.resolve must be strings');
      } else if (!path) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charAt(0) === '/';
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
      return !!p;
    }), !resolvedAbsolute).join('/');

    return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
  }
  // path.normalize(path)
  // posix version
  function normalize(path) {
    var isPathAbsolute = isAbsolute(path),
        trailingSlash = substr(path, -1) === '/';

    // Normalize the path
    path = normalizeArray(filter(path.split('/'), function(p) {
      return !!p;
    }), !isPathAbsolute).join('/');

    if (!path && !isPathAbsolute) {
      path = '.';
    }
    if (path && trailingSlash) {
      path += '/';
    }

    return (isPathAbsolute ? '/' : '') + path;
  }
  // posix version
  function isAbsolute(path) {
    return path.charAt(0) === '/';
  }

  // posix version
  function join() {
    var paths = Array.prototype.slice.call(arguments, 0);
    return normalize(filter(paths, function(p, index) {
      if (typeof p !== 'string') {
        throw new TypeError('Arguments to path.join must be strings');
      }
      return p;
    }).join('/'));
  }


  // path.relative(from, to)
  // posix version
  function relative(from, to) {
    from = resolve(from).substr(1);
    to = resolve(to).substr(1);

    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== '') break;
      }

      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== '') break;
      }

      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }

    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));

    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }

    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push('..');
    }

    outputParts = outputParts.concat(toParts.slice(samePartsLength));

    return outputParts.join('/');
  }

  var sep = '/';
  var delimiter = ':';

  function dirname(path) {
    var result = splitPath(path),
        root = result[0],
        dir = result[1];

    if (!root && !dir) {
      // No dirname whatsoever
      return '.';
    }

    if (dir) {
      // It has a dirname, strip trailing slash
      dir = dir.substr(0, dir.length - 1);
    }

    return root + dir;
  }

  function basename(path, ext) {
    var f = splitPath(path)[2];
    // TODO: make this comparison case-insensitive on windows?
    if (ext && f.substr(-1 * ext.length) === ext) {
      f = f.substr(0, f.length - ext.length);
    }
    return f;
  }


  function extname(path) {
    return splitPath(path)[3];
  }
  var path = {
    extname: extname,
    basename: basename,
    dirname: dirname,
    sep: sep,
    delimiter: delimiter,
    relative: relative,
    join: join,
    isAbsolute: isAbsolute,
    normalize: normalize,
    resolve: resolve
  };
  function filter (xs, f) {
      if (xs.filter) return xs.filter(f);
      var res = [];
      for (var i = 0; i < xs.length; i++) {
          if (f(xs[i], i, xs)) res.push(xs[i]);
      }
      return res;
  }

  // String.prototype.substr - negative index don't work in IE8
  var substr = 'ab'.substr(-1) === 'b' ?
      function (str, start, len) { return str.substr(start, len) } :
      function (str, start, len) {
          if (start < 0) start = str.length + start;
          return str.substr(start, len);
      }
  ;

  function Nuxt (moduleOptions) {
    var _this = this;
    var config = Object.assign({}, this.options.primevue, moduleOptions);
    var theme = config.theme || 'saga-blue';
    this.options.css.push('primevue/resources/themes/' + theme + '/theme.css');
    this.options.css.push('primevue/resources/primevue.min.css');
    this.options.css.push('primeicons/primeicons.css');
    if (config.ripple) {
      this.addPlugin(path.resolve(__dirname, '../config/plugin-ripple.js'));
    } else {
      this.addPlugin(path.resolve(__dirname, '../config/plugin.js'));
    }
    if (config.components) {
      config.components.forEach(function (component) {
        return _this.addPlugin(path.resolve(__dirname, '../' + component.toLowerCase() + '/plugin.js'));
      });
    }
    if (config.directives) {
      config.directives.forEach(function (component) {
        return _this.addPlugin(path.resolve(__dirname, '../' + component.toLowerCase() + '/plugin.js'));
      });
    }
  }

  return Nuxt;

})();

this.primevue2 = this.primevue2 || {};
this.primevue2.utils = (function (exports) {
  'use strict';

  function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var DomHandler = {
    innerWidth: function innerWidth(el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    },
    width: function width(el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    },
    getWindowScrollTop: function getWindowScrollTop() {
      var doc = document.documentElement;
      return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    },
    getWindowScrollLeft: function getWindowScrollLeft() {
      var doc = document.documentElement;
      return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    },
    getOuterWidth: function getOuterWidth(el, margin) {
      if (el) {
        var width = el.offsetWidth;
        if (margin) {
          var style = getComputedStyle(el);
          width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }
        return width;
      } else {
        return 0;
      }
    },
    getOuterHeight: function getOuterHeight(el, margin) {
      if (el) {
        var height = el.offsetHeight;
        if (margin) {
          var style = getComputedStyle(el);
          height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }
        return height;
      } else {
        return 0;
      }
    },
    getClientHeight: function getClientHeight(el, margin) {
      if (el) {
        var height = el.clientHeight;
        if (margin) {
          var style = getComputedStyle(el);
          height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }
        return height;
      } else {
        return 0;
      }
    },
    getViewport: function getViewport() {
      var win = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        w = win.innerWidth || e.clientWidth || g.clientWidth,
        h = win.innerHeight || e.clientHeight || g.clientHeight;
      return {
        width: w,
        height: h
      };
    },
    getOffset: function getOffset(el) {
      var rect = el.getBoundingClientRect();
      return {
        top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
        left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
      };
    },
    generateZIndex: function generateZIndex() {
      this.zindex = this.zindex || 999;
      return ++this.zindex;
    },
    getCurrentZIndex: function getCurrentZIndex() {
      return this.zindex;
    },
    index: function index(element) {
      var children = element.parentNode.childNodes;
      var num = 0;
      for (var i = 0; i < children.length; i++) {
        if (children[i] === element) return num;
        if (children[i].nodeType === 1) num++;
      }
      return -1;
    },
    addMultipleClasses: function addMultipleClasses(element, className) {
      if (element.classList) {
        var styles = className.split(' ');
        for (var i = 0; i < styles.length; i++) {
          element.classList.add(styles[i]);
        }
      } else {
        var _styles = className.split(' ');
        for (var _i = 0; _i < _styles.length; _i++) {
          element.className += ' ' + _styles[_i];
        }
      }
    },
    addClass: function addClass(element, className) {
      if (element.classList) element.classList.add(className);else element.className += ' ' + className;
    },
    removeClass: function removeClass(element, className) {
      if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    },
    hasClass: function hasClass(element, className) {
      if (element) {
        if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
      }
      return false;
    },
    find: function find(element, selector) {
      return element.querySelectorAll(selector);
    },
    findSingle: function findSingle(element, selector) {
      return element.querySelector(selector);
    },
    getHeight: function getHeight(el) {
      var height = el.offsetHeight;
      var style = getComputedStyle(el);
      height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      return height;
    },
    getWidth: function getWidth(el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
      return width;
    },
    absolutePosition: function absolutePosition(element, target) {
      var elementDimensions = element.offsetParent ? {
        width: element.offsetWidth,
        height: element.offsetHeight
      } : this.getHiddenElementDimensions(element);
      var elementOuterHeight = elementDimensions.height;
      var elementOuterWidth = elementDimensions.width;
      var targetOuterHeight = target.offsetHeight;
      var targetOuterWidth = target.offsetWidth;
      var targetOffset = target.getBoundingClientRect();
      var windowScrollTop = this.getWindowScrollTop();
      var windowScrollLeft = this.getWindowScrollLeft();
      var viewport = this.getViewport();
      var top, left;
      if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
        top = targetOffset.top + windowScrollTop - elementOuterHeight;
        element.style.transformOrigin = 'bottom';
        if (top < 0) {
          top = windowScrollTop;
        }
      } else {
        top = targetOuterHeight + targetOffset.top + windowScrollTop;
        element.style.transformOrigin = 'top';
      }
      if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);else left = targetOffset.left + windowScrollLeft;
      element.style.top = top + 'px';
      element.style.left = left + 'px';
    },
    relativePosition: function relativePosition(element, target) {
      var elementDimensions = element.offsetParent ? {
        width: element.offsetWidth,
        height: element.offsetHeight
      } : this.getHiddenElementDimensions(element);
      var targetHeight = target.offsetHeight;
      var targetOffset = target.getBoundingClientRect();
      var viewport = this.getViewport();
      var top, left;
      if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
        top = -1 * elementDimensions.height;
        element.style.transformOrigin = 'bottom';
        if (targetOffset.top + top < 0) {
          top = -1 * targetOffset.top;
        }
      } else {
        top = targetHeight;
        element.style.transformOrigin = 'top';
      }
      if (elementDimensions.width > viewport.width) {
        // element wider then viewport and cannot fit on screen (align at left side of viewport)
        left = targetOffset.left * -1;
      } else if (targetOffset.left + elementDimensions.width > viewport.width) {
        // element wider then viewport but can be fit on screen (align at right side of viewport)
        left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
      } else {
        // element fits on screen (align with target)
        left = 0;
      }
      element.style.top = top + 'px';
      element.style.left = left + 'px';
    },
    getParentNode: function getParentNode(element) {
      var parent = element === null || element === void 0 ? void 0 : element.parentNode;
      if (parent && parent instanceof ShadowRoot && parent.host) {
        parent = parent.host;
      }
      return parent;
    },
    getParents: function getParents(element) {
      var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return element['parentNode'] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
    },
    getScrollableParents: function getScrollableParents(element) {
      var scrollableParents = [];
      if (element) {
        var parents = this.getParents(element);
        var overflowRegex = /(auto|scroll)/;
        var overflowCheck = function overflowCheck(node) {
          var styleDeclaration = window['getComputedStyle'](node, null);
          return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
        };
        var _iterator = _createForOfIteratorHelper$1(parents),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var parent = _step.value;
            var scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];
            if (scrollSelectors) {
              var selectors = scrollSelectors.split(',');
              var _iterator2 = _createForOfIteratorHelper$1(selectors),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var selector = _step2.value;
                  var el = this.findSingle(parent, selector);
                  if (el && overflowCheck(el)) {
                    scrollableParents.push(el);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return scrollableParents;
    },
    getHiddenElementOuterHeight: function getHiddenElementOuterHeight(element) {
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      var elementHeight = element.offsetHeight;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return elementHeight;
    },
    getHiddenElementOuterWidth: function getHiddenElementOuterWidth(element) {
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      var elementWidth = element.offsetWidth;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return elementWidth;
    },
    getHiddenElementDimensions: function getHiddenElementDimensions(element) {
      var dimensions = {};
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      dimensions.width = element.offsetWidth;
      dimensions.height = element.offsetHeight;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return dimensions;
    },
    fadeIn: function fadeIn(element, duration) {
      element.style.opacity = 0;
      var last = +new Date();
      var opacity = 0;
      var tick = function tick() {
        opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
        element.style.opacity = opacity;
        last = +new Date();
        if (+opacity < 1) {
          window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
        }
      };
      tick();
    },
    fadeOut: function fadeOut(element, ms) {
      var opacity = 1,
        interval = 50,
        duration = ms,
        gap = interval / duration;
      var fading = setInterval(function () {
        opacity -= gap;
        if (opacity <= 0) {
          opacity = 0;
          clearInterval(fading);
        }
        element.style.opacity = opacity;
      }, interval);
    },
    getUserAgent: function getUserAgent() {
      return navigator.userAgent;
    },
    appendChild: function appendChild(element, target) {
      if (this.isElement(target)) target.appendChild(element);else if (target.el && target.el.nativeElement) target.el.nativeElement.appendChild(element);else throw new Error('Cannot append ' + target + ' to ' + element);
    },
    scrollInView: function scrollInView(container, item) {
      var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
      var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
      var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
      var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
      var containerRect = container.getBoundingClientRect();
      var itemRect = item.getBoundingClientRect();
      var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
      var scroll = container.scrollTop;
      var elementHeight = container.clientHeight;
      var itemHeight = this.getOuterHeight(item);
      if (offset < 0) {
        container.scrollTop = scroll + offset;
      } else if (offset + itemHeight > elementHeight) {
        container.scrollTop = scroll + offset - elementHeight + itemHeight;
      }
    },
    clearSelection: function clearSelection() {
      if (window.getSelection) {
        if (window.getSelection().empty) {
          window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
          window.getSelection().removeAllRanges();
        }
      } else if (document['selection'] && document['selection'].empty) {
        try {
          document['selection'].empty();
        } catch (error) {
          //ignore IE bug
        }
      }
    },
    calculateScrollbarWidth: function calculateScrollbarWidth() {
      if (this.calculatedScrollbarWidth != null) return this.calculatedScrollbarWidth;
      var scrollDiv = document.createElement('div');
      scrollDiv.className = 'p-scrollbar-measure';
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      this.calculatedScrollbarWidth = scrollbarWidth;
      return scrollbarWidth;
    },
    getBrowser: function getBrowser() {
      if (!this.browser) {
        var matched = this.resolveUserAgent();
        this.browser = {};
        if (matched.browser) {
          this.browser[matched.browser] = true;
          this.browser['version'] = matched.version;
        }
        if (this.browser['chrome']) {
          this.browser['webkit'] = true;
        } else if (this.browser['webkit']) {
          this.browser['safari'] = true;
        }
      }
      return this.browser;
    },
    resolveUserAgent: function resolveUserAgent() {
      var ua = navigator.userAgent.toLowerCase();
      var match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
      return {
        browser: match[1] || '',
        version: match[2] || '0'
      };
    },
    isVisible: function isVisible(element) {
      return element.offsetParent != null;
    },
    invokeElementMethod: function invokeElementMethod(element, methodName, args) {
      element[methodName].apply(element, args);
    },
    isExist: function isExist(element) {
      return !!(element !== null && typeof element !== 'undefined' && element.nodeName && this.getParentNode(element));
    },
    getFocusableElements: function getFocusableElements(element) {
      var focusableElements = this.find(element, "button:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                [href][clientHeight][clientWidth]:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                input:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), select:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                textarea:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), [tabIndex]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                [contenteditable]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])");
      var visibleFocusableElements = [];
      var _iterator3 = _createForOfIteratorHelper$1(focusableElements),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var focusableElement = _step3.value;
          if (getComputedStyle(focusableElement).display != 'none' && getComputedStyle(focusableElement).visibility != 'hidden') visibleFocusableElements.push(focusableElement);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return visibleFocusableElements;
    },
    getFirstFocusableElement: function getFirstFocusableElement(element) {
      var focusableElements = this.getFocusableElements(element);
      return focusableElements.length > 0 ? focusableElements[0] : null;
    },
    getPreviousElementSibling: function getPreviousElementSibling(element, selector) {
      var previousElement = element.previousElementSibling;
      while (previousElement) {
        if (previousElement.matches(selector)) {
          return previousElement;
        } else {
          previousElement = previousElement.previousElementSibling;
        }
      }
      return null;
    },
    getNextElementSibling: function getNextElementSibling(element, selector) {
      var nextElement = element.nextElementSibling;
      while (nextElement) {
        if (nextElement.matches(selector)) {
          return nextElement;
        } else {
          nextElement = nextElement.nextElementSibling;
        }
      }
      return null;
    },
    isClickable: function isClickable(element) {
      var targetNode = element.nodeName;
      var parentNode = element.parentElement && element.parentElement.nodeName;
      return targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || parentNode == 'INPUT' || parentNode == 'BUTTON' || parentNode == 'A' || this.hasClass(element, 'p-button') || this.hasClass(element.parentElement, 'p-button') || this.hasClass(element.parentElement, 'p-checkbox') || this.hasClass(element.parentElement, 'p-radiobutton');
    },
    applyStyle: function applyStyle(element, style) {
      if (typeof style === 'string') {
        element.style.cssText = style;
      } else {
        for (var prop in style) {
          element.style[prop] = style[prop];
        }
      }
    },
    isIOS: function isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    },
    isAndroid: function isAndroid() {
      return /(android)/i.test(navigator.userAgent);
    },
    isTouchDevice: function isTouchDevice() {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    },
    isClient: function isClient() {
      return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    }
  };

  function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : i + ""; }
  function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var ConnectedOverlayScrollHandler = /*#__PURE__*/function () {
    function ConnectedOverlayScrollHandler(element) {
      var listener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      _classCallCheck(this, ConnectedOverlayScrollHandler);
      this.element = element;
      this.listener = listener;
    }
    return _createClass(ConnectedOverlayScrollHandler, [{
      key: "bindScrollListener",
      value: function bindScrollListener() {
        this.scrollableParents = DomHandler.getScrollableParents(this.element);
        for (var i = 0; i < this.scrollableParents.length; i++) {
          this.scrollableParents[i].addEventListener('scroll', this.listener);
        }
      }
    }, {
      key: "unbindScrollListener",
      value: function unbindScrollListener() {
        if (this.scrollableParents) {
          for (var i = 0; i < this.scrollableParents.length; i++) {
            this.scrollableParents[i].removeEventListener('scroll', this.listener);
          }
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.unbindScrollListener();
        this.element = null;
        this.listener = null;
        this.scrollableParents = null;
      }
    }]);
  }();

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var ObjectUtils = {
    equals: function equals(obj1, obj2, field) {
      if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.deepEquals(obj1, obj2);
    },
    deepEquals: function deepEquals(a, b) {
      if (a === b) return true;
      if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
        var arrA = Array.isArray(a),
          arrB = Array.isArray(b),
          i,
          length,
          key;
        if (arrA && arrB) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0;) if (!this.deepEquals(a[i], b[i])) return false;
          return true;
        }
        if (arrA != arrB) return false;
        var dateA = a instanceof Date,
          dateB = b instanceof Date;
        if (dateA != dateB) return false;
        if (dateA && dateB) return a.getTime() == b.getTime();
        var regexpA = a instanceof RegExp,
          regexpB = b instanceof RegExp;
        if (regexpA != regexpB) return false;
        if (regexpA && regexpB) return a.toString() == b.toString();
        var keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0;) {
          key = keys[i];
          if (!this.deepEquals(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    },
    resolveFieldData: function resolveFieldData(data, field) {
      if (data && Object.keys(data).length && field) {
        if (this.isFunction(field)) {
          return field(data);
        } else if (field.indexOf('.') === -1) {
          return data[field];
        } else {
          var fields = field.split('.');
          var value = data;
          for (var i = 0, len = fields.length; i < len; ++i) {
            if (value == null) {
              return null;
            }
            value = value[fields[i]];
          }
          return value;
        }
      } else {
        return null;
      }
    },
    isFunction: function isFunction(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    },
    filter: function filter(value, fields, filterValue) {
      var filteredItems = [];
      if (value) {
        var _iterator = _createForOfIteratorHelper(value),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            var _iterator2 = _createForOfIteratorHelper(fields),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var field = _step2.value;
                if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                  filteredItems.push(item);
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return filteredItems;
    },
    reorderArray: function reorderArray(value, from, to) {
      var target;
      if (value && from !== to) {
        if (to >= value.length) {
          target = to - value.length;
          while (target-- + 1) {
            value.push(undefined);
          }
        }
        value.splice(to, 0, value.splice(from, 1)[0]);
      }
    },
    findIndexInList: function findIndexInList(value, list) {
      var index = -1;
      if (list) {
        for (var i = 0; i < list.length; i++) {
          if (list[i] === value) {
            index = i;
            break;
          }
        }
      }
      return index;
    },
    contains: function contains(value, list) {
      if (value != null && list && list.length) {
        var _iterator3 = _createForOfIteratorHelper(list),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var val = _step3.value;
            if (this.equals(value, val)) return true;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return false;
    },
    insertIntoOrderedArray: function insertIntoOrderedArray(item, index, arr, sourceArr) {
      if (arr.length > 0) {
        var injected = false;
        for (var i = 0; i < arr.length; i++) {
          var currentItemIndex = this.findIndexInList(arr[i], sourceArr);
          if (currentItemIndex > index) {
            arr.splice(i, 0, item);
            injected = true;
            break;
          }
        }
        if (!injected) {
          arr.push(item);
        }
      } else {
        arr.push(item);
      }
    },
    removeAccents: function removeAccents(str) {
      if (str && str.search(/[\xC0-\xFF]/g) > -1) {
        str = str.replace(/[\xC0-\xC5]/g, 'A').replace(/[\xC6]/g, 'AE').replace(/[\xC7]/g, 'C').replace(/[\xC8-\xCB]/g, 'E').replace(/[\xCC-\xCF]/g, 'I').replace(/[\xD0]/g, 'D').replace(/[\xD1]/g, 'N').replace(/[\xD2-\xD6\xD8]/g, 'O').replace(/[\xD9-\xDC]/g, 'U').replace(/[\xDD]/g, 'Y').replace(/[\xDE]/g, 'P').replace(/[\xE0-\xE5]/g, 'a').replace(/[\xE6]/g, 'ae').replace(/[\xE7]/g, 'c').replace(/[\xE8-\xEB]/g, 'e').replace(/[\xEC-\xEF]/g, 'i').replace(/[\xF1]/g, 'n').replace(/[\xF2-\xF6\xF8]/g, 'o').replace(/[\xF9-\xFC]/g, 'u').replace(/[\xFE]/g, 'p').replace(/[\xFD\xFF]/g, 'y');
      }
      return str;
    },
    getVNodeProp: function getVNodeProp(vnode, prop) {
      var props = vnode._props;
      if (props) {
        var kebapProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        var propName = Object.prototype.hasOwnProperty.call(props, kebapProp) ? kebapProp : prop;
        return props[propName];
      }
      return null;
    },
    deepMerge: function deepMerge(target) {
      // 如果目标对象是 null 或 undefined，则返回一个空对象
      if (target == null) return {};

      // 合并操作的递归函数
      var merge = function merge(target, source) {
        // 创建一个新的目标对象，以避免修改原始对象
        var result = _objectSpread({}, target);
        Object.keys(source).forEach(function (key) {
          var targetValue = target[key];
          var sourceValue = source[key];

          // 如果源值是对象且目标值也是对象，则递归合并
          if (sourceValue && _typeof(sourceValue) === 'object' && !Array.isArray(sourceValue) && targetValue && _typeof(targetValue) === 'object' && !Array.isArray(targetValue)) {
            result[key] = merge(targetValue, sourceValue); // 递归合并
          }
          // 如果源值是数组，则合并数组（这里是简单的替换，可根据需求修改）
          else if (Array.isArray(sourceValue)) {
            result[key] = _toConsumableArray(sourceValue); // 使用新数组替换
          }
          // 否则直接覆盖目标值
          else {
            result[key] = sourceValue;
          }
        });
        return result;
      };

      // 合并所有源对象，返回新的目标对象
      for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
      }
      return sources.reduce(function (accumulated, source) {
        if (source != null) {
          return merge(accumulated, source);
        }
        return accumulated;
      }, _objectSpread({}, target)); // 使用一个新的目标对象来避免修改原始目标
    }
  };

  var lastId = 0;
  function UniqueComponentId () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pv_id_';
    lastId++;
    return "".concat(prefix).concat(lastId);
  }

  function EventBus () {
    var allHandlers = new Map();
    return {
      on: function on(type, handler) {
        var handlers = allHandlers.get(type);
        if (!handlers) handlers = [handler];else handlers.push(handler);
        allHandlers.set(type, handlers);
      },
      off: function off(type, handler) {
        var handlers = allHandlers.get(type);
        if (handlers) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        }
      },
      emit: function emit(type, evt) {
        var handlers = allHandlers.get(type);
        if (handlers) {
          handlers.slice().map(function (handler) {
            handler(evt);
          });
        }
      }
    };
  }

  exports.ConnectedOverlayScrollHandler = ConnectedOverlayScrollHandler;
  exports.DomHandler = DomHandler;
  exports.EventBus = EventBus;
  exports.ObjectUtils = ObjectUtils;
  exports.UniqueComponentId = UniqueComponentId;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});

this.primevue2 = this.primevue2 || {};
this.primevue2.api = (function (exports, utils) {
  'use strict';

  var FilterMatchMode = {
    STARTS_WITH: 'startsWith',
    CONTAINS: 'contains',
    NOT_CONTAINS: 'notContains',
    ENDS_WITH: 'endsWith',
    EQUALS: 'equals',
    NOT_EQUALS: 'notEquals',
    IN: 'in',
    LESS_THAN: 'lt',
    LESS_THAN_OR_EQUAL_TO: 'lte',
    GREATER_THAN: 'gt',
    GREATER_THAN_OR_EQUAL_TO: 'gte',
    BETWEEN: 'between',
    DATE_IS: 'dateIs',
    DATE_IS_NOT: 'dateIsNot',
    DATE_BEFORE: 'dateBefore',
    DATE_AFTER: 'dateAfter'
  };

  var FilterOperator = {
    AND: 'and',
    OR: 'or'
  };

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var FilterService = {
    filter: function filter(value, fields, filterValue, filterMatchMode, filterLocale) {
      var filteredItems = [];
      if (value) {
        var _iterator = _createForOfIteratorHelper(value),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            var _iterator2 = _createForOfIteratorHelper(fields),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var field = _step2.value;
                var fieldValue = utils.ObjectUtils.resolveFieldData(item, field);
                if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
                  filteredItems.push(item);
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return filteredItems;
    },
    filters: {
      startsWith: function startsWith(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.trim() === '') {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        var filterValue = utils.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        var stringValue = utils.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.slice(0, filterValue.length) === filterValue;
      },
      contains: function contains(value, filter, filterLocale) {
        if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        var filterValue = utils.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        var stringValue = utils.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue) !== -1;
      },
      notContains: function notContains(value, filter, filterLocale) {
        if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        var filterValue = utils.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        var stringValue = utils.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue) === -1;
      },
      endsWith: function endsWith(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.trim() === '') {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        var filterValue = utils.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        var stringValue = utils.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
      },
      equals: function equals(value, filter, filterLocale) {
        if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();else return utils.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == utils.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      },
      notEquals: function notEquals(value, filter, filterLocale) {
        if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
          return false;
        }
        if (value === undefined || value === null) {
          return true;
        }
        if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();else return utils.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != utils.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      },
      in: function _in(value, filter) {
        if (filter === undefined || filter === null || filter.length === 0) {
          return true;
        }
        for (var i = 0; i < filter.length; i++) {
          if (utils.ObjectUtils.equals(value, filter[i])) {
            return true;
          }
        }
        return false;
      },
      between: function between(value, filter) {
        if (filter == null || filter[0] == null || filter[1] == null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();else return filter[0] <= value && value <= filter[1];
      },
      lt: function lt(value, filter) {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();else return value < filter;
      },
      lte: function lte(value, filter) {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();else return value <= filter;
      },
      gt: function gt(value, filter) {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();else return value > filter;
      },
      gte: function gte(value, filter) {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();else return value >= filter;
      },
      dateIs: function dateIs(value, filter) {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        return value.toDateString() === filter.toDateString();
      },
      dateIsNot: function dateIsNot(value, filter) {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        return value.toDateString() !== filter.toDateString();
      },
      dateBefore: function dateBefore(value, filter) {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        return value.getTime() < filter.getTime();
      },
      dateAfter: function dateAfter(value, filter) {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        return value.getTime() > filter.getTime();
      }
    },
    register: function register(rule, fn) {
      this.filters[rule] = fn;
    }
  };

  var PrimeIcons = {
    ALIGN_CENTER: 'pi pi-align-center',
    ALIGN_JUSTIFY: 'pi pi-align-justify',
    ALIGN_LEFT: 'pi pi-align-left',
    ALIGN_RIGHT: 'pi pi-align-right',
    AMAZON: 'pi pi-amazon',
    ANDROID: 'pi pi-android',
    ANGLE_DOUBLE_DOWN: 'pi pi-angle-double-down',
    ANGLE_DOUBLE_LEFT: 'pi pi-angle-double-left',
    ANGLE_DOUBLE_RIGHT: 'pi pi-angle-double-right',
    ANGLE_DOUBLE_UP: 'pi pi-angle-double-up',
    ANGLE_DOWN: 'pi pi-angle-down',
    ANGLE_LEFT: 'pi pi-angle-left',
    ANGLE_RIGHT: 'pi pi-angle-right',
    ANGLE_UP: 'pi pi-angle-up',
    APPLE: 'pi pi-apple',
    ARROW_CIRCLE_DOWN: 'pi pi-arrow-circle-down',
    ARROW_CIRCLE_LEFT: 'pi pi-arrow-circle-left',
    ARROW_CIRCLE_RIGHT: 'pi pi-arrow-circle-right',
    ARROW_CIRCLE_UP: 'pi pi-arrow-circle-up',
    ARROW_DOWN: 'pi pi-arrow-down',
    ARROW_DOWN_LEFT: 'pi pi-arrow-down-left',
    ARROW_DOWN_RIGHT: 'pi pi-arrow-down-right',
    ARROW_LEFT: 'pi pi-arrow-left',
    ARROW_RIGHT: 'pi pi-arrow-right',
    ARROW_RIGHT_ARROW_LEFT: 'pi pi-arrow-right-arrow-left',
    ARROW_UP: 'pi pi-arrow-up',
    ARROW_UP_LEFT: 'pi pi-arrow-up-left',
    ARROW_UP_RIGHT: 'pi pi-arrow-up-right',
    ARROW_H: 'pi pi-arrows-h',
    ARROW_V: 'pi pi-arrows-v',
    ARROW_A: 'pi pi-arrows-alt',
    AT: 'pi pi-at',
    BACKWARD: 'pi pi-backward',
    BAN: 'pi pi-ban',
    BARS: 'pi pi-bars',
    BELL: 'pi pi-bell',
    BITCOIN: 'pi pi-bitcoin',
    BOLT: 'pi pi-bolt',
    BOOK: 'pi pi-book',
    BOOKMARK: 'pi pi-bookmark',
    BOOKMARK_FILL: 'pi pi-bookmark-fill',
    BOX: 'pi pi-box',
    BRIEFCASE: 'pi pi-briefcase',
    BUILDING: 'pi pi-building',
    CALENDAR: 'pi pi-calendar',
    CALENDAR_MINUS: 'pi pi-calendar-minus',
    CALENDAR_PLUS: 'pi pi-calendar-plus',
    CALENDAR_TIMES: 'pi pi-calendar-times',
    CALCULATOR: 'pi pi-calculator',
    CAMERA: 'pi pi-camera',
    CAR: 'pi pi-car',
    CARET_DOWN: 'pi pi-caret-down',
    CARET_LEFT: 'pi pi-caret-left',
    CARET_RIGHT: 'pi pi-caret-right',
    CARET_UP: 'pi pi-caret-up',
    CART_PLUS: 'pi pi-cart-plus',
    CHART_BAR: 'pi pi-chart-bar',
    CHART_LINE: 'pi pi-chart-line',
    CHART_PIE: 'pi pi-chart-pie',
    CHECK: 'pi pi-check',
    CHECK_CIRCLE: 'pi pi-check-circle',
    CHECK_SQUARE: 'pi pi-check-square',
    CHEVRON_CIRCLE_DOWN: 'pi pi-chevron-circle-down',
    CHEVRON_CIRCLE_LEFT: 'pi pi-chevron-circle-left',
    CHEVRON_CIRCLE_RIGHT: 'pi pi-chevron-circle-right',
    CHEVRON_CIRCLE_UP: 'pi pi-chevron-circle-up',
    CHEVRON_DOWN: 'pi pi-chevron-down',
    CHEVRON_LEFT: 'pi pi-chevron-left',
    CHEVRON_RIGHT: 'pi pi-chevron-right',
    CHEVRON_UP: 'pi pi-chevron-up',
    CIRCLE: 'pi pi-circle',
    CIRCLE_FILL: 'pi pi-circle-fill',
    CLOCK: 'pi pi-clock',
    CLONE: 'pi pi-clone',
    CLOUD: 'pi pi-cloud',
    CLOUD_DOWNLOAD: 'pi pi-cloud-download',
    CLOUD_UPLOAD: 'pi pi-cloud-upload',
    CODE: 'pi pi-code',
    COG: 'pi pi-cog',
    COMMENT: 'pi pi-comment',
    COMMENTS: 'pi pi-comments',
    COMPASS: 'pi pi-compass',
    COPY: 'pi pi-copy',
    CREDIT_CARD: 'pi pi-credit-card',
    DATABASE: 'pi pi-database',
    DELETELEFT: 'pi pi-delete-left',
    DESKTOP: 'pi pi-desktop',
    DIRECTIONS: 'pi pi-directions',
    DIRECTIONS_ALT: 'pi pi-directions-alt',
    DISCORD: 'pi pi-discord',
    DOLLAR: 'pi pi-dollar',
    DOWNLOAD: 'pi pi-download',
    EJECT: 'pi pi-eject',
    ELLIPSIS_H: 'pi pi-ellipsis-h',
    ELLIPSIS_V: 'pi pi-ellipsis-v',
    ENVELOPE: 'pi pi-envelope',
    ERASER: 'pi pi-eraser',
    EURO: 'pi pi-euro',
    EXCLAMATION_CIRCLE: 'pi pi-exclamation-circle',
    EXCLAMATION_TRIANGLE: 'pi pi-exclamation-triangle',
    EXTERNAL_LINK: 'pi pi-external-link',
    EYE: 'pi pi-eye',
    EYE_SLASH: 'pi pi-eye-slash',
    FACEBOOK: 'pi pi-facebook',
    FAST_BACKWARD: 'pi pi-fast-backward',
    FAST_FORWARD: 'pi pi-fast-forward',
    FILE: 'pi pi-file',
    FILE_EDIT: 'pi pi-file-edit',
    FILE_EXCEL: 'pi pi-file-excel',
    FILE_EXPORT: 'pi pi-file-export',
    FILE_IMPORT: 'pi pi-file-import',
    FILE_PDF: 'pi pi-file-pdf',
    FILE_WORD: 'pi pi-file-word',
    FILTER: 'pi pi-filter',
    FILTER_FILL: 'pi pi-filter-fill',
    FILTER_SLASH: 'pi pi-filter-slash',
    FLAG: 'pi pi-flag',
    FLAG_FILL: 'pi pi-flag-fill',
    FOLDER: 'pi pi-folder',
    FOLDER_OPEN: 'pi pi-folder-open',
    FORWARD: 'pi pi-forward',
    GIFT: 'pi pi-gift',
    GITHUB: 'pi pi-github',
    GLOBE: 'pi pi-globe',
    GOOGLE: 'pi pi-google',
    HASHTAG: 'pi pi-hashtag',
    HEART: 'pi pi-heart',
    HEART_FILL: 'pi pi-heart-fill',
    HISTORY: 'pi pi-history',
    HOURGLASS: 'pi pi-hourglass',
    HOME: 'pi pi-home',
    ID_CARD: 'pi pi-id-card',
    IMAGE: 'pi pi-image',
    IMAGES: 'pi pi-images',
    INBOX: 'pi pi-inbox',
    INFO: 'pi pi-info',
    INFO_CIRCLE: 'pi pi-info-circle',
    INSTAGRAM: 'pi pi-instagram',
    KEY: 'pi pi-key',
    LANGUAGE: 'pi pi-language',
    LINK: 'pi pi-link',
    LINKEDIN: 'pi pi-linkedin',
    LIST: 'pi pi-list',
    LOCK: 'pi pi-lock',
    LOCK_OPEN: 'pi pi-lock-open',
    MAP: 'pi pi-map',
    MAP_MARKER: 'pi pi-map-marker',
    MEGAPHONE: 'pi pi-megaphone',
    MICREPHONE: 'pi pi-microphone',
    MICROSOFT: 'pi pi-microsoft',
    MINUS: 'pi pi-minus',
    MINUS_CIRCLE: 'pi pi-minus-circle',
    MOBILE: 'pi pi-mobile',
    MONEY_BILL: 'pi pi-money-bill',
    MOON: 'pi pi-moon',
    PALETTE: 'pi pi-palette',
    PAPERCLIP: 'pi pi-paperclip',
    PAUSE: 'pi pi-pause',
    PAYPAL: 'pi pi-paypal',
    PENCIL: 'pi pi-pencil',
    PERCENTAGE: 'pi pi-percentage',
    PHONE: 'pi pi-phone',
    PLAY: 'pi pi-play',
    PLUS: 'pi pi-plus',
    PLUS_CIRCLE: 'pi pi-plus-circle',
    POUND: 'pi pi-pound',
    POWER_OFF: 'pi pi-power-off',
    PRIME: 'pi pi-prime',
    PRINT: 'pi pi-print',
    QRCODE: 'pi pi-qrcode',
    QUESTION: 'pi pi-question',
    QUESTION_CIRCLE: 'pi pi-question-circle',
    REDDIT: 'pi pi-reddit',
    REFRESH: 'pi pi-refresh',
    REPLAY: 'pi pi-replay',
    REPLY: 'pi pi-reply',
    SAVE: 'pi pi-save',
    SEARCH: 'pi pi-search',
    SEARCH_MINUS: 'pi pi-search-minus',
    SEARCH_PLUS: 'pi pi-search-plus',
    SEND: 'pi pi-send',
    SERVER: 'pi pi-server',
    SHARE_ALT: 'pi pi-share-alt',
    SHIELD: 'pi pi-shield',
    SHOPPING_BAG: 'pi pi-shopping-bag',
    SHOPPING_CART: 'pi pi-shopping-cart',
    SIGN_IN: 'pi pi-sign-in',
    SIGN_OUT: 'pi pi-sign-out',
    SITEMAP: 'pi pi-sitemap',
    SLACK: 'pi pi-slack',
    SLIDERS_H: 'pi pi-sliders-h',
    SLIDERS_V: 'pi pi-sliders-v',
    SORT: 'pi pi-sort',
    SORT_ALPHA_DOWN: 'pi pi-sort-alpha-down',
    SORT_ALPHA_ALT_DOWN: 'pi pi-sort-alpha-alt-down',
    SORT_ALPHA_UP: 'pi pi-sort-alpha-up',
    SORT_ALPHA_ALT_UP: 'pi pi-sort-alpha-alt-up',
    SORT_ALT: 'pi pi-sort-alt',
    SORT_ALT_SLASH: 'pi pi-sort-slash',
    SORT_AMOUNT_DOWN: 'pi pi-sort-amount-down',
    SORT_AMOUNT_DOWN_ALT: 'pi pi-sort-amount-down-alt',
    SORT_AMOUNT_UP: 'pi pi-sort-amount-up',
    SORT_AMOUNT_UP_ALT: 'pi pi-sort-amount-up-alt',
    SORT_DOWN: 'pi pi-sort-down',
    SORT_NUMERIC_DOWN: 'pi pi-sort-numeric-down',
    SORT_NUMERIC_ALT_DOWN: 'pi pi-sort-numeric-alt-down',
    SORT_NUMERIC_UP: 'pi pi-sort-numeric-up',
    SORT_NUMERIC_ALT_UP: 'pi pi-sort-numeric-alt-up',
    SORT_UP: 'pi pi-sort-up',
    SPINNER: 'pi pi-spinner',
    STAR: 'pi pi-star',
    STAR_FILL: 'pi pi-star-fill',
    STEP_BACKWARD: 'pi pi-step-backward',
    STEP_BACKWARD_ALT: 'pi pi-step-backward-alt',
    STEP_FORWARD: 'pi pi-step-forward',
    STEP_FORWARD_ALT: 'pi pi-step-forward-alt',
    STOP: 'pi pi-stop',
    STOPWATCH: 'pi pi-stop-watch',
    STOP_CIRCLE: 'pi pi-stop-circle',
    SUN: 'pi pi-sun',
    SYNC: 'pi pi-sync',
    TABLE: 'pi pi-table',
    TABLET: 'pi pi-tablet',
    TAG: 'pi pi-tag',
    TAGS: 'pi pi-tags',
    TELEGRAM: 'pi pi-telegram',
    TH_LARGE: 'pi pi-th-large',
    THUMBS_DOWN: 'pi pi-thumbs-down',
    THUMBS_DOWN_FILL: 'pi pi-thumbs-down-fill',
    THUMBS_UP: 'pi pi-thumbs-up',
    THUMBS_UP_FILL: 'pi pi-thumbs-up-fill',
    TICKET: 'pi pi-ticket',
    TIMES: 'pi pi-times',
    TIMES_CIRCLE: 'pi pi-times-circle',
    TRASH: 'pi pi-trash',
    TRUCK: 'pi pi-truck',
    TWITTER: 'pi pi-twitter',
    UNDO: 'pi pi-undo',
    UNLOCK: 'pi pi-unlock',
    UPLOAD: 'pi pi-upload',
    USER: 'pi pi-user',
    USER_EDIT: 'pi pi-user-edit',
    USER_MINUS: 'pi pi-user-minus',
    USER_PLUS: 'pi pi-user-plus',
    USERS: 'pi pi-users',
    VERIFIED: 'pi pi-verified',
    VIDEO: 'pi pi-video',
    VIMEO: 'pi pi-vimeo',
    VOLUME_DOWN: 'pi pi-volume-down',
    VOLUME_OFF: 'pi pi-volume-off',
    VOLUME_UP: 'pi pi-volume-up',
    WALLET: 'pi pi-wallet',
    WHATSAPP: 'pi pi-whatsapp',
    WIFI: 'pi pi-wifi',
    WINDOW_MAXIMIZE: 'pi pi-window-maximize',
    WINDOW_MINIMIZE: 'pi pi-window-minimize',
    WRENCH: 'pi pi-wrench',
    YOUTUBE: 'pi pi-youtube'
  };

  var ToastSeverities = {
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error',
    SUCCESS: 'success'
  };

  exports.FilterMatchMode = FilterMatchMode;
  exports.FilterOperator = FilterOperator;
  exports.FilterService = FilterService;
  exports.PrimeIcons = PrimeIcons;
  exports.ToastSeverity = ToastSeverities;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, primevue2.utils);

this.primevue2 = this.primevue2 || {};
this.primevue2.config = (function (api, utils) {
  'use strict';

  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var deepMerge = utils.ObjectUtils.deepMerge;
  var defaultOptions = {
    ripple: false,
    inputStyle: 'outlined',
    locale: {
      startsWith: 'Starts with',
      contains: 'Contains',
      notContains: 'Not contains',
      endsWith: 'Ends with',
      equals: 'Equals',
      notEquals: 'Not equals',
      noFilter: 'No Filter',
      lt: 'Less than',
      lte: 'Less than or equal to',
      gt: 'Greater than',
      gte: 'Greater than or equal to',
      dateIs: 'Date is',
      dateIsNot: 'Date is not',
      dateBefore: 'Date is before',
      dateAfter: 'Date is after',
      clear: 'Clear',
      apply: 'Apply',
      matchAll: 'Match All',
      matchAny: 'Match Any',
      addRule: 'Add Rule',
      removeRule: 'Remove Rule',
      accept: 'Yes',
      reject: 'No',
      choose: 'Choose',
      upload: 'Upload',
      cancel: 'Cancel',
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      today: 'Today',
      weekHeader: 'Wk',
      firstDayOfWeek: 0,
      dateFormat: 'mm/dd/yy',
      weak: 'Weak',
      medium: 'Medium',
      strong: 'Strong',
      passwordPrompt: 'Enter a password',
      emptyFilterMessage: 'No results found',
      emptyMessage: 'No available options'
    },
    filterMatchModeOptions: {
      text: [api.FilterMatchMode.STARTS_WITH, api.FilterMatchMode.CONTAINS, api.FilterMatchMode.NOT_CONTAINS, api.FilterMatchMode.ENDS_WITH, api.FilterMatchMode.EQUALS, api.FilterMatchMode.NOT_EQUALS],
      numeric: [api.FilterMatchMode.EQUALS, api.FilterMatchMode.NOT_EQUALS, api.FilterMatchMode.LESS_THAN, api.FilterMatchMode.LESS_THAN_OR_EQUAL_TO, api.FilterMatchMode.GREATER_THAN, api.FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
      date: [api.FilterMatchMode.DATE_IS, api.FilterMatchMode.DATE_IS_NOT, api.FilterMatchMode.DATE_BEFORE, api.FilterMatchMode.DATE_AFTER]
    }
  };
  var PrimeVue = {
    install: function install(Vue, options) {
      var configOptions = options ? deepMerge(defaultOptions, options) : _objectSpread({}, defaultOptions);
      Vue.prototype.$primevue = Vue.observable({
        config: configOptions
      });
    }
  };

  return PrimeVue;

})(primevue2.api, primevue2.utils);

this.primevue2 = this.primevue2 || {};
this.primevue2.styleclass = (function (utils) {
  'use strict';

  function _bind(el, binding) {
    el.$_pstyleclass_clicklistener = function () {
      var target = resolveTarget(el, binding);
      if (binding.value.toggleClass) {
        if (utils.DomHandler.hasClass(target, binding.value.toggleClass)) utils.DomHandler.removeClass(target, binding.value.toggleClass);else utils.DomHandler.addClass(target, binding.value.toggleClass);
      } else {
        if (target.offsetParent === null) enter(target, el, binding);else leave(target, binding);
      }
    };
    el.addEventListener('click', el.$_pstyleclass_clicklistener);
  }
  function _unbind(el) {
    if (el.$_pstyleclass_clicklistener) {
      el.addEventListener('click', el.$_pstyleclass_clicklistener);
      el.$_pstyleclass_clicklistener = null;
    }
    unbindDocumentListener(el);
  }
  function enter(target, el, binding) {
    if (binding.value.enterActiveClass) {
      if (!target.$_pstyleclass_animating) {
        target.$_pstyleclass_animating = true;
        if (binding.value.enterActiveClass === 'slidedown') {
          target.style.height = '0px';
          utils.DomHandler.removeClass(target, 'hidden');
          target.style.maxHeight = target.scrollHeight + 'px';
          utils.DomHandler.addClass(target, 'hidden');
          target.style.height = '';
        }
        utils.DomHandler.addClass(target, binding.value.enterActiveClass);
        if (binding.value.enterClass) {
          utils.DomHandler.removeClass(target, binding.value.enterClass);
        }
        target.$p_styleclass_enterlistener = function () {
          utils.DomHandler.removeClass(target, binding.value.enterActiveClass);
          if (binding.value.enterToClass) {
            utils.DomHandler.addClass(target, binding.value.enterToClass);
          }
          target.removeEventListener('animationend', target.$p_styleclass_enterlistener);
          if (binding.value.enterActiveClass === 'slidedown') {
            target.style.maxHeight = '';
          }
          target.$_pstyleclass_animating = false;
        };
        target.addEventListener('animationend', target.$p_styleclass_enterlistener);
      }
    } else {
      if (binding.value.enterClass) {
        utils.DomHandler.removeClass(target, binding.value.enterClass);
      }
      if (binding.value.enterToClass) {
        utils.DomHandler.addClass(target, binding.value.enterToClass);
      }
    }
    if (binding.value.hideOnOutsideClick) {
      bindDocumentListener(target, el, binding);
    }
  }
  function leave(target, binding) {
    if (binding.value.leaveActiveClass) {
      if (!target.$_pstyleclass_animating) {
        target.$_pstyleclass_animating = true;
        utils.DomHandler.addClass(target, binding.value.leaveActiveClass);
        if (binding.value.leaveClass) {
          utils.DomHandler.removeClass(target, binding.value.leaveClass);
        }
        target.$p_styleclass_leavelistener = function () {
          utils.DomHandler.removeClass(target, binding.value.leaveActiveClass);
          if (binding.value.leaveToClass) {
            utils.DomHandler.addClass(target, binding.value.leaveToClass);
          }
          target.removeEventListener('animationend', target.$p_styleclass_leavelistener);
          target.$_pstyleclass_animating = false;
        };
        target.addEventListener('animationend', target.$p_styleclass_leavelistener);
      }
    } else {
      if (binding.value.leaveClass) {
        utils.DomHandler.removeClass(target, binding.value.leaveClass);
      }
      if (binding.value.leaveToClass) {
        utils.DomHandler.addClass(target, binding.value.leaveToClass);
      }
    }
    if (binding.value.hideOnOutsideClick) {
      unbindDocumentListener(target);
    }
  }
  function resolveTarget(el, binding) {
    switch (binding.value.selector) {
      case '@next':
        return el.nextElementSibling;
      case '@prev':
        return el.previousElementSibling;
      case '@parent':
        return el.parentElement;
      case '@grandparent':
        return el.parentElement.parentElement;
      default:
        return document.querySelector(binding.value.selector);
    }
  }
  function bindDocumentListener(target, el, binding) {
    if (!target.$p_styleclass_documentlistener) {
      target.$p_styleclass_documentlistener = function (event) {
        if (!isVisible(target) || getComputedStyle(target).getPropertyValue('position') === 'static') {
          unbindDocumentListener(target);
        } else if (isOutsideClick(event, target, el)) {
          leave(target, binding);
        }
      };
      target.ownerDocument.addEventListener('click', target.$p_styleclass_documentlistener);
    }
  }
  function unbindDocumentListener(target) {
    if (target.$p_styleclass_documentlistener) {
      target.ownerDocument.removeEventListener('click', target.$p_styleclass_documentlistener);
      target.$p_styleclass_documentlistener = null;
    }
  }
  function isVisible(target) {
    return target.offsetParent !== null;
  }
  function isOutsideClick(event, target, el) {
    return !el.isSameNode(event.target) && !el.contains(event.target) && !target.contains(event.target);
  }
  var StyleClass = {
    bind: function bind(el, binding) {
      _bind(el, binding);
    },
    unbind: function unbind(el) {
      _unbind(el);
    }
  };

  return StyleClass;

})(primevue2.utils);

this.primevue2 = this.primevue2 || {};
this.primevue2.badgedirective = (function (utils) {
  'use strict';

  var BadgeDirective = {
    inserted: function inserted(el, binding) {
      var id = utils.UniqueComponentId() + '_badge';
      el.$_pbadgeId = id;
      var badge = document.createElement('span');
      badge.id = id;
      badge.className = 'p-badge p-component';
      for (var modifier in binding.modifiers) {
        utils.DomHandler.addClass(badge, 'p-badge-' + modifier);
      }
      if (binding.value != null) {
        badge.appendChild(document.createTextNode(binding.value));
        if (String(binding.value).length === 1) {
          utils.DomHandler.addClass(badge, 'p-badge-no-gutter');
        }
      } else {
        utils.DomHandler.addClass(badge, 'p-badge-dot');
      }
      utils.DomHandler.addClass(el, 'p-overlay-badge');
      el.appendChild(badge);
    },
    update: function update(el, binding) {
      utils.DomHandler.addClass(el, 'p-overlay-badge');
      if (binding.oldValue !== binding.value) {
        var badge = document.getElementById(el.$_pbadgeId);
        if (binding.value) {
          if (utils.DomHandler.hasClass(badge, 'p-badge-dot')) {
            utils.DomHandler.removeClass(badge, 'p-badge-dot');
          }
          if (String(binding.value).length === 1) utils.DomHandler.addClass(badge, 'p-badge-no-gutter');else utils.DomHandler.removeClass(badge, 'p-badge-no-gutter');
        } else if (!binding.value && !utils.DomHandler.hasClass(badge, 'p-badge-dot')) {
          utils.DomHandler.addClass(badge, 'p-badge-dot');
        }
        badge.innerHTML = '';
        badge.appendChild(document.createTextNode(binding.value));
      }
    }
  };
  BadgeDirective.install = function (Vue) {
    Vue.directive('badge', BadgeDirective);
  };

  return BadgeDirective;

})(primevue2.utils);

this.primevue2 = this.primevue2 || {};
this.primevue2.ripple = (function (utils) {
  'use strict';

  function bindEvents(el) {
    el.addEventListener('mousedown', onMouseDown);
  }
  function unbindEvents(el) {
    el.removeEventListener('mousedown', onMouseDown);
  }
  function create(el) {
    var ink = document.createElement('span');
    ink.className = 'p-ink';
    el.appendChild(ink);
    ink.addEventListener('animationend', onAnimationEnd);
  }
  function remove(el) {
    var ink = getInk(el);
    if (ink) {
      unbindEvents(el);
      ink.removeEventListener('animationend', onAnimationEnd);
      ink.remove();
    }
  }
  function onMouseDown(event) {
    var target = event.currentTarget;
    var ink = getInk(target);
    if (!ink || getComputedStyle(ink, null).display === 'none') {
      return;
    }
    utils.DomHandler.removeClass(ink, 'p-ink-active');
    if (!utils.DomHandler.getHeight(ink) && !utils.DomHandler.getWidth(ink)) {
      var d = Math.max(utils.DomHandler.getOuterWidth(target), utils.DomHandler.getOuterHeight(target));
      ink.style.height = d + 'px';
      ink.style.width = d + 'px';
    }
    var offset = utils.DomHandler.getOffset(target);
    var x = event.pageX - offset.left + document.body.scrollTop - utils.DomHandler.getWidth(ink) / 2;
    var y = event.pageY - offset.top + document.body.scrollLeft - utils.DomHandler.getHeight(ink) / 2;
    ink.style.top = y + 'px';
    ink.style.left = x + 'px';
    utils.DomHandler.addClass(ink, 'p-ink-active');
  }
  function onAnimationEnd(event) {
    utils.DomHandler.removeClass(event.currentTarget, 'p-ink-active');
  }
  function getInk(el) {
    for (var i = 0; i < el.children.length; i++) {
      if (typeof el.children[i].className === 'string' && el.children[i].className.indexOf('p-ink') !== -1) {
        return el.children[i];
      }
    }
    return null;
  }
  var Ripple = {
    inserted: function inserted(el, binding, vnode) {
      if (vnode.context.$primevue && vnode.context.$primevue.config.ripple) {
        create(el);
        bindEvents(el);
      }
    },
    unbind: function unbind(el) {
      remove(el);
    }
  };

  return Ripple;

})(primevue2.utils);

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

this.primevue2 = this.primevue2 || {};
this.primevue2.confirmationeventbus = (function (utils) {
	'use strict';

	var ConfirmationEventBus = utils.EventBus();

	return ConfirmationEventBus;

})(primevue2.utils);

this.primevue2 = this.primevue2 || {};
this.primevue2.toasteventbus = (function (utils) {
	'use strict';

	var ToastEventBus = utils.EventBus();

	return ToastEventBus;

})(primevue2.utils);

this.primevue2 = this.primevue2 || {};
this.primevue2.overlayeventbus = (function (utils) {
	'use strict';

	var OverlayEventBus = utils.EventBus();

	return OverlayEventBus;

})(primevue2.utils);

this.primevue2 = this.primevue2 || {};
this.primevue2.confirmationservice = (function (ConfirmationEventBus) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var ConfirmationEventBus__default = /*#__PURE__*/_interopDefaultLegacy(ConfirmationEventBus);

  var ConfirmationService = {
    install: function install(Vue) {
      Vue.prototype.$confirm = {
        require: function require(options) {
          ConfirmationEventBus__default["default"].emit('confirm', options);
        },
        close: function close() {
          ConfirmationEventBus__default["default"].emit('close');
        }
      };
    }
  };

  return ConfirmationService;

})(primevue2.confirmationeventbus);

this.primevue2 = this.primevue2 || {};
this.primevue2.terminalservice = (function (utils) {
	'use strict';

	var TerminalService = utils.EventBus();

	return TerminalService;

})(primevue2.utils);

this.primevue2 = this.primevue2 || {};
this.primevue2.toastservice = (function (ToastEventBus) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var ToastEventBus__default = /*#__PURE__*/_interopDefaultLegacy(ToastEventBus);

  var ToastService = {
    install: function install(Vue) {
      Vue.prototype.$toast = {
        add: function add(message) {
          ToastEventBus__default["default"].emit('add', message);
        },
        removeGroup: function removeGroup(group) {
          ToastEventBus__default["default"].emit('remove-group', group);
        },
        removeAllGroups: function removeAllGroups() {
          ToastEventBus__default["default"].emit('remove-all-groups');
        }
      };
    }
  };

  return ToastService;

})(primevue2.toasteventbus);

this.primevue2 = this.primevue2 || {};
this.primevue2.button = (function (Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  //
  var script = {
    name: 'Button',
    props: {
      label: {
        type: String
      },
      icon: {
        type: String
      },
      iconPos: {
        type: String,
        default: 'left'
      },
      badge: {
        type: String
      },
      badgeClass: {
        type: String,
        default: null
      },
      loading: {
        type: Boolean,
        default: false
      },
      loadingIcon: {
        type: String,
        default: 'pi pi-spinner pi-spin'
      }
    },
    computed: {
      buttonClass: function buttonClass() {
        return {
          'p-button p-component': true,
          'p-button-icon-only': this.icon && !this.label,
          'p-button-vertical': (this.iconPos === 'top' || this.iconPos === 'bottom') && this.label,
          'p-disabled': this.disabled
        };
      },
      iconClass: function iconClass() {
        return [this.loading ? this.loadingIcon : this.icon, 'p-button-icon', {
          'p-button-icon-left': this.iconPos === 'left' && this.label,
          'p-button-icon-right': this.iconPos === 'right' && this.label,
          'p-button-icon-top': this.iconPos === 'top' && this.label,
          'p-button-icon-bottom': this.iconPos === 'bottom' && this.label
        }];
      },
      badgeStyleClass: function badgeStyleClass() {
        return ['p-badge p-component', this.badgeClass, {
          'p-badge-no-gutter': this.badge && String(this.badge).length === 1
        }];
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
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("button", _vm._g({
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      class: _vm.buttonClass,
      attrs: {
        type: "button"
      }
    }, _vm.$listeners), [_vm._t("default", function () {
      return [_vm.loading && !_vm.icon ? _c("span", {
        class: _vm.iconClass
      }) : _vm._e(), _vm._v(" "), _vm.icon ? _c("span", {
        class: _vm.iconClass
      }) : _vm._e(), _vm._v(" "), _c("span", {
        staticClass: "p-button-label"
      }, [_vm._v(_vm._s(_vm.label || " "))]), _vm._v(" "), _vm.badge ? _c("span", {
        staticClass: "p-badge",
        class: _vm.badgeStyleClass
      }, [_vm._v(_vm._s(_vm.badge))]) : _vm._e()];
    })], 2);
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

  return __vue_component__;

})(primevue2.ripple);

this.primevue2 = this.primevue2 || {};
this.primevue2.inputtext = (function () {
  'use strict';

  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  //
  //
  //
  //

  var script = {
    name: 'InputText',
    props: {
      value: null
    },
    computed: {
      listeners: function listeners() {
        var _this = this;
        return _objectSpread(_objectSpread({}, this.$listeners), {}, {
          input: function input(event) {
            return _this.$emit('input', event.target.value);
          }
        });
      },
      filled: function filled() {
        return this.value != null && this.value.toString().length > 0;
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
    return _c("input", _vm._g({
      class: ["p-inputtext p-component", {
        "p-filled": _vm.filled
      }],
      domProps: {
        value: _vm.value
      }
    }, _vm.listeners));
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

  return __vue_component__;

})();

this.primevue2 = this.primevue2 || {};
this.primevue2.inputnumber = (function (InputText, Button) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var InputText__default = /*#__PURE__*/_interopDefaultLegacy(InputText);
  var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);

  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var script = {
    name: 'InputNumber',
    inheritAttrs: false,
    props: {
      value: {
        type: Number,
        default: null
      },
      format: {
        type: Boolean,
        default: true
      },
      showButtons: {
        type: Boolean,
        default: false
      },
      buttonLayout: {
        type: String,
        default: 'stacked'
      },
      incrementButtonClass: {
        type: String,
        default: null
      },
      decrementButtonClass: {
        type: String,
        default: null
      },
      incrementButtonIcon: {
        type: String,
        default: 'pi pi-angle-up'
      },
      decrementButtonIcon: {
        type: String,
        default: 'pi pi-angle-down'
      },
      locale: {
        type: String,
        default: undefined
      },
      localeMatcher: {
        type: String,
        default: undefined
      },
      mode: {
        type: String,
        default: 'decimal'
      },
      prefix: {
        type: String,
        default: null
      },
      suffix: {
        type: String,
        default: null
      },
      currency: {
        type: String,
        default: undefined
      },
      currencyDisplay: {
        type: String,
        default: undefined
      },
      useGrouping: {
        type: Boolean,
        default: true
      },
      minFractionDigits: {
        type: Number,
        default: undefined
      },
      maxFractionDigits: {
        type: Number,
        default: undefined
      },
      min: {
        type: Number,
        default: null
      },
      max: {
        type: Number,
        default: null
      },
      step: {
        type: Number,
        default: 1
      },
      allowEmpty: {
        type: Boolean,
        default: true
      },
      styles: null,
      className: null,
      inputStyle: null,
      inputClass: null
    },
    numberFormat: null,
    _numeral: null,
    _decimal: null,
    _group: null,
    _minusSign: null,
    _currency: null,
    _suffix: null,
    _prefix: null,
    _index: null,
    groupChar: '',
    isSpecialChar: null,
    prefixChar: null,
    suffixChar: null,
    timer: null,
    data: function data() {
      return {
        d_value: null,
        focused: false
      };
    },
    watch: {
      value: function value(newValue) {
        this.d_value = newValue;
      },
      locale: function locale(newValue, oldValue) {
        this.updateConstructParser(newValue, oldValue);
      },
      localeMatcher: function localeMatcher(newValue, oldValue) {
        this.updateConstructParser(newValue, oldValue);
      },
      mode: function mode(newValue, oldValue) {
        this.updateConstructParser(newValue, oldValue);
      },
      currency: function currency(newValue, oldValue) {
        this.updateConstructParser(newValue, oldValue);
      },
      currencyDisplay: function currencyDisplay(newValue, oldValue) {
        this.updateConstructParser(newValue, oldValue);
      },
      useGrouping: function useGrouping(newValue, oldValue) {
        this.updateConstructParser(newValue, oldValue);
      },
      minFractionDigits: function minFractionDigits(newValue, oldValue) {
        this.updateConstructParser(newValue, oldValue);
      },
      maxFractionDigits: function maxFractionDigits(newValue, oldValue) {
        this.updateConstructParser(newValue, oldValue);
      },
      suffix: function suffix(newValue, oldValue) {
        this.updateConstructParser(newValue, oldValue);
      },
      prefix: function prefix(newValue, oldValue) {
        this.updateConstructParser(newValue, oldValue);
      }
    },
    created: function created() {
      this.constructParser();
    },
    methods: {
      getOptions: function getOptions() {
        return {
          localeMatcher: this.localeMatcher,
          style: this.mode,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          useGrouping: this.useGrouping,
          minimumFractionDigits: this.minFractionDigits,
          maximumFractionDigits: this.maxFractionDigits
        };
      },
      constructParser: function constructParser() {
        this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
        var numerals = _toConsumableArray(new Intl.NumberFormat(this.locale, {
          useGrouping: false
        }).format(9876543210)).reverse();
        var index = new Map(numerals.map(function (d, i) {
          return [d, i];
        }));
        this._numeral = new RegExp("[".concat(numerals.join(''), "]"), 'g');
        this._group = this.getGroupingExpression();
        this._minusSign = this.getMinusSignExpression();
        this._currency = this.getCurrencyExpression();
        this._decimal = this.getDecimalExpression();
        this._suffix = this.getSuffixExpression();
        this._prefix = this.getPrefixExpression();
        this._index = function (d) {
          return index.get(d);
        };
      },
      updateConstructParser: function updateConstructParser(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.constructParser();
        }
      },
      escapeRegExp: function escapeRegExp(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      },
      getDecimalExpression: function getDecimalExpression() {
        var formatter = new Intl.NumberFormat(this.locale, _objectSpread(_objectSpread({}, this.getOptions()), {}, {
          useGrouping: false
        }));
        return new RegExp("[".concat(formatter.format(1.1).replace(this._currency, '').trim().replace(this._numeral, ''), "]"), 'g');
      },
      getGroupingExpression: function getGroupingExpression() {
        var formatter = new Intl.NumberFormat(this.locale, {
          useGrouping: true
        });
        this.groupChar = formatter.format(1000000).trim().replace(this._numeral, '').charAt(0);
        return new RegExp("[".concat(this.groupChar, "]"), 'g');
      },
      getMinusSignExpression: function getMinusSignExpression() {
        var formatter = new Intl.NumberFormat(this.locale, {
          useGrouping: false
        });
        return new RegExp("[".concat(formatter.format(-1).trim().replace(this._numeral, ''), "]"), 'g');
      },
      getCurrencyExpression: function getCurrencyExpression() {
        if (this.currency) {
          var formatter = new Intl.NumberFormat(this.locale, {
            style: 'currency',
            currency: this.currency,
            currencyDisplay: this.currencyDisplay,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
          return new RegExp("[".concat(formatter.format(1).replace(/\s/g, '').replace(this._numeral, '').replace(this._group, ''), "]"), 'g');
        }
        return new RegExp('[]', 'g');
      },
      getPrefixExpression: function getPrefixExpression() {
        if (this.prefix) {
          this.prefixChar = this.prefix;
        } else {
          var formatter = new Intl.NumberFormat(this.locale, {
            style: this.mode,
            currency: this.currency,
            currencyDisplay: this.currencyDisplay
          });
          this.prefixChar = formatter.format(1).split('1')[0];
        }
        return new RegExp("".concat(this.escapeRegExp(this.prefixChar || '')), 'g');
      },
      getSuffixExpression: function getSuffixExpression() {
        if (this.suffix) {
          this.suffixChar = this.suffix;
        } else {
          var formatter = new Intl.NumberFormat(this.locale, {
            style: this.mode,
            currency: this.currency,
            currencyDisplay: this.currencyDisplay,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
          this.suffixChar = formatter.format(1).split('1')[1];
        }
        return new RegExp("".concat(this.escapeRegExp(this.suffixChar || '')), 'g');
      },
      formatValue: function formatValue(value) {
        if (value != null) {
          if (value === '-') {
            // Minus sign
            return value;
          }
          if (this.format) {
            var formatter = new Intl.NumberFormat(this.locale, this.getOptions());
            var formattedValue = formatter.format(value);
            if (this.prefix) {
              formattedValue = this.prefix + formattedValue;
            }
            if (this.suffix) {
              formattedValue = formattedValue + this.suffix;
            }
            return formattedValue;
          }
          return value.toString();
        }
        return '';
      },
      parseValue: function parseValue(text) {
        var filteredText = text.replace(this._suffix, '').replace(this._prefix, '').trim().replace(/\s/g, '').replace(this._currency, '').replace(this._group, '').replace(this._minusSign, '-').replace(this._decimal, '.').replace(this._numeral, this._index);
        if (filteredText) {
          if (filteredText === '-')
            // Minus sign
            return filteredText;
          var parsedValue = +filteredText;
          return isNaN(parsedValue) ? null : parsedValue;
        }
        return null;
      },
      repeat: function repeat(event, interval, dir) {
        var _this = this;
        var i = interval || 500;
        this.clearTimer();
        this.timer = setTimeout(function () {
          _this.repeat(event, 40, dir);
        }, i);
        this.spin(event, dir);
      },
      spin: function spin(event, dir) {
        if (this.$refs.input) {
          var step = this.step * dir;
          var currentValue = this.parseValue(this.$refs.input.$el.value) || 0;
          var newValue = this.validateValue(currentValue + step);
          this.updateInput(newValue, null, 'spin');
          this.updateModel(event, newValue);
          this.handleOnInput(event, currentValue, newValue);
        }
      },
      onUpButtonMouseDown: function onUpButtonMouseDown(event) {
        if (!this.$attrs.disabled) {
          this.$refs.input.$el.focus();
          this.repeat(event, null, 1);
          event.preventDefault();
        }
      },
      onUpButtonMouseUp: function onUpButtonMouseUp() {
        if (!this.$attrs.disabled) {
          this.clearTimer();
        }
      },
      onUpButtonMouseLeave: function onUpButtonMouseLeave() {
        if (!this.$attrs.disabled) {
          this.clearTimer();
        }
      },
      onUpButtonKeyUp: function onUpButtonKeyUp() {
        if (!this.$attrs.disabled) {
          this.clearTimer();
        }
      },
      onUpButtonKeyDown: function onUpButtonKeyDown(event) {
        if (event.keyCode === 32 || event.keyCode === 13) {
          this.repeat(event, null, 1);
        }
      },
      onDownButtonMouseDown: function onDownButtonMouseDown(event) {
        if (!this.$attrs.disabled) {
          this.$refs.input.$el.focus();
          this.repeat(event, null, -1);
          event.preventDefault();
        }
      },
      onDownButtonMouseUp: function onDownButtonMouseUp() {
        if (!this.$attrs.disabled) {
          this.clearTimer();
        }
      },
      onDownButtonMouseLeave: function onDownButtonMouseLeave() {
        if (!this.$attrs.disabled) {
          this.clearTimer();
        }
      },
      onDownButtonKeyUp: function onDownButtonKeyUp() {
        if (!this.$attrs.disabled) {
          this.clearTimer();
        }
      },
      onDownButtonKeyDown: function onDownButtonKeyDown(event) {
        if (event.keyCode === 32 || event.keyCode === 13) {
          this.repeat(event, null, -1);
        }
      },
      onUserInput: function onUserInput() {
        if (this.isSpecialChar) {
          this.$refs.input.$el.value = this.lastValue;
        }
        this.isSpecialChar = false;
      },
      onInputKeyDown: function onInputKeyDown(event) {
        this.lastValue = event.target.value;
        if (event.shiftKey || event.altKey) {
          this.isSpecialChar = true;
          return;
        }
        var selectionStart = event.target.selectionStart;
        var selectionEnd = event.target.selectionEnd;
        var inputValue = event.target.value;
        var newValueStr = null;
        if (event.altKey) {
          event.preventDefault();
        }
        switch (event.which) {
          //up
          case 38:
            this.spin(event, 1);
            event.preventDefault();
            break;

          //down
          case 40:
            this.spin(event, -1);
            event.preventDefault();
            break;

          //left
          case 37:
            if (!this.isNumeralChar(inputValue.charAt(selectionStart - 1))) {
              event.preventDefault();
            }
            break;

          //right
          case 39:
            if (!this.isNumeralChar(inputValue.charAt(selectionStart))) {
              event.preventDefault();
            }
            break;

          //enter
          case 13:
            newValueStr = this.validateValue(this.parseValue(inputValue));
            this.$refs.input.$el.value = this.formatValue(newValueStr);
            this.$refs.input.$el.setAttribute('aria-valuenow', newValueStr);
            this.updateModel(event, newValueStr);
            break;

          //backspace
          case 8:
            {
              event.preventDefault();
              if (selectionStart === selectionEnd) {
                var deleteChar = inputValue.charAt(selectionStart - 1);
                var _this$getDecimalCharI = this.getDecimalCharIndexes(inputValue),
                  decimalCharIndex = _this$getDecimalCharI.decimalCharIndex,
                  decimalCharIndexWithoutPrefix = _this$getDecimalCharI.decimalCharIndexWithoutPrefix;
                if (this.isNumeralChar(deleteChar)) {
                  var decimalLength = this.getDecimalLength(inputValue);
                  if (this._group.test(deleteChar)) {
                    this._group.lastIndex = 0;
                    newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
                  } else if (this._decimal.test(deleteChar)) {
                    this._decimal.lastIndex = 0;
                    if (decimalLength) {
                      this.$refs.input.$el.setSelectionRange(selectionStart - 1, selectionStart - 1);
                    } else {
                      newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                    }
                  } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                    var insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? '' : '0';
                    newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
                  } else if (decimalCharIndexWithoutPrefix === 1) {
                    newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                    newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
                  } else {
                    newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                  }
                }
                this.updateValue(event, newValueStr, null, 'delete-single');
              } else {
                newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
                this.updateValue(event, newValueStr, null, 'delete-range');
              }
              break;
            }

          // del
          case 46:
            event.preventDefault();
            if (selectionStart === selectionEnd) {
              var _deleteChar = inputValue.charAt(selectionStart);
              var _this$getDecimalCharI2 = this.getDecimalCharIndexes(inputValue),
                _decimalCharIndex = _this$getDecimalCharI2.decimalCharIndex,
                _decimalCharIndexWithoutPrefix = _this$getDecimalCharI2.decimalCharIndexWithoutPrefix;
              if (this.isNumeralChar(_deleteChar)) {
                var _decimalLength = this.getDecimalLength(inputValue);
                if (this._group.test(_deleteChar)) {
                  this._group.lastIndex = 0;
                  newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
                } else if (this._decimal.test(_deleteChar)) {
                  this._decimal.lastIndex = 0;
                  if (_decimalLength) {
                    this.$refs.input.$el.setSelectionRange(selectionStart + 1, selectionStart + 1);
                  } else {
                    newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                  }
                } else if (_decimalCharIndex > 0 && selectionStart > _decimalCharIndex) {
                  var _insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < _decimalLength ? '' : '0';
                  newValueStr = inputValue.slice(0, selectionStart) + _insertedText + inputValue.slice(selectionStart + 1);
                } else if (_decimalCharIndexWithoutPrefix === 1) {
                  newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
                  newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
                } else {
                  newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                }
              }
              this.updateValue(event, newValueStr, null, 'delete-back-single');
            } else {
              newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
              this.updateValue(event, newValueStr, null, 'delete-range');
            }
            break;
        }
      },
      onInputKeyUp: function onInputKeyUp(event) {
        this.$emit('keyup', event);
      },
      onInputKeyPress: function onInputKeyPress(event) {
        event.preventDefault();
        var code = event.which || event.keyCode;
        var char = String.fromCharCode(code);
        var isDecimalSign = this.isDecimalSign(char);
        var isMinusSign = this.isMinusSign(char);
        if (48 <= code && code <= 57 || isMinusSign || isDecimalSign) {
          this.insert(event, char, {
            isDecimalSign: isDecimalSign,
            isMinusSign: isMinusSign
          });
        }
      },
      onPaste: function onPaste(event) {
        event.preventDefault();
        var data = (event.clipboardData || window['clipboardData']).getData('Text');
        if (data) {
          var filteredData = this.parseValue(data);
          if (filteredData != null) {
            this.insert(event, filteredData.toString());
          }
        }
      },
      allowMinusSign: function allowMinusSign() {
        return this.min === null || this.min < 0;
      },
      isMinusSign: function isMinusSign(char) {
        if (this._minusSign.test(char) || char === '-') {
          this._minusSign.lastIndex = 0;
          return true;
        }
        return false;
      },
      isDecimalSign: function isDecimalSign(char) {
        if (this._decimal.test(char)) {
          this._decimal.lastIndex = 0;
          return true;
        }
        return false;
      },
      isDecimalMode: function isDecimalMode() {
        return this.mode === 'decimal';
      },
      getDecimalCharIndexes: function getDecimalCharIndexes(val) {
        var decimalCharIndex = val.search(this._decimal);
        this._decimal.lastIndex = 0;
        var filteredVal = val.replace(this._prefix, '').trim().replace(/\s/g, '').replace(this._currency, '');
        var decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
        this._decimal.lastIndex = 0;
        return {
          decimalCharIndex: decimalCharIndex,
          decimalCharIndexWithoutPrefix: decimalCharIndexWithoutPrefix
        };
      },
      getCharIndexes: function getCharIndexes(val) {
        var decimalCharIndex = val.search(this._decimal);
        this._decimal.lastIndex = 0;
        var minusCharIndex = val.search(this._minusSign);
        this._minusSign.lastIndex = 0;
        var suffixCharIndex = val.search(this._suffix);
        this._suffix.lastIndex = 0;
        var currencyCharIndex = val.search(this._currency);
        this._currency.lastIndex = 0;
        return {
          decimalCharIndex: decimalCharIndex,
          minusCharIndex: minusCharIndex,
          suffixCharIndex: suffixCharIndex,
          currencyCharIndex: currencyCharIndex
        };
      },
      insert: function insert(event, text) {
        var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
          isDecimalSign: false,
          isMinusSign: false
        };
        var minusCharIndexOnText = text.search(this._minusSign);
        this._minusSign.lastIndex = 0;
        if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
          return;
        }
        var selectionStart = this.$refs.input.$el.selectionStart;
        var selectionEnd = this.$refs.input.$el.selectionEnd;
        var inputValue = this.$refs.input.$el.value.trim();
        var _this$getCharIndexes = this.getCharIndexes(inputValue),
          decimalCharIndex = _this$getCharIndexes.decimalCharIndex,
          minusCharIndex = _this$getCharIndexes.minusCharIndex,
          suffixCharIndex = _this$getCharIndexes.suffixCharIndex,
          currencyCharIndex = _this$getCharIndexes.currencyCharIndex;
        var newValueStr;
        if (sign.isMinusSign) {
          if (selectionStart === 0) {
            newValueStr = inputValue;
            if (minusCharIndex === -1 || selectionEnd !== 0) {
              newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
            }
            this.updateValue(event, newValueStr, text, 'insert');
          }
        } else if (sign.isDecimalSign) {
          if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
            this.updateValue(event, inputValue, text, 'insert');
          } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
            newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, text, 'insert');
          } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
            newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, text, 'insert');
          }
        } else {
          var maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
          var operation = selectionStart !== selectionEnd ? 'range-insert' : 'insert';
          if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
            if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
              var charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
              newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
              this.updateValue(event, newValueStr, text, operation);
            }
          } else {
            newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, text, operation);
          }
        }
      },
      insertText: function insertText(value, text, start, end) {
        var textSplit = text === '.' ? text : text.split('.');
        if (textSplit.length === 2) {
          var decimalCharIndex = value.slice(start, end).search(this._decimal);
          this._decimal.lastIndex = 0;
          return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : value || this.formatValue(text);
        } else if (end - start === value.length) {
          return this.formatValue(text);
        } else if (start === 0) {
          return text + value.slice(end);
        } else if (end === value.length) {
          return value.slice(0, start) + text;
        } else {
          return value.slice(0, start) + text + value.slice(end);
        }
      },
      deleteRange: function deleteRange(value, start, end) {
        var newValueStr;
        if (end - start === value.length) newValueStr = '';else if (start === 0) newValueStr = value.slice(end);else if (end === value.length) newValueStr = value.slice(0, start);else newValueStr = value.slice(0, start) + value.slice(end);
        return newValueStr;
      },
      initCursor: function initCursor() {
        var selectionStart = this.$refs.input.$el.selectionStart;
        var inputValue = this.$refs.input.$el.value;
        var valueLength = inputValue.length;
        var index = null;

        // remove prefix
        var prefixLength = (this.prefixChar || '').length;
        inputValue = inputValue.replace(this._prefix, '');
        selectionStart = selectionStart - prefixLength;
        var char = inputValue.charAt(selectionStart);
        if (this.isNumeralChar(char)) {
          return selectionStart + prefixLength;
        }

        //left
        var i = selectionStart - 1;
        while (i >= 0) {
          char = inputValue.charAt(i);
          if (this.isNumeralChar(char)) {
            index = i + prefixLength;
            break;
          } else {
            i--;
          }
        }
        if (index !== null) {
          this.$refs.input.$el.setSelectionRange(index + 1, index + 1);
        } else {
          i = selectionStart;
          while (i < valueLength) {
            char = inputValue.charAt(i);
            if (this.isNumeralChar(char)) {
              index = i + prefixLength;
              break;
            } else {
              i++;
            }
          }
          if (index !== null) {
            this.$refs.input.$el.setSelectionRange(index, index);
          }
        }
        return index || 0;
      },
      onInputClick: function onInputClick() {
        this.initCursor();
      },
      isNumeralChar: function isNumeralChar(char) {
        if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
          this.resetRegex();
          return true;
        }
        return false;
      },
      resetRegex: function resetRegex() {
        this._numeral.lastIndex = 0;
        this._decimal.lastIndex = 0;
        this._group.lastIndex = 0;
        this._minusSign.lastIndex = 0;
      },
      updateValue: function updateValue(event, valueStr, insertedValueStr, operation) {
        var currentValue = this.$refs.input.$el.value;
        var newValue = null;
        if (valueStr != null) {
          newValue = this.parseValue(valueStr);
          newValue = !newValue && !this.allowEmpty ? 0 : newValue;
          this.updateInput(newValue, insertedValueStr, operation, valueStr);
          this.handleOnInput(event, currentValue, newValue);
        }
      },
      handleOnInput: function handleOnInput(event, currentValue, newValue) {
        if (this.isValueChanged(currentValue, newValue)) {
          this.$emit('input', newValue);
        }
      },
      isValueChanged: function isValueChanged(currentValue, newValue) {
        if (newValue === null && currentValue !== null) {
          return true;
        }
        if (newValue != null) {
          var parsedCurrentValue = typeof currentValue === 'string' ? this.parseValue(currentValue) : currentValue;
          return newValue !== parsedCurrentValue;
        }
        return false;
      },
      validateValue: function validateValue(value) {
        if (value === '-' || value == null) {
          return null;
        }
        if (this.min != null && value < this.min) {
          return this.min;
        }
        if (this.max != null && value > this.max) {
          return this.max;
        }
        return value;
      },
      updateInput: function updateInput(value, insertedValueStr, operation, valueStr) {
        insertedValueStr = insertedValueStr || '';
        var inputValue = this.$refs.input.$el.value;
        var newValue = this.formatValue(value);
        var currentLength = inputValue.length;
        if (newValue !== valueStr) {
          newValue = this.concatValues(newValue, valueStr);
        }
        if (currentLength === 0) {
          this.$refs.input.$el.value = newValue;
          this.$refs.input.$el.setSelectionRange(0, 0);
          var index = this.initCursor();
          var selectionEnd = index + insertedValueStr.length;
          this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
        } else {
          var selectionStart = this.$refs.input.$el.selectionStart;
          var _selectionEnd = this.$refs.input.$el.selectionEnd;
          this.$refs.input.$el.value = newValue;
          var newLength = newValue.length;
          if (operation === 'range-insert') {
            var startValue = this.parseValue((inputValue || '').slice(0, selectionStart));
            var startValueStr = startValue !== null ? startValue.toString() : '';
            var startExpr = startValueStr.split('').join("(".concat(this.groupChar, ")?"));
            var sRegex = new RegExp(startExpr, 'g');
            sRegex.test(newValue);
            var tExpr = insertedValueStr.split('').join("(".concat(this.groupChar, ")?"));
            var tRegex = new RegExp(tExpr, 'g');
            tRegex.test(newValue.slice(sRegex.lastIndex));
            _selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
            this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
          } else if (newLength === currentLength) {
            if (operation === 'insert' || operation === 'delete-back-single') this.$refs.input.$el.setSelectionRange(_selectionEnd + 1, _selectionEnd + 1);else if (operation === 'delete-single') this.$refs.input.$el.setSelectionRange(_selectionEnd - 1, _selectionEnd - 1);else if (operation === 'delete-range' || operation === 'spin') this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
          } else if (operation === 'delete-back-single') {
            var prevChar = inputValue.charAt(_selectionEnd - 1);
            var nextChar = inputValue.charAt(_selectionEnd);
            var diff = currentLength - newLength;
            var isGroupChar = this._group.test(nextChar);
            if (isGroupChar && diff === 1) {
              _selectionEnd += 1;
            } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
              _selectionEnd += -1 * diff + 1;
            }
            this._group.lastIndex = 0;
            this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
          } else if (inputValue === '-' && operation === 'insert') {
            this.$refs.input.$el.setSelectionRange(0, 0);
            var _index = this.initCursor();
            var _selectionEnd2 = _index + insertedValueStr.length + 1;
            this.$refs.input.$el.setSelectionRange(_selectionEnd2, _selectionEnd2);
          } else {
            _selectionEnd = _selectionEnd + (newLength - currentLength);
            this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
          }
        }
        this.$refs.input.$el.setAttribute('aria-valuenow', value);
      },
      concatValues: function concatValues(val1, val2) {
        if (val1 && val2) {
          var decimalCharIndex = val2.search(this._decimal);
          this._decimal.lastIndex = 0;
          return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
        }
        return val1;
      },
      getDecimalLength: function getDecimalLength(value) {
        if (value) {
          var valueSplit = value.split(this._decimal);
          if (valueSplit.length === 2) {
            return valueSplit[1].replace(this._suffix, '').trim().replace(/\s/g, '').replace(this._currency, '').length;
          }
        }
        return 0;
      },
      updateModel: function updateModel(event, value) {
        this.d_value = value;
        this.$emit('input', value);
      },
      onInputFocus: function onInputFocus(event) {
        this.focused = true;
        this.$emit('focus', event);
      },
      onInputBlur: function onInputBlur(event) {
        this.focused = false;
        var input = event.target;
        var newValue = this.validateValue(this.parseValue(input.value));
        input.value = this.formatValue(newValue);
        input.setAttribute('aria-valuenow', newValue);
        this.updateModel(event, newValue);
        this.$emit('blur', event);
      },
      clearTimer: function clearTimer() {
        if (this.timer) {
          clearInterval(this.timer);
        }
      },
      maxBoundry: function maxBoundry() {
        return this.d_value !== null && this.d_value >= this.max;
      },
      minBoundry: function minBoundry() {
        return this.d_value !== null && this.d_value <= this.min;
      }
    },
    computed: {
      containerClass: function containerClass() {
        return ['p-inputnumber p-component p-inputwrapper', this.className, {
          'p-inputwrapper-filled': this.filled,
          'p-inputwrapper-focus': this.focused,
          'p-inputnumber-buttons-stacked': this.showButtons && this.buttonLayout === 'stacked',
          'p-inputnumber-buttons-horizontal': this.showButtons && this.buttonLayout === 'horizontal',
          'p-inputnumber-buttons-vertical': this.showButtons && this.buttonLayout === 'vertical'
        }];
      },
      upButtonClass: function upButtonClass() {
        return ['p-inputnumber-button p-inputnumber-button-up', this.incrementButtonClass, {
          'p-disabled': this.showButtons && this.max !== null && this.maxBoundry()
        }];
      },
      downButtonClass: function downButtonClass() {
        return ['p-inputnumber-button p-inputnumber-button-down', this.decrementButtonClass, {
          'p-disabled': this.showButtons && this.min !== null && this.minBoundry()
        }];
      },
      filled: function filled() {
        return this.value != null && this.value.toString().length > 0;
      },
      upButtonListeners: function upButtonListeners() {
        var _this2 = this;
        return {
          mousedown: function mousedown(event) {
            return _this2.onUpButtonMouseDown(event);
          },
          mouseup: function mouseup(event) {
            return _this2.onUpButtonMouseUp(event);
          },
          mouseleave: function mouseleave(event) {
            return _this2.onUpButtonMouseLeave(event);
          },
          keydown: function keydown(event) {
            return _this2.onUpButtonKeyDown(event);
          },
          keyup: function keyup(event) {
            return _this2.onUpButtonKeyUp(event);
          }
        };
      },
      downButtonListeners: function downButtonListeners() {
        var _this3 = this;
        return {
          mousedown: function mousedown(event) {
            return _this3.onDownButtonMouseDown(event);
          },
          mouseup: function mouseup(event) {
            return _this3.onDownButtonMouseUp(event);
          },
          mouseleave: function mouseleave(event) {
            return _this3.onDownButtonMouseLeave(event);
          },
          keydown: function keydown(event) {
            return _this3.onDownButtonKeyDown(event);
          },
          keyup: function keyup(event) {
            return _this3.onDownButtonKeyUp(event);
          }
        };
      },
      formattedValue: function formattedValue() {
        var val = !this.value && !this.allowEmpty ? 0 : this.value;
        return this.formatValue(val);
      },
      getFormatter: function getFormatter() {
        return this.numberFormat;
      }
    },
    components: {
      'INInputText': InputText__default["default"],
      'INButton': Button__default["default"]
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
    return _c("span", {
      class: _vm.containerClass,
      style: _vm.styles
    }, [_c("INInputText", _vm._b({
      ref: "input",
      class: ["p-inputnumber-input", _vm.inputClass],
      style: _vm.inputStyle,
      attrs: {
        value: _vm.formattedValue,
        "aria-valumin": _vm.min,
        "aria-valuemax": _vm.max
      },
      on: {
        input: _vm.onUserInput,
        keydown: _vm.onInputKeyDown,
        keyup: _vm.onInputKeyUp,
        keypress: _vm.onInputKeyPress,
        paste: _vm.onPaste,
        click: _vm.onInputClick,
        focus: _vm.onInputFocus,
        blur: _vm.onInputBlur
      }
    }, "INInputText", _vm.$attrs, false)), _vm._v(" "), _vm.showButtons && _vm.buttonLayout === "stacked" ? _c("span", {
      staticClass: "p-inputnumber-button-group"
    }, [_c("INButton", _vm._g({
      class: _vm.upButtonClass,
      attrs: {
        icon: _vm.incrementButtonIcon,
        disabled: _vm.$attrs.disabled
      }
    }, _vm.upButtonListeners)), _vm._v(" "), _c("INButton", _vm._g({
      class: _vm.downButtonClass,
      attrs: {
        icon: _vm.decrementButtonIcon,
        disabled: _vm.$attrs.disabled
      }
    }, _vm.downButtonListeners))], 1) : _vm._e(), _vm._v(" "), _vm.showButtons && _vm.buttonLayout !== "stacked" ? _c("INButton", _vm._g({
      class: _vm.upButtonClass,
      attrs: {
        icon: _vm.incrementButtonIcon,
        disabled: _vm.$attrs.disabled
      }
    }, _vm.upButtonListeners)) : _vm._e(), _vm._v(" "), _vm.showButtons && _vm.buttonLayout !== "stacked" ? _c("INButton", _vm._g({
      class: _vm.downButtonClass,
      attrs: {
        icon: _vm.decrementButtonIcon,
        disabled: _vm.$attrs.disabled
      }
    }, _vm.downButtonListeners)) : _vm._e()], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-1c8eb647_0", {
      source: "\n.p-inputnumber {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.p-inputnumber-button {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {\n  display: none;\n}\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  padding: 0;\n}\n.p-inputnumber-buttons-stacked .p-inputnumber-input {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  padding: 0;\n}\n.p-inputnumber-buttons-stacked .p-inputnumber-button-group {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {\n  -webkit-box-ordinal-group: 4;\n  -webkit-order: 3;\n      -ms-flex-order: 3;\n          order: 3;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.p-inputnumber-buttons-horizontal .p-inputnumber-input {\n  -webkit-box-ordinal-group: 3;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n  border-radius: 0;\n}\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.p-inputnumber-buttons-vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 100%;\n}\n.p-inputnumber-buttons-vertical .p-inputnumber-input {\n  -webkit-box-ordinal-group: 3;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n  border-radius: 0;\n  text-align: center;\n}\n.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {\n  -webkit-box-ordinal-group: 4;\n  -webkit-order: 3;\n      -ms-flex-order: 3;\n          order: 3;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  width: 100%;\n}\n.p-inputnumber-input {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.p-fluid .p-inputnumber {\n  width: 100%;\n}\n.p-fluid .p-inputnumber .p-inputnumber-input {\n  width: 1%;\n}\n.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {\n  width: 100%;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/inputnumber/InputNumber.vue"],
        "names": [],
        "mappings": ";AA6/BA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;AAEA;;EAEA,aAAA;AACA;AAEA;EACA,yBAAA;EACA,4BAAA;EACA,6BAAA;EACA,UAAA;AACA;AAEA;EACA,0BAAA;EACA,6BAAA;AACA;AAEA;EACA,yBAAA;EACA,0BAAA;EACA,4BAAA;EACA,UAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA;AAEA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;AAEA;EACA,4BAAA;EAAA,gBAAA;MAAA,iBAAA;UAAA,QAAA;EACA,yBAAA;EACA,4BAAA;AACA;AAEA;EACA,4BAAA;EAAA,gBAAA;MAAA,iBAAA;UAAA,QAAA;EACA,gBAAA;AACA;AAEA;EACA,4BAAA;EAAA,gBAAA;MAAA,iBAAA;UAAA,QAAA;EACA,0BAAA;EACA,6BAAA;AACA;AAEA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA;AAEA;EACA,4BAAA;EAAA,gBAAA;MAAA,iBAAA;UAAA,QAAA;EACA,4BAAA;EACA,6BAAA;EACA,WAAA;AACA;AAEA;EACA,4BAAA;EAAA,gBAAA;MAAA,iBAAA;UAAA,QAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,4BAAA;EAAA,gBAAA;MAAA,iBAAA;UAAA,QAAA;EACA,yBAAA;EACA,0BAAA;EACA,WAAA;AACA;AAEA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;AAEA;EACA,WAAA;AACA;AAEA;EACA,SAAA;AACA;AAEA;EACA,WAAA;AACA",
        "file": "InputNumber.vue",
        "sourcesContent": ["<template>\n  <span :class=\"containerClass\" :style=\"styles\">\n    <INInputText\n      ref=\"input\"\n      :class=\"['p-inputnumber-input', inputClass]\"\n      :style=\"inputStyle\"\n      :value=\"formattedValue\"\n      v-bind=\"$attrs\"\n      :aria-valumin=\"min\"\n      :aria-valuemax=\"max\"\n      @input=\"onUserInput\"\n      @keydown=\"onInputKeyDown\"\n      @keyup=\"onInputKeyUp\"\n      @keypress=\"onInputKeyPress\"\n      @paste=\"onPaste\"\n      @click=\"onInputClick\"\n      @focus=\"onInputFocus\"\n      @blur=\"onInputBlur\" />\n    <span class=\"p-inputnumber-button-group\" v-if=\"showButtons && buttonLayout === 'stacked'\">\n      <INButton\n        :class=\"upButtonClass\"\n        :icon=\"incrementButtonIcon\"\n        v-on=\"upButtonListeners\"\n        :disabled=\"$attrs.disabled\" />\n      <INButton\n        :class=\"downButtonClass\"\n        :icon=\"decrementButtonIcon\"\n        v-on=\"downButtonListeners\"\n        :disabled=\"$attrs.disabled\" />\n    </span>\n    <INButton\n      :class=\"upButtonClass\"\n      :icon=\"incrementButtonIcon\"\n      v-on=\"upButtonListeners\"\n      v-if=\"showButtons && buttonLayout !== 'stacked'\"\n      :disabled=\"$attrs.disabled\" />\n    <INButton\n      :class=\"downButtonClass\"\n      :icon=\"decrementButtonIcon\"\n      v-on=\"downButtonListeners\"\n      v-if=\"showButtons && buttonLayout !== 'stacked'\"\n      :disabled=\"$attrs.disabled\" />\n  </span>\n</template>\n\n<script>\nimport InputText from 'primevue2/inputtext'\nimport Button from 'primevue2/button'\n\nexport default {\n  name: 'InputNumber',\n  inheritAttrs: false,\n  props: {\n    value: {\n      type: Number,\n      default: null\n    },\n    format: {\n      type: Boolean,\n      default: true\n    },\n    showButtons: {\n      type: Boolean,\n      default: false\n    },\n    buttonLayout: {\n      type: String,\n      default: 'stacked'\n    },\n    incrementButtonClass: {\n      type: String,\n      default: null,\n    },\n    decrementButtonClass: {\n      type: String,\n      default: null,\n    },\n    incrementButtonIcon: {\n      type: String,\n      default: 'pi pi-angle-up',\n    },\n    decrementButtonIcon: {\n      type: String,\n      default: 'pi pi-angle-down',\n    },\n    locale: {\n      type: String,\n      default: undefined\n    },\n    localeMatcher: {\n      type: String,\n      default: undefined\n    },\n    mode: {\n      type: String,\n      default: 'decimal'\n    },\n    prefix: {\n      type: String,\n      default: null\n    },\n    suffix: {\n      type: String,\n      default: null\n    },\n    currency: {\n      type: String,\n      default: undefined\n    },\n    currencyDisplay: {\n      type: String,\n      default: undefined\n    },\n    useGrouping: {\n      type: Boolean,\n      default: true\n    },\n    minFractionDigits: {\n      type: Number,\n      default: undefined\n    },\n    maxFractionDigits: {\n      type: Number,\n      default: undefined\n    },\n    min: {\n      type: Number,\n      default: null\n    },\n    max: {\n      type: Number,\n      default: null\n    },\n    step: {\n      type: Number,\n      default: 1\n    },\n    allowEmpty: {\n      type: Boolean,\n      default: true\n    },\n    styles: null,\n    className: null,\n    inputStyle: null,\n    inputClass: null\n  },\n  numberFormat: null,\n  _numeral: null,\n  _decimal: null,\n  _group: null,\n  _minusSign: null,\n  _currency: null,\n  _suffix: null,\n  _prefix: null,\n  _index: null,\n  groupChar: '',\n  isSpecialChar: null,\n  prefixChar: null,\n  suffixChar: null,\n  timer: null,\n  data() {\n    return {\n      d_value: null,\n      focused: false\n    }\n  },\n  watch: {\n    value(newValue) {\n      this.d_value = newValue\n    },\n    locale(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    localeMatcher(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    mode(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    currency(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    currencyDisplay(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    useGrouping(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    minFractionDigits(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    maxFractionDigits(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    suffix(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    prefix(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    }\n  },\n  created() {\n    this.constructParser()\n  },\n  methods: {\n    getOptions() {\n      return {\n        localeMatcher: this.localeMatcher,\n        style: this.mode,\n        currency: this.currency,\n        currencyDisplay: this.currencyDisplay,\n        useGrouping: this.useGrouping,\n        minimumFractionDigits: this.minFractionDigits,\n        maximumFractionDigits: this.maxFractionDigits\n      }\n    },\n    constructParser() {\n      this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions())\n      const numerals = [...new Intl.NumberFormat(this.locale, { useGrouping: false }).format(9876543210)].reverse()\n      const index = new Map(numerals.map((d, i) => [d, i]))\n      this._numeral = new RegExp(`[${numerals.join('')}]`, 'g')\n      this._group = this.getGroupingExpression()\n      this._minusSign = this.getMinusSignExpression()\n      this._currency = this.getCurrencyExpression()\n      this._decimal = this.getDecimalExpression()\n      this._suffix = this.getSuffixExpression()\n      this._prefix = this.getPrefixExpression()\n      this._index = d => index.get(d)\n    },\n    updateConstructParser(newValue, oldValue) {\n      if (newValue !== oldValue) {\n        this.constructParser()\n      }\n    },\n    escapeRegExp(text) {\n      return text.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, '\\\\$&')\n    },\n    getDecimalExpression() {\n      const formatter = new Intl.NumberFormat(this.locale, { ...this.getOptions(), useGrouping: false })\n      return new RegExp(`[${formatter.format(1.1).replace(this._currency, '').trim().replace(this._numeral, '')}]`, 'g')\n    },\n    getGroupingExpression() {\n      const formatter = new Intl.NumberFormat(this.locale, { useGrouping: true })\n      this.groupChar = formatter.format(1000000).trim().replace(this._numeral, '').charAt(0)\n      return new RegExp(`[${this.groupChar}]`, 'g')\n    },\n    getMinusSignExpression() {\n      const formatter = new Intl.NumberFormat(this.locale, { useGrouping: false })\n      return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, '')}]`, 'g')\n    },\n    getCurrencyExpression() {\n      if (this.currency) {\n        const formatter = new Intl.NumberFormat(this.locale, {\n          style: 'currency', currency: this.currency, currencyDisplay: this.currencyDisplay,\n          minimumFractionDigits: 0, maximumFractionDigits: 0\n        })\n        return new RegExp(`[${formatter.format(1).replace(/\\s/g, '').replace(this._numeral, '').replace(this._group, '')}]`, 'g')\n      }\n\n      return new RegExp('[]', 'g')\n    },\n    getPrefixExpression() {\n      if (this.prefix) {\n        this.prefixChar = this.prefix\n      }\n      else {\n        const formatter = new Intl.NumberFormat(this.locale, { style: this.mode, currency: this.currency, currencyDisplay: this.currencyDisplay })\n        this.prefixChar = formatter.format(1).split('1')[0]\n      }\n\n      return new RegExp(`${this.escapeRegExp(this.prefixChar || '')}`, 'g')\n    },\n    getSuffixExpression() {\n      if (this.suffix) {\n        this.suffixChar = this.suffix\n      }\n      else {\n        const formatter = new Intl.NumberFormat(this.locale, {\n          style: this.mode, currency: this.currency, currencyDisplay: this.currencyDisplay,\n          minimumFractionDigits: 0, maximumFractionDigits: 0\n        })\n        this.suffixChar = formatter.format(1).split('1')[1]\n      }\n\n      return new RegExp(`${this.escapeRegExp(this.suffixChar || '')}`, 'g')\n    },\n    formatValue(value) {\n      if (value != null) {\n        if (value === '-') { // Minus sign\n          return value\n        }\n\n        if (this.format) {\n          let formatter = new Intl.NumberFormat(this.locale, this.getOptions())\n          let formattedValue = formatter.format(value)\n          if (this.prefix) {\n            formattedValue = this.prefix + formattedValue\n          }\n\n          if (this.suffix) {\n            formattedValue = formattedValue + this.suffix\n          }\n\n          return formattedValue\n        }\n\n        return value.toString()\n      }\n\n      return ''\n    },\n    parseValue(text) {\n      let filteredText = text\n        .replace(this._suffix, '')\n        .replace(this._prefix, '')\n        .trim()\n        .replace(/\\s/g, '')\n        .replace(this._currency, '')\n        .replace(this._group, '')\n        .replace(this._minusSign, '-')\n        .replace(this._decimal, '.')\n        .replace(this._numeral, this._index)\n\n      if (filteredText) {\n        if (filteredText === '-') // Minus sign\n          return filteredText\n\n        let parsedValue = +filteredText\n        return isNaN(parsedValue) ? null : parsedValue\n      }\n\n      return null\n    },\n    repeat(event, interval, dir) {\n      let i = interval || 500\n\n      this.clearTimer()\n      this.timer = setTimeout(() => {\n        this.repeat(event, 40, dir)\n      }, i)\n\n      this.spin(event, dir)\n    },\n    spin(event, dir) {\n      if (this.$refs.input) {\n        let step = this.step * dir\n        let currentValue = this.parseValue(this.$refs.input.$el.value) || 0\n        let newValue = this.validateValue(currentValue + step)\n\n        this.updateInput(newValue, null, 'spin')\n        this.updateModel(event, newValue)\n\n        this.handleOnInput(event, currentValue, newValue)\n      }\n    },\n    onUpButtonMouseDown(event) {\n      if (!this.$attrs.disabled) {\n        this.$refs.input.$el.focus()\n        this.repeat(event, null, 1)\n        event.preventDefault()\n      }\n    },\n    onUpButtonMouseUp() {\n      if (!this.$attrs.disabled) {\n        this.clearTimer()\n      }\n    },\n    onUpButtonMouseLeave() {\n      if (!this.$attrs.disabled) {\n        this.clearTimer()\n      }\n    },\n    onUpButtonKeyUp() {\n      if (!this.$attrs.disabled) {\n        this.clearTimer()\n      }\n    },\n    onUpButtonKeyDown(event) {\n      if (event.keyCode === 32 || event.keyCode === 13) {\n        this.repeat(event, null, 1)\n      }\n    },\n    onDownButtonMouseDown(event) {\n      if (!this.$attrs.disabled) {\n        this.$refs.input.$el.focus()\n        this.repeat(event, null, -1)\n        event.preventDefault()\n      }\n    },\n    onDownButtonMouseUp() {\n      if (!this.$attrs.disabled) {\n        this.clearTimer()\n      }\n    },\n    onDownButtonMouseLeave() {\n      if (!this.$attrs.disabled) {\n        this.clearTimer()\n      }\n    },\n    onDownButtonKeyUp() {\n      if (!this.$attrs.disabled) {\n        this.clearTimer()\n      }\n    },\n    onDownButtonKeyDown(event) {\n      if (event.keyCode === 32 || event.keyCode === 13) {\n        this.repeat(event, null, -1)\n      }\n    },\n    onUserInput() {\n      if (this.isSpecialChar) {\n        this.$refs.input.$el.value = this.lastValue\n      }\n      this.isSpecialChar = false\n    },\n    onInputKeyDown(event) {\n      this.lastValue = event.target.value\n      if (event.shiftKey || event.altKey) {\n        this.isSpecialChar = true\n        return\n      }\n\n      let selectionStart = event.target.selectionStart\n      let selectionEnd = event.target.selectionEnd\n      let inputValue = event.target.value\n      let newValueStr = null\n\n      if (event.altKey) {\n        event.preventDefault()\n      }\n\n      switch (event.which) {\n      //up\n      case 38:\n        this.spin(event, 1)\n        event.preventDefault()\n        break\n\n        //down\n      case 40:\n        this.spin(event, -1)\n        event.preventDefault()\n        break\n\n        //left\n      case 37:\n        if (!this.isNumeralChar(inputValue.charAt(selectionStart - 1))) {\n          event.preventDefault()\n        }\n        break\n\n        //right\n      case 39:\n        if (!this.isNumeralChar(inputValue.charAt(selectionStart))) {\n          event.preventDefault()\n        }\n        break\n\n        //enter\n      case 13:\n        newValueStr = this.validateValue(this.parseValue(inputValue))\n        this.$refs.input.$el.value = this.formatValue(newValueStr)\n        this.$refs.input.$el.setAttribute('aria-valuenow', newValueStr)\n        this.updateModel(event, newValueStr)\n        break\n\n        //backspace\n      case 8: {\n        event.preventDefault()\n\n        if (selectionStart === selectionEnd) {\n          const deleteChar = inputValue.charAt(selectionStart - 1)\n          const { decimalCharIndex, decimalCharIndexWithoutPrefix } = this.getDecimalCharIndexes(inputValue)\n\n          if (this.isNumeralChar(deleteChar)) {\n            const decimalLength = this.getDecimalLength(inputValue)\n\n            if (this._group.test(deleteChar)) {\n              this._group.lastIndex = 0\n              newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1)\n            }\n            else if (this._decimal.test(deleteChar)) {\n              this._decimal.lastIndex = 0\n\n              if (decimalLength) {\n                this.$refs.input.$el.setSelectionRange(selectionStart - 1, selectionStart - 1)\n              }\n              else {\n                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart)\n              }\n            }\n            else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {\n              const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? '' : '0'\n              newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart)\n            }\n            else if (decimalCharIndexWithoutPrefix === 1) {\n              newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart)\n              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : ''\n            }\n            else {\n              newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart)\n            }\n          }\n\n          this.updateValue(event, newValueStr, null, 'delete-single')\n        }\n        else {\n          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd)\n          this.updateValue(event, newValueStr, null, 'delete-range')\n        }\n\n        break\n      }\n\n      // del\n      case 46:\n        event.preventDefault()\n\n        if (selectionStart === selectionEnd) {\n          const deleteChar = inputValue.charAt(selectionStart)\n          const { decimalCharIndex, decimalCharIndexWithoutPrefix } = this.getDecimalCharIndexes(inputValue)\n\n          if (this.isNumeralChar(deleteChar)) {\n            const decimalLength = this.getDecimalLength(inputValue)\n\n            if (this._group.test(deleteChar)) {\n              this._group.lastIndex = 0\n              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2)\n            }\n            else if (this._decimal.test(deleteChar)) {\n              this._decimal.lastIndex = 0\n\n              if (decimalLength) {\n                this.$refs.input.$el.setSelectionRange(selectionStart + 1, selectionStart + 1)\n              }\n              else {\n                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1)\n              }\n            }\n            else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {\n              const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? '' : '0'\n              newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1)\n            }\n            else if (decimalCharIndexWithoutPrefix === 1) {\n              newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1)\n              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : ''\n            }\n            else {\n              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1)\n            }\n          }\n\n          this.updateValue(event, newValueStr, null, 'delete-back-single')\n        }\n        else {\n          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd)\n          this.updateValue(event, newValueStr, null, 'delete-range')\n        }\n        break\n\n      default:\n        break\n      }\n    },\n    onInputKeyUp(event) {\n      this.$emit('keyup', event)\n    },\n    onInputKeyPress(event) {\n      event.preventDefault()\n      let code = event.which || event.keyCode\n      let char = String.fromCharCode(code)\n      const isDecimalSign = this.isDecimalSign(char)\n      const isMinusSign = this.isMinusSign(char)\n\n      if ((48 <= code && code <= 57) || isMinusSign || isDecimalSign) {\n        this.insert(event, char, { isDecimalSign, isMinusSign })\n      }\n    },\n    onPaste(event) {\n      event.preventDefault()\n      let data = (event.clipboardData || window['clipboardData']).getData('Text')\n      if (data) {\n        let filteredData = this.parseValue(data)\n        if (filteredData != null) {\n          this.insert(event, filteredData.toString())\n        }\n      }\n    },\n    allowMinusSign() {\n      return this.min === null || this.min < 0\n    },\n    isMinusSign(char) {\n      if (this._minusSign.test(char) || char === '-') {\n        this._minusSign.lastIndex = 0\n        return true\n      }\n\n      return false\n    },\n    isDecimalSign(char) {\n      if (this._decimal.test(char)) {\n        this._decimal.lastIndex = 0\n        return true\n      }\n\n      return false\n    },\n    isDecimalMode() {\n      return this.mode === 'decimal'\n    },\n    getDecimalCharIndexes(val) {\n      let decimalCharIndex = val.search(this._decimal)\n      this._decimal.lastIndex = 0\n\n      const filteredVal = val.replace(this._prefix, '').trim().replace(/\\s/g, '').replace(this._currency, '')\n      const decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal)\n      this._decimal.lastIndex = 0\n\n      return { decimalCharIndex, decimalCharIndexWithoutPrefix }\n    },\n    getCharIndexes(val) {\n      const decimalCharIndex = val.search(this._decimal)\n      this._decimal.lastIndex = 0\n      const minusCharIndex = val.search(this._minusSign)\n      this._minusSign.lastIndex = 0\n      const suffixCharIndex = val.search(this._suffix)\n      this._suffix.lastIndex = 0\n      const currencyCharIndex = val.search(this._currency)\n      this._currency.lastIndex = 0\n\n      return { decimalCharIndex, minusCharIndex, suffixCharIndex, currencyCharIndex }\n    },\n    insert(event, text, sign = { isDecimalSign: false, isMinusSign: false }) {\n      const minusCharIndexOnText = text.search(this._minusSign)\n      this._minusSign.lastIndex = 0\n      if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {\n        return\n      }\n\n      const selectionStart = this.$refs.input.$el.selectionStart\n      const selectionEnd = this.$refs.input.$el.selectionEnd\n      let inputValue = this.$refs.input.$el.value.trim()\n      const { decimalCharIndex, minusCharIndex, suffixCharIndex, currencyCharIndex } = this.getCharIndexes(inputValue)\n      let newValueStr\n\n      if (sign.isMinusSign) {\n        if (selectionStart === 0) {\n          newValueStr = inputValue\n          if (minusCharIndex === -1 || selectionEnd !== 0) {\n            newValueStr = this.insertText(inputValue, text, 0, selectionEnd)\n          }\n\n          this.updateValue(event, newValueStr, text, 'insert')\n        }\n      }\n      else if (sign.isDecimalSign) {\n        if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {\n          this.updateValue(event, inputValue, text, 'insert')\n        }\n        else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {\n          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd)\n          this.updateValue(event, newValueStr, text, 'insert')\n        }\n        else if (decimalCharIndex === -1 && this.maxFractionDigits) {\n          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd)\n          this.updateValue(event, newValueStr, text, 'insert')\n        }\n      }\n      else {\n        const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits\n        const operation = selectionStart !== selectionEnd ? 'range-insert' : 'insert'\n\n        if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {\n          if ((selectionStart + text.length - (decimalCharIndex + 1)) <= maxFractionDigits) {\n            const charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : (suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length)\n\n            newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex)\n            this.updateValue(event, newValueStr, text, operation)\n          }\n        }\n        else {\n          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd)\n          this.updateValue(event, newValueStr, text, operation)\n        }\n      }\n    },\n    insertText(value, text, start, end) {\n      let textSplit = text === '.' ? text : text.split('.')\n\n      if (textSplit.length === 2) {\n        const decimalCharIndex = value.slice(start, end).search(this._decimal)\n        this._decimal.lastIndex = 0\n        return (decimalCharIndex > 0) ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : (value || this.formatValue(text))\n      }\n      else if ((end - start) === value.length) {\n        return this.formatValue(text)\n      }\n      else if (start === 0) {\n        return text + value.slice(end)\n      }\n      else if (end === value.length) {\n        return value.slice(0, start) + text\n      }\n      else {\n        return value.slice(0, start) + text + value.slice(end)\n      }\n    },\n    deleteRange(value, start, end) {\n      let newValueStr\n\n      if ((end - start) === value.length)\n        newValueStr = ''\n      else if (start === 0)\n        newValueStr = value.slice(end)\n      else if (end === value.length)\n        newValueStr = value.slice(0, start)\n      else\n        newValueStr = value.slice(0, start) + value.slice(end)\n\n      return newValueStr\n    },\n    initCursor() {\n      let selectionStart = this.$refs.input.$el.selectionStart\n      let inputValue = this.$refs.input.$el.value\n      let valueLength = inputValue.length\n      let index = null\n\n      // remove prefix\n      let prefixLength = (this.prefixChar || '').length\n      inputValue = inputValue.replace(this._prefix, '')\n      selectionStart = selectionStart - prefixLength\n\n      let char = inputValue.charAt(selectionStart)\n      if (this.isNumeralChar(char)) {\n        return selectionStart + prefixLength\n      }\n\n      //left\n      let i = selectionStart - 1\n      while (i >= 0) {\n        char = inputValue.charAt(i)\n        if (this.isNumeralChar(char)) {\n          index = i + prefixLength\n          break\n        }\n        else {\n          i--\n        }\n      }\n\n      if (index !== null) {\n        this.$refs.input.$el.setSelectionRange(index + 1, index + 1)\n      }\n      else {\n        i = selectionStart\n        while (i < valueLength) {\n          char = inputValue.charAt(i)\n          if (this.isNumeralChar(char)) {\n            index = i + prefixLength\n            break\n          }\n          else {\n            i++\n          }\n        }\n\n        if (index !== null) {\n          this.$refs.input.$el.setSelectionRange(index, index)\n        }\n      }\n\n      return index || 0\n    },\n    onInputClick() {\n      this.initCursor()\n    },\n    isNumeralChar(char) {\n      if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {\n        this.resetRegex()\n        return true\n      }\n\n      return false\n    },\n    resetRegex() {\n      this._numeral.lastIndex = 0\n      this._decimal.lastIndex = 0\n      this._group.lastIndex = 0\n      this._minusSign.lastIndex = 0\n    },\n    updateValue(event, valueStr, insertedValueStr, operation) {\n      let currentValue = this.$refs.input.$el.value\n      let newValue = null\n\n      if (valueStr != null) {\n        newValue = this.parseValue(valueStr)\n        newValue = !newValue && !this.allowEmpty ? 0 : newValue\n        this.updateInput(newValue, insertedValueStr, operation, valueStr)\n\n        this.handleOnInput(event, currentValue, newValue)\n      }\n    },\n    handleOnInput(event, currentValue, newValue) {\n      if (this.isValueChanged(currentValue, newValue)) {\n        this.$emit('input', newValue)\n      }\n    },\n    isValueChanged(currentValue, newValue) {\n      if (newValue === null && currentValue !== null) {\n        return true\n      }\n\n      if (newValue != null) {\n        let parsedCurrentValue = (typeof currentValue === 'string') ? this.parseValue(currentValue) : currentValue\n        return newValue !== parsedCurrentValue\n      }\n\n      return false\n    },\n    validateValue(value) {\n      if (value === '-' || value == null) {\n        return null\n      }\n\n      if (this.min != null && value < this.min) {\n        return this.min\n      }\n\n      if (this.max != null && value > this.max) {\n        return this.max\n      }\n\n      return value\n    },\n    updateInput(value, insertedValueStr, operation, valueStr) {\n      insertedValueStr = insertedValueStr || ''\n\n      let inputValue = this.$refs.input.$el.value\n      let newValue = this.formatValue(value)\n      let currentLength = inputValue.length\n\n      if (newValue !== valueStr) {\n        newValue = this.concatValues(newValue, valueStr)\n      }\n\n      if (currentLength === 0) {\n        this.$refs.input.$el.value = newValue\n        this.$refs.input.$el.setSelectionRange(0, 0)\n        const index = this.initCursor()\n        const selectionEnd = index + insertedValueStr.length\n        this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd)\n      }\n      else {\n        let selectionStart = this.$refs.input.$el.selectionStart\n        let selectionEnd = this.$refs.input.$el.selectionEnd\n        this.$refs.input.$el.value = newValue\n        let newLength = newValue.length\n\n        if (operation === 'range-insert') {\n          const startValue = this.parseValue((inputValue || '').slice(0, selectionStart))\n          const startValueStr = startValue !== null ? startValue.toString() : ''\n          const startExpr = startValueStr.split('').join(`(${this.groupChar})?`)\n          const sRegex = new RegExp(startExpr, 'g')\n          sRegex.test(newValue)\n\n          const tExpr = insertedValueStr.split('').join(`(${this.groupChar})?`)\n          const tRegex = new RegExp(tExpr, 'g')\n          tRegex.test(newValue.slice(sRegex.lastIndex))\n\n          selectionEnd = sRegex.lastIndex + tRegex.lastIndex\n          this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd)\n        }\n        else if (newLength === currentLength) {\n          if (operation === 'insert' || operation === 'delete-back-single')\n            this.$refs.input.$el.setSelectionRange(selectionEnd + 1, selectionEnd + 1)\n          else if (operation === 'delete-single')\n            this.$refs.input.$el.setSelectionRange(selectionEnd - 1, selectionEnd - 1)\n          else if (operation === 'delete-range' || operation === 'spin')\n            this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd)\n        }\n        else if (operation === 'delete-back-single') {\n          let prevChar = inputValue.charAt(selectionEnd - 1)\n          let nextChar = inputValue.charAt(selectionEnd)\n          let diff = currentLength - newLength\n          let isGroupChar = this._group.test(nextChar)\n\n          if (isGroupChar && diff === 1) {\n            selectionEnd += 1\n          }\n          else if (!isGroupChar && this.isNumeralChar(prevChar)) {\n            selectionEnd += (-1 * diff) + 1\n          }\n\n          this._group.lastIndex = 0\n          this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd)\n        }\n        else if (inputValue === '-' && operation === 'insert') {\n          this.$refs.input.$el.setSelectionRange(0, 0)\n          const index = this.initCursor()\n          const selectionEnd = index + insertedValueStr.length + 1\n          this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd)\n        }\n        else {\n          selectionEnd = selectionEnd + (newLength - currentLength)\n          this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd)\n        }\n      }\n\n      this.$refs.input.$el.setAttribute('aria-valuenow', value)\n    },\n    concatValues(val1, val2) {\n      if (val1 && val2) {\n        let decimalCharIndex = val2.search(this._decimal)\n        this._decimal.lastIndex = 0\n\n        return decimalCharIndex !== -1 ? (val1.split(this._decimal)[0] + val2.slice(decimalCharIndex)) : val1\n      }\n\n      return val1\n    },\n    getDecimalLength(value) {\n      if (value) {\n        const valueSplit = value.split(this._decimal)\n\n        if (valueSplit.length === 2) {\n          return valueSplit[1].replace(this._suffix, '')\n            .trim()\n            .replace(/\\s/g, '')\n            .replace(this._currency, '').length\n        }\n      }\n\n      return 0\n    },\n    updateModel(event, value) {\n      this.d_value = value\n      this.$emit('input', value)\n    },\n    onInputFocus(event) {\n      this.focused = true\n      this.$emit('focus', event)\n    },\n    onInputBlur(event) {\n      this.focused = false\n\n      let input = event.target\n      let newValue = this.validateValue(this.parseValue(input.value))\n      input.value = this.formatValue(newValue)\n      input.setAttribute('aria-valuenow', newValue)\n      this.updateModel(event, newValue)\n      this.$emit('blur', event)\n    },\n    clearTimer() {\n      if (this.timer) {\n        clearInterval(this.timer)\n      }\n    },\n    maxBoundry() {\n      return this.d_value !== null && this.d_value >= this.max\n    },\n    minBoundry() {\n      return this.d_value !== null && this.d_value <= this.min\n    },\n  },\n  computed: {\n    containerClass() {\n      return ['p-inputnumber p-component p-inputwrapper', this.className, {\n        'p-inputwrapper-filled': this.filled,\n        'p-inputwrapper-focus': this.focused,\n        'p-inputnumber-buttons-stacked': this.showButtons && this.buttonLayout === 'stacked',\n        'p-inputnumber-buttons-horizontal': this.showButtons && this.buttonLayout === 'horizontal',\n        'p-inputnumber-buttons-vertical': this.showButtons && this.buttonLayout === 'vertical'\n      }]\n    },\n    upButtonClass() {\n      return ['p-inputnumber-button p-inputnumber-button-up', this.incrementButtonClass, {\n        'p-disabled': this.showButtons && this.max !== null && this.maxBoundry()\n      }]\n    },\n    downButtonClass() {\n      return ['p-inputnumber-button p-inputnumber-button-down', this.decrementButtonClass, {\n        'p-disabled': this.showButtons && this.min !== null && this.minBoundry()\n      }]\n    },\n    filled() {\n      return (this.value != null && this.value.toString().length > 0)\n    },\n    upButtonListeners() {\n      return {\n        mousedown: event => this.onUpButtonMouseDown(event),\n        mouseup: event => this.onUpButtonMouseUp(event),\n        mouseleave: event => this.onUpButtonMouseLeave(event),\n        keydown: event => this.onUpButtonKeyDown(event),\n        keyup: event => this.onUpButtonKeyUp(event)\n      }\n    },\n    downButtonListeners() {\n      return {\n        mousedown: event => this.onDownButtonMouseDown(event),\n        mouseup: event => this.onDownButtonMouseUp(event),\n        mouseleave: event => this.onDownButtonMouseLeave(event),\n        keydown: event => this.onDownButtonKeyDown(event),\n        keyup: event => this.onDownButtonKeyUp(event)\n      }\n    },\n    formattedValue() {\n      const val = !this.value && !this.allowEmpty ? 0 : this.value\n      return this.formatValue(val)\n    },\n    getFormatter() {\n      return this.numberFormat\n    }\n  },\n  components: {\n    'INInputText': InputText,\n    'INButton': Button\n  }\n}\n</script>\n\n<style>\n.p-inputnumber {\n  display: inline-flex;\n}\n\n.p-inputnumber-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n}\n\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {\n  display: none;\n}\n\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  padding: 0;\n}\n\n.p-inputnumber-buttons-stacked .p-inputnumber-input {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  padding: 0;\n}\n\n.p-inputnumber-buttons-stacked .p-inputnumber-button-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {\n  flex: 1 1 auto;\n}\n\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {\n  order: 3;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.p-inputnumber-buttons-horizontal .p-inputnumber-input {\n  order: 2;\n  border-radius: 0;\n}\n\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {\n  order: 1;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.p-inputnumber-buttons-vertical {\n  flex-direction: column;\n}\n\n.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {\n  order: 1;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 100%;\n}\n\n.p-inputnumber-buttons-vertical .p-inputnumber-input {\n  order: 2;\n  border-radius: 0;\n  text-align: center;\n}\n\n.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {\n  order: 3;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  width: 100%;\n}\n\n.p-inputnumber-input {\n  flex: 1 1 auto;\n}\n\n.p-fluid .p-inputnumber {\n  width: 100%;\n}\n\n.p-fluid .p-inputnumber .p-inputnumber-input {\n  width: 1%;\n}\n\n.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {\n  width: 100%;\n}\n</style>\n"]
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

})(primevue2.inputtext, primevue2.button);

this.primevue2 = this.primevue2 || {};
this.primevue2.checkbox = (function (utils) {
  'use strict';

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var script = {
    name: 'Checkbox',
    inheritAttrs: false,
    props: {
      value: null,
      modelValue: null,
      binary: Boolean,
      trueValue: {
        type: null,
        default: true
      },
      falseValue: {
        type: null,
        default: false
      }
    },
    model: {
      prop: 'modelValue',
      event: 'input'
    },
    data: function data() {
      return {
        focused: false
      };
    },
    methods: {
      onClick: function onClick(event) {
        var _this = this;
        if (!this.$attrs.disabled) {
          var newModelValue;
          if (this.binary) {
            newModelValue = this.checked ? this.falseValue : this.trueValue;
          } else {
            if (this.checked) newModelValue = this.modelValue.filter(function (val) {
              return !utils.ObjectUtils.equals(val, _this.value);
            });else newModelValue = this.modelValue ? [].concat(_toConsumableArray(this.modelValue), [this.value]) : [this.value];
          }
          this.$emit('click', event);
          this.$emit('input', newModelValue);
          this.$emit('change', event);
          this.$refs.input.focus();
        }
      },
      onFocus: function onFocus(event) {
        this.focused = true;
        this.$emit('focus', event);
      },
      onBlur: function onBlur(event) {
        this.focused = false;
        this.$emit('blur', event);
      }
    },
    computed: {
      checked: function checked() {
        return this.binary ? this.modelValue === this.trueValue : utils.ObjectUtils.contains(this.value, this.modelValue);
      },
      containerClass: function containerClass() {
        return ['p-checkbox p-component', {
          'p-checkbox-checked': this.checked,
          'p-checkbox-disabled': this.$attrs.disabled,
          'p-checkbox-focused': this.focused
        }];
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
      class: _vm.containerClass,
      on: {
        click: function click($event) {
          return _vm.onClick($event);
        }
      }
    }, [_c("div", {
      staticClass: "p-hidden-accessible"
    }, [_c("input", _vm._b({
      ref: "input",
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: _vm.checked,
        value: _vm.value
      },
      on: {
        focus: function focus($event) {
          return _vm.onFocus($event);
        },
        blur: function blur($event) {
          return _vm.onBlur($event);
        }
      }
    }, "input", _vm.$attrs, false))]), _vm._v(" "), _c("div", {
      ref: "box",
      class: ["p-checkbox-box", {
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

  return __vue_component__;

})(primevue2.utils);

this.primevue2 = this.primevue2 || {};
this.primevue2.radiobutton = (function (utils) {
  'use strict';

  //
  var script = {
    name: 'RadioButton',
    inheritAttrs: false,
    props: {
      value: null,
      modelValue: null
    },
    model: {
      prop: 'modelValue',
      event: 'input'
    },
    data: function data() {
      return {
        focused: false
      };
    },
    methods: {
      onClick: function onClick(event) {
        if (!this.$attrs.disabled) {
          this.$emit('click', event);
          this.$emit('input', this.value);
          this.$refs.input.focus();
          if (!this.checked) {
            this.$emit('change', event);
          }
        }
      },
      onFocus: function onFocus(event) {
        this.focused = true;
        this.$emit('focus', event);
      },
      onBlur: function onBlur(event) {
        this.focused = false;
        this.$emit('blur', event);
      }
    },
    computed: {
      checked: function checked() {
        return this.modelValue != null && utils.ObjectUtils.equals(this.modelValue, this.value);
      },
      containerClass: function containerClass() {
        return ['p-radiobutton p-component', {
          'p-radiobutton-checked': this.checked,
          'p-radiobutton-disabled': this.$attrs.disabled,
          'p-radiobutton-focused': this.focused
        }];
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
      class: _vm.containerClass,
      on: {
        click: function click($event) {
          return _vm.onClick($event);
        }
      }
    }, [_c("div", {
      staticClass: "p-hidden-accessible"
    }, [_c("input", _vm._b({
      ref: "input",
      attrs: {
        type: "radio"
      },
      domProps: {
        checked: _vm.checked,
        value: _vm.value
      },
      on: {
        focus: function focus($event) {
          return _vm.onFocus($event);
        },
        blur: function blur($event) {
          return _vm.onBlur($event);
        }
      }
    }, "input", _vm.$attrs, false))]), _vm._v(" "), _c("div", {
      ref: "box",
      class: ["p-radiobutton-box", {
        "p-highlight": _vm.checked,
        "p-disabled": _vm.$attrs.disabled,
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

  return __vue_component__;

})(primevue2.utils);

this.primevue2 = this.primevue2 || {};
this.primevue2.message = (function (Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  //
  var script = {
    name: 'Message',
    props: {
      severity: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      },
      sticky: {
        type: Boolean,
        default: true
      },
      life: {
        type: Number,
        default: 3000
      },
      icon: {
        type: String,
        default: null
      }
    },
    timeout: null,
    data: function data() {
      return {
        visible: true
      };
    },
    mounted: function mounted() {
      var _this = this;
      if (!this.sticky) {
        setTimeout(function () {
          _this.visible = false;
        }, this.life);
      }
    },
    methods: {
      close: function close(event) {
        this.visible = false;
        this.$emit('close', event);
      }
    },
    computed: {
      containerClass: function containerClass() {
        return 'p-message p-component p-message-' + this.severity;
      },
      iconClass: function iconClass() {
        return ['p-message-icon pi', this.icon ? this.icon : {
          'pi-info-circle': this.severity === 'info',
          'pi-check': this.severity === 'success',
          'pi-exclamation-triangle': this.severity === 'warn',
          'pi-times-circle': this.severity === 'error'
        }];
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
    return _c("transition", {
      attrs: {
        name: "p-message"
      }
    }, [_vm.visible ? _c("div", {
      class: _vm.containerClass,
      attrs: {
        role: "alert"
      }
    }, [_c("div", {
      staticClass: "p-message-wrapper"
    }, [_c("span", {
      class: _vm.iconClass
    }), _vm._v(" "), _c("div", {
      staticClass: "p-message-text"
    }, [_vm._t("default")], 2), _vm._v(" "), _vm.closable ? _c("button", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      staticClass: "p-message-close p-link",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.close($event);
        }
      }
    }, [_c("i", {
      staticClass: "p-message-close-icon pi pi-times"
    })]) : _vm._e()])]) : _vm._e()]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-78af91fa_0", {
      source: "\n.p-message-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-message-close {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.p-message-close.p-link {\n  margin-left: auto;\n  overflow: hidden;\n  position: relative;\n}\n.p-message-enter {\n  opacity: 0;\n}\n.p-message-enter-active {\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s;\n}\n.p-message.p-message-leave {\n  max-height: 1000px;\n}\n.p-message.p-message-leave-to {\n  max-height: 0;\n  opacity: 0;\n  margin: 0 !important;\n}\n.p-message-leave-active {\n  overflow: hidden;\n  -webkit-transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;\n  -webkit-transition: max-height .3 cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;\n  transition: max-height .3 cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;\n}\n.p-message-leave-active .p-message-close {\n  display: none;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/message/Message.vue"],
        "names": [],
        "mappings": ";AAkFA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AAEA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;EACA,+BAAA;EACA,uBAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,aAAA;EACA,UAAA;EACA,oBAAA;AACA;AAEA;EACA,gBAAA;EACA,oFAAA;EACA,mFAAA;EAAA,2EAAA;AACA;AAEA;EACA,aAAA;AACA",
        "file": "Message.vue",
        "sourcesContent": ["<template>\n  <transition name=\"p-message\">\n    <div :class=\"containerClass\" v-if=\"visible\" role=\"alert\">\n      <div class=\"p-message-wrapper\">\n        <span :class=\"iconClass\"></span>\n        <div class=\"p-message-text\">\n          <slot></slot>\n        </div>\n        <button class=\"p-message-close p-link\" @click=\"close($event)\" v-if=\"closable\" type=\"button\" v-ripple>\n          <i class=\"p-message-close-icon pi pi-times\"></i>\n        </button>\n      </div>\n    </div>\n  </transition>\n</template>\n\n<script>\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'Message',\n  props: {\n    severity: {\n      type: String,\n      default: 'info'\n    },\n    closable: {\n      type: Boolean,\n      default: true\n    },\n    sticky: {\n      type: Boolean,\n      default: true\n    },\n    life: {\n      type: Number,\n      default: 3000\n    },\n    icon: {\n      type: String,\n      default: null\n    }\n  },\n  timeout: null,\n  data() {\n    return {\n      visible: true\n    }\n  },\n  mounted() {\n    if (!this.sticky) {\n      setTimeout(() => {\n        this.visible = false\n      }, this.life)\n    }\n  },\n  methods: {\n    close(event) {\n      this.visible = false\n      this.$emit('close', event)\n    }\n  },\n  computed: {\n    containerClass() {\n      return 'p-message p-component p-message-' + this.severity\n    },\n    iconClass() {\n      return ['p-message-icon pi', this.icon ? this.icon : {\n        'pi-info-circle': this.severity === 'info',\n        'pi-check': this.severity === 'success',\n        'pi-exclamation-triangle': this.severity === 'warn',\n        'pi-times-circle': this.severity === 'error'\n      }]\n    }\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-message-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.p-message-close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.p-message-close.p-link {\n  margin-left: auto;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-message-enter {\n  opacity: 0;\n}\n\n.p-message-enter-active {\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s;\n}\n\n.p-message.p-message-leave {\n  max-height: 1000px;\n}\n\n.p-message.p-message-leave-to {\n  max-height: 0;\n  opacity: 0;\n  margin: 0 !important;\n}\n\n.p-message-leave-active {\n  overflow: hidden;\n  -webkit-transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;\n  transition: max-height .3 cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;\n}\n\n.p-message-leave-active .p-message-close {\n  display: none;\n}\n</style>\n"]
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

})(primevue2.ripple);

this.primevue2 = this.primevue2 || {};
this.primevue2.progressbar = (function () {
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

  var script = {
    name: 'ProgressBar',
    props: {
      value: {
        type: Number,
        default: null
      },
      mode: {
        type: String,
        default: 'determinate'
      },
      showValue: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      containerClass: function containerClass() {
        return ['p-progressbar p-component', {
          'p-progressbar-determinate': this.determinate,
          'p-progressbar-indeterminate': this.indeterminate
        }];
      },
      progressStyle: function progressStyle() {
        return {
          width: this.value + '%',
          display: 'flex'
        };
      },
      indeterminate: function indeterminate() {
        return this.mode === 'indeterminate';
      },
      determinate: function determinate() {
        return this.mode === 'determinate';
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
        role: "progressbar",
        "aria-valuemin": "0",
        "aria-valuenow": _vm.value,
        "aria-valuemax": "100"
      }
    }, [_vm.determinate ? _c("div", {
      staticClass: "p-progressbar-value p-progressbar-value-animate",
      style: _vm.progressStyle
    }, [_vm.value != null && _vm.value !== 0 && _vm.showValue ? _c("div", {
      staticClass: "p-progressbar-label"
    }, [_vm._t("default", function () {
      return [_vm._v(_vm._s(_vm.value + "%"))];
    })], 2) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.indeterminate ? _c("div", {
      staticClass: "p-progressbar-indeterminate-container"
    }, [_c("div", {
      staticClass: "p-progressbar-value p-progressbar-value-animate"
    })]) : _vm._e()]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-93248eec_0", {
      source: "\n.p-progressbar {\n  position: relative;\n  overflow: hidden;\n}\n.p-progressbar-determinate .p-progressbar-value {\n  height: 100%;\n  width: 0%;\n  position: absolute;\n  display: none;\n  border: 0 none;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.p-progressbar-determinate .p-progressbar-label {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.p-progressbar-determinate .p-progressbar-value-animate {\n  -webkit-transition: width 1s ease-in-out;\n  transition: width 1s ease-in-out;\n}\n.p-progressbar-indeterminate .p-progressbar-value::before {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: p-progressbar-indeterminate-anim 2.1s\n    cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n  animation: p-progressbar-indeterminate-anim 2.1s\n    cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n.p-progressbar-indeterminate .p-progressbar-value::after {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s\n    cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  animation: p-progressbar-indeterminate-anim-short 2.1s\n    cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  -webkit-animation-delay: 1.15s;\n  animation-delay: 1.15s;\n}\n@-webkit-keyframes p-progressbar-indeterminate-anim {\n0% {\n    left: -35%;\n    right: 100%;\n}\n60% {\n    left: 100%;\n    right: -90%;\n}\n100% {\n    left: 100%;\n    right: -90%;\n}\n}\n@keyframes p-progressbar-indeterminate-anim {\n0% {\n    left: -35%;\n    right: 100%;\n}\n60% {\n    left: 100%;\n    right: -90%;\n}\n100% {\n    left: 100%;\n    right: -90%;\n}\n}\n@-webkit-keyframes p-progressbar-indeterminate-anim-short {\n0% {\n    left: -200%;\n    right: 100%;\n}\n60% {\n    left: 107%;\n    right: -8%;\n}\n100% {\n    left: 107%;\n    right: -8%;\n}\n}\n@keyframes p-progressbar-indeterminate-anim-short {\n0% {\n    left: -200%;\n    right: 100%;\n}\n60% {\n    left: 107%;\n    right: -8%;\n}\n100% {\n    left: 107%;\n    right: -8%;\n}\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/progressbar/ProgressBar.vue"],
        "names": [],
        "mappings": ";AAyDA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,gBAAA;AACA;AAEA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;AACA;AAEA;EACA,wCAAA;EAAA,gCAAA;AACA;AAEA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,wBAAA;EACA;oDACA;EACA;oDACA;AACA;AAEA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,wBAAA;EACA;+CACA;EACA;+CACA;EACA,8BAAA;EACA,sBAAA;AACA;AAEA;AACA;IACA,UAAA;IACA,WAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA;AACA;AAEA;AACA;IACA,UAAA;IACA,WAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA;AACA;AAEA;AACA;IACA,WAAA;IACA,WAAA;AACA;AACA;IACA,UAAA;IACA,UAAA;AACA;AACA;IACA,UAAA;IACA,UAAA;AACA;AACA;AAEA;AACA;IACA,WAAA;IACA,WAAA;AACA;AACA;IACA,UAAA;IACA,UAAA;AACA;AACA;IACA,UAAA;IACA,UAAA;AACA;AACA",
        "file": "ProgressBar.vue",
        "sourcesContent": ["<template>\n  <div role=\"progressbar\" :class=\"containerClass\" aria-valuemin=\"0\" :aria-valuenow=\"value\" aria-valuemax=\"100\">\n    <div v-if=\"determinate\" class=\"p-progressbar-value p-progressbar-value-animate\" :style=\"progressStyle\">\n      <div v-if=\"value != null && value !== 0 && showValue\" class=\"p-progressbar-label\">\n        <slot>{{ value + \"%\" }}</slot>\n      </div>\n    </div>\n    <div v-if=\"indeterminate\" class=\"p-progressbar-indeterminate-container\">\n      <div class=\"p-progressbar-value p-progressbar-value-animate\"></div>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'ProgressBar',\n  props: {\n    value: {\n      type: Number,\n      default: null\n    },\n    mode: {\n      type: String,\n      default: 'determinate'\n    },\n    showValue: {\n      type: Boolean,\n      default: true\n    }\n  },\n  computed: {\n    containerClass() {\n      return [\n        'p-progressbar p-component',\n        {\n          'p-progressbar-determinate': this.determinate,\n          'p-progressbar-indeterminate': this.indeterminate\n        }\n      ]\n    },\n    progressStyle() {\n      return {\n        width: this.value + '%',\n        display: 'flex'\n      }\n    },\n    indeterminate() {\n      return this.mode === 'indeterminate'\n    },\n    determinate() {\n      return this.mode === 'determinate'\n    }\n  }\n}\n</script>\n\n<style>\n.p-progressbar {\n  position: relative;\n  overflow: hidden;\n}\n\n.p-progressbar-determinate .p-progressbar-value {\n  height: 100%;\n  width: 0%;\n  position: absolute;\n  display: none;\n  border: 0 none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.p-progressbar-determinate .p-progressbar-label {\n  display: inline-flex;\n}\n\n.p-progressbar-determinate .p-progressbar-value-animate {\n  transition: width 1s ease-in-out;\n}\n\n.p-progressbar-indeterminate .p-progressbar-value::before {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: p-progressbar-indeterminate-anim 2.1s\n    cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n  animation: p-progressbar-indeterminate-anim 2.1s\n    cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n\n.p-progressbar-indeterminate .p-progressbar-value::after {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s\n    cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  animation: p-progressbar-indeterminate-anim-short 2.1s\n    cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  -webkit-animation-delay: 1.15s;\n  animation-delay: 1.15s;\n}\n\n@-webkit-keyframes p-progressbar-indeterminate-anim {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@keyframes p-progressbar-indeterminate-anim {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@-webkit-keyframes p-progressbar-indeterminate-anim-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n\n@keyframes p-progressbar-indeterminate-anim-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n</style>\n"]
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

this.primevue2 = this.primevue2 || {};
this.primevue2.dropdown = (function (utils, Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var script = {
    name: 'Dropdown',
    props: {
      value: null,
      options: Array,
      optionLabel: null,
      optionValue: null,
      optionDisabled: null,
      scrollHeight: {
        type: String,
        default: '200px'
      },
      filter: Boolean,
      filterPlaceholder: String,
      filterLocale: String,
      editable: Boolean,
      placeholder: String,
      disabled: Boolean,
      dataKey: null,
      showClear: Boolean,
      inputId: String,
      tabindex: String,
      ariaLabelledBy: null,
      appendTo: {
        type: String,
        default: null
      },
      emptyFilterMessage: {
        type: String,
        default: 'No results found'
      }
    },
    data: function data() {
      return {
        focused: false,
        filterValue: null,
        overlayVisible: false
      };
    },
    watch: {
      value: function value() {
        this.isModelValueChanged = true;
      }
    },
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    searchTimeout: null,
    currentSearchChar: null,
    previousSearchChar: null,
    searchValue: null,
    isValueChanged: false,
    updated: function updated() {
      if (this.overlayVisible && this.isModelValueChanged) {
        this.scrollValueInView();
      }
      this.isModelValueChanged = false;
      this.onFilterUpdated();
    },
    beforeDestroy: function beforeDestroy() {
      this.restoreAppend();
      this.unbindOutsideClickListener();
      this.unbindResizeListener();
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
    },
    methods: {
      getOptionLabel: function getOptionLabel(option) {
        return this.optionLabel ? utils.ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
      },
      getOptionValue: function getOptionValue(option) {
        return this.optionValue ? utils.ObjectUtils.resolveFieldData(option, this.optionValue) : option;
      },
      getOptionRenderKey: function getOptionRenderKey(option) {
        return this.dataKey ? utils.ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option);
      },
      isOptionDisabled: function isOptionDisabled(option) {
        return this.optionDisabled ? utils.ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
      },
      getSelectedOption: function getSelectedOption() {
        var selectedOption;
        if (this.value != null && this.options) {
          var _iterator = _createForOfIteratorHelper(this.options),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var option = _step.value;
              if (utils.ObjectUtils.equals(this.value, this.getOptionValue(option), this.equalityKey)) {
                selectedOption = option;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return selectedOption;
      },
      isSelected: function isSelected(option) {
        return utils.ObjectUtils.equals(this.value, this.getOptionValue(option), this.equalityKey);
      },
      getSelectedOptionIndex: function getSelectedOptionIndex() {
        var selectedOptionIndex = -1;
        if (this.value != null && this.visibleOptions) {
          for (var i = 0; i < this.visibleOptions.length; i++) {
            if (utils.ObjectUtils.equals(this.value, this.getOptionValue(this.visibleOptions[i]), this.equalityKey)) {
              selectedOptionIndex = i;
              break;
            }
          }
        }
        return selectedOptionIndex;
      },
      show: function show() {
        this.$emit('before-show');
        this.overlayVisible = true;
      },
      hide: function hide() {
        this.$emit('before-hide');
        this.overlayVisible = false;
      },
      onFocus: function onFocus() {
        this.focused = true;
      },
      onBlur: function onBlur() {
        this.focused = false;
      },
      onKeyDown: function onKeyDown(event) {
        switch (event.which) {
          //down
          case 40:
            this.onDownKey(event);
            break;

          //up
          case 38:
            this.onUpKey(event);
            break;

          //space
          case 32:
            if (!this.overlayVisible) {
              this.show();
              event.preventDefault();
            }
            break;

          //enter and escape
          case 13:
          case 27:
            if (this.overlayVisible) {
              this.hide();
              event.preventDefault();
            }
            break;

          //tab
          case 9:
            this.hide();
            break;
          default:
            this.search(event);
            break;
        }
      },
      onFilterKeyDown: function onFilterKeyDown(event) {
        switch (event.which) {
          //down
          case 40:
            this.onDownKey(event);
            break;

          //up
          case 38:
            this.onUpKey(event);
            break;

          //enter and escape
          case 13:
          case 27:
            this.overlayVisible = false;
            event.preventDefault();
            break;
        }
      },
      onDownKey: function onDownKey(event) {
        if (this.visibleOptions) {
          if (!this.overlayVisible && event.altKey) {
            this.show();
          } else {
            var nextOption = this.findNextOption(this.getSelectedOptionIndex());
            if (nextOption) {
              this.updateModel(event, this.getOptionValue(nextOption));
            }
          }
        }
        event.preventDefault();
      },
      onUpKey: function onUpKey(event) {
        if (this.visibleOptions) {
          var prevOption = this.findPrevOption(this.getSelectedOptionIndex());
          if (prevOption) {
            this.updateModel(event, this.getOptionValue(prevOption));
          }
        }
        event.preventDefault();
      },
      findNextOption: function findNextOption(index) {
        var i = index + 1;
        if (i === this.visibleOptions.length) {
          return null;
        }
        var option = this.visibleOptions[i];
        if (this.isOptionDisabled(option)) return this.findNextOption(i);else return option;
      },
      findPrevOption: function findPrevOption(index) {
        var i = index - 1;
        if (i < 0) {
          return null;
        }
        var option = this.visibleOptions[i];
        if (this.isOptionDisabled(option)) return this.findPrevOption(i);else return option;
      },
      onClearClick: function onClearClick(event) {
        this.updateModel(event, null);
      },
      onClick: function onClick(event) {
        if (this.disabled) {
          return;
        }
        if (utils.DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') || event.target.tagName === 'INPUT') {
          return;
        } else if (!this.$refs.overlay || !this.$refs.overlay.contains(event.target)) {
          if (this.overlayVisible) this.hide();else this.show();
          this.$refs.focusInput.focus();
        }
      },
      onOptionSelect: function onOptionSelect(event, option) {
        var _this = this;
        var value = this.getOptionValue(option);
        this.updateModel(event, value);
        this.$refs.focusInput.focus();
        setTimeout(function () {
          _this.hide();
        }, 200);
      },
      onEditableInput: function onEditableInput(event) {
        this.$emit('input', event.target.value);
      },
      onOverlayEnter: function onOverlayEnter() {
        this.$refs.overlay.style.zIndex = String(utils.DomHandler.generateZIndex());
        this.appendContainer();
        this.alignOverlay();
        this.bindOutsideClickListener();
        this.bindScrollListener();
        this.bindResizeListener();
        if (this.filter) {
          this.$refs.filterInput.focus();
        }
        this.$emit('show');
      },
      onOverlayLeave: function onOverlayLeave() {
        this.unbindOutsideClickListener();
        this.unbindScrollListener();
        this.unbindResizeListener();
        this.$emit('hide');
      },
      alignOverlay: function alignOverlay() {
        if (this.appendTo) {
          utils.DomHandler.absolutePosition(this.$refs.overlay, this.$refs.container);
          this.$refs.overlay.style.minWidth = utils.DomHandler.getOuterWidth(this.$refs.container) + 'px';
        } else {
          utils.DomHandler.relativePosition(this.$refs.overlay, this.$refs.container);
        }
      },
      updateModel: function updateModel(event, value) {
        this.$emit('input', value);
        this.$emit('change', {
          originalEvent: event,
          value: value
        });
      },
      bindOutsideClickListener: function bindOutsideClickListener() {
        var _this2 = this;
        if (!this.outsideClickListener) {
          this.outsideClickListener = function (event) {
            if (_this2.overlayVisible && _this2.$refs.overlay && !_this2.$refs.container.contains(event.target) && !_this2.$refs.overlay.contains(event.target)) {
              _this2.hide();
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
      bindScrollListener: function bindScrollListener() {
        var _this3 = this;
        if (!this.scrollHandler) {
          this.scrollHandler = new utils.ConnectedOverlayScrollHandler(this.$el, function () {
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
            if (_this4.overlayVisible && !utils.DomHandler.isTouchDevice()) {
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
      },
      search: function search(event) {
        var _this5 = this;
        if (!this.visibleOptions) {
          return;
        }
        if (this.searchTimeout) {
          clearTimeout(this.searchTimeout);
        }
        var char = event.key;
        this.previousSearchChar = this.currentSearchChar;
        this.currentSearchChar = char;
        if (this.previousSearchChar === this.currentSearchChar) this.searchValue = this.currentSearchChar;else this.searchValue = this.searchValue ? this.searchValue + char : char;
        var searchIndex = this.getSelectedOptionIndex();
        var newOption = this.searchOption(++searchIndex);
        if (newOption) {
          this.updateModel(event, this.getOptionValue(newOption));
        }
        this.searchTimeout = setTimeout(function () {
          _this5.searchValue = null;
        }, 250);
      },
      searchOption: function searchOption(index) {
        var option;
        if (this.searchValue) {
          option = this.searchOptionInRange(index, this.visibleOptions.length);
          if (!option) {
            option = this.searchOptionInRange(0, index);
          }
        }
        return option;
      },
      searchOptionInRange: function searchOptionInRange(start, end) {
        for (var i = start; i < end; i++) {
          var opt = this.visibleOptions[i];
          var label = this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale);
          if (label.startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))) {
            return opt;
          }
        }
        return null;
      },
      appendContainer: function appendContainer() {
        if (this.appendTo) {
          if (this.appendTo === 'body') document.body.appendChild(this.$refs.overlay);else document.getElementById(this.appendTo).appendChild(this.$refs.overlay);
        }
      },
      restoreAppend: function restoreAppend() {
        if (this.$refs.overlay && this.appendTo) {
          if (this.appendTo === 'body') document.body.removeChild(this.$refs.overlay);else document.getElementById(this.appendTo).removeChild(this.$refs.overlay);
        }
      },
      onFilterChange: function onFilterChange(event) {
        this.filterValue = event.target.value;
        this.$emit('filter', {
          originalEvent: event,
          value: event.target.value
        });
      },
      onFilterUpdated: function onFilterUpdated() {
        if (this.overlayVisible) {
          this.alignOverlay();
        }
      },
      scrollValueInView: function scrollValueInView() {
        if (this.$refs.overlay) {
          var selectedItem = utils.DomHandler.findSingle(this.$refs.overlay, 'li.p-highlight');
          if (selectedItem) {
            selectedItem.scrollIntoView({
              block: 'nearest',
              inline: 'start'
            });
          }
        }
      }
    },
    computed: {
      visibleOptions: function visibleOptions() {
        var _this6 = this;
        if (this.filterValue && this.filterValue.trim().length > 0) return this.options.filter(function (option) {
          return _this6.getOptionLabel(option).toLocaleLowerCase(_this6.filterLocale).indexOf(_this6.filterValue.toLocaleLowerCase(_this6.filterLocale)) > -1;
        });else return this.options;
      },
      containerClass: function containerClass() {
        return ['p-dropdown p-component p-inputwrapper', {
          'p-disabled': this.disabled,
          'p-dropdown-clearable': this.showClear && !this.disabled,
          'p-focus': this.focused,
          'p-inputwrapper-filled': this.value,
          'p-inputwrapper-focus': this.focused || this.overlayVisible
        }];
      },
      labelClass: function labelClass() {
        return ['p-dropdown-label p-inputtext', {
          'p-placeholder': this.label === this.placeholder,
          'p-dropdown-label-empty': !this.$scopedSlots['value'] && (this.label === 'p-emptylabel' || this.label.length === 0)
        }];
      },
      label: function label() {
        var selectedOption = this.getSelectedOption();
        if (selectedOption) return this.getOptionLabel(selectedOption);else return this.placeholder || 'p-emptylabel';
      },
      editableInputValue: function editableInputValue() {
        var selectedOption = this.getSelectedOption();
        if (selectedOption != null) return this.getOptionLabel(selectedOption);else return this.value;
      },
      equalityKey: function equalityKey() {
        return this.optionValue ? null : this.dataKey;
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
      ref: "container",
      class: _vm.containerClass,
      on: {
        click: function click($event) {
          return _vm.onClick($event);
        }
      }
    }, [_c("div", {
      staticClass: "p-hidden-accessible"
    }, [_c("input", {
      ref: "focusInput",
      attrs: {
        type: "text",
        id: _vm.inputId,
        readonly: "",
        disabled: _vm.disabled,
        tabindex: _vm.tabindex,
        "aria-haspopup": "listbox",
        "aria-expanded": _vm.overlayVisible,
        "aria-labelledby": _vm.ariaLabelledBy
      },
      on: {
        focus: _vm.onFocus,
        blur: _vm.onBlur,
        keydown: _vm.onKeyDown
      }
    })]), _vm._v(" "), _vm.editable ? _c("input", {
      staticClass: "p-dropdown-label p-inputtext",
      attrs: {
        type: "text",
        disabled: _vm.disabled,
        placeholder: _vm.placeholder,
        "aria-haspopup": "listbox",
        "aria-expanded": _vm.overlayVisible
      },
      domProps: {
        value: _vm.editableInputValue
      },
      on: {
        focus: _vm.onFocus,
        blur: _vm.onBlur,
        input: _vm.onEditableInput
      }
    }) : _vm._e(), _vm._v(" "), !_vm.editable ? _c("span", {
      class: _vm.labelClass
    }, [_vm._t("value", function () {
      return [_vm._v("\n        " + _vm._s(_vm.label) + "\n      ")];
    }, {
      value: _vm.value,
      placeholder: _vm.placeholder
    })], 2) : _vm._e(), _vm._v(" "), _vm.showClear && _vm.value != null ? _c("i", {
      staticClass: "p-dropdown-clear-icon pi pi-times",
      on: {
        click: function click($event) {
          return _vm.onClearClick($event);
        }
      }
    }) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "p-dropdown-trigger",
      attrs: {
        role: "button",
        "aria-haspopup": "listbox",
        "aria-expanded": _vm.overlayVisible
      }
    }, [_vm._t("indicator", function () {
      return [_c("span", {
        staticClass: "p-dropdown-trigger-icon pi pi-chevron-down"
      })];
    })], 2), _vm._v(" "), _c("transition", {
      attrs: {
        name: "p-connected-overlay"
      },
      on: {
        enter: _vm.onOverlayEnter,
        leave: _vm.onOverlayLeave
      }
    }, [_vm.overlayVisible ? _c("div", {
      ref: "overlay",
      staticClass: "p-dropdown-panel p-component"
    }, [_vm.filter ? _c("div", {
      staticClass: "p-dropdown-header"
    }, [_c("div", {
      staticClass: "p-dropdown-filter-container"
    }, [_c("input", {
      ref: "filterInput",
      staticClass: "p-dropdown-filter p-inputtext p-component",
      attrs: {
        type: "text",
        autoComplete: "off",
        placeholder: _vm.filterPlaceholder
      },
      domProps: {
        value: _vm.filterValue
      },
      on: {
        keydown: _vm.onFilterKeyDown,
        input: _vm.onFilterChange
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "p-dropdown-filter-icon pi pi-search"
    })])]) : _vm._e(), _vm._v(" "), _c("div", {
      ref: "itemsWrapper",
      staticClass: "p-dropdown-items-wrapper",
      style: {
        "max-height": _vm.scrollHeight
      }
    }, [_c("ul", {
      staticClass: "p-dropdown-items",
      attrs: {
        role: "listbox"
      }
    }, [_vm._l(_vm.visibleOptions, function (option, i) {
      return _c("li", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        key: _vm.getOptionRenderKey(option),
        class: ["p-dropdown-item", {
          "p-highlight": _vm.isSelected(option),
          "p-disabled": _vm.isOptionDisabled(option)
        }],
        attrs: {
          "aria-label": _vm.getOptionLabel(option),
          role: "option",
          "aria-selected": _vm.isSelected(option)
        },
        on: {
          click: function click($event) {
            return _vm.onOptionSelect($event, option);
          }
        }
      }, [_vm._t("option", function () {
        return [_vm._v("\n                " + _vm._s(_vm.getOptionLabel(option)) + "\n              ")];
      }, {
        option: option,
        index: i
      })], 2);
    }), _vm._v(" "), _vm.filterValue && (!_vm.visibleOptions || _vm.visibleOptions && _vm.visibleOptions.length === 0) ? _c("li", {
      staticClass: "p-dropdown-empty-message"
    }, [_vm._v("\n              " + _vm._s(_vm.emptyFilterMessage) + "\n            ")]) : _vm._e()], 2)])]) : _vm._e()])], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-31ece89d_0", {
      source: "\n.p-dropdown {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  cursor: pointer;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-dropdown-clear-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5rem;\n}\n.p-dropdown-trigger {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n.p-dropdown-label {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  width: 1%;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n.p-dropdown-label-empty {\n  overflow: hidden;\n  visibility: hidden;\n}\ninput.p-dropdown-label {\n  cursor: default;\n}\n.p-dropdown .p-dropdown-panel {\n  min-width: 100%;\n}\n.p-dropdown-panel {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.p-dropdown-items-wrapper {\n  overflow: auto;\n}\n.p-dropdown-item {\n  cursor: pointer;\n  font-weight: normal;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n}\n.p-dropdown-items {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.p-dropdown-filter {\n  width: 100%;\n}\n.p-dropdown-filter-container {\n  position: relative;\n}\n.p-dropdown-filter-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5rem;\n}\n.p-fluid .p-dropdown {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.p-fluid .p-dropdown .p-dropdown-label {\n  width: 1%;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/dropdown/Dropdown.vue"],
        "names": [],
        "mappings": ";AAwkBA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AACA;AAEA;EACA,kBAAA;EACA,QAAA;EACA,mBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,sBAAA;MAAA,oBAAA;UAAA,cAAA;AACA;AAEA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;EACA,SAAA;EACA,uBAAA;EACA,eAAA;AACA;AAEA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,eAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;AACA;AAEA;EACA,WAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;EACA,QAAA;EACA,mBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA;AAEA;EACA,SAAA;AACA",
        "file": "Dropdown.vue",
        "sourcesContent": ["<template>\n  <div ref=\"container\" :class=\"containerClass\" @click=\"onClick($event)\">\n    <div class=\"p-hidden-accessible\">\n      <input\n        ref=\"focusInput\"\n        type=\"text\"\n        :id=\"inputId\"\n        readonly\n        :disabled=\"disabled\"\n        @focus=\"onFocus\"\n        @blur=\"onBlur\"\n        @keydown=\"onKeyDown\"\n        :tabindex=\"tabindex\"\n        aria-haspopup=\"listbox\"\n        :aria-expanded=\"overlayVisible\"\n        :aria-labelledby=\"ariaLabelledBy\" />\n    </div>\n    <input\n      v-if=\"editable\"\n      type=\"text\"\n      class=\"p-dropdown-label p-inputtext\"\n      :disabled=\"disabled\"\n      @focus=\"onFocus\"\n      @blur=\"onBlur\"\n      :placeholder=\"placeholder\"\n      :value=\"editableInputValue\"\n      @input=\"onEditableInput\"\n      aria-haspopup=\"listbox\"\n      :aria-expanded=\"overlayVisible\" />\n    <span v-if=\"!editable\" :class=\"labelClass\">\n      <slot name=\"value\" :value=\"value\" :placeholder=\"placeholder\">\n        {{ label }}\n      </slot>\n    </span>\n    <i v-if=\"showClear && value != null\" class=\"p-dropdown-clear-icon pi pi-times\" @click=\"onClearClick($event)\"></i>\n    <div class=\"p-dropdown-trigger\" role=\"button\" aria-haspopup=\"listbox\" :aria-expanded=\"overlayVisible\">\n      <slot name=\"indicator\">\n        <span class=\"p-dropdown-trigger-icon pi pi-chevron-down\"></span>\n      </slot>\n    </div>\n    <transition name=\"p-connected-overlay\" @enter=\"onOverlayEnter\" @leave=\"onOverlayLeave\">\n      <div ref=\"overlay\" class=\"p-dropdown-panel p-component\" v-if=\"overlayVisible\">\n        <div class=\"p-dropdown-header\" v-if=\"filter\">\n          <div class=\"p-dropdown-filter-container\">\n            <input\n              type=\"text\"\n              ref=\"filterInput\"\n              :value=\"filterValue\"\n              autoComplete=\"off\"\n              class=\"p-dropdown-filter p-inputtext p-component\"\n              :placeholder=\"filterPlaceholder\"\n              @keydown=\"onFilterKeyDown\"\n              @input=\"onFilterChange\" />\n            <span class=\"p-dropdown-filter-icon pi pi-search\"></span>\n          </div>\n        </div>\n        <div ref=\"itemsWrapper\" class=\"p-dropdown-items-wrapper\" :style=\"{ 'max-height': scrollHeight }\">\n          <ul class=\"p-dropdown-items\" role=\"listbox\">\n            <li\n              v-for=\"(option, i) of visibleOptions\"\n              :class=\"[\n                'p-dropdown-item',\n                { 'p-highlight': isSelected(option), 'p-disabled': isOptionDisabled(option) },\n              ]\"\n              v-ripple\n              :aria-label=\"getOptionLabel(option)\"\n              :key=\"getOptionRenderKey(option)\"\n              @click=\"onOptionSelect($event, option)\"\n              role=\"option\"\n              :aria-selected=\"isSelected(option)\">\n              <slot name=\"option\" :option=\"option\" :index=\"i\">\n                {{ getOptionLabel(option) }}\n              </slot>\n            </li>\n            <li\n              v-if=\"filterValue && (!visibleOptions || (visibleOptions && visibleOptions.length === 0))\"\n              class=\"p-dropdown-empty-message\">\n              {{ emptyFilterMessage }}\n            </li>\n          </ul>\n        </div>\n      </div>\n    </transition>\n  </div>\n</template>\n\n<script>\nimport { ConnectedOverlayScrollHandler, ObjectUtils, DomHandler } from 'primevue2/utils'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'Dropdown',\n  props: {\n    value: null,\n    options: Array,\n    optionLabel: null,\n    optionValue: null,\n    optionDisabled: null,\n    scrollHeight: {\n      type: String,\n      default: '200px'\n    },\n    filter: Boolean,\n    filterPlaceholder: String,\n    filterLocale: String,\n    editable: Boolean,\n    placeholder: String,\n    disabled: Boolean,\n    dataKey: null,\n    showClear: Boolean,\n    inputId: String,\n    tabindex: String,\n    ariaLabelledBy: null,\n    appendTo: {\n      type: String,\n      default: null\n    },\n    emptyFilterMessage: {\n      type: String,\n      default: 'No results found'\n    }\n  },\n  data() {\n    return {\n      focused: false,\n      filterValue: null,\n      overlayVisible: false\n    }\n  },\n  watch: {\n    value() {\n      this.isModelValueChanged = true\n    }\n  },\n  outsideClickListener: null,\n  scrollHandler: null,\n  resizeListener: null,\n  searchTimeout: null,\n  currentSearchChar: null,\n  previousSearchChar: null,\n  searchValue: null,\n  isValueChanged: false,\n  updated() {\n    if (this.overlayVisible && this.isModelValueChanged) {\n      this.scrollValueInView()\n    }\n    this.isModelValueChanged = false\n\n    this.onFilterUpdated()\n  },\n  beforeDestroy() {\n    this.restoreAppend()\n    this.unbindOutsideClickListener()\n    this.unbindResizeListener()\n\n    if (this.scrollHandler) {\n      this.scrollHandler.destroy()\n      this.scrollHandler = null\n    }\n  },\n  methods: {\n    getOptionLabel(option) {\n      return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option\n    },\n    getOptionValue(option) {\n      return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option\n    },\n    getOptionRenderKey(option) {\n      return this.dataKey ? ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option)\n    },\n    isOptionDisabled(option) {\n      return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false\n    },\n    getSelectedOption() {\n      let selectedOption\n\n      if (this.value != null && this.options) {\n        for (let option of this.options) {\n          if ((ObjectUtils.equals(this.value, this.getOptionValue(option), this.equalityKey))) {\n            selectedOption = option\n            break\n          }\n        }\n      }\n\n      return selectedOption\n    },\n    isSelected(option) {\n      return ObjectUtils.equals(this.value, this.getOptionValue(option), this.equalityKey)\n    },\n    getSelectedOptionIndex() {\n      let selectedOptionIndex = -1\n\n      if (this.value != null && this.visibleOptions) {\n        for (let i = 0; i < this.visibleOptions.length; i++) {\n          if ((ObjectUtils.equals(this.value, this.getOptionValue(this.visibleOptions[i]), this.equalityKey))) {\n            selectedOptionIndex = i\n            break\n          }\n        }\n      }\n\n      return selectedOptionIndex\n    },\n    show() {\n      this.$emit('before-show')\n      this.overlayVisible = true\n    },\n    hide() {\n      this.$emit('before-hide')\n      this.overlayVisible = false\n    },\n    onFocus() {\n      this.focused = true\n    },\n    onBlur() {\n      this.focused = false\n    },\n    onKeyDown(event) {\n      switch (event.which) {\n      //down\n      case 40:\n        this.onDownKey(event)\n        break\n\n        //up\n      case 38:\n        this.onUpKey(event)\n        break\n\n        //space\n      case 32:\n        if (!this.overlayVisible) {\n          this.show()\n          event.preventDefault()\n        }\n        break\n\n        //enter and escape\n      case 13:\n      case 27:\n        if (this.overlayVisible) {\n          this.hide()\n          event.preventDefault()\n        }\n        break\n\n        //tab\n      case 9:\n        this.hide()\n        break\n\n      default:\n        this.search(event)\n        break\n      }\n    },\n    onFilterKeyDown(event) {\n      switch (event.which) {\n      //down\n      case 40:\n        this.onDownKey(event)\n        break\n\n        //up\n      case 38:\n        this.onUpKey(event)\n        break\n\n        //enter and escape\n      case 13:\n      case 27:\n        this.overlayVisible = false\n        event.preventDefault()\n        break\n\n      default:\n        break\n      }\n    },\n    onDownKey(event) {\n      if (this.visibleOptions) {\n        if (!this.overlayVisible && event.altKey) {\n          this.show()\n        }\n        else {\n          let nextOption = this.findNextOption(this.getSelectedOptionIndex())\n\n          if (nextOption) {\n            this.updateModel(event, this.getOptionValue(nextOption))\n          }\n        }\n      }\n\n      event.preventDefault()\n    },\n    onUpKey(event) {\n      if (this.visibleOptions) {\n        let prevOption = this.findPrevOption(this.getSelectedOptionIndex())\n\n        if (prevOption) {\n          this.updateModel(event, this.getOptionValue(prevOption))\n        }\n      }\n\n      event.preventDefault()\n    },\n    findNextOption(index) {\n      let i = index + 1\n      if (i === this.visibleOptions.length) {\n        return null\n      }\n\n      let option = this.visibleOptions[i]\n      if (this.isOptionDisabled(option))\n        return this.findNextOption(i)\n      else\n        return option\n\n    },\n    findPrevOption(index) {\n      let i = index - 1\n      if (i < 0) {\n        return null\n      }\n\n      let option = this.visibleOptions[i]\n      if (this.isOptionDisabled(option))\n        return this.findPrevOption(i)\n      else\n        return option\n    },\n    onClearClick(event) {\n      this.updateModel(event, null)\n    },\n    onClick(event) {\n      if (this.disabled) {\n        return\n      }\n\n      if (DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') || event.target.tagName === 'INPUT') {\n        return\n      }\n      else if (!this.$refs.overlay || !this.$refs.overlay.contains(event.target)) {\n        if (this.overlayVisible)\n          this.hide()\n        else\n          this.show()\n\n        this.$refs.focusInput.focus()\n      }\n    },\n    onOptionSelect(event, option) {\n      let value = this.getOptionValue(option)\n      this.updateModel(event, value)\n      this.$refs.focusInput.focus()\n\n      setTimeout(() => {\n        this.hide()\n      }, 200)\n    },\n    onEditableInput(event) {\n      this.$emit('input', event.target.value)\n    },\n    onOverlayEnter() {\n      this.$refs.overlay.style.zIndex = String(DomHandler.generateZIndex())\n      this.appendContainer()\n      this.alignOverlay()\n      this.bindOutsideClickListener()\n      this.bindScrollListener()\n      this.bindResizeListener()\n\n      if (this.filter) {\n        this.$refs.filterInput.focus()\n      }\n\n      this.$emit('show')\n    },\n    onOverlayLeave() {\n      this.unbindOutsideClickListener()\n      this.unbindScrollListener()\n      this.unbindResizeListener()\n      this.$emit('hide')\n    },\n    alignOverlay() {\n      if (this.appendTo) {\n        DomHandler.absolutePosition(this.$refs.overlay, this.$refs.container)\n        this.$refs.overlay.style.minWidth = DomHandler.getOuterWidth(this.$refs.container) + 'px'\n      } else {\n        DomHandler.relativePosition(this.$refs.overlay, this.$refs.container)\n      }\n    },\n    updateModel(event, value) {\n      this.$emit('input', value)\n      this.$emit('change', { originalEvent: event, value: value })\n    },\n    bindOutsideClickListener() {\n      if (!this.outsideClickListener) {\n        this.outsideClickListener = (event) => {\n          if (this.overlayVisible && this.$refs.overlay && !this.$refs.container.contains(event.target) && !this.$refs.overlay.contains(event.target)) {\n            this.hide()\n          }\n        }\n        document.addEventListener('click', this.outsideClickListener)\n      }\n    },\n    unbindOutsideClickListener() {\n      if (this.outsideClickListener) {\n        document.removeEventListener('click', this.outsideClickListener)\n        this.outsideClickListener = null\n      }\n    },\n    bindScrollListener() {\n      if (!this.scrollHandler) {\n        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$el, () => {\n          if (this.overlayVisible) {\n            this.hide()\n          }\n        })\n      }\n\n      this.scrollHandler.bindScrollListener()\n    },\n    unbindScrollListener() {\n      if (this.scrollHandler) {\n        this.scrollHandler.unbindScrollListener()\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          if (this.overlayVisible && !DomHandler.isTouchDevice()) {\n            this.hide()\n          }\n        }\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    },\n    search(event) {\n      if (!this.visibleOptions) {\n        return\n      }\n\n      if (this.searchTimeout) {\n        clearTimeout(this.searchTimeout)\n      }\n\n      const char = event.key\n      this.previousSearchChar = this.currentSearchChar\n      this.currentSearchChar = char\n\n      if (this.previousSearchChar === this.currentSearchChar)\n        this.searchValue = this.currentSearchChar\n      else\n        this.searchValue = this.searchValue ? this.searchValue + char : char\n\n      let searchIndex = this.getSelectedOptionIndex()\n      let newOption = this.searchOption(++searchIndex)\n\n      if (newOption) {\n        this.updateModel(event, this.getOptionValue(newOption))\n      }\n\n      this.searchTimeout = setTimeout(() => {\n        this.searchValue = null\n      }, 250)\n    },\n    searchOption(index) {\n      let option\n\n      if (this.searchValue) {\n        option = this.searchOptionInRange(index, this.visibleOptions.length)\n\n        if (!option) {\n          option = this.searchOptionInRange(0, index)\n        }\n      }\n\n      return option\n    },\n    searchOptionInRange(start, end) {\n      for (let i = start; i < end; i++) {\n        let opt = this.visibleOptions[i]\n        let label = this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale)\n        if (label.startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))) {\n          return opt\n        }\n      }\n\n      return null\n    },\n    appendContainer() {\n      if (this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.appendChild(this.$refs.overlay)\n        else\n          document.getElementById(this.appendTo).appendChild(this.$refs.overlay)\n      }\n    },\n    restoreAppend() {\n      if (this.$refs.overlay && this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.removeChild(this.$refs.overlay)\n        else\n          document.getElementById(this.appendTo).removeChild(this.$refs.overlay)\n      }\n    },\n    onFilterChange(event) {\n      this.filterValue = event.target.value\n      this.$emit('filter', { originalEvent: event, value: event.target.value })\n    },\n    onFilterUpdated() {\n      if (this.overlayVisible) {\n        this.alignOverlay()\n      }\n    },\n    scrollValueInView() {\n      if (this.$refs.overlay) {\n        let selectedItem = DomHandler.findSingle(this.$refs.overlay, 'li.p-highlight')\n        if (selectedItem) {\n          selectedItem.scrollIntoView({ block: 'nearest', inline: 'start' })\n        }\n      }\n    },\n  },\n  computed: {\n    visibleOptions() {\n      if (this.filterValue && this.filterValue.trim().length > 0)\n        return this.options.filter(option => this.getOptionLabel(option).toLocaleLowerCase(this.filterLocale).indexOf(this.filterValue.toLocaleLowerCase(this.filterLocale)) > -1)\n      else\n        return this.options\n    },\n    containerClass() {\n      return [\n        'p-dropdown p-component p-inputwrapper',\n        {\n          'p-disabled': this.disabled,\n          'p-dropdown-clearable': this.showClear && !this.disabled,\n          'p-focus': this.focused,\n          'p-inputwrapper-filled': this.value,\n          'p-inputwrapper-focus': this.focused || this.overlayVisible\n        }\n      ]\n    },\n    labelClass() {\n      return [\n        'p-dropdown-label p-inputtext',\n        {\n          'p-placeholder': this.label === this.placeholder,\n          'p-dropdown-label-empty': !this.$scopedSlots['value'] && (this.label === 'p-emptylabel' || this.label.length === 0)\n        }\n      ]\n    },\n    label() {\n      let selectedOption = this.getSelectedOption()\n      if (selectedOption)\n        return this.getOptionLabel(selectedOption)\n      else\n        return this.placeholder || 'p-emptylabel'\n    },\n    editableInputValue() {\n      let selectedOption = this.getSelectedOption()\n      if (selectedOption != null)\n        return this.getOptionLabel(selectedOption)\n      else\n        return this.value\n    },\n    equalityKey() {\n      return this.optionValue ? null : this.dataKey\n    }\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-dropdown {\n  display: inline-flex;\n  cursor: pointer;\n  position: relative;\n  user-select: none;\n}\n\n.p-dropdown-clear-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5rem;\n}\n\n.p-dropdown-trigger {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.p-dropdown-label {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  flex: 1 1 auto;\n  width: 1%;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n\n.p-dropdown-label-empty {\n  overflow: hidden;\n  visibility: hidden;\n}\n\ninput.p-dropdown-label {\n  cursor: default;\n}\n\n.p-dropdown .p-dropdown-panel {\n  min-width: 100%;\n}\n\n.p-dropdown-panel {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.p-dropdown-items-wrapper {\n  overflow: auto;\n}\n\n.p-dropdown-item {\n  cursor: pointer;\n  font-weight: normal;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n}\n\n.p-dropdown-items {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.p-dropdown-filter {\n  width: 100%;\n}\n\n.p-dropdown-filter-container {\n  position: relative;\n}\n\n.p-dropdown-filter-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5rem;\n}\n\n.p-fluid .p-dropdown {\n  display: flex;\n}\n\n.p-fluid .p-dropdown .p-dropdown-label {\n  width: 1%;\n}\n</style>\n"]
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

this.primevue2 = this.primevue2 || {};
this.primevue2.dialog = (function (utils, Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var script = {
    name: 'Dialog',
    inheritAttrs: false,
    props: {
      header: null,
      footer: null,
      visible: Boolean,
      modal: Boolean,
      containerStyle: null,
      contentStyle: null,
      rtl: Boolean,
      maximizable: Boolean,
      dismissableMask: Boolean,
      closable: {
        type: Boolean,
        default: true
      },
      closeOnEscape: {
        type: Boolean,
        default: true
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      baseZIndex: {
        type: Number,
        default: 0
      },
      autoZIndex: {
        type: Boolean,
        default: true
      },
      ariaCloseLabel: {
        type: String,
        default: 'close'
      },
      position: {
        type: String,
        default: 'center'
      },
      appendTo: {
        type: String,
        default: null
      }
    },
    data: function data() {
      return {
        dialogClasses: null,
        dialogStyles: null,
        maskVisible: this.visible,
        maximized: false
      };
    },
    documentKeydownListener: null,
    updated: function updated() {
      if (this.visible && !this.maskVisible) {
        this.maskVisible = true;
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.restoreAppend();
      this.disableDocumentSettings();
    },
    methods: {
      close: function close() {
        this.$emit('update:visible', false);
      },
      onBeforeEnter: function onBeforeEnter(el) {
        if (this.autoZIndex) {
          el.style.zIndex = String(this.baseZIndex + utils.DomHandler.generateZIndex());
        }
      },
      onEnter: function onEnter() {
        this.$refs.mask.style.zIndex = String(parseInt(this.$refs.dialog.style.zIndex, 10) - 1);
        this.removeStylesFromMask();
        this.appendContainer();
        this.alignOverlay();
        this.$emit('show');
        this.focus();
        this.enableDocumentSettings();
      },
      onBeforeLeave: function onBeforeLeave() {
        if (this.modal) {
          utils.DomHandler.addClass(this.$refs.mask, 'p-component-overlay-leave');
        }
      },
      onLeave: function onLeave() {
        this.$emit('hide');
      },
      onAfterLeave: function onAfterLeave() {
        this.maskVisible = false;
        this.disableDocumentSettings();
      },
      onAppear: function onAppear() {
        if (this.visible) {
          this.onEnter();
        }
      },
      onMaskClick: function onMaskClick(event) {
        if (this.dismissableMask && this.closable && this.modal && this.$refs.mask === event.target) {
          this.close();
        }
      },
      focus: function focus() {
        var focusTarget = this.$refs.dialog.querySelector('[autofocus]');
        if (focusTarget) {
          focusTarget.focus();
        }
      },
      maximize: function maximize() {
        this.maximized = !this.maximized;
        if (!this.modal) {
          if (this.maximized) utils.DomHandler.addClass(document.body, 'p-overflow-hidden');else utils.DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
      },
      enableDocumentSettings: function enableDocumentSettings() {
        if (this.modal) {
          utils.DomHandler.addClass(document.body, 'p-overflow-hidden');
          this.bindDocumentKeydownListener();
        } else if (this.maximizable && this.maximized) {
          utils.DomHandler.addClass(document.body, 'p-overflow-hidden');
        }
      },
      disableDocumentSettings: function disableDocumentSettings() {
        if (this.modal) {
          utils.DomHandler.removeClass(document.body, 'p-overflow-hidden');
          this.unbindDocumentKeydownListener();
        } else if (this.maximizable && this.maximized) {
          utils.DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
      },
      onKeyDown: function onKeyDown(event) {
        if (event.which === 9) {
          event.preventDefault();
          var focusableElements = utils.DomHandler.getFocusableElements(this.$refs.dialog);
          if (focusableElements && focusableElements.length > 0) {
            if (!document.activeElement) {
              focusableElements[0].focus();
            } else {
              var focusedIndex = focusableElements.indexOf(document.activeElement);
              if (event.shiftKey) {
                if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
              } else {
                if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
              }
            }
          }
        } else if (event.which === 27 && this.closeOnEscape) {
          this.close();
        }
      },
      bindDocumentKeydownListener: function bindDocumentKeydownListener() {
        if (!this.documentKeydownListener) {
          this.documentKeydownListener = this.onKeyDown.bind(this);
          window.document.addEventListener('keydown', this.documentKeydownListener);
        }
      },
      unbindDocumentKeydownListener: function unbindDocumentKeydownListener() {
        if (this.documentKeydownListener) {
          window.document.removeEventListener('keydown', this.documentKeydownListener);
          this.documentKeydownListener = null;
        }
      },
      getPositionClass: function getPositionClass() {
        var _this = this;
        var positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
        var pos = positions.find(function (item) {
          return item === _this.position;
        });
        return pos ? "p-dialog-".concat(pos) : '';
      },
      removeStylesFromMask: function removeStylesFromMask() {
        var _this2 = this;
        if (this.$refs.mask) {
          this.dialogStyles = this.$vnode.data.style || this.containerStyle;
          if (this.dialogStyles) {
            Object.keys(this.dialogStyles).forEach(function (key) {
              _this2.$refs.mask.style[key] = '';
            });
          }
          this.dialogClasses = this.$vnode.data.class || this.$vnode.data.staticClass;
        }
      },
      alignOverlay: function alignOverlay() {
        if (this.appendTo) {
          utils.DomHandler.absolutePosition(this.$refs.dialog, this.$refs.mask);
          this.$refs.dialog.style.minWidth = utils.DomHandler.getOuterWidth(this.$refs.mask) + 'px';
        } else {
          utils.DomHandler.relativePosition(this.$refs.dialog, this.$refs.mask);
        }
      },
      appendContainer: function appendContainer() {
        if (this.appendTo) {
          if (this.appendTo === 'body') document.body.appendChild(this.$refs.dialog);else document.getElementById(this.appendTo).appendChild(this.$refs.dialog);
        }
      },
      restoreAppend: function restoreAppend() {
        if (this.$refs.overlay && this.appendTo) {
          if (this.appendTo === 'body') document.body.removeChild(this.$refs.dialog);else document.getElementById(this.appendTo).removeChild(this.$refs.dialog);
        }
      }
    },
    computed: {
      listeners: function listeners() {
        return _objectSpread({}, this.$listeners);
      },
      maskClass: function maskClass() {
        return ['p-dialog-mask', {
          'p-component-overlay p-component-overlay-enter': this.modal
        }, this.getPositionClass()];
      },
      dialogClass: function dialogClass() {
        return ['p-dialog p-component', {
          'p-dialog-rtl': this.rtl,
          'p-dialog-maximized': this.maximizable && this.maximized
        }, this.dialogClasses];
      },
      maximizeIconClass: function maximizeIconClass() {
        return ['p-dialog-header-maximize-icon pi', {
          'pi-window-maximize': !this.maximized,
          'pi-window-minimize': this.maximized
        }];
      },
      dialogStyle: function dialogStyle() {
        return this.dialogStyles || this.containerStyle;
      },
      ariaId: function ariaId() {
        return utils.UniqueComponentId();
      },
      ariaLabelledById: function ariaLabelledById() {
        return this.header != null ? this.ariaId + '_header' : null;
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
    return _vm.maskVisible ? _c("div", {
      ref: "mask",
      class: _vm.maskClass,
      on: {
        click: _vm.onMaskClick
      }
    }, [_c("transition", {
      attrs: {
        name: "p-dialog"
      },
      on: {
        "before-enter": _vm.onBeforeEnter,
        enter: _vm.onEnter,
        "before-leave": _vm.onBeforeLeave,
        leave: _vm.onLeave,
        "after-leave": _vm.onAfterLeave,
        appear: _vm.onAppear
      }
    }, [_vm.visible ? _c("div", _vm._g(_vm._b({
      ref: "dialog",
      class: _vm.dialogClass,
      style: _vm.dialogStyle,
      attrs: {
        role: "dialog",
        "aria-labelledby": _vm.ariaLabelledById,
        "aria-modal": _vm.modal
      }
    }, "div", _vm.$attrs, false), _vm.listeners), [_vm.showHeader ? _c("div", {
      staticClass: "p-dialog-header"
    }, [_vm._t("header", function () {
      return [_vm.header ? _c("span", {
        staticClass: "p-dialog-title",
        attrs: {
          id: _vm.ariaLabelledById
        }
      }, [_vm._v(_vm._s(_vm.header))]) : _vm._e()];
    }), _vm._v(" "), _c("div", {
      staticClass: "p-dialog-header-icons"
    }, [_vm.maximizable ? _c("button", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      staticClass: "p-dialog-header-icon p-dialog-header-maximize p-link",
      attrs: {
        type: "button",
        tabindex: "-1"
      },
      on: {
        click: _vm.maximize
      }
    }, [_c("span", {
      class: _vm.maximizeIconClass
    })]) : _vm._e(), _vm._v(" "), _vm.closable ? _c("button", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      staticClass: "p-dialog-header-icon p-dialog-header-close p-link",
      attrs: {
        "aria-label": _vm.ariaCloseLabel,
        type: "button"
      },
      on: {
        click: _vm.close
      }
    }, [_c("span", {
      staticClass: "p-dialog-header-close-icon pi pi-times"
    })]) : _vm._e()])], 2) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "p-dialog-content",
      style: _vm.contentStyle
    }, [_vm._t("default")], 2), _vm._v(" "), _vm.footer || _vm.$slots.footer ? _c("div", {
      staticClass: "p-dialog-footer"
    }, [_vm._t("footer", function () {
      return [_vm._v(_vm._s(_vm.footer))];
    })], 2) : _vm._e()]) : _vm._e()])], 1) : _vm._e();
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-414d9733_0", {
      source: "\n.p-dialog-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  pointer-events: none;\n}\n.p-dialog-mask.p-component-overlay {\n  pointer-events: auto;\n}\n.p-dialog {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  pointer-events: auto;\n  max-height: 90%;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.p-dialog-content {\n  overflow-y: auto;\n}\n.p-dialog-header {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n.p-dialog-footer {\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n.p-dialog .p-dialog-header-icons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-dialog .p-dialog-header-icon {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Fluid */\n.p-fluid .p-dialog-footer .p-button {\n  width: auto;\n}\n\n/* Animation */\n/* Center */\n.p-dialog-enter-active {\n  -webkit-transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n  transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n.p-dialog-leave-active {\n  -webkit-transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.p-dialog-enter,\n.p-dialog-leave-to {\n  opacity: 0;\n  -webkit-transform: scale(0.7);\n          transform: scale(0.7);\n}\n\n/* Top, Bottom, Left, Right, Top* and Bottom* */\n.p-dialog-top .p-dialog,\n.p-dialog-bottom .p-dialog,\n.p-dialog-left .p-dialog,\n.p-dialog-right .p-dialog,\n.p-dialog-topleft .p-dialog,\n.p-dialog-topright .p-dialog,\n.p-dialog-bottomleft .p-dialog,\n.p-dialog-bottomright .p-dialog {\n  margin: 0.75rem;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.p-dialog-top .p-dialog-enter-active,\n.p-dialog-top .p-dialog-leave-active,\n.p-dialog-bottom .p-dialog-enter-active,\n.p-dialog-bottom .p-dialog-leave-active,\n.p-dialog-left .p-dialog-enter-active,\n.p-dialog-left .p-dialog-leave-active,\n.p-dialog-right .p-dialog-enter-active,\n.p-dialog-right .p-dialog-leave-active,\n.p-dialog-topleft .p-dialog-enter-active,\n.p-dialog-topleft .p-dialog-leave-active,\n.p-dialog-topright .p-dialog-enter-active,\n.p-dialog-topright .p-dialog-leave-active,\n.p-dialog-bottomleft .p-dialog-enter-active,\n.p-dialog-bottomleft .p-dialog-leave-active,\n.p-dialog-bottomright .p-dialog-enter-active,\n.p-dialog-bottomright .p-dialog-leave-active {\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n.p-dialog-top .p-dialog-enter,\n.p-dialog-top .p-dialog-leave-to {\n  -webkit-transform: translate3d(0px, -100%, 0px);\n          transform: translate3d(0px, -100%, 0px);\n}\n.p-dialog-bottom .p-dialog-enter,\n.p-dialog-bottom .p-dialog-leave-to {\n  -webkit-transform: translate3d(0px, 100%, 0px);\n          transform: translate3d(0px, 100%, 0px);\n}\n.p-dialog-left .p-dialog-enter,\n.p-dialog-left .p-dialog-leave-to,\n.p-dialog-topleft .p-dialog-enter,\n.p-dialog-topleft .p-dialog-leave-to,\n.p-dialog-bottomleft .p-dialog-enter,\n.p-dialog-bottomleft .p-dialog-leave-to {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n}\n.p-dialog-right .p-dialog-enter,\n.p-dialog-right .p-dialog-leave-to,\n.p-dialog-topright .p-dialog-enter,\n.p-dialog-topright .p-dialog-leave-to,\n.p-dialog-bottomright .p-dialog-enter,\n.p-dialog-bottomright .p-dialog-leave-to {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n}\n\n/* Maximize */\n.p-dialog-maximized {\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: none;\n          transform: none;\n  width: 100vw !important;\n  max-height: 100%;\n  height: 100%;\n}\n.p-dialog-maximized .p-dialog-content {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n/* Position */\n.p-dialog-left {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.p-dialog-right {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.p-dialog-top {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.p-dialog-topleft {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.p-dialog-topright {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.p-dialog-bottom {\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.p-dialog-bottomleft {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.p-dialog-bottomright {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.p-confirm-dialog .p-dialog-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/dialog/Dialog.vue"],
        "names": [],
        "mappings": ";AA+TA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,oBAAA;AACA;AAEA;EACA,oBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,oBAAA;EACA,eAAA;EACA,2BAAA;UAAA,mBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,yBAAA;EAAA,sCAAA;MAAA,sBAAA;UAAA,8BAAA;EACA,sBAAA;MAAA,oBAAA;UAAA,cAAA;AACA;AAEA;EACA,sBAAA;MAAA,oBAAA;UAAA,cAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,gBAAA;EACA,kBAAA;AACA;;AAEA,UAAA;AACA;EACA,WAAA;AACA;;AAEA,cAAA;AACA,WAAA;AACA;EACA,wDAAA;EAAA,gDAAA;AACA;AACA;EACA,0DAAA;EAAA,kDAAA;AACA;AACA;;EAEA,UAAA;EACA,6BAAA;UAAA,qBAAA;AACA;;AAEA,+CAAA;AACA;;;;;;;;EAQA,eAAA;EACA,6CAAA;UAAA,qCAAA;AACA;AACA;;;;;;;;;;;;;;;;EAgBA,qCAAA;EAAA,6BAAA;AACA;AACA;;EAEA,+CAAA;UAAA,uCAAA;AACA;AACA;;EAEA,8CAAA;UAAA,sCAAA;AACA;AACA;;;;;;EAMA,+CAAA;UAAA,uCAAA;AACA;AACA;;;;;;EAMA,8CAAA;UAAA,sCAAA;AACA;;AAEA,aAAA;AACA;EACA,wBAAA;EACA,gBAAA;EACA,uBAAA;UAAA,eAAA;EACA,uBAAA;EACA,gBAAA;EACA,YAAA;AACA;AACA;EACA,mBAAA;EAAA,oBAAA;MAAA,oBAAA;UAAA,YAAA;AACA;;AAEA,aAAA;AACA;EACA,uBAAA;EAAA,mCAAA;MAAA,oBAAA;UAAA,2BAAA;AACA;AACA;EACA,qBAAA;EAAA,iCAAA;MAAA,kBAAA;UAAA,yBAAA;AACA;AACA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AACA;EACA,uBAAA;EAAA,mCAAA;MAAA,oBAAA;UAAA,2BAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AACA;EACA,qBAAA;EAAA,iCAAA;MAAA,kBAAA;UAAA,yBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA;AACA;EACA,sBAAA;EAAA,6BAAA;MAAA,mBAAA;UAAA,qBAAA;AACA;AACA;EACA,uBAAA;EAAA,mCAAA;MAAA,oBAAA;UAAA,2BAAA;EACA,sBAAA;EAAA,6BAAA;MAAA,mBAAA;UAAA,qBAAA;AACA;AACA;EACA,qBAAA;EAAA,iCAAA;MAAA,kBAAA;UAAA,yBAAA;EACA,sBAAA;EAAA,6BAAA;MAAA,mBAAA;UAAA,qBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA",
        "file": "Dialog.vue",
        "sourcesContent": ["<template>\n  <div ref=\"mask\" :class=\"maskClass\" v-if=\"maskVisible\" @click=\"onMaskClick\">\n    <transition\n      name=\"p-dialog\"\n      @before-enter=\"onBeforeEnter\"\n      @enter=\"onEnter\"\n      @before-leave=\"onBeforeLeave\"\n      @leave=\"onLeave\"\n      @after-leave=\"onAfterLeave\"\n      @appear=\"onAppear\">\n      <div\n        ref=\"dialog\"\n        :class=\"dialogClass\"\n        :style=\"dialogStyle\"\n        v-if=\"visible\"\n        v-bind=\"$attrs\"\n        v-on=\"listeners\"\n        role=\"dialog\"\n        :aria-labelledby=\"ariaLabelledById\"\n        :aria-modal=\"modal\">\n        <div class=\"p-dialog-header\" v-if=\"showHeader\">\n          <slot name=\"header\">\n            <span :id=\"ariaLabelledById\" class=\"p-dialog-title\" v-if=\"header\">{{ header }}</span>\n          </slot>\n          <div class=\"p-dialog-header-icons\">\n            <button\n              class=\"p-dialog-header-icon p-dialog-header-maximize p-link\"\n              @click=\"maximize\"\n              v-if=\"maximizable\"\n              type=\"button\"\n              tabindex=\"-1\"\n              v-ripple>\n              <span :class=\"maximizeIconClass\"></span>\n            </button>\n            <button\n              class=\"p-dialog-header-icon p-dialog-header-close p-link\"\n              @click=\"close\"\n              v-if=\"closable\"\n              :aria-label=\"ariaCloseLabel\"\n              type=\"button\"\n              v-ripple>\n              <span class=\"p-dialog-header-close-icon pi pi-times\"></span>\n            </button>\n          </div>\n        </div>\n        <div class=\"p-dialog-content\" :style=\"contentStyle\">\n          <slot></slot>\n        </div>\n        <div class=\"p-dialog-footer\" v-if=\"footer || $slots.footer\">\n          <slot name=\"footer\">{{ footer }}</slot>\n        </div>\n      </div>\n    </transition>\n  </div>\n</template>\n<script>\nimport { UniqueComponentId, DomHandler } from 'primevue2/utils'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'Dialog',\n  inheritAttrs: false,\n  props: {\n    header: null,\n    footer: null,\n    visible: Boolean,\n    modal: Boolean,\n    containerStyle: null,\n    contentStyle: null,\n    rtl: Boolean,\n    maximizable: Boolean,\n    dismissableMask: Boolean,\n    closable: {\n      type: Boolean,\n      default: true\n    },\n    closeOnEscape: {\n      type: Boolean,\n      default: true\n    },\n    showHeader: {\n      type: Boolean,\n      default: true\n    },\n    baseZIndex: {\n      type: Number,\n      default: 0\n    },\n    autoZIndex: {\n      type: Boolean,\n      default: true\n    },\n    ariaCloseLabel: {\n      type: String,\n      default: 'close'\n    },\n    position: {\n      type: String,\n      default: 'center'\n    },\n    appendTo: {\n      type: String,\n      default: null\n    }\n  },\n  data() {\n    return {\n      dialogClasses: null,\n      dialogStyles: null,\n      maskVisible: this.visible,\n      maximized: false\n    }\n  },\n  documentKeydownListener: null,\n  updated() {\n    if (this.visible && !this.maskVisible) {\n      this.maskVisible = true\n    }\n  },\n  beforeDestroy() {\n    this.restoreAppend()\n    this.disableDocumentSettings()\n  },\n  methods: {\n    close() {\n      this.$emit('update:visible', false)\n    },\n    onBeforeEnter(el) {\n      if (this.autoZIndex) {\n        el.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())\n      }\n    },\n    onEnter() {\n      this.$refs.mask.style.zIndex = String(parseInt(this.$refs.dialog.style.zIndex, 10) - 1)\n      this.removeStylesFromMask()\n      this.appendContainer()\n      this.alignOverlay()\n      this.$emit('show')\n      this.focus()\n      this.enableDocumentSettings()\n    },\n    onBeforeLeave() {\n      if (this.modal) {\n        DomHandler.addClass(this.$refs.mask, 'p-component-overlay-leave')\n      }\n    },\n    onLeave() {\n      this.$emit('hide')\n    },\n    onAfterLeave() {\n      this.maskVisible = false\n      this.disableDocumentSettings()\n    },\n    onAppear() {\n      if (this.visible) {\n        this.onEnter()\n      }\n    },\n    onMaskClick(event) {\n      if (this.dismissableMask && this.closable && this.modal && this.$refs.mask === event.target) {\n        this.close()\n      }\n    },\n    focus() {\n      let focusTarget = this.$refs.dialog.querySelector('[autofocus]')\n      if (focusTarget) {\n        focusTarget.focus()\n      }\n    },\n    maximize() {\n      this.maximized = !this.maximized\n\n      if (!this.modal) {\n        if (this.maximized)\n          DomHandler.addClass(document.body, 'p-overflow-hidden')\n        else\n          DomHandler.removeClass(document.body, 'p-overflow-hidden')\n      }\n    },\n    enableDocumentSettings() {\n      if (this.modal) {\n        DomHandler.addClass(document.body, 'p-overflow-hidden')\n        this.bindDocumentKeydownListener()\n      }\n      else if (this.maximizable && this.maximized) {\n        DomHandler.addClass(document.body, 'p-overflow-hidden')\n      }\n    },\n    disableDocumentSettings() {\n      if (this.modal) {\n        DomHandler.removeClass(document.body, 'p-overflow-hidden')\n        this.unbindDocumentKeydownListener()\n      }\n      else if (this.maximizable && this.maximized) {\n        DomHandler.removeClass(document.body, 'p-overflow-hidden')\n      }\n    },\n    onKeyDown(event) {\n      if (event.which === 9) {\n        event.preventDefault()\n        let focusableElements = DomHandler.getFocusableElements(this.$refs.dialog)\n        if (focusableElements && focusableElements.length > 0) {\n          if (!document.activeElement) {\n            focusableElements[0].focus()\n          }\n          else {\n            let focusedIndex = focusableElements.indexOf(document.activeElement)\n            if (event.shiftKey) {\n              if (focusedIndex == -1 || focusedIndex === 0)\n                focusableElements[focusableElements.length - 1].focus()\n              else\n                focusableElements[focusedIndex - 1].focus()\n            }\n            else {\n              if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))\n                focusableElements[0].focus()\n              else\n                focusableElements[focusedIndex + 1].focus()\n            }\n          }\n        }\n      } else if (event.which === 27 && this.closeOnEscape) {\n        this.close()\n      }\n    },\n    bindDocumentKeydownListener() {\n      if (!this.documentKeydownListener) {\n        this.documentKeydownListener = this.onKeyDown.bind(this)\n        window.document.addEventListener('keydown', this.documentKeydownListener)\n      }\n    },\n    unbindDocumentKeydownListener() {\n      if (this.documentKeydownListener) {\n        window.document.removeEventListener('keydown', this.documentKeydownListener)\n        this.documentKeydownListener = null\n      }\n    },\n    getPositionClass() {\n      const positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright']\n      const pos = positions.find(item => item === this.position)\n\n      return pos ? `p-dialog-${pos}` : ''\n    },\n    removeStylesFromMask() {\n      if (this.$refs.mask) {\n        this.dialogStyles = this.$vnode.data.style || this.containerStyle\n        if (this.dialogStyles) {\n          Object.keys(this.dialogStyles).forEach((key) => {\n            this.$refs.mask.style[key] = ''\n          })\n        }\n\n        this.dialogClasses = this.$vnode.data.class || this.$vnode.data.staticClass\n      }\n    },\n    alignOverlay() {\n      if (this.appendTo) {\n        DomHandler.absolutePosition(this.$refs.dialog, this.$refs.mask)\n        this.$refs.dialog.style.minWidth = DomHandler.getOuterWidth(this.$refs.mask) + 'px'\n      }\n      else {\n        DomHandler.relativePosition(this.$refs.dialog, this.$refs.mask)\n      }\n    },\n    appendContainer() {\n      if (this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.appendChild(this.$refs.dialog)\n        else\n          document.getElementById(this.appendTo).appendChild(this.$refs.dialog)\n      }\n    },\n    restoreAppend() {\n      if (this.$refs.overlay && this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.removeChild(this.$refs.dialog)\n        else\n          document.getElementById(this.appendTo).removeChild(this.$refs.dialog)\n      }\n    }\n  },\n  computed: {\n    listeners() {\n      return {\n        ...this.$listeners\n      }\n    },\n    maskClass() {\n      return ['p-dialog-mask', { 'p-component-overlay p-component-overlay-enter': this.modal }, this.getPositionClass()]\n    },\n    dialogClass() {\n      return ['p-dialog p-component', {\n        'p-dialog-rtl': this.rtl,\n        'p-dialog-maximized': this.maximizable && this.maximized\n      }, this.dialogClasses]\n    },\n    maximizeIconClass() {\n      return ['p-dialog-header-maximize-icon pi', {\n        'pi-window-maximize': !this.maximized,\n        'pi-window-minimize': this.maximized\n      }]\n    },\n    dialogStyle() {\n      return this.dialogStyles || this.containerStyle\n    },\n    ariaId() {\n      return UniqueComponentId()\n    },\n    ariaLabelledById() {\n      return this.header != null ? this.ariaId + '_header' : null\n    }\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-dialog-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n}\n\n.p-dialog-mask.p-component-overlay {\n  pointer-events: auto;\n}\n\n.p-dialog {\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  max-height: 90%;\n  transform: scale(1);\n}\n\n.p-dialog-content {\n  overflow-y: auto;\n}\n\n.p-dialog-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n}\n\n.p-dialog-footer {\n  flex-shrink: 0;\n}\n\n.p-dialog .p-dialog-header-icons {\n  display: flex;\n  align-items: center;\n}\n\n.p-dialog .p-dialog-header-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Fluid */\n.p-fluid .p-dialog-footer .p-button {\n  width: auto;\n}\n\n/* Animation */\n/* Center */\n.p-dialog-enter-active {\n  transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n.p-dialog-leave-active {\n  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.p-dialog-enter,\n.p-dialog-leave-to {\n  opacity: 0;\n  transform: scale(0.7);\n}\n\n/* Top, Bottom, Left, Right, Top* and Bottom* */\n.p-dialog-top .p-dialog,\n.p-dialog-bottom .p-dialog,\n.p-dialog-left .p-dialog,\n.p-dialog-right .p-dialog,\n.p-dialog-topleft .p-dialog,\n.p-dialog-topright .p-dialog,\n.p-dialog-bottomleft .p-dialog,\n.p-dialog-bottomright .p-dialog {\n  margin: 0.75rem;\n  transform: translate3d(0px, 0px, 0px);\n}\n.p-dialog-top .p-dialog-enter-active,\n.p-dialog-top .p-dialog-leave-active,\n.p-dialog-bottom .p-dialog-enter-active,\n.p-dialog-bottom .p-dialog-leave-active,\n.p-dialog-left .p-dialog-enter-active,\n.p-dialog-left .p-dialog-leave-active,\n.p-dialog-right .p-dialog-enter-active,\n.p-dialog-right .p-dialog-leave-active,\n.p-dialog-topleft .p-dialog-enter-active,\n.p-dialog-topleft .p-dialog-leave-active,\n.p-dialog-topright .p-dialog-enter-active,\n.p-dialog-topright .p-dialog-leave-active,\n.p-dialog-bottomleft .p-dialog-enter-active,\n.p-dialog-bottomleft .p-dialog-leave-active,\n.p-dialog-bottomright .p-dialog-enter-active,\n.p-dialog-bottomright .p-dialog-leave-active {\n  transition: all 0.3s ease-out;\n}\n.p-dialog-top .p-dialog-enter,\n.p-dialog-top .p-dialog-leave-to {\n  transform: translate3d(0px, -100%, 0px);\n}\n.p-dialog-bottom .p-dialog-enter,\n.p-dialog-bottom .p-dialog-leave-to {\n  transform: translate3d(0px, 100%, 0px);\n}\n.p-dialog-left .p-dialog-enter,\n.p-dialog-left .p-dialog-leave-to,\n.p-dialog-topleft .p-dialog-enter,\n.p-dialog-topleft .p-dialog-leave-to,\n.p-dialog-bottomleft .p-dialog-enter,\n.p-dialog-bottomleft .p-dialog-leave-to {\n  transform: translate3d(-100%, 0px, 0px);\n}\n.p-dialog-right .p-dialog-enter,\n.p-dialog-right .p-dialog-leave-to,\n.p-dialog-topright .p-dialog-enter,\n.p-dialog-topright .p-dialog-leave-to,\n.p-dialog-bottomright .p-dialog-enter,\n.p-dialog-bottomright .p-dialog-leave-to {\n  transform: translate3d(100%, 0px, 0px);\n}\n\n/* Maximize */\n.p-dialog-maximized {\n  -webkit-transition: none;\n  transition: none;\n  transform: none;\n  width: 100vw !important;\n  max-height: 100%;\n  height: 100%;\n}\n.p-dialog-maximized .p-dialog-content {\n  flex-grow: 1;\n}\n\n/* Position */\n.p-dialog-left {\n  justify-content: flex-start;\n}\n.p-dialog-right {\n  justify-content: flex-end;\n}\n.p-dialog-top {\n  align-items: flex-start;\n}\n.p-dialog-topleft {\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.p-dialog-topright {\n  justify-content: flex-end;\n  align-items: flex-start;\n}\n.p-dialog-bottom {\n  align-items: flex-end;\n}\n.p-dialog-bottomleft {\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n.p-dialog-bottomright {\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n\n.p-confirm-dialog .p-dialog-content {\n  display: flex;\n  align-items: center;\n}\n</style>\n"]
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
      }, [_vm._v("\n      " + _vm._s(pageLink) + "\n    ")]);
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
    inject("data-v-cfd76fb4_0", {
      source: "\n.p-paginator {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n.p-paginator-left-content {\n  margin-right: auto;\n}\n.p-paginator-right-content {\n  margin-left: auto;\n}\n.p-paginator-page,\n.p-paginator-next,\n.p-paginator-last,\n.p-paginator-first,\n.p-paginator-prev,\n.p-paginator-current {\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  position: relative;\n}\n.p-paginator-element:focus {\n  z-index: 1;\n  position: relative;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/paginator/Paginator.vue"],
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

this.primevue2 = this.primevue2 || {};
this.primevue2.tree = (function (utils, Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
  function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty$1(obj, key, value) { key = _toPropertyKey$1(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : i + ""; }
  function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var TreeNodeTemplate = {
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
      var label = function label(node) {
        return typeof node.label === 'function' ? node.label() : node.label;
      };
      var content = context.props.template ? context.props.template({
        node: context.props.node
      }) : label(context.props.node);
      return [content];
    }
  };
  var script$1 = {
    name: 'sub-treenode',
    props: {
      node: {
        type: null,
        default: null
      },
      expandedKeys: {
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
      templates: {
        type: null,
        default: null
      }
    },
    nodeTouched: false,
    methods: {
      toggle: function toggle() {
        this.$emit('node-toggle', this.node);
      },
      onChildNodeToggle: function onChildNodeToggle(node) {
        this.$emit('node-toggle', node);
      },
      onClick: function onClick(event) {
        if (utils.DomHandler.hasClass(event.target, 'p-tree-toggler') || utils.DomHandler.hasClass(event.target.parentElement, 'p-tree-toggler')) {
          return;
        }
        if (this.isCheckboxSelectionMode()) {
          this.toggleCheckbox();
        } else {
          this.$emit('node-click', {
            originalEvent: event,
            nodeTouched: this.nodeTouched,
            node: this.node
          });
        }
        this.nodeTouched = false;
      },
      onChildNodeClick: function onChildNodeClick(event) {
        this.$emit('node-click', event);
      },
      onTouchEnd: function onTouchEnd() {
        this.nodeTouched = true;
      },
      onKeyDown: function onKeyDown(event) {
        var nodeElement = event.target.parentElement;
        switch (event.which) {
          //down arrow
          case 40:
            var listElement = nodeElement.children[1];
            if (listElement) {
              this.focusNode(listElement.children[0]);
            } else {
              var nextNodeElement = nodeElement.nextElementSibling;
              if (nextNodeElement) {
                this.focusNode(nextNodeElement);
              } else {
                var nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement);
                if (nextSiblingAncestor) {
                  this.focusNode(nextSiblingAncestor);
                }
              }
            }
            event.preventDefault();
            break;

          //up arrow
          case 38:
            if (nodeElement.previousElementSibling) {
              this.focusNode(this.findLastVisibleDescendant(nodeElement.previousElementSibling));
            } else {
              var parentNodeElement = this.getParentNodeElement(nodeElement);
              if (parentNodeElement) {
                this.focusNode(parentNodeElement);
              }
            }
            event.preventDefault();
            break;

          //right-left arrows
          case 37:
          case 39:
            this.$emit('node-toggle', this.node);
            event.preventDefault();
            break;

          //enter
          case 13:
            this.onClick(event);
            event.preventDefault();
            break;
        }
      },
      toggleCheckbox: function toggleCheckbox() {
        var _selectionKeys = this.selectionKeys ? _objectSpread$1({}, this.selectionKeys) : {};
        var _check = !this.checked;
        this.propagateDown(this.node, _check, _selectionKeys);
        this.$emit('checkbox-change', {
          node: this.node,
          check: _check,
          selectionKeys: _selectionKeys
        });
      },
      propagateDown: function propagateDown(node, check, selectionKeys) {
        if (check) selectionKeys[node.key] = {
          checked: true,
          partialChecked: false
        };else delete selectionKeys[node.key];
        if (node.children && node.children.length) {
          var _iterator = _createForOfIteratorHelper$1(node.children),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var child = _step.value;
              this.propagateDown(child, check, selectionKeys);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      },
      propagateUp: function propagateUp(event) {
        var check = event.check;
        var _selectionKeys = _objectSpread$1({}, event.selectionKeys);
        var checkedChildCount = 0;
        var childPartialSelected = false;
        var _iterator2 = _createForOfIteratorHelper$1(this.node.children),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var child = _step2.value;
            if (_selectionKeys[child.key] && _selectionKeys[child.key].checked) checkedChildCount++;else if (_selectionKeys[child.key] && _selectionKeys[child.key].partialChecked) childPartialSelected = true;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (check && checkedChildCount === this.node.children.length) {
          _selectionKeys[this.node.key] = {
            checked: true,
            partialChecked: false
          };
        } else {
          if (!check) {
            delete _selectionKeys[this.node.key];
          }
          if (childPartialSelected || checkedChildCount > 0 && checkedChildCount !== this.node.children.length) _selectionKeys[this.node.key] = {
            checked: false,
            partialChecked: true
          };else _selectionKeys[this.node.key] = {
            checked: false,
            partialChecked: false
          };
        }
        this.$emit('checkbox-change', {
          node: event.node,
          check: event.check,
          selectionKeys: _selectionKeys
        });
      },
      onChildCheckboxChange: function onChildCheckboxChange(event) {
        this.$emit('checkbox-change', event);
      },
      findNextSiblingOfAncestor: function findNextSiblingOfAncestor(nodeElement) {
        var parentNodeElement = this.getParentNodeElement(nodeElement);
        if (parentNodeElement) {
          if (parentNodeElement.nextElementSibling) return parentNodeElement.nextElementSibling;else return this.findNextSiblingOfAncestor(parentNodeElement);
        } else {
          return null;
        }
      },
      findLastVisibleDescendant: function findLastVisibleDescendant(nodeElement) {
        var childrenListElement = nodeElement.children[1];
        if (childrenListElement) {
          var lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
          return this.findLastVisibleDescendant(lastChildElement);
        } else {
          return nodeElement;
        }
      },
      getParentNodeElement: function getParentNodeElement(nodeElement) {
        var parentNodeElement = nodeElement.parentElement.parentElement;
        return utils.DomHandler.hasClass(parentNodeElement, 'p-treenode') ? parentNodeElement : null;
      },
      focusNode: function focusNode(element) {
        element.children[0].focus();
      },
      isCheckboxSelectionMode: function isCheckboxSelectionMode() {
        return this.selectionMode === 'checkbox';
      }
    },
    computed: {
      hasChildren: function hasChildren() {
        return this.node.children && this.node.children.length > 0;
      },
      expanded: function expanded() {
        return this.expandedKeys && this.expandedKeys[this.node.key] === true;
      },
      leaf: function leaf() {
        return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
      },
      selectable: function selectable() {
        return this.node.selectable === false ? false : this.selectionMode != null;
      },
      selected: function selected() {
        return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.node.key] === true : false;
      },
      containerClass: function containerClass() {
        return ['p-treenode', {
          'p-treenode-leaf': this.leaf
        }];
      },
      contentClass: function contentClass() {
        return ['p-treenode-content', this.node.styleClass, {
          'p-treenode-selectable': this.selectable,
          'p-highlight': this.checkboxMode ? this.checked : this.selected
        }];
      },
      icon: function icon() {
        return ['p-treenode-icon', this.node.icon];
      },
      toggleIcon: function toggleIcon() {
        return ['p-tree-toggler-icon pi pi-fw', {
          'pi-chevron-down': this.expanded,
          'pi-chevron-right': !this.expanded
        }];
      },
      checkboxClass: function checkboxClass() {
        return ['p-checkbox-box', {
          'p-highlight': this.checked,
          'p-indeterminate': this.partialChecked
        }];
      },
      checkboxIcon: function checkboxIcon() {
        return ['p-checkbox-icon', {
          'pi pi-check': this.checked,
          'pi pi-minus': this.partialChecked
        }];
      },
      checkboxMode: function checkboxMode() {
        return this.selectionMode === 'checkbox' && this.node.selectable !== false;
      },
      checked: function checked() {
        return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].checked : false;
      },
      partialChecked: function partialChecked() {
        return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].partialChecked : false;
      }
    },
    components: {
      TreeNodeTemplate: TreeNodeTemplate
    },
    directives: {
      ripple: Ripple__default["default"]
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
    return _c("li", {
      class: _vm.containerClass
    }, [_c("div", {
      class: _vm.contentClass,
      style: _vm.node.style,
      attrs: {
        tabindex: "0",
        role: "treeitem",
        "aria-expanded": _vm.expanded
      },
      on: {
        click: _vm.onClick,
        keydown: _vm.onKeyDown,
        touchend: _vm.onTouchEnd
      }
    }, [_c("button", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      staticClass: "p-tree-toggler p-link",
      attrs: {
        type: "button",
        tabindex: "-1"
      },
      on: {
        click: _vm.toggle
      }
    }, [_c("span", {
      class: _vm.toggleIcon
    })]), _vm._v(" "), _vm.checkboxMode ? _c("div", {
      staticClass: "p-checkbox p-component"
    }, [_c("div", {
      class: _vm.checkboxClass,
      attrs: {
        role: "checkbox",
        "aria-checked": _vm.checked
      }
    }, [_c("span", {
      class: _vm.checkboxIcon
    })])]) : _vm._e(), _vm._v(" "), _c("span", {
      class: _vm.icon
    }), _vm._v(" "), _c("span", {
      staticClass: "p-treenode-label"
    }, [_c("TreeNodeTemplate", {
      attrs: {
        node: _vm.node,
        template: _vm.templates[_vm.node.type] || _vm.templates["default"]
      }
    })], 1)]), _vm._v(" "), _vm.hasChildren && _vm.expanded ? _c("ul", {
      staticClass: "p-treenode-children",
      attrs: {
        role: "group"
      }
    }, _vm._l(_vm.node.children, function (childNode) {
      return _c("sub-treenode", {
        key: childNode.key,
        attrs: {
          node: childNode,
          templates: _vm.templates,
          expandedKeys: _vm.expandedKeys,
          selectionMode: _vm.selectionMode,
          selectionKeys: _vm.selectionKeys
        },
        on: {
          "node-toggle": _vm.onChildNodeToggle,
          "node-click": _vm.onChildNodeClick,
          "checkbox-change": _vm.propagateUp
        }
      });
    }), 1) : _vm._e()]);
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
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var script = {
    name: 'Tree',
    props: {
      value: {
        type: null,
        default: null
      },
      expandedKeys: {
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
      metaKeySelection: {
        type: Boolean,
        default: true
      },
      loading: {
        type: Boolean,
        default: false
      },
      loadingIcon: {
        type: String,
        default: 'pi pi-spinner'
      },
      filter: {
        type: Boolean,
        default: false
      },
      filterBy: {
        type: String,
        default: 'label'
      },
      filterMode: {
        type: String,
        default: 'lenient'
      },
      filterPlaceholder: {
        type: String,
        default: null
      },
      filterLocale: {
        type: String,
        default: undefined
      }
    },
    data: function data() {
      return {
        d_expandedKeys: this.expandedKeys || {},
        filterValue: null
      };
    },
    watch: {
      expandedKeys: function expandedKeys(newValue) {
        this.d_expandedKeys = newValue;
      }
    },
    methods: {
      onNodeToggle: function onNodeToggle(node) {
        var key = node.key;
        if (this.d_expandedKeys[key]) {
          delete this.d_expandedKeys[key];
          this.$emit('node-collapse', node);
        } else {
          this.d_expandedKeys[key] = true;
          this.$emit('node-expand', node);
        }
        this.d_expandedKeys = _objectSpread({}, this.d_expandedKeys);
        this.$emit('update:expandedKeys', this.d_expandedKeys);
      },
      onNodeClick: function onNodeClick(event) {
        if (this.selectionMode != null && event.node.selectable !== false) {
          var metaSelection = event.nodeTouched ? false : this.metaKeySelection;
          var _selectionKeys = metaSelection ? this.handleSelectionWithMetaKey(event) : this.handleSelectionWithoutMetaKey(event);
          this.$emit('update:selectionKeys', _selectionKeys);
        }
      },
      onCheckboxChange: function onCheckboxChange(event) {
        this.$emit('update:selectionKeys', event.selectionKeys);
        if (event.check) this.$emit('node-select', event.node);else this.$emit('node-unselect', event.node);
      },
      handleSelectionWithMetaKey: function handleSelectionWithMetaKey(event) {
        var originalEvent = event.originalEvent;
        var node = event.node;
        var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
        var selected = this.isNodeSelected(node);
        var _selectionKeys;
        if (selected && metaKey) {
          if (this.isSingleSelectionMode()) {
            _selectionKeys = {};
          } else {
            _selectionKeys = _objectSpread({}, this.selectionKeys);
            delete _selectionKeys[node.key];
          }
          this.$emit('node-unselect', node);
        } else {
          if (this.isSingleSelectionMode()) {
            _selectionKeys = {};
          } else if (this.isMultipleSelectionMode()) {
            _selectionKeys = !metaKey ? {} : this.selectionKeys ? _objectSpread({}, this.selectionKeys) : {};
          }
          _selectionKeys[node.key] = true;
          this.$emit('node-select', node);
        }
        return _selectionKeys;
      },
      handleSelectionWithoutMetaKey: function handleSelectionWithoutMetaKey(event) {
        var node = event.node;
        var selected = this.isNodeSelected(node);
        var _selectionKeys;
        if (this.isSingleSelectionMode()) {
          if (selected) {
            _selectionKeys = {};
            this.$emit('node-unselect', node);
          } else {
            _selectionKeys = {};
            _selectionKeys[node.key] = true;
            this.$emit('node-select', node);
          }
        } else {
          if (selected) {
            _selectionKeys = _objectSpread({}, this.selectionKeys);
            delete _selectionKeys[node.key];
            this.$emit('node-unselect', node);
          } else {
            _selectionKeys = this.selectionKeys ? _objectSpread({}, this.selectionKeys) : {};
            _selectionKeys[node.key] = true;
            this.$emit('node-select', node);
          }
        }
        return _selectionKeys;
      },
      isSingleSelectionMode: function isSingleSelectionMode() {
        return this.selectionMode === 'single';
      },
      isMultipleSelectionMode: function isMultipleSelectionMode() {
        return this.selectionMode === 'multiple';
      },
      isNodeSelected: function isNodeSelected(node) {
        return this.selectionMode && this.selectionKeys ? this.selectionKeys[node.key] === true : false;
      },
      isChecked: function isChecked(node) {
        return this.selectionKeys ? this.selectionKeys[node.key] && this.selectionKeys[node.key].checked : false;
      },
      isNodeLeaf: function isNodeLeaf(node) {
        return node.leaf === false ? false : !(node.children && node.children.length);
      },
      onFilterKeydown: function onFilterKeydown(event) {
        if (event.which === 13) {
          event.preventDefault();
        }
      },
      findFilteredNodes: function findFilteredNodes(node, paramsWithoutNode) {
        if (node) {
          var matched = false;
          if (node.children) {
            var childNodes = _toConsumableArray(node.children);
            node.children = [];
            var _iterator = _createForOfIteratorHelper(childNodes),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var childNode = _step.value;
                var copyChildNode = _objectSpread({}, childNode);
                if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                  matched = true;
                  node.children.push(copyChildNode);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          if (matched) {
            return true;
          }
        }
      },
      isFilterMatched: function isFilterMatched(node, _ref) {
        var searchFields = _ref.searchFields,
          filterText = _ref.filterText,
          strict = _ref.strict;
        var matched = false;
        var _iterator2 = _createForOfIteratorHelper(searchFields),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var field = _step2.value;
            var fieldValue = String(utils.ObjectUtils.resolveFieldData(node, field)).toLocaleLowerCase(this.filterLocale);
            if (fieldValue.indexOf(filterText) > -1) {
              matched = true;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (!matched || strict && !this.isNodeLeaf(node)) {
          matched = this.findFilteredNodes(node, {
            searchFields: searchFields,
            filterText: filterText,
            strict: strict
          }) || matched;
        }
        return matched;
      }
    },
    computed: {
      containerClass: function containerClass() {
        return ['p-tree p-component', {
          'p-tree-selectable': this.selectionMode != null,
          'p-tree-loading': this.loading
        }];
      },
      loadingIconClass: function loadingIconClass() {
        return ['p-tree-loading-icon pi-spin', this.loadingIcon];
      },
      filteredValue: function filteredValue() {
        var filteredNodes = [];
        var searchFields = this.filterBy.split(',');
        var filterText = this.filterValue.trim().toLocaleLowerCase(this.filterLocale);
        var strict = this.filterMode === 'strict';
        var _iterator3 = _createForOfIteratorHelper(this.value),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var node = _step3.value;
            var _node = _objectSpread({}, node);
            var paramsWithoutNode = {
              searchFields: searchFields,
              filterText: filterText,
              strict: strict
            };
            if (strict && (this.findFilteredNodes(_node, paramsWithoutNode) || this.isFilterMatched(_node, paramsWithoutNode)) || !strict && (this.isFilterMatched(_node, paramsWithoutNode) || this.findFilteredNodes(_node, paramsWithoutNode))) {
              filteredNodes.push(_node);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return filteredNodes;
      },
      valueToRender: function valueToRender() {
        if (this.filterValue && this.filterValue.trim().length > 0) return this.filteredValue;else return this.value;
      }
    },
    components: {
      TreeNode: __vue_component__$1
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
    }, [_vm.loading ? [_c("div", {
      staticClass: "p-tree-loading-overlay p-component-overlay"
    }, [_c("i", {
      class: _vm.loadingIconClass
    })])] : _vm._e(), _vm._v(" "), _vm.filter ? _c("div", {
      staticClass: "p-tree-filter-container"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.filterValue,
        expression: "filterValue"
      }],
      staticClass: "p-tree-filter p-inputtext p-component",
      attrs: {
        type: "text",
        autocomplete: "off",
        placeholder: _vm.filterPlaceholder
      },
      domProps: {
        value: _vm.filterValue
      },
      on: {
        keydown: _vm.onFilterKeydown,
        input: function input($event) {
          if ($event.target.composing) {
            return;
          }
          _vm.filterValue = $event.target.value;
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "p-tree-filter-icon pi pi-search"
    })]) : _vm._e(), _vm._v(" "), _c("ul", {
      staticClass: "p-tree-container",
      attrs: {
        role: "tree"
      }
    }, _vm._l(_vm.valueToRender, function (node) {
      return _c("TreeNode", {
        key: node.key,
        attrs: {
          node: node,
          templates: _vm.$scopedSlots,
          expandedKeys: _vm.d_expandedKeys,
          selectionMode: _vm.selectionMode,
          selectionKeys: _vm.selectionKeys
        },
        on: {
          "node-toggle": _vm.onNodeToggle,
          "node-click": _vm.onNodeClick,
          "checkbox-change": _vm.onCheckboxChange
        }
      });
    }), 1)], 2);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-85e63592_0", {
      source: "\n.p-tree-container {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  overflow: auto;\n}\n.p-treenode-children {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.p-treenode-selectable {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-tree-toggler {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: relative;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n.p-treenode-leaf > .p-treenode-content .p-tree-toggler {\n  visibility: hidden;\n}\n.p-treenode-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-tree-filter {\n  width: 100%;\n}\n.p-tree-filter-container {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.p-tree-filter-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5rem;\n}\n.p-tree-loading {\n  position: relative;\n  min-height: 4rem;\n}\n.p-tree .p-tree-loading-overlay {\n  position: absolute;\n  z-index: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/tree/Tree.vue"],
        "names": [],
        "mappings": ";AAwTA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;EACA,cAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;AACA;AAEA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AACA;AAEA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,gBAAA;EACA,kBAAA;EACA,sBAAA;MAAA,oBAAA;UAAA,cAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AAEA;EACA,WAAA;AACA;AAEA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;AACA;AAEA;EACA,kBAAA;EACA,QAAA;EACA,mBAAA;AACA;AAEA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;AACA",
        "file": "Tree.vue",
        "sourcesContent": ["<template>\n  <div :class=\"containerClass\">\n    <template v-if=\"loading\">\n      <div class=\"p-tree-loading-overlay p-component-overlay\">\n        <i :class=\"loadingIconClass\" />\n      </div>\n    </template>\n    <div class=\"p-tree-filter-container\" v-if=\"filter\">\n      <input\n        type=\"text\"\n        autocomplete=\"off\"\n        class=\"p-tree-filter p-inputtext p-component\"\n        :placeholder=\"filterPlaceholder\"\n        @keydown=\"onFilterKeydown\"\n        v-model=\"filterValue\" />\n      <span class=\"p-tree-filter-icon pi pi-search\"></span>\n    </div>\n    <ul class=\"p-tree-container\" role=\"tree\">\n      <TreeNode\n        v-for=\"node of valueToRender\"\n        :key=\"node.key\"\n        :node=\"node\"\n        :templates=\"$scopedSlots\"\n        :expandedKeys=\"d_expandedKeys\"\n        @node-toggle=\"onNodeToggle\"\n        @node-click=\"onNodeClick\"\n        :selectionMode=\"selectionMode\"\n        :selectionKeys=\"selectionKeys\"\n        @checkbox-change=\"onCheckboxChange\"></TreeNode>\n    </ul>\n  </div>\n</template>\n\n<script>\nimport TreeNode from './TreeNode.vue'\nimport { ObjectUtils } from 'primevue2/utils'\n\nexport default {\n  name: 'Tree',\n  props: {\n    value: {\n      type: null,\n      default: null\n    },\n    expandedKeys: {\n      type: null,\n      default: null\n    },\n    selectionKeys: {\n      type: null,\n      default: null\n    },\n    selectionMode: {\n      type: String,\n      default: null\n    },\n    metaKeySelection: {\n      type: Boolean,\n      default: true\n    },\n    loading: {\n      type: Boolean,\n      default: false\n    },\n    loadingIcon: {\n      type: String,\n      default: 'pi pi-spinner'\n    },\n    filter: {\n      type: Boolean,\n      default: false\n    },\n    filterBy: {\n      type: String,\n      default: 'label'\n    },\n    filterMode: {\n      type: String,\n      default: 'lenient'\n    },\n    filterPlaceholder: {\n      type: String,\n      default: null\n    },\n    filterLocale: {\n      type: String,\n      default: undefined\n    }\n  },\n  data() {\n    return {\n      d_expandedKeys: this.expandedKeys || {},\n      filterValue: null\n    }\n  },\n  watch: {\n    expandedKeys(newValue) {\n      this.d_expandedKeys = newValue\n    }\n  },\n  methods: {\n    onNodeToggle(node) {\n      const key = node.key\n\n      if (this.d_expandedKeys[key]) {\n        delete this.d_expandedKeys[key]\n        this.$emit('node-collapse', node)\n      } else {\n        this.d_expandedKeys[key] = true\n        this.$emit('node-expand', node)\n      }\n\n      this.d_expandedKeys = { ...this.d_expandedKeys }\n      this.$emit('update:expandedKeys', this.d_expandedKeys)\n    },\n    onNodeClick(event) {\n      if (this.selectionMode != null && event.node.selectable !== false) {\n        const metaSelection = event.nodeTouched ? false : this.metaKeySelection\n        const _selectionKeys = metaSelection\n          ? this.handleSelectionWithMetaKey(event)\n          : this.handleSelectionWithoutMetaKey(event)\n\n        this.$emit('update:selectionKeys', _selectionKeys)\n      }\n    },\n    onCheckboxChange(event) {\n      this.$emit('update:selectionKeys', event.selectionKeys)\n\n      if (event.check) this.$emit('node-select', event.node)\n      else this.$emit('node-unselect', event.node)\n    },\n    handleSelectionWithMetaKey(event) {\n      const originalEvent = event.originalEvent\n      const node = event.node\n      const metaKey = originalEvent.metaKey || originalEvent.ctrlKey\n      const selected = this.isNodeSelected(node)\n      let _selectionKeys\n\n      if (selected && metaKey) {\n        if (this.isSingleSelectionMode()) {\n          _selectionKeys = {}\n        } else {\n          _selectionKeys = { ...this.selectionKeys }\n          delete _selectionKeys[node.key]\n        }\n\n        this.$emit('node-unselect', node)\n      } else {\n        if (this.isSingleSelectionMode()) {\n          _selectionKeys = {}\n        } else if (this.isMultipleSelectionMode()) {\n          _selectionKeys = !metaKey\n            ? {}\n            : this.selectionKeys\n              ? { ...this.selectionKeys }\n              : {}\n        }\n\n        _selectionKeys[node.key] = true\n        this.$emit('node-select', node)\n      }\n\n      return _selectionKeys\n    },\n    handleSelectionWithoutMetaKey(event) {\n      const node = event.node\n      const selected = this.isNodeSelected(node)\n      let _selectionKeys\n\n      if (this.isSingleSelectionMode()) {\n        if (selected) {\n          _selectionKeys = {}\n          this.$emit('node-unselect', node)\n        } else {\n          _selectionKeys = {}\n          _selectionKeys[node.key] = true\n          this.$emit('node-select', node)\n        }\n      } else {\n        if (selected) {\n          _selectionKeys = { ...this.selectionKeys }\n          delete _selectionKeys[node.key]\n\n          this.$emit('node-unselect', node)\n        } else {\n          _selectionKeys = this.selectionKeys ? { ...this.selectionKeys } : {}\n          _selectionKeys[node.key] = true\n\n          this.$emit('node-select', node)\n        }\n      }\n\n      return _selectionKeys\n    },\n    isSingleSelectionMode() {\n      return this.selectionMode === 'single'\n    },\n    isMultipleSelectionMode() {\n      return this.selectionMode === 'multiple'\n    },\n    isNodeSelected(node) {\n      return this.selectionMode && this.selectionKeys\n        ? this.selectionKeys[node.key] === true\n        : false\n    },\n    isChecked(node) {\n      return this.selectionKeys\n        ? this.selectionKeys[node.key] && this.selectionKeys[node.key].checked\n        : false\n    },\n    isNodeLeaf(node) {\n      return node.leaf === false\n        ? false\n        : !(node.children && node.children.length)\n    },\n    onFilterKeydown(event) {\n      if (event.which === 13) {\n        event.preventDefault()\n      }\n    },\n    findFilteredNodes(node, paramsWithoutNode) {\n      if (node) {\n        let matched = false\n        if (node.children) {\n          let childNodes = [...node.children]\n          node.children = []\n          for (let childNode of childNodes) {\n            let copyChildNode = { ...childNode }\n            if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {\n              matched = true\n              node.children.push(copyChildNode)\n            }\n          }\n        }\n\n        if (matched) {\n          return true\n        }\n      }\n    },\n    isFilterMatched(node, { searchFields, filterText, strict }) {\n      let matched = false\n      for (let field of searchFields) {\n        let fieldValue = String(\n          ObjectUtils.resolveFieldData(node, field)\n        ).toLocaleLowerCase(this.filterLocale)\n        if (fieldValue.indexOf(filterText) > -1) {\n          matched = true\n        }\n      }\n\n      if (!matched || (strict && !this.isNodeLeaf(node))) {\n        matched =\n          this.findFilteredNodes(node, { searchFields, filterText, strict }) ||\n          matched\n      }\n\n      return matched\n    }\n  },\n  computed: {\n    containerClass() {\n      return [\n        'p-tree p-component',\n        {\n          'p-tree-selectable': this.selectionMode != null,\n          'p-tree-loading': this.loading\n        }\n      ]\n    },\n    loadingIconClass() {\n      return ['p-tree-loading-icon pi-spin', this.loadingIcon]\n    },\n    filteredValue() {\n      let filteredNodes = []\n      const searchFields = this.filterBy.split(',')\n      const filterText = this.filterValue\n        .trim()\n        .toLocaleLowerCase(this.filterLocale)\n      const strict = this.filterMode === 'strict'\n\n      for (let node of this.value) {\n        let _node = { ...node }\n        let paramsWithoutNode = { searchFields, filterText, strict }\n\n        if (\n          (strict &&\n            (this.findFilteredNodes(_node, paramsWithoutNode) ||\n              this.isFilterMatched(_node, paramsWithoutNode))) ||\n          (!strict &&\n            (this.isFilterMatched(_node, paramsWithoutNode) ||\n              this.findFilteredNodes(_node, paramsWithoutNode)))\n        ) {\n          filteredNodes.push(_node)\n        }\n      }\n\n      return filteredNodes\n    },\n    valueToRender() {\n      if (this.filterValue && this.filterValue.trim().length > 0)\n        return this.filteredValue\n      else return this.value\n    }\n  },\n  components: {\n    TreeNode: TreeNode\n  }\n}\n</script>\n\n<style>\n.p-tree-container {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  overflow: auto;\n}\n\n.p-treenode-children {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.p-treenode-selectable {\n  cursor: pointer;\n  user-select: none;\n}\n\n.p-tree-toggler {\n  cursor: pointer;\n  user-select: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n  flex-shrink: 0;\n}\n\n.p-treenode-leaf > .p-treenode-content .p-tree-toggler {\n  visibility: hidden;\n}\n\n.p-treenode-content {\n  display: flex;\n  align-items: center;\n}\n\n.p-tree-filter {\n  width: 100%;\n}\n\n.p-tree-filter-container {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n\n.p-tree-filter-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5rem;\n}\n\n.p-tree-loading {\n  position: relative;\n  min-height: 4rem;\n}\n\n.p-tree .p-tree-loading-overlay {\n  position: absolute;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n</style>\n"]
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

this.primevue2 = this.primevue2 || {};
this.primevue2.menu = (function (utils, Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  //
  var script$1 = {
    name: 'MenuItem',
    props: {
      item: null,
      exact: null
    },
    methods: {
      onClick: function onClick(event, navigate) {
        this.$emit('click', {
          originalEvent: event,
          item: this.item,
          navigate: navigate
        });
      },
      linkClass: function linkClass(item, routerProps) {
        return ['p-menuitem-link', {
          'p-disabled': this.disabled(item),
          'router-link-active': routerProps && routerProps.isActive,
          'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
        }];
      },
      visible: function visible() {
        return typeof this.item.visible === 'function' ? this.item.visible() : this.item.visible !== false;
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
        return ['p-menuitem', this.item.class];
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
    return _vm.visible() ? _c("li", {
      class: _vm.containerClass,
      style: _vm.item.style,
      attrs: {
        role: "none"
      }
    }, [_vm.item.to && !_vm.disabled(_vm.item) ? _c("router-link", {
      attrs: {
        to: _vm.item.to,
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
            class: _vm.linkClass(_vm.item, {
              isActive: isActive,
              isExactActive: isExactActive
            }),
            attrs: {
              href: href,
              role: "menuitem"
            },
            on: {
              click: function click($event) {
                return _vm.onClick($event, navigate);
              }
            }
          }, [_c("span", {
            class: ["p-menuitem-icon", _vm.item.icon]
          }), _vm._v(" "), _c("span", {
            staticClass: "p-menuitem-text"
          }, [_vm._v(_vm._s(_vm.label(_vm.item)))])])];
        }
      }], null, false, 3737693139)
    }) : _c("a", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      class: _vm.linkClass(_vm.item),
      attrs: {
        href: _vm.item.url,
        target: _vm.item.target,
        role: "menuitem",
        tabindex: _vm.disabled(_vm.item) ? null : "0"
      },
      on: {
        click: _vm.onClick
      }
    }, [_c("span", {
      class: ["p-menuitem-icon", _vm.item.icon]
    }), _vm._v(" "), _c("span", {
      staticClass: "p-menuitem-text"
    }, [_vm._v(_vm._s(_vm.label(_vm.item)))])])], 1) : _vm._e();
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
    name: 'Menu',
    props: {
      popup: {
        type: Boolean,
        default: false
      },
      model: {
        type: Array,
        default: null
      },
      appendTo: {
        type: String,
        default: null
      },
      autoZIndex: {
        type: Boolean,
        default: true
      },
      baseZIndex: {
        type: Number,
        default: 0
      },
      exact: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        overlayVisible: false
      };
    },
    target: null,
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    relativeAlign: false,
    beforeDestroy: function beforeDestroy() {
      this.restoreAppend();
      this.unbindResizeListener();
      this.unbindOutsideClickListener();
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      this.target = null;
    },
    methods: {
      itemClick: function itemClick(event) {
        var item = event.item;
        if (this.disabled(item)) {
          return;
        }
        if (item.command) {
          item.command(event);
          event.originalEvent.preventDefault();
        }
        this.hide();
      },
      toggle: function toggle(event) {
        if (this.overlayVisible) this.hide();else this.show(event);
      },
      show: function show(event) {
        this.overlayVisible = true;
        this.relativeAlign = event.relativeAlign;
        this.target = event.currentTarget;
      },
      hide: function hide() {
        this.overlayVisible = false;
        this.target = false;
        this.relativeAlign = false;
      },
      onEnter: function onEnter() {
        this.appendContainer();
        this.alignOverlay();
        this.bindOutsideClickListener();
        this.bindResizeListener();
        this.bindScrollListener();
        if (this.autoZIndex) {
          this.$refs.container.style.zIndex = String(this.baseZIndex + utils.DomHandler.generateZIndex());
        }
      },
      onLeave: function onLeave() {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
        this.unbindScrollListener();
      },
      alignOverlay: function alignOverlay() {
        if (this.relativeAlign) utils.DomHandler.relativePosition(this.$refs.container, this.target);else utils.DomHandler.absolutePosition(this.$refs.container, this.target);
      },
      bindOutsideClickListener: function bindOutsideClickListener() {
        var _this = this;
        if (!this.outsideClickListener) {
          this.outsideClickListener = function (event) {
            if (_this.overlayVisible && _this.$refs.container && !_this.$refs.container.contains(event.target) && !_this.isTargetClicked(event)) {
              _this.hide();
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
      bindScrollListener: function bindScrollListener() {
        var _this2 = this;
        if (!this.scrollHandler) {
          this.scrollHandler = new utils.ConnectedOverlayScrollHandler(this.target, function () {
            if (_this2.overlayVisible) {
              _this2.hide();
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
        var _this3 = this;
        if (!this.resizeListener) {
          this.resizeListener = function () {
            if (_this3.overlayVisible) {
              _this3.hide();
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
      },
      isTargetClicked: function isTargetClicked() {
        return this.target && (this.target === event.target || this.target.contains(event.target));
      },
      appendContainer: function appendContainer() {
        if (this.appendTo) {
          if (this.appendTo === 'body') document.body.appendChild(this.$refs.container);else document.getElementById(this.appendTo).appendChild(this.$refs.container);
        }
      },
      restoreAppend: function restoreAppend() {
        if (this.$refs.container && this.appendTo) {
          if (this.appendTo === 'body') document.body.removeChild(this.$refs.container);else document.getElementById(this.appendTo).removeChild(this.$refs.container);
        }
      },
      beforeDestroy: function beforeDestroy() {
        this.restoreAppend();
        this.unbindResizeListener();
        this.unbindOutsideClickListener();
        this.target = null;
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
        return ['p-menu p-component', {
          'p-menu-overlay': this.popup
        }];
      }
    },
    components: {
      'MenuItem': __vue_component__$1
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
    return _c("transition", {
      attrs: {
        name: "p-connected-overlay"
      },
      on: {
        enter: _vm.onEnter,
        leave: _vm.onLeave
      }
    }, [(_vm.popup ? _vm.overlayVisible : true) ? _c("div", {
      ref: "container",
      class: _vm.containerClass
    }, [_c("ul", {
      staticClass: "p-menu-list p-reset",
      attrs: {
        role: "menu"
      }
    }, [_vm._l(_vm.model, function (item, i) {
      return [item.items && _vm.visible(item) && !item.separator ? [item.items ? _c("li", {
        key: _vm.label(item) + i,
        staticClass: "p-submenu-header"
      }, [_vm._v(_vm._s(_vm.label(item)))]) : _vm._e(), _vm._v(" "), _vm._l(item.items, function (child, j) {
        return [_vm.visible(child) && !child.separator ? _c("MenuItem", {
          key: _vm.label(child) + i + j,
          attrs: {
            item: child,
            exact: _vm.exact
          },
          on: {
            click: _vm.itemClick
          }
        }) : _vm.visible(child) && child.separator ? _c("li", {
          key: "separator" + i + j,
          class: ["p-menu-separator", child.class],
          style: child.style,
          attrs: {
            role: "separator"
          }
        }) : _vm._e()];
      })] : _vm.visible(item) && item.separator ? _c("li", {
        key: "separator" + i,
        class: ["p-menu-separator", item.class],
        style: item.style,
        attrs: {
          role: "separator"
        }
      }) : _c("MenuItem", {
        key: _vm.label(item) + i,
        attrs: {
          item: item,
          exact: _vm.exact
        },
        on: {
          click: _vm.itemClick
        }
      })];
    })], 2)]) : _vm._e()]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-d207be1c_0", {
      source: "\n.p-menu-overlay {\n  position: absolute;\n}\n.p-menu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.p-menu .p-menuitem-link {\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n.p-menu .p-menuitem-text {\n  line-height: 1;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/menu/Menu.vue"],
        "names": [],
        "mappings": ";AA8OA;EACA,kBAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;AACA;AAEA;EACA,eAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,cAAA;AACA",
        "file": "Menu.vue",
        "sourcesContent": ["<template>\n  <transition name=\"p-connected-overlay\" @enter=\"onEnter\" @leave=\"onLeave\">\n    <div ref=\"container\" :class=\"containerClass\" v-if=\"popup ? overlayVisible : true\">\n      <ul class=\"p-menu-list p-reset\" role=\"menu\">\n        <template v-for=\"(item, i) of model\">\n          <template v-if=\"item.items && visible(item) && !item.separator\">\n            <li class=\"p-submenu-header\" :key=\"label(item) + i\" v-if=\"item.items\">{{ label(item) }}</li>\n            <template v-for=\"(child, j) of item.items\">\n              <MenuItem\n                v-if=\"visible(child) && !child.separator\"\n                :key=\"label(child) + i + j\"\n                :item=\"child\"\n                @click=\"itemClick\"\n                :exact=\"exact\" />\n              <li\n                v-else-if=\"visible(child) && child.separator\"\n                :class=\"['p-menu-separator', child.class]\"\n                :style=\"child.style\"\n                :key=\"'separator' + i + j\"\n                role=\"separator\"></li>\n            </template>\n          </template>\n          <li\n            v-else-if=\"visible(item) && item.separator\"\n            :class=\"['p-menu-separator', item.class]\"\n            :style=\"item.style\"\n            :key=\"'separator' + i\"\n            role=\"separator\"></li>\n          <MenuItem v-else :key=\"label(item) + i\" :item=\"item\" @click=\"itemClick\" :exact=\"exact\" />\n        </template>\n      </ul>\n    </div>\n  </transition>\n</template>\n\n<script>\nimport { ConnectedOverlayScrollHandler, DomHandler } from 'primevue2/utils'\nimport MenuItem from './MenuItem.vue'\n\nexport default {\n  name: 'Menu',\n  props: {\n    popup: {\n      type: Boolean,\n      default: false\n    },\n    model: {\n      type: Array,\n      default: null\n    },\n    appendTo: {\n      type: String,\n      default: null\n    },\n    autoZIndex: {\n      type: Boolean,\n      default: true\n    },\n    baseZIndex: {\n      type: Number,\n      default: 0\n    },\n    exact: {\n      type: Boolean,\n      default: true\n    }\n  },\n  data() {\n    return {\n      overlayVisible: false\n    }\n  },\n  target: null,\n  outsideClickListener: null,\n  scrollHandler: null,\n  resizeListener: null,\n  relativeAlign: false,\n  beforeDestroy() {\n    this.restoreAppend()\n    this.unbindResizeListener()\n    this.unbindOutsideClickListener()\n\n    if (this.scrollHandler) {\n      this.scrollHandler.destroy()\n      this.scrollHandler = null\n    }\n\n    this.target = null\n  },\n  methods: {\n    itemClick(event) {\n      const item = event.item\n      if (this.disabled(item)) {\n        return\n      }\n\n      if (item.command) {\n        item.command(event)\n        event.originalEvent.preventDefault()\n      }\n      this.hide()\n    },\n    toggle(event) {\n      if (this.overlayVisible)\n        this.hide()\n      else\n        this.show(event)\n    },\n    show(event) {\n      this.overlayVisible = true\n      this.relativeAlign = event.relativeAlign\n      this.target = event.currentTarget\n    },\n    hide() {\n      this.overlayVisible = false\n      this.target = false\n      this.relativeAlign = false\n    },\n    onEnter() {\n      this.appendContainer()\n      this.alignOverlay()\n      this.bindOutsideClickListener()\n      this.bindResizeListener()\n      this.bindScrollListener()\n\n      if (this.autoZIndex) {\n        this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())\n      }\n    },\n    onLeave() {\n      this.unbindOutsideClickListener()\n      this.unbindResizeListener()\n      this.unbindScrollListener()\n    },\n    alignOverlay() {\n      if (this.relativeAlign)\n        DomHandler.relativePosition(this.$refs.container, this.target)\n      else\n        DomHandler.absolutePosition(this.$refs.container, this.target)\n\n    },\n    bindOutsideClickListener() {\n      if (!this.outsideClickListener) {\n        this.outsideClickListener = (event) => {\n          if (this.overlayVisible && this.$refs.container && !this.$refs.container.contains(event.target) && !this.isTargetClicked(event)) {\n            this.hide()\n          }\n        }\n        document.addEventListener('click', this.outsideClickListener)\n      }\n    },\n    unbindOutsideClickListener() {\n      if (this.outsideClickListener) {\n        document.removeEventListener('click', this.outsideClickListener)\n        this.outsideClickListener = null\n      }\n    },\n    bindScrollListener() {\n      if (!this.scrollHandler) {\n        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {\n          if (this.overlayVisible) {\n            this.hide()\n          }\n        })\n      }\n\n      this.scrollHandler.bindScrollListener()\n    },\n    unbindScrollListener() {\n      if (this.scrollHandler) {\n        this.scrollHandler.unbindScrollListener()\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          if (this.overlayVisible) {\n            this.hide()\n          }\n        }\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    },\n    isTargetClicked() {\n      return this.target && (this.target === event.target || this.target.contains(event.target))\n    },\n    appendContainer() {\n      if (this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.appendChild(this.$refs.container)\n        else\n          document.getElementById(this.appendTo).appendChild(this.$refs.container)\n      }\n    },\n    restoreAppend() {\n      if (this.$refs.container && this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.removeChild(this.$refs.container)\n        else\n          document.getElementById(this.appendTo).removeChild(this.$refs.container)\n      }\n    },\n    beforeDestroy() {\n      this.restoreAppend()\n      this.unbindResizeListener()\n      this.unbindOutsideClickListener()\n      this.target = null\n    },\n    visible(item) {\n      return (typeof item.visible === 'function' ? item.visible() : item.visible !== false)\n    },\n    disabled(item) {\n      return (typeof item.disabled === 'function' ? item.disabled() : item.disabled)\n    },\n    label(item) {\n      return (typeof item.label === 'function' ? item.label() : item.label)\n    },\n  },\n  computed: {\n    containerClass() {\n      return ['p-menu p-component', {\n        'p-menu-overlay': this.popup\n      }]\n    }\n  },\n  components: {\n    'MenuItem': MenuItem\n  }\n}\n</script>\n\n<style>\n.p-menu-overlay {\n  position: absolute;\n}\n\n.p-menu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.p-menu .p-menuitem-link {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-menu .p-menuitem-text {\n  line-height: 1;\n}\n</style>\n"]
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

this.primevue2 = this.primevue2 || {};
this.primevue2.tieredmenu = (function (utils, Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  //
  var script$1 = {
    name: 'TieredMenuSub',
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
        if (this.disabled(item)) {
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
      onItemClick: function onItemClick(event, item) {
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
            var nextItem = this.findNextItem(listItem);
            if (nextItem) {
              nextItem.children[0].focus();
            }
            event.preventDefault();
            break;

          //up
          case 38:
            var prevItem = this.findPrevItem(listItem);
            if (prevItem) {
              prevItem.children[0].focus();
            }
            event.preventDefault();
            break;

          //right
          case 39:
            if (item.items) {
              this.activeItem = item;
              setTimeout(function () {
                listItem.children[1].children[0].children[0].focus();
              }, 50);
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
        //left
        if (event.originalEvent.which === 37) {
          this.activeItem = null;
          event.element.parentElement.previousElementSibling.focus();
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
          'p-submenu-list': !this.root
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
      ref: "element",
      class: _vm.containerClass,
      attrs: {
        role: "'menubar' : 'menu'",
        "aria-orientation": "horizontal"
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
        staticClass: "p-submenu-icon pi pi-angle-right"
      }) : _vm._e()]), _vm._v(" "), _vm.visible(item) && item.items ? _c("TieredMenuSub", {
        key: _vm.label(item) + "_sub_",
        attrs: {
          model: item.items,
          parentActive: item === _vm.activeItem,
          exact: _vm.exact
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
    name: 'TieredMenu',
    props: {
      popup: {
        type: Boolean,
        default: false
      },
      model: {
        type: Array,
        default: null
      },
      appendTo: {
        type: String,
        default: null
      },
      autoZIndex: {
        type: Boolean,
        default: true
      },
      baseZIndex: {
        type: Number,
        default: 0
      },
      exact: {
        type: Boolean,
        default: true
      }
    },
    target: null,
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    data: function data() {
      return {
        visible: false
      };
    },
    beforeDestroy: function beforeDestroy() {
      this.restoreAppend();
      this.unbindResizeListener();
      this.unbindOutsideClickListener();
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      this.target = null;
    },
    methods: {
      itemClick: function itemClick(event) {
        var item = event.item;
        if (item.command) {
          item.command(event);
          event.originalEvent.preventDefault();
        }
        this.hide();
      },
      toggle: function toggle(event) {
        if (this.visible) this.hide();else this.show(event);
      },
      show: function show(event) {
        this.visible = true;
        this.target = event.currentTarget;
      },
      hide: function hide() {
        this.visible = false;
      },
      onEnter: function onEnter() {
        this.appendContainer();
        this.alignOverlay();
        this.bindOutsideClickListener();
        this.bindResizeListener();
        this.bindScrollListener();
        if (this.autoZIndex) {
          this.$refs.container.style.zIndex = String(this.baseZIndex + utils.DomHandler.generateZIndex());
        }
      },
      onLeave: function onLeave() {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
        this.unbindScrollListener();
      },
      alignOverlay: function alignOverlay() {
        utils.DomHandler.absolutePosition(this.$refs.container, this.target);
      },
      bindOutsideClickListener: function bindOutsideClickListener() {
        var _this = this;
        if (!this.outsideClickListener) {
          this.outsideClickListener = function (event) {
            if (_this.visible && _this.$refs.container && !_this.$refs.container.contains(event.target) && !_this.isTargetClicked(event)) {
              _this.hide();
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
      bindScrollListener: function bindScrollListener() {
        var _this2 = this;
        if (!this.scrollHandler) {
          this.scrollHandler = new utils.ConnectedOverlayScrollHandler(this.target, function () {
            if (_this2.visible) {
              _this2.hide();
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
        var _this3 = this;
        if (!this.resizeListener) {
          this.resizeListener = function () {
            if (_this3.visible) {
              _this3.hide();
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
      },
      isTargetClicked: function isTargetClicked() {
        return this.target && (this.target === event.target || this.target.contains(event.target));
      },
      appendContainer: function appendContainer() {
        if (this.appendTo) {
          if (this.appendTo === 'body') document.body.appendChild(this.$refs.container);else document.getElementById(this.appendTo).appendChild(this.$refs.container);
        }
      },
      restoreAppend: function restoreAppend() {
        if (this.$refs.container && this.appendTo) {
          if (this.appendTo === 'body') document.body.removeChild(this.$refs.container);else document.getElementById(this.appendTo).removeChild(this.$refs.container);
        }
      },
      onLeafClick: function onLeafClick() {
        if (this.popup) {
          this.hide();
        }
      }
    },
    computed: {
      containerClass: function containerClass() {
        return ['p-tieredmenu p-component', {
          'p-tieredmenu-overlay': this.popup
        }];
      }
    },
    components: {
      'TieredMenuSub': __vue_component__$1
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
    return _c("transition", {
      attrs: {
        name: "p-connected-overlay"
      },
      on: {
        enter: _vm.onEnter,
        leave: _vm.onLeave
      }
    }, [(_vm.popup ? _vm.visible : true) ? _c("div", {
      ref: "container",
      class: _vm.containerClass
    }, [_c("TieredMenuSub", {
      attrs: {
        model: _vm.model,
        root: true,
        popup: _vm.popup,
        exact: _vm.exact
      },
      on: {
        "leaf-click": _vm.onLeafClick
      }
    })], 1) : _vm._e()]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-2e4de171_0", {
      source: "\n.p-tieredmenu-overlay {\n  position: absolute;\n}\n.p-tieredmenu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.p-tieredmenu .p-submenu-list {\n  position: absolute;\n  min-width: 100%;\n  z-index: 1;\n  display: none;\n}\n.p-tieredmenu .p-menuitem-link {\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n.p-tieredmenu .p-menuitem-text {\n  line-height: 1;\n}\n.p-tieredmenu .p-menuitem {\n  position: relative;\n}\n.p-tieredmenu .p-menuitem-link .p-submenu-icon {\n  margin-left: auto;\n}\n.p-tieredmenu .p-menuitem-active > .p-submenu-list {\n  display: block;\n  left: 100%;\n  top: 0;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/开源学习/primevue2/src/components/tieredmenu/TieredMenu.vue"],
        "names": [],
        "mappings": ";AA6LA;EACA,kBAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;AACA;AAEA;EACA,kBAAA;EACA,eAAA;EACA,UAAA;EACA,aAAA;AACA;AAEA;EACA,eAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,cAAA;EACA,UAAA;EACA,MAAA;AACA",
        "file": "TieredMenu.vue",
        "sourcesContent": ["<template>\n  <transition name=\"p-connected-overlay\" @enter=\"onEnter\" @leave=\"onLeave\">\n    <div ref=\"container\" :class=\"containerClass\" v-if=\"popup ? visible : true\">\n      <TieredMenuSub :model=\"model\" :root=\"true\" :popup=\"popup\" @leaf-click=\"onLeafClick\" :exact=\"exact\" />\n    </div>\n  </transition>\n</template>\n\n<script>\nimport { DomHandler, ConnectedOverlayScrollHandler } from 'primevue2/utils'\nimport TieredMenuSub from './TieredMenuSub.vue'\n\nexport default {\n  name: 'TieredMenu',\n  props: {\n    popup: {\n      type: Boolean,\n      default: false\n    },\n    model: {\n      type: Array,\n      default: null\n    },\n    appendTo: {\n      type: String,\n      default: null\n    },\n    autoZIndex: {\n      type: Boolean,\n      default: true\n    },\n    baseZIndex: {\n      type: Number,\n      default: 0\n    },\n    exact: {\n      type: Boolean,\n      default: true\n    }\n  },\n  target: null,\n  outsideClickListener: null,\n  scrollHandler: null,\n  resizeListener: null,\n  data() {\n    return {\n      visible: false\n    }\n  },\n  beforeDestroy() {\n    this.restoreAppend()\n    this.unbindResizeListener()\n    this.unbindOutsideClickListener()\n\n    if (this.scrollHandler) {\n      this.scrollHandler.destroy()\n      this.scrollHandler = null\n    }\n\n    this.target = null\n  },\n  methods: {\n    itemClick(event) {\n      const item = event.item\n      if (item.command) {\n        item.command(event)\n        event.originalEvent.preventDefault()\n      }\n      this.hide()\n    },\n    toggle(event) {\n      if (this.visible)\n        this.hide()\n      else\n        this.show(event)\n    },\n    show(event) {\n      this.visible = true\n      this.target = event.currentTarget\n    },\n    hide() {\n      this.visible = false\n    },\n    onEnter() {\n      this.appendContainer()\n      this.alignOverlay()\n      this.bindOutsideClickListener()\n      this.bindResizeListener()\n      this.bindScrollListener()\n\n      if (this.autoZIndex) {\n        this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())\n      }\n    },\n    onLeave() {\n      this.unbindOutsideClickListener()\n      this.unbindResizeListener()\n      this.unbindScrollListener()\n    },\n    alignOverlay() {\n      DomHandler.absolutePosition(this.$refs.container, this.target)\n    },\n    bindOutsideClickListener() {\n      if (!this.outsideClickListener) {\n        this.outsideClickListener = (event) => {\n          if (this.visible && this.$refs.container && !this.$refs.container.contains(event.target) && !this.isTargetClicked(event)) {\n            this.hide()\n          }\n        }\n        document.addEventListener('click', this.outsideClickListener)\n      }\n    },\n    unbindOutsideClickListener() {\n      if (this.outsideClickListener) {\n        document.removeEventListener('click', this.outsideClickListener)\n        this.outsideClickListener = null\n      }\n    },\n    bindScrollListener() {\n      if (!this.scrollHandler) {\n        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {\n          if (this.visible) {\n            this.hide()\n          }\n        })\n      }\n\n      this.scrollHandler.bindScrollListener()\n    },\n    unbindScrollListener() {\n      if (this.scrollHandler) {\n        this.scrollHandler.unbindScrollListener()\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          if (this.visible) {\n            this.hide()\n          }\n        }\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    },\n    isTargetClicked() {\n      return this.target && (this.target === event.target || this.target.contains(event.target))\n    },\n    appendContainer() {\n      if (this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.appendChild(this.$refs.container)\n        else\n          document.getElementById(this.appendTo).appendChild(this.$refs.container)\n      }\n    },\n    restoreAppend() {\n      if (this.$refs.container && this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.removeChild(this.$refs.container)\n        else\n          document.getElementById(this.appendTo).removeChild(this.$refs.container)\n      }\n    },\n    onLeafClick() {\n      if (this.popup) {\n        this.hide()\n      }\n    }\n  },\n  computed: {\n    containerClass() {\n      return ['p-tieredmenu p-component', {\n        'p-tieredmenu-overlay': this.popup\n      }]\n    }\n  },\n  components: {\n    'TieredMenuSub': TieredMenuSub\n  }\n}\n</script>\n\n<style>\n.p-tieredmenu-overlay {\n  position: absolute;\n}\n\n.p-tieredmenu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.p-tieredmenu .p-submenu-list {\n  position: absolute;\n  min-width: 100%;\n  z-index: 1;\n  display: none;\n}\n\n.p-tieredmenu .p-menuitem-link {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-tieredmenu .p-menuitem-text {\n  line-height: 1;\n}\n\n.p-tieredmenu .p-menuitem {\n  position: relative;\n}\n\n.p-tieredmenu .p-menuitem-link .p-submenu-icon {\n  margin-left: auto;\n}\n\n.p-tieredmenu .p-menuitem-active > .p-submenu-list {\n  display: block;\n  left: 100%;\n  top: 0;\n}\n</style>\n"]
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

this.primevue2 = this.primevue2 || {};
this.primevue2.badge = (function () {
  'use strict';

  //
  //
  //
  //

  var script = {
    name: 'Badge',
    props: {
      value: null,
      severity: null,
      size: null
    },
    computed: {
      containerClass: function containerClass() {
        return this.$slots.default ? 'p-overlay-badge' : this.badgeClass;
      },
      badgeClass: function badgeClass() {
        return ['p-badge p-component', {
          'p-badge-no-gutter': this.value && String(this.value).length === 1,
          'p-badge-dot': !this.value,
          'p-badge-lg': this.size === 'large',
          'p-badge-xl': this.size === 'xlarge',
          'p-badge-info': this.severity === 'info',
          'p-badge-success': this.severity === 'success',
          'p-badge-warning': this.severity === 'warning',
          'p-badge-danger': this.severity === 'danger'
        }];
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
    return _c("span", {
      class: _vm.badgeClass
    }, [_vm._v(_vm._s(_vm.value))]);
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

  return __vue_component__;

})();

