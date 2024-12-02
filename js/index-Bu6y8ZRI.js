import{n as e}from"./app.component-BAbvz7X_.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const s={name:"Documentation",data(){return{importCode:{basic:"\nimport Button from 'primevue2/button';\n        "},buttonCode:{basic:"\n<Button />\n        "},labelCode:{basic:'\n<Button label="Submit" />\n        '},iconsCode:{basic:'\n<Button label="Submit" icon="pi pi-check" iconPos="right" />\n        '},eventsCode:{basic:'\n<Button label="Submit" @click="handleClick($event)" />\n        '},severityCode:{basic:'\n<Button label="Primary" />\n<Button label="Secondary" class="p-button-secondary" />\n<Button label="Success" class="p-button-success" />\n<Button label="Info" class="p-button-info" />\n<Button label="Warning" class="p-button-warning" />\n<Button label="Warning" class="p-button-help" />\n<Button label="Danger" class="p-button-danger" />\n        '},textButtonsCode:{basic:'\n<Button label="Submit" class="p-button-text" />\n<Button icon="pi pi-check" class="p-button-text" />\n<Button label="Cancel" icon="pi pi-times" class="p-button-text" />\n<Button label="Search" icon="pi pi-search" iconPos="right" class="p-button-text p-button-text" />\n        '},raisedAndRoundedButtonCode:{basic:'\n<Button label="Primary" class="p-button-raised p-button-rounded" />\n        '},outlinedButtonsCode:{basic:'\n<Button label="Primary" class="p-button-outlined" />\n        '},linkButtonsCode:{basic:'\n<Button label="Link" class="p-button-link" />\n        '},badgesCode:{basic:'\n<Button type="button" label="Emails" badge="8" />\n<Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-info" />\n        '},loadingStateCode:{basic:'\n<Button label="Save" icon="pi pi-check" :loading="isLoading" />\n        '},buttonSetCode:{basic:'\n<span class="p-buttonset">\n    <Button label="Save" icon="pi pi-check" />\n    <Button label="Delete" icon="pi pi-trash" />\n    <Button label="Cancel" icon="pi pi-times" />\n</span>\n        '},sizesCode:{basic:'\n<Button label="Small" icon="pi pi-check" class="p-button-sm"  />\n<Button label="Normal" icon="pi pi-check" class="p-button"  />\n<Button label="Large" icon="pi pi-check" class="p-button-lg" />\n        '},slotCode:{basic:"\n<Button>\n    Custom Content\n</Button>\n        "}}}};var u=function(){var t=this,n=t._self._c;return n("div",[n("h5",[t._v("Import")]),n("DocSectionCode",{attrs:{code:t.importCode,importCode:""}}),n("h5",[t._v("Getting Started")]),n("p",[t._v("Button is created using the Button element.")]),n("DocSectionCode",{attrs:{code:t.buttonCode}}),n("h5",[t._v("Label")]),t._m(0),n("DocSectionCode",{attrs:{code:t.labelCode}}),n("h5",[t._v("Icons")]),t._m(1),n("DocSectionCode",{attrs:{code:t.iconsCode}}),n("h5",[t._v("Events")]),n("p",[t._v("Events are defined with the standard notation.")]),n("DocSectionCode",{attrs:{code:t.eventsCode}}),n("h5",[t._v("Severity")]),n("p",[t._v("Different options are available as severity levels.")]),t._m(2),n("DocSectionCode",{attrs:{code:t.severityCode}}),n("h5",[t._v("Text Buttons")]),t._m(3),n("DocSectionCode",{attrs:{code:t.textButtonsCode}}),n("h5",[t._v("Raised and Rounded Buttons")]),n("p",[t._v(' A button can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class. ')]),n("DocSectionCode",{attrs:{code:t.raisedAndRoundedButtonCode}}),n("h5",[t._v("Outlined Buttons")]),n("p",[t._v(' An alternate styling for a button is the outlined option where background becomes transparent. Apply "p-button-outlined" to style a button as outlined. ')]),n("DocSectionCode",{attrs:{code:t.outlinedButtonsCode}}),n("h5",[t._v("Link Buttons")]),n("p",[t._v('Use "p-button-link" class to render the button as a link.')]),n("DocSectionCode",{attrs:{code:t.linkButtonsCode}}),n("h5",[t._v("Badges")]),n("p",[t._v(" Badge is a small status indicator for a button. Refer to the "),n("router-link",{attrs:{to:"/badge"}},[t._v("badge")]),t._v(" documentation for available styling options. ")],1),n("DocSectionCode",{attrs:{code:t.badgesCode}}),n("h5",[t._v("Loading State")]),t._m(4),n("DocSectionCode",{attrs:{code:t.loadingStateCode}}),n("h5",[t._v("ButtonSet")]),t._m(5),n("DocSectionCode",{attrs:{code:t.buttonSetCode}}),n("h5",[t._v("Sizes")]),n("p",[t._v(" 2 more sizes are available in addition to a regular button, for a smaller input add "),n("i",[t._v("p-button-sm")]),t._v(" and for a larger one, use "),n("i",[t._v("p-button-lg")]),t._v(". Note that these classes available to change the size of a particular button, for global scaling see the "),n("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page. ")],1),n("DocSectionCode",{attrs:{code:t.sizesCode}}),n("h5",[t._v("Slot")]),n("p",[t._v(" Custom content can be placed inside the button via the default slot. Note that when slot is used, label, icon and badge properties are not included. ")]),n("DocSectionCode",{attrs:{code:t.slotCode}}),n("h5",[t._v("Properties")]),n("p",[t._v(" Any property such as style and class are passed to the underlying button element. Following are the additional properties to configure the component. ")]),t._m(6),n("h5",[t._v("Styling")]),n("p",[t._v(" Following is the list of structural style classes, for theming classes visit "),n("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page. ")],1),t._m(7),n("h5",[t._v("Dependencies")]),n("p",[t._v("None.")])],1)},i=[function(){var o=this,t=o._self._c;return t("p",[o._v("Text of the button is defined using the "),t("i",[o._v("label")]),o._v(" property.")])},function(){var o=this,t=o._self._c;return t("p",[o._v(" Icon on a button is specified with "),t("i",[o._v("icon")]),o._v(" property and position is configured using "),t("i",[o._v("iconPos")]),o._v(' attribute. Default icon position is "left" and alternative is "right". To display only an icon, leave the label as undefined. ')])},function(){var o=this,t=o._self._c;return t("ul",[t("li",[o._v(".p-button-secondary")]),t("li",[o._v(".p-button-success")]),t("li",[o._v(".p-button-info")]),t("li",[o._v(".p-button-warning")]),t("li",[o._v(".p-button-help")]),t("li",[o._v(".p-button-danger")])])},function(){var o=this,t=o._self._c;return t("p",[o._v(" Text buttons have transparent background and borders, use "),t("i",[o._v("p-button-text")]),o._v(" to apply text button styling. In addition when used with "),t("i",[o._v(".p-button-plain")]),o._v(" text buttons ignore severity levels and displayed as a regular text. ")])},function(){var o=this,t=o._self._c;return t("p",[o._v("Button displays a "),t("i",[o._v("loadingIcon")]),o._v(" when "),t("i",[o._v("loading")]),o._v(" property is enabled.")])},function(){var o=this,t=o._self._c;return t("p",[o._v("Wrapping the buttons in a container having a "),t("i",[o._v(".p-buttonset")]),o._v(" class, groups the buttons side to side.")])},function(){var o=this,t=o._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[o._v("Name")]),t("th",[o._v("Type")]),t("th",[o._v("Default")]),t("th",[o._v("Description")])])]),t("tbody",[t("tr",[t("td",[o._v("label")]),t("td",[o._v("string")]),t("td",[o._v("null")]),t("td",[o._v("Text of the button.")])]),t("tr",[t("td",[o._v("icon")]),t("td",[o._v("string")]),t("td",[o._v("null")]),t("td",[o._v("Name of the icon.")])]),t("tr",[t("td",[o._v("iconPos")]),t("td",[o._v("string")]),t("td",[o._v("left")]),t("td",[o._v('Position of the icon, valid values are "left", "right", "bottom" and "top".')])]),t("tr",[t("td",[o._v("badge")]),t("td",[o._v("string")]),t("td",[o._v("null")]),t("td",[o._v("Value of the badge.")])]),t("tr",[t("td",[o._v("badgeClass")]),t("td",[o._v("string")]),t("td",[o._v("null")]),t("td",[o._v("Style class of the badge.")])]),t("tr",[t("td",[o._v("loading")]),t("td",[o._v("boolean")]),t("td",[o._v("false")]),t("td",[o._v("Whether the button is in loading state.")])]),t("tr",[t("td",[o._v("loadingIcon")]),t("td",[o._v("string")]),t("td",[o._v("pi pi-spinner pi-spin")]),t("td",[o._v("Icon to display in loading state.")])])])])])},function(){var o=this,t=o._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[o._v("Name")]),t("th",[o._v("Element")])])]),t("tbody",[t("tr",[t("td",[o._v("p-button")]),t("td",[o._v("Button element")])]),t("tr",[t("td",[o._v("p-button-icon")]),t("td",[o._v("Icon element")])]),t("tr",[t("td",[o._v("p-button-label")]),t("td",[o._v("Label element of the button")])]),t("tr",[t("td",[o._v("p-button-sm")]),t("td",[o._v("Smaller button element")])]),t("tr",[t("td",[o._v("p-button-lg")]),t("td",[o._v("Larger button element")])])])])])}],l=e(s,u,i,!1,null,null);const c=l.exports,p={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<h5>Basic</h5>\n<Button label="Submit" />\n<Button label="Disabled" disabled="disabled" />\n<Button label="Link" class="p-button-link" />\n\n<h5>Icons</h5>\n<Button icon="pi pi-check" />\n<Button label="Submit" icon="pi pi-check" />\n<Button label="Submit" icon="pi pi-check" iconPos="right" />\n\n<h5>Severities</h5>\n<Button label="Primary" />\n<Button label="Secondary" class="p-button-secondary" />\n<Button label="Success" class="p-button-success" />\n<Button label="Info" class="p-button-info" />\n<Button label="Warning" class="p-button-warning" />\n<Button label="Help" class="p-button-help" />\n<Button label="Danger" class="p-button-danger" />\n\n<h5>Raised Buttons</h5>\n<Button label="Primary" class="p-button-raised" />\n<Button label="Secondary" class="p-button-raised p-button-secondary" />\n<Button label="Success" class="p-button-raised p-button-success" />\n<Button label="Info" class="p-button-raised p-button-info" />\n<Button label="Warning" class="p-button-raised p-button-warning" />\n<Button label="Help" class="p-button-raised p-button-help" />\n<Button label="Danger" class="p-button-raised p-button-danger" />\n\n<h5>Rounded Buttons</h5>\n<Button label="Primary" class="p-button-rounded" />\n<Button label="Secondary" class="p-button-rounded p-button-secondary" />\n<Button label="Success" class="p-button-rounded p-button-success" />\n<Button label="Info" class="p-button-rounded p-button-info" />\n<Button label="Warning" class="p-button-rounded p-button-warning" />\n<Button label="Help" class="p-button-rounded p-button-help" />\n<Button label="Danger" class="p-button-rounded p-button-danger" />\n\n<h5>Text Buttons</h5>\n<Button label="Primary" class="p-button-text" />\n<Button label="Secondary" class="p-button-secondary p-button-text" />\n<Button label="Success" class="p-button-success p-button-text" />\n<Button label="Info" class="p-button-info p-button-text" />\n<Button label="Warning" class="p-button-warning p-button-text" />\n<Button label="Help" class="p-button-help p-button-text" />\n<Button label="Danger" class="p-button-danger p-button-text" />\n<Button label="Plain" class="p-button-text p-button-plain" />\n\n<h5>Raised Text Buttons</h5>\n<Button label="Primary" class="p-button-raised p-button-text" />\n<Button label="Secondary" class="p-button-raised p-button-secondary p-button-text" />\n<Button label="Success" class="p-button-raised p-button-success p-button-text" />\n<Button label="Info" class="p-button-raised p-button-info p-button-text" />\n<Button label="Warning" class="p-button-raised p-button-warning p-button-text" />\n<Button label="Help" class="p-button-raised p-button-help p-button-text" />\n<Button label="Danger" class="p-button-raised p-button-danger p-button-text" />\n<Button label="Plain" class="p-button-raised p-button-text p-button-plain" />\n\n<h5>Outlined Buttons</h5>\n<Button label="Primary" class="p-button-outlined" />\n<Button label="Secondary" class="p-button-outlined p-button-secondary" />\n<Button label="Success" class="p-button-outlined p-button-success" />\n<Button label="Info" class="p-button-outlined p-button-info" />\n<Button label="Warning" class="p-button-outlined p-button-warning" />\n<Button label="Help" class="p-button-outlined p-button-help" />\n<Button label="Danger" class="p-button-outlined p-button-danger" />\n\n<h5>Rounded Icon Buttons</h5>\n<Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary" />\n<Button icon="pi pi-search" class="p-button-rounded p-button-success" />\n<Button icon="pi pi-user" class="p-button-rounded p-button-info" />\n<Button icon="pi pi-bell" class="p-button-rounded p-button-warning" />\n<Button icon="pi pi-heart" class="p-button-rounded p-button-help" />\n<Button icon="pi pi-times" class="p-button-rounded p-button-danger" />\n<Button icon="pi pi-check" class="p-button-rounded" />\n\n<h5>Rounded Text Icon Buttons</h5>\n<Button icon="pi pi-check" class="p-button-rounded p-button-text" />\n<Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text" />\n<Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text" />\n<Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" />\n<Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text" />\n<Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text" />\n<Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text" />\n<Button icon="pi pi-filter" class="p-button-rounded p-button-text p-button-plain" />\n\n<h5>Rounded and Outlined Icon Buttons</h5>\n<Button icon="pi pi-check" class="p-button-rounded p-button-outlined" />\n<Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined" />\n<Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined" />\n<Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined" />\n<Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined" />\n<Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined" />\n<Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined" />\n\n<h5>Badges</h5>\n<Button type="button" label="Emails" badge="8" />\n<Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />\n\n<h5>Loading State</h5>\n<Button label="Save" icon="pi pi-check" :loading="isLoading" />\n\n<h5>Button Set</h5>\n<span class="p-buttonset">\n    <Button label="Save" icon="pi pi-check" />\n    <Button label="Delete" icon="pi pi-trash" />\n    <Button label="Cancel" icon="pi pi-times" />\n</span>\n\n<h5>Sizes</h5>\n<div class="sizes">\n    <Button label="Small" icon="pi pi-check" class="p-button-sm"  />\n    <Button label="Normal" icon="pi pi-check" class="p-button"  />\n    <Button label="Large" icon="pi pi-check" class="p-button-lg" />\n</div>\n        '},sourceCode2:{basic:"\nbutton {\n	margin-right: .5rem;\n}\n        "}}}};var r=function(){var t=this,n=t._self._c;return n("div",[t._m(0),n("DocSectionCode",{attrs:{code:t.sourceCode1}}),n("DocSectionCode",{attrs:{code:t.sourceCode2,importStyle:""}})],1)},b=[function(){var o=this,t=o._self._c;return t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/breadcrumb",target:"_blank",rel:"noopener noreferrer"}},[t("span",[o._v("View on GitHub")])])}],d=e(p,r,b,!1,null,null);const B=d.exports,_={components:{Documentation:c,SourceCode:B}};var h=function(){var t=this,n=t._self._c;return n("div",{staticClass:"content-section documentation"},[n("TabView",[n("TabPanel",{attrs:{header:"Documentation"}},[n("Documentation")],1),n("TabPanel",{attrs:{header:"Source"}},[n("SourceCode")],1)],1)],1)},v=[],g=e(_,h,v,!1,null,null);const m=g.exports,C={data(){return{loading:[!1,!1,!1,!1]}},methods:{load(o){this.$set(this.loading,o,!0),setTimeout(()=>this.$set(this.loading,o,!1),1e4)}},components:{ButtonDoc:m}};var f=function(){var t=this,n=t._self._c;return n("div",[t._m(0),n("div",{staticClass:"content-section implementation"},[n("div",{staticClass:"card"},[n("h5",[t._v("Basic")]),n("Button",{attrs:{label:"Submit"}}),n("Button",{attrs:{label:"Disabled",disabled:"disabled"}}),n("Button",{staticClass:"p-button-link",attrs:{label:"Link"}}),n("h5",[t._v("Icons")]),n("Button",{attrs:{icon:"pi pi-check"}}),n("Button",{attrs:{label:"Submit",icon:"pi pi-check"}}),n("Button",{attrs:{label:"Submit",icon:"pi pi-check",iconPos:"right"}}),n("h5",[t._v("Severities")]),n("Button",{attrs:{label:"Primary"}}),n("Button",{staticClass:"p-button-secondary",attrs:{label:"Secondary"}}),n("Button",{staticClass:"p-button-success",attrs:{label:"Success"}}),n("Button",{staticClass:"p-button-info",attrs:{label:"Info"}}),n("Button",{staticClass:"p-button-warning",attrs:{label:"Warning"}}),n("Button",{staticClass:"p-button-help",attrs:{label:"Help"}}),n("Button",{staticClass:"p-button-danger",attrs:{label:"Danger"}}),n("h5",[t._v("Raised Buttons")]),n("Button",{staticClass:"p-button-raised",attrs:{label:"Primary"}}),n("Button",{staticClass:"p-button-raised p-button-secondary",attrs:{label:"Secondary"}}),n("Button",{staticClass:"p-button-raised p-button-success",attrs:{label:"Success"}}),n("Button",{staticClass:"p-button-raised p-button-info",attrs:{label:"Info"}}),n("Button",{staticClass:"p-button-raised p-button-warning",attrs:{label:"Warning"}}),n("Button",{staticClass:"p-button-raised p-button-help",attrs:{label:"Help"}}),n("Button",{staticClass:"p-button-raised p-button-danger",attrs:{label:"Danger"}}),n("h5",[t._v("Rounded Buttons")]),n("Button",{staticClass:"p-button-rounded",attrs:{label:"Primary"}}),n("Button",{staticClass:"p-button-rounded p-button-secondary",attrs:{label:"Secondary"}}),n("Button",{staticClass:"p-button-rounded p-button-success",attrs:{label:"Success"}}),n("Button",{staticClass:"p-button-rounded p-button-info",attrs:{label:"Info"}}),n("Button",{staticClass:"p-button-rounded p-button-warning",attrs:{label:"Warning"}}),n("Button",{staticClass:"p-button-rounded p-button-help",attrs:{label:"Help"}}),n("Button",{staticClass:"p-button-rounded p-button-danger",attrs:{label:"Danger"}}),n("h5",[t._v("Text Buttons")]),n("Button",{staticClass:"p-button-text",attrs:{label:"Primary"}}),n("Button",{staticClass:"p-button-secondary p-button-text",attrs:{label:"Secondary"}}),n("Button",{staticClass:"p-button-success p-button-text",attrs:{label:"Success"}}),n("Button",{staticClass:"p-button-info p-button-text",attrs:{label:"Info"}}),n("Button",{staticClass:"p-button-warning p-button-text",attrs:{label:"Warning"}}),n("Button",{staticClass:"p-button-help p-button-text",attrs:{label:"Help"}}),n("Button",{staticClass:"p-button-danger p-button-text",attrs:{label:"Danger"}}),n("Button",{staticClass:"p-button-text p-button-plain",attrs:{label:"Plain"}}),n("h5",[t._v("Raised Text Buttons")]),n("Button",{staticClass:"p-button-raised p-button-text",attrs:{label:"Primary"}}),n("Button",{staticClass:"p-button-raised p-button-secondary p-button-text",attrs:{label:"Secondary"}}),n("Button",{staticClass:"p-button-raised p-button-success p-button-text",attrs:{label:"Success"}}),n("Button",{staticClass:"p-button-raised p-button-info p-button-text",attrs:{label:"Info"}}),n("Button",{staticClass:"p-button-raised p-button-warning p-button-text",attrs:{label:"Warning"}}),n("Button",{staticClass:"p-button-raised p-button-help p-button-text",attrs:{label:"Help"}}),n("Button",{staticClass:"p-button-raised p-button-danger p-button-text",attrs:{label:"Danger"}}),n("Button",{staticClass:"p-button-raised p-button-text p-button-plain",attrs:{label:"Plain"}}),n("h5",[t._v("Outlined Buttons")]),n("Button",{staticClass:"p-button-outlined",attrs:{label:"Primary"}}),n("Button",{staticClass:"p-button-outlined p-button-secondary",attrs:{label:"Secondary"}}),n("Button",{staticClass:"p-button-outlined p-button-success",attrs:{label:"Success"}}),n("Button",{staticClass:"p-button-outlined p-button-info",attrs:{label:"Info"}}),n("Button",{staticClass:"p-button-outlined p-button-warning",attrs:{label:"Warning"}}),n("Button",{staticClass:"p-button-outlined p-button-help",attrs:{label:"Help"}}),n("Button",{staticClass:"p-button-outlined p-button-danger",attrs:{label:"Danger"}}),n("h5",[t._v("Rounded Icon Buttons")]),n("Button",{staticClass:"p-button-rounded p-button-secondary",attrs:{icon:"pi pi-bookmark"}}),n("Button",{staticClass:"p-button-rounded p-button-success",attrs:{icon:"pi pi-search"}}),n("Button",{staticClass:"p-button-rounded p-button-info",attrs:{icon:"pi pi-user"}}),n("Button",{staticClass:"p-button-rounded p-button-warning",attrs:{icon:"pi pi-bell"}}),n("Button",{staticClass:"p-button-rounded p-button-help",attrs:{icon:"pi pi-heart"}}),n("Button",{staticClass:"p-button-rounded p-button-danger",attrs:{icon:"pi pi-times"}}),n("Button",{staticClass:"p-button-rounded",attrs:{icon:"pi pi-check"}}),n("h5",[t._v("Rounded Text Icon Buttons")]),n("Button",{staticClass:"p-button-rounded p-button-text",attrs:{icon:"pi pi-check"}}),n("Button",{staticClass:"p-button-rounded p-button-secondary p-button-text",attrs:{icon:"pi pi-bookmark"}}),n("Button",{staticClass:"p-button-rounded p-button-success p-button-text",attrs:{icon:"pi pi-search"}}),n("Button",{staticClass:"p-button-rounded p-button-info p-button-text",attrs:{icon:"pi pi-user"}}),n("Button",{staticClass:"p-button-rounded p-button-warning p-button-text",attrs:{icon:"pi pi-bell"}}),n("Button",{staticClass:"p-button-rounded p-button-help p-button-text",attrs:{icon:"pi pi-heart"}}),n("Button",{staticClass:"p-button-rounded p-button-danger p-button-text",attrs:{icon:"pi pi-times"}}),n("Button",{staticClass:"p-button-rounded p-button-text p-button-plain",attrs:{icon:"pi pi-filter"}}),n("h5",[t._v("Rounded and Outlined Icon Buttons")]),n("Button",{staticClass:"p-button-rounded p-button-outlined",attrs:{icon:"pi pi-check"}}),n("Button",{staticClass:"p-button-rounded p-button-secondary p-button-outlined",attrs:{icon:"pi pi-bookmark"}}),n("Button",{staticClass:"p-button-rounded p-button-success p-button-outlined",attrs:{icon:"pi pi-search"}}),n("Button",{staticClass:"p-button-rounded p-button-info p-button-outlined",attrs:{icon:"pi pi-user"}}),n("Button",{staticClass:"p-button-rounded p-button-warning p-button-outlined",attrs:{icon:"pi pi-bell"}}),n("Button",{staticClass:"p-button-rounded p-button-help p-button-outlined",attrs:{icon:"pi pi-heart"}}),n("Button",{staticClass:"p-button-rounded p-button-danger p-button-outlined",attrs:{icon:"pi pi-times"}}),n("h5",[t._v("Badges")]),n("Button",{attrs:{type:"button",label:"Emails",badge:"8"}}),n("Button",{staticClass:"p-button-warning",attrs:{type:"button",label:"Messages",icon:"pi pi-users",badge:"8",badgeClass:"p-badge-danger"}}),n("h5",[t._v("Loading")]),n("Button",{attrs:{type:"button",label:"Search",icon:"pi pi-search",loading:t.loading[0]},on:{click:function(a){return t.load(0)}}}),n("Button",{attrs:{type:"button",label:"Search",icon:"pi pi-search",iconPos:"right",loading:t.loading[1]},on:{click:function(a){return t.load(1)}}}),n("Button",{attrs:{type:"button",icon:"pi pi-search",loading:t.loading[2]},on:{click:function(a){return t.load(2)}}}),n("Button",{attrs:{type:"button",label:"Search",loading:t.loading[3]},on:{click:function(a){return t.load(3)}}}),n("h5",[t._v("Button Set")]),n("span",{staticClass:"p-buttonset"},[n("Button",{attrs:{label:"Save",icon:"pi pi-check"}}),n("Button",{attrs:{label:"Delete",icon:"pi pi-trash"}}),n("Button",{attrs:{label:"Cancel",icon:"pi pi-times"}})],1),n("h5",[t._v("Sizes")]),n("div",{staticClass:"sizes"},[n("Button",{staticClass:"p-button-sm",attrs:{label:"Small",icon:"pi pi-check"}}),n("Button",{staticClass:"p-button",attrs:{label:"Normal",icon:"pi pi-check"}}),n("Button",{staticClass:"p-button-lg",attrs:{label:"Large",icon:"pi pi-check"}})],1)],1)]),n("ButtonDoc")],1)},y=[function(){var o=this,t=o._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[o._v("Button")]),t("p",[o._v("Button is an extension to standard button element with icons and theming.")])])])}],S=e(C,f,y,!1,null,"4a53e3b5");const I=S.exports;export{I as default};
//# sourceMappingURL=index-Bu6y8ZRI.js.map