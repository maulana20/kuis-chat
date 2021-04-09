var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var users = [];
var connections = [];

var answer = '';
var stop = true;

server.listen(process.env.PORT || 3000);
console.log('Server running...');
console.log('http://localhost:3000');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
	connections.push(socket);
	console.log('Connected: %s sockets connected.', connections.length);

	// Disconnect
	socket.on('disconnect', function (data) {
		users.splice(users.indexOf(socket.username), 1);
		updateUsernames();
		connections.splice(connections.indexOf(socket), 1);
		console.log('Disconnected: %s sockets connected.', connections.length);
	});

	// Send Message
	socket.on('send answer', function (data) {
		if (stop == false) io.sockets.emit('record', {msg: data, user: socket.username, answer: answer});
		if (data == answer) stop = true;
	});

	// Send Message
	socket.on('send question', function (data) {
		io.sockets.emit('record', {msg: data.question, user: 'admin', answer: data.answer});
		
		answer = data.answer;
		stop = false;
	});

	// User login
	socket.on('login', function (data, callback) {
		callback(true);
		socket.username = data;
		users.push(socket.username);
		updateUsernames();
	});

	function updateUsernames() {
		io.sockets.emit('get users', users);
	}
});
