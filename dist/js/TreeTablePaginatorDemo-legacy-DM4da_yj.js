System.register(["./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var a;return{setters:[function(e){a=e.n},null,null,null],execute:function(){e("default",a({data:function(){return{nodes:null}},created:function(){for(var e=[],t=0;t<50;t++){var a={key:t,data:{name:"Item "+t,size:Math.floor(1e3*Math.random())+1+"kb",type:"Type "+t},children:[{key:t+" - 0",data:{name:"Item "+t+" - 0",size:Math.floor(1e3*Math.random())+1+"kb",type:"Type "+t}}]};e.push(a)}this.nodes=e}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("TreeTable",{attrs:{value:e.nodes,paginator:!0,rows:10}},[t("Column",{attrs:{field:"name",header:"Name",expander:!0}}),t("Column",{attrs:{field:"size",header:"Size"}}),t("Column",{attrs:{field:"type",header:"Type"}})],1)],1)]),t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("CodeHighlight",[[e._v(' <TreeTable :value="nodes" :paginator="true" :rows="10"> <Column field="name" header="Name" :expander="true"></Column> <Column field="size" header="Size"></Column> <Column field="type" header="Type"></Column> </TreeTable> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data() { return { nodes: null } }, created() { let files = []; for(let i = 0; i < 50; i++) { let node = { key: i, data: { name: 'Item ' + i, size: Math.floor(Math.random() * 1000) + 1 + 'kb', type: 'Type ' + i }, children: [ { key: i + ' - 0', data: { name: 'Item ' + i + ' - 0', size: Math.floor(Math.random() * 1000) + 1 + 'kb', type: 'Type ' + i } } ] }; files.push(node); } this.nodes = files; } } ")])],1)],1)],1)])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("TreeTable "),t("span",[e._v("Paginator")])]),t("p",[e._v("Pagination is enabled by setting paginator property to true and defining the rows attribute as the number of root level nodes per page.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=TreeTablePaginatorDemo-legacy-DM4da_yj.js.map
