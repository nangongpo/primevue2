System.register(["./CustomerService-legacy-CHx26-bK.js","./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var l,a;return{setters:[function(e){l=e.C},function(e){a=e.n},null,null,null],execute:function(){e("default",a({data:function(){return{loading:!1,totalRecords:0,customers:null,selectedCustomers:null,selectAll:!1,filters:{name:{value:"",matchMode:"contains"},"country.name":{value:"",matchMode:"contains"},company:{value:"",matchMode:"contains"},"representative.name":{value:"",matchMode:"contains"}},lazyParams:{},columns:[{field:"name",header:"Name"},{field:"country.name",header:"Country"},{field:"company",header:"Company"},{field:"representative.name",header:"Representative"}]}},customerService:null,created:function(){this.customerService=new l},mounted:function(){this.loading=!0,this.lazyParams={first:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:null,filters:this.filters},this.loadLazyData()},methods:{loadLazyData:function(){var e=this;this.loading=!0,setTimeout((function(){e.customerService.getCustomers({lazyEvent:JSON.stringify(e.lazyParams)}).then((function(t){e.customers=t.customers,e.totalRecords=t.totalRecords,e.loading=!1}))}),1e3*Math.random()+250)},onPage:function(e){this.lazyParams=e,this.loadLazyData()},onSort:function(e){this.lazyParams=e,this.loadLazyData()},onFilter:function(){this.lazyParams.filters=this.filters,this.loadLazyData()},onSelectAllChange:function(e){var t=this;e.checked?this.customerService.getCustomers().then((function(e){t.selectAll=!0,t.selectedCustomers=e.customers})):(this.selectAll=!1,this.selectedCustomers=[])},onRowSelect:function(){this.selectAll=this.selectedCustomers.length===this.totalRecords},onRowUnselect:function(){this.selectAll=!1}}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("DataTable",{ref:"dt",attrs:{value:e.customers,lazy:!0,paginator:!0,rows:10,filters:e.filters,dataKey:"id",totalRecords:e.totalRecords,loading:e.loading,filterDisplay:"row",globalFilterFields:["name","country.name","company","representative.name"],responsiveLayout:"scroll",selection:e.selectedCustomers,selectAll:e.selectAll},on:{"update:filters":function(t){e.filters=t},page:function(t){return e.onPage(t)},sort:function(t){return e.onSort(t)},filter:function(t){return e.onFilter(t)},"update:selection":function(t){e.selectedCustomers=t},"select-all-change":e.onSelectAllChange,"row-select":e.onRowSelect,"row-unselect":e.onRowUnselect}},[t("Column",{attrs:{selectionMode:"multiple",headerStyle:"width: 3em"}}),t("Column",{ref:"name",attrs:{field:"name",header:"Name",filterMatchMode:"startsWith",sortable:!0},scopedSlots:e._u([{key:"filter",fn:function(l){var a=l.filterModel,n=l.filterCallback;return[t("InputText",{staticClass:"p-column-filter",attrs:{type:"text",placeholder:"Search by name"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:n()}},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"filterModel.value"}})]}}])}),t("Column",{ref:"country.name",attrs:{field:"country.name",header:"Country",filterField:"country.name",filterMatchMode:"contains",sortable:!0},scopedSlots:e._u([{key:"filter",fn:function(l){var a=l.filterModel,n=l.filterCallback;return[t("InputText",{staticClass:"p-column-filter",attrs:{type:"text",placeholder:"Search by country"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:n()}},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"filterModel.value"}})]}}])}),t("Column",{ref:"company",attrs:{field:"company",header:"Company",filterMatchMode:"contains",sortable:!0},scopedSlots:e._u([{key:"filter",fn:function(l){var a=l.filterModel,n=l.filterCallback;return[t("InputText",{staticClass:"p-column-filter",attrs:{type:"text",placeholder:"Search by company"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:n()}},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"filterModel.value"}})]}}])}),t("Column",{ref:"representative.name",attrs:{field:"representative.name",header:"Representative",filterField:"representative.name",sortable:!0},scopedSlots:e._u([{key:"filter",fn:function(l){var a=l.filterModel,n=l.filterCallback;return[t("InputText",{staticClass:"p-column-filter",attrs:{type:"text",placeholder:"Search by representative"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:n()}},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"filterModel.value"}})]}}])})],1)],1)]),t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("CodeHighlight",[[e._v(' <DataTable :value="customers" :lazy="true" :paginator="true" :rows="10" :filters.sync="filters" ref="dt" dataKey="id" :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)" @filter="onFilter($event)" filterDisplay="row" :globalFilterFields="[\'name\',\'country.name\', \'company\', \'representative.name\']" responsiveLayout="scroll" :selection.sync="selectedCustomers" :selectAll="selectAll" @select-all-change="onSelectAllChange" @row-select="onRowSelect" @row-unselect="onRowUnselect" > <Column selectionMode="multiple" headerStyle="width: 3em"></Column> <Column field="name" header="Name" filterMatchMode="startsWith" ref="name" :sortable="true"> <template #filter="{filterModel,filterCallback}"> <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by name"/> </template> </Column> <Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" ref="country.name" :sortable="true"> <template #filter="{filterModel,filterCallback}"> <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by country"/> </template> </Column> <Column field="company" header="Company" filterMatchMode="contains" ref="company" :sortable="true"> <template #filter="{filterModel,filterCallback}"> <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by company"/> </template> </Column> <Column field="representative.name" header="Representative" filterField="representative.name" ref="representative.name" :sortable="true"> <template #filter="{filterModel,filterCallback}"> <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by representative"/> </template> </Column> </DataTable> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import CustomerService from '../../service/CustomerService'; export default { data() { return { loading: false, totalRecords: 0, customers: null, selectedCustomers: null, selectAll: false, filters: { 'name': {value: '', matchMode: 'contains'}, 'country.name': {value: '', matchMode: 'contains'}, 'company': {value: '', matchMode: 'contains'}, 'representative.name': {value: '', matchMode: 'contains'}, }, lazyParams: {}, columns: [ {field: 'name', header: 'Name'}, {field: 'country.name', header: 'Country'}, {field: 'company', header: 'Company'}, {field: 'representative.name', header: 'Representative'} ] } }, customerService: null, created() { this.customerService = new CustomerService(); }, mounted() { this.loading = true; this.lazyParams = { first: 0, rows: this.$refs.dt.rows, sortField: null, sortOrder: null, filters: this.filters }; this.loadLazyData(); }, methods: { loadLazyData() { this.loading = true; setTimeout(() => { this.customerService.getCustomers( {lazyEvent: JSON.stringify( this.lazyParams )}) .then(data => { this.customers = data.customers; this.totalRecords = data.totalRecords; this.loading = false; } ); }, Math.random() * 1000 + 250); }, onPage(event) { this.lazyParams = event; this.loadLazyData(); }, onSort(event) { this.lazyParams = event; this.loadLazyData(); }, onFilter() { this.lazyParams.filters = this.filters; this.loadLazyData(); }, onSelectAllChange(event) { const selectAll = event.checked; if (selectAll) { this.customerService.getCustomers().then(data => { this.selectAll = true; this.selectedCustomers = data.customers; }); } else { this.selectAll = false; this.selectedCustomers = []; } }, onRowSelect() { this.selectAll = this.selectedCustomers.length === this.totalRecords }, onRowUnselect() { this.selectAll = false; } } } ")])],1)],1)],1)])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("DataTable "),t("span",[e._v("Lazy")])]),t("p",[e._v("Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens. Sample belows imitates lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist. Also, the implementation of "),t("b",[e._v("checkbox selection")]),e._v(" in lazy tables is left entirely to the user. Since the DataTable does not know what will happen to the data on the next page or whether there are instant data changes, the selection array can be implemented in several ways. One of them is as in the example below. ")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=DataTableLazyDemo-legacy-Bfeo_LsJ.js.map