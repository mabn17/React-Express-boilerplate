import React, { Component } from 'react';
/* eslint-disable camelcase */
import jwt_decode from 'jwt-decode';
/* eslint-enable camelcase */

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: ''
    };

    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    });
  }

  draw(name, value) {
    return (
      <tr>
        <td>{name}</td>
        <td>{this.state[value]}</td>
      </tr>
    );
  }

  render = () => (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1>Profil</h1>
      </div>
      <table className="table col-md-6 mx-auto">
        <tbody>
          {this.draw('Förnamn', 'first_name')}
          {this.draw('Efternamn', 'last_name')}
          {this.draw('Mejl', 'email')}
        </tbody>
      </table>
    </div>
  );
}
