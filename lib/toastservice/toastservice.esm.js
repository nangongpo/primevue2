import ToastEventBus from 'primevue2/toasteventbus';

var ToastService = {
  install: function install(Vue) {
    Vue.prototype.$toast = {
      add: function add(message) {
        ToastEventBus.emit('add', message);
      },
      removeGroup: function removeGroup(group) {
        ToastEventBus.emit('remove-group', group);
      },
      removeAllGroups: function removeAllGroups() {
        ToastEventBus.emit('remove-all-groups');
      }
    };
  }
};

export { ToastService as default };
