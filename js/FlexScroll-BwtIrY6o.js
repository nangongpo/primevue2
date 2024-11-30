import{n as a}from"./app.component-CxwrbeA3.js";import{C as s}from"./CustomerService-4zeCbf_T.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const o={data(){return{baseCode:{basic:'\n<DataTable :value="customers" :scrollable="true" scrollHeight="flex">\n    <Column field="name" header="Name"></Column>\n    <Column field="country.name" header="Country"></Column>\n    <Column field="representative.name" header="Representative"></Column>\n    <Column field="status" header="Status"></Column>\n</DataTable>\n        '},baseCode2:{basic:"\nimport CustomerService from '../../service/CustomerService';\n\nexport default {\n    data() {\n        return {\n            customers: null\n        }\n    },\n    customerService: null,\n    created() {\n        this.customerService = new CustomerService();\n    },\n    mounted() {\n        this.customerService.getCustomersLarge().then(data => this.customers = data);\n    }\n}\n        "}}}};var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Source"}},[e("DocSectionCode",{attrs:{code:t.baseCode}}),e("DocSectionCode",{attrs:{code:t.baseCode2,importCode:""}})],1)],1)],1)},c=[],l=a(o,n,c,!1,null,null);const i=l.exports,u={components:{DataTableFlexScrollDoc:i},data(){return{customers:null}},customerService:null,created(){this.customerService=new s},mounted(){this.customerService.getCustomersLarge().then(r=>this.customers=r)}};var m=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card",staticStyle:{height:"calc(100vh - 143px)"}},[e("DataTable",{attrs:{value:t.customers,scrollable:!0,scrollHeight:"flex"}},[e("Column",{attrs:{field:"name",header:"Name"}}),e("Column",{attrs:{field:"country.name",header:"Country"}}),e("Column",{attrs:{field:"representative.name",header:"Representative"}}),e("Column",{attrs:{field:"status",header:"Status"}})],1)],1)]),e("DataTableFlexScrollDoc")],1)},d=[function(){var r=this,t=r._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[r._v("DataTable "),t("span",[r._v("Flex Scroll")])])])])}],v=a(u,m,d,!1,null,null);const b=v.exports;export{b as default};
//# sourceMappingURL=FlexScroll-BwtIrY6o.js.map
