mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/learnyoumongo', function ( error, db ) {
  if ( error ) throw error;
	var collection = db.collection('users');
	var doc = { firstName: process.argv[2], lastName: process.argv[3] };
	collection.insert(doc, function( error, data ){
	  if ( error ) throw error;
	  console.log(JSON.stringify(doc));
		db.close();
	});
});
