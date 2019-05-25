import React, { Component } from 'react';
<<<<<<< HEAD
=======

>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
import ComicBox from './ComicBox.jsx';
import ComicNav from './ComicNav.jsx';
import axios from 'axios';




export default class readcomic extends Component
{
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            datacomic : [],
            chapterName : ""
=======
            datacomic : []
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
        };
    }


    componentDidMount(){
        axios
<<<<<<< HEAD
            .post('/comics/readcomic',{comicName : this.props.comicName, chapter : this.props.data.chapter})
            .then(res => {
                this.setState({datacomic : res.data.link, chapterName : res.data.chapter});
=======
            .post('/comics/readcomic',{comicName : this.props.comicName, chapter : this.props.chapter})
            .then(res => {
                this.setState({datacomic : res.data});
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
            })
            .catch(err => {
                console.log('err is ',err)
            })
        // console.log(this.props.comicName)
        // console.log(typeof(this.props.comicName))
        // console.log(this.props.chapter)
        // console.log(typeof(this.props.chapter))
    }


    render() {
    return (
        <div>
            <div className="container" style={{width:"80%"}}>
            
            <br />
            <ComicNav comicName={this.props.comicName} chapter={this.props.chapter} />
            <br/><br/>
            
            {
                this.state.datacomic.map((data) =>
                    <ComicBox pic= {data} />
                )
            }
            </div>
            <br/>
            
        </div>
    );
    }
}

