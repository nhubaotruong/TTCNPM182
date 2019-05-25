import React, { Component } from 'react'
import './stylesign.css';
import axios from 'axios';
import Header from '../Basic/NavBar';

class signup extends Component 
{

    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : '',
            verfiactionpassword : '' 
        };

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({[e.target.name] : e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        if (this.state.username && this.state.password && this.state.verfiactionpassword)
        {
            if (this.state.password !== this.state.verfiactionpassword){
                alert( "Xác nhận không khớp mật khẩu")
            
                this.setState({verfiactionpassword: "" })
            }
        
            else {
                 
                axios
                    .post('/users/signup', {username : this.state.username , password : this.state.password})
                    .then (res => {
                        
                        if (res.data === false)
                        {
                            alert("username đã tồn tại!!!")
                            this.setState({
                                username : "" , 
                                password : "",
                                verfiactionpassword: ""
                            })
                        }
                        else if (res.data === true)
                        {
                            window.location = "/signin";
                        }
                        else {
                            alert(res.data)
                        }
                    })  
                    .catch(err => alert("Error!!!" ))              
            }
        }
        else 
        {
            alert("Cần điền đầy đủ các trường")
        }
        
    }



    showpass() {
        var x = document.getElementById("password");
        if (x.type === "password") {
        x.type = "text";
        } else {
        x.type = "password";
        }
    }

    render()
    {
    return (
        <div className="container">
            <Header />
        <div class="all">
            <div class="nav">
                <nav>
                    <div class="nav-wrapper grey darken-3">
                    <a class="brand-logo center">Đăng kí</a>
                    </div>
                </nav>
            </div>
            
            <div class="cont">
                <p class="note"><span class="req">*</span> trường bắt buộc</p>
                <div class="row" >
                <form class="col s12 m12">

                <div class="row">
                    <div class="input-field col s12 m12">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" class="validate" 
                        onChange = {this.onChange}
                        name = "username"
                        value = {this.state.username}/>
                    <label htmlFor="icon_prefix">Username<span class="req">*</span></label>
                    </div>
                    
                </div>

                <div class="row">
                    <div class="input-field col s12 m12">
                        <i class="material-icons prefix">security</i>
                        <input id="password" type="password" class="validate" 
                            onChange = {this.onChange}
                            name = "password"
                            value = {this.state.password}/>
                        <label htmlFor="password">Mật khẩu<span class="req">*</span></label>
                        <p>
                            <label>
                                <input type="checkbox" onClick={this.showpass} class="filled-in"/>
                                <span>Hiện mật khẩu</span>
                            </label>
                        </p>
                        </div>
                    </div>

                <div class="row">
                    <div class="input-field col s12 m12">
                        <i class="material-icons prefix">security</i>
                        <input id="verfiactionpassword" type="password" class="validate" 
                            onChange = {this.onChange}
                            name = "verfiactionpassword"
                            value = {this.state.verfiactionpassword}/>
                        <label htmlFor="verfiactionpassword">Xác nhận mật khẩu<span class="req">*</span></label>

                        </div>
                    </div>

                

                
                <div class="row center-align">
                    <button class="btn waves-effect waves-light grey darken-3" onClick = {this.onSubmit} name="action">Đăng kí
                        <i class="material-icons right">send</i>
                    </button>
                </div>
                <div class="row center-align"> 
                    <p>Đã có tài khoản? </p>
                    <a href="/signin"> Đăng nhập ở đây! </a>
                </div>  
                </form>
                </div>
            </div>
        </div>
        </div>
    );
    }
}

export default signup;