import React from 'react';

const topComic = (props) => {
    var url = "/detail" + "?" + "c=" + props.comicName;
    return (
        <div>
                <div className="col m3 s12">
                    <div className="card hoverable">
                        <div className="card-image">
                            <a href={url}><img src={props.comicPic} alt="tt" width="200px" height="350px"/></a>
                        </div>
                        <div className="card-content" style={{padding:'15px'}}>
                            <p>{props.comicName}</p>
                        </div>
                        <div className="card-action">
                            <b><a href={url} className="cyan-text text-darken-4" >Đọc thêm ...</a></b>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default topComic;