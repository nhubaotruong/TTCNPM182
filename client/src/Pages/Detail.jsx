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
                <SumComment ComicName = {this.state.comic.comicName} key = {this.state.comic.comicName} />
                <Footer />0
            </div>
      );
    }
  }
  

export default App;
