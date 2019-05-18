import React, { Component } from 'react';
import ChapterCell from './ChapterCell';
import { type } from 'os';

class ListChapter extends Component {
	showListChapter = () => {
        if(this.props.comic.data != null){
            if(this.props.comic.data.length>0){
                return this.props.comic.data.map((e,i)=>{
                        return <tr><td><ChapterCell name={"Chapter " + (i+1) + ": " + e.chapter} link={e.link} date="19/04/2019"/></td></tr>
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
                        {/* <tr>
                            <td>
                                <ChapterCell name="Vô Cực-5" date="19/04/2019"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ChapterCell name="Vô Cực-4" date="11/04/2019"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ChapterCell name="Vô Cực-3" date="05/04/2019"/>
                            </td>
                        </tr>                        <tr>
                            <td>
                                <ChapterCell name="Vô Cực-2" date="28/03/2019"/>
                            </td>
                        </tr>                        <tr>
                            <td>
                                <ChapterCell name="Vô Cực-1" date="22/03/2019"/>
                            </td>
                        </tr>                        <tr>
                            <td>
                                <ChapterCell name="Đến Ánh Quang-2" date="16/03/2019"/>
                            </td>
                        </tr>                        <tr>
                            <td>
                                <ChapterCell name="Đến Ánh Quang-1" date="10/03/2019"/>
                            </td>
                        </tr>                        <tr>
                            <td>
                                <ChapterCell name="Đến Tận Cùng-2" date="04/03/2019"/>
                            </td>
                        </tr>                        <tr>
                            <td>
                                <ChapterCell name="Đến Tận Cùng-1" date="27/02/2019"/>
                            </td>
                        </tr> */}
                    </tbody>
                </table>   
            </div>
        );
    }
}

export default ListChapter;
