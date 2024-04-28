import{N as a}from"./NodeService-DGU-G-ef.js";import{n}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const l={data(){return{nodes:null}},nodeService:null,created(){this.nodeService=new a},mounted(){this.nodeService.getTreeTableNodes().then(i=>this.nodes=i)}};var r=function(){var e=this,s=e._self._c;return s("div",[e._m(0),s("div",{staticClass:"content-section implementation"},[s("div",{staticClass:"card"},[s("h5",[e._v("Scroll")]),e._m(1),s("TreeTable",{attrs:{value:e.nodes,responsiveLayout:"scroll"}},[s("Column",{staticStyle:{"min-width":"200px"},attrs:{field:"name",header:"Name",expander:!0}}),s("Column",{staticStyle:{"min-width":"200px"},attrs:{field:"size",header:"Size"}}),s("Column",{staticStyle:{"min-width":"200px"},attrs:{field:"type",header:"Type"}})],1)],1),s("div",{staticClass:"card"},[s("h5",[e._v("Custom")]),s("p",[e._v("Custom implementation using media queries.")]),s("TreeTable",{attrs:{value:e.nodes}},[s("Column",{attrs:{field:"name",header:"Name",expander:!0},scopedSlots:e._u([{key:"body",fn:function(t){return[e._v(" "+e._s(t.node.data.name)+" "),s("span",{staticClass:"sm-visible"},[e._v(e._s(t.node.data.size))]),s("span",{staticClass:"sm-visible"},[e._v(e._s(t.node.data.type))])]}}])}),s("Column",{attrs:{field:"size",header:"Size",headerClass:"sm-invisible",bodyClass:"sm-invisible"}}),s("Column",{attrs:{field:"type",header:"Type",headerClass:"sm-invisible",bodyClass:"sm-invisible"}})],1)],1)]),s("div",{staticClass:"content-section documentation"},[s("TabView",[s("TabPanel",{attrs:{header:"Source"}},[s("CodeHighlight",[[e._v(' <div class="card"> <h5>Scroll</h5> <TreeTable :value="nodes" responsiveLayout="scroll"> <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column> <Column field="size" header="Size" style="min-width:200px"></Column> <Column field="type" header="Type" style="min-width:200px"></Column> </TreeTable> </div> <div class="card"> <h5>Custom></h5> <TreeTable :value="nodes"> <Column field="name" header="Name" :expander="true"> <template #body="slotProps"> {{slotProps.node.data.name}} <span class="sm-visible">{{slotProps.node.data.size}}</span> <span class="sm-visible">{{slotProps.node.data.type}}</span> </template> </Column> <Column field="size" header="Size" headerClass="sm-invisible" bodyClass="sm-invisible"></Column> <Column field="type" header="Type" headerClass="sm-invisible" bodyClass="sm-invisible"></Column> </TreeTable> </div> ')]],2),s("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import NodeService from '../../service/NodeService'; export default { data() { return { nodes: null } }, nodeService: null, created() { this.nodeService = new NodeService(); }, mounted() { this.nodeService.getTreeTableNodes().then(data => this.nodes = data); } } ")]),s("CodeHighlight",{attrs:{lang:"css"}},[e._v(" .sm-visible { display: none; } @media screen and (max-width: 40em) { :deep(.sm-invisible) { display: none; } :deep(.sm-visible) { display: inline; margin-right: .5rem; } } ")])],1)],1)],1)])},d=[function(){var i=this,e=i._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[i._v("TreeTable - Responsive")]),e("p",[i._v("TreeTable display can be optimized according for different screen sizes.")])])])},function(){var i=this,e=i._self._c;return e("p",[i._v("Built-in responsiveness using the "),e("b",[i._v("responsiveLayout")]),i._v(" property set to scroll.")])}],o=n(l,r,d,!1,null,"47c20d7d");const h=o.exports;export{h as default};
//# sourceMappingURL=TreeTableResponsiveDemo-CjZfJB-t.js.map
