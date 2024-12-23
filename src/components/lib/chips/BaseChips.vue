<script>
import BaseComponent from 'primevue2/basecomponent';
import ChipsStyle from 'primevue2/chips/style';

export default {
    name: 'BaseChips',
    extends: BaseComponent,
    props: {
        value: {
            type: Array,
            default: null
        },
        max: {
            type: Number,
            default: null
        },
        separator: {
            type: [String, Object],
            default: null
        },
        addOnBlur: {
            type: Boolean,
            default: null
        },
        allowDuplicate: {
            type: Boolean,
            default: true
        },
        placeholder: {
            type: String,
            default: null
        },
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
        inputProps: {
            type: null,
            default: null
        },
        removeTokenIcon: {
            type: String,
            default: undefined
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
    style: ChipsStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
