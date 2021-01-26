mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/' + process.argv[2], function ( error, db ) {
  if ( error ) throw error;
	var collection = db.collection('users');
	collection.update({ 'username' : 'tinatime' }, { $set: {age: 40} }, function( error, data ){
	  if ( error ) throw error;
		db.close();
	});
});
