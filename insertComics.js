var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ttcnpm2019");
  var myComics = [
    // Conan
    {
        view: 0,
        comicName: "Conan",
        kind: ["Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
        author: "Gosho Aoyama",
        artist: "Gosho Aoyama",
        company: "TSM Entertainment",
        status: false,
        description: "Là một bộ truyện tranh Nhật Bản (manga) thuộc loại trinh thám được vẽ và minh họa bởi Aoyama Gosho. Bộ truyện này ban đầu là những chương truyện nhỏ được đăng trên    tuần báo Shōnen Sunday của Shogakukan từ 19 tháng 1 năm 1994 sau đó được đóng thành các tập tankōbon. Tại Việt Nam bộ truyện được Nhà xuất bản Kim Đồng ấn hành dưới tựa Thám tử lừng danh   Conan [1] Tác phẩm xoay quanh câu chuyện về chàng thám tử học sinh Kudo Shinichi trong một lần đang điều tra bị thành viên Tổ chức Áo Đen bắt uống thuốc độc khiến cơ thể teo nhỏ và trở thành  Edogawa Conan",
        avatar: "https://zingtv-photo.zadn.vn/tv_program_275_275/d/7/d7b1bc44afe616068b000e4393ff56c9_1486354674.jpg",
        data: [
        {
            chapterNum: 1,
            chapter: "Sherlock Holmes Nhật Bản",
            link: [
                "https://img.sachvui.com/images/2018/13/chap-1-0.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-1.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-2.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-3.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-4.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-5.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-6.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-7.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-8.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-9.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-10.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-11.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-12.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-13.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-14.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-15.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-16.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-17.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-18.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-19.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-20.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-21.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-22.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-23.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-24.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-25.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-26.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-27.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-28.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-29.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-30.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-31.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-32.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-33.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-1-34.jpg"
            ]
        },

        {
            chapterNum: 2,
            chapter: "Thám tử teo nhỏ",
            link: [
                "https://img.sachvui.com/images/2018/13/chap-2-0.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-1.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-2.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-3.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-4.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-5.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-6.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-7.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-8.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-9.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-10.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-11.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-12.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-13.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-14.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-15.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-16.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-17.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-18.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-19.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-20.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-21.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-22.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-23.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-24.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-25.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-2-26.jpg"
            ]
        },

        {
            chapterNum: 3,
            chapter: "Thám tử bị cô lập",
            link: [
                "https://img.sachvui.com/images/2018/13/chap-3-0.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-3-1.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-3-2.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-3-3.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-3-4.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-3-5.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-3-6.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-3-7.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-3-8.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-3-9.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-3-10.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-3-11.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-3-12.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-3-13.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-3-14.jpg"
            ]
        },

        {
            chapterNum: 4,
            chapter: "Ống khói thứ sáu",
            link: [
                "https://img.sachvui.com/images/2018/13/chap-4-0.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-4-1.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-4-2.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-4-3.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-4-4.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-4-5.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-4-6.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-4-7.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-4-8.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-4-9.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-4-10.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-4-11.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-4-12.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-4-13.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-4-14.jpg"
            ]
        },

        {
            chapterNum: 5,
            chapter: "Thêm một trọng tội",
            link: [
                "https://img.sachvui.com/images/2018/13/chap-5-0.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-5-1.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-5-2.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-5-3.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-5-4.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-5-5.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-5-6.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-5-7.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-5-8.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-5-9.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-5-10.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-5-11.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-5-12.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-5-13.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-5-14.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-5-15.jpg"
            ]
        },

        {
            chapterNum: 6,
            chapter: "Từ thám tử gà mờ thành thám tử tài ba",
            link: [
                "https://img.sachvui.com/images/2018/13/chap-6-0.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-6-1.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-6-2.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-6-3.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-6-4.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-6-5.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-6-6.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-6-7.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-6-8.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-6-9.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-6-10.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-6-11.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-6-12.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-6-13.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-6-14.jpg", 
                "https://img.sachvui.com/images/2018/13/chap-6-15.jpg"
            ]
        }
        ]
    },

    // One Piece
    {
        view: 10,
        comicName: "OnePiece",
        kind: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen", "Supernatural"],
        author: "Oda Eiichiro",
        artist: "Oda Eiichiro",
        company: "Weekly Shōnen Jump",
        status: false,
        description: "One Piece nói về cuộc hành trình của Monkey D. Luffy - thuyền trưởng của băng hải tặc Mũ Rơm và các đồng đội của cậu. Luffy tìm kiếm vùng biển bí ẩn nơi cất giữ kho báu lớn nhất thế giới One Piece, với mục đích trở thành Tân Vua Hải Tặc",
        avatar: "https://i.pinimg.com/originals/ef/7e/4b/ef7e4b8f5f04e78317f92aede1fe8280.jpg",
        data : [
            {
                chapterNum: 1,
                chapter: "Bắt đầu chuyển hải trình",
                link: [
                    "http://mangaqq.net/128/1/1.jpg?id=test", 
                    "http://mangaqq.net/128/1/2.jpg?id=test", 
                    "http://mangaqq.net/128/1/3.jpg?id=test", 
                    "http://mangaqq.net/128/1/4.jpg?id=test", 
                    "http://mangaqq.net/128/1/5.jpg?id=test", 
                    "http://mangaqq.net/128/1/6.jpg?id=test", 
                    "http://mangaqq.net/128/1/7.jpg?id=test", 
                    "http://mangaqq.net/128/1/8.jpg?id=test", 
                    "http://mangaqq.net/128/1/9.jpg?id=test", 
                    "http://mangaqq.net/128/1/10.jpg?id=test", 
                    "http://mangaqq.net/128/1/11.jpg?id=test", 
                    "http://mangaqq.net/128/1/12.jpg?id=test", 
                    "http://mangaqq.net/128/1/13.jpg?id=test", 
                    "http://mangaqq.net/128/1/14.jpg?id=test", 
                    "http://mangaqq.net/128/1/15.jpg?id=test", 
                    "http://mangaqq.net/128/1/16.jpg?id=test", 
                    "http://mangaqq.net/128/1/17.jpg?id=test", 
                    "http://mangaqq.net/128/1/18.jpg?id=test", 
                    "http://mangaqq.net/128/1/19.jpg?id=test", 
                    "http://mangaqq.net/128/1/20.jpg?id=test", 
                    "http://mangaqq.net/128/1/21.jpg?id=test", 
                    "http://mangaqq.net/128/1/22.jpg?id=test", 
                    "http://mangaqq.net/128/1/23.jpg?id=test", 
                    "http://mangaqq.net/128/1/24.jpg?id=test", 
                    "http://mangaqq.net/128/1/25.jpg?id=test", 
                    "http://mangaqq.net/128/1/26.jpg?id=test", 
                    "http://mangaqq.net/128/1/27.jpg?id=test", 
                    "http://mangaqq.net/128/1/28.jpg?id=test", 
                    "http://mangaqq.net/128/1/29.jpg?id=test", 
                    "http://mangaqq.net/128/1/30.jpg?id=test", 
                    "http://mangaqq.net/128/1/31.jpg?id=test", 
                    "http://mangaqq.net/128/1/32.jpg?id=test", 
                    "http://mangaqq.net/128/1/33.jpg?id=test", 
                    "http://mangaqq.net/128/1/34.jpg?id=test", 
                    "http://mangaqq.net/128/1/35.jpg?id=test", 
                    "http://mangaqq.net/128/1/36.jpg?id=test", 
                    "http://mangaqq.net/128/1/37.jpg?id=test", 
                    "http://mangaqq.net/128/1/38.jpg?id=test", 
                    "http://mangaqq.net/128/1/39.jpg?id=test", 
                    "http://mangaqq.net/128/1/40.jpg?id=test", 
                    "http://mangaqq.net/128/1/41.jpg?id=test", 
                    "http://mangaqq.net/128/1/42.jpg?id=test", 
                    "http://mangaqq.net/128/1/43.jpg?id=test", 
                    "http://mangaqq.net/128/1/44.jpg?id=test", 
                    "http://mangaqq.net/128/1/45.jpg?id=test", 
                    "http://mangaqq.net/128/1/46.jpg?id=test", 
                    "http://mangaqq.net/128/1/47.jpg?id=test", 
                    "http://mangaqq.net/128/1/48.jpg?id=test", 
                    "http://mangaqq.net/128/1/49.jpg?id=test", 
                    "http://mangaqq.net/128/1/50.jpg?id=test", 
                    "http://mangaqq.net/128/1/51.jpg?id=test", 
                    "http://mangaqq.net/128/1/52.jpg?id=test", 
                    "http://mangaqq.net/128/1/53.jpg?id=test"
                ]
            },

            {
                chapterNum: 2,
                chapter: "Cậu ta là Luffy mũ rơm",
                link: [
                    "http://mangaqq.net/128/2/0.jpg?id=test", 
                    "http://mangaqq.net/128/2/1.jpg?id=test", 
                    "http://mangaqq.net/128/2/2.jpg?id=test", 
                    "http://mangaqq.net/128/2/3.jpg?id=test", 
                    "http://mangaqq.net/128/2/4.jpg?id=test", 
                    "http://mangaqq.net/128/2/5.jpg?id=test", 
                    "http://mangaqq.net/128/2/6.jpg?id=test", 
                    "http://mangaqq.net/128/2/7.jpg?id=test", 
                    "http://mangaqq.net/128/2/8.jpg?id=test", 
                    "http://mangaqq.net/128/2/9.jpg?id=test", 
                    "http://mangaqq.net/128/2/10.jpg?id=test", 
                    "http://mangaqq.net/128/2/11.jpg?id=test", 
                    "http://mangaqq.net/128/2/12.jpg?id=test", 
                    "http://mangaqq.net/128/2/13.jpg?id=test", 
                    "http://mangaqq.net/128/2/14.jpg?id=test", 
                    "http://mangaqq.net/128/2/15.jpg?id=test", 
                    "http://mangaqq.net/128/2/16.jpg?id=test", 
                    "http://mangaqq.net/128/2/17.jpg?id=test", 
                    "http://mangaqq.net/128/2/18.jpg?id=test", 
                    "http://mangaqq.net/128/2/19.jpg?id=test", 
                    "http://mangaqq.net/128/2/20.jpg?id=test", 
                    "http://mangaqq.net/128/2/21.jpg?id=test", 
                    "http://mangaqq.net/128/2/22.jpg?id=test", 
                    "http://mangaqq.net/128/2/23.jpg?id=test"
                ]
            },

            {
                chapterNum: 3,
                chapter: "Thợ săn hải tặc Zoro xuất hiện",
                link: [
                    "http://mangaqq.net/128/3/0.jpg?id=test", 
                    "http://mangaqq.net/128/3/1.jpg?id=test", 
                    "http://mangaqq.net/128/3/2.jpg?id=test", 
                    "http://mangaqq.net/128/3/3.jpg?id=test", 
                    "http://mangaqq.net/128/3/4.jpg?id=test", 
                    "http://mangaqq.net/128/3/5.jpg?id=test", 
                    "http://mangaqq.net/128/3/6.jpg?id=test", 
                    "http://mangaqq.net/128/3/7.jpg?id=test", 
                    "http://mangaqq.net/128/3/8.jpg?id=test", 
                    "http://mangaqq.net/128/3/9.jpg?id=test", 
                    "http://mangaqq.net/128/3/10.jpg?id=test", 
                    "http://mangaqq.net/128/3/11.jpg?id=test", 
                    "http://mangaqq.net/128/3/12.jpg?id=test", 
                    "http://mangaqq.net/128/3/13.jpg?id=test", 
                    "http://mangaqq.net/128/3/14.jpg?id=test", 
                    "http://mangaqq.net/128/3/15.jpg?id=test", 
                    "http://mangaqq.net/128/3/16.jpg?id=test", 
                    "http://mangaqq.net/128/3/17.jpg?id=test", 
                    "http://mangaqq.net/128/3/18.jpg?id=test", 
                    "http://mangaqq.net/128/3/19.jpg?id=test", 
                    "http://mangaqq.net/128/3/20.jpg?id=test"
                ]
            },

            {
                chapterNum: 4,
                chapter: "Đại tá hải quân Morgan Tay Rìu",
                link: [
                    "http://mangaqq.net/128/4/0.jpg?id=test", 
                    "http://mangaqq.net/128/4/1.jpg?id=test", 
                    "http://mangaqq.net/128/4/2.jpg?id=test", 
                    "http://mangaqq.net/128/4/3.jpg?id=test", 
                    "http://mangaqq.net/128/4/4.jpg?id=test", 
                    "http://mangaqq.net/128/4/5.jpg?id=test", 
                    "http://mangaqq.net/128/4/6.jpg?id=test", 
                    "http://mangaqq.net/128/4/7.jpg?id=test", 
                    "http://mangaqq.net/128/4/8.jpg?id=test", 
                    "http://mangaqq.net/128/4/9.jpg?id=test", 
                    "http://mangaqq.net/128/4/10.jpg?id=test", 
                    "http://mangaqq.net/128/4/11.jpg?id=test", 
                    "http://mangaqq.net/128/4/12.jpg?id=test", 
                    "http://mangaqq.net/128/4/13.jpg?id=test", 
                    "http://mangaqq.net/128/4/14.jpg?id=test", 
                    "http://mangaqq.net/128/4/15.jpg?id=test", 
                    "http://mangaqq.net/128/4/16.jpg?id=test", 
                    "http://mangaqq.net/128/4/17.jpg?id=test", 
                    "http://mangaqq.net/128/4/18.jpg?id=test", 
                    "http://mangaqq.net/128/4/19.jpg?id=test"
                ]
            }
        ]
    },

    // Doraemon
    { 
        view: 0,
        comicName: "Doraemon",
        kind: ["Adventure", "Comedy", "Fantasy", "Sci-Fi", "Slice Of Life"],
        author: "Fujiko Fujio",
        artist: "Fujiko Fujio",
        company: "Shogakukan",
        status: false,
        description: "Doraemon (Đôrêmon) là một chú mèo máy được Sewashi (Nôbitô), cháu ba đời của Nobita gửi về quá khứ cho ông mình để giúp đỡ Nobita tiến bộ, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này. Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó là thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần",
        avatar: "https://image.winudf.com/v2/image/Y29tLm5vc2tpbGwuRG9yZW1vbldhbGxwYXBlcl9zY3JlZW5fMF8xNTIyNDIzOTE4XzA0Mg/screen-0.jpg?h=800&fakeurl=1",
        data: [
            {
                chapterNum: 1,
                chapter: "Doremon đã đến với Nobita như thế nào?",
                link: [ 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-005fac55.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-00623c47.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-007c64a5.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-008c2d77.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-0092dc63.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-0101601d.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-0119361b.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-0126e03a.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-013294d1.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-014.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-015.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-016.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-017.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-018.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-019.png"
                ]
            },

            {
                chapterNum: 2,
                chapter: "Chạy trời không khỏi nắng",
                link: [
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-2-chay-troi-khong-khoi-nang-020.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-2-chay-troi-khong-khoi-nang-021.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-2-chay-troi-khong-khoi-nang-022.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-2-chay-troi-khong-khoi-nang-023.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-2-chay-troi-khong-khoi-nang-024.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-2-chay-troi-khong-khoi-nang-025.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-2-chay-troi-khong-khoi-nang-026.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-2-chay-troi-khong-khoi-nang-027.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-2-chay-troi-khong-khoi-nang-028.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-2-chay-troi-khong-khoi-nang-029.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-2-chay-troi-khong-khoi-nang-030.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-2-chay-troi-khong-khoi-nang-031.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-2-chay-troi-khong-khoi-nang-032.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-2-chay-troi-khong-khoi-nang-033.png"
                ]
            },

            {
                chapterNum: 3,
                chapter: "Bánh quy biến hình",
                link: [
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-3-banh-quy-bien-hinh-034.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-3-banh-quy-bien-hinh-035.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-3-banh-quy-bien-hinh-036.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-3-banh-quy-bien-hinh-037.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-3-banh-quy-bien-hinh-038.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-3-banh-quy-bien-hinh-039.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-3-banh-quy-bien-hinh-04081122.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-3-banh-quy-bien-hinh-0418a95c.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-3-banh-quy-bien-hinh-0424f510.png"
                ]
            },

            {
                chapterNum: 4,
                chapter: "Câu chuyện cái bình bể",
                link: [
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-4-cau-chuyen-cai-binh-be-043de3df.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-4-cau-chuyen-cai-binh-be-044.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-4-cau-chuyen-cai-binh-be-045.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-4-cau-chuyen-cai-binh-be-046.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-4-cau-chuyen-cai-binh-be-047.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-4-cau-chuyen-cai-binh-be-048.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-4-cau-chuyen-cai-binh-be-049.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-4-cau-chuyen-cai-binh-be-050.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-4-cau-chuyen-cai-binh-be-051.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-4-cau-chuyen-cai-binh-be-052.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-4-cau-chuyen-cai-binh-be-053.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-4-cau-chuyen-cai-binh-be-054.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-4-cau-chuyen-cai-binh-be-055.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-4-cau-chuyen-cai-binh-be-056.png"
                ]
            },

            {
                chapterNum: 5,
                chapter: "Ống sáo thần",
                link: [
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-5-ong-sao-than-057.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-5-ong-sao-than-058.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-5-ong-sao-than-059.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-5-ong-sao-than-060.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-5-ong-sao-than-061.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-5-ong-sao-than-062.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-5-ong-sao-than-063.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-5-ong-sao-than-064.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-5-ong-sao-than-065.png"
                ]
            },

            {
                chapterNum: 6,
                chapter: "Trở về thời xa xưa",
                link: [
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-066.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-067.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-068.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-069.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-070.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-071.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-072.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-073.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-074.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-075.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-076.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-077.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-078.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-079.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-080.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-6-tro-ve-thoi-xa-xua-081.png"
                ]
            },

            {
                chapterNum: 7,
                chapter: "Cào Cào giúp hối cải",
                link: [
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-7-cao-cao-giup-hoi-cai-082.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-7-cao-cao-giup-hoi-cai-083.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-7-cao-cao-giup-hoi-cai-084.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-7-cao-cao-giup-hoi-cai-085.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-7-cao-cao-giup-hoi-cai-086.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-7-cao-cao-giup-hoi-cai-087.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-7-cao-cao-giup-hoi-cai-088.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-7-cao-cao-giup-hoi-cai-089.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-7-cao-cao-giup-hoi-cai-090.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-7-cao-cao-giup-hoi-cai-091.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-7-cao-cao-giup-hoi-cai-092.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-7-cao-cao-giup-hoi-cai-093.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-7-cao-cao-giup-hoi-cai-094.png", 
                    "https://img.sachvui.com/images/2018/4/tap-1-chuong-7-cao-cao-giup-hoi-cai-095.png"
                ]
            }
        ]
    },

    // DragonBall
    {
        view: 10,
        comicName: "DragonBall",
        kind: ["Action", "Adventure", "Comedy", "Fantasy", "Shounen", "Supernatural"],
        author: "Toriyama Akira",
        artist: "Toriyama Akira",
        company: "Shounen Jump",
        status: false,
        description: "Trong khoảng thời gian yên bình sau khi tiêu diệt Kid Buu, Goku tiếp tục cố gắng để duy trì hòa bình của Trái đất nhưng bị Chi-Chi bắt phải làm việc trong trang trại củ cải. Gohan và Videl đã kết hôn, còn Goten và Trunks cùng lên kế hoạch tìm một món quà cưới cho họ. Beerus - Thần hủy diệt, người còn mạnh hơn so với Majin Buu và Frieza cũng xuất hiện",
        avatar: "http://image.phimmoi.net/film/6896/preview.medium.jpg?_v=1557475563",
        data: [
            {
                chapterNum: 1,
                chapter: "Bulma và Songoku",
                link: [ 
                    "https://img.sachvui.com/images/2018/5/chap-1-005.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-006.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-007.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-008.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-009.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-010.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-011.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-012.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-013.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-014.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-015.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-016.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-017.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-018.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-019.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-020.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-021.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-022.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-023.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-024.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-025.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-026.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-027.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-028.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-029.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-030.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-031.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-032.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-033.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-1-034-035.jpg"
                ]
            },

            {
                chapterNum: 2,
                chapter: "Mất ngọc",
                link: [
                    "https://img.sachvui.com/images/2018/5/chap-2-036a.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-2-036b.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-2-037.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-2-038.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-2-039.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-2-040.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-2-041.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-2-042.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-2-043.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-2-044.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-2-045.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-2-046.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-2-047.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-2-048.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-2-049.jpg"
                ]
            },

            {
                chapterNum: 3,
                chapter: "Goku lần đầu tiên đến biển",
                link: [
                    "https://img.sachvui.com/images/2018/5/chap-3-050a.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-3-050b.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-3-051.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-3-052.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-3-053.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-3-054.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-3-055.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-3-056.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-3-057.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-3-058.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-3-059.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-3-060.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-3-061.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-3-062.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-3-063.jpg"
                ]
            },

            {
                chapterNum: 4,
                chapter: "Ta là Quy lão tiên sinh",
                link: [
                    "https://img.sachvui.com/images/2018/5/chap-4-064a.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-4-064b.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-4-065.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-4-066.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-4-067.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-4-068.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-4-069.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-4-070.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-4-071.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-4-072.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-4-073.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-4-074.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-4-075.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-4-076.jpg", 
                    "https://img.sachvui.com/images/2018/5/chap-4-077.jpg"
                ]
            }
        ]
    },

    // Naruto
    {
        view: 10,
        comicName: "Naruto",
        kind: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen", "Supernatural"],
        author: "Kishimoto Masashi",
        artist: "Kishimoto Masashi",
        company: "Shounen Jump",
        status: false,
        description: "Nhân vật chính là Uzumaki Naruto, một thiếu niên ồn ào, hiếu động, một ninja luôn muốn tìm cách khẳng định mình để được mọi người công nhận, rất muốn trở thành Hokage (Người đứng đầu làng lá Konoha) - người lãnh đạo ninja cả làng, được tất cả mọi người kính trọng.\n Mười hai năm trước khi câu chuyện chính thức bắt đầu, một con hồ ly chín đuôi đã tấn công Konohagakure. Nó là một con quái vật có sức mạnh khủng khiếp, chỉ một cái vẫy từ một trong chín cái đuôi của nó có thể tạo ra những cơn sóng thần và san bằng nhiều ngọn núi. Nó gây ra sự hỗn loạn và giết chết rất nhiều người cho đến khi người đứng đầu làng Lá - Hokage đệ tứ - đã đánh bại nó bằng cách đổi lấy mạng sống của mình để phong ấn nó vào trong người một đứa trẻ mới sinh. Đứa trẻ đó tên là Uzumaki Naruto.",
        avatar: "https://i.pinimg.com/originals/19/76/f5/1976f5f052874b52ff00f2386625c280.jpg",
        data: [
            {
                chapterNum: 1,
                chapter: "Uzumaki Naruto!",
                link: [ 
                   "https://img.sachvui.com/images/2018/27/chap-1-1.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-2.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-3.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-4.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-5.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-6.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-7.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-8.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-9.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-10.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-11.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-12.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-13.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-14.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-15.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-16.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-17.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-18.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-19.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-20.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-21.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-22.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-23.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-24.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-25.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-26.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-27.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-28.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-29.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-30.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-31.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-32.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-33.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-34.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-35.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-36.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-37.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-38.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-39.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-40.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-41.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-42.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-43.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-44.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-45.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-46.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-47.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-48.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-49.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-50.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-51.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-52.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-53.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-54.jpg",
                   "https://img.sachvui.com/images/2018/27/chap-1-55.jpg"
                ]
            },

            {
                chapterNum: 2,
                chapter: "Konohamaru!!",
                link: [
                    "https://img.sachvui.com/images/2018/27/chap-2-1.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-2.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-3.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-4.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-5.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-6.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-7.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-8.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-9.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-10.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-11.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-12.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-13.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-14.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-15.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-16.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-17.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-18.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-19.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-20.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-21.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-2-22.jpg"
                ]
            },

            {
                chapterNum: 3,
                chapter: "Sasuke Uchiha!!",
                link: [
                    "https://img.sachvui.com/images/2018/27/chap-3-1.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-2.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-3.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-4.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-5.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-6.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-7.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-8.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-9.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-10.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-11.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-12.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-13.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-14.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-15.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-16.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-17.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-18.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-19.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-20.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-21.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-22.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-3-23.jpg"
                ]
            },

            {
                chapterNum: 4,
                chapter: "Kakashi Hatake!!",
                link: [
                    "https://img.sachvui.com/images/2018/27/chap-4-1.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-2.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-3.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-4.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-5.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-6.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-7.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-8.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-9.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-10.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-11.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-12.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-13.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-14.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-15.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-16.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-17.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-18.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-4-19.jpg"
                ]
            },

            {
                chapterNum: 5,
                chapter: "Unpreparedness is One's Greatest Enemy!!",
                link: [
                    "https://img.sachvui.com/images/2018/27/chap-5-1.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-2.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-3.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-4.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-5.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-6.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-7.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-8.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-9.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-10.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-11.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-12.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-13.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-14.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-15.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-16.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-17.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-18.jpg",
                    "https://img.sachvui.com/images/2018/27/chap-5-19.jpg"
                ]
            }
        ]
    },

    // Bleach
    {
        view: 0,
        comicName: "Bleach",
        kind: ["Action", "Adventure", "Comedy", "Fantasy", "Shounen", "Supernatural"],
        author: "Kubo Tite",
        artist: "Kubo Tite",
        company: "Shounen Jump",
        status: false,
        description: "Bleach là một chuỗi hành trình về Ichigo Kurosaki, cậu là một học sinh cấp ba với khả năng nhìn thấy linh hồn và một shinigami (thần chết) tên là Rukia Kuchiki, tình cờ gặp Ichigo khi đang săn lùng một linh hồn xấu được gọi là hollow (ác ma). Rukia bị thương trong cuộc chiến với linh hồn đó và bất đắc dĩ phải cho Ichigo năng lượng của mình. Thế là cuộc hành trình của Ichigo và Rukia bắt đầu từ đây. \n Họ đã cùng nhau tiêu diệt nhiều ác ma và thực hiện nhiều cuộc an táng cho nhiều linh hồn bướng bỉnh, giải trừ linh hồn họ và đem họ đến một nơi gọi là Soul Society (Cõi Âm). Phần đầu chủ yếu tập trung vào hai nhân vật chính và về quá khứ của họ hơn là nhiệm vụ của một thần chết. Khi mà các sự kiện ngày càng tiến xa, câu chuyện càng tiến sâu thêm vào thế giới của thần chết ở Cõi Âm. \n Chigo Kurosaki là một thiếu niên hung hăng, hay gây rắc rối và cậu có được một năng lực đặc bệt là có thể nhìn thấy linh hồn. Câu chuyện bắt đầu với sự xuất hiện bất ngờ của một người lạ ngay trong phòng ngủ của Ichigo. Người lạ mặt này chính là Shinigami (thần chết) Rukia Kuchiki, vô cùng ngạc nhiên trước việc Ichigo có thể nhìn thấy cô. Cuộc hội thoại của họ bị cắt ngang bằng việc một ác ma tấn công vào nhà của Ichigo. Sau khi bị thương tích đầy mình vì phải ra tay bảo vệ Ichigo, cô quyết định truyền một nửa năng lực thần chết của mình cho Ichigo để Ichigo tiêu diệt ác ma đó nhưng Ichigo lại vô tình lấy hết năng lượng của cô, giúp cậu tiêu diệt ác ma đó một cách dễ dàng.",
        avatar: "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
        data: [
            {
                chapterNum: 1,
                chapter: "Death & Strawberry",
                link: [
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-1.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-2.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-3.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-4.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-5.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-6.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-7.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-8.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-9.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-10.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-11.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-12.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-13.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-14.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-15.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-16.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-17.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-18.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-19.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-20.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-21.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-22.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-23.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-24.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-25.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-26.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-27.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-28.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-29.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-30.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-31.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-32.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-33.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-34.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-35.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-36.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-37.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-38.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-39.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-40.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-41.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-42.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-43.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-44.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-45.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-46.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-47.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-48.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-49.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-50.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-51.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-52.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-53.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-54.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-1-55.jpg"
                ]
            },

            {
                chapterNum: 2,
                chapter: "Starter",
                link: [
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-1.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-2.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-3.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-4.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-5.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-6.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-7.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-8.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-9.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-10.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-11.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-12.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-13.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-14.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-15.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-16.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-17.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-18.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-19.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-20.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-21.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-22.jpg",
                    "https://img3.sachvui.com/images/2018/bleach/chap-2-23.jpg"
                ]
            }
        ]
    },

    // New Avengers
    {
        view: 30,
        comicName: "The_New_Avengers_(2015)",
        kind: ["Action", "Adult", "Adventure", "Comic"],
        author: "Brian Michael Bendis, David Finch",
        artist: "Brian Michael Bendis, David Finch",
        company: "Marvel",
        status: false,
        description: "Mọi thứ đều thật MỚI MẺ. Sau loạt sự kiện Secret Wars, trật tự cũ đã thay đổi - và Bobby DaCoasta, Sunspot, là người đã thay đổi nó. Xin chào mừng các bạn đến với AVENGERS IDEA MECHANICS, biệt đổi siêu anh hùng cứu trợ toàn cầu ngày mai… của hôm nay! Mỹ không muốn họ! S.H.I.E.L.D. không biết phải làm gì với họ! Nhưng Trái Đất không thể tồn tại mà thiếu vắng New Avengers được!",
        avatar: "https://comic.8ternal.com.vn/upload/serie_img/44/New_20Avenger_20001_20_1_.jpg",
        data: [
            {
                chapterNum: 1,
                chapter: "Chapter 1",
                link: [
                    "https://i.imgur.com/J4ojQ0j.jpg",
                    "https://i.imgur.com/I3DXd6n.jpg",
                    "https://i.imgur.com/InMD7lb.jpg",
                    "https://i.imgur.com/GbNY2JZ.jpg",
                    "https://i.imgur.com/cGymIGK.jpg",
                    "https://i.imgur.com/RDCcZa4.jpg",
                    "https://i.imgur.com/02iGzC0.jpg",
                    "https://i.imgur.com/fwKrB6w.jpg",
                    "https://i.imgur.com/lUzgDvZ.jpg",
                    "https://i.imgur.com/MNq1eiS.jpg",
                    "https://i.imgur.com/8ECYTM2.jpg",
                    "https://i.imgur.com/UWzB1yO.jpg",
                    "https://i.imgur.com/hq82O5N.jpg",
                    "https://i.imgur.com/THYWzMG.jpg",
                    "https://i.imgur.com/f9NFrxY.jpg",
                    "https://i.imgur.com/BhVWSBN.jpg",
                    "https://i.imgur.com/I4FKLBJ.jpg",
                    "https://i.imgur.com/MonF5DF.jpg",
                    "https://i.imgur.com/InoAur5.jpg"
                ]
            },
        ]
    }



    // { view: 0, comicName: "Avenger3", author: "Stan Lee", artist: " ", company: "Marvel", status: false, description: "Đầu truyện về cuộc đối đầu hung hiểm bậc nhất lịch sử Marvel trong 5 năm trở lại đây giữa các thế lực đa vũ trụ với nhiều tầng lớp kế hoạch hung hiểm nhằm xóa sổ Trái Đất lẫn vũ trụ với sự tham gia của: Thanos và Hội đồng Hắc Ám(Black Order), chủng tộc Kiến Thiết(Builders), Hội Khai Sáng(llluminati), Biệt đội Báo Thù( Avengers) và những thế lực khác", avatar: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6250/6250129_sa.jpg", __v:0 }
  ];
  dbo.collection("comics").insertMany(myComics, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});