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
        return (
            <div className="row">
                <div className="col m12 s12">
                    <div className="card hoverable horizontal">
                        <div className="card-image">
                            <img src={this.props.comicPic} alt="tt" style={{width:"200px"}} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>{this.props.comicName}</p>
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