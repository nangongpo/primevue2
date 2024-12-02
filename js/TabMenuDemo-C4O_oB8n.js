import{n as a}from"./app.component-BAbvz7X_.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const o={name:"Documentation",data(){return{importCode:{basic:"\nimport TabMenu from 'primevue2/tabmenu';\n        "},baseCode:{basic:'\n<TabMenu :model="items" />\n<router-view />\n        '},baseCode2:{basic:"\nexport default {\n	data() {\n		return {\n			items: [\n                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/tabmenu'},\n                {label: 'Calendar', icon: 'pi pi-fw pi-calendar', to: '/tabmenu/calendar'},\n                {label: 'Edit', icon: 'pi pi-fw pi-pencil', to: '/tabmenu/edit'},\n                {label: 'Documentation', icon: 'pi pi-fw pi-file', to: '/tabmenu/documentation'},\n                {label: 'Settings', icon: 'pi pi-fw pi-cog', to: '/tabmenu/settings'}\n            ]\n		}\n	}\n}\n        "},activeCode:{basic:'\n<TabMenu :model="items" :activeIndex="activeIndex" />\n        '},activeCode2:{basic:'\n<TabMenu :model="items" :activeIndex.sync="activeIndex" />\n        '}}}};var c=function(){var e=this,t=e._self._c;return t("div",[t("h5",[e._v("Import")]),t("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),t("h5",[e._v("MenuModel")]),t("p",[e._v("TabMenu uses the common MenuModel API to define the items, visit "),t("router-link",{attrs:{to:"/menumodel"}},[e._v("MenuModel API")]),e._v(" for details.")],1),t("h5",[e._v("Getting Started")]),t("p",[e._v("TabMenu is integrated with Vue Router and requires a collection of menuitems as its model.")]),t("DocSectionCode",{attrs:{code:e.baseCode}}),t("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}}),t("h5",[e._v("Active")]),t("p",[e._v("Visibility of the content is specified with the activeIndex property that supports one or two-way binding.")]),t("DocSectionCode",{attrs:{code:e.activeCode}}),t("p",[e._v("Two-way binding requires v-model.")]),t("DocSectionCode",{attrs:{code:e.activeCode2}}),t("h5",[e._v("Properties")]),t("p",[e._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),e._m(0),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),e._m(1),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1)},s=[function(){var i=this,e=i._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[i._v("Name")]),e("th",[i._v("Type")]),e("th",[i._v("Default")]),e("th",[i._v("Description")])])]),e("tbody",[e("tr",[e("td",[i._v("model")]),e("td",[i._v("array")]),e("td",[i._v("null")]),e("td",[i._v("An array of menuitems.")])]),e("tr",[e("td",[i._v("activeIndex")]),e("td",[i._v("number")]),e("td",[i._v("0")]),e("td",[i._v("Active index of menuitem.")])])])])])},function(){var i=this,e=i._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[i._v("Name")]),e("th",[i._v("Element")])])]),e("tbody",[e("tr",[e("td",[i._v("p-tabmenu")]),e("td",[i._v("Container element.")])]),e("tr",[e("td",[i._v("p-tabmenu-nav")]),e("td",[i._v("List element.")])]),e("tr",[e("td",[i._v("p-tabmenuitem")]),e("td",[i._v("Menuitem element.")])]),e("tr",[e("td",[i._v("p-highlight")]),e("td",[i._v("Active menuitem element.")])]),e("tr",[e("td",[i._v("p-menuitem-icon")]),e("td",[i._v("Icon of a menuitem.")])]),e("tr",[e("td",[i._v("p-menuitem-text")]),e("td",[i._v("Text of a menuitem.")])])])])])}],r=a(o,c,s,!1,null,null);const l=r.exports,d={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<div class="card">\n    <h5>Default</h5>\n    <TabMenu :model="items" />\n    <router-view/>\n</div>\n\n<div class="card">\n    <h5>Programmatic</h5>\n    <div class="py-2">\n        <Button @click="active = 0" class="p-button-text" label="Activate 1st" />\n        <Button @click="active = 1" class="p-button-text mr-2" label="Activate 2nd" />\n        <Button @click="active = 2" class="p-button-text mr-2" label="Activate 3rd" />\n    </div>\n\n    <TabMenu :model="items2" :activeIndex.sync="active" />\n</div>\n        '},sourceCode2:{basic:"\nexport default {\n    data() {\n        return {\n            active: 3,\n            items: [\n                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/tabmenu'},\n                {label: 'Calendar', icon: 'pi pi-fw pi-calendar', to: '/tabmenu/calendar'},\n                {label: 'Edit', icon: 'pi pi-fw pi-pencil', to: '/tabmenu/edit'},\n                {label: 'Documentation', icon: 'pi pi-fw pi-file', to: '/tabmenu/documentation'},\n                {label: 'Settings', icon: 'pi pi-fw pi-cog', to: '/tabmenu/settings'}\n            ],\n            items2: [\n                {label: 'Home', icon: 'pi pi-fw pi-home'},\n                {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},\n                {label: 'Edit', icon: 'pi pi-fw pi-pencil'},\n                {label: 'Documentation', icon: 'pi pi-fw pi-file'},\n                {label: 'Settings', icon: 'pi pi-fw pi-cog'}\n            ]\n        }\n    }\n}\n        "}}}};var m=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("DocSectionCode",{attrs:{code:e.sourceCode1}}),t("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)},p=[function(){var i=this,e=i._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/tabmenu",target:"_blank",rel:"noopener noreferrer"}},[e("span",[i._v("View on GitHub")])])}],u=a(d,m,p,!1,null,null);const v=u.exports,_={components:{Documentation:l,SourceCode:v}};var b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("Documentation")],1),t("TabPanel",{attrs:{header:"Source"}},[t("SourceCode")],1)],1)],1)},f=[],h=a(_,b,f,!1,null,null);const C=h.exports,w={data(){return{active:3,items:[{label:"Home",icon:"pi pi-fw pi-home",to:"/tabmenu"},{label:"Calendar",icon:"pi pi-fw pi-calendar",to:"/tabmenu/calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil",to:"/tabmenu/edit"},{label:"Documentation",icon:"pi pi-fw pi-file",to:"/tabmenu/documentation"},{label:"Settings",icon:"pi pi-fw pi-cog",to:"/tabmenu/settings"}],items2:[{label:"Home",icon:"pi pi-fw pi-home"},{label:"Calendar",icon:"pi pi-fw pi-calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil"},{label:"Documentation",icon:"pi pi-fw pi-file"},{label:"Settings",icon:"pi pi-fw pi-cog"}]}},components:{TabMenuDoc:C}};var g=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Default")]),t("TabMenu",{attrs:{model:e.items}}),t("router-view")],1),t("div",{staticClass:"card"},[t("h5",[e._v("Programmatic")]),t("div",{staticClass:"py-2"},[t("Button",{staticClass:"p-button-text",attrs:{label:"Activate 1st"},on:{click:function(n){e.active=0}}}),t("Button",{staticClass:"p-button-text mr-2",attrs:{label:"Activate 2nd"},on:{click:function(n){e.active=1}}}),t("Button",{staticClass:"p-button-text mr-2",attrs:{label:"Activate 3rd"},on:{click:function(n){e.active=2}}})],1),t("TabMenu",{attrs:{model:e.items2,activeIndex:e.active},on:{"update:activeIndex":function(n){e.active=n},"update:active-index":function(n){e.active=n}}})],1)]),t("TabMenuDoc")],1)},x=[function(){var i=this,e=i._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[i._v("TabMenu")]),e("p",[i._v("TabMenu is a navigation component that displays items as tab headers. Example below uses nested routes with TabMenu.")])])])}],D=a(w,g,x,!1,null,"270a8ef5");const A=D.exports;export{A as default};
//# sourceMappingURL=TabMenuDemo-C4O_oB8n.js.map
