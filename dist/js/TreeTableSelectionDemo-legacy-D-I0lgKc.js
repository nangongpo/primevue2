System.register(["./NodeService-legacy-DWh9huOt.js","./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var l,n;return{setters:[function(e){l=e.N},function(e){n=e.n},null,null,null],execute:function(){e("default",n({data:function(){return{selectedKey1:null,selectedKey2:null,selectedKeys1:null,selectedKeys2:null,selectedKeys3:null,nodes:null}},nodeService:null,created:function(){this.nodeService=new l},mounted:function(){var e=this;this.nodeService.getTreeTableNodes().then((function(t){return e.nodes=t}))},methods:{onNodeSelect:function(e){this.$toast.add({severity:"success",summary:"Node Selected",detail:e.data.name,life:3e3})},onNodeUnselect:function(e){this.$toast.add({severity:"success",summary:"Node Unselected",detail:e.data.name,life:3e3})}}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Single Selection")]),t("TreeTable",{attrs:{value:e.nodes,selectionMode:"single",selectionKeys:e.selectedKey1},on:{"update:selectionKeys":function(t){e.selectedKey1=t},"update:selection-keys":function(t){e.selectedKey1=t}}},[t("Column",{attrs:{field:"name",header:"Name",expander:!0}}),t("Column",{attrs:{field:"size",header:"Size"}}),t("Column",{attrs:{field:"type",header:"Type"}})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Multiple Selection with MetaKey")]),t("TreeTable",{attrs:{value:e.nodes,selectionMode:"multiple",selectionKeys:e.selectedKeys1},on:{"update:selectionKeys":function(t){e.selectedKeys1=t},"update:selection-keys":function(t){e.selectedKeys1=t}}},[t("Column",{attrs:{field:"name",header:"Name",expander:!0}}),t("Column",{attrs:{field:"size",header:"Size"}}),t("Column",{attrs:{field:"type",header:"Type"}})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Multiple Selection without MetaKey")]),t("TreeTable",{attrs:{value:e.nodes,selectionMode:"multiple",selectionKeys:e.selectedKeys2,metaKeySelection:!1},on:{"update:selectionKeys":function(t){e.selectedKeys2=t},"update:selection-keys":function(t){e.selectedKeys2=t}}},[t("Column",{attrs:{field:"name",header:"Name",expander:!0}}),t("Column",{attrs:{field:"size",header:"Size"}}),t("Column",{attrs:{field:"type",header:"Type"}})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Checkbox Selection")]),t("TreeTable",{attrs:{value:e.nodes,selectionMode:"checkbox",selectionKeys:e.selectedKeys3},on:{"update:selectionKeys":function(t){e.selectedKeys3=t},"update:selection-keys":function(t){e.selectedKeys3=t}}},[t("Column",{attrs:{field:"name",header:"Name",expander:!0}}),t("Column",{attrs:{field:"size",header:"Size"}}),t("Column",{attrs:{field:"type",header:"Type"}})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Events")]),t("TreeTable",{attrs:{value:e.nodes,selectionMode:"single",selectionKeys:e.selectedKey2},on:{"update:selectionKeys":function(t){e.selectedKey2=t},"update:selection-keys":function(t){e.selectedKey2=t},"node-select":e.onNodeSelect,"node-unselect":e.onNodeUnselect}},[t("Column",{attrs:{field:"name",header:"Name",expander:!0}}),t("Column",{attrs:{field:"size",header:"Size"}}),t("Column",{attrs:{field:"type",header:"Type"}})],1)],1)]),t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("CodeHighlight",[[e._v(' <h3>Single Selection</h3> <TreeTable :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey1"> <Column field="name" header="Name" :expander="true"></Column> <Column field="size" header="Size"></Column> <Column field="type" header="Type"></Column> </TreeTable> <h3>Multiple Selection with MetaKey</h3> <TreeTable :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys1"> <Column field="name" header="Name" :expander="true"></Column> <Column field="size" header="Size"></Column> <Column field="type" header="Type"></Column> </TreeTable> <h3>Multiple Selection without MetaKey</h3> <TreeTable :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys2" :metaKeySelection="false"> <Column field="name" header="Name" :expander="true"></Column> <Column field="size" header="Size"></Column> <Column field="type" header="Type"></Column> </TreeTable> <h3>Checkbox Selection</h3> <TreeTable :value="nodes" selectionMode="checkbox" :selectionKeys.sync="selectedKeys3"> <Column field="name" header="Name" :expander="true"></Column> <Column field="size" header="Size"></Column> <Column field="type" header="Type"></Column> </TreeTable> <h3>Events</h3> <TreeTable :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey2" @node-select="onNodeSelect" @node-unselect="onNodeUnselect"> <Column field="name" header="Name" :expander="true"></Column> <Column field="size" header="Size"></Column> <Column field="type" header="Type"></Column> </TreeTable> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import NodeService from '../../service/NodeService'; export default { data() { return { selectedKey1: null, selectedKey2: null, selectedKeys1: null, selectedKeys2: null, selectedKeys3: null, nodes: null } }, nodeService: null, created() { this.nodeService = new NodeService(); }, mounted() { this.nodeService.getTreeTableNodes().then(data => this.nodes = data); }, methods: { onNodeSelect(node) { this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.data.name, life: 3000}); }, onNodeUnselect(node) { this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.data.name, life: 3000}); } } } ")])],1)],1)],1)])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("TreeTable "),t("span",[e._v("Selection")])]),t("p",[e._v("TreeTable supports "),t("b",[e._v("single")]),e._v(", "),t("b",[e._v("multiple")]),e._v(" and "),t("b",[e._v("checkbox")]),e._v(" as selection modes.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=TreeTableSelectionDemo-legacy-D-I0lgKc.js.map