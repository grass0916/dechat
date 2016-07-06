"use strict";

/* =============================================
                    Packages
   ============================================= */

// Native libraries below..
const fs         = require('fs');
// 3rd-party libraries below.
const app        = require('koa')();
const staticPath = require('koa-static');
const bodyParser = require('koa-body');

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
	.use(router.allowedMethods())
	// Start listening.
	.listen(8080);

console.log('Web server is running.');

// Error handling.
app
	.on('error', function (err) {
		log.error('server error', err);
	});



// // main.js
// var React = require('react');
// var ReactDOM = require('react-dom');

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('example')
// );
