import{n}from"./app.component-CxwrbeA3.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const i={name:"Documentation",data(){return{importCode:{basic:"\nimport InputText from 'primevue2/inputtext';\n        "},baseCode:{basic:'\n<InputText type="text" v-model="value" />\n        '},floatLabelCode:{basic:"\nexport default {\n    data() {\n        return {\n            home: {icon: 'pi pi-home', to: '/'},\n            items: [\n                {label: 'Computer'},\n                {label: 'Notebook'},\n                {label: 'Accessories'},\n                {label: 'Backpacks'},\n                {label: 'Item'}\n            ]\n        }\n    }\n}\n        "},iconsCode:{basic:'\n<span class="p-input-icon-left">\n    <i class="pi pi-search" />\n    <InputText type="text" v-model="value1" placeholder="Search" />\n</span>\n\n<span class="p-input-icon-right">\n    <InputText type="text" v-model="value2" />\n    <i class="pi pi-spin pi-spinner" />\n</span>\n\n<span class="p-input-icon-left p-input-icon-right">\n    <i class="pi pi-search" />\n    <InputText type="text" v-model="value3" />\n    <i class="pi pi-spin pi-spinner" />\n</span>\n        '},sizesCode:{basic:'\n<InputText type="text" class="p-inputtext-sm" placeholder="Small" />\n<InputText type="text" placeholder="Normal" />\n<InputText type="text" class="p-inputtext-lg"  placeholder="Large" />\n        '},sizesCode2:{basic:'\n<div class="p-inputtext-sm">\n    <InputText />\n    <InputNumber />\n    <InputMask />\n</div>\n        '},outlinedVsFilledCode:{basic:'\n<div class="p-input-filled">\n    <InputText type="text" />\n    <InputText type="text" />\n    <InputText type="text" />\n</div>\n        '}}}};var l=function(){var e=this,t=e._self._c;return t("div",[t("h5",[e._v("Import")]),t("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),t("h5",[e._v("Getting Started")]),t("p",[e._v("A model can be bound using the standard v-model directive.")]),t("DocSectionCode",{attrs:{code:e.baseCode}}),t("h5",[e._v("Float Label")]),e._m(0),t("DocSectionCode",{attrs:{code:e.floatLabelCode}}),t("h5",[e._v("Icons")]),e._m(1),t("DocSectionCode",{attrs:{code:e.iconsCode}}),t("h5",[e._v("Sizes")]),t("p",[e._v(" 2 more sizes are available in addition to a regular input, for a smaller input add "),t("i",[e._v("p-inputtext-sm")]),e._v(" and for a larger one, use "),t("i",[e._v("p-inputtext-lg")]),e._v(". Note that these classes are mainly be used to change the size of a particular field, for global scaling see the "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page. ")],1),t("DocSectionCode",{attrs:{code:e.sizesCode}}),t("p",[e._v(" Instead of repeating the scale classes for each input, sizing can also be applied to a group by adding the class to a container element so that descendant inputs share the same style easier. ")]),t("DocSectionCode",{attrs:{code:e.sizesCode2}}),t("h5",[e._v("Outlined vs Filled")]),e._m(2),t("DocSectionCode",{attrs:{code:e.outlinedVsFilledCode}}),t("h5",[e._v("Properties")]),t("p",[e._v("InputText passes any valid attribute to the underlying input element.")]),t("h5",[e._v("Events")]),t("p",[e._v("Any valid event such as focus, blur and input are passed to the underlying input element.")]),t("h5",[e._v("Styling")]),t("p",[e._v(" Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page. ")],1),e._m(3),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1)},r=[function(){var a=this,e=a._self._c;return e("p",[a._v(" A floating label is implemented by wrapping the input and the label inside a container having "),e("i",[a._v(".p-float-label")]),a._v(" style class. ")])},function(){var a=this,e=a._self._c;return e("p",[a._v(" An icon can be integrated within an input field by wrapping the input and the icon with an element having "),e("i",[a._v("p-input-icon-right")]),a._v(" and "),e("i",[a._v("p-input-icon-left")]),a._v(" classes depending on the icon location. ")])},function(){var a=this,e=a._self._c;return e("p",[a._v(" Input fields come in two styles, default is "),e("i",[a._v("outlined")]),a._v(" with borders around the field whereas "),e("i",[a._v("filled")]),a._v(" alternative adds a background color to the field. Applying "),e("i",[a._v("p-input-filled")]),a._v(" to an ancestor of an input enables the filled style. If you prefer to use filled inputs in the entire application, use a global container such as document body or the application element to apply the style class. ")])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[a._v("Name")]),e("th",[a._v("Element")])])]),e("tbody",[e("tr",[e("td",[a._v("p-inputtext")]),e("td",[a._v("Input element")])]),e("tr",[e("td",[a._v("p-inputtext-sm")]),e("td",[a._v("Smaller input element")])]),e("tr",[e("td",[a._v("p-inputtext-lg")]),e("td",[a._v("Larger input element")])]),e("tr",[e("td",[a._v("p-inputtext-filled")]),e("td",[a._v("Filled input style.")])])])])])}],o=n(i,l,r,!1,null,null);const p=o.exports,c={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<div class="card">\n    <h5>Basic</h5>\n    <InputText type="text" v-model="value1" />\n    <span :style="{marginLeft: \'.5em\'}">{{value1}}</span>\n\n    <h5>Floating Label</h5>\n    <span class="p-float-label">\n        <InputText id="username" type="text" v-model="value2" />\n        <label for="username">Username</label>\n    </span>\n\n    <h5>Left Icon</h5>\n    <span class="p-input-icon-left">\n        <i class="pi pi-search" />\n        <InputText type="text" v-model="value3" placeholder="Search" />\n    </span>\n\n    <h5>Right Icon</h5>\n    <span class="p-input-icon-right">\n        <i class="pi pi-spin pi-spinner" />\n        <InputText type="text" v-model="value4" />\n    </span>\n\n    <h5>Help Text</h5>\n    <div class="field">\n        <label for="username1">Username</label>\n        <InputText id="username1" type="username" aria-describedby="username1-help" />\n        <small id="username1-help">Enter your username to reset your password.</small>\n    </div>\n\n    <h5>Invalid</h5>\n    <div class="field">\n        <label for="username2">Username</label>\n        <InputText id="username2" type="username" aria-describedby="username2-help" class="p-invalid" />\n        <small id="username2-help" class="p-invalid">Username is not available.</small>\n    </div>\n\n    <h5>Disabled</h5>\n    <InputText type="text" v-model="value5" disabled />\n\n    <h5>Sizes</h5>\n    <div class="sizes">\n        <InputText type="text" class="p-inputtext-sm" placeholder="Small" />\n        <InputText type="text" placeholder="Normal" />\n        <InputText type="text" class="p-inputtext-lg"  placeholder="Large" />\n    </div>\n</div>\n        '},sourceCode2:{basic:"\nexport default {\n	data() {\n		return {\n            value1: '',\n            value2: '',\n            value3: '',\n            value4: '',\n            value5: 'PrimeVue'\n		}\n	}\n}\n        "}}}};var u=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("DocSectionCode",{attrs:{code:e.sourceCode1}}),t("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)},d=[function(){var a=this,e=a._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/inputtext",target:"_blank",rel:"noopener noreferrer"}},[e("span",[a._v("View on GitHub")])])}],v=n(c,u,d,!1,null,null);const m=v.exports,_={components:{Documentation:p,SourceCode:m}};var h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("Documentation")],1),t("TabPanel",{attrs:{header:"Source"}},[t("SourceCode")],1)],1)],1)},f=[],x=n(_,h,f,!1,null,null);const b=x.exports,y={data(){return{value1:"",value2:"",value3:"",value4:"",value5:"PrimeVue"}},components:{InputTextDoc:b}};var g=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"content-section introduction"},[e._m(0),t("AppInputStyleSwitch")],1),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Basic")]),t("InputText",{attrs:{type:"text"},model:{value:e.value1,callback:function(s){e.value1=s},expression:"value1"}}),t("span",{style:{marginLeft:".5em"}},[e._v(e._s(e.value1))]),t("h5",[e._v("Floating Label")]),t("span",{staticClass:"p-float-label"},[t("InputText",{attrs:{id:"username",type:"text"},model:{value:e.value2,callback:function(s){e.value2=s},expression:"value2"}}),t("label",{attrs:{for:"username"}},[e._v("Username")])],1),t("h5",[e._v("Left Icon")]),t("span",{staticClass:"p-input-icon-left"},[t("i",{staticClass:"pi pi-search"}),t("InputText",{attrs:{type:"text",placeholder:"Search"},model:{value:e.value3,callback:function(s){e.value3=s},expression:"value3"}})],1),t("h5",[e._v("Right Icon")]),t("span",{staticClass:"p-input-icon-right"},[t("i",{staticClass:"pi pi-spin pi-spinner"}),t("InputText",{attrs:{type:"text"},model:{value:e.value4,callback:function(s){e.value4=s},expression:"value4"}})],1),t("h5",[e._v("Help Text")]),t("div",{staticClass:"field"},[t("label",{attrs:{for:"username1"}},[e._v("Username")]),t("InputText",{attrs:{id:"username1",type:"username","aria-describedby":"username1-help"}}),t("small",{attrs:{id:"username1-help"}},[e._v("Enter your username to reset your password.")])],1),t("h5",[e._v("Invalid")]),t("div",{staticClass:"field"},[t("label",{attrs:{for:"username2"}},[e._v("Username")]),t("InputText",{staticClass:"p-invalid",attrs:{id:"username2",type:"username","aria-describedby":"username2-help"}}),t("small",{staticClass:"p-invalid",attrs:{id:"username2-help"}},[e._v("Username is not available.")])],1),t("h5",[e._v("Disabled")]),t("InputText",{attrs:{type:"text",disabled:""},model:{value:e.value5,callback:function(s){e.value5=s},expression:"value5"}}),t("h5",[e._v("Sizes")]),t("div",{staticClass:"sizes"},[t("InputText",{staticClass:"p-inputtext-sm",attrs:{type:"text",placeholder:"Small"}}),t("InputText",{attrs:{type:"text",placeholder:"Normal"}}),t("InputText",{staticClass:"p-inputtext-lg",attrs:{type:"text",placeholder:"Large"}})],1)],1)]),t("InputTextDoc")],1)},C=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"feature-intro"},[e("h1",[a._v("InputText")]),e("p",[a._v("InputText renders a text field to enter data.")])])}],I=n(y,g,C,!1,null,"1e5cc8f7");const z=I.exports;export{z as default};
//# sourceMappingURL=index-DUztKvu4.js.map
