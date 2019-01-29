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
    this.draw = this.draw.bind(this);
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
        this.props.history.push('/login');
      }
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
            {this.draw('first_name', 'Förnamn', 'text', this.state.first_name, this.onChange)}
            {this.draw('last_name', 'Efternamn', 'text', this.state.last_name, this.onChange)}
            {this.draw('email', 'Mejl', 'email', this.state.email, this.onChange)}
            {this.draw('password', 'Lösenord', 'password', this.state.email, this.onChange)}
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Registrera
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
