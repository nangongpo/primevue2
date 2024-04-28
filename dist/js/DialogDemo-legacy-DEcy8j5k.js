System.register(["./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(t,i){"use strict";var e;return{setters:[function(t){e=t.n},null,null,null],execute:function(){var i=document.createElement("style");i.textContent=".p-button[data-v-9413dc04]{margin:0 .5rem 0 0;min-width:10rem}p[data-v-9413dc04]{margin:0}.confirmation-content[data-v-9413dc04]{display:flex;align-items:center;justify-content:center}.p-dialog .p-button[data-v-9413dc04]{min-width:6rem}\n",document.head.appendChild(i);var o=e({},(function(){var t=this,i=t._self._c;return i("div",{staticClass:"content-section documentation"},[i("TabView",[i("TabPanel",{attrs:{header:"Documentation"}},[i("h5",[t._v("Import")]),i("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import Dialog from 'primevue2/dialog'; ")]),i("h5",[t._v("Getting Started")]),i("p",[t._v("Dialog is used as a container and visibility is managed with "),i("i",[t._v("visible")]),t._v(" property that requires the sync operator for two-way binding.")]),i("CodeHighlight",[t._v(' <Dialog header="Header" :visible.sync="display" > Content </Dialog> ')]),i("CodeHighlight",{attrs:{lang:"js"}},[t._v(" export default { data() { return { display: false } } } ")]),i("h5",[t._v("Header and Footer")]),i("p",[t._v("Header and Footer sections are defined using properties with the same name that accept simple strings or with the "),i("i",[t._v("header")]),t._v(" and "),i("i",[t._v("footer")]),t._v(" templates for custom content.")]),i("CodeHighlight",[t._v(' <Dialog header="Header" footer="Footer" :visible.sync="display"> Content </Dialog> ')]),i("CodeHighlight",[t._v(' <Dialog :visible.sync="display"> <template #header> <h3>Header</h3> </template> Content <template #footer> <Button label="No" icon="pi pi-times" class="p-button-text"/> <Button label="Yes" icon="pi pi-check" autofocus /> </template> </Dialog> ')]),i("h5",[t._v("Positioning")]),i("p",[t._v("Dialog location is controlled with the "),i("i",[t._v("position")]),t._v(' property whose default value is center. Other valid values are top", "bottom", "left", "right", "topleft", "topright", "bottomleft" and "bottomright"')]),i("CodeHighlight",[t._v(' <Dialog position="top" :visible.sync="display"> Content </Dialog> ')]),i("h5",[t._v("Popup Content inside the Dialog")]),i("p",[t._v("If the dialog contains components with popup elements such as Dropdown or Calendar, set "),i("i",[t._v("contentStyle")]),t._v(" to overflow:visible so that overlays can be displayed outside of the content area.")]),i("CodeHighlight",[t._v(' <Dialog :visible.sync="display" :contentStyle="{overflow: \'visible\'}"> Content </Dialog> ')]),i("h5",[t._v("Initial Focus")]),i("p",[t._v("Adding "),i("i",[t._v("autofocus")]),t._v(" to an element in the dialog makes it the initial focus target when dialog gets shown.")]),i("CodeHighlight",[t._v(' <Dialog :visible.sync="display"> Content <template #footer> <Button label="No" /> <Button label="Yes" autofocus/> </template> </Dialog> ')]),i("h5",[t._v("Properties")]),i("div",{staticClass:"doc-tablewrapper"},[i("table",{staticClass:"doc-table"},[i("thead",[i("tr",[i("th",[t._v("Name")]),i("th",[t._v("Type")]),i("th",[t._v("Default")]),i("th",[t._v("Description")])])]),i("tbody",[i("tr",[i("td",[t._v("header")]),i("td",[t._v("any")]),i("td",[t._v("null")]),i("td",[t._v("Title content of the dialog.")])]),i("tr",[i("td",[t._v("footer")]),i("td",[t._v("any")]),i("td",[t._v("null")]),i("td",[t._v("Footer content of the dialog.")])]),i("tr",[i("td",[t._v("visible")]),i("td",[t._v("boolean")]),i("td",[t._v("false")]),i("td",[t._v("Specifies the visibility of the dialog.")])]),i("tr",[i("td",[t._v("modal")]),i("td",[t._v("boolean")]),i("td",[t._v("null")]),i("td",[t._v("Defines if background should be blocked when dialog is displayed.")])]),i("tr",[i("td",[t._v("closeOnEscape")]),i("td",[t._v("boolean")]),i("td",[t._v("true")]),i("td",[t._v("Specifies if pressing escape key should hide the dialog.")])]),i("tr",[i("td",[t._v("dismissableMask")]),i("td",[t._v("boolean")]),i("td",[t._v("false")]),i("td",[t._v("Specifies if clicking the modal background should hide the dialog.")])]),i("tr",[i("td",[t._v("position")]),i("td",[t._v("string")]),i("td",[t._v("center")]),i("td",[t._v('Position of the dialog, options are "center", "top", "bottom", "left", "right", "topleft", "topright", "bottomleft" or "bottomright".')])]),i("tr",[i("td",[t._v("containerStyle")]),i("td",[t._v("string")]),i("td",[t._v("null")]),i("td",[t._v("Inline style of the component.")])]),i("tr",[i("td",[t._v("contentStyle")]),i("td",[t._v("object")]),i("td",[t._v("null")]),i("td",[t._v("Style of the content section.")])]),i("tr",[i("td",[t._v("rtl")]),i("td",[t._v("boolean")]),i("td",[t._v("null")]),i("td",[t._v("When enabled dialog is displayed in RTL direction.")])]),i("tr",[i("td",[t._v("closable")]),i("td",[t._v("boolean")]),i("td",[t._v("true")]),i("td",[t._v("Adds a close icon to the header to hide the dialog.")])]),i("tr",[i("td",[t._v("showHeader")]),i("td",[t._v("boolean")]),i("td",[t._v("true")]),i("td",[t._v("Whether to show the header or not.")])]),i("tr",[i("td",[t._v("baseZIndex")]),i("td",[t._v("number")]),i("td",[t._v("0")]),i("td",[t._v("Base zIndex value to use in layering.")])]),i("tr",[i("td",[t._v("autoZIndex")]),i("td",[t._v("boolean")]),i("td",[t._v("true")]),i("td",[t._v("Whether to automatically manage layering.")])]),i("tr",[i("td",[t._v("ariaCloseLabel")]),i("td",[t._v("string")]),i("td",[t._v("close")]),i("td",[t._v("Aria label of the close icon.")])]),i("tr",[i("td",[t._v("maximizable")]),i("td",[t._v("boolean")]),i("td",[t._v("false")]),i("td",[t._v("Whether the dialog can be displayed full screen.")])]),i("tr",[i("td",[t._v("appendTo")]),i("td",[t._v("string")]),i("td",[t._v("null")]),i("td",[t._v('Id of the element or "body" for document where the overlay should be appended to.')])])])])]),i("h5",[t._v("Events")]),i("div",{staticClass:"doc-tablewrapper"},[i("table",{staticClass:"doc-table"},[i("thead",[i("tr",[i("th",[t._v("Name")]),i("th",[t._v("Parameters")]),i("th",[t._v("Description")])])]),i("tbody",[i("tr",[i("td",[t._v("hide")]),i("td",[t._v("event: Event object")]),i("td",[t._v("Callback to invoke when dialog is hidden.")])]),i("tr",[i("td",[t._v("show")]),i("td",[t._v("event: Event object")]),i("td",[t._v("Callback to invoke when dialog is showed.")])])])])]),i("h5",[t._v("Slots")]),i("div",{staticClass:"doc-tablewrapper"},[i("table",{staticClass:"doc-table"},[i("thead",[i("tr",[i("th",[t._v("Name")]),i("th",[t._v("Parameters")])])]),i("tbody",[i("tr",[i("td",[t._v("header")]),i("td",[t._v("-")])]),i("tr",[i("td",[t._v("footer")]),i("td",[t._v("-")])])])])]),i("h5",[t._v("Styling")]),i("p",[t._v("Following is the list of structural style classes, for theming classes visit "),i("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),i("div",{staticClass:"doc-tablewrapper"},[i("table",{staticClass:"doc-table"},[i("thead",[i("tr",[i("th",[t._v("Name")]),i("th",[t._v("Element")])])]),i("tbody",[i("tr",[i("td",[t._v("p-dialog")]),i("td",[t._v("Container element.")])]),i("tr",[i("td",[t._v("p-dialog-titlebar")]),i("td",[t._v("Container of header.")])]),i("tr",[i("td",[t._v("p-dialog-title")]),i("td",[t._v("Header element.")])]),i("tr",[i("td",[t._v("p-dialog-titlebar-icon")]),i("td",[t._v("Icon container inside header.")])]),i("tr",[i("td",[t._v("p-dialog-titlebar-close")]),i("td",[t._v("Close icon element.")])]),i("tr",[i("td",[t._v("p-dialog-content")]),i("td",[t._v("Content element")])])])])]),i("h5",[t._v("Dependencies")]),i("p",[t._v("None.")])],1),i("TabPanel",{attrs:{header:"Source"}},[i("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/dialog",target:"_blank",rel:"noopener noreferrer"}},[i("span",[t._v("View on GitHub")])]),i("CodeHighlight",[[t._v(' <h5>Basic</h5> <Button label="Show" icon="pi pi-external-link" @click="openBasic" /> <Dialog header="Header " :visible.sync="displayBasic" :containerStyle="{width: \'50vw\'}"> <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <template #footer> <Button label="No" icon="pi pi-times" @click="closeBasic" class="p-button-text"/> <Button label="Yes" icon="pi pi-check" @click="closeBasic" autofocus /> </template> </Dialog> <Button label="Long Content" icon="pi pi-external-link" @click="openBasic2" /> <Dialog header="Header" :visible.sync="displayBasic2" :containerStyle="{width: \'50vw\'}"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p> <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p> <template #footer> <Button label="No" icon="pi pi-times" @click="closeBasic2" class="p-button-text"/> <Button label="Yes" icon="pi pi-check" @click="closeBasic2" autofocus /> </template> </Dialog> <h5>Modal</h5> <Button label="Show" icon="pi pi-external-link" @click="openModal" /> <Dialog header="Header" :visible.sync="displayModal" :containerStyle="{width: \'50vw\'}" :modal="true"> <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <template #footer> <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/> <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus /> </template> </Dialog> <h5>Confirmation</h5> <Button label="Confirm" icon="pi pi-external-link" @click="openConfirmation" /> <Dialog header="Confirmation" :visible.sync="displayConfirmation" :containerStyle="{width: \'350px\'}" :modal="true"> <div class="confirmation-content"> <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" /> <span>Are you sure you want to proceed?</span> </div> <template #footer> <Button label="No" icon="pi pi-times" @click="closeConfirmation" class="p-button-text"/> <Button label="Yes" icon="pi pi-check" @click="closeConfirmation" class="p-button-text" autofocus /> </template> </Dialog> <h5>Maximizable</h5> <Button label="Show" icon="pi pi-external-link" @click="openMaximizable" /> <Dialog header="Header" :visible.sync="displayMaximizable" :containerStyle="{width: \'50vw\'}" :maximizable="true" :modal="true"> <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <template #footer> <Button label="No" icon="pi pi-times" @click="closeMaximizable" class="p-button-text"/> <Button label="Yes" icon="pi pi-check" @click="closeMaximizable" autofocus /> </template> </Dialog> <h5>Position</h5> <div class="grid flex-column"> <div class="p-col"> <Button label="Left" icon="pi pi-arrow-right" @click="openPosition(\'left\')" class="p-button-warning" /> <Button label="Right" icon="pi pi-arrow-left" @click="openPosition(\'right\')" class="p-button-warning" /> </div> <div class="p-col"> <Button label="Top" icon="pi pi-arrow-down" @click="openPosition(\'top\')" class="p-button-warning" /> <Button label="TopLeft" icon="pi pi-arrow-down-right" @click="openPosition(\'topleft\')" class="p-button-warning" /> <Button label="TopRight" icon="pi pi-arrow-down-left" @click="openPosition(\'topright\')" class="p-button-warning" /> </div> <div class="p-col"> <Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition(\'bottom\')" class="p-button-warning" /> <Button label="BottomLeft" icon="pi pi-arrow-up-right" @click="openPosition(\'bottomleft\')" class="p-button-warning" /> <Button label="BottomRight" icon="pi pi-arrow-up-left" @click="openPosition(\'bottomright\')" class="p-button-warning" /> </div> </div> <Dialog header="Header" :visible.sync="displayPosition" :containerStyle="{width: \'50vw\'}" :position="position" :modal="true"> <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <template #footer> <Button label="No" icon="pi pi-times" @click="closePosition" class="p-button-text"/> <Button label="Yes" icon="pi pi-check" @click="closePosition" autofocus /> </template> </Dialog> ')]],2),i("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" export default { data() { return { displayBasic: false, displayBasic2: false, displayModal: false, displayConfirmation: false, displayMaximizable: false, displayPosition: false, position: 'center' } }, methods: { openBasic() { this.displayBasic = true; }, closeBasic() { this.displayBasic = false; }, openBasic2() { this.displayBasic2 = true; }, closeBasic2() { this.displayBasic2 = false; }, openModal() { this.displayModal = true; }, closeModal() { this.displayModal = false; }, openConfirmation() { this.displayConfirmation = true; }, closeConfirmation() { this.displayConfirmation = false; }, openMaximizable() { this.displayMaximizable = true; }, closeMaximizable() { this.displayMaximizable = false; }, openPosition(position) { this.position = position; this.displayPosition = true; }, closePosition() { this.displayPosition = false; } } } ")]),i("CodeHighlight",{attrs:{lang:"css"}},[t._v(" .p-button { margin: 0 .5rem 0 0; min-width: 10rem; } p { margin: 0; } .confirmation-content { display: flex; align-items: center; justify-content: center; } ")])],1)],1)],1)}),[],!1,null,null).exports;t("default",e({data:function(){return{displayBasic:!1,displayBasic2:!1,displayModal:!1,displayConfirmation:!1,displayMaximizable:!1,displayPosition:!1,position:"center"}},methods:{openBasic:function(){this.displayBasic=!0},closeBasic:function(){this.displayBasic=!1},openBasic2:function(){this.displayBasic2=!0},closeBasic2:function(){this.displayBasic2=!1},openModal:function(){this.displayModal=!0},closeModal:function(){this.displayModal=!1},openConfirmation:function(){this.displayConfirmation=!0},closeConfirmation:function(){this.displayConfirmation=!1},openMaximizable:function(){this.displayMaximizable=!0},closeMaximizable:function(){this.displayMaximizable=!1},openPosition:function(t){this.position=t,this.displayPosition=!0},closePosition:function(){this.displayPosition=!1}},components:{DialogDoc:o}},(function(){var t=this,i=t._self._c;return i("div",[t._m(0),i("div",{staticClass:"content-section implementation"},[i("div",{staticClass:"card"},[i("h5",[t._v("Basic")]),i("Button",{attrs:{label:"Show",icon:"pi pi-external-link"},on:{click:t.openBasic}}),i("Dialog",{attrs:{header:"Header",visible:t.displayBasic,containerStyle:{width:"50vw"}},on:{"update:visible":function(i){t.displayBasic=i}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("Button",{staticClass:"p-button-text",attrs:{label:"No",icon:"pi pi-times"},on:{click:t.closeBasic}}),i("Button",{attrs:{label:"Yes",icon:"pi pi-check",autofocus:""},on:{click:t.closeBasic}})]},proxy:!0}])},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),i("Button",{attrs:{label:"Long Content",icon:"pi pi-external-link"},on:{click:t.openBasic2}}),i("Dialog",{attrs:{header:"Header",visible:t.displayBasic2,containerStyle:{width:"50vw"}},on:{"update:visible":function(i){t.displayBasic2=i}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("Button",{staticClass:"p-button-text",attrs:{label:"No",icon:"pi pi-times"},on:{click:t.closeBasic2}}),i("Button",{attrs:{label:"Yes",icon:"pi pi-check",autofocus:""},on:{click:t.closeBasic2}})]},proxy:!0}])},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),i("p",[t._v('"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?')]),i("p",[t._v("At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.")])]),i("h5",[t._v("Modal")]),i("Button",{attrs:{label:"Show",icon:"pi pi-external-link"},on:{click:t.openModal}}),i("Dialog",{attrs:{header:"Header",visible:t.displayModal,containerStyle:{width:"50vw"},modal:!0},on:{"update:visible":function(i){t.displayModal=i}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("Button",{staticClass:"p-button-text",attrs:{label:"No",icon:"pi pi-times"},on:{click:t.closeModal}}),i("Button",{attrs:{label:"Yes",icon:"pi pi-check",autofocus:""},on:{click:t.closeModal}})]},proxy:!0}])},[i("p",{staticClass:"m-0"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),i("h5",[t._v("Confirmation")]),i("Button",{attrs:{label:"Confirm",icon:"pi pi-external-link"},on:{click:t.openConfirmation}}),i("Dialog",{attrs:{header:"Confirmation",visible:t.displayConfirmation,containerStyle:{width:"350px"},modal:!0},on:{"update:visible":function(i){t.displayConfirmation=i}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("Button",{staticClass:"p-button-text",attrs:{label:"No",icon:"pi pi-times"},on:{click:t.closeConfirmation}}),i("Button",{staticClass:"p-button-text",attrs:{label:"Yes",icon:"pi pi-check",autofocus:""},on:{click:t.closeConfirmation}})]},proxy:!0}])},[i("div",{staticClass:"confirmation-content"},[i("i",{staticClass:"pi pi-exclamation-triangle mr-3",staticStyle:{"font-size":"2rem"}}),i("span",[t._v("Are you sure you want to proceed?")])])]),i("h5",[t._v("Maximizable")]),i("Button",{attrs:{label:"Show",icon:"pi pi-external-link"},on:{click:t.openMaximizable}}),i("Dialog",{attrs:{header:"Header",visible:t.displayMaximizable,containerStyle:{width:"50vw"},maximizable:!0,modal:!0},on:{"update:visible":function(i){t.displayMaximizable=i}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("Button",{staticClass:"p-button-text",attrs:{label:"No",icon:"pi pi-times"},on:{click:t.closeMaximizable}}),i("Button",{attrs:{label:"Yes",icon:"pi pi-check",autofocus:""},on:{click:t.closeMaximizable}})]},proxy:!0}])},[i("p",{staticClass:"m-0"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),i("h5",[t._v("Position")]),i("div",{staticClass:"grid flex-column"},[i("div",{staticClass:"col"},[i("Button",{staticClass:"p-button-warning",attrs:{label:"Left",icon:"pi pi-arrow-right"},on:{click:function(i){return t.openPosition("left")}}}),i("Button",{staticClass:"p-button-warning",attrs:{label:"Right",icon:"pi pi-arrow-left"},on:{click:function(i){return t.openPosition("right")}}})],1),i("div",{staticClass:"col"},[i("Button",{staticClass:"p-button-warning",attrs:{label:"Top",icon:"pi pi-arrow-down"},on:{click:function(i){return t.openPosition("top")}}}),i("Button",{staticClass:"p-button-warning",attrs:{label:"TopLeft",icon:"pi pi-arrow-down-right"},on:{click:function(i){return t.openPosition("topleft")}}}),i("Button",{staticClass:"p-button-warning",attrs:{label:"TopRight",icon:"pi pi-arrow-down-left"},on:{click:function(i){return t.openPosition("topright")}}})],1),i("div",{staticClass:"col"},[i("Button",{staticClass:"p-button-warning",attrs:{label:"Bottom",icon:"pi pi-arrow-up"},on:{click:function(i){return t.openPosition("bottom")}}}),i("Button",{staticClass:"p-button-warning",attrs:{label:"BottomLeft",icon:"pi pi-arrow-up-right"},on:{click:function(i){return t.openPosition("bottomleft")}}}),i("Button",{staticClass:"p-button-warning",attrs:{label:"BottomRight",icon:"pi pi-arrow-up-left"},on:{click:function(i){return t.openPosition("bottomright")}}})],1)]),i("Dialog",{style:{width:"50vw"},attrs:{header:"Header",visible:t.displayPosition,position:t.position,modal:!0},on:{"update:visible":function(i){t.displayPosition=i}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("Button",{staticClass:"p-button-text",attrs:{label:"No",icon:"pi pi-times"},on:{click:t.closePosition}}),i("Button",{attrs:{label:"Yes",icon:"pi pi-check",autofocus:""},on:{click:t.closePosition}})]},proxy:!0}])},[i("p",{staticClass:"m-0"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])],1)]),i("DialogDoc")],1)}),[function(){var t=this,i=t._self._c;return i("div",{staticClass:"content-section introduction"},[i("div",{staticClass:"feature-intro"},[i("h1",[t._v("Dialog")]),i("p",[t._v("Dialog is a container to display content in an overlay window.")])])])}],!1,null,"9413dc04").exports)}}}));
//# sourceMappingURL=DialogDemo-legacy-DEcy8j5k.js.map