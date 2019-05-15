import React,{Component} from 'react';
import './Homepage.css';
import TopComic from './TopComic/TopComic.js';
import RecentUpload from './RecentUpload/RecentUpload.js';
import NavBar from './Basic/NavBar.js';
import Footer from './Basic/Footer.js';
import {getComic} from "./Functions";
import axios from 'axios';


class homepage extends Component{
	constructor(){
		super();
		this.state = {
			topComics : [],
			listComics : []
		}
		// this.onChange = this.onChange.bind(this);
		// this.onSubmit = this.onSubmit.bind(this);
	}
	componentDidMount(){
		axios
    .post("/home",(comics)=>{
    })
    .then(res=>{
				var comics = res.data;
				if(comics.length<=4){
					this.setState({
						topComics : comics,
						listComics : comics
					});
				}
				else{
					var topComics = []
					for(var i=0;i<4;i++){
						topComics.push(comics[i]);
					}
					this.setState({
						topComics : topComics,
						listComics : comics
					});
				}
    })
	}
	// onChange(e){
	// 	this.setState({
	// 		[e.target.name] : e.target.value
	// 	})
	// }
	// onSubmit(e){	
	// 	e.preventDefault()
	// 	const newComic = {
	// 		comicName : this.state.comicName,
	// 		author : this.state.author
	// 	}
	// 	addComic(newComic).then(res=>{
	// 		console.log("Add thành công!!!");
	// 	})
	// }
	showTopComic = () => {
		if(this.state.topComics.length>0){
			return this.state.topComics.map((e)=>{
					return <TopComic comicPic={e.avatar} comicName={e.comicName} _id={e._id} />
			})
		}
	}
	showListComic = () => {
		if(this.state.listComics.length>0){
			return this.state.listComics.map((e)=>{
					return <RecentUpload comicPic={e.avatar} comicDes={e.description} />
			})
		}
	}
	render(){
    return (
      <div>
      <div className='container'>
        <NavBar />
        <span className="tit">Top Comics</span>
        <div className="row">
					{this.showTopComic()}
					{/* <TopComic comicPic="logo.png" comicName="Name 1" />
					<TopComic comicPic="logo.png" comicName="Name 2" />
					<TopComic comicPic="logo.png" comicName="Name 3" />
					<TopComic comicPic="logo.png" comicName="Name 4" /> */}
        </div>  
        <span className="tit">Recent Uploads</span>
				{this.showListComic()}
        {/* <RecentUpload comicPic="logo.png" comicDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <RecentUpload comicPic="logo.png" comicDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <RecentUpload comicPic="logo.png" comicDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <RecentUpload comicPic="logo.png" comicDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />        */}
      </div>
      <div>
      <Footer />
      </div>
      </div>
    );
	}
}

// const homepage = () => {
//     return (
//       <div>
//       <div className='container'>
//         <NavBar />
//         <span className="tit">Top Comics</span>
//         <div className="row">
//           <TopComic comicPic="logo.png" comicName="Name 1" />
//           <TopComic comicPic="logo.png" comicName="Name 2" />
//           <TopComic comicPic="logo.png" comicName="Name 3" />
//           <TopComic comicPic="logo.png" comicName="Name 4" />
//         </div>  
//         <span className="tit">Recent Uploads</span>
//         <RecentUpload comicPic="logo.png" comicDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
//         <RecentUpload comicPic="logo.png" comicDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
//         <RecentUpload comicPic="logo.png" comicDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
//         <RecentUpload comicPic="logo.png" comicDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />       
//       </div>
//       <div>
//       <Footer />
//       </div>
//       </div>
//     );
//   }

export default homepage;
