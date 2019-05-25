import React,{Component} from 'react';
import {deleteComic} from "./Functions";
import { confirmAlert } from 'react-confirm-alert'; // Import
class RecentUpload extends Component{
    onDelete = () => {
        var comicName = this.props.comicName;
        deleteComic(comicName).then(res=>{
			console.log("Xóa thành công!!!");
		})
    }
    render(){
        var kind = this.props.comic.kind;
        var str_kind = "";
        for(var x in kind){
            str_kind += kind[x] + ", "
        }
        var str_kind1 = str_kind.substring(0,str_kind.length-2);
        return (
            <div className="row">
                <div className="col m12 s12">
                    <div className="card hoverable horizontal">
                        <div className="card-image">
                            <img src={this.props.comicPic} alt="tt" style={{width:"200px"}} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p><b>{this.props.comicName}</b></p>
                                <p>Views: {this.props.comic.view}</p>
                                <p>Author: {this.props.comic.author}</p>
                                <p>Category: {str_kind1}</p>
                                <p className="truncate">Mô tả: {this.props.comic.description.substring(0,50)}...</p>
                            </div>
                            <div className="card-action right-align">
                                <a href="/dashboard"><button className="btn" onClick={this.onDelete}>Delete</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentUpload;