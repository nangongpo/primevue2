import{n as a}from"./app.component-CxwrbeA3.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const i={name:"Documentation",data(){return{importCode:{basic:"\nimport MegaMenu from 'primevue2/megamenu';\n        "},baseCode:{basic:'\n<MegaMenu :model="items" />\n        '},baseCode2:{basic:"\nexport default {\n    data() {\n        return {\n            items: [\n                {\n                    label: 'Videos', icon: 'pi pi-fw pi-video',\n                    items: [\n                        [\n                            {\n                                label: 'Video 1',\n                                items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]\n                            },\n                            {\n                                label: 'Video 2',\n                                items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]\n                            }\n                        ],\n                        [\n                            {\n                                label: 'Video 3',\n                                items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]\n                            },\n                            {\n                                label: 'Video 4',\n                                items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]\n                            }\n                        ]\n                    ]\n                },\n                {\n                    label: 'Users', icon: 'pi pi-fw pi-users',\n                    items: [\n                        [\n                            {\n                                label: 'User 1',\n                                items: [{label: 'User 1.1'}, {label: 'User 1.2'}]\n                            },\n                            {\n                                label: 'User 2',\n                                items: [{label: 'User 2.1'}, {label: 'User 2.2'}]\n                            },\n                        ],\n                        [\n                            {\n                                label: 'User 3',\n                                items: [{label: 'User 3.1'}, {label: 'User 3.2'}]\n                            },\n                            {\n                                label: 'User 4',\n                                items: [{label: 'User 4.1'}, {label: 'User 4.2'}]\n                            }\n                        ],\n                        [\n                            {\n                                label: 'User 5',\n                                items: [{label: 'User 5.1'}, {label: 'User 5.2'}]\n                            },\n                            {\n                                label: 'User 6',\n                                items: [{label: 'User 6.1'}, {label: 'User 6.2'}]\n                            }\n                        ]\n                    ]\n                },\n                {\n                    label: 'Events', icon: 'pi pi-fw pi-calendar',\n                    items: [\n                        [\n                            {\n                                label: 'Event 1',\n                                items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]\n                            },\n                            {\n                                label: 'Event 2',\n                                items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]\n                            }\n                        ],\n                        [\n                            {\n                                label: 'Event 3',\n                                items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]\n                            },\n                            {\n                                label: 'Event 4',\n                                items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]\n                            }\n                        ]\n                    ]\n                },\n                {\n                    label: 'Settings', icon: 'pi pi-fw pi-cog',\n                    items: [\n                        [\n                            {\n                                label: 'Setting 1',\n                                items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]\n                            },\n                            {\n                                label: 'Setting 2',\n                                items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]\n                            },\n                            {\n                                label: 'Setting 3',\n                                items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]\n                            }\n                        ],\n                        [\n                            {\n                                label: 'Setting 4',\n                                items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]\n                            }\n                        ]\n                    ]\n                }\n            ]\n        }\n    }\n}\n        "},orientationCode:{basic:'\n<MegaMenu :model="items" orientation="vertical" />\n        '},templatingCode:{basic:'\n<MegaMenu :model="items">\n    <template #start>\n        Before\n    </template>\n    <template #item="{item}">\n        <a :href="item.url">{{item.label}}</a>\n    </template>\n    <template #end>\n        After\n    </template>\n</MegaMenu>\n        '}}}};var n=function(){var e=this,l=e._self._c;return l("div",[l("h5",[e._v("Import")]),l("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),l("h5",[e._v("MenuModel")]),l("p",[e._v(" MegaMenu uses the common MenuModel API to define the items of the model, visit "),l("router-link",{attrs:{to:"/menumodel"}},[e._v("MenuModel API")]),e._v(" for details. ")],1),l("DocSectionCode",{attrs:{code:e.baseCode}}),l("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}}),l("h5",[e._v("Orientation")]),l("p",[e._v('Default orientation is "horizontal" with "vertical" as the alternative.')]),l("DocSectionCode",{attrs:{code:e.orientationCode}}),l("h5",[e._v("Templating")]),e._m(0),l("DocSectionCode",{attrs:{code:e.templatingCode}}),l("h5",[e._v("Properties")]),l("p",[e._v(" Any property as style and class are passed to the main container element. Following are the additional properties to configure the component. ")]),e._m(1),l("h5",[e._v("Slots")]),e._m(2),l("h5",[e._v("Styling")]),l("p",[e._v(" Following is the list of structural style classes, for theming classes visit "),l("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page. ")],1),e._m(3),l("h5",[e._v("Dependencies")]),l("p",[e._v("None.")])],1)},s=[function(){var t=this,e=t._self._c;return e("p",[t._v(' Two slots named "start" and "end" are provided to embed content before or after the items. In additon MegaMenu, offers item customization with the '),e("i",[t._v("item")]),t._v(" template that receives the menuitem instance from the model as a parameter. ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("model")]),e("td",[t._v("array")]),e("td",[t._v("null")]),e("td",[t._v("An array of menuitems.")])]),e("tr",[e("td",[t._v("orientation")]),e("td",[t._v("string")]),e("td",[t._v("horizontal")]),e("td",[t._v("Defines the orientation, valid values are horizontal and vertical.")])]),e("tr",[e("td",[t._v("exact")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Whether to apply 'router-link-active-exact' class if route exactly matches the item path.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("start")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("end")]),e("td",[t._v("-")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-megamenu")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-megamenu-horizontal")]),e("td",[t._v("Container element in horizontal orientation.")])]),e("tr",[e("td",[t._v("p-megamenu-vertical")]),e("td",[t._v("Container element in vertical orientation.")])]),e("tr",[e("td",[t._v("p-megamenu-root-list")]),e("td",[t._v("Root list element.")])]),e("tr",[e("td",[t._v("p-megamenu-panel")]),e("td",[t._v("Submenu container.")])]),e("tr",[e("td",[t._v("p-megamenu-submenu")]),e("td",[t._v("Submenu list element.")])]),e("tr",[e("td",[t._v("p-menuitem")]),e("td",[t._v("Menuitem element.")])]),e("tr",[e("td",[t._v("p-menuitem-text")]),e("td",[t._v("Label of a menuitem.")])]),e("tr",[e("td",[t._v("p-menuitem-icon")]),e("td",[t._v("Icon of a menuitem.")])]),e("tr",[e("td",[t._v("p-submenu-icon")]),e("td",[t._v("Arrow icon of a submenu.")])]),e("tr",[e("td",[t._v("p-megamenu-custom")]),e("td",[t._v("Container of the default slot.")])])])])])}],o=a(i,n,s,!1,null,null);const r=o.exports,m={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<h3>Horizontal</h3>\n<MegaMenu :model="items" />\n\n<h3>Vertical</h3>\n<MegaMenu :model="items" orientation="vertical"/>\n        '},sourceCode2:{basic:"\nexport default {\n    data() {\n        return {\n            items: [\n                {\n                    label: 'Videos', icon: 'pi pi-fw pi-video',\n                    items: [\n                        [\n                            {\n                                label: 'Video 1',\n                                items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]\n                            },\n                            {\n                                label: 'Video 2',\n                                items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]\n                            }\n                        ],\n                        [\n                            {\n                                label: 'Video 3',\n                                items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]\n                            },\n                            {\n                                label: 'Video 4',\n                                items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]\n                            }\n                        ]\n                    ]\n                },\n                {\n                    label: 'Users', icon: 'pi pi-fw pi-users',\n                    items: [\n                        [\n                            {\n                                label: 'User 1',\n                                items: [{label: 'User 1.1'}, {label: 'User 1.2'}]\n                            },\n                            {\n                                label: 'User 2',\n                                items: [{label: 'User 2.1'}, {label: 'User 2.2'}]\n                            },\n                        ],\n                        [\n                            {\n                                label: 'User 3',\n                                items: [{label: 'User 3.1'}, {label: 'User 3.2'}]\n                            },\n                            {\n                                label: 'User 4',\n                                items: [{label: 'User 4.1'}, {label: 'User 4.2'}]\n                            }\n                        ],\n                        [\n                            {\n                                label: 'User 5',\n                                items: [{label: 'User 5.1'}, {label: 'User 5.2'}]\n                            },\n                            {\n                                label: 'User 6',\n                                items: [{label: 'User 6.1'}, {label: 'User 6.2'}]\n                            }\n                        ]\n                    ]\n                },\n                {\n                    label: 'Events', icon: 'pi pi-fw pi-calendar',\n                    items: [\n                        [\n                            {\n                                label: 'Event 1',\n                                items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]\n                            },\n                            {\n                                label: 'Event 2',\n                                items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]\n                            }\n                        ],\n                        [\n                            {\n                                label: 'Event 3',\n                                items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]\n                            },\n                            {\n                                label: 'Event 4',\n                                items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]\n                            }\n                        ]\n                    ]\n                },\n                {\n                    label: 'Settings', icon: 'pi pi-fw pi-cog',\n                    items: [\n                        [\n                            {\n                                label: 'Setting 1',\n                                items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]\n                            },\n                            {\n                                label: 'Setting 2',\n                                items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]\n                            },\n                            {\n                                label: 'Setting 3',\n                                items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]\n                            }\n                        ],\n                        [\n                            {\n                                label: 'Setting 4',\n                                items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]\n                            }\n                        ]\n                    ]\n                }\n            ]\n        }\n    }\n}\n        "}}}};var b=function(){var e=this,l=e._self._c;return l("div",[e._m(0),l("DocSectionCode",{attrs:{code:e.sourceCode1}}),l("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)},d=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/megamenu",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])])}],c=a(m,b,d,!1,null,null);const v=c.exports,_={components:{Documentation:r,SourceCode:v}};var u=function(){var e=this,l=e._self._c;return l("div",{staticClass:"content-section documentation"},[l("TabView",[l("TabPanel",{attrs:{header:"Documentation"}},[l("Documentation")],1),l("TabPanel",{attrs:{header:"Source"}},[l("SourceCode")],1)],1)],1)},p=[],g=a(_,u,p,!1,null,null);const f=g.exports,h={data(){return{items:[{label:"Videos",icon:"pi pi-fw pi-video",items:[[{label:"Video 1",items:[{label:"Video 1.1"},{label:"Video 1.2"}]},{label:"Video 2",items:[{label:"Video 2.1"},{label:"Video 2.2"}]}],[{label:"Video 3",items:[{label:"Video 3.1"},{label:"Video 3.2"}]},{label:"Video 4",items:[{label:"Video 4.1"},{label:"Video 4.2"}]}]]},{label:"Users",icon:"pi pi-fw pi-users",items:[[{label:"User 1",items:[{label:"User 1.1"},{label:"User 1.2"}]},{label:"User 2",items:[{label:"User 2.1"},{label:"User 2.2"}]}],[{label:"User 3",items:[{label:"User 3.1"},{label:"User 3.2"}]},{label:"User 4",items:[{label:"User 4.1"},{label:"User 4.2"}]}],[{label:"User 5",items:[{label:"User 5.1"},{label:"User 5.2"}]},{label:"User 6",items:[{label:"User 6.1"},{label:"User 6.2"}]}]]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[[{label:"Event 1",items:[{label:"Event 1.1"},{label:"Event 1.2"}]},{label:"Event 2",items:[{label:"Event 2.1"},{label:"Event 2.2"}]}],[{label:"Event 3",items:[{label:"Event 3.1"},{label:"Event 3.2"}]},{label:"Event 4",items:[{label:"Event 4.1"},{label:"Event 4.2"}]}]]},{label:"Settings",icon:"pi pi-fw pi-cog",items:[[{label:"Setting 1",items:[{label:"Setting 1.1"},{label:"Setting 1.2"}]},{label:"Setting 2",items:[{label:"Setting 2.1"},{label:"Setting 2.2"}]},{label:"Setting 3",items:[{label:"Setting 3.1"},{label:"Setting 3.2"}]}],[{label:"Setting 4",items:[{label:"Setting 4.1"},{label:"Setting 4.2"}]}]]}]}},components:{MegaMenuDoc:f}};var U=function(){var e=this,l=e._self._c;return l("div",[e._m(0),l("div",{staticClass:"content-section implementation"},[l("div",{staticClass:"card"},[l("h5",[e._v("Horizontal")]),l("MegaMenu",{attrs:{model:e.items}}),l("h5",[e._v("Vertical")]),l("MegaMenu",{attrs:{model:e.items,orientation:"vertical"}})],1)]),l("MegaMenuDoc")],1)},S=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("MegaMenu")]),e("p",[t._v("MegaMenu is navigation component that displays submenus together.")])])])}],C=a(h,U,S,!1,null,null);const y=C.exports;export{y as default};
//# sourceMappingURL=index-CFVb2LHH.js.map
