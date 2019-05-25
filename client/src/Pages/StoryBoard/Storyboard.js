<<<<<<< HEAD
import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
=======

import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import MaterialIcon, {colorPalette} from 'material-icons-react';
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
import FavouriteList from './FavouriteList.js';
import HistoryNotice from './HistoryNotice.js';
import axios from 'axios';
import Moment from 'moment';



class Storybroad extends Component
{
    constructor(props) {
        super(props);

        this.state = {
<<<<<<< HEAD
            username : "",
=======
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
            Favouritecomics: [],
            Historycomics : [],
            Noticecomics : []
        };

    }

    componentDidMount(){
<<<<<<< HEAD
        if(JSON.parse(localStorage.getItem("User"))!= null){
            this.setState({
                username : JSON.parse(localStorage.getItem("User")).username
            })
        }else{
            alert("Bạn cần đăng nhập vào tài khoản!");
            window.location = "/home";
        }
        // var username = JSON.parse(localStorage.getItem("User")).username
        // axios
        //     .post('/comics/showFavouriteList',{username : username})
        //     .then(res => {
                
        //         this.setState({ Favouritecomics : res.data});
                
        //     })
        //     .catch(err => {
        //         console.log('err is ',err)
        //     })

        // axios
        //     .post('/comics/showHistory', {username : username})
        //     .then(res => {
        //         this.setState({ Historycomics : res.data});
        //     })
        //     .catch(err => {
        //         console.log('err is ' , err)
        //     })
        // axios
        //     .post('/comics/showNotice', {username : username})
        //     .then(res => {
        //         this.setState({ Noticecomics : res.data});
        //     })
        //     .catch(err => {
        //         console.log('err is ' , err)
        //     })
    }

    componentDidUpdate() {
        // var username = JSON.parse(localStorage.getItem("User")).username
        axios
            .post('/comics/showFavouriteList',{username : this.state.username})
            .then(res => {
                
                this.setState({ Favouritecomics : res.data});
                
=======
        
        axios
            .get('/comics/showFavouriteList',{})
            .then(res => {
                
                this.setState({ Favouritecomics : res.data});
                
            })
            .catch(err => {
                console.log('err is ',err)
            })

        axios
            .get('/comics/showHistory', {})
            .then(res => {
                this.setState({ Historycomics : res.data});
            })
            .catch(err => {
                console.log('err is ' , err)
            })
        axios
            .get('/comics/showNotice', {})
            .then(res => {
                this.setState({ Noticecomics : res.data});
            })
            .catch(err => {
                console.log('err is ' , err)
            })
    }

    componentWillUpdate() {
        axios
            .get('/comics/showFavouriteList' , {})
            .then(res => {
                
                this.setState({ Favouritecomics : res.data});
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
            })
            .catch(err => {
                console.log('err is ',err)
            })

        axios
<<<<<<< HEAD
            .post('/comics/showHistory', {username :  this.state.username})
=======
            .get('/comics/showHistory', {})
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
            .then(res => {
                this.setState({ Historycomics : res.data});
            })
            .catch(err => {
                console.log('err is ' , err)
            })
<<<<<<< HEAD
        // axios
        //     .post('/comics/showNotice', {username :  this.state.username})
        //     .then(res => {
        //         this.setState({ Noticecomics : res.data});
        //     })
        //     .catch(err => {
        //         console.log('err is ' , err)
        //     })
    }

    
    showFavouritecomics = () => {
        if(this.state.Favouritecomics.length == 0)
        {
            return <div>Danh sách ưu thích trống</div>
        }
        else{
            console.log(this.state.Favouritecomics)
            return this.state.Favouritecomics.map((comic,index) => {
                return <FavouriteList comicPic = {comic.idcomic.avatar} comicName = {comic.idcomic.comicName} key = {index} comicID ={comic.idcomic._id} username = {this.state.username}/>
            }
    )}}
    showHistorycomics = () => {

        if(this.state.Historycomics.length == 0){
            return <div>Không có lịch sử</div>
        }
        else {
            return this.state.Historycomics.map((comic,index) =>{
                return <HistoryNotice comicPic={comic.idcomic.avatar} comicName = {comic.idcomic.comicName} key = {index} comicChap= {comic.chap} comicTime = {Moment(comic.time).format("MMMM Do, YYYY H:mma")} comicID = {comic.idcomic} comicHistory = "true" username = {this.state.username}/>
            })
        }
    }
=======

        axios
            .get('/comics/showNotice', {})
            .then(res => {
                this.setState({ Noticecomics : res.data});
            })
            .catch(err => {
                console.log('err is ' , err)
            })
    }

>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
	render()
	{

		return (
		<div>
			<h2>Storyboard</h2>
			<div class="row">
    			<div class="col s12 16">
      				<ul class="tabs">
<<<<<<< HEAD
        				<li class="tab col s6" >
        	  				<a href="#Favourite" class="waves-effect waves-red black-text" >Favourite List</a>
        				</li>
        				<li class="tab col s6">
        					<a href="#History" class="waves-effect waves-red black-text" >History</a>
        				</li>
        				
      				</ul>
      				<div id="Favourite" class = "row">
                        {   
                            this.showFavouritecomics()
                        }
=======
        				<li class="tab col s4" >
        	  				<a href="#Favourite" class="waves-effect waves-red black-text" >Favourite List</a>
        				</li>
        				<li class="tab col s4">
        					<a href="#History" class="waves-effect waves-red black-text" >History</a>
        				</li>
        				<li class="tab col s4">
        					<a href="#Notice" class="waves-effect waves-red black-text" >Notice</a>
        				</li>
      				</ul>
      				<div id="Favourite" class = "row">
                        {   
                            this.state.Favouritecomics.map((comic) =>
                            <FavouriteList comicPic = "logo.png" comicName = {comic.idcomic.name} comicID ={comic.idcomic._id}/>
                        )}
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433

					</div>
    				<div id="History">
    					<ul class="collection">
    						{
<<<<<<< HEAD
                                this.showHistorycomics()
                            }
    					</ul>
    				</div>
    				
=======
                                this.state.Historycomics.map((comic) =>
                                    <HistoryNotice comicPic="logo.png" comicName = {comic.idcomic.name} comicChap= {comic.chap} comicTime = {Moment(comic.time).format("MMMM Do, YYYY H:mma")} comicID = {comic.idcomic} comicHistory = "true"/>
                                )   
                            }
    					</ul>
    				</div>
    				<div id="Notice">
    					<ul class="collection">
    						{
                                this.state.Noticecomics.map((comic) =>
                                    <HistoryNotice comicPic="logo.png" comicName = {comic.idcomic.name} comicChap= {comic.chap} comicTime = {Moment(comic.time).format("MMMM Do, YYYY H:mma")} comicID = {comic.idcomic} comicHistory = "false"/>
                                )   
                            }
    					</ul>
    				</div>
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
    			</div>
    
  			</div>
  		</div>
		);
	}
}



document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.tabs'); 
    var instance = M.Tabs.init(elem, {});
    
  });



export default Storybroad;