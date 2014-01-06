var socketio = require('socket.io'),
    express = require("express"),
    http = require('http'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    MongoClient = require('mongodb').MongoClient,
    format = require('util').format;

app.use(express.static(__dirname + '/dist'));

var server = http.createServer(app);
server.listen(port);

console.log('http server listening on %d', port);

var io = socketio.listen(server);

console.log('websocket server created');