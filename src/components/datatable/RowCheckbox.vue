<template>
  <div
    :class="['p-checkbox p-component', { 'p-checkbox-focused': focused }]"
    @click="onClick">
    <div class="p-hidden-accessible">
      <input
        ref="input"
        type="checkbox"
        :checked="checked"
        @focus="onFocus($event)"
        @blur="onBlur($event)"
        :disabled="disabled" />
    </div>
    <div
      ref="box"
      :class="[
        'p-checkbox-box p-component',
        {
          'p-highlight': checked,
          'p-disabled': $attrs.disabled,
          'p-focus': focused
        }
      ]"
      role="checkbox"
      :aria-checked="checked">
      <span :class="['p-checkbox-icon', { 'pi pi-check': checked }]"></span>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: null,
    disabled: null,
    checked: null
  },
  data() {
    return {
      focused: false
    }
  },
  methods: {
    onClick(event) {
      if (!this.disabled) {
        this.$emit('change', {
          originalEvent: event,
          data: this.value
        })

        this.$refs.input.focus()
      }
    },
    onFocus() {
      this.focused = true
    },
    onBlur() {
      this.focused = false
    }
  }
}
</script>
