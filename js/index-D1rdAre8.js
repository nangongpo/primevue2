import{n}from"./app.component-BAbvz7X_.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const i={name:"Documentation",data(){return{importCode:{basic:"\nimport InputNumber from 'primevue2/inputnumber';\n        "},baseCode:{basic:'\n<InputNumber v-model="value" />\n        '},decimalModeCode:{basic:'\n<InputNumber v-model="value" mode="decimal" />\n        '},decimalModeCode2:{basic:'\n<InputNumber v-model="value1" mode="decimal" :minFractionDigits="2" />\n<InputNumber v-model="value2" mode="decimal" :minFractionDigits="2" :maxFracionDigits="2" />\n        '},decimalModeCode3:{basic:'\nUser Locale\n<InputNumber v-model="value1" mode="decimal" :minFractionDigits="2" />\n\nUnited State Locale\n<InputNumber v-model="value2" mode="decimal" locale="en-US" :minFractionDigits="2" />\n\nGerman Locale\n<InputNumber v-model="value3" mode="decimal" locale="de-DE" :minFractionDigits="2" />\n\nIndian Locale\n<InputNumber v-model="value4" mode="decimal" locale="en-IN" :minFractionDigits="2" />\n        '},currencyCode:{basic:'\nUnited States\n<InputNumber v-model="value1" mode="currency" currency="USD" locale="en-US" />\n\nGermany\n<InputNumber v-model="value2" mode="currency" currency="EUR" locale="de-DE" />\n\nIndia\n<InputNumber v-model="value3" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />\n\nJapan\n<InputNumber v-model="value4" mode="currency" currency="JPY" locale="jp-JP" />\n        '},prefixAndSuffixCode:{basic:'\nMile\n<InputNumber v-model="value1" suffix=" mi" />\n\nPercent\n<InputNumber v-model="value2" prefix="%" />\n\nExpiry\n<InputNumber v-model="value3" prefix="Expires in " suffix=" days" />\n\nTemperature\n<InputNumber v-model="value4" prefix="↑ " suffix="℃" :min="0" :max="40" />\n        '},buttonsCode:{basic:'\nStacked\n<InputNumber v-model="value1" showButtons mode="currency" currency="USD" />\n\nHorizontal\n<InputNumber v-model="value2" showButtons buttonLayout="horizontal"\n    decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR" />\n\nVertical\n<InputNumber v-model="value3" mode="decimal" showButtons buttonLayout="vertical"\n    decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />\n        '},stepCode:{basic:'\n<InputNumber v-model="value" :step="0.25" />\n        '},minAndMaxBoundariesCode:{basic:'\n<InputNumber v-model="value" :min="0" :max="100" />\n        '}}}};var o=function(){var e=this,a=e._self._c;return a("div",[a("h5",[e._v("Import")]),a("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),a("h5",[e._v("Getting Started")]),a("p",[e._v(" InputNumber is used with the standard v-model directive. Component always provides a number type although formatting on the input is a string. ")]),a("DocSectionCode",{attrs:{code:e.baseCode}}),a("h5",[e._v("Decimal Mode")]),e._m(0),a("DocSectionCode",{attrs:{code:e.decimalModeCode}}),e._m(1),a("DocSectionCode",{attrs:{code:e.decimalModeCode2}}),e._m(2),a("DocSectionCode",{attrs:{code:e.decimalModeCode3}}),a("h5",[e._v("Currency")]),e._m(3),a("DocSectionCode",{attrs:{code:e.currencyCode}}),a("h5",[e._v("Prefix and Suffix")]),e._m(4),a("DocSectionCode",{attrs:{code:e.prefixAndSuffixCode}}),a("h5",[e._v("Buttons")]),e._m(5),a("DocSectionCode",{attrs:{code:e.buttonsCode}}),a("h5",[e._v("Step")]),e._m(6),a("DocSectionCode",{attrs:{code:e.stepCode}}),a("h5",[e._v("Min and Max Boundaries")]),e._m(7),a("DocSectionCode",{attrs:{code:e.minAndMaxBoundariesCode}}),a("h5",[e._v("Properties")]),a("p",[e._v("InputNumber passes any valid attribute to the underlying input element.")]),e._m(8),a("h5",[e._v("Events")]),a("p",[e._v("Any valid event such as focus, blur and input are passed to the underlying input element.")]),a("h5",[e._v("Styling")]),a("p",[e._v(" Following is the list of structural style classes, for theming classes visit "),a("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page. ")],1),e._m(9),a("h5",[e._v("Dependencies")]),a("p",[e._v("None.")])],1)},r=[function(){var t=this,e=t._self._c;return e("p",[t._v(" Format is defined using the "),e("i",[t._v("mode")]),t._v(' property, "decimal" is the default value allowing only integers when there is no other configuration. ')])},function(){var t=this,e=t._self._c;return e("p",[t._v(" Fractions are configured with the "),e("i",[t._v("minFractionDigits")]),t._v(" property. Optionally "),e("i",[t._v("maxFractionDigits")]),t._v(" can be used to defined a boundary for the maximum digits. ")])},function(){var t=this,e=t._self._c;return e("p",[e("i",[t._v("locale")]),t._v(" option is available to set the localization information such as grouping and decimal symbols where default value is the browser locale. Locales are defined per "),e("a",{attrs:{href:"https://tools.ietf.org/html/rfc5646"}},[t._v("BCP Language Tag")]),t._v(". ")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" Currency formatting is specified by setting the "),e("i",[t._v("mode")]),t._v(" option to currency and "),e("i",[t._v("currency")]),t._v(" property. In addition "),e("i",[t._v("currencyDisplay")]),t._v(' option allows how the currency is displayed, valid values are "symbol" (default) or "code". ')])},function(){var t=this,e=t._self._c;return e("p",[t._v(" Custom texts e.g. units can be placed before or after the input section with the "),e("i",[t._v("prefix")]),t._v(" and "),e("i",[t._v("suffix")]),t._v(" properties. ")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" Spinner buttons is enabled using the "),e("i",[t._v("showButtons")]),t._v(" options and layout is defined with the "),e("i",[t._v("buttonLayout")]),t._v('. Default value is "stacked" whereas "horizontal" and "stacked" are alternatives. Note that even there are no buttons, up and down arrow keys can be used to spin the values with keyboard. ')])},function(){var t=this,e=t._self._c;return e("p",[t._v("Step factor is 1 by default and can be customized with "),e("i",[t._v("step")]),t._v(" option.")])},function(){var t=this,e=t._self._c;return e("p",[t._v("Value to be entered can be restricted by configuring the "),e("i",[t._v("min")]),t._v(" and "),e("i",[t._v("max")]),t._v(" options.")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v("Value of the component.")])]),e("tr",[e("td",[t._v("format")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Whether to format the value.")])]),e("tr",[e("td",[t._v("showButtons")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Displays spinner buttons.")])]),e("tr",[e("td",[t._v("buttonLayout")]),e("td",[t._v("string")]),e("td",[t._v("stacked")]),e("td",[t._v('Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".')])]),e("tr",[e("td",[t._v("incrementButtonClass")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Style class of the increment button.")])]),e("tr",[e("td",[t._v("decrementButtonClass")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Style class of the decrement button.")])]),e("tr",[e("td",[t._v("incrementButtonIcon")]),e("td",[t._v("string")]),e("td",[t._v("pi pi-angle-up")]),e("td",[t._v("Style class of the increment button.")])]),e("tr",[e("td",[t._v("decrementButtonIcon")]),e("td",[t._v("string")]),e("td",[t._v("pi pi-angle-down")]),e("td",[t._v("Style class of the decrement button.")])]),e("tr",[e("td",[t._v("locale")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Locale to be used in formatting.")])]),e("tr",[e("td",[t._v("localeMatcher")]),e("td",[t._v("string")]),e("td",[t._v("best fit")]),e("td",[t._v(' The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". See '),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation"}},[t._v("Locale Negotation")]),t._v(" for details. ")])]),e("tr",[e("td",[t._v("mode")]),e("td",[t._v("string")]),e("td",[t._v("decimal")]),e("td",[t._v('Defines the behavior of the component, valid values are "decimal" and "currency".')])]),e("tr",[e("td",[t._v("prefix")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Text to display before the value.")])]),e("tr",[e("td",[t._v("suffix")]),e("td",[t._v("string")]),e("td",[t._v("decimal")]),e("td",[t._v("Text to display after the value.")])]),e("tr",[e("td",[t._v("currency")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v(" The currency to use in currency formatting. Possible values are the "),e("a",{attrs:{href:"https://www.currency-iso.org/en/home/tables/table-a1.html"}},[t._v("ISO 4217 currency codes")]),t._v(', such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. There is no default value; if the style is "currency", the currency property must be provided. ')])]),e("tr",[e("td",[t._v("currencyDisplay")]),e("td",[t._v("string")]),e("td",[t._v("symbol")]),e("td",[t._v(' How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, "code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol". ')])]),e("tr",[e("td",[t._v("useGrouping")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.")])]),e("tr",[e("td",[t._v("minFractionDigits")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v(" The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the "),e("a",{attrs:{href:"https://www.currency-iso.org/en/home/tables/table-a1.html"}},[t._v("ISO 4217 currency code list")]),t._v(" (2 if the list doesn't provide that information). ")])]),e("tr",[e("td",[t._v("maxFractionDigits")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v(" The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the "),e("a",{attrs:{href:"https://www.currency-iso.org/en/home/tables/table-a1.html"}},[t._v("ISO 4217 currency code list")]),t._v(" (2 if the list doesn't provide that information). ")])]),e("tr",[e("td",[t._v("min")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v("Mininum boundary value.")])]),e("tr",[e("td",[t._v("max")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v("Maximum boundary value.")])]),e("tr",[e("td",[t._v("step")]),e("td",[t._v("number")]),e("td",[t._v("1")]),e("td",[t._v("Step factor to increment/decrement the value.")])]),e("tr",[e("td",[t._v("inputStyle")]),e("td",[t._v("any")]),e("td",[t._v("null")]),e("td",[t._v("Inline style of the input field.")])]),e("tr",[e("td",[t._v("inputClass")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Style class of the input field.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-inputnumber")]),e("td",[t._v("Container element")])]),e("tr",[e("td",[t._v("p-inputnumber-stacked")]),e("td",[t._v("Container element with stacked buttons.")])]),e("tr",[e("td",[t._v("p-inputnumber-horizontal")]),e("td",[t._v("Container element with horizontal buttons.")])]),e("tr",[e("td",[t._v("p-inputnumber-vertical")]),e("td",[t._v("Container element with vertical buttons.")])]),e("tr",[e("td",[t._v("p-inputnumber-input")]),e("td",[t._v("Input element")])]),e("tr",[e("td",[t._v("p-inputnumber-button")]),e("td",[t._v("Input element")])]),e("tr",[e("td",[t._v("p-inputnumber-button-up")]),e("td",[t._v("Increment button")])]),e("tr",[e("td",[t._v("p-inputnumber-button-down")]),e("td",[t._v("Decrement button")])]),e("tr",[e("td",[t._v("p-inputnumber-button-icon")]),e("td",[t._v("Button icon")])])])])])}],u=n(i,o,r,!1,null,null);const c=u.exports,d={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<h3>Numerals</h3>\n<div class="p-fluid grid formgrid">\n    <div class="field col-12 md:col-3">\n        <label for="integeronly">Integer Only</label>\n        <InputNumber id="integeronly" v-model="value1" />\n    </div>\n    <div class="field col-12 md:col-3">\n        <label for="withoutgrouping">Without Grouping</label>\n        <InputNumber id="withoutgrouping" v-model="value2" mode="decimal" :useGrouping="false" />\n    </div>\n    <div class="field col-12 md:col-3">\n        <label for="minmaxfraction">Min-Max Fraction Digits</label>\n        <InputNumber id="minmaxfraction" v-model="value3" mode="decimal" :minFractionDigits="2" :maxFractionDigits="5" />\n    </div>\n    <div class="field col-12 md:col-3">\n        <label for="minmax">Min-Max Boundaries</label>\n        <InputNumber id="minmax" v-model="value4" mode="decimal" :min="0" :max="100" />\n    </div>\n\n    <div class="field col-12 md:col-3">\n        <label for="locale-user">User Locale</label>\n        <InputNumber id="locale-user" v-model="value5" mode="decimal" :minFractionDigits="2" />\n    </div>\n    <div class="field col-12 md:col-3">\n        <label for="locale-us">United States Locale</label>\n        <InputNumber id="locale-us" v-model="value6" mode="decimal" locale="en-US" :minFractionDigits="2" />\n    </div>\n    <div class="field col-12 md:col-3">\n        <label for="locale-german">German Locale</label>\n        <InputNumber id="locale-german" v-model="value7" mode="decimal" locale="de-DE" :minFractionDigits="2"/>\n    </div>\n    <div class="field col-12 md:col-3">\n        <label for="locale-indian">Indian Locale</label>\n        <InputNumber id="locale-indian" v-model="value8" mode="decimal" locale="en-IN" :minFractionDigits="2" />\n    </div>\n</div>\n\n<h3>Currency</h3>\n<div class="grid p-fluid">\n    <div class="field col-12 md:col-3">\n        <label for="currency-us">United States</label>\n        <InputNumber id="currency-us" v-model="value9" mode="currency" currency="USD" locale="en-US" />\n    </div>\n    <div class="field col-12 md:col-3">\n        <label for="currency-germany">Germany</label>\n        <InputNumber id="currency-germany" v-model="value10" mode="currency" currency="EUR" locale="de-DE" />\n    </div>\n    <div class="field col-12 md:col-3">\n        <label for="currency-india">India</label>\n        <InputNumber id="currency-india" v-model="value11" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />\n    </div>\n    <div class="field col-12 md:col-3">\n        <label for="currency-japan">Japan</label>\n        <InputNumber id="currency-japan" v-model="value12" mode="currency" currency="JPY" locale="jp-JP" />\n    </div>\n</div>\n\n<h3>Prefix and Suffix</h3>\n<div class="grid p-fluid">\n    <div class="field col-12 md:col-3">\n        <label for="mile">Mile</label>\n        <InputNumber id="mile" v-model="value13" suffix=" mi" />\n    </div>\n    <div class="field col-12 md:col-3">\n        <label for="percent">Percent</label>\n        <InputNumber id="percent" v-model="value14" prefix="%" />\n    </div>\n    <div class="field col-12 md:col-3">\n        <label for="expiry">Expiry</label>\n        <InputNumber id="expiry" v-model="value15" prefix="Expires in " suffix=" days" />\n    </div>\n    <div class="field col-12 md:col-3">\n        <label for="temperature">Temperature</label>\n        <InputNumber id="temperature" v-model="value16" prefix="↑ " suffix="℃" :min="0" :max="40" />\n    </div>\n</div>\n\n<h5>Buttons</h5>\n<div class="grid p-fluid">\n    <div class="field col-12 md:col-3">\n        <label for="stacked">Stacked</label>\n        <InputNumber id="stacked" v-model="value17" showButtons mode="currency" currency="USD" />\n    </div>\n    <div class="field col-12 md:col-3">\n        <label for="horizontal">Horizontal with Step</label>\n        <InputNumber id="horizontal" v-model="value18" showButtons buttonLayout="horizontal" :step="0.25"\n            decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR" />\n    </div>\n    <div class="field col-12 md:col-3">\n        <label for="minmax-buttons">Min-Max Boundaries</label>\n        <InputNumber id="minmax-buttons" v-model="value20" mode="decimal" showButtons :min="0" :max="100" />\n    </div>\n</div>\n\n<div class="field col-12 md:col-3">\n    <label for="vertical" style="display: block">Vertical</label>\n    <InputNumber id="vertical" v-model="value19" mode="decimal" showButtons buttonLayout="vertical" style="width:4rem"\n        decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />\n</div>\n        '},sourceCode2:{basic:"\nexport default {\n    data() {\n        return {\n            value1: 42723,\n            value2: 58151,\n            value3: 2351.35,\n            value4: 50,\n            value5: 151351,\n            value6: 115744,\n            value7: 635524,\n            value8: 732762,\n            value9: 1500,\n            value10: 2500,\n            value11: 4250,\n            value12: 5002,\n            value13: 20,\n            value14: 50,\n            value15: 10,\n            value16: 20,\n            value17: 20,\n            value18: 10.50,\n            value19: 25,\n            value20: 50\n        }\n    }\n}\n        "}}}};var s=function(){var e=this,a=e._self._c;return a("div",[e._m(0),a("DocSectionCode",{attrs:{code:e.sourceCode1}}),a("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)},v=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/inputnumber",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])])}],m=n(d,s,v,!1,null,null);const p=m.exports,_={components:{Documentation:c,SourceCode:p}};var f=function(){var e=this,a=e._self._c;return a("div",{staticClass:"content-section documentation"},[a("TabView",[a("TabPanel",{attrs:{header:"Documentation"}},[a("Documentation")],1),a("TabPanel",{attrs:{header:"Source"}},[a("SourceCode")],1)],1)],1)},b=[],h=n(_,f,b,!1,null,null);const y=h.exports,g={data(){return{value1:42723,value2:58151,value3:2351.35,value4:50,value5:151351,value6:115744,value7:635524,value8:732762,value9:1500,value10:2500,value11:4250,value12:5002,value13:20,value14:50,value15:10,value16:20,value17:20,value18:10.5,value19:25,value20:50}},components:{InputNumberDoc:y}};var I=function(){var e=this,a=e._self._c;return a("div",[a("div",{staticClass:"content-section introduction"},[e._m(0),a("AppInputStyleSwitch")],1),a("div",{staticClass:"content-section implementation"},[a("div",{staticClass:"card"},[a("h5",[e._v("Numerals")]),a("div",{staticClass:"p-fluid grid formgrid"},[a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"integeronly"}},[e._v("Integer Only")]),a("InputNumber",{attrs:{id:"integeronly"},model:{value:e.value1,callback:function(l){e.value1=l},expression:"value1"}})],1),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"withoutgrouping"}},[e._v("Without Grouping")]),a("InputNumber",{attrs:{id:"withoutgrouping",mode:"decimal",useGrouping:!1},model:{value:e.value2,callback:function(l){e.value2=l},expression:"value2"}})],1),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"minmaxfraction"}},[e._v("Min-Max Fraction Digits")]),a("InputNumber",{attrs:{id:"minmaxfraction",mode:"decimal",minFractionDigits:2,maxFractionDigits:5},model:{value:e.value3,callback:function(l){e.value3=l},expression:"value3"}})],1),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"minmax"}},[e._v("Min-Max Boundaries")]),a("InputNumber",{attrs:{id:"minmax",mode:"decimal",min:0,max:100},model:{value:e.value4,callback:function(l){e.value4=l},expression:"value4"}})],1),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"locale-user"}},[e._v("User Locale")]),a("InputNumber",{attrs:{id:"locale-user",mode:"decimal",minFractionDigits:2},model:{value:e.value5,callback:function(l){e.value5=l},expression:"value5"}})],1),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"locale-us"}},[e._v("United States Locale")]),a("InputNumber",{attrs:{id:"locale-us",mode:"decimal",locale:"en-US",minFractionDigits:2},model:{value:e.value6,callback:function(l){e.value6=l},expression:"value6"}})],1),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"locale-german"}},[e._v("German Locale")]),a("InputNumber",{attrs:{id:"locale-german",mode:"decimal",locale:"de-DE",minFractionDigits:2},model:{value:e.value7,callback:function(l){e.value7=l},expression:"value7"}})],1),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"locale-indian"}},[e._v("Indian Locale")]),a("InputNumber",{attrs:{id:"locale-indian",mode:"decimal",locale:"en-IN",minFractionDigits:2},model:{value:e.value8,callback:function(l){e.value8=l},expression:"value8"}})],1)]),a("h5",[e._v("Currency")]),a("div",{staticClass:"grid p-fluid"},[a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"currency-us"}},[e._v("United States")]),a("InputNumber",{attrs:{id:"currency-us",mode:"currency",currency:"USD",locale:"en-US"},model:{value:e.value9,callback:function(l){e.value9=l},expression:"value9"}})],1),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"currency-germany"}},[e._v("Germany")]),a("InputNumber",{attrs:{id:"currency-germany",mode:"currency",currency:"EUR",locale:"de-DE"},model:{value:e.value10,callback:function(l){e.value10=l},expression:"value10"}})],1),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"currency-india"}},[e._v("India")]),a("InputNumber",{attrs:{id:"currency-india",mode:"currency",currency:"INR",currencyDisplay:"code",locale:"en-IN"},model:{value:e.value11,callback:function(l){e.value11=l},expression:"value11"}})],1),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"currency-japan"}},[e._v("Japan")]),a("InputNumber",{attrs:{id:"currency-japan",mode:"currency",currency:"JPY",locale:"jp-JP"},model:{value:e.value12,callback:function(l){e.value12=l},expression:"value12"}})],1)]),a("h5",[e._v("Prefix and Suffix")]),a("div",{staticClass:"grid p-fluid"},[a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"mile"}},[e._v("Mile")]),a("InputNumber",{attrs:{id:"mile",suffix:" mi"},model:{value:e.value13,callback:function(l){e.value13=l},expression:"value13"}})],1),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"percent"}},[e._v("Percent")]),a("InputNumber",{attrs:{id:"percent",prefix:"%"},model:{value:e.value14,callback:function(l){e.value14=l},expression:"value14"}})],1),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"expiry"}},[e._v("Expiry")]),a("InputNumber",{attrs:{id:"expiry",prefix:"Expires in ",suffix:" days"},model:{value:e.value15,callback:function(l){e.value15=l},expression:"value15"}})],1),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"temperature"}},[e._v("Temperature")]),a("InputNumber",{attrs:{id:"temperature",prefix:"↑ ",suffix:"℃",min:0,max:40},model:{value:e.value16,callback:function(l){e.value16=l},expression:"value16"}})],1)]),a("h5",[e._v("Buttons")]),a("div",{staticClass:"grid p-fluid"},[a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"stacked"}},[e._v("Stacked")]),a("InputNumber",{attrs:{id:"stacked",showButtons:"",mode:"currency",currency:"USD"},model:{value:e.value17,callback:function(l){e.value17=l},expression:"value17"}})],1),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"horizontal"}},[e._v("Horizontal with Step")]),a("InputNumber",{attrs:{id:"horizontal",showButtons:"",buttonLayout:"horizontal",step:.25,decrementButtonClass:"p-button-danger",incrementButtonClass:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus",mode:"currency",currency:"EUR"},model:{value:e.value18,callback:function(l){e.value18=l},expression:"value18"}})],1),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{attrs:{for:"minmax-buttons"}},[e._v("Min-Max Boundaries")]),a("InputNumber",{attrs:{id:"minmax-buttons",mode:"decimal",showButtons:"",min:0,max:100},model:{value:e.value20,callback:function(l){e.value20=l},expression:"value20"}})],1)]),a("div",{staticClass:"field col-12 md:col-3"},[a("label",{staticStyle:{display:"block"},attrs:{for:"vertical"}},[e._v("Vertical")]),a("InputNumber",{staticStyle:{width:"4rem"},attrs:{id:"vertical",mode:"decimal",showButtons:"",buttonLayout:"vertical",decrementButtonClass:"p-button-secondary",incrementButtonClass:"p-button-secondary",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"},model:{value:e.value19,callback:function(l){e.value19=l},expression:"value19"}})],1)])]),a("InputNumberDoc")],1)},x=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"feature-intro"},[e("h1",[t._v("InputNumber")]),e("p",[t._v("InputNumber is an input component to provide numerical input.")])])}],C=n(g,I,x,!1,null,null);const k=C.exports;export{k as default};
//# sourceMappingURL=index-D1rdAre8.js.map