import{n as i}from"./app.component-CxwrbeA3.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const c={name:"Documentation",data(){return{importCode:{basic:"\nimport RadioButton from 'primevue2/radiobutton';\n        "},baseCode:{basic:'\n<RadioButton inputId="city1" name="city" value="Chicago" v-model="city" />\n<RadioButton inputId="city2" name="city" value="Los Angeles" v-model="city" />\n        '},baseCode2:{basic:"\nexport default {\n	data() {\n		return {\n			city: null\n		}\n	}\n}\n        "},baseCode3:{basic:"\nexport default {\n	data() {\n		return {\n			city: 'Chicago'\n		}\n	}\n}\n        "}}}};var r=function(){var t=this,a=t._self._c;return a("div",[a("h5",[t._v("Import")]),a("DocSectionCode",{attrs:{code:t.importCode,importCode:""}}),a("h5",[t._v("Getting Started")]),a("p",[t._v("Two-way value binding is defined using the standard v-model directive.")]),a("DocSectionCode",{attrs:{code:t.baseCode}}),a("DocSectionCode",{attrs:{code:t.baseCode2,importCode:""}}),a("p",[t._v("As model is two-way binding enabled, giving a default value to the model is enough to display a radio button as checked by default.")]),a("DocSectionCode",{attrs:{code:t.baseCode3,importCode:""}}),a("h5",[t._v("Properties")]),a("p",[t._v("Any property such as name and autofocus are passed to the underlying input element. Following is the additional property to configure the component.")]),t._m(0),a("h5",[t._v("Events")]),t._m(1),a("h5",[t._v("Styling")]),a("p",[t._v("Following is the list of structural style classes, for theming classes visit "),a("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),t._m(2),a("h5",[t._v("Dependencies")]),a("p",[t._v("None.")])],1)},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("boolean")]),t("td",[e._v("null")]),t("td",[e._v("Value of the component.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke on value change.")])]),t("tr",[t("td",[e._v("input")]),t("td",[e._v("event: Value of checkbox")]),t("td",[e._v("Callback to invoke on click.")])]),t("tr",[t("td",[e._v("click")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke click.")])]),t("tr",[t("td",[e._v("focus")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke on focus.")])]),t("tr",[t("td",[e._v("blur")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke on blur.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-radiobutton")]),t("td",[e._v("Container element")])]),t("tr",[t("td",[e._v("p-radiobutton-box")]),t("td",[e._v("Container of icon.")])]),t("tr",[t("td",[e._v("p-radiobutton-icon")]),t("td",[e._v("Icon element.")])]),t("tr",[t("td",[e._v("p-radiobutton-label")]),t("td",[e._v("Label element.")])])])])])}],d=i(c,r,s,!1,null,null);const l=d.exports,v={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<h3>Basic</h3>\n    <div class="field-radiobutton">\n    <RadioButton id="city1" name="city" value="Chicago" v-model="city" />\n    <label for="city1">Chicago</label>\n</div>\n<div class="field-radiobutton">\n    <RadioButton id="city2" name="city" value="Los Angeles" v-model="city" />\n    <label for="city2">Los Angeles</label>\n</div>\n<div class="field-radiobutton">\n    <RadioButton id="city3" name="city" value="New York" v-model="city" />\n    <label for="city3">New York</label>\n</div>\n<div class="field-radiobutton">\n    <RadioButton id="city4" name="city" value="San Francisco" v-model="city" />\n    <label for="city4">San Francisco</label>\n</div>\n\n<h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>\n<div v-for="category of categories" :key="category.key" class="field-radiobutton">\n    <RadioButton :id="category.key" name="category" :value="category" v-model="selectedCategory" :disabled="category.key === \'R\'" />\n    <label :for="category.key">{{category.name}}</label>\n</div>\n        '},sourceCode2:{basic:"\nexport default {\n    data() {\n        return {\n            city: null,\n            categories: [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}],\n            selectedCategory: null\n        }\n    },\n    created() {\n        this.selectedCategory = this.categories[1];\n    }\n}\n        "}}}};var u=function(){var t=this,a=t._self._c;return a("div",[t._m(0),a("DocSectionCode",{attrs:{code:t.sourceCode1}}),a("DocSectionCode",{attrs:{code:t.sourceCode2,importCode:""}})],1)},_=[function(){var e=this,t=e._self._c;return t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/radiobutton",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])])}],m=i(v,u,_,!1,null,null);const y=m.exports,b={components:{Documentation:l,SourceCode:y}};var f=function(){var t=this,a=t._self._c;return a("div",{staticClass:"content-section documentation"},[a("TabView",[a("TabPanel",{attrs:{header:"Documentation"}},[a("Documentation")],1),a("TabPanel",{attrs:{header:"Source"}},[a("SourceCode")],1)],1)],1)},p=[],h=i(b,f,p,!1,null,null);const C=h.exports,g={data(){return{city:null,categories:[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}],selectedCategory:null}},created(){this.selectedCategory=this.categories[1]},components:{RadioButtonDoc:C}};var k=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"content-section introduction"},[t._m(0),a("AppInputStyleSwitch")],1),a("div",{staticClass:"content-section implementation"},[a("div",{staticClass:"card"},[a("h5",[t._v("Basic")]),a("div",{staticClass:"field-radiobutton"},[a("RadioButton",{attrs:{id:"city1",name:"city",value:"Chicago"},model:{value:t.city,callback:function(o){t.city=o},expression:"city"}}),a("label",{attrs:{for:"city1"}},[t._v("Chicago")])],1),a("div",{staticClass:"field-radiobutton"},[a("RadioButton",{attrs:{id:"city2",name:"city",value:"Los Angeles"},model:{value:t.city,callback:function(o){t.city=o},expression:"city"}}),a("label",{attrs:{for:"city2"}},[t._v("Los Angeles")])],1),a("div",{staticClass:"field-radiobutton"},[a("RadioButton",{attrs:{id:"city3",name:"city",value:"New York"},model:{value:t.city,callback:function(o){t.city=o},expression:"city"}}),a("label",{attrs:{for:"city3"}},[t._v("New York")])],1),a("div",{staticClass:"field-radiobutton"},[a("RadioButton",{attrs:{id:"city4",name:"city",value:"San Francisco"},model:{value:t.city,callback:function(o){t.city=o},expression:"city"}}),a("label",{attrs:{for:"city4"}},[t._v("San Francisco")])],1),a("h5",[t._v("Dynamic Values, Preselection, Value Binding and Disabled Option")]),t._l(t.categories,function(o){return a("div",{key:o.key,staticClass:"field-radiobutton"},[a("RadioButton",{attrs:{id:o.key,name:"category",value:o,disabled:o.key==="R"},model:{value:t.selectedCategory,callback:function(n){t.selectedCategory=n},expression:"selectedCategory"}}),a("label",{attrs:{for:o.key}},[t._v(t._s(o.name))])],1)})],2)]),a("RadioButtonDoc")],1)},R=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"feature-intro"},[t("h1",[e._v("RadioButton")]),t("p",[e._v("RadioButton is an extension to standard radio button element with theming.")])])}],B=i(g,k,R,!1,null,null);const $=B.exports;export{$ as default};
//# sourceMappingURL=RadioButtonDemo-moKVK2DG.js.map
