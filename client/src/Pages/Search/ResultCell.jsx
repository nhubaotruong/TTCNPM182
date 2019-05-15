import React from 'react';
import './Detail.css';

const resultcell = (props) => {
    return (
        <div>
            <table style={{border:"none"}}>
                <tr>
                <td><img src={props.comicPic} alt="comicPic" style={{width:"180px"}}/></td>
                <td>
                    <div className="padd">
                    <a className="text-link" href={props.link}>{props.name}</a>
                    <p className="content-text">
                        {props.context}
                    </p>
                    </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default resultcell