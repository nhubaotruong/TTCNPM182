import React from 'react';

const readcomic = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col m4 right-align">
                    {(props.chapter > 1)?<button className="btn btn-flat pink lighten-5 black-text" onClick = {props.onclickprevious} >Previous chapter</button>:""}
                </div>
                <div className="col m4 center-align">
                    {props.comicName}
                </div>
                <div className="col m4">
                    {(props.chapter < props.maxchapter)?<button className="btn btn-flat pink lighten-5 black-text" onClick = {props.onclicknext} >Next chapter</button>:""}
                </div>
            </div>
            <div className="center-align">Chapter {props.chapter}</div>
        </div>
    );
}

export default readcomic;