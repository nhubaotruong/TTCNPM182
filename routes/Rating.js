const express = require("express")
const ratings = express.Router()
const cors = require("cors")

const Rating = require("../models/Rating")
ratings.use(cors())

ratings.post('/1', (req,res) =>{
    const dataRating = {
        id: req.body.id,
        star_1: req.body.star_1,
        star_2: req.body.star_2,
        star_3: req.body.star_3,
        star_4: req.body.star_4,
        star_5: req.body.star_5
    }
    console.log(req.body.id)
    Rating.findOne({
        id: req.body.id
    })
    .then(rating => {
        if(!rating){
            Rating.create(dataRating)
            .then(rating => {
                res.json({status: 'add new rating!'})
                console.log(rating)
            })
            .catch(err =>{
                res.send('error: ' + err)
            })
        }else{
            Rating.findOneAndUpdate({id: req.body.id}, 
                    {$set:{star_1: rating.star_1 + req.body.star_1,
                        star_2: rating.star_2 + req.body.star_2,
                        star_3: rating.star_3 + req.body.star_3,
                        star_4: rating.star_4 + req.body.star_4,
                        star_5: rating.star_5 + req.body.star_5}}, {new: true}, (err, doc) => {
                if (err) {
                    console.log("Something wrong when updating rating!");
                    res.send('error: ' + err);
                }else{
                    console.log(doc);
                    console.log("Updated Rating" + req.body.id)
                    res.json(doc);
                }
            });
        }
    })
    .catch(err =>{
        res.send('error: ' + err)
    })
})

ratings.post('/2',(req,res) => {
    // console.log(req.body.id)
    Rating.findOne({
        id: req.body.id
    })
    .then(rating =>{
        if(!rating){
            res.json("NULL")
        }
        else{
            // console.log("1")
            res.json(rating)
        }
    })
    .catch(err =>{
        res.send('error: ' + err)
    })
})

module.exports = ratings