!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:n+""}System.register(["./app.fullcalendar-legacy-BjBSiNq4.js","./app.component-legacy-CT61tSyJ.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(t,n){"use strict";var r,o,a,i;return{setters:[function(t){r=t.m,o=t.a,a=t.b},function(t){i=t.n},null,null],execute:function(){var n=document.createElement("style");n.textContent="@media screen and (max-width: 960px){[data-v-5cce5a32] .fc-header-toolbar{display:flex;flex-wrap:wrap}}\n",document.head.appendChild(n);var l=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)},(n=[{key:"getEvents",value:function(){return fetch("demo/data/events.json").then((function(t){return t.json()})).then((function(t){return t.data}))}}])&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n,r}(),c=i({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("p",[t._v("As it is not a component from PrimeVue, refer to the FullCalendar "),e("a",{attrs:{href:"https://fullcalendar.io/docs/vue"}},[t._v("documentation")]),t._v(" for more information.")])])],1)],1)}),[],!1,null,null).exports;t("default",i({data:function(){return{options:{plugins:[r,o,a],initialDate:"2019-01-01",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0},events:null}},eventService:null,created:function(){this.eventService=new l},mounted:function(){var t=this;this.eventService.getEvents().then((function(e){return t.events=e}))},components:{FullCalendarDoc:c}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("FullCalendar",{attrs:{events:t.events,options:t.options}})],1)]),e("FullCalendarDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("FullCalendar")]),e("p",[t._v("PrimeVue provides theming for the "),e("a",{attrs:{href:"https://fullcalendar.io/docs/vue"}},[t._v("FullCalendar Vue")]),t._v(" component.")])])])}],!1,null,"5cce5a32").exports)}}}))}();
//# sourceMappingURL=FullCalendarDemo-legacy-CxIB8ZSC.js.map
