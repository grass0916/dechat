"use strict";

var exports = module.exports = {};

// 3rd-party libraries below.
const _     = require('underscore');
const async = require('async');
const pug   = require('pug');

// GET: Show the lobby page.
exports.enterLobby = function* enterLobby() {
	let html  = pug.renderFile(__dirname + '/../view/lobby.jade', {});
	this.body = html;
};

// POST: Update the room list when user in lobby.
exports.getRooms = function* getRooms() {
	
};

// GET: Enter the chat room.
exports.enterRoom = function* enterRoom() {
	const { roomid } = this.params;
	let data  = { roomid: roomid };
	let html  = pug.renderFile(__dirname + '/../view/room.jade', data);
	this.body = html;
};

// POST: Send a message to current chat room.
exports.sendMessage = function* sendMessage() {

};

// POST: Get the lastest conversions of current chat room.
exports.getConversations = function* getConversations() {

};

// POST: Get the past conversions of current chat room.
exports.getPastConversations = function* getPastConversations() {

};