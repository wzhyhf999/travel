(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["preferredPages-order"],{"163c":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("88ff")),o={name:"TemplateOrder",mixins:[r.default],data:function(){return{list:[{name:"全部"},{name:"待付款"},{name:"待发货",count:10},{name:"待收货"},{name:"待评价",count:5}],tabsIndex:0,swiperIndex:0,swiperTop:0,swiperHeight:0}},onLoad:function(){},onReady:function(){var t=this;this.$nextTick((function(){t.updateSwiperInfo()}))},methods:{updateSwiperInfo:function(){var t=this;this._tGetRect(".order__tabs").then((function(e){if(e){var i=uni.getSystemInfoSync();t.swiperTop=e.bottom-t.vuex_custom_bar_height,t.swiperHeight=i.safeArea.height-e.bottom+i.statusBarHeight}else setTimeout((function(){t.updateSwiperInfo()}),10)}))},tabsChange:function(t){this.swiperIndex=t},swiperTransition:function(t){this.$refs.tabs.setDx(t.detail.dx)},swiperAnimationFinish:function(t){var e=t.detail.current;this.$refs.tabs.setFinishCurrent(e),this.swiperIndex=e,this.tabsIndex=e}}};e.default=o},"1f15":function(t,e,i){var n=i("9769");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("34b4c2c2",n,!0,{sourceMap:!1,shadowMode:!1})},"603e":function(t,e,i){"use strict";var n=i("1f15"),r=i.n(n);r.a},"7d2d":function(t,e,i){"use strict";var n=i("8c21"),r=i.n(n);r.a},8288:function(t,e,i){"use strict";i.r(e);var n=i("fea2"),r=i("e632");for(var o in r)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("603e");var a=i("f0c5"),s=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"48e05212",null,!1,n["a"],void 0);e["default"]=s.exports},"84cd":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.template-order[data-v-3301abcd]{background-color:hsla(0,0%,96.9%,.8)}\n/* 自定义导航栏内容 start */.custom-nav[data-v-3301abcd]{height:100%}.custom-nav__back[data-v-3301abcd]{font-size:%?40?%;flex-basis:5%;padding:%?20?% %?40?% %?20?% %?30?%}.custom-nav__search[data-v-3301abcd]{flex-basis:55%;width:100%;height:100%}.custom-nav__search__box[data-v-3301abcd]{width:100%;height:60%;padding:%?28?% 0;margin:0 %?30?%;border-radius:%?60?%;font-size:%?24?%;background-color:#fff;border:%?1?% solid #f8f7f8}.custom-nav__search__icon[data-v-3301abcd]{padding-right:%?10?%;margin-left:%?20?%;font-size:%?30?%}.custom-nav__search__text[data-v-3301abcd]{color:#aaa}\n/* 自定义导航栏内容 end */.order[data-v-3301abcd]{\n  /* 导航栏 start */\n  /* 导航栏 end */\n  /* swiper start */\n  /* swiper end */\n  /* 订单内容 start */\n  /* 订单内容 end */}.order--wrap[data-v-3301abcd]{position:fixed;left:0;right:0;width:100%;background-color:inherit}.order__tabs[data-v-3301abcd]{position:absolute;top:0;left:0;right:0;background-color:inherit}.order__swiper[data-v-3301abcd]{position:absolute;left:0;right:0;width:100%;background-color:inherit}.order__item[data-v-3301abcd]{margin:%?20?%;padding:%?36?% %?26?%;background-color:#fff;border-radius:%?18?%\n  /* 头部 start */\n  /* 头部 end */\n  /* 内容 start */\n  /* 内容 end */\n  /* 操作按钮 start */\n  /* 操作按钮 end */}.order__item[data-v-3301abcd]:first-child{margin-top:%?40?%}.order__item[data-v-3301abcd]:last-child{margin-bottom:0}.order__item__head__title[data-v-3301abcd]{font-weight:700;line-height:normal}.order__item__head__title--right-icon[data-v-3301abcd]{font-size:%?24?%;margin-left:%?8?%}.order__item__head__status[data-v-3301abcd]{font-size:%?22?%;color:#aaa}.order__item__content[data-v-3301abcd]{margin-top:%?20?%}.order__item__content__image[data-v-3301abcd]{margin-right:%?20?%}.order__item__content__image uni-image[data-v-3301abcd]{width:%?140?%;height:%?140?%;border-radius:%?10?%}.order__item__content__title[data-v-3301abcd]{padding-right:%?40?%;display:-webkit-box;overflow:hidden;white-space:normal!important;text-overflow:ellipsis;word-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical}.order__item__content__info__price--unit[data-v-3301abcd]{font-size:%?20?%}.order__item__content__info__price__value--integer[data-v-3301abcd], .order__item__content__info__price__value--decimal[data-v-3301abcd]{font-weight:700}.order__item__content__info__price__value--decimal[data-v-3301abcd]{font-size:%?20?%}.order__item__content__info__count[data-v-3301abcd]{color:#aaa;font-size:%?24?%}.order__item__operation[data-v-3301abcd]{margin-top:%?30?%}.order__item__operation__right__button[data-v-3301abcd]{margin-left:%?10?%}',""]),t.exports=e},"8c21":function(t,e,i){var n=i("84cd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("5d78e96e",n,!0,{sourceMap:!1,shadowMode:!1})},9769:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */[data-v-48e05212]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}uni-scroll-view[data-v-48e05212]  ::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.tn-tabs-swiper__scroll-view[data-v-48e05212]{position:relative;width:100%;white-space:nowrap}.tn-tabs-swiper__scroll-view__box[data-v-48e05212]{position:relative}.tn-tabs-swiper__scroll-view__item[data-v-48e05212]{position:relative;display:inline-block;text-align:center;transition-property:background-color,color}.tn-tabs-swiper__scroll-view--flex[data-v-48e05212]{display:flex;flex-direction:row;justify-content:space-between}.tn-tabs-swiper__bar[data-v-48e05212]{position:absolute;bottom:0}',""]),t.exports=e},a9a9:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("c7eb")),o=n(i("1da1"));i("a9e3"),i("d3b7"),i("ac1f"),i("14d9"),i("d81d");var a=n(i("9edb")),s=uni.getSystemInfoSync(),_=s.windowWidth,c={mixins:[a.default],name:"tn-tabs-swiper",props:{list:{type:Array,default:function(){return[]}},name:{type:String,default:"name"},count:{type:String,default:"count"},current:{type:Number,default:0},isScroll:{type:Boolean,default:!0},height:{type:Number,default:80},top:{type:Number,default:0},itemWidth:{type:[String,Number],default:"auto"},swiperWidth:{type:Number,default:750},activeColor:{type:String,default:"#01BEFF"},inactiveColor:{type:String,default:"#080808"},activeItemStyle:{type:Object,default:function(){return{}}},showBar:{type:Boolean,default:!0},barWidth:{type:Number,default:40},barHeight:{type:Number,default:6},barStyle:{type:Object,default:function(){return{}}},gutter:{type:Number,default:30},badgeOffset:{type:Array,default:function(){return[20,22]}},bold:{type:Boolean,default:!1},autoCenterMode:{type:String,default:"window"},zIndex:{type:Number,default:1}},computed:{currentIndex:function(){var t=Number(this.current);return t>this.list.length-1?this.list.length-1:t<0?0:t},scrollBarLeft:function(){return Number(this.tabLineDx)+Number(this.tabLineAddDx)},barWidthPx:function(){return uni.upx2px(this.barWidth)},swiperWidthPx:function(){return uni.upx2px(this.swiperWidth)},tabItemStyle:function(){var t=this;return function(e){var i={height:t.$t.string.getLengthUnitValue(t.height),lineHeight:t.$t.string.getLengthUnitValue(t.height),fontSize:t.fontSizeStyle||"28rpx",color:t.tabsInfo.length>0?t.tabsInfo[e]?t.tabsInfo[e].color:t.activeColor:t.inactiveColor,padding:t.isScroll?"0 ".concat(t.gutter,"rpx"):"",flex:t.isScroll?"auto":"1",zIndex:t.zIndex+2};return e===t.currentIndex&&(t.bold&&(i.fontWeight="bold"),Object.assign(i,t.activeItemStyle)),i}},tabBarStyle:function(){var t={width:this.$t.string.getLengthUnitValue(this.barWidth),height:this.$t.string.getLengthUnitValue(this.barHeight),borderRadius:"".concat(this.barHeight/2,"rpx"),backgroundColor:this.activeColor,left:this.scrollBarLeft+"px"};return Object.assign(t,this.barStyle),t}},data:function(){return{scrollLeft:0,tabsInfo:[],windowWidth:0,animationFinishCurrent:this.current,componentsWidth:0,tabLineAddDx:0,tabLineDx:0,colorGradientArr:[],colorStep:100}},watch:{current:function(t){this.change(t),this.setFinishCurrent(t)},list:function(){var t=this;this.$nextTick((function(){t.init()}))}},mounted:function(){this.init()},methods:{init:function(){var t=this;return(0,o.default)((0,r.default)().mark((function e(){return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTabsInfo();case 2:t.countLine3Dx(),t.getQuery((function(){t.setScrollViewToCenter()})),t.colorGradientArr=t.$t.color.colorGradient(t.inactiveColor,t.activeColor,t.colorStep);case 5:case"end":return e.stop()}}),e)})))()},emit:function(t){this.$emit("change",t)},change:function(){this.setScrollViewToCenter()},getTabsInfo:function(){var t=this;return new Promise((function(e,i){for(var n=uni.createSelectorQuery().in(t),r=0;r<t.list.length;r++)n.select("#tn-tabs-swiper__scroll-view__item-"+r).boundingClientRect();n.exec((function(i){for(var n=[],r=0;r<i.length;r++)i[r].color=t.inactiveColor,r===t.currentIndex&&(i[r].color=t.activeColor),n.push(i[r]);t.tabsInfo=n,e()}))}))},getQuery:function(t){var e=this;try{var i=uni.createSelectorQuery().in(this).select(".tn-tabs-swiper");i.fields({size:!0},(function(i){i?(e.componentsWidth=i.width,t&&"function"===typeof t&&t(i)):e.getQuery(t)})).exec()}catch(n){this.componentsWidth=_}},countLine3Dx:function(){var t=this.tabsInfo[this.animationFinishCurrent];t&&(this.tabLineDx=t.left+t.width/2-this.barWidthPx/2-this.tabsInfo[0].left)},setScrollViewToCenter:function(){var t=this.tabsInfo[this.animationFinishCurrent];if(t){var e,i=t.left+t.width/2;e="window"===this.autoCenterMode?_:this.componentsWidth,this.scrollLeft=i-e/2}},setDx:function(t){Math.ceil(Math.abs(t/this.swiperWidthPx));var e=t>0?this.animationFinishCurrent+1:this.animationFinishCurrent-1;e=e<=0?0:e,e=e>=this.list.length?this.list.length-1:e;var i=this.tabsInfo[this.animationFinishCurrent],n=i.left+i.width/2,r=this.tabsInfo[e],o=r.left+r.width/2,a=Math.abs(o-n);this.tabLineAddDx=t/this.swiperWidthPx*a,this.setTabColor(this.animationFinishCurrent,e,t)},setTabColor:function(t,e,i){var n=Math.ceil(Math.abs(i/this.swiperWidthPx));Math.abs(i)>this.swiperWidthPx&&(i=i>0?i-this.swiperWidthPx*(n-1):i+this.swiperWidthPx*(n-1));var r=Math.abs(Math.ceil(i/this.swiperWidthPx*100)),o=this.colorGradientArr.length;r=r>=o?o-1:r<=0?0:r,n>1?i>0?(this.tabsInfo[e+(n-1)>this.tabsInfo.length-1?this.tabsInfo.length-1:e+(n-1)].color=this.colorGradientArr[r],this.tabsInfo[e+(n-2)>this.tabsInfo.length-1?this.tabsInfo.length-1:e+(n-2)].color=this.colorGradientArr[o-1-r]):(this.tabsInfo[e-(n-1)<0?0:e-(n-1)].color=this.colorGradientArr[r],this.tabsInfo[e-(n-2)<0?0:e-(n-2)].color=this.colorGradientArr[o-1-r]):(this.tabsInfo[e].color=this.colorGradientArr[r],this.tabsInfo[t].color=this.colorGradientArr[o-1-r])},setFinishCurrent:function(t){var e=this;this.tabsInfo.map((function(i,n){return i.color=t==n?e.activeColor:e.inactiveColor,i})),this.tabLineAddDx=0,this.animationFinishCurrent=t,this.countLine3Dx()}}};e.default=c},c230:function(t,e,i){"use strict";i.r(e);var n=i("dd4d"),r=i("eef4");for(var o in r)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("7d2d");var a=i("f0c5"),s=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"3301abcd",null,!1,n["a"],void 0);e["default"]=s.exports},dd4d:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={tnNavBar:i("aa86").default,tnTabsSwiper:i("8288").default,tnButton:i("e6e0").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"template-order"},[i("tn-nav-bar",{attrs:{fixed:!0,isBack:!1,bottomShadow:!1,backgroundColor:"#FFFFFF"}},[i("v-uni-view",{staticClass:"custom-nav tn-flex tn-flex-col-center tn-flex-row-left"},[i("v-uni-view",{staticClass:"custom-nav__back",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"tn-icon-left"})],1),i("v-uni-view",{staticClass:"custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center"},[i("v-uni-view",{staticClass:"custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-left tn-color-gray--dark"},[i("v-uni-view",{staticClass:"custom-nav__search__icon tn-icon-search"}),i("v-uni-view",{staticClass:"custom-nav__search__text"},[t._v("搜索我的订单")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"order--wrap",style:{top:t.vuex_custom_bar_height+"px"}},[i("v-uni-view",{staticClass:"tn-bg-white"},[i("tn-tabs-swiper",{ref:"tabs",staticClass:"order__tabs",attrs:{activeColor:"#3165CC",inactiveColor:"#080808",list:t.list,current:t.tabsIndex,isScroll:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabsChange.apply(void 0,arguments)}}})],1),i("v-uni-swiper",{staticClass:"order__swiper",style:{top:t.swiperTop+"px",height:t.swiperHeight+"px"},attrs:{current:t.swiperIndex},on:{transition:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperTransition.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperAnimationFinish.apply(void 0,arguments)}}},[i("v-uni-swiper-item",{staticClass:"order__swiper__item"},[i("v-uni-scroll-view",{style:{height:t.swiperHeight+"px"},attrs:{"scroll-y":!0}},[t._l(6,(function(e,n){return i("v-uni-view",{key:n,staticClass:"order__item"},[i("v-uni-view",{staticClass:"order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between"},[i("v-uni-view",{staticClass:"order__item__head__title"},[t._v("图鸟官方小店"),i("v-uni-text",{staticClass:"order__item__head__title--right-icon tn-icon-right"})],1),i("v-uni-view",{staticClass:"order__item__head__status"},[t._v("完成")])],1),i("v-uni-view",{staticClass:"order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center"},[i("v-uni-view",{staticClass:"order__item__content__image"},[i("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/shop/prototype2.jpg",mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"order__item__content__title"},[t._v("图鸟官方设计 酷炫效果展示 让用户眼前一亮的赶脚")]),i("v-uni-view",{staticClass:"order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center"},[i("v-uni-view",{staticClass:"order__item__content__info__price"},[i("v-uni-text",{staticClass:"order__item__content__info__price--unit"},[t._v("￥")]),i("v-uni-text",{staticClass:"order__item__content__info__price__value--integer"},[t._v("1000")]),i("v-uni-text",{staticClass:"order__item__content__info__price__value--decimal"},[t._v(".00")])],1),i("v-uni-view",{staticClass:"order__item__content__info__count"},[i("v-uni-text",[t._v("共1件")])],1)],1)],1),i("v-uni-view",{staticClass:"order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between"},[i("v-uni-view",{staticClass:"order__item__operaation__left"},[i("v-uni-text",{staticClass:"order__item__operaation__left--text"},[t._v("更多")])],1),i("v-uni-view",{staticClass:"order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right"},[i("v-uni-view",{staticClass:"order__item__operaation__right__button"},[i("tn-button",{attrs:{shadow:!0,shape:"round",fontColor:"#080808",backgroundColor:"#E6E6E6",fontSize:24,height:"auto",padding:"10rpx 18rpx"}},[t._v("查看发票")])],1),i("v-uni-view",{staticClass:"order__item__operation__right__button"},[i("tn-button",{attrs:{shadow:!0,shape:"round",fontColor:"#FFFFFF",backgroundColor:"#080808",fontSize:24,height:"auto",padding:"10rpx 18rpx"}},[t._v("退换/售后")])],1),i("v-uni-view",{staticClass:"order__item__operation__right__button"},[i("tn-button",{attrs:{shadow:!0,shape:"round",fontColor:"tn-color-white",backgroundColor:"tn-cool-bg-color-1",fontSize:24,height:"auto",padding:"10rpx 18rpx"}},[t._v("再次购买")])],1)],1)],1)],1)})),i("v-uni-view",{staticClass:"tn-padding-bottom"})],2)],1),i("v-uni-swiper-item",{staticClass:"order__swiper__item"},[i("v-uni-scroll-view",{style:{height:t.swiperHeight+"px"},attrs:{"scroll-y":!0}},[t._l(6,(function(e,n){return i("v-uni-view",{key:n,staticClass:"order__item"},[i("v-uni-view",{staticClass:"order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between"},[i("v-uni-view",{staticClass:"order__item__head__title"},[t._v("图鸟官方小店"),i("v-uni-text",{staticClass:"order__item__head__title--right-icon tn-icon-right"})],1),i("v-uni-view",{staticClass:"order__item__head__status"},[t._v("完成")])],1),i("v-uni-view",{staticClass:"order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between"},[i("v-uni-view",{staticClass:"tn-flex tn-flex-nowrap tn-flex-direction-row tn-flex-col-center tn-flex-row-left"},[i("v-uni-view",{staticClass:"order__item__content__image"},[i("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/shop/computer2.jpg",mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"order__item__content__image"},[i("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/shop/bag2.jpg",mode:"scaleToFill"}})],1)],1),i("v-uni-view",{staticClass:"order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center"},[i("v-uni-view",{staticClass:"order__item__content__info__price"},[i("v-uni-text",{staticClass:"order__item__content__info__price--unit"},[t._v("￥")]),i("v-uni-text",{staticClass:"order__item__content__info__price__value--integer"},[t._v("2000")]),i("v-uni-text",{staticClass:"order__item__content__info__price__value--decimal"},[t._v(".00")])],1),i("v-uni-view",{staticClass:"order__item__content__info__count"},[i("v-uni-text",[t._v("共2件")])],1)],1)],1),i("v-uni-view",{staticClass:"order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between"},[i("v-uni-view",{staticClass:"order__item__operaation__left"},[i("v-uni-text",{staticClass:"order__item__operaation__left--text"},[t._v("更多")])],1),i("v-uni-view",{staticClass:"order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right"},[i("v-uni-view",{staticClass:"order__item__operaation__right__button"},[i("tn-button",{attrs:{shadow:!0,shape:"round",fontColor:"#080808",backgroundColor:"#E6E6E6",fontSize:24,height:"auto",padding:"10rpx 18rpx"}},[t._v("查看发票")])],1),i("v-uni-view",{staticClass:"order__item__operation__right__button"},[i("tn-button",{attrs:{shadow:!0,shape:"round",fontColor:"#FFFFFF",backgroundColor:"#080808",fontSize:24,height:"auto",padding:"10rpx 18rpx"}},[t._v("退换/售后")])],1),i("v-uni-view",{staticClass:"order__item__operation__right__button"},[i("tn-button",{attrs:{shadow:!0,shape:"round",fontColor:"tn-color-white",backgroundColor:"tn-cool-bg-color-1",fontSize:24,height:"auto",padding:"10rpx 18rpx"}},[t._v("再次购买")])],1)],1)],1)],1)})),i("v-uni-view",{staticClass:"tn-padding-bottom"})],2)],1),i("v-uni-swiper-item",{staticClass:"order__swiper__item"},[i("v-uni-scroll-view",{style:{height:t.swiperHeight+"px"},attrs:{"scroll-y":!0}},[t._l(6,(function(e,n){return i("v-uni-view",{key:n,staticClass:"order__item"},[i("v-uni-view",{staticClass:"order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between"},[i("v-uni-view",{staticClass:"order__item__head__title"},[t._v("图鸟官方小店"),i("v-uni-text",{staticClass:"order__item__head__title--right-icon tn-icon-right"})],1),i("v-uni-view",{staticClass:"order__item__head__status"},[t._v("完成")])],1),i("v-uni-view",{staticClass:"order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between"},[i("v-uni-view",{staticClass:"tn-flex tn-flex-nowrap tn-flex-direction-row tn-flex-col-center tn-flex-row-left"},[i("v-uni-view",{staticClass:"order__item__content__image"},[i("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/shop/card.jpg",mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"order__item__content__image"},[i("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/shop/cup1.jpg",mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"order__item__content__image"},[i("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/shop/computer2.jpg",mode:"scaleToFill"}})],1)],1),i("v-uni-view",{staticClass:"order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center"},[i("v-uni-view",{staticClass:"order__item__content__info__price"},[i("v-uni-text",{staticClass:"order__item__content__info__price--unit"},[t._v("￥")]),i("v-uni-text",{staticClass:"order__item__content__info__price__value--integer"},[t._v("3000")]),i("v-uni-text",{staticClass:"order__item__content__info__price__value--decimal"},[t._v(".00")])],1),i("v-uni-view",{staticClass:"order__item__content__info__count"},[i("v-uni-text",[t._v("共3件")])],1)],1)],1),i("v-uni-view",{staticClass:"order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between"},[i("v-uni-view",{staticClass:"order__item__operaation__left"},[i("v-uni-text",{staticClass:"order__item__operaation__left--text"},[t._v("更多")])],1),i("v-uni-view",{staticClass:"order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right"},[i("v-uni-view",{staticClass:"order__item__operaation__right__button"},[i("tn-button",{attrs:{shadow:!0,shape:"round",fontColor:"#080808",backgroundColor:"#E6E6E6",fontSize:24,height:"auto",padding:"10rpx 18rpx"}},[t._v("查看发票")])],1),i("v-uni-view",{staticClass:"order__item__operation__right__button"},[i("tn-button",{attrs:{shadow:!0,shape:"round",fontColor:"#FFFFFF",backgroundColor:"#080808",fontSize:24,height:"auto",padding:"10rpx 18rpx"}},[t._v("退换/售后")])],1),i("v-uni-view",{staticClass:"order__item__operation__right__button"},[i("tn-button",{attrs:{shadow:!0,shape:"round",fontColor:"tn-color-white",backgroundColor:"tn-cool-bg-color-1",fontSize:24,height:"auto",padding:"10rpx 18rpx"}},[t._v("再次购买")])],1)],1)],1)],1)})),i("v-uni-view",{staticClass:"tn-padding-bottom"})],2)],1),i("v-uni-swiper-item",{staticClass:"order__swiper__item"},[i("v-uni-scroll-view",{style:{height:t.swiperHeight+"px"},attrs:{"scroll-y":!0}},[t._l(6,(function(e,n){return i("v-uni-view",{key:n,staticClass:"order__item"},[i("v-uni-view",{staticClass:"order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between"},[i("v-uni-view",{staticClass:"order__item__head__title"},[t._v("图鸟官方小店"),i("v-uni-text",{staticClass:"order__item__head__title--right-icon tn-icon-right"})],1),i("v-uni-view",{staticClass:"order__item__head__status"},[t._v("完成")])],1),i("v-uni-view",{staticClass:"order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between"},[i("v-uni-view",{staticClass:"tn-flex tn-flex-nowrap tn-flex-direction-row tn-flex-col-center tn-flex-row-left"},[i("v-uni-view",{staticClass:"order__item__content__image"},[i("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/shop/card.jpg",mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"order__item__content__image"},[i("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/shop/computer1.jpg",mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"order__item__content__image"},[i("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/shop/watch1.jpg",mode:"scaleToFill"}})],1)],1),i("v-uni-view",{staticClass:"order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center"},[i("v-uni-view",{staticClass:"order__item__content__info__price"},[i("v-uni-text",{staticClass:"order__item__content__info__price--unit"},[t._v("￥")]),i("v-uni-text",{staticClass:"order__item__content__info__price__value--integer"},[t._v("4000")]),i("v-uni-text",{staticClass:"order__item__content__info__price__value--decimal"},[t._v(".00")])],1),i("v-uni-view",{staticClass:"order__item__content__info__count"},[i("v-uni-text",[t._v("共4件")])],1)],1)],1),i("v-uni-view",{staticClass:"order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between"},[i("v-uni-view",{staticClass:"order__item__operaation__left"},[i("v-uni-text",{staticClass:"order__item__operaation__left--text"},[t._v("更多")])],1),i("v-uni-view",{staticClass:"order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right"},[i("v-uni-view",{staticClass:"order__item__operaation__right__button"},[i("tn-button",{attrs:{shadow:!0,shape:"round",fontColor:"#080808",backgroundColor:"#E6E6E6",fontSize:24,height:"auto",padding:"10rpx 18rpx"}},[t._v("查看发票")])],1),i("v-uni-view",{staticClass:"order__item__operation__right__button"},[i("tn-button",{attrs:{shadow:!0,shape:"round",fontColor:"#FFFFFF",backgroundColor:"#080808",fontSize:24,height:"auto",padding:"10rpx 18rpx"}},[t._v("退换/售后")])],1),i("v-uni-view",{staticClass:"order__item__operation__right__button"},[i("tn-button",{attrs:{shadow:!0,shape:"round",fontColor:"tn-color-white",backgroundColor:"tn-cool-bg-color-1",fontSize:24,height:"auto",padding:"10rpx 18rpx"}},[t._v("再次购买")])],1)],1)],1)],1)})),i("v-uni-view",{staticClass:"tn-padding-bottom"})],2)],1),i("v-uni-swiper-item",{staticClass:"order__swiper__item"},[i("v-uni-scroll-view",{style:{height:t.swiperHeight+"px"},attrs:{"scroll-y":!0}},[t._l(6,(function(e,n){return i("v-uni-view",{key:n,staticClass:"order__item"},[i("v-uni-view",{staticClass:"order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between"},[i("v-uni-view",{staticClass:"order__item__head__title"},[t._v("图鸟官方小店"),i("v-uni-text",{staticClass:"order__item__head__title--right-icon tn-icon-right"})],1),i("v-uni-view",{staticClass:"order__item__head__status"},[t._v("完成")])],1),i("v-uni-view",{staticClass:"order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between"},[i("v-uni-view",{staticClass:"tn-flex tn-flex-nowrap tn-flex-direction-row tn-flex-col-center tn-flex-row-left"},[i("v-uni-view",{staticClass:"order__item__content__image"},[i("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/shop/card.jpg",mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"order__item__content__image"},[i("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/shop/pillow.jpg",mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"order__item__content__image"},[i("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/shop/bag1.jpg",mode:"scaleToFill"}})],1)],1),i("v-uni-view",{staticClass:"order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center"},[i("v-uni-view",{staticClass:"order__item__content__info__price"},[i("v-uni-text",{staticClass:"order__item__content__info__price--unit"},[t._v("￥")]),i("v-uni-text",{staticClass:"order__item__content__info__price__value--integer"},[t._v("5000")]),i("v-uni-text",{staticClass:"order__item__content__info__price__value--decimal"},[t._v(".00")])],1),i("v-uni-view",{staticClass:"order__item__content__info__count"},[i("v-uni-text",[t._v("共5件")])],1)],1)],1),i("v-uni-view",{staticClass:"order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between"},[i("v-uni-view",{staticClass:"order__item__operaation__left"},[i("v-uni-text",{staticClass:"order__item__operaation__left--text"},[t._v("更多")])],1),i("v-uni-view",{staticClass:"order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right"},[i("v-uni-view",{staticClass:"order__item__operaation__right__button"},[i("tn-button",{attrs:{shadow:!0,shape:"round",fontColor:"#080808",backgroundColor:"#E6E6E6",fontSize:24,height:"auto",padding:"10rpx 18rpx"}},[t._v("查看发票")])],1),i("v-uni-view",{staticClass:"order__item__operation__right__button"},[i("tn-button",{attrs:{shadow:!0,shape:"round",fontColor:"#FFFFFF",backgroundColor:"#080808",fontSize:24,height:"auto",padding:"10rpx 18rpx"}},[t._v("退换/售后")])],1),i("v-uni-view",{staticClass:"order__item__operation__right__button"},[i("tn-button",{attrs:{shadow:!0,shape:"round",fontColor:"tn-color-white",backgroundColor:"tn-cool-bg-color-1",fontSize:24,height:"auto",padding:"10rpx 18rpx"}},[t._v("再次购买")])],1)],1)],1)],1)})),i("v-uni-view",{staticClass:"tn-padding-bottom"})],2)],1)],1)],1)],1)},o=[]},e632:function(t,e,i){"use strict";i.r(e);var n=i("a9a9"),r=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},eef4:function(t,e,i){"use strict";i.r(e);var n=i("163c"),r=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},fea2:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={tnBadge:i("8eb7").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tn-tabs-swiper-class tn-tabs-swiper",class:[t.backgroundColorClass],style:{backgroundColor:t.backgroundColorStyle,marginTop:t.$t.string.getLengthUnitValue(t.top,"px"),zIndex:t.zIndex}},[i("v-uni-scroll-view",{staticClass:"tn-tabs-swiper__scroll-view",style:{zIndex:t.zIndex+1},attrs:{"scroll-x":!0,"scroll-left":t.scrollLeft,"scroll-with-animation":!0}},[i("v-uni-view",{staticClass:"tn-tabs-swiper__scroll-view__box",class:{"tn-tabs-swiper__scroll-view--flex":!t.isScroll}},[t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"tn-tabs-swiper__scroll-view__item tn-text-ellipsis",style:[t.tabItemStyle(n)],attrs:{id:"tn-tabs-swiper__scroll-view__item-"+n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.emit(n)}}},[e[t.count]||e["count"]?i("tn-badge",{attrs:{backgroundColor:"tn-bg-red",fontColor:"#FFFFFF",absolute:!0,top:t.badgeOffset[0]||0,right:t.badgeOffset[1]||0}},[t._v(t._s(e[t.count]||e["count"]))]):t._e(),t._v(t._s(e[t.name]||e["name"]))],1)})),t.showBar?i("v-uni-view",{staticClass:"tn-tabs-swiper__bar",style:[t.tabBarStyle]}):t._e()],2)],1)],1)},o=[]}}]);