<template>
    <Checkbox :modelValue="checked" :binary="true" :disabled="disabled" :aria-label="headerCheckboxAriaLabel" @change="onChange" :pt="getColumnPT('headerCheckbox')">
        <template #icon="slotProps">
            <component v-if="headerCheckboxIconTemplate" :is="headerCheckboxIconTemplate" :checked="slotProps.checked" :class="slotProps.className" />
            <CheckIcon v-else-if="!headerCheckboxIconTemplate && slotProps.checked" :class="slotProps.className" v-bind="getColumnPT('headerCheckbox.icon')" />
        </template>
    </Checkbox>
</template>

<script>
import BaseComponent from 'primevue2/basecomponent';
import Checkbox from 'primevue2/checkbox';
import CheckIcon from 'primevue2/icons/check';
import { VueUtils } from 'primevue2/utils';
const { mergeProps } = VueUtils

export default {
    name: 'HeaderCheckbox',
    hostName: 'DataTable',
    extends: BaseComponent,
    emits: ['change'],
    props: {
        checked: null,
        disabled: null,
        column: null,
        headerCheckboxIconTemplate: {
            type: Function,
            default: null
        }
    },
    methods: {
        getColumnPT(key) {
            const columnMetaData = {
                props: this.column.props,
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    checked: this.checked,
                    disabled: this.disabled
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
        },
        getColumnProp() {
            return this.column.props && this.column.props.pt ? this.column.props.pt : undefined; //@todo:
        },
        onChange(event) {
            this.$emit('change', {
                originalEvent: event,
                checked: !this.checked
            });
        }
    },
    computed: {
        headerCheckboxAriaLabel() {
            return this.$primevue.config.locale.aria ? (this.checked ? this.$primevue.config.locale.aria.selectAll : this.$primevue.config.locale.aria.unselectAll) : undefined;
        }
    },
    components: {
        CheckIcon,
        Checkbox
    }
};
</script>
