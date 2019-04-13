import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import MaterialIcon, {colorPalette} from 'material-icons-react';

const topComic = (props) => {
    return (
        <div>
                <div className="col m3 s12">
                    <div className="card hoverable">
                        <div className="card-image">
                            <img src={props.comicPic} alt="tt" />
                        </div>
                        <div className="card-content">
                            <p>{props.comicName}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">Read more ...</a>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default topComic;