import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import axios from 'axios'

export default class HistoryNotice extends Component
{

	handleClick_deleteHistory (e,f) {
    e.preventDefault()
    console.log(f);
    if (this.props.comicHistory == "true")
    {
    axios
      .post('/comics/deleteHistory', {id : f})
      .then(r => {console.log(r.data)})
      .catch(err => {
        console.error(err)
      })
  	}
  	else {
  		axios
      		.post('/comics/deleteNotice', {id : f})
      		.then(r => {console.log(r.data)})
      		.catch(err => {
        console.error(err)
      })
  	}
  }



	render(){
		let booleanhistory;
		if (this.props.comicHistory == "true")
		{
			booleanhistory = <p>Read {this.props.comicTime}</p>
		}
		else {
			booleanhistory = <p>Update {this.props.comicTime}</p>
		}
	return (

		<li class="collection-item avatar">
      		<img src={this.props.comicPic} alt="" class="circle img-responsive"/>
      		{booleanhistory}
      		
      		<span class="title ">{this.props.comicName}</span>
      		<p>Chapter {this.props.comicChap}</p>
      		<a href="#!" class="secondary-content btn-floating halfway-fab waves-effect waves-light red" onClick={e => this.handleClick_deleteHistory(e,this.props.comicID)}>
      			<i class=" center material-icons">close</i>
      		</a>
    	</li>
	);
	}
}


