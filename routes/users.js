const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const comic = require("../models/comic")
users.use(cors())
const user = require("../models/user")



users.post('/signup', (req,res) =>{

	user.findOne({username : req.body.username})
		.then (e =>{
			// console.log(e);
			
			if (e)
			{
				
				res.send("false")
			}
			else 
			{

				user.create({
					username : req.body.username,
					password : req.body.password,
					admin : false,
					FavouriteList : [],
					History :[],
					Notice : []
				})
					.then(e => {res.send("true")})
					.catch(err => {res.send("error create")})
			}

		})
		.catch(err =>  { console.log(e); res.send("error find")})


})



users.post('/signin' , (req,res) =>{

	user.findOne({
		username : req.body.username,
		password : req.body.password
	})
		.then(e => {
			console.log(req.body.username)
			console.log(req.body.password)
			if (e)
			{
				res.send("true")
			}
			else
			{
				res.send("false")
			}
		})
		.catch(err => res.send("Error"))
})





module.exports = users
