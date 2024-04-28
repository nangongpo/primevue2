!function(){function e(e,a){var l="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!l){if(Array.isArray(e)||(l=function(e,a){if(!e)return;if("string"==typeof e)return t(e,a);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return t(e,a)}(e))||a&&e&&"number"==typeof e.length){l&&(e=l);var s=0,o=function(){};return{s:o,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n=!0,i=!1;return{s:function(){l=l.call(e)},n:function(){var e=l.next();return n=e.done,e},e:function(e){i=!0,r=e},f:function(){try{n||null==l.return||l.return()}finally{if(i)throw r}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}System.register(["./CustomerService-legacy-CHx26-bK.js","./flag_placeholder-legacy-BDbXk8CQ.js","./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(t,a){"use strict";var l,s,o;return{setters:[function(e){l=e.C},function(e){s=e._},function(e){o=e.n},null,null,null],execute:function(){var a=document.createElement("style");a.textContent="[data-v-436fc1c3] .p-datatable-frozen-tbody,[data-v-436fc1c3] .p-datatable-scrollable .p-frozen-column{font-weight:700}\n",document.head.appendChild(a);t("default",o({data:function(){return{customers1:null,customers2:null,customersGrouped:null,lockedCustomers:[],unlockedCustomers:null,loading:!1,dialogVisible:!1,balanceFrozen:!1}},customerService:null,created:function(){this.customerService=new l},mounted:function(){var e=this;this.loading=!0,this.customerService.getCustomersLarge().then((function(t){e.customers1=t,e.loading=!1})),this.customerService.getCustomersMedium().then((function(t){return e.customers2=t})),this.customerService.getCustomersMedium().then((function(t){return e.unlockedCustomers=t})),this.customerService.getCustomersMedium().then((function(t){return e.customersGrouped=t})),this.lockedCustomers=[{id:5135,name:"Geraldine Bisset",country:{name:"France",code:"fr"},company:"Bisset Group",status:"proposal",date:"2019-05-05",activity:0,representative:{name:"Amy Elsner",image:"amyelsner.png"}}]},methods:{openDialog:function(){this.dialogVisible=!0},closeDialog:function(){this.dialogVisible=!1},formatCurrency:function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})},calculateCustomerTotal:function(t){var a=0;if(this.customersGrouped){var l,s=e(this.customersGrouped);try{for(s.s();!(l=s.n()).done;){l.value.representative.name===t&&a++}}catch(o){s.e(o)}finally{s.f()}}return a},toggleLock:function(e,t,a){t?(this.lockedCustomers=this.lockedCustomers.filter((function(e,t){return t!==a})),this.unlockedCustomers.push(e)):(this.unlockedCustomers=this.unlockedCustomers.filter((function(e,t){return t!==a})),this.lockedCustomers.push(e)),this.unlockedCustomers.sort((function(e,t){return e.id<t.id?-1:1}))}}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Vertical")]),t("DataTable",{attrs:{value:e.customers1,scrollable:!0,scrollHeight:"400px",loading:e.loading}},[t("Column",{attrs:{field:"name",header:"Name",styles:{"min-width":"200px"}}}),t("Column",{attrs:{field:"country.name",header:"Country",styles:{"min-width":"200px"}}}),t("Column",{attrs:{field:"representative.name",header:"Representative",styles:{"min-width":"200px"}}}),t("Column",{attrs:{field:"status",header:"Status",styles:{"min-width":"200px"}}})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Flexible Scroll")]),t("p",[e._v("Flex scroll feature makes the scrollable viewport section dynamic insteaf of a fixed value so that it can grow or shrink relative to the parent size of the table. Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.")]),t("Button",{attrs:{label:"Show",icon:"pi pi-external-link"},on:{click:e.openDialog}})],1),t("Dialog",{style:{width:"75vw"},attrs:{header:"Flex Scroll",visible:e.dialogVisible,maximizable:!0,modal:!0,contentStyle:{height:"300px"}},on:{"update:visible":function(t){e.dialogVisible=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[t("Button",{attrs:{label:"Ok",icon:"pi pi-check"},on:{click:e.closeDialog}})]},proxy:!0}])},[t("DataTable",{attrs:{value:e.customers1,scrollable:!0,scrollHeight:"flex"}},[t("Column",{attrs:{field:"name",header:"Name",styles:{"min-width":"200px"}}}),t("Column",{attrs:{field:"country.name",header:"Country",styles:{"min-width":"200px"}}}),t("Column",{attrs:{field:"representative.name",header:"Representative",styles:{"min-width":"200px"}}}),t("Column",{attrs:{field:"status",header:"Status",styles:{"min-width":"200px"}}})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Horizontal and Vertical with Footer")]),t("DataTable",{attrs:{value:e.customers2,scrollable:!0,scrollHeight:"400px",loading:e.loading,scrollDirection:"both"}},[t("Column",{attrs:{field:"id",header:"Id",footer:"Id",styles:{"flex-grow":"1","flex-basis":"100px"}}}),t("Column",{attrs:{field:"name",header:"Name",footer:"Name",styles:{"flex-grow":"1","flex-basis":"200px"}}}),t("Column",{attrs:{field:"country.name",header:"Country",footer:"Country",styles:{"flex-grow":"1","flex-basis":"200px"}}}),t("Column",{attrs:{field:"date",header:"Date",footer:"Date",styles:{"flex-grow":"1","flex-basis":"200px"}}}),t("Column",{attrs:{field:"balance",header:"Balance",footer:"Balance",styles:{"flex-grow":"1","flex-basis":"200px"}},scopedSlots:e._u([{key:"body",fn:function(t){var a=t.data;return[e._v(" "+e._s(e.formatCurrency(a.balance))+" ")]}}])}),t("Column",{attrs:{field:"company",header:"Company",footer:"Company",styles:{"flex-grow":"1","flex-basis":"200px"}}}),t("Column",{attrs:{field:"status",header:"Status",footer:"Status",styles:{"flex-grow":"1","flex-basis":"200px"}}}),t("Column",{attrs:{field:"activity",header:"Activity",footer:"Activity",styles:{"flex-grow":"1","flex-basis":"200px"}}}),t("Column",{attrs:{field:"representative.name",header:"Representative",footer:"Representative",styles:{"flex-grow":"1","flex-basis":"200px"}}})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Frozen Rows")]),t("DataTable",{attrs:{value:e.unlockedCustomers,frozenValue:e.lockedCustomers,scrollable:!0,scrollHeight:"400px",loading:e.loading}},[t("Column",{attrs:{field:"name",header:"Name",styles:{"min-width":"200px"}}}),t("Column",{attrs:{field:"country.name",header:"Country",styles:{"min-width":"200px"}}}),t("Column",{attrs:{field:"representative.name",header:"Representative",styles:{"min-width":"200px"}}}),t("Column",{attrs:{field:"status",header:"Status",styles:{"min-width":"200px"}}}),t("Column",{attrs:{styles:{flex:"0 0 4rem"}},scopedSlots:e._u([{key:"body",fn:function(a){var l=a.data,s=a.frozenRow,o=a.index;return[t("Button",{staticClass:"p-button-sm p-button-text",attrs:{type:"button",icon:s?"pi pi-lock-open":"pi pi-lock",disabled:!s&&e.lockedCustomers.length>=2},on:{click:function(t){return e.toggleLock(l,s,o)}}})]}}])})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Frozen Columns")]),t("ToggleButton",{staticStyle:{"flex-grow":"1","flex-basis":"12rem"},attrs:{onIcon:"pi pi-lock",offIcon:"pi pi-lock-open",onLabel:"Unfreeze Balance",offLabel:"Freeze Balance"},model:{value:e.balanceFrozen,callback:function(t){e.balanceFrozen=t},expression:"balanceFrozen"}}),t("DataTable",{staticClass:"mt-3",attrs:{value:e.customers2,scrollable:!0,scrollHeight:"400px",loading:e.loading,scrollDirection:"both"}},[t("Column",{attrs:{field:"name",header:"Name",styles:{"flex-grow":"1","flex-basis":"160px"},frozen:""}}),t("Column",{attrs:{field:"id",header:"Id",styles:{"flex-grow":"1","flex-basis":"100px"}}}),t("Column",{attrs:{field:"name",header:"Name",styles:{"flex-grow":"1","flex-basis":"160px"}}}),t("Column",{attrs:{field:"country.name",header:"Country",styles:{"flex-grow":"1","flex-basis":"200px"}}}),t("Column",{attrs:{field:"date",header:"Date",styles:{"flex-grow":"1","flex-basis":"200px"}}}),t("Column",{attrs:{field:"company",header:"Company",styles:{"flex-grow":"1","flex-basis":"200px"}}}),t("Column",{attrs:{field:"status",header:"Status",styles:{"flex-grow":"1","flex-basis":"200px"}}}),t("Column",{attrs:{field:"activity",header:"Activity",styles:{"flex-grow":"1","flex-basis":"200px"}}}),t("Column",{attrs:{field:"representative.name",header:"Representative",styles:{"flex-grow":"1","flex-basis":"200px"}}}),t("Column",{attrs:{field:"balance",header:"Balance",styles:{"flex-grow":"1","flex-basis":"200px"},alignFrozen:"right",frozen:e.balanceFrozen},scopedSlots:e._u([{key:"body",fn:function(a){var l=a.data;return[t("span",{staticClass:"font-bold"},[e._v(e._s(e.formatCurrency(l.balance)))])]}}])})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Subheader Grouping")]),t("DataTable",{attrs:{value:e.customersGrouped,rowGroupMode:"subheader",groupRowsBy:"representative.name",sortMode:"single",sortField:"representative.name",sortOrder:1,scrollable:"",scrollHeight:"400px"},scopedSlots:e._u([{key:"groupheader",fn:function(a){return[t("img",{staticStyle:{"vertical-align":"middle"},attrs:{alt:a.data.representative.name,src:e.$publicUrl("demo/images/avatar/"+a.data.representative.image),width:"32"}}),t("span",{staticClass:"image-text"},[e._v(e._s(a.data.representative.name))])]}},{key:"groupfooter",fn:function(a){return[t("td",{staticClass:"font-bold pr-6",staticStyle:{"text-align":"right"}},[e._v("Total Customers: "+e._s(e.calculateCustomerTotal(a.data.representative.name)))])]}}])},[t("Column",{attrs:{field:"representative.name",header:"Representative"}}),t("Column",{attrs:{field:"name",header:"Name",styles:{"min-width":"200px"}}}),t("Column",{attrs:{field:"country",header:"Country",styles:{"min-width":"200px"}},scopedSlots:e._u([{key:"body",fn:function(a){return[t("img",{class:"flag flag-"+a.data.country.code,attrs:{src:s,width:"30"}}),t("span",{staticClass:"image-text"},[e._v(e._s(a.data.country.name))])]}}])}),t("Column",{attrs:{field:"company",header:"Company",styles:{"min-width":"200px"}}}),t("Column",{attrs:{field:"status",header:"Status",styles:{"min-width":"200px"}},scopedSlots:e._u([{key:"body",fn:function(a){return[t("span",{class:"customer-badge status-"+a.data.status},[e._v(e._s(a.data.status))])]}}])}),t("Column",{attrs:{field:"date",header:"Date",styles:{"min-width":"200px"}}})],1)],1)],1),t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("CodeHighlight",[[e._v(' <div class="card"> <h5>Vertical</h5> <DataTable :value="customers1" :scrollable="true" scrollHeight="400px" :loading="loading"> <Column field="name" header="Name" :styles="{\'min-width\':\'200px\'}"></Column> <Column field="country.name" header="Country" :styles="{\'min-width\':\'200px\'}"></Column> <Column field="representative.name" header="Representative" :styles="{\'min-width\':\'200px\'}"></Column> <Column field="status" header="Status" :styles="{\'min-width\':\'200px\'}"></Column> </DataTable> </div> <div class="card"> <h5>Flexible Scroll</h5> <Button label="Show" icon="pi pi-external-link" @click="openDialog" /> </div> <Dialog header="Flex Scroll" :visible.sync="dialogVisible" :style="{width: \'75vw\'}" :maximizable="true" :modal="true" :contentStyle="{height: \'300px\'}"> <DataTable :value="customers1" :scrollable="true" scrollHeight="flex"> <Column field="name" header="Name" :styles="{\'min-width\':\'200px\'}"></Column> <Column field="country.name" header="Country" :styles="{\'min-width\':\'200px\'}"></Column> <Column field="representative.name" header="Representative" :styles="{\'min-width\':\'200px\'}"></Column> <Column field="status" header="Status" :styles="{\'min-width\':\'200px\'}"></Column> </DataTable> <template #footer> <Button label="Ok" icon="pi pi-check" @click="closeDialog" /> </template> </Dialog> <div class="card"> <h5>Horizontal and Vertical with Footer</h5> <DataTable :value="customers2" :scrollable="true" scrollHeight="400px" :loading="loading" scrollDirection="both"> <Column field="id" header="Id" footer="Id" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'100px\'}"></Column> <Column field="name" header="Name" footer="Name" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'200px\'}"></Column> <Column field="country.name" header="Country" footer="Country" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'200px\'}"></Column> <Column field="date" header="Date" footer="Date" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'200px\'}"></Column> <Column field="balance" header="Balance" footer="Balance" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'200px\'}"> <template #body="{data}"> {{formatCurrency(data.balance)}} </template> </Column> <Column field="company" header="Company" footer="Company" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'200px\'}"></Column> <Column field="status" header="Status" footer="Status" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'200px\'}"></Column> <Column field="activity" header="Activity" footer="Activity" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'200px\'}"></Column> <Column field="representative.name" header="Representative" footer="Representative" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'200px\'}"></Column> </DataTable> </div> <div class="card"> <h5>Frozen Rows</h5> <DataTable :value="unlockedCustomers" :frozenValue="lockedCustomers" :scrollable="true" scrollHeight="400px" :loading="loading"> <Column field="name" header="Name" :styles="{\'min-width\':\'200px\'}"></Column> <Column field="country.name" header="Country" :styles="{\'min-width\':\'200px\'}"></Column> <Column field="representative.name" header="Representative" :styles="{\'min-width\':\'200px\'}"></Column> <Column field="status" header="Status" :styles="{\'min-width\':\'200px\'}"></Column> <Column :styles="{\'flex\': \'0 0 4rem\'}"> <template #body="{data,frozenRow,index}"> <Button type="button" :icon="frozenRow ? \'pi pi-lock-open\' : \'pi pi-lock\'" :disabled="frozenRow ? false : lockedCustomers.length >= 2" class="p-button-sm p-button-text" @click="toggleLock(data,frozenRow,index)"/> </template> </Column> </DataTable> </div> <div class="card"> <h5>Frozen Columns</h5> <ToggleButton v-model="balanceFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Balance" offLabel="Freeze Balance" style="flex-grow:1; flex-basis: 12rem" /> <DataTable :value="customers2" :scrollable="true" scrollHeight="400px" :loading="loading" scrollDirection="both" class="mt-3"> <Column field="name" header="Name" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'160px\'}" frozen></Column> <Column field="id" header="Id" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'100px\'}"></Column> <Column field="name" header="Name" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'160px\'}"></Column> <Column field="country.name" header="Country" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'200px\'}"></Column> <Column field="date" header="Date" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'200px\'}"></Column> <Column field="company" header="Company" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'200px\'}"></Column> <Column field="status" header="Status" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'200px\'}"></Column> <Column field="activity" header="Activity" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'200px\'}"></Column> <Column field="representative.name" header="Representative" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'200px\'}"></Column> <Column field="balance" header="Balance" :styles="{\'flex-grow\':\'1\', \'flex-basis\':\'200px\'}" alignFrozen="right" :frozen="balanceFrozen"> <template #body="{data}"> <span class="font-bold">{{formatCurrency(data.balance)}}</span> </template> </Column> </DataTable> </div> <div class="card"> <h5>Subheader Grouping</h5> <DataTable :value="customersGrouped" rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px"> <Column field="representative.name" header="Representative"></Column> <Column field="name" header="Name" :styles="{\'min-width\':\'200px\'}"></Column> <Column field="country" header="Country" :styles="{\'min-width\':\'200px\'}"> <template #body="slotProps"> <img src="../../assets/images/flag_placeholder.png" :class="\'flag flag-\' + slotProps.data.country.code" width="30" /> <span class="image-text">{{slotProps.data.country.name}}</span> </template> </Column> <Column field="company" header="Company" :styles="{\'min-width\':\'200px\'}"></Column> <Column field="status" header="Status" :styles="{\'min-width\':\'200px\'}"> <template #body="slotProps"> <span :class="\'customer-badge status-\' + slotProps.data.status">{{slotProps.data.status}}</span> </template> </Column> <Column field="date" header="Date" :styles="{\'min-width\':\'200px\'}"></Column> <template #groupheader="slotProps"> <img :alt="slotProps.data.representative.name" :src="$publicUrl(\'demo/images/avatar/\' + slotProps.data.representative.image)" width="32" style="vertical-align: middle" /> <span class="image-text">{{slotProps.data.representative.name}}</span> </template> <template #groupfooter="slotProps"> <td style="text-align: right" class="font-bold pr-6">Total Customers: {{calculateCustomerTotal(slotProps.data.representative.name)}}</td> </template> </DataTable> </div> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(' import CustomerService from \'../../service/CustomerService\'; export default { data() { return { customers1: null, customers2: null, customersGrouped: null, lockedCustomers: [], unlockedCustomers: null, loading: false, dialogVisible: false, balanceFrozen: false } }, customerService: null, created() { this.customerService = new CustomerService(); }, mounted() { this.loading = true; this.customerService.getCustomersLarge().then(data => { this.customers1 = data; this.loading = false; }); this.customerService.getCustomersMedium().then(data => this.customers2 = data); this.customerService.getCustomersMedium().then(data => this.unlockedCustomers = data); this.customerService.getCustomersMedium().then(data => this.customersGrouped = data); this.lockedCustomers = [ { id: 5135, name: "Geraldine Bisset", country: { name: "France", code: "fr" }, company: "Bisset Group", status: "proposal", date: "2019-05-05", activity: 0, representative: { name: "Amy Elsner", image: "amyelsner.png" } } ]; }, methods: { openDialog() { this.dialogVisible = true; }, closeDialog() { this.dialogVisible = false; }, formatCurrency(value) { return value.toLocaleString(\'en-US\', {style: \'currency\', currency: \'USD\'}); }, calculateCustomerTotal(name) { let total = 0; if (this.customersGrouped) { for (let customer of this.customersGrouped) { if (customer.representative.name === name) { total++; } } } return total; }, toggleLock(data, frozen, index) { if (frozen) { this.lockedCustomers = this.lockedCustomers.filter((c, i) => i !== index); this.unlockedCustomers.push(data); } else { this.unlockedCustomers = this.unlockedCustomers.filter((c, i) => i !== index); this.lockedCustomers.push(data); } this.unlockedCustomers.sort((val1, val2) => { return val1.id < val2.id ? -1 : 1; }); } } } ')]),t("CodeHighlight",{attrs:{lang:"css"}},[e._v(" :deep(.p-datatable-frozen-tbody) { font-weight: bold; } :deep(.p-datatable-scrollable .p-frozen-column) { font-weight: bold; } ")])],1)],1)],1)])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("DataTable "),t("span",[e._v("Scroll")])]),t("p",[e._v("Data scrolling is available horizontally, vertically or both with support for frozen rows and columns.")])])])}],!1,null,"436fc1c3").exports)}}}))}();
//# sourceMappingURL=DataTableScrollDemo-legacy-Nbiwl3ly.js.map
