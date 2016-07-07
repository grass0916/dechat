"use strict";

// 3rd-party libraries below.
const router = require('koa-router')();

// Import model.
const chatroom = require(__dirname + '/../model/chatroom.js');

// RESTful web path.
router
	.get ('/', chatroom.enterLobby)
	.get ('/rooms', chatroom.getRooms)
	.get ('/rooms/:roomid', chatroom.enterRoom)
	.get ('/rooms/:roomid/info', chatroom.getRoomInfo)
	.post('/rooms/:roomid/message', chatroom.sendMessage)
	.get ('/rooms/:roomid/conversations', chatroom.getConversations)
	.get ('/rooms/:roomid/conversations/:range', chatroom.getPastConversations)
	;

module.exports = router;