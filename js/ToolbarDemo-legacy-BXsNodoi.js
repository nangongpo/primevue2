System.register(["./app.component-legacy-cLUjg6K2.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(t,n){"use strict";var e;return{setters:[function(t){e=t.n},null,null,null,null],execute:function(){var n=e({name:"Documentation",data:function(){return{importCode:{basic:"\nimport Toolbar from 'primevue2/toolbar';\n        "},baseCode:{basic:'\n<Toolbar>\n    <template #start>\n        <Button label="New" icon="pi pi-plus" class="mr-2" />\n        <Button label="Upload" icon="pi pi-upload" class="p-button-success" />\n        <i class="pi pi-bars p-toolbar-separator mr-2" />\n        <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton>\n    </template>\n\n    <template #end>\n        <Button icon="pi pi-search" class="mr-2" />\n        <Button icon="pi pi-calendar" class="p-button-success mr-2" />\n        <Button icon="pi pi-times" class="p-button-danger" />\n    </template>\n</Toolbar>\n        '}}}},(function(){var t=this,n=t._self._c;return n("div",[n("h5",[t._v("Import")]),n("DocSectionCode",{attrs:{code:t.importCode,importCode:""}}),n("h5",[t._v("Getting Started")]),t._m(0),n("DocSectionCode",{attrs:{code:t.baseCode}}),n("h5",[t._v("Slots")]),t._m(1),n("h5",[t._v("Styling")]),n("p",[t._v("Following is the list of structural style classes, for theming classes visit "),n("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),t._m(2),n("h5",[t._v("Dependencies")]),n("p",[t._v("None.")])],1)}),[function(){var t=this,n=t._self._c;return n("p",[t._v("Toolbar provides "),n("i",[t._v("start")]),t._v(" and "),n("i",[t._v("end")]),t._v(" templates to place content at these sections.")])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"doc-tablewrapper"},[n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[t._v("Name")]),n("th",[t._v("Parameters")])])]),n("tbody",[n("tr",[n("td",[t._v("start")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("end")]),n("td",[t._v("-")])])])])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"doc-tablewrapper"},[n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[t._v("Name")]),n("th",[t._v("Element")])])]),n("tbody",[n("tr",[n("td",[t._v("p-toolbar")]),n("td",[t._v("Main container element.")])]),n("tr",[n("td",[t._v("p-toolbar-group-left")]),n("td",[t._v("Left content container.")])]),n("tr",[n("td",[t._v("p-toolbar-group-right")]),n("td",[t._v("Right content container.")])])])])])}],!1,null,null).exports,o=e({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<Toolbar>\n    <template #start>\n        <Button label="New" icon="pi pi-plus" class="mr-2" />\n        <Button label="Upload" icon="pi pi-upload" class="p-button-success" />\n        <i class="pi pi-bars p-toolbar-separator mr-2" />\n        <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton>\n    </template>\n\n    <template #end>\n        <Button icon="pi pi-search" class="mr-2" />\n        <Button icon="pi pi-calendar" class="p-button-success mr-2" />\n        <Button icon="pi pi-times" class="p-button-danger" />\n    </template>\n</Toolbar>\n        '},sourceCode2:{basic:"\nexport default {\n    data() {\n        return {\n            items: [\n                {\n                    label: 'Update',\n                    icon: 'pi pi-refresh'\n                },\n                {\n                    label: 'Delete',\n                    icon: 'pi pi-times'\n                },\n                {\n                    label: 'Vue Website',\n                    icon: 'pi pi-external-link',\n                    command: () => {\n                        window.location.href = 'https://vuejs.org/'\n                    }\n                },\n                {   label: 'Upload',\n                    icon: 'pi pi-upload',\n                    command: () => {\n                        window.location.hash = \"/fileupload\"\n                    }\n                }\n            ]\n        }\n    }\n}\n        "}}}},(function(){var t=this,n=t._self._c;return n("div",[t._m(0),n("DocSectionCode",{attrs:{code:t.sourceCode1}}),n("DocSectionCode",{attrs:{code:t.sourceCode2,importCode:""}})],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/toolbar",target:"_blank",rel:"noopener noreferrer"}},[t("span",[this._v("View on GitHub")])])}],!1,null,null).exports,a=e({components:{Documentation:n,SourceCode:o}},(function(){var t=this._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("Documentation")],1),t("TabPanel",{attrs:{header:"Source"}},[t("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;t("default",e({data:function(){return{items:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"Vue Website",icon:"pi pi-external-link",command:function(){window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",command:function(){window.location.hash="/fileupload"}}]}},components:{ToolbarDoc:a}},(function(){var t=this,n=t._self._c;return n("div",[t._m(0),n("div",{staticClass:"content-section implementation"},[n("Toolbar",{scopedSlots:t._u([{key:"start",fn:function(){return[n("Button",{staticClass:"mr-2",attrs:{label:"New",icon:"pi pi-plus"}}),n("Button",{staticClass:"p-button-success",attrs:{label:"Upload",icon:"pi pi-upload"}}),n("i",{staticClass:"pi pi-bars p-toolbar-separator mr-2"}),n("SplitButton",{staticClass:"p-button-warning",attrs:{label:"Save",icon:"pi pi-check",model:t.items}})]},proxy:!0},{key:"end",fn:function(){return[n("Button",{staticClass:"mr-2",attrs:{icon:"pi pi-search"}}),n("Button",{staticClass:"p-button-success mr-2",attrs:{icon:"pi pi-calendar"}}),n("Button",{staticClass:"p-button-danger",attrs:{icon:"pi pi-times"}})]},proxy:!0}])})],1),n("ToolbarDoc")],1)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"content-section introduction"},[n("div",{staticClass:"feature-intro"},[n("h1",[t._v("Toolbar")]),n("p",[t._v("Toolbar is a grouping component for buttons and other content.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=ToolbarDemo-legacy-BXsNodoi.js.map