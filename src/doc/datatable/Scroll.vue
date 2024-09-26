<template>
  <div class="content-section documentation">
    <TabView>
      <TabPanel header="Source">
        <DocSectionCode :code="baseCode" />
        <DocSectionCode :code="baseCode2" importCode />
        <DocSectionCode :code="baseCode3" importStyle />
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
<div class="card">
    <h5>Vertical</h5>
    <DataTable :value="customers1" :scrollable="true" scrollHeight="400px" :loading="loading">
        <Column field="name" header="Name" :styles="{'min-width':'200px'}"></Column>
        <Column field="country.name" header="Country" :styles="{'min-width':'200px'}"></Column>
        <Column field="representative.name" header="Representative" :styles="{'min-width':'200px'}"></Column>
        <Column field="status" header="Status" :styles="{'min-width':'200px'}"></Column>
    </DataTable>
</div>

<div class="card">
    <h5>Flexible Scroll</h5>

    <Button label="Show" icon="pi pi-external-link" @click="openDialog" />
</div>

<Dialog header="Flex Scroll" :visible.sync="dialogVisible" :style="{width: '75vw'}" :maximizable="true" :modal="true" :contentStyle="{height: '300px'}">
    <DataTable :value="customers1" :scrollable="true" scrollHeight="flex">
        <Column field="name" header="Name" :styles="{'min-width':'200px'}"></Column>
        <Column field="country.name" header="Country" :styles="{'min-width':'200px'}"></Column>
        <Column field="representative.name" header="Representative" :styles="{'min-width':'200px'}"></Column>
        <Column field="status" header="Status" :styles="{'min-width':'200px'}"></Column>
    </DataTable>
    <template #footer>
        <Button label="Ok" icon="pi pi-check" @click="closeDialog" />
    </template>
</Dialog>

<div class="card">
    <h5>Horizontal and Vertical with Footer</h5>
    <DataTable :value="customers2" :scrollable="true" scrollHeight="400px" :loading="loading" scrollDirection="both">
        <Column field="id" header="Id" footer="Id" :styles="{'flex-grow':'1', 'flex-basis':'100px'}"></Column>
        <Column field="name" header="Name" footer="Name" :styles="{'flex-grow':'1', 'flex-basis':'200px'}"></Column>
        <Column field="country.name" header="Country" footer="Country" :styles="{'flex-grow':'1', 'flex-basis':'200px'}"></Column>
        <Column field="date" header="Date" footer="Date" :styles="{'flex-grow':'1', 'flex-basis':'200px'}"></Column>
        <Column field="balance" header="Balance" footer="Balance" :styles="{'flex-grow':'1', 'flex-basis':'200px'}">
            <template #body="{data}">
                {{formatCurrency(data.balance)}}
            </template>
        </Column>
        <Column field="company" header="Company" footer="Company" :styles="{'flex-grow':'1', 'flex-basis':'200px'}"></Column>
        <Column field="status" header="Status" footer="Status" :styles="{'flex-grow':'1', 'flex-basis':'200px'}"></Column>
        <Column field="activity" header="Activity" footer="Activity" :styles="{'flex-grow':'1', 'flex-basis':'200px'}"></Column>
        <Column field="representative.name" header="Representative" footer="Representative" :styles="{'flex-grow':'1', 'flex-basis':'200px'}"></Column>
    </DataTable>
</div>

<div class="card">
    <h5>Frozen Rows</h5>
    <DataTable :value="unlockedCustomers" :frozenValue="lockedCustomers" :scrollable="true" scrollHeight="400px" :loading="loading">
        <Column field="name" header="Name" :styles="{'min-width':'200px'}"></Column>
        <Column field="country.name" header="Country" :styles="{'min-width':'200px'}"></Column>
        <Column field="representative.name" header="Representative" :styles="{'min-width':'200px'}"></Column>
        <Column field="status" header="Status" :styles="{'min-width':'200px'}"></Column>
        <Column :styles="{'flex': '0 0 4rem'}">
            <template #body="{data,frozenRow,index}">
                <Button type="button" :icon="frozenRow ? 'pi pi-lock-open' : 'pi pi-lock'" :disabled="frozenRow ? false : lockedCustomers.length >= 2"
                class="p-button-sm p-button-text" @click="toggleLock(data,frozenRow,index)"/>
            </template>
        </Column>
    </DataTable>
</div>

<div class="card">
    <h5>Frozen Columns</h5>
    <ToggleButton v-model="balanceFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Balance" offLabel="Freeze Balance" style="flex-grow:1; flex-basis: 12rem" />

    <DataTable :value="customers2" :scrollable="true" scrollHeight="400px" :loading="loading" scrollDirection="both" class="mt-3">
        <Column field="name" header="Name" :styles="{'flex-grow':'1', 'flex-basis':'160px'}" frozen></Column>
        <Column field="id" header="Id" :styles="{'flex-grow':'1', 'flex-basis':'100px'}"></Column>
        <Column field="name" header="Name" :styles="{'flex-grow':'1', 'flex-basis':'160px'}"></Column>
        <Column field="country.name" header="Country" :styles="{'flex-grow':'1', 'flex-basis':'200px'}"></Column>
        <Column field="date" header="Date" :styles="{'flex-grow':'1', 'flex-basis':'200px'}"></Column>
        <Column field="company" header="Company" :styles="{'flex-grow':'1', 'flex-basis':'200px'}"></Column>
        <Column field="status" header="Status" :styles="{'flex-grow':'1', 'flex-basis':'200px'}"></Column>
        <Column field="activity" header="Activity" :styles="{'flex-grow':'1', 'flex-basis':'200px'}"></Column>
        <Column field="representative.name" header="Representative" :styles="{'flex-grow':'1', 'flex-basis':'200px'}"></Column>
        <Column field="balance" header="Balance" :styles="{'flex-grow':'1', 'flex-basis':'200px'}" alignFrozen="right" :frozen="balanceFrozen">
            <template #body="{data}">
                <span class="font-bold">{{formatCurrency(data.balance)}}</span>
            </template>
        </Column>
    </DataTable>
</div>

<div class="card">
    <h5>Subheader Grouping</h5>
    <DataTable :value="customersGrouped" rowGroupMode="subheader" groupRowsBy="representative.name"
        sortMode="single" sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px">
        <Column field="representative.name" header="Representative"></Column>
        <Column field="name" header="Name" :styles="{'min-width':'200px'}"></Column>
        <Column field="country" header="Country" :styles="{'min-width':'200px'}">
            <template #body="slotProps">
                <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                <span class="image-text">{{slotProps.data.country.name}}</span>
            </template>
        </Column>
        <Column field="company" header="Company" :styles="{'min-width':'200px'}"></Column>
        <Column field="status" header="Status" :styles="{'min-width':'200px'}">
            <template #body="slotProps">
                <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
            </template>
        </Column>
        <Column field="date" header="Date" :styles="{'min-width':'200px'}"></Column>
        <template #groupheader="slotProps">
            <img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
            <span class="image-text">{{slotProps.data.representative.name}}</span>
        </template>
        <template #groupfooter="slotProps">
            <td style="text-align: right" class="font-bold pr-6">Total Customers: {{calculateCustomerTotal(slotProps.data.representative.name)}}</td>
        </template>
    </DataTable>
</div>

        `
      },
      baseCode2: {
        basic: `
import CustomerService from '../../service/CustomerService';

export default {
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
        this.customerService = new CustomerService();
    },
    mounted() {
        this.loading = true;

        this.customerService.getCustomersLarge().then(data => {
            this.customers1 = data;
            this.loading = false;
        });
        this.customerService.getCustomersMedium().then(data => this.customers2 = data);
        this.customerService.getCustomersMedium().then(data => this.unlockedCustomers = data);
        this.customerService.getCustomersMedium().then(data => this.customersGrouped = data);

        this.lockedCustomers = [
            {
                id: 5135,
                name: "Geraldine Bisset",
                country: {
                    name: "France",
                    code: "fr"
                },
                company: "Bisset Group",
                status: "proposal",
                date: "2019-05-05",
                activity: 0,
                representative: {
                    name: "Amy Elsner",
                    image: "amyelsner.png"
                }
            }
        ];
    },
    methods: {
        openDialog() {
            this.dialogVisible = true;
        },
        closeDialog() {
            this.dialogVisible = false;
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        },
        calculateCustomerTotal(name) {
            let total = 0;

            if (this.customersGrouped) {
                for (let customer of this.customersGrouped) {
                    if (customer.representative.name === name) {
                        total++;
                    }
                }
            }

            return total;
        },
        toggleLock(data, frozen, index) {
            if (frozen) {
                this.lockedCustomers = this.lockedCustomers.filter((c, i) => i !== index);
                this.unlockedCustomers.push(data);
            }
            else {
                this.unlockedCustomers = this.unlockedCustomers.filter((c, i) => i !== index);
                this.lockedCustomers.push(data);
            }

            this.unlockedCustomers.sort((val1, val2) => {
                return val1.id &lt; val2.id ? -1 : 1;
            });
        }
    }
}
        `
      },
      baseCode3: {
        basic: `
:deep(.p-datatable-frozen-tbody) {
    font-weight: bold;
}

:deep(.p-datatable-scrollable .p-frozen-column) {
    font-weight: bold;
}
        `
      },
    }
  }
}
</script>

<style>
</style>
