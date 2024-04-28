System.register(["./ProductService-legacy-Ctw4T0RP.js","./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var a,n;return{setters:[function(e){a=e.P},function(e){n=e.n},null,null,null],execute:function(){var t=n({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import DeferredContent from 'primevue2/deferredcontent'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("DeferredContent is used as a wrapper element of its content..")]),t("CodeHighlight",[[e._v(' <DeferredContent> <DataTable :value="cars"> <Column field="vin" header="Vin"></Column> <Column field="year" header="Year"></Column> <Column field="brand" header="Brand"></Column> <Column field="color" header="Color"></Column> </DataTable> </DeferredContent> ')]],2),t("h5",[e._v("Load Event")]),t("p",[e._v("onLoad callback is useful to initialize the content when it becomes visible on scroll such as loading data.")]),t("CodeHighlight",[[e._v(' <DeferredContent @load="onDataLoad"> <DataTable :value="cars"> <Column field="vin" header="Vin"></Column> <Column field="year" header="Year"></Column> <Column field="brand" header="Brand"></Column> <Column field="color" header="Color"></Column> </DataTable> </DeferredContent> ')]],2),t("h5",[e._v("Properties")]),t("p",[e._v("Component has no properties.")]),t("h5",[e._v("Events")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("load")]),t("td",[e._v("event: Event object")]),t("td",[e._v("Callback to invoke when deferred content is loaded..")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Component does not apply any styling.")]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/deferredcontent",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <div style="height: 800px"> Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance. </div> <DeferredContent @load="onImageLoad"> <img :src="$publicUrl(\'demo/images/nature/nature4.jpg\')" alt="Nature"/> </DeferredContent> <div style="height: 500px"> </div> <DeferredContent @load="onDataLoad"> <DataTable :value="products"> <Column field="code" header="Code"></Column> <Column field="name" header="Name"></Column> <Column field="category" header="Category"></Column> <Column field="quantity" header="Quantity"></Column> </DataTable> </DeferredContent> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import ProductService from '../../service/ProductService'; export default { data() { return { products: null } }, productService: null, created() { this.productService = new ProductService(); }, methods: { onImageLoad() { this.$toast.add({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable'}); }, onDataLoad() { this.productService.getProductsSmall().then(data => this.products = data); this.$toast.add({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'}); } } } ")])],1)],1)],1)}),[],!1,null,null).exports;e("default",n({data:function(){return{products:null}},productService:null,created:function(){this.productService=new a},methods:{onImageLoad:function(){this.$toast.add({severity:"success",summary:"Image Initialized",detail:"Scroll down to load the datatable"})},onDataLoad:function(){var e=this;this.productService.getProductsSmall().then((function(t){return e.products=t})),this.$toast.add({severity:"success",summary:"Data Initialized",detail:"Render Completed"})}},components:{DeferredContentDoc:t}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("div",{staticStyle:{height:"800px"}},[e._v(" Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance. ")]),t("DeferredContent",{on:{load:e.onImageLoad}},[t("img",{attrs:{src:e.$publicUrl("demo/images/nature/nature4.jpg"),alt:"Nature"}})]),t("div",{staticStyle:{height:"500px"}}),t("DeferredContent",{on:{load:e.onDataLoad}},[t("DataTable",{attrs:{value:e.products}},[t("Column",{attrs:{field:"code",header:"Code"}}),t("Column",{attrs:{field:"name",header:"Name"}}),t("Column",{attrs:{field:"category",header:"Category"}}),t("Column",{attrs:{field:"quantity",header:"Quantity"}})],1)],1)],1)]),t("DeferredContentDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("DeferredContent")]),t("p",[e._v("DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=DeferredContentDemo-legacy-ClleLuOQ.js.map
