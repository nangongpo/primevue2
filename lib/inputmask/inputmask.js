this.primevue2 = this.primevue2 || {};
this.primevue2.inputmask = (function (utils) {
  'use strict';

  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var script = {
    name: 'InputMask',
    props: {
      value: null,
      slotChar: {
        type: String,
        default: '_'
      },
      mask: {
        type: String,
        default: null
      },
      autoClear: {
        type: Boolean,
        default: true
      },
      unmask: {
        type: Boolean,
        default: false
      },
      ariaLabelledBy: null
    },
    methods: {
      caret: function caret(first, last) {
        var range, begin, end;
        if (!this.$el.offsetParent || this.$el !== document.activeElement) {
          return;
        }
        if (typeof first === 'number') {
          begin = first;
          end = typeof last === 'number' ? last : begin;
          if (this.$el.setSelectionRange) {
            this.$el.setSelectionRange(begin, end);
          } else if (this.$el['createTextRange']) {
            range = this.$el['createTextRange']();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', begin);
            range.select();
          }
        } else {
          if (this.$el.setSelectionRange) {
            begin = this.$el.selectionStart;
            end = this.$el.selectionEnd;
          } else if (document['selection'] && document['selection'].createRange) {
            range = document['selection'].createRange();
            begin = 0 - range.duplicate().moveStart('character', -100000);
            end = begin + range.text.length;
          }
          return {
            begin: begin,
            end: end
          };
        }
      },
      isCompleted: function isCompleted() {
        for (var i = this.firstNonMaskPos; i <= this.lastRequiredNonMaskPos; i++) {
          if (this.tests[i] && this.buffer[i] === this.getPlaceholder(i)) {
            return false;
          }
        }
        return true;
      },
      getPlaceholder: function getPlaceholder(i) {
        if (i < this.slotChar.length) {
          return this.slotChar.charAt(i);
        }
        return this.slotChar.charAt(0);
      },
      seekNext: function seekNext(pos) {
        while (++pos < this.len && !this.tests[pos]);
        return pos;
      },
      seekPrev: function seekPrev(pos) {
        while (--pos >= 0 && !this.tests[pos]);
        return pos;
      },
      shiftL: function shiftL(begin, end) {
        var i, j;
        if (begin < 0) {
          return;
        }
        for (i = begin, j = this.seekNext(end); i < this.len; i++) {
          if (this.tests[i]) {
            if (j < this.len && this.tests[i].test(this.buffer[j])) {
              this.buffer[i] = this.buffer[j];
              this.buffer[j] = this.getPlaceholder(j);
            } else {
              break;
            }
            j = this.seekNext(j);
          }
        }
        this.writeBuffer();
        this.caret(Math.max(this.firstNonMaskPos, begin));
      },
      shiftR: function shiftR(pos) {
        var i, c, j, t;
        for (i = pos, c = this.getPlaceholder(pos); i < this.len; i++) {
          if (this.tests[i]) {
            j = this.seekNext(i);
            t = this.buffer[i];
            this.buffer[i] = c;
            if (j < this.len && this.tests[j].test(t)) {
              c = t;
            } else {
              break;
            }
          }
        }
      },
      handleAndroidInput: function handleAndroidInput(event) {
        var curVal = this.$el.value;
        var pos = this.caret();
        if (this.oldVal && this.oldVal.length && this.oldVal.length > curVal.length) {
          // a deletion or backspace happened
          this.checkVal(true);
          while (pos.begin > 0 && !this.tests[pos.begin - 1]) pos.begin--;
          if (pos.begin === 0) {
            while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin]) pos.begin++;
          }
          this.caret(pos.begin, pos.begin);
        } else {
          this.checkVal(true);
          while (pos.begin < this.len && !this.tests[pos.begin]) pos.begin++;
          this.caret(pos.begin, pos.begin);
        }
        if (this.isCompleted()) {
          this.$emit('complete', event);
        }
      },
      clearBuffer: function clearBuffer(start, end) {
        var i;
        for (i = start; i < end && i < this.len; i++) {
          if (this.tests[i]) {
            this.buffer[i] = this.getPlaceholder(i);
          }
        }
      },
      writeBuffer: function writeBuffer() {
        this.$el.value = this.buffer.join('');
      },
      checkVal: function checkVal(allow) {
        this.isValueChecked = true;
        //try to place characters where they belong
        var test = this.$el.value,
          lastMatch = -1,
          i,
          c,
          pos;
        for (i = 0, pos = 0; i < this.len; i++) {
          if (this.tests[i]) {
            this.buffer[i] = this.getPlaceholder(i);
            while (pos++ < test.length) {
              c = test.charAt(pos - 1);
              if (this.tests[i].test(c)) {
                this.buffer[i] = c;
                lastMatch = i;
                break;
              }
            }
            if (pos > test.length) {
              this.clearBuffer(i + 1, this.len);
              break;
            }
          } else {
            if (this.buffer[i] === test.charAt(pos)) {
              pos++;
            }
            if (i < this.partialPosition) {
              lastMatch = i;
            }
          }
        }
        if (allow) {
          this.writeBuffer();
        } else if (lastMatch + 1 < this.partialPosition) {
          if (this.autoClear || this.buffer.join('') === this.defaultBuffer) {
            // Invalid value. Remove it and replace it with the
            // mask, which is the default behavior.
            if (this.$el.value) this.$el.value = '';
            this.clearBuffer(0, this.len);
          } else {
            // Invalid value, but we opt to show the value to the
            // user and allow them to correct their mistake.
            this.writeBuffer();
          }
        } else {
          this.writeBuffer();
          this.$el.value = this.$el.value.substring(0, lastMatch + 1);
        }
        return this.partialPosition ? i : this.firstNonMaskPos;
      },
      handleInputChange: function handleInputChange(event) {
        if (this.$attrs.readonly) {
          return;
        }
        var pos = this.checkVal(true);
        this.caret(pos);
        this.updateModel(event);
        if (this.isCompleted()) {
          this.$emit('complete', event);
        }
      },
      getUnmaskedValue: function getUnmaskedValue() {
        var unmaskedBuffer = [];
        for (var i = 0; i < this.buffer.length; i++) {
          var c = this.buffer[i];
          if (this.tests[i] && c !== this.getPlaceholder(i)) {
            unmaskedBuffer.push(c);
          }
        }
        return unmaskedBuffer.join('');
      },
      updateModel: function updateModel(e) {
        var val = this.unmask ? this.getUnmaskedValue() : e.target.value;
        this.$emit('input', this.defaultBuffer !== val ? val : '');
      },
      updateValue: function updateValue() {
        var _this = this;
        var updateModel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        if (this.$el) {
          if (this.value == null) {
            this.$el.value = '';
            updateModel && this.$emit('input', '');
          } else {
            this.$el.value = this.value;
            this.checkVal();
            setTimeout(function () {
              if (_this.$el) {
                _this.writeBuffer();
                _this.checkVal();
                if (updateModel) {
                  var val = _this.unmask ? _this.getUnmaskedValue() : _this.$el.value;
                  _this.$emit('update:modelValue', _this.defaultBuffer !== val ? val : '');
                }
              }
            }, 10);
          }
          this.focusText = this.$el.value;
        }
      },
      isValueUpdated: function isValueUpdated() {
        return this.unmask ? this.value != this.getUnmaskedValue() : this.defaultBuffer !== this.$el.value && this.$el.value !== this.value;
      }
    },
    mounted: function mounted() {
      this.tests = [];
      this.partialPosition = this.mask.length;
      this.len = this.mask.length;
      this.firstNonMaskPos = null;
      this.defs = {
        '9': '[0-9]',
        'a': '[A-Za-z]',
        '*': '[A-Za-z0-9]'
      };
      var ua = utils.DomHandler.getUserAgent();
      this.androidChrome = /chrome/i.test(ua) && /android/i.test(ua);
      var maskTokens = this.mask.split('');
      for (var i = 0; i < maskTokens.length; i++) {
        var c = maskTokens[i];
        if (c === '?') {
          this.len--;
          this.partialPosition = i;
        } else if (this.defs[c]) {
          this.tests.push(new RegExp(this.defs[c]));
          if (this.firstNonMaskPos === null) {
            this.firstNonMaskPos = this.tests.length - 1;
          }
          if (i < this.partialPosition) {
            this.lastRequiredNonMaskPos = this.tests.length - 1;
          }
        } else {
          this.tests.push(null);
        }
      }
      this.buffer = [];
      for (var _i = 0; _i < maskTokens.length; _i++) {
        var _c = maskTokens[_i];
        if (_c !== '?') {
          if (this.defs[_c]) this.buffer.push(this.getPlaceholder(_i));else this.buffer.push(_c);
        }
      }
      this.defaultBuffer = this.buffer.join('');
      this.updateValue(false);
    },
    updated: function updated() {
      if (this.isValueUpdated()) {
        this.updateValue();
      }
    },
    computed: {
      listeners: function listeners() {
        var $vm = this;
        return _objectSpread(_objectSpread({}, $vm.$listeners), {}, {
          input: function input(event) {
            if ($vm.androidChrome) $vm.handleAndroidInput(event);else $vm.handleInputChange(event);
            $vm.$emit('input', event.target.value);
          },
          focus: function focus(event) {
            if ($vm.$attrs.readonly) {
              return;
            }
            $vm.focus = true;
            clearTimeout($vm.caretTimeoutId);
            var pos;
            $vm.focusText = $vm.$el.value;
            pos = $vm.checkVal();
            $vm.caretTimeoutId = setTimeout(function () {
              if ($vm.$el !== document.activeElement) {
                return;
              }
              $vm.writeBuffer();
              if (pos === $vm.mask.replace('?', '').length) {
                $vm.caret(0, pos);
              } else {
                $vm.caret(pos);
              }
            }, 10);
            $vm.$emit('focus', event);
          },
          blur: function blur(event) {
            $vm.focus = false;
            $vm.checkVal();
            $vm.updateModel(event);
            if ($vm.$el.value !== $vm.focusText) {
              var e = document.createEvent('HTMLEvents');
              e.initEvent('change', true, false);
              $vm.$el.dispatchEvent(e);
            }
            $vm.$emit('blur', event);
          },
          keydown: function keydown(event) {
            if ($vm.$attrs.readonly) {
              return;
            }
            var k = event.which || event.keyCode,
              pos,
              begin,
              end;
            var iPhone = /iphone/i.test(utils.DomHandler.getUserAgent());
            $vm.oldVal = $vm.$el.value;

            //backspace, delete, and escape get special treatment
            if (k === 8 || k === 46 || iPhone && k === 127) {
              pos = $vm.caret();
              begin = pos.begin;
              end = pos.end;
              if (end - begin === 0) {
                begin = k !== 46 ? $vm.seekPrev(begin) : end = $vm.seekNext(begin - 1);
                end = k === 46 ? $vm.seekNext(end) : end;
              }
              $vm.clearBuffer(begin, end);
              $vm.shiftL(begin, end - 1);
              $vm.updateModel(event);
              event.preventDefault();
            } else if (k === 13) {
              // enter
              $vm.$el.blur();
              $vm.updateModel(event);
            } else if (k === 27) {
              // escape
              $vm.$el.value = $vm.focusText;
              $vm.caret(0, $vm.checkVal());
              $vm.updateModel(event);
              event.preventDefault();
            }
            $vm.$emit('keydown', event);
          },
          keypress: function keypress(event) {
            if ($vm.$attrs.readonly) {
              return;
            }
            var k = event.which || event.keyCode,
              pos = $vm.caret(),
              p,
              c,
              next,
              completed;
            if (event.ctrlKey || event.altKey || event.metaKey || k < 32) {
              //Ignore
              return;
            } else if (k && k !== 13) {
              if (pos.end - pos.begin !== 0) {
                $vm.clearBuffer(pos.begin, pos.end);
                $vm.shiftL(pos.begin, pos.end - 1);
              }
              p = $vm.seekNext(pos.begin - 1);
              if (p < $vm.len) {
                c = String.fromCharCode(k);
                if ($vm.tests[p].test(c)) {
                  $vm.shiftR(p);
                  $vm.buffer[p] = c;
                  $vm.writeBuffer();
                  next = $vm.seekNext(p);
                  if (/android/i.test(utils.DomHandler.getUserAgent())) {
                    //Path for CSP Violation on FireFox OS 1.1
                    var proxy = function proxy() {
                      $vm.caret(next);
                    };
                    setTimeout(proxy, 0);
                  } else {
                    $vm.caret(next);
                  }
                  if (pos.begin <= $vm.lastRequiredNonMaskPos) {
                    completed = $vm.isCompleted();
                  }
                }
              }
              event.preventDefault();
            }
            $vm.updateModel(event);
            if (completed) {
              $vm.$emit('complete', event);
            }
            $vm.$emit('keypress', event);
          },
          paste: function paste(event) {
            $vm.handleInputChange(event);
            $vm.$emit('paste', event);
          }
        });
      },
      filled: function filled() {
        return this.value != null && this.value.toString().length > 0;
      },
      inputClass: function inputClass() {
        return ['p-inputmask p-inputtext p-component', {
          'p-filled': this.filled,
          'p-disabled': this.$attrs.disabled
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
    return _c("input", _vm._g({
      class: _vm.inputClass
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

})(primevue2.utils);
