var httpget = function(url, callback) {
	var http = require('http');
	var datac = '';
	http.get(url, function (response) {
		response.setEncoding('utf8');
		response.on("data", function(data) {
			datac=datac+data;
		});
		response.on("end", function(data) {
			return callback (null, datac);
		});
		response.on("error", function(data) {
			return callback (true);
		});
	});
}

httpget(process.argv[2], function(error, data) {
	if ( data ) {
		console.log(data.length);
		console.log(data);
	}
	});
