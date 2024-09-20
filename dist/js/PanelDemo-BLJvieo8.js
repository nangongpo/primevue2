import{n as i}from"./app.component-XqgfEEHA.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const o={};var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[t._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import Panel from 'primevue2/panel'; ")]),e("h5",[t._v("Getting Started")]),e("p",[t._v("Panel is a container component that accepts content as its children.")]),e("CodeHighlight",[t._v(' <Panel header="Header"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Panel> ')]),e("h5",[t._v("Custom Header")]),e("p",[t._v("Header of the panel is either defined with the "),e("i",[t._v("header")]),t._v(" property or the header template.")]),e("CodeHighlight",[t._v(" <Panel> <template #header> Header Content </template> Content </Panel> ")]),e("h5",[t._v("Toggleable")]),e("p",[t._v("Content of the panel can be expanded and collapsed using "),e("i",[t._v("toggleable")]),t._v(" option.")]),e("CodeHighlight",[t._v(' <Panel header="Header" :toggleable="true"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Panel> ')]),e("p",[t._v("To control the initial state of the toggleable panel, use the "),e("i",[t._v("collapsed")]),t._v(" property.")]),e("CodeHighlight",[t._v(' <Panel header="Header Text" :toggleable="true" :collapsed="true"> Content </Panel> ')]),e("p",[t._v("Use the sync operator to enable two-way binding.")]),e("CodeHighlight",[t._v(' <button type="button" @click="isCollapsed = !isCollapsed">Toggle Programmatically</button> <Panel header="Header Text" :toggleable="true" :collapsed.sync="isCollapsed"> Content </Panel> ')]),e("h5",[t._v("Custom Icons")]),e("p",[t._v("Additional icons can be placed at the header section of the panel using the special "),e("i",[t._v("icons")]),t._v(" slot. For a unified look, it is suggest to add "),e("i",[t._v(".p-panel-header-icon")]),t._v(" class to your icons.")]),e("CodeHighlight",[t._v(' <h5>Advanced</h5> <Panel header="Header"> <template #icons> <button class="p-panel-header-icon p-link" @click="toggle"> <span class="pi pi-cog"></span> </button> <Menu id="config_menu" ref="menu" :model="items" :popup="true" /> </template> </Panel> ')]),e("h5",[t._v("Properties")]),e("p",[t._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("header")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Header text of the panel.")])]),e("tr",[e("td",[t._v("toggleable")]),e("td",[t._v("boolean")]),e("td",[t._v("null")]),e("td",[t._v("Defines if content of panel can be expanded and collapsed.")])]),e("tr",[e("td",[t._v("collapsed")]),e("td",[t._v("boolean")]),e("td",[t._v("null")]),e("td",[t._v("Defines the initial state of panel content.")])])])])]),e("h5",[t._v("Events")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("toggle")]),e("td",[t._v("event.originalEvent: browser event "),e("br"),t._v(" event.value: collapsed state as a boolean ")]),e("td",[t._v("Callback to invoke when a tab toggle.")])])])])]),e("h5",[t._v("Slots")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("header")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("icons")]),e("td",[t._v("-")])])])])]),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-panel")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-panel-header")]),e("td",[t._v("Header section.")])]),e("tr",[e("td",[t._v("p-panel-title")]),e("td",[t._v("Title text of panel.")])]),e("tr",[e("td",[t._v("p-panel-header-icon")]),e("td",[t._v("Action icons inside header.")])]),e("tr",[e("td",[t._v("p-panel-toggler")]),e("td",[t._v("Toggle icon.")])]),e("tr",[e("td",[t._v("p-panel-content")]),e("td",[t._v("Content of panel.")])])])])]),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/panel",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])]),e("CodeHighlight",[[t._v(' <h5>Regular</h5> <Panel header="Header"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </Panel> <h5>Advanced</h5> <Panel header="Header" :toggleable="true"> <template #icons> <button class="p-panel-header-icon p-link" @click="toggle"> <span class="pi pi-cog"></span> </button> <Menu id="config_menu" ref="menu" :model="items" :popup="true" /> </template> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </Panel> ')]],2),e("CodeHighlight",{attrs:{lang:"js"}},[t._v(" export default { data() { return { items: [ { label: 'Options', items: [{ label: 'Update', icon: 'pi pi-refresh', command: () => { this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000}); } }, { label: 'Delete', icon: 'pi pi-times', command: () => { this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000}); } } ]}, { label: 'Navigate', items: [{ label: 'Vue Website', icon: 'pi pi-external-link', url: 'https://vuejs.org/' }, { label: 'Router', icon: 'pi pi-upload', to: '/fileupload' } ]} ] } }, methods: { toggle(event) { this.$refs.menu.toggle(event); }, save() { this.$toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000}); } } } ")])],1)],1)],1)},l=[],s=i(o,n,l,!1,null,null);const r=s.exports,d={data(){return{items:[{label:"Options",items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}}]},{label:"Navigate",items:[{label:"Vue Website",icon:"pi pi-external-link",url:"https://vuejs.org/"},{label:"Router",icon:"pi pi-upload",to:"/fileupload"}]}]}},methods:{toggle(a){this.$refs.menu.toggle(a)},save(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}},components:{PanelDoc:r}};var u=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("h5",[t._v("Regular")]),e("Panel",{attrs:{header:"Header"}},[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),e("h5",[t._v("Advanced")]),e("Panel",{attrs:{header:"Header",toggleable:!0},scopedSlots:t._u([{key:"icons",fn:function(){return[e("button",{staticClass:"p-panel-header-icon p-link",on:{click:t.toggle}},[e("span",{staticClass:"pi pi-cog"})]),e("Menu",{ref:"menu",attrs:{id:"config_menu",model:t.items,popup:!0}})]},proxy:!0}])},[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])],1),e("PanelDoc")],1)},c=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[a._v("Panel")]),t("p",[a._v("Panel is a container with the optional content toggle feature.")])])])}],p=i(d,u,c,!1,null,"9e1c32a9");const g=p.exports;export{g as default};
//# sourceMappingURL=PanelDemo-BLJvieo8.js.map
