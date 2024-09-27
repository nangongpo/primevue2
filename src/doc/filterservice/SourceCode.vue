<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/filterservice"
      class="btn-viewsource"
      target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
    <DocSectionCode :code="sourceCode2" importCode />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<DataTable :value="customers" :paginator="true" :rows="10" responsiveLayout="scroll"
    dataKey="id" :filters.sync="filters" filterDisplay="row" :loading="loading">
    <template #empty>
        No customers found.
    </template>
    <template #loading>
        Loading customers data. Please wait.
    </template>
    <Column field="name" header="Name" :filterMatchModeOptions="matchModeOptions">
        <template #body="{data}">
            {{data.name}}
        </template>
        <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by name - \${filterModel.matchMode}\`"/>
        </template>
    </Column>
    <Column header="Country" filterField="country.name" :filterMatchModeOptions="matchModeOptions">
        <template #body="{data}">
            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + data.country.code" width="30" />
            <span class="image-text">{{data.country.name}}</span>
        </template>
        <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by country - \${filterModel.matchMode}\`" />
        </template>
    </Column>
</DataTable>
        `
      },
      sourceCode2: {
        basic: `
import FilterMatchMode from '../../../src/components/api/FilterMatchMode';
import FilterService from '../../../src/components/api/FilterService';
import CustomerService from '../../service/CustomerService';

const YOUR_FILTER = 'YOUR FILTER';

export default {
    data() {
        return {
            customers: null,
            filters: {
                'name': {value: null, matchMode: YOUR_FILTER},
                'country.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH}
            },
            matchModeOptions: [
                {label: 'Your Equals', value: YOUR_FILTER},
                {label: 'Starts With', value: FilterMatchMode.STARTS_WITH}
            ],
            loading: true
        }
    },
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => {
            this.customers = data;
            this.loading = false;
        });

        FilterService.register(YOUR_FILTER, (value, filter) => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.toString() === filter.toString();
        });
    }
}
        `
      },
    }
  }
}
</script>
