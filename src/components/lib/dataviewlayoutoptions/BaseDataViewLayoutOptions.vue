<script>
import BaseComponent from 'primevue2/basecomponent';
import DataViewLayoutOptionsStyle from 'primevue2/dataviewlayoutoptions/style';

export default {
    name: 'BaseDataViewLayoutOptions',
    extends: BaseComponent,
    props: {
        value: String
    },
    style: DataViewLayoutOptionsStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
