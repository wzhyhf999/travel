(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["circlePages-news"],{"083e":function(t,e,n){"use strict";n.r(e);var a=n("ebd7"),i=n("33bd");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("7f1e");var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"fb7703f0",null,!1,a["a"],void 0);e["default"]=s.exports},"27b46":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tn-btn[data-v-778c77a3]{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1;text-align:center;text-decoration:none;overflow:visible;-webkit-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);border-radius:%?12?%;margin:0}.tn-btn--plain[data-v-778c77a3]{background-color:initial!important;background-image:none}.tn-btn--plain.tn-round[data-v-778c77a3]{border-radius:%?1000?%!important}',""]),t.exports=e},"2dc8":function(t,e,n){var a=n("6294");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("513b6b1c",a,!0,{sourceMap:!1,shadowMode:!1})},"33bd":function(t,e,n){"use strict";n.r(e);var a=n("e79f"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},3586:function(t,e,n){"use strict";var a=n("6cf4"),i=n.n(a);i.a},"572e":function(t,e,n){"use strict";n("7a82");var a=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("c975"),n("fb6a"),n("baa5"),n("caad6"),n("2532");var i=a(n("9edb")),o={mixins:[i.default],name:"tn-button",behaviors:["wx://form-field-button"],props:{index:{type:[Number,String],default:0},shape:{type:String,default:"default"},shadow:{type:Boolean,default:!1},width:{type:String,default:"auto"},height:{type:String,default:""},size:{type:String,default:""},fontBold:{type:Boolean,default:!1},padding:{type:String,default:"0 30rpx"},margin:{type:String,default:""},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},borderBold:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},blockRepeatClick:{type:Boolean,default:!1}},computed:{buttonClass:function(){var t="";switch(this.shape){case"icon":case"round":t+=" tn-round";break}if(this.shadow)if(""!==this.backgroundColorClass&&-1!=this.backgroundColorClass.indexOf("tn-bg")){var e=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-shadow-".concat(e)}else t+=" tn-shadow-blur";if(this.fontBold&&(t+=" tn-text-bold"),this.plain&&(t+=" tn-btn--plain",this.border&&(t+=" tn-border-solid",this.borderBold&&(t+=" tn-bold-border"),""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg")))){var n=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-border-".concat(n)}return t},buttonStyle:function(){var t={};switch(this.size){case"sm":t.padding="0 20rpx",t.fontSize="22rpx",t.height=this.height||"48rpx";break;case"lg":t.padding="0 40rpx",t.fontSize="32rpx",t.height=this.height||"80rpx";break;default:t.padding="0 30rpx",t.fontSize="28rpx",t.height=this.height||"64rpx"}return this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),t.width="icon"===this.shape?t.height:this.width,t.padding="icon"===this.shape?"0":t.padding,this.fontColorStyle&&(t.color=this.fontColorStyle),this.backgroundColorClass||(this.plain?t.borderColor=this.backgroundColorStyle||"#080808":t.backgroundColor=this.backgroundColorStyle||"#FFFFFF"),this.shadow&&!this.backgroundColorClass&&(-1!=this.backgroundColorStyle.indexOf("#")?t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"#000000","10"):-1==this.backgroundColorStyle.indexOf("rgb")&&-1==this.backgroundColorStyle.indexOf("rgba")&&this.backgroundColorStyle||(t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"rgba(0, 0, 0, 0.1)"))),t}},data:function(){return{clickTime:0,clickIntervalTime:200}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.blockRepeatClick){var e=(new Date).getTime();if(e-this.clickTime<=this.clickIntervalTime)return;this.clickTime=e,setTimeout((function(){t.clickTime=0}),this.clickIntervalTime)}this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}},handleGetUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getuserinfo",n)},handleContact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("contact",n)},handleGetPhoneNumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getphonenumber",n)},handleError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("error",n)}}};e.default=o},6294:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-fb7703f0]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-fb7703f0]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-fb7703f0]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\n/* 顶部渐变*/.tn-navbg[data-v-fb7703f0]{background:linear-gradient(-120deg,#f15bb5,#9a5ce5,#01beff,#00f5d4);\n  /* background: linear-gradient(-120deg,  #9A5CE5, #01BEFF, #00F5D4, #43e97b); */\n  /* background: linear-gradient(-120deg,#c471f5, #ec008c, #ff4e50,#f9d423); */\n  /* background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a); */background-size:500% 500%;-webkit-animation:gradientBG-data-v-fb7703f0 15s ease infinite;animation:gradientBG-data-v-fb7703f0 15s ease infinite;position:fixed;top:0;width:100%;z-index:100}@-webkit-keyframes gradientBG-data-v-fb7703f0{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}@keyframes gradientBG-data-v-fb7703f0{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}\n/* 标题 start */.nav_title[data-v-fb7703f0]{-webkit-background-clip:text;color:transparent}.nav_title--wrap[data-v-fb7703f0]{position:relative;display:flex;height:%?120?%;font-size:%?42?%;align-items:center;justify-content:center;font-weight:700;background-image:url(https://resource.tuniaokj.com/images/title_bg/title00.png);background-size:cover}\n/* 标题 end */\n/* 富文本图示意 start */.news-img[data-v-fb7703f0]{z-index:-1;padding-bottom:%?40?%}.news-img uni-image[data-v-fb7703f0]{width:100%;margin:%?20?% 0}\n/* 资讯主图 start*/.image-article[data-v-fb7703f0]{border-radius:%?8?%;border:%?1?% solid #f8f7f8;width:%?200?%;height:%?200?%;position:relative}.image-pic[data-v-fb7703f0]{background-size:cover;background-repeat:no-repeat;background-position:top;border-radius:%?10?%}.article-shadow[data-v-fb7703f0]{border-radius:%?15?%;box-shadow:%?0?% %?0?% %?50?% %?0?% rgba(0,0,0,.07)}\n/* 文字截取*/.clamp-text-1[data-v-fb7703f0]{-webkit-line-clamp:1;display:-webkit-box;-webkit-box-orient:vertical;text-overflow:ellipsis;overflow:hidden}.clamp-text-2[data-v-fb7703f0]{-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical;text-overflow:ellipsis;overflow:hidden}\n/* 标签内容 start*/.tn-tag-content__item[data-v-fb7703f0]{display:inline-block;line-height:%?35?%;padding:%?7?% %?25?% %?5?% %?25?%}.tn-tag-content__item--prefix[data-v-fb7703f0]{padding-right:%?10?%}\n/* 标签内容 end*/\n/* 底部悬浮按钮 start*/.tn-tabbar-height[data-v-fb7703f0]{min-height:%?100?%;height:calc(%?120?% + env(safe-area-inset-bottom) / 2)}.tn-footerfixed[data-v-fb7703f0]{position:fixed;width:100%;bottom:calc(%?30?% + env(safe-area-inset-bottom));z-index:1024;box-shadow:0 %?1?% %?6?% transparent}\n/* 底部悬浮按钮 end*/\n/* 查看*/.see[data-v-fb7703f0]{display:flex;justify-content:space-between;padding-top:%?10?%;border-radius:%?6?%;color:#666;line-height:1.6}\n/* 间隔线 start*/.tn-strip-bottom[data-v-fb7703f0]{width:100%;border-bottom:%?20?% solid hsla(0,0%,94.5%,.8)}\n/* 间隔线 end*/',""]),t.exports=e},"6cf4":function(t,e,n){var a=n("27b46");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("1d5fcba4",a,!0,{sourceMap:!1,shadowMode:!1})},"7f1e":function(t,e,n){"use strict";var a=n("2dc8"),i=n.n(a);i.a},baa5:function(t,e,n){"use strict";var a=n("23e7"),i=n("e58c");a({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},c0a4:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-button",{staticClass:"tn-btn-class tn-btn",class:[t.buttonClass,t.backgroundColorClass,t.fontColorClass],style:[t.buttonStyle],attrs:{"hover-class":"tn-hover",loading:t.loading,disabled:t.disabled,"form-type":t.formType,"open-type":t.openType},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetUserInfo.apply(void 0,arguments)},getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetPhoneNumber.apply(void 0,arguments)},contact:function(e){arguments[0]=e=t.$handleEvent(e),t.handleContact.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.handleError.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},i=[]},d5a8:function(t,e,n){"use strict";n.r(e);var a=n("572e"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},e6e0:function(t,e,n){"use strict";n.r(e);var a=n("c0a4"),i=n("d5a8");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("3586");var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"778c77a3",null,!1,a["a"],void 0);e["default"]=s.exports},e79f:function(t,e,n){"use strict";n("7a82");var a=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("88ff")),o={name:"TemplateNews",mixins:[i.default],data:function(){return{groupList:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg"}],content:[{userAvatar:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",userName:"可我会像",date:"2021年12月20日",color:"red",label:["小程序"],title:"小程序官网源码，开源欢迎白嫖嗷嗷",desc:"小程序前端源码开源，欢迎白嫖嗷嗷，可以的话，插件市场三连支持一下",mainImage:"https://resource.tuniaokj.com/images/shop/prototype2.jpg",viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:567},collectionCount:543,commentCount:543,likeCount:206},{userAvatar:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",color:"brown",label:["工具"],title:"小程序任意页面生成二维码",desc:"二维码生成器",mainImage:"https://resource.tuniaokj.com/images/shop/card.jpg",viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62}]}},methods:{tn:function(t){uni.navigateTo({url:t})}}};e.default=o},ebd7:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={tnNavBar:n("aa86").default,tnAvatarGroup:n("126a").default,tnButton:n("e6e0").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-news tn-safe-area-inset-bottom"},[n("v-uni-view",{staticClass:"tn-navbg",style:{height:t.vuex_custom_bar_height+"px"}},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"}),n("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1)],1),n("v-uni-view",{staticClass:"tn-margin-top-xs",style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("v-uni-view",{staticClass:"nav_title--wrap"},[n("v-uni-view",{staticClass:"nav_title tn-cool-bg-color-6"},[t._v("图鸟模板上线啦")])],1),n("v-uni-view",{staticClass:"news-img tn-padding"},[n("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/advertise/1.jpg",mode:"widthFix"}}),n("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/advertise/2.jpg",mode:"widthFix"}}),n("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/advertise/8.jpg",mode:"widthFix"}})],1)],1),n("v-uni-view",{staticClass:"tn-margin-top tn-padding-top-sm tn-margin-bottom"},[n("v-uni-view",{staticClass:"see"},[n("v-uni-view",{staticClass:"justify-content-item tn-flex tn-flex-col-center"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx","margin-left":"30rpx"}},[n("tn-avatar-group",{attrs:{lists:t.groupList,size:"sm"}})],1)],1),n("v-uni-view",{staticClass:"tn-margin-right"},[n("v-uni-text",{staticClass:"tn-color-grey tn-text-df tn-margin-right-sm"},[t._v("263 查看")]),n("v-uni-text",{staticClass:"tn-color-grey tn-text-df"},[t._v("34 点赞")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-strip-bottom"}),n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between"},[n("v-uni-view",{staticClass:"justify-content-item tn-margin tn-text-bold tn-text-xl"},[t._v("Ta们都在看")]),n("v-uni-view",{staticClass:"justify-content-item tn-margin tn-text-lg tn-color-grey",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tn("/homePages/hot")}}},[n("v-uni-text",{staticClass:"tn-padding-xs"},[t._v("全部")]),n("v-uni-text",{staticClass:"tn-icon-topics"})],1)],1),n("v-uni-view",{},[t._l(t.content,(function(e,a){return[n("v-uni-view",{key:a+"_0",staticClass:"article-shadow tn-margin"},[n("v-uni-view",{staticClass:"tn-flex"},[n("v-uni-view",{staticClass:"tn-margin-sm tn-padding-top-xs",staticStyle:{width:"100%"}},[n("v-uni-view",{staticClass:"tn-text-lg tn-text-bold clamp-text-1 tn-text-justify"},[n("v-uni-text",{},[t._v(t._s(e.title))])],1),n("v-uni-view",{staticClass:"tn-padding-top-xs",staticStyle:{"min-height":"90rpx"}},[n("v-uni-text",{staticClass:"tn-text-df tn-color-gray clamp-text-2 tn-text-justify"},[t._v(t._s(e.desc))])],1),n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-between"},[t._l(e.label,(function(a,i){return n("v-uni-view",{key:i,staticClass:"justify-content-item tn-tag-content__item tn-margin-right-xs tn-round tn-text-sm tn-text-bold",class:["tn-bg-"+e.color+"--light tn-color-"+e.color],staticStyle:{transform:"translate(0rpx,6rpx)"}},[n("v-uni-text",{staticClass:"tn-tag-content__item--prefix"},[t._v("#")]),t._v(t._s(a))],1)})),n("v-uni-view",{staticClass:"justify-content-item tn-color-gray tn-text-center tn-color-gray--disabled",staticStyle:{"padding-top":"15rpx"}},[n("v-uni-text",{staticClass:"tn-icon-footprint tn-padding-right-xs tn-text-lg"}),n("v-uni-text",{staticClass:"tn-padding-right tn-text-df"},[t._v(t._s(e.collectionCount))]),n("v-uni-text",{staticClass:"tn-icon-like-lack tn-padding-right-xs tn-text-lg"}),n("v-uni-text",{staticClass:"tn-text-df"},[t._v(t._s(e.likeCount))])],1)],2)],1),n("v-uni-view",{staticClass:"image-pic tn-margin-sm",style:"background-image:url("+e.userAvatar+")"},[n("v-uni-view",{staticClass:"image-article"})],1)],1)],1)]}))],2),n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-footerfixed"},[n("v-uni-view",{staticClass:"tn-flex-1 justify-content-item tn-margin-xs tn-text-center"},[n("tn-button",{attrs:{backgroundColor:"#00FFC6",padding:"40rpx 0",width:"90%",shadow:!0,fontBold:!0}},[n("v-uni-text",{staticClass:"tn-icon-like-lack tn-padding-right-xs tn-color-black"}),n("v-uni-text",{staticClass:"tn-color-black"},[t._v("点 赞")])],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 justify-content-item tn-margin-xs tn-text-center"},[n("tn-button",{attrs:{backgroundColor:"#FFF00D",padding:"40rpx 0",width:"90%",shadow:!0,fontBold:!0,"open-type":"share"}},[n("v-uni-text",{staticClass:"tn-icon-share-triangle tn-padding-right-xs tn-color-black"}),n("v-uni-text",{staticClass:"tn-color-black"},[t._v("分 享")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-tabbar-height"})],1)},o=[]}}]);