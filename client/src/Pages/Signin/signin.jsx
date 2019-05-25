import React, { Component } from 'react'
import './stylesign.css';
import axios from 'axios';
import Header from '../Basic/NavBar';
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
        axios
            .post('/users/signin',{username : this.state.username , password : this.state.password})
            .then(res =>{
                if (res.data == null)
                {
                    this.setState({password : ""})
                    alert("Username hoặc mật khẩu nhập sai!!!")
                }
                else if (res.data)
                {
                    localStorage.setItem('User', JSON.stringify(res.data));
                    window.location = res.data.admin ? "/dashboard" : "/home";
                }
                else 
                {
                    this.setState({password : ""})
                    alert("Username hoặc mật khẩu nhập sai!!!")
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



    render()
    {
    return (
        
        <div className="container">
            <Header />
            <div className="all">
            <div className="nav spacein">
                <nav >
                    <div className="nav-wrapper grey darken-3">
                    <a className="brand-logo center">Đăng nhập</a>
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
                        <label htmlFor="password">Mật khẩu<span className="req">*</span></label>
                        <p>
                            <label>
                                <input type="checkbox" onClick={this.showpass} className="filled-in"/>
                                <span>Hiện mật khẩu</span>
                            </label>
                        </p>
                        </div>
                    </div>
                <div className="row"> 
                    <a href="forgetpass.html"> Quên mật khẩu? </a>
                </div> 
                    
                
                <div className="row center-align">
                    <button className="btn waves-effect waves-light grey darken-3" onClick = {this.onSubmit} name="action">Đăng nhập
                            <i className="material-icons right">send</i>
                    </button>
                </div>
                <div className="row center-align"> 
                    <p>Chưa có tài khoản? </p>
                    <a href="./signup"> Đăng kí ở đây! </a>
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