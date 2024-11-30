import{n as o}from"./app.component-CxwrbeA3.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const r={name:"Documentation",data(){return{importCode:{basic:"\nimport Slider from 'primevue2/slider';\n        "},baseCode:{basic:'\n<Slider v-model="value" />\n        '},rangeCode:{basic:'\n<Slider v-model="value" :range="true" />\n        '},rangeCode2:{basic:"\nexport default {\n	data() {\n		return {\n			value: [20,80]\n		}\n	}\n}\n        "},orientationCode:{basic:'\n<Slider v-model="value" orientation="vertical" />\n        '},stepCode:{basic:'\n<Slider v-model="value" :step="20" />\n        '},minMaxCode:{basic:'\n<Slider v-model="value" :step="20" :min="50" :max="200" />\n        '}}}};var i=function(){var e=this,a=e._self._c;return a("div",[a("h5",[e._v("Import")]),a("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),a("h5",[e._v("Getting Started")]),a("p",[e._v("Two-way binding is defined using the standard v-model directive.")]),a("DocSectionCode",{attrs:{code:e.baseCode}}),a("h5",[e._v("Range")]),e._m(0),a("DocSectionCode",{attrs:{code:e.rangeCode}}),a("DocSectionCode",{attrs:{code:e.rangeCode2,importCode:""}}),a("h5",[e._v("Orientation")]),e._m(1),a("DocSectionCode",{attrs:{code:e.orientationCode}}),a("h5",[e._v("Step")]),e._m(2),a("DocSectionCode",{attrs:{code:e.stepCode}}),a("h5",[e._v("Min-Max")]),a("p",[e._v("Boundaries are specified with min and max attributes.")]),a("DocSectionCode",{attrs:{code:e.minMaxCode}}),a("h5",[e._v("Properties")]),a("p",[e._v(" Any property as style and class are passed to the main container element. Following are the additional properties to configure the component. ")]),e._m(3),a("h5",[e._v("Events")]),e._m(4),a("h5",[e._v("Styling")]),a("p",[e._v(" Following is the list of structural style classes, for theming classes visit "),a("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page. ")],1),e._m(5),a("h5",[e._v("Dependencies")]),a("p",[e._v("None.")])],1)},l=[function(){var t=this,e=t._self._c;return e("p",[t._v(" Range slider provides two handles to define two values. Enable "),e("i",[t._v("range")]),t._v(" property and bind an array to implement a range slider. ")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" Default layout of slider is horizontal, use "),e("i",[t._v("orientation")]),t._v(" property for the alternative vertical mode. ")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" Step factor is 1 by default and can be customized with "),e("i",[t._v("step")]),t._v(" option. ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("number")]),e("td",[t._v("0")]),e("td",[t._v("Value of the component.")])]),e("tr",[e("td",[t._v("min")]),e("td",[t._v("number")]),e("td",[t._v("0")]),e("td",[t._v("Mininum boundary value.")])]),e("tr",[e("td",[t._v("max")]),e("td",[t._v("number")]),e("td",[t._v("100")]),e("td",[t._v("Maximum boundary value.")])]),e("tr",[e("td",[t._v("orientation")]),e("td",[t._v("string")]),e("td",[t._v("horizontal")]),e("td",[t._v(" Orientation of the slider, valid values are horizontal and vertical. ")])]),e("tr",[e("td",[t._v("step")]),e("td",[t._v("number")]),e("td",[t._v("1")]),e("td",[t._v("Step factor to increment/decrement the value.")])]),e("tr",[e("td",[t._v("range")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("When speficed, allows two boundary values to be picked.")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v(" When present, it specifies that the component should be disabled. ")])]),e("tr",[e("td",[t._v("ariaLabelledBy")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v(" Establishes relationships between the component and label(s) where its value should be one or more element IDs. ")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v(" event.originalEvent: Original event "),e("br"),t._v(" event.value: Selected option value ")]),e("td",[t._v("Callback to invoke on value change.")])]),e("tr",[e("td",[t._v("input")]),e("td",[t._v("value: New value")]),e("td",[t._v("Callback to invoke on value change.")])]),e("tr",[e("td",[t._v("slideEnd")]),e("td",[t._v(" event.originalEvent: Slide event "),e("br"),t._v(" event.value: New value. ")]),e("td",[t._v("Callback to invoke when slide ends.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-slider")]),e("td",[t._v("Container element")])]),e("tr",[e("td",[t._v("p-slider-handle")]),e("td",[t._v("Handle element.")])])])])])}],v=o(r,i,l,!1,null,null);const s=v.exports,d={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<h3>Basic: {{value1}}</h3>\n<Slider v-model="value1" />\n\n<h3>Input: {{value2}}</h3>\n<InputText v-model.number="value2" />\n<Slider v-model="value2" />\n\n<h3>Step: {{value3}}</h3>\n<Slider v-model="value3" :step="20" />\n\n<h3>Range: {{value4}}</h3>\n<Slider v-model="value4" :range="true" />\n\n<h3>Vertical: {{value5}}</h3>\n<Slider v-model="value5" orientation="vertical" />\n        '},sourceCode2:{basic:"\nexport default {\n	data() {\n		return {\n			value1: null,\n			value2: 50,\n			value3: 20,\n			value4: [20,80],\n			value5: 50\n		}\n	}\n}\n        "},sourceCode3:{basic:"\n.p-slider-horizontal, .p-inputtext {\n	width: 14rem;\n}\n\n.p-slider-vertical {\n	height: 14rem;\n}\n        "}}}};var c=function(){var e=this,a=e._self._c;return a("div",[e._m(0),a("DocSectionCode",{attrs:{code:e.sourceCode1}}),a("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}}),a("DocSectionCode",{attrs:{code:e.sourceCode3,importStyle:""}})],1)},_=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/slider",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])])}],u=o(d,c,_,!1,null,null);const m=u.exports,p={components:{Documentation:s,SourceCode:m}};var h=function(){var e=this,a=e._self._c;return a("div",{staticClass:"content-section documentation"},[a("TabView",[a("TabPanel",{attrs:{header:"Documentation"}},[a("Documentation")],1),a("TabPanel",{attrs:{header:"Source"}},[a("SourceCode")],1)],1)],1)},f=[],b=o(p,h,f,!1,null,null);const C=b.exports,S={data(){return{value1:null,value2:50,value3:20,value4:30.5,value5:[20,80],value6:50}},components:{SliderDoc:C}};var g=function(){var e=this,a=e._self._c;return a("div",[a("div",{staticClass:"content-section introduction"},[e._m(0),a("AppInputStyleSwitch")],1),a("div",{staticClass:"content-section implementation"},[a("div",{staticClass:"card"},[a("h5",[e._v("Basic: "+e._s(e.value1))]),a("Slider",{attrs:{step:.01,min:1.35},model:{value:e.value1,callback:function(n){e.value1=n},expression:"value1"}}),a("h5",[e._v("Input: "+e._s(e.value2))]),a("InputText",{model:{value:e.value2,callback:function(n){e.value2=e._n(n)},expression:"value2"}}),a("Slider",{model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}}),a("h5",[e._v("Step: "+e._s(e.value3))]),a("Slider",{attrs:{step:20},model:{value:e.value3,callback:function(n){e.value3=n},expression:"value3"}}),a("h5",[e._v("Decimal Step: "+e._s(e.value4))]),a("Slider",{attrs:{step:.5},model:{value:e.value4,callback:function(n){e.value4=n},expression:"value4"}}),a("h5",[e._v("Range: "+e._s(e.value5))]),a("Slider",{attrs:{range:!0},model:{value:e.value5,callback:function(n){e.value5=n},expression:"value5"}}),a("h5",[e._v("Vertical: "+e._s(e.value6))]),a("Slider",{attrs:{orientation:"vertical",step:.01},model:{value:e.value6,callback:function(n){e.value6=n},expression:"value6"}})],1)]),a("SliderDoc")],1)},D=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"feature-intro"},[e("h1",[t._v("Slider")]),e("p",[t._v("Slider is an input component to provide a numerical input.")])])}],w=o(S,g,D,!1,null,"f30a335e");const E=w.exports;export{E as default};
//# sourceMappingURL=SliderDemo-DToP33br.js.map
