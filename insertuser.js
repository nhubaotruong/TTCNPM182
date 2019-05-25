var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ttcnpm2019");

    

    var myuser = [
        { username: 'admin', password: 'admin', admin: true ,FavouriteList : [],History : [],Notice: []},
        { username: 'hkim', password: 'hkim', admin: false,FavouriteList : [],History : [],Notice: []}
    ];

    

    dbo.collection("users").insertMany(myuser, function(err, res) {
        if (err) throw err;
        console.log("Number of user inserted: " + res.insertedCount);
        db.close();
    });
});