import{n as o}from"./app.component-BAbvz7X_.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const n={name:"Documentation",data(){return{importCode:{basic:"\nimport OrganizationChart from 'primevue2/organizationchart';\n        "},baseCode:{basic:'\n <OrganizationChart :value="data">\n    <template #default="slotProps">\n        <span>{{slotProps.node.data.label}}</span>\n    </template>\n</OrganizationChart>\n        '},baseCode2:{basic:"\nexport default {\n    data() {\n        return {\n            data: {\n                key: '0',\n                data: {label: 'F.C. Barcelona'},\n                children: [\n                    {\n                        key: '0_0',\n                        data: {label: 'F.C. Barcelona'},\n                        children: [\n                            {\n                                key: '0_0_0',\n                                data: {label: 'Chelsea F.C.'}\n                            },\n                            {\n                                key: '0_0_1',\n                                data: {label: 'F.C. Barcelona'}\n                            }\n                        ]\n                    },\n                    {\n                        key: '0_1',\n                        data: {label: 'Real Madrid'},\n                        children: [\n                            {\n                                key: '0_1_0',\n                                data: {label: 'Bayern Munich'}\n                            },\n                            {\n                                key: '0_1_1',\n                                data: {label: 'Real Madrid'}\n                            }\n                        ]\n                    }\n                ]\n            }\n        }\n    }\n}\n        "},collapsibleNodesCode:{basic:'\n <OrganizationChart :value="data" :collapsible="true" :collapsedKeys="collapsedKeys">\n    <template #default="slotProps">\n        <span>{{slotProps.node.data.label}}</span>\n    </template>\n</OrganizationChart>\n        '},collapsibleNodesCode2:{basic:"\nexport default {\n    data() {\n        return {\n            collapsedKeys: {\n                '0': true\n            },\n            data: {\n                key: '0',\n                data: {label: 'F.C. Barcelona'},\n                children: [\n                    {\n                        key: '0_0',\n                        data: {label: 'F.C. Barcelona'},\n                        children: [\n                            {\n                                key: '0_0_0',\n                                data: {label: 'Chelsea F.C.'}\n                            },\n                            {\n                                key: '0_0_1',\n                                data: {label: 'F.C. Barcelona'}\n                            }\n                        ]\n                    },\n                    {\n                        key: '0_1',\n                        data: {label: 'Real Madrid'},\n                        children: [\n                            {\n                                key: '0_1_0',\n                                data: {label: 'Bayern Munich'}\n                            },\n                            {\n                                key: '0_1_1',\n                                data: {label: 'Real Madrid'}\n                            }\n                        ]\n                    }\n                ]\n            }\n        }\n    }\n}\n        "},selectionCode:{basic:'\n<OrganizationChart :value="data" selecionMode="single" :selectionKeys.sync="selectionKeys">\n    <template #default="slotProps">\n        <span>{{slotProps.node.data.label}}</span>\n    </template>\n</OrganizationChart>\n        '},selectionCode2:{basic:"\nexport default {\n    data() {\n        return {\n            selectionKeys: null,\n            data: {\n                key: '0',\n                data: {label: 'F.C. Barcelona'},\n                children: [\n                    {\n                        key: '0_0',\n                        data: {label: 'F.C. Barcelona'},\n                        children: [\n                            {\n                                key: '0_0_0',\n                                data: {label: 'Chelsea F.C.'}\n                            },\n                            {\n                                key: '0_0_1',\n                                data: {label: 'F.C. Barcelona'}\n                            }\n                        ]\n                    },\n                    {\n                        key: '0_1',\n                        data: {label: 'Real Madrid'},\n                        children: [\n                            {\n                                key: '0_1_0',\n                                data: {label: 'Bayern Munich'}\n                            },\n                            {\n                                key: '0_1_1',\n                                data: {label: 'Real Madrid'}\n                            }\n                        ]\n                    }\n                ]\n            }\n        }\n    }\n}\n        "},templatingCode:{basic:'\n<OrganizationChart :value="data">\n    <template #person="slotProps">\n        <div class="node-header ui-corner-top">{{slotProps.node.data.label}}</div>\n        <div class="node-content">\n            <img :src="\'demo/images/organization/\' + slotProps.node.data.avatar" width="32">\n            <div>{{slotProps.node.data.name}}</div>\n        </div>\n    </template>\n    <template #default="slotProps">\n        <span>{{slotProps.node.data.label}}</span>\n    </template>\n</OrganizationChart>\n        '},templatingCode2:{basic:"\nexport default {\n    data() {\n        return {\n            data: {\n                key: '0',\n                type: 'person',\n                styleClass: 'p-person',\n                data: {label: 'CEO', name: 'Walter White', avatar: 'walter.jpg'},\n                children: [\n                    {\n                        key: '0_0',\n                        type: 'person',\n                        styleClass: 'p-person',\n                        data: {label: 'CFO', name:'Saul Goodman', avatar: 'saul.jpg'},\n                        children:[{\n                            key: '0_0_0',\n                            data: {label: 'Tax'},\n                            selectable: false,\n                            styleClass: 'department-cfo'\n                        },\n                        {\n                            key: '0_0_1',\n                            data: {label: 'Legal'},\n                            selectable: false,\n                            styleClass: 'department-cfo'\n                        }],\n                    },\n                    {\n                        key: '0_1',\n                        type: 'person',\n                        styleClass: 'p-person',\n                        data: {label: 'COO', name:'Mike E.', avatar: 'mike.jpg'},\n                        children:[{\n                            key: '0_1_0',\n                            data: {label: 'Operations'},\n                            selectable: false,\n                            styleClass: 'department-coo'\n                        }]\n                    },\n                    {\n                        key: '0_2',\n                        type: 'person',\n                        styleClass: 'p-person',\n                        data: {label: 'CTO', name:'Jesse Pinkman', avatar: 'jesse.jpg'},\n                        children:[{\n                            key: '0_2_0',\n                            data: {label: 'Development'},\n                            selectable: false,\n                            styleClass: 'department-cto',\n                            children:[{\n                                key: '0_2_0_0',\n                                data: {label: 'Analysis'},\n                                selectable: false,\n                                styleClass: 'department-cto'\n                            },\n                            {\n                                key: '0_2_0_1',\n                                data: {label: 'Front End'},\n                                selectable: false,\n                                styleClass: 'department-cto'\n                            },\n                            {\n                                key: '0_2_0_2',\n                                data: {label: 'Back End'},\n                                selectable: false,\n                                styleClass: 'department-cto'\n                            }]\n                        },\n                        {\n                            key: '0_2_1',\n                            data: {label: 'QA'},\n                            selectable: false,\n                            styleClass: 'department-cto'\n                        },\n                        {\n                            key: '0_2_2',\n                            data: {label: 'R&D'},\n                            selectable: false,\n                            styleClass: 'department-cto'\n                        }]\n                    }\n                ]\n            }\n        }\n    }\n}\n        "}}}};var s=function(){var e=this,t=e._self._c;return t("div",[t("h5",[e._v("Import")]),t("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),t("h5",[e._v("Getting Started")]),t("p",[e._v(" OrganizationChart requires an OrganizationChartNode instance as its root value and at least one template to display node content where node instance is passed via slotProps. ")]),t("DocSectionCode",{attrs:{code:e.baseCode}}),t("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}}),t("h5",[e._v("OrganizationChartNode")]),t("p",[e._v("API of the OrganizationChartNode has the properties below.")]),e._m(0),t("h5",[e._v("Collapsible Nodes")]),e._m(1),t("p",[e._v(" Example below displays the root of chart in previous example as collapsed. Notice that the collapsedKeys is a map whose key is the key of the node and value is true. ")]),t("DocSectionCode",{attrs:{code:e.collapsibleNodesCode}}),t("DocSectionCode",{attrs:{code:e.collapsibleNodesCode2,importCode:""}}),t("h5",[e._v("Selection")]),e._m(2),t("DocSectionCode",{attrs:{code:e.selectionCode}}),t("DocSectionCode",{attrs:{code:e.selectionCode,importCode:""}}),t("h5",[e._v("Templating")]),e._m(3),t("DocSectionCode",{attrs:{code:e.templatingCode}}),t("DocSectionCode",{attrs:{code:e.templatingCode2,importCode:""}}),t("h5",[e._v("Properties")]),t("p",[e._v(" Any property as style and class are passed to the main container element. Following are the additional properties to configure the component. ")]),e._m(4),t("h5",[e._v("Events")]),e._m(5),t("h5",[e._v("Styling")]),t("p",[e._v(" Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page. ")],1),e._m(6),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1)},d=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[a._v("Name")]),e("th",[a._v("Type")]),e("th",[a._v("Default")]),e("th",[a._v("Description")])])]),e("tbody",[e("tr",[e("td",[a._v("key")]),e("td",[a._v("any")]),e("td",[a._v("null")]),e("td",[a._v("Unique identifier of the node. (required)")])]),e("tr",[e("td",[a._v("type")]),e("td",[a._v("string")]),e("td",[a._v("null")]),e("td",[a._v("Type of the node to match a template.")])]),e("tr",[e("td",[a._v("styleClass")]),e("td",[a._v("string")]),e("td",[a._v("null")]),e("td",[a._v("Style class of the node content.")])]),e("tr",[e("td",[a._v("data")]),e("td",[a._v("any")]),e("td",[a._v("null")]),e("td",[a._v("Data represented by the node.")])]),e("tr",[e("td",[a._v("selectable")]),e("td",[a._v("boolean")]),e("td",[a._v("true")]),e("td",[a._v("Whether node is selectable when selection is enabled.")])]),e("tr",[e("td",[a._v("collapsible")]),e("td",[a._v("boolean")]),e("td",[a._v("true")]),e("td",[a._v("Whether node is collapsible when node expansion is enabled.")])]),e("tr",[e("td",[a._v("children")]),e("td",[a._v("array")]),e("td",[a._v("null")]),e("td",[a._v("Children nodes array.")])])])])])},function(){var a=this,e=a._self._c;return e("p",[a._v(" All nodes are expanded by default however they can be expanded and collapsed when "),e("i",[a._v("collapsible")]),a._v(" is enabled. The optional "),e("i",[a._v("collapsedKeys")]),a._v(" property defines the keys that are collapsed, this property is two-way binding enabled so that user changes or programmatic changes are reflected to the UI. ")])},function(){var a=this,e=a._self._c;return e("p",[a._v(" Selection is enabled by defining the "),e("i",[a._v("selectionMode")]),a._v(' to either "single" or "multiple" and specifying the '),e("i",[a._v("selectionKeys")]),a._v(" with the sync operator. Note that selection on a particular node can be disabled if the "),e("i",[a._v("selectable")]),a._v(" is false on the node instance. ")])},function(){var a=this,e=a._self._c;return e("p",[a._v(" The "),e("i",[a._v("type")]),a._v(" property of an OrganizationChartNode is used to map a template to a node. If it is undefined, the default template is used. ")])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[a._v("Name")]),e("th",[a._v("Type")]),e("th",[a._v("Default")]),e("th",[a._v("Description")])])]),e("tbody",[e("tr",[e("td",[a._v("value")]),e("td",[a._v("OrganizationChartNode")]),e("td",[a._v("null")]),e("td",[a._v("Value of the component.")])]),e("tr",[e("td",[a._v("selectionKeys")]),e("td",[a._v("object")]),e("td",[a._v("null")]),e("td",[a._v("A map instance of key-value pairs to represented the selected nodes.")])]),e("tr",[e("td",[a._v("selectionMode")]),e("td",[a._v("string")]),e("td",[a._v("null")]),e("td",[a._v('Type of the selection, valid values are "single" and "multiple".')])]),e("tr",[e("td",[a._v("collapsible")]),e("td",[a._v("boolean")]),e("td",[a._v("false")]),e("td",[a._v("Whether the nodes can be expanded or toggled.")])]),e("tr",[e("td",[a._v("collapsedKeys")]),e("td",[a._v("object")]),e("td",[a._v("null")]),e("td",[a._v("A map instance of key-value pairs to represented the collapsed nodes.")])])])])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[a._v("Name")]),e("th",[a._v("Parameters")]),e("th",[a._v("Description")])])]),e("tbody",[e("tr",[e("td",[a._v("node-select")]),e("td",[a._v("node: Node instance")]),e("td",[a._v("Callback to invoke when a node is selected.")])]),e("tr",[e("td",[a._v("node-unselect")]),e("td",[a._v("node: Node instance")]),e("td",[a._v("Callback to invoke when a node is unselected.")])]),e("tr",[e("td",[a._v("node-expand")]),e("td",[a._v("node: Node instance")]),e("td",[a._v("Callback to invoke when a node is expanded.")])]),e("tr",[e("td",[a._v("node-collapse")]),e("td",[a._v("node: Node instance")]),e("td",[a._v("Callback to invoke when a node is collapsed.")])])])])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[a._v("Name")]),e("th",[a._v("Element")])])]),e("tbody",[e("tr",[e("td",[a._v("p-organizationchart")]),e("td",[a._v("Container element.")])]),e("tr",[e("td",[a._v("p-organizationchart-table")]),e("td",[a._v("Table container of a node.")])]),e("tr",[e("td",[a._v("p-organizationchart-lines")]),e("td",[a._v("Connector lines container.")])]),e("tr",[e("td",[a._v("p-organizationchart-nodes")]),e("td",[a._v("Contained of node children.")])]),e("tr",[e("td",[a._v("p-organizationchart-line-right")]),e("td",[a._v("Right side line of a node connector.")])]),e("tr",[e("td",[a._v("p-organizationchart-line-left")]),e("td",[a._v("Left side line of a node connector.")])]),e("tr",[e("td",[a._v("p-organizationchart-line-top")]),e("td",[a._v("Top side line of a node connector.")])])])])])}],r=o(n,s,d,!1,null,null);const i=r.exports,c={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<h3>Advanced</h3>\n<OrganizationChart :value="data1" :collapsible="true" class="company" selectionMode="single" :selectionKeys.sync="selection"\n    @node-select="onNodeSelect" @node-unselect="onNodeUnselect" @node-collapse="onNodeCollapse" @node-expand="onNodeExpand">\n    <template #person="slotProps">\n        <div class="node-header ui-corner-top">{{slotProps.node.data.label}}</div>\n        <div class="node-content">\n            <img :src="\'demo/images/organization/\' + slotProps.node.data.avatar" width="32">\n            <div>{{slotProps.node.data.name}}</div>\n        </div>\n    </template>\n    <template #default="slotProps">\n        <span>{{slotProps.node.data.label}}</span>\n    </template>\n</OrganizationChart>\n\n<h3>Basic</h3>\n<OrganizationChart :value="data2">\n    <template #default="slotProps">\n        <span>{{slotProps.node.data.label}}</span>\n    </template>\n</OrganizationChart>\n        '},sourceCode2:{basic:"\nexport default {\n    data() {\n        return {\n            data1: {\n                key: '0',\n                type: 'person',\n                styleClass: 'p-person',\n                data: {label: 'CEO', name: 'Walter White', avatar: 'walter.jpg'},\n                children: [\n                    {\n                        key: '0_0',\n                        type: 'person',\n                        styleClass: 'p-person',\n                        data: {label: 'CFO', name:'Saul Goodman', avatar: 'saul.jpg'},\n                        children:[{\n                            key: '0_0_0',\n                            data: {label: 'Tax'},\n                            selectable: false,\n                            styleClass: 'department-cfo'\n                        },\n                        {\n                            key: '0_0_1',\n                            data: {label: 'Legal'},\n                            selectable: false,\n                            styleClass: 'department-cfo'\n                        }],\n                    },\n                    {\n                        key: '0_1',\n                        type: 'person',\n                        styleClass: 'p-person',\n                        data: {label: 'COO', name:'Mike E.', avatar: 'mike.jpg'},\n                        children:[{\n                            key: '0_1_0',\n                            data: {label: 'Operations'},\n                            selectable: false,\n                            styleClass: 'department-coo'\n                        }]\n                    },\n                    {\n                        key: '0_2',\n                        type: 'person',\n                        styleClass: 'p-person',\n                        data: {label: 'CTO', name:'Jesse Pinkman', avatar: 'jesse.jpg'},\n                        children:[{\n                            key: '0_2_0',\n                            data: {label: 'Development'},\n                            selectable: false,\n                            styleClass: 'department-cto',\n                            children:[{\n                                key: '0_2_0_0',\n                                data: {label: 'Analysis'},\n                                selectable: false,\n                                styleClass: 'department-cto'\n                            },\n                            {\n                                key: '0_2_0_1',\n                                data: {label: 'Front End'},\n                                selectable: false,\n                                styleClass: 'department-cto'\n                            },\n                            {\n                                key: '0_2_0_2',\n                                data: {label: 'Back End'},\n                                selectable: false,\n                                styleClass: 'department-cto'\n                            }]\n                        },\n                        {\n                            key: '0_2_1',\n                            data: {label: 'QA'},\n                            selectable: false,\n                            styleClass: 'department-cto'\n                        },\n                        {\n                            key: '0_2_2',\n                            data: {label: 'R&amp;D'},\n                            selectable: false,\n                            styleClass: 'department-cto'\n                        }]\n                    }\n                ]\n            },\n            data2 : {\n                key: '0',\n                data: {label: 'F.C. Barcelona'},\n                children: [\n                    {\n                        key: '0_0',\n                        data: {label: 'F.C. Barcelona'},\n                        children: [\n                            {\n                                key: '0_0_0',\n                                data: {label: 'Chelsea F.C.'}\n                            },\n                            {\n                                key: '0_0_1',\n                                data: {label: 'F.C. Barcelona'}\n                            }\n                        ]\n                    },\n                    {\n                        key: '0_1',\n                        data: {label: 'Real Madrid'},\n                        children: [\n                            {\n                                key: '0_1_0',\n                                data: {label: 'Bayern Munich'}\n                            },\n                            {\n                                key: '0_1_1',\n                                data: {label: 'Real Madrid'}\n                            }\n                        ]\n                    }\n                ]\n            },\n            selection: {}\n        }\n    },\n    methods: {\n        onNodeSelect(node) {\n            this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.data.label, life: 3000});\n        },\n        onNodeUnselect(node) {\n            this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.data.label, life: 3000});\n        },\n        onNodeExpand(node) {\n            this.$toast.add({severity:'success', summary: 'Node Expanded', detail: node.data.label, life: 3000});\n        },\n        onNodeCollapse(node) {\n            this.$toast.add({severity:'success', summary: 'Node Collapsed', detail: node.data.label, life: 3000});\n        }\n    }\n}\n        "},sourceCode3:{basic:"\n:deep(.p-organizationchart) {\n    .p-person {\n        padding: 0;\n        border: 0 none;\n    }\n\n    .node-header, .node-content {\n        padding: .5em .7rem;\n    }\n\n    .node-header {\n        background-color: #495ebb;\n        color: #ffffff;\n    }\n\n    .node-content {\n        text-align: center;\n        border: 1px solid #495ebb;\n    }\n\n    .node-content img {\n        border-radius: 50%;\n    }\n\n    .department-cfo {\n        background-color: #7247bc;\n        color: #ffffff;\n    }\n\n    .department-coo {\n        background-color: #a534b6;\n        color: #ffffff;\n    }\n\n    .department-cto {\n        background-color: #e9286f;\n        color: #ffffff;\n    }\n}\n        "}}}};var _=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("DocSectionCode",{attrs:{code:e.sourceCode1}}),t("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}}),t("DocSectionCode",{attrs:{code:e.sourceCode3,importStyle:""}})],1)},p=[function(){var a=this,e=a._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/organizationchart",target:"_blank",rel:"noopener noreferrer"}},[e("span",[a._v("View on GitHub")])])}],v=o(c,_,p,!1,null,null);const h=v.exports,b={components:{Documentation:i,SourceCode:h}};var y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("Documentation")],1),t("TabPanel",{attrs:{header:"Source"}},[t("SourceCode")],1)],1)],1)},m=[],C=o(b,y,m,!1,null,null);const u=C.exports,f={data(){return{data1:{key:"0",type:"person",styleClass:"p-person",data:{label:"CEO",name:"Walter White",avatar:"walter.jpg"},children:[{key:"0_0",type:"person",styleClass:"p-person",data:{label:"CFO",name:"Saul Goodman",avatar:"saul.jpg"},children:[{key:"0_0_0",data:{label:"Tax"},selectable:!1,styleClass:"department-cfo"},{key:"0_0_1",data:{label:"Legal"},selectable:!1,styleClass:"department-cfo"}]},{key:"0_1",type:"person",styleClass:"p-person",data:{label:"COO",name:"Mike E.",avatar:"mike.jpg"},children:[{key:"0_1_0",data:{label:"Operations"},selectable:!1,styleClass:"department-coo"}]},{key:"0_2",type:"person",styleClass:"p-person",data:{label:"CTO",name:"Jesse Pinkman",avatar:"jesse.jpg"},children:[{key:"0_2_0",data:{label:"Development"},selectable:!1,styleClass:"department-cto",children:[{key:"0_2_0_0",data:{label:"Analysis"},selectable:!1,styleClass:"department-cto"},{key:"0_2_0_1",data:{label:"Front End"},selectable:!1,styleClass:"department-cto"},{key:"0_2_0_2",data:{label:"Back End"},selectable:!1,styleClass:"department-cto"}]},{key:"0_2_1",data:{label:"QA"},selectable:!1,styleClass:"department-cto"},{key:"0_2_2",data:{label:"R&D"},selectable:!1,styleClass:"department-cto"}]}]},data2:{key:"0",data:{label:"F.C. Barcelona"},children:[{key:"0_0",data:{label:"F.C. Barcelona"},children:[{key:"0_0_0",data:{label:"Chelsea F.C."}},{key:"0_0_1",data:{label:"F.C. Barcelona"}}]},{key:"0_1",data:{label:"Real Madrid"},children:[{key:"0_1_0",data:{label:"Bayern Munich"}},{key:"0_1_1",data:{label:"Real Madrid"}}]}]},selection:{}}},methods:{onNodeSelect(a){this.$toast.add({severity:"success",summary:"Node Selected",detail:a.data.label,life:3e3})},onNodeUnselect(a){this.$toast.add({severity:"success",summary:"Node Unselected",detail:a.data.label,life:3e3})},onNodeExpand(a){this.$toast.add({severity:"success",summary:"Node Expanded",detail:a.data.label,life:3e3})},onNodeCollapse(a){this.$toast.add({severity:"success",summary:"Node Collapsed",detail:a.data.label,life:3e3})}},components:{OrganizationChartDoc:u}};var k=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Advanced")]),t("OrganizationChart",{staticClass:"company",attrs:{value:e.data1,collapsible:!0,selectionMode:"single",selectionKeys:e.selection},on:{"update:selectionKeys":function(l){e.selection=l},"update:selection-keys":function(l){e.selection=l},"node-select":e.onNodeSelect,"node-unselect":e.onNodeUnselect,"node-collapse":e.onNodeCollapse,"node-expand":e.onNodeExpand},scopedSlots:e._u([{key:"person",fn:function(l){return[t("div",{staticClass:"node-header ui-corner-top"},[e._v(e._s(l.node.data.label))]),t("div",{staticClass:"node-content"},[t("img",{attrs:{src:e.$publicUrl("demo/images/organization/"+l.node.data.avatar),width:"32"}}),t("div",[e._v(e._s(l.node.data.name))])])]}},{key:"default",fn:function(l){return[t("span",[e._v(e._s(l.node.data.label))])]}}])})],1),t("div",{staticClass:"card"},[t("h5",[e._v("Basic")]),t("OrganizationChart",{attrs:{value:e.data2},scopedSlots:e._u([{key:"default",fn:function(l){return[t("span",[e._v(e._s(l.node.data.label))])]}}])})],1)]),t("OrganizationChartDoc")],1)},g=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[a._v("OrganizationChart")]),e("p",[a._v("OrganizationChart visualizes hierarchical organization data.")])])])}],N=o(f,k,g,!1,null,"e71152a6");const F=N.exports;export{F as default};
//# sourceMappingURL=index-DeqEeQ_g.js.map