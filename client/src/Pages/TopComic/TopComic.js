import React from 'react';

const topComic = (props) => {
    var url = "/detail" + "?" + "c=" + props.comicName;
    return (
        <div>
                <div className="col m3 s12">
                    <div className="card hoverable">
                        <div className="card-image">
                            <img src={props.comicPic} alt="tt" width="200px" height="350px"/>
                        </div>
                        <div className="card-content">
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