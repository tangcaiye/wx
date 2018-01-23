Page({
  login:function (){

    wx.login({
      success:function (res){
        // console.log(res.code);

        wx.request({
          url: 'https://tangcaiye001.applinzi.com/code.php', 
          data: {
            code:res.code
          },
          header: {
              'content-type': 'application/json'
          },
          success: function(res) {
            console.log(res.data)
          }
        })
      }
    });
  }
})
