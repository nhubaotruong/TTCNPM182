
import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import FavouriteList from './FavouriteList.js';
import HistoryNotice from './HistoryNotice.js';
import axios from 'axios';
import Moment from 'moment';



class Storybroad extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            username : "",
            Favouritecomics: [],
            Historycomics : [],
            Noticecomics : []
        };

    }

    componentDidMount(){
        this.setState({
            username : JSON.parse(localStorage.getItem("User")).username
        })
        var username = JSON.parse(localStorage.getItem("User")).username
        axios
            .post('/comics/showFavouriteList',{username : username})
            .then(res => {
                
                this.setState({ Favouritecomics : res.data});
                console.log(this.state.Favouritecomics)
                
            })
            .catch(err => {
                console.log('err is ',err)
            })

        axios
            .post('/comics/showHistory', {username : username})
            .then(res => {
                this.setState({ Historycomics : res.data});
            })
            .catch(err => {
                console.log('err is ' , err)
            })
        axios
            .post('/comics/showNotice', {username : username})
            .then(res => {
                this.setState({ Noticecomics : res.data});
            })
            .catch(err => {
                console.log('err is ' , err)
            })
    }

    // componentWillUpdate() {
    //     axios
    //         .post('/comics/showFavouriteList' , {})
    //         .then(res => {
                
    //             this.setState({ Favouritecomics : res.data});
    //         })
    //         .catch(err => {
    //             console.log('err is ',err)
    //         })

    //     axios
    //         .get('/comics/showHistory', {})
    //         .then(res => {
    //             this.setState({ Historycomics : res.data});
    //         })
    //         .catch(err => {
    //             console.log('err is ' , err)
    //         })

    //     axios
    //         .get('/comics/showNotice', {})
    //         .then(res => {
    //             this.setState({ Noticecomics : res.data});
    //         })
    //         .catch(err => {
    //             console.log('err is ' , err)
    //         })
    // }

    
    showFavouritecomics = () => {
        if(this.state.Favouritecomics.length>0){
            return this.state.Favouritecomics.map((comic) => {
                return <FavouriteList comicPic = {comic.idcomic.avatar} comicName = {comic.idcomic.comicName} comicID ={comic.idcomic._id}/>
            }
    )}}
    showHistorycomics = () => {

        if(this.state.Historycomics.length == 0){
            return <div>Không có lịch sử</div>
        }
        else {
            return this.state.Historycomics.map((comic) =>{
                console.log(comic.avatar)
                return <HistoryNotice comicPic={comic.idcomic.avatar} comicName = {comic.idcomic.comicName} comicChap= {comic.chap} comicTime = {Moment(comic.time).format("MMMM Do, YYYY H:mma")} comicID = {comic.idcomic} comicHistory = "true"/>
            })
        }
    }
	render()
	{

		return (
		<div>
			<h2>Storyboard</h2>
			<div class="row">
    			<div class="col s12 16">
      				<ul class="tabs">
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

					</div>
    				<div id="History">
    					<ul class="collection">
    						{
                                this.showHistorycomics()
                            }
    					</ul>
    				</div>
    				
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