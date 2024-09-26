<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>DataTable <span>Paginator</span></h1>
        <p>
          Pagination is enabled by setting paginator property to true and defining the rows attribute as the number of
          rows per page.
        </p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <DataTable
          :value="customers"
          :paginator="true"
          :rows="10"
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          :rowsPerPageOptions="[10, 20, 50]"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
          <Column field="name" header="Name"></Column>
          <Column field="country.name" header="Country"></Column>
          <Column field="company" header="Company"></Column>
          <Column field="representative.name" header="Representative"></Column>
          <template #paginatorstart>
            <Button type="button" icon="pi pi-refresh" class="p-button-text" />
          </template>
          <template #paginatorend>
            <Button type="button" icon="pi pi-cloud" class="p-button-text" />
          </template>
        </DataTable>
      </div>
    </div>

    <DataTablePaginatorDoc />
  </div>
</template>

<script>
import DataTablePaginatorDoc from '@/doc/datatable/Paginator.vue'
import CustomerService from '../../service/CustomerService'

export default {
  components: { DataTablePaginatorDoc },
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
