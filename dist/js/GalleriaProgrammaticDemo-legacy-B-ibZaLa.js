System.register(["./PhotoService-legacy-Cvyw76t4.js","./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(t,e){"use strict";var i,a;return{setters:[function(t){i=t.P},function(t){a=t.n},null,null,null],execute:function(){t("default",a({data:function(){return{images:null,activeIndex:2,responsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}},galleriaService:null,created:function(){this.galleriaService=new i},mounted:function(){var t=this;this.galleriaService.getImages().then((function(e){return t.images=e}))},methods:{next:function(){this.activeIndex=this.activeIndex===this.images.length-1?0:this.activeIndex+1},prev:function(){this.activeIndex=0===this.activeIndex?0:this.images.length-1}}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"galleria-demo"},[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("div",{staticStyle:{padding:".5rem 0"}},[e("Button",{staticClass:"p-button-secondary",attrs:{icon:"pi pi-minus"},on:{click:t.prev}}),e("Button",{staticClass:"p-button-secondary",staticStyle:{"margin-left":".5rem"},attrs:{icon:"pi pi-plus"},on:{click:t.next}})],1),e("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:t.images,activeIndex:t.activeIndex,responsiveOptions:t.responsiveOptions,numVisible:5},on:{"update:activeIndex":function(e){t.activeIndex=e},"update:active-index":function(e){t.activeIndex=e}},scopedSlots:t._u([{key:"item",fn:function(t){return[e("img",{staticStyle:{width:"100%"},attrs:{src:t.item.itemImageSrc,alt:t.item.alt}})]}},{key:"thumbnail",fn:function(t){return[e("img",{attrs:{src:t.item.thumbnailImageSrc,alt:t.item.alt}})]}}])})],1)]),e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Source"}},[e("CodeHighlight",[[t._v(' <div style="padding: .5rem 0"> <Button icon="pi pi-minus" @click="prev" class="p-button-secondary" /> <Button icon="pi pi-plus" @click="next" class="p-button-secondary" style="margin-left: .5rem" /> </div> <Galleria :value="images" :activeIndex.sync="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"> <template #item="slotProps"> <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" /> </template> <template #thumbnail="slotProps"> <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" /> </template> </Galleria> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import PhotoService from '../../service/PhotoService'; export default { data() { return { images: null, activeIndex: 2, responsiveOptions: [ { breakpoint: '1024px', numVisible: 5 }, { breakpoint: '768px', numVisible: 3 }, { breakpoint: '560px', numVisible: 1 } ] } }, galleriaService: null, created() { this.galleriaService = new PhotoService(); }, mounted() { this.galleriaService.getImages().then(data => this.images = data); }, methods: { next() { this.activeIndex = (this.activeIndex === this.images.length - 1) ? 0 : this.activeIndex + 1; }, prev() { this.activeIndex = (this.activeIndex === 0) ? 0 : this.images.length - 1; } } } ")])],1)],1)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("Galleria "),e("span",[t._v("Programmatic")])]),e("p",[t._v("Galleria can be controlled programmatically using the "),e("b",[t._v("activeIndex")]),t._v(" property.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=GalleriaProgrammaticDemo-legacy-B-ibZaLa.js.map