!function(){function t(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,l=function(){};return{s:l,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,n=!0,i=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return n=t.done,t},e:function(t){i=!0,s=t},f:function(){try{n||null==r.return||r.return()}finally{if(i)throw s}}}}function a(t,a){(null==a||a>t.length)&&(a=t.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=t[e];return r}System.register(["./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(a,e){"use strict";var r;return{setters:[function(t){r=t.n},null,null,null],execute:function(){a("default",r({data:function(){return{sales:null}},created:function(){this.sales=[{product:"Bamboo Watch",lastYearSale:51,thisYearSale:40,lastYearProfit:54406,thisYearProfit:43342},{product:"Black Watch",lastYearSale:83,thisYearSale:9,lastYearProfit:423132,thisYearProfit:312122},{product:"Blue Band",lastYearSale:38,thisYearSale:5,lastYearProfit:12321,thisYearProfit:8500},{product:"Blue T-Shirt",lastYearSale:49,thisYearSale:22,lastYearProfit:745232,thisYearProfit:65323},{product:"Brown Purse",lastYearSale:17,thisYearSale:79,lastYearProfit:643242,thisYearProfit:500332},{product:"Chakra Bracelet",lastYearSale:52,thisYearSale:65,lastYearProfit:421132,thisYearProfit:150005},{product:"Galaxy Earrings",lastYearSale:82,thisYearSale:12,lastYearProfit:131211,thisYearProfit:100214},{product:"Game Controller",lastYearSale:44,thisYearSale:45,lastYearProfit:66442,thisYearProfit:53322},{product:"Gaming Set",lastYearSale:90,thisYearSale:56,lastYearProfit:765442,thisYearProfit:296232},{product:"Gold Phone Case",lastYearSale:75,thisYearSale:54,lastYearProfit:21212,thisYearProfit:12533}]},methods:{formatCurrency:function(t){return t.toLocaleString("en-US",{style:"currency",currency:"USD"})}},computed:{lastYearTotal:function(){var a,e=0,r=t(this.sales);try{for(r.s();!(a=r.n()).done;){e+=a.value.lastYearProfit}}catch(o){r.e(o)}finally{r.f()}return this.formatCurrency(e)},thisYearTotal:function(){var a,e=0,r=t(this.sales);try{for(r.s();!(a=r.n()).done;){e+=a.value.thisYearProfit}}catch(o){r.e(o)}finally{r.f()}return this.formatCurrency(e)}}},(function(){var t=this,a=t._self._c;return a("div",[t._m(0),a("div",{staticClass:"content-section implementation"},[a("div",{staticClass:"card"},[a("DataTable",{attrs:{value:t.sales,responsiveLayout:"scroll"}},[a("ColumnGroup",{attrs:{type:"header"}},[a("Row",[a("Column",{attrs:{header:"Product",rowspan:3}}),a("Column",{attrs:{header:"Sale Rate",colspan:4}})],1),a("Row",[a("Column",{attrs:{header:"Sales",colspan:2}}),a("Column",{attrs:{header:"Profits",colspan:2}})],1),a("Row",[a("Column",{attrs:{header:"Last Year",sortable:!0,field:"lastYearSale"}}),a("Column",{attrs:{header:"This Year",sortable:!0,field:"thisYearSale"}}),a("Column",{attrs:{header:"Last Year",sortable:!0,field:"lastYearProfit"}}),a("Column",{attrs:{header:"This Year",sortable:!0,field:"thisYearProfit"}})],1)],1),a("Column",{attrs:{field:"product"}}),a("Column",{attrs:{field:"lastYearSale"},scopedSlots:t._u([{key:"body",fn:function(a){return[t._v(" "+t._s(a.data.lastYearSale)+"% ")]}}])}),a("Column",{attrs:{field:"thisYearSale"},scopedSlots:t._u([{key:"body",fn:function(a){return[t._v(" "+t._s(a.data.thisYearSale)+"% ")]}}])}),a("Column",{attrs:{field:"lastYearProfit"},scopedSlots:t._u([{key:"body",fn:function(a){return[t._v(" "+t._s(t.formatCurrency(a.data.lastYearProfit))+" ")]}}])}),a("Column",{attrs:{field:"thisYearProfit"},scopedSlots:t._u([{key:"body",fn:function(a){return[t._v(" "+t._s(t.formatCurrency(a.data.thisYearProfit))+" ")]}}])}),a("ColumnGroup",{attrs:{type:"footer"}},[a("Row",[a("Column",{attrs:{footer:"Totals:",colspan:3,footerStyle:{"text-align":"right"}}}),a("Column",{attrs:{footer:t.lastYearTotal}}),a("Column",{attrs:{footer:t.thisYearTotal}})],1)],1)],1)],1)]),a("div",{staticClass:"content-section documentation"},[a("TabView",[a("TabPanel",{attrs:{header:"Source"}},[a("CodeHighlight",[[t._v(' <DataTable :value="sales" responsiveLayout="scroll"> <ColumnGroup type="header"> <Row> <Column header="Product" :rowspan="3" /> <Column header="Sale Rate" :colspan="4" /> </Row> <Row> <Column header="Sales" :colspan="2" /> <Column header="Profits" :colspan="2" /> </Row> <Row> <Column header="Last Year" :sortable="true" field="lastYearSale"/> <Column header="This Year" :sortable="true" field="thisYearSale"/> <Column header="Last Year" :sortable="true" field="lastYearProfit"/> <Column header="This Year" :sortable="true" field="thisYearProfit"/> </Row> </ColumnGroup> <Column field="product" /> <Column field="lastYearSale"> <template #body="slotProps"> {{slotProps.data.lastYearSale}}% </template> </Column> <Column field="thisYearSale"> <template #body="slotProps"> {{slotProps.data.thisYearSale}}% </template> </Column> <Column field="lastYearProfit"> <template #body="slotProps"> {{formatCurrency(slotProps.data.lastYearProfit)}} </template> </Column> <Column field="thisYearProfit"> <template #body="slotProps"> {{formatCurrency(slotProps.data.thisYearProfit)}} </template> </Column> <ColumnGroup type="footer"> <Row> <Column footer="Totals:" :colspan="3" :footerStyle="{\'text-align\':\'right\'}"/> <Column :footer="lastYearTotal" /> <Column :footer="thisYearTotal" /> </Row> </ColumnGroup> </DataTable> ')]],2),a("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" export default { data() { return { sales: null } }, created() { this.sales = [ {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342}, {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122}, {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500}, {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323}, {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332}, {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005}, {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214}, {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322}, {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232}, {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533} ]; }, methods: { formatCurrency(value) { return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); } }, computed: { lastYearTotal() { let total = 0; for(let sale of this.sales) { total += sale.lastYearProfit; } return this.formatCurrency(total); }, thisYearTotal() { let total = 0; for(let sale of this.sales) { total += sale.thisYearProfit; } return this.formatCurrency(total); } } } ")])],1)],1)],1)])}),[function(){var t=this,a=t._self._c;return a("div",{staticClass:"content-section introduction"},[a("div",{staticClass:"feature-intro"},[a("h1",[t._v("DataTable "),a("span",[t._v("ColumnGroup")])]),a("p",[t._v("Columns can be grouped at header and footer using headerColumnGroup and footerColumnGroup components.")])])])}],!1,null,null).exports)}}}))}();
//# sourceMappingURL=DataTableColGroupDemo-legacy-bLWesFC4.js.map