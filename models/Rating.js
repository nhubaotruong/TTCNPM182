const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RatingSchema = new Schema({
    id:{
        type : Schema.Types.ObjectId,
        required: true
    },
    star_1:{
        type : Number,
        default: 0
    },
    star_2:{
        type: Number,
        default: 0
    },
    star_3:{
        type: Number,
        default: 0
    },
    star_4:{
        type: Number,
        default: 0
    },
    star_5:{
        type: Number,
        default: 0
    }
})
module.exports = Rating = mongoose.model('ratings',RatingSchema)