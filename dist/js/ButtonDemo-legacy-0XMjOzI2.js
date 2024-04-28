System.register(["./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(t,n){"use strict";var o;return{setters:[function(t){o=t.n},null,null,null],execute:function(){var n=document.createElement("style");n.textContent=".p-button[data-v-4eb29ce4]{margin-right:.5rem}.p-buttonset .p-button[data-v-4eb29ce4]{margin-right:0}.sizes .button[data-v-4eb29ce4]{margin-bottom:.5rem;display:block}.sizes .button[data-v-4eb29ce4]:last-child{margin-bottom:0}@media screen and (max-width: 960px){.p-button[data-v-4eb29ce4]{margin-bottom:.5rem}.p-button[data-v-4eb29ce4]:not(.p-button-icon-only){display:flex;width:100%}.p-buttonset .p-button[data-v-4eb29ce4]{margin-bottom:0}}\n",document.head.appendChild(n);var e=o({},(function(){var t=this,n=t._self._c;return n("div",{staticClass:"content-section documentation"},[n("TabView",[n("TabPanel",{attrs:{header:"Documentation"}},[n("h5",[t._v("Import")]),n("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import Button from 'primevue2/button'; ")]),n("h5",[t._v("Getting Started")]),n("p",[t._v("Button is created using the Button element.")]),n("CodeHighlight",[t._v(" <Button /> ")]),n("h5",[t._v("Label")]),n("p",[t._v("Text of the button is defined using the "),n("i",[t._v("label")]),t._v(" property.")]),n("CodeHighlight",[t._v(' <Button label="Submit" /> ')]),n("h5",[t._v("Icons")]),n("p",[t._v("Icon on a button is specified with "),n("i",[t._v("icon")]),t._v(" property and position is configured using "),n("i",[t._v("iconPos")]),t._v(' attribute. Default icon position is "left" and alternative is "right". To display only an icon, leave the label as undefined.')]),n("CodeHighlight",[t._v(' <Button label="Submit" icon="pi pi-check" iconPos="right" /> ')]),n("h5",[t._v("Events")]),n("p",[t._v("Events are defined with the standard notation.")]),n("CodeHighlight",[t._v(' <Button label="Submit" @click="handleClick($event)"/> ')]),n("h5",[t._v("Severity")]),n("p",[t._v("Different options are available as severity levels.")]),n("ul",[n("li",[t._v(".p-button-secondary")]),n("li",[t._v(".p-button-success")]),n("li",[t._v(".p-button-info")]),n("li",[t._v(".p-button-warning")]),n("li",[t._v(".p-button-help")]),n("li",[t._v(".p-button-danger")])]),n("CodeHighlight",[t._v(' <Button label="Primary" /> <Button label="Secondary" class="p-button-secondary" /> <Button label="Success" class="p-button-success" /> <Button label="Info" class="p-button-info" /> <Button label="Warning" class="p-button-warning" /> <Button label="Warning" class="p-button-help" /> <Button label="Danger" class="p-button-danger" /> ')]),n("h5",[t._v("Text Buttons")]),n("p",[t._v("Text buttons have transparent background and borders, use "),n("i",[t._v("p-button-text")]),t._v(" to apply text button styling. In addition when used with "),n("i",[t._v(".p-button-plain")]),t._v(" text buttons ignore severity levels and displayed as a regular text.")]),n("CodeHighlight",[t._v(' <Button label="Submit" class="p-button-text" /> <Button icon="pi pi-check" class="p-button-text" /> <Button label="Cancel" icon="pi pi-times" class="p-button-text" /> <Button label="Search" icon="pi pi-search" iconPos="right" class="p-button-text p-button-text" /> ')]),n("h5",[t._v("Raised and Rounded Buttons")]),n("p",[t._v('A button can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.')]),n("CodeHighlight",[t._v(' <Button label="Primary" class="p-button-raised p-button-rounded" /> ')]),n("h5",[t._v("Outlined Buttons")]),n("p",[t._v('An alternate styling for a button is the outlined option where background becomes transparent. Apply "p-button-outlined" to style a button as outlined.')]),n("CodeHighlight",[t._v(' <Button label="Primary" class="p-button-outlined" /> ')]),n("h5",[t._v("Link Buttons")]),n("p",[t._v('Use "p-button-link" class to render the button as a link.')]),n("CodeHighlight",[t._v(' <Button label="Link" class="p-button-link" /> ')]),n("h5",[t._v("Badges")]),n("p",[t._v("Badge is a small status indicator for a button. Refer to the "),n("router-link",{attrs:{to:"/badge"}},[t._v("badge")]),t._v(" documentation for available styling options.")],1),n("CodeHighlight",[t._v(' <Button type="button" label="Emails" badge="8" /> <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-info" /> ')]),n("h5",[t._v("Loading State")]),n("p",[t._v("Button displays a "),n("i",[t._v("loadingIcon")]),t._v(" when "),n("i",[t._v("loading")]),t._v(" property is enabled.")]),n("CodeHighlight",[t._v(' <Button label="Save" icon="pi pi-check" :loading="isLoading" /> ')]),n("h5",[t._v("ButtonSet")]),n("p",[t._v("Wrapping the buttons in a container having a "),n("i",[t._v(".p-buttonset")]),t._v(" class, groups the buttons side to side.")]),n("CodeHighlight",[t._v(' <span class="p-buttonset"> <Button label="Save" icon="pi pi-check" /> <Button label="Delete" icon="pi pi-trash" /> <Button label="Cancel" icon="pi pi-times" /> </span> ')]),n("h5",[t._v("Sizes")]),n("p",[t._v("2 more sizes are available in addition to a regular button, for a smaller input add "),n("i",[t._v("p-button-sm")]),t._v(" and for a larger one, use "),n("i",[t._v("p-button-lg")]),t._v(". Note that these classes available to change the size of a particular button, for global scaling see the "),n("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),n("CodeHighlight",[t._v(' <Button label="Small" icon="pi pi-check" class="p-button-sm" /> <Button label="Normal" icon="pi pi-check" class="p-button" /> <Button label="Large" icon="pi pi-check" class="p-button-lg" /> ')]),n("h5",[t._v("Slot")]),n("p",[t._v("Custom content can be placed inside the button via the default slot. Note that when slot is used, label, icon and badge properties are not included.")]),n("CodeHighlight",[t._v(" <Button> Custom Content </Button> ")]),n("h5",[t._v("Properties")]),n("p",[t._v("Any property such as style and class are passed to the underlying button element. Following are the additional properties to configure the component.")]),n("div",{staticClass:"doc-tablewrapper"},[n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[t._v("Name")]),n("th",[t._v("Type")]),n("th",[t._v("Default")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("label")]),n("td",[t._v("string")]),n("td",[t._v("null")]),n("td",[t._v("Text of the button.")])]),n("tr",[n("td",[t._v("icon")]),n("td",[t._v("string")]),n("td",[t._v("null")]),n("td",[t._v("Name of the icon.")])]),n("tr",[n("td",[t._v("iconPos")]),n("td",[t._v("string")]),n("td",[t._v("left")]),n("td",[t._v('Position of the icon, valid values are "left", "right", "bottom" and "top".')])]),n("tr",[n("td",[t._v("badge")]),n("td",[t._v("string")]),n("td",[t._v("null")]),n("td",[t._v("Value of the badge.")])]),n("tr",[n("td",[t._v("badgeClass")]),n("td",[t._v("string")]),n("td",[t._v("null")]),n("td",[t._v("Style class of the badge.")])]),n("tr",[n("td",[t._v("loading")]),n("td",[t._v("boolean")]),n("td",[t._v("false")]),n("td",[t._v("Whether the button is in loading state.")])]),n("tr",[n("td",[t._v("loadingIcon")]),n("td",[t._v("string")]),n("td",[t._v("pi pi-spinner pi-spin")]),n("td",[t._v("Icon to display in loading state.")])])])])]),n("h5",[t._v("Styling")]),n("p",[t._v("Following is the list of structural style classes, for theming classes visit "),n("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),n("div",{staticClass:"doc-tablewrapper"},[n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[t._v("Name")]),n("th",[t._v("Element")])])]),n("tbody",[n("tr",[n("td",[t._v("p-button")]),n("td",[t._v("Button element")])]),n("tr",[n("td",[t._v("p-button-icon")]),n("td",[t._v("Icon element")])]),n("tr",[n("td",[t._v("p-button-label")]),n("td",[t._v("Label element of the button")])]),n("tr",[n("td",[t._v("p-button-sm")]),n("td",[t._v("Smaller button element")])]),n("tr",[n("td",[t._v("p-button-lg")]),n("td",[t._v("Larger button element")])])])])]),n("h5",[t._v("Dependencies")]),n("p",[t._v("None.")])],1),n("TabPanel",{attrs:{header:"Source"}},[n("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/button",target:"_blank",rel:"noopener noreferrer"}},[n("span",[t._v("View on GitHub")])]),n("CodeHighlight",[[t._v(' <h5>Basic</h5> <Button label="Submit" /> <Button label="Disabled" disabled="disabled" /> <Button label="Link" class="p-button-link" /> <h5>Icons</h5> <Button icon="pi pi-check" /> <Button label="Submit" icon="pi pi-check" /> <Button label="Submit" icon="pi pi-check" iconPos="right" /> <h5>Severities</h5> <Button label="Primary" /> <Button label="Secondary" class="p-button-secondary" /> <Button label="Success" class="p-button-success" /> <Button label="Info" class="p-button-info" /> <Button label="Warning" class="p-button-warning" /> <Button label="Help" class="p-button-help" /> <Button label="Danger" class="p-button-danger" /> <h5>Raised Buttons</h5> <Button label="Primary" class="p-button-raised" /> <Button label="Secondary" class="p-button-raised p-button-secondary" /> <Button label="Success" class="p-button-raised p-button-success" /> <Button label="Info" class="p-button-raised p-button-info" /> <Button label="Warning" class="p-button-raised p-button-warning" /> <Button label="Help" class="p-button-raised p-button-help" /> <Button label="Danger" class="p-button-raised p-button-danger" /> <h5>Rounded Buttons</h5> <Button label="Primary" class="p-button-rounded" /> <Button label="Secondary" class="p-button-rounded p-button-secondary" /> <Button label="Success" class="p-button-rounded p-button-success" /> <Button label="Info" class="p-button-rounded p-button-info" /> <Button label="Warning" class="p-button-rounded p-button-warning" /> <Button label="Help" class="p-button-rounded p-button-help" /> <Button label="Danger" class="p-button-rounded p-button-danger" /> <h5>Text Buttons</h5> <Button label="Primary" class="p-button-text" /> <Button label="Secondary" class="p-button-secondary p-button-text" /> <Button label="Success" class="p-button-success p-button-text" /> <Button label="Info" class="p-button-info p-button-text" /> <Button label="Warning" class="p-button-warning p-button-text" /> <Button label="Help" class="p-button-help p-button-text" /> <Button label="Danger" class="p-button-danger p-button-text" /> <Button label="Plain" class="p-button-text p-button-plain" /> <h5>Raised Text Buttons</h5> <Button label="Primary" class="p-button-raised p-button-text" /> <Button label="Secondary" class="p-button-raised p-button-secondary p-button-text" /> <Button label="Success" class="p-button-raised p-button-success p-button-text" /> <Button label="Info" class="p-button-raised p-button-info p-button-text" /> <Button label="Warning" class="p-button-raised p-button-warning p-button-text" /> <Button label="Help" class="p-button-raised p-button-help p-button-text" /> <Button label="Danger" class="p-button-raised p-button-danger p-button-text" /> <Button label="Plain" class="p-button-raised p-button-text p-button-plain" /> <h5>Outlined Buttons</h5> <Button label="Primary" class="p-button-outlined" /> <Button label="Secondary" class="p-button-outlined p-button-secondary" /> <Button label="Success" class="p-button-outlined p-button-success" /> <Button label="Info" class="p-button-outlined p-button-info" /> <Button label="Warning" class="p-button-outlined p-button-warning" /> <Button label="Help" class="p-button-outlined p-button-help" /> <Button label="Danger" class="p-button-outlined p-button-danger" /> <h5>Rounded Icon Buttons</h5> <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary" /> <Button icon="pi pi-search" class="p-button-rounded p-button-success" /> <Button icon="pi pi-user" class="p-button-rounded p-button-info" /> <Button icon="pi pi-bell" class="p-button-rounded p-button-warning" /> <Button icon="pi pi-heart" class="p-button-rounded p-button-help" /> <Button icon="pi pi-times" class="p-button-rounded p-button-danger" /> <Button icon="pi pi-check" class="p-button-rounded" /> <h5>Rounded Text Icon Buttons</h5> <Button icon="pi pi-check" class="p-button-rounded p-button-text" /> <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text" /> <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text" /> <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" /> <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text" /> <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text" /> <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text" /> <Button icon="pi pi-filter" class="p-button-rounded p-button-text p-button-plain" /> <h5>Rounded and Outlined Icon Buttons</h5> <Button icon="pi pi-check" class="p-button-rounded p-button-outlined" /> <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined" /> <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined" /> <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined" /> <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined" /> <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined" /> <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined" /> <h5>Badges</h5> <Button type="button" label="Emails" badge="8" /> <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" /> <h5>Loading State</h5> <Button label="Save" icon="pi pi-check" :loading="isLoading" /> <h5>Button Set</h5> <span class="p-buttonset"> <Button label="Save" icon="pi pi-check" /> <Button label="Delete" icon="pi pi-trash" /> <Button label="Cancel" icon="pi pi-times" /> </span> <h5>Sizes</h5> <div class="sizes"> <Button label="Small" icon="pi pi-check" class="p-button-sm" /> <Button label="Normal" icon="pi pi-check" class="p-button" /> <Button label="Large" icon="pi pi-check" class="p-button-lg" /> </div> ')]],2),n("CodeHighlight",{attrs:{lang:"css"}},[t._v(" button { margin-right: .5rem; } ")])],1)],1)],1)}),[],!1,null,null).exports;t("default",o({data:function(){return{loading:[!1,!1,!1,!1]}},methods:{load:function(t){var n=this;this.$set(this.loading,t,!0),setTimeout((function(){return n.$set(n.loading,t,!1)}),1e4)}},components:{ButtonDoc:e}},(function(){var t=this,n=t._self._c;return n("div",[t._m(0),n("div",{staticClass:"content-section implementation"},[n("div",{staticClass:"card"},[n("h5",[t._v("Basic")]),n("Button",{attrs:{label:"Submit"}}),n("Button",{attrs:{label:"Disabled",disabled:"disabled"}}),n("Button",{staticClass:"p-button-link",attrs:{label:"Link"}}),n("h5",[t._v("Icons")]),n("Button",{attrs:{icon:"pi pi-check"}}),n("Button",{attrs:{label:"Submit",icon:"pi pi-check"}}),n("Button",{attrs:{label:"Submit",icon:"pi pi-check",iconPos:"right"}}),n("h5",[t._v("Severities")]),n("Button",{attrs:{label:"Primary"}}),n("Button",{staticClass:"p-button-secondary",attrs:{label:"Secondary"}}),n("Button",{staticClass:"p-button-success",attrs:{label:"Success"}}),n("Button",{staticClass:"p-button-info",attrs:{label:"Info"}}),n("Button",{staticClass:"p-button-warning",attrs:{label:"Warning"}}),n("Button",{staticClass:"p-button-help",attrs:{label:"Help"}}),n("Button",{staticClass:"p-button-danger",attrs:{label:"Danger"}}),n("h5",[t._v("Raised Buttons")]),n("Button",{staticClass:"p-button-raised",attrs:{label:"Primary"}}),n("Button",{staticClass:"p-button-raised p-button-secondary",attrs:{label:"Secondary"}}),n("Button",{staticClass:"p-button-raised p-button-success",attrs:{label:"Success"}}),n("Button",{staticClass:"p-button-raised p-button-info",attrs:{label:"Info"}}),n("Button",{staticClass:"p-button-raised p-button-warning",attrs:{label:"Warning"}}),n("Button",{staticClass:"p-button-raised p-button-help",attrs:{label:"Help"}}),n("Button",{staticClass:"p-button-raised p-button-danger",attrs:{label:"Danger"}}),n("h5",[t._v("Rounded Buttons")]),n("Button",{staticClass:"p-button-rounded",attrs:{label:"Primary"}}),n("Button",{staticClass:"p-button-rounded p-button-secondary",attrs:{label:"Secondary"}}),n("Button",{staticClass:"p-button-rounded p-button-success",attrs:{label:"Success"}}),n("Button",{staticClass:"p-button-rounded p-button-info",attrs:{label:"Info"}}),n("Button",{staticClass:"p-button-rounded p-button-warning",attrs:{label:"Warning"}}),n("Button",{staticClass:"p-button-rounded p-button-help",attrs:{label:"Help"}}),n("Button",{staticClass:"p-button-rounded p-button-danger",attrs:{label:"Danger"}}),n("h5",[t._v("Text Buttons")]),n("Button",{staticClass:"p-button-text",attrs:{label:"Primary"}}),n("Button",{staticClass:"p-button-secondary p-button-text",attrs:{label:"Secondary"}}),n("Button",{staticClass:"p-button-success p-button-text",attrs:{label:"Success"}}),n("Button",{staticClass:"p-button-info p-button-text",attrs:{label:"Info"}}),n("Button",{staticClass:"p-button-warning p-button-text",attrs:{label:"Warning"}}),n("Button",{staticClass:"p-button-help p-button-text",attrs:{label:"Help"}}),n("Button",{staticClass:"p-button-danger p-button-text",attrs:{label:"Danger"}}),n("Button",{staticClass:"p-button-text p-button-plain",attrs:{label:"Plain"}}),n("h5",[t._v("Raised Text Buttons")]),n("Button",{staticClass:"p-button-raised p-button-text",attrs:{label:"Primary"}}),n("Button",{staticClass:"p-button-raised p-button-secondary p-button-text",attrs:{label:"Secondary"}}),n("Button",{staticClass:"p-button-raised p-button-success p-button-text",attrs:{label:"Success"}}),n("Button",{staticClass:"p-button-raised p-button-info p-button-text",attrs:{label:"Info"}}),n("Button",{staticClass:"p-button-raised p-button-warning p-button-text",attrs:{label:"Warning"}}),n("Button",{staticClass:"p-button-raised p-button-help p-button-text",attrs:{label:"Help"}}),n("Button",{staticClass:"p-button-raised p-button-danger p-button-text",attrs:{label:"Danger"}}),n("Button",{staticClass:"p-button-raised p-button-text p-button-plain",attrs:{label:"Plain"}}),n("h5",[t._v("Outlined Buttons")]),n("Button",{staticClass:"p-button-outlined",attrs:{label:"Primary"}}),n("Button",{staticClass:"p-button-outlined p-button-secondary",attrs:{label:"Secondary"}}),n("Button",{staticClass:"p-button-outlined p-button-success",attrs:{label:"Success"}}),n("Button",{staticClass:"p-button-outlined p-button-info",attrs:{label:"Info"}}),n("Button",{staticClass:"p-button-outlined p-button-warning",attrs:{label:"Warning"}}),n("Button",{staticClass:"p-button-outlined p-button-help",attrs:{label:"Help"}}),n("Button",{staticClass:"p-button-outlined p-button-danger",attrs:{label:"Danger"}}),n("h5",[t._v("Rounded Icon Buttons")]),n("Button",{staticClass:"p-button-rounded p-button-secondary",attrs:{icon:"pi pi-bookmark"}}),n("Button",{staticClass:"p-button-rounded p-button-success",attrs:{icon:"pi pi-search"}}),n("Button",{staticClass:"p-button-rounded p-button-info",attrs:{icon:"pi pi-user"}}),n("Button",{staticClass:"p-button-rounded p-button-warning",attrs:{icon:"pi pi-bell"}}),n("Button",{staticClass:"p-button-rounded p-button-help",attrs:{icon:"pi pi-heart"}}),n("Button",{staticClass:"p-button-rounded p-button-danger",attrs:{icon:"pi pi-times"}}),n("Button",{staticClass:"p-button-rounded",attrs:{icon:"pi pi-check"}}),n("h5",[t._v("Rounded Text Icon Buttons")]),n("Button",{staticClass:"p-button-rounded p-button-text",attrs:{icon:"pi pi-check"}}),n("Button",{staticClass:"p-button-rounded p-button-secondary p-button-text",attrs:{icon:"pi pi-bookmark"}}),n("Button",{staticClass:"p-button-rounded p-button-success p-button-text",attrs:{icon:"pi pi-search"}}),n("Button",{staticClass:"p-button-rounded p-button-info p-button-text",attrs:{icon:"pi pi-user"}}),n("Button",{staticClass:"p-button-rounded p-button-warning p-button-text",attrs:{icon:"pi pi-bell"}}),n("Button",{staticClass:"p-button-rounded p-button-help p-button-text",attrs:{icon:"pi pi-heart"}}),n("Button",{staticClass:"p-button-rounded p-button-danger p-button-text",attrs:{icon:"pi pi-times"}}),n("Button",{staticClass:"p-button-rounded p-button-text p-button-plain",attrs:{icon:"pi pi-filter"}}),n("h5",[t._v("Rounded and Outlined Icon Buttons")]),n("Button",{staticClass:"p-button-rounded p-button-outlined",attrs:{icon:"pi pi-check"}}),n("Button",{staticClass:"p-button-rounded p-button-secondary p-button-outlined",attrs:{icon:"pi pi-bookmark"}}),n("Button",{staticClass:"p-button-rounded p-button-success p-button-outlined",attrs:{icon:"pi pi-search"}}),n("Button",{staticClass:"p-button-rounded p-button-info p-button-outlined",attrs:{icon:"pi pi-user"}}),n("Button",{staticClass:"p-button-rounded p-button-warning p-button-outlined",attrs:{icon:"pi pi-bell"}}),n("Button",{staticClass:"p-button-rounded p-button-help p-button-outlined",attrs:{icon:"pi pi-heart"}}),n("Button",{staticClass:"p-button-rounded p-button-danger p-button-outlined",attrs:{icon:"pi pi-times"}}),n("h5",[t._v("Badges")]),n("Button",{attrs:{type:"button",label:"Emails",badge:"8"}}),n("Button",{staticClass:"p-button-warning",attrs:{type:"button",label:"Messages",icon:"pi pi-users",badge:"8",badgeClass:"p-badge-danger"}}),n("h5",[t._v("Loading")]),n("Button",{attrs:{type:"button",label:"Search",icon:"pi pi-search",loading:t.loading[0]},on:{click:function(n){return t.load(0)}}}),n("Button",{attrs:{type:"button",label:"Search",icon:"pi pi-search",iconPos:"right",loading:t.loading[1]},on:{click:function(n){return t.load(1)}}}),n("Button",{attrs:{type:"button",icon:"pi pi-search",loading:t.loading[2]},on:{click:function(n){return t.load(2)}}}),n("Button",{attrs:{type:"button",label:"Search",loading:t.loading[3]},on:{click:function(n){return t.load(3)}}}),n("h5",[t._v("Button Set")]),n("span",{staticClass:"p-buttonset"},[n("Button",{attrs:{label:"Save",icon:"pi pi-check"}}),n("Button",{attrs:{label:"Delete",icon:"pi pi-trash"}}),n("Button",{attrs:{label:"Cancel",icon:"pi pi-times"}})],1),n("h5",[t._v("Sizes")]),n("div",{staticClass:"sizes"},[n("Button",{staticClass:"p-button-sm",attrs:{label:"Small",icon:"pi pi-check"}}),n("Button",{staticClass:"p-button",attrs:{label:"Normal",icon:"pi pi-check"}}),n("Button",{staticClass:"p-button-lg",attrs:{label:"Large",icon:"pi pi-check"}})],1)],1)]),n("ButtonDoc")],1)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"content-section introduction"},[n("div",{staticClass:"feature-intro"},[n("h1",[t._v("Button")]),n("p",[t._v("Button is an extension to standard button element with icons and theming.")])])])}],!1,null,"4eb29ce4").exports)}}}));
//# sourceMappingURL=ButtonDemo-legacy-0XMjOzI2.js.map