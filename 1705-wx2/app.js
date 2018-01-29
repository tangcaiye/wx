//app.js
App({
  onLaunch: function () {
    console.log('小程序初始化完成')
  },
  onShow (option) {
    console.log(option)
  },
  onHide () {
    console.log('进入后台了')
  },
  globalData: {
    userInfo: null
  },
  user: 'tangcaiye'
})