import{n as a}from"./app.component-XqgfEEHA.js";import{E as e}from"./index-BORTAtDI.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";/* empty css                  *//* empty css                   */import"./vuelidate-DNEXVVsz.js";import"./fast-diff-Fg_c4MGA.js";const n={};var i=function(){var r=this,o=r._self._c;return o("div",{staticClass:"content-section documentation"},[o("TabView",[o("TabPanel",{attrs:{header:"Source"}},[o("CodeHighlight",[[r._v(' <Chart type="radar" :data="chartData" :options="chartOptions" /> ')]],2),o("CodeHighlight",{attrs:{lang:"javascript"}},[r._v(" export default { data() { return { chartData: { labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'], datasets: [ { label: 'My First dataset', backgroundColor: 'rgba(179,181,198,0.2)', borderColor: 'rgba(179,181,198,1)', pointBackgroundColor: 'rgba(179,181,198,1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(179,181,198,1)', data: [65, 59, 90, 81, 56, 55, 40] }, { label: 'My Second dataset', backgroundColor: 'rgba(255,99,132,0.2)', borderColor: 'rgba(255,99,132,1)', pointBackgroundColor: 'rgba(255,99,132,1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(255,99,132,1)', data: [28, 48, 40, 19, 96, 27, 100] } ] }, chartOptions: { plugins: { legend: { labels: { color: '#495057' } } }, scales: { r: { pointLabels: { color: '#495057', }, grid: { color: '#ebedef', }, angleLines: { color: '#ebedef' } } } } } } } ")])],1)],1)],1)},s=[],l=a(n,i,s,!1,null,null);const c=l.exports,d={mounted(){e.$on("change-theme",t=>{t.dark?this.chartOptions=this.getDarkTheme():this.chartOptions=this.getLightTheme()})},beforeDestroy(){e.$off("change-theme")},data(){return{chartData:{labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},chartOptions:this.isDarkTheme()?this.getDarkTheme():this.getLightTheme()}},methods:{isDarkTheme(){return this.$appState.darkTheme===!0},getLightTheme(){return{plugins:{legend:{labels:{color:"#495057"}}},scales:{r:{pointLabels:{color:"#495057"},grid:{color:"#ebedef"},angleLines:{color:"#ebedef"}}}}},getDarkTheme(){return{plugins:{legend:{labels:{color:"#ebedef"}}},scales:{r:{pointLabels:{color:"#ebedef"},grid:{color:"rgba(255,255,255,0.2)"},angleLines:{color:"rgba(255,255,255,0.2)"}}}}}},components:{RadarChartDoc:c}};var g=function(){var r=this,o=r._self._c;return o("div",[r._m(0),o("div",{staticClass:"content-section implementation"},[o("div",{staticClass:"card flex justify-content-center"},[o("Chart",{staticStyle:{width:"40%"},attrs:{type:"radar",data:r.chartData,options:r.chartOptions}})],1)]),o("RadarChartDoc")],1)},f=[function(){var t=this,r=t._self._c;return r("div",{staticClass:"content-section introduction"},[r("div",{staticClass:"feature-intro"},[r("h1",[t._v("Radar Chart")]),r("p",[t._v("A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.")])])])}],p=a(d,g,f,!1,null,null);const B=p.exports;export{B as default};
//# sourceMappingURL=RadarChartDemo-CfyMb2MF.js.map
