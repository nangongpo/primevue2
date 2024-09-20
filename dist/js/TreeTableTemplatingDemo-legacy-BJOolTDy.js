System.register(["./NodeService-legacy-DWh9huOt.js","./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var n,o;return{setters:[function(e){n=e.N},function(e){o=e.n},null,null,null],execute:function(){e("default",o({data:function(){return{nodes:null}},nodeService:null,created:function(){this.nodeService=new n},mounted:function(){var e=this;this.nodeService.getTreeTableNodes().then((function(t){return e.nodes=t}))}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("TreeTable",{attrs:{value:e.nodes},scopedSlots:e._u([{key:"header",fn:function(){return[e._v(" FileSystem ")]},proxy:!0},{key:"footer",fn:function(){return[t("div",{staticStyle:{"text-align":"left"}},[t("Button",{attrs:{icon:"pi pi-refresh"}})],1)]},proxy:!0}])},[t("Column",{attrs:{field:"name",header:"Name",expander:!0}}),t("Column",{attrs:{field:"size",header:"Size"}}),t("Column",{attrs:{field:"type",header:"Type"}}),t("Column",{attrs:{headerStyle:{width:"10rem"},headerClass:"text-center",bodyClass:"text-center"},scopedSlots:e._u([{key:"header",fn:function(){return[t("Button",{attrs:{type:"button",icon:"pi pi-cog"}})]},proxy:!0},{key:"body",fn:function(){return[t("Button",{staticClass:"p-button-success",staticStyle:{"margin-right":".5em"},attrs:{type:"button",icon:"pi pi-search"}}),t("Button",{staticClass:"p-button-warning",attrs:{type:"button",icon:"pi pi-pencil"}})]},proxy:!0}])})],1)],1)]),t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("CodeHighlight",[[e._v(' <TreeTable :value="nodes"> <template #header> FileSystem </template> <Column field="name" header="Name" :expander="true"></Column> <Column field="size" header="Size"></Column> <Column field="type" header="Type"></Column> <Column headerStyle="width: 8em" bodyStyle="text-align: center"> <template #header> <Button type="button" icon="pi pi-cog"></Button> </template> <template #body="slotProps"> <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button> <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button> </template> </Column> <template #footer> <div style="text-align:left"> <Button icon="pi pi-refresh" /> </div> </template> </TreeTable> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import NodeService from '../../service/NodeService'; export default { data() { return { nodes: null } }, nodeService: null, created() { this.nodeService = new NodeService(); }, mounted() { this.nodeService.getTreeTableNodes().then(data => this.nodes = data); } } ")])],1)],1)],1)])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("TreeTable "),t("span",[e._v("Templating")])]),t("p",[e._v("Custom content at header, body and footer sections are supported via templating.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=TreeTableTemplatingDemo-legacy-BJOolTDy.js.map
