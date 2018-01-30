// components/component/component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerText: {
      type: String,
      value: 'default value'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    numUp () {
      let num = this.data.num
      num++
      this.setData({
        num: num
      })
    }
  }
})
