import React, { Component } from 'react'
import './stylesign.css';
import axios from 'axios';


class signin extends Component 
{

    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : ''
        };

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({[e.target.name] : e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()
        console.log(this.state.username);
        axios
            .post('/users/signin',{username : this.state.username , password : this.state.password})
            .then(res =>{
                if (res.data === false)
                {
                    this.setState({password : ""})
                    alert("Username hoặc password nhập sai!!!")
                }
                else if (res.data === true)
                {
                    alert("Đăng nhập thành công!!!")
                }
                else 
                {
                    alert("safas")
                }
            })
            .catch(err =>{
                alert("Error!!!")
            })
    }



    showpass() {
        var x = document.getElementById("password");
        if (x.type === "password") {
        x.type = "text";
        } else {
        x.type = "password";
        }
    }


    disable_login(){
        var y = document.getElementById("login");
        y.style.display="none";
    }



    render()
    {
    return (
        
        <div className="container" onLoad={this.disable_login}>
            
            <div className="all">
            <div className="nav spacein">
                <nav >
                    <div className="nav-wrapper grey darken-3">
                    <a className="brand-logo center">SIGN IN</a>
                    </div>
                </nav>
            </div>
            
            <div className="cont">
                <div className="row" >
                <form className="col s12">

                <div className="row">
                    <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="username" type="text" className="validate" 
                        onChange = {this.onChange}
                        name = "username"
                        value = {this.state.username}/>
                    <label htmlFor="username">Username<span className="req">*</span></label>
                    </div>
                </div>

                <div className="row">
                        <div className="input-field col s12">
                        <i className="material-icons prefix">security</i>
                        <input id="password" type="password" className="validate" 
                            onChange= {this.onChange}
                            name ="password"
                            value = {this.state.password}/>
                        <label htmlFor="password">Password<span className="req">*</span></label>
                        <p>
                            <label>
                                <input type="checkbox" onClick={this.showpass} className="filled-in"/>
                                <span>Show Password</span>
                            </label>
                        </p>
                        </div>
                    </div>
                <div className="row"> 
                    <a href="forgetpass.html"> Forgot your password? </a>
                </div> 
                    
                
                <div className="row center-align">
                    <button className="btn waves-effect waves-light grey darken-3" onClick = {this.onSubmit} name="action">Sign in
                            <i className="material-icons right">send</i>
                    </button>
                </div>
                <div className="row center-align"> 
                    <p>Don't have an account yet? </p>
                    <a href="./signup"> Sign up here! </a>
                </div>  
                </form>
                </div>
            </div>
        </div>
        </div>
    );
    }
}

export default signin