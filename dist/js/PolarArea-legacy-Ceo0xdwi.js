System.register(["./app.component-legacy-7lS-4wLG.js","./index-legacy-amQum4aa.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js","./primeflex-legacy-BYbDUxVK.js","./primeicons-legacy-CF71Ovbl.js","./vuelidate-legacy-BkdACyzP.js","./fast-diff-legacy-2zhWRgQ3.js"],(function(t,e){"use strict";var n,a;return{setters:[function(t){n=t.n},function(t){a=t.E},null,null,null,null,null,null,null,null],execute:function(){var e=document.createElement("style");e.textContent="/*$vite$:1*/",document.head.appendChild(e);var r=n({data:function(){return{baseCode:{basic:'\n<Chart type="polarArea" :data="chartData" :options="chartOptions" />\n        '},baseCode2:{basic:'\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tchartData: {\n\t\t\t\tdatasets: [{\n\t\t\t\t\tdata: [\n\t\t\t\t\t\t11,\n\t\t\t\t\t\t16,\n\t\t\t\t\t\t7,\n\t\t\t\t\t\t3,\n\t\t\t\t\t\t14\n\t\t\t\t\t],\n\t\t\t\t\tbackgroundColor: [\n\t\t\t\t\t\t"#42A5F5",\n                        "#66BB6A",\n                        "#FFA726",\n                        "#26C6DA",\n                        "#7E57C2"\n\t\t\t\t\t],\n\t\t\t\t\tlabel: \'My dataset\'\n\t\t\t\t}],\n\t\t\t\tlabels: [\n\t\t\t\t\t"Red",\n\t\t\t\t\t"Green",\n\t\t\t\t\t"Yellow",\n\t\t\t\t\t"Grey",\n\t\t\t\t\t"Blue"\n\t\t\t\t]\n\t\t\t},\n\t\t\tchartOptions: {\n\t\t\t\tplugins: {\n                    legend: {\n                        labels: {\n                            color: \'#495057\'\n                        }\n                    }\n                },\n                scales: {\n                    r: {\n                        grid: {\n                            color: \'#ebedef\'\n                        }\n                    }\n                }\n\t\t\t}\n\t\t}\n\t}\n}\n        '}}}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Source"}},[e("DocSectionCode",{attrs:{code:t.baseCode}}),e("DocSectionCode",{attrs:{code:t.baseCode2,importCode:""}})],1)],1)],1)}),[],!1,null,null).exports;t("default",n({mounted:function(){var t=this;a.$on("change-theme",(function(e){e.dark?t.chartOptions=t.getDarkTheme():t.chartOptions=t.getLightTheme()}))},beforeDestroy:function(){a.$off("change-theme")},data:function(){return{chartData:{datasets:[{data:[11,16,7,3,14],backgroundColor:["#42A5F5","#66BB6A","#FFA726","#26C6DA","#7E57C2"],label:"My dataset"}],labels:["Red","Green","Yellow","Grey","Blue"]},chartOptions:this.isDarkTheme()?this.getDarkTheme():this.getLightTheme()}},methods:{isDarkTheme:function(){return!0===this.$appState.darkTheme},getLightTheme:function(){return{plugins:{legend:{labels:{color:"#495057"}}},scales:{r:{grid:{color:"#ebedef"}}}}},getDarkTheme:function(){return{plugins:{legend:{labels:{color:"#ebedef"}}},scales:{r:{grid:{color:"rgba(255,255,255,0.2)"}}}}}},components:{PolarAreaChartDoc:r}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card flex justify-content-center"},[e("Chart",{staticStyle:{width:"40%"},attrs:{type:"polarArea",data:t.chartData,options:t.chartOptions}})],1)]),e("PolarAreaChartDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("Polar Area Chart")]),e("p",[t._v(" Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value. ")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=PolarArea-legacy-Ceo0xdwi.js.map
