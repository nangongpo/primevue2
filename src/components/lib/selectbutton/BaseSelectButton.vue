<script>
import BaseComponent from 'primevue2/basecomponent';
import SelectButtonStyle from 'primevue2/selectbutton/style';

export default {
    name: 'BaseSelectButton',
    extends: BaseComponent,
    props: {
        value: null,
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        multiple: Boolean,
        unselectable: {
            type: Boolean,
            default: true
        },
        allowEmpty: {
            type: Boolean,
            default: true
        },
        invalid: {
            type: Boolean,
            default: false
        },
        disabled: Boolean,
        dataKey: null,
        ariaLabelledby: {
            type: String,
            default: null
        }
    },
    style: SelectButtonStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
