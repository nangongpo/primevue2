import{P as r}from"./ProductService-B_eIBIF9.js";import{n}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const i={};var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import Inplace from 'primevue2/inplace'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("Inplace requires "),t("i",[e._v("display")]),e._v(" and "),t("i",[e._v("content")]),e._v(" templates to define the content of each state.")]),t("CodeHighlight",[[e._v(' <Inplace> <template #display> <span class="pi pi-search" style="vertical-align: middle"></span> <span style="margin-left:.5rem; vertical-align: middle">View Picture</span> </template> <template #content> <img :src="$publicUrl(\'demo/images/nature/nature1.jpg\')" /> </template> </Inplace> ')]],2),t("h5",[e._v("Closable")]),t("p",[t("i",[e._v("closable")]),e._v(" property is handy within forms as it enables to switch back to output mode after editing is completed using a button displayed next to the form field.")]),t("CodeHighlight",[[e._v(' <Inplace :closable="true"> <template #display> {{text || \'Click to Edit\'}} </template> <template #content> <InputText v-model="text" autoFocus /> </template> </Inplace> ')]],2),t("h5",[e._v("Lazy Data")]),t("p",[e._v("Inplace allows lazy loading content so that the content gets initialized after getting opened instead of on load. Here is an example that loads, data of a table if the user decides to open the inplace.")]),t("CodeHighlight",[[e._v(' <Inplace @open="loadData"> <template #display> View Data </template> <template #content> <DataTable :value="cars"> <Column field="vin" header="Vin"></Column> <Column field="year" header="Year"></Column> <Column field="brand" header="Brand"></Column> <Column field="color" header="Color"></Column> </DataTable> </template> </Inplace> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import CarService from '../../service/CarService'; export default { data() { return { cars: null } }, carService: null, created() { this.carService = new CarService(); }, methods: { loadData() { this.carService.getCarsSmall().then(data => this.cars = data); } } } ")]),t("h5",[e._v("Properties")]),t("p",[e._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("active")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Whether the content is displayed or not.")])]),t("tr",[t("td",[e._v("closable")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Displays a button to switch back to display mode.")])])])])]),t("h5",[e._v("Events")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("open")]),t("td",[e._v("event: browser event ")]),t("td",[e._v("Callback to invoke when inplace is opened.")])]),t("tr",[t("td",[e._v("close")]),t("td",[e._v("event: browser event ")]),t("td",[e._v("Callback to invoke when inplace is closed.")])])])])]),t("h5",[e._v("Slots")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("display")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("content")]),t("td",[e._v("-")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-inplace")]),t("td",[e._v("Container element")])]),t("tr",[t("td",[e._v("p-inplace-display")]),t("td",[e._v("Display container")])]),t("tr",[t("td",[e._v("p-inplace-content")]),t("td",[e._v("Content container")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/inplace",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <h3>Input</h3> <Inplace :closable="true"> <template #display> {{text || \'Click to Edit\'}} </template> <template #content> <InputText v-model="text" autoFocus /> </template> </Inplace> <h3>Image</h3> <Inplace> <template #display> <span className="pi pi-search" style="vertical-align: middle"></span> <span style="margin-left:.5rem; vertical-align: middle">View Picture</span> </template> <template #content> <img :src="$publicUrl(\'demo/images/nature/nature1.jpg\')" /> </template> </Inplace> <h3>Lazy Data</h3> <Inplace @open="loadData"> <template #display> View Data </template> <template #content> <DataTable :value="products"> <Column field="code" header="Code"></Column> <Column field="name" header="Name"></Column> <Column field="category" header="Category"></Column> <Column field="quantity" header="Quantity"></Column> </DataTable> </template> </Inplace> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import ProductService from '../../service/ProductService'; export default { data() { return { text: null, products: null } }, productService: null, created() { this.productService = new ProductService(); }, methods: { loadData() { this.productService.getProductsSmall().then(data => this.products = data); } } } ")])],1)],1)],1)},s=[],c=n(i,o,s,!1,null,null);const d=c.exports,p={data(){return{text:null,products:null}},productService:null,created(){this.productService=new r},methods:{loadData(){this.productService.getProductsSmall().then(a=>this.products=a)}},components:{InplaceDoc:d}};var u=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Input")]),t("Inplace",{attrs:{closable:!0},scopedSlots:e._u([{key:"display",fn:function(){return[e._v(" "+e._s(e.text||"Click to Edit")+" ")]},proxy:!0},{key:"content",fn:function(){return[t("InputText",{attrs:{autoFocus:""},model:{value:e.text,callback:function(l){e.text=l},expression:"text"}})]},proxy:!0}])}),t("h5",[e._v("Image")]),t("Inplace",{scopedSlots:e._u([{key:"display",fn:function(){return[t("span",{staticClass:"pi pi-search",staticStyle:{"vertical-align":"middle"}}),t("span",{staticStyle:{"margin-left":".5rem","vertical-align":"middle"}},[e._v("View Picture")])]},proxy:!0},{key:"content",fn:function(){return[t("img",{attrs:{src:e.$publicUrl("demo/images/nature/nature1.jpg")}})]},proxy:!0}])}),t("h5",[e._v("Lazy Data")]),t("Inplace",{on:{open:e.loadData},scopedSlots:e._u([{key:"display",fn:function(){return[e._v(" View Data ")]},proxy:!0},{key:"content",fn:function(){return[t("DataTable",{attrs:{value:e.products}},[t("Column",{attrs:{field:"code",header:"Code"}}),t("Column",{attrs:{field:"name",header:"Name"}}),t("Column",{attrs:{field:"category",header:"Category"}}),t("Column",{attrs:{field:"quantity",header:"Quantity"}})],1)]},proxy:!0}])})],1)]),t("InplaceDoc")],1)},v=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[a._v("Inplace")]),e("p",[a._v("Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.")])])])}],m=n(p,u,v,!1,null,null);const C=m.exports;export{C as default};
//# sourceMappingURL=InplaceDemo-B_ueHIHe.js.map
