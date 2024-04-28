System.register(["./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(i,e){"use strict";var t;return{setters:[function(i){t=i.n},null,null,null],execute:function(){var e=document.createElement("style");e.textContent=".p-panelmenu[data-v-59dc5722]{width:22rem}\n",document.head.appendChild(e);var l=t({},(function(){var i=this,e=i._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[i._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[i._v(" import PanelMenu from 'primevue2/panelmenu'; ")]),e("h5",[i._v("MenuModel")]),e("p",[i._v("PanelMenu uses the common MenuModel API to define the items, visit "),e("router-link",{attrs:{to:"/menumodel"}},[i._v("MenuModel API")]),i._v(" for details.")],1),e("h5",[i._v("Getting Started")]),e("p",[i._v("PanelMenu requires a collection of menuitems as its model.")]),e("CodeHighlight",[i._v(' <PanelMenu :model="items" /> ')]),e("CodeHighlight",{attrs:{lang:"js"}},[i._v(" export default { data() { return { items: [ { label: 'File', icon:'pi pi-fw pi-file', items: [ { label: 'New', icon:'pi pi-fw pi-plus', items: [ { label: 'Bookmark', icon:'pi pi-fw pi-bookmark' }, { label: 'Video', icon:'pi pi-fw pi-video' } ] }, { label: 'Delete', icon:'pi pi-fw pi-trash' }, { label: 'Export', icon:'pi pi-fw pi-external-link' } ] }, { label: 'Edit', icon:'pi pi-fw pi-pencil', items: [ { label: 'Left', icon:'pi pi-fw pi-align-left' }, { label: 'Right', icon:'pi pi-fw pi-align-right' }, { label: 'Center', icon:'pi pi-fw pi-align-center' }, { label: 'Justify', icon:'pi pi-fw pi-align-justify' } ] }, { label: 'Users', icon:'pi pi-fw pi-user', items: [ { label: 'New', icon:'pi pi-fw pi-user-plus', }, { label: 'Delete', icon:'pi pi-fw pi-user-minus', }, { label: 'Search', icon:'pi pi-fw pi-users', items: [ { label: 'Filter', icon:'pi pi-fw pi-filter', items: [ { label: 'Print', icon:'pi pi-fw pi-print' } ] }, { icon:'pi pi-fw pi-bars', label: 'List' } ] } ] }, { label: 'Events', icon:'pi pi-fw pi-calendar', items: [ { label: 'Edit', icon:'pi pi-fw pi-pencil', items: [ { label: 'Save', icon:'pi pi-fw pi-calendar-plus' }, { label: 'Delete', icon:'pi pi-fw pi-calendar-minus' } ] }, { label: 'Archieve', icon:'pi pi-fw pi-calendar-times', items: [ { label: 'Remove', icon:'pi pi-fw pi-calendar-minus' } ] } ] } ] } } } ")]),e("h5",[i._v("Properties")]),e("p",[i._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[i._v("Name")]),e("th",[i._v("Type")]),e("th",[i._v("Default")]),e("th",[i._v("Description")])])]),e("tbody",[e("tr",[e("td",[i._v("model")]),e("td",[i._v("array")]),e("td",[i._v("null")]),e("td",[i._v("An array of menuitems.")])]),e("tr",[e("td",[i._v("exact")]),e("td",[i._v("boolean")]),e("td",[i._v("true")]),e("td",[i._v("Whether to apply 'router-link-active-exact' class if route exactly matches the item path.")])])])])]),e("h5",[i._v("Styling")]),e("p",[i._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[i._v("theming")]),i._v(" page.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[i._v("Name")]),e("th",[i._v("Element")])])]),e("tbody",[e("tr",[e("td",[i._v("p-panelmenu")]),e("td",[i._v("Container element.")])]),e("tr",[e("td",[i._v("p-panelmenu-header")]),e("td",[i._v("Accordion header of root submenu.")])]),e("tr",[e("td",[i._v("p-panelmenu-content")]),e("td",[i._v("Accordion content of root submenu.")])]),e("tr",[e("td",[i._v("p-submenu-list")]),e("td",[i._v("List element.")])]),e("tr",[e("td",[i._v("p-menuitem")]),e("td",[i._v("Menuitem element.")])]),e("tr",[e("td",[i._v("p-menuitem-text")]),e("td",[i._v("Label of a menuitem.")])]),e("tr",[e("td",[i._v("p-menuitem-icon")]),e("td",[i._v("Icon of a menuitem.")])]),e("tr",[e("td",[i._v("p-panelmenu-icon")]),e("td",[i._v("Arrow icon of an accordion header.")])])])])]),e("h5",[i._v("Dependencies")]),e("p",[i._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/panelmenu",target:"_blank",rel:"noopener noreferrer"}},[e("span",[i._v("View on GitHub")])]),e("CodeHighlight",[[i._v(' <PanelMenu :model="items" /> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[i._v(" export default { data() { return { items: [ { label: 'File', icon:'pi pi-fw pi-file', items: [ { label: 'New', icon:'pi pi-fw pi-plus', items: [ { label: 'Bookmark', icon:'pi pi-fw pi-bookmark' }, { label: 'Video', icon:'pi pi-fw pi-video' } ] }, { label: 'Delete', icon:'pi pi-fw pi-trash' }, { label: 'Export', icon:'pi pi-fw pi-external-link' } ] }, { label: 'Edit', icon:'pi pi-fw pi-pencil', items: [ { label: 'Left', icon:'pi pi-fw pi-align-left' }, { label: 'Right', icon:'pi pi-fw pi-align-right' }, { label: 'Center', icon:'pi pi-fw pi-align-center' }, { label: 'Justify', icon:'pi pi-fw pi-align-justify' } ] }, { label: 'Users', icon:'pi pi-fw pi-user', items: [ { label: 'New', icon:'pi pi-fw pi-user-plus', }, { label: 'Delete', icon:'pi pi-fw pi-user-minus', }, { label: 'Search', icon:'pi pi-fw pi-users', items: [ { label: 'Filter', icon:'pi pi-fw pi-filter', items: [ { label: 'Print', icon:'pi pi-fw pi-print' } ] }, { icon:'pi pi-fw pi-bars', label: 'List' } ] } ] }, { label: 'Events', icon:'pi pi-fw pi-calendar', items: [ { label: 'Edit', icon:'pi pi-fw pi-pencil', items: [ { label: 'Save', icon:'pi pi-fw pi-calendar-plus' }, { label: 'Delete', icon:'pi pi-fw pi-calendar-minus' } ] }, { label: 'Archieve', icon:'pi pi-fw pi-calendar-times', items: [ { label: 'Remove', icon:'pi pi-fw pi-calendar-minus' } ] } ] } ] } } } ")])],1)],1)],1)}),[],!1,null,null).exports;i("default",t({data:function(){return{items:[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]}]}},components:{PanelMenuDoc:l}},(function(){var i=this,e=i._self._c;return e("div",[i._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("PanelMenu",{attrs:{model:i.items}})],1)]),e("PanelMenuDoc")],1)}),[function(){var i=this,e=i._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[i._v("PanelMenu")]),e("p",[i._v("PanelMenu is a hybrid of Accordion and Tree components.")])])])}],!1,null,"59dc5722").exports)}}}));
//# sourceMappingURL=PanelMenuDemo-legacy-DTNoPy0d.js.map
