<script>
import BaseComponent from 'primevue2/basecomponent';
import InputGroupAddonStyle from 'primevue2/inputgroupaddon/style';

export default {
    name: 'BaseInputGroupAddon',
    extends: BaseComponent,
    style: InputGroupAddonStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
