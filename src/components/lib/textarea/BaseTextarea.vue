<script>
import BaseComponent from 'primevue2/basecomponent';
import TextareaStyle from 'primevue2/textarea/style';

export default {
    name: 'BaseTextarea',
    extends: BaseComponent,
    props: {
        value: null,
        autoResize: Boolean,
        invalid: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: null
        }
    },
    style: TextareaStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
