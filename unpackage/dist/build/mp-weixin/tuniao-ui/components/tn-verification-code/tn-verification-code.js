(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-verification-code/tn-verification-code"],{"2bda":function(t,e,n){"use strict";var i=n("9359"),s=n.n(i);s.a},"5a0c":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},s=[]},9359:function(t,e,n){},a56e:function(t,e,n){"use strict";n.r(e);var i=n("5a0c"),s=n("bd1f");for(var a in s)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(a);n("2bda");var u=n("f0c5"),c=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,"45e9b109",null,!1,i["a"],void 0);e["default"]=c.exports},bd1f:function(t,e,n){"use strict";n.r(e);var i=n("f5b4"),s=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},f5b4:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tn-verification-code",props:{seconds:{type:Number,default:60},startText:{type:String,default:"获取验证码"},countDownText:{type:String,default:"s秒后重新获取"},endText:{type:String,default:"重新获取"},keepRunning:{type:Boolean,default:!1},uniqueKey:{type:String,default:""}},data:function(){return{timer:null,secNum:this.seconds,canGetCode:!0}},watch:{seconds:{handler:function(t){this.secNum=t},immediate:!0}},mounted:function(){this.checkKeepRunning()},beforeDestroy:function(){this.setTimeToStorage(),this.timer&&(clearInterval(this.timer),this.timer=null)},methods:{checkKeepRunning:function(){var e=Number(t.getStorageSync(this.uniqueKey+"_$tCountDownTimestamp"));if(!e)return this.changeEvent(this.startText);var n=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>n?(this.secNum=e-n,t.removeStorageSync(this.uniqueKey+"_$tCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var t=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.countDownText.replace(/s|S/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--t.secNum?t.changeEvent(t.countDownText.replace(/s|S/,t.secNum)):(t.reset(),t.$emit("end"))}),1e3)},reset:function(){this.canGetCode=!0,this.timer&&(clearInterval(this.timer),this.timer=null),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(t){this.$emit("change",t)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var e=Math.floor(+new Date/1e3);t.setStorageSync(this.uniqueKey+"_$tCountDownTimestamp",e+this.secNum)}}}};e.default=n}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-verification-code/tn-verification-code-create-component',
    {
        'tuniao-ui/components/tn-verification-code/tn-verification-code-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a56e"))
        })
    },
    [['tuniao-ui/components/tn-verification-code/tn-verification-code-create-component']]
]);