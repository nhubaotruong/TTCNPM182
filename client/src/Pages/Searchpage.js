import React, { Component } from 'react';
import Header from "./Basic/NavBar";
import Footer from './Basic/Footer';
import Body from "./Search/Detail";

class App extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{width:"80%"}}>
                    <Header></Header>
                    <Body></Body>
                </div>
                <br/>
                <Footer/>
            </div>
        );
    }
}

export default App;
