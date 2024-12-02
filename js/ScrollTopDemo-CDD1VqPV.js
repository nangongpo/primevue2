import{n as i}from"./app.component-BAbvz7X_.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.fullcalendar-DqAsc8Hg.js";import"./preact-CNwUjBXN.js";import"./app.core-fp3qH1H1.js";const s={name:"Documentation",data(){return{importCode:{basic:"\nimport ScrollTop from 'primevue2/scrolltop';\n        "},baseCode:{basic:"\n<ScrollTop />\n        "},thresholdCode:{basic:'\n<ScrollTop :threshold="200" />\n        '},targetElementCode:{basic:'\n<div style="height: 400px; overflow: auto">\n	Content that overflows to container\n	<ScrollTop />\n</div>\n        '}}}};var r=function(){var t=this,o=t._self._c;return o("div",[o("h5",[t._v("Import")]),o("DocSectionCode",{attrs:{code:t.importCode,importCode:""}}),o("h5",[t._v("Getting Started")]),o("p",[t._v("Without any configuration, ScrollTop listens window scroll.")]),o("DocSectionCode",{attrs:{code:t.baseCode}}),o("h5",[t._v("Threshold")]),t._m(0),o("DocSectionCode",{attrs:{code:t.thresholdCode}}),o("h5",[t._v("Target Element")]),t._m(1),o("DocSectionCode",{attrs:{code:t.targetElementCode}}),o("h5",[t._v("Properties")]),o("p",[t._v(" Any property as style and class are passed to the main container element. Following are the additional properties to configure the component. ")]),t._m(2),o("h5",[t._v("Styling")]),o("p",[t._v(" Following is the list of structural style classes, for theming classes visit "),o("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page. ")],1),t._m(3),o("h5",[t._v("Dependencies")]),o("p",[t._v("None.")])],1)},a=[function(){var e=this,t=e._self._c;return t("p",[e._v(" When the vertical scroll position reaches a certain value, ScrollTop gets displayed. This value is defined with the "),t("i",[e._v("threshold")]),e._v(" property that defaults to 400. ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" ScrollTop can also be assigned to its parent element by setting "),t("i",[e._v("target")]),e._v(' as "parent". ')])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("target")]),t("td",[e._v("string")]),t("td",[e._v("window")]),t("td",[e._v(' Target of the ScrollTop, valid values are "window" and "parent". ')])]),t("tr",[t("td",[e._v("threshold")]),t("td",[e._v("number")]),t("td",[e._v("400")]),t("td",[e._v(" Defines the threshold value of the vertical scroll position of the target to toggle the visibility. ")])]),t("tr",[t("td",[e._v("icon")]),t("td",[e._v("string")]),t("td",[e._v("pi pi-chevron-up")]),t("td",[e._v("Icon to display.")])]),t("tr",[t("td",[e._v("behavior")]),t("td",[e._v("string")]),t("td",[e._v("smooth")]),t("td",[e._v(' Defines the scrolling behavi, "smooth" adds an animation and "auto" scrolls with a jump. ')])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-scrolltop")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-scrolltop-sticky")]),t("td",[e._v("Container element when attached to its parent.")])])])])])}],n=i(s,r,a,!1,null,null);const c=n.exports,l={name:"SourceCode",data(){return{sourceCode1:{basic:'\n<h5>Window</h5>\n<p>Scroll down the page to display the ScrollTo component.</p>\n<ScrollTop />\n\n<h5>Element</h5>\n<ScrollPanel style="width: 250px; height: 200px">\n	<p>\n		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n		Vitae et leo duis ut diam.\n		Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.\n		Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.\n		Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.\n		Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.\n		Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.\n		Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.\n		Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.\n		Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.\n		Mattis aliquam faucibus purus in massa tempor nec.\n	</p>\n	<ScrollTop target="parent" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" />\n</ScrollPanel>\n        '},sourceCode2:{basic:"\n:deep(.custom-scrolltop) {\n    width: 2rem;\n    height: 2rem;\n    background-color: var(--primary-color);\n\n	&:hover {\n		background-color: var(--primary-color);\n	}\n\n    .p-scrolltop-icon {\n        font-size: 1rem;\n        color: var(--primary-color-text);\n    }\n}\n        "}}}};var u=function(){var t=this,o=t._self._c;return o("div",[t._m(0),o("DocSectionCode",{attrs:{code:t.sourceCode1}}),o("DocSectionCode",{attrs:{code:t.sourceCode2,importStyle:""}})],1)},d=[function(){var e=this,t=e._self._c;return t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/scrolltop",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])])}],m=i(l,u,d,!1,null,null);const p=m.exports,_={components:{Documentation:c,SourceCode:p}};var v=function(){var t=this,o=t._self._c;return o("div",{staticClass:"content-section documentation"},[o("TabView",[o("TabPanel",{attrs:{header:"Documentation"}},[o("Documentation")],1),o("TabPanel",{attrs:{header:"Source"}},[o("SourceCode")],1)],1)],1)},h=[],g=i(_,v,h,!1,null,null);const f=g.exports,b={components:{ScrollTopDoc:f}};var S=function(){var t=this,o=t._self._c;return o("div",[t._m(0),o("div",{staticClass:"content-section implementation"},[o("div",{staticClass:"card"},[o("h5",[t._v("Window")]),o("p",[t._v("Scroll down the page to display the ScrollTop component.")]),o("ScrollTop"),o("h5",[t._v("Element")]),o("ScrollPanel",{staticStyle:{width:"250px",height:"200px"}},[o("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ")]),o("ScrollTop",{staticClass:"custom-scrolltop",attrs:{target:"parent",threshold:100,icon:"pi pi-arrow-up"}})],1)],1)]),o("ScrollTopDoc")],1)},C=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("ScrollTop")]),t("p",[e._v(" ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly. ")])])])}],T=i(b,S,C,!1,null,"0748e246");const $=T.exports;export{$ as default};
//# sourceMappingURL=ScrollTopDemo-CDD1VqPV.js.map