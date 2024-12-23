import ToastEventBus from 'primevue2/toasteventbus';
import { PrimeVueToastSymbol } from 'primevue2/usetoast';

export default {
    install: (app) => {
        const ToastService = {
            add: (message) => {
                ToastEventBus.emit('add', message);
            },
            remove: (message) => {
                ToastEventBus.emit('remove', message);
            },
            removeGroup: (group) => {
                ToastEventBus.emit('remove-group', group);
            },
            removeAllGroups: () => {
                ToastEventBus.emit('remove-all-groups');
            }
        };


        app.prototype.$toast = ToastService;
        app.provide(PrimeVueToastSymbol, ToastService);
    }
};
