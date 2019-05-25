const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    name:{
        type : String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    time:{
        type: String
    },
    reply:{
        type: Array
    }
})
module.exports = Comment = mongoose.model('comments',CommentSchema)