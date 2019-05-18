import React, { Component } from 'react';
import './Detail.css';



class resultcell extends Component {
    render() {
        var url = "/detail?c=" + this.props.name;
        return (
            <div>
                <table className="valign-wrapper" style={{border:"none"}}>
                    <tr>
                    <td><a href={url}><img src={this.props.comicPic} alt="comicPic" style={{width:"180px"}}/></a></td>
                    <td>
                        <div className="padd">
                        <a className="text-link" href={url}>{this.props.name}</a>
                        <p className="content-text">
                            {this.props.context}
                        </p>
                        </div>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default resultcell;