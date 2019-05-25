<<<<<<< HEAD
import React, { Component } from 'react'
import './stylesign.css';
import axios from 'axios';

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
            if (this.state.password != this.state.verfiactionpassword){
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
=======
import React from 'react';
import './stylesign.css';
import NavBar from '../Basic/NavBar'

const signup = () => {
    function showpass() {
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
        var x = document.getElementById("password");
        if (x.type === "password") {
        x.type = "text";
        } else {
        x.type = "password";
        }
    }
<<<<<<< HEAD
    disable_login(){
        var y = document.getElementById("login");
        y.style.display="none";
    }

    render()
    {
    return (
        <div className="container" onLoad={this.disable_login}>
            
=======
    function disable_login(){
        var y = document.getElementById("login");
        y.style.display="none";
    }
    return (
        <div className="container" onLoad={disable_login}>
            <NavBar/>
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
        <div class="all">
            <div class="nav">
                <nav>
                    <div class="nav-wrapper grey darken-3">
                    <a class="brand-logo center">SIGN UP</a>
                    </div>
                </nav>
            </div>
            
            <div class="cont">
                <p class="note"><span class="req">*</span> fields are required</p>
                <div class="row" >
                <form class="col s12 m12">

                <div class="row">
<<<<<<< HEAD
                    <div class="input-field col s12 m12">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" class="validate" 
                        onChange = {this.onChange}
                        name = "username"
                        value = {this.state.username}/>
                    <label htmlFor="icon_prefix">Username<span class="req">*</span></label>
                    </div>
                    
=======
                    <div class="input-field col s6 m6">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" class="validate" />
                    <label htmlFor="icon_prefix">First Name<span class="req">*</span></label>
                    </div>
                    <div class="input-field col s6 m6">
                    <input id="icon_telephone" type="tel" class="validate" />
                    <label htmlFor="icon_telephone">Last Name<span class="req">*</span></label>
                    </div>
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
                </div>

                <div class="row">
                    <div class="input-field col s12 m12">
                        <i class="material-icons prefix">security</i>
<<<<<<< HEAD
                        <input id="password" type="password" class="validate" 
                            onChange = {this.onChange}
                            name = "password"
                            value = {this.state.password}/>
                        <label htmlFor="password">Password<span class="req">*</span></label>
                        <p>
                            <label>
                                <input type="checkbox" onClick={this.showpass} class="filled-in"/>
=======
                        <input id="password" type="password" class="validate" />
                        <label htmlFor="password">Password<span class="req">*</span></label>
                        <p>
                            <label>
                                <input type="checkbox" onClick={showpass} class="filled-in"/>
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
                                <span>Show Password</span>
                            </label>
                        </p>
                        </div>
                    </div>

                <div class="row">
                    <div class="input-field col s12 m12">
<<<<<<< HEAD
                        <i class="material-icons prefix">security</i>
                        <input id="verfiactionpassword" type="password" class="validate" 
                            onChange = {this.onChange}
                            name = "verfiactionpassword"
                            value = {this.state.verfiactionpassword}/>
                        <label htmlFor="verfiactionpassword">Verfiaction Password<span class="req">*</span></label>

                        </div>
                    </div>

                

                
                <div class="row center-align">
                    <button class="btn waves-effect waves-light grey darken-3" onClick = {this.onSubmit} name="action">Sign up
=======
                    <i class="material-icons prefix">phone</i>
                    <input id="icon_telephone" type="tel" class="validate" />
                    <label htmlFor="icon_telephone">Telephone</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12 m12">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="username" type="text" class="validate" />
                    <label htmlFor="username">Username<span class="req">*</span></label>
                    </div>
                </div>

                
                <div class="row center-align">
                    <button class="btn waves-effect waves-light grey darken-3" type="submit" name="action">Sign up
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
                        <i class="material-icons right">send</i>
                    </button>
                </div>
                <div class="row center-align"> 
                    <p>Have an account already? </p>
<<<<<<< HEAD
                    <a href="/signin"> Sign in here! </a>
=======
                    <a href="./signin"> Sign in here! </a>
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
                </div>  
                </form>
                </div>
            </div>
        </div>
        </div>
    );
<<<<<<< HEAD
    }
=======
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
}

export default signup;