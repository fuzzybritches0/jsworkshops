var async = require('async');
var http = require('http');

var createUser = function(n, callback) {
  var opts = { hostname: process.argv[2], port: process.argv[3], method: 'POST', path: '/users/create' };
  var request = http.request(opts);
  request.on('error', function(error) {
	  callback(error);
  });
	var user = { user_id: n+1 };
	request.write(JSON.stringify(user));
	request.end();
	callback(null, n);
}

async.times(5, function(n, callback) {
  createUser(n, callback);
	}, function(error, users) {
    var opts = { hostname: process.argv[2], port: process.argv[3], path: '/users' };
	  http.get(opts, function(response) {
		  response.on('error', function(error) {
			  console.error(error);
      });
			response.on('end', function(data) {
			  if (data) console.log(data.toString());
      });
			response.on('data', function(data) {
			  console.log(data.toString());
      });
    });
	});
