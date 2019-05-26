import React from 'react';

const recentUpload = (props) => {
    var url = "/detail" + "?" + "c=" + props.comicName;
    return (
        <div className="row">
            <div className="col m12 s12">
                <div className="card hoverable horizontal">
                    <div className="card-image valign-wrapper">
                        <a href={url}><img src={props.comicPic} alt="tt" style={{width:"200px"}} /></a>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p style={{textAlign:'justify'}}>{props.comicDes}</p>
                        </div>
                        <div className="card-action right-align">
                            <b><a href={url} className="cyan-text text-darken-4">Đọc thêm ...</a></b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default recentUpload;