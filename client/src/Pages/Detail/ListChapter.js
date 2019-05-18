import React, { Component } from 'react';
import ChapterCell from './ChapterCell';
import { type } from 'os';

class ListChapter extends Component {
	showListChapter = () => {
        if(this.props.comic.data != null){
            if(this.props.comic.data.length>0){
                return this.props.comic.data.map((e,i)=>{
                        return <tr><td><ChapterCell name={"Chapter " + (i+1) + ": " + e.chapter} chapterNum={e.chapterNum} comicName={this.props.comic.comicName} date="19/04/2019"/></td></tr>
                })
            }
        }
	}
    render() {
        return (
            <div>
                <table>
                    <thead>
                            <th className="text1">Danh sách các Chapters của truyện</th>
                    </thead>
                    <tbody style={{fontSize: "18px"}}>
                        {
                            this.showListChapter()
                        }
                    </tbody>
                </table>   
            </div>
        );
    }
}

export default ListChapter;
