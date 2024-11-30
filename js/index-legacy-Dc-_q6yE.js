System.register(["./ProductService-legacy-Ctw4T0RP.js","./app.component-legacy-7lS-4wLG.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(e,t){"use strict";var n,a;return{setters:[function(e){n=e.P},function(e){a=e.n},null,null,null,null],execute:function(){var t=a({name:"Documentation",data:function(){return{importCode:{basic:"\nimport Inplace from 'primevue2/inplace';\n        "},baseCode:{basic:'\n<Inplace>\n    <template #display>\n        <span class="pi pi-search" style="vertical-align: middle"></span>\n        <span style="margin-left:.5rem; vertical-align: middle">View Picture</span>\n    </template>\n    <template #content>\n        <img src="demo/images/nature/nature1.jpg" />\n    </template>\n</Inplace>\n        '},closableCode:{basic:'\n<Inplace :closable="true">\n    <template #display>\n        {{text || \'Click to Edit\'}}\n    </template>\n    <template #content>\n        <InputText v-model="text" autoFocus />\n    </template>\n</Inplace>\n        '},lazyDataCode:{basic:'\n<Inplace @open="loadData">\n    <template #display>\n        View Data\n    </template>\n    <template #content>\n        <DataTable :value="cars">\n            <Column field="vin" header="Vin"></Column>\n            <Column field="year" header="Year"></Column>\n            <Column field="brand" header="Brand"></Column>\n            <Column field="color" header="Color"></Column>\n        </DataTable>\n    </template>\n</Inplace>\n        '},lazyDataCode2:{basic:"\nimport CarService from '../../service/CarService';\n\nexport default {\n     data() {\n        return {\n            cars: null\n        }\n    },\n    carService: null,\n    created() {\n        this.carService = new CarService();\n    },\n    methods: {\n        loadData() {\n             this.carService.getCarsSmall().then(data => this.cars = data);\n        }\n    }\n}\n        "}}}},(function(){var e=this,t=e._self._c;return t("div",[t("h5",[e._v("Import")]),t("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),t("h5",[e._v("Getting Started")]),e._m(0),t("DocSectionCode",{attrs:{code:e.baseCode}}),t("h5",[e._v("Closable")]),e._m(1),t("DocSectionCode",{attrs:{code:e.closableCode}}),t("h5",[e._v("Lazy Data")]),t("p",[e._v(" Inplace allows lazy loading content so that the content gets initialized after getting opened instead of on load. Here is an example that loads, data of a table if the user decides to open the inplace. ")]),t("DocSectionCode",{attrs:{code:e.lazyDataCode}}),t("DocSectionCode",{attrs:{code:e.lazyDataCode2,importCode:""}}),t("h5",[e._v("Properties")]),t("p",[e._v(" Any property as style and class are passed to the main container element. Following are the additional properties to configure the component. ")]),e._m(2),t("h5",[e._v("Events")]),e._m(3),t("h5",[e._v("Slots")]),e._m(4),t("h5",[e._v("Styling")]),t("p",[e._v(" Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page. ")],1),e._m(5),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1)}),[function(){var e=this,t=e._self._c;return t("p",[e._v("Inplace requires "),t("i",[e._v("display")]),e._v(" and "),t("i",[e._v("content")]),e._v(" templates to define the content of each state.")])},function(){var e=this,t=e._self._c;return t("p",[t("i",[e._v("closable")]),e._v(" property is handy within forms as it enables to switch back to output mode after editing is completed using a button displayed next to the form field. ")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("active")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Whether the content is displayed or not.")])]),t("tr",[t("td",[e._v("closable")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Displays a button to switch back to display mode.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("open")]),t("td",[e._v("event: browser event")]),t("td",[e._v("Callback to invoke when inplace is opened.")])]),t("tr",[t("td",[e._v("close")]),t("td",[e._v("event: browser event")]),t("td",[e._v("Callback to invoke when inplace is closed.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("display")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("content")]),t("td",[e._v("-")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-inplace")]),t("td",[e._v("Container element")])]),t("tr",[t("td",[e._v("p-inplace-display")]),t("td",[e._v("Display container")])]),t("tr",[t("td",[e._v("p-inplace-content")]),t("td",[e._v("Content container")])])])])])}],!1,null,null).exports,o=a({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<h3>Input</h3>\n<Inplace :closable="true">\n    <template #display>\n        {{text || \'Click to Edit\'}}\n    </template>\n    <template #content>\n        <InputText v-model="text" autoFocus />\n    </template>\n</Inplace>\n\n<h3>Image</h3>\n<Inplace>\n    <template #display>\n        <span className="pi pi-search" style="vertical-align: middle"></span>\n        <span style="margin-left:.5rem; vertical-align: middle">View Picture</span>\n    </template>\n    <template #content>\n        <img src="demo/images/nature/nature1.jpg" />\n    </template>\n</Inplace>\n\n<h3>Lazy Data</h3>\n<Inplace @open="loadData">\n    <template #display>\n        View Data\n    </template>\n    <template #content>\n        <DataTable :value="products">\n            <Column field="code" header="Code"></Column>\n            <Column field="name" header="Name"></Column>\n            <Column field="category" header="Category"></Column>\n            <Column field="quantity" header="Quantity"></Column>\n        </DataTable>\n    </template>\n</Inplace>\n        '},sourceCode2:{basic:"\nimport ProductService from '../../service/ProductService';\n\nexport default {\n     data() {\n        return {\n            text: null,\n            products: null\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    methods: {\n        loadData() {\n             this.productService.getProductsSmall().then(data => this.products = data);\n        }\n    }\n}\n        "}}}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("DocSectionCode",{attrs:{code:e.sourceCode1}}),t("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)}),[function(){var e=this._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/inplace",target:"_blank",rel:"noopener noreferrer"}},[e("span",[this._v("View on GitHub")])])}],!1,null,null).exports,l=a({components:{Documentation:t,SourceCode:o}},(function(){var e=this._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("Documentation")],1),e("TabPanel",{attrs:{header:"Source"}},[e("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;e("default",a({data:function(){return{text:null,products:null}},productService:null,created:function(){this.productService=new n},methods:{loadData:function(){var e=this;this.productService.getProductsSmall().then((function(t){return e.products=t}))}},components:{InplaceDoc:l}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Input")]),t("Inplace",{attrs:{closable:!0},scopedSlots:e._u([{key:"display",fn:function(){return[e._v(" "+e._s(e.text||"Click to Edit")+" ")]},proxy:!0},{key:"content",fn:function(){return[t("InputText",{attrs:{autoFocus:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})]},proxy:!0}])}),t("h5",[e._v("Image")]),t("Inplace",{scopedSlots:e._u([{key:"display",fn:function(){return[t("span",{staticClass:"pi pi-search",staticStyle:{"vertical-align":"middle"}}),t("span",{staticStyle:{"margin-left":"0.5rem","vertical-align":"middle"}},[e._v("View Picture")])]},proxy:!0},{key:"content",fn:function(){return[t("img",{attrs:{src:e.$publicUrl("demo/images/nature/nature1.jpg")}})]},proxy:!0}])}),t("h5",[e._v("Lazy Data")]),t("Inplace",{on:{open:e.loadData},scopedSlots:e._u([{key:"display",fn:function(){return[e._v(" View Data ")]},proxy:!0},{key:"content",fn:function(){return[t("DataTable",{attrs:{value:e.products}},[t("Column",{attrs:{field:"code",header:"Code"}}),t("Column",{attrs:{field:"name",header:"Name"}}),t("Column",{attrs:{field:"category",header:"Category"}}),t("Column",{attrs:{field:"quantity",header:"Quantity"}})],1)]},proxy:!0}])})],1)]),t("InplaceDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("Inplace")]),t("p",[e._v(" Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content. ")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=index-legacy-Dc-_q6yE.js.map
