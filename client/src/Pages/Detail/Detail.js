import React, { Component } from 'react';
import "./Detail.css";
import ComicDetail from './ComicDetail';
import axios from 'axios';
import LazyLoad from 'react-lazyload';


export default class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkadd : true,
            username : "",
            comicName :""
        };

        this.addFavourite = this.addFavourite.bind(this);
        this.removeFacourite = this.removeFacourite.bind(this);
    }

    componentWillMount() {
        var username = "";
        if(JSON.parse(localStorage.getItem("User"))!=null){
            username = JSON.parse(localStorage.getItem("User")).username;
        }
        
        
        var url = window.location.href;
        var index = url.indexOf("=");
        var comicName = url.slice(index+1,url.length)

        this.setState({
            username : username,
            comicName : comicName      
        })

        axios.post('/comics/checkaddFavouriteList',{ comicName : comicName , username : username })
            .then(res => {
                console.log(res.data);
                if (res.data) {
                    this.setState({
                        checkadd : true
                    })
                }
                else {
                    this.setState({
                        checkadd : false
                    })
                }
            })
            .catch(err => {
                console.log("error");
            })
    }

    addFavourite(e){
        e.preventDefault()
        axios
            .post('/comics/insertFavouriteList', {id : this.props.comic._id , username : this.state.username})
            .then(res =>{
                if (res.data === true)
                {
                    this.setState({
                        checkadd : false
                    })
                    alert("Đã thêm thành công!!!")
                }
                else if (res.data === false){
                    alert("Thêm không thành công!!!")
                }
            })
            .catch(err =>{
                alert("Error!!!")
            })
    }

    removeFacourite(e) {
        e.preventDefault()
        axios
            .post('/comics/deleteFavouriteList', {id : this.props.comic._id , username : this.state.username})
            .then(res =>{
                if (res.data === true)
                {
                    this.setState({
                        checkadd : true
                    })
                    alert("Đã bỏ thành công!!!")
                }
                else if (res.data === false){
                    alert("Bỏ không thành công!!!")
                }
            })
            .catch(err =>{
                alert("Error!!!")
            })
    }


    render() {
        var kind = this.props.comic.kind;
        var str_kind = "";
        for(var x in kind){
            str_kind += kind[x] + ", "
        }
        var str_kind1 = str_kind.substring(0,str_kind.length-2);
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className="text1">{this.props.comic.comicName}</th>
                        </tr>   
                    </thead>
                    <tbody>
                        <tr className="row">
                            <td className="col m5">
                                <LazyLoad width={300}>
                                    <img id="comicPic" src={this.props.comic.avatar} alt="comicPic" />
                                    </LazyLoad>
                            </td>
                            <td className="col m7">
                                <table className="striped">
                                <tr><ComicDetail idComic={this.props.comic._id} 
                                             author={this.props.comic.author} artist={this.props.comic.artist} 
                                             genre={str_kind1}
                                             publisher={this.props.comic.company}
                                             status="Chưa rõ"/>
                                </tr>
                                <tr>

                                    {(this.state.username!=="") ? <button className="btn btn-large grey darken-3 white-text waves-effect waves-light" 
                                        onClick = {this.state.checkadd ? this.addFavourite : this.removeFacourite}>
                                        {this.state.checkadd ? "Thêm vào yêu thích" : "Bỏ yêu thích"}
                                    </button> : ""}
                                </tr>
                                </table>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                
            </div>
            
        );
    }
}


