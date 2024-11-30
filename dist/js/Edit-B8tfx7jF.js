import{n,aK as r}from"./app.component-CxwrbeA3.js";import{P as d}from"./ProductService-B_eIBIF9.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const u={data(){return{baseCode:{basic:'\n<div class="card">\n    <DataTable :value="products1" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" responsiveLayout="scroll">\n        <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" :styles="{width: \'25%\'}">\n            <template #editor="slotProps">\n                <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />\n            </template>\n        </Column>\n    </DataTable>\n</div>\n\n<div class="card">\n    <DataTable :value="products2" editMode="row" dataKey="id" :editingRows.sync="editingRows" @row-edit-save="onRowEditSave" responsiveLayout="scroll">\n        <Column field="code" header="Code" :styles="{width:\'20%\'}">\n            <template #editor="slotProps">\n                <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />\n            </template>\n        </Column>\n        <Column field="name" header="Name" :styles="{width:\'20%\'}">\n            <template #editor="slotProps">\n                <InputText v-model="slotProps.data[slotProps.column.field]" />\n            </template>\n        </Column>\n        <Column field="inventoryStatus" header="Status" :styles="{width:\'20%\'}">\n            <template #editor="{ data, field }">\n                <Dropdown v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status">\n                    <template #option="slotProps">\n                        <span :class="\'product-badge status-\' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span>\n                    </template>\n                </Dropdown>\n            </template>\n            <template #body="slotProps">\n                {{getStatusLabel(slotProps.data.inventoryStatus)}}\n            </template>\n        </Column>\n        <Column field="price" header="Price" :styles="{width:\'20%\'}">\n            <template #editor="slotProps">\n                <InputText v-model="slotProps.data[slotProps.column.field]" />\n            </template>\n        </Column>\n        <Column :rowEditor="true" :styles="{width:\'10%\', \'min-width\':\'8rem\'}" :bodyStyle="{\'text-align\':\'center\'}"></Column>\n    </DataTable>\n</div>\n\n<div class="card">\n    <DataTable :value="products3" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" filterDisplay="row" :filters.sync="filters" responsiveLayout="scroll">\n        <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" style="width:25%" sortable filter>\n            <template #filter="{filterModel,filterCallback}">\n                <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" v-tooltip.top.focus="\'Hit enter key to filter\'"/>\n            </template>\n            <template #editor="{ data, field }">\n                <InputText v-model="data[field]" autofocus />\n            </template>\n        </Column>\n    </DataTable>\n</div>\n        '},baseCode2:{basic:"\nimport FilterMatchMode from '../../../src/components/api/FilterMatchMode';\nimport ProductService from '../../service/ProductService';\n\nexport default {\n    data() {\n        return {\n            editingRows: [],\n            columns: null,\n            products1: null,\n            products2: null,\n            products3: null,\n            statuses: [\n                {label: 'In Stock', value: 'INSTOCK'},\n                {label: 'Low Stock', value: 'LOWSTOCK'},\n                {label: 'Out of Stock', value: 'OUTOFSTOCK'}\n            ],\n            filters: {\n                'code': {value: null, matchMode: FilterMatchMode.STARTS_WITH},\n                'name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},\n                'quantity': {value: null, matchMode: FilterMatchMode.STARTS_WITH},\n                'price': {value: null, matchMode: FilterMatchMode.STARTS_WITH}\n            }\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n\n        this.columns = [\n            {field: 'code', header: 'Code'},\n            {field: 'name', header: 'Name'},\n            {field: 'quantity', header: 'Quantity'},\n            {field: 'price', header: 'Price'}\n        ];\n\n        this.originalRows = {};\n    },\n    methods: {\n        onCellEditComplete(event) {\n            let { data, newValue, field } = event;\n\n            switch (field) {\n                case 'quantity':\n                case 'price':\n                    if (this.isPositiveInteger(newValue))\n                        data[field] = newValue;\n                    else\n                        event.preventDefault();\n                break;\n\n                default:\n                    if (newValue.trim().length > 0)\n                        data[field] = newValue;\n                    else\n                        event.preventDefault();\n                break;\n            }\n        },\n        isPositiveInteger(val) {\n            let str = String(val);\n            str = str.trim();\n            if (!str) {\n                return false;\n            }\n            str = str.replace(/^0+/, \"\") || \"0\";\n            var n = Math.floor(Number(str));\n            return n !== Infinity && String(n) === str && n >= 0;\n        },\n        onRowEditSave(event) {\n            let { newData, index } = event;\n\n            this.products2[index] = newData;\n        },\n        getStatusLabel(status) {\n            switch(status) {\n                case 'INSTOCK':\n                    return 'In Stock';\n\n                case 'LOWSTOCK':\n                    return 'Low Stock';\n\n                case 'OUTOFSTOCK':\n                    return 'Out of Stock';\n\n                default:\n                    return 'NA';\n            }\n        }\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products1 = data);\n        this.productService.getProductsSmall().then(data => this.products2 = data);\n        this.productService.getProductsSmall().then(data => this.products3 = data);\n    }\n}\n        "}}}};var c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("DocSectionCode",{attrs:{code:e.baseCode}}),t("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}})],1)],1)],1)},p=[],f=n(u,c,p,!1,null,null);const m=f.exports,v={components:{DataTableEditDoc:m},data(){return{editingRows:[],columns:null,products1:null,products2:null,products3:null,statuses:[{label:"In Stock",value:"INSTOCK"},{label:"Low Stock",value:"LOWSTOCK"},{label:"Out of Stock",value:"OUTOFSTOCK"}],filters:{code:{value:null,matchMode:r.STARTS_WITH},name:{value:null,matchMode:r.STARTS_WITH},quantity:{value:null,matchMode:r.STARTS_WITH},price:{value:null,matchMode:r.STARTS_WITH}}}},productService:null,created(){this.productService=new d,this.columns=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"quantity",header:"Quantity"},{field:"price",header:"Price"}],this.originalRows={}},methods:{onCellEditComplete(a){let{data:e,newValue:t,field:l}=a;switch(l){case"quantity":case"price":this.isPositiveInteger(t)?e[l]=t:a.preventDefault();break;default:t.trim().length>0?e[l]=t:a.preventDefault();break}},isPositiveInteger(a){let e=String(a);if(e=e.trim(),!e)return!1;e=e.replace(/^0+/,"")||"0";var t=Math.floor(Number(e));return t!==1/0&&String(t)===e&&t>=0},onRowEditSave(a){let{newData:e,index:t}=a;this.products2[t]=e},getStatusLabel(a){switch(a){case"INSTOCK":return"In Stock";case"LOWSTOCK":return"Low Stock";case"OUTOFSTOCK":return"Out of Stock";default:return"NA"}}},mounted(){this.productService.getProductsSmall().then(a=>this.products1=a),this.productService.getProductsSmall().then(a=>this.products2=a),this.productService.getProductsSmall().then(a=>this.products3=a)}};var h=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation p-fluid"},[t("div",{staticClass:"card"},[t("h5",[e._v("Cell Editing")]),t("p",[e._v("Validations, dynamic columns and reverting values with the escape key.")]),t("DataTable",{staticClass:"editable-cells-table",attrs:{value:e.products1,editMode:"cell",responsiveLayout:"scroll"},on:{"cell-edit-complete":e.onCellEditComplete}},e._l(e.columns,function(l){return t("Column",{key:l.field,attrs:{field:l.field,header:l.header,styles:{width:"25%"}},scopedSlots:e._u([{key:"editor",fn:function(o){return[t("InputText",{attrs:{autofocus:""},model:{value:o.data[o.column.field],callback:function(i){e.$set(o.data,o.column.field,i)},expression:"slotProps.data[slotProps.column.field]"}})]}}],null,!0)})}),1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Row Editing")]),t("DataTable",{attrs:{value:e.products2,editMode:"row",dataKey:"id",editingRows:e.editingRows,responsiveLayout:"scroll"},on:{"update:editingRows":function(l){e.editingRows=l},"update:editing-rows":function(l){e.editingRows=l},"row-edit-save":e.onRowEditSave}},[t("Column",{attrs:{field:"code",header:"Code",styles:{width:"20%"}},scopedSlots:e._u([{key:"editor",fn:function(l){return[t("InputText",{attrs:{autofocus:""},model:{value:l.data[l.column.field],callback:function(o){e.$set(l.data,l.column.field,o)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),t("Column",{attrs:{field:"name",header:"Name",styles:{width:"20%"}},scopedSlots:e._u([{key:"editor",fn:function(l){return[t("InputText",{model:{value:l.data[l.column.field],callback:function(o){e.$set(l.data,l.column.field,o)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),t("Column",{attrs:{field:"inventoryStatus",header:"Status",styles:{width:"20%"}},scopedSlots:e._u([{key:"editor",fn:function({data:l,field:o}){return[t("Dropdown",{attrs:{options:e.statuses,optionLabel:"label",optionValue:"value",placeholder:"Select a Status"},scopedSlots:e._u([{key:"option",fn:function(i){return[t("span",{class:"product-badge status-"+i.option.value.toLowerCase()},[e._v(e._s(i.option.label))])]}}],null,!0),model:{value:l[o],callback:function(i){e.$set(l,o,i)},expression:"data[field]"}})]}},{key:"body",fn:function(l){return[e._v(" "+e._s(e.getStatusLabel(l.data.inventoryStatus))+" ")]}}])}),t("Column",{attrs:{field:"price",header:"Price",styles:{width:"20%"}},scopedSlots:e._u([{key:"editor",fn:function(l){return[t("InputText",{model:{value:l.data[l.column.field],callback:function(o){e.$set(l.data,l.column.field,o)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),t("Column",{attrs:{rowEditor:!0,styles:{width:"10%","min-width":"8rem"},bodyStyle:{"text-align":"center"}}})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Cell Editing with Sorting and Filter")]),t("DataTable",{staticClass:"editable-cells-table",attrs:{value:e.products3,editMode:"cell",filterDisplay:"row",filters:e.filters,responsiveLayout:"scroll"},on:{"cell-edit-complete":e.onCellEditComplete,"update:filters":function(l){e.filters=l}}},e._l(e.columns,function(l){return t("Column",{key:l.field,staticStyle:{width:"25%"},attrs:{field:l.field,header:l.header,sortable:"",filter:""},scopedSlots:e._u([{key:"filter",fn:function({filterModel:o,filterCallback:i}){return[t("InputText",{directives:[{name:"tooltip",rawName:"v-tooltip.top.focus",value:"Hit enter key to filter",expression:"'Hit enter key to filter'",modifiers:{top:!0,focus:!0}}],staticClass:"p-column-filter",attrs:{type:"text"},on:{keydown:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:i()}},model:{value:o.value,callback:function(s){e.$set(o,"value",s)},expression:"filterModel.value"}})]}},{key:"editor",fn:function({data:o,field:i}){return[t("InputText",{attrs:{autofocus:""},model:{value:o[i],callback:function(s){e.$set(o,i,s)},expression:"data[field]"}})]}}],null,!0)})}),1)],1)]),t("DataTableEditDoc")],1)},S=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[a._v("DataTable "),e("span",[a._v("InCell Edit")])]),e("p",[a._v("In cell editing provides a rapid and user friendly way to manipulate the data. The datatable provides a flexible API so that the editing behavior is implemented by the page author whether it utilizes v-model or vuex. ")])])])}],y=n(v,h,S,!1,null,"39dec76b");const g=y.exports;export{g as default};
//# sourceMappingURL=Edit-B8tfx7jF.js.map
