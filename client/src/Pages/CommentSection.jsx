import React from "react";
import "./index.css";
import SumComment from "./Comment/SumComment";
import ReactStars from "./Rating/Rating";

const commentsection = () => {
return (
<div>
    <div className="App container bg-light shadow m 2">
        <h4><clan className="text-primary">Đánh giá:</clan> <ReactStars /></h4>
    </div>
    <SumComment />
</div>
);
}

export default commentsection;