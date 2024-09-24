System.register(["./NodeService-legacy-DWh9huOt.js","./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,n){"use strict";var t,a;return{setters:[function(e){t=e.N},function(e){a=e.n},null,null,null],execute:function(){e("default",a({data:function(){return{nodes:null}},nodeService:null,created:function(){this.nodeService=new t},mounted:function(){var e=this;this.nodeService.getTreeTableNodes().then((function(n){return e.nodes=n}))}},(function(){var e=this,n=e._self._c;return n("div",[e._m(0),n("div",{staticClass:"content-section implementation"},[n("div",{staticClass:"card"},[n("h5",[e._v("Fit Mode")]),n("TreeTable",{attrs:{value:e.nodes,resizableColumns:!0,columnResizeMode:"fit",showGridlines:""}},[n("Column",{attrs:{field:"name",header:"Name",expander:!0}}),n("Column",{attrs:{field:"size",header:"Size"}}),n("Column",{attrs:{field:"type",header:"Type"}})],1)],1),n("div",{staticClass:"card"},[n("h5",[e._v("Expand Mode")]),n("TreeTable",{attrs:{value:e.nodes,resizableColumns:!0,columnResizeMode:"expand",showGridlines:""}},[n("Column",{attrs:{field:"name",header:"Name",expander:!0}}),n("Column",{attrs:{field:"size",header:"Size"}}),n("Column",{attrs:{field:"type",header:"Type"}})],1)],1)]),n("div",{staticClass:"content-section documentation"},[n("TabView",[n("TabPanel",{attrs:{header:"Source"}},[n("CodeHighlight",[[e._v(' <h3>Fit Mode</h3> <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="fit"> <Column field="name" header="Name" :expander="true"></Column> <Column field="size" header="Size"></Column> <Column field="type" header="Type"></Column> </TreeTable> <h3>Expand Mode</h3> <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="expand"> <Column field="name" header="Name" :expander="true"></Column> <Column field="size" header="Size"></Column> <Column field="type" header="Type"></Column> </TreeTable> ')]],2),n("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import NodeService from '../../service/NodeService'; export default { data() { return { nodes: null } }, nodeService: null, created() { this.nodeService = new NodeService(); }, mounted() { this.nodeService.getTreeTableNodes().then(data => this.nodes = data); } } ")])],1)],1)],1)])}),[function(){var e=this,n=e._self._c;return n("div",{staticClass:"content-section introduction"},[n("div",{staticClass:"feature-intro"},[n("h1",[e._v("TreeTable "),n("span",[e._v("Column Resize")])]),n("p",[e._v('Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized. In "expand" mode, table width also changes along with the column width.')])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=TreeTableColResizeDemo-legacy-CEwFKTpa.js.map