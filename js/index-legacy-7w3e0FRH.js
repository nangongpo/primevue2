System.register(["./app.component-legacy-cLUjg6K2.js","./CustomerService-legacy-CHx26-bK.js","./flag_placeholder-legacy-BDbXk8CQ.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(e,t){"use strict";var r,l,a,i,n;return{setters:[function(e){r=e.n,l=e.aJ,a=e.aM},function(e){i=e.C},function(e){n=e._},null,null,null,null],execute:function(){var t=r({name:"Documentation",data:function(){return{importCode:{basic:"\nimport {FilterService} from 'primevue2/api';\n        "},baseCode:{basic:"\nconst value = 'PrimeVue';\n\nFilterService.filters.equals(value, 'Vue');                           //false\nFilterService.filters.equals(value, 8);                               //false\nFilterService.filters.equals(value, new Date());                      //false\nFilterService.filters.contains(value, 'Vue');                         //true\nFilterService.filters.startsWith(value, 'Vue');                       //false\nFilterService.filters.endsWith(value, 'Vue');                         //true\nFilterService.filters.lt(10, 20);                                     //true\nFilterService.filters.gt(50, 20);                                     //true\nFilterService.filters.in(value, ['PrimeFaces', 'PrimeVue']);          //true\n        "},customConstraintCode:{basic:"\nFilterService.register('isPrimeNumber', (value, filter): boolean => {\n    if (filter === undefined || filter === null || filter.trim() === '') {\n        return true;\n    }\n\n    if (value === undefined || value === null) {\n        return false;\n    }\n\n    return value.toString() === filter.toString();\n});\n\nFilterService.filters['isPrimeNumber'](3);                      //true\nFilterService.filters['isPrimeNumber'](5);                      //true\nFilterService.filters['isPrimeNumber'](568985673);              //false\n        "}}}},(function(){var e=this,t=e._self._c;return t("div",[t("h5",[e._v("Import")]),t("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),t("h5",[e._v("Getting Started")]),e._m(0),t("DocSectionCode",{attrs:{code:e.baseCode,importCode:""}}),t("h5",[e._v("Custom Constraint")]),e._m(1),t("DocSectionCode",{attrs:{code:e.customConstraintCode,importCode:""}}),t("h5",[e._v("Built-in Constraints")]),e._m(2),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1)}),[function(){var e=this,t=e._self._c;return t("p",[e._v("Filters are accessed with "),t("i",[e._v("FilterService.filters")]),e._v(".")])},function(){var e=this,t=e._self._c;return t("p",[e._v("FilterService can be extended by adding new constraints using the "),t("span",[e._v("register")]),e._v(" function.")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("startsWith")]),t("td",[e._v(" value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering ")]),t("td",[e._v("Whether the value starts with the filter value")])]),t("tr",[t("td",[e._v("contains")]),t("td",[e._v(" value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering ")]),t("td",[e._v("Whether the value contains the filter value")])]),t("tr",[t("td",[e._v("endsWith")]),t("td",[e._v(" value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering ")]),t("td",[e._v("Whether the value ends with the filter value")])]),t("tr",[t("td",[e._v("equals")]),t("td",[e._v(" value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering ")]),t("td",[e._v("Whether the value equals the filter value")])]),t("tr",[t("td",[e._v("notEquals")]),t("td",[e._v(" value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering ")]),t("td",[e._v("Whether the value does not equal the filter value")])]),t("tr",[t("td",[e._v("in")]),t("td",[e._v(" value: Value to filter"),t("br"),e._v(" filter[]: An array of filter values"),t("br"),e._v(" filterLocale: Locale to use in filtering ")]),t("td",[e._v("Whether the value contains the filter value")])]),t("tr",[t("td",[e._v("lt")]),t("td",[e._v(" value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering ")]),t("td",[e._v("Whether the value is less than the filter value")])]),t("tr",[t("td",[e._v("lte")]),t("td",[e._v(" value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering ")]),t("td",[e._v("Whether the value is less than or equals to the filter value")])]),t("tr",[t("td",[e._v("gt")]),t("td",[e._v(" value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering ")]),t("td",[e._v("Whether the value is greater than the filter value")])]),t("tr",[t("td",[e._v("gte")]),t("td",[e._v(" value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering ")]),t("td",[e._v("Whether the value is greater than or equals to the filter value")])]),t("tr",[t("td",[e._v("is")]),t("td",[e._v(" value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering ")]),t("td",[e._v("Whether the value equals the filter value, alias to equals")])]),t("tr",[t("td",[e._v("isNot")]),t("td",[e._v(" value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering ")]),t("td",[e._v("Whether the value does not equal the filter value, alias to notEquals.")])]),t("tr",[t("td",[e._v("before")]),t("td",[e._v(" value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering ")]),t("td",[e._v("Whether the date value is before the filter date.")])]),t("tr",[t("td",[e._v("after")]),t("td",[e._v(" value: Value to filter"),t("br"),e._v(" filter: Filter value"),t("br"),e._v(" filterLocale: Locale to use in filtering ")]),t("td",[e._v("Whether the date value is after the filter date.")])])])]),t("h5",[e._v("FilterService API")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("filter")]),t("td",[e._v(" value[]: An array of values to filter"),t("br"),e._v(" fields[]: An array of properties in the value object"),t("br"),e._v(" filterValue: Filter value"),t("br"),e._v(" filterMatchMode: Constraint"),t("br"),e._v(" filterLocale: Locale to use in filtering ")]),t("td",[e._v("Whether the property values of the given value collection matches the filter.")])]),t("tr",[t("td",[e._v("filters")]),t("td",[e._v("-")]),t("td",[e._v("Property to access constraints collection.")])]),t("tr",[t("td",[e._v("register")]),t("td",[e._v(" name: string "),t("br"),e._v(" fn: Filter callback ")]),t("td",[e._v("Registers a new constraint in filters.")])])])])])])}],!1,null,null).exports,o=r({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<DataTable :value="customers" :paginator="true" :rows="10" responsiveLayout="scroll"\n    dataKey="id" :filters.sync="filters" filterDisplay="row" :loading="loading">\n    <template #empty>\n        No customers found.\n    </template>\n    <template #loading>\n        Loading customers data. Please wait.\n    </template>\n    <Column field="name" header="Name" :filterMatchModeOptions="matchModeOptions">\n        <template #body="{data}">\n            {{data.name}}\n        </template>\n        <template #filter="{filterModel,filterCallback}">\n            <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="`Search by name - ${filterModel.matchMode}`"/>\n        </template>\n    </Column>\n    <Column header="Country" filterField="country.name" :filterMatchModeOptions="matchModeOptions">\n        <template #body="{data}">\n            <img src="../../assets/images/flag_placeholder.png" :class="\'flag flag-\' + data.country.code" width="30" />\n            <span class="image-text">{{data.country.name}}</span>\n        </template>\n        <template #filter="{filterModel,filterCallback}">\n            <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="`Search by country - ${filterModel.matchMode}`" />\n        </template>\n    </Column>\n</DataTable>\n        '},sourceCode2:{basic:"\nimport FilterMatchMode from '../../../src/components/api/FilterMatchMode';\nimport FilterService from '../../../src/components/api/FilterService';\nimport CustomerService from '../../service/CustomerService';\n\nconst YOUR_FILTER = 'YOUR FILTER';\n\nexport default {\n    data() {\n        return {\n            customers: null,\n            filters: {\n                'name': {value: null, matchMode: YOUR_FILTER},\n                'country.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH}\n            },\n            matchModeOptions: [\n                {label: 'Your Equals', value: YOUR_FILTER},\n                {label: 'Starts With', value: FilterMatchMode.STARTS_WITH}\n            ],\n            loading: true\n        }\n    },\n    created() {\n        this.customerService = new CustomerService();\n    },\n    mounted() {\n        this.customerService.getCustomersLarge().then(data => {\n            this.customers = data;\n            this.loading = false;\n        });\n\n        FilterService.register(YOUR_FILTER, (value, filter) => {\n            if (filter === undefined || filter === null || filter.trim() === '') {\n                return true;\n            }\n\n            if (value === undefined || value === null) {\n                return false;\n            }\n\n            return value.toString() === filter.toString();\n        });\n    }\n}\n        "}}}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("DocSectionCode",{attrs:{code:e.sourceCode1}}),t("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)}),[function(){var e=this._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/filterservice",target:"_blank",rel:"noopener noreferrer"}},[e("span",[this._v("View on GitHub")])])}],!1,null,null).exports,s=r({components:{Documentation:t,SourceCode:o}},(function(){var e=this._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("Documentation")],1),e("TabPanel",{attrs:{header:"Source"}},[e("SourceCode")],1)],1)],1)}),[],!1,null,null).exports,u="YOUR FILTER";e("default",r({data:function(){return{customers:null,filters:{name:{value:null,matchMode:l.STARTS_WITH},"country.name":{value:null,matchMode:l.STARTS_WITH}},matchModeOptions:[{label:"Your Equals",value:u},{label:"Starts With",value:l.STARTS_WITH}],loading:!0}},created:function(){this.customerService=new i},mounted:function(){var e=this;this.customerService.getCustomersLarge().then((function(t){e.customers=t,e.loading=!1})),a.register(u,(function(e,t){return null==t||""===t.trim()||null!=e&&e.toString()===t.toString()}))},components:{FilterServiceDoc:s}},(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"content-section introduction"},[e._m(0),t("AppInputStyleSwitch")],1),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Table Integration")]),t("p",[e._v(" A custom equals filter that checks for exact case sensitive value is registered and defined as a match mode of a column filter. ")]),t("DataTable",{attrs:{value:e.customers,paginator:!0,rows:10,responsiveLayout:"scroll",dataKey:"id",filters:e.filters,filterDisplay:"row",loading:e.loading},on:{"update:filters":function(t){e.filters=t}},scopedSlots:e._u([{key:"empty",fn:function(){return[e._v(" No customers found. ")]},proxy:!0},{key:"loading",fn:function(){return[e._v(" Loading customers data. Please wait. ")]},proxy:!0}])},[t("Column",{attrs:{field:"name",header:"Name",filterMatchModeOptions:e.matchModeOptions},scopedSlots:e._u([{key:"body",fn:function(t){var r=t.data;return[e._v(" "+e._s(r.name)+" ")]}},{key:"filter",fn:function(r){var l=r.filterModel,a=r.filterCallback;return[t("InputText",{staticClass:"p-column-filter",attrs:{type:"text",placeholder:"Search by name - ".concat(l.matchMode)},on:{input:function(e){return a()}},model:{value:l.value,callback:function(t){e.$set(l,"value",t)},expression:"filterModel.value"}})]}}])}),t("Column",{attrs:{header:"Country",filterField:"country.name",filterMatchModeOptions:e.matchModeOptions},scopedSlots:e._u([{key:"body",fn:function(r){var l=r.data;return[t("img",{class:"flag flag-"+l.country.code,attrs:{src:n,width:"30"}}),t("span",{staticClass:"image-text"},[e._v(e._s(l.country.name))])]}},{key:"filter",fn:function(r){var l=r.filterModel,a=r.filterCallback;return[t("InputText",{staticClass:"p-column-filter",attrs:{type:"text",placeholder:"Search by country - ".concat(l.matchMode)},on:{input:function(e){return a()}},model:{value:l.value,callback:function(t){e.$set(l,"value",t)},expression:"filterModel.value"}})]}}])})],1)],1)]),t("FilterServiceDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"feature-intro"},[t("h1",[e._v("FilterService")]),t("p",[e._v("FilterService is a helper utility to filter collections against constraints.")])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=index-legacy-7w3e0FRH.js.map
