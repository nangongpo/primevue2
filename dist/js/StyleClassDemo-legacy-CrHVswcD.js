System.register(["./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var s;return{setters:[function(e){s=e.n},null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".box[data-v-56270079]{background-color:var(--green-500);color:#fff;width:100px;height:100px;display:flex;align-items:center;justify-content:center;padding-top:1rem;padding-bottom:1rem;border-radius:4px;margin-top:1rem;font-weight:700;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 1px 3px rgba(0,0,0,.12)}@keyframes my-fadein-56270079{0%{opacity:0}to{opacity:1}}@keyframes my-fadeout-56270079{0%{opacity:1}to{opacity:0}}.my-fadein[data-v-56270079]{animation:my-fadein-56270079 .15s linear}.my-fadeout[data-v-56270079]{animation:my-fadeout-56270079 .15s linear}\n",document.head.appendChild(t);var a=s({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import StyleClass from 'primevue2/StyleClass'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("StyleClass has two modes, "),t("i",[e._v("toggleClass")]),e._v(" to simply add-remove a class and enter/leave animations.")]),t("p",[t("b",[e._v("ToggleClass")])]),t("CodeHighlight",[e._v(' <Button label="Toggle p-disabled" v-styleclass="{ selector: \'@next\', toggleClass: \'p-disabled\' }" /> <InputText class="block mt-3" /> ')]),t("p",[t("b",[e._v("Enter/Leave Animation")])]),t("CodeHighlight",[e._v(" <Button label=\"Show\" class=\"mr-2\" v-styleclass=\"{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }\" /> <Button label=\"Hide\" v-styleclass=\"{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }\" /> <div class=\"box hidden\">Content</div> ")]),t("h5",[e._v("Target")]),t("p",[e._v("Target element is defined with the "),t("i",[e._v("v-styleclass")]),e._v(" attribute that can either be a valid css query or one of the keywords below.")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("@next")]),t("td",[e._v("Next element.")])]),t("tr",[t("td",[e._v("@prev")]),t("td",[e._v("Previous element.")])]),t("tr",[t("td",[e._v("@parent")]),t("td",[e._v("Parent element.")])]),t("tr",[t("td",[e._v("@grandparent")]),t("td",[e._v("Parent element of the parent.")])])])])]),t("h5",[e._v("Properties")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("selector")]),t("td",[e._v("string")]),t("td",[e._v("selector")]),t("td",[e._v("Selector to define the target element.")])]),t("tr",[t("td",[e._v("enterClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Class to add when item begins to get displayed.")])]),t("tr",[t("td",[e._v("enterActiveClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Class to add during enter animation.")])]),t("tr",[t("td",[e._v("enterToClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Class to add when enter animation is completed.")])]),t("tr",[t("td",[e._v("leaveClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Class to add when item begins to get hidden.")])]),t("tr",[t("td",[e._v("leaveActiveClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Class to add during leave animation")])]),t("tr",[t("td",[e._v("leaveToClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Class to add when leave animation is completed.")])]),t("tr",[t("td",[e._v("hideOnOutsideClick")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Whether to trigger leave animation when outside of the element is clicked.")])]),t("tr",[t("td",[e._v("toggleClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Adds or removes a class when no enter-leave animation is required.")])])])])]),t("h5",[e._v("Events")]),t("p",[e._v("Directive has no events.")]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/styleclass",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <div class="card"> <h5>Toggle Class</h5> <Button label="Toggle p-disabled" v-styleclass="{ selector: \'@next\', toggleClass: \'p-disabled\' }" /> <InputText class="block mt-3" /> <h5>Animations</h5> <Button label="Show" class="mr-2" v-styleclass="{ selector: \'.box\', enterClass: \'hidden\', enterActiveClass: \'my-fadein\' }" /> <Button label="Hide" v-styleclass="{ selector: \'.box\', leaveActiveClass: \'my-fadeout\', leaveToClass: \'hidden\' }" /> <div class="box hidden">Content</div> </div> ')]],2)],1)],1)],1)}),[],!1,null,null).exports;e("default",s({components:{StyleClassDoc:a}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Toggle Class")]),t("Button",{directives:[{name:"styleclass",rawName:"v-styleclass",value:{selector:"@next",toggleClass:"p-disabled"},expression:"{ selector: '@next', toggleClass: 'p-disabled' }"}],attrs:{label:"Toggle p-disabled"}}),t("InputText",{staticClass:"block mt-3"}),t("h5",[e._v("Animations")]),t("Button",{directives:[{name:"styleclass",rawName:"v-styleclass",value:{selector:".box",enterClass:"hidden",enterActiveClass:"my-fadein"},expression:"{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }"}],staticClass:"mr-2",attrs:{label:"Show"}}),t("Button",{directives:[{name:"styleclass",rawName:"v-styleclass",value:{selector:".box",leaveActiveClass:"my-fadeout",leaveToClass:"hidden"},expression:"{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }"}],attrs:{label:"Hide"}}),t("div",{staticClass:"box hidden"},[e._v("Content")])],1)]),t("StyleClassDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("StyleClass")]),t("p",[e._v("StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.")])])])}],!1,null,"56270079").exports)}}}));
//# sourceMappingURL=StyleClassDemo-legacy-CrHVswcD.js.map
