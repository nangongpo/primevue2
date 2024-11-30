import{n as i}from"./app.component-CxwrbeA3.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const r={name:"Documentation",data(){return{importCode:{basic:"\nimport ImagePreview from 'primevue2/imagepreview';\n        "},baseCode:{basic:'\n<ImagePreview src="image1.png" alt="Image Text" />\n        '},indicatorTemplatingCode:{basic:"\nexport default {\n    data() {\n        return {\n            home: {icon: 'pi pi-home', to: '/'},\n            items: [\n                {label: 'Computer'},\n                {label: 'Notebook'},\n                {label: 'Accessories'},\n                {label: 'Backpacks'},\n                {label: 'Item'}\n            ]\n        }\n    }\n}\n        "}}}};var n=function(){var e=this,a=e._self._c;return a("div",[a("h5",[e._v("Import")]),a("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),a("h5",[e._v("Getting Started")]),e._m(0),a("DocSectionCode",{attrs:{code:e.baseCode}}),a("h5",[e._v("Preview")]),a("p",[e._v(" Preview mode displays a modal layer when the image is clicked that provides transformation options such as rotating and zooming. ")]),a("h5",[e._v("Indicator Templating")]),e._m(1),a("DocSectionCode",{attrs:{code:e.indicatorTemplatingCode}}),a("h5",[e._v("Properties")]),a("p",[e._v("Image passes any valid attribute to the underlying img element, additional attribute is the following.")]),e._m(2),a("h5",[e._v("Events")]),a("p",[e._v(" Any valid event like click and mouseover are passed to the underlying input element. Events below are the additional ones related to the preview functionality. ")]),e._m(3),a("h5",[e._v("Slots")]),e._m(4),a("h5",[e._v("Styling")]),a("p",[e._v(" Following is the list of structural style classes, for theming classes visit "),a("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page. ")],1),e._m(5),a("h5",[e._v("Dependencies")]),a("p",[e._v("None.")])],1)},o=[function(){var t=this,e=t._self._c;return e("p",[t._v("Image is used as the native "),e("i",[t._v("img")]),t._v(" element and supports all properties that the native element has.")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" An eye icon is displayed by default when the image is hovered in preview mode. Use the "),e("i",[t._v("indicator")]),t._v(" template for custom content. ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("preview")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Controls the preview functionality.")])]),e("tr",[e("td",[t._v("imageStyle")]),e("td",[t._v("any")]),e("td",[t._v("null")]),e("td",[t._v("Inline style of the image element.")])]),e("tr",[e("td",[t._v("imageClass")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Style class of the image element.")])]),e("tr",[e("td",[t._v("styles")]),e("td",[t._v("any")]),e("td",[t._v("null")]),e("td",[t._v("Style class of the element.")])]),e("tr",[e("td",[t._v("className")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Inline style of the element.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("show")]),e("td",[t._v("-")]),e("td",[t._v("Triggered when the preview overlay is shown.")])]),e("tr",[e("td",[t._v("hide")]),e("td",[t._v("-")]),e("td",[t._v("Triggered when the preview overlay is hidden.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("indicator")]),e("td",[t._v("-")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-image")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-image-preview-container")]),e("td",[t._v("Container element with preview enabled.")])]),e("tr",[e("td",[t._v("p-image-preview-indicator")]),e("td",[t._v("Mask layer over the image when hovered.")])]),e("tr",[e("td",[t._v("p-image-preview-icon")]),e("td",[t._v("Icon of the preview indicator.")])]),e("tr",[e("td",[t._v("p-image-mask")]),e("td",[t._v("Preview overlay container.")])]),e("tr",[e("td",[t._v("p-image-toolbar")]),e("td",[t._v("Transformation options container.")])]),e("tr",[e("td",[t._v("p-image-action")]),e("td",[t._v("An element inside the toolbar.")])]),e("tr",[e("td",[t._v("p-image-preview")]),e("td",[t._v("Image element inside the preview overlay.")])])])])])}],s=i(r,n,o,!1,null,null);const l=s.exports,v={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<h5>Basic</h5>\n<ImagePreview src="demo/images/galleria/galleria1.jpg" alt="Image" width="250" />\n\n<h5>Preview</h5>\n<ImagePreview src="demo/images/galleria/galleria11.jpg" alt="Image" width="250" preview />\n        '}}}};var _=function(){var e=this,a=e._self._c;return a("div",[e._m(0),a("DocSectionCode",{attrs:{code:e.sourceCode1}})],1)},c=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/imagepreview",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])])}],d=i(v,_,c,!1,null,null);const m=d.exports,p={components:{Documentation:l,SourceCode:m}};var h=function(){var e=this,a=e._self._c;return a("div",{staticClass:"content-section documentation"},[a("TabView",[a("TabPanel",{attrs:{header:"Documentation"}},[a("Documentation")],1),a("TabPanel",{attrs:{header:"Source"}},[a("SourceCode")],1)],1)],1)},g=[],u=i(p,h,g,!1,null,null);const f=u.exports,w={components:{ImagePreviewDoc:f}};var b=function(){var e=this,a=e._self._c;return a("div",[a("div",{staticClass:"content-section introduction"},[a("div",{staticClass:"feature-intro"},[a("h1",[e._v("Image Preview")]),a("p",[e._v(" Displays an image with preview and tranformation options. For multiple image, see "),a("router-link",{attrs:{to:"galleria"}},[e._v("Galleria")]),e._v(". ")],1)])]),a("div",{staticClass:"content-section implementation"},[a("div",{staticClass:"card"},[a("h5",[e._v("Basic")]),a("ImagePreview",{attrs:{src:e.$publicUrl("demo/images/galleria/galleria1.jpg"),alt:"Image",width:"250"}}),a("h5",[e._v("Preview")]),a("ImagePreview",{attrs:{src:e.$publicUrl("demo/images/galleria/galleria11.jpg"),alt:"Image",width:"250",preview:""}})],1)]),a("ImagePreviewDoc")],1)},C=[],y=i(w,b,C,!1,null,null);const k=y.exports;export{k as default};
//# sourceMappingURL=index-B-P0wXXi.js.map
