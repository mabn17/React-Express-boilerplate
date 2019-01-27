import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

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
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Logga in
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Registrera
          </Link>
        </li>
      </ul>
    );
    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Användare
          </Link>
        </li>
        <li className="nav-item">
          <button type="button" onClick={this.logout.bind(this)} className="nav-link">
            Logga ut
          </button>
        </li>
      </ul>
    );

    /**
     * TODO: Move routes to a congig fil and forEach them insted of
     * doing more of li > Link > text
     */
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
            <li>
              <Link to="/" className="nav-link">
                Hem
              </Link>
            </li>
            <li>
              <Link to="/hello" className="nav-link">
                Hello World
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    );
  };
}

export default withRouter(Navbar);
