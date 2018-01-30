Page({
  data: {
    products: [    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },
  onLoad () {
    // wx.request({
    //   url: "http://localhost:3000/products",
    //   success: res => {
    //     this.setData({
    //       products: res.data
    //     })
    //   }
    // })
  },
  tolowerHandle () {
    console.log('快到底le ')
  },
  scrollHandle (event) {
    console.log(event.detail)
  }
})