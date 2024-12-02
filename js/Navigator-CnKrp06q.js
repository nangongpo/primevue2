import{P as r}from"./PhotoService-CFjbxwOy.js";import{n as s}from"./app.component-BAbvz7X_.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const l={data(){return{baseCode:{basic:'\n<h3>Item Navigators and Thumbnails</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px"\n    :showItemNavigators="true">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n\n<h3>Item Navigators without Thumbnails</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px"\n    :showItemNavigators="true" :showThumbnails="false">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n\n<h3>Item Navigators on Hover</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px;"\n    :showItemNavigators="true" :showItemNavigatorsOnHover="true">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n\n<h3>Item Navigators and Indicators</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px;"\n    :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n        '},baseCode2:{basic:"\nimport PhotoService from '../../service/PhotoService';\n\nexport default {\n    data() {\n        return {\n            images: null,\n			responsiveOptions: [\n				{\n                    breakpoint: '1024px',\n                    numVisible: 5\n                },\n                {\n                    breakpoint: '768px',\n                    numVisible: 3\n                },\n                {\n                    breakpoint: '560px',\n                    numVisible: 1\n                }\n			]\n        }\n    },\n    galleriaService: null,\n	created() {\n		this.galleriaService = new PhotoService();\n	},\n	mounted() {\n		this.galleriaService.getImages().then(data => this.images = data);\n    }\n}\n        "}}}};var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("DocSectionCode",{attrs:{code:e.baseCode}}),t("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}})],1)],1)],1)},m=[],n=s(l,o,m,!1,null,null);const c=n.exports,p={components:{GalleriaNavigatorDoc:c},data(){return{images:null,responsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}},galleriaService:null,created(){this.galleriaService=new r},mounted(){this.galleriaService.getImages().then(a=>this.images=a)}};var u=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Item Navigators and Thumbnails")]),t("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:e.images,responsiveOptions:e.responsiveOptions,numVisible:5,circular:!0,showItemNavigators:!0},scopedSlots:e._u([{key:"item",fn:function(i){return[t("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:i.item.itemImageSrc,alt:i.item.alt}})]}},{key:"thumbnail",fn:function(i){return[t("img",{staticStyle:{display:"block"},attrs:{src:i.item.thumbnailImageSrc,alt:i.item.alt}})]}}])})],1),t("div",{staticClass:"card"},[t("h5",[e._v("Item Navigators without Thumbnails")]),t("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:e.images,responsiveOptions:e.responsiveOptions,numVisible:5,circular:!0,showItemNavigators:!0,showThumbnails:!1},scopedSlots:e._u([{key:"item",fn:function(i){return[t("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:i.item.itemImageSrc,alt:i.item.alt}})]}},{key:"thumbnail",fn:function(i){return[t("img",{staticStyle:{display:"block"},attrs:{src:i.item.thumbnailImageSrc,alt:i.item.alt}})]}}])})],1),t("div",{staticClass:"card"},[t("h5",[e._v("Item Navigators on Hover")]),t("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:e.images,responsiveOptions:e.responsiveOptions,numVisible:5,circular:!0,showItemNavigators:!0,showItemNavigatorsOnHover:!0},scopedSlots:e._u([{key:"item",fn:function(i){return[t("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:i.item.itemImageSrc,alt:i.item.alt}})]}},{key:"thumbnail",fn:function(i){return[t("img",{staticStyle:{display:"block"},attrs:{src:i.item.thumbnailImageSrc,alt:i.item.alt}})]}}])})],1),t("div",{staticClass:"card"},[t("h5",[e._v("Item Navigators and Indicators")]),t("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:e.images,responsiveOptions:e.responsiveOptions,numVisible:5,circular:!0,showItemNavigators:!0,showThumbnails:!1,showItemNavigatorsOnHover:!0,showIndicators:!0},scopedSlots:e._u([{key:"item",fn:function(i){return[t("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:i.item.itemImageSrc,alt:i.item.alt}})]}},{key:"thumbnail",fn:function(i){return[t("img",{staticStyle:{display:"block"},attrs:{src:i.item.thumbnailImageSrc,alt:i.item.alt}})]}}])})],1)]),t("GalleriaNavigatorDoc")],1)},v=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[a._v("Galleria "),e("span",[a._v("Navigator")])]),e("p",[a._v("Combining item navigators, thumbnails and indicators provide various UI alternatives.")])])])}],h=s(p,u,v,!1,null,null);const I=h.exports;export{I as default};
//# sourceMappingURL=Navigator-CnKrp06q.js.map