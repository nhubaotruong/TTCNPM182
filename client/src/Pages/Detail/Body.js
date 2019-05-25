import React, { Component } from 'react';
import Detail from "./Detail";
import Content from "./Content";
import ListChapter from "./ListChapter";

<<<<<<< HEAD
export default class Body extends Component {
    render() {
        return (
            <div>
                <Detail comic={this.props.comic} comicID={this.props.comic._id}></Detail>
=======
class Body extends Component {
    render() {
        return (
            <div>
                <Detail comic={this.props.comic}></Detail>
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
                <Content comic={this.props.comic}></Content>
                <ListChapter comic={this.props.comic}></ListChapter>
            </div>
        );
    }
}

<<<<<<< HEAD

=======
export default Body;
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
