System.register(["./app.component-legacy-cLUjg6K2.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(t,e){"use strict";var o;return{setters:[function(t){o=t.n},null,null,null,null],execute:function(){var e=o({name:"Documentation",data:function(){return{baseCode:{basic:"\nimport Tooltip from 'primevue2/tooltip';\n\nVue.directive('tooltip', Tooltip);\n        "},baseCode2:{basic:"\ndirectives: {\n    'tooltip': Tooltip\n}\n        "},baseCode3:{basic:'\n<InputText type="text" v-tooltip="\'Enter your username\'" />\n        '},baseCode4:{basic:'\n<InputText type="text" v-tooltip="{ value: \'Enter your username\', disabled: true }" />\n        '},positionsCode:{basic:'\n<InputText type="text" v-tooltip.right="\'Enter your username\'" />\n<InputText type="text" v-tooltip.top="\'Enter your username\'" />\n<InputText type="text" v-tooltip.bottom="\'Enter your username\'" />\n<InputText type="text" v-tooltip.top="\'Enter your username\'" />\n        '},eventsCode:{basic:'\n<InputText type="text" v-tooltip.focus="\'Enter your username\'" />\n        '},modifiersCode:{basic:'\n<InputText type="text" v-tooltip.top.focus="\'Enter your username\'" />\n        '}}}},(function(){var t=this,e=t._self._c;return e("div",[e("h5",[t._v("Getting Started")]),t._m(0),e("DocSectionCode",{attrs:{code:t.baseCode,importCode:""}}),e("p",[t._v("Tooltip can also be configured locally using the directives property of your component.")]),e("DocSectionCode",{attrs:{code:t.baseCode2,importCode:""}}),e("p",[t._v("Once the tooltip is configured, it can be attached to a target using the v- prefix.")]),e("DocSectionCode",{attrs:{code:t.baseCode3}}),e("p",[t._v("Also, more than one value can be used.")]),e("DocSectionCode",{attrs:{code:t.baseCode4}}),e("h5",[t._v("Positions")]),e("p",[t._v('There are four choices to position the tooltip, default value is "right" and alternatives are "top", "bottom", "left". Position is specified using a modifier.')]),e("DocSectionCode",{attrs:{code:t.positionsCode}}),e("h5",[t._v("Events")]),e("p",[t._v("Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and blur to hide.")]),e("DocSectionCode",{attrs:{code:t.eventsCode}}),e("h5",[t._v("Modifiers")]),e("p",[t._v("As seen in positions and event sections, tooltip is configured via modifiers that can be chained. Tooltip below, gets displayed at the top of the input at focus event. ")]),e("DocSectionCode",{attrs:{code:t.modifiersCode}}),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),t._m(1),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1)}),[function(){var t=this,e=t._self._c;return e("p",[t._v("Tooltip is a directive that needs to be imported and configured with a name of your choice. Global configuration is done with the "),e("i",[t._v("Vue.directive")]),t._v(" function.")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-tooltip")]),e("td",[t._v("Input element.")])]),e("tr",[e("td",[t._v("p-tooltip-arrow")]),e("td",[t._v("Arrow of the tooltip.")])]),e("tr",[e("td",[t._v("p-tooltip-text")]),e("td",[t._v("Text of the tooltip")])])])])])}],!1,null,null).exports,n=o({name:"SourceCode",data:function(){return{sourceCode1:{basic:'\n<h3>Positions</h3>\n<div class="grid p-fluid">\n    <div class="col-12 md:col-3">\n        <InputText type="text" placeholder="Right" v-tooltip.right="\'Enter your username\'" />\n    </div>\n    <div class="col-12 md:col-3">\n        <InputText type="text" placeholder="Top" v-tooltip.top="\'Enter your username\'" />\n    </div>\n    <div class="col-12 md:col-3">\n        <InputText type="text" placeholder="Bottom" v-tooltip.bottom="\'Enter your username\'" />\n    </div>\n    <div class="col-12 md:col-3">\n        <InputText type="text" placeholder="Left" v-tooltip.left="\'Enter your username\'" />\n    </div>\n</div>\n\n<h3>Focus and Blur</h3>\n<InputText type="text" placeholder="Focus" v-tooltip.bottom.focus="\'Enter your username\'" />\n\n<h3>Button</h3>\n<Button type="button" label="Save" icon="pi pi-check" v-tooltip="\'Click to proceed\'" />\n        '},sourceCode2:{basic:"\nexport default {}\n        "}}}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("DocSectionCode",{attrs:{code:t.sourceCode1}}),e("DocSectionCode",{attrs:{code:t.sourceCode2,importCode:""}})],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/tooltip",target:"_blank",rel:"noopener noreferrer"}},[t("span",[this._v("View on GitHub")])])}],!1,null,null).exports,i=o({components:{Documentation:e,SourceCode:n}},(function(){var t=this._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("Documentation")],1),t("TabPanel",{attrs:{header:"Source"}},[t("SourceCode")],1)],1)],1)}),[],!1,null,null).exports;t("default",o({components:{TooltipDoc:i}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Positions")]),e("div",{staticClass:"grid p-fluid"},[e("div",{staticClass:"col-12 md:col-3"},[e("InputText",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:"Enter your username",expression:"'Enter your username'",modifiers:{right:!0}}],attrs:{type:"text",placeholder:"Right"}})],1),e("div",{staticClass:"col-12 md:col-3"},[e("InputText",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:"Enter your username",expression:"'Enter your username'",modifiers:{top:!0}}],attrs:{type:"text",placeholder:"Top"}})],1),e("div",{staticClass:"col-12 md:col-3"},[e("InputText",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"Enter your username",expression:"'Enter your username'",modifiers:{bottom:!0}}],attrs:{type:"text",placeholder:"Bottom"}})],1),e("div",{staticClass:"col-12 md:col-3"},[e("InputText",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"Enter your username",expression:"'Enter your username'",modifiers:{left:!0}}],attrs:{type:"text",placeholder:"Left"}})],1)]),e("h5",[t._v("Focus and Blur")]),e("InputText",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom.focus",value:"Enter your username",expression:"'Enter your username'",modifiers:{bottom:!0,focus:!0}}],attrs:{type:"text",placeholder:"Focus"}}),e("h5",[t._v("Button")]),e("Button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Click to proceed",expression:"'Click to proceed'"}],attrs:{type:"button",label:"Save",icon:"pi pi-check"}})],1)]),e("TooltipDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("Tooltip")]),e("p",[t._v("Tooltip directive provides advisory information for a component.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=TooltipDemo-legacy-Bc6zM3WN.js.map