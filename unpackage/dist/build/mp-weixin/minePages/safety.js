(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["minePages/safety"],{"139c":function(e,n,t){"use strict";t.r(n);var r=t("7807"),a=t("87c8");for(var o in a)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t("d2a2");var s=t("f0c5"),u=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"35cf1568",null,!1,r["a"],void 0);n["default"]=u.exports},1994:function(e,n,t){"use strict";(function(e,n){var r=t("4ea4");t("1827");r(t("66fd"));var a=r(t("139c"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(a.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},5900:function(e,n,t){"use strict";(function(e){var r=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("2eee")),o=r(t("c973")),s=r(t("88ff")),u={name:"TemplateSafety",mixins:[s.default],data:function(){return{currentModeIndex:0,modeSliderStyle:{left:0},showPassword:!1,show:!1,username:"",email:"",password:"",newPassword:""}},watch:{currentModeIndex:function(n){var t=e.upx2px(238);this.modeSliderStyle.left="".concat(t*n,"px")}},methods:{updateUsername:function(){var n=this;return(0,o.default)(a.default.mark((function t(){var r,o,s;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.username){t.next=3;break}return e.$showMsg("请输入新昵称！"),t.abrupt("return");case 3:return r={username:n.username,userId:e.getStorageSync("userId")},t.next=6,e.$http.put("/user/updateUsername",r);case 6:o=t.sent,s=o.data,1===s.code?(e.showToast({title:"修改昵称成功！",icon:"success"}),setTimeout((function(){e.reLaunch({url:"/pages/index"})}),1100)):e.$showMsg(s.msg);case 9:case"end":return t.stop()}}),t)})))()},confirm:function(){e.removeStorageSync("userId"),e.removeStorageSync("token"),e.navigateTo({url:"/pages/login/login"})},updatePassword:function(){var n=this;return(0,o.default)(a.default.mark((function t(){var r,o,s;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.email){t.next=3;break}return e.$showMsg("QQ号码不能为空！"),t.abrupt("return");case 3:if(n.password){t.next=6;break}return e.$showMsg("旧密码不能为空！"),t.abrupt("return");case 6:if(n.newPassword){t.next=9;break}return e.$showMsg("新密码不能为空！"),t.abrupt("return");case 9:if(n.password!==n.newPassword){t.next=12;break}return e.$showMsg("旧密码与新密码不能相同哦！"),t.abrupt("return");case 12:return r={email:n.email+"@qq.com",password:n.password,newPassword:n.newPassword},t.next=15,e.$http.put("/user/updatePassword",r);case 15:o=t.sent,s=o.data,1===s.code?n.show=!0:e.$showMsg(s.msg);case 18:case"end":return t.stop()}}),t)})))()},modeSwitch:function(e){this.currentModeIndex=e,this.showPassword=!1}}};n.default=u}).call(this,t("543d")["default"])},7807:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return r}));var r={tnNavBar:function(){return Promise.all([t.e("common/vendor"),t.e("tuniao-ui/components/tn-nav-bar/tn-nav-bar")]).then(t.bind(null,"aa86"))},tnModal:function(){return Promise.all([t.e("common/vendor"),t.e("tuniao-ui/components/tn-modal/tn-modal")]).then(t.bind(null,"ca15"))},tnButton:function(){return Promise.all([t.e("common/vendor"),t.e("tuniao-ui/components/tn-button/tn-button")]).then(t.bind(null,"e6e0"))}},a=function(){var e=this,n=e.$createElement,t=(e._self._c,e.__get_style([e.modeSliderStyle]));e._isMounted||(e.e0=function(n){e.showPassword=!e.showPassword},e.e1=function(n){e.showPassword=!e.showPassword}),e.$mp.data=Object.assign({},{$root:{s0:t}})},o=[]},"87c8":function(e,n,t){"use strict";t.r(n);var r=t("5900"),a=t.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=a.a},a362:function(e,n,t){},d2a2:function(e,n,t){"use strict";var r=t("a362"),a=t.n(r);a.a}},[["1994","common/runtime","common/vendor"]]]);