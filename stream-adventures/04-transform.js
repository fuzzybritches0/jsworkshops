var through2 = require('through2');

var stream = through2( function(buffer, encoding, next) {
 this.push(buffer.toString().toUpperCase());
 next();
}, function(done) {
  done();
});

process.stdin.pipe(stream).pipe(process.stdout);
