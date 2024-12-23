<script>
import BaseComponent from 'primevue2/basecomponent';
import FloatLabelStyle from 'primevue2/floatlabel/style';

export default {
    name: 'BaseFloatLabel',
    extends: BaseComponent,
    props: {},
    style: FloatLabelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
