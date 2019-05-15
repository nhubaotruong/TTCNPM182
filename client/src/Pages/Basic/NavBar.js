import React from 'react';

const navbar = () => {
    return (
    <nav className='grey darken-3'>
        <div className='brand-logo'>
          <ul className='right'>
            <li><b>Comic VN</b></li>
            <li><a href='./home' style={{padding: '0'}}><img src={"logo.png"} alt="logo" height = "63px"/></a></li>
          </ul>
          </div>
          <ul className='right'>
            <li><a href='./signin' id="login">Login</a></li>
            <li>
            <ul>
              <li><input type="search" results="5" autoSave="some_unique_value" name="s" autoComplete="off" aria-label="Search box" placeholder=" Search..." className="white-text"/></li>
              <li><i className="material-icons search-icon">search</i></li>
                    
            </ul> 
            </li>
          </ul>
     </nav>);
}
export default navbar;