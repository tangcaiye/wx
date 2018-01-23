//app.js
App({
	code:null,
  onLaunch: function () {
  	var that = this;
    wx.login({
      success: function(res) {
        if (res.code) {
          
          that.code = res.code;
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }
})