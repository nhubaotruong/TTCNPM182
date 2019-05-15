import React, { Component } from 'react';
import "./Detail.css";
import ResultCell from "./ResultCell";
import axios from 'axios';
class Detail extends Component {
    constructor(){
		super();
		this.state = {
			listComic : []
        }
	}
    componentDidMount(){
        var url = window.location.href;
        var index = url.indexOf("=");
        var comic = url.slice(index+1,url.length);
        console.log(comic);
        axios
        .post("/searchComic",{
            comicName : comic
        })
        .then(res=>{
            var listComic = res.data;
            this.setState({
                listComic : listComic
            })
        })
    }
    showListComic = () => {
        if(this.state.listComic.length>0){
			return this.state.listComic.map((e)=>{
					return <tr><ResultCell comicPic={e.avatar} name={e.comicName}  context={e.description} link="#" /></tr>
			})
		}
    }
    render() {
        return (
            <div>
                <br />
                <div className="row">
                    <div className="col m2 text1 center-align">Hình</div>
                    <div className="col m10 text1 center-align">Tên truyện và nội dung</div>
                </div>
                <table>
                    <tbody>
                        {
                            this.showListComic()
                        }
                    </tbody>
                </table>
                
            </div>
            
        );
    }
}

export default Detail;
