System.register(["./app.component-legacy-cLUjg6K2.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(e,t){"use strict";var a;return{setters:[function(e){a=e.n},null,null,null,null],execute:function(){var t=a({name:"Documentation",data:function(){return{importCode:{basic:"\nimport Knob from 'primevue2/knob';\n        "},baseCode:{basic:'\n<Knob v-model="value" />\n        '},baseCode2:{basic:"\ndata() {\n\treturn {\n\t\tvalue: 0\n\t}\n}\n        "},minimumAndMaximumCode:{basic:'\n<Knob v-model="value" :min="-50" :max="10" />\n        '},stepCode:{basic:'\n<Knob v-model="value" :step="10" />\n        '},stylingCode:{basic:'\n<Knob v-model="value" valueColor="SlateGray" rangeColor="MediumTurquoise"  />\n        '},sizeCode:{basic:'\n<Knob v-model="value" :size="200" />\n        '}}}},(function(){var e=this,t=e._self._c;return t("div",[t("h5",[e._v("Import")]),t("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),t("h5",[e._v("Getting Started")]),e._m(0),t("DocSectionCode",{attrs:{code:e.baseCode}}),t("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}}),t("h5",[e._v("Minimum and Maximum")]),e._m(1),t("DocSectionCode",{attrs:{code:e.minimumAndMaximumCode}}),t("h5",[e._v("Step")]),e._m(2),t("DocSectionCode",{attrs:{code:e.stepCode}}),t("h5",[e._v("Styling")]),e._m(3),t("DocSectionCode",{attrs:{code:e.stylingCode}}),t("h5",[e._v("Size")]),e._m(4),t("DocSectionCode",{attrs:{code:e.sizeCode}}),t("h5",[e._v("Properties")]),t("p",[e._v(" Any property as style and class are passed to the main container element. Following are the additional properties to configure the component. ")]),e._m(5),t("h5",[e._v("Events")]),e._m(6),t("h5",[e._v("Styling")]),t("p",[e._v(" Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page. ")],1),e._m(7),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1)}),[function(){var e=this,t=e._self._c;return t("p",[e._v("Knob is an input component and used with the standard "),t("i",[e._v("v-model")]),e._v(" directive.")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" Boundaries are configured with the "),t("i",[e._v("min")]),e._v(" and "),t("i",[e._v("max")]),e._v(" values whose defaults are 0 and 100 respectively. ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("Step factor is 1 by default and can be customized with "),t("i",[e._v("step")]),e._v(" option.")])},function(){var e=this,t=e._self._c;return t("p",[t("i",[e._v("valueColor")]),e._v(" defines the value color, "),t("i",[e._v("rangeColor")]),e._v(" defines the range background and similarly "),t("i",[e._v("textColor")]),e._v(" configures the color of the value text. In addition, "),t("i",[e._v("strokeWidth")]),e._v(" is used to determine the width of the stroke of range and value sections. ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" Default size of the Knob is 100 pixels for width and height, use the "),t("i",[e._v("size")]),e._v(" property to customize it per your requirements. ")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v("Value of the component.")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("number")]),t("td",[e._v("100")]),t("td",[e._v("Size of the component in pixels.")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When present, it specifies that the component should be disabled.")])]),t("tr",[t("td",[e._v("readonly")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When present, it specifies that the component value cannot be edited.")])]),t("tr",[t("td",[e._v("step")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v("Step factor to increment/decrement the value.")])]),t("tr",[t("td",[e._v("min")]),t("td",[e._v("number")]),t("td",[e._v("0")]),t("td",[e._v("Mininum boundary value.")])]),t("tr",[t("td",[e._v("max")]),t("td",[e._v("number")]),t("td",[e._v("100")]),t("td",[e._v("Maximum boundary value.")])]),t("tr",[t("td",[e._v("valueColor")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Background of the value.")])]),t("tr",[t("td",[e._v("rangeColor")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v("Background color of the range.")])]),t("tr",[t("td",[e._v("textColor")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v("Color of the value text.")])]),t("tr",[t("td",[e._v("strokeWidth")]),t("td",[e._v("number")]),t("td",[e._v("14")]),t("td",[e._v("Width of the knob stroke.")])]),t("tr",[t("td",[e._v("showValue")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether the show the value inside the knob.")])]),t("tr",[t("td",[e._v("valueTemplate")]),t("td",[e._v("string")]),t("td",[e._v("{value}")]),t("td",[e._v("Template string of the value.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("value: New value")]),t("td",[e._v("Callback to invoke when the value changes.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-knob")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-knob-text")]),t("td",[e._v("Text element.")])]),t("tr",[t("td",[e._v("p-knob-value")]),t("td",[e._v("Value element.")])]),t("tr",[t("td",[e._v("p-knob-text")]),t("td",[e._v("Text element.")])])])])])}],!1,null,null).exports,n=a({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<div class="grid formgrid text-center">\n\t<div class="field col-12 md:col-4">\n\t\t<h5>Basic</h5>\n\t\t<Knob v-model="value1" />\n\t</div>\n\t<div class="field col-12 md:col-4">\n\t\t<h5>Readonly</h5>\n\t\t<Knob v-model="value2" readonly />\n\t</div>\n\t\t<div class="field col-12 md:col-4">\n\t\t\t<h5>Disabled</h5>\n\t\t<Knob v-model="value3" disabled />\n\t</div>\n\t<div class="field col-12 md:col-4">\n\t\t<h5 class="mt-3">Min/Max</h5>\n\t\t<Knob v-model="value4" :min="-50" :max="50" />\n\t</div>\n\t<div class="field col-12 md:col-4">\n\t\t<h5 class="mt-3">Step</h5>\n\t\t<Knob v-model="value5" :step="10" />\n\t</div>\n\t<div class="field col-12 md:col-4">\n\t\t\t<h5 class="mt-3">Template</h5>\n\t\t<Knob v-model="value6" valueTemplate="{value}%" />\n\t</div>\n\t<div class="field col-12 md:col-4">\n\t\t<h5 class="mt-3">Stroke</h5>\n\t\t<Knob v-model="value7" :strokeWidth="5" />\n\t</div>\n\t<div class="field col-12 md:col-4">\n\t\t<h5 class="mt-3">Size</h5>\n\t\t<Knob v-model="value8" :size="200"/>\n\t</div>\n\t<div class="field col-12 md:col-4">\n\t\t<h5 class="mt-3">Color</h5>\n\t\t<Knob v-model="value9" valueColor="SlateGray" rangeColor="MediumTurquoise"  />\n\t</div>\n</div>\n        '},sourceCode2:{basic:"\nexport default {\n    data() {\n        return {\n            value1: 0,\n            value2: 50,\n            value3: 75,\n            value4: 10,\n            value5: 40,\n            value6: 60,\n            value7: 40,\n            value8: 60,\n            value9: 50,\n        }\n    }\n}\n        "}}}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("DocSectionCode",{attrs:{code:e.sourceCode1}}),t("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)}),[function(){var e=this._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/knob",target:"_blank",rel:"noopener noreferrer"}},[e("span",[this._v("View on GitHub")])])}],!1,null,null).exports,o=a({components:{Documentation:t,SourceCode:n}},(function(){var e=this._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("Documentation")],1),e("TabPanel",{attrs:{header:"Source"}},[e("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;e("default",a({data:function(){return{value1:0,value2:50,value3:75,value4:10,value5:40,value6:60,value7:40,value8:60,value9:50}},components:{KnobDoc:o}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("div",{staticClass:"grid formgrid text-center"},[t("div",{staticClass:"field col-12 md:col-4"},[t("h5",[e._v("Basic")]),t("Knob",{model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),t("div",{staticClass:"field col-12 md:col-4"},[t("h5",[e._v("Readonly")]),t("Knob",{attrs:{readonly:""},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),t("div",{staticClass:"field col-12 md:col-4"},[t("h5",[e._v("Disabled")]),t("Knob",{attrs:{disabled:""},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),t("div",{staticClass:"field col-12 md:col-4"},[t("h5",{staticClass:"mt-3"},[e._v("Min/Max")]),t("Knob",{attrs:{min:-50,max:50},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1),t("div",{staticClass:"field col-12 md:col-4"},[t("h5",{staticClass:"mt-3"},[e._v("Step")]),t("Knob",{attrs:{step:10},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}})],1),t("div",{staticClass:"field col-12 md:col-4"},[t("h5",{staticClass:"mt-3"},[e._v("Template")]),t("Knob",{attrs:{valueTemplate:"{value}%"},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}})],1),t("div",{staticClass:"field col-12 md:col-4"},[t("h5",{staticClass:"mt-3"},[e._v("Stroke")]),t("Knob",{attrs:{strokeWidth:5},model:{value:e.value7,callback:function(t){e.value7=t},expression:"value7"}})],1),t("div",{staticClass:"field col-12 md:col-4"},[t("h5",{staticClass:"mt-3"},[e._v("Size")]),t("Knob",{attrs:{size:200},model:{value:e.value8,callback:function(t){e.value8=t},expression:"value8"}})],1),t("div",{staticClass:"field col-12 md:col-4"},[t("h5",{staticClass:"mt-3"},[e._v("Color")]),t("Knob",{attrs:{valueColor:"SlateGray",rangeColor:"MediumTurquoise"},model:{value:e.value9,callback:function(t){e.value9=t},expression:"value9"}})],1)])])]),t("KnobDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("Knob")]),t("p",[e._v("Knob is a form component to define number inputs with a dial.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=index-legacy-CC4AGuxm.js.map