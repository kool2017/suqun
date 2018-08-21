//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      app.globalData.imgSrc + '7119e0fbjw1etap1q4srfj20dw09i0tw.jpg',
      app.globalData.imgSrc + '7119e0fbjw1etap1t8xz8j20dw08caba.jpg',
      app.globalData.imgSrc + '7119e0fbjw1etap1waqjej20m80ciq5t.jpg',
      app.globalData.imgSrc + '7119e0fbjw1etap1yqxjlj20dw07tac5.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 10000,
    duration: 1000,
    inputShowed: false,
    inputVal: '',
    searchAgain: false,
    searchLoading: false,
    searchLoadingComplete: false,
    searchResult: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.init()
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showInput: function() {
    this.setData({
      inputShowed: true,
      searchAgain: true
    })
  },
  hideInput: function() {
    this.setData({
      inputVal: '',
      inputShowed: false,
      searchAgain: false
    })
  },
  clearInput: function() {
    this.setData({
      inputVal: ''
    })
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    })
  },
  search: function(e) {
    wx.request({
      url: app.globalData.baseUrl + '/hisaas/test',
      method: 'GET',
      data: {
        reqId: '/test',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data)
      }
    })
    this.setData({
      searchResult: [{
          templeId: '0001',
          url: app.globalData.baseUrl,
          imgSrc: app.globalData.imgSrc + 'KOOL.jpg',
          title: 'test1',
          description: '这是一个测试结果1'
        },
        {
          templeId: '0002',
          url: app.globalData.baseUrl,
          imgSrc: app.globalData.imgSrc + 'img.jpg',
          title: 'test2',
          description: '这是一个测试结果2'
        }
      ]
    })
    this.clearInput()
  },
  init: function() {
    this.search()
  }
})