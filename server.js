var express = require("express");
var bodyParser = require("body-parser");


var app = express();

var port = process.env.PORT || 5000;

app.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ttcnpm2019",{
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection
.then(()=>console.log("Connected"))
.catch(err=>console.log(err.message));

var ComicSchema =  require("./models/Comic");

app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static("public"));

// Tạo table commic
const Comic = mongoose.model("comic",ComicSchema);

// // Hiển thị danh sách truyện trên trang truyện
// app.get("/",(req,res)=>{
//     Comic.find()
//     .then(comics=>{
//         res.render("listcomic",{comics});
//     })
//     .catch(e=>console.log(e));
// });

// // Add truyện
// app.get("/add",(req,res)=>{
//     res.render("addcomic");
// });

// app.post("/add", urlencodedParser, function (req, res) {
//     // create user in req.body
//     const {comicName,author,artist,company,status,description,avatar} = req.body;
//     Comic.create({
//         comicName,
//         author,
//         artist,
//         company,
//         status,
//         description,
//         avatar
//     })
//     .then(()=>{
//         res.redirect("/");
//     })
//     .catch((e)=>console.log(e.message));
// });

app.post("/adComic", urlencodedParser, function (req, res) {
    // create user in req.body
    const {comicName,author} = req.body;
    Comic.create({
        comicName,
        author,
        artist:"khang",
        company:"khang",
        status:1,
        description:"...",
        avatar:"http://image.phimmoi.net/film/162/poster.medium.jpg"
    })
    .then(()=>{
        res.redirect("/");
    })
    .catch((e)=>console.log(e.message));
});

app.post("/home",(req,res)=>{
    Comic.find()
    .then(comics=>{
        res.send(comics);
    })
});

app.post("/sendComic", urlencodedParser, function (req, res) {
    // create user in req.body
    const {comicName} = req.body;
    Comic.findOne({comicName: comicName})
    .then(comic=>{
        res.send(comic);
    })
    .catch(e=>console.log(e));
});

app.post("/searchComic", urlencodedParser, function (req, res) {
    // create user in req.body
    const {comicName} = req.body;
    console.log(comicName)
    // Comic.find({comicName: comicName})
    Comic.find({
        comicName : new RegExp(comicName)
    })
    .then(listComic=>{
        res.send(listComic);
    })
    .catch(e=>console.log(e));
});

app.listen(port,()=>{
    console.log("Server is listening on " + port);
})