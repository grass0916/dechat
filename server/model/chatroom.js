"use strict";

var exports = module.exports = {};

// 3rd-party libraries below.
const _       = require('underscore');
const async   = require('async');
const pug     = require('pug');
const moment  = require('moment');
const mongodb = require('mongodb');

let mongodbServer = new mongodb.Server('localhost', 27017, { auto_reconnect: true, poolSize: 10 });
let db = new mongodb.Db('chatroom-db', mongodbServer);

// GET: Show the lobby page.
exports.enterLobby = function* enterLobby() {
	let html  = pug.renderFile(__dirname + '/../view/lobby.pug', {});
	this.body = html;
};

// GET: Update the room list when user in lobby.
exports.getRooms = function* getRooms() {
};

// GET: Get the basic information of the chat room.
exports.getRoomInfo = function* getRoomInfo() {
	const { roomid } = this.params;
	// Package the infomation.
	let json = {
		roomid: roomid
	};
	this.type = 'application/json';
	this.body = json;
};

// GET: Enter the chat room.
exports.enterRoom = function* enterRoom() {
	const { roomid } = this.params;
	let data  = { roomid: roomid };
	let html  = pug.renderFile(__dirname + '/../view/room.pug', data);
	this.body = html;
	console.log('Someone entered the room.');
};

// POST: Send a message to current chat room.
exports.sendMessage = function* sendMessage() {
	const { roomid, text, mail, nickname } = _.extend(this.params, this.request.body);
	// Check the form format.
	if ((roomid === undefined   || ! roomid.length) ||
		(text === undefined     || ! text.length > 1024) ||
		(mail === undefined     || ! mail.length) ||
		(nickname === undefined || ! nickname.length)) {
		return;
	}

	messages.push(
{
		id: 0,
		roomid: roomid,
		user: { id: mail, name: nickname },
		text: text,
		timestamp: moment().format('hh:mm:ss MM-DD-YYYY')
	}


		);
	let json = {
		messages: _.filter(messages, (messages) => { return messages.roomid === roomid; })
	};
	this.type = 'application/json';
	this.body = json;
};

let messages = [];

// GET: Get the lastest conversions of current chat room.
exports.getConversations = function* getConversations() {
	const { roomid } = _.extend(this.params, this.request.body);
	let json = {
		messages: _.filter(messages, (messages) => { return messages.roomid === roomid; })
	};
	this.type = 'application/json';
	this.body = json;
};

// GET: Get the lastest message in specific room.
exports.getLastestMessage = function* getLastestMessage(options) {
	const { roomid } = _.extend(this.params, this.request.body, options);
	let messages = _.filter(messages, (messages) => { return messages.roomid === roomid; });
	return ;
}

// GET: Get the past conversions of current chat room.
exports.getPastConversations = function* getPastConversations() {

};

class Message {
	constructor(roomid, userId, text) {
		this.id        = 0;
		this.roomid    = roomid;
		this.userId    = userId;
		this.text      = text;
		this.timestamp = moment().format('hh:mm:ss MM-DD-YYYY');
	}
}
