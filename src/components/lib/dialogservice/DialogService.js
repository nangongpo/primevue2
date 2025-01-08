import DynamicDialogEventBus from 'primevue2/dynamicdialogeventbus';
import { PrimeVueDialogSymbol } from 'primevue2/usedialog';
import { markRaw } from 'vue';

export default {
    install: (app) => {
        const DialogService = {
            open: (content, options) => {
                const instance = {
                    content: content && markRaw(content),
                    options: options || {},
                    data: options && options.data,
                    close: (params) => {
                        DynamicDialogEventBus.emit('close', { instance, params });
                    }
                };

                DynamicDialogEventBus.emit('open', { instance });

                return instance;
            }
        };

        // app.config.unwrapInjectedRef = true; // Remove it after Vue 3.3. Details: https://v2.vuejs.org/guide/components/provide-inject.html#working-with-reactivity
        app.prototype.$dialog = DialogService;
        app.provide(PrimeVueDialogSymbol, DialogService);
    }
};
