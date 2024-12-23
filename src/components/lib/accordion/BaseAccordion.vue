<script>
import AccordionStyle from 'primevue2/accordion/style';
import BaseComponent from 'primevue2/basecomponent';

export default {
    name: 'BaseAccordion',
    extends: BaseComponent,
    props: {
        multiple: {
            type: Boolean,
            default: false
        },
        activeIndex: {
            type: [Number, Array],
            default: null
        },
        lazy: {
            type: Boolean,
            default: false
        },
        expandIcon: {
            type: String,
            default: undefined
        },
        collapseIcon: {
            type: String,
            default: undefined
        },
        tabindex: {
            type: Number,
            default: 0
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        }
    },
    style: AccordionStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
