/*
A really simple connection to a local mongodb server, from the tutorial at:

http://mongodb.github.com/node-mongodb-native/api-articles/nodekoarticle1.html#getting-that-connection-to-the-database

*/


// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
