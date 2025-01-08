<template>
    <template v-for="(instance, key) in instanceMap" :key="key">
        <DDialog v-model:visible="instance.visible" :_instance="instance" v-bind="instance.options.props" @hide="onDialogHide(instance)" @after-hide="onDialogAfterHide">
            <template v-if="instance.options.templates && instance.options.templates.header" #header>
                <DynamicComponent v-for="(header, index) in getTemplateItems(instance.options.templates.header)" :template="header" :key="index + '_header'" v-bind="instance.options.emits"></DynamicComponent>
            </template>
            <DynamicComponent :template="instance.content" v-bind="instance.options.emits"></DynamicComponent>
            <template v-if="instance.options.templates && instance.options.templates.footer" #footer>
                <DynamicComponent v-for="(footer, index) in getTemplateItems(instance.options.templates.footer)" :template="footer" :key="index + '_footer'" v-bind="instance.options.emits"></DynamicComponent>
            </template>
        </DDialog>
    </template>
</template>

<script>
import Dialog from 'primevue2/dialog';
import DynamicDialogEventBus from 'primevue2/dynamicdialogeventbus';
import { UniqueComponentId } from 'primevue2/utils';
import BaseDynamicDialog from './BaseDynamicDialog.vue';

export default {
    name: 'DynamicDialog',
    extends: BaseDynamicDialog,
    inheritAttrs: false,
    data() {
        return {
            instanceMap: {}
        };
    },
    openListener: null,
    closeListener: null,
    currentInstance: null,
    mounted() {
        this.openListener = ({ instance }) => {
            const key = UniqueComponentId() + '_dynamic_dialog';

            instance.visible = true;
            instance.key = key;
            this.instanceMap[key] = instance;
        };

        this.closeListener = ({ instance, params }) => {
            const key = instance.key;
            const currentInstance = this.instanceMap[key];

            if (currentInstance) {
                currentInstance.visible = false;
                currentInstance.options.onClose && currentInstance.options.onClose({ data: params, type: 'config-close' });

                this.currentInstance = currentInstance;
            }
        };

        DynamicDialogEventBus.on('open', this.openListener);
        DynamicDialogEventBus.on('close', this.closeListener);
    },
    beforeDestroy() {
        DynamicDialogEventBus.off('open', this.openListener);
        DynamicDialogEventBus.off('close', this.closeListener);
    },
    methods: {
        onDialogHide(instance) {
            !this.currentInstance && instance.options.onClose && instance.options.onClose({ type: 'dialog-close' });
        },
        onDialogAfterHide() {
            this.currentInstance && delete this.currentInstance;
            this.currentInstance = null;
        },
        getTemplateItems(template) {
            return Array.isArray(template) ? template : [template];
        }
    },
    components: {
        DDialog: Dialog
    }
};
</script>
