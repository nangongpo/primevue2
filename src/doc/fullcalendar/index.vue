<template>
    <div class="content-section documentation">
    <TabView>
      <TabPanel header="Documentation">
        <Documentation />
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
import Documentation from './Documentation.vue'
export default {
  components: { Documentation }
}
</script>
