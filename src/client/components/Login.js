import React, { Component } from 'react';
import { loginUser } from '../models/UserMethods';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // stackoverflow.com/questions/50376353/
  // why-we-need-to-put-e-target-name-in-square-brackets
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    loginUser(user)
      .then((res) => {
        if (res) {
          this.props.history.push('/profile');
        }
      })
      .catch(() => {
        this.setState({ errors: 'Invalid email or password' });
      });
  }

  // Make it cleaner with for loop?
  render = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form onSubmit={this.onSubmit}>
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
              {this.state.errors}
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
