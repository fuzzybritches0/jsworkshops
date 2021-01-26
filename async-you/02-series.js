var async = require('async'), http = require('http');

var getUrl = function(url, callback) {
  http.get(url, function(response) {
    var body = "";
    response.on('error', function(error) {
      callback(error);
    });
    response.on('end', function() {
      callback(null, body);
    });
    response.on('data', function(chunck) {
      body += chunck;
    });
  });
}

async.series({
  requestOne: function(callback) {
	  getUrl(process.argv[2], callback);
  },
  requestTwo: function(callback) {
	  getUrl(process.argv[3], callback);
  }
},
function(error, result) {
  console.log(result);
});
