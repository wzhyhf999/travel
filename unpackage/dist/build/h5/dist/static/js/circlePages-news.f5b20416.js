(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["circlePages-news"],{"0192":function(t,e,a){var n=a("4205");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("dcb6fe08",n,!0,{sourceMap:!1,shadowMode:!1})},"083e":function(t,e,a){"use strict";a.r(e);var n=a("ebd7"),i=a("33bd");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("7f1e");var s=a("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"fb7703f0",null,!1,n["a"],void 0);e["default"]=o.exports},"126a":function(t,e,a){"use strict";a.r(e);var n=a("f721"),i=a("26c3");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("ccd7");var s=a("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"43fe7874",null,!1,n["a"],void 0);e["default"]=o.exports},"26c3":function(t,e,a){"use strict";a.r(e);var n=a("3320"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"2ba2":function(t,e,a){"use strict";a.r(e);var n=a("90c2"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"2dc8":function(t,e,a){var n=a("6294");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("513b6b1c",n,!0,{sourceMap:!1,shadowMode:!1})},3320:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("ac1f"),a("5319"),a("00b4");var n={name:"tn-avatar-group",props:{lists:{type:Array,default:function(){return[]}},shape:{type:String,default:"circle"},size:{type:[Number,String],default:""},imgMode:{type:String,default:"aspectFill"},gap:{type:Number,default:.4}},computed:{itemStyle:function(){var t=this;return function(e){var a={};if(t._checkSizeIsInline())switch(t.size){case"sm":a.marginLeft=0!=e?"".concat(-48*t.gap,"rpx"):"";break;case"lg":a.marginLeft=0!=e?"".concat(-96*t.gap,"rpx"):"";break;case"xl":a.marginLeft=0!=e?"".concat(-128*t.gap,"rpx"):"";break}else{var n=Number(t.size.replace(/(px|rpx)/g,""))||64;a.marginLeft=0!=e?"-".concat(n*t.gap,"rpx"):""}return a}}},data:function(){return{}},methods:{_checkSizeIsInline:function(){return!!/(xs|sm|md|lg|xl|xxl)/.test(this.size)}}};e.default=n},"33bd":function(t,e,a){"use strict";a.r(e);var n=a("e79f"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},4205:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tn-avatar-group[data-v-43fe7874]{display:flex;flex-direction:row}.tn-avatar-group__item[data-v-43fe7874]{position:relative}',""]),t.exports=e},4693:function(t,e,a){"use strict";a.r(e);var n=a("87f5"),i=a("2ba2");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("c70d");var s=a("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"40d88c0a",null,!1,n["a"],void 0);e["default"]=o.exports},6294:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-fb7703f0]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-fb7703f0]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-fb7703f0]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\n/* 顶部渐变*/.tn-navbg[data-v-fb7703f0]{background:linear-gradient(-120deg,#f15bb5,#9a5ce5,#01beff,#00f5d4);\n  /* background: linear-gradient(-120deg,  #9A5CE5, #01BEFF, #00F5D4, #43e97b); */\n  /* background: linear-gradient(-120deg,#c471f5, #ec008c, #ff4e50,#f9d423); */\n  /* background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a); */background-size:500% 500%;-webkit-animation:gradientBG-data-v-fb7703f0 15s ease infinite;animation:gradientBG-data-v-fb7703f0 15s ease infinite;position:fixed;top:0;width:100%;z-index:100}@-webkit-keyframes gradientBG-data-v-fb7703f0{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}@keyframes gradientBG-data-v-fb7703f0{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}\n/* 标题 start */.nav_title[data-v-fb7703f0]{-webkit-background-clip:text;color:transparent}.nav_title--wrap[data-v-fb7703f0]{position:relative;display:flex;height:%?120?%;font-size:%?42?%;align-items:center;justify-content:center;font-weight:700;background-image:url(https://resource.tuniaokj.com/images/title_bg/title00.png);background-size:cover}\n/* 标题 end */\n/* 富文本图示意 start */.news-img[data-v-fb7703f0]{z-index:-1;padding-bottom:%?40?%}.news-img uni-image[data-v-fb7703f0]{width:100%;margin:%?20?% 0}\n/* 资讯主图 start*/.image-article[data-v-fb7703f0]{border-radius:%?8?%;border:%?1?% solid #f8f7f8;width:%?200?%;height:%?200?%;position:relative}.image-pic[data-v-fb7703f0]{background-size:cover;background-repeat:no-repeat;background-position:top;border-radius:%?10?%}.article-shadow[data-v-fb7703f0]{border-radius:%?15?%;box-shadow:%?0?% %?0?% %?50?% %?0?% rgba(0,0,0,.07)}\n/* 文字截取*/.clamp-text-1[data-v-fb7703f0]{-webkit-line-clamp:1;display:-webkit-box;-webkit-box-orient:vertical;text-overflow:ellipsis;overflow:hidden}.clamp-text-2[data-v-fb7703f0]{-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical;text-overflow:ellipsis;overflow:hidden}\n/* 标签内容 start*/.tn-tag-content__item[data-v-fb7703f0]{display:inline-block;line-height:%?35?%;padding:%?7?% %?25?% %?5?% %?25?%}.tn-tag-content__item--prefix[data-v-fb7703f0]{padding-right:%?10?%}\n/* 标签内容 end*/\n/* 底部悬浮按钮 start*/.tn-tabbar-height[data-v-fb7703f0]{min-height:%?100?%;height:calc(%?120?% + env(safe-area-inset-bottom) / 2)}.tn-footerfixed[data-v-fb7703f0]{position:fixed;width:100%;bottom:calc(%?30?% + env(safe-area-inset-bottom));z-index:1024;box-shadow:0 %?1?% %?6?% transparent}\n/* 底部悬浮按钮 end*/\n/* 查看*/.see[data-v-fb7703f0]{display:flex;justify-content:space-between;padding-top:%?10?%;border-radius:%?6?%;color:#666;line-height:1.6}\n/* 间隔线 start*/.tn-strip-bottom[data-v-fb7703f0]{width:100%;border-bottom:%?20?% solid hsla(0,0%,94.5%,.8)}\n/* 间隔线 end*/',""]),t.exports=e},"7f1e":function(t,e,a){"use strict";var n=a("2dc8"),i=a.n(n);i.a},"87f5":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={tnBadge:a("8eb7").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tn-avatar-class tn-avatar",class:[t.backgroundColorClass,t.avatarClass],style:[t.avatarStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t.showImg?a("v-uni-image",{staticClass:"tn-avatar__img",class:[t.imgClass],attrs:{src:t.src,mode:t.imgMode||"aspectFill"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.loadImageError.apply(void 0,arguments)}}}):a("v-uni-view",{staticClass:"tn-avatar__text"},[t.text?a("v-uni-view",[t._v(t._s(t.text))]):a("v-uni-view",{class:["tn-icon-"+t.icon]})],1),t.badge&&(t.badgeIcon||t.badgeText)?a("tn-badge",{attrs:{radius:t.badgeSize,backgroundColor:t.badgeBgColor,fontColor:t.badgeColor,fontSize:t.badgeSize-8,absolute:!0,top:t.badgePosition[0],right:t.badgePosition[1]}},[t.badgeIcon&&""===t.badgeText?a("v-uni-view",[a("v-uni-view",{class:["tn-icon-"+t.badgeIcon]})],1):a("v-uni-view",[t._v(t._s(t.badgeText))])],1):t._e()],1)},r=[]},"90c2":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("99af"),a("ac1f"),a("00b4");var i=n(a("9edb")),r={mixins:[i.default],name:"tn-avatar",props:{index:{type:[Number,String],default:0},shape:{type:String,default:"circle"},size:{type:[Number,String],default:""},shadow:{type:Boolean,default:!1},border:{type:Boolean,default:!1},borderColor:{type:String,default:"rgba(0, 0, 0, 0.1)"},borderSize:{type:Number,default:2},src:{type:String,default:""},text:{type:String,default:""},icon:{type:String,default:""},imgMode:{type:String,default:"aspectFill"},badge:{type:Boolean,default:!1},badgeSize:{type:Number,default:0},badgeBgColor:{type:String,default:"#AAAAAA"},badgeColor:{type:String,default:"#FFFFFF"},badgeIcon:{type:String,default:""},badgeText:{type:String,default:""},badgePosition:{type:Array,default:function(){return[0,0]}}},data:function(){return{imgLoadError:!1}},computed:{showImg:function(){return""===this.text&&""===this.icon},avatarClass:function(){var t="";return t+=" tn-avatar--".concat(this.shape),this._checkSizeIsInline()&&(t+=" tn-avatar--".concat(this.size)),this.shadow&&(t+=" tn-avatar--shadow"),t},avatarStyle:function(){var t={};return this.backgroundColorStyle?t.background=this.backgroundColorStyle:this.shadow&&this.showImg&&(t.backgroundImage="url(".concat(this.src,")")),this.border&&(t.border="".concat(this.borderSize,"rpx solid ").concat(this.borderColor)),this._checkSizeIsInline()||(t.width=this.size,t.height=this.size),t},imgClass:function(){var t="";return t+=" tn-avatar__img--".concat(this.shape),t}},methods:{loadImageError:function(){this.imgLoadError=!0},click:function(){this.$emit("click",this.index)},_checkSizeIsInline:function(){return!!/^(xs|sm|md|lg|xl|xxl)$/.test(this.size)}}};e.default=r},b207:function(t,e,a){var n=a("e667e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("17f01f3a",n,!0,{sourceMap:!1,shadowMode:!1})},c70d:function(t,e,a){"use strict";var n=a("b207"),i=a.n(n);i.a},ccd7:function(t,e,a){"use strict";var n=a("0192"),i=a.n(n);i.a},e667e:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tn-avatar[data-v-40d88c0a]{display:inline-flex;margin:0;padding:0;text-align:center;align-items:center;justify-content:center;background-color:#e6e6e6;white-space:nowrap;position:relative;width:%?64?%;height:%?64?%;z-index:1}.tn-avatar--sm[data-v-40d88c0a]{width:%?48?%;height:%?48?%}.tn-avatar--lg[data-v-40d88c0a]{width:%?96?%;height:%?96?%}.tn-avatar--xl[data-v-40d88c0a]{width:%?128?%;height:%?128?%}.tn-avatar--square[data-v-40d88c0a]{border-radius:%?10?%}.tn-avatar--circle[data-v-40d88c0a]{border-radius:%?5000?%}.tn-avatar--shadow[data-v-40d88c0a]{position:relative}.tn-avatar--shadow[data-v-40d88c0a]::after{content:" ";display:block;background:inherit;-webkit-filter:blur(%?10?%);filter:blur(%?10?%);position:absolute;width:100%;height:100%;top:%?10?%;left:%?10?%;z-index:-1;opacity:.4;-webkit-transform-origin:0 0;transform-origin:0 0;border-radius:inherit;-webkit-transform:scale(1);transform:scale(1)}.tn-avatar__img[data-v-40d88c0a]{width:100%;height:100%}.tn-avatar__img--square[data-v-40d88c0a]{border-radius:%?10?%}.tn-avatar__img--circle[data-v-40d88c0a]{border-radius:%?5000?%}.tn-avatar__text[data-v-40d88c0a]{display:flex;flex-direction:row;align-items:center;justify-content:center}',""]),t.exports=e},e79f:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("88ff")),r={name:"TemplateNews",mixins:[i.default],data:function(){return{groupList:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg"}],content:[{userAvatar:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",userName:"可我会像",date:"2021年12月20日",color:"red",label:["小程序"],title:"小程序官网源码，开源欢迎白嫖嗷嗷",desc:"小程序前端源码开源，欢迎白嫖嗷嗷，可以的话，插件市场三连支持一下",mainImage:"https://resource.tuniaokj.com/images/shop/prototype2.jpg",viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:567},collectionCount:543,commentCount:543,likeCount:206},{userAvatar:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",color:"brown",label:["工具"],title:"小程序任意页面生成二维码",desc:"二维码生成器",mainImage:"https://resource.tuniaokj.com/images/shop/card.jpg",viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62}]}},methods:{tn:function(t){uni.navigateTo({url:t})}}};e.default=r},ebd7:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={tnNavBar:a("aa86").default,tnAvatarGroup:a("126a").default,tnButton:a("e6e0").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"template-news tn-safe-area-inset-bottom"},[a("v-uni-view",{staticClass:"tn-navbg",style:{height:t.vuex_custom_bar_height+"px"}},[a("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[a("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[a("v-uni-text",{staticClass:"icon tn-icon-left"}),a("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1)],1),a("v-uni-view",{staticClass:"tn-margin-top-xs",style:{paddingTop:t.vuex_custom_bar_height+"px"}},[a("v-uni-view",{staticClass:"nav_title--wrap"},[a("v-uni-view",{staticClass:"nav_title tn-cool-bg-color-6"},[t._v("图鸟模板上线啦")])],1),a("v-uni-view",{staticClass:"news-img tn-padding"},[a("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/advertise/1.jpg",mode:"widthFix"}}),a("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/advertise/2.jpg",mode:"widthFix"}}),a("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/advertise/8.jpg",mode:"widthFix"}})],1)],1),a("v-uni-view",{staticClass:"tn-margin-top tn-padding-top-sm tn-margin-bottom"},[a("v-uni-view",{staticClass:"see"},[a("v-uni-view",{staticClass:"justify-content-item tn-flex tn-flex-col-center"},[a("v-uni-view",{staticStyle:{"margin-right":"10rpx","margin-left":"30rpx"}},[a("tn-avatar-group",{attrs:{lists:t.groupList,size:"sm"}})],1)],1),a("v-uni-view",{staticClass:"tn-margin-right"},[a("v-uni-text",{staticClass:"tn-color-grey tn-text-df tn-margin-right-sm"},[t._v("263 查看")]),a("v-uni-text",{staticClass:"tn-color-grey tn-text-df"},[t._v("34 点赞")])],1)],1)],1),a("v-uni-view",{staticClass:"tn-strip-bottom"}),a("v-uni-view",{staticClass:"tn-flex tn-flex-row-between"},[a("v-uni-view",{staticClass:"justify-content-item tn-margin tn-text-bold tn-text-xl"},[t._v("Ta们都在看")]),a("v-uni-view",{staticClass:"justify-content-item tn-margin tn-text-lg tn-color-grey",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tn("/homePages/hot")}}},[a("v-uni-text",{staticClass:"tn-padding-xs"},[t._v("全部")]),a("v-uni-text",{staticClass:"tn-icon-topics"})],1)],1),a("v-uni-view",{},[t._l(t.content,(function(e,n){return[a("v-uni-view",{key:n+"_0",staticClass:"article-shadow tn-margin"},[a("v-uni-view",{staticClass:"tn-flex"},[a("v-uni-view",{staticClass:"tn-margin-sm tn-padding-top-xs",staticStyle:{width:"100%"}},[a("v-uni-view",{staticClass:"tn-text-lg tn-text-bold clamp-text-1 tn-text-justify"},[a("v-uni-text",{},[t._v(t._s(e.title))])],1),a("v-uni-view",{staticClass:"tn-padding-top-xs",staticStyle:{"min-height":"90rpx"}},[a("v-uni-text",{staticClass:"tn-text-df tn-color-gray clamp-text-2 tn-text-justify"},[t._v(t._s(e.desc))])],1),a("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-between"},[t._l(e.label,(function(n,i){return a("v-uni-view",{key:i,staticClass:"justify-content-item tn-tag-content__item tn-margin-right-xs tn-round tn-text-sm tn-text-bold",class:["tn-bg-"+e.color+"--light tn-color-"+e.color],staticStyle:{transform:"translate(0rpx,6rpx)"}},[a("v-uni-text",{staticClass:"tn-tag-content__item--prefix"},[t._v("#")]),t._v(t._s(n))],1)})),a("v-uni-view",{staticClass:"justify-content-item tn-color-gray tn-text-center tn-color-gray--disabled",staticStyle:{"padding-top":"15rpx"}},[a("v-uni-text",{staticClass:"tn-icon-footprint tn-padding-right-xs tn-text-lg"}),a("v-uni-text",{staticClass:"tn-padding-right tn-text-df"},[t._v(t._s(e.collectionCount))]),a("v-uni-text",{staticClass:"tn-icon-like-lack tn-padding-right-xs tn-text-lg"}),a("v-uni-text",{staticClass:"tn-text-df"},[t._v(t._s(e.likeCount))])],1)],2)],1),a("v-uni-view",{staticClass:"image-pic tn-margin-sm",style:"background-image:url("+e.userAvatar+")"},[a("v-uni-view",{staticClass:"image-article"})],1)],1)],1)]}))],2),a("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-footerfixed"},[a("v-uni-view",{staticClass:"tn-flex-1 justify-content-item tn-margin-xs tn-text-center"},[a("tn-button",{attrs:{backgroundColor:"#00FFC6",padding:"40rpx 0",width:"90%",shadow:!0,fontBold:!0}},[a("v-uni-text",{staticClass:"tn-icon-like-lack tn-padding-right-xs tn-color-black"}),a("v-uni-text",{staticClass:"tn-color-black"},[t._v("点 赞")])],1)],1),a("v-uni-view",{staticClass:"tn-flex-1 justify-content-item tn-margin-xs tn-text-center"},[a("tn-button",{attrs:{backgroundColor:"#FFF00D",padding:"40rpx 0",width:"90%",shadow:!0,fontBold:!0,"open-type":"share"}},[a("v-uni-text",{staticClass:"tn-icon-share-triangle tn-padding-right-xs tn-color-black"}),a("v-uni-text",{staticClass:"tn-color-black"},[t._v("分 享")])],1)],1)],1),a("v-uni-view",{staticClass:"tn-tabbar-height"})],1)},r=[]},f721:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={tnAvatar:a("4693").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tn-avatar-group-class tn-avatar-group"},t._l(t.lists,(function(e,n){return a("v-uni-view",{key:n,staticClass:"tn-avatar-group__item",style:[t.itemStyle(n)]},[a("tn-avatar",{attrs:{src:e.src||"",text:e.text||"",icon:e.icon||"",size:t.size,shape:t.shape,imgMode:t.imgMode,border:!0,backgroundColor:"rgba(255, 255, 255, 0.4)",borderSize:4}})],1)})),1)},r=[]}}]);