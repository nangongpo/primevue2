!function(){function e(e,t,n){return(t=o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,u,o,a=[],s=!0,l=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=u.call(n)).done)&&(a.push(r.value),a.length!==t);s=!0);}catch(e){l=!0,i=e}finally{try{if(!s&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function u(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:t+""}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}System.register(["./fast-diff-legacy-2zhWRgQ3.js","./lodash.clonedeep-legacy-B2NlAcg0.js","./lodash.isequal-legacy-QYSFaOJg.js"],(function(n,i){"use strict";var o,s,l,f;return{setters:[function(e){o=e.g,s=e.d},function(e){l=e.l},function(e){f=e.l}],execute:function(){var i={exports:{}},c={};Object.defineProperty(c,"__esModule",{value:!0});var h,p=l,d=f;!function(e){e.compose=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"object"!==a(e)&&(e={}),"object"!==a(t)&&(t={});var r=p(t);for(var i in n||(r=Object.keys(r).reduce((function(e,t){return null!=r[t]&&(e[t]=r[t]),e}),{})),e)void 0!==e[i]&&void 0===t[i]&&(r[i]=e[i]);return Object.keys(r).length>0?r:void 0},e.diff=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"object"!==a(e)&&(e={}),"object"!==a(t)&&(t={});var n=Object.keys(e).concat(Object.keys(t)).reduce((function(n,r){return d(e[r],t[r])||(n[r]=void 0===t[r]?null:t[r]),n}),{});return Object.keys(n).length>0?n:void 0},e.invert=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=e||{};var n=Object.keys(t).reduce((function(n,r){return t[r]!==e[r]&&void 0!==e[r]&&(n[r]=t[r]),n}),{});return Object.keys(e).reduce((function(n,r){return e[r]!==t[r]&&void 0===t[r]&&(n[r]=null),n}),n)},e.transform=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("object"!==a(e))return t;if("object"===a(t)){if(!n)return t;var r=Object.keys(t).reduce((function(n,r){return void 0===e[r]&&(n[r]=t[r]),n}),{});return Object.keys(r).length>0?r:void 0}}}(h||(h={})),c.default=h;var v,b={};Object.defineProperty(b,"__esModule",{value:!0}),function(e){e.length=function(e){return"number"==typeof e.delete?e.delete:"number"==typeof e.retain?e.retain:"object"===a(e.retain)&&null!==e.retain?1:"string"==typeof e.insert?e.insert.length:1}}(v||(v={})),b.default=v;var y={};Object.defineProperty(y,"__esModule",{value:!0});var g=b,m=function(){return u((function e(t){r(this,e),this.ops=t,this.index=0,this.offset=0}),[{key:"hasNext",value:function(){return this.peekLength()<1/0}},{key:"next",value:function(e){e||(e=1/0);var t=this.ops[this.index];if(t){var n=this.offset,r=g.default.length(t);if(e>=r-n?(e=r-n,this.index+=1,this.offset=0):this.offset+=e,"number"==typeof t.delete)return{delete:e};var i={};return t.attributes&&(i.attributes=t.attributes),"number"==typeof t.retain?i.retain=e:"object"===a(t.retain)&&null!==t.retain?i.retain=t.retain:"string"==typeof t.insert?i.insert=t.insert.substr(n,e):i.insert=t.insert,i}return{retain:1/0}}},{key:"peek",value:function(){return this.ops[this.index]}},{key:"peekLength",value:function(){return this.ops[this.index]?g.default.length(this.ops[this.index])-this.offset:1/0}},{key:"peekType",value:function(){var e=this.ops[this.index];return e?"number"==typeof e.delete?"delete":"number"==typeof e.retain||"object"===a(e.retain)&&null!==e.retain?"retain":"insert":"retain"}},{key:"rest",value:function(){if(this.hasNext()){if(0===this.offset)return this.ops.slice(this.index);var e=this.offset,t=this.index,n=this.next(),r=this.ops.slice(this.index);return this.offset=e,this.index=t,[n].concat(r)}return[]}}])}();y.default=m,function(n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.AttributeMap=i.OpIterator=i.Op=void 0;var o=s,h=l,p=f,d=c;i.AttributeMap=d.default;var v=b;i.Op=v.default;var g=y;i.OpIterator=g.default;var m=String.fromCharCode(0),k=function(e,t){if("object"!==a(e)||null===e)throw new Error("cannot retain a ".concat(a(e)));if("object"!==a(t)||null===t)throw new Error("cannot retain a ".concat(a(t)));var n=Object.keys(e)[0];if(!n||n!==Object.keys(t)[0])throw new Error("embed types not matched: ".concat(n," != ").concat(Object.keys(t)[0]));return[n,e[n],t[n]]},j=function(){function n(e){r(this,n),Array.isArray(e)?this.ops=e:null!=e&&Array.isArray(e.ops)?this.ops=e.ops:this.ops=[]}return u(n,[{key:"insert",value:function(e,t){var n={};return"string"==typeof e&&0===e.length?this:(n.insert=e,null!=t&&"object"===a(t)&&Object.keys(t).length>0&&(n.attributes=t),this.push(n))}},{key:"delete",value:function(e){return e<=0?this:this.push({delete:e})}},{key:"retain",value:function(e,t){if("number"==typeof e&&e<=0)return this;var n={retain:e};return null!=t&&"object"===a(t)&&Object.keys(t).length>0&&(n.attributes=t),this.push(n)}},{key:"push",value:function(e){var t=this.ops.length,n=this.ops[t-1];if(e=h(e),"object"===a(n)){if("number"==typeof e.delete&&"number"==typeof n.delete)return this.ops[t-1]={delete:n.delete+e.delete},this;if("number"==typeof n.delete&&null!=e.insert&&(t-=1,"object"!==a(n=this.ops[t-1])))return this.ops.unshift(e),this;if(p(e.attributes,n.attributes)){if("string"==typeof e.insert&&"string"==typeof n.insert)return this.ops[t-1]={insert:n.insert+e.insert},"object"===a(e.attributes)&&(this.ops[t-1].attributes=e.attributes),this;if("number"==typeof e.retain&&"number"==typeof n.retain)return this.ops[t-1]={retain:n.retain+e.retain},"object"===a(e.attributes)&&(this.ops[t-1].attributes=e.attributes),this}}return t===this.ops.length?this.ops.push(e):this.ops.splice(t,0,e),this}},{key:"chop",value:function(){var e=this.ops[this.ops.length-1];return e&&"number"==typeof e.retain&&!e.attributes&&this.ops.pop(),this}},{key:"filter",value:function(e){return this.ops.filter(e)}},{key:"forEach",value:function(e){this.ops.forEach(e)}},{key:"map",value:function(e){return this.ops.map(e)}},{key:"partition",value:function(e){var t=[],n=[];return this.forEach((function(r){(e(r)?t:n).push(r)})),[t,n]}},{key:"reduce",value:function(e,t){return this.ops.reduce(e,t)}},{key:"changeLength",value:function(){return this.reduce((function(e,t){return t.insert?e+v.default.length(t):t.delete?e-t.delete:e}),0)}},{key:"length",value:function(){return this.reduce((function(e,t){return e+v.default.length(t)}),0)}},{key:"slice",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,r=[],i=new g.default(this.ops),u=0;u<t&&i.hasNext();){var o=void 0;u<e?o=i.next(e-u):(o=i.next(t-u),r.push(o)),u+=v.default.length(o)}return new n(r)}},{key:"compose",value:function(r){var i=new g.default(this.ops),u=new g.default(r.ops),o=[],s=u.peek();if(null!=s&&"number"==typeof s.retain&&null==s.attributes){for(var l=s.retain;"insert"===i.peekType()&&i.peekLength()<=l;)l-=i.peekLength(),o.push(i.next());s.retain-l>0&&u.next(s.retain-l)}for(var f=new n(o);i.hasNext()||u.hasNext();)if("insert"===u.peekType())f.push(u.next());else if("delete"===i.peekType())f.push(i.next());else{var c=Math.min(i.peekLength(),u.peekLength()),h=i.next(c),v=u.next(c);if(v.retain){var b={};if("number"==typeof h.retain)b.retain="number"==typeof v.retain?c:v.retain;else if("number"==typeof v.retain)null==h.retain?b.insert=h.insert:b.retain=h.retain;else{var y=null==h.retain?"insert":"retain",m=t(k(h[y],v.retain),3),j=m[0],x=m[1],w=m[2],O=n.getHandler(j);b[y]=e({},j,O.compose(x,w,"retain"===y))}var E=d.default.compose(h.attributes,v.attributes,"number"==typeof h.retain);if(E&&(b.attributes=E),f.push(b),!u.hasNext()&&p(f.ops[f.ops.length-1],b)){var L=new n(i.rest());return f.concat(L).chop()}}else"number"==typeof v.delete&&("number"==typeof h.retain||"object"===a(h.retain)&&null!==h.retain)&&f.push(v)}return f.chop()}},{key:"concat",value:function(e){var t=new n(this.ops.slice());return e.ops.length>0&&(t.push(e.ops[0]),t.ops=t.ops.concat(e.ops.slice(1))),t}},{key:"diff",value:function(e,t){if(this.ops===e.ops)return new n;var r=[this,e].map((function(t){return t.map((function(n){if(null!=n.insert)return"string"==typeof n.insert?n.insert:m;throw new Error("diff() called "+(t===e?"on":"with")+" non-document")})).join("")})),i=new n,u=o(r[0],r[1],t,!0),a=new g.default(this.ops),s=new g.default(e.ops);return u.forEach((function(e){for(var t=e[1].length;t>0;){var n=0;switch(e[0]){case o.INSERT:n=Math.min(s.peekLength(),t),i.push(s.next(n));break;case o.DELETE:n=Math.min(t,a.peekLength()),a.next(n),i.delete(n);break;case o.EQUAL:n=Math.min(a.peekLength(),s.peekLength(),t);var r=a.next(n),u=s.next(n);p(r.insert,u.insert)?i.retain(n,d.default.diff(r.attributes,u.attributes)):i.push(u).delete(n)}t-=n}})),i.chop()}},{key:"eachLine",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\n",r=new g.default(this.ops),i=new n,u=0;r.hasNext();){if("insert"!==r.peekType())return;var o=r.peek(),a=v.default.length(o)-r.peekLength(),s="string"==typeof o.insert?o.insert.indexOf(t,a)-a:-1;if(s<0)i.push(r.next());else if(s>0)i.push(r.next(s));else{if(!1===e(i,r.next(1).attributes||{},u))return;u+=1,i=new n}}i.length()>0&&e(i,{},u)}},{key:"invert",value:function(r){var i=new n;return this.reduce((function(u,o){if(o.insert)i.delete(v.default.length(o));else{if("number"==typeof o.retain&&null==o.attributes)return i.retain(o.retain),u+o.retain;if(o.delete||"number"==typeof o.retain){var s=o.delete||o.retain;return r.slice(u,u+s).forEach((function(e){o.delete?i.push(e):o.retain&&o.attributes&&i.retain(v.default.length(e),d.default.invert(o.attributes,e.attributes))})),u+s}if("object"===a(o.retain)&&null!==o.retain){var l=r.slice(u,u+1),f=new g.default(l.ops).next(),c=t(k(o.retain,f.insert),3),h=c[0],p=c[1],b=c[2],y=n.getHandler(h);return i.retain(e({},h,y.invert(p,b)),d.default.invert(o.attributes,f.attributes)),u+1}}return u}),0),i.chop()}},{key:"transform",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(r=!!r,"number"==typeof t)return this.transformPosition(t,r);for(var i=t,u=new g.default(this.ops),o=new g.default(i.ops),s=new n;u.hasNext()||o.hasNext();)if("insert"!==u.peekType()||!r&&"insert"===o.peekType())if("insert"===o.peekType())s.push(o.next());else{var l=Math.min(u.peekLength(),o.peekLength()),f=u.next(l),c=o.next(l);if(f.delete)continue;if(c.delete)s.push(c);else{var h=f.retain,p=c.retain,b="object"===a(p)&&null!==p?p:l;if("object"===a(h)&&null!==h&&"object"===a(p)&&null!==p){var y=Object.keys(h)[0];if(y===Object.keys(p)[0]){var m=n.getHandler(y);m&&(b=e({},y,m.transform(h[y],p[y],r)))}}s.retain(b,d.default.transform(f.attributes,c.attributes,r))}}else s.retain(v.default.length(u.next()));return s.chop()}},{key:"transformPosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!!t;for(var n=new g.default(this.ops),r=0;n.hasNext()&&r<=e;){var i=n.peekLength(),u=n.peekType();n.next(),"delete"!==u?("insert"===u&&(r<e||!t)&&(e+=i),r+=i):e-=Math.min(i,e-r)}return e}}],[{key:"registerEmbed",value:function(e,t){this.handlers[e]=t}},{key:"unregisterEmbed",value:function(e){delete this.handlers[e]}},{key:"getHandler",value:function(e){var t=this.handlers[e];if(!t)throw new Error('no handlers for embed type "'.concat(e,'"'));return t}}])}();j.Op=v.default,j.OpIterator=g.default,j.AttributeMap=d.default,j.handlers={},i.default=j,n.exports=j,n.exports.default=j}(i,i.exports);var k=n("a",i.exports);n("D",o(k))}}}))}();
//# sourceMappingURL=quill-delta-legacy-D1eAK-aI.js.map
