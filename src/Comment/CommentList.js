import React from "react";
import Comment from "./Comment";
import "./style.css";
export default function CommentList(props) {
  return (
    <div className="commentList" key = {props.comments}>
      <h5 className="text-muted mb-4 " style ={{fontWeight: "bold"}}>
      <span className="badge light-blue lighten-3 left red-text" style ={{fontWeight: "bold"}}>{props.comments.length}</span>{"  "}
        Danh sách các bình luận trước:
      </h5>

      {props.comments.length === 0 && !props.loading ? (
        // <div className="alert text-center alert-info">
        //   Hãy là người bình luận đầu tiên!
        // </div>
        // <div class="card-panel  light-blue center">Hãy là người bình luận đầu tiên!</div>
        <div className="alert">
          <h6 className = "center">Hãy là người bình luận đầu tiên!</h6>
        </div>
      ) : null}

      {props.comments.map((comment, index) => (
        <Comment name = {comment.name} message = {comment.message} time = {comment.time} index_ = {index} rep = {comment.reply} id_c = {comment._id} key={index}/>
      ))}
    </div>
  );
}
