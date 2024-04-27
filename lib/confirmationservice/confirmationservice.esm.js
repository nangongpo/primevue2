import ConfirmationEventBus from 'primevue2/confirmationeventbus';

var ConfirmationService = {
  install: function install(Vue) {
    Vue.prototype.$confirm = {
      require: function require(options) {
        ConfirmationEventBus.emit('confirm', options);
      },
      close: function close() {
        ConfirmationEventBus.emit('close');
      }
    };
  }
};

export { ConfirmationService as default };
