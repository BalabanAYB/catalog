(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},8360:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(5893),a=n(6010),o=n(8657),c=n.n(o),s=n(7294),i=n(1698),l=n.n(i),u=n(5984),p=n.n(u),h=n(6529),f=n.n(h);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){var t=e.defaultChecked,n=e.register,o=e.onChange,c=e.className,i=e.value,l=e.label,u=e.name,p=(0,s.useState)(t),h=p[0],v=p[1];return(0,s.useEffect)((function(){v(t)}),[t]),(0,r.jsxs)("label",{className:(0,a.Z)(f().root,c,m({},f().checked,h)),children:[(0,r.jsx)("input",{className:f().input,type:"checkbox",name:u,onChange:function(){v(!h),o&&o({checked:!h,type:"checkbox",name:u,value:i})},ref:n}),(0,r.jsx)("span",{className:f().checkbox}),!!l&&(0,r.jsx)("span",{className:(0,a.Z)(f().label),children:l})]})},d=n(584),x=n(1043);function b(e,t){var n=(0,s.useState)(e),r=n[0],a=n[1];return(0,s.useEffect)((function(){var n=setTimeout((function(){a(e)}),t);return function(){clearTimeout(n)}}),[e]),r}function _(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g=function(e){var t=e.filtersData,n=e.metaPath,a=(0,s.useState)(["1","9"]),o=a[0],c=a[1],i=(0,s.useState)("0"),l=i[0],u=i[1],h=(0,s.useState)("499000"),f=h[0],m=h[1],g=(0,x.I0)(),y=b(l,800),j=b(f,800);(0,s.useEffect)((function(){var e={min:l,max:f};g((0,d.x)(null,n,o,e))}),[y,j]);var k=function(e){var t={min:l,max:f};if("checkbox"===e.type){if(e.checked){c(_(o).concat([e.value]));var r=_(o).concat([e.value]);g((0,d.x)(null,n,r,t))}if(!e.checked){var a=o.filter((function(t){return t!==e.value}));c(a),g((0,d.x)(null,n,a,t))}}};return(0,r.jsxs)("div",{className:p().wrapper,children:[(0,r.jsx)("h2",{className:p().title,children:"\u0426\u0435\u043d\u0430, \u20bd"}),(0,r.jsxs)("label",{className:p().label,children:[(0,r.jsx)("input",{onChange:function(e){return u(e.target.value)},value:l,name:"minPrice",className:p().input,type:"text"}),(0,r.jsx)("input",{onChange:function(e){return m(e.target.value)},value:f,name:"maxPrice",className:p().input,type:"text"})]}),(0,r.jsx)("h2",{className:p().titleFilter,children:t.title}),(0,r.jsx)("div",{className:p().checkboxesLabel,children:t.items.map((function(e){return(0,r.jsx)(v,{onChange:k,defaultChecked:e.main,value:e.value,name:e.title,className:p().checkbox,label:e.title},e.title)}))})]})},y=n(5943),j=function(e){var t,n,o=e.catalogData,c=(0,x.v9)(y.yu)?l().mobile:null;return(0,r.jsxs)("div",{className:l().wrapper,children:[(0,r.jsx)("p",{className:l().tag,children:"\n             \n              ".concat((t=o.meta.total,n=["\u0422\u043e\u0432\u0430\u0440","\u0422\u043e\u0432\u0430\u0440\u0430","\u0422\u043e\u0432\u0430\u0440\u043e\u0432"],n[t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?Math.abs(t)%10:5]]),"\n                ").concat(o.meta.total,"\n              ")}),(0,r.jsx)("h2",{className:(0,a.Z)(l().title,c),children:"\u041a\u0430\u043c\u0435\u0440\u044b"}),(0,r.jsx)(g,{metaPath:o.meta.path,filtersData:o.filters[3]})]})},k=n(3996),C=function(e){var t=e.children,n=(0,x.v9)(k.Z),o=(0,x.v9)(y.yu)?c().mobile:null;return(0,r.jsxs)("div",{className:(0,a.Z)(c().layout,o),children:[(0,r.jsx)(j,{catalogData:n}),(0,r.jsx)("main",{className:c().rightColumn,children:t})]})}},3678:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),a=n(9008),o=n(19),c=n.n(o);n(8360),n(1987),n(8402),n(584);function s(){return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("div",{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})]})}},584:function(e,t,n){"use strict";n.d(t,{x:function(){return p}});var r=n(5666),a=n.n(r),o=n(6391),c=n(9669),s=n.n(c);function i(e,t,n,r,a,o,c){try{var s=e[o](c),i=s.value}catch(l){return void n(l)}s.done?t(i):Promise.resolve(i).then(r,a)}var l={getCatalog:function(e,t,n,r){return(o=a().mark((function o(){var c,i;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=e?"https://getlens-master.stage.dev.family/api/pages/".concat(e):n.length&&2!==n.length&&r?"".concat(t,"?brands[]=").concat(n,"&price[min]=").concat(r.min,"&price[max]=").concat(r.max):n.length&&2!==n.length?"".concat(t,"?brands[]=").concat(n[0]):r?"".concat(t,"?price[min]=").concat(r.min,"&price[max]=").concat(r.max):t,a.next=4,s().get(c);case 4:return i=a.sent,a.abrupt("return",i);case 6:case"end":return a.stop()}}),o)})),function(){var e=this,t=arguments;return new Promise((function(n,r){var a=o.apply(e,t);function c(e){i(a,n,r,c,s,"next",e)}function s(e){i(a,n,r,c,s,"throw",e)}c(void 0)}))})();var o}};function u(e,t,n,r,a,o,c){try{var s=e[o](c),i=s.value}catch(l){return void n(l)}s.done?t(i):Promise.resolve(i).then(r,a)}var p=function(e,t,n,r){return c=a().mark((function c(s){var i;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.getCatalog(e,t,n,r);case 2:(i=a.sent).data&&s((c=i.data,{type:o.z,payload:c}));case 4:case"end":return a.stop()}var c}),c)})),function(){var e=this,t=arguments;return new Promise((function(n,r){var a=c.apply(e,t);function o(e){u(a,n,r,o,s,"next",e)}function s(e){u(a,n,r,o,s,"throw",e)}o(void 0)}))};var c}},3996:function(e,t,n){"use strict";var r=(0,n(8697).P1)((function(e){return e.catalog.data}),(function(e){return e}));t.Z=r},5943:function(e,t,n){"use strict";n.d(t,{yu:function(){return o},gK:function(){return c},gI:function(){return s}});var r=n(8697),a=function(e){return e.device.type},o=(0,r.P1)(a,(function(e){return e.mobile})),c=(0,r.P1)(a,(function(e){return e.tablet})),s=(0,r.P1)(a,(function(e){return e.desktop}))},8657:function(e){e.exports={layout:"Layout_layout__XqDtK",mobile:"Layout_mobile__FxYWD",rightColumn:"Layout_rightColumn__8eT5K"}},5984:function(e){e.exports={wrapper:"FilterBlock_wrapper__RHs_V",title:"FilterBlock_title__U0ZvV",label:"FilterBlock_label__gtjsM",input:"FilterBlock_input__JiRhB",titleFilter:"FilterBlock_titleFilter__layUY",checkboxesLabel:"FilterBlock_checkboxesLabel__pTXOm",checkbox:"FilterBlock_checkbox__6sHq8"}},1698:function(e){e.exports={wrapper:"LeftColumn_wrapper__APxLg",tag:"LeftColumn_tag__pXSbi",title:"LeftColumn_title__AY6_L",mobile:"LeftColumn_mobile__F7zmI"}},6529:function(e){e.exports={root:"Checkbox_root__DZJgB",checked:"Checkbox_checked__aJfa1",checkbox:"Checkbox_checkbox__Mm2vb",label:"Checkbox_label__SqfM8",input:"Checkbox_input__CP5QP"}},19:function(e){e.exports={container:"Home_container__97eC3"}},1987:function(e,t,n){e.exports=function(){var e={715:function(e,t,n){var r,a=(r=n(191))&&"object"==typeof r&&"default"in r?r.default:r,o=/https?|ftp|gopher|file/;function c(e){"string"==typeof e&&(e=_(e));var t=function(e,t,n){var r=e.auth,a=e.hostname,o=e.protocol||"",c=e.pathname||"",s=e.hash||"",i=e.query||"",l=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?l=r+e.host:a&&(l=r+(~a.indexOf(":")?"["+a+"]":a),e.port&&(l+=":"+e.port)),i&&"object"==typeof i&&(i=t.encode(i));var u=e.search||i&&"?"+i||"";return o&&":"!==o.substr(-1)&&(o+=":"),e.slashes||(!o||n.test(o))&&!1!==l?(l="//"+(l||""),c&&"/"!==c[0]&&(c="/"+c)):l||(l=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),{protocol:o,host:l,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:u=u.replace("#","%23"),hash:s}}(e,a,o);return""+t.protocol+t.host+t.pathname+t.search+t.hash}var s="http://",i="w.w",l=s+i,u=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function h(e,t){var n="string"==typeof e?_(e):e;e="object"==typeof e?c(e):e;var r=_(t),a="";n.protocol&&!n.slashes&&(a=n.protocol,e=e.replace(n.protocol,""),a+="/"===t[0]||"/"===e[0]?"/":""),a&&r.protocol&&(a="",r.slashes||(a=r.protocol,t=t.replace(r.protocol,"")));var o=e.match(u);o&&!r.protocol&&(e=e.substr((a=o[1]+(o[2]||"")).length),/^\/\/[^/]/.test(t)&&(a=a.slice(0,-1)));var i=new URL(e,l+"/"),h=new URL(t,i).toString().replace(l,""),f=r.protocol||n.protocol;return f+=n.slashes||r.slashes?"//":"",!a&&f?h=h.replace(s,f):a&&(h=h.replace(s,"")),p.test(h)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==h.slice(-1)||(h=h.slice(0,-1)),a&&(h=a+("/"===h[0]?h.substr(1):h)),h}function f(){}f.prototype.parse=_,f.prototype.format=c,f.prototype.resolve=h,f.prototype.resolveObject=h;var m=/^https?|ftp|gopher|file/,v=/^(.*?)([#?].*)/,d=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,x=/^([a-z0-9.+-]*:)?\/\/\/*/i,b=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function _(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=!1),e&&"object"==typeof e&&e instanceof f)return e;var r=(e=e.trim()).match(v);e=r?r[1].replace(/\\/g,"/")+r[2]:e.replace(/\\/g,"/"),b.test(e)&&"/"!==e.slice(-1)&&(e+="/");var o=!/(^javascript)/.test(e)&&e.match(d),s=x.test(e),u="";o&&(m.test(o[1])||(u=o[1].toLowerCase(),e=""+o[2]+o[3]),o[2]||(s=!1,m.test(o[1])?(u=o[1],e=""+o[3]):e="//"+o[3]),3!==o[2].length&&1!==o[2].length||(u=o[1],e="/"+o[3]));var p,h=(r?r[1]:e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),_=h&&h[1],g=new f,y="",j="";try{p=new URL(e)}catch(t){y=t,u||n||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(j="/",e=e.substr(1));try{p=new URL(e,l)}catch(e){return g.protocol=u,g.href=u,g}}g.slashes=s&&!j,g.host=p.host===i?"":p.host,g.hostname=p.hostname===i?"":p.hostname.replace(/(\[|\])/g,""),g.protocol=y?u||null:p.protocol,g.search=p.search.replace(/\\/g,"%5C"),g.hash=p.hash.replace(/\\/g,"%5C");var k=e.split("#");!g.search&&~k[0].indexOf("?")&&(g.search="?"),g.hash||""!==k[1]||(g.hash="#"),g.query=t?a.decode(p.search.substr(1)):g.search.substr(1),g.pathname=j+(o?function(e){return e.replace(/['^|`]/g,(function(e){return"%"+e.charCodeAt().toString(16).toUpperCase()})).replace(/((?:%[0-9A-F]{2})+)/g,(function(e,t){try{return decodeURIComponent(t).split("").map((function(e){var t=e.charCodeAt();return t>256||/^[a-z0-9]$/i.test(e)?e:"%"+t.toString(16).toUpperCase()})).join("")}catch(e){return t}}))}(p.pathname):p.pathname),"about:"===g.protocol&&"blank"===g.pathname&&(g.protocol="",g.pathname=""),y&&"/"!==e[0]&&(g.pathname=g.pathname.substr(1)),u&&!m.test(u)&&"/"!==e.slice(-1)&&"/"===g.pathname&&(g.pathname=""),g.path=g.pathname+g.search,g.auth=[p.username,p.password].map(decodeURIComponent).filter(Boolean).join(":"),g.port=p.port,_&&!g.host.endsWith(_)&&(g.host+=_,g.port=_.slice(1)),g.href=j?""+g.pathname+g.search+g.hash:c(g);var C=/^(file)/.test(g.href)?["host","hostname"]:[];return Object.keys(g).forEach((function(e){~C.indexOf(e)||(g[e]=g[e]||null)})),g}t.parse=_,t.format=c,t.resolve=h,t.resolveObject=function(e,t){return _(h(e,t))},t.Url=f},191:function(e){"use strict";e.exports=n(7673)}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}},o=!0;try{e[n](a,a.exports,r),o=!1}finally{o&&delete t[n]}return a.exports}return r.ab="//",r(715)}()},2587:function(e){"use strict";function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,n,r,a){n=n||"&",r=r||"=";var o={};if("string"!==typeof e||0===e.length)return o;var c=/\+/g;e=e.split(n);var s=1e3;a&&"number"===typeof a.maxKeys&&(s=a.maxKeys);var i=e.length;s>0&&i>s&&(i=s);for(var l=0;l<i;++l){var u,p,h,f,m=e[l].replace(c,"%20"),v=m.indexOf(r);v>=0?(u=m.substr(0,v),p=m.substr(v+1)):(u=m,p=""),h=decodeURIComponent(u),f=decodeURIComponent(p),t(o,h)?Array.isArray(o[h])?o[h].push(f):o[h]=[o[h],f]:o[h]=f}return o}},2361:function(e){"use strict";var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,n,r,a){return n=n||"&",r=r||"=",null===e&&(e=void 0),"object"===typeof e?Object.keys(e).map((function(a){var o=encodeURIComponent(t(a))+r;return Array.isArray(e[a])?e[a].map((function(e){return o+encodeURIComponent(t(e))})).join(n):o+encodeURIComponent(t(e[a]))})).filter(Boolean).join(n):a?encodeURIComponent(t(a))+r+encodeURIComponent(t(e)):""}},7673:function(e,t,n){"use strict";t.decode=t.parse=n(2587),t.encode=t.stringify=n(2361)}},function(e){e.O(0,[628,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);