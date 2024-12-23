<script>
import BaseComponent from 'primevue2/basecomponent';
import DividerStyle from 'primevue2/divider/style';

export default {
    name: 'BaseDivider',
    extends: BaseComponent,
    props: {
        align: {
            type: String,
            default: null
        },
        layout: {
            type: String,
            default: 'horizontal'
        },
        type: {
            type: String,
            default: 'solid'
        }
    },
    style: DividerStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
