import React, { Component } from 'react';
import axios from 'axios'

export default class HistoryNotice extends Component
{

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
      .then(r => {console.log(r.data)})
      .catch(err => {
        console.error(err)
      })
  	}
  	else {
  		axios
      		.post('/comics/deleteNotice', {id : this.props.comicID, username : this.props.username})
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
    var url = "readComic?c=" + this.props.comicChap + "?c1=" + this.props.comicName
	return (

		<li class="collection-item avatar">
      		<img src={this.props.comicPic} alt="" class="circle img-responsive"/>
      		{booleanhistory}
      		
      		<span class="title ">{this.props.comicName}</span>
      		<p>Chapter {this.props.comicChap}</p>
          <div className="card-action">
                            <a href={url}>Read now </a>
                        </div>
      		<a href="#!" class="secondary-content btn-floating halfway-fab waves-effect waves-light red" onClick={e => this.handleClick_deleteHistory(e)}>
      			<i class=" center material-icons">close</i>
      		</a>
    	</li>
	);
	}
}


