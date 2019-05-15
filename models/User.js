const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // type là kiểu dữ kiệu, require nếu là true là bắt buộc phải nhập, còn unique là true là bắt buộc phải khác nhau
    username: String,
    password: String,
    admin: Boolean,
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
});

// Tạo connection: là table như bên mysql
// Tạo connection có tên user và dùng schema là UserSchema
// const User = mongoose.model("user",UserSchema);

module.exports = UserSchema;
