import{n as o}from"./app.component-BAbvz7X_.js";import{P as n}from"./ProductService-B_eIBIF9.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const c={data(){return{baseCode:{basic:'\n<DataTable :value="products" responsiveLayout="scroll">\n    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>\n</DataTable>\n        '},baseCode2:{basic:"\nimport ProductService from '../../service/ProductService';\n\nexport default {\n    data() {\n        return {\n            columns: null,\n            products: null\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n\n        this.columns = [\n            {field: 'code', header: 'Code'},\n            {field: 'name', header: 'Name'},\n            {field: 'category', header: 'Category'},\n            {field: 'quantity', header: 'Quantity'}\n        ];\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data);\n    }\n}\n        "}}}};var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("DocSectionCode",{attrs:{code:e.baseCode}}),t("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}})],1)],1)],1)},s=[],d=o(c,i,s,!1,null,null);const l=d.exports,u={components:{DataTableTDynamicColumnsDoc:l},data(){return{columns:null,products:null}},productService:null,created(){this.productService=new n,this.columns=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}]},mounted(){this.productService.getProductsSmall().then(a=>this.products=a)}};var m=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("DataTable",{attrs:{value:e.products,responsiveLayout:"scroll"}},e._l(e.columns,function(r){return t("Column",{key:r.field,attrs:{field:r.field,header:r.header}})}),1)],1)]),t("DataTableTDynamicColumnsDoc")],1)},f=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[a._v("DataTable "),e("span",[a._v("Dynamic Columns")])]),e("p",[a._v("Columns can be defined dynamically using the v-for directive.")])])])}],v=o(u,m,f,!1,null,null);const S=v.exports;export{S as default};
//# sourceMappingURL=DynamicColumns-DwPRcTe_.js.map