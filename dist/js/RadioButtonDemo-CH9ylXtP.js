import{n as o}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const l={};var c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import RadioButton from 'primevue2/radiobutton'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("Two-way value binding is defined using the standard v-model directive.")]),t("CodeHighlight",[e._v(' <RadioButton inputId="city1" name="city" value="Chicago" v-model="city" /> <RadioButton inputId="city2" name="city" value="Los Angeles" v-model="city" /> ')]),t("CodeHighlight",{attrs:{lang:"js"}},[e._v(" export default { data() { return { city: null } } } ")]),t("p",[e._v("As model is two-way binding enabled, giving a default value to the model is enough to display a radio button as checked by default.")]),t("CodeHighlight",{attrs:{lang:"js"}},[e._v(" export default { data() { return { city: 'Chicago' } } } ")]),t("h5",[e._v("Properties")]),t("p",[e._v("Any property such as name and autofocus are passed to the underlying input element. Following is the additional property to configure the component.")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("boolean")]),t("td",[e._v("null")]),t("td",[e._v("Value of the component.")])])])])]),t("h5",[e._v("Events")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke on value change.")])]),t("tr",[t("td",[e._v("input")]),t("td",[e._v("event: Value of checkbox")]),t("td",[e._v("Callback to invoke on click.")])]),t("tr",[t("td",[e._v("click")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke click.")])]),t("tr",[t("td",[e._v("focus")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke on focus.")])]),t("tr",[t("td",[e._v("blur")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke on blur.")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-radiobutton")]),t("td",[e._v("Container element")])]),t("tr",[t("td",[e._v("p-radiobutton-box")]),t("td",[e._v("Container of icon.")])]),t("tr",[t("td",[e._v("p-radiobutton-icon")]),t("td",[e._v("Icon element.")])]),t("tr",[t("td",[e._v("p-radiobutton-label")]),t("td",[e._v("Label element.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/radiobutton",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <h3>Basic</h3> <div class="field-radiobutton"> <RadioButton id="city1" name="city" value="Chicago" v-model="city" /> <label for="city1">Chicago</label> </div> <div class="field-radiobutton"> <RadioButton id="city2" name="city" value="Los Angeles" v-model="city" /> <label for="city2">Los Angeles</label> </div> <div class="field-radiobutton"> <RadioButton id="city3" name="city" value="New York" v-model="city" /> <label for="city3">New York</label> </div> <div class="field-radiobutton"> <RadioButton id="city4" name="city" value="San Francisco" v-model="city" /> <label for="city4">San Francisco</label> </div> <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5> <div v-for="category of categories" :key="category.key" class="field-radiobutton"> <RadioButton :id="category.key" name="category" :value="category" v-model="selectedCategory" :disabled="category.key === \'R\'" /> <label :for="category.key">{{category.name}}</label> </div> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data() { return { city: null, categories: [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}], selectedCategory: null } }, created() { this.selectedCategory = this.categories[1]; } } ")])],1)],1)],1)},r=[],s=o(l,c,r,!1,null,null);const d=s.exports,v={data(){return{city:null,categories:[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}],selectedCategory:null}},created(){this.selectedCategory=this.categories[1]},components:{RadioButtonDoc:d}};var u=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"content-section introduction"},[e._m(0),t("AppInputStyleSwitch")],1),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Basic")]),t("div",{staticClass:"field-radiobutton"},[t("RadioButton",{attrs:{id:"city1",name:"city",value:"Chicago"},model:{value:e.city,callback:function(a){e.city=a},expression:"city"}}),t("label",{attrs:{for:"city1"}},[e._v("Chicago")])],1),t("div",{staticClass:"field-radiobutton"},[t("RadioButton",{attrs:{id:"city2",name:"city",value:"Los Angeles"},model:{value:e.city,callback:function(a){e.city=a},expression:"city"}}),t("label",{attrs:{for:"city2"}},[e._v("Los Angeles")])],1),t("div",{staticClass:"field-radiobutton"},[t("RadioButton",{attrs:{id:"city3",name:"city",value:"New York"},model:{value:e.city,callback:function(a){e.city=a},expression:"city"}}),t("label",{attrs:{for:"city3"}},[e._v("New York")])],1),t("div",{staticClass:"field-radiobutton"},[t("RadioButton",{attrs:{id:"city4",name:"city",value:"San Francisco"},model:{value:e.city,callback:function(a){e.city=a},expression:"city"}}),t("label",{attrs:{for:"city4"}},[e._v("San Francisco")])],1),t("h5",[e._v("Dynamic Values, Preselection, Value Binding and Disabled Option")]),e._l(e.categories,function(a){return t("div",{key:a.key,staticClass:"field-radiobutton"},[t("RadioButton",{attrs:{id:a.key,name:"category",value:a,disabled:a.key==="R"},model:{value:e.selectedCategory,callback:function(n){e.selectedCategory=n},expression:"selectedCategory"}}),t("label",{attrs:{for:a.key}},[e._v(e._s(a.name))])],1)})],2)]),t("RadioButtonDoc")],1)},_=[function(){var i=this,e=i._self._c;return e("div",{staticClass:"feature-intro"},[e("h1",[i._v("RadioButton")]),e("p",[i._v("RadioButton is an extension to standard radio button element with theming.")])])}],y=o(v,u,_,!1,null,null);const p=y.exports;export{p as default};
//# sourceMappingURL=RadioButtonDemo-CH9ylXtP.js.map