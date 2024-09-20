System.register(["./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var a;return{setters:[function(e){a=e.n},null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".p-panel p[data-v-9e1c32a9]{line-height:1.5;margin:0}\n",document.head.appendChild(t);var i=a({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import Panel from 'primevue2/panel'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("Panel is a container component that accepts content as its children.")]),t("CodeHighlight",[e._v(' <Panel header="Header"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Panel> ')]),t("h5",[e._v("Custom Header")]),t("p",[e._v("Header of the panel is either defined with the "),t("i",[e._v("header")]),e._v(" property or the header template.")]),t("CodeHighlight",[e._v(" <Panel> <template #header> Header Content </template> Content </Panel> ")]),t("h5",[e._v("Toggleable")]),t("p",[e._v("Content of the panel can be expanded and collapsed using "),t("i",[e._v("toggleable")]),e._v(" option.")]),t("CodeHighlight",[e._v(' <Panel header="Header" :toggleable="true"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Panel> ')]),t("p",[e._v("To control the initial state of the toggleable panel, use the "),t("i",[e._v("collapsed")]),e._v(" property.")]),t("CodeHighlight",[e._v(' <Panel header="Header Text" :toggleable="true" :collapsed="true"> Content </Panel> ')]),t("p",[e._v("Use the sync operator to enable two-way binding.")]),t("CodeHighlight",[e._v(' <button type="button" @click="isCollapsed = !isCollapsed">Toggle Programmatically</button> <Panel header="Header Text" :toggleable="true" :collapsed.sync="isCollapsed"> Content </Panel> ')]),t("h5",[e._v("Custom Icons")]),t("p",[e._v("Additional icons can be placed at the header section of the panel using the special "),t("i",[e._v("icons")]),e._v(" slot. For a unified look, it is suggest to add "),t("i",[e._v(".p-panel-header-icon")]),e._v(" class to your icons.")]),t("CodeHighlight",[e._v(' <h5>Advanced</h5> <Panel header="Header"> <template #icons> <button class="p-panel-header-icon p-link" @click="toggle"> <span class="pi pi-cog"></span> </button> <Menu id="config_menu" ref="menu" :model="items" :popup="true" /> </template> </Panel> ')]),t("h5",[e._v("Properties")]),t("p",[e._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("header")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Header text of the panel.")])]),t("tr",[t("td",[e._v("toggleable")]),t("td",[e._v("boolean")]),t("td",[e._v("null")]),t("td",[e._v("Defines if content of panel can be expanded and collapsed.")])]),t("tr",[t("td",[e._v("collapsed")]),t("td",[e._v("boolean")]),t("td",[e._v("null")]),t("td",[e._v("Defines the initial state of panel content.")])])])])]),t("h5",[e._v("Events")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("toggle")]),t("td",[e._v("event.originalEvent: browser event "),t("br"),e._v(" event.value: collapsed state as a boolean ")]),t("td",[e._v("Callback to invoke when a tab toggle.")])])])])]),t("h5",[e._v("Slots")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("header")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("icons")]),t("td",[e._v("-")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-panel")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-panel-header")]),t("td",[e._v("Header section.")])]),t("tr",[t("td",[e._v("p-panel-title")]),t("td",[e._v("Title text of panel.")])]),t("tr",[t("td",[e._v("p-panel-header-icon")]),t("td",[e._v("Action icons inside header.")])]),t("tr",[t("td",[e._v("p-panel-toggler")]),t("td",[e._v("Toggle icon.")])]),t("tr",[t("td",[e._v("p-panel-content")]),t("td",[e._v("Content of panel.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/panel",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <h5>Regular</h5> <Panel header="Header"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </Panel> <h5>Advanced</h5> <Panel header="Header" :toggleable="true"> <template #icons> <button class="p-panel-header-icon p-link" @click="toggle"> <span class="pi pi-cog"></span> </button> <Menu id="config_menu" ref="menu" :model="items" :popup="true" /> </template> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </Panel> ')]],2),t("CodeHighlight",{attrs:{lang:"js"}},[e._v(" export default { data() { return { items: [ { label: 'Options', items: [{ label: 'Update', icon: 'pi pi-refresh', command: () => { this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000}); } }, { label: 'Delete', icon: 'pi pi-times', command: () => { this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000}); } } ]}, { label: 'Navigate', items: [{ label: 'Vue Website', icon: 'pi pi-external-link', url: 'https://vuejs.org/' }, { label: 'Router', icon: 'pi pi-upload', to: '/fileupload' } ]} ] } }, methods: { toggle(event) { this.$refs.menu.toggle(event); }, save() { this.$toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000}); } } } ")])],1)],1)],1)}),[],!1,null,null).exports;e("default",a({data:function(){var e=this;return{items:[{label:"Options",items:[{label:"Update",icon:"pi pi-refresh",command:function(){e.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:function(){e.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}}]},{label:"Navigate",items:[{label:"Vue Website",icon:"pi pi-external-link",url:"https://vuejs.org/"},{label:"Router",icon:"pi pi-upload",to:"/fileupload"}]}]}},methods:{toggle:function(e){this.$refs.menu.toggle(e)},save:function(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}},components:{PanelDoc:i}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("h5",[e._v("Regular")]),t("Panel",{attrs:{header:"Header"}},[t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t("h5",[e._v("Advanced")]),t("Panel",{attrs:{header:"Header",toggleable:!0},scopedSlots:e._u([{key:"icons",fn:function(){return[t("button",{staticClass:"p-panel-header-icon p-link",on:{click:e.toggle}},[t("span",{staticClass:"pi pi-cog"})]),t("Menu",{ref:"menu",attrs:{id:"config_menu",model:e.items,popup:!0}})]},proxy:!0}])},[t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])],1),t("PanelDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("Panel")]),t("p",[e._v("Panel is a container with the optional content toggle feature.")])])])}],!1,null,"9e1c32a9").exports)}}}));
//# sourceMappingURL=PanelDemo-legacy-CsHd-kqH.js.map
