// 加载的商品数量
const num = 20
let start = 0

let common = require("../../utils/common.js")

Page({
  data: {
    categories: [],
    products: []
  },
  onLoad () {
    common.say('蔡威')
    wx.request({
      url: `http://localhost:3000/products?_start=${start}&_limit=${num}`,
      success: (res) => {
        // res.data新的20条
        let products = this.data.products
        let newProducts = products.concat(res.data)
        this.setData({
          products: newProducts
        })
      }
    })
  },
  onShow () {
    // 类似vue的actived,因为小程序默认会对访问的页面进行缓存
    console.log('index onshow')
  },
  onPullDownRefresh () {
    console.log('触发了下拉操作')
    wx.stopPullDownRefresh()
  },
  onReachBottom () {
    console.log('到底啦')
    start += 20
    wx.showLoading({
      title: "加载中..."
    })
    wx.request({
      url: `http://localhost:3000/products?_start=${start}&_limit=${num}`,
      success: (res) => {
        wx.hideLoading()
        // res.data新的20条
        let products = this.data.products
        let newProducts = products.concat(res.data)
        this.setData({
          products: newProducts
        })
      }
    })
  },
  onShareAppMessage () {
    return {
      title: '西红柿大战白菜头',
      path: '/pages/index'
    }
  },
  toPage (event) {
    // console.log(event)
    let id = event.target.dataset.id
    wx.navigateTo({
      url: '/pages/product-item/product-item?id=' + id
    })
  }
})
