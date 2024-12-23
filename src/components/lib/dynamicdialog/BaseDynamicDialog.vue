<script>
import BaseComponent from 'primevue2/basecomponent';
import DynamicDialogStyle from 'primevue2/dynamicdialog/style';

export default {
    name: 'BaseDynamicDialog',
    extends: BaseComponent,
    props: {},
    style: DynamicDialogStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
