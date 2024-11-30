System.register(["./app.component-legacy-7lS-4wLG.js","./index-legacy-amQum4aa.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js","./primeflex-legacy-BYbDUxVK.js","./primeicons-legacy-CF71Ovbl.js","./vuelidate-legacy-BkdACyzP.js","./fast-diff-legacy-2zhWRgQ3.js"],(function(e,t){"use strict";var i,a;return{setters:[function(e){i=e.n},function(e){a=e.E},null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".tabview-custom i[data-v-80fa1dd5],.tabview-custom span[data-v-80fa1dd5]{vertical-align:middle}.tabview-custom span[data-v-80fa1dd5]{margin:0 .5rem}.p-button[data-v-80fa1dd5]{margin-right:.25rem}.p-tabview p[data-v-80fa1dd5]{line-height:1.5;margin:0}\n/*$vite$:1*/",document.head.appendChild(t);var n=i({name:"Documentation",data:function(){return{importCode:{basic:"\nimport TabView from 'primevue2/tabview';\nimport TabPanel from 'primevue2/tabpanel';\n        "},baseCode:{basic:'\n<TabView>\n\t<TabPanel header="Header I">\n\t\tContent I\n\t</TabPanel>\n\t<TabPanel header="Header II">\n\t\tContent II\n\t</TabPanel>\n\t<TabPanel header="Header III">\n\t\tContent III\n\t</TabPanel>\n</TabView>\n        '},activeCode:{basic:'\n<TabView :activeIndex="active">\n\t<TabPanel header="Header I">\n\t\tContent I\n\t</TabPanel>\n\t<TabPanel header="Header II">\n\t\tContent II\n\t</TabPanel>\n\t<TabPanel header="Header III">\n\t\tContent III\n\t</TabPanel>\n</TabView>\n        '},activeCode2:{basic:'\n<TabView :activeIndex.sync="active">\n\t<TabPanel header="Header I">\n\t\tContent I\n\t</TabPanel>\n\t<TabPanel header="Header II">\n\t\tContent II\n\t</TabPanel>\n\t<TabPanel header="Header III">\n\t\tContent III\n\t</TabPanel>\n</TabView>\n        '},disabledCode:{basic:'\n<TabView>\n\t<TabPanel header="Header I">\n\t\tContent I\n\t</TabPanel>\n\t<TabPanel header="Header II">\n\t\tContent II\n\t</TabPanel>\n\t<TabPanel header="Header III" :disabled="true">\n\t\tContent III\n\t</TabPanel>\n</TabView>\n        '},headerTemplateCode:{basic:'\n<TabView class="tabview-custom">\n\t<TabPanel>\n\t\t<template #header>\n\t\t\t<i class="pi pi-calendar"></i>\n\t\t\t<span>Header I</span>\n\t\t</template>\n\t\tContent I\n\t</TabPanel>\n\t<TabPanel>\n\t\t<template #header>\n\t\t\t<span>Header II</span>\n\t\t\t<i class="pi pi-user"></i>\n\t\t</template>\n\t\tContent II\n\t</TabPanel>\n</TabView>\n        '},programmaticControlCode:{basic:'\n<Button @click="active = 0" class="p-button-text" label="Activate 1st" />\n<Button @click="active = 1" class="p-button-text mr-2" label="Activate 2nd" />\n<Button @click="active = 2" class="p-button-text mr-2" label="Activate 3rd" />\n\n<TabView :activeIndex="active">\n    <TabPanel header="Header I">\n        Content I\n    </TabPanel>\n    <TabPanel header="Header II">\n        Content II\n    </TabPanel>\n    <TabPanel header="Header III">\n       Content III\n    </TabPanel>\n</TabView>\n        '},programmaticControlCode2:{basic:"\nexport default {\n    data() {\n        return {\n            active: 0\n        }\n    }\n}\n        "},dynamicTabsCode:{basic:'\n<TabView>\n    <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">\n        <p>{{tab.content}}</p>\n    </TabPanel>\n</TabView>\n        '},dynamicTabsCode2:{basic:"\nexport default {\n    data() {\n        return {\n            {title: 'Title 1', content: 'Content 1'},\n\t\t\t{title: 'Title 3', content: 'Content 2'},\n\t\t\t{title: 'Title 3', content: 'Content 3'}\n        }\n    }\n}\n        "},scrollableCode:{basic:'\n<TabView scrollable>\n\t<TabPanel header="Header I">\n\t\tContent I\n\t</TabPanel>\n\t<TabPanel header="Header II">\n\t\tContent II\n\t</TabPanel>\n\t<TabPanel header="Header III">\n\t\tContent III\n\t</TabPanel>\n</TabView>\n        '}}}},(function(){var e=this,t=e._self._c;return t("div",[t("h5",[e._v("Import")]),t("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),t("h5",[e._v("Getting Started")]),t("p",[e._v("Tabview element consists of one or more TabPanel elements. Header of the tab is defined using header attribute. ")]),t("DocSectionCode",{attrs:{code:e.baseCode}}),t("h5",[e._v("Active")]),t("p",[e._v("Visibility of the content is specified with the active property that supports one or two-way binding.")]),t("DocSectionCode",{attrs:{code:e.activeCode}}),t("p",[e._v("Two-way binding requires the sync operator.")]),t("DocSectionCode",{attrs:{code:e.activeCode2}}),t("h5",[e._v("Disabled")]),t("p",[e._v("A tab can be disabled to prevent the content to be displayed by setting the disabled property on a panel.")]),t("DocSectionCode",{attrs:{code:e.disabledCode}}),t("h5",[e._v("Header Template")]),t("p",[e._v("Custom content for the title section of a panel is defined using the header template.")]),t("DocSectionCode",{attrs:{code:e.headerTemplateCode}}),t("h5",[e._v("Programmatic Control")]),t("p",[e._v("Tabs can be controlled programmatically using active property that defines the active tab.")]),t("DocSectionCode",{attrs:{code:e.programmaticControlCode}}),t("DocSectionCode",{attrs:{code:e.programmaticControlCode2,importCode:""}}),t("h5",[e._v("Dynamic Tabs")]),t("DocSectionCode",{attrs:{code:e.dynamicTabsCode}}),t("DocSectionCode",{attrs:{code:e.dynamicTabsCode2,importCode:""}}),t("h5",[e._v("Scrollable")]),e._m(0),t("DocSectionCode",{attrs:{code:e.scrollableCode}}),t("h5",[e._v("Properties of TabPanel")]),e._m(1),t("h5",[e._v("Properties of TabView")]),t("p",[e._v("Any additional properties like style and class are passed to the main container element.")]),e._m(2),t("h5",[e._v("Events")]),e._m(3),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),e._m(4),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1)}),[function(){var e=this,t=e._self._c;return t("p",[e._v("Enable "),t("i",[e._v("scrollable")]),e._v(" property to display buttons at each side of the tab headers that scrolls the tab list. ")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("header")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Orientation of tab headers.")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("boolean")]),t("td",[e._v("null")]),t("td",[e._v("Whether the tab is disabled.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("activeIndex")]),t("td",[e._v("Number")]),t("td",[e._v("0")]),t("td",[e._v("Index of the active tab.")])]),t("tr",[t("td",[e._v("scrollable")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When enabled displays buttons at each side of the tab headers to scroll the tab list.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("tab-change")]),t("td",[e._v("event.originalEvent: Browser event "),t("br"),e._v(" event.index: Index of the selected tab ")]),t("td",[e._v("Callback to invoke when an active tab is changed.")])]),t("tr",[t("td",[e._v("tab-click")]),t("td",[e._v("event.originalEvent: Browser event "),t("br"),e._v(" event.index: Index of the clicked tab ")]),t("td",[e._v("Callback to invoke when an active tab is clicked.")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-tabview")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-tabview-nav")]),t("td",[e._v("Container of headers.")])]),t("tr",[t("td",[e._v("p-tabview-selected")]),t("td",[e._v("Selected tab header.")])]),t("tr",[t("td",[e._v("p-tabview-panels")]),t("td",[e._v("Container panels.")])]),t("tr",[t("td",[e._v("p-tabview-panel")]),t("td",[e._v("Content of a tab.")])])])])])}],!1,null,null).exports,o=i({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<div class="card">\n    <h5>Default</h5>\n    <TabView>\n        <TabPanel header="Header I">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        </TabPanel>\n        <TabPanel header="Header II">\n            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\n                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>\n        </TabPanel>\n        <TabPanel header="Header III">\n            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati\n                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>\n        </TabPanel>\n    </TabView>\n</div>\n\n<div class="card">\n    <h5>Programmatic</h5>\n    <div class="py-2">\n        <Button @click="active1 = 0" class="p-button-text" label="Activate 1st" />\n        <Button @click="active1 = 1" class="p-button-text mr-2" label="Activate 2nd" />\n        <Button @click="active1 = 2" class="p-button-text mr-2" label="Activate 3rd" />\n    </div>\n\n    <TabView ref="tabview2" :activeIndex="active1">\n        <TabPanel header="Header I">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        </TabPanel>\n        <TabPanel header="Header II">\n            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\n                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>\n        </TabPanel>\n        <TabPanel header="Header III">\n            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati\n                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>\n        </TabPanel>\n    </TabView>\n</div>\n\n<div class="card">\n    <h5>Disabled</h5>\n    <TabView>\n        <TabPanel header="Header I">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        </TabPanel>\n        <TabPanel header="Header II">\n            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\n                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>\n        </TabPanel>\n        <TabPanel header="Header III">\n            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati\n                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>\n        </TabPanel>\n        <TabPanel header="Header IV" :disabled="true"></TabPanel>\n    </TabView>\n</div>\n\n<div class="card">\n    <h5>Custom Headers</h5>\n    <TabView class="tabview-custom">\n        <TabPanel>\n            <template #header>\n                <i class="pi pi-calendar"></i>\n                <span>Header I</span>\n            </template>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        </TabPanel>\n        <TabPanel>\n            <template #header>\n                <span>Header II</span>\n                <i class="pi pi-user"></i>\n            </template>\n            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\n                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>\n        </TabPanel>\n        <TabPanel>\n            <template #header>\n                <i class="pi pi-search"></i>\n                <span>Header III</span>\n                <i class="pi pi-cog"></i>\n            </template>\n            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati\n                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>\n        </TabPanel>\n    </TabView>\n</div>\n\n<div class="card">\n    <h5>Scrollable</h5>\n    <div class="py-2">\n        <Button @click="active2 = 0" class="p-button-text" label="Activate 1st" />\n        <Button @click="active2 = 29" class="p-button-text mr-2" label="Activate 30th" />\n        <Button @click="active2 = 49" class="p-button-text mr-2" label="Activate 50th" />\n    </div>\n\n    <TabView :activeIndex.sync="active2" :scrollable="true">\n        <TabPanel v-for="tab in scrollableTabs" :key="tab.title" :header="tab.title">\n            <p>{{tab.content}}</p>\n        </TabPanel>\n    </TabView>\n</div>\n        '},sourceCode2:{basic:"\nexport default {\n    data() {\n        return {\n            active1: 0,\n            active2: 0,\n            tabs: [\n                {\n                    title: 'Header I',\n                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation\n                            ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n                },\n                {\n                    title: 'Header II',\n                    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n                            architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\n                            voluptatem sequi nesciunt.Consectetur, adipisci velit, sed quia non numquam eius modi.'\n                },\n                {\n                    title: 'Header III',\n                    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati\n                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.Et harum quidem rerum facilis est et expedita distinctio.\n                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.'\n                }\n            ],\n            scrollableTabs: Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${ i + 1 } `, content: `Tab ${ i + 1 } Content` }))\n        }\n    }\n        "},sourceCode3:{basic:"\n.tabview-custom {\n\ti, span {\n\t\tvertical-align: middle;\n\t}\n\n\tspan {\n\t\tmargin: 0 .5rem;\n\t}\n}\n        "}}}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("DocSectionCode",{attrs:{code:e.sourceCode1}}),t("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}}),t("DocSectionCode",{attrs:{code:e.sourceCode3,importStyle:""}})],1)}),[function(){var e=this._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/tabview",target:"_blank",rel:"noopener noreferrer"}},[e("span",[this._v("View on GitHub")])])}],!1,null,null).exports,s=i({components:{Documentation:n,SourceCode:o}},(function(){var e=this._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("Documentation")],1),e("TabPanel",{attrs:{header:"Source"}},[e("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;e("default",i({data:function(){return{active1:0,active2:0,tabs:[{title:"Header I",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{title:"Header II",content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."},{title:"Header III",content:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."}],scrollableTabs:Array.from({length:50},(function(e,t){return{title:"Tab ".concat(t+1),content:"Tab ".concat(t+1," Content")}}))}},timeout:null,mounted:function(){var e=this;a.$on("change-theme",(function(){e.timeout=setTimeout((function(){e.$refs.tabview1.updateInkBar(),e.$refs.tabview2.updateInkBar(),e.$refs.tabview3.updateInkBar(),e.$refs.tabview4.updateInkBar()}),50)}))},beforeDestroy:function(){clearTimeout(this.timeout),a.$off("change-theme")},components:{TabViewDoc:s}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Default")]),t("TabView",{ref:"tabview1"},[t("TabPanel",{attrs:{header:"Header I"}},[t("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])]),t("TabPanel",{attrs:{header:"Header II"}},[t("p",[e._v(" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ")])]),t("TabPanel",{attrs:{header:"Header III"}},[t("p",[e._v(" At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ")])])],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Programmatic")]),t("div",{staticClass:"py-2"},[t("Button",{staticClass:"p-button-text",attrs:{label:"Activate 1st"},on:{click:function(t){e.active1=0}}}),t("Button",{staticClass:"p-button-text mr-2",attrs:{label:"Activate 2nd"},on:{click:function(t){e.active1=1}}}),t("Button",{staticClass:"p-button-text mr-2",attrs:{label:"Activate 3rd"},on:{click:function(t){e.active1=2}}})],1),t("TabView",{ref:"tabview2",attrs:{activeIndex:e.active1}},[t("TabPanel",{attrs:{header:"Header I"}},[t("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])]),t("TabPanel",{attrs:{header:"Header II"}},[t("p",[e._v(" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ")])]),t("TabPanel",{attrs:{header:"Header III"}},[t("p",[e._v(" At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ")])])],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Disabled")]),t("TabView",{ref:"tabview3"},[t("TabPanel",{attrs:{header:"Header I"}},[t("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])]),t("TabPanel",{attrs:{header:"Header II"}},[t("p",[e._v(" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ")])]),t("TabPanel",{attrs:{header:"Header III"}},[t("p",[e._v(" At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ")])]),t("TabPanel",{attrs:{header:"Header IV",disabled:!0}})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Custom Headers")]),t("TabView",{ref:"tabview4",staticClass:"tabview-custom"},[t("TabPanel",{scopedSlots:e._u([{key:"header",fn:function(){return[t("i",{staticClass:"pi pi-calendar"}),t("span",[e._v("Header I")])]},proxy:!0}])},[t("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])]),t("TabPanel",{scopedSlots:e._u([{key:"header",fn:function(){return[t("span",[e._v("Header II")]),t("i",{staticClass:"pi pi-user"})]},proxy:!0}])},[t("p",[e._v(" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ")])]),t("TabPanel",{scopedSlots:e._u([{key:"header",fn:function(){return[t("i",{staticClass:"pi pi-search"}),t("span",[e._v("Header III")]),t("i",{staticClass:"pi pi-cog"})]},proxy:!0}])},[t("p",[e._v(" At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ")])])],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Dynamic Tabs")]),t("TabView",e._l(e.tabs,(function(i){return t("TabPanel",{key:i.title,attrs:{header:i.title}},[t("p",[e._v(e._s(i.content))])])})),1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Scrollable")]),t("div",{staticClass:"py-2"},[t("Button",{staticClass:"p-button-text",attrs:{label:"Activate 1st"},on:{click:function(t){e.active2=0}}}),t("Button",{staticClass:"p-button-text mr-2",attrs:{label:"Activate 30th"},on:{click:function(t){e.active2=29}}}),t("Button",{staticClass:"p-button-text mr-2",attrs:{label:"Activate 50th"},on:{click:function(t){e.active2=49}}})],1),t("TabView",{attrs:{activeIndex:e.active2,scrollable:!0},on:{"update:activeIndex":function(t){e.active2=t},"update:active-index":function(t){e.active2=t}}},e._l(e.scrollableTabs,(function(i){return t("TabPanel",{key:i.title,attrs:{header:i.title}},[t("p",[e._v(e._s(i.content))])])})),1)],1)]),t("TabViewDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("TabView")]),t("p",[e._v("TabView is a container component to group content with tabs.")])])])}],!1,null,"80fa1dd5").exports)}}}));
//# sourceMappingURL=TabViewDemo-legacy-W4XOZODc.js.map
