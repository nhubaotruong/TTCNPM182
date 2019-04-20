
import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import FavouriteList from './FavouriteList.js';
import HistoryNotice from './HistoryNotice.js'

class Storybroad extends Component
{
	render()
	{
		return (
		<div>
			<h2>Storybroad</h2>
			<div class="row">
    			<div class="col s12 16 offset-12">
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
        				<FavouriteList comicPic="logo.png" comicName="Name 1"/>
        				<FavouriteList comicPic="logo.png" comicName="Name 2"/>
        				<FavouriteList comicPic="logo.png" comicName="Name 3"/>
        				<FavouriteList comicPic="logo.png" comicName="Name 4"/>
        				<FavouriteList comicPic="logo.png" comicName="Name 5"/>
					</div>
    				<div id="History">
    					<ul class="collection">
    						<HistoryNotice comicPic="logo.png" comicName = "Name 1" comicChap="Chap 1 : Name chap" comicTypeorTime="Read 1/1/2019"/>
    						<HistoryNotice comicPic="logo.png" comicName = "Name 2" comicChap="Chap 1 : Name chap" comicTypeorTime="Read 1/1/2019"/>
    						<HistoryNotice comicPic="logo.png" comicName = "Name 3" comicChap="Chap 1 : Name chap" comicTypeorTime="Read 1/1/2019"/>
    					</ul>
    				</div>
    				<div id="Notice">
    					<ul class="collection">
    						<HistoryNotice comicPic="logo.png" comicName = "Name 1" comicChap="Chap 1 : Name chap" comicTypeorTime="Updated"/>
    						<HistoryNotice comicPic="logo.png" comicName = "Name 2" comicChap="Chap 1 : Name chap" comicTypeorTime="Updated"/>
    						<HistoryNotice comicPic="logo.png" comicName = "Name 3" comicChap="Chap 1 : Name chap" comicTypeorTime="Updated"/>
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