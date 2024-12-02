System.register(["./app.component-legacy-cLUjg6K2.js","./ProductService-legacy-Ctw4T0RP.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(e,t){"use strict";var a,n;return{setters:[function(e){a=e.n},function(e){n=e.P},null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".product-image[data-v-4a619f8f]{width:100px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.orders-subtable[data-v-4a619f8f]{padding:1rem}\n/*$vite$:1*/",document.head.appendChild(t);var o=a({data:function(){return{baseCode:{basic:'\n<DataTable :value="products" :expandedRows.sync="expandedRows" dataKey="id" responsiveLayout="scroll"\n    @row-expand="onRowExpand" @row-collapse="onRowCollapse">\n    <template #header>\n        <div class="table-header-container">\n            <Button icon="pi pi-plus" label="Expand All" @click="expandAll" class="mr-2" />\n            <Button icon="pi pi-minus" label="Collapse All" @click="collapseAll" />\n        </div>\n    </template>\n    <Column :expander="true" :headerStyle="{\'width\': \'3rem\'}" />\n    <Column field="name" header="Name" sortable></Column>\n    <Column header="Image">\n        <template #body="slotProps">\n            <img :src="\'demo/images/product/\' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" />\n        </template>\n    </Column>\n    <Column field="price" header="Price" sortable>\n        <template #body="slotProps">\n            {{formatCurrency(slotProps.data.price)}}\n        </template>\n    </Column>\n    <Column field="category" header="Category" sortable></Column>\n    <Column field="rating" header="Reviews" sortable>\n        <template #body="slotProps">\n            <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" />\n        </template>\n    </Column>\n    <Column field="inventoryStatus" header="Status" sortable>\n        <template #body="slotProps">\n            <span :class="\'product-badge status-\' + slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>\n        </template>\n    </Column>\n    <template #expansion="slotProps">\n        <div class="orders-subtable">\n            <h5>Orders for {{slotProps.data.name}}</h5>\n            <DataTable :value="slotProps.data.orders">\n                <Column field="id" header="Id" sortable></Column>\n                <Column field="customer" header="Customer" sortable></Column>\n                <Column field="date" header="Date" sortable></Column>\n                <Column field="amount" header="Amount" sortable>\n                    <template #body="slotProps" sortable>\n                        {{formatCurrency(slotProps.data.amount)}}\n                    </template>\n                </Column>\n                <Column field="status" header="Status" sortable>\n                    <template #body="slotProps">\n                        <span :class="\'order-badge order-\' + slotProps.data.status.toLowerCase()">{{slotProps.data.status}}</span>\n                    </template>\n                </Column>\n                <Column :headerStyle="{\'width\':\'4rem\'}">\n                    <template #body>\n                        <Button icon="pi pi-search" />\n                    </template>\n                </Column>\n            </DataTable>\n        </div>\n    </template>\n</DataTable>\n        '},baseCode2:{basic:"\nimport ProductService from '../../service/ProductService';\n\nexport default {\n    data() {\n        return {\n            products: null,\n            expandedRows: []\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProductsWithOrdersSmall().then(data => this.products = data);\n    },\n    methods: {\n        onRowExpand(event) {\n            this.$toast.add({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});\n        },\n        onRowCollapse(event) {\n            this.$toast.add({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});\n        },\n        expandAll() {\n            this.expandedRows = this.products.filter(p => p.id);\n            this.$toast.add({severity: 'success', summary: 'All Rows Expanded', life: 3000});\n        },\n        collapseAll() {\n            this.expandedRows = null;\n            this.$toast.add({severity: 'success', summary: 'All Rows Collapsed', life: 3000});\n        },\n        formatCurrency(value) {\n            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});\n        }\n    }\n}\n        "}}}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("DocSectionCode",{attrs:{code:e.baseCode}}),t("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}})],1)],1)],1)}),[],!1,null,null).exports;e("default",a({components:{DataTableRowExpandDoc:o},data:function(){return{products:null,expandedRows:[]}},productService:null,created:function(){this.productService=new n},mounted:function(){var e=this;this.productService.getProductsWithOrdersSmall().then((function(t){return e.products=t}))},methods:{onRowExpand:function(e){this.$toast.add({severity:"info",summary:"Product Expanded",detail:e.data.name,life:3e3})},onRowCollapse:function(e){this.$toast.add({severity:"success",summary:"Product Collapsed",detail:e.data.name,life:3e3})},expandAll:function(){this.expandedRows=this.products.filter((function(e){return e.id})),this.$toast.add({severity:"success",summary:"All Rows Expanded",life:3e3})},collapseAll:function(){this.expandedRows=null,this.$toast.add({severity:"success",summary:"All Rows Collapsed",life:3e3})},formatCurrency:function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("DataTable",{attrs:{value:e.products,expandedRows:e.expandedRows,dataKey:"id",responsiveLayout:"scroll"},on:{"update:expandedRows":function(t){e.expandedRows=t},"update:expanded-rows":function(t){e.expandedRows=t},"row-expand":e.onRowExpand,"row-collapse":e.onRowCollapse},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"table-header-container"},[t("Button",{staticClass:"mr-2",attrs:{icon:"pi pi-plus",label:"Expand All"},on:{click:e.expandAll}}),t("Button",{attrs:{icon:"pi pi-minus",label:"Collapse All"},on:{click:e.collapseAll}})],1)]},proxy:!0},{key:"expansion",fn:function(a){return[t("div",{staticClass:"orders-subtable"},[t("h5",[e._v("Orders for "+e._s(a.data.name))]),t("DataTable",{attrs:{value:a.data.orders}},[t("Column",{attrs:{field:"id",header:"Id",sortable:""}}),t("Column",{attrs:{field:"customer",header:"Customer",sortable:""}}),t("Column",{attrs:{field:"date",header:"Date",sortable:""}}),t("Column",{attrs:{field:"amount",header:"Amount",sortable:""},scopedSlots:e._u([{key:"body",fn:function(t){return[e._v(" "+e._s(e.formatCurrency(t.data.amount))+" ")]}}],null,!0)}),t("Column",{attrs:{field:"status",header:"Status",sortable:""},scopedSlots:e._u([{key:"body",fn:function(a){return[t("span",{class:"order-badge order-"+a.data.status.toLowerCase()},[e._v(e._s(a.data.status))])]}}],null,!0)}),t("Column",{attrs:{headerStyle:{width:"4rem"}},scopedSlots:e._u([{key:"body",fn:function(){return[t("Button",{attrs:{icon:"pi pi-search"}})]},proxy:!0}],null,!0)})],1)],1)]}}])},[t("Column",{attrs:{expander:!0,headerStyle:{width:"3rem"}}}),t("Column",{attrs:{field:"name",header:"Name",sortable:""}}),t("Column",{attrs:{header:"Image"},scopedSlots:e._u([{key:"body",fn:function(a){return[t("img",{staticClass:"product-image",attrs:{src:e.$publicUrl("demo/images/product/"+a.data.image),alt:a.data.image}})]}}])}),t("Column",{attrs:{field:"price",header:"Price",sortable:""},scopedSlots:e._u([{key:"body",fn:function(t){return[e._v(" "+e._s(e.formatCurrency(t.data.price))+" ")]}}])}),t("Column",{attrs:{field:"category",header:"Category",sortable:""}}),t("Column",{attrs:{field:"rating",header:"Reviews",sortable:""},scopedSlots:e._u([{key:"body",fn:function(e){return[t("Rating",{attrs:{value:e.data.rating,readonly:!0,cancel:!1}})]}}])}),t("Column",{attrs:{field:"inventoryStatus",header:"Status",sortable:""},scopedSlots:e._u([{key:"body",fn:function(a){return[t("span",{class:"product-badge status-"+a.data.inventoryStatus.toLowerCase()},[e._v(e._s(a.data.inventoryStatus))])]}}])})],1)],1)]),t("DataTableRowExpandDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("DataTable "),t("span",[e._v("Row Expansion")])]),t("p",[e._v("A row can be expanded to display additional content.")])])])}],!1,null,"4a619f8f").exports)}}}));
//# sourceMappingURL=RowExpand-legacy-BSlqwZwx.js.map
