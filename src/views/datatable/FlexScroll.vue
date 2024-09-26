<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>DataTable <span>Flex Scroll</span></h1>
      </div>
    </div>
    <div class="content-section implementation">
      <div class="card" style="height: calc(100vh - 143px)">
        <DataTable :value="customers" :scrollable="true" scrollHeight="flex">
          <Column field="name" header="Name"></Column>
          <Column field="country.name" header="Country"></Column>
          <Column field="representative.name" header="Representative"></Column>
          <Column field="status" header="Status"></Column>
        </DataTable>
      </div>
    </div>

    <DataTableFlexScrollDoc />
  </div>
</template>

<script>
import DataTableFlexScrollDoc from '@/doc/datatable/FlexScroll.vue'
import CustomerService from '../../service/CustomerService'

export default {
  components: { DataTableFlexScrollDoc },
  data() {
    return {
      customers: null
    }
  },
  customerService: null,
  created() {
    this.customerService = new CustomerService()
  },
  mounted() {
    this.customerService.getCustomersLarge().then(data => this.customers = data)
  }
}
</script>
