import{n as r}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const i={};var a=function(){var e=this,s=e._self._c;return e._self._setupProxy,s("div",[s("div",{staticClass:"content-section documentation"},[s("Message",{attrs:{severity:"warn"}},[e._v("This guide is for Vue 2 and PrimeVue 2, visit "),s("a",{attrs:{href:"https://www.primefaces.org/primevue2/showcase/"}},[e._v("PrimeVue 3.x website")]),e._v(" if you are using Vue 3.")]),s("h1",[e._v("Setup")]),s("p",[e._v("PrimeVue is a rich set of open source native components for Vue.")]),s("h5",[e._v("Download")]),e._m(0),s("CodeHighlight",{attrs:{lang:"js"}},[e._v(" npm install primevue@^2 --save npm install primeicons --save ")]),s("h5",[e._v("Module Loader")]),e._m(1),s("p",[e._v("Begin with installing PrimeVue. This command only sets up the core configuration like locale and does not register any component.")]),s("CodeHighlight",{attrs:{lang:"js"}},[e._v(" import PrimeVue from 'primevue2/config'; Vue.use(PrimeVue); ")]),s("p",[e._v("Then import and register a component from the library. Import path is available in the documentation of the corresponding component.")]),s("CodeHighlight",{attrs:{lang:"js"}},[e._v(" import Dialog from 'primevue2/dialog'; Vue.component('Dialog', Dialog); ")]),s("p",[e._v("Finally you'll be able to utilize the component in your application.")]),s("CodeHighlight",[e._v(" <Dialog></Dialog> ")]),s("h5",[e._v("Script Tag")]),s("p",[e._v("Other alternative is utilizing the components directly within the browser with UMD packages.")]),s("CodeHighlight",[e._v(' <meta charset="utf-8"> <title>calendar demo</title> <link href="https://unpkg.com/primevue^2/resources/themes/saga-blue/theme.css " rel="stylesheet"> <link href="https://unpkg.com/primevue^2/resources/primevue.min.css " rel="stylesheet"> <link href="https://unpkg.com/primeicons/primeicons.css " rel="stylesheet"> <script src="https://unpkg.com/vue"><\/script> <script src="https://unpkg.com/primevue^2/calendar/calendar.umd.min.js"><\/script> <div id="app"> <p-calendar></p-calendar> </div> <script> new Vue({ components: { \'p-calendar\': calendar } }).$mount(\'#app\') <\/script> ')]),s("h5",[e._v("Dependencies")]),s("p",[e._v("Majority of PrimeVue components (95%) are native and there are some exceptions having 3rd party dependencies such as Quill for Editor.")]),s("p",[e._v("In addition, components require PrimeIcons library for icons.")]),s("h6",[e._v("Mandatory")]),s("CodeHighlight",{attrs:{lang:"js"}},[e._v(' dependencies: { "vue": "^2.6.10", "primeicons": "^6.0.0" } ')]),s("h6",[e._v("Optional")]),s("p",[e._v("Here is the list of components with 3rd party dependencies.")]),e._m(2),s("h5",[e._v("Styles")]),s("p",[e._v("The css dependencies are as follows, note that you may change the theme with another one of your choice. If you are using a bundler such as webpack with a css loader you may import them to your main application component.")]),s("CodeHighlight",{attrs:{lang:"css"}},[e._v(" primevue2/resources/themes/saga-blue/theme.css //theme primevue2/resources/primevue.min.css //core css primeicons/primeicons.css //icons ")]),s("h5",[e._v("Free Themes")]),s("p",[e._v("PrimeVue ships with 35 free themes to choose from.")]),s("CodeHighlight",{attrs:{lang:"css"}},[e._v(" primevue2/resources/themes/bootstrap4-light-blue/theme.css primevue2/resources/themes/bootstrap4-light-purple/theme.css primevue2/resources/themes/bootstrap4-dark-blue/theme.css primevue2/resources/themes/bootstrap4-dark-purple/theme.css primevue2/resources/themes/md-light-indigo/theme.css primevue2/resources/themes/md-light-deeppurple/theme.css primevue2/resources/themes/md-dark-indigo/theme.css primevue2/resources/themes/md-dark-deeppurple/theme.css primevue2/resources/themes/mdc-light-indigo/theme.css primevue2/resources/themes/mdc-light-deeppurple/theme.css primevue2/resources/themes/mdc-dark-indigo/theme.css primevue2/resources/themes/mdc-dark-deeppurple/theme.css primevue2/resources/themes/tailwind-light/theme.css primevue2/resources/themes/fluent-light/theme.css primevue2/resources/themes/lara-light-indigo/theme.css primevue2/resources/themes/lara-dark-indigo/theme.css primevue2/resources/themes/lara-light-purple/theme.css primevue2/resources/themes/lara-dark-purple/theme.css primevue2/resources/themes/lara-light-blue/theme.css primevue2/resources/themes/lara-dark-blue/theme.css primevue2/resources/themes/lara-light-teal/theme.css primevue2/resources/themes/lara-dark-teal/theme.css primevue2/resources/themes/saga-blue/theme.css primevue2/resources/themes/saga-green/theme.css primevue2/resources/themes/saga-orange/theme.css primevue2/resources/themes/saga-purple/theme.css primevue2/resources/themes/vela-blue/theme.css primevue2/resources/themes/vela-green/theme.css primevue2/resources/themes/vela-orange/theme.css primevue2/resources/themes/vela-purple/theme.css primevue2/resources/themes/arya-blue/theme.css primevue2/resources/themes/arya-green/theme.css primevue2/resources/themes/arya-orange/theme.css primevue2/resources/themes/arya-purple/theme.css primevue2/resources/themes/nova/theme.css primevue2/resources/themes/nova-alt/theme.css primevue2/resources/themes/nova-accent/theme.css primevue2/resources/themes/nova-vue/theme.css primevue2/resources/themes/luna-amber/theme.css primevue2/resources/themes/luna-blue/theme.css primevue2/resources/themes/luna-green/theme.css primevue2/resources/themes/luna-pink/theme.css primevue2/resources/themes/rhea/theme.css ")]),s("h5",[e._v("PrimeFlex")]),s("p",[e._v("PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more. Although it is not required, it is highly recommended to add PrimeFlex as it is likely to need such utilities when developing applications. View the "),s("router-link",{attrs:{to:"/primeflex"}},[e._v("PrimeFlex")]),e._v(" section for the installation.")],1),s("h5",[e._v("Ripple")]),s("p",[e._v("Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at while installing PrimeVue. ")]),s("CodeHighlight",{attrs:{lang:"js"}},[e._v(" import PrimeVue from 'primevue2/config'; Vue.use(PrimeVue, {ripple: true}); ")]),s("h5",[e._v("Quickstart")]),e._m(3),s("h5",[e._v("Typescript")]),e._m(4),s("h5",[e._v("Nuxt.js Integration")]),e._m(5),s("CodeHighlight",{staticClass:"language-javascript"},[e._v(" modules: [ [ 'primevue2/nuxt', { theme: string, //name of the theme, defaults to saga-blue ripple: boolean, //whether the ripple animation is enabled, defaults to false components: [], //an array of components to be registered directives: [] //an array of directives to be registered } ] ], ")]),s("p",[e._v("Here is an example configuration.")]),s("CodeHighlight",{staticClass:"language-javascript"},[e._v(" modules: [ [ 'primevue2/nuxt', { theme: 'md-light-indigo', ripple: true, components: ['InputText','Button','DataTable','Dialog'], directives: ['Tooltip','Badge'] } ] ], ")]),e._m(6),s("CodeHighlight",{staticClass:"language-javascript"},[e._v(" modules: ['primevue2/nuxt'], primevue: { theme: 'md-light-indigo', ripple: true, components: ['InputText','Button','DataTable','Dialog'], directives: ['Tooltip','Badge'] } ")]),s("p",[e._v("Component and Directive names are same as the default export names stated in the import section of each documentation section. For example, "),s("router-link",{attrs:{to:"/datatable"}},[e._v("DataTable")]),e._v(" documentation begins with the following statement which means the key to be used in the components configuration is "),s("strong",[e._v("DataTable")]),e._v(". Refer to the import section of a corresponding component or directive for more information.")],1),s("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import DataTable from 'primevue2/datatable'; import Column from 'primevue2/column'; ")]),s("CodeHighlight",{staticClass:"language-javascript"},[e._v(" modules: ['primevue2/nuxt'], primevue: { theme: 'md-light-indigo', ripple: true, components: ['DataTable','Column'] } ")]),s("CodeHighlight",{staticClass:"language-markup"},[e._v(" <DataTable></DataTable> ")]),e._m(7)],1)])},o=[function(){var t=this,e=t._self._c;return t._self._setupProxy,e("p",[t._v("PrimeVue is available at "),e("a",{attrs:{href:"https://www.npmjs.com/package/primevue"}},[t._v("npm")]),t._v(", if you have an existing application run the following commands to download PrimeVue and PrimeIcons to your project.")])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("p",[t._v("This is the recommended way if your application uses "),e("a",{attrs:{href:"https://cli.vuejs.org/"}},[t._v("vue-cli")]),t._v(" or has a webpack based build with "),e("a",{attrs:{href:"https://github.com/vuejs/vue-loader"}},[t._v("vue-loader")]),t._v(" configured.")])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Component")]),e("th",[t._v("Dependency")])])]),e("tbody",[e("tr",[e("td",[t._v("Charts")]),e("td",[t._v("Charts.js 3.3.2")])]),e("tr",[e("td",[t._v("Editor")]),e("td",[t._v("Quill.js 1.3.3+")])]),e("tr",[e("td",[t._v("PrimeFlex")]),e("td",[t._v("DataView")])])])])])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("p",[t._v("An "),e("a",{attrs:{href:"https://github.com/primefaces/primevue-quickstart"}},[t._v("example application")]),t._v(" based on vue-cli is available at github.")])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("p",[t._v("Typescript is fully supported as type definition files are provided in the npm package of PrimeVue. A sample "),e("a",{attrs:{href:"https://github.com/primefaces/primevue-typescript-quickstart"}},[t._v("typescript-primevue")]),t._v(" application is available as well at github.")])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("p",[t._v("PrimeVue has a built-in nuxt module. Open "),e("strong",[t._v("nuxt.config.js")]),t._v(" and add "),e("i",[t._v("primevue2/nuxt")]),t._v(" to the modules section along with your configuration.")])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("p",[t._v("An alternative configuration is possible using the "),e("i",[t._v("primevue")]),t._v(" property.")])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("p",[t._v("That is all, for a complete example please refer to the "),e("a",{attrs:{href:"https://github.com/primefaces/primevue-nuxtjs-quickstart"}},[t._v("primevue-nuxtjs-quickstart")]),t._v(" sample.")])}],m=r(i,a,o,!1,null,null);const l=m.exports;export{l as default};
//# sourceMappingURL=Setup-B6_f1kK0.js.map
