<script>
import BaseComponent from 'primevue2/basecomponent';
import PanelStyle from 'primevue2/panel/style';

export default {
    name: 'BasePanel',
    extends: BaseComponent,
    props: {
        header: String,
        toggleable: Boolean,
        collapsed: Boolean,
        toggleButtonProps: {
            type: null,
            default: null
        }
    },
    style: PanelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
