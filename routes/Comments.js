const express = require("express")
const comments = express.Router()
const cors = require("cors")
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")

const Comment = require("../model/Comment")
comments.use(cors())

comments.post('/1', (req,res) => {
    const commentData = {
        name: req.body.name,
        message: req.body.message,
        time: req.body.time,
        reply: req.body.reply
    }

    Comment.create(commentData)
    .then(comment => {
        res.json({status: 'add comment complete!'})
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

comments.get('/2', (req,res) => {
    Comment.find()
    .then(list => {
        // console.log(list)
        res.json(list)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

comments.post('/3',(req,res)=>{
    var tra_loi = {
        name: req.body.name,
        message: req.body.message,
        time: req.body.time,
        replyto: req.body.replyto
    }
    Comment.findOneAndUpdate({_id: req.body.id_comment},{$push: {"reply": tra_loi}},{new: true}, (err, result)=>{
        if(err){
            console.log(err);
            res.send(err)
        }else{
            console.log("RESULT: " + result);
            res.send("Completed!")
        }
    });
})
// process.env.SECRET_KEY = 'secret'
//comments = users
// users.post('/register', (req, res) => {
//     const today = new Date()
//     const userData = {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email,
//         password: req.body.password,
//         created: today
//     }

//     User.findOne({
//         email: req.body.email
//     })
//         .then(user => {
//             if (!user) {
//                 bcrypt.hash(req.body.password, 10, (err, hash) => {
//                     userData.password = hash
//                     User.create(userData)
//                         .then(user => {
//                             res.json({ status: user.email + ' registered' })
//                         })
//                         .catch(err => {
//                             res.send('error: ' + err)
//                         })
//                 })
//             } else {
//                 res.json({ error: 'User already exists' })
//             }
//         })
//         .catch(err => {
//             res.send('error: ' + err)
//         })
// })

// users.post('/login', (req, res) => {
//     User.findOne({
//         email: req.body.email
//     })
//         .then(user => {
//             if (user) {
//                 if (bcrypt.compareSync(req.body.password, user.password)) {
//                     const payload = {
//                         _id: user._id,
//                         first_name: user.first_name,
//                         last_name: user.last_name,
//                         email: user.email
//                     }
//                     console.log(user.date)
//                     let token = jwt.sign(payload, process.env.SECRET_KEY, {
//                         expiresIn: 1440
//                     })
//                     res.send(token)
//                 }
//                 else {
//                     res.json({ error: "User does not exist" })
//                 }
//             }
//             else{
//                 res.json({error: "User does not exist"})
//             }
//         })
//         .catch(err => {
//             res.send('error: '+ err)
//         })
// })
// users.get('/profile', (req,res) =>{
//     var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
//     User.findOne({
//         _id: decoded._id
//     })
//     .then(user => {
//         if(user){
//             res.json(user)
//         }else{
//             res.send("User does not exist")
//         }
//     })
//     .catch(err => {
//         res.send('error: ' + err)
//     })
// })
module.exports = comments