<template>
    <RadioButton :modelValue="checked" :binary="true" :disabled="$attrs.disabled" :name="name" @change="onChange" :unstyled="unstyled" :pt="getColumnPT('rowRadiobutton')" />
</template>

<script>
import BaseComponent from 'primevue2/basecomponent';
import RadioButton from 'primevue2/radiobutton';
import { VueUtils } from 'primevue2/utils';
const { mergeProps } = VueUtils

export default {
    name: 'RowRadioButton',
    hostName: 'DataTable',
    extends: BaseComponent,
    emits: ['change'],
    props: {
        value: null,
        checked: null,
        name: null,
        column: null,
        index: {
            type: Number,
            default: null
        }
    },
    methods: {
        getColumnPT(key) {
            const columnMetaData = {
                props: this.column.$props,
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    index: this.index,
                    checked: this.checked,
                    disabled: this.$attrs.disabled
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
        },
        getColumnProp() {
          return this.column?.pt //@todo:
        },
        onChange(event) {
            if (!this.$attrs.disabled) {
                this.$emit('change', {
                    originalEvent: event,
                    data: this.value
                });
            }
        }
    },
    components: {
        RadioButton
    }
};
</script>
