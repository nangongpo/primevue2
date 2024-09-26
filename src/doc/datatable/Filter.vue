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
<div class="card">
    <DataTable :value="customers1" :paginator="true" class="p-datatable-customers" showGridlines :rows="10"
        dataKey="id" :filters.sync="filters1" filterDisplay="menu" :loading="loading1" responsiveLayout="scroll"
        :globalFilterFields="['name','country.name','representative.name','balance','status']">
        <template #header>
            <div class="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined" @click="clearFilter1()"/>
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText v-model="filters1['global'].value" placeholder="Keyword Search" />
                </span>
            </div>
        </template>
        <template #empty>
            No customers found.
        </template>
        <template #loading>
            Loading customers data. Please wait.
        </template>
        <Column field="name" header="Name" :styles="{'min-width':'12rem'}">
            <template #body="{data}">
                {{data.name}}
            </template>
            <template #filter="{filterModel}">
                <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
            </template>
        </Column>
        <Column header="Country" filterField="country.name" :styles="{'min-width':'12rem'}">
            <template #body="{data}">
                <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + data.country.code" width="30" />
                <span class="image-text">{{data.country.name}}</span>
            </template>
            <template #filter="{filterModel}">
                <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"/>
            </template>
            <template #filterclear="{filterCallback}">
                <Button type="button" icon="pi pi-times" @click="filterCallback()" class="p-button-secondary"></Button>
            </template>
            <template #filterapply="{filterCallback}">
                <Button type="button" icon="pi pi-check" @click="filterCallback()" class="p-button-success"></Button>
            </template>
            <template #filterfooter>
                <div class="px-3 pt-0 pb-3 text-center font-bold">Customized Buttons</div>
            </template>
        </Column>
        <Column header="Agent" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{'width':'14rem'}" :styles="{'min-width':'14rem'}">
            <template #body="{data}">
                <img :alt="data.representative.name" :src="'demo/images/avatar/' + data.representative.image" width="32" style="vertical-align: middle" />
                <span class="image-text">{{data.representative.name}}</span>
            </template>
            <template #filter="{filterModel}">
                <div class="mb-3 font-bold">Agent Picker</div>
                <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                    <template #option="slotProps">
                        <div class="p-multiselect-representative-option">
                            <img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" />
                            <span class="image-text">{{slotProps.option.name}}</span>
                        </div>
                    </template>
                </MultiSelect>
            </template>
        </Column>
        <Column header="Date" filterField="date" dataType="date" :styles="{'min-width':'10rem'}">
            <template #body="{data}">
                {{formatDate(data.date)}}
            </template>
            <template #filter="{filterModel}">
                <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
            </template>
        </Column>
        <Column header="Balance" filterField="balance" dataType="numeric" :styles="{'min-width':'10rem'}">
            <template #body="{data}">
                {{formatCurrency(data.balance)}}
            </template>
            <template #filter="{filterModel}">
                <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
            </template>
        </Column>
        <Column field="status" header="Status" :filterMenuStyle="{'width':'14rem'}" :styles="{'min-width':'12rem'}">
            <template #body="{data}">
                <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
            </template>
            <template #filter="{filterModel}">
                <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                    <template #value="slotProps">
                        <span :class="'customer-badge status-' + slotProps.value" v-if="slotProps.value">{{slotProps.value}}</span>
                        <span v-else>{{slotProps.placeholder}}</span>
                    </template>
                    <template #option="slotProps">
                        <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                    </template>
                </Dropdown>
            </template>
        </Column>
        <Column field="activity" header="Activity" :showFilterMatchModes="false" :styles="{'min-width':'12rem'}">
            <template #body="{data}">
                <ProgressBar :value="data.activity" :showValue="false"></ProgressBar>
            </template>
            <template #filter="{filterModel}">
                <!-- <InputText type="text" v-model="filterModel.value" placeholder="Minimum"/> -->
                <Slider v-model="filterModel.value" range class="m-3"></Slider>
                <div class="flex align-items-center justify-content-between px-2">
                    <span>{{filterModel.value ? filterModel.value[0] : 0}}</span>
                    <span>{{filterModel.value ? filterModel.value[1] : 100}}</span>
                </div>
            </template>
        </Column>
        <Column field="verified" header="Verified" dataType="boolean" bodyClass="text-center" :styles="{'min-width':'8rem'}">
            <template #body="{data}">
                <i class="pi" :class="{'true-icon pi-check-circle': data.verified, 'false-icon pi-times-circle': !data.verified}"></i>
            </template>
            <template #filter={filterModel}>
                <TriStateCheckbox v-model="filterModel.value" />
            </template>
        </Column>
    </DataTable>
</div>

<div class="card">
    <DataTable :value="customers2" :paginator="true" class="p-datatable-customers" :rows="10"
        dataKey="id" :filters.sync="filters2" filterDisplay="row" :loading="loading2" responsiveLayout="scroll"
        :globalFilterFields="['name','country.name','representative.name','status']">
        <template #header>
            <div class="flex justify-content-end">
                <span class="p-input-icon-left ">
                    <i class="pi pi-search" />
                    <InputText v-model="filters2['global'].value" placeholder="Keyword Search" />
                </span>
            </div>
        </template>
        <template #empty>
            No customers found.
        </template>
        <template #loading>
            Loading customers data. Please wait.
        </template>
        <Column field="name" header="Name" :styles="{'min-width':'12rem'}">
            <template #body="{data}">
                {{data.name}}
            </template>
            <template #filter="{filterModel,filterCallback}">
                <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="\`Search by name - \${filterModel.matchMode}\`" v-tooltip.top.focus="'Hit enter key to filter'"/>
            </template>
        </Column>
        <Column header="Country" filterField="country.name" :styles="{'min-width':'12rem'}">
            <template #body="{data}">
                <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + data.country.code" width="30" />
                <span class="image-text">{{data.country.name}}</span>
            </template>
            <template #filter="{filterModel,filterCallback}">
                <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" placeholder="Search by country" v-tooltip.top.focus="'Filter as you type'"/>
            </template>
        </Column>
        <Column header="Agent" filterField="representative" :showFilterMenu="false" :styles="{'min-width':'14rem'}">
            <template #body="{data}">
                <img :alt="data.representative.name" :src="'demo/images/avatar/' + data.representative.image" width="32" style="vertical-align: middle" />
                <span class="image-text">{{data.representative.name}}</span>
            </template>
            <template #filter="{filterModel,filterCallback}">
                <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                    <template #option="slotProps">
                        <div class="p-multiselect-representative-option">
                            <img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" />
                            <span class="image-text">{{slotProps.option.name}}</span>
                        </div>
                    </template>
                </MultiSelect>
            </template>
        </Column>
        <Column field="status" header="Status" :showFilterMenu="false" :styles="{'min-width':'12rem'}">
            <template #body="{data}">
                <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
            </template>
            <template #filter="{filterModel,filterCallback}">
                <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                    <template #value="slotProps">
                        <span :class="'customer-badge status-' + slotProps.value" v-if="slotProps.value">{{slotProps.value}}</span>
                        <span v-else>{{slotProps.placeholder}}</span>
                    </template>
                    <template #option="slotProps">
                        <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                    </template>
                </Dropdown>
            </template>
        </Column>
        <Column field="verified" header="Verified" dataType="boolean" :styles="{'min-width':'6rem'}">
            <template #body="{data}">
                <i class="pi" :class="{'true-icon pi-check-circle': data.verified, 'false-icon pi-times-circle': !data.verified}"></i>
            </template>
            <template #filter="{filterModel,filterCallback}">
                <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()"/>
            </template>
        </Column>
    </DataTable>
</div>
        `
      },
      baseCode2: {
        basic: `
import CustomerService from '../../service/CustomerService';
import {FilterMatchMode,FilterOperator} from 'primevue2/api/';

export default {
    data() {
        return {
            customers: null,
            filters: {},
            loading: true,
            representatives: [
                {name: "Amy Elsner", image: 'amyelsner.png'},
                {name: "Anna Fali", image: 'annafali.png'},
                {name: "Asiya Javayant", image: 'asiyajavayant.png'},
                {name: "Bernardo Dominic", image: 'bernardodominic.png'},
                {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
                {name: "Ioni Bowcher", image: 'ionibowcher.png'},
                {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
                {name: "Onyama Limba", image: 'onyamalimba.png'},
                {name: "Stephen Shaw", image: 'stephenshaw.png'},
                {name: "XuXue Feng", image: 'xuxuefeng.png'}
            ],
            statuses: [
                'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
            ]
        }
    },
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => this.customers = data);
        this.loading = false;
    },
    methods: {
        filterDate(value, filter) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value === this.formatDate(filter);
        },
        formatDate(date) {
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (month &lt; 10) {
                month = '0' + month;
            }

            if (day &lt; 10) {
                day = '0' + day;
            }

            return date.getFullYear() + '-' + month + '-' + day;
        }
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
