System.register(["./app.component-legacy-7lS-4wLG.js","./CustomerService-legacy-CHx26-bK.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(e,t){"use strict";var n,a;return{setters:[function(e){n=e.n},function(e){a=e.C},null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent="/*$vite$:1*/",document.head.appendChild(t);var r=n({data:function(){return{baseCode:{basic:'\n<DataTable :value="customers" :paginator="true" :rows="10" responsiveLayout="scroll"\n    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"\n    :rowsPerPageOptions="[10,20,50]"\n    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">\n    <Column field="name" header="Name"></Column>\n    <Column field="country.name" header="Country"></Column>\n    <Column field="company" header="Company"></Column>\n    <Column field="representative.name" header="Representative"></Column>\n    <template #paginatorstart>\n        <Button type="button" icon="pi pi-refresh" class="p-button-text" />\n    </template>\n    <template #paginatorend>\n        <Button type="button" icon="pi pi-cloud" class="p-button-text" />\n    </template>\n</DataTable>\n        '},baseCode2:{basic:"\nimport CustomerService from '../../service/CustomerService';\n\nexport default {\n    data() {\n        return {\n            customers: null\n        }\n    },\n    customerService: null,\n    created() {\n        this.customerService = new CustomerService();\n    },\n    mounted() {\n        this.customerService.getCustomersLarge().then(data => this.customers = data);\n    }\n}\n        "}}}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("DocSectionCode",{attrs:{code:e.baseCode}}),t("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}})],1)],1)],1)}),[],!1,null,null).exports;e("default",n({components:{DataTablePaginatorDoc:r},data:function(){return{customers:null}},customerService:null,created:function(){this.customerService=new a},mounted:function(){var e=this;this.customerService.getCustomersLarge().then((function(t){return e.customers=t}))}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("DataTable",{attrs:{value:e.customers,paginator:!0,rows:10,responsiveLayout:"scroll",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"},scopedSlots:e._u([{key:"paginatorstart",fn:function(){return[t("Button",{staticClass:"p-button-text",attrs:{type:"button",icon:"pi pi-refresh"}})]},proxy:!0},{key:"paginatorend",fn:function(){return[t("Button",{staticClass:"p-button-text",attrs:{type:"button",icon:"pi pi-cloud"}})]},proxy:!0}])},[t("Column",{attrs:{field:"name",header:"Name"}}),t("Column",{attrs:{field:"country.name",header:"Country"}}),t("Column",{attrs:{field:"company",header:"Company"}}),t("Column",{attrs:{field:"representative.name",header:"Representative"}})],1)],1)]),t("DataTablePaginatorDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("DataTable "),t("span",[e._v("Paginator")])]),t("p",[e._v(" Pagination is enabled by setting paginator property to true and defining the rows attribute as the number of rows per page. ")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=Paginator-legacy-C8moEKCN.js.map
