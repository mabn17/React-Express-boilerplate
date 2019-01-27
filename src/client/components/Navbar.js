import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import navigation from '../../../config/navbar/config';

class Navbar extends Component {
  logout(e) {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    // Checkout Must use destructuring props assignment
    // & 'history' is missing in props validation

    /* eslint-disable */
    this.props.history.push('/');
    /* eslint-endable */
  }

  render = () => {
    const loginRegLink = (
      <ul className="navbar-nav">
        {navigation.loginRegLink.map(part => (
          <li key={part.url + part.name} className="nav-item">
            <Link to={part.url} className="nav-link">
              {part.name}
            </Link>
          </li>
        ))}
      </ul>
    );
    const userLink = (
      <ul className="navbar-nav">
        {navigation.userLink.map(part => (
          <li key={part.url + part.name} className="nav-item">
            <Link to={part.url} className="nav-link">
              {part.name}
            </Link>
          </li>
        ))}
        <li className="nav-item">
          <button type="button" onClick={this.logout.bind(this)} className="nav-link">
            Logga ut
          </button>
        </li>
      </ul>
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
            {navigation.mainItems.map(part => (
              <li key={part.url + part.name} className="nav-item">
                <Link to={part.url} className="nav-link">
                  {part.name}
                </Link>
              </li>
            ))}
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    );
  };
}

export default withRouter(Navbar);
