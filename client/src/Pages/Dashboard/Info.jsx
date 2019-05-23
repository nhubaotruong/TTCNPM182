import React,{Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import axios from 'axios';


class Info extends Component{
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
    maxViewComic = () => {
        var listComics = this.state.listComics;
        if(this.state.listComics.length>0){
            var maxComic = listComics[0].comicName;
            var maxAvt = listComics[0].avatar;
            var maxView = listComics[0].view;
        }
        for(var i=1;i<listComics.length;i++){
            if(maxView < listComics[i].view){
                maxView = listComics[i].view;
                maxComic = listComics[i].comicName;
                maxAvt = listComics[i].avatar;
            }
        }
        return {maxComic: maxComic, maxView: maxView, maxAvt: maxAvt};
    }
    render(){
        return (
            <div>
                <div className="col m12 s12">
                    <div className="card hoverable horizontal">
                    <div className="card-image">
                        <img src={this.props.comicPic} alt="info"/>
                    </div>
                    <div className="card-content">
                        <span className="card-title black-text text-darken-2 b"></span>
                        <p style={{height:'66px'}}>Số lượng truyện: {this.state.listComics.length}</p>
                    </div>
                    </div>
                </div>
                <div className="col m12 s12">
                    <div className="card hoverable horizontal">
                    <div className="card-image">
                        <img src={this.props.comicPic} alt="info"/>
                    </div>
                    <div className="card-content">
                        <span className="card-title black-text text-darken-2 b"></span>
                        <p style={{height:'66px'}}>Số lượng người dùng: 12</p>
                    </div>
                    </div>
                </div>
                <div className="col m12 s12">
                    <div className="card hoverable horizontal">
                    <div className="card-image">
                        <img src={this.maxViewComic().maxAvt} alt="info" width="200px" height="350px"/>
                        <a className="btn-floating halfway-fab waves-effect waves-light red" href={'/detail?c='+this.maxViewComic().maxComic}>
                        <i className="material-icons ">info_outline</i>
                        </a>
                    </div>
                    <div className="card-content">
                        <span className="card-title black-text text-darken-2 b"></span>
                        <p>Truyện có nhiều view nhất: {this.maxViewComic().maxComic}. <br/>View: {this.maxViewComic().maxView}</p>
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
export default Info;