import React from 'react';
import './ComicBox.scss';
import LazyLoad from 'react-lazyload';

const readcomic = (props) => {
    return (
        <div>
            <LazyLoad height={1050}>
                <img src={props.pic} alt="comic" className="centerer"/>
            </LazyLoad>
        </div>
    );
}

export default readcomic;