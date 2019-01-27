import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

// Current Index, change to IndexP later
import Home from './components/HomeTstApi';
import IndexP from './components/IndexP'; // Done
import HelloWorld from './components/Hello'; // Testing React-Route
import FoF from './components/Fof';

// import Footer from './components/Footer';

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/i/:s" component={IndexP} />
          <Route path="/hello" component={HelloWorld} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route component={FoF} />
        </Switch>
      </div>
    );
  }
}
