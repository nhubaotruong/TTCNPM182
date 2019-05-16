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
        console.log("Add Successful!!");
    })
}