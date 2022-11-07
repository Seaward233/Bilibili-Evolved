!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["video/danmaku/expand"]=n():e["video/danmaku/expand"]=n()}(self,(function(){return function(){"use strict";var e={d:function(n,o){for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})},o:function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}},n={};e.d(n,{component:function(){return c}});var o=coreApis.componentApis.define,t=coreApis.observer,a=coreApis.spinQuery,i=coreApis.utils,s=coreApis.utils.log,r=coreApis.utils.urls;const c=(0,o.defineComponentMetadata)({name:"expandDanmakuList",displayName:"展开弹幕列表",entry:async e=>{let{settings:{options:n}}=e;const o=(0,s.useScopedConsole)("展开弹幕列表");(0,t.videoChange)((async()=>{if(r.mediaListUrls.some((e=>(0,i.matchUrlPattern)(e)))&&n.ignoreMediaList)return;const e=await(async()=>{const e=await(0,a.select)(".bilibili-player-video-info-danmaku-number, .bpx-player-video-info-dm"),n=((null==e?void 0:e.textContent)??"").match(/\d+/);if(!n)return null;const o=parseInt(n[0]);return Number.isNaN(o)?null:o})();if(o.log(`当前弹幕量: ${e}`),null!==e&&e>n.maxDanmakuCount)return void o.log(`超过了最大弹幕数量 ${n.maxDanmakuCount}, 跳过展开`);const t=await(0,a.select)(".bui-collapse-wrap");if(t&&t.classList.contains("bui-collapse-wrap-folded")){const e=await(0,a.select)(".bui-collapse-header");null==e||e.click()}}))},tags:[componentsTags.video],description:{"zh-CN":"每次加载视频时自动展开弹幕列表, 如果弹幕装载量超过 `最大弹幕数量`, 则不展开以免对页面造成卡顿."},options:{ignoreMediaList:{defaultValue:!0,displayName:"合集类页面不自动展开"},maxDanmakuCount:{defaultValue:500,displayName:"最大弹幕数量"}},urlInclude:[...r.videoAndBangumiUrls,...r.mediaListUrls],commitHash:"3869a146c41e96d518645564b38ac3adf08a02cc",coreVersion:"2.5.1"});return n=n.component}()}));