!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function t(n,t,o){var i;return i=function(n,t){if("object"!=e(n)||!n)return n;var o=n[Symbol.toPrimitive];if(void 0!==o){var i=o.call(n,t||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(t,"string"),(t="symbol"==e(i)?i:i+"")in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}function o(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var o=0,d=function(){};return{s:d,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,r=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){r=!0,a=e},f:function(){try{l||null==t.return||t.return()}finally{if(r)throw a}}}}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}System.register(["./NodeService-legacy-DWh9huOt.js","./app.component-legacy-cLUjg6K2.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(e,i){"use strict";var d,a;return{setters:[function(e){d=e.N},function(e){a=e.n},null,null,null,null],execute:function(){var i=document.createElement("style");i.textContent="button[data-v-4c89fc3e]{margin-right:.5rem}\n/*$vite$:1*/",document.head.appendChild(i);var l=a({name:"Documentation",data:function(){return{importCode:{basic:"\nimport Tree from 'primevue2/tree';\n        "},baseCode:{basic:'\n<Tree :value="nodes"></Tree>\n        '},baseCode2:{basic:"\nimport NodeService from '../../service/NodeService';\n\nexport default {\n    data() {\n        return {\n            nodes: null\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeNodes().then(data => this.nodes = data);\n    }\n}\n        "},baseCode3:{basic:"\nexport default class NodeService {\n\n    getTreeNodes() {\n        return fetch('demo/data/treenodes.json').then(res => res.json()).then(d => d.data);\n    }\n\n}\n        "},baseCode4:{basic:'\n{\n    "root": [\n        {\n            "key": "0",\n            "label": "Documents",\n            "data": "Documents Folder",\n            "icon": "pi pi-fw pi-inbox",\n            "children": [{\n                "key": "0-0",\n                "label": "Work",\n                "data": "Work Folder",\n                "icon": "pi pi-fw pi-cog",\n                "children": [{ "key": "0-0-0", "label": "Expenses.doc", "icon": "pi pi-fw pi-file", "data": "Expenses Document" }, { "key": "0-0-1", "label": "Resume.doc", "icon": "pi pi-fw pi-file", "data": "Resume Document" }]\n            },\n            {\n                "key": "0-1",\n                "label": "Home",\n                "data": "Home Folder",\n                "icon": "pi pi-fw pi-home",\n                "children": [{ "key": "0-1-0", "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month" }]\n            }]\n        },\n        {\n            "key": "1",\n            "label": "Events",\n            "data": "Events Folder",\n            "icon": "pi pi-fw pi-calendar",\n            "children": [\n                { "key": "1-0", "label": "Meeting", "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting" },\n                { "key": "1-1", "label": "Product Launch", "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch" },\n                { "key": "1-2", "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review" }]\n        },\n        {\n            "key": "2",\n            "label": "Movies",\n            "data": "Movies Folder",\n            "icon": "pi pi-fw pi-star-fill",\n            "children": [{\n                "key": "2-0",\n                "icon": "pi pi-fw pi-star-fill",\n                "label": "Al Pacino",\n                "data": "Pacino Movies",\n                "children": [{ "key": "2-0-0", "label": "Scarface", "icon": "pi pi-fw pi-video", "data": "Scarface Movie" }, { "key": "2-0-1", "label": "Serpico", "icon": "pi pi-fw pi-video", "data": "Serpico Movie" }]\n            },\n            {\n                "key": "2-1",\n                "label": "Robert De Niro",\n                "icon": "pi pi-fw pi-star-fill",\n                "data": "De Niro Movies",\n                "children": [{ "key": "2-1-0", "label": "Goodfellas", "icon": "pi pi-fw pi-video", "data": "Goodfellas Movie" }, { "key": "2-1-1", "label": "Untouchables", "icon": "pi pi-fw pi-video", "data": "Untouchables Movie" }]\n            }]\n        }\n    ]\n}\n        '},programmaticControlCode:{basic:'\n<div>\n    <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />\n    <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />\n</div>\n<Tree :value="nodes" :expandedKeys="expandedKeys"></Tree>\n        '},programmaticControlCode2:{basic:"\nimport NodeService from '../../service/NodeService';\n\nexport default {\n    data() {\n        return {\n            nodes: null,\n            expandedKeys: {}\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeNodes().then(data => this.nodes = data);\n    },\n    methods: {\n        expandAll() {\n            for (let node of this.nodes) {\n                this.expandNode(node);\n            }\n\n            this.expandedKeys = {...this.expandedKeys};\n        },\n        collapseAll() {\n            this.expandedKeys = {};\n        },\n        expandNode(node) {\n            this.expandedKeys[node.key] = true;\n            if (node.children && node.children.length) {\n                for (let child of node.children) {\n                    this.expandNode(child);\n                }\n            }\n        }\n    }\n}\n        "},programmaticControlCode3:{basic:"\nimport NodeService from '../../service/NodeService';\n\nexport default {\n    data() {\n        return {\n            nodes: null,\n            expandedKeys: {}\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeNodes().then(data => {\n            this.nodes = data;\n            this.expandedKeys[this.nodes[0].key] = true;\n            this.expandedKeys[this.nodes[1].key] = true;\n        });\n    }\n}\n        "},selectionCode:{basic:'\n<h3>Single Selection</h3>\n<Tree :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey1"></Tree>\n\n<h3>Multiple Selection with MetaKey</h3>\n<Tree :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys1"></Tree>\n\n<h3>Multiple Selection without MetaKey</h3>\n<Tree :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys2" :metaKeySelection="false"></Tree>\n\n<h3>Checkbox Selection</h3>\n<Tree :value="nodes" selectionMode="checkbox" :selectionKeys.sync="selectedKeys3"></Tree>\n\n<h3>Events</h3>\n<Tree :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey2" :metaKeySelection="false"\n    @node-select="onNodeSelect" @node-unselect="onNodeUnselect"></Tree>\n        '},selectionCode2:{basic:"\nimport NodeService from '../../service/NodeService';\n\nexport default {\n    data() {\n        return {\n            selectedKey1: null,\n            selectedKey2: null,\n            selectedKeys1: null,\n            selectedKeys2: null,\n            selectedKeys3: null,\n            nodes: null\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeNodes().then(data => this.nodes = data);\n    },\n    methods: {\n        onNodeSelect(node) {\n            this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.label, life: 3000});\n        },\n        onNodeUnselect(node) {\n            this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.label, life: 3000});\n        }\n    }\n}\n\n        "},selectionCode3:{basic:"\nimport NodeService from '../../service/NodeService';\n\nexport default {\n    data() {\n        return {\n            selectedKey1: null,\n            selectedKey2: null,\n            selectedKeys1: null,\n            selectedKeys2: null,\n            selectedKeys3: null,\n            nodes: null\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeNodes().then(data => {\n            this.nodes = data;\n\n            //single preselection\n            this.selectedKey1[this.nodes[0].key] = true;\n\n            //multiple preselection\n            this.selectedKeys2[this.nodes[0].key] = true;\n            this.selectedKeys2[this.nodes[1].key] = true;\n\n            //checkbox preselection\n            this.selectedKeys2[this.nodes[1].key] = {checked: true};\n        });\n    }\n}\n        "},lazyCode:{basic:'\n<Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading"></Tree>\n        '},lazyCode2:{basic:"\nimport NodeService from '../../service/NodeService';\n\nexport default {\n    data() {\n        return {\n            loading: false,\n            nodes: null\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.loading = true;\n\n        setTimeout(() => {\n            this.nodes = this.initateNodes();\n            this.loading = false;\n        }, 2000);\n    },\n    methods: {\n        onNodeExpand(node) {\n            if (!node.children) {\n                this.loading = true;\n\n                setTimeout(() => {\n                    let _node = {...node};\n                    _node.children = [];\n\n                    for (let i = 0; i < 3; i++) {\n                        _node.children.push({\n                            key: node.key + '-' + i,\n                            label: 'Lazy ' + node.label + '-' + i\n                        });\n                    }\n\n                    let _nodes = {...this.nodes}\n                    _nodes[parseInt(node.key, 10)] = _node;\n\n                    this.nodes = _nodes;\n                    this.loading = false;\n                }, 500);\n            }\n        },\n        initateNodes() {\n            return [{\n                key: '0',\n                label: 'Node 0',\n                leaf: false\n            },\n            {\n                key: '1',\n                label: 'Node 1',\n                leaf: false\n            },\n            {\n                key: '2',\n                label: 'Node 2',\n                leaf: false\n            }];\n        }\n    }\n}\n        "},templatingCode:{basic:'\n<Tree :value="nodes">\n    <template #default="slotProps">\n        <b>{{slotProps.node.label}}</b>\n    </template>\n    <template #url="slotProps">\n        <a :href="slotProps.node.data">{{slotProps.node.label}}</a>\n    </template>\n</Tree>\n        '},templatingCode2:{basic:"\nexport default {\n    data() {\n        return {\n            nodes: [\n                {\n                    key: '0',\n                    label: 'Introduction',\n                    children: [\n                        {key: '0-0', label: 'What is Vue.js?', data:'https://vuejs.org/v2/guide/#What-is-Vue-js', type: 'url'},\n                        {key: '0-1', label: 'Getting Started', data: 'https://vuejs.org/v2/guide/#Getting-Started', type: 'url'},\n                        {key: '0-2', label: 'Declarative Rendering', data:'https://vuejs.org/v2/guide/#Declarative-Rendering', type: 'url'},\n                        {key: '0-3', label: 'Conditionals and Loops', data: 'https://vuejs.org/v2/guide/#Conditionals-and-Loops', type: 'url'}\n                    ]\n                },\n                {\n                    key: '1',\n                    label: 'Components In-Depth',\n                    children: [\n                        {key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/v2/guide/components-registration.html', type: 'url'},\n                        {key: '1-1', llabel: 'Props', data: 'https://vuejs.org/v2/guide/components-props.html', type: 'url'},\n                        {key: '1-2', llabel: 'Custom Events', data: 'https://vuejs.org/v2/guide/components-custom-events.html', type: 'url'},\n                        {key: '1-3', llabel: 'Slots', data: 'https://vuejs.org/v2/guide/components-slots.html', type: 'url'}\n                    ]\n                }\n            ]\n        }\n    }\n}\n        "},filteringCode:{basic:'\n<h3>Lenient Filter</h3>\n<Tree :value="nodes" :filter="true" filterMode="lenient"></Tree>\n\n<h3>Strict Filter</h3>\n<Tree :value="nodes" :filter="true" filterMode="strict"></Tree>\n        '},filteringCode2:{basic:"\nimport NodeService from '../../service/NodeService';\n\nexport default {\n    data() {\n        return {\n            nodes: null,\n            expandedKeys: {}\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeNodes().then(data => this.nodes = data);\n    },\n    methods: {\n        expandAll() {\n            for (let node of this.nodes) {\n                this.expandNode(node);\n            }\n\n            this.expandedKeys = {...this.expandedKeys};\n        },\n        collapseAll() {\n            this.expandedKeys = {};\n        },\n        expandNode(node) {\n            if (node.children << node.children.length) {\n                this.expandedKeys[node.key] = true;\n\n                for (let child of node.children) {\n                    this.expandNode(child);\n                }\n            }\n        }\n    }\n}\n        "}}}},(function(){var e=this,n=e._self._c;return n("div",[n("h5",[e._v("Import")]),n("DocSectionCode",{attrs:{code:e.importCode,importCode:""}}),n("h5",[e._v("Getting Started")]),e._m(0),n("h5",[e._v("TreeNode API utilized by the Tree")]),e._m(1),n("p",[e._v("Example below loads the tree nodes from a remote datasource via a service called NodeService.")]),n("DocSectionCode",{attrs:{code:e.baseCode}}),n("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}}),n("DocSectionCode",{attrs:{code:e.baseCode3,importCode:""}}),n("p",[e._v("The json response sample would be as following.")]),n("DocSectionCode",{attrs:{code:e.baseCode4,importCode:""}}),n("h5",[e._v("Programmatic Control")]),e._m(2),n("p",[e._v("Example below expands and collapses all nodes with buttons.")]),n("DocSectionCode",{attrs:{code:e.programmaticControlCode}}),n("DocSectionCode",{attrs:{code:e.programmaticControlCode2,importCode:""}}),n("DocSectionCode",{attrs:{code:e.programmaticControlCode3,importCode:""}}),n("h5",[e._v("Selection")]),e._m(3),e._m(4),n("DocSectionCode",{attrs:{code:e.selectionCode}}),n("DocSectionCode",{attrs:{code:e.selectionCode2,importCode:""}}),n("p",[e._v("To display some nodes as selected by default, simply add their keys to the map.")]),n("DocSectionCode",{attrs:{code:e.selectionCode3,importCode:""}}),n("h5",[e._v("Lazy")]),e._m(5),n("DocSectionCode",{attrs:{code:e.lazyCode}}),n("DocSectionCode",{attrs:{code:e.lazyCode2,importCode:""}}),n("h5",[e._v("Templating")]),e._m(6),n("DocSectionCode",{attrs:{code:e.templatingCode}}),n("DocSectionCode",{attrs:{code:e.templatingCode2,importCode:""}}),n("h5",[e._v("Filtering")]),e._m(7),e._m(8),e._v("Z "),n("DocSectionCode",{attrs:{code:e.filteringCode}}),n("DocSectionCode",{attrs:{code:e.filteringCode2,importCode:""}}),n("h5",[e._v("Properties")]),n("p",[e._v("Any property such as style and class are passed to the underlying root element. Following is the additional property to configure the component.")]),e._m(9),n("h5",[e._v("Events")]),e._m(10),n("h5",[e._v("Styling")]),n("p",[e._v("Following is the list of structural style classes, for theming classes visit "),n("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),e._m(11),n("h5",[e._v("Dependencies")]),n("p",[e._v("None.")])],1)}),[function(){var e=this,n=e._self._c;return n("p",[e._v("Tree component requires an array of TreeNode objects as its "),n("i",[e._v("value")]),e._v(".")])},function(){var e=this,n=e._self._c;return n("div",{staticClass:"doc-tablewrapper"},[n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[e._v("Name")]),n("th",[e._v("Type")]),n("th",[e._v("Default")]),n("th",[e._v("Description")])])]),n("tbody",[n("tr",[n("td",[e._v("key")]),n("td",[e._v("any")]),n("td",[e._v("null")]),n("td",[e._v("Mandatory unique key of the node.")])]),n("tr",[n("td",[e._v("label")]),n("td",[e._v("string")]),n("td",[e._v("null")]),n("td",[e._v("Label of the node.")])]),n("tr",[n("td",[e._v("data")]),n("td",[e._v("any")]),n("td",[e._v("null")]),n("td",[e._v("Data represented by the node.")])]),n("tr",[n("td",[e._v("type")]),n("td",[e._v("string")]),n("td",[e._v("null")]),n("td",[e._v("Type of the node to match a template.")])]),n("tr",[n("td",[e._v("icon")]),n("td",[e._v("string")]),n("td",[e._v("null")]),n("td",[e._v("Icon of the node to display next to content.")])]),n("tr",[n("td",[e._v("children")]),n("td",[e._v("TreeNode[]")]),n("td",[e._v("null")]),n("td",[e._v("An array of treenodes as children.")])]),n("tr",[n("td",[e._v("style")]),n("td",[e._v("string")]),n("td",[e._v("null")]),n("td",[e._v("Inline style of the node.")])]),n("tr",[n("td",[e._v("styleClass")]),n("td",[e._v("string")]),n("td",[e._v("null")]),n("td",[e._v("Style class of the node.")])]),n("tr",[n("td",[e._v("selectable")]),n("td",[e._v("boolean")]),n("td",[e._v("null")]),n("td",[e._v("Whether the node is selectable when selection mode is enabled.")])]),n("tr",[n("td",[e._v("leaf")]),n("td",[e._v("boolean")]),n("td",[e._v("null")]),n("td",[e._v("Specifies if the node has children. Used in lazy loading.")])])])])])},function(){var e=this,n=e._self._c;return n("p",[e._v("Tree state can be controlled programmatically with the "),n("i",[e._v("expandedKeys")]),e._v(" property that defines the keys that are expanded. This property is a Map instance whose key is the key of a node and value is a boolean. Note that "),n("i",[e._v("expandedKeys")]),e._v(" also supports two-way binding with the sync modifier. ")])},function(){var e=this,n=e._self._c;return n("p",[e._v("Tree supports "),n("b",[e._v("single")]),e._v(", "),n("b",[e._v("multiple")]),e._v(" and "),n("b",[e._v("checkbox")]),e._v(" selection modes. Define the "),n("i",[e._v("selectionKeys")]),e._v(" with the sync operator and the "),n("i",[e._v("selectionMode")]),e._v(" properties to enable the selection. By default in multiple selection mode, metaKey is necessary to add to existing selections however this can be configured with "),n("i",[e._v("metaKeySelection")]),e._v(" property. Note that in touch enabled devices, Tree does not require metaKey. In addition selection on a particular node can be disabled if the "),n("i",[e._v("selectable")]),e._v(" is false on the node instance.")])},function(){var e=this,n=e._self._c;return n("p",[e._v("Similarly to the "),n("i",[e._v("expandedKeys")]),e._v(", "),n("i",[e._v("selectionKeys")]),e._v(' is a Map instance whose key is the key of a node and value is a boolean in "single" and "multiple" cases. On the other hand in "checkbox" mode, instead of a boolean, value should be an object that has "checked" and "partialChecked" properties to represent the checked state of a node.')])},function(){var e=this,n=e._self._c;return n("p",[e._v("Lazy Loading is handy to deal with huge datasets. Idea is instead of loading the whole tree, load child nodes on demand using expand expand. The important part is setting "),n("i",[e._v("leaf")]),e._v(" to true on a node instance so that even without children, tree would render an expand icon. Example below uses an in memory collection to mimic a lazy loading scenario with timeouts. ")])},function(){var e=this,n=e._self._c;return n("p",[e._v("The "),n("i",[e._v("type")]),e._v(" property of a TreeNode is used to map a template to a node to create the node label. If it is undefined and no default template is available, label of the node is used.")])},function(){var e=this,n=e._self._c;return n("p",[e._v("Filtering is enabled by setting the "),n("i",[e._v("filter")]),e._v(" property to true, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search, define the "),n("i",[e._v("filterBy")]),e._v(" property as a comma separated list.")])},function(){var e=this,n=e._self._c;return n("p",[e._v("In addition "),n("i",[e._v("filterMode")]),e._v(" specifies the filtering strategy. In "),n("b",[e._v("lenient")]),e._v(" mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in "),n("b",[e._v("strict")]),e._v(" mode when the query matches a node, filtering continues on all descendants.")])},function(){var e=this,n=e._self._c;return n("div",{staticClass:"doc-tablewrapper"},[n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[e._v("Name")]),n("th",[e._v("Type")]),n("th",[e._v("Default")]),n("th",[e._v("Description")])])]),n("tbody",[n("tr",[n("td",[e._v("value")]),n("td",[e._v("array")]),n("td",[e._v("null")]),n("td",[e._v("An array of treenodes.")])]),n("tr",[n("td",[e._v("expandedKeys")]),n("td",[e._v("array")]),n("td",[e._v("null")]),n("td",[e._v("A map of keys to represent the state of the tree expansion state in controlled mode.")])]),n("tr",[n("td",[e._v("selectionMode")]),n("td",[e._v("string")]),n("td",[e._v("null")]),n("td",[e._v('Defines the selection mode, valid values "single", "multiple", and "checkbox".')])]),n("tr",[n("td",[e._v("selectionKeys")]),n("td",[e._v("any")]),n("td",[e._v("null")]),n("td",[e._v("A map of keys to control the selection state.")])]),n("tr",[n("td",[e._v("metaKeySelection")]),n("td",[e._v("boolean")]),n("td",[e._v("true")]),n("td",[e._v("Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.")])]),n("tr",[n("td",[e._v("loading")]),n("td",[e._v("boolean")]),n("td",[e._v("false")]),n("td",[e._v("Whether to display loading indicator.")])]),n("tr",[n("td",[e._v("loadingIcon")]),n("td",[e._v("string")]),n("td",[e._v("pi pi-spin")]),n("td",[e._v("Icon to display when tree is loading.")])]),n("tr",[n("td",[e._v("filter")]),n("td",[e._v("boolean")]),n("td",[e._v("false")]),n("td",[e._v("When specified, displays an input field to filter the items.")])]),n("tr",[n("td",[e._v("filterBy")]),n("td",[e._v("string")]),n("td",[e._v("label")]),n("td",[e._v("When filtering is enabled, filterBy decides which field or fields (comma separated) to search against. ")])]),n("tr",[n("td",[e._v("filterMode")]),n("td",[e._v("string")]),n("td",[e._v("lenient")]),n("td",[e._v('Mode for filtering valid values are "lenient" and "strict". Default is lenient.')])]),n("tr",[n("td",[e._v("filterPlaceholder")]),n("td",[e._v("string")]),n("td",[e._v("null")]),n("td",[e._v("Placeholder text to show when filter input is empty.")])]),n("tr",[n("td",[e._v("filterLocale")]),n("td",[e._v("string")]),n("td",[e._v("undefined")]),n("td",[e._v("Locale to use in filtering. The default locale is the host environment's current locale.")])])])])])},function(){var e=this,n=e._self._c;return n("div",{staticClass:"doc-tablewrapper"},[n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[e._v("Name")]),n("th",[e._v("Parameters")]),n("th",[e._v("Description")])])]),n("tbody",[n("tr",[n("td",[e._v("node-select")]),n("td",[e._v("node: Node instance")]),n("td",[e._v("Callback to invoke when a node is selected.")])]),n("tr",[n("td",[e._v("node-unselect")]),n("td",[e._v("node: Node instance")]),n("td",[e._v("Callback to invoke when a node is unselected.")])]),n("tr",[n("td",[e._v("node-expand")]),n("td",[e._v("node: Node instance")]),n("td",[e._v("Callback to invoke when a node is expanded.")])]),n("tr",[n("td",[e._v("node-collapse")]),n("td",[e._v("node: Node instance")]),n("td",[e._v("Callback to invoke when a node is collapsed.")])])])])])},function(){var e=this,n=e._self._c;return n("div",{staticClass:"doc-tablewrapper"},[n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[e._v("Name")]),n("th",[e._v("Element")])])]),n("tbody",[n("tr",[n("td",[e._v("p-tree")]),n("td",[e._v("Main container element")])]),n("tr",[n("td",[e._v("p-tree-horizontal")]),n("td",[e._v("Main container element in horizontal mode")])]),n("tr",[n("td",[e._v("p-tree-container")]),n("td",[e._v("Container of nodes")])]),n("tr",[n("td",[e._v("p-treenode")]),n("td",[e._v("A treenode element")])]),n("tr",[n("td",[e._v("p-treenode-content")]),n("td",[e._v("Content of a treenode")])]),n("tr",[n("td",[e._v("p-treenode-toggler")]),n("td",[e._v("Toggle element")])]),n("tr",[n("td",[e._v("p-treenode-toggler-icon")]),n("td",[e._v("Toggle icon")])]),n("tr",[n("td",[e._v("p-treenode-icon")]),n("td",[e._v("Icon of a treenode")])]),n("tr",[n("td",[e._v("p-treenode-label")]),n("td",[e._v("Label of a treenode")])]),n("tr",[n("td",[e._v("p-treenode-children")]),n("td",[e._v("Container element for node children")])])])])])}],!1,null,null).exports,r=a({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<h3>Basic</h3>\n<Tree :value="nodes"></Tree>\n\n<h3>Programmatic Control</h3>\n<div style="margin-bottom: 1em">\n    <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />\n    <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />\n</div>\n<Tree :value="nodes" :expandedKeys="expandedKeys"></Tree>\n        '},sourceCode2:{basic:"\nimport NodeService from '../../service/NodeService';\n\nexport default {\n    data() {\n        return {\n            nodes: null,\n            expandedKeys: {}\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeNodes().then(data => this.nodes = data);\n    },\n    methods: {\n        expandAll() {\n            for (let node of this.nodes) {\n                this.expandNode(node);\n            }\n\n            this.expandedKeys = {...this.expandedKeys};\n        },\n        collapseAll() {\n            this.expandedKeys = {};\n        },\n        expandNode(node) {\n            if (node.children &amp;&amp; node.children.length) {\n                this.expandedKeys[node.key] = true;\n\n                for (let child of node.children) {\n                    this.expandNode(child);\n                }\n            }\n        }\n    }\n}\n        "}}}},(function(){var e=this,n=e._self._c;return n("div",[e._m(0),n("DocSectionCode",{attrs:{code:e.sourceCode1}}),n("DocSectionCode",{attrs:{code:e.sourceCode2,importCode:""}})],1)}),[function(){var e=this._self._c;return e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/tree",target:"_blank",rel:"noopener noreferrer"}},[e("span",[this._v("View on GitHub")])])}],!1,null,null).exports,s={data:function(){return{nodes:null,expandedKeys:{}}},nodeService:null,created:function(){this.nodeService=new d},mounted:function(){var e=this;this.nodeService.getTreeNodes().then((function(n){return e.nodes=n}))},methods:{expandAll:function(){var e,i=o(this.nodes);try{for(i.s();!(e=i.n()).done;){var d=e.value;this.expandNode(d)}}catch(a){i.e(a)}finally{i.f()}this.expandedKeys=function(e){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?n(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}({},this.expandedKeys)},collapseAll:function(){this.expandedKeys={}},expandNode:function(e){if(e.children&&e.children.length){this.expandedKeys[e.key]=!0;var n,t=o(e.children);try{for(t.s();!(n=t.n()).done;){var i=n.value;this.expandNode(i)}}catch(d){t.e(d)}finally{t.f()}}}},components:{TreeDoc:a({components:{Documentation:l,SourceCode:r}},(function(){var e=this._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("Documentation")],1),e("TabPanel",{attrs:{header:"Source"}},[e("SourceCode")],1)],1)],1)}),[],!1,null,null).exports}};e("default",a(s,(function(){var e=this,n=e._self._c;return n("div",[e._m(0),n("div",{staticClass:"content-section implementation"},[n("div",{staticClass:"card"},[n("h5",[e._v("Basic")]),n("Tree",{attrs:{value:e.nodes}}),n("h5",[e._v("Programmatic Control")]),n("div",{staticStyle:{"margin-bottom":"1em"}},[n("Button",{attrs:{type:"button",icon:"pi pi-plus",label:"Expand All"},on:{click:e.expandAll}}),n("Button",{attrs:{type:"button",icon:"pi pi-minus",label:"Collapse All"},on:{click:e.collapseAll}})],1),n("Tree",{attrs:{value:e.nodes,expandedKeys:e.expandedKeys}})],1)]),n("TreeDoc")],1)}),[function(){var e=this,n=e._self._c;return n("div",{staticClass:"content-section introduction"},[n("div",{staticClass:"feature-intro"},[n("h1",[e._v("Tree")]),n("p",[e._v("Tree is used to display hierarchical data.")])])])}],!1,null,"4c89fc3e").exports)}}}))}();
//# sourceMappingURL=TreeDemo-legacy-DcGWBqVd.js.map
