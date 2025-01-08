<template>
    <button v-ripple :class="cx('nextPageButton')" type="button" v-bind="getPTOptions('nextPageButton')" v-on="$listeners" data-pc-group-section="pagebutton">
        <DynamicComponent :template="template || 'AngleRightIcon'" :className="cx('nextPageIcon')" v-bind="getPTOptions('nextPageIcon')" />
    </button>
</template>

<script>
import BaseComponent from 'primevue2/basecomponent';
import AngleRightIcon from 'primevue2/icons/angleright';
import Ripple from 'primevue2/ripple';

export default {
    name: 'NextPageLink',
    hostName: 'Paginator',
    extends: BaseComponent,
    props: {
        template: {
            type: Function,
            default: null
        }
    },
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
                context: {
                    disabled: this.$attrs.disabled
                }
            });
        }
    },
    components: {
        AngleRightIcon: AngleRightIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
