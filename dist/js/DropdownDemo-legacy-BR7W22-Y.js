System.register(["./app.component-legacy-Dyxh1RLY.js","./flag_placeholder-legacy-BDbXk8CQ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var o,a;return{setters:[function(e){o=e.n},function(e){a=e._},null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".p-dropdown[data-v-2a56c820]{width:14rem}.country-item-value img.flag[data-v-2a56c820]{width:17px}\n",document.head.appendChild(t);var n=o({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import Dropdown from 'primevue2/dropdown'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("Dropdown requires a value to bind and a collection of arbitrary objects along with the "),t("i",[e._v("optionLabel")]),e._v(" property to specify the label property of the option.")]),t("CodeHighlight",[e._v(' <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" /> ')]),t("CodeHighlight",{attrs:{lang:"js"}},[e._v(" data() { return { selectedCity: null, cities: [ {name: 'New York', code: 'NY'}, {name: 'Rome', code: 'RM'}, {name: 'London', code: 'LDN'}, {name: 'Istanbul', code: 'IST'}, {name: 'Paris', code: 'PRS'} ] } } ")]),t("h5",[e._v("Placeholder")]),t("p",[e._v("Common pattern is providing an empty option as the placeholder when using native selects, however Dropdown has built-in support using the placeholder option so it is suggested to use it instead of creating an empty option.")]),t("h5",[e._v("Filtering")]),t("p",[e._v("Options can be filtered using an input field in the overlay by enabling the "),t("i",[e._v("filter")]),e._v(" property.")]),t("CodeHighlight",[e._v(' <Dropdown v-model="selectedCar" :options="cars" optionLabel="brand" placeholder="Select a Car" :filter="true" filterPlaceholder="Find Car"/> ')]),t("h5",[e._v("Custom Content")]),t("p",[e._v("Label of an option is used as the display text of an item by default, for custom content support define an "),t("i",[e._v("option")]),e._v(" template that gets the option instance as a parameter.")]),t("p",[e._v("In addition the "),t("i",[e._v("value")]),e._v(" template can be used to customize the selected value.")]),t("CodeHighlight",[[e._v(' <Dropdown v-model="selectedCar" :options="cars" optionLabel="brand" :filter="true" placeholder="Select a Car" :showClear="true"> <template #value="slotProps"> <div class="p-dropdown-car-value" v-if="slotProps.value"> <img :alt="slotProps.value.brand" :src="$publicUrl(\'demo/images/car/\' + slotProps.value.brand + \'.png\')" /> <span>{{slotProps.value.brand}}</span> </div> <span v-else> {{slotProps.placeholder}} </span> </template> <template #option="slotProps"> <div class="p-dropdown-car-option"> <img :alt="slotProps.option.brand" :src="$publicUrl(\'demo/images/car/\' + slotProps.option.brand + \'.png\')" /> <span>{{slotProps.option.brand}}</span> </div> </template> </Dropdown> ')]],2),t("h5",[e._v("Properties")]),t("p",[e._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("any")]),t("td",[e._v("null")]),t("td",[e._v("Value of the component.")])]),t("tr",[t("td",[e._v("options")]),t("td",[e._v("array")]),t("td",[e._v("null")]),t("td",[e._v("An array of selectitems to display as the available options.")])]),t("tr",[t("td",[e._v("optionLabel")]),t("td",[e._v("string | function")]),t("td",[e._v("null")]),t("td",[e._v("Property name or getter function to use as the label of an option.")])]),t("tr",[t("td",[e._v("optionValue")]),t("td",[e._v("string | function")]),t("td",[e._v("null")]),t("td",[e._v("Property name or getter function to use as the value of an option, defaults to the option itself when not defined.")])]),t("tr",[t("td",[e._v("optionDisabled")]),t("td",[e._v("string | function")]),t("td",[e._v("null")]),t("td",[e._v("Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.")])]),t("tr",[t("td",[e._v("scrollHeight")]),t("td",[e._v("string")]),t("td",[e._v("200px")]),t("td",[e._v("Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.")])]),t("tr",[t("td",[e._v("filter")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When specified, displays an input field to filter the items on keyup.")])]),t("tr",[t("td",[e._v("filterPlaceholder")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Placeholder text to show when filter input is empty.")])]),t("tr",[t("td",[e._v("filterLocale")]),t("td",[e._v("string")]),t("td",[e._v("undefined")]),t("td",[e._v("Locale to use in filtering. The default locale is the host environment's current locale.")])]),t("tr",[t("td",[e._v("editable")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When present, custom value instead of predefined options can be entered using the editable input field.")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Default text to display when no option is selected.")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When present, it specifies that the component should be disabled.")])]),t("tr",[t("td",[e._v("dataKey")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("A property to uniquely identify an option.")])]),t("tr",[t("td",[e._v("showClear")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When enabled, a clear icon is displayed to clear the value.")])]),t("tr",[t("td",[e._v("tabindex")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v("Index of the element in tabbing order.")])]),t("tr",[t("td",[e._v("inputId")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Identifier of the underlying input element.")])]),t("tr",[t("td",[e._v("ariaLabelledBy")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Establishes relationships between the component and label(s) where its value should be one or more element IDs.")])]),t("tr",[t("td",[e._v("appendTo")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v('Id of the element or "body" for document where the overlay should be appended to.')])]),t("tr",[t("td",[e._v("emptyFilterMessage")]),t("td",[e._v("string")]),t("td",[e._v("No results found")]),t("td",[e._v("Text to display when filtering does not return any results.")])])])])]),t("h5",[e._v("Events")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("event.originalEvent: Original event "),t("br"),e._v(" event.value: Selected option value ")]),t("td",[e._v("Callback to invoke on value change.")])]),t("tr",[t("td",[e._v("input")]),t("td",[e._v("value: New value")]),t("td",[e._v("Callback to invoke on value change.")])]),t("tr",[t("td",[e._v("before-show")]),t("td",[e._v("-")]),t("td",[e._v("Callback to invoke before the overlay is shown.")])]),t("tr",[t("td",[e._v("before-hide")]),t("td",[e._v("-")]),t("td",[e._v("Callback to invoke before the overlay is hidden.")])]),t("tr",[t("td",[e._v("show")]),t("td",[e._v("-")]),t("td",[e._v("Callback to invoke when the overlay is shown.")])]),t("tr",[t("td",[e._v("hide")]),t("td",[e._v("-")]),t("td",[e._v("Callback to invoke when the overlay is hidden.")])]),t("tr",[t("td",[e._v("filter")]),t("td",[e._v("event.originalEvent: Original event "),t("br"),e._v(" event.value: Filter value ")]),t("td",[e._v("Callback to invoke on filter input.")])])])])]),t("h5",[e._v("Methods")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("show")]),t("td",[e._v("-")]),t("td",[e._v("Shows the overlay.")])]),t("tr",[t("td",[e._v("hide")]),t("td",[e._v("-")]),t("td",[e._v("Hides the overlay.")])])])])]),t("h5",[e._v("Slots")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("option")]),t("td",[e._v("option: Option instance "),t("br"),e._v(" index: Index of the option")])]),t("tr",[t("td",[e._v("value")]),t("td",[e._v("value: Value of the component "),t("br"),e._v(" placeholder: Placeholder prop value")])]),t("tr",[t("td",[e._v("indicator")]),t("td",[e._v("-")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-dropdown")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-dropdown-label")]),t("td",[e._v("Element to display label of selected option.")])]),t("tr",[t("td",[e._v("p-dropdown-trigger")]),t("td",[e._v("Icon element.")])]),t("tr",[t("td",[e._v("p-dropdown-panel")]),t("td",[e._v("Icon element.")])]),t("tr",[t("td",[e._v("p-dropdown-items-wrapper")]),t("td",[e._v("Wrapper element of items list.")])]),t("tr",[t("td",[e._v("p-dropdown-items")]),t("td",[e._v("List element of items.")])]),t("tr",[t("td",[e._v("p-dropdown-item")]),t("td",[e._v("An item in the list.")])]),t("tr",[t("td",[e._v("p-dropdown-filter-container")]),t("td",[e._v("Container of filter input.")])]),t("tr",[t("td",[e._v("p-dropdown-filter")]),t("td",[e._v("Filter element.")])]),t("tr",[t("td",[e._v("p-dropdown-open")]),t("td",[e._v("Container element when overlay is visible.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/dropdown",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <h5>Basic</h5> <Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" /> <h5>Editable</h5> <Dropdown v-model="selectedCity2" :options="cities" optionLabel="name" :editable="true"/> <h5>Advanced with Templating, Filtering and Clear Icon</h5> <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" :filter="true" placeholder="Select a Country" :showClear="true"> <template #value="slotProps"> <div class="country-item country-item-value" v-if="slotProps.value"> <img src="../../assets/images/flag_placeholder.png" :class="\'flag flag-\' + slotProps.value.code.toLowerCase()" /> <div>{{slotProps.value.name}}</div> </div> <span v-else> {{slotProps.placeholder}} </span> </template> <template #option="slotProps"> <div class="country-item"> <img src="../../assets/images/flag_placeholder.png" :class="\'flag flag-\' + slotProps.option.code.toLowerCase()" /> <div>{{slotProps.option.name}}</div> </div> </template> </Dropdown> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data() { return { selectedCity1: null, selectedCity2: null, selectedCountry: null, cities: [ {name: 'New York', code: 'NY'}, {name: 'Rome', code: 'RM'}, {name: 'London', code: 'LDN'}, {name: 'Istanbul', code: 'IST'}, {name: 'Paris', code: 'PRS'} ], countries: [ {name: 'Australia', code: 'AU'}, {name: 'Brazil', code: 'BR'}, {name: 'China', code: 'CN'}, {name: 'Egypt', code: 'EG'}, {name: 'France', code: 'FR'}, {name: 'Germany', code: 'DE'}, {name: 'India', code: 'IN'}, {name: 'Japan', code: 'JP'}, {name: 'Spain', code: 'ES'}, {name: 'United States', code: 'US'} ] } }, } ")])],1)],1)],1)}),[],!1,null,null).exports;e("default",o({data:function(){return{selectedCity1:null,selectedCity2:null,selectedCountry:null,cities:[{name:"New York",code:1},{name:"Rome",code:2},{name:"London",code:0},{name:"Istanbul",code:4},{name:"Paris",code:5}],countries:[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}]}},components:{DropdownDoc:n}},(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"content-section introduction"},[e._m(0),t("AppInputStyleSwitch")],1),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Basic")]),t("Dropdown",{attrs:{options:e.cities,optionLabel:"name",optionValue:"code",placeholder:"Select a City"},model:{value:e.selectedCity1,callback:function(t){e.selectedCity1=t},expression:"selectedCity1"}}),t("h5",[e._v("Editable")]),t("Dropdown",{attrs:{options:e.cities,optionLabel:"name",editable:!0},model:{value:e.selectedCity2,callback:function(t){e.selectedCity2=t},expression:"selectedCity2"}}),t("h5",[e._v("Advanced with Templating, Filtering and Clear Icon")]),t("Dropdown",{attrs:{options:e.countries,optionLabel:"name",filter:!0,placeholder:"Select a Country",showClear:!0},scopedSlots:e._u([{key:"value",fn:function(o){return[o.value?t("div",{staticClass:"country-item country-item-value"},[t("img",{class:"flag flag-"+o.value.code.toLowerCase(),attrs:{src:a}}),t("div",[e._v(e._s(o.value.name))])]):t("span",[e._v(" "+e._s(o.placeholder)+" ")])]}},{key:"option",fn:function(o){return[t("div",{staticClass:"country-item"},[t("img",{class:"flag flag-"+o.option.code.toLowerCase(),attrs:{src:a}}),t("div",[e._v(e._s(o.option.name))])])]}}]),model:{value:e.selectedCountry,callback:function(t){e.selectedCountry=t},expression:"selectedCountry"}})],1)]),t("DropdownDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"feature-intro"},[t("h1",[e._v("Dropdown")]),t("p",[e._v("Dropdown is used to select an item from a list of options.")])])}],!1,null,"2a56c820").exports)}}}));
//# sourceMappingURL=DropdownDemo-legacy-BR7W22-Y.js.map
