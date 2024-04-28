import{n}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const a={};var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("ConfirmationService")]),t("p",[e._v("ConfirmDialog is controlled via the "),t("i",[e._v("ConfirmationService")]),e._v(" that needs to be installed globally before the application instance is created.")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import ConfirmationService from 'primevue2/confirmationservice'; Vue.use(ConfirmationService); //example application instance new Vue({ router, render: h => h(App) }).$mount('#app'); ")]),t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import ConfirmDialog from 'primevue2/confirmdialog'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("ConfirmDialog is displayed by calling the "),t("i",[e._v("require")]),e._v(" method of the "),t("i",[e._v("$confirm")]),e._v(" instance by passing the options to customize the Dialog. Suggested location of the Dialog is the main application component where it can be shared by any component within the application.")]),t("CodeHighlight",[e._v(' <ConfirmDialog></ConfirmDialog> <Button @click="delete()" icon="pi pi-check" label="Confirm"></Button> ')]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { methods: { delete() { this.$confirm.require({ message: 'Are you sure you want to proceed?', header: 'Confirmation', icon: 'pi pi-exclamation-triangle', accept: () => { //callback to execute when user confirms the action }, reject: () => { //callback to execute when user rejects the action } }); }, } } ")]),t("h5",[e._v("Close Confirmation")]),t("p",[e._v("The dialog can also be hidden programmatically using the "),t("i",[e._v("close")]),e._v(" method.")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { methods: { discard() { this.$confirm.close(); } } } ")]),t("h5",[e._v("Confirmation Options")]),t("p",[e._v("ConfirmDialog can be customized with various options listed here.")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("message")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Message of the confirmation.")])]),t("tr",[t("td",[e._v("group")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.")])]),t("tr",[t("td",[e._v("icon")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Icon to display next to the message.")])]),t("tr",[t("td",[e._v("header")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Header text of the dialog.")])]),t("tr",[t("td",[e._v("accept")]),t("td",[e._v("Function")]),t("td",[e._v("null")]),t("td",[e._v("Callback to execute when action is confirmed.")])]),t("tr",[t("td",[e._v("reject")]),t("td",[e._v("Function")]),t("td",[e._v("null")]),t("td",[e._v("Callback to execute when action is rejected.")])]),t("tr",[t("td",[e._v("acceptLabel")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Label of the accept button. Defaults to PrimeVue "),t("router-link",{attrs:{to:"/locale"}},[e._v("Locale")]),e._v(" configuration.")],1)]),t("tr",[t("td",[e._v("rejectLabel")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Label of the reject button. Defaults to PrimeVue "),t("router-link",{attrs:{to:"/locale"}},[e._v("Locale")]),e._v(" configuration.")],1)]),t("tr",[t("td",[e._v("acceptIcon")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Icon of the accept button.")])]),t("tr",[t("td",[e._v("rejectIcon")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Icon of the reject button.")])]),t("tr",[t("td",[e._v("acceptClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Style class of the accept button.")])]),t("tr",[t("td",[e._v("rejectClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Style class of the reject button.")])]),t("tr",[t("td",[e._v("blockScroll")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether background scroll should be blocked when dialog is visible.")])]),t("tr",[t("td",[e._v("defaultFocus")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v('Element to receive the focus when the dialog gets visible, valid values are "accept" and "reject".')])])])])]),t("h5",[e._v("Properties")]),t("p",[e._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("group")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("ConfirmDialog inherits all the classes from the Dialog component, visit "),t("router-link",{attrs:{to:"/dialog"}},[e._v("dialog")]),e._v(" for more information.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-confirm-dialog")]),t("td",[e._v("Container element.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/dialog",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <ConfirmDialog></ConfirmDialog> <ConfirmDialog group="positionDialog"></ConfirmDialog> <div class="card"> <h5>Basic</h5> <Button @click="confirm1()" icon="pi pi-check" label="Confirm" class="mr-2"></Button> <Button @click="confirm2()" icon="pi pi-times" label="Delete"></Button> <h5>Position</h5> <div class="grid flex-column"> <div class="p-col"> <Button @click="confirmPosition(\'left\')" icon="pi pi-arrow-right" label="Left" class="p-button-help mr-2"></Button> <Button @click="confirmPosition(\'right\')" icon="pi pi-arrow-left" label="Right" class="p-button-help"></Button> </div> <div class="p-col"> <Button @click="confirmPosition(\'topleft\')" icon="pi pi-arrow-down-right" label="TopLeft" class="p-button-warning mr-2"></Button> <Button @click="confirmPosition(\'top\')" icon="pi pi-arrow-down" label="Top" class="p-button-warning mr-2"></Button> <Button @click="confirmPosition(\'topright\')" icon="pi pi-arrow-down-left" label="TopRight" class="p-button-warning"></Button> </div> <div class="p-col"> <Button @click="confirmPosition(\'bottomleft\')" icon="pi pi-arrow-up-right" label="BottomLeft" class="p-button-success mr-2"></Button> <Button @click="confirmPosition(\'bottom\')" icon="pi pi-arrow-up" label="Bottom" class="p-button-success mr-2"></Button> <Button @click="confirmPosition(\'bottomright\')" icon="pi pi-arrow-up-left" label="BottomRight" class="p-button-success"></Button> </div> </div> </div> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { methods: { confirm1() { this.$confirm.require({ message: 'Are you sure you want to proceed?', header: 'Confirmation', icon: 'pi pi-exclamation-triangle', accept: () => { this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000}); }, reject: () => { this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000}); } }); }, confirm2() { this.$confirm.require({ message: 'Do you want to delete this record?', header: 'Delete Confirmation', icon: 'pi pi-info-circle', acceptClass: 'p-button-danger', accept: () => { this.$toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000}); }, reject: () => { this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000}); } }); }, confirmPosition(position) { this.$confirm.require({ key: 'positionDialog', message: 'Do you want to delete this record?', header: 'Delete Confirmation', icon: 'pi pi-info-circle', position: position, accept: () => { this.$toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000}); }, reject: () => { this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000}); } }); } } } ")])],1)],1)],1)},c=[],s=n(a,r,c,!1,null,null);const l=s.exports,d={methods:{confirm1(){this.$confirm.require({message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.$toast.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.$toast.add({severity:"info",summary:"Rejected",detail:"You have rejected",life:3e3})}})},confirm2(){this.$confirm.require({message:"Do you want to delete this record?",header:"Delete Confirmation",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:()=>{this.$toast.add({severity:"info",summary:"Confirmed",detail:"Record deleted",life:3e3})},reject:()=>{this.$toast.add({severity:"info",summary:"Rejected",detail:"You have rejected",life:3e3})}})},confirmPosition(o){this.$confirm.require({key:"positionDialog",message:"Do you want to delete this record?",header:"Delete Confirmation",icon:"pi pi-info-circle",position:o,accept:()=>{this.$toast.add({severity:"info",summary:"Confirmed",detail:"Record deleted",life:3e3})},reject:()=>{this.$toast.add({severity:"info",summary:"Rejected",detail:"You have rejected",life:3e3})}})}},components:{ConfirmDialogDoc:l}};var p=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("ConfirmDialog"),t("ConfirmDialog",{attrs:{group:"positionDialog"}}),t("div",{staticClass:"card"},[t("h5",[e._v("Basic")]),t("Button",{staticClass:"mr-2",attrs:{icon:"pi pi-check",label:"Confirm"},on:{click:function(i){return e.confirm1()}}}),t("Button",{attrs:{icon:"pi pi-times",label:"Delete"},on:{click:function(i){return e.confirm2()}}}),t("h5",[e._v("Position")]),t("div",{staticClass:"grid flex-column"},[t("div",{staticClass:"col"},[t("Button",{staticClass:"p-button-help mr-2",attrs:{icon:"pi pi-arrow-right",label:"Left"},on:{click:function(i){return e.confirmPosition("left")}}}),t("Button",{staticClass:"p-button-help",attrs:{icon:"pi pi-arrow-left",label:"Right"},on:{click:function(i){return e.confirmPosition("right")}}})],1),t("div",{staticClass:"col"},[t("Button",{staticClass:"p-button-warning mr-2",attrs:{icon:"pi pi-arrow-down-right",label:"TopLeft"},on:{click:function(i){return e.confirmPosition("topleft")}}}),t("Button",{staticClass:"p-button-warning mr-2",attrs:{icon:"pi pi-arrow-down",label:"Top"},on:{click:function(i){return e.confirmPosition("top")}}}),t("Button",{staticClass:"p-button-warning",attrs:{icon:"pi pi-arrow-down-left",label:"TopRight"},on:{click:function(i){return e.confirmPosition("topright")}}})],1),t("div",{staticClass:"col"},[t("Button",{staticClass:"p-button-success mr-2",attrs:{icon:"pi pi-arrow-up-right",label:"BottomLeft"},on:{click:function(i){return e.confirmPosition("bottomleft")}}}),t("Button",{staticClass:"p-button-success mr-2",attrs:{icon:"pi pi-arrow-up",label:"Bottom"},on:{click:function(i){return e.confirmPosition("bottom")}}}),t("Button",{staticClass:"p-button-success",attrs:{icon:"pi pi-arrow-up-left",label:"BottomRight"},on:{click:function(i){return e.confirmPosition("bottomright")}}})],1)])],1)],1),t("ConfirmDialogDoc")],1)},u=[function(){var o=this,e=o._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[o._v("ConfirmDialog")]),e("p",[o._v("ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.")])])])}],m=n(d,p,u,!1,null,null);const g=m.exports;export{g as default};
//# sourceMappingURL=ConfirmDialogDemo-BUI30_FS.js.map
