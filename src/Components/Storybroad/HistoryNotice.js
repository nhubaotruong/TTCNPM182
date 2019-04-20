import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import MaterialIcon, {colorPalette} from 'material-icons-react';


const HistoryNotice = (props) =>
{
	return (

		<li class="collection-item avatar">
      		<img src={props.comicPic} alt="" class="circle img-responsive"/>
      		<p>{props.comicTypeorTime}</p>
      		<span class="title ">{props.comicName}</span>
      		<p>{props.comicChap}</p>
      		<a href="#!" class="secondary-content"><i class="material-icons">close</i></a>
    	</li>
	);
}


export default HistoryNotice;