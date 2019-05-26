import React, { Component } from 'react';
import axios from 'axios';


export default class FavouriteList extends Component {
  constructor(props) {
        super(props);
        this.handleClick_deleteFavourite = this.handleClick_deleteFavourite.bind(this);
      }

  handleClick_deleteFavourite (e) {
    e.preventDefault()
    axios
      .post('/comics/deleteFavouriteList', {id : this.props.comicID,username : this.props.username})
      .then(r => {this.props.functionChange()})
      .catch(err => {
        console.error(err)
      })

  }

  render() {
    var url = "/detail" + "?" + "c=" + this.props.comicName;
  return (
    <div >
    <div className="col m3 s12" >
      <div className="card hoverable">
        <div className="card-image">
        <a href={url}><img src={this.props.comicPic} alt="tt" width="200px" height="350px"/></a>
          <button className="btn-floating halfway-fab waves-effect waves-light red " onClick={e => this.handleClick_deleteFavourite(e)}>
            <i className="material-icons">close</i>
          </button>
        </div>
        <div className="card-content" style={{padding:'15px'}}>
            <p>{this.props.comicName}</p>
        </div>
        <div className="card-action">
            <b><a href={url} className="cyan-text text-darken-4" >Đọc thêm ...</a></b>
          </div>
      </div>
    </div>
  </div>
  );
  }
}


