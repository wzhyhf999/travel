(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["homePages-loading"],{1992:function(t,e,n){var r=n("a852");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("198d12fd",r,!0,{sourceMap:!1,shadowMode:!1})},"1faf":function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("c7eb")),o=r(n("1da1"));n("a9e3");var i=r(n("9edb")),s={name:"tn-nav-bar",mixins:[i.default],props:{zIndex:{type:Number,default:0},height:{type:Number,default:0},unit:{type:String,default:"px"},isBack:{type:Boolean,default:!0},backIcon:{type:String,default:"left"},backTitle:{type:String,default:"返回"},alpha:{type:Boolean,default:!1},fixed:{type:Boolean,default:!0},bottomShadow:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},beforeBack:{type:Function,default:null}},computed:{navBarStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.position="fixed"),t.zIndex=this.elZIndex,t},barClass:function(){var t="";return this.backgroundColorClass&&(t+=" ".concat(this.backgroundColorClass)),this.fontColorClass&&(t+="".concat(this.fontColorClass)),this.fixed&&(t+=" tn-custom-nav-bar__bar--fixed"),this.alpha&&(t+=" tn-custom-nav-bar__bar--alpha"),this.bottomShadow&&(t+=" tn-custom-nav-bar__bar--bottom-shadow"),t},barStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.paddingTop=this.statusBarHeight+"px"),this.backgroundColorClass||(t.backgroundColor=""!==this.backgroundColor?this.backgroundColor:"#FFFFFF"),!this.fontColorClass&&this.fontColor&&(t.color=this.fontColor),t.zIndex=this.elZIndex,t},contentStyle:function(){var t={};if(t.top=this.fixed?this.statusBarHeight+"px":"0px",t.height=0===this.height?this.customBarHeight-this.statusBarHeight+this.unit:this.height+this.unit,t.lineHeight=t.height,this.isBack)if(this.customBack){var e=2*(this.customBackStyleInfo.width+this.customBackStyleInfo.left);t.width="calc(100% - ".concat(e,"px)")}else t.width="calc(100% - 340rpx)";else t.width="100%";return t},elZIndex:function(){return this.zIndex?this.zIndex:this.$t.zIndex.navbar}},data:function(){return{statusBarHeight:0,customBarHeight:0,customBackStyleInfo:{width:86,height:32,left:15}}},mounted:function(){this.updateNavBarInfo()},created:function(){},methods:{updateNavBarInfo:function(){var t=this;return(0,o.default)((0,a.default)().mark((function e(){var n,r,o;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,r=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:o=e.sent,n=o.customBarHeight,r=o.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateNavBarInfo()}),10),e.abrupt("return");case 15:t&&t.$t.vuex("vuex_status_bar_height",r),t&&t.$t.vuex("vuex_custom_bar_height",n),t.customBarHeight=n,t.statusBarHeight=r;case 19:case"end":return e.stop()}}),e,null,[[3,11]])})))()},handlerBack:function(){var t=this;return(0,o.default)((0,a.default)().mark((function e(){var n;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.beforeBack||"function"!==typeof t.beforeBack){e.next=10;break}if(n=t.beforeBack.bind(t.$t.$parent.call(t))(),!n||"function"!==typeof n.then){e.next=7;break}return e.next=5,n.then((function(e){t.navBack()})).catch((function(t){}));case 5:e.next=8;break;case 7:!0===n&&t.navBack();case 8:e.next=11;break;case 10:t.navBack();case 11:case"end":return e.stop()}}),e)})))()},navBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})}}};e.default=s},"27aa":function(t,e,n){"use strict";n.r(e);var r=n("27e8"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},"27e8":function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("88ff")),o={name:"TemplateLoading",mixins:[a.default],data:function(){return{}},methods:{}};e.default=o},"2a24":function(t,e,n){"use strict";var r=n("311d"),a=n.n(r);a.a},"30f1":function(t,e,n){"use strict";n.r(e);var r=n("c30a"),a=n("27aa");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("2a24");var i=n("f0c5"),s=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"ed15db36",null,!1,r["a"],void 0);e["default"]=s.exports},"311d":function(t,e,n){var r=n("54e4");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("96d066b0",r,!0,{sourceMap:!1,shadowMode:!1})},"54e4":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-ed15db36]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-ed15db36]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-ed15db36]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}@-webkit-keyframes img-data-v-ed15db36{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(-1turn)}}@keyframes img-data-v-ed15db36{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}@-webkit-keyframes spin-data-v-ed15db36{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn)}}@keyframes spin-data-v-ed15db36{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes spin-reverse-data-v-ed15db36{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(0deg)}}@keyframes spin-reverse-data-v-ed15db36{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}.loader-wrapper[data-v-ed15db36]{position:absolute;width:100%;height:100%;z-index:10;overflow:hidden}.loader[data-v-ed15db36]{display:flex;position:relative;left:50%;top:50%;width:150px;height:150px;margin:-75px 0 0 -75px;border-radius:50%;border:3px solid transparent;border-top-color:#00ffc6;-webkit-animation:spin-data-v-ed15db36 1.7s linear infinite;animation:spin-data-v-ed15db36 1.7s linear infinite;z-index:11}.loader[data-v-ed15db36]:before{content:"";position:absolute;top:5px;left:5px;right:5px;bottom:5px;border-radius:50%;border:3px solid transparent;border-top-color:#fff00d;-webkit-animation:spin-reverse-data-v-ed15db36 5.6s linear infinite;animation:spin-reverse-data-v-ed15db36 5.6s linear infinite}.loader[data-v-ed15db36]:after{content:"";position:absolute;top:15px;left:15px;right:15px;bottom:15px;border-radius:50%;border:3px solid transparent;border-top-color:#fbbd12;-webkit-animation:spin-data-v-ed15db36 2.3s linear infinite;animation:spin-data-v-ed15db36 2.3s linear infinite}.logo-loading[data-v-ed15db36]{font-size:%?120?%;color:#01beff;margin:auto;align-items:center;display:table-cell;vertical-align:middle;text-align:center;-webkit-animation:img-data-v-ed15db36 1.7s linear infinite;animation:img-data-v-ed15db36 1.7s linear infinite}',""]),t.exports=e},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=n("7037")["default"];function a(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=a=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(j){d=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var a=e&&e.prototype instanceof v?e:v,o=Object.create(a.prototype),s=new I(r||[]);return i(o,"_invoke",{value:B(t,n,s)}),o}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=f;var p={};function v(){}function b(){}function g(){}var m={};d(m,u,(function(){return this}));var x=Object.getPrototypeOf,y=x&&x(x(E([])));y&&y!==n&&o.call(y,u)&&(m=y);var w=g.prototype=v.prototype=Object.create(m);function _(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var n;i(this,"_invoke",{value:function(a,i){function s(){return new e((function(n,s){(function n(a,i,s,u){var c=h(t[a],t,i);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==r(d)&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,s,u)}),(function(t){n("throw",t,s,u)})):e.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,u)}))}u(c.arg)})(a,i,n,s)}))}return n=n?n.then(s,s):s()}})}function B(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=C(i,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function C(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var a=h(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return b.prototype=g,i(w,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:b,configurable:!0}),b.displayName=d(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,d(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},_(k.prototype),d(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new k(f(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(w),d(w,l,"Generator"),d(w,u,(function(){return this})),d(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=E,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=a,t.exports.__esModule=!0,t.exports["default"]=t.exports},"88ff":function(t,e,n){var r=n("7ec2").default,a=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index"})}else uni.reLaunch({url:"/pages/index"})},updateCustomBarInfo:function(){var t=this;return a(r().mark((function e(){var n,a,o;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,a=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:o=e.sent,n=o.customBarHeight,a=o.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$t.vuex("vuex_status_bar_height",a),t.$t.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},"9edb":function(t,e,n){n("a9e3"),t.exports={data:function(){},props:{backgroundColor:{type:String,default:""},fontColor:{type:String,default:""},fontSize:{type:Number,default:0},fontUnit:{type:String,default:"rpx"}},computed:{backgroundColorStyle:function(){return this.$t.color.getBackgroundColorStyle(this.backgroundColor)},backgroundColorClass:function(){return this.$t.color.getBackgroundColorInternalClass(this.backgroundColor)},fontColorStyle:function(){return this.$t.color.getFontColorStyle(this.fontColor)},fontColorClass:function(){return this.$t.color.getFontColorInternalClass(this.fontColor)},fontSizeStyle:function(){return this.$t.string.getLengthUnitValue(this.fontSize,this.fontUnit)}},methods:{}}},a852:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tn-custom-nav-bar[data-v-1863a3a8]{display:block;position:relative}.tn-custom-nav-bar__bar[data-v-1863a3a8]{display:flex;position:relative;align-items:center;min-height:%?100?%;justify-content:space-between;min-height:0;box-shadow:%?0?% %?0?% %?0?%;z-index:9999}.tn-custom-nav-bar__bar--fixed[data-v-1863a3a8]{position:fixed;width:100%;top:0}.tn-custom-nav-bar__bar--alpha[data-v-1863a3a8]{background:transparent!important;box-shadow:none!important}.tn-custom-nav-bar__bar--bottom-shadow[data-v-1863a3a8]{box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.05)}.tn-custom-nav-bar__bar__action[data-v-1863a3a8]{display:flex;align-items:center;height:100%;justify-content:center;max-width:100%}.tn-custom-nav-bar__bar__action--nav-back[data-v-1863a3a8]{\n  /* position: absolute; */\n  /* top: 50%; */\n  /* left: 20rpx; */\n  /* margin-top: -15rpx; */padding:%?20?%;font-size:%?38?%;line-height:100%}.tn-custom-nav-bar__bar__action--nav-back-text[data-v-1863a3a8]{padding:%?20?% %?20?% %?20?% %?0?%}.tn-custom-nav-bar__bar__content[data-v-1863a3a8]{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:auto;font-size:%?32?%;cursor:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}',""]),t.exports=e},a884:function(t,e,n){"use strict";var r=n("1992"),a=n.n(r);a.a},aa86:function(t,e,n){"use strict";n.r(e);var r=n("ea6c"),a=n("b1ec");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("a884");var i=n("f0c5"),s=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"1863a3a8",null,!1,r["a"],void 0);e["default"]=s.exports},b1ec:function(t,e,n){"use strict";n.r(e);var r=n("1faf"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},c30a:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={tnNavBar:n("aa86").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-loading"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"}),n("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),n("v-uni-view",{staticClass:"loader-wrapper"},[n("v-uni-view",{staticClass:"loader"},[n("v-uni-view",{staticClass:"logo-loading tn-icon-logo-tuniao tn-text-shadow-aquablue"})],1)],1)],1)},o=[]},c973:function(t,e,n){function r(t,e,n,r,a,o,i){try{var s=t[o](i),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,a)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function s(t){r(i,a,o,s,u,"next",t)}function u(t){r(i,a,o,s,u,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},ea6c:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-custom-nav-bar-class tn-custom-nav-bar",style:[t.navBarStyle]},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__bar",class:[t.barClass],style:[t.barStyle]},[t.isBack?n("v-uni-view",[t.customBack?n("v-uni-view",[n("v-uni-view",{style:{width:t.customBackStyleInfo.width+"px",height:t.customBackStyleInfo.height+"px",marginLeft:t.customBackStyleInfo.left+"px"}},[t._t("back")],2)],1):n("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlerBack.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back",class:["tn-icon-"+t.backIcon]}),t.backTitle?n("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back-text"},[t._v(t._s(t.backTitle))]):t._e()],1)],1):t._e(),n("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__content",style:[t.contentStyle]},[t._t("default")],2),n("v-uni-view",[t._t("right")],2)],1)],1)},a=[]}}]);