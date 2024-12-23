<script>
import BaseComponent from 'primevue2/basecomponent';
import StepperPanelStyle from 'primevue2/stepperpanel/style';

export default {
    name: 'BaseStepperPanel',
    extends: BaseComponent,
    props: {
        header: null
    },
    style: StepperPanelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
