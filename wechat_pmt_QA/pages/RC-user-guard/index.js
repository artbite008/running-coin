export const registerCodePlaceholder = 'payment2018';

Page({
  data: {
    registerCode: '',
    register: wx.getStorageSync('register')
  },
  onLoad: function (options) {
    if (this.data.register === 'true') {
      this.goHome();
    }
  },
  onReady: function () {
  
  },
  onShow: function () {
  
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  },
  bindKeyInput: function(e) {
    this.setData({
      registerCode: e.detail.value
    });
  },
  verfyRegisterCode: function() {
    let that = this;
    wx.showLoading({
      title: 'verifying...'
    });
    setTimeout(function () {
      wx.hideLoading();
      if (that.data.registerCode == registerCodePlaceholder) {
        wx.showToast({
          title: 'bingo!',
          icon: 'success',
          duration: 1500
        });
        that.goHome();
        wx.setStorageSync("register", "true");
        that.setData({
          register: 'true'
        });
      } else {
        wx.showToast({
          title: 'sorry !',
          icon: 'none',
          duration: 1000
        });
      }
    }, 1000);
    
  },

  goHome: function() {
    wx.redirectTo({
      url: '../RC-user-home/index',
    });
  }
})