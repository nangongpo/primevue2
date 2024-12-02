System.register(["./app.component-legacy-cLUjg6K2.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(t,e){"use strict";var n;return{setters:[function(t){n=t.n},null,null,null,null],execute:function(){var e=document.createElement("style");e.textContent="[data-v-270a8ef5] .tabmenudemo-content{padding:2rem 1rem}\n/*$vite$:1*/",document.head.appendChild(e);var i=n({name:"Documentation",data:function(){return{importCode:{basic:"\nimport TabMenu from 'primevue2/tabmenu';\n        "},baseCode:{basic:'\n<TabMenu :model="items" />\n<router-view />\n        '},baseCode2:{basic:"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\titems: [\n                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/tabmenu'},\n                {label: 'Calendar', icon: 'pi pi-fw pi-calendar', to: '/tabmenu/calendar'},\n                {label: 'Edit', icon: 'pi pi-fw pi-pencil', to: '/tabmenu/edit'},\n                {label: 'Documentation', icon: 'pi pi-fw pi-file', to: '/tabmenu/documentation'},\n                {label: 'Settings', icon: 'pi pi-fw pi-cog', to: '/tabmenu/settings'}\n            ]\n\t\t}\n\t}\n}\n        "},activeCode:{basic:'\n<TabMenu :model="items" :activeIndex="activeIndex" />\n        '},activeCode2:{basic:'\n<TabMenu :model="items" :activeIndex.sync="activeIndex" />\n        '}}}},(function(){var t=this,e=t._self._c;return e("div",[e("h5",[t._v("Import")]),e("DocSectionCode",{attrs:{code:t.importCode,importCode:""}}),e("h5",[t._v("MenuModel")]),e("p",[t._v("TabMenu uses the common MenuModel API to define the items, visit "),e("router-link",{attrs:{to:"/menumodel"}},[t._v("MenuModel API")]),t._v(" for details.")],1),e("h5",[t._v("Getting Started")]),e("p",[t._v("TabMenu is integrated with Vue Router and requires a collection of menuitems as its model.")]),e("DocSectionCode",{attrs:{code:t.baseCode}}),e("DocSectionCode",{attrs:{code:t.baseCode2,importCode:""}}),e("h5",[t._v("Active")]),e("p",[t._v("Visibility of the content is specified with the activeIndex property that supports one or two-way binding.")]),e("DocSectionCode",{attrs:{code:t.activeCode}}),e("p",[t._v("Two-way binding requires v-model.")]),e("DocSectionCode",{attrs:{code:t.activeCode2}}),e("h5",[t._v("Properties")]),e("p",[t._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),t._m(0),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),t._m(1),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("model")]),e("td",[t._v("array")]),e("td",[t._v("null")]),e("td",[t._v("An array of menuitems.")])]),e("tr",[e("td",[t._v("activeIndex")]),e("td",[t._v("number")]),e("td",[t._v("0")]),e("td",[t._v("Active index of menuitem.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-tabmenu")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-tabmenu-nav")]),e("td",[t._v("List element.")])]),e("tr",[e("td",[t._v("p-tabmenuitem")]),e("td",[t._v("Menuitem element.")])]),e("tr",[e("td",[t._v("p-highlight")]),e("td",[t._v("Active menuitem element.")])]),e("tr",[e("td",[t._v("p-menuitem-icon")]),e("td",[t._v("Icon of a menuitem.")])]),e("tr",[e("td",[t._v("p-menuitem-text")]),e("td",[t._v("Text of a menuitem.")])])])])])}],!1,null,null).exports,a=n({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<div class="card">\n    <h5>Default</h5>\n    <TabMenu :model="items" />\n    <router-view/>\n</div>\n\n<div class="card">\n    <h5>Programmatic</h5>\n    <div class="py-2">\n        <Button @click="active = 0" class="p-button-text" label="Activate 1st" />\n        <Button @click="active = 1" class="p-button-text mr-2" label="Activate 2nd" />\n        <Button @click="active = 2" class="p-button-text mr-2" label="Activate 3rd" />\n    </div>\n\n    <TabMenu :model="items2" :activeIndex.sync="active" />\n</div>\n        '},sourceCode2:{basic:"\nexport default {\n    data() {\n        return {\n            active: 3,\n            items: [\n                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/tabmenu'},\n                {label: 'Calendar', icon: 'pi pi-fw pi-calendar', to: '/tabmenu/calendar'},\n                {label: 'Edit', icon: 'pi pi-fw pi-pencil', to: '/tabmenu/edit'},\n                {label: 'Documentation', icon: 'pi pi-fw pi-file', to: '/tabmenu/documentation'},\n                {label: 'Settings', icon: 'pi pi-fw pi-cog', to: '/tabmenu/settings'}\n            ],\n            items2: [\n                {label: 'Home', icon: 'pi pi-fw pi-home'},\n                {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},\n                {label: 'Edit', icon: 'pi pi-fw pi-pencil'},\n                {label: 'Documentation', icon: 'pi pi-fw pi-file'},\n                {label: 'Settings', icon: 'pi pi-fw pi-cog'}\n            ]\n        }\n    }\n}\n        "}}}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("DocSectionCode",{attrs:{code:t.sourceCode1}}),e("DocSectionCode",{attrs:{code:t.sourceCode2,importCode:""}})],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/tabmenu",target:"_blank",rel:"noopener noreferrer"}},[t("span",[this._v("View on GitHub")])])}],!1,null,null).exports,o=n({components:{Documentation:i,SourceCode:a}},(function(){var t=this._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("Documentation")],1),t("TabPanel",{attrs:{header:"Source"}},[t("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;t("default",n({data:function(){return{active:3,items:[{label:"Home",icon:"pi pi-fw pi-home",to:"/tabmenu"},{label:"Calendar",icon:"pi pi-fw pi-calendar",to:"/tabmenu/calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil",to:"/tabmenu/edit"},{label:"Documentation",icon:"pi pi-fw pi-file",to:"/tabmenu/documentation"},{label:"Settings",icon:"pi pi-fw pi-cog",to:"/tabmenu/settings"}],items2:[{label:"Home",icon:"pi pi-fw pi-home"},{label:"Calendar",icon:"pi pi-fw pi-calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil"},{label:"Documentation",icon:"pi pi-fw pi-file"},{label:"Settings",icon:"pi pi-fw pi-cog"}]}},components:{TabMenuDoc:o}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Default")]),e("TabMenu",{attrs:{model:t.items}}),e("router-view")],1),e("div",{staticClass:"card"},[e("h5",[t._v("Programmatic")]),e("div",{staticClass:"py-2"},[e("Button",{staticClass:"p-button-text",attrs:{label:"Activate 1st"},on:{click:function(e){t.active=0}}}),e("Button",{staticClass:"p-button-text mr-2",attrs:{label:"Activate 2nd"},on:{click:function(e){t.active=1}}}),e("Button",{staticClass:"p-button-text mr-2",attrs:{label:"Activate 3rd"},on:{click:function(e){t.active=2}}})],1),e("TabMenu",{attrs:{model:t.items2,activeIndex:t.active},on:{"update:activeIndex":function(e){t.active=e},"update:active-index":function(e){t.active=e}}})],1)]),e("TabMenuDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("TabMenu")]),e("p",[t._v("TabMenu is a navigation component that displays items as tab headers. Example below uses nested routes with TabMenu.")])])])}],!1,null,"270a8ef5").exports)}}}));
//# sourceMappingURL=TabMenuDemo-legacy-DFoq2r-3.js.map
