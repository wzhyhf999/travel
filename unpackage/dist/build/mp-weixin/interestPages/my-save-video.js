(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["interestPages/my-save-video"],{"0bb2":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={tnNavBar:function(){return Promise.all([n.e("common/vendor"),n.e("tuniao-ui/components/tn-nav-bar/tn-nav-bar")]).then(n.bind(null,"aa86"))},tnEmpty:function(){return n.e("tuniao-ui/components/tn-empty/tn-empty").then(n.bind(null,"c9e6"))}},i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.videoList.length),a=e.__map(e.videoList,(function(t,n){var a=e.__get_orig(t),i=t.liked>9999&&t.liked<99999?Math.floor(t.liked/1e3):null,o=t.liked>99999?Math.floor(t.liked/1e3):null;return{$orig:a,g1:i,g2:o}}));e.$mp.data=Object.assign({},{$root:{g0:n,l0:a}})},o=[]},"39f0":function(e,t,n){"use strict";n.r(t);var a=n("b0b4"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"4add":function(e,t,n){"use strict";n.r(t);var a=n("0bb2"),i=n("39f0");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("dc39");var r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=u.exports},b0b4:function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("2eee")),o=a(n("c973")),r={data:function(){return{videoList:[]}},onLoad:function(){this.queryVideoAll()},methods:{seeVideoById:function(t){e.navigateTo({url:"/minePages/video/video?videoId="+t})},queryVideoAll:function(){var t=this;return(0,o.default)(i.default.mark((function n(){var a,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.get("/video/getUserSaveVideo");case 2:a=n.sent,o=a.data,1===o.code&&(t.videoList=o.data);case 5:case"end":return n.stop()}}),n)})))()},cancle:function(){e.navigateBack()}}};t.default=r}).call(this,n("543d")["default"])},c79d:function(e,t,n){},dc39:function(e,t,n){"use strict";var a=n("c79d"),i=n.n(a);i.a},ec6b:function(e,t,n){"use strict";(function(e,t){var a=n("4ea4");n("1827");a(n("66fd"));var i=a(n("4add"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["ec6b","common/runtime","common/vendor"]]]);