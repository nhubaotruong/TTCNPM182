import axios from "axios";

export const addComic = newComic => {
    return axios
    .post("/adComic",{
        comicName : newComic.comicName,
        author : newComic.author,
        artist: newComic.artist,
        company: newComic.company,
        description: newComic.description,
        avatar: newComic.avatar,
        kind: newComic.kind
    })
    .then(res=>{
        if(res.data == "Error"){
            alert("Truyện thêm vào bị trùng tên truyện hoặc lỗi!")
        }else{
            console.log("Add Successful!!");
            alert("Thêm truyện thành công!")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

export const deleteComic = comicName => {
    return axios
    .post("/deleteComic",{
        comicName : comicName
    })
    .then(res=>{
        console.log("Delete Successful!!");
    })
}