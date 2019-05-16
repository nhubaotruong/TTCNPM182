const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ComicSchema = new Schema({
    // type là kiểu dữ kiệu, require nếu là true là bắt buộc phải nhập, còn unique là true là bắt buộc phải khác nhau
    comicName : {type: String, require: true, unique: true},
    author : {type: String, required: true},
    artist : {type: String, required: true},
    company : String,
    status : {type: Boolean, required: true},
    description: {type: String, required: true},
    avatar : {type: String, required: true},
    view : {type: Number, default: 0},
    kind: [String],
    data: [
        {
            chapter : Number,
            link : [                    //      array cac path dan den cac anh truyen dung cho readcomic
                {type : String}         //
            ]                           //
        }
    ]
});

// Tạo connection: là table như bên mysql
// Tạo connection có tên user và dùng schema là UserSchema
// const User = mongoose.model("user",UserSchema);

module.exports = ComicSchema;
