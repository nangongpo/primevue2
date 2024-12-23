<script>
import BaseComponent from 'primevue2/basecomponent';
import SplitterPanelStyle from 'primevue2/splitterpanel/style';

export default {
    name: 'BaseSplitterPanel',
    extends: BaseComponent,
    props: {
        size: {
            type: Number,
            default: null
        },
        minSize: {
            type: Number,
            default: null
        }
    },
    style: SplitterPanelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
