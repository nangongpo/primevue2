import{P as a}from"./PhotoService-CFjbxwOy.js";import{n as i}from"./app.component-CxwrbeA3.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const s={data(){return{baseCode:{basic:'\n<Galleria ref="galleria" :value="images" :activeIndex.sync="activeIndex" :numVisible="5" style="max-width: 640px;" :class="galleriaClass"\n    :showThumbnails="showThumbnails" :showItemNavigators="true" :showItemNavigatorsOnHover="true"\n    :circular="true" :autoPlay="true" :transitionInterval="3000">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{\'width\': !fullScreen ? \'100%\' : \'\', \'display\': !fullScreen ? \'block\' : \'\'}]" />\n    </template>\n    <template #thumbnail="slotProps">\n        <div class="grid grid-nogutter justify-content-center">\n            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n        </div>\n    </template>\n    <template #footer>\n        <div class="custom-galleria-footer">\n            <Button icon="pi pi-list" @click="onThumbnailButtonClick" />\n            <span v-if="images" class="title-container">\n                <span>{{activeIndex + 1}}/{{images.length}}</span>\n                <span class="title">{{images[activeIndex].title}}</span>\n                <span>{{images[activeIndex].alt}}</span>\n            </span>\n            <Button :icon="fullScreenIcon" @click="toggleFullScreen" class="fullscreen-button" />\n        </div>\n    </template>\n</Galleria>\n        '},baseCode2:{basic:"\nimport PhotoService from '../../service/PhotoService';\n\nexport default {\n    data() {\n        return {\n            images: null,\n			responsiveOptions: [\n				{\n                    breakpoint: '1024px',\n                    numVisible: 5\n                },\n                {\n                    breakpoint: '768px',\n                    numVisible: 3\n                },\n                {\n                    breakpoint: '560px',\n                    numVisible: 1\n                }\n			]\n        }\n    },\n    galleriaService: null,\n	created() {\n		this.galleriaService = new PhotoService();\n	},\n	mounted() {\n		this.galleriaService.getImages().then(data => this.images = data);\n    }\n}\n        "},baseCode3:{basic:"\n:deep(.custom-galleria) {\n    &.fullscreen {\n        display: flex;\n        flex-direction: column;\n\n        .p-galleria-content {\n            flex-grow: 1;\n            justify-content: center;\n        }\n    }\n\n    .p-galleria-content {\n        position: relative;\n    }\n\n    .p-galleria-thumbnail-wrapper {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n    }\n\n    .p-galleria-thumbnail-items-container {\n        width: 100%;\n    }\n\n    .custom-galleria-footer {\n        display: flex;\n        align-items: center;\n        background-color: rgba(0, 0, 0, .9);\n        color: #ffffff;\n\n        > button {\n            background-color: transparent;\n            color: #ffffff;\n            border: 0 none;\n            border-radius: 0;\n            margin: .2rem 0;\n\n            &.fullscreen-button {\n                margin-left: auto;\n            }\n\n            &:hover {\n                background-color: rgba(255, 255, 255, 0.1);\n            }\n        }\n    }\n\n    .title-container {\n        > span {\n            font-size: .9rem;\n            padding-left: .829rem;\n\n            &.title {\n                font-weight: bold;\n            }\n        }\n    }\n}\n        "}}}};var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("DocSectionCode",{attrs:{code:e.baseCode}}),t("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}}),t("DocSectionCode",{attrs:{code:e.baseCode3,importStyle:""}})],1)],1)],1)},c=[],o=i(s,r,c,!1,null,null);const u=o.exports,m={components:{GalleriaAdvancedDoc:u},data(){return{images:null,activeIndex:0,showThumbnails:!1,fullScreen:!1}},galleriaService:null,created(){this.galleriaService=new a},mounted(){this.galleriaService.getImages().then(n=>this.images=n),this.bindDocumentListeners()},methods:{onThumbnailButtonClick(){this.showThumbnails=!this.showThumbnails},toggleFullScreen(){this.fullScreen?this.closeFullScreen():this.openFullScreen()},onFullScreenChange(){this.fullScreen=!this.fullScreen},openFullScreen(){let n=this.$refs.galleria.$el;n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen()},closeFullScreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},bindDocumentListeners(){document.addEventListener("fullscreenchange",this.onFullScreenChange),document.addEventListener("mozfullscreenchange",this.onFullScreenChange),document.addEventListener("webkitfullscreenchange",this.onFullScreenChange),document.addEventListener("msfullscreenchange",this.onFullScreenChange)},unbindDocumentListeners(){document.removeEventListener("fullscreenchange",this.onFullScreenChange),document.removeEventListener("mozfullscreenchange",this.onFullScreenChange),document.removeEventListener("webkitfullscreenchange",this.onFullScreenChange),document.removeEventListener("msfullscreenchange",this.onFullScreenChange)}},computed:{galleriaClass(){return["custom-galleria",{fullscreen:this.fullScreen}]},fullScreenIcon(){return"pi ".concat(this.fullScreen?"pi-window-minimize":"pi-window-maximize")}}};var d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"galleria-demo"},[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("Galleria",{ref:"galleria",class:e.galleriaClass,staticStyle:{"max-width":"640px"},attrs:{value:e.images,activeIndex:e.activeIndex,numVisible:5,showThumbnails:e.showThumbnails,showItemNavigators:!0,showItemNavigatorsOnHover:!0,circular:!0,autoPlay:!0,transitionInterval:3e3},on:{"update:activeIndex":function(l){e.activeIndex=l},"update:active-index":function(l){e.activeIndex=l}},scopedSlots:e._u([{key:"item",fn:function(l){return[t("img",{style:[{width:e.fullScreen?"":"100%",display:e.fullScreen?"":"block"}],attrs:{src:l.item.itemImageSrc,alt:l.item.alt}})]}},{key:"thumbnail",fn:function(l){return[t("div",{staticClass:"grid grid-nogutter justify-content-center"},[t("img",{staticStyle:{display:"block"},attrs:{src:l.item.thumbnailImageSrc,alt:l.item.alt}})])]}},{key:"footer",fn:function(){return[t("div",{staticClass:"custom-galleria-footer"},[t("Button",{attrs:{icon:"pi pi-list"},on:{click:e.onThumbnailButtonClick}}),e.images?t("span",{staticClass:"title-container"},[t("span",[e._v(e._s(e.activeIndex+1)+"/"+e._s(e.images.length))]),t("span",{staticClass:"title"},[e._v(e._s(e.images[e.activeIndex].title))]),t("span",[e._v(e._s(e.images[e.activeIndex].alt))])]):e._e(),t("Button",{staticClass:"fullscreen-button",attrs:{icon:e.fullScreenIcon},on:{click:e.toggleFullScreen}})],1)]},proxy:!0}])})],1)]),t("GalleriaAdvancedDoc")],1)},f=[function(){var n=this,e=n._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[n._v("Galleria "),e("span",[n._v("Advanced")])]),e("p",[n._v("Galleria can be extended further to implement complex requirements.")])])])}],g=i(m,d,f,!1,null,"a92cb482");const x=g.exports;export{x as default};
//# sourceMappingURL=Advanced-DGFqHGbW.js.map
