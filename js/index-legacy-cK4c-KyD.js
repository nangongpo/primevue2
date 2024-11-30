System.register(["./app.component-legacy-7lS-4wLG.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(e,t){"use strict";var c;return{setters:[function(e){c=e.n},null,null,null,null],execute:function(){var t=c({name:"Documentation",data:function(){return{importCode:{basic:"\nimport Checkbox from 'primevue2/checkbox';\n        "},baseCode:{basic:'\n<Checkbox v-model="checked" :binary="true" />\n        '},multipleValuesCode:{basic:'\n<Checkbox id="city1" inputId="city1" name="city" value="Chicago" v-model="cities" />\n<Checkbox id="city2" inputId="city2" name="city" value="Los Angeles" v-model="cities" />\n<Checkbox id="city3" inputId="city3" name="city" value="New York" v-model="cities" />\n<Checkbox id="city4" inputId="city4" name="city" value="San Francisco" v-model="cities" />\n        '},multipleValuesCode2:{basic:"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tcities: []\n\t\t}\n\t}\n}\n        "}}}},(function(){var e=this,t=e._self._c;return t("div",[t("h5",[e._v("Import")]),t("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),t("h5",[e._v("Getting Started")]),t("p",[e._v(" Checkbox can either be used in multiple selection with other checkboxes or as a single checkbox to provide a boolean value. ")]),t("DocSectionCode",{attrs:{code:e.baseCode}}),t("h5",[e._v("Multiple Values")]),t("p",[e._v("Multiple mode is enabled by default, v-model property refers to an array to bind the selected values.")]),t("DocSectionCode",{attrs:{code:e.multipleValuesCode}}),t("DocSectionCode",{attrs:{code:e.multipleValuesCode2,importCode:""}}),t("p",[e._v(" As v-model is two-way binding enabled, prepopulating the model array with values is enough to display the related checkboxes as checked by default. ")]),t("h5",[e._v("Properties")]),t("p",[e._v(" Any property such as name and autofocus are passed to the underlying input element. Following are the additional properties to configure the component. ")]),e._m(0),t("h5",[e._v("Events")]),e._m(1),t("h5",[e._v("Styling")]),t("p",[e._v(" Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page. ")],1),e._m(2),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("any")]),t("td",[e._v("null")]),t("td",[e._v("Value of the checkbox.")])]),t("tr",[t("td",[e._v("binary")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Allows to select a boolean value instead of multiple values.")])]),t("tr",[t("td",[e._v("trueValue")]),t("td",[e._v("any")]),t("td",[e._v("null")]),t("td",[e._v("Value in checked state.")])]),t("tr",[t("td",[e._v("falseValue")]),t("td",[e._v("any")]),t("td",[e._v("null")]),t("td",[e._v("Value in unchecked state.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke on value change.")])]),t("tr",[t("td",[e._v("input")]),t("td",[e._v("event: Value of checkbox")]),t("td",[e._v("Callback to invoke on click.")])]),t("tr",[t("td",[e._v("click")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke click.")])]),t("tr",[t("td",[e._v("focus")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke on focus.")])]),t("tr",[t("td",[e._v("blur")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke on blur.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-chkbox")]),t("td",[e._v("Container element")])]),t("tr",[t("td",[e._v("p-chkbox-box")]),t("td",[e._v("Container of icon.")])]),t("tr",[t("td",[e._v("p-chkbox-icon")]),t("td",[e._v("Icon element.")])]),t("tr",[t("td",[e._v("p-chkbox-label")]),t("td",[e._v("Label element.")])])])])])}],!1,null,null).exports,i=c({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<h3>Basic</h3>\n<div class="field-checkbox">\n    <Checkbox id="binary" v-model="checked" :binary="true" />\n    <label for="binary">{{checked}}</label>\n</div>\n\n<h3>Multiple</h3>\n<div class="field-checkbox">\n    <Checkbox id="city1" name="city" value="Chicago" v-model="cities" />\n    <label for="city1">Chicago</label>\n</div>\n<div class="field-checkbox">\n    <Checkbox id="city2" name="city" value="Los Angeles" v-model="cities" />\n    <label for="city2">Los Angeles</label>\n</div>\n<div class="field-checkbox">\n    <Checkbox id="city3" name="city" value="New York" v-model="cities" />\n    <label for="city3">New York</label>\n</div>\n<div class="field-checkbox">\n    <Checkbox id="city4" name="city" value="San Francisco" v-model="cities" />\n    <label for="city4">San Francisco</label>\n</div>\n\n<h3>Dynamic Values, Preselection, Value Binding and Disabled Option</h3>\n<div v-for="category of categories" :key="category.key" class="field-checkbox">\n    <Checkbox :id="category.key" name="category" :value="category" v-model="selectedCategories" :disabled="category.key === \'R\'"/>\n    <label :for="category.key">{{category.name}}</label>\n</div>\n        '},sourceCode2:{basic:"\nexport default {\n    data() {\n        return {\n            checked: false,\n            cities: [],\n            categories: [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}],\n            selectedCategories: []\n        }\n    },\n    created() {\n        this.selectedCategories = this.categories.slice(1,3);\n    }\n}\n        "}}}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("DocSectionCode",{attrs:{code:e.sourceCode1}}),t("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)}),[function(){var e=this._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/checkbox",target:"_blank",rel:"noopener noreferrer"}},[e("span",[this._v("View on GitHub")])])}],!1,null,null).exports,a=c({components:{Documentation:t,SourceCode:i}},(function(){var e=this._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("Documentation")],1),e("TabPanel",{attrs:{header:"Source"}},[e("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;e("default",c({data:function(){return{checked:!1,cities:[],categories:[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}],selectedCategories:[]}},created:function(){this.selectedCategories=this.categories.slice(1,3)},components:{CheckboxDoc:a}},(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"content-section introduction"},[e._m(0),t("AppInputStyleSwitch")],1),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Basic")]),t("div",{staticClass:"field-checkbox"},[t("Checkbox",{attrs:{id:"binary",binary:!0},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),t("label",{attrs:{for:"binary"}},[e._v(e._s(e.checked))])],1),t("h5",[e._v("Multiple")]),t("div",{staticClass:"field-checkbox"},[t("Checkbox",{attrs:{id:"city1",name:"city",value:"Chicago",disabled:!0},model:{value:e.cities,callback:function(t){e.cities=t},expression:"cities"}}),t("label",{attrs:{for:"city1"}},[e._v("Chicago")])],1),t("div",{staticClass:"field-checkbox"},[t("Checkbox",{attrs:{id:"city2",name:"city",value:"Los Angeles"},model:{value:e.cities,callback:function(t){e.cities=t},expression:"cities"}}),t("label",{attrs:{for:"city2"}},[e._v("Los Angeles")])],1),t("div",{staticClass:"field-checkbox"},[t("Checkbox",{attrs:{id:"city3",name:"city",value:"New York"},model:{value:e.cities,callback:function(t){e.cities=t},expression:"cities"}}),t("label",{attrs:{for:"city3"}},[e._v("New York")])],1),t("div",{staticClass:"field-checkbox"},[t("Checkbox",{attrs:{id:"city4",name:"city",value:"San Francisco"},model:{value:e.cities,callback:function(t){e.cities=t},expression:"cities"}}),t("label",{attrs:{for:"city4"}},[e._v("San Francisco")])],1),t("h5",[e._v("Dynamic Values, Preselection, Value Binding and Disabled Option")]),e._l(e.categories,(function(c){return t("div",{key:c.key,staticClass:"field-checkbox"},[t("Checkbox",{attrs:{id:c.key,name:"category",value:c,disabled:"R"===c.key},model:{value:e.selectedCategories,callback:function(t){e.selectedCategories=t},expression:"selectedCategories"}}),t("label",{attrs:{for:c.key}},[e._v(e._s(c.name))])],1)}))],2)]),t("CheckboxDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"feature-intro"},[t("h1",[e._v("Checkbox")]),t("p",[e._v("Checkbox is an extension to standard checkbox element with theming.")])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=index-legacy-cK4c-KyD.js.map
