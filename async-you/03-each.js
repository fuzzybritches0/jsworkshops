var async = require('async');
var http = require('http');

async.each([process.argv[2], process.argv[3]], function(url, callback) {
  http.get(url, function(response) {
	  response.on('error', function(error) {
		  callback(error);
    });
		response.on('end', function() {
		  callback(null);
		});
		response.on('data', function(data) {
		});
  });
}, function(error) {
  if (error) console.error(error);
});

