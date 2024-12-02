import{n as o}from"./app.component-BAbvz7X_.js";import{P as r}from"./ProductService-B_eIBIF9.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const n={data(){return{baseCode:{basic:'\n<h3>Fit Mode</h3>\n<DataTable :value="products" :resizableColumns="true" columnResizeMode="fit" showGridlines responsiveLayout="scroll">\n    <Column field="code" header="Code"></Column>\n    <Column field="name" header="Name"></Column>\n    <Column field="category" header="Category"></Column>\n    <Column field="quantity" header="Quantity"></Column>\n</DataTable>\n\n<h3>Expand Mode</h3>\n<DataTable :value="products" :resizableColumns="true" columnResizeMode="expand" showGridlines responsiveLayout="scroll">\n    <Column field="code" header="Code"></Column>\n    <Column field="name" header="Name"></Column>\n    <Column field="category" header="Category"></Column>\n    <Column field="quantity" header="Quantity"></Column>\n</DataTable>\n        '},baseCode2:{basic:"\nimport ProductService from '../../service/ProductService';\n\nexport default {\n    data() {\n        return {\n            products: null\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data);\n    }\n}\n        "}}}};var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Source"}},[e("DocSectionCode",{attrs:{code:t.baseCode}}),e("DocSectionCode",{attrs:{code:t.baseCode2,importCode:""}})],1)],1)],1)},d=[],i=o(n,s,d,!1,null,null);const l=i.exports,c={components:{DataTableColResizeDoc:l},data(){return{products:null}},productService:null,created(){this.productService=new r},mounted(){this.productService.getProductsSmall().then(a=>this.products=a)}};var u=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Fit Mode")]),e("DataTable",{attrs:{value:t.products,resizableColumns:!0,columnResizeMode:"fit",showGridlines:"",responsiveLayout:"scroll"}},[e("Column",{attrs:{field:"code",header:"Code"}}),e("Column",{attrs:{field:"name",header:"Name"}}),e("Column",{attrs:{field:"category",header:"Category"}}),e("Column",{attrs:{field:"quantity",header:"Quantity"}})],1)],1),e("div",{staticClass:"card"},[e("h5",[t._v("Expand Mode")]),e("DataTable",{attrs:{value:t.products,resizableColumns:!0,columnResizeMode:"expand",showGridlines:"",responsiveLayout:"scroll"}},[e("Column",{attrs:{field:"code",header:"Code"}}),e("Column",{attrs:{field:"name",header:"Name"}}),e("Column",{attrs:{field:"category",header:"Category"}}),e("Column",{attrs:{field:"quantity",header:"Quantity"}})],1)],1)]),e("DataTableColResizeDoc")],1)},m=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[a._v("DataTable "),t("span",[a._v("Column Resize")])]),t("p",[a._v(' Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized. In "expand" mode, table width also changes along with the column width. ')])])])}],C=o(c,u,m,!1,null,null);const y=C.exports;export{y as default};
//# sourceMappingURL=ColResize-DoaBPL5i.js.map