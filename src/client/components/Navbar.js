import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import navigation from '../../../config/navbar/config';

class Navbar extends Component {
  logout(e) {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push('/');
  }

  render = () => {
    const loginRegLink = navigation.loginRegLink.map(part => (
      <li key={part.url + part.name} className="nav-item">
        <Link to={part.url} className="nav-link">
          {part.name}
        </Link>
      </li>
    ));
    const userLink = (
      <div className="d-flex">
        {navigation.userLink.map(part => (
          <li key={part.url + part.name} className="nav-item">
            <Link to={part.url} className="nav-link">
              {part.name}
            </Link>
          </li>
        ))}
        <li className="nav-item">
          <button
            type="button"
            onClick={this.logout.bind(this)}
            className="nav-link bg-dark border-0"
          >
            Logga ut
          </button>
        </li>
      </div>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-4">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
          <ul className="navbar-nav">
            {navigation.mainItems.map(navLink => (
              <li key={navLink.url + navLink.name} className="nav-item">
                <Link to={navLink.url} className="nav-link">
                  {navLink.name}
                </Link>
              </li>
            ))}
            {localStorage.usertoken ? userLink : loginRegLink}
          </ul>
        </div>
      </nav>
    );
  };
}

export default withRouter(Navbar);
