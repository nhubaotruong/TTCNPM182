import React from 'react';

<<<<<<< HEAD


const readcomic = (props) => {
    const jumpToTop = () => {
        window.scrollTo(0, 0);
    }
=======
const readcomic = (props) => {
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
    return (
        <div>
            <div className="row">
                <div className="col m4 right-align">
<<<<<<< HEAD
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
=======
                    {(props.chapter > 1)?<button className="btn btn-flat pink lighten-5 black-text" onClick = {props.onclickprevious} >Previous chapter</button>:""}
                </div>
                <div className="col m4 center-align">
                    {props.comicName}
                </div>
                <div className="col m4">
                    <button className="btn btn-flat pink lighten-5 black-text" onClick = {props.onclicknext}>Next chapter</button>
                </div>
            </div>
            <div className="center-align">Chapter {props.chapter}</div>
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
        </div>
    );
}

export default readcomic;