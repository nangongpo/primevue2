System.register(["./app.component-legacy-cLUjg6K2.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(t,e){"use strict";var r;return{setters:[function(t){r=t.n},null,null,null,null],execute:function(){var e=r({name:"Documentation",data:function(){return{importCode:{basic:"\nimport ProgressBar from 'primevue2/progressbar';\n        "},baseCode:{basic:'\n<ProgressBar :value="value" />\n        '},baseCode2:{basic:"\ndata() {\n\treturn {\n\t\tvalue: 0\n\t}\n}\n\n        "},baseCode3:{basic:'\n<ProgressBar mode="indeterminate"/>\n        '},slotCode:{basic:'\n<ProgressBar :value="value">\n    Percent Complete: {{value}}%\n</ProgressBar>\n        '}}}},(function(){var t=this,e=t._self._c;return e("div",[e("h5",[t._v("Import")]),e("DocSectionCode",{attrs:{code:t.importCode,importCode:""}}),e("h5",[t._v("Getting Started")]),e("p",[t._v(' ProgressBar has two modes; "determinate" (default) and "indeterminate". In determinate mode, a value between 0 and 100 is required to display the progress. ')]),e("DocSectionCode",{attrs:{code:t.baseCode}}),e("DocSectionCode",{attrs:{code:t.baseCode2,importCode:""}}),t._m(0),e("DocSectionCode",{attrs:{code:t.baseCode3}}),e("h5",[t._v("Slot")]),e("p",[t._v("A custom label can be placed inside the progress bar via the default slot.")]),e("DocSectionCode",{attrs:{code:t.slotCode}}),e("h5",[t._v("Properties")]),t._m(1),e("h5",[t._v("Styling")]),e("p",[t._v(" Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page. ")],1),t._m(2),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1)}),[function(){var t=this,e=t._self._c;return e("p",[t._v("Indeterminate is simplly enabled using "),e("i",[t._v("mode")]),t._v(" property.")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v("Current value of the progress.")])]),e("tr",[e("td",[t._v("mode")]),e("td",[t._v("string")]),e("td",[t._v("determinate")]),e("td",[t._v('Defines the mode of the progress, valid values are "determinate" and "indeterminate".')])]),e("tr",[e("td",[t._v("showValue")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Whether to display the progress bar value.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-progressbar")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-progressbar-determinate")]),e("td",[t._v("Container element of a determinate progressbar.")])]),e("tr",[e("td",[t._v("p-progressbar-indeterminate")]),e("td",[t._v("Container element of an indeterminate progressbar.")])]),e("tr",[e("td",[t._v("p-progressbar-value")]),e("td",[t._v("Element whose width changes according to value.")])]),e("tr",[e("td",[t._v("p-progressbar-label")]),e("td",[t._v("Label element that displays the current value.")])])])])])}],!1,null,null).exports,n=r({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<h3>Dynamic</h3>\n<ProgressBar :value="value1" />\n\n<h3>Static</h3>\n<ProgressBar :value="value2" :showValue="false" />\n\n<h3>Indeterminate</h3>\n<ProgressBar mode="indeterminate" style="height: .5em" />\n        '},sourceCode2:{basic:"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tvalue1: 0,\n\t\t\tvalue2: 50\n\t\t}\n\t},\n\tinterval: null,\n\tmethods: {\n\t\tstartProgress() {\n\t\t\tthis.interval = setInterval(() => {\n\t\t\t\tlet newValue = this.value1 + Math.floor(Math.random() * 10) + 1;\n\t\t\t\tif (newValue >= 100) {\n\t\t\t\t\tnewValue = 100;\n\t\t\t\t}\n\t\t\t\tthis.value1 = newValue;\n\t\t\t}, 2000);\n\t\t},\n\t\tendProgress() {\n\t\t\tclearInterval(this.interval);\n\t\t\tthis.interval = null;\n\t\t}\n\t},\n\tmounted() {\n\t\tthis.startProgress();\n\t},\n\tbeforeDestroy() {\n\t\tthis.endProgress();\n\t}\n}\n        "}}}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("DocSectionCode",{attrs:{code:t.sourceCode1}}),e("DocSectionCode",{attrs:{code:t.sourceCode2,importCode:""}})],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/prograssbar",target:"_blank",rel:"noopener noreferrer"}},[t("span",[this._v("View on GitHub")])])}],!1,null,null).exports,a=r({components:{Documentation:e,SourceCode:n}},(function(){var t=this._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("Documentation")],1),t("TabPanel",{attrs:{header:"Source"}},[t("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;t("default",r({data:function(){return{value1:0,value2:50}},interval:null,methods:{startProgress:function(){var t=this;this.interval=setInterval((function(){var e=t.value1+Math.floor(10*Math.random())+1;e>=100&&(e=100),t.value1=e}),2e3)},endProgress:function(){clearInterval(this.interval),this.interval=null}},mounted:function(){this.startProgress()},beforeDestroy:function(){this.endProgress()},components:{ProgressBarDoc:a}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Dynamic")]),e("ProgressBar",{attrs:{value:t.value1}}),e("h5",[t._v("Static")]),e("ProgressBar",{attrs:{value:t.value2,showValue:!1}}),e("h5",[t._v("Indeterminate")]),e("ProgressBar",{staticStyle:{height:"0.5em"},attrs:{mode:"indeterminate"}})],1)]),e("ProgressBarDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("ProgressBar")]),e("p",[t._v("ProgressBar is a process status indicator.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=index-legacy-BF8QRXgg.js.map
