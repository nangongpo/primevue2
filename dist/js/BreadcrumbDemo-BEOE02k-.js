import{n as r}from"./app.component-XqgfEEHA.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const o={};var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[t._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import Breadcrumb from 'primevue2/breadcrumb'; ")]),e("h5",[t._v("MenuModel")]),e("p",[t._v("Breadcrumb uses the common MenuModel API to define the items, visit "),e("router-link",{attrs:{to:"/menumodel"}},[t._v("MenuModel API")]),t._v(" for details.")],1),e("h5",[t._v("Getting Started")]),e("p",[t._v("Breadcrumb requires a collection of menuitems as its model and a home item.")]),e("CodeHighlight",[t._v(' <Breadcrumb :home="home" :model="items" /> ')]),e("CodeHighlight",{attrs:{lang:"js"}},[t._v(" export default { data() { return { home: {icon: 'pi pi-home', to: '/'}, items: [ {label: 'Computer'}, {label: 'Notebook'}, {label: 'Accessories'}, {label: 'Backpacks'}, {label: 'Item'} ] } } } ")]),e("h5",[t._v("Properties")]),e("p",[t._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("model")]),e("td",[t._v("array")]),e("td",[t._v("null")]),e("td",[t._v("An array of menuitems.")])]),e("tr",[e("td",[t._v("home")]),e("td",[t._v("menuitem")]),e("td",[t._v("null")]),e("td",[t._v("Configuration for the home icon.")])]),e("tr",[e("td",[t._v("exact")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Whether to apply 'router-link-active-exact' class if route exactly matches the item path.")])])])])]),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-breadcrumb")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-menuitem")]),e("td",[t._v("Menuitem element.")])]),e("tr",[e("td",[t._v("p-menuitem-text")]),e("td",[t._v("Label of a menuitem.")])]),e("tr",[e("td",[t._v("p-breadcrumb-chevron")]),e("td",[t._v("Chevron element.")])])])])]),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/menu",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])]),e("CodeHighlight",[[t._v(' <Breadcrumb :home="home" :model="items" /> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" export default { data() { return { home: {icon: 'pi pi-home', to: '/'}, items: [ {label: 'Computer'}, {label: 'Notebook'}, {label: 'Accessories'}, {label: 'Backpacks'}, {label: 'Item'} ] } } } ")])],1)],1)],1)},i=[],s=r(o,n,i,!1,null,null);const l=s.exports,m={data(){return{home:{icon:"pi pi-home",to:"/"},items:[{label:"Computer"},{label:"Notebook"},{label:"Accessories"},{label:"Backpacks"},{label:"Item"}]}},components:{BreadcrumbDoc:l}};var c=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("Breadcrumb",{attrs:{home:t.home,model:t.items}})],1)]),e("BreadcrumbDoc")],1)},d=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[a._v("Breadcrumb")]),t("p",[a._v("Breadcrumb provides contextual information about page hierarchy.")])])])}],_=r(m,c,d,!1,null,null);const b=_.exports;export{b as default};
//# sourceMappingURL=BreadcrumbDemo-BEOE02k-.js.map
