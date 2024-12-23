<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import BaseAccordionTab from './BaseAccordionTab.vue';

export default {
    name: 'AccordionTab',
    extends: BaseAccordionTab,
    inheritAttrs: false
};
</script>
