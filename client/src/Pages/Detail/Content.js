import React, { Component } from 'react';
import "./Content.css";
class Content extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className="text1">Mô tả nội dung</th>
                        </tr>   
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text2" style={{textAlign:"justify"}}>{this.props.comic.description}</td>
                        </tr>
                    </tbody>
                </table>   
            </div>
        );
    }
}

export default Content;
