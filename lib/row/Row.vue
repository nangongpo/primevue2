<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {

  },
  data() {
    return {
      columns: null
    }
  },
  mounted() {
    this.columns = this.$children
  }
}
</script>
