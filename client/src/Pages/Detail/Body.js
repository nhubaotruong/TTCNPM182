import React, { Component } from 'react';
import Detail from "./Detail";
import Content from "./Content";
import ListChapter from "./ListChapter";

export default class Body extends Component {
    render() {
        return (
            <div>
                <Detail comic={this.props.comic} comicID={this.props.comic._id}></Detail>
                <Content comic={this.props.comic}></Content>
                <ListChapter comic={this.props.comic}></ListChapter>
            </div>
        );
    }
}


