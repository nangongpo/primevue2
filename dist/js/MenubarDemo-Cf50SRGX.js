import{n as l}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const a={};var p=function(){var e=this,i=e._self._c;return i("div",{staticClass:"content-section documentation"},[i("TabView",[i("TabPanel",{attrs:{header:"Documentation"}},[i("h5",[e._v("Import")]),i("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import Menubar from 'primevue2/menubar'; ")]),i("h5",[e._v("MenuModel")]),i("p",[e._v("Menubar uses the common MenuModel API to define the items, visit "),i("router-link",{attrs:{to:"/menumodel"}},[e._v("MenuModel API")]),e._v(" for details.")],1),i("h5",[e._v("Getting Started")]),i("p",[e._v("Menubar requires a collection of menuitems as its model.")]),i("CodeHighlight",[e._v(' <Menubar :model="items" /> ')]),i("CodeHighlight",{attrs:{lang:"js"}},[e._v(" export default { data() { return { items: [ { label:'File', icon:'pi pi-fw pi-file', items:[ { label:'New', icon:'pi pi-fw pi-plus', items:[ { label:'Bookmark', icon:'pi pi-fw pi-bookmark' }, { label:'Video', icon:'pi pi-fw pi-video' }, ] }, { label:'Delete', icon:'pi pi-fw pi-trash' }, { separator:true }, { label:'Export', icon:'pi pi-fw pi-external-link' } ] }, { label:'Edit', icon:'pi pi-fw pi-pencil', items:[ { label:'Left', icon:'pi pi-fw pi-align-left' }, { label:'Right', icon:'pi pi-fw pi-align-right' }, { label:'Center', icon:'pi pi-fw pi-align-center' }, { label:'Justify', icon:'pi pi-fw pi-align-justify' }, ] }, { label:'Users', icon:'pi pi-fw pi-user', items:[ { label:'New', icon:'pi pi-fw pi-user-plus', }, { label:'Delete', icon:'pi pi-fw pi-user-minus', }, { label:'Search', icon:'pi pi-fw pi-users', items:[ { label:'Filter', icon:'pi pi-fw pi-filter', items:[ { label:'Print', icon:'pi pi-fw pi-print' } ] }, { icon:'pi pi-fw pi-bars', label:'List' } ] } ] }, { label:'Events', icon:'pi pi-fw pi-calendar', items:[ { label:'Edit', icon:'pi pi-fw pi-pencil', items:[ { label:'Save', icon:'pi pi-fw pi-calendar-plus' }, { label:'Delete', icon:'pi pi-fw pi-calendar-minus' }, ] }, { label:'Archieve', icon:'pi pi-fw pi-calendar-times', items:[ { label:'Remove', icon:'pi pi-fw pi-calendar-minus' } ] } ] }, { label:'Quit', icon:'pi pi-fw pi-power-off' } ] } } } ")]),i("h5",[e._v("Custom Content")]),i("p",[e._v('Two slots named "start" and "end" are provided to embed content before or after the menubar.')]),i("CodeHighlight",[[e._v(' <Menubar :model="items"> <template #start> Before </template> <template #end> After </template> </Menubar> ')]],2),i("h5",[e._v("Properties")]),i("p",[e._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),i("div",{staticClass:"doc-tablewrapper"},[i("table",{staticClass:"doc-table"},[i("thead",[i("tr",[i("th",[e._v("Name")]),i("th",[e._v("Type")]),i("th",[e._v("Default")]),i("th",[e._v("Description")])])]),i("tbody",[i("tr",[i("td",[e._v("model")]),i("td",[e._v("array")]),i("td",[e._v("null")]),i("td",[e._v("An array of menuitems.")])]),i("tr",[i("td",[e._v("exact")]),i("td",[e._v("boolean")]),i("td",[e._v("true")]),i("td",[e._v("Whether to apply 'router-link-active-exact' class if route exactly matches the item path.")])])])])]),i("h5",[e._v("Slots")]),i("div",{staticClass:"doc-tablewrapper"},[i("table",{staticClass:"doc-table"},[i("thead",[i("tr",[i("th",[e._v("Name")]),i("th",[e._v("Parameters")])])]),i("tbody",[i("tr",[i("td",[e._v("start")]),i("td",[e._v("-")])]),i("tr",[i("td",[e._v("end")]),i("td",[e._v("-")])])])])]),i("h5",[e._v("Styling")]),i("p",[e._v("Following is the list of structural style classes, for theming classes visit "),i("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),i("div",{staticClass:"doc-tablewrapper"},[i("table",{staticClass:"doc-table"},[i("thead",[i("tr",[i("th",[e._v("Name")]),i("th",[e._v("Element")])])]),i("tbody",[i("tr",[i("td",[e._v("p-menubar")]),i("td",[e._v("Container element.")])]),i("tr",[i("td",[e._v("p-menubar-root-list")]),i("td",[e._v("Root list element.")])]),i("tr",[i("td",[e._v("p-submenu-list")]),i("td",[e._v("Submenu list element.")])]),i("tr",[i("td",[e._v("p-menuitem")]),i("td",[e._v("Menuitem element.")])]),i("tr",[i("td",[e._v("p-menuitem-text")]),i("td",[e._v("Label of a menuitem.")])]),i("tr",[i("td",[e._v("p-menuitem-icon")]),i("td",[e._v("Icon of a menuitem.")])]),i("tr",[i("td",[e._v("p-submenu-icon")]),i("td",[e._v("Arrow icon of a submenu.")])])])])]),i("h5",[e._v("Dependencies")]),i("p",[e._v("None.")])],1),i("TabPanel",{attrs:{header:"Source"}},[i("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/menubar",target:"_blank",rel:"noopener noreferrer"}},[i("span",[e._v("View on GitHub")])]),i("CodeHighlight",[[e._v(' <Menubar :model="items"> <template #start> <img alt="logo" src="../../assets/images/logo.svg" height="40" class="mr-2"> </template> <template #end> <InputText placeholder="Search" type="text" /> <Button label="Logout" icon="pi pi-power-off" :style="{\'margin-left\': \'0 .5em\'}"/> </template> </Menubar> ')]],2),i("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data() { return { items: [ { label:'File', icon:'pi pi-fw pi-file', items:[ { label:'New', icon:'pi pi-fw pi-plus', items:[ { label:'Bookmark', icon:'pi pi-fw pi-bookmark' }, { label:'Video', icon:'pi pi-fw pi-video' }, ] }, { label:'Delete', icon:'pi pi-fw pi-trash' }, { separator:true }, { label:'Export', icon:'pi pi-fw pi-external-link' } ] }, { label:'Edit', icon:'pi pi-fw pi-pencil', items:[ { label:'Left', icon:'pi pi-fw pi-align-left' }, { label:'Right', icon:'pi pi-fw pi-align-right' }, { label:'Center', icon:'pi pi-fw pi-align-center' }, { label:'Justify', icon:'pi pi-fw pi-align-justify' }, ] }, { label:'Users', icon:'pi pi-fw pi-user', items:[ { label:'New', icon:'pi pi-fw pi-user-plus', }, { label:'Delete', icon:'pi pi-fw pi-user-minus', }, { label:'Search', icon:'pi pi-fw pi-users', items:[ { label:'Filter', icon:'pi pi-fw pi-filter', items:[ { label:'Print', icon:'pi pi-fw pi-print' } ] }, { icon:'pi pi-fw pi-bars', label:'List' } ] } ] }, { label:'Events', icon:'pi pi-fw pi-calendar', items:[ { label:'Edit', icon:'pi pi-fw pi-pencil', items:[ { label:'Save', icon:'pi pi-fw pi-calendar-plus' }, { label:'Delete', icon:'pi pi-fw pi-calendar-minus' }, ] }, { label:'Archieve', icon:'pi pi-fw pi-calendar-times', items:[ { label:'Remove', icon:'pi pi-fw pi-calendar-minus' } ] } ] }, { label:'Quit', icon:'pi pi-fw pi-power-off' } ] } } } ")])],1)],1)],1)},n=[],r=l(a,p,n,!1,null,null);const o=r.exports,s="/primevue2/svg/logo-DbEabZU5.svg",c={data(){return{items:[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Quit",icon:"pi pi-fw pi-power-off"}]}},components:{MenubarDoc:o}};var m=function(){var e=this,i=e._self._c;return i("div",[e._m(0),i("div",{staticClass:"content-section implementation"},[i("div",{staticClass:"card"},[i("Menubar",{attrs:{model:e.items},scopedSlots:e._u([{key:"start",fn:function(){return[i("img",{staticClass:"mr-2",attrs:{alt:"logo",src:s,height:"40"}})]},proxy:!0},{key:"end",fn:function(){return[i("InputText",{attrs:{placeholder:"Search",type:"text"}})]},proxy:!0}])})],1)]),i("MenubarDoc")],1)},f=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("Menubar")]),e("p",[t._v("Menubar is a horizontal menu component.")])])])}],u=l(c,m,f,!1,null,null);const w=u.exports;export{w as default};
//# sourceMappingURL=MenubarDemo-Cf50SRGX.js.map