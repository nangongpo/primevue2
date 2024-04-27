this.primevue2 = this.primevue2 || {};
this.primevue2.terminal = (function (TerminalService) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var TerminalService__default = /*#__PURE__*/_interopDefaultLegacy(TerminalService);

  //
  var script = {
    name: 'Terminal',
    props: {
      welcomeMessage: {
        type: String,
        default: null
      },
      prompt: {
        type: String,
        default: null
      }
    },
    data: function data() {
      return {
        commandText: null,
        commands: []
      };
    },
    mounted: function mounted() {
      TerminalService__default["default"].on('response', this.responseListener);
      this.$refs.input.focus();
    },
    updated: function updated() {
      this.$el.scrollTop = this.$el.scrollHeight;
    },
    beforeDestroy: function beforeDestroy() {
      TerminalService__default["default"].off('response', this.responseListener);
    },
    methods: {
      onClick: function onClick() {
        this.$refs.input.focus();
      },
      onKeydown: function onKeydown(event) {
        if (event.keyCode === 13 && this.commandText) {
          this.commands.push({
            text: this.commandText
          });
          TerminalService__default["default"].emit('command', this.commandText);
          this.commandText = '';
        }
      },
      responseListener: function responseListener(response) {
        this.commands[this.commands.length - 1].response = response;
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
      staticClass: "p-terminal p-component",
      on: {
        click: _vm.onClick
      }
    }, [_vm.welcomeMessage ? _c("div", [_vm._v(_vm._s(_vm.welcomeMessage))]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "p-terminal-content"
    }, _vm._l(_vm.commands, function (command, i) {
      return _c("div", {
        key: command.text + "_" + i
      }, [_c("span", {
        staticClass: "p-terminal-prompt"
      }, [_vm._v(_vm._s(_vm.prompt))]), _vm._v(" "), _c("span", {
        staticClass: "p-terminal-command"
      }, [_vm._v(_vm._s(command.text))]), _vm._v(" "), _c("div", {
        staticClass: "p-terminal-response"
      }, [_vm._v(_vm._s(command.response))])]);
    }), 0), _vm._v(" "), _c("div", {
      staticClass: "p-terminal-prompt-container"
    }, [_c("span", {
      staticClass: "p-terminal-prompt"
    }, [_vm._v(_vm._s(_vm.prompt))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.commandText,
        expression: "commandText"
      }],
      ref: "input",
      staticClass: "p-terminal-input",
      attrs: {
        type: "text",
        autocomplete: "off"
      },
      domProps: {
        value: _vm.commandText
      },
      on: {
        keydown: _vm.onKeydown,
        input: function input($event) {
          if ($event.target.composing) {
            return;
          }
          _vm.commandText = $event.target.value;
        }
      }
    })])]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-10b03554_0", {
      source: "\n.p-terminal {\n  height: 18rem;\n  overflow: auto;\n}\n.p-terminal-prompt-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-terminal-input {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  border: 0 none;\n  background-color: transparent;\n  color: inherit;\n  padding: 0;\n  outline: 0 none;\n}\n.p-terminal-input::-ms-clear {\n  display: none;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/terminal/Terminal.vue"],
        "names": [],
        "mappings": ";AAwEA;EACA,aAAA;EACA,cAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AAEA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;EACA,cAAA;EACA,6BAAA;EACA,cAAA;EACA,UAAA;EACA,eAAA;AACA;AAEA;EACA,aAAA;AACA",
        "file": "Terminal.vue",
        "sourcesContent": ["<template>\n  <div class=\"p-terminal p-component\" @click=\"onClick\">\n    <div v-if=\"welcomeMessage\">{{ welcomeMessage }}</div>\n    <div class=\"p-terminal-content\">\n      <div v-for=\"(command, i) of commands\" :key=\"command.text + '_' + i\">\n        <span class=\"p-terminal-prompt\">{{ prompt }}</span>\n        <span class=\"p-terminal-command\">{{ command.text }}</span>\n        <div class=\"p-terminal-response\">{{ command.response }}</div>\n      </div>\n    </div>\n    <div class=\"p-terminal-prompt-container\">\n      <span class=\"p-terminal-prompt\">{{ prompt }}</span>\n      <input\n        ref=\"input\"\n        type=\"text\"\n        v-model=\"commandText\"\n        class=\"p-terminal-input\"\n        autocomplete=\"off\"\n        @keydown=\"onKeydown\" />\n    </div>\n  </div>\n</template>\n\n<script>\nimport TerminalService from 'primevue2/terminalservice'\nexport default {\n  name: 'Terminal',\n  props: {\n    welcomeMessage: {\n      type: String,\n      default: null\n    },\n    prompt: {\n      type: String,\n      default: null\n    }\n  },\n  data() {\n    return {\n      commandText: null,\n      commands: []\n    }\n  },\n  mounted() {\n    TerminalService.on('response', this.responseListener)\n    this.$refs.input.focus()\n  },\n  updated() {\n    this.$el.scrollTop = this.$el.scrollHeight\n  },\n  beforeDestroy() {\n    TerminalService.off('response', this.responseListener)\n  },\n  methods: {\n    onClick() {\n      this.$refs.input.focus()\n    },\n    onKeydown(event) {\n      if (event.keyCode === 13 && this.commandText) {\n        this.commands.push({ text: this.commandText })\n        TerminalService.emit('command', this.commandText)\n        this.commandText = ''\n      }\n    },\n    responseListener(response) {\n      this.commands[this.commands.length - 1].response = response\n    }\n  }\n}\n</script>\n\n<style>\n.p-terminal {\n  height: 18rem;\n  overflow: auto;\n}\n\n.p-terminal-prompt-container {\n  display: flex;\n  align-items: center;\n}\n\n.p-terminal-input {\n  flex: 1 1 auto;\n  border: 0 none;\n  background-color: transparent;\n  color: inherit;\n  padding: 0;\n  outline: 0 none;\n}\n\n.p-terminal-input::-ms-clear {\n  display: none;\n}\n</style>\n"]
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

})(primevue2.terminalservice);
