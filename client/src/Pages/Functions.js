import axios from "axios";

export const sendComic = (comic) => {
    return axios
    .post("/sendComic",{
        comicName : comic
    })
    .then(res=>{
        var data = res.data;
        console.log(data);
    })
}