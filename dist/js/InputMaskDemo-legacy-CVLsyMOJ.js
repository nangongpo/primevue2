System.register(["./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(a,t){"use strict";var e;return{setters:[function(a){e=a.n},null,null,null],execute:function(){var t=document.createElement("style");t.textContent="",document.head.appendChild(t);var l=e({},(function(){var a=this,t=a._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[a._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[a._v(" import InputMask from 'primevue2/inputmask'; ")]),t("h5",[a._v("Getting Started")]),t("p",[a._v("A model can be bound using the standard v-model directive.")]),t("CodeHighlight",[a._v(' <InputMask v-model="value" mask="99-999999" /> ')]),t("h5",[a._v("Mask")]),t("p",[a._v("Mask format can be a combination of the the following built-in definitions.")]),t("ul",[t("li",[a._v(" a - Alpha character (A-Z,a-z) ")]),t("li",[a._v(" 9 - Numeric character (0-9) ")]),t("li",[a._v(" * - Alpha numberic character (A-Z,a-z,0-9) ")])]),t("CodeHighlight",[a._v(' <InputMask v-model="value" mask="a*-999-a999" /> ')]),t("h5",[a._v("SlotChar")]),t("p",[a._v("Underscore is the default placeholder for a mask and this can be customized using "),t("i",[a._v("slotChart")]),a._v(" option.")]),t("CodeHighlight",[a._v(' <InputMask v-model="value" mask="99/99/9999" slotChar="mm/dd/yyyy" /> ')]),t("h5",[a._v("Optional Values")]),t("p",[a._v("If the input does not complete the mask definition, it is cleared by default. Use "),t("i",[a._v("autoClear")]),a._v(" property to control this behavior. In addition, certain part of a mask can be made optional by using ? symbol where anything after the question mark becomes optional.")]),t("CodeHighlight",[a._v(' <InputMask v-model="value" mask="(999) 999-9999? x99999" /> ')]),t("h5",[a._v("Properties")]),t("p",[a._v("InputText passes any valid attribute to the underlying input element. In addition;")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[a._v("Name")]),t("th",[a._v("Type")]),t("th",[a._v("Default")]),t("th",[a._v("Description")])])]),t("tbody",[t("tr",[t("td",[a._v("mask")]),t("td",[a._v("string")]),t("td",[a._v("null")]),t("td",[a._v("Mask pattern.")])]),t("tr",[t("td",[a._v("slotChar")]),t("td",[a._v("string")]),t("td",[a._v("-")]),t("td",[a._v("Placeholder character in mask, default is underscore.")])]),t("tr",[t("td",[a._v("autoClear")]),t("td",[a._v("boolean")]),t("td",[a._v("true")]),t("td",[a._v("Clears the incomplete value on blur.")])]),t("tr",[t("td",[a._v("unmask")]),t("td",[a._v("boolean")]),t("td",[a._v("false")]),t("td",[a._v("Defines if model sets the raw unmasked value to bound value or the formatted mask value.")])]),t("tr",[t("td",[a._v("trueValue")]),t("td",[a._v("any")]),t("td",[a._v("null")]),t("td",[a._v("Value in checked state.")])]),t("tr",[t("td",[a._v("falseValue")]),t("td",[a._v("any")]),t("td",[a._v("null")]),t("td",[a._v("Value in unchecked state.")])])])])]),t("h5",[a._v("Events")]),t("p",[a._v("Any valid event such as focus, blur and input are passed to the underlying input element.")]),t("h5",[a._v("Styling")]),t("p",[a._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[a._v("theming")]),a._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[a._v("Name")]),t("th",[a._v("Element")])])]),t("tbody",[t("tr",[t("td",[a._v("p-inputmask p-inputtext")]),t("td",[a._v("Input element")])])])])]),t("h5",[a._v("Dependencies")]),t("p",[a._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/inputtext",target:"_blank",rel:"noopener noreferrer"}},[t("span",[a._v("View on GitHub")])]),t("CodeHighlight",[[a._v(' <div class="p-fluid formgrid grid"> <div class="field col-12 md:col-4"> <label for="basic">Basic</label> <InputMask mask="99-999999" v-model="val1" placeholder="99-999999" /> </div> <div class="field col-12 md:col-4"> <label for="ssn">SSN</label> <InputMask mask="999-99-9999" v-model="val2" placeholder="999-99-9999" /> </div> <div class="field col-12 md:col-4"> <label for="date">Date</label> <InputMask mask="99/99/9999" v-model="val3" placeholder="99/99/9999" slotChar="mm/dd/yyyy" /> </div> <div class="field col-12 md:col-4"> <label for="Phone">Phone</label> <InputMask mask="(999) 999-9999" v-model="val4" placeholder="(999) 999-9999" /> </div> <div class="field col-12 md:col-4"> <label for="phoneext">Phone Ext</label> <InputMask mask="(999) 999-9999? x99999" v-model="val5" placeholder="(999) 999-9999? x99999"/> </div> <div class="field col-12 md:col-4"> <label for="serial">Serial</label> <InputMask mask="a*-999-a999" v-model="val6" placeholder="a*-999-a999" /> </div> </div> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[a._v(" export default { data() { return { val1: null, val2: null, val3: null, val4: null, val5: null, val6: null } } } ")])],1)],1)],1)}),[],!1,null,null).exports;a("default",e({data:function(){return{val1:null,val2:null,val3:null,val4:null,val5:null,val6:null}},components:{InputMaskDoc:l}},(function(){var a=this,t=a._self._c;return t("div",[t("div",{staticClass:"content-section introduction"},[a._m(0),t("AppInputStyleSwitch")],1),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("div",{staticClass:"p-fluid formgrid grid"},[t("div",{staticClass:"field col-12 md:col-4"},[t("label",{attrs:{for:"basic"}},[a._v("Basic")]),t("InputMask",{attrs:{mask:"99-999999",placeholder:"99-999999"},model:{value:a.val1,callback:function(t){a.val1=t},expression:"val1"}})],1),t("div",{staticClass:"field col-12 md:col-4"},[t("label",{attrs:{for:"ssn"}},[a._v("SSN")]),t("InputMask",{attrs:{mask:"999-99-9999",placeholder:"999-99-9999"},model:{value:a.val2,callback:function(t){a.val2=t},expression:"val2"}})],1),t("div",{staticClass:"field col-12 md:col-4"},[t("label",{attrs:{for:"date"}},[a._v("Date")]),t("InputMask",{attrs:{mask:"99/99/9999",placeholder:"99/99/9999",slotChar:"mm/dd/yyyy"},model:{value:a.val3,callback:function(t){a.val3=t},expression:"val3"}})],1),t("div",{staticClass:"field col-12 md:col-4"},[t("label",{attrs:{for:"Phone"}},[a._v("Phone")]),t("InputMask",{attrs:{mask:"(999) 999-9999",placeholder:"(999) 999-9999"},model:{value:a.val4,callback:function(t){a.val4=t},expression:"val4"}})],1),t("div",{staticClass:"field col-12 md:col-4"},[t("label",{attrs:{for:"phoneext"}},[a._v("Phone Ext")]),t("InputMask",{attrs:{mask:"(999) 999-9999? x99999",placeholder:"(999) 999-9999? x99999"},model:{value:a.val5,callback:function(t){a.val5=t},expression:"val5"}})],1),t("div",{staticClass:"field col-12 md:col-4"},[t("label",{attrs:{for:"serial"}},[a._v("Serial")]),t("InputMask",{attrs:{mask:"a*-999-a999",placeholder:"a*-999-a999"},model:{value:a.val6,callback:function(t){a.val6=t},expression:"val6"}})],1)])])]),t("InputMaskDoc")],1)}),[function(){var a=this,t=a._self._c;return t("div",{staticClass:"feature-intro"},[t("h1",[a._v("InputMask")]),t("p",[a._v("InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.")])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=InputMaskDemo-legacy-CVLsyMOJ.js.map
