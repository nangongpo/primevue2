System.register(["./ProductService-legacy-Ctw4T0RP.js","./app.component-legacy-7lS-4wLG.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(t,e){"use strict";var a,o;return{setters:[function(t){a=t.P},function(t){o=t.n},null,null,null,null],execute:function(){var e=document.createElement("style");e.textContent=".p-dropdown[data-v-46c8ec97]{width:14rem;font-weight:400}.product-name[data-v-46c8ec97]{font-size:1.5rem;font-weight:700}.product-description[data-v-46c8ec97]{margin:0 0 1rem}.product-category-icon[data-v-46c8ec97]{vertical-align:middle;margin-right:.5rem}.product-category[data-v-46c8ec97]{font-weight:600;vertical-align:middle}[data-v-46c8ec97] .product-list-item{display:flex;align-items:center;padding:1rem;width:100%}[data-v-46c8ec97] .product-list-item img{width:150px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-right:2rem}[data-v-46c8ec97] .product-list-item .product-list-detail{flex:1 1 0}[data-v-46c8ec97] .product-list-item .p-rating{margin:0 0 .5rem}[data-v-46c8ec97] .product-list-item .product-price{font-size:1.5rem;font-weight:600;margin-bottom:.5rem;align-self:flex-end}[data-v-46c8ec97] .product-list-item .product-list-action{display:flex;flex-direction:column}[data-v-46c8ec97] .product-list-item .p-button{margin-bottom:.5rem}[data-v-46c8ec97] .product-grid-item{margin:.5rem;border:1px solid #dee2e6}[data-v-46c8ec97] .product-grid-item .product-grid-item-top,[data-v-46c8ec97] .product-grid-item .product-grid-item-bottom{display:flex;align-items:center;justify-content:space-between}[data-v-46c8ec97] .product-grid-item img{width:75%;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin:2rem 0}[data-v-46c8ec97] .product-grid-item .product-grid-item-content{text-align:center}[data-v-46c8ec97] .product-grid-item .product-price{font-size:1.5rem;font-weight:600}@media screen and (max-width: 576px){.product-list-item[data-v-46c8ec97]{flex-direction:column;align-items:center}.product-list-item img[data-v-46c8ec97]{width:75%;margin:2rem 0}.product-list-item .product-list-detail[data-v-46c8ec97]{text-align:center}.product-list-item .product-price[data-v-46c8ec97]{align-self:center}.product-list-item .product-list-action[data-v-46c8ec97]{display:flex;flex-direction:column}.product-list-item .product-list-action[data-v-46c8ec97]{margin-top:2rem;flex-direction:row;justify-content:space-between;align-items:center;width:100%}}\n/*$vite$:1*/",document.head.appendChild(e);var n=o({name:"Documentation",data:function(){return{importCode:{basic:"\nimport DataView from 'primevue2/dataview';\n        "},baseCode:{basic:"\nexport default {\n    data() {\n        return {\n            cars: null,\n        }\n    },\n    carService: null,\n    created() {\n        this.carService = new CarService();\n    },\n    mounted() {\n        this.carService.getCarsLarge().then(data => this.cars = data);\n    }\n}\n        "},layoutsCode:{basic:'\n<template #list="slotProps">\n\t<div class="col-12">\n        <div class="car-details">\n            <div>\n                <img :src="\'demo/images/car/\' + slotProps.data.brand + \'.png\'" :alt="slotProps.data.brand"/>\n                <div class="grid">\n                    <div class="col-12">Vin: <b>{{slotProps.data.vin}}</b></div>\n                    <div class="col-12">Year: <b>{{slotProps.data.year}}</b></div>\n                    <div class="col-12">Brand: <b>{{slotProps.data.brand}}</b></div>\n                    <div class="col-12">Color: <b>{{slotProps.data.color}}</b></div>\n                </div>\n            </div>\n            <Button icon="pi pi-search"></Button>\n        </div>\n    </div>\n</template>\n<template #grid="slotProps">\n\t<div style="padding: .5em" class="col-12 md:col-3">\n\t\t<Panel :header="slotProps.data.vin" style="text-align: center">\n\t\t\t<img :src="\'demo/images/car/\' + slotProps.data.brand + \'.png\'" :alt="slotProps.data.brand"/>\n\t\t\t<div class="car-detail">{{slotProps.data.year}} - {{slotProps.data.color}}</div>\n\t\t\t<Button icon="pi pi-search"></Button>\n\t\t</Panel>\n\t</div>\n</template>\n        '},sectionsCode:{basic:"\n<template #header>Header Content</template>\n<template #footer>Footer Content</template>\n        "},emptyMessageCode:{basic:"\n<template #empty>No records found.</template>\n        "},dataViewLayoutOptionsCode:{basic:'\n<DataView :value="cars" :layout="layout">\n\t<template #header>\n\t\t<DataViewLayoutOptions v-model="layout"></DataViewLayoutOptions>\n\t</template>\n\t<template #list="slotProps" >\n\t\t<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n\t</template>\n\t<template #grid="slotProps">\n\t\t<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n\t</template>\n</DataView>\n        '},paginatorCode:{basic:'\n<DataView :value="cars" :layout="layout" paginatorPosition="both" :paginator="true" :rows="20">\n\t<template #paginatorstart>\n\t\t<Button type="button" icon="pi pi-refresh"/>\n\t</template>\n\t<template #paginatorend>\n\t\t<Button type="button" icon="pi pi-search" />\n\t</template>\n\t<template #list="slotProps" >\n\t\t<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n\t</template>\n\t<template #grid="slotProps">\n\t\t<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n\t</template>\n</DataView>\n        '},sortingCode:{basic:'\n<DataView :value="cars" :layout="layout" :sortOrder="sortOrder" :sortField="sortField">\n    <template #header>\n        <div class="grid grid-nogutter">\n            <div class="col-6" style="text-align: left">\n                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By" @change="onSortChange($event)"/>\n            </div>\n            <div class="col-6" style="text-align: right">\n                <DataViewLayoutOptions v-model="layout" />\n            </div>\n        </div>\n    </template>\n\t<template #list="slotProps" >\n\t\t<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n\t</template>\n\t<template #grid="slotProps">\n\t\t<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n\t</template>\n</DataView>\n        '},sortingCode2:{basic:"\nexport default {\n    data() {\n        return {\n            cars: null,\n            layout: 'list',\n            sortKey: null,\n            sortOrder: null,\n            sortField: null,\n            sortOptions: [\n                {label: 'Newest First', value: '!year'},\n                {label: 'Oldest First', value: 'year'},\n                {label: 'Brand', value: 'brand'}\n            ]\n        }\n    },\n    carService: null,\n    created() {\n        this.carService = new CarService();\n    },\n    mounted() {\n        this.carService.getCarsLarge().then(data => this.cars = data);\n    },\n    methods: {\n        onSortChange(event){\n            const value = event.value.value;\n            const sortValue = event.value;\n\n            if (value.indexOf('!') === 0) {\n                this.sortOrder = -1;\n                this.sortField = value.substring(1, value.length);\n                this.sortKey = sortValue;\n            }\n            else {\n                this.sortOrder = 1;\n                this.sortField = value;\n                this.sortKey = sortValue;\n            }\n        }\n    }\n}\n        "},lazyLoadingCode:{basic:'\n<DataView :value="cars" :layout="layout" :paginator="true" :rows="20" :lazy="true" @page="onPage($event)">\n\t<template #list="slotProps" >\n\t\t<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n\t</template>\n\t<template #grid="slotProps">\n\t\t<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n\t</template>\n</DataView>\n        '},lazyLoadingCode2:{basic:"\nexport default {\n    data() {\n        return {\n            cars: null,\n            layout: 'list'\n        }\n    },\n    carService: null,\n    mounted() {\n        this.cars = //initialize the first chunk of data between 0 and 20\n    },\n    methods: {\n        onPage(event){\n            this.cars = //load the data between (event.first) and (event.first + event.rows) from a remote datasource\n        }\n    }\n}\n        "}}}},(function(){var t=this,e=t._self._c;return e("div",[e("h5",[t._v("Import")]),e("DocSectionCode",{attrs:{code:t.importCode,importCode:""}}),e("h5",[t._v("PrimeFlex")]),t._m(0),e("h5",[t._v("Getting Started")]),e("p",[t._v(" DataView requires a collection of items as its value and one or more templates depending on the layout mode e.g. list and grid. Throughout the samples, a car interface having vin, brand, year and color properties are used to define an object to be displayed by the dataview. Cars are loaded by a CarService that connects to a server to fetch the cars. ")]),e("DocSectionCode",{attrs:{code:t.baseCode,importCode:""}}),e("h5",[t._v("Layouts")]),t._m(1),e("p",[t._v(" Note that there is no restriction to use both layouts at the same time, you may configure only one layout using the layout property with the corresponding template. ")]),e("DocSectionCode",{attrs:{code:t.layoutsCode}}),e("h5",[t._v("Sections")]),e("p",[t._v("Header and Footer are the two templates that are capable of displaying custom content.")]),e("DocSectionCode",{attrs:{code:t.sectionsCode}}),e("h5",[t._v("Empty Message")]),t._m(2),e("DocSectionCode",{attrs:{code:t.emptyMessageCode}}),e("h5",[t._v("DataViewLayoutOptions")]),e("p",[t._v(" When both layout modes are enabled in DataView, a UI element would be necessary to let the user toggle between the view. DataViewLayoutOptions is a helper component to display a buttonset to choose the layout mode in DataView. Location of the DataViewLayoutOptions should be inside the DataView component. If you prefer a different UI element you can create your own that updates the layout property of the DataView. ")]),e("DocSectionCode",{attrs:{code:t.dataViewLayoutOptionsCode}}),e("h5",[t._v("Paginator")]),t._m(3),e("DocSectionCode",{attrs:{code:t.paginatorCode}}),e("h5",[t._v("Sorting")]),t._m(4),e("DocSectionCode",{attrs:{code:t.sortingCode}}),e("DocSectionCode",{attrs:{code:t.sortingCode2,importCode:""}}),e("h5",[t._v("Lazy Loading")]),t._m(5),e("DocSectionCode",{attrs:{code:t.lazyLoadingCode}}),e("DocSectionCode",{attrs:{code:t.lazyLoadingCode2,importCode:""}}),e("h5",[t._v("Properties")]),t._m(6),e("h5",[t._v("Events")]),t._m(7),e("h5",[t._v("Slots")]),t._m(8),e("h5",[t._v("Styling")]),e("p",[t._v(" Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page. ")],1),t._m(9),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1)}),[function(){var t=this,e=t._self._c;return e("p",[t._v(" DataView utilizes PrimeFlex library so it needs to be installed before getting started. Refer to "),e("a",{attrs:{href:"https://www.primefaces.org/primeflex/gridsystem"}},[t._v("PrimeFlex")]),t._v(" documentation for details. ")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" DataView has two layout modes; "),e("i",[t._v("list")]),t._v(" and "),e("i",[t._v("grid")]),t._v(' where a separate template is used to render an item in each mode. In list mode name of the template is "list" whereas in grid mode it is "grid". ')])},function(){var t=this,e=t._self._c;return e("p",[t._v("Where there is no data to display, the optional "),e("i",[t._v("empty")]),t._v(" template can be used to display information.")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number of page links to display. To customize the left and right side of the paginators, use "),e("i",[t._v("paginatorstart")]),t._v(" and "),e("i",[t._v("paginatorend")]),t._v(" templates. ")])},function(){var t=this,e=t._self._c;return e("p",[e("i",[t._v("sortField")]),t._v(" and "),e("i",[t._v("sortOrder")]),t._v(" properties are available for the sorting functionality, for flexibility there is no built-in UI available so that a custom UI can be used for the sorting element. Here is an example that uses a dropdown where simply updating the sortField-sortOrder bindings of the DataView initiates sorting. ")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" Lazy loading is useful to deal with huge datasets, in order to implement lazy loading use the pagination and utilize the "),e("i",[t._v("page")]),t._v(" callback to load your data from the backend. Pagination in this case needs to display the logical number of records bound to the "),e("i",[t._v("totalRecords")]),t._v(" property so that paginator can display itself according to the total records although you'd only need to load the data of the current page. ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("array")]),e("td",[t._v("null")]),e("td",[t._v("An array of objects to display.")])]),e("tr",[e("td",[t._v("layout")]),e("td",[t._v("string")]),e("td",[t._v("list")]),e("td",[t._v('Layout of the items, valid values are "list" and "grid".')])]),e("tr",[e("td",[t._v("rows")]),e("td",[t._v("number")]),e("td",[t._v("0")]),e("td",[t._v("Number of rows to display per page.")])]),e("tr",[e("td",[t._v("first")]),e("td",[t._v("number")]),e("td",[t._v("0")]),e("td",[t._v("Index of the first record to render.")])]),e("tr",[e("td",[t._v("totalRecords")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v("Number of total records, defaults to length of value when not defined.")])]),e("tr",[e("td",[t._v("paginator")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("When specified as true, enables the pagination.")])]),e("tr",[e("td",[t._v("paginatorPosition")]),e("td",[t._v("string")]),e("td",[t._v("bottom")]),e("td",[t._v('Position of the paginator, options are "top","bottom" or "both".')])]),e("tr",[e("td",[t._v("alwaysShowPaginator")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Whether to show it even there is only one page.")])]),e("tr",[e("td",[t._v("paginatorTemplate")]),e("td",[t._v("string")]),e("td",[t._v("FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown")]),e("td",[t._v("Template of the paginator.")])]),e("tr",[e("td",[t._v("pageLinkSize")]),e("td",[t._v("number")]),e("td",[t._v("5")]),e("td",[t._v("Number of page links to display.")])]),e("tr",[e("td",[t._v("rowsPerPageOptions")]),e("td",[t._v("array")]),e("td",[t._v("null")]),e("td",[t._v("Array of integer values to display inside rows per page dropdown.")])]),e("tr",[e("td",[t._v("currentPageReportTemplate")]),e("td",[t._v("string")]),e("td",[t._v("({currentPage} of {totalPages})")]),e("td",[t._v("Template of the current page report element.")])]),e("tr",[e("td",[t._v("sortField")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Property name or a getter function of data to use in sorting by default.")])]),e("tr",[e("td",[t._v("sortOrder")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v("Order to sort the data by default.")])]),e("tr",[e("td",[t._v("lazy")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Defines if data is loaded and interacted with in lazy manner.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("page")]),e("td",[t._v(" event.page: New page number "),e("br"),t._v(" event.first: Index of first record "),e("br"),t._v(" event.rows: Number of rows to display in new page "),e("br"),t._v(" event.pageCount: Total number of pages ")]),e("td",[t._v("Callback to invoke when page changes, the event object contains information about the new state.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("header")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("paginatorstart")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("paginatorend")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("list")]),e("td",[t._v(" data: Value of the component "),e("br"),t._v(" index: Index of the list ")])]),e("tr",[e("td",[t._v("grid")]),e("td",[t._v(" data: Value of the component "),e("br"),t._v(" index: Index of the grid ")])]),e("tr",[e("td",[t._v("empty")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("footer")]),e("td",[t._v("-")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-dataview")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-dataview-list")]),e("td",[t._v("Container element in list layout.")])]),e("tr",[e("td",[t._v("p-dataview-grid")]),e("td",[t._v("Container element in grid layout.")])]),e("tr",[e("td",[t._v("p-dataview-header")]),e("td",[t._v("Header section.")])]),e("tr",[e("td",[t._v("p-dataview-footer")]),e("td",[t._v("Footer section.")])]),e("tr",[e("td",[t._v("p-dataview-content")]),e("td",[t._v("Container of items.")])]),e("tr",[e("td",[t._v("p-dataview-emptymessage")]),e("td",[t._v("Empty message element.")])])])])])}],!1,null,null).exports,i=o({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<DataView :value="products" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">\n    <template #header>\n        <div class="grid grid-nogutter">\n            <div class="col-6" style="text-align: left">\n                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)"/>\n            </div>\n            <div class="col-6" style="text-align: right">\n                <DataViewLayoutOptions v-model="layout" />\n            </div>\n        </div>\n    </template>\n\n    <template #list="slotProps">\n        <div class="col-12">\n            <div class="product-list-item">\n                <img :src="\'demo/images/product/\' + slotProps.data.image" :alt="slotProps.data.name"/>\n                <div class="product-list-detail">\n                    <div class="product-name">{{slotProps.data.name}}</div>\n                    <div class="product-description">{{slotProps.data.description}}</div>\n                    <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>\n                    <i class="pi pi-tag product-category-icon"></i><span class="product-category">{{slotProps.data.category}}</span>\n                </div>\n                <div class="product-list-action">\n                    <span class="product-price">${{slotProps.data.price}}</span>\n                    <Button icon="pi pi-shopping-cart" label="Add to Cart" :disabled="slotProps.data.inventoryStatus === \'OUTOFSTOCK\'"></Button>\n                    <span :class="\'product-badge status-\'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>\n                </div>\n            </div>\n        </div>\n    </template>\n\n    <template #grid="slotProps">\n        <div class="col-12 md:col-4">\n            <div class="product-grid-item card">\n                <div class="product-grid-item-top">\n                    <div>\n                        <i class="pi pi-tag product-category-icon"></i>\n                        <span class="product-category">{{slotProps.data.category}}</span>\n                    </div>\n                    <span :class="\'product-badge status-\'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>\n                </div>\n                <div class="product-grid-item-content">\n                    <img :src="\'demo/images/product/\' + slotProps.data.image" :alt="slotProps.data.name"/>\n                    <div class="product-name">{{slotProps.data.name}}</div>\n                    <div class="product-description">{{slotProps.data.description}}</div>\n                    <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>\n                </div>\n                <div class="product-grid-item-bottom">\n                    <span class="product-price">${{slotProps.data.price}}</span>\n                    <Button icon="pi pi-shopping-cart" :disabled="slotProps.data.inventoryStatus === \'OUTOFSTOCK\'"></Button>\n                </div>\n            </div>\n        </div>\n    </template>\n</DataView>\n        '},sourceCode2:{basic:"\nimport ProductService from '../../service/ProductService';\n\nexport default {\n    data() {\n        return {\n            products: null,\n            layout: 'grid',\n            sortKey: null,\n            sortOrder: null,\n            sortField: null,\n            sortOptions: [\n                {label: 'Price High to Low', value: '!price'},\n                {label: 'Price Low to High', value: 'price'},\n            ]\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProducts().then(data => this.products = data);\n    },\n    methods: {\n        onSortChange(event){\n            const value = event.value.value;\n            const sortValue = event.value;\n\n            if (value.indexOf('!') === 0) {\n                this.sortOrder = -1;\n                this.sortField = value.substring(1, value.length);\n                this.sortKey = sortValue;\n            }\n            else {\n                this.sortOrder = 1;\n                this.sortField = value;\n                this.sortKey = sortValue;\n            }\n        }\n    }\n}\n        "}}}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("DocSectionCode",{attrs:{code:t.sourceCode1}}),e("DocSectionCode",{attrs:{code:t.sourceCode2,importCode:""}})],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/dataview",target:"_blank",rel:"noopener noreferrer"}},[t("span",[this._v("View on GitHub")])])}],!1,null,null).exports,r=o({components:{Documentation:n,SourceCode:i}},(function(){var t=this._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("Documentation")],1),t("TabPanel",{attrs:{header:"Source"}},[t("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;t("default",o({data:function(){return{products:null,layout:"grid",sortKey:null,sortOrder:null,sortField:null,sortOptions:[{label:"Price High to Low",value:"!price"},{label:"Price Low to High",value:"price"}]}},productService:null,created:function(){this.productService=new a},mounted:function(){var t=this;this.productService.getProducts().then((function(e){return t.products=e}))},methods:{onSortChange:function(t){var e=t.value.value,a=t.value;0===e.indexOf("!")?(this.sortOrder=-1,this.sortField=e.substring(1,e.length),this.sortKey=a):(this.sortOrder=1,this.sortField=e,this.sortKey=a)}},components:{DataViewDoc:r}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("DataView",{attrs:{value:t.products,layout:t.layout,paginator:!0,rows:9,sortOrder:t.sortOrder,sortField:t.sortField},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"grid grid-nogutter"},[e("div",{staticClass:"col-6",staticStyle:{"text-align":"left"}},[e("Dropdown",{attrs:{options:t.sortOptions,optionLabel:"label",placeholder:"Sort By Price"},on:{change:function(e){return t.onSortChange(e)}},model:{value:t.sortKey,callback:function(e){t.sortKey=e},expression:"sortKey"}})],1),e("div",{staticClass:"col-6",staticStyle:{"text-align":"right"}},[e("DataViewLayoutOptions",{model:{value:t.layout,callback:function(e){t.layout=e},expression:"layout"}})],1)])]},proxy:!0},{key:"list",fn:function(a){return[e("div",{staticClass:"col-12"},[e("div",{staticClass:"product-list-item"},[e("img",{attrs:{src:t.$publicUrl("demo/images/product/"+a.data.image),alt:a.data.name}}),e("div",{staticClass:"product-list-detail"},[e("div",{staticClass:"product-name"},[t._v(t._s(a.data.name))]),e("div",{staticClass:"product-description"},[t._v(t._s(a.data.description))]),e("Rating",{attrs:{value:a.data.rating,readonly:!0,cancel:!1}}),e("i",{staticClass:"pi pi-tag product-category-icon"}),e("span",{staticClass:"product-category"},[t._v(t._s(a.data.category))])],1),e("div",{staticClass:"product-list-action"},[e("span",{staticClass:"product-price"},[t._v("$"+t._s(a.data.price))]),e("Button",{attrs:{icon:"pi pi-shopping-cart",label:"Add to Cart",disabled:"OUTOFSTOCK"===a.data.inventoryStatus}}),e("span",{class:"product-badge status-"+a.data.inventoryStatus.toLowerCase()},[t._v(t._s(a.data.inventoryStatus))])],1)])])]}},{key:"grid",fn:function(a){return[e("div",{staticClass:"col-12 md:col-4"},[e("div",{staticClass:"product-grid-item card"},[e("div",{staticClass:"product-grid-item-top"},[e("div",[e("i",{staticClass:"pi pi-tag product-category-icon"}),e("span",{staticClass:"product-category"},[t._v(t._s(a.data.category))])]),e("span",{class:"product-badge status-"+a.data.inventoryStatus.toLowerCase()},[t._v(t._s(a.data.inventoryStatus))])]),e("div",{staticClass:"product-grid-item-content"},[e("img",{attrs:{src:t.$publicUrl("demo/images/product/"+a.data.image),alt:a.data.name}}),e("div",{staticClass:"product-name"},[t._v(t._s(a.data.name))]),e("div",{staticClass:"product-description"},[t._v(t._s(a.data.description))]),e("Rating",{attrs:{value:a.data.rating,readonly:!0,cancel:!1}})],1),e("div",{staticClass:"product-grid-item-bottom"},[e("span",{staticClass:"product-price"},[t._v("$"+t._s(a.data.price))]),e("Button",{attrs:{icon:"pi pi-shopping-cart",disabled:"OUTOFSTOCK"===a.data.inventoryStatus}})],1)])])]}}])})],1)]),e("DataViewDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("DataView")]),e("p",[t._v("DataView displays data in grid or list layout with pagination and sorting features.")])])])}],!1,null,"46c8ec97").exports)}}}));
//# sourceMappingURL=index-legacy-C6P_O4Ri.js.map
