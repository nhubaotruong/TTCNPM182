import React from 'react';

const recentUpload = (props) => {
    var url = "/detail" + "?" + "c=" + props.comicName;
    return (
        <div className="row">
            <div className="col m12 s12">
                <div className="card hoverable horizontal">
                    <div className="card-image">
                        <img src={props.comicPic} alt="tt" style={{width:"200px"}} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>{props.comicDes}</p>
                        </div>
                        <div className="card-action right-align">
                            <a href={url}>Read more...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default recentUpload;