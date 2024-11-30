System.register(["./app.component-legacy-7lS-4wLG.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(t,e){"use strict";var n;return{setters:[function(t){n=t.n},null,null,null,null],execute:function(){var e=n({name:"Documentation",data:function(){return{importCode:{basic:"\nimport InputSwitch from 'primevue2/inputswitch';\n        "},baseCode:{basic:'\n<InputSwitch v-model="checked" />\n        '},baseCode2:{basic:"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tchecked: false\n\t\t}\n\t}\n}\n        "},baseCode3:{basic:"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tchecked: true\n\t\t}\n\t}\n}\n        "}}}},(function(){var t=this,e=t._self._c;return e("div",[e("h5",[t._v("Import")]),e("DocSectionCode",{attrs:{code:t.importCode,importCode:""}}),e("h5",[t._v("Getting Started")]),e("p",[t._v("Two-way binding to a boolean property is defined using the standard v-model directive.")]),e("DocSectionCode",{attrs:{code:t.baseCode}}),e("DocSectionCode",{attrs:{code:t.baseCode2,importCode:""}}),e("p",[t._v(" As model is two-way binding enabled, setting the bound value as true displays the state as checked by default. ")]),e("DocSectionCode",{attrs:{code:t.baseCode3}}),e("h5",[t._v("Properties")]),e("p",[t._v(" Any property as style and class are passed to the main container element. Following are the additional properties to configure the component. ")]),t._m(0),e("h5",[t._v("Events")]),t._m(1),e("h5",[t._v("Styling")]),e("p",[t._v(" Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page. ")],1),t._m(2),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("boolean")]),e("td",[t._v("null")]),e("td",[t._v("Specifies whether a inputswitch should be checked or not.")])]),e("tr",[e("td",[t._v("inputId")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Identifier of the input element.")])]),e("tr",[e("td",[t._v("name")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Name of the input element.")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("When present, it specifies that the component should be disabled.")])]),e("tr",[e("td",[t._v("ariaLabelledBy")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v(" Establishes relationships between the component and label(s) where its value should be one or more element IDs. ")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v("event: Browser event.")]),e("td",[t._v("Callback to invoke on value change.")])]),e("tr",[e("td",[t._v("click")]),e("td",[t._v("event: Browser event.")]),e("td",[t._v("Callback to invoke on click.")])]),e("tr",[e("td",[t._v("input")]),e("td",[t._v("event: Checked state as a boolean.")]),e("td",[t._v("Callback to invoke on value change.")])]),e("tr",[e("td",[t._v("focus")]),e("td",[t._v("event: Browser event.")]),e("td",[t._v("Callback to invoke when the element receives focus.")])]),e("tr",[e("td",[t._v("blur")]),e("td",[t._v("event: Browser event.")]),e("td",[t._v("Callback to invoke when the element loses focus.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-inputswitch")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-inputswitch-checked")]),e("td",[t._v("Container element in active state.")])]),e("tr",[e("td",[t._v("p-inputswitch-slider")]),e("td",[t._v("Slider element behind the handle.")])])])])])}],!1,null,null).exports,o=n({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<h3>Basic</h3>\n<InputSwitch v-model="checked1" />\n\n<h3>Preselection</h3>\n<InputSwitch v-model="checked2" />\n        '},sourceCode2:{basic:"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tchecked1: false,\n\t\t\tchecked2: true\n\t\t}\n\t}\n}\n        "}}}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("DocSectionCode",{attrs:{code:t.sourceCode1}}),e("DocSectionCode",{attrs:{code:t.sourceCode2,importCode:""}})],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/inputswitch",target:"_blank",rel:"noopener noreferrer"}},[t("span",[this._v("View on GitHub")])])}],!1,null,null).exports,a=n({components:{Documentation:e,SourceCode:o}},(function(){var t=this._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("Documentation")],1),t("TabPanel",{attrs:{header:"Source"}},[t("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;t("default",n({data:function(){return{checked1:!1,checked2:!0}},components:{InputSwitchDoc:a}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Basic")]),e("InputSwitch",{model:{value:t.checked1,callback:function(e){t.checked1=e},expression:"checked1"}}),e("h5",[t._v("Preselection")]),e("InputSwitch",{model:{value:t.checked2,callback:function(e){t.checked2=e},expression:"checked2"}})],1)]),e("InputSwitchDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("InputSwitch")]),e("p",[t._v("InputSwitch is used to select a boolean value.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=index-legacy-5d076T-n.js.map
