<template>
    <input :class="cx('root')" :value="value" :aria-invalid="invalid || undefined" v-bind="getPTOptions('root')" v-on="listeners" />
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
        listeners({ $listeners }) {
          return {
            ...$listeners,
            input: this.onInput
          }
        },
        filled() {
            return this.value != null && this.value.toString().length > 0;
        }
    }
};
</script>

<style>
.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-right > i {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-input-icon-left > i:first-of-type {
  left: 0.5rem;
}

.p-input-icon-left.p-float-label > label {
  left: 2rem;
}

.p-input-icon-left > .p-inputtext {
  padding-left: 2rem;
}

.p-input-icon-right > i:last-of-type {
  right: 0.5rem;
}

.p-input-icon-right > .p-inputtext {
  padding-right: 2rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
</style>
