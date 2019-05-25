const mongoose = require("mongoose")
const Schema = mongoose.Schema

var ComicSchema =  require("./Comic")
const comic = mongoose.model("comics",ComicSchema);


const UserSchema = new Schema({
    username: {
        type: String 
    },
    password: {
        type: String
    },
    admin: {
        type: Boolean, default: false
    },
    FavouriteList: [{
        idcomic : {
            type: Schema.Types.ObjectId,
            ref: 'comics'
        }
    }],
    History : [{   
        
            idcomic : {
                type: Schema.Types.ObjectId,
                ref: 'comics'
            },
            time : Date,
            chap : Number
        }],

    Notice : [{   
        
            idcomic : {
                type: Schema.Types.ObjectId,
                ref: 'comics'
            },
            time : Date,
            chap : Number
        }]
    
    
})

module.exports = user = mongoose.model('users', UserSchema)