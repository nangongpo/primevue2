<template>
    <button v-ripple :class="cx('firstPageButton')" type="button" v-bind="getPTOptions('firstPageButton')" v-on="$listeners" data-pc-group-section="pagebutton">
        <DynamicComponent :template="template || 'AngleDoubleLeftIcon'" :className="cx('firstPageIcon')" v-bind="getPTOptions('firstPageIcon')" />
    </button>
</template>

<script>
import BaseComponent from 'primevue2/basecomponent';
import AngleDoubleLeftIcon from 'primevue2/icons/angledoubleleft';
import Ripple from 'primevue2/ripple';
import { DynamicComponent } from 'primevue2/utils'

export default {
    name: 'FirstPageLink',
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
        DynamicComponent: DynamicComponent,
        AngleDoubleLeftIcon: AngleDoubleLeftIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
