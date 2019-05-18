
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
            Favouritecomics: [],
            Historycomics : [],
            Noticecomics : []
        };

    }

    componentDidMount(){
        
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

	render()
	{

		return (
		<div>
			<h2>Storyboard</h2>
			<div class="row">
    			<div class="col s12 16">
      				<ul class="tabs">
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

					</div>
    				<div id="History">
    					<ul class="collection">
    						{
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