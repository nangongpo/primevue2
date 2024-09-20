System.register(["./app.component-legacy-CT61tSyJ.js","./ProductService-legacy-Ctw4T0RP.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(t,e){"use strict";var i,a;return{setters:[function(t){i=t.n},function(t){a=t.P},null,null,null],execute:function(){var e=document.createElement("style");e.textContent=".product-item[data-v-4e311caf]{display:flex;align-items:center;padding:.5rem;width:100%}.product-item img[data-v-4e311caf]{width:75px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-right:1rem}.product-item .product-list-detail[data-v-4e311caf]{flex:1 1 0}.product-item .product-list-action[data-v-4e311caf]{display:flex;flex-direction:column;align-items:flex-end}.product-item .product-category-icon[data-v-4e311caf]{vertical-align:middle;margin-right:.5rem}.product-item .product-category[data-v-4e311caf]{vertical-align:middle;line-height:1}@media screen and (max-width: 576px){.product-item[data-v-4e311caf]{flex-wrap:wrap}.product-item .image-container[data-v-4e311caf]{width:100%;text-align:center}.product-item img[data-v-4e311caf]{margin:0 0 1rem;width:100px}}\n",document.head.appendChild(e);var r=i({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[t._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import PickList from 'primevue2/picklist'; ")]),e("h5",[t._v("Getting Started")]),e("p",[t._v("PickList requires a multidimensional array as its value bound with the v-model directive and a template for its content that gets the "),e("i",[t._v("item")]),t._v(" instance and the "),e("i",[t._v("index")]),t._v(" via slotProps.")]),e("CodeHighlight",[[t._v(' <PickList v-model="cars" dataKey="vin"> <template #item="slotProps"> <div class="p-caritem"> <img :src="$publicUrl(\'demo/images/car/\' + slotProps.item.brand + \'.png\')"> <div> <span class="p-caritem-vin">{{slotProps.item.vin}}</span> <span>{{slotProps.item.year}} - {{slotProps.item.color}}</span> </div> </div> </template> </PickList> ')]],2),e("h5",[t._v("Templates")]),e("p",[t._v('In addition to the mandatory "item" template, picklist provides "sourceheader" and "targetheader" slots to define content at header sections. Similarly custom content can be placed before and after the button controls for each section can be templates. View the slots section for more information.')]),e("CodeHighlight",[[t._v(' <PickList v-model="cars" dataKey="vin"> <template #sourceheader> Available </template> <template #targetheader> Selected </template> <template #item="slotProps"> <div class="p-caritem"> <img :src="$publicUrl(\'demo/images/car/\' + slotProps.item.brand + \'.png\')"> <div> <span class="p-caritem-vin">{{slotProps.item.vin}}</span> <span>{{slotProps.item.year}} - {{slotProps.item.color}}</span> </div> </div> </template> </PickList> ')]],2),e("h5",[t._v("Selection")]),e("p",[t._v("In case you need to access the selected items in the list, define a binding to the "),e("i",[t._v("selection")]),t._v(" property with the sync operator so that it gets updated when the user makes a selection. Since it is two-way binding enabled, your changes to the selection will be reflected as well. Note that this is optional and only necessary when you need to access the selection.")]),e("CodeHighlight",[[t._v(' <PickList v-model="cars" dataKey="vin" :selection.sync="selection"> <template #item="slotProps"> <div class="p-caritem"> <img :src="$publicUrl(\'demo/images/car/\' + slotProps.item.brand + \'.png\')"> <div> <span class="p-caritem-vin">{{slotProps.item.vin}}</span> <span>{{slotProps.item.year}} - {{slotProps.item.color}}</span> </div> </div> </template> </PickList> ')]],2),e("h5",[t._v("DataKey")]),e("p",[t._v("It is recommended to provide the name of the field that uniquely identifies the a record in the data via the "),e("i",[t._v("dataKey")]),t._v(" property for better performance.")]),e("h5",[t._v("Properties")]),e("p",[t._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("array")]),e("td",[t._v("null")]),e("td",[t._v("Value of the component as a multidimensional array.")])]),e("tr",[e("td",[t._v("selection")]),e("td",[t._v("array")]),e("td",[t._v("null")]),e("td",[t._v("Selected items in the list as a multidimensional array.")])]),e("tr",[e("td",[t._v("metaKeySelection")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Defines whether metaKey is requred or not for the selection. "),e("br"),t._v(" When true metaKey needs to be pressed to select or unselect an item and "),e("br"),t._v(" when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.")])]),e("tr",[e("td",[t._v("dataKey")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Name of the field that uniquely identifies the a record in the data.")])]),e("tr",[e("td",[t._v("listStyle")]),e("td",[t._v("object")]),e("td",[t._v("null")]),e("td",[t._v("Inline style of the the list element.")])]),e("tr",[e("td",[t._v("stripedRows")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Whether to displays rows with alternating colors.")])])])])]),e("h5",[t._v("Events")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("reorder")]),e("td",[t._v("event.originalEvent: browser event "),e("br"),t._v(" event.value: Ordered list "),e("br"),t._v(' event.direction: Direction of the change; "up", "down", "bottom", "top" '),e("br"),t._v(" event.listIndex: Index of the list that is ordered, 0 represents the source and 1 represents the target list. ")]),e("td",[t._v("Callback to invoke when the list is reordered.")])]),e("tr",[e("td",[t._v("move-to-target")]),e("td",[t._v("event.originalEvent: browser event "),e("br"),t._v(" event.items: Moved items ")]),e("td",[t._v("Callback to invoke when one or more items are moved to the target list.")])]),e("tr",[e("td",[t._v("move-all-to-target")]),e("td",[t._v("event.originalEvent: browser event "),e("br"),t._v(" event.items: Moved items ")]),e("td",[t._v("Callback to invoke when all items are moved to the target list.")])]),e("tr",[e("td",[t._v("move-to-source")]),e("td",[t._v("event.originalEvent: browser event "),e("br"),t._v(" event.items: Moved items ")]),e("td",[t._v("Callback to invoke when one or more items are moved to the source list.")])]),e("tr",[e("td",[t._v("move-all-to-source")]),e("td",[t._v("event.originalEvent: browser event "),e("br"),t._v(" event.items: Moved items ")]),e("td",[t._v("Callback to invoke when all items are moved to the source list.")])])])])]),e("h5",[t._v("Slots")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("sourceheader")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("item")]),e("td",[t._v("item: Item of the component"),e("br"),t._v(" index: Index of the item")])]),e("tr",[e("td",[t._v("targetheader")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("sourcecontrolsstart")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("sourcecontrolsend")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("movecontrolsstart")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("movecontrolsend")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("targetcontrolsstart")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("targetcontrolsend")]),e("td",[t._v("-")])])])])]),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-picklist")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-picklist-source-controls")]),e("td",[t._v("Container of source list buttons.")])]),e("tr",[e("td",[t._v("p-picklist-target-controls")]),e("td",[t._v("Container of target list buttons.")])]),e("tr",[e("td",[t._v("p-picklist-buttons")]),e("td",[t._v("Container of buttons.")])]),e("tr",[e("td",[t._v("p-picklist-listwrapper")]),e("td",[t._v("Parent of a list element.")])]),e("tr",[e("td",[t._v("p-picklist-list")]),e("td",[t._v("List element.")])]),e("tr",[e("td",[t._v("p-picklist-item")]),e("td",[t._v("An item in the list.")])])])])]),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/picklist",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])]),e("CodeHighlight",[[t._v(' <PickList v-model="products" listStyle="height:342px" dataKey="id"> <template #sourceheader> Available </template> <template #targetheader> Selected </template> <template #item="slotProps"> <div class="product-item"> <div class="image-container"> <img :src="$publicUrl(\'demo/images/product/\' + slotProps.item.image)" :alt="slotProps.item.name" /> </div> <div class="product-list-detail"> <h5 class="mb-2">{{slotProps.item.name}}</h5> <i class="pi pi-tag product-category-icon"></i> <span class="product-category">{{slotProps.item.category}}</span> </div> <div class="product-list-action"> <h6 class="mb-2">${{slotProps.item.price}}</h6> <span :class="\'product-badge status-\'+slotProps.item.inventoryStatus.toLowerCase()">{{slotProps.item.inventoryStatus}}</span> </div> </div> </template> </PickList> ')]],2),e("CodeHighlight",{attrs:{lang:"js"}},[t._v(" import ProductService from '../../service/ProductService'; export default { data() { return { products: null } }, productService: null, created() { this.productService = new ProductService(); }, mounted() { this.productService.getProductsSmall().then(data => this.products = [data, []]); } } ")]),e("CodeHighlight",{attrs:{lang:"css"}},[t._v(" product-item { display: flex; align-items: center; padding: .5rem; width: 100%; img { width: 75px; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); margin-right: 1rem; } .product-list-detail { flex: 1 1 0; } .product-list-action { display: flex; flex-direction: column; align-items: flex-end; } .product-category-icon { vertical-align: middle; margin-right: .5rem; } .product-category { vertical-align: middle; line-height: 1; } } @media screen and (max-width: 576px) { .product-item { flex-wrap: wrap; .image-container { width: 100%; text-align: center; } img { margin: 0 0 1rem 0; width: 100px; } } } ")])],1)],1)],1)}),[],!1,null,null).exports;t("default",i({data:function(){return{products:null}},productService:null,created:function(){this.productService=new a},mounted:function(){var t=this;this.productService.getProductsSmall().then((function(e){return t.products=[e,[]]}))},components:{PickListDoc:r}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("PickList",{attrs:{listStyle:"height:342px",dataKey:"id"},scopedSlots:t._u([{key:"sourceheader",fn:function(){return[t._v(" Available ")]},proxy:!0},{key:"targetheader",fn:function(){return[t._v(" Selected ")]},proxy:!0},{key:"item",fn:function(i){return[e("div",{staticClass:"product-item"},[e("div",{staticClass:"image-container"},[e("img",{attrs:{src:t.$publicUrl("demo/images/product/"+i.item.image),alt:i.item.name}})]),e("div",{staticClass:"product-list-detail"},[e("h5",{staticClass:"mb-2"},[t._v(t._s(i.item.name))]),e("i",{staticClass:"pi pi-tag product-category-icon"}),e("span",{staticClass:"product-category"},[t._v(t._s(i.item.category))])]),e("div",{staticClass:"product-list-action"},[e("h6",{staticClass:"mb-2"},[t._v("$"+t._s(i.item.price))]),e("span",{class:"product-badge status-"+i.item.inventoryStatus.toLowerCase()},[t._v(t._s(i.item.inventoryStatus))])])])]}}]),model:{value:t.products,callback:function(e){t.products=e},expression:"products"}})],1)]),e("PickListDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("PickList")]),e("p",[t._v("PickList is used to reorder items between different lists.")])])])}],!1,null,"4e311caf").exports)}}}));
//# sourceMappingURL=PickListDemo-legacy-5_o-imrc.js.map
