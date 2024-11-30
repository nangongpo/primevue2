<template>
  <div class="content-section documentation">
    <TabView>
      <TabPanel header="Documentation">
        <Documentation />
      </TabPanel>
      <TabPanel header="Source">
        <SourceCode />
      </TabPanel>
      <TabPanel header="Personal">
        <Personal />
      </TabPanel>
      <TabPanel header="Seat">
        <Seat />
      </TabPanel>
      <TabPanel header="Payment">
        <Payment />
      </TabPanel>
      <TabPanel header="Confirmation">
        <Confirmation />
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
import Documentation from './Documentation.vue'
import SourceCode from './SourceCode.vue'
import Personal from './Personal.vue'
import Seat from './Seat.vue'
import Payment from './Payment.vue'
import Confirmation from './Confirmation.vue'

export default {
  components: { Documentation, SourceCode, Personal, Seat, Payment, Confirmation }
}
</script>
