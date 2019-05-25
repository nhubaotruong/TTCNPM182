import React, { Component } from "react";
import axios from 'axios';
export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",
      username: "",
      comment: {
        name: "",
        message: "",
        time: "",
        reply:[]
      },
      reply_:{
        name:"",
        message: "",
        time:"",
        replyto: ""
      }
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount(){
    if(JSON.parse(localStorage.getItem("User")) != null){
      this.setState({username: JSON.parse(localStorage.getItem("User")).username})
    }
    this.setState({reply_:{replyto: this.props.replyTo}})
  }
  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = event => {
    const { value, name } = event.target;
    var date = new Date();
    var dates = date.toLocaleTimeString() + ' ' + date.toLocaleDateString();
    if(this.props.type_ ==="Comment"){
      console.log("comment")
      if(this.state.username != ""){
        this.setState({
          ...this.state,
          comment: {
            ...this.state.comment,
            [name]: value,
            time: dates,
            reply:[],
            name: this.state.username
          }
        });}
      else{
        this.setState({
          ...this.state,
          comment: {
            ...this.state.comment,
            [name]: value,
            time: dates,
            reply:[]
          }
        });
      }
    }
    if(this.props.type_ === "Reply"){
      console.log("reply")
      if(this.state.username != ""){
        this.setState({
          ...this.state,
          reply_: {
            ...this.state.reply_,
            [name]: value,
            time: dates,
            name: this.state.username
          }
        });
      }else{
        this.setState({
          ...this.state,
          reply_: {
            ...this.state.reply_,
            [name]: value,
            time: dates,
          }
        });
      }
    }
    // if(localStorage.length){
    //   this.setState({comment:{
    //     message: "@" + localStorage.getItem("key") + "|     "+ this.state.comment.message,
    //     reply:localStorage.getItem("key")
    //   }});
    //   localStorage.clear()
    // }
  };
  /**
   * Form submit handler
   */
  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();
    // localStorage.clear();
    if (!this.isFormValid()) {
      this.setState({ error: "Cần điền hết tất cả các mục"});
      return;
    }

    // loading status and clear error
    this.setState({ error: "", loading: true });
    //dành cho comment
    if (this.props.type_ === "Comment") {
      let { comment } = this.state;
      console.log(comment.message[0])
      axios
        .post('/binhluan/1', {
          name: this.state.comment.name,
          message: this.state.comment.message,
          time: this.state.comment.time,
          reply: this.state.reply
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
              comment: { message: "", time: "", name: "" }
            });
            axios
            .post('/comics/addcomment_comic',{
              comment: res.data._id,
              comicname: this.props.comicName
            })
            .then(res =>{
              console.log("Completed!")
            })
            .catch(err =>{
              console.log(err)
            })
          }
        })
        .catch(err => {
          this.props.addComment(comment);
          this.setState({
            error: "Xảy ra lỗi trong quá trình xử lí dữ liệu!",
            loading: false,
            comment: { message: "", time: "", name: "" }
          });
        })
    }
    //dành cho reply
    if(this.props.type_ === "Reply"){
      let { reply_ } = this.state;
      this.props.addComment(reply_)
      this.setState({
        loading: false,
        reply_: { message: "", time: "", name: "" }
      });
    }
  }
  /**
   * Simple validation
   */
  isFormValid() {
    console.log(this.state.comment.name)
    console.log(this.state.comment.message)
    if(this.props.type_ === "Reply"){
      return (this.state.reply_.name !== "" && this.state.reply_.message !== "");
    }
    return (this.state.comment.name !== "" && this.state.comment.message !== "");
  }

  // renderError() {
  //   return this.state.error ? (
  //     <div className="alert alert-danger">{this.state.error}</div>
  //   ) : null;
  // }

  renderError() {
    return this.state.error ? (
      <div className="alert-warn">
        <h6>{this.state.error}</h6>
      </div>
    ) : null;
  }

  render() {
    // if (this.state.rep === false) {
      return (
        <React.Fragment>
          <form method="post" onSubmit={this.onSubmit} style = {{backgroundColor: "#e1f5fe",border: "2px solid #d4e157",width: "auto", height: "100%",borderRadius: "5px"}}>
            {this.state.username == "" ?
            <div className="input-field">
            <i class="material-icons prefix">account_circle</i>
              <input
                onChange={this.handleFieldChange}
                value={this.props.type_ === "Comment"? this.state.comment.name : this.state.reply_.name}
                className="validate"
                placeholder="😎 Tên bạn"
                name="name"
                type="text"
              />
            </div>
            : ""}
            <div className="input-field">
            <i className="material-icons prefix">mode_edit</i>
              <textarea className="materialize-textarea"
                onChange={this.handleFieldChange}
                value={this.props.type_ === "Comment"? this.state.comment.message : this.state.reply_.message}
                placeholder="🤬 Lời bình luận"
                name="message"
                rows="5"
              ></textarea>
            </div>
            {this.props.replyTo ? (<p className="blue-text">Bạn sẽ trả lời cho @{this.props.replyTo}</p>) : ""}
            {this.renderError()}

            <div className="input-field">
              {/* <button disabled={this.state.loading} className="btn btn-primary">
                Comment &#10148;
              </button> */}
              <button disabled={this.state.loading} className="btn waves-effect waves-light blue" type="submit" name="action">{this.props.type_}&#10148;
              </button>
            </div>
          </form>
        </React.Fragment>
      );
  }
}

// <React.Fragment>
        //   <form method="post" onSubmit={this.onSubmit}>
        //     <div className="form-group">
        //       <input
        //         onChange={this.handleFieldChange}
        //         value={this.state.comment.name}
        //         className="form-control"
        //         placeholder="😎 Tên bạn"
        //         name="name"
        //         type="text"
        //       />
        //     </div>

        //     <div className="form-group">
        //       <textarea
        //         onChange={this.handleFieldChange}
        //         value={this.state.comment.message}
        //         className="form-control"
        //         placeholder="🤬 Lời bình luận"
        //         name="message"
        //         rows="5"
        //       />
        //     </div>

        //     {this.renderError()}

        //     <div className="form-group">
        //       <button disabled={this.state.loading} className="btn btn-primary">
        //         Comment &#10148;
        //       </button>
        //     </div>
        //   </form>
        // </React.Fragment>