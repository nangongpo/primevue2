System.register(["./app.component-legacy-cLUjg6K2.js","./ProductService-legacy-Ctw4T0RP.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(e,t){"use strict";var l,n,a;return{setters:[function(e){l=e.n,n=e.aJ},function(e){a=e.P},null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent="[data-v-39dec76b] .editable-cells-table td.p-cell-editing{padding-top:0;padding-bottom:0}\n/*$vite$:1*/",document.head.appendChild(t);var o=l({data:function(){return{baseCode:{basic:'\n<div class="card">\n    <DataTable :value="products1" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" responsiveLayout="scroll">\n        <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" :styles="{width: \'25%\'}">\n            <template #editor="slotProps">\n                <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />\n            </template>\n        </Column>\n    </DataTable>\n</div>\n\n<div class="card">\n    <DataTable :value="products2" editMode="row" dataKey="id" :editingRows.sync="editingRows" @row-edit-save="onRowEditSave" responsiveLayout="scroll">\n        <Column field="code" header="Code" :styles="{width:\'20%\'}">\n            <template #editor="slotProps">\n                <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />\n            </template>\n        </Column>\n        <Column field="name" header="Name" :styles="{width:\'20%\'}">\n            <template #editor="slotProps">\n                <InputText v-model="slotProps.data[slotProps.column.field]" />\n            </template>\n        </Column>\n        <Column field="inventoryStatus" header="Status" :styles="{width:\'20%\'}">\n            <template #editor="{ data, field }">\n                <Dropdown v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status">\n                    <template #option="slotProps">\n                        <span :class="\'product-badge status-\' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span>\n                    </template>\n                </Dropdown>\n            </template>\n            <template #body="slotProps">\n                {{getStatusLabel(slotProps.data.inventoryStatus)}}\n            </template>\n        </Column>\n        <Column field="price" header="Price" :styles="{width:\'20%\'}">\n            <template #editor="slotProps">\n                <InputText v-model="slotProps.data[slotProps.column.field]" />\n            </template>\n        </Column>\n        <Column :rowEditor="true" :styles="{width:\'10%\', \'min-width\':\'8rem\'}" :bodyStyle="{\'text-align\':\'center\'}"></Column>\n    </DataTable>\n</div>\n\n<div class="card">\n    <DataTable :value="products3" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" filterDisplay="row" :filters.sync="filters" responsiveLayout="scroll">\n        <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" style="width:25%" sortable filter>\n            <template #filter="{filterModel,filterCallback}">\n                <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" v-tooltip.top.focus="\'Hit enter key to filter\'"/>\n            </template>\n            <template #editor="{ data, field }">\n                <InputText v-model="data[field]" autofocus />\n            </template>\n        </Column>\n    </DataTable>\n</div>\n        '},baseCode2:{basic:"\nimport FilterMatchMode from '../../../src/components/api/FilterMatchMode';\nimport ProductService from '../../service/ProductService';\n\nexport default {\n    data() {\n        return {\n            editingRows: [],\n            columns: null,\n            products1: null,\n            products2: null,\n            products3: null,\n            statuses: [\n                {label: 'In Stock', value: 'INSTOCK'},\n                {label: 'Low Stock', value: 'LOWSTOCK'},\n                {label: 'Out of Stock', value: 'OUTOFSTOCK'}\n            ],\n            filters: {\n                'code': {value: null, matchMode: FilterMatchMode.STARTS_WITH},\n                'name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},\n                'quantity': {value: null, matchMode: FilterMatchMode.STARTS_WITH},\n                'price': {value: null, matchMode: FilterMatchMode.STARTS_WITH}\n            }\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n\n        this.columns = [\n            {field: 'code', header: 'Code'},\n            {field: 'name', header: 'Name'},\n            {field: 'quantity', header: 'Quantity'},\n            {field: 'price', header: 'Price'}\n        ];\n\n        this.originalRows = {};\n    },\n    methods: {\n        onCellEditComplete(event) {\n            let { data, newValue, field } = event;\n\n            switch (field) {\n                case 'quantity':\n                case 'price':\n                    if (this.isPositiveInteger(newValue))\n                        data[field] = newValue;\n                    else\n                        event.preventDefault();\n                break;\n\n                default:\n                    if (newValue.trim().length > 0)\n                        data[field] = newValue;\n                    else\n                        event.preventDefault();\n                break;\n            }\n        },\n        isPositiveInteger(val) {\n            let str = String(val);\n            str = str.trim();\n            if (!str) {\n                return false;\n            }\n            str = str.replace(/^0+/, \"\") || \"0\";\n            var n = Math.floor(Number(str));\n            return n !== Infinity && String(n) === str && n >= 0;\n        },\n        onRowEditSave(event) {\n            let { newData, index } = event;\n\n            this.products2[index] = newData;\n        },\n        getStatusLabel(status) {\n            switch(status) {\n                case 'INSTOCK':\n                    return 'In Stock';\n\n                case 'LOWSTOCK':\n                    return 'Low Stock';\n\n                case 'OUTOFSTOCK':\n                    return 'Out of Stock';\n\n                default:\n                    return 'NA';\n            }\n        }\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products1 = data);\n        this.productService.getProductsSmall().then(data => this.products2 = data);\n        this.productService.getProductsSmall().then(data => this.products3 = data);\n    }\n}\n        "}}}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("DocSectionCode",{attrs:{code:e.baseCode}}),t("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}})],1)],1)],1)}),[],!1,null,null).exports;e("default",l({components:{DataTableEditDoc:o},data:function(){return{editingRows:[],columns:null,products1:null,products2:null,products3:null,statuses:[{label:"In Stock",value:"INSTOCK"},{label:"Low Stock",value:"LOWSTOCK"},{label:"Out of Stock",value:"OUTOFSTOCK"}],filters:{code:{value:null,matchMode:n.STARTS_WITH},name:{value:null,matchMode:n.STARTS_WITH},quantity:{value:null,matchMode:n.STARTS_WITH},price:{value:null,matchMode:n.STARTS_WITH}}}},productService:null,created:function(){this.productService=new a,this.columns=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"quantity",header:"Quantity"},{field:"price",header:"Price"}],this.originalRows={}},methods:{onCellEditComplete:function(e){var t=e.data,l=e.newValue,n=e.field;switch(n){case"quantity":case"price":this.isPositiveInteger(l)?t[n]=l:e.preventDefault();break;default:l.trim().length>0?t[n]=l:e.preventDefault()}},isPositiveInteger:function(e){var t=String(e);if(!(t=t.trim()))return!1;t=t.replace(/^0+/,"")||"0";var l=Math.floor(Number(t));return l!==1/0&&String(l)===t&&l>=0},onRowEditSave:function(e){var t=e.newData,l=e.index;this.products2[l]=t},getStatusLabel:function(e){switch(e){case"INSTOCK":return"In Stock";case"LOWSTOCK":return"Low Stock";case"OUTOFSTOCK":return"Out of Stock";default:return"NA"}}},mounted:function(){var e=this;this.productService.getProductsSmall().then((function(t){return e.products1=t})),this.productService.getProductsSmall().then((function(t){return e.products2=t})),this.productService.getProductsSmall().then((function(t){return e.products3=t}))}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation p-fluid"},[t("div",{staticClass:"card"},[t("h5",[e._v("Cell Editing")]),t("p",[e._v("Validations, dynamic columns and reverting values with the escape key.")]),t("DataTable",{staticClass:"editable-cells-table",attrs:{value:e.products1,editMode:"cell",responsiveLayout:"scroll"},on:{"cell-edit-complete":e.onCellEditComplete}},e._l(e.columns,(function(l){return t("Column",{key:l.field,attrs:{field:l.field,header:l.header,styles:{width:"25%"}},scopedSlots:e._u([{key:"editor",fn:function(l){return[t("InputText",{attrs:{autofocus:""},model:{value:l.data[l.column.field],callback:function(t){e.$set(l.data,l.column.field,t)},expression:"slotProps.data[slotProps.column.field]"}})]}}],null,!0)})})),1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Row Editing")]),t("DataTable",{attrs:{value:e.products2,editMode:"row",dataKey:"id",editingRows:e.editingRows,responsiveLayout:"scroll"},on:{"update:editingRows":function(t){e.editingRows=t},"update:editing-rows":function(t){e.editingRows=t},"row-edit-save":e.onRowEditSave}},[t("Column",{attrs:{field:"code",header:"Code",styles:{width:"20%"}},scopedSlots:e._u([{key:"editor",fn:function(l){return[t("InputText",{attrs:{autofocus:""},model:{value:l.data[l.column.field],callback:function(t){e.$set(l.data,l.column.field,t)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),t("Column",{attrs:{field:"name",header:"Name",styles:{width:"20%"}},scopedSlots:e._u([{key:"editor",fn:function(l){return[t("InputText",{model:{value:l.data[l.column.field],callback:function(t){e.$set(l.data,l.column.field,t)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),t("Column",{attrs:{field:"inventoryStatus",header:"Status",styles:{width:"20%"}},scopedSlots:e._u([{key:"editor",fn:function(l){var n=l.data,a=l.field;return[t("Dropdown",{attrs:{options:e.statuses,optionLabel:"label",optionValue:"value",placeholder:"Select a Status"},scopedSlots:e._u([{key:"option",fn:function(l){return[t("span",{class:"product-badge status-"+l.option.value.toLowerCase()},[e._v(e._s(l.option.label))])]}}],null,!0),model:{value:n[a],callback:function(t){e.$set(n,a,t)},expression:"data[field]"}})]}},{key:"body",fn:function(t){return[e._v(" "+e._s(e.getStatusLabel(t.data.inventoryStatus))+" ")]}}])}),t("Column",{attrs:{field:"price",header:"Price",styles:{width:"20%"}},scopedSlots:e._u([{key:"editor",fn:function(l){return[t("InputText",{model:{value:l.data[l.column.field],callback:function(t){e.$set(l.data,l.column.field,t)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),t("Column",{attrs:{rowEditor:!0,styles:{width:"10%","min-width":"8rem"},bodyStyle:{"text-align":"center"}}})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Cell Editing with Sorting and Filter")]),t("DataTable",{staticClass:"editable-cells-table",attrs:{value:e.products3,editMode:"cell",filterDisplay:"row",filters:e.filters,responsiveLayout:"scroll"},on:{"cell-edit-complete":e.onCellEditComplete,"update:filters":function(t){e.filters=t}}},e._l(e.columns,(function(l){return t("Column",{key:l.field,staticStyle:{width:"25%"},attrs:{field:l.field,header:l.header,sortable:"",filter:""},scopedSlots:e._u([{key:"filter",fn:function(l){var n=l.filterModel,a=l.filterCallback;return[t("InputText",{directives:[{name:"tooltip",rawName:"v-tooltip.top.focus",value:"Hit enter key to filter",expression:"'Hit enter key to filter'",modifiers:{top:!0,focus:!0}}],staticClass:"p-column-filter",attrs:{type:"text"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:a()}},model:{value:n.value,callback:function(t){e.$set(n,"value",t)},expression:"filterModel.value"}})]}},{key:"editor",fn:function(l){var n=l.data,a=l.field;return[t("InputText",{attrs:{autofocus:""},model:{value:n[a],callback:function(t){e.$set(n,a,t)},expression:"data[field]"}})]}}],null,!0)})})),1)],1)]),t("DataTableEditDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("DataTable "),t("span",[e._v("InCell Edit")])]),t("p",[e._v("In cell editing provides a rapid and user friendly way to manipulate the data. The datatable provides a flexible API so that the editing behavior is implemented by the page author whether it utilizes v-model or vuex. ")])])])}],!1,null,"39dec76b").exports)}}}));
//# sourceMappingURL=Edit-legacy-CPUAPdFS.js.map