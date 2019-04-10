// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: true,
    btnstate: "default",
    account: "",
    password: "",
    abcde: ""
  },

  accountInput: function (e) {
    var content = e.detail.value;
    console.log(content);
    if (content != '') {
      this.setData({
        account: content
      });
    }
    if (this.data.password != '' && content != '') {
      this.setData({
        disabled: false,
        btnstate: "primary",
      });
    } else {
      this.setData({
        disabled: true,
        btnstate: "default"
      });
    }
  },

  pwdInput: function (e) {
    var content = e.detail.value;
    if (content != '') {
      this.setData({
        password: content
      });
    }
    if (this.data.account != '' && content != '') {
      this.setData({
        disabled: false,
        btnstate: "primary"
      });
    } else {
      this.setData({
        disabled: true,
        btnstate: "default"
      });
    }
  },

  pwdBlur: function (e) {
    var password = e.detail.value;
    if (password != '' && this.data.account != '') {
      this.setData({
        disabled: false,
        btnstate: "primary",
        password: password
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})