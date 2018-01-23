
Page({
  data:{
    imgSrc:""
  },
  uploadImg:function (){
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        /*
        //显示图片
        that.setData({
          imgSrc:tempFilePaths[0]
        });
        console.log(tempFilePaths);*/
        //上传图片
        wx.uploadFile({
          url:'https://tangcaiye001.applinzi.com/upload_handle.php',
          filePath:tempFilePaths[0],
          name:'fileup',
          success:function (res){
            var data = res.data;
            console.log(data);
          },
          fail:function (){
            console.log('fail');
          }
        });
      }
    })
  },
  downImg:function (){

    var that = this;

    wx.downloadFile({
      url: 'https://tangcaiye001.applinzi.com/0.jpg', 
      success: function(res) {
        console.log(res.tempFilePath);
        that.setData({
          imgSrc:res.tempFilePath
        });
      }
    })
  }
})
