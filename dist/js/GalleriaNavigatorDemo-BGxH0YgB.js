import{P as s}from"./PhotoService-CFjbxwOy.js";import{n as l}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const r={data(){return{images:null,responsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}},galleriaService:null,created(){this.galleriaService=new s},mounted(){this.galleriaService.getImages().then(a=>this.images=a)}};var o=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Item Navigators and Thumbnails")]),t("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:e.images,responsiveOptions:e.responsiveOptions,numVisible:5,circular:!0,showItemNavigators:!0},scopedSlots:e._u([{key:"item",fn:function(i){return[t("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:i.item.itemImageSrc,alt:i.item.alt}})]}},{key:"thumbnail",fn:function(i){return[t("img",{staticStyle:{display:"block"},attrs:{src:i.item.thumbnailImageSrc,alt:i.item.alt}})]}}])})],1),t("div",{staticClass:"card"},[t("h5",[e._v("Item Navigators without Thumbnails")]),t("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:e.images,responsiveOptions:e.responsiveOptions,numVisible:5,circular:!0,showItemNavigators:!0,showThumbnails:!1},scopedSlots:e._u([{key:"item",fn:function(i){return[t("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:i.item.itemImageSrc,alt:i.item.alt}})]}},{key:"thumbnail",fn:function(i){return[t("img",{staticStyle:{display:"block"},attrs:{src:i.item.thumbnailImageSrc,alt:i.item.alt}})]}}])})],1),t("div",{staticClass:"card"},[t("h5",[e._v("Item Navigators on Hover")]),t("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:e.images,responsiveOptions:e.responsiveOptions,numVisible:5,circular:!0,showItemNavigators:!0,showItemNavigatorsOnHover:!0},scopedSlots:e._u([{key:"item",fn:function(i){return[t("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:i.item.itemImageSrc,alt:i.item.alt}})]}},{key:"thumbnail",fn:function(i){return[t("img",{staticStyle:{display:"block"},attrs:{src:i.item.thumbnailImageSrc,alt:i.item.alt}})]}}])})],1),t("div",{staticClass:"card"},[t("h5",[e._v("Item Navigators and Indicators")]),t("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:e.images,responsiveOptions:e.responsiveOptions,numVisible:5,circular:!0,showItemNavigators:!0,showThumbnails:!1,showItemNavigatorsOnHover:!0,showIndicators:!0},scopedSlots:e._u([{key:"item",fn:function(i){return[t("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:i.item.itemImageSrc,alt:i.item.alt}})]}},{key:"thumbnail",fn:function(i){return[t("img",{staticStyle:{display:"block"},attrs:{src:i.item.thumbnailImageSrc,alt:i.item.alt}})]}}])})],1)]),t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("CodeHighlight",[[e._v(' <h3>Item Navigators and Thumbnails</h3> <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px" :showItemNavigators="true"> <template #item="slotProps"> <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /> </template> <template #thumbnail="slotProps"> <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /> </template> </Galleria> <h3>Item Navigators without Thumbnails</h3> <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px" :showItemNavigators="true" :showThumbnails="false"> <template #item="slotProps"> <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /> </template> <template #thumbnail="slotProps"> <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /> </template> </Galleria> <h3>Item Navigators on Hover</h3> <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px;" :showItemNavigators="true" :showItemNavigatorsOnHover="true"> <template #item="slotProps"> <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /> </template> <template #thumbnail="slotProps"> <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /> </template> </Galleria> <h3>Item Navigators and Indicators</h3> <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px;" :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true"> <template #item="slotProps"> <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /> </template> <template #thumbnail="slotProps"> <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /> </template> </Galleria> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import PhotoService from '../../service/PhotoService'; export default { data() { return { images: null, responsiveOptions: [ { breakpoint: '1024px', numVisible: 5 }, { breakpoint: '768px', numVisible: 3 }, { breakpoint: '560px', numVisible: 1 } ] } }, galleriaService: null, created() { this.galleriaService = new PhotoService(); }, mounted() { this.galleriaService.getImages().then(data => this.images = data); } } ")])],1)],1)],1)])},m=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[a._v("Galleria "),e("span",[a._v("Navigator")])]),e("p",[a._v("Combining item navigators, thumbnails and indicators provide various UI alternatives.")])])])}],n=l(r,o,m,!1,null,null);const g=n.exports;export{g as default};
//# sourceMappingURL=GalleriaNavigatorDemo-BGxH0YgB.js.map
