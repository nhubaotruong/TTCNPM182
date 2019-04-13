import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

const recentUpload = (props) => {
    return (
        <div className="row">
            <div className="col m12 s12">
                <div className="card hoverable horizontal">
                    <div className="card-image">
                        <img src={props.comicPic} alt="tt" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>{props.comicDes}</p>
                        </div>
                        <div className="card-action right-align">
                            <a href="">Read more...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default recentUpload;