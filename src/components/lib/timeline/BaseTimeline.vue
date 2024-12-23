<script>
import BaseComponent from 'primevue2/basecomponent';
import TimelineStyle from 'primevue2/timeline/style';

export default {
    name: 'BaseTimeline',
    extends: BaseComponent,
    props: {
        value: null,
        align: {
            mode: String,
            default: 'left'
        },
        layout: {
            mode: String,
            default: 'vertical'
        },
        dataKey: null
    },
    style: TimelineStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
