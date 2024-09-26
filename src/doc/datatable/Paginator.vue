<template>
  <div class="content-section documentation">
    <TabView>
      <TabPanel header="Source">
        <DocSectionCode :code="baseCode" />
        <DocSectionCode :code="baseCode2" importCode />
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseCode: {
        basic: `
<DataTable :value="customers" :paginator="true" :rows="10" responsiveLayout="scroll"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    :rowsPerPageOptions="[10,20,50]"
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
        `
      },
      baseCode2: {
        basic: `
import CustomerService from '../../service/CustomerService';

export default {
    data() {
        return {
            customers: null
        }
    },
    customerService: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => this.customers = data);
    }
}
        `
      },
    }
  }
}
</script>

<style>
</style>
