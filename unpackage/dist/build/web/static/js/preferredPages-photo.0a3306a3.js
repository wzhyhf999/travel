(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["preferredPages-photo"],{"034a":function(t,e,a){"use strict";a.r(e);var n=a("cc32"),i=a("dc23");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("a61e");var s=a("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"e36ea314",null,!1,n["a"],void 0);e["default"]=r.exports},"0a86":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={tnNavBar:a("aa86").default,tnLazyLoad:a("034a").default},i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"template-photo"},[e("tn-nav-bar",{attrs:{fixed:!0}},[this._v("山庄相册")]),e("v-uni-view",{style:{paddingTop:this.vuex_custom_bar_height+"px"}},[e("v-uni-view",{staticClass:"content"},[this._l(this.list,(function(t,a){return[e("v-uni-view",{key:a+"_0",staticClass:"item"},[e("tn-lazy-load",{attrs:{index:a,image:t.src,threshold:-450,height:400,imgMode:"aspectFill"}})],1)]}))],2)],1)],1)},o=[]},"15a9":function(t,e,a){var n=a("9752");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("8bdc03c2",n,!0,{sourceMap:!1,shadowMode:!1})},1992:function(t,e,a){var n=a("a852");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("198d12fd",n,!0,{sourceMap:!1,shadowMode:!1})},"1faf":function(t,e,a){"use strict";a("7a82");var n=a("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("f07e")),o=n(a("c964"));a("a9e3");var s=n(a("9edb")),r={name:"tn-nav-bar",mixins:[s.default],props:{zIndex:{type:Number,default:0},height:{type:Number,default:0},unit:{type:String,default:"px"},isBack:{type:Boolean,default:!0},backIcon:{type:String,default:"left"},backTitle:{type:String,default:"返回"},alpha:{type:Boolean,default:!1},fixed:{type:Boolean,default:!0},bottomShadow:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},beforeBack:{type:Function,default:null}},computed:{navBarStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.position="fixed"),t.zIndex=this.elZIndex,t},barClass:function(){var t="";return this.backgroundColorClass&&(t+=" ".concat(this.backgroundColorClass)),this.fontColorClass&&(t+="".concat(this.fontColorClass)),this.fixed&&(t+=" tn-custom-nav-bar__bar--fixed"),this.alpha&&(t+=" tn-custom-nav-bar__bar--alpha"),this.bottomShadow&&(t+=" tn-custom-nav-bar__bar--bottom-shadow"),t},barStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.paddingTop=this.statusBarHeight+"px"),this.backgroundColorClass||(t.backgroundColor=""!==this.backgroundColor?this.backgroundColor:"#FFFFFF"),!this.fontColorClass&&this.fontColor&&(t.color=this.fontColor),t.zIndex=this.elZIndex,t},contentStyle:function(){var t={};if(t.top=this.fixed?this.statusBarHeight+"px":"0px",t.height=0===this.height?this.customBarHeight-this.statusBarHeight+this.unit:this.height+this.unit,t.lineHeight=t.height,this.isBack)if(this.customBack){var e=2*(this.customBackStyleInfo.width+this.customBackStyleInfo.left);t.width="calc(100% - ".concat(e,"px)")}else t.width="calc(100% - 340rpx)";else t.width="100%";return t},elZIndex:function(){return this.zIndex?this.zIndex:this.$t.zIndex.navbar}},data:function(){return{statusBarHeight:0,customBarHeight:0,customBackStyleInfo:{width:86,height:32,left:15}}},mounted:function(){this.updateNavBarInfo()},created:function(){},methods:{updateNavBarInfo:function(){var t=this;return(0,o.default)((0,i.default)().mark((function e(){var a,n,o;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.vuex_custom_bar_height,n=t.vuex_status_bar_height,a){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:o=e.sent,a=o.customBarHeight,n=o.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateNavBarInfo()}),10),e.abrupt("return");case 15:t&&t.$t.vuex("vuex_status_bar_height",n),t&&t.$t.vuex("vuex_custom_bar_height",a),t.customBarHeight=a,t.statusBarHeight=n;case 19:case"end":return e.stop()}}),e,null,[[3,11]])})))()},handlerBack:function(){var t=this;return(0,o.default)((0,i.default)().mark((function e(){var a;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.beforeBack||"function"!==typeof t.beforeBack){e.next=10;break}if(a=t.beforeBack.bind(t.$t.$parent.call(t))(),!a||"function"!==typeof a.then){e.next=7;break}return e.next=5,a.then((function(e){t.navBack()})).catch((function(t){}));case 5:e.next=8;break;case 7:!0===a&&t.navBack();case 8:e.next=11;break;case 10:t.navBack();case 11:case"end":return e.stop()}}),e)})))()},navBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})}}};e.default=r},4461:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("99af"),a("c975");var n={name:"tn-lazy-load",props:{index:{type:[String,Number],default:""},image:{type:String,default:""},imgMode:{type:String,default:"scaleToFill"},loadingImg:{type:String},errorImg:{type:String,default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODdDMjhENDYyQUQ2MTFFQTlDQ0VBODgxQjFFOEEyMEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODdDMjhENDcyQUQ2MTFFQTlDQ0VBODgxQjFFOEEyMEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4N0MyOEQ0NDJBRDYxMUVBOUNDRUE4ODFCMUU4QTIwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4N0MyOEQ0NTJBRDYxMUVBOUNDRUE4ODFCMUU4QTIwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhLwhikAAAAzUExURZWVldfX162t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"},threshold:{type:[Number,String],default:100},isEffect:{type:Boolean,default:!0},duration:{type:[String,Number],default:500},effect:{type:String,default:"ease-in-out"},height:{type:[String,Number],default:450},borderRadius:{type:String,default:""}},computed:{thresholdValue:function(){var t=uni.upx2px(Math.abs(this.threshold));return this.threshold<0?-t:t},lazyLoadItemStyle:function(){var t={};return t.opacity=Number(this.opacity),this.borderRadius&&(t.borderRadius=this.borderRadius),t.transition="opacity ".concat(this.time/1e3,"s ").concat(this.effect),t.height=this.$t.string.getLengthUnitValue(this.height),t},imageStyle:function(){var t={};return"string"===typeof this.height&&-1===this.height.indexOf("%")&&(t.height=this.$t.string.getLengthUnitValue(this.height)),t}},watch:{show:function(t){var e=this;this.effect&&(this.time=0,this.opacity=0,setTimeout((function(){e.time=e.duration,e.opacity=1}),30))},image:function(t){t?(this.init(),this.error=!1):this.error=!0}},data:function(){return{elIndex:this.$t.uuid(),show:!1,opacity:1,time:this.duration,loadStatus:"",error:!1}},created:function(){this.observer={},this.observerName="lazyLoadContentObserver"},mounted:function(){var t=this;this.$nextTick((function(){uni.$once("tOnLazyLoadReachBottom",(function(){t.show||(t.show=!0)}))})),setTimeout((function(){t.disconnectObserver(t.observerName);var e=uni.createIntersectionObserver(t);e.relativeToViewport({bottom:t.thresholdValue}).observe(".tn-lazy-load__item--".concat(t.elIndex),(function(e){e.intersectionRatio>0&&(t.show=!0,t.disconnectObserver(t.observerName))})),t[t.observerName]=e}),50)},methods:{init:function(){this.error=!1,this.loadStatus=""},handleImgClick:function(){var t="";t=!1===this.show?"lazyImg":!0===this.error?"errorImg":"realImg",this.$emit("click",{index:this.index,whichImg:t})},handleImgLoaded:function(){(this.loadStatus="")?this.loadStatus="lazyed":"lazyed"==this.loadStatus&&(this.loadStatus="loaded",this.$emit("loaded",this.index))},handleErrorImgLoaded:function(){this.$emit("error",this.index)},handleImgError:function(){this.error=!0},disconnectObserver:function(t){var e=this[t];e&&e.disconnect()}}};e.default=n},5919:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("14d9");var n={name:"TemplatePhoto",data:function(){return{status:"loadmore",list:[],data:[{src:"https://resource.tuniaokj.com/images/shop/bag1.jpg"},{src:"https://resource.tuniaokj.com/images/shop/bag2.jpg"},{src:"https://resource.tuniaokj.com/images/shop/banner1.jpg"},{src:"https://resource.tuniaokj.com/images/shop/banner2.jpg"},{src:"https://resource.tuniaokj.com/images/shop/banner3.jpg"},{src:"https://resource.tuniaokj.com/images/shop/card.jpg"},{src:"https://resource.tuniaokj.com/images/shop/phonecase2.jpg"},{src:"https://resource.tuniaokj.com/images/shop/computer1.jpg"},{src:"https://resource.tuniaokj.com/images/shop/computer2.jpg"},{src:"https://resource.tuniaokj.com/images/shop/content.jpg"},{src:"https://resource.tuniaokj.com/images/shop/cup1.jpg"},{src:"https://resource.tuniaokj.com/images/shop/cup2.jpg"},{src:"https://resource.tuniaokj.com/images/shop/office.jpg"},{src:"https://resource.tuniaokj.com/images/shop/phonecase1.jpg"},{src:"https://resource.tuniaokj.com/images/shop/phonecase2.jpg"},{src:"https://resource.tuniaokj.com/images/shop/pillow.jpg"},{src:"https://resource.tuniaokj.com/images/shop/computer1.jpg"},{src:"https://resource.tuniaokj.com/images/shop/pillow2.jpg"},{src:"https://resource.tuniaokj.com/images/shop/prototype1.jpg"},{src:"https://resource.tuniaokj.com/images/shop/prototype2.jpg"},{src:"https://resource.tuniaokj.com/images/shop/sticker.jpg"},{src:"https://resource.tuniaokj.com/images/shop/watch1.jpg"},{src:"https://resource.tuniaokj.com/images/shop/watch2.jpg"},{src:"https://resource.tuniaokj.com/images/shop/pillow.jpg"}]}},onLoad:function(){this.getData()},onReachBottom:function(){uni.$emit("tOnLazyLoadReachBottom"),this.getData()},methods:{getData:function(){var t=this,e=0;this.status="loading",setTimeout((function(){for(var a=0;a<30;a++)e=t.$t.number.randomInt(0,t.data.length-1),t.list.push({src:t.data[e].src});t.status="loadmore"}),1500)}}};e.default=n},"5b59":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tn-lazy-load__item[data-v-e36ea314]{background-color:#f4f4f4;overflow:hidden}.tn-lazy-load__item__image[data-v-e36ea314]{display:block;width:100%;-webkit-transform:transition3d(0,0,0);transform:transition3d(0,0,0);will-change:transform}',""]),t.exports=e},7799:function(t,e,a){"use strict";a.r(e);var n=a("0a86"),i=a("f297");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("b74b");var s=a("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"43559c5e",null,!1,n["a"],void 0);e["default"]=r.exports},"8d94":function(t,e,a){var n=a("5b59");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("0bd114a8",n,!0,{sourceMap:!1,shadowMode:!1})},9752:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-43559c5e]{display:flex;justify-content:space-between;flex-wrap:wrap;padding:%?30?%}.content .item[data-v-43559c5e]{border:%?1?% solid #fafafa;flex:0 0 %?335?%;height:%?400?%;margin-bottom:%?30?%;border-radius:%?10?%;overflow:hidden}',""]),t.exports=e},"9edb":function(t,e,a){a("a9e3"),t.exports={data:function(){},props:{backgroundColor:{type:String,default:""},fontColor:{type:String,default:""},fontSize:{type:Number,default:0},fontUnit:{type:String,default:"rpx"}},computed:{backgroundColorStyle:function(){return this.$t.color.getBackgroundColorStyle(this.backgroundColor)},backgroundColorClass:function(){return this.$t.color.getBackgroundColorInternalClass(this.backgroundColor)},fontColorStyle:function(){return this.$t.color.getFontColorStyle(this.fontColor)},fontColorClass:function(){return this.$t.color.getFontColorInternalClass(this.fontColor)},fontSizeStyle:function(){return this.$t.string.getLengthUnitValue(this.fontSize,this.fontUnit)}},methods:{}}},a61e:function(t,e,a){"use strict";var n=a("8d94"),i=a.n(n);i.a},a852:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tn-custom-nav-bar[data-v-1863a3a8]{display:block;position:relative}.tn-custom-nav-bar__bar[data-v-1863a3a8]{display:flex;position:relative;align-items:center;min-height:%?100?%;justify-content:space-between;min-height:0;box-shadow:%?0?% %?0?% %?0?%;z-index:9999}.tn-custom-nav-bar__bar--fixed[data-v-1863a3a8]{position:fixed;width:100%;top:0}.tn-custom-nav-bar__bar--alpha[data-v-1863a3a8]{background:transparent!important;box-shadow:none!important}.tn-custom-nav-bar__bar--bottom-shadow[data-v-1863a3a8]{box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.05)}.tn-custom-nav-bar__bar__action[data-v-1863a3a8]{display:flex;align-items:center;height:100%;justify-content:center;max-width:100%}.tn-custom-nav-bar__bar__action--nav-back[data-v-1863a3a8]{\n  /* position: absolute; */\n  /* top: 50%; */\n  /* left: 20rpx; */\n  /* margin-top: -15rpx; */padding:%?20?%;font-size:%?38?%;line-height:100%}.tn-custom-nav-bar__bar__action--nav-back-text[data-v-1863a3a8]{padding:%?20?% %?20?% %?20?% %?0?%}.tn-custom-nav-bar__bar__content[data-v-1863a3a8]{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:auto;font-size:%?32?%;cursor:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}',""]),t.exports=e},a884:function(t,e,a){"use strict";var n=a("1992"),i=a.n(n);i.a},aa86:function(t,e,a){"use strict";a.r(e);var n=a("ea6c"),i=a("b1ec");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("a884");var s=a("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"1863a3a8",null,!1,n["a"],void 0);e["default"]=r.exports},b1ec:function(t,e,a){"use strict";a.r(e);var n=a("1faf"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},b74b:function(t,e,a){"use strict";var n=a("15a9"),i=a.n(n);i.a},cc32:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tn-lazy-load-class tn-lazy-load"},[a("v-uni-view",{staticClass:"tn-lazy-load__item",class:["tn-lazy-load__item--"+t.elIndex],style:[t.lazyLoadItemStyle]},[a("v-uni-view",{staticClass:"tn-lazy-load__item__content"},[t.error?a("v-uni-image",{staticClass:"tn-lazy-load__item__image tn-lazy-load__item__image--error",style:[t.imageStyle],attrs:{src:t.errorImg,mode:t.imgMode},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.handleErrorImgLoaded.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleImgClick.apply(void 0,arguments)}}}):a("v-uni-image",{staticClass:"tn-lazy-load__item__image",style:[t.imageStyle],attrs:{src:t.show?t.image:t.loadingImg,mode:t.imgMode},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.handleImgLoaded.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.handleImgError.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleImgClick.apply(void 0,arguments)}}})],1)],1)],1)},i=[]},dc23:function(t,e,a){"use strict";a.r(e);var n=a("4461"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},ea6c:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tn-custom-nav-bar-class tn-custom-nav-bar",style:[t.navBarStyle]},[a("v-uni-view",{staticClass:"tn-custom-nav-bar__bar",class:[t.barClass],style:[t.barStyle]},[t.isBack?a("v-uni-view",[t.customBack?a("v-uni-view",[a("v-uni-view",{style:{width:t.customBackStyleInfo.width+"px",height:t.customBackStyleInfo.height+"px",marginLeft:t.customBackStyleInfo.left+"px"}},[t._t("back")],2)],1):a("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlerBack.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back",class:["tn-icon-"+t.backIcon]}),t.backTitle?a("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back-text"},[t._v(t._s(t.backTitle))]):t._e()],1)],1):t._e(),a("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__content",style:[t.contentStyle]},[t._t("default")],2),a("v-uni-view",[t._t("right")],2)],1)],1)},i=[]},f297:function(t,e,a){"use strict";a.r(e);var n=a("5919"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a}}]);