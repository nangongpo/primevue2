import{N as r}from"./NodeService-DGU-G-ef.js";import{n as l}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const n={data(){return{nodes:null}},nodeService:null,created(){this.nodeService=new r},mounted(){this.nodeService.getTreeTableNodes().then(t=>this.nodes=t)}};var o=function(){var a=this,e=a._self._c;return e("div",[a._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("TreeTable",{staticClass:"p-treetable-sm",staticStyle:{"margin-bottom":"2rem"},attrs:{value:a.nodes},scopedSlots:a._u([{key:"header",fn:function(){return[a._v(" Small Table ")]},proxy:!0}])},[e("Column",{attrs:{field:"name",header:"Name",expander:!0}}),e("Column",{attrs:{field:"size",header:"Size"}}),e("Column",{attrs:{field:"type",header:"Type"}})],1)],1),e("div",{staticClass:"card"},[e("TreeTable",{staticStyle:{"margin-bottom":"2rem"},attrs:{value:a.nodes},scopedSlots:a._u([{key:"header",fn:function(){return[a._v(" Normal Table ")]},proxy:!0}])},[e("Column",{attrs:{field:"name",header:"Name",expander:!0}}),e("Column",{attrs:{field:"size",header:"Size"}}),e("Column",{attrs:{field:"type",header:"Type"}})],1)],1),e("div",{staticClass:"card"},[e("TreeTable",{staticClass:"p-treetable-lg",attrs:{value:a.nodes},scopedSlots:a._u([{key:"header",fn:function(){return[a._v(" Large Table ")]},proxy:!0}])},[e("Column",{attrs:{field:"name",header:"Name",expander:!0}}),e("Column",{attrs:{field:"size",header:"Size"}}),e("Column",{attrs:{field:"type",header:"Type"}})],1)],1)]),e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Source"}},[e("CodeHighlight",[[a._v(' <TreeTable :value="nodes" class="p-treetable-sm" style="margin-bottom: 2rem"> <template #header> Small Table </template> <Column field="name" header="Name" :expander="true"></Column> <Column field="size" header="Size"></Column> <Column field="type" header="Type"></Column> </TreeTable> <TreeTable :value="nodes" style="margin-bottom: 2rem"> <template #header> Small Table </template> <Column field="name" header="Name" :expander="true"></Column> <Column field="size" header="Size"></Column> <Column field="type" header="Type"></Column> </TreeTable> <TreeTable :value="nodes" class="p-treetable-lg"> <template #header> Small Table </template> <Column field="name" header="Name" :expander="true"></Column> <Column field="size" header="Size"></Column> <Column field="type" header="Type"></Column> </TreeTable> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[a._v(" import NodeService from '../../service/NodeService'; export default { data() { return { nodes: null, } }, nodeService: null, created() { this.nodeService = new NodeService(); }, mounted() { this.nodeService.getTreeTableNodes().then(data => this.nodes = data); } } ")])],1)],1)],1)])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"content-section introduction"},[a("div",{staticClass:"feature-intro"},[a("h1",[t._v("TreeTable "),a("span",[t._v("Size")])]),a("p",[t._v("In addition to a regular table, a smaller and a larger alternatives available.")])])])}],d=l(n,o,i,!1,null,null);const v=d.exports;export{v as default};
//# sourceMappingURL=TreeTableSizeDemo-DoTIcTuL.js.map
