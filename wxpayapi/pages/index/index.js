var app = getApp()
Page({
  wxpay:function (){
  	var code = app.code;
  	wx.request({
	  url: 'https://tangcaiye001.applinzi.com/wxpayapi/example/jsapi.php', 
	  data: {
	  	code: code
	  },
	  header: {
	      'content-type': 'application/json'
	  },
	  success: function(res) {
	    // console.log(res.data);
	    var data = res.data;
	    wx.requestPayment({
		   'timeStamp': data.timeStamp,
		   'nonceStr': data.nonceStr,
		   'package': data.package,
		   'signType': 'MD5',
		   'paySign': data.paySign,
		   'success':function(res){
		   		console.log("支付成功");
		   },
		   'fail':function(res){
		   }
		})
	  }
	})
  },
  scan:function (){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  }
})
