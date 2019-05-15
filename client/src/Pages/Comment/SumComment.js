import React, { Component } from "react";
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
        this.setState({ loading: false });
      })
  }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  render() {
    return (
      <div className="App container bg-light shadow m 2">
        <div className="column border border-dark ">
          <div className="col-12  pt-3">
            <h3 className = "text-primary">NHẬN XÉT VÀ BÌNH LUẬN:</h3>
            <CommentForm addComment={this.addComment} />
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
