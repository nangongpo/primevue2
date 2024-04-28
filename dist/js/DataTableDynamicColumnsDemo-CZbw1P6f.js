import{P as o}from"./ProductService-B_eIBIF9.js";import{n as i}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const n={data(){return{columns:null,products:null}},productService:null,created(){this.productService=new o,this.columns=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}]},mounted(){this.productService.getProductsSmall().then(a=>this.products=a)}};var c=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("DataTable",{attrs:{value:e.products,responsiveLayout:"scroll"}},e._l(e.columns,function(r){return t("Column",{key:r.field,attrs:{field:r.field,header:r.header}})}),1)],1)]),t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("CodeHighlight",[[e._v(' <DataTable :value="products" responsiveLayout="scroll"> <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column> </DataTable> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import ProductService from '../../service/ProductService'; export default { data() { return { columns: null, products: null } }, productService: null, created() { this.productService = new ProductService(); this.columns = [ {field: 'code', header: 'Code'}, {field: 'name', header: 'Name'}, {field: 'category', header: 'Category'}, {field: 'quantity', header: 'Quantity'} ]; }, mounted() { this.productService.getProductsSmall().then(data => this.products = data); } } ")])],1)],1)],1)])},l=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[a._v("DataTable "),e("span",[a._v("Dynamic Columns")])]),e("p",[a._v("Columns can be defined dynamically using the v-for directive.")])])])}],d=i(n,c,l,!1,null,null);const h=d.exports;export{h as default};
//# sourceMappingURL=DataTableDynamicColumnsDemo-CZbw1P6f.js.map
