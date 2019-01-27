import React, { Component } from 'react';
import { registerUser } from '../models/UserMethods';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };

    registerUser(user).then((res) => {
      if (res) {
        this.props.history.push('/profile');
      }
    });
  }

  // Make it cleaner with for loop?
  render = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="first_name">
                Förnamn
                <input
                  type="first_name"
                  className="form-control"
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="last_name">
                Efternamn
                <input
                  type="last_name"
                  className="form-control"
                  name="last_name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Mejl adress
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Lösenord
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Logga in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
