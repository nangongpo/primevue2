import{n}from"./app.component-BAbvz7X_.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const o={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<h3>Addons</h3>\n<div class="grid p-fluid">\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n        <span class="p-inputgroup-addon">\n            <i class="pi pi-user"></i>\n        </span>\n            <InputText placeholder="Username" />\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <span class="p-inputgroup-addon">$</span>\n            <InputText placeholder="Price" />\n            <span class="p-inputgroup-addon">.00</span>\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <span class="p-inputgroup-addon">W</span>\n            <InputText placeholder="Website" />\n        </div>\n    </div>\n</div>\n\n<h3>Multiple Addons</h3>\n<div class="grid">\n    <div class="col-12">\n        <div class="p-inputgroup">\n        <span class="p-inputgroup-addon">\n            <i class="pi pi-clock"></i>\n        </span>\n            <span class="p-inputgroup-addon">\n            <i class="pi pi-star-fill"></i>\n        </span>\n            <InputText placeholder="Price" />\n            <span class="p-inputgroup-addon">$</span>\n            <span class="p-inputgroup-addon">.00</span>\n        </div>\n    </div>\n</div>\n\n<h3>Button Addons</h3>\n<div class="grid p-fluid">\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <Button label="Search"/>\n            <InputText placeholder="Keyword"/>\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <InputText placeholder="Keyword"/>\n            <Button icon="pi pi-search" class="p-button-warning"/>\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <Button icon="pi pi-check" class="p-button-success"/>\n            <InputText placeholder="Vote"/>\n            <Button icon="pi pi-times" class="p-button-danger"/>\n        </div>\n    </div>\n</div>\n\n<h3>Checkbox and RadioButton</h3>\n<div class="grid p-fluid">\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n        <span class="p-inputgroup-addon">\n            <Checkbox v-model="checked1" :binary="true" />\n        </span>\n            <InputText placeholder="Username"/>\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <InputText placeholder="Price"/>\n            <span class="p-inputgroup-addon">\n            <RadioButton name="rb1" value="rb1" v-model="radioValue1" />\n        </span>\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n        <span class="p-inputgroup-addon">\n            <Checkbox v-model="checked2" :binary="true" />\n        </span>\n            <InputText placeholder="Website"/>\n            <span class="p-inputgroup-addon">\n            <RadioButton name="rb2" value="rb2" v-model="radioValue2" />\n        </span>\n        </div>\n    </div>\n</div>\n        '},sourceCode2:{basic:"\nexport default {\n	data() {\n		return {\n			checked1: false,\n			checked2: false,\n			radioValue1: '',\n			radioValue2: ''\n		}\n	}\n}\n        "}}}};var c=function(){var s=this,t=s._self._c;return t("div",[s._m(0),t("DocSectionCode",{attrs:{code:s.sourceCode1}}),t("DocSectionCode",{attrs:{code:s.sourceCode2,importCode:""}})],1)},e=[function(){var a=this,s=a._self._c;return s("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/inputgroup",target:"_blank",rel:"noopener noreferrer"}},[s("span",[a._v("View on GitHub")])])}],p=n(o,c,e,!1,null,null);const d=p.exports,l={components:{SourceCode:d}};var r=function(){var s=this,t=s._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("SourceCode")],1)],1)],1)},u=[],v=n(l,r,u,!1,null,null);const _=v.exports,m={data(){return{checked1:!1,checked2:!1,radioValue1:"",radioValue2:""}},components:{InputGroupDoc:_}};var h=function(){var s=this,t=s._self._c;return t("div",[t("div",{staticClass:"content-section introduction"},[s._m(0),t("AppInputStyleSwitch")],1),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[s._v("Addons")]),t("div",{staticClass:"grid p-fluid"},[t("div",{staticClass:"col-12 md:col-4"},[t("div",{staticClass:"p-inputgroup"},[s._m(1),t("InputText",{attrs:{placeholder:"Username"}})],1)]),t("div",{staticClass:"col-12 md:col-4"},[t("div",{staticClass:"p-inputgroup"},[t("span",{staticClass:"p-inputgroup-addon"},[s._v("$")]),t("InputText",{attrs:{placeholder:"Price"}}),t("span",{staticClass:"p-inputgroup-addon"},[s._v(".00")])],1)]),t("div",{staticClass:"col-12 md:col-4"},[t("div",{staticClass:"p-inputgroup"},[t("span",{staticClass:"p-inputgroup-addon"},[s._v("W")]),t("InputText",{attrs:{placeholder:"Website"}})],1)])]),t("h5",[s._v("Multiple Addons")]),t("div",{staticClass:"grid"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"p-inputgroup"},[s._m(2),s._m(3),t("InputText",{attrs:{placeholder:"Price"}}),t("span",{staticClass:"p-inputgroup-addon"},[s._v("$")]),t("span",{staticClass:"p-inputgroup-addon"},[s._v(".00")])],1)])]),t("h5",[s._v("Button Addons")]),t("div",{staticClass:"grid p-fluid"},[t("div",{staticClass:"col-12 md:col-4"},[t("div",{staticClass:"p-inputgroup"},[t("Button",{attrs:{label:"Search"}}),t("InputText",{attrs:{placeholder:"Keyword"}})],1)]),t("div",{staticClass:"col-12 md:col-4"},[t("div",{staticClass:"p-inputgroup"},[t("InputText",{attrs:{placeholder:"Keyword"}}),t("Button",{staticClass:"p-button-warning",attrs:{icon:"pi pi-search"}})],1)]),t("div",{staticClass:"col-12 md:col-4"},[t("div",{staticClass:"p-inputgroup"},[t("Button",{staticClass:"p-button-success",attrs:{icon:"pi pi-check"}}),t("InputText",{attrs:{placeholder:"Vote"}}),t("Button",{staticClass:"p-button-danger",attrs:{icon:"pi pi-times"}})],1)])]),t("h5",[s._v("Checkbox and RadioButton")]),t("div",{staticClass:"grid p-fluid"},[t("div",{staticClass:"col-12 md:col-12"},[t("div",{staticClass:"p-inputgroup"},[t("span",{staticClass:"p-inputgroup-addon"},[t("Checkbox",{attrs:{binary:!0},model:{value:s.checked1,callback:function(i){s.checked1=i},expression:"checked1"}})],1),t("InputText",{attrs:{placeholder:"Username"}})],1)]),t("div",{staticClass:"col-12 md:col-12"},[t("div",{staticClass:"p-inputgroup"},[t("InputText",{attrs:{placeholder:"Price"}}),t("span",{staticClass:"p-inputgroup-addon"},[t("RadioButton",{attrs:{name:"rb1",value:"rb1"},model:{value:s.radioValue1,callback:function(i){s.radioValue1=i},expression:"radioValue1"}})],1)],1)]),t("div",{staticClass:"col-12 md:col-12"},[t("div",{staticClass:"p-inputgroup"},[t("span",{staticClass:"p-inputgroup-addon"},[t("Checkbox",{attrs:{binary:!0},model:{value:s.checked2,callback:function(i){s.checked2=i},expression:"checked2"}})],1),t("InputText",{attrs:{placeholder:"Website"}}),t("span",{staticClass:"p-inputgroup-addon"},[t("RadioButton",{attrs:{name:"rb2",value:"rb2"},model:{value:s.radioValue2,callback:function(i){s.radioValue2=i},expression:"radioValue2"}})],1)],1)])])])]),t("InputGroupDoc")],1)},C=[function(){var a=this,s=a._self._c;return s("div",{staticClass:"feature-intro"},[s("h1",[a._v("InputGroup")]),s("p",[a._v("Text, icon, buttons and other content can be grouped next to an input.")])])},function(){var a=this,s=a._self._c;return s("span",{staticClass:"p-inputgroup-addon"},[s("i",{staticClass:"pi pi-user"})])},function(){var a=this,s=a._self._c;return s("span",{staticClass:"p-inputgroup-addon"},[s("i",{staticClass:"pi pi-clock"})])},function(){var a=this,s=a._self._c;return s("span",{staticClass:"p-inputgroup-addon"},[s("i",{staticClass:"pi pi-star-fill"})])}],g=n(m,h,C,!1,null,null);const T=g.exports;export{T as default};
//# sourceMappingURL=index-DdXWiGF1.js.map
