import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import axios from 'axios';


export default class FavouriteList extends Component {


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
	return (
		<div >
    <div class="col m3 s12" >
      <div class="card hoverable">
        <div class="card-image">
          <img src={this.props.comicPic}/>
          <button class="btn-floating halfway-fab waves-effect waves-light red " onClick={e => this.handleClick_deleteFavourite(e,this.props.comicID)}>
            <i class=" center material-icons">close</i>
          </button>
        </div>
        <div class="card-content">
          <span class="card-title black-text text-darken-2 b">{this.props.comicName}</span>
          
        </div>
      </div>
    </div>
  </div>
	);
  }
}


