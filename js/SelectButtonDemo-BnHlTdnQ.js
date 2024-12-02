import{n as a}from"./app.component-BAbvz7X_.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const i={name:"Documentation",data(){return{importCode:{basic:"\nimport SelectButton from 'primevue2/selectbutton';\n        "},baseCode:{basic:'\n<SelectButton v-model="selectedCity" :options="cities" optionLabel="name" />\n        '},baseCode2:{basic:"\nexport default {\n	data() {\n		return {\n			selectedCity: null,\n			cities: [\n				{name: 'London', code: 'LND'},\n				{name: 'Paris', code: 'PRS'},\n				{name: 'Rome', code: 'RM'}\n			]\n		}\n	}\n}\n        "},multipleCode:{basic:'\n<SelectButton v-model="selectedCity" :options="cities" optionLabel="brand" :multiple="true" />\n        '},templatingCode:{basic:'\n<SelectButton v-model="selectedCar" :options="cars" optionLabel="brand">\n	<template #option="slotProps">\n        <div class="car-option">\n            <img :alt="slotProps.option.brand" :src="\'demo/images/car/\' + slotProps.option.brand + \'.png\'" />\n            <div>{{slotProps.option.brand}}</div>\n        </div>\n	</template>\n</SelectButton>\n        '}}}};var l=function(){var t=this,o=t._self._c;return o("div",[o("h5",[t._v("Import")]),o("DocSectionCode",{attrs:{code:t.importCode,importCode:""}}),o("h5",[t._v("Getting Started")]),t._m(0),o("DocSectionCode",{attrs:{code:t.baseCode}}),o("DocSectionCode",{attrs:{code:t.baseCode2,importCode:""}}),o("h5",[t._v("Multiple")]),t._m(1),o("DocSectionCode",{attrs:{code:t.multipleCode}}),o("h5",[t._v("Templating")]),t._m(2),o("DocSectionCode",{attrs:{code:t.templatingCode}}),o("h5",[t._v("Properties")]),o("p",[t._v(" Any property as style and class are passed to the main container element. Following are the additional properties to configure the component. ")]),t._m(3),o("h5",[t._v("Events")]),t._m(4),o("h5",[t._v("Slots")]),t._m(5),o("h5",[t._v("Dependencies")]),o("p",[t._v("None.")])],1)},s=[function(){var e=this,t=e._self._c;return t("p",[e._v(" SelectButton requires a value to bind and a collection of arbitrary objects along with the "),t("i",[e._v("optionLabel")]),e._v(" property to specify the label property of the option. ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" SelectButton allows selecting only one item by default and setting "),t("i",[e._v("multiple")]),e._v(" option enables choosing more than one item. In multiple case, model property should be an array. ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" Label of an option is used as the display text of an item by default, for custom content support define an "),t("i",[e._v("option")]),e._v(" template that gets the option instance as a parameter. ")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("any")]),t("td",[e._v("null")]),t("td",[e._v("Value of the component.")])]),t("tr",[t("td",[e._v("options")]),t("td",[e._v("array")]),t("td",[e._v("null")]),t("td",[e._v(" An array of selectitems to display as the available options. ")])]),t("tr",[t("td",[e._v("optionLabel")]),t("td",[e._v("string | function")]),t("td",[e._v("null")]),t("td",[e._v(" Property name or getter function to use as the label of an option. ")])]),t("tr",[t("td",[e._v("optionValue")]),t("td",[e._v("string | function")]),t("td",[e._v("null")]),t("td",[e._v(" Property name or getter function to use as the value of an option, defaults to the option itself when not defined. ")])]),t("tr",[t("td",[e._v("optionDisabled")]),t("td",[e._v("string | function")]),t("td",[e._v("null")]),t("td",[e._v(" Property name or getter function to use as the disabled flag of an option, defaults to false when not defined. ")])]),t("tr",[t("td",[e._v("multiple")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When specified, allows selecting multiple values.")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v(" When present, it specifies that the element should be disabled. ")])]),t("tr",[t("td",[e._v("dataKey")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("A property to uniquely identify an option.")])]),t("tr",[t("td",[e._v("ariaLabelledBy")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v(" Establishes relationships between the component and label(s) where its value should be one or more element IDs. ")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("input")]),t("td",[e._v(" event: Single value or an array of values that are selected. ")]),t("td",[e._v("Callback to invoke on value change.")])]),t("tr",[t("td",[e._v("focus")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke on focus.")])]),t("tr",[t("td",[e._v("blur")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke on blur.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("option")]),t("td",[e._v(" option: Option instance"),t("br"),e._v(" index: Index of the option ")])])])])])}],r=a(i,l,s,!1,null,null);const c=r.exports,u={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<h5>Single Selection</h5>\n<SelectButton v-model="value1" :options="options" />\n\n<h5>Multiple Selection</h5>\n<SelectButton v-model="value2" :options="paymentOptions" optionLabel="name" multiple />\n\n<h5>Custom Content</h5>\n<SelectButton v-model="value3" :options="justifyOptions" dataKey="value">\n    <template #option="slotProps">\n        <i :class="slotProps.option.icon"></i>\n    </template>\n</SelectButton>\n        '},sourceCode2:{basic:"\nexport default {\n    data() {\n        return {\n            value1: 'Off',\n            value2: null,\n            value3: null,\n            options: ['Off', 'On'],\n            paymentOptions: [\n                {name: 'Option 1', value: 1},\n                {name: 'Option 2', value: 2},\n                {name: 'Option 3', value: 3}\n            ],\n            justifyOptions: [\n                {icon: 'pi pi-align-left', value: 'left'},\n                {icon: 'pi pi-align-right', value: 'Right'},\n                {icon: 'pi pi-align-center', value: 'Center'},\n                {icon: 'pi pi-align-justify', value: 'Justify'}\n            ]\n        }\n    }\n}\n        "}}}};var d=function(){var t=this,o=t._self._c;return o("div",[t._m(0),o("DocSectionCode",{attrs:{code:t.sourceCode1}}),o("DocSectionCode",{attrs:{code:t.sourceCode2,importCode:""}})],1)},v=[function(){var e=this,t=e._self._c;return t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/selectbutton",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])])}],p=a(u,d,v,!1,null,null);const _=p.exports,m={components:{Documentation:c,SourceCode:_}};var f=function(){var t=this,o=t._self._c;return o("div",{staticClass:"content-section documentation"},[o("TabView",[o("TabPanel",{attrs:{header:"Documentation"}},[o("Documentation")],1),o("TabPanel",{attrs:{header:"Source"}},[o("SourceCode")],1)],1)],1)},h=[],b=a(m,f,h,!1,null,null);const C=b.exports,y={data(){return{value1:"Off",value2:null,value3:null,options:["Off","On"],paymentOptions:[{name:"Option 1",value:1},{name:"Option 2",value:2},{name:"Option 3",value:3}],justifyOptions:[{icon:"pi pi-align-left",value:"left"},{icon:"pi pi-align-right",value:"Right"},{icon:"pi pi-align-center",value:"Center"},{icon:"pi pi-align-justify",value:"Justify"}]}},components:{SelectButtonDoc:C}};var g=function(){var t=this,o=t._self._c;return o("div",[t._m(0),o("div",{staticClass:"content-section implementation"},[o("div",{staticClass:"card"},[o("h5",[t._v("Single Selection")]),o("SelectButton",{attrs:{options:t.options},model:{value:t.value1,callback:function(n){t.value1=n},expression:"value1"}}),o("h5",[t._v("Multiple Selection")]),o("SelectButton",{attrs:{options:t.paymentOptions,optionLabel:"name",multiple:""},model:{value:t.value2,callback:function(n){t.value2=n},expression:"value2"}}),o("h5",[t._v("Custom Content")]),o("SelectButton",{attrs:{options:t.justifyOptions,dataKey:"value"},scopedSlots:t._u([{key:"option",fn:function(n){return[o("i",{class:n.option.icon})]}}]),model:{value:t.value3,callback:function(n){t.value3=n},expression:"value3"}})],1)]),o("SelectButtonDoc")],1)},S=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("SelectButton")]),t("p",[e._v("SelectButton is a form component to choose a value from a list of options using button elements.")])])])}],B=a(y,g,S,!1,null,null);const $=B.exports;export{$ as default};
//# sourceMappingURL=SelectButtonDemo-BnHlTdnQ.js.map
