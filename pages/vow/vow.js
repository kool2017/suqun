// pages/vow/vow.wxml.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      app.globalData.imgSrc + '7119e0fbjw1etap1q4srfj20dw09i0tw.jpg',
      app.globalData.imgSrc + '7119e0fbjw1etap1t8xz8j20dw08caba.jpg',
      app.globalData.imgSrc + '7119e0fbjw1etap1waqjej20m80ciq5t.jpg',
      app.globalData.imgSrc + '7119e0fbjw1etap1yqxjlj20dw07tac5.jpg'
    ],
    incense: [{
        value: '0',
        name: '增财香,十日内有进财之兆',
        imgSrc: app.globalData.imgSrc + 'zengcaixiang.jpg',
        checked: 'true'
      },
      {
        value: '1',
        name: '平安香,平安无事',
        imgSrc: app.globalData.imgSrc + 'pinganxiang.jpg'
      },
      {
        value: '2',
        name: '小莲花香,三日内有人来吉事相望',
        imgSrc: app.globalData.imgSrc + 'xiaolianhuaxiang.jpg'
      },
      {
        value: '3',
        name: '长生香,三日内有人来相邀请',
        imgSrc: app.globalData.imgSrc + 'changshengxiang.jpg'
      }
    ],
    incenseValue: '0',
    vowDsp: '',
    loading: false
  },
  changeIncense: function(options) {
    this.setData({
      incenseValue: options.detail.value
    })
  },
  inputVowDsp: function(options) {
    this.setData({
      vowDsp: options.detail.value
    })

  },
  vowSubmit: function(options) {
    if (this.data.loading) {
      return;
    }
    this.setData({
      loading: true
    })

    console.log('incenseValue=' + this.data.incenseValue + ';vowDsp=' + this.data.vowDsp)
    this.setData({
      loading: false
    })

    //成功后跳转到祈福状态
    wx.switchTab({
      url: '/pages/mine/mine'
    })
  }
})