import{P as i}from"./ProductService-B_eIBIF9.js";import{n as r}from"./app.component-BAbvz7X_.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const s={name:"Documentation",data(){return{importCode:{basic:"\nimport DataView from 'primevue2/dataview';\n        "},baseCode:{basic:"\nexport default {\n    data() {\n        return {\n            cars: null,\n        }\n    },\n    carService: null,\n    created() {\n        this.carService = new CarService();\n    },\n    mounted() {\n        this.carService.getCarsLarge().then(data => this.cars = data);\n    }\n}\n        "},layoutsCode:{basic:'\n<template #list="slotProps">\n	<div class="col-12">\n        <div class="car-details">\n            <div>\n                <img :src="\'demo/images/car/\' + slotProps.data.brand + \'.png\'" :alt="slotProps.data.brand"/>\n                <div class="grid">\n                    <div class="col-12">Vin: <b>{{slotProps.data.vin}}</b></div>\n                    <div class="col-12">Year: <b>{{slotProps.data.year}}</b></div>\n                    <div class="col-12">Brand: <b>{{slotProps.data.brand}}</b></div>\n                    <div class="col-12">Color: <b>{{slotProps.data.color}}</b></div>\n                </div>\n            </div>\n            <Button icon="pi pi-search"></Button>\n        </div>\n    </div>\n</template>\n<template #grid="slotProps">\n	<div style="padding: .5em" class="col-12 md:col-3">\n		<Panel :header="slotProps.data.vin" style="text-align: center">\n			<img :src="\'demo/images/car/\' + slotProps.data.brand + \'.png\'" :alt="slotProps.data.brand"/>\n			<div class="car-detail">{{slotProps.data.year}} - {{slotProps.data.color}}</div>\n			<Button icon="pi pi-search"></Button>\n		</Panel>\n	</div>\n</template>\n        '},sectionsCode:{basic:"\n<template #header>Header Content</template>\n<template #footer>Footer Content</template>\n        "},emptyMessageCode:{basic:"\n<template #empty>No records found.</template>\n        "},dataViewLayoutOptionsCode:{basic:'\n<DataView :value="cars" :layout="layout">\n	<template #header>\n		<DataViewLayoutOptions v-model="layout"></DataViewLayoutOptions>\n	</template>\n	<template #list="slotProps" >\n		<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n	</template>\n	<template #grid="slotProps">\n		<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n	</template>\n</DataView>\n        '},paginatorCode:{basic:'\n<DataView :value="cars" :layout="layout" paginatorPosition="both" :paginator="true" :rows="20">\n	<template #paginatorstart>\n		<Button type="button" icon="pi pi-refresh"/>\n	</template>\n	<template #paginatorend>\n		<Button type="button" icon="pi pi-search" />\n	</template>\n	<template #list="slotProps" >\n		<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n	</template>\n	<template #grid="slotProps">\n		<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n	</template>\n</DataView>\n        '},sortingCode:{basic:'\n<DataView :value="cars" :layout="layout" :sortOrder="sortOrder" :sortField="sortField">\n    <template #header>\n        <div class="grid grid-nogutter">\n            <div class="col-6" style="text-align: left">\n                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By" @change="onSortChange($event)"/>\n            </div>\n            <div class="col-6" style="text-align: right">\n                <DataViewLayoutOptions v-model="layout" />\n            </div>\n        </div>\n    </template>\n	<template #list="slotProps" >\n		<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n	</template>\n	<template #grid="slotProps">\n		<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n	</template>\n</DataView>\n        '},sortingCode2:{basic:"\nexport default {\n    data() {\n        return {\n            cars: null,\n            layout: 'list',\n            sortKey: null,\n            sortOrder: null,\n            sortField: null,\n            sortOptions: [\n                {label: 'Newest First', value: '!year'},\n                {label: 'Oldest First', value: 'year'},\n                {label: 'Brand', value: 'brand'}\n            ]\n        }\n    },\n    carService: null,\n    created() {\n        this.carService = new CarService();\n    },\n    mounted() {\n        this.carService.getCarsLarge().then(data => this.cars = data);\n    },\n    methods: {\n        onSortChange(event){\n            const value = event.value.value;\n            const sortValue = event.value;\n\n            if (value.indexOf('!') === 0) {\n                this.sortOrder = -1;\n                this.sortField = value.substring(1, value.length);\n                this.sortKey = sortValue;\n            }\n            else {\n                this.sortOrder = 1;\n                this.sortField = value;\n                this.sortKey = sortValue;\n            }\n        }\n    }\n}\n        "},lazyLoadingCode:{basic:'\n<DataView :value="cars" :layout="layout" :paginator="true" :rows="20" :lazy="true" @page="onPage($event)">\n	<template #list="slotProps" >\n		<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n	</template>\n	<template #grid="slotProps">\n		<div>Vin: <b>{{slotProps.data.vin}}</b></div>\n	</template>\n</DataView>\n        '},lazyLoadingCode2:{basic:"\nexport default {\n    data() {\n        return {\n            cars: null,\n            layout: 'list'\n        }\n    },\n    carService: null,\n    mounted() {\n        this.cars = //initialize the first chunk of data between 0 and 20\n    },\n    methods: {\n        onPage(event){\n            this.cars = //load the data between (event.first) and (event.first + event.rows) from a remote datasource\n        }\n    }\n}\n        "}}}};var d=function(){var t=this,a=t._self._c;return a("div",[a("h5",[t._v("Import")]),a("DocSectionCode",{attrs:{code:t.importCode,importCode:""}}),a("h5",[t._v("PrimeFlex")]),t._m(0),a("h5",[t._v("Getting Started")]),a("p",[t._v(" DataView requires a collection of items as its value and one or more templates depending on the layout mode e.g. list and grid. Throughout the samples, a car interface having vin, brand, year and color properties are used to define an object to be displayed by the dataview. Cars are loaded by a CarService that connects to a server to fetch the cars. ")]),a("DocSectionCode",{attrs:{code:t.baseCode,importCode:""}}),a("h5",[t._v("Layouts")]),t._m(1),a("p",[t._v(" Note that there is no restriction to use both layouts at the same time, you may configure only one layout using the layout property with the corresponding template. ")]),a("DocSectionCode",{attrs:{code:t.layoutsCode}}),a("h5",[t._v("Sections")]),a("p",[t._v("Header and Footer are the two templates that are capable of displaying custom content.")]),a("DocSectionCode",{attrs:{code:t.sectionsCode}}),a("h5",[t._v("Empty Message")]),t._m(2),a("DocSectionCode",{attrs:{code:t.emptyMessageCode}}),a("h5",[t._v("DataViewLayoutOptions")]),a("p",[t._v(" When both layout modes are enabled in DataView, a UI element would be necessary to let the user toggle between the view. DataViewLayoutOptions is a helper component to display a buttonset to choose the layout mode in DataView. Location of the DataViewLayoutOptions should be inside the DataView component. If you prefer a different UI element you can create your own that updates the layout property of the DataView. ")]),a("DocSectionCode",{attrs:{code:t.dataViewLayoutOptionsCode}}),a("h5",[t._v("Paginator")]),t._m(3),a("DocSectionCode",{attrs:{code:t.paginatorCode}}),a("h5",[t._v("Sorting")]),t._m(4),a("DocSectionCode",{attrs:{code:t.sortingCode}}),a("DocSectionCode",{attrs:{code:t.sortingCode2,importCode:""}}),a("h5",[t._v("Lazy Loading")]),t._m(5),a("DocSectionCode",{attrs:{code:t.lazyLoadingCode}}),a("DocSectionCode",{attrs:{code:t.lazyLoadingCode2,importCode:""}}),a("h5",[t._v("Properties")]),t._m(6),a("h5",[t._v("Events")]),t._m(7),a("h5",[t._v("Slots")]),t._m(8),a("h5",[t._v("Styling")]),a("p",[t._v(" Following is the list of structural style classes, for theming classes visit "),a("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page. ")],1),t._m(9),a("h5",[t._v("Dependencies")]),a("p",[t._v("None.")])],1)},n=[function(){var e=this,t=e._self._c;return t("p",[e._v(" DataView utilizes PrimeFlex library so it needs to be installed before getting started. Refer to "),t("a",{attrs:{href:"https://www.primefaces.org/primeflex/gridsystem"}},[e._v("PrimeFlex")]),e._v(" documentation for details. ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" DataView has two layout modes; "),t("i",[e._v("list")]),e._v(" and "),t("i",[e._v("grid")]),e._v(' where a separate template is used to render an item in each mode. In list mode name of the template is "list" whereas in grid mode it is "grid". ')])},function(){var e=this,t=e._self._c;return t("p",[e._v("Where there is no data to display, the optional "),t("i",[e._v("empty")]),e._v(" template can be used to display information.")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number of page links to display. To customize the left and right side of the paginators, use "),t("i",[e._v("paginatorstart")]),e._v(" and "),t("i",[e._v("paginatorend")]),e._v(" templates. ")])},function(){var e=this,t=e._self._c;return t("p",[t("i",[e._v("sortField")]),e._v(" and "),t("i",[e._v("sortOrder")]),e._v(" properties are available for the sorting functionality, for flexibility there is no built-in UI available so that a custom UI can be used for the sorting element. Here is an example that uses a dropdown where simply updating the sortField-sortOrder bindings of the DataView initiates sorting. ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" Lazy loading is useful to deal with huge datasets, in order to implement lazy loading use the pagination and utilize the "),t("i",[e._v("page")]),e._v(" callback to load your data from the backend. Pagination in this case needs to display the logical number of records bound to the "),t("i",[e._v("totalRecords")]),e._v(" property so that paginator can display itself according to the total records although you'd only need to load the data of the current page. ")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("array")]),t("td",[e._v("null")]),t("td",[e._v("An array of objects to display.")])]),t("tr",[t("td",[e._v("layout")]),t("td",[e._v("string")]),t("td",[e._v("list")]),t("td",[e._v('Layout of the items, valid values are "list" and "grid".')])]),t("tr",[t("td",[e._v("rows")]),t("td",[e._v("number")]),t("td",[e._v("0")]),t("td",[e._v("Number of rows to display per page.")])]),t("tr",[t("td",[e._v("first")]),t("td",[e._v("number")]),t("td",[e._v("0")]),t("td",[e._v("Index of the first record to render.")])]),t("tr",[t("td",[e._v("totalRecords")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v("Number of total records, defaults to length of value when not defined.")])]),t("tr",[t("td",[e._v("paginator")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When specified as true, enables the pagination.")])]),t("tr",[t("td",[e._v("paginatorPosition")]),t("td",[e._v("string")]),t("td",[e._v("bottom")]),t("td",[e._v('Position of the paginator, options are "top","bottom" or "both".')])]),t("tr",[t("td",[e._v("alwaysShowPaginator")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether to show it even there is only one page.")])]),t("tr",[t("td",[e._v("paginatorTemplate")]),t("td",[e._v("string")]),t("td",[e._v("FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown")]),t("td",[e._v("Template of the paginator.")])]),t("tr",[t("td",[e._v("pageLinkSize")]),t("td",[e._v("number")]),t("td",[e._v("5")]),t("td",[e._v("Number of page links to display.")])]),t("tr",[t("td",[e._v("rowsPerPageOptions")]),t("td",[e._v("array")]),t("td",[e._v("null")]),t("td",[e._v("Array of integer values to display inside rows per page dropdown.")])]),t("tr",[t("td",[e._v("currentPageReportTemplate")]),t("td",[e._v("string")]),t("td",[e._v("({currentPage} of {totalPages})")]),t("td",[e._v("Template of the current page report element.")])]),t("tr",[t("td",[e._v("sortField")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Property name or a getter function of data to use in sorting by default.")])]),t("tr",[t("td",[e._v("sortOrder")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v("Order to sort the data by default.")])]),t("tr",[t("td",[e._v("lazy")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Defines if data is loaded and interacted with in lazy manner.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("page")]),t("td",[e._v(" event.page: New page number "),t("br"),e._v(" event.first: Index of first record "),t("br"),e._v(" event.rows: Number of rows to display in new page "),t("br"),e._v(" event.pageCount: Total number of pages ")]),t("td",[e._v("Callback to invoke when page changes, the event object contains information about the new state.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("header")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("paginatorstart")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("paginatorend")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("list")]),t("td",[e._v(" data: Value of the component "),t("br"),e._v(" index: Index of the list ")])]),t("tr",[t("td",[e._v("grid")]),t("td",[e._v(" data: Value of the component "),t("br"),e._v(" index: Index of the grid ")])]),t("tr",[t("td",[e._v("empty")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("footer")]),t("td",[e._v("-")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-dataview")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-dataview-list")]),t("td",[e._v("Container element in list layout.")])]),t("tr",[t("td",[e._v("p-dataview-grid")]),t("td",[e._v("Container element in grid layout.")])]),t("tr",[t("td",[e._v("p-dataview-header")]),t("td",[e._v("Header section.")])]),t("tr",[t("td",[e._v("p-dataview-footer")]),t("td",[e._v("Footer section.")])]),t("tr",[t("td",[e._v("p-dataview-content")]),t("td",[e._v("Container of items.")])]),t("tr",[t("td",[e._v("p-dataview-emptymessage")]),t("td",[e._v("Empty message element.")])])])])])}],l=r(s,d,n,!1,null,null);const c=l.exports,v={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<DataView :value="products" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">\n    <template #header>\n        <div class="grid grid-nogutter">\n            <div class="col-6" style="text-align: left">\n                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)"/>\n            </div>\n            <div class="col-6" style="text-align: right">\n                <DataViewLayoutOptions v-model="layout" />\n            </div>\n        </div>\n    </template>\n\n    <template #list="slotProps">\n        <div class="col-12">\n            <div class="product-list-item">\n                <img :src="\'demo/images/product/\' + slotProps.data.image" :alt="slotProps.data.name"/>\n                <div class="product-list-detail">\n                    <div class="product-name">{{slotProps.data.name}}</div>\n                    <div class="product-description">{{slotProps.data.description}}</div>\n                    <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>\n                    <i class="pi pi-tag product-category-icon"></i><span class="product-category">{{slotProps.data.category}}</span>\n                </div>\n                <div class="product-list-action">\n                    <span class="product-price">${{slotProps.data.price}}</span>\n                    <Button icon="pi pi-shopping-cart" label="Add to Cart" :disabled="slotProps.data.inventoryStatus === \'OUTOFSTOCK\'"></Button>\n                    <span :class="\'product-badge status-\'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>\n                </div>\n            </div>\n        </div>\n    </template>\n\n    <template #grid="slotProps">\n        <div class="col-12 md:col-4">\n            <div class="product-grid-item card">\n                <div class="product-grid-item-top">\n                    <div>\n                        <i class="pi pi-tag product-category-icon"></i>\n                        <span class="product-category">{{slotProps.data.category}}</span>\n                    </div>\n                    <span :class="\'product-badge status-\'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>\n                </div>\n                <div class="product-grid-item-content">\n                    <img :src="\'demo/images/product/\' + slotProps.data.image" :alt="slotProps.data.name"/>\n                    <div class="product-name">{{slotProps.data.name}}</div>\n                    <div class="product-description">{{slotProps.data.description}}</div>\n                    <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>\n                </div>\n                <div class="product-grid-item-bottom">\n                    <span class="product-price">${{slotProps.data.price}}</span>\n                    <Button icon="pi pi-shopping-cart" :disabled="slotProps.data.inventoryStatus === \'OUTOFSTOCK\'"></Button>\n                </div>\n            </div>\n        </div>\n    </template>\n</DataView>\n        '},sourceCode2:{basic:"\nimport ProductService from '../../service/ProductService';\n\nexport default {\n    data() {\n        return {\n            products: null,\n            layout: 'grid',\n            sortKey: null,\n            sortOrder: null,\n            sortField: null,\n            sortOptions: [\n                {label: 'Price High to Low', value: '!price'},\n                {label: 'Price Low to High', value: 'price'},\n            ]\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProducts().then(data => this.products = data);\n    },\n    methods: {\n        onSortChange(event){\n            const value = event.value.value;\n            const sortValue = event.value;\n\n            if (value.indexOf('!') === 0) {\n                this.sortOrder = -1;\n                this.sortField = value.substring(1, value.length);\n                this.sortKey = sortValue;\n            }\n            else {\n                this.sortOrder = 1;\n                this.sortField = value;\n                this.sortKey = sortValue;\n            }\n        }\n    }\n}\n        "}}}};var p=function(){var t=this,a=t._self._c;return a("div",[t._m(0),a("DocSectionCode",{attrs:{code:t.sourceCode1}}),a("DocSectionCode",{attrs:{code:t.sourceCode2,importCode:""}})],1)},u=[function(){var e=this,t=e._self._c;return t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/dataview",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])])}],_=r(v,p,u,!1,null,null);const m=_.exports,g={components:{Documentation:c,SourceCode:m}};var h=function(){var t=this,a=t._self._c;return a("div",{staticClass:"content-section documentation"},[a("TabView",[a("TabPanel",{attrs:{header:"Documentation"}},[a("Documentation")],1),a("TabPanel",{attrs:{header:"Source"}},[a("SourceCode")],1)],1)],1)},y=[],f=r(g,h,y,!1,null,null);const b=f.exports,C={data(){return{products:null,layout:"grid",sortKey:null,sortOrder:null,sortField:null,sortOptions:[{label:"Price High to Low",value:"!price"},{label:"Price Low to High",value:"price"}]}},productService:null,created(){this.productService=new i},mounted(){this.productService.getProducts().then(e=>this.products=e)},methods:{onSortChange(e){const t=e.value.value,a=e.value;t.indexOf("!")===0?(this.sortOrder=-1,this.sortField=t.substring(1,t.length),this.sortKey=a):(this.sortOrder=1,this.sortField=t,this.sortKey=a)}},components:{DataViewDoc:b}};var w=function(){var t=this,a=t._self._c;return a("div",[t._m(0),a("div",{staticClass:"content-section implementation"},[a("div",{staticClass:"card"},[a("DataView",{attrs:{value:t.products,layout:t.layout,paginator:!0,rows:9,sortOrder:t.sortOrder,sortField:t.sortField},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"grid grid-nogutter"},[a("div",{staticClass:"col-6",staticStyle:{"text-align":"left"}},[a("Dropdown",{attrs:{options:t.sortOptions,optionLabel:"label",placeholder:"Sort By Price"},on:{change:function(o){return t.onSortChange(o)}},model:{value:t.sortKey,callback:function(o){t.sortKey=o},expression:"sortKey"}})],1),a("div",{staticClass:"col-6",staticStyle:{"text-align":"right"}},[a("DataViewLayoutOptions",{model:{value:t.layout,callback:function(o){t.layout=o},expression:"layout"}})],1)])]},proxy:!0},{key:"list",fn:function(o){return[a("div",{staticClass:"col-12"},[a("div",{staticClass:"product-list-item"},[a("img",{attrs:{src:t.$publicUrl("demo/images/product/"+o.data.image),alt:o.data.name}}),a("div",{staticClass:"product-list-detail"},[a("div",{staticClass:"product-name"},[t._v(t._s(o.data.name))]),a("div",{staticClass:"product-description"},[t._v(t._s(o.data.description))]),a("Rating",{attrs:{value:o.data.rating,readonly:!0,cancel:!1}}),a("i",{staticClass:"pi pi-tag product-category-icon"}),a("span",{staticClass:"product-category"},[t._v(t._s(o.data.category))])],1),a("div",{staticClass:"product-list-action"},[a("span",{staticClass:"product-price"},[t._v("$"+t._s(o.data.price))]),a("Button",{attrs:{icon:"pi pi-shopping-cart",label:"Add to Cart",disabled:o.data.inventoryStatus==="OUTOFSTOCK"}}),a("span",{class:"product-badge status-"+o.data.inventoryStatus.toLowerCase()},[t._v(t._s(o.data.inventoryStatus))])],1)])])]}},{key:"grid",fn:function(o){return[a("div",{staticClass:"col-12 md:col-4"},[a("div",{staticClass:"product-grid-item card"},[a("div",{staticClass:"product-grid-item-top"},[a("div",[a("i",{staticClass:"pi pi-tag product-category-icon"}),a("span",{staticClass:"product-category"},[t._v(t._s(o.data.category))])]),a("span",{class:"product-badge status-"+o.data.inventoryStatus.toLowerCase()},[t._v(t._s(o.data.inventoryStatus))])]),a("div",{staticClass:"product-grid-item-content"},[a("img",{attrs:{src:t.$publicUrl("demo/images/product/"+o.data.image),alt:o.data.name}}),a("div",{staticClass:"product-name"},[t._v(t._s(o.data.name))]),a("div",{staticClass:"product-description"},[t._v(t._s(o.data.description))]),a("Rating",{attrs:{value:o.data.rating,readonly:!0,cancel:!1}})],1),a("div",{staticClass:"product-grid-item-bottom"},[a("span",{staticClass:"product-price"},[t._v("$"+t._s(o.data.price))]),a("Button",{attrs:{icon:"pi pi-shopping-cart",disabled:o.data.inventoryStatus==="OUTOFSTOCK"}})],1)])])]}}])})],1)]),a("DataViewDoc")],1)},P=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("DataView")]),t("p",[e._v("DataView displays data in grid or list layout with pagination and sorting features.")])])])}],S=r(C,w,P,!1,null,"46c8ec97");const k=S.exports;export{k as default};
//# sourceMappingURL=index-CRrSPpp1.js.map