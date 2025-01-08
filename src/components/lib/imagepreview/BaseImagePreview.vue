<script>
import BaseComponent from 'primevue2/basecomponent';
import ImagePreviewStyle from 'primevue2/imagepreview/style';

export default {
    name: 'BaseImagePreview',
    extends: BaseComponent,
    props: {
        preview: {
            type: Boolean,
            default: false
        },
        className: {
            type: null,
            default: null
        },
        styleName: {
            type: null,
            default: null
        },
        imageStyle: {
            type: null,
            default: null
        },
        imageClass: {
            type: null,
            default: null
        },
        previewButtonProps: {
            type: null,
            default: null
        },
        indicatorIcon: {
            type: String,
            default: undefined
        },
        zoomInDisabled: {
            type: Boolean,
            default: false
        },
        zoomOutDisabled: {
            type: Boolean,
            default: false
        }
    },
    style: ImagePreviewStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
