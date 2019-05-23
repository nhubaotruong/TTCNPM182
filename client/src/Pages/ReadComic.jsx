import React,{Component} from 'react';
import Header from './Basic/NavBar';
import Footer from './Basic/Footer';
import ComicBox from './ReadComic/ComicBox';
import ComicNav from './ReadComic/ComicNav';
import SumComment from '../Pages/Comment/SumComment';
import axios from 'axios';




export default class readcomic extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            comicName : "",
            chapterNum : 1,
            chapterName: "",
            datacomic : []
        };
        this.ClickPreviouschapter = this.ClickPreviouschapter.bind(this)
        this.ClickNextchapter = this.ClickNextchapter.bind(this)
    }

    componentDidMount(){
        var url = window.location.href;
        var index1 = url.indexOf("=");
        var index_temp = url.indexOf("?",index1);
        var index2 = url.indexOf("=",index1+1);

        var chapterNum = url.slice(index1+1,index_temp);
        var comicName = url.slice(index2+1,url.length);
        this.setState({
            comicName : comicName,
            chapterNum : chapterNum
        })
        axios
            .post('/comics/readcomic',{comicName : comicName, chapter : chapterNum})
            .then(res => {
                this.setState({datacomic : res.data.link,chapterName : res.data.chapter});
            })
            .catch(err => {
                console.log('err is ',err)
                // console.log("cc")
            })
        
    }


    componentDidUpdate()
    {
        axios
            .post('/comics/readcomic',{comicName : this.state.comicName, chapter : this.state.chapterNum})
            .then(res => {
                this.setState({datacomic : res.data.link , chapterName : res.data.chapter});
            })
            .catch(err => {
                console.log('err is ',err)
            })
    }



    ClickPreviouschapter ()
    {
        this.setState({chapterNum : parseInt(this.state.chapterNum) - 1});
    }


    ClickNextchapter ()
    {
        this.setState({chapterNum : parseInt(this.state.chapterNum) + 1});
    }


    render() {
        return (
            <div>
                <div className="container" style={{width:"80%"}}>
                <Header />
                <br />
                <ComicNav 
                    comicName={this.state.comicName} 
                    chapterNum={this.state.chapterNum} 
                    chapterName={this.state.chapterName}
                    onclickprevious = {this.ClickPreviouschapter}
                    onclicknext = {this.ClickNextchapter}
                    bottom={false} />
                <br/><br/>
                
                {
                    this.state.datacomic.map((data) =>
                        <ComicBox pic= {data} />
                    )
                }
                <br />
                <ComicNav 
                    comicName={this.state.comicName} 
                    chapterNum={this.state.chapterNum} 
                    chapterName={this.state.chapterName}
                    onclickprevious = {this.ClickPreviouschapter}
                    onclicknext = {this.ClickNextchapter}
                    bottom={true} />           

                <br />
                </div>
                <SumComment ComicName = {this.state.comicName} key = {this.state.comicName}/>
                <br/>

                <Footer />
            </div>
        );
    }
}

