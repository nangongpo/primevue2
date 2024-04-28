import{n,aJ as r}from"./app.component-D2FSMXVj.js";import{P as d}from"./ProductService-B_eIBIF9.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const u={data(){return{editingRows:[],columns:null,products1:null,products2:null,products3:null,statuses:[{label:"In Stock",value:"INSTOCK"},{label:"Low Stock",value:"LOWSTOCK"},{label:"Out of Stock",value:"OUTOFSTOCK"}],filters:{code:{value:null,matchMode:r.STARTS_WITH},name:{value:null,matchMode:r.STARTS_WITH},quantity:{value:null,matchMode:r.STARTS_WITH},price:{value:null,matchMode:r.STARTS_WITH}}}},productService:null,created(){this.productService=new d,this.columns=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"quantity",header:"Quantity"},{field:"price",header:"Price"}],this.originalRows={}},methods:{onCellEditComplete(a){let{data:e,newValue:t,field:l}=a;switch(l){case"quantity":case"price":this.isPositiveInteger(t)?e[l]=t:a.preventDefault();break;default:t.trim().length>0?e[l]=t:a.preventDefault();break}},isPositiveInteger(a){let e=String(a);if(e=e.trim(),!e)return!1;e=e.replace(/^0+/,"")||"0";var t=Math.floor(Number(e));return t!==1/0&&String(t)===e&&t>=0},onRowEditSave(a){let{newData:e,index:t}=a;this.products2[t]=e},getStatusLabel(a){switch(a){case"INSTOCK":return"In Stock";case"LOWSTOCK":return"Low Stock";case"OUTOFSTOCK":return"Out of Stock";default:return"NA"}}},mounted(){this.productService.getProductsSmall().then(a=>this.products1=a),this.productService.getProductsSmall().then(a=>this.products2=a),this.productService.getProductsSmall().then(a=>this.products3=a)}};var c=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation p-fluid"},[t("div",{staticClass:"card"},[t("h5",[e._v("Cell Editing")]),t("p",[e._v("Validations, dynamic columns and reverting values with the escape key.")]),t("DataTable",{staticClass:"editable-cells-table",attrs:{value:e.products1,editMode:"cell",responsiveLayout:"scroll"},on:{"cell-edit-complete":e.onCellEditComplete}},e._l(e.columns,function(l){return t("Column",{key:l.field,attrs:{field:l.field,header:l.header,styles:{width:"25%"}},scopedSlots:e._u([{key:"editor",fn:function(o){return[t("InputText",{attrs:{autofocus:""},model:{value:o.data[o.column.field],callback:function(i){e.$set(o.data,o.column.field,i)},expression:"slotProps.data[slotProps.column.field]"}})]}}],null,!0)})}),1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Row Editing")]),t("DataTable",{attrs:{value:e.products2,editMode:"row",dataKey:"id",editingRows:e.editingRows,responsiveLayout:"scroll"},on:{"update:editingRows":function(l){e.editingRows=l},"update:editing-rows":function(l){e.editingRows=l},"row-edit-save":e.onRowEditSave}},[t("Column",{attrs:{field:"code",header:"Code",styles:{width:"20%"}},scopedSlots:e._u([{key:"editor",fn:function(l){return[t("InputText",{attrs:{autofocus:""},model:{value:l.data[l.column.field],callback:function(o){e.$set(l.data,l.column.field,o)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),t("Column",{attrs:{field:"name",header:"Name",styles:{width:"20%"}},scopedSlots:e._u([{key:"editor",fn:function(l){return[t("InputText",{model:{value:l.data[l.column.field],callback:function(o){e.$set(l.data,l.column.field,o)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),t("Column",{attrs:{field:"inventoryStatus",header:"Status",styles:{width:"20%"}},scopedSlots:e._u([{key:"editor",fn:function({data:l,field:o}){return[t("Dropdown",{attrs:{options:e.statuses,optionLabel:"label",optionValue:"value",placeholder:"Select a Status"},scopedSlots:e._u([{key:"option",fn:function(i){return[t("span",{class:"product-badge status-"+i.option.value.toLowerCase()},[e._v(e._s(i.option.label))])]}}],null,!0),model:{value:l[o],callback:function(i){e.$set(l,o,i)},expression:"data[field]"}})]}},{key:"body",fn:function(l){return[e._v(" "+e._s(e.getStatusLabel(l.data.inventoryStatus))+" ")]}}])}),t("Column",{attrs:{field:"price",header:"Price",styles:{width:"20%"}},scopedSlots:e._u([{key:"editor",fn:function(l){return[t("InputText",{model:{value:l.data[l.column.field],callback:function(o){e.$set(l.data,l.column.field,o)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),t("Column",{attrs:{rowEditor:!0,styles:{width:"10%","min-width":"8rem"},bodyStyle:{"text-align":"center"}}})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Cell Editing with Sorting and Filter")]),t("DataTable",{staticClass:"editable-cells-table",attrs:{value:e.products3,editMode:"cell",filterDisplay:"row",filters:e.filters,responsiveLayout:"scroll"},on:{"cell-edit-complete":e.onCellEditComplete,"update:filters":function(l){e.filters=l}}},e._l(e.columns,function(l){return t("Column",{key:l.field,staticStyle:{width:"25%"},attrs:{field:l.field,header:l.header,sortable:"",filter:""},scopedSlots:e._u([{key:"filter",fn:function({filterModel:o,filterCallback:i}){return[t("InputText",{directives:[{name:"tooltip",rawName:"v-tooltip.top.focus",value:"Hit enter key to filter",expression:"'Hit enter key to filter'",modifiers:{top:!0,focus:!0}}],staticClass:"p-column-filter",attrs:{type:"text"},on:{keydown:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:i()}},model:{value:o.value,callback:function(s){e.$set(o,"value",s)},expression:"filterModel.value"}})]}},{key:"editor",fn:function({data:o,field:i}){return[t("InputText",{attrs:{autofocus:""},model:{value:o[i],callback:function(s){e.$set(o,i,s)},expression:"data[field]"}})]}}],null,!0)})}),1)],1)]),t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("CodeHighlight",[[e._v(' <div class="card"> <DataTable :value="products1" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" responsiveLayout="scroll"> <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" :styles="{width: \'25%\'}"> <template #editor="slotProps"> <InputText v-model="slotProps.data[slotProps.column.field]" autofocus /> </template> </Column> </DataTable> </div> <div class="card"> <DataTable :value="products2" editMode="row" dataKey="id" :editingRows.sync="editingRows" @row-edit-save="onRowEditSave" responsiveLayout="scroll"> <Column field="code" header="Code" :styles="{width:\'20%\'}"> <template #editor="slotProps"> <InputText v-model="slotProps.data[slotProps.column.field]" autofocus /> </template> </Column> <Column field="name" header="Name" :styles="{width:\'20%\'}"> <template #editor="slotProps"> <InputText v-model="slotProps.data[slotProps.column.field]" /> </template> </Column> <Column field="inventoryStatus" header="Status" :styles="{width:\'20%\'}"> <template #editor="{ data, field }"> <Dropdown v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status"> <template #option="slotProps"> <span :class="\'product-badge status-\' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span> </template> </Dropdown> </template> <template #body="slotProps"> {{getStatusLabel(slotProps.data.inventoryStatus)}} </template> </Column> <Column field="price" header="Price" :styles="{width:\'20%\'}"> <template #editor="slotProps"> <InputText v-model="slotProps.data[slotProps.column.field]" /> </template> </Column> <Column :rowEditor="true" :styles="{width:\'10%\', \'min-width\':\'8rem\'}" :bodyStyle="{\'text-align\':\'center\'}"></Column> </DataTable> </div> <div class="card"> <DataTable :value="products3" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" filterDisplay="row" :filters.sync="filters" responsiveLayout="scroll"> <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" style="width:25%" sortable filter> <template #filter="{filterModel,filterCallback}"> <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" v-tooltip.top.focus="\'Hit enter key to filter\'"/> </template> <template #editor="{ data, field }"> <InputText v-model="data[field]" autofocus /> </template> </Column> </DataTable> </div> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import FilterMatchMode from '../../../src/components/api/FilterMatchMode'; import ProductService from '../../service/ProductService'; export default { data() { return { editingRows: [], columns: null, products1: null, products2: null, products3: null, statuses: [ {label: 'In Stock', value: 'INSTOCK'}, {label: 'Low Stock', value: 'LOWSTOCK'}, {label: 'Out of Stock', value: 'OUTOFSTOCK'} ], filters: { 'code': {value: null, matchMode: FilterMatchMode.STARTS_WITH}, 'name': {value: null, matchMode: FilterMatchMode.STARTS_WITH}, 'quantity': {value: null, matchMode: FilterMatchMode.STARTS_WITH}, 'price': {value: null, matchMode: FilterMatchMode.STARTS_WITH} } } }, productService: null, created() { this.productService = new ProductService(); this.columns = [ {field: 'code', header: 'Code'}, {field: 'name', header: 'Name'}, {field: 'quantity', header: 'Quantity'}, {field: 'price', header: 'Price'} ]; this.originalRows = {}; }, methods: { onCellEditComplete(event) { let { data, newValue, field } = event; switch (field) { case 'quantity': case 'price': if (this.isPositiveInteger(newValue)) data[field] = newValue; else event.preventDefault(); break; default: if (newValue.trim().length > 0) data[field] = newValue; else event.preventDefault(); break; } }, isPositiveInteger(val) { let str = String(val); str = str.trim(); if (!str) { return false; } str = str.replace(/^0+/, \"\") || \"0\"; var n = Math.floor(Number(str)); return n !== Infinity && String(n) === str && n >= 0; }, onRowEditSave(event) { let { newData, index } = event; this.products2[index] = newData; }, getStatusLabel(status) { switch(status) { case 'INSTOCK': return 'In Stock'; case 'LOWSTOCK': return 'Low Stock'; case 'OUTOFSTOCK': return 'Out of Stock'; default: return 'NA'; } } }, mounted() { this.productService.getProductsSmall().then(data => this.products1 = data); this.productService.getProductsSmall().then(data => this.products2 = data); this.productService.getProductsSmall().then(data => this.products3 = data); } } ")])],1)],1)],1)])},p=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[a._v("DataTable "),e("span",[a._v("InCell Edit")])]),e("p",[a._v("In cell editing provides a rapid and user friendly way to manipulate the data. The datatable provides a flexible API so that the editing behavior is implemented by the page author whether it utilizes v-model or vuex. ")])])])}],f=n(u,c,p,!1,null,"9309bd10");const w=f.exports;export{w as default};
//# sourceMappingURL=DataTableEditDemo-Br_ctE5Z.js.map
