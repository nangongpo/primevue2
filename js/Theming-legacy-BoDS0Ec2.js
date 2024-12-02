System.register(["./index-legacy-C6lTEGeW.js","./app.component-legacy-cLUjg6K2.js","./app.core-legacy-DJ-X2bns.js","./primeflex-legacy-BYbDUxVK.js","./primeicons-legacy-CF71Ovbl.js","./vuelidate-legacy-BKGzrtVw.js","./fast-diff-legacy-2zhWRgQ3.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js"],(function(e,t){"use strict";var a,s;return{setters:[function(e){a=e._},function(e){s=e.n},null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".designer-image[data-v-5f1f66da],.architecture-image[data-v-5f1f66da]{width:75%;margin:0 auto;display:block;margin-top:2rem;margin-bottom:2rem}@media screen and (max-width: 960px){.designer-image[data-v-5f1f66da],.architecture-image[data-v-5f1f66da]{width:100%}}\n/*$vite$:1*/",document.head.appendChild(t),e("default",s({data:function(){return{scalingCode:{basic:"\nhtml {\n    font-size: 16px;\n}\n        "},scalingCode2:{basic:'\n<InputText type="text" class="p-inputtext-sm" />\n<Button label="Button" class="p-button-lg" /> \n        '},localStylingCode:{basic:'\n<Panel header="Custom Header" class="dark-panel" /> \n        '},localStylingCode2:{basic:'\n<style lang="scss" scoped>\n:deep(.dark-panel.p-panel) {\n    .p-panel-title {\n        background: #212121;\n    }\n\n}\n</style>\n        '}}}},(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"content-section documentation"},[t("h1",[e._v("Theming")]),t("p",[e._v("Choose from a variety of themes or develop your own theme easily.")]),t("h5",[e._v("Architecture")]),t("img",{staticClass:"architecture-image",attrs:{alt:"Architecture",src:"/primevue2/jpg/architecture-BjnGof5_.jpg"}}),t("p",[e._v(" PrimeVue is a design agnostic library so unlike other UI libraries it does not enforce a certain styling such as material or bootstrap. In order to achieve this, styling has been separated into core and theme. Core resides inside PrimeVue to implement the structure of the components such as positioning whereas theme brings the colors, paddings and margins. ")]),t("h5",[e._v("Themes")]),e._m(0),t("h5",[e._v("Customization")]),e._m(1),e._m(2),t("p",[e._v(" Whether you have your own style guide or just need a custom theme, Designer API is the right tool to design and bring them to existence. ")]),e._m(3),e._m(4),t("h5",[e._v("Scaling")]),t("p",[e._v(" PrimeVue utilizes rem units to make sure the components blend in with the rest of your UI perfectly. This also enables scaling, for example changing the size of the components is easy as configuring the font size of your document. Code below sets the scale of the components based on 16px. If you reqire bigger or smaller components, just change this variable and components will scale accordingly. ")]),t("DocSectionCode",{attrs:{code:e.scalingCode}}),t("p",[e._v(" Some commonly used components such as inputs, buttons and datatable also provide per component scaling with special classes. Components with specific scaling options are documented in their own documentation. ")]),t("DocSectionCode",{attrs:{code:e.scalingCode2}}),t("h5",[e._v("Local Styling")]),t("p",[e._v(" Theming styles the components globally, in case you required to change the style of a certain component for a specific use case use the class property and override the defaults. Example below changes the background of the panel. Note that this is only for local styling, if you require to change the background color of all the panels, a custom theme is a far better choice. ")]),t("DocSectionCode",{attrs:{code:e.localStylingCode}}),t("DocSectionCode",{attrs:{code:e.localStylingCode2}}),t("h5",[e._v("Utility Classes")]),t("p",[e._v(" A couple of utility classes are provided as a solution to common requirements. ")]),e._m(5)],1)])}),[function(){var e=this,t=e._self._c;return t("p",[e._v(" PrimeVue offers various free themes and premium themes along with premium templates that provide an application layout as well. All the free themes are built with the "),t("a",{attrs:{href:"https://www.primefaces.org/designer/primevue"}},[e._v("Theme Designer")]),e._v(" and the npm package brings the CSS output of the theme whereas SCSS is kept as a premium feature in the designer. This means free themes are open source and for customization with SASS, a designer license needs to be acquired. ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" CSS of the themes share the same license as PrimeVue which is MIT, this means the generated CSS can be customized per your needs however this should be avoided if your customizations are not simple. For instance even to change a primary color, since there is no variable a find and replace should be performed various times. On the other hand, this can be achieved by changing a single variable e.g. $primaryColor. Visit the "),t("a",{attrs:{href:"https://www.primefaces.org/designer/api/primevue2/2.0.0"}},[e._v("SASS API")]),e._v(" for the documentation of available customization options. ")])},function(){var e=this,t=e._self._c;return t("p",[t("a",{attrs:{href:"https://www.primefaces.org/designer/primevue"}},[e._v("Designer")]),e._v(" is the ultimate tool to create your own PrimeVue experience powered by a SASS based theme engine with 500+ variables and a Visual Designer. PrimeVue only ships the generated CSS of "),t("b",[e._v("Material")]),e._v(", "),t("b",[e._v("Bootstrap")]),e._v(", "),t("b",[e._v("Saga")]),e._v(", "),t("b",[e._v("Vela")]),e._v(", "),t("b",[e._v("Arya")]),e._v(" and legacy themes whereas Designer provides full access to the whole SASS structure and the variables of these pre-built themes for easier customization. ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" Visit "),t("a",{attrs:{href:"https://www.primefaces.org/designer/primevue"}},[e._v("Designer API HomePage")]),e._v(" for more information and live demos. ")])},function(){var e=this._self._c;return e("a",{staticClass:"designer-image",attrs:{href:"http://www.primefaces.org/designer/primevue"}},[e("img",{staticStyle:{width:"100%"},attrs:{alt:"PrimeVue Designer",src:a}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("p-component")]),t("td",[e._v(" Applies component theming such as font-family and font-size to an element. ")])]),t("tr",[t("td",[e._v("p-disabled")]),t("td",[e._v("Applies an opacity to display as disabled.")])]),t("tr",[t("td",[e._v("p-sr-only")]),t("td",[e._v(" Element becomes visually hidden however accessibility is still available. ")])]),t("tr",[t("td",[e._v("p-reset")]),t("td",[e._v("Resets the browsers defaults.")])]),t("tr",[t("td",[e._v("p-link")]),t("td",[e._v("Renders a button as a link.")])]),t("tr",[t("td",[e._v("p-error")]),t("td",[e._v("Applies the invalid theme color to a text.")])]),t("tr",[t("td",[e._v("p-invalid")]),t("td",[e._v("Alias to p-error.")])]),t("tr",[t("td",[e._v("p-text-secondary")]),t("td",[e._v(" Applies the text color of the theme with the secondary priority. ")])])])])])}],!1,null,"5f1f66da").exports)}}}));
//# sourceMappingURL=Theming-legacy-BoDS0Ec2.js.map
