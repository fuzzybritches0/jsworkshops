var mymodule = require('./modulelesson6.js');

mymodule(process.argv[2], process.argv[3], function (error, list) {
	if ( ! error ) {
		list.forEach( function (file) {
			console.log(file);
		});
	}
	else {
		console.log('Error');
	}
});

