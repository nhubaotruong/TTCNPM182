import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Storyboard from './Pages/Storyboardpage';
import Dashboard from './Pages/Dashboard/Dashboard';
import Detail from './Pages/Detail';
import Search from './Pages/Searchpage';
import Signin from './Pages/Signinpage';
import Signup from './Pages/Signuppage';
import ReadComic from './Pages/ReadComic';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/home" component={Homepage}/>
            <Route exact path="/storyboard" component={Storyboard} />
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/readcomic" component={ReadComic} />
            <Redirect to="/home" />
          </Switch>
        </Router>
    );
  }
}

export default App;