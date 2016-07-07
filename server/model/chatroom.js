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
	const { roomid, text } = _.extend(this.params, this.request.body);
	if (! text || text.length > 1024) {
		return;
	}

	let message = { id: 4, user: { id: 1, name: '鮭魚' }, text: text, timestamp: moment().format()};
	mmm.push(message);
	let json = {
		messages: mmm
	};
	this.type = 'application/json';
	this.body = json;
};

let mmm = [{ id: 1, user: { id: 1, name: '鮭魚' }, text: 'Testing', timestamp: '2016/07/07'}, 
			{ id: 2, user: { id: 1, name: '鮭魚' }, text: 'Testing2', timestamp: '2016/07/07'}, 
			{ id: 3, user: { id: 2, name: '鯉魚王' }, text: 'Testing3', timestamp: '2016/07/07'}];

// GET: Get the lastest conversions of current chat room.
exports.getConversations = function* getConversations() {
	let json = {
		messages: mmm
	};
	this.type = 'application/json';
	this.body = json;
};

// GET: Get the past conversions of current chat room.
exports.getPastConversations = function* getPastConversations() {

};