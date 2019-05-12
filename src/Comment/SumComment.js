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
      loading: false
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
          this.setState({comments:res.data,loading:false});
        }
      )
      .catch(err => {
        console.log('error is ',err);
        alert(err);
        this.setState({ loading: false });
      })
  }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    console.log(comment)
    console.log(this.state.comments)
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  render() {
    return (
      <div className="App container bg-light shadow m 2">
        <div className="column" style={{border:"0.5px solid black",padding: "1%"}}>
          <div className="col-12  pt-3">
            <h3 className = "blue-text" style={{fontWeight: "bold"}}>NHẬN XÉT VÀ BÌNH LUẬN:</h3>
            <CommentForm addComment={this.addComment} type_ = "Comment"/>
          </div>
          <div className="col-12  pt-3 bg-white">
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SumComment;
