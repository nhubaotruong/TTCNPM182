import React, { Component } from 'react';
class Comment extends Component {
    render() {
        return (
            <div class="container con">
                <table class="">
                    <thead>
                        <tr>
                            <th className="left text1">Bình luận và Nhận xét</th>
                        </tr>   
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text2">
                                <a href="#"> Vô Cực-5</a>
                                <span className="fl">17/04/2019</span>
                            </td>
                        </tr>
                    </tbody>
                </table>   
            </div>
        );
    }
}

export default Comment;
