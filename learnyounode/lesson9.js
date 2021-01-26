var httpget = function(count, callback) {
	var url = process.argv[2+count];
	var http = require('http');
	var datac = '';
	http.get(url, function (response) {
		response.setEncoding('utf8');
		response.on("data", function(data) {
			datac=datac+data;
		});
		response.on("end", function(data) {
			return callback (null, count, datac);
		});
		response.on("error", function(data) {
			return callback (true);
		});
	});
}

var asyncget = function( callback ) {
	for ( var count = 0; count < 3; count++ ) {
		httpget(count, function(error, count, data) {
			if ( data ) {
				callback(null, count, data);
			}
			});
	}
}
var count = 0;
var responses = new Array();
asyncget( function(error, counto, data) {
	responses[counto] = data;
	if ( count === 2 ) {
		responses.forEach(function (data) {
			console.log(data);
		});
	}
	count++;
});

