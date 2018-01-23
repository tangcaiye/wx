var wsApi = "ws://172.16.18.41:3001";
var openBol = false;
Page({
  data: {
    
  },
  onLoad:function (){

    wx.connectSocket({
      url: wsApi,
      data:{},
      header:{ 
        'content-type': 'application/json'
      },
      method:"GET",
      success:function (){
        console.log("客户端连接成功");
      }
    })
    wx.onSocketOpen(function (){
      console.log("webSocket连接已打开");
      openBol = true;
    });

    wx.onSocketMessage(function (msg){
      console.log(msg);
    });
  },
  sendMsg:function (e){
    // console.log(e);
    if (openBol){
      wx.sendSocketMessage({
        data:e.detail.value
      });
    }
  }
})
