System.register(["./app.component-legacy-cLUjg6K2.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(t,e){"use strict";var o;return{setters:[function(t){o=t.n},null,null,null,null],execute:function(){var e=o({name:"Documentation",data:function(){return{usageCode:{basic:"\nimport ConfirmationService from 'primevue2/confirmationservice';\nVue.use(ConfirmationService);\n\n//example application instance\nnew Vue({\n  router,\n  render: h => h(App)\n}).$mount('#app');\n        "},importCode:{basic:"\nimport ConfirmDialog from 'primevue2/confirmdialog';\n        "},baseCode:{basic:'\n<ConfirmDialog></ConfirmDialog>\n\n<Button @click="delete()" icon="pi pi-check" label="Confirm"></Button>\n        '},baseCode2:{basic:"\nexport default {\n\tmethods: {\n        delete() {\n            this.$confirm.require({\n                message: 'Are you sure you want to proceed?',\n                header: 'Confirmation',\n                icon: 'pi pi-exclamation-triangle',\n                accept: () => {\n                    //callback to execute when user confirms the action\n                },\n                reject: () => {\n                    //callback to execute when user rejects the action\n                }\n            });\n        },\n    }\n}\n        "},closeConfirmationCode:{basic:"\nexport default {\n\tmethods: {\n        discard() {\n            this.$confirm.close();\n        }\n    }\n}\n        "}}}},(function(){var t=this,e=t._self._c;return e("div",[e("h5",[t._v("ConfirmationService")]),t._m(0),e("DocSectionCode",{attrs:{code:t.usageCode,importCode:""}}),e("h5",[t._v("Import")]),e("DocSectionCode",{attrs:{code:t.importCode,importCode:""}}),e("h5",[t._v("Getting Started")]),t._m(1),e("DocSectionCode",{attrs:{code:t.baseCode}}),e("DocSectionCode",{attrs:{code:t.baseCode2,importCode:""}}),e("h5",[t._v("Close Confirmation")]),t._m(2),e("DocSectionCode",{attrs:{code:t.closeConfirmationCode,importCode:""}}),e("h5",[t._v("Confirmation Options")]),e("p",[t._v("ConfirmDialog can be customized with various options listed here.")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[t._m(3),e("tbody",[t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),e("tr",[e("td",[t._v("acceptLabel")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v(" Label of the accept button. Defaults to PrimeVue "),e("router-link",{attrs:{to:"/locale"}},[t._v("Locale")]),t._v(" configuration. ")],1)]),e("tr",[e("td",[t._v("rejectLabel")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v(" Label of the reject button. Defaults to PrimeVue "),e("router-link",{attrs:{to:"/locale"}},[t._v("Locale")]),t._v(" configuration. ")],1)]),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15)])])]),e("h5",[t._v("Properties")]),e("p",[t._v(" Any property as style and class are passed to the main container element. Following are the additional properties to configure the component. ")]),t._m(16),e("h5",[t._v("Styling")]),e("p",[t._v(" ConfirmDialog inherits all the classes from the Dialog component, visit "),e("router-link",{attrs:{to:"/dialog"}},[t._v("dialog")]),t._v(" for more information. ")],1),t._m(17),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1)}),[function(){var t=this,e=t._self._c;return e("p",[t._v(" ConfirmDialog is controlled via the "),e("i",[t._v("ConfirmationService")]),t._v(" that needs to be installed globally before the application instance is created. ")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" ConfirmDialog is displayed by calling the "),e("i",[t._v("require")]),t._v(" method of the "),e("i",[t._v("$confirm")]),t._v(" instance by passing the options to customize the Dialog. Suggested location of the Dialog is the main application component where it can be shared by any component within the application. ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("The dialog can also be hidden programmatically using the "),e("i",[t._v("close")]),t._v(" method.")])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("message")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Message of the confirmation.")])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("group")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v(" Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance. ")])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("icon")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Icon to display next to the message.")])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("header")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Header text of the dialog.")])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("accept")]),e("td",[t._v("Function")]),e("td",[t._v("null")]),e("td",[t._v("Callback to execute when action is confirmed.")])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("reject")]),e("td",[t._v("Function")]),e("td",[t._v("null")]),e("td",[t._v("Callback to execute when action is rejected.")])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("acceptIcon")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Icon of the accept button.")])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("rejectIcon")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Icon of the reject button.")])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("acceptClass")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Style class of the accept button.")])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("rejectClass")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Style class of the reject button.")])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("blockScroll")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Whether background scroll should be blocked when dialog is visible.")])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("defaultFocus")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v('Element to receive the focus when the dialog gets visible, valid values are "accept" and "reject".')])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("group")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v(" Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance. ")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-confirm-dialog")]),e("td",[t._v("Container element.")])])])])])}],!1,null,null).exports,n=o({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<ConfirmDialog></ConfirmDialog>\n<ConfirmDialog group="positionDialog"></ConfirmDialog>\n\n<div class="card">\n    <h5>Basic</h5>\n    <Button @click="confirm1()" icon="pi pi-check" label="Confirm" class="mr-2"></Button>\n    <Button @click="confirm2()" icon="pi pi-times" label="Delete"></Button>\n\n    <h5>Position</h5>\n    <div class="grid flex-column">\n        <div class="p-col">\n            <Button @click="confirmPosition(\'left\')" icon="pi pi-arrow-right" label="Left" class="p-button-help mr-2"></Button>\n            <Button @click="confirmPosition(\'right\')" icon="pi pi-arrow-left" label="Right" class="p-button-help"></Button>\n        </div>\n        <div class="p-col">\n            <Button @click="confirmPosition(\'topleft\')" icon="pi pi-arrow-down-right" label="TopLeft" class="p-button-warning mr-2"></Button>\n            <Button @click="confirmPosition(\'top\')" icon="pi pi-arrow-down" label="Top" class="p-button-warning mr-2"></Button>\n            <Button @click="confirmPosition(\'topright\')" icon="pi pi-arrow-down-left" label="TopRight" class="p-button-warning"></Button>\n        </div>\n        <div class="p-col">\n            <Button @click="confirmPosition(\'bottomleft\')" icon="pi pi-arrow-up-right" label="BottomLeft" class="p-button-success mr-2"></Button>\n            <Button @click="confirmPosition(\'bottom\')" icon="pi pi-arrow-up" label="Bottom" class="p-button-success mr-2"></Button>\n            <Button @click="confirmPosition(\'bottomright\')" icon="pi pi-arrow-up-left" label="BottomRight" class="p-button-success"></Button>\n        </div>\n    </div>\n</div>\n        '},sourceCode2:{basic:"\nexport default {\n    methods: {\n        confirm1() {\n            this.$confirm.require({\n                message: 'Are you sure you want to proceed?',\n                header: 'Confirmation',\n                icon: 'pi pi-exclamation-triangle',\n                accept: () => {\n                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});\n                },\n                reject: () => {\n                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});\n                }\n            });\n        },\n        confirm2() {\n            this.$confirm.require({\n                message: 'Do you want to delete this record?',\n                header: 'Delete Confirmation',\n                icon: 'pi pi-info-circle',\n                acceptClass: 'p-button-danger',\n                accept: () => {\n                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});\n                },\n                reject: () => {\n                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});\n                }\n            });\n        },\n        confirmPosition(position) {\n            this.$confirm.require({\n                key: 'positionDialog',\n                message: 'Do you want to delete this record?',\n                header: 'Delete Confirmation',\n                icon: 'pi pi-info-circle',\n                position: position,\n                accept: () => {\n                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});\n                },\n                reject: () => {\n                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});\n                }\n            });\n        }\n    }\n}\n        "}}}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("DocSectionCode",{attrs:{code:t.sourceCode1}}),e("DocSectionCode",{attrs:{code:t.sourceCode2,importCode:""}})],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/confirmdialog",target:"_blank",rel:"noopener noreferrer"}},[t("span",[this._v("View on GitHub")])])}],!1,null,null).exports,i=o({components:{Documentation:e,SourceCode:n}},(function(){var t=this._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("Documentation")],1),t("TabPanel",{attrs:{header:"Source"}},[t("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;t("default",o({methods:{confirm1:function(){var t=this;this.$confirm.require({message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){t.$toast.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:function(){t.$toast.add({severity:"info",summary:"Rejected",detail:"You have rejected",life:3e3})}})},confirm2:function(){var t=this;this.$confirm.require({message:"Do you want to delete this record?",header:"Delete Confirmation",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:function(){t.$toast.add({severity:"info",summary:"Confirmed",detail:"Record deleted",life:3e3})},reject:function(){t.$toast.add({severity:"info",summary:"Rejected",detail:"You have rejected",life:3e3})}})},confirmPosition:function(t){var e=this;this.$confirm.require({key:"positionDialog",message:"Do you want to delete this record?",header:"Delete Confirmation",icon:"pi pi-info-circle",position:t,accept:function(){e.$toast.add({severity:"info",summary:"Confirmed",detail:"Record deleted",life:3e3})},reject:function(){e.$toast.add({severity:"info",summary:"Rejected",detail:"You have rejected",life:3e3})}})}},components:{ConfirmDialogDoc:i}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("ConfirmDialog"),e("ConfirmDialog",{attrs:{group:"positionDialog"}}),e("div",{staticClass:"card"},[e("h5",[t._v("Basic")]),e("Button",{staticClass:"mr-2",attrs:{icon:"pi pi-check",label:"Confirm"},on:{click:function(e){return t.confirm1()}}}),e("Button",{attrs:{icon:"pi pi-times",label:"Delete"},on:{click:function(e){return t.confirm2()}}}),e("h5",[t._v("Position")]),e("div",{staticClass:"grid flex-column"},[e("div",{staticClass:"col"},[e("Button",{staticClass:"p-button-help mr-2",attrs:{icon:"pi pi-arrow-right",label:"Left"},on:{click:function(e){return t.confirmPosition("left")}}}),e("Button",{staticClass:"p-button-help",attrs:{icon:"pi pi-arrow-left",label:"Right"},on:{click:function(e){return t.confirmPosition("right")}}})],1),e("div",{staticClass:"col"},[e("Button",{staticClass:"p-button-warning mr-2",attrs:{icon:"pi pi-arrow-down-right",label:"TopLeft"},on:{click:function(e){return t.confirmPosition("topleft")}}}),e("Button",{staticClass:"p-button-warning mr-2",attrs:{icon:"pi pi-arrow-down",label:"Top"},on:{click:function(e){return t.confirmPosition("top")}}}),e("Button",{staticClass:"p-button-warning",attrs:{icon:"pi pi-arrow-down-left",label:"TopRight"},on:{click:function(e){return t.confirmPosition("topright")}}})],1),e("div",{staticClass:"col"},[e("Button",{staticClass:"p-button-success mr-2",attrs:{icon:"pi pi-arrow-up-right",label:"BottomLeft"},on:{click:function(e){return t.confirmPosition("bottomleft")}}}),e("Button",{staticClass:"p-button-success mr-2",attrs:{icon:"pi pi-arrow-up",label:"Bottom"},on:{click:function(e){return t.confirmPosition("bottom")}}}),e("Button",{staticClass:"p-button-success",attrs:{icon:"pi pi-arrow-up-left",label:"BottomRight"},on:{click:function(e){return t.confirmPosition("bottomright")}}})],1)])],1)],1),e("ConfirmDialogDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("ConfirmDialog")]),e("p",[t._v("ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=index-legacy-Bb1naxYV.js.map