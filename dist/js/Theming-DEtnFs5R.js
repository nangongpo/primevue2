import{_ as i}from"./index-sOb7keHM.js";import{n as a}from"./app.component-D2FSMXVj.js";import"./app.core-Bxt8ZFo4.js";import"./prismjs-DuAifPdG.js";import"./fast-diff-Fg_c4MGA.js";/* empty css                  *//* empty css                   */import"./vuelidate-D1aTq7-B.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";const r="/primevue2/jpg/architecture-BjnGof5_.jpg",o={};var n=function(){var e=this,s=e._self._c;return s("div",[s("div",{staticClass:"content-section documentation"},[s("h1",[e._v("Theming")]),s("p",[e._v("Choose from a variety of themes or develop your own theme easily.")]),s("h5",[e._v("Architecture")]),s("img",{staticClass:"architecture-image",attrs:{alt:"Architecture",src:r}}),s("p",[e._v("PrimeVue is a design agnostic library so unlike other UI libraries it does not enforce a certain styling such as material or bootstrap. In order to achieve this, styling has been separated into core and theme. Core resides inside PrimeVue to implement the structure of the components such as positioning whereas theme brings the colors, paddings and margins.")]),s("h5",[e._v("Themes")]),e._m(0),s("h5",[e._v("Customization")]),e._m(1),e._m(2),s("p",[e._v("Whether you have your own style guide or just need a custom theme, Designer API is the right tool to design and bring them to existence.")]),e._m(3),e._m(4),s("h5",[e._v("Scaling")]),s("p",[e._v("PrimeVue utilizes rem units to make sure the components blend in with the rest of your UI perfectly. This also enables scaling, for example changing the size of the components is easy as configuring the font size of your document. Code below sets the scale of the components based on 16px. If you reqire bigger or smaller components, just change this variable and components will scale accordingly.")]),s("CodeHighlight",{attrs:{lang:"css"}},[e._v(" html { font-size: 16px; } ")]),s("p",[e._v("Some commonly used components such as inputs, buttons and datatable also provide per component scaling with special classes. Components with specific scaling options are documented in their own documentation.")]),s("CodeHighlight",[e._v(' <InputText type="text" class="p-inputtext-sm" /> <Button label="Button" class="p-button-lg" /> ')]),s("h5",[e._v("Local Styling")]),s("p",[e._v("Theming styles the components globally, in case you required to change the style of a certain component for a specific use case use the class property and override the defaults. Example below changes the background of the panel. Note that this is only for local styling, if you require to change the background color of all the panels, a custom theme is a far better choice.")]),s("CodeHighlight",[e._v(' <Panel header="Custom Header" class="dark-panel"/> ')]),s("CodeHighlight",[e._v(' <style lang="scss" scoped> :deep(.dark-panel.p-panel) { .p-panel-title { background: #212121; } } </style> ')]),s("h5",[e._v("Utility Classes")]),s("p",[e._v("A couple of utility classes are provided as a solution to common requirements.")]),e._m(5)],1)])},l=[function(){var t=this,e=t._self._c;return e("p",[t._v("PrimeVue offers various free themes and premium themes along with premium templates that provide an application layout as well. All the free themes are built with the "),e("a",{attrs:{href:"https://www.primefaces.org/designer/primevue"}},[t._v("Theme Designer")]),t._v(" and the npm package brings the CSS output of the theme whereas SCSS is kept as a premium feature in the designer. This means free themes are open source and for customization with SASS, a designer license needs to be acquired.")])},function(){var t=this,e=t._self._c;return e("p",[t._v("CSS of the themes share the same license as PrimeVue which is MIT, this means the generated CSS can be customized per your needs however this should be avoided if your customizations are not simple. For instance even to change a primary color, since there is no variable a find and replace should be performed various times. On the other hand, this can be achieved by changing a single variable e.g. $primaryColor. Visit the "),e("a",{attrs:{href:"https://www.primefaces.org/designer/api/primevue2/2.0.0"}},[t._v("SASS API")]),t._v(" for the documentation of available customization options.")])},function(){var t=this,e=t._self._c;return e("p",[e("a",{attrs:{href:"https://www.primefaces.org/designer/primevue"}},[t._v("Designer")]),t._v(" is the ultimate tool to create your own PrimeVue experience powered by a SASS based theme engine with 500+ variables and a Visual Designer. PrimeVue only ships the generated CSS of "),e("b",[t._v("Material")]),t._v(", "),e("b",[t._v("Bootstrap")]),t._v(", "),e("b",[t._v("Saga")]),t._v(", "),e("b",[t._v("Vela")]),t._v(", "),e("b",[t._v("Arya")]),t._v(" and legacy themes whereas Designer provides full access to the whole SASS structure and the variables of these pre-built themes for easier customization.")])},function(){var t=this,e=t._self._c;return e("p",[t._v("Visit "),e("a",{attrs:{href:"https://www.primefaces.org/designer/primevue"}},[t._v("Designer API HomePage")]),t._v(" for more information and live demos.")])},function(){var t=this,e=t._self._c;return e("a",{staticClass:"designer-image",attrs:{href:"http://www.primefaces.org/designer/primevue"}},[e("img",{staticStyle:{width:"100%"},attrs:{alt:"PrimeVue Designer",src:i}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("p-component")]),e("td",[t._v("Applies component theming such as font-family and font-size to an element.")])]),e("tr",[e("td",[t._v("p-disabled")]),e("td",[t._v("Applies an opacity to display as disabled.")])]),e("tr",[e("td",[t._v("p-sr-only")]),e("td",[t._v("Element becomes visually hidden however accessibility is still available.")])]),e("tr",[e("td",[t._v("p-reset")]),e("td",[t._v("Resets the browsers defaults.")])]),e("tr",[e("td",[t._v("p-link")]),e("td",[t._v("Renders a button as a link.")])]),e("tr",[e("td",[t._v("p-error")]),e("td",[t._v("Applies the invalid theme color to a text.")])]),e("tr",[e("td",[t._v("p-invalid")]),e("td",[t._v("Alias to p-error.")])]),e("tr",[e("td",[t._v("p-text-secondary")]),e("td",[t._v("Applies the text color of the theme with the secondary priority.")])])])])])}],c=a(o,n,l,!1,null,"cba37d1f");const y=c.exports;export{y as default};
//# sourceMappingURL=Theming-DEtnFs5R.js.map
