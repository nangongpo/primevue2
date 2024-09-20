System.register(["./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(t,e){"use strict";var l;return{setters:[function(t){l=t.n},null,null,null],execute:function(){var e=document.createElement("style");e.textContent=".p-splitbutton[data-v-1c0dd0d6]{margin-right:.5rem;margin-bottom:.5rem}\n",document.head.appendChild(e);var o=l({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[t._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import SplitButton from 'primevue2/splitbutton'; ")]),e("h5",[t._v("Getting Started")]),e("p",[t._v("SplitButton has a default command button and a collection of additional options defined by the "),e("i",[t._v("model")]),t._v(" property.")]),e("CodeHighlight",{attrs:{lang:"js"}},[t._v(" export default { data() { return { items: [ { label: 'Update', icon: 'pi pi-refresh', command: () => { this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000}); } }, { label: 'Delete', icon: 'pi pi-times', command: () => { this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000}); } }, { label: 'Vue Website', icon: 'pi pi-external-link', command: () => { window.location.href = 'https://vuejs.org/' } }, { label: 'Upload', icon: 'pi pi-upload', command: () => { window.location.hash = \"/fileupload\" } } ] } } } ")]),e("CodeHighlight",[t._v(' <SplitButton label="Save" icon="pi pi-plus" :model="items"></SplitButton> ')]),e("h5",[t._v("MenuModel")]),e("p",[t._v("SplitButton uses the common MenuModel API to define the items, visit "),e("router-link",{attrs:{to:"/menumodel"}},[t._v("MenuModel API")]),t._v(" for details.")],1),e("h5",[t._v("Severity")]),e("p",[t._v("Different color options are available as severity levels.")]),e("ul",[e("li",[t._v(".p-button-secondary")]),e("li",[t._v(".p-button-success")]),e("li",[t._v(".p-button-info")]),e("li",[t._v(".p-button-warning")]),e("li",[t._v(".p-button-help")]),e("li",[t._v(".p-button-danger")])]),e("CodeHighlight",[t._v(' <SplitButton label="Primary" :model="items"></SplitButton> <SplitButton label="Secondary" :model="items" class="p-button-secondary"></SplitButton> <SplitButton label="Success" :model="items" class="p-button-success"></SplitButton> <SplitButton label="Info" :model="items" class="p-button-info"></SplitButton> <SplitButton label="Warning" :model="items" class="p-button-warning"></SplitButton> <SplitButton label="Help" :model="items" class="p-button-help"></SplitButton> <SplitButton label="Danger" :model="items" class="p-button-danger"></SplitButton> ')]),e("h5",[t._v("Raised and Rounded Buttons")]),e("p",[t._v('SplitButton can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.')]),e("CodeHighlight",[t._v(' <SplitButton label="Proceed" :model="items" class="p-button-raised p-button-rounded"></SplitButton> ')]),e("h5",[t._v("Properties")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("label")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Text of the button.")])]),e("tr",[e("td",[t._v("icon")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Name of the icon.")])]),e("tr",[e("td",[t._v("model")]),e("td",[t._v("object")]),e("td",[t._v("null")]),e("td",[t._v("MenuModel instance to define the overlay items.")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("When present, it specifies that the component should be disabled.")])]),e("tr",[e("td",[t._v("tabindex")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Index of the element in tabbing order.")])]),e("tr",[e("td",[t._v("autoZIndex")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Whether to automatically manage layering.")])]),e("tr",[e("td",[t._v("baseZIndex")]),e("td",[t._v("number")]),e("td",[t._v("0")]),e("td",[t._v("Base zIndex value to use in layering.")])]),e("tr",[e("td",[t._v("appendTo")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v('Id of the element or "body" for document where the overlay should be appended to.')])])])])]),e("h5",[t._v("Events")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("click")]),e("td",[t._v("event: Browser event")]),e("td",[t._v("Callback to invoke when main button is clicked.")])])])])]),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-splitbutton")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-splitbutton-button")]),e("td",[t._v("Dropdown button.")])]),e("tr",[e("td",[t._v("p-menu")]),e("td",[t._v("Overlay menu.")])])])])]),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/splitbutton",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])]),e("CodeHighlight",[[t._v(' <h3>Basic</h3> <SplitButton label="Primary" :model="items" class="mb-2"></SplitButton> <SplitButton label="Secondary" :model="items" class="p-button-secondary mb-2"></SplitButton> <SplitButton label="Success" :model="items" class="p-button-success mb-2"></SplitButton> <SplitButton label="Info" :model="items" class="p-button-info mb-2"></SplitButton> <SplitButton label="Warning" :model="items" class="p-button-warning mb-2"></SplitButton> <SplitButton label="Help" :model="items" class="p-button-help mb-2"></SplitButton> <SplitButton label="Danger" :model="items" class="p-button-danger mb-2"></SplitButton> <h5>Raised Buttons</h5> <SplitButton label="Primary" :model="items" class="p-button-raised mb-2"></SplitButton> <SplitButton label="Secondary" :model="items" class="p-button-raised p-button-secondary mb-2"></SplitButton> <SplitButton label="Success" :model="items" class="p-button-raised p-button-success mb-2"></SplitButton> <SplitButton label="Info" :model="items" class="p-button-raised p-button-info mb-2"></SplitButton> <SplitButton label="Warning" :model="items" class="p-button-raised p-button-warning mb-2"></SplitButton> <SplitButton label="Help" :model="items" class="p-button-raised p-button-help mb-2"></SplitButton> <SplitButton label="Danger" :model="items" class="p-button-raised p-button-danger mb-2"></SplitButton> <h5>Rounded Buttons</h5> <SplitButton label="Primary" :model="items" class="p-button-rounded mb-2"></SplitButton> <SplitButton label="Secondary" :model="items" class="p-button-rounded p-button-secondary mb-2"></SplitButton> <SplitButton label="Success" :model="items" class="p-button-rounded p-button-success mb-2"></SplitButton> <SplitButton label="Info" :model="items" class="p-button-rounded p-button-info mb-2"></SplitButton> <SplitButton label="Warning" :model="items" class="p-button-rounded p-button-warning mb-2"></SplitButton> <SplitButton label="Help" :model="items" class="p-button-rounded p-button-help mb-2"></SplitButton> <SplitButton label="Danger" :model="items" class="p-button-rounded p-button-danger mb-2"></SplitButton> <h5>Text Buttons</h5> <SplitButton label="Primary" :model="items" class="p-button-text mb-2"></SplitButton> <SplitButton label="Secondary" :model="items" class="p-button-text p-button-secondary mb-2"></SplitButton> <SplitButton label="Success" :model="items" class="p-button-text p-button-success mb-2"></SplitButton> <SplitButton label="Info" :model="items" class="p-button-text p-button-info mb-2"></SplitButton> <SplitButton label="Warning" :model="items" class="p-button-text p-button-warning mb-2"></SplitButton> <SplitButton label="Help" :model="items" class="p-button-text p-button-help mb-2"></SplitButton> <SplitButton label="Danger" :model="items" class="p-button-text p-button-danger mb-2"></SplitButton> <h5>Raised Text Buttons</h5> <SplitButton label="Primary" :model="items" class="p-button-raised p-button-text mb-2"></SplitButton> <SplitButton label="Secondary" :model="items" class="p-button-raised p-button-text p-button-secondary mb-2"></SplitButton> <SplitButton label="Success" :model="items" class="p-button-raised p-button-text p-button-success mb-2"></SplitButton> <SplitButton label="Info" :model="items" class="p-button-raised p-button-text p-button-info mb-2"></SplitButton> <SplitButton label="Warning" :model="items" class="p-button-raised p-button-text p-button-warning mb-2"></SplitButton> <SplitButton label="Help" :model="items" class="p-button-raised p-button-text p-button-help mb-2"></SplitButton> <SplitButton label="Danger" :model="items" class="p-button-raised p-button-text p-button-danger mb-2"></SplitButton> <h5>Outlined Buttons</h5> <SplitButton label="Primary" :model="items" class="p-button-outlined mb-2"></SplitButton> <SplitButton label="Secondary" :model="items" class="p-button-outlined p-button-secondary mb-2"></SplitButton> <SplitButton label="Success" :model="items" class="p-button-outlined p-button-success mb-2"></SplitButton> <SplitButton label="Info" :model="items" class="p-button-outlined p-button-info mb-2"></SplitButton> <SplitButton label="Warning" :model="items" class="p-button-outlined p-button-warning mb-2"></SplitButton> <SplitButton label="Help" :model="items" class="p-button-outlined p-button-help mb-2"></SplitButton> <SplitButton label="Danger" :model="items" class="p-button-outlined p-button-danger mb-2"></SplitButton> <h5>Sizes</h5> <SplitButton label="Small" :model="items" class="p-button-sm mb-2"></SplitButton> <SplitButton label="Normal" :model="items" class="mb-2"></SplitButton> <SplitButton label="Large" :model="items" class="p-button-lg mb-2"></SplitButton> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" export default { data() { return { items: [ { label: 'Update', icon: 'pi pi-refresh', command: () => { this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000}); } }, { label: 'Delete', icon: 'pi pi-times', command: () => { this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000}); } }, { label: 'Vue Website', icon: 'pi pi-external-link', command: () => { window.location.href = 'https://vuejs.org/' } }, { label: 'Upload', icon: 'pi pi-upload', command: () => { window.location.hash = \"/fileupload\" } } ] } }, methods: { save() { this.$toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000}); } } } ")]),e("CodeHighlight",{attrs:{lang:"css"}},[t._v(" .p-splitbutton { margin-right: .5rem; } ")])],1)],1)],1)}),[],!1,null,null).exports;t("default",l({data:function(){var t=this;return{items:[{label:"Update",icon:"pi pi-refresh",command:function(){t.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:function(){t.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{label:"Vue Website",icon:"pi pi-external-link",command:function(){window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",command:function(){window.location.hash="/fileupload"}}]}},methods:{save:function(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}},components:{SplitButtonDoc:o}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Basic")]),e("SplitButton",{attrs:{label:"Save",icon:"pi pi-plus",model:t.items},on:{click:t.save}}),e("h5",[t._v("Severities")]),e("SplitButton",{staticClass:"mb-2",attrs:{label:"Primary",model:t.items}}),e("SplitButton",{staticClass:"p-button-secondary mb-2",attrs:{label:"Secondary",model:t.items}}),e("SplitButton",{staticClass:"p-button-success mb-2",attrs:{label:"Success",model:t.items}}),e("SplitButton",{staticClass:"p-button-info mb-2",attrs:{label:"Info",model:t.items}}),e("SplitButton",{staticClass:"p-button-warning mb-2",attrs:{label:"Warning",model:t.items}}),e("SplitButton",{staticClass:"p-button-help mb-2",attrs:{label:"Help",model:t.items}}),e("SplitButton",{staticClass:"p-button-danger mb-2",attrs:{label:"Danger",model:t.items}}),e("h5",[t._v("Raised Buttons")]),e("SplitButton",{staticClass:"p-button-raised mb-2",attrs:{label:"Primary",model:t.items}}),e("SplitButton",{staticClass:"p-button-raised p-button-secondary mb-2",attrs:{label:"Secondary",model:t.items}}),e("SplitButton",{staticClass:"p-button-raised p-button-success mb-2",attrs:{label:"Success",model:t.items}}),e("SplitButton",{staticClass:"p-button-raised p-button-info mb-2",attrs:{label:"Info",model:t.items}}),e("SplitButton",{staticClass:"p-button-raised p-button-warning mb-2",attrs:{label:"Warning",model:t.items}}),e("SplitButton",{staticClass:"p-button-raised p-button-help mb-2",attrs:{label:"Help",model:t.items}}),e("SplitButton",{staticClass:"p-button-raised p-button-danger mb-2",attrs:{label:"Danger",model:t.items}}),e("h5",[t._v("Rounded Buttons")]),e("SplitButton",{staticClass:"p-button-rounded mb-2",attrs:{label:"Primary",model:t.items}}),e("SplitButton",{staticClass:"p-button-rounded p-button-secondary mb-2",attrs:{label:"Secondary",model:t.items}}),e("SplitButton",{staticClass:"p-button-rounded p-button-success mb-2",attrs:{label:"Success",model:t.items}}),e("SplitButton",{staticClass:"p-button-rounded p-button-info mb-2",attrs:{label:"Info",model:t.items}}),e("SplitButton",{staticClass:"p-button-rounded p-button-warning mb-2",attrs:{label:"Warning",model:t.items}}),e("SplitButton",{staticClass:"p-button-rounded p-button-help mb-2",attrs:{label:"Help",model:t.items}}),e("SplitButton",{staticClass:"p-button-rounded p-button-danger mb-2",attrs:{label:"Danger",model:t.items}}),e("h5",[t._v("Text Buttons")]),e("SplitButton",{staticClass:"p-button-text mb-2",attrs:{label:"Primary",model:t.items}}),e("SplitButton",{staticClass:"p-button-text p-button-secondary mb-2",attrs:{label:"Secondary",model:t.items}}),e("SplitButton",{staticClass:"p-button-text p-button-success mb-2",attrs:{label:"Success",model:t.items}}),e("SplitButton",{staticClass:"p-button-text p-button-info mb-2",attrs:{label:"Info",model:t.items}}),e("SplitButton",{staticClass:"p-button-text p-button-warning mb-2",attrs:{label:"Warning",model:t.items}}),e("SplitButton",{staticClass:"p-button-text p-button-help mb-2",attrs:{label:"Help",model:t.items}}),e("SplitButton",{staticClass:"p-button-text p-button-danger mb-2",attrs:{label:"Danger",model:t.items}}),e("h5",[t._v("Raised Text Buttons")]),e("SplitButton",{staticClass:"p-button-raised p-button-text mb-2",attrs:{label:"Primary",model:t.items}}),e("SplitButton",{staticClass:"p-button-raised p-button-text p-button-secondary mb-2",attrs:{label:"Secondary",model:t.items}}),e("SplitButton",{staticClass:"p-button-raised p-button-text p-button-success mb-2",attrs:{label:"Success",model:t.items}}),e("SplitButton",{staticClass:"p-button-raised p-button-text p-button-info mb-2",attrs:{label:"Info",model:t.items}}),e("SplitButton",{staticClass:"p-button-raised p-button-text p-button-warning mb-2",attrs:{label:"Warning",model:t.items}}),e("SplitButton",{staticClass:"p-button-raised p-button-text p-button-help mb-2",attrs:{label:"Help",model:t.items}}),e("SplitButton",{staticClass:"p-button-raised p-button-text p-button-danger mb-2",attrs:{label:"Danger",model:t.items}}),e("h5",[t._v("Outlined Buttons")]),e("SplitButton",{staticClass:"p-button-outlined mb-2",attrs:{label:"Primary",model:t.items}}),e("SplitButton",{staticClass:"p-button-outlined p-button-secondary mb-2",attrs:{label:"Secondary",model:t.items}}),e("SplitButton",{staticClass:"p-button-outlined p-button-success mb-2",attrs:{label:"Success",model:t.items}}),e("SplitButton",{staticClass:"p-button-outlined p-button-info mb-2",attrs:{label:"Info",model:t.items}}),e("SplitButton",{staticClass:"p-button-outlined p-button-warning mb-2",attrs:{label:"Warning",model:t.items}}),e("SplitButton",{staticClass:"p-button-outlined p-button-help mb-2",attrs:{label:"Help",model:t.items}}),e("SplitButton",{staticClass:"p-button-outlined p-button-danger mb-2",attrs:{label:"Danger",model:t.items}}),e("h5",[t._v("Sizes")]),e("SplitButton",{staticClass:"p-button-sm mb-2",attrs:{label:"Small",model:t.items}}),e("SplitButton",{staticClass:"mb-2",attrs:{label:"Normal",model:t.items}}),e("SplitButton",{staticClass:"p-button-lg mb-2",attrs:{label:"Large",model:t.items}})],1)]),e("SplitButtonDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("SplitButton")]),e("p",[t._v("SplitButton groups a set of commands in an overlay with a default command.")])])])}],!1,null,"1c0dd0d6").exports)}}}));
//# sourceMappingURL=SplitButtonDemo-legacy-D_fHzEEE.js.map
