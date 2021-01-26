var zero = function(number) {
	if ( number < 10 ) { return "0" + number; }
	return number;
	}
var net = require('net');
var server = net.createServer(function (socket) {
	date = new Date();
	data = date.getFullYear() + "-" + zero(date.getMonth()+1) + "-" +
		zero(date.getDate()) + " " + zero(date.getHours()) + ":" +
		zero(date.getMinutes()) + "\n";
	socket.end(data);
});
server.listen(process.argv[2]);
