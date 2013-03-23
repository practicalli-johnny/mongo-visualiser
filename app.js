// app.js
// var databaseUrl = "http://localhost:27017/mydb"; // "username:password@example.com/mydb"
/*
var databaseUrl = "test"; // "username:password@example.com/mydb"
var collections = ["hackathon"];
var dbmjs = require("mongojs").connect(databaseUrl, collections);
*/

/*
db.hackathon.find({Name: "John"}, function(err, users) {
  if( err || !users) console.log("No Johns found");
  else users.forEach( function(johns) {
    console.log(johns);
  } );
});
*/


// var results = db.serverStatus();


/* var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');
*/

/*
var db = new Db('test', new Server('locahost', 27017));
// Establish connection to db
db.open(function(err, db) {

  // Use the admin database for the operation
  var adminDb = db.admin();

  // Add the new user to the admin database
//  adminDb.addUser('admin3', 'admin3', function(err, result) {

    // Authenticate using the newly added user
//    adminDb.authenticate('admin3', 'admin3', function(err, result) {
//      assert.ok(result);

      // Retrive the build information for the MongoDB instance
      adminDb.buildInfo(function(err, info) {
        assert.ok(err == null);

///        adminDb.removeUser('admin3', function(err, result) {
//          assert.ok(result);

          db.close();
        });
      });
    });
  });
});

*/

var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');

var db = new Db('test', new Server('locahost', 27017));
// Establish connection to db
db.open(function(err, db) {


  // Grab a collection object
  var collection = db.collection('hackathon');

  // Force the creation of the collection by inserting a document
  // Collections are not created until the first document is inserted
  collection.insert({'a':1}, {w: 1}, function(err, doc) {

    // Use the admin database for the operation
    var adminDb = db.admin();

    // Add the new user to the admin database
    adminDb.addUser('admin13', 'admin13', function(err, result) {

      // Authenticate using the newly added user
      adminDb.authenticate('admin13', 'admin13', function(err, result) {

        // Retrive the server Info
        adminDb.serverStatus(function(err, info) {
          assert.equal(null, err);
          assert.ok(info != null);

          adminDb.removeUser('admin13', function(err, result) {
            assert.ok(result);

            db.close();
          });
        });
      });
    });
  });
});
