<script>
import BaseComponent from 'primevue2/basecomponent';
import ScrollPanelStyle from 'primevue2/scrollpanel/style';

export default {
    name: 'BaseScrollPanel',
    extends: BaseComponent,
    props: {
        step: {
            type: Number,
            default: 5
        }
    },
    style: ScrollPanelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
