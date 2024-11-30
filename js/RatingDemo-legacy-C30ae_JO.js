System.register(["./app.component-legacy-7lS-4wLG.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(t,e){"use strict";var a;return{setters:[function(t){a=t.n},null,null,null,null],execute:function(){var e=a({name:"Documentation",data:function(){return{importCode:{basic:"\nimport Rating from 'primevue2/rating';\n        "},baseCode:{basic:'\n<Rating v-model="val" />\n        '},numberOfStarsCode:{basic:'\n<Rating v-model="val" :stars="7"/>\n        '},cancelCode:{basic:'\n<Rating v-model="val" :cancel="false" />\n        '}}}},(function(){var t=this,e=t._self._c;return e("div",[e("h5",[t._v("Import")]),e("DocSectionCode",{attrs:{code:t.importCode,importCode:""}}),e("h5",[t._v("Getting Started")]),e("p",[t._v("Two-way value binding is defined using v-model.")]),e("DocSectionCode",{attrs:{code:t.baseCode}}),e("h5",[t._v("Number of Stars")]),t._m(0),e("DocSectionCode",{attrs:{code:t.numberOfStarsCode}}),e("h5",[t._v("Cancel")]),t._m(1),e("DocSectionCode",{attrs:{code:t.cancelCode}}),e("h5",[t._v("Properties")]),e("p",[t._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),t._m(2),e("h5",[t._v("Events")]),t._m(3),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),t._m(4),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1)}),[function(){var t=this,e=t._self._c;return e("p",[t._v("Number of stars to display is defined with "),e("i",[t._v("stars")]),t._v(" property, default is 5.")])},function(){var t=this,e=t._self._c;return e("p",[t._v("A cancel icon is displayed to reset the value by default, set "),e("i",[t._v("cancel")]),t._v(" as false to remove this option.")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v("Value of the rating.")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("When present, it specifies that the element should be disabled.")])]),e("tr",[e("td",[t._v("readonly")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("When present, it specifies that component is read-only.")])]),e("tr",[e("td",[t._v("stars")]),e("td",[t._v("number")]),e("td",[t._v("5")]),e("td",[t._v("Number of stars.")])]),e("tr",[e("td",[t._v("cancel")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("When specified a cancel icon is displayed to allow clearing the value.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v("event.originalEvent: Original event "),e("br"),t._v(" event.value: Selected option value ")]),e("td",[t._v("Callback to invoke on value change.")])]),e("tr",[e("td",[t._v("input")]),e("td",[t._v("value: New value")]),e("td",[t._v("Callback to invoke on value change.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-rating")]),e("td",[t._v("Container element")])]),e("tr",[e("td",[t._v("p-rating-star")]),e("td",[t._v("Star element")])]),e("tr",[e("td",[t._v("p-rating-star-on")]),e("td",[t._v("Selected star element.")])]),e("tr",[e("td",[t._v("p-rating-cancel")]),e("td",[t._v("Cancel icon.")])])])])])}],!1,null,null).exports,n=a({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<h3>Basic {{val1}}</h3>\n<Rating v-model="val1" />\n\n<h3>Without Cancel</h3>\n<Rating v-model="val2" :cancel="false" />\n\n<h3>ReadOnly</h3>\n<Rating :value="5" :readonly="true" :stars="10" :cancel="false" />\n\n<h3>Disabled</h3>\n<Rating :value="8" :disabled="true" :stars="10" />\n        '},sourceCode2:{basic:"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tval1: null,\n\t\t\tval2: 3,\n\t\t}\n\t}\n}\n        "}}}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("DocSectionCode",{attrs:{code:t.sourceCode1}}),e("DocSectionCode",{attrs:{code:t.sourceCode2,importCode:""}})],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/rating",target:"_blank",rel:"noopener noreferrer"}},[t("span",[this._v("View on GitHub")])])}],!1,null,null).exports,o=a({components:{Documentation:e,SourceCode:n}},(function(){var t=this._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("Documentation")],1),t("TabPanel",{attrs:{header:"Source"}},[t("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;t("default",a({data:function(){return{val1:null,val2:3}},components:{RatingDoc:o}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Basic "+t._s(t.val1))]),e("Rating",{model:{value:t.val1,callback:function(e){t.val1=e},expression:"val1"}}),e("h5",[t._v("Without Cancel")]),e("Rating",{attrs:{cancel:!1},model:{value:t.val2,callback:function(e){t.val2=e},expression:"val2"}}),e("h5",[t._v("ReadOnly")]),e("Rating",{attrs:{value:5,readonly:!0,stars:10,cancel:!1}}),e("h5",[t._v("Disabled")]),e("Rating",{attrs:{value:8,disabled:!0,stars:10}})],1)]),e("RatingDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("Rating")]),e("p",[t._v("Rating component is a star based selection input.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=RatingDemo-legacy-C30ae_JO.js.map
