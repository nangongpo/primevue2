<template>
    <button v-ripple :class="cx('previousPageButton')" type="button" v-bind="getPTOptions('previousPageButton')" 
    v-on="$listeners" data-pc-group-section="pagebutton">
        <DynamicComponent :template="template || 'AngleLeftIcon'" :className="cx('previousPageIcon')" v-bind="getPTOptions('previousPageIcon')" />
    </button>
</template>

<script>
import BaseComponent from 'primevue2/basecomponent';
import AngleLeftIcon from 'primevue2/icons/angleleft';
import Ripple from 'primevue2/ripple';

export default {
    name: 'PrevPageLink',
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
        AngleLeftIcon: AngleLeftIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
