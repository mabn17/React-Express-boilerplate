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
    this.draw = this.draw.bind(this);
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

  draw(id, value, type) {
    return (
      <div className="form-group">
        <label htmlFor={id} key={id}>
          {value}
          <input
            type={type}
            className="form-control"
            name={id}
            value={this.state[id]}
            onChange={this.onChange}
          />
        </label>
      </div>
    );
  }

  render = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form onSubmit={this.onSubmit}>
            {this.draw('email', 'Mejl', 'email', this.state.email, this.onChange)}
            {this.draw('password', 'Lösenord', 'password', this.state.password, this.onChange)}
            {this.state.errors}
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Logga in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
