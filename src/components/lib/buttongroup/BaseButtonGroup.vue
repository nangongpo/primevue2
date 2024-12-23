<script>
import BaseComponent from 'primevue2/basecomponent';
import ButtonGroupStyle from 'primevue2/buttongroup/style';

export default {
    name: 'BaseButtonGroup',
    extends: BaseComponent,
    style: ButtonGroupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
