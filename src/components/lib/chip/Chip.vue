<template>
    <div v-if="visible" :class="cx('root')" :aria-label="label" v-bind="ptmi('root')">
        <slot>
            <img v-if="image" :src="image" v-bind="ptm('image')" />
            <DynamicComponent v-else-if="$slots.icon" :template="$slots.icon" :className="cx('icon')" v-bind="ptm('icon')" />
            <span v-else-if="icon" :class="[cx('icon'), icon]" v-bind="ptm('icon')" />
            <div v-if="label" :class="cx('label')" v-bind="ptm('label')">{{ label }}</div>
        </slot>
        <slot v-if="removable" name="removeicon" :onClick="close" :onKeydown="onKeydown" :removeCallback="close" :keydownCallback="onKeydown">
            <DynamicComponent :template="removeIcon ? 'span' : 'TimesCircleIcon'" tabindex="0" :className="[cx('removeIcon'), removeIcon]" @click="close" @keydown="onKeydown" v-bind="ptm('removeIcon')"></DynamicComponent>
        </slot>
    </div>
</template>

<script>
import TimesCircleIcon from 'primevue2/icons/timescircle';
import BaseChip from './BaseChip.vue';

export default {
    name: 'Chip',
    extends: BaseChip,
    inheritAttrs: false,
    emits: ['remove'],
    data() {
        return {
            visible: true
        };
    },
    methods: {
        onKeydown(event) {
            if (event.key === 'Enter' || event.key === 'Backspace') {
                this.close(event);
            }
        },
        close(event) {
            this.visible = false;
            this.$emit('remove', event);
        }
    },
    components: {
        TimesCircleIcon
    }
};
</script>
