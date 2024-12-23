<script>
import BaseComponent from 'primevue2/basecomponent';
import InputSwitchStyle from 'primevue2/inputswitch/style';

export default {
    name: 'BaseInputSwitch',
    extends: BaseComponent,
    props: {
        value: {
            type: null,
            default: false
        },
        trueValue: {
            type: null,
            default: true
        },
        falseValue: {
            type: null,
            default: false
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
    style: InputSwitchStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
