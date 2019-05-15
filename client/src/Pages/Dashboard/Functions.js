import axios from "axios";

export const addComic = newComic => {
    return axios
    .post("/adComic",{
        comicName : newComic.comicName,
        author : newComic.author
    })
    .then(res=>{
        console.log("Add Successful!!");
    })
}