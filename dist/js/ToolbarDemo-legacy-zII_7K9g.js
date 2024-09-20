System.register(["./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(t,e){"use strict";var a;return{setters:[function(t){a=t.n},null,null,null],execute:function(){var e=a({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[t._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import Toolbar from 'primevue2/toolbar'; ")]),e("h5",[t._v("Getting Started")]),e("p",[t._v("Toolbar provides "),e("i",[t._v("start")]),t._v(" and "),e("i",[t._v("end")]),t._v(" templates to place content at these sections.")]),e("CodeHighlight",[t._v(' <Toolbar> <template #start> <Button label="New" icon="pi pi-plus" class="mr-2" /> <Button label="Upload" icon="pi pi-upload" class="p-button-success" /> <i class="pi pi-bars p-toolbar-separator mr-2" /> <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton> </template> <template #end> <Button icon="pi pi-search" class="mr-2" /> <Button icon="pi pi-calendar" class="p-button-success mr-2" /> <Button icon="pi pi-times" class="p-button-danger" /> </template> </Toolbar> ')]),e("h5",[t._v("Slots")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("start")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("end")]),e("td",[t._v("-")])])])])]),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-toolbar")]),e("td",[t._v("Main container element.")])]),e("tr",[e("td",[t._v("p-toolbar-group-left")]),e("td",[t._v("Left content container.")])]),e("tr",[e("td",[t._v("p-toolbar-group-right")]),e("td",[t._v("Right content container.")])])])])]),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/toolbar",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])]),e("CodeHighlight",[[t._v(' <Toolbar> <template #start> <Button label="New" icon="pi pi-plus" class="mr-2" /> <Button label="Upload" icon="pi pi-upload" class="p-button-success" /> <i class="pi pi-bars p-toolbar-separator mr-2" /> <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton> </template> <template #end> <Button icon="pi pi-search" class="mr-2" /> <Button icon="pi pi-calendar" class="p-button-success mr-2" /> <Button icon="pi pi-times" class="p-button-danger" /> </template> </Toolbar> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" export default { data() { return { items: [ { label: 'Update', icon: 'pi pi-refresh' }, { label: 'Delete', icon: 'pi pi-times' }, { label: 'Vue Website', icon: 'pi pi-external-link', command: () => { window.location.href = 'https://vuejs.org/' } }, { label: 'Upload', icon: 'pi pi-upload', command: () => { window.location.hash = \"/fileupload\" } } ] } } } ")])],1)],1)],1)}),[],!1,null,null).exports;t("default",a({data:function(){return{items:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"Vue Website",icon:"pi pi-external-link",command:function(){window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",command:function(){window.location.hash="/fileupload"}}]}},components:{ToolbarDoc:e}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("Toolbar",{scopedSlots:t._u([{key:"start",fn:function(){return[e("Button",{staticClass:"mr-2",attrs:{label:"New",icon:"pi pi-plus"}}),e("Button",{staticClass:"p-button-success",attrs:{label:"Upload",icon:"pi pi-upload"}}),e("i",{staticClass:"pi pi-bars p-toolbar-separator mr-2"}),e("SplitButton",{staticClass:"p-button-warning",attrs:{label:"Save",icon:"pi pi-check",model:t.items}})]},proxy:!0},{key:"end",fn:function(){return[e("Button",{staticClass:"mr-2",attrs:{icon:"pi pi-search"}}),e("Button",{staticClass:"p-button-success mr-2",attrs:{icon:"pi pi-calendar"}}),e("Button",{staticClass:"p-button-danger",attrs:{icon:"pi pi-times"}})]},proxy:!0}])})],1),e("ToolbarDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("Toolbar")]),e("p",[t._v("Toolbar is a grouping component for buttons and other content.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=ToolbarDemo-legacy-zII_7K9g.js.map
