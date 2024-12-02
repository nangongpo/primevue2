System.register(["./app.component-legacy-cLUjg6K2.js","./NodeService-legacy-DWh9huOt.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(e,t){"use strict";var n,s;return{setters:[function(e){n=e.n},function(e){s=e.N},null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent="button[data-v-356dbf5e]{margin-right:.5rem}\n/*$vite$:1*/",document.head.appendChild(t);var l=n({data:function(){return{sourceCode1:{basic:'\n<h3>Single Selection</h3>\n<Tree :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey1"></Tree>\n\n<h3>Multiple Selection with MetaKey</h3>\n<Tree :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys1"></Tree>\n\n<h3>Multiple Selection without MetaKey</h3>\n<Tree :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys2" :metaKeySelection="false"></Tree>\n\n<h3>Checkbox Selection</h3>\n<Tree :value="nodes" selectionMode="checkbox" :selectionKeys.sync="selectedKeys3"></Tree>\n\n<h3>Events</h3>\n<Tree :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey2" :metaKeySelection="false"\n    @node-select="onNodeSelect" @node-unselect="onNodeUnselect"></Tree>\n        '},sourceCode2:{basic:"\nimport NodeService from '../../service/NodeService';\n\nexport default {\n    data() {\n        return {\n            selectedKey1: null,\n            selectedKey2: null,\n            selectedKeys1: null,\n            selectedKeys2: null,\n            selectedKeys3: null,\n            nodes: null\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeNodes().then(data => this.nodes = data);\n    },\n    methods: {\n        onNodeSelect(node) {\n            this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.label, life: 3000});\n        },\n        onNodeUnselect(node) {\n            this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.label, life: 3000});\n        }\n    }\n}\n        "}}}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("DocSectionCode",{attrs:{code:e.sourceCode1}}),t("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)],1)],1)}),[],!1,null,null).exports;e("default",n({data:function(){return{selectedKey1:null,selectedKey2:null,selectedKeys1:null,selectedKeys2:null,selectedKeys3:null,nodes:null}},nodeService:null,created:function(){this.nodeService=new s},mounted:function(){var e=this;this.nodeService.getTreeNodes().then((function(t){return e.nodes=t}))},methods:{onNodeSelect:function(e){this.$toast.add({severity:"success",summary:"Node Selected",detail:e.label,life:3e3})},onNodeUnselect:function(e){this.$toast.add({severity:"success",summary:"Node Unselected",detail:e.label,life:3e3})}},components:{TreeSelectionDoc:l}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Single Selection")]),t("Tree",{attrs:{value:e.nodes,selectionMode:"single",selectionKeys:e.selectedKey1},on:{"update:selectionKeys":function(t){e.selectedKey1=t},"update:selection-keys":function(t){e.selectedKey1=t}}}),t("h5",[e._v("Multiple Selection with MetaKey")]),t("Tree",{attrs:{value:e.nodes,selectionMode:"multiple",selectionKeys:e.selectedKeys1},on:{"update:selectionKeys":function(t){e.selectedKeys1=t},"update:selection-keys":function(t){e.selectedKeys1=t}}}),t("h5",[e._v("Multiple Selection without MetaKey")]),t("Tree",{attrs:{value:e.nodes,selectionMode:"multiple",selectionKeys:e.selectedKeys2,metaKeySelection:!1},on:{"update:selectionKeys":function(t){e.selectedKeys2=t},"update:selection-keys":function(t){e.selectedKeys2=t}}}),t("h5",[e._v("Checkbox Selection")]),t("Tree",{attrs:{value:e.nodes,selectionMode:"checkbox",selectionKeys:e.selectedKeys3},on:{"update:selectionKeys":function(t){e.selectedKeys3=t},"update:selection-keys":function(t){e.selectedKeys3=t}}}),t("h5",[e._v("Events")]),t("Tree",{attrs:{value:e.nodes,selectionMode:"single",selectionKeys:e.selectedKey2,metaKeySelection:!1},on:{"update:selectionKeys":function(t){e.selectedKey2=t},"update:selection-keys":function(t){e.selectedKey2=t},"node-select":e.onNodeSelect,"node-unselect":e.onNodeUnselect}})],1)]),t("TreeSelectionDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("Tree "),t("span",[e._v("Selection")])]),t("p",[e._v("Tree supports "),t("b",[e._v("single")]),e._v(", "),t("b",[e._v("multiple")]),e._v(" and "),t("b",[e._v("checkbox")]),e._v(" as selection modes.")])])])}],!1,null,"356dbf5e").exports)}}}));
//# sourceMappingURL=TreeSelectionDemo-legacy-elz9Wofd.js.map