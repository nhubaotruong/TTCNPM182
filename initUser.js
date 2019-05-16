var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ttcnpm2019");
  var myUsers = [
      {username: "admin", password: "admin", admin: true}
  ];
  dbo.collection("user").insertMany(myUsers, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});