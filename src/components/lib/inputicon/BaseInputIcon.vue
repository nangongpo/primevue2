<script>
import BaseComponent from 'primevue2/basecomponent';
import InputIconStyle from 'primevue2/inputicon/style';

export default {
    name: 'BaseInputIcon',
    extends: BaseComponent,
    style: InputIconStyle,
    props: {
        class: null
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
