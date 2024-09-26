<template>
    <div class="content-section documentation">
    <TabView>
      <TabPanel header="Documentation">
        <Documentation />
      </TabPanel>
      <TabPanel header="Source">
        <SourceCode />
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
import Documentation from './Documentation.vue'
import SourceCode from './SourceCode.vue'
export default {
  components: { Documentation, SourceCode }
}
</script>
