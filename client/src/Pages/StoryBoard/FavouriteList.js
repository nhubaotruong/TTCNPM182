import React, { Component } from 'react';
<<<<<<< HEAD
=======
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import MaterialIcon, {colorPalette} from 'material-icons-react';
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
import axios from 'axios';


export default class FavouriteList extends Component {
<<<<<<< HEAD
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
=======


  handleClick_deleteFavourite (e,f) {
    e.preventDefault()
    console.log(typeof(f));
    axios
      .post('/comics/deleteFavouriteList', {id : f})
      .then(r => {console.log(r.data)})
      .catch(err => {
        console.error(err)
      })

  }

  render() {
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
	return (
		<div >
    <div class="col m3 s12" >
      <div class="card hoverable">
        <div class="card-image">
          <img src={this.props.comicPic}/>
<<<<<<< HEAD
          <button class="btn-floating halfway-fab waves-effect waves-light red " onClick={this.handleClick_delete_Favourite}>
=======
          <button class="btn-floating halfway-fab waves-effect waves-light red " onClick={e => this.handleClick_deleteFavourite(e,this.props.comicID)}>
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
            <i class=" center material-icons">close</i>
          </button>
        </div>
        <div class="card-content">
          <span class="card-title black-text text-darken-2 b">{this.props.comicName}</span>
          
        </div>
<<<<<<< HEAD
        <div className="card-action">
          <a href={url}>Read more ...</a>
        </div>
=======
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
      </div>
    </div>
  </div>
	);
  }
}


