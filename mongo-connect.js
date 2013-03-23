var databaseUrl = "test"; // "username:password@example.com/mydb"
var collections = ["hackathon"];
var dbmjs = require("mongojs").connect(databaseUrl, collections);


var counter = db.hackathon.find();



/*
var counters = db.hackathon.find(
    { },
    { counters: 1, _id: 0}
);
*/


/*
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
//    ReplSetServers = require('mongodb').ReplSetServers,
//    ObjectID = require('mongodb').ObjectID,
//    Binary = require('mongodb').Binary,
//    GridStore = require('mongodb').GridStore,
//    Code = require('mongodb').Code,
//    BSON = require('mongodb').pure().BSON,
    assert = require('assert');

var db = new MongoClient('test', new Server('localhost', 27017, {}));
// Establish connection to db
db.open(function(err, mydb) {

   db.hackathon.find();
});

/*
  // Create a collection
  //db.createCollection('test_to_a_after_each', function(err, collection) {
    //assert.equal(null, err);

    // Insert a document in the collection
    //collection.insert({'a':1}, {w:1}, function(err, ids) {

      // Grab a cursor
      // var cursor = collection.find();


// Initial query of the information
// opcounters = db.serverStatus().opcounters

// Insert updates from db.severStatus()
// db.hackathon.insert({lastupdated : new Timestamp(), counters : opcounters})

      var counters = db.hackathon.find(
        { },
        { counters: 1, _id: 0}
      );



      // Execute the each command, triggers for each document
      counters.each(function(err, item) {

        // If the item is null then the cursor is exhausted/empty and closed
        if(item == null) {

          // Show that the cursor is closed
          counters.toArray(function(err, items) {
            assert.ok(err != null);

            // Let's close the db
            db.close();
          });
        };
      });
    });
//  });
// });
*/
