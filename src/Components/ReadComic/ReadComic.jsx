import React, { Component } from 'react';

import ComicBox from './ComicBox.jsx';
import ComicNav from './ComicNav.jsx';
import axios from 'axios';




export default class readcomic extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            comicName : this.props.comicName,
            chapter : this.props.chapter,
            datacomic : [],
         countchapter: 0
        };
        this.ClickPreviouschapter = this.ClickPreviouschapter.bind(this)
        this.ClickNextchapter = this.ClickNextchapter.bind(this)
    }


    componentDidMount(){
        axios
            .post('/comics/readcomic',{comicName : this.state.comicName, chapter : this.state.chapter})
            .then(res => {
                this.setState({datacomic : res.data});
            })
            .catch(err => {
                console.log('err is ',err)
            })


        axios.post('/comics/countchapter',{comicName : this.state.comicName})
            .then(res =>{
                console.log(typeof(res.data.length))
                this.setStatcountchapter : res.data.length})
            })
            .catch(err =>{
                alert("Error!!!")
            })
        
    }


    componentDidUpdate()
    {
        axios
            .post('/comics/readcomic',{comicName : this.state.comicName, chapter : this.state.chapter})
            .then(res => {
                this.setState({datacomic : res.data})
            })
            .catch(err => {
                console.log('err is ',err)
            })

        
    }



    ClickPreviouschapter ()
    {
        this.setState({chapter : parseInt(this.state.chapter) - 1});
    }


    ClickNextchapter ()
    {
        this.setState({chapter : parseInt(this.state.chapter) + 1});
    }


    render() {
    return (
        <div>
            <div className="container" style={{width:"80%"}}>
            
            <br />
            <ComicNav 
                comicName={this.state.comicName} 
                chapter={this.state.chapter} 
                onclickprevious = {this.ClickPreviouschapter}
                onclicknext = {this.ClickNextchapter}
             countchapter = {this.stacountchapter}/>
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

