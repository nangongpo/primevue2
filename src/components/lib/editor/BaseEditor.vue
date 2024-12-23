<script>
import BaseComponent from 'primevue2/basecomponent';
import EditorStyle from 'primevue2/editor/style';

export default {
    name: 'BaseEditor',
    extends: BaseComponent,
    props: {
        value: String,
        placeholder: String,
        readonly: Boolean,
        formats: Array,
        editorStyle: null,
        modules: null
    },
    style: EditorStyle,
    provide() {
        return {
            $parentInstance: this
        };
    },
    beforeMount() {
        EditorStyle.loadStyle({ nonce: this.$primevue?.config?.csp?.nonce });
    }
};
</script>
