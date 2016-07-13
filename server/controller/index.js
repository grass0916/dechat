"use strict";

// 3rd-party libraries below.
const router = require('koa-router')();

// Import model.
const chatroom = require(__dirname + '/../model/chatroom.js');

// RESTful web path.
router
	// Pages.
	.get ('/', chatroom.enterLobby)
	.get ('/rooms', chatroom.getRooms)
	.get ('/rooms/:roomid', chatroom.enterRoom)
	// APIs.
	.get ('/api/rooms/:roomid/info', chatroom.getRoomInfo)
	.post('/api/rooms/:roomid/message', chatroom.sendMessage)
	.get ('/api/rooms/:roomid/conversations', chatroom.getConversations)
	.get ('/api/rooms/:roomid/conversations/lastest', chatroom.getLastestMessage)
	.get ('/api/rooms/:roomid/conversations/:range', chatroom.getPastConversations)
	;

router.websockets = (socket) => {
	socket.emit('news', { hello: 'world' });
	socket.on('refreshMessages', (data) => {
		console.log(1233333);
		chatroom.getLastestMessage({ roomid: 1233333 });
		// socket.emit('news', { hello: 'world222' });
	});
}

module.exports = router;