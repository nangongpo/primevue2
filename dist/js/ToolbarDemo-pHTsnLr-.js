import{n as o}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const i={};var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import Toolbar from 'primevue2/toolbar'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("Toolbar provides "),t("i",[e._v("start")]),e._v(" and "),t("i",[e._v("end")]),e._v(" templates to place content at these sections.")]),t("CodeHighlight",[e._v(' <Toolbar> <template #start> <Button label="New" icon="pi pi-plus" class="mr-2" /> <Button label="Upload" icon="pi pi-upload" class="p-button-success" /> <i class="pi pi-bars p-toolbar-separator mr-2" /> <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton> </template> <template #end> <Button icon="pi pi-search" class="mr-2" /> <Button icon="pi pi-calendar" class="p-button-success mr-2" /> <Button icon="pi pi-times" class="p-button-danger" /> </template> </Toolbar> ')]),t("h5",[e._v("Slots")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("start")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("end")]),t("td",[e._v("-")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-toolbar")]),t("td",[e._v("Main container element.")])]),t("tr",[t("td",[e._v("p-toolbar-group-left")]),t("td",[e._v("Left content container.")])]),t("tr",[t("td",[e._v("p-toolbar-group-right")]),t("td",[e._v("Right content container.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/toolbar",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <Toolbar> <template #start> <Button label="New" icon="pi pi-plus" class="mr-2" /> <Button label="Upload" icon="pi pi-upload" class="p-button-success" /> <i class="pi pi-bars p-toolbar-separator mr-2" /> <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton> </template> <template #end> <Button icon="pi pi-search" class="mr-2" /> <Button icon="pi pi-calendar" class="p-button-success mr-2" /> <Button icon="pi pi-times" class="p-button-danger" /> </template> </Toolbar> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data() { return { items: [ { label: 'Update', icon: 'pi pi-refresh' }, { label: 'Delete', icon: 'pi pi-times' }, { label: 'Vue Website', icon: 'pi pi-external-link', command: () => { window.location.href = 'https://vuejs.org/' } }, { label: 'Upload', icon: 'pi pi-upload', command: () => { window.location.hash = \"/fileupload\" } } ] } } } ")])],1)],1)],1)},s=[],r=o(i,n,s,!1,null,null);const l=r.exports,p={data(){return{items:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",command:()=>{window.location.hash="/fileupload"}}]}},components:{ToolbarDoc:l}};var c=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("Toolbar",{scopedSlots:e._u([{key:"start",fn:function(){return[t("Button",{staticClass:"mr-2",attrs:{label:"New",icon:"pi pi-plus"}}),t("Button",{staticClass:"p-button-success",attrs:{label:"Upload",icon:"pi pi-upload"}}),t("i",{staticClass:"pi pi-bars p-toolbar-separator mr-2"}),t("SplitButton",{staticClass:"p-button-warning",attrs:{label:"Save",icon:"pi pi-check",model:e.items}})]},proxy:!0},{key:"end",fn:function(){return[t("Button",{staticClass:"mr-2",attrs:{icon:"pi pi-search"}}),t("Button",{staticClass:"p-button-success mr-2",attrs:{icon:"pi pi-calendar"}}),t("Button",{staticClass:"p-button-danger",attrs:{icon:"pi pi-times"}})]},proxy:!0}])})],1),t("ToolbarDoc")],1)},u=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[a._v("Toolbar")]),e("p",[a._v("Toolbar is a grouping component for buttons and other content.")])])])}],d=o(p,c,u,!1,null,null);const h=d.exports;export{h as default};
//# sourceMappingURL=ToolbarDemo-pHTsnLr-.js.map