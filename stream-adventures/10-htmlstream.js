var through2 = require('through2');
var trumpet = require('trumpet');
var tr = trumpet();

var stream = tr.select('.loud').createStream();

stream.pipe(through2(function(buff, _, next){
  this.push(buff.toString().toUpperCase());
	next();
})).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);
