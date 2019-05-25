import React from 'react';

const chaptercell = (props) => {
    const href = "/readComic?c=" + props.chapterNum  + "?c1=" + props.comicName; 
    return(
        <div className="row" style={{marginBottom:"0"}}>
            <div className="col m10" style={{padding:"0"}}><a href={href} className="light-blue-text text-darken-4">{props.name}</a></div>
            <div className="right-align col m2 light-blue-text text-darken-4" style={{padding:"0"}}>{props.date}</div>
        </div>
    );
}

export default chaptercell;