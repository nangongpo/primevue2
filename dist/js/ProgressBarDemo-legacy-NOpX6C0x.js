System.register(["./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var r;return{setters:[function(e){r=e.n},null,null,null],execute:function(){var t=r({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import ProgressBar from 'primevue2/progressbar'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v('ProgressBar has two modes; "determinate" (default) and "indeterminate". In determinate mode, a value between 0 and 100 is required to display the progress.')]),t("CodeHighlight",[e._v(' <ProgressBar :value="value" /> ')]),t("CodeHighlight",{attrs:{lang:"js"}},[e._v(" data() { return { value: 0 } } ")]),t("p",[e._v("Indeterminate is simplly enabled using "),t("i",[e._v("mode")]),e._v(" property.")]),t("CodeHighlight",[e._v(' <ProgressBar mode="indeterminate"/> ')]),t("h5",[e._v("Slot")]),t("p",[e._v("A custom label can be placed inside the progress bar via the default slot.")]),t("CodeHighlight",[[e._v(' <ProgressBar :value="value"> Percent Complete: {{value}}% </ProgressBar> ')]],2),t("h5",[e._v("Properties")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v("Current value of the progress.")])]),t("tr",[t("td",[e._v("mode")]),t("td",[e._v("string")]),t("td",[e._v("determinate")]),t("td",[e._v('Defines the mode of the progress, valid values are "determinate" and "indeterminate".')])]),t("tr",[t("td",[e._v("showValue")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether to display the progress bar value.")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-progressbar")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-progressbar-determinate")]),t("td",[e._v("Container element of a determinate progressbar.")])]),t("tr",[t("td",[e._v("p-progressbar-indeterminate")]),t("td",[e._v("Container element of an indeterminate progressbar.")])]),t("tr",[t("td",[e._v("p-progressbar-value")]),t("td",[e._v("Element whose width changes according to value.")])]),t("tr",[t("td",[e._v("p-progressbar-label")]),t("td",[e._v("Label element that displays the current value.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/prograssbar",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <h3>Dynamic</h3> <ProgressBar :value="value1" /> <h3>Static</h3> <ProgressBar :value="value2" :showValue="false" /> <h3>Indeterminate</h3> <ProgressBar mode="indeterminate" style="height: .5em" /> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data() { return { value1: 0, value2: 50 } }, interval: null, methods: { startProgress() { this.interval = setInterval(() => { let newValue = this.value1 + Math.floor(Math.random() * 10) + 1; if (newValue >= 100) { newValue = 100; } this.value1 = newValue; }, 2000); }, endProgress() { clearInterval(this.interval); this.interval = null; } }, mounted() { this.startProgress(); }, beforeDestroy() { this.endProgress(); } } ")])],1)],1)],1)}),[],!1,null,null).exports;e("default",r({data:function(){return{value1:0,value2:50}},interval:null,methods:{startProgress:function(){var e=this;this.interval=setInterval((function(){var t=e.value1+Math.floor(10*Math.random())+1;t>=100&&(t=100),e.value1=t}),2e3)},endProgress:function(){clearInterval(this.interval),this.interval=null}},mounted:function(){this.startProgress()},beforeDestroy:function(){this.endProgress()},components:{ProgressBarDoc:t}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Dynamic")]),t("ProgressBar",{attrs:{value:e.value1}}),t("h5",[e._v("Static")]),t("ProgressBar",{attrs:{value:e.value2,showValue:!1}}),t("h5",[e._v("Indeterminate")]),t("ProgressBar",{staticStyle:{height:".5em"},attrs:{mode:"indeterminate"}})],1)]),t("ProgressBarDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("ProgressBar")]),t("p",[e._v("ProgressBar is a process status indicator.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=ProgressBarDemo-legacy-NOpX6C0x.js.map
