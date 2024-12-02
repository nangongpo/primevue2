import{n as o}from"./app.component-BAbvz7X_.js";import{N as r}from"./NodeService-DGU-G-ef.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const a={data(){return{sourceCode1:{basic:'\n<TreeTable :value="nodes">\n    <template #header>\n        FileSystem\n    </template>\n    <Column field="name" header="Name" :expander="true"></Column>\n    <Column field="size" header="Size"></Column>\n    <Column field="type" header="Type"></Column>\n    <Column headerStyle="width: 8em" bodyStyle="text-align: center">\n        <template #body="slotProps">\n            <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>\n            <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>\n        </template>\n    </Column>\n    <template #footer>\n        <div style="text-align:left">\n            <Button icon="pi pi-refresh" />\n        </div>\n    </template>\n</TreeTable>\n        '},sourceCode2:{basic:"\nimport NodeService from '../../service/NodeService';\n\nexport default {\n    data() {\n        return {\n            nodes: null\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);\n    }\n}\n        "}}}};var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Source"}},[e("DocSectionCode",{attrs:{code:t.sourceCode1}}),e("DocSectionCode",{attrs:{code:t.sourceCode2,importCode:""}})],1)],1)],1)},s=[],c=o(a,i,s,!1,null,null);const l=c.exports,d={data(){return{nodes:null}},nodeService:null,created(){this.nodeService=new r},mounted(){this.nodeService.getTreeTableNodes().then(n=>this.nodes=n)},components:{TreeTableTemplatingDoc:l}};var u=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("TreeTable",{attrs:{value:t.nodes},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" FileSystem ")]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticStyle:{"text-align":"left"}},[e("Button",{attrs:{icon:"pi pi-refresh"}})],1)]},proxy:!0}])},[e("Column",{attrs:{field:"name",header:"Name",expander:!0}}),e("Column",{attrs:{field:"size",header:"Size"}}),e("Column",{attrs:{field:"type",header:"Type"}}),e("Column",{attrs:{headerStyle:{width:"10rem"},headerClass:"text-center",bodyClass:"text-center"},scopedSlots:t._u([{key:"header",fn:function(){return[e("Button",{attrs:{type:"button",icon:"pi pi-cog"}})]},proxy:!0},{key:"body",fn:function(){return[e("Button",{staticClass:"p-button-success",staticStyle:{"margin-right":".5em"},attrs:{type:"button",icon:"pi pi-search"}}),e("Button",{staticClass:"p-button-warning",attrs:{type:"button",icon:"pi pi-pencil"}})]},proxy:!0}])})],1)],1)]),e("TreeTableTemplatingDoc")],1)},p=[function(){var n=this,t=n._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[n._v("TreeTable "),t("span",[n._v("Templating")])]),t("p",[n._v("Custom content at header, body and footer sections are supported via templating.")])])])}],m=o(d,u,p,!1,null,null);const b=m.exports;export{b as default};
//# sourceMappingURL=TreeTableTemplatingDemo-o5EsEudZ.js.map