<script>
import BaseComponent from 'primevue2/basecomponent';
import RatingStyle from 'primevue2/rating/style';

export default {
    name: 'BaseRating',
    extends: BaseComponent,
    props: {
        value: {
            type: Number,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        stars: {
            type: Number,
            default: 5
        },
        cancel: {
            type: Boolean,
            default: true
        },
        onIcon: {
            type: String,
            default: undefined
        },
        offIcon: {
            type: String,
            default: undefined
        },
        cancelIcon: {
            type: String,
            default: undefined
        }
    },
    style: RatingStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
