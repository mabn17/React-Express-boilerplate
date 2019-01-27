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

  render = () => (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1>Profil</h1>
      </div>
      <table className="table col-md-6 mx-auto">
        <tbody>
          <tr>
            <td>Förnamn</td>
            <td>{this.state.first_name}</td>
          </tr>
          <tr>
            <td>Efternamn</td>
            <td>{this.state.last_name}</td>
          </tr>
          <tr>
            <td>Mejl</td>
            <td>{this.state.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
