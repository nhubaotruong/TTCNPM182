import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <nav className='grey darken-3'>
          <div className='brand-logo'><b>Comic VN</b></div>
          <ul className='right'>
            <li><a href='#'>Login</a></li>
            <li>
            <form>
                <input id="search" type="search" required />
            </form>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
