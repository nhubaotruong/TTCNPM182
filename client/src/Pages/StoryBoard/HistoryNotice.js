import React, { Component } from 'react';
<<<<<<< HEAD
=======
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import MaterialIcon, {colorPalette} from 'material-icons-react';
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
import axios from 'axios'

export default class HistoryNotice extends Component
{

<<<<<<< HEAD
  constructor(props) {
        super(props);
        this.handleClick_deleteHistory = this.handleClick_deleteHistory.bind(this);
      }

	handleClick_deleteHistory (e) {
    e.preventDefault()
    if (this.props.comicHistory == "true")
    {
    axios
      .post('/comics/deleteHistory', {id : this.props.comicID, username : this.props.username})
=======
	handleClick_deleteHistory (e,f) {
    e.preventDefault()
    console.log(f);
    if (this.props.comicHistory == "true")
    {
    axios
      .post('/comics/deleteHistory', {id : f})
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
      .then(r => {console.log(r.data)})
      .catch(err => {
        console.error(err)
      })
  	}
  	else {
  		axios
<<<<<<< HEAD
      		.post('/comics/deleteNotice', {id : this.props.comicID, username : this.props.username})
=======
      		.post('/comics/deleteNotice', {id : f})
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
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
<<<<<<< HEAD
    var url = "readComic?c=" + this.props.comicChap + "?c1=" + this.props.comicName
=======
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
	return (

		<li class="collection-item avatar">
      		<img src={this.props.comicPic} alt="" class="circle img-responsive"/>
      		{booleanhistory}
      		
      		<span class="title ">{this.props.comicName}</span>
      		<p>Chapter {this.props.comicChap}</p>
<<<<<<< HEAD
          <div className="card-action">
                            <a href={url}>Read now </a>
                        </div>
      		<a href="#!" class="secondary-content btn-floating halfway-fab waves-effect waves-light red" onClick={e => this.handleClick_deleteHistory(e)}>
=======
      		<a href="#!" class="secondary-content btn-floating halfway-fab waves-effect waves-light red" onClick={e => this.handleClick_deleteHistory(e,this.props.comicID)}>
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
      			<i class=" center material-icons">close</i>
      		</a>
    	</li>
	);
	}
}


