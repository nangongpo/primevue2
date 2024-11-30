import{P as o}from"./PhotoService-CFjbxwOy.js";import{n as a}from"./app.component-CxwrbeA3.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const r={data(){return{baseCode:{basic:'\n<h3>Indicators with Click Event</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"\n    :showThumbnails="false" :showIndicators="true">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n</Galleria>\n\n<h3>Indicators with Hover Event</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"\n    :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n</Galleria>\n\n<h3>Inside Content</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"\n    :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n</Galleria>\n\n<h3>Positioned at Top</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"\n    :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" indicatorsPosition="top">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n</Galleria>\n\n<h3>Positioned at Left</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"\n    :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" indicatorsPosition="left">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n</Galleria>\n\n<h3>Positioned at Right</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"\n    :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" indicatorsPosition="right">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n</Galleria>\n\n<h3>Indicator Template</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px;" class="custom-indicator-galleria"\n    :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" indicatorsPosition="left">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #indicator="{index}">\n        <span style="color: #e9ecef; cursor: pointer">\n            {{index + 1}}\n        </span>\n    </template>\n</Galleria>\n        '},baseCode2:{basic:"\nimport PhotoService from '../../service/PhotoService';\n\nexport default {\n    data() {\n        return {\n            images: null,\n            images2: null,\n			responsiveOptions: [\n				{\n                    breakpoint: '1024px',\n                    numVisible: 5\n                },\n                {\n                    breakpoint: '768px',\n                    numVisible: 3\n                },\n                {\n                    breakpoint: '560px',\n                    numVisible: 1\n                }\n			]\n        }\n    },\n    galleriaService: null,\n	created() {\n		this.galleriaService = new PhotoService();\n	},\n	mounted() {\n		this.galleriaService.getImages().then(data => {\n            this.images = data;\n            this.images2 = data.slice(0, 5);\n        });\n    }\n}\n        "},baseCode3:{basic:"\n:deep(.custom-indicator-galleria) {\n    .indicator-text {\n        color: #e9ecef;\n        cursor: pointer;\n    }\n\n    .p-highlight {\n        .indicator-text {\n            color: var(--primary-color);\n        }\n    }\n}\n        "}}}};var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Source"}},[e("DocSectionCode",{attrs:{code:t.baseCode}}),e("DocSectionCode",{attrs:{code:t.baseCode2,importCode:""}}),e("DocSectionCode",{attrs:{code:t.baseCode3,importStyle:""}})],1)],1)],1)},l=[],c=a(r,n,l,!1,null,null);const m=c.exports,d={components:{GalleriaIndicatorDoc:m},data(){return{images:null,images2:null,responsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}},galleriaService:null,created(){this.galleriaService=new o},mounted(){this.galleriaService.getImages().then(s=>{this.images=s,this.images2=s.slice(0,5)})}};var p=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Indicators with Click Event")]),e("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,showThumbnails:!1,showIndicators:!0},scopedSlots:t._u([{key:"item",fn:function(i){return[e("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:i.item.itemImageSrc,alt:i.item.alt}})]}}])})],1),e("div",{staticClass:"card"},[e("h5",[t._v("Indicators with Hover Event")]),e("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,showThumbnails:!1,showIndicators:!0,changeItemOnIndicatorHover:!0},scopedSlots:t._u([{key:"item",fn:function(i){return[e("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:i.item.itemImageSrc,alt:i.item.alt}})]}}])})],1),e("div",{staticClass:"card"},[e("h5",[t._v("Inside Content")]),e("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,showThumbnails:!1,showIndicators:!0,changeItemOnIndicatorHover:!0,showIndicatorsOnItem:!0},scopedSlots:t._u([{key:"item",fn:function(i){return[e("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:i.item.itemImageSrc,alt:i.item.alt}})]}}])})],1),e("div",{staticClass:"card"},[e("h5",[t._v("Positioned at Top")]),e("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,showThumbnails:!1,showIndicators:!0,changeItemOnIndicatorHover:!0,showIndicatorsOnItem:!0,indicatorsPosition:"top"},scopedSlots:t._u([{key:"item",fn:function(i){return[e("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:i.item.itemImageSrc,alt:i.item.alt}})]}}])})],1),e("div",{staticClass:"card"},[e("h5",[t._v("Positioned at Left")]),e("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,showThumbnails:!1,showIndicators:!0,changeItemOnIndicatorHover:!0,showIndicatorsOnItem:!0,indicatorsPosition:"left"},scopedSlots:t._u([{key:"item",fn:function(i){return[e("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:i.item.itemImageSrc,alt:i.item.alt}})]}}])})],1),e("div",{staticClass:"card"},[e("h5",[t._v("Positioned at Right")]),e("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,showThumbnails:!1,showIndicators:!0,changeItemOnIndicatorHover:!0,showIndicatorsOnItem:!0,indicatorsPosition:"right"},scopedSlots:t._u([{key:"item",fn:function(i){return[e("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:i.item.itemImageSrc,alt:i.item.alt}})]}}])})],1),e("div",{staticClass:"card"},[e("h5",[t._v("Indicator Template")]),e("Galleria",{staticClass:"custom-indicator-galleria",staticStyle:{"max-width":"640px"},attrs:{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,showThumbnails:!1,showIndicators:!0,changeItemOnIndicatorHover:!0,showIndicatorsOnItem:!0,indicatorsPosition:"left"},scopedSlots:t._u([{key:"item",fn:function(i){return[e("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:i.item.itemImageSrc,alt:i.item.alt}})]}},{key:"indicator",fn:function({index:i}){return[e("span",{staticClass:"indicator-text"},[t._v(" "+t._s(i+1)+" ")])]}}])})],1)]),e("GalleriaIndicatorDoc")],1)},h=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[s._v("Galleria "),t("span",[s._v("Indicator")])]),t("p",[s._v("Indicators allow quick navigation between the items.")])])])}],u=a(d,p,h,!1,null,"2da5f767");const y=u.exports;export{y as default};
//# sourceMappingURL=Indicator-ZdkhuB_B.js.map
