import React from 'react';

const chaptercell = (props) => {
    return(
        <div className="row" style={{marginBottom:"0"}}>
            <div className="col m10" style={{padding:"0"}}><a href="#">{props.name}</a></div>
            <div className="right-align col m2" style={{padding:"0"}}>{props.date}</div>
        </div>
    );
}

export default chaptercell;