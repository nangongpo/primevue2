<template>
    <Checkbox :modelValue="checked" :binary="true" :disabled="$attrs.disabled" :aria-label="checkboxAriaLabel" @change="onChange" :unstyled="unstyled" :pt="getColumnPT('rowCheckbox')">
        <template #icon="slotProps">
            <DynamicComponent v-if="rowCheckboxIconTemplate" :template="rowCheckboxIconTemplate" :checked="slotProps.checked" :className="slotProps.className" />
            <CheckIcon v-else-if="!rowCheckboxIconTemplate && slotProps.checked" :class="slotProps.className" v-bind="getColumnPT('rowCheckbox.icon')" />
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
    name: 'RowCheckbox',
    hostName: 'DataTable',
    extends: BaseComponent,
    emits: ['change'],
    props: {
        value: null,
        checked: null,
        column: null,
        rowCheckboxIconTemplate: {
            type: Function,
            default: null
        },
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
    computed: {
        checkboxAriaLabel() {
            return this.$primevue.config.locale.aria ? (this.checked ? this.$primevue.config.locale.aria.selectRow : this.$primevue.config.locale.aria.unselectRow) : undefined;
        }
    },
    components: {
        CheckIcon,
        Checkbox
    }
};
</script>
