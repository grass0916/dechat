"use strict";

/* =============================================
                    Packages
   ============================================= */

// Native libraries below..
const fs         = require('fs');
const http       = require('http')
// 3rd-party libraries below.
const app        = require('koa')();
const staticPath = require('koa-static');
const bodyParser = require('koa-body');
const io         = require('socket.io');

/* =============================================
                 Web application
   ============================================= */

// Import the source of web application.
const router = require(__dirname + '/controller/index.js');

// Enable the koa web server.
app
	// Set the static files path.
	.use(staticPath(__dirname + '/static'))
	// Set the body parser.
	.use(bodyParser())
	// Set routes.
	.use(router.routes())
	.use(router.allowedMethods());

// Enable the websocket via socket.io.
let server   = http.Server(app.callback());
let ioSocket = io.listen(server);

ioSocket.sockets.on('connection', router.websockets);

// Enable the web server (koa & socket.io).
server.listen(8080);

console.log('Web server is running.');

// Error handling.
app
	.on('error', function (err) {
		log.error('server error', err);
	});