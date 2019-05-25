import React from 'react';



const readcomic = (props) => {
    const jumpToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div>
            <div className="row">
                <div className="col m4 right-align">
                    {(props.chapterNum > 1)?<button className="btn btn-flat grey darken-3 white-text" onClick = {()=>{props.onclickprevious();jumpToTop()}} >Previous chapter</button>:""}
                </div>
                <div className="col m4 center-align">
                    {(!props.bottom) ?<h3 style={{marginTop:'0', marginBottom:'0'}}>{props.comicName}</h3> : ""}
                </div>
                <div className="col m4">
                    {(props.chapterNum < props.countchapter)?<button className="btn btn-flat grey darken-3 white-text" onClick = {()=>{props.onclicknext();jumpToTop()}}>Next chapter</button>:""}

                </div>
            </div>
            <div className="center-align"><h5>Chapter {props.chapterNum}</h5></div>
            {(!props.bottom) ? <div className="center-align"><h5>{props.chapterName}</h5></div> : ""}
        </div>
    );
}

export default readcomic;