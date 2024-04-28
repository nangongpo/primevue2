System.register(["./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(t,s){"use strict";var a;return{setters:[function(t){a=t.n},null,null,null],execute:function(){var s=a({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content-section documentation"},[s("TabView",[s("TabPanel",{attrs:{header:"Source"}},[s("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/inputgroup",target:"_blank",rel:"noopener noreferrer"}},[s("span",[t._v("View on GitHub")])]),s("CodeHighlight",[[t._v(' <h3>Addons</h3> <div class="grid p-fluid"> <div class="col-12 md:col-4"> <div class="p-inputgroup"> <span class="p-inputgroup-addon"> <i class="pi pi-user"></i> </span> <InputText placeholder="Username" /> </div> </div> <div class="col-12 md:col-4"> <div class="p-inputgroup"> <span class="p-inputgroup-addon">$</span> <InputText placeholder="Price" /> <span class="p-inputgroup-addon">.00</span> </div> </div> <div class="col-12 md:col-4"> <div class="p-inputgroup"> <span class="p-inputgroup-addon">W</span> <InputText placeholder="Website" /> </div> </div> </div> <h3>Multiple Addons</h3> <div class="grid"> <div class="col-12"> <div class="p-inputgroup"> <span class="p-inputgroup-addon"> <i class="pi pi-clock"></i> </span> <span class="p-inputgroup-addon"> <i class="pi pi-star-fill"></i> </span> <InputText placeholder="Price" /> <span class="p-inputgroup-addon">$</span> <span class="p-inputgroup-addon">.00</span> </div> </div> </div> <h3>Button Addons</h3> <div class="grid p-fluid"> <div class="col-12 md:col-4"> <div class="p-inputgroup"> <Button label="Search"/> <InputText placeholder="Keyword"/> </div> </div> <div class="col-12 md:col-4"> <div class="p-inputgroup"> <InputText placeholder="Keyword"/> <Button icon="pi pi-search" class="p-button-warning"/> </div> </div> <div class="col-12 md:col-4"> <div class="p-inputgroup"> <Button icon="pi pi-check" class="p-button-success"/> <InputText placeholder="Vote"/> <Button icon="pi pi-times" class="p-button-danger"/> </div> </div> </div> <h3>Checkbox and RadioButton</h3> <div class="grid p-fluid"> <div class="col-12 md:col-4"> <div class="p-inputgroup"> <span class="p-inputgroup-addon"> <Checkbox v-model="checked1" :binary="true" /> </span> <InputText placeholder="Username"/> </div> </div> <div class="col-12 md:col-4"> <div class="p-inputgroup"> <InputText placeholder="Price"/> <span class="p-inputgroup-addon"> <RadioButton name="rb1" value="rb1" v-model="radioValue1" /> </span> </div> </div> <div class="col-12 md:col-4"> <div class="p-inputgroup"> <span class="p-inputgroup-addon"> <Checkbox v-model="checked2" :binary="true" /> </span> <InputText placeholder="Website"/> <span class="p-inputgroup-addon"> <RadioButton name="rb2" value="rb2" v-model="radioValue2" /> </span> </div> </div> </div> ')]],2),s("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" export default { data() { return { checked1: false, checked2: false, radioValue1: '', radioValue2: '' } } } ")])],1)],1)],1)}),[],!1,null,null).exports;t("default",a({data:function(){return{checked1:!1,checked2:!1,radioValue1:"",radioValue2:""}},components:{InputGroupDoc:s}},(function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"content-section introduction"},[t._m(0),s("AppInputStyleSwitch")],1),s("div",{staticClass:"content-section implementation"},[s("div",{staticClass:"card"},[s("h5",[t._v("Addons")]),s("div",{staticClass:"grid p-fluid"},[s("div",{staticClass:"col-12 md:col-4"},[s("div",{staticClass:"p-inputgroup"},[t._m(1),s("InputText",{attrs:{placeholder:"Username"}})],1)]),s("div",{staticClass:"col-12 md:col-4"},[s("div",{staticClass:"p-inputgroup"},[s("span",{staticClass:"p-inputgroup-addon"},[t._v("$")]),s("InputText",{attrs:{placeholder:"Price"}}),s("span",{staticClass:"p-inputgroup-addon"},[t._v(".00")])],1)]),s("div",{staticClass:"col-12 md:col-4"},[s("div",{staticClass:"p-inputgroup"},[s("span",{staticClass:"p-inputgroup-addon"},[t._v("W")]),s("InputText",{attrs:{placeholder:"Website"}})],1)])]),s("h5",[t._v("Multiple Addons")]),s("div",{staticClass:"grid"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"p-inputgroup"},[t._m(2),t._m(3),s("InputText",{attrs:{placeholder:"Price"}}),s("span",{staticClass:"p-inputgroup-addon"},[t._v("$")]),s("span",{staticClass:"p-inputgroup-addon"},[t._v(".00")])],1)])]),s("h5",[t._v("Button Addons")]),s("div",{staticClass:"grid p-fluid"},[s("div",{staticClass:"col-12 md:col-4"},[s("div",{staticClass:"p-inputgroup"},[s("Button",{attrs:{label:"Search"}}),s("InputText",{attrs:{placeholder:"Keyword"}})],1)]),s("div",{staticClass:"col-12 md:col-4"},[s("div",{staticClass:"p-inputgroup"},[s("InputText",{attrs:{placeholder:"Keyword"}}),s("Button",{staticClass:"p-button-warning",attrs:{icon:"pi pi-search"}})],1)]),s("div",{staticClass:"col-12 md:col-4"},[s("div",{staticClass:"p-inputgroup"},[s("Button",{staticClass:"p-button-success",attrs:{icon:"pi pi-check"}}),s("InputText",{attrs:{placeholder:"Vote"}}),s("Button",{staticClass:"p-button-danger",attrs:{icon:"pi pi-times"}})],1)])]),s("h5",[t._v("Checkbox and RadioButton")]),s("div",{staticClass:"grid p-fluid"},[s("div",{staticClass:"col-12 md:col-12"},[s("div",{staticClass:"p-inputgroup"},[s("span",{staticClass:"p-inputgroup-addon"},[s("Checkbox",{attrs:{binary:!0},model:{value:t.checked1,callback:function(s){t.checked1=s},expression:"checked1"}})],1),s("InputText",{attrs:{placeholder:"Username"}})],1)]),s("div",{staticClass:"col-12 md:col-12"},[s("div",{staticClass:"p-inputgroup"},[s("InputText",{attrs:{placeholder:"Price"}}),s("span",{staticClass:"p-inputgroup-addon"},[s("RadioButton",{attrs:{name:"rb1",value:"rb1"},model:{value:t.radioValue1,callback:function(s){t.radioValue1=s},expression:"radioValue1"}})],1)],1)]),s("div",{staticClass:"col-12 md:col-12"},[s("div",{staticClass:"p-inputgroup"},[s("span",{staticClass:"p-inputgroup-addon"},[s("Checkbox",{attrs:{binary:!0},model:{value:t.checked2,callback:function(s){t.checked2=s},expression:"checked2"}})],1),s("InputText",{attrs:{placeholder:"Website"}}),s("span",{staticClass:"p-inputgroup-addon"},[s("RadioButton",{attrs:{name:"rb2",value:"rb2"},model:{value:t.radioValue2,callback:function(s){t.radioValue2=s},expression:"radioValue2"}})],1)],1)])])])]),s("InputGroupDoc")],1)}),[function(){var t=this,s=t._self._c;return s("div",{staticClass:"feature-intro"},[s("h1",[t._v("InputGroup")]),s("p",[t._v("Text, icon, buttons and other content can be grouped next to an input.")])])},function(){var t=this._self._c;return t("span",{staticClass:"p-inputgroup-addon"},[t("i",{staticClass:"pi pi-user"})])},function(){var t=this._self._c;return t("span",{staticClass:"p-inputgroup-addon"},[t("i",{staticClass:"pi pi-clock"})])},function(){var t=this._self._c;return t("span",{staticClass:"p-inputgroup-addon"},[t("i",{staticClass:"pi pi-star-fill"})])}],!1,null,null).exports)}}}));
//# sourceMappingURL=InputGroupDemo-legacy-DvZcFPah.js.map
