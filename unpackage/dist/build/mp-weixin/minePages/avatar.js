(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["minePages/avatar"],{"442b":function(e,n,t){"use strict";(function(e,n){var o=t("4ea4");t("1827");o(t("66fd"));var a=o(t("eadc"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(a.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"69a8":function(e,n,t){"use strict";t.r(n);var o=t("b365"),a=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=a.a},b365:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"TemplateAvatar",components:{multipleOptionsDemo:function(){t.e("libs/components/multiple-options-demo").then(function(){return resolve(t("c554"))}.bind(null,t)).catch(t.oe)}},data:function(){return{imageUrl:"",isRound:!0,switchText:"切换为正方形裁剪框",showCropperImage:!1,cropperImageUrl:""}},methods:{chooseImage:function(){var n=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){var t=e.tempFilePaths[0];n.imageUrl=t},fail:function(e){console.log("chooseImage fail",e)}})},switchBorderRect:function(){this.isRound=!this.isRound,this.isRound?this.switchText="切换为正方形裁剪框":this.switchText="切换为圆形裁剪框"},cropperFinish:function(n){this.showCropperImage=!0,e.uploadFile({url:"https://www.wangzh.work/upload",filePath:n.url,name:"file",success:function(n){var t={userId:e.getStorageSync("userId"),avatar:JSON.parse(n.data).data};e.$http.put("/user/updateAvatar",t).then((function(n){1===n.data.code?(e.showToast({title:"更新头像成功",icon:"success",duration:1e3}),setTimeout((function(){e.reLaunch({url:"/pages/index"})}),1e3)):e.showToast({title:"更新头像失败",icon:"error",duration:1e3})}))},fail:function(n){console.log("uploadImage fail",n),e.showModal({content:n.errMsg,showCancel:!1})}}),n.url&&(this.cropperImageUrl=n.url),n.base64&&(this.cropperImageUrl="".concat(n.base64))}}};n.default=o}).call(this,t("543d")["default"])},bbdd:function(e,n,t){"use strict";var o=t("ff79"),a=t.n(o);a.a},eadc:function(e,n,t){"use strict";t.r(n);var o=t("ff15"),a=t("69a8");for(var r in a)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(r);t("bbdd");var i=t("f0c5"),u=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"3917bcad",null,!1,o["a"],void 0);n["default"]=u.exports},ff15:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return o}));var o={tnNavBar:function(){return Promise.all([t.e("common/vendor"),t.e("tuniao-ui/components/tn-nav-bar/tn-nav-bar")]).then(t.bind(null,"aa86"))},tnCropper:function(){return Promise.all([t.e("common/vendor"),t.e("tuniao-ui/components/tn-cropper/tn-cropper")]).then(t.bind(null,"caf3"))},tnPopup:function(){return Promise.all([t.e("common/vendor"),t.e("tuniao-ui/components/tn-popup/tn-popup")]).then(t.bind(null,"3a3d"))}},a=function(){var e=this.$createElement;this._self._c},r=[]},ff79:function(e,n,t){}},[["442b","common/runtime","common/vendor"]]]);