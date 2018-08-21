// pages/votive/votive.js
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
    boxImgSrc: app.globalData.imgSrc + 'gongdexiang.jpg',
    amount: '',
    votiveDsp: '',
    loading: false
  },
  inputAmt: function(options) {
    let amt = this.amountFilter(options.detail.value)
    this.setData({
      amount: amt
    })
  },
  amountFilter: function(value) {
    //禁止录入整数部分两位以上，但首位为0
    value = value.replace(/^([1-9]\d*(\.[\d]{0,2})?|0(\.[\d]{0,2})?)[\d.]*/g, '$1');
    //先把非数字的都替换掉，除了数字和.
    value = value.replace(/[^\d\.]/g, '');
    //必须保证第一个为数字而不是.
    value = value.replace(/^\./g, '0.');
    //保证只有出现一个.而没有多个.
    value = value.replace(/\.{2,}/g, '.');
    //保证.只出现一次，而不能出现两次以上
    value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
    //只能输入两个小数
    value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
    if (Number(value) >= 10000) {
      value = '9999.99'
    }
    return value;
  },
  inputVotiveDsp: function(options) {
    this.setData({
      votiveDsp: options.detail.value
    })
  },
  votiveSubmit: function(options) {
    if (this.data.loading) {
      return;
    }

    this.setData({
      loading: true
    })

    console.log('amount=' + this.data.amount + ';votiveDsp=' + this.data.votiveDsp)
    this.setData({
      loading: false
    })

    //成功后跳转到祈福状态
    wx.switchTab({
      url: '/pages/mine/mine'
    })
  }
})