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
