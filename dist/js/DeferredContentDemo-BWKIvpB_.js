import{P as n}from"./ProductService-B_eIBIF9.js";import{n as o}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const r={};var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[t._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import DeferredContent from 'primevue2/deferredcontent'; ")]),e("h5",[t._v("Getting Started")]),e("p",[t._v("DeferredContent is used as a wrapper element of its content..")]),e("CodeHighlight",[[t._v(' <DeferredContent> <DataTable :value="cars"> <Column field="vin" header="Vin"></Column> <Column field="year" header="Year"></Column> <Column field="brand" header="Brand"></Column> <Column field="color" header="Color"></Column> </DataTable> </DeferredContent> ')]],2),e("h5",[t._v("Load Event")]),e("p",[t._v("onLoad callback is useful to initialize the content when it becomes visible on scroll such as loading data.")]),e("CodeHighlight",[[t._v(' <DeferredContent @load="onDataLoad"> <DataTable :value="cars"> <Column field="vin" header="Vin"></Column> <Column field="year" header="Year"></Column> <Column field="brand" header="Brand"></Column> <Column field="color" header="Color"></Column> </DataTable> </DeferredContent> ')]],2),e("h5",[t._v("Properties")]),e("p",[t._v("Component has no properties.")]),e("h5",[t._v("Events")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("load")]),e("td",[t._v("event: Event object")]),e("td",[t._v("Callback to invoke when deferred content is loaded..")])])])])]),e("h5",[t._v("Styling")]),e("p",[t._v("Component does not apply any styling.")]),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/deferredcontent",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])]),e("CodeHighlight",[[t._v(' <div style="height: 800px"> Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance. </div> <DeferredContent @load="onImageLoad"> <img :src="$publicUrl(\'demo/images/nature/nature4.jpg\')" alt="Nature"/> </DeferredContent> <div style="height: 500px"> </div> <DeferredContent @load="onDataLoad"> <DataTable :value="products"> <Column field="code" header="Code"></Column> <Column field="name" header="Name"></Column> <Column field="category" header="Category"></Column> <Column field="quantity" header="Quantity"></Column> </DataTable> </DeferredContent> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import ProductService from '../../service/ProductService'; export default { data() { return { products: null } }, productService: null, created() { this.productService = new ProductService(); }, methods: { onImageLoad() { this.$toast.add({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable'}); }, onDataLoad() { this.productService.getProductsSmall().then(data => this.products = data); this.$toast.add({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'}); } } } ")])],1)],1)],1)},d=[],l=o(r,i,d,!1,null,null);const s=l.exports,c={data(){return{products:null}},productService:null,created(){this.productService=new n},methods:{onImageLoad(){this.$toast.add({severity:"success",summary:"Image Initialized",detail:"Scroll down to load the datatable"})},onDataLoad(){this.productService.getProductsSmall().then(a=>this.products=a),this.$toast.add({severity:"success",summary:"Data Initialized",detail:"Render Completed"})}},components:{DeferredContentDoc:s}};var u=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("div",{staticStyle:{height:"800px"}},[t._v(" Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance. ")]),e("DeferredContent",{on:{load:t.onImageLoad}},[e("img",{attrs:{src:t.$publicUrl("demo/images/nature/nature4.jpg"),alt:"Nature"}})]),e("div",{staticStyle:{height:"500px"}}),e("DeferredContent",{on:{load:t.onDataLoad}},[e("DataTable",{attrs:{value:t.products}},[e("Column",{attrs:{field:"code",header:"Code"}}),e("Column",{attrs:{field:"name",header:"Name"}}),e("Column",{attrs:{field:"category",header:"Category"}}),e("Column",{attrs:{field:"quantity",header:"Quantity"}})],1)],1)],1)]),e("DeferredContentDoc")],1)},m=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[a._v("DeferredContent")]),t("p",[a._v("DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.")])])])}],h=o(c,u,m,!1,null,null);const g=h.exports;export{g as default};
//# sourceMappingURL=DeferredContentDemo-BWKIvpB_.js.map
