System.register(["./ProductService-legacy-Ctw4T0RP.js","./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(t,e){"use strict";var a,i;return{setters:[function(t){a=t.P},function(t){i=t.n},null,null,null],execute:function(){var e=document.createElement("style");e.textContent=".p-dropdown[data-v-d11e1414]{width:14rem;font-weight:400}.product-name[data-v-d11e1414]{font-size:1.5rem;font-weight:700}.product-description[data-v-d11e1414]{margin:0 0 1rem}.product-category-icon[data-v-d11e1414]{vertical-align:middle;margin-right:.5rem}.product-category[data-v-d11e1414]{font-weight:600;vertical-align:middle}[data-v-d11e1414] .product-list-item{display:flex;align-items:center;padding:1rem;width:100%}[data-v-d11e1414] .product-list-item img{width:150px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-right:2rem}[data-v-d11e1414] .product-list-item .product-list-detail{flex:1 1 0}[data-v-d11e1414] .product-list-item .p-rating{margin:0 0 .5rem}[data-v-d11e1414] .product-list-item .product-price{font-size:1.5rem;font-weight:600;margin-bottom:.5rem;align-self:flex-end}[data-v-d11e1414] .product-list-item .product-list-action{display:flex;flex-direction:column}[data-v-d11e1414] .product-list-item .p-button{margin-bottom:.5rem}[data-v-d11e1414] .product-grid-item{margin:.5rem;border:1px solid #dee2e6}[data-v-d11e1414] .product-grid-item .product-grid-item-top,[data-v-d11e1414] .product-grid-item .product-grid-item-bottom{display:flex;align-items:center;justify-content:space-between}[data-v-d11e1414] .product-grid-item img{width:75%;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin:2rem 0}[data-v-d11e1414] .product-grid-item .product-grid-item-content{text-align:center}[data-v-d11e1414] .product-grid-item .product-price{font-size:1.5rem;font-weight:600}@media screen and (max-width: 576px){.product-list-item[data-v-d11e1414]{flex-direction:column;align-items:center}.product-list-item img[data-v-d11e1414]{width:75%;margin:2rem 0}.product-list-item .product-list-detail[data-v-d11e1414]{text-align:center}.product-list-item .product-price[data-v-d11e1414]{align-self:center}.product-list-item .product-list-action[data-v-d11e1414]{display:flex;flex-direction:column}.product-list-item .product-list-action[data-v-d11e1414]{margin-top:2rem;flex-direction:row;justify-content:space-between;align-items:center;width:100%}}\n",document.head.appendChild(e);var o=i({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[t._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import DataView from 'primevue2/dataview'; ")]),e("h5",[t._v("PrimeFlex")]),e("p",[t._v("DataView utilizes PrimeFlex library so it needs to be installed before getting started. Refer to "),e("a",{attrs:{href:"https://www.primefaces.org/primeflex/gridsystem"}},[t._v("PrimeFlex")]),t._v(" documentation for details.")]),e("h5",[t._v("Getting Started")]),e("p",[t._v("DataView requires a collection of items as its value and one or more templates depending on the layout mode e.g. list and grid. Throughout the samples, a car interface having vin, brand, year and color properties are used to define an object to be displayed by the dataview. Cars are loaded by a CarService that connects to a server to fetch the cars.")]),e("CodeHighlight",{attrs:{lang:"js"}},[[t._v(" export default { data() { return { cars: null, } }, carService: null, created() { this.carService = new CarService(); }, mounted() { this.carService.getCarsLarge().then(data => this.cars = data); } } ")]],2),e("h5",[t._v("Layouts")]),e("p",[t._v("DataView has two layout modes; "),e("i",[t._v("list")]),t._v(" and "),e("i",[t._v("grid")]),t._v(' where a separate template is used to render an item in each mode. In list mode name of the template is "list" whereas in grid mode it is "grid".')]),e("p",[t._v("Note that there is no restriction to use both layouts at the same time, you may configure only one layout using the layout property with the corresponding template.")]),e("CodeHighlight",[[t._v(' <template #list="slotProps"> <div class="col-12"> <div class="car-details"> <div> <img :src="$publicUrl(\'demo/images/car/\' + slotProps.data.brand + \'.png\')" :alt="slotProps.data.brand"/> <div class="grid"> <div class="col-12">Vin: <b>{{slotProps.data.vin}}</b></div> <div class="col-12">Year: <b>{{slotProps.data.year}}</b></div> <div class="col-12">Brand: <b>{{slotProps.data.brand}}</b></div> <div class="col-12">Color: <b>{{slotProps.data.color}}</b></div> </div> </div> <Button icon="pi pi-search"></Button> </div> </div> </template> <template #grid="slotProps"> <div style="padding: .5em" class="col-12 md:col-3"> <Panel :header="slotProps.data.vin" style="text-align: center"> <img :src="$publicUrl(\'demo/images/car/\' + slotProps.data.brand + \'.png\')" :alt="slotProps.data.brand"/> <div class="car-detail">{{slotProps.data.year}} - {{slotProps.data.color}}</div> <Button icon="pi pi-search"></Button> </Panel> </div> </template> ')]],2),e("h5",[t._v("Sections")]),e("p",[t._v("Header and Footer are the two templates that are capable of displaying custom content.")]),e("CodeHighlight",[t._v(" <template #header>Header Content</template> <template #footer>Footer Content</template> ")]),e("h5",[t._v("Empty Message")]),e("p",[t._v("Where there is no data to display, the optional "),e("i",[t._v("empty")]),t._v(" template can be used to display information.")]),e("CodeHighlight",[t._v(" <template #empty>No records found.</template> ")]),e("h5",[t._v("DataViewLayoutOptions")]),e("p",[t._v("When both layout modes are enabled in DataView, a UI element would be necessary to let the user toggle between the view. DataViewLayoutOptions is a helper component to display a buttonset to choose the layout mode in DataView. Location of the DataViewLayoutOptions should be inside the DataView component. If you prefer a different UI element you can create your own that updates the layout property of the DataView. ")]),e("CodeHighlight",[[t._v(' <DataView :value="cars" :layout="layout"> <template #header> <DataViewLayoutOptions v-model="layout"></DataViewLayoutOptions> </template> <template #list="slotProps" > <div>Vin: <b>{{slotProps.data.vin}}</b></div> </template> <template #grid="slotProps"> <div>Vin: <b>{{slotProps.data.vin}}</b></div> </template> </DataView> ')]],2),e("h5",[t._v("Paginator")]),e("p",[t._v("Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number of page links to display. To customize the left and right side of the paginators, use "),e("i",[t._v("paginatorstart")]),t._v(" and "),e("i",[t._v("paginatorend")]),t._v(" templates.")]),e("CodeHighlight",[[t._v(' <DataView :value="cars" :layout="layout" paginatorPosition="both" :paginator="true" :rows="20"> <template #paginatorstart> <Button type="button" icon="pi pi-refresh"/> </template> <template #paginatorend> <Button type="button" icon="pi pi-search" /> </template> <template #list="slotProps" > <div>Vin: <b>{{slotProps.data.vin}}</b></div> </template> <template #grid="slotProps"> <div>Vin: <b>{{slotProps.data.vin}}</b></div> </template> </DataView> ')]],2),e("h5",[t._v("Sorting")]),e("p",[e("i",[t._v("sortField")]),t._v(" and "),e("i",[t._v("sortOrder")]),t._v(" properties are available for the sorting functionality, for flexibility there is no built-in UI available so that a custom UI can be used for the sorting element. Here is an example that uses a dropdown where simply updating the sortField-sortOrder bindings of the DataView initiates sorting.")]),e("CodeHighlight",[[t._v(' <DataView :value="cars" :layout="layout" :sortOrder="sortOrder" :sortField="sortField"> <template #header> <div class="grid grid-nogutter"> <div class="col-6" style="text-align: left"> <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By" @change="onSortChange($event)"/> </div> <div class="col-6" style="text-align: right"> <DataViewLayoutOptions v-model="layout" /> </div> </div> </template> <template #list="slotProps" > <div>Vin: <b>{{slotProps.data.vin}}</b></div> </template> <template #grid="slotProps"> <div>Vin: <b>{{slotProps.data.vin}}</b></div> </template> </DataView> ')]],2),e("CodeHighlight",{attrs:{lang:"js"}},[[t._v(" export default { data() { return { cars: null, layout: 'list', sortKey: null, sortOrder: null, sortField: null, sortOptions: [ {label: 'Newest First', value: '!year'}, {label: 'Oldest First', value: 'year'}, {label: 'Brand', value: 'brand'} ] } }, carService: null, created() { this.carService = new CarService(); }, mounted() { this.carService.getCarsLarge().then(data => this.cars = data); }, methods: { onSortChange(event){ const value = event.value.value; const sortValue = event.value; if (value.indexOf('!') === 0) { this.sortOrder = -1; this.sortField = value.substring(1, value.length); this.sortKey = sortValue; } else { this.sortOrder = 1; this.sortField = value; this.sortKey = sortValue; } } } } ")]],2),e("h5",[t._v("Lazy Loading")]),e("p",[t._v("Lazy loading is useful to deal with huge datasets, in order to implement lazy loading use the pagination and utilize the "),e("i",[t._v("page")]),t._v(" callback to load your data from the backend. Pagination in this case needs to display the logical number of records bound to the "),e("i",[t._v("totalRecords")]),t._v(" property so that paginator can display itself according to the total records although you'd only need to load the data of the current page.")]),e("CodeHighlight",[[t._v(' <DataView :value="cars" :layout="layout" :paginator="true" :rows="20" :lazy="true" @page="onPage($event)"> <template #list="slotProps" > <div>Vin: <b>{{slotProps.data.vin}}</b></div> </template> <template #grid="slotProps"> <div>Vin: <b>{{slotProps.data.vin}}</b></div> </template> </DataView> ')]],2),e("CodeHighlight",{attrs:{lang:"js"}},[[t._v(" export default { data() { return { cars: null, layout: 'list' } }, carService: null, mounted() { this.cars = //initialize the first chunk of data between 0 and 20 }, methods: { onPage(event){ this.cars = //load the data between (event.first) and (event.first + event.rows) from a remote datasource } } } ")]],2),e("h5",[t._v("Properties")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("array")]),e("td",[t._v("null")]),e("td",[t._v("An array of objects to display.")])]),e("tr",[e("td",[t._v("layout")]),e("td",[t._v("string")]),e("td",[t._v("list")]),e("td",[t._v('Layout of the items, valid values are "list" and "grid".')])]),e("tr",[e("td",[t._v("rows")]),e("td",[t._v("number")]),e("td",[t._v("0")]),e("td",[t._v("Number of rows to display per page.")])]),e("tr",[e("td",[t._v("first")]),e("td",[t._v("number")]),e("td",[t._v("0")]),e("td",[t._v("Index of the first record to render.")])]),e("tr",[e("td",[t._v("totalRecords")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v("Number of total records, defaults to length of value when not defined.")])]),e("tr",[e("td",[t._v("paginator")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("When specified as true, enables the pagination.")])]),e("tr",[e("td",[t._v("paginatorPosition")]),e("td",[t._v("string")]),e("td",[t._v("bottom")]),e("td",[t._v('Position of the paginator, options are "top","bottom" or "both".')])]),e("tr",[e("td",[t._v("alwaysShowPaginator")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Whether to show it even there is only one page.")])]),e("tr",[e("td",[t._v("paginatorTemplate")]),e("td",[t._v("string")]),e("td",[t._v("FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown")]),e("td",[t._v("Template of the paginator.")])]),e("tr",[e("td",[t._v("pageLinkSize")]),e("td",[t._v("number")]),e("td",[t._v("5")]),e("td",[t._v("Number of page links to display.")])]),e("tr",[e("td",[t._v("rowsPerPageOptions")]),e("td",[t._v("array")]),e("td",[t._v("null")]),e("td",[t._v("Array of integer values to display inside rows per page dropdown.")])]),e("tr",[e("td",[t._v("currentPageReportTemplate")]),e("td",[t._v("string")]),e("td",[t._v("({currentPage} of {totalPages})")]),e("td",[t._v("Template of the current page report element.")])]),e("tr",[e("td",[t._v("sortField")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Property name or a getter function of data to use in sorting by default.")])]),e("tr",[e("td",[t._v("sortOrder")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v("Order to sort the data by default.")])]),e("tr",[e("td",[t._v("lazy")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Defines if data is loaded and interacted with in lazy manner.")])])])])]),e("h5",[t._v("Events")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("page")]),e("td",[t._v("event.page: New page number "),e("br"),t._v(" event.first: Index of first record "),e("br"),t._v(" event.rows: Number of rows to display in new page "),e("br"),t._v(" event.pageCount: Total number of pages ")]),e("td",[t._v("Callback to invoke when page changes, the event object contains information about the new state.")])])])])]),e("h5",[t._v("Slots")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("header")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("paginatorstart")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("paginatorend")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("list")]),e("td",[t._v("data: Value of the component "),e("br"),t._v(" index: Index of the list")])]),e("tr",[e("td",[t._v("grid")]),e("td",[t._v("data: Value of the component "),e("br"),t._v(" index: Index of the grid")])]),e("tr",[e("td",[t._v("empty")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("footer")]),e("td",[t._v("-")])])])])]),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-dataview")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-dataview-list")]),e("td",[t._v("Container element in list layout.")])]),e("tr",[e("td",[t._v("p-dataview-grid")]),e("td",[t._v("Container element in grid layout.")])]),e("tr",[e("td",[t._v("p-dataview-header")]),e("td",[t._v("Header section.")])]),e("tr",[e("td",[t._v("p-dataview-footer")]),e("td",[t._v("Footer section.")])]),e("tr",[e("td",[t._v("p-dataview-content")]),e("td",[t._v("Container of items.")])]),e("tr",[e("td",[t._v("p-dataview-emptymessage")]),e("td",[t._v("Empty message element.")])])])]),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/primefaces/primevue2/tree/2.x/src/showcase/dataview",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])]),e("CodeHighlight",[[t._v(' <DataView :value="products" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField"> <template #header> <div class="grid grid-nogutter"> <div class="col-6" style="text-align: left"> <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)"/> </div> <div class="col-6" style="text-align: right"> <DataViewLayoutOptions v-model="layout" /> </div> </div> </template> <template #list="slotProps"> <div class="col-12"> <div class="product-list-item"> <img :src="$publicUrl(\'demo/images/product/\' + slotProps.data.image)" :alt="slotProps.data.name"/> <div class="product-list-detail"> <div class="product-name">{{slotProps.data.name}}</div> <div class="product-description">{{slotProps.data.description}}</div> <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false"></Rating> <i class="pi pi-tag product-category-icon"></i><span class="product-category">{{slotProps.data.category}}</span> </div> <div class="product-list-action"> <span class="product-price">${{slotProps.data.price}}</span> <Button icon="pi pi-shopping-cart" label="Add to Cart" :disabled="slotProps.data.inventoryStatus === \'OUTOFSTOCK\'"></Button> <span :class="\'product-badge status-\'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span> </div> </div> </div> </template> <template #grid="slotProps"> <div class="col-12 md:col-4"> <div class="product-grid-item card"> <div class="product-grid-item-top"> <div> <i class="pi pi-tag product-category-icon"></i> <span class="product-category">{{slotProps.data.category}}</span> </div> <span :class="\'product-badge status-\'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span> </div> <div class="product-grid-item-content"> <img :src="$publicUrl(\'demo/images/product/\' + slotProps.data.image)" :alt="slotProps.data.name"/> <div class="product-name">{{slotProps.data.name}}</div> <div class="product-description">{{slotProps.data.description}}</div> <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false"></Rating> </div> <div class="product-grid-item-bottom"> <span class="product-price">${{slotProps.data.price}}</span> <Button icon="pi pi-shopping-cart" :disabled="slotProps.data.inventoryStatus === \'OUTOFSTOCK\'"></Button> </div> </div> </div> </template> </DataView> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import ProductService from '../../service/ProductService'; export default { data() { return { products: null, layout: 'grid', sortKey: null, sortOrder: null, sortField: null, sortOptions: [ {label: 'Price High to Low', value: '!price'}, {label: 'Price Low to High', value: 'price'}, ] } }, productService: null, created() { this.productService = new ProductService(); }, mounted() { this.productService.getProducts().then(data => this.products = data); }, methods: { onSortChange(event){ const value = event.value.value; const sortValue = event.value; if (value.indexOf('!') === 0) { this.sortOrder = -1; this.sortField = value.substring(1, value.length); this.sortKey = sortValue; } else { this.sortOrder = 1; this.sortField = value; this.sortKey = sortValue; } } } } ")])],1)],1)],1)}),[],!1,null,null).exports;t("default",i({data:function(){return{products:null,layout:"grid",sortKey:null,sortOrder:null,sortField:null,sortOptions:[{label:"Price High to Low",value:"!price"},{label:"Price Low to High",value:"price"}]}},productService:null,created:function(){this.productService=new a},mounted:function(){var t=this;this.productService.getProducts().then((function(e){return t.products=e}))},methods:{onSortChange:function(t){var e=t.value.value,a=t.value;0===e.indexOf("!")?(this.sortOrder=-1,this.sortField=e.substring(1,e.length),this.sortKey=a):(this.sortOrder=1,this.sortField=e,this.sortKey=a)}},components:{DataViewDoc:o}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("DataView",{attrs:{value:t.products,layout:t.layout,paginator:!0,rows:9,sortOrder:t.sortOrder,sortField:t.sortField},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"grid grid-nogutter"},[e("div",{staticClass:"col-6",staticStyle:{"text-align":"left"}},[e("Dropdown",{attrs:{options:t.sortOptions,optionLabel:"label",placeholder:"Sort By Price"},on:{change:function(e){return t.onSortChange(e)}},model:{value:t.sortKey,callback:function(e){t.sortKey=e},expression:"sortKey"}})],1),e("div",{staticClass:"col-6",staticStyle:{"text-align":"right"}},[e("DataViewLayoutOptions",{model:{value:t.layout,callback:function(e){t.layout=e},expression:"layout"}})],1)])]},proxy:!0},{key:"list",fn:function(a){return[e("div",{staticClass:"col-12"},[e("div",{staticClass:"product-list-item"},[e("img",{attrs:{src:t.$publicUrl("demo/images/product/"+a.data.image),alt:a.data.name}}),e("div",{staticClass:"product-list-detail"},[e("div",{staticClass:"product-name"},[t._v(t._s(a.data.name))]),e("div",{staticClass:"product-description"},[t._v(t._s(a.data.description))]),e("Rating",{attrs:{value:a.data.rating,readonly:!0,cancel:!1}}),e("i",{staticClass:"pi pi-tag product-category-icon"}),e("span",{staticClass:"product-category"},[t._v(t._s(a.data.category))])],1),e("div",{staticClass:"product-list-action"},[e("span",{staticClass:"product-price"},[t._v("$"+t._s(a.data.price))]),e("Button",{attrs:{icon:"pi pi-shopping-cart",label:"Add to Cart",disabled:"OUTOFSTOCK"===a.data.inventoryStatus}}),e("span",{class:"product-badge status-"+a.data.inventoryStatus.toLowerCase()},[t._v(t._s(a.data.inventoryStatus))])],1)])])]}},{key:"grid",fn:function(a){return[e("div",{staticClass:"col-12 md:col-4"},[e("div",{staticClass:"product-grid-item card"},[e("div",{staticClass:"product-grid-item-top"},[e("div",[e("i",{staticClass:"pi pi-tag product-category-icon"}),e("span",{staticClass:"product-category"},[t._v(t._s(a.data.category))])]),e("span",{class:"product-badge status-"+a.data.inventoryStatus.toLowerCase()},[t._v(t._s(a.data.inventoryStatus))])]),e("div",{staticClass:"product-grid-item-content"},[e("img",{attrs:{src:t.$publicUrl("demo/images/product/"+a.data.image),alt:a.data.name}}),e("div",{staticClass:"product-name"},[t._v(t._s(a.data.name))]),e("div",{staticClass:"product-description"},[t._v(t._s(a.data.description))]),e("Rating",{attrs:{value:a.data.rating,readonly:!0,cancel:!1}})],1),e("div",{staticClass:"product-grid-item-bottom"},[e("span",{staticClass:"product-price"},[t._v("$"+t._s(a.data.price))]),e("Button",{attrs:{icon:"pi pi-shopping-cart",disabled:"OUTOFSTOCK"===a.data.inventoryStatus}})],1)])])]}}])})],1)]),e("DataViewDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("DataView")]),e("p",[t._v("DataView displays data in grid or list layout with pagination and sorting features.")])])])}],!1,null,"d11e1414").exports)}}}));
//# sourceMappingURL=DataViewDemo-legacy-BB027Etp.js.map
