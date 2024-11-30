System.register(["./app.component-legacy-7lS-4wLG.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(t,e){"use strict";var s;return{setters:[function(t){s=t.n},null,null,null,null],execute:function(){var e=document.createElement("style");e.textContent="button[data-v-65a65a17]{min-width:10rem;margin-right:.5rem}@media screen and (max-width: 960px){button[data-v-65a65a17]{width:100%;margin-bottom:.5rem}}\n/*$vite$:1*/",document.head.appendChild(e);var o=s({name:"Documentation",data:function(){return{toastServiceCode:{basic:"\nimport ToastService from 'primevue2/toastservice';\nVue.use(ToastService);\n\n//example application instance\nnew Vue({\n    router,\n    render: h => h(App)\n}).$mount('#app');\n        "},importCode:{basic:"\nimport Toast from 'primevue2/toast';\n        "},baseCode:{basic:"\nthis.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});\n        "},positionCode:{basic:'\n<Toast />\n<Toast position="top-left" />\n<Toast position="top-center" />\n<Toast position="top-right" />\n<Toast position="center" />\n<Toast position="bottom-left" />\n<Toast position="bottom-center" />\n<Toast position="bottom-right" />\n        '},groupsCode:{basic:'\n<Toast />\n<Toast group="mykey" />\n        '},groupsCode2:{basic:"\nthis.$toast.add({severity:'success', summary: 'Default Message'});\nthis.$toast.add({severity:'success', summary: 'Specific Message', group: 'mykey'});\n        "},clearingMessagesCode:{basic:"\nthis.$toast.removeAllGroups();\n        "},templatingCode:{basic:'\n<Toast position="bottom-center" group="bc">\n    <template #message="slotProps">\n        <div class="flex flex-column">\n            <div class="text-center">\n                <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>\n                <h4>{{slotProps.message.summary}}</h4>\n                <p>{{slotProps.message.detail}}</p>\n            </div>\n            <div class="grid p-fluid">\n                <div class="col-6">\n                    <Button class="p-button-success" label="Yes" @click="onConfirm" />\n                </div>\n                <div class="col-6">\n                    <Button class="p-button-secondary" label="No" @click="onReject" />\n                </div>\n            </div>\n        </div>\n    </template>\n</Toast>\n        '},responsiveCode:{basic:"\n<Toast :breakpoints=\"{'920px': {width: '100%', right: '0', left: '0'}}\"></Toast>\n        "},constantsCode:{basic:"\nimport {ToastSeverity} from 'primevue2/api';\n\nexport default {\n    methods: {\n        showInfo() {\n            this.$toast.add({severity: ToastSeverity.INFO, summary: 'Info Message', detail:'Message Content', life: 3000});\n        }\n    }\n}\n        "}}}},(function(){var t=this,e=t._self._c;return e("div",[e("h5",[t._v("ToastService")]),t._m(0),e("DocSectionCode",{attrs:{code:t.toastServiceCode,importCode:""}}),e("h5",[t._v("Import")]),e("DocSectionCode",{attrs:{code:t.importCode,importCode:""}}),e("h5",[t._v("Getting Started")]),e("p",[t._v("Ideal location of a Toast is the main application template so that it can be used by any component within the application.")]),t._m(1),e("DocSectionCode",{attrs:{code:t.baseCode,importCode:""}}),e("h5",[t._v("Message API")]),t._m(2),e("h5",[t._v("MessageService API")]),t._m(3),e("h5",[t._v("Severities")]),e("p",[t._v("There are four possible values for the severity of a message. Info is the default.")]),t._m(4),e("h5",[t._v("Position")]),t._m(5),e("DocSectionCode",{attrs:{code:t.positionCode}}),e("h5",[t._v("Groups")]),e("p",[t._v("A message can be targeted to a specific Toast component if their group properties match. Messages without a group are forwarded to the default Toast component that does not have a group defined. ")]),e("DocSectionCode",{attrs:{code:t.groupsCode}}),e("DocSectionCode",{attrs:{code:t.groupsCode2,importCode:""}}),e("h5",[t._v("Clearing Messages")]),t._m(6),e("DocSectionCode",{attrs:{code:t.clearingMessagesCode,importCode:""}}),e("h5",[t._v("Templating")]),e("p",[t._v("Templating allows customizing the content where the message instance is available as the implicit variable.")]),e("DocSectionCode",{attrs:{code:t.templatingCode}}),e("h5",[t._v("Responsive")]),t._m(7),e("DocSectionCode",{attrs:{code:t.responsiveCode}}),e("h5",[t._v("Constants")]),e("p",[t._v("ToastSeverity constants API is provided to easily choose a severity of the message with typescript.")]),e("DocSectionCode",{attrs:{code:t.constantsCode,importCode:""}}),e("h5",[t._v("Properties")]),t._m(8),e("h5",[t._v("Slots")]),t._m(9),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),t._m(10),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1)}),[function(){var t=this,e=t._self._c;return e("p",[t._v("Toast messages are dynamically created using a "),e("i",[t._v("ToastService")]),t._v(" that needs to be installed globally before the application instance is created.")])},function(){var t=this,e=t._self._c;return e("p",[t._v("A single message is represented by the Message interface in PrimeVue that defines various properties such as severity, summary and detail. Messages are displayed by using the "),e("i",[t._v("add")]),t._v(" method of the "),e("b",[t._v("$toast")]),t._v(" property of the application.")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("severity")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Severity of the message.")])]),e("tr",[e("td",[t._v("summary")]),e("td",[t._v("element")]),e("td",[t._v("null")]),e("td",[t._v("Summary content of the message.")])]),e("tr",[e("td",[t._v("detail")]),e("td",[t._v("element")]),e("td",[t._v("null")]),e("td",[t._v("Detail content of the message.")])]),e("tr",[e("td",[t._v("closable")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Whether the message can be closed manually using the close icon.")])]),e("tr",[e("td",[t._v("life")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v("Delay in milliseconds to close the message automatically.")])]),e("tr",[e("td",[t._v("group")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Key of the Toast to display the message.")])]),e("tr",[e("td",[t._v("styleClass")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Style class of the message.")])]),e("tr",[e("td",[t._v("contentStyleClass")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Style class of the content.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("add")]),e("td",[t._v("message: Message instance")]),e("td",[t._v("Displays the message in a suitable Toast component.")])]),e("tr",[e("td",[t._v("removeGroup")]),e("td",[t._v("group: Name of the message group")]),e("td",[t._v("Clears the messages that belongs to the group.")])]),e("tr",[e("td",[t._v("removeAllGroup")]),e("td",[t._v("-")]),e("td",[t._v("Clears all the messages.")])])])])])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("success")]),e("li",[t._v("info")]),e("li",[t._v("warn")]),e("li",[t._v("error")])])},function(){var t=this,e=t._self._c;return e("p",[t._v("There are four positions available for the toast container defined by the "),e("i",[t._v("position")]),t._v(' property that defaults to "top-right". Other valid values are "top-left", "top-center", "bottom-left", "botton-center", "bottom-right" and "center". ')])},function(){var t=this,e=t._self._c;return e("p",[e("i",[t._v("removeGroup(group)")]),t._v(" clears the messages for a specific Toast whereas "),e("i",[t._v("removeAllGroups()")]),t._v(" method clears all messages.")])},function(){var t=this,e=t._self._c;return e("p",[t._v("Toast styling can be adjusted per screen size with the "),e("i",[t._v("breakpoints")]),t._v(" option. The value of "),e("i",[t._v("breakpoints")]),t._v(" should be an object literal whose keys are the maximum screen sizes and values are the styles per screen. In example below, width of the toast messages cover the whole page on screens whose widths is smaller than 921px.")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("group")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Unique identifier of a message group.")])]),e("tr",[e("td",[t._v("position")]),e("td",[t._v("string")]),e("td",[t._v("top-right")]),e("td",[t._v("Position of the toast in viewport.")])]),e("tr",[e("td",[t._v("autoZIndex")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Whether to automatically manage layering.")])]),e("tr",[e("td",[t._v("baseZIndex")]),e("td",[t._v("number")]),e("td",[t._v("0")]),e("td",[t._v("Base zIndex value to use in layering.")])]),e("tr",[e("td",[t._v("breakpoints")]),e("td",[t._v("object")]),e("td",[t._v("null")]),e("td",[t._v("Object literal to define styles per screen size.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("message")]),e("td",[t._v("-")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-toast")]),e("td",[t._v("Main container element.")])]),e("tr",[e("td",[t._v("p-toast-message")]),e("td",[t._v("Container of a message item.")])]),e("tr",[e("td",[t._v("p-toast-icon-close")]),e("td",[t._v("Close icon of a message.")])]),e("tr",[e("td",[t._v("p-toast-icon")]),e("td",[t._v("Severity icon.")])]),e("tr",[e("td",[t._v("p-toast-message-content")]),e("td",[t._v("Container of message texts.")])]),e("tr",[e("td",[t._v("p-toast-summary")]),e("td",[t._v("Summary of the message.")])]),e("tr",[e("td",[t._v("p-toast-detail")]),e("td",[t._v("Detail of the message.")])])])])])}],!1,null,null).exports,a=s({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<h5>Severities</h5>\n<Button label="Success" class="p-button-success" @click="showSuccess" />\n<Button label="Info" class="p-button-info" @click="showInfo" />\n<Button label="Warn" class="p-button-warning" @click="showWarn" />\n<Button label="Error" class="p-button-danger" @click="showError" />\n\n<h5>Positions</h5>\n<Button label="Top Left" class="mr-2" @click="showTopLeft" />\n<Button label="Bottom Left" class="p-button-warning" @click="showBottomLeft" />\n<Button label="Bottom Right" class="p-button-success" @click="showBottomRight" />\n\n<h5>Options</h5>\n<Button @click="showMultiple" label="Multiple" class="p-button-warning" />\n<Button @click="showSticky" label="Sticky" />\n\n<h5>Remove All</h5>\n<Button @click="clear" label="Clear" />\n        '},sourceCode2:{basic:"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tmessages: [],\n\t\t}\n\t},\n\tmethods: {\n\t\tshowSuccess() {\n            this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});\n        },\n        showInfo() {\n            this.$toast.add({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000});\n        },\n        showWarn() {\n            this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'Message Content', life: 3000});\n        },\n        showError() {\n            this.$toast.add({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});\n        },\n        showTopLeft() {\n            this.$toast.add({severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000});\n        },\n        showBottomLeft() {\n            this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'Message Content', group: 'bl', life: 3000});\n        },\n        showBottomRight() {\n            this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', group: 'br', life: 3000});\n        },\n        showSticky() {\n            this.$toast.add({severity: 'info', summary: 'Sticky Message', detail: 'Message Content'});\n        },\n        showMultiple() {\n            this.$toast.add({severity:'info', summary:'Message 1', detail:'Message 1 Content', life: 3000});\n            this.$toast.add({severity:'info', summary:'Message 2', detail:'Message 2 Content', life: 3000});\n            this.$toast.add({severity:'info', summary:'Message 3', detail:'Message 3 Content', life: 3000});\n        },\n        clear() {\n            this.$toast.removeAllGroups();\n        }\n\t}\n}\n        "}}}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("DocSectionCode",{attrs:{code:t.sourceCode1}}),e("DocSectionCode",{attrs:{code:t.sourceCode2,importCode:""}})],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/toast",target:"_blank",rel:"noopener noreferrer"}},[t("span",[this._v("View on GitHub")])])}],!1,null,null).exports,n=s({components:{Documentation:o,SourceCode:a}},(function(){var t=this._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("Documentation")],1),t("TabPanel",{attrs:{header:"Source"}},[t("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;t("default",s({data:function(){return{messages:[]}},methods:{showSuccess:function(){this.$toast.add({severity:"success",summary:"Success Message",detail:"Message Content",life:3e3})},showInfo:function(){this.$toast.add({severity:"info",summary:"Info Message",detail:"Message Content",life:3e3})},showWarn:function(){this.$toast.add({severity:"warn",summary:"Warn Message",detail:"Message Content",life:3e3})},showError:function(){this.$toast.add({severity:"error",summary:"Error Message",detail:"Message Content",life:3e3})},showTopLeft:function(){this.$toast.add({severity:"info",summary:"Info Message",detail:"Message Content",group:"tl",life:3e3})},showBottomLeft:function(){this.$toast.add({severity:"warn",summary:"Warn Message",detail:"Message Content",group:"bl",life:3e3})},showBottomRight:function(){this.$toast.add({severity:"success",summary:"Success Message",detail:"Message Content",group:"br",life:3e3})},showSticky:function(){this.$toast.add({severity:"info",summary:"Sticky Message",detail:"Message Content"})},showMultiple:function(){this.$toast.add({severity:"info",summary:"Message 1",detail:"Message 1 Content",life:3e3}),this.$toast.add({severity:"info",summary:"Message 2",detail:"Message 2 Content",life:3e3}),this.$toast.add({severity:"info",summary:"Message 3",detail:"Message 3 Content",life:3e3})},showTemplate:function(){this.$toast.add({severity:"warn",summary:"Are you sure?",detail:"Proceed to confirm",group:"bc"})},onConfirm:function(){this.$toast.removeGroup("bc")},onReject:function(){this.$toast.removeGroup("bc")},clear:function(){this.$toast.removeAllGroups()}},components:{ToastDoc:n}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("Toast",{attrs:{position:"bottom-center",group:"bc"},scopedSlots:t._u([{key:"message",fn:function(s){return[e("div",{staticClass:"flex flex-column"},[e("div",{staticClass:"text-center"},[e("i",{staticClass:"pi pi-exclamation-triangle",staticStyle:{"font-size":"3rem"}}),e("h4",[t._v(t._s(s.message.summary))]),e("p",[t._v(t._s(s.message.detail))])]),e("div",{staticClass:"grid p-fluid"},[e("div",{staticClass:"col-6"},[e("Button",{staticClass:"p-button-success",attrs:{label:"Yes"},on:{click:t.onConfirm}})],1),e("div",{staticClass:"col-6"},[e("Button",{staticClass:"p-button-secondary",attrs:{label:"No"},on:{click:t.onReject}})],1)])])]}}])}),e("div",{staticClass:"card"},[e("h5",[t._v("Severities")]),e("Button",{staticClass:"p-button-success",attrs:{label:"Success"},on:{click:t.showSuccess}}),e("Button",{staticClass:"p-button-info",attrs:{label:"Info"},on:{click:t.showInfo}}),e("Button",{staticClass:"p-button-warning",attrs:{label:"Warn"},on:{click:t.showWarn}}),e("Button",{staticClass:"p-button-danger",attrs:{label:"Error"},on:{click:t.showError}}),e("h5",[t._v("Positions")]),e("Button",{staticClass:"mr-2",attrs:{label:"Top Left"},on:{click:t.showTopLeft}}),e("Button",{staticClass:"p-button-warning",attrs:{label:"Bottom Left"},on:{click:t.showBottomLeft}}),e("Button",{staticClass:"p-button-success",attrs:{label:"Bottom Right"},on:{click:t.showBottomRight}}),e("h5",[t._v("Options")]),e("Button",{staticClass:"p-button-warning",attrs:{label:"Multiple"},on:{click:t.showMultiple}}),e("Button",{attrs:{label:"Sticky"},on:{click:t.showSticky}}),e("h5",[t._v("Remove All")]),e("Button",{attrs:{label:"Clear"},on:{click:t.clear}}),e("h5",[t._v("Template")]),e("Button",{attrs:{label:"Confirm"},on:{click:t.showTemplate}})],1)],1),e("ToastDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("Toast")]),e("p",[t._v("Toast is used to display messages in an overlay.")])])])}],!1,null,"65a65a17").exports)}}}));
//# sourceMappingURL=ToastDemo-legacy-CiYjtLTo.js.map
