System.register(["./app.component-legacy-cLUjg6K2.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(e,t){"use strict";var a;return{setters:[function(e){a=e.n},null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".p-chip.custom-chip[data-v-35d7ce7d]{background:var(--primary-color);color:var(--primary-color-text)}\n/*$vite$:1*/",document.head.appendChild(t);var i=a({name:"Documentation",data:function(){return{importCode:{basic:"\nimport Chip from 'primevue2/chip';\n        "},baseCode:{basic:'\n<Chip label="Text Only" />\n<Chip label="Text with icon" icon="pi pi-check" />\n<Chip label="Text with image" image="user.png" />\n        '},removableCode:{basic:'\n<Chip label="Text" removable />\n        '},templatingCode:{basic:"\n<Chip>\n   Content\n</Chip>\n        "}}}},(function(){var e=this,t=e._self._c;return t("div",[t("h5",[e._v("Import")]),t("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),t("h5",[e._v("Getting Started")]),t("p",[e._v("Chip can display labels, icons and images.")]),t("DocSectionCode",{attrs:{code:e.baseCode}}),t("h5",[e._v("Removable")]),e._m(0),t("DocSectionCode",{attrs:{code:e.removableCode}}),t("h5",[e._v("Templating")]),t("p",[e._v("Content can easily be customized with the default slot instead of using the built-in modes.")]),t("DocSectionCode",{attrs:{code:e.templatingCode}}),t("h5",[e._v("Properties")]),t("p",[e._v(" Any property as style and class are passed to the main container element. Following are the additional properties to configure the component. ")]),e._m(1),t("h5",[e._v("Events")]),e._m(2),t("h5",[e._v("Styling")]),t("p",[e._v(" Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page. ")],1),e._m(3),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1)}),[function(){var e=this,t=e._self._c;return t("p",[e._v(" Setting "),t("i",[e._v("removable")]),e._v(" property displays an icon to close the chip, the optional "),t("i",[e._v("remove")]),e._v(" event is available to get notified when a chip is hidden. ")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("label")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Defines the text to display.")])]),t("tr",[t("td",[e._v("icon")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Defines the icon to display.")])]),t("tr",[t("td",[e._v("image")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Defines the image to display.")])]),t("tr",[t("td",[e._v("removable")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Whether to display a remove icon.")])]),t("tr",[t("td",[e._v("removeIconClass")]),t("td",[e._v("string")]),t("td",[e._v("pi pi-times-circle")]),t("td",[e._v("Icon of the remove element.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("remove")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke when a chip is removed.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-chip")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-chip-image")]),t("td",[e._v("Container element in image mode.")])]),t("tr",[t("td",[e._v("p-chip-text")]),t("td",[e._v("Text of the chip.")])]),t("tr",[t("td",[e._v("p-chip-remove-icon")]),t("td",[e._v("Remove icon.")])])])])])}],!1,null,null).exports,s=a({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<h5>Basic</h5>\n<div class="flex align-items-center">\n\t<Chip label="Action" class="mr-2" />\n\t<Chip label="Comedy" class="mr-2" />\n\t<Chip label="Mystery" class="mr-2" />\n\t<Chip label="Thriller" removable />\n</div>\n\n<h5>Icon</h5>\n<div class="flex align-items-center">\n\t<Chip label="Apple" icon="pi pi-apple" class="mr-2" />\n\t<Chip label="Facebook" icon="pi pi-facebook" class="mr-2" />\n\t<Chip label="Google" icon="pi pi-google" class="mr-2" />\n\t<Chip label="Microsoft" icon="pi pi-microsoft" removable />\n</div>\n\n<h5>Image</h5>\n<div class="flex align-items-center">\n\t<Chip label="Amy Elsner" image="demo/images/avatar/amyelsner.png" class="mr-2" />\n\t<Chip label="Asiya Javayant" image="demo/images/avatar/asiyajavayant.png" class="mr-2" />\n\t<Chip label="Onyama Limba" image="demo/images/avatar/onyamalimba.png" class="mr-2" />\n\t<Chip label="Xuxue Feng" image="demo/images/avatar/xuxuefeng.png" removable />\n</div>\n\n<h5>Styling</h5>\n<div class="flex align-items-center">\n\t<Chip label="Action" class="mr-2 custom-chip" />\n\t<Chip label="Apple" icon="pi pi-apple" class="mr-2 custom-chip" />\n\t<Chip label="Onyama Limba" image="demo/images/avatar/onyamalimba.png" class="mr-2 custom-chip" />\n\t<Chip label="Xuxue Feng" image="demo/images/avatar/xuxuefeng.png" class="custom-chip" removable />\n</div>\n        '}}}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("DocSectionCode",{attrs:{code:e.sourceCode1}})],1)}),[function(){var e=this._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/chip",target:"_blank",rel:"noopener noreferrer"}},[e("span",[this._v("View on GitHub")])])}],!1,null,null).exports,l=a({components:{Documentation:i,SourceCode:s}},(function(){var e=this._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("Documentation")],1),e("TabPanel",{attrs:{header:"Source"}},[e("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;e("default",a({components:{ChipDoc:l}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h4",[e._v("Chip")]),t("h5",{staticClass:"text-center sm:text-left"},[e._v("Basic")]),t("div",{staticClass:"flex align-items-center flex-column sm:flex-row"},[t("Chip",{staticClass:"mr-2 mb-2",attrs:{label:"Action"}}),t("Chip",{staticClass:"mr-2 mb-2",attrs:{label:"Comedy"}}),t("Chip",{staticClass:"mr-2 mb-2",attrs:{label:"Mystery"}}),t("Chip",{staticClass:"mb-2",attrs:{label:"Thriller",removable:!0}})],1),t("h5",{staticClass:"text-center sm:text-left"},[e._v("Icon")]),t("div",{staticClass:"flex align-items-center flex-column sm:flex-row"},[t("Chip",{staticClass:"mr-2 mb-2",attrs:{label:"Apple",icon:"pi pi-apple"}}),t("Chip",{staticClass:"mr-2 mb-2",attrs:{label:"Facebook",icon:"pi pi-facebook"}}),t("Chip",{staticClass:"mr-2 mb-2",attrs:{label:"Google",icon:"pi pi-google"}}),t("Chip",{staticClass:"mb-2",attrs:{label:"Microsoft",icon:"pi pi-microsoft",removable:!0}})],1),t("h5",{staticClass:"text-center sm:text-left"},[e._v("Image")]),t("div",{staticClass:"flex align-items-center flex-column sm:flex-row"},[t("Chip",{staticClass:"mr-2 mb-2",attrs:{label:"Amy Elsner",image:e.$publicUrl("demo/images/avatar/amyelsner.png")}}),t("Chip",{staticClass:"mr-2 mb-2",attrs:{label:"Asiya Javayant",image:e.$publicUrl("demo/images/avatar/asiyajavayant.png")}}),t("Chip",{staticClass:"mr-2 mb-2",attrs:{label:"Onyama Limba",image:e.$publicUrl("demo/images/avatar/onyamalimba.png")}}),t("Chip",{staticClass:"mb-2",attrs:{label:"Xuxue Feng",image:e.$publicUrl("demo/images/avatar/xuxuefeng.png"),removable:!0}})],1),t("h5",{staticClass:"text-center sm:text-left"},[e._v("Styling")]),t("div",{staticClass:"flex align-items-center flex-column sm:flex-row"},[t("Chip",{staticClass:"mr-2 mb-2 custom-chip",attrs:{label:"Action"}}),t("Chip",{staticClass:"mr-2 mb-2 custom-chip",attrs:{label:"Comedy"}}),t("Chip",{staticClass:"mr-2 mb-2 custom-chip",attrs:{label:"Onyama Limba",image:e.$publicUrl("demo/images/avatar/onyamalimba.png")}}),t("Chip",{staticClass:"mb-2 custom-chip",attrs:{label:"Xuxue Feng",image:e.$publicUrl("demo/images/avatar/xuxuefeng.png"),removable:!0}})],1)])]),t("ChipDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("Chip")]),t("p",[e._v("Chip represents entities using icons, labels and images.")])])])}],!1,null,"35d7ce7d").exports)}}}));
//# sourceMappingURL=index-legacy-BMP62WBW.js.map
