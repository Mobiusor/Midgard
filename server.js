var http = require('http');
var path = require('path');

var socketio = require('socket.io');
var express = require('express');
var bodyParser = require('body-parser');

var api = require('./server/api.js');
var socket = require('./server/socket.js');

var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/api/comments', api.getCommnets);
router.post('/api/comments', api.addComment);

io.on('connection', socket.onConnection);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
