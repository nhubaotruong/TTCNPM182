import React, { Component } from "react";
import axios from 'axios';
export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rep: false,
      loading: false,
      error: "",

      comment: {
        name: "",
        message: "",
        time: ""
      }
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = event => {
    const { value, name } = event.target;
    var date = new Date();
    var dates = date.toLocaleTimeString() + ' ' + date.toLocaleDateString();
    this.setState({
      ...this.state,
      rep: false,
      comment: {
        ...this.state.comment,
        [name]: value,
        time: dates
      }
    });
    if(localStorage.length){
      this.setState({comment:{
        message: "@" + localStorage.getItem("key") + "|   "+ this.state.comment.message
      }});
      localStorage.clear()
    }
  };
  /**
   * Form submit handler
   */
  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();
    localStorage.clear();
    if (!this.isFormValid()) {
      this.setState({ error: "Cần điền hết tất cả các mục" });
      return;
    }

    // loading status and clear error
    this.setState({ error: "", loading: true });
    let { comment } = this.state;
    axios
      .post('/binhluan/1', {
        name: this.state.comment.name,
        message: this.state.comment.message,
        time: this.state.comment.time
      })
      .then(res => {
        if (res.error) {
          this.setState({ loading: false, error: res.error });
        } else {
          console.log('Completed comment!')
          this.props.addComment(comment);
          //reset lại trạng thái cho hộp comment
          this.setState({
            loading: false,
            rep: false,
            comment: { message: "", time: "", name: "" }
          });
        }
      })
      .catch(err => {
        this.setState({
          error: "Xảy ra lỗi trong quá trình xử lí dữ liệu!",
          rep: false,
          loading: false
        });
      })
  }
  /**
   * Simple validation
   */
  isFormValid() {
    return this.state.comment.name !== "" && this.state.comment.message !== "";
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    // if (this.state.rep === false) {
      return (
        <React.Fragment>
          <form method="post" onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                onChange={this.handleFieldChange}
                value={this.state.comment.name}
                className="form-control"
                placeholder="😎 Tên bạn"
                name="name"
                type="text"
              />
            </div>

            <div className="form-group">
              <textarea
                onChange={this.handleFieldChange}
                value={this.state.comment.message}
                className="form-control"
                placeholder="🤬 Lời bình luận"
                name="message"
                rows="5"
              />
            </div>

            {this.renderError()}

            <div className="form-group">
              <button disabled={this.state.loading} className="btn btn-primary">
                Comment &#10148;
              </button>
            </div>
          </form>
        </React.Fragment>
      );
  }
}
