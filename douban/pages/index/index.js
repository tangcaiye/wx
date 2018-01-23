var API_URL = 'https://api.douban.com/v2/movie/top250';
// var API_URL = "http://api.map.baidu.com/telematics/v3/weather?location=%E5%B9%BF%E5%B7%9E&output=json&ak=FK9mkfdQsloEngodbFl4FeY3";
Page({
  data: {
  	title:"加载中。。",
  	movies:[]
  },
  onLoad:function (){
  	var that = this;
  	wx.showToast({
  		title:"加载中...",
  		icon:"loading",
  		duration:10000
  	});

  	wx.request({
  		url:API_URL,
  		data:{},
		header: {
			'content-type': 'json'
		},
  		success:function (res){
  			wx.hideToast();
  			var data = res.data;
  			console.log(data);
  			that.setData({
  				title:data.title,
  				movies:data.subjects
  			});
  		}
  	});
  }
})