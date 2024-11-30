System.register(["./app.component-legacy-7lS-4wLG.js","./NodeService-legacy-DWh9huOt.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(e,n){"use strict";var t,r;return{setters:[function(e){t=e.n},function(e){r=e.N},null,null,null,null],execute:function(){var n=t({data:function(){return{sourceCode1:{basic:'\n<h3>Single Column Sorting</h3>\n<TreeTable :value="nodes" sortMode="single">\n    <Column field="name" header="Name" :expander="true" :sortable="true"></Column>\n    <Column field="size" header="Size" :sortable="true"></Column>\n    <Column field="type" header="Type" :sortable="true"></Column>\n</TreeTable>\n\n<h3>Multiple Column Sorting</h3>\n<TreeTable :value="nodes" sortMode="multiple">\n    <Column field="name" header="Name" :expander="true" :sortable="true"></Column>\n    <Column field="size" header="Size" :sortable="true"></Column>\n    <Column field="type" header="Type" :sortable="true"></Column>\n</TreeTable>\n\n<h3>Removable Sort</h3>\n<TreeTable :value="nodes" sortMode="single" removableSort>\n    <Column field="name" header="Name" :expander="true" :sortable="true"></Column>\n    <Column field="size" header="Size" :sortable="true"></Column>\n    <Column field="type" header="Type" :sortable="true"></Column>\n</TreeTable>\n        '},sourceCode2:{basic:"\nimport NodeService from '../../service/NodeService';\n\nexport default {\n    data() {\n        return {\n            nodes: null\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);\n    }\n}\n\n        "}}}},(function(){var e=this,n=e._self._c;return n("div",{staticClass:"content-section documentation"},[n("TabView",[n("TabPanel",{attrs:{header:"Source"}},[n("DocSectionCode",{attrs:{code:e.sourceCode1}}),n("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)],1)],1)}),[],!1,null,null).exports;e("default",t({data:function(){return{nodes:null}},nodeService:null,created:function(){this.nodeService=new r},mounted:function(){var e=this;this.nodeService.getTreeTableNodes().then((function(n){return e.nodes=n}))},components:{TreeTableSortDoc:n}},(function(){var e=this,n=e._self._c;return n("div",[e._m(0),n("div",{staticClass:"content-section implementation"},[n("div",{staticClass:"card"},[n("h5",[e._v("Single Column Sorting")]),n("TreeTable",{attrs:{value:e.nodes,sortMode:"single"}},[n("Column",{attrs:{field:"name",header:"Name",expander:!0,sortable:!0}}),n("Column",{attrs:{field:"size",header:"Size",sortable:!0}}),n("Column",{attrs:{field:"type",header:"Type",sortable:!0}})],1)],1),n("div",{staticClass:"card"},[n("h5",[e._v("Multiple Column Sorting")]),n("TreeTable",{attrs:{value:e.nodes,sortMode:"multiple"}},[n("Column",{attrs:{field:"name",header:"Name",expander:!0,sortable:!0}}),n("Column",{attrs:{field:"size",header:"Size",sortable:!0}}),n("Column",{attrs:{field:"type",header:"Type",sortable:!0}})],1)],1),n("div",{staticClass:"card"},[n("h5",[e._v("Removable Sort")]),n("TreeTable",{attrs:{value:e.nodes,sortMode:"single",removableSort:""}},[n("Column",{attrs:{field:"name",header:"Name",expander:!0,sortable:!0}}),n("Column",{attrs:{field:"size",header:"Size",sortable:!0}}),n("Column",{attrs:{field:"type",header:"Type",sortable:!0}})],1)],1)]),n("TreeTableSortDoc")],1)}),[function(){var e=this,n=e._self._c;return n("div",{staticClass:"content-section introduction"},[n("div",{staticClass:"feature-intro"},[n("h1",[e._v("TreeTable "),n("span",[e._v("Sort")])]),n("p",[e._v("TreeTable supports both single column and multiple column sorting..")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=TreeTableSortDemo-legacy-DDfPLONA.js.map
