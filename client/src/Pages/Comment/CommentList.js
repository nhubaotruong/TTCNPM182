import React from "react";
import Comment from "./Comment";
import "./style.css";

export default function CommentList(props) {

  return (
    <div className="commentList" key = {props.comments}>
      <div className="valign-wrapper">
        <h5 className="text-muted mb-4 " style ={{fontWeight: "bold"}}>
          <span className="badge light-blue lighten-3 left red-text" style ={{fontWeight: "bold"}}>{props.comments.length}</span>
        </h5>
        &nbsp;&nbsp;
      <h5>
        Danh sách các bình luận trước:
      </h5>
      </div>

      {props.comments.length === 0 && !props.loading ? (
        // <div className="alert text-center alert-info">
        //   Hãy là người bình luận đầu tiên!
        // </div>
        // <div class="card-panel  light-blue center">Hãy là người bình luận đầu tiên!</div>
        <div className="alert grey lighten-3">
          <h6 className = "center">Hãy là người bình luận đầu tiên!</h6>
        </div>
      ) : null}

      {props.comments.map((comment, index) => (
        (props.soluong > index) ?
        <Comment name = {comment.name} message = {comment.message} time = {comment.time} index_ = {index+1} rep = {comment.reply} id_c = {comment._id} key={index}/> : ""
      ))}
    </div>
  );
}
