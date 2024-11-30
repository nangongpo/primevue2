System.register(["./app.component-legacy-7lS-4wLG.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(n,t){"use strict";var s;return{setters:[function(n){s=n.n},null,null,null,null],execute:function(){var t=s({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<h3>Addons</h3>\n<div class="grid p-fluid">\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n        <span class="p-inputgroup-addon">\n            <i class="pi pi-user"></i>\n        </span>\n            <InputText placeholder="Username" />\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <span class="p-inputgroup-addon">$</span>\n            <InputText placeholder="Price" />\n            <span class="p-inputgroup-addon">.00</span>\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <span class="p-inputgroup-addon">W</span>\n            <InputText placeholder="Website" />\n        </div>\n    </div>\n</div>\n\n<h3>Multiple Addons</h3>\n<div class="grid">\n    <div class="col-12">\n        <div class="p-inputgroup">\n        <span class="p-inputgroup-addon">\n            <i class="pi pi-clock"></i>\n        </span>\n            <span class="p-inputgroup-addon">\n            <i class="pi pi-star-fill"></i>\n        </span>\n            <InputText placeholder="Price" />\n            <span class="p-inputgroup-addon">$</span>\n            <span class="p-inputgroup-addon">.00</span>\n        </div>\n    </div>\n</div>\n\n<h3>Button Addons</h3>\n<div class="grid p-fluid">\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <Button label="Search"/>\n            <InputText placeholder="Keyword"/>\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <InputText placeholder="Keyword"/>\n            <Button icon="pi pi-search" class="p-button-warning"/>\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <Button icon="pi pi-check" class="p-button-success"/>\n            <InputText placeholder="Vote"/>\n            <Button icon="pi pi-times" class="p-button-danger"/>\n        </div>\n    </div>\n</div>\n\n<h3>Checkbox and RadioButton</h3>\n<div class="grid p-fluid">\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n        <span class="p-inputgroup-addon">\n            <Checkbox v-model="checked1" :binary="true" />\n        </span>\n            <InputText placeholder="Username"/>\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <InputText placeholder="Price"/>\n            <span class="p-inputgroup-addon">\n            <RadioButton name="rb1" value="rb1" v-model="radioValue1" />\n        </span>\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n        <span class="p-inputgroup-addon">\n            <Checkbox v-model="checked2" :binary="true" />\n        </span>\n            <InputText placeholder="Website"/>\n            <span class="p-inputgroup-addon">\n            <RadioButton name="rb2" value="rb2" v-model="radioValue2" />\n        </span>\n        </div>\n    </div>\n</div>\n        '},sourceCode2:{basic:"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tchecked1: false,\n\t\t\tchecked2: false,\n\t\t\tradioValue1: '',\n\t\t\tradioValue2: ''\n\t\t}\n\t}\n}\n        "}}}},(function(){var n=this,t=n._self._c;return t("div",[n._m(0),t("DocSectionCode",{attrs:{code:n.sourceCode1}}),t("DocSectionCode",{attrs:{code:n.sourceCode2,importCode:""}})],1)}),[function(){var n=this._self._c;return n("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/inputgroup",target:"_blank",rel:"noopener noreferrer"}},[n("span",[this._v("View on GitHub")])])}],!1,null,null).exports,a=s({components:{SourceCode:t}},(function(){var n=this._self._c;return n("div",{staticClass:"content-section documentation"},[n("TabView",[n("TabPanel",{attrs:{header:"Source"}},[n("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;n("default",s({data:function(){return{checked1:!1,checked2:!1,radioValue1:"",radioValue2:""}},components:{InputGroupDoc:a}},(function(){var n=this,t=n._self._c;return t("div",[t("div",{staticClass:"content-section introduction"},[n._m(0),t("AppInputStyleSwitch")],1),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[n._v("Addons")]),t("div",{staticClass:"grid p-fluid"},[t("div",{staticClass:"col-12 md:col-4"},[t("div",{staticClass:"p-inputgroup"},[n._m(1),t("InputText",{attrs:{placeholder:"Username"}})],1)]),t("div",{staticClass:"col-12 md:col-4"},[t("div",{staticClass:"p-inputgroup"},[t("span",{staticClass:"p-inputgroup-addon"},[n._v("$")]),t("InputText",{attrs:{placeholder:"Price"}}),t("span",{staticClass:"p-inputgroup-addon"},[n._v(".00")])],1)]),t("div",{staticClass:"col-12 md:col-4"},[t("div",{staticClass:"p-inputgroup"},[t("span",{staticClass:"p-inputgroup-addon"},[n._v("W")]),t("InputText",{attrs:{placeholder:"Website"}})],1)])]),t("h5",[n._v("Multiple Addons")]),t("div",{staticClass:"grid"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"p-inputgroup"},[n._m(2),n._m(3),t("InputText",{attrs:{placeholder:"Price"}}),t("span",{staticClass:"p-inputgroup-addon"},[n._v("$")]),t("span",{staticClass:"p-inputgroup-addon"},[n._v(".00")])],1)])]),t("h5",[n._v("Button Addons")]),t("div",{staticClass:"grid p-fluid"},[t("div",{staticClass:"col-12 md:col-4"},[t("div",{staticClass:"p-inputgroup"},[t("Button",{attrs:{label:"Search"}}),t("InputText",{attrs:{placeholder:"Keyword"}})],1)]),t("div",{staticClass:"col-12 md:col-4"},[t("div",{staticClass:"p-inputgroup"},[t("InputText",{attrs:{placeholder:"Keyword"}}),t("Button",{staticClass:"p-button-warning",attrs:{icon:"pi pi-search"}})],1)]),t("div",{staticClass:"col-12 md:col-4"},[t("div",{staticClass:"p-inputgroup"},[t("Button",{staticClass:"p-button-success",attrs:{icon:"pi pi-check"}}),t("InputText",{attrs:{placeholder:"Vote"}}),t("Button",{staticClass:"p-button-danger",attrs:{icon:"pi pi-times"}})],1)])]),t("h5",[n._v("Checkbox and RadioButton")]),t("div",{staticClass:"grid p-fluid"},[t("div",{staticClass:"col-12 md:col-12"},[t("div",{staticClass:"p-inputgroup"},[t("span",{staticClass:"p-inputgroup-addon"},[t("Checkbox",{attrs:{binary:!0},model:{value:n.checked1,callback:function(t){n.checked1=t},expression:"checked1"}})],1),t("InputText",{attrs:{placeholder:"Username"}})],1)]),t("div",{staticClass:"col-12 md:col-12"},[t("div",{staticClass:"p-inputgroup"},[t("InputText",{attrs:{placeholder:"Price"}}),t("span",{staticClass:"p-inputgroup-addon"},[t("RadioButton",{attrs:{name:"rb1",value:"rb1"},model:{value:n.radioValue1,callback:function(t){n.radioValue1=t},expression:"radioValue1"}})],1)],1)]),t("div",{staticClass:"col-12 md:col-12"},[t("div",{staticClass:"p-inputgroup"},[t("span",{staticClass:"p-inputgroup-addon"},[t("Checkbox",{attrs:{binary:!0},model:{value:n.checked2,callback:function(t){n.checked2=t},expression:"checked2"}})],1),t("InputText",{attrs:{placeholder:"Website"}}),t("span",{staticClass:"p-inputgroup-addon"},[t("RadioButton",{attrs:{name:"rb2",value:"rb2"},model:{value:n.radioValue2,callback:function(t){n.radioValue2=t},expression:"radioValue2"}})],1)],1)])])])]),t("InputGroupDoc")],1)}),[function(){var n=this,t=n._self._c;return t("div",{staticClass:"feature-intro"},[t("h1",[n._v("InputGroup")]),t("p",[n._v("Text, icon, buttons and other content can be grouped next to an input.")])])},function(){var n=this._self._c;return n("span",{staticClass:"p-inputgroup-addon"},[n("i",{staticClass:"pi pi-user"})])},function(){var n=this._self._c;return n("span",{staticClass:"p-inputgroup-addon"},[n("i",{staticClass:"pi pi-clock"})])},function(){var n=this._self._c;return n("span",{staticClass:"p-inputgroup-addon"},[n("i",{staticClass:"pi pi-star-fill"})])}],!1,null,null).exports)}}}));
//# sourceMappingURL=index-legacy-CjBY7Bsu.js.map
