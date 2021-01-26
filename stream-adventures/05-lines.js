var split = require('split');
var through2 = require('through2');
var count = 0;
process.stdin.pipe(split()).pipe(through2(function ( line, encoding, next) {
  line = line.toString();
	if ( count === 0 ) this.push(line.toLowerCase() + '\n');
	else if ( count % 2 === 1  ) this.push(line.toUpperCase() + '\n');
	else this.push(line.toLowerCase() + '\n');
	count++;
	next();
}, function (done) {
  done();
})).pipe(process.stdout);
