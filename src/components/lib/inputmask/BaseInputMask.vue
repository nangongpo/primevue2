<script>
import BaseComponent from 'primevue2/basecomponent';
import InputMaskStyle from 'primevue2/inputmask/style';

export default {
    name: 'BaseInputMask',
    extends: BaseComponent,
    props: {
        value: null,
        slotChar: {
            type: String,
            default: '_'
        },
        mask: {
            type: String,
            default: null
        },
        autoClear: {
            type: Boolean,
            default: true
        },
        unmask: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        invalid: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: null
        }
    },
    style: InputMaskStyle
};
</script>
