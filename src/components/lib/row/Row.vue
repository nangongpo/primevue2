<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import BaseComponent from 'primevue2/basecomponent';

export default {
    name: 'Row',
    extends: BaseComponent,
    data() {
      return {
        columns: null
      }
    },
    mounted() {
      this.columns = this.$children;
    }
};
</script>
