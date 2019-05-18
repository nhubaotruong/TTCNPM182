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

export const deleteComic = comicName => {
    return axios
    .post("/deleteComic",{
        comicName : comicName
    })
    .then(res=>{
        console.log("Delete Successful!!");
    })
}