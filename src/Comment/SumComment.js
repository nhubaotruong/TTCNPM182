import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import axios from 'axios';

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class SumComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false,
      dem_comment: 3,
      trangthai_comment: ""
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    axios
      .get('/binhluan/2')
      .then(res => {
          console.log('res is ',res.data);
          if (res.data.length === 0) {
            this.setState({ trangthai_comment: "", dem_comment: 0 });
          }
          if (res.data.length <= 3) {
            this.setState({ trangthai_comment: "", dem_comment: 3 });
          } else {
            this.setState({ trangthai_comment: "Hiển thị thêm bình luận..." })
          }
          this.setState({comments:res.data,loading:false});
        }
      )
      .catch(err => {
        console.log('error is ',err);
        alert(err);
        this.setState({ loading: false });
      })
  }

  ChangeComment() {
    var t = this.state.dem_comment + 3;
    var a = this.state.comments.length;
    if (t < a) {
      this.setState({ trangthai_comment: "Hiển thị thêm bình luận...", dem_comment: t })
    } else {
      if (t === a) {
        this.setState({ trangthai_comment: "Thu gọn lại...", dem_comment: t })
      } else {
        if (t - 3 < a && t > a) {
          this.setState({ trangthai_comment: "Thu gọn lại...", dem_comment: t })
        } else {
          t = 3;
          this.setState({ trangthai_comment: "Hiển thị thêm bình luận...", dem_comment: t })
        }
      }
    }
  }
  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    console.log(comment)
    console.log(this.state.comments.length)
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
    if (this.state.comments.length <= 3) {
      this.setState({ trangthai_comment: "", dem_comment: 3 });
    } else {
      if(this.state.comments.length === this.state.dem_comment){
        this.setState({ trangthai_comment: "Thu gọn lại..." })
      }else{
        this.setState({ trangthai_comment: "Hiển thị thêm bình luận..." })
      }
    }
  }

  render() {
    return (
      <div className="App container bg-light shadow m 2">
        <div className="column" style={{border:"0.5px solid black",padding: "1%", paddingBottom: "2%"}}>
          <div className="col-12  pt-3">
            <h3 className = "blue-text" style={{fontWeight: "bold"}}>NHẬN XÉT VÀ BÌNH LUẬN:</h3>
            <CommentForm addComment={this.addComment} type_ = "Comment"/>
          </div>
          <div className="col-12  pt-3 bg-white">
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
              soluong = {this.state.dem_comment}
            />
            <button className="right blue-text" style={{
              backgroundColor: "transparent",
              backgroundRepeat: "no-repeat",
              border: "none",
              cursor: "pointer",
              overflow: "hidden",
              outline: "none"
            }} onClick={this.ChangeComment.bind(this)}>{this.state.trangthai_comment}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SumComment;
