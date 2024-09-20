System.register(["./ProductService-legacy-Ctw4T0RP.js","./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(t,e){"use strict";var a,o;return{setters:[function(t){a=t.P},function(t){o=t.n},null,null,null],execute:function(){t("default",o({data:function(){return{products:null}},productService:null,created:function(){this.productService=new a},mounted:function(){var t=this;this.productService.getProductsSmall().then((function(e){return t.products=e}))}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("DataTable",{attrs:{value:t.products,responsiveLayout:"scroll"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" Scroll ")]},proxy:!0}])},[e("Column",{attrs:{field:"code",header:"Code"}}),e("Column",{attrs:{field:"name",header:"Name"}}),e("Column",{attrs:{field:"category",header:"Category"}}),e("Column",{attrs:{field:"quantity",header:"Quantity"}}),e("Column",{attrs:{field:"inventoryStatus",header:"Status"},scopedSlots:t._u([{key:"body",fn:function(a){return[e("span",{class:"product-badge status-"+(a.data.inventoryStatus?a.data.inventoryStatus.toLowerCase():"")},[t._v(t._s(a.data.inventoryStatus))])]}}])}),e("Column",{attrs:{field:"rating",header:"Rating"},scopedSlots:t._u([{key:"body",fn:function(t){return[e("Rating",{attrs:{value:t.data.rating,readonly:!0,cancel:!1}})]}}])})],1)],1),e("div",{staticClass:"card"},[e("DataTable",{attrs:{value:t.products,responsiveLayout:"stack",breakpoint:"960px"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" Stack ")]},proxy:!0}])},[e("Column",{attrs:{field:"code",header:"Code"}}),e("Column",{attrs:{field:"name",header:"Name"}}),e("Column",{attrs:{field:"category",header:"Category"}}),e("Column",{attrs:{field:"quantity",header:"Quantity"}}),e("Column",{attrs:{field:"inventoryStatus",header:"Status"},scopedSlots:t._u([{key:"body",fn:function(a){return[e("span",{class:"product-badge status-"+(a.data.inventoryStatus?a.data.inventoryStatus.toLowerCase():"")},[t._v(t._s(a.data.inventoryStatus))])]}}])}),e("Column",{attrs:{field:"rating",header:"Rating"},scopedSlots:t._u([{key:"body",fn:function(t){return[e("Rating",{attrs:{value:t.data.rating,readonly:!0,cancel:!1}})]}}])})],1)],1)]),e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Source"}},[e("CodeHighlight",[[t._v(' <div class="card"> <DataTable :value="products" responsiveLayout="scroll"> <template #header> Scroll </template> <Column field="code" header="Code"></Column> <Column field="name" header="Name"></Column> <Column field="category" header="Category"></Column> <Column field="quantity" header="Quantity"></Column> <Column field="inventoryStatus" header="Status"> <template #body="slotProps"> <span :class="\'product-badge status-\' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : \'\')">{{slotProps.data.inventoryStatus}}</span> </template> </Column> <Column field="rating" header="Rating"> <template #body="slotProps"> <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" /> </template> </Column> </DataTable> </div> <div class="card"> <DataTable :value="products" responsiveLayout="stack" breakpoint="960px"> <template #header> Stack </template> <Column field="code" header="Code"></Column> <Column field="name" header="Name"></Column> <Column field="category" header="Category"></Column> <Column field="quantity" header="Quantity"></Column> <Column field="inventoryStatus" header="Status"> <template #body="slotProps"> <span :class="\'product-badge status-\' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : \'\')">{{slotProps.data.inventoryStatus}}</span> </template> </Column> <Column field="rating" header="Rating"> <template #body="slotProps"> <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" /> </template> </Column> </DataTable> </div> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import ProductService from '../../service/ProductService'; export default { data() { return { products: null } }, productService: null, created() { this.productService = new ProductService(); }, mounted() { this.productService.getProductsSmall().then(data => this.products = data); } } ")])],1)],1)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("DataTable "),e("span",[t._v("Responsive")])]),e("p",[t._v("DataTable responsive layout can be achieved in two ways; first approach is displaying a horizontal scrollbar for smaller screens and second one is defining a breakpoint to display the cells of a row as stacked.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=DataTableResponsiveDemo-legacy-Fa_JCWmd.js.map
