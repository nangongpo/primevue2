<script>
import BaseComponent from 'primevue2/basecomponent';
import TagStyle from 'primevue2/tag/style';

export default {
    name: 'BaseTag',
    extends: BaseComponent,
    props: {
        value: null,
        severity: null,
        rounded: Boolean,
        icon: String
    },
    style: TagStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
