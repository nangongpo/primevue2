System.register([],(function(n,t){"use strict";return{execute:function(){n("g",(function(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n})),n("c","undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{});var t=-1,e=1,r=0;function l(n,v,p,d,A){if(n===v)return n?[[r,n]]:[];if(null!=p){var M=function(n,t,e){var r="number"==typeof e?{index:e,length:0}:e.oldRange,l="number"==typeof e?null:e.newRange,i=n.length,s=t.length;if(0===r.length&&(null===l||0===l.length)){var g=r.index,u=n.slice(0,g),h=n.slice(g),a=l?l.index:null,c=g+s-i;if((null===a||a===c)&&!(c<0||c>s)){var f=t.slice(0,c);if((v=t.slice(c))===h){var o=Math.min(g,c);if((d=u.slice(0,o))===(M=f.slice(0,o)))return m(d,u.slice(o),f.slice(o),h)}}if(null===a||a===g){var b=g,v=(f=t.slice(0,b),t.slice(b));if(f===u){var p=Math.min(i-b,s-b);if((A=h.slice(h.length-p))===(x=v.slice(v.length-p)))return m(u,h.slice(0,h.length-p),v.slice(0,v.length-p),A)}}}if(r.length>0&&l&&0===l.length){var d=n.slice(0,r.index),A=n.slice(r.index+r.length);if(!(s<(o=d.length)+(p=A.length))){var M=t.slice(0,o),x=t.slice(s-p);if(d===M&&A===x)return m(d,n.slice(o,i-p),t.slice(o,s-p),A)}}return null}(n,v,p);if(M)return M}var x=s(n,v),y=n.substring(0,x);x=u(n=n.substring(x),v=v.substring(x));var w=n.substring(n.length-x),E=function(n,g){var h;if(!n)return[[e,g]];if(!g)return[[t,n]];var a=n.length>g.length?n:g,c=n.length>g.length?g:n,f=a.indexOf(c);if(-1!==f)return h=[[e,a.substring(0,f)],[r,c],[e,a.substring(f+c.length)]],n.length>g.length&&(h[0][0]=h[2][0]=t),h;if(1===c.length)return[[t,n],[e,g]];var o=function(n,t){var e=n.length>t.length?n:t,r=n.length>t.length?t:n;if(e.length<4||2*r.length<e.length)return null;function l(n,t,e){for(var r,l,i,g,h=n.substring(e,e+Math.floor(n.length/4)),a=-1,c="";-1!==(a=t.indexOf(h,a+1));){var f=s(n.substring(e),t.substring(a)),o=u(n.substring(0,e),t.substring(0,a));c.length<o+f&&(c=t.substring(a-o,a)+t.substring(a,a+f),r=n.substring(0,e-o),l=n.substring(e+f),i=t.substring(0,a-o),g=t.substring(a+f))}return 2*c.length>=n.length?[r,l,i,g,c]:null}var i,g,h,a,c,f=l(e,r,Math.ceil(e.length/4)),o=l(e,r,Math.ceil(e.length/2));if(!f&&!o)return null;i=o?f&&f[4].length>o[4].length?f:o:f,n.length>t.length?(g=i[0],h=i[1],a=i[2],c=i[3]):(a=i[0],c=i[1],g=i[2],h=i[3]);var b=i[4];return[g,h,a,c,b]}(n,g);if(o){var b=o[0],v=o[1],p=o[2],d=o[3],A=o[4],m=l(b,p),M=l(v,d);return m.concat([[r,A]],M)}return function(n,r){for(var l=n.length,s=r.length,g=Math.ceil((l+s)/2),u=g,h=2*g,a=new Array(h),c=new Array(h),f=0;f<h;f++)a[f]=-1,c[f]=-1;a[u+1]=0,c[u+1]=0;for(var o=l-s,b=o%2!=0,v=0,p=0,d=0,A=0,m=0;m<g;m++){for(var M=-m+v;M<=m-p;M+=2){for(var x=u+M,y=(T=M===-m||M!==m&&a[x-1]<a[x+1]?a[x+1]:a[x-1]+1)-M;T<l&&y<s&&n.charAt(T)===r.charAt(y);)T++,y++;if(a[x]=T,T>l)p+=2;else if(y>s)v+=2;else if(b&&(O=u+o-M)>=0&&O<h&&-1!==c[O]&&T>=(E=l-c[O]))return i(n,r,T,y)}for(var w=-m+d;w<=m-A;w+=2){for(var E,O=u+w,C=(E=w===-m||w!==m&&c[O-1]<c[O+1]?c[O+1]:c[O-1]+1)-w;E<l&&C<s&&n.charAt(l-E-1)===r.charAt(s-C-1);)E++,C++;if(c[O]=E,E>l)A+=2;else if(C>s)d+=2;else if(!b){var T;if((x=u+o-w)>=0&&x<h&&-1!==a[x])if(y=u+(T=a[x])-x,T>=(E=l-E))return i(n,r,T,y)}}}return[[t,n],[e,r]]}(n,g)}(n=n.substring(0,n.length-x),v=v.substring(0,v.length-x));return y&&E.unshift([r,y]),w&&E.push([r,w]),b(E,A),d&&function(n){for(var l=!1,i=[],s=0,v=null,p=0,d=0,A=0,m=0,M=0;p<n.length;)n[p][0]==r?(i[s++]=p,d=m,A=M,m=0,M=0,v=n[p][1]):(n[p][0]==e?m+=n[p][1].length:M+=n[p][1].length,v&&v.length<=Math.max(d,A)&&v.length<=Math.max(m,M)&&(n.splice(i[s-1],0,[t,v]),n[i[s-1]+1][0]=e,s--,p=--s>0?i[s-1]:-1,d=0,A=0,m=0,M=0,v=null,l=!0)),p++;for(l&&b(n),function(n){function t(n,t){if(!n||!t)return 6;var e=n.charAt(n.length-1),r=t.charAt(0),l=e.match(h),i=r.match(h),s=l&&e.match(a),g=i&&r.match(a),u=s&&e.match(c),b=g&&r.match(c),v=u&&n.match(f),p=b&&t.match(o);return v||p?5:u||b?4:l&&!s&&g?3:s||g?2:l||i?1:0}for(var e=1;e<n.length-1;){if(n[e-1][0]==r&&n[e+1][0]==r){var l=n[e-1][1],i=n[e][1],s=n[e+1][1],g=u(l,i);if(g){var b=i.substring(i.length-g);l=l.substring(0,l.length-g),i=b+i.substring(0,i.length-g),s=b+s}for(var v=l,p=i,d=s,A=t(l,i)+t(i,s);i.charAt(0)===s.charAt(0);){l+=i.charAt(0),i=i.substring(1)+s.charAt(0),s=s.substring(1);var m=t(l,i)+t(i,s);m>=A&&(A=m,v=l,p=i,d=s)}n[e-1][1]!=v&&(v?n[e-1][1]=v:(n.splice(e-1,1),e--),n[e][1]=p,d?n[e+1][1]=d:(n.splice(e+1,1),e--))}e++}}(n),p=1;p<n.length;){if(n[p-1][0]==t&&n[p][0]==e){var x=n[p-1][1],y=n[p][1],w=g(x,y),E=g(y,x);w>=E?(w>=x.length/2||w>=y.length/2)&&(n.splice(p,0,[r,y.substring(0,w)]),n[p-1][1]=x.substring(0,x.length-w),n[p+1][1]=y.substring(w),p++):(E>=x.length/2||E>=y.length/2)&&(n.splice(p,0,[r,x.substring(0,E)]),n[p-1][0]=e,n[p-1][1]=y.substring(0,y.length-E),n[p+1][0]=t,n[p+1][1]=x.substring(E),p++),p++}p++}}(E),E}function i(n,t,e,r){var i=n.substring(0,e),s=t.substring(0,r),g=n.substring(e),u=t.substring(r),h=l(i,s),a=l(g,u);return h.concat(a)}function s(n,t){if(!n||!t||n.charAt(0)!==t.charAt(0))return 0;for(var e=0,r=Math.min(n.length,t.length),l=r,i=0;e<l;)n.substring(i,l)==t.substring(i,l)?i=e=l:r=l,l=Math.floor((r-e)/2+e);return v(n.charCodeAt(l-1))&&l--,l}function g(n,t){var e=n.length,r=t.length;if(0==e||0==r)return 0;e>r?n=n.substring(e-r):e<r&&(t=t.substring(0,e));var l=Math.min(e,r);if(n==t)return l;for(var i=0,s=1;;){var g=n.substring(l-s),u=t.indexOf(g);if(-1==u)return i;s+=u,0!=u&&n.substring(l-s)!=t.substring(0,s)||(i=s,s++)}}function u(n,t){if(!n||!t||n.slice(-1)!==t.slice(-1))return 0;for(var e=0,r=Math.min(n.length,t.length),l=r,i=0;e<l;)n.substring(n.length-l,n.length-i)==t.substring(t.length-l,t.length-i)?i=e=l:r=l,l=Math.floor((r-e)/2+e);return p(n.charCodeAt(n.length-l))&&l--,l}var h=/[^a-zA-Z0-9]/,a=/\s/,c=/[\r\n]/,f=/\n\r?\n$/,o=/^\r?\n\r?\n/;function b(n,l){n.push([r,""]);for(var i,g=0,h=0,a=0,c="",f="";g<n.length;)if(g<n.length-1&&!n[g][1])n.splice(g,1);else switch(n[g][0]){case e:a++,f+=n[g][1],g++;break;case t:h++,c+=n[g][1],g++;break;case r:var o=g-a-h-1;if(l){if(o>=0&&A(n[o][1])){var v=n[o][1].slice(-1);if(n[o][1]=n[o][1].slice(0,-1),c=v+c,f=v+f,!n[o][1]){n.splice(o,1),g--;var p=o-1;n[p]&&n[p][0]===e&&(a++,f=n[p][1]+f,p--),n[p]&&n[p][0]===t&&(h++,c=n[p][1]+c,p--),o=p}}d(n[g][1])&&(v=n[g][1].charAt(0),n[g][1]=n[g][1].slice(1),c+=v,f+=v)}if(g<n.length-1&&!n[g][1]){n.splice(g,1);break}if(c.length>0||f.length>0){c.length>0&&f.length>0&&(0!==(i=s(f,c))&&(o>=0?n[o][1]+=f.substring(0,i):(n.splice(0,0,[r,f.substring(0,i)]),g++),f=f.substring(i),c=c.substring(i)),0!==(i=u(f,c))&&(n[g][1]=f.substring(f.length-i)+n[g][1],f=f.substring(0,f.length-i),c=c.substring(0,c.length-i)));var m=a+h;0===c.length&&0===f.length?(n.splice(g-m,m),g-=m):0===c.length?(n.splice(g-m,m,[e,f]),g=g-m+1):0===f.length?(n.splice(g-m,m,[t,c]),g=g-m+1):(n.splice(g-m,m,[t,c],[e,f]),g=g-m+2)}0!==g&&n[g-1][0]===r?(n[g-1][1]+=n[g][1],n.splice(g,1)):g++,a=0,h=0,c="",f=""}""===n[n.length-1][1]&&n.pop();var M=!1;for(g=1;g<n.length-1;)n[g-1][0]===r&&n[g+1][0]===r&&(n[g][1].substring(n[g][1].length-n[g-1][1].length)===n[g-1][1]?(n[g][1]=n[g-1][1]+n[g][1].substring(0,n[g][1].length-n[g-1][1].length),n[g+1][1]=n[g-1][1]+n[g+1][1],n.splice(g-1,1),M=!0):n[g][1].substring(0,n[g+1][1].length)==n[g+1][1]&&(n[g-1][1]+=n[g+1][1],n[g][1]=n[g][1].substring(n[g+1][1].length)+n[g+1][1],n.splice(g+1,1),M=!0)),g++;M&&b(n,l)}function v(n){return n>=55296&&n<=56319}function p(n){return n>=56320&&n<=57343}function d(n){return p(n.charCodeAt(0))}function A(n){return v(n.charCodeAt(n.length-1))}function m(n,l,i,s){return A(n)||d(s)?null:function(n){for(var t=[],e=0;e<n.length;e++)n[e][1].length>0&&t.push(n[e]);return t}([[r,n],[t,l],[e,i],[r,s]])}function M(n,t,e,r){return l(n,t,e,r,!0)}M.INSERT=e,M.DELETE=t,M.EQUAL=r,n("d",M)}}}));
//# sourceMappingURL=fast-diff-legacy-2zhWRgQ3.js.map