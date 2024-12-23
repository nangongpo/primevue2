<script>
import BaseComponent from 'primevue2/basecomponent';
import ConfirmPopupStyle from 'primevue2/confirmpopup/style';

export default {
    name: 'BaseConfirmPopup',
    extends: BaseComponent,
    props: {
        group: String
    },
    style: ConfirmPopupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
