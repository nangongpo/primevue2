<script>
import BaseComponent from 'primevue2/basecomponent';
import BreadcrumbStyle from 'primevue2/breadcrumb/style';

export default {
    name: 'BaseBreadcrumb',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        home: {
            type: null,
            default: null
        }
    },
    style: BreadcrumbStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
