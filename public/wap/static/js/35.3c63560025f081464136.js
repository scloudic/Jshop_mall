webpackJsonp([35],{DpAa:function(t,e){},"HeT/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={props:{payments:{type:[Array,Object],default:function(){return[]}}},methods:{payment:function(t){this.$emit("pay",t)}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.payments.length?i("div",t._l(t.payments,function(e,n){return i("div",{key:n,staticClass:"payment",on:{click:function(a){t.payment(e.code)}}},[i("img",{staticClass:"payment-img",attrs:{src:e.img}}),t._v(" "),i("div",{staticClass:"payment-left"},[i("h3",[t._v(t._s(e.name))]),t._v(" "),i("p",[t._v(t._s(e.memo))])]),t._v(" "),i("img",{staticClass:"right-img",attrs:{src:a("oenc")}})])})):t._e()},staticRenderFns:[]};var r={components:{payment:a("VU/8")(i,n,!1,function(t){a("DpAa")},null,null).exports},data:function(){return{order_id:this.$route.query.order_id,order_amount:"",payments:[],weiXinPayStatus:!1}},created:function(){this.orderDetail(),this.getPaymentType()},methods:{orderDetail:function(){var t=this;this.$api.orderDetail({order_id:this.order_id},function(e){t.order_amount=e.data.order_amount})},getPaymentType:function(){var t=this;this.$api.paymentList({},function(e){var a=e.data;for(var i in a)a[i].img="./static/image/"+a[i].code+".png";t.payments=a})},pay:function(t){var e=this;if("wechatpay"===t){var a=this.isWeiXinBrowser(),i={trade_type:a?"JSAPI_OFFICIAL":"MWEB",wap_url:window.location.protocol+"//"+window.location.host,wap_name:"mysite"},n={ids:this.order_id,payment_code:t,payment_type:1,params:i};a?this.$api.pay(n,function(t){if(t.status){var e=t.data;console.log(e),WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:e.appid,timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign},function(t){"get_brand_wcpay_request:ok"==t.err_msg?(alert("支付成功"),this.weiXinPayStatus=!0,this.$router.replace({path:"/orderdetail",query:{order_id:this.order_id}})):alert("支付失败")})}}):this.$api.pay(n,function(t){t.status?window.location.href=t.data.mweb_url:e.$dialog.alert({mes:t.msg})})}else if("alipay"===t){var r={trade_type:"MWEB",wap_url:window.location.protocol+"//"+window.location.host,return_url:window.location.protocol+"//"+window.location.host+"/#/orderdetail?order_id="+this.order_id,wap_name:"mysite"},o={ids:this.order_id,payment_code:t,payment_type:1,params:r};this.$api.pay(o,function(t){t.status&&e.StandardPost(t.data.url,t.data.data)})}else"offline"===t&&this.$dialog.confirm({title:"线下支付说明",mes:"请联系客服进行线下支付",opts:[{txt:"订单详情",color:!1,callback:function(){e.$router.push({path:"/orderdetail",query:{order_id:e.order_id}})}},{txt:"继续购物",color:!0,callback:function(){e.$router.push("/index")}}]})},StandardPost:function(t,e){var a=document.createElement("form");a.id="aliPay",a.methods="post",a.action=t,a.target="_self";var i=[];for(var n in e)i[n]=document.createElement("input"),i[n].type="hidden",i[n].name=n,i[n].value=e[n],a.appendChild(i[n]);a.addEventListener("submit",function(){},!1),document.body.appendChild(a),a.dispatchEvent(new Event("submit")),a.submit(),document.body.removeChild(a)},isWeiXinBrowser:function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}},watch:{}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cashierdesk"},[a("yd-cell-group",[a("yd-cell-item",[a("span",{attrs:{slot:"left"},slot:"left"},[t._v("订单编号")]),t._v(" "),a("span",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.order_id))])]),t._v(" "),a("yd-cell-item",[a("span",{attrs:{slot:"left"},slot:"left"},[t._v("订单金额")]),t._v(" "),a("span",{attrs:{slot:"right"},slot:"right"},[t._v("￥"+t._s(t.order_amount))])])],1),t._v(" "),a("payment",{attrs:{payments:t.payments},on:{pay:t.pay}})],1)},staticRenderFns:[]},s=a("VU/8")(r,o,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=35.3c63560025f081464136.js.map