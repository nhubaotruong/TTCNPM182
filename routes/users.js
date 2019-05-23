const express = require("express")
const users = express.Router()
const cors = require("cors")


const comic = require("../models/Comic")
users.use(cors())
const user = require("../models/User")



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
			if (e)
			{
				res.send(e)
			}
			else
			{
				res.send(null)
			}
		})
		.catch(err => res.send("Error"))
})





module.exports = users
