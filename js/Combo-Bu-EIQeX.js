import{n as o}from"./app.component-BAbvz7X_.js";import{E as r}from"./index-k4AehoWx.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";/* empty css                  *//* empty css                   */import"./vuelidate-vBRWRCrQ.js";import"./fast-diff-Fg_c4MGA.js";const s={data(){return{baseCode:{basic:'\n<Chart type="bar" :data="chartData" :options="chartOptions"/>\n        '},baseCode2:{basic:"\nexport default {\n	data() {\n		return {\n			chartData: {\n                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n                datasets: [{\n                    type: 'line',\n                    label: 'Dataset 1',\n                    borderColor: '#42A5F5',\n                    borderWidth: 2,\n                    fill: false,\n                    data: [\n                        50,\n                        25,\n                        12,\n                        48,\n                        56,\n                        76,\n                        42\n                    ]\n                }, {\n                    type: 'bar',\n                    label: 'Dataset 2',\n                    backgroundColor: '#66BB6A',\n                    data: [\n                        21,\n                        84,\n                        24,\n                        75,\n                        37,\n                        65,\n                        34\n                    ],\n                    borderColor: 'white',\n                    borderWidth: 2\n                }, {\n                    type: 'bar',\n                    label: 'Dataset 3',\n                    backgroundColor: '#FFA726',\n                    data: [\n                        41,\n                        52,\n                        24,\n                        74,\n                        23,\n                        21,\n                        32\n                    ]\n                }]\n            }\n		}\n	}\n}\n        "}}}};var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("DocSectionCode",{attrs:{code:e.baseCode}}),t("DocSectionCode",{attrs:{code:e.baseCode2,importCode:""}})],1)],1)],1)},n=[],l=o(s,i,n,!1,null,null);const c=l.exports,d={mounted(){r.$on("change-theme",a=>{a.dark?this.applyDarkTheme():this.applyLightTheme()}),this.isDarkTheme()?this.applyDarkTheme():this.applyLightTheme()},beforeDestroy(){r.$off("change-theme")},data(){return{chartData:{labels:["January","February","March","April","May","June","July"],datasets:[{type:"line",label:"Dataset 1",borderColor:"#42A5F5",borderWidth:2,fill:!1,data:[50,25,12,48,56,76,42]},{type:"bar",label:"Dataset 2",backgroundColor:"#66BB6A",data:[21,84,24,75,37,65,34],borderColor:"white",borderWidth:2},{type:"bar",label:"Dataset 3",backgroundColor:"#FFA726",data:[41,52,24,74,23,21,32]}]},chartOptions:null}},methods:{isDarkTheme(){return this.$appState.darkTheme===!0},applyLightTheme(){this.chartOptions={plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}}},applyDarkTheme(){this.chartOptions={plugins:{legend:{labels:{color:"#ebedef"}}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(255,255,255,0.2)"}},y:{ticks:{color:"#ebedef"},grid:{color:"rgba(255,255,255,0.2)"}}}}}},components:{ComboChartDoc:c}};var h=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("Chart",{attrs:{type:"bar",data:e.chartData,options:e.chartOptions}})],1)]),t("ComboChartDoc")],1)},p=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[a._v("Combo Chart")]),e("p",[a._v("Different chart types can be combined in the same graph.")])])])}],b=o(d,h,p,!1,null,null);const T=b.exports;export{T as default};
//# sourceMappingURL=Combo-Bu-EIQeX.js.map
