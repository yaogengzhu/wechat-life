const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    longitude: '', //默认经度
    latitude: '', // 默认维度
    markers: [{
      iconPath: '/assets/images/marker_.png',
      id: 0,
      latitude: '',
      longitude: '',
      width: 30,
      height: 30
    }],
    //地图定位控件
    controls: [{
      id: 1,
      iconPath: '/assets/images/location.png',
      position: {
        left: app.data.windowWidth / 2 - (app.data.windowWidth / 2.5),
        top: app.data.windowHeight - 80,
        width: 30,
        height: 30
      },
      clickable: true
    }]
  },
  // 轻触定位按钮重新回到原来的位置
  controltap(e) {
    // console.log(e.controlId)
    this.mapCtx.moveToLocation()
  },
  /**A
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 调用地图加载函数
    this.getPosition()
  },
  // 
  getPosition() {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        console.log(res)
        this.setData({
          longitude: res.longitude, //默认经度
          latitude: res.latitude, // 默认维度
          'markers[0].latitude': res.latitude,
          'markers[0].longitude': res.longitude
        })
        console.log(this.data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})