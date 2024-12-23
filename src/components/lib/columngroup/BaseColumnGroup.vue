<script>
import BaseComponent from 'primevue2/basecomponent';
import ColumnGroupStyle from 'primevue2/columngroup/style';

export default {
    name: 'BaseColumnGroup',
    extends: BaseComponent,
    props: {
        type: {
            type: String,
            default: null
        }
    },
    style: ColumnGroupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
