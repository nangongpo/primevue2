System.register(["./PhotoService-legacy-Cvyw76t4.js","./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var a,i;return{setters:[function(e){a=e.P},function(e){i=e.n},null,null,null],execute:function(){var t=i({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import Galleria from 'primevue2/galleria'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("Galleria requires item template and a value as an array of objects.")]),t("CodeHighlight",[e._v(' <Galleria :value="images"> <template #item="slotProps"> <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" /> </template> </Galleria> ')]),t("p",[e._v("For the rest of the documentation, sample data below would be return from an example service e.g. PhotoService.")]),t("div",{staticStyle:{overflow:"auto",height:"400px"}},[t("CodeHighlight",{attrs:{lang:"js"}},[e._v(' { "data":[ { "itemImageSrc": "demo/images/galleria/galleria1.jpg", "thumbnailImageSrc": "demo/images/galleria/galleria1s.jpg", "alt": "Description for Image 1", "title": "Title 1" }, { "itemImageSrc": "demo/images/galleria/galleria2.jpg", "thumbnailImageSrc": "demo/images/galleria/galleria2s.jpg", "alt": "Description for Image 2", "title": "Title 2" }, { "itemImageSrc": "demo/images/galleria/galleria3.jpg", "thumbnailImageSrc": "demo/images/galleria/galleria3s.jpg", "alt": "Description for Image 3", "title": "Title 3" }, { "itemImageSrc": "demo/images/galleria/galleria4.jpg", "thumbnailImageSrc": "demo/images/galleria/galleria4s.jpg", "alt": "Description for Image 4", "title": "Title 4" }, { "itemImageSrc": "demo/images/galleria/galleria5.jpg", "thumbnailImageSrc": "demo/images/galleria/galleria5s.jpg", "alt": "Description for Image 5", "title": "Title 5" }, { "itemImageSrc": "demo/images/galleria/galleria6.jpg", "thumbnailImageSrc": "demo/images/galleria/galleria6s.jpg", "alt": "Description for Image 6", "title": "Title 6" }, { "itemImageSrc": "demo/images/galleria/galleria7.jpg", "thumbnailImageSrc": "demo/images/galleria/galleria7s.jpg", "alt": "Description for Image 7", "title": "Title 7" }, { "itemImageSrc": "demo/images/galleria/galleria8.jpg", "thumbnailImageSrc": "demo/images/galleria/galleria8s.jpg", "alt": "Description for Image 8", "title": "Title 8" }, { "itemImageSrc": "demo/images/galleria/galleria9.jpg", "thumbnailImageSrc": "demo/images/galleria/galleria9s.jpg", "alt": "Description for Image 9", "title": "Title 9" }, { "itemImageSrc": "demo/images/galleria/galleria10.jpg", "thumbnailImageSrc": "demo/images/galleria/galleria10s.jpg", "alt": "Description for Image 10", "title": "Title 10" }, { "itemImageSrc": "demo/images/galleria/galleria11.jpg", "thumbnailImageSrc": "demo/images/galleria/galleria11s.jpg", "alt": "Description for Image 11", "title": "Title 11" }, { "itemImageSrc": "demo/images/galleria/galleria12.jpg", "thumbnailImageSrc": "demo/images/galleria/galleria12s.jpg", "alt": "Description for Image 12", "title": "Title 12" }, { "itemImageSrc": "demo/images/galleria/galleria13.jpg", "thumbnailImageSrc": "demo/images/galleria/galleria13s.jpg", "alt": "Description for Image 13", "title": "Title 13" }, { "itemImageSrc": "demo/images/galleria/galleria14.jpg", "thumbnailImageSrc": "demo/images/galleria/galleria14s.jpg", "alt": "Description for Image 14", "title": "Title 14" }, { "itemImageSrc": "demo/images/galleria/galleria15.jpg", "thumbnailImageSrc": "demo/images/galleria/galleria15s.jpg", "alt": "Description for Image 15", "title": "Title 15" } ] } ')])],1),t("CodeHighlight",{attrs:{lang:"js"}},[e._v(" export default class PhotoService { getImages() { return fetch('demo/data/photos.json').then(res => res.json()).then(d => d.data); } } ")]),t("CodeHighlight",{attrs:{lang:"js"}},[e._v(" export default { data() { return { images: null } }, galleriaService: null, created() { this.galleriaService = new PhotoService(); }, mounted() { this.galleriaService.getImages().then(data => this.images = data); } } ")]),t("h5",[e._v("Items per page")]),t("p",[e._v("Number of items per page is defined using the "),t("i",[e._v("numVisible")]),e._v(" property.")]),t("CodeHighlight",[e._v(' <Galleria :value="images" :numVisible="5"> <template #item="slotProps"> <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" /> </template> <template #thumbnail="slotProps"> <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" /> </template> </Galleria> ')]),t("h5",[e._v("Responsive")]),t("p",[e._v("For responsive design, "),t("i",[e._v("numVisible")]),e._v(" can be defined using the "),t("i",[e._v("responsiveOptions")]),e._v(" property which references an array of objects whose breakpoint defines the max-width to apply the settings.")]),t("CodeHighlight",[e._v(' <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5"> <template #item="slotProps"> <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" /> </template> <template #thumbnail="slotProps"> <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" /> </template> </Galleria> ')]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" responsiveOptions: [ { breakpoint: '1024px', numVisible: 5 }, { breakpoint: '768px', numVisible: 3 }, { breakpoint: '560px', numVisible: 1 } ] ")]),t("h5",[e._v("Header and Footer")]),t("p",[e._v("Custom content projection is available using the "),t("i",[e._v("header")]),e._v(" and "),t("i",[e._v("footer")]),e._v(" properties.")]),t("CodeHighlight",[e._v(' <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"> <template #header> <h1>Header</h1> </template> <template #item="slotProps"> <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" /> </template> <template #footer> <h1>Footer</h1> </template> </Galleria> ')]),t("h5",[e._v("Indicators")]),t("p",[e._v("Indicators allow quick navigation between the items. Set "),t("i",[e._v("showIndicators")]),e._v(" to display indicators which can be customized further with the "),t("i",[e._v("changeItemOnIndicatorHover")]),e._v(", "),t("i",[e._v("showIndicatorsOnItem")]),e._v(" and "),t("i",[e._v("indicatorsPosition")]),e._v(" properties.")]),t("CodeHighlight",[e._v(' <Galleria :value="images" :showIndicators="true"> <template #item="slotProps"> <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" /> </template> </Galleria> ')]),t("h5",[e._v("Properties")]),t("p",[e._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("id")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Unique identifier of the element.")])]),t("tr",[t("td",[e._v("value")]),t("td",[e._v("array")]),t("td",[e._v("null")]),t("td",[e._v("An array of objects to display.")])]),t("tr",[t("td",[e._v("activeIndex")]),t("td",[e._v("number")]),t("td",[e._v("0")]),t("td",[e._v("Index of the first item.")])]),t("tr",[t("td",[e._v("fullScreen")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Whether to display the component on fullscreen.")])]),t("tr",[t("td",[e._v("visible")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Specifies the visibility of the mask on fullscreen mode.")])]),t("tr",[t("td",[e._v("numVisible")]),t("td",[e._v("number")]),t("td",[e._v("3")]),t("td",[e._v("Number of items per page.")])]),t("tr",[t("td",[e._v("responsiveOptions")]),t("td",[e._v("any")]),t("td",[e._v("null")]),t("td",[e._v("An array of options for responsive design.")])]),t("tr",[t("td",[e._v("showItemNavigators")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Whether to display navigation buttons in item section.")])]),t("tr",[t("td",[e._v("showThumbnailNavigators")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether to display navigation buttons in thumbnail container.")])]),t("tr",[t("td",[e._v("showItemNavigatorsOnHover")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Whether to display navigation buttons on item hover.")])]),t("tr",[t("td",[e._v("changeItemOnIndicatorHover")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When enabled, item is changed on indicator hover.")])]),t("tr",[t("td",[e._v("circular")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Defines if scrolling would be infinite.")])]),t("tr",[t("td",[e._v("autoPlay")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Items are displayed with a slideshow in autoPlay mode.")])]),t("tr",[t("td",[e._v("transitionInterval")]),t("td",[e._v("number")]),t("td",[e._v("4000")]),t("td",[e._v("Time in milliseconds to scroll items.")])]),t("tr",[t("td",[e._v("showThumbnails")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether to display thumbnail container.")])]),t("tr",[t("td",[e._v("thumbnailsPosition")]),t("td",[e._v("string")]),t("td",[e._v("bottom")]),t("td",[e._v('Position of thumbnails. Valid values are "bottom", "top", "left" and "right".')])]),t("tr",[t("td",[e._v("verticalThumbnailViewPortHeight")]),t("td",[e._v("string")]),t("td",[e._v("300px")]),t("td",[e._v("Height of the viewport in vertical thumbnail.")])]),t("tr",[t("td",[e._v("showIndicators")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Whether to display indicator container.")])]),t("tr",[t("td",[e._v("showIndicatorsOnItem")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When enabled, indicator container is displayed on item container.")])]),t("tr",[t("td",[e._v("indicatorsPosition")]),t("td",[e._v("string")]),t("td",[e._v("bottom")]),t("td",[e._v('Position of indicators. Valid values are "bottom", "top", "left" and "right".')])]),t("tr",[t("td",[e._v("baseZIndex")]),t("td",[e._v("number")]),t("td",[e._v("0")]),t("td",[e._v("Base zIndex value to use in layering.")])]),t("tr",[t("td",[e._v("maskClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Style class of the mask on fullscreen mode.")])]),t("tr",[t("td",[e._v("containerStyle")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used.")])]),t("tr",[t("td",[e._v("galleriaClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used.")])])])])]),t("h5",[e._v("Slots")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("header")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("footer")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("item")]),t("td",[e._v("item: Item instance")])]),t("tr",[t("td",[e._v("caption")]),t("td",[e._v("item: Item instance")])]),t("tr",[t("td",[e._v("thumbnail")]),t("td",[e._v("item: Item instance")])]),t("tr",[t("td",[e._v("indicator")]),t("td",[e._v("index: Index of the indicator item")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-galleria")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-galleria-header")]),t("td",[e._v("Header section.")])]),t("tr",[t("td",[e._v("p-galleria-footer")]),t("td",[e._v("Footer section.")])]),t("tr",[t("td",[e._v("p-galleria-item-wrapper")]),t("td",[e._v("Item wrapper element. It contains item container and indicators.")])]),t("tr",[t("td",[e._v("p-galleria-item-container")]),t("td",[e._v("Container of the item wrapper. It contains navigation buttons, items and caption content.")])]),t("tr",[t("td",[e._v("p-galleria-indicators")]),t("td",[e._v("Container of the indicators. It contains indicator items.")])]),t("tr",[t("td",[e._v("p-galleria-thumbnail-content")]),t("td",[e._v("Thumbnail content element.")])]),t("tr",[t("td",[e._v("p-galleria-thumbnail-container")]),t("td",[e._v("Container of the thumbnail content. It contains navigation buttons and thumbnail items.")])]),t("tr",[t("td",[e._v("p-galleria-caption")]),t("td",[e._v("Content of the item caption.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/galleria",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"> <template #item="slotProps"> <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" /> </template> <template #thumbnail="slotProps"> <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" /> </template> </Galleria> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import PhotoService from '../../service/PhotoService'; export default { data() { return { images: null, responsiveOptions: [ { breakpoint: '1024px', numVisible: 5 }, { breakpoint: '768px', numVisible: 3 }, { breakpoint: '560px', numVisible: 1 } ] } }, galleriaService: null, created() { this.galleriaService = new PhotoService(); }, mounted() { this.galleriaService.getImages().then(data => this.images = data); } } ")])],1)],1)],1)}),[],!1,null,null).exports;e("default",i({data:function(){return{images:null,responsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}},galleriaService:null,created:function(){this.galleriaService=new a},mounted:function(){var e=this;this.galleriaService.getImages().then((function(t){return e.images=t}))},components:{GalleriaDoc:t}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"galleria-demo"},[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:e.images,responsiveOptions:e.responsiveOptions,numVisible:5},scopedSlots:e._u([{key:"item",fn:function(e){return[t("img",{staticStyle:{width:"100%"},attrs:{src:e.item.itemImageSrc,alt:e.item.alt}})]}},{key:"thumbnail",fn:function(e){return[t("img",{attrs:{src:e.item.thumbnailImageSrc,alt:e.item.alt}})]}}])})],1)]),t("GalleriaDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("Galleria")]),t("p",[e._v("Galleria is an advanced content gallery component.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=GalleriaDemo-legacy-DJr4iNUQ.js.map
