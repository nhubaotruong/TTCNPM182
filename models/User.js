<<<<<<< HEAD
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
=======
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // type là kiểu dữ kiệu, require nếu là true là bắt buộc phải nhập, còn unique là true là bắt buộc phải khác nhau
    username: String,
    password: String,
    admin: Boolean,
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
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
<<<<<<< HEAD
    
    
})

module.exports = user = mongoose.model('users', UserSchema)
=======
});

// Tạo connection: là table như bên mysql
// Tạo connection có tên user và dùng schema là UserSchema
// const User = mongoose.model("user",UserSchema);

module.exports = UserSchema;
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
