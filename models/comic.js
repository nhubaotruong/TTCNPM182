const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ComicSchema = new Schema({
    name: String,
    author: String,
    category: String,
    view: String,
    data: [
        {
            chapter : Number,
            link : [                    //      array cac path dan den cac anh truyen dung cho readcomic
                {type : String}         //
            ]                           //
        }
    ]
    
})

module.exports = comic = mongoose.model('comics', ComicSchema)