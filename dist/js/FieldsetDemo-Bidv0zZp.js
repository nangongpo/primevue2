import{n as a}from"./app.component-XqgfEEHA.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const o={};var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[t._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import Fieldset from 'primevue2/fieldset'; ")]),e("h5",[t._v("Getting Started")]),e("p",[t._v("Fieldset is a container component that accepts content as its children.")]),e("CodeHighlight",[t._v(" <Fieldset legend=\"Godfather I\"> The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family. </Fieldset> ")]),e("h5",[t._v("Custom Header")]),e("p",[t._v("Header of the panel is either defined with the "),e("i",[t._v("legend")]),t._v(" property or the legend template.")]),e("CodeHighlight",[t._v(" <Fieldset> <template #legend> Header Content </template> Content </Fieldset> ")]),e("h5",[t._v("Toggleable")]),e("p",[t._v("Content of the fieldset can be expanded and collapsed using "),e("i",[t._v("toggleable")]),t._v(" option..")]),e("CodeHighlight",[t._v(' <Fieldset legend="Godfather I" :toggleable="true"> The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter\'s wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his father\'s business. Through Michael\'s life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family. </Fieldset> ')]),e("p",[t._v("To control the initial state of the toggleable panel, use the "),e("i",[t._v("collapsed")]),t._v(" property.")]),e("CodeHighlight",[t._v(' <Fieldset legend="Header Text" :toggleable="true" :collapsed="true"> Content </Fieldset> ')]),e("p",[t._v("Use the sync operator to enable two-way binding.")]),e("CodeHighlight",[t._v(' <button type="button" @click="isCollapsed = !isCollapsed">Toggle Programmatically</button> <Fieldset legend="Header Text" :toggleable="true" :collapsed.sync="isCollapsed"> Content </Fieldset> ')]),e("h5",[t._v("Properties")]),e("p",[t._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("legend")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Header text of the fieldset.")])]),e("tr",[e("td",[t._v("toggleable")]),e("td",[t._v("boolean")]),e("td",[t._v("null")]),e("td",[t._v("When specified, content can toggled by clicking the legend.")])]),e("tr",[e("td",[t._v("collapsed")]),e("td",[t._v("boolean")]),e("td",[t._v("null")]),e("td",[t._v("Defines the default visibility state of the content.")])])])])]),e("h5",[t._v("Events")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("toggle")]),e("td",[t._v("event.originalEvent: browser event "),e("br"),t._v(" event.value: collapsed state as a boolean ")]),e("td",[t._v("Callback to invoke when a tab gets expanded or collapsed.")])])])])]),e("h5",[t._v("Slots")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("legend")]),e("td",[t._v("-")])])])])]),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-fieldset")]),e("td",[t._v("Fieldset element.")])]),e("tr",[e("td",[t._v("p-fieldset-toggleable")]),e("td",[t._v("Toggleable fieldset element.")])]),e("tr",[e("td",[t._v("p-fieldset-legend")]),e("td",[t._v("Legend element.")])]),e("tr",[e("td",[t._v("p-fieldset-content")]),e("td",[t._v("Content element.")])])])])]),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/fieldset",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])]),e("CodeHighlight",[[t._v(' <h5>Regular</h5> <Fieldset legend="Header"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </Fieldset> <h5>Toggleable</h5> <Fieldset legend="Header" :toggleable="true"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </Fieldset> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" export default { data() { return { value1: '', value2: '', value3: 'PrimeVue' } } } ")])],1)],1)],1)},n=[],s=a(o,l,n,!1,null,null);const r=s.exports,d={data(){return{value1:"",value2:"",value3:"PrimeVue"}},components:{FieldsetDoc:r}};var u=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Regular")]),e("Fieldset",{attrs:{legend:"Header"}},[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),e("h5",[t._v("Toggleable")]),e("Fieldset",{attrs:{legend:"Header",toggleable:!0}},[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])],1)]),e("FieldsetDoc")],1)},c=[function(){var i=this,t=i._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[i._v("Fieldset")]),t("p",[i._v("Fieldset is a grouping component with the optional content toggle feature.")])])])}],v=a(d,u,c,!1,null,"95ea0947");const _=v.exports;export{_ as default};
//# sourceMappingURL=FieldsetDemo-Bidv0zZp.js.map