var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();

var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors())
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


app.post("/adComic", urlencodedParser, function (req, res) {
    // create user in req.body
    const {comicName,author,artist,company,description,avatar,kind} = req.body;
    const arr_kind = [];
    console.log(kind.length)
    for(x in kind){
        if(kind[x]=='1'){
            arr_kind.push("Action");
        }
        else if(kind[x]=='2'){
            arr_kind.push("Adventure");
        }
        else if(kind[x]=='3'){
            arr_kind.push("Comedy");
        }
        else if(kind[x]=='4'){
            arr_kind.push("Comic");
        }
        else if(kind[x]=='5'){
            arr_kind.push("Drama");
        }
        else if(kind[x]=='6'){
            arr_kind.push("Game");
        }
        else if(kind[x]=='7'){
            arr_kind.push("Horror");
        }
        else if(kind[x]=='8'){
            arr_kind.push("Magic");
        }
        else if(kind[x]=='9'){
            arr_kind.push("Mecha");
        }
        else if(kind[x]=='10'){
            arr_kind.push("Mystery");
        }
        else if(kind[x]=='11'){
            arr_kind.push("Romance");
        }
        else if(kind[x]=='12'){
            arr_kind.push("Sci-fi");
        }
        else if(kind[x]=='13'){
            arr_kind.push("Sports");
        }
        else if(kind[x]=='14'){
            arr_kind.push("Supernatural");
        }
        else if(kind[x]=='15'){
            arr_kind.push("Tragedy");
        }
    }
    Comic.create({
        comicName,
        author,
        artist,
        company,
        status:1,
        description,
        avatar,
        view: 0,
        kind: arr_kind
    })
    .then(()=>{
        res.redirect("/");
    })
    .catch((e)=>{console.log(e.message); res.send("Error")});
});

app.post("/deleteComic",(req,res)=>{
    const {comicName} = req.body;
    Comic.deleteOne({comicName:comicName})
    .then(()=>{
        console.log("Xóa thành công")
    })
    .catch((e)=>console.log(e.message))
})

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
    // Comic.find({comicName: comicName})
    Comic.find({
        comicName : new RegExp(comicName,'i')
    })
    .then(listComic=>{
        res.send(listComic);
    })
    .catch(e=>console.log(e));
});


// Comments: Sơn
var Comments = require('./routes/Comments');
app.use('/binhluan',Comments);

var Ratings = require('./routes/Rating');
app.use('/xep_hang',Ratings);


// Readcomic: Khải
var Comics = require('./routes/comics')

app.use('/comics', Comics)



app.listen(port,()=>{
    console.log("Server is listening on " + port);
})

