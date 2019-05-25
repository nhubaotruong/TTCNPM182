import logo from "./user.png";
import React, { Component } from "react";
import "./style.css";
import CommentForm from "./CommentForm";
import axios from "axios";
export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replys: [],
      rep_1: false,
      rep_2: -1,
      dem_reply: 2,
      trangthai_reply: ""
    };

    this.addReply = this.addReply.bind(this);
  }

  componentDidMount() {
    this.setState({ replys: this.props.rep });
    if (this.props.rep.length === 0) {
      this.setState({ trangthai_reply: "", dem: 0 });
    }
    if (this.props.rep.length <= 2) {
      this.setState({ trangthai_reply: "", dem: 2 });
    } else {
      this.setState({ trangthai_reply: "Hiển thị thêm..." })
    }
    console.log(this.props.rep.length)
  }
  Cancel() {
    this.setState({ rep_1: false })
    this.setState({ rep_2: -1 })
  }
  Reply_1() {
    // localStorage.setItem("key", this.props.name);
    // alert("Bạn sẽ trả lời cho " + this.props.name);
    // var y = this.props.index_*200;
    // window.scrollBy(0, -y);
    this.setState({ rep_1: true })
  }

  ChangeReply() {
    var t = this.state.dem_reply + 2;
    var a = this.state.replys.length;
    if (t < a) {
      this.setState({ trangthai_reply: "Hiển thị thêm...", dem_reply: t })
    } else {
      if (t === a) {
        this.setState({ trangthai_reply: "Thu gọn lại...", dem_reply: t })
      } else {
        if (t - 2 < a && t > a) {
          this.setState({ trangthai_reply: "Thu gọn lại...", dem_reply: t })
        } else {
          t = 1;
          this.setState({ trangthai_reply: "Hiển thị thêm...", dem_reply: t })
        }
      }
    }
  }

  Reply_2(index) {
    this.setState({ rep_2: index });
  }

  addReply(reply) {
    console.log(reply)
    
    this.setState({
      replys: [...this.state.replys, reply],
      rep_1: false,
      rep_2: -1
    });

    if (this.state.replys.length + 1 <= 2) {
      this.setState({ trangthai_reply: "", dem_reply: 2 });
    } else {
      if(this.state.replys.length + 1 === this.state.dem_reply){
        this.setState({ trangthai_reply: "Thu gọn lại..." })
      }else{
        this.setState({ trangthai_reply: "Hiển thị thêm..." })
      }
    }

    //Cập nhật reply cho comment ở db:
    axios
      .post('/binhluan/3', {
        id_comment: this.props.id_c,
        name: reply.name,
        message: reply.message,
        time: reply.time,
        replyto: reply.replyto
      })
      .then(res => {
        console.log("Replied!");
      })
      .catch(err => {
        alert("Có lỗi xảy ra: " + err)
      })
    //Cập nhật reply cho comment ở db!
  }

  returnReply() {
    return this.state.replys.map((reply, index) => {
      if (this.state.dem_reply > index) {
        return <ul className="collection " style={{ marginLeft: "4%" }}>
          <li className="collection-item avatar grey lighten-3">
            <img
              className="mr-3 bg-light circle"
              width="48"
              height="48"
              src={logo}
              alt={this.props.name}
              style={{ marginRight: "10px" }} />
            <span className="title"><h5 className="mt-0 mb-1 text-muted"> <p style={{ fontWeight: "bold" }}>{reply.name}</p></h5></span>
            <div className="c" style={{ textAlign: "justify", textJustify: "inter-word", marginLeft: "1%" }}><span className="blue-text">@{reply.replyto} </span> {reply.message}</div>
            <button className="waves-effect blue btn" style={{ marginTop: "10px", marginLeft: "1%" }} onClick={this.Reply_2.bind(this, index)}>Reply</button>
            <small className="secondary-content text-muted">{reply.time} + {index+1} </small>
            {this.state.rep_2 === index ? <button className="waves-effect blue btn" style={{ marginTop: "10px", marginLeft: "1%" }} onClick={this.Cancel.bind(this)}>Huỷ</button> : ""}
          </li>
          <div>
            {(this.state.rep_2 === index) ? (<div>
              <CommentForm addComment={this.addReply} type_="Reply" replyTo={reply.name} />
            </div>
            ) :
              ''}
          </div>
        </ul>
      }
    }
    );
  }
  render() {
    return (
      <div>
        <ul className="collection ">
          <li className="collection-item avatar grey lighten-3">
            <img
              className="mr-3 bg-light circle"
              width="48"
              height="48"
              src={logo}
              alt={this.props.name}
              style={{ marginRight: "10px" }} />
            <span className="title"><h5 className="mt-0 mb-1 text-muted"> <p style={{ fontWeight: "bold" }}>{this.props.name}</p></h5></span>
            <div className="c" style={{ textAlign: "justify", textJustify: "inter-word", marginLeft: "1%" }}>{this.props.message}</div>
            <button className="waves-effect blue btn" style={{ marginTop: "10px", marginLeft: "1%" }} onClick={this.Reply_1.bind(this)}>Reply</button>
            <small className="secondary-content text-muted">{this.props.time} + {this.props.index_} </small>
            {this.state.rep_1 ? <button className="waves-effect blue btn" style={{ marginTop: "10px", marginLeft: "1%" }} onClick={this.Cancel.bind(this)}>Huỷ</button> : ""}
          </li>
          {/* Form reply */}
          <div>
            {this.state.rep_1 ? (<div style={{ marginLeft: "4%", paddingRight: "4%" }}>
              <CommentForm addComment={this.addReply} type_="Reply" replyTo={this.props.name} />
            </div>
            ) :
              ''}
          </div>
          {/* Form reply */}
          
          {/* Reply */}
          <div>
            {this.returnReply()}
            <button className="right blue-text" style={{
              backgroundColor: "transparent",
              backgroundRepeat: "no-repeat",
              border: "none",
              cursor: "pointer",
              overflow: "hidden",
              outline: "none"
            }} onClick={this.ChangeReply.bind(this)}>{this.state.trangthai_reply}</button>
          </div>
          {/*Reply*/}
        </ul>
      </div >
    );
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //         <div>
  //   <div className="card horizontal">
  //     <div className="card-image" style={{maxWidth: "65px", paddingLeft:"5px", paddingTop:"4px"}}>
  //     <img
  //             className="mr-3 bg-light circle"
  //             width="48"
  //             height="48"
  //             src={logo}
  //             alt={this.props.name}
  //           />
  //     </div>
  //     <div className="card-panel grey lighten-2">
  //       {/* <div className="card-content grey lighten-2"> */}
  //       <small className="secondary-content text-muted">{this.props.time} + {this.props.index_} </small>
  //             <h5 className="mt-0 mb-1 text-muted"> <p style = {{fontWeight: "bold"}}>{this.props.name}</p></h5>
  //       <div className="c" style = {{textAlign: "justify",textJustify: "inter-word"}}>{this.props.message}</div>
  //       <button className="waves-effect blue btn" style = {{marginTop: "10px"}} onClick= {this.Reply_.bind(this)}>Reply</button>
  //       {/* </div> */}
  //     </div>
  //   </div>
  // </div>

  // <div className="media mb-3">
          //   <img
          //     className="mr-3 bg-light circle"
          //     width="48"
          //     height="48"
          //     src={logo}
          //     alt={this.props.name}
          //   />
          //   <div className="media-body p-2 shadow-sm rounded bg-light border">
          //     <small className="float-right text-muted">{this.props.time} + {this.props.index_} </small>
          //     <h5 className="mt-0 mb-1 text-muted"> <p className = "font-weight-bold">{this.props.name}</p></h5>
          //     <div className="text-justify c">{this.props.message}</div>
          //     <button className="waves-effect blue btn" onClick= {this.Reply_.bind(this)}>Reply</button>
          //   </div>
          // </div>