import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import TopComic from './TopComic.js';
import RecentUpload from './RecentUpload.js';
import Storybroad from './Components/Storybroad/Storybroad.js';
import ReadComic from './Components/ReadComic/ReadComic.jsx';
import Signup from './Components/Signup/Signuppage.jsx';
import Signin from './Components/Signin/Signinpage.jsx';


class App extends Component {
  render() {
    return (
      <div>
      <div className='container'>
        <nav className='grey darken-3'>
        <div className='brand-logo'>
          <ul className='right'>
            <li><b>Comic VN</b></li>
            <li><img src={"logo.png"} alt="logo" width = "65px" height = "65px"/></li>
          </ul>
          </div>
          <ul className='right'>
            <li><a href='#'>Login</a></li>
            <li>
            <form>
                <input id="search" type="search" required />
            </form>
            </li>
          </ul>
        </nav>
        {<ReadComic comicName = "Naruto" chapter ="1"/>}
        {/*<Storybroad/>*/}
        
      </div>
      <div>
      <footer className="page-footer grey darken-3">
          <div className="row">
            <div className="col m6">
              <h5 className="white-text">Group 34</h5>
              <p className="white-text">This is a group assignment for TTCNPM by Group 34</p>
            </div>
            <div className="col m6">
              <h5 className="white-te">Member</h5>
              <ul>
                <li><p className="white-text">Trương Như Bảo</p></li>
                <li><p className="white-text">Nguyễn Văn Sơn</p></li>
                <li><p className="white-text">Đặng Công Khải</p></li>
                <li><p className="white-text">Lê Hoàng Kim</p></li>
                <li><p className="white-text">Nguyễn An Khang</p></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
      </div>
    );
  }
}

export default App;
