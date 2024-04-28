System.register(["./ProductService-legacy-Ctw4T0RP.js","./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var a,o;return{setters:[function(e){a=e.P},function(e){o=e.n},null,null,null],execute:function(){var t=document.createElement("style");t.textContent="button[data-v-15cbeba4]{min-width:15rem}.product-image[data-v-15cbeba4]{width:50px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}\n",document.head.appendChild(t);var r=o({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import OverlayPanel from 'primevue2/overlaypanel'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("OverlayPanel is accessed via its reference where visibility is controlled using toggle, show and hide methods.")]),t("CodeHighlight",[e._v(' <Button type="button" label="Toggle" @click="toggle" /> <OverlayPanel ref="op"> <img :src="$publicUrl(\'demo/images/nature/nature1.jpg\')" alt="Nature Image"> </OverlayPanel> ')]),t("CodeHighlight",{attrs:{lang:"js"}},[e._v(" toggle(event) { this.$refs.op.toggle(event); } ")]),t("h5",[e._v("Dismissable and CloseIcon")]),t("p",[e._v("Clicking outside the overlay hides the panel, setting "),t("i",[e._v("dismissable")]),e._v(" to false disables this behavior. Additionally enabling "),t("i",[e._v("showCloseIcon")]),e._v(" property displays a close icon at the top right corner to close the panel.")]),t("CodeHighlight",[e._v(' <OverlayPanel ref="op" :showCloseIcon="true" :dismissable="true"> <img :src="$publicUrl(\'demo/images/nature/nature1.jpg\')" alt="Nature Image"> </OverlayPanel> ')]),t("h5",[e._v("Properties")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("dismissable")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Enables to hide the overlay when outside is clicked.")])]),t("tr",[t("td",[e._v("showCloseIcon")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When enabled, displays a close icon at top right corner.")])]),t("tr",[t("td",[e._v("appendTo")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v('Id of the element or "body" for document where the overlay should be appended to.')])]),t("tr",[t("td",[e._v("baseZIndex")]),t("td",[e._v("number")]),t("td",[e._v("0")]),t("td",[e._v("Base zIndex value to use in layering.")])]),t("tr",[t("td",[e._v("autoZIndex")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether to automatically manage layering.")])]),t("tr",[t("td",[e._v("ariaCloseLabel")]),t("td",[e._v("string")]),t("td",[e._v("close")]),t("td",[e._v("Aria label of the close icon.")])])])])]),t("h5",[e._v("Events")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("show")]),t("td",[e._v("-")]),t("td",[e._v("Callback to invoke when overlay panel is shown.")])]),t("tr",[t("td",[e._v("hide")]),t("td",[e._v("-")]),t("td",[e._v("Callback to invoke when overlay panel is hidden.")])])])])]),t("h5",[e._v("Methods")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("toggle")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Toggles the visibility of the overlay.")])]),t("tr",[t("td",[e._v("show")]),t("td",[e._v("event: Browser event "),t("br"),e._v(" target: Optional target if event.target should not be used")]),t("td",[e._v("Shows the overlay.")])]),t("tr",[t("td",[e._v("hide")]),t("td",[e._v("-")]),t("td",[e._v("Hides the overlay.")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-overlaypanel")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-overlaypanel-content")]),t("td",[e._v("Content of the panel.")])]),t("tr",[t("td",[e._v("p-overlaypanel-close")]),t("td",[e._v("Close icon.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/overlaypanel",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <Button type="button" icon="pi pi-search" :label="selectedProduct ? selectedProduct.name : \'Select a Product\'" @click="toggle" aria:haspopup="true" aria-controls="overlay_panel" /> <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" id="overlay_panel" style="width: 450px"> <DataTable :value="products" :selection.sync="selectedProduct" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect"> <Column field="name" header="Name" sortable></Column> <Column header="Image"> <template #body="slotProps"> <img :src="$publicUrl(\'demo/images/product/\' + slotProps.data.image)" :alt="slotProps.data.image" class="product-image" /> </template> </Column> <Column field="price" header="Price" sortable> <template #body="slotProps"> {{formatCurrency(slotProps.data.price)}} </template> </Column> </DataTable> </OverlayPanel> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import ProductService from '../../service/ProductService'; export default { data() { return { products: null, selectedProduct: null } }, productService: null, created() { this.productService = new ProductService(); }, mounted() { this.productService.getProductsSmall().then(data => this.products = data); }, methods: { toggle(event) { this.$refs.op.toggle(event); }, formatCurrency(value) { return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); }, onProductSelect(event) { this.$refs.op.hide(); this.$toast.add({severity:'info', summary: 'Product Selected', detail: event.data.name, life: 3000}); } } } ")])],1)],1)],1)}),[],!1,null,null).exports;e("default",o({data:function(){return{products:null,selectedProduct:null}},productService:null,created:function(){this.productService=new a},mounted:function(){var e=this;this.productService.getProductsSmall().then((function(t){return e.products=t}))},methods:{toggle:function(e){this.$refs.op.toggle(e)},formatCurrency:function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})},onProductSelect:function(e){this.$refs.op.hide(),this.$toast.add({severity:"info",summary:"Product Selected",detail:e.data.name,life:3e3})}},components:{OverlayPanelDoc:r}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("Button",{attrs:{type:"button",icon:"pi pi-search",label:e.selectedProduct?e.selectedProduct.name:"Select a Product","aria:haspopup":"true","aria-controls":"overlay_panel"},on:{click:e.toggle}}),t("OverlayPanel",{ref:"op",staticStyle:{width:"450px"},attrs:{appendTo:"body",showCloseIcon:!0,id:"overlay_panel"}},[t("DataTable",{attrs:{value:e.products,selection:e.selectedProduct,selectionMode:"single",paginator:!0,rows:5},on:{"update:selection":function(t){e.selectedProduct=t},"row-select":e.onProductSelect}},[t("Column",{attrs:{field:"name",header:"Name",sortable:""}}),t("Column",{attrs:{header:"Image"},scopedSlots:e._u([{key:"body",fn:function(a){return[t("img",{staticClass:"product-image",attrs:{src:e.$publicUrl("demo/images/product/"+a.data.image),alt:a.data.image}})]}}])}),t("Column",{attrs:{field:"price",header:"Price",sortable:""},scopedSlots:e._u([{key:"body",fn:function(t){return[e._v(" "+e._s(e.formatCurrency(t.data.price))+" ")]}}])})],1)],1)],1)]),t("OverlayPanelDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("OverlayPanel")]),t("p",[e._v("OverlayPanel is a container component positioned as connected to its target.")])])])}],!1,null,"15cbeba4").exports)}}}));
//# sourceMappingURL=OverlayPanelDemo-legacy-Dc9vu6rf.js.map
