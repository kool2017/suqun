//temple.js
//获取应用实例
const app = getApp()

Page({
  data: {
    templeId: '',
    templeDetail: {},
    imgUrls: [
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 10000,
    duration: 1000,
    templeName: '',
    location: '',
    followerNum: 0,
    faithNum: 0,
    amount: 0.0,
    vowNum: 0,
    votiveNum: 0,
    vow: [],
    votive: [],
    textContent: ''
  },
  onLoad: function(options) {
    let templeDetail = this.queryTempleDetail(options.templeId)
    this.setData({
      templeId: options.templeId,
      imgUrls: templeDetail.imgUrls,
      templeName: templeDetail.templeName,
      location: templeDetail.location,
      followerNum: templeDetail.followerNum,
      faithNum: templeDetail.faithNum,
      amount: templeDetail.amount,
      vowNum: templeDetail.vowNum,
      votiveNum: templeDetail.votiveNum,
      vow: templeDetail.vow,
      votive: templeDetail.votive,
      textContent: templeDetail.textContent
    })
  },
  queryTempleDetail: function(val) {
    // wx.request({
    //   url: app.globalData.baseUrl + '/hisaas/qifuxiang?reqId=queryTempleDetail&userId=freeUser&token=123456&sign',
    //   method: 'POST',
    //   data: {
    //     templeId: options.templeId
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function(res) {
    //     console.log(res.data)
    //   }
    // })
    let templeDetail = {
      imgUrls: [
        app.globalData.imgSrc + '7119e0fbjw1etap1q4srfj20dw09i0tw.jpg',
        app.globalData.imgSrc + '7119e0fbjw1etap1t8xz8j20dw08caba.jpg',
        app.globalData.imgSrc + '7119e0fbjw1etap1waqjej20m80ciq5t.jpg',
        app.globalData.imgSrc + '7119e0fbjw1etap1yqxjlj20dw07tac5.jpg'
      ],
      templeName: '普陀山',
      location: '浙江,舟山,朱家尖',
      followerNum: 100,
      faithNum: 10000,
      amount: 1000.0,
      vowNum: 100200,
      votiveNum: 999,
      vow: [{
          followerName: '李**',
          vowDsp: '希望买房能摇到号',
          dateTime: '2018.8.4 18:00:00'
        },
        {
          followerName: '李**',
          vowDsp: '希望买房能摇到号',
          dateTime: '2018.8.4 18:00:00'
        },
        {
          followerName: '李**',
          vowDsp: '希望买房能摇到号',
          dateTime: '2018.8.4 18:00:00'
        },
        {
          followerName: '李**',
          vowDsp: '希望买房能摇到号',
          dateTime: '2018.8.4 18:00:00'
        },
        {
          followerName: '李**',
          vowDsp: '希望买房能摇到号',
          dateTime: '2018.8.4 18:00:00'
        },
        {
          followerName: '李**',
          vowDsp: '希望买房能摇到号',
          dateTime: '2018.8.4 18:00:00'
        },
        {
          followerName: '李**',
          vowDsp: '希望买房能摇到号',
          dateTime: '2018.8.4 18:00:00'
        }
      ],
      votive: [{
          followerName: '李**',
          votiveDsp: '太灵了！摇号要到了！',
          dateTime: '2018.8.5 11:00:00'
        },
        {
          followerName: '李**',
          votiveDsp: '太灵了！摇号要到了！',
          dateTime: '2018.8.5 11:00:00'
        },
        {
          followerName: '李**',
          votiveDsp: '太灵了！摇号要到了！',
          dateTime: '2018.8.5 11:00:00'
        },
        {
          followerName: '李**',
          votiveDsp: '太灵了！摇号要到了！',
          dateTime: '2018.8.5 11:00:00'
        },
        {
          followerName: '李**',
          votiveDsp: '太灵了！摇号要到了！',
          dateTime: '2018.8.5 11:00:00'
        },
        {
          followerName: '李**',
          votiveDsp: '太灵了！摇号要到了！',
          dateTime: '2018.8.5 11:00:00'
        }
      ],
      textContent: [{
        title: '观世音',
        imgSrc: 'http://47.99.50.88/static/img/645fff33h35u5frftimg.jpg',
        paragraph: '&emsp;&emsp;观世音菩萨是佛教中慈悲和智慧的象征，无论在大乘佛教还是在民间信仰，都具有极其重要的地位。以观世音菩萨为主导的大慈悲精神，被视为大乘佛教的根本。'
      }]
    }
    return templeDetail
  },
  init: function() {}
})