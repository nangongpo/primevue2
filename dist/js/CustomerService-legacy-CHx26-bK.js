!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:n+""}System.register([],(function(t,n){"use strict";return{execute:function(){t("C",function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)},(n=[{key:"getCustomersSmall",value:function(){return fetch("demo/data/customers-small.json").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getCustomersMedium",value:function(){return fetch("demo/data/customers-medium.json").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getCustomersLarge",value:function(){return fetch("demo/data/customers-large.json").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getCustomersXLarge",value:function(){return fetch("demo/data/customers-xlarge.json").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getCustomers",value:function(t){var e=t?Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"):"";return fetch("https://www.primefaces.org/data/customers?"+e).then((function(t){return t.json()}))}}])&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n,r}())}}}))}();
//# sourceMappingURL=CustomerService-legacy-CHx26-bK.js.map
