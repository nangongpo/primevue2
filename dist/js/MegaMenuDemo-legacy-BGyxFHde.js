System.register(["./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var l;return{setters:[function(e){l=e.n},null,null,null],execute:function(){var t=l({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import MegaMenu from 'primevue2/megamenu'; ")]),t("h5",[e._v("MenuModel")]),t("p",[e._v("MegaMenu uses the common MenuModel API to define the items of the model, visit "),t("router-link",{attrs:{to:"/menumodel"}},[e._v("MenuModel API")]),e._v(" for details.")],1),t("CodeHighlight",[e._v(' <MegaMenu :model="items" /> ')]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data() { return { items: [ { label: 'Videos', icon: 'pi pi-fw pi-video', items: [ [ { label: 'Video 1', items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}] }, { label: 'Video 2', items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}] } ], [ { label: 'Video 3', items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}] }, { label: 'Video 4', items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}] } ] ] }, { label: 'Users', icon: 'pi pi-fw pi-users', items: [ [ { label: 'User 1', items: [{label: 'User 1.1'}, {label: 'User 1.2'}] }, { label: 'User 2', items: [{label: 'User 2.1'}, {label: 'User 2.2'}] }, ], [ { label: 'User 3', items: [{label: 'User 3.1'}, {label: 'User 3.2'}] }, { label: 'User 4', items: [{label: 'User 4.1'}, {label: 'User 4.2'}] } ], [ { label: 'User 5', items: [{label: 'User 5.1'}, {label: 'User 5.2'}] }, { label: 'User 6', items: [{label: 'User 6.1'}, {label: 'User 6.2'}] } ] ] }, { label: 'Events', icon: 'pi pi-fw pi-calendar', items: [ [ { label: 'Event 1', items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}] }, { label: 'Event 2', items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}] } ], [ { label: 'Event 3', items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}] }, { label: 'Event 4', items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}] } ] ] }, { label: 'Settings', icon: 'pi pi-fw pi-cog', items: [ [ { label: 'Setting 1', items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}] }, { label: 'Setting 2', items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}] }, { label: 'Setting 3', items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}] } ], [ { label: 'Setting 4', items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}] } ] ] } ] } } } ")]),t("h5",[e._v("Orientation")]),t("p",[e._v('Default orientation is "horizontal" with "vertical" as the alternative.')]),t("CodeHighlight",[e._v(' <MegaMenu :model="items" orientation="vertical" /> ')]),t("h5",[e._v("Templating")]),t("p",[e._v('Two slots named "start" and "end" are provided to embed content before or after the items. In additon MegaMenu, offers item customization with the '),t("i",[e._v("item")]),e._v(" template that receives the menuitem instance from the model as a parameter.")]),t("CodeHighlight",[[e._v(' <MegaMenu :model="items"> <template #start> Before </template> <template #item="{item}"> <a :href="item.url">{{item.label}}</a> </template> <template #end> After </template> </MegaMenu> ')]],2),t("h5",[e._v("Properties")]),t("p",[e._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("model")]),t("td",[e._v("array")]),t("td",[e._v("null")]),t("td",[e._v("An array of menuitems.")])]),t("tr",[t("td",[e._v("orientation")]),t("td",[e._v("string")]),t("td",[e._v("horizontal")]),t("td",[e._v("Defines the orientation, valid values are horizontal and vertical.")])]),t("tr",[t("td",[e._v("exact")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether to apply 'router-link-active-exact' class if route exactly matches the item path.")])])])])]),t("h5",[e._v("Slots")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("start")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("end")]),t("td",[e._v("-")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-megamenu")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-megamenu-horizontal")]),t("td",[e._v("Container element in horizontal orientation.")])]),t("tr",[t("td",[e._v("p-megamenu-vertical")]),t("td",[e._v("Container element in vertical orientation.")])]),t("tr",[t("td",[e._v("p-megamenu-root-list")]),t("td",[e._v("Root list element.")])]),t("tr",[t("td",[e._v("p-megamenu-panel")]),t("td",[e._v("Submenu container.")])]),t("tr",[t("td",[e._v("p-megamenu-submenu")]),t("td",[e._v("Submenu list element.")])]),t("tr",[t("td",[e._v("p-menuitem")]),t("td",[e._v("Menuitem element.")])]),t("tr",[t("td",[e._v("p-menuitem-text")]),t("td",[e._v("Label of a menuitem.")])]),t("tr",[t("td",[e._v("p-menuitem-icon")]),t("td",[e._v("Icon of a menuitem.")])]),t("tr",[t("td",[e._v("p-submenu-icon")]),t("td",[e._v("Arrow icon of a submenu.")])]),t("tr",[t("td",[e._v("p-megamenu-custom")]),t("td",[e._v("Container of the default slot.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/megamenu",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <h3>Horizontal</h3> <MegaMenu :model="items" /> <h3>Vertical</h3> <MegaMenu :model="items" orientation="vertical"/> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data() { return { items: [ { label: 'Videos', icon: 'pi pi-fw pi-video', items: [ [ { label: 'Video 1', items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}] }, { label: 'Video 2', items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}] } ], [ { label: 'Video 3', items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}] }, { label: 'Video 4', items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}] } ] ] }, { label: 'Users', icon: 'pi pi-fw pi-users', items: [ [ { label: 'User 1', items: [{label: 'User 1.1'}, {label: 'User 1.2'}] }, { label: 'User 2', items: [{label: 'User 2.1'}, {label: 'User 2.2'}] }, ], [ { label: 'User 3', items: [{label: 'User 3.1'}, {label: 'User 3.2'}] }, { label: 'User 4', items: [{label: 'User 4.1'}, {label: 'User 4.2'}] } ], [ { label: 'User 5', items: [{label: 'User 5.1'}, {label: 'User 5.2'}] }, { label: 'User 6', items: [{label: 'User 6.1'}, {label: 'User 6.2'}] } ] ] }, { label: 'Events', icon: 'pi pi-fw pi-calendar', items: [ [ { label: 'Event 1', items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}] }, { label: 'Event 2', items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}] } ], [ { label: 'Event 3', items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}] }, { label: 'Event 4', items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}] } ] ] }, { label: 'Settings', icon: 'pi pi-fw pi-cog', items: [ [ { label: 'Setting 1', items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}] }, { label: 'Setting 2', items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}] }, { label: 'Setting 3', items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}] } ], [ { label: 'Setting 4', items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}] } ] ] } ] } } } ")])],1)],1)],1)}),[],!1,null,null).exports;e("default",l({data:function(){return{items:[{label:"Videos",icon:"pi pi-fw pi-video",items:[[{label:"Video 1",items:[{label:"Video 1.1"},{label:"Video 1.2"}]},{label:"Video 2",items:[{label:"Video 2.1"},{label:"Video 2.2"}]}],[{label:"Video 3",items:[{label:"Video 3.1"},{label:"Video 3.2"}]},{label:"Video 4",items:[{label:"Video 4.1"},{label:"Video 4.2"}]}]]},{label:"Users",icon:"pi pi-fw pi-users",items:[[{label:"User 1",items:[{label:"User 1.1"},{label:"User 1.2"}]},{label:"User 2",items:[{label:"User 2.1"},{label:"User 2.2"}]}],[{label:"User 3",items:[{label:"User 3.1"},{label:"User 3.2"}]},{label:"User 4",items:[{label:"User 4.1"},{label:"User 4.2"}]}],[{label:"User 5",items:[{label:"User 5.1"},{label:"User 5.2"}]},{label:"User 6",items:[{label:"User 6.1"},{label:"User 6.2"}]}]]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[[{label:"Event 1",items:[{label:"Event 1.1"},{label:"Event 1.2"}]},{label:"Event 2",items:[{label:"Event 2.1"},{label:"Event 2.2"}]}],[{label:"Event 3",items:[{label:"Event 3.1"},{label:"Event 3.2"}]},{label:"Event 4",items:[{label:"Event 4.1"},{label:"Event 4.2"}]}]]},{label:"Settings",icon:"pi pi-fw pi-cog",items:[[{label:"Setting 1",items:[{label:"Setting 1.1"},{label:"Setting 1.2"}]},{label:"Setting 2",items:[{label:"Setting 2.1"},{label:"Setting 2.2"}]},{label:"Setting 3",items:[{label:"Setting 3.1"},{label:"Setting 3.2"}]}],[{label:"Setting 4",items:[{label:"Setting 4.1"},{label:"Setting 4.2"}]}]]}]}},components:{MegaMenuDoc:t}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Horizontal")]),t("MegaMenu",{attrs:{model:e.items}}),t("h5",[e._v("Vertical")]),t("MegaMenu",{attrs:{model:e.items,orientation:"vertical"}})],1)]),t("MegaMenuDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("MegaMenu")]),t("p",[e._v("MegaMenu is navigation component that displays submenus together.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=MegaMenuDemo-legacy-BGyxFHde.js.map
