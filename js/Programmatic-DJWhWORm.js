import{P as s}from"./PhotoService-CFjbxwOy.js";import{n}from"./app.component-BAbvz7X_.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const r={data(){return{baseCode:{basic:'\n<div style="padding: .5rem 0">\n    <Button icon="pi pi-minus" @click="prev" class="p-button-secondary" />\n    <Button icon="pi pi-plus" @click="next" class="p-button-secondary" style="margin-left: .5rem" />\n</div>\n\n<Galleria :value="images" :activeIndex.sync="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />\n    </template>\n</Galleria>\n        '},baseCode2:{basic:"\nimport PhotoService from '../../service/PhotoService';\n\nexport default {\n    data() {\n        return {\n            images: null,\n            activeIndex: 2,\n			responsiveOptions: [\n				{\n                    breakpoint: '1024px',\n                    numVisible: 5\n                },\n                {\n                    breakpoint: '768px',\n                    numVisible: 3\n                },\n                {\n                    breakpoint: '560px',\n                    numVisible: 1\n                }\n			]\n        }\n    },\n    galleriaService: null,\n	created() {\n		this.galleriaService = new PhotoService();\n	},\n	mounted() {\n		this.galleriaService.getImages().then(data => this.images = data);\n    },\n    methods: {\n        next() {\n            this.activeIndex = (this.activeIndex === this.images.length - 1) ? 0 : this.activeIndex + 1;\n        },\n        prev() {\n            this.activeIndex = (this.activeIndex === 0) ? 0 : this.images.length - 1;\n        }\n    }\n}\n        "}}}};var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("DocSectionCode",{attrs:{code:e.baseCode}}),t("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}})],1)],1)],1)},c=[],l=n(r,o,c,!1,null,null);const m=l.exports,d={components:{GalleriaProgrammaticDoc:m},data(){return{images:null,activeIndex:2,responsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}},galleriaService:null,created(){this.galleriaService=new s},mounted(){this.galleriaService.getImages().then(i=>this.images=i)},methods:{next(){this.activeIndex=this.activeIndex===this.images.length-1?0:this.activeIndex+1},prev(){this.activeIndex=this.activeIndex===0?0:this.images.length-1}}};var p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"galleria-demo"},[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("div",{staticStyle:{padding:"0.5rem 0"}},[t("Button",{staticClass:"p-button-secondary",attrs:{icon:"pi pi-minus"},on:{click:e.prev}}),t("Button",{staticClass:"p-button-secondary",staticStyle:{"margin-left":"0.5rem"},attrs:{icon:"pi pi-plus"},on:{click:e.next}})],1),t("Galleria",{staticStyle:{"max-width":"640px"},attrs:{value:e.images,activeIndex:e.activeIndex,responsiveOptions:e.responsiveOptions,numVisible:5},on:{"update:activeIndex":function(a){e.activeIndex=a},"update:active-index":function(a){e.activeIndex=a}},scopedSlots:e._u([{key:"item",fn:function(a){return[t("img",{staticStyle:{width:"100%"},attrs:{src:a.item.itemImageSrc,alt:a.item.alt}})]}},{key:"thumbnail",fn:function(a){return[t("img",{attrs:{src:a.item.thumbnailImageSrc,alt:a.item.alt}})]}}])})],1)]),t("GalleriaProgrammaticDoc")],1)},v=[function(){var i=this,e=i._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[i._v("Galleria "),e("span",[i._v("Programmatic")])]),e("p",[i._v("Galleria can be controlled programmatically using the "),e("b",[i._v("activeIndex")]),i._v(" property.")])])])}],u=n(d,p,v,!1,null,null);const I=u.exports;export{I as default};
//# sourceMappingURL=Programmatic-DJWhWORm.js.map
