var duplexer2 = require('duplexer2');
var through2 = require('through2').obj;

module.exports = function (counter) {
  var countObj = new Object;
	var writable = through2( function ( obj, _, next ) {
	  countObj[obj.country] = (countObj[obj.country] || 0) + 1;
		next();
	}, function (done) {
	  counter.setCounts(countObj);
	  done();
	});
	return duplexer2({objectMode: true}, writable, counter);
};
