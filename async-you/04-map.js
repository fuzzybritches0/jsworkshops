var async = require('async');
var http = require('http');

async.map(process.argv.slice(2), function(url, callback) {
  var body = "";
  http.get(url, function(response) {
	  response.on('error', function() {
		  callback(error);
    });
    response.on('end', function() {
		  callback(null, body);
    });
		response.on('data', function(data) {
		  body+=data.toString();
    });
  });
}, function(error, result) {
  if (error) console.error(error);
	if (result) console.log(result);
});
