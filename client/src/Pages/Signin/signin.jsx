import React from 'react';
import './stylesign.css';
import NavBar from '../Basic/NavBar'

const signin = () => {
    function showpass() {
        var x = document.getElementById("password");
        if (x.type === "password") {
        x.type = "text";
        } else {
        x.type = "password";
        }
    }
    function disable_login(){
        var y = document.getElementById("login");
        y.style.display="none";
    }
    return (
        
        <div className="container" onLoad={disable_login}>
            <NavBar/>
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
                    <input id="username" type="text" className="validate" />
                    <label htmlFor="username">Username<span className="req">*</span></label>
                    </div>
                </div>

                <div className="row">
                        <div className="input-field col s12">
                        <i className="material-icons prefix">security</i>
                        <input id="password" type="password" className="validate" />
                        <label htmlFor="password">Password<span className="req">*</span></label>
                        <p>
                            <label>
                                <input type="checkbox" onClick={showpass} className="filled-in"/>
                                <span>Show Password</span>
                            </label>
                        </p>
                        </div>
                    </div>
                <div className="row"> 
                    <a href="forgetpass.html"> Forgot your password? </a>
                </div> 
                    
                
                <div className="row center-align">
                    <button className="btn waves-effect waves-light grey darken-3" type="submit" name="action">Sign in
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

export default signin