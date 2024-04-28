import{n as a}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const i={};var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[t._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import MegaMenu from 'primevue2/megamenu'; ")]),e("h5",[t._v("MenuModel")]),e("p",[t._v("MegaMenu uses the common MenuModel API to define the items of the model, visit "),e("router-link",{attrs:{to:"/menumodel"}},[t._v("MenuModel API")]),t._v(" for details.")],1),e("CodeHighlight",[t._v(' <MegaMenu :model="items" /> ')]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" export default { data() { return { items: [ { label: 'Videos', icon: 'pi pi-fw pi-video', items: [ [ { label: 'Video 1', items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}] }, { label: 'Video 2', items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}] } ], [ { label: 'Video 3', items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}] }, { label: 'Video 4', items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}] } ] ] }, { label: 'Users', icon: 'pi pi-fw pi-users', items: [ [ { label: 'User 1', items: [{label: 'User 1.1'}, {label: 'User 1.2'}] }, { label: 'User 2', items: [{label: 'User 2.1'}, {label: 'User 2.2'}] }, ], [ { label: 'User 3', items: [{label: 'User 3.1'}, {label: 'User 3.2'}] }, { label: 'User 4', items: [{label: 'User 4.1'}, {label: 'User 4.2'}] } ], [ { label: 'User 5', items: [{label: 'User 5.1'}, {label: 'User 5.2'}] }, { label: 'User 6', items: [{label: 'User 6.1'}, {label: 'User 6.2'}] } ] ] }, { label: 'Events', icon: 'pi pi-fw pi-calendar', items: [ [ { label: 'Event 1', items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}] }, { label: 'Event 2', items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}] } ], [ { label: 'Event 3', items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}] }, { label: 'Event 4', items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}] } ] ] }, { label: 'Settings', icon: 'pi pi-fw pi-cog', items: [ [ { label: 'Setting 1', items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}] }, { label: 'Setting 2', items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}] }, { label: 'Setting 3', items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}] } ], [ { label: 'Setting 4', items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}] } ] ] } ] } } } ")]),e("h5",[t._v("Orientation")]),e("p",[t._v('Default orientation is "horizontal" with "vertical" as the alternative.')]),e("CodeHighlight",[t._v(' <MegaMenu :model="items" orientation="vertical" /> ')]),e("h5",[t._v("Templating")]),e("p",[t._v('Two slots named "start" and "end" are provided to embed content before or after the items. In additon MegaMenu, offers item customization with the '),e("i",[t._v("item")]),t._v(" template that receives the menuitem instance from the model as a parameter.")]),e("CodeHighlight",[[t._v(' <MegaMenu :model="items"> <template #start> Before </template> <template #item="{item}"> <a :href="item.url">{{item.label}}</a> </template> <template #end> After </template> </MegaMenu> ')]],2),e("h5",[t._v("Properties")]),e("p",[t._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("model")]),e("td",[t._v("array")]),e("td",[t._v("null")]),e("td",[t._v("An array of menuitems.")])]),e("tr",[e("td",[t._v("orientation")]),e("td",[t._v("string")]),e("td",[t._v("horizontal")]),e("td",[t._v("Defines the orientation, valid values are horizontal and vertical.")])]),e("tr",[e("td",[t._v("exact")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Whether to apply 'router-link-active-exact' class if route exactly matches the item path.")])])])])]),e("h5",[t._v("Slots")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("start")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("end")]),e("td",[t._v("-")])])])])]),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-megamenu")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-megamenu-horizontal")]),e("td",[t._v("Container element in horizontal orientation.")])]),e("tr",[e("td",[t._v("p-megamenu-vertical")]),e("td",[t._v("Container element in vertical orientation.")])]),e("tr",[e("td",[t._v("p-megamenu-root-list")]),e("td",[t._v("Root list element.")])]),e("tr",[e("td",[t._v("p-megamenu-panel")]),e("td",[t._v("Submenu container.")])]),e("tr",[e("td",[t._v("p-megamenu-submenu")]),e("td",[t._v("Submenu list element.")])]),e("tr",[e("td",[t._v("p-menuitem")]),e("td",[t._v("Menuitem element.")])]),e("tr",[e("td",[t._v("p-menuitem-text")]),e("td",[t._v("Label of a menuitem.")])]),e("tr",[e("td",[t._v("p-menuitem-icon")]),e("td",[t._v("Icon of a menuitem.")])]),e("tr",[e("td",[t._v("p-submenu-icon")]),e("td",[t._v("Arrow icon of a submenu.")])]),e("tr",[e("td",[t._v("p-megamenu-custom")]),e("td",[t._v("Container of the default slot.")])])])])]),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/megamenu",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])]),e("CodeHighlight",[[t._v(' <h3>Horizontal</h3> <MegaMenu :model="items" /> <h3>Vertical</h3> <MegaMenu :model="items" orientation="vertical"/> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" export default { data() { return { items: [ { label: 'Videos', icon: 'pi pi-fw pi-video', items: [ [ { label: 'Video 1', items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}] }, { label: 'Video 2', items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}] } ], [ { label: 'Video 3', items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}] }, { label: 'Video 4', items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}] } ] ] }, { label: 'Users', icon: 'pi pi-fw pi-users', items: [ [ { label: 'User 1', items: [{label: 'User 1.1'}, {label: 'User 1.2'}] }, { label: 'User 2', items: [{label: 'User 2.1'}, {label: 'User 2.2'}] }, ], [ { label: 'User 3', items: [{label: 'User 3.1'}, {label: 'User 3.2'}] }, { label: 'User 4', items: [{label: 'User 4.1'}, {label: 'User 4.2'}] } ], [ { label: 'User 5', items: [{label: 'User 5.1'}, {label: 'User 5.2'}] }, { label: 'User 6', items: [{label: 'User 6.1'}, {label: 'User 6.2'}] } ] ] }, { label: 'Events', icon: 'pi pi-fw pi-calendar', items: [ [ { label: 'Event 1', items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}] }, { label: 'Event 2', items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}] } ], [ { label: 'Event 3', items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}] }, { label: 'Event 4', items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}] } ] ] }, { label: 'Settings', icon: 'pi pi-fw pi-cog', items: [ [ { label: 'Setting 1', items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}] }, { label: 'Setting 2', items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}] }, { label: 'Setting 3', items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}] } ], [ { label: 'Setting 4', items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}] } ] ] } ] } } } ")])],1)],1)],1)},s=[],r=a(i,n,s,!1,null,null);const o=r.exports,b={data(){return{items:[{label:"Videos",icon:"pi pi-fw pi-video",items:[[{label:"Video 1",items:[{label:"Video 1.1"},{label:"Video 1.2"}]},{label:"Video 2",items:[{label:"Video 2.1"},{label:"Video 2.2"}]}],[{label:"Video 3",items:[{label:"Video 3.1"},{label:"Video 3.2"}]},{label:"Video 4",items:[{label:"Video 4.1"},{label:"Video 4.2"}]}]]},{label:"Users",icon:"pi pi-fw pi-users",items:[[{label:"User 1",items:[{label:"User 1.1"},{label:"User 1.2"}]},{label:"User 2",items:[{label:"User 2.1"},{label:"User 2.2"}]}],[{label:"User 3",items:[{label:"User 3.1"},{label:"User 3.2"}]},{label:"User 4",items:[{label:"User 4.1"},{label:"User 4.2"}]}],[{label:"User 5",items:[{label:"User 5.1"},{label:"User 5.2"}]},{label:"User 6",items:[{label:"User 6.1"},{label:"User 6.2"}]}]]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[[{label:"Event 1",items:[{label:"Event 1.1"},{label:"Event 1.2"}]},{label:"Event 2",items:[{label:"Event 2.1"},{label:"Event 2.2"}]}],[{label:"Event 3",items:[{label:"Event 3.1"},{label:"Event 3.2"}]},{label:"Event 4",items:[{label:"Event 4.1"},{label:"Event 4.2"}]}]]},{label:"Settings",icon:"pi pi-fw pi-cog",items:[[{label:"Setting 1",items:[{label:"Setting 1.1"},{label:"Setting 1.2"}]},{label:"Setting 2",items:[{label:"Setting 2.1"},{label:"Setting 2.2"}]},{label:"Setting 3",items:[{label:"Setting 3.1"},{label:"Setting 3.2"}]}],[{label:"Setting 4",items:[{label:"Setting 4.1"},{label:"Setting 4.2"}]}]]}]}},components:{MegaMenuDoc:o}};var m=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Horizontal")]),e("MegaMenu",{attrs:{model:t.items}}),e("h5",[t._v("Vertical")]),e("MegaMenu",{attrs:{model:t.items,orientation:"vertical"}})],1)]),e("MegaMenuDoc")],1)},v=[function(){var l=this,t=l._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[l._v("MegaMenu")]),t("p",[l._v("MegaMenu is navigation component that displays submenus together.")])])])}],d=a(b,m,v,!1,null,null);const u=d.exports;export{u as default};
//# sourceMappingURL=MegaMenuDemo-2S-u0mnW.js.map