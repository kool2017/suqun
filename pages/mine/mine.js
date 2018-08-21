// pages/mine/mine.js
//获取应用实例
const app = getApp()
Page({
  data: {
    latitude: 30.31974,
    longitude: 120.1421,
    scale: 8,
    markers: [{
        id: 1,
        latitude: 30.31974,
        longitude: 120.1421,
        name: '我的位置',
        iconPath: '/img/location.png',
        callout: {
          content: '我的位置'
        },
      },
      {
        id: 2,
        latitude: 29.33084,
        longitude: 122.1431,
        name: '普陀山',
        callout: {
          content: '普陀山'
        },
      }
    ],
    polyline: [],
    vowNum: 0,
    vowFinNum: 0,
    votiveNum: 0,
    list: [],
    pageSize: 5,
    currentPage: 0,
    totalNum: 8,
    totalPage: 5,
    searchLoading: false,
    searchLoadingComplete: false
  },
  onReady: function(e) {
    const self = this
    self.query()
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        self.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          polyline: [{
            points: [{
              latitude: self.data.latitude,
              longitude: self.data.longitude
            }, {
              latitude: 29.33084,
              longitude: 122.1431,
            }],
            color: '#000000DD',
            width: 5,
            arrowLine: true
          }]
        })
      }
    })
    this.mapCtx = wx.createMapContext('myMap')
    this.translateMarker()
  },
  translateMarker: function() {
    const self = this
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: false,
      duration: 5000,
      destination: {
        latitude: 29.33084,
        longitude: 122.1431,
      },
      animationEnd() {}
    })
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: false,
      duration: 500,
      destination: {
        latitude: 30.31974,
        longitude: 120.1421,
      },
      animationEnd() {}
    })
  },
  query: function() {
    if (this.data.searchLoadingComplete) {
      return
    }
    this.setData({
      searchLoading: true
    })
    if (!(this.data.totalPage == this.data.currentPage)) {
      this.setData({
        vowNum: 10,
        vowFinNum: 1,
        votiveNum: 1,
        list: this.data.list.concat([{
            id: '8',
            type: 'vow',
            imgSrc: app.globalData.imgSrc + 'KOOL.jpg',
            dsp: '请让我摇号摇中吧',
            datetime: '2018-08-07 18:00:00',
            state: '0',
            state_G: '在路上',
            hour: 1,
            minute: 0,
            second: 0
          },
          {
            id: '7',
            type: 'vow',
            imgSrc: app.globalData.imgSrc + 'KOOL.jpg',
            dsp: '请让我摇号摇中吧',
            datetime: '2018-08-07 18:20:00',
            state: '1',
            state_G: '已送达',
            hour: 0,
            minute: 0,
            second: 0
          },
          {
            id: '6',
            type: 'vow',
            imgSrc: app.globalData.imgSrc + 'KOOL.jpg',
            dsp: '请让我摇号摇中吧',
            datetime: '2018-08-07 18:20:00',
            state: '2',
            state_G: '已还愿',
            hour: 0,
            minute: 0,
            second: 0
          },
          {
            id: '5',
            type: 'votive',
            imgSrc: app.globalData.imgSrc + 'img.jpg',
            dsp: '谢谢',
            datetime: '2018-08-07 18:10:00',
            state: '1',
            state_G: '已送达'
          },
          {
            id: '4',
            type: 'votive',
            imgSrc: app.globalData.imgSrc + 'img.jpg',
            dsp: '谢谢',
            datetime: '2018-08-07 18:10:00',
            state: '1',
            state_G: '已送达'
          }
        ]),
        currentPage: this.data.currentPage + 1,
        searchLoading: false
      })
    } else {
      this.setData({
        searchLoadingComplete: true,
        searchLoading: false
      })

    }
  }
})