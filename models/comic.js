const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ComicSchema = new Schema({
    name: {
        type: String
    },
    author: {
        type: String
    },
    category: {
        type: String
    },
    view: {
        type: String
    }
    
})

module.exports = comic = mongoose.model('comics', ComicSchema)