import{n as i}from"./app.component-BAbvz7X_.js";import{_ as a}from"./flag_placeholder-BDuXeLXp.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const s={name:"Documentation",data(){return{importCode:{basic:"\nimport Listbox from 'primevue2/listbox';\n        "},baseCode:{basic:'\n<Listbox v-model="selectedCity" :options="cities" optionLabel="name" />\n        '},baseCode2:{basic:"\ndata() {\n	return {\n		selectedCity: null,\n		cities: [\n			{name: 'New York', code: 'NY'},\n			{name: 'Rome', code: 'RM'},\n			{name: 'London', code: 'LDN'},\n			{name: 'Istanbul', code: 'IST'},\n			{name: 'Paris', code: 'PRS'}\n		]\n	}\n}\n        "},selectionCode:{basic:'\n<Listbox v-model="selectedCity" :options="cities" optionLabel="name" :multiple="true"/>\n        '},customContentCode:{basic:'\n<Listbox v-model="selectedCars" :options="cars" :multiple="true" :filter="true" optionLabel="brand" listStyle="max-height:250px" style="width:15em">\n	<template #option="slotProps">\n		<div>\n			<img :alt="slotProps.option.brand" :src="\'demo/images/car/\' + slotProps.option.brand + \'.png\'" />\n			<span>{{slotProps.option.brand}}</span>\n		</div>\n	</template>\n</Listbox>\n        '},filterCode:{basic:'\n<Listbox v-model="selectedCity" :options="cities" optionLabel="name" :filter="true"/>\n        '}}}};var l=function(){var e=this,o=e._self._c;return o("div",[o("h5",[e._v("Import")]),o("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),o("h5",[e._v("Getting Started")]),e._m(0),o("DocSectionCode",{attrs:{code:e.baseCode}}),o("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}}),o("h5",[e._v("Selection")]),e._m(1),o("DocSectionCode",{attrs:{code:e.selectionCode}}),o("h5",[e._v("Custom Content")]),e._m(2),o("DocSectionCode",{attrs:{code:e.customContentCode}}),o("h5",[e._v("Filter")]),e._m(3),o("DocSectionCode",{attrs:{code:e.filterCode}}),o("h5",[e._v("Properties")]),o("p",[e._v(" Any property as style and class are passed to the main container element. Following are the additional properties to configure the component. ")]),e._m(4),o("h5",[e._v("Events")]),e._m(5),o("h5",[e._v("Slots")]),e._m(6),o("h5",[e._v("Styling")]),o("p",[e._v(" Following is the list of structural style classes, for theming classes visit "),o("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page. ")],1),e._m(7),o("h5",[e._v("Dependencies")]),o("p",[e._v("None.")])],1)},r=[function(){var t=this,e=t._self._c;return e("p",[t._v(" Listbox requires a value to bind and a collection of arbitrary objects along with the "),e("i",[t._v("optionLabel")]),t._v(" property to specify the label property of the option. ")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" Listbox allows selection of either single or multiple items. In single case, model should be a single object reference whereas in multiple case should be an array. Multiple items can either be selected using metaKey or toggled individually depending on the value of "),e("i",[t._v("metaKeySelection")]),t._v(" property value which is true by default. On touch enabled devices metaKeySelection is turned off automatically. ")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" Label of an option is used as the display text of an item by default, for custom content support define an "),e("i",[t._v("option")]),t._v(" template that gets the option instance as a parameter. ")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" Filtering allows searching items in the list using an input field at the header. In order to use filtering, enable "),e("i",[t._v("filter")]),t._v(" property. ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("any")]),e("td",[t._v("null")]),e("td",[t._v("Value of the component.")])]),e("tr",[e("td",[t._v("options")]),e("td",[t._v("array")]),e("td",[t._v("null")]),e("td",[t._v("An array of selectitems to display as the available options.")])]),e("tr",[e("td",[t._v("optionLabel")]),e("td",[t._v("string | function")]),e("td",[t._v("null")]),e("td",[t._v("Property name or getter function to use as the label of an option.")])]),e("tr",[e("td",[t._v("optionValue")]),e("td",[t._v("string | function")]),e("td",[t._v("null")]),e("td",[t._v(" Property name or getter function to use as the value of an option, defaults to the option itself when not defined. ")])]),e("tr",[e("td",[t._v("optionDisabled")]),e("td",[t._v("string | function")]),e("td",[t._v("null")]),e("td",[t._v(" Property name or getter function to use as the disabled flag of an option, defaults to false when not defined. ")])]),e("tr",[e("td",[t._v("listStyle")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Inline style of inner list element.")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("When specified, disables the component.")])]),e("tr",[e("td",[t._v("dataKey")]),e("td",[t._v("string")]),e("td",[t._v("false")]),e("td",[t._v("A property to uniquely identify an option.")])]),e("tr",[e("td",[t._v("multiple")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("When specified, allows selecting multiple values.")])]),e("tr",[e("td",[t._v("metaKeySelection")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v(" Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. ")])]),e("tr",[e("td",[t._v("filter")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("When specified, displays a filter input at header.")])]),e("tr",[e("td",[t._v("filterPlaceholder")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Placeholder text to show when filter input is empty.")])]),e("tr",[e("td",[t._v("filterLocale")]),e("td",[t._v("string")]),e("td",[t._v("undefined")]),e("td",[t._v("Locale to use in filtering. The default locale is the host environment's current locale.")])]),e("tr",[e("td",[t._v("emptyFilterMessage")]),e("td",[t._v("string")]),e("td",[t._v("No results found")]),e("td",[t._v("Text to display when filtering does not return any results.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v(" event.originalEvent: Original event "),e("br"),t._v(" event.value: Selected option value ")]),e("td",[t._v("Callback to invoke on value change.")])]),e("tr",[e("td",[t._v("input")]),e("td",[t._v("value: New value")]),e("td",[t._v("Callback to invoke on value change.")])]),e("tr",[e("td",[t._v("filter")]),e("td",[t._v(" event.originalEvent: Original event "),e("br"),t._v(" event.value: Filter value ")]),e("td",[t._v("Callback to invoke on filter input.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("option")]),e("td",[t._v(" option: Option instance "),e("br"),t._v(" index: Index of the option ")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-listbox")]),e("td",[t._v("Main container element.")])]),e("tr",[e("td",[t._v("p-listbox-header")]),e("td",[t._v("Header element.")])]),e("tr",[e("td",[t._v("p-listbox-list-wrapper")]),e("td",[t._v("Container of list element.")])]),e("tr",[e("td",[t._v("p-listbox-list")]),e("td",[t._v("List element.")])]),e("tr",[e("td",[t._v("p-listbox-item")]),e("td",[t._v("An item in the list element.")])])])])])}],d=i(s,l,r,!1,null,null);const c=d.exports,_={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<h5>Single</h5>\n<Listbox v-model="selectedCity" :options="cities" optionLabel="name" style="width:15rem" />\n\n<h5>Advanced with Templating, Filtering and Multiple Selection</h5>\n<Listbox v-model="selectedCountries" :options="countries" :multiple="true" :filter="true" optionLabel="name" listStyle="max-height:250px" style="width:15rem">\n    <template #option="slotProps">\n        <div class="country-item">\n            <img src="../../assets/images/flag_placeholder.png" :class="\'flag flag-\' + slotProps.option.code.toLowerCase()" />\n            <div>{{slotProps.option.name}}</div>\n        </div>\n    </template>\n</Listbox>\n        '},sourceCode2:{basic:"\nexport default {\n    data() {\n        return {\n            selectedCity: null,\n            selectedCountries: null,\n            cities: [\n                {name: 'New York', code: 'NY'},\n                {name: 'Rome', code: 'RM'},\n                {name: 'London', code: 'LDN'},\n                {name: 'Istanbul', code: 'IST'},\n                {name: 'Paris', code: 'PRS'}\n            ],\n            countries: [\n                {name: 'Australia', code: 'AU'},\n                {name: 'Brazil', code: 'BR'},\n                {name: 'China', code: 'CN'},\n                {name: 'Egypt', code: 'EG'},\n                {name: 'France', code: 'FR'},\n                {name: 'Germany', code: 'DE'},\n                {name: 'India', code: 'IN'},\n                {name: 'Japan', code: 'JP'},\n                {name: 'Spain', code: 'ES'},\n                {name: 'United States', code: 'US'}\n            ]\n        }\n    }\n}\n        "}}}};var v=function(){var e=this,o=e._self._c;return o("div",[e._m(0),o("DocSectionCode",{attrs:{code:e.sourceCode1}}),o("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)},m=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/listbox",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])])}],u=i(_,v,m,!1,null,null);const p=u.exports,f={components:{Documentation:c,SourceCode:p}};var h=function(){var e=this,o=e._self._c;return o("div",{staticClass:"content-section documentation"},[o("TabView",[o("TabPanel",{attrs:{header:"Documentation"}},[o("Documentation")],1),o("TabPanel",{attrs:{header:"Source"}},[o("SourceCode")],1)],1)],1)},b=[],C=i(f,h,b,!1,null,null);const g=C.exports,y={data(){return{selectedCity:null,selectedCountries:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],countries:[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}]}},components:{ListboxDoc:g}};var S=function(){var e=this,o=e._self._c;return o("div",[o("div",{staticClass:"content-section introduction"},[e._m(0),o("AppInputStyleSwitch")],1),o("div",{staticClass:"content-section implementation"},[o("div",{staticClass:"card"},[o("h5",[e._v("Single")]),o("Listbox",{staticStyle:{width:"15rem"},attrs:{options:e.cities,optionLabel:"name"},model:{value:e.selectedCity,callback:function(n){e.selectedCity=n},expression:"selectedCity"}}),o("h5",[e._v("Advanced with Templating, Filtering and Multiple Selection")]),o("Listbox",{staticStyle:{width:"15rem"},attrs:{options:e.countries,multiple:!0,filter:!0,optionLabel:"name",listStyle:"max-height:250px"},scopedSlots:e._u([{key:"option",fn:function(n){return[o("div",{staticClass:"country-item"},[o("img",{class:"flag flag-"+n.option.code.toLowerCase(),attrs:{src:a}}),o("div",[e._v(e._s(n.option.name))])])]}}]),model:{value:e.selectedCountries,callback:function(n){e.selectedCountries=n},expression:"selectedCountries"}})],1)]),o("ListboxDoc")],1)},x=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"feature-intro"},[e("h1",[t._v("Listbox")]),e("p",[t._v("Listbox is used to select one or more values from a list of items.")])])}],L=i(y,S,x,!1,null,null);const I=L.exports;export{I as default};
//# sourceMappingURL=index-04z3ICKw.js.map