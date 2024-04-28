import{n}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const i={};var r=function(){var s=this,e=s._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[s._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[s._v(" import Message from 'primevue2/message'; ")]),e("h5",[s._v("Getting Started")]),e("p",[s._v("Message component requires a content to display.")]),e("CodeHighlight",[s._v(" <Message>Welcome to PrimeVue</Message> ")]),e("p",[s._v("Multiple messages can be displayed using the standard v-for directive.")]),e("CodeHighlight",[[s._v(' <Message v-for="msg of messages" :severity="msg.severity" :key="msg.content">{{msg.content}}</Message> ')]],2),e("CodeHighlight",{attrs:{lang:"js"}},[s._v(" data() { return { messages: [ {severity: 'info', content: 'Dynamic Info Message'}, {severity: 'success', content: 'Dynamic Success Message'}, {severity: 'warn', content: 'Dynamic Warning Message'} ] } } ")]),e("h5",[s._v("Severities")]),e("p",[s._v('There are four possible values for the severity of a message. Default one is "info".')]),e("ul",[e("li",[s._v("success")]),e("li",[s._v("info")]),e("li",[s._v("warn")]),e("li",[s._v("error")])]),e("h5",[s._v("Closable")]),e("p",[s._v("Messages are closable by default resulting in a close icon being displayed on top right corner. In order to disable closable messages, set "),e("i",[s._v("closable")]),s._v(" to false.")]),e("CodeHighlight",[s._v(' <Message severity="success" :closable="false">Order Submitted</Message> ')]),e("h5",[s._v("Sticky")]),e("p",[s._v("Messages are sticky by default, if you require them to be cleared automatically, disable "),e("i",[s._v("sticky")]),s._v(" property and optionally configure the "),e("i",[s._v("life")]),s._v(" property to specify how long the message should be displayed which is 3000 ms by default.")]),e("CodeHighlight",[s._v(' <Message severity="warn" :life="5000" :sticky="false">This message will hide in 5 seconds.</Message> ')]),e("h5",[s._v("Inline Message Component")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[s._v(" import InlineMessage from 'primevue2/inlinemessage'; ")]),e("p",[s._v("InlineMessage component is useful in cases where a single message needs to be displayed related to an element such as forms. It has one property, "),e("i",[s._v("severity")]),s._v(" of the message.")]),e("CodeHighlight",[s._v(' <InputText placeholder="Username" class="p-invalid" /> <InlineMessage>Field is required</InlineMessage> ')]),e("h5",[s._v("Properties of Message")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[s._v("Name")]),e("th",[s._v("Type")]),e("th",[s._v("Default")]),e("th",[s._v("Description")])])]),e("tbody",[e("tr",[e("td",[s._v("severity")]),e("td",[s._v("string")]),e("td",[s._v("info")]),e("td",[s._v("Severity level of the message.")])]),e("tr",[e("td",[s._v("closable")]),e("td",[s._v("boolean")]),e("td",[s._v("true")]),e("td",[s._v("Whether the message can be closed manually using the close icon.")])]),e("tr",[e("td",[s._v("sticky")]),e("td",[s._v("element")]),e("td",[s._v("null")]),e("td",[s._v("When enabled, message is not removed automatically.")])]),e("tr",[e("td",[s._v("life")]),e("td",[s._v("number")]),e("td",[s._v("3000")]),e("td",[s._v("Delay in milliseconds to close the message automatically.")])]),e("tr",[e("td",[s._v("icon")]),e("td",[s._v("string")]),e("td",[s._v("null")]),e("td",[s._v("Display a custom icon for the message.")])])])])]),e("h5",[s._v("Properties of InlineMessage")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[s._v("Name")]),e("th",[s._v("Type")]),e("th",[s._v("Default")]),e("th",[s._v("Description")])])]),e("tbody",[e("tr",[e("td",[s._v("severity")]),e("td",[s._v("string")]),e("td",[s._v("info")]),e("td",[s._v("Severity level of the message.")])])])])]),e("h5",[s._v("Events of Message")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[s._v("Name")]),e("th",[s._v("Parameters")]),e("th",[s._v("Description")])])]),e("tbody",[e("tr",[e("td",[s._v("close")]),e("td",[s._v("event: Browser event")]),e("td",[s._v("Callback to invoke when a message is closed.")])])])])]),e("h5",[s._v("Styling")]),e("p",[s._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[s._v("theming")]),s._v(" page.")],1),e("strong",[s._v("Message")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[s._v("Name")]),e("th",[s._v("Element")])])]),e("tbody",[e("tr",[e("td",[s._v("p-messages")]),e("td",[s._v("Container element.")])]),e("tr",[e("td",[s._v("p-messages-info")]),e("td",[s._v("Container element when displaying info messages.")])]),e("tr",[e("td",[s._v("p-messages-warn")]),e("td",[s._v("Container element when displaying warning messages.")])]),e("tr",[e("td",[s._v("p-messages-error")]),e("td",[s._v("Container element when displaying error messages.")])]),e("tr",[e("td",[s._v("p-messages-success")]),e("td",[s._v("Container element when displaying success messages.")])]),e("tr",[e("td",[s._v("p-messages-close")]),e("td",[s._v("Close icon.")])]),e("tr",[e("td",[s._v("p-messages-icon")]),e("td",[s._v("Severity icon.")])]),e("tr",[e("td",[s._v("p-messages-text")]),e("td",[s._v("Content of a message.")])])])])]),e("strong",[s._v("InlineMessage")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[s._v("Name")]),e("th",[s._v("Element")])])]),e("tbody",[e("tr",[e("td",[s._v("p-inline-message")]),e("td",[s._v("Container element.")])]),e("tr",[e("td",[s._v("p-inline-message-info")]),e("td",[s._v("Container element when displaying info messages.")])]),e("tr",[e("td",[s._v("p-inline-message-warn")]),e("td",[s._v("Container element when displaying warning messages.")])]),e("tr",[e("td",[s._v("p-inline-message-error")]),e("td",[s._v("Container element when displaying error messages.")])]),e("tr",[e("td",[s._v("p-inline-message-success")]),e("td",[s._v("Container element when displaying success messages.")])]),e("tr",[e("td",[s._v("p-inline-message-icon")]),e("td",[s._v("Severity icon.")])]),e("tr",[e("td",[s._v("p-inline-message-text")]),e("td",[s._v("Content of a message.")])])])])]),e("h5",[s._v("Dependencies")]),e("p",[s._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/message",target:"_blank",rel:"noopener noreferrer"}},[e("span",[s._v("View on GitHub")])]),e("CodeHighlight",[[s._v(' <h5>Severities</h5> <Message severity="success">Success Message Content</Message> <Message severity="info">Info Message Content</Message> <Message severity="warn">Warning Message Content</Message> <Message severity="error">Error Message Content</Message> <h5>Custom Icon</h5> <Message severity="info" icon="pi-send">Info Message Content</Message> <h5>Dynamic</h5> <Button label="Show" @click="addMessages()" /> <Button label="Clear" @click="removeMessages()" class="p-button-secondary"/> <transition-group name="p-messages" tag="div"> <Message v-for="msg of messages" :severity="msg.severity" :key="msg.content">{{msg.content}}</Message> </transition-group> <h5>Auto Dismiss</h5> <Message severity="warn" :life="10000" :sticky="false">This message will hide in 10 seconds.</Message> <h5>Validation Message</h5> <div class="formgroup-inline" style="margin-bottom:.5rem"> <Label for="username" class="p-sr-only">Username</Label> <InputText id="username" placeholder="Username" class="p-invalid" /> <InlineMessage>Username is required</InlineMessage> </div> <div class="formgroup-inline"> <Label for="email" class="p-sr-only">email</Label> <InputText id="email" placeholder="Email" class="p-invalid" /> <InlineMessage /> </div> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[s._v(" export default { data() { return { messages: [], count: 0 } }, methods: { addMessages() { this.messages = [ {severity: 'info', content: 'Dynamic Info Message'}, {severity: 'success', content: 'Dynamic Success Message'}, {severity: 'warn', content: 'Dynamic Warning Message'} ] }, removeMessages() { this.messages = null; } } } ")]),e("CodeHighlight",{attrs:{lang:"css"}},[s._v(" button.p-button { margin-right: .5rem; } .p-inputtext { margin-right: .25rem; } ")])],1)],1)],1)},o=[],l=n(i,r,o,!1,null,null);const v=l.exports,c={data(){return{messages:[],count:0}},methods:{addMessages(){this.messages=[{severity:"info",content:"Dynamic Info Message"},{severity:"success",content:"Dynamic Success Message"},{severity:"warn",content:"Dynamic Warning Message"}]},removeMessages(){this.messages=null}},components:{MessageDoc:v}};var g=function(){var s=this,e=s._self._c;return e("div",[s._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[s._v("Severities")]),e("Message",{attrs:{severity:"success"}},[s._v("Success Message Content")]),e("Message",{attrs:{severity:"info"}},[s._v("Info Message Content")]),e("Message",{attrs:{severity:"warn"}},[s._v("Warning Message Content")]),e("Message",{attrs:{severity:"error"}},[s._v("Error Message Content")]),e("h5",[s._v("Custom Icon")]),e("Message",{attrs:{severity:"info",icon:"pi-send"}},[s._v("Info Message Content")]),e("h5",[s._v("Dynamic")]),e("Button",{attrs:{label:"Show"},on:{click:function(a){return s.addMessages()}}}),e("Button",{staticClass:"p-button-secondary",attrs:{label:"Clear"},on:{click:function(a){return s.removeMessages()}}}),e("transition-group",{attrs:{name:"p-messages",tag:"div"}},s._l(s.messages,function(a){return e("Message",{key:a.content,attrs:{severity:a.severity}},[s._v(s._s(a.content))])}),1),e("h5",[s._v("Inline Messages")]),e("p",[s._v("Message component is used to display inline messages mostly within forms.")]),e("div",{staticClass:"grid"},[e("div",{staticClass:"col-12 md:col-3"},[e("InlineMessage",{attrs:{severity:"info"}},[s._v("Message Content")])],1),e("div",{staticClass:"col-12 md:col-3"},[e("InlineMessage",{attrs:{severity:"success"}},[s._v("Message Content")])],1),e("div",{staticClass:"col-12 md:col-3"},[e("InlineMessage",{attrs:{severity:"warn"}},[s._v("Message Content")])],1),e("div",{staticClass:"col-12 md:col-3"},[e("InlineMessage",{attrs:{severity:"error"}},[s._v("Message Content")])],1)]),e("h5",[s._v("Auto Dismiss")]),e("Message",{attrs:{severity:"warn",life:1e4,sticky:!1}},[s._v("This message will hide in 10 seconds.")]),e("h5",[s._v("Validation Message")]),e("div",{staticClass:"formgroup-inline",staticStyle:{"margin-bottom":".5rem"}},[e("Label",{staticClass:"p-sr-only",attrs:{for:"username"}},[s._v("Username")]),e("InputText",{staticClass:"p-invalid",attrs:{id:"username",placeholder:"Username"}}),e("InlineMessage",[s._v("Username is required")])],1),e("div",{staticClass:"formgroup-inline"},[e("Label",{staticClass:"p-sr-only",attrs:{for:"email"}},[s._v("email")]),e("InputText",{staticClass:"p-invalid",attrs:{id:"email",placeholder:"Email"}}),e("InlineMessage")],1)],1)]),e("MessageDoc")],1)},d=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"content-section introduction"},[s("div",{staticClass:"feature-intro"},[s("h1",[t._v("Message")]),s("p",[t._v("Messages is used to display inline messages with various severities.")])])])}],m=n(c,g,d,!1,null,"35f1ed0f");const y=m.exports;export{y as default};
//# sourceMappingURL=MessageDemo-BKWFlFn6.js.map
