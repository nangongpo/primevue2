import{n as r}from"./app.component-BAbvz7X_.js";import{E as o}from"./index-k4AehoWx.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";/* empty css                  *//* empty css                   */import"./vuelidate-vBRWRCrQ.js";import"./fast-diff-Fg_c4MGA.js";const n={data(){return{baseCode:{basic:'\n<Chart type="doughnut" :data="chartData" :options="chartOptions" />\n        '},baseCode2:{basic:'\nexport default {\n	data() {\n		return {\n			chartData: {\n                labels: [\'A\',\'B\',\'C\'],\n                datasets: [\n                    {\n                        data: [300, 50, 100],\n                        backgroundColor: [\n                            "#FF6384",\n                            "#36A2EB",\n                            "#FFCE56"\n                        ],\n                        hoverBackgroundColor: [\n                            "#FF6384",\n                            "#36A2EB",\n                            "#FFCE56"\n                        ]\n                    }\n                ]\n            }\n		}\n	}\n}\n        '}}}};var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Source"}},[e("DocSectionCode",{attrs:{code:t.baseCode}}),e("DocSectionCode",{attrs:{code:t.baseCode2,importCode:""}})],1)],1)],1)},i=[],c=r(n,s,i,!1,null,null);const h=c.exports,d={mounted(){o.$on("change-theme",a=>{a.dark?this.chartOptions=this.getDarkTheme():this.chartOptions=this.getLightTheme()})},beforeDestroy(){o.$off("change-theme")},data(){return{chartData:{labels:["A","B","C"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},chartOptions:this.isDarkTheme()?this.getDarkTheme():this.getLightTheme()}},methods:{isDarkTheme(){return this.$appState.darkTheme===!0},getLightTheme(){return{plugins:{legend:{labels:{color:"#495057"}}}}},getDarkTheme(){return{plugins:{legend:{labels:{color:"#ebedef"}}}}}},components:{DoughnutChartDoc:h}};var l=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card flex justify-content-center"},[e("Chart",{staticStyle:{width:"40%"},attrs:{type:"doughnut",data:t.chartData,options:t.chartOptions}})],1)]),e("DoughnutChartDoc")],1)},u=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[a._v("DoughnutChart")]),t("p",[a._v(" A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included. ")])])])}],m=r(d,l,u,!1,null,null);const T=m.exports;export{T as default};
//# sourceMappingURL=Doughnut-Cook7jdH.js.map