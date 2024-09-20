import{n as o}from"./app.component-XqgfEEHA.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const s={};var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import SplitButton from 'primevue2/splitbutton'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("SplitButton has a default command button and a collection of additional options defined by the "),t("i",[e._v("model")]),e._v(" property.")]),t("CodeHighlight",{attrs:{lang:"js"}},[e._v(" export default { data() { return { items: [ { label: 'Update', icon: 'pi pi-refresh', command: () => { this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000}); } }, { label: 'Delete', icon: 'pi pi-times', command: () => { this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000}); } }, { label: 'Vue Website', icon: 'pi pi-external-link', command: () => { window.location.href = 'https://vuejs.org/' } }, { label: 'Upload', icon: 'pi pi-upload', command: () => { window.location.hash = \"/fileupload\" } } ] } } } ")]),t("CodeHighlight",[e._v(' <SplitButton label="Save" icon="pi pi-plus" :model="items"></SplitButton> ')]),t("h5",[e._v("MenuModel")]),t("p",[e._v("SplitButton uses the common MenuModel API to define the items, visit "),t("router-link",{attrs:{to:"/menumodel"}},[e._v("MenuModel API")]),e._v(" for details.")],1),t("h5",[e._v("Severity")]),t("p",[e._v("Different color options are available as severity levels.")]),t("ul",[t("li",[e._v(".p-button-secondary")]),t("li",[e._v(".p-button-success")]),t("li",[e._v(".p-button-info")]),t("li",[e._v(".p-button-warning")]),t("li",[e._v(".p-button-help")]),t("li",[e._v(".p-button-danger")])]),t("CodeHighlight",[e._v(' <SplitButton label="Primary" :model="items"></SplitButton> <SplitButton label="Secondary" :model="items" class="p-button-secondary"></SplitButton> <SplitButton label="Success" :model="items" class="p-button-success"></SplitButton> <SplitButton label="Info" :model="items" class="p-button-info"></SplitButton> <SplitButton label="Warning" :model="items" class="p-button-warning"></SplitButton> <SplitButton label="Help" :model="items" class="p-button-help"></SplitButton> <SplitButton label="Danger" :model="items" class="p-button-danger"></SplitButton> ')]),t("h5",[e._v("Raised and Rounded Buttons")]),t("p",[e._v('SplitButton can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.')]),t("CodeHighlight",[e._v(' <SplitButton label="Proceed" :model="items" class="p-button-raised p-button-rounded"></SplitButton> ')]),t("h5",[e._v("Properties")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("label")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Text of the button.")])]),t("tr",[t("td",[e._v("icon")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Name of the icon.")])]),t("tr",[t("td",[e._v("model")]),t("td",[e._v("object")]),t("td",[e._v("null")]),t("td",[e._v("MenuModel instance to define the overlay items.")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When present, it specifies that the component should be disabled.")])]),t("tr",[t("td",[e._v("tabindex")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Index of the element in tabbing order.")])]),t("tr",[t("td",[e._v("autoZIndex")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether to automatically manage layering.")])]),t("tr",[t("td",[e._v("baseZIndex")]),t("td",[e._v("number")]),t("td",[e._v("0")]),t("td",[e._v("Base zIndex value to use in layering.")])]),t("tr",[t("td",[e._v("appendTo")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v('Id of the element or "body" for document where the overlay should be appended to.')])])])])]),t("h5",[e._v("Events")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("click")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke when main button is clicked.")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-splitbutton")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-splitbutton-button")]),t("td",[e._v("Dropdown button.")])]),t("tr",[t("td",[e._v("p-menu")]),t("td",[e._v("Overlay menu.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/splitbutton",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <h3>Basic</h3> <SplitButton label="Primary" :model="items" class="mb-2"></SplitButton> <SplitButton label="Secondary" :model="items" class="p-button-secondary mb-2"></SplitButton> <SplitButton label="Success" :model="items" class="p-button-success mb-2"></SplitButton> <SplitButton label="Info" :model="items" class="p-button-info mb-2"></SplitButton> <SplitButton label="Warning" :model="items" class="p-button-warning mb-2"></SplitButton> <SplitButton label="Help" :model="items" class="p-button-help mb-2"></SplitButton> <SplitButton label="Danger" :model="items" class="p-button-danger mb-2"></SplitButton> <h5>Raised Buttons</h5> <SplitButton label="Primary" :model="items" class="p-button-raised mb-2"></SplitButton> <SplitButton label="Secondary" :model="items" class="p-button-raised p-button-secondary mb-2"></SplitButton> <SplitButton label="Success" :model="items" class="p-button-raised p-button-success mb-2"></SplitButton> <SplitButton label="Info" :model="items" class="p-button-raised p-button-info mb-2"></SplitButton> <SplitButton label="Warning" :model="items" class="p-button-raised p-button-warning mb-2"></SplitButton> <SplitButton label="Help" :model="items" class="p-button-raised p-button-help mb-2"></SplitButton> <SplitButton label="Danger" :model="items" class="p-button-raised p-button-danger mb-2"></SplitButton> <h5>Rounded Buttons</h5> <SplitButton label="Primary" :model="items" class="p-button-rounded mb-2"></SplitButton> <SplitButton label="Secondary" :model="items" class="p-button-rounded p-button-secondary mb-2"></SplitButton> <SplitButton label="Success" :model="items" class="p-button-rounded p-button-success mb-2"></SplitButton> <SplitButton label="Info" :model="items" class="p-button-rounded p-button-info mb-2"></SplitButton> <SplitButton label="Warning" :model="items" class="p-button-rounded p-button-warning mb-2"></SplitButton> <SplitButton label="Help" :model="items" class="p-button-rounded p-button-help mb-2"></SplitButton> <SplitButton label="Danger" :model="items" class="p-button-rounded p-button-danger mb-2"></SplitButton> <h5>Text Buttons</h5> <SplitButton label="Primary" :model="items" class="p-button-text mb-2"></SplitButton> <SplitButton label="Secondary" :model="items" class="p-button-text p-button-secondary mb-2"></SplitButton> <SplitButton label="Success" :model="items" class="p-button-text p-button-success mb-2"></SplitButton> <SplitButton label="Info" :model="items" class="p-button-text p-button-info mb-2"></SplitButton> <SplitButton label="Warning" :model="items" class="p-button-text p-button-warning mb-2"></SplitButton> <SplitButton label="Help" :model="items" class="p-button-text p-button-help mb-2"></SplitButton> <SplitButton label="Danger" :model="items" class="p-button-text p-button-danger mb-2"></SplitButton> <h5>Raised Text Buttons</h5> <SplitButton label="Primary" :model="items" class="p-button-raised p-button-text mb-2"></SplitButton> <SplitButton label="Secondary" :model="items" class="p-button-raised p-button-text p-button-secondary mb-2"></SplitButton> <SplitButton label="Success" :model="items" class="p-button-raised p-button-text p-button-success mb-2"></SplitButton> <SplitButton label="Info" :model="items" class="p-button-raised p-button-text p-button-info mb-2"></SplitButton> <SplitButton label="Warning" :model="items" class="p-button-raised p-button-text p-button-warning mb-2"></SplitButton> <SplitButton label="Help" :model="items" class="p-button-raised p-button-text p-button-help mb-2"></SplitButton> <SplitButton label="Danger" :model="items" class="p-button-raised p-button-text p-button-danger mb-2"></SplitButton> <h5>Outlined Buttons</h5> <SplitButton label="Primary" :model="items" class="p-button-outlined mb-2"></SplitButton> <SplitButton label="Secondary" :model="items" class="p-button-outlined p-button-secondary mb-2"></SplitButton> <SplitButton label="Success" :model="items" class="p-button-outlined p-button-success mb-2"></SplitButton> <SplitButton label="Info" :model="items" class="p-button-outlined p-button-info mb-2"></SplitButton> <SplitButton label="Warning" :model="items" class="p-button-outlined p-button-warning mb-2"></SplitButton> <SplitButton label="Help" :model="items" class="p-button-outlined p-button-help mb-2"></SplitButton> <SplitButton label="Danger" :model="items" class="p-button-outlined p-button-danger mb-2"></SplitButton> <h5>Sizes</h5> <SplitButton label="Small" :model="items" class="p-button-sm mb-2"></SplitButton> <SplitButton label="Normal" :model="items" class="mb-2"></SplitButton> <SplitButton label="Large" :model="items" class="p-button-lg mb-2"></SplitButton> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data() { return { items: [ { label: 'Update', icon: 'pi pi-refresh', command: () => { this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000}); } }, { label: 'Delete', icon: 'pi pi-times', command: () => { this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000}); } }, { label: 'Vue Website', icon: 'pi pi-external-link', command: () => { window.location.href = 'https://vuejs.org/' } }, { label: 'Upload', icon: 'pi pi-upload', command: () => { window.location.hash = \"/fileupload\" } } ] } }, methods: { save() { this.$toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000}); } } } ")]),t("CodeHighlight",{attrs:{lang:"css"}},[e._v(" .p-splitbutton { margin-right: .5rem; } ")])],1)],1)],1)},a=[],i=o(s,n,a,!1,null,null);const u=i.exports,p={data(){return{items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",command:()=>{window.location.hash="/fileupload"}}]}},methods:{save(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}},components:{SplitButtonDoc:u}};var d=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Basic")]),t("SplitButton",{attrs:{label:"Save",icon:"pi pi-plus",model:e.items},on:{click:e.save}}),t("h5",[e._v("Severities")]),t("SplitButton",{staticClass:"mb-2",attrs:{label:"Primary",model:e.items}}),t("SplitButton",{staticClass:"p-button-secondary mb-2",attrs:{label:"Secondary",model:e.items}}),t("SplitButton",{staticClass:"p-button-success mb-2",attrs:{label:"Success",model:e.items}}),t("SplitButton",{staticClass:"p-button-info mb-2",attrs:{label:"Info",model:e.items}}),t("SplitButton",{staticClass:"p-button-warning mb-2",attrs:{label:"Warning",model:e.items}}),t("SplitButton",{staticClass:"p-button-help mb-2",attrs:{label:"Help",model:e.items}}),t("SplitButton",{staticClass:"p-button-danger mb-2",attrs:{label:"Danger",model:e.items}}),t("h5",[e._v("Raised Buttons")]),t("SplitButton",{staticClass:"p-button-raised mb-2",attrs:{label:"Primary",model:e.items}}),t("SplitButton",{staticClass:"p-button-raised p-button-secondary mb-2",attrs:{label:"Secondary",model:e.items}}),t("SplitButton",{staticClass:"p-button-raised p-button-success mb-2",attrs:{label:"Success",model:e.items}}),t("SplitButton",{staticClass:"p-button-raised p-button-info mb-2",attrs:{label:"Info",model:e.items}}),t("SplitButton",{staticClass:"p-button-raised p-button-warning mb-2",attrs:{label:"Warning",model:e.items}}),t("SplitButton",{staticClass:"p-button-raised p-button-help mb-2",attrs:{label:"Help",model:e.items}}),t("SplitButton",{staticClass:"p-button-raised p-button-danger mb-2",attrs:{label:"Danger",model:e.items}}),t("h5",[e._v("Rounded Buttons")]),t("SplitButton",{staticClass:"p-button-rounded mb-2",attrs:{label:"Primary",model:e.items}}),t("SplitButton",{staticClass:"p-button-rounded p-button-secondary mb-2",attrs:{label:"Secondary",model:e.items}}),t("SplitButton",{staticClass:"p-button-rounded p-button-success mb-2",attrs:{label:"Success",model:e.items}}),t("SplitButton",{staticClass:"p-button-rounded p-button-info mb-2",attrs:{label:"Info",model:e.items}}),t("SplitButton",{staticClass:"p-button-rounded p-button-warning mb-2",attrs:{label:"Warning",model:e.items}}),t("SplitButton",{staticClass:"p-button-rounded p-button-help mb-2",attrs:{label:"Help",model:e.items}}),t("SplitButton",{staticClass:"p-button-rounded p-button-danger mb-2",attrs:{label:"Danger",model:e.items}}),t("h5",[e._v("Text Buttons")]),t("SplitButton",{staticClass:"p-button-text mb-2",attrs:{label:"Primary",model:e.items}}),t("SplitButton",{staticClass:"p-button-text p-button-secondary mb-2",attrs:{label:"Secondary",model:e.items}}),t("SplitButton",{staticClass:"p-button-text p-button-success mb-2",attrs:{label:"Success",model:e.items}}),t("SplitButton",{staticClass:"p-button-text p-button-info mb-2",attrs:{label:"Info",model:e.items}}),t("SplitButton",{staticClass:"p-button-text p-button-warning mb-2",attrs:{label:"Warning",model:e.items}}),t("SplitButton",{staticClass:"p-button-text p-button-help mb-2",attrs:{label:"Help",model:e.items}}),t("SplitButton",{staticClass:"p-button-text p-button-danger mb-2",attrs:{label:"Danger",model:e.items}}),t("h5",[e._v("Raised Text Buttons")]),t("SplitButton",{staticClass:"p-button-raised p-button-text mb-2",attrs:{label:"Primary",model:e.items}}),t("SplitButton",{staticClass:"p-button-raised p-button-text p-button-secondary mb-2",attrs:{label:"Secondary",model:e.items}}),t("SplitButton",{staticClass:"p-button-raised p-button-text p-button-success mb-2",attrs:{label:"Success",model:e.items}}),t("SplitButton",{staticClass:"p-button-raised p-button-text p-button-info mb-2",attrs:{label:"Info",model:e.items}}),t("SplitButton",{staticClass:"p-button-raised p-button-text p-button-warning mb-2",attrs:{label:"Warning",model:e.items}}),t("SplitButton",{staticClass:"p-button-raised p-button-text p-button-help mb-2",attrs:{label:"Help",model:e.items}}),t("SplitButton",{staticClass:"p-button-raised p-button-text p-button-danger mb-2",attrs:{label:"Danger",model:e.items}}),t("h5",[e._v("Outlined Buttons")]),t("SplitButton",{staticClass:"p-button-outlined mb-2",attrs:{label:"Primary",model:e.items}}),t("SplitButton",{staticClass:"p-button-outlined p-button-secondary mb-2",attrs:{label:"Secondary",model:e.items}}),t("SplitButton",{staticClass:"p-button-outlined p-button-success mb-2",attrs:{label:"Success",model:e.items}}),t("SplitButton",{staticClass:"p-button-outlined p-button-info mb-2",attrs:{label:"Info",model:e.items}}),t("SplitButton",{staticClass:"p-button-outlined p-button-warning mb-2",attrs:{label:"Warning",model:e.items}}),t("SplitButton",{staticClass:"p-button-outlined p-button-help mb-2",attrs:{label:"Help",model:e.items}}),t("SplitButton",{staticClass:"p-button-outlined p-button-danger mb-2",attrs:{label:"Danger",model:e.items}}),t("h5",[e._v("Sizes")]),t("SplitButton",{staticClass:"p-button-sm mb-2",attrs:{label:"Small",model:e.items}}),t("SplitButton",{staticClass:"mb-2",attrs:{label:"Normal",model:e.items}}),t("SplitButton",{staticClass:"p-button-lg mb-2",attrs:{label:"Large",model:e.items}})],1)]),t("SplitButtonDoc")],1)},b=[function(){var l=this,e=l._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[l._v("SplitButton")]),e("p",[l._v("SplitButton groups a set of commands in an overlay with a default command.")])])])}],m=o(p,d,b,!1,null,"1c0dd0d6");const v=m.exports;export{v as default};
//# sourceMappingURL=SplitButtonDemo-KKwotnzn.js.map
