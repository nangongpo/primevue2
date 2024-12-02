import{P as n}from"./ProductService-B_eIBIF9.js";import{n as o}from"./app.component-BAbvz7X_.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const r={name:"Documentation",data(){return{importCode:{basic:"\nimport DeferredContent from 'primevue2/deferredcontent';\n        "},baseCode:{basic:'\n<DeferredContent>\n    <DataTable :value="cars">\n        <Column field="vin" header="Vin"></Column>\n        <Column field="year" header="Year"></Column>\n        <Column field="brand" header="Brand"></Column>\n        <Column field="color" header="Color"></Column>\n    </DataTable>\n</DeferredContent>\n        '},loadEventCode:{basic:'\n<DeferredContent @load="onDataLoad">\n    <DataTable :value="cars">\n        <Column field="vin" header="Vin"></Column>\n        <Column field="year" header="Year"></Column>\n        <Column field="brand" header="Brand"></Column>\n        <Column field="color" header="Color"></Column>\n    </DataTable>\n</DeferredContent>\n        '}}}};var d=function(){var e=this,t=e._self._c;return t("div",[t("h5",[e._v("Import")]),t("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),t("h5",[e._v("Getting Started")]),t("p",[e._v("DeferredContent is used as a wrapper element of its content..")]),t("DocSectionCode",{attrs:{code:e.baseCode}}),t("h5",[e._v("Load Event")]),t("p",[e._v("onLoad callback is useful to initialize the content when it becomes visible on scroll such as loading data.")]),t("DocSectionCode",{attrs:{code:e.loadEventCode}}),t("h5",[e._v("Properties")]),t("p",[e._v("Component has no properties.")]),t("h5",[e._v("Events")]),e._m(0),t("h5",[e._v("Styling")]),t("p",[e._v("Component does not apply any styling.")]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1)},i=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[a._v("Name")]),e("th",[a._v("Parameters")]),e("th",[a._v("Description")])])]),e("tbody",[e("tr",[e("td",[a._v("load")]),e("td",[a._v("event: Event object")]),e("td",[a._v("Callback to invoke when deferred content is loaded..")])])])])])}],s=o(r,d,i,!1,null,null);const l=s.exports,c={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<div style="height: 800px">\n    Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.\n</div>\n\n<DeferredContent @load="onImageLoad">\n    <img src="demo/images/nature/nature4.jpg" alt="Nature"/>\n</DeferredContent>\n\n<div style="height: 500px">\n</div>\n\n<DeferredContent @load="onDataLoad">\n    <DataTable :value="products">\n        <Column field="code" header="Code"></Column>\n        <Column field="name" header="Name"></Column>\n        <Column field="category" header="Category"></Column>\n        <Column field="quantity" header="Quantity"></Column>\n    </DataTable>\n</DeferredContent>\n        '},sourceCode2:{basic:"\nimport ProductService from '../../service/ProductService';\n\nexport default {\n    data() {\n        return {\n            products: null\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    methods: {\n        onImageLoad() {\n            this.$toast.add({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable'});\n        },\n        onDataLoad() {\n            this.productService.getProductsSmall().then(data => this.products = data);\n            this.$toast.add({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'});\n        }\n    }\n}\n        "}}}};var u=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("DocSectionCode",{attrs:{code:e.sourceCode1}}),t("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)},m=[function(){var a=this,e=a._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/deferredcontent",target:"_blank",rel:"noopener noreferrer"}},[e("span",[a._v("View on GitHub")])])}],v=o(c,u,m,!1,null,null);const _=v.exports,C={components:{Documentation:l,SourceCode:_}};var p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("Documentation")],1),t("TabPanel",{attrs:{header:"Source"}},[t("SourceCode")],1)],1)],1)},h=[],f=o(C,p,h,!1,null,null);const D=f.exports,b={data(){return{products:null}},productService:null,created(){this.productService=new n},methods:{onImageLoad(){this.$toast.add({severity:"success",summary:"Image Initialized",detail:"Scroll down to load the datatable"})},onDataLoad(){this.productService.getProductsSmall().then(a=>this.products=a),this.$toast.add({severity:"success",summary:"Data Initialized",detail:"Render Completed"})}},components:{DeferredContentDoc:D}};var g=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("div",{staticStyle:{height:"800px"}},[e._v(" Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance. ")]),t("DeferredContent",{on:{load:e.onImageLoad}},[t("img",{attrs:{src:e.$publicUrl("demo/images/nature/nature4.jpg"),alt:"Nature"}})]),t("div",{staticStyle:{height:"500px"}}),t("DeferredContent",{on:{load:e.onDataLoad}},[t("DataTable",{attrs:{value:e.products}},[t("Column",{attrs:{field:"code",header:"Code"}}),t("Column",{attrs:{field:"name",header:"Name"}}),t("Column",{attrs:{field:"category",header:"Category"}}),t("Column",{attrs:{field:"quantity",header:"Quantity"}})],1)],1)],1)]),t("DeferredContentDoc")],1)},y=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[a._v("DeferredContent")]),e("p",[a._v(" DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll. ")])])])}],S=o(b,g,y,!1,null,null);const P=S.exports;export{P as default};
//# sourceMappingURL=index-PND29S7T.js.map