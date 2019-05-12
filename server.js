var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const mongoURI = 'mongodb://localhost:27017/comment'
mongoose.set('useFindAndModify', false);    
mongoose
    .connect(mongoURI,{useNewUrlParser: true,useFindAndModify: false})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

var Comments = require('./routes/Comments')
app.use('/binhluan',Comments)

var Ratings = require('./routes/Ratings')
app.use('/xep_hang',Ratings)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})



















// var MongoClient = require('mongodb').MongoClient;
// var assert = require('assert');
// var url = 'mongodb://localhost:3000/comment';

// module.exports = {
// 	postcomment: function(name, message, time){
// 		MongoClient.connect(url, function(err, db) {
// 		  	db.collection('user').insertOne( {
// 				"name": name,
// 				"message": message,
// 				"time": time
// 			},function(err, result){
// 				assert.equal(err, null);
// 		    	console.log("Saved Comment.");
// 			});
// 		});
//     },
//     getcomment: function(callback){
		
// 		MongoClient.connect(url, function(err, db){
// 			 db.collection('post', function (err, collection) {
// 		        collection.find().toArray(function (err, list) {
// 		            callback(list);
// 		        });
// 		     });
// 		})
// 	}
// }