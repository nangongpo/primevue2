import{n as s}from"./app.component-XqgfEEHA.js";import{E as r}from"./index-BORTAtDI.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";/* empty css                  *//* empty css                   */import"./vuelidate-DNEXVVsz.js";import"./fast-diff-Fg_c4MGA.js";const o={};var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("CodeHighlight",[[e._v(' <Chart type="polarArea" :data="chartData" :options="chartOptions" /> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(' export default { data() { return { chartData: { datasets: [{ data: [ 11, 16, 7, 3, 14 ], backgroundColor: [ "#42A5F5", "#66BB6A", "#FFA726", "#26C6DA", "#7E57C2" ], label: \'My dataset\' }], labels: [ "Red", "Green", "Yellow", "Grey", "Blue" ] }, chartOptions: { plugins: { legend: { labels: { color: \'#495057\' } } }, scales: { r: { grid: { color: \'#ebedef\' } } } } } } } ')])],1)],1)],1)},i=[],l=s(o,n,i,!1,null,null);const c=l.exports,h={mounted(){r.$on("change-theme",a=>{a.dark?this.chartOptions=this.getDarkTheme():this.chartOptions=this.getLightTheme()})},beforeDestroy(){r.$off("change-theme")},data(){return{chartData:{datasets:[{data:[11,16,7,3,14],backgroundColor:["#42A5F5","#66BB6A","#FFA726","#26C6DA","#7E57C2"],label:"My dataset"}],labels:["Red","Green","Yellow","Grey","Blue"]},chartOptions:this.isDarkTheme()?this.getDarkTheme():this.getLightTheme()}},methods:{isDarkTheme(){return this.$appState.darkTheme===!0},getLightTheme(){return{plugins:{legend:{labels:{color:"#495057"}}},scales:{r:{grid:{color:"#ebedef"}}}}},getDarkTheme(){return{plugins:{legend:{labels:{color:"#ebedef"}}},scales:{r:{grid:{color:"rgba(255,255,255,0.2)"}}}}}},components:{PolarAreaChartDoc:c}};var d=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card flex justify-content-center"},[t("Chart",{staticStyle:{width:"40%"},attrs:{type:"polarArea",data:e.chartData,options:e.chartOptions}})],1)]),t("PolarAreaChartDoc")],1)},m=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[a._v("Polar Area Chart")]),e("p",[a._v("Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.")])])])}],p=s(h,d,m,!1,null,null);const T=p.exports;export{T as default};
//# sourceMappingURL=PolarAreaChartDemo-CDibclgP.js.map
