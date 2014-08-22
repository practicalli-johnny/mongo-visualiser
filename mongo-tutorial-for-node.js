/*
A really simple connection to a local mongodb server, from the tutorial at:

http://mongodb.github.com/node-mongodb-native/api-articles/nodekoarticle1.html#getting-that-connection-to-the-database

and a few other things on the Internet.

A collection called test has been created an populated with one doucment  in the test database of the local mongodb server

db.test.insert({"Name" : "John", "Age" : "21"});

The database connection also closes now.
*/

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
  if(!err) {
    console.log("We are connected");

  var collection = db.collection('hackathon');

//   collection.findOne({"Name" : "John"}, function(err, results) {

  collection.find({counters: 1, _id: 0}, function(err, results) {

  console.dir(results);
  db.close();

  });
}});


//  var collection = db.collection('hackathon');
//  collection.findOne({lastupdated: '1364045387'}, function(err, item) {});
