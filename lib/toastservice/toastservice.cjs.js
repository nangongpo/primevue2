'use strict';

var ToastEventBus = require('primevue2/toasteventbus');

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

module.exports = ToastService;
