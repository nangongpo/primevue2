System.register(["./app.component-legacy-cLUjg6K2.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(e,n){"use strict";var i;return{setters:[function(e){i=e.n},null,null,null,null],execute:function(){var n=i({name:"Documentation",data:function(){return{importCode:{basic:"\nimport ContextMenu from 'primevue2/contextmenu';\n        "},baseCode:{basic:"\nexport default {\n    data() {\n        return {\n            items: [\n                {\n                   label:'File',\n                   icon:'pi pi-fw pi-file',\n                   items:[\n                      {\n                        label:'Update',\n                        icon:'pi pi-fw pi-upload',\n                        to: '/fileupload'\n                      },\n                      {\n                         label:'New',\n                         icon:'pi pi-fw pi-plus',\n                         items:[\n                            {\n                               label:'Bookmark',\n                               icon:'pi pi-fw pi-bookmark'\n                            },\n                            {\n                               label:'Video',\n                               icon:'pi pi-fw pi-video'\n                            },\n\n                         ]\n                      },\n                      {\n                         label:'Delete',\n                         icon:'pi pi-fw pi-trash'\n                      },\n                      {\n                         separator:true\n                      },\n                      {\n                         label:'Export',\n                         icon:'pi pi-fw pi-external-link'\n                      }\n                   ]\n                },\n                {\n                   label:'Edit',\n                   icon:'pi pi-fw pi-pencil',\n                   items:[\n                      {\n                         label:'Left',\n                         icon:'pi pi-fw pi-align-left'\n                      },\n                      {\n                         label:'Right',\n                         icon:'pi pi-fw pi-align-right'\n                      },\n                      {\n                         label:'Center',\n                         icon:'pi pi-fw pi-align-center'\n                      },\n                      {\n                         label:'Justify',\n                         icon:'pi pi-fw pi-align-justify'\n                      },\n\n                   ]\n                },\n                {\n                   label:'Users',\n                   icon:'pi pi-fw pi-user',\n                   items:[\n                      {\n                         label:'New',\n                         icon:'pi pi-fw pi-user-plus',\n\n                      },\n                      {\n                         label:'Delete',\n                         icon:'pi pi-fw pi-user-minus',\n\n                      },\n                      {\n                         label:'Search',\n                         icon:'pi pi-fw pi-users',\n                         items:[\n                            {\n                               label:'Filter',\n                               icon:'pi pi-fw pi-filter',\n                               items:[\n                                  {\n                                     label:'Print',\n                                     icon:'pi pi-fw pi-print'\n                                  }\n                               ]\n                            },\n                            {\n                               icon:'pi pi-fw pi-bars',\n                               label:'List'\n                            }\n                         ]\n                      }\n                   ]\n                },\n                {\n                   label:'Events',\n                   icon:'pi pi-fw pi-calendar',\n                   items:[\n                      {\n                         label:'Edit',\n                         icon:'pi pi-fw pi-pencil',\n                         items:[\n                            {\n                               label:'Save',\n                               icon:'pi pi-fw pi-calendar-plus'\n                            },\n                            {\n                               label:'Delete',\n                               icon:'pi pi-fw pi-calendar-minus'\n                            },\n\n                         ]\n                      },\n                      {\n                         label:'Archieve',\n                         icon:'pi pi-fw pi-calendar-times',\n                         items:[\n                            {\n                               label:'Remove',\n                               icon:'pi pi-fw pi-calendar-minus'\n                            }\n                         ]\n                      }\n                   ]\n                },\n                {\n                   separator:true\n                },\n                {\n                  label:'Quit',\n                  icon:'pi pi-fw pi-power-off',\n                  command: (event) => {\n                    this.$toast.add({ severity: 'success', summary: 'Quit', detail: 'Quit success' })\n                    return \n                  }\n                }\n             ]\n        }\n    }\n}\n        "},documentMenuCode:{basic:'\n<ContextMenu :global="true" :model="items" />\n        '},elementMenuCode:{basic:'\n<img alt="logo" src="demo/images/nature/nature3.jpg" @contextmenu="onImageRightClick">\n<ContextMenu ref="menu" :model="items" />\n        '},elementMenuCode2:{basic:"\nexport default {\n    data() {\n        return {\n            items: //items\n        }\n    },\n    methods: {\n        onImageRightClick(event) {\n            this.$refs.menu.show(event);\n        }\n    }\n}\n        "}}}},(function(){var e=this,n=e._self._c;return n("div",[n("h5",[e._v("Import")]),n("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),n("h5",[e._v("MenuModel")]),n("p",[e._v(" ContextMenu uses the common MenuModel API to define the items, visit "),n("router-link",{attrs:{to:"/menumodel"}},[e._v("MenuModel API")]),e._v(" for details. ")],1),n("h5",[e._v("Getting Started")]),n("p",[e._v("ContextMenu requires a collection of menuitems as its model.")]),n("DocSectionCode",{attrs:{code:e.baseCode,importCode:""}}),n("h5",[e._v("Document Menu")]),n("p",[e._v("Setting global property attaches the context menu to the document.")]),n("DocSectionCode",{attrs:{code:e.documentMenuCode}}),n("h5",[e._v("Element Menu")]),e._m(0),n("DocSectionCode",{attrs:{code:e.elementMenuCode}}),n("DocSectionCode",{attrs:{code:e.elementMenuCode2,importCode:""}}),n("h5",[e._v("Properties")]),n("p",[e._v(" Any property as style and class are passed to the main container element. Following are the additional properties to configure the component. ")]),e._m(1),n("h5",[e._v("Methods")]),e._m(2),n("h5",[e._v("Styling")]),n("p",[e._v(" Following is the list of structural style classes, for theming classes visit "),n("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page. ")],1),e._m(3),n("h5",[e._v("Dependencies")]),n("p",[e._v("None.")])],1)}),[function(){var e=this,n=e._self._c;return n("p",[e._v(" ContextMenu is attached to a custom element manually using the reference and calling the "),n("i",[e._v("show(event)")]),e._v(" method. ")])},function(){var e=this,n=e._self._c;return n("div",{staticClass:"doc-tablewrapper"},[n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[e._v("Name")]),n("th",[e._v("Type")]),n("th",[e._v("Default")]),n("th",[e._v("Description")])])]),n("tbody",[n("tr",[n("td",[e._v("model")]),n("td",[e._v("array")]),n("td",[e._v("null")]),n("td",[e._v("An array of menuitems.")])]),n("tr",[n("td",[e._v("appendTo")]),n("td",[e._v("string")]),n("td",[e._v("null")]),n("td",[e._v('Id of the element or "body" for document where the overlay should be appended to.')])]),n("tr",[n("td",[e._v("baseZIndex")]),n("td",[e._v("number")]),n("td",[e._v("0")]),n("td",[e._v("Base zIndex value to use in layering.")])]),n("tr",[n("td",[e._v("autoZIndex")]),n("td",[e._v("boolean")]),n("td",[e._v("true")]),n("td",[e._v("Whether to automatically manage layering.")])]),n("tr",[n("td",[e._v("global")]),n("td",[e._v("boolean")]),n("td",[e._v("false")]),n("td",[e._v("Attaches the menu to document instead of a particular item.")])]),n("tr",[n("td",[e._v("exact")]),n("td",[e._v("boolean")]),n("td",[e._v("true")]),n("td",[e._v("Whether to apply 'router-link-active-exact' class if route exactly matches the item path.")])])])])])},function(){var e=this,n=e._self._c;return n("div",{staticClass:"doc-tablewrapper"},[n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[e._v("Name")]),n("th",[e._v("Parameters")]),n("th",[e._v("Description")])])]),n("tbody",[n("tr",[n("td",[e._v("toggle")]),n("td",[e._v("event: Browser event")]),n("td",[e._v("Toggles the visibility of the menu.")])]),n("tr",[n("td",[e._v("show")]),n("td",[e._v("event: Browser event")]),n("td",[e._v("Shows the menu.")])]),n("tr",[n("td",[e._v("hide")]),n("td",[e._v("-")]),n("td",[e._v("Hides the menu.")])])])])])},function(){var e=this,n=e._self._c;return n("div",{staticClass:"doc-tablewrapper"},[n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[e._v("Name")]),n("th",[e._v("Element")])])]),n("tbody",[n("tr",[n("td",[e._v("p-contextmenu")]),n("td",[e._v("Container element.")])]),n("tr",[n("td",[e._v("p-submenu-list")]),n("td",[e._v("Submenu list element.")])]),n("tr",[n("td",[e._v("p-menuitem")]),n("td",[e._v("Menuitem element.")])]),n("tr",[n("td",[e._v("p-menuitem-text")]),n("td",[e._v("Label of a menuitem.")])]),n("tr",[n("td",[e._v("p-menuitem-icon")]),n("td",[e._v("Icon of a menuitem.")])]),n("tr",[n("td",[e._v("p-submenu-icon")]),n("td",[e._v("Arrow icon of a submenu.")])])])])])}],!1,null,null).exports,t=i({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<img alt="logo" src="demo/images/nature/nature3.jpg" @contextmenu="onImageRightClick" aria-haspopup="true">\n<ContextMenu ref="menu" :model="items" />\n        '},sourceCode2:{basic:"\nexport default {\n    data() {\n        return {\n            items: [\n                {\n                   label:'File',\n                   icon:'pi pi-fw pi-file',\n                   items:[\n                      {\n                         label:'New',\n                         icon:'pi pi-fw pi-plus',\n                         items:[\n                            {\n                               label:'Bookmark',\n                               icon:'pi pi-fw pi-bookmark'\n                            },\n                            {\n                               label:'Video',\n                               icon:'pi pi-fw pi-video'\n                            },\n\n                         ]\n                      },\n                      {\n                         label:'Delete',\n                         icon:'pi pi-fw pi-trash'\n                      },\n                      {\n                         separator:true\n                      },\n                      {\n                         label:'Export',\n                         icon:'pi pi-fw pi-external-link'\n                      }\n                   ]\n                },\n                {\n                   label:'Edit',\n                   icon:'pi pi-fw pi-pencil',\n                   items:[\n                      {\n                         label:'Left',\n                         icon:'pi pi-fw pi-align-left'\n                      },\n                      {\n                         label:'Right',\n                         icon:'pi pi-fw pi-align-right'\n                      },\n                      {\n                         label:'Center',\n                         icon:'pi pi-fw pi-align-center'\n                      },\n                      {\n                         label:'Justify',\n                         icon:'pi pi-fw pi-align-justify'\n                      },\n\n                   ]\n                },\n                {\n                   label:'Users',\n                   icon:'pi pi-fw pi-user',\n                   items:[\n                      {\n                         label:'New',\n                         icon:'pi pi-fw pi-user-plus',\n\n                      },\n                      {\n                         label:'Delete',\n                         icon:'pi pi-fw pi-user-minus',\n\n                      },\n                      {\n                         label:'Search',\n                         icon:'pi pi-fw pi-users',\n                         items:[\n                            {\n                               label:'Filter',\n                               icon:'pi pi-fw pi-filter',\n                               items:[\n                                  {\n                                     label:'Print',\n                                     icon:'pi pi-fw pi-print'\n                                  }\n                               ]\n                            },\n                            {\n                               icon:'pi pi-fw pi-bars',\n                               label:'List'\n                            }\n                         ]\n                      }\n                   ]\n                },\n                {\n                   label:'Events',\n                   icon:'pi pi-fw pi-calendar',\n                   items:[\n                      {\n                         label:'Edit',\n                         icon:'pi pi-fw pi-pencil',\n                         items:[\n                            {\n                               label:'Save',\n                               icon:'pi pi-fw pi-calendar-plus'\n                            },\n                            {\n                               label:'Delete',\n                               icon:'pi pi-fw pi-calendar-minus'\n                            },\n\n                         ]\n                      },\n                      {\n                         label:'Archieve',\n                         icon:'pi pi-fw pi-calendar-times',\n                         items:[\n                            {\n                               label:'Remove',\n                               icon:'pi pi-fw pi-calendar-minus'\n                            }\n                         ]\n                      }\n                   ]\n                },\n                {\n                   separator:true\n                },\n                {\n                   label:'Quit',\n                   icon:'pi pi-fw pi-power-off'\n                }\n             ]\n        }\n    },\n    methods: {\n        onImageRightClick(event) {\n            this.$refs.menu.show(event);\n        }\n    }\n}\n        "}}}},(function(){var e=this,n=e._self._c;return n("div",[e._m(0),n("DocSectionCode",{attrs:{code:e.sourceCode1}}),n("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)}),[function(){var e=this._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/contextmenu",target:"_blank",rel:"noopener noreferrer"}},[e("span",[this._v("View on GitHub")])])}],!1,null,null).exports,o=i({components:{Documentation:n,SourceCode:t}},(function(){var e=this._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("Documentation")],1),e("TabPanel",{attrs:{header:"Source"}},[e("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;e("default",i({data:function(){var e=this;return{items:[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"Update",icon:"pi pi-fw pi-upload",to:"/fileupload"},{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-power-off",command:function(n){e.$toast.add({severity:"success",summary:"Quit",detail:"Quit success"})}}]}},methods:{onImageRightClick:function(e){this.$refs.menu.show(e)}},components:{ContextMenuDoc:o}},(function(){var e=this,n=e._self._c;return n("div",[e._m(0),n("div",{staticClass:"content-section implementation"},[n("div",{staticClass:"card"},[n("img",{attrs:{alt:"logo",src:e.$publicUrl("demo/images/nature/nature3.jpg"),"aria-haspopup":"true"},on:{contextmenu:e.onImageRightClick}}),n("ContextMenu",{ref:"menu",attrs:{model:e.items}})],1)]),n("ContextMenuDoc")],1)}),[function(){var e=this,n=e._self._c;return n("div",{staticClass:"content-section introduction"},[n("div",{staticClass:"feature-intro"},[n("h1",[e._v("ContextMenu")]),n("p",[e._v(" ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu. Refer to documentation of the individual documentation of the with context menu support. ")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=index-legacy-C-zikOd8.js.map
