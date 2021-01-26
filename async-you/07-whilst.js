const http = require('http');
const async = require('async');
var count = 0;
var body = '';
async.whilst(function() {
  return body != 'meerkat';
}, function(callback) {
  body = '';
  count++;
  http.get(process.argv[2], function(response) {
	  response.on('error', function(error) {
		  callback(error);
    });
		response.on('end', function(data) {
		  callback(null, count);
    });
		response.on('data', function(data) {
		  body+=data.toString();
    });
  });
},
function(error) {
  console.log(count);
});
