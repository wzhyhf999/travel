(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["preferredPages-award"],{"14f8":function(t,e,n){"use strict";var a=n("a1c7"),i=n.n(a);i.a},2341:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var a={tnNavBar:n("aa86").default,tnButton:n("e6e0").default,tnSticky:n("8aaf").default,tnTabs:n("67c4").default,tnModal:n("ca15").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-award"},[n("tn-nav-bar",{attrs:{fixed:!0,customBack:!0,bottomShadow:!1,backgroundColor:t.navBarBackgroundColor,id:"navbar"}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",style:[t.navBarStyle],attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"}),n("v-uni-text",{staticClass:"icon tn-icon-discover-fill"})],1),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-center",style:[t.navBarStyle2]},[n("v-uni-view",{staticClass:"tn-text-bold tn-text-xl"},[t._v("红包活动")])],1)],1),n("v-uni-view",{staticClass:"banner"},[n("v-uni-swiper",{staticClass:"card-swiper",attrs:{circular:!0,autoplay:!1,duration:"500",interval:"5000"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.cardSwiper.apply(void 0,arguments)}}},t._l(t.swiperList,(function(e,a){return n("v-uni-swiper-item",{key:a,class:t.cardCur==a?"cur":""},[n("v-uni-view",{staticClass:"swiper-item image-banner"},["image"==e.type?n("v-uni-image",{attrs:{src:e.url,mode:"widthFix"}}):t._e()],1),n("v-uni-view",{staticClass:"swiper-item-text"},[n("v-uni-view",{staticClass:"tn-text-xl tn-color-white"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"tn-text-xl tn-color-white tn-padding-top-xs"},[t._v(t._s(e.name))])],1)],1)})),1),n("v-uni-view",{staticClass:"indication"},[t._l(t.swiperList,(function(e,a){return[n("v-uni-view",{key:a+"_0",staticClass:"spot",class:t.cardCur==a?"active":""})]}))],2)],1),n("v-uni-view",{staticClass:"adver-wrap tn-shadow tn-margin tn-bg-white"},[n("v-uni-view",{staticClass:"nav_title--wrap tn-padding-top"},[n("v-uni-view",{staticClass:"nav_title tn-cool-bg-color-15"},[n("v-uni-text",{staticClass:"tn-icon-science tn-padding-right-sm tn-text-xxl"}),n("v-uni-text",{staticClass:"tn-text-xl"},[t._v("红包奖励 · 优惠抵扣")]),n("v-uni-text",{staticClass:"tn-icon-science tn-padding-left-sm tn-text-xxl"})],1)],1),n("v-uni-view",{staticClass:"tn-text-center",staticStyle:{color:"#EF481F",padding:"30rpx 0"}},[n("v-uni-text",{staticClass:"tn-text-lg tn-text-bold tn-padding-left-xs",staticStyle:{"margin-left":"-20rpx"}},[t._v("￥")]),n("v-uni-text",{staticStyle:{"font-size":"110rpx"}},[t._v("99.80")])],1),n("v-uni-view",{staticClass:"tn-text-center tn-color-gray"},[t._v("红包可直接抵扣优惠")]),n("v-uni-view",{staticClass:"tn-flex-1 justify-content-item tn-margin-xs tn-text-center tn-padding-top tn-padding-bottom-xl"},[n("tn-button",{attrs:{shape:"round",plain:!0,backgroundColor:"#EF481F",padding:"40rpx 0",width:"70%",shadow:!0,fontSize:32}},[n("v-uni-text",{staticStyle:{color:"#EF481F"}},[t._v("邀请好友赢免单")]),n("v-uni-text",{staticClass:"tn-icon-wechat tn-padding-right-xs tn-padding-left-xs",staticStyle:{color:"#EF481F"}})],1)],1)],1),n("v-uni-view",{staticClass:"tn-shadow tn-margin tn-bg-white"},[n("v-uni-view",{staticClass:"nav_title--wrap tn-padding-top-sm"},[n("v-uni-view",{staticClass:"nav_title tn-cool-bg-color-15"},[n("v-uni-text",{staticClass:"tn-icon-science tn-padding-right-sm tn-text-xxl"}),n("v-uni-text",{staticClass:"tn-text-xl"},[t._v("赚红包攻略")]),n("v-uni-text",{staticClass:"tn-icon-science tn-padding-left-sm tn-text-xxl"})],1)],1),n("v-uni-view",{staticClass:"screenshot-img"},[n("v-uni-image",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/280373/1656249172300-assets/web-upload/74dd3336-ddf5-491f-87e0-5ff2ca4aae5f.png",mode:"widthFix"}})],1)],1),n("v-uni-view",{staticClass:"tn-shadow tn-margin tn-bg-white",attrs:{id:"page_tips"}},[n("v-uni-view",{staticClass:"tn-bg-white  tn-margin-sm tn-padding-top-sm"},[n("tn-sticky",{attrs:{offsetTop:0,customNavHeight:t.vuex_custom_bar_height}},[n("tn-tabs",{attrs:{list:t.fixedList,current:t.current,isScroll:!1,activeColor:"#E83A30",bold:"true",backgroundColor:"#FFFFFF",fontSize:32,badgeOffset:[20,50]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabChange.apply(void 0,arguments)}}})],1)],1),0==t.current?n("v-uni-view",{},[t._l(t.content,(function(e,a){return[n("v-uni-view",{key:a+"_0",staticClass:"tn-flex tn-flex-row-between tn-flex-col-center tn-margin"},[n("v-uni-view",{staticClass:"justify-content-item tn-margin-top"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-center tn-padding-right"},[n("v-uni-text",{staticClass:"tn-text-bold tn-text-xl tn-color-gray"},[t._v(t._s(e.userNumber))])],1),n("v-uni-view",{staticClass:"tn-flex tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"tn-padding-right tn-text-ellipsis"},[n("v-uni-view",{staticClass:"tn-padding-right tn-padding-left-xs tn-text-bold tn-text-df"},[t._v(t._s(e.userName))]),n("v-uni-view",{staticClass:"tn-padding-xs tn-color-gray"},[n("v-uni-text",[t._v(t._s(e.date))])],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item tn-flex-row-center"},[n("v-uni-view",{staticClass:"tn-padding-xs tn-round ",class:["tn-color-"+e.color]},[n("v-uni-text",{staticClass:"tn-padding-left-xs"},[t._v(t._s(e.desc))]),n("v-uni-text",{staticClass:"tn-icon-send-fill tn-padding-xs"})],1)],1)],1)]}))],2):t._e(),1==t.current?n("v-uni-view",{},[t._l(t.content1,(function(e,a){return[n("v-uni-view",{key:a+"_0",staticClass:"tn-flex tn-flex-row-between tn-flex-col-center tn-margin"},[n("v-uni-view",{staticClass:"justify-content-item tn-margin-top"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-center tn-padding-right"},[n("v-uni-text",{staticClass:"tn-text-bold tn-text-xl tn-color-gray"},[t._v(t._s(e.userNumber))])],1),n("v-uni-view",{staticClass:"tn-flex tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"tn-padding-right tn-text-ellipsis"},[n("v-uni-view",{staticClass:"tn-padding-right tn-padding-left-xs tn-text-bold tn-text-df"},[t._v(t._s(e.userName))]),n("v-uni-view",{staticClass:"tn-padding-xs tn-color-gray"},[n("v-uni-text",[t._v(t._s(e.date))])],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item tn-flex-row-center"},[n("v-uni-view",{staticClass:"tn-padding-xs tn-round ",class:["tn-color-"+e.color]},[n("v-uni-text",{staticClass:"tn-padding-left-xs"},[t._v(t._s(e.desc))]),n("v-uni-text",{staticClass:"tn-icon-send-fill tn-padding-xs"})],1)],1)],1)]}))],2):t._e(),2==t.current?n("v-uni-view",{},[t._l(t.content2,(function(e,a){return[n("v-uni-view",{key:a+"_0",staticClass:"tn-flex tn-flex-row-between tn-flex-col-center tn-margin"},[n("v-uni-view",{staticClass:"justify-content-item tn-margin-top"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-center tn-padding-right"},[n("v-uni-text",{staticClass:"tn-text-bold tn-text-xl tn-color-gray"},[t._v(t._s(e.userNumber))])],1),n("v-uni-view",{staticClass:"tn-flex tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"tn-padding-right tn-text-ellipsis"},[n("v-uni-view",{staticClass:"tn-padding-right tn-padding-left-xs tn-text-bold tn-text-df"},[t._v(t._s(e.userName))]),n("v-uni-view",{staticClass:"tn-padding-xs tn-color-gray"},[n("v-uni-text",[t._v(t._s(e.date))])],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item tn-flex-row-center"},[n("v-uni-view",{staticClass:"tn-padding-xs tn-round ",class:["tn-color-"+e.color]},[n("v-uni-text",{staticClass:"tn-padding-left-xs"},[t._v(t._s(e.desc))]),n("v-uni-text",{staticClass:"tn-icon-send-fill tn-padding-xs"})],1)],1)],1)]}))],2):t._e()],1),n("v-uni-view",{staticClass:"tn-footerfixed tn-flex tn-flex-row-between tn-flex-col-center tn-padding tn-safe-area-inset-bottom dd-glass",style:{transform:"translateY("+t.topInfoTranslateY+"px)"},attrs:{id:"top-info"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"tn-flex-1 justify-content-item tn-margin-xs tn-text-center tn-padding-bottom"},[n("tn-button",{attrs:{shape:"round",backgroundColor:"tn-cool-bg-color-15--reverse",padding:"40rpx 0",width:"90%",shadow:!0,fontSize:32}},[n("v-uni-text",{staticClass:"tn-color-white"},[t._v("合并红包")])],1)],1)],1),n("tn-modal",{attrs:{custom:!0,width:"90%",showCloseBtn:!0},model:{value:t.show1,callback:function(e){t.show1=e},expression:"show1"}},[n("v-uni-view",{staticClass:"custom-modal-content"},[n("v-uni-view",{staticClass:"nav_title2--wrap"},[n("v-uni-view",{staticClass:"nav_title tn-cool-bg-color-15"},[n("v-uni-text",{staticClass:"tn-icon-science tn-padding-right-sm tn-text-xxl"}),n("v-uni-text",{staticClass:"tn-text-xl"},[t._v("累计赚取红包奖励")]),n("v-uni-text",{staticClass:"tn-icon-science tn-padding-left-sm tn-text-xxl"})],1)],1),n("v-uni-scroll-view",{staticStyle:{height:"45vh"},attrs:{"scroll-y":"true"}},[n("v-uni-view",{staticClass:"tn-info__container tn-flex tn-flex-wrap tn-flex-col-center tn-flex-row-between"},[t._l(t.redpacket,(function(e,a){return[n("v-uni-view",{key:a+"_0",staticClass:"tn-info__item tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between tn-color-white tn-shadow-blur",class:[(e.select,"tn-bg-red--light")],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleRedpacketClick(a)}}},[n("v-uni-view",{staticClass:"tn-info__item__left tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"tn-info__item__left__content"},[n("v-uni-view",{staticClass:"tn-info__item__left__content--title",style:{color:(e.select,"#EF481F")}},[n("v-uni-text",{staticClass:"tn-text-bold",staticStyle:{"font-size":"50rpx"}},[t._v(t._s(e.number))]),n("v-uni-text",{staticClass:"tn-padding-left-xs tn-text-bold"},[t._v("元")]),n("v-uni-text",{staticClass:"tn-padding-left-sm",style:{color:(e.select,"#F96440")}},[t._v(t._s(e.desc))])],1),n("v-uni-view",{staticClass:"tn-info__item__left__content--data tn-text-df",style:{color:(e.select,"#914F2C")}},[t._v(t._s(e.type)),n("v-uni-text",{staticClass:"tn-icon-level tn-padding-left-xs"})],1)],1)],1),n("v-uni-view",{staticClass:"tn-info__item__left--icon tn-flex tn-flex-col-center tn-flex-row-center",class:[e.select?"tn-cool-bg-color-15":"tn-bg-gray--disabled"]},[n("v-uni-view",{staticClass:"tn-icon-success tn-color-white tn-text-bold"})],1),n("v-uni-view",{staticClass:"tn-info__item__bottom"},[n("v-uni-view",{staticClass:"name tn-text-xs tn-color-gray",staticStyle:{"margin-left":"-10rpx"}},[n("v-uni-text",{staticClass:"tn-icon-time tn-padding-right-xs"}),n("v-uni-text",[t._v(t._s(e.firstTime)+" 至 "+t._s(e.lastTime))])],1)],1)],1)]}))],2)],1),n("v-uni-view",{staticClass:"tn-flex-1 justify-content-item tn-margin-xs tn-text-center tn-padding-top"},[n("tn-button",{attrs:{shape:"round",plain:!0,backgroundColor:"#EF481F",padding:"40rpx 0",width:"100%",shadow:!0,fontSize:32}},[n("v-uni-text",{staticStyle:{color:"#EF481F"}},[t._v("确定合并红包")]),n("v-uni-text",{staticClass:"tn-icon-level tn-padding-right-xs tn-padding-left-xs",staticStyle:{color:"#EF481F"}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"tn-tabbar-height"})],1)},s=[]},"3ec7":function(t,e,n){"use strict";n("7a82");var a=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("f07e")),s=a(n("c964")),r=a(n("88ff")),o={name:"templateAward",mixins:[r.default],data:function(){return{cardCur:0,swiperList:[{id:0,type:"image",title:"好友下单你获得现金红包",name:"红包可以合并噢",url:"https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1656245922049-assets/web-upload/0109be5b-ca50-4cea-a5a5-c2338d03e18e.jpeg"},{id:1,type:"image",title:"好友下单你获得现金红包",name:"红包可以合并鸭",url:"https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1656244807518-assets/web-upload/7d866c7f-789c-4fd0-980e-fbc79964ee6b.jpeg"},{id:2,type:"image",title:"好友下单你获得现金红包",name:"红包可以合并吖",url:"https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1656245922049-assets/web-upload/0109be5b-ca50-4cea-a5a5-c2338d03e18e.jpeg"}],current:0,fixedList:[{name:"在路上"},{name:"已赚取"},{name:"邀请失败"}],redpacket:[{number:"1.6",desc:"张**使用点餐优惠",firstTime:"2022-06-22",lastTime:"2022-08-22",type:"支持合并使用",select:!1},{number:"11.2",desc:"张**使用点餐优惠",firstTime:"2022-06-22",lastTime:"2022-08-22",type:"支持合并使用",select:!1},{number:"3.5",desc:"陈*使用点餐优惠",firstTime:"2022-06-22",lastTime:"2022-08-22",type:"支持合并使用",select:!1},{number:"11.2",desc:"张**使用点餐优惠",firstTime:"2022-06-22",lastTime:"2022-08-22",type:"支持合并使用",select:!1},{number:"11.2",desc:"张**使用点餐优惠",firstTime:"2022-06-22",lastTime:"2022-08-22",type:"支持合并使用",select:!1},{number:"11.2",desc:"张**使用点餐优惠",firstTime:"2022-06-22",lastTime:"2022-08-22",type:"支持合并使用",select:!1}],content:[{userNumber:"23",userName:"韩乐乐",date:"06-24 21:23",desc:"去使用",color:"red"},{userNumber:"22",userName:"蔡东东",date:"06-23 09:33",desc:"已使用",color:"gray"},{userNumber:"21",userName:"李某",date:"06-22 09:33",desc:"已使用",color:"gray"},{userNumber:"20",userName:"韩乐乐",date:"06-24 21:23",desc:"去使用",color:"red"},{userNumber:"19",userName:"蔡东东",date:"06-23 09:33",desc:"已使用",color:"gray"},{userNumber:"18",userName:"李某",date:"06-22 09:33",desc:"已使用",color:"gray"},{userNumber:"17",userName:"韩乐乐",date:"06-24 21:23",desc:"去使用",color:"red"},{userNumber:"16",userName:"蔡东东",date:"06-23 09:33",desc:"去使用",color:"red"},{userNumber:"15",userName:"李某",date:"06-22 09:33",desc:"去使用",color:"red"}],content1:[{userNumber:"15",userName:"陈速度",date:"06-24 21:23",desc:"去使用",color:"red"},{userNumber:"14",userName:"蔡东东",date:"06-23 09:33",desc:"已使用",color:"gray"},{userNumber:"13",userName:"蔡东东",date:"06-23 09:33",desc:"已使用",color:"gray"},{userNumber:"12",userName:"李某",date:"06-22 09:33",desc:"已使用",color:"gray"},{userNumber:"11",userName:"韩乐乐",date:"06-24 21:23",desc:"去使用",color:"red"},{userNumber:"10",userName:"蔡东东",date:"06-23 09:33",desc:"去使用",color:"red"},{userNumber:"09",userName:"李某",date:"06-22 09:33",desc:"去使用",color:"red"}],content2:[{userNumber:"06",userName:"凌零七",date:"06-24 21:23",desc:"去使用",color:"red"},{userNumber:"05",userName:"凌零八",date:"06-23 09:33",desc:"已使用",color:"gray"},{userNumber:"04",userName:"蔡东东",date:"06-23 09:33",desc:"已使用",color:"gray"},{userNumber:"03",userName:"李某",date:"06-22 09:33",desc:"已使用",color:"gray"},{userNumber:"02",userName:"韩乐乐",date:"06-24 21:23",desc:"去使用",color:"red"},{userNumber:"01",userName:"蔡东东",date:"06-23 09:33",desc:"去使用",color:"red"}],show1:!1,topInfo:{height:0},topInfoTranslateY:0,prevScrollTop:0,navBarRectInfo:{},navBarChangebaseLineHeight:0,navBarStyle:{color:"#FFFFFF",opacity:1,display:"flex"},navBarStyle2:{color:"rgba(255,255,255,0)",opacity:1,display:"flex"},navBarBackgroundColor:"rgba(255, 255, 255, 0)",activeBgAnimation:{},currentSelectRedpacket:-1}},onLoad:function(){},onReady:function(){var t=this;this.$nextTick((function(){t.initNavBarRectInfo()})),this.getTopInfoRect()},onPageScroll:function(t){this.updateNavBarRectInfo(),this.handlePageScroll(t.scrollTop)},methods:{cardSwiper:function(t){this.cardCur=t.detail.current},tabChange:function(t){this.current=t},getTopInfoRect:function(){var t=this;this._tGetRect("#top-info").then((function(e){e?t.topInfo.height=e.height:setTimeout((function(){t.getTopInfoRect()}),50)}))},handlePageScroll:function(t){console.log(t),this.prevScrollTop>t?this.topInfoTranslateY=0:t>this.topInfo.height&&(this.topInfoTranslateY=this.topInfo.height),this.prevScrollTop=t},showModal:function(t){this.openModal()},openModal:function(){this.show1=!0},initNavBarRectInfo:function(){var t=this;return(0,s.default)((0,i.default)().mark((function e(){var n,a;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t._tGetRect("#navbar");case 2:return n=e.sent,e.next=5,t._tGetRect("#page_tips");case 5:if(a=e.sent,n.hasOwnProperty("top")&&a.hasOwnProperty("top")){e.next=9;break}return setTimeout((function(){t.initNavBarRectInfo()}),10),e.abrupt("return");case 9:t.navBarRectInfo={top:n.top},t.navBarChangebaseLineHeight=a.top-n.top;case 11:case"end":return e.stop()}}),e)})))()},updateNavBarRectInfo:function(){var t=this;this._tGetRect("#page_tips").then((function(e){var n=(null===e||void 0===e?void 0:e.top)||0;if(n){var a=n-t.navBarRectInfo.top,i=a/t.navBarChangebaseLineHeight;i<0?(t.navBarStyle.color="rgba(0, 0, 0, ${opacity})",t.navBarStyle2.color="rgba(0, 0, 0, ${opacity})",t.navBarBackgroundColor="rgba(255, 255, 255, 1)"):(t.navBarStyle.color="rgba(255, 255, 255, 1)",t.navBarStyle2.color="rgba(255, 255, 255, 0)",t.navBarBackgroundColor="rgba(255, 255, 255, ".concat(1-i,")"))}}))},handleRedpacketClick:function(t){this.redpacket[t].select=!this.redpacket[t].select}}};e.default=o},"45ff":function(t,e,n){"use strict";n.r(e);var a=n("2341"),i=n("bf8b");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("14f8");var r=n("f0c5"),o=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"a5b28d98",null,!1,a["a"],void 0);e["default"]=o.exports},a1c7:function(t,e,n){var a=n("fa84");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("69fad915",a,!0,{sourceMap:!1,shadowMode:!1})},bf8b:function(t,e,n){"use strict";n.r(e);var a=n("3ec7"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},fa84:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-a5b28d98]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-a5b28d98]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-a5b28d98]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\n/* 内容 */.adver-wrap[data-v-a5b28d98]{position:relative;z-index:1;margin-top:%?600?%;border-radius:%?80?% %?80?% 0 0}\n/* 毛玻璃*/.dd-glass[data-v-a5b28d98]{width:100%;backdrop-filter:blur(%?20?%);-webkit-backdrop-filter:blur(%?20?%)}\n/* 用户头像 start */.user-image[data-v-a5b28d98]{width:%?90?%;height:%?90?%;position:relative}.user-pic[data-v-a5b28d98]{background-size:cover;background-repeat:no-repeat;background-position:top;border-radius:50%;overflow:hidden;background-color:#fff}\n/* 截图图片 start */.screenshot-img[data-v-a5b28d98]{z-index:-1;padding:%?20?%}.screenshot-img uni-image[data-v-a5b28d98]{width:100%;display:block}.banner[data-v-a5b28d98]{position:fixed;top:0;width:100%;transition:all .25s ease-out;will-change:transform;z-index:-1}\n/* 轮播视觉差 start */.card-swiper[data-v-a5b28d98]{height:%?654?%!important}.card-swiper uni-swiper-item[data-v-a5b28d98]{width:%?750?%!important;left:%?0?%;box-sizing:border-box;overflow:initial}.card-swiper uni-swiper-item .swiper-item[data-v-a5b28d98]{width:100%;display:block;height:100%;-webkit-transform:scale(1);transform:scale(1);transition:all .2s ease-in 0s;will-change:transform;overflow:hidden;border-radius:0 0 %?60?% %?60?%}.card-swiper uni-swiper-item.cur .swiper-item[data-v-a5b28d98]{-webkit-transform:none;transform:none;transition:all .2s ease-in 0s;will-change:transform;border-radius:0 0 %?60?% %?60?%}.card-swiper uni-swiper-item .swiper-item-text[data-v-a5b28d98]{margin-top:%?-235?%;width:100%;display:block;height:50%;-webkit-transform:scale(.8);transform:scale(.8);transition:all .6s ease 0s;will-change:transform;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item-text[data-v-a5b28d98]{margin-top:%?-230?%;margin-left:%?10?%;width:100%;-webkit-transform:scale(.9);transform:scale(.9);transition:all .6s ease 0s;will-change:transform}.image-banner[data-v-a5b28d98]{display:flex;align-items:center;justify-content:center}.image-banner uni-image[data-v-a5b28d98]{width:100%;height:100%}\n/* 轮播指示点 start*/.indication[data-v-a5b28d98]{z-index:9999;width:100%;height:%?36?%;position:absolute;display:flex;flex-direction:row;align-items:center;justify-content:center}.spot[data-v-a5b28d98]{background-color:#fff;opacity:.6;width:%?10?%;height:%?10?%;border-radius:%?20?%;top:%?-50?%;margin:0 %?8?%!important;position:relative}.spot.active[data-v-a5b28d98]{opacity:1;width:%?30?%;background-color:#fff}\n/* 阴影 start*/.tn-shadow[data-v-a5b28d98]{border-radius:%?15?%;box-shadow:%?0?% %?0?% %?50?% %?0?% rgba(0,0,0,.07)}\n/* 标题 start */.nav_title[data-v-a5b28d98]{-webkit-background-clip:text;color:transparent}.nav_title--wrap[data-v-a5b28d98]{position:relative;display:flex;height:%?120?%;align-items:center;justify-content:center;font-weight:700;background-image:url(https://resource.tuniaokj.com/images/title_bg/title44.png);background-size:cover}\n/* 标题 end */\n/* 标题2 start */.nav_title2[data-v-a5b28d98]{-webkit-background-clip:text;color:transparent}.nav_title2--wrap[data-v-a5b28d98]{position:relative;display:flex;height:%?120?%;align-items:center;justify-content:center;font-weight:700;background-size:cover}\n/* 标题2 end */\n/* 优惠券 start */.tn-info__container[data-v-a5b28d98]{margin-top:%?10?%;margin-bottom:%?50?%}.tn-info__item[data-v-a5b28d98]{width:100%;margin:%?15?% %?0?% %?50?% %?0?%;padding:%?20?% %?30?%;border-radius:%?10?%;position:relative;z-index:1}.tn-info__item[data-v-a5b28d98]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://resource.tuniaokj.com/images/cool_bg_image/2.png)}.tn-info__item__left--icon[data-v-a5b28d98]{width:%?50?%;height:%?50?%;border-radius:50%;font-size:%?40?%;margin-right:%?0?%;position:relative;z-index:1}.tn-info__item__left--icon[data-v-a5b28d98]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg5.png)}.tn-info__item__left__content[data-v-a5b28d98]{font-size:%?25?%}.tn-info__item__left__content--data[data-v-a5b28d98]{color:hsla(0,0%,100%,.5);margin-top:%?5?%}.tn-info__item__bottom[data-v-a5b28d98]{box-shadow:%?0?% %?0?% %?30?% %?0?% rgba(0,0,0,.12);border-radius:0 0 %?10?% %?10?%;position:absolute;width:85%;line-height:%?36?%;left:50%;bottom:%?-36?%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:-1;text-align:center}\n/* 业务展示 end */\n/* 底部悬浮按钮 start*/.tn-tabbar-height[data-v-a5b28d98]{min-height:%?120?%;height:calc(%?140?% + env(safe-area-inset-bottom) / 2)}.tn-footerfixed[data-v-a5b28d98]{border-radius:%?50?% %?50?% 0 0;position:fixed;background-color:hsla(0,0%,100%,.5);box-shadow:%?0?% %?0?% %?30?% %?0?% rgba(0,0,0,.07);bottom:0;width:100%;transition:all .25s ease-out;will-change:transform;z-index:100}',""]),t.exports=e}}]);