import React from 'react';

const recentUpload = (props) => {
    var url = "/detail" + "?" + "c=" + props.comicName;
    return (
        <div className="row">
            <div className="col m12 s12">
                <div className="card hoverable horizontal">
<<<<<<< HEAD
                    <div className="card-image valign-wrapper">
                        <a href={url}><img src={props.comicPic} alt="tt" style={{width:"200px"}} /></a>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p style={{textAlign:'justify'}}>{props.comicDes}</p>
=======
                    <div className="card-image">
                        <img src={props.comicPic} alt="tt" style={{width:"200px"}} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>{props.comicDes}</p>
>>>>>>> 52d4f5a2590c2ca04bcdd2a27dd1923742f98433
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