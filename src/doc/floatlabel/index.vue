<template>
  <div class="content-section documentation">
    <TabView>
      <TabPanel header="Source">
        <SourceCode />
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
import SourceCode from './SourceCode.vue'
export default {
  components: { SourceCode }
}
</script>
