System.register(["./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,a){"use strict";var t;return{setters:[function(e){t=e.n},null,null,null],execute:function(){var a=document.createElement("style");a.textContent="li[data-v-32a73918]{line-height:1.5}\n",document.head.appendChild(a),e("default",t({},(function(){var e=this,a=e._self._c;return a("div",[a("div",{staticClass:"content-section documentation"},[a("h1",[e._v("Internationalization and Localization")]),e._m(0),a("h5",[e._v("Getting Started")]),a("p",[e._v("Locale values are stored in the global configuration that becomes accessible after installing the PrimeVue.")]),a("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import PrimeVue from 'primevue2/config'; Vue.use(PrimeVue); ")]),e._m(1),a("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" Vue.use(PrimeVue, { locale: { accept: 'Aceptar', reject: 'Rechazar', //... } }); ")]),a("p",[e._v("The locale configuration is reactive so that any changes are instantly reflected in the UI. Suppose you are doing a multi language application and need to change the language dynamically.")]),a("h6",[e._v("Options API")]),a("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { methods: { changeToSpanish() { this.$primevue.config.locale.accept = 'Aceptar'; this.$primevue.config.locale.reject = 'Rechazar'; } } } ")]),a("h5",[e._v("Locale Options")]),a("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(' locale: { startsWith: \'Starts with\', contains: \'Contains\', notContains: \'Not contains\', endsWith: \'Ends with\', equals: \'Equals\', notEquals: \'Not equals\', noFilter: \'No Filter\', lt: \'Less than\', lte: \'Less than or equal to\', gt: \'Greater than\', gte: \'Greater than or equal to\', dateIs: \'Date is\', dateIsNot: \'Date is not\', dateBefore: \'Date is before\', dateAfter: \'Date is after\', clear: \'Clear\', apply: \'Apply\', matchAll: \'Match All\', matchAny: \'Match Any\', addRule: \'Add Rule\', removeRule: \'Remove Rule\', accept: \'Yes\', reject: \'No\', choose: \'Choose\', upload: \'Upload\', cancel: \'Cancel\', dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"], monthNames: ["January","February","March","April","May","June","July","August","September","October","November","December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: \'Today\', weekHeader: \'Wk\', firstDayOfWeek: 0, dateFormat: \'mm/dd/yy\', weak: \'Weak\', medium: \'Medium\', strong: \'Strong\', passwordPrompt: \'Enter a password\', emptyFilterMessage: \'No results found\', emptyMessage: \'No available options\' } ')])],1)])}),[function(){var e=this,a=e._self._c;return a("p",[e._v("The Locale API allows setting "),a("b",[e._v("i18n")]),e._v(" and "),a("b",[e._v("l7n")]),e._v(" options globally for the components.")])},function(){var e=this,a=e._self._c;return a("p",[e._v("Second parameter of the "),a("i",[e._v("use")]),e._v(" function can be used to initiate the locale during PrimeVue installation.")])}],!1,null,"32a73918").exports)}}}));
//# sourceMappingURL=LocaleDemo-legacy-Cp3_Xzu1.js.map