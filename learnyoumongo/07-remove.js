mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/' + process.argv[2], function ( error, db ) {
  if ( error ) throw error;
	var collection = db.collection(process.argv[3]);
	collection.remove({ _id : process.argv[4] }, function( error, data ){
	  if ( error ) throw error;
		db.close();
	});
});
