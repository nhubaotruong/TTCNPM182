var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ttcnpm2019");
  var myComics = [
    { view: 0, comicName: "Conan", author: "Gosho Aoyama", artist: " ", company: "TSM Entertainment",
      status: false, description: "Là một bộ truyện tranh Nhật Bản (manga) thuộc loại trinh thám được    vẽ và minh họa bởi Aoyama Gosho. Bộ truyện này ban đầu là những chương truyện nhỏ được đăng trên    tuần báo Shōnen Sunday của Shogakukan từ 19 tháng 1 năm 1994 sau đó được đóng thành các tập tankōbon. Tại Việt Nam bộ truyện được Nhà xuất bản Kim Đồng ấn hành dưới tựa Thám tử lừng danh   Conan [1] Tác phẩm xoay quanh câu chuyện về chàng thám tử học sinh Kudo Shinichi trong một lần đang điều tra bị thành viên Tổ chức Áo Đen bắt uống thuốc độc khiến cơ thể teo nhỏ và trở thành  Edogawa Conan", avatar: "https://zingtv-photo.zadn.vn/tv_program_275_275/d/7/d7b1bc44afe616068b000e4393ff56c9_1486354674.jpg", __v: 0 },
    { view: 0, comicName: "OnePiece", author: "Oda Eiichiro", artist: " ", company: "Weekly Shōnen Jump", status: false, description: "One Piece nói về cuộc hành trình của Monkey D. Luffy - thuyền trưởng của băng hải tặc Mũ Rơm và các đồng đội của cậu. Luffy tìm kiếm vùng biển bí ẩn nơi cất giữ kho báu lớn nhất thế giới One Piece, với mục đích trở thành Tân Vua Hải Tặc", avatar: "https://i.pinimg.com/originals/ef/7e/4b/ef7e4b8f5f04e78317f92aede1fe8280.jpg", __v:0 },
    { view: 0, comicName: "Doraemon", author: "Fujiko Fujio", artist: " ", company: "Shogakukan", status: false, description: "Doraemon (Đôrêmon) là một chú mèo máy được Sewashi (Nôbitô), cháu ba đời của Nobita gửi về quá khứ cho ông mình để giúp đỡ Nobita tiến bộ, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này. Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó là thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần", avatar: "https://image.winudf.com/v2/image/Y29tLm5vc2tpbGwuRG9yZW1vbldhbGxwYXBlcl9zY3JlZW5fMF8xNTIyNDIzOTE4XzA0Mg/screen-0.jpg?h=800&fakeurl=1", __v:0 },
    { view: 0, comicName: "Avenger3", author: "Stan Lee", artist: " ", company: "Marvel", status: false, description: "Đầu truyện về cuộc đối đầu hung hiểm bậc nhất lịch sử Marvel trong 5 năm trở lại đây giữa các thế lực đa vũ trụ với nhiều tầng lớp kế hoạch hung hiểm nhằm xóa sổ Trái Đất lẫn vũ trụ với sự tham gia của: Thanos và Hội đồng Hắc Ám(Black Order), chủng tộc Kiến Thiết(Builders), Hội Khai Sáng(llluminati), Biệt đội Báo Thù( Avengers) và những thế lực khác", avatar: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6250/6250129_sa.jpg", __v:0 }
  ];
  dbo.collection("comics").insertMany(myComics, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});