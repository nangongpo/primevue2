import{n as o}from"./app.component-XqgfEEHA.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const i={};var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("ToastService")]),t("p",[e._v("Toast messages are dynamically created using a "),t("i",[e._v("ToastService")]),e._v(" that needs to be installed globally before the application instance is created.")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import ToastService from 'primevue2/toastservice'; Vue.use(ToastService); //example application instance new Vue({ router, render: h => h(App) }).$mount('#app'); ")]),t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import Toast from 'primevue2/toast'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("Ideal location of a Toast is the main application template so that it can be used by any component within the application.")]),t("p",[e._v("A single message is represented by the Message interface in PrimeVue that defines various properties such as severity, summary and detail. Messages are displayed by using the "),t("i",[e._v("add")]),e._v(" method of the "),t("b",[e._v("$toast")]),e._v(" property of the application.")]),t("CodeHighlight",{attrs:{lang:"js"}},[e._v(" this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000}); ")]),t("h5",[e._v("Message API")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("severity")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Severity of the message.")])]),t("tr",[t("td",[e._v("summary")]),t("td",[e._v("element")]),t("td",[e._v("null")]),t("td",[e._v("Summary content of the message.")])]),t("tr",[t("td",[e._v("detail")]),t("td",[e._v("element")]),t("td",[e._v("null")]),t("td",[e._v("Detail content of the message.")])]),t("tr",[t("td",[e._v("closable")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether the message can be closed manually using the close icon.")])]),t("tr",[t("td",[e._v("life")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v("Delay in milliseconds to close the message automatically.")])]),t("tr",[t("td",[e._v("group")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Key of the Toast to display the message.")])]),t("tr",[t("td",[e._v("styleClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Style class of the message.")])]),t("tr",[t("td",[e._v("contentStyleClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Style class of the content.")])])])])]),t("h5",[e._v("MessageService API")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("add")]),t("td",[e._v("message: Message instance")]),t("td",[e._v("Displays the message in a suitable Toast component.")])]),t("tr",[t("td",[e._v("removeGroup")]),t("td",[e._v("group: Name of the message group")]),t("td",[e._v("Clears the messages that belongs to the group.")])]),t("tr",[t("td",[e._v("removeAllGroup")]),t("td",[e._v("-")]),t("td",[e._v("Clears all the messages.")])])])])]),t("h5",[e._v("Severities")]),t("p",[e._v("There are four possible values for the severity of a message. Info is the default.")]),t("ul",[t("li",[e._v("success")]),t("li",[e._v("info")]),t("li",[e._v("warn")]),t("li",[e._v("error")])]),t("h5",[e._v("Position")]),t("p",[e._v("There are four positions available for the toast container defined by the "),t("i",[e._v("position")]),e._v(' property that defaults to "top-right". Other valid values are "top-left", "top-center", "bottom-left", "botton-center", "bottom-right" and "center". ')]),t("CodeHighlight",[e._v(' <Toast /> <Toast position="top-left" /> <Toast position="top-center" /> <Toast position="top-right" /> <Toast position="center" /> <Toast position="bottom-left" /> <Toast position="bottom-center" /> <Toast position="bottom-right" /> ')]),t("h5",[e._v("Groups")]),t("p",[e._v("A message can be targeted to a specific Toast component if their group properties match. Messages without a group are forwarded to the default Toast component that does not have a group defined. ")]),t("CodeHighlight",[e._v(' <Toast /> <Toast group="mykey" /> ')]),t("CodeHighlight",{attrs:{lang:"js"}},[e._v(" this.$toast.add({severity:'success', summary: 'Default Message'}); this.$toast.add({severity:'success', summary: 'Specific Message', group: 'mykey'}); ")]),t("h5",[e._v("Clearing Messages")]),t("p",[t("i",[e._v("removeGroup(group)")]),e._v(" clears the messages for a specific Toast whereas "),t("i",[e._v("removeAllGroups()")]),e._v(" method clears all messages.")]),t("CodeHighlight",{attrs:{lang:"js"}},[e._v(" this.$toast.removeAllGroups(); ")]),t("h5",[e._v("Templating")]),t("p",[e._v("Templating allows customizing the content where the message instance is available as the implicit variable.")]),t("CodeHighlight",[[e._v(' <Toast position="bottom-center" group="bc"> <template #message="slotProps"> <div class="flex flex-column"> <div class="text-center"> <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i> <h4>{{slotProps.message.summary}}</h4> <p>{{slotProps.message.detail}}</p> </div> <div class="grid p-fluid"> <div class="col-6"> <Button class="p-button-success" label="Yes" @click="onConfirm" /> </div> <div class="col-6"> <Button class="p-button-secondary" label="No" @click="onReject" /> </div> </div> </div> </template> </Toast> ')]],2),t("h5",[e._v("Responsive")]),t("p",[e._v("Toast styling can be adjusted per screen size with the "),t("i",[e._v("breakpoints")]),e._v(" option. The value of "),t("i",[e._v("breakpoints")]),e._v(" should be an object literal whose keys are the maximum screen sizes and values are the styles per screen. In example below, width of the toast messages cover the whole page on screens whose widths is smaller than 921px.")]),t("CodeHighlight",[e._v(" <Toast :breakpoints=\"{'920px': {width: '100%', right: '0', left: '0'}}\"></Toast> ")]),t("h5",[e._v("Constants")]),t("p",[e._v("ToastSeverity constants API is provided to easily choose a severity of the message with typescript.")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import {ToastSeverity} from 'primevue2/api'; export default { methods: { showInfo() { this.$toast.add({severity: ToastSeverity.INFO, summary: 'Info Message', detail:'Message Content', life: 3000}); } } } ")]),t("h5",[e._v("Properties")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("group")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Unique identifier of a message group.")])]),t("tr",[t("td",[e._v("position")]),t("td",[e._v("string")]),t("td",[e._v("top-right")]),t("td",[e._v("Position of the toast in viewport.")])]),t("tr",[t("td",[e._v("autoZIndex")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether to automatically manage layering.")])]),t("tr",[t("td",[e._v("baseZIndex")]),t("td",[e._v("number")]),t("td",[e._v("0")]),t("td",[e._v("Base zIndex value to use in layering.")])]),t("tr",[t("td",[e._v("breakpoints")]),t("td",[e._v("object")]),t("td",[e._v("null")]),t("td",[e._v("Object literal to define styles per screen size.")])])])])]),t("h5",[e._v("Slots")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("message")]),t("td",[e._v("-")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-toast")]),t("td",[e._v("Main container element.")])]),t("tr",[t("td",[e._v("p-toast-message")]),t("td",[e._v("Container of a message item.")])]),t("tr",[t("td",[e._v("p-toast-icon-close")]),t("td",[e._v("Close icon of a message.")])]),t("tr",[t("td",[e._v("p-toast-icon")]),t("td",[e._v("Severity icon.")])]),t("tr",[t("td",[e._v("p-toast-message-content")]),t("td",[e._v("Container of message texts.")])]),t("tr",[t("td",[e._v("p-toast-summary")]),t("td",[e._v("Summary of the message.")])]),t("tr",[t("td",[e._v("p-toast-detail")]),t("td",[e._v("Detail of the message.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/toast",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <h5>Severities</h5> <Button label="Success" class="p-button-success" @click="showSuccess" /> <Button label="Info" class="p-button-info" @click="showInfo" /> <Button label="Warn" class="p-button-warning" @click="showWarn" /> <Button label="Error" class="p-button-danger" @click="showError" /> <h5>Positions</h5> <Button label="Top Left" class="mr-2" @click="showTopLeft" /> <Button label="Bottom Left" class="p-button-warning" @click="showBottomLeft" /> <Button label="Bottom Right" class="p-button-success" @click="showBottomRight" /> <h5>Options</h5> <Button @click="showMultiple" label="Multiple" class="p-button-warning" /> <Button @click="showSticky" label="Sticky" /> <h5>Remove All</h5> <Button @click="clear" label="Clear" /> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data() { return { messages: [], } }, methods: { showSuccess() { this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000}); }, showInfo() { this.$toast.add({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000}); }, showWarn() { this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'Message Content', life: 3000}); }, showError() { this.$toast.add({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000}); }, showTopLeft() { this.$toast.add({severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000}); }, showBottomLeft() { this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'Message Content', group: 'bl', life: 3000}); }, showBottomRight() { this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', group: 'br', life: 3000}); }, showSticky() { this.$toast.add({severity: 'info', summary: 'Sticky Message', detail: 'Message Content'}); }, showMultiple() { this.$toast.add({severity:'info', summary:'Message 1', detail:'Message 1 Content', life: 3000}); this.$toast.add({severity:'info', summary:'Message 2', detail:'Message 2 Content', life: 3000}); this.$toast.add({severity:'info', summary:'Message 3', detail:'Message 3 Content', life: 3000}); }, clear() { this.$toast.removeAllGroups(); } } } ")])],1)],1)],1)},n=[],l=o(i,r,n,!1,null,null);const c=l.exports,d={data(){return{messages:[]}},methods:{showSuccess(){this.$toast.add({severity:"success",summary:"Success Message",detail:"Message Content",life:3e3})},showInfo(){this.$toast.add({severity:"info",summary:"Info Message",detail:"Message Content",life:3e3})},showWarn(){this.$toast.add({severity:"warn",summary:"Warn Message",detail:"Message Content",life:3e3})},showError(){this.$toast.add({severity:"error",summary:"Error Message",detail:"Message Content",life:3e3})},showTopLeft(){this.$toast.add({severity:"info",summary:"Info Message",detail:"Message Content",group:"tl",life:3e3})},showBottomLeft(){this.$toast.add({severity:"warn",summary:"Warn Message",detail:"Message Content",group:"bl",life:3e3})},showBottomRight(){this.$toast.add({severity:"success",summary:"Success Message",detail:"Message Content",group:"br",life:3e3})},showSticky(){this.$toast.add({severity:"info",summary:"Sticky Message",detail:"Message Content"})},showMultiple(){this.$toast.add({severity:"info",summary:"Message 1",detail:"Message 1 Content",life:3e3}),this.$toast.add({severity:"info",summary:"Message 2",detail:"Message 2 Content",life:3e3}),this.$toast.add({severity:"info",summary:"Message 3",detail:"Message 3 Content",life:3e3})},showTemplate(){this.$toast.add({severity:"warn",summary:"Are you sure?",detail:"Proceed to confirm",group:"bc"})},onConfirm(){this.$toast.removeGroup("bc")},onReject(){this.$toast.removeGroup("bc")},clear(){this.$toast.removeAllGroups()}},components:{ToastDoc:c}};var v=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("Toast",{attrs:{position:"bottom-center",group:"bc"},scopedSlots:e._u([{key:"message",fn:function(a){return[t("div",{staticClass:"flex flex-column"},[t("div",{staticClass:"text-center"},[t("i",{staticClass:"pi pi-exclamation-triangle",staticStyle:{"font-size":"3rem"}}),t("h4",[e._v(e._s(a.message.summary))]),t("p",[e._v(e._s(a.message.detail))])]),t("div",{staticClass:"grid p-fluid"},[t("div",{staticClass:"col-6"},[t("Button",{staticClass:"p-button-success",attrs:{label:"Yes"},on:{click:e.onConfirm}})],1),t("div",{staticClass:"col-6"},[t("Button",{staticClass:"p-button-secondary",attrs:{label:"No"},on:{click:e.onReject}})],1)])])]}}])}),t("div",{staticClass:"card"},[t("h5",[e._v("Severities")]),t("Button",{staticClass:"p-button-success",attrs:{label:"Success"},on:{click:e.showSuccess}}),t("Button",{staticClass:"p-button-info",attrs:{label:"Info"},on:{click:e.showInfo}}),t("Button",{staticClass:"p-button-warning",attrs:{label:"Warn"},on:{click:e.showWarn}}),t("Button",{staticClass:"p-button-danger",attrs:{label:"Error"},on:{click:e.showError}}),t("h5",[e._v("Positions")]),t("Button",{staticClass:"mr-2",attrs:{label:"Top Left"},on:{click:e.showTopLeft}}),t("Button",{staticClass:"p-button-warning",attrs:{label:"Bottom Left"},on:{click:e.showBottomLeft}}),t("Button",{staticClass:"p-button-success",attrs:{label:"Bottom Right"},on:{click:e.showBottomRight}}),t("h5",[e._v("Options")]),t("Button",{staticClass:"p-button-warning",attrs:{label:"Multiple"},on:{click:e.showMultiple}}),t("Button",{attrs:{label:"Sticky"},on:{click:e.showSticky}}),t("h5",[e._v("Remove All")]),t("Button",{attrs:{label:"Clear"},on:{click:e.clear}}),t("h5",[e._v("Template")]),t("Button",{attrs:{label:"Confirm"},on:{click:e.showTemplate}})],1)],1),t("ToastDoc")],1)},h=[function(){var s=this,e=s._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[s._v("Toast")]),e("p",[s._v("Toast is used to display messages in an overlay.")])])])}],m=o(d,v,h,!1,null,"6f1dfb51");const f=m.exports;export{f as default};
//# sourceMappingURL=ToastDemo-oD_lcxBZ.js.map