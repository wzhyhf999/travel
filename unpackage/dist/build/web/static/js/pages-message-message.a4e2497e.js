(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-message-message"],{"1a1c":function(t,e,n){"use strict";var r=n("cdd6"),i=n.n(r);i.a},"39ee":function(t,e,n){"use strict";n("7a82");var r=n("4a46").default,i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d81d");var o=i(n("f07e")),a=i(n("c964")),s=r(n("88ff")),c={name:"TemplateMessage",mixins:[s.default],data:function(){return{show1:!1,liked:35,comment:52,system:99,username:uni.getStorageSync("username"),friendsList:[],toUserList:[],options:[{icon:"star",style:{backgroundColor:"#FFA726",width:"80rpx",height:"80rpx",margin:"0 12rpx",borderRadius:"100rpx"}},{icon:"delete",style:{backgroundColor:"#E83A30",width:"80rpx",height:"80rpx",margin:"0 12rpx",borderRadius:"100rpx"}}]}},created:function(){this.getFriendList()},methods:{getFriendList:function(){var t=this;return(0,a.default)((0,o.default)().mark((function e(){var n,r;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.$http.get("/follow/common?userId="+uni.getStorageSync("userId"));case 2:n=e.sent,r=n.data,1===r.code&&(t.friendsList=r.data.users,t.toUserList=r.data.users.map((function(t){return t.id})));case 5:case"end":return e.stop()}}),e)})))()},getLastMessage:function(){var t=this;return(0,a.default)((0,o.default)().mark((function e(){var n,r,i;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={from:uni.getStorageSync("userId"),toIds:t.toUserList},e.next=3,uni.$http.post("/message/getLastMessage",n);case 3:r=e.sent,i=r.data,console.log(i.data);case 6:case"end":return e.stop()}}),e)})))()},handlePublishTimeDesc:function(t){var e=new Date,n=new Date(t),r=e.getTime()-n.getTime(),i=Math.floor(r/6048e5),o=Math.floor(r/864e5),a=Math.floor(r/36e5),s=Math.floor(r/6e4);return i>0?t:o<7&&o>0?o+"天前":a<24&&a>0?a+"小时前":s+"分钟前"},goToChat:function(t,e,n){uni.navigateTo({url:"/minePages/chat/chat?username="+t+"&toUserId="+n+"&avatar="+e})},clear:function(){this.liked=0,this.comment=0,this.system=0,this.show1=!1},showModal:function(t){this.openModal()},openModal:function(){this.show1=!0}}};e.default=c},"63ef":function(t,e,n){"use strict";n.r(e);var r=n("39ee"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},8893:function(t,e,n){"use strict";n.r(e);var r=n("ab0d"),i=n("63ef");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("1a1c");var a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"8a5c79f0",null,!1,r["a"],void 0);e["default"]=s.exports},"88ff":function(t,e,n){var r=n("9ffb").default,i=n("9705").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index"})}else uni.reLaunch({url:"/pages/index"})},updateCustomBarInfo:function(){var t=this;return i(r().mark((function e(){var n,i,o;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,i=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:o=e.sent,n=o.customBarHeight,i=o.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$t.vuex("vuex_status_bar_height",i),t.$t.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},9705:function(t,e,n){function r(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,c,"next",t)}function c(t){r(a,i,o,s,c,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},"9ffb":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=n("62f5")["default"];function i(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=i=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(O){f=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var i=e&&e.prototype instanceof p?e:p,o=Object.create(i.prototype),s=new j(r||[]);return a(o,"_invoke",{value:k(t,n,s)}),o}function v(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=d;var h={};function p(){}function g(){}function m(){}var x={};f(x,c,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(M([])));b&&b!==n&&o.call(b,c)&&(x=b);var y=m.prototype=p.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){var n;a(this,"_invoke",{value:function(i,a){function s(){return new e((function(n,s){(function n(i,a,s,c){var u=v(t[i],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==r(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)})(i,a,n,s)}))}return n=n?n.then(s,s):s()}})}function k(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return T()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=v(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=v(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function M(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:T}}function T(){return{value:void 0,done:!0}}return g.prototype=m,a(y,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:g,configurable:!0}),g.displayName=f(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,l,"GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},_(C.prototype),f(C.prototype,u,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new C(d(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(y),f(y,l,"Generator"),f(y,c,(function(){return this})),f(y,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=M,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=i,t.exports.__esModule=!0,t.exports["default"]=t.exports},ab0d:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={tnNavBar:n("aa86").default,tnBadge:n("8eb7").default,tnModal:n("ca15").default,tnButton:n("e6e0").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-message"},[n("tn-nav-bar",{attrs:{fixed:!0,bottomShadow:!1,backTitle:" "}},[n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"tn-text-lg"},[t._v("消息")]),n("v-uni-text",{staticClass:"tn-text-xl tn-padding-left-sm tn-icon-group-circle"})],1)],1),n("v-uni-view",{staticClass:"tn-flex tn-message-fixed",style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-margin-xs tn-radius"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-cyan tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-praise-fill"},[n("tn-badge",{attrs:{backgroundColor:"#E72F8C",fontColor:"#FFFFFF",absolute:!0,fontSize:16}},[n("v-uni-text",[t._v(t._s(t.liked))])],1)],1)],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-center"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("点赞")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-margin-xs tn-radius"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orange tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-topics-fill"},[n("tn-badge",{attrs:{backgroundColor:"#E72F8C",fontColor:"#FFFFFF",absolute:!0,fontSize:16}},[n("v-uni-text",[t._v(t._s(t.comment))])],1)],1)],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-center"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("评论")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-margin-xs tn-radius"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-notice-fill"},[n("tn-badge",{attrs:{backgroundColor:"#E72F8C",fontColor:"#FFFFFF",absolute:!0,fontSize:16}},[n("v-uni-text",[t._v(t._s(t.system))])],1)],1)],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-center"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("系统")])],1)],1)],1)],1),n("tn-modal",{attrs:{custom:!0},model:{value:t.show1,callback:function(e){t.show1=e},expression:"show1"}},[n("v-uni-view",{staticClass:"custom-modal-content"},[n("v-uni-view",{staticClass:"tn-text-center tn-padding-top-sm tn-text-xxl tn-text-bold"},[t._v("提 示")]),n("v-uni-view",{staticClass:"tn-text-center tn-padding-top tn-text-lg tn-color-gray"},[t._v("确定将所有消息标为已读吗？")]),n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-margin-top-xl"},[n("v-uni-view",{staticClass:"tn-flex-1 justify-content-item tn-margin-xs tn-text-center"},[n("tn-button",{attrs:{backgroundColor:"#00FFC6",padding:"40rpx 0",width:"90%",shadow:!0,fontBold:!0,shape:"round"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show1=!1}}},[n("v-uni-text",{staticClass:"tn-color-black"},[t._v("取 消")])],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 justify-content-item tn-margin-xs tn-text-center"},[n("tn-button",{attrs:{backgroundColor:"#FFF00D",padding:"40rpx 0",width:"90%",shadow:!0,fontBold:!0,shape:"round"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"tn-color-black"},[t._v("确 定")])],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"tn-safe-area-inset-bottom tn-margin-bottom-sm",staticStyle:{"margin-top":"260rpx"},style:{paddingTop:t.vuex_custom_bar_height+"px"}},t._l(t.friendsList,(function(e){return n("v-uni-view",{key:e.id,staticClass:"tn-flex tn-flex-row-between tn-flex-col-center tn-padding",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goToChat(e.username,e.avatar,e.id)}}},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"logo-pic"},[n("v-uni-view",{staticClass:"logo-image"},[n("v-uni-view",{staticClass:"tn-shadow-blur",style:"background-image:url("+e.avatar+");width: 110rpx;height: 110rpx;background-size: cover;"})],1)],1),n("v-uni-view",{staticClass:"tn-padding-right tn-color-black"},[n("v-uni-view",{staticClass:"tn-padding-right tn-padding-left-sm tn-text-lg tn-text-bold"},[t._v(t._s(e.username))])],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item"})],1)})),1)],1)},o=[]},cdd6:function(t,e,n){var r=n("e1ff");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("9d8dcfee",r,!0,{sourceMap:!1,shadowMode:!1})},e1ff:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */[data-v-8a5c79f0] .tn-custom-nav-bar__bar__action--nav-back.data-v-1748c37c{font-size:0!important}.tn-message-fixed[data-v-8a5c79f0]{position:fixed;background-color:#fff;box-shadow:%?0?% %?0?% %?30?% %?0?% rgba(0,0,0,.07);top:0;width:100%;transition:all .25s ease-out;z-index:100}\n/* 图标容器1 start */.icon1__item[data-v-8a5c79f0]{width:30%;background-color:#fff;border-radius:%?10?%;padding:%?30?%;margin:%?20?% %?10?%;-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;-webkit-transform-origin:center center;transform-origin:center center}.icon1__item--icon[data-v-8a5c79f0]{width:%?90?%;height:%?90?%;font-size:%?60?%;border-radius:50%;margin-bottom:%?18?%;position:relative;z-index:1}.icon1__item--icon[data-v-8a5c79f0]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg5.png)}\n/* 用户头像 start */.logo-image[data-v-8a5c79f0]{width:%?90?%;height:%?90?%;position:relative}.logo-pic[data-v-8a5c79f0]{background-size:cover;background-repeat:no-repeat;background-position:top;border-radius:50%;overflow:hidden}',""]),t.exports=e}}]);