import logo from "../user.png";
import React, { Component } from "react";
import "./style.css";
export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Reply_(){
    localStorage.setItem("key", this.props.name);
    alert("Bạn sẽ trả lời cho " + this.props.name);
    var y = this.props.index_*200;
    window.scrollBy(0, -y);
  }
  render(){
    return (
          <div className="media mb-3">
            <img
              className="mr-3 bg-light rounded"
              width="48"
              height="48"
              src={logo}
              alt={this.props.name}
            />
            <div className="media-body p-2 shadow-sm rounded bg-light border">
              <small className="float-right text-muted">{this.props.time} + {this.props.index_} </small>
              <h5 className="mt-0 mb-1 text-muted"> <p className = "font-weight-bold">{this.props.name}</p></h5>
              <div className="text-justify c">{this.props.message}</div>
              <button className="btn btn-link" onClick= {this.Reply_.bind(this)}>Reply</button>
            </div>
          </div>
        );
  }
}