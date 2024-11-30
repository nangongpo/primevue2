System.register(["./app.component-legacy-7lS-4wLG.js","./ProductService-legacy-Ctw4T0RP.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(e,t){"use strict";var n,a;return{setters:[function(e){n=e.n},function(e){a=e.P},null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent="/*$vite$:1*/",document.head.appendChild(t);var r=n({data:function(){return{baseCode:{basic:'\n<DataTable :value="products" stripedRows responsiveLayout="scroll">\n    <Column field="code" header="Code"></Column>\n    <Column field="name" header="Name"></Column>\n    <Column field="category" header="Category"></Column>\n    <Column field="quantity" header="Quantity"></Column>\n</DataTable>\n        '},baseCode2:{basic:"\nimport ProductService from '../../service/ProductService';\n\nexport default {\n    data() {\n        return {\n            products: null\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data);\n    }\n}\n        "}}}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("DocSectionCode",{attrs:{code:e.baseCode}}),t("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}})],1)],1)],1)}),[],!1,null,null).exports;e("default",n({components:{DataTableStripedDoc:r},data:function(){return{products:null}},productService:null,created:function(){this.productService=new a},mounted:function(){var e=this;this.productService.getProductsSmall().then((function(t){return e.products=t}))}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("DataTable",{attrs:{value:e.products,stripedRows:"",responsiveLayout:"scroll"}},[t("Column",{attrs:{field:"code",header:"Code"}}),t("Column",{attrs:{field:"name",header:"Name"}}),t("Column",{attrs:{field:"category",header:"Category"}}),t("Column",{attrs:{field:"quantity",header:"Quantity"}})],1)],1)]),t("DataTableStripedDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("DataTable "),t("span",[e._v("Striped Rows")])]),t("p",[e._v("Adding "),t("i",[e._v("stripedRows")]),e._v(" displays striped rows.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=Striped-legacy-D8ZjgyDB.js.map
