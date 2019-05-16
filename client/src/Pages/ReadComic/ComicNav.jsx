import React from 'react';

const readcomic = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col m4 right-align">
                    <button className="btn btn-flat pink lighten-5 black-text">Previous chapter</button>
                </div>
                <div className="col m4 center-align">
                    {props.comicName}
                </div>
                <div className="col m4">
                    <button className="btn btn-flat pink lighten-5 black-text">Next chapter</button>
                </div>
            </div>
            <div className="center-align">Chapter {props.chapter}</div>
        </div>
    );
}

export default readcomic;