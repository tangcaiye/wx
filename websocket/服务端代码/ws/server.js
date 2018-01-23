var WebsocketServer = require("ws").Server;

var wss = new WebsocketServer({
	port: 3001
})

// 所有的scoket
var sockets = []

// 当有客户端的连接进入的时候，触发这个事件
wss.on("connection",function (socket){
	console.log("有连接进来啦")
	sockets.push(socket)
	// 监听客户端发过来的消息,msg->发过来的消息
	socket.on("message",function (msg){
		/*console.log(msg)
		// 数据传输格式只能是字符串
		socket.send("ws服务端响应的"+msg)*/
		for (var i=0; i<sockets.length; i++){
			// 不包括发射者
			if (sockets[i]!=this){
				sockets[i].send(msg)
			}
		}
	})	
	// 监听客户端关闭连接
	socket.on("close",function (){

		for (var i=0; i<sockets.length; i++){

			if (this == sockets[i]){

				sockets.splice(i,1)
				break
			}
		}
	})
})
