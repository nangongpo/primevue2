import{P as o}from"./ProductService-B_eIBIF9.js";import{n as i}from"./app.component-XqgfEEHA.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const r={};var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import Carousel from 'primevue2/carousel'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("Carousel requires a collection of items as its value along with a template to render each item.")]),t("CodeHighlight",[e._v(' <Carousel :value="cars"> <template #item="slotProps"> </template> </Carousel> ')]),t("h5",[e._v("Items per page and Scroll Items")]),t("p",[e._v("Number of items per page is defined using the "),t("i",[e._v("numVisible")]),e._v(" property whereas number of items to scroll is defined with the "),t("i",[e._v("numScroll")]),e._v(" property.")]),t("CodeHighlight",[e._v(' <Carousel :value="cars" :numVisible="3" :numScroll="1"> <template #item="slotProps"> </template> </Carousel> ')]),t("h5",[e._v("Responsive")]),t("p",[e._v("For responsive design, "),t("i",[e._v("numVisible")]),e._v(" and "),t("i",[e._v("numScroll")]),e._v(" can be defined using the "),t("i",[e._v("responsiveOptions")]),e._v(" property that should be an array of objects whose breakpoint defines the max-width to apply the settings.")]),t("CodeHighlight",[[e._v(' <Carousel :value="cars" :numVisible="4" :numScroll="3" :responsiveOptions="responsiveOptions"> <template #header> <h2>Basic</h2> </template> <template #item="slotProps"> <div class="car-item"> <div class="car-content"> <div> <img :src="\'demo/images/car/\' + slotProps.data.brand + \'.png\'" :alt="slotProps.data.brand" /> </div> <div> <div class="car-title">{{slotProps.data.brand}}</div> <div class="car-subtitle">{{slotProps.data.year}} | {{slotProps.data.color}}</div> <div class="car-buttons"> <Button icon="pi pi-search" class="p-button-secondary" /> <Button icon="pi pi-star-fill" class="p-button-secondary" /> <Button icon="pi pi-cog" class="p-button-secondary" /> </div> </div> </div> </div> </template> </Carousel> ')]],2),t("CodeHighlight",{attrs:{lang:"js"}},[e._v(" data() { return { responsiveOptions: [ { breakpoint: '1024px', numVisible: 3, numScroll: 3 }, { breakpoint: '600px', numVisible: 2, numScroll: 2 }, { breakpoint: '480px', numVisible: 1, numScroll: 1 } ] } }, ")]),t("h5",[e._v("Header and Footer")]),t("p",[e._v("Custom content projection is available using the "),t("i",[e._v("header")]),e._v(" and "),t("i",[e._v("footer")]),e._v(" templates.")]),t("CodeHighlight",[e._v(' <Carousel :value="cars" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"> <template #header> <h2>Custom Header</h2> </template> <template #item="slotProps"> Content </template> <template #footer> <h2>Custom Footer</h2> </template> </Carousel> ')]),t("h5",[e._v("Orientation")]),t("p",[e._v("Default layout of the Carousel is horizontal, other possible option is the vertical mode that is configured with the "),t("i",[e._v("orientation")]),e._v(" property.")]),t("CodeHighlight",[e._v(' <Carousel :value="cars" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" :responsiveOptions="responsiveOptions"> <template #item="slotProps"> Content </template> </Carousel> ')]),t("h5",[e._v("AutoPlay and Circular")]),t("p",[e._v("When "),t("i",[e._v("autoplayInterval")]),e._v(" is defined in milliseconds, items are scrolled automatically. In addition, for infinite scrolling "),t("i",[e._v("circular")]),e._v(" property needs to be enabled. Note that in autoplay mode, circular is enabled by default.")]),t("CodeHighlight",[e._v(' <Carousel :value="cars" :numVisible="3" :numScroll="1" :circular="true" :autoplayInterval="3000"> <template #header> <h2>Circular, AutoPlay</h2> </template> <template #item="slotProps"> Content </template> </Carousel> ')]),t("h5",[e._v("Properties")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("array")]),t("td",[e._v("null")]),t("td",[e._v("An array of objects to display.")])]),t("tr",[t("td",[e._v("page")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v("Index of the first item.")])]),t("tr",[t("td",[e._v("circular")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Defines if scrolling would be infinite.")])]),t("tr",[t("td",[e._v("autoplayInterval")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v("Time in milliseconds to scroll items automatically.")])]),t("tr",[t("td",[e._v("numVisible")]),t("td",[e._v("number")]),t("td",[e._v("1")]),t("td",[e._v("Number of items per page.")])]),t("tr",[t("td",[e._v("numScroll")]),t("td",[e._v("number")]),t("td",[e._v("1")]),t("td",[e._v("Number of items to scroll.")])]),t("tr",[t("td",[e._v("responsiveOptions")]),t("td",[e._v("any")]),t("td",[e._v("null")]),t("td",[e._v("An array of options for responsive design.")])]),t("tr",[t("td",[e._v("orientation")]),t("td",[e._v("string")]),t("td",[e._v("horizontal")]),t("td",[e._v('Specifies the layout of the component, valid values are "horizontal" and "vertical".')])]),t("tr",[t("td",[e._v("verticalViewPortHeight")]),t("td",[e._v("string")]),t("td",[e._v("300px")]),t("td",[e._v("Height of the viewport in vertical layout.")])]),t("tr",[t("td",[e._v("contentClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Style class of main content.")])]),t("tr",[t("td",[e._v("containerClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Style class of the viewport container.")])]),t("tr",[t("td",[e._v("indicatorsContentClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Style class of the indicator items.")])])])])]),t("h5",[e._v("Slots")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("header")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("item")]),t("td",[e._v("data: Data of the component"),t("br"),e._v(" index: Index of the item")])]),t("tr",[t("td",[e._v("footer")]),t("td",[e._v("-")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-carousel")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-carousel-header")]),t("td",[e._v("Header section.")])]),t("tr",[t("td",[e._v("p-carousel-footer")]),t("td",[e._v("Footer section.")])]),t("tr",[t("td",[e._v("p-carousel-content")]),t("td",[e._v("Main content element. It contains the container of the viewport.")])]),t("tr",[t("td",[e._v("p-carousel-container")]),t("td",[e._v("Container of the viewport. It contains navigation buttons and viewport.")])]),t("tr",[t("td",[e._v("p-carousel-items-content")]),t("td",[e._v("Viewport.")])]),t("tr",[t("td",[e._v("p-carousel-indicators")]),t("td",[e._v("Container of the indicators.")])]),t("tr",[t("td",[e._v("p-carousel-indicator")]),t("td",[e._v("Indicator element.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/carousel",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <div class="card"> <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions"> <template #header> <h5>Basic</h5> </template> <template #item="slotProps"> <div class="product-item"> <div class="product-item-content"> <div class="mb-3"> <img :src="\'demo/images/product/\' + slotProps.data.image" :alt="slotProps.data.name" class="product-image" /> </div> <div> <h4 class="mb-1">{{slotProps.data.name}}</h4> <h6 class="mt-0 mb-3">${{slotProps.data.price}}</h6> <span :class="\'product-badge status-\'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span> <div class="car-buttons mt-5"> <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" /> <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" /> <Button icon="pi pi-cog" class="p-button-help p-button-rounded" /> </div> </div> </div> </div> </template> </Carousel> </div> <div class="card"> <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000"> <template #header> <h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5> </template> <template #item="slotProps"> <div class="product-item"> <div class="product-item-content"> <div class="mb-3"> <img :src="\'demo/images/product/\' + slotProps.data.image" :alt="slotProps.data.name" class="product-image" /> </div> <div> <h4 class="mb-1">{{slotProps.data.name}}</h4> <h6 class="mt-0 mb-3">${{slotProps.data.price}}</h6> <span :class="\'product-badge status-\'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span> <div class="car-buttons mt-5"> <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" /> <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" /> <Button icon="pi pi-cog" class="p-button-help p-button-rounded" /> </div> </div> </div> </div> </template> </Carousel> </div> <div class="card"> <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="352px" style="max-width: 400px; margin-top: 2em"> <template #header> <h5>Vertical</h5> </template> <template #item="slotProps"> <div class="product-item"> <div class="product-item-content"> <div class="mb-3"> <img :src="\'demo/images/product/\' + slotProps.data.image" :alt="slotProps.data.name" class="product-image" /> </div> <div> <h4 class="mb-1">{{slotProps.data.name}}</h4> <h6 class="mt-0 mb-3">${{slotProps.data.price}}</h6> <span :class="\'product-badge status-\'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span> <div class="car-buttons mt-5"> <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" /> <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" /> <Button icon="pi pi-cog" class="p-button-help p-button-rounded" /> </div> </div> </div> </div> </template> </Carousel> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import ProductService from '../../service/ProductService'; export default { data() { return { products: null, responsiveOptions: [ { breakpoint: '1024px', numVisible: 3, numScroll: 3 }, { breakpoint: '600px', numVisible: 2, numScroll: 2 }, { breakpoint: '480px', numVisible: 1, numScroll: 1 } ] } }, productService: null, created() { this.productService = new ProductService(); }, mounted() { this.productService.getProductsSmall().then(data => this.products = data.slice(0,9)); } } ")]),t("CodeHighlight",{attrs:{lang:"css"}},[e._v(" .product-item { .product-item-content { border: 1px solid var(--surface-border); border-radius: 3px; margin: .3rem; text-align: center; padding: 2rem 0; } .product-image { width: 50%; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23) } } ")])],1)],1)],1)},l=[],c=i(r,n,l,!1,null,null);const d=c.exports,u={data(){return{products:null,responsiveOptions:[{breakpoint:"1024px",numVisible:3,numScroll:3},{breakpoint:"600px",numVisible:2,numScroll:2},{breakpoint:"480px",numVisible:1,numScroll:1}]}},productService:null,created(){this.productService=new o},mounted(){this.productService.getProductsSmall().then(s=>this.products=s.slice(0,9))},components:{CarouselDoc:d}};var p=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("Carousel",{attrs:{value:e.products,numVisible:3,numScroll:3,responsiveOptions:e.responsiveOptions},scopedSlots:e._u([{key:"header",fn:function(){return[t("h5",[e._v("Basic")])]},proxy:!0},{key:"item",fn:function(a){return[t("div",{staticClass:"product-item"},[t("div",{staticClass:"product-item-content"},[t("div",{staticClass:"mb-3"},[t("img",{staticClass:"product-image",attrs:{src:e.$publicUrl("demo/images/product/"+a.data.image),alt:a.data.name}})]),t("div",[t("h4",{staticClass:"mb-1"},[e._v(e._s(a.data.name))]),t("h6",{staticClass:"mt-0 mb-3"},[e._v("$"+e._s(a.data.price))]),t("span",{class:"product-badge status-"+a.data.inventoryStatus.toLowerCase()},[e._v(e._s(a.data.inventoryStatus))]),t("div",{staticClass:"car-buttons mt-5"},[t("Button",{staticClass:"p-button p-button-rounded mr-2",attrs:{icon:"pi pi-search"}}),t("Button",{staticClass:"p-button-success p-button-rounded mr-2",attrs:{icon:"pi pi-star-fill"}}),t("Button",{staticClass:"p-button-help p-button-rounded",attrs:{icon:"pi pi-cog"}})],1)])])])]}}])})],1),t("div",{staticClass:"card"},[t("Carousel",{staticClass:"custom-carousel",attrs:{value:e.products,numVisible:3,numScroll:1,responsiveOptions:e.responsiveOptions,circular:!0,autoplayInterval:3e3},scopedSlots:e._u([{key:"header",fn:function(){return[t("h5",[e._v("Circular, AutoPlay, 3 Items per Page and Scroll by 1")])]},proxy:!0},{key:"item",fn:function(a){return[t("div",{staticClass:"product-item"},[t("div",{staticClass:"product-item-content"},[t("div",{staticClass:"mb-3"},[t("img",{staticClass:"product-image",attrs:{src:e.$publicUrl("demo/images/product/"+a.data.image),alt:a.data.name}})]),t("div",[t("h4",{staticClass:"mb-1"},[e._v(e._s(a.data.name))]),t("h6",{staticClass:"mt-0 mb-3"},[e._v("$"+e._s(a.data.price))]),t("span",{class:"product-badge status-"+a.data.inventoryStatus.toLowerCase()},[e._v(e._s(a.data.inventoryStatus))]),t("div",{staticClass:"car-buttons mt-5"},[t("Button",{staticClass:"p-button p-button-rounded mr-2",attrs:{icon:"pi pi-search"}}),t("Button",{staticClass:"p-button-success p-button-rounded mr-2",attrs:{icon:"pi pi-star-fill"}}),t("Button",{staticClass:"p-button-help p-button-rounded",attrs:{icon:"pi pi-cog"}})],1)])])])]}}])})],1),t("div",{staticClass:"card"},[t("Carousel",{staticStyle:{"max-width":"400px","margin-top":"2em"},attrs:{value:e.products,numVisible:1,numScroll:1,orientation:"vertical",verticalViewPortHeight:"352px"},scopedSlots:e._u([{key:"header",fn:function(){return[t("h5",[e._v("Vertical")])]},proxy:!0},{key:"item",fn:function(a){return[t("div",{staticClass:"product-item"},[t("div",{staticClass:"product-item-content"},[t("div",{staticClass:"mb-3"},[t("img",{staticClass:"product-image",attrs:{src:e.$publicUrl("demo/images/product/"+a.data.image),alt:a.data.name}})]),t("div",[t("h4",{staticClass:"mb-1"},[e._v(e._s(a.data.name))]),t("h6",{staticClass:"mt-0 mb-3"},[e._v("$"+e._s(a.data.price))]),t("span",{class:"product-badge status-"+a.data.inventoryStatus.toLowerCase()},[e._v(e._s(a.data.inventoryStatus))]),t("div",{staticClass:"car-buttons mt-5"},[t("Button",{staticClass:"p-button p-button-rounded mr-2",attrs:{icon:"pi pi-search"}}),t("Button",{staticClass:"p-button-success p-button-rounded mr-2",attrs:{icon:"pi pi-star-fill"}}),t("Button",{staticClass:"p-button-help p-button-rounded",attrs:{icon:"pi pi-cog"}})],1)])])])]}}])})],1)]),t("CarouselDoc")],1)},v=[function(){var s=this,e=s._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[s._v("Carousel")]),e("p",[s._v("Carousel is a content slider featuring various customization options.")])])])}],m=i(u,p,v,!1,null,"1bb287ff");const f=m.exports;export{f as default};
//# sourceMappingURL=CarouselDemo-DBlJ9TPm.js.map