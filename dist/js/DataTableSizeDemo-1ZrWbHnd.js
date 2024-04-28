import{P as r}from"./ProductService-B_eIBIF9.js";import{n as l}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const o={data(){return{products:null}},productService:null,created(){this.productService=new r},mounted(){this.productService.getProductsSmall().then(t=>this.products=t)}};var n=function(){var a=this,e=a._self._c;return e("div",[a._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("DataTable",{staticClass:"p-datatable-sm",attrs:{value:a.products,responsiveLayout:"scroll"},scopedSlots:a._u([{key:"header",fn:function(){return[a._v(" Small Table ")]},proxy:!0}])},[e("Column",{attrs:{field:"code",header:"Code"}}),e("Column",{attrs:{field:"name",header:"Name"}}),e("Column",{attrs:{field:"category",header:"Category"}}),e("Column",{attrs:{field:"quantity",header:"Quantity"}})],1)],1),e("div",{staticClass:"card"},[e("DataTable",{attrs:{value:a.products,responsiveLayout:"scroll"},scopedSlots:a._u([{key:"header",fn:function(){return[a._v(" Normal Table ")]},proxy:!0}])},[e("Column",{attrs:{field:"code",header:"Code"}}),e("Column",{attrs:{field:"name",header:"Name"}}),e("Column",{attrs:{field:"category",header:"Category"}}),e("Column",{attrs:{field:"quantity",header:"Quantity"}})],1)],1),e("div",{staticClass:"card"},[e("DataTable",{staticClass:"p-datatable-lg",attrs:{value:a.products,responsiveLayout:"scroll"},scopedSlots:a._u([{key:"header",fn:function(){return[a._v(" Large Table ")]},proxy:!0}])},[e("Column",{attrs:{field:"code",header:"Code"}}),e("Column",{attrs:{field:"name",header:"Name"}}),e("Column",{attrs:{field:"category",header:"Category"}}),e("Column",{attrs:{field:"quantity",header:"Quantity"}})],1)],1)]),e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Source"}},[e("CodeHighlight",[[a._v(' <DataTable :value="products" class="p-datatable-sm" responsiveLayout="scroll"> <template #header> Small Table </template> <Column field="code" header="Code"></Column> <Column field="name" header="Name"></Column> <Column field="category" header="Category"></Column> <Column field="quantity" header="Quantity"></Column> </DataTable> <DataTable :value="products" responsiveLayout="scroll"> <template #header> Normal Table </template> <Column field="code" header="Code"></Column> <Column field="name" header="Name"></Column> <Column field="category" header="Category"></Column> <Column field="quantity" header="Quantity"></Column> </DataTable> <DataTable :value="products" class="p-datatable-lg" responsiveLayout="scroll"> <template #header> Large Table </template> <Column field="code" header="Code"></Column> <Column field="name" header="Name"></Column> <Column field="category" header="Category"></Column> <Column field="quantity" header="Quantity"></Column> </DataTable> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[a._v(" import ProductService from '../../service/ProductService'; export default { data() { return { products: null } }, productService: null, created() { this.productService = new ProductService(); }, mounted() { this.productService.getProductsSmall().then(data => this.products = data); } } ")])],1)],1)],1)])},d=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"content-section introduction"},[a("div",{staticClass:"feature-intro"},[a("h1",[t._v("DataTable "),a("span",[t._v("Size")])]),a("p",[t._v("In addition to a regular table, alternatives with alternative sizes are available.")])])])}],s=l(o,n,d,!1,null,null);const p=s.exports;export{p as default};
//# sourceMappingURL=DataTableSizeDemo-1ZrWbHnd.js.map
