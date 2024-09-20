System.register(["./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,i){"use strict";var t;return{setters:[function(e){t=e.n},null,null,null],execute:function(){var i=t({},(function(){var e=this,i=e._self._c;return i("div",{staticClass:"content-section documentation"},[i("TabView",[i("TabPanel",{attrs:{header:"Documentation"}},[i("h5",[e._v("Import")]),i("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import TieredMenu from 'primevue2/tieredmenu'; ")]),i("h5",[e._v("MenuModel")]),i("p",[e._v("TieredMenu uses the common MenuModel API to define the items, visit "),i("router-link",{attrs:{to:"/menumodel"}},[e._v("MenuModel API")]),e._v(" for details.")],1),i("h5",[e._v("Getting Started")]),i("p",[e._v("TieredMenu requires a collection of menuitems as its model.")]),i("CodeHighlight",[e._v(' <TieredMenu :model="items" /> ')]),i("CodeHighlight",{attrs:{lang:"js"}},[e._v(" export default { data() { return { items: [ { label:'File', icon:'pi pi-fw pi-file', items:[ { label:'New', icon:'pi pi-fw pi-plus', items:[ { label:'Bookmark', icon:'pi pi-fw pi-bookmark' }, { label:'Video', icon:'pi pi-fw pi-video' }, ] }, { label:'Delete', icon:'pi pi-fw pi-trash' }, { separator:true }, { label:'Export', icon:'pi pi-fw pi-external-link' } ] }, { label:'Edit', icon:'pi pi-fw pi-pencil', items:[ { label:'Left', icon:'pi pi-fw pi-align-left' }, { label:'Right', icon:'pi pi-fw pi-align-right' }, { label:'Center', icon:'pi pi-fw pi-align-center' }, { label:'Justify', icon:'pi pi-fw pi-align-justify' }, ] }, { label:'Users', icon:'pi pi-fw pi-user', items:[ { label:'New', icon:'pi pi-fw pi-user-plus', }, { label:'Delete', icon:'pi pi-fw pi-user-minus', }, { label:'Search', icon:'pi pi-fw pi-users', items:[ { label:'Filter', icon:'pi pi-fw pi-filter', items:[ { label:'Print', icon:'pi pi-fw pi-print' } ] }, { icon:'pi pi-fw pi-bars', label:'List' } ] } ] }, { label:'Events', icon:'pi pi-fw pi-calendar', items:[ { label:'Edit', icon:'pi pi-fw pi-pencil', items:[ { label:'Save', icon:'pi pi-fw pi-calendar-plus' }, { label:'Delete', icon:'pi pi-fw pi-calendar-minus' }, ] }, { label:'Archieve', icon:'pi pi-fw pi-calendar-times', items:[ { label:'Remove', icon:'pi pi-fw pi-calendar-minus' } ] } ] }, { separator:true }, { label:'Quit', icon:'pi pi-fw pi-power-off' } ] } } } ")]),i("h5",[e._v("Popup Mode")]),i("p",[e._v("TieredMenu is inline by default whereas popup mode is supported by enabling popup property and calling toggle method with an event of the target.")]),i("CodeHighlight",[e._v(' <Button type="button" label="Toggle" @click="toggle" /> <TieredMenu ref="menu" :model="items" :popup="true" /> ')]),i("CodeHighlight",{attrs:{lang:"js"}},[e._v(" toggle(event) { this.$refs.menu.toggle(event); } ")]),i("h5",[e._v("Properties")]),i("p",[e._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),i("div",{staticClass:"doc-tablewrapper"},[i("table",{staticClass:"doc-table"},[i("thead",[i("tr",[i("th",[e._v("Name")]),i("th",[e._v("Type")]),i("th",[e._v("Default")]),i("th",[e._v("Description")])])]),i("tbody",[i("tr",[i("td",[e._v("model")]),i("td",[e._v("array")]),i("td",[e._v("null")]),i("td",[e._v("An array of menuitems.")])]),i("tr",[i("td",[e._v("popup")]),i("td",[e._v("boolean")]),i("td",[e._v("false")]),i("td",[e._v("Defines if menu would displayed as a popup.")])]),i("tr",[i("td",[e._v("appendTo")]),i("td",[e._v("string")]),i("td",[e._v("null")]),i("td",[e._v('Id of the element or "body" for document where the overlay should be appended to.')])]),i("tr",[i("td",[e._v("baseZIndex")]),i("td",[e._v("number")]),i("td",[e._v("0")]),i("td",[e._v("Base zIndex value to use in layering.")])]),i("tr",[i("td",[e._v("autoZIndex")]),i("td",[e._v("boolean")]),i("td",[e._v("true")]),i("td",[e._v("Whether to automatically manage layering.")])]),i("tr",[i("td",[e._v("exact")]),i("td",[e._v("boolean")]),i("td",[e._v("true")]),i("td",[e._v("Whether to apply 'router-link-active-exact' class if route exactly matches the item path.")])])])])]),i("h5",[e._v("Methods")]),i("div",{staticClass:"doc-tablewrapper"},[i("table",{staticClass:"doc-table"},[i("thead",[i("tr",[i("th",[e._v("Name")]),i("th",[e._v("Parameters")]),i("th",[e._v("Description")])])]),i("tbody",[i("tr",[i("td",[e._v("toggle")]),i("td",[e._v("event: Browser event")]),i("td",[e._v("Toggles the visibility of the overlay.")])]),i("tr",[i("td",[e._v("show")]),i("td",[e._v("event: Browser event "),i("br"),e._v(" target: Optional target if event.target would not be used")]),i("td",[e._v("Shows the overlay.")])]),i("tr",[i("td",[e._v("hide")]),i("td",[e._v("-")]),i("td",[e._v("Hides the overlay.")])])])])]),i("h5",[e._v("Styling")]),i("p",[e._v("Following is the list of structural style classes, for theming classes visit "),i("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),i("div",{staticClass:"doc-tablewrapper"},[i("table",{staticClass:"doc-table"},[i("thead",[i("tr",[i("th",[e._v("Name")]),i("th",[e._v("Element")])])]),i("tbody",[i("tr",[i("td",[e._v("p-tieredmenu")]),i("td",[e._v("Container element.")])]),i("tr",[i("td",[e._v("p-submenu-list")]),i("td",[e._v("Submenu list element.")])]),i("tr",[i("td",[e._v("p-menuitem")]),i("td",[e._v("Menuitem element.")])]),i("tr",[i("td",[e._v("p-menuitem-text")]),i("td",[e._v("Label of a menuitem.")])]),i("tr",[i("td",[e._v("p-menuitem-icon")]),i("td",[e._v("Icon of a menuitem.")])]),i("tr",[i("td",[e._v("p-submenu-icon")]),i("td",[e._v("Arrow icon of a submenu.")])])])])]),i("h5",[e._v("Dependencies")]),i("p",[e._v("None.")])],1),i("TabPanel",{attrs:{header:"Source"}},[i("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/tieredmenu",target:"_blank",rel:"noopener noreferrer"}},[i("span",[e._v("View on GitHub")])]),i("CodeHighlight",[[e._v(' <h3>Inline</h3> <TieredMenu :model="items" /> <h3>Overlay</h3> <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" /> <TieredMenu id="overlay_tmenu" ref="menu" :model="items" :popup="true" /> ')]],2),i("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data() { return { items: [ { label:'File', icon:'pi pi-fw pi-file', items:[ { label:'Update', icon:'pi pi-fw pi-upload', to: '/fileupload' }, { label:'New', icon:'pi pi-fw pi-plus', items:[ { label:'Bookmark', icon:'pi pi-fw pi-bookmark' }, { label:'Video', icon:'pi pi-fw pi-video' }, ] }, { label:'Delete', icon:'pi pi-fw pi-trash' }, { separator:true }, { label:'Export', icon:'pi pi-fw pi-external-link' } ] }, { label:'Edit', icon:'pi pi-fw pi-pencil', items:[ { label:'Left', icon:'pi pi-fw pi-align-left' }, { label:'Right', icon:'pi pi-fw pi-align-right' }, { label:'Center', icon:'pi pi-fw pi-align-center' }, { label:'Justify', icon:'pi pi-fw pi-align-justify' }, ] }, { label:'Users', icon:'pi pi-fw pi-user', items:[ { label:'New', icon:'pi pi-fw pi-user-plus', }, { label:'Delete', icon:'pi pi-fw pi-user-minus', }, { label:'Search', icon:'pi pi-fw pi-users', items:[ { label:'Filter', icon:'pi pi-fw pi-filter', items:[ { label:'Print', icon:'pi pi-fw pi-print' } ] }, { icon:'pi pi-fw pi-bars', label:'List' } ] } ] }, { label:'Events', icon:'pi pi-fw pi-calendar', items:[ { label:'Edit', icon:'pi pi-fw pi-pencil', items:[ { label:'Save', icon:'pi pi-fw pi-calendar-plus' }, { label:'Delete', icon:'pi pi-fw pi-calendar-minus' }, ] }, { label:'Archieve', icon:'pi pi-fw pi-calendar-times', items:[ { label:'Remove', icon:'pi pi-fw pi-calendar-minus' } ] } ] }, { separator:true }, { label:'Quit', icon:'pi pi-fw pi-power-off', command: (event) => { this.$toast.add({ severity: 'success', summary: 'Quit', detail: 'Quit success' }) return } } ] } }, methods: { toggle(event) { this.$refs.menu.toggle(event); } } } ")])],1)],1)],1)}),[],!1,null,null).exports;e("default",t({data:function(){var e=this;return{items:[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"Update",icon:"pi pi-fw pi-upload",to:"/fileupload"},{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi    pi-fw pi-calendar-minus"}]}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-power-off",command:function(i){e.$toast.add({severity:"success",summary:"Quit",detail:"Quit success"})}}]}},methods:{toggle:function(e){this.$refs.menu.toggle(e)}},components:{TieredMenuDoc:i}},(function(){var e=this,i=e._self._c;return i("div",[e._m(0),i("div",{staticClass:"content-section implementation"},[i("div",{staticClass:"card"},[i("h5",[e._v("Inline")]),i("TieredMenu",{attrs:{model:e.items}}),i("h5",[e._v("Overlay")]),i("Button",{attrs:{type:"button",label:"Toggle","aria-haspopup":"true","aria-controls":"overlay_tmenu"},on:{click:e.toggle}}),i("TieredMenu",{ref:"menu",attrs:{id:"overlay_tmenu",model:e.items,popup:!0}})],1)]),i("TieredMenuDoc")],1)}),[function(){var e=this,i=e._self._c;return i("div",{staticClass:"content-section introduction"},[i("div",{staticClass:"feature-intro"},[i("h1",[e._v("TieredMenu")]),i("p",[e._v("TieredMenu displays submenus in nested overlays.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=TieredMenuDemo-legacy-BUbwqJtd.js.map
