import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Hello from './components/hello';

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hello" component={Hello} />
        </Switch>
      </div>
    );
  }
}
