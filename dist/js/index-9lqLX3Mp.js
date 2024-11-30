import{n as s}from"./app.component-CxwrbeA3.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const i={name:"Documentation",data(){return{importCode:{basic:"\nimport Badge from 'primevue2/badge';\n        "},baseCode:{basic:'\n<Badge value="2"></Badge>\n        '},directiveCode:{basic:"\nimport BadgeDirective from 'primevue2/badgedirective';\n        "},directiveCode2:{basic:'\n<i class="pi pi-bell" v-badge="2"></i>\n        '},severitiesCode:{basic:'\n<Badge value="2" severity="success"></Badge>\n\n<i class="pi pi-bell" v-badge.success="2"></i>\n        '},buttonBadgesCode:{basic:'\n<Button type="button" label="Emails" badge="8" />\n<Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />\n        '},sizesCode:{basic:'\n<Badge value="2"></Badge>\n<Badge value="4" size="large" severity="warning"></Badge>\n<Badge value="6" size="xlarge" severity="success"></Badge>\n        '},sizesCode2:{basic:'\n<h1>Heading 1 <Badge value="New"></Badge></h1>\n<h2>Heading 2 <Badge value="New"></Badge></h2>\n        '}}}};var r=function(){var e=this,a=e._self._c;return a("div",[a("h5",[e._v("Getting Started")]),a("p",[e._v("Badge can either be used as a standalone component or as a directive.")]),a("h6",[e._v("Component")]),a("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),e._m(0),a("DocSectionCode",{attrs:{code:e.baseCode}}),a("h6",[e._v("Directive")]),a("DocSectionCode",{attrs:{code:e.directiveCode,importCode:""}}),a("p",[e._v(" When used as a directive, badge needs to be configured at the application with a name of your choice. ")]),a("DocSectionCode",{attrs:{code:e.directiveCode2,importCode:""}}),a("h5",[e._v("Severities")]),e._m(1),e._m(2),a("DocSectionCode",{attrs:{code:e.severitiesCode}}),a("h5",[e._v("Button Badges")]),e._m(3),a("DocSectionCode",{attrs:{code:e.buttonBadgesCode}}),a("h5",[e._v("Sizes")]),e._m(4),a("DocSectionCode",{attrs:{code:e.sizesCode}}),a("p",[e._v(" In addition, when placed inside another element, badge sizes can also derive their size from their parent. ")]),a("DocSectionCode",{attrs:{code:e.sizesCode2}}),a("h5",[e._v("Properties")]),a("p",[e._v(" Any property as style and class are passed to the main container element. Following are the additional properties to configure the component. ")]),e._m(5),a("h5",[e._v("Styling")]),a("p",[e._v(" Following is the list of structural style classes, for theming classes visit "),a("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page. ")],1),e._m(6),a("h5",[e._v("Dependencies")]),a("p",[e._v("None.")])],1)},n=[function(){var t=this,e=t._self._c;return e("p",[t._v("Content of the badge is specified using the "),e("i",[t._v("value")]),t._v(" property.")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" Different color options are available as severity levels. When used as a component use the "),e("i",[t._v("severity")]),t._v(" property to apply a severity and use a "),e("i",[t._v("modifier")]),t._v(" as the severity value in directive mode. ")])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("success")]),e("li",[t._v("info")]),e("li",[t._v("warning")]),e("li",[t._v("danger")])])},function(){var t=this,e=t._self._c;return e("p",[t._v(" Buttons provide integrated badge support with the "),e("i",[t._v("badge")]),t._v(" and "),e("i",[t._v("badgeClass")]),t._v(" properties. ")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" Badge sizes are adjusted with the "),e("i",[t._v("size")]),t._v(' property that accepts "large" and "xlarge" as the possible alternatives to the default size. Currently sizes only apply to component mode. ')])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("any")]),e("td",[t._v("null")]),e("td",[t._v("Value to display inside the badge.")])]),e("tr",[e("td",[t._v("severity")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Severity type of the badge.")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v('Size of the badge, valid options are "large" and "xlarge".')])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-badge")]),e("td",[t._v("Badge element")])]),e("tr",[e("td",[t._v("p-overlay-badge")]),e("td",[t._v("Wrapper of a badge and its target.")])]),e("tr",[e("td",[t._v("p-badge-dot")]),e("td",[t._v("Badge element with no value.")])]),e("tr",[e("td",[t._v("p-badge-success")]),e("td",[t._v("Badge element with success severity.")])]),e("tr",[e("td",[t._v("p-badge-info")]),e("td",[t._v("Badge element with info severity.")])]),e("tr",[e("td",[t._v("p-badge-warning")]),e("td",[t._v("Badge element with warning severity.")])]),e("tr",[e("td",[t._v("p-badge-danger")]),e("td",[t._v("Badge element with danger severity.")])]),e("tr",[e("td",[t._v("p-badge-lg")]),e("td",[t._v("Large badge element")])]),e("tr",[e("td",[t._v("p-badge-xl")]),e("td",[t._v("Extra large badge element")])])])])])}],d=s(i,r,n,!1,null,null);const o=d.exports,c={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<h5>Numbers</h5>\n<Badge value="2" class="mr-2"></Badge>\n<Badge value="8" severity="success" class="mr-2"></Badge>\n<Badge value="4" severity="info" class="mr-2"></Badge>\n<Badge value="12" severity="warning" class="mr-2"></Badge>\n<Badge value="3" severity="danger"></Badge>\n\n<h5 class="mb-4">Positioned Badge</h5>\n<i class="pi pi-bell mr-4 p-text-secondary" style="font-size: 2rem" v-badge="2"></i>\n<i class="pi pi-calendar mr-4 p-text-secondary" style="font-size: 2rem" v-badge.danger="\'10+\'"></i>\n<i class="pi pi-envelope p-text-secondary" style="font-size: 2rem" v-badge.danger></i>\n\n<h5>Button Badge</h5>\n<Button type="button" label="Emails" badge="8" class="mr-2" />\n<Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />\n\n<h5>Sizes</h5>\n<Badge value="2" class="mr-2"></Badge>\n<Badge value="4" class="mr-2" size="large" severity="warning"></Badge>\n<Badge value="6" size="xlarge" severity="success"></Badge>\n        '}}}};var l=function(){var e=this,a=e._self._c;return a("div",[e._m(0),a("DocSectionCode",{attrs:{code:e.sourceCode1}})],1)},v=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/avatar",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])])}],_=s(c,l,v,!1,null,null);const g=_.exports,u={components:{Documentation:o,SourceCode:g}};var p=function(){var e=this,a=e._self._c;return a("div",{staticClass:"content-section documentation"},[a("TabView",[a("TabPanel",{attrs:{header:"Documentation"}},[a("Documentation")],1),a("TabPanel",{attrs:{header:"Source"}},[a("SourceCode")],1)],1)],1)},m=[],b=s(u,p,m,!1,null,null);const h=b.exports,f={data(){return{}},components:{BadgeDoc:h}};var B=function(){var e=this,a=e._self._c;return a("div",[e._m(0),a("div",{staticClass:"content-section implementation"},[a("div",{staticClass:"card"},[a("h5",[e._v("Numbers")]),a("Badge",{staticClass:"mr-2",attrs:{value:"2"}}),a("Badge",{staticClass:"mr-2",attrs:{value:"8",severity:"success"}}),a("Badge",{staticClass:"mr-2",attrs:{value:"4",severity:"info"}}),a("Badge",{staticClass:"mr-2",attrs:{value:"12",severity:"warning"}}),a("Badge",{attrs:{value:"3",severity:"danger"}}),a("h5",{staticClass:"mb-4"},[e._v("Positioned Badge")]),a("i",{directives:[{name:"badge",rawName:"v-badge",value:2,expression:"2"}],staticClass:"pi pi-bell mr-4 p-text-secondary",staticStyle:{"font-size":"2rem"}}),a("i",{directives:[{name:"badge",rawName:"v-badge.danger",value:"10+",expression:"'10+'",modifiers:{danger:!0}}],staticClass:"pi pi-calendar mr-4 p-text-secondary",staticStyle:{"font-size":"2rem"}}),a("i",{directives:[{name:"badge",rawName:"v-badge.danger",modifiers:{danger:!0}}],staticClass:"pi pi-envelope p-text-secondary",staticStyle:{"font-size":"2rem"}}),a("h5",[e._v("Button Badge")]),a("Button",{staticClass:"mr-2",attrs:{type:"button",label:"Emails",badge:"8",badgeClass:"p-badge-success"}}),a("Button",{staticClass:"p-button-warning",attrs:{type:"button",label:"Messages",icon:"pi pi-users",badge:"8",badgeClass:"p-badge-danger"}}),a("h5",[e._v("Sizes")]),a("Badge",{staticClass:"mr-2",attrs:{value:"2"}}),a("Badge",{staticClass:"mr-2",attrs:{value:"4",size:"large",severity:"warning"}}),a("Badge",{attrs:{value:"6",size:"xlarge",severity:"success"}})],1)]),a("BadgeDoc")],1)},C=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("Badge")]),e("p",[t._v("Badge is a small status indicator for another element.")])])])}],y=s(f,B,C,!1,null,null);const $=y.exports;export{$ as default};
//# sourceMappingURL=index-9lqLX3Mp.js.map
