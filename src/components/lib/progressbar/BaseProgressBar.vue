<script>
import BaseComponent from 'primevue2/basecomponent';
import ProgressBarStyle from 'primevue2/progressbar/style';

export default {
    name: 'BaseProgressBar',
    extends: BaseComponent,
    props: {
        value: {
            type: Number,
            default: null
        },
        mode: {
            type: String,
            default: 'determinate'
        },
        showValue: {
            type: Boolean,
            default: true
        }
    },
    style: ProgressBarStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
