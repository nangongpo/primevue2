System.register(["./app.component-legacy-7lS-4wLG.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(e,t){"use strict";var n;return{setters:[function(e){n=e.n},null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".p-fieldset p[data-v-55932f50]{line-height:1.5;margin:0}\n/*$vite$:1*/",document.head.appendChild(t);var o=n({name:"Documentation",data:function(){return{importCode:{basic:"\nimport Fieldset from 'primevue2/fieldset';\n        "},baseCode:{basic:"\n<Fieldset legend=\"Godfather I\">\n\tThe story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\n\tHis beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\n\tThrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\n\tkind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n</Fieldset>\n        "},customHeaderCode:{basic:"\n<Fieldset>\n    <template #legend>\n        Header Content\n    </template>\n\tContent\n</Fieldset>\n        "},toggleableCode:{basic:'\n<Fieldset legend="Godfather I" :toggleable="true">\n\tThe story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter\'s wedding.\n\tHis beloved son Michael has just come home from the war, but does not intend to become part of his father\'s business.\n\tThrough Michael\'s life the nature of the family business becomes clear. The business of the family is just like the head of the family,\n\tkind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n</Fieldset>\n        '},toggleableCode2:{basic:'\n<Fieldset legend="Header Text" :toggleable="true" :collapsed="true">\n\tContent\n</Fieldset>\n        '},toggleableCode3:{basic:'\n<button type="button" @click="isCollapsed = !isCollapsed">Toggle Programmatically</button>\n<Fieldset legend="Header Text" :toggleable="true" :collapsed.sync="isCollapsed">\n\tContent\n</Fieldset>\n        '}}}},(function(){var e=this,t=e._self._c;return t("div",[t("h5",[e._v("Import")]),t("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),t("h5",[e._v("Getting Started")]),t("p",[e._v("Fieldset is a container component that accepts content as its children.")]),t("DocSectionCode",{attrs:{code:e.baseCode}}),t("h5",[e._v("Custom Header")]),e._m(0),t("DocSectionCode",{attrs:{code:e.customHeaderCode}}),t("h5",[e._v("Toggleable")]),e._m(1),t("DocSectionCode",{attrs:{code:e.toggleableCode}}),e._m(2),t("DocSectionCode",{attrs:{code:e.toggleableCode2}}),t("p",[e._v("Use the sync operator to enable two-way binding.")]),t("DocSectionCode",{attrs:{code:e.toggleableCode3}}),t("h5",[e._v("Properties")]),t("p",[e._v(" Any property as style and class are passed to the main container element. Following are the additional properties to configure the component. ")]),e._m(3),t("h5",[e._v("Events")]),e._m(4),t("h5",[e._v("Slots")]),e._m(5),t("h5",[e._v("Styling")]),t("p",[e._v(" Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page. ")],1),e._m(6),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1)}),[function(){var e=this,t=e._self._c;return t("p",[e._v("Header of the panel is either defined with the "),t("i",[e._v("legend")]),e._v(" property or the legend template.")])},function(){var e=this,t=e._self._c;return t("p",[e._v("Content of the fieldset can be expanded and collapsed using "),t("i",[e._v("toggleable")]),e._v(" option..")])},function(){var e=this,t=e._self._c;return t("p",[e._v("To control the initial state of the toggleable panel, use the "),t("i",[e._v("collapsed")]),e._v(" property.")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("legend")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Header text of the fieldset.")])]),t("tr",[t("td",[e._v("toggleable")]),t("td",[e._v("boolean")]),t("td",[e._v("null")]),t("td",[e._v("When specified, content can toggled by clicking the legend.")])]),t("tr",[t("td",[e._v("collapsed")]),t("td",[e._v("boolean")]),t("td",[e._v("null")]),t("td",[e._v("Defines the default visibility state of the content.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("toggle")]),t("td",[e._v(" event.originalEvent: browser event "),t("br"),e._v(" event.value: collapsed state as a boolean ")]),t("td",[e._v("Callback to invoke when a tab gets expanded or collapsed.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("legend")]),t("td",[e._v("-")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-fieldset")]),t("td",[e._v("Fieldset element.")])]),t("tr",[t("td",[e._v("p-fieldset-toggleable")]),t("td",[e._v("Toggleable fieldset element.")])]),t("tr",[t("td",[e._v("p-fieldset-legend")]),t("td",[e._v("Legend element.")])]),t("tr",[t("td",[e._v("p-fieldset-content")]),t("td",[e._v("Content element.")])])])])])}],!1,null,null).exports,i=n({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<h5>Regular</h5>\n<Fieldset legend="Header">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n</Fieldset>\n\n<h5>Toggleable</h5>\n<Fieldset legend="Header" :toggleable="true">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n</Fieldset>\n        '},sourceCode2:{basic:"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tvalue1: '',\n\t\t\tvalue2: '',\n\t\t\tvalue3: 'PrimeVue'\n\t\t}\n\t}\n}\n        "}}}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("DocSectionCode",{attrs:{code:e.sourceCode1}}),t("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)}),[function(){var e=this._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/fieldset",target:"_blank",rel:"noopener noreferrer"}},[e("span",[this._v("View on GitHub")])])}],!1,null,null).exports,a=n({components:{Documentation:o,SourceCode:i}},(function(){var e=this._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("Documentation")],1),e("TabPanel",{attrs:{header:"Source"}},[e("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;e("default",n({data:function(){return{value1:"",value2:"",value3:"PrimeVue"}},components:{FieldsetDoc:a}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Regular")]),t("Fieldset",{attrs:{legend:"Header"}},[t("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])]),t("h5",[e._v("Toggleable")]),t("Fieldset",{attrs:{legend:"Header",toggleable:!0}},[t("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])])],1)]),t("FieldsetDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("Fieldset")]),t("p",[e._v("Fieldset is a grouping component with the optional content toggle feature.")])])])}],!1,null,"55932f50").exports)}}}));
//# sourceMappingURL=index-legacy-Dj80uzxe.js.map
