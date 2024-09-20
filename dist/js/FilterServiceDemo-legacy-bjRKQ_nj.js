System.register(["./app.component-legacy-CT61tSyJ.js","./CustomerService-legacy-CHx26-bK.js","./flag_placeholder-legacy-BDbXk8CQ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var l,r,a,i,o;return{setters:[function(e){l=e.n,r=e.aK,a=e.aN},function(e){i=e.C},function(e){o=e._},null,null,null],execute:function(){var t=l({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import {FilterService} from 'primevue2/api'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("Filters are accessed with "),t("i",[e._v("FilterService.filters")]),e._v(".")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" const value = 'PrimeVue'; FilterService.filters.equals(value, 'Vue'); //false FilterService.filters.equals(value, 8); //false FilterService.filters.equals(value, new Date()); //false FilterService.filters.contains(value, 'Vue'); //true FilterService.filters.startsWith(value, 'Vue'); //false FilterService.filters.endsWith(value, 'Vue'); //true FilterService.filters.lt(10, 20); //true FilterService.filters.gt(50, 20); //true FilterService.filters.in(value, ['PrimeFaces', 'PrimeVue']); //true ")]),t("h5",[e._v("Custom Constraint")]),t("p",[e._v("FilterService can be extended by adding new constraints using the "),t("span",[e._v("register")]),e._v(" function.")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" FilterService.register('isPrimeNumber', (value, filter): boolean => { if (filter === undefined || filter === null || filter.trim() === '') { return true; } if (value === undefined || value === null) { return false; } return value.toString() === filter.toString(); }); FilterService.filters['isPrimeNumber'](3); //true FilterService.filters['isPrimeNumber'](5); //true FilterService.filters['isPrimeNumber'](568985673); //false ")]),t("h5",[e._v("Built-in Constraints")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("startsWith")]),t("td",[e._v("value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering")]),t("td",[e._v("Whether the value starts with the filter value")])]),t("tr",[t("td",[e._v("contains")]),t("td",[e._v("value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering")]),t("td",[e._v("Whether the value contains the filter value")])]),t("tr",[t("td",[e._v("endsWith")]),t("td",[e._v("value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering")]),t("td",[e._v("Whether the value ends with the filter value")])]),t("tr",[t("td",[e._v("equals")]),t("td",[e._v("value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering")]),t("td",[e._v("Whether the value equals the filter value")])]),t("tr",[t("td",[e._v("notEquals")]),t("td",[e._v("value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering")]),t("td",[e._v("Whether the value does not equal the filter value")])]),t("tr",[t("td",[e._v("in")]),t("td",[e._v("value: Value to filter"),t("br"),e._v(" filter[]: An array of filter values"),t("br"),e._v(" filterLocale: Locale to use in filtering")]),t("td",[e._v("Whether the value contains the filter value")])]),t("tr",[t("td",[e._v("lt")]),t("td",[e._v("value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering")]),t("td",[e._v("Whether the value is less than the filter value")])]),t("tr",[t("td",[e._v("lte")]),t("td",[e._v("value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering")]),t("td",[e._v("Whether the value is less than or equals to the filter value")])]),t("tr",[t("td",[e._v("gt")]),t("td",[e._v("value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering")]),t("td",[e._v("Whether the value is greater than the filter value")])]),t("tr",[t("td",[e._v("gte")]),t("td",[e._v("value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering")]),t("td",[e._v("Whether the value is greater than or equals to the filter value")])]),t("tr",[t("td",[e._v("is")]),t("td",[e._v("value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering")]),t("td",[e._v("Whether the value equals the filter value, alias to equals")])]),t("tr",[t("td",[e._v("isNot")]),t("td",[e._v("value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering")]),t("td",[e._v("Whether the value does not equal the filter value, alias to notEquals.")])]),t("tr",[t("td",[e._v("before")]),t("td",[e._v("value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering")]),t("td",[e._v("Whether the date value is before the filter date.")])]),t("tr",[t("td",[e._v("after")]),t("td",[e._v("value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering")]),t("td",[e._v("Whether the date value is after the filter date.")])])])]),t("h5",[e._v("FilterService API")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("filter")]),t("td",[e._v("value[]: An array of values to filter"),t("br"),e._v(" fields[]: An array of properties in the value object"),t("br"),e._v(" filterValue: Filter value"),t("br"),e._v(" filterMatchMode: Constraint"),t("br"),e._v(" filterLocale: Locale to use in filtering")]),t("td",[e._v("Whether the property values of the given value collection matches the filter.")])]),t("tr",[t("td",[e._v("filters")]),t("td",[e._v("-")]),t("td",[e._v("Property to access constraints collection.")])]),t("tr",[t("td",[e._v("register")]),t("td",[e._v("name: string "),t("br"),e._v(" fn: Filter callback")]),t("td",[e._v("Registers a new constraint in filters.")])])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/filterservice",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <DataTable :value="customers" :paginator="true" :rows="10" responsiveLayout="scroll" dataKey="id" :filters.sync="filters" filterDisplay="row" :loading="loading"> <template #empty> No customers found. </template> <template #loading> Loading customers data. Please wait. </template> <Column field="name" header="Name" :filterMatchModeOptions="matchModeOptions"> <template #body="{data}"> {{data.name}} </template> <template #filter="{filterModel,filterCallback}"> <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="`Search by name - ${filterModel.matchMode}`"/> </template> </Column> <Column header="Country" filterField="country.name" :filterMatchModeOptions="matchModeOptions"> <template #body="{data}"> <img src="../../assets/images/flag_placeholder.png" :class="\'flag flag-\' + data.country.code" width="30" /> <span class="image-text">{{data.country.name}}</span> </template> <template #filter="{filterModel,filterCallback}"> <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="`Search by country - ${filterModel.matchMode}`" /> </template> </Column> </DataTable> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import FilterMatchMode from '../../../src/components/api/FilterMatchMode'; import FilterService from '../../../src/components/api/FilterService'; import CustomerService from '../../service/CustomerService'; const YOUR_FILTER = 'YOUR FILTER'; export default { data() { return { customers: null, filters: { 'name': {value: null, matchMode: YOUR_FILTER}, 'country.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH} }, matchModeOptions: [ {label: 'Your Equals', value: YOUR_FILTER}, {label: 'Starts With', value: FilterMatchMode.STARTS_WITH} ], loading: true } }, created() { this.customerService = new CustomerService(); }, mounted() { this.customerService.getCustomersLarge().then(data => { this.customers = data; this.loading = false; }); FilterService.register(YOUR_FILTER, (value, filter) => { if (filter === undefined || filter === null || filter.trim() === '') { return true; } if (value === undefined || value === null) { return false; } return value.toString() === filter.toString(); }); } } ")])],1)],1)],1)}),[],!1,null,null).exports,n="YOUR FILTER";e("default",l({data:function(){return{customers:null,filters:{name:{value:null,matchMode:r.STARTS_WITH},"country.name":{value:null,matchMode:r.STARTS_WITH}},matchModeOptions:[{label:"Your Equals",value:n},{label:"Starts With",value:r.STARTS_WITH}],loading:!0}},created:function(){this.customerService=new i},mounted:function(){var e=this;this.customerService.getCustomersLarge().then((function(t){e.customers=t,e.loading=!1})),a.register(n,(function(e,t){return null==t||""===t.trim()||null!=e&&e.toString()===t.toString()}))},components:{FilterServiceDoc:t}},(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"content-section introduction"},[e._m(0),t("AppInputStyleSwitch")],1),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Table Integration")]),t("p",[e._v(" A custom equals filter that checks for exact case sensitive value is registered and defined as a match mode of a column filter. ")]),t("DataTable",{attrs:{value:e.customers,paginator:!0,rows:10,responsiveLayout:"scroll",dataKey:"id",filters:e.filters,filterDisplay:"row",loading:e.loading},on:{"update:filters":function(t){e.filters=t}},scopedSlots:e._u([{key:"empty",fn:function(){return[e._v(" No customers found. ")]},proxy:!0},{key:"loading",fn:function(){return[e._v(" Loading customers data. Please wait. ")]},proxy:!0}])},[t("Column",{attrs:{field:"name",header:"Name",filterMatchModeOptions:e.matchModeOptions},scopedSlots:e._u([{key:"body",fn:function(t){var l=t.data;return[e._v(" "+e._s(l.name)+" ")]}},{key:"filter",fn:function(l){var r=l.filterModel,a=l.filterCallback;return[t("InputText",{staticClass:"p-column-filter",attrs:{type:"text",placeholder:"Search by name - ".concat(r.matchMode)},on:{input:function(e){return a()}},model:{value:r.value,callback:function(t){e.$set(r,"value",t)},expression:"filterModel.value"}})]}}])}),t("Column",{attrs:{header:"Country",filterField:"country.name",filterMatchModeOptions:e.matchModeOptions},scopedSlots:e._u([{key:"body",fn:function(l){var r=l.data;return[t("img",{class:"flag flag-"+r.country.code,attrs:{src:o,width:"30"}}),t("span",{staticClass:"image-text"},[e._v(e._s(r.country.name))])]}},{key:"filter",fn:function(l){var r=l.filterModel,a=l.filterCallback;return[t("InputText",{staticClass:"p-column-filter",attrs:{type:"text",placeholder:"Search by country - ".concat(r.matchMode)},on:{input:function(e){return a()}},model:{value:r.value,callback:function(t){e.$set(r,"value",t)},expression:"filterModel.value"}})]}}])})],1)],1)]),t("FilterServiceDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"feature-intro"},[t("h1",[e._v("FilterService")]),t("p",[e._v("FilterService is a helper utility to filter collections against constraints.")])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=FilterServiceDemo-legacy-bjRKQ_nj.js.map
