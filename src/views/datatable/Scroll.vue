<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>DataTable <span>Scroll</span></h1>
        <p>Data scrolling is available horizontally, vertically or both with support for frozen rows and columns.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <!-- <div class="card">
        <h5>Vertical</h5>
        <DataTable dataKey="id" :value="customers1" :scrollable="true" scrollHeight="400px" :loading="loading">
          <Column field="name" header="Name" :styleName="{ 'min-width': '200px' }"></Column>
          <Column field="country.name" header="Country" :styleName="{ 'min-width': '200px' }"></Column>
          <Column field="representative.name" header="Representative" :styleName="{ 'min-width': '200px' }"></Column>
          <Column field="status" header="Status" :styleName="{ 'min-width': '200px' }"></Column>
        </DataTable>
      </div>

      <div class="card">
        <h5>Flexible Scroll</h5>
        <p>
          Flex scroll feature makes the scrollable viewport section dynamic insteaf of a fixed value so that it can grow
          or shrink relative to the parent size of the table. Click the button below to display a maximizable Dialog
          where data viewport adjusts itself according to the size changes.
        </p>

        <Button label="Show" icon="pi pi-external-link" @click="openDialog" />
      </div>

      <Dialog
        header="Flex Scroll"
        :visible.sync="dialogVisible"
        :style="{ width: '75vw' }"
        :maximizable="true"
        :modal="true"
        :contentStyle="{ height: '300px' }">
        <DataTable dataKey="id" :value="customers1" :scrollable="true" scrollHeight="flex">
          <Column field="name" header="Name" :styleName="{ 'min-width': '200px' }"></Column>
          <Column field="country.name" header="Country" :styleName="{ 'min-width': '200px' }"></Column>
          <Column field="representative.name" header="Representative" :styleName="{ 'min-width': '200px' }"></Column>
          <Column field="status" header="Status" :styleName="{ 'min-width': '200px' }"></Column>
        </DataTable>
        <template #footer>
          <Button label="Ok" icon="pi pi-check" @click="closeDialog" />
        </template>
      </Dialog>

      <div class="card">
        <h5>Horizontal and Vertical with Footer</h5>
        <DataTable
          dataKey="id"
          :value="customers2"
          :scrollable="true"
          scrollHeight="400px"
          :loading="loading"
          scrollDirection="both">
          <Column field="id" header="Id" footer="Id" :styleName="{ 'flex-grow': '1', 'flex-basis': '100px' }"></Column>
          <Column
            field="name"
            header="Name"
            footer="Name"
            :styleName="{ 'flex-grow': '1', 'flex-basis': '200px' }"></Column>
          <Column
            field="country.name"
            header="Country"
            footer="Country"
            :styleName="{ 'flex-grow': '1', 'flex-basis': '200px' }"></Column>
          <Column
            field="date"
            header="Date"
            footer="Date"
            :styleName="{ 'flex-grow': '1', 'flex-basis': '200px' }"></Column>
          <Column
            field="balance"
            header="Balance"
            footer="Balance"
            :styleName="{ 'flex-grow': '1', 'flex-basis': '200px' }">
            <template #body="{ data }">
              {{ formatCurrency(data.balance) }}
            </template>
          </Column>
          <Column
            field="company"
            header="Company"
            footer="Company"
            :styleName="{ 'flex-grow': '1', 'flex-basis': '200px' }"></Column>
          <Column
            field="status"
            header="Status"
            footer="Status"
            :styleName="{ 'flex-grow': '1', 'flex-basis': '200px' }"></Column>
          <Column
            field="activity"
            header="Activity"
            footer="Activity"
            :styleName="{ 'flex-grow': '1', 'flex-basis': '200px' }"></Column>
          <Column
            field="representative.name"
            header="Representative"
            footer="Representative"
            :styleName="{ 'flex-grow': '1', 'flex-basis': '200px' }"></Column>
        </DataTable>
      </div>

      <div class="card">
        <h5>Frozen Rows</h5>
        <DataTable
          dataKey="id"
          :value="unlockedCustomers"
          :frozenValue="lockedCustomers"
          :scrollable="true"
          scrollHeight="400px"
          :loading="loading">
          <Column field="name" header="Name" :styleName="{ 'min-width': '200px' }"></Column>
          <Column field="country.name" header="Country" :styleName="{ 'min-width': '200px' }"></Column>
          <Column field="representative.name" header="Representative" :styleName="{ 'min-width': '200px' }"></Column>
          <Column field="status" header="Status" :styleName="{ 'min-width': '200px' }"></Column>
          <Column :styleName="{ flex: '0 0 4rem' }">
            <template #body="{ data, frozenRow, index }">
              <Button
                type="button"
                :icon="frozenRow ? 'pi pi-lock-open' : 'pi pi-lock'"
                :disabled="frozenRow ? false : lockedCustomers.length >= 2"
                class="p-button-sm p-button-text"
                @click="toggleLock(data, frozenRow, index)" />
            </template>
          </Column>
        </DataTable>
      </div> -->

      <div class="card">
        <h5>Frozen Columns</h5>
        <ToggleButton
          v-model="balanceFrozen"
          onIcon="pi pi-lock"
          offIcon="pi pi-lock-open"
          onLabel="Unfreeze Balance"
          offLabel="Freeze Balance" />
        
          <DataTable :value="customers2" scrollable scrollHeight="400px" class="mt-3">
            <Column field="name" header="Name" :styleName="{'min-width': '200px'}" frozen class="font-bold"></Column>
            <Column field="id" header="Id" :styleName="{'min-width': '100px'}"></Column>
            <Column field="name" header="Name" :styleName="{'min-width': '200px'}"></Column>
            <Column field="country.name" header="Country" :styleName="{'min-width': '200px'}"></Column>
            <Column field="date" header="Date" :styleName="{'min-width': '200px'}"></Column>
            <Column field="company" header="Company" :styleName="{'min-width': '200px'}"></Column>
            <Column field="status" header="Status" :styleName="{'min-width': '200px'}"></Column>
            <Column field="activity" header="Activity" :styleName="{'min-width': '200px'}"></Column>
            <Column field="representative.name" header="Representative" :styleName="{'min-width': '200px'}"></Column>
            <Column field="balance" header="Balance" :styleName="{'min-width': '200px'}" alignFrozen="right" :frozen="balanceFrozen">
                <template #body="{ data }">
                    <span class="font-bold">{{ formatCurrency(data.balance) }}</span>
                </template>
            </Column>
        </DataTable>
      </div>

      <!-- <div class="card">
        <h5>Subheader Grouping</h5>
        <DataTable
          dataKey="id"
          :value="customersGrouped"
          rowGroupMode="subheader"
          groupRowsBy="representative.name"
          sortMode="single"
          sortField="representative.name"
          :sortOrder="1"
          scrollable
          scrollHeight="400px">
          <Column field="representative.name" header="Representative"></Column>
          <Column field="name" header="Name" :styleName="{ 'min-width': '200px' }"></Column>
          <Column field="country" header="Country" :styleName="{'min-width':'200px'}">
            <template #body="slotProps">
                <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                <span class="image-text">{{slotProps.data.country.name}}</span>
            </template>
          </Column>
          <Column field="company" header="Company" :styleName="{ 'min-width': '200px' }"></Column>
          <Column field="status" header="Status" :styleName="{ 'min-width': '200px' }">
            <template #body="slotProps">
              <span :class="'customer-badge status-' + slotProps.data.status">{{ slotProps.data.status }}</span>
            </template>
          </Column>
          <Column field="date" header="Date" :styleName="{ 'min-width': '200px' }"></Column>
          <template #groupheader="slotProps">
            <img
              :alt="slotProps.data.representative.name"
              :src="$publicUrl('demo/images/avatar/' + slotProps.data.representative.image)"
              width="32"
              style="vertical-align: middle" />
            <span class="image-text">{{ slotProps.data.representative.name }}</span>
          </template>
          <template #groupfooter="slotProps">
            <td style="text-align: right" class="font-bold pr-6">
              Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}
            </td>
          </template>
        </DataTable>
      </div> -->
    </div>

    <DataTableScrollDoc />
  </div>
</template>

<script>
import DataTableScrollDoc from '@/doc/datatable/Scroll.vue'
import CustomerService from '../../service/CustomerService'

export default {
  components: { DataTableScrollDoc },
  data() {
    return {
      customers1: null,
      customers2: null,
      customersGrouped: null,
      lockedCustomers: [],
      unlockedCustomers: null,
      loading: false,
      dialogVisible: false,
      balanceFrozen: false
    }
  },
  customerService: null,
  created() {
    this.customerService = new CustomerService()
  },
  mounted() {
    this.loading = true

    this.customerService.getCustomersLarge().then(data => {
      this.customers1 = data
      this.loading = false
    })
    this.customerService.getCustomersMedium().then(data => this.customers2 = data)
    this.customerService.getCustomersMedium().then(data => this.unlockedCustomers = data)
    this.customerService.getCustomersMedium().then(data => this.customersGrouped = data)

    this.lockedCustomers = [
      {
        id: 5135,
        name: 'Geraldine Bisset',
        country: {
          name: 'France',
          code: 'fr'
        },
        company: 'Bisset Group',
        status: 'proposal',
        date: '2019-05-05',
        activity: 0,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        }
      }
    ]
  },
  methods: {
    openDialog() {
      this.dialogVisible = true
    },
    closeDialog() {
      this.dialogVisible = false
    },
    formatCurrency(value) {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    },
    calculateCustomerTotal(name) {
      let total = 0

      if (this.customersGrouped) {
        for (let customer of this.customersGrouped) {
          if (customer.representative.name === name) {
            total++
          }
        }
      }

      return total
    },
    toggleLock(data, frozen, index) {
      if (frozen) {
        this.lockedCustomers = this.lockedCustomers.filter((c, i) => i !== index)
        this.unlockedCustomers.push(data)
      }
      else {
        this.unlockedCustomers = this.unlockedCustomers.filter((c, i) => i !== index)
        this.lockedCustomers.push(data)
      }

      this.unlockedCustomers.sort((val1, val2) => {
        return val1.id < val2.id ? -1 : 1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.p-datatable-frozen-tbody) {
  font-weight: bold;
}

:deep(.p-datatable-scrollable .p-frozen-column) {
  font-weight: bold;
}
</style>
