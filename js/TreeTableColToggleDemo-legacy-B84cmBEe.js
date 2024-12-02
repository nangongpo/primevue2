!function(){function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}System.register(["./app.component-legacy-cLUjg6K2.js","./NodeService-legacy-DWh9huOt.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(n,t){"use strict";var o,l;return{setters:[function(e){o=e.n},function(e){l=e.N},null,null,null,null],execute:function(){var t=o({data:function(){return{sourceCode1:{basic:'\n<TreeTable :value="nodes">\n    <template #header>\n        <div style="text-align:left">\n            <MultiSelect v-model="columns" :options="columnOptions" optionLabel="header" placeholder="Select Columns" style="width: 20em"/>\n        </div>\n    </template>\n    <Column field="name" header="Name" :expander="true"></Column>\n    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>\n</TreeTable>\n        '},sourceCode2:{basic:"\nimport NodeService from '../../service/NodeService';\n\nexport default {\n    data() {\n        return {\n            nodes: null,\n            columnOptions: null,\n            columns: null\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n\n        this.columns = [\n            {field: 'size', header: 'Size'},\n            {field: 'type', header: 'Type'}\n        ];\n\n        this.columnOptions = [...this.columns];\n    },\n    mounted() {\n        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);\n    }\n}\n        "}}}},(function(){var e=this,n=e._self._c;return n("div",{staticClass:"content-section documentation"},[n("TabView",[n("TabPanel",{attrs:{header:"Source"}},[n("DocSectionCode",{attrs:{code:e.sourceCode1}}),n("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)],1)],1)}),[],!1,null,null).exports;n("default",o({data:function(){return{nodes:null,columnOptions:null,columns:null}},nodeService:null,created:function(){this.nodeService=new l,this.columns=[{field:"size",header:"Size"},{field:"type",header:"Type"}],this.columnOptions=e(this.columns)},mounted:function(){var e=this;this.nodeService.getTreeTableNodes().then((function(n){return e.nodes=n}))},components:{TreeTableColToggleDoc:t}},(function(){var e=this,n=e._self._c;return n("div",[e._m(0),n("div",{staticClass:"content-section implementation"},[n("div",{staticClass:"card"},[n("TreeTable",{attrs:{value:e.nodes},scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticStyle:{"text-align":"left"}},[n("MultiSelect",{staticStyle:{width:"20em"},attrs:{options:e.columnOptions,optionLabel:"header",placeholder:"Select Columns"},model:{value:e.columns,callback:function(n){e.columns=n},expression:"columns"}})],1)]},proxy:!0}])},[n("Column",{attrs:{field:"name",header:"Name",expander:!0}}),e._l(e.columns,(function(e){return n("Column",{key:e.field,attrs:{field:e.field,header:e.header}})}))],2)],1)]),n("TreeTableColToggleDoc")],1)}),[function(){var e=this,n=e._self._c;return n("div",{staticClass:"content-section introduction"},[n("div",{staticClass:"feature-intro"},[n("h1",[e._v("TreeTable "),n("span",[e._v("Column Toggle")])]),n("p",[e._v("MultiSelect component can be used to implement column toggle functionality.")])])])}],!1,null,null).exports)}}}))}();
//# sourceMappingURL=TreeTableColToggleDemo-legacy-B84cmBEe.js.map
