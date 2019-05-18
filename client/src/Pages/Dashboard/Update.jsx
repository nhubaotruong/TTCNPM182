import React,{Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import { PromiseProvider } from 'mongoose';
import {addComic} from "./Functions";

class Update extends Component{
	render(){
        return(
		    <form action="/action_page.php" class="center">
				<div class="form-group">
					<label for="email">Tên truyện:</label>
					<input type="text" class="form-control" name="comicName" onChange={this.onChange}/>
				</div>
				<form action="#">
					<div class="file-field input-field">
					<div class="btn">
						<span>Chọn nguồn</span>
						<input type="file" multiple webkitdirectory="" directory="" accept=".png, .jpg, .pdf, .jpeg"/>
					</div>
					<div class="file-path-wrapper">
						<input class="file-path validate" type="text" placeholder="Upload one or more files"/>
					</div>
					</div>
				</form>
				<button type="submit" class="btn btn-primary" style={{marginTop:"50px"}}>Xác nhận</button>
			</form>
        )
	}
}

document.addEventListener('DOMContentLoaded', function() {
	var elem = document.querySelector('.tabs'); 
	var instance = M.Tabs.init(elem, {});
	
      });
export default Update;