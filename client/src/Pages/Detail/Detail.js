import React, { Component } from 'react';
import "./Detail.css";
import ComicDetail from './ComicDetail';
class Detail extends Component {
    render() {
        var kind = this.props.comic.kind;
        var str_kind = "";
        for(var x in kind){
            str_kind += kind[x] + ", "
        }
        var str_kind1 = str_kind.substring(0,str_kind.length-2);
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className="text1">{this.props.comic.comicName}</th>
                        </tr>   
                    </thead>
                    <tbody>
                        <tr>
                            <td><img id="comicPic" src={this.props.comic.avatar} /></td>
                            <td>
                                <ComicDetail rating="4/5(10 lượt đánh giá)" 
                                             author={this.props.comic.author} artist={this.props.comic.artist} 
                                             genre={str_kind1} p
                                             publisher={this.props.comic.company}
                                             status="Chưa rõ"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            
        );
    }
}

export default Detail;
