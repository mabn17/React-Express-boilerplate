import React, { Component } from 'react';

export default class FoF extends Component {
  componentDidMount() {
    document.title = 'React Route Test';
  }

  render = () => (
    <header className="py-4 my5">
      <h2 className="text-danger">
        404 - Page Not Found
        {`: ${this.props.msg}` || ''}
      </h2>
    </header>
  );
}
