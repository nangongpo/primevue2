System.register(["./app.component-legacy-cLUjg6K2.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(t,e){"use strict";var n;return{setters:[function(t){n=t.n},null,null,null,null],execute:function(){var e=n({name:"Documentation",data:function(){return{importCode:{basic:"\nimport SelectButton from 'primevue2/selectbutton';\n        "},baseCode:{basic:'\n<SelectButton v-model="selectedCity" :options="cities" optionLabel="name" />\n        '},baseCode2:{basic:"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tselectedCity: null,\n\t\t\tcities: [\n\t\t\t\t{name: 'London', code: 'LND'},\n\t\t\t\t{name: 'Paris', code: 'PRS'},\n\t\t\t\t{name: 'Rome', code: 'RM'}\n\t\t\t]\n\t\t}\n\t}\n}\n        "},multipleCode:{basic:'\n<SelectButton v-model="selectedCity" :options="cities" optionLabel="brand" :multiple="true" />\n        '},templatingCode:{basic:'\n<SelectButton v-model="selectedCar" :options="cars" optionLabel="brand">\n\t<template #option="slotProps">\n        <div class="car-option">\n            <img :alt="slotProps.option.brand" :src="\'demo/images/car/\' + slotProps.option.brand + \'.png\'" />\n            <div>{{slotProps.option.brand}}</div>\n        </div>\n\t</template>\n</SelectButton>\n        '}}}},(function(){var t=this,e=t._self._c;return e("div",[e("h5",[t._v("Import")]),e("DocSectionCode",{attrs:{code:t.importCode,importCode:""}}),e("h5",[t._v("Getting Started")]),t._m(0),e("DocSectionCode",{attrs:{code:t.baseCode}}),e("DocSectionCode",{attrs:{code:t.baseCode2,importCode:""}}),e("h5",[t._v("Multiple")]),t._m(1),e("DocSectionCode",{attrs:{code:t.multipleCode}}),e("h5",[t._v("Templating")]),t._m(2),e("DocSectionCode",{attrs:{code:t.templatingCode}}),e("h5",[t._v("Properties")]),e("p",[t._v(" Any property as style and class are passed to the main container element. Following are the additional properties to configure the component. ")]),t._m(3),e("h5",[t._v("Events")]),t._m(4),e("h5",[t._v("Slots")]),t._m(5),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1)}),[function(){var t=this,e=t._self._c;return e("p",[t._v(" SelectButton requires a value to bind and a collection of arbitrary objects along with the "),e("i",[t._v("optionLabel")]),t._v(" property to specify the label property of the option. ")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" SelectButton allows selecting only one item by default and setting "),e("i",[t._v("multiple")]),t._v(" option enables choosing more than one item. In multiple case, model property should be an array. ")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" Label of an option is used as the display text of an item by default, for custom content support define an "),e("i",[t._v("option")]),t._v(" template that gets the option instance as a parameter. ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("any")]),e("td",[t._v("null")]),e("td",[t._v("Value of the component.")])]),e("tr",[e("td",[t._v("options")]),e("td",[t._v("array")]),e("td",[t._v("null")]),e("td",[t._v(" An array of selectitems to display as the available options. ")])]),e("tr",[e("td",[t._v("optionLabel")]),e("td",[t._v("string | function")]),e("td",[t._v("null")]),e("td",[t._v(" Property name or getter function to use as the label of an option. ")])]),e("tr",[e("td",[t._v("optionValue")]),e("td",[t._v("string | function")]),e("td",[t._v("null")]),e("td",[t._v(" Property name or getter function to use as the value of an option, defaults to the option itself when not defined. ")])]),e("tr",[e("td",[t._v("optionDisabled")]),e("td",[t._v("string | function")]),e("td",[t._v("null")]),e("td",[t._v(" Property name or getter function to use as the disabled flag of an option, defaults to false when not defined. ")])]),e("tr",[e("td",[t._v("multiple")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("When specified, allows selecting multiple values.")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v(" When present, it specifies that the element should be disabled. ")])]),e("tr",[e("td",[t._v("dataKey")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("A property to uniquely identify an option.")])]),e("tr",[e("td",[t._v("ariaLabelledBy")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v(" Establishes relationships between the component and label(s) where its value should be one or more element IDs. ")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("input")]),e("td",[t._v(" event: Single value or an array of values that are selected. ")]),e("td",[t._v("Callback to invoke on value change.")])]),e("tr",[e("td",[t._v("focus")]),e("td",[t._v("event: Browser event")]),e("td",[t._v("Callback to invoke on focus.")])]),e("tr",[e("td",[t._v("blur")]),e("td",[t._v("event: Browser event")]),e("td",[t._v("Callback to invoke on blur.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("option")]),e("td",[t._v(" option: Option instance"),e("br"),t._v(" index: Index of the option ")])])])])])}],!1,null,null).exports,o=n({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<h5>Single Selection</h5>\n<SelectButton v-model="value1" :options="options" />\n\n<h5>Multiple Selection</h5>\n<SelectButton v-model="value2" :options="paymentOptions" optionLabel="name" multiple />\n\n<h5>Custom Content</h5>\n<SelectButton v-model="value3" :options="justifyOptions" dataKey="value">\n    <template #option="slotProps">\n        <i :class="slotProps.option.icon"></i>\n    </template>\n</SelectButton>\n        '},sourceCode2:{basic:"\nexport default {\n    data() {\n        return {\n            value1: 'Off',\n            value2: null,\n            value3: null,\n            options: ['Off', 'On'],\n            paymentOptions: [\n                {name: 'Option 1', value: 1},\n                {name: 'Option 2', value: 2},\n                {name: 'Option 3', value: 3}\n            ],\n            justifyOptions: [\n                {icon: 'pi pi-align-left', value: 'left'},\n                {icon: 'pi pi-align-right', value: 'Right'},\n                {icon: 'pi pi-align-center', value: 'Center'},\n                {icon: 'pi pi-align-justify', value: 'Justify'}\n            ]\n        }\n    }\n}\n        "}}}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("DocSectionCode",{attrs:{code:t.sourceCode1}}),e("DocSectionCode",{attrs:{code:t.sourceCode2,importCode:""}})],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/selectbutton",target:"_blank",rel:"noopener noreferrer"}},[t("span",[this._v("View on GitHub")])])}],!1,null,null).exports,a=n({components:{Documentation:e,SourceCode:o}},(function(){var t=this._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("Documentation")],1),t("TabPanel",{attrs:{header:"Source"}},[t("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;t("default",n({data:function(){return{value1:"Off",value2:null,value3:null,options:["Off","On"],paymentOptions:[{name:"Option 1",value:1},{name:"Option 2",value:2},{name:"Option 3",value:3}],justifyOptions:[{icon:"pi pi-align-left",value:"left"},{icon:"pi pi-align-right",value:"Right"},{icon:"pi pi-align-center",value:"Center"},{icon:"pi pi-align-justify",value:"Justify"}]}},components:{SelectButtonDoc:a}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Single Selection")]),e("SelectButton",{attrs:{options:t.options},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),e("h5",[t._v("Multiple Selection")]),e("SelectButton",{attrs:{options:t.paymentOptions,optionLabel:"name",multiple:""},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}}),e("h5",[t._v("Custom Content")]),e("SelectButton",{attrs:{options:t.justifyOptions,dataKey:"value"},scopedSlots:t._u([{key:"option",fn:function(t){return[e("i",{class:t.option.icon})]}}]),model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}})],1)]),e("SelectButtonDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("SelectButton")]),e("p",[t._v("SelectButton is a form component to choose a value from a list of options using button elements.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=SelectButtonDemo-legacy-9VYJVWmn.js.map