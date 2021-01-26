const http = require('http');
const async = require('async');

async.reduce(['one', 'two', 'three'], 0, function(count, item, callback) {
  http.get(process.argv[2] + '?number=' + item, function(response) {
	var body="";
	  response.on('data', function(data) {
      body+=data.toString();
    });
		response.on('end', function(data) {
		  if (data) body+=data.toString();
			callback(null, count+=Number(body));
    });
		response.on('error', function(error) {
		  callback(error);
    });
  });
},
function(error, sum) {
  if (error) console.error(error);
  if (sum) console.log(sum);
});

