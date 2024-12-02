import{n as s,aJ as r}from"./app.component-BAbvz7X_.js";import{P as l}from"./ProductService-B_eIBIF9.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const c={data(){return{baseCode:{basic:'\n<div class="card">\n    <Toolbar class="mb-4">\n        <template #start>\n            <Button label="New" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew" />\n            <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />\n        </template>\n\n        <template #end>\n            <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />\n            <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />\n        </template>\n    </Toolbar>\n\n    <DataTable ref="dt" :value="products" :selection.sync="selectedProducts" dataKey="id"\n        :paginator="true" :rows="10" :filters="filters"\n        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"\n        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll">\n        <template #header>\n            <div class="table-header flex flex-column md:flex-row md:justify-content-between">\n                <h5 class="mb-2 md:m-0 md:align-self-center">Manage Products</h5>\n                <span class="p-input-icon-left">\n                    <i class="pi pi-search" />\n                    <InputText v-model="filters[\'global\'].value" placeholder="Search..." />\n                </span>\n            </div>\n        </template>\n\n        <Column selectionMode="multiple" :styless="{width: \'3rem\'}" :exportable="false"></Column>\n        <Column field="code" header="Code" :sortable="true" :styles="{\'min-width\':\'12rem\'}"></Column>\n        <Column field="name" header="Name" :sortable="true" :styles="{\'min-width\':\'16rem\'}"></Column>\n        <Column header="Image">\n            <template #body="slotProps">\n                <img :src="\'demo/images/product/\' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" />\n            </template>\n        </Column>\n        <Column field="price" header="Price" :sortable="true" :styles="{\'min-width\':\'8rem\'}">\n            <template #body="slotProps">\n                {{formatCurrency(slotProps.data.price)}}\n            </template>\n        </Column>\n        <Column field="category" header="Category" :sortable="true" :styles="{\'min-width\':\'10rem\'}"></Column>\n        <Column field="rating" header="Reviews" :sortable="true" :styles="{\'min-width\':\'12rem\'}">\n            <template #body="slotProps">\n                <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" />\n            </template>\n        </Column>\n        <Column field="inventoryStatus" header="Status" :sortable="true" :styles="{\'min-width\':\'12rem\'}">\n            <template #body="slotProps">\n                <span :class="\'product-badge status-\' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : \'\')">{{slotProps.data.inventoryStatus}}</span>\n            </template>\n        </Column>\n        <Column :exportable="false" :styles="{\'min-width\':\'8rem\'}">\n            <template #body="slotProps">\n                <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(slotProps.data)" />\n                <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />\n            </template>\n        </Column>\n    </DataTable>\n</div>\n\n<Dialog :visible.sync="productDialog" :style="{width: \'450px\'}" header="Product Details" :modal="true" class="p-fluid">\n    <img :src="\'demo/images/product/\' + product.image" :alt="product.image" class="product-image" v-if="product.image" />\n    <div class="field">\n        <label for="name">Name</label>\n        <InputText id="name" v-model.trim="product.name" required="true" autofocus :class="{\'p-invalid\': submitted && !product.name}" />\n        <small class="p-invalid" v-if="submitted && !product.name">Name is required.</small>\n    </div>\n    <div class="field">\n        <label for="description">Description</label>\n        <Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" />\n    </div>\n\n    <div class="field">\n        <label class="mb-3">Category</label>\n        <div class="formgrid grid">\n            <div class="field-radiobutton col-6">\n                <RadioButton id="category1" name="category" value="Accessories" v-model="product.category" />\n                <label for="category1">Accessories</label>\n            </div>\n            <div class="field-radiobutton col-6">\n                <RadioButton id="category2" name="category" value="Clothing" v-model="product.category" />\n                <label for="category2">Clothing</label>\n            </div>\n            <div class="field-radiobutton col-6">\n                <RadioButton id="category3" name="category" value="Electronics" v-model="product.category" />\n                <label for="category3">Electronics</label>\n            </div>\n            <div class="field-radiobutton col-6">\n                <RadioButton id="category4" name="category" value="Fitness" v-model="product.category" />\n                <label for="category4">Fitness</label>\n            </div>\n        </div>\n    </div>\n\n    <div class="formgrid grid">\n        <div class="field col">\n            <label for="price">Price</label>\n            <InputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" />\n        </div>\n        <div class="field col">\n            <label for="quantity">Quantity</label>\n            <InputNumber id="quantity" v-model="product.quantity" integeronly />\n        </div>\n    </div>\n    <template #footer>\n        <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>\n        <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />\n    </template>\n</Dialog>\n\n<Dialog :visible.sync="deleteProductDialog" :styles="{width: \'450px\'}" header="Confirm" :modal="true">\n    <div class="confirmation-content">\n        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />\n        <span v-if="product">Are you sure you want to delete <b>{{product.name}}</b>?</span>\n    </div>\n    <template #footer>\n        <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"/>\n        <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />\n    </template>\n</Dialog>\n\n<Dialog :visible.sync="deleteProductsDialog" :styles="{width: \'450px\'}" header="Confirm" :modal="true">\n    <div class="confirmation-content">\n        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />\n        <span v-if="product">Are you sure you want to delete the selected products?</span>\n    </div>\n    <template #footer>\n        <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false"/>\n        <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts" />\n    </template>\n</Dialog>\n        '},baseCode2:{basic:"\nimport ProductService from '../../service/ProductService';\nimport {FilterMatchMode} from 'primevue2/api';\n\nexport default {\n    data() {\n        return {\n            products: null,\n            productDialog: false,\n            deleteProductDialog: false,\n            deleteProductsDialog: false,\n            product: {},\n            selectedProducts: null,\n            filters: {},\n            submitted: false,\n            statuses: [\n				{label: 'INSTOCK', value: 'instock'},\n				{label: 'LOWSTOCK', value: 'lowstock'},\n				{label: 'OUTOFSTOCK', value: 'outofstock'}\n            ]\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n        this.initFilters();\n    },\n    mounted() {\n        this.productService.getProducts().then(data => this.products = data);\n    },\n    methods: {\n        formatCurrency(value) {\n            if(value)\n				return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});\n			return;\n        },\n        openNew() {\n            this.product = {};\n            this.submitted = false;\n            this.productDialog = true;\n        },\n        hideDialog() {\n            this.productDialog = false;\n            this.submitted = false;\n        },\n        saveProduct() {\n            this.submitted = true;\n\n			if (this.product.name.trim()) {\n                if (this.product.id) {\n                    this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value: this.product.inventoryStatus;\n                    this.products[this.findIndexById(this.product.id)] = this.product;\n                    this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});\n                }\n                else {\n                    this.product.id = this.createId();\n                    this.product.code = this.createId();\n                    this.product.image = 'product-placeholder.svg';\n                    this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';\n                    this.products.push(this.product);\n                    this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});\n                }\n\n                this.productDialog = false;\n                this.product = {};\n            }\n        },\n        editProduct(product) {\n            this.product = {...product};\n            this.productDialog = true;\n        },\n        confirmDeleteProduct(product) {\n            this.product = product;\n            this.deleteProductDialog = true;\n        },\n        deleteProduct() {\n            this.products = this.products.filter(val => val.id !== this.product.id);\n            this.deleteProductDialog = false;\n            this.product = {};\n            this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});\n        },\n        findIndexById(id) {\n            let index = -1;\n            for (let i = 0; i &lt; this.products.length; i++) {\n                if (this.products[i].id === id) {\n                    index = i;\n                    break;\n                }\n            }\n\n            return index;\n        },\n        createId() {\n            let id = '';\n            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n            for ( var i = 0; i &lt; 5; i++ ) {\n                id += chars.charAt(Math.floor(Math.random() * chars.length));\n            }\n            return id;\n        },\n        exportCSV() {\n            this.$refs.dt.exportCSV();\n        },\n        confirmDeleteSelected() {\n            this.deleteProductsDialog = true;\n        },\n        deleteSelectedProducts() {\n            this.products = this.products.filter(val => !this.selectedProducts.includes(val));\n            this.deleteProductsDialog = false;\n            this.selectedProducts = null;\n            this.$toast.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});\n        },\n        initFilters() {\n            this.filters = {\n                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},\n            }\n        }\n    }\n}\n        "},baseCode3:{basic:"\n.table-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    @media screen and (max-width: 960px) {\n        align-items: start;\n	}\n}\n\n.product-image {\n    width: 100px;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.p-dialog .product-image {\n    width: 150px;\n    margin: 0 auto 2rem auto;\n    display: block;\n}\n\n.confirmation-content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n@media screen and (max-width: 960px) {\n	:deep(.p-toolbar) {\n		flex-wrap: wrap;\n\n		.p-button {\n            margin-bottom: 0.25rem;\n        }\n	}\n}\n        "}}}};var d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Source"}},[e("DocSectionCode",{attrs:{code:t.baseCode}}),e("DocSectionCode",{attrs:{code:t.baseCode2,importCode:""}}),e("DocSectionCode",{attrs:{code:t.baseCode3,importStyle:""}})],1)],1)],1)},u=[],n=s(c,d,u,!1,null,null);const p=n.exports,m={components:{DataTableCrudDoc:p},data(){return{products:null,productDialog:!1,deleteProductDialog:!1,deleteProductsDialog:!1,product:{},selectedProducts:null,filters:{},submitted:!1,statuses:[{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]}},productService:null,created(){this.productService=new l,this.initFilters()},mounted(){this.productService.getProducts().then(a=>this.products=a)},methods:{formatCurrency(a){if(a)return a.toLocaleString("en-US",{style:"currency",currency:"USD"})},openNew(){this.product={},this.submitted=!1,this.productDialog=!0},hideDialog(){this.productDialog=!1,this.submitted=!1},saveProduct(){this.submitted=!0,this.product.name.trim()&&(this.product.id?(this.product.inventoryStatus=this.product.inventoryStatus.value?this.product.inventoryStatus.value:this.product.inventoryStatus,this.products[this.findIndexById(this.product.id)]=this.product,this.$toast.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(this.product.id=this.createId(),this.product.code=this.createId(),this.product.image="product-placeholder.svg",this.product.inventoryStatus=this.product.inventoryStatus?this.product.inventoryStatus.value:"INSTOCK",this.products.push(this.product),this.$toast.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),this.productDialog=!1,this.product={})},editProduct(a){this.product={...a},this.productDialog=!0},confirmDeleteProduct(a){this.product=a,this.deleteProductDialog=!0},deleteProduct(){this.products=this.products.filter(a=>a.id!==this.product.id),this.deleteProductDialog=!1,this.product={},this.$toast.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})},findIndexById(a){let t=-1;for(let e=0;e<this.products.length;e++)if(this.products[e].id===a){t=e;break}return t},createId(){let a="";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=0;e<5;e++)a+=t.charAt(Math.floor(Math.random()*t.length));return a},exportCSV(){this.$refs.dt.exportCSV()},confirmDeleteSelected(){this.deleteProductsDialog=!0},deleteSelectedProducts(){this.products=this.products.filter(a=>!this.selectedProducts.includes(a)),this.deleteProductsDialog=!1,this.selectedProducts=null,this.$toast.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},initFilters(){this.filters={global:{value:null,matchMode:r.CONTAINS}}}}};var f=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("Toolbar",{staticClass:"mb-4",scopedSlots:t._u([{key:"start",fn:function(){return[e("Button",{staticClass:"p-button-success mr-2",attrs:{label:"New",icon:"pi pi-plus"},on:{click:t.openNew}}),e("Button",{staticClass:"p-button-danger",attrs:{label:"Delete",icon:"pi pi-trash",disabled:!t.selectedProducts||!t.selectedProducts.length},on:{click:t.confirmDeleteSelected}})]},proxy:!0},{key:"end",fn:function(){return[e("FileUpload",{staticClass:"mr-2 inline-block",attrs:{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Import",chooseLabel:"Import"}}),e("Button",{staticClass:"p-button-help",attrs:{label:"Export",icon:"pi pi-upload"},on:{click:function(o){return t.exportCSV(o)}}})]},proxy:!0}])}),e("DataTable",{ref:"dt",attrs:{value:t.products,selection:t.selectedProducts,dataKey:"id",paginator:!0,rows:10,filters:t.filters,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},on:{"update:selection":function(o){t.selectedProducts=o}},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"table-header flex flex-column md:flex-row md:justify-content-between"},[e("h5",{staticClass:"mb-2 md:m-0 md:align-self-center"},[t._v("Manage Products")]),e("span",{staticClass:"p-input-icon-left"},[e("i",{staticClass:"pi pi-search"}),e("InputText",{attrs:{placeholder:"Search..."},model:{value:t.filters.global.value,callback:function(o){t.$set(t.filters.global,"value",o)},expression:"filters['global'].value"}})],1)])]},proxy:!0}])},[e("Column",{attrs:{selectionMode:"multiple",styless:{width:"3rem"},exportable:!1}}),e("Column",{attrs:{field:"code",header:"Code",sortable:!0,styles:{"min-width":"12rem"}}}),e("Column",{attrs:{field:"name",header:"Name",sortable:!0,styles:{"min-width":"16rem"}}}),e("Column",{attrs:{header:"Image"},scopedSlots:t._u([{key:"body",fn:function(o){return[e("img",{staticClass:"product-image",attrs:{src:t.$publicUrl("demo/images/product/"+o.data.image),alt:o.data.image}})]}}])}),e("Column",{attrs:{field:"price",header:"Price",sortable:!0,styles:{"min-width":"8rem"}},scopedSlots:t._u([{key:"body",fn:function(o){return[t._v(" "+t._s(t.formatCurrency(o.data.price))+" ")]}}])}),e("Column",{attrs:{field:"category",header:"Category",sortable:!0,styles:{"min-width":"10rem"}}}),e("Column",{attrs:{field:"rating",header:"Reviews",sortable:!0,styles:{"min-width":"12rem"}},scopedSlots:t._u([{key:"body",fn:function(o){return[e("Rating",{attrs:{value:o.data.rating,readonly:!0,cancel:!1}})]}}])}),e("Column",{attrs:{field:"inventoryStatus",header:"Status",sortable:!0,styles:{"min-width":"12rem"}},scopedSlots:t._u([{key:"body",fn:function(o){return[e("span",{class:"product-badge status-"+(o.data.inventoryStatus?o.data.inventoryStatus.toLowerCase():"")},[t._v(t._s(o.data.inventoryStatus))])]}}])}),e("Column",{attrs:{exportable:!1,styles:{"min-width":"8rem"}},scopedSlots:t._u([{key:"body",fn:function(o){return[e("Button",{staticClass:"p-button-rounded p-button-success mr-2",attrs:{icon:"pi pi-pencil"},on:{click:function(i){return t.editProduct(o.data)}}}),e("Button",{staticClass:"p-button-rounded p-button-warning",attrs:{icon:"pi pi-trash"},on:{click:function(i){return t.confirmDeleteProduct(o.data)}}})]}}])})],1)],1),e("Dialog",{staticClass:"p-fluid",attrs:{visible:t.productDialog,containerStyle:{width:"450px"},header:"Product Details",modal:!0},on:{"update:visible":function(o){t.productDialog=o}},scopedSlots:t._u([{key:"footer",fn:function(){return[e("Button",{staticClass:"p-button-text",attrs:{label:"Cancel",icon:"pi pi-times"},on:{click:t.hideDialog}}),e("Button",{staticClass:"p-button-text",attrs:{label:"Save",icon:"pi pi-check"},on:{click:t.saveProduct}})]},proxy:!0}])},[t.product.image?e("img",{staticClass:"product-image",attrs:{src:t.$publicUrl("demo/images/product/"+t.product.image),alt:t.product.image}}):t._e(),e("div",{staticClass:"field"},[e("label",{attrs:{for:"name"}},[t._v("Name")]),e("InputText",{class:{"p-invalid":t.submitted&&!t.product.name},attrs:{id:"name",required:"true",autofocus:""},model:{value:t.product.name,callback:function(o){t.$set(t.product,"name",typeof o=="string"?o.trim():o)},expression:"product.name"}}),t.submitted&&!t.product.name?e("small",{staticClass:"p-invalid"},[t._v("Name is required.")]):t._e()],1),e("div",{staticClass:"field"},[e("label",{attrs:{for:"description"}},[t._v("Description")]),e("Textarea",{attrs:{id:"description",required:"true",rows:"3",cols:"20"},model:{value:t.product.description,callback:function(o){t.$set(t.product,"description",o)},expression:"product.description"}})],1),e("div",{staticClass:"field"},[e("label",{staticClass:"mb-3"},[t._v("Category")]),e("div",{staticClass:"formgrid grid"},[e("div",{staticClass:"field-radiobutton col-6"},[e("RadioButton",{attrs:{id:"category1",name:"category",value:"Accessories"},model:{value:t.product.category,callback:function(o){t.$set(t.product,"category",o)},expression:"product.category"}}),e("label",{attrs:{for:"category1"}},[t._v("Accessories")])],1),e("div",{staticClass:"field-radiobutton col-6"},[e("RadioButton",{attrs:{id:"category2",name:"category",value:"Clothing"},model:{value:t.product.category,callback:function(o){t.$set(t.product,"category",o)},expression:"product.category"}}),e("label",{attrs:{for:"category2"}},[t._v("Clothing")])],1),e("div",{staticClass:"field-radiobutton col-6"},[e("RadioButton",{attrs:{id:"category3",name:"category",value:"Electronics"},model:{value:t.product.category,callback:function(o){t.$set(t.product,"category",o)},expression:"product.category"}}),e("label",{attrs:{for:"category3"}},[t._v("Electronics")])],1),e("div",{staticClass:"field-radiobutton col-6"},[e("RadioButton",{attrs:{id:"category4",name:"category",value:"Fitness"},model:{value:t.product.category,callback:function(o){t.$set(t.product,"category",o)},expression:"product.category"}}),e("label",{attrs:{for:"category4"}},[t._v("Fitness")])],1)])]),e("div",{staticClass:"formgrid grid"},[e("div",{staticClass:"field col"},[e("label",{attrs:{for:"price"}},[t._v("Price")]),e("InputNumber",{attrs:{id:"price",mode:"currency",currency:"USD",locale:"en-US"},model:{value:t.product.price,callback:function(o){t.$set(t.product,"price",o)},expression:"product.price"}})],1),e("div",{staticClass:"field col"},[e("label",{attrs:{for:"quantity"}},[t._v("Quantity")]),e("InputNumber",{attrs:{id:"quantity",integeronly:""},model:{value:t.product.quantity,callback:function(o){t.$set(t.product,"quantity",o)},expression:"product.quantity"}})],1)])]),e("Dialog",{attrs:{visible:t.deleteProductDialog,containerStyle:{width:"450px"},header:"Confirm",modal:!0},on:{"update:visible":function(o){t.deleteProductDialog=o}},scopedSlots:t._u([{key:"footer",fn:function(){return[e("Button",{staticClass:"p-button-text",attrs:{label:"No",icon:"pi pi-times"},on:{click:function(o){t.deleteProductDialog=!1}}}),e("Button",{staticClass:"p-button-text",attrs:{label:"Yes",icon:"pi pi-check"},on:{click:t.deleteProduct}})]},proxy:!0}])},[e("div",{staticClass:"confirmation-content"},[e("i",{staticClass:"pi pi-exclamation-triangle mr-3",staticStyle:{"font-size":"2rem"}}),t.product?e("span",[t._v("Are you sure you want to delete "),e("b",[t._v(t._s(t.product.name))]),t._v("?")]):t._e()])]),e("Dialog",{attrs:{visible:t.deleteProductsDialog,containerStyle:{width:"450px"},header:"Confirm",modal:!0},on:{"update:visible":function(o){t.deleteProductsDialog=o}},scopedSlots:t._u([{key:"footer",fn:function(){return[e("Button",{staticClass:"p-button-text",attrs:{label:"No",icon:"pi pi-times"},on:{click:function(o){t.deleteProductsDialog=!1}}}),e("Button",{staticClass:"p-button-text",attrs:{label:"Yes",icon:"pi pi-check"},on:{click:t.deleteSelectedProducts}})]},proxy:!0}])},[e("div",{staticClass:"confirmation-content"},[e("i",{staticClass:"pi pi-exclamation-triangle mr-3",staticStyle:{"font-size":"2rem"}}),t.product?e("span",[t._v("Are you sure you want to delete the selected products?")]):t._e()])])],1),e("DataTableCrudDoc")],1)},h=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[a._v("DataTable "),t("span",[a._v("Crud")])]),t("p",[a._v("This sample demonstrates a CRUD implementation using various PrimeVue components.")])])])}],v=s(m,f,h,!1,null,"96cc77ab");const x=v.exports;export{x as default};
//# sourceMappingURL=Crud-D-qrX-f3.js.map
