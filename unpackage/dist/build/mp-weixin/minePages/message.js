(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["minePages/message"],{"385e":function(n,t,e){"use strict";var o=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(e("88ff")),a={name:"TemplateMessage",mixins:[i.default],data:function(){return{show1:!1,liked:35,comment:52,system:99,options:[{icon:"star",style:{backgroundColor:"#FFA726",width:"80rpx",height:"80rpx",margin:"0 12rpx",borderRadius:"100rpx"}},{icon:"delete",style:{backgroundColor:"#E83A30",width:"80rpx",height:"80rpx",margin:"0 12rpx",borderRadius:"100rpx"}}]}},onLoad:function(){},methods:{clear:function(){this.liked=0,this.comment=0,this.system=0,this.show1=!1},showModal:function(n){this.openModal()},openModal:function(){this.show1=!0}}};t.default=a},"542f":function(n,t,e){"use strict";(function(n,t){var o=e("4ea4");e("1827");o(e("66fd"));var i=o(e("a369"));n.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},a369:function(n,t,e){"use strict";e.r(t);var o=e("f9d0"),i=e("a458");for(var a in i)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("c43a");var u=e("f0c5"),r=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"67d1b744",null,!1,o["a"],void 0);t["default"]=r.exports},a458:function(n,t,e){"use strict";e.r(t);var o=e("385e"),i=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=i.a},c43a:function(n,t,e){"use strict";var o=e("dc70"),i=e.n(o);i.a},dc70:function(n,t,e){},f9d0:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var o={tnNavBar:function(){return Promise.all([e.e("common/vendor"),e.e("tuniao-ui/components/tn-nav-bar/tn-nav-bar")]).then(e.bind(null,"aa86"))},tnBadge:function(){return Promise.all([e.e("common/vendor"),e.e("tuniao-ui/components/tn-badge/tn-badge")]).then(e.bind(null,"8eb7"))},tnModal:function(){return Promise.all([e.e("common/vendor"),e.e("tuniao-ui/components/tn-modal/tn-modal")]).then(e.bind(null,"ca15"))},tnButton:function(){return Promise.all([e.e("common/vendor"),e.e("tuniao-ui/components/tn-button/tn-button")]).then(e.bind(null,"e6e0"))},tnSwipeAction:function(){return e.e("tuniao-ui/components/tn-swipe-action/tn-swipe-action").then(e.bind(null,"cdd2"))},tnSwipeActionItem:function(){return e.e("tuniao-ui/components/tn-swipe-action-item/tn-swipe-action-item").then(e.bind(null,"fd37"))}},i=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.show1=!1})},a=[]}},[["542f","common/runtime","common/vendor"]]]);