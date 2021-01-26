module.exports = function ( directory, extention, callback) {
	var fs = require('fs');
	fs.readdir(directory, function (error, list) {
		var path = require('path');
		if ( ! error ) {
			var count = 0;
			var listr = new Array();
			list.forEach( function (file) {
				if ( path.extname(file) == '.' + extention ) {
					listr[count] = file;
					count++;
				}
			});
			return callback(null, listr);
		}
		else {
			return callback( error );
		}
	});
}	
