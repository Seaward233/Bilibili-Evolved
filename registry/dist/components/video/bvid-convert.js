!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/bvid-convert"]=t():e["video/bvid-convert"]=t()}(self,(function(){return function(){var e={355:function(e,t,n){var i=n(744)((function(e){return e[1]}));i.push([e.id,".bvid-convert {\n  order: -1;\n  flex-direction: column;\n  border-radius: 4px;\n  padding: 6px 8px;\n  width: 100%;\n  -webkit-user-select: text;\n          user-select: text;\n  box-sizing: border-box;\n  box-shadow: 0 0 0 1px rgba(136, 136, 136, 0.2666666667);\n  background-color: #fff;\n}\nbody.dark .bvid-convert {\n  background-color: #333;\n}\n.bvid-convert-item {\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.bvid-convert-item-copy {\n  transition: transform 0.3s ease-out;\n  cursor: pointer;\n}\n.bvid-convert-item-copy:active {\n  transform: scale(0.9);\n}",""]),e.exports=i},744:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var a=this[r][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);i&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},648:function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],s=t.base?r[0]+t.base:r[0],d=n[s]||0,u="".concat(s," ").concat(d);n[s]=d+1;var l=c(u),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:u,updater:b(f,t),references:1}),i.push(u)}return i}function d(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function p(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var v=null,m=0;function b(e,t){var n,i,o;if(t.singleton){var r=m++;n=v||(v=d(t)),i=f.bind(null,n,r,!1),o=f.bind(null,n,r,!0)}else n=d(t),i=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=c(n[i]);a[o].references--}for(var r=s(e,t),d=0;d<n.length;d++){var u=c(n[d]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=r}}}},692:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bvid-convert"},[e.aid&&e.bvid?[n("div",{staticClass:"bvid-convert-item"},[e._v("\n      "+e._s(e.aid)+"\n      "),n("div",{staticClass:"bvid-convert-item-copy",attrs:{title:"复制链接"},on:{click:function(t){return e.copyLink("aid")}}},[n("VIcon",{attrs:{size:16,icon:e.aidCopied?"mdi-check":"mdi-link"}})],1)]),e._v(" "),n("div",{staticClass:"bvid-convert-item"},[e._v("\n      "+e._s(e.bvid)+"\n      "),n("div",{staticClass:"bvid-convert-item-copy",attrs:{title:"复制链接"},on:{click:function(t){return e.copyLink("bvid")}}},[n("VIcon",{attrs:{size:16,icon:e.bvidCopied?"mdi-check":"mdi-link"}})],1)])]:e._e()],2)};i._withStripped=!0;var o=coreApis.observer,r=coreApis.settings,a=n(200),c=coreApis.utils,s=coreApis.utils.title,d=n(457),u=coreApis.ui;const{options:l}=(0,r.getComponentSettings)("bvidConvert");var f;!function(e){e.Aid="aid",e.Bvid="bvid"}(f||(f={}));const p=[f.Aid,f.Bvid],v=[e=>{let{id:t,query:n}=e;return p.some((e=>n.includes(`${e}=`)))?`https://www.bilibili.com/video/${t}`:null},e=>{let{id:t}=e;return d.bangumiUrls.some((e=>(0,c.matchUrlPattern)(e)))?`https://www.bilibili.com/video/${t}`:null},e=>{let{id:t,url:n,query:i}=e;return n.replace(/\/[^\/]+$/,`/${t}`)+i}];var m=Vue.extend({components:{VIcon:u.VIcon},data:()=>({aid:"",aidCopied:!1,bvid:"",bvidCopied:!1}),async mounted(){(0,o.videoChange)((async()=>{this.aid=`av${unsafeWindow.aid}`,this.bvid=unsafeWindow.bvid;const e=await(0,a.select)(".av-link,.bv-link,.bvid-link");e&&(this.bvid=e.innerHTML.trim())}))},methods:{async copyLink(e){if(this[`${e}Copied`])return;const t={query:location.search,url:location.origin+location.pathname,id:this[e]},n=v.map((e=>e(t))).filter((e=>null!==e))[0];l.copyWithTitle?await navigator.clipboard.writeText(`${(0,s.getFriendlyTitle)()} ${n}`):await navigator.clipboard.writeText(n),this[`${e}Copied`]=!0,setTimeout((()=>this[`${e}Copied`]=!1),1e3)}}}),b=n(648),h=n.n(b),y=n(355),g=n.n(y),x={insert:"head",singleton:!1};h()(g(),x),g().locals;var C=function(e,t,n,i,o,r,a,c){var s,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=s):o&&(s=c?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(d.functional){d._injectStyles=s;var u=d.render;d.render=function(e,t){return s.call(t),u(e,t)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,s):[s]}return{exports:e,options:d}}(m,i,[],!1,null,null,null);C.options.__file="registry/lib/components/video/bvid-convert/BvidConvert.vue";var _=C.exports},200:function(e){"use strict";e.exports=coreApis.spinQuery},457:function(e){"use strict";e.exports=coreApis.utils.urls}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";n.d(i,{component:function(){return a}});var e=coreApis.componentApis.define,t=n(200),o=n(457);const r=(0,e.defineOptionsMetadata)({copyWithTitle:{defaultValue:!1,displayName:"复制链接时带上标题"}}),a=(0,e.defineComponentMetadata)({name:"bvidConvert",displayName:"BV 号转换",options:r,entry:none,description:{"zh-CN":"在功能面板中显示视频的 AV 号和 BV 号."},tags:[componentsTags.video,componentsTags.utils],widget:{component:()=>Promise.resolve().then(n.bind(n,692)).then((e=>e.default)),condition:t.hasVideo},urlInclude:o.videoAndBangumiUrls,commitHash:"3869a146c41e96d518645564b38ac3adf08a02cc",coreVersion:"2.5.1"})}(),i=i.component}()}));