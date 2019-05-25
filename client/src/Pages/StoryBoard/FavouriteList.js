import React, { Component } from 'react';
import axios from 'axios';


export default class FavouriteList extends Component {
  constructor(props) {
        super(props);
        this.handleClick_delete_Favourite = this.handleClick_delete_Favourite.bind(this);
      }

  handleClick_delete_Favourite(e) {
    e.preventDefault()
    axios
      .post('/comics/deleteFavourite', {id : this.props.comicID,username : this.props.username})
      .then(res => {
        if (res.data === false){
            alert("Đã có lỗi xảy ra!!!")
        }})
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    var url = "/detail" + "?" + "c=" + this.props.comicName;
	return (
		<div >
    <div class="col m3 s12" >
      <div class="card hoverable">
        <div class="card-image">
          <img src={this.props.comicPic}/>
          <button class="btn-floating halfway-fab waves-effect waves-light red " onClick={this.handleClick_delete_Favourite}>
            <i class=" center material-icons">close</i>
          </button>
        </div>
        <div class="card-content">
          <span class="card-title black-text text-darken-2 b">{this.props.comicName}</span>
          
        </div>
        <div className="card-action">
          <a href={url}>Read more ...</a>
        </div>
      </div>
    </div>
  </div>
	);
  }
}


