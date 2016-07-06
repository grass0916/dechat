"use strict";

// 3rd-party libraries below.
const router = require('koa-router')();

// Import model.
const chatroom = require(__dirname + '/../model/chatroom.js');

// RESTful web path.
router
	.get ('/', chatroom.enterLobby)
	.post('/rooms', chatroom.getRooms)
	.get ('/rooms/:roomid', chatroom.enterRoom)
	.post('/rooms/:roomid/message', chatroom.sendMessage)
	.post('/rooms/:roomid/conversations', chatroom.getConversations)
	.post('/rooms/:roomid/conversations/:range', chatroom.getPastConversations)
	;

module.exports = router;