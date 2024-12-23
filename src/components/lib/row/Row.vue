<script>
import BaseComponent from 'primevue2/basecomponent';

export default {
    name: 'Row',
    extends: BaseComponent,
    inject: ['$rows'],
    mounted() {
        this.$rows?.add(this.$);
    },
    unmounted() {
        this.$rows?.delete(this.$);
    },
    render() {
        return null;
    }
};
</script>
