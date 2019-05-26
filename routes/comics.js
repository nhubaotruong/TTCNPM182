
const express = require("express")
const comics = express.Router()
const cors = require("cors")
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")

var ComicSchema =  require("../models/Comic");
const Comic = mongoose.model("comic",ComicSchema);
comics.use(cors())
const user = require("../models/User")






// 5ce6366618b530385486e34b

comics.post('/showFavouriteList',(req,res) => {
    
    user.findOne({username : req.body.username},"FavouriteList").populate("FavouriteList.idcomic")
    .then(e => {
        
        res.json(e.FavouriteList)
        
    })
    .catch(err => {
        res.send('error : ' + err)
    })
})








comics.post('/deleteFavouriteList',(req,res) =>{
    // console.log("begin");
    user.findOne({username : req.body.username})
    .then(e => {
        // console.log("begin find");
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
        // console.log("count done");
        user.findOneAndUpdate({username : req.body.username},{$set:{"FavouriteList" : e.FavouriteList}},{new: true}).then(doc => {
        res.json(true)
  })
  .catch(err => {
    console.error(err)
  })
        
    })
    .catch(err => {
        res.send('error : ' + err)
    })
})



comics.post('/insertFavouriteList',(req,res) =>{
    // const id_comic_delete = {id : rep.body.id}
    user.findOne({username : req.body.username})
    .then(e => {
        
        var insert = true  // check xem da co trong favouritelist chua
        for (var i of e.FavouriteList)
        {
            if (i.idcomic == req.body.id)
            {
                insert = false
                break
            }
            
        }
        if (insert)
        {
            e.FavouriteList.push({"idcomic" : req.body.id})
            user.findOneAndUpdate({username : req.body.username},{$set:{"FavouriteList" : e.FavouriteList}},{new: true}).then(doc => {
                console.log("insertFavouriteList done")
            })
            .catch(err => {
                console.error(err)
            })
            res.json(insert)
        }
        
        res.json(insert)
    })
    .catch(err => {
        res.send('error : ' + err)
    })
})



comics.post('/checkaddFavouriteList',(req,res) => {
    user.findOne({username : req.body.username},"FavouriteList").populate("FavouriteList.idcomic")
        .then(e => {
            var result = true
            for (var i of e.FavouriteList)
            {
                if (i.idcomic.comicName == req.body.comicName)
                {
                    result = false
                    break
                }
            }
            console.log(req.body.id);
            res.json(result)
        })
        .catch(err => {
            res.json("error")
        })
})



comics.post('/showHistory',(req,res) => {
    user.findOne({username : req.body.username}).populate('History.idcomic')
        .then(e => {
        
        res.json(e.History)
        
        
    })
        .catch(err => {
        res.send('error : ' + err)
    })
    
})


comics.post('/deleteHistory',(req,res) =>{
    user.findOne({username : req.body.username})
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
        
        user.findOneAndUpdate({username : req.body.username},{$set:{"History" : e.History}},{new: true}).then(doc => {
            res.json(true)
        })
        .catch(err => {
            console.error(err)
        })
        
    })
    .catch(err => {
        res.send('error : ' + err)
    })
})



comics.post('/insertHistory',(req,res) =>{
    user.findOne({username : req.body.username},"History").populate("History.idcomic")
    .then(e => {
        
        var count = 0
        
        for (var i of e.History)
        {
            if (i.idcomic.comicName == req.body.comicName && i.chap == req.body.chapter)
            {
                e.History.splice(count,1)

                break
            }
            count++
        }
        Comic.findOne({comicName: req.body.comicName})
            .then (f => {
                e.History.unshift({"idcomic" : f._id , "time" : req.body.time, "chap" : req.body.chapter})

                

                user.findOneAndUpdate({username : req.body.username},{$set:{"History" : e.History}},{new: true}).then(doc => {
                        console.log("insertHistory done")
                        res.json(true)
                    })
                    .catch(err => {
                        console.error(err)
                    })

            })
        
        
        
    })
    .catch(err => {
        res.send('error : ' + err)
    })
})





comics.post('/showNotice',(req,res) => {
    user.findOne({username : req.body.username}).populate('Notice.idcomic')
        .then(e => {
        
        res.json(e.Notice)
        
        
    })
        .catch(err => {
        res.send('error : ' + err)
    })
    
})


comics.post('/deleteNotice',(req,res) =>{
    user.findOne({username : req.body.username})
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
        user.findOneAndUpdate({username : req.body.username},{$set:{"Notice" : e.Notice}},{new: true}).then(doc => {
    res.json(true)
  })
  .catch(err => {
    console.error(err)
  })
        
    })
    .catch(err => {
        res.send('error : ' + err)
    })
})



comics.post('/insertNotice',(req,res) =>{
    user.findOne({username : req.body.username})
    .then(e => {
        
        var count = 0
        for (var i of e.Notice)
        {
            if (i.idcomic == req.body.id && i.chap == req.body.chapter)
            {
                e.Notice.splice(count,1)
                break
            }
            count++
        }

        e.Notice.unshift({"idcomic" : req.body.id , "time" : req.body.time, "chap" : req.body.chapter})
        
        user.findOneAndUpdate({username : req.body.username},{$set:{"Notice" : e.History}},{new: true}).then(doc => {
            console.log("insertNotice done")
            res.json(true)
        })
        .catch(err => {
            console.error(err)
        })
        
        
    })
    .catch(err => {
        res.send('error : ' + err)
    })
})


comics.post('/getcomic', (req,res) =>{
    console.log(req.body.comicName)
    Comic.findOne({comicName: req.body.comicName}).populate('comment')
    .then(e =>{
        if(e != null){
            res.json(e.comment)
        }
    })
    .catch(err => {
        console.log(err)
    })
})

comics.post('/addcomment_comic', (req,res) =>{
    console.log(req.body.comment)
    Comic.findOneAndUpdate({comicName: req.body.comicname},{$push: {"comment": req.body.comment}},{new: true}, (err, result)=>{
        if(err){
            console.log(err);
            res.send(err)
        }else{
            console.log("RESULT: " + result);
            res.send("Completed!")
        }
    })
    
})

comics.post('/readcomic', (req,res) =>{
    // res.json(req.body.comicName)
    Comic.findOne({comicName : req.body.comicName})
        .then(e => {
            for (var i of e.data)
            {
                if(req.body.chapter == i.chapterNum)
                {
                    res.json(i)
                    break
                }
            }
        })
    
})



comics.post('/countchapter',(req,res) =>{
    console.log("sadfsadf");
    console.log(req.body.comicName);
    Comic.findOne({comicName : req.body.comicName})
        .then(e =>{
            console.log(e);
            res.json(e.data)
        })
})



module.exports = comics