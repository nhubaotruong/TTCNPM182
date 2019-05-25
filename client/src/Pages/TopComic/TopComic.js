import React from 'react';

const topComic = (props) => {
    var url = "/detail" + "?" + "c=" + props.comicName;
    return (
        <div>
                <div className="col m3 s12">
                    <div className="card hoverable">
                        <div className="card-image">
<<<<<<< HEAD
                            <a href={url}><img src={props.comicPic} alt="tt" width="200px" height="350px"/></a>
                        </div>
                        <div className="card-content" style={{padding:'15px'}}>
=======
                            <img src={props.comicPic} alt="tt" width="200px" height="350px"/>
                        </div>
                        <div className="card-content">
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
                            <p>{props.comicName}</p>
                        </div>
                        <div className="card-action">
                            <a href={url}>Read more ...</a>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default topComic;