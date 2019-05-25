import React from 'react';
import './ComicBox.scss';

const readcomic = (props) => {
    return (
        <div>
            <img src={props.pic} alt="comic" className="centerer"/>
            
        </div>
    );
}

export default readcomic;