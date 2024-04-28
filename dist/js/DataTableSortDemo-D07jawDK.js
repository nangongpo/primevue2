import{P as o}from"./ProductService-B_eIBIF9.js";import{n as l}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const s={data(){return{products:null}},productService:null,created(){this.productService=new o},mounted(){this.productService.getProductsSmall().then(r=>this.products=r)},methods:{formatCurrency(r){return r.toLocaleString("en-US",{style:"currency",currency:"USD"})}}};var n=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Single Column")]),e("DataTable",{attrs:{value:t.products,responsiveLayout:"scroll"}},[e("Column",{attrs:{field:"code",header:"Code",sortable:""}}),e("Column",{attrs:{field:"name",header:"Name",sortable:""}}),e("Column",{attrs:{field:"category",header:"Category",sortable:""}}),e("Column",{attrs:{field:"quantity",header:"Quantity",sortable:""}}),e("Column",{attrs:{field:"price",header:"Price",sortable:""},scopedSlots:t._u([{key:"body",fn:function(a){return[t._v(" "+t._s(t.formatCurrency(a.data.price))+" ")]}}])})],1)],1),e("div",{staticClass:"card"},[e("h5",[t._v("Multiple Columns")]),e("p",[t._v("Use metakey to add a column to the sort selection.")]),e("DataTable",{attrs:{value:t.products,sortMode:"multiple",responsiveLayout:"scroll"}},[e("Column",{attrs:{field:"code",header:"Code",sortable:""}}),e("Column",{attrs:{field:"name",header:"Name",sortable:""}}),e("Column",{attrs:{field:"category",header:"Category",sortable:""}}),e("Column",{attrs:{field:"quantity",header:"Quantity",sortable:""}}),e("Column",{attrs:{field:"price",header:"Price",sortable:""},scopedSlots:t._u([{key:"body",fn:function(a){return[t._v(" "+t._s(t.formatCurrency(a.data.price))+" ")]}}])})],1)],1),e("div",{staticClass:"card"},[e("h5",[t._v("Presort")]),e("DataTable",{attrs:{value:t.products,sortField:"category",sortOrder:-1,responsiveLayout:"scroll"}},[e("Column",{attrs:{field:"code",header:"Code",sortable:""}}),e("Column",{attrs:{field:"name",header:"Name",sortable:""}}),e("Column",{attrs:{field:"category",header:"Category",sortable:""}}),e("Column",{attrs:{field:"quantity",header:"Quantity",sortable:""}}),e("Column",{attrs:{field:"price",header:"Price",sortable:""},scopedSlots:t._u([{key:"body",fn:function(a){return[t._v(" "+t._s(t.formatCurrency(a.data.price))+" ")]}}])})],1)],1),e("div",{staticClass:"card"},[e("h5",[t._v("Removable Sort")]),e("DataTable",{attrs:{value:t.products,removableSort:"",responsiveLayout:"scroll"}},[e("Column",{attrs:{field:"code",header:"Code",sortable:""}}),e("Column",{attrs:{field:"name",header:"Name",sortable:""}}),e("Column",{attrs:{field:"category",header:"Category",sortable:""}}),e("Column",{attrs:{field:"quantity",header:"Quantity",sortable:""}}),e("Column",{attrs:{field:"price",header:"Price",sortable:""},scopedSlots:t._u([{key:"body",fn:function(a){return[t._v(" "+t._s(t.formatCurrency(a.data.price))+" ")]}}])})],1)],1)]),e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Source"}},[e("CodeHighlight",[[t._v(' <div class="card"> <h5>Single Column</h5> <DataTable :value="products" responsiveLayout="scroll"> <Column field="code" header="Code" sortable></Column> <Column field="name" header="Name" sortable></Column> <Column field="category" header="Category" sortable></Column> <Column field="quantity" header="Quantity" sortable></Column> <Column field="price" header="Price" sortable> <template #body="slotProps"> {{formatCurrency(slotProps.data.price)}} </template> </Column> </DataTable> </div> <div class="card"> <h5>Multiple Columns</h5> <DataTable :value="products" sortMode="multiple" responsiveLayout="scroll"> <Column field="code" header="Code" sortable></Column> <Column field="name" header="Name" sortable></Column> <Column field="category" header="Category" sortable></Column> <Column field="quantity" header="Quantity" sortable></Column> <Column field="price" header="Price" sortable> <template #body="slotProps"> {{formatCurrency(slotProps.data.price)}} </template> </Column> </DataTable> </div> <div class="card"> <h5>Presort</h5> <DataTable :value="products" sortField="category" :sortOrder="-1" responsiveLayout="scroll"> <Column field="code" header="Code" sortable></Column> <Column field="name" header="Name" sortable></Column> <Column field="category" header="Category" sortable></Column> <Column field="quantity" header="Quantity" sortable></Column> <Column field="price" header="Price" sortable> <template #body="slotProps"> {{formatCurrency(slotProps.data.price)}} </template> </Column> </DataTable> </div> <div class="card"> <h5>Removable Sort</h5> <DataTable :value="products" removableSort responsiveLayout="scroll"> <Column field="code" header="Code" sortable></Column> <Column field="name" header="Name" sortable></Column> <Column field="category" header="Category" sortable></Column> <Column field="quantity" header="Quantity" sortable></Column> <Column field="price" header="Price" sortable> <template #body="slotProps"> {{formatCurrency(slotProps.data.price)}} </template> </Column> </DataTable> </div> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import ProductService from '../../service/ProductService'; export default { data() { return { products: null } }, productService: null, created() { this.productService = new ProductService(); }, mounted() { this.productService.getProductsSmall().then(data => this.products = data); }, methods: { formatCurrency(value) { return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); } } } ")])],1)],1)],1)])},d=[function(){var r=this,t=r._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[r._v("DataTable "),t("span",[r._v("Sort")])]),t("p",[r._v("Enabling sortable property on a column is enough to make a column sortable. Multiple column sorting is enabled using sortMode property and used with metaKey.")])])])}],u=l(s,n,d,!1,null,null);const y=u.exports;export{y as default};
//# sourceMappingURL=DataTableSortDemo-D07jawDK.js.map
