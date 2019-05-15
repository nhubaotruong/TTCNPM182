import React from "react";
import Comment from "./Comment";
export default function CommentList(props) {
  return (
    <div className="commentList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{props.comments.length}</span>{" "}
        Danh sách các bình luận trước:
      </h5>

      {props.comments.length === 0 && !props.loading ? (
        <div className="alert text-center alert-info">
          Hãy là người bình luận đầu tiên!
        </div>
      ) : null}

      {props.comments.map((comment, index) => (
        <Comment name = {comment.name} message = {comment.message} time = {comment.time} index_ = {index}/>
      ))}
    </div>
  );
}
