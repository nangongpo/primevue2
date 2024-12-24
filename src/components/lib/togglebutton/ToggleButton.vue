<template>
    <div :class="cx('root')" v-bind="getPTOptions('root')" :data-p-highlight="active" :data-p-disabled="disabled">
        <input
            :id="inputId"
            type="checkbox"
            role="switch"
            :class="[cx('input'), inputClass]"
            :style="inputStyle"
            :value="value"
            :checked="active"
            :tabindex="tabindex"
            :disabled="disabled"
            :readonly="readonly"
            :aria-labelledby="ariaLabelledby"
            :aria-label="ariaLabel"
            :aria-invalid="invalid || undefined"
            @focus="onFocus"
            @blur="onBlur"
            @change="onChange"
            v-bind="getPTOptions('input')"
        />
        <div v-ripple :class="cx('box')" v-bind="getPTOptions('box')">
            <slot name="icon" :value="value" :className="cx('icon')">
                <span v-if="onIcon || offIcon" :class="[cx('icon'), value ? onIcon : offIcon]" v-bind="getPTOptions('icon')" />
            </slot>
            <span :class="cx('label')" v-bind="getPTOptions('label')">{{ label }}</span>
        </div>
    </div>
</template>

<script>
import Ripple from 'primevue2/ripple';
import { ObjectUtils } from 'primevue2/utils';
import BaseToggleButton from './BaseToggleButton.vue';

export default {
    name: 'ToggleButton',
    extends: BaseToggleButton,
    inheritAttrs: false,
    emits: ['input', 'change', 'focus', 'blur'],
    methods: {
        getPTOptions(key) {
            const _ptm = key === 'root' ? this.ptmi : this.ptm;

            return _ptm(key, {
                context: {
                    active: this.active,
                    disabled: this.disabled
                }
            });
        },
        onChange(event) {
            if (!this.disabled && !this.readonly) {
                this.$emit('input', !this.value);
                this.$emit('change', event);
            }
        },
        onFocus(event) {
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.$emit('blur', event);
        }
    },
    computed: {
        active() {
            return this.value === true;
        },
        hasLabel() {
            return ObjectUtils.isNotEmpty(this.onLabel) && ObjectUtils.isNotEmpty(this.offLabel);
        },
        hasIcon() {
            return this.$slots.icon || (this.onIcon && this.offIcon);
        },
        label() {
            return this.hasLabel ? (this.value ? this.onLabel : this.offLabel) : '&nbsp;';
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
