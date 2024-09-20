System.register(["./app.component-legacy-CT61tSyJ.js","./flag_placeholder-legacy-BDbXk8CQ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var i,n;return{setters:[function(e){i=e.n},function(e){n=e._},null,null,null],execute:function(){var t=i({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import Listbox from 'primevue2/listbox'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("Listbox requires a value to bind and a collection of arbitrary objects along with the "),t("i",[e._v("optionLabel")]),e._v(" property to specify the label property of the option.")]),t("CodeHighlight",[e._v(' <Listbox v-model="selectedCity" :options="cities" optionLabel="name" /> ')]),t("CodeHighlight",{attrs:{lang:"js"}},[e._v(" data() { return { selectedCity: null, cities: [ {name: 'New York', code: 'NY'}, {name: 'Rome', code: 'RM'}, {name: 'London', code: 'LDN'}, {name: 'Istanbul', code: 'IST'}, {name: 'Paris', code: 'PRS'} ] } } ")]),t("h5",[e._v("Selection")]),t("p",[e._v("Listbox allows selection of either single or multiple items. In single case, model should be a single object reference whereas in multiple case should be an array. Multiple items can either be selected using metaKey or toggled individually depending on the value of "),t("i",[e._v("metaKeySelection")]),e._v(" property value which is true by default. On touch enabled devices metaKeySelection is turned off automatically.")]),t("CodeHighlight",[e._v(' <Listbox v-model="selectedCity" :options="cities" optionLabel="name" :multiple="true"/> ')]),t("h5",[e._v("Custom Content")]),t("p",[e._v("Label of an option is used as the display text of an item by default, for custom content support define an "),t("i",[e._v("option")]),e._v(" template that gets the option instance as a parameter.")]),t("CodeHighlight",[[e._v(' <Listbox v-model="selectedCars" :options="cars" :multiple="true" :filter="true" optionLabel="brand" listStyle="max-height:250px" style="width:15em"> <template #option="slotProps"> <div> <img :alt="slotProps.option.brand" :src="$publicUrl(\'demo/images/car/\' + slotProps.option.brand + \'.png\')" /> <span>{{slotProps.option.brand}}</span> </div> </template> </Listbox> ')]],2),t("h5",[e._v("Filter")]),t("p",[e._v("Filtering allows searching items in the list using an input field at the header. In order to use filtering, enable "),t("i",[e._v("filter")]),e._v(" property.")]),t("CodeHighlight",[e._v(' <Listbox v-model="selectedCity" :options="cities" optionLabel="name" :filter="true"/> ')]),t("h5",[e._v("Properties")]),t("p",[e._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("any")]),t("td",[e._v("null")]),t("td",[e._v("Value of the component.")])]),t("tr",[t("td",[e._v("options")]),t("td",[e._v("array")]),t("td",[e._v("null")]),t("td",[e._v("An array of selectitems to display as the available options.")])]),t("tr",[t("td",[e._v("optionLabel")]),t("td",[e._v("string | function")]),t("td",[e._v("null")]),t("td",[e._v("Property name or getter function to use as the label of an option.")])]),t("tr",[t("td",[e._v("optionValue")]),t("td",[e._v("string | function")]),t("td",[e._v("null")]),t("td",[e._v("Property name or getter function to use as the value of an option, defaults to the option itself when not defined.")])]),t("tr",[t("td",[e._v("optionDisabled")]),t("td",[e._v("string | function")]),t("td",[e._v("null")]),t("td",[e._v("Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.")])]),t("tr",[t("td",[e._v("listStyle")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Inline style of inner list element.")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When specified, disables the component.")])]),t("tr",[t("td",[e._v("dataKey")]),t("td",[e._v("string")]),t("td",[e._v("false")]),t("td",[e._v("A property to uniquely identify an option.")])]),t("tr",[t("td",[e._v("multiple")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When specified, allows selecting multiple values.")])]),t("tr",[t("td",[e._v("metaKeySelection")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.")])]),t("tr",[t("td",[e._v("filter")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When specified, displays a filter input at header.")])]),t("tr",[t("td",[e._v("filterPlaceholder")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Placeholder text to show when filter input is empty.")])]),t("tr",[t("td",[e._v("filterLocale")]),t("td",[e._v("string")]),t("td",[e._v("undefined")]),t("td",[e._v("Locale to use in filtering. The default locale is the host environment's current locale.")])]),t("tr",[t("td",[e._v("emptyFilterMessage")]),t("td",[e._v("string")]),t("td",[e._v("No results found")]),t("td",[e._v("Text to display when filtering does not return any results.")])])])])]),t("h5",[e._v("Events")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("event.originalEvent: Original event "),t("br"),e._v(" event.value: Selected option value ")]),t("td",[e._v("Callback to invoke on value change.")])]),t("tr",[t("td",[e._v("input")]),t("td",[e._v("value: New value")]),t("td",[e._v("Callback to invoke on value change.")])]),t("tr",[t("td",[e._v("filter")]),t("td",[e._v("event.originalEvent: Original event "),t("br"),e._v(" event.value: Filter value ")]),t("td",[e._v("Callback to invoke on filter input.")])])])])]),t("h5",[e._v("Slots")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("option")]),t("td",[e._v("option: Option instance "),t("br"),e._v(" index: Index of the option")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-listbox")]),t("td",[e._v("Main container element.")])]),t("tr",[t("td",[e._v("p-listbox-header")]),t("td",[e._v("Header element.")])]),t("tr",[t("td",[e._v("p-listbox-list-wrapper")]),t("td",[e._v("Container of list element.")])]),t("tr",[t("td",[e._v("p-listbox-list")]),t("td",[e._v("List element.")])]),t("tr",[t("td",[e._v("p-listbox-item")]),t("td",[e._v("An item in the list element.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/listbox",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <h5>Single</h5> <Listbox v-model="selectedCity" :options="cities" optionLabel="name" style="width:15rem" /> <h5>Advanced with Templating, Filtering and Multiple Selection</h5> <Listbox v-model="selectedCountries" :options="countries" :multiple="true" :filter="true" optionLabel="name" listStyle="max-height:250px" style="width:15rem"> <template #option="slotProps"> <div class="country-item"> <img src="../../assets/images/flag_placeholder.png" :class="\'flag flag-\' + slotProps.option.code.toLowerCase()" /> <div>{{slotProps.option.name}}</div> </div> </template> </Listbox> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data() { return { selectedCity: null, selectedCountries: null, cities: [ {name: 'New York', code: 'NY'}, {name: 'Rome', code: 'RM'}, {name: 'London', code: 'LDN'}, {name: 'Istanbul', code: 'IST'}, {name: 'Paris', code: 'PRS'} ], countries: [ {name: 'Australia', code: 'AU'}, {name: 'Brazil', code: 'BR'}, {name: 'China', code: 'CN'}, {name: 'Egypt', code: 'EG'}, {name: 'France', code: 'FR'}, {name: 'Germany', code: 'DE'}, {name: 'India', code: 'IN'}, {name: 'Japan', code: 'JP'}, {name: 'Spain', code: 'ES'}, {name: 'United States', code: 'US'} ] } } } ")])],1)],1)],1)}),[],!1,null,null).exports;e("default",i({data:function(){return{selectedCity:null,selectedCountries:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],countries:[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}]}},components:{ListboxDoc:t}},(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"content-section introduction"},[e._m(0),t("AppInputStyleSwitch")],1),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Single")]),t("Listbox",{staticStyle:{width:"15rem"},attrs:{options:e.cities,optionLabel:"name"},model:{value:e.selectedCity,callback:function(t){e.selectedCity=t},expression:"selectedCity"}}),t("h5",[e._v("Advanced with Templating, Filtering and Multiple Selection")]),t("Listbox",{staticStyle:{width:"15rem"},attrs:{options:e.countries,multiple:!0,filter:!0,optionLabel:"name",listStyle:"max-height:250px"},scopedSlots:e._u([{key:"option",fn:function(i){return[t("div",{staticClass:"country-item"},[t("img",{class:"flag flag-"+i.option.code.toLowerCase(),attrs:{src:n}}),t("div",[e._v(e._s(i.option.name))])])]}}]),model:{value:e.selectedCountries,callback:function(t){e.selectedCountries=t},expression:"selectedCountries"}})],1)]),t("ListboxDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"feature-intro"},[t("h1",[e._v("Listbox")]),t("p",[e._v("Listbox is used to select one or more values from a list of items.")])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=ListboxDemo-legacy-BvElqZu3.js.map
