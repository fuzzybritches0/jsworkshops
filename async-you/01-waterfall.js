var fs = require('fs');
var async = require('async');
var http = require('http');

async.waterfall( [
  function(callback) {
	  fs.readFile(process.argv[2], function(error, data) {
		  if (error) callback(error);
			else callback(null, data.toString());
    });
  },
	function(data, callback) {
	  var body = "";
    http.get(data, function (response) {
		  response.on('data', function(chunck) {
			  body += chunck.toString();
      });
			response.on('end', function() {
			  callback(null, body);
      });
			response.on('error', function(error) {
			  callback (error);
      });
    });
  }],
	function(error, result) {
	  if (error) console.error(error);
		else if ( result.length > 0 ) console.log(result);
  });
