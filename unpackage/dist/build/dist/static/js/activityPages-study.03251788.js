(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["activityPages-study"],{"0192":function(t,e,n){var r=n("4205");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("dcb6fe08",r,!0,{sourceMap:!1,shadowMode:!1})},"126a":function(t,e,n){"use strict";n.r(e);var r=n("f721"),a=n("26c3");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("ccd7");var o=n("f0c5"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"43fe7874",null,!1,r["a"],void 0);e["default"]=s.exports},"26c3":function(t,e,n){"use strict";n.r(e);var r=n("3320"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"2ba2":function(t,e,n){"use strict";n.r(e);var r=n("90c2"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},3320:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("ac1f"),n("5319"),n("00b4");var r={name:"tn-avatar-group",props:{lists:{type:Array,default:function(){return[]}},shape:{type:String,default:"circle"},size:{type:[Number,String],default:""},imgMode:{type:String,default:"aspectFill"},gap:{type:Number,default:.4}},computed:{itemStyle:function(){var t=this;return function(e){var n={};if(t._checkSizeIsInline())switch(t.size){case"sm":n.marginLeft=0!=e?"".concat(-48*t.gap,"rpx"):"";break;case"lg":n.marginLeft=0!=e?"".concat(-96*t.gap,"rpx"):"";break;case"xl":n.marginLeft=0!=e?"".concat(-128*t.gap,"rpx"):"";break}else{var r=Number(t.size.replace(/(px|rpx)/g,""))||64;n.marginLeft=0!=e?"-".concat(r*t.gap,"rpx"):""}return n}}},data:function(){return{}},methods:{_checkSizeIsInline:function(){return!!/(xs|sm|md|lg|xl|xxl)/.test(this.size)}}};e.default=r},4205:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tn-avatar-group[data-v-43fe7874]{display:flex;flex-direction:row}.tn-avatar-group__item[data-v-43fe7874]{position:relative}',""]),t.exports=e},4436:function(t,e,n){"use strict";var r=n("e86e"),a=n.n(r);a.a},4693:function(t,e,n){"use strict";n.r(e);var r=n("87f5"),a=n("2ba2");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("c70d");var o=n("f0c5"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"40d88c0a",null,!1,r["a"],void 0);e["default"]=s.exports},"5cd7":function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("88ff")),i={name:"TemplateStudy",mixins:[a.default],data:function(){return{cardCur:0,swiperList:[{id:0,type:"image",title:"一起学习",name:"文案之类的",text:"小文案小文案小文案",url:"https://resource.tuniaokj.com/images/swiper/banner-animate3.png",pngurl:"https://resource.tuniaokj.com/images/login/1/login_top3.png"},{id:1,type:"image",title:"图鸟南南",name:"欢迎加入东东们",text:"如果你也有不错的作品",url:"https://resource.tuniaokj.com/images/swiper/banner-animate2.png",pngurl:"https://resource.tuniaokj.com/images/swiper/c4d1.png"},{id:2,type:"image",title:"图鸟西西",name:"一起玩转scss",text:"用最少的代码做最骚的效果",url:"https://resource.tuniaokj.com/images/swiper/deer.jpg",pngurl:"https://resource.tuniaokj.com/images/swiper/c4d1.png"},{id:3,type:"image",title:"图鸟北北",name:"微信号 tnkewo",text:"商业合作请联系作者",url:"https://resource.tuniaokj.com/images/swiper/banner-animate.png",pngurl:"https://resource.tuniaokj.com/images/swiper/c4d1.png"},{id:4,type:"image",title:"图鸟猪猪",name:"努力成为大佬",text:"一起加油吖",url:"https://resource.tuniaokj.com/images/shop/banner2.jpg",pngurl:"https://resource.tuniaokj.com/images/swiper/c4d1.png"}],groupList:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg"}]}},methods:{cardSwiper:function(t){this.cardCur=t.detail.current}}};e.default=i},7539:function(t,e,n){"use strict";n.r(e);var r=n("5cd7"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},7705:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={tnNavBar:n("aa86").default,tnAvatarGroup:n("126a").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-study tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"}),n("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),n("v-uni-swiper",{staticClass:"card-swiper",attrs:{circular:!0,autoplay:!0,duration:"500",interval:"18000"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.cardSwiper.apply(void 0,arguments)}}},t._l(t.swiperList,(function(e,r){return n("v-uni-swiper-item",{key:r,class:t.cardCur==r?"cur":""},[n("v-uni-view",{staticClass:"swiper-item image-banner"},["image"==e.type?n("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e()],1),n("v-uni-view",{staticClass:"swiper-item2 image-banner"},["image"==e.type?n("v-uni-image",{staticClass:"png-sussuspension",attrs:{src:e.pngurl,mode:"heightFix"}}):t._e()],1),n("v-uni-view",{staticClass:"swiper-item-text"},[n("v-uni-view",{staticClass:"text-sussuspension"},[n("v-uni-view",{staticClass:"tn-text-xxl tn-text-bold tn-color-white"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"tn-text-bold tn-color-white tn-padding-top-xs",staticStyle:{"font-size":"60rpx"}},[t._v(t._s(e.name))]),n("v-uni-view",{staticClass:"tn-text-sm tn-text-bold tn-color-white tn-padding-top-sm tn-padding-bottom-sm"},[t._v(t._s(e.text))])],1)],1)],1)})),1),n("v-uni-view",{staticClass:"indication"},[t._l(t.swiperList,(function(e,r){return[n("v-uni-view",{key:r+"_0",staticClass:"spot",class:t.cardCur==r?"active":""})]}))],2),n("v-uni-view",{staticClass:"tn-flex tn-margin-top"},[n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-radius tn-margin-xs"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-gloves-fill"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-df tn-text-center tn-padding-top-xs"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("学习")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-radius tn-margin-xs"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-live-stream-fill"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-df tn-text-center tn-padding-top-xs"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("视频")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-radius tn-margin-xs"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orange tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-image-text-fill"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-df tn-text-center tn-padding-top-xs"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("日志")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-radius tn-margin-xs"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-purple tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-topics-fill"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-df tn-text-center tn-padding-top-xs"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("话题")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-radius tn-margin-xs"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-cyan tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-chemistry"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-df tn-text-center tn-padding-top-xs"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("沉淀")])],1)],1)],1)],1),t._l(6,(function(e,r){return n("v-uni-view",{key:r,staticClass:"tn-margin study-shadow"},[n("v-uni-view",{staticClass:"tn-padding tn-flex tn-flex-col-center"},[n("v-uni-view",{staticClass:"tn-tag-content tn-shadow-blur tn-cool-bg-color-15 tn-margin-right tn-text-sm tn-text-bold"},[n("v-uni-text",{staticClass:"tn-padding-right-sm"},[t._v("#")]),t._v("前端")],1),n("v-uni-view",{staticClass:"tn-text-bold tn-text-lg"},[t._v("Flex前端基础布局知识一览")])],1),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between tn-padding"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-2 justify-content-item tn-text-bold tn-text-lg"},[n("v-uni-view",{},[n("tn-avatar-group",{attrs:{lists:t.groupList,size:"sm"}})],1),n("v-uni-view",{staticClass:"tn-padding-left-sm"},[n("v-uni-text",[t._v("286人已学习")])],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 justify-content-item tn-text-lg tn-text-right"},[n("v-uni-view",{staticClass:"tn-padding-bottom-xs tn-color-gray"},[t._v("免费")])],1)],1)],1)}))],2)},i=[]},"7bcd":function(t,e,n){"use strict";n.r(e);var r=n("7705"),a=n("7539");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("4436");var o=n("f0c5"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"00c267dc",null,!1,r["a"],void 0);e["default"]=s.exports},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=n("7037")["default"];function a(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=a=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(O){d=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var a=e&&e.prototype instanceof g?e:g,i=Object.create(a.prototype),s=new z(r||[]);return o(i,"_invoke",{value:C(t,n,s)}),i}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=f;var v={};function g(){}function h(){}function m(){}var b={};d(b,c,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(I([])));x&&x!==n&&i.call(x,c)&&(b=x);var y=m.prototype=g.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var n;o(this,"_invoke",{value:function(a,o){function s(){return new e((function(n,s){(function n(a,o,s,c){var l=p(t[a],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==r(d)&&i.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)})(a,o,n,s)}))}return n=n?n.then(s,s):s()}})}function C(t,e,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return E()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var s=S(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=p(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function S(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=p(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function I(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:E}}function E(){return{value:void 0,done:!0}}return h.prototype=m,o(y,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:h,configurable:!0}),h.displayName=d(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,d(t,u,"GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},_(k.prototype),d(k.prototype,l,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new k(f(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(y),d(y,u,"Generator"),d(y,c,(function(){return this})),d(y,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=I,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},e}t.exports=a,t.exports.__esModule=!0,t.exports["default"]=t.exports},"867a":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-00c267dc]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-00c267dc]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-00c267dc]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\n/* 内容 */.study-wrap[data-v-00c267dc]{position:relative;z-index:1;margin-top:%?-90?%}\n/* 阴影 start*/.study-shadow[data-v-00c267dc]{border-radius:%?15?%;box-shadow:%?0?% %?0?% %?50?% %?0?% rgba(0,0,0,.07)}\n/* 悬浮 */.png-sussuspension[data-v-00c267dc]{-webkit-animation:suspension-data-v-00c267dc 3s ease-in-out infinite;animation:suspension-data-v-00c267dc 3s ease-in-out infinite}@-webkit-keyframes suspension-data-v-00c267dc{0%, 100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-.8rem,1rem);transform:translate(-.8rem,1rem)}}@keyframes suspension-data-v-00c267dc{0%, 100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-.8rem,1rem);transform:translate(-.8rem,1rem)}}.text-sussuspension[data-v-00c267dc]{-webkit-animation:suspension2-data-v-00c267dc 4s ease-in-out infinite;animation:suspension2-data-v-00c267dc 4s ease-in-out infinite}@-webkit-keyframes suspension2-data-v-00c267dc{0%, 100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(1rem);transform:translateY(1rem)}}@keyframes suspension2-data-v-00c267dc{0%, 100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(1rem);transform:translateY(1rem)}}\n/* 轮播视觉差 start */.card-swiper[data-v-00c267dc]{height:%?800?%!important}.card-swiper uni-swiper-item[data-v-00c267dc]{width:%?750?%!important;left:%?0?%;box-sizing:border-box;overflow:initial}.card-swiper uni-swiper-item .swiper-item[data-v-00c267dc]{width:100%;display:block;height:100%;-webkit-transform:scale(1);transform:scale(1);transition:all .2s ease-in 0s;will-change:transform;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item[data-v-00c267dc]{-webkit-transform:none;transform:none;transition:all .2s ease-in 0s;will-change:transform}.card-swiper uni-swiper-item .swiper-item2[data-v-00c267dc]{margin-top:%?-540?%;width:100%;display:block;height:100%;border-radius:%?0?%;-webkit-transform:translate(%?140?%,%?20?%) scale(.3);transform:translate(%?140?%,%?20?%) scale(.3);transition:all .6s ease 0s;will-change:transform;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item2[data-v-00c267dc]{margin-top:%?-650?%;width:100%;-webkit-transform:translate(%?180?%,%?0?%) scale(.5);transform:translate(%?180?%,%?0?%) scale(.5);transition:all .6s ease 0s;will-change:transform}.card-swiper uni-swiper-item .swiper-item-text[data-v-00c267dc]{margin-top:%?-550?%;width:100%;display:block;height:50%;border-radius:%?10?%;-webkit-transform:translate(%?100?%,%?-60?%) scale(.9);transform:translate(%?100?%,%?-60?%) scale(.9);transition:all .6s ease 0s;will-change:transform;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item-text[data-v-00c267dc]{margin-top:%?-610?%;width:100%;-webkit-transform:translate(%?0?%,%?60?%) scale(.9);transform:translate(%?0?%,%?60?%) scale(.9);transition:all .6s ease 0s;will-change:transform}.image-banner[data-v-00c267dc]{display:flex;align-items:center;justify-content:center}.image-banner uni-image[data-v-00c267dc]{width:100%;height:100%}\n/* 轮播指示点 start*/.indication[data-v-00c267dc]{z-index:9999;width:100%;height:%?36?%;position:absolute;display:flex;flex-direction:row;align-items:center;justify-content:center}.spot[data-v-00c267dc]{background-color:#fff;opacity:.6;width:%?10?%;height:%?10?%;border-radius:%?20?%;left:%?-265?%;top:%?-150?%;margin:0 %?8?%!important;position:relative}.spot.active[data-v-00c267dc]{opacity:1;width:%?30?%;background-color:#fff}\n/* 圆角*/.study-radius[data-v-00c267dc]{border-radius:%?15?%}\n/* 阴影*/.study-shadow[data-v-00c267dc]{box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.07)}\n/* 图标容器10 start */.icon10__item[data-v-00c267dc]{width:30%;background-color:#fff;border-radius:%?10?%;padding:%?30?%;margin:%?20?% %?10?%;-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;will-change:transform;-webkit-transform-origin:center center;transform-origin:center center}.icon10__item--icon[data-v-00c267dc]{width:%?84?%;height:%?65?%;font-size:%?45?%;border-radius:%?200?%;margin-bottom:%?18?%;position:relative;z-index:1}.icon10__item--icon[data-v-00c267dc]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg6.png)}\n/* 图标容器10 end */\n/* 标签内容 start*/.tn-tag-content[data-v-00c267dc]{border-radius:%?8?% %?25?% %?25?% %?8?%;display:inline-block;line-height:%?35?%;padding:%?8?% %?25?%;color:hsla(0,0%,100%,.8)}',""]),t.exports=e},"87f5":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={tnBadge:n("8eb7").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-avatar-class tn-avatar",class:[t.backgroundColorClass,t.avatarClass],style:[t.avatarStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t.showImg?n("v-uni-image",{staticClass:"tn-avatar__img",class:[t.imgClass],attrs:{src:t.src,mode:t.imgMode||"aspectFill"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.loadImageError.apply(void 0,arguments)}}}):n("v-uni-view",{staticClass:"tn-avatar__text"},[t.text?n("v-uni-view",[t._v(t._s(t.text))]):n("v-uni-view",{class:["tn-icon-"+t.icon]})],1),t.badge&&(t.badgeIcon||t.badgeText)?n("tn-badge",{attrs:{radius:t.badgeSize,backgroundColor:t.badgeBgColor,fontColor:t.badgeColor,fontSize:t.badgeSize-8,absolute:!0,top:t.badgePosition[0],right:t.badgePosition[1]}},[t.badgeIcon&&""===t.badgeText?n("v-uni-view",[n("v-uni-view",{class:["tn-icon-"+t.badgeIcon]})],1):n("v-uni-view",[t._v(t._s(t.badgeText))])],1):t._e()],1)},i=[]},"88ff":function(t,e,n){var r=n("7ec2").default,a=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index"})}else uni.reLaunch({url:"/pages/index"})},updateCustomBarInfo:function(){var t=this;return a(r().mark((function e(){var n,a,i;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,a=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:i=e.sent,n=i.customBarHeight,a=i.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$t.vuex("vuex_status_bar_height",a),t.$t.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},"90c2":function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("99af"),n("ac1f"),n("00b4");var a=r(n("9edb")),i={mixins:[a.default],name:"tn-avatar",props:{index:{type:[Number,String],default:0},shape:{type:String,default:"circle"},size:{type:[Number,String],default:""},shadow:{type:Boolean,default:!1},border:{type:Boolean,default:!1},borderColor:{type:String,default:"rgba(0, 0, 0, 0.1)"},borderSize:{type:Number,default:2},src:{type:String,default:""},text:{type:String,default:""},icon:{type:String,default:""},imgMode:{type:String,default:"aspectFill"},badge:{type:Boolean,default:!1},badgeSize:{type:Number,default:0},badgeBgColor:{type:String,default:"#AAAAAA"},badgeColor:{type:String,default:"#FFFFFF"},badgeIcon:{type:String,default:""},badgeText:{type:String,default:""},badgePosition:{type:Array,default:function(){return[0,0]}}},data:function(){return{imgLoadError:!1}},computed:{showImg:function(){return""===this.text&&""===this.icon},avatarClass:function(){var t="";return t+=" tn-avatar--".concat(this.shape),this._checkSizeIsInline()&&(t+=" tn-avatar--".concat(this.size)),this.shadow&&(t+=" tn-avatar--shadow"),t},avatarStyle:function(){var t={};return this.backgroundColorStyle?t.background=this.backgroundColorStyle:this.shadow&&this.showImg&&(t.backgroundImage="url(".concat(this.src,")")),this.border&&(t.border="".concat(this.borderSize,"rpx solid ").concat(this.borderColor)),this._checkSizeIsInline()||(t.width=this.size,t.height=this.size),t},imgClass:function(){var t="";return t+=" tn-avatar__img--".concat(this.shape),t}},methods:{loadImageError:function(){this.imgLoadError=!0},click:function(){this.$emit("click",this.index)},_checkSizeIsInline:function(){return!!/^(xs|sm|md|lg|xl|xxl)$/.test(this.size)}}};e.default=i},"9edb":function(t,e,n){n("a9e3"),t.exports={data:function(){},props:{backgroundColor:{type:String,default:""},fontColor:{type:String,default:""},fontSize:{type:Number,default:0},fontUnit:{type:String,default:"rpx"}},computed:{backgroundColorStyle:function(){return this.$t.color.getBackgroundColorStyle(this.backgroundColor)},backgroundColorClass:function(){return this.$t.color.getBackgroundColorInternalClass(this.backgroundColor)},fontColorStyle:function(){return this.$t.color.getFontColorStyle(this.fontColor)},fontColorClass:function(){return this.$t.color.getFontColorInternalClass(this.fontColor)},fontSizeStyle:function(){return this.$t.string.getLengthUnitValue(this.fontSize,this.fontUnit)}},methods:{}}},b207:function(t,e,n){var r=n("e667e");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("17f01f3a",r,!0,{sourceMap:!1,shadowMode:!1})},c70d:function(t,e,n){"use strict";var r=n("b207"),a=n.n(r);a.a},c973:function(t,e,n){function r(t,e,n,r,a,i,o){try{var s=t[i](o),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(r,a)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function s(t){r(o,a,i,s,c,"next",t)}function c(t){r(o,a,i,s,c,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},ccd7:function(t,e,n){"use strict";var r=n("0192"),a=n.n(r);a.a},e667e:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tn-avatar[data-v-40d88c0a]{display:inline-flex;margin:0;padding:0;text-align:center;align-items:center;justify-content:center;background-color:#e6e6e6;white-space:nowrap;position:relative;width:%?64?%;height:%?64?%;z-index:1}.tn-avatar--sm[data-v-40d88c0a]{width:%?48?%;height:%?48?%}.tn-avatar--lg[data-v-40d88c0a]{width:%?96?%;height:%?96?%}.tn-avatar--xl[data-v-40d88c0a]{width:%?128?%;height:%?128?%}.tn-avatar--square[data-v-40d88c0a]{border-radius:%?10?%}.tn-avatar--circle[data-v-40d88c0a]{border-radius:%?5000?%}.tn-avatar--shadow[data-v-40d88c0a]{position:relative}.tn-avatar--shadow[data-v-40d88c0a]::after{content:" ";display:block;background:inherit;-webkit-filter:blur(%?10?%);filter:blur(%?10?%);position:absolute;width:100%;height:100%;top:%?10?%;left:%?10?%;z-index:-1;opacity:.4;-webkit-transform-origin:0 0;transform-origin:0 0;border-radius:inherit;-webkit-transform:scale(1);transform:scale(1)}.tn-avatar__img[data-v-40d88c0a]{width:100%;height:100%}.tn-avatar__img--square[data-v-40d88c0a]{border-radius:%?10?%}.tn-avatar__img--circle[data-v-40d88c0a]{border-radius:%?5000?%}.tn-avatar__text[data-v-40d88c0a]{display:flex;flex-direction:row;align-items:center;justify-content:center}',""]),t.exports=e},e86e:function(t,e,n){var r=n("867a");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("a89a0c32",r,!0,{sourceMap:!1,shadowMode:!1})},f721:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={tnAvatar:n("4693").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-avatar-group-class tn-avatar-group"},t._l(t.lists,(function(e,r){return n("v-uni-view",{key:r,staticClass:"tn-avatar-group__item",style:[t.itemStyle(r)]},[n("tn-avatar",{attrs:{src:e.src||"",text:e.text||"",icon:e.icon||"",size:t.size,shape:t.shape,imgMode:t.imgMode,border:!0,backgroundColor:"rgba(255, 255, 255, 0.4)",borderSize:4}})],1)})),1)},i=[]}}]);