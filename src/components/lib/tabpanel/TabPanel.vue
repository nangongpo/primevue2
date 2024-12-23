<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import BaseTabPanel from './BaseTabPanel.vue';
export default {
  name: 'TabPanel',
  extends: BaseTabPanel
}
</script>
