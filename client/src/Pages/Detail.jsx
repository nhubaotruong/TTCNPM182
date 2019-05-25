import React, { Component } from 'react';
import Header from "./Basic/NavBar";
import Footer from './Basic/Footer';
import Body from "./Detail/Body";
import {sendComic} from "./Functions";
import axios from 'axios';
import SumComment from "./Comment/SumComment";
import Rating from "./Rating/Rating";
class App extends Component {
    constructor(){
		super();
		this.state = {
			comic : {}
        }
	}
    componentDidMount(){
        var url = window.location.href;
        var index = url.indexOf("=");
        var comic = url.slice(index+1,url.length);
        axios
        .post("/sendComic",{
            comicName : comic
        })
        .then(res=>{
            var comic = res.data;
            this.setState({
                comic : comic
            })
        })
            
    }
    render() {
        return (
            <div>
                <div className="container">
                <Header />
                <Body comic={this.state.comic}/>
                </div>
                <br/>
<<<<<<< HEAD
                <SumComment ComicName = {this.state.comic.comicName} key = {this.state.comic.comicName} />
=======
                <SumComment ComicName = {this.state.comic.comicName} key = {this.state.comic.comicName}/>
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
                <Footer />0
            </div>
      );
    }
  }
  

export default App;
