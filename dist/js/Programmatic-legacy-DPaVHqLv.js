System.register(["./PhotoService-legacy-Cvyw76t4.js","./app.component-legacy-7lS-4wLG.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(t,e){"use strict";var n,i;return{setters:[function(t){n=t.P},function(t){i=t.n},null,null,null,null],execute:function(){var e=document.createElement("style");e.textContent="/*$vite$:1*/",document.head.appendChild(e);var a=i({data:function(){return{baseCode:{basic:'\n<div style="padding: .5rem 0">\n    <Button icon="pi pi-minus" @click="prev" class="p-button-secondary" />\n    <Button icon="pi pi-plus" @click="next" class="p-button-secondary" style="margin-left: .5rem" />\n</div>\n\n<Galleria :value="images" :activeIndex.sync="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />\n    </template>\n</Galleria>\n        '},baseCode2:{basic:"\nimport PhotoService from '../../service/PhotoService';\n\nexport default {\n    data() {\n        return {\n            images: null,\n            activeIndex: 2,\n\t\t\tresponsiveOptions: [\n\t\t\t\t{\n                    breakpoint: '1024px',\n                    numVisible: 5\n                },\n                {\n                    breakpoint: '768px',\n                    numVisible: 3\n                },\n                {\n                    breakpoint: '560px',\n                    numVisible: 1\n                }\n\t\t\t]\n        }\n    },\n    galleriaService: null,\n\tcreated() {\n\t\tthis.galleriaService = new PhotoService();\n\t},\n\tmounted() {\n\t\tthis.galleriaService.getImages().then(data => this.images = data);\n    },\n    methods: {\n        next() {\n            this.activeIndex = (this.activeIndex === this.images.length - 1) ? 0 : this.activeIndex + 1;\n        },\n        prev() {\n            this.activeIndex = (this.activeIndex === 0) ? 0 : this.images.length - 1;\n        }\n    }\n}\n        "}}}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Source"}},[e("DocSectionCode",{attrs:{code:t.baseCode}}),e("DocSectionCode",{attrs:{code:t.baseCode2,importCode:""}})],1)],1)],1)}),[],!1,null,null).exports;t("default",i({components:{GalleriaProgrammaticDoc:a},data:function(){return{images:null,activeIndex:2,responsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}},galleriaService:null,created:function(){this.galleriaService=new n},mounted:function(){var t=this;this.galleriaService.getImages().then((function(e){return t.images=e}))},methods:{next:function(){this.activeIndex=this.activeIndex===this.images.length-1?0:this.activeIndex+1},prev:function(){this.activeIndex=0===this.activeIndex?0:this.images.length-1}}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"galleria-demo"},[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("div",{staticStyle:{padding:"0.5rem 0"}},[e("Button",{staticClass:"p-button-secondary",attrs:{icon:"pi pi-minus"},on:{click:t.prev}}),e("Button",{staticClass:"p-button-secondary",staticStyle:{"margin-left":"0.5rem"},attrs:{icon:"pi pi-plus"},on:{click:t.next}})],1),e("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:t.images,activeIndex:t.activeIndex,responsiveOptions:t.responsiveOptions,numVisible:5},on:{"update:activeIndex":function(e){t.activeIndex=e},"update:active-index":function(e){t.activeIndex=e}},scopedSlots:t._u([{key:"item",fn:function(t){return[e("img",{staticStyle:{width:"100%"},attrs:{src:t.item.itemImageSrc,alt:t.item.alt}})]}},{key:"thumbnail",fn:function(t){return[e("img",{attrs:{src:t.item.thumbnailImageSrc,alt:t.item.alt}})]}}])})],1)]),e("GalleriaProgrammaticDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("Galleria "),e("span",[t._v("Programmatic")])]),e("p",[t._v("Galleria can be controlled programmatically using the "),e("b",[t._v("activeIndex")]),t._v(" property.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=Programmatic-legacy-DPaVHqLv.js.map
