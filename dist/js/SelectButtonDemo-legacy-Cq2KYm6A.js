System.register(["./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(t,e){"use strict";var o;return{setters:[function(t){o=t.n},null,null,null],execute:function(){var e=o({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[t._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import SelectButton from 'primevue2/selectbutton'; ")]),e("h5",[t._v("Getting Started")]),e("p",[t._v("SelectButton requires a value to bind and a collection of arbitrary objects along with the "),e("i",[t._v("optionLabel")]),t._v(" property to specify the label property of the option.")]),e("CodeHighlight",[t._v(' <SelectButton v-model="selectedCity" :options="cities" optionLabel="name" /> ')]),e("CodeHighlight",{attrs:{lang:"js"}},[t._v(" export default { data() { return { selectedCity: null, cities: [ {name: 'London', code: 'LND'}, {name: 'Paris', code: 'PRS'}, {name: 'Rome', code: 'RM'} ] } } } ")]),e("h5",[t._v("Multiple")]),e("p",[t._v("SelectButton allows selecting only one item by default and setting "),e("i",[t._v("multiple")]),t._v(" option enables choosing more than one item. In multiple case, model property should be an array.")]),e("CodeHighlight",[t._v(' <SelectButton v-model="selectedCity" :options="cities" optionLabel="brand" :multiple="true" /> ')]),e("h5",[t._v("Templating")]),e("p",[t._v("Label of an option is used as the display text of an item by default, for custom content support define an "),e("i",[t._v("option")]),t._v(" template that gets the option instance as a parameter.")]),e("CodeHighlight",[[t._v(' <SelectButton v-model="selectedCar" :options="cars" optionLabel="brand"> <template #option="slotProps"> <div class="car-option"> <img :alt="slotProps.option.brand" :src="$publicUrl(\'demo/images/car/\' + slotProps.option.brand + \'.png\')" /> <div>{{slotProps.option.brand}}</div> </div> </template> </SelectButton> ')]],2),e("h5",[t._v("Properties")]),e("p",[t._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("any")]),e("td",[t._v("null")]),e("td",[t._v("Value of the component.")])]),e("tr",[e("td",[t._v("options")]),e("td",[t._v("array")]),e("td",[t._v("null")]),e("td",[t._v("An array of selectitems to display as the available options.")])]),e("tr",[e("td",[t._v("optionLabel")]),e("td",[t._v("string | function")]),e("td",[t._v("null")]),e("td",[t._v("Property name or getter function to use as the label of an option.")])]),e("tr",[e("td",[t._v("optionValue")]),e("td",[t._v("string | function")]),e("td",[t._v("null")]),e("td",[t._v("Property name or getter function to use as the value of an option, defaults to the option itself when not defined.")])]),e("tr",[e("td",[t._v("optionDisabled")]),e("td",[t._v("string | function")]),e("td",[t._v("null")]),e("td",[t._v("Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.")])]),e("tr",[e("td",[t._v("multiple")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("When specified, allows selecting multiple values.")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("When present, it specifies that the element should be disabled.")])]),e("tr",[e("td",[t._v("dataKey")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("A property to uniquely identify an option.")])]),e("tr",[e("td",[t._v("ariaLabelledBy")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Establishes relationships between the component and label(s) where its value should be one or more element IDs.")])])])])]),e("h5",[t._v("Events")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("input")]),e("td",[t._v("event: Single value or an array of values that are selected.")]),e("td",[t._v("Callback to invoke on value change.")])]),e("tr",[e("td",[t._v("focus")]),e("td",[t._v("event: Browser event")]),e("td",[t._v("Callback to invoke on focus.")])]),e("tr",[e("td",[t._v("blur")]),e("td",[t._v("event: Browser event")]),e("td",[t._v("Callback to invoke on blur.")])])])])]),e("h5",[t._v("Slots")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("option")]),e("td",[t._v("option: Option instance"),e("br"),t._v(" index: Index of the option")])])])])]),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/selectbutton",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])]),e("CodeHighlight",[[t._v(' <h5>Single Selection</h5> <SelectButton v-model="value1" :options="options" /> <h5>Multiple Selection</h5> <SelectButton v-model="value2" :options="paymentOptions" optionLabel="name" multiple /> <h5>Custom Content</h5> <SelectButton v-model="value3" :options="justifyOptions" dataKey="value"> <template #option="slotProps"> <i :class="slotProps.option.icon"></i> </template> </SelectButton> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" export default { data() { return { value1: 'Off', value2: null, value3: null, options: ['Off', 'On'], paymentOptions: [ {name: 'Option 1', value: 1}, {name: 'Option 2', value: 2}, {name: 'Option 3', value: 3} ], justifyOptions: [ {icon: 'pi pi-align-left', value: 'left'}, {icon: 'pi pi-align-right', value: 'Right'}, {icon: 'pi pi-align-center', value: 'Center'}, {icon: 'pi pi-align-justify', value: 'Justify'}] } } } ")])],1)],1)],1)}),[],!1,null,null).exports;t("default",o({data:function(){return{value1:"Off",value2:null,value3:null,options:["Off","On"],paymentOptions:[{name:"Option 1",value:1},{name:"Option 2",value:2},{name:"Option 3",value:3}],justifyOptions:[{icon:"pi pi-align-left",value:"left"},{icon:"pi pi-align-right",value:"Right"},{icon:"pi pi-align-center",value:"Center"},{icon:"pi pi-align-justify",value:"Justify"}]}},components:{SelectButtonDoc:e}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Single Selection")]),e("SelectButton",{attrs:{options:t.options},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),e("h5",[t._v("Multiple Selection")]),e("SelectButton",{attrs:{options:t.paymentOptions,optionLabel:"name",multiple:""},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}}),e("h5",[t._v("Custom Content")]),e("SelectButton",{attrs:{options:t.justifyOptions,dataKey:"value"},scopedSlots:t._u([{key:"option",fn:function(t){return[e("i",{class:t.option.icon})]}}]),model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}})],1)]),e("SelectButtonDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("SelectButton")]),e("p",[t._v("SelectButton is a form component to choose a value from a list of options using button elements.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=SelectButtonDemo-legacy-Cq2KYm6A.js.map