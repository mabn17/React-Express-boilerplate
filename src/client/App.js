import React, { Component } from 'react';
import './app.css';
import TenImage from './ten.jpg';

export default class App extends Component {
  state = { username: null };

  /**
   * Example of how React can fetch the data from ouer backend.
   */
  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <h2>By Grupp</h2>
        <img src={TenImage} alt="react" />
      </div>
    );
  }
}
