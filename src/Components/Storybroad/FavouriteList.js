import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import MaterialIcon, {colorPalette} from 'material-icons-react';


const FavouriteList = (props) => {

	return (
		<div >
    <div class="col m3 s12">
      <div class="card hoverable">
        <div class="card-image">
          <img src={props.comicPic}/>
          <a class="btn-floating halfway-fab waves-effect waves-light red">
            <i class="material-icons ">close</i>
          </a>
        </div>
        <div class="card-content">
          <span class="card-title black-text text-darken-2 b">{props.comicName}</span>
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  </div>
	)
}


export default FavouriteList;