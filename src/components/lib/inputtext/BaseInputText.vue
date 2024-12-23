<script>
import BaseComponent from 'primevue2/basecomponent';
import InputTextStyle from 'primevue2/inputtext/style';

export default {
    name: 'BaseInputText',
    extends: BaseComponent,
    props: {
        value: null,
        size: {
            type: String,
            default: null
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
    style: InputTextStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
