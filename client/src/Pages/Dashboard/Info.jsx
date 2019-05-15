import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import MaterialIcon, {colorPalette} from 'material-icons-react';


const Info = (props) =>
{
	return (
        <div className="col m5 s12">
        <div className="card hoverable">
          <div className="card-image">
            <img src={props.comicPic}/>
            <a className="btn-floating halfway-fab waves-effect waves-light red" href="#">
              <i className="material-icons ">close</i>
            </a>
          </div>
          <div className="card-content">
            <span className="card-title black-text text-darken-2 b">{props.comicName}</span>
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
        </div>
      </div>
		
	);
}

document.addEventListener('DOMContentLoaded', function() {
	var elem = document.querySelector('.tabs'); 
	var instance = M.Tabs.init(elem, {});
	
      });
export default Info;