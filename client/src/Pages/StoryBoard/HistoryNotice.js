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
    console.log(this.props.comicName);
    if (this.props.comicHistory == "true")
    {
    axios
      .post('/comics/deleteHistory', {id : this.props.comicID, username : this.props.username})
      .then(r => {
        console.log(this.props.comicName);
        this.props.functionChange();
      })
      .catch(err => {
        console.error(err)
      })
    }
    else {
      axios
          .post('/comics/deleteNotice', {id : this.props.comicID, username : this.props.username})
          .then(r => {this.props.functionChange()})
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
<div>
		<li className="collection-item avatar col m6">
      		<img src={this.props.comicPic} alt="" className="circle img-responsive" style={{marginTop:'20px'}}/>
      		{booleanhistory}
      		
      		<b><span className="title ">{this.props.comicName}</span></b>
      		<p>Chapter {this.props.comicChap}</p>
          <div className="card-action">
                            <a href={url}>Read now </a>
                        </div>
      		<a href="#!" className="secondary-content btn-floating halfway-fab waves-effect waves-light red" onClick={e => this.handleClick_deleteHistory(e)}>
      			<i className="material-icons">close</i>
      		</a>
    	</li>
			</div>
  );
  }
}


