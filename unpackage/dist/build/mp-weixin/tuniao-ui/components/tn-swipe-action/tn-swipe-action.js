(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-swipe-action/tn-swipe-action"],{4007:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"tn-swipe-action",props:{autoClose:{type:Boolean,default:!0}},provide:function(){return{swipeAction:this}},computed:{parentData:function(){return[this.autoClose]}},data:function(){return{}},watch:{parentData:function(){this.children.length&&this.children.map((function(t){"function"===typeof t.updateParentData&&t.updateParentData()}))}},created:function(){this.children=[]},methods:{closeOther:function(t){this.autoClose&&this.children.map((function(n,e){t!==n&&n.closeHandler()}))}}};n.default=a},ca43:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]},cdd2:function(t,n,e){"use strict";e.r(n);var a=e("ca43"),i=e("ec32");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);var u=e("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=c.exports},ec32:function(t,n,e){"use strict";e.r(n);var a=e("4007"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-swipe-action/tn-swipe-action-create-component',
    {
        'tuniao-ui/components/tn-swipe-action/tn-swipe-action-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("cdd2"))
        })
    },
    [['tuniao-ui/components/tn-swipe-action/tn-swipe-action-create-component']]
]);