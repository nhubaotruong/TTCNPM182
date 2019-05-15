import React, { Component } from 'react';
import "./Detail.css";
import ComicDetail from './ComicDetail';
class Detail extends Component {
    render() {
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
                            <td><img id="comicPic" src="logo.png" /></td>
                            <td>
                                <ComicDetail rating="4/5(10 lượt đánh giá)" 
                                             author={this.props.comic.author} artist={this.props.comic.artist} 
                                             genre="Comic hành động-Action, Quân sự- Military, Ly kỳ- Thriller, Siêu nhiên- Super Natural, Huyền ảo- Magical" p
                                             ublisher="Chưa rõ" 
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
