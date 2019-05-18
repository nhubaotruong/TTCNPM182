import React from 'react';
import './Breadcrumbs.scss';

const breadcrumb = (props) => {
    return (
        <nav id="breadcrumbs">
        <div class="nav-wrapper">
          <div class="col s12 grey darken-3 white-text">
            <a href="#!" class="breadcrumb">Home</a>
            <a href="#!" class="breadcrumb">{props.second}</a>
          </div>
        </div>
        </nav>
    );
}
export default breadcrumb;