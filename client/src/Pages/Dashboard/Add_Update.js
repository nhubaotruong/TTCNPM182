import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import Add from './Add';
import Update from './Update';

const add_update = () => {
	return (
        <div className="row">
            <div className="col s12">
                <ul className="tabs" id="hihi">
                    <li className="tab col s6"><a className="active" href="#add">Add Comics</a></li>
                    <li className="tab col s6"><a href="#update">Update Comics</a></li>
                </ul>
            </div>
            <div>
            <div id="add" className="col s12 tab-content">
                <Add/>
            </div>
            <div id="update" className="col s12 tab-content">
                <Update/>
            </div>
            </div>
        </div>
    );
	}
document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('#hihi'); 
    var instance = M.Tabs.init(elem, {});
    console.log(instance);
  });

export default add_update;