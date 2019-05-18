import React,{Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import axios from 'axios';
import RecentUpload from "./RecentUpload";

class Delete extends Component{
	constructor(){
		super();
		this.state = {
			listComics : []
		}
	}
	componentDidMount(){
		axios
		.post("/home",(comics)=>{
		})
		.then(res=>{
			var comics = res.data;
			this.setState({
				listComics : comics
			})
		})
	}
	showListComic = () => {
		if(this.state.listComics.length>0){
			return this.state.listComics.map((e)=>{
					return <RecentUpload comicPic={e.avatar} comicDes={e.description} comicName={e.comicName} comic={e} />
			})
		}
	}
	render(){
		return (
			<div>
				{
					this.showListComic()
				}
			</div>
		);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	var elem = document.querySelector('.tabs'); 
	var instance = M.Tabs.init(elem, {});
	
      });
export default Delete;