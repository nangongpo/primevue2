import{n as o}from"./app.component-XqgfEEHA.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const s={};var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import Paginator from 'primevue2/paginator'; ")]),t("h5",[e._v("Getting Started")]),t("p",[t("i",[e._v("rows")]),e._v(" and "),t("i",[e._v("totalRecords")]),e._v(" are the required properties of the Paginator.")]),t("CodeHighlight",[e._v(' <Paginator :rows="10" :totalRecords="totalItemsCount"></Paginator> ')]),t("h5",[e._v("Start Index")]),t("p",[t("i",[e._v("first")]),e._v(" property defines the index of the first item displayed by the paginator.")]),t("CodeHighlight",[e._v(' <Paginator :first="offset" :rows="10" :totalRecords="totalItemsCount"></Paginator> ')]),t("p",[e._v("Use the sync operator to enable two-way binding, this is useful in cases where you need to programmatically control the paginator.")]),t("CodeHighlight",[e._v(' <Paginator :first.sync="offset" :rows="10" :totalRecords="totalItemsCount"></Paginator> ')]),t("h5",[e._v("Rows Per Page")]),t("p",[e._v("Number of items per page can be changed by the user using a dropdown with the "),t("i",[e._v("rowsPerPageOptions")]),e._v(" property which accepts an array of possible values.")]),t("CodeHighlight",[e._v(' <Paginator :first.sync="offset" :rows="rows" :totalRecords="totalItemsCount" :rowsPerPageOptions="[10,20,30]"></Paginator> ')]),t("p",[e._v("As "),t("i",[e._v("rows")]),e._v(" also change when the dropdown changes, use the optional sync operator if you need two-way binding.")]),t("CodeHighlight",[e._v(' <Paginator :first.sync="offset" :rows.sync="rows" :totalRecords="totalItemsCount" :rowsPerPageOptions="[10,20,30]"></Paginator> ')]),t("h5",[e._v("Template")]),t("p",[e._v('Paginator elements can be customized using the template property using the predefined keys, default value is "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown". Here are the available elements that can be placed inside a paginator in any order.')]),t("ul",[t("li",[e._v("FirstPageLink")]),t("li",[e._v("PrevPageLink")]),t("li",[e._v("PageLinks")]),t("li",[e._v("NextPageLink")]),t("li",[e._v("LastPageLink")]),t("li",[e._v("RowsPerPageDropdown")]),t("li",[e._v("JumpToPageDropdown")]),t("li",[e._v("JumpToPageInput")]),t("li",[e._v("CurrentPageReport")])]),t("h5",[e._v("CurrentPageReport")]),t("p",[e._v("Current page report item in the template displays information about the pagination state. Default value is ({currentPage} of {totalPages}) whereas available placeholders are the following; ")]),t("ul",[t("li",[e._v("{currentPage}")]),t("li",[e._v("{totalPages}")]),t("li",[e._v("{rows}")]),t("li",[e._v("{first}")]),t("li",[e._v("{last}")]),t("li",[e._v("{totalRecords}")])]),t("h5",[e._v("Custom Content")]),t("p",[e._v('There are two templates available named "left" and "right" to add custom content to these locations. Both templates get a state object as a slot property to provide the current page, first index and the rows. ')]),t("CodeHighlight",[[e._v(' <Paginator :first.sync="offset" :rows="10" :totalRecords="totalItemsCount"> <template #start="slotProps"> Page: {{slotProps.state.page}} First: {{slotProps.state.first}} Rows: {{slotProps.state.rows}} </template> <template #end> <Button type="button" icon="pi pi-search" /> </template> </Paginator> ')]],2),t("h5",[e._v("Page Change Event")]),t("p",[e._v("Paginator provides only one event called "),t("i",[e._v("page")]),e._v(" that passes all the information about the change event.")]),t("CodeHighlight",[e._v(' <Paginator :rows="10" :totalRecords="totalItemsCount" @page="onPage($event)"></Paginator> ')]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" onPage(event) { //event.page: New page number //event.first: Index of first record //event.rows: Number of rows to display in new page //event.pageCount: Total number of pages } ")]),t("h5",[e._v("Properties")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("totalRecords")]),t("td",[e._v("number")]),t("td",[e._v("0")]),t("td",[e._v("Number of total records.")])]),t("tr",[t("td",[e._v("rows")]),t("td",[e._v("number")]),t("td",[e._v("0")]),t("td",[e._v("Data count to display per page.")])]),t("tr",[t("td",[e._v("first")]),t("td",[e._v("number")]),t("td",[e._v("0")]),t("td",[e._v("Zero-relative number of the first row to be displayed.")])]),t("tr",[t("td",[e._v("pageLinkSize")]),t("td",[e._v("number")]),t("td",[e._v("5")]),t("td",[e._v("Number of page links to display.")])]),t("tr",[t("td",[e._v("rowsPerPageOptions")]),t("td",[e._v("array")]),t("td",[e._v("null")]),t("td",[e._v("Array of integer values to display inside rows per page dropdown.")])]),t("tr",[t("td",[e._v("template")]),t("td",[e._v("string")]),t("td",[e._v("FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown")]),t("td",[e._v("Template of the paginator.")])]),t("tr",[t("td",[e._v("currentPageReportTemplate")]),t("td",[e._v("string")]),t("td",[e._v("({currentPage} of {totalPages})")]),t("td",[e._v("Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords} ")])]),t("tr",[t("td",[e._v("alwaysShow")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether to show the paginator even there is only one page.")])])])])]),t("h5",[e._v("Events")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("page")]),t("td",[e._v("event.page: New page number "),t("br"),e._v(" event.first: Index of first record "),t("br"),e._v(" event.rows: Number of rows to display in new page "),t("br"),e._v(" event.pageCount: Total number of pages ")]),t("td",[e._v("Callback to invoke when page changes, the event object contains information about the new state.")])])])])]),t("h5",[e._v("Slots")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("left")]),t("td",[e._v("state: State of the paginator")])]),t("tr",[t("td",[e._v("right")]),t("td",[e._v("state: State of the paginator")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-paginator")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-paginator-first")]),t("td",[e._v("First page element.")])]),t("tr",[t("td",[e._v("p-paginator-prev")]),t("td",[e._v("Previous page element.")])]),t("tr",[t("td",[e._v("p-paginator-pages")]),t("td",[e._v("Container of page links.")])]),t("tr",[t("td",[e._v("p-paginator-page")]),t("td",[e._v("A page link.")])]),t("tr",[t("td",[e._v("p-paginator-next")]),t("td",[e._v("Next pge element.")])]),t("tr",[t("td",[e._v("p-paginator-last")]),t("td",[e._v("Last page element.")])]),t("tr",[t("td",[e._v("p-paginator-rpp-options")]),t("td",[e._v("Rows per page dropdown.")])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/primefaces/primevue2/tree/2.x/src/showcase/paginator",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[e._v(' <h3>Basic</h3> <Paginator :rows="10" :totalRecords="totalRecords" :rowsPerPageOptions="[10,20,30]"></Paginator> <h3>Custom</h3> <Paginator :first.sync="first" :rows="1" :totalRecords="totalRecords2" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"> <template #start> <Button type="button" icon="pi pi-refresh" @click="reset()"/> </template> <template #end> <Button type="button" icon="pi pi-search" /> </template> </Paginator> <div class="image-gallery"> <img :src="$publicUrl(\'demo/images/nature/\' + image + \'.jpg\')" /> </div> ')]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data() { return { first: 0, totalRecords: 120, totalRecords2: 12 } }, methods: { reset() { this.first = 0; } }, computed: { image() { return 'nature' + (this.first + 1); } } } ")]),t("CodeHighlight",{attrs:{lang:"css"}},[e._v(" .p-button.p-button-icon-only { border-radius: 0; } .image-gallery { text-align: center; padding: 1rem; } ")])],1)],1)],1)},i=[],l=o(s,n,i,!1,null,null);const p=l.exports,d={data(){return{first:0,totalRecords:120,totalRecords2:12}},methods:{reset(){this.first=0}},computed:{image(){return"nature"+(this.first+1)}},components:{PaginatorDoc:p}};var g=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Basic")]),t("Paginator",{attrs:{rows:10,totalRecords:e.totalRecords,rowsPerPageOptions:[10,20,30]}}),t("h5",[e._v("Custom")]),t("Paginator",{attrs:{first:e.first,rows:1,totalRecords:e.totalRecords2,template:"FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"},on:{"update:first":function(r){e.first=r}},scopedSlots:e._u([{key:"start",fn:function(){return[t("Button",{attrs:{type:"button",icon:"pi pi-refresh"},on:{click:function(r){return e.reset()}}})]},proxy:!0},{key:"end",fn:function(){return[t("Button",{attrs:{type:"button",icon:"pi pi-search"}})]},proxy:!0}])}),t("div",{staticClass:"image-gallery"},[t("img",{attrs:{src:e.$publicUrl("demo/images/nature/"+e.image+".jpg")}})])],1)]),t("PaginatorDoc")],1)},v=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[a._v("Paginator")]),e("p",[a._v("Paginator is a generic component to display content in paged format.")])])])}],c=o(d,g,v,!1,null,"9fa6b2fa");const f=c.exports;export{f as default};
//# sourceMappingURL=PaginatorDemo-CebGklEJ.js.map