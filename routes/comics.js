
const express = require("express")
const comics = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const comic = require("../models/comic")
comics.use(cors())
const user = require("../models/user")


// "5ccdb65ebf4a5a028072c22d" : id cua user trong database




comics.get('/showFavouriteList',(req,res) => {
    user.findOne({_id : "5ccdb65ebf4a5a028072c22d"},"FavouriteList").populate("FavouriteList.idcomic")
    .then(e => {
        
        res.json(e.FavouriteList)
        
    })
    .catch(err => {
        res.send('error : ' + err)
    })
})



// comics.get('/showFavouriteList',(req,res) => {
//     user.find({_id : "5ccdb65ebf4a5a028072c22d"})
//     .then(e => {
        
//         // console.log(typeof(req.body.id))
//         var id_comics = []
//         for (var i of e[0].FavouriteList)
//         {
//             id_comics.push({"_id" : i})
//         }
//         comic.find({ $or :id_comics })
//             .then(f => res.json(f))
        
//     })
//     .catch(err => {
//         res.send('error : ' + err)
//     })
// })





comics.post('/deleteFavouriteList',(req,res) =>{
    // const id_comic_delete = {id : rep.body.id}
    user.findOne({_id : "5ccdb65ebf4a5a028072c22d"})
    .then(e => {
        
        var count = 0
        for (var i of e.FavouriteList)
        {
            if (i.idcomic == req.body.id)
            {
                e.FavouriteList.splice(count,1)
                break
            }
            count++
        }
        user.findOneAndUpdate({"_id" : "5ccdb65ebf4a5a028072c22d"},{$set:{"FavouriteList" : e.FavouriteList}},{new: true}).then(doc => {
    console.log("delete done")
  })
  .catch(err => {
    console.error(err)
  })
        
    })
    .catch(err => {
        res.send('error : ' + err)
    })
})


comics.get('/showHistory',(req,res) => {
    user.findOne({_id : "5ccdb65ebf4a5a028072c22d"}).populate('History.idcomic')
        .then(e => {
        
        res.json(e.History)
        
        
    })
        .catch(err => {
        res.send('error : ' + err)
    })
    
})


comics.post('/deleteHistory',(req,res) =>{
    user.findOne({_id : "5ccdb65ebf4a5a028072c22d"})
    .then(e => {
        
        var count = 0
        for (var i of e.History)
        {
            if (i.idcomic == req.body.id._id)
            {
                e.History.splice(count,1)
                break
            }
            count++
        }
        console.log(req.body.id)
        user.findOneAndUpdate({"_id" : "5ccdb65ebf4a5a028072c22d"},{$set:{"History" : e.History}},{new: true}).then(doc => {
    console.log("delete done")
  })
  .catch(err => {
    console.error(err)
  })
        
    })
    .catch(err => {
        res.send('error : ' + err)
    })
})



comics.get('/showNotice',(req,res) => {
    user.findOne({_id : "5ccdb65ebf4a5a028072c22d"}).populate('Notice.idcomic')
        .then(e => {
        
        res.json(e.Notice)
        
        
    })
        .catch(err => {
        res.send('error : ' + err)
    })
    
})


comics.post('/deleteNotice',(req,res) =>{
    user.findOne({_id : "5ccdb65ebf4a5a028072c22d"})
    .then(e => {
        
        var count = 0
        for (var i of e.Notice)
        {
            if (i.idcomic == req.body.id._id)
            {
                e.Notice.splice(count,1)
                break
            }
            count++
        }
        console.log(req.body.id)
        user.findOneAndUpdate({"_id" : "5ccdb65ebf4a5a028072c22d"},{$set:{"Notice" : e.Notice}},{new: true}).then(doc => {
    console.log("delete done")
  })
  .catch(err => {
    console.error(err)
  })
        
    })
    .catch(err => {
        res.send('error : ' + err)
    })
})



comics.post('/readcomic', (req,res) =>{
    
    comic.findOne({name : req.body.comicName})
        .then(e => {
            for (var i of e.data)
            {
                if(req.body.chapter == i.chapter)
                {
                    res.json(i.link)
                    break
                }
            }
        })
    
})



module.exports = comics