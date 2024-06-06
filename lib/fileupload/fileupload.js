this.primevue2 = this.primevue2 || {};
this.primevue2.fileupload = (function (Button, ProgressBar, Message, utils, Ripple) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
  var ProgressBar__default = /*#__PURE__*/_interopDefaultLegacy(ProgressBar);
  var Message__default = /*#__PURE__*/_interopDefaultLegacy(Message);
  var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var script = {
    name: 'FileUpload',
    props: {
      name: {
        type: String,
        default: null
      },
      url: {
        type: String,
        default: null
      },
      mode: {
        type: String,
        default: 'advanced'
      },
      multiple: {
        type: Boolean,
        default: false
      },
      accept: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      auto: {
        type: Boolean,
        default: false
      },
      maxFileSize: {
        type: Number,
        default: null
      },
      invalidFileSizeMessage: {
        type: String,
        default: '{0}: Invalid file size, file size should be smaller than {1}.'
      },
      invalidFileTypeMessage: {
        type: String,
        default: '{0}: Invalid file type, allowed file types: {1}.'
      },
      fileLimit: {
        type: Number,
        default: null
      },
      invalidFileLimitMessage: {
        type: String,
        default: 'Maximum number of files exceeded, limit is {0} at most.'
      },
      withCredentials: {
        type: Boolean,
        default: false
      },
      previewWidth: {
        type: Number,
        default: 50
      },
      chooseLabel: {
        type: String,
        default: null
      },
      uploadLabel: {
        type: String,
        default: null
      },
      cancelLabel: {
        type: String,
        default: null
      },
      customUpload: {
        type: Boolean,
        default: false
      },
      showUploadButton: {
        type: Boolean,
        default: true
      },
      showCancelButton: {
        type: Boolean,
        default: true
      },
      buttonStyle: null,
      buttonClass: null
    },
    duplicateIEEvent: false,
    data: function data() {
      return {
        uploadedFileCount: 0,
        files: [],
        messages: null,
        focused: false,
        progress: null
      };
    },
    methods: {
      onFileSelect: function onFileSelect(event) {
        if (event.type !== 'drop' && this.isIE11() && this.duplicateIEEvent) {
          this.duplicateIEEvent = false;
          return;
        }
        this.messages = [];
        this.files = this.files || [];
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        var _iterator = _createForOfIteratorHelper(files),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var file = _step.value;
            if (!this.isFileSelected(file)) {
              if (this.validate(file)) {
                if (this.isImage(file)) {
                  file.objectURL = window.URL.createObjectURL(file);
                }
                this.files.push(file);
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.$emit('select', {
          originalEvent: event,
          files: this.files
        });
        if (this.fileLimit) {
          this.checkFileLimit();
        }
        if (this.auto && this.hasFiles && !this.isFileLimitExceeded()) {
          this.upload();
        }
        if (event.type !== 'drop' && this.isIE11()) {
          this.clearIEInput();
        } else {
          this.clearInputElement();
        }
      },
      choose: function choose() {
        this.$refs.fileInput.click();
      },
      upload: function upload() {
        var _this = this;
        if (this.customUpload) {
          if (this.fileLimit) {
            this.uploadedFileCount += this.files.length;
          }
          this.$emit('uploader', {
            files: this.files
          });
          this.clear();
        } else {
          var xhr = new XMLHttpRequest();
          var formData = new FormData();
          this.$emit('before-upload', {
            'xhr': xhr,
            'formData': formData
          });
          var _iterator2 = _createForOfIteratorHelper(this.files),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var file = _step2.value;
              formData.append(this.name, file, file.name);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          xhr.upload.addEventListener('progress', function (event) {
            if (event.lengthComputable) {
              _this.progress = Math.round(event.loaded * 100 / event.total);
            }
            _this.$emit('progress', {
              originalEvent: event,
              progress: _this.progress
            });
          });
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              _this.progress = 0;
              if (xhr.status >= 200 && xhr.status < 300) {
                if (_this.fileLimit) {
                  _this.uploadedFileCount += _this.files.length;
                }
                _this.$emit('upload', {
                  xhr: xhr,
                  files: _this.files
                });
              } else {
                _this.$emit('error', {
                  xhr: xhr,
                  files: _this.files
                });
              }
              _this.clear();
            }
          };
          xhr.open('POST', this.url, true);
          this.$emit('before-send', {
            'xhr': xhr,
            'formData': formData
          });
          xhr.withCredentials = this.withCredentials;
          xhr.send(formData);
        }
      },
      clear: function clear() {
        this.files = [];
        this.messages = [];
        this.$emit('clear');
        if (this.isAdvanced) {
          this.clearInputElement();
        }
      },
      onFocus: function onFocus() {
        this.focused = true;
      },
      onBlur: function onBlur() {
        this.focused = false;
      },
      isFileSelected: function isFileSelected(file) {
        if (this.files && this.files.length) {
          var _iterator3 = _createForOfIteratorHelper(this.files),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var sFile = _step3.value;
              if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size) return true;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
        return false;
      },
      isIE11: function isIE11() {
        return !!window['MSInputMethodContext'] && !!document['documentMode'];
      },
      validate: function validate(file) {
        if (this.accept && !this.isFileTypeValid(file)) {
          this.messages.push(this.invalidFileTypeMessage.replace('{0}', file.name).replace('{1}', this.accept));
          return false;
        }
        if (this.maxFileSize && file.size > this.maxFileSize) {
          this.messages.push(this.invalidFileSizeMessage.replace('{0}', file.name).replace('{1}', this.formatSize(this.maxFileSize)));
          return false;
        }
        return true;
      },
      isFileTypeValid: function isFileTypeValid(file) {
        var acceptableTypes = this.accept.split(',').map(function (type) {
          return type.trim();
        });
        var _iterator4 = _createForOfIteratorHelper(acceptableTypes),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var type = _step4.value;
            var acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type) : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();
            if (acceptable) {
              return true;
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        return false;
      },
      getTypeClass: function getTypeClass(fileType) {
        return fileType.substring(0, fileType.indexOf('/'));
      },
      isWildcard: function isWildcard(fileType) {
        return fileType.indexOf('*') !== -1;
      },
      getFileExtension: function getFileExtension(file) {
        return '.' + file.name.split('.').pop();
      },
      isImage: function isImage(file) {
        return /^image\//.test(file.type);
      },
      onDragEnter: function onDragEnter(event) {
        if (!this.disabled) {
          event.stopPropagation();
          event.preventDefault();
        }
      },
      onDragOver: function onDragOver(event) {
        if (!this.disabled) {
          utils.DomHandler.addClass(this.$refs.content, 'p-fileupload-highlight');
          event.stopPropagation();
          event.preventDefault();
        }
      },
      onDragLeave: function onDragLeave() {
        if (!this.disabled) {
          utils.DomHandler.removeClass(this.$refs.content, 'p-fileupload-highlight');
        }
      },
      onDrop: function onDrop(event) {
        if (!this.disabled) {
          utils.DomHandler.removeClass(this.$refs.content, 'p-fileupload-highlight');
          event.stopPropagation();
          event.preventDefault();
          var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
          var allowDrop = this.multiple || files && files.length === 1;
          if (allowDrop) {
            this.onFileSelect(event);
          }
        }
      },
      onBasicUploaderClick: function onBasicUploaderClick() {
        if (this.hasFiles) this.upload();else this.$refs.fileInput.click();
      },
      remove: function remove(index) {
        this.clearInputElement();
        this.files.splice(index, 1);
        this.files = _toConsumableArray(this.files);
        if (this.files.length <= this.fileLimit) {
          this.messages = [];
        }
      },
      clearInputElement: function clearInputElement() {
        this.$refs.fileInput.value = '';
      },
      clearIEInput: function clearIEInput() {
        if (this.$refs.fileInput) {
          this.duplicateIEEvent = true; //IE11 fix to prevent onFileChange trigger again
          this.$refs.fileInput.value = '';
        }
      },
      formatSize: function formatSize(bytes) {
        if (bytes === 0) {
          return '0 B';
        }
        var k = 1000,
          dm = 3,
          sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
      },
      isFileLimitExceeded: function isFileLimitExceeded() {
        if (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount && this.focused) {
          this.focused = false;
        }
        return this.fileLimit && this.fileLimit < this.files.length + this.uploadedFileCount;
      },
      checkFileLimit: function checkFileLimit() {
        if (this.isFileLimitExceeded()) {
          this.messages.push(this.invalidFileLimitMessage.replace('{0}', this.fileLimit.toString()));
        }
      },
      onMessageClose: function onMessageClose() {
        this.messages = null;
      }
    },
    computed: {
      isAdvanced: function isAdvanced() {
        return this.mode === 'advanced';
      },
      isBasic: function isBasic() {
        return this.mode === 'basic';
      },
      advancedChooseButtonClass: function advancedChooseButtonClass() {
        return ['p-button p-component p-fileupload-choose', this.buttonClass, {
          'p-disabled': this.disabled,
          'p-focus': this.focused
        }];
      },
      basicChooseButtonClass: function basicChooseButtonClass() {
        return ['p-button p-component p-fileupload-choose', this.buttonClass, {
          'p-fileupload-choose-selected': this.hasFiles,
          'p-disabled': this.disabled,
          'p-focus': this.focused
        }];
      },
      basicChooseButtonIconClass: function basicChooseButtonIconClass() {
        return ['p-button-icon p-button-icon-left pi', {
          'pi-plus': !this.hasFiles || this.auto,
          'pi-upload': this.hasFiles && !this.auto
        }];
      },
      basicChooseButtonLabel: function basicChooseButtonLabel() {
        return this.auto ? this.chooseButtonLabel : this.hasFiles ? this.files[0].name : this.chooseButtonLabel;
      },
      hasFiles: function hasFiles() {
        return this.files && this.files.length > 0;
      },
      chooseDisabled: function chooseDisabled() {
        return this.disabled || this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
      },
      uploadDisabled: function uploadDisabled() {
        return this.disabled || !this.hasFiles || this.fileLimit && this.fileLimit < this.files.length;
      },
      cancelDisabled: function cancelDisabled() {
        return this.disabled || !this.hasFiles;
      },
      chooseButtonLabel: function chooseButtonLabel() {
        return this.chooseLabel || this.$primevue.config.locale.choose;
      },
      uploadButtonLabel: function uploadButtonLabel() {
        return this.uploadLabel || this.$primevue.config.locale.upload;
      },
      cancelButtonLabel: function cancelButtonLabel() {
        return this.cancelLabel || this.$primevue.config.locale.cancel;
      }
    },
    components: {
      'FileUploadButton': Button__default["default"],
      'FileUploadProgressBar': ProgressBar__default["default"],
      'FileUploadMessage': Message__default["default"]
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
    return _vm.isAdvanced ? _c("div", {
      staticClass: "p-fileupload p-fileupload-advanced p-component"
    }, [_c("div", {
      staticClass: "p-fileupload-buttonbar"
    }, [_c("span", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      class: _vm.advancedChooseButtonClass,
      style: _vm.buttonStyle,
      attrs: {
        tabindex: "0"
      },
      on: {
        click: _vm.choose,
        keydown: function keydown($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
            return null;
          }
          return _vm.choose.apply(null, arguments);
        },
        focus: _vm.onFocus,
        blur: _vm.onBlur
      }
    }, [_c("input", {
      ref: "fileInput",
      attrs: {
        type: "file",
        multiple: _vm.multiple,
        accept: _vm.accept,
        disabled: _vm.chooseDisabled
      },
      on: {
        change: _vm.onFileSelect
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "p-button-icon p-button-icon-left pi pi-fw pi-plus"
    }), _vm._v(" "), _c("span", {
      staticClass: "p-button-label"
    }, [_vm._v(_vm._s(_vm.chooseButtonLabel))])]), _vm._v(" "), _vm.showUploadButton ? _c("FileUploadButton", {
      attrs: {
        label: _vm.uploadButtonLabel,
        icon: "pi pi-upload",
        disabled: _vm.uploadDisabled
      },
      on: {
        click: _vm.upload
      }
    }) : _vm._e(), _vm._v(" "), _vm.showCancelButton ? _c("FileUploadButton", {
      attrs: {
        label: _vm.cancelButtonLabel,
        icon: "pi pi-times",
        disabled: _vm.cancelDisabled
      },
      on: {
        click: _vm.clear
      }
    }) : _vm._e()], 1), _vm._v(" "), _c("div", {
      ref: "content",
      staticClass: "p-fileupload-content",
      on: {
        dragenter: _vm.onDragEnter,
        dragover: _vm.onDragOver,
        dragleave: _vm.onDragLeave,
        drop: _vm.onDrop
      }
    }, [_vm.hasFiles ? _c("FileUploadProgressBar", {
      attrs: {
        value: _vm.progress
      }
    }) : _vm._e(), _vm._v(" "), _vm._l(_vm.messages, function (msg) {
      return _c("FileUploadMessage", {
        key: msg,
        attrs: {
          severity: "error"
        },
        on: {
          close: _vm.onMessageClose
        }
      }, [_vm._v("\n      " + _vm._s(msg) + "\n    ")]);
    }), _vm._v(" "), _vm.hasFiles ? _c("div", {
      staticClass: "p-fileupload-files"
    }, _vm._l(_vm.files, function (file, index) {
      return _c("div", {
        key: file.name + file.type + file.size,
        staticClass: "p-fileupload-row"
      }, [_c("div", [_vm.isImage(file) ? _c("img", {
        attrs: {
          role: "presentation",
          alt: file.name,
          src: file.objectURL,
          width: _vm.previewWidth
        }
      }) : _c("i", {
        staticClass: "pi pi-file",
        style: {
          fontSize: "1.5rem",
          width: _vm.previewWidth + "px"
        },
        attrs: {
          role: "file"
        }
      })]), _vm._v(" "), _c("div", {
        staticClass: "p-fileupload-filename"
      }, [_vm._v(_vm._s(file.name))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.formatSize(file.size)))]), _vm._v(" "), _c("div", [_c("FileUploadButton", {
        attrs: {
          type: "button",
          icon: "pi pi-times"
        },
        on: {
          click: function click($event) {
            return _vm.remove(index);
          }
        }
      })], 1)]);
    }), 0) : _vm._e(), _vm._v(" "), _vm.$scopedSlots.empty && !_vm.hasFiles ? _c("div", {
      staticClass: "p-fileupload-empty"
    }, [_vm._t("empty")], 2) : _vm._e()], 2)]) : _vm.isBasic ? _c("div", {
      staticClass: "p-fileupload p-fileupload-basic p-component"
    }, [_vm._l(_vm.messages, function (msg) {
      return _c("FileUploadMessage", {
        key: msg,
        attrs: {
          severity: "error"
        },
        on: {
          close: _vm.onMessageClose
        }
      }, [_vm._v(_vm._s(msg))]);
    }), _vm._v(" "), _c("span", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      class: _vm.basicChooseButtonClass,
      style: _vm.buttonStyle,
      attrs: {
        tabindex: "0"
      },
      on: {
        mouseup: _vm.onBasicUploaderClick,
        keydown: function keydown($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
            return null;
          }
          return _vm.choose.apply(null, arguments);
        },
        focus: _vm.onFocus,
        blur: _vm.onBlur
      }
    }, [_c("span", {
      class: _vm.basicChooseButtonIconClass
    }), _vm._v(" "), _c("span", {
      staticClass: "p-button-label"
    }, [_vm._v(_vm._s(_vm.basicChooseButtonLabel))]), _vm._v(" "), !_vm.hasFiles ? _c("input", {
      ref: "fileInput",
      attrs: {
        type: "file",
        accept: _vm.accept,
        disabled: _vm.disabled
      },
      on: {
        change: _vm.onFileSelect,
        focus: _vm.onFocus,
        blur: _vm.onBlur
      }
    }) : _vm._e()])], 2) : _vm._e();
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-2a50474b_0", {
      source: "\n.p-fileupload-content {\n  position: relative;\n}\n.p-fileupload-row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-fileupload-row > div {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  width: 25%;\n}\n.p-fileupload-row > div:last-child {\n  text-align: right;\n}\n.p-fileupload-content .p-progressbar {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.p-button.p-fileupload-choose {\n  position: relative;\n  overflow: hidden;\n}\n.p-button.p-fileupload-choose input[type=file] {\n  display: none;\n}\n.p-fileupload-choose.p-fileupload-choose-selected input[type=file] {\n  display: none;\n}\n.p-fileupload-filename {\n  word-break: break-all;\n}\n.p-fluid .p-fileupload .p-button {\n  width: auto;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/fileupload/FileUpload.vue"],
        "names": [],
        "mappings": ";AA6gBA;EACA,kBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AAEA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;EACA,UAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;AACA;AAEA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,WAAA;AACA",
        "file": "FileUpload.vue",
        "sourcesContent": ["<template>\n  <div class=\"p-fileupload p-fileupload-advanced p-component\" v-if=\"isAdvanced\">\n    <div class=\"p-fileupload-buttonbar\">\n      <span\n        :class=\"advancedChooseButtonClass\"\n        :style=\"buttonStyle\"\n        @click=\"choose\"\n        @keydown.enter=\"choose\"\n        @focus=\"onFocus\"\n        @blur=\"onBlur\"\n        v-ripple\n        tabindex=\"0\">\n        <input\n          ref=\"fileInput\"\n          type=\"file\"\n          @change=\"onFileSelect\"\n          :multiple=\"multiple\"\n          :accept=\"accept\"\n          :disabled=\"chooseDisabled\" />\n        <span class=\"p-button-icon p-button-icon-left pi pi-fw pi-plus\"></span>\n        <span class=\"p-button-label\">{{ chooseButtonLabel }}</span>\n      </span>\n      <FileUploadButton\n        :label=\"uploadButtonLabel\"\n        icon=\"pi pi-upload\"\n        @click=\"upload\"\n        :disabled=\"uploadDisabled\"\n        v-if=\"showUploadButton\" />\n      <FileUploadButton\n        :label=\"cancelButtonLabel\"\n        icon=\"pi pi-times\"\n        @click=\"clear\"\n        :disabled=\"cancelDisabled\"\n        v-if=\"showCancelButton\" />\n    </div>\n    <div\n      ref=\"content\"\n      class=\"p-fileupload-content\"\n      @dragenter=\"onDragEnter\"\n      @dragover=\"onDragOver\"\n      @dragleave=\"onDragLeave\"\n      @drop=\"onDrop\">\n      <FileUploadProgressBar :value=\"progress\" v-if=\"hasFiles\" />\n      <FileUploadMessage v-for=\"msg of messages\" severity=\"error\" :key=\"msg\" @close=\"onMessageClose\">\n        {{ msg }}\n      </FileUploadMessage>\n      <div class=\"p-fileupload-files\" v-if=\"hasFiles\">\n        <div class=\"p-fileupload-row\" v-for=\"(file, index) of files\" :key=\"file.name + file.type + file.size\">\n          <div>\n            <img\n              v-if=\"isImage(file)\"\n              role=\"presentation\"\n              :alt=\"file.name\"\n              :src=\"file.objectURL\"\n              :width=\"previewWidth\" />\n            <i \n              v-else \n              class=\"pi pi-file\" \n              role=\"file\" \n              :style=\"{ fontSize: '1.5rem', width: `${previewWidth}px` }\" />\n          </div>\n          <div class=\"p-fileupload-filename\">{{ file.name }}</div>\n          <div>{{ formatSize(file.size) }}</div>\n          <div>\n            <FileUploadButton type=\"button\" icon=\"pi pi-times\" @click=\"remove(index)\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"p-fileupload-empty\" v-if=\"$scopedSlots.empty && !hasFiles\">\n        <slot name=\"empty\"></slot>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-fileupload p-fileupload-basic p-component\" v-else-if=\"isBasic\">\n    <FileUploadMessage v-for=\"msg of messages\" severity=\"error\" :key=\"msg\" @close=\"onMessageClose\">{{\n      msg\n    }}</FileUploadMessage>\n    <span\n      :class=\"basicChooseButtonClass\"\n      :style=\"buttonStyle\"\n      @mouseup=\"onBasicUploaderClick\"\n      @keydown.enter=\"choose\"\n      @focus=\"onFocus\"\n      @blur=\"onBlur\"\n      v-ripple\n      tabindex=\"0\">\n      <span :class=\"basicChooseButtonIconClass\"></span>\n      <span class=\"p-button-label\">{{ basicChooseButtonLabel }}</span>\n      <input\n        ref=\"fileInput\"\n        type=\"file\"\n        :accept=\"accept\"\n        :disabled=\"disabled\"\n        @change=\"onFileSelect\"\n        @focus=\"onFocus\"\n        @blur=\"onBlur\"\n        v-if=\"!hasFiles\" />\n    </span>\n  </div>\n</template>\n\n<script>\nimport Button from 'primevue2/button'\nimport ProgressBar from 'primevue2/progressbar'\nimport Message from 'primevue2/message'\nimport { DomHandler } from 'primevue2/utils'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'FileUpload',\n  props: {\n    name: {\n      type: String,\n      default: null\n    },\n    url: {\n      type: String,\n      default: null\n    },\n    mode: {\n      type: String,\n      default: 'advanced'\n    },\n    multiple: {\n      type: Boolean,\n      default: false\n    },\n    accept: {\n      type: String,\n      default: null\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    },\n    auto: {\n      type: Boolean,\n      default: false\n    },\n    maxFileSize: {\n      type: Number,\n      default: null\n    },\n    invalidFileSizeMessage: {\n      type: String,\n      default: '{0}: Invalid file size, file size should be smaller than {1}.'\n    },\n    invalidFileTypeMessage: {\n      type: String,\n      default: '{0}: Invalid file type, allowed file types: {1}.'\n    },\n    fileLimit: {\n      type: Number,\n      default: null\n    },\n    invalidFileLimitMessage: {\n      type: String,\n      default: 'Maximum number of files exceeded, limit is {0} at most.'\n    },\n    withCredentials: {\n      type: Boolean,\n      default: false\n    },\n    previewWidth: {\n      type: Number,\n      default: 50\n    },\n    chooseLabel: {\n      type: String,\n      default: null\n    },\n    uploadLabel: {\n      type: String,\n      default: null\n    },\n    cancelLabel: {\n      type: String,\n      default: null\n    },\n    customUpload: {\n      type: Boolean,\n      default: false\n    },\n    showUploadButton: {\n      type: Boolean,\n      default: true\n    },\n    showCancelButton: {\n      type: Boolean,\n      default: true\n    },\n    buttonStyle: null,\n    buttonClass: null\n  },\n  duplicateIEEvent: false,\n  data() {\n    return {\n      uploadedFileCount: 0,\n      files: [],\n      messages: null,\n      focused: false,\n      progress: null\n    }\n  },\n  methods: {\n    onFileSelect(event) {\n      if (event.type !== 'drop' && this.isIE11() && this.duplicateIEEvent) {\n        this.duplicateIEEvent = false\n        return\n      }\n\n      this.messages = []\n      this.files = this.files || []\n      let files = event.dataTransfer ? event.dataTransfer.files : event.target.files\n      for (let file of files) {\n        if (!this.isFileSelected(file)) {\n          if (this.validate(file)) {\n            if (this.isImage(file)) {\n              file.objectURL = window.URL.createObjectURL(file)\n            }\n            this.files.push(file)\n          }\n        }\n      }\n\n      this.$emit('select', { originalEvent: event, files: this.files })\n\n      if (this.fileLimit) {\n        this.checkFileLimit()\n      }\n\n      if (this.auto && this.hasFiles && !this.isFileLimitExceeded()) {\n        this.upload()\n      }\n\n      if (event.type !== 'drop' && this.isIE11()) {\n        this.clearIEInput()\n      }\n      else {\n        this.clearInputElement()\n      }\n    },\n    choose() {\n      this.$refs.fileInput.click()\n    },\n    upload() {\n      if (this.customUpload) {\n        if (this.fileLimit) {\n          this.uploadedFileCount += this.files.length\n        }\n\n        this.$emit('uploader', { files: this.files })\n        this.clear()\n      }\n      else {\n        let xhr = new XMLHttpRequest()\n        let formData = new FormData()\n\n        this.$emit('before-upload', {\n          'xhr': xhr,\n          'formData': formData\n        })\n\n        for (let file of this.files) {\n          formData.append(this.name, file, file.name)\n        }\n\n        xhr.upload.addEventListener('progress', (event) => {\n          if (event.lengthComputable) {\n            this.progress = Math.round((event.loaded * 100) / event.total)\n          }\n\n          this.$emit('progress', {\n            originalEvent: event,\n            progress: this.progress\n          })\n        })\n\n        xhr.onreadystatechange = () => {\n          if (xhr.readyState === 4) {\n            this.progress = 0\n\n            if (xhr.status >= 200 && xhr.status < 300) {\n              if (this.fileLimit) {\n                this.uploadedFileCount += this.files.length\n              }\n\n              this.$emit('upload', {\n                xhr: xhr,\n                files: this.files\n              })\n            }\n            else {\n              this.$emit('error', {\n                xhr: xhr,\n                files: this.files\n              })\n            }\n\n            this.clear()\n          }\n        }\n\n        xhr.open('POST', this.url, true)\n\n        this.$emit('before-send', {\n          'xhr': xhr,\n          'formData': formData\n        })\n\n        xhr.withCredentials = this.withCredentials\n\n        xhr.send(formData)\n      }\n    },\n    clear() {\n      this.files = []\n      this.messages = []\n      this.$emit('clear')\n\n      if (this.isAdvanced) {\n        this.clearInputElement()\n      }\n    },\n    onFocus() {\n      this.focused = true\n    },\n    onBlur() {\n      this.focused = false\n    },\n    isFileSelected(file) {\n      if (this.files && this.files.length) {\n        for (let sFile of this.files) {\n          if ((sFile.name + sFile.type + sFile.size) === (file.name + file.type + file.size))\n            return true\n        }\n      }\n\n      return false\n    },\n    isIE11() {\n      return !!window['MSInputMethodContext'] && !!document['documentMode']\n    },\n    validate(file) {\n      if (this.accept && !this.isFileTypeValid(file)) {\n        this.messages.push(this.invalidFileTypeMessage.replace('{0}', file.name).replace('{1}', this.accept))\n        return false\n      }\n\n      if (this.maxFileSize && file.size > this.maxFileSize) {\n        this.messages.push(this.invalidFileSizeMessage.replace('{0}', file.name).replace('{1}', this.formatSize(this.maxFileSize)))\n        return false\n      }\n\n      return true\n    },\n    isFileTypeValid(file) {\n      let acceptableTypes = this.accept.split(',').map(type => type.trim())\n      for (let type of acceptableTypes) {\n        let acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type)\n          : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase()\n        if (acceptable) {\n          return true\n        }\n      }\n      return false\n    },\n    getTypeClass(fileType) {\n      return fileType.substring(0, fileType.indexOf('/'))\n    },\n    isWildcard(fileType) {\n      return fileType.indexOf('*') !== -1\n    },\n    getFileExtension(file) {\n      return '.' + file.name.split('.').pop()\n    },\n    isImage(file) {\n      return /^image\\//.test(file.type)\n    },\n    onDragEnter(event) {\n      if (!this.disabled) {\n        event.stopPropagation()\n        event.preventDefault()\n      }\n    },\n    onDragOver(event) {\n      if (!this.disabled) {\n        DomHandler.addClass(this.$refs.content, 'p-fileupload-highlight')\n        event.stopPropagation()\n        event.preventDefault()\n      }\n    },\n    onDragLeave() {\n      if (!this.disabled) {\n        DomHandler.removeClass(this.$refs.content, 'p-fileupload-highlight')\n      }\n    },\n    onDrop(event) {\n      if (!this.disabled) {\n        DomHandler.removeClass(this.$refs.content, 'p-fileupload-highlight')\n        event.stopPropagation()\n        event.preventDefault()\n\n        const files = event.dataTransfer ? event.dataTransfer.files : event.target.files\n        const allowDrop = this.multiple || (files && files.length === 1)\n\n        if (allowDrop) {\n          this.onFileSelect(event)\n        }\n      }\n    },\n    onBasicUploaderClick() {\n      if (this.hasFiles)\n        this.upload()\n      else\n        this.$refs.fileInput.click()\n    },\n    remove(index) {\n      this.clearInputElement()\n      this.files.splice(index, 1)\n      this.files = [...this.files]\n      if (this.files.length <= this.fileLimit) {\n        this.messages = []\n      }\n    },\n    clearInputElement() {\n      this.$refs.fileInput.value = ''\n    },\n    clearIEInput() {\n      if (this.$refs.fileInput) {\n        this.duplicateIEEvent = true //IE11 fix to prevent onFileChange trigger again\n        this.$refs.fileInput.value = ''\n      }\n    },\n    formatSize(bytes) {\n      if (bytes === 0) {\n        return '0 B'\n      }\n      let k = 1000,\n        dm = 3,\n        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],\n        i = Math.floor(Math.log(bytes) / Math.log(k))\n\n      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]\n    },\n    isFileLimitExceeded() {\n      if (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount && this.focused) {\n        this.focused = false\n      }\n\n      return this.fileLimit && this.fileLimit < this.files.length + this.uploadedFileCount\n    },\n    checkFileLimit() {\n      if (this.isFileLimitExceeded()) {\n        this.messages.push(this.invalidFileLimitMessage.replace('{0}', this.fileLimit.toString()))\n      }\n    },\n    onMessageClose() {\n      this.messages = null\n    }\n  },\n  computed: {\n    isAdvanced() {\n      return this.mode === 'advanced'\n    },\n    isBasic() {\n      return this.mode === 'basic'\n    },\n    advancedChooseButtonClass() {\n      return ['p-button p-component p-fileupload-choose', this.buttonClass, {\n        'p-disabled': this.disabled,\n        'p-focus': this.focused\n      }\n      ]\n    },\n    basicChooseButtonClass() {\n      return ['p-button p-component p-fileupload-choose', this.buttonClass, {\n        'p-fileupload-choose-selected': this.hasFiles,\n        'p-disabled': this.disabled,\n        'p-focus': this.focused\n      }]\n    },\n    basicChooseButtonIconClass() {\n      return ['p-button-icon p-button-icon-left pi', {\n        'pi-plus': !this.hasFiles || this.auto,\n        'pi-upload': this.hasFiles && !this.auto\n      }]\n    },\n    basicChooseButtonLabel() {\n      return this.auto ? this.chooseButtonLabel : (this.hasFiles ? this.files[0].name : this.chooseButtonLabel)\n    },\n    hasFiles() {\n      return this.files && this.files.length > 0\n    },\n    chooseDisabled() {\n      return this.disabled || (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount)\n    },\n    uploadDisabled() {\n      return this.disabled || !this.hasFiles || (this.fileLimit && this.fileLimit < this.files.length)\n    },\n    cancelDisabled() {\n      return this.disabled || !this.hasFiles\n    },\n    chooseButtonLabel() {\n      return this.chooseLabel || this.$primevue.config.locale.choose\n    },\n    uploadButtonLabel() {\n      return this.uploadLabel || this.$primevue.config.locale.upload\n    },\n    cancelButtonLabel() {\n      return this.cancelLabel || this.$primevue.config.locale.cancel\n    }\n  },\n  components: {\n    'FileUploadButton': Button,\n    'FileUploadProgressBar': ProgressBar,\n    'FileUploadMessage': Message\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-fileupload-content {\n  position: relative;\n}\n\n.p-fileupload-row {\n  display: flex;\n  align-items: center;\n}\n\n.p-fileupload-row > div {\n  flex: 1 1 auto;\n  width: 25%;\n}\n\n.p-fileupload-row > div:last-child {\n  text-align: right;\n}\n\n.p-fileupload-content .p-progressbar {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.p-button.p-fileupload-choose {\n  position: relative;\n  overflow: hidden;\n}\n\n.p-button.p-fileupload-choose input[type=file] {\n  display: none;\n}\n\n.p-fileupload-choose.p-fileupload-choose-selected input[type=file] {\n  display: none;\n}\n\n.p-fileupload-filename {\n  word-break: break-all;\n}\n\n.p-fluid .p-fileupload .p-button {\n  width: auto;\n}\n</style>\n"]
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

})(primevue2.button, primevue2.progressbar, primevue2.message, primevue2.utils, primevue2.ripple);
