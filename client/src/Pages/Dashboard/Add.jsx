import React,{Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import { PromiseProvider } from 'mongoose';
import {addComic} from "./Functions";
import "./style.css";

class Add extends Component{
	constructor(){
		super();
		this.state = {
			comicName : " ",
			author : " ",
			artist: " ",
			company: " ",
			description: " ",
			avatar: " ",
			kind: []
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	getfolder(e) {
		var files = e.target.files;
		var path = files[0].webkitRelativePath;
		var Folder = path.split("/");
		alert(Folder[0]);
	}
	onChange(e){
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	handleChange = (e) => {
		let value = Array.from(e.target.selectedOptions, option => option.value);
		this.setState({kind: value});
	}
	onSubmit(e){	
		e.preventDefault()
		const newComic = {
			comicName : this.state.comicName,
			author : this.state.author,
			artist: this.state.artist,
			company: this.state.company,
			description: this.state.description,
			avatar: this.state.avatar,
			kind: this.state.kind
		}
		addComic(newComic).then(res=>{
			console.log("Add thành công!!!");
		})
	}
	render(){
		return(
			<form action="/action_page.php" onSubmit={this.onSubmit} class="center">
			<div class="form-group">
				<label for="email">Tên truyện:</label>
				<input type="text" class="form-control" name="comicName" onChange={this.onChange}/>
			</div>
			<div class="input-field">
				<select multiple onChange={this.handleChange} value={this.props.kind}>
					<option value="1">Action</option>
					<option value="2">Adventure</option>
					<option value="3">Comedy</option>
					<option value="4">Comic</option>
					<option value="5">Drama</option>
					<option value="6">Game</option>
					<option value="7">Horror</option>
					<option value="8">Magic</option>
					<option value="9">Mecha</option>
					<option value="10">Mystery</option>
					<option value="11">Romance</option>
					<option value="12">Sci-fi</option>
					<option value="13">Sports</option>
					<option value="14">Supernatural</option>
					<option value="15">Tragedy</option>
				</select>
				<label class="center-align">Thể loại</label>
			</div>
			<div class="form-group">
				<label >Tác giả:</label>
				<input type="text" class="form-control" name="author" onChange={this.onChange}/>
			</div>
			<div class="form-group">
				<label >Họa sĩ:</label>
				<input type="text" class="form-control" name="artist" onChange={this.onChange}/>
			</div>
			<div class="form-group">
				<label >Ảnh bìa:</label>
				<input type="text" class="form-control" name="avatar" onChange={this.onChange}/>
			</div>
			<div class="form-group">
				<label >Nhà xuất bản:</label>
				<input type="text" class="form-control" name="company" onChange={this.onChange}/>
			</div>
			<div class="row">
				<form class="col s12">
				<div class="row">
					<div class="input-field col s12">
					<textarea id="textarea1" class="materialize-textarea" name="description" onChange={this.onChange}></textarea>
					<label for="textarea1">Mô tả</label>
					</div>
				</div>
				</form>
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
	var elem_select = document.querySelectorAll('select');
	var instances_select = M.FormSelect.init(elem_select, {});
      });
export default Add;