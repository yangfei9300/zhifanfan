(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages2/qiandao/qiandao"],{"3eb7":function(n,t,e){},"52c4":function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return o}));var o={homeGoodItem:function(){return e.e("components/homeGoodItem/homeGoodItem").then(e.bind(null,"e6ae"))}},a=function(){var n=this.$createElement;this._self._c},i=[]},"5abe":function(n,t,e){"use strict";e.r(t);var o=e("52c4"),a=e("98b6");for(var i in a)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(i);e("afe6");var u=e("828b"),c=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=c.exports},"6d32":function(n,t,e){"use strict";(function(n,t){var o=e("47a9");e("3fb8");o(e("3240"));var a=o(e("5abe"));n.__webpack_require_UNI_MP_PLUGIN__=e,t(a.default)}).call(this,e("3223")["default"],e("df3c")["createPage"])},"98b6":function(n,t,e){"use strict";e.r(t);var o=e("d2be"),a=e.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=a.a},afe6:function(n,t,e){"use strict";var o=e("3eb7"),a=e.n(o);a.a},d2be:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{buttoninfo:{},systemInfo:{},goodHight:0,scrollHeight:0}},onLoad:function(){var t=n.getMenuButtonBoundingClientRect();this.buttoninfo=t;var e=n.getSystemInfoSync();this.systemInfo=e,console.log(e);var o=e.windowWidth/750;console.log("比例",o),this.goodHight=557*o},onPageScroll:function(n){console.log("--",n),this.scrollHeight=n.scrollTop},methods:{toback1:function(){n.navigateBack({delta:1})}}};t.default=e}).call(this,e("df3c")["default"])}},[["6d32","common/runtime","common/vendor"]]]);