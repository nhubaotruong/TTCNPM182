import React, { Component } from 'react';

import ComicBox from './ComicBox.jsx';
import ComicNav from './ComicNav.jsx';
import axios from 'axios';




export default class readcomic extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            datacomic : []
        };
    }


    componentDidMount(){
        axios
            .post('/comics/readcomic',{comicName : this.props.comicName, chapter : this.props.chapter})
            .then(res => {
                this.setState({datacomic : res.data});
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

