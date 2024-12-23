<template>
    <input :class="cx('root')" :value="value" :aria-invalid="invalid || undefined" @input="onInput" v-bind="getPTOptions('root')" />
</template>

<script>
import BaseInputText from './BaseInputText.vue';

export default {
    name: 'InputText',
    extends: BaseInputText,
    inheritAttrs: false,
    emits: ['input'],
    methods: {
        getPTOptions(key) {
            const _ptm = key === 'root' ? this.ptmi : this.ptm;

            return _ptm(key, {
                context: {
                    filled: this.filled,
                    disabled: this.$attrs.disabled || this.$attrs.disabled === ''
                }
            });
        },
        onInput(event) {
            this.$emit('input', event.target.value);
        }
    },
    computed: {
        filled() {
            return this.value != null && this.value.toString().length > 0;
        }
    }
};
</script>
