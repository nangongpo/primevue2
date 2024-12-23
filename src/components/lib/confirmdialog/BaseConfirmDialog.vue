<script>
import BaseComponent from 'primevue2/basecomponent';
import ConfirmDialogStyle from 'primevue2/confirmdialog/style';

export default {
    name: 'BaseConfirmDialog',
    extends: BaseComponent,
    props: {
        group: String,
        breakpoints: {
            type: Object,
            default: null
        },
        draggable: {
            type: Boolean,
            default: true
        }
    },
    style: ConfirmDialogStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
