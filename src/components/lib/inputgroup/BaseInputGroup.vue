<script>
import BaseComponent from 'primevue2/basecomponent';
import InputGroupStyle from 'primevue2/inputgroup/style';

export default {
    name: 'BaseInputGroup',
    extends: BaseComponent,
    style: InputGroupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
