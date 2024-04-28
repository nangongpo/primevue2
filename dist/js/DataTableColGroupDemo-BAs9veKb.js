import{n as o}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const l={data(){return{sales:null}},created(){this.sales=[{product:"Bamboo Watch",lastYearSale:51,thisYearSale:40,lastYearProfit:54406,thisYearProfit:43342},{product:"Black Watch",lastYearSale:83,thisYearSale:9,lastYearProfit:423132,thisYearProfit:312122},{product:"Blue Band",lastYearSale:38,thisYearSale:5,lastYearProfit:12321,thisYearProfit:8500},{product:"Blue T-Shirt",lastYearSale:49,thisYearSale:22,lastYearProfit:745232,thisYearProfit:65323},{product:"Brown Purse",lastYearSale:17,thisYearSale:79,lastYearProfit:643242,thisYearProfit:500332},{product:"Chakra Bracelet",lastYearSale:52,thisYearSale:65,lastYearProfit:421132,thisYearProfit:150005},{product:"Galaxy Earrings",lastYearSale:82,thisYearSale:12,lastYearProfit:131211,thisYearProfit:100214},{product:"Game Controller",lastYearSale:44,thisYearSale:45,lastYearProfit:66442,thisYearProfit:53322},{product:"Gaming Set",lastYearSale:90,thisYearSale:56,lastYearProfit:765442,thisYearProfit:296232},{product:"Gold Phone Case",lastYearSale:75,thisYearSale:54,lastYearProfit:21212,thisYearProfit:12533}]},methods:{formatCurrency(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}},computed:{lastYearTotal(){let e=0;for(let t of this.sales)e+=t.lastYearProfit;return this.formatCurrency(e)},thisYearTotal(){let e=0;for(let t of this.sales)e+=t.thisYearProfit;return this.formatCurrency(e)}}};var s=function(){var t=this,a=t._self._c;return a("div",[t._m(0),a("div",{staticClass:"content-section implementation"},[a("div",{staticClass:"card"},[a("DataTable",{attrs:{value:t.sales,responsiveLayout:"scroll"}},[a("ColumnGroup",{attrs:{type:"header"}},[a("Row",[a("Column",{attrs:{header:"Product",rowspan:3}}),a("Column",{attrs:{header:"Sale Rate",colspan:4}})],1),a("Row",[a("Column",{attrs:{header:"Sales",colspan:2}}),a("Column",{attrs:{header:"Profits",colspan:2}})],1),a("Row",[a("Column",{attrs:{header:"Last Year",sortable:!0,field:"lastYearSale"}}),a("Column",{attrs:{header:"This Year",sortable:!0,field:"thisYearSale"}}),a("Column",{attrs:{header:"Last Year",sortable:!0,field:"lastYearProfit"}}),a("Column",{attrs:{header:"This Year",sortable:!0,field:"thisYearProfit"}})],1)],1),a("Column",{attrs:{field:"product"}}),a("Column",{attrs:{field:"lastYearSale"},scopedSlots:t._u([{key:"body",fn:function(r){return[t._v(" "+t._s(r.data.lastYearSale)+"% ")]}}])}),a("Column",{attrs:{field:"thisYearSale"},scopedSlots:t._u([{key:"body",fn:function(r){return[t._v(" "+t._s(r.data.thisYearSale)+"% ")]}}])}),a("Column",{attrs:{field:"lastYearProfit"},scopedSlots:t._u([{key:"body",fn:function(r){return[t._v(" "+t._s(t.formatCurrency(r.data.lastYearProfit))+" ")]}}])}),a("Column",{attrs:{field:"thisYearProfit"},scopedSlots:t._u([{key:"body",fn:function(r){return[t._v(" "+t._s(t.formatCurrency(r.data.thisYearProfit))+" ")]}}])}),a("ColumnGroup",{attrs:{type:"footer"}},[a("Row",[a("Column",{attrs:{footer:"Totals:",colspan:3,footerStyle:{"text-align":"right"}}}),a("Column",{attrs:{footer:t.lastYearTotal}}),a("Column",{attrs:{footer:t.thisYearTotal}})],1)],1)],1)],1)]),a("div",{staticClass:"content-section documentation"},[a("TabView",[a("TabPanel",{attrs:{header:"Source"}},[a("CodeHighlight",[[t._v(' <DataTable :value="sales" responsiveLayout="scroll"> <ColumnGroup type="header"> <Row> <Column header="Product" :rowspan="3" /> <Column header="Sale Rate" :colspan="4" /> </Row> <Row> <Column header="Sales" :colspan="2" /> <Column header="Profits" :colspan="2" /> </Row> <Row> <Column header="Last Year" :sortable="true" field="lastYearSale"/> <Column header="This Year" :sortable="true" field="thisYearSale"/> <Column header="Last Year" :sortable="true" field="lastYearProfit"/> <Column header="This Year" :sortable="true" field="thisYearProfit"/> </Row> </ColumnGroup> <Column field="product" /> <Column field="lastYearSale"> <template #body="slotProps"> {{slotProps.data.lastYearSale}}% </template> </Column> <Column field="thisYearSale"> <template #body="slotProps"> {{slotProps.data.thisYearSale}}% </template> </Column> <Column field="lastYearProfit"> <template #body="slotProps"> {{formatCurrency(slotProps.data.lastYearProfit)}} </template> </Column> <Column field="thisYearProfit"> <template #body="slotProps"> {{formatCurrency(slotProps.data.thisYearProfit)}} </template> </Column> <ColumnGroup type="footer"> <Row> <Column footer="Totals:" :colspan="3" :footerStyle="{\'text-align\':\'right\'}"/> <Column :footer="lastYearTotal" /> <Column :footer="thisYearTotal" /> </Row> </ColumnGroup> </DataTable> ')]],2),a("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" export default { data() { return { sales: null } }, created() { this.sales = [ {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342}, {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122}, {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500}, {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323}, {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332}, {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005}, {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214}, {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322}, {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232}, {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533} ]; }, methods: { formatCurrency(value) { return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); } }, computed: { lastYearTotal() { let total = 0; for(let sale of this.sales) { total += sale.lastYearProfit; } return this.formatCurrency(total); }, thisYearTotal() { let total = 0; for(let sale of this.sales) { total += sale.thisYearProfit; } return this.formatCurrency(total); } } } ")])],1)],1)],1)])},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("DataTable "),t("span",[e._v("ColumnGroup")])]),t("p",[e._v("Columns can be grouped at header and footer using headerColumnGroup and footerColumnGroup components.")])])])}],n=o(l,s,i,!1,null,null);const h=n.exports;export{h as default};
//# sourceMappingURL=DataTableColGroupDemo-BAs9veKb.js.map
