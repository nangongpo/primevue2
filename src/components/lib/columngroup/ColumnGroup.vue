<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import BaseColumnGroup from './BaseColumnGroup.vue'

export default {
  name: 'ColumnGroup',
  extends: BaseColumnGroup,
  inheritAttrs: false,
  data() {
    return {
      children: null
    }
  },
  mounted() {
    this.children = this.$children
  },
  computed: {
    rows() {
      return this.children
    }
  }
}
</script>
