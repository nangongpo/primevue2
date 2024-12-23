<script>
import BaseComponent from 'primevue2/basecomponent';
import TriStateCheckboxStyle from 'primevue2/tristatecheckbox/style';

export default {
    name: 'BaseTriStateCheckbox',
    extends: BaseComponent,
    props: {
        value: null,
        variant: {
            type: String,
            default: null
        },
        invalid: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: null
        },
        inputId: {
            type: String,
            default: null
        },
        inputClass: {
            type: [String, Object],
            default: null
        },
        inputStyle: {
            type: Object,
            default: null
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: TriStateCheckboxStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
