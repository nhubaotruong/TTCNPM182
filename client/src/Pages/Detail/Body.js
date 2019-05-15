import React, { Component } from 'react';
import Detail from "./Detail";
import Content from "./Content";
import ListChapter from "./ListChapter";

class Body extends Component {
    render() {
        return (
            <div>
                <Detail comic={this.props.comic}></Detail>
                <Content comic={this.props.comic}></Content>
                <ListChapter></ListChapter>
            </div>
        );
    }
}

export default Body;
